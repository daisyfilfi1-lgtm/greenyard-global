import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '@/lib/i18n/server';

export const metadata: Metadata = {
  title: 'Factory & Capabilities - GreenYard',
  description: 'GreenYard factory in Yuyao, Zhejiang — 15,000 sqm with advanced mold design, injection molding, automatic assembly, and quality inspection equipment.',
};

export default async function FactoryPage() {
  const dict = await getDictionary();
  return (
    <main>
      <section className="relative section-dark min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Modern High-End Cosmetic Packaging Factory Interior.png"
            alt="GreenYard modern factory facility in Yuyao"
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
              {dict.factory.title}
            </h1>
            <div className="w-12 h-px bg-[#D4AF37] my-6" />
            <p className="text-[#6B6B6B] leading-relaxed max-w-xl">
              {dict.factory.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EF]">
        <div className="section-container section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-[#6B6B6B] leading-relaxed">
              <p>
                Since the building of our factory, its size has been expanding continually and its
                management mode has been modernized. We have advanced mould design, manufacture,
                injection, automatic assemble, quality inspection equipment and technology.
              </p>
              <p>
                We have built an experienced, professional team dedicated to producing precision
                packaging components that meet international quality standards. By our relentless
                hard work, we have passed the ISO9001 accreditation and won reputation around the
                world.
              </p>
              <p>
                Our factory is located at No.97-1 Fengyi Road, Lanjiang Street, Yuyao City, Zhejiang,
                China — near Ningbo Port, providing convenient access for international shipping.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden">
              <Image
                src="/images/Modern High-End Cosmetic Packaging Factory Interior.png"
                alt="Modern High-End Cosmetic Packaging Factory Interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0EDE8]">
        <div className="section-container section-padding">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-medium text-[#0D0D0D] mb-2">Visit Our Facility</h2>
              <p className="text-[#6B6B6B] text-sm max-w-lg">
                Schedule a factory tour or virtual meeting with our engineering team.
              </p>
            </div>
            <a
              href="/contact?subject=Factory+Tour+Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-white font-medium text-sm hover:bg-[#E8D58A] transition-colors"
            >
              Contact Us &rarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
