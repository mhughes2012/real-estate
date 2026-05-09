import { Navbar } from '@/components/organisms/Navbar';
import { Button } from '@/components/atoms/Button';

export default function HomeValuationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy mb-4 uppercase tracking-tighter text-center">What&apos;s Your <span className="text-gold">Home Worth?</span></h1>
        <p className="text-gray-500 text-center mb-12">Get a complimentary, no-obligation professional market evaluation of your property.</p>
        
        <div className="bg-white-clean p-8 rounded-lg border border-white-muted">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-navy">Property Address</label>
              <input type="text" placeholder="Street Address, City, Province" className="w-full px-4 py-3 border border-white-muted rounded focus:outline-none focus:ring-2 focus:ring-gold bg-white" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-navy">Property Type</label>
                <select className="w-full px-4 py-3 border border-white-muted rounded focus:outline-none focus:ring-2 focus:ring-gold bg-white">
                  <option>House</option>
                  <option>Condo/Apartment</option>
                  <option>Townhouse</option>
                  <option>Acreage</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-navy">Planned Timing</label>
                <select className="w-full px-4 py-3 border border-white-muted rounded focus:outline-none focus:ring-2 focus:ring-gold bg-white">
                  <option>Immediate</option>
                  <option>1-3 Months</option>
                  <option>3-6 Months</option>
                  <option>Just Curious</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2 pt-4 border-t border-white-muted">
              <label className="text-xs uppercase tracking-widest font-bold text-navy">Your Name</label>
              <input type="text" className="w-full px-4 py-3 border border-white-muted rounded focus:outline-none focus:ring-2 focus:ring-gold bg-white" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-navy">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-white-muted rounded focus:outline-none focus:ring-2 focus:ring-gold bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-navy">Phone</label>
                <input type="tel" className="w-full px-4 py-3 border border-white-muted rounded focus:outline-none focus:ring-2 focus:ring-gold bg-white" />
              </div>
            </div>
            
            <Button className="w-full py-4 uppercase tracking-widest font-bold">Request Valuation</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
