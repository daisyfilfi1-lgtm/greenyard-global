# GreenYard Design System Skill — v3 (Premium Luxury Edition)

## Aesthetic Identity: "Minimalist Luxury + Industrial Precision"

Target: **European & American beauty/pharma packaging buyers** — high premium, high trust, high compliance.

**REFERENCE MOOD:** Aesop's minimalist restraint + Aptar's clinical authority + Hermès's quiet luxury. Think: white space is the luxury signal.

## Color System (Premium Core)

| Token | Hex | Usage |
|-------|-----|-------|
| **Primary Dark Green** | `#0F3D26` | Buttons, links, accents, trust elements. Dark, authoritative, eco-luxury |
| **Cool Gray bg** | `#F5F7F6` | DEFAULT page background — cool, clinical, premium |
| **Light Gray** | `#EAECEB` | Card backgrounds, section alternation |
| **Dark Text** | `#1A1A1A` | Headlines (not pure black) |
| **Body Text** | `#333333` | Body copy |
| **Muted Text** | `#757575` | Captions, metadata |
| **White** | `#FFFFFF` | Cards, product photo backgrounds ONLY |
| **Silver/Gold accent** | subtle gradient | Certification badges, premium indicators (use sparingly) |

**FORBIDDEN:**
- ❌ High saturation greens, bright colors
- ❌ Gradient backgrounds
- ❌ Heavy shadows (max 4px blur)
- ❌ Rounded-full pill buttons (use subtle 4px radius)
- ❌ Neon or fluorescent accents

## Typography
- **Font:** Inter only
- H1: 48-64px, `font-bold`, tight tracking (-0.02em), short sentences only
- H2: 32-40px, `font-semibold`
- Body: 16px, `font-normal`, line-height 1.6-1.8
- Data/stats: oversized, `font-bold`, dark green
- **NO:** serif fonts, heavy black weights, excessive italics

## Spacing (Luxury = Air)
- Section gap: 80-120px vertical
- Content padding: 32-48px
- Text area margins: 15-20% side whitespace
- Card gaps: 24-32px
- **Critical:** Reject crowding. White space is the luxury signal.

## Layout Principles
- Single-screen focus: Each hero/section should fit on one screen
- Max width: 1200px centered
- 12-column grid
- Asymmetric layouts encouraged (60/40, 70/30 splits)
- Mobile: single column, cards full-width

## Visual Texture
- Cards: white bg + 1px `#EAECEB` border + subtle shadow (0 2px 8px rgba(0,0,0,0.04))
- Glass: white bg + `backdrop-blur` + subtle border — for sticky nav only
- Borders: 1px consistently, `#EAECEB` color
- Icons: linear minimalist, 1.5px stroke, uniform rounding
- Images: product on white/light gray bg, macro detail, material texture

## Interaction (European restraint)
- Scroll: smooth, content fades in on scroll (Intersection Observer)
- Hover: button darkens, card lifts 2px (subtle), image scales 1.02x
- Nav: sticky, transparent→semi-transparent white on scroll
- **FORBIDDEN:** carousels, flashy animations, auto-play, strong blinking

## Homepage Structure (15-second impression)
1. **Hero (full screen):** High-quality product close-up video/image + slogan + 1 primary CTA
2. **Client identity cards:** 4 cards, large icons, short copy
3. **Core strengths:** 3 items (Delivery/Compliance/Sustainability), large images + short text
4. **Case studies:** 3 horizontal cards, big images, minimal text, data prominent
5. **Sustainability:** Large image + key points + CTA
6. **Footer:** Minimal, compliance links + contact
