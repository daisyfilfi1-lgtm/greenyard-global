# GreenYard Product Page Skill

When building product category pages, product detail pages, or any product-related components, follow these patterns.

## Data Sources
- Product data: `lib/data/products.ts` — full Product type with specs, options, industries
- Product types: `types/product.ts` — Product, ProductOption, ProductSeries, IndustrySlug
- Series info: `lib/constants.ts` → `SERIES_INFO` — name, description, route per series
- Navigation: `lib/constants.ts` → `PRIMARY_NAV` — mega menu structure

## Product Category Page (`/products/[slug]`)
Pattern for all category pages (fully-recyclable, mist-sprayers, pumps, trigger-sprayers, droppers, cosmetic-packaging):

1. **Header:** Series name + description from `SERIES_INFO`
2. **Filter bar:** Client-side filtering by Closure Size, Material, Lock Type, Sustainable toggle
   - Derive filter options from actual product data (unique values)
   - Active filters shown as removable Mint chips
3. **Product grid:** Cards with SKU, name, discharge rate, closure options, "View Details →"
4. **Comparison tool:** Checkbox per card, select up to 3 → "Compare" button → modal with side-by-side spec table
5. **Bulk CTA:** "Need 5+ SKUs? Send consolidated RFQ →"

## Product Detail Page (`/products/detail/[sku]`)
Standardized template for every SKU:

1. **Hero:** SKU + name + tagline (gold) + image placeholder + quick-action bar
2. **Specs table** (left 2/3): Discharge Rate, Neck Finish, Material, Viscosity Range, Lock Type — zebra striped with Mint Tint
3. **Sustainability sidebar** (right 1/3): PCR %, recyclability, certifications, Mono Material badge (gold)
4. **Configuration options:** Grid by type (Actuator/Closure/Lock/Cover/Collar/Nozzle), each as small card
5. **Related products:** Grid from `relatedSkus` field
6. **Learn More:** Links to Sustainability page, related Industry Solutions

## Filter Logic
```typescript
// Extract unique filter options from products
const closureSizes = [...new Set(products.flatMap(p => p.neckFinish))];
const materials = [...new Set(products.flatMap(p => p.material))];
const lockTypes = [...new Set(products.map(p => p.lockType).filter(Boolean))];
```

## Product Card Component
```tsx
// Structure:
<div className="bg-white rounded-xl p-6 hover-lift">
  <div className="aspect-square bg-gallery rounded-lg mb-4 flex items-center justify-center">
    {/* Product image placeholder with SKU name */}
  </div>
  <h3 className="font-medium text-charcoal">{product.name}</h3>
  <p className="text-sm text-text-secondary">{product.dischargeRate}</p>
  <div className="flex gap-1 mt-2">
    {product.neckFinish.map(nf => <span className="text-xs bg-mint-tint text-mint px-2 py-0.5 rounded-full">{nf}</span>)}
  </div>
  <Link href={`/products/detail/${product.sku}`} className="text-mint text-sm font-medium mt-3 inline-block">
    View Details →
  </Link>
</div>
```

## Data Functions (already in products.ts)
- `getProductBySku(sku)` → Product | undefined
- `getProductsBySeries(series)` → Product[]
- `getProductsByIndustry(industry)` → Product[]
- `getRelatedProducts(sku)` → Product[]
- `getAllSeries()` → string[]
