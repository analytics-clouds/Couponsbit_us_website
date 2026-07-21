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
  ArrowRight, Lock,
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

const STORE_URL = "https://performance.gotrackier.com/click?campaign_id=4801&pub_id=1015";
const STORE_LOGO = "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784618848/mcafree-logo_fy86ap.webp";

// --- Data ---
const COUPONS: Coupon[] = [
  {
    id: "c1",
    discount: "75%",
    label: "UP TO",
    badge: "Best Offer",
    title: "McAfee Total Protection – Up To 75% OFF",
    heading: "Up To 75% OFF",
    sub: "Total Protection",
    description: "Get McAfee Total Protection for as low as $24.99, covering up to 5 devices with antivirus, VPN and identity monitoring.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MCAFEE1"
  },
  {
    id: "c2",
    discount: "66%",
    label: "FLAT",
    badge: "Popular",
    title: "McAfee Total Protection Plan – Flat 66% OFF",
    heading: "Flat 66% OFF",
    sub: "Total Protection Plan",
    description: "Save flat 66% on the McAfee Total Protection Plan starting from $49.99, covering up to 10 devices.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MCAFEE2"
  },
  {
    id: "c3",
    discount: "$110",
    label: "SAVE",
    badge: "Trending",
    title: "McAfee Advanced Plan – Save $110",
    heading: "Save $110",
    sub: "Advanced Plan",
    description: "Get the McAfee Advanced Plan from $89.99/year with unlimited device coverage and identity protection.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MCAFEE3"
  },
  {
    id: "c4",
    discount: "$80",
    label: "SAVE",
    title: "McAfee Individual Ultimate Plan – Save $80",
    heading: "Save $80",
    sub: "Individual Ultimate Plan",
    description: "Subscribe to the Individual Ultimate Plan from $79.99/year and save $80 on complete cybersecurity.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MCAFEE4"
  },
  {
    id: "c5",
    discount: "$225",
    label: "UP TO",
    title: "McAfee Family Plan – Up To $225 OFF",
    heading: "Up To $225 OFF",
    sub: "Family Plan",
    description: "Get McAfee Family Plans starting from $69.99/year and protect your entire family across unlimited devices.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "MCAFEE5"
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

export default function McafeeCouponsContent() {
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
              <span className="text-black font-extrabold">McAfee</span>
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
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src={STORE_LOGO} alt="McAfee" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">McAfee</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">Ratings</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Use the latest McAfee Discount Code and coupon code to save UP TO 75% OFF and up to $225 on McAfee Total Protection, Family, and Advanced Plans. Protect your devices with antivirus, VPN, identity monitoring, and premium online security for less.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "8", label: "Coupons" },
                    { icon: Percent, val: "8", label: "Deals" },
                    { icon: Users, val: "1M+", label: "Shoppers" },
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784636681/mcafree-discount-code_bvc3jb.webp" alt="McAfee Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784636681/mcafree-promo-code_qnefg0.webp" alt="McAfee Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784636681/mcafree-voucher-code_pllho9.webp" alt="McAfee Voucher Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">McAfee Coupon Codes & Offers</h2>
                </div>

                {/* Offer 1 */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
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
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">McAfee Total Protection – Up To 75% OFF</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get McAfee Total Protection for as low as $24.99 (regular price $99.99) and protect up to 5 devices.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Premium antivirus, VPN, identity monitoring, and secure browsing included</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy up to 75% off McAfee's bestselling security suite</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Keeps PCs, Macs, smartphones, and tablets protected from the latest cyber threats</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get McAfee deal: Total Protection" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Offer 2 */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FLAT</p>
                          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">66%</h2>
                          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">McAfee Total Protection Plan – Flat 66% OFF</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save flat 66% off the McAfee Total Protection Plan, starting from just $49.99.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes award-winning antivirus, identity monitoring, secure VPN, and web protection</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Covers up to 10 devices with real-time security updates</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Limited-time USA offer — protect your digital life for less</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get McAfee deal: Total Protection Plan" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Offer 3 */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$110</h2>
                          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">McAfee Advanced Plan – Save $110</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the McAfee Advanced Plan from only $89.99/year and save $110 on premium security and privacy protection.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes unlimited device coverage and identity protection</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Advanced online security features included</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for families and users with multiple devices</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get McAfee deal: Advanced Plan" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Offer 4 */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$80</h2>
                          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">McAfee Individual Ultimate Plan – Save $80</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Subscribe to the Individual Ultimate Plan from just $79.99/year and save $80 on McAfee's most comprehensive personal protection plan.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Unlimited device protection and identity monitoring</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Account cleanup and daily protection reports included</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Complete cybersecurity with premium privacy features</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get McAfee deal: Individual Ultimate Plan" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Offer 5 */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
                          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$225</h2>
                          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">McAfee Family Plan – Up To $225 OFF</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get McAfee Family Plans starting from only $69.99/year and save up to $225 off.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Covers Premium Family, Advanced Family, and Ultimate Family plans</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Protects your entire family across unlimited compatible devices</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Award-winning antivirus, identity protection, and parental security tools</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get McAfee deal: Family Plan" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Offer 6 */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">EXTRA</p>
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
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">McAfee Back-To-School Sale – Extra 10% OFF</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save an extra 10% off eligible McAfee subscriptions for students and families.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Plans start from just $39.99/year after discount</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Real-time protection, secure browsing, VPN, and identity monitoring included</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Limited-time USA offer — stay protected throughout the school year</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get McAfee deal: Back-To-School Sale" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Offer 7 */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Starting At</p>
                          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$24.99</h2>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">McAfee Premium Antivirus – Starting From $24.99</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Secure your devices with McAfee Premium Antivirus starting at just $24.99.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Powerful malware protection and phishing defense</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Safe online banking protection included</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great value for individuals, families, and small businesses</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get McAfee deal: Premium Antivirus" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Offer 8 */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Starting From</p>
                          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$69.99</h2>
                          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">/yr</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">McAfee Multi-Device Security – Protect Unlimited Devices</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Secure unlimited compatible devices with McAfee Multi-Device Security plans starting from $69.99/year.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Premium antivirus, VPN, and identity theft monitoring included</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for households with PCs, Macs, smartphones, and tablets</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save more with McAfee's USA-exclusive subscription deals</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get McAfee deal: Multi-Device Security" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About McAfee</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Founded in 1987, McAfee is a leading cybersecurity company that provides comprehensive digital protection for individuals, families, and businesses. Its security solutions help defend against viruses, malware, ransomware, phishing attacks, and other online threats.

                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Today, McAfee offers more than traditional antivirus software. Its product lineup includes identity protection, VPN services, password management, web protection, privacy tools, and multi-device security, helping users stay protected across Windows, macOS, Android, and iOS devices.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <h3 className="text-black font-black text-lg mb-2">What Can You Buy from McAfee?</h3>
  <p className="text-gray-500 font-medium text-xs mb-8">
    McAfee offers a variety of security products to meet different needs.
  </p>

  <div className="space-y-8">
    {[
      {
        icon: Server,
        title: "Antivirus Protection",
        sub: "Protect your computer against viruses, malware, spyware, ransomware, and other evolving cyber threats."
      },
      {
        icon: ShieldCheck,
        title: "Total Protection",
        sub: "An all-in-one security suite that combines antivirus protection with secure browsing, firewall protection, password management, and identity monitoring."
      },
      {
        icon: Search,
        title: "Identity Protection",
        sub: "Monitor personal information and receive alerts that can help detect potential identity theft or data exposure."
      },
      {
        icon: Cloud,
        title: "Secure VPN",
        sub: "Browse the internet more privately by encrypting your internet connection, especially when using public Wi-Fi networks."
      },
      {
        icon: Lock,
        title: "Password Manager",
        sub: "Generate, store, and manage strong passwords securely across multiple devices."
      },
      {
        icon: LayoutGrid,
        title: "Multi-Device Security",
        sub: "Protect multiple devices under a single subscription, including PCs, Macs, smartphones, and tablets."
      },
      {
        icon: Users,
        title: "Family Security Plans",
        sub: "Choose plans designed to protect multiple users and devices within a household."
      }
    ].map((item, i) => (
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
      {/* Left: Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Protect Your Devices for Less with McAfee Coupon Codes
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Keeping your devices secure doesn't have to be expensive. Whether you want to protect your laptop, smartphone, tablet, or your entire family's devices, McAfee offers a range of cybersecurity solutions designed to safeguard your digital life. Before purchasing a subscription, visit CouponsBit to discover the latest McAfee coupon codes, McAfee promo codes, and exclusive antivirus deals that help you save on trusted security software.
          </p>
          <p>
            With decades of experience in cybersecurity, McAfee is trusted by millions of users worldwide for antivirus protection, identity monitoring, privacy features, and online security tools.
          </p>

          {/* Why Choose McAfee? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose McAfee?</h3>
            <p><strong>Comprehensive Protection:</strong> McAfee helps defend against viruses, malware, ransomware, phishing scams, and other online threats with continuously updated security technology.</p>
            <p><strong>Multi-Platform Support:</strong> Protect Windows PCs, Mac computers, Android smartphones, and iPhones using one security solution.</p>
            <p><strong>Real-Time Threat Detection:</strong> McAfee continuously monitors your device for emerging threats and helps block malicious activity before it causes damage.</p>
            <p><strong>Privacy Features:</strong> Many subscriptions include Secure VPN, identity monitoring, password management, and web protection for enhanced online privacy.</p>
            <p><strong>Easy-to-Use Dashboard:</strong> Manage your devices, subscriptions, and security settings through a simple and user-friendly interface.</p>
            <p><strong>Trusted Global Brand:</strong> With decades of experience in cybersecurity, McAfee remains one of the most recognized names in digital security.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a McAfee Coupon Code</h3>
            <p className="text-gray-700 font-bold">Saving on your McAfee subscription is easy.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit CouponsBit and browse the latest McAfee coupon codes.",
                "Step 2: Choose the offer that matches your preferred subscription.",
                "Step 3: Copy the available promo code.",
                "Step 4: Visit McAfee and select your security plan.",
                "Step 5: Enter the coupon code during checkout if required.",
                "Step 6: Complete your purchase and activate your subscription."
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

          {/* Smart Ways to Save More */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Smart Ways to Save More on McAfee</h3>
            <p><strong>Check CouponsBit Before Buying:</strong> Browse CouponsBit regularly for updated McAfee promo codes and verified offers.</p>
            <p><strong>Choose Annual Plans:</strong> Annual subscriptions often provide better value than paying monthly.</p>
            <p><strong>Watch for Seasonal Sales:</strong> McAfee frequently offers discounts during Black Friday, Cyber Monday, Back-to-School promotions, and holiday sales.</p>
            <p><strong>Select the Right Plan:</strong> Choose a subscription based on the number of devices and security features you actually need.</p>
            <p><strong>Look for Multi-Device Packages:</strong> Family and multi-device plans can be more cost-effective than purchasing separate subscriptions.</p>
          </div>

          {/* Who Should Use McAfee? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Who Should Use McAfee?</h3>
            <p>McAfee is a great choice for:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Home users</li>
              <li>Students</li>
              <li>Families</li>
              <li>Remote workers</li>
              <li>Small business owners</li>
              <li>Online shoppers</li>
              <li>Gamers</li>
              <li>Travelers</li>
              <li>Professionals</li>
              <li>Anyone looking to improve online security</li>
            </ul>
            <p>
              Whether you're protecting one device or several, McAfee offers flexible security solutions for everyday digital protection.
            </p>
          </div>

          {/* Why Use CouponsBit for McAfee Deals? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for McAfee Deals?</h3>
            <p>CouponsBit helps shoppers discover verified discounts across software, technology, travel, fashion, lifestyle, and more.</p>
            <p><strong>Regularly Updated Offers:</strong> We frequently update McAfee coupon codes and promotional deals.</p>
            <p><strong>Verified Discounts:</strong> Find genuine promo codes, exclusive offers, and limited-time antivirus discounts in one place.</p>
            <p><strong>Completely Free:</strong> CouponsBit is free to use whenever you're looking to save money online.</p>
            <p><strong>More Than Cybersecurity:</strong> In addition to McAfee, CouponsBit features savings from hundreds of trusted global brands across software, electronics, web hosting, cloud services, travel, and online shopping.</p>
          </div>

          {/* Stay Protected While Spending Less */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Stay Protected While Spending Less</h3>
            <p>
              Whether you're securing a personal laptop, protecting your family's devices, or looking for a complete cybersecurity solution, McAfee offers reliable protection against today's online threats.
            </p>
            <p>
              Before subscribing, visit CouponsBit to browse the latest McAfee coupon codes, McAfee promo codes, and exclusive antivirus deals so you can enjoy premium digital security at a better price.
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
          {isReadMore ? "Read Less" : "Read More"}{" "}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Frequently Asked Questions */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
          {[
            { q: "What is McAfee?", a: "McAfee is a global cybersecurity company that provides antivirus software, identity protection, VPN services, password management, and multi-device security solutions." },
            { q: "Does McAfee protect against viruses and malware?", a: "Yes. McAfee helps protect devices from viruses, malware, ransomware, spyware, phishing attacks, and other common online threats." },
            { q: "Can I use McAfee on multiple devices?", a: "Yes. Many McAfee subscriptions support multiple devices, including Windows PCs, Macs, Android phones, and iPhones." },
            { q: "Does McAfee include a VPN?", a: "Many McAfee plans include a Secure VPN that helps protect your privacy while browsing online, especially on public Wi-Fi." },
            { q: "Where can I find McAfee coupon codes?", a: "You can find the latest McAfee coupon codes, McAfee promo codes, and exclusive antivirus deals on CouponsBit." },
            { q: "Is CouponsBit free to use?", a: "Absolutely. CouponsBit is completely free and helps users discover verified coupon codes, promo offers, and discounts from trusted global brands." }
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

      {/* Right Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular McAfee Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Total Protection", "Antivirus Plus", "Safe Connect VPN", "Identity Protection", "McAfee Promo Code", "Mobile Security", "Multi-Device Plan", "Renewal Discount"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top McAfee Deals</h3>
          <div className="space-y-6">
            {COUPONS.slice(0, 5).map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">M</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Get McAfee deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
