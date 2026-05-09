# GreenYard Batch 1: Design System + Navigation + Footer

## Objective
Build the foundational layer of the GreenYard Global website — CSS design system, navigation, and footer. These are the building blocks everything else depends on.

## Tech Stack
- Next.js 16 (App Router) with TypeScript strict mode
- Tailwind CSS v4 (check node_modules/next/dist/docs/ if unsure about APIs)
- Inter font (already configured in layout.tsx)
- Project is at /mnt/f/共享/greenyard-global/

## What Already Exists
- `lib/constants.ts` — PRIMARY_NAV (mega menu structure), TRUST_STATS, BUYER_SEGMENTS, SITE_NAME, SITE_TAGLINE
- `types/product.ts` — Product, ProductSeries, IndustrySlug types
- `app/layout.tsx` — root layout with Inter font, needs metadata update and Navbar/Footer
- `app/globals.css` — currently default Tailwind, needs design tokens
- `app/page.tsx` — currently default create-next-app template

## Tasks (in order)

### 1. Design System (`app/globals.css`)
Replace the current globals.css content with:
- CSS custom properties for all design tokens (as :root variables):
  - Colors: --color-mint (#00B894), --color-gold (#D4AF37), --color-charcoal (#1A1A1A), --color-gallery (#F5F5F0), --color-mint-tint (#E8F5F1), --color-text (#0D0D0D), --color-text-secondary (#6C757D), --color-border (#DEE2E6)
  - Typography: --font-display-size (64px), --font-h1-size (48px), etc.
  - Spacing: --section-padding (96px), --component-gap (48px), etc.
- Tailwind theme extension mapping CSS vars to Tailwind classes
- Custom utility classes for oversized numbers, gold accents, section layouts

### 2. Navbar Component (`components/Navbar.tsx`)
Build a responsive navigation bar with:
- Logo area (left): "GreenYard" text (use SITE_NAME from constants)
- Primary nav: mega menu dropdowns from PRIMARY_NAV data structure
  - "Solutions by Industry" dropdown with 4 items (each has description)
  - "Products" dropdown with 6 items
  - "Sustainability" link (no dropdown)
  - "About" dropdown with 2 items
  - "Resources" link
- Utility area (right): Search icon placeholder, EN language selector placeholder, "Speak to an Engineer →" CTA button in mint (#00B894)
- Mobile: hamburger menu with full-screen overlay (#1A1A1A background), staggered link animation
- Sticky on scroll: frosted glass effect (backdrop-blur)
- Active state: gold underline on current page
- Color rules: Nav background is Gallery White (#F5F5F0), not pure white

### 3. Footer Component (`components/Footer.tsx`)
Build footer with:
- Top section: 4 columns — Products, Solutions, Company, Connect
- Contact info: Address (from website data: No.97-1 Fengyi Road, Lanjiang Street, Yuyao City, Zhejiang), email (info@cngreenyard.com), phone (+86-574-6249 3001)
- Bottom bar: Copyright 2025 Ningbo GreenYard Sprayers Co., Ltd + Privacy Policy link
- Charcoal (#1A1A1A) background, light text
- Gold (#D4AF37) accent on section headers

### 4. Layout Update (`app/layout.tsx`)
- Update metadata: title "GreenYard | Premium Packaging Solutions — One Earth. Precision Engineering.", description from PRD tagline
- Import and add Navbar and Footer to layout
- Ensure page content is flex-1 between nav and footer

## Design Rules (CRITICAL)
- NEVER use white (#FFFFFF) as page background — use #F5F5F0
- Gold (#D4AF37) is ONLY for premium accents (stats, dividers, badges) — never for primary CTAs
- Mint (#00B894) is for primary CTAs, active states, sustainability accents
- Dark sections (#1A1A1A) for footer and special sections only
- One font: Inter (already loaded). No exceptions.
- Mobile-first responsive: all components must work on 320px+ screens
- WCAG 2.1 AA: alt text, keyboard navigation, sufficient contrast

## Output
After completion, run `npm run build` to verify everything compiles cleanly. Report what files were created/modified and any issues found.
