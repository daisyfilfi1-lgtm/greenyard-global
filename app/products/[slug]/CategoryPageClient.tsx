'use client';

import { useState, useMemo } from 'react';
import { Product } from '@/types/product';
import FilterBar from '@/components/product/FilterBar';
import ProductGrid from '@/components/product/ProductGrid';

interface CategoryPageClientProps {
  initialProducts: Product[];
  seriesName: string;
}

interface FilterState {
  neckFinish: string[];
  material: string[];
  lockType: string[];
  sustainableOnly: boolean;
}

export default function CategoryPageClient({ initialProducts, seriesName }: CategoryPageClientProps) {
  const [filters, setFilters] = useState<FilterState>({
    neckFinish: [],
    material: [],
    lockType: [],
    sustainableOnly: false,
  });

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(p => {
      if (filters.neckFinish.length > 0 && !p.neckFinish.some(nf => filters.neckFinish.includes(nf))) {
        return false;
      }
      if (filters.material.length > 0 && !p.material.some(m => filters.material.includes(m))) {
        return false;
      }
      if (filters.lockType.length > 0 && p.lockType && !filters.lockType.includes(p.lockType)) {
        return false;
      }
      if (filters.lockType.length > 0 && !p.lockType && filters.lockType.length > 0) {
        return false;
      }
      if (filters.sustainableOnly && !p.sustainable) {
        return false;
      }
      return true;
    });
  }, [initialProducts, filters]);

  return (
    <section className="section-padding section-light">
      <div className="section-container">
        {/* Filter Bar */}
        <FilterBar
          products={initialProducts}
          onFilterChange={setFilters}
        />

        {/* Results Count */}
        <div className="mt-6 mb-4 flex items-center justify-between">
          <p className="text-sm text-text-secondary">
            Showing <span className="font-semibold text-text-primary">{filteredProducts.length}</span>{' '}
            of {initialProducts.length} products
          </p>
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          emptyMessage="No products match your current filters. Try adjusting your selection."
        />

        {/* Bulk Inquiry CTA */}
        <div className="mt-12 p-6 bg-[#E8F5F1] rounded-lg border border-[#00B894]/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-text-primary">Need Multiple SKUs?</h3>
              <p className="text-sm text-text-secondary mt-1">
                Send a consolidated RFQ for 5+ products. Get volume pricing and lead times in one response.
              </p>
            </div>
            <a
              href={`mailto:info@cngreenyard.com?subject=RFQ: Bulk Inquiry - ${seriesName}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00B894] text-white font-semibold text-sm rounded-md hover:bg-[#009B7A] transition-colors whitespace-nowrap"
            >
              Send Bulk RFQ &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
