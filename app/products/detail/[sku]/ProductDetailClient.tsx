'use client';

import { useState } from 'react';
import { Product } from '@/types/product';
import RequestSampleModal from '@/components/product/RequestSampleModal';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [showSampleModal, setShowSampleModal] = useState(false);

  const groupedOptions = product.options.reduce<Record<string, typeof product.options>>((acc, opt) => {
    if (!acc[opt.type]) acc[opt.type] = [];
    acc[opt.type].push(opt);
    return acc;
  }, {});

  return (
    <>
      {/* SPECIFICATION TABLE + SUSTAINABILITY */}
      <section id="specifications" className="section-padding bg-[#F5F7F6]">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Spec Table — 2/3 */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-6">Specifications</h2>
              <div className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden rounded-[4px]">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { label: 'SKU', value: product.sku },
                      { label: 'Product Name', value: product.name },
                      { label: 'Series', value: product.series.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) },
                      { label: 'Discharge Rate', value: product.dischargeRate || '—' },
                      { label: 'Neck Finish', value: product.neckFinish.join(', ') },
                      { label: 'Material', value: product.material.join(', ') },
                      { label: 'Lock Type', value: product.lockType || '—' },
                      { label: 'Viscosity Range', value: product.viscosityRange || '—' },
                    ].map((row, idx) => (
                      <tr key={row.label} className={idx % 2 === 0 ? 'bg-[#EAECEB]/50' : 'bg-white'}>
                        <td className="px-6 py-3.5 font-semibold text-[#1A1A1A] w-1/3 border-r border-[#EAECEB]">{row.label}</td>
                        <td className="px-6 py-3.5 text-[#757575]">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sustainability Attributes — 1/3 */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-xl font-semibold text-[#1A1A1A] mb-6">Sustainability</h2>
              <div className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 rounded-[4px]">
                {product.monoMaterial && (
                  <div className="mb-5 p-4 bg-[#F5F7F6] border border-[#EAECEB] rounded-[4px]">
                    <span className="text-xs text-[#0F3D26] uppercase tracking-wider font-semibold">Mono Material</span>
                    <p className="text-sm text-[#757575] mt-2">
                      100% all-plastic construction. No metal spring contact. Recyclable in standard PE stream.
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 ${product.monoMaterial ? 'bg-[#0F3D26] text-white' : 'bg-[#EAECEB]'}`}>
                      {product.monoMaterial && <span className="text-xs">&#10003;</span>}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">Mono Material Construction</p>
                      <p className="text-xs text-[#757575] mt-0.5">Single-material design for easy recycling</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 ${product.pcrAvailable ? 'bg-[#0F3D26] text-white' : 'bg-[#EAECEB]'}`}>
                      {product.pcrAvailable && <span className="text-xs">&#10003;</span>}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">PCR Available</p>
                      <p className="text-xs text-[#757575] mt-0.5">Post-consumer recycled content up to 50%</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#0F3D26] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">&#10003;</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">REACH Compliant</p>
                      <p className="text-xs text-[#757575] mt-0.5">EU chemical safety regulation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#0F3D26] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">&#10003;</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">FDA Compliant</p>
                      <p className="text-xs text-[#757575] mt-0.5">Food and drug contact safe materials</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#F5F7F6] border border-[#EAECEB] rounded-[4px]">
                  <p className="text-sm text-[#1A1A1A] font-semibold">Need sustainability documentation?</p>
                  <p className="text-xs text-[#757575] mt-1">
                    Request our environmental compliance package including material declarations and recyclability certificates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIGURATION OPTIONS */}
      {product.options.length > 0 && (
        <section className="section-padding bg-[#F5F7F6]">
          <div className="section-container">
            <h2 className="text-xl font-semibold text-[#1A1A1A] mb-2">Configuration Options</h2>
            <p className="text-[#757575] mb-8">Customize your product with available component options</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(groupedOptions).map(([type, options]) => (
                <div key={type} className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5 rounded-[4px]">
                  <h3 className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider mb-3">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {options.map(opt => (
                      <div
                        key={opt.code}
                        className="p-3 bg-[#F5F7F6] text-center border border-[#EAECEB]"
                      >
                        <span className="text-[#757575] font-semibold text-xs">{opt.code}</span>
                        <p className="text-xs text-[#757575] mt-0.5">{opt.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-[#F5F7F6]">
          <div className="section-container">
            <h2 className="text-xl font-semibold text-[#1A1A1A] mb-2">Related Products</h2>
            <p className="text-[#757575] mb-8">Explore complementary and alternative products</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.slice(0, 4).map(rp => (
                <a
                  key={rp.sku}
                  href={`/products/detail/${rp.sku}`}
                  className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5 hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all block rounded-[4px]"
                >
                  <div className="aspect-square bg-[#F5F7F6] flex items-center justify-center mb-3">
                    {(rp.imagePlaceholder?.startsWith('http') || rp.imagePlaceholder?.startsWith('/')) ? (
                      <img src={rp.imagePlaceholder} alt={rp.name} className="w-full h-full object-contain" loading="lazy" crossOrigin="anonymous" />
                    ) : (
                      <span className="text-[#0F3D26] font-semibold text-sm">{rp.sku}</span>
                    )}
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{rp.name}</h3>
                  <p className="text-[#333333] text-xs mt-0.5">{rp.tagline}</p>
                  <p className="text-xs text-[#757575] mt-2">
                    {rp.dischargeRate && `${rp.dischargeRate} · `}
                    {rp.neckFinish.join(', ')}
                  </p>
                  <span className="text-xs font-medium text-[#0F3D26] mt-2 inline-block">
                    View Details &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LEARN MORE */}
      <section className="section-padding bg-[#F5F7F6]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/sustainability"
              className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all block rounded-[4px]"
            >
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Sustainability</h3>
              <p className="text-sm text-[#757575] mt-2">
                Learn about our commitment to fully recyclable packaging and the One Earth philosophy.
              </p>
              <span className="text-sm font-medium text-[#0F3D26] mt-3 inline-block">
                Explore Sustainability &rarr;
              </span>
            </a>

            <div className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 rounded-[4px]">
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Industry Solutions</h3>
              <p className="text-sm text-[#757575] mt-2">
                See how this product is used across different industries and applications.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {product.industries.map(ind => (
                  <a
                    key={ind}
                    href={`/solutions/${ind}`}
                    className="text-xs text-[#757575] bg-[#F5F7F6] px-3 py-1.5 border border-[#EAECEB] hover:border-[#0F3D26] hover:text-[#0F3D26] transition-colors inline-block"
                  >
                    {ind.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Modal */}
      {showSampleModal && (
        <RequestSampleModal
          sku={product.sku}
          onClose={() => setShowSampleModal(false)}
        />
      )}

      {/* Sticky Sample CTA (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#EAECEB] p-3 lg:hidden z-[200]">
        <button
          onClick={() => setShowSampleModal(true)}
          className="w-full px-5 py-3 text-sm font-medium bg-[#0F3D26] text-white hover:bg-[#0B2D1C] transition-colors rounded-[4px]"
        >
          Request Sample - {product.sku}
        </button>
      </div>
    </>
  );
}
