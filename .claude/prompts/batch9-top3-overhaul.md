# GreenYard Global — Top-3 Benchmark Overhaul

## Context
GreenYard Global is a B2B precision packaging manufacturer (sprayers, pumps, droppers, cosmetic packaging). The current site needs elevation from "good B2B site" to "top-3 industry benchmark."

## What Exists
- Next.js 15 + Tailwind v4 project at /mnt/f/共享/greenyard-global
- 40 professional product images in public/images/
- 7 homepage sections: Hero, Who We Serve, Core Strengths, Case Studies, Sustainability, Trust Bar, Expert CTA
- Full design system in globals.css with CSS custom properties
- CLAUDE.md has design specs, constants in lib/constants.ts, i18n in lib/i18n/

## Core Design Direction
Master reference: BMW precision engineering × Apple product-as-hero — NOT a mishmash, a deliberate fusion.
- BMW: dark hero + spotlighted product, light weight headlines (300), sharp geometry, single accent color, tight line-heights
- Apple: product on solid-color fields, alternating dark/light section rhythm, negative letter-spacing, minimal shadows, glass-nav blur
- NOT taking: BMW full-uppercase mandate, Apple 980px pill buttons (too consumer), Apple pure black/white (use warm white + charcoal)

## What to Change

### A. Design System (globals.css)
1. **Color palette overhaul** — The current dual-accent (mint green #00B894 + gold #D4AF37) creates visual noise. Gold becomes the SINGLE brand accent. Mint green demoted to sustainability-only (use deep emerald #006B5E for sustainability badges, never for CTAs).
   - Background: #F7F4EF (warm paper white, slightly warmer than current #F5F5F0)
   - Primary accent: #D4AF37 (Champagne Gold) — CTAs, highlights, stats, decorative elements
   - Sustainability functional color: #006B5E (deep emerald) — ONLY for sustainability badges/markers
   - Charcoal: #1A1A1A (dark sections)
   - Text primary: #0D0D0D
   - Text secondary: #6B6B6B
   - Border: #E5E0D8
   - Card background: #FFFFFF
   - Remove all mint-tint (#E8F5F1) — replace with #F0EDE8 (warm tint)
   
2. **Shadow system** — Tint shadows with brand charcoal, not generic gray:
   - Card: 0 4px 20px rgba(26,26,26,0.06)
   - Elevated: 0 12px 40px rgba(26,26,26,0.10)
   - Dark section: 0 8px 32px rgba(0,0,0,0.20)

3. **Typography** — Change font from Inter to DM Sans (Google Fonts). DM Sans is warmer, more geometric, closer to BMW's precision feel.
   - Display/Hero: DM Sans Light 300, 64px, tracking -0.03em, line-height 1.1
   - H2: DM Sans Medium 500, 32px, tracking -0.01em, line-height 1.2
   - Body: DM Sans Regular 400, 16px, line-height 1.6
   - Stats: DM Sans SemiBold 600, 48-72px, color #D4AF37, tracking -0.02em

4. **Clean up utilities** — Remove .card-mint, remove all --color-primary references, replace with --color-gold. Keep .stat-number (gold), remove .stat-number-mint (no longer needed). .btn-primary bg becomes gold, not mint.

### B. Font Loading (layout.tsx)
Replace `next/font/google` Inter import with DM Sans import:
```
import { DM_Sans } from 'next/font/google';
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' });
```
Apply dmSans.className to body.

### C. Homepage Section Reconstructions (app/page.tsx)

**Hero Section** — Most critical change. Current: too many elements (cert badges, two CTAs, decorative gold line). New: cinematic, reductive.
- Full-bleed product image (use /images/Dark Moody Premium Skincare Bottle.png or similar dark-background product shot)
- Dark overlay gradient (not too heavy)
- Single-line headline in DM Sans 300, white, 64px desktop
- One-line subtitle in lighter white
- NO certification badges in hero (move to Trust Bar)
- NO decorative gold line at bottom
- Two CTAs: primary gold (#D4AF37 bg, dark text), secondary transparent white border
- Bottom of hero: one subtle row of certification icons + small text "ISO 15378 · FDA · REACH · 200+ SKUs · 3-Day Sampling"

**Who We Serve** — Keep structure, refinements:
- Card icons: change from mint-green-filled-circle to gold outline style (thin gold stroke circles)
- Card hover: gold border highlight (not mint)
- Section bg: #F0EDE8 (warm tint, replaces old #F5F7F6)

**Core Strengths** — Keep structure, color swap:
- Circular progress stroke: gold #D4AF37 (not mint)
- "98.5%" text: gold
- "5M+" circle border: gold
- "100%" circle border: gold
- All mint references → gold

**Case Studies** — Structure preserved, refinements:
- "Case Study" badge: gold bg with dark text
- Result text: gold (not mint)
- Big metric numbers: gold

**Sustainability** — Major reconstruction:
- Full-bleed dark image left, content right (keep split layout)
- Sustainability badge: use deep emerald #006B5E (NOT mint green)
- Points list: checkmark icons in emerald
- CTA button: gold

**Trust Bar** — Upgrade:
- Numbers enlarged to 72px, weight 300 (light), gold color
- Labels: all-caps, tracked out
- Add a small certification row at bottom

**Expert CTA** — Reconstruction:
- Dark bg, but visually cleaner than current (remove decorative blur circles or make them subtler)
- Left: heading + text + CTA
- Right: one striking product macro shot (use /images/Macro Pump Head with Chemical .png or similar)
- CTA: gold bg, dark text

### D. Navbar & Footer
- Navbar links: keep structure, adjust hover states to gold underline (not mint)
- Footer: certificate badges in emerald, CTA buttons gold
- Remove all mint-green references anywhere in the codebase

### E. Constants (lib/constants.ts)
- Update any color-dependent icon references
- Ensure text copy is refined (existing copy is decent)

## CRITICAL Rules
- DO NOT use mint green (#00B894 or #00A37E) anywhere except as legacy reference. The ONLY accent colors are gold (#D4AF37) and sustainability emerald (#006B5E).
- DO NOT change page structure/routing — only visual design and copy
- DO NOT touch product pages, solutions pages, or other sub-pages
- DO NOT add new npm dependencies
- DO NOT remove existing images — just use them differently
- All hover effects keep their existing transitions
- Keep i18n structure intact
- Keep 'use client' directives where they currently exist
- DO NOT increase the number of sections — keep the 7-section structure
- TypeScript strict: no `any` without reason

## Verification
After completion, run `npm run build` and ensure zero errors. All existing routes must still work.
