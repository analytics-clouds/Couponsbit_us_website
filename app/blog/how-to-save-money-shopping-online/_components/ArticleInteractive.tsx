"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle,
  Share2,
  Bookmark,
  ArrowRight,
  Lightbulb,
  MessageCircle,
  Twitter,
  Facebook,
  Link as LinkIcon,
  Laptop,
  Plane,
  Tv,
  Code,
  Zap
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
    { id: "why-shoppers-dont-pay-full-price", title: "Why Smart Online Shoppers Rarely Pay Full Price" },
    { id: "search-coupons-before-checkout", title: "Always Search for Coupons Before Checking Out" },
    { id: "check-daily-weekly-deals", title: "Check Daily and Weekly Deals" },
    { id: "shop-seasonal-sales", title: "Shop During Seasonal Sale Events" },
    { id: "compare-prices-before-buying", title: "Compare Prices Before Buying" },
    { id: "category-specific-discounts", title: "Explore Category-Specific Discounts" },
    { id: "stack-discounts", title: "Stack Discounts Whenever Possible" },
    { id: "how-can-i-get-coupon-code", title: "Wondering How Can I Get Coupon Code?" },
    { id: "subscribe-before-you-shop", title: "Subscribe Before You Shop" },
    { id: "stay-updated-shopping-guides", title: "Stay Updated with Shopping Guides" },
    { id: "coupon-code-that-works", title: "How Can I Get a Coupon Code That Actually Works?" },
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
        {/* Breadcrumb Section */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-3 flex items-center gap-2">
            <Link href="/" className="text-[#056bfa] text-sm hover:underline">Home</Link>
            <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
            <Link href="/blog" className="text-[#056bfa] text-sm hover:underline">Blog</Link>
            <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">Save Money Shopping Guide</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN - Article Content */}
            <article className="w-full lg:w-[65%]">
              {/* Post Header */}
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">SAVINGS TIPS</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">6 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">July 3, 2026</span>
                  </div>
                </div>
                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  How to Save Money While Shopping Online in 2026
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/couponsbit/image/upload/v1783077516/how-to-save-money-shopping-online_h5gv1z.webp"
                    alt="How to save money while shopping online in 2026"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  Simple habits that help you save on every online purchase
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    "Almost every online purchase has hidden savings available - you just have to know where to look."
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">
                <p className="mb-5">
                  Online shopping has become smarter than ever. Thanks to AI-powered price comparisons, flash sales, loyalty programs and exclusive coupon platforms, shoppers today have more opportunities to save than ever before.
                </p>
                <p className="mb-5">
                  Yet many people still pay full price simply because they don't know where to look.
                </p>
                <p className="mb-5">
                  If you've ever wondered how to save money online, how can I get coupons for free, or how to get discounts online, this guide covers everything you need to become a smarter shopper in 2026.
                </p>
                <p className="mb-5">
                  Whether you are buying electronics, booking flights, renewing software subscriptions, or buying event tickets, a few simple habits can help you keep more money in your wallet.
                </p>

                <h2 id="why-shoppers-dont-pay-full-price" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Why Smart Online Shoppers Rarely Pay Full Price
                </h2>
                <p className="mb-3">Experienced shoppers know that almost every online purchase has some hidden savings available.</p>
                <p className="mb-2">These may include:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Coupon codes</li>
                  <li>Seasonal promotions</li>
                  <li>Student discounts</li>
                  <li>First-order offers</li>
                  <li>Bundle pricing</li>
                  <li>Flash deals</li>
                  <li>Cashback opportunities</li>
                </ul>
                <p className="mb-5">
                  Websites like <Link href="/deals" className="text-[#056bfa] hover:underline">CouponsBit</Link> are exactly what helps their customers where they can get verified coupon codes, deals, and discounts are organized across hundreds of popular brands. 
                </p>

                <h2 id="search-coupons-before-checkout" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Always Search for Coupons Before Checking Out
                </h2>
                <p className="mb-5">
                  One of the easiest ways to reduce your shopping bill is by searching for coupon codes before completing your purchase. Many retailers release exclusive promo codes throughout the year that aren't displayed directly on their homepage.
                </p>
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                  <p className="text-[#4b5563] text-sm">
                    In case you're asking, how can you get coupons for free?
                  </p>
                </div>
                <p className="mb-5">
                  All you have to do is look for the trusted coupon websites that collect and verify promotional offers from popular brands. CouponsBit regularly updates coupons, limited-time offers, and exclusive discounts across multiple <Link href="/categories" className="text-[#056bfa] hover:underline">shopping categories</Link>.
                
                </p>
                <p className="mb-5">
                  If you are shopping frequently, it’s worth exploring the  <Link href="/stores" className="text-[#056bfa] hover:underline">stores sections</Link>  of the coupon websites to find brand-specific coupon pages before making your purchase. 
                </p>

                <h2 id="check-daily-weekly-deals" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Check Daily and Weekly Deals
                </h2>
                <p className="mb-3">Some discounts only remain active for a few hours.</p>
                <p className="mb-2">Retailers often launch:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Daily deals</li>
                  <li>Weekend promotions</li>
                  <li>Limited inventory offers</li>
                  <li>Flash sales</li>
                </ul>
                <p className="mb-3">
                  Instead of waiting for major shopping festivals, monitor dedicated deal pages throughout the week.
                </p>
                <p className="mb-5">
                  CouponsBit makes this easy with daily updates on its <Link href="/deals-of-the-day" className="text-[#056bfa] hover:underline">deals of the day</Link> and <Link href="/deals-of-the-week" className="text-[#056bfa] hover:underline">deals of the week</Link> sections, where shoppers can quickly discover newly added savings opportunities.
                </p>

                <h2 id="shop-seasonal-sales" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Shop During Seasonal Sale Events
                </h2>
                <p className="mb-3">Planning your purchases around major sales events can dramatically reduce your expenses.</p>
                <p className="mb-2">Some of the biggest shopping events in 2026 include:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>New Year Sales</li>
                  <li>Spring Sales</li>
                  <li>Back-to-School Promotions</li>
                  <li>Black Friday</li>
                  <li>Cyber Monday</li>
                  <li>Holiday Sales</li>
                </ul>
                <p className="mb-5">Combining seasonal discounts with coupon codes often leads to the biggest savings.</p>

                <h2 id="compare-prices-before-buying" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Compare Prices Before Buying
                </h2>
                <p className="mb-3">Never purchase from the first website you visit.</p>
                <p className="mb-3">A product may be listed at different prices across retailers.</p>
                <p className="mb-2">Before checking out:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Compare prices</li>
                  <li>Check shipping costs</li>
                  <li>Review return policies</li>
                  <li>Look for coupon availability</li>
                </ul>
                <p className="mb-5">Even a five-minute comparison can save a significant amount.</p>

                <h2 id="category-specific-discounts" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Explore Category-Specific Discounts
                </h2>
                <p className="mb-5">Many coupon websites organize discounts by shopping category.</p>

                <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-[#f0f0f0] my-6">
                  <div>
                    <h4 className="font-bold text-black text-base">Buying Gadgets or Laptops?</h4>
                    <p className="text-sm text-[#4b5563]">Have a look at the <Link href="/categories/electronics" className="text-[#056bfa] hover:underline">electronics category</Link> for the latest deals on gadgets, laptops and headphones.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-base">Planning a Vacation?</h4>
                    <p className="text-sm text-[#4b5563]">Browse the discounts available in the <Link href="/categories/travel" className="text-[#056bfa] hover:underline">travel category</Link> before you book.</p>
                  </div>
                </div>
                <p className="mb-5">Shopping by category helps uncover offers you might otherwise miss.</p>

                <h2 id="stack-discounts" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Stack Discounts Whenever Possible
                </h2>
                <p className="mb-3">One of the biggest shopping hacks in 2026 is discount stacking.</p>
                <p className="mb-2">Many retailers allow shoppers to combine:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Sale price</li>
                  <li>Coupon code</li>
                  <li>Cashback</li>
                  <li>Reward points</li>
                </ul>
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                  <p className="text-[#4b5563] text-sm">
                    When these offers are combined, the total savings can become surprisingly large.
                  </p>
                </div>
                <p className="mb-5">Always check the store's promotion rules before completing your order.</p>

                <h2 id="how-can-i-get-coupon-code" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Wondering How Can I Get Coupon Code?
                </h2>
                <p className="mb-3">This is one of the most common questions among online shoppers.</p>
                <p className="mb-2">The best ways include:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Official retailer newsletters</li>
                  <li>Coupon websites</li>
                  <li>Holiday promotions</li>
                  <li>Student discounts</li>
                  <li>Loyalty programs</li>
                  <li>Exclusive partner promotions</li>
                </ul>
                <p className="mb-5">
                  Instead of searching endlessly across search engines, many shoppers use CouponsBit to quickly locate <Link href="/deals" className="text-[#056bfa] hover:underline">active coupon codes</Link> in one place.
                </p>

                <h2 id="subscribe-before-you-shop" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Subscribe Before You Shop
                </h2>
                <p className="mb-2">Many online retailers reward first-time subscribers with:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>10% OFF</li>
                  <li>15% OFF</li>
                  <li>Free shipping</li>
                  <li>Welcome bonuses</li>
                </ul>
                <p className="mb-5">Creating an account before purchasing often unlocks discounts that guests cannot access.</p>

                <h2 id="stay-updated-shopping-guides" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Stay Updated with Shopping Guides
                </h2>
                <p className="mb-3">Smart shopping isn’t only about coupons. </p>
                <p className="mb-3">Learning new saving techniques throughout the year can help reduce spending on almost every 
purchase. </p>
                <p className="mb-5">
                  CouponsBit regularly publishes <Link href="/blog" className="text-[#056bfa] hover:underline">shopping tips</Link>, deal roundups, and money-saving advice inside, making it a useful resource beyond coupon codes. 
                </p>

                <h2 id="coupon-code-that-works" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  How Can I Get a Coupon Code That Actually Works?
                </h2>
                <p className="mb-3">Many shoppers become frustrated after trying expired promo codes.</p>
                <p className="mb-3">The easiest solution is using platforms that frequently verify and update their offers.</p>
                <p className="mb-3">Instead of testing multiple expired coupons, choose websites that maintain fresh listings and regularly remove inactive codes.</p>
                <p className="mb-5">This increases your chances of applying a working discount during checkout.</p>

                <h2 className="flex items-center text-black font-extrabold text-2xl mt-12 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  In Short
                </h2>
                <p className="mb-3">Learning how to save money online isn't about cutting back on purchases - it's about shopping smarter.</p>
                <p className="mb-3">From comparing prices and using verified coupon codes to checking daily deals and seasonal promotions, small habits can add up to substantial savings throughout the year.</p>
                <p className="mb-3">
                  Whether you're shopping for travel, electronics, software, entertainment, or everyday essentials, CouponsBit helps simplify the process by bringing <Link href="/deals" className="text-[#056bfa] hover:underline">verified deals</Link>, category-specific discounts, and brand-specific coupon pages together in one convenient destination.
                </p>
                <p className="mb-3">Before paying full price, spend a minute checking for available offers. You may be surprised how much you can save.</p>
              </div>

              {/* Tags Section */}
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
                {[
                  "CouponsBit", "Save Money", "Coupon Codes", "Online Shopping", "Cashback", "Shopping Tips"
                ].map((tag, i) => (
                  <span key={i} className="bg-[#f5f5f5] text-[#4b5563] text-[11px] font-medium rounded-full px-4 py-1.5 hover:bg-[#e8f6f8] hover:text-[#056bfa] transition-colors duration-300 cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Section */}
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

            </article>

            {/* RIGHT SIDEBAR */}
            <aside className="w-full lg:w-[35%] h-fit">

              {/* Box 1: TOC */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mb-5">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>📋</span> Table of Contents
                </h4>
                <div className="space-y-1">
                  {sections.map((section, i) => (
                    <a
                      key={i}
                      href={`#${section.id}`}
                      className={`flex items-start gap-3 py-2.5 group ${i !== sections.length - 1 ? 'border-b border-[#f5f5f5]' : ''}`}
                    >
                      <span className="text-[#056bfa] font-bold text-[11px] mt-1 shrink-0">{(i + 1).toString().padStart(2, '0')}</span>
                      <span className="text-gray-600 text-[13px] group-hover:text-[#056bfa] transition-colors leading-[1.4]">{section.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Box 2: Popular Stores */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🛍️</span> Popular Stores
                </h4>
                <div className="space-y-4">
                  {[
                    { name: "StubHub", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp", dealText: "Flat 10% OFF", href: "/stores/stubhub-coupon-code" },
                    { name: "Viagogo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/viagogo-coupon-code_t65aol.webp", dealText: "Starting at $332", href: "/stores/viagogo-coupon-code" },
                    { name: "Bluehost", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp", dealText: "Up to 69% OFF", href: "/stores/bluehost-coupon-code" },
                    { name: "TrainPal", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp", dealText: "Up to 50% OFF", href: "/stores/trainpal-coupon-code" },
                    { name: "Fytoo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp", dealText: "Frames From $1", href: "/stores/fytoo-coupon-code" },
                    { name: "Driffle", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp", dealText: "Up to 95% OFF", href: "/stores/driffle-coupon-code" },
                  ].map((store, i) => (
                    <Link
                      key={store.name}
                      href={store.href}
                      className={`flex items-center gap-3 pb-4 group ${i !== 5 ? 'border-b border-[#f0f0f0]' : ''}`}
                    >
                      <div className="w-10 h-10 shrink-0 rounded-xl border border-[#f0f0f0] bg-white flex items-center justify-center overflow-hidden">
                        <img src={store.logo} alt={store.name} width={40} height={40} loading="lazy" className="w-full h-full object-contain" />
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

              {/* Box 3: Store Categories */}
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
                    { icon: Zap,    name: "Mobile & Telecom",   count: "320+", color: "text-green-500",  href: "/categories/mobile" }
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

      </main>
      <Footer />
    </div>
  );
}
