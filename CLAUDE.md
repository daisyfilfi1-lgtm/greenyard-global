# GreenYard Global Website — CLAUDE.md

## Project Overview

GreenYard Global is a premium B2B packaging solutions website for **Ningbo GreenYard Sprayer Co., Ltd.**, a Chinese manufacturer of sprayers, pumps, droppers, and cosmetic packaging (200+ SKUs).

**Positioning:** Upgrade from "product catalogue supplier" to "scenario-driven packaging solutions partner."

**Tagline:** "One Earth. Precision Engineering." — Flexible MOQ · Fast Sampling · Fully Recyclable Pathways · Global Compliance

**Target Audience:** Overseas B2B buyers (North America 40%, Europe 25%, Emerging Markets 35%).

**PRD:** `/mnt/f/共享/GreenYard_Global_Website_PRD_v2.0.md`
**Product Catalogue:** `docs/Catalogue 2024-S.pdf` (all product imagery, specifications, option matrices)
**Live site (old):** https://www.cngreenyard.cn/

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) — check `node_modules/next/dist/docs/` for latest APIs before writing code
- **Styling:** Tailwind CSS v4
- **Font:** Inter (from Google Fonts, loaded via next/font)
- **Language:** TypeScript (strict)
- **Data:** Static TypeScript files → migrate to Supabase in Phase 2
- **Deployment:** Netlify (auto-deploy on push to main)
- **Analytics:** GA4 + Hotjar (heatmaps)

---

## Design System

### Colors (from PRD v2.0)

| Token | Hex | Usage |
|-------|-----|-------|
| Primary Mint | `#00B894` | CTAs, active states, sustainability accents, hover underlines |
| Champagne Gold | `#D4AF37` | Premium highlights, data numbers, divider lines (NOT primary CTAs) |
| Charcoal | `#1A1A1A` | Dark sections, footer, sustainability deep-dives |
| Gallery White | `#F5F5F0` | Primary page background (warm, not sterile white) |
| Mint Tint | `#E8F5F1` | Card backgrounds, section alternation, table zebra |
| Text Primary | `#0D0D0D` | Headlines, body |
| Text Secondary | `#6C757D` | Captions, metadata |

**Rules:**
- White (`#FFFFFF`) used sparingly — only product photo backgrounds and document previews
- Page backgrounds always `#F5F5F0` or `#1A1A1A`, never white
- Dark sections for: Hero overlays, Sustainability, Factory page, Expert CTA

### Typography

- **Font:** Inter only (one font family)
- Display/Hero: Inter Light 300, 64px desktop / 36px mobile
- H1: Inter 500, 48px
- H2: Inter 500, 32px
- H3: Inter 600, 24px
- Body: Inter 400, 16px / line-height 1.6
- Numbers (stats, MOQ): Inter 600, oversized (48-96px), Gold or Mint color

### Spacing

- 12-column grid, max width 1280px
- Gutter: 24px desktop / 16px mobile
- Section padding: 96px vertical desktop / 64px mobile
- Component gap: 48px major / 24px related

### Imagery

- Product photos: `#F5F5F0` or white background, soft-box lighting, 3/4 view
- Use **existing Catalogue 2024-S product shots** as baseline
- Scale reference (coin/ruler) mandatory for small components
- No stock "handshake" or "diverse team pointing at laptop" photos

---

## File Structure

```
greenyard-global/
├── app/
│   ├── layout.tsx              # Root layout with Inter font
│   ├── page.tsx                # Homepage (currently default template)
│   ├── globals.css             # Tailwind + custom design tokens
│   ├── solutions/[industry]/   # Industry solution pages
│   ├── products/
│   │   ├── page.tsx            # Product listing with filters
│   │   ├── [slug]/             # Category pages (fully-recyclable, mist-sprayers, etc.)
│   │   └── detail/[sku]/       # Individual product detail pages
│   ├── sustainability/         # Sustainability hub
│   ├── about/                  # Factory, certifications
│   └── resources/              # Tech sheets, sampling guide
├── components/                 # Reusable UI components
├── lib/
│   ├── constants.ts            # Navigation, trust stats, buyer segments
│   └── data/products.ts        # Product data (10 SKUs currently)
├── types/product.ts            # TypeScript type definitions
├── docs/
│   └── Catalogue 2024-S.pdf    # Product catalogue (reference)
└── public/                     # Static assets
```

---

## Product Data Model

See `types/product.ts` for full definitions. Key types:

- **Product:** sku, name, series, tagline, description, dischargeRate, neckFinish, material, lockType, sustainable, monoMaterial, pcrAvailable, industries, options, relatedSkus, imagePlaceholder
- **ProductSeries:** 13 series (fully-recyclable, mist-sprayer, fine-mist, treatment-pump, lotion-pump, foam-pump, trigger-sprayer, nail-pump, dropper, airless-bottle, deodorant-stick, cream-jar, plastic-bottle-set)
- **IndustrySlug:** 12 industries (skincare, pharma, household, contract, fragrance, personal-care, hair-care, color-cosmetics, essential-oils, agriculture, beauty, wellness)

### Current Product Data

Currently 10 SKUs in `lib/data/products.ts`:
- GY-608P-A1 (Fully Recyclable Fine Mist), GY-805P (Fully Recyclable Treatment Pump)
- GY-608A1 (Fine Mist 0.12ml), GY-620A (Fine Mist 0.10ml)
- GY-801A1 (Treatment Pump 0.12ml)
- GY-302B1 (Lotion Pump 2.0ml), GY-320 (Recyclable Lotion Pump 3.0ml)
- GY-101 (Trigger Sprayer 1.0ml)
- GY-901A1 (Glass Dropper 20ml)
- GY-2501A (Airless Bottle 30ml)

**Full SKUs scraped from cngreenyard.cn** (all 11 product categories, 80+ SKUs identified) — need to be added.

---

## Content Sources

1. **Catalogue 2024-S.pdf** in `docs/` — source of truth for:
   - Product photos (pages 10-59)
   - Technical specifications (discharge rate, neck finish, material, dimensions)
   - Option matrices (actuators, closures, locks, covers, collars, nozzles)
   - Factory photos (pages 3-4)
   - "One Earth" sustainability philosophy (page 2)
   - Mono Pump flagship (page 6)

2. **cngreenyard.cn** — live site with product listings, certificate downloads (SGS, REACH, ISO), company info

---

## Key Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
npm run lint     # ESLint
```

---

## Phase 1 Implementation Plan (Current)

Based on PRD v2.0 weeks 1-2:

- [ ] Update `globals.css` with design system tokens (CSS custom properties for colors)
- [ ] Build `components/Navbar.tsx` — mega menu navigation from `PRIMARY_NAV` in constants
- [ ] Build `components/Footer.tsx`
- [ ] Build Homepage sections:
  - [ ] Hero (video placeholder + "One Earth. Precision Engineering." tagline)
  - [ ] Segment Selector (4 buyer cards)
  - [ ] Trust Bar (animated counters)
  - [ ] Sustainability Teaser (split-screen)
  - [ ] Expert CTA
- [ ] Build Industry Solution template page (`/solutions/[industry]`)
- [ ] Build Product Category page (`/products/[slug]`) with filter bar
- [ ] Build Product Detail page template (`/products/detail/[sku]`)
- [ ] SEO metadata (Schema.org, Open Graph, hreflang)

---

## Conventions

- **Pages:** Server Components by default. Only use `'use client'` when needed for interactivity.
- **Colors:** Use Tailwind arbitrary values like `bg-[#F5F5F0]` for custom colors initially — then extract to CSS variables.
- **Numbers/Stats:** Always use `font-semibold` and oversized styling for trust numbers and MOQ figures.
- **Images:** Use `next/image` with proper alt text. Use placeholder descriptions in `imagePlaceholder` field until real photos are available.
- **Mobile-first:** All components must be responsive.
- **No hardcoded English strings outside of data files** — keep copy centralized.
- **Accessibility:** WCAG 2.1 AA minimum. Alt text on all images. Keyboard navigable.
