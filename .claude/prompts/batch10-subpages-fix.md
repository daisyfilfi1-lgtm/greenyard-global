# GreenYard Sub-Pages — Comprehensive Fix

## Root Issues
1. About sub-pages have breadcrumb nav (Home / About / PageName) in hero — redundant, ugly, need removal
2. Hero heights are inconsistent: Products 45vh, Solutions 55vh, Factory 60vh, Certifications/Resources no height
3. Language switching doesn't work on sub-pages — they're Server Components without i18n
4. Product detail page has NO hero section at all

## What to Fix

### A. Remove ALL breadcrumbs from hero sections
These 5 files have `<nav className="flex items-center gap-2...">` breadcrumbs in their hero:
- app/about/certifications/page.tsx (line 53-58)
- app/about/factory/page.tsx (line 26-31)
- app/about/sustainability/page.tsx (line 53-58)
- app/about/resources/page.tsx (line 41-46)

In each: DELETE the entire `<nav>...</nav>` block. Keep the heading, divider, description below it.

### B. Standardize ALL hero heights to 60vh
Current state → Fix:
- Products listing: `min-h-[45vh]` → `min-h-[60vh]`
- Solutions listing: no min-height → `min-h-[60vh]`
- Solutions [industry]: `min-h-[55vh]` → `min-h-[60vh]`
- Certifications: no min-height (uses section-dark class) → `min-h-[60vh]` with `flex items-center`
- Resources: no min-height (uses section-dark class) → `min-h-[60vh]` with `flex items-center`
- Sustainability: `min-h-[55vh]` → `min-h-[60vh]`
- Factory: already `min-h-[60vh]` ✓
- About (main): already `min-h-[60vh]` ✓

For certifications and resources (which currently just use `<section className="section-dark">` without bg image), change to:
```
<section className="relative section-dark min-h-[60vh] flex items-center overflow-hidden">
```
Same pattern as About/Fac tory pages.

### C. Make sub-pages support i18n
**Strategy**: Create a server-side dictionary loader, then use it in Server Components.

Create `lib/i18n/server.ts`:
```typescript
import { cookies } from 'next/headers';
import en, { type Dictionary } from './en';
import zh from './zh';

export async function getDictionary(): Promise<Dictionary> {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value;
  return lang === 'zh' ? (zh as unknown as Dictionary) : en;
}
```

Then update each sub-page:
1. Import `{ getDictionary }` from `@/lib/i18n/server`
2. Call `const dict = await getDictionary()` at top of component
3. Use `dict.someKey` instead of hardcoded strings

Add needed i18n keys to en.ts and zh.ts:
```
// en.ts additions
certifications: { title: 'Certifications & Compliance', description: '...', ... },
factory: { title: 'Factory & Capabilities', description: '...', ... },
sustainability: { title: 'Sustainability...', description: '...', commitments: [...], whyTitle: '...', whyDesc: '...', ctaTitle: '...', ctaDesc: '...' },
resources: { title: 'Resources...', description: '...', items: [...], ctaTitle: '...', ctaDesc: '...' },
products: { title: 'All Products', description: '...' },
solutionsList: { title: 'Solutions by Industry', description: '...' },
```

### D. Add hero section to Product Detail page
app/products/detail/[sku]/page.tsx currently has NO hero. Add one:
- Dark bg with a product-related bg image
- Product name + SKU as headline
- Brief description
- Standard 60vh height

### E. Add static bg images for Certifications and Resources
These two pages currently have no hero background image. Assign:
- Certifications: use `/images/Flat Lay Certificates and Technical Documents.png`
- Resources: use `/images/Minimalist Business Corporate Banner - Technical Resources.png`

## CRITICAL Rules
- DO NOT change any page structure beyond what's specified
- DO NOT change routing or data models
- DO NOT touch product data files
- Keep all existing functionality intact
- Use gold (#D4AF37) for all decorative elements (already done from color migration)
- Use emerald (#006B5E) ONLY for sustainability-related badges
- Hero background images use `bg-black/60` overlay
- All heros use `flex items-center overflow-hidden`
- After EVERY file change, verify the existing imports and exports are intact

## Verification
After completion, run `npm run build` and ensure zero errors. All routes must still generate.
