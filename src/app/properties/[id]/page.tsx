import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPropertyById } from '@/lib/api';
import { Navbar } from '@/components/organisms/Navbar';
import Image from 'next/image';
import { MapPin, Bed, Bath, Square, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';

interface Props {
  params: { id: string };
}

// Dynamic Metadata Generation
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const property = await getPropertyById(params.id);

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

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: property.images.length > 0 ? [property.images[0]] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: property.images.length > 0 ? [property.images[0]] : [],
    },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const property = await getPropertyById(params.id);

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
                <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                  <Heart size={20} />
                </Button>
                <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                  <Share2 size={20} />
                </Button>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px] mb-12">
            <div className="md:col-span-2 relative overflow-hidden rounded-l-lg">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            <div className="hidden md:grid grid-rows-2 gap-4 col-span-1">
              <div className="relative overflow-hidden">
                <Image
                  src={property.images[1] || property.images[0]}
                  alt="Property Detail"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src={property.images[0]}
                  alt="Property Detail"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="hidden md:block relative overflow-hidden rounded-r-lg">
              <Image
                src={property.images[0]}
                alt="Property Detail"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-navy">
                  View All Photos
                </Button>
              </div>
            </div>
          </div>

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
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-white-muted rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-white-muted rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <textarea
                    placeholder="I'm interested in this property..."
                    rows={4}
                    className="w-full px-4 py-3 border border-white-muted rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  ></textarea>
                  <Button className="w-full uppercase tracking-widest py-4">
                    Request Info
                  </Button>
                </form>
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

      {/* Footer Placeholder */}
      <footer className="bg-navy-dark text-white py-12 border-t border-navy-light mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white-muted text-sm tracking-widest uppercase">
            © 2026 Sheryl Thompson Real Estate. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
