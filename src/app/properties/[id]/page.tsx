import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPropertyById } from '@/lib/api';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import Image from 'next/image';
import { MapPin, Bed, Bath, Square, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { PropertyImageGrid } from '@/components/organisms/PropertyImageGrid';
import { FavoriteButton } from '@/components/molecules/FavoriteButton';

interface Props {
  params: Promise<{ id: string }>;
}

// Dynamic Metadata Generation
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    return {
      title: 'Property Not Found | Sheryl Thompson Real Estate',
    };
  }

  const formattedPrice = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(property.price);

  const title = `${property.address.street}, ${property.address.city} | ${formattedPrice}`;
  const description = `View this ${property.beds} bed, ${property.baths} bath ${property.type} listing in ${property.address.city}. MLS®: ${property.mlsId}. Contact Sheryl Thompson for details.`;

  const firstImage = property.images.length > 0 ? property.images[0] : null;
  const imageUrl = typeof firstImage === 'string' ? firstImage : firstImage?.src;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Property Header/Images */}
      <section className="pt-24">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-widest mb-2">
                <span className="bg-gold/10 px-2 py-1 rounded">{property.status}</span>
                <span>MLS®: {property.mlsId}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">
                {property.address.street}
              </h1>
              <div className="flex items-center text-gray-500">
                <MapPin size={18} className="mr-2 text-gold" />
                <span>{property.address.full}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-3xl md:text-4xl font-bold text-navy mb-2">{formattedPrice}</div>
              <div className="flex gap-2 justify-end">
                <FavoriteButton propertyId={property.id} className="w-10 h-10 p-0" />
                {/* 
                <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                  <Share2 size={20} />
                </Button>
                */}
              </div>
            </div>
          </div>

          {/* Property Gallery */}
          <PropertyImageGrid images={property.images} title={property.address.street} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Key Specs */}
              <div className="flex flex-wrap items-center justify-between py-6 border-y border-white-muted mb-8">
                <div className="flex items-center gap-3">
                  <Bed size={24} className="text-gold" />
                  <div>
                    <div className="font-bold text-navy">{property.beds}</div>
                    <div className="text-xs text-gray-500 uppercase">Bedrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Bath size={24} className="text-gold" />
                  <div>
                    <div className="font-bold text-navy">{property.baths}</div>
                    <div className="text-xs text-gray-500 uppercase">Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Square size={24} className="text-gold" />
                  <div>
                    <div className="font-bold text-navy">{property.sqft.toLocaleString()}</div>
                    <div className="text-xs text-gray-500 uppercase">Square Feet</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={24} className="text-gold" />
                  <div>
                    <div className="font-bold text-navy">{property.type}</div>
                    <div className="text-xs text-gray-500 uppercase">Property Type</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-navy max-w-none">
                <h2 className="text-2xl font-bold text-navy mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {property.description || "This stunning luxury home offers the perfect blend of modern elegance and comfortable living. Located in a prime neighborhood, this property features high-end finishes throughout, spacious living areas, and breathtaking views. Experience the epitome of luxury living with Sheryl Thompson."}
                </p>
              </div>
            </div>

            {/* Sidebar / Contact */}
            <div className="lg:col-span-1">
              <div className="bg-white-clean p-8 rounded-lg border border-white-muted sticky top-32">
                <h3 className="text-xl font-bold text-navy mb-6 uppercase tracking-tight">Interested?</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 mb-6">
                    For more information or to schedule a private showing, please call or text Sheryl Thompson directly.
                  </p>
                  
                  <a 
                    href="tel:403-874-4499" 
                    className="flex items-center justify-center gap-3 w-full bg-navy text-white py-4 rounded font-bold uppercase tracking-widest hover:bg-navy-light transition-colors"
                  >
                    <Phone size={20} className="text-gold" />
                    403-874-4499
                  </a>
                  
                  <a 
                    href="sms:403-874-4499" 
                    className="flex items-center justify-center gap-3 w-full border border-navy text-navy py-4 rounded font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
                  >
                    <MessageSquare size={20} className="text-gold" />
                    Text Sheryl
                  </a>
                </div>
                <div className="mt-8 pt-8 border-t border-white-muted text-center">
                  <div className="text-sm text-gray-500 mb-2 uppercase tracking-widest">Listing Agent</div>
                  <div className="font-bold text-navy text-lg">Sheryl Thompson</div>
                  <div className="text-gold text-sm font-medium">Luxury Real Estate Specialist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
