import { Metadata } from 'next';
import Image from 'next/image';
import { products } from '@/lib/data/products';
import { SERIES_INFO } from '@/lib/constants';
import ProductsPageClient from './ProductsPageClient';

export const metadata: Metadata = {
  title: 'All Products - GreenYard',
  description: 'Browse our complete range of sprayers, pumps, droppers, and cosmetic packaging solutions.',
  openGraph: {
    title: 'All Products - GreenYard',
    description: 'Browse our complete range of sprayers, pumps, droppers, and cosmetic packaging solutions.',
  },
};

function getCategoryProducts() {
  const categorySlugMappings: Record<string, string[]> = {
    'Fully Recyclable Series': ['fully-recyclable'],
    'Mist Sprayers': ['mist-sprayer', 'fine-mist'],
    'Pumps': ['treatment-pump', 'lotion-pump', 'foam-pump', 'nail-pump'],
    'Trigger Sprayers': ['trigger-sprayer'],
    'Droppers': ['dropper'],
    'Cosmetic Packaging': ['airless-bottle', 'deodorant-stick', 'cream-jar', 'plastic-bottle-set'],
  };

  const categoryRoutes: Record<string, string> = {
    'Fully Recyclable Series': '/products/fully-recyclable',
    'Mist Sprayers': '/products/mist-sprayers',
    'Pumps': '/products/pumps',
    'Trigger Sprayers': '/products/trigger-sprayers',
    'Droppers': '/products/droppers',
    'Cosmetic Packaging': '/products/cosmetic-packaging',
  };

  return Object.entries(categorySlugMappings).map(([category, seriesList]) => ({
    category,
    route: categoryRoutes[category],
    products: products.filter(p => seriesList.includes(p.series)),
    seriesCount: seriesList.length,
  }));
}

export default function ProductsPage() {
  const categories = getCategoryProducts();

  return (
    <main>
      {/* Page Hero with Background Image */}
      <section className="relative min-h-[45vh] flex items-end bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Top-Down Grid of 24 Lotion Pumps.png"
            alt="All Products"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 section-container w-full py-16 lg:py-24">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">All Products</h1>
          <p className="text-[#d1d1d1] text-base md:text-lg max-w-2xl leading-relaxed">
            GreenYard offers 200+ SKUs across 13 product series. Browse by category below or filter by specification.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="section-padding bg-[#F0EDE8]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(cat => (
              <a
                key={cat.category}
                href={cat.route}
                className="bg-white border border-[#E5E0D8] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all block rounded-[4px]"
              >
                <h3 className="font-semibold text-[#1A1A1A] text-lg">{cat.category}</h3>
                <p className="text-xs text-[#6B6B6B] mt-1">
                  {cat.products.length} products{cat.seriesCount > 1 ? ` · ${cat.seriesCount} series` : ''}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.products.slice(0, 5).map(p => (
                    <span key={p.sku} className="text-xs text-[#6B6B6B] font-medium">{p.sku}</span>
                  ))}
                  {cat.products.length > 5 && (
                    <span className="text-xs text-[#6B6B6B]">+{cat.products.length - 5} more</span>
                  )}
                </div>
                <span className="text-sm font-medium text-[#1A1A1A] mt-3 inline-block">
                  Browse {cat.category} &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Table */}
      <ProductsPageClient initialProducts={products} />
    </main>
  );
}
