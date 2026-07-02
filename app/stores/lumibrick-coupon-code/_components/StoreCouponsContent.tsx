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
  Blocks,
  ChevronDown,
  Package, 
  Truck, 
  Shield, 
  Lightbulb, Building2, Palette,
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
    discount: "$169.99",
    label: "ONLY",
    badge: "Best Offer",
    title: "Modular Apartment Building Set – Starting at $169.99",
    heading: "Modular Apartment Building Set",
    sub: "$169.99",
    description: "Build your own futuristic city with the Modular Apartment Building Set, featuring USB-powered modular lighting.",
    usedCount: "100k",
    expiresIn: "1 days",
    code: "LUMIBRICKC1"
  },
  {
    id: "c2",
    discount: "$159.99",
    label: "ONLY",
    badge: "Popular",
    title: "Interactive Toy Store Building Set – Starting at $159.99",
    heading: "Interactive Toy Store Building Set",
    sub: "$159.99",
    description: "Create fun-filled adventures with the Interactive Toy Store Building Set, featuring interactive mini scenes.",
    usedCount: "93k",
    expiresIn: "2 days",
    code: "LUMIBRICKC2"
  },
  {
    id: "c3",
    discount: "$109.99",
    label: "ONLY",
    title: "Cyberpunk Police HQ – Starting at $109.99",
    heading: "Cyberpunk Police HQ",
    sub: "$109.99",
    description: "Defend your futuristic city with the Cyberpunk Police HQ Building Set, packed with detailed interiors and vehicles.",
    usedCount: "86k",
    expiresIn: "3 days",
    code: "LUMIBRICKC3"
  },
  {
    id: "c4",
    discount: "$129.99",
    label: "ONLY",
    title: "Izakaya Japanese Street Restaurant – Starting at $129.99",
    heading: "Izakaya Japanese Street Restaurant",
    sub: "$129.99",
    description: "Recreate an authentic Japanese street scene with the Izakaya Building Set, featuring vibrant lighting effects.",
    usedCount: "79k",
    expiresIn: "4 days",
    code: "LUMIBRICKC4"
  },
  {
    id: "c5",
    discount: "$119.99",
    label: "ONLY",
    title: "Luna Cottage Building Set – Starting at $119.99",
    heading: "Luna Cottage Building Set",
    sub: "$119.99",
    description: "Discover cozy living with the Luna Cottage Building Set, part of the latest New Arrivals collection.",
    usedCount: "72k",
    expiresIn: "5 days",
    code: "LUMIBRICKC5"
  },
  {
    id: "c6",
    discount: "$74.99",
    label: "ONLY",
    title: "Streetball Tour Bus Building Set – Starting at $74.99",
    heading: "Streetball Tour Bus Building Set",
    sub: "$74.99",
    description: "Hit the road with the Streetball Tour Bus Building Set, inspired by street basketball culture.",
    usedCount: "65k",
    expiresIn: "1 days",
    code: "LUMIBRICKC6"
  },
  {
    id: "c7",
    discount: "$89.99",
    label: "ONLY",
    title: "Book Café Building Set – Starting at $89.99",
    heading: "Book Café Building Set",
    sub: "$89.99",
    description: "Build your dream reading corner with the Book Café Building Set, featuring detailed interiors and café décor.",
    usedCount: "58k",
    expiresIn: "2 days",
    code: "LUMIBRICKC7"
  },
  {
    id: "c8",
    discount: "$56.99",
    label: "ONLY",
    title: "Horse Stable Building Set – Starting at $56.99",
    heading: "Horse Stable Building Set",
    sub: "$56.99",
    description: "Bring the countryside to life with the Horse Stable Building Set, featuring touch-adjustable lighting.",
    usedCount: "51k",
    expiresIn: "3 days",
    code: "LUMIBRICKC8"
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

export default function LumibrickCouponsContent() {
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
              <span className="text-black font-extrabold">Lumibrick</span>
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
                  <a href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782730730/lumricks-logo_a84nyo.webp" alt="Lumibrick" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Lumibrick</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Lumibrick Coupon Code & Deals – Explore exclusive offers on modular city buildings, Japanese street collections, cafés, cottages, and collectible building sets for every brick enthusiast.

                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "35", label: "Coupons" },
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
                    <a href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1400,c_limit/v1782807018/lumibricks-promo-code_tgvixz.png" alt="Lumibrick Discount Code" width={800} height={350} className="w-full h-full object-cover" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1400,c_limit/v1782807018/lumibricks-discount-code_hyc4zx.png" alt="Lumibrick Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1400,c_limit/v1782807017/lumibricks-voucher-code_saqoyl.png" alt="Lumibrick Voucher Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Lumibrick Coupon Codes & Offers</h2>
                  
                </div>

                

                {/* Coupon 1 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">ONLY</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$169.99</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Modular Apartment Building Set – Starting at $169.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Build your own futuristic city with the Modular Apartment Building Set, featuring USB-powered modular lighting.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features an innovative USB-powered modular lighting system with no extra wires</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Expand your cyberpunk city horizontally with endless modular connections</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A perfect collectible for building block enthusiasts and display lovers</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Lumibrick deal: Modular Apartment Building Set – Starting at $169.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$159.99</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Interactive Toy Store Building Set – Starting at $159.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Create fun-filled adventures with the Interactive Toy Store Building Set, featuring interactive mini scenes.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features interactive mini scenes and detailed interior accessories</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Designed for immersive storytelling and creative play</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great gift for collectors and brick-building fans</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Lumibrick deal: Interactive Toy Store Building Set – Starting at $159.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">ONLY</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$109.99</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Cyberpunk Police HQ – Starting at $109.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Defend your futuristic city with the Cyberpunk Police HQ Building Set, packed with detailed interiors and vehicles.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Packed with detailed interiors, vehicles and action-packed accessories</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect addition to any cyberpunk city collection</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for builders, collectors and display enthusiasts</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Lumibrick deal: Cyberpunk Police HQ – Starting at $109.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">ONLY</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$129.99</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Izakaya Japanese Street Restaurant – Starting at $129.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Recreate an authentic Japanese street scene with the Izakaya Building Set, featuring vibrant lighting effects.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Beautifully detailed architecture with vibrant lighting effects</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for collectors and Japanese culture enthusiasts</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Premium display-worthy construction model</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Lumibrick deal: Izakaya Japanese Street Restaurant – Starting at $129.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">ONLY</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$119.99</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Luna Cottage Building Set – Starting at $119.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Discover cozy living with the Luna Cottage Building Set, part of the latest New Arrivals collection.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Beautiful cottage-inspired architecture with charming details</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for display or creative building fun</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Part of the latest New Arrivals collection</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Lumibrick deal: Luna Cottage Building Set – Starting at $119.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">ONLY</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$74.99</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Streetball Tour Bus Building Set – Starting at $74.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Hit the road with the Streetball Tour Bus Building Set, inspired by street basketball culture.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes 1,170 pieces, 6 minifigures, collectible card and premium printed elements</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Inspired by street basketball culture with realistic details</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Covered by a 2-Year Warranty</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Lumibrick deal: Streetball Tour Bus Building Set – Starting at $74.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">ONLY</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$89.99</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Book Café Building Set – Starting at $89.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Build your dream reading corner with the Book Café Building Set, featuring detailed interiors and café décor.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features detailed interiors, bookshelves and café décor</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great for display, gifting and creative building</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Premium collectible building experience</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Lumibrick deal: Book Café Building Set – Starting at $89.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">ONLY</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$56.99</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Horse Stable Building Set – Starting at $56.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Bring the countryside to life with the Horse Stable Building Set, featuring touch-adjustable lighting.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features innovative touch-adjustable lighting and red light therapy simulation</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes realistic stable details for an immersive building experience</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for animal lovers and building block collectors</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Lumibrick deal: Horse Stable Building Set – Starting at $56.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About Lumibrick</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Lumibricks is a creative building block brand that combines detailed brick construction with integrated LED lighting, offering an immersive building and display experience. Unlike traditional building sets that require separate lighting kits, Lumibricks designs its models with built-in lighting systems from the start, allowing each creation to shine day and night.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Founded by a team of passionate builders, Lumibricks believes that building bricks are more than toys. They're a creative outlet for adults, collectors, and hobbyists. Every collection features original designs, patented components, and story-driven themes that transform finished models into eye-catching display pieces.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Today, Lumibricks offers a growing catalog of themed building sets inspired by architecture, city life, fantasy, nature, retro streets, and futuristic worlds.
                  </p>
                  <a href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
              <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm max-w-2xl mx-auto">
  <div className="mb-8">
    <h2 className="text-black font-black text-xl mb-2">What Can You Buy at Lumibricks?</h2>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Lumibricks features an expanding collection of premium building block sets suitable for collectors and creative builders alike.
    </p>
  </div>

  <div className="space-y-8">
    <div className="flex gap-4 items-start text-justify">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Lightbulb className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Light-Up Building Sets</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Signature models with integrated LED lighting that create stunning day-and-night displays.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start text-justify">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Building2 className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Modular Buildings</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Construct cafés, bookstores, clinics, apartments, townhouses, and other detailed architectural scenes.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start text-justify">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Zap className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Cyberpunk Collection</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Build futuristic cityscapes filled with neon lighting, high-tech buildings, and urban storytelling.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start text-justify">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Shield className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Medieval & Fantasy Sets</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Explore castles, ranger camps, forest outposts, and other imaginative historical settings.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start text-justify">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Truck className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Vehicles & Accessories</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Expand your collection with trains, vehicles, expansion tracks, and themed accessories.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start text-justify">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Palette className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Art & Display Models</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Create collectible display pieces inspired by architecture, landscapes, and artistic masterpieces. 
        </p>
      </div>
    </div>
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
          Lumibricks Coupon Codes, Promo Codes & Building Block Set Deals
        </h2>
        
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <h3 className="text-xl font-black text-[#056BFA] mb-4">Build, Display, and Save with Lumibricks Coupon Codes</h3>
          <p>
            If you're passionate about creative building sets, detailed architecture, or collectible display models, Lumibricks offers a unique experience that goes beyond traditional building bricks. With the latest <strong>Lumibricks coupon codes</strong>, Couponsbit helps builders and collectors discover savings on innovative light-up building block sets designed for adults and hobbyists.
          </p>
          <p>
            From cyberpunk cityscapes and medieval villages to cozy cafés, vintage houses, and artistic displays, Lumibricks combines premium building bricks with integrated lighting to create models that look just as impressive after dark as they do during the day. Before placing your next order, visit Couponsbit to explore the latest promo codes, discounts, and exclusive deals.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056BFA] mb-4">Why Choose Lumibricks?</h3>
            <p><strong>Integrated Lighting System:</strong> Unlike many building sets that require separate lighting accessories, Lumibricks incorporates lighting directly into the design for a seamless display experience.</p>
            <p><strong>Original Designs:</strong> Every collection features original themes, custom brick elements, and creative storytelling.</p>
            <p><strong>Built for Adult Builders:</strong> Many sets are designed specifically for hobbyists, collectors, and display enthusiasts rather than young children.</p>
            <p><strong>High-Quality Construction:</strong> The company focuses on durable components and precision manufacturing to create satisfying building experiences.</p>
            <p><strong>Compatible with Other Major Brick Brands:</strong> Lumibricks building blocks are compatible with many leading brick systems, giving builders additional creative flexibility.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <div>
              <h3 className="text-xl font-black text-[#056BFA] mb-2">How to Use a Lumibricks Coupon Code</h3>
              <p className="text-gray-500 text-sm font-bold">Saving on your next building set is easy.</p>
            </div>
            <div className="space-y-6">
              {[
                "Step 1: Visit Couponsbit — Browse the latest Lumibricks coupon codes and promotional offers.",
                "Step 2: Choose an Offer — Select the deal that best matches your purchase.",
                "Step 3: Copy the Coupon Code — Copy the available promo code before visiting Lumibricks.",
                "Step 4: Shop Your Favorite Building Sets — Add your preferred collections to your shopping cart.",
                "Step 5: Apply the Discount — Enter the coupon code during checkout if applicable.",
                "Step 6: Complete Your Purchase — Finish your order and start building your next illuminated masterpiece."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056BFA] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-orange-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056BFA] mb-4">Smart Ways to Save More at Lumibricks</h3>
            <p><strong>Check Couponsbit Before Every Purchase:</strong> We regularly update Lumibricks coupon codes and promotional offers.</p>
            <p><strong>Shop Seasonal Sales:</strong> Holiday events and special promotions often feature discounts on selected collections.</p>
            <p><strong>Join the Rewards Program:</strong> Lumibricks offers a member rewards program where shoppers can earn points and access exclusive perks.</p>
            <p><strong>Browse New Arrivals:</strong> New collections are introduced throughout the year, giving builders fresh themes to explore.</p>
            <p><strong>Build a Collection Over Time:</strong> Many themed sets are designed to complement one another, making it easy to expand your display.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056BFA] mb-4">Popular Lumibricks Collections</h3>
            <p>Collectors can explore a variety of creative themes, including: Cyberpunk Neon City, Town Life, Street Fusion, Steampunk World, Medieval Collection, Farm Life, Road Trip Series, Retro Houses, Art & Architecture Models, Vehicle Collection.</p>
            <p>Each collection features highly detailed designs enhanced with integrated lighting for an immersive display experience.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056BFA] mb-4">Why Use Couponsbit for Lumibricks Deals?</h3>
            <p>Couponsbit helps shoppers discover verified savings from leading brands across hobbies, technology, gaming, travel, home improvement, and lifestyle categories.</p>
            <p><strong>Updated Promotions:</strong> We regularly refresh available Lumibricks offers to help shoppers find current savings.</p>
            <p><strong>Easy-to-Find Discounts:</strong> Browse coupon codes, promo offers, and exclusive deals in one convenient place.</p>
            <p><strong>Completely Free:</strong> Couponsbit is always free to use.</p>
            <p><strong>Trusted Savings Platform:</strong> Our goal is to help shoppers save more while purchasing products they genuinely enjoy.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056BFA] mb-4">Bring Your Creations to Life for Less</h3>
            <p>Whether you're a lifelong building block enthusiast, a collector of architectural models, or someone looking for a unique display piece, Lumibricks offers an engaging building experience with a creative twist.</p>
            <p>Explore the latest Lumibricks coupon codes, promo offers, and building set deals on Couponsbit today, and save on your next illuminated masterpiece.</p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button 
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#056BFA] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* FAQs Accordion */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
          {[
            { q: "What is Lumibricks?", a: "Lumibricks is a building block brand that creates premium construction sets with integrated LED lighting, designed primarily for adult builders and collectors." },
            { q: "What makes Lumibricks different?", a: "Unlike many traditional building block brands, Lumibricks integrates lighting directly into its models, creating display pieces that look impressive both during the day and at night." },
            { q: "Are Lumibricks sets compatible with other building brick brands?", a: "Yes. Lumibricks states that its products are compatible with many other brick systems available on the market." },
            { q: "What kinds of building sets does Lumibricks offer?", a: "The company offers modular buildings, cyberpunk cities, medieval scenes, vehicles, art-inspired models, and other themed collections with built-in lighting." },
            { q: "Where can I find Lumibricks coupon codes?", a: "You can find the latest Lumibricks coupon codes, promo codes, and exclusive deals on Couponsbit." },
            { q: "Is Couponsbit free to use?", a: "Yes. Couponsbit is completely free and helps shoppers discover verified coupon codes, discounts, and promotional offers from hundreds of trusted brands." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056BFA] rotate-180")}>
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
        <div className="bg-[#fff7f2] rounded-[40px] p-10 border border-[#056BFA]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Lumibricks Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Cyberpunk Neon", "Steampunk World", "Medieval Bricks", "LED Building Blocks", "Adult Brick Sets", "Lumibricks Promo Code", "Modular Buildings", "Toy Light Kits"].map(tag => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056BFA] uppercase tracking-widest shadow-sm border border-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Lumibricks Deals</h3>
          <div className="space-y-6">
            {COUPONS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056BFA] font-black text-xl italic shadow-inner">
                  <Blocks className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056BFA] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-1.5 normal-case">{deal.sub}</p>
                </div>
                <a 
                  href="https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Get Lumibricks deal: ${deal.heading}`} 
                  className="bg-[#fff7f2] text-[#056BFA] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056BFA] hover:text-white transition-all active:scale-90"
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
