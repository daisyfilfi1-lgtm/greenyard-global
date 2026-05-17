import { Metadata } from 'next';
import Image from 'next/image';
import { FileText, Award, BookOpen, Headphones } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/server';

export const metadata: Metadata = {
  title: 'Resources - GreenYard',
  description: 'Certification documents, product specification datasheets, customization guides, and technical support for packaging solutions.',
};

const resources = [
  {
    icon: <Award size={28} aria-hidden="true" strokeWidth={1.5} />,
    title: 'Certification Documents',
    description:
      'ISO 15378, FDA compliance, REACH & RoHS test reports, California Prop 65 documentation, food-grade material certificates.',
  },
  {
    icon: <FileText size={28} aria-hidden="true" strokeWidth={1.5} />,
    title: 'Product Specification Datasheets',
    description:
      'Pump & sprayer dimension sheets, neck finish standard specs, material composition and viscosity adaptation guidelines.',
  },
  {
    icon: <BookOpen size={28} aria-hidden="true" strokeWidth={1.5} />,
    title: 'Customization Guide',
    description:
      'Surface finishing options, color matching, logo printing, electroplating and custom ferrule process introduction.',
  },
  {
    icon: <Headphones size={28} aria-hidden="true" strokeWidth={1.5} />,
    title: 'FAQ & Technical Support',
    description:
      'Common questions about MOQ, sampling lead time, batch traceability, formula compatibility and logistics solutions.',
  },
];

export default async function ResourcesPage() {
  const dict = await getDictionary();
  return (
    <main>
      <section className="relative section-dark min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Minimalist Business Corporate Banner - Technical Resources.png"
            alt="Technical resources"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 section-container w-full py-24">
          <div className="max-w-3xl">
            <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium text-[#F7F4EF] leading-tight">
              {dict.resources.title}
            </h1>
            <div className="w-12 h-px bg-[#D4AF37] my-6" />
            <p className="text-[#6B6B6B] leading-relaxed max-w-xl">
              {dict.resources.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EF]">
        <div className="section-container section-padding">
          <h2 className="sr-only">Resource Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((item) => (
              <div key={item.title} className="bg-white card-border p-8">
                <div className="w-12 h-12 rounded-md bg-[#F0EDE8] flex items-center justify-center text-[#D4AF37] mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F0EDE8]">
        <div className="section-container section-padding">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-medium text-[#0D0D0D] mb-2">Need Documentation?</h2>
              <p className="text-[#6B6B6B] text-sm max-w-lg">
                Contact our team to receive official PDF files, technical drawings and compliance
                documents. We provide one-on-one packaging formula analysis and free solution
                recommendation for your product line.
              </p>
            </div>
            <a
              href="/contact?subject=Resource+Documentation+Request"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-white font-medium text-sm hover:bg-[#E8D58A] transition-colors rounded-[4px]"
            >
              Request Documents &rarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
