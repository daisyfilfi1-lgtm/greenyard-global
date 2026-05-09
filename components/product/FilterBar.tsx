'use client';

import { useState, useMemo } from 'react';
import { Product } from '@/types/product';

interface FilterState {
  neckFinish: string[];
  material: string[];
  lockType: string[];
  sustainableOnly: boolean;
}

interface FilterBarProps {
  products: Product[];
  onFilterChange: (filters: FilterState) => void;
}

export default function FilterBar({ products, onFilterChange }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterState>({
    neckFinish: [],
    material: [],
    lockType: [],
    sustainableOnly: false,
  });

  const [showMore, setShowMore] = useState(false);

  // Derive available filter options from the current product set
  const availableOptions = useMemo(() => {
    const neckFinishSet = new Set<string>();
    const materialSet = new Set<string>();
    const lockTypeSet = new Set<string>();

    products.forEach(p => {
      p.neckFinish.forEach(nf => neckFinishSet.add(nf));
      p.material.forEach(m => materialSet.add(m));
      if (p.lockType) lockTypeSet.add(p.lockType);
    });

    return {
      neckFinish: Array.from(neckFinishSet).sort(),
      material: Array.from(materialSet).sort(),
      lockType: Array.from(lockTypeSet).sort(),
    };
  }, [products]);

  const activeChips = useMemo(() => {
    const chips: { label: string; type: keyof FilterState; value: string }[] = [];
    filters.neckFinish.forEach(v => chips.push({ label: v, type: 'neckFinish', value: v }));
    filters.material.forEach(v => chips.push({ label: v, type: 'material', value: v }));
    filters.lockType.forEach(v => chips.push({ label: v, type: 'lockType', value: v }));
    if (filters.sustainableOnly) chips.push({ label: 'Sustainable Only', type: 'sustainableOnly', value: '' });
    return chips;
  }, [filters]);

  function updateFilter(type: keyof FilterState, value: string | boolean) {
    setFilters(prev => {
      let next: FilterState;
      if (type === 'sustainableOnly') {
        next = { ...prev, sustainableOnly: !prev.sustainableOnly };
      } else if (typeof value === 'string') {
        const arr = prev[type] as string[];
        next = {
          ...prev,
          [type]: arr.includes(value)
            ? arr.filter(v => v !== value)
            : [...arr, value],
        };
      } else {
        next = prev;
      }
      onFilterChange(next);
      return next;
    });
  }

  function removeChip(type: keyof FilterState, value: string) {
    setFilters(prev => {
      let next: FilterState;
      if (type === 'sustainableOnly') {
        next = { ...prev, sustainableOnly: false };
      } else {
        const arr = prev[type] as string[];
        next = { ...prev, [type]: arr.filter(v => v !== value) };
      }
      onFilterChange(next);
      return next;
    });
  }

  function clearAll() {
    const cleared: FilterState = { neckFinish: [], material: [], lockType: [], sustainableOnly: false };
    setFilters(cleared);
    onFilterChange(cleared);
  }

  // Determine initial visible options (show up to 5 per category)
  const visibleLockTypes = showMore ? availableOptions.lockType : availableOptions.lockType.slice(0, 5);

  return (
    <div className="bg-white rounded-lg border border-[#E8E8E0] p-5">
      {/* Filter Toggles */}
      <div className="flex flex-wrap gap-x-8 gap-y-5">
        {/* Closure Size */}
        <div className="min-w-[160px]">
          <h4 className="text-xs font-semibold text-text-primary mb-2 uppercase tracking-wider">Closure Size</h4>
          <div className="flex flex-wrap gap-1.5">
            {availableOptions.neckFinish.map(option => (
              <button
                key={option}
                onClick={() => updateFilter('neckFinish', option)}
                className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                  filters.neckFinish.includes(option)
                    ? 'bg-[#00B894] text-white border-[#00B894]'
                    : 'bg-white text-text-secondary border-[#DEE2E6] hover:border-[#00B894] hover:text-[#00B894]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Material */}
        <div className="min-w-[140px]">
          <h4 className="text-xs font-semibold text-text-primary mb-2 uppercase tracking-wider">Material</h4>
          <div className="flex flex-wrap gap-1.5">
            {availableOptions.material.map(option => (
              <button
                key={option}
                onClick={() => updateFilter('material', option)}
                className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                  filters.material.includes(option)
                    ? 'bg-[#00B894] text-white border-[#00B894]'
                    : 'bg-white text-text-secondary border-[#DEE2E6] hover:border-[#00B894] hover:text-[#00B894]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Lock Type */}
        {availableOptions.lockType.length > 0 && (
          <div className="min-w-[140px]">
            <h4 className="text-xs font-semibold text-text-primary mb-2 uppercase tracking-wider">Lock Type</h4>
            <div className="flex flex-wrap gap-1.5">
              {visibleLockTypes.map(option => (
                <button
                  key={option}
                  onClick={() => updateFilter('lockType', option)}
                  className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                    filters.lockType.includes(option)
                      ? 'bg-[#00B894] text-white border-[#00B894]'
                      : 'bg-white text-text-secondary border-[#DEE2E6] hover:border-[#00B894] hover:text-[#00B894]'
                  }`}
                >
                  {option}
                </button>
              ))}
              {availableOptions.lockType.length > 5 && (
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="px-3 py-1.5 text-xs text-[#00B894] hover:text-[#009B7A] transition-colors"
                >
                  {showMore ? 'Show less' : `+${availableOptions.lockType.length - 5} more`}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Sustainable Toggle */}
        <div className="flex items-center">
          <button
            onClick={() => updateFilter('sustainableOnly', true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition-colors ${
              filters.sustainableOnly
                ? 'bg-[#00B894] text-white border-[#00B894]'
                : 'bg-white text-text-secondary border-[#DEE2E6] hover:border-[#00B894] hover:text-[#00B894]'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Sustainable Only
          </button>
        </div>
      </div>

      {/* Active Filter Chips */}
      {activeChips.length > 0 && (
        <div className="mt-4 pt-4 border-t border-[#DEE2E6] flex items-center gap-2 flex-wrap">
          <span className="text-xs text-text-secondary">Active filters:</span>
          {activeChips.map((chip, i) => (
            <span
              key={`${chip.type}-${chip.value}-${i}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#00B894]/10 text-[#00B894] text-xs rounded-full"
            >
              {chip.label === 'true' ? 'Sustainable Only' : chip.label}
              <button
                onClick={() => removeChip(chip.type, chip.value)}
                className="hover:text-[#009B7A] ml-0.5"
                aria-label={`Remove ${chip.label} filter`}
              >
                &times;
              </button>
            </span>
          ))}
          <button
            onClick={clearAll}
            className="text-xs text-text-secondary hover:text-[#00B894] ml-2 underline"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}
