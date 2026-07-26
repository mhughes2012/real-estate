import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import Link from "next/link";

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
              With over 25 years of experience in the real estate market, Sheryl Thompson has built a reputation for excellence, integrity, and proven results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My mission is to provide personalized real estate services that exceed expectations. Whether you are buying your first home or selling your family residence, we bring the same level of dedication and expertise to every client.
            </p>
            <Link href="/contact" className="block w-full text-center bg-gold text-white py-3 my-5 font-bold uppercase tracking-widest text-xs hover:bg-gold-dark transition-colors">
              Contact us
            </Link>
          </div>
          <div className="bg-white-clean p-10 border border-white-muted rounded-lg">
            <h2 className="text-2xl font-bold text-navy mb-6 uppercase tracking-tight">Our Philosophy</h2>
            <p className="text-gray-500 italic">&#34;Exceptional service isn&#39;t defined by a price point—it&#39;s about the experience.&#34;</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
