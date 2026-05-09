'use client';

import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Robert & Sarah Miller',
    role: 'Home Buyers',
    content: 'Sheryl is absolute professional. She helped us find our dream home in record time and negotiated a price we didn\'t think was possible. Her knowledge of the local market is unmatched.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Property Seller',
    content: 'Selling our family home was an emotional journey, but Sheryl made it seamless. Her marketing strategy was brilliant, and we had multiple offers within the first week.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Linda Chen',
    role: 'Real Estate Investor',
    content: 'I\'ve worked with many agents over the years, and Sheryl stands out for her integrity and attention to detail. She truly cares about her clients\' long-term success.',
    rating: 5,
  },
];

export const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 bg-white-clean overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Client Success Stories</h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Card */}
          <div className="bg-white p-8 md:p-16 shadow-xl border border-white-muted relative z-10">
            <Quote className="text-gold/20 absolute top-8 left-8" size={80} />
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-gold fill-gold" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-navy italic mb-10 leading-relaxed">
                &ldquo;{TESTIMONIALS[activeIndex].content}&rdquo;
              </p>
              
              <h4 className="text-xl font-bold text-navy mb-1">{TESTIMONIALS[activeIndex].name}</h4>
              <p className="text-gold font-medium uppercase tracking-widest text-sm">{TESTIMONIALS[activeIndex].role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 border border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-3 border border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-gold w-8' : 'bg-gray-300 hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
