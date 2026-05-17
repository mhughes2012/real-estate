'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Properties',
    href: '/properties',
    dropdown: [
      { label: 'All Listings', href: '/properties' },
      { label: 'Featured Listings', href: '/properties' },
      { label: 'Real-Time MLS®', href: '/properties/real-time' },
    ],
  },
  {
    label: 'Buying',
    href: '/buying/calculator',
    dropdown: [
      { label: 'Buyer Guide', href: '/buying/buyerguide' },
      { label: 'Mortgage Calculator', href: '/buying/calculator' },
    ],
  },
  {
    label: 'Selling',
    href: '/selling',
    dropdown: [
      { label: 'Seller Guide', href: '/selling/guide' },
      { label: 'What\'s My Home Worth?', href: '/selling/valuation' },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-navy py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className={`text-2xl font-bold tracking-tighter transition-colors ${
                scrolled ? 'text-white' : 'text-white'
              }`}>
                SHERYL<span className="text-gold">THOMPSON</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center text-white hover:text-gold transition-colors font-medium text-sm uppercase tracking-widest"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={14} className="ml-1" />}
                </Link>

                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl py-2 rounded-sm border-t-4 border-gold">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-navy hover:bg-white-clean hover:text-gold transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-navy border-t border-navy-light animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  href={item.href}
                  className="block text-white hover:text-gold font-medium py-2 text-lg uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 mt-1 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block text-white-muted hover:text-gold text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
