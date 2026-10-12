# Admin Panel — Implementation Plan (v1)

Status: **Planning only — nothing in this document has been built yet.**
Decision made: **Option A** — a local code-generator admin panel that writes real `.tsx` files into the existing repo, commits locally, and is pushed to GitHub only when explicitly triggered. No database in v1. Designed so a database can replace local file storage later without reworking the UI or the publish flow.

---

## 1. Why Option A (recap)

The site has no database today. Every store and blog post is a hand-written Next.js route (`page.tsx` + a `_components/*.tsx` file), plus a few hardcoded index files (`lib/stores-data.ts`, `app/blog/page.tsx`, `app/sitemap.ts`, `app/sitemap/_components/SitemapPageContent.tsx`, `public/llms.txt`). Deploys happen by pushing to `origin/main` on GitHub (`analytics-clouds/Couponsbit_us_website`), which Vercel auto-builds.

Option A automates exactly the manual process already used to create every store and blog post this project has: fill in structured data → generate the two `.tsx` files from a template → update the index files → commit → push. It requires no new infrastructure and ships fast. Option B (real CMS + database + dynamic pages) would need every existing store's bespoke JSX (unique interlinks, unique FAQ wording, unique SEO sections) to be remodeled as structured data — a much larger project, deferred to a possible v2.

---

## 2. Where the admin panel lives

- A new route group inside the **same** Next.js app: `app/admin/**`, not a separate project. This lets it reuse the same Tailwind setup, the same `components/ui/*` primitives, and run on the same `next dev` server the rest of the site uses.
- **No auth/passcode in v1** — confirmed. Proper login gets added later, together with the database (v2).
- Since there's no passcode for now, the one safeguard I'll still build in by default: the `/admin` route only works when the app is running via `next dev` (i.e. a `process.env.NODE_ENV !== "production"` check at the top of every admin route/action). This means it simply won't exist/won't respond if the project is ever built for a real deploy, so there's no window where it's reachable on the live Vercel URL without a password. This costs nothing to use (no passcode to remember) and just prevents an accident later. Say so if you'd rather not have even this, but I'd recommend keeping it.
- Excluded from `sitemap.ts`, `robots.txt` crawl allowances, and `llms.txt`.

---

## 3. Core idea: the panel never writes "just files" — it writes structured data, *then* generates files from it

This is the piece that makes a future database swap painless. Every store/blog the panel creates is first saved as a plain JSON record. A **generator** function turns that JSON into the real `.tsx` files. The UI and the generator never talk to the filesystem directly except through one storage interface:

```ts
// lib/admin/repository.ts (interface only, shape, not final code)
interface ContentRepository {
  list(type: "store" | "blog"): Promise<ContentRecord[]>;
  get(type: "store" | "blog", slug: string): Promise<ContentRecord | null>;
  save(record: ContentRecord): Promise<void>;
  delete(type: "store" | "blog", slug: string): Promise<void>;
}
```

- **v1 implementation**: `FileRepository` — reads/writes JSON files under `admin/data/stores/*.json` and `admin/data/blogs/*.json`.
- **v2 (future)**: `DatabaseRepository` — same interface, backed by Postgres/Supabase. The admin UI, the form validation, and the `.tsx` generator do not change at all. Only this one file changes.

This is the direct answer to "isko aise design karna hai ki future mein database bhi connect kar paayein."

---

## 4. Data model

### 4.1 Store record

Mirrors exactly the fields every store page already has — nothing invented, nothing missing, matched against the real template used for every store built this session (e.g. Andie Swim, Gamma, JD Sports):

```json
{
  "type": "store",
  "slug": "andie-swim-discount-code",
  "status": "draft",            // draft | published
  "linked": false,              // whether it's wired into lib/stores-data.ts / sitemap / llms.txt
  "name": "Andie Swim",
  "h1": "Andie Swim Discount Code",
  "destinationUrl": "https://andie-swim.pxf.io/c/...",   // the "simple link" field
  "officialDomain": "https://www.andieswim.com",          // used for seller.url in schema
  "logo": "https://res.cloudinary.com/.../logo.webp",     // "store ke creative"
  "heroImage": "https://res.cloudinary.com/.../hero.webp",
  "category": "Fashion",
  "description": "Discover verified Andie Swim discount codes...",
  "metaTitle": "...",
  "metaDescription": "...",
  "offers": [
    { "label": "ONLY", "value": "$112", "title": "...", "desc": "...", "bullets": ["...", "...", "..."] }
  ],
  "sidebarDeals": [ { "heading": "...", "sub": "..." } ],   // "Today's Top Deals" widget, 4 items
  "topCategories": [ { "name": "One-Piece Swimsuits", "count": "15+", "href": "/categories/fashion" } ],
  "relatedStores": [ { "name": "Lulus", "logo": "...", "dealText": "Up To 80% OFF", "href": "/stores/lulus-promo-code" } ],
  "seoContent": {
    "intro": ["paragraph 1", "paragraph 2"],
    "sections": [ { "heading": "Find an Andie Swim Discount Code", "paragraphs": ["...", "..."] } ]
  },
  "faqs": [ { "q": "...", "a": "..." } ],
  "schema": {
    "datePublished": "2026-10-09",
    "dateModified": "2026-10-09"
  },
  "createdAt": "2026-10-09T10:00:00.000Z",
  "updatedAt": "2026-10-09T10:00:00.000Z"
}
```

### 4.2 Blog record

Same idea, matched to the real blog template (used for Halloween Shopping Guide 2026 and the 6 earlier posts):

```json
{
  "type": "blog",
  "slug": "halloween-shopping-guide-2026",
  "status": "draft",
  "linked": false,
  "title": "Halloween Shopping Guide 2026: Spooky Deals You Can't Miss",
  "metaTitle": "...",
  "metaDescription": "...",
  "slugImage": "https://res.cloudinary.com/.../hero.webp",
  "categoryBadge": "HALLOWEEN GUIDE",
  "readTime": "5 min read",
  "publishedDate": "2026-10-09",
  "pullQuote": "...",
  "sections": [
    { "id": "halloween-costume", "heading": "1. Find Your Perfect Halloween Costume", "paragraphs": ["...", "..."] }
  ],
  "faqs": [ { "q": "...", "a": "..." } ],
  "tags": ["CouponsBit", "Halloween Shopping", "..."],
  "continueReading": ["why-shop-through-coupon-and-cashback-websites", "how-to-use-gamsgo-discount-code", "holiday-shopping-calendar-2026"],
  "schema": { "datePublished": "2026-10-09", "dateModified": "2026-10-09" }
}
```

---

## 5. Panel layout / design

**Left sidebar** (fixed, ~280px): list of everything created through the panel so far, grouped by type (Stores / Blogs), each row showing name + a status pill (`Draft` / `Published` / `Linked`). A `+ New Store` and `+ New Blog Post` button pinned at the top of each group.

**Right side**: the editor for whatever is selected (or a blank form when "+ New" is clicked). Styled with the same visual language as the rest of the site — white cards, `#056bfa` accent blue, rounded-2xl corners, the same font stack — so it feels like part of the same product, not a bolted-on tool.

The right-side editor is a **single scrollable form split into clearly labeled sections** (not a multi-page wizard, to keep it simple to build and simple to use), in this exact order, matching what you described:

1. **Basics** — Store name, destination link ("simple link"), description.
2. **Offers** — a repeatable card editor, one row per offer, each with Label / Value / Title / Description / 3 bullet points — same shape as the live coupon cards, so what you see in the editor is what renders on the page.
3. **Creative** — logo URL + hero image URL. **Confirmed: paste a Cloudinary URL**, exactly how every store/blog has been built all session — no direct-upload integration in v1.
4. **Content** — the long-form SEO section (intro paragraphs + repeatable heading/paragraph blocks) that currently lives under "SEO Text Section" on every store page.
5. **Top Categories** — pick from the site's existing category list (Fashion, Electronics, Home, …), each with a count and link.
6. **More Stores You'll Love** — **confirmed as a choose/select UI, not free text**: a searchable multi-select list built from the *existing* `lib/stores-data.ts` entries only. The admin picks which already-real stores to feature (e.g. for Andie Swim: tick Lulus, Halara, Fashion Nova, …) — there is no way to type in a store that doesn't already exist on the site. This continues the exact discipline used manually all session (every related-store pick this session came from the real, already-linked store list). The deal-text line shown on each picked card is pulled automatically from that store's own `discount` field in `lib/stores-data.ts`, not re-typed.
7. **FAQs** — repeatable question/answer pairs.
8. **Schema** — the few fields that actually vary (datePublished, dateModified); everything else (the `@graph` shape, author, speakable selectors, breadcrumbs) is fixed boilerplate the generator always produces the same way, so it is not user-editable.

At the bottom: a **"Link this store to the main site?"** toggle (mirrors the "create only" vs "create and link" choice made manually all session) — when on, publishing also appends to `lib/stores-data.ts` and `public/llms.txt`, which automatically flows into `sitemap.xml` and the `/sitemap` HTML page because both already read from `lib/stores-data.ts`. When off, the pages exist and are visitable by direct URL but nowhere linked — exactly today's "create only, don't link anywhere" behavior.

The blog editor mirrors this layout with the same section order, swapped for blog fields (sections instead of offers, tags instead of related stores, continue-reading picker instead of top categories).

---

## 6. Publish flow — three distinct, explicit, user-triggered states

Confirmed: **Draft**, **Publish**, and **Push to GitHub** are three separate actions. Nothing moves to the next stage automatically — the admin decides when to move forward at each step.

1. **Draft (Save)** — writes the JSON record via the repository (`admin/data/stores/<slug>.json`), status `"draft"`. Nothing in `app/` changes yet. You can leave and come back anytime; it just sits in the left sidebar marked `Draft`.
2. **Publish** (an explicit button, only pressed when you're ready) — runs the generator, writes the real `app/stores/<slug>/page.tsx` + `_components/StoreCouponsContent.tsx` (or the blog equivalent), flips status to `"published"`. Because this is still `next dev`, you can immediately open `localhost:3000/stores/<slug>` and see the real rendered page — this satisfies "jab user click karega to created store dikhega."
   - If the **"Link this store to the main site?"** toggle is on, Publish also appends to `lib/stores-data.ts` + `public/llms.txt` (store) or `app/blog/page.tsx` + `app/sitemap.ts` + `app/sitemap/_components/SitemapPageContent.tsx` + `public/llms.txt` (blog) — same 2–4 files touched manually for every "link it" request this session.
   - Publish also runs `git add` + `git commit` locally with an auto-generated message (`Add store: Andie Swim`). **It does not push.**
3. **Push to GitHub** (a separate, distinct button, visible only after something has been published) — runs `git push`. This is the only step that touches the remote, and only runs when you explicitly click it. This matches your standing rule already in place for this whole project (no auto-push — only push when you explicitly ask) — it's not a new rule invented for the panel, it's the same one extended to automated commits.

A record can sit in Draft indefinitely, or be Published (and even re-Published after edits) without ever being pushed — the GitHub push is always a conscious, separate last step.

---

## 7. Scope boundary for v1 — existing content is not managed by this panel (confirmed)

The ~160 existing store pages and 7 existing blog posts were hand-built, each with bespoke interlinking, bespoke FAQ wording, and (on several stores) externally-added SEO blocks. They are **not** imported into the panel's JSON records in v1. The panel is for **new** stores/blogs going forward — confirmed. Editing something the panel itself created later is fully supported (its JSON record exists, so "edit" re-opens the form); editing a pre-existing hand-built page through the panel is out of scope, to avoid the exact "panel overwrites manual customization" risk flagged earlier. Migrating old pages into the managed system would be a separate, later task, added after the database phase.

---

## 8. Decisions — all confirmed

| # | Question | Decision |
|---|---|---|
| 1 | Auth for v1 | **None.** Added later together with the database (v2). Dev-only route guard used as a lightweight default safeguard in the meantime (Section 2). |
| 2 | "More Stores You'll Love" | **Choose/select from existing real stores only** — no free text, no creating new stores from inside this field (Section 5, item 6). |
| 3 | Image upload | **Paste a Cloudinary URL** — same as today, no direct-upload integration in v1 (Section 5, item 3). |
| 4 | Publish vs Push | **Two separate, explicit, user-triggered actions** — Publish (generate files + optional linking + local commit) and Push to GitHub (remote push), with Draft as the state before either (Section 6). |
| 5 | v1 scope | **New stores/blogs only** — the ~160 existing pages are not imported or managed by the panel (Section 7). |

---

## 9. Explicitly deferred to a later v2 (not part of this plan)

- Real database / dynamic rendering (Option B).
- Authentication / login (added alongside the database).
- Importing the 160 existing hand-built pages into the managed system.
- Multi-user accounts/roles.
- Direct image upload.
- Running the admin panel on a real server for a wider team (today's plan is: runs via `next dev` locally, like the rest of local development already does).
