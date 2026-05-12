'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Building2, Globe, ShieldCheck, ArrowRight } from 'lucide-react';
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
        stroke="#00B894"
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
// 1. Hero — 80vh, background image with overlay
// ---------------------------------------------------------------------------
function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#1A1A1A] overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/Minimalist Luxury Beauty Packaging Banner.png"
          alt="Premium packaging solutions"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>
      <div className="relative z-10 section-container w-full py-24">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] text-white tracking-tight">
            Packaging Solutions Defining{' '}
            <span className="text-[#00B894]">Premium Quality</span> and Sustainability
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#d1d1d1] max-w-xl leading-relaxed">
            Engineering thoughtful packaging for global brands
          </p>

          <p className="mt-2 text-sm text-[#a0a0a0] max-w-xl">
            Sustainable &middot; Compliant &middot; Luxury Dispensing Systems
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            {['ISO 15378', 'FDA', 'REACH', 'RoHS', 'Prop 65'].map((cert) => (
              <span
                key={cert}
                className="text-[11px] text-[#a0a0a0] uppercase tracking-[0.12em] border border-white/15 px-3 py-1.5"
              >
                {cert}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00B894] text-white font-medium hover:bg-[#00A37E] transition-all duration-300 hover:translate-y-[-1px] text-sm tracking-wide rounded-[4px]"
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
// 2. Who We Serve — 4 cards with lucide icons
// ---------------------------------------------------------------------------
const SEGMENT_ICONS: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={28} aria-hidden="true" strokeWidth={1.5} />,
  Building2: <Building2 size={28} aria-hidden="true" strokeWidth={1.5} />,
  Globe: <Globe size={28} aria-hidden="true" strokeWidth={1.5} />,
  ShieldCheck: <ShieldCheck size={28} aria-hidden="true" strokeWidth={1.5} />,
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
      className="group bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-8 flex flex-col relative transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-[4px]"
    >
      <div className="text-[#00B894] mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
        {SEGMENT_ICONS[icon] ?? <Sparkles size={28} aria-hidden="true" strokeWidth={1.5} />}
      </div>
      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{title}</h3>
      <p className="text-[#333333] text-sm leading-relaxed flex-1">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-[#00B894] text-sm group-hover:underline underline-offset-2">
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
            Who We Serve
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
// 3. Core Strengths — 3 items centered, mint green accent
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
                <div className="text-[32px] md:text-[42px] font-bold text-[#00B894] leading-none">98.5%</div>
                <p className="text-[#333333] text-sm mt-1.5">On-Time Delivery Rate</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-4 border-[#EAECEB] flex items-center justify-center">
                <span className="text-[28px] md:text-[42px] font-bold text-[#00B894]">500万+</span>
              </div>
              <div className="mt-4">
                <div className="text-[32px] md:text-[42px] font-bold text-[#00B894] leading-none">500万+</div>
                <p className="text-[#333333] text-sm mt-1.5">Monthly Production Capacity</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-4 border-[#00B894] flex items-center justify-center">
                <span className="text-[28px] md:text-[42px] font-bold text-[#00B894]">100%</span>
              </div>
              <div className="mt-4">
                <div className="text-[32px] md:text-[42px] font-bold text-[#00B894] leading-none">100%</div>
                <p className="text-[#333333] text-sm mt-1.5">Fully Recyclable Mono-Material Options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 4. Case Studies — In the Market, with real images
// ---------------------------------------------------------------------------
const CASE_STUDIES = [
  {
    title: 'Clean Beauty Serum Launch',
    image: '/images/High-End Clean Beauty Serum Scene.png',
    challenge: 'EU-compliant recyclable pump for premium serum. Small batch trial.',
    solution: 'Custom Mono-Pump, PCR 50%, matte finish',
    result: 'EU market launch, 35% carbon reduction, 15% repeat rate increase',
    metric: '90 days to launch',
    metricSub: '3,000-unit MOQ',
  },
  {
    title: 'Hand Sanitizer Scale-Up',
    image: '/images/Minimalist Pharmaceutical Packaging Scene.png',
    challenge: 'Rapid scale-up during demand surge. FDA compliance.',
    solution: 'GY-608A1 fine mist sprayers, 2-week lead time',
    result: '500K units/month, zero compliance issues',
    metric: '500K units/month',
    metricSub: 'Scaled in 4 weeks',
  },
  {
    title: 'Hair Care Line Refresh',
    image: '/images/European American Salon Luxury Hair Care Collection.png',
    challenge: '12 SKU refresh with sustainability upgrade.',
    solution: 'GY-320 recyclable pumps, matched bottle sets',
    result: '15% cost reduction, 12 SKU relaunch',
    metric: '15% cost reduction',
    metricSub: '12 SKU refresh',
  },
];

function CaseStudyCard({
  title,
  image,
  challenge,
  solution,
  result,
  metric,
  metricSub,
}: {
  title: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  metric: string;
  metricSub: string;
}) {
  return (
    <article className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col rounded-[4px]">
      <div className="relative aspect-[16/9] bg-[#EAECEB]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-[#1A1A1A] mb-3">{title}</h3>
        <div className="space-y-2 text-sm text-[#333333] leading-relaxed flex-1 mb-4">
          <p><strong className="text-[#1A1A1A]">Challenge:</strong> {challenge}</p>
          <p><strong className="text-[#1A1A1A]">Solution:</strong> {solution}</p>
          <p><strong className="text-[#1A1A1A]">Result:</strong> <span className="text-[#00B894]">{result}</span></p>
        </div>
        <div className="pt-4 border-t border-[#EAECEB]">
          <p className="text-[28px] font-bold text-[#00B894]">{metric}</p>
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
// 5. Sustainability — image left, points right
// ---------------------------------------------------------------------------
function Sustainability() {
  return (
    <section className="bg-[#1A1A1A] text-white">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center reveal">
          <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden">
            <Image
              src="/images/Premium Eco-Friendly Pump Dispenser.png"
              alt="Eco-friendly Mono Pump dispenser"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold leading-tight mb-6">
              Packaging that performs.<br />Planet that persists.
            </h2>
            <p className="text-[#757575] leading-relaxed mb-6">
              Our <strong className="text-white">Mono Pump</strong> is a fully recyclable,
              all-plastic pump that processes in standard PE recycling streams. No metal parts. No
              separation required. Just recycle.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Mono-material all-plastic pump — recyclable in standard PE stream',
                'PCR (Post-Consumer Recycled) material options up to 50%',
                'Global compliance: REACH, RoHS, FDA, California Prop 65',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#757575]">
                  <span className="text-[#00B894] mt-0.5 flex-shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00B894] text-white font-medium text-sm hover:bg-[#00A37E] transition-all duration-300 rounded-[4px]"
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
// 6. Enterprise Stats Trust Bar
// ---------------------------------------------------------------------------
function TrustBar() {
  return (
    <section className="bg-[#F5F7F6]">
      <div className="section-container section-padding">
        <div className="border-t border-[#EAECEB] pt-12 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {TRUST_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`relative text-center ${i < TRUST_STATS.length - 1 ? 'md:border-r md:border-[#EAECEB]' : ''}`}
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
// 7. Expert CTA
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
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#00B894] text-white font-medium text-sm tracking-wide hover:bg-[#00A37E] transition-all duration-300 rounded-[4px]"
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
