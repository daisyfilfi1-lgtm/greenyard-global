import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About GreenYard - Packaging Engineering for Global Brands',
  description: 'China-based premium packaging engineering partner for European and American beauty & healthcare brands. 15+ years of export experience. Mono Pump innovation.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative section-dark min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Minimalist Abstract Global Business Visual.png"
            alt="Global business visual"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 section-container w-full py-24">
          <div className="max-w-3xl">
            <p className="text-xs text-[#757575] uppercase tracking-[0.15em] mb-4">About Us</p>
            <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-[#F5F7F6] leading-tight">
              Engineering Precision Packaging for Global Brands
            </h1>
            <div className="w-12 h-px bg-[#00B894] my-6" />
            <p className="text-[#a0a0a0] leading-relaxed max-w-xl">
              We are a China-based premium packaging engineering partner dedicated to serving
              European and American beauty & healthcare brands. Core focus: sustainable mono-material
              design, regulatory compliance, and luxury user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-[#F5F7F6]">
        <div className="section-container section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#1A1A1A] mb-6">
                Our Story
              </h2>
              <div className="w-12 h-px bg-[#00B894] mb-8" />
              <div className="space-y-4 text-[#757575] leading-relaxed">
                <p>
                  Our team combines 15+ years of packaging expertise with Western design thinking,
                  ensuring your brand&apos;s vision is delivered with precision and quality. We
                  don&apos;t just manufacture — we engineer packaging solutions that define premium
                  user experiences.
                </p>
                <p>
                  Seated beside the coastal city of Yuyao, near Ningbo Port — one of China&apos;s
                  largest ports — we possess a very convenient traffic network and a professional
                  team dedicated to packaging precision.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden">
              <Image
                src="/images/Modern High-End Cosmetic Packaging Factory Interior.png"
                alt="Modern factory facility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline — Minimal */}
      <section className="bg-[#F5F7F6]">
        <div className="section-container section-padding">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#1A1A1A] mb-8">
            Our Journey
          </h2>
          <div className="w-12 h-px bg-[#00B894] mb-8" />

          <div className="space-y-6 max-w-2xl">
            {[
              { year: '2008', event: 'GreenYard founded in Yuyao, Zhejiang, China' },
              { year: '2013', event: 'Factory expansion to 15,000 sqm with advanced assembly lines' },
              { year: '2019', event: 'Mono Pump Fully Recyclable Series launched' },
              { year: '2024', event: '200+ brand partners across 40+ countries' },
            ].map((item, i) => (
              <div key={item.year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#00B894] mt-1.5" />
                  {i < 3 && <div className="w-px flex-1 bg-[#EAECEB] mt-2" />}
                </div>
                <div className="pb-6">
                  <span className="text-sm font-semibold text-[#00B894]">{item.year}</span>
                  <p className="text-sm text-[#757575] mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications CTA */}
      <section className="bg-[#F5F7F6]">
        <div className="section-container section-padding">
          <div className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-8 md:p-10 rounded-[4px]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-[#1A1A1A] mb-2">
                  Certifications &amp; Compliance
                </h2>
                <p className="text-[#757575] text-sm max-w-lg">
                  ISO 15378, FDA, REACH, RoHS, California Prop 65 — full compliance documentation
                  available for all product series.
                </p>
              </div>
              <Link
                href="/about/certifications"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00B894] text-white font-medium text-sm hover:bg-[#00A37E] transition-all duration-300 rounded-[4px]"
              >
                View Certifications &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facility stats */}
      <section className="bg-[#F5F7F6]">
        <div className="section-container section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '15,000', label: 'sqm Factory' },
              { num: '200+', label: 'Employees' },
              { num: '50+', label: 'Production Lines' },
              { num: '15+', label: 'Years Export' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-[#00B894]">
                  {stat.num}
                </div>
                <p className="text-sm text-[#757575] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
