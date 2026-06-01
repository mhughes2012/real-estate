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
      </div>
    </footer>
  );
};
