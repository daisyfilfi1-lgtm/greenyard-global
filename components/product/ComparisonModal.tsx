'use client';

import { useEffect, useRef } from 'react';
import { Product } from '@/types/product';

interface ComparisonModalProps {
  products: Product[];
  onClose: () => void;
}

export default function ComparisonModal({ products, onClose }: ComparisonModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (products.length === 0) return null;

  const allSpecKeys = [
    { label: 'Discharge Rate', key: 'dischargeRate' as const },
    { label: 'Neck Finish', key: 'neckFinish' as const },
    { label: 'Material', key: 'material' as const },
    { label: 'Lock Type', key: 'lockType' as const },
    { label: 'Viscosity Range', key: 'viscosityRange' as const },
    { label: 'Mono Material', key: 'monoMaterial' as const },
    { label: 'PCR Available', key: 'pcrAvailable' as const },
    { label: 'Sustainable', key: 'sustainable' as const },
  ];

  function getSpecValue(product: Product, key: string): string {
    switch (key) {
      case 'neckFinish': return product.neckFinish.join(', ');
      case 'material': return product.material.join(', ');
      case 'dischargeRate': return product.dischargeRate || '—';
      case 'lockType': return product.lockType || '—';
      case 'viscosityRange': return product.viscosityRange || '—';
      case 'monoMaterial': return product.monoMaterial ? '✓ Yes' : '—';
      case 'pcrAvailable': return product.pcrAvailable ? '✓ Up to 100%' : '—';
      case 'sustainable': return product.sustainable ? '✓ Yes' : '—';
      default: return '—';
    }
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[400] flex items-start justify-center pt-16 pb-8 px-4 overflow-y-auto"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-[-1]" />

      {/* Modal */}
      <div className="bg-[#F5F5F0] rounded-xl max-w-5xl w-full shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DEE2E6]">
          <h2 className="text-lg font-semibold text-text-primary">
            Compare Products ({products.length})
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#E8E8E0] transition-colors text-text-secondary hover:text-text-primary"
            aria-label="Close comparison"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#DEE2E6]">
                <th className="text-left px-6 py-3 text-text-secondary font-medium w-1/5">Specification</th>
                {products.map(p => (
                  <th key={p.sku} className="px-4 py-3 text-center">
                    <span className="text-[#D4AF37] font-semibold">{p.sku}</span>
                    <p className="text-xs text-text-secondary font-normal mt-0.5">{p.name}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allSpecKeys.map((spec, idx) => (
                <tr key={spec.key} className={idx % 2 === 0 ? 'bg-[#E8F5F1]/50' : 'bg-white'}>
                  <td className="px-6 py-3 font-medium text-text-primary">{spec.label}</td>
                  {products.map(p => (
                    <td key={p.sku} className="px-4 py-3 text-center text-text-secondary">
                      {getSpecValue(p, spec.key)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#DEE2E6] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Close
          </button>
          <a
            href={`mailto:info@cngreenyard.com?subject=RFQ: ${products.map(p => p.sku).join(', ')}`}
            className="px-5 py-2 text-sm font-semibold bg-[#00B894] text-white rounded-md hover:bg-[#009B7A] transition-colors"
          >
            Request Quote for Selected
          </a>
        </div>
      </div>
    </div>
  );
}
