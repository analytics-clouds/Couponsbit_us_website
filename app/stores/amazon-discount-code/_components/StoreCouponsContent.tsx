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
    discount: "14%",
    label: "SAVE",
    title: "Amazon Discount Code – Crayola Classpack Markers for $59.99 | Save 14% on School Supplies",
    heading: "14% OFF",
    sub: "Amazon Discount Code",
    description: "Get the Crayola Broad Line Markers Classpack (256 Count) for only $59.99 (Was $69.99).",
    usedCount: "0",
    expiresIn: "TBD",
    code: "AMAZON1"
  },
  {
    id: "c2",
    discount: "52%",
    label: "SAVE",
    title: "Amazon Discount Code – Zikopomi Weighted Vest for $11.99 | Flat 52% OFF",
    heading: "52% OFF",
    sub: "Amazon Discount Code",
    description: "Buy the Zikopomi Weighted Vest for just $11.99 (Was $24.99).",
    usedCount: "0",
    expiresIn: "TBD",
    code: "AMAZON2"
  },
  {
    id: "c3",
    discount: "50%",
    label: "SAVE",
    title: "Save More with Amazon Discount Code – Resistance Bands for $9.99 | Save 50% Today",
    heading: "50% OFF",
    sub: "Save More with Amazon Discount Code",
    description: "Grab Resistance Bands for just $9.99 (Was $19.99).",
    usedCount: "0",
    expiresIn: "TBD",
    code: "AMAZON3"
  },
  {
    id: "c4",
    discount: "33%",
    label: "SAVE",
    title: "Amazon Fitness Deals – YOTTOY Cordless Jump Rope for $9.98 | Flat 33% OFF",
    heading: "33% OFF",
    sub: "Amazon Fitness Deals",
    description: "Get the YOTTOY Cordless Jump Rope for only $9.98 (Was $14.97).",
    usedCount: "0",
    expiresIn: "TBD",
    code: "AMAZON4"
  },
  {
    id: "c5",
    discount: "33%",
    label: "SAVE",
    title: "Amazon Discount Code – Dr. Arthritis Wrist Brace for $9.95 | Save 33%",
    heading: "33% OFF",
    sub: "Amazon Discount Code",
    description: "Buy the Dr. Arthritis Wrist Brace for only $9.95 (Was $14.95).",
    usedCount: "0",
    expiresIn: "TBD",
    code: "AMAZON5"
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

export default function AmazonCouponsContent() {
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
              <span className="text-black font-extrabold">Amazon</span>
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
                  <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp" alt="Amazon" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Amazon</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find the latest Amazon Discount Code and Amazon Promo Code to save up to 52% OFF on selected products. Shop the Lenovo Legion Tower 5i Gaming PC from $2,556, plus electronics, fitness, home, beauty, fashion, gadgets, and more Amazon deals.
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
                    <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786096677/amazon-discount-code_xsgyvw.webp" alt="Amazon Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786096677/amazon-promo-code_w19nov.webp" alt="Amazon Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786096676/amazon-coupon-code_cbkay6.webp" alt="Amazon Voucher Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Amazon Coupon Codes & Offers</h2>
                  
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
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">14%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Amazon Discount Code – Crayola Classpack Markers for $59.99 | Save 14% on School Supplies</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the Crayola Broad Line Markers Classpack (256 Count) for only $59.99 (Was $69.99).</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available across the USA with fast Amazon delivery</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for classrooms, teachers, preschool, kindergarten, and art projects</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A perfect Back-to-School essential for students and educators</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" aria-label="Get Amazon deal: Amazon Discount Code – Crayola Classpack Markers for $59.99 | Save 14% on School Supplies" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Amazon Discount Code – Zikopomi Weighted Vest for $11.99 | Flat 52% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Buy the Zikopomi Weighted Vest for just $11.99 (Was $24.99).</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available across the USA on Amazon</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great for strength training, cardio, running, rucking, and home workouts</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available in multiple weight options to suit every fitness level</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" aria-label="Get Amazon deal: Amazon Discount Code – Zikopomi Weighted Vest for $11.99 | Flat 52% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Save More with Amazon Discount Code – Resistance Bands for $9.99 | Save 50% Today</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Grab Resistance Bands for just $9.99 (Was $19.99).</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available across the USA with Amazon Prime delivery</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for yoga, Pilates, rehabilitation, stretching, and strength training</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Latex-free bands suitable for beginners and professionals alike</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" aria-label="Get Amazon deal: Save More with Amazon Discount Code – Resistance Bands for $9.99 | Save 50% Today" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">33%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Amazon Fitness Deals – YOTTOY Cordless Jump Rope for $9.98 | Flat 33% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the YOTTOY Cordless Jump Rope for only $9.98 (Was $14.97).</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available across the USA for a limited time</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features an LCD counter and weighted balls for effective workouts</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A great choice for cardio, fat loss, and everyday fitness routines</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" aria-label="Get Amazon deal: Amazon Fitness Deals – YOTTOY Cordless Jump Rope for $9.98 | Flat 33% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">33%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Amazon Discount Code – Dr. Arthritis Wrist Brace for $9.95 | Save 33%</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Buy the Dr. Arthritis Wrist Brace for only $9.95 (Was $14.95).</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available across the USA on Amazon</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Provides support for arthritis, tendonitis, carpal tunnel, and workouts</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Comfortable design for daily wear, recovery, and pain relief</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" aria-label="Get Amazon deal: Amazon Discount Code – Dr. Arthritis Wrist Brace for $9.95 | Save 33%" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$78.91</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Amazon Fashion Deals – Reebok Club C 85 Vintage Sneakers from $78.91</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Shop Reebok Club C 85 Vintage Women's Sneakers from only $78.91.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available across the USA with Amazon delivery</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Stylish everyday sneakers with premium comfort and durability</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for casual wear, walking, and everyday activities</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" aria-label="Get Amazon deal: Amazon Fashion Deals – Reebok Club C 85 Vintage Sneakers from $78.91" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$25.99</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Amazon Discount Code – Fuwidvia Airplane Launcher Toy from $25.99 | Kids' Best Seller</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Includes exciting flying action with multiple flight modes for outdoor fun.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available across the USA on Amazon</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A perfect gift for birthdays, holidays, and family playtime</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>One of Amazon's best-selling outdoor toys for kids</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" aria-label="Get Amazon deal: Amazon Discount Code – Fuwidvia Airplane Launcher Toy from $25.99 | Kids' Best Seller" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$25.24</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Amazon Summer Deals – Reusable Water Balloons from $25.24 | Summer Fun Starts Here</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get 12 reusable water balloons from only $25.24.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available across the USA with Amazon delivery</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Eco-friendly alternative to disposable water balloons for endless fun</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great for pool parties, beach trips, and backyard games</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" aria-label="Get Amazon deal: Amazon Summer Deals – Reusable Water Balloons from $25.24 | Summer Fun Starts Here" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">From</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$2,556</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Amazon Electronics Deals – Lenovo Legion Tower 5i Gaming PC from $2,556</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Buy the Lenovo Legion Tower 5i Gaming PC from $2,556.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available across the USA on Amazon</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Powered by Intel Core Ultra 7 processor with NVIDIA GeForce RTX 5070 Ti graphics</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for high-end gaming, streaming, and content creation</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" aria-label="Get Amazon deal: Amazon Electronics Deals – Lenovo Legion Tower 5i Gaming PC from $2,556" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">From</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$149.99</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Amazon Discount Code – Lenovo Idea Tab from $149.99 | College Budget Pick</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Grab the Lenovo Idea Tab from just $149.99.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available across the USA with Amazon delivery</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features an 11-inch 2.5K display with Tab Pen and Folio Case included</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for college students, online learning, note-taking, and entertainment</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" aria-label="Get Amazon deal: Amazon Discount Code – Lenovo Idea Tab from $149.99 | College Budget Pick" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">From</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$29.99</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase"></p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Amazon Discount Code – Amazon Basics Neoprene Dumbbells from $29.99</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get Amazon Basics Neoprene Dumbbells starting at just $29.99.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available across the USA on Amazon</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for strength training, toning exercises, and home gym workouts</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Durable neoprene coating provides a secure and comfortable grip</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" aria-label="Get Amazon deal: Amazon Discount Code – Amazon Basics Neoprene Dumbbells from $29.99" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">From an Online Bookstore to a Global Shopping Leader</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    When Amazon launched in 1994, its mission was simple: make shopping online easier and more convenient. What began as an online bookstore quickly evolved into one of the world's largest e-commerce companies, serving hundreds of millions of customers across North America, Europe, Asia, and many other regions.                 
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Today, Amazon is much more than a place to buy products. It has built an extensive shopping ecosystem that includes its online marketplace, Amazon Prime membership, Kindle e-readers, Fire TV devices, Echo smart speakers powered by Alexa, grocery services, cloud computing through Amazon Web Services (AWS), digital entertainment, and business solutions. This diverse ecosystem allows customers to shop, stream, read, work, and manage smart homes - all through connected Amazon services.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    One of the biggest reasons for Amazon's success is the sheer variety it offers. Instead of selling products from only one brand, Amazon brings together millions of sellers and manufacturers on a single platform. This marketplace model gives shoppers access to an enormous selection of products, competitive pricing, and the ability to compare different brands before making a purchase.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Convenience has also played a major role in Amazon's growth. Features like personalized recommendations, secure payment options, one-click ordering, order tracking, customer reviews, and flexible delivery methods have made online shopping faster and more reliable. For many shoppers, Amazon has become the first destination when looking for everyday essentials, electronics, fashion, home products, books, beauty items, office supplies, and much more.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Innovation remains at the heart of Amazon's business. The company continuously invests in technologies that improve the customer experience, including artificial intelligence, machine learning, voice-assisted shopping through Alexa, automated fulfillment centers, and faster delivery networks. These advancements help simplify the shopping journey while ensuring products reach customers as efficiently as possible.
                  </p>
                    <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Amazon is also home to several well-known private labels and exclusive products, alongside thousands of global brands. Whether you're looking for the latest gadgets, bestselling books, premium skincare, fitness equipment, kitchen appliances, or pet supplies, the platform offers products across virtually every shopping category.
                  </p>
                    <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Beyond shopping, Amazon has developed a range of services that add value for customers. Amazon Prime members enjoy benefits such as fast shipping, exclusive shopping events, access to Prime Video, Amazon Music, Prime Reading, gaming perks, and more. Combined with year-round promotions and digital coupons, these services make Amazon an attractive choice for shoppers looking to save both time and money.
                  </p>
                    <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    As online shopping continues to evolve, Amazon remains focused on expanding product selection, improving delivery speeds, and introducing new technologies that make buying online even more convenient. Its commitment to innovation and customer satisfaction has helped it become one of the most trusted names in global e-commerce.
                  </p>
                  <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <h3 className="text-black font-black text-lg mb-8">Table of Contents</h3>

  <div className="space-y-4">
    {[
      "From an Online Bookstore to a Global Shopping Leader",
      "Discover What You Can Shop on Amazon",
      "Why Millions of Shoppers Continue to Choose Amazon",
      "How to Use an Amazon Discount Code",
      "The Biggest Amazon Shopping Events You Shouldn't Miss",
      "Frequently Asked Questions",
      "Shop Smarter and Make Every Dollar Count"
    ].map((item, index) => (
      <div key={item} className="flex gap-4 items-center">
        <div className="w-8 h-8 shrink-0 bg-[#e8f6f8] rounded-xl flex items-center justify-center text-[#056bfa] font-bold text-xs">
          {index + 1}
        </div>
        <p className="text-black font-bold text-sm leading-tight hover:text-[#056bfa] cursor-pointer transition-colors">
          {item}
        </p>
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
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Amazon Discount Code & Coupons – Verified Deals for Smart Shoppers

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
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Crayola Classpack Markers</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$59.99 (Save 14%)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">256 Count, was $69.99</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">School Supplies</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Zikopomi Weighted Vest</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$11.99 (Save 52%)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Multiple weight options</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Fitness Equipment</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Resistance Bands</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$9.99 (Save 50%)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Latex-free</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Fitness Equipment</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">YOTTOY Cordless Jump Rope</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$9.98 (Save 33%)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">LCD counter included</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Fitness Equipment</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dr. Arthritis Wrist Brace</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">$9.95 (Save 33%)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Support for daily wear</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Health & Personal Care</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Reebok Club C 85 Sneakers</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $78.91</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Women's vintage style</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Fashion & Footwear</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Fuwidvia Airplane Launcher Toy</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $25.99</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Multiple flight modes</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Kids' Toys</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Reusable Water Balloons</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $25.24</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">12-pack, eco-friendly</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Summer & Outdoor</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Lenovo Legion Tower 5i Gaming PC</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $2,556</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Intel Core Ultra 7, RTX 5070 Ti</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Electronics & Gaming</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Lenovo Idea Tab</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $149.99</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">11-inch 2.5K display</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Electronics & Tablets</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Amazon Basics Neoprene Dumbbells</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $29.99</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Durable neoprene coating</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Fitness Equipment</td>
      </tr>
    </tbody>
  </table>
</div>

       

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Shopping online has become part of everyday life, and few retailers have transformed the experience as much as Amazon. From household essentials and electronics to fashion, books, groceries, and smart home devices, Amazon has grown into one of the world's largest online marketplaces. Millions of customers visit the platform daily to compare products, discover new brands, and enjoy the convenience of having orders delivered right to their doorstep.

          </p>
          <p>
            While Amazon is already known for competitive pricing, savvy shoppers know there are plenty of additional ways to reduce their spending. From limited-time promotions and Lightning Deals to digital coupons and seasonal sales, opportunities to save are available throughout the year. Pairing these offers with a verified Amazon discount code can make your purchases even more budget-friendly.
          </p>
          <p>
            At CouponsBit, we make it easier to find the latest Amazon discount codes, Amazon promo codes, Amazon coupon codes, and exclusive offers in one convenient place. Instead of searching multiple websites before every purchase, you can quickly browse verified deals that may help you save on eligible products across a wide range of categories.
          </p>
          <p>
            This guide goes beyond simply listing coupons. You'll discover how Amazon's savings programs work, the best times of year to shop, different types of promotions available, ways to maximize your Prime membership, and practical shopping strategies that can help you get better value every time you place an order. Whether you're shopping for everyday essentials or planning a major purchase, knowing how to take advantage of Amazon's deals can make a noticeable difference to your overall spending.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Discover What You Can Shop on Amazon</h3>
            <p>
              One of Amazon's biggest strengths is its incredible product selection. Whether you're replacing an everyday household item, investing in the latest technology, or shopping for a special occasion, you'll find millions of products from both globally recognized brands and small independent businesses.
            </p>
            <p>
              Because so many categories are available in one place, Amazon has become a preferred shopping destination for customers who value convenience, competitive pricing, and the ability to compare multiple products before making a purchase.
            </p>
            <p>
              Here's a closer look at some of the most popular categories available on Amazon.
            </p>
           
           
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Electronics & Smart Devices</h3>
            <p>
Amazon is one of the first places many shoppers visit when buying electronics. From smartphones and laptops to gaming consoles, smart TVs, headphones, tablets, cameras, and wearable technology, the platform offers products for every budget.
            </p>
            <p>
              You'll also find Amazon's own lineup of devices, including Echo smart speakers, Fire TV streaming devices, Kindle e-readers, Ring smart home security products, and Blink cameras. Detailed specifications, customer reviews, product comparisons, and buying guides make it easier to choose the right device before placing an order.
            </p>
            <p>
              Whether you're upgrading your home office or purchasing the latest gadgets, Amazon frequently features limited-time deals and seasonal discounts across its electronics category.
            </p>
           
           
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Home, Kitchen & Furniture</h3>
            <p>
              Creating a comfortable living space is easier with Amazon's extensive home collection. Shoppers can browse furniture, bedding, kitchen appliances, cookware, dining essentials, storage solutions, lighting, home décor, and cleaning products from hundreds of trusted brands
            </p>

            <p>
              Whether you're furnishing your first apartment, renovating your home, or simply replacing everyday essentials, Amazon provides options ranging from affordable basics to premium designer collections.
            </p>

            <p>
              Many products also include customer photos and verified reviews, helping buyers make more confident purchasing decisions.
            </p>
           
           
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Fashion for Every Style</h3>
            <p>
              Amazon has become a major destination for fashion, offering clothing, shoes, handbags, jewelry, watches, and accessories for women, men, and children.
            </p>

            <p>
              Customers can shop popular global labels alongside Amazon-owned fashion brands, making it easy to find everything from everyday basics and workwear to activewear and seasonal collections.
            </p>

            <p>
              The platform also offers detailed size guides, customer reviews, and flexible return policies that help reduce the uncertainty often associated with buying clothing online.
            </p>
           
           
          </div>

            <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Beauty, Skincare & Personal Care</h3>
           
           <p>
            Beauty enthusiasts can explore an extensive selection of skincare, makeup, fragrances, haircare products, grooming essentials, and wellness items from both established and emerging brands.
           </p>
           <p>
            Whether you're searching for dermatologist-recommended skincare, professional hair tools, premium cosmetics, or everyday personal care products, Amazon brings together thousands of options in one convenient marketplace.
           </p>

          <p>
            Many beauty products also include ingredient information, usage guides, and customer ratings to help shoppers make informed decisions.
          </p>
           
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Grocery & Everyday Essentials</h3>
           <p>
            Amazon makes it convenient to stock up on everyday necessities without leaving home. Customers can purchase pantry staples, snacks, beverages, household cleaning supplies, paper products, personal hygiene items, and pet essentials through various grocery services available in eligible locations.
           </p>
           <p>
            For busy families and professionals, ordering frequently used products online saves both time and repeated trips to physical stores.
           </p>
           
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Books, Movies & Digital Entertainment</h3>
           <p>
            Although Amazon has expanded into nearly every retail category, books remain an important part of its identity.
           </p>

           <p>
            Readers can browse millions of printed books, audiobooks, Kindle eBooks, educational resources, and children's literature. Whether you're interested in business, self-development, fiction, history, science, or cookbooks, Amazon offers one of the largest book selections available online.
           </p>
           <p>
            Beyond books, customers can also purchase movies, TV series, music, and digital content through Amazon's entertainment services.
           </p>
           
           
          </div>

           <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Toys, Games & Collectibles</h3>
           <p>
            From educational toys and puzzles to action figures, LEGO sets, board games, trading cards, and collectibles, Amazon provides entertainment options for children and adults alike.
           </p>

           <p>
            Parents often use customer reviews, age recommendations, and product demonstrations to find gifts suitable for birthdays, holidays, and special occasions.
           </p>

           <p>
            Collectors can also discover limited-edition merchandise, hobby supplies, and exclusive releases from popular franchises.
           </p>
           
           
          </div>


           <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Sports, Fitness & Outdoor Gear</h3>
           <p>
            Whether you're beginning a fitness journey or preparing for your next outdoor adventure, Amazon offers equipment for nearly every activity.
           </p>
           <p>
            Browse home gym equipment, yoga mats, resistance bands, bicycles, camping gear, hiking accessories, sports apparel, hydration products, and recovery tools designed to support active lifestyles.
           </p>
           <p>
            The availability of multiple brands allows shoppers to compare features and pricing before making an investment.
           </p>
           
           
          </div>

          
           <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Pet Supplies</h3>
           
           <p>
            Pet owners can shop for food, treats, grooming products, toys, beds, carriers, health supplements, and training accessories for dogs, cats, birds, fish, and other household pets.
           </p>

           <p>
            Many shoppers also use Amazon's Subscribe & Save program for recurring pet food deliveries, ensuring they never run out of essential supplies.
           </p>
           
           
          </div>

          
           <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Baby Products</h3>
          
           <p>
            Preparing for a growing family becomes simpler with Amazon's comprehensive baby category.
Parents can shop for diapers, wipes, baby formula, feeding accessories, nursery furniture, car seats, strollers, toys, clothing, baby monitors, and developmental products from trusted manufacturers.

           </p>

           <p>
            The platform's product reviews often provide valuable insights from other parents, making it easier to choose products that fit individual needs.
           </p>
           
          </div>

           <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Automotive & Tools</h3>
          
           <p>
            Amazon also caters to vehicle owners and DIY enthusiasts by offering automotive accessories, replacement parts, maintenance products, garage equipment, power tools, hand tools, and workshop essentials.
           </p>
           <p>
            Whether you're upgrading your vehicle or completing a home improvement project, the platform provides products suitable for both beginners and experienced professionals.
           </p>
           
          </div>


           <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Office, School & Business Essentials</h3>
          
           <p>Students, teachers, remote workers, and businesses can purchase office furniture, printers, stationery, school supplies, monitors, ergonomic accessories, storage solutions, and productivity tools from Amazon.</p>
           <p>
            As hybrid work continues to grow, many professionals rely on Amazon to create comfortable and efficient workspaces at home.
           </p>
          </div>

           

           <div className="space-y-4">
            <p>
              Amazon's ability to combine millions of products, trusted brands, customer reviews, competitive pricing, and convenient delivery into one platform is one of the key reasons it continues to attract shoppers from around the world. Whether you're making a small everyday purchase or investing in a major upgrade, the platform offers enough variety to suit virtually every lifestyle, budget, and shopping need.
            </p>
           
          </div>

          <div className="space-y-4">
  <h3 className="text-2xl font-black text-[#056bfa] mb-4">
    Why Millions of Shoppers Continue to Choose Amazon
  </h3>

  <p>
    Online shopping has become more competitive than ever, yet Amazon continues
    to be one of the first destinations people visit when they need almost
    anything. While competitive pricing certainly plays a role, Amazon's
    popularity comes from a combination of convenience, variety, innovation,
    and customer-focused services that make shopping easier from start to
    finish. Here's what keeps millions of customers coming back.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">
    A Marketplace That Offers Almost Everything
  </h4>
  <p>
    One of Amazon's greatest advantages is its enormous selection of products.
    Instead of visiting multiple websites to shop for electronics, clothing,
    books, groceries, beauty products, home essentials, and pet supplies,
    customers can find nearly everything they need in one place.
  </p>
  <p>
    This convenience saves time while making it easier to compare products,
    prices, brands, and customer reviews before making a purchase. Whether you're
    shopping for everyday necessities or searching for something highly
    specific, Amazon's vast marketplace significantly increases the chances of
    finding exactly what you need.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">
    Competitive Prices Across Thousands of Brands
  </h4>
  <p>
    Price is one of the biggest factors that influence online purchases, and
    Amazon frequently offers competitive pricing across a wide variety of
    categories. Since many products are sold by different sellers, shoppers often
    have the flexibility to compare prices and choose the option that best fits
    their budget.
  </p>
  <p>
    In addition to everyday pricing, Amazon regularly introduces Lightning Deals,
    limited-time promotions, seasonal sales, digital coupons, and exclusive
    member discounts that create even more opportunities to save.
  </p>
  <p>
    Rather than waiting for a major holiday sale, customers can often discover
    attractive deals throughout the year.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">
    Reviews That Help You Shop with Confidence
  </h4>
  <p>
    Shopping online means you can't physically examine a product before
    purchasing, which is why customer feedback has become such an important
    part of the buying process.
  </p>
  <p>
    Amazon's review system allows shoppers to learn from real customer
    experiences before making a decision. Many listings include detailed
    written reviews, customer photos, videos, ratings, and answers to
    frequently asked questions, helping buyers better understand product quality,
    sizing, durability, and overall performance.
  </p>
  <p>
    Instead of relying solely on product descriptions, shoppers can make
    informed decisions based on thousands of genuine experiences shared by
    other customers.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">
    Fast and Flexible Delivery Options
  </h4>
  <p>
    Convenience extends far beyond the checkout process. Amazon has invested
    heavily in its fulfillment and logistics network, making delivery faster
    and more reliable for millions of customers.
  </p>
  <p>
    Depending on location and product availability, shoppers may be able to
    choose from standard shipping, expedited delivery, same-day delivery,
    overnight shipping, or scheduled delivery options.
  </p>
  <p>
    For many customers, especially Amazon Prime members, fast shipping has
    become one of the platform's most valuable benefits, making it possible to
    receive essential items within hours instead of days.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">
    Shopping Designed Around Convenience
  </h4>
  <p>
    Amazon simplifies nearly every stage of the shopping journey. Features like
    personalized recommendations, saved payment methods, one-click purchasing,
    wish lists, shopping lists, order history, and easy reordering help
    customers spend less time navigating the website and more time finding what
    they need.
  </p>
  <p>
    The platform is also optimized for desktop, tablet, and mobile shopping,
    allowing users to browse products, place orders, track deliveries, and manage
    returns from virtually anywhere.
  </p>
  <p>
    This seamless experience has become one of Amazon's biggest competitive
    advantages.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">
    A Trusted Destination for Global and Local Brands
  </h4>
  <p>
    Amazon brings together products from internationally recognized brands,
    emerging startups, and independent businesses on a single platform. This
    gives customers access to an incredibly diverse selection without limiting
    them to one manufacturer or retailer.
  </p>
  <p>
    For shoppers, this means greater freedom to compare similar products,
    evaluate features, and select the option that best matches their needs and
    budget.
  </p>
  <p>
    The marketplace also provides smaller businesses with an opportunity to reach
    millions of customers they might not otherwise have access to.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">
    Easy Returns and Customer Support
  </h4>
  <p>
    Buying online naturally comes with some uncertainty, especially when
    purchasing clothing, electronics, or expensive household items.
  </p>
  <p>
    Amazon has simplified this process by offering return options on many
    eligible products, making it easier for customers to shop with confidence.
    While return policies may vary depending on the seller and product category,
    the platform generally provides clear information about eligibility before a
    purchase is made.
  </p>
  <p>
    Combined with customer support resources and order tracking tools, this
    transparency helps reduce the stress often associated with online shopping.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">
    An Ecosystem That Extends Beyond Shopping
  </h4>
  <p>
    Amazon is no longer just an online retailer. Over the years, it has built an
    ecosystem of products and services that work together to create a more
    connected customer experience.
  </p>
  <p>
    For example, Amazon Prime members receive shopping benefits alongside
    access to entertainment services such as Prime Video and Amazon Music.
    Kindle offers digital reading experiences, Alexa powers smart home
    devices, while Fire TV integrates streaming entertainment into households.
  </p>
  <p>
    This interconnected ecosystem encourages customers to use Amazon for much
    more than everyday shopping, creating long-term value that extends well
    beyond individual purchases.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">
    Innovation That Continues to Improve the Shopping Experience
  </h4>
  <p>
    Amazon consistently invests in technology to make online shopping faster,
    smarter, and more personalized.
  </p>
  <p>
    Artificial intelligence helps recommend products based on browsing behavior,
    machine learning improves search results, and automated fulfillment centers
    enable faster order processing. Features such as voice shopping through
    Alexa, smart reordering, and personalized deal recommendations further
    simplify the purchasing process.
  </p>
  <p>
    As consumer expectations continue to evolve, Amazon remains focused on
    introducing technologies that improve convenience while reducing the time
    and effort required to shop online.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">
    Great Value Goes Beyond Low Prices
  </h4>
  <p>
    Many shoppers assume that saving money simply means finding the lowest price,
    but Amazon offers value in several different ways.
  </p>
  <p>
    The combination of competitive pricing, digital coupons, Prime-exclusive
    discounts, Subscribe & Save offers, seasonal promotions, bundle deals, and
    recurring sales gives customers multiple opportunities to reduce their
    overall spending throughout the year.
  </p>
  <p>
    When these savings are combined with verified Amazon discount codes,
    shoppers can often stretch their budget even further on eligible purchases.
  </p>
  <p>
    Amazon's continued success isn't built on one feature alone. It's the
    combination of product variety, trusted reviews, convenient delivery,
    innovative technology, competitive pricing, and customer-first services that
    has made it one of the most influential online marketplaces in the world.
    Whether you're purchasing everyday essentials or investing in high-value
    electronics, Amazon provides an experience designed to make shopping simple,
    efficient, and rewarding.
  </p>
</div>





     

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
  <h3 className="text-xl font-black text-[#056bfa] mb-8">
    How to Use an Amazon Discount Code
  </h3>

  <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
    <p>
      Saving money on Amazon doesn't always require waiting for a major sale.
      Many eligible products feature promotional discounts or digital coupons
      that can be applied during checkout, and when available, a verified
      Amazon discount code can help lower the total cost of your order even
      further.
    </p>
    <p>If you've found an active offer on CouponsBit, here's how to use it:</p>
  </div>

  <div className="space-y-6">
    {[
      "Step 1: Browse the Latest Amazon Offers — Visit CouponsBit to explore the newest Amazon discount codes, Amazon promo codes, Amazon coupon codes, and promotional offers. Read the offer details carefully to check product eligibility, spending requirements, and expiration dates.",
      "Step 2: Copy the Discount Code — Once you've selected an offer that matches your purchase, copy the promotional code if one is provided. Some Amazon promotions are automatically applied, while others require entering a code during checkout.",
      "Step 3: Add Eligible Products to Your Cart — Visit Amazon and add the qualifying items to your shopping cart. Be sure to review the terms of the promotion, as certain offers may only apply to specific products, brands, or third-party sellers.",
      "Step 4: Review Your Cart — Before proceeding to payment, double-check that all selected products meet the requirements of the promotion. If the offer includes a minimum purchase amount or category restrictions, verifying your cart now can help avoid disappointment later.",
      "Step 5: Apply the Code (If Required) — During checkout, enter your Amazon discount code in the designated promotional code or gift card section, if applicable. If the promotion is valid and your purchase qualifies, the discount will be reflected in your order summary before payment is completed.",
      "Step 6: Complete Your Purchase — After confirming that the savings have been applied, choose your preferred payment method and place your order. You can then track your shipment through your Amazon account until it arrives."
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
  <h3 className="text-2xl font-black text-[#056bfa] mb-4">
    The Biggest Amazon Shopping Events You Shouldn't Miss
  </h3>

  <p>
    Although Amazon offers deals throughout the year, certain shopping events are
    known for delivering some of the platform's most significant discounts.
    Planning your purchases around these sales can help you maximize savings on
    everything from everyday essentials to big-ticket electronics.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">Amazon Prime Day</h4>
  <p>
    Prime Day is Amazon's flagship shopping event and is exclusive to Prime
    members. Held annually, it features limited-time deals across popular
    categories such as electronics, home appliances, fashion, beauty, kitchen
    essentials, toys, and Amazon devices.
  </p>
  <p>
    Many shoppers wait for Prime Day to purchase high-value items, as discounts
    during the event can be among the best available all year.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">Black Friday</h4>
  <p>
    Black Friday remains one of Amazon's busiest shopping periods. Thousands of
    products receive price reductions, making it an excellent time to buy
    laptops, televisions, gaming consoles, smart home devices, kitchen
    appliances, and holiday gifts.
  </p>
  <p>
    Deals often begin before the official Black Friday date and continue
    throughout the shopping weekend.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">Cyber Monday</h4>
  <p>
    Following Black Friday, Cyber Monday shifts the focus toward
    online-exclusive offers. Shoppers can often find additional discounts on
    electronics, software, digital subscriptions, office equipment, and everyday
    essentials.
  </p>
  <p>
    It's also a great opportunity to purchase items that may have sold out
    during Black Friday promotions.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">
    Amazon's Big Spring Sale
  </h4>
  <p>
    Amazon's Big Spring Sale has become an increasingly popular seasonal shopping
    event, offering discounts across home improvement products, outdoor
    furniture, cleaning supplies, gardening equipment, fashion, beauty
    products, and more.
  </p>
  <p>
    It's an ideal time to prepare for warmer weather while taking advantage of
    limited-time promotions.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">
    Holiday Shopping Season
  </h4>
  <p>
    From early November through December, Amazon launches a wide range of
    holiday promotions covering toys, gifts, decorations, beauty products,
    clothing, electronics, and festive essentials.
  </p>
  <p>
    Shopping early during the holiday season often provides access to a wider
    product selection before popular items sell out.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">Back-to-School Sales</h4>
  <p>
    Students, parents, and teachers can save on school supplies, backpacks,
    laptops, stationery, printers, headphones, calculators, and dorm room
    essentials during Amazon's back-to-school promotions.
  </p>
  <p>
    These sales are especially useful for preparing classrooms, home offices,
    and student living spaces.
  </p>

  <h4 className="text-xl font-bold text-gray-800 mt-6">
    Memorial Day, Labor Day & Other Seasonal Promotions
  </h4>
  <p>
    Throughout the year, Amazon also participates in major shopping holidays such
    as Memorial Day, Labor Day, Presidents' Day, and other seasonal events.
    These promotions frequently include discounts on mattresses, outdoor
    furniture, grills, fitness equipment, appliances, and home improvement
    products.
  </p>
  <p>
    Keeping an eye on these events can help shoppers secure better prices
    without waiting for Black Friday.
  </p>

  <p className="mt-6">
    While these shopping events often feature some of Amazon's biggest price
    drops, it's still worth checking CouponsBit before placing your order.
    Alongside seasonal sales, you may also find a working Amazon discount
    code, promo code, or coupon offer that provides additional savings on
    eligible purchases.
  </p>
</div>



          

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Build Your Website for Less</h3>
            <p>Whether you're launching a personal blog, creating an online store, building a portfolio, or growing a business website, Amazon offers the tools and hosting solutions needed to succeed online.</p>
            <p>Before purchasing a hosting plan, visit Couponsbit to explore the latest Amazon coupon codes, promo codes, and web hosting deals. With verified discounts and regularly updated offers, Couponsbit helps you create and grow your online presence while keeping costs under control.</p>
          </div>

          <div className="space-y-4">

            <h3 className="text-2xl font-black text-[#056bfa] mb-4">Shop Smarter and Make Every Dollar Count</h3>
            <p>
              Amazon has changed the way people shop by bringing together an incredible selection of products, competitive prices, and convenient delivery options on a single platform. Whether you're purchasing everyday essentials, upgrading your home, investing in new technology, or shopping for gifts, there are countless opportunities to get more value from every order.
            </p>
            <p>
              Before you head to checkout, take a moment to browse the latest Amazon discount code, Amazon promo code, Amazon coupon code, and verified offers on CouponsBit. Combined with Amazon's seasonal sales, digital coupons, and everyday deals, these promotions can help you save more while enjoying a smarter shopping experience.
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
  <h3 className="text-2xl font-black text-black mb-8">
    Frequently Asked Questions
  </h3>
  {[
    {
      q: "Where can I find a verified Amazon discount code?",
      a: "You can find the latest Amazon discount code, Amazon promo code, Amazon coupon code, and exclusive shopping offers on CouponsBit. We regularly update available promotions to help shoppers save on eligible Amazon purchases."
    },
    {
      q: "Does Amazon offer coupon codes?",
      a: "Yes. Amazon occasionally offers promotional codes for eligible products, brands, and shopping events. In addition, many products feature digital coupons that can be activated directly on the product page before checkout."
    },
    {
      q: "How do Amazon digital coupons work?",
      a: "Digital coupons can usually be redeemed by selecting the \"Apply Coupon\" option on eligible product pages. The discount is automatically applied during checkout, provided your purchase meets the promotion's requirements."
    },
    {
      q: "Can I combine an Amazon discount code with other offers?",
      a: "This depends on the promotion. Some offers may be combined with existing discounts or Lightning Deals, while others may have restrictions. Always review the offer terms before completing your purchase."
    },
    {
      q: "Does Amazon Prime help you save money?",
      a: "Yes. Prime members can enjoy benefits such as fast shipping, exclusive shopping events, Prime Day access, and member-only deals that may help reduce overall shopping costs."
    },
    {
      q: "What are Amazon Lightning Deals?",
      a: "Lightning Deals are limited-time promotions available on selected products for a short period or until inventory runs out. These offers are updated throughout the day and often feature significant discounts."
    },
    {
      q: "Does Amazon have sales throughout the year?",
      a: "Yes. In addition to Prime Day, Amazon hosts major shopping events during Black Friday, Cyber Monday, Big Spring Sale, Back-to-School season, and various holiday promotions, along with year-round daily deals."
    },
    {
      q: "Is CouponsBit free to use?",
      a: "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, promo codes, vouchers, and deals from Amazon and hundreds of other leading brands."
    }
  ].map((faq, i) => (
    <div
      key={i}
      className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300"
    >
      <button
        onClick={() => setOpenFaq(openFaq === i ? null : i)}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
      >
        <span className="text-black font-black text-base">{faq.q}</span>
        <div
          className={cn(
            "bg-[#f0f0f0] p-2 rounded-xl transition-all",
            openFaq === i && "bg-[#056bfa] rotate-180"
          )}
        >
          <ChevronDown
            className={cn(
              "w-4 h-4 text-gray-500",
              openFaq === i && "text-white"
            )}
          />
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 px-8 bg-white",
          openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0"
        )}
      >
        <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">
          {faq.a}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Amazon Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Shared Hosting", "WordPress Setup", "Domain Search", "Amazon Cloud", "Amazon Promo Code", "VPS Hosting", "Dedicated Server", "Web Builder"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Amazon Deals</h3>
          <div className="space-y-6">
            {COUPONS.slice(0, 5).map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">B</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://amzn.to/4fFl3VP" target="_blank" rel="noopener noreferrer" aria-label={`Get Amazon deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
