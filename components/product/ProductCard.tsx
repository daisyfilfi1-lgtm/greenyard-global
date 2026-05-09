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
    <div className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] rounded-[4px]">
      {/* Product Image */}
      <Link href={`/products/detail/${product.sku}`} className="block">
        <div className="aspect-[4/3] bg-white flex items-center justify-center p-6 border-b border-[#EAECEB]">
          {product.imagePlaceholder?.startsWith('http') ? (
            <img
              src={product.imagePlaceholder}
              alt={product.name}
              className="w-full h-full object-contain"
              loading="lazy"
              crossOrigin="anonymous"
            />
          ) : (
            <div className="w-full h-full bg-[#F5F7F6] rounded flex flex-col items-center justify-center text-center p-4">
              <span className="text-[#0F3D26] font-semibold text-sm">{product.sku}</span>
              <span className="text-[#757575] text-xs mt-2 line-clamp-2">{product.name}</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-5">
        {/* SKU Badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] text-[#757575] uppercase tracking-wider">{product.sku}</span>
        </div>

        {/* Name */}
        <Link href={`/products/detail/${product.sku}`} className="block group">
          <h3 className="font-semibold text-[#1A1A1A] text-sm mt-0.5 group-hover:text-[#0F3D26] transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Specs */}
        <div className="mt-3 space-y-1.5 text-xs text-[#757575]">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#1A1A1A]">Output:</span>
            <span>{product.dischargeRate || '—'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#1A1A1A]">Closure:</span>
            <span>{closureSummary}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#1A1A1A]">Material:</span>
            <span>{product.material.join(', ')}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          <Link
            href={`/products/detail/${product.sku}`}
            className="text-xs font-medium text-[#0F3D26] hover:text-[#0B2D1C] transition-colors"
          >
            View Details &rarr;
          </Link>

          {onToggleCompare && (
            <button
              onClick={() => onToggleCompare(product.sku)}
              disabled={!selected && compareDisabled}
              className={`text-xs transition-colors ml-auto ${
                selected
                  ? 'text-[#0F3D26] font-medium'
                  : compareDisabled
                    ? 'text-[#757575] cursor-not-allowed opacity-50'
                    : 'text-[#757575] hover:text-[#0F3D26]'
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
