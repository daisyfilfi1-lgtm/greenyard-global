import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { products } from '@/lib/data/products';
import { SERIES_INFO } from '@/lib/constants';
import CategoryPageClient from './CategoryPageClient';

const VALID_SLUGS = ['fully-recyclable', 'mist-sprayers', 'pumps', 'trigger-sprayers', 'droppers', 'cosmetic-packaging'];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const series = getSeriesForSlug(slug);
  if (!series) return { title: 'Products - GreenYard' };

  return {
    title: `${series.name} - GreenYard`,
    description: series.description,
    openGraph: {
      title: `${series.name} - GreenYard`,
      description: series.description,
    },
  };
}

/** Map category route slug to matching series slugs */
function getSeriesForSlug(slug: string) {
  const directMatch = Object.values(SERIES_INFO).find(s => s.categoryRoute === `/products/${slug}`);
  if (directMatch) return directMatch;

  // Map slug patterns to series
  const slugMappings: Record<string, string[]> = {
    'fully-recyclable': ['fully-recyclable'],
    'mist-sprayers': ['mist-sprayer', 'fine-mist'],
    'pumps': ['treatment-pump', 'lotion-pump', 'foam-pump', 'nail-pump'],
    'trigger-sprayers': ['trigger-sprayer'],
    'droppers': ['dropper'],
    'cosmetic-packaging': ['airless-bottle', 'deodorant-stick', 'cream-jar', 'plastic-bottle-set'],
  };

  const seriesSlugs = slugMappings[slug];
  if (!seriesSlugs) return null;

  return SERIES_INFO[seriesSlugs[0]] || null;
}

function getProductsBySlug(slug: string) {
  const slugMappings: Record<string, string[]> = {
    'fully-recyclable': ['fully-recyclable'],
    'mist-sprayers': ['mist-sprayer', 'fine-mist'],
    'pumps': ['treatment-pump', 'lotion-pump', 'foam-pump', 'nail-pump'],
    'trigger-sprayers': ['trigger-sprayer'],
    'droppers': ['dropper'],
    'cosmetic-packaging': ['airless-bottle', 'deodorant-stick', 'cream-jar', 'plastic-bottle-set'],
  };

  const seriesSlugs = slugMappings[slug];
  if (!seriesSlugs) return [];
  return products.filter(p => seriesSlugs.includes(p.series));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  const series = getSeriesForSlug(slug);
  const categoryProducts = getProductsBySlug(slug);

  // Collect all series names in this category
  const slugMappings: Record<string, string[]> = {
    'fully-recyclable': ['fully-recyclable'],
    'mist-sprayers': ['mist-sprayer', 'fine-mist'],
    'pumps': ['treatment-pump', 'lotion-pump', 'foam-pump', 'nail-pump'],
    'trigger-sprayers': ['trigger-sprayer'],
    'droppers': ['dropper'],
    'cosmetic-packaging': ['airless-bottle', 'deodorant-stick', 'cream-jar', 'plastic-bottle-set'],
  };

  const includedSeriesNames = (slugMappings[slug] || [])
    .map(s => SERIES_INFO[s]?.name)
    .filter(Boolean);

  return (
    <main>
      {/* Category Header */}
      <section className="section-padding section-light">
        <div className="section-container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <a href="/" className="hover:text-[#00B894] transition-colors">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-[#00B894] transition-colors">Products</a>
            <span>/</span>
            <span className="text-text-primary">{series?.name || slug}</span>
          </nav>

          <h1 className="text-h2 md:text-h1 font-heading text-text-primary">
            {series?.name || 'Products'}
          </h1>
          {series && (
            <p className="text-text-secondary mt-3 max-w-2xl">{series.description}</p>
          )}

          {includedSeriesNames.length > 1 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {includedSeriesNames.map(name => (
                <span key={name} className="text-xs text-text-secondary bg-white px-3 py-1.5 rounded-full border border-[#DEE2E6]">
                  {name}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Listing with Filters */}
      <CategoryPageClient
        initialProducts={categoryProducts}
        seriesName={series?.name || 'Products'}
      />
    </main>
  );
}
