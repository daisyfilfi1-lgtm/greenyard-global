import Link from 'next/link';
import { INDUSTRY_SLUGS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Solutions | GreenYard' };

const solutions = [
  { slug: 'skincare', title: 'Skincare & Clean Beauty', desc: 'Low MOQ from 1,000 units. 7-day sampling. Sustainable packaging for clean beauty brands.', products: ['GY-608A1', 'GY-805P', 'GY-2501A', 'GY-320'], badges: ['REACH', 'BPA-Free', 'All-Plastic'] },
  { slug: 'pharma', title: 'Pharma & Cosmeceutical', desc: 'ISO 15378 certified. FDA compliant. Metal-free monomaterial pathways.', products: ['GY-608P-A1', 'GY-101', 'GY-901A1'], badges: ['ISO 15378', 'FDA', 'USP Class VI'] },
  { slug: 'household', title: 'Household & Industrial', desc: 'Heavy-duty trigger sprayers. Chemical resistant materials. Bulk pricing available.', products: ['GY-101', 'GY-312', 'GY-302B1'], badges: ['Chemical Resistant', 'Bulk MOQ'] },
  { slug: 'contract', title: 'Contract Packaging', desc: 'Standard 24/410, 28/410 neck finishes. Inventory depth. JIT delivery capability.', products: ['GY-302B1', 'GY-303', 'GY-320'], badges: ['24/410', '28/410', 'JIT Delivery'] },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#F0EDE8] min-h-screen">
      <section className="bg-[#1A1A1A] text-white py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight leading-[1.1]">Solutions by Industry</h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">Precision packaging solutions tailored to your market requirements, compliance needs, and volume expectations.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((s) => (
            <Link key={s.slug} href={`/solutions/${s.slug}`}
              className="bg-white border border-[#E5E0D8] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-10 hover:translate-y-[-2px] transition-all group">
              <h2 className="text-2xl font-semibold text-[#1A1A1A] group-hover:text-[#1A1A1A] transition-colors">{s.title}</h2>
              <p className="mt-3 text-[#333333] leading-relaxed">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.badges.map((b) => (
                  <span key={b} className="text-xs text-[#1A1A1A] bg-[#F0EDE8] px-3 py-1 rounded-[4px]">{b}</span>
                ))}
              </div>
              <span className="inline-block mt-6 text-sm font-medium text-[#1A1A1A]">Explore solutions →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
