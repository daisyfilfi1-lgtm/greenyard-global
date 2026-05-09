import { Metadata } from 'next';
import { ShieldCheck, FileText, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Certifications - GreenYard',
  description: 'GreenYard certifications: ISO9001, SGS, REACH, RoHS, FDA, California Prop 65 compliance.',
};

const certifications = [
  {
    name: 'ISO9001',
    icon: <Award size={24} aria-hidden="true" />,
    description: 'Quality management system certification. GreenYard has passed ISO9001 accreditation through relentless dedication to manufacturing excellence.',
    scope: 'Design, manufacture, and quality control of packaging components',
  },
  {
    name: 'REACH',
    icon: <ShieldCheck size={24} aria-hidden="true" />,
    description: 'EU chemical safety regulation compliance. All materials and finished products comply with REACH requirements for the European market.',
    scope: 'Chemical substance registration and safety across all product series',
  },
  {
    name: 'FDA',
    icon: <ShieldCheck size={24} aria-hidden="true" />,
    description: 'Food and Drug Administration compliance. Materials used in production are FDA-compliant for food and drug contact applications.',
    scope: 'Food and drug contact safe materials across all production lines',
  },
  {
    name: 'RoHS',
    icon: <FileText size={24} aria-hidden="true" />,
    description: 'Restriction of Hazardous Substances directive compliance. All products meet RoHS standards for restricted materials.',
    scope: 'Hazardous substance restriction across all components',
  },
  {
    name: 'SGS',
    icon: <FileText size={24} aria-hidden="true" />,
    description: 'Third-party testing and certification by SGS. Product quality and safety verified through independent laboratory testing.',
    scope: 'Product testing, inspection, and verification services',
  },
  {
    name: 'California Prop 65',
    icon: <FileText size={24} aria-hidden="true" />,
    description: 'California Safe Drinking Water and Toxic Enforcement Act compliance. Products meet Proposition 65 requirements for the California market.',
    scope: 'Chemical disclosure and safety for California distribution',
  },
];

export default function CertificationsPage() {
  return (
    <main>
      <section className="section-dark">
        <div className="section-container section-padding">
          <nav className="flex items-center gap-2 text-sm text-[#6C757D] mb-6">
            <a href="/" className="hover:text-[#00B894] transition-colors">Home</a>
            <span>/</span>
            <a href="/about" className="hover:text-[#00B894] transition-colors">About</a>
            <span>/</span>
            <span className="text-[#F5F5F0]">Certifications</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium text-[#F5F5F0] leading-tight">
              Certifications &amp; Compliance
            </h1>
            <div className="w-12 h-px bg-[#D4AF37] my-6" />
            <p className="text-[#6C757D] leading-relaxed max-w-xl">
              GreenYard maintains full compliance across international regulatory frameworks.
              From ISO9001 quality management to REACH chemical safety — our certifications
              give our partners confidence in every shipment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F0]">
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white card-border p-6">
                <div className="w-10 h-10 rounded-md bg-[#E8F5F1] flex items-center justify-center text-[#00B894] mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-base font-medium text-[#0D0D0D] mb-2">{cert.name}</h3>
                <p className="text-sm text-[#6C757D] leading-relaxed mb-3">{cert.description}</p>
                <div className="w-8 h-px bg-[#D4AF37] mb-2" />
                <p className="text-xs text-[#D4AF37]">{cert.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E8F5F1]">
        <div className="section-container section-padding">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-medium text-[#0D0D0D] mb-2">Need Compliance Documentation?</h2>
              <p className="text-[#6C757D] text-sm max-w-lg">
                Request our environmental compliance package including material declarations,
                recyclability certificates, and regulatory statements.
              </p>
            </div>
            <a
              href="mailto:info@cngreenyard.com?subject=Compliance Documentation Request"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00B894] text-white font-medium text-sm hover:bg-[#009B7A] transition-colors"
            >
              Request Documentation &rarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
