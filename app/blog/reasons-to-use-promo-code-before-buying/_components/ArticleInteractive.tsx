"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle,
  MessageCircle,
  Twitter,
  Facebook,
  Link as LinkIcon,
  Laptop,
  Plane,
  Tv,
  Code,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

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

  const sections = [
    { id: "save-money-without-compromising", title: "Save Money Without Compromising on What You Buy" },
    { id: "get-more-value-budget", title: "Get More Value From Your Shopping Budget" },
    { id: "discover-offers-you-might-miss", title: "Discover Offers You Might Otherwise Miss" },
    { id: "make-big-purchases-affordable", title: "Make Big Purchases More Affordable" },
    { id: "build-smarter-shopping-habits", title: "Build Smarter Shopping Habits" },
    { id: "how-to-find-promo-code", title: "How to Find a Promo Code Before Checking Out" },
    { id: "where-couponsbit-fits", title: "Where Does CouponsBit Fit Into Smarter Shopping?" },
    { id: "make-checking-habit", title: "Make Checking Promo Codes a Shopping Habit" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#056bfa] z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-[80px] right-4 z-[70] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-[12px] px-[18px] py-[12px] flex items-center gap-[10px] animate-in slide-in-from-right duration-300">
          <CheckCircle className="w-[18px] h-[18px] text-[#22c55e]" />
          <span className="text-black font-bold text-sm">Copied!</span>
        </div>
      )}

      <main>
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-3 flex items-center gap-2">
            <Link href="/" className="text-[#056bfa] text-sm hover:underline">Home</Link>
            <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
            <Link href="/blog" className="text-[#056bfa] text-sm hover:underline">Blog</Link>
            <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">Reasons to Use a Promo Code</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN */}
            <article className="w-full lg:w-[65%]">
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">COUPON GUIDES</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">6 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">November 13, 2026</span>
                  </div>
                </div>

                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  Top 5 Reasons to Use a Promo Code Before Buying Anything
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="/blog/reasons-to-use-promo-code-before-buying.webp"
                    alt="Top 5 Reasons to Use a Promo Code Before Buying Anything"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  A simple check before checkout can make a noticeable difference to your shopping budget
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    "Checking for a discount code before completing a purchase can make a noticeable difference to your shopping budget."
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">

                <p className="mb-5">
                  Imagine finding the perfect pair of shoes, adding them to your cart, and getting ready to pay. Everything looks good until you remember one thing: Did you check for a promo code?
                </p>
                <p className="mb-5">
                  It might seem like a small step, but checking for a discount code before completing a purchase can make a noticeable difference to your shopping budget.
                </p>
                <p className="mb-5">
                  Whether you're ordering groceries, buying electronics, updating your wardrobe, or booking your next vacation, promo codes can help you find opportunities to spend less. And the best part? You don't need to be an expert bargain hunter to use them.
                </p>
                <p className="mb-5">
                  A quick search before checkout could help you discover an offer you might otherwise miss.
                </p>
                <p className="mb-5">
                  So, why should you make promo codes part of your shopping routine? Here are five good reasons.
                </p>

                {/* Section 1 */}
                <h2 id="save-money-without-compromising" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  1. Save Money Without Compromising on What You Buy
                </h2>
                <p className="mb-5">
                  Let's start with the most obvious benefit: saving money.
                </p>
                <p className="mb-5">
                  When you use a valid promo code, you may receive a percentage discount, a fixed amount off your order, or another promotional benefit. This means you could pay less for something you were already planning to purchase.
                </p>
                <p className="mb-5">
                  For example, imagine your shopping cart totals $100. You find an eligible promo code offering 15% off. If the offer applies to your entire order, you could save $15 before any applicable taxes or other charges.
                </p>
                <p className="mb-5">
                  You don't have to choose a cheaper product or compromise on quality to enjoy that saving.
                </p>
                <p className="mb-3">This is particularly useful when buying:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Clothing, shoes, and accessories</li>
                  <li>Electronics and home appliances</li>
                  <li>Beauty and personal care products</li>
                  <li>Furniture and home essentials</li>
                  <li>Travel bookings and experiences</li>
                </ul>
                <p className="mb-5">
                  However, always check the offer's terms. Some promo codes apply only to selected products, while others require a minimum purchase.
                </p>
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                  <p className="text-[#4b5563] text-sm">
                    The takeaway: If you're already planning to buy something, checking for an applicable discount is a simple way to avoid paying more than necessary.
                  </p>
                </div>

                {/* Section 2 */}
                <h2 id="get-more-value-budget" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  2. Get More Value From Your Shopping Budget
                </h2>
                <p className="mb-5">
                  A good shopping budget isn't just about deciding how much you can spend. It's also about making that money go further.
                </p>
                <p className="mb-5">
                  Promo codes can help you stretch your budget by reducing the amount you pay for eligible purchases.
                </p>
                <p className="mb-5">
                  Suppose you've set aside $200 for new clothes. You find a few items you like, and the total comes to $180. An eligible discount could reduce the final cost, leaving some money available for another purchase or allowing you to stay comfortably within your budget.
                </p>
                <p className="mb-3">You can also use these savings to:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Buy an additional essential item.</li>
                  <li>Put money aside for future purchases.</li>
                  <li>Avoid overspending during seasonal sales.</li>
                  <li>Manage multiple shopping expenses more effectively.</li>
                </ul>
                <p className="mb-5">
                  The important thing is to use discounts on things you actually need or want.
                </p>
                <p className="mb-5">
                  Buying something unnecessary just because it comes with a discount isn't smart saving. A promo code should support your budget, not encourage you to spend beyond it.
                </p>

                {/* Section 3 */}
                <h2 id="discover-offers-you-might-miss" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  3. Discover Offers You Might Otherwise Miss
                </h2>
                <p className="mb-5">
                  Not every discount appears directly on a product page.
                </p>
                <p className="mb-5">
                  Retailers frequently run promotional campaigns, seasonal offers, first-order discounts, and special deals for selected customers. Some offers appear during major shopping events, while others remain available for specific products or categories.
                </p>
                <p className="mb-5">
                  If you only look at the displayed product price, you might miss an opportunity to save.
                </p>
                <p className="mb-5">
                  That's why checking for a promo code before checkout is worth making a habit.
                </p>
                <p className="mb-3">You can look for:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li><strong>Percentage discounts:</strong> Offers that reduce your purchase by a certain percentage.</li>
                  <li><strong>Fixed-value discounts:</strong> Promotions that deduct a specific amount from an eligible order.</li>
                  <li><strong>First-order offers:</strong> Discounts that some retailers provide to new customers.</li>
                  <li><strong>Seasonal promotions:</strong> Special offers around holidays, shopping events, and seasonal campaigns.</li>
                  <li><strong>Category-specific deals:</strong> Discounts that apply to selected products, collections, or departments.</li>
                </ul>
                <p className="mb-5">
                  Remember that promotional offers have different conditions. Some may have expiration dates, exclusions, or eligibility requirements. Always read the details before using a code.
                </p>

                {/* Section 4 */}
                <h2 id="make-big-purchases-affordable" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  4. Make Big Purchases More Affordable
                </h2>
                <p className="mb-5">
                  Promo codes aren't just useful for small purchases. They can be particularly helpful when you're planning to spend more on a product or service.
                </p>
                <p className="mb-5">
                  Think about buying a laptop, replacing an appliance, furnishing a room, or booking a vacation. These purchases can take a considerable portion of your budget.
                </p>
                <p className="mb-5">
                  Before making a bigger purchase, comparing available offers can help you identify potential savings.
                </p>
                <p className="mb-5">
                  For instance, if you're buying a $500 product and find a valid 10% discount that applies to the full purchase, you could save $50.
                </p>
                <p className="mb-5">
                  That is money you can keep in your budget rather than spend unnecessarily.
                </p>
                <p className="mb-3">Here are a few things to check before using a promo code on a bigger purchase:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Does the code apply to the product you're buying?</li>
                  <li>Is there a minimum order value?</li>
                  <li>Does the offer exclude certain brands or product categories?</li>
                  <li>Can you combine the code with another promotion?</li>
                  <li>Does the discount apply before or after other eligible offers?</li>
                </ul>
                <p className="mb-5">
                  Don't assume every code works on every item. A little research can help you understand the actual savings before placing your order.
                </p>

                {/* Section 5 */}
                <h2 id="build-smarter-shopping-habits" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  5. Build Smarter Shopping Habits
                </h2>
                <p className="mb-5">
                  Using promo codes isn't only about getting discounts. It's also about becoming a more thoughtful shopper.
                </p>
                <p className="mb-5">
                  When you make it a habit to check offers before checkout, you naturally start comparing prices, exploring alternatives, and paying closer attention to the total purchase cost.
                </p>
                <p className="mb-5">
                  Over time, this can help you make more informed decisions.
                </p>
                <p className="mb-3">Here are a few simple habits worth developing:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Compare prices across different retailers before purchasing.</li>
                  <li>Check product specifications and customer reviews.</li>
                  <li>Look for available coupon codes and promotional offers.</li>
                  <li>Read the terms and expiration dates of discounts.</li>
                  <li>Check shipping charges and taxes before comparing final prices.</li>
                  <li>Avoid buying unnecessary products just to qualify for an offer.</li>
                </ul>
                <p className="mb-5">
                  These small steps can make online shopping more organized and help you avoid impulse purchases.
                </p>
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                  <p className="text-[#4b5563] text-sm">
                    A smart shopper doesn't chase every discount. They look for genuine value.
                  </p>
                </div>

                {/* How to Find */}
                <h2 id="how-to-find-promo-code" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  How to Find a Promo Code Before Checking Out
                </h2>
                <p className="mb-5">
                  Now that you know why promo codes are worth checking, the next question is: Where can you find them?
                </p>
                <p className="mb-5">
                  You don't have to spend hours searching different websites. A few simple steps can help you get started.
                </p>

                <div className="space-y-6 bg-white p-8 rounded-[32px] border border-[#f0f0f0] shadow-sm my-8">
                  {[
                    { step: "Step 1", text: "Identify the retailer. Visit the official store where you plan to shop and note the products you want to purchase." },
                    { step: "Step 2", text: "Search for available offers. Look for promotional codes, coupon codes, and discounts associated with that retailer." },
                    { step: "Step 3", text: "Visit a coupon website. Platforms such as CouponsBit help shoppers discover available coupon codes and promotional offers across popular brands." },
                    { step: "Step 4", text: "Read the conditions. Check minimum spending requirements, product exclusions, expiration dates, and other restrictions." },
                    { step: "Step 5", text: "Apply the code at checkout. Enter the promo code in the designated field and check whether the discount appears in your order summary." },
                    { step: "Step 6", text: "Verify your final price. Make sure the discount has been applied correctly before completing your purchase." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg italic text-sm">
                        {i + 1}
                      </div>
                      <p className="text-gray-700 font-bold leading-relaxed mt-2">
                        <span className="text-black">{item.step}:</span> {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mb-5">
                  If a code doesn't work, don't worry. It may have expired, may not apply to your selected product, or may have specific eligibility requirements.
                </p>

                {/* CouponsBit */}
                <h2 id="where-couponsbit-fits" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Where Does CouponsBit Fit Into Smarter Shopping?
                </h2>
                <p className="mb-5">
                  Finding a product you love is easy. Finding a way to pay less for it makes the experience even better.
                </p>
                <p className="mb-5">
                  That's where CouponsBit can become a useful part of your shopping routine.
                </p>
                <p className="mb-5">
                  CouponsBit helps online shoppers discover coupon codes, promo codes, discount offers, and deals from popular brands across different <Link href="/categories" className="text-[#056bfa] hover:underline">shopping categories</Link>.
                </p>
                <p className="mb-5">
                  Whether you're shopping for fashion, electronics, beauty products, home essentials, or travel services, you can explore relevant store pages and check for available offers before completing your purchase.
                </p>
                <p className="mb-5">
                  Instead of heading straight to checkout, visit CouponsBit and search for the retailer you're planning to shop with.
                </p>
                <p className="mb-5">
                  You can also explore individual brand pages, such as <Link href="/stores/amazon-discount-code" className="text-[#056bfa] hover:underline">Amazon coupon codes</Link>, to see whether an applicable offer is available.
                </p>
                <p className="mb-5">
                  Keep in mind that coupon availability changes, and some codes come with restrictions. Always check the offer details and confirm the discount at checkout.
                </p>

                {/* Closing */}
                <h2 id="make-checking-habit" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Make Checking Promo Codes a Shopping Habit
                </h2>
                <p className="mb-5">
                  Saving money doesn't always require complicated strategies. Sometimes, it starts with one simple question before you buy: Is there a promo code available?
                </p>
                <p className="mb-5">
                  From reducing everyday shopping expenses to making larger purchases more affordable, valid promotional codes can help you get better value for your money.
                </p>
                <p className="mb-5">
                  The trick is to use them wisely. Compare prices, understand offer conditions, avoid unnecessary purchases, and focus on products that genuinely meet your needs.
                </p>
                <p className="mb-5">
                  So, the next time you add something to your online shopping cart, don't rush to checkout.
                </p>
                <p className="mb-5">
                  Take a moment to look for a discount first. Visit <Link href="/stores" className="text-[#056bfa] hover:underline">CouponsBit</Link> to explore available promo codes and deals, and make every shopping decision a little smarter.
                </p>
                <p className="mb-5">
                  Because paying less for something you already planned to buy is always worth checking!
                </p>
              </div>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
                {["Promo Code", "Discount Code", "CouponsBit", "Save Money", "Online Shopping", "Coupon Guides"].map((tag, i) => (
                  <span key={i} className="bg-[#f5f5f5] text-[#4b5563] text-[11px] font-medium rounded-full px-4 py-1.5 hover:bg-[#e8f6f8] hover:text-[#056bfa] transition-colors duration-300 cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share */}
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
                <button onClick={() => copyToClipboard(typeof window !== "undefined" ? window.location.href : "")} className="bg-[#f5f5f5] text-[#374151] rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:bg-[#e8f6f8] transition-all">
                  <LinkIcon className="w-3.5 h-3.5" /> Copy Link
                </button>
              </div>
            </article>

            {/* RIGHT SIDEBAR */}
            <aside className="w-full lg:w-[35%] h-fit">

              {/* TOC */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mb-5">
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
                      <span className="text-[#056bfa] font-bold text-[11px] mt-1 shrink-0">{(i + 1).toString().padStart(2, "0")}</span>
                      <span className="text-gray-600 text-[13px] group-hover:text-[#056bfa] transition-colors leading-[1.4]">{section.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Popular Stores */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🛍️</span> Popular Stores
                </h4>
                <div className="space-y-4">
                  {[
                    { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/amazon-coupon-code_xn2sqr.webp", dealText: "Up to 50% OFF", href: "/stores/amazon-discount-code" },
                    { name: "Airalo", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/airalo-coupon-code_tkmyoo.webp", dealText: "Save with AC10ALL", href: "/stores/airalo-discount-code" },
                    { name: "Bluehost", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp", dealText: "Up to 69% OFF", href: "/stores/bluehost-discount-code" },
                    { name: "TrainPal", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp", dealText: "Up to 50% OFF", href: "/stores/trainpal-discount-code" },
                    { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/sungait-logo_tfolql.webp", dealText: "Save with CLOUDS15", href: "/stores/sungait-discount-code" },
                    { name: "Kerala Ayurveda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg", dealText: "Save with COUNTNEW10", href: "/stores/kerala-ayurveda-discount-code" },
                  ].map((store, i) => (
                    <Link
                      key={store.name}
                      href={store.href}
                      className={`flex items-center gap-3 pb-4 group ${i !== 5 ? "border-b border-[#f0f0f0]" : ""}`}
                    >
                      <div className="w-14 h-14 shrink-0 rounded-xl border border-[#f0f0f0] bg-white flex items-center justify-center overflow-hidden">
                        <img src={store.logo} alt={store.name} width={56} height={56} loading="lazy" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-bold text-[15px] truncate group-hover:text-[#056bfa] transition-colors">{store.name}</p>
                        <p className="text-[#056bfa] text-[13px] font-semibold truncate">{store.dealText}</p>
                      </div>
                      <span className="text-[#056bfa] text-[12px] font-bold uppercase tracking-wide shrink-0">View →</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Store Categories */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mt-5">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🗂️</span> Store Categories
                </h4>
                <div className="space-y-1">
                  {[
                    { icon: Laptop, name: "Electronics",        count: "850+", color: "text-blue-500",   href: "/categories/electronics" },
                    { icon: Plane,  name: "Travel",             count: "420+", color: "text-teal-500",   href: "/categories/travel" },
                    { icon: Tv,     name: "Entertainment",      count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                    { icon: Code,   name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                    { icon: Zap,    name: "Mobile & Telecom",   count: "320+", color: "text-green-500",  href: "/categories/mobile" },
                  ].map((cat, i) => (
                    <Link key={i} href={cat.href} className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <cat.icon className={cn("w-4.5 h-4.5", cat.color)} />
                        <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">{cat.name}</span>
                      </div>
                      <span className="bg-[#e8f6f8] text-[#0451c4] px-2.5 py-0.5 rounded-full text-[12px] font-black">{cat.count} Coupons</span>
                    </Link>
                  ))}
                </div>
                <Link href="/categories" className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline">View All Categories →</Link>
              </div>
            </aside>
          </div>
        </div>

        {/* Continue Reading */}
        <section className="bg-white py-20 border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-[2px] w-10 sm:w-16 bg-[#056bfa]/20"></span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center">
                Continue <span className="text-[#056bfa]">Reading</span>
              </h2>
              <span className="h-[2px] w-10 sm:w-16 bg-[#056bfa]/20"></span>
            </div>
            <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
              Discover more shopping guides, coupon tips, and seasonal savings from CouponsBit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  image: "/blog/amazon-shopping-tips-find-better-deals.webp",
                  date: "November 4, 2026",
                  readTime: "8 MIN READ",
                  title: "Shopping on Amazon? Find Better Deals and Save More",
                  desc: "Shop smarter on Amazon with practical tips to compare products, spot genuine discounts, use coupons, and find more savings with CouponsBit.",
                  href: "/blog/amazon-shopping-tips-find-better-deals",
                },
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1000,c_limit/v1783077516/how-to-save-money-shopping-online_h5gv1z.webp",
                  date: "July 3, 2026",
                  readTime: "6 MIN READ",
                  title: "How to Save Money While Shopping Online in 2026",
                  desc: "Learn how to save money online in 2026 with proven shopping tips, coupon strategies, cashback tricks, and exclusive deals from CouponsBit.",
                  href: "/blog/how-to-save-money-shopping-online",
                },
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1787725876/upcoming-sales-2026_nqxs3z.webp",
                  date: "June 23, 2026",
                  readTime: "6 MIN READ",
                  title: "The Biggest U.S. Sales Coming Up in 2026",
                  desc: "Explore the ultimate guide to upcoming sales in 2026. Find the best coupon codes, promo offers, and major shopping dates to maximize your savings.",
                  href: "/blog/upcoming-sales-2026",
                },
              ].map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden hover:shadow-lg hover:border-[#056bfa] transition-all duration-300 group flex flex-col"
                >
                  <div className="w-full h-[200px] shrink-0 relative overflow-hidden">
                    <img src={post.image} alt={post.title} width={400} height={200} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500 text-xs font-medium uppercase">{post.date}</span>
                      <span className="text-gray-300" aria-hidden="true">•</span>
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500 text-xs uppercase font-medium">{post.readTime}</span>
                    </div>
                    <h3 className="text-[#056bfa] font-extrabold text-lg leading-tight mb-2.5 group-hover:text-[#0451c4] transition-all line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{post.desc}</p>
                    <span className="text-[#056bfa] font-bold text-sm flex items-center gap-1 uppercase tracking-wide group-hover:gap-2 transition-all duration-300">
                      READ MORE <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
