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
    discount: "50%",
    label: "SAVE",
    title: "Chewy – 50% OFF First Autoship Order",
    heading: "50% OFF",
    sub: "Chewy",
    description: "Get 50% OFF your first Autoship order on eligible flea & tick medications",
    usedCount: "0",
    expiresIn: "TBD",
    code: "CHEWY1"
  },
  {
    id: "c2",
    discount: "$15",
    label: "FREE",
    title: "Chewy – FREE $15 eGift Card on $49+ Orders",
    heading: "$15 eGift Card",
    sub: "Chewy",
    description: "Get a FREE $15 eGift Card with an eligible $49+ order",
    usedCount: "0",
    expiresIn: "TBD",
    code: "CHEWY2"
  },
  {
    id: "c3",
    discount: "4TH",
    label: "BUY 3 GET",
    title: "Chewy – Buy 3, Get the 4th FREE on Top-Rated Toys",
    heading: "4TH FREE",
    sub: "Chewy",
    description: "Buy 3, Get the 4th FREE on selected top-rated pet toys",
    usedCount: "0",
    expiresIn: "TBD",
    code: "CHEWY3"
  },
  {
    id: "c4",
    discount: "50%",
    label: "SAVE",
    title: "Chewy Promo Code – 50% OFF Your First Order",
    heading: "50% OFF",
    sub: "Chewy Promo Code",
    description: "Get 50% OFF your first order with Chewy",
    usedCount: "0",
    expiresIn: "TBD",
    code: "CHEWY4"
  },
  {
    id: "c5",
    discount: "$12.74",
    label: "From",
    title: "Chewy Promo Code – Nylabone Tough Chewer Dog Toy for $12.74",
    heading: "$12.74",
    sub: "Chewy Promo Code",
    description: "Get the Nylabone Tough Chewer Dog Toy for $12.74",
    usedCount: "0",
    expiresIn: "TBD",
    code: "CHEWY5"
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

export default function ChewyCouponsContent() {
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
              <span className="text-black font-extrabold">Chewy</span>
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
                  <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp" alt="Chewy" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Chewy</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save with Chewy promo codes offering 50% off first orders and eligible Autoship purchases, a free $15 eGift Card on $49+ orders, Buy 3 Get 1 Free toys, free delivery over $35, and additional pet savings.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "9", label: "Coupons" },
                    { icon: Percent, val: "9", label: "Deals" },
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
                    <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518247/115_qcxrtd.webp" alt="Chewy Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518247/116_c8qgm2.webp" alt="Chewy Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518246/117_jwpvre.webp" alt="Chewy Voucher Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Chewy Coupon Codes & Offers</h2>
                  
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
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">50%</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Chewy – 50% OFF First Autoship Order</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get 50% OFF your first Autoship order on eligible flea & tick medications</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save up to $50 on qualifying products</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available to eligible new customers</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great way to save on recurring pet care essentials</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Chewy Promo Code, Chewy Discount Code, Chewy Coupon Code, Chewy Autoship, Flea & Tick Deals, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer" aria-label="Get Chewy deal: Chewy – 50% OFF First Autoship Order" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FREE</p>
          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$15</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">eGift Card</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Chewy – FREE $15 eGift Card on $49+ Orders</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get a FREE $15 eGift Card with an eligible $49+ order</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available for new Chewy customers only</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Exclusions and eligibility requirements apply</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Shop pet food, supplies, toys, pharmacy products, and more</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Chewy Promo Code, Chewy Discount Code, Chewy Coupon Code, $15 eGift Card, Chewy Deals, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer" aria-label="Get Chewy deal: Chewy – FREE $15 eGift Card on $49+ Orders" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">BUY 3 GET</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">4TH</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">FREE</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Chewy – Buy 3, Get the 4th FREE on Top-Rated Toys</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Buy 3, Get the 4th FREE on selected top-rated pet toys</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Stock up on popular toys for dogs, cats, and other pets</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great way to save when buying multiple toys</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Offer applies to eligible products and exclusions may apply</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Chewy Promo Code, Chewy Discount Code, Chewy Coupon Code, Buy 3 Get 1 Free, Chewy Toy Deals, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer" aria-label="Get Chewy deal: Chewy – Buy 3, Get the 4th FREE on Top-Rated Toys" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">50%</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Chewy Promo Code – 50% OFF Your First Order</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get 50% OFF your first order with Chewy</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great opportunity for new customers to save on pet essentials</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Shop dog toys, food, treats, pharmacy products, and more</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Offer eligibility and exclusions may apply</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Chewy Promo Code, Chewy Discount Code, Chewy Coupon Code, 50% Off First Order, Chewy Deals, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer" aria-label="Get Chewy deal: Chewy Promo Code – 50% OFF Your First Order" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$12.74</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Chewy Promo Code – Nylabone Tough Chewer Dog Toy for $12.74</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the Nylabone Tough Chewer Dog Toy for $12.74</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Bacon-flavored nylon wishbone designed for strong chewers</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Autoship price shown at $12.10</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Free 1–3 day delivery on qualifying first-time orders over $35</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Chewy Promo Code, Chewy Discount Code, Chewy Coupon Code, Nylabone Dog Toy, Dog Toy Deals, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer" aria-label="Get Chewy deal: Chewy Promo Code – Nylabone Tough Chewer Dog Toy for $12.74" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FREE</p>
          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$15</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">eGift Card</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Chewy Promo Code – $15 eGift Card on $49+ Orders</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">New customers can get a $15 eGift Card when spending $49 or more</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Offer applies to eligible purchases</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Combine with qualifying Chewy deals for greater savings where permitted</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available to new customers only</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Chewy Promo Code, Chewy Discount Code, Chewy Coupon Code, $15 eGift Card, Chewy New Customer Deal, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer" aria-label="Get Chewy deal: Chewy Promo Code – $15 eGift Card on $49+ Orders" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">50%</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Chewy Promo Code – 50% OFF First Autoship on Flea & Tick Products</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get 50% OFF your first Autoship on eligible prescription flea & tick products</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save on essential parasite protection for your pets</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Offer is designed for eligible new Autoship customers</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Product exclusions and maximum savings may apply</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Chewy Promo Code, Chewy Discount Code, Chewy Coupon Code, 50% Off Autoship, Flea And Tick Deal, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer" aria-label="Get Chewy deal: Chewy Promo Code – 50% OFF First Autoship on Flea & Tick Products" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">From</p>
          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$40.98</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Chewy Promo Code – Frontline Plus for Small Dogs from $40.98</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get Frontline Plus Flea & Tick Treatment for Small Dogs from $40.98</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>3-dose pack provides a 3-month supply for dogs weighing 5–22 lbs</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Autoship savings can reduce the price to $26.64 on the listed offer</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Free 1–3 day delivery on qualifying first-time orders over $35</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Chewy Promo Code, Chewy Discount Code, Chewy Coupon Code, Frontline Plus, Flea And Tick Treatment, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer" aria-label="Get Chewy deal: Chewy Promo Code – Frontline Plus for Small Dogs from $40.98" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Chewy Promo Code – FREE Delivery on First Orders Over $35</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get FREE 1–3 day delivery on qualifying first-time orders over $35</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Orders under $35 have a $4.95 flat-rate shipping fee</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great way for new customers to save on delivery costs</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Shop eligible pet food, toys, treats, supplies, and more</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Chewy Promo Code, Chewy Discount Code, Chewy Coupon Code, Free Delivery, Chewy Shipping Deal, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer" aria-label="Get Chewy deal: Chewy Promo Code – FREE Delivery on First Orders Over $35" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About Chewy</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Founded in 2011, Chewy is one of the largest online retailers dedicated exclusively to pet products in the United States. The company was created with the goal of making pet shopping simpler by providing pet owners with convenient access to food, supplies, medications, and everyday essentials through an easy-to-use online platform.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Unlike general online marketplaces, Chewy focuses entirely on pets. This allows the company to offer a specialized shopping experience designed around the needs of pet parents. Customers can browse products for dogs, cats, fish, birds, reptiles, horses, and other pets from thousands of trusted brands.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    One of Chewy's biggest advantages is convenience. Instead of visiting multiple stores for pet food, supplements, toys, and healthcare products, customers can manage their pet shopping from one platform. With features such as Autoship, pharmacy services, customer support, and regular promotions, Chewy has become a popular choice for millions of pet owners across the US.
                  </p>
                  <a href="https://www.chewy.com/" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <h3 className="text-black font-black text-lg mb-8">Why Pet Parents Choose Chewy</h3>

  <div className="space-y-8">
    {[
      { 
        icon: ShoppingBag, 
        title: "A Pet-Focused Shopping Experience", 
        sub: "Unlike general online retailers, Chewy is built specifically around pets. Its categories, recommendations, and services are designed to make pet shopping easier." 
      },
      { 
        icon: LayoutGrid, 
        title: "Huge Product Selection", 
        sub: "Chewy carries products from many well-known pet brands, allowing customers to compare different options based on their pet's needs, preferences, and budget." 
      },
      { 
        icon: Server, 
        title: "Convenient Autoship Program", 
        sub: "One of Chewy's most popular features is Autoship. It allows customers to schedule recurring deliveries for frequently purchased items such as pet food, treats, litter, and supplements. This helps ensure pets never run out of essential supplies while making regular shopping more convenient." 
      },
      { 
        icon: Mail, 
        title: "Helpful Customer Support", 
        sub: "Chewy is known for its customer-focused approach, offering support to help pet parents with product questions, orders, and account-related concerns." 
      },
      { 
        icon: Globe, 
        title: "Easy Online Ordering", 
        sub: "With home delivery, simple navigation, and saved order history, Chewy makes repeat purchases faster and easier." 
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
          Chewy Promo Code, Coupon Code & Discount Offers
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
        <td className="p-5 text-black font-black align-middle max-w-[220px]">First Autoship Order</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">50% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Eligible flea & tick medications</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">New Autoship Customers</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">FREE $15 eGift Card</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$49+ Orders</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">New customers only</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Pet Food, Supplies & More</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Buy 3 Get 4th Free</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Top-Rated Toys</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Selected toys, exclusions apply</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Pet Toys</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">First Order</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">50% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">New customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Pet Essentials</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Nylabone Tough Chewer Dog Toy</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $12.74</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Autoship price $12.10</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Dog Toys</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">$15 eGift Card</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$49+ Orders</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">New customers only</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">All Eligible Purchases</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">First Autoship Flea & Tick</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">50% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">New Autoship customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Flea & Tick Products</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Frontline Plus for Small Dogs</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $40.98</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">3-dose pack, 3-month supply</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Flea & Tick Treatment</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Free Delivery First Orders</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Orders Over $35</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Under $35 has $4.95 shipping fee</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">All Eligible Orders</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={`text-gray-600 font-medium leading-relaxed space-y-6 relative transition-all ${!isReadMore ? 'max-h-[500px] overflow-hidden' : ''}`}>
          
          {/* Intro */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Give Your Pets the Best While Saving More with a Chewy Promo Code</h3>
            <p>
              Pets are more than companions, they are part of the family. From everyday nutrition and toys to grooming essentials and prescription medications, pet parents want products they can trust without constantly worrying about high costs. Chewy makes caring for dogs, cats, and other pets easier by bringing thousands of pet products together in one convenient online marketplace.
            </p>
            <p>
              Whether you are ordering your pet's favorite food, stocking up on treats, purchasing healthcare products, or looking for new toys and accessories, using a Chewy promo code can help make your purchase more affordable.
            </p>
            <p>
              Before placing your next order, visit CouponsBit to discover the latest Chewy promo code, Chewy coupon code, Chewy discount code, and exclusive offers. Finding the right deal before checkout can help you save more while continuing to provide quality products for your pets.
            </p>
          </div>

          {/* What Can You Buy on Chewy */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">What Can You Buy on Chewy?</h3>
            <p>Chewy offers a wide selection of products designed to support pets at every stage of life.</p>
            
            <p><strong>Pet Food & Nutrition:</strong> Food is one of the most important purchases for any pet owner, and Chewy offers a broad range of options for different breeds, ages, dietary requirements, and preferences. Customers can shop dry food, wet food, treats, supplements, prescription diets, and specialty nutrition products from popular pet food brands. Whether your pet needs everyday meals or a specific nutritional solution recommended by a veterinarian, Chewy makes it easier to find suitable options.</p>
            
            <p><strong>Dog Supplies:</strong> Dog owners can find everything from everyday essentials to fun accessories. Popular categories include:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-bold">
              {[
                "Dog food and treats",
                "Beds and crates",
                "Collars and leashes",
                "Toys",
                "Grooming products",
                "Training supplies",
                "Flea and tick treatments",
                "Supplements",
                "Outdoor accessories"
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>From bringing home a new puppy to caring for a senior dog, Chewy provides products for different stages of a dog's life.</p>

            <p><strong>Cat Products:</strong> Chewy offers a wide variety of products designed specifically for cats, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-bold">
              {[
                "Cat food",
                "Litter and litter boxes",
                "Scratching posts",
                "Toys",
                "Beds",
                "Grooming tools",
                "Cat trees",
                "Health supplements"
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>Cat owners can also find products suited for different dietary needs, lifestyles, and preferences.</p>

            <p><strong>Pet Pharmacy & Healthcare:</strong> Keeping pets healthy often requires more than food and supplies. Chewy Pharmacy provides access to prescription medications, supplements, and wellness products for eligible pets. Pet owners can conveniently manage medication orders and find healthcare products without making unnecessary trips to a physical store.</p>

            <p><strong>Pet Toys & Accessories:</strong> Chewy makes it easy to keep pets active and entertained with a wide selection of toys and accessories. Customers can shop:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-bold">
              {[
                "Interactive toys",
                "Chew toys",
                "Puzzle toys",
                "Beds",
                "Travel accessories",
                "Clothing",
                "Outdoor equipment"
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>These products help support pets' physical activity and mental stimulation.</p>

            <p><strong>Supplies for Other Pets:</strong> Chewy also offers products for animals beyond dogs and cats, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-bold">
              {[
                "Birds",
                "Fish",
                "Reptiles",
                "Small pets",
                "Horses"
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>From habitat supplies to food and accessories, pet owners can find products for different types of animals.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <div>
              <h3 className="text-xl font-black text-[#056bfa] mb-2">How to Use a Chewy Promo Code</h3>
              <p className="text-gray-500 font-normal text-sm">Saving on your pet supplies is simple.</p>
            </div>
            <div className="space-y-6">
              {[
                "Step 1: Find a Chewy Offer — Visit CouponsBit and browse the latest Chewy promo code, Chewy coupon code, and Chewy discount code offers.",
                "Step 2: Select the Right Deal — Choose a promotion that matches your purchase requirements. Some offers may apply only to specific products, categories, or customer accounts.",
                "Step 3: Copy the Promo Code — Copy the available Chewy promotional code before visiting the website.",
                "Step 4: Shop on Chewy — Add your preferred pet products, food, medications, or supplies to your cart.",
                "Step 5: Apply the Code — Enter the promotional code during checkout if applicable.",
                "Step 6: Complete Your Purchase — Review your savings, finalize your order, and schedule delivery for your pet essentials."
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

          {/* Smart Ways to Save */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Smart Ways to Save More on Chewy</h3>
            <p><strong>Use Autoship for Regular Purchases:</strong> If you frequently purchase the same pet food, treats, or supplies, Autoship can help simplify ordering while offering potential savings on eligible products.</p>
            <p><strong>Shop Seasonal Promotions:</strong> Chewy regularly runs promotions around holidays, pet events, and seasonal shopping periods. Checking available deals before purchasing can help you save.</p>
            <p><strong>Compare Product Sizes:</strong> Larger packages may offer better value per unit, especially for frequently used products like food, litter, and treats.</p>
            <p><strong>Subscribe to Product Needs:</strong> Planning ahead for regular purchases can prevent last-minute orders and help you take advantage of available offers.</p>
            <p><strong>Check CouponsBit Before Checkout:</strong> Before completing your order, look for a working Chewy promo code, Chewy coupon code, or Chewy discount code to see if additional savings are available.</p>
          </div>

          {/* Why Use CouponsBit */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Why Use CouponsBit for Chewy Deals?</h3>
            <p>Finding pet savings should be simple. CouponsBit helps shoppers discover current offers from popular brands, including Chewy.</p>
            <p><strong>Updated Promotions:</strong> We regularly update available deals to help shoppers find relevant savings opportunities.</p>
            <p><strong>Multiple Savings Options:</strong> From promo codes and coupon codes to seasonal promotions, CouponsBit brings different types of offers together in one place.</p>
            <p><strong>Free Access:</strong> CouponsBit is free to use and does not require a subscription to browse available deals.</p>
            <p><strong>More Than Pet Deals:</strong> Along with Chewy, shoppers can find savings across categories including travel, fashion, electronics, software, home products, and more.</p>
          </div>

          {/* Conclusion */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Make Pet Care More Affordable with Chewy</h3>
            <p>Taking care of a pet involves regular purchases, but saving money doesn't mean compromising on quality. With a wide selection of trusted products, convenient delivery options, and pet-focused services, Chewy makes it easier for pet parents to provide the care their animals deserve.</p>
            <p>Before your next order, check CouponsBit for the latest Chewy promo code, Chewy coupon code, and Chewy discount code. A simple search before checkout could help you save more on the products your pets need every day.</p>
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
              q: "Where can I find a Chewy promo code?",
              a: "You can find the latest Chewy promo codes, Chewy coupon codes, and Chewy discount codes on CouponsBit before completing your purchase."
            },
            {
              q: "Does Chewy offer discounts for new customers?",
              a: "Chewy may provide promotional offers for eligible new customers. Availability and terms can change, so checking current promotions is recommended."
            },
            {
              q: "What products can I buy on Chewy?",
              a: "Chewy sells pet food, treats, toys, supplies, medications, supplements, grooming products, and accessories for dogs, cats, and other pets."
            },
            {
              q: "What is Chewy Autoship?",
              a: "Autoship allows customers to schedule recurring deliveries of frequently purchased pet products, making regular shopping more convenient."
            },
            {
              q: "Does Chewy sell prescription pet medications?",
              a: "Yes, Chewy offers pharmacy services and eligible prescription pet medications and healthcare products."
            },
            {
              q: "Is CouponsBit free to use?",
              a: "Yes. CouponsBit is completely free and helps shoppers discover verified deals and promotional offers from popular brands."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Chewy Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Dog Food Deals",
              "Cat Litter Coupons",
              "Chewy Autoship",
              "Pet Pharmacy",
              "Free Shipping Chewy",
              "Chewy Promo Code",
              "Flea & Tick Offers",
              "Pet Toys Sale"
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
              { heading: "35% Off Autoship", sub: "On Your First Order" },
              { heading: "$20 Off $49+", sub: "First Pharmacy Order" },
              { heading: "Free Shipping", sub: "Orders Over $49" },
              { heading: "Buy 2, Get 1 Free", sub: "Select Pet Toys & Treats" },
              { heading: "30% Off Frontline", sub: "Flea & Tick Protection" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  CW
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
