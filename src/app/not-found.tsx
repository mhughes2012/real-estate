import Link from 'next/link';
import { Navbar } from '@/components/organisms/Navbar';
import { Button } from '@/components/atoms/Button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-9xl font-bold text-navy/10 absolute -z-10 select-none">404</h1>
        <div className="z-10">
          <h2 className="text-4xl font-bold text-navy mb-4 uppercase tracking-tighter">Page Not Found</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8" />
          <p className="text-gray-500 max-w-md mx-auto mb-12 text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-navy text-white hover:bg-navy-light focus:ring-navy flex items-center gap-2 px-8 py-6 uppercase tracking-widest text-sm font-bold"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <Link 
              href="/properties"
              className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy flex items-center gap-2 px-8 py-6 uppercase tracking-widest text-sm font-bold"
            >
              <ArrowLeft size={18} />
              All Listings
            </Link>
          </div>
        </div>
      </div>
      
      <footer className="bg-navy-dark text-white py-12 border-t border-navy-light mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white-muted text-sm tracking-widest uppercase">
            © 2026 Sheryl Thompson Real Estate. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
