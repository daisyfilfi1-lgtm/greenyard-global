import { IndustrySlug, SeriesInfo } from '@/types/product';

export const SITE_NAME = 'GreenYard';
export const SITE_TAGLINE = 'One Earth. Precision Engineering.';

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const PRIMARY_NAV: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Solutions by Industry',
    href: '#',
    children: [
      { label: 'Skincare & Clean Beauty', href: '/solutions/skincare', description: 'Low MOQ, fast sampling, sustainable packaging' },
      { label: 'Pharma & Cosmeceutical', href: '/solutions/pharma', description: 'ISO 15378, FDA, metal-free pathways' },
      { label: 'Household & Industrial', href: '/solutions/household', description: 'Heavy-duty, chemical resistant, bulk pricing' },
      { label: 'Contract Packaging', href: '/solutions/contract', description: '24/410, 28/410 standard compatibility' },
    ],
  },
  {
    label: 'Products',
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
    label: 'About',
    href: '#',
    children: [
      { label: 'Company Overview', href: '/about', description: 'Our story, team and journey' },
      { label: 'Factory & Capabilities', href: '/about/factory', description: 'Manufacturing and quality control' },
      { label: 'Sustainability', href: '/about/sustainability', description: 'Eco-friendly packaging commitments' },
      { label: 'Resources', href: '/about/resources', description: 'Documents, guides and technical support' },
      { label: 'Certifications', href: '/about/certifications', description: 'ISO, FDA, REACH, RoHS compliance' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const SERIES_INFO: Record<string, SeriesInfo> = {
  'fully-recyclable': {
    slug: 'fully-recyclable',
    name: 'Fully Recyclable Series',
    description: 'All-plastic mono material pumps — recyclable in PE stream. PCR options available.',
    categoryRoute: '/products/fully-recyclable',
  },
  'mist-sprayer': {
    slug: 'mist-sprayer',
    name: 'Mist Sprayer Series',
    description: 'Fine mist sprayers from 0.06ml to 0.70ml dosage.',
    categoryRoute: '/products/mist-sprayers',
  },
  'fine-mist': {
    slug: 'fine-mist',
    name: 'Fine Mist / Special Fine Mist',
    description: 'Ultra-fine mist for premium skincare and fragrance applications.',
    categoryRoute: '/products/mist-sprayers',
  },
  'treatment-pump': {
    slug: 'treatment-pump',
    name: 'Treatment Pump Series',
    description: 'Precision dosing 0.12ml–0.50ml for serums and treatments.',
    categoryRoute: '/products/pumps',
  },
  'lotion-pump': {
    slug: 'lotion-pump',
    name: 'Lotion Pump Series',
    description: '1.00ml–4.00ml output for lotions, shampoos, and household products.',
    categoryRoute: '/products/pumps',
  },
  'foam-pump': {
    slug: 'foam-pump',
    name: 'Foam Pump Series',
    description: 'Rich foam output 0.27ml–0.80ml for cleansers and sanitizers.',
    categoryRoute: '/products/pumps',
  },
  'trigger-sprayer': {
    slug: 'trigger-sprayer',
    name: 'Trigger Sprayer Series',
    description: 'Heavy-duty trigger sprayers 0.25ml–1.30ml for household and industrial use.',
    categoryRoute: '/products/trigger-sprayers',
  },
  'nail-pump': {
    slug: 'nail-pump',
    name: 'Nail Pump Series',
    description: 'Precision pumps for nail care and color cosmetics.',
    categoryRoute: '/products/pumps',
  },
  'dropper': {
    slug: 'dropper',
    name: 'Dropper Series',
    description: 'Glass and plastic droppers for serums, oils, and pharma.',
    categoryRoute: '/products/droppers',
  },
  'airless-bottle': {
    slug: 'airless-bottle',
    name: 'Airless Bottle Series',
    description: '15ml–200ml airless bottles for premium skincare.',
    categoryRoute: '/products/cosmetic-packaging',
  },
  'deodorant-stick': {
    slug: 'deodorant-stick',
    name: 'Deodorant Stick Series',
    description: '3g–75g deodorant stick packaging.',
    categoryRoute: '/products/cosmetic-packaging',
  },
  'cream-jar': {
    slug: 'cream-jar',
    name: 'Cream Jar Series',
    description: 'PP, PETG jars 5g–130g for creams and balms.',
    categoryRoute: '/products/cosmetic-packaging',
  },
  'plastic-bottle-set': {
    slug: 'plastic-bottle-set',
    name: 'Plastic Bottle Sets',
    description: 'PET/PE bottles with matched pumps.',
    categoryRoute: '/products/cosmetic-packaging',
  },
};

export const INDUSTRY_SLUGS: Record<IndustrySlug, string> = {
  skincare: 'Skincare & Clean Beauty',
  pharma: 'Pharma & Cosmeceutical',
  household: 'Household & Industrial',
  contract: 'Contract Packaging',
  fragrance: 'Fragrance',
  'personal-care': 'Personal Care',
  'hair-care': 'Hair Care',
  'color-cosmetics': 'Color Cosmetics',
  'essential-oils': 'Essential Oils',
  agriculture: 'Agriculture',
  beauty: 'Beauty',
  wellness: 'Wellness',
};

export const TRUST_STATS = [
  { value: '98.5%', label: 'On-Time Delivery' },
  { value: '200+', label: 'Brand Partners' },
  { value: '40+', label: 'Countries Served' },
  { value: '15+', label: 'Years Export Experience' },
];

export const BUYER_SEGMENTS = [
  {
    id: 'clean-beauty',
    title: 'Clean Beauty',
    description: 'Low MOQ from 1,000 units. 7-day sampling. Speed to market for premium serum & skincare brands.',
    icon: 'Sparkles',
    href: '/solutions/skincare',
    image: '/images/segments/clean-beauty.jpg',
  },
  {
    id: 'pharma',
    title: 'Pharma & Medical',
    description: 'ISO 15378 certified. FDA compliant. Batch traceability. Metal-free pathways for pharmaceutical packaging.',
    icon: 'ShieldCheck',
    href: '/solutions/pharma',
    image: '/images/segments/pharma.jpg',
  },
  {
    id: 'personal-care',
    title: 'Personal Care & Wellness',
    description: 'Hygiene, sanitizers, refill pouches. Sustainable PCR packaging for modern wellness brands.',
    icon: 'Building2',
    href: '/solutions/personal-care',
    image: '/images/segments/personal-care.jpg',
  },
  {
    id: 'dtc',
    title: 'Indie DTC Brands',
    description: 'Small-batch customization. Kraft-ready packaging. Speed to shelf for independent beauty founders.',
    icon: 'Globe',
    href: '/solutions/beauty',
    image: '/images/segments/indie-dtc.jpg',
  },
];
