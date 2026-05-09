'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Factory, FlaskConical, Globe, ShieldCheck, ArrowRight } from 'lucide-react';
import { SITE_TAGLINE, BUYER_SEGMENTS, TRUST_STATS } from '@/lib/constants';
import AnimatedCounter from '@/components/home/AnimatedCounter';

// ---------------------------------------------------------------------------
// Scroll reveal hook
// ---------------------------------------------------------------------------
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll('.reveal');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

// ---------------------------------------------------------------------------
// Circular Progress — SVG-based, no external libs
// ---------------------------------------------------------------------------
function CircularProgress({ value, size = 80 }: { value: number; size?: number }) {
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#EAECEB"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#0F3D26"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 1. Hero — full viewport, dark, product close-up placeholder
// ---------------------------------------------------------------------------
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#1A1A1A]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/80 to-[#1A1A1A]/95" />
      <div className="relative z-10 section-container w-full py-24">
        <div className="max-w-3xl">
          <div className="flex gap-4 mb-8">
            {['ISO 15378', 'FDA', 'REACH', 'RoHS', 'Prop 65'].map((cert) => (
              <span
                key={cert}
                className="text-[11px] text-[#757575] uppercase tracking-[0.12em] border border-[#EAECEB]/20 px-3 py-1.5"
              >
                {cert}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] text-white tracking-tight">
            Precision Sustainable Packaging
            <br />
            <span className="text-[#0F3D26]/90">for Global Beauty &amp; Pharma Brands</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#757575] max-w-xl leading-relaxed">
            Reliable &middot; Recyclable &middot; Fully Compliant
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0F3D26] text-white font-medium hover:bg-[#0B2D1C] transition-colors text-sm tracking-wide rounded-[4px]"
            >
              Find Your Solution
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 2. Client Identity Cards — 4 minimalist cards with linear icons
// ---------------------------------------------------------------------------
const SEGMENT_ICONS: Record<string, React.ReactNode> = {
  Rocket: <Factory size={28} aria-hidden="true" strokeWidth={1.2} />,
  Cog: <FlaskConical size={28} aria-hidden="true" strokeWidth={1.2} />,
  Globe: <Globe size={28} aria-hidden="true" strokeWidth={1.2} />,
  ShieldCheck: <ShieldCheck size={28} aria-hidden="true" strokeWidth={1.2} />,
};

function SegmentCard({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-8 flex flex-col relative transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] rounded-[4px]"
    >
      <div className="text-[#0F3D26] mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
        {SEGMENT_ICONS[icon] ?? <Factory size={28} aria-hidden="true" strokeWidth={1.2} />}
      </div>
      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{title}</h3>
      <p className="text-[#333333] text-sm leading-relaxed flex-1">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-[#0F3D26] text-sm group-hover:underline underline-offset-2">
        Learn More &rarr;
      </span>
    </Link>
  );
}

function ClientIdentityCards() {
  return (
    <section className="bg-[#F5F7F6]">
      <div className="section-container section-padding">
        <div className="reveal">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-[#1A1A1A] mb-4">
            Who We Work With
          </h2>
          <p className="text-[#333333] max-w-xl mb-12 leading-relaxed">
            From indie launches to global pharmaceutical production — we tailor our packaging
            solutions to your business model.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl reveal">
          {BUYER_SEGMENTS.map((seg) => (
            <SegmentCard
              key={seg.id}
              title={seg.title}
              description={seg.description}
              icon={seg.icon}
              href={seg.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 3. Core Strengths — 3 items with circular progress for delivery rate
// ---------------------------------------------------------------------------
function CoreStrengths() {
  return (
    <section className="bg-[#F5F7F6]">
      <div className="section-container section-padding pt-0">
        <div className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-10 md:p-14 reveal rounded-[4px]">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <CircularProgress value={98.5} size={96} />
              <div className="mt-4">
                <div className="text-[28px] md:text-[36px] font-bold text-[#0F3D26] leading-none">98.5%</div>
                <p className="text-[#333333] text-sm mt-2">On-Time Delivery</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-4 border-[#EAECEB] flex items-center justify-center">
                <span className="text-[28px] md:text-[36px] font-bold text-[#0F3D26]">5</span>
              </div>
              <div className="mt-4">
                <div className="text-[28px] md:text-[36px] font-bold text-[#0F3D26] leading-none">Global</div>
                <p className="text-[#333333] text-sm mt-2">Compliance Frameworks (REACH, FDA, RoHS, ISO, Prop 65)</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-4 border-[#0F3D26] flex items-center justify-center">
                <span className="text-[28px] md:text-[36px] font-bold text-[#0F3D26]">100%</span>
              </div>
              <div className="mt-4">
                <div className="text-[28px] md:text-[36px] font-bold text-[#0F3D26] leading-none">Fully</div>
                <p className="text-[#333333] text-sm mt-2">Recyclable Mono-Material Options Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 4. Case Studies — horizontal cards, minimal text, data points prominent
// ---------------------------------------------------------------------------
const CASE_STUDIES = [
  {
    title: 'Clean Beauty Serum Launch',
    region: 'US',
    narrative:
      'A Los Angeles indie beauty brand needed to go from concept to shelf in under 3 months. We provided GY-901A1 glass droppers with custom collar plating and 24/410 neck finishes. Full batch traceability, zero defects.',
    metric: '90 days to launch',
    metricSub: '3,000-unit MOQ',
  },
  {
    title: 'Hand Sanitizer Scale-Up',
    region: 'EU',
    narrative:
      'When a European pharmaceutical partner needed to rapidly scale hand sanitizer production, we delivered GY-608A1 fine mist sprayers and GY-320 lotion pumps on a 2-week lead time.',
    metric: '500K units/month',
    metricSub: 'Scaled in 4 weeks',
  },
  {
    title: 'Hair Care Line Refresh',
    region: 'LATAM',
    narrative:
      'A leading LATAM hair care brand refreshed 12 SKUs with matched bottle + pump sets. Supplied GY-302B1 lotion pumps and GY-320 recyclable pumps, reducing packaging costs.',
    metric: '15% cost reduction',
    metricSub: '12 SKU refresh',
  },
];

function CaseStudyCard({
  title,
  region,
  narrative,
  metric,
  metricSub,
}: {
  title: string;
  region: string;
  narrative: string;
  metric: string;
  metricSub: string;
}) {
  return (
    <article className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex flex-col rounded-[4px]">
      <div className="aspect-[16/9] bg-[#EAECEB] flex items-center justify-center">
        <span className="text-[#757575] text-sm tracking-widest uppercase">Case Study Image</span>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-base font-semibold text-[#1A1A1A]">{title}</h3>
          <span className="text-[10px] font-medium text-[#757575] uppercase tracking-wider">{region}</span>
        </div>
        <p className="text-[#333333] text-sm leading-relaxed flex-1 mb-4">{narrative}</p>
        <div className="pt-4 border-t border-[#EAECEB]">
          <p className="text-[28px] font-bold text-[#0F3D26]">{metric}</p>
          <p className="text-xs text-[#757575] mt-1">{metricSub}</p>
        </div>
      </div>
    </article>
  );
}

function CaseStudies() {
  return (
    <section className="bg-[#F5F7F6]">
      <div className="section-container section-padding">
        <div className="reveal">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-[#1A1A1A] mb-4">
            In the Market
          </h2>
          <p className="text-[#333333] max-w-xl mb-12 leading-relaxed">
            From indie launches to global scale-ups — real stories from our brand partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal">
          {CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.title} {...cs} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 5. Sustainability — large image left, key points right, CTA
// ---------------------------------------------------------------------------
function Sustainability() {
  return (
    <section className="bg-[#1A1A1A] text-white">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center reveal">
          <div className="aspect-[4/3] bg-[#EAECEB]/10 flex items-center justify-center rounded-[4px]">
            <span className="text-[#757575] text-sm tracking-widest uppercase">Sustainability Visual</span>
          </div>
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold leading-tight mb-6">
              Packaging that performs.<br />Planet that persists.
            </h2>
            <p className="text-[#757575] leading-relaxed mb-6">
              Our <strong className="text-white">Mono Pump</strong> is a fully recyclable,
              all-plastic pump that processes in standard PE recycling streams. PCR options available
              across our entire pump and sprayer lineup.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Mono-material all-plastic pump — recyclable in PE stream',
                'PCR (Post-Consumer Recycled) material options up to 50%',
                'Global compliance: REACH, RoHS, FDA, California Prop 65',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#757575]">
                  <span className="text-[#0F3D26] mt-0.5 flex-shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F3D26] text-white font-medium text-sm hover:bg-[#0B2D1C] transition-colors rounded-[4px]"
            >
              Explore Sustainability &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 6. Trust Bar — simplified with AnimatedCounter
// ---------------------------------------------------------------------------
function TrustBar() {
  return (
    <section className="bg-[#F5F7F6]">
      <div className="section-container section-padding">
        <div className="border-t border-[#EAECEB] pt-12 reveal">
          <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-8 md:gap-12 overflow-x-auto snap-x snap-mandatory">
            {TRUST_STATS.map((stat) => (
              <div
                key={stat.label}
                className="min-w-[160px] snap-start flex-shrink-0 md:flex-shrink md:min-w-0"
              >
                <AnimatedCounter value={stat.value} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 7. Expert CTA — clean, no gradient
// ---------------------------------------------------------------------------
function ExpertCta() {
  return (
    <section className="bg-[#1A1A1A]">
      <div className="section-container section-padding">
        <div className="max-w-2xl reveal">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-white mb-6 leading-tight">
            Not sure which pump fits your formula?
          </h2>
          <p className="text-[#757575] leading-relaxed mb-8 max-w-lg">
            Our packaging engineers will analyze your formula viscosity, bottle neck finish, and
            sustainability requirements to recommend the optimal solution.
          </p>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0F3D26] text-white font-medium text-sm tracking-wide hover:bg-[#0B2D1C] transition-colors rounded-[4px]"
          >
            Speak to Our Packaging Engineer &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function Home() {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <ClientIdentityCards />
      <CoreStrengths />
      <CaseStudies />
      <Sustainability />
      <TrustBar />
      <ExpertCta />
    </>
  );
}
