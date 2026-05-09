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

function getSeriesForSlug(slug: string) {
  const directMatch = Object.values(SERIES_INFO).find(s => s.categoryRoute === `/products/${slug}`);
  if (directMatch) return directMatch;

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
      <section className="section-padding bg-[#F5F7F6]">
        <div className="section-container">
          <nav className="flex items-center gap-2 text-sm text-[#757575] mb-6">
            <a href="/" className="hover:text-[#0F3D26] transition-colors">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-[#0F3D26] transition-colors">Products</a>
            <span>/</span>
            <span className="text-[#1A1A1A]">{series?.name || slug}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            {series?.name || 'Products'}
          </h1>
          {series && (
            <p className="text-[#757575] mt-3 max-w-2xl">{series.description}</p>
          )}

          {includedSeriesNames.length > 1 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {includedSeriesNames.map(name => (
                <span key={name} className="text-xs text-[#757575] bg-white px-3 py-1.5 border border-[#EAECEB]">
                  {name}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <CategoryPageClient
        initialProducts={categoryProducts}
        seriesName={series?.name || 'Products'}
      />
    </main>
  );
}
