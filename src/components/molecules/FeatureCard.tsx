import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/types';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

interface FeatureCardProps {
  property: Property;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ property }) => {
  const formattedPrice = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-white-muted group hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        {/* Fallback color if image fails to load */}
        <div className="absolute inset-0 bg-navy-light/10" />
        <Image
          src={property.images[0] || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070'}
          alt={property.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-navy text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          {property.listingType === 'sale' ? 'For Sale' : 'For Rent'}
        </div>
        {property.status === 'Sold' && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <span className="bg-red-600 text-white px-6 py-2 font-bold uppercase tracking-widest -rotate-12 border-4 border-white">
               Sold
             </span>
          </div>
        )}
      </div>

      {/* Content */}

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/properties/${property.id}`} className="flex-1">
            <h3 className="text-md font-bold text-navy uppercase hover:text-gold transition-colors" title={property.title}>
              {property.address.full} in {property.address.city}: {property.subDivision} {property.type}
            </h3>
          </Link>
          <span className="text-gold font-bold text-xl ml-4">
            {formattedPrice}
          </span>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={16} className="mr-1 text-gold" />
          <span className="truncate">{property.address.full}</span>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">

          <span>{property.description}</span>
        </div>

        <div className="flex items-center justify-between text-gray-600 border-t border-white-muted pt-4 mb-4">
          <div className="flex items-center gap-1">
            <Bed size={18} className="text-navy" />
            <span className="font-semibold">{property.beds}</span>
            <span className="text-xs uppercase">Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={18} className="text-navy" />
            <span className="font-semibold">{property.baths}</span>
            <span className="text-xs uppercase">Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square size={18} className="text-navy" />
            <span className="font-semibold">{property.sqft}</span>
            <span className="text-xs uppercase">Sqft</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-400 font-medium uppercase tracking-tighter">
          <span>MLS®: {property.mlsId}</span>
          <Link href={`/properties/${property.id}`} className="text-navy hover:text-gold transition-colors font-bold uppercase tracking-wider">
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};
