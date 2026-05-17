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
    <section className="section-padding bg-[#F0EDE8]">
      <div className="section-container">
        <FilterBar
          products={initialProducts}
          onFilterChange={setFilters}
        />

        <div className="mt-6 mb-4 flex items-center justify-between">
          <p className="text-sm text-[#6B6B6B]">
            Showing <span className="font-medium text-[#1A1A1A]">{filteredProducts.length}</span>{' '}
            of {initialProducts.length} products
          </p>
        </div>

        <ProductGrid
          products={filteredProducts}
          emptyMessage="No products match your current filters. Try adjusting your selection."
        />

        <div className="mt-12 p-6 bg-white border border-[#E5E0D8] rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-[#1A1A1A]">Need Multiple SKUs?</h3>
              <p className="text-sm text-[#6B6B6B] mt-1">
                Send a consolidated RFQ for 5+ products. Get volume pricing and lead times in one response.
              </p>
            </div>
            <a
              href={`mailto:info@cngreenyard.com?subject=RFQ: Bulk Inquiry - ${seriesName}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1A1A] text-white font-medium text-sm hover:bg-[#333333] transition-colors whitespace-nowrap rounded-[4px]"
            >
              Send Bulk RFQ &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
