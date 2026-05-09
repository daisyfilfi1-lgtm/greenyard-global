import Link from 'next/link';
import { SITE_TAGLINE, BUYER_SEGMENTS, TRUST_STATS } from '@/lib/constants';
import AnimatedCounter from '@/components/home/AnimatedCounter';

// ---------------------------------------------------------------------------
// 1. Hero
// ---------------------------------------------------------------------------
function HeroSection() {
  return (
    <section className="section-dark relative overflow-hidden">
      {/* Background video placeholder / gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/90 via-[#1A1A1A]/70 to-[#1A1A1A]/90" />
      <div className="absolute inset-0 flex items-center justify-center opacity-20 select-none pointer-events-none">
        <span className="text-[#F5F5F0] text-lg tracking-widest uppercase">
          Factory footage placeholder
        </span>
      </div>

      <div className="relative z-10 section-container section-padding">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tagline */}
          <p className="inline-block gold-badge mb-6">GreenYard Global</p>

          <h1 className="text-[clamp(2.25rem,6vw,4rem)] font-light leading-[1.1] text-[#F5F5F0] tracking-tight">
            One Earth.{' '}
            <span className="text-[#D4AF37] font-semibold">Precision Engineering.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#6C757D] max-w-2xl mx-auto leading-relaxed">
            Flexible MOQ · Fast Sampling · Fully Recyclable Pathways · Global Compliance
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solutions/skincare"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00B894] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-base"
            >
              Explore Solutions
            </Link>
            <Link
              href="/about/factory"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#F5F5F0]/30 text-[#F5F5F0] font-semibold rounded-lg hover:border-[#F5F5F0]/60 transition-colors text-base gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Factory Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 2. Segment Selector
// ---------------------------------------------------------------------------
const SEGMENT_ICONS: Record<string, string> = {
  Rocket: '🚀',
  Cog: '⚙️',
  Globe: '🌍',
  ShieldCheck: '🛡️',
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
      className="group bg-white rounded-xl p-6 md:p-8 hover-lift shadow-sm hover:shadow-lg flex flex-col relative"
    >
      {/* Gold underline that expands from center on hover */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#D4AF37] rounded-b transition-all duration-300 group-hover:w-full" />

      <span className="text-3xl mb-4 block" role="img" aria-hidden="true">
        {SEGMENT_ICONS[icon] ?? '📦'}
      </span>
      <h3 className="text-xl font-semibold text-[#0D0D0D] mb-2">{title}</h3>
      <p className="text-[#6C757D] text-sm leading-relaxed flex-1">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-[#00B894] font-semibold text-sm group-hover:underline">
        Learn More &rarr;
      </span>
    </Link>
  );
}

function SegmentSelector() {
  return (
    <section className="section-mint-tint">
      <div className="section-container section-padding">
        <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold text-center text-[#0D0D0D] mb-4">
          Find Your Solution
        </h2>
        <p className="text-center text-[#6C757D] max-w-xl mx-auto mb-12 md:mb-16">
          Whether you are launching a clean beauty line or scaling pharma-grade production, we have the packaging
          expertise to match.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
// 3. Trust Bar
// ---------------------------------------------------------------------------
function TrustBar() {
  return (
    <section className="section-light">
      <div className="section-container section-padding">
        <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-8 md:gap-12 overflow-x-auto pb-2 md:overflow-visible snap-x snap-mandatory">
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
    </section>
  );
}

// ---------------------------------------------------------------------------
// 4. Sustainability Teaser
// ---------------------------------------------------------------------------
function SustainabilityTeaser() {
  return (
    <section className="section-light">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <div className="gold-badge mb-4">Sustainability</div>
            <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold text-[#0D0D0D] mb-6 leading-tight">
              Packaging that performs. Planet that persists.
            </h2>
            <p className="text-[#6C757D] leading-relaxed mb-6">
              Our <strong className="text-[#0D0D0D]">Mono Pump</strong> is a fully recyclable,
              all-plastic pump that processes in standard PE recycling streams. PCR options available
              across our entire pump and sprayer lineup — reducing virgin plastic without compromising
              on precision dosing or durability.
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
              className="inline-flex items-center gap-2 text-[#00B894] font-semibold hover:underline"
            >
              Explore Sustainability &rarr;
            </Link>
          </div>

          {/* Right — placeholder image area */}
          <div className="section-dark rounded-xl flex items-center justify-center min-h-[320px] md:min-h-[400px] select-none pointer-events-none">
            <span className="text-[#F5F5F0]/40 text-lg tracking-widest uppercase text-center px-4">
              Product hero image placeholder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 5. In the Market (Case Studies)
// ---------------------------------------------------------------------------
const CASE_STUDIES = [
  {
    title: 'Clean Beauty Serum Launch',
    region: 'US',
    narrative:
      'A Los Angeles indie beauty brand needed to go from concept to shelf in under 3 months. We provided GY-901A1 glass droppers with custom collar plating and 24/410 neck finishes. Full batch traceability, zero defects.',
    metric: 'Launched in 90 days with 3,000-unit MOQ',
    imageLabel: 'Dropper product photo placeholder',
  },
  {
    title: 'Hand Sanitizer Scale-Up',
    region: 'EU',
    narrative:
      'When a European pharmaceutical partner needed to rapidly scale hand sanitizer production, we delivered GY-608A1 fine mist sprayers and GY-320 lotion pumps on a 2-week lead time. JIT delivery to 3 manufacturing sites.',
    metric: 'Scaled to 500K units/month in 4 weeks',
    imageLabel: 'Fine mist sprayer photo placeholder',
  },
  {
    title: 'Hair Care Line Refresh',
    region: 'LATAM',
    narrative:
      'A leading LATAM hair care brand wanted to refresh 12 SKUs with matched bottle + pump sets. We supplied GY-302B1 lotion pumps with custom ferrule colors and GY-320 recyclable pumps, reducing packaging costs by 15%.',
    metric: '15% cost reduction with matched bottle+pump sets',
    imageLabel: 'Lotion pump set photo placeholder',
  },
];

function CaseStudyCard({
  title,
  region,
  narrative,
  metric,
  imageLabel,
}: {
  title: string;
  region: string;
  narrative: string;
  metric: string;
  imageLabel: string;
}) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Placeholder image area */}
      <div className="bg-[#F5F5F0] h-56 md:h-64 flex items-center justify-center select-none pointer-events-none">
        <span className="text-[#6C757D]/50 text-sm tracking-widest uppercase text-center px-4">
          {imageLabel}
        </span>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-lg font-semibold text-[#0D0D0D]">{title}</h3>
          <span className="text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-full uppercase tracking-wide">
            {region}
          </span>
        </div>
        <p className="text-[#6C757D] text-sm leading-relaxed flex-1 mb-4">{narrative}</p>
        <p className="text-lg font-semibold text-[#D4AF37]">{metric}</p>
      </div>
    </article>
  );
}

function CaseStudies() {
  return (
    <section className="section-light">
      <div className="section-container section-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold text-[#0D0D0D] mb-4">
            In the Market
          </h2>
          <p className="text-[#6C757D] max-w-xl mx-auto">
            From indie launches to global scale-ups — real stories from our brand partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left — text (3/5 width) */}
          <div className="md:col-span-3">
            <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold text-[#F5F5F0] mb-6 leading-tight">
              Not sure which pump fits your formula?
            </h2>
            <p className="text-[#6C757D] leading-relaxed mb-8 max-w-xl">
              Our packaging engineers will analyze your formula viscosity, bottle neck finish, and
              sustainability requirements to recommend the optimal solution.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#1A1A1A] font-semibold rounded-lg hover:opacity-90 transition-opacity text-base"
            >
              Speak to Our Packaging Engineer &rarr;
            </Link>
          </div>

          {/* Right — photo placeholder (2/5 width) */}
          <div className="md:col-span-2 bg-[#1A1A1A]/60 border border-[#F5F5F0]/10 rounded-xl flex items-center justify-center min-h-[260px] select-none pointer-events-none">
            <span className="text-[#F5F5F0]/30 text-sm tracking-widest uppercase text-center px-4">
              Engineer photo placeholder
            </span>
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
