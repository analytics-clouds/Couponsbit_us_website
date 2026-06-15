---
name: blogin
description: Write a complete, publish-ready blog post for couponsbit. Generates page.tsx + ArticleInteractive.tsx matching the exact site template. Apply all voice, humour, SEO, and stop-slop rules.
metadata:
  trigger: User provides a blog title and primary keyword
---

# blogin — Blog Post Generator

Write a complete, publish-ready blog post for couponsbit. Two files output every time: `page.tsx` and `_components/ArticleInteractive.tsx`.

---

## Step 0 — Read These Files First

Before writing a single word, read all of these in full:

| File | Purpose |
|------|---------|
| `references/voice.md` | How to write — rhythm, pronouns, contractions |
| `references/humour.md` | When and how to be funny |
| `references/opinions.md` | Which opinions to hold, backed by numbers |
| `references/stats.md` | The ONLY numbers allowed — never invent or round |
| `references/stories.md` | The ONLY anecdotes allowed — never invent new ones |
| `references/on-page-seo.md` | Every SEO requirement — every item must be satisfied |
| `references/stop-slop-main/references/phrases.md` | Phrases to kill before delivery |
| `references/stop-slop-main/references/structures.md` | Structural patterns to avoid |

---

## Step 1 — Validate the Keyword

Read `references/used-keywords.md`. If the primary keyword already appears under Active Primaries, stop. Tell the user it's taken and ask for a different keyword.

---

## Step 2 — Derive Post Metadata

From the user's title and primary keyword:

- **Slug**: lowercase, hyphens only, no stop words, under 60 chars. Example: `how-to-save-money-flipkart`
- **Category badge**: Pick one: `SHOPPING TIPS` / `COUPON GUIDES` / `DEAL ALERTS` / `SAVING STRATEGY`
- **Read time**: estimate word count ÷ 200, round to nearest minute
- **Published date**: use today's date
- **Number of tips**: 8–12 for listicles, 5–8 for guides
- **Sidebar stats**: 3 specific numbers from `references/stats.md` relevant to the post topic

---

## Step 3 — Write the Content

### Voice rules (from voice.md)
- Short sentences. Punchy. If a sentence exceeds 15 words, split it.
- Start every section with the value — what the reader gets first.
- Contractions always: "we'll" not "we will", "you're" not "you are".
- Active voice. Every sentence has a human subject doing something.
- "You" and "we" constantly. Personal pronouns close the distance.
- One idea per sentence. Never two "and"s in the same sentence.

### Humour rules (from humour.md)
- One relatable moment every 300–400 words in the body copy. Not every paragraph.
- 2–3 parenthetical asides total across the whole post. Examples:
  - `(Yes, we checked. It works.)`
  - `(The code is case-sensitive. Ask us how we know.)`
  - `(No, you cannot stack this with the bank offer. We tried.)`
- Sign-off sentence: must make the reader smile or click. Never "We hope you found this helpful."
- No exclamation marks anywhere. No emojis in body paragraphs.
- Punch at the system (expired codes, inflated MRPs, app-only tricks), never at the reader.
- One strong opinion per post, backed by a real number from stats.md.

### Stop-slop rules (from stop-slop-main)
Kill these before delivering:
- Every adverb ending in -ly: really, truly, genuinely, honestly, simply, actually, deeply, literally, fundamentally, inherently, inevitably
- All filler adverbs: "just", "really", "very"
- Throat-clearing openers: "Here's the thing:", "The truth is,", "It turns out", "The reality is"
- Em dashes — remove every single one, use commas or periods instead
- Binary contrasts: "Not because X. Because Y." — just say Y directly
- False agency: "the data tells us", "prices tend to drop" — name who does what
- Passive voice: find the actor, make them the subject
- Vague declaratives: "The implications are significant" — name the specific implication
- Sentences starting with What/When/Where/Which/Who/Why/How — restructure to lead with subject
- Three-item lists — use two or one
- Dramatic fragmentation: "Speed. Quality. Cost." — write complete sentences

### SEO rules (from on-page-seo.md)
- Primary keyword in H1, first 100 words, slug, title tag, meta description
- Title tag: 50–60 chars
- Meta description: 150–160 chars, includes keyword + benefit + soft CTA
- Exactly one H1
- H2 → H3 hierarchy, never skip levels
- 3–5 internal links in body copy with descriptive anchor text
- Breadcrumb: Home → Blog → [Post Title]
- Article schema (JSON-LD) in page.tsx

---

## Step 4 — Output Two Files

### FILE 1: `app/blog/[slug]/page.tsx`

```tsx
import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "[50–60 char title tag — primary keyword near start]",
  description: "[150–160 char meta: primary keyword + specific benefit + soft CTA]",
  openGraph: {
    type: "article",
    title: "[og:title — same as title or optimised for social]",
    description: "[og:description]",
    images: [{ url: "/[slug].webp", width: 1200, height: 630, alt: "[descriptive alt]" }],
    url: "/blog/[slug]",
  },
  twitter: {
    card: "summary_large_image",
    title: "[twitter:title]",
    description: "[twitter:description]",
    images: ["/[slug].webp"],
  },
};

export default function [PascalCaseSlug]Page() {
  return <ArticleInteractive />;
}
```

Also include Article JSON-LD schema as a `<script>` tag inside a `<head>` export or via the Next.js metadata `other` field:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[H1 title]",
  "description": "[meta description]",
  "datePublished": "[ISO date]",
  "author": { "@type": "Organization", "name": "Couponsbit" },
  "publisher": { "@type": "Organization", "name": "Couponsbit" }
}
```

---

### FILE 2: `app/blog/[slug]/_components/ArticleInteractive.tsx`

Use this exact component structure. Every section is required. Never remove a section. Never add sections not listed here.

```tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle,
  Copy,
  Share2,
  Bookmark,
  ArrowRight,
  Lightbulb,
  MessageCircle,
  Twitter,
  Facebook,
  Link as LinkIcon
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ArticleInteractive() {
  const [showToast, setShowToast] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // One entry per H2/tip section — feeds the sidebar TOC
  const sections = [
    { id: "[section-id-1]", title: "[Section Title 1]" },
    { id: "[section-id-2]", title: "[Section Title 2]" },
    // ... one per tip/section
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#19798d] selection:text-white">

      {/* ── Reading Progress Bar ── */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#19798d] z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      {/* ── Toast ── */}
      {showToast && (
        <div className="fixed top-[80px] right-4 z-[70] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-[12px] px-[18px] py-[12px] flex items-center gap-[10px] animate-in slide-in-from-right duration-300">
          <CheckCircle className="w-[18px] h-[18px] text-[#22c55e]" />
          <span className="text-black font-bold text-sm">Copied!</span>
        </div>
      )}

      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-[#f0f0f0] mt-24">
        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-3 flex items-center gap-2">
          <Link href="/" className="text-[#19798d] text-sm hover:underline">Home</Link>
          <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
          <Link href="/blog" className="text-[#19798d] text-sm hover:underline">Blog</Link>
          <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
          <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">[Short post title for breadcrumb]</span>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ════════════════════════════════
              LEFT COLUMN — Article
          ════════════════════════════════ */}
          <article className="w-full lg:w-[65%]">

            {/* ── Post Header ── */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#e8f6f8] text-[#19798d] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">[CATEGORY BADGE]</span>
                <div className="flex items-center gap-1.5 grayscale opacity-60">
                  <Clock className="w-[13px] h-[13px] text-gray-500" />
                  <span className="text-gray-500 text-[11px]">[X] min read</span>
                </div>
                <div className="flex items-center gap-1.5 grayscale opacity-60">
                  <Calendar className="w-[13px] h-[13px] text-gray-500" />
                  <span className="text-gray-500 text-[11px]">[Month DD, YYYY]</span>
                </div>
              </div>

              {/* H1 — primary keyword in first 5 words */}
              <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                [FULL H1 TITLE]
              </h1>

              {/* Hero image */}
              <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                <img
                  src="/[slug].webp"
                  alt="[Descriptive alt text with primary keyword]"
                  className="w-full h-full object-cover"
                  width={1200}
                  height={630}
                />
              </div>
              <p className="text-gray-400 text-[11px] text-center italic mt-2">
                [Image caption — one specific sentence]
              </p>

              {/* Pull quote */}
              <div className="mt-8 mb-8 border-l-4 border-[#19798d] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                <p className="text-[#19798d] font-medium text-lg italic leading-relaxed">
                  "[One sharp, data-backed pull quote — specific number or claim]"
                </p>
              </div>
            </header>

            {/* ── Article Body ── */}
            <div className="text-[#4b5563] text-base leading-[1.8] font-inter">

              {/*
                INTRO PARAGRAPH
                - Primary keyword in first sentence
                - Direct answer to what the reader wants
                - 2–3 sentences max
                - Value first, context second
              */}
              <p className="mb-5">
                [INTRO PARAGRAPH]
              </p>

              {/*
                WHY/CONTEXT H2
                - Sets up the problem or opportunity
                - id attribute matches sections[] entry
              */}
              <h2 id="[why-id]" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                <span className="w-1 h-7 bg-[#19798d] rounded mr-3 inline-block"></span>
                [Why/Context Heading]
              </h2>
              <p className="mb-5">
                [Context paragraph — 2–3 sentences. Sets up the problem or opportunity. Include one relatable shopping observation here if the post opener hasn't used one yet.]
              </p>

              {/*
                MAIN LIST H2
                - The numbered tips/strategies heading
              */}
              <h2 className="flex items-center text-black font-extrabold text-2xl mt-10 mb-6">
                <span className="w-1 h-7 bg-[#19798d] rounded mr-3 inline-block"></span>
                [X Tips/Ways/Strategies Heading]
              </h2>

              {/*
                ── TIP BLOCK (repeat for each tip, numbered 1..N) ──
                Rules:
                - Each tip: 2–4 sentences. Specific. Real numbers where available.
                - Pro Tip box: add to roughly 40% of tips — not every one, not fewer than 2
                - Internal link: weave 3–5 into tip body copy with descriptive anchor text
                - Humour parenthetical: one per ~300–400 words across all tips
              */}
              <div id="tip-1" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#19798d] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-[#19798d] font-bold text-xl mb-3">[Tip 1 Title]</h3>
                  <p className="text-[#4b5563] mb-4">
                    [Tip 1 body — 2–4 sentences. Specific and actionable. Real number from stats.md if relevant.]
                  </p>
                  {/* Pro Tip box — include on ~40% of tips */}
                  <div className="bg-[#e8f6f8] border-l-4 border-[#19798d] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                    <span className="font-bold text-[#19798d] text-sm flex items-center gap-1.5 mb-1.5 uppercase tracking-wide not-italic">
                      <Lightbulb className="w-4 h-4" /> Pro Tip:
                    </span>
                    <p className="text-[#4b5563] text-sm">
                      [One specific, insider-level tip sentence]
                    </p>
                  </div>
                </div>
              </div>

              {/* ... repeat TIP BLOCK for each tip ... */}

              {/*
                SUMMARY H2
                - How much can you save / what you get
                - Include a real rupee/dollar saving range from stats.md
              */}
              <h2 className="flex items-center text-black font-extrabold text-2xl mt-12 mb-4">
                <span className="w-1 h-7 bg-[#19798d] rounded mr-3 inline-block"></span>
                [How Much Can You Save / Summary heading]
              </h2>
              <p className="mb-5">
                [Summary paragraph — 2–3 sentences. Real saving amounts. From stats.md.]
              </p>

              {/*
                CTA H2
                - Actionable sign-off
                - Sign-off sentence must make reader smile or click
                - Never "We hope you found this helpful"
              */}
              <h2 className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                <span className="w-1 h-7 bg-[#19798d] rounded mr-3 inline-block"></span>
                [Start/Action heading]
              </h2>
              <p className="mb-5">
                [Sign-off — 2 sentences. Actionable. Last sentence must land — make the reader smile or click.]
              </p>

            </div>

            {/* ── Tags ── */}
            <div className="mt-12 flex flex-wrap items-center gap-2">
              <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
              {[
                "[Tag 1]", "[Tag 2]", "[Tag 3]", "[Tag 4]", "[Tag 5]"
              ].map((tag, i) => (
                <span key={i} className="bg-[#f5f5f5] text-[#4b5563] text-[11px] font-medium rounded-full px-4 py-1.5 hover:bg-[#e8f6f8] hover:text-[#19798d] transition-colors duration-300 cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>

            {/* ── Share ── */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-[#6b7280] font-medium text-sm mr-1">Share this article:</span>
              <button className="bg-[#25D366] text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                <MessageCircle className="w-4 h-4 fill-white" /> Share on WhatsApp
              </button>
              <button className="bg-black text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                <Twitter className="w-3.5 h-3.5 fill-white" /> Share on Twitter
              </button>
              <button className="bg-[#1877F2] text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                <Facebook className="w-4 h-4 fill-white" /> Share on Facebook
              </button>
              <button onClick={() => copyToClipboard(window.location.href)} className="bg-[#f5f5f5] text-[#374151] rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:bg-[#e8f6f8] transition-all">
                <LinkIcon className="w-3.5 h-3.5" /> Copy Link
              </button>
            </div>

            {/* ── Related Posts (always 2 cards) ── */}
            <div className="mt-14">
              <h3 className="text-black font-extrabold text-xl mb-6 flex items-center gap-2">
                <span>📖</span> You Might Also Like
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Link href="/blog/amazon-savings-guide" className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex hover:shadow-md hover:border-[#19798d] transition-all duration-300 cursor-pointer group">
                  <div className="w-[100px] shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=200&h=120"
                      alt="Bank card offers India"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <span className="bg-[#e8f6f8] text-[#19798d] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Coupon Guides</span>
                    <h5 className="text-black font-bold text-sm line-clamp-2 mt-2 leading-tight">How to Stack Coupons and Bank Offers for Maximum Savings</h5>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-gray-400 text-[10px]">May 10, 2026</span>
                      <span className="text-[#19798d] text-[10px] font-bold">Read →</span>
                    </div>
                  </div>
                </Link>
                <Link href="/blog" className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex hover:shadow-md hover:border-[#19798d] transition-all duration-300 cursor-pointer group">
                  <div className="w-[100px] shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=200&h=120"
                      alt="Flipkart sale tips"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <span className="bg-[#e8f6f8] text-[#19798d] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Shopping Tips</span>
                    <h5 className="text-black font-bold text-sm line-clamp-2 mt-2 leading-tight">Flipkart Big Billion Day — Complete Survival Guide 2026</h5>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-gray-400 text-[10px]">May 8, 2026</span>
                      <span className="text-[#19798d] text-[10px] font-bold">Read →</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

          </article>

          {/* ════════════════════════════════
              RIGHT SIDEBAR
          ════════════════════════════════ */}
          <aside className="w-full lg:w-[35%] lg:sticky lg:top-24 h-fit">

            {/* ── By the Numbers (3 stats from stats.md relevant to this post) ── */}
            <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mb-5">
              <h4 className="text-black font-bold text-base mb-5">By the Numbers</h4>
              <div className="space-y-5">
                {[
                  { value: "[Stat value 1]", label: "[Short label — one phrase from stats.md]" },
                  { value: "[Stat value 2]", label: "[Short label]" },
                  { value: "[Stat value 3]", label: "[Short label]" },
                ].map((stat, i) => (
                  <div key={i} className={`flex items-baseline gap-3 pb-4 ${i !== 2 ? "border-b border-[#f0f0f0]" : ""}`}>
                    <span className="text-[#19798d] font-black text-3xl">{stat.value}</span>
                    <span className="text-gray-500 text-[11px] tracking-tight">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Email CTA ── */}
            <div className="bg-gradient-to-br from-[#19798d] to-[#0f5a6b] rounded-2xl p-7 mb-5 shadow-lg relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="text-center relative z-10">
                <span className="text-3xl block mb-3">[Relevant emoji]</span>
                <h4 className="text-white font-bold text-base leading-tight mb-2">[CTA headline — one short question relevant to this post's topic]</h4>
                <p className="text-white/80 text-[11px] px-2 mb-5">[One sentence. Specific benefit. E.g. "Get verified [store] coupons before they expire."]</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white rounded-xl px-4 py-3 text-sm border-none outline-none focus:ring-2 focus:ring-[#FF9900]"
                  />
                  <button className="w-full bg-white text-[#19798d] rounded-xl px-4 py-3 font-bold text-sm hover:shadow-xl transition-all active:scale-95">
                    Get Deal Alerts
                  </button>
                </div>
                <p className="text-white/60 text-[10px] mt-4">No spam. Unsubscribe anytime.</p>
              </div>
            </div>

            {/* ── Top Coupons (4 codes, relevant to post topic) ── */}
            <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mb-5">
              <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                <span>🔥</span> [Topic] Top Coupons Now
              </h4>
              <div className="space-y-4">
                {[
                  { title: "[Coupon title 1]", code: "[CODE1]" },
                  { title: "[Coupon title 2]", code: "[CODE2]" },
                  { title: "[Coupon title 3]", code: "[CODE3]" },
                  { title: "[Coupon title 4]", code: "[CODE4]" },
                ].map((coupon, i) => (
                  <div key={i} className={`pb-4 ${i !== 3 ? "border-b border-[#f0f0f0]" : ""}`}>
                    <p className="text-[#374151] text-[13px] font-semibold truncate mb-2">{coupon.title}</p>
                    <div className="flex items-center justify-between bg-[#e8f6f8] rounded-xl px-4 py-2.5 border border-dashed border-[#19798d]">
                      <span className="text-[#19798d] font-mono font-black text-[12px]">{coupon.code}</span>
                      <Copy
                        className="w-3.5 h-3.5 text-[#19798d] cursor-pointer hover:scale-110 active:scale-90 transition-transform"
                        onClick={() => copyToClipboard(coupon.code)}
                      />
                    </div>
                    <button className="text-[#19798d] text-[10px] font-bold mt-2 hover:underline tracking-wide uppercase">Show Code</button>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Table of Contents ── */}
            <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
              <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                <span>📋</span> Table of Contents
              </h4>
              <div className="space-y-1">
                {sections.map((section, i) => (
                  <a
                    key={i}
                    href={`#${section.id}`}
                    className={`flex items-start gap-3 py-2.5 group ${i !== sections.length - 1 ? "border-b border-[#f5f5f5]" : ""}`}
                  >
                    <span className="text-[#19798d] font-bold text-[11px] mt-1 shrink-0">{(i + 1).toString().padStart(2, "0")}</span>
                    <span className="text-gray-600 text-[13px] group-hover:text-[#19798d] transition-colors leading-[1.4]">{section.title}</span>
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* ── Newsletter Strip ── */}
      <section className="bg-[#19798d] py-14">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-white font-extrabold text-3xl md:text-4xl text-center md:text-left">
              📬 [Newsletter headline — topic-specific, not generic]
            </h2>
            <p className="text-white/70 text-lg max-w-[500px] text-center md:text-left">
              Join 50,000+ shoppers who receive hand-picked deals every morning.
            </p>
          </div>
          <div className="bg-white/10 p-2 rounded-2xl backdrop-blur-sm w-full max-w-[500px]">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white border-2 border-transparent rounded-xl px-5 py-3 outline-none focus:border-[#FF9900] shadow-md text-black font-medium"
              />
              <button className="bg-[#FF9900] hover:bg-[#e68a00] text-black font-black px-8 py-3 rounded-xl transition-all shadow-lg active:scale-95 whitespace-nowrap">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
```

---

## Step 5 — Stop-Slop Score

After writing, score the article body copy on all 5 dimensions (1–10 each):

| Dimension | Question | Score |
|-----------|----------|-------|
| Directness | Statements or announcements? | /10 |
| Rhythm | Varied sentence lengths? | /10 |
| Trust | No hand-holding or softening? | /10 |
| Authenticity | Sounds like a human deal-hunter? | /10 |
| Density | Nothing cuttable? | /10 |
| **Total** | Must be 40+/50 to ship | **/50** |

If total is below 40, revise before delivering.

---

## Step 6 — Update used-keywords.md

After writing both files, add the primary keyword to `references/used-keywords.md` under Active Primaries using this format:

```
### [primary keyword] → /blog/[slug]

- **Primary source:** [Ahrefs / Semrush / GKP / provided by user]
- **Used on page:** /blog/[slug]/
- **Cluster:**

| Secondary keyword | Source |
|---|---|
| [secondary 1] | derived |
| [secondary 2] | derived |
```

---

## Step 7 — Confirm Delivery

Report back:
1. Files written: `app/blog/[slug]/page.tsx` and `app/blog/[slug]/_components/ArticleInteractive.tsx`
2. Stop-slop score: [X]/50
3. Primary keyword added to used-keywords.md: yes
4. SEO checklist: list any items from on-page-seo.md that need manual action (hero image file, author byline, etc.)
