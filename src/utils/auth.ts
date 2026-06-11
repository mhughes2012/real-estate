import { CREAMember } from "@/types";

export async function getOathToken(clientId?: string, clientSecret?: string): Promise<string> {
  const client_id = clientId || process.env.CREA_CLIENT_ID || process.env.CLIENT_ID;
  const client_secret = clientSecret || process.env.CREA_CLIENT_SECRET || process.env.CLIENT_SECRET;

  if (!client_id || !client_secret) {
    console.error("Missing CREA_CLIENT_ID/CLIENT_ID or CREA_CLIENT_SECRET/CLIENT_SECRET in environment variables");
    throw new Error("Authentication configuration missings");
  }

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', client_id);
  params.append('client_secret', client_secret);
  params.append('scope', 'DDFApi_Read');

  try {
    const response = await fetch('https://identity.crea.ca/connect/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get OAuth token: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error fetching CREA OAuth token:", error);
    throw error;
  }
}

export async function getMember(accessToken: string): Promise<CREAMember> {
  try {
    const response = await fetch('https://ddfapi.realtor.ca/odata/v1/Member', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch member details: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    
    return data.value ? data.value[0] : data;
  } catch (error) {
    console.error("Error fetching CREA member details:", error);
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getActiveListings(accessToken: string, memberKey?: string, officeKey?: string): Promise<any[]> {
  const baseUrl = 'https://ddfapi.realtor.ca/odata/v1/Property';

  // Base filter for active listings
  let filter = "StandardStatus eq 'Active'";

  // If memberKey is provided, filter listings for that specific agent
  if (memberKey) {
    // Note: ListAgentKey is the field for Member Key in CREA DDF OData Property entity
    filter += ` and ListAgentKey eq '${memberKey}'`;
  }

  // If officeKey is provided, filter listings for that specific office
  if (officeKey) {
    // ListOfficeKey is the field for Office Key in CREA DDF OData Property entity
    filter += ` and ListOfficeKey eq '${officeKey}'`;
  }

  const queryParams = new URLSearchParams();
  queryParams.append('$filter', filter);
  queryParams.append('$orderby', 'ModificationTimestamp desc');

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
      },
      // Using Next.js cache options if available in this context
      // next: { revalidate: 3600 }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch listings: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    // OData v4 usually returns an object with a 'value' property containing the array
    return data.value || [];
  } catch (error) {
    console.error("Error fetching CREA listings:", error);
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getListingByKey(accessToken: string, listingKey: string): Promise<any> {
  const baseUrl = 'https://ddfapi.realtor.ca/odata/v1/Property';
  const url = `${baseUrl}?$filter=ListingKey eq '${listingKey}'`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch listing by key: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    // OData filter returns an array in 'value'
    return data.value && data.value.length > 0 ? data.value[0] : null;
  } catch (error) {
    console.error("Error fetching CREA listing by key:", error);
    throw error;
  }
}
