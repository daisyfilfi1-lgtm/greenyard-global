'use client';

import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  selected?: boolean;
  onToggleCompare?: (sku: string) => void;
  compareDisabled?: boolean;
}

export default function ProductCard({ product, selected, onToggleCompare, compareDisabled }: ProductCardProps) {
  const closureSummary = product.neckFinish.join(', ');
  const seriesRoute = getSeriesCategoryRoute(product.series);

  function getSeriesCategoryRoute(series: string): string {
    const routeMap: Record<string, string> = {
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
    return routeMap[series] || `/products/${series}`;
  }

  return (
    <div className="bg-white border border-[#DEE2E6] rounded-lg overflow-hidden transition-shadow hover:shadow-md">
      {/* Product Image */}
      <Link href={`/products/detail/${product.sku}`} className="block">
        <div className="aspect-[4/3] bg-white flex items-center justify-center p-6 border-b border-[#DEE2E6]">
          {product.imagePlaceholder?.startsWith('http') ? (
            <img
              src={product.imagePlaceholder}
              alt={product.name}
              className="w-full h-full object-contain"
              loading="lazy"
              crossOrigin="anonymous"
            />
          ) : (
            <div className="w-full h-full bg-[#F5F5F0] rounded flex flex-col items-center justify-center text-center p-4">
              <span className="text-[#00B894] font-medium text-sm">{product.sku}</span>
              <span className="text-[#6C757D] text-xs mt-2 line-clamp-2">{product.name}</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-5">
        {/* Series Badge */}
        <div className="flex items-center gap-2 mb-2">
          {product.monoMaterial && (
            <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-medium">{product.sku}</span>
          )}
          {!product.monoMaterial && product.sustainable && (
            <span className="text-[10px] text-[#00B894] uppercase tracking-wider font-medium">{product.sku}</span>
          )}
          {!product.monoMaterial && !product.sustainable && (
            <span className="text-[10px] text-[#6C757D] uppercase tracking-wider">{product.sku}</span>
          )}
        </div>

        {/* Name */}
        <Link href={`/products/detail/${product.sku}`} className="block group">
          <h3 className="font-medium text-[#0D0D0D] text-sm mt-0.5 group-hover:text-[#00B894] transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Specs */}
        <div className="mt-3 space-y-1.5 text-xs text-[#6C757D]">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#0D0D0D]">Output:</span>
            <span>{product.dischargeRate || '—'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#0D0D0D]">Closure:</span>
            <span>{closureSummary}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#0D0D0D]">Material:</span>
            <span>{product.material.join(', ')}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          <Link
            href={`/products/detail/${product.sku}`}
            className="text-xs font-medium text-[#00B894] hover:text-[#009B7A] transition-colors"
          >
            View Details &rarr;
          </Link>

          {onToggleCompare && (
            <button
              onClick={() => onToggleCompare(product.sku)}
              disabled={!selected && compareDisabled}
              className={`text-xs transition-colors ml-auto ${
                selected
                  ? 'text-[#00B894] font-medium'
                  : compareDisabled
                    ? 'text-[#6C757D] cursor-not-allowed opacity-50'
                    : 'text-[#6C757D] hover:text-[#00B894]'
              }`}
            >
              {selected ? '✓ Selected' : 'Compare'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
