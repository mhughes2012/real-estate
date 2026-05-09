import { Navbar } from '@/components/organisms/Navbar';

export default function SellerGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-navy mb-8 uppercase tracking-tighter">Seller <span className="text-gold">Guide</span></h1>
        <div className="w-24 h-1 bg-gold mb-12" />
        <div className="prose prose-navy max-w-3xl">
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Selling your luxury home is a significant decision. This guide outlines our comprehensive process to ensure a smooth and successful transaction.
          </p>
          <div className="space-y-8">
            {[
              { title: '1. Preparation', desc: 'Staging, repairs, and professional photography to showcase your home.' },
              { title: '2. Strategic Pricing', desc: 'Detailed market analysis to determine the optimal listing price.' },
              { title: '3. Global Marketing', desc: 'Reaching qualified buyers through targeted digital and print campaigns.' },
              { title: '4. Negotiation', desc: 'Expertly managing offers to secure the best terms for you.' },
            ].map((step) => (
              <div key={step.title} className="border-l-4 border-gold pl-6 py-2">
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
