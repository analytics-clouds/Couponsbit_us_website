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
  Plane, Dumbbell, Heart, Disc,
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
    discount: "FREE",
    label: "SHIPPING",
    badge: "Best Offer",
    title: "NuageWears USA Offer – Free Worldwide Shipping Over $60",
    heading: "Free Worldwide Shipping",
    sub: "On Orders Over $60",
    description: "Shop premium bras, shapewear and everyday essentials with free worldwide shipping on orders above $60.",
    usedCount: "112k",
    expiresIn: "2 days",
    code: "NUAGESHIP60"
  },
  {
    id: "c2",
    discount: "$49",
    label: "ONLY",
    badge: "Popular",
    title: "NuageWears Commando Chic Shorts – Only $49",
    heading: "Commando Chic Shorts",
    sub: "Only $49",
    description: "Complete your essentials collection with the Commando Chic Shorts, designed for comfort and a sleek fit.",
    usedCount: "95k",
    expiresIn: "3 days",
    code: "NUAGECHIC49"
  },
  {
    id: "c3",
    discount: "39%",
    label: "OFF",
    badge: "Trending",
    title: "NuageWears Wireless Soft Stay-Put Bra – 39% OFF",
    heading: "Wireless Soft Stay-Put Bra",
    sub: "$36.00 (Reg. $59.88)",
    description: "Experience all-day comfort with this customer-favorite everyday bra, now 39% OFF.",
    usedCount: "88k",
    expiresIn: "1 day",
    code: "NUAGEBRA39"
  },
  {
    id: "c4",
    discount: "35%",
    label: "OFF",
    title: "NuageWears Daily Cover Comfort Guard Bra – 35% OFF",
    heading: "Daily Cover Comfort Guard Bra",
    sub: "$36.00 (Reg. $56.00)",
    description: "Enjoy superior support and full coverage with the Daily Cover Comfort Guard Bra.",
    usedCount: "76k",
    expiresIn: "2 days",
    code: "NUAGECOVER35"
  },
  {
    id: "c5",
    discount: "33%",
    label: "OFF",
    title: "NuageWears Perfect Coverage Push-Up Bra – 33% OFF",
    heading: "Perfect Coverage Push-Up Bra",
    sub: "$36.00 (Reg. $54.00)",
    description: "Enhance your look with this bestselling push-up bra, offering support, comfort and a flattering silhouette.",
    usedCount: "65k",
    expiresIn: "5 days",
    code: "NUAGEPUSH33"
  },
  {
    id: "c6",
    discount: "12%",
    label: "SAVE",
    title: "NuageWears NuAir Mesh Pivot+ 5-Pack – Save 12%",
    heading: "NuAir Mesh Pivot+ 5-Pack",
    sub: "$79.00 (Reg. $90.00)",
    description: "Upgrade your essentials with this breathable mesh 5-pack, crafted for maximum comfort.",
    usedCount: "54k",
    expiresIn: "3 days",
    code: "NUAGEPIVOT12"
  },
  {
    id: "c7",
    discount: "33%",
    label: "OFF",
    title: "NuageWears NuCloud Red Holiday Bra Set – 33% OFF",
    heading: "NuCloud Red Holiday Bra Set",
    sub: "$59.00 (Reg. $89.00)",
    description: "Add elegance to your collection with this stylish, comfortable holiday bra set.",
    usedCount: "48k",
    expiresIn: "4 days",
    code: "NUAGEHOLIDAY33"
  },
  {
    id: "c8",
    discount: "$16",
    label: "FROM",
    title: "NuageWears NuAir Mesh Flex Brief – Starting at $16",
    heading: "NuAir Mesh Flex Brief",
    sub: "Starting at $16",
    description: "Stay comfortable all day with this lightweight, breathable mesh brief.",
    usedCount: "41k",
    expiresIn: "2 days",
    code: "NUAGEFLEX16"
  },
  {
    id: "c9",
    discount: "10%",
    label: "SAVE",
    title: "NuageWears NuAir Mesh Flex Brief 5-Pack – Save 10%",
    heading: "NuAir Mesh Flex Brief 5-Pack",
    sub: "$72.00 (Reg. $80.00)",
    description: "Stock up and save with this breathable, flexible 5-pack designed for everyday wear.",
    usedCount: "37k",
    expiresIn: "3 days",
    code: "NUAGEFLEX10"
  },
  {
    id: "c10",
    discount: "$18",
    label: "ONLY",
    title: "NuageWears NuAir Mesh FlexShield Thong – $18 Only",
    heading: "NuAir Mesh FlexShield Thong",
    sub: "Only $18",
    description: "Feel light and confident with this seamless, breathable mesh thong.",
    usedCount: "33k",
    expiresIn: "5 days",
    code: "NUAGESHIELD18"
  },
  {
    id: "c11",
    discount: "$14",
    label: "ONLY",
    title: "NuageWears NuCloud Original Bikini – Only $14",
    heading: "NuCloud Original Bikini",
    sub: "Only $14",
    description: "Discover second-skin comfort, ideal for yoga, pilates and daily wear.",
    usedCount: "29k",
    expiresIn: "2 days",
    code: "NUAGEBIKINI14"
  },
  {
    id: "c12",
    discount: "37%",
    label: "OFF",
    title: "NuageWears NuBloom Bra – 37% OFF",
    heading: "NuBloom Bra",
    sub: "$62.00 (Reg. $99.00)",
    description: "Elevate your comfort with the stylish NuBloom Bra, available in multiple colors.",
    usedCount: "25k",
    expiresIn: "4 days",
    code: "NUAGEBLOOM37"
  }
];

const RELATED_STORES: StoreItem[] = [
  { name: "StubHub",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/stubhub-coupon-code_fplhay.webp",        dealText: "Up to 15% OFF", href: "/stores/stubhub-coupon-code" },
  { name: "Viagogo",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/viagogo-coupon-code_t65aol.webp",        dealText: "Up to 10% OFF", href: "/stores/viagogo-coupon-code" },
  { name: "Driffle",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/driffle-coupon-code_n2upgl.webp",        dealText: "Up to 70% OFF", href: "/stores/driffle-coupon-code" },
  { name: "Reolink",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/reolink-coupon-code_zsrmh1.webp",        dealText: "Up to 30% OFF", href: "/stores/reolink-coupon-code" },
  { name: "Lyca Mobile",    logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/lyca-mobile-coupon-code_svvddg.webp",    dealText: "Up to 20% OFF", href: "/stores/lyca-mobile-coupon-code" },
  { name: "Rayneo",         logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/reyneo-coupon-code_q3crak.webp",         dealText: "Up to 30% OFF", href: "/stores/rayneo-coupon-code" },
];

export default function NuagewearNewYorkCouponsContent() {
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
              <Link href="/stores/nuage-coupon-code" className="text-[#056bfa] hover:underline">Nuagewear</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">New York</span>
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
                  <div>
                    <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782373659/nuage-coupon-code_ggmnbf.jpg" alt="Nuagewear" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2 mt-4">Nuagewear Coupon Codes – New York</h1>
                   
                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                     Shopping for Nuagewear online in New York? Every Couponsbit-verified code below works the same whether you're ordering from Manhattan, Brooklyn, Queens or anywhere in the tri-state area. New York shoppers get the same FREE worldwide shipping on orders over $60 as everywhere else, with 12+ verified deals live and savings up to 39% OFF bestselling collections.
                    </p>
                  </div>
                </div>

                

              </div>

              {/* Right: Featured Banner Slider */}
              {/* Right: Featured Banner */}
<div className="hidden md:block flex-1">
  <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg">
    <a 
      href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block w-full h-full"
    >
      <img 
        src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1400,c_limit/v1782731611/nuage-voucher-code_sunxhy.webp" 
        alt="Nuagewear Discount Code" 
        width={800} 
        height={350} 
        className="w-full h-full object-cover" 
        fetchPriority="high" 
      />
    </a>
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
                  <h2 className="text-2xl font-black text-black leading-tight">Nuagewear Coupon Codes & Offers</h2>
                  
                </div>

                

                {/* Coupon 1 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SHIPPING</p>
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">FREE</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">SHIPPING</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">NuageWears USA Offer – Free Worldwide Shipping Over $60</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Shop premium bras, shapewear and everyday essentials with free worldwide shipping on orders above $60.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy FREE Worldwide Shipping on orders above $60</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Discover comfort-focused collections designed for everyday confidence</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Limited-time shipping offer available for global customers</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Nuagewear deal: NuageWears USA Offer – Free Worldwide Shipping Over $60" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">ONLY</p>
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">$49</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">NuageWears Commando Chic Shorts – Only $49</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Complete your essentials collection with the Commando Chic Shorts, designed for comfort and a sleek fit.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available for just $49.00</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Designed for comfort, coverage and a sleek fit</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for layering, lounging and everyday wear</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Nuagewear deal: NuageWears Commando Chic Shorts – Only $49" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">OFF</p>
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">39%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">NuageWears Wireless Soft Stay-Put Bra – 39% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Experience all-day comfort with this customer-favorite everyday bra, now 39% OFF.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Sale Price: $36.00 (Regular Price: $59.88)</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Designed for comfort, support and a seamless fit</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for daily wear and long-lasting comfort</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Nuagewear deal: NuageWears Wireless Soft Stay-Put Bra – 39% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">OFF</p>
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">35%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">NuageWears Daily Cover Comfort Guard Bra – 35% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Enjoy superior support and full coverage with the Daily Cover Comfort Guard Bra.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Sale Price: $36.00 (Regular Price: $56.00)</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Designed for full coverage and all-day confidence</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A must-have addition to your lingerie collection</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Nuagewear deal: NuageWears Daily Cover Comfort Guard Bra – 35% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">OFF</p>
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">33%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">NuageWears Perfect Coverage Push-Up Bra – 33% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Enhance your look with this bestselling push-up bra, offering support, comfort and a flattering silhouette.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Sale Price: $36.00 (Regular Price: $54.00)</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Provides support, comfort and a flattering silhouette</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for everyday wear and special occasions</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Nuagewear deal: NuageWears Perfect Coverage Push-Up Bra – 33% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">12%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">NuageWears NuAir Mesh Pivot+ 5-Pack – Save 12%</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Upgrade your essentials with this breathable mesh 5-pack, crafted for maximum comfort.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Sale Price: $79.00 (Regular Price: $90.00)</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Crafted with breathable mesh fabric for maximum comfort</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for everyday wear and active lifestyles</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Nuagewear deal: NuageWears NuAir Mesh Pivot+ 5-Pack – Save 12%" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">OFF</p>
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">33%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">NuageWears NuCloud Red Holiday Bra Set – 33% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Add elegance to your collection with this stylish, comfortable holiday bra set.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Sale Price: $59.00 (Regular Price: $89.00)</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Stylish, comfortable and designed for a perfect fit</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for gifting or upgrading your lingerie drawer</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Nuagewear deal: NuageWears NuCloud Red Holiday Bra Set – 33% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FROM</p>
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">$16</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">NuageWears NuAir Mesh Flex Brief – Starting at $16</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Stay comfortable all day with this lightweight, breathable mesh brief.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available from just $16.00</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Soft mesh construction for a smooth feel</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A wardrobe essential for modern women</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Nuagewear deal: NuageWears NuAir Mesh Flex Brief – Starting at $16" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 9 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">10%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">NuageWears NuAir Mesh Flex Brief 5-Pack – Save 10%</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Stock up and save with this breathable, flexible 5-pack designed for everyday wear.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Sale Price: $72.00 (Regular Price: $80.00)</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Breathable, flexible and designed for everyday wear</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for comfort and convenience</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Nuagewear deal: NuageWears NuAir Mesh Flex Brief 5-Pack – Save 10%" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 10 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">ONLY</p>
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">$18</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">NuageWears NuAir Mesh FlexShield Thong – $18 Only</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Feel light and confident with this seamless, breathable mesh thong.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available for just $18.00</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Designed with breathable mesh fabric and a seamless fit</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for everyday comfort and invisible wear</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Nuagewear deal: NuageWears NuAir Mesh FlexShield Thong – $18 Only" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 11 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">ONLY</p>
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">$14</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">NuageWears NuCloud Original Bikini – Only $14</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Discover second-skin comfort, ideal for yoga, pilates and daily wear.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available from just $14.00</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Soft, breathable and ideal for yoga, pilates and daily wear</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Everyday essentials at an unbeatable price</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Nuagewear deal: NuageWears NuCloud Original Bikini – Only $14" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 12 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">OFF</p>
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">37%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">NuageWears NuBloom Bra – 37% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Elevate your comfort with the stylish NuBloom Bra, available in multiple colors.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Sale Price: $62.00 (Regular Price: $99.00)</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available in multiple colors for versatile styling</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect blend of support and elegance</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Nuagewear deal: NuageWears NuBloom Bra – 37% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

              

                
              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">
               <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Searches (New York)</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Nuagewear NYC Discount", "Shapewear Deals New York", "Seamless Underwear NYC", "New York Lingerie Promo Code", "Nuagewear Tri-State Shipping", "NYC Activewear Underwear", "Brooklyn Nuagewear Coupon", "New York Comfort Essentials"].map(tag => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

<div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm max-w-md my-8">
  <h3 className="text-xl font-bold text-slate-900 mb-8">
    How to Use StubHub Coupon Code
  </h3>

  <div className="relative space-y-8">
    {/* Vertical timeline connecting line */}
    <div className="absolute left-6 top-4 bottom-6 w-[1.5px] bg-indigo-100 -translate-x-1/2 z-0" />

    {[
      {
        step: "Step 1",
        title: "Choose an offer",
        desc: "Browse and select the best StubHub coupon or deal.",
        icon: Tag,
      },
      {
        step: "Step 2",
        title: "Copy the code",
        desc: "Click on 'Get Code' and copy the coupon code.",
        icon: Copy,
      },
      {
        step: "Step 3",
        title: "Add tickets to cart",
        desc: "Select your event and add tickets to your cart.",
        icon: ShoppingBag,
      },
      {
        step: "Step 4",
        title: "Apply code at checkout",
        desc: "Paste the code at checkout to get the discount.",
        icon: Percent,
      },
      {
        step: "Step 5",
        title: "Enjoy & Save",
        desc: "Complete your purchase and enjoy the event!",
        icon: Sparkles,
      },
    ].map((item, index) => {
      const Icon = item.icon;
      return (
        <div key={index} className="relative z-10 flex items-start gap-5">
          {/* Icon Circle */}
          <div className="w-12 h-12 rounded-full bg-[#056BFA] text-white flex items-center justify-center shrink-0 shadow-sm">
            <Icon className="w-5 h-5" />
          </div>

          {/* Step Content */}
          <div className="space-y-0.5 pt-0.5">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              {item.step}
            </span>
            <h4 className="text-base font-bold text-slate-900">
              {item.title}
            </h4>
            <p className="text-sm text-gray-500 leading-snug">
              {item.desc}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>

<div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm max-w-md my-8">
  {/* Header */}
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-bold text-slate-900">
      More Stores You'll Love
    </h3>
    <Link 
      href="/stores" 
      className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1"
    >
      View All Stores &rarr;
    </Link>
  </div>

  {/* 2-Column Grid */}
  <div className="grid grid-cols-2 gap-4">
    {RELATED_STORES.map((store, i) => (
      <Link
        key={i}
        href={store.href}
        className="flex flex-col items-center justify-center p-5 rounded-2xl border border-gray-100 hover:border-blue-500 hover:shadow-md transition-all duration-200 bg-white group"
      >
        {/* Logo Container */}
        <div className="h-10 flex items-center justify-center mb-2">
          <img
            src={store.logo}
            alt={store.name}
            width={120}
            height={40}
            className="max-h-8 max-w-[110px] w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
        </div>

        {/* Discount Text */}
        <span className="text-xs font-bold text-blue-600 tracking-tight">
          {store.dealText}
        </span>
      </Link>
    ))}
  </div>
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
    <h3 className="text-black font-black text-lg mb-2">Popular Products Available at Nuagewear</h3>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Nuagewear offers a range of comfortable and functional intimate apparel designed for daily use and active lifestyles.
    </p>
  </div>

  <div className="space-y-8">
    {[
      {
        icon: Sparkles, 
        title: "Seamless Briefs",
        sub: "Designed for smooth coverage and everyday comfort without bulky seams or visible lines."
      },
      {
        icon: Dumbbell, 
        title: "Performance Underwear",
        sub: "Lightweight styles engineered for workouts, outdoor activities, and active routines."
      },
      {
        icon: Heart, 
        title: "Yoga & Daily Wear Collections",
        sub: "Soft, flexible underwear created to move naturally with your body throughout the day."
      },
      {
        icon: Shield, 
        title: "Shaping Essentials",
        sub: "Comfort-focused styles that offer gentle support while maintaining flexibility."
      },
      {
        icon: Disc, 
        title: "Wireless Bras",
        sub: "Comfortable designs that provide support without the discomfort of traditional underwires."
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
                  <span className="text-[#056bfa] font-black text-[12px] uppercase hover:underline decoration-2">View Coupons →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: SEO Text Section */}
      

        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      
      {/* Left: Text Content */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Nuagewear Coupon Codes, Promo Codes & Seamless Underwear Deals
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
                <td className="p-5 text-black font-black align-middle max-w-[220px]">USA Offer – Free Worldwide Shipping</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">FREE Shipping</td>
                <td className="p-5 text-gray-500 align-middle">Orders over $60</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Worldwide shipping</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bras, Shapewear & Essentials</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Commando Chic Shorts</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $49</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Comfort & sleek fit</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Shorts</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Wireless Soft Stay-Put Bra</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">39% OFF ($36.00, reg. $59.88)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Everyday comfort fit</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bras</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Daily Cover Comfort Guard Bra</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">35% OFF ($36.00, reg. $56.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Full coverage design</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bras</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Perfect Coverage Push-Up Bra</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">33% OFF ($36.00, reg. $54.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Support & flattering silhouette</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bras</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuAir Mesh Pivot+ 5-Pack</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 12% ($79.00, reg. $90.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Breathable mesh 5-pack</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Briefs</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuCloud Red Holiday Bra Set</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">33% OFF ($59.00, reg. $89.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Holiday-edition bra set</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bras</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuAir Mesh Flex Brief</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $16.00</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Lightweight, breathable mesh</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Briefs</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuAir Mesh Flex Brief 5-Pack</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 10% ($72.00, reg. $80.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Breathable 5-pack</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Briefs</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuAir Mesh FlexShield Thong</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $18.00</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Seamless, breathable</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Thongs</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuCloud Original Bikini</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $14.00</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Second-skin comfort, yoga/pilates</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bikinis</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuBloom Bra</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">37% OFF ($62.00, reg. $99.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Available in multiple colors</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bras</td>
              </tr>
            </tbody>
          </table>
        </div>

         <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More on Comfort Essentials with Nuagewear Coupon Codes</h3>
          <p>
            Finding underwear that combines comfort, performance, and everyday confidence can be challenging. That's why many women turn to Nuagewear for innovative seamless designs that prioritize softness, flexibility, and a barely-there feel. Before placing your next order, check the latest <strong>Nuagewear coupon codes</strong>, promo offers, and exclusive discounts on CouponsBit to unlock extra savings.
          </p>
          <p>
            Whether you're heading to the gym, practicing yoga, running errands, or simply looking for comfortable everyday essentials, Nuagewear offers thoughtfully designed products created to move with your body. With the right promo code, you can enjoy premium comfort while keeping your budget in check.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">About Nuagewear</h3>

            <p>
              Nuagewear is a women's underwear brand focused on redefining comfort through seamless design and performance-driven fabrics. Inspired by the French word "Nuage," meaning cloud, the brand aims to deliver lightweight, soft, and comfortable underwear that feels almost invisible when worn.
            </p>
            
            <p>
              The company specializes in innovative underwear solutions designed to eliminate common issues such as visible panty lines, discomfort, pinching, rolling waistbands, and unwanted shifting during movement. By combining modern fabric technology with thoughtful design, Nuagewear creates products suitable for both active lifestyles and everyday wear.
            </p>
          </div>



          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">Shopping Nuagewear in New York</h3>
            <p className="text-gray-700 font-bold -mt-4">
              New York shoppers browsing for seamless underwear, shapewear and everyday essentials can use any of the verified Nuagewear codes below at checkout — there's no separate New York promo needed since these discounts apply storewide. Orders ship from Nuagewear's US warehouse network, and New York addresses (including NYC, Long Island, Westchester and the greater tri-state area) typically see delivery within 5–7 business days. Sales tax is calculated automatically at checkout based on New York State rates, and all prices are listed in USD.
              </p>
          
          </div>
        </div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative mt-6", !isReadMore && "max-h-[500px] overflow-hidden")}>
         

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">About Nuagewear</h3>

            <p>
              Nuagewear is a women's underwear brand focused on redefining comfort through seamless design and performance-driven fabrics. Inspired by the French word "Nuage," meaning cloud, the brand aims to deliver lightweight, soft, and comfortable underwear that feels almost invisible when worn.
            </p>
            
            <p>
              The company specializes in innovative underwear solutions designed to eliminate common issues such as visible panty lines, discomfort, pinching, rolling waistbands, and unwanted shifting during movement. By combining modern fabric technology with thoughtful design, Nuagewear creates products suitable for both active lifestyles and everyday wear.
            </p>
          </div>

          <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  {/* Section Header */}
  <h3 className="text-xl font-bold text-slate-900 mb-6">Top Categories</h3>

  {/* 3 Columns Desktop Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
    {[
      { icon: Laptop, name: "Electronics", count: "850+ Coupons", color: "text-blue-500", href: "/categories/electronics" },
      { icon: Plane, name: "Travel", count: "420+ Coupons", color: "text-teal-500", href: "/categories/travel" },
      { icon: Tv, name: "Entertainment", count: "210+ Coupons", color: "text-purple-500", href: "/categories/entertainment" },
      { icon: Code, name: "Software & Digital", count: "300+ Coupons", color: "text-violet-500", href: "/categories/software" },
      { icon: Zap, name: "Mobile & Telecom", count: "320+ Coupons", color: "text-emerald-500", href: "/categories/mobile" },
    ].map((cat, i) => {
      const Icon = cat.icon;
      return (
        <Link
          key={i}
          href={cat.href}
          className="flex items-center justify-between py-3 border-b border-[#f0f0f0] group cursor-pointer"
        >
          {/* Icon & Category Name */}
          <div className="flex items-center gap-3">
            <Icon className={`w-5 h-5 ${cat.color}`} />
            <span className="text-gray-900 font-bold text-sm group-hover:text-blue-600 transition-colors">
              {cat.name}
            </span>
          </div>

          {/* Coupon Pill Badge */}
          <span className="bg-[#e8f6f8] text-[#0451c4] px-3 py-1 rounded-full text-xs font-bold">
            {cat.count}
          </span>
        </Link>
      );
    })}
  </div>

  {/* View All Link */}
  <Link
    href="/categories"
    className="inline-block mt-8 text-[#056bfa] font-black text-xs uppercase tracking-wider hover:underline"
  >
    View All Categories &rarr;
  </Link>
</div>



          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Nuagewear Coupon Code</h3>
            <p className="text-gray-700 font-bold -mt-4">Saving money on your next order is simple.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit CouponsBit — Browse the latest Nuagewear coupon codes and promotional offers.",
                "Step 2: Select a Deal — Choose the discount that best matches your purchase.",
                "Step 3: Copy the Coupon Code — Copy the available promo code before visiting Nuagewear.",
                "Step 4: Shop Your Favorites — Add your preferred products to the shopping cart.",
                "Step 5: Apply the Discount — Enter the coupon code during checkout if required.",
                "Step 6: Complete Your Order — Finalize your purchase and enjoy your savings."
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
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
          {[
            { q: "What is Nuagewear?", a: "Nuagewear is a women's underwear brand focused on seamless comfort, performance fabrics, and innovative fit technology." },
            { q: "What products does Nuagewear sell?", a: "The brand offers seamless underwear, performance briefs, shaping essentials, wireless bras, and everyday comfort collections." },
            { q: "Is Nuagewear suitable for workouts?", a: "Many Nuagewear products are designed to support active lifestyles, including fitness training, yoga, and everyday movement." },
            { q: "Where can I find Nuagewear coupon codes?", a: "You can find the latest Nuagewear coupon codes, promo offers, and discounts on CouponsBit." },
            { q: "Is CouponsBit free to use?", a: "Yes. CouponsBit is completely free and helps shoppers discover valuable savings opportunities from popular brands." },
            { q: "Does Nuagewear ship to New York?", a: "Yes. Nuagewear ships nationwide across the US, including New York City, Brooklyn, Queens, Long Island and the greater tri-state area." },
            { q: "How long does Nuagewear delivery take to NYC?", a: "Standard delivery to New York addresses typically takes 5–7 business days, depending on the shipping method selected at checkout." },
            { q: "Do New York orders qualify for free shipping?", a: "Yes. New York shoppers get the same FREE worldwide shipping on orders over $60 as customers anywhere else — no separate New York promo code is needed." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Searches (New York)</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Nuagewear NYC Discount", "Shapewear Deals New York", "Seamless Underwear NYC", "New York Lingerie Promo Code", "Nuagewear Tri-State Shipping", "NYC Activewear Underwear", "Brooklyn Nuagewear Coupon", "New York Comfort Essentials"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Nuagewear Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Multi-Pack Bundle", sub: "Save significantly on underwear bundles and multipack combinations" },
              { heading: "Welcome Order Promo", sub: "Introductory price adjustments on first-time brand configurations" },
              { heading: "Free Standard Delivery", sub: "Complimentary shipping structures applied on minimum tier values" },
              { heading: "Seasonal Collection Sale", sub: "Limited-time reductions on selected lounge and wireless variants" },
              { heading: "CouponsBit Special", sub: "Exclusive checkout incentive code adjustments for active users" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">N</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label={`Get Nuagewear deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
