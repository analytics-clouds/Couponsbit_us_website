# CouponsBit — Location Page Content Instructions
## Store Type: Physical Product Stores
## Framework: Next.js (template already exists — only modify content)

> **How to use this file:**
> Claude Code ko do aur bolo:
> "Use physical-product-store.md as instructions.
>  Create a location page for [STORE NAME] in [STATE NAME].
>  Parent page content is in [parent file path].
>  Search the web for missing state data."

---

## WHAT CLAUDE CODE WILL DO

1. Read the parent store page content
2. Search web for state-specific data (tax, delivery, cities)
3. Modify ONLY the sections listed below
4. Keep everything else identical to parent page
5. Output final content ready to paste into existing template

---

## STEP 1 — SEARCH THE WEB FOR THIS DATA FIRST

Before making any changes, search and confirm:

```
Search 1: "[STATE NAME] state sales tax rate 2026"
→ Find: Combined rate (base + average local)
→ Example: "California avg combined rate ~9.5%"

Search 2: "USPS UPS standard delivery days to [STATE] from East Coast"
→ Find: Business days for standard shipping
→ Example: "5-7 business days to California"

Search 3: "largest cities in [STATE NAME] by population"
→ Find: Top 4-5 cities
→ Example: "Los Angeles, San Diego, San Francisco, Sacramento"

Search 4: "does [STORE NAME] ship to [STATE NAME]"
→ Confirm: Store ships to this state (critical for Factor75)
→ If not confirmed: Do NOT create page
```

---

## STEP 2 — META TAGS (Modify These)

```
TITLE FORMAT:
[Store Name] Coupon Codes for [State] Shoppers –
[Top Deal 1], [Top Deal 2] & More Savings 2026

RULES FOR TITLE:
- Must include store name + state name
- Must include at least 2 REAL current deal names
  (take from parent page deals — e.g. "39% OFF Stay-Put Bra")
- Never generic like "Best Deals in [State]"
- Max 60 characters

DESCRIPTION FORMAT (max 155 chars):
[State] shoppers: [N]+ verified [Store] coupon codes live.
Save up to [X%] OFF — [Deal 1], [Deal 2] + free shipping
over $[X]. Delivery to [State] in [N] business days.

CANONICAL URL:
https://www.couponsbit.us/stores/[store-slug]/[state-slug]
(state-slug = lowercase, spaces to hyphens, e.g. new-york)
```

**Example — Nuagewear California:**
```
Title: Nuagewear Coupon Codes for California Shoppers –
       39% OFF Bras, Free Shipping & 12+ Deals 2026

Description: California shoppers: 12+ verified Nuagewear
codes live. Save up to 39% OFF — Stay-Put Bra, NuBloom Bra
+ free shipping over $60. CA delivery in 5-7 business days.

Canonical: https://www.couponsbit.us/stores/nuagewear-coupon-code/california
```

---

## STEP 3 — HERO STORE DESCRIPTION (Modify This)

Find the store description text at top of parent page.

```
PARENT (keep as base, modify the ending):
"[Store] — [brand description]. Explore [N]+ verified deals,
save up to [X%] OFF on bestselling collections..."

ADD THIS AFTER (state-specific line):
"Shipping to [STATE NAME] in [DELIVERY DAYS] business days.
[STATE] sales tax ([TAX RATE]) auto-calculated at checkout."

EXAMPLE — Nuagewear California:
"Nuagewear — Shop premium lingerie, undergarments and
shapewear designed for everyday comfort and confidence.
Explore 12+ verified deals, save up to 39% OFF on
bestselling collections, and enjoy FREE worldwide shipping
on orders over $60. Shipping to California in 5–7 business
days. CA sales tax (~9.5%) auto-calculated at checkout."
```

---

## STEP 4 — ADD STATE INFO BOX (New Section — Above Coupon Cards)

This is the most important unique content block.
Insert this ABOVE the coupon cards section.

```
HEADING: Shopping [Store Name] in [State Name]

CONTENT BLOCK — 3 columns:

Column 1 — Delivery:
📦 Delivery to [State]
[DELIVERY DAYS] business days
via USPS / UPS

Column 2 — Sales Tax:
🧾 Sales Tax
[TAX RATE]
Auto-calculated at checkout
based on your [State] zip code

Column 3 — Free Shipping:
🚚 Free Shipping
Orders over $[THRESHOLD]
Applies storewide to [State] orders

SPECIAL NOTES (add only if applicable):

IF NO-TAX STATE (Oregon, Montana, New Hampshire,
Delaware, Alaska):
"✅ [State] has no state sales tax —
you pay only the listed price at checkout."

IF REMOTE STATE (Hawaii, Alaska):
"⚠️ [State] orders may take 8–12 business days.
Additional shipping fees may apply for remote areas."

IF CALIFORNIA:
"📋 California orders subject to Prop 65 regulations
where applicable."
```

**State Tax + Delivery Reference:**
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

> Always verify on tax-rates.org before publishing.

---

## STEP 5 — INTRO PARAGRAPH (Rewrite This — Most Important)

Find the first editorial paragraph on parent page.
DO NOT COPY IT. Write a completely fresh version.

```
RULES:
- 100-120 words
- Must answer these 3 questions naturally:
  1. Do coupon codes work for [State] orders?
  2. How long is delivery to [State]?
  3. Is sales tax added for [State] orders?
- Must mention at least 2 major [State] cities naturally
- Must feel written FOR [State] shoppers specifically
- Do NOT start with "Are you a [State] shopper..."
- Do NOT copy any sentence from parent page
- Honest: codes are storewide, no fake local exclusives

EXAMPLE — Nuagewear California:
"California shoppers ordering Nuagewear — whether in
Los Angeles, San Francisco, San Diego or Sacramento —
often ask the same questions before checkout: do the
promo codes actually work, how long will shipping take,
and what's the final price after California tax?
Here's the full picture: all 12 verified deals on this
page apply storewide, no California-specific code needed.
Standard delivery to California addresses takes 5–7
business days via USPS or UPS. California's combined
sales tax (averaging ~9.5% depending on your city)
is calculated automatically based on your zip code —
no surprise charges at checkout."
```

---

## STEP 6 — POPULAR PRODUCTS SECTION (Modify This)

Parent section heading: "Popular Products Available at [Store]"

```
KEEP: Section heading, product category names
KEEP: All product descriptions — unchanged

ADD: One state-relevant line under 2-3 products only.
     Pick products that match the state's climate/lifestyle.

RULES FOR ADDING STATE LINES:
- Max 1 sentence per product
- Must be factually true about the product
- Must relate to [State] climate, lifestyle or culture
- Do NOT add state line to every product — looks forced

CLIMATE GUIDE:
Warm states (FL, TX, CA, AZ, NV, HI):
→ Highlight: Mesh/breathable fabrics, lightweight styles
→ Add to: Performance Underwear, Seamless Briefs

Cold states (MN, WI, ME, VT, ND, MT, AK):
→ Highlight: Layering-friendly, all-day warmth comfort
→ Add to: Wireless Bras, Shaping Essentials

Active/fitness states (CA, CO, WA, OR):
→ Highlight: Yoga, gym, outdoor activity use
→ Add to: Yoga & Daily Wear, Performance Underwear

Fashion-forward states (NY, CA, IL):
→ Highlight: Seamless under-clothing, no visible lines
→ Add to: Seamless Briefs, Shaping Essentials

EXAMPLE — California (warm + active state):
Performance Underwear section — ADD:
"Popular with California gym-goers and outdoor
enthusiasts for workouts in warm weather."

Yoga & Daily Wear section — ADD:
"A favourite for California yoga studios and
Pilates classes — moves naturally with your body."

Seamless Briefs section — ADD:
"Perfect under California casual and athleisure wear
— no visible lines under leggings or fitted clothing."
```

---

## STEP 7 — OFFER TABLE (Modify This)

Find the deals table on parent page.
Add ONE new column: "[State] Delivery"

```
TABLE CHANGE:
Add column header: "[State] Delivery"
Add to every row: "[DELIVERY DAYS] business days"

EXAMPLE — California table:
| Offer | Discount | Eligibility | Key Conditions | Applicable On | CA Delivery |
|---|---|---|---|---|---|
| Free Worldwide Shipping | FREE | Orders over $60 | Worldwide | All products | 5-7 days |
| Commando Chic Shorts | $49 | All customers | Comfort fit | Shorts | 5-7 days |
(continue for all rows)
```

---

## STEP 8 — STATE SHOPPER TIPS (New Section)

Add after coupon cards, before offer table.
Heading: "💡 [State Name] Shopper Tips"

```
Write exactly 3 tips.

RULES:
- Each tip has a bold title + 1-2 sentence body
- Every tip must be specific to [State]
- Cannot copy-paste to another state unchanged
- No generic tips (those stay in parent page)

TIP CATEGORIES TO USE:
Tip 1 — Climate/Product Fit:
  Match store products to state weather/lifestyle

Tip 2 — Ordering Timing:
  When to order for fastest [State] delivery
  (e.g. "Order by Tuesday for weekend delivery to LA")

Tip 3 — State-Specific Saving:
  For no-tax states: highlight the saving
  For high-tax states: mention free shipping threshold
  saves more than it seems after tax

EXAMPLE — Nuagewear California:

Tip 1 — Perfect for California's Active Lifestyle:
"California's year-round warm weather makes Nuagewear's
breathable mesh range ideal — the NuAir Mesh styles
are popular for outdoor workouts, hiking and beach days."

Tip 2 — Order by Tuesday for Weekend Delivery:
"California orders via standard USPS typically arrive
in 5–7 business days. Placing your order by Tuesday
gives the best chance of delivery before the weekend."

Tip 3 — Free Shipping Saves More in California:
"With California's ~9.5% average sales tax, hitting
the free shipping threshold on orders over $60 saves
you both the shipping cost AND reduces your effective
per-item cost — worth bundling items to hit that total."
```

---

## STEP 9 — HOW TO USE COUPON CODE (Modify This)

Parent heading: "How to Use a [Store] Coupon Code"

```
KEEP: All 6 steps — identical to parent
KEEP: Step titles and descriptions

ONLY CHANGE: Step 3 if store rarely has public codes.

For stores with mostly auto-applied deals
(check parent page — if deals say "Get Deal" not
"Copy Code" then no code needed):

Step 3 CHANGE:
BEFORE: "Copy the Coupon Code — Copy the available
         promo code before visiting [Store]."

AFTER:  "Check for a Code — Most [Store] deals are
         auto-applied at checkout. If a code is shown,
         copy it. If not, simply click Get Deal and
         your discount applies automatically."

ADD after Step 6 — one [State]-specific line:
"[State] shoppers: your [TAX RATE] sales tax and
delivery estimate to [State] ([DELIVERY DAYS] days)
will be shown at checkout before payment."
```

---

## STEP 10 — WHY USE COUPONSBIT SECTION (Modify This)

Parent heading: "Why Use CouponsBit for [Store] Deals?"

```
KEEP: All existing bullet points — unchanged

ADD: One new bullet point at the end:

"[State] Shopper Friendly: All deals on this page
apply to [State] orders. Delivery times, sales tax
and shipping thresholds for [State] are listed
clearly — no guesswork before checkout."
```

---

## STEP 11 — FAQ SECTION (Replace 2 Questions)

Find FAQ section in parent page.

```
REMOVE these 2 generic questions:
- "Where can I find [Store] coupon codes?"
- "Is CouponsBit free to use?"

KEEP all other existing FAQ questions unchanged.

ADD these 3 state-specific questions:

Q1: Does [Store Name] ship to [State Name]?
A1: Yes — [Store] ships to all areas of [State],
including [City 1], [City 2], [City 3] and [City 4].
Standard delivery takes [DELIVERY DAYS] business days
via USPS or UPS. Free shipping is available on orders
over $[THRESHOLD].

Q2: How long does [Store Name] delivery take to [State]?
A2: Orders shipped to [State] typically arrive within
[DELIVERY DAYS] business days via standard USPS or UPS.
[If applicable: "Orders placed by Tuesday generally
arrive before the weekend for most [State] addresses."]

Q3: Do [Store Name] coupon codes work for [State] orders?
A3: Yes — all [Store] promo codes and deals on this
page apply storewide. No separate [State] code is
needed. [State] sales tax ([TAX RATE]) is calculated
automatically at checkout based on your zip code.

IF NO-TAX STATE — also add:
Q4: Do I pay sales tax on [Store] orders in [State]?
A4: No. [State] has no state sales tax. Your order
total at checkout reflects the listed price only —
no additional state tax is applied.
```

---

## STEP 12 — SCHEMA MARKUP (Add to Page)

Add both schemas as JSON-LD:

```json
SCHEMA 1 — BreadcrumbList:
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.couponsbit.us"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Stores",
      "item": "https://www.couponsbit.us/stores"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[STORE NAME]",
      "item": "https://www.couponsbit.us/stores/[store-slug]"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "[STATE NAME]",
      "item": "https://www.couponsbit.us/stores/[store-slug]/[state-slug]"
    }
  ]
}

SCHEMA 2 — FAQPage (use ONLY state-specific questions):
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does [Store] ship to [State]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer from Step 11 Q1]"
      }
    },
    {
      "@type": "Question",
      "name": "How long does [Store] delivery take to [State]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer from Step 11 Q2]"
      }
    },
    {
      "@type": "Question",
      "name": "Do [Store] coupon codes work for [State] orders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer from Step 11 Q3]"
      }
    }
  ]
}

DO NOT ADD:
❌ LocalBusiness schema
❌ Organization with aggregateRating
❌ Product schema
❌ Store schema
```

---

## STEP 13 — SECTIONS TO REMOVE COMPLETELY

```
REMOVE if present on parent page:
❌ Popular Searches pills/tags
   Reason: No real links = keyword stuffing = spam flag

❌ Generic "Save More on [Store]" bottom section
   Reason: Identical to parent page = duplicate content

KEEP everything else identical to parent.
```

---

## SPAM SAFETY FINAL CHECK

Before finishing, verify every point:

```
CONTENT:
[ ] Intro paragraph freshly written — 0% copied from parent
[ ] State tax rate searched and confirmed accurate
[ ] Delivery days realistic for this state
[ ] 3 FAQ questions all mention state name directly
[ ] State Shopper Tips are state-specific — not generic
[ ] Popular Searches section removed
[ ] No expired deals marked as "Verified Deal"

META:
[ ] Title includes store + state + 2 real deal names
[ ] Description under 155 characters
[ ] Canonical URL is state page (not parent URL)

SCHEMA:
[ ] BreadcrumbList has correct 4-level structure
[ ] FAQ schema uses state-specific questions only
[ ] No LocalBusiness schema added
[ ] All URLs in schema are correct

UNIQUE CONTENT CHECK:
[ ] State Info Box added above coupon cards        (NEW)
[ ] State Shopper Tips section added               (NEW)
[ ] Offer table has [State] Delivery column        (MODIFIED)
[ ] Popular Products has state climate lines       (MODIFIED)
[ ] Hero description has state delivery/tax line   (MODIFIED)
[ ] FAQ has 3 state-specific questions             (MODIFIED)
[ ] Why Use CouponsBit has state bullet added      (MODIFIED)
[ ] How to Use has state line after Step 6         (MODIFIED)
```

---

## QUICK COMMAND FOR CLAUDE CODE

```
"Use physical-product-store.md as your instructions.
Create a location page for [STORE NAME] in [STATE NAME].
Parent page content is in: stores/[store-slug]/[file].
Search the web for [STATE] tax rate and delivery times.
Output only the modified content sections — 
do not recreate sections that stay identical to parent."
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
CRITICAL: Verify delivery zip coverage FIRST
URL: factor75.com/locations
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

CARILOHA — Bamboo Clothing
Warm states: breathable fabric angle
Eco-conscious states: sustainable angle

LUMIBRICK — Building Block Sets
Gift angle for all states: birthday, holiday
Family states (UT, TX): large family angle
```

---

*CouponsBit Internal Guide v2.0*
*Physical Product Stores — Content Only (Template Already Set)*
*Next: ticket-entertainment-store.md*