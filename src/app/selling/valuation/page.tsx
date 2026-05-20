import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { Button } from '@/components/atoms/Button';
import {Mail, Phone} from "lucide-react";

export default function HomeValuationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy mb-4 uppercase tracking-tighter text-center">What&apos;s Your <span className="text-gold">Home Worth?</span></h1>
        <p className="text-gray-500 text-center mb-12">Get a complimentary, no-obligation professional market evaluation of your property.</p>
        
        <div className="bg-white-clean p-8 rounded-lg border border-white-muted">
          <div className="flex items-start gap-4">
            <div className="bg-gold/10 p-3 rounded-sm text-gold">
              <Phone size={24} />
            </div>
            <div>
              <div className="text-sm uppercase tracking-widest text-gray-500 mb-1 font-bold">Phone/Text</div>
              <div className="text-lg font-bold text-navy">403-874-4499</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gold/10 p-3 rounded-sm text-gold">
              <Mail size={24} />
            </div>
            <div>
              <div className="text-sm uppercase tracking-widest text-gray-500 mb-1 font-bold">Email</div>
              <div className="text-lg font-bold text-navy">stagingrealtoryyc@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
