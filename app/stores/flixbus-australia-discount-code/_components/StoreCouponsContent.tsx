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
  Zap,
  Bus, MapPin, GraduationCap, Briefcase, Sun
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
    discount: "20%",
    label: "EXTRA",
    badge: "Best Offer",
    title: "Sydney To Thredbo Snow Trip – From $74.99",
    heading: "From $74.99",
    sub: "Sydney To Thredbo Snow Trip",
    description: "Travel from Sydney to Thredbo via Perisher Skitube with fares starting from just $74.99. Use code FLXAUGND for an extra 20% OFF.",
    usedCount: "1.2k",
    expiresIn: "Limited Time",
    code: "FLXAUGND"
  },
  {
    id: "c2",
    discount: "50%",
    label: "FLAT",
    badge: "Popular",
    title: "Enjoy 50% OFF Your Next Trip",
    heading: "Flat 50% OFF",
    sub: "Your Next Trip",
    description: "Save an amazing 50% OFF on your next FlixBus Australia journey. Use code FLXAUGND for an extra 20% OFF.",
    usedCount: "980",
    expiresIn: "Limited Time",
    code: "FLXAUGND"
  },
  {
    id: "c3",
    discount: "20%",
    label: "EXTRA",
    badge: "Trending",
    title: "One-Way Fares From Just $9.99",
    heading: "From $9.99",
    sub: "One-Way Fares",
    description: "Book one-way FlixBus Australia tickets from only $9.99 on selected routes. Use code FLXAUGND for an extra 20% OFF.",
    usedCount: "760",
    expiresIn: "Limited Time",
    code: "FLXAUGND"
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

export default function FlixBusAustraliaCouponsContent() {
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
              <span className="text-black font-extrabold">FlixBus Australia</span>
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
                  <a href="https://www.flixbus.com.au/" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1784546572/flixbus-australia-coupon-code_nvew4i.webp" alt="FlixBus Australia" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">FlixBus Australia</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more on your journey with the latest FlixBus Australia Voucher. Enjoy up to 50% OFF on selected routes and unlock an Extra 20% OFF using coupon code FLXAUGND. Book affordable Australia bus travel today and explore more while spending less.
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
                    <a href="https://www.flixbus.com.au/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784550751/flixbus-promo-code_ppp4vv.webp" alt="FlixBus Australia Discount Code" width={800} height={350} className="w-full h-full object-cover" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://www.flixbus.com.au/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784550750/flixbus-discount-code_p2ngvl.webp" alt="FlixBus Australia Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://www.flixbus.com.au/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784550750/flixbus-voucher_bkrww6.webp" alt="FlixBus Australia Voucher Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">FlixBus Australia Coupon Codes & Offers</h2>

                </div>



                {/* Coupon 1 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Starting At</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$74.99</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">/trip</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Sydney To Thredbo Snow Trip – From $74.99</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Travel from Sydney to Thredbo via Perisher Skitube with fares starting from just $74.99. Enjoy a comfortable and hassle-free coach journey to Australia's top snow destinations.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Travel from Sydney to Thredbo via Perisher Skitube from $74.99</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Comfortable, hassle-free coach journey to Australia's top snow destinations</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Use Coupon Code FLXAUGND for an Extra 20% OFF your booking</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center gap-3 px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.flixbus.com.au/" target="_blank" rel="noopener noreferrer" aria-label="Get FlixBus Australia deal: Sydney To Thredbo Snow Trip From $74.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 lg:px-6 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block lg:whitespace-nowrap">Visit Website</a>
                          <button type="button" onClick={() => handleCopy("FLXAUGND")} className="w-full lg:w-auto flex items-center justify-between gap-3 border-2 border-dashed border-[#056bfa] rounded-2xl px-4 py-2.5 bg-white hover:bg-[#e8f6f8] transition-colors">
                            <span className="font-mono font-black text-[#056bfa] text-sm tracking-widest">FLXAUGND</span>
                            <span className="flex items-center gap-1 text-[#056bfa] font-bold text-[11px] uppercase shrink-0">
                              <Copy className="w-3.5 h-3.5" />
                              Copy
                            </span>
                          </button>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FLAT</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">50%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Enjoy 50% OFF Your Next Trip</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save an amazing 50% OFF on your next FlixBus Australia journey. Explore popular destinations across Australia at unbeatable prices.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save 50% OFF on your next journey</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Explore popular destinations across Australia at unbeatable prices</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Use Coupon Code FLXAUGND for an Extra 20% OFF your booking</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center gap-3 px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.flixbus.com.au/" target="_blank" rel="noopener noreferrer" aria-label="Get FlixBus Australia deal: Enjoy 50% OFF Your Next Trip" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 lg:px-6 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block lg:whitespace-nowrap">Visit Website</a>
          <button type="button" onClick={() => handleCopy("FLXAUGND")} className="w-full lg:w-auto flex items-center justify-between gap-3 border-2 border-dashed border-[#056bfa] rounded-2xl px-4 py-2.5 bg-white hover:bg-[#e8f6f8] transition-colors">
            <span className="font-mono font-black text-[#056bfa] text-sm tracking-widest">FLXAUGND</span>
            <span className="flex items-center gap-1 text-[#056bfa] font-bold text-[11px] uppercase shrink-0">
              <Copy className="w-3.5 h-3.5" />
              Copy
            </span>
          </button>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Starting At</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$9.99</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">One-Way</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">One-Way Fares From Just $9.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Book one-way FlixBus Australia tickets from only $9.99 on selected routes. Travel comfortably with modern coaches and affordable fares.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>One-way tickets from just $9.99 on selected routes</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Travel comfortably with modern coaches and affordable fares</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Use Coupon Code FLXAUGND for an Extra 20% OFF – limited-time Australia travel deal</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center gap-3 px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.flixbus.com.au/" target="_blank" rel="noopener noreferrer" aria-label="Get FlixBus Australia deal: One-Way Fares From Just $9.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 lg:px-6 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block lg:whitespace-nowrap">Visit Website</a>
          <button type="button" onClick={() => handleCopy("FLXAUGND")} className="w-full lg:w-auto flex items-center justify-between gap-3 border-2 border-dashed border-[#056bfa] rounded-2xl px-4 py-2.5 bg-white hover:bg-[#e8f6f8] transition-colors">
            <span className="font-mono font-black text-[#056bfa] text-sm tracking-widest">FLXAUGND</span>
            <span className="flex items-center gap-1 text-[#056bfa] font-bold text-[11px] uppercase shrink-0">
              <Copy className="w-3.5 h-3.5" />
              Copy
            </span>
          </button>
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
                  <h3 className="text-black font-black text-lg mb-6">About FlixBus Australia</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    FlixBus is recognised worldwide for making long-distance coach travel more accessible and affordable. The company operates an extensive transportation network that connects major cities and regional destinations, helping millions of passengers travel comfortably every year.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The booking process has been designed with convenience in mind. Travellers can search routes, compare schedules, purchase tickets, manage bookings, and access digital boarding passes using either the official website or mobile application.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its combination of affordability and convenience has made FlixBus a popular choice among budget-conscious travellers looking for reliable transportation without compromising on comfort.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For Australians planning holidays, business trips, weekend escapes, or university travel, using a FlixBus voucher code can further reduce ticket prices and stretch every travel dollar.
                  </p>
                  <a href="https://www.flixbus.com.au/" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <h3 className="text-black font-black text-lg mb-8">Travel Services Available with FlixBus</h3>

  <p className="text-gray-600 font-medium text-xs mb-8 leading-relaxed">
    FlixBus serves different types of travellers by offering flexible booking options suitable for various travel needs.
  </p>

  <div className="space-y-8">
    {[
      {
        icon: Bus,
        title: "City-to-City Travel",
        sub: "Whether you're commuting between major Australian cities or visiting regional destinations, FlixBus provides affordable transport without the stress of driving."
      },
      {
        icon: MapPin,
        title: "Weekend Getaways",
        sub: "Planning a quick escape? Coach travel allows you to enjoy spontaneous trips while keeping transportation costs low."
      },
      {
        icon: GraduationCap,
        title: "Student Travel",
        sub: "Students frequently travel between universities and hometowns throughout the year. Affordable fares make FlixBus an attractive option for managing education-related travel expenses."
      },
      {
        icon: Briefcase,
        title: "Business Trips",
        sub: "Professionals appreciate reliable schedules, comfortable seating, and onboard amenities that help them remain productive during their journey."
      },
      {
        icon: Sun,
        title: "Holiday Transportation",
        sub: "Families and tourists can travel comfortably while saving money that can instead be spent on accommodation, dining, or sightseeing."
      },
      {
        icon: Users,
        title: "Group Bookings",
        sub: "Whether it's a sports team, university group, corporate event, or family reunion, FlixBus offers practical transportation for groups of different sizes."
      }
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start text-left">
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
          FlixBus Discount Code Australia | Grab the Best Travel Savings with CouponsBit
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[950px]">
            <thead>
              <tr className="bg-[#056BFA] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-none rounded-br-none">
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Coupon Code</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 font-bold text-[14px]">
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Sydney To Thredbo Snow Trip</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $74.99/trip</td>
                <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">FLXAUGND</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 20% OFF with code</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sydney–Thredbo Coach Travel</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Enjoy 50% OFF Your Next Trip</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Flat 50% OFF</td>
                <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">FLXAUGND</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 20% OFF with code</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Australia Coach Routes</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">One-Way Fares From Just $9.99</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $9.99 one-way</td>
                <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">FLXAUGND</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 20% OFF with code, selected routes only</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Selected One-Way Routes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Travelling across Australia doesn't have to come with a hefty price tag. Whether you're planning a scenic road trip from Sydney to Melbourne, heading to Brisbane for a holiday, or travelling between cities for work or study, FlixBus offers a comfortable and budget-friendly way to reach your destination. Better still, you can make every journey even more affordable by using a valid FlixBus discount code available on CouponsBit.
          </p>
          <p>
            At CouponsBit, we help smart travellers discover verified savings before they book. Instead of paying full fare, you can browse the latest FlixBus voucher code, promotional offers, and exclusive travel deals in one convenient place. A few seconds spent applying a coupon at checkout could help lower your travel costs, allowing you to spend more on experiences rather than transportation.
          </p>
          <p>
            FlixBus has become a preferred choice for travellers looking for reliable coach services without the high costs often associated with air travel or driving long distances. Its modern fleet, comfortable seating, digital booking system, and extensive network make it suitable for solo travellers, families, students, backpackers, and business professionals alike.
          </p>
          <p>
            Whether you're booking your first journey or you're already a frequent passenger, CouponsBit makes it easier to save with the latest FlixBus coupon code and promotional offers designed for Australian travellers.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose FlixBus for Your Australian Adventures?</h3>
            <p>
              Australia is filled with breathtaking coastlines, vibrant cities, charming regional towns, and unforgettable road trip destinations. Travelling between them should be simple, affordable, and comfortable—exactly what FlixBus aims to provide.
            </p>
            <p>
              Instead of worrying about expensive fuel, airport queues, or costly domestic flights, travellers can relax onboard modern coaches equipped with practical amenities that make long-distance travel enjoyable.
            </p>
            <p>Some of the reasons people continue choosing FlixBus include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Affordable ticket prices</li>
              <li>Comfortable reclining seats</li>
              <li>Free onboard Wi-Fi on many routes</li>
              <li>USB charging ports</li>
              <li>Air-conditioned coaches</li>
              <li>Convenient online booking</li>
              <li>Mobile ticketing</li>
              <li>Flexible travel options</li>
              <li>Expanding destination network</li>
              <li>Reliable customer support</li>
            </ul>
            <p>
              Adding a FlixBus discount code during checkout makes an already affordable journey even better value.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More Every Time You Book with CouponsBit</h3>
            <p>
              Finding genuine coupon codes online can often be frustrating. Many websites list expired promotions that no longer work, leaving travellers disappointed during checkout.
            </p>
            <p>CouponsBit takes a different approach.</p>
            <p>
              Our goal is to help shoppers and travellers access genuine savings by regularly updating available deals from leading brands, including FlixBus. Instead of searching multiple coupon websites, you can browse current promotions in one place.
            </p>
            <p>Benefits of using CouponsBit include:</p>
            <p><strong>Updated Travel Offers:</strong> Our team regularly checks available promotions to help travellers find current FlixBus savings.</p>
            <p><strong>Free Access:</strong> There are no subscription fees or membership charges to browse available deals.</p>
            <p><strong>Easy-to-Use Website:</strong> Finding a FlixBus coupon code takes only a few clicks.</p>
            <p><strong>Travel Savings Throughout the Year:</strong> From holiday promotions to seasonal campaigns, CouponsBit keeps travellers informed about opportunities to reduce booking costs.</p>
            <p><strong>Convenient Browsing Experience:</strong> Whether you're planning weeks in advance or booking at the last minute, our organised offers help you save time.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Using a FlixBus Discount Code Makes Sense</h3>
            <p>
              Many travellers search for cheaper transportation without realising they may already qualify for additional savings.
            </p>
            <p>Applying a valid FlixBus discount code before completing payment offers several advantages:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Lower booking costs</li>
              <li>Better travel value</li>
              <li>Affordable family trips</li>
              <li>Reduced student travel expenses</li>
              <li>Savings on multiple passenger bookings</li>
              <li>Budget-friendly holiday planning</li>
              <li>Extra value during seasonal promotions</li>
              <li>Opportunity to travel more frequently without increasing your budget</li>
            </ul>
            <p>
              Even a small discount can make a noticeable difference, especially for travellers booking several journeys throughout the year.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Popular Australian Trips with FlixBus</h3>
            <p>FlixBus is suitable for a wide range of travel occasions.</p>
            <p>Many passengers use the service for:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Weekend city breaks</li>
              <li>University holidays</li>
              <li>Business conferences</li>
              <li>Family visits</li>
              <li>Music festivals</li>
              <li>Sporting events</li>
              <li>Tourist attractions</li>
              <li>Backpacking adventures</li>
              <li>Coastal holidays</li>
              <li>Regional exploration</li>
            </ul>
            <p>
              No matter where your next journey takes you, checking CouponsBit for a FlixBus voucher code before booking is always a smart decision.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Experience Comfortable Coach Travel</h3>
            <p>
              Modern coach travel has evolved significantly over the years, and FlixBus reflects that change by focusing on passenger comfort.
            </p>
            <p>Depending on the route, travellers may enjoy features such as:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Spacious seating</li>
              <li>Air conditioning</li>
              <li>USB charging points</li>
              <li>Complimentary Wi-Fi</li>
              <li>Large luggage compartments</li>
              <li>Easy online check-in</li>
              <li>Digital boarding passes</li>
              <li>Professional drivers</li>
              <li>Convenient departure locations</li>
            </ul>
            <p>
              These amenities make long-distance journeys more relaxing, allowing passengers to read, work, stream entertainment, or simply enjoy the scenery.
            </p>
            <p>
              Excellent! Here's CouponsBit – Part 2 (Final). This completes the store page with unique sections, different FAQs, and a distinct conclusion. The content remains SEO-focused, human-written, and tailored for the Australian audience while naturally incorporating your target keywords.
            </p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a FlixBus Discount Code</h3>
            <p className="text-gray-700 font-bold leading-relaxed mb-6">
              Saving on your next coach journey is easy when you know where to find the latest deals. CouponsBit regularly updates available promotions so you can book your trip with confidence. Follow these simple steps to redeem a FlixBus discount code:
            </p>
            <div className="space-y-6">
              {[
                "Step 1: Browse the Latest Offers — Visit CouponsBit and search for FlixBus. Review the available promotions and choose the FlixBus voucher code that best matches your travel plans.",
                "Step 2: Copy the Code — Click the offer to reveal the promotional code, then copy it for use during checkout.",
                "Step 3: Plan Your Journey — Go to the FlixBus website or mobile app and enter your departure city, destination, travel dates, and passenger details.",
                "Step 4: Select Your Trip — Compare the available routes and departure times before choosing the option that suits your schedule.",
                "Step 5: Apply Your Coupon — During checkout, locate the promo code field and paste your copied FlixBus coupon code. If the offer is valid for your booking, the discount will be reflected in your total.",
                "Step 6: Complete Your Booking — Finish the payment process and receive your digital ticket by email or within the FlixBus app."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Smart Ways to Save More on FlixBus Bookings</h3>
            <p>
              Using a FlixBus discount code is one of the easiest ways to reduce your travel expenses, but there are several other strategies that can help you save even more.
            </p>
            <p><strong>Book Early Whenever Possible:</strong> Coach fares are often lower when tickets are purchased well before the departure date. If you already know your travel plans, booking in advance can help secure better prices.</p>
            <p><strong>Be Flexible with Travel Times:</strong> Travelling during quieter periods or selecting less popular departure times can often result in lower fares.</p>
            <p><strong>Compare Different Travel Dates:</strong> If your schedule allows, check prices across multiple dates before booking. Even shifting your trip by a day or two may lead to noticeable savings.</p>
            <p><strong>Travel During Off-Peak Seasons:</strong> Avoiding school holidays, public holidays, and major events can help you access more affordable ticket prices.</p>
            <p><strong>Visit CouponsBit Before Every Booking:</strong> Travel promotions change regularly. Checking CouponsBit before you pay ensures you don't miss a newly released FlixBus voucher code.</p>
            <p><strong>Sign Up for Travel Updates:</strong> Subscribing to travel newsletters may give you early access to promotional campaigns and special offers.</p>
            <p><strong>Use the Mobile App:</strong> Some promotions are available through the FlixBus app, making it worthwhile to compare prices across both desktop and mobile platforms.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Times of the Year to Find FlixBus Deals</h3>
            <p>
              Travel discounts are often linked to seasonal campaigns and special events. If you're flexible with your booking dates, you may be able to take advantage of extra savings.
            </p>
            <p><strong>Black Friday:</strong> One of the biggest online shopping events of the year, Black Friday often features discounts across travel services, making it a great time to plan future trips.</p>
            <p><strong>Cyber Monday:</strong> Following Black Friday, Cyber Monday may include online-exclusive travel offers and limited-time promotions.</p>
            <p><strong>Boxing Day Sales:</strong> Australian travellers frequently look for post-Christmas deals, and travel promotions can be part of the seasonal shopping excitement.</p>
            <p><strong>End of Financial Year (EOFY):</strong> The EOFY period is another opportunity to watch for special offers on travel bookings and promotional campaigns.</p>
            <p><strong>Easter and School Holidays:</strong> Demand tends to increase during holiday periods, so booking early and applying a FlixBus coupon code can help reduce costs.</p>
            <p><strong>Summer Travel:</strong> Many Australians travel during the warmer months. Planning ahead can make a significant difference in the final ticket price.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Travellers Trust CouponsBit</h3>
            <p>
              CouponsBit is designed to help online shoppers and travellers save money without spending hours searching for valid promotions.
            </p>
            <p>Here's why thousands of users rely on our platform:</p>
            <p><strong>Frequently Updated Deals:</strong> We continuously monitor available promotions so you can discover the latest opportunities to save.</p>
            <p><strong>Easy Navigation:</strong> Our website is organised to help you quickly find the offers you're looking for.</p>
            <p><strong>Free Access:</strong> Browsing coupons and promotions on CouponsBit is completely free.</p>
            <p><strong>Verified Offers:</strong> We aim to feature active and relevant deals, helping reduce the frustration of expired promotions.</p>
            <p><strong>Wide Brand Selection:</strong> Along with travel brands like FlixBus, CouponsBit features offers across shopping, fashion, electronics, software, food delivery, lifestyle, and more.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Students Prefer FlixBus</h3>
            <p>
              Student life often involves balancing tuition fees, accommodation costs, and everyday expenses. Affordable transportation can make a real difference.
            </p>
            <p>FlixBus appeals to students because it offers:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Budget-friendly fares</li>
              <li>Convenient online booking</li>
              <li>Comfortable coaches</li>
              <li>USB charging ports</li>
              <li>Wi-Fi on many routes</li>
              <li>Multiple daily departures</li>
              <li>Digital tickets</li>
              <li>Reliable service</li>
            </ul>
            <p>
              Pairing student-friendly fares with a FlixBus discount code makes travelling home during semester breaks or visiting friends even more affordable.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Group Travel Made Simple</h3>
            <p>
              Whether you're organising a university trip, family holiday, sporting event, or company outing, travelling together should be straightforward.
            </p>
            <p>FlixBus offers practical transport options for groups travelling to destinations across Australia.</p>
            <p>Group travel is ideal for:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Family vacations</li>
              <li>School excursions</li>
              <li>University events</li>
              <li>Music festivals</li>
              <li>Business conferences</li>
              <li>Sporting competitions</li>
              <li>Wedding celebrations</li>
              <li>Social gatherings</li>
            </ul>
            <p>
              Checking CouponsBit for a FlixBus voucher code before booking may help lower the total cost of your group reservation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Manage Your Journey with the FlixBus App</h3>
            <p>The FlixBus mobile app provides everything you need to organise your journey in one place.</p>
            <p>App features include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Secure ticket booking</li>
              <li>Digital boarding passes</li>
              <li>Trip management</li>
              <li>Live journey updates</li>
              <li>Route search</li>
              <li>Booking history</li>
              <li>Easy payment options</li>
              <li>Customer support access</li>
            </ul>
            <p>
              Using the app makes travelling more convenient, especially for passengers who prefer managing bookings on their smartphone.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Book Your Tickets Now</h3>
            <p>
              Exploring Australia should be exciting - not expensive. Whether you're travelling for work, study, family visits, or your next adventure, FlixBus provides a practical and cost-effective way to get there. With modern coaches, convenient booking options, and an expanding network of destinations, it's an excellent choice for travellers who value comfort and affordability.
            </p>
            <p>
              Before confirming your next reservation, make CouponsBit part of your booking routine. Checking for the latest FlixBus discount code, FlixBus voucher code, or FlixBus coupon code only takes a moment, but it could help you save on your fare. It's a simple step that lets you enjoy more of Australia while keeping your travel budget under control.
            </p>
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
            { q: "Where can I find a FlixBus discount code?", a: "You can browse the latest FlixBus promotions on CouponsBit before making your booking." },
            { q: "How do I apply a FlixBus voucher code?", a: "Simply enter the promotional code in the coupon or promo code field during checkout before completing your payment." },
            { q: "Does every booking qualify for a discount?", a: "Eligibility depends on the terms of each promotion. Some offers may apply only to selected routes, travel dates, or minimum booking values." },
            { q: "Can I use a FlixBus coupon code on the mobile app?", a: "Many promotions work across both the website and mobile app, although some offers may have specific conditions." },
            { q: "Are there discounts for first-time users?", a: "Occasionally, promotional campaigns may target new customers. Check CouponsBit regularly for the latest offers." },
            { q: "Can I change my booking later?", a: "Booking modifications depend on the fare conditions selected at the time of purchase." },
            { q: "Does FlixBus offer digital tickets?", a: "Yes. After completing your booking, you'll receive a digital ticket that can be presented during boarding." },
            { q: "Is Wi-Fi available during the journey?", a: "Many FlixBus services include complimentary onboard Wi-Fi, though availability may vary depending on the coach and route." },
            { q: "How much luggage can I bring?", a: "Luggage allowances vary by route and booking conditions. It's always a good idea to review the baggage policy before travelling." },
            { q: "Can families travel with FlixBus?", a: "Yes. Families frequently choose FlixBus because it provides a convenient and affordable way to travel together." },
            { q: "Does CouponsBit charge for coupon codes?", a: "No. All available deals and coupon codes on CouponsBit can be accessed free of charge." },
            { q: "How often are new FlixBus offers added?", a: "CouponsBit regularly updates its listings to include the latest available travel promotions whenever they become available." },
            { q: "Why should I check CouponsBit before booking?", a: "Because even a small saving with a valid FlixBus discount code can help reduce your overall travel expenses, making every trip more affordable." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular FlixBus Australia Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Coach Booking", "Sydney to Melbourne", "Brisbane Bus", "FlixBus Australia Deals", "FlixBus Promo Code", "Student Bus Travel", "Long Distance Coach", "FlixBus App"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top FlixBus Australia Deals</h3>
          <div className="space-y-6">
            {COUPONS.slice(0, 5).map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">F</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://www.flixbus.com.au/" target="_blank" rel="noopener noreferrer" aria-label={`Get FlixBus Australia deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
