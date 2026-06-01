import { Property } from "@/types";
import { getOathToken, getMember, getActiveListings, getListingByKey } from "@/utils/auth";

// Mock data for initial development
const MOCK_PROPERTIES: Property[] = [
  {
    id: "1",
    mlsId: "A2302920",
    title: "Beltline Apartment",
    price: 239999,
    address: {
      street: "905, 733 14 Avenue SW",
      city: "Calgary",
      province: "AB",
      postalCode: "T2R 0W1",
      full: "905, 733 14 Avenue SW",
    },
    beds: 1,
    baths: 1,
    sqft: 615,
    images: [
      "https://cdn.realtor.ca/listings/TS639120467633400000/reb9/highres/0/A2302920_1.jpg",
      "https://cdn.realtor.ca/listings/TS639120467633400000/reb9/highres/0/A2302920_2.jpg",
      "https://youriguide.com/24_citadel_close_nw_calgary_ab/",
    ],
    type: "Apartment",
    listingType: "sale",
    status: "Active",
    subDivision: "Beltline"
  },
  {
    id: "2",
    mlsId: "A2285375",
    title: "Arbour Lake House",
    price: 899900,
    address: {
      street: "49 Arbour Crest Heights NW",
      city: "Calgary",
      province: "AB",
      postalCode: "T3G 5A3",
      full: "49 Arbour Crest Heights NW",
    },
    beds: 1,
    baths: 3.5,
    sqft: 1466,
    images: [
      "https://cdn.realtor.ca/listings/TS639064099439470000/reb9/highres/5/A2285375_1.jpg",
      "https://cdn.realtor.ca/listings/TS639064099436400000/reb9/highres/5/A2285375_2.jpg",
    ],
    type: "House",
    listingType: "sale",
    status: "Active",
    subDivision: "Arbour Lake"
  },
  {
    id: "3",
    mlsId: "A2312053",
    title: "Silver Springs Detached",
    price: 649900,
    address: {
      street: "275 Silverview Way NW",
      city: "Calgary",
      province: "AB",
      postalCode: "T3B 3K4",
      full: "275 Silverview Way NW",
    },
    beds: 4,
    baths: 3,
    sqft: 1200,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070",
    ],
    type: "House",
    listingType: "sale",
    status: "Active",
    subDivision: "Silver Springs"
  },
];

export async function getProperties(): Promise<Property[]> {
  try {
    const properties = await fetchRealTimeListings();
    return properties.length > 0 ? properties : MOCK_PROPERTIES;
  } catch (error) {
    console.error("Error in getProperties:", error);
    return MOCK_PROPERTIES;
  }
}

function cleanDescription(description?: string): string | undefined {
  return description?.replace(/\s*\(id:\d+\)\s*$/i, "").trim();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapListingToProperty(item: any): Property {
  // Address mapping
  const street = `${item.StreetNumber || ""} ${item.StreetName || ""} ${item.StreetSuffix || ""}`.trim();
  const city = item.City || "";
  const province = item.StateOrProvince || "";
  const postalCode = item.PostalCode || "";
  const fullAddress = item.UnparsedAddress || `${street}, ${city}, ${province} ${postalCode}`.trim();

  // Media/Photos mapping
  // CREA DDF OData often provides media in a 'Media' collection or 'Photos' array
  let images: string[] = [];
  if (Array.isArray(item.Media)) {
    images = item.Media
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((m: any) => m.MediaCategory === 'Property Photo' || m.MediaCategory === 'PropertyPhoto' || m.MediaURL)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((m: any) => m.MediaURL);
  } else if (Array.isArray(item.Photos)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    images = item.Photos.map((p: any) => typeof p === 'string' ? p : p.URL);
  }

  return {
    id: item.ListingKey || item.ID || item.ListingId || (item.UnparsedAddress ? `fallback-${item.UnparsedAddress.replace(/\s+/g, '-')}` : `mock-${item.MlsNumber || 'id'}`),
    mlsId: item.ListingId || item.MlsNumber || "N/A",
    title: item.PublicRemarks ? (item.PublicRemarks.substring(0, 50) + "...") : (item.PropertySubType || "Real Estate Listing"),
    price: item.ListPrice || 0,
    address: {
      street,
      city,
      province,
      postalCode,
      full: fullAddress,
    },
    beds: item.BedroomsTotal || 0,
    baths: item.BathroomsTotalInteger || 0,
    sqft: item.AboveGradeFinishedArea || 0,
    images: images.length > 0 ? images : ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070"],
    type: item.PropertySubType || "Residential",
    listingType: 'sale',
    status: 'Active',
    subDivision: item.SubdivisionName || "N/A",
    description: cleanDescription(item.PublicRemarks)
  };
}

/**
 * Fetches real-time data from CREA DDF API using OData.
 */
export async function fetchRealTimeListings(): Promise<Property[]> {
  try {

    // 1. Get OAuth Token
    const accessToken = await getOathToken();

    // 2. Fetch Member details to get the agent's ID
    const member = await getMember(accessToken);

    // 3. Fetch active listings for this agent
    const listings = await getActiveListings(accessToken, member.MemberKey);

    // 4. Map CREA DDF OData response to our Property interface
    return listings.map(mapListingToProperty);
  } catch (error) {
    console.error("Error fetching real-time listings from CREA DDF:", error);
    // Fallback to mock data for demo purposes if the API fails or is not configured
    return MOCK_PROPERTIES;
  }
}

/**
 * Fetches all office listings from CREA DDF API.
 */
export async function fetchOfficeListings(): Promise<Property[]> {
  try {
    const accessToken = await getOathToken(
      process.env.OFFICE_CLIENT_ID,
      process.env.OFFICE_CLIENT_SECRET
    );

    // 1. Fetch Member details to get the office ID
    const member = await getMember(accessToken);

    // 2. Fetch all active listings for this office
    // We use the OfficeKey from the member record
    const listings = await getActiveListings(accessToken, undefined, member.OfficeKey);

    return listings.map(mapListingToProperty);
  } catch (error) {
    console.error("Error fetching office listings from CREA DDF:", error);
    return MOCK_PROPERTIES;
  }
}

export async function getPropertyById(id: string): Promise<Property | undefined> {
  try {
    // 1. Try with agent credentials first
    const accessToken = await getOathToken();
    const listing = await getListingByKey(accessToken, id);
    
    if (listing) {
      return mapListingToProperty(listing);
    }
  } catch (error) {
    console.error("Error fetching property by ID from CREA DDF (Agent Feed):", error);
  }

  try {
    // 2. Try with office credentials
    const officeToken = await getOathToken(
      process.env.OFFICE_CLIENT_ID,
      process.env.OFFICE_CLIENT_SECRET
    );
    const listing = await getListingByKey(officeToken, id);
    
    if (listing) {
      return mapListingToProperty(listing);
    }
  } catch (error) {
    console.error("Error fetching property by ID from CREA DDF (Office Feed):", error);
  }

  // Fallback: Check featured listings, then office listings (which includes mocks)
  const featured = await getProperties();
  const featuredMatch = featured.find((p) => p.id === id);
  if (featuredMatch) return featuredMatch;

  const office = await fetchOfficeListings();
  return office.find((p) => p.id === id);
}
