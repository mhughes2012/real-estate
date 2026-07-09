'use client';

import React, { useState, useEffect } from 'react';

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="bg-navy-dark text-white py-12 border-t border-navy-light mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white-muted text-sm tracking-widest uppercase">
          © {currentYear} Sheryl Thompson Real Estate. All rights reserved.
        </p>
        <p className="text-white-muted text-xs tracking-widest pt-5">
          Data is supplied by Pillar 9™ MLS® System. Pillar 9™ is the owner of the copyright in its MLS®System. Data is deemed reliable but is not guaranteed accurate by Pillar 9™.
         </p>
        <p className="text-white-muted text-xs tracking-widest">
          The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by The Canadian Real Estate Association (CREA) and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.
        </p>
      </div>
    </footer>
  );
};
