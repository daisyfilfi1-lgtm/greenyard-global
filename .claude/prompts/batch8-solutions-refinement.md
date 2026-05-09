# Batch 8: Solution Pages Upgrade + UX Refinement

## Design Direction: 极致克制顶奢 (Extreme Minimalist Luxury)
Stay with `#0F3D26` dark green, `#F5F7F6` cool gray. No gold, no mint. Aesop-level restraint.

## Task 1: Rebuild All 4 Solution Pages

Replace the current simple solution pages with the full 7-section template. Each page (`/solutions/[industry]`) must have:

### Section 1: Hero
- Dark `#0F3D26` full-width background
- H1: Industry-specific headline, font-light, 48-64px, tracking-tight (-0.02em)
- Sub: one-line value proposition in `text-white/70`
- No CTA in hero — let the content pull them down

### Section 2: Pain-Point Matrix
- 4-5 icon + stat cards in a row
- Light gray `#EAECEB` background
- Each card: small custom SVG icon + title + one-line description
- Content per industry:

**Skincare:**
- MOQ from 1,000 units — Launch without overcommitting
- 7-day 3D-printed sample — Validate before tooling
- PCR up to 50% — Meet sustainability expectations
- All-plastic recyclable — Mono-material for circularity
- REACH + BPA-free — EU market ready

**Pharma:**
- ISO 15378 + GMP — Pharma-grade manufacturing
- Batch traceability — From resin lot to finished pump
- Metal-free / Monomaterial — Zero contamination risk
- USP Class VI tested — Material safety documentation
- DMF-ready technical files — Regulatory support

**Household:**
- Chemical-resistant PP/PE — Compatibility matrix available
- High-dose 0.75-4.00ml — For thick cleaners
- UV & heat stable — Survives MEA/LATAM shipping
- Color customization — Match brand palettes
- FOB Ningbo pricing — Transparent export costs

**Contract:**
- 24/410 · 28/410 · 33/400 standard — Fits existing lines
- VMI stocking programs — Never stop production
- <1% defect rate — 100% inline inspection
- Rapid SKU switching — Same neck, different actuator
- Consolidated RFQ — Quote 10 SKUs in one request

### Section 3: Recommended Products
- H2 section title with thin underline accent (2px, 40px wide, `#0F3D26`)
- Grid of 4-6 product cards from `getProductsByIndustry()`
- Each card shows: image + SKU name + "Why this fits" micro-copy + discharge rate + closure size + "View Details →"
- Need matched bottle? Cross-sell link at bottom

### Section 4: Compliance & Certifications
- H2: "Compliance You Can Verify"
- Badge row: relevant certs per industry (small cards, white bg, `#EAECEB` border)
- Skincare: REACH, BPA-Free, All-Plastic, PCR Available
- Pharma: ISO 15378, FDA, USP Class VI, REACH, RoHS
- Household: Chemical Resistant, Heavy-Duty, ISO 9001
- Contract: ISO 9001, 24/410, 28/410, JIT Delivery

### Section 5: Case Study
- H2: "In the Market"
- Single story card: large image placeholder area + headline + 2-3 sentence narrative + result metric in `#0F3D26` bold

**Skincare:** "A California clean beauty brand launched a 3-SKU vitamin C serum line in 78 days using GY-608A1 with all-plastic construction — 3,000-unit MOQ, zero defects."

**Pharma:** "A European pharma contract manufacturer sourced 500K GY-101 trigger sprayers for alcohol-based sanitizers across 6 months — 99.2% on-time, full batch documentation."

**Household:** "A Middle Eastern cleaning products brand switched to GY-101 for 2M units/year — 15% cost reduction, zero chemical compatibility issues."

**Contract:** "A US contract packager consolidated 8 SKUs to GreenYard — single-source 24/410 pumps across 4 brands, VMI program maintained 4-week buffer stock."

### Section 6: Process Timeline
- H2: "From Inquiry to Delivery"
- Horizontal 5-step timeline (vertical on mobile):
  1. Inquiry → 2. Sample (7-15 days) → 3. Approval → 4. Production (30 days) → 5. Delivery
- Each step: number circle + label + short description
- Connected by thin `#EAECEB` line
- CTA: "Request a Sample →" at the end

### Section 7: Expert CTA
- Full-width `#0F3D26` dark section
- H2: "Not sure which pump fits your formula?"
- Sub: "Our packaging engineers typically respond within 24 hours."
- CTA: "Speak to an Engineer →" — white outlined button

## Task 2: UX Refinements (Global)

### Hero Typography
- All H1: weight 300 (light), tracking-tight (-0.02em), larger sizes
- All section H2: add thin 2px underline (40px wide, `#0F3D26`)

### Trust Numbers
- Scale to 64-96px, font-light (300)
- Color: `#0F3D26`

### Product Cards
- Add "Sustainable" badge (small `#0F3D26` tag) on monoMaterial products
- Show discharge rate + closure directly on card face

### Scroll Reveal
- Add IntersectionObserver fade-in for sections
- `opacity: 0 → 1, translateY: 24px → 0, transition: 0.6s ease`

### Card Hover
- Product cards: `translateY(-4px)`, shadow deepen on hover
- All transitions: `0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)`

## Build & Verify
After ALL changes, run `npm run build`. Zero errors required.
