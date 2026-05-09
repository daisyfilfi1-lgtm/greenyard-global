'use client';

import { useState } from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import ComparisonModal from './ComparisonModal';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

const MAX_COMPARE = 3;

export default function ProductGrid({ products, emptyMessage }: ProductGridProps) {
  const [compareSkus, setCompareSkus] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  function toggleCompare(sku: string) {
    setCompareSkus(prev =>
      prev.includes(sku) ? prev.filter(s => s !== sku) : [...prev, sku]
    );
  }

  const compareProducts = products.filter(p => compareSkus.includes(p.sku));

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E8F5F1] flex items-center justify-center">
          <svg className="w-8 h-8 text-[#00B894]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
          </svg>
        </div>
        <p className="text-text-secondary">{emptyMessage || 'No products match your current filters.'}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Comparison Bar */}
      {compareSkus.length > 0 && (
        <div className="mb-6 p-4 bg-white rounded-lg border border-[#E8E8E0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-text-primary">
              {compareSkus.length} of {MAX_COMPARE} selected
            </span>
            <div className="flex gap-2">
              {compareSkus.map(sku => (
                <span key={sku} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#E8F5F1] text-xs font-medium text-text-primary rounded-full">
                  {sku}
                  <button onClick={() => toggleCompare(sku)} className="hover:text-[#00B894]" aria-label={`Remove ${sku}`}>
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setCompareSkus([])}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Clear
            </button>
            <button
              onClick={() => setShowComparison(true)}
              className="px-4 py-2 text-sm font-semibold bg-[#00B894] text-white rounded-md hover:bg-[#009B7A] transition-colors"
            >
              Compare Selected
            </button>
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map(product => (
          <ProductCard
            key={product.sku}
            product={product}
            selected={compareSkus.includes(product.sku)}
            onToggleCompare={toggleCompare}
            compareDisabled={compareSkus.length >= MAX_COMPARE && !compareSkus.includes(product.sku)}
          />
        ))}
      </div>

      {/* Comparison Modal */}
      {showComparison && (
        <ComparisonModal
          products={compareProducts}
          onClose={() => setShowComparison(false)}
        />
      )}
    </div>
  );
}
