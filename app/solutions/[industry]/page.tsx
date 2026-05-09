import { getProductsByIndustry } from '@/lib/data/products';
import Link from 'next/link';

const pageData: Record<string, { title: string; hero: string; desc: string; painPoints: { icon: string; title: string; desc: string }[]; compliance: string[]; moq: { prod: string; moq: string; lead: string }[] }> = {
  skincare: {
    title: 'Skincare & Clean Beauty', hero: 'Packaging That Matches Your Clean Beauty Standards',
    desc: 'From serums to moisturizers, our precision pumps and sprayers deliver the exact dosage your formula demands — with sustainable options that align with your brand values.',
    painPoints: [
      { icon: '📦', title: 'Low MOQ', desc: 'Starting from 1,000 units for startups and indie brands' },
      { icon: '⚡', title: '7-Day Sampling', desc: '3D-printed samples in 7 days for rapid iteration' },
      { icon: '♻️', title: 'Sustainable Options', desc: 'PCR up to 50%, monomaterial fully recyclable pumps' },
      { icon: '🔬', title: 'Precision Dosing', desc: '0.06ml–4.00ml output range for any formula viscosity' },
      { icon: '✅', title: 'REACH Compliant', desc: 'All materials certified for EU market access' },
    ],
    compliance: ['REACH', 'BPA-Free', 'All-Plastic Options', 'PCR Available'],
    moq: [{ prod: 'Fine Mist Sprayer', moq: '3,000 pcs', lead: '25 days' }, { prod: 'Lotion Pump', moq: '5,000 pcs', lead: '30 days' }, { prod: 'Airless Bottle', moq: '1,000 pcs', lead: '35 days' }],
  },
  pharma: {
    title: 'Pharma & Cosmeceutical', hero: 'Compliance-Driven Packaging for Regulated Markets',
    desc: 'ISO 15378 certified manufacturing with full batch traceability. Metal-free monomaterial pathways for drug delivery and cosmeceutical applications.',
    painPoints: [
      { icon: '🏥', title: 'ISO 15378 Certified', desc: 'Pharmaceutical-grade manufacturing standards' },
      { icon: '📋', title: 'Full Traceability', desc: 'Batch-level documentation and quality records' },
      { icon: '🔒', title: 'Metal-Free Pathways', desc: 'All-plastic pumps — no metal spring contact' },
      { icon: '📄', title: 'FDA & USP Class VI', desc: 'Regulatory documentation available' },
      { icon: '🧪', title: 'Chemical Resistance', desc: 'Tested for ethanol, actives, and solvents' },
    ],
    compliance: ['ISO 15378', 'FDA', 'USP Class VI', 'REACH', 'RoHS'],
    moq: [{ prod: 'Fully Recyclable Mist', moq: '5,000 pcs', lead: '30 days' }, { prod: 'Treatment Pump', moq: '3,000 pcs', lead: '28 days' }, { prod: 'Dropper', moq: '2,000 pcs', lead: '25 days' }],
  },
  household: {
    title: 'Household & Industrial', hero: 'Heavy-Duty Packaging for High-Volume Applications',
    desc: 'Chemical-resistant trigger sprayers and high-output lotion pumps built for cleaning products, sanitizers, and industrial fluids.',
    painPoints: [
      { icon: '🧹', title: 'Chemical Resistant', desc: 'PP/PE materials tested for harsh cleaning agents' },
      { icon: '📊', title: 'Bulk Pricing', desc: 'Competitive pricing for 50K+ unit orders' },
      { icon: '🏭', title: 'High Output', desc: '1.0–4.0ml dosage for large-format bottles' },
      { icon: '🚛', title: 'Global Logistics', desc: 'Ningbo Port — 1.5h to international shipping' },
      { icon: '🔧', title: 'Standard Necks', desc: '28/410, 24/410 compatibility' },
    ],
    compliance: ['Chemical Resistant', 'Heavy-Duty', '28/410 Standard'],
    moq: [{ prod: 'Trigger Sprayer', moq: '10,000 pcs', lead: '25 days' }, { prod: 'Lotion Pump 3.0ml', moq: '5,000 pcs', lead: '30 days' }, { prod: 'Foam Pump', moq: '5,000 pcs', lead: '28 days' }],
  },
  contract: {
    title: 'Contract Packaging', hero: 'Reliable Supply for High-Volume Contract Manufacturing',
    desc: 'Standard neck finishes with deep inventory. JIT delivery from Ningbo Port. Consistent batch quality for contract packagers.',
    painPoints: [
      { icon: '📐', title: 'Standard Necks', desc: '24/410, 28/410, 33/400 compatibility' },
      { icon: '📦', title: 'Deep Inventory', desc: 'Buffer stock maintained for continuity' },
      { icon: '🚚', title: 'JIT Delivery', desc: 'Just-in-time shipping from Ningbo Port' },
      { icon: '✅', title: 'Batch Consistency', desc: 'ISO 9001 quality management system' },
      { icon: '💰', title: 'Volume Pricing', desc: 'Tiered pricing from 10K to 1M+ units' },
    ],
    compliance: ['ISO 9001', '24/410', '28/410', '33/400', 'JIT'],
    moq: [{ prod: 'Lotion Pump 24/410', moq: '10,000 pcs', lead: '25 days' }, { prod: 'Lotion Pump 28/410', moq: '10,000 pcs', lead: '25 days' }, { prod: 'Trigger Sprayer', moq: '10,000 pcs', lead: '25 days' }],
  },
};

export function generateStaticParams() {
  return Object.keys(pageData).map((slug) => ({ industry: slug }));
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const data = pageData[industry];
  if (!data) return <div className="p-24 text-center text-[#757575]">Industry not found</div>;

  const products = getProductsByIndustry(industry);

  return (
    <main className="bg-[#F5F7F6]">
      <section className="bg-[#0F3D26] text-white py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <p className="text-sm text-white/60 uppercase tracking-wider mb-3">Solutions</p>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight leading-[1.1]">{data.hero}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">{data.desc}</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-12">Key Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.painPoints.map((p) => (
            <div key={p.title} className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-8">
              <span className="text-2xl">{p.icon}</span>
              <h3 className="mt-3 font-semibold text-[#1A1A1A]">{p.title}</h3>
              <p className="mt-2 text-sm text-[#757575] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {products.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-8 pb-24">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-8">Recommended Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p) => (
              <Link key={p.sku} href={`/products/detail/${p.sku}`} className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:translate-y-[-2px] transition-all">
                <div className="aspect-square bg-[#F5F7F6] flex items-center justify-center">
                  {(p.imagePlaceholder?.startsWith('http') || p.imagePlaceholder?.startsWith('/')) ? (
                    <img src={p.imagePlaceholder} alt={p.name} className="w-full h-full object-contain" crossOrigin="anonymous" />
                  ) : (
                    <span className="text-[#0F3D26] font-semibold">{p.sku}</span>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm text-[#1A1A1A]">{p.name}</p>
                  <p className="text-xs text-[#757575] mt-1">{p.dischargeRate || p.neckFinish.join(', ')}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-[1200px] mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">Compliance & Certifications</h2>
            <div className="flex flex-wrap gap-2">
              {data.compliance.map((c) => (
                <span key={c} className="text-sm text-[#0F3D26] bg-white border border-[#EAECEB] px-4 py-2 rounded-[4px]">{c}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">MOQ & Lead Time</h2>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-[#EAECEB]"><th className="text-left py-2 text-[#757575] font-normal">Product</th><th className="text-left py-2 text-[#757575] font-normal">MOQ</th><th className="text-left py-2 text-[#757575] font-normal">Lead Time</th></tr></thead>
              <tbody>{data.moq.map((m) => (
                <tr key={m.prod} className="border-b border-[#EAECEB]">
                  <td className="py-2 text-[#1A1A1A]">{m.prod}</td><td className="py-2 text-[#0F3D26] font-semibold">{m.moq}</td><td className="py-2 text-[#757575]">{m.lead}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
