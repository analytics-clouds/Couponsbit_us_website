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
  X,Monitor, Gamepad2, Printer,Keyboard, Droplet, Briefcase,
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
    id: "hp1",
    discount: "71%",
    label: "UP TO",
    badge: "Best Offer",
    title: "HP 4th of July Sale – Save Up to 71% OFF",
    heading: "Save Up to 71% OFF",
    sub: "4th of July Sale",
    description: "Celebrate with the HP 4th of July Sale and save Up to 71% OFF on select laptops, desktops, printers and accessories.",
    usedCount: "",
    expiresIn: "",
    code: ""
  },
  {
    id: "hp2",
    discount: "60%",
    label: "UP TO",
    badge: "Popular",
    title: "HP OmniBook 3 Laptop Deal – Up to 60% OFF | Starting at $419.99",
    heading: "Up to 60% OFF",
    sub: "OmniBook 3 Laptop Deal",
    description: "Save Up to 60% OFF on the HP OmniBook 3 Laptop.",
    usedCount: "",
    expiresIn: "",
    code: ""
  },
  {
    id: "hp3",
    discount: "58%",
    label: "UP TO",
    badge: "Trending",
    title: "HP OmniBook 5 Flip 2-in-1 – Up to 58% OFF | Starting at $499.99",
    heading: "Up to 58% OFF",
    sub: "OmniBook 5 Flip 2-in-1",
    description: "Save Up to 58% OFF on the HP OmniBook 5 Flip.",
    usedCount: "",
    expiresIn: "",
    code: ""
  },
  {
    id: "hp4",
    discount: "50%",
    label: "UP TO",
    title: "HP OMEN 35L Gaming Desktop – Up to 50% OFF | Starting at $1,189.99",
    heading: "Up to 50% OFF",
    sub: "OMEN 35L Gaming Desktop",
    description: "Save Up to 50% OFF on the HP OMEN 35L Gaming Desktop.",
    usedCount: "",
    expiresIn: "",
    code: ""
  },
  {
    id: "hp5",
    discount: "24",
    label: "PAY OVER",
    title: "HP Financing Offer – Pay Over 24 Months",
    heading: "Pay Over 24 Months",
    sub: "Financing Offer",
    description: "Shop now and pay later with HP financing.",
    usedCount: "",
    expiresIn: "",
    code: ""
  },
  {
    id: "hp6",
    discount: "$7.99",
    label: "FROM",
    title: "HP All-In Plan – Printers from $7.99/Month",
    heading: "Printers from $7.99/Month",
    sub: "All-In Plan",
    description: "Get an HP printer with ink delivery included.",
    usedCount: "",
    expiresIn: "",
    code: ""
  },
  {
    id: "hp7",
    discount: "19%",
    label: "UP TO",
    title: "HP OmniBook X AI Laptop – Up to 19% OFF | Starting at $1,699.99",
    heading: "Up to 19% OFF",
    sub: "OmniBook X AI Laptop",
    description: "Save Up to 19% OFF on the HP OmniBook X AI Laptop.",
    usedCount: "",
    expiresIn: "",
    code: ""
  },
  {
    id: "hp8",
    discount: "$129.99",
    label: "STARTING AT",
    title: "Adobe Software Bundle – Starting at $129.99",
    heading: "Starting at $129.99",
    sub: "Adobe Software Bundle",
    description: "Get select Adobe software for only $129.99 with a qualifying HP PC purchase.",
    usedCount: "",
    expiresIn: "",
    code: ""
  },
  {
    id: "hp9",
    discount: "35%",
    label: "UP TO",
    title: "HP OmniBook 7 Laptop – Up to 35% OFF | Save $560",
    heading: "Up to 35% OFF",
    sub: "OmniBook 7 Laptop",
    description: "Save Up to 35% OFF on the customizable HP OmniBook 7.",
    usedCount: "",
    expiresIn: "",
    code: ""
  },
  {
    id: "hp10",
    discount: "$30",
    label: "SAVE",
    title: "HP LaserJet Printer Bundle – Save $30",
    heading: "Save $30",
    sub: "LaserJet Printer Bundle",
    description: "Save $30 on select HP LaserJet Pro printers.",
    usedCount: "",
    expiresIn: "",
    code: ""
  },
  {
    id: "hp11",
    discount: "36%",
    label: "UP TO",
    title: "HP OmniBook 7 AI Laptop – Up to 36% OFF | Starting at $1,599.99",
    heading: "Up to 36% OFF",
    sub: "OmniBook 7 AI Laptop",
    description: "Save Up to 36% OFF on the HP OmniBook 7 AI Laptop.",
    usedCount: "",
    expiresIn: "",
    code: ""
  },
  {
    id: "hp12",
    discount: "25%",
    label: "UP TO",
    title: "HyperX Cloud Alpha Wireless Headset – Up to 25% OFF | Starting at $149.99",
    heading: "Up to 25% OFF",
    sub: "HyperX Cloud Alpha Wireless Headset",
    description: "Save Up to 25% OFF on the HyperX Cloud Alpha Wireless Gaming Headset.",
    usedCount: "",
    expiresIn: "",
    code: ""
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

export default function HPCouponsContent() {
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
              <span className="text-black font-extrabold">HP</span>
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
                  <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782890859/hp-coupon-code_vaogna.webp" alt="HP" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">HP</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      HP — Trusted destination for laptops, desktops, printers, gaming PCs & accessories. Save up to 71% on select products, plus free shipping and exclusive offers. Shop now!
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "12", label: "Coupons" },
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
                    <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1400,c_limit/v1782902078/hp-discout-code_jywwjk.webp" alt="HP Discount Code" width={800} height={350} className="w-full h-full object-cover" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1400,c_limit/v1782902079/hp-promo-code_ztjhn8.webp" alt="HP Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1400,c_limit/v1782902077/hp-voucher-code_pm6m2f.webp" alt="HP Voucher Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">HP Coupon Codes & Offers</h2>
                  
                </div>

                

                {/* Coupon 1 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">71%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">HP 4th of July Sale – Save Up to 71% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Celebrate with the HP 4th of July Sale and save Up to 71% OFF on select laptops, desktops, printers and accessories.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy FREE Shipping on eligible products.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save 30% OFF on select HP Home Care Packs.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Flexible financing available for all credit scores.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" aria-label="Get HP deal: HP 4th of July Sale – Save Up to 71% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">60%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">HP OmniBook 3 Laptop Deal – Up to 60% OFF | Starting at $419.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save Up to 60% OFF on the HP OmniBook 3 Laptop.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Now only $419.99 (MSRP $1,049.99).</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Instant savings of $630.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features a spacious 17.3-inch display for work and entertainment.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" aria-label="Get HP deal: HP OmniBook 3 Laptop Deal – Up to 60% OFF | Starting at $419.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">58%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">HP OmniBook 5 Flip 2-in-1 – Up to 58% OFF | Starting at $499.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save Up to 58% OFF on the HP OmniBook 5 Flip.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Starting at $499.99 (MSRP $1,199.99).</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Instant savings of $700.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Touchscreen 2-in-1 design with Intel® Core™ processor.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" aria-label="Get HP deal: HP OmniBook 5 Flip 2-in-1 – Up to 58% OFF | Starting at $499.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">50%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">HP OMEN 35L Gaming Desktop – Up to 50% OFF | Starting at $1,189.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save Up to 50% OFF on the HP OMEN 35L Gaming Desktop.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Now from $1,189.99 (MSRP $2,399.99).</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save $1,210 instantly.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Powered by Intel® Core™ i7 and NVIDIA® GeForce RTX™ 4060 Ti.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" aria-label="Get HP deal: HP OMEN 35L Gaming Desktop – Up to 50% OFF | Starting at $1,189.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">PAY OVER</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">24</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">MONTHS</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">HP Financing Offer – Pay Over 24 Months</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Shop now and pay later with HP financing.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Get 24 Months Special Financing on purchases of $2,500 or more.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available through the HP Credit Account.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Flexible payment options for eligible customers.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" aria-label="Get HP deal: HP Financing Offer – Pay Over 24 Months" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FROM</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$7.99</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">/MO</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">HP All-In Plan – Printers from $7.99/Month</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get an HP printer with ink delivery included.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Plans starting at just $7.99/month.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes 24/7 HP Support.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for home and office printing.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" aria-label="Get HP deal: HP All-In Plan – Printers from $7.99/Month" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">19%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">HP OmniBook X AI Laptop – Up to 19% OFF | Starting at $1,699.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save Up to 19% OFF on the HP OmniBook X AI Laptop.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Starting at $1,699.99 (MSRP $2,099.99).</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save $400 instantly.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Intel® Core™ Ultra 7, 32GB RAM and Copilot+ AI features.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" aria-label="Get HP deal: HP OmniBook X AI Laptop – Up to 19% OFF | Starting at $1,699.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">STARTING AT</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$129.99</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Adobe Software Bundle – Starting at $129.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get select Adobe software for only $129.99 with a qualifying HP PC purchase.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes Adobe Photoshop Elements, Premiere Elements and Acrobat Pro.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>No coupon required.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available for a limited time.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" aria-label="Get HP deal: Adobe Software Bundle – Starting at $129.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">35%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">HP OmniBook 7 Laptop – Up to 35% OFF | Save $560</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save Up to 35% OFF on the customizable HP OmniBook 7.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save $560 instantly.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Large 17.3-inch touchscreen display.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Powered by Copilot+ AI technology.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" aria-label="Get HP deal: HP OmniBook 7 Laptop – Up to 35% OFF | Save $560" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$30</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">HP LaserJet Printer Bundle – Save $30</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save $30 on select HP LaserJet Pro printers.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Add an HP 138X Toner to qualify.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>No coupon required.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great value for home and business users.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" aria-label="Get HP deal: HP LaserJet Printer Bundle – Save $30" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">36%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">HP OmniBook 7 AI Laptop – Up to 36% OFF | Starting at $1,599.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save Up to 36% OFF on the HP OmniBook 7 AI Laptop.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Now from $1,599.99 (MSRP $2,499.99).</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save $900 instantly.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Intel® Core™ 9 processor with 32GB RAM and 2TB SSD.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" aria-label="Get HP deal: HP OmniBook 7 AI Laptop – Up to 36% OFF | Starting at $1,599.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">25%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">HyperX Cloud Alpha Wireless Headset – Up to 25% OFF | Starting at $149.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save Up to 25% OFF on the HyperX Cloud Alpha Wireless Gaming Headset.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Now only $149.99 (MSRP $199.99).</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save $50 instantly.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Premium wireless gaming audio with long battery life.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" aria-label="Get HP deal: HyperX Cloud Alpha Wireless Headset – Up to 25% OFF | Starting at $149.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About HP</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    HP (Hewlett-Packard) is one of the world's leading technology companies, offering a broad portfolio of personal computers, printers, monitors, accessories, software, and business solutions. With decades of innovation, HP serves millions of customers across homes, schools, businesses, and enterprises worldwide.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Known for reliability, performance, and cutting-edge technology, HP continues to develop products that support productivity, creativity, education, gaming, and hybrid work. Whether you're purchasing your first laptop or upgrading an entire office, HP provides solutions designed to meet a wide range of personal and professional needs.
                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Today, HP products are available in numerous countries through its official website, authorized retailers, and global distribution partners.
                  </p>
                  <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
    <h2 className="text-black font-black text-xl mb-2">What Can You Buy from HP?</h2>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      HP offers technology solutions across multiple product categories.
    </p>
  </div>

  <div className="space-y-8">
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Laptop className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Laptops</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Choose from lightweight everyday laptops, premium ultrabooks, business notebooks, creator laptops, and high-performance gaming systems.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Monitor className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Desktop Computers</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Explore desktop PCs, all-in-one computers, mini PCs, and powerful workstations for home and office use.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Gamepad2 className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Gaming PCs</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Discover OMEN and Victus gaming laptops and desktops built for immersive gameplay and demanding performance.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Printer className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Printers</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Shop inkjet, laser, all-in-one, wireless, and Smart Tank printers designed for home offices, students, and businesses.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Tv className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Monitors</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Upgrade your workspace with productivity monitors, gaming displays, and professional-grade screens.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Keyboard className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Accessories</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Find keyboards, mice, webcams, docking stations, backpacks, chargers, headsets, and other computer accessories.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Droplet className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Ink & Toner</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Keep your printer running efficiently with genuine HP ink cartridges and toner supplies.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Briefcase className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Business Solutions</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          HP also provides enterprise hardware, managed print services, commercial devices, and workplace technology for organizations of all sizes.
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
          HP Coupon Codes, Promo Codes & Laptop Deals
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
                <td className="p-5 text-black font-black align-middle max-w-[220px]">HP 4th of July Sale</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Up to 71% OFF</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Free shipping, 30% OFF Care Packs, flexible financing</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Laptops, Desktops, Printers & Accessories</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">HP OmniBook 3 Laptop Deal</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Up to 60% OFF ($419.99, MSRP $1,049.99)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Instant savings of $630, 17.3-inch display</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Laptops</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">HP OmniBook 5 Flip 2-in-1</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Up to 58% OFF ($499.99, MSRP $1,199.99)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Instant savings of $700, touchscreen 2-in-1</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Laptops</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">HP OMEN 35L Gaming Desktop</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Up to 50% OFF ($1,189.99, MSRP $2,399.99)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Save $1,210, Intel Core i7 & RTX 4060 Ti</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Gaming Desktops</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">HP Financing Offer</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Pay Over 24 Months</td>
                <td className="p-5 text-gray-500 align-middle">Purchases of $2,500+</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Available via HP Credit Account</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">HP Credit Account Financing</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">HP All-In Plan</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $7.99/Month</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Includes ink delivery, 24/7 HP Support</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Printers</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">HP OmniBook X AI Laptop</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Up to 19% OFF ($1,699.99, MSRP $2,099.99)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Save $400, Intel Core Ultra 7, 32GB RAM, Copilot+ AI</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Laptops</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Adobe Software Bundle</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $129.99</td>
                <td className="p-5 text-gray-500 align-middle">Qualifying HP PC purchase</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Includes Photoshop Elements, Premiere Elements, Acrobat Pro</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Software Bundle</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">HP OmniBook 7 Laptop</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Up to 35% OFF (Save $560)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">17.3-inch touchscreen, Copilot+ AI</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Laptops</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">HP LaserJet Printer Bundle</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save $30</td>
                <td className="p-5 text-gray-500 align-middle">Add HP 138X Toner to qualify</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">No coupon required</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Printers</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">HP OmniBook 7 AI Laptop</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Up to 36% OFF ($1,599.99, MSRP $2,499.99)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Save $900, Intel Core 9, 32GB RAM, 2TB SSD</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Laptops</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">HyperX Cloud Alpha Wireless Headset</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Up to 25% OFF ($149.99, MSRP $199.99)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Save $50, long battery life</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Gaming Accessories</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More on HP Products with HP Coupon Codes</h3>
          <p>
            Whether you're upgrading your work laptop, building a home office, replacing your printer, or investing in powerful gaming hardware, HP offers innovative technology for every need. Before making your next purchase, check Couponsbit for the latest <strong>HP coupon codes, HP promo codes, and exclusive deals</strong> to help you save on laptops, desktops, printers, accessories, and more.
          </p>
          <p>
            From students and professionals to gamers and businesses, HP has become one of the world's most trusted technology brands. With Couponsbit, finding the latest discounts is simple, helping you get the best value on your next HP purchase.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose HP?</h3>
            <p><strong>Trusted Global Brand:</strong> HP has built a reputation for producing reliable technology solutions used by individuals, businesses, educational institutions, and organizations around the world.</p>
            <p><strong>Innovative Technology:</strong> The company continually develops products featuring the latest processors, AI-powered features, enhanced security, and modern designs.</p>
            <p><strong>Products for Every Budget:</strong> Whether you're shopping for an affordable everyday laptop or a premium workstation, HP offers options across various price ranges.</p>
            <p><strong>Wide Product Ecosystem:</strong> From computers and printers to accessories and software, HP provides an integrated technology ecosystem that works together seamlessly.</p>
            <p><strong>Reliable Customer Support:</strong> HP offers product support, warranty services, and online resources to help customers throughout the ownership experience.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use an HP Coupon Code</h3>
            <p className="text-gray-500 text-sm font-bold -mt-4">Saving on your HP purchase is quick and easy.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit Couponsbit — Browse the latest HP coupon codes and promotional offers.",
                "Step 2: Choose a Deal — Select the offer that best matches your purchase.",
                "Step 3: Copy the Coupon Code — Copy the available code before visiting HP.",
                "Step 4: Shop Your Favorite Products — Browse laptops, printers, accessories, or other HP products and add them to your cart.",
                "Step 5: Apply the Coupon — Paste the promo code during checkout if applicable.",
                "Step 6: Complete Your Purchase — Finalize your order and enjoy savings on your new HP products."
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
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Smart Ways to Save More at HP</h3>
            <p><strong>Check Couponsbit Before Every Purchase:</strong> Browse the latest HP coupon codes before completing your order.</p>
            <p><strong>Shop During Seasonal Sales:</strong> HP frequently offers promotions during major shopping events and seasonal sales.</p>
            <p><strong>Explore Student & Business Programs:</strong> Eligible students, educators, and businesses may qualify for additional savings through HP's dedicated programs.</p>
            <p><strong>Bundle Your Purchase:</strong> Buying accessories, printers, or monitors alongside your computer may unlock bundle savings or promotional pricing.</p>
            <p><strong>Sign Up for HP Updates:</strong> Joining HP's email newsletter can help you stay informed about upcoming launches, exclusive promotions, and limited-time offers.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Millions Choose HP</h3>
            <p>HP products are designed for a wide range of users, including: Students, Professionals, Remote workers, Gamers, Content creators, Small businesses, Large enterprises, Educators, Developers, Home users.</p>
            <p>Whether you need a dependable laptop for everyday tasks, a powerful gaming PC, or a professional workstation, HP offers technology solutions built for different lifestyles and workloads.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for HP Deals?</h3>
            <p>Couponsbit helps shoppers discover verified savings across technology, software, travel, fashion, home improvement, electronics, and lifestyle brands.</p>
            <p><strong>Updated Offers:</strong> We regularly update HP coupon codes and promotional deals.</p>
            <p><strong>Verified Discounts:</strong> Find coupon codes, promo offers, and exclusive savings in one convenient place.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use whenever you're looking to save.</p>
            <p><strong>Global Brand Coverage:</strong> In addition to HP, Couponsbit features deals from hundreds of leading brands across technology and online shopping.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Upgrade Your Technology While Spending Less</h3>
            <p>Whether you're purchasing a new laptop, upgrading your workspace, replacing your printer, or investing in gaming hardware, HP offers reliable technology designed to support work, learning, creativity, and entertainment.</p>
            <p>Browse the latest HP coupon codes, promo codes, and exclusive technology deals on Couponsbit today and save more on your next HP purchase.</p>
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
            { q: "What does HP sell?", a: "HP offers laptops, desktop computers, gaming PCs, printers, monitors, accessories, ink cartridges, business devices, and technology solutions for both consumers and organizations." },
            { q: "Does HP offer gaming laptops?", a: "Yes. HP's OMEN and Victus product lines are designed for gamers seeking high-performance laptops and desktop computers." },
            { q: "Where can I find HP coupon codes?", a: "You can find the latest HP coupon codes, promo codes, and exclusive technology deals on Couponsbit." },
            { q: "Does HP sell products for businesses?", a: "Yes. HP provides commercial laptops, workstations, printers, enterprise solutions, and managed services for businesses of all sizes." },
            { q: "Can I buy HP accessories directly?", a: "Yes. HP offers a wide range of official accessories, including keyboards, mice, webcams, docking stations, monitors, backpacks, chargers, and more." },
            { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps shoppers discover verified coupon codes, promo offers, and discounts from trusted brands worldwide." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular HP Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["HP Laptops", "OMEN Gaming", "HP Printers", "Ink Cartridges", "HP Promo Code", "Pavilion Series", "Envy Desktop", "Office Accessories"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top HP Deals</h3>
          <div className="space-y-6">
            {COUPONS.slice(0, 5).map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">H</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://www.anrdoezrs.net/click-100938140-17148234?sid=1015" target="_blank" rel="noopener noreferrer" aria-label={`Get HP deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
