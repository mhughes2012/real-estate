import { Property } from "@/types";
import { getOathToken, getMember, getActiveListings } from "@/utils/auth";

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
    ],
    type: "Apartment",
    listingType: "sale",
    status: "Active",
    subDivision: ""
  },
  {
    id: "2",
    mlsId: "V7654321",
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
    subDivision: ""
  },
];

export async function getProperties(): Promise<Property[]> {
  return fetchRealTimeListings();
}

function cleanDescription(description?: string): string | undefined {
  return description?.replace(/\s*\(id:\d+\)\s*$/i, "").trim();
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return listings.map((item: any) => {
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

      console.log('item', item);

      return {
        id: item.ListingKey || item.ID || Math.random().toString(),
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
        images: images.length > 0 ? images : ["/images/property-placeholder.jpg"],
        type: item.PropertySubType || "Residential",
        listingType: 'sale',
        status: 'Active',
        subDivision: item.SubdivisionName || "N/A",
        description: cleanDescription(item.PublicRemarks)

    };
    });
  } catch (error) {
    console.error("Error fetching real-time listings from CREA DDF:", error);
    // Fallback to mock data for demo purposes if the API fails or is not configured
    return MOCK_PROPERTIES;
  }
}

export async function getPropertyById(id: string): Promise<Property | undefined> {
  const properties = await getProperties();
  return properties.find((p) => p.id === id);
}
