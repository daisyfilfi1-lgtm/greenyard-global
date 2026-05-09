import { Metadata } from 'next';
import Link from 'next/link';
import { Factory, ShieldCheck, Award, Truck, Globe, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About GreenYard - Ningbo GreenYard Sprayers Co., Ltd.',
  description: 'Manufacturer of precision sprayers, pumps, droppers, and cosmetic packaging. ISO9001 certified. 15+ years of export experience serving 200+ brand partners across 40+ countries.',
};

const companyInfo = {
  history: [
    { year: '2008', event: 'GreenYard founded in Yuyao, Zhejiang, China' },
    { year: '2010', event: 'Obtained ISO9001 accreditation' },
    { year: '2013', event: 'Expanded factory to 15,000 sqm with advanced injection and assembly lines' },
    { year: '2016', event: 'First export orders to North America and Europe' },
    { year: '2019', event: 'Launched Mono Pump Fully Recyclable Series' },
    { year: '2022', event: 'SGS, REACH, FDA compliance achieved across all series' },
    { year: '2024', event: '200+ brand partners across 40+ countries served' },
  ],
  capabilities: [
    { icon: <Factory size={24} aria-hidden="true" />, title: 'Mold Design & Manufacture', desc: 'In-house mold design and manufacturing capabilities for custom packaging solutions.' },
    { icon: <Truck size={24} aria-hidden="true" />, title: 'Injection Molding', desc: 'Advanced injection molding equipment with precision control for consistent quality.' },
    { icon: <Users size={24} aria-hidden="true" />, title: 'Automatic Assembly', desc: 'Fully automated assembly lines with real-time quality monitoring and batch traceability.' },
    { icon: <ShieldCheck size={24} aria-hidden="true" />, title: 'Quality Inspection', desc: 'Comprehensive quality inspection at every stage — from raw material to finished product.' },
  ],
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark">
        <div className="section-container section-padding">
          <div className="max-w-3xl">
            <p className="text-xs text-[#6C757D] uppercase tracking-[0.15em] mb-4">About Us</p>
            <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium text-[#F5F5F0] leading-tight">
              Ningbo GreenYard Sprayers Co., Ltd.
            </h1>
            <div className="w-12 h-px bg-[#D4AF37] my-6" />
            <p className="text-[#6C757D] leading-relaxed max-w-xl">
              Seated beside a beautiful coastal city Yuyao, near one of Chinese largest ports —
              Ningbo Port — we possess a very convenient traffic network and a professional team
              dedicated to packaging precision.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-[#F5F5F0]">
        <div className="section-container section-padding">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium text-[#0D0D0D] mb-6">
              Company Profile
            </h2>
            <div className="w-12 h-px bg-[#D4AF37] mb-8" />
            <div className="space-y-4 text-[#6C757D] leading-relaxed">
              <p>
                Ningbo GreenYard Sprayers Co., Ltd is seated beside a beautiful coastal city
                &quot;Yuyao&quot;. It is near one of Chinese biggest port — Ningbo Port — and
                possesses a very convenient traffic network.
              </p>
              <p>
                At the moment, we have already owned advanced mould design, manufacture, injection,
                automatic assemble, quality inspection equipment and technology. Meanwhile we have
                built an experienced, professional team.
              </p>
              <p>
                Since the building of our factory, its size is expanding continually. Its management
                mode is modernized. By our relentless hard work, we have passed the ISO9001
                accreditation and won reputation around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#F5F5F0]">
        <div className="section-container section-padding">
          <div className="mb-12">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium text-[#0D0D0D] mb-4">
              Factory &amp; Capabilities
            </h2>
            <div className="w-12 h-px bg-[#D4AF37] mb-4" />
            <p className="text-[#6C757D] max-w-xl">
              Our factory is equipped with advanced manufacturing and inspection equipment,
              managed by a professional team with 15+ years of export experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {companyInfo.capabilities.map((cap) => (
              <div key={cap.title} className="bg-white card-border p-6">
                <div className="w-10 h-10 rounded-md bg-[#E8F5F1] flex items-center justify-center text-[#00B894] mb-4">
                  {cap.icon}
                </div>
                <h3 className="text-base font-medium text-[#0D0D0D] mb-2">{cap.title}</h3>
                <p className="text-sm text-[#6C757D] leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F5F5F0]">
        <div className="section-container section-padding">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium text-[#0D0D0D] mb-8">
            Our Journey
          </h2>
          <div className="w-12 h-px bg-[#D4AF37] mb-8" />

          <div className="space-y-6 max-w-2xl">
            {companyInfo.history.map((item) => (
              <div key={item.year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#D4AF37] mt-1.5" />
                  <div className="w-px flex-1 bg-[#DEE2E6] mt-2" />
                </div>
                <div className="pb-6">
                  <span className="text-sm font-medium text-[#D4AF37]">{item.year}</span>
                  <p className="text-sm text-[#6C757D] mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications CTA */}
      <section className="bg-[#E8F5F1]">
        <div className="section-container section-padding">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium text-[#0D0D0D] mb-2">
                Certifications &amp; Compliance
              </h2>
              <p className="text-[#6C757D] text-sm max-w-lg">
                ISO9001, SGS, REACH, RoHS, FDA, California Prop 65 — full compliance documentation
                available for all product series.
              </p>
            </div>
            <Link
              href="/about/certifications"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00B894] text-white font-medium text-sm hover:bg-[#009B7A] transition-colors"
            >
              View Certifications &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Facility stats */}
      <section className="bg-[#F5F5F0]">
        <div className="section-container section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '15,000', label: 'sqm Factory' },
              { num: '200+', label: 'Employees' },
              { num: '50+', label: 'Production Lines' },
              { num: '15+', label: 'Years Export' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[clamp(1.5rem,3vw,2.25rem)] font-light text-[#D4AF37]">
                  {stat.num}
                </div>
                <p className="text-sm text-[#6C757D] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
