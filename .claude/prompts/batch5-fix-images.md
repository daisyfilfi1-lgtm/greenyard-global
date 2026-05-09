# Batch 5: Fix Product Images — One-to-One SKU Mapping

## Objective
Replace all `imagePlaceholder` strings in `lib/data/products.ts` with real product image URLs from cngreenyard.cn. Each SKU has a UNIQUE image — no sharing.

## Image URL Mapping (69 SKU-image pairs extracted from cngreenyard.cn)
```
GY-604A -> https://www.cngreenyard.cn/uploads/image/20190710/1562742431.jpg
GY-605A -> https://www.cngreenyard.cn/uploads/image/20190710/1562746342.jpg
GY-606A -> https://www.cngreenyard.cn/uploads/image/20190710/1562747699.jpg
GY-606B -> https://www.cngreenyard.cn/uploads/image/20190710/1562754081.jpg
GY-607A -> https://www.cngreenyard.cn/uploads/image/20190710/1562751228.jpg
GY-608A -> https://www.cngreenyard.cn/uploads/image/20190710/1562750389.jpg
GY-608A-AL -> https://www.cngreenyard.cn/uploads/image/20190710/1562752815.jpg
GY-608B -> https://www.cngreenyard.cn/uploads/image/20190710/1562751456.jpg
GY-608C -> https://www.cngreenyard.cn/uploads/image/20190710/1562753038.jpg
GY-609A -> https://www.cngreenyard.cn/uploads/image/20190710/1562755302.jpg
GY-609C -> https://www.cngreenyard.cn/uploads/image/20190710/1562760273.jpg
GY-609D -> https://www.cngreenyard.cn/uploads/image/20190710/1562758531.jpg
GY-609G -> https://www.cngreenyard.cn/uploads/image/20190710/1562754218.jpg
GY-401A -> https://www.cngreenyard.cn/uploads/image/20190710/1562757856.jpg
GY-401B -> https://www.cngreenyard.cn/uploads/image/20190710/1562760777.jpg
GY-401C -> https://www.cngreenyard.cn/uploads/image/20190710/1562756993.jpg
GY-402A -> https://www.cngreenyard.cn/uploads/image/20190710/1562763525.jpg
GY-402B -> https://www.cngreenyard.cn/uploads/image/20190710/1562760126.jpg
GY-402C -> https://www.cngreenyard.cn/uploads/image/20190710/1562761279.jpg
GY-403A -> https://www.cngreenyard.cn/uploads/image/20190710/1562757201.jpg
GY-801A -> https://www.cngreenyard.cn/uploads/image/20190711/1562834296.jpg
GY-801B -> https://www.cngreenyard.cn/uploads/image/20190711/1562831088.jpg
GY-801F -> https://www.cngreenyard.cn/uploads/image/20190711/1562835314.jpg
GY-801A2 -> https://www.cngreenyard.cn/uploads/image/20190711/1562838554.jpg
GY-801A3 -> https://www.cngreenyard.cn/uploads/image/20190711/1562836642.jpg
GY-802A -> https://www.cngreenyard.cn/uploads/image/20190711/1562834926.jpg
GY-802B -> https://www.cngreenyard.cn/uploads/image/20190711/1562835731.jpg
GY-802C -> https://www.cngreenyard.cn/uploads/image/20190711/1562835228.jpg
GY-802D -> https://www.cngreenyard.cn/uploads/image/20190711/1562832928.jpg
GY-302 -> https://www.cngreenyard.cn/uploads/image/20190712/1562898980.jpg
GY-303 -> https://www.cngreenyard.cn/uploads/image/20190712/1562901143.jpg
GY-305 -> https://www.cngreenyard.cn/uploads/image/20190712/1562915295.jpg
GY-306 -> https://www.cngreenyard.cn/uploads/image/20190712/1562912830.jpg
GY-307 -> https://www.cngreenyard.cn/uploads/image/20190712/1562917470.jpg
GY-312 -> https://www.cngreenyard.cn/uploads/image/20190712/1562915620.jpg
GY-901A -> https://www.cngreenyard.cn/uploads/image/20190722/1563763574.jpg
GY-902A -> https://www.cngreenyard.cn/uploads/image/20190712/1562918977.jpg
GY-903A -> https://www.cngreenyard.cn/uploads/image/20190712/1562909365.jpg
GY-701A -> https://www.cngreenyard.cn/uploads/image/20190712/1562912130.jpg
GY-702A -> https://www.cngreenyard.cn/uploads/image/20190712/1562910297.jpg
GY-705A -> https://www.cngreenyard.cn/uploads/image/20190712/1562913650.jpg
GY-705B -> https://www.cngreenyard.cn/uploads/image/20190712/1562915498.jpg
GY-202A -> https://www.cngreenyard.cn/uploads/image/20190712/1562917157.jpg
GY-202A-AL -> https://www.cngreenyard.cn/uploads/image/20190712/1562917110.jpg
GY-201A -> https://www.cngreenyard.cn/uploads/image/20190712/1562920506.jpg
GY-201C -> https://www.cngreenyard.cn/uploads/image/20190712/1562914917.jpg
GY-201D -> https://www.cngreenyard.cn/uploads/image/20190712/1562912899.jpg
GY-201F -> https://www.cngreenyard.cn/uploads/image/20190712/1562909773.jpg
GY-204A -> https://www.cngreenyard.cn/uploads/image/20190712/1562917077.jpg
GY-204B -> https://www.cngreenyard.cn/uploads/image/20190712/1562913346.jpg
GY-204C -> https://www.cngreenyard.cn/uploads/image/20190712/1562910151.jpg
GY-101 -> https://www.cngreenyard.cn/uploads/image/20190712/1562923473.jpg
GY-102A -> https://www.cngreenyard.cn/uploads/image/20190712/1562922675.jpg
GY-103A -> https://www.cngreenyard.cn/uploads/image/20190712/1562918769.jpg
GY-104 -> https://www.cngreenyard.cn/uploads/image/20190712/1562924918.jpg
GY-110A -> https://www.cngreenyard.cn/uploads/image/20190712/1562916255.jpg
GY-109A -> https://www.cngreenyard.cn/uploads/image/20190712/1562916731.jpg
GY-109B -> https://www.cngreenyard.cn/uploads/image/20190712/1562918942.jpg
GY-109C -> https://www.cngreenyard.cn/uploads/image/20190712/1562925676.jpg
GY-DS01A -> https://www.cngreenyard.cn/uploads/image/20241204/1733283944.jpg
GY-DS01B -> https://www.cngreenyard.cn/uploads/image/20241204/1733288663.jpg
GY-DS05A -> https://www.cngreenyard.cn/uploads/image/20241204/1733282664.jpg
GY-DS06A -> https://www.cngreenyard.cn/uploads/image/20241204/1733291475.jpg
GY-DS07 -> https://www.cngreenyard.cn/uploads/image/20241204/1733287235.jpg
GY-DS08 -> https://www.cngreenyard.cn/uploads/image/20241204/1733289265.jpg
GY-DS09 -> https://www.cngreenyard.cn/uploads/image/20241204/1733282535.jpg
```

## Task
In `lib/data/products.ts`:
1. Find each SKU in the file
2. Replace its `imagePlaceholder` string with the EXACT URL from the mapping above
3. For SKUs NOT in the mapping (the 200+ generated ones without real images), use the product's NAME as alt text and set imagePlaceholder to an empty string or a category-level fallback
4. Also update `ProductCard.tsx` to properly render the image URL — use `<img>` tag with the URL, add `alt` attribute from product name

## CRITICAL RULES
- Each SKU gets its OWN unique image — no sharing between SKUs
- The URLs are absolute and served from cngreenyard.cn — use them directly
- Add `crossorigin="anonymous"` to img tags for external URLs
- Run `npm run build` after changes
