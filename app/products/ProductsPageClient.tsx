'use client';

import { useState, useMemo } from 'react';
import { Product } from '@/types/product';
import FilterBar from '@/components/product/FilterBar';
import ProductGrid from '@/components/product/ProductGrid';

interface ProductsPageClientProps {
  initialProducts: Product[];
}

interface FilterState {
  neckFinish: string[];
  material: string[];
  lockType: string[];
  sustainableOnly: boolean;
}

export default function ProductsPageClient({ initialProducts }: ProductsPageClientProps) {
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
        <h2 className="text-h3 font-heading text-text-primary mb-6">All Products</h2>

        <FilterBar
          products={initialProducts}
          onFilterChange={setFilters}
        />

        <div className="mt-6 mb-4 flex items-center justify-between">
          <p className="text-sm text-text-secondary">
            Showing <span className="font-semibold text-text-primary">{filteredProducts.length}</span>{' '}
            of {initialProducts.length} products
          </p>
        </div>

        <ProductGrid
          products={filteredProducts}
          emptyMessage="No products match your current filters. Try adjusting your selection."
        />

        <div className="mt-12 p-6 bg-[#F0EDE8] rounded-lg border border-[#D4AF37]/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-text-primary">Need a Custom Solution?</h3>
              <p className="text-sm text-text-secondary mt-1">
                We offer custom mold development for volume orders. Speak to our engineering team.
              </p>
            </div>
            <a
              href="mailto:info@cngreenyard.com?subject=Custom Solution Inquiry"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-white font-semibold text-sm rounded-md hover:bg-[#E8D58A] transition-colors whitespace-nowrap"
            >
              Contact Engineering &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
