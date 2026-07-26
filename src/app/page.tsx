import Link from "next/link";
import { Navbar } from "@/components/organisms/Navbar";
import { Hero } from "@/components/organisms/Hero";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import { TestimonialSlider } from "@/components/organisms/TestimonialSlider";
import { Footer } from "@/components/organisms/Footer";
import { getProperties } from "@/lib/api";
import { Button } from "@/components/atoms/Button";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const properties = await getProperties();

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />

      {/* Featured Properties Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-4">Featured Listings</h2>
              <div className="w-24 h-1 bg-gold" />
            </div>
            <Link href="/properties/office" className="text-navy hover:text-gold transition-colors font-bold uppercase tracking-widest text-sm mt-4 md:mt-0">
              View All Properties →
            </Link>
          </div>
          
          {properties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <FeatureCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-gray-100 rounded-xl">
              <p className="text-gray-500 text-lg">No featured listings currently available.</p>
            </div>
          )}
          
          <div className="mt-16 text-center lg:hidden">
            <Link 
              href="/properties/office"
              className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy w-full px-4 py-2 text-base"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* About / CTA Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gold transform -skew-x-12" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to find your <span className="text-gold">dream home</span>?</h2>
            <p className="text-xl text-white-muted mb-10 leading-relaxed">
              With over 25 years of experience in the real estate market, Sheryl Thompson provides expert guidance and personalized service for every client.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gold text-white hover:bg-gold-light focus:ring-gold uppercase tracking-widest px-10 px-6 py-3 text-lg"
              >
                Book a Consultation
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-white text-white hover:bg-white hover:text-navy focus:ring-navy uppercase tracking-widest px-10 px-6 py-3 text-lg"
              >
                Meet Sheryl
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <Footer />
    </main>
  );
}
