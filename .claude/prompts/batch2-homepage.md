# GreenYard Batch 2: Homepage

## Objective
Build the complete homepage (`app/page.tsx`) with all 6 sections from the PRD v2.0 specification.

## Context
- Batch 1 is complete — design system (globals.css), Navbar, Footer are built
- `lib/constants.ts` has: BUYER_SEGMENTS, TRUST_STATS, SITE_NAME, SITE_TAGLINE
- PRD at `/mnt/f/共享/GreenYard_Global_Website_PRD_v2.0.md`
- Project at `/mnt/f/共享/greenyard-global/`

## Page Sections (in scroll order)

### 1. Hero Section
- Full-width section with charcoal (#1A1A1A) background
- Headline: "One Earth. Precision Engineering." in Inter Light 300, gold (#D4AF37) accent on key words
- Subheadline: "Flexible MOQ · Fast Sampling · Fully Recyclable Pathways · Global Compliance"
- Two CTAs:
  - Primary: "Explore Solutions" — mint button (#00B894), links to /solutions/skincare
  - Secondary: "Watch Factory Tour" — outlined button with play icon
- Placeholder for background video (dark gradient overlay with text "Factory footage placeholder")
- This is the ONLY section with dark background in upper page

### 2. Segment Selector
- 4 cards in a row (2x2 on mobile) from BUYER_SEGMENTS constant
- Each card: icon (use emoji or SVG placeholder), title, description, "Learn More →" link
- Background: Mint Tint (#E8F5F1)
- Hover: card lifts 4px, shadow deepens, gold underline expands from center
- Section title: "Find Your Solution"

### 3. Trust Bar
- 4 stats from TRUST_STATS in a horizontal row (scrollable on mobile)
- Numbers in Display size (48-64px), Inter SemiBold 600, gold (#D4AF37) color
- Labels below numbers in text-secondary
- Background: Gallery White (#F5F5F0)
- Numbers should animate from 0 to target on scroll into view (use Intersection Observer, no external libraries)

### 4. Sustainability Teaser
- Split-screen layout: left text, right placeholder image area
- Headline: "Packaging that performs. Planet that persists."
- Body text highlighting: Mono Pump (全塑可回收泵), PCR options, All-Plastic Component, recyclable in PE stream
- "Explore Sustainability →" link to /sustainability
- Right side: dark area (#1A1A1A) with "Product hero image placeholder" text
- Background: Gallery White (#F5F5F0)

### 5. In the Market (Case Studies)
- 3 case study cards in a row (stack on mobile)
- Each card: large product image placeholder area + short narrative + outcome metric in gold
- Stories:
  1. Clean Beauty Serum Launch (US) — "Launched in 90 days with 3,000-unit MOQ"
  2. Hand Sanitizer Scale-Up (EU) — "Scaled to 500K units/month in 4 weeks"
  3. Hair Care Line Refresh (LATAM) — "15% cost reduction with matched bottle+pump sets"
- Magazine-style layout, card background white on Gallery White page

### 6. Expert CTA
- Full-width charcoal (#1A1A1A) section
- Headline: "Not sure which pump fits your formula?"
- Subtext: "Our packaging engineers will analyze your formula viscosity, bottle neck finish, and sustainability requirements to recommend the optimal solution."
- CTA button: "Speak to Our Packaging Engineer →" — large gold (#D4AF37) button
- Photo placeholder: "Engineer photo placeholder" area to the right

## Design Rules (CRITICAL)
- Page background MUST be #F5F5F0 (Gallery White), never white
- Gold (#D4AF37) for stats, accents, premium highlights only
- Mint (#00B894) for primary CTAs, links
- Inter font only
- Mobile-first: 320px minimum
- Section padding: 96px vertical desktop, 64px mobile
- Max width: 1280px centered
- All placeholder text must be clearly marked as placeholders
- Use proper semantic HTML (section, nav, header, etc.)
- No hardcoded copy — import from constants where available

## Output
After completion, run `npm run build` to verify. Report files created/modified.
