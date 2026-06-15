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
  Link as LinkIcon,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ArticleInteractive() {
  const [showToast, setShowToast] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
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

  const sections = [
    { id: "why-codes-fail", title: "Why Amazon Shoppers Overpay" },
    { id: "find-codes", title: "Find Verified Codes First" },
    { id: "apply-checkout", title: "How to Apply a Code at Checkout" },
    { id: "stack-bank", title: "Stack with Bank Card Offers" },
    { id: "amazon-pay", title: "Use Amazon Pay for Extra Cashback" },
    { id: "sale-events", title: "Shop During Sale Events" },
    { id: "best-categories", title: "Best Categories for Codes" },
    { id: "spot-fake", title: "Spot an Expired or Fake Code" },
    { id: "exclusions", title: "When Codes Don't Apply" },
    { id: "how-much", title: "How Much Can You Save?" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#19798d] selection:text-white">

      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#19798d] z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      {/* Toast */}
      {showToast && (
        <div className="fixed top-[80px] right-4 z-[70] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-[12px] px-[18px] py-[12px] flex items-center gap-[10px] animate-in slide-in-from-right duration-300">
          <CheckCircle className="w-[18px] h-[18px] text-[#22c55e]" />
          <span className="text-black font-bold text-sm">Copied!</span>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0] mt-24">
        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-3 flex items-center gap-2">
          <Link href="/" className="text-[#19798d] text-sm hover:underline">
            Home
          </Link>
          <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
          <Link
            href="/blog"
            className="text-[#19798d] text-sm hover:underline"
          >
            Blog
          </Link>
          <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
          <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">
            Amazon India Coupon Codes
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT COLUMN — Article */}
          <article className="w-full lg:w-[65%]">

            {/* Post Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#e8f6f8] text-[#19798d] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">
                  COUPON GUIDES
                </span>
                <div className="flex items-center gap-1.5 grayscale opacity-60">
                  <Clock className="w-[13px] h-[13px] text-gray-500" />
                  <span className="text-gray-500 text-[11px]">8 min read</span>
                </div>
                <div className="flex items-center gap-1.5 grayscale opacity-60">
                  <Calendar className="w-[13px] h-[13px] text-gray-500" />
                  <span className="text-gray-500 text-[11px]">
                    June 09, 2026
                  </span>
                </div>
              </div>

              <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                How to Use Amazon India Coupon Codes to Get Extra Discounts
              </h1>

              <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                <img
                  src="/amazon-india-coupon-codes.webp"
                  alt="Amazon India coupon codes guide for extra discounts"
                  className="w-full h-full object-cover"
                  width={1200}
                  height={630}
                />
              </div>
              <p className="text-gray-400 text-[11px] text-center italic mt-2">
                Verified codes plus bank card offers can cut your Amazon bill in half
              </p>

              <div className="mt-8 mb-8 border-l-4 border-[#19798d] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                <p className="text-[#19798d] font-medium text-lg italic leading-relaxed">
                  "Shoppers who stack a verified Amazon India coupon code with a bank card offer and Amazon Pay cashback land between 35–80% off the original price — on the same order."
                </p>
              </div>
            </header>

            {/* Article Body */}
            <div className="text-[#4b5563] text-base leading-[1.8] font-inter">

              <p className="mb-5">
                Amazon India coupon codes work at checkout — paste the code, hit apply, and the discount drops before you pay. The catch is finding codes that still work. Most sites never clean up expired listings, so you try four codes, fail on all four, and pay full price. This guide covers where to find verified Amazon India coupon codes, how to apply them, and how to stack them with bank offers for the biggest discount on every order.
              </p>

              {/* Why section */}
              <h2
                id="why-codes-fail"
                className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4"
              >
                <span className="w-1 h-7 bg-[#19798d] rounded mr-3 inline-block"></span>
                Why Amazon Shoppers Overpay
              </h2>
              <p className="mb-5">
                Most Amazon shoppers skip coupon codes. They exist across fashion, electronics, and grocery — but search results are full of listings that haven't been updated since last year. Coupon sites earn traffic whether their codes work or not, so they list 47 codes per brand and never check which ones are dead.{" "}
                <Link
                  href="/blog/amazon-savings-guide"
                  className="text-[#19798d] font-semibold hover:underline"
                >
                  Verified codes beat 47 dead ones every time
                </Link>
                . That's the only meaningful difference between a useful coupon site and a directory of disappointments.
              </p>

              {/* Main section */}
              <h2 className="flex items-center text-black font-extrabold text-2xl mt-10 mb-6">
                <span className="w-1 h-7 bg-[#19798d] rounded mr-3 inline-block"></span>
                8 Ways to Use Amazon India Coupon Codes Right
              </h2>

              {/* Tip 1 */}
              <div id="find-codes" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#19798d] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-[#19798d] font-bold text-xl mb-3">
                    Find Verified Codes First
                  </h3>
                  <p className="text-[#4b5563] mb-4">
                    Before you open your Amazon cart, check{" "}
                    <Link
                      href="/blog"
                      className="text-[#19798d] font-semibold hover:underline"
                    >
                      Couponsbit
                    </Link>{" "}
                    for the latest Amazon India codes. Our team updates listings every day and removes expired codes the same day they stop working. The 92.4% success rate means almost every code you copy and paste will apply at checkout. We test them so you don't waste four tries finding out a code died in March.
                  </p>
                  <div className="bg-[#e8f6f8] border-l-4 border-[#19798d] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                    <span className="font-bold text-[#19798d] text-sm flex items-center gap-1.5 mb-1.5 uppercase tracking-wide not-italic">
                      <Lightbulb className="w-4 h-4" /> Pro Tip:
                    </span>
                    <p className="text-[#4b5563] text-sm">
                      Filter by category. Electronics codes like{" "}
                      <span className="bg-[#fff3e0] text-[#e65100] rounded px-1.5 py-0.5 font-semibold not-italic">
                        ELEC50
                      </span>{" "}
                      give bigger discounts than generic sitewide codes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip 2 */}
              <div id="apply-checkout" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#19798d] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-[#19798d] font-bold text-xl mb-3">
                    Apply the Code at Checkout — Not on the Product Page
                  </h3>
                  <p className="text-[#4b5563] mb-4">
                    In your Amazon cart, look for "Apply coupon code" just above
                    the order total. Paste the code there — not in the search bar,
                    not in the product page field. On mobile, Amazon tucks this
                    field below the address section. Scroll down if you can't find
                    it. (The code is case-sensitive. Ask us how we know.)
                  </p>
                  <div className="bg-[#e8f6f8] border-l-4 border-[#19798d] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                    <span className="font-bold text-[#19798d] text-sm flex items-center gap-1.5 mb-1.5 uppercase tracking-wide not-italic">
                      <Lightbulb className="w-4 h-4" /> Pro Tip:
                    </span>
                    <p className="text-[#4b5563] text-sm">
                      Apply the code before selecting a payment method. Some
                      order totals recalculate when you switch payment options,
                      and the field resets.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip 3 */}
              <div id="stack-bank" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#19798d] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-[#19798d] font-bold text-xl mb-3">
                    Stack with Bank Card Offers
                  </h3>
                  <p className="text-[#4b5563] mb-4">
                    After your code applies, check the payment page for bank card
                    offers. HDFC, SBI, and ICICI cards regularly give 10% instant
                    cashback on Amazon India. A ₹5,000 order with a 15% off code
                    and a 10% bank offer lands at ₹3,825. That's ₹1,175 saved
                    with two fields filled in. Most shoppers use one layer. Smart
                    shoppers use three.
                  </p>
                  <div className="bg-[#e8f6f8] border-l-4 border-[#19798d] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                    <span className="font-bold text-[#19798d] text-sm flex items-center gap-1.5 mb-1.5 uppercase tracking-wide not-italic">
                      <Lightbulb className="w-4 h-4" /> Pro Tip:
                    </span>
                    <p className="text-[#4b5563] text-sm">
                      The bank offer appears under "Payment Offers" at checkout.
                      It applies when you select the eligible card — no extra
                      code needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip 4 */}
              <div id="amazon-pay" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#19798d] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-[#19798d] font-bold text-xl mb-3">
                    Use Amazon Pay for Extra Cashback
                  </h3>
                  <p className="text-[#4b5563] mb-4">
                    Load money into your Amazon Pay balance and pay with it at
                    checkout. Amazon runs recurring Amazon Pay promotions giving
                    5–10% additional cashback on eligible orders. This layer is
                    separate from both your coupon code and the bank card offer.
                    All three stack on the same order. Combined, that's where the
                    35–80% range comes from.
                  </p>
                </div>
              </div>

              {/* Tip 5 */}
              <div id="sale-events" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#19798d] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-[#19798d] font-bold text-xl mb-3">
                    Use Codes During Sale Events
                  </h3>
                  <p className="text-[#4b5563] mb-4">
                    Amazon India's Great Indian Festival runs every October.
                    The Summer Sale runs April-May. The Republic Day Sale runs
                    January. A verified coupon code on top of a sale price,
                    plus a bank card offer, can push your total discount to
                    40–70%. The first four hours of any sale event carry the
                    deepest discounts on the most popular items. After that,
                    sold-out notices pile up fast.
                  </p>
                  <div className="bg-[#e8f6f8] border-l-4 border-[#19798d] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                    <span className="font-bold text-[#19798d] text-sm flex items-center gap-1.5 mb-1.5 uppercase tracking-wide not-italic">
                      <Lightbulb className="w-4 h-4" /> Pro Tip:
                    </span>
                    <p className="text-[#4b5563] text-sm">
                      Set a reminder the night before the Great Indian Festival,
                      not the morning of. The phone you want at ₹18,999 can be
                      gone by 12:08am.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip 6 */}
              <div id="best-categories" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#19798d] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-[#19798d] font-bold text-xl mb-3">
                    Know Which Categories Give the Best Codes
                  </h3>
                  <p className="text-[#4b5563] mb-4">
                    Fashion and accessories carry the highest coupon availability
                    on Amazon India. Electronics follow. Pantry items, gift cards,
                    and Amazon subscription services typically exclude coupon codes
                    entirely. If a code refuses to apply to a specific product,
                    check the code's terms for category exclusions before
                    assuming the code is broken.
                  </p>
                </div>
              </div>

              {/* Tip 7 */}
              <div id="spot-fake" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#19798d] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  7
                </div>
                <div className="flex-1">
                  <h3 className="text-[#19798d] font-bold text-xl mb-3">
                    Spot an Expired or Fake Code
                  </h3>
                  <p className="text-[#4b5563] mb-4">
                    Three things tell you a code is dead: it says "coupon
                    applied" then vanishes at the payment page, the discount
                    line shows ₹0, or Amazon returns "This promotion has
                    expired." Any of these means the code is gone. Go back to
                    Couponsbit and grab the next verified one on the list.
                    (No, trying it in all caps won't bring it back. We've
                    checked.)
                  </p>
                </div>
              </div>

              {/* Tip 8 */}
              <div id="exclusions" className="flex gap-4 mb-10">
                <div className="w-8 h-8 bg-[#19798d] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  8
                </div>
                <div className="flex-1">
                  <h3 className="text-[#19798d] font-bold text-xl mb-3">
                    When Codes Legitimately Don't Apply
                  </h3>
                  <p className="text-[#4b5563] mb-4">
                    Some Amazon India coupon codes exclude third-party seller
                    products (only FBA items qualify), items already on Lightning
                    Deal pricing, Subscribe &amp; Save orders, and purchases
                    below the minimum order value. The exclusions are on the
                    code's terms page. Read them before checkout and you won't
                    find out at the payment screen.
                  </p>
                </div>
              </div>

              {/* Summary */}
              <h2
                id="how-much"
                className="flex items-center text-black font-extrabold text-2xl mt-12 mb-4"
              >
                <span className="w-1 h-7 bg-[#19798d] rounded mr-3 inline-block"></span>
                How Much Can You Save?
              </h2>
              <p className="mb-5">
                Shoppers who stack a verified coupon code with a bank card offer
                and Amazon Pay cashback land between 35–80% off the original
                price consistently. One shopper buying a ₹5,499 pair of
                headphones during the Great Indian Festival applied an ICICI
                bank card offer, used a Couponsbit-verified code worth ₹300
                off, and had a cashback app running in the background. Final
                checkout: ₹2,900. That's less than half the listed price — on a
                purchase they were going to make anyway.
              </p>

              {/* Sign-off */}
              <h2 className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                <span className="w-1 h-7 bg-[#19798d] rounded mr-3 inline-block"></span>
                Start Saving on Your Next Amazon Order
              </h2>
              <p className="mb-5">
                Copy a code from{" "}
                <Link
                  href="/blog"
                  className="text-[#19798d] font-semibold hover:underline"
                >
                  Couponsbit
                </Link>
                , apply it at checkout, and add your bank card offer. That's
                ₹1,000 you didn't have to spend. Your cart will get over it.
              </p>

            </div>

            {/* Tags */}
            <div className="mt-12 flex flex-wrap items-center gap-2">
              <span className="text-[#6b7280] font-medium text-sm mr-1">
                Tags:
              </span>
              {[
                "Amazon Deals",
                "Coupon Codes",
                "Cashback",
                "Bank Offers",
                "Online Shopping",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#f5f5f5] text-[#4b5563] text-[11px] font-medium rounded-full px-4 py-1.5 hover:bg-[#e8f6f8] hover:text-[#19798d] transition-colors duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-[#6b7280] font-medium text-sm mr-1">
                Share this article:
              </span>
              <button className="bg-[#25D366] text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                <MessageCircle className="w-4 h-4 fill-white" /> Share on
                WhatsApp
              </button>
              <button className="bg-black text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                <Twitter className="w-3.5 h-3.5 fill-white" /> Share on Twitter
              </button>
              <button className="bg-[#1877F2] text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                <Facebook className="w-4 h-4 fill-white" /> Share on Facebook
              </button>
              <button
                onClick={() => copyToClipboard(window.location.href)}
                className="bg-[#f5f5f5] text-[#374151] rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:bg-[#e8f6f8] transition-all"
              >
                <LinkIcon className="w-3.5 h-3.5" /> Copy Link
              </button>
            </div>

            {/* Related Posts */}
            <div className="mt-14">
              <h3 className="text-black font-extrabold text-xl mb-6 flex items-center gap-2">
                <span>📖</span> You Might Also Like
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Link
                  href="/blog/amazon-savings-guide"
                  className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex hover:shadow-md hover:border-[#19798d] transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-[100px] shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=200&h=120"
                      alt="Amazon savings guide India"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <span className="bg-[#e8f6f8] text-[#19798d] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Shopping Tips
                    </span>
                    <h5 className="text-black font-bold text-sm line-clamp-2 mt-2 leading-tight">
                      10 Smart Ways to Save Money on Amazon India in 2026
                    </h5>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-gray-400 text-[10px]">
                        May 12, 2026
                      </span>
                      <span className="text-[#19798d] text-[10px] font-bold">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/blog"
                  className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex hover:shadow-md hover:border-[#19798d] transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-[100px] shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=200&h=120"
                      alt="Online shopping tips India"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <span className="bg-[#e8f6f8] text-[#19798d] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Coupon Guides
                    </span>
                    <h5 className="text-black font-bold text-sm line-clamp-2 mt-2 leading-tight">
                      How to Stack Coupons and Bank Offers for Maximum Savings
                    </h5>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-gray-400 text-[10px]">
                        May 10, 2026
                      </span>
                      <span className="text-[#19798d] text-[10px] font-bold">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="w-full lg:w-[35%] lg:sticky lg:top-24 h-fit">

            {/* By the Numbers */}
            <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mb-5">
              <h4 className="text-black font-bold text-base mb-5">
                By the Numbers
              </h4>
              <div className="space-y-5">
                {[
                  {
                    value: "92.4%",
                    label: "Coupon success rate on verified codes",
                  },
                  {
                    value: "10,000+",
                    label: "Active Amazon coupon codes listed",
                  },
                  {
                    value: "35–80%",
                    label: "Typical saving when stacking all three layers",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`flex items-baseline gap-3 pb-4 ${
                      i !== 2 ? "border-b border-[#f0f0f0]" : ""
                    }`}
                  >
                    <span className="text-[#19798d] font-black text-3xl">
                      {stat.value}
                    </span>
                    <span className="text-gray-500 text-[11px] tracking-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#19798d] to-[#0f5a6b] rounded-2xl p-7 mb-5 shadow-lg relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="text-center relative z-10">
                <span className="text-3xl block mb-3">🏷️</span>
                <h4 className="text-white font-bold text-base leading-tight mb-2">
                  Want Fresh Amazon Codes Every Day?
                </h4>
                <p className="text-white/80 text-[11px] px-2 mb-5">
                  Get verified Amazon India coupon codes in your inbox before
                  they expire.
                </p>
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
                <p className="text-white/60 text-[10px] mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* Top Coupons */}
            <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mb-5">
              <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                <span>🔥</span> Top Amazon Coupons Now
              </h4>
              <div className="space-y-4">
                {[
                  {
                    title: "Up to 60% OFF on Top Categories",
                    code: "AMAZON60",
                  },
                  { title: "Flat 50% OFF on Electronics", code: "ELEC50" },
                  { title: "Flat 30% OFF on Fashion", code: "FASHION30" },
                  { title: "Free Delivery on First Order", code: "FREESHIP" },
                ].map((coupon, i) => (
                  <div
                    key={i}
                    className={`pb-4 ${i !== 3 ? "border-b border-[#f0f0f0]" : ""}`}
                  >
                    <p className="text-[#374151] text-[13px] font-semibold truncate mb-2">
                      {coupon.title}
                    </p>
                    <div className="flex items-center justify-between bg-[#e8f6f8] rounded-xl px-4 py-2.5 border border-dashed border-[#19798d]">
                      <span className="text-[#19798d] font-mono font-black text-[12px]">
                        {coupon.code}
                      </span>
                      <Copy
                        className="w-3.5 h-3.5 text-[#19798d] cursor-pointer hover:scale-110 active:scale-90 transition-transform"
                        onClick={() => copyToClipboard(coupon.code)}
                      />
                    </div>
                    <button className="text-[#19798d] text-[10px] font-bold mt-2 hover:underline tracking-wide uppercase">
                      Show Code
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
              <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                <span>📋</span> Table of Contents
              </h4>
              <div className="space-y-1">
                {sections.map((section, i) => (
                  <a
                    key={i}
                    href={`#${section.id}`}
                    className={`flex items-start gap-3 py-2.5 group ${
                      i !== sections.length - 1
                        ? "border-b border-[#f5f5f5]"
                        : ""
                    }`}
                  >
                    <span className="text-[#19798d] font-bold text-[11px] mt-1 shrink-0">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-gray-600 text-[13px] group-hover:text-[#19798d] transition-colors leading-[1.4]">
                      {section.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* Newsletter Strip */}
      <section className="bg-[#19798d] py-14">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-white font-extrabold text-3xl md:text-4xl text-center md:text-left">
              📬 Never Miss a Working Amazon Code Again
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
