import { Navbar } from '@/components/organisms/Navbar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-navy mb-8 uppercase tracking-tighter">About <span className="text-gold">Sheryl Thompson</span></h1>
        <div className="w-24 h-1 bg-gold mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="prose prose-navy max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              With over 15 years of experience in the luxury real estate market, Sheryl Thompson has built a reputation for excellence, integrity, and unparalleled results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide bespoke real estate services that exceed expectations. Whether you are buying your first home or selling a multi-million dollar estate, we bring the same level of dedication and expertise to every transaction.
            </p>
          </div>
          <div className="bg-white-clean p-10 border border-white-muted rounded-lg">
            <h2 className="text-2xl font-bold text-navy mb-6 uppercase tracking-tight">Our Philosophy</h2>
            <p className="text-gray-500 italic">"Luxury is not a price point, it's an experience."</p>
          </div>
        </div>
      </div>
    </main>
  );
}
