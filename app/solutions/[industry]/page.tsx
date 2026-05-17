import { getProductsByIndustry, getProductBySku } from '@/lib/data/products';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

const HERO_IMAGES: Record<string, string> = {
  skincare: '/images/Minimalist Luxury Eco-Friendly Packaging.png',
  pharma: '/images/Clinical Laboratory Pharmaceutical Bottles.png',
  household: '/images/Modern Kitchen Premium Cleaning Products.png',
  contract: '/images/Industrial Packaging Facility .png',
};

const data: Record<string, {
  title: string; hero: string; sub: string;
  painPoints: { icon: string; title: string; desc: string }[];
  compliance: string[];
  caseStudy: { headline: string; body: string; metric: string };
  moq: { prod: string; moq: string; lead: string }[];
}> = {
  skincare: {
    title: 'Skincare & Clean Beauty', hero: 'Packaging That Matches Your Clean Beauty Standards',
    sub: 'Low-MOQ, fast-sampling dispensing solutions for brands that put sustainability first.',
    painPoints: [
      { icon: '📦', title: 'MOQ from 1,000 units', desc: 'Launch without overcommitting inventory.' },
      { icon: '⚡', title: '7-day 3D-printed sample', desc: 'Validate design before tooling.' },
      { icon: '♻️', title: 'PCR up to 50%', desc: 'Meet consumer sustainability expectations.' },
      { icon: '🔄', title: 'All-plastic recyclable', desc: 'Mono-material pumps for circularity.' },
      { icon: '✅', title: 'REACH + BPA-free certified', desc: 'EU market-ready documentation.' },
    ],
    compliance: ['REACH', 'BPA-Free', 'All-Plastic', 'PCR Available'],
    caseStudy: {
      headline: 'Clean Beauty Launch in 78 Days',
      body: 'A California-based clean beauty brand needed to launch a 3-SKU vitamin C serum line within 90 days. Using GY-608A1 with all-plastic construction and matching PETG bottles, they went from sampling to shelf in 78 days.',
      metric: '3,000-unit MOQ · Zero defects · 78 days to market',
    },
    moq: [{ prod: 'Fine Mist Sprayer', moq: '3,000 pcs', lead: '25 days' }, { prod: 'Lotion Pump', moq: '5,000 pcs', lead: '30 days' }, { prod: 'Airless Bottle', moq: '1,000 pcs', lead: '35 days' }],
  },
  pharma: {
    title: 'Pharma & Cosmeceutical', hero: 'Pharmaceutical-Grade Dispensing: Compliance Built In',
    sub: 'ISO 15378–certified pumps with batch traceability and metal-free pathways for sterile formulations.',
    painPoints: [
      { icon: '🏥', title: 'ISO 15378 + GMP', desc: 'Pharma-grade manufacturing environment.' },
      { icon: '📋', title: 'Batch traceability', desc: 'From resin lot to finished pump.' },
      { icon: '🔒', title: 'Metal-free / Monomaterial', desc: 'Zero contamination risk.' },
      { icon: '🧪', title: 'USP Class VI tested', desc: 'Material safety documentation on demand.' },
      { icon: '📄', title: 'DMF-ready technical files', desc: 'Regulatory submission support.' },
    ],
    compliance: ['ISO 15378', 'FDA', 'USP Class VI', 'REACH', 'RoHS'],
    caseStudy: {
      headline: '500K Units with Full Documentation',
      body: 'A European pharmaceutical contract manufacturer needed a secondary supplier for alcohol-based hand sanitizer pumps during a supply chain disruption. GY-101 trigger sprayers delivered 500K units across 6 months with full batch documentation.',
      metric: '99.2% on-time · 500K units · Full batch traceability',
    },
    moq: [{ prod: 'Fully Recyclable Mist', moq: '5,000 pcs', lead: '30 days' }, { prod: 'Treatment Pump', moq: '3,000 pcs', lead: '28 days' }, { prod: 'Dropper', moq: '2,000 pcs', lead: '25 days' }],
  },
  household: {
    title: 'Household & Industrial', hero: 'Tough Chemistry. Reliable Dispensing.',
    sub: 'Trigger sprayers and high-dose pumps engineered for chemical compatibility and long-haul durability.',
    painPoints: [
      { icon: '🧹', title: 'Chemical-resistant PP/PE', desc: 'Compatibility matrix available.' },
      { icon: '📊', title: 'High-dose 0.75–4.00ml', desc: 'For thick cleaners and concentrates.' },
      { icon: '☀️', title: 'UV & heat stable', desc: 'Survives container shipping to MEA/LATAM.' },
      { icon: '🎨', title: 'Color customization', desc: 'Match brand palettes at volume.' },
      { icon: '🚢', title: 'FOB Ningbo pricing', desc: 'Transparent export cost structure.' },
    ],
    compliance: ['Chemical Resistant', 'Heavy-Duty', 'ISO 9001'],
    caseStudy: {
      headline: '2M Units/Year — 15% Cost Reduction',
      body: 'A Middle Eastern cleaning products brand switched their trigger sprayer sourcing to GY-101 across 2M units annually. The standardized 28/410 neck eliminated line changeover time and delivered consistent chemical resistance.',
      metric: '15% cost reduction · 2M units/year · Zero compatibility issues',
    },
    moq: [{ prod: 'Trigger Sprayer', moq: '10,000 pcs', lead: '25 days' }, { prod: 'Lotion Pump 3.0ml', moq: '5,000 pcs', lead: '30 days' }, { prod: 'Foam Pump', moq: '5,000 pcs', lead: '28 days' }],
  },
  contract: {
    title: 'Contract Packaging', hero: 'Line-Compatible Dispensing at Scale',
    sub: 'Standard neck finishes, deep inventory, and VMI-ready supply chains for contract manufacturers.',
    painPoints: [
      { icon: '📐', title: '24/410 · 28/410 · 33/400', desc: 'Fits your existing filling lines.' },
      { icon: '📦', title: 'VMI stocking programs', desc: 'Never stop production for a cap.' },
      { icon: '✅', title: '<1% defect rate', desc: '100% inline inspection + batch CPK reports.' },
      { icon: '🔄', title: 'Rapid SKU switching', desc: 'Same neck, different actuator.' },
      { icon: '📋', title: 'Consolidated RFQ', desc: 'Quote 10 SKUs in one request.' },
    ],
    compliance: ['ISO 9001', '24/410', '28/410', 'JIT Delivery'],
    caseStudy: {
      headline: '8 SKUs Consolidated to One Supplier',
      body: 'A US contract packager consolidated fragmented pump sourcing to GreenYard — single-source 24/410 pumps across 4 brands. VMI program maintained 4-week buffer stock, eliminating 12 production stops in the first year.',
      metric: '8 SKUs unified · 4-week buffer · Zero production stops',
    },
    moq: [{ prod: 'Lotion Pump 24/410', moq: '10,000 pcs', lead: '25 days' }, { prod: 'Lotion Pump 28/410', moq: '10,000 pcs', lead: '25 days' }, { prod: 'Trigger Sprayer', moq: '10,000 pcs', lead: '25 days' }],
  },
};

export function generateStaticParams() {
  return Object.keys(data).map((industry) => ({ industry }));
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const d = data[industry];
  if (!d) return <div className="min-h-screen flex items-center justify-center text-[#6B6B6B]">Industry not found</div>;
  const products = getProductsByIndustry(industry);

  return (
    <main className="bg-[#F0EDE8]">
      {/* Section 1: Hero with Background Image */}
      <section className="relative min-h-[60vh] flex items-end bg-[#1A1A1A] overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGES[industry] || '/images/Premium Eco-Friendly Pump Dispenser.png'}
            alt={d.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 section-container w-full py-16 lg:py-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-medium">{d.title}</span>
          </div>

          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-light tracking-tight leading-[1.15] text-white max-w-3xl mb-4">
            {d.hero}
          </h1>
          
          <p className="text-base md:text-lg text-[#d1d1d1] leading-relaxed max-w-xl">
            {d.sub}
          </p>
        </div>
      </section>

      {/* Section 2: Pain-Point Matrix */}
      <section className="bg-[#E5E0D8] py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {d.painPoints.map((p) => (
              <div key={p.title} className="bg-white p-6">
                <span className="text-xl">{p.icon}</span>
                <h3 className="mt-3 text-sm font-semibold text-[#1A1A1A] leading-snug">{p.title}</h3>
                <p className="mt-1.5 text-xs text-[#6B6B6B] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Recommended Products */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-3xl font-light tracking-tight text-[#1A1A1A]">
            Recommended for {d.title}
            <span className="block w-10 h-[2px] bg-[#1A1A1A] mt-4" />
          </h2>
          <p className="mt-3 text-[#6B6B6B]">Curated SKUs tested for {industry === 'skincare' ? 'serums, toners, and moisturizers' : industry === 'pharma' ? 'sterile and regulated formulations' : industry === 'household' ? 'cleaning products and industrial fluids' : 'high-volume filling lines'}.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {products.slice(0, 6).map((p) => (
              <Link key={p.sku} href={`/products/detail/${p.sku}`}
                className="bg-white border border-[#E5E0D8] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="aspect-square bg-[#F0EDE8] flex items-center justify-center p-6">
                  {(p.imagePlaceholder?.startsWith('http') || p.imagePlaceholder?.startsWith('/')) ? (
                    <img src={p.imagePlaceholder} alt={p.name} className="w-full h-full object-contain" crossOrigin="anonymous" />
                  ) : (
                    <span className="text-[#1A1A1A] font-semibold text-sm">{p.sku}</span>
                  )}
                </div>
                <div className="p-5">
                  {p.monoMaterial && <span className="text-[10px] text-[#1A1A1A] uppercase tracking-wider font-medium border border-[#1A1A1A]/20 px-2 py-0.5 mb-2 inline-block">Sustainable</span>}
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{p.name}</h3>
                  <p className="text-xs text-[#6B6B6B] mt-1">{p.dischargeRate} · {p.neckFinish.join(', ')}</p>
                  <p className="text-xs text-[#1A1A1A] mt-2 font-medium">View Details →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Compliance */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-3xl font-light tracking-tight text-[#1A1A1A]">
            Compliance You Can Verify
            <span className="block w-10 h-[2px] bg-[#1A1A1A] mt-4" />
          </h2>
          <div className="flex flex-wrap gap-3 mt-8">
            {d.compliance.map((c) => (
              <span key={c} className="text-sm text-[#1A1A1A] bg-[#F0EDE8] border border-[#E5E0D8] px-5 py-2.5 font-medium">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Case Study */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-3xl font-light tracking-tight text-[#1A1A1A]">
            In the Market
            <span className="block w-10 h-[2px] bg-[#1A1A1A] mt-4" />
          </h2>
          <div className="mt-10 bg-white border border-[#E5E0D8] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-12">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold text-[#1A1A1A]">{d.caseStudy.headline}</h3>
              <p className="mt-4 text-[#333333] leading-relaxed">{d.caseStudy.body}</p>
              <p className="mt-4 text-[#1A1A1A] font-semibold">{d.caseStudy.metric}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Process Timeline */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-3xl font-light tracking-tight text-[#1A1A1A]">
            From Inquiry to Delivery
            <span className="block w-10 h-[2px] bg-[#1A1A1A] mt-4" />
          </h2>
          <div className="mt-12 flex flex-col lg:flex-row items-start lg:items-center gap-0">
            {['Inquiry', 'Sample\n7–15 days', 'Approval', 'Production\n30 days', 'Delivery'].map((step, i) => (
              <div key={i} className="flex lg:flex-col items-center gap-4 lg:gap-0 flex-1 relative py-4 lg:py-0">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-sm font-semibold shrink-0">{i + 1}</div>
                <p className="text-sm text-[#1A1A1A] whitespace-pre-line leading-snug">{step}</p>
                {i < 4 && <div className="hidden lg:block absolute top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] h-[1px] bg-[#E5E0D8]" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Expert CTA */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="text-3xl font-light tracking-tight text-white">Not sure which pump fits your formula?</h2>
          <p className="mt-4 text-white/60 max-w-md mx-auto">Our packaging engineers typically respond within 24 hours with a tailored recommendation.</p>
          <Link href="/contact" className="inline-block mt-8 px-8 py-3 border border-white/30 text-white text-sm font-medium hover:bg-white hover:text-[#1A1A1A] transition-colors">Speak to an Engineer →</Link>
        </div>
      </section>
    </main>
  );
}
