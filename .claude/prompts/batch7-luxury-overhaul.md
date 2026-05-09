# Batch 7: Premium Luxury UI Overhaul

## Strategic Pivot
Upgrade from "B2B industrial" to **"European luxury beauty/pharma packaging"** — targeting premium buyers who expect Aesop-level restraint, Aptar-level authority, and Hermès-level quiet luxury.

## CRITICAL: Root-Level Changes

### 1. Color System — Complete Replacement
- `globals.css`: Replace ALL color tokens
  - Primary: `#00B894` → `#0F3D26` (dark authoritative green)
  - Background: `#F5F5F0` → `#F5F7F6` (cool clinical gray)
  - Card bg: `#E8F5F1` → `#EAECEB` (light gray)
  - Drop Gold `#D4AF37` entirely — use silver/gold gradient only for certification badges
  - Text-primary: `#0D0D0D` → `#1A1A1A`
  - Text-body: new `#333333`
  - Text-muted: `#6C757D` → `#757575`
  - Border: `#DEE2E6` → `#EAECEB`
  - **Delete** all `stat-number-gold`, `gold-accent`, `gold-badge`, `gold-divider` classes
  - **Delete** all `mint-*` utility classes
  - Add: `text-primary-dark` → `#0F3D26`, `bg-primary-dark` → `#0F3D26`

### 2. Typography Upgrade
- H1: 48-64px, font-bold, tracking-tight (-0.02em)
- H2: 32-40px, font-semibold
- Body: 16px, leading-relaxed (1.6-1.8)
- Stats: oversized, font-bold, colored `#0F3D26`

### 3. Spacing — Add Air
- Section padding: 96-120px vertical (was 80px)
- Content padding: 32-48px (was 24px)
- Section gaps: minimum 80px
- Card gaps: 28px

### 4. Homepage Rebuild (`app/page.tsx`)
Complete redesign following the new 15-second impression structure:

a) **Hero (full viewport height):**
- Dark background with product close-up image placeholder
- Slogan: "Precision Sustainable Packaging for Global Beauty & Pharma Brands"
- Subtitle: "Reliable · Recyclable · Fully Compliant"
- One CTA: "Find Your Solution" → dark green button on dark bg
- Bottom: certification icons row (ISO 15378, FDA, REACH, RoHS, Prop 65)

b) **Client Identity Cards:**
- 4 cards: "Startup Brand", "Contract Manufacturer", "Distributor", "Pharma Brand"
- Large minimalist linear icons, short copy, clean cards
- Cards: white bg, 1px #EAECEB border, subtle shadow

c) **Core Strengths:**
- 3 items in a row: "98.5% On-Time Delivery", "Global Compliance", "Fully Recyclable"
- Large dark green numbers, short description
- Use circular progress indicator for delivery rate

d) **Case Studies:**
- 3 horizontal cards, large image areas, data points prominent
- Minimal text

e) **Sustainability:**
- Large image left, key points right, CTA button
- No gradient backgrounds

f) **Footer:** Already built — update color to match new scheme

### 5. Component Updates
- `components/layout/Navbar.tsx`: Replace mint with dark green `#0F3D26`, white bg (not frosted)
- `components/layout/Footer.tsx`: Replace charcoal with darker tone matching new scheme
- `components/product/ProductCard.tsx`: White cards, 1px #EAECEB border, subtle shadow, dark green accents
- `components/home/AnimatedCounter.tsx`: Color to `#0F3D26`

### 6. Visual Texture Rules
- Cards: `bg-white border border-[#EAECEB] shadow-sm` (0 2px 8px rgba(0,0,0,0.04))
- Buttons: `bg-[#0F3D26] text-white rounded-[4px]` (NOT rounded-full)
- Hover states: button darkens to `#0B2D1C`, card lifts 2px
- 1px borders everywhere, uniform color
- NO heavy shadows, NO gradients, NO glassmorphism on light bg

### 7. Interaction
- Scroll reveal: content fades in on scroll (Intersection Observer, opacity 0→1, translateY 20px→0)
- Hover: subtle scale (1.02x max on images), button darkens, card lifts 2px
- Nav: sticky, white bg → semi-transparent on scroll
- NO carousels, NO flashy animations

### 8. Trust Design
- Hero bottom: Small certification icons in a row (ISO 15378, FDA, REACH, RoHS, Prop 65)
- About/Certifications page: click-to-view certificate thumbnails
- Stats: circular progress indicator for delivery rate (SVG-based, no external libs)

## Build & Verify
After ALL changes, run `npm run build`. Must pass with zero errors.
