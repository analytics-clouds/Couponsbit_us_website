"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  Star, 
  Tag, 
  Percent, 
  Users, 
  BadgeCheck, 
  ExternalLink, 
  ShieldCheck, 
  PiggyBank, 
  RefreshCw, 
  Clock, 
  Copy, 
  ChevronDown, 
  Package, 
  Truck, 
  Shield, 
  Laptop, Tent, Backpack, Compass, Map, Trees,
  Shirt, 
  Home, 
  Sparkles, 
  BookOpen, 
  CheckCircle,
  X,
  ArrowRight,
  Plane,
  Tv,
  Code,Server, Globe, Cloud, LayoutGrid, Cpu, Search, LayoutTemplate, ShoppingBag, Mail,
  Zap
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OUTFITR_COUPONS } from "./offers";

// --- Types ---
interface Coupon {
  id: string;
  discount: string;
  label: string;
  badge?: "Best Offer" | "Popular" | "Trending";
  title: string;
  heading: string;
  sub: string;
  description: string;
  usedCount: string;
  expiresIn: string;
  code: string;
}

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}


const RELATED_STORES: StoreItem[] = [
  { name: "StubHub",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/stubhub-coupon-code_fplhay.webp",        dealText: "Up to 15% OFF", href: "/stores/stubhub-discount-code" },
  { name: "Viagogo",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/viagogo-coupon-code_t65aol.webp",        dealText: "Up to 10% OFF", href: "/stores/viagogo-discount-code" },
  { name: "Driffle",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/driffle-coupon-code_n2upgl.webp",        dealText: "Up to 70% OFF", href: "/stores/driffle-discount-code" },
  { name: "Reolink",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/reolink-coupon-code_zsrmh1.webp",        dealText: "Up to 30% OFF", href: "/stores/reolink-discount-code" },
  { name: "Lyca Mobile",    logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/lyca-mobile-coupon-code_svvddg.webp",    dealText: "Up to 20% OFF", href: "/stores/lyca-mobile-discount-code" },
  { name: "Rayneo",         logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/reyneo-coupon-code_q3crak.webp",         dealText: "Up to 30% OFF", href: "/stores/rayneo-discount-code" },
];

export default function OutfitrCouponsContent() {
  const [activeTab, setActiveTab] = useState<"All" | "Coupons" | "Deals">("All");
  const [activeSlide, setActiveSlide] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [expandedCoupon, setExpandedCoupon] = useState<string | null>(null);
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [revealedCodes, setRevealedCodes] = useState<Set<string>>(new Set());
  const [open, setOpen] = useState(false);

  // Slide auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setToastCode(code);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const toggleReveal = (id: string) => {
    const next = new Set(revealedCodes);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setRevealedCodes(next);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      {/* Toast Notification */}
      <div className={cn(
        "fixed top-20 right-6 z-[60] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-4 flex items-center gap-3 transition-all duration-300 transform",
        showToast ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0 pointer-events-none"
      )}>
        <div className="bg-[#f0fdf4] p-2 rounded-full">
          <CheckCircle className="w-5 h-5 text-[#22c55e]" />
        </div>
        <div>
          <p className="font-black text-black text-sm">Code Copied!</p>
          <p className="text-gray-500 text-xs font-bold font-mono">{toastCode}</p>
        </div>
      </div>

      {/* Main Content Start */}
      <main>
        {/* Section 1: Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Outfitr</span>
            </nav>
          </div>
        </div>

        {/* Section 2: Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left: Store Info */}
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href="https://forcomeecommerceinc.sjv.io/c/6434050/2843329/32890?subId=1015" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782451456/outfitr-coupon-code_zbvad3.jpg" alt="Outfitr" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Outfitr Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      
                      Save more with the latest Outfitr Discount Code and Outfitr Promo Code for November 2026. Enjoy up to 62% OFF the 2-Bike Hitch Rack Lite Edition or save $189.99 OFF the Single Hitch E-Bike Rack with Ramp. You can also get 50% OFF the Single Hitch E-Bike Rack Lite Edition, up to 47% OFF cargo carriers, and discounts on foldable bike racks, e-bike racks, and travel accessories. Browse verified Outfitr offers for secure bike transport and outdoor adventures.
                    </p>
                    <a
                      href="https://forcomeecommerceinc.sjv.io/c/6434050/2843329/32890?subId=1015"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "11", label: "Coupons" },
                    { icon: Percent, val: "2.5k", label: "Deals" },
                    { icon: Users, val: "10M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <stat.icon className="w-4.5 h-4.5 text-[#056bfa]" />
                       <div>
                         <p className="text-black font-black text-xs leading-none">{stat.val}</p>
                         <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">{stat.label}</p>
                       </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right: Featured Banner Slider */}
              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  {/* Slide 1 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 0 ? 1 : 0 }}>
                    <a href="https://forcomeecommerceinc.sjv.io/c/6434050/2843329/32890?subId=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782467222/outfitr-promo-code_kddydb.webp" alt="Outfitr Discount Code" width={800} height={350} className="w-full h-full object-cover" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://forcomeecommerceinc.sjv.io/c/6434050/2843329/32890?subId=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782467222/outfitr-discount-code_p5vsnf.webp" alt="Outfitr Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://forcomeecommerceinc.sjv.io/c/6434050/2843329/32890?subId=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782467221/outfitr-voucher-code_kb6ntq.webp" alt="Outfitr Voucher Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Controls */}
                  <button onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5 text-white rotate-180" />
                  </button>
                  <button onClick={() => setActiveSlide((prev) => (prev + 1) % 3)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {[0, 1, 2].map(i => (
                      <button key={i} onClick={() => setActiveSlide(i)} className={cn("w-1.5 h-1.5 rounded-full transition-all", activeSlide === i ? "bg-white w-4" : "bg-white/40")} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Trust Bar */}
        <section className="hidden md:block bg-[#f5f5f5] py-5 border-y border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
              {[
                { icon: Star, title: "Top Deals", sub: "Best offers handpicked for you" },
                { icon: ShieldCheck, title: "Verified Coupons", sub: "100% working & tested codes" },
                { icon: PiggyBank, title: "Big Savings", sub: "Save more on every order" },
                { icon: RefreshCw, title: "Updated Daily", sub: "New offers every single day" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center md:border-r last:border-0 border-[#e0e0e0] px-4">
                  <item.icon className="w-6 h-6 text-[#056bfa] shrink-0" />
                  <div className="text-left">
                    <p className="text-black font-black text-sm leading-none">{item.title}</p>
                    <p className="text-gray-500 font-bold text-[12px] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Coupons Section + Right Sidebar */}
        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              
              <div className="top-offers lg:w-[65%] mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-black leading-tight">Outfitr Coupon Codes & Offers</h2>
        <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">
          {OUTFITR_COUPONS.length} Coupons & Offers Available
        </p>
      </div>

      {OUTFITR_COUPONS.map((coupon) => (
        <div key={coupon.id} id={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
          <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
            <div className="flex flex-row">
              
              {/* LEFT OFFER BOX */}
              <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
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

              {/* CONTENT SECTION */}
              <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                
                {/* CENTER CONTENT */}
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

                  {/* HEADING */}
                  <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                    {coupon.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                    {coupon.description}
                  </p>

                  {/* VIEW DETAILS BUTTON */}
                  <button
                    type="button"
                    onClick={() => setExpandedCoupon(expandedCoupon === coupon.id ? null : coupon.id)}
                    className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1 focus:outline-none"
                  >
                    View Details
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${expandedCoupon === coupon.id ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* ACCORDION POINTS */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedCoupon === coupon.id
                        ? "max-h-[250px] opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                      {coupon.points.map((point, pi) => (
                        <li key={pi} className="flex items-start gap-2">
                          <span className="text-[#0344b0]">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* BUTTON SECTION (Copy code & Get Deal) */}
                <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6 gap-3">
                  {coupon.code && (
                    <button
                      onClick={() => handleCopy(coupon.code)}
                      className="w-full bg-white border-2 border-dashed border-[#056bfa] text-[#056bfa] font-black text-sm px-4 py-2.5 rounded-xl flex items-center justify-between gap-2 hover:bg-[#f0f7ff] transition-colors"
                    >
                      <span className="font-mono">{coupon.code}</span>
                      {showToast && toastCode === coupon.code ? (
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                      ) : (
                        <Copy className="w-4 h-4 shrink-0" />
                      )}
                    </button>
                  )}
                  
                  <a
                    href="https://forcomeecommerceinc.sjv.io/c/6434050/2843329/32890?subId=1015"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label={`Get Outfitr deal: ${coupon.title}`}
                    className="w-full bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
                  >
                    Get Deal
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">

                <div className="w-full flex justify-center mb-6">
                  <a
                    href="https://www.google.com/preferences/source?q=couponsbit.us"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                  >
                    <Image
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png"
                      alt="Add as a preferred source on Google"
                      width={280}
                      height={70}
                      className="w-full max-w-[260px] h-auto object-contain"
                      priority
                    />
                  </a>
                </div>

                {/* About Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">About Outfitr</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    OutfitR is an outdoor gear brand created by adventure enthusiasts with a mission to provide dependable equipment for people who love exploring the outdoors. Inspired by real-world adventures, the brand develops products that combine durability, functionality, and modern design for camping, hiking, road trips, and everyday outdoor activities. 
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    By focusing on quality materials and practical designs, OutfitR aims to equip travelers, campers, hikers, and outdoor explorers with gear that performs well in demanding environments. Every product is designed to withstand outdoor conditions while helping adventurers stay prepared wherever their journey takes them. 
                  </p>

                  <a href="https://forcomeecommerceinc.sjv.io/c/6434050/2843329/32890?subId=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Categories Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
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

                {/* Why Shop Card */}
              <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <div className="mb-8">
    <h3 className="text-black font-black text-lg mb-2">What Can You Buy at OutfitR?</h3>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      OutfitR offers a growing selection of outdoor equipment and travel essentials for every type of adventure.
    </p>
  </div>

  <div className="space-y-8">
    {[
      {
        icon: Tent, 
        title: "Camping Gear",
        sub: "Prepare for weekends in the wilderness with camping accessories designed for comfort and convenience."
      },
      {
        icon: Backpack, 
        title: "Hiking Backpacks",
        sub: "Carry your essentials with durable backpacks built for day hikes, extended treks, and outdoor expeditions."
      },
      {
        icon: Compass, 
        title: "Outdoor Accessories",
        sub: "Discover practical gear that helps improve your outdoor experience, whether you're camping, hiking, or traveling."
      },
      {
        icon: Map, 
        title: "Travel Equipment",
        sub: "Find products that make road trips, outdoor vacations, and adventure travel more organized and enjoyable."
      },
      {
        icon: Trees, 
        title: "Adventure Essentials",
        sub: "Explore equipment designed for outdoor enthusiasts who enjoy nature, exploration, and active lifestyles."
      }
    ].map((item, i) => (
      <div key={item.title} className="flex gap-4 items-start text-justify">
        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
          <item.icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-black font-black text-sm leading-tight mb-2">{item.title}</p>
          <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
            {item.sub}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


              </div>

            </div>
          </div>
        </section>

        {/* Section 6: More Stores You'll Love */}
        <section className="py-20 bg-white border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-black text-black mb-10">More Stores You'll Love</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {RELATED_STORES.map((store, i) => (
                <Link 
                  key={i} 
                  href={store.href}
                  className="bg-white border border-[#f0f0f0] rounded-3xl p-6 text-center shadow-sm hover:border-[#056bfa] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="h-14 flex items-center justify-center mx-auto">
                    <img src={store.logo} alt={store.name} width={120} height={48} className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <h3 className="text-black font-black text-sm mt-5 mb-1">{store.name}</h3>
                  <p className="text-[#056bfa] font-black text-[12px] uppercase mb-4">{store.dealText}</p>
                  <span className="text-[#056bfa] font-black text-[12px] uppercase hover:underline decoration-2">Visit Store →</span>
                </Link>
              ))}
            </div>
          </div>
                  <div className="mt-10 flex justify-center">
            <Link href="/stores" className="inline-flex items-center gap-2 px-9 py-3.5 border-2 border-[#056bfa] text-[#056bfa] bg-white rounded-full font-black hover:bg-[#056bfa] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
              <LayoutGrid className="w-4 h-4" />
              View More Stores
            </Link>
          </div>
</section>

        {/* Section 7: SEO Text Section */}
      

       <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      
      {/* Left: Text Content */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          OutfitR Coupon Codes, Promo Codes & Outdoor Gear Deals
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-none rounded-br-none">
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 font-bold text-[14px]">
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Outfitr Discount Code – 62% Off on 2-Bike Hitch Rack Lite Edition</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save 62% ($110.99, reg. $289.99)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Holds up to 80 lbs, sturdy hitch-mount design</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bike Racks</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Outfitr Discount Code – 50% Off on Single Hitch E-Bike Rack Lite Edition</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save 50% ($169.99, reg. $339.99)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Built for steady & safe travel, quick loading</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">E-Bike Racks</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Outfitr Promo Code – $189.99 Off Single Hitch E-Bike Rack with Ramp</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$189.99 OFF ($150.00, reg. $339.99)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Built-in loading ramp, up to 50" wheelbase</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">E-Bike Racks</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Outfitr Promo Code – $15 Off Your Next Purchase</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$15 OFF next purchase</td>
        <td className="p-5 text-gray-500 align-middle">Newsletter subscribers, USA customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Applies to racks, carriers & outdoor gear</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Racks, Carriers & Outdoor Gear</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Outfitr Voucher Code – 41% Off on 2-Bike E-Bike Rack with Ramp</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save 41% ($269.99, reg. $459.99)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Fold-and-tilt functionality, built-in ramp</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">E-Bike Racks</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Outfitr Voucher Code – 47% Off on 2-Bike Hitch Rack with Bike Lock</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save 47% ($179.99, reg. $339.99)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Foldable, 200 lbs capacity, built-in security</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bike Racks</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Outfitr Coupon Code – Up to 47% Off on Cargo Carriers</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 47% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">For camping gear, luggage & road trips</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Cargo Carriers</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Outfitr Coupon Code – 40% Off on 2-Bike Hitch Bike Rack</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save 40% ($129.99, reg. $216.99)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Knob-folding, fits standard hitch receivers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bike Racks</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Outfitr Referral Code – 36% Off Foldable 2-Bike E-Bike Rack with Ramp</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save 36% ($304.99, reg. $479.99)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Foldable space-saving design, built-in ramp</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">E-Bike Racks</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Outfitr Referral Code – 32% Off Tire-Clamp E-Bike Rack with Ramp</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save 32% ($594.14, reg. $879.99)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Tire-clamp stability design, built-in ramp</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">E-Bike Racks</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Outfitr Discount Deal – 27% Off on 2-Bike Rack with Lock</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save 27% ($219.98, reg. $299.99)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Foldable, tiltable, integrated lock</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bike Racks</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <h3 className="text-xl font-black text-[#056bfa] mb-4">Gear Up for Less with OutfitR Coupon Codes</h3>
          <p>
            The right outdoor gear can make every adventure safer, easier, and more enjoyable. Whether you're heading into the mountains, planning a camping trip, exploring new trails, or preparing for your next road trip, having reliable equipment is essential. With the latest <strong>OutfitR coupon codes</strong>, Couponsbit helps outdoor enthusiasts discover savings on premium adventure gear and camping essentials.
          </p>
          <p>
            From durable backpacks and camping equipment to outdoor accessories built for rugged conditions, OutfitR offers products designed for explorers who value quality and performance. Before placing your next order, browse Couponsbit for the latest promo codes, discounts, and special offers.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose OutfitR?</h3>
            <p><strong>Built for Outdoor Adventures:</strong> OutfitR develops products specifically for people who spend time exploring nature and enjoying outdoor activities.</p>
            <p><strong>Quality-Driven Design:</strong> Each product is created with durability and functionality in mind to handle a variety of outdoor environments.</p>
            <p><strong>Wide Product Selection:</strong> Whether you're planning a camping trip or upgrading your travel gear, OutfitR offers equipment for different adventure needs.</p>
            <p><strong>Practical Performance:</strong> The brand focuses on products that balance comfort, reliability, and usability during outdoor experiences.</p>
            <p><strong>Online Shopping Convenience:</strong> Browse, compare, and order outdoor gear from the comfort of your home.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use an OutfitR Coupon Code</h3>
            <p className="text-gray-700 font-bold -mt-4">Saving on your next purchase is quick and easy.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit Couponsbit — Browse the latest OutfitR coupon codes and promotional offers.",
                "Step 2: Choose a Deal — Select the offer that best matches your purchase.",
                "Step 3: Copy the Coupon Code — Copy the available promo code before visiting OutfitR.",
                "Step 4: Shop Your Favorite Gear — Add your preferred outdoor products to your shopping cart.",
                "Step 5: Apply the Coupon — Paste the coupon code during checkout if applicable.",
                "Step 6: Complete Your Order — Finish your purchase and get ready for your next outdoor adventure."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Smart Ways to Save More at OutfitR</h3>
            <p className="text-gray-700 font-bold">Want to maximize your savings? Here are a few practical tips.</p>
            <p><strong>Check Couponsbit Before Every Purchase:</strong> New OutfitR promo codes and seasonal offers may become available throughout the year.</p>
            <p><strong>Shop During Holiday Sales:</strong> Major shopping events often feature additional discounts on outdoor equipment.</p>
            <p><strong>Plan Ahead for Seasonal Adventures:</strong> Buying gear before peak camping or hiking seasons can help you avoid last-minute purchases.</p>
            <p><strong>Bundle Your Gear:</strong> Purchasing everything you need for an upcoming trip in one order may help you qualify for promotions or shipping benefits.</p>
            <p><strong>Join Brand Updates:</strong> Subscribing to newsletters can help you stay informed about future product launches and exclusive offers.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Quality Outdoor Gear Matters</h3>
            <p>Investing in dependable outdoor equipment can make every trip more comfortable and enjoyable.</p>
            <p className="text-gray-700 font-bold">Reliable gear helps you:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Stay organized during travel</li>
              <li>Improve comfort while camping</li>
              <li>Carry equipment more efficiently</li>
              <li>Prepare for changing weather conditions</li>
              <li>Enjoy outdoor adventures with greater confidence</li>
            </ul>
            <p>Whether you're an experienced explorer or planning your first camping trip, choosing quality equipment can enhance your overall experience.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for OutfitR Deals?</h3>
            <p className="text-gray-700 font-bold">Couponsbit helps shoppers discover valuable savings across outdoor gear, travel products, fashion, technology, and lifestyle brands.</p>
            <p><strong>Updated Discounts:</strong> We regularly update available OutfitR promotions and coupon codes.</p>
            <p><strong>Easy-to-Find Deals:</strong> Browse offers in one convenient location before making your purchase.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use whenever you're searching for ways to save.</p>
            <p><strong>Trusted Brands:</strong> In addition to outdoor gear, Couponsbit features savings from hundreds of popular brands across multiple shopping categories.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Get Ready for Your Next Adventure</h3>
            <p>Whether you're exploring scenic trails, planning a camping weekend, or preparing for your next road trip, having dependable gear can make all the difference.</p>
            <p>Browse the latest OutfitR coupon codes, promo offers, and outdoor gear deals on Couponsbit today and save on the equipment you need for your next adventure.</p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button 
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* FAQs Accordion */}
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
          {[
            { q: "What is OutfitR?", a: "OutfitR is an outdoor gear brand that offers equipment and accessories designed for camping, hiking, travel, and outdoor adventures." },
            { q: "What products does OutfitR sell?", a: "OutfitR offers outdoor gear such as backpacks, camping equipment, travel accessories, and other adventure essentials." },
            { q: "Where can I find OutfitR coupon codes?", a: "You can browse the latest OutfitR coupon codes, promo offers, and outdoor gear deals on Couponsbit." },
            { q: "Is OutfitR suitable for outdoor enthusiasts?", a: "Yes. OutfitR designs products for campers, hikers, travelers, and anyone who enjoys spending time outdoors." },
            { q: "Does OutfitR offer gear for camping and hiking?", a: "Yes. The brand offers products designed to support a variety of outdoor activities, including camping, hiking, and adventure travel." },
            { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps shoppers discover verified coupon codes, promo offers, and discounts from trusted brands." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular OutfitR Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Camping Backpack", "OutfitR Promo Code", "Rugged Trail Gear", "Adventure Equipment", "Hiking Packing Pack", "Outdoor Accessories", "Travel Storage Bags", "Couponsbit Outdoor"].map(tag => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top OutfitR Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Adventure Bundle Pack", sub: "Save up to 25% when bundling essential backpacks and trail hardware" },
              { heading: "First Order Promo Code", sub: "Special percentage metrics adjusted on introductory store registrations" },
              { heading: "Complimentary Delivery", sub: "Standard logistics handling applied cleanly over minimum budget parameters" },
              { heading: "Pre-Season Equipment Sale", sub: "Limited-time price reductions on selected canvas setups and items" },
              { heading: "Couponsbit Active Coupon", sub: "Instant validation code application calculated cleanly during check out" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">R</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://outfitr.com" target="_blank" rel="nofollow noopener noreferrer" aria-label={`Get OutfitR deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

        
      </main>

      <Footer />
    </div>
  );
}
