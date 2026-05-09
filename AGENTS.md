<!-- BEGIN:nextjs-agent-rules -->
# Agent Rules for GreenYard Global

## Always read before coding
- CLAUDE.md at project root — design system, conventions, file structure
- types/product.ts — all data models
- lib/constants.ts — navigation, trust stats, buyer segments

## Content is king
- All product data lives in lib/data/products.ts
- The Catalogue 2024-S.pdf in docs/ is the source of truth for specs and imagery
- Do NOT invent product specs — extract from catalogue or website

## Design discipline
- NEVER use white (#FFFFFF) as page background — use #F5F5F0 or #1A1A1A
- Gold (#D4AF37) is for premium accents, NOT primary CTAs (use #00B894)
- One font: Inter. No exceptions.
- Stats/numbers MUST be oversized and colored (Gold or Mint)

## Code quality
- TypeScript strict mode — no `any` without explicit reason
- Server Components by default — only 'use client' for interactivity
- Mobile-first responsive design
- WCAG 2.1 AA accessibility (alt text, keyboard nav)

## When blocked
- Check node_modules/next/dist/docs/ for latest Next.js APIs
- Look at PRD v2.0 for page specifications
- Reference competitive sites: aptar.com, albea.com, quadpack.com
<!-- END:nextjs-agent-rules -->
