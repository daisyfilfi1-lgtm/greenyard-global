# GreenYard Design System Skill

When building or modifying any UI in the GreenYard project, follow these rules exactly.

## Color Palette (NEVER deviate)
| Token | Hex | Usage |
|-------|-----|-------|
| Mint | `#00B894` | Primary CTAs, active states, sustainability accents, links |
| Gold | `#D4AF37` | Premium highlights, stat numbers, dividers — NEVER primary CTAs |
| Charcoal | `#1A1A1A` | Dark sections, footer, hero overlays |
| Gallery White | `#F5F5F0` | DEFAULT page background — **never** use `#FFFFFF` as page bg |
| Mint Tint | `#E8F5F1` | Card backgrounds, section alternation, table zebra |
| Text Primary | `#0D0D0D` | All body text and headlines |
| Text Secondary | `#6C757D` | Captions, metadata, timestamps |

## Critical Rules
1. **Page background is ALWAYS `#F5F5F0` (Gallery White), NEVER pure white `#FFFFFF`**
2. White is reserved for product photo backgrounds and document previews only
3. Gold is decorative/premium only — CTAs use Mint
4. Dark sections (`#1A1A1A`) are for: Hero, Footer, Sustainability deep-dives, Expert CTA

## Typography
- **One font:** Inter (already loaded via next/font in layout.tsx)
- Display/Hero: `font-light` (300), 64px desktop / 36px mobile
- H1: `font-medium` (500), 48px
- H2: `font-medium` (500), 32px
- H3: `font-semibold` (600), 24px
- Body: `font-normal` (400), 16px / leading-relaxed
- Stats/Numbers: `font-semibold` (600), oversized 48-96px, colored Gold or Mint

## Spacing
- Max width: 1280px, centered
- Section padding: 96px vertical desktop, 64px tablet, 48px mobile
- Component gap: 48px desktop, 24px mobile
- 12-column grid, 24px gutter

## Component Patterns
- Cards: `bg-white` on `bg-gallery` page, `rounded-xl`, subtle shadow on hover
- Buttons: Pill shape (`rounded-full`), Mint fill for primary, outlined for secondary
- Nav: Sticky with `backdrop-blur-xl`, frosted glass effect
- Stats: Oversized numbers animated on scroll (Intersection Observer)

## CSS Variables Available
All design tokens are in `app/globals.css` as CSS custom properties and Tailwind v4 theme extensions. Use Tailwind classes with custom colors: `bg-gallery`, `text-mint`, `bg-charcoal`, `border-gold`, etc.

## Accessibility
- WCAG 2.1 AA minimum
- All images: descriptive alt text
- All interactive elements: keyboard navigable
- Focus visible: 2px mint outline
