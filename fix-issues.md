# CouponsBit.us — Technical Fix List

This file was generated from a full SEO audit (2026-08-14). Upload it into your website's codebase and hand it to Claude so it can work through the issues directly against your source files.

**Scope — what's IN this file:** Technical SEO, Schema/structured data, Sitemap, Performance, Crawlability, and GEO/AI-search issues that are fixable in code/config with **no visual or layout change**.

**Scope — what's deliberately LEFT OUT (handled elsewhere, do not touch here):**
- Any copywriting/rewording (About page, trust-stat wording, store-page bylines, blog citations, disclosure text, deal-description length) — routed to the content writer.
- Any visual/design/layout change (cookie-consent modal redesign, mobile hero carousel, scroll depth, button sizing) — design is staying as-is.
- Backlink acquisition — that's an off-site workstream requiring API credentials, not a code fix, and isn't included here.

If you hit an item below that turns out to need real copywriting judgment (not just moving/mapping existing text), stop and flag it back rather than inventing new marketing copy.

Work top to bottom — items are ordered by severity. Check items off as you go.

---

## CRITICAL — Fix First

### [ ] 1. Nuage store page's structured data describes the wrong business
**Where:** `/stores/nuage-discount-code` and its 9 city sub-pages (`/stores/nuage-discount-code/new-york`, `/boston`, `/los-angeles`, `/san-francisco`, `/seattle`, `/austin`, `/miami`, `/dallas`, `/atlanta`)

**What's wrong:** The page is about NuageWear bras/shapewear, but the JSON-LD `ItemList.description` and `Offer.description` on this page literally read:
> *"Latest verified Nuagewear coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans."*

This is boilerplate copy-pasted from the Hostinger store template and never swapped out. It's very likely a shared field/template bug, not a one-off typo — check whether other store pages have similar cross-contaminated descriptions while you're in there.

**Fix:** Find the CMS field / data source that populates `ItemList.description` and `Offer.description` for store pages. For Nuage specifically, it should read something like:
```json
{
  "@type": "ItemList",
  "name": "Nuagewear Coupon Codes & Promo Codes",
  "description": "Latest verified NuageWear coupon codes and discount codes for bras, shapewear and lingerie.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Offer",
        "name": "NuageWear Coupon Code",
        "description": "Save 39% on the Wireless Stay-Put Bra and other NuageWear shapewear.",
        "seller": { "@type": "Organization", "name": "Nuagewear", "url": "https://www.nuagewear.com" }
      }
    }
  ]
}
```
Pull the description from the correct, already-written on-page copy for Nuage (the page's own visible text already correctly describes the bras/shapewear — reuse that, don't write new copy). Apply the same fix to all 9 city variants, since they very likely share the same template/data field as the base page.

**Done when:** JSON-LD on all 10 Nuage URLs (base + 9 cities) describes shapewear/lingerie, not web hosting. Verify with Google's Rich Results Test.

---

### [ ] 2. 24 MB of unoptimized images on homepage and Amazon store page
**Where:** Homepage (`/`) and `/stores/amazon-discount-code` — likely other store/category pages sharing the same component.

**What's wrong:** 9-11 category-icon images (e.g. "Electronics & Smart Devices", "Toys, Games & Collectibles" artwork) are raw, untransformed Cloudinary PNGs, each 1.9–2.3 MB, displayed at only ~362×227px. They bypass both Next.js's `/_next/image` optimizer and Cloudinary's own transform API. This pushes total page weight to ~24 MB on the two pages tested — roughly 40x heavier than pages that don't render this component (~600 KB). This is the single largest performance defect on the site and is very likely responsible for the LCP failures reported below (item 5).

The rest of the site already does this correctly — hero/product images use Cloudinary's `f_auto,q_auto` transform (e.g. `.../upload/f_auto,q_auto,w_1400,c_limit/...`). This one component just never got the same treatment.

**Fix:** Find the "Popular Categories" / "Browse by Category" component. Change every raw Cloudinary upload URL to include transform parameters matching the pattern already used elsewhere:
```
https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_400,c_limit/<original-path>
```
(`w_400` gives headroom over the ~362px display size for retina; adjust to your actual display width.) Confirm this component isn't reused unmodified on other store/category pages — if it is, the fix should apply everywhere it's used.

**Done when:** Homepage and Amazon-page total transfer size drops from ~24 MB to well under 1 MB. Re-run Lighthouse to confirm LCP moves out of the "Poor" band.

---

## HIGH PRIORITY

### [ ] 3. No security headers except HSTS
**Where:** Sitewide — confirmed missing on homepage, `/deals`, `/stores`, store pages, `/privacy-policy`.

**What's wrong:** Only `Strict-Transport-Security` is present in response headers. Missing: `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`. Since the site's core function is redirecting users to third-party affiliate merchants, the missing `X-Frame-Options`/CSP `frame-ancestors` is a real clickjacking gap.

**Fix:** Add headers via `next.config.js` `headers()` or `vercel.json` `headers`:
```js
{ key: "X-Content-Type-Options", value: "nosniff" },
{ key: "X-Frame-Options", value: "SAMEORIGIN" },
{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
{ key: "Permissions-Policy", value: "geolocation=(), camera=(), microphone=()" },
{ key: "Content-Security-Policy", value: "default-src 'self'; img-src 'self' res.cloudinary.com data:; script-src 'self' 'unsafe-inline'; frame-ancestors 'self'" }
```
Start CSP in `Content-Security-Policy-Report-Only` mode first (Cloudinary images, affiliate tracking, and the Google Translate widget all need to keep working), watch the reports for a few days, then switch to enforced.

**Done when:** All 5 headers present sitewide, CSP enforced without breaking Cloudinary images or the Translate widget.

---

### [ ] 4. `ItemList.numberOfItems` doesn't match real coupon count (affects ~90 URLs)
**Where:** All ~81 `/stores/{brand}-discount-code` pages + 9 Nuage city variants.

**What's wrong:** Every sampled store page hardcodes `"numberOfItems": 10` in its `ItemList` schema, but `itemListElement` contains exactly **one** generic placeholder `Offer` — regardless of how many real coupons are actually shown on the page (Amazon shows 11). The real per-coupon data (specific product, price, discount %) that's visible to users is never represented in structured data.

**Fix:** Generate one `Offer` per real, currently-live coupon shown on the page, sourced from the same data that renders the visible coupon cards. Set `numberOfItems` to the true count. Example (2 real Amazon coupons):
```json
{
  "@type": "ItemList",
  "numberOfItems": 2,
  "itemListElement": [
    {
      "@type": "ListItem", "position": 1,
      "item": {
        "@type": "Offer",
        "name": "52% Off Lenovo Legion Tower 5i Gaming PC",
        "description": "Save 52% on the Lenovo Legion Tower 5i Gaming PC at Amazon with this verified code.",
        "priceCurrency": "USD", "price": "2556.00",
        "validThrough": "2026-08-31",
        "seller": { "@type": "Organization", "name": "Amazon", "url": "https://www.amazon.com" }
      }
    }
  ]
}
```
Only include `price`/`priceCurrency` when a specific priced product is genuinely shown; for generic percent-off codes, use `description` + `validThrough` only.

Also fix the `/stores` hub page: it declares `numberOfItems: 200` ("200+ stores") but only ~81 store pages actually exist in the sitemap — reconcile the schema count with the real inventory.

**Guardrail — do not do this instead:** Don't wrap coupons in `Product` + `AggregateOffer`/`Review`/`AggregateRating` to try to force a rich result. Google has no dedicated coupon rich result, and CouponsBit isn't the seller — `Product` schema on an affiliate page risks a manual action for misleading markup. Keep using `ItemList` → `Offer` as shown above.

**Done when:** `numberOfItems` matches the real `itemListElement` count on every store page and on `/stores`.

---

### [ ] 5. LCP fails Core Web Vitals on every page tested
**Where:** Homepage, `/deals`, `/stores/amazon-discount-code`, `/stores/nuage-discount-code`, blog posts — all 5 sampled pages failed the 2.5s "Good" LCP threshold in lab testing (range: 2.9s–9.0s).

**What's wrong (two separate causes):**
- **Homepage:** LCP image itself loads fine, but there's a 1,373ms "element render delay" — render-blocking JS/hydration delays paint even after the image bytes arrive. This is very likely compounded by item 2 above (24 MB of competing image downloads).
- **Store pages (Amazon, Nuage):** The LCP element resolves to a **text node**, not an image — meaning the above-the-fold content is gated behind client-side hydration rather than being present in the initial server-rendered HTML.

**Fix:**
1. Fix item 2 first (image weight) — re-measure before doing anything else here, since it may resolve most of the homepage/Amazon-page gap on its own.
2. For store pages: identify whether the above-the-fold description text is rendered by a client component. If so, move it to render server-side (in the initial HTML) instead of waiting on hydration.
3. Compress the blog hero images — one sampled hero was 738 KB, oversized for a WebP hero image.

**Done when:** Re-run Lighthouse (mobile) on all 5 pages; target LCP ≤ 2.5s.

---

### [ ] 6. Blog posts have zero structured data
**Where:** All 3 blog posts under `/blog/*` — confirmed via both raw fetch and forced full render, not a timing artifact.

**What's wrong:** No `BlogPosting`/`Article` schema, no `BreadcrumbList` — the only content type on the site with no JSON-LD at all, and no machine-readable `datePublished`/`dateModified`/`author`.

**Fix:** Add this block to the blog post template (values below are the pattern — pull real dates from the CMS, not a placeholder):
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "{{post title}}",
      "description": "{{post meta description}}",
      "url": "{{canonical post URL}}",
      "inLanguage": "en-US",
      "datePublished": "{{real CMS publish date}}",
      "dateModified": "{{real CMS last-edited date}}",
      "author": { "@type": "Organization", "name": "Couponsbit", "url": "https://www.couponsbit.us" },
      "publisher": { "@id": "https://www.couponsbit.us/#organization" },
      "image": { "@type": "ImageObject", "url": "{{post hero image}}", "width": 1200, "height": 630 },
      "mainEntityOfPage": "{{canonical post URL}}"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.couponsbit.us" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.couponsbit.us/blog" },
        { "@type": "ListItem", "position": 3, "name": "{{post title}}", "item": "{{canonical post URL}}" }
      ]
    }
  ]
}
```
**Important:** Pull `datePublished`/`dateModified` from the actual CMS record. Don't reuse the generic fallback date (`2026-01-01`) that's currently showing up sitewide as a default — that's a separate bug worth checking while you're in the date-handling code.

**Done when:** All 3 (and future) blog posts pass Google's Rich Results Test for `BlogPosting`.

---

### [ ] 7. No expiration / "last verified" date anywhere on coupon offers
**Where:** All store pages — every deal card shows a specific price claim ("$59.99, was $69.99") but no card anywhere shows when it was last checked or when it expires.

**What's wrong:** This is both a schema gap and an AI-citation gap: AI Overviews, ChatGPT, and Perplexity are documented to hedge on citing coupon/price content with no visible freshness signal, since citing an expired code produces a bad outcome for them. Right now every offer looks equally "fresh" (or equally stale) with no way to tell.

**Fix (data + schema, not copy):**
1. Confirm whether the coupon-refresh pipeline already timestamps when an offer was last pulled/verified. If it does, surface that timestamp — add a small "Verified [date]" or "Checked [X] days ago" element per coupon card, driven by that real data field (not static text).
2. Add the same date to schema: `Offer.validFrom` and, where a real expiration exists, `Offer.priceValidUntil`.
3. For codes with no real expiration, make that explicit in the data model too ("ongoing, last checked [date]") rather than leaving the field blank.

If the CMS does **not** currently track a real per-offer verification timestamp, that's a prerequisite data-plumbing task — flag it back rather than fabricating a date.

**Done when:** Every coupon card has a real, data-driven date associated with it, and it's present in both the visible markup and the `Offer` schema.

---

### [ ] 8. Every "Get Deal" CTA on a store page links to one shared generic URL
**Where:** `/stores/amazon-discount-code` (all 16 CTAs → same generic `amazon.com?...` affiliate link, including the card for a $2,556 Lenovo gaming PC) and `/stores/hostinger-discount-code` (all 15 CTAs → same shared `hostinger.sjv.io/...` tracking link). Very likely the same pattern across all ~81 store pages since it's templated.

**What's wrong:** Whichever specific product/plan a card advertises, the "Get Deal" button ignores it and sends every click to the same destination. This is a pure href-generation bug, not a design issue — the buttons look and behave identically, they just resolve to the wrong URL.

**Fix:** Generate deep, deal-specific affiliate links per card instead of one shared link per store:
- Amazon: use product-specific ASIN links (Product Advertising API / SiteStripe) instead of the bare homepage link.
- Hostinger and similar affiliate-network stores: append a distinct `subId`/`linkId` per card at minimum, so each card at least routes to a plan-specific or trackable destination rather than an identical generic one.

**Done when:** Each "Get Deal" button's `href` corresponds to the specific product/plan shown on that card, verified on at least Amazon and Hostinger, then audited across the rest of the store-page catalog.

---

### [ ] 9. Two-thirds of store pages have no internal link path
**Where:** `/stores` hub and site-wide navigation.

**What's wrong:** Internal `<a href>` links only ever reach 24 of the site's 72 store pages (9 hardcoded into global site chrome + 15 listed on the `/stores` hub, which has no pagination or "load more"). The other 48 store pages are live, indexable, and correctly in the sitemap — but have zero internal link path. Google can still find them via the sitemap, but they get no internal PageRank/relevance signal and become true orphans if the sitemap is ever delayed or broken.

**Fix (no visual redesign needed — just make more of the existing catalog reachable via real links):**
1. Add real, crawlable pagination or a "view all stores" link on `/stores` so all 72 pages are link-reachable (a real paginated `<a href>`, not a JS-only "load more" with no link fallback).
2. Add contextual cross-links where they make sense (e.g., a "related stores" module using the existing card component, category pages linking to their member stores).

**Done when:** A crawl of `/stores` (following only `<a href>` links, no sitemap) reaches all 72 store pages.

---

## MEDIUM PRIORITY

### [ ] 10. Homepage `SearchAction` schema targets a 404
**Where:** Homepage JSON-LD.
**What's wrong:** `WebSite.potentialAction.SearchAction.target` points to `https://www.couponsbit.us/search?q={search_term_string}` — that route doesn't exist (confirmed 404).
**Fix:** Either build a working `/search?q=` route, or remove the `SearchAction` block from the homepage schema until one exists.
**Done when:** `/search?q=test` returns 200 with real results, or the schema block is removed.

### [ ] 11. `Organization.logo` inconsistent across templates + under Google's size minimum
**Where:** Homepage/category/FAQ pages use `/logo.png` (200×60); store pages use a different Cloudinary `.webp` file, same declared 200×60.
**What's wrong:** Two different files for the same `Organization` entity, and 60px tall is below Google's ~112×112 minimum for Logo/Knowledge Panel eligibility.
**Fix:** Standardize on a single logo URL across every template. If a larger, closer-to-square asset (e.g. 512×512) isn't available, flag this one back — getting a new asset made is a design task, but pointing every template at the *same* existing file is not.
**Done when:** Every page's `Organization.logo` resolves to the identical URL.

### [ ] 12. Bare price/percentage numbers used as heading tags
**Where:** Multiple store pages (e.g. Amazon: H2s that are just "14%", "52%"; Nuage: "$49", "39%"; homepage: "2,000+", "100%").
**What's wrong:** These read as UI "discount badge" chips that got marked up as `<h2>`/`<h3>` instead of the actual descriptive heading next to them — hurts heading-outline semantics and screen-reader navigation. **No visual change required** — same text, same styling, just change the wrapping tag.
**Fix:** Change these specific elements from `<h2>`/`<h3>` to a `<span>`/`<div>` (or add `aria-hidden` if purely decorative), and make sure the real descriptive heading text next to each badge is the one actually marked up as a heading.
**Done when:** No heading tag's entire text content is a bare number/percentage.

### [ ] 13. Sitewide leftover brand name: "Coupons Clouds" instead of "Couponsbit"
**Where:** `/privacy-policy` title, meta description, and body copy; a `"| Coupons Clouds"` suffix also appears appended to the `<title>` tag on most other inner pages.
**What's wrong:** Looks like an unfinished rebrand — this is a find/replace bug fix, not new copywriting.
**Fix:** Search the codebase/CMS for "Coupons Clouds" and replace with "Couponsbit" — title-tag template suffix, meta descriptions, and the `/privacy-policy` body text specifically.
**Done when:** No page contains "Coupons Clouds" anywhere in its HTML.

### [ ] 14. IndexNow not implemented
**Where:** Sitewide.
**What's wrong:** No IndexNow key file (`/indexnow.txt` → 404), no reference in `robots.txt`. Given coupon/deal data changes daily, Bing/Yandex/Naver currently have no fast-path signal when an offer changes.
**Fix:** Generate an IndexNow key, host the key file at the site root, and call the IndexNow API whenever a coupon/deal is added, updated, or expired.
**Done when:** Key file is live and at least one test URL submission succeeds.

### [ ] 15. Images missing explicit width/height
**Where:** Category/brand icon images on homepage and `/stores/amazon-discount-code` — inconsistent with other images on the same pages that do have dimensions.
**What's wrong:** Layout-shift (CLS) risk. No visual change needed — just add the missing attributes.
**Fix:** Ensure every `next/image` (or `<img>`) instance sitewide passes explicit `width`/`height` (or CSS `aspect-ratio`).
**Done when:** No image in the DOM has null/missing width or height.

### [ ] 16. Oversized favicon (116.5 KB)
**Where:** Loaded on every page.
**What's wrong:** 20-50x larger than a favicon needs to be — same icon, just needs re-exporting at the correct size/compression.
**Fix:** Re-export as a proper favicon set (16×16/32×32 `.ico` or optimized PNG under ~10 KB), keep the existing `apple-touch-icon` separate if one exists.
**Done when:** Favicon request is under ~10 KB.

### [ ] 17. FAQ section on store pages has no `FAQPage` schema
**Where:** Store-page template — has a visible "Frequently Asked Questions" section but no matching JSON-LD (unlike the standalone `/faqs` page, which does have it correctly).
**Fix:** Add `FAQPage`/`Question`/`Answer` schema to the store-page template, mirroring the existing `/faqs` implementation, using the FAQ content that's already written and visible on the page.
**Done when:** Store pages with a visible FAQ section pass Google's Rich Results Test for `FAQPage`.

### [ ] 18. Nuage's 9 city-variant pages — decide and implement a canonicalization strategy
**Where:** `/stores/nuage-discount-code/{city}` × 9.
**What's wrong:** These 9 pages are ~80-85% identical to each other and to the base page (same offers, same steps/sections) with only city name, tax rate, and delivery estimate swapped — a doorway-page pattern. This is currently a small (9-page) risk but is a template that shouldn't be extended to other stores.
**Fix (pick one, both are backend-only, no design change):**
- **Option A (recommended, simplest):** Add `<link rel="canonical" href=".../stores/nuage-discount-code">` to all 9 city pages, pointing at the base page, and/or add `noindex` to the 9 variants — keep them live for users, just stop them from being independently indexed.
- **Option B:** Leave them indexable but do not create this pattern for any other store.
**Do not** build this same city-variant pattern for additional stores until a decision is made.
**Done when:** Either canonical/noindex tags are added, or an explicit decision is documented to leave as-is and not scale it further.

---

## LOW PRIORITY / Cleanup

### [ ] 19. Sitemap `lastmod` is identical across all 103 URLs
**What's wrong:** Every URL shares the exact same build-time timestamp — not a real per-page signal.
**Fix:** Generate `lastmod` from the actual last-updated timestamp of each page's content/data, not from the sitemap build job's `Date.now()`.

### [ ] 20. Remove or fix `changefreq` values in sitemap
**What's wrong:** Google ignores this tag entirely; current values are also arguably backwards (store/coupon pages marked `weekly`, hub pages marked `daily`, when coupon-level content should churn faster).
**Fix:** Remove `changefreq` from the sitemap generator, or at minimum fix the inversion if keeping it for Bing.

### [ ] 21. Inconsistent `hreflang` on some store pages
**What's wrong:** Amazon and Hostinger store pages declare extra `en-GB`/`en-IN` hreflang tags that all point at the same URL (no actual localized content exists); other store pages don't have these tags at all.
**Fix:** Remove the extra hreflang entries from the pages that have them, so behavior is consistent sitewide.

### [ ] 22. Two-hop redirect chain for bare HTTP apex requests
**What's wrong:** `http://couponsbit.us/` → 308 → `https://couponsbit.us/` → 308 → `https://www.couponsbit.us/` (2 hops). Other entry points resolve in 1 hop.
**Fix:** Configure a single combined redirect (scheme + host canonicalization together) at the DNS/domain layer instead of chaining two separate redirects.

### [ ] 23. Harden HSTS header
**What's wrong:** `max-age=63072000` is set but missing `includeSubDomains; preload`.
**Fix:** Update to `max-age=63072000; includeSubDomains; preload` once all subdomains are confirmed HTTPS-only, then submit to hstspreload.org.

### [ ] 24. Store-page H1s are bare brand names
**Where:** Store pages currently render `<h1>Amazon</h1>` / `<h1>Hostinger</h1>`, while a more descriptive version already exists elsewhere on the same page (in the `<title>` tag, e.g. "Amazon Discount Code | Save Up to 52% OFF...").
**Fix:** This is a template change, not new copywriting — reuse the data that already populates the `<title>` tag to also populate the H1, e.g. `<h1>{{brand}} Discount Code – Save Up to {{discount}}% Off ({{month}} {{year}})</h1>`. No new text needs to be written; it's the same data rendered in two places instead of one.

---

## After these are fixed — re-verify

1. Run Google's Rich Results Test on: homepage, one store page, one Nuage city page, a blog post, `/faqs`.
2. Re-run Lighthouse (mobile) on homepage, `/stores/amazon-discount-code`, `/stores/nuage-discount-code` — confirm LCP ≤ 2.5s and page weight is no longer in the multi-MB range.
3. Crawl `/stores` with a plain HTML crawler (no JS) and confirm all 72 store pages are reachable via links, not just the sitemap.
4. Check response headers on 3-4 pages for the full security-header set.
5. Search the codebase for "Coupons Clouds" and confirm zero remaining matches.
