import { Metadata } from 'next';
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

// Create a flat list of all products with their category info
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
      {/* Page Header */}
      <section className="section-padding section-light">
        <div className="section-container">
          <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <a href="/" className="hover:text-[#00B894] transition-colors">Home</a>
            <span>/</span>
            <span className="text-text-primary">Products</span>
          </nav>

          <h1 className="text-h2 md:text-h1 font-heading text-text-primary">All Products</h1>
          <p className="text-text-secondary mt-3 max-w-2xl">
            GreenYard offers 200+ SKUs across 13 product series. Browse by category below or filter by specification.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="section-padding pt-0 section-light">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(cat => (
              <a
                key={cat.category}
                href={cat.route}
                className="bg-white rounded-xl border border-[#E8E8E0] p-6 hover-lift block"
              >
                <h3 className="font-semibold text-text-primary text-lg">{cat.category}</h3>
                <p className="text-xs text-text-secondary mt-1">
                  {cat.products.length} products{cat.seriesCount > 1 ? ` · ${cat.seriesCount} series` : ''}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.products.slice(0, 5).map(p => (
                    <span key={p.sku} className="text-xs text-[#D4AF37] font-medium">{p.sku}</span>
                  ))}
                  {cat.products.length > 5 && (
                    <span className="text-xs text-text-secondary">+{cat.products.length - 5} more</span>
                  )}
                </div>
                <span className="text-sm font-semibold text-[#00B894] mt-3 inline-block">
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
