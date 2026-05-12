import { Metadata } from 'next';
import Image from 'next/image';
import { Recycle, Leaf, ShieldCheck, Factory } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sustainability - GreenYard',
  description: 'Mono-material all-plastic pumps, PCR recycled options, global eco compliance. GreenYard sustainability commitments for beauty and pharma packaging.',
};

const commitments = [
  {
    icon: <Recycle size={28} aria-hidden="true" strokeWidth={1.5} />,
    title: 'Mono-Material All-Plastic Design',
    description:
      'Metal-free single-structure pumps and sprayers, fully recyclable in standard PE recycling streams, no material separation required.',
  },
  {
    icon: <Leaf size={28} aria-hidden="true" strokeWidth={1.5} />,
    title: 'PCR Recycled Material Option',
    description:
      'Post-consumer recycled plastic available across the full product lineup, supporting your brand\'s carbon footprint reduction.',
  },
  {
    icon: <ShieldCheck size={28} aria-hidden="true" strokeWidth={1.5} />,
    title: 'Global Eco Compliance',
    description:
      'Fully compliant with REACH, RoHS, FDA, California Prop 65 and food-grade safety standards for beauty, personal care and pharmaceutical use.',
  },
  {
    icon: <Factory size={28} aria-hidden="true" strokeWidth={1.5} />,
    title: 'Low-Waste Production',
    description:
      'Optimized mold design, minimized production scraps, and standardized inventory turnover to reduce overstock and industrial waste.',
  },
];

export default function SustainabilityPage() {
  return (
    <main>
      <section className="relative section-dark min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Premium Eco-Friendly Pump Dispenser.png"
            alt="Eco-friendly pump dispenser"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 section-container w-full py-24">
          <nav className="flex items-center gap-2 text-sm text-[#6C757D] mb-6">
            <a href="/" className="hover:text-[#00B894] transition-colors">Home</a>
            <span>/</span>
            <a href="/about" className="hover:text-[#00B894] transition-colors">About</a>
            <span>/</span>
            <span className="text-[#F5F5F0]">Sustainability</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium text-[#F5F5F0] leading-tight">
              Sustainability — Packaging That Performs, Planet That Persists
            </h1>
            <div className="w-12 h-px bg-[#00B894] my-6" />
            <p className="text-[#a0a0a0] leading-relaxed max-w-xl">
              At GreenYard, sustainability is not an option — it is built into every pump, sprayer
              and packaging solution we engineer. We commit to reducing plastic waste, simplifying
              material structures, and adopting eco-friendly raw materials to help global beauty and
              pharma brands meet ESG goals and market regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F0]">
        <div className="section-container section-padding">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#1A1A1A] mb-4">
            Our Sustainable Commitments
          </h2>
          <div className="w-12 h-px bg-[#00B894] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((item) => (
              <div key={item.title} className="bg-white card-border p-8">
                <div className="w-12 h-12 rounded-md bg-[#E8F5F1] flex items-center justify-center text-[#00B894] mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="text-sm text-[#6C757D] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] text-white">
        <div className="section-container section-padding">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold mb-4">
              Why It Matters For Your Brand
            </h2>
            <div className="w-12 h-px bg-[#00B894] mb-6" />
            <p className="text-[#a0a0a0] leading-relaxed max-w-2xl">
              Consumers and retail platforms across North America, Europe and Latin America are
              prioritizing sustainable packaging. GreenYard helps you launch market-ready,
              compliant, and premium eco-packaging without compromising texture, sealing
              performance or user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#E8F5F1]">
        <div className="section-container section-padding">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-medium text-[#0D0D0D] mb-2">Need Sustainable Packaging?</h2>
              <p className="text-[#6C757D] text-sm max-w-lg">
                Contact our team to discuss PCR options, mono-material design, and compliance requirements for your next project.
              </p>
            </div>
            <a
              href="mailto:info@cngreenyard.com?subject=Sustainable Packaging Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00B894] text-white font-medium text-sm hover:bg-[#009B7A] transition-colors rounded-[4px]"
            >
              Contact Us &rarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
