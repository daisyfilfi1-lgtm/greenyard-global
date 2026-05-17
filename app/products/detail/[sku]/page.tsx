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
      <section className="bg-[#F0EDE8] pt-6 pb-0">
        <div className="section-container">
          <nav className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <a href="/" className="hover:text-[#1A1A1A] transition-colors">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-[#1A1A1A] transition-colors">Products</a>
            <span>/</span>
            <a href={categoryRoute} className="hover:text-[#1A1A1A] transition-colors">
              {seriesInfo?.name || 'Category'}
            </a>
            <span>/</span>
            <span className="text-[#1A1A1A]">{product.sku}</span>
          </nav>
        </div>
      </section>

      {/* HERO ZONE */}
      <section className="section-padding pt-8 bg-[#F0EDE8]">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-square bg-white border border-[#E5E0D8] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center p-8 rounded-[4px]">
                {(product.imagePlaceholder?.startsWith('http') || product.imagePlaceholder?.startsWith('/')) ? (
                  <img
                    src={product.imagePlaceholder}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    crossOrigin="anonymous"
                  />
                ) : (
                  <div className="w-full h-full bg-[#F0EDE8] flex flex-col items-center justify-center text-center p-6">
                    <span className="text-[#1A1A1A] font-semibold text-lg">{product.sku}</span>
                    <span className="text-[#6B6B6B] text-sm mt-2 max-w-xs">{product.name}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <p className="text-xs text-[#6B6B6B] uppercase tracking-wider mb-2">{product.sku}</p>

              <h1 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">
                {product.name}
              </h1>
              <p className="text-[#333333] text-sm mt-2">
                {product.tagline}
              </p>
              <p className="text-[#6B6B6B] mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <div className="bg-white p-3 border border-[#E5E0D8]">
                  <span className="text-xs text-[#6B6B6B]">Output</span>
                  <p className="font-semibold text-[#1A1A1A] mt-0.5">{product.dischargeRate || '—'}</p>
                </div>
                <div className="bg-white p-3 border border-[#E5E0D8]">
                  <span className="text-xs text-[#6B6B6B]">Neck Finish</span>
                  <p className="font-semibold text-[#1A1A1A] mt-0.5">{product.neckFinish.join(', ')}</p>
                </div>
                <div className="bg-white p-3 border border-[#E5E0D8]">
                  <span className="text-xs text-[#6B6B6B]">Material</span>
                  <p className="font-semibold text-[#1A1A1A] mt-0.5">{product.material.join(', ')}</p>
                </div>
                <div className="bg-white p-3 border border-[#E5E0D8]">
                  <span className="text-xs text-[#6B6B6B]">Lock Type</span>
                  <p className="font-semibold text-[#1A1A1A] mt-0.5">{product.lockType || '—'}</p>
                </div>
              </div>

              {/* Quick Action Bar */}
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={`mailto:info@cngreenyard.com?subject=Sample Request: ${product.sku}`}
                  className="px-5 py-2.5 text-sm font-medium bg-[#1A1A1A] text-white hover:bg-[#333333] transition-colors rounded-[4px]"
                >
                  Request Sample
                </a>
                <a
                  href="#specifications"
                  className="px-5 py-2.5 text-sm font-medium bg-white text-[#1A1A1A] border border-[#E5E0D8] hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors rounded-[4px]"
                >
                  View Specs
                </a>
                <a
                  href={`mailto:info@cngreenyard.com?subject=Tech Sheet: ${product.sku}`}
                  className="px-5 py-2.5 text-sm text-[#6B6B6B] border border-[#E5E0D8] hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors rounded-[4px]"
                >
                  Download Tech Sheet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </main>
  );
}
