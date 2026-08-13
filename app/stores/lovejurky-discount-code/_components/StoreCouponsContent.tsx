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
    discount: "SHIPPING",
    label: "FREE",
    title: "LovesJerkyCo Discount Code – Free Shipping on Orders Over $66",
    heading: "SHIPPING",
    sub: "LovesJerkyCo Discount Code",
    description: "Stock up on jerky, seasonings, and favorite snacks while saving on delivery",
    usedCount: "0",
    expiresIn: "TBD",
    code: "LOVEJERKY1"
  },
  {
    id: "c2",
    discount: "$50",
    label: "From",
    title: "LovesJerkyCo Discount Code – 6-Flavour Sample Packs for $50",
    heading: "$50",
    sub: "LovesJerkyCo Discount Code",
    description: "Try 6 different flavors for $50 with the sample pack collection",
    usedCount: "0",
    expiresIn: "TBD",
    code: "LOVEJERKY2"
  },
  {
    id: "c3",
    discount: "$32",
    label: "From",
    title: "LovesJerkyCo USA – Redmond Real Salt 5 oz for $32",
    heading: "$32",
    sub: "LovesJerkyCo USA",
    description: "Get 5 oz Redmond Real Salt for $32",
    usedCount: "0",
    expiresIn: "TBD",
    code: "LOVEJERKY3"
  },
  {
    id: "c4",
    discount: "$50",
    label: "From",
    title: "LovesJerkyCo USA – 6-Flavour Sample Collection for $50",
    heading: "$50",
    sub: "LovesJerkyCo USA",
    description: "Explore the 6 Flavors Sample Pack for $50",
    usedCount: "0",
    expiresIn: "TBD",
    code: "LOVEJERKY4"
  },
  {
    id: "c5",
    discount: "$24",
    label: "From",
    title: "LovesJerkyCo USA – Teriyaki Seasoning for $24",
    heading: "$24",
    sub: "LovesJerkyCo USA",
    description: "Shop Teriyaki seasoning for $24",
    usedCount: "0",
    expiresIn: "TBD",
    code: "LOVEJERKY5"
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

export default function LoveJerkyCouponsContent() {
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
              <span className="text-black font-extrabold">LoveJerky</span>
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
                  <a href="https://lovesjerkyco.pxf.io/VOV7Ja" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002073/lovejurky-logo_o9v01b.webp" alt="LoveJerky" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">LoveJerky</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save with LovesJerkyCo discount codes and deals in Aug 2026, including free shipping on orders over $66, a 6-flavor sample pack for $50 with free shipping, Red Chili Powder from $10, and Teriyaki or Lemon Pepper seasoning for $24.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "7", label: "Coupons" },
                    { icon: Percent, val: "7", label: "Deals" },
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
                    <a href="https://lovesjerkyco.pxf.io/VOV7Ja" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518247/112_t0jk0k.webp" alt="LoveJerky Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://lovesjerkyco.pxf.io/VOV7Ja" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518247/113_esnx6d.webp" alt="LoveJerky Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://lovesjerkyco.pxf.io/VOV7Ja" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518246/114_i8exbl.webp" alt="LoveJerky Voucher Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">LoveJerky Coupon Codes & Offers</h2>
                  
                </div>

                

                {/* Coupon 1 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FREE</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">SHIPPING</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">LovesJerkyCo Discount Code – Free Shipping on Orders Over $66</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Stock up on jerky, seasonings, and favorite snacks while saving on delivery</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available on eligible U.S. orders</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Shop online and enjoy convenient savings on shipping</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>LovesJerkyCo Discount Code, Free Shipping, Jerky Deals, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lovesjerkyco.pxf.io/VOV7Ja" target="_blank" rel="noopener noreferrer" aria-label="Get LovesJerkyCo deal: LovesJerkyCo Discount Code – Free Shipping on Orders Over $66" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">From</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$50</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">LovesJerkyCo Discount Code – 6-Flavour Sample Packs for $50</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Try 6 different flavors for $50 with the sample pack collection</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes options such as Hatch Green Chile, Teriyaki, and Garlic Powder</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>FREE SHIPPING is included with the sample pack offer</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>LovesJerkyCo Discount Code, Sample Pack Deal, Jerky Flavors, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lovesjerkyco.pxf.io/VOV7Ja" target="_blank" rel="noopener noreferrer" aria-label="Get LovesJerkyCo deal: LovesJerkyCo Discount Code – 6-Flavour Sample Packs for $50" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">From</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$32</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">LovesJerkyCo USA – Redmond Real Salt 5 oz for $32</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get 5 oz Redmond Real Salt for $32</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A versatile seasoning option for everyday cooking</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great for meats, snacks, and homemade recipes</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Shop online while supplies last</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>LovesJerkyCo Discount Code, Redmond Real Salt, Seasoning Deals, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lovesjerkyco.pxf.io/VOV7Ja" target="_blank" rel="noopener noreferrer" aria-label="Get LovesJerkyCo deal: LovesJerkyCo USA – Redmond Real Salt 5 oz for $32" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">From</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$50</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">LovesJerkyCo USA – 6-Flavour Sample Collection for $50</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Explore the 6 Flavors Sample Pack for $50</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Discover a variety of jerky and seasoning flavors in one collection</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for trying different varieties before choosing your favorites</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Shipping is calculated at checkout unless a free-shipping offer applies</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>LovesJerkyCo Discount Code, Sample Pack, Jerky Deals, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lovesjerkyco.pxf.io/VOV7Ja" target="_blank" rel="noopener noreferrer" aria-label="Get LovesJerkyCo deal: LovesJerkyCo USA – 6-Flavour Sample Collection for $50" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">From</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$24</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">LovesJerkyCo USA – Teriyaki Seasoning for $24</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Shop Teriyaki seasoning for $24</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Add a savory flavor to meats, snacks, and everyday meals</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great for homemade recipes, marinades, and cooking</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available online while supplies last</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>LovesJerkyCo Discount Code, Teriyaki Seasoning, Food Deals, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lovesjerkyco.pxf.io/VOV7Ja" target="_blank" rel="noopener noreferrer" aria-label="Get LovesJerkyCo deal: LovesJerkyCo USA – Teriyaki Seasoning for $24" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">From</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$24</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">LovesJerkyCo USA – Lemon Pepper Seasoning for $24</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get Lemon Pepper seasoning for $24</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Adds a zesty and savory flavor to meats and everyday dishes</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great for home cooking, grilling, and seasoning recipes</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Shipping is calculated at checkout</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>LovesJerkyCo Discount Code, Lemon Pepper, Seasoning Deals, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lovesjerkyco.pxf.io/VOV7Ja" target="_blank" rel="noopener noreferrer" aria-label="Get LovesJerkyCo deal: LovesJerkyCo USA – Lemon Pepper Seasoning for $24" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">From</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$10</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">LovesJerkyCo USA – Red Chili Powder from $10</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Add bold flavor and heat to your favorite recipes</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for cooking, marinades, seasoning, and snacks</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available in different sizes starting from $10</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>LovesJerkyCo Discount Code, Red Chili Powder, Spice Deals, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lovesjerkyco.pxf.io/VOV7Ja" target="_blank" rel="noopener noreferrer" aria-label="Get LovesJerkyCo deal: LovesJerkyCo USA – Red Chili Powder from $10" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About Love's Jerky Co</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Love's Jerky Co is a meat-snack brand focused on jerky and other convenient snack options. Its products are designed for people who enjoy savory, flavorful snacks that can easily fit into busy days, road trips, outdoor activities, or quick breaks.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Jerky has long been a popular choice for travelers and outdoor enthusiasts because it is easy to carry and doesn't require the preparation associated with a full meal. Love's Jerky Co builds on that convenience with a selection of flavors intended to appeal to different tastes.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Whether you're shopping for yourself, putting together a snack stash, or looking for something to take on your next trip, the brand offers a simple way to add variety to your snack drawer.

                  </p>
                  <a href="https://lovesjerkyco.pxf.io/VOV7Ja" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <h3 className="text-black font-black text-lg mb-8">What Can You Find at Love's Jerky Co?</h3>

  <div className="space-y-8">
    {[
      { 
        icon: ShoppingBag, 
        title: "Beef Jerky", 
        sub: "Beef jerky is at the center of the brand's offering. Depending on the available selection, shoppers can explore different flavors and seasoning combinations, from classic savory profiles to options with more pronounced spice or sweetness. It's an easy snack to keep in your bag, desk drawer, car, or travel pack." 
      },
      { 
        icon: Search, 
        title: "Specialty Flavors", 
        sub: "If you don't want to stick with traditional jerky, exploring different flavor profiles can make snacking more interesting. Love's Jerky Co offers varieties designed for people who prefer different combinations of savory, smoky, sweet, or spicy flavors. Trying individual flavors can also help you find favorites before ordering larger quantities." 
      },
      { 
        icon: LayoutGrid, 
        title: "Snack Packs & Multi-Item Orders", 
        sub: "If you're already familiar with the brand's products, ordering multiple bags can be a convenient way to keep your favorite snacks available. Multi-item purchases can also be worth considering when promotions or qualifying offers are available." 
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
          Love's Jerky Co Promo Code, Coupon Code & Discount Offers
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
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Free Shipping</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Orders Over $66</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Eligible U.S. orders</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Jerky & Seasonings</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">6-Flavour Sample Pack</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $50</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Includes Hatch Green Chile, Teriyaki & more</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sample Packs</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Redmond Real Salt 5oz</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $32</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">While supplies last</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Seasoning</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">6-Flavour Sample Collection</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $50</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Shipping calculated at checkout</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sample Collection</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Teriyaki Seasoning</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $24</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">While supplies last</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Seasoning</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Lemon Pepper Seasoning</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $24</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Shipping calculated at checkout</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Seasoning</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Red Chili Powder</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $10</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Multiple sizes available</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Spices</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={`text-gray-600 font-medium leading-relaxed space-y-6 relative transition-all ${!isReadMore ? 'max-h-[500px] overflow-hidden' : ''}`}>
          
          {/* Intro */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Snack Smarter with a Love's Jerky Co Promo Code</h3>
            <p>
              Whether you're packing snacks for a road trip, looking for something savory between meals, or simply stocking up on protein-rich treats, Love's Jerky Co offers plenty of options for jerky lovers. The brand focuses on flavorful meat snacks that are convenient to take on the go and easy to keep stocked at home.
            </p>
            <p>
              If you're planning to try a new flavor or order a few bags for your next adventure, check CouponsBit before placing your order. You may find a Love's Jerky Co promo code, Love's Jerky Co coupon code, Love's Jerky Co discount code, or other promotional offer that can bring down the cost of your purchase.
            </p>
          </div>

          {/* Why Choose */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Why Choose Love's Jerky Co?</h3>
            <p><strong>Convenient for Life on the Go:</strong> Jerky is naturally suited to busy schedules. You can take it to work, pack it for a hike, keep it in your travel bag, or bring it along for a long drive without needing elaborate preparation.</p>
            <p><strong>Flavor Variety:</strong> Different seasonings and flavor combinations allow shoppers to move beyond the same snack every time. Trying a few varieties can make it easier to discover something that matches your taste.</p>
            <p><strong>Easy Online Ordering:</strong> Shopping online lets you browse the available selection from home and order your preferred products without having to search for them at multiple stores.</p>
            <p><strong>A Practical Road-Trip Snack:</strong> Few snacks are as convenient for long drives as jerky. It's compact, easy to pack, and doesn't take up much room in a travel bag or cooler.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <div>
              <h3 className="text-xl font-black text-[#056bfa] mb-2">How to Use a Love's Jerky Co Promo Code</h3>
              <p className="text-gray-500 font-normal text-sm">Found a Love's Jerky Co promo code on CouponsBit? Here's how to use it.</p>
            </div>
            <div className="space-y-6">
              {[
                "Step 1: Find an Available Offer — Visit CouponsBit and browse the current Love's Jerky Co promotions.",
                "Step 2: Choose Your Deal — Select a promo code, coupon code, discount code, or other offer that matches your order.",
                "Step 3: Read the Terms — Check whether the promotion has requirements such as a minimum purchase, selected products, or an expiration date.",
                "Step 4: Copy the Code — Copy the promotional code before heading to the Love's Jerky Co website.",
                "Step 5: Shop for Your Favorites — Add your preferred jerky and other eligible products to your cart.",
                "Step 6: Apply the Code — Enter the code in the appropriate promotional field during checkout.",
                "Step 7: Complete Your Order — Check your updated total and complete your purchase once the discount has been applied."
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

          {/* Ways to Save */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Ways to Save More at Love's Jerky Co</h3>
            <p className="text-gray-500 italic">A promo code isn't the only opportunity to spend less on your snack order.</p>
            <p><strong>Buy Multiple Bags:</strong> If you've already found flavors you enjoy, purchasing several at once can be more convenient than placing repeated small orders.</p>
            <p><strong>Watch for Seasonal Promotions:</strong> Snack brands may introduce special offers around holidays, gifting seasons, and major shopping events. Check for current promotions before placing an order.</p>
            <p><strong>Look for Bundles:</strong> When available, bundles or multi-product offers can be useful for shoppers who want to sample several flavors or stock up.</p>
            <p><strong>Check for Shipping Offers:</strong> Depending on the current promotions, shipping-related offers can make a difference to the final cost of a smaller order.</p>
            <p><strong>Check CouponsBit Before Checkout:</strong> Before you pay, search for a Love's Jerky Co coupon code or Love's Jerky Co discount code on CouponsBit to see whether a current offer is available.</p>
          </div>

          {/* Who Might Enjoy */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Who Might Enjoy Love's Jerky Co?</h3>
            <p>Love's Jerky Co can be a convenient option for people who enjoy savory snacks and want something easy to carry.</p>
            <p>It's particularly suited to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-bold">
              {[
                "Road trippers",
                "Hikers and outdoor enthusiasts",
                "Busy professionals",
                "Travelers",
                "Snack lovers",
                "People building an office snack stash",
                "Customers looking for convenient giftable food items"
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>Whether you're preparing for a long journey or simply want to keep snacks within reach, jerky can fit easily into a variety of routines.</p>
          </div>

          {/* Why Check CouponsBit */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Why Check CouponsBit for Love's Jerky Co Deals?</h3>
            <p>Before ordering snacks online, it only takes a moment to check whether an offer is available. CouponsBit brings promotional opportunities together so shoppers can look for a Love's Jerky Co promo code, coupon code, or discount before checking out.</p>
            <p><strong>Easy to Browse:</strong> Find available promotions in one place rather than searching across multiple coupon websites.</p>
            <p><strong>Free for Shoppers:</strong> CouponsBit is free to use when looking for deals and promotional codes.</p>
            <p><strong>Updated Offers:</strong> We regularly refresh listings so shoppers can look for current promotions before making a purchase.</p>
            <p><strong>Deals Beyond Snacks:</strong> CouponsBit also features offers across travel, fashion, technology, home, software, and other popular categories.</p>
          </div>

          {/* Conclusion */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Stock Up on Your Favorite Snacks for Less</h3>
            <p>From road trips and outdoor adventures to everyday cravings, Love's Jerky Co offers a convenient way to keep savory snacks within reach. Exploring different flavors can make your snack stash more interesting, while ordering multiple products can help you prepare for upcoming travel or busy weeks.</p>
            <p>Before placing your next order, check CouponsBit for a Love's Jerky Co promo code, Love's Jerky Co coupon code, or Love's Jerky Co discount code. A quick search before checkout could help you save on your next snack haul.</p>
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
              q: "What does Love's Jerky Co sell?",
              a: "Love's Jerky Co specializes in jerky and meat-snack products in a variety of flavors and options."
            },
            {
              q: "Where can I find a Love's Jerky Co promo code?",
              a: "You can check CouponsBit for the latest Love's Jerky Co promo code, coupon code, and discount code before placing your order."
            },
            {
              q: "Can I use a Love's Jerky Co coupon code on any product?",
              a: "That depends on the individual promotion. Some offers may apply only to selected products or orders, so check the terms before using a code."
            },
            {
              q: "Does Love's Jerky Co offer different jerky flavors?",
              a: "Yes, shoppers can explore different flavor profiles and varieties depending on the brand's current selection."
            },
            {
              q: "Is jerky suitable for travel?",
              a: "Jerky is a convenient snack for road trips, outdoor activities, and travel because it is compact and easy to carry."
            },
            {
              q: "How can I save money when shopping at Love's Jerky Co?",
              a: "Look for a current Love's Jerky Co discount code, promotional offers, bundles, and shipping deals before completing your order."
            },
            {
              q: "Is CouponsBit free to use?",
              a: "Yes. CouponsBit is free for shoppers looking for promo codes, coupon codes, vouchers, and other discounts."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Love's Jerky Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Beef Jerky Deals",
              "Sample Packs",
              "Free Shipping Jerky",
              "Teriyaki Jerky",
              "Spicy Seasonings",
              "Love's Jerky Promo",
              "Snack Bundles",
              "Protein Snacks"
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
              { heading: "Free Shipping", sub: "Orders Over $66" },
              { heading: "6-Flavour Sample Pack", sub: "From $50" },
              { heading: "Redmond Real Salt", sub: "From $32" },
              { heading: "Teriyaki Seasoning", sub: "From $24" },
              { heading: "Red Chili Powder", sub: "From $10" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  LJ
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
                  href="https://lovesjerkyco.pxf.io/VOV7Ja" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Get Love's Jerky deal: ${deal.heading}`} 
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
