import { Navbar } from '@/components/organisms/Navbar';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';
import { DollarSign, Home, BarChart3 } from 'lucide-react';

export default function SellingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-navy mb-8 uppercase tracking-tighter">Selling with <span className="text-gold">Sheryl Thompson</span></h1>
        <div className="w-24 h-1 bg-gold mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white-clean p-8 border border-white-muted rounded-lg text-center">
            <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center text-gold mx-auto mb-6">
              <DollarSign size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4 uppercase tracking-tight">Maximum Value</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Our strategic marketing and pricing ensures you get the highest possible return on your investment.
            </p>
            <Link 
              href="/selling/valuation"
              className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy w-full text-xs uppercase tracking-widest font-bold px-4 py-2 text-base"
            >
              Free Valuation
            </Link>
          </div>
          
          <div className="bg-navy p-8 border border-navy-light rounded-lg text-center text-white">
            <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center text-gold mx-auto mb-6">
              <Home size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Expert Staging</h3>
            <p className="text-white-muted text-sm leading-relaxed mb-6">
              We provide professional staging consultations to make your home stand out in the luxury market.
            </p>
            <Link 
              href="/selling/guide"
              className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gold text-white hover:bg-gold-light focus:ring-gold w-full text-xs uppercase tracking-widest font-bold border-none px-4 py-2 text-base"
            >
              Seller Guide
            </Link>
          </div>
          
          <div className="bg-white-clean p-8 border border-white-muted rounded-lg text-center">
            <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center text-gold mx-auto mb-6">
              <BarChart3 size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4 uppercase tracking-tight">Market Insight</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Stay ahead with real-time data on local market trends and buyer behavior in your neighborhood.
            </p>
            <Button variant="outline" className="w-full text-xs uppercase tracking-widest font-bold">View Reports</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
