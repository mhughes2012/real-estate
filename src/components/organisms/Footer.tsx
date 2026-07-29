'use client';

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Facebook, Instagram } from '@/components/atoms/SocialIcons';

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="bg-navy-dark text-white py-16 border-t border-navy-light mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-center text-center md:text-left">
          {/* Logo/Name */}
          <div>
            <div className="text-2xl font-bold tracking-tighter uppercase mb-2">
              Sheryl <span className="text-gold">Thompson</span>
            </div>
            <p className="text-white-muted text-sm uppercase tracking-widest">
              Real Estate Professional
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.facebook.com/sherylhompson" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white-muted hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/homescalgary/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white-muted hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.google.com/search?q=sheryl+thompson+realtor+calgary&oq=sheryl+thompson+realtor+calgary&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDzSAQc3MjNqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8&zx=1781557320885#lrd=0x53716f2e94674701:0x4947ef12fe369366,1,,,,"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white-muted hover:text-gold transition-colors"
              aria-label="Google Reviews"
            >
              <Star size={24} />
            </a>
          </div>

          {/* Contact CTA */}
          <div className="text-center md:text-right">
            <a 
              href="/contact" 
              className="inline-block border border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all"
            >
              Work With Me
            </a>
          </div>
        </div>

        <div className="border-t border-navy-light pt-12 text-center">
          <p className="text-white-muted text-xs tracking-widest uppercase mb-6">
            © {currentYear} Sheryl Thompson Real Estate. All rights reserved.
          </p>
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-white-muted text-[10px] leading-relaxed tracking-wider opacity-60">
              Data is supplied by Pillar 9™ MLS® System. Pillar 9™ is the owner of the copyright in its MLS®System. Data is deemed reliable but is not guaranteed accurate by Pillar 9™.
            </p>
            <p className="text-white-muted text-[10px] leading-relaxed tracking-wider opacity-60">
              The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by The Canadian Real Estate Association (CREA) and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
