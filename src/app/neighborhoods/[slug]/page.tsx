import { Metadata } from 'next';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { getProperties } from '@/lib/api';
import { FeatureCard } from '@/components/molecules/FeatureCard';
import { MapPin, Info, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * STRATEGY FOR NEIGHBORHOOD LANDING PAGES (Local SEO):
 * 1. URL Structure: /neighborhoods/[slug] (e.g., /neighborhoods/yorkville-toronto)
 * 2. Keyword Optimization: Target "[Neighborhood Name] Real Estate", "Homes for sale in [Neighborhood]", "[Neighborhood] Market Trends"
 * 3. Dynamic Metadata: Use generateMetadata to create unique titles/descriptions per neighborhood.
 * 4. Local Content: Include neighborhood history, amenities (schools, parks, transit), and market statistics.
 * 5. Structured Data: Implement LocalBusiness or RealEstateListing schema.
 * 6. Internal Linking: Link to these pages from the footer and property detail pages.
 */

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const neighborhoodName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const title = `Homes for Sale in ${neighborhoodName} | ${neighborhoodName} Real Estate`;
  const description = `Explore the latest property listings, market trends, and neighborhood guides for ${neighborhoodName}. Find your dream home with Sheryl Thompson.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const neighborhoodName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const properties = await getProperties(); // In a real app, filter by neighborhood

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1449156059539-79834248961d?q=80&w=2070')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-widest mb-4">
            <MapPin size={16} />
            <span>Toronto Neighborhoods</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-tighter">
            {neighborhoodName} <span className="text-gold">Real Estate</span>
          </h1>
          <div className="w-24 h-1 bg-gold mb-8" />
          <p className="max-w-2xl text-white-muted text-xl leading-relaxed">
            Discover why {neighborhoodName} is one of the most sought-after communities. Explore current listings and expert local insights.
          </p>
        </div>
      </section>

      {/* Market Stats Bar */}
      <section className="bg-white-clean border-y border-white-muted py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Avg. Listing Price</div>
            <div className="text-2xl font-bold text-navy">$850,000</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Days on Market</div>
            <div className="text-2xl font-bold text-navy">12 Days</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Active Listings</div>
            <div className="text-2xl font-bold text-navy">48</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Market State</div>
            <div className="text-2xl font-bold text-gold">Seller&apos;s Market</div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-navy mb-8 uppercase tracking-tight">Current Listings in {neighborhoodName}</h2>
            {properties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {properties.map((property) => (
                  <FeatureCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-white-clean p-12 text-center rounded-lg border border-white-muted mb-16">
                <p className="text-gray-500 text-lg">No listings currently available in {neighborhoodName}.</p>
                <Link href="/contact" className="text-gold font-bold hover:underline mt-4 inline-block">
                  Notify me when properties become available
                </Link>
              </div>
            )}

            <div className="prose prose-navy max-w-none bg-white-clean p-10 border border-white-muted rounded-lg">
              <h2 className="text-2xl font-bold text-navy mb-6">About {neighborhoodName}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {neighborhoodName} is renowned for its unique charm and vibrant community. From historic architecture to modern amenities, it offers a lifestyle that is both comfortable and welcoming.
              </p>
              <h3 className="text-xl font-bold text-navy mb-4">Local Amenities</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 list-none p-0">
                <li className="flex items-center gap-2"><Info size={16} className="text-gold" /> Top-rated public & private schools</li>
                <li className="flex items-center gap-2"><Info size={16} className="text-gold" /> Local dining and shopping</li>
                <li className="flex items-center gap-2"><Info size={16} className="text-gold" /> Beautiful parks and walking trails</li>
                <li className="flex items-center gap-2"><Info size={16} className="text-gold" /> Convenient access to public transit</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-32">
              {/* Expert Advice CTA */}
              <div className="bg-navy p-8 text-white rounded-lg">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Neighborhood Expert</h3>
                <p className="text-white-muted text-sm mb-6 leading-relaxed">
                  Sheryl Thompson has helped hundreds of families find their perfect home in {neighborhoodName}.
                </p>
                <Link href="/contact" className="block w-full text-center bg-gold text-white py-3 font-bold uppercase tracking-widest text-xs hover:bg-gold-dark transition-colors">
                  Ask a Question
                </Link>
              </div>

              {/* Related Neighborhoods */}
              <div className="border border-white-muted p-8 rounded-lg">
                <h3 className="text-navy font-bold uppercase text-sm tracking-widest mb-6 border-b border-white-muted pb-4">Other Neighborhoods</h3>
                <ul className="space-y-4">
                  {['Rosedale', 'The Annex', 'Forest Hill', 'Bridle Path'].map((area) => (
                    <li key={area}>
                      <Link href={`/neighborhoods/${area.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-gold flex items-center justify-between group">
                        <span>{area}</span>
                        <TrendingUp size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
