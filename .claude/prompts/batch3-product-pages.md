# GreenYard Batch 3: Product Pages

## Objective
Build product category pages and product detail page templates. These are the core pages buyers use to find and evaluate products.

## Context
- Batches 1-2 complete: design system, Navbar, Footer, Homepage are built
- Product data in `lib/data/products.ts` — 10 SKUs with full specs
- Types in `types/product.ts` — Product, ProductOption, ProductSeries, IndustrySlug
- Constants in `lib/constants.ts` — SERIES_INFO mapping
- PRD section 4.3 and 4.4 for detailed specs
- Project at `/mnt/f/共享/greenyard-global/`

## Tasks

### 1. Product Category Page (`app/products/[slug]/page.tsx`)
- Dynamic route for each product series (fully-recyclable, mist-sprayers, pumps, trigger-sprayers, droppers, cosmetic-packaging)
- **Filter Bar** at top:
  - Filter by: Closure Size (18/410 → 42/410), Material (PP/PE/AL), Lock Type, Sustainable Only (toggle)
  - Filters update the product grid instantly (client-side filtering from pre-loaded data)
  - Active filter chips shown below bar
- **Product Grid**: cards showing product image placeholder + SKU name + discharge rate + closure options summary + "View Details →"
- **Comparison Tool**: checkboxes on cards to select up to 3 SKUs. "Compare Selected" button opens comparison modal
- **Bulk Inquiry CTA**: "Need 5+ SKUs? Send a consolidated RFQ →"
- Category header with series name and description from SERIES_INFO

### 2. Product Detail Page (`app/products/detail/[sku]/page.tsx`)
Full product detail template with these sections:

a) **Hero Zone**
   - Product name (SKU + name, e.g. "GY-608A1 Fine Mist Sprayer 0.12ml")
   - Tagline in gold
   - Product image placeholder (large area with SKU name)
   - Quick-action bar: "Download Tech Sheet" | "Request Sample" | "Ask an Engineer"

b) **Specification Table** (left column, 2/3 width)
   - Discharge Rate, Neck Finish/Closure Options, Material, Formula Viscosity Range, Lock Type
   - Styled as a clean comparison table with zebra striping (Mint Tint)

c) **Sustainability Attributes** (right column, 1/3 width)
   - Material composition (% PCR if applicable)
   - Recyclability pathway
   - Certifications: REACH, FDA, All-Plastic badges
   - Mono Material badge for Fully Recyclable Series SKUs (prominent gold badge)

d) **Configuration Options** (full width)
   - Grid of option cards organized by type: Actuator, Closure, Lock, Cover, Collar, Nozzle
   - Each option shows: code + label
   - Visual: small card with option code centered

e) **Related Products** (full width)
   - Grid of related product cards using relatedSkus field
   - Cross-sell logic: show matched bottles for sprayers, alternative dosages

f) **Learn More Links**
   - Link to Sustainability page, related Industry Solutions

## Interaction Requirements
- SKU Comparison modal: side-by-side spec table, close button, semi-transparent backdrop
- Filters must work client-side (no page reload)
- "Request Sample" opens a form (placeholder for now — just a styled modal with form fields)
- Mobile: comparison and detailed spec should stack vertically

## Product Filter Logic
The filter bar should dynamically derive available filter options from the current product set:
- Closure sizes: extract unique neckFinish values from filtered products
- Materials: extract unique material values
- Lock types: extract unique lockType values
- Sustainable toggle: filter products where monoMaterial or sustainable is true

## Design Rules
- Product card backgrounds: white on Gallery White (#F5F5F0) page
- Filter bar background: white with subtle border
- Active filters: Mint (#00B894) chips
- Product images: 3/4 view placeholder, always on white background
- Gold (#D4AF37) for: Mono Material badge, SKU codes, price/premium indicators
- Mobile-first responsive

## Output
After completion, run `npm run build` to verify. Report files created/modified.
