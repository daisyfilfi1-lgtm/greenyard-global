// Product types for GreenYard Global

export interface ProductOption {
  type: 'actuator' | 'closure' | 'clip-lock' | 'cover' | 'collar' | 'nozzle';
  code: string;
  label: string;
  description?: string;
}

export interface Product {
  sku: string;
  name: string;
  series: ProductSeries;
  tagline: string;
  description: string;
  dischargeRate?: string;       // e.g., "0.12ml/T"
  neckFinish: string[];         // e.g., ["18/410", "20/410"]
  material: string[];           // e.g., ["PP", "PE"]
  lockType?: string;            // e.g., "Left-right Lock"
  viscosityRange?: string;      // e.g., "Water-like to Medium"
  sustainable: boolean;
  monoMaterial: boolean;        // Fully Recyclable Series flag
  pcrAvailable: boolean;
  industries: IndustrySlug[];
  options: ProductOption[];
  relatedSkus: string[];
  imagePlaceholder: string;
}

export type ProductSeries =
  | 'fully-recyclable'
  | 'mist-sprayer'
  | 'fine-mist'
  | 'treatment-pump'
  | 'lotion-pump'
  | 'foam-pump'
  | 'trigger-sprayer'
  | 'nail-pump'
  | 'dropper'
  | 'airless-bottle'
  | 'deodorant-stick'
  | 'cream-jar'
  | 'plastic-bottle-set';

export type IndustrySlug = 'skincare' | 'pharma' | 'household' | 'contract' | 'fragrance' | 'personal-care' | 'hair-care' | 'color-cosmetics' | 'essential-oils' | 'agriculture' | 'beauty' | 'wellness';

export interface IndustryPage {
  slug: IndustrySlug;
  title: string;
  heroHeadline: string;
  heroSub: string;
  painPoints: { icon: string; title: string; description: string }[];
  recommendedSkus: string[];
  complianceBadges: string[];
  caseStudy: {
    challenge: string;
    solution: string;
    result: string;
    quote: string;
  };
  moqTable: { product: string; moq: string; leadTime: string }[];
}

export interface SeriesInfo {
  slug: string;
  name: string;
  description: string;
  categoryRoute: string;
}
