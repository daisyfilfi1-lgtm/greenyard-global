import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProductBySku, getRelatedProducts } from '@/lib/data/products';
import { SERIES_INFO } from '@/lib/constants';
import ProductDetailClient from './ProductDetailClient';

interface Props {
  params: Promise<{ sku: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sku } = await params;
  const product = getProductBySku(sku);
  if (!product) return { title: 'Product - GreenYard' };

  return {
    title: `${product.sku} ${product.name} - GreenYard`,
    description: product.description,
    openGraph: {
      title: `${product.sku} ${product.name} - GreenYard`,
      description: product.description,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { sku } = await params;
  const product = getProductBySku(sku);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(sku);
  const seriesInfo = SERIES_INFO[product.series];

  // Determine category route for breadcrumbs
  const categoryRouteMap: Record<string, string> = {
    'fully-recyclable': '/products/fully-recyclable',
    'mist-sprayer': '/products/mist-sprayers',
    'fine-mist': '/products/mist-sprayers',
    'treatment-pump': '/products/pumps',
    'lotion-pump': '/products/pumps',
    'foam-pump': '/products/pumps',
    'trigger-sprayer': '/products/trigger-sprayers',
    'nail-pump': '/products/pumps',
    'dropper': '/products/droppers',
    'airless-bottle': '/products/cosmetic-packaging',
    'deodorant-stick': '/products/cosmetic-packaging',
    'cream-jar': '/products/cosmetic-packaging',
    'plastic-bottle-set': '/products/cosmetic-packaging',
  };

  const categoryRoute = categoryRouteMap[product.series] || '/products';

  return (
    <main>
      {/* Breadcrumb */}
      <section className="bg-[#F5F5F0] pt-6 pb-0">
        <div className="section-container">
          <nav className="flex items-center gap-2 text-sm text-text-secondary">
            <a href="/" className="hover:text-[#00B894] transition-colors">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-[#00B894] transition-colors">Products</a>
            <span>/</span>
            <a href={categoryRoute} className="hover:text-[#00B894] transition-colors">
              {seriesInfo?.name || 'Category'}
            </a>
            <span>/</span>
            <span className="text-text-primary">{product.sku}</span>
          </nav>
        </div>
      </section>

      {/* HERO ZONE */}
      <section className="section-padding pt-8 bg-[#F5F5F0]">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-square bg-white rounded-xl border border-[#E8E8E0] flex items-center justify-center p-8">
                <div className="w-full h-full bg-[#F5F5F0] rounded-lg flex flex-col items-center justify-center text-center p-6">
                  <span className="text-[#D4AF37] font-bold text-lg">{product.sku}</span>
                  <span className="text-text-secondary text-sm mt-2 max-w-xs">{product.name}</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.monoMaterial && (
                  <span className="gold-badge">Mono Material</span>
                )}
                {product.sustainable && (
                  <span className="mint-badge">Sustainable</span>
                )}
                {product.pcrAvailable && (
                  <span className="mint-badge">PCR Available</span>
                )}
              </div>

              <h1 className="text-h3 md:text-h2 font-heading text-text-primary">
                {product.name}
              </h1>
              <p className="text-[#D4AF37] font-medium text-sm md:text-base mt-2">
                {product.tagline}
              </p>
              <p className="text-text-secondary mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <div className="bg-white rounded-lg p-3 border border-[#E8E8E0]">
                  <span className="text-xs text-text-secondary">Output</span>
                  <p className="font-semibold text-text-primary mt-0.5">{product.dischargeRate || '—'}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-[#E8E8E0]">
                  <span className="text-xs text-text-secondary">Neck Finish</span>
                  <p className="font-semibold text-text-primary mt-0.5">{product.neckFinish.join(', ')}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-[#E8E8E0]">
                  <span className="text-xs text-text-secondary">Material</span>
                  <p className="font-semibold text-text-primary mt-0.5">{product.material.join(', ')}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-[#E8E8E0]">
                  <span className="text-xs text-text-secondary">Lock Type</span>
                  <p className="font-semibold text-text-primary mt-0.5">{product.lockType || '—'}</p>
                </div>
              </div>

              {/* Quick Action Bar */}
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={`mailto:info@cngreenyard.com?subject=Sample Request: ${product.sku}`}
                  className="px-5 py-2.5 text-sm font-semibold bg-[#00B894] text-white rounded-md hover:bg-[#009B7A] transition-colors"
                >
                  Request Sample
                </a>
                <a
                  href="#specifications"
                  className="px-5 py-2.5 text-sm font-semibold bg-white text-text-primary border border-[#DEE2E6] rounded-md hover:border-[#00B894] hover:text-[#00B894] transition-colors"
                >
                  View Specs
                </a>
                <a
                  href={`mailto:info@cngreenyard.com?subject=Tech Sheet: ${product.sku}`}
                  className="px-5 py-2.5 text-sm font-medium text-text-secondary border border-[#DEE2E6] rounded-md hover:border-[#00B894] hover:text-[#00B894] transition-colors"
                >
                  Download Tech Sheet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Client (interactive parts) */}
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </main>
  );
}
