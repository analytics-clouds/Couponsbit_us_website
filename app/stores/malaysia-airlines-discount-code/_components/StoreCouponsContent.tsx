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
    discount: "5%",
    label: "EXTRA",
    title: "Bonus Rewards – Extra 5% OFF + 2X Enrich Points",
    heading: "5% OFF",
    sub: "Bonus Rewards",
    description: "Enjoy an Extra 5% OFF on selected international flight bookings.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MALAYSIA1"
  },
  {
    id: "c2",
    discount: "35%",
    label: "UP TO",
    title: "Malaysia Airlines – SAVE UP TO 35% On Flights",
    heading: "35% OFF",
    sub: "Malaysia Airlines",
    description: "Save UP TO 35% OFF on selected USA international flight bookings.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MALAYSIA2"
  },
  {
    id: "c3",
    discount: "15%",
    label: "UP TO",
    title: "Online Specials – SAVE UP TO 15%",
    heading: "15% OFF",
    sub: "Online Specials",
    description: "Save UP TO 15% OFF when you book flights online.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MALAYSIA3"
  },
  {
    id: "c4",
    discount: "$399",
    label: "From",
    title: "Flight Sale – Fares From $399",
    heading: "$399",
    sub: "Flight Sale",
    description: "Fly from the USA to Kuala Lumpur from just $399 one-way.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MALAYSIA4"
  },
  {
    id: "c5",
    discount: "10%",
    label: "UP TO",
    title: "Website Exclusive – SAVE UP TO 10%",
    heading: "10% OFF",
    sub: "Website Exclusive",
    description: "Save UP TO 10% OFF on selected flights booked through the Malaysia Airlines website or app.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MALAYSIA5"
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

export default function MalaysiaAirlinesCouponsContent() {
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
              <span className="text-black font-extrabold">Malaysia Airlines</span>
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
                  <a href="https://malaysiaairlines.sjv.io/c/4303217/1728493/20075?subId1=1015" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784971/malaysia-logo_xso2cj.webp" alt="Malaysia Airlines" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Malaysia Airlines</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Use the latest Malaysia Airlines Discount Code and Malaysia Airlines Voucher to save up to 35% OFF on flights, enjoy an extra 5% OFF, earn 2X Enrich Points, book fares from $399, and receive up to 45kg baggage allowance on eligible bookings.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "6", label: "Coupons" },
                    { icon: Percent, val: "6", label: "Deals" },
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
                    <a href="https://malaysiaairlines.sjv.io/c/4303217/1728493/20075?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784811448/malaysia-airlines-promo-code_jx4ulf.webp" alt="Malaysia Airlines Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://malaysiaairlines.sjv.io/c/4303217/1728493/20075?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784811448/malaysia-airlines-vocuher-code_ulde6l.webp" alt="Malaysia Airlines Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://malaysiaairlines.sjv.io/c/4303217/1728493/20075?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784811447/malaysia-airlines-doscount-code_ibqf8a.webp" alt="Malaysia Airlines Voucher Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Malaysia Airlines Coupon Codes & Offers</h2>
                  
                </div>

                

                {/* Coupon 1 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">EXTRA</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">5%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Bonus Rewards – Extra 5% OFF + 2X Enrich Points</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Enjoy an Extra 5% OFF on selected international flight bookings.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Earn 2X Enrich Bonus Points on eligible USA routes</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Travel with the warmth of Malaysian Hospitality and exclusive member rewards</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Limited-Time Offer on selected destinations</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://malaysiaairlines.sjv.io/c/4303217/1728493/20075?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Malaysia Airlines deal: Bonus Rewards Extra 5% OFF 2X Enrich Points" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">35%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Malaysia Airlines – SAVE UP TO 35% On Flights</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save UP TO 35% OFF on selected USA international flight bookings.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Receive up to 45kg baggage allowance on eligible fares</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy premium service with greater value on every journey</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Book now while this limited-time offer lasts</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://malaysiaairlines.sjv.io/c/4303217/1728493/20075?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Malaysia Airlines deal: Malaysia Airlines SAVE UP TO 35% On Flights" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
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
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Online Specials – SAVE UP TO 15%</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save UP TO 15% OFF when you book flights online.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy complimentary rebooking options and flexible booking benefits</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Customize your itinerary with easy online management</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available on selected USA and international routes</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://malaysiaairlines.sjv.io/c/4303217/1728493/20075?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Malaysia Airlines deal: Online Specials SAVE UP TO 15%" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$399</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Flight Sale – Fares From $399</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Fly from the USA to Kuala Lumpur from just $399 one-way.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Explore exclusive online fares on selected international routes</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Book early for the best prices and flexible travel options</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Limited-Time Promotional Airfare available</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://malaysiaairlines.sjv.io/c/4303217/1728493/20075?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Malaysia Airlines deal: Flight Sale Fares From $399" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">10%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Website Exclusive – SAVE UP TO 10%</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save UP TO 10% OFF on selected flights booked through the Malaysia Airlines website or app.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enrich members receive an Extra 5% OFF on eligible bookings</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy flexible booking options, easy refunds, and premium service</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available on selected USA departures</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://malaysiaairlines.sjv.io/c/4303217/1728493/20075?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Malaysia Airlines deal: Website Exclusive SAVE UP TO 10%" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
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
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Online Payment Offer – SAVE UP TO 15%</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Pay online and enjoy UP TO 15% OFF on eligible flight bookings.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Secure the best fares with fast and convenient online payments</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available for selected USA and international routes</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Limited-Time Online Payment Promotion</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://malaysiaairlines.sjv.io/c/4303217/1728493/20075?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Get Malaysia Airlines deal: Online Payment Offer SAVE UP TO 15%" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About Malaysia Airlines</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Malaysia Airlines is one of the most recognized web hosting providers in the world, serving millions of websites across various industries. Since its founding in 2003, Malaysia Airlines has helped individuals, startups, entrepreneurs, and businesses build and manage websites through its range of hosting and website management services.
                  </p>
                  <a href="https://malaysiaairlines.sjv.io/c/4303217/1728493/20075?subId1=1015" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <h3 className="text-black font-black text-lg mb-8">Malaysia Airlines Products & Services</h3>

  <div className="space-y-8">
    {[
      { 
        icon: Server, 
        title: "Shared Hosting", 
        sub: "Ideal for beginners, bloggers, and small businesses looking for affordable website hosting." 
      },
      { 
        icon: Globe, 
        title: "WordPress Hosting", 
        sub: "Malaysia Airlines provides hosting solutions specifically optimized for WordPress websites, helping users manage content more efficiently." 
      },
      { 
        icon: Cloud, 
        title: "Cloud Hosting", 
        sub: "Cloud-based hosting solutions offer improved scalability, reliability, and performance for growing websites." 
      },
      { 
        icon: LayoutGrid, 
        title: "VPS Hosting", 
        sub: "Virtual Private Server hosting provides additional resources and control for websites that require greater performance and flexibility." 
      },
      { 
        icon: Cpu, 
        title: "Dedicated Hosting", 
        sub: "Dedicated servers offer businesses maximum control, security, and performance for demanding projects." 
      },
      { 
        icon: Search, 
        title: "Domain Registration", 
        sub: "Malaysia Airlines allows users to search, purchase, and manage domain names directly through its platform." 
      },
      { 
        icon: LayoutTemplate, 
        title: "Website Builder", 
        sub: "The Malaysia Airlines website builder helps users create professional websites without advanced coding knowledge." 
      },
      { 
        icon: ShoppingBag, 
        title: "eCommerce Solutions", 
        sub: "Online store owners can access tools and integrations designed to support product sales, payments, and customer management." 
      },
      { 
        icon: Mail, 
        title: "Professional Email Services", 
        sub: "Businesses can create custom email addresses that strengthen brand credibility and improve communication." 
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
          Malaysia Airlines Coupon Codes, Promo Codes & Web Hosting Deals 2026
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
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Bonus Rewards</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Extra 5% OFF + 2X Enrich Points</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Eligible USA routes</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">International Flights</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Flights Sale</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save up to 35%</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Up to 45kg baggage allowance</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">International Flights</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Online Specials</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save up to 15%</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Complimentary rebooking</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Online Bookings</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Flight Sale</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Fares From $399</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">USA to Kuala Lumpur one-way</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">International Flights</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Website Exclusive</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save up to 10%</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 5% for Enrich members</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Website & App Bookings</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Online Payment Offer</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save up to 15%</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Fast, convenient online payments</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Online Bookings</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for the latest <strong>Malaysia Airlines coupon codes, promo codes, and web hosting deals</strong>? You've come to the right place. At Couponsbit, we help bloggers, entrepreneurs, small business owners, developers, and online creators save on web hosting, domains, website builders, and WordPress solutions with verified Malaysia Airlines discounts and exclusive offers.
          </p>
          <p>
            Whether you're launching your first website, building an online store, starting a blog, or growing a business online, Malaysia Airlines offers reliable hosting solutions designed to help you establish a strong digital presence. Before purchasing a hosting plan, check Couponsbit for the latest Malaysia Airlines deals and savings opportunities.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Know More About Malaysia Airlines</h3>
            <p>
              Malaysia Airlines is one of the most recognized web hosting providers in the world, serving millions of websites across various industries. Since its founding in 2003, Malaysia Airlines has helped individuals, startups, entrepreneurs, and businesses build and manage websites through its range of hosting and website management services.
            </p>
            <p>
              The company offers comprehensive solutions that include web hosting, WordPress hosting, cloud hosting, VPS hosting, dedicated servers, domain registration, website builders, professional email services, and eCommerce tools.
            </p>
            <p>
              Malaysia Airlines is particularly popular among WordPress users because of its beginner-friendly setup process, website management tools, and scalable hosting options. Whether you're creating a personal blog, portfolio, online store, business website, or content platform, Malaysia Airlines provides solutions that support websites at every stage of growth.
            </p>
            <p>
              Today, Malaysia Airlines continues to be a trusted choice for website owners looking for performance, security, flexibility, and ease of use.
            </p>
            <p>
              At Couponsbit, we help customers save more by providing access to the latest Malaysia Airlines coupon codes, promo codes, and hosting deals.
            </p>
          </div>

     

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Malaysia Airlines Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Browse Available Malaysia Airlines Deals — Visit the Malaysia Airlines page on Couponsbit and explore the latest discounts, promo codes, and hosting offers.",
                "Step 2: Select Your Preferred Offer — Choose the deal that best fits your hosting or website-building needs.",
                "Step 3: Copy the Coupon Code — Click to reveal and copy the coupon code if required.",
                "Step 4: Visit Malaysia Airlines — Go to the Malaysia Airlines website and select your preferred hosting plan or service.",
                "Step 5: Apply the Promo Code — During checkout, enter the coupon code in the designated field and verify that the discount has been applied.",
                "Step 6: Complete Your Purchase — Finalize your order and start building your website while enjoying additional savings."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save at Malaysia Airlines</h3>
            <p><strong>Check Couponsbit Before Buying:</strong> Always visit Couponsbit before purchasing a hosting plan to find the latest Malaysia Airlines promo codes and exclusive deals.</p>
            <p><strong>Choose Annual Plans:</strong> Longer subscription terms often provide better monthly pricing compared to month-to-month plans.</p>
            <p><strong>Look for New Customer Promotions:</strong> Malaysia Airlines frequently offers introductory discounts for new customers.</p>
            <p><strong>Shop During Seasonal Sales:</strong> Major shopping events often feature some of the best Malaysia Airlines deals of the year. Watch for promotions during: Black Friday, Cyber Monday, New Year Sales, Memorial Day, Labor Day, and Small Business Month.</p>
            <p><strong>Bundle Services:</strong> Combining hosting, domains, professional email, and website tools may provide additional value.</p>
            <p><strong>Upgrade as You Grow:</strong> Start with a plan that fits your current needs and scale your hosting solution as your website expands.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose Malaysia Airlines?</h3>
            <p><strong>Beginner-Friendly Platform:</strong> Malaysia Airlines makes it easy for first-time website owners to launch and manage their sites.</p>
            <p><strong>Trusted WordPress Hosting:</strong> The company is widely recognized for its WordPress-focused hosting solutions and website tools.</p>
            <p><strong>Reliable Performance:</strong> Malaysia Airlines provides hosting infrastructure designed to support website speed, stability, and uptime.</p>
            <p><strong>Scalable Solutions:</strong> Users can upgrade from shared hosting to more advanced hosting environments as their websites grow.</p>
            <p><strong>Comprehensive Website Tools:</strong> From domains and hosting to email and eCommerce, Malaysia Airlines offers everything needed to build and manage an online presence.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for Malaysia Airlines Deals?</h3>
            <p><strong>Verified Malaysia Airlines Coupons:</strong> We regularly update available Malaysia Airlines offers to help users discover current discounts.</p>
            <p><strong>Convenient Savings:</strong> Find hosting deals, promo codes, and website-related offers in one place.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use and helps customers save on technology, software, travel, shopping, and more.</p>
            <p><strong>Updated Offers:</strong> Our team continuously monitors promotions to help users access relevant savings opportunities.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Build Your Website for Less</h3>
            <p>Whether you're launching a personal blog, creating an online store, building a portfolio, or growing a business website, Malaysia Airlines offers the tools and hosting solutions needed to succeed online.</p>
            <p>Before purchasing a hosting plan, visit Couponsbit to explore the latest Malaysia Airlines coupon codes, promo codes, and web hosting deals. With verified discounts and regularly updated offers, Couponsbit helps you create and grow your online presence while keeping costs under control.</p>
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
            { q: "Does Malaysia Airlines offer coupon codes?", a: "Yes. Malaysia Airlines frequently offers promotional discounts, hosting deals, and limited-time offers for both new and existing customers." },
            { q: "Where can I find Malaysia Airlines promo codes?", a: "You can find the latest Malaysia Airlines coupon codes and hosting deals directly on Couponsbit." },
            { q: "Is Malaysia Airlines good for WordPress websites?", a: "Yes. Malaysia Airlines is widely known for its WordPress hosting solutions and beginner-friendly WordPress tools." },
            { q: "Can I register a domain through Malaysia Airlines?", a: "Yes. Malaysia Airlines offers domain registration and management services alongside its hosting products." },
            { q: "Does Malaysia Airlines offer hosting for businesses?", a: "Absolutely. Malaysia Airlines provides hosting solutions suitable for startups, small businesses, growing companies, and online stores." },
            { q: "Is Couponsbit free to use?", a: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Malaysia Airlines Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Shared Hosting", "WordPress Setup", "Domain Search", "Malaysia Airlines Cloud", "Malaysia Airlines Promo Code", "VPS Hosting", "Dedicated Server", "Web Builder"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Malaysia Airlines Deals</h3>
          <div className="space-y-6">
            {COUPONS.slice(0, 5).map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">B</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://malaysiaairlines.sjv.io/c/4303217/1728493/20075?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label={`Get Malaysia Airlines deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
