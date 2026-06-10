import { fetchOfficeListings } from "@/lib/api";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Listings | Real Estate Professionals Inc. | Sheryl Thompson',
  description: 'View all active real estate listings from our office, Real Estate Professionals Inc. Serving Calgary and surrounding areas.',
};

export const dynamic = 'force-dynamic';

export default async function OfficePropertiesPage() {
  // fetchOfficeListings gets all listings from the office
  const properties = await fetchOfficeListings();
  const isFallback = properties.length === 3 && properties[0].id === "1" && properties[0].mlsId === "A2302920";

  const envStatus = {
    hasClientId: !!(process.env.CREA_CLIENT_ID || process.env.CLIENT_ID),
    hasClientSecret: !!(process.env.CREA_CLIENT_SECRET || process.env.CLIENT_SECRET),
    hasOfficeClientId: !!process.env.OFFICE_CLIENT_ID,
    hasOfficeClientSecret: !!process.env.OFFICE_CLIENT_SECRET,
    nodeEnv: process.env.NODE_ENV
  };

  return (
    <main className="min-h-screen bg-white-clean">
      <Navbar />
      
      {/* Troubleshooting log for the user */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            console.log("--- Office Properties Troubleshooting ---");
            console.log("Listings count:", ${properties.length});
            console.log("Is using MOCK data:", ${isFallback});
            console.log("Environment configuration:", ${JSON.stringify(envStatus)});
            if (${isFallback}) {
              console.warn("DIAGNOSIS: The app is using MOCK properties. Check server logs for [Auth] or [API] errors to see if it was an authentication failure, a member lookup issue, or if the office simply has 0 active listings.");
            }
            console.log("---------------------------------------------");
          `
        }}
      />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-navy mb-4 uppercase tracking-tighter">Office <span className="text-gold">Listings</span></h1>
            <p className="text-gray-600 max-w-2xl text-lg leading-relaxed mb-6">
              Sheryl Thompson is proud to partner with <span className="font-bold text-navy">Real Estate Professionals Inc.</span>, an elite group of realtors dedicated to creative and tenacious client-focused service. 
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-1 bg-gold" />
              <span className="text-navy font-bold uppercase tracking-widest text-sm italic">“Go with the Pros”</span>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <FeatureCard key={property.id} property={property} />
            ))}
          </div>
          
          {properties.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No office listings found at this time.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
