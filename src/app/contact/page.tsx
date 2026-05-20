import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { Button } from '@/components/atoms/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-navy mb-8 uppercase tracking-tighter">Contact <span className="text-gold">Us</span></h1>
        <div className="w-24 h-1 bg-gold mb-12" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Have a question about a listing or want to discuss your real estate goals? We&apos;re here to help.
            </p>
            
            <div className="space-y-8">
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
              
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-sm text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-widest text-gray-500 mb-1 font-bold">Office</div>
                  <div className="text-lg font-bold text-navy text-wrap">202, 5403 Crowchild Trail NW
                    Calgary, Alberta T3B 4Z1</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </main>
  );
}
