import Link from 'next/link';
import { Factory, FlaskConical, Globe, ShieldCheck } from 'lucide-react';
import { SITE_TAGLINE, BUYER_SEGMENTS, TRUST_STATS } from '@/lib/constants';
import AnimatedCounter from '@/components/home/AnimatedCounter';

// ---------------------------------------------------------------------------
// 1. Hero — clean dark section, product-oriented messaging
// ---------------------------------------------------------------------------
function HeroSection() {
  return (
    <section className="section-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] to-[#1A1A1A]" />
      <div className="relative z-10 section-container section-padding">
        <div className="max-w-3xl">
          <p className="text-sm text-[#6C757D] uppercase tracking-[0.15em] mb-6">
            Ningbo GreenYard Sprayers Co., Ltd.
          </p>

          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-[#F5F5F0] tracking-tight">
            Precision packaging for
            <br />
            <span className="text-[#D4AF37] font-medium">global brands</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#6C757D] max-w-xl leading-relaxed">
            Sprayers, pumps, droppers, and cosmetic packaging — engineered for reliability,
            designed for sustainability. 200+ SKUs, flexible MOQ, global compliance.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00B894] text-white font-medium hover:bg-[#009B7A] transition-colors text-sm tracking-wide"
            >
              Browse Products
            </Link>
            <Link
              href="/about/factory"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-[#F5F5F0]/20 text-[#F5F5F0] font-medium hover:border-[#F5F5F0]/50 transition-colors text-sm tracking-wide"
            >
              Factory &amp; Capabilities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 2. Segment Selector — lucide icons, clean cards
// ---------------------------------------------------------------------------
const SEGMENT_ICONS: Record<string, React.ReactNode> = {
  Rocket: <Factory size={24} aria-hidden="true" />,
  Cog: <FlaskConical size={24} aria-hidden="true" />,
  Globe: <Globe size={24} aria-hidden="true" />,
  ShieldCheck: <ShieldCheck size={24} aria-hidden="true" />,
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
      className="group bg-white rounded-lg border border-[#DEE2E6] p-6 md:p-8 flex flex-col relative transition-all duration-200 hover:border-[#D4AF37]/40 hover:shadow-md"
    >
      <div className="w-10 h-10 rounded-md bg-[#E8F5F1] flex items-center justify-center text-[#00B894] mb-4">
        {SEGMENT_ICONS[icon] ?? <Factory size={24} aria-hidden="true" />}
      </div>
      <h3 className="text-lg font-medium text-[#0D0D0D] mb-2">{title}</h3>
      <p className="text-[#6C757D] text-sm leading-relaxed flex-1">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-[#00B894] text-sm group-hover:underline underline-offset-2">
        Learn More &rarr;
      </span>
    </Link>
  );
}

function SegmentSelector() {
  return (
    <section className="bg-[#F5F5F0]">
      <div className="section-container section-padding">
        <div className="max-w-lg mb-12">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium text-[#0D0D0D] mb-4">
            Find Your Solution
          </h2>
          <div className="w-12 h-px bg-[#D4AF37] mb-4" />
          <p className="text-[#6C757D]">
            Whether you are launching a clean beauty line or scaling pharma-grade production,
            we have the packaging expertise to match.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
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
// 3. Trust Bar — simplified
// ---------------------------------------------------------------------------
function TrustBar() {
  return (
    <section className="bg-[#F5F5F0]">
      <div className="section-container section-padding pt-0">
        <div className="border-t border-[#DEE2E6] pt-12">
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
// 4. Sustainability Teaser — clean split-screen
// ---------------------------------------------------------------------------
function SustainabilityTeaser() {
  return (
    <section className="bg-[#F5F5F0]">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs text-[#D4AF37] uppercase tracking-[0.12em] font-medium">Sustainability</span>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium text-[#0D0D0D] mt-3 mb-6 leading-tight">
              Packaging that performs.<br />Planet that persists.
            </h2>
            <p className="text-[#6C757D] leading-relaxed mb-6">
              Our <strong className="text-[#0D0D0D]">Mono Pump</strong> is a fully recyclable,
              all-plastic pump that processes in standard PE recycling streams. PCR options available
              across our entire pump and sprayer lineup.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Mono-material all-plastic pump — recyclable in PE stream',
                'PCR (Post-Consumer Recycled) material options',
                'Global compliance: REACH, RoHS, FDA, California Prop 65',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#6C757D]">
                  <span className="text-[#00B894] mt-0.5 flex-shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 text-[#00B894] hover:underline underline-offset-2"
            >
              Explore Sustainability &rarr;
            </Link>
          </div>

          <div className="bg-[#1A1A1A] rounded-lg flex items-center justify-center min-h-[320px] md:min-h-[400px] select-none pointer-events-none">
            <span className="text-[#F5F5F0]/30 text-sm tracking-widest uppercase text-center px-4">
              Sustainability visual
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 5. Case Studies
// ---------------------------------------------------------------------------
const CASE_STUDIES = [
  {
    title: 'Clean Beauty Serum Launch',
    region: 'US',
    narrative:
      'A Los Angeles indie beauty brand needed to go from concept to shelf in under 3 months. We provided GY-901A1 glass droppers with custom collar plating and 24/410 neck finishes. Full batch traceability, zero defects.',
    metric: 'Launched in 90 days with 3,000-unit MOQ',
  },
  {
    title: 'Hand Sanitizer Scale-Up',
    region: 'EU',
    narrative:
      'When a European pharmaceutical partner needed to rapidly scale hand sanitizer production, we delivered GY-608A1 fine mist sprayers and GY-320 lotion pumps on a 2-week lead time. JIT delivery to 3 manufacturing sites.',
    metric: 'Scaled to 500K units/month in 4 weeks',
  },
  {
    title: 'Hair Care Line Refresh',
    region: 'LATAM',
    narrative:
      'A leading LATAM hair care brand wanted to refresh 12 SKUs with matched bottle + pump sets. We supplied GY-302B1 lotion pumps with custom ferrule colors and GY-320 recyclable pumps, reducing packaging costs by 15%.',
    metric: '15% cost reduction with matched bottle+pump sets',
  },
];

function CaseStudyCard({
  title,
  region,
  narrative,
  metric,
}: {
  title: string;
  region: string;
  narrative: string;
  metric: string;
}) {
  return (
    <article className="bg-white border border-[#DEE2E6] rounded-lg overflow-hidden transition-shadow hover:shadow-md flex flex-col">
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-base font-medium text-[#0D0D0D]">{title}</h3>
          <span className="text-[10px] font-medium text-[#D4AF37] uppercase tracking-wider">{region}</span>
        </div>
        <p className="text-[#6C757D] text-sm leading-relaxed flex-1 mb-4">{narrative}</p>
        <div className="w-8 h-px bg-[#D4AF37] mb-3" />
        <p className="text-[#D4AF37] font-medium text-sm">{metric}</p>
      </div>
    </article>
  );
}

function CaseStudies() {
  return (
    <section className="bg-[#F5F5F0]">
      <div className="section-container section-padding">
        <div className="mb-12">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium text-[#0D0D0D] mb-4">
            In the Market
          </h2>
          <div className="w-12 h-px bg-[#D4AF37] mb-4" />
          <p className="text-[#6C757D] max-w-xl">
            From indie launches to global scale-ups — real stories from our brand partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.title} {...cs} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 6. Expert CTA
// ---------------------------------------------------------------------------
function ExpertCta() {
  return (
    <section className="section-dark">
      <div className="section-container section-padding">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium text-[#F5F5F0] mb-6 leading-tight">
            Not sure which pump fits your formula?
          </h2>
          <p className="text-[#6C757D] leading-relaxed mb-8 max-w-lg">
            Our packaging engineers will analyze your formula viscosity, bottle neck finish, and
            sustainability requirements to recommend the optimal solution.
          </p>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4AF37] text-[#1A1A1A] font-medium text-sm tracking-wide hover:bg-[#C5A132] transition-colors"
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
  return (
    <>
      <HeroSection />
      <SegmentSelector />
      <TrustBar />
      <SustainabilityTeaser />
      <CaseStudies />
      <ExpertCta />
    </>
  );
}
