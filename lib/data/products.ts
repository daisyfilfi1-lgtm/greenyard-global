import { Product } from '@/types/product';

// Phase 1: Mock product data based on Catalogue 2024-S
// Top 20 hero SKUs + subset of related products
// Full SKU list to be imported from Supabase in Phase 2

export const products: Product[] = [
  // ===== FULLY RECYCLABLE SERIES =====
  {
    sku: 'GY-608P-A1',
    name: 'Fully Recyclable Fine Mist Sprayer',
    series: 'fully-recyclable',
    tagline: 'All-plastic fine mist with recyclable PE pathway',
    description: 'The flagship Mono Pump concept applied to fine mist technology. All-plastic component — no metal spring contact. Recyclable in standard PE stream. Ideal for clean beauty and pharma brands requiring monomaterial packaging.',
    dischargeRate: '0.12ml/T',
    neckFinish: ['18/410', '20/410'],
    material: ['PP', 'PE'],
    lockType: 'Left-right Lock',
    sustainable: true,
    monoMaterial: true,
    pcrAvailable: true,
    industries: ['skincare', 'pharma', 'fragrance', 'clean-beauty' as any],
    options: [
      { type: 'actuator', code: 'A1', label: 'Standard A1' },
      { type: 'actuator', code: 'B1', label: 'Ribbed B1' },
      { type: 'closure', code: 'Ribbed-1', label: 'Ribbed Closure' },
      { type: 'closure', code: 'Smooth', label: 'Smooth Closure' },
    ],
    relatedSkus: ['GY-610P-A1', 'GY-805P', 'GY-608A1'],
    imagePlaceholder: 'GY-608P-A1 Fully Recyclable Fine Mist Sprayer, all-plastic white body with green accent, 3/4 view on white background',
  },
  {
    sku: 'GY-805P',
    name: 'Fully Recyclable Treatment Pump',
    series: 'fully-recyclable',
    tagline: 'Precision 0.15ml dosing, fully recyclable',
    description: 'Treatment pump with all-plastic construction. Ideal for serums and high-value skincare formulations requiring metal-free contact. PCR up to 50%.',
    dischargeRate: '0.15ml/T',
    neckFinish: ['18/410'],
    material: ['PP', 'PE'],
    lockType: 'Screw Down Lock',
    sustainable: true,
    monoMaterial: true,
    pcrAvailable: true,
    industries: ['skincare', 'pharma'],
    options: [
      { type: 'actuator', code: 'A1', label: 'Standard' },
      { type: 'closure', code: 'Smooth', label: 'Smooth' },
      { type: 'closure', code: 'Ribbed-1', label: 'Ribbed' },
    ],
    relatedSkus: ['GY-608P-A1', 'GY-320', 'GY-801A1'],
    imagePlaceholder: 'GY-805P Fully Recyclable Treatment Pump, white body, precision nozzle, on white background',
  },

  // ===== MIST SPRAYER SERIES =====
  {
    sku: 'GY-608A1',
    name: 'Fine Mist Sprayer 0.12ml',
    series: 'mist-sprayer',
    tagline: 'Ultra-fine 0.12ml mist with all-plastic recyclable pathway',
    description: 'Flagship fine mist sprayer. Delivers consistent 0.12ml dosage per stroke. Widely used in skincare serums, facial mists, and sanitizers. Available with multiple actuator and closure options.',
    dischargeRate: '0.12ml/T',
    neckFinish: ['18/410', '20/410'],
    material: ['PP', 'PE', 'AL'],
    lockType: 'Left-right Lock',
    viscosityRange: 'Water-like to Light',
    sustainable: false,
    monoMaterial: false,
    pcrAvailable: false,
    industries: ['skincare', 'fragrance', 'personal-care'],
    options: [
      { type: 'actuator', code: 'A1', label: 'Standard A1' },
      { type: 'actuator', code: 'B1', label: 'Ribbed B1' },
      { type: 'actuator', code: 'C1', label: 'Wide C1' },
      { type: 'actuator', code: 'D1', label: 'Slim D1' },
      { type: 'closure', code: 'Smooth', label: 'Smooth' },
      { type: 'closure', code: 'Ribbed-1', label: 'Ribbed' },
      { type: 'closure', code: 'Alu', label: 'Aluminum' },
    ],
    relatedSkus: ['GY-608P-A1', 'GY-620A', 'GY-602'],
    imagePlaceholder: 'GY-608A1 Fine Mist Sprayer, clear/white body, 3/4 view, fine mist spray visible',
  },
  {
    sku: 'GY-620A',
    name: 'Fine Mist Sprayer 0.10ml',
    series: 'fine-mist',
    tagline: 'Micro-fine 0.10ml mist for premium applications',
    description: 'Ultra-fine dosage for high-end fragrance and skincare. Compact design with smooth actuation.',
    dischargeRate: '0.10ml/T',
    neckFinish: ['18/410'],
    material: ['PP', 'PE'],
    sustainable: false,
    monoMaterial: false,
    pcrAvailable: false,
    industries: ['skincare', 'fragrance'],
    options: [
      { type: 'actuator', code: 'A1', label: 'Standard' },
      { type: 'closure', code: 'Smooth', label: 'Smooth' },
    ],
    relatedSkus: ['GY-608A1'],
    imagePlaceholder: 'GY-620A Fine Mist Sprayer, compact design, clear body',
  },

  // ===== TREATMENT PUMP SERIES =====
  {
    sku: 'GY-801A1',
    name: 'Treatment Pump 0.12ml',
    series: 'treatment-pump',
    tagline: 'Precision treatment dosing for serums and ampoules',
    description: 'Low-dosage treatment pump for high-value active formulations. Smooth actuation with consistent 0.12ml output.',
    dischargeRate: '0.12ml/T',
    neckFinish: ['18/410'],
    material: ['PP', 'PE', 'AS'],
    lockType: 'Screw Down Lock',
    sustainable: false,
    monoMaterial: false,
    pcrAvailable: false,
    industries: ['skincare', 'color-cosmetics'],
    options: [
      { type: 'actuator', code: 'A1', label: 'Standard' },
      { type: 'closure', code: 'Smooth', label: 'Smooth' },
      { type: 'closure', code: 'Alu', label: 'Aluminum' },
    ],
    relatedSkus: ['GY-805P', 'GY-805C1'],
    imagePlaceholder: 'GY-801A1 Treatment Pump, slim profile, precision tip',
  },

  // ===== LOTION PUMP SERIES =====
  {
    sku: 'GY-302B1',
    name: 'Lotion Pump 2.0ml',
    series: 'lotion-pump',
    tagline: 'Standard 24/410 lotion pump for high-volume applications',
    description: 'Workhorse lotion pump for shampoos, body lotions, and hand soaps. 24/410 and 28/410 neck finish options. Reliable 2.0ml output.',
    dischargeRate: '2.00ml/T',
    neckFinish: ['24/410', '28/410'],
    material: ['PP', 'PE'],
    lockType: 'Left-right Lock',
    sustainable: false,
    monoMaterial: false,
    pcrAvailable: false,
    industries: ['skincare', 'hair-care', 'household', 'contract'],
    options: [
      { type: 'actuator', code: 'A1', label: 'Standard' },
      { type: 'actuator', code: 'B1', label: 'Wide' },
      { type: 'closure', code: 'Smooth', label: 'Smooth' },
      { type: 'closure', code: 'Ribbed-1', label: 'Ribbed' },
    ],
    relatedSkus: ['GY-303A1', 'GY-320', 'GY-312'],
    imagePlaceholder: 'GY-302B1 Lotion Pump, standard white body, 24/410 neck',
  },
  {
    sku: 'GY-320',
    name: 'Lotion Pump 3.0ml (Recyclable)',
    series: 'fully-recyclable',
    tagline: 'High-output lotion pump with all-plastic recyclable pathway',
    description: '3.0ml output lotion pump from the Fully Recyclable Series. All-plastic construction with PE recyclability. Ideal for brands transitioning to sustainable packaging.',
    dischargeRate: '3.00ml/T',
    neckFinish: ['24/410', '28/410'],
    material: ['PP', 'PE'],
    lockType: 'Left-right Lock',
    sustainable: true,
    monoMaterial: true,
    pcrAvailable: true,
    industries: ['skincare', 'hair-care', 'contract'],
    options: [
      { type: 'actuator', code: 'A1', label: 'Standard' },
      { type: 'closure', code: 'Smooth', label: 'Smooth' },
      { type: 'closure', code: 'Ribbed-1', label: 'Ribbed' },
    ],
    relatedSkus: ['GY-302B1', 'GY-805P', 'GY-608P-A1'],
    imagePlaceholder: 'GY-320 Recyclable Lotion Pump, white body with green PCR indicator',
  },

  // ===== TRIGGER SPRAYER SERIES =====
  {
    sku: 'GY-101',
    name: 'Trigger Sprayer 1.0ml',
    series: 'trigger-sprayer',
    tagline: 'Heavy-duty trigger sprayer for household and industrial use',
    description: 'Standard trigger sprayer with 1.0ml output. Compatible with 28/410 bottles. Chemical-resistant materials for cleaning products, sanitizers, and garden applications.',
    dischargeRate: '1.00ml/T',
    neckFinish: ['28/410'],
    material: ['PP', 'PE'],
    sustainable: false,
    monoMaterial: false,
    pcrAvailable: false,
    industries: ['household', 'pharma'],
    options: [
      { type: 'nozzle', code: 'Spray/spray', label: 'Spray' },
      { type: 'nozzle', code: 'Plastic foam', label: 'Foam' },
    ],
    relatedSkus: ['GY-102A1', 'GY-312'],
    imagePlaceholder: 'GY-101 Trigger Sprayer, ergonomic handle, red/white body',
  },

  // ===== DROPPER SERIES =====
  {
    sku: 'GY-901A1',
    name: 'Glass Dropper 20ml',
    series: 'dropper',
    tagline: 'Precision glass dropper for serums and essential oils',
    description: 'Standard glass dropper with rubber bulb. Compatible with 20ml bottles. Ideal for facial serums, essential oils, and pharmaceutical tinctures.',
    neckFinish: ['20/410'],
    material: ['Glass', 'Rubber', 'PP'],
    sustainable: false,
    monoMaterial: false,
    pcrAvailable: false,
    industries: ['skincare', 'pharma', 'essential-oils'],
    options: [
      { type: 'closure', code: 'Smooth', label: 'Smooth' },
      { type: 'closure', code: 'Ribbed', label: 'Ribbed' },
    ],
    relatedSkus: ['GY-902A2', 'GY-2501A'],
    imagePlaceholder: 'GY-901A1 Glass Dropper, amber glass with black rubber bulb',
  },

  // ===== COSMETIC PACKAGING =====
  {
    sku: 'GY-2501A',
    name: 'Airless Bottle 30ml',
    series: 'airless-bottle',
    tagline: 'Premium airless bottle for sensitive formulations',
    description: '30ml airless bottle with vacuum dispensing technology. Protects oxygen-sensitive formulations. Ideal for vitamin C serums, retinol, and premium skincare.',
    neckFinish: ['Special'],
    material: ['PP', 'PETG'],
    sustainable: false,
    monoMaterial: false,
    pcrAvailable: false,
    industries: ['skincare', 'beauty'],
    options: [
      { type: 'actuator', code: 'A1', label: 'Standard Pump' },
    ],
    relatedSkus: ['GY-2602A', 'GY-805P'],
    imagePlaceholder: 'GY-2501A Airless Bottle 30ml, frosted body with silver pump, premium skincare packaging',
  },
];

export function getProductBySku(sku: string): Product | undefined {
  return products.find(p => p.sku === sku);
}

export function getProductsBySeries(series: string): Product[] {
  return products.filter(p => p.series === series);
}

export function getProductsByIndustry(industry: string): Product[] {
  return products.filter(p => p.industries.includes(industry as any));
}

export function getRelatedProducts(sku: string): Product[] {
  const product = getProductBySku(sku);
  if (!product) return [];
  return product.relatedSkus
    .map(s => getProductBySku(s))
    .filter((p): p is Product => p !== undefined);
}

export function getAllSeries(): string[] {
  return Array.from(new Set(products.map(p => p.series)));
}
