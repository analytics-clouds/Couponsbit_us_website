# CouponsBit — Location Page Master Template
## Store Type: Physical Product Stores
## Status: Verified against a shipped page (Nuagewear → New York). Supersedes physical-product-store.md as the working reference — that file is kept for history only.

> **How to use this file:**
> "Use app/location/README.md as instructions.
>  Create a location page for [STORE NAME] in [STATE NAME].
>  Parent page is at app/stores/[store-slug]/_components/StoreCouponsContent.tsx
>  and app/stores/[store-slug]/page.tsx.
>  Search the web for missing state data (tax rate, delivery days, top cities)."

The worked example throughout is **Nuagewear → New York**
(`app/stores/nuage-coupon-code/new-york/`). Every rule below was
checked against that shipped file, not against a plan that was never
fully built — if you see a mismatch between this doc and the Nuagewear
NY page, the page is correct and this doc should be fixed.

---

## WHY THIS EXISTS

A location page (`/stores/[store-slug]/[state-slug]`) lets a store
have state-specific landing pages without Google treating them as
duplicate/doorway content. That only works if the page is *genuinely*
different from its parent in enough places — not just a find/replace
of the state name. This doc lists exactly which blocks must be
rewritten, which can be copied verbatim, and which must be removed or
relocated, based on a page that has actually shipped.

---

## STEP 0 — SEARCH THE WEB FOR THIS DATA FIRST

Before writing anything, confirm:

```
Search 1: "[STATE NAME] combined state + local sales tax rate 2026"
→ Use the Reference Table below as a fallback if search is inconclusive

Search 2: "USPS/UPS standard delivery days to [STATE] from East Coast warehouse"
→ Use the Reference Table below as a fallback

Search 3: "largest cities in [STATE NAME] by population"
→ Need top 4-5 for natural mentions across the page (not the same 2 everywhere)

Search 4: "does [STORE NAME] ship to [STATE NAME]"
→ If not confirmed, DO NOT create the page
```

---

## FILE / ROUTING STRUCTURE

```
app/stores/[store-slug]/[state-slug]/
├── page.tsx                          (Metadata + JSON-LD @graph)
└── _components/
    └── StoreCouponsContent.tsx       ("use client", actual content)
```

- `state-slug` = lowercase, spaces → hyphens (`new-york`, `california`).
- Component export name: `{Store}{State}CouponsContent` (e.g.
  `NuagewearNewYorkCouponsContent`).
- Clone the **parent's** `_components/StoreCouponsContent.tsx` as your
  starting point (not another location page), then apply the changes
  below.
- You need **one new banner asset** from Cloudinary — the location
  page uses a single static hero image, not the parent's 3-slide
  carousel (see Step 2 below). If it's not available yet, ask for it
  before proceeding — don't reuse the parent's carousel images.

---

## STEP 1 — COPY VERBATIM (no rewriting, no state references needed)

These blocks are safe to copy character-for-character from parent —
duplicating them is fine because they're commodity data, not
marketing/SEO prose:

- `COUPONS` data array and `RELATED_STORES` array
- All coupon card markup (the big repeated block, one per offer)
- The Trust Bar (Top Deals / Verified / Big Savings / Updated Daily)
- "About [Store]" paragraph(s)
- "Why Customers Choose [Store]" bullets — fine to keep generic and
  simply move it into a sidebar card (see Step 2 and PITFALLS below —
  a state-specific rewrite of this block is optional polish, not
  required, as long as the rest of the page carries enough
  state-specific signal on its own)
- "Tips to Save More on [Store]" content
- Closing CTA paragraph(s) at the bottom of the page

---

## STEP 2 — STRUCTURAL CHANGES (remove, replace, or relocate)

```
REMOVE ENTIRELY:
❌ Read More / Read Less toggle — state (isReadMore), gradient fade
   overlay, and the button. Location pages show full content always.
❌ Star rating block (e.g. "4.6 ★ 32.5k Ratings") under the H1
❌ Top stat block (Coupons / Deals / Shoppers / Verified icons row)
❌ "Popular [Store] Searches" pill/tag cloud
   Reason: no real links behind the pills = keyword stuffing = spam flag
❌ "Today's Top [Store] Deals" standalone list section
❌ Standalone "More Stores You'll Love" full-width section
   (see RELOCATE below — its content isn't deleted, just moved)

REPLACE:
🔁 Hero banner: parent's 3-slide auto-rotating carousel (activeSlide
   state, dots, arrows) → a single static image, no controls. Get a
   dedicated Cloudinary asset for this — don't reuse a parent slide.
   (Don't leave the old activeSlide state/interval code behind if
   you're only rendering one image — it's dead code.)
🔁 Breadcrumb: parent's is 3 plain-text levels (Home / Stores /
   [Store]). Location page needs 4, with the 3rd now a real link back
   to the parent page: Home / Stores / [Store] (link) / [State] (self).

RELOCATE (content survives, position changes):
📍 "How to Use a [Store] Coupon Code" steps — parent has this as
   plain prose lower on the page. Location moves it UP into a
   vertical-timeline sidebar card near the top of the coupon-cards
   section, and appends one state line after the last step:
   "[State] shoppers: your [tax rate] sales tax and delivery estimate
   to [State] ([N] days) will be shown at checkout before payment."
📍 "More Stores You'll Love" — instead of the deleted standalone
   section, add a compact 2-column grid card version in the same
   sidebar area as the relocated How-to-Use card.
📍 Sidebar "About [Store]" / "Top Categories" / "Popular Products"
   cards (these sit in the coupon-cards sidebar on parent) — on the
   location page these get redesigned into illustrated cards inside
   the SEO/prose section further down, not deleted.
📍 "Why Customers Choose [Store]" — same treatment: relocated into a
   sidebar icon-card, content left generic/unrewritten. Do not also
   write a separate state-specific version of this section elsewhere
   on the page (see PITFALLS below).
```

---

## STEP 3 — META TAGS (`page.tsx`)

```
TITLE FORMAT (max ~60 chars):
[Store] Coupon Codes [State] – [Top Deal] & [Benefit]

Must include: store name + state name + at least 1 real current deal
Never generic like "Best Deals in [State]"

DESCRIPTION FORMAT (max ~155 chars):
[State] shoppers: [N]+ verified [Store] codes live. Save up to [X]
[Deal] + free shipping over $[Y]. [State] delivery in [N] days.

Lead with "[State] shoppers:" — front-load the localization signal.
```

**Shipped example — Nuagewear New York:**
```
Title: "Nuagewear Coupon Codes New York – 39% OFF Bras & Free Ship"
Description: "New York shoppers: 12+ verified Nuagewear codes live.
Save up to 39% OFF Stay-Put Bra & NuBloom Bra + free shipping over
$60. NY delivery in 5-7 days."
```

Also update:
- `canonical`, OG, and Twitter URLs → point to the `/[state-slug]`
  path, not the parent.
- OG/Twitter title & description → mirror the meta title/description.
- `ItemList.numberOfItems` in the JSON-LD → set to the **actual**
  coupon count. (The parent page's schema is stale on this — don't
  copy that bug forward.)
- `ItemList.description` and each `Offer.description` in the JSON-LD →
  check these aren't leftover boilerplate from a different store
  template. Rewrite to match this store's actual category and mention
  the state.

---

## STEP 4 — SCHEMA (JSON-LD in `page.tsx`)

```
BreadcrumbList — 4 levels:
Home → Stores → [Store] (item = parent page URL) → [State] (item = self URL)

FAQPage — ONLY the 3 new state-specific Q&As from Step 7.
Do NOT include the generic FAQ items in this schema even though
they're still shown on the page.

DO NOT ADD:
❌ LocalBusiness schema
❌ Organization with aggregateRating
❌ Product schema
❌ Store schema
(These retailers have no physical presence — adding location-business
schema is a misuse red flag.)
```

---

## STEP 5 — REWRITE FRESH (0% copied from parent, state-specific)

**H1**: append the state, e.g. `"[Store]"` → `"[Store] Coupon Codes – [State]"`

**Intro paragraph** (right under the H1): rewrite completely.
```
RULES:
- Must feel written FOR this state's shoppers specifically
- Mention 2+ real cities naturally (not just the state capital every time)
- Naturally answer: do codes work here / how long is delivery / is tax added
- Do NOT start with "Are you a [State] shopper..."
- Do NOT copy any sentence from the parent's intro
```

**SEO-section lead paragraph** (the paragraph right after the big SEO
H2, before "About [Store]"): also rewritten fresh, same rules as
above — this is a *second* rewrite opportunity, distinct from the
hero intro, so don't reuse the same sentences between the two.

**State Shopper Tips** (new section, doesn't exist on parent):
```
Heading: "💡 [State] Shopper Tips"
Exactly 3 tips. Bold title + 1-2 sentence body each. Must not be
generic enough to paste unchanged onto another state's page.

Tip 1 — Climate/Product Fit: match store products to state lifestyle
Tip 2 — Ordering Timing: when to order for fastest delivery to this state
Tip 3 — State-Specific Saving: no-tax states → highlight the saving;
        high-tax states → free-shipping-threshold-beats-tax framing
```

**FAQ**:
```
REMOVE 2 generic questions:
- "Where can I find [Store] coupon codes?"
- "Is CouponsBit free to use?"
KEEP all other existing questions unchanged.
ADD 3 new state-specific questions:
Q1: Does [Store] ship to [State]? → name 3-4 real cities, delivery days, free shipping threshold
Q2: How long does [Store] delivery take to [State]? → delivery days, optional order-by-X-day note
Q3: Do [Store] coupon codes work for [State] orders? → confirm storewide, state tax auto-calculated
(IF no-tax state, add Q4 confirming no tax is charged.)
```
Note: on the shipped page the FAQ block also moved from the
left/prose column to the right sidebar column — that's a styling
choice, not a hard requirement, but keep it consistent if you're
matching the Nuagewear template closely.

---

## STEP 6 — EXTEND, DON'T REWRITE

**Offer summary table**: add one column, `"Ships To"` or
`"[State] Delivery"`, value = delivery days, same on every row. All
other cells stay identical to parent.

**"Why Use CouponsBit for [Store] Deals?"**: keep all existing
bullets, append 1-2 new ones, e.g. "[State] Shopper Friendly" and
"Verified for [State] Checkout".

---

## PITFALLS (found by verifying the shipped Nuagewear NY page)

1. **Keep exactly ONE "why choose us" block on the page.** On the
   shipped Nuagewear NY page this briefly existed as two blocks — a
   state-rewritten one and the original generic one restyled as icon
   cards — before being resolved down to one: the generic/relocated
   "Why Customers Choose Nuagewear" icon-card block, sidebar-only,
   content unchanged from parent. That's an acceptable final state —
   an NY-specific rewrite of this block is optional polish, not
   required — **as long as the rest of the page (intro paragraph,
   State Shopper Tips, 1-2 Popular Products lines, offer table column,
   FAQ) already carries enough state-specific signal on its own.**
   What matters is picking ONE version and shipping only that one —
   grep for the parent's bullet titles (or your rewritten titles) in
   the finished location page before shipping to make sure a second
   copy didn't get left behind during editing.
2. **Sidebar cards get moved into the SEO prose section, not deleted.**
   When parent has a sidebar card (About/Categories/Popular Products),
   check the location page's SEO section for a restyled version before
   assuming it needs to be recreated from scratch.
3. **Don't propagate stale schema from the parent.** Check
   `ItemList.numberOfItems` and `Offer.description` in the parent's
   JSON-LD before copying — they may already be wrong/mismatched on
   the parent and shouldn't be copied forward uncorrected.
4. There is **no separate 3-column "State Info Box"** in the shipped
   template (an earlier draft planned one). Tax/delivery info lives in
   the intro paragraph, the State Shopper Tips box, the offer table
   column, and the FAQ — don't add a redundant box on top of those.

---

## SPAM SAFETY FINAL CHECK

```
CONTENT:
[ ] Hero intro paragraph freshly written — 0% copied from parent
[ ] SEO-section lead paragraph also freshly written (different from hero intro)
[ ] Exactly ONE "why choose us" block exists on the page (generic-
    relocated or state-rewritten, either is fine) — check for a
    leftover duplicate before shipping (see Pitfall 1)
[ ] State tax rate confirmed (web search or reference table)
[ ] Delivery days realistic for this state
[ ] 3 FAQ questions all name the state directly
[ ] State Shopper Tips are state-specific, not generic
[ ] Popular Searches pills section removed
[ ] Read More/Read Less toggle removed, full content always visible
[ ] Star rating block and top stat block removed

META:
[ ] Title includes store + state + 1 real deal name, ≤60 chars
[ ] Description leads with "[State] shoppers:", ≤155 chars
[ ] Canonical/OG/Twitter URLs point to the state page, not parent

SCHEMA:
[ ] BreadcrumbList has correct 4-level structure, parent link included
[ ] FAQPage schema scoped to ONLY the 3 state-specific Q&As
[ ] No LocalBusiness/Organization-with-rating/Product/Store schema added
[ ] ItemList.numberOfItems matches actual coupon count
[ ] ItemList/Offer descriptions aren't leftover boilerplate from another store
```

---

## STATE TAX + DELIVERY REFERENCE

Use as a fallback if a web search is inconclusive; verify on
tax-rates.org before publishing when possible.

```
State              Tax Rate (approx)    Delivery Days
Alabama            ~9%                  6-8 days
Alaska             0% (no tax)          8-12 days ⚠️
Arizona            ~8.4%                5-7 days
Arkansas           ~9.1%                6-8 days
California         ~9.5%                4-6 days
Colorado           ~7.8%                5-7 days
Connecticut        6.35%                4-6 days
Delaware           0% (no tax)          5-7 days
Florida            ~7%                  5-7 days
Georgia            ~7.4%                5-7 days
Hawaii             4% (no local)        8-12 days ⚠️
Idaho              6%                   5-7 days
Illinois           ~8.8%                4-6 days
Indiana            7%                   5-7 days
Iowa               ~6.9%                5-7 days
Kansas             ~8.7%                5-7 days
Kentucky           6%                   5-7 days
Louisiana          ~9.5%                6-8 days
Maine              5.5%                 5-7 days
Maryland           6%                   4-6 days
Massachusetts      6.25%                4-6 days
Michigan           6%                   4-6 days
Minnesota          ~7.5%                5-7 days
Mississippi        7%                   6-8 days
Missouri           ~8.3%                5-7 days
Montana            0% (no tax)          6-8 days
Nebraska           ~6.9%                5-7 days
Nevada             ~8.2%                5-7 days
New Hampshire      0% (no tax)          4-6 days
New Jersey         6.625%               4-6 days
New Mexico         ~7.6%                5-7 days
New York           ~8.52%               5-7 days
North Carolina     ~7%                  5-7 days
North Dakota       ~6.9%                6-8 days
Ohio               ~7.2%                4-6 days
Oklahoma           ~8.9%                5-7 days
Oregon             0% (no tax)          5-7 days
Pennsylvania       ~6.3%                4-6 days
Rhode Island       7%                   4-6 days
South Carolina     ~7.5%                5-7 days
South Dakota       ~6.4%                6-8 days
Tennessee          ~9.5%                5-7 days
Texas              ~8.2%                5-7 days
Utah               ~7.2%                5-7 days
Vermont            ~6.3%                4-6 days
Virginia           ~5.8%                4-6 days
Washington         ~9.3%                5-6 days
West Virginia      6%                   5-7 days
Wisconsin          ~5.4%                5-7 days
Wyoming            ~5.4%                6-8 days
```

Special cases:
```
IF NO-TAX STATE (Oregon, Montana, New Hampshire, Delaware, Alaska):
  Add a line confirming no state sales tax applies.
IF REMOTE STATE (Hawaii, Alaska):
  Note delivery may run 8–12 days with possible extra remote-area fees.
```

---

## STORE-SPECIFIC NOTES

```
NUAGEWEAR — Women's Underwear
Active angle: yoga, gym, outdoor
Climate angle: mesh for warm, comfort for cold
Avoid: Medical/health claims

CARILOHA — Bamboo Bedding & Apparel
Hot states: cooling bamboo angle
Eco states (CA, OR, WA): sustainability angle
Cold states: warmth retention angle
Avoid: Specific temperature claims

DEERVALLEY — Bathroom & Kitchen Fixtures
Delivery note: Heavy items — 7-14 days possible
Hard water states (TX, AZ, FL): durability angle
New build states (TX, FL): new home angle
Avoid: Installation advice

FACTOR75 — Meal Delivery
CRITICAL: Verify delivery zip coverage FIRST (factor75.com/locations)
If state not covered: DO NOT create page
Active/fitness angle for all states

REOLINK — Security Cameras
Rural states: outdoor/wildlife camera angle
Urban states: home security angle
Avoid: Crime statistics claims

BALLBOYZ — Skincare/Acne
Humid states (FL, TX): humidity + acne angle
Dry states (AZ, NV): dryness + skincare angle
Cold states: winter skincare routine angle
Avoid: Medical claims, cure claims

LUMIBRICK — Building Block Sets
Gift angle for all states: birthday, holiday
Family states (UT, TX): large family angle
```

---

## QUICK COMMAND

```
"Use app/location/README.md as your instructions.
Create a location page for [STORE NAME] in [STATE NAME].
Parent page is at app/stores/[store-slug]/.
Search the web for [STATE] tax rate, delivery times, and top cities
(fall back to the Reference Table in the doc if search is inconclusive).
Output only the sections that need to change — copy Step 1's
verbatim blocks directly from parent without modification."
```

---

*CouponsBit Internal Guide — Location Pages, Physical Product Stores*
*Verified against: Nuagewear → New York (app/stores/nuage-coupon-code/new-york/)*
*Supersedes physical-product-store.md as the working reference*
