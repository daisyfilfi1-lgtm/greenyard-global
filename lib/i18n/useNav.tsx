'use client';

import { useI18n } from '@/lib/i18n';

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export function useNav(): NavItem[] {
  const { t } = useI18n();

  return [
    { label: t.nav.home, href: '/' },
    {
      label: t.nav.solutions || 'Solutions by Industry',
      href: '#',
      children: [
        { label: 'Skincare & Clean Beauty', href: '/solutions/skincare', description: 'Low MOQ, fast sampling, sustainable packaging' },
        { label: 'Pharma & Cosmeceutical', href: '/solutions/pharma', description: 'ISO 15378, FDA, metal-free pathways' },
        { label: 'Household & Industrial', href: '/solutions/household', description: 'Heavy-duty, chemical resistant, bulk pricing' },
        { label: 'Contract Packaging', href: '/solutions/contract', description: '24/410, 28/410 standard compatibility' },
      ],
    },
    {
      label: t.nav.products || 'Products',
      href: '/products',
      children: [
        { label: 'Fully Recyclable Series', href: '/products/fully-recyclable', description: 'Mono Material pumps, PCR options' },
        { label: 'Mist Sprayer Series', href: '/products/mist-sprayers', description: 'Fine mist 0.06ml–0.70ml' },
        { label: 'Pump Series', href: '/products/pumps', description: 'Lotion, Treatment, Foam, Nail pumps' },
        { label: 'Trigger Sprayer Series', href: '/products/trigger-sprayers', description: '0.25ml–1.30ml output' },
        { label: 'Dropper Series', href: '/products/droppers', description: 'Skincare, pharma, essential oils' },
        { label: 'Cosmetic Packaging', href: '/products/cosmetic-packaging', description: 'Airless bottles, jars, bottle sets' },
      ],
    },
    {
      label: t.nav.about || 'About',
      href: '#',
      children: [
        { label: t.nav['company-overview'] || 'Company Overview', href: '/about', description: 'Our story, team and journey' },
        { label: t.nav['factory-capabilities'] || 'Factory & Capabilities', href: '/about/factory', description: 'Manufacturing and quality control' },
        { label: t.nav.sustainability || 'Sustainability', href: '/about/sustainability', description: 'Eco-friendly packaging commitments' },
        { label: t.nav.resources || 'Resources', href: '/about/resources', description: 'Documents, guides and technical support' },
        { label: t.nav.certifications || 'Certifications', href: '/about/certifications', description: 'ISO, FDA, REACH, RoHS compliance' },
        { label: t.nav.contact || 'Contact', href: '/contact', description: 'Get in touch with our team' },
      ],
    },
  ];
}
