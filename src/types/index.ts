import { type StaticImageData} from 'next/image';

export interface Property {
  id: string;
  mlsId: string;
  title: string;
  price: number;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    full: string;
  };
  subDivision: string;
  beds: number;
  baths: number;
  sqft: number;
  images: (string | StaticImageData)[];
  type: 'House' | 'Condo' | 'Townhouse' | string;
  listingType: 'sale' | 'rent';
  status: 'Active' | 'Pending' | 'Sold';
  description?: string;
  lotSize?: string;
  yearBuilt?: number;
  amenities?: string[];
}

export interface Agent {
  name: string;
  role: string;
  email: string;
  phone: string;
  imageUrl: string;
}

export interface CREAMember {
  MemberKey: string;
  MemberFirstName: string;
  MemberLastName: string;
  MemberEmail?: string;
  MemberOfficePhone?: string;
  OfficeKey: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
