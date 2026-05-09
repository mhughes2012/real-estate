'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyImageSliderProps {
  images: string[];
  title: string;
}

export const PropertyImageSlider: React.FC<PropertyImageSliderProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="relative h-full w-full bg-navy-light/10 flex items-center justify-center">
        <span className="text-gray-400">No images available</span>
      </div>
    );
  }

  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div 
      className="relative h-full w-full group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fallback color if image fails to load */}
      <div className="absolute inset-0 bg-navy-light/10" />
      
      <Image
        src={images[currentIndex] || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070'}
        alt={`${title} - Image ${currentIndex + 1}`}
        fill
        className="object-cover transform transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators - Only show dots if 10 or fewer images, otherwise just rely on the counter */}
          {images.length <= 10 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-gold w-4' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Counter */}
          <div className="absolute top-4 right-4 bg-black/50 text-white text-[10px] px-2 py-1 rounded font-medium backdrop-blur-sm transition-opacity duration-300">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};
