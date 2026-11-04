# structure_redefined — Store Restructure Prompt

## Purpose

This prompt restructures any existing store page to match the approved StubHub template pattern.
It **guarantees zero content changes** — every word of offer text, descriptions, SEO paragraphs, FAQ answers, sidebar copy, and bullet points is copied verbatim from the existing files. Only the code structure changes: coupon data moves to a separate `offers.ts` file, hardcoded coupon divs are replaced with a single `.map()`, and the broken shared accordion state is fixed to per-coupon independent toggles.

**Output: 3 files** inside `app/stores/<store-id>/`:
- `_components/offers.ts` — Coupon interface + data array (new file)
- `_components/StoreCouponsContent.tsx` — rewritten client component
- `page.tsx` — updated server component

---

## Input (user provides these)

| Field | Example |
|---|---|
| Store folder | `app/stores/amazon-discount-code/` |
| Store display name | `Amazon` |
| Store brand URL | `https://www.amazon.com` |
| Affiliate / "Get Deal" URL | `https://amazon.prf.hn/click/...` |
| Store accent color (hex) | `#FF9900` |
| Accent dark color (hex) | `#e68a00` |
| Accent light bg (hex) | `#fff7ed` |

---

## ⚠️ RULE — ZERO CONTENT CHANGES

```
- Do NOT rewrite, improve, paraphrase, or translate any existing text.
- Titles, descriptions, bullet points, SEO paragraphs, FAQ Q&As,
  sidebar text, related store names — all copied VERBATIM.
- Only CODE STRUCTURE changes (data extraction, .map(), state fixes).
- Only touch files inside app/stores/<store-id>/. Nothing else.
- Do NOT change any other store. Do NOT touch layout.tsx or any shared file.
```

---

## Step 1 — Read everything first (NO writes in this step)

Read both existing files completely before writing anything.

**From `page.tsx` extract:**
- `TITLE` and `DESCRIPTION` text (verbatim)
- Canonical URL and all `alternates`
- OG image URL, `siteName`, `locale`
- Twitter card values
- All JSON-LD schema nodes verbatim: WebPage, BreadcrumbList, FAQPage (all Q&As), WebSite, Organization

**From `_components/StoreCouponsContent.tsx` extract:**
- Every coupon's data: badge label/value/bottom text, heading (h2/h3), description paragraph, all bullet points, promo code (if any)
- Affiliate URL (the `href` on every "Get Deal" / "Visit Store" link)
- Store logo image URL
- Banner slider image URLs (3 slides)
- `RELATED_STORES` array — name, logo URL, dealText, href (all verbatim)
- Sidebar "About" card text (all paragraphs verbatim)
- "How to Use" steps — step title + description (verbatim)
- Trust bar items (icon, title, sub) if present
- SEO text section — all paragraphs and h3 headings verbatim
- Comparison / summary table rows (all cells verbatim)
- FAQ array — all Q&A pairs verbatim
- Tag cloud tags (verbatim)
- "Today's Top Deals" sidebar heading (verbatim)
- Read More / Read Less button (keep as-is)

---

## Step 2 — Create `_components/offers.ts`

### Coupon interface (always use this exact shape)

```ts
export interface Coupon {
  id: string;        // 'c1', 'c2' … or store-prefix+number e.g. 'amz1'
  topLabel: string;  // top text in left badge: "FLAT", "UP TO", "Starting From"
  mainValue: string; // big center value: "10%", "$30", "50%"
  offText: string;   // bottom text: "OFF" or "" (empty for price-based badges)
  title: string;     // coupon heading — VERBATIM from existing JSX h2/h3
  description: string;
  code: string;      // promo code string, or "" (empty → no code box shown)
  verified: string;  // 'Verified'
  userType: string;  // 'All Users' | 'New Users' | 'Students' | as appropriate
  validTill: string; // '30 Nov 2026'
  points: string[];  // accordion bullet points — VERBATIM
}

export const STORE_COUPONS: Coupon[] = [
  // one entry per coupon
];
```

Name the exported array after the store: `AMAZON_COUPONS`, `EXPEDIA_COUPONS`, `KLOOK_COUPONS`, etc.

### Default values — add to every coupon

```ts
verified: 'Verified',
userType: 'All Users',   // change to 'New Users' or 'Students' where appropriate
validTill: '30 Nov 2026',
```

### Badge mapping rule

| Existing display | topLabel | mainValue | offText |
|---|---|---|---|
| "FLAT" / "10%" / "OFF" | `"FLAT"` | `"10%"` | `"OFF"` |
| "UP TO" / "50%" / "OFF" | `"UP TO"` | `"50%"` | `"OFF"` |
| "Starting From" / "$30" / (empty) | `"Starting From"` | `"$30"` | `""` |
| "Starting At" / "$171" / (empty) | `"Starting At"` | `"$171"` | `""` |
| "Save Up To" / "5%" / "OFF" | `"Save Up To"` | `"5%"` | `"OFF"` |
| "GET" / "$20" / "OFF" | `"GET"` | `"$20"` | `"OFF"` |
| "FREE" / "DELIVERY" / (empty) | `"FREE"` | `"DELIVERY"` | `""` |

If the old data array has `label` and `discount` fields, map them: `topLabel ← label`, `mainValue ← discount`.

---

## Step 3 — Rewrite `_components/StoreCouponsContent.tsx`

### Top of file

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight, Star, Tag, Percent, Users, BadgeCheck, ExternalLink,
  ShieldCheck, PiggyBank, RefreshCw, Copy, Search, CheckSquare,
  CheckCircle2, ChevronDown, CheckCircle, Ticket, Tv, Plane, Code,
  Zap, LayoutGrid, Laptop,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { type Coupon, STORE_COUPONS } from "./offers";
```

Remove: the old inline `Coupon` type, the old inline `COUPONS` array, any `StoreItem` interface not needed.
Keep: `RELATED_STORES` array (verbatim, same data).

### State — always exactly these 8 variables

```ts
const [activeSlide, setActiveSlide]             = useState(0);
const [showToast, setShowToast]                 = useState(false);
const [toastCode, setToastCode]                 = useState("");
const [expandedCouponId, setExpandedCouponId]   = useState<string | null>(null);
const [isReadMore, setIsReadMore]               = useState(false);
const [openFaq, setOpenFaq]                     = useState<number | null>(null);
const [showModal, setShowModal]                 = useState(false);
const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
```

**Remove** these old state vars if present: `open` (the shared boolean that broke all accordions), `activeTab`, `revealedCodes`.

### handleCopy function

```ts
const handleCopy = (coupon: Coupon) => {
  navigator.clipboard.writeText(coupon.code);
  setToastCode(coupon.code);
  setShowToast(true);
  setActiveModalCoupon(coupon);
  setShowModal(true);
  setTimeout(() => setShowToast(false), 2000);
};
```

### Code copy modal (place right after the outer `<div>` opens, before `<Navbar />`)

```tsx
{showModal && activeModalCoupon && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    onClick={() => setShowModal(false)}
  >
    <div
      className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-black font-black text-xl mb-2">Coupon Code Copied!</h3>
      <div className="bg-[ACCENT_LIGHT] border border-[ACCENT]/20 rounded-2xl px-6 py-3 mb-6">
        <span className="text-[ACCENT] font-black text-2xl font-mono">{activeModalCoupon.code}</span>
      </div>
      <a
        href="AFFILIATE_URL"
        target="_blank"
        rel="nofollow noopener noreferrer"
        onClick={() => setShowModal(false)}
        className="block w-full bg-[ACCENT] text-white font-black py-4 rounded-2xl mb-3 hover:bg-[ACCENT_DARK] transition-colors"
      >
        Continue to Store →
      </a>
      <button
        onClick={() => setShowModal(false)}
        className="text-gray-500 font-bold text-sm hover:text-black transition-colors"
      >
        Close Window
      </button>
    </div>
  </div>
)}
```

### Coupon cards — replace ALL hardcoded coupon divs with one `.map()`

```tsx
{STORE_COUPONS.map((coupon) => (
  <div key={coupon.id} id={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
      <div className="flex flex-row">

        {/* LEFT BADGE */}
        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[ACCENT] to-[ACCENT_DARK] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full" />
          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full" />
          <div className="text-center px-1">
            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
              {coupon.topLabel}
            </p>
            <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
              {coupon.mainValue}
            </div>
            <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">
              {coupon.offText}
            </p>
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
          <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">

            {/* BADGES */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                Limited Time
              </span>
              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                Verified Deal
              </span>
            </div>

            {/* HEADING — use h3 (not h2, which is reserved for section headings) */}
            <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
              {coupon.title}
            </h3>

            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
              {coupon.description}
            </p>

            {/* PER-COUPON ACCORDION TOGGLE */}
            <button
              type="button"
              onClick={() => setExpandedCouponId(expandedCouponId === coupon.id ? null : coupon.id)}
              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
            >
              View Details
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${expandedCouponId === coupon.id ? "rotate-180" : ""}`}
              />
            </button>

            {/* ACCORDION BODY — independent per coupon */}
            <div className={`overflow-hidden transition-all duration-300 ${
              expandedCouponId === coupon.id ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}>
              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                {coupon.points.map((point, pi) => (
                  <li key={pi} className="flex items-start gap-2">
                    <span className="text-[ACCENT]">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT ACTION COLUMN */}
          <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6 gap-3">

            {/* Show code box only when coupon.code is non-empty */}
            {coupon.code && (
              <button
                onClick={() => handleCopy(coupon)}
                className="w-full bg-white border-2 border-dashed border-[ACCENT] text-[ACCENT] font-black text-sm px-4 py-2.5 rounded-xl flex items-center justify-between gap-2 hover:bg-[ACCENT_LIGHT] transition-colors"
              >
                <span className="font-mono">{coupon.code}</span>
                <Copy className="w-4 h-4 shrink-0" />
              </button>
            )}

            <a
              href="AFFILIATE_URL"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={`Get deal: ${coupon.title}`}
              className="w-full bg-[ACCENT] hover:bg-[ACCENT_DARK] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
            >
              Get Deal
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
```

### "Today's Top Deals" sidebar

Replace the old `COUPONS.map((deal) => deal.heading / deal.sub)` pattern with:

```tsx
{STORE_COUPONS.slice(0, 5).map((coupon, i) => (
  <div key={i} className="flex items-center gap-4 group cursor-pointer">
    <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[ACCENT] font-black text-xl italic shadow-inner">
      {/* First letter of store name */}
      S
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[ACCENT] transition-colors">
        {coupon.topLabel} {coupon.mainValue} {coupon.offText}
      </p>
      <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-1 normal-case">
        {coupon.description}
      </p>
    </div>
    <a
      href="AFFILIATE_URL"
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="bg-[#e8f6f8] text-[ACCENT] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[ACCENT] hover:text-white transition-all active:scale-90"
    >
      Get Deal
    </a>
  </div>
))}
```

### All other sections — keep 100% verbatim

These sections must NOT change at all — copy them exactly from the existing file:
- Breadcrumb nav
- Store header (H1, logo, star rating, store description, stats bar)
- Banner slider (3 slides, controls, dots)
- Trust bar
- Google preferred source badge
- About / "Real Discount Code" sidebar card
- Top Categories sidebar card
- "How to Use" steps card
- "More Stores You'll Love" (RELATED_STORES)
- SEO text section (all paragraphs, h3 headings, comparison table)
- "Best Ways to Save" card
- "Why Choose" section
- Read More / Read Less toggle
- FAQ accordion (all 9+ Q&As)
- Popular Searches tag cloud

---

## Step 4 — Update `page.tsx`

### Imports to add

```ts
import { Suspense } from "react";
import { STORE_COUPONS } from "./_components/offers";
```

### Add TITLE + DESCRIPTION constants (extract verbatim from existing metadata)

```ts
const TITLE = "...existing title text...";
const DESCRIPTION = "...existing description text...";
```

Then replace all repeated title/description string literals with `TITLE` and `DESCRIPTION`.

### Dynamic offers for schema

```ts
const storeOffers = STORE_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `StoreName ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/<store-id>#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Organization",
    name: "StoreName",
    url: "BRAND_URL",
  },
}));
```

### Schema @graph — make these changes

| What | Change |
|---|---|
| `numberOfItems` | `STORE_COUPONS.length` (never hardcode a number) |
| `itemListElement` | `storeOffers.map((offer, i) => ({ "@type": "ListItem", position: i + 1, item: offer }))` |
| Brand schema | Add: `{ "@type": "Organization", "@id": "https://www.couponsbit.us/stores/<store-id>#brand", name: "StoreName", url: "BRAND_URL" }` |
| `speakable` | Remove if present |
| `other` in metadata | Add: `other: { 'geo.region': 'US', 'geo.country': 'US', language: 'en-US' }` |

```ts
// Add this inside the metadata export, after robots:
other: { 'geo.region': 'US', 'geo.country': 'US', language: 'en-US' },
```

### Default export — wrap in Suspense

```tsx
export default function StoreNamePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Suspense fallback={null}>
        <StoreNameContent />
      </Suspense>
    </>
  );
}
```

---

## Step 5 — Verify

```bash
npx tsc --noEmit
```

**Expected:** zero output (zero TypeScript errors) in the target store files.
Pre-existing errors in other stores are acceptable — only the restructured store must be clean.

**Visual checklist:**
- [ ] All coupons render from `STORE_COUPONS` data (no hardcoded JSX per coupon)
- [ ] "View Details" on coupon 1 does NOT open coupon 2's accordion
- [ ] Coupons with a non-empty `code` show the dashed code box + Copy button
- [ ] Clicking Copy shows the modal with the code and "Continue to Store" link
- [ ] Coupons with empty `code` show only "Get Deal"
- [ ] SEO text, FAQ, sidebar — all content identical to the original

---

## Reference — Template store

The approved template is `app/stores/stubhub-discount-code/`.
When in doubt about structure, refer to its three files.
