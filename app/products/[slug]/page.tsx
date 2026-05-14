import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { products } from '@/lib/data/products';
import { SERIES_INFO } from '@/lib/constants';
import CategoryPageClient from './CategoryPageClient';

const VALID_SLUGS = ['fully-recyclable', 'mist-sprayers', 'pumps', 'trigger-sprayers', 'droppers', 'cosmetic-packaging'];

const HERO_IMAGES: Record<string, string> = {
  'fully-recyclable': '/images/Close-Up Recyclable PCR Pump Dispenser.png',
  'mist-sprayers': '/images/Macro Pump Head with Chemical .png',
  'pumps': '/images/Premium Eco-Friendly Pump Dispenser.png',
  'trigger-sprayers': '/images/Warehouse Shelf Trigger Sprayer Cases.png',
  'droppers': '/images/Minimalist Pharmaceutical Packaging Scene.png',
  'cosmetic-packaging': '/images/Minimalist Luxury Beauty Packaging Banner.png',
};

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
      {/* Category Hero with Background Image */}
      <section className="relative min-h-[50vh] flex items-end bg-[#1A1A1A] overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGES[slug] || '/images/Premium Eco-Friendly Pump Dispenser.png'}
            alt={series?.name || 'Product category'}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 section-container w-full py-16 lg:py-24">
          <nav className="flex items-center gap-2 text-sm text-[#d1d1d1] mb-6">
            <a href="/" className="hover:text-[#D4AF37] transition-colors">Home</a>
            <span className="text-[#666666]">/</span>
            <a href="/products" className="hover:text-[#D4AF37] transition-colors">Products</a>
            <span className="text-[#666666]">/</span>
            <span className="text-[#D4AF37]">{series?.name || slug}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            {series?.name || 'Products'}
          </h1>
          
          {series && (
            <p className="text-[#d1d1d1] text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              {series.description}
            </p>
          )}

          {includedSeriesNames.length > 1 && (
            <div className="flex flex-wrap gap-3">
              {includedSeriesNames.map(name => (
                <span key={name} className="text-xs text-white bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
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
