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

  // Dynamically mapped to match the client-approved headings perfectly
  const sections = [
    { id: "what-is-couponsbit", title: "What Is CouponsBit?" },
    { id: "why-created", title: "Why Was CouponsBit Created?" },
    { id: "how-it-works", title: "How Does CouponsBit Work?" },
    { id: "who-can-benefit", title: "Who Can Benefit from CouponsBit?" },
    { id: "why-smarter", title: "Why More People Are Shopping Smarter" },
    { id: "what-makes-different", title: "What Makes Couponsbit Different?" },
    { id: "why-checking-makes-sense", title: "Why Checking Couponsbit Before Shopping Makes Sense" },
    { id: "future-of-smarter-shopping", title: "The Future of Smarter Shopping" },
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
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">CouponsBit Guide</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN - Article Content */}
            <article className="w-full lg:w-[65%]">
              {/* Post Header */}
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">SMART SHOPPING</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">5 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">June 23, 2026</span>
                  </div>
                </div>
                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  What Is CouponsBit? Why Smart Shoppers Use It 
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/couponsbit/image/upload/v1782215435/couponsbit-shopping-savings-guide_ihevvt.webp"
                    alt="Smarter shopping with CouponsBit"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  Finding genuine deals without wasting time online
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    "Smarter shopping doesn't start at checkout - it starts before you click 'Buy.'"
                  </p>
                </div>
              </header>

              {/* Article Body - Pure Client Approved Content */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">
                <p className="mb-5">
                 Online shopping has transformed the way we buy everything from clothing and electronics to travel experiences and software subscriptions. With thousands of retailers competing for attention, shoppers have more choices than ever before. Yet one challenge remains the same:  finding genuine deals without wasting time. 
                </p>
                <p className="mb-5">
                  This is what CouponsBit is all about.
                </p>
                <p className="mb-5">
                  couponsBit was created to make online savings simpler, faster and more accessible. Instead of jumping to multiple websites looking for discounts, shoppers can explore verified coupon codes, promo codes and <Link href="/deals" className="text-[#056bfa] hover:underline">online deals</Link> from a wide range of brands - all in one place.

                </p>
                <p className="mb-5">
                  But CouponsBit isn’t just another coupon website. It’s a platform built for people who want to shop smarter, spend less and get more value from every purchase. 
                </p>

                <h2 id="what-is-couponsbit" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  What Is CouponsBit?
                </h2>
                <p className="mb-5">
                  CouponsBit is an online savings platform that helps consumers discover coupon codes, promotional offers, discounts and special deals from brands across multiple categories.
                </p>
                <p className="mb-5">
                  Whether you’re booking a vacation, purchasing software, upgrading your electronics, shopping for fashion or buying event tickets, CouponsBit helps you find potential savings before you checkout. 

                </p>
                <p className="mb-5">
                  The platform brings together offers from trusted brands and organizes them into easy-to-browse <Link href="/categories" className="text-[#056bfa] hover:underline">categories</Link>, making it simple for shoppers to locate deals that match their needs.
                </p>
                <p className="mb-5">
                  Instead of paying full price by default, users can quickly check whether a discount is available before completing their purchase. 
                </p>

                <h2 id="why-created" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Why Was CouponsBit Created?
                </h2>
                <p className="mb-5">
                  You and I both know that most online shoppers have experienced the frustration of searching for coupon codes only to discover that they have expired, don’t apply to their purchase or simply don’t work. 
                </p>
                
                <p className="mb-5">
                 Many deal websites overwhelm users with outdated promotions, cluttered layouts and endless advertisements. 
                </p>
                <p className="mb-5">
                  CouponsBit was built to solve that problem, and
                </p>
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                  <p className="text-[#4b5563] text-sm">
                    Our goal is simple and straightforward: We cut through the clutter so you can skip the endless coupon hunt and get straight to the savings. 
                  </p>
                </div>
                <p className="mb-5">
                  By providing a cleaner and more user-friendly experience, CouponsBit helps shoppers focus on finding relevant offers rather than sorting through unnecessary information. 
                </p>

                <h2 id="how-it-works" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  How Does CouponsBit Work?
                </h2>
                <p className="mb-5">Using CouponsBit is simple:</p>
                
                <div className="space-y-4 my-6 pl-2">
                  <div className="flex gap-3">
                    <span className="font-bold text-[#056bfa]">Step 1:</span>
                    <div>
                      <strong className="text-black block">Search for Your Favorite Brand</strong>
                      <p>Users can browse <Link href="/stores" className="text-[#056bfa] hover:underline">stores</Link>, categories and deals directly from the website.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-[#056bfa]">Step 2:</span>
                    <div>
                      <strong className="text-black block">Find an Offer</strong>
                      <p>Choose a coupon code, discount, or promotional deal that matches your purchase.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-[#056bfa]">Step 3:</span>
                    <div>
                      <strong className="text-black block">Visit the Merchant</strong>
                      <p>Proceed to the retailer’s website and add your desired products or services to your cart.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-[#056bfa]">Step 4:</span>
                    <div>
                      <strong className="text-black block">Apply the Savings</strong>
                      <p>Use the coupon code during checkout if applicable and complete your purchase. In just a few clicks, shoppers can potentially reduce the total cost of their order.</p>
                    </div>
                  </div>
                </div>

                <h2 id="who-can-benefit" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Who Can Benefit from CouponsBit?
                </h2>
                <p className="mb-2">The short answer?</p>
                <p className="mb-5 font-bold text-black">Almost everyone who shops online.</p>

                <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-[#f0f0f0] my-6">
                  <div>
                    <h4 className="font-bold text-black text-base">Frequent Online Shoppers</h4>
                    <p className="text-sm text-[#4b5563]">People who regularly shop online can use CouponsBit to discover discounts before making purchases. </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-base">Travelers</h4>
                    <p className="text-sm text-[#4b5563]">Travelers can explore savings opportunities on flights, hotels, tours, vacation packages, and transportation services. </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-base">Tech Enthusiasts</h4>
                    <p className="text-sm text-[#4b5563]">From software subscriptions to <Link href="/categories/electronics" className="text-[#056bfa] hover:underline">electronics</Link> and web hosting services, technology buyers can often find valuable promotions. </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-base">Fashion Lovers</h4>
                    <p className="text-sm text-[#4b5563]">Shoppers searching for clothing, footwear, accessories and lifestyle products can browse category-specific deals.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-base">Students</h4>
                    <p className="text-sm text-[#4b5563]">Students looking to stretch their budgets can use Couponsbit to save on everyday purchases and digital services.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-base">Small Business Owners</h4>
                    <p className="text-sm text-[#4b5563]">Entrepreneurs and professionals can find discounts on <Link href="/categories/software" className="text-[#056bfa] hover:underline">software</Link>, business tools, marketing services and productivity platforms. </p>
                  </div>
                </div>

                <h2 id="why-smarter" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Why More People Are Shopping Smarter
                </h2>
                <p className="mb-3">Today's consumers are becoming more value-conscious than ever before. People no longer assume that the listed price is the best price.</p>
                <p className="mb-3">Before making a purchase, many shoppers compare products, read reviews, search for deals, and explore available promotions.</p>
                <p className="mb-3">This shift isn't about spending less simply for the sake of saving money. It's about making informed purchasing decisions.</p>
                <p className="mb-3">Finding a discount on something you already planned to buy is one of the easiest ways to maximize value without sacrificing quality.</p>
                <p className="mb-5">That's exactly where Couponsbit fits into the shopping process.</p>

                <h2 id="what-makes-different" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  What Makes Couponsbit Different?
                </h2>
                <p className="mb-4">The internet is full of coupon websites. So what makes Couponsbit worth visiting?</p>
                
                <h4 className="font-bold text-black mt-4 mb-1">Easy Navigation</h4>
                <p className="mb-3">Couponsbit organizes deals by category, store, and brand, making it easier to find relevant savings opportunities.</p>
                
                <h4 className="font-bold text-black mt-4 mb-1">Diverse Categories</h4>
                <p className="mb-2">Users can explore offers across:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Travel</li>
                  <li>Fashion</li>
                  <li>Electronics</li>
                  <li>Software</li>
                  <li>Entertainment</li>
                  <li>Mobile services</li>
                  <li>Lifestyle brands</li>
                  <li>Online subscriptions</li>
                </ul>

                <h4 className="font-bold text-black mt-4 mb-1">User-Focused Experience</h4>
                <p className="mb-3">Instead of making users dig through unrelated offers, Couponsbit focuses on helping shoppers find what they're actually looking for.</p>
                
                <h4 className="font-bold text-black mt-4 mb-1">Completely Free</h4>
                <p className="mb-5">There are no membership fees, subscriptions, or hidden costs. Anyone can browse deals and savings opportunities without paying a cent.</p>

                <h2 id="why-checking-makes-sense" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Why Checking Couponsbit Before Shopping Makes Sense
                </h2>
                <p className="mb-3">Think about how much time people spend researching products before making a purchase.</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Many compare prices.</li>
                  <li>Many read customer reviews.</li>
                  <li>Many watch product videos.</li>
                </ul>
                <p className="mb-3">Checking for available deals should be part of that same process.</p>
                <p className="mb-3">It only takes a few moments to see whether a discount is available, yet those few moments can lead to meaningful savings.</p>
                 <p className="mb-3">Whether you're purchasing a software subscription, booking a flight, upgrading your phone, or ordering clothing online, taking a quick look at available offers can help you get more value from your budget.</p>

                <h2 id="future-of-smarter-shopping" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  The Future of Smarter Shopping
                </h2>
                <p className = "mb-3">Online shopping continues to evolve, and consumers are becoming more informed every year.
As shoppers look for better ways to manage spending and maximize value, platforms like Couponsbit play an increasingly important role in the buying journey.
</p>
                  <p className = "mb-3">Rather than chasing random discounts across the internet, users can visit a single destination designed to simplify the savings process.</p>
                
                <p className="mb-2">The result?</p>
                <ul className="list-none space-y-1 mb-5 font-semibold text-black pl-2">
                  <li>✓ Less searching.</li>
                  <li>✓ Less frustration.</li>
                  <li>✓ More informed purchases.</li>
                </ul>

                <h2 className="flex items-center text-black font-extrabold text-2xl mt-12 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  In Short
                </h2>
                <p className = "mb-3">Every shopper loves a good deal, but nobody enjoys wasting time searching for one.</p>
                <p className = "mb-3">Couponsbit was built to help bridge that gap.</p>
                <p className = "mb-3">By bringing together coupon codes, promotional offers, and online deals from trusted brands, the platform helps consumers make smarter purchasing decisions and discover savings opportunities before they buy.</p>
                <p className = "mb-3">Whether you're shopping for travel, technology, fashion, software, entertainment, or everyday essentials, Couponsbit makes it easier to explore deals, compare opportunities, and keep more money in your pocket.</p>
                 <p className = "mb-3">Because smarter shopping doesn't start at checkout - it starts before you click "Buy."</p>
              </div>

              {/* Tags Section */}
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
                {[
                  "CouponsBit", "Smart Shopping", "Promo Codes", "Online Deals", "Save Money", "Coupon Guide"
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