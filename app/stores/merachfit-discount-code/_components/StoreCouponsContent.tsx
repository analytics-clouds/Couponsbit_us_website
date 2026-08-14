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
  Laptop, 
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

// --- Data ---
const COUPONS: Coupon[] = [
  {
    id: "c1",
    discount: "$250",
    label: "SAVE",
    title: "Merachfit Discount Code USA – NovaRow 950 Dual Resistance Rower | Save $250",
    heading: "$250",
    sub: "Merachfit Discount Code USA",
    description: "Get the NovaRow 950 Dual Resistance Rowing Machine for $469.99",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MERACHFIT1"
  },
  {
    id: "c2",
    discount: "$260",
    label: "SAVE",
    title: "Merachfit USA – Q1S Interactive Rowing Machine | Save $260",
    heading: "$260",
    sub: "Merachfit USA",
    description: "Shop the Q1S Interactive Rowing Machine for $469.99, down from $729.99",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MERACHFIT2"
  },
  {
    id: "c3",
    discount: "30%",
    label: "SAVE",
    title: "Merachfit USA – UltraWalk W60 Plus Walking Pad | 30% OFF",
    heading: "30% OFF",
    sub: "Merachfit USA",
    description: "Get the UltraWalk W60 Plus for $349.99, reduced from $499.99",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MERACHFIT3"
  },
  {
    id: "c4",
    discount: "$170",
    label: "SAVE",
    title: "Merachfit USA – CoreRow R300 Water Rower | Save $170",
    heading: "$170",
    sub: "Merachfit USA",
    description: "Get the CoreRow R300 Rubberwood Water Rower for $279.99",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MERACHFIT4"
  },
  {
    id: "c5",
    discount: "$190",
    label: "SAVE",
    title: "Merachfit USA – CoreRow R28 Wooden Water Rower | Save $190",
    heading: "$190",
    sub: "Merachfit USA",
    description: "Shop the CoreRow R28 Wooden Water Rower for $269.99",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MERACHFIT5"
  }
];

const RELATED_STORES: StoreItem[] = [
  { name: "StubHub",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/stubhub-coupon-code_fplhay.webp",        dealText: "Up to 15% OFF", href: "/stores/stubhub-discount-code" },
  { name: "Viagogo",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/viagogo-coupon-code_t65aol.webp",        dealText: "Up to 10% OFF", href: "/stores/viagogo-discount-code" },
  { name: "Driffle",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/driffle-coupon-code_n2upgl.webp",        dealText: "Up to 70% OFF", href: "/stores/driffle-discount-code" },
  { name: "Reolink",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/reolink-coupon-code_zsrmh1.webp",        dealText: "Up to 30% OFF", href: "/stores/reolink-discount-code" },
  { name: "Lyca Mobile",    logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/lyca-mobile-coupon-code_svvddg.webp",    dealText: "Up to 20% OFF", href: "/stores/lyca-mobile-discount-code" },
  { name: "Rayneo",         logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/reyneo-coupon-code_q3crak.webp",         dealText: "Up to 30% OFF", href: "/stores/rayneo-discount-code" },
];

export default function MerachFitCouponsContent() {
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
              <span className="text-black font-extrabold">MerachFit</span>
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
                  <a href="http://hongkongmerachtechnologycolimited.pxf.io/c/6434050/3279852/42158?subId1=1015" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp" alt="MerachFit" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">MerachFit</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save with Merachfit discount codes and deals in Aug 2026, including up to 69% off a simulated stair machine, $260 off the Q1S Rower, $250 off NovaRow 950, 30% off UltraWalk W60 Plus, and additional home fitness savings.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "8", label: "Coupons" },
                    { icon: Percent, val: "8", label: "Deals" },
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
                    <a href="http://hongkongmerachtechnologycolimited.pxf.io/c/6434050/3279852/42158?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518246/104_t3trsm.webp" alt="MerachFit Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="http://hongkongmerachtechnologycolimited.pxf.io/c/6434050/3279852/42158?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518246/103_hicoew.webp" alt="MerachFit Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="http://hongkongmerachtechnologycolimited.pxf.io/c/6434050/3279852/42158?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518246/105_kk8arq.webp" alt="MerachFit Voucher Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
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
              
              {/* Left Column: Coupons */}
              <div className="lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">MerachFit Coupon Codes & Offers</h2>
                  
                </div>

                

                {/* Coupon 1 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$250</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Merachfit Discount Code USA – NovaRow 950 Dual Resistance Rower | Save $250</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the NovaRow 950 Dual Resistance Rowing Machine for $469.99</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Combines water and magnetic resistance for versatile home workouts</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features MERACHGO auto-resistance and a space-saving drawer-style design</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Supports up to 350 lbs for sturdy and comfortable training</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Merachfit Discount Code, NovaRow 950, Rowing Machine USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="http://hongkongmerachtechnologycolimited.pxf.io/c/6434050/3279852/42158?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Merachfit deal: Merachfit Discount Code USA – NovaRow 950 Dual Resistance Rower | Save $250" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 2 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$260</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Merachfit USA – Q1S Interactive Rowing Machine | Save $260</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Shop the Q1S Interactive Rowing Machine for $469.99, down from $729.99</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features a 15.6-inch display for an engaging workout experience</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for cardio, endurance training, and full-body fitness</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Limited-time summer savings for USA shoppers</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Merachfit Discount Code, Q1S Rower, Rowing Machine USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="http://hongkongmerachtechnologycolimited.pxf.io/c/6434050/3279852/42158?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Merachfit deal: Merachfit USA – Q1S Interactive Rowing Machine | Save $260" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 3 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">30%</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Merachfit USA – UltraWalk W60 Plus Walking Pad | 30% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the UltraWalk W60 Plus for $349.99, reduced from $499.99</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Designed for convenient walking and low-impact cardio at home</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features enhanced RGB lighting and audio</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Compact design makes it easy to use in home spaces</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Merachfit Discount Code, UltraWalk W60 Plus, Walking Pad USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="http://hongkongmerachtechnologycolimited.pxf.io/c/6434050/3279852/42158?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Merachfit deal: Merachfit USA – UltraWalk W60 Plus Walking Pad | 30% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 4 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$170</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Merachfit USA – CoreRow R300 Water Rower | Save $170</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the CoreRow R300 Rubberwood Water Rower for $279.99</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features a 12-blade water resistance system for enhanced rowing</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Foldable and standing storage options help save space</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ergonomic handle provides a comfortable workout grip</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Merachfit Discount Code, CoreRow R300, Water Rower USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="http://hongkongmerachtechnologycolimited.pxf.io/c/6434050/3279852/42158?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Merachfit deal: Merachfit USA – CoreRow R300 Water Rower | Save $170" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 5 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$190</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Merachfit USA – CoreRow R28 Wooden Water Rower | Save $190</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Shop the CoreRow R28 Wooden Water Rower for $269.99</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features a 180° foldable design for convenient storage</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Made with FSC-certified rubberwood</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Supports up to 400 lbs for home fitness workouts</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Merachfit Discount Code, CoreRow R28, Wooden Rower USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="http://hongkongmerachtechnologycolimited.pxf.io/c/6434050/3279852/42158?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Merachfit deal: Merachfit USA – CoreRow R28 Wooden Water Rower | Save $190" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 6 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$61</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Merachfit USA – S23 Recumbent Bike | Save $61</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the S23 Recumbent Bike for $239, down from $300</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes resistance bands for full-body home workouts</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Comfortable seat and backrest provide support during exercise</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Supports up to 350 lbs with smooth, quiet operation</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Merachfit Discount Code, S23 Recumbent Bike, Exercise Bike USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="http://hongkongmerachtechnologycolimited.pxf.io/c/6434050/3279852/42158?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Merachfit deal: Merachfit USA – S23 Recumbent Bike | Save $61" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 7 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$109.99</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Merachfit USA – Simulated Stair Machine | Save $109.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the foldable simulated stair machine for just $49.99, down from $159.98</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Adjustable height allows you to customize your workout</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Foldable construction makes storage simple</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Limited clearance offer available while supplies last</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Merachfit Discount Code, Stair Machine USA, Fitness Equipment</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="http://hongkongmerachtechnologycolimited.pxf.io/c/6434050/3279852/42158?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Merachfit deal: Merachfit USA – Simulated Stair Machine | Save $109.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 8 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Only</p>
          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$339.99</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Merachfit USA – NovaRow RS3 Magnetic Rower | $339.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Shop the NovaRow RS3 Magnetic Rower for $339.99</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Offers multiple resistance options for versatile training</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Supports dual and single-oar workout configurations</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for low-impact cardio and full-body home fitness</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Merachfit Discount Code, NovaRow RS3, Magnetic Rower USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="http://hongkongmerachtechnologycolimited.pxf.io/c/6434050/3279852/42158?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Merachfit deal: Merachfit USA – NovaRow RS3 Magnetic Rower | $339.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>




              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">
                {/* About Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Get to Know Merach Fit</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Merach is a home fitness brand focused on making exercise equipment more accessible for everyday users. Its product range includes connected and traditional fitness machines designed for cardio workouts, strength training, and general fitness.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand's equipment is aimed at home users who want to exercise on their own schedule. Whether you're looking for a rowing machine for full-body cardio, a treadmill for indoor walking and running, or a stationary bike for low-impact exercise, Merach offers several categories to explore.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Many of its machines also incorporate technology and connected workout features, giving users additional ways to track their sessions and make home workouts more engaging.

                  </p>
                  <a href="http://hongkongmerachtechnologycolimited.pxf.io/c/6434050/3279852/42158?subId1=1015" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <h3 className="text-black font-black text-lg mb-8">What Can You Buy from Merach?</h3>

  <div className="space-y-8">
    {[
      { 
        icon: Server, 
        title: "Rowing Machines", 
        sub: "Rowing machines are among Merach's notable fitness products. A rowing workout can engage both the upper and lower body while providing a cardio-focused exercise session. Depending on the model, shoppers can find features such as adjustable resistance, digital displays, foldable designs, and connected workout capabilities. A rowing machine can be particularly useful for people who want a full-body workout without needing several different pieces of equipment." 
      },
      { 
        icon: Globe, 
        title: "Treadmills", 
        sub: "For people who prefer walking or running, Merach treadmills provide an option for exercising indoors. A home treadmill can be useful when weather, traffic, or a busy schedule makes outdoor running difficult. Depending on the model, features may include different speed settings, workout programs, compact designs, and digital displays." 
      },
      { 
        icon: LayoutGrid, 
        title: "Exercise Bikes", 
        sub: "Stationary bikes provide a convenient way to add cycling to a home workout routine. Merach offers different bike designs suited to indoor cardio workouts. They can be a practical choice for people who want a lower-impact alternative to running while still incorporating cardiovascular exercise into their routine." 
      },
      { 
        icon: Cloud, 
        title: "Ellipticals", 
        sub: "Elliptical machines offer another low-impact cardio option for home gyms. Their movement combines upper- and lower-body activity while reducing some of the impact associated with running." 
      },
      { 
        icon: Cpu, 
        title: "Strength & Fitness Equipment", 
        sub: "A home gym doesn't need to revolve around cardio machines. Merach also offers equipment and accessories that can complement strength and conditioning workouts. Adding smaller fitness equipment alongside a larger machine can help create a more versatile workout space without requiring a commercial gym membership." 
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
        <h2 className="text-3xl font-black text-black mb-6 leading-tight italic">
          Merach Fit Promo Code, Coupon Code & Discount Offers
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
        <td className="p-5 text-black font-black align-middle max-w-[220px]">NovaRow 950 Dual Resistance Rower</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save $250</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Water + magnetic resistance</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Rowing Machines</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Q1S Interactive Rowing Machine</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save $260</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">15.6-inch display</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Rowing Machines</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">UltraWalk W60 Plus Walking Pad</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">30% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">RGB lighting & audio</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Walking Pads</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">CoreRow R300 Water Rower</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save $170</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">12-blade water resistance</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Water Rowers</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">CoreRow R28 Wooden Water Rower</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save $190</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">180° foldable, FSC-certified</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Water Rowers</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">S23 Recumbent Bike</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save $61</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Includes resistance bands</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Exercise Bikes</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Simulated Stair Machine</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save $109.99</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Adjustable height, foldable</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Fitness Equipment</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">NovaRow RS3 Magnetic Rower</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$339.99</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Multiple resistance options</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Rowing Machines</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={`text-gray-600 font-medium leading-relaxed space-y-6 relative transition-all ${!isReadMore ? 'max-h-[500px] overflow-hidden' : ''}`}>
          
          {/* Intro */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Build a Stronger Home Gym with a Merach Fit Promo Code</h3>
            <p>
              Creating a home gym doesn't necessarily mean filling an entire room with expensive equipment. With the right fitness machine, you can bring effective cardio and strength workouts into your daily routine without relying on a commercial gym.
            </p>
            <p>
              Merach Fit offers home fitness equipment designed for people who want to make exercise more accessible from home. From rowing machines and treadmills to bikes, ellipticals, and other workout equipment, the brand provides options for different fitness goals, workout spaces, and budgets.
            </p>
            <p>
              If you're planning to purchase new equipment, check CouponsBit before placing your order. You may find a Merach Fit discount code, Merach Fit coupon code, Merach Fit promo code, or other promotional offer that can help reduce the cost of your purchase.
            </p>
          </div>

          {/* Why Consider Merach */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Why Consider Merach for a Home Gym?</h3>
            <p><strong>Equipment for Different Workout Styles:</strong> Not everyone enjoys the same type of exercise. Some people prefer running, while others enjoy cycling, rowing, or low-impact cardio. Merach's range of equipment gives shoppers different ways to build a workout routine around their preferred activities.</p>
            <p><strong>Designed for Home Use:</strong> Space is one of the biggest considerations when purchasing fitness equipment. Several home fitness machines are designed with residential use in mind, including options that can be folded or stored more easily when they're not being used. Before purchasing, measure your available space and compare the machine's dimensions with your intended workout area.</p>
            <p><strong>Technology-Enhanced Workouts:</strong> Some Merach equipment incorporates connected features and digital workout experiences. Depending on the product, these features can make it easier to monitor workout information or follow guided sessions.</p>
            <p><strong>Different Price Points:</strong> Home fitness equipment can vary considerably in price. Merach offers products across different price ranges, allowing shoppers to compare features and select equipment that fits their budget.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <div>
              <h3 className="text-xl font-black text-[#056bfa] mb-2">How to Use a Merach Fit Promo Code</h3>
              <p className="text-gray-500 font-normal text-sm">Found a Merach Fit promo code on CouponsBit? Here's how to make the most of it.</p>
            </div>
            <div className="space-y-6">
              {[
                "Step 1: Browse Available Offers — Visit CouponsBit and look through the latest Merach Fit promotional offers.",
                "Step 2: Select Your Offer — Choose the promo code, coupon code, or discount code that best matches your intended purchase.",
                "Step 3: Check the Conditions — Read the offer details before using the code. Some promotions may apply only to particular products, order values, or customer accounts.",
                "Step 4: Copy the Code — Copy the applicable code and head to the Merach website.",
                "Step 5: Add Your Fitness Equipment — Select your preferred treadmill, rowing machine, exercise bike, elliptical, or other fitness product and add it to your cart.",
                "Step 6: Apply the Code — Enter the promotional code during checkout in the relevant field.",
                "Step 7: Confirm Your Savings — Review the final order total to make sure the promotion has been applied before completing your purchase."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ways to Save More */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Ways to Save More on Merach Fitness Equipment</h3>
            <p className="text-gray-500 italic">A Merach Fit promo code isn't necessarily the only way to reduce the cost of your order. Try these strategies when shopping for home gym equipment.</p>
            <p><strong>Compare Different Models:</strong> Don't automatically choose the most expensive machine. Compare specifications and features to determine which model actually suits your workout needs.</p>
            <p><strong>Look for Seasonal Promotions:</strong> Fitness brands often run promotions around major shopping periods and New Year fitness campaigns. These can be good opportunities to look for reduced prices.</p>
            <p><strong>Check for Bundle Offers:</strong> If you're building a complete home gym, look for equipment bundles or promotions that include accessories with larger purchases.</p>
            <p><strong>Consider Your Available Space:</strong> Buying the right-sized equipment can prevent the need for expensive replacements later. Check dimensions, folding mechanisms, and storage requirements before ordering.</p>
            <p><strong>Check CouponsBit Before Checkout:</strong> Search for a current Merach Fit coupon code or Merach Fit discount code before completing your purchase. You may find an offer that wasn't visible when you initially started shopping.</p>
          </div>

          {/* Who Can Benefit */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Who Can Benefit from Merach Fitness Equipment?</h3>
            <p>Merach equipment can suit different types of home exercisers, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-bold">
              {[
                "Beginners building their first home gym",
                "People who prefer exercising at home",
                "Runners looking for an indoor cardio option",
                "Cycling enthusiasts",
                "Rowing enthusiasts",
                "People looking for low-impact workouts",
                "Busy professionals who want flexible workout times",
                "Fitness enthusiasts expanding their existing home gym"
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>The right equipment ultimately depends on your fitness goals, available space, preferred exercise style, and budget.</p>
          </div>

          {/* Why Check CouponsBit */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Why Check CouponsBit for Merach Fit Deals?</h3>
            <p>Shopping for fitness equipment is a significant purchase, so checking for available savings before checkout makes sense.</p>
            <p>CouponsBit brings promotional offers together so you can search for a Merach Fit promo code, coupon code, discount code, or other available deal before making your purchase.</p>
            <p><strong>Current Offers in One Place:</strong> Instead of checking multiple coupon websites, you can browse available Merach Fit offers from one location.</p>
            <p><strong>Free to Use:</strong> CouponsBit is free for shoppers looking for promotional codes and deals.</p>
            <p><strong>More Than Fitness Deals:</strong> You can also discover savings from brands across technology, travel, fashion, home, software, and other categories.</p>
          </div>

          {/* Conclusion */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Make Your Home Workouts More Affordable</h3>
            <p>A home fitness machine can be a worthwhile investment when it fits your workout preferences, available space, and routine. Whether you're interested in rowing, running, cycling, or low-impact cardio, Merach offers several options for creating a more convenient workout environment at home.</p>
            <p>Before investing in your next piece of equipment, visit CouponsBit and check for the latest Merach Fit promo code, Merach Fit coupon code, Merach Fit discount code, and available offers. A quick search could help you spend less on the equipment you need to keep moving.</p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button 
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"} 
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isReadMore ? "rotate-180" : ""}`} />
        </button>

        {/* FAQs Accordion */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
          {[
            {
              q: "What does Merach sell?",
              a: "Merach offers home fitness equipment including rowing machines, treadmills, exercise bikes, ellipticals, and other fitness products and accessories."
            },
            {
              q: "Where can I find a Merach Fit promo code?",
              a: "You can check CouponsBit for the latest Merach Fit promo code, coupon code, and discount code offers before making a purchase."
            },
            {
              q: "Does Merach offer rowing machines?",
              a: "Yes. Rowing machines are one of the key categories within Merach's home fitness equipment range."
            },
            {
              q: "Is Merach equipment suitable for home gyms?",
              a: "Merach focuses on home fitness equipment, making its products suitable for people who want to create or expand a workout space at home. Always check the dimensions and specifications of a particular model before purchasing."
            },
            {
              q: "Can I use a Merach coupon code on fitness equipment?",
              a: "A coupon's eligibility depends on its individual terms. Some offers may apply to selected products or orders, so check the conditions before checkout."
            },
            {
              q: "How can I save money on Merach equipment?",
              a: "Look for a current Merach Fit discount code, seasonal promotions, product deals, bundle offers, and other available discounts before purchasing."
            },
            {
              q: "Is CouponsBit free?",
              a: "Yes. CouponsBit is free to use and helps shoppers discover promo codes, coupon codes, vouchers, and deals from popular brands."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={`p-2 rounded-xl transition-all ${openFaq === i ? "bg-[#056bfa] text-white rotate-180" : "bg-[#f0f0f0] text-gray-500"}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 px-8 bg-white ${openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0"}`}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Merach Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Rowing Machines",
              "Smart Treadmills",
              "Exercise Bikes",
              "Ellipticals",
              "Merach Promo",
              "Home Gym Bundles",
              "Cardio Equipment",
              "Fitness Accessories"
            ].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Rowing Machine Deal", sub: "Save Up to $100" },
              { heading: "Exercise Bike Offer", sub: "Up to 30% Off" },
              { heading: "Smart Treadmills", sub: "Special Discount" },
              { heading: "Free Shipping", sub: "On Selected Orders" },
              { heading: "Home Gym Bundles", sub: "Extra Savings" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  MF
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                    {deal.heading}
                  </p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-1">
                    {deal.sub}
                  </p>
                </div>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Get deal: ${deal.heading}`} 
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90"
                >
                  Get Deal
                </a>
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
