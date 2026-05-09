# GreenYard Batch 4: Fix UI Style + Fill Real Content + Add Images

## CRITICAL: Three Problems to Fix

### Problem 1: Wrong UI Style
The current site looks like a tech startup, not a B2B industrial packaging manufacturer. Fix EVERY page:

**Design Identity:** "Precision meets Organic" — a premium industrial packaging manufacturer. Reference: Aptar's clinical confidence + Quadpack's design-forward sensibility + Monocle magazine's editorial restraint.

**CHANGES REQUIRED:**
- REMOVE all gradient text, gradient backgrounds, frosted glass on light backgrounds
- REMOVE oversized icons/emojis in cards
- REMOVE tech-style rounded-pill buttons everywhere
- SIMPLIFY the hero — clean dark background with product-oriented messaging, not "modern tech" styling
- REPLACE card patterns with cleaner layouts: subtle borders, thin shadows, refined spacing
- Gold should be THIN lines and small accents, not loud badges
- Dark sections ONLY for Hero and Footer

### Problem 2: Content Incomplete
The site has placeholder data. Fill with real content from:

**Company Info (from cngreenyard.cn/about.php):**
```
Ningbo GreenYard Sprayers Co.,Ltd is seated beside a beautiful coastal city "Yuyao". 
It is near one of Chinese biggest port-Ningbo port and possess a very convenient traffic.
At the moment, we have already owned advanced mould design, manufacture, injection, 
automatic assemble, quality inspection equipment and technology. Meanwhile we have built 
an experienced, professional team. Since the built of our factory, its size is expanding 
continually. Its management mode is modernized. By our relentless hard work, we've pass 
the ISO9001 accreditation and won reputation around the world.
```

**Product Data:** Expand lib/data/products.ts from 10 SKUs to ALL known SKUs (80+):

| Series | SKUs |
|--------|------|
| Fine Mist Sprayer | GY-604A, GY-605A, GY-606A, GY-606B, GY-607A, GY-608A, GY-608A-AL, GY-608B |
| Perfume Atomizer | GY-609A, GY-609C, GY-609D, GY-609G |
| Crimp Pump | GY-401A, GY-401B, GY-401C, GY-402A, GY-402B, GY-402C, GY-403A |
| Treatment Pump | GY-801A, GY-801B, GY-801F, GY-801A2, GY-801A3, GY-802A, GY-802B, GY-802C |
| Lotion Pump | GY-302, GY-303, GY-305, GY-306, GY-307 |
| Trigger Sprayer | GY-101, GY-102A, GY-103A, GY-104, GY-110A |
| Dropper | GY-901A AL, GY-901A PP, GY-901B ABS, GY-902A, GY-903A |
| Nail Pump | GY-701A, GY-702A, GY-705A, GY-705B |
| Caps | GY-202A, GY-202A-AL, GY-201A, GY-201C, GY-201D, GY-201F, GY-204A, GY-204B |
| Mini Trigger | GY-109A, GY-109B, GY-109C |
| Deodorant Stick | GY-DS01A, GY-DS01B, GY-DS05A/B, GY-DS06A/B, GY-DS07, GY-DS08, GY-DS09, DS10A/B |

For each SKU, create realistic:
- `name`: Clean product name (e.g. "Fine Mist Sprayer 0.12ml")
- `tagline`: One-line value prop
- `description`: 2 sentences about the product
- `dischargeRate`: For sprayers/pumps, use realistic ranges (0.06ml-4.00ml)
- `neckFinish`: Common neck sizes (18/410, 20/410, 24/410, 28/410)
- `material`: PP, PE, PETG, AS, ABS, AL, Glass
- `industries`: Map from PRD section 10

### Problem 3: Placeholder Images
Replace ALL "image placeholder" text with real product images from cngreenyard.cn.

**Product image URL pattern:** `https://www.cngreenyard.cn/uploads/image/{filename}.jpg`
- Fine Mist: `/uploads/image/20190710/1562742431.jpg` etc
- Treatment Pump: `/uploads/image/20190711/1562834296.jpg` etc
- Lotion Pump: `/uploads/image/20220419/1650356418.jpg` etc
- Trigger Sprayer: `/uploads/image/20190722/1563763574.jpg` etc

For each product, set `imagePlaceholder` to a specific URL from the website, or use the category-level image as fallback.

**Hero section:** Replace "Factory footage placeholder" with a clean dark hero layout — large headline, subtext, two CTAs. No fake video placeholder text. The hero should feel like a premium industrial brand, not a startup.

**Segment Selector cards:** Use simple line-style icons (from lucide-react: Factory, FlaskConical, Globe, ShieldCheck) — NOT large emoji or gradient icons.

## Additional Requirements
- After all changes, run `npm run build` to verify
- Update `app/about/page.tsx` or create it with real company info
- Keep the existing file structure — modify existing files, don't restructure
- All text must be professional B2B industrial tone — no startup jargon
