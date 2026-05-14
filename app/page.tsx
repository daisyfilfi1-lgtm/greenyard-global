'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Building2, Globe, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUYER_SEGMENTS, TRUST_STATS } from '@/lib/constants';
import AnimatedCounter from '@/components/home/AnimatedCounter';
import { useI18n } from '@/lib/i18n';

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
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const offset = animated ? circumference - (value / 100) * circumference : circumference;

  return (
    <div ref={ref}>
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
          className="transition-all duration-1000 ease-out"
        />
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 1. Hero — 80vh, background image with overlay
// ---------------------------------------------------------------------------
function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#1A1A1A] overflow-hidden">
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
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.6) 100%)" }} />
      </div>
      <div className="relative z-10 section-container w-full py-24 lg:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-medium">Premium Packaging Partner</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.15] text-white tracking-[0.03em]">
            {t.hero.title}
            <span className="text-[#D4AF37] font-semibold">{t.hero.titleHighlight}</span>
            {t.hero.titleEnd}
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#d1d1d1] max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <p className="mt-2 text-sm text-[#999999] max-w-xl">
            {t.hero.tag}
          </p>

          <div className="flex gap-2 mt-8 flex-wrap">
            {['ISO 15378', 'FDA', 'REACH', 'RoHS', 'Prop 65'].map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-1.5 text-[11px] text-[#d1d1d1] uppercase tracking-[0.15em] bg-white/8 backdrop-blur-sm border border-white/15 px-3.5 py-1.5 rounded-full font-medium"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00B894" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                {cert}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#00B894] text-white font-medium hover:bg-[#00A37E] transition-all duration-300 hover:-translate-y-0.5 text-sm tracking-wide rounded-[6px] shadow-lg hover:shadow-xl"
            >
              {t.hero.cta}
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="/solutions/skincare"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-white font-medium border border-white/30 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-sm tracking-wide rounded-[6px]"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
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
      className="group bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-[12px] hover:border-[#00B894]/30"
    >
      <div className="relative mb-6">
        <div className="w-14 h-14 bg-[#E8F5F1] rounded-xl flex items-center justify-center group-hover:bg-[#00B894] transition-all duration-300">
          <div className="text-[#00B894] group-hover:text-white transition-colors duration-300">
            {SEGMENT_ICONS[icon] ?? <Sparkles size={28} aria-hidden="true" strokeWidth={1.5} />}
          </div>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-[#0D0D0D] mb-3 leading-tight">{title}</h3>
      <p className="text-[#6C757D] text-sm leading-relaxed flex-1">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[#00B894] text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
        Learn More
        <ArrowRight size={14} />
      </span>
    </Link>
  );
}

function ClientIdentityCards() {
  const { t } = useI18n();
  return (
    <section className="bg-[#F5F7F6]">
      <div className="section-container section-padding">
        <div className="reveal text-center">
          <h2 className="section-title mb-4">
            {t.whoWeServe.title}
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto leading-relaxed">
            {t.whoWeServe.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12 reveal">
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
// 3. Core Strengths — 3 items centered, gold and mint accents
// ---------------------------------------------------------------------------
function CoreStrengths() {
  return (
    <section className="bg-[#F5F5F0]">
      <div className="section-container section-padding pt-0">
        <div className="bg-white border border-[#EAECEB] shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-10 md:p-16 reveal rounded-[16px]">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* On-Time Delivery */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative">
                <CircularProgress value={98.5} size={112} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[20px] md:text-[24px] font-semibold text-[#D4AF37]">98.5%</span>
                </div>
              </div>
              <div className="mt-5">
                <p className="stat-label">On-Time Delivery Rate</p>
              </div>
            </div>

            {/* Production Capacity */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative">
                <div className="w-28 h-28 rounded-full border-4 border-[#E8F5F1] flex items-center justify-center group-hover:border-[#00B894] transition-colors duration-300">
                  <span className="text-[20px] md:text-[24px] font-semibold text-[#00B894]">5M+</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">TOP</span>
                </div>
              </div>
              <div className="mt-5">
                <p className="stat-label">Monthly Production Capacity</p>
              </div>
            </div>

            {/* Recyclable Options */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative">
                <div className="w-28 h-28 rounded-full border-4 border-[#00B894] bg-[#E8F5F1] flex items-center justify-center group-hover:bg-[#00B894] transition-colors duration-300">
                  <span className="text-[20px] md:text-[24px] font-semibold text-[#00B894] group-hover:text-white transition-colors duration-300">100%</span>
                </div>
                <svg className="absolute -bottom-1 -right-1 w-10 h-10 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div className="mt-5">
                <p className="stat-label">Fully Recyclable Mono-Material Options</p>
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
    <article className="bg-white border border-[#EAECEB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] flex flex-col rounded-[12px] group">
      <div className="relative aspect-[16/10] bg-[#EAECEB] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#D4AF37]/90 text-white text-xs font-medium rounded-full">Case Study</span>
        </div>
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-[#0D0D0D] mb-4 leading-tight">{title}</h3>
        <div className="space-y-2.5 text-sm text-[#6C757D] leading-relaxed flex-1 mb-5">
          <p><span className="text-[#0D0D0D] font-medium">Challenge:</span> {challenge}</p>
          <p><span className="text-[#0D0D0D] font-medium">Solution:</span> {solution}</p>
          <p><span className="text-[#0D0D0D] font-medium">Result:</span> <span className="text-[#00B894] font-semibold">{result}</span></p>
        </div>
        <div className="pt-5 border-t border-[#EAECEB]">
          <p className="text-[32px] font-bold text-[#D4AF37] leading-tight">{metric}</p>
          <p className="text-xs text-[#999999] mt-1.5 uppercase tracking-wider">{metricSub}</p>
        </div>
      </div>
    </article>
  );
}

function CaseStudies() {
  const { t } = useI18n();
  return (
    <section className="bg-[#F5F7F6]">
      <div className="section-container section-padding">
        <div className="reveal text-center">
          <h2 className="section-title mb-4">
            {t.caseStudies.title}
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto leading-relaxed">
            {t.caseStudies.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 reveal">
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
  const { t } = useI18n();
  return (
    <section className="bg-[#1A1A1A] text-white">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center reveal">
          <div className="relative">
            <div className="aspect-[4/3] rounded-[16px] overflow-hidden shadow-2xl">
              <Image
                src="/images/Premium Eco-Friendly Pump Dispenser.png"
                alt="Eco-friendly Mono Pump dispenser"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00B894]/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B894]/10 border border-[#00B894]/30 rounded-full mb-6">
              <svg className="w-4 h-4 text-[#00B894]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span className="text-xs text-[#00B894] uppercase tracking-widest font-medium">Sustainability Focused</span>
            </div>
            
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-light leading-tight mb-6">
              {t.sustainability.title}
              <br />
              <span className="text-[#D4AF37] font-semibold">{t.sustainability.titleBreak}</span>
            </h2>
            <p className="text-[#999999] text-base leading-relaxed mb-8 max-w-lg">
              {t.sustainability.description}
            </p>
            <ul className="space-y-4 mb-10">
              {t.sustainability.points.map((item: string) => (
                <li key={item} className="flex items-start gap-4 text-sm text-[#B3B3B3]">
                  <div className="w-6 h-6 rounded-full bg-[#00B894]/20 border border-[#00B894]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#00B894] text-xs">&#10003;</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about/sustainability"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00B894] text-white font-medium text-sm hover:bg-[#00A37E] transition-all duration-300 hover:-translate-y-0.5 rounded-[8px] shadow-lg hover:shadow-xl"
            >
              {t.sustainability.cta}
              <ArrowRight size={16} />
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
    <section className="bg-[#F5F5F0]">
      <div className="section-container section-padding">
        <div className="border-t border-[#EAECEB] pt-16 reveal">
          <div className="text-center mb-10">
            <h3 className="text-sm uppercase tracking-[0.15em] text-[#6C757D] font-medium">Trusted By</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {TRUST_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`relative text-center px-4 ${i < TRUST_STATS.length - 1 ? 'md:border-r md:border-[#EAECEB]' : ''}`}
              >
                <div className="inline-flex flex-col items-center">
                  <div className="stat-number text-[#D4AF37]">{stat.value}</div>
                  <p className="stat-label text-center max-w-[120px]">{stat.label}</p>
                </div>
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
  const { t } = useI18n();
  return (
    <section className="bg-[#1A1A1A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B894]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container section-padding relative z-10">
        <div className="max-w-2xl reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-medium">Expert Support</span>
          </div>
          
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-light text-white mb-6 leading-tight">
            {t.expertCta.title}
          </h2>
          <p className="text-[#999999] text-base leading-relaxed mb-10 max-w-lg">
            {t.expertCta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/about/resources"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#00B894] text-white font-medium text-sm hover:bg-[#00A37E] transition-all duration-300 hover:-translate-y-0.5 rounded-[8px] shadow-lg hover:shadow-xl"
            >
              {t.expertCta.cta}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent text-white font-medium text-sm border border-white/30 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 rounded-[8px]"
            >
              Contact Sales Team
            </Link>
          </div>
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
