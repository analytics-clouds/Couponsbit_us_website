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
    discount: "75%",
    label: "SAVE",
    title: "Hosting Discount Code USA – Starter Web Hosting | 75% OFF at $2.99/month",
    heading: "75% OFF",
    sub: "Hosting Discount Code USA",
    description: "Get the Starter hosting plan for just $2.99/month, down from $11.99",
    usedCount: "0",
    expiresIn: "TBD",
    code: "HOSTING1"
  },
  {
    id: "c2",
    discount: "70%",
    label: "SAVE",
    title: "Hosting Discount Code USA – Pro Web Hosting | 70% OFF at $6.99/month",
    heading: "70% OFF",
    sub: "Hosting Discount Code USA",
    description: "Get the Pro plan for $6.99/month, down from $22.99",
    usedCount: "0",
    expiresIn: "TBD",
    code: "HOSTING2"
  },
  {
    id: "c3",
    discount: "69%",
    label: "SAVE",
    title: "Hosting USA – Max Node.js Hosting | 69% OFF at $5.61/month",
    heading: "69% OFF",
    sub: "Hosting USA",
    description: "Get Max Node.js hosting for $5.61/month, down from $17.99",
    usedCount: "0",
    expiresIn: "TBD",
    code: "HOSTING3"
  },
  {
    id: "c4",
    discount: "68%",
    label: "SAVE",
    title: "Hosting USA – Max Web Hosting | 68% OFF at $8.99/month",
    heading: "68% OFF",
    sub: "Hosting USA",
    description: "Get the Max plan for $8.99/month, down from $27.99",
    usedCount: "0",
    expiresIn: "TBD",
    code: "HOSTING4"
  },
  {
    id: "c5",
    discount: "52%",
    label: "SAVE",
    title: "Hosting USA – Managed WordPress Medium Plan | 52% OFF at $9.96/month",
    heading: "52% OFF",
    sub: "Hosting USA",
    description: "Get managed WordPress hosting for $9.96/month, down from $20.75",
    usedCount: "0",
    expiresIn: "TBD",
    code: "HOSTING5"
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

export default function HostingCouponsContent() {
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
              <span className="text-black font-extrabold">Hosting</span>
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
                  <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/Hosting_logo_c17yhb.webp" alt="Hosting" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Hosting</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save on Hosting with up to 75% off Starter hosting at $2.99/month, 70% off Pro at $6.99/month, 69% off Node.js at $5.61/month, plus Max, WordPress, business email, AI application and managed hosting plans.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "11", label: "Coupons" },
                    { icon: Percent, val: "11", label: "Deals" },
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
                    <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518249/us_website_ylqzs9.webp" alt="Hosting Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518248/106_drhlds.webp" alt="Hosting Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786518247/108_p6ygkv.webp" alt="Hosting Voucher Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Hosting Coupon Codes & Offers</h2>
                  
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
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">75%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Hosting Discount Code USA – Starter Web Hosting | 75% OFF at $2.99/month</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the Starter hosting plan for just $2.99/month, down from $11.99</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Pay $35.88 for the first year on a 1-year term</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes 1 website, 15GB NVMe storage, email, security, and free domain registration</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Build a new website or migrate an existing site with Hosting</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Hosting Discount Code, Starter Hosting, Web Hosting USA, Hosting Deals</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" aria-label="Get Hosting deal: Hosting Discount Code USA – Starter Web Hosting | 75% OFF at $2.99/month" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">70%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Hosting Discount Code USA – Pro Web Hosting | 70% OFF at $6.99/month</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the Pro plan for $6.99/month, down from $22.99</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Host up to 10 websites with 50GB NVMe storage</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes website migration, email, security, and free domain registration</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Pay $83.87 for the first year on a 1-year term</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Hosting Discount Code, Pro Hosting, Multi Website Hosting, USA Hosting</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" aria-label="Get Hosting deal: Hosting Discount Code USA – Pro Web Hosting | 70% OFF at $6.99/month" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">69%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Hosting USA – Max Node.js Hosting | 69% OFF at $5.61/month</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get Max Node.js hosting for $5.61/month, down from $17.99</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Supports up to 50 web apps with 100GB disk space</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes 50 email accounts, MariaDB, and 200 staging sites</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Powered by Turbo with a 30-day money-back guarantee</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Hosting Discount Code, Node.js Hosting USA, Web App Hosting, Node Hosting</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" aria-label="Get Hosting deal: Hosting USA – Max Node.js Hosting | 69% OFF at $5.61/month" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">68%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Hosting USA – Max Web Hosting | 68% OFF at $8.99/month</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the Max plan for $8.99/month, down from $27.99</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Host up to 100 websites with 100GB NVMe storage</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes email, security, website migration, and free domain registration</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Hosting Discount Code, Max Hosting, Website Hosting Deals, Hosting USA</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" aria-label="Get Hosting deal: Hosting USA – Max Web Hosting | 68% OFF at $8.99/month" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">52%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Hosting USA – Managed WordPress Medium Plan | 52% OFF at $9.96/month</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get managed WordPress hosting for $9.96/month, down from $20.75</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Supports up to 5 WordPress installs and 120,000 visitors</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes 50GB NVMe storage, enterprise CDN, WAF, malware protection, and free SSL</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Automated backups, staging, migrations, WP Rocket, and Object Cache Pro included</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Hosting Discount Code, Managed WordPress, WordPress Hosting USA, Hosting Deals</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" aria-label="Get Hosting deal: Hosting USA – Managed WordPress Medium Plan | 52% OFF at $9.96/month" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$49.99</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Hosting USA – AI Application Pro Plan | From $49.99/month</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Launch, deploy, secure, and scale AI applications from $49.99/month</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Supports up to 15 applications, 50GB hosting storage, and 300GB CDN bandwidth</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes Cloudflare Enterprise CDN, WAF, enterprise firewall, and malware protection</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Daily backups, custom domains, SSL, application publishing, and SSH deployments included</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Hosting Discount Code, AI Hosting USA, AI App Hosting, Cloud Hosting</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" aria-label="Get Hosting deal: Hosting USA – AI Application Pro Plan | From $49.99/month" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$12.49</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Hosting USA – WordPress Hosting | From $12.49/month</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get managed WordPress hosting starting at $12.49/month</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy managed security, performance, maintenance, and WordPress support</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Suitable for businesses, bloggers, agencies, and growing websites</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Launch and manage WordPress websites with a streamlined hosting platform</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Hosting Discount Code, WordPress Hosting USA, Managed Hosting, WordPress Deals</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" aria-label="Get Hosting deal: Hosting USA – WordPress Hosting | From $12.49/month" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$580</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">/MONTH</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Hosting USA – Managed cPanel 160GB | $580/month</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get managed cPanel hosting for $580/month</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes 48 CPU cores and 160GB dedicated RAM</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features 1.4TB NVMe SSD storage and 1 dedicated IP</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Managed server infrastructure with SSL and cPanel Solo included</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Hosting Discount Code, Managed cPanel, cPanel Hosting USA, Managed Server</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" aria-label="Get Hosting deal: Hosting USA – Managed cPanel 160GB | $580/month" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">43%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Hosting USA – Premium Business Email | 43% OFF at $3.99/mailbox</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get premium business email for $3.99 per mailbox, down from $6.99</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes 50GB mail storage, rich webmail, calendar, and contacts</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features Smart Write, two-factor authentication, scheduled sending, and team chat</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes 1GB Titan Drive storage and a free domain for the first year</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Hosting Discount Code, Business Email USA, Professional Email, Email Hosting</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" aria-label="Get Hosting deal: Hosting USA – Premium Business Email | 43% OFF at $3.99/mailbox" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Only</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$209</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">/MONTH</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Hosting USA – Managed Server 64GB | $209/month</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the Managed Server 64GB plan for $209/month</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes 24 CPU cores and 64GB dedicated RAM</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features 800GB NVMe SSD storage and 1 dedicated IP</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Managed server infrastructure with SSL included</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Hosting Discount Code, Managed Server USA, Dedicated Hosting, Server Deals</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" aria-label="Get Hosting deal: Hosting USA – Managed Server 64GB | $209/month" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Only</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$915</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">/MONTH</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Hosting USA – Managed cPanel 256GB | $915/month</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get Managed cPanel 256GB hosting for $915/month</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes 64 CPU cores and 256GB dedicated RAM</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features 2TB NVMe SSD storage and 1 dedicated IP</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes managed server infrastructure, SSL, and cPanel Solo</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Hosting Discount Code, cPanel Hosting USA, Managed Hosting, Dedicated Server</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" aria-label="Get Hosting deal: Hosting USA – Managed cPanel 256GB | $915/month" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Web Hosting?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Web hosting is the service that provides the infrastructure needed to store your website's files and make them available online. When someone enters your website address into a browser, the hosting server delivers the required files so the visitor can access your site.
                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Hosting plans vary significantly depending on the type of website being hosted, expected traffic, technical requirements, and available budget.
                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    A small personal blog may work perfectly well with an entry-level shared hosting plan, while a busy online store or web application may require VPS, cloud, or dedicated hosting with greater resources and control.
                  </p>
                  <a href="https://hostingcom.sjv.io/jR2YPv" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <h3 className="text-black font-black text-lg mb-8">Different Types of Hosting You Can Choose From</h3>

  <div className="space-y-8">
    {[
      { 
        icon: Server, 
        title: "Shared Hosting", 
        sub: "Shared hosting is often the starting point for new websites. Multiple websites use resources on the same server, allowing providers to offer plans at relatively affordable prices. It can be suitable for blogs, portfolios, small business websites, and other projects with modest traffic." 
      },
      { 
        icon: Globe, 
        title: "WordPress Hosting", 
        sub: "WordPress hosting is designed around websites built with WordPress. Depending on the provider, plans may include WordPress installation, automatic updates, performance optimization, backups, security tools, and other features designed to simplify website management." 
      },
      { 
        icon: LayoutGrid, 
        title: "VPS Hosting", 
        sub: "A Virtual Private Server provides a greater level of control and dedicated resources compared with traditional shared hosting. VPS plans can be useful for growing websites, applications, developers, and businesses that have outgrown entry-level hosting but don't necessarily need an entire physical server." 
      },
      { 
        icon: Cloud, 
        title: "Cloud Hosting", 
        sub: "Cloud hosting distributes resources across a cloud infrastructure rather than relying on a single traditional server. Depending on the provider and plan, this can offer greater flexibility and scalability for websites experiencing changing levels of traffic." 
      },
      { 
        icon: Cpu, 
        title: "Dedicated Hosting", 
        sub: "Dedicated hosting gives a customer an entire physical server rather than sharing it with other websites. It is generally aimed at larger websites, businesses, applications, and workloads requiring significant resources and greater server-level control." 
      },
      { 
        icon: ShoppingBag, 
        title: "Reseller Hosting", 
        sub: "Reseller hosting allows individuals, agencies, and businesses to purchase hosting resources and provide hosting services to their own customers. It can be particularly useful for web designers, developers, and agencies managing multiple client websites." 
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
          Hosting Promo Code, Coupon Code & Discount Offers
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
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Starter Web Hosting</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">75% OFF at $2.99/mo</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">$35.88 first year, 1-year term</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Starter Plan</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Pro Web Hosting</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">70% OFF at $6.99/mo</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Up to 10 websites, 50GB NVMe</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Pro Plan</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Max Node.js Hosting</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">69% OFF at $5.61/mo</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Up to 50 web apps, 100GB disk</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Node.js Hosting</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Max Web Hosting</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">68% OFF at $8.99/mo</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Up to 100 websites, 100GB NVMe</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Max Plan</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Managed WordPress Medium</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">52% OFF at $9.96/mo</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Up to 5 WP installs, 120K visitors</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Managed WordPress</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">AI Application Pro Plan</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $49.99/mo</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Up to 15 apps, 50GB storage</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">AI App Hosting</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">WordPress Hosting</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $12.49/mo</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Managed security & performance</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">WordPress Hosting</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Managed cPanel 160GB</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$580/mo</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">48 CPU cores, 160GB RAM</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Managed cPanel</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Premium Business Email</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">43% OFF at $3.99/mailbox</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">50GB mail storage</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Business Email</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Managed Server 64GB</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$209/mo</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">24 CPU cores, 64GB RAM</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Managed Server</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Managed cPanel 256GB</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$915/mo</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">64 CPU cores, 256GB RAM</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Managed cPanel</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={`text-gray-600 font-medium leading-relaxed space-y-6 relative transition-all ${!isReadMore ? 'max-h-[500px] overflow-hidden' : ''}`}>
          
          {/* Intro */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Build Your Website for Less with a Hosting Promo Code</h3>
            <p>
              Launching a website involves more than choosing a domain name. You also need a reliable hosting service that can keep your website accessible, provide enough storage and performance for your visitors, and scale as your online presence grows. Whether you're creating a personal blog, starting an online store, building a portfolio, or managing websites for clients, the right hosting plan can make a noticeable difference.
            </p>
            <p>
              The good news is that you don't always have to pay the standard price. Hosting providers frequently run introductory offers, seasonal promotions, plan-specific discounts, and limited-time deals that can reduce the cost of your subscription.
            </p>
            <p>
              Before purchasing a hosting plan, check CouponsBit for the latest hosting promo code, hosting coupon code, hosting discount code, and hosting voucher offers. Comparing available promotions before checkout can help you find better value without compromising on the features your website needs.
            </p>
          </div>

          {/* What Should You Look for */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">What Should You Look for in a Hosting Plan?</h3>
            <p>
              Finding the cheapest plan isn't always the same as finding the best deal. A lower price may not provide enough resources or features for your website.
            </p>
            <p>Consider these factors before subscribing.</p>
            <p><strong>Storage:</strong> Check how much space is included for website files, databases, images, videos, emails, and other content.</p>
            <p><strong>Bandwidth:</strong> Bandwidth determines how much data your website can transfer to visitors. Sites with more traffic generally need greater bandwidth allowances.</p>
            <p><strong>Performance:</strong> Server hardware, storage technology, caching, content delivery networks, and optimization features can all influence website performance.</p>
            <p><strong>Security:</strong> Look for features such as SSL certificates, backups, malware monitoring, firewalls, and other security tools.</p>
            <p><strong>Scalability:</strong> If you expect your website to grow, choose a provider that makes it relatively straightforward to upgrade your resources.</p>
            <p><strong>Customer Support:</strong> Technical problems can affect your website and visitors, so responsive support can be particularly valuable when something goes wrong.</p>
            <p><strong>Control Panel:</strong> A straightforward control panel can make everyday tasks such as managing domains, email accounts, databases, backups, and website files easier.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <div>
              <h3 className="text-xl font-black text-[#056bfa] mb-2">How to Use a Hosting Promo Code</h3>
              <p className="text-gray-500 font-normal text-sm">Found a hosting promo code on CouponsBit? Here's how you can typically use one.</p>
            </div>
            <div className="space-y-6">
              {[
                "Step 1: Browse Hosting Offers — Visit CouponsBit and look through available hosting promotions, coupon codes, discount codes, and vouchers.",
                "Step 2: Select an Offer — Choose the promotion that matches the hosting service you need.",
                "Step 3: Check the Terms — Read the offer details carefully. Some discounts may apply only to new customers, selected plans, specific subscription periods, or initial billing terms.",
                "Step 4: Copy the Code — Copy the available promotional code and visit the hosting provider's website.",
                "Step 5: Choose Your Plan — Select the hosting package that fits your website's requirements.",
                "Step 6: Apply the Promo Code — Enter your hosting coupon code in the applicable field during checkout.",
                "Step 7: Review the Final Price — Make sure the discount has been applied before completing your purchase."
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

          {/* How to Save More */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">How to Save More on Web Hosting</h3>
            <p className="text-gray-500 italic">A coupon isn't the only way to reduce your hosting expenses. A little planning can help you get better value from your subscription.</p>
            <p><strong>Compare Introductory Prices:</strong> Hosting providers frequently advertise special introductory rates. Compare the features included with the discounted price rather than choosing based solely on the headline percentage.</p>
            <p><strong>Check Renewal Pricing:</strong> An introductory offer may apply only to the first billing period. Before subscribing, check what you'll pay when the plan renews.</p>
            <p><strong>Consider Longer Billing Terms:</strong> Some providers offer lower effective monthly rates when you choose an annual or multi-year subscription. However, only commit to a longer term if you're confident you'll continue using the service.</p>
            <p><strong>Look for Seasonal Promotions:</strong> Black Friday, Cyber Monday, New Year promotions, and other seasonal campaigns can bring significant hosting discounts.</p>
            <p><strong>Avoid Paying for Features You Don't Need:</strong> A new blog may not require a high-end VPS or dedicated server. Starting with an appropriate plan and upgrading as your website grows can prevent unnecessary spending.</p>
            <p><strong>Check CouponsBit Before Checkout:</strong> Search for a current hosting discount code, promo code, or voucher before completing your order. You may find an additional opportunity to save.</p>
          </div>

          {/* Who Needs Web Hosting */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Who Needs Web Hosting?</h3>
            <p>Almost anyone planning to operate a website can need hosting. Common users include:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-bold">
              {[
                "Bloggers",
                "Freelancers",
                "Small businesses",
                "Online stores",
                "Startups",
                "Developers",
                "Web designers",
                "Digital agencies",
                "Content creators",
                "Nonprofit organizations",
                "SaaS businesses",
                "Established companies"
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>The ideal hosting solution depends on the website rather than simply the size of the business.</p>
          </div>

          {/* Why Check CouponsBit */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Why Check CouponsBit for Hosting Deals?</h3>
            <p>Hosting is often a recurring expense, which makes finding a good introductory offer particularly useful. CouponsBit helps shoppers compare available promotions before committing to a hosting provider.</p>
            <p>You can search for hosting promo codes, coupon codes, discount codes, and vouchers in one place rather than checking multiple deal websites individually.</p>
            <p><strong>Free to Browse:</strong> CouponsBit is free to use when you're looking for hosting offers.</p>
            <p><strong>Different Types of Deals:</strong> You can discover introductory discounts, promotional codes, seasonal offers, and other hosting-related deals.</p>
            <p><strong>Save Across Other Categories:</strong> CouponsBit also features offers from brands covering software, technology, travel, fashion, home, and other popular shopping categories.</p>
          </div>

          {/* Start Your Website Without Overspending */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Start Your Website Without Overspending</h3>
            <p>Choosing web hosting is an important decision, but it doesn't have to become an unnecessarily expensive one. By comparing hosting types, checking renewal terms, selecting only the resources you actually need, and looking for available promotions, you can build a hosting setup that fits both your website and your budget.</p>
            <p>Before subscribing to a hosting service, visit CouponsBit to check the latest hosting promo code, hosting coupon code, hosting discount code, and hosting voucher offers. A quick search before checkout could help you reduce your initial hosting costs and leave more room in your budget for growing your website.</p>
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
              q: "What is web hosting?",
              a: "Web hosting is a service that stores your website's files and makes them accessible to visitors online."
            },
            {
              q: "What type of hosting is best for a new website?",
              a: "Shared hosting is often suitable for smaller websites and beginners because it generally offers an affordable way to get started. Your requirements may change as your website grows."
            },
            {
              q: "Is WordPress hosting different from regular hosting?",
              a: "WordPress hosting is specifically configured or packaged for WordPress websites. Depending on the provider, it may include tools and features designed to simplify WordPress management."
            },
            {
              q: "Where can I find a hosting promo code?",
              a: "You can check CouponsBit for the latest hosting promo code, hosting coupon code, hosting discount code, and voucher offers."
            },
            {
              q: "Are hosting promo codes available for existing customers?",
              a: "Some promotions are available only to new customers, while others may apply to existing users or specific products. Always review the terms of an individual offer before using it."
            },
            {
              q: "Should I choose monthly or annual hosting?",
              a: "It depends on your budget and how long you expect to use the service. Annual plans can sometimes offer a lower effective monthly cost, while monthly billing provides greater flexibility."
            },
            {
              q: "Do hosting plans include a domain name?",
              a: "Some hosting packages include a domain registration or promotional domain offer, while others charge separately. Check the individual plan's inclusions before purchasing."
            },
            {
              q: "Is CouponsBit free to use?",
              a: "Yes. CouponsBit is free to use and helps shoppers find promo codes, coupon codes, vouchers, and discounts from various brands and services."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Hosting Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Shared Hosting",
              "WordPress Hosting",
              "VPS Hosting",
              "Dedicated Server",
              "Cloud Hosting",
              "Hosting Coupons",
              "Domain + Hosting",
              "Website Builder"
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Hosting Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Shared Hosting Deal", sub: "Up to 75% Off" },
              { heading: "Free Domain Offer", sub: "With Annual Plans" },
              { heading: "WordPress Hosting", sub: "From $2.95/mo" },
              { heading: "VPS Discount", sub: "Save 50% First Month" },
              { heading: "SSL Certificate", sub: "Free Included" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  H
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
