import { Navbar } from "@/components/organisms/Navbar";
import { MortgageCalculator } from "@/components/organisms/MortgageCalculator";

export default function MortgageCalculatorPage() {
  return (
    <main className="min-h-screen bg-white-clean">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">
            Mortgage <span className="text-gold">Calculator</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-white-muted text-lg leading-relaxed">
            Plan your home purchase with confidence. Use our calculator to estimate your monthly payments and explore different financial scenarios.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <MortgageCalculator />
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white border-t border-white-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center uppercase tracking-tight">Understanding Your Mortgage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-navy mb-4 border-l-4 border-gold pl-4">Monthly Payment Formula</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The standard formula used to calculate a fixed-rate mortgage payment is:
              </p>
              <div className="bg-white-clean p-4 rounded-md font-mono text-sm text-navy mb-4 overflow-x-auto">
                M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
              </div>
              <ul className="text-sm text-gray-500 space-y-2">
                <li><span className="font-bold text-navy">M</span> = Total monthly payment</li>
                <li><span className="font-bold text-navy">P</span> = Principal loan amount</li>
                <li><span className="font-bold text-navy">i</span> = Monthly interest rate</li>
                <li><span className="font-bold text-navy">n</span> = Number of months</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navy mb-4 border-l-4 border-gold pl-4">Key Factors</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase">Down Payment</h4>
                  <p className="text-sm text-gray-600">The initial upfront portion of the total amount due. In Canada, the minimum is typically 5% for the first $500,000.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase">Amortization</h4>
                  <p className="text-sm text-gray-600">The total length of time it takes to pay off the mortgage in full. Common periods are 25 or 30 years.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase">Interest Rate</h4>
                  <p className="text-sm text-gray-600">The cost of borrowing money, expressed as a percentage. This rate can be fixed or variable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="bg-navy-dark text-white py-12 border-t border-navy-light">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white-muted text-sm tracking-widest uppercase">
            © 2026 Sheryl Thompson Real Estate. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
