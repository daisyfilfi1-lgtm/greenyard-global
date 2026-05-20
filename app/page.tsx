'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Leaf } from 'lucide-react';
import { BUYER_SEGMENTS, TRUST_STATS } from '@/lib/constants';
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
// 1. Hero — Cinematic, reductive. Full-bleed product image, dark overlay
// ---------------------------------------------------------------------------
function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#1A1A1A] overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/Dark Moody Premium Skincare Bottle.png"
          alt="Premium packaging solutions"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.65) 100%)" }} />
      </div>
      <div className="relative z-10 section-container w-full py-24 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.1] text-white tracking-[-0.03em]">
            {t.hero.title}
            <span className="text-[#D4AF37] font-semibold">{t.hero.titleHighlight}</span>
            {t.hero.titleEnd}
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#d1d1d1] max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#D4AF37] text-[#1A1A1A] font-medium hover:bg-[#E8D58A] transition-all duration-300 hover:-translate-y-0.5 text-sm tracking-wide rounded-[6px] shadow-lg hover:shadow-xl"
            >
              {t.hero.cta}
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="/solutions/skincare"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-white font-medium border border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-300 text-sm tracking-wide rounded-[6px]"
            >
              {t.ui.exploreSolutions}
            </Link>
          </div>

          {/* Certification row at bottom of hero */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-[#999999] uppercase tracking-[0.12em]">
              <span className="text-white/50 text-[10px] font-medium tracking-[0.15em]">ISO 15378</span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-white/50 text-[10px] font-medium tracking-[0.15em]">FDA</span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-white/50 text-[10px] font-medium tracking-[0.15em]">REACH</span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-white/50 text-[10px] font-medium tracking-[0.15em]">200+ SKUs</span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-white/50 text-[10px] font-medium tracking-[0.15em]">3-Day Sampling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 2. Who We Serve — 2×2 dark image cards
// ---------------------------------------------------------------------------
function SegmentCard({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  const { t } = useI18n();
  return (
    <Link
      href={href}
      className="group bg-[rgba(255,255,255,0.03)] border border-white/[0.06] rounded-[12px] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:border-white/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] md:aspect-[3/2] bg-[#1A1A1A] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-[#B0B0B0] text-sm leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-[#D4AF37] text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
          {t.ui.learnMore}
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

function ClientIdentityCards() {
  const { t } = useI18n();
  return (
    <section className="bg-[#1A1A1A]">
      <div className="section-container section-padding">
        <div className="reveal text-center mb-12 md:mb-16">
          <h2 className="section-title mb-4 text-white">
            {t.whoWeServe.title}
          </h2>
          <p className="text-[#B0B0B0] max-w-xl mx-auto leading-relaxed text-sm">
            {t.whoWeServe.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto reveal">
          {BUYER_SEGMENTS.map((seg) => (
            <SegmentCard
              key={seg.id}
              title={seg.title}
              description={seg.description}
              image={seg.image}
              href={seg.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 3. Case Studies — Gold badge, gold results
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
  const { t } = useI18n();
  return (
    <article className="bg-white border border-[#E5E0D8] shadow-[0_2px_8px_rgba(26,26,26,0.04)] overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_12px_32px_rgba(26,26,26,0.10)] flex flex-col rounded-[12px] group">
      <div className="relative aspect-[16/10] bg-[#E5E0D8] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#D4AF37] text-[#1A1A1A] text-xs font-medium rounded-full">{t.ui.caseStudy}</span>
        </div>
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-[#0D0D0D] mb-4 leading-tight">{title}</h3>
        <div className="space-y-2.5 text-sm text-[#6B6B6B] leading-relaxed flex-1 mb-5">
          <p><span className="text-[#0D0D0D] font-medium">{t.ui.challenge}:</span> {challenge}</p>
          <p><span className="text-[#0D0D0D] font-medium">{t.ui.solution}:</span> {solution}</p>
          <p><span className="text-[#0D0D0D] font-medium">{t.ui.result}:</span> <span className="text-[#D4AF37] font-semibold">{result}</span></p>
        </div>
        <div className="pt-5 border-t border-[#E5E0D8]">
          <p className="text-[32px] font-bold text-[#D4AF37] leading-tight">{metric}</p>
          <p className="text-xs text-[#6B6B6B] mt-1.5 uppercase tracking-wider">{metricSub}</p>
        </div>
      </div>
    </article>
  );
}

function CaseStudies() {
  const { t } = useI18n();
  return (
    <section className="bg-[#F0EDE8]">
      <div className="section-container section-padding">
        <div className="reveal text-center">
          <h2 className="section-title mb-4">
            {t.caseStudies.title}
          </h2>
          <p className="text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
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
// 4. Sustainability — Emerald badge, dark split layout
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
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#006B5E]/15 border border-[#006B5E]/30 rounded-full mb-6">
              <Leaf className="w-4 h-4 text-[#006B5E]" />
              <span className="text-xs text-[#006B5E] uppercase tracking-widest font-medium">{t.ui.sustainabilityFocused}</span>
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
                  <div className="w-6 h-6 rounded-full bg-[#006B5E]/20 border border-[#006B5E]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#006B5E] text-xs">&#10003;</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about/sustainability"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#1A1A1A] font-medium text-sm hover:bg-[#E8D58A] transition-all duration-300 hover:-translate-y-0.5 rounded-[8px] shadow-lg hover:shadow-xl"
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
// 5. Enterprise Stats Trust Bar — Larger numbers, certification row
// ---------------------------------------------------------------------------
function TrustBar() {
  const { t } = useI18n();
  return (
    <section className="bg-[#F7F4EF]">
      <div className="section-container section-padding">
        <div className="border-t border-[#E5E0D8] pt-16 reveal">
          <div className="text-center mb-10">
            <h3 className="text-sm uppercase tracking-[0.15em] text-[#6B6B6B] font-medium">{t.ui.trustedBy}</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {TRUST_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`relative text-center px-4 ${i < TRUST_STATS.length - 1 ? 'md:border-r md:border-[#E5E0D8]' : ''}`}
              >
                <div className="inline-flex flex-col items-center">
                  <div className="stat-number">{stat.value}</div>
                  <p className="stat-label text-center max-w-[120px]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certification row */}
          <div className="mt-12 pt-8 border-t border-[#E5E0D8]">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
              {['ISO 15378', 'FDA', 'REACH', 'RoHS', 'California Prop 65'].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 text-xs text-[#6B6B6B] uppercase tracking-[0.12em] font-medium"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 6. Expert CTA — Clean dark bg, product macro shot, gold CTA
// ---------------------------------------------------------------------------
function ExpertCta() {
  const { t } = useI18n();
  return (
    <section className="bg-[#1A1A1A] relative overflow-hidden">
      <div className="section-container section-padding relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center reveal">
          <div>
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
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#D4AF37] text-[#1A1A1A] font-medium text-sm hover:bg-[#E8D58A] transition-all duration-300 hover:-translate-y-0.5 rounded-[8px] shadow-lg hover:shadow-xl"
              >
                {t.expertCta.cta}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent text-white font-medium text-sm border border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-300 rounded-[8px]"
              >
                {t.ui.contactSales}
              </Link>
            </div>
          </div>

          {/* Right: product macro shot */}
          <div className="relative hidden md:block">
            <div className="aspect-square rounded-[16px] overflow-hidden shadow-2xl">
              <Image
                src="/images/Macro Pump Head with Chemical .png"
                alt="Precision pump engineering"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
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
      <CaseStudies />
      <Sustainability />
      <TrustBar />
      <ExpertCta />
    </>
  );
}
