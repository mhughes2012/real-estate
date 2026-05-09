import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-navy">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" />
        <Image
          src="/images/header-1000-wide.jpg"
          alt="Luxury Home"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Content */}
      {/*<div className="relative z-20 container mx-auto px-4 text-center">*/}
      {/*  <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">*/}
      {/*    Elevated Living in <span className="text-gold">Calgary</span>*/}
      {/*  </h1>*/}
      {/*  <p className="text-xl md:text-2xl text-white-muted mb-12 max-w-2xl mx-auto drop-shadow-md">*/}
      {/*    Discover a collection of premium properties curated for the most discerning clients.*/}
      {/*  </p>*/}
      {/*</div>*/}



    </section>
  );
};
