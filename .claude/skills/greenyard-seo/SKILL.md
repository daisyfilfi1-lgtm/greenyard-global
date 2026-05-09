# GreenYard SEO Skill

When adding metadata, structured data, or SEO elements to any page, follow these rules.

## Page Metadata Template
Every page must export a `generateMetadata` or `metadata` object:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | GreenYard',
  description: 'Compelling 150-160 char description with primary keyword',
  openGraph: {
    title: 'Page Title | GreenYard',
    description: 'Same as meta description',
    images: [{ url: '/og/default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title | GreenYard',
    description: 'Same as meta description',
  },
};
```

## URL Structure (from PRD)
```
/                          → Home
/solutions/skincare        → Skincare & Clean Beauty
/solutions/pharma          → Pharma & Cosmeceutical
/solutions/household       → Household & Industrial
/solutions/contract        → Contract Packaging
/products/fully-recyclable → Fully Recyclable Series
/products/mist-sprayers    → Mist Sprayer Series
/products/pumps            → Pump Series
/products/trigger-sprayers → Trigger Sprayer Series
/products/droppers         → Dropper Series
/products/cosmetic-packaging → Cosmetic Packaging
/sustainability            → Mission + Materials + Reports
/about/factory             → Factory & Capabilities
/about/certifications      → Certifications
/resources                 → Document Library
```

## Structured Data (Schema.org JSON-LD)
Include in `<head>` via Next.js Script component or layout:

### Organization (on every page via layout)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ningbo GreenYard Sprayers Co., Ltd.",
  "url": "https://greenyard-global.com",
  "description": "Premium B2B packaging solutions — sprayers, pumps, droppers, cosmetic packaging. One Earth. Precision Engineering.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.97-1 Fengyi Road, Lanjiang Street",
    "addressLocality": "Yuyao City",
    "addressRegion": "Zhejiang Province",
    "addressCountry": "CN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+86-574-62493001",
    "email": "info@cngreenyard.com",
    "contactType": "sales"
  }
}
```

### Product (on each product detail page)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "GY-608A1 Fine Mist Sprayer 0.12ml",
  "description": "Ultra-fine 0.12ml mist sprayer...",
  "manufacturer": { "@type": "Organization", "name": "Ningbo GreenYard Sprayers Co., Ltd." }
}
```

## Keyword-Intent Mapping (from PRD Section 7.1)
- Low-MOQ skincare → `/solutions/skincare` — "low moq cosmetic packaging supplier china"
- Sustainable pumps → `/products/fully-recyclable` — "sustainable lotion pump PCR recyclable"
- Pharma compliance → `/solutions/pharma` — "pharma grade lotion pump ISO 15378"
- Contract packaging → `/solutions/contract` — "24/410 pump contract manufacturer"
- Fast sampling → `/resources` — "fast cosmetic packaging sampling 7 days"
- Trigger sprayers → `/products/trigger-sprayers` — "heavy duty trigger sprayer chemical resistant"
- Fine mist → `/products/mist-sprayers` — "fine mist sprayer 0.12ml 18/410"
- Airless bottles → `/products/cosmetic-packaging` — "airless bottle 15ml 30ml 50ml supplier"

## Technical SEO
- All images: descriptive `alt` text (mandatory for WCAG + SEO)
- Hreflang tags for EN/ES/FR (Phase 2+)
- XML sitemap: auto-generated, list all product pages
- Robots.txt: allow all, disallow `/resources/private/`
- Canonical URLs on all pages
- Heading hierarchy: h1 → h2 → h3 (never skip levels)
