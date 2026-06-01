'use client';

import React, { useState, useEffect } from 'react';
import Image, { type StaticImageData } from "next/image";
import { Button } from '@/components/atoms/Button';
import {X, ChevronLeft, ChevronRight, Play, Rotate3d} from 'lucide-react';
import { isYoutubeUrl, getYoutubeThumbnail, getYoutubeEmbedUrl } from '@/utils/youtube';
import { isIguideUrl, getIguidePreviewUrl, getIguideEmbedUrl } from '@/utils/iguide';

interface PropertyImageGridProps {
  images: (string | StaticImageData)[];
  title: string;
}

export const PropertyImageGrid: React.FC<PropertyImageGridProps> = ({ images, title }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showAll || selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showAll, selectedImage]);

  const openGallery = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAll(true);
  };
  
  const closeGallery = () => {
    setShowAll(false);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  if (!images || images.length === 0) return null;

  const renderThumbnail = (index: number, className: string = "", children?: React.ReactNode) => {
    const imageUrl = images[index % images.length];
    const isYoutube = isYoutubeUrl(imageUrl);
    const isIguide = isIguideUrl(imageUrl);
    const displayImage = isYoutube 
      ? getYoutubeThumbnail(imageUrl as string) 
      : isIguide 
        ? getIguidePreviewUrl(imageUrl as string)
        : imageUrl;

    return (
      <div 
        className={`relative overflow-hidden cursor-pointer group ${className}`}
        onClick={() => openLightbox(index % images.length)}
      >
        <Image
          src={displayImage || imageUrl}
          alt={`${title} detail ${index}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority={index === 0}
        />
        {isYoutube && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-navy/60 text-white p-3 rounded-full backdrop-blur-sm group-hover:bg-gold transition-colors duration-300">
              <Play fill="currentColor" size={24} />
            </div>
          </div>
        )}
        {isIguide && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-navy/60 text-white p-3 rounded-full backdrop-blur-sm group-hover:bg-gold transition-colors duration-300">
              <Rotate3d size={24} />
            </div>
          </div>
        )}
        {children}
      </div>
    );
  };

  return (
    <>
      {/* Main Grid View */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4 h-[300px] md:h-[500px] mb-12">
        {/* Large Primary Image */}
        {renderThumbnail(0, "md:col-span-2 rounded-lg md:rounded-l-lg md:rounded-r-none")}

        {/* Middle Column Detail Images */}
        <div className="hidden md:grid grid-rows-2 gap-4 col-span-1">
          {renderThumbnail(1)}
          {renderThumbnail(2)}
        </div>

        {/* Right Column with View All Button Overlay */}
        {renderThumbnail(3, "hidden md:block rounded-r-lg", (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              variant="outline" 
              className="text-white border-white hover:!bg-white/90 hover:!text-navy transition-all duration-300"
              onClick={openGallery}
            >
              View All Photos
            </Button>
          </div>
        ))}
        
        {/* Mobile View All Button (visible only on small screens) */}
        <div className="md:hidden absolute bottom-4 right-8 z-10">
          <Button 
            variant="outline" 
            size="sm"
            className="bg-black/40 text-white border-white backdrop-blur-sm hover:!bg-white/90 hover:!text-navy transition-all duration-300"
            onClick={openGallery}
          >
            View all {images.length} photos
          </Button>
        </div>
      </div>

      {/* Full Gallery Modal */}
      {showAll && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8 sticky top-0 bg-white/90 backdrop-blur-md py-4 z-20 border-b border-gray-100">
              <div>
                <h2 className="text-2xl font-bold text-navy">{title}</h2>
                <p className="text-gray-500 font-medium">{images.length} Photos</p>
              </div>
              <button 
                onClick={closeGallery}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2 group"
              >
                <span className="font-bold text-navy group-hover:text-gold transition-colors">CLOSE</span>
                <X size={28} className="text-navy group-hover:text-gold transition-colors" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img, idx) => {
                const isYoutube = isYoutubeUrl(img);
                const isIguide = isIguideUrl(img);
                const displayImage = isYoutube 
                  ? getYoutubeThumbnail(img as string) 
                  : isIguide
                    ? getIguidePreviewUrl(img as string)
                    : img;
                return (
                  <div 
                    key={idx} 
                    className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group shadow-md"
                    onClick={() => openLightbox(idx)}
                  >
                    <Image
                      src={displayImage || img}
                      alt={`${title} - Photo ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {isYoutube && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-navy/60 text-white p-3 rounded-full backdrop-blur-sm group-hover:bg-gold transition-colors duration-300">
                          <Play fill="currentColor" size={24} />
                        </div>
                      </div>
                    )}
                    {isIguide && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-navy/60 text-white p-3 rounded-full backdrop-blur-sm group-hover:bg-gold transition-colors duration-300">
                          <Rotate3d size={24} />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-sm font-medium">
                        {isYoutube ? 'Video' : isIguide ? 'Interactive Tour' : `Photo ${idx + 1}`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Slider */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[110] bg-black/95 flex flex-col items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-white hover:text-gold transition-colors z-[120] flex items-center gap-2"
          >
            <span className="font-bold hidden md:inline">CLOSE</span>
            <X size={32} />
          </button>
          
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white hover:text-gold transition-colors z-[120]"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white hover:text-gold transition-colors z-[120]"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
          
          <div className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center">
            <div className="relative w-full h-full">
              {isYoutubeUrl(images[selectedImage]) ? (
                <iframe
                  src={getYoutubeEmbedUrl(images[selectedImage] as string) || ''}
                  title={`${title} - Video`}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : isIguideUrl(images[selectedImage]) ? (
                <iframe
                  src={getIguideEmbedUrl(images[selectedImage] as string) || ''}
                  title={`${title} - Interactive Tour`}
                  className="w-full h-full rounded-lg bg-white"
                  allowFullScreen
                  frameBorder="0"
                />
              ) : (
                <Image
                  src={images[selectedImage]}
                  alt={`${title} - Photo ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              )}
            </div>
          </div>
          
          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="text-white font-bold text-lg">
              {selectedImage + 1} / {images.length}
            </div>
            <p className="text-gray-400 text-sm">{title}</p>
          </div>
        </div>
      )}
    </>
  );
};
