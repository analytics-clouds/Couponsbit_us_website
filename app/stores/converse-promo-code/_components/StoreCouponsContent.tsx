"use client";

import React, { useState, useEffect } from "react";
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
  Copy,
  ChevronDown,
  MapPin,
  Globe,
  CheckCircle,
  Plane,
  Tv,
  Code,
  LayoutGrid,
  Zap,
  Laptop,
  Compass,
  Wifi,
  Package,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

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

const COUPONS: Coupon[] = [
  {
    id: "c1",
    discount: "50%",
    label: "SAVE",
    title: "50% Off Chuck Taylor Leather Platform – Just $36",
    heading: "Save 50% OFF",
    sub: "CHUCK TAYLOR",
    description: "Give your daily look a lift with the Chuck Taylor Leather Platform, now just $36, down from the regular $72. The leather upper looks classic and holds up to daily wear.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c2",
    discount: "40%",
    label: "SAVE",
    title: "40% Off Chuck Taylor Dainty Canvas – Just $29",
    heading: "Save 40% OFF",
    sub: "DAINTY CANVAS",
    description: "Get the classic Converse look with the Chuck Taylor Dainty Canvas, just $29 instead of the regular $48. The slim, low-profile shape goes with almost anything in your closet.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c3",
    discount: "50%",
    label: "SAVE",
    title: "50% Off Chuck Taylor Tonal Leather – Just $30",
    heading: "Save 50% OFF",
    sub: "TONAL LEATHER",
    description: "Freshen up your shoe rotation with the Chuck Taylor Tonal Leather, now $30 instead of the regular $60. The smooth leather gives it a neat, polished look for everyday wear.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c4",
    discount: "80%",
    label: "SAVE",
    title: "80% Off Daily Paper Cropped Shirt – Just $17",
    heading: "Save 80% OFF",
    sub: "APPAREL",
    description: "Grab one of the biggest Converse deals around with the Daily Paper Cropped Shirt, just $17 instead of $84. The official Converse x Daily Paper design brings standout streetwear style.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c5",
    discount: "30%",
    label: "SAVE",
    title: "30% Off Converse SC25 – Just $46",
    heading: "Save 30% OFF",
    sub: "CONVERSE SC25",
    description: "Update your casual shoe lineup with the Converse SC25, on sale today for $46 instead of the regular $66. Built to feel light on your feet with a classic Converse look.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Up To 75% OFF", href: "/stores/etsy-coupon-code" },
  { name: "Spirit Halloween", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699426/spirti-logo_x4nbor.webp", dealText: "Up To 75% OFF", href: "/stores/spirit-halloween-discount-code" },
  { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra OFF", href: "/stores/home-depot-discount-code" },
];

export default function ConverseCouponsContent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

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

      <main>
        {/* Section 1: Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Converse</span>
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
                  <a href="https://www.converse.com" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1793338495/converse-logo_zpgzpr.webp"
                        alt="Converse"
                        width={112}
                        height={112}
                        sizes="112px"
                        className="w-full h-full object-contain"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Converse Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-60" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(22.1k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find the latest Converse discount code and Converse promo code for October 2026 to save on sneakers, apparel, bags, and accessories. Grab 80% OFF the Daily Paper Cropped Shirt, 60% OFF Festival Button-Up and Collegiate Cropped T-Shirts, 50% OFF Chuck Taylor Leather Platform sneakers, and 50% OFF Chuck Taylor Tote Bags. Shop iconic Converse footwear, clothing, and limited-edition collections while applying a verified Converse discount code or promo code at checkout to maximize your savings.
                    </p>
                    <a
                      href="https://www.converse.com"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "5", label: "Coupons" },
                    { icon: Percent, val: "5", label: "Deals" },
                    { icon: Users, val: "8M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" },
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

              {/* Right: Banner Slider */}
              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  {[0, 1, 2].map((idx) => (
                    <div
                      key={idx}
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{ opacity: activeSlide === idx ? 1 : 0 }}
                    >
                      <a href="https://www.converse.com" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                        <img
                          src="https://res.cloudinary.com/couponsbit/image/upload/v1793338495/converse-logo_zpgzpr.webp"
                          alt="Converse Promo Code"
                          width={800}
                          height={350}
                          className="w-full h-full object-contain bg-[#f5f5f5]"
                          fetchPriority={idx === 0 ? "high" : undefined}
                          loading={idx === 0 ? undefined : "lazy"}
                        />
                      </a>
                    </div>
                  ))}

                  <button
                    onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5 text-white rotate-180" />
                  </button>
                  <button
                    onClick={() => setActiveSlide((prev) => (prev + 1) % 3)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={cn("w-1.5 h-1.5 rounded-full transition-all", activeSlide === i ? "bg-white w-4" : "bg-white/40")}
                      />
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
                { icon: RefreshCw, title: "Updated Daily", sub: "New offers every single day" },
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

        {/* Section 4: Coupons + Sidebar */}
        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Left: Coupon Cards */}
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Converse Coupon Codes & Offers</h2>
                </div>

                {/* Coupon 1 — 50% Off Chuck Taylor Leather Platform */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">50%</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">CHUCK TAYLOR</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Converse Discount Code: 50% Off Chuck Taylor Leather Platform</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Give your daily look a lift with the Chuck Taylor Leather Platform, now just $36.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Half off: pay $36 instead of the regular $72.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>The leather upper looks classic and holds up to daily wear.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A thick platform sole adds height without sacrificing comfort.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Easy to pair with casual outfits, weekend plans, or your daily routine.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.converse.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Converse deal: 50% Off Chuck Taylor Leather Platform" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon 2 — 40% Off Chuck Taylor Dainty Canvas */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">40%</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">DAINTY CANVAS</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Converse Promo Code: 40% Off Chuck Taylor Dainty Canvas</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get the classic Converse look with the Chuck Taylor Dainty Canvas, just $29.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save 40% and pay $29 instead of the regular $48.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>The light canvas upper stays comfortable from morning to night.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Its slim, low-profile shape goes with almost anything in your closet.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A reliable sneaker for the office, campus, or your next trip.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.converse.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Converse deal: 40% Off Chuck Taylor Dainty Canvas" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon 3 — 50% Off Chuck Taylor Tonal Leather */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">50%</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">TONAL LEATHER</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Converse Promo Code: 50% Off Chuck Taylor Tonal Leather</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Freshen up your shoe rotation with the Chuck Taylor Tonal Leather, now $30.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Pay just $30 instead of the regular $60, a 50% savings.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>The smooth leather gives it a neat, polished look.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A sturdy rubber outsole grips well on daily walks.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A flexible choice for anyone who wants an easy, everyday sneaker.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.converse.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Converse deal: 50% Off Chuck Taylor Tonal Leather" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon 4 — 80% Off Daily Paper Cropped Shirt */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">80%</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">APPAREL</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Converse Discount Code: 80% Off Daily Paper Cropped Shirt</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Grab one of the biggest Converse deals around with the Daily Paper Cropped Shirt, just $17.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save 80% and pay $17 instead of the regular $84.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>The official Converse x Daily Paper design brings standout streetwear style.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Light fabric feels comfortable day after day.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A great deal for fans of limited-edition clothing.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.converse.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Converse deal: 80% Off Daily Paper Cropped Shirt" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon 5 — 30% Off Converse SC25 */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">30%</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">CONVERSE SC25</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Converse Discount Deals: 30% Off Converse SC25</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Update your casual shoe lineup with the Converse SC25, on sale today for $46.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Take 30% off and pay $46 instead of the regular $66.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Built to feel light on your feet from start to finish.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>The classic Converse look works with nearly any outfit.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for daily wear and relaxed outings.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.converse.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Converse deal: 30% Off Converse SC25" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">

                <div className="w-full flex justify-center mb-6">
                  <a
                    href="https://www.google.com/preferences/source?q=couponsbit.us"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                  >
                    <Image
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png"
                      alt="Add as a preferred source on Google"
                      width={280}
                      height={70}
                      className="w-full max-w-[260px] h-auto object-contain"
                      priority
                    />
                  </a>
                </div>

                {/* About Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">What Is Converse?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Converse is an American footwear and apparel brand best known for its iconic Chuck Taylor All Star sneakers. Its collection includes classic canvas shoes, Chuck 70 styles, platform sneakers, slip-ons, boots, clothing, and accessories for men, women, and kids. The brand also releases special collaborations and limited-edition designs for shoppers looking for something distinctive. 

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Converse sneakers work with a wide range of outfits, from jeans and T-shirts to dresses, skirts, and streetwear-inspired looks. Whether you're shopping for an everyday staple or a statement pair, you can explore different colours, silhouettes, and materials to suit your style.

                  </p>
                  
                  <a href="https://www.converse.com" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Categories Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Plane,  name: "Travel",             count: "420+", color: "text-teal-500",   href: "/categories/travel" },
                      { icon: Laptop, name: "Electronics",        count: "850+", color: "text-blue-500",   href: "/categories/electronics" },
                      { icon: Tv,     name: "Entertainment",      count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                      { icon: Code,   name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                      { icon: Zap,    name: "Mobile & Telecom",   count: "320+", color: "text-green-500",  href: "/categories/mobile" },
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

                {/* How to Use Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    Find the Latest Converse Promo Code on CouponsBit
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Want to save on your next Converse purchase? Check CouponsBit for available Converse promo codes and offers. Depending on the promotion, a valid code may help you save on eligible footwear, apparel, or other products.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Here are some ways to find an offer:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>New-customer offers:</strong> Check whether Converse provides a sign-up promotion for your region.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Seasonal sales:</strong> Look for deals during major shopping events and end-of-season sales.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Birthday rewards:</strong> Eligible registered customers may receive a birthday offer, subject to the applicable terms.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Student discounts:</strong> Check whether a student discount is available in your country and complete any required verification.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Special promotions:</strong> Explore limited-time offers on selected collections or products.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Converse offers vary by country. For example, Converse India lists a sign-up discount for first orders and a birthday offer for eligible customers, while the US website lists separate promotional terms for email subscribers and verified students. Always check the terms for your local Converse store before using an offer.
    </p>
  </div>
</div>

              </div>
            </div>
          </div>
        </section>

        {/* Section 5: More Stores */}
        <section className="py-20 bg-white border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-black text-black mb-10">More Stores You&apos;ll Love</h2>
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

        {/* Section 6: SEO + FAQ */}
        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Converse Promo Code: Save on Sneakers, Clothing & Accessories
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        [
          "Converse Chuck Taylor Leather Platform Sale",
          "50% OFF ($36)",
          "All Users",
          "Reduced from $72 regular price. Classic leather upper with thick platform sole.",
          "Chuck Taylor Leather Platform"
        ],
        [
          "Converse Chuck Taylor Shoreline Knit",
          "20% OFF (From $43)",
          "All Users",
          "Reduced from $54 regular price. Breathable soft knit fabric slip-on design.",
          "Chuck Taylor Shoreline Knit"
        ],
        [
          "Converse Chuck Taylor Dainty Canvas Sale",
          "40% OFF ($29)",
          "All Users",
          "Reduced from $48 regular price. Light canvas upper with a slim, low-profile fit.",
          "Chuck Taylor Dainty Canvas"
        ],
        [
          "Converse Chuck Taylor Tonal Leather Sale",
          "50% OFF ($30)",
          "All Users",
          "Reduced from $60 regular price. Smooth leather design with sturdy rubber outsole.",
          "Chuck Taylor Tonal Leather"
        ],
        [
          "Converse SC25 Shoes Sale",
          "30% OFF ($46)",
          "All Users",
          "Reduced from $66 regular price. Lightweight feel with classic Converse styling.",
          "Converse SC25"
        ],
        [
          "Converse Dainty Lucky Leather Sale",
          "40% OFF ($36)",
          "All Users",
          "Reduced from $60 regular price. Durable leather upper with a lightweight build.",
          "Dainty Lucky Leather"
        ],
        [
          "Converse Run Star Trainer Pony Hair Sale",
          "50% OFF ($54)",
          "All Users",
          "Reduced from $108 regular price. Pony hair detail with cushioned soles.",
          "Run Star Trainer Pony Hair"
        ],
        [
          "Converse Dainty Lucky Metallic Sale",
          "40% OFF ($36)",
          "All Users",
          "Reduced from $60 regular price. Shiny metallic finish on a lightweight frame.",
          "Dainty Lucky Metallic"
        ],
        [
          "Converse x Liverpool FC Scarf Deal",
          "50% OFF ($30)",
          "All Users",
          "Reduced from $60 regular price. Official collaboration piece made with soft fabric.",
          "Liverpool FC Scarf"
        ],
        [
          "Converse Chuck Taylor Embroidered Stars",
          "30% OFF ($46)",
          "All Users",
          "Reduced from $66 regular price. Stitched star detailing on sturdy canvas.",
          "Chuck Taylor Embroidered Stars"
        ],
        [
          "Converse Chuck Taylor Tote Bag Sale",
          "50% OFF (From $14)",
          "All Users",
          "Reduced from $28 regular price. Roomy main compartment made with durable materials.",
          "Chuck Taylor Tote Bag"
        ],
        [
          "Converse Cropped Parachute Shirt Sale",
          "50% OFF ($24)",
          "All Users",
          "Reduced from $48 regular price. Relaxed fit cut from light, breathable fabric.",
          "Cropped Parachute Shirt"
        ],
        [
          "Converse Festival Button-Up T-Shirt",
          "60% OFF ($24)",
          "All Users",
          "Reduced from $60 regular price. Soft, breathable button-up casual top.",
          "Festival Button-Up T-Shirt"
        ],
        [
          "Converse Collegiate Cropped T-Shirt",
          "60% OFF ($9)",
          "All Users",
          "Reduced from $22 regular price. Soft cotton construction with a cropped cut.",
          "Collegiate Cropped T-Shirt"
        ],
        [
          "Converse x Daily Paper Cropped Shirt",
          "80% OFF ($17)",
          "All Users",
          "Reduced from $84 regular price. Official streetwear collaboration piece.",
          "Daily Paper Cropped Shirt"
        ],
        [
          "Converse Star Chevron Fleece Shorts",
          "70% OFF ($11)",
          "All Users",
          "Reduced from $36 regular price. Standard fit soft fleece shorts.",
          "Star Chevron Fleece Shorts"
        ],
        [
          "Converse Chuck Taylor Patch Cropped Tee",
          "60% OFF ($9)",
          "All Users",
          "Reduced from $22 regular price. Soft cotton shirt featuring the classic patch graphic.",
          "Chuck Taylor Patch Cropped T-Shirt"
        ]
      ].map((row, i, arr) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === arr.length - 1 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for a Converse promo code to save on your next pair of sneakers? Whether you love classic Chuck Taylor All Star shoes, Chuck 70s, platform sneakers, or everyday streetwear, Converse offers plenty of ways to refresh your wardrobe. On CouponsBit, you can explore available Converse promo codes, deals, and offers before placing your order.
          </p>
          <p>
            From timeless canvas sneakers to modern designs and casual clothing, Converse combines iconic style with everyday versatility. Before checking out, compare available offers and look for a valid promo code that applies to your selected products.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Shop Popular Converse Collections
          </h3>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Chuck Taylor All Star
          </h4>
          <p>
            The Chuck Taylor All Star remains one of Converse's most recognisable styles. Available in different colours and high-top or low-top designs, these sneakers are a versatile choice for everyday outfits.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Chuck 70
          </h4>
          <p>
            The Chuck 70 offers a distinctive take on the classic Converse silhouette. Explore different colours and finishes to find a pair that fits your personal style.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Platform Sneakers
          </h4>
          <p>
            Want to add some height to your look? Converse platform sneakers bring a bolder profile to the brand's familiar designs and pair well with casual and streetwear outfits.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Clothing and Accessories
          </h4>
          <p>
            Converse also offers casual apparel and accessories, including T-shirts, jackets, sweatshirts, pants, bags, backpacks, hats, socks, and laces. Browse the available collections to complete your everyday look.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use a Converse Promo Code
          </h3>
          <p>
            Applying a Converse promo code is simple. Follow these steps to check whether your discount works:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit the relevant Converse website for your country.</li>
            <li>Browse the available products and add your chosen items to the cart.</li>
            <li>Open your cart or proceed to checkout.</li>
            <li>Find the promo code field and enter your valid Converse code.</li>
            <li>Select Apply and check whether the order total changes.</li>
            <li>Review the final amount and complete your purchase if you're happy with the offer.</li>
          </ol>
          <p>
            If the code doesn't work, check its expiry date, eligible products, minimum-spend requirements, and other restrictions. Some offers cannot be combined with additional promotions or applied to excluded products.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Tips to Get Better Converse Deals
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Compare sale items with full-price products:</strong> Check whether the promotion applies to both categories.</li>
            <li><strong>Sign up for brand updates:</strong> Converse may share new launches and promotional offers with subscribers.</li>
            <li><strong>Check exclusions:</strong> Limited-edition products, gift cards, and selected collections may be excluded from certain promotions.</li>
            <li><strong>Review shipping and returns:</strong> Check the delivery options and return policy for your regional website before ordering.</li>
            <li><strong>Shop for your needs:</strong> Compare styles, colours, and materials instead of choosing a pair based only on the discount.</li>
          </ul>
          <p>
            Taking a few minutes to review the terms can help you choose the right pair and avoid disappointment at checkout.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Save on Your Next Converse Purchase with CouponsBit
          </h3>
          <p>
            From classic Chuck Taylor sneakers to platform shoes, clothing, and accessories, Converse has styles for different tastes and occasions. Before placing your order, visit CouponsBit to explore available Converse promo codes, seasonal deals, and special offers.
          </p>
          <p>
            Compare your options, check the terms, and apply an eligible code at checkout to make your next Converse shopping experience more rewarding.
          </p>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQ Section */}
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions
          </h3>
          {[
            {
              q: "Where can I find a Converse promo code?",
              a: "Visit CouponsBit to check available Converse promo codes and deals. You can also check the official Converse website and its promotional emails for current offers."
            },
            {
              q: "Does Converse offer a discount for new customers?",
              a: "Converse India lists a sign-up offer for eligible first orders. The offer is subject to its terms, including product exclusions and a maximum discount. Check the local website for the latest details."
            },
            {
              q: "Can I use more than one Converse promo code?",
              a: "Some Converse promotions cannot be combined with other discounts. Check the terms of your specific offer before applying it at checkout."
            },
            {
              q: "Why is my Converse promo code not working?",
              a: "Your code may have expired, may not apply to the products in your cart, or may require specific eligibility. Check that you entered it correctly and review the offer's terms."
            },
            {
              q: "Does Converse offer student discounts?",
              a: "Converse lists a student discount on its US website for eligible students who complete the required verification. Availability and conditions can vary by region."
            }
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
        {/* Tag Cloud */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Converse Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Converse Promo Code",
              "Chuck Taylor All Star",
              "Chuck 70 Deals",
              "Platform Sneakers",
              "Student Discount",
              "First Order Discount",
              "Casual Streetwear Sale",
              "Free Delivery Offers"
            ].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Converse Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "FIRST ORDER DISCOUNT",
                sub: "Sign up for emails and save on your first order",
              },
              {
                heading: "CHUCK TAYLOR SALE",
                sub: "Discounts on iconic high-top and low-top styles",
              },
              {
                heading: "STUDENT & MILITARY",
                sub: "Exclusive verified discounts on eligible items",
              },
              {
                heading: "CLEARANCE STYLES",
                sub: "Up to 50% off selected sneakers & apparel",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  C
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                    {deal.heading}
                  </p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">
                    {deal.sub}
                  </p>
                </div>
                <a
                  href="https://www.converse.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Converse: ${deal.heading}`}
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
