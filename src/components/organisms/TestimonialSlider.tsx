'use client';

import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Devon Lyons',
    role: 'Home Buyer',
    content: 'When it came to selling my house this spring, I knew I wanted it sold quickly, and I wanted it sold at top value. I called Sheryl on Wednesday to chat about my situation and she was very prompt about coming right over to help us get started. From there, Sheryl just took over. Sheryl did all the staging, had her photographer come take the photos, and had it posted up on MLS and her website, and this all happened in 3 days in time for 2 open houses that upcoming weekend! The photos taken of the house when they made it onto MLS made me envious of my house, and sure enough, within 5 days of listing my house was sold and for the value I desired! I would highly recommend Sheryl for anybody looking to buy or sell their home.',
    rating: 5,
  },
  {
    id: 2,
    name: 'John Plumtree',
    role: 'Home Buyer',
    content: 'How do you sell your home during one of the worst economic times in Alberta and (in) the middle of winter? You hire Sheryl Thompson, the best real estate agent around! With Sheryl’s personality and decorating finesse, you can’t go wrong. (The) professional photos taken, as well as the staging by Sheryl, made a huge impact to our listing. Thanks for your hard work and help along the way.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mary Becker',
    role: 'Home Buyer',
    content: 'With Sheryl\'s help, I was able to sell my house right away. She was excellent at explaining the procedures and helping me get through the sell with little stress. She also helped me find the condo I now love. She listened and let me view a number of places until I found the right one, and she explained the procedures with the purchase of my new place. She is very professional and knowledgeable. A great agent to have on your side when buying and selling real estate.',
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
