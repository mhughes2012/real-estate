import { fetchRealTimeListings } from "@/lib/api";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

export const dynamic = 'force-dynamic';

export default async function RealTimePropertiesPage() {
  // This is a Next.js Server Component
  // fetchRealTimeListings uses the native fetch API with caching options
  const properties = await fetchRealTimeListings();

  return (
    <main className="min-h-screen bg-white-clean" >
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-navy mb-4">Sheryl's Featured Listings</h1>
            <div className="w-20 h-1 bg-gold mt-6" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <FeatureCard key={property.id} property={property} />
            ))}
          </div>

          {properties.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No listings found at the moment. <a href="/properties/office">View all office listings</a></p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
