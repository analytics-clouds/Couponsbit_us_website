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
    discount: "$0",
    label: "FLAT",
    title: "DoorDash – $0 Delivery Fee on First Order",
    heading: "$0 DELIVERY FEE",
    sub: "DoorDash",
    description: "Get $0 delivery fee on your first DoorDash order",
    usedCount: "0",
    expiresIn: "TBD",
    code: "DOORDASH1"
  },
  {
    id: "c2",
    discount: "30%",
    label: "SAVE",
    title: "DoorDash Promo Code – Save 30% OFF Your Order",
    heading: "30% OFF",
    sub: "DoorDash Promo Code",
    description: "Save 30% OFF on eligible DoorDash orders for a limited time",
    usedCount: "0",
    expiresIn: "TBD",
    code: "DOORDASH2"
  },
  {
    id: "c3",
    discount: "20%",
    label: "SAVE",
    title: "DoorDash – 20% OFF Chips & Queso",
    heading: "20% OFF",
    sub: "DoorDash",
    description: "Enjoy 20% OFF on select chips and queso",
    usedCount: "0",
    expiresIn: "TBD",
    code: "DOORDASH3"
  },
  {
    id: "c4",
    discount: "15%",
    label: "SAVE",
    title: "DoorDash – 15% OFF Taco Bell Orders $34+",
    heading: "15% OFF",
    sub: "DoorDash",
    description: "Save 15% OFF Taco Bell orders of $34 or more",
    usedCount: "0",
    expiresIn: "TBD",
    code: "DOORDASH4"
  },
  {
    id: "c5",
    discount: "$7.15",
    label: "From",
    title: "DoorDash – Starbucks Caramel Frappuccino for $7.15",
    heading: "$7.15",
    sub: "DoorDash",
    description: "Get a Starbucks Caramel Frappuccino for $7.15 through DoorDash",
    usedCount: "0",
    expiresIn: "TBD",
    code: "DOORDASH5"
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

export default function DoorDashCouponsContent() {
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
              <span className="text-black font-extrabold">DoorDash</span>
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
                  <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp" alt="DoorDash" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">DoorDash</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save with DoorDash promo codes offering 30% off eligible orders, $0 delivery fees on your first order, $15 off select wine, $6 off $40+ orders, 15% off Taco Bell orders $34+, and additional restaurant, grocery, and beverage deals.
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
                    <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518249/us_website_new_iprjg0.webp" alt="DoorDash Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518247/109_iqy9jq.webp" alt="DoorDash Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518247/110_ggwufz.webp" alt="DoorDash Voucher Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">DoorDash Coupon Codes & Offers</h2>
                  
                </div>

                

                {/* Coupon 1 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FLAT</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$0</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">DELIVERY FEE</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">DoorDash – $0 Delivery Fee on First Order</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get $0 delivery fee on your first DoorDash order</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Order your favorite meals, groceries, snacks, and essentials</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Other fees may apply depending on the order and location</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great savings opportunity for new DoorDash customers</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>DoorDash Promo Code, First Order Deal, $0 Delivery Fee, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" aria-label="Get DoorDash deal: DoorDash – $0 Delivery Fee on First Order" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">30%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">DoorDash Promo Code – Save 30% OFF Your Order</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save 30% OFF on eligible DoorDash orders for a limited time</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Apply the available promo code at checkout to unlock savings</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy discounts on meals, groceries, snacks, and everyday essentials</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Offer availability may vary by customer and location</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>DoorDash Promo Code, 30% Off, DoorDash Deals, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" aria-label="Get DoorDash deal: DoorDash Promo Code – Save 30% OFF Your Order" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">20%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">DoorDash – 20% OFF Chips & Queso</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Enjoy 20% OFF on select chips and queso</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Get tortilla chips with creamy queso at a special price</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Participating locations and availability may vary</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>DoorDash Discount Code, Chips & Queso, Food Deals, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" aria-label="Get DoorDash deal: DoorDash – 20% OFF Chips & Queso" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">15%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">DoorDash – 15% OFF Taco Bell Orders $34+</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save 15% OFF Taco Bell orders of $34 or more</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Discount is automatically applied to eligible carts</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy popular Taco Bell meals while spending less</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Free delivery may be available on qualifying first orders</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>DoorDash Discount Code, Taco Bell Deal, 15% Off, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" aria-label="Get DoorDash deal: DoorDash – 15% OFF Taco Bell Orders $34+" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$7.15</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">DoorDash – Starbucks Caramel Frappuccino for $7.15</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get a Starbucks Caramel Frappuccino for $7.15 through DoorDash</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy a refreshing coffee drink delivered to your door</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available at participating Starbucks locations</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Add-ons and additional fees may apply</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>DoorDash Discount Code, Starbucks Deal, Caramel Frappuccino, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" aria-label="Get DoorDash deal: DoorDash – Starbucks Caramel Frappuccino for $7.15" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$5</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">DoorDash – $5 OFF Orders Over $35 at Zio Al's</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get $5 OFF orders of $35 or more at Zio Al's Pizza & Pasta</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy pizza, pasta, and other favorites for less</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Availability may vary by participating location</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>DoorDash Discount Code, $5 Off, Zio Al's, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" aria-label="Get DoorDash deal: DoorDash – $5 OFF Orders Over $35 at Zio Al's" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$15</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">DoorDash – $15 OFF Select Wine</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save $15 OFF when you purchase 6 bottles of select wine</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Mix and match eligible bottles to unlock the savings</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>No promo code is required for this offer</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available to eligible customers where applicable</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>DoorDash Discount Code, $15 Off, Wine Deal, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" aria-label="Get DoorDash deal: DoorDash – $15 OFF Select Wine" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$1</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">DoorDash – Buy 2 Red Bull 12 oz & Save $1</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save $1 when you buy 2 select 12-oz Red Bull cans</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy instant savings when stocking up on energy drinks</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Participating stores and availability may vary</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>DoorDash Discount Code, Red Bull Deal, Grocery Savings, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" aria-label="Get DoorDash deal: DoorDash – Buy 2 Red Bull 12 oz & Save $1" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$6</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">DoorDash – $6 OFF Orders of $40+</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get $6 OFF eligible orders of $40 or more at Jackson's Food Stores</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Savings are automatically applied with no code required</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Stock up on snacks, drinks, prepared meals, and essentials</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A convenient way to save more on larger orders</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>DoorDash Discount Code, $6 Off, Jackson's Food Stores, USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" aria-label="Get DoorDash deal: DoorDash – $6 OFF Orders of $40+" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is DoorDash?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    DoorDash is a US-based delivery platform that connects customers with restaurants, grocery stores, convenience retailers, and other local businesses. Instead of contacting individual restaurants or stores, customers can browse participating merchants through the DoorDash website or mobile app, select what they need, and arrange delivery from a single platform.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The service began with restaurant delivery but has expanded considerably. Today, customers can use DoorDash for much more than ordering takeout. Depending on location, the platform can also be used to purchase groceries, convenience products, household essentials, alcohol from participating retailers where legally permitted, and other items available through local merchants.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    DoorDash's marketplace model benefits both customers and businesses. Customers get access to a broad selection of local options, while restaurants and retailers can reach customers who may not otherwise order directly from them.
For busy professionals, families, students, and anyone who would rather skip the trip to the store, the convenience can be particularly valuable.

                  </p>
                  <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <h3 className="text-black font-black text-lg mb-8">What Can You Order Through DoorDash?</h3>

  <div className="space-y-8">
    {[
      { 
        icon: ShoppingBag, 
        title: "Restaurant Meals", 
        sub: "Restaurant delivery remains at the heart of DoorDash. Customers can browse local restaurants, compare menus, read ratings, customize orders, and arrange delivery without needing to contact each restaurant individually. From fast food and pizza to sushi, Mexican food, burgers, Indian cuisine, desserts, and local favorites, the selection depends on the restaurants operating in your area." 
      },
      { 
        icon: LayoutGrid, 
        title: "Groceries", 
        sub: "DoorDash can also help with grocery shopping through participating supermarkets and grocery retailers. You can order fresh produce, pantry staples, beverages, snacks, frozen foods, household products, and other everyday necessities. This can be particularly useful when you need a few items without wanting to make a separate trip to the supermarket." 
      },
      { 
        icon: Search, 
        title: "Convenience Items", 
        sub: "Forgot something at home? DoorDash also connects customers with participating convenience stores and retailers offering snacks, drinks, personal care products, household essentials, and other frequently needed items." 
      },
      { 
        icon: Globe, 
        title: "Retail Products", 
        sub: "In selected locations, DoorDash provides access to retailers beyond restaurants and grocery stores. Product availability varies by market, allowing customers to discover different shopping options through the same app." 
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
          DoorDash Promo Code, Coupon Code & Discount Offers
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
        <td className="p-5 text-black font-black align-middle max-w-[220px]">First Order Delivery Fee</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$0 Delivery Fee</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">New customers, other fees may apply</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">First Order</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Order Discount</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">30% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Limited time, eligible orders</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Meals, Groceries & Essentials</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Chips & Queso</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">20% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Select items, location varies</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Chips & Queso</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Taco Bell Orders $34+</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">15% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Automatically applied</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Taco Bell</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Starbucks Caramel Frappuccino</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $7.15</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Participating locations</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Starbucks</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Zio Al's Orders $35+</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$5 OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Participating locations</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Zio Al's Pizza & Pasta</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Select Wine (6 Bottles)</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$15 OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">No promo code required</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Wine</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Red Bull 12oz (Buy 2)</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Save $1</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Participating stores</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Energy Drinks</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Jackson's Food Stores $40+</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$6 OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Automatically applied, no code</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Jackson's Food Stores</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={`text-gray-600 font-medium leading-relaxed space-y-6 relative transition-all ${!isReadMore ? 'max-h-[500px] overflow-hidden' : ''}`}>
          
          {/* Intro */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Order More for Less with a DoorDash Promo Code</h3>
            <p>
              Craving your favorite restaurant meal but don't want delivery costs to push up the bill? DoorDash makes it easy to order food, groceries, convenience items, and other everyday essentials from local businesses and have them delivered to your door. With thousands of restaurants and merchants available across the United States, you can use DoorDash to arrange a quick lunch, order dinner for the family, stock up on groceries, or grab last-minute essentials.
            </p>
            <p>
              And before you place your next order, it's worth checking for a DoorDash promo code. Promotional offers can help reduce the cost of eligible orders, while DoorDash also runs restaurant-specific deals, membership benefits, and other savings opportunities throughout the year.
            </p>
            <p>
              At CouponsBit, you can browse the latest DoorDash promo code, DoorDash coupon code, DoorDash discount code, and other promotional offers before checking out. This guide also explains how DoorDash works, what you can order, where its savings opportunities come from, and how to make the most of your delivery budget.
            </p>
          </div>

          {/* Why Do People Use DoorDash */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Why Do People Use DoorDash?</h3>
            <p>DoorDash's popularity isn't based solely on getting food delivered. Its appeal comes from combining convenience, variety, and digital ordering into one experience.</p>
            
            <p><strong>A Wide Choice of Local Restaurants:</strong> DoorDash allows customers to discover restaurants they may not have considered before. You can browse menus, ratings, delivery estimates, and available offers before deciding where to order.</p>
            
            <p><strong>Convenient Ordering:</strong> There's no need to call a restaurant, explain your order over the phone, or wait on hold. Everything from selecting dishes to tracking delivery can be handled through the app or website.</p>

            <p><strong>Order Tracking:</strong> Once an order is placed, customers can typically monitor its progress and receive updates as it moves from preparation to delivery.</p>

            <p><strong>Restaurant Deals:</strong> Participating restaurants may offer discounts, free-item promotions, reduced delivery fees, or other deals through DoorDash. These offers can change frequently, so checking the platform before ordering can be worthwhile.</p>

            <p><strong>DashPass Benefits:</strong> Frequent DoorDash customers can consider DashPass, the platform's membership program. Depending on the current membership terms and eligible orders, members can receive benefits such as reduced delivery fees and other savings on qualifying purchases.</p>
          </div>

          {/* How to Find and Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <div>
              <h3 className="text-xl font-black text-[#056bfa] mb-2">How to Find and Use a DoorDash Promo Code</h3>
              <p className="text-gray-500 font-normal text-sm">If you have found a DoorDash promo code through CouponsBit, applying it is generally straightforward. However, promotional terms can vary, so always check the requirements before placing your order.</p>
            </div>
            <div className="space-y-6">
              {[
                "Step 1: Find a DoorDash Offer — Visit CouponsBit and browse the available DoorDash promotions. Look for a promo code, coupon code, discount code, or other offer that applies to your order.",
                "Step 2: Check the Terms — Before copying a code, review its conditions. Some promotions may be limited to new customers, specific restaurants, certain order values, selected locations, or particular payment methods.",
                "Step 3: Copy the Code — Copy the promotional code you want to use.",
                "Step 4: Build Your Order — Open DoorDash and choose your restaurant, grocery store, or participating retailer. Add eligible products to your cart.",
                "Step 5: Apply Your Promo — Enter the DoorDash promo code in the applicable promotional section before completing your order.",
                "Step 6: Check Your Total — Make sure the promotion has been reflected in your order summary before submitting the order."
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

          {/* Other Ways to Save */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Other Ways to Save on DoorDash</h3>
            <p className="text-gray-500 italic">A promo code isn't the only way to lower the cost of a DoorDash order. Savvy customers can combine smart shopping habits with the platform's available promotions.</p>
            <p><strong>Look for Restaurant-Specific Deals:</strong> Restaurants frequently run their own promotions through DoorDash. These may include percentage discounts, reduced prices on selected menu items, free items with qualifying orders, or other limited-time offers.</p>
            <p><strong>Check for Free Delivery Promotions:</strong> Participating restaurants may occasionally offer free or reduced delivery fees. These offers can make a noticeable difference, particularly on smaller orders.</p>
            <p><strong>Consider DashPass:</strong> If you order through DoorDash frequently, compare the cost of a DashPass membership with the delivery fees you typically pay. Depending on your ordering habits and the current membership benefits, a subscription may provide better overall value.</p>
            <p><strong>Compare the Final Order Total:</strong> Don't focus solely on the menu price. Delivery fees, service charges, taxes, and other applicable costs can affect what you actually pay. Reviewing the complete total before checkout gives you a better picture of the value you're getting.</p>
            <p><strong>Order During Promotions:</strong> DoorDash and participating merchants run promotions throughout the year. Keeping an eye on the app can help you identify opportunities to save when you're already planning to order.</p>
            <p><strong>Check CouponsBit Before Ordering:</strong> A quick search for a DoorDash coupon code or DoorDash discount code before checkout could reveal an offer you might otherwise miss.</p>
          </div>

          {/* Best Time to Look */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">When Is the Best Time to Look for DoorDash Deals?</h3>
            <p>DoorDash promotions can appear throughout the year, but certain occasions may bring more opportunities for savings.</p>
            <p><strong>Major Holidays:</strong> Restaurants and retailers may introduce special promotions around major US holidays and celebrations.</p>
            <p><strong>Sports & Entertainment Events:</strong> Large sporting events and entertainment occasions can lead participating restaurants to introduce meal deals or delivery promotions.</p>
            <p><strong>Back-to-School Season:</strong> Students and families may find restaurant and convenience promotions during the back-to-school period.</p>
            <p><strong>Seasonal Promotions:</strong> Summer, fall, and holiday periods can bring limited-time offers from participating merchants.</p>
            <p>The availability of these promotions can vary considerably by location and account, so it's best to check the current offers rather than assuming a particular deal will be available.</p>
          </div>

          {/* Who Can Benefit */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Who Can Benefit from DoorDash?</h3>
            <p>DoorDash can be useful for a wide variety of customers.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-bold">
              {[
                "Busy professionals can order lunch or dinner without leaving work.",
                "Families can arrange meals without cooking after a long day.",
                "Students can access nearby restaurants and convenience stores from their phones.",
                "Remote workers can order lunch without interrupting their workday.",
                "Travelers can use delivery services where DoorDash operates and participating merchants are available.",
                "Anyone needing convenience can use the platform to order food, groceries, and other essentials without making a separate trip."
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Promo Code vs Coupon Code vs Discount Code */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">DoorDash Promo Code vs. Coupon Code vs. Discount Code</h3>
            <p>You may see several terms used when searching for DoorDash savings, including promo code, coupon code, and discount code.</p>
            <p>In practice, these terms generally refer to promotional offers designed to reduce the cost of an eligible purchase. The exact offer can differ, though. One promotion might provide a percentage discount, another could reduce a delivery fee, and another might offer a fixed amount off a qualifying order.</p>
            <p>That's why it's important to read the conditions attached to every offer rather than assuming every code works on every DoorDash order.</p>
          </div>

          {/* Why Check CouponsBit */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Why Check CouponsBit for DoorDash Offers?</h3>
            <p>Searching for a deal shouldn't take longer than placing the order itself. CouponsBit brings DoorDash promotions together in one convenient location so shoppers can check available offers before completing their purchase.</p>
            <p><strong>Regularly Updated Offers:</strong> Promotions change frequently, so we keep our DoorDash listings updated to help you find current opportunities.</p>
            <p><strong>Multiple Types of Savings:</strong> You can look for a DoorDash promo code, coupon code, discount code, and other promotional offers in one place.</p>
            <p><strong>Free to Use:</strong> CouponsBit doesn't charge shoppers to browse available deals.</p>
            <p><strong>More Ways to Save:</strong> Alongside DoorDash, CouponsBit features promotions from restaurants, retailers, travel companies, technology brands, and other popular businesses.</p>
          </div>

          {/* Conclusion */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Make Your Next DoorDash Order Cost Less</h3>
            <p>DoorDash has made it easier to order restaurant meals, groceries, convenience items, and other products without making an extra trip. But convenience doesn't mean you have to overlook savings.</p>
            <p>Before placing your next order, check CouponsBit for a DoorDash promo code, DoorDash coupon code, or DoorDash discount code that may apply to your purchase. Then compare available restaurant promotions, delivery offers, and membership benefits to find the option that gives you the best overall value.</p>
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
              q: "Where can I find a DoorDash promo code?",
              a: "You can check CouponsBit for the latest DoorDash promo codes, coupon codes, and discount codes before placing an order."
            },
            {
              q: "Does DoorDash have discount codes?",
              a: "DoorDash periodically offers promotional codes and other discounts. Availability and eligibility can vary based on the promotion, customer, location, and order requirements."
            },
            {
              q: "How do I use a DoorDash coupon code?",
              a: "Select an eligible DoorDash offer, copy the coupon code, and apply it through the applicable promotional section before completing your order. Always check the terms to make sure your purchase qualifies."
            },
            {
              q: "Are DoorDash promo codes available to existing customers?",
              a: "Some promotions may be available to existing customers, while others can be restricted to new users or specific accounts. Check the individual offer's conditions before attempting to redeem it."
            },
            {
              q: "Does DoorDash offer discounts on delivery?",
              a: "Participating restaurants and merchants may offer reduced or free delivery promotions. DashPass members may also receive delivery-related benefits on eligible orders according to the current membership terms."
            },
            {
              q: "What is DashPass?",
              a: "DashPass is DoorDash's membership program. It provides eligible members with various benefits on qualifying orders, which can make the service more economical for frequent users."
            },
            {
              q: "Can I use a DoorDash promo code on groceries?",
              a: "Some promotions may apply to grocery or retail orders, while others are limited to restaurant purchases. Always review the specific terms of the offer before applying for it."
            },
            {
              q: "Does DoorDash offer restaurant deals?",
              a: "Yes. Participating restaurants can provide special promotions and discounts through DoorDash. The offers available can vary by restaurant and location."
            },
            {
              q: "Is CouponsBit free to use?",
              a: "Yes. CouponsBit is free to use and helps shoppers discover promotional offers and coupon codes from popular brands."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular DoorDash Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "50% Off First Order",
              "DashPass Trial",
              "Free Delivery Code",
              "Grocery Delivery",
              "DoorDash Promo",
              "Convenience Items",
              "Student Discount",
              "Restaurant Deals"
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
              { heading: "50% Off 1st Order", sub: "With DashPass Trial" },
              { heading: "$0 Delivery Fee", sub: "First Order Special" },
              { heading: "30% Off First Order", sub: "New Customer Deal" },
              { heading: "50% Off DashPass", sub: "For Eligible Students" },
              { heading: "$5 Off Referral", sub: "When You Invite Friends" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  DD
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
