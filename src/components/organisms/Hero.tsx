import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative pt-32 bg-white">
      <div className="w-full">
        <Image
          src="/images/header-1000-wide.jpg"
          alt="Beautiful Home"
          width={1000}
          height={371}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
};
