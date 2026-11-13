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
  Clock, Heart,
  Copy, 
  ChevronDown, 
  Package, 
  Truck, 
  Shield, 
  Laptop, 
  Shirt, Sun, Monitor, Glasses, User,
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
import { SUNGAIT_COUPONS, Coupon } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Rayneo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/reyneo-coupon-code_q3crak.webp", dealText: "Save $130 OFF", href: "/stores/rayneo-discount-code" },
  { name: "Fytoo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp", dealText: "Frames From $1", href: "/stores/fytoo-discount-code" },
  { name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/vooglam-logo_qe8mis.webp", dealText: "Eyeglasses From $65", href: "/stores/vooglam-discount-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Bamboocool", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp", dealText: "Up To 25% OFF", href: "/stores/bamboocool-discount-code" },
  { name: "Aporro", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp", dealText: "Save Up To 45% OFF", href: "/stores/aporro-discount-code" },
];

export default function SungaitCouponsContent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (coupon: Coupon) => {
    if (coupon.code) {
      navigator.clipboard.writeText(coupon.code);
      setToastCode(coupon.code);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
    setActiveModalCoupon(coupon);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      {/* Copy Modal */}
      {showModal && activeModalCoupon && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-[32px] shadow-2xl p-8 max-w-sm w-full relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-5 right-5 text-gray-400 hover:text-black transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-6">
              <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <h3 className="text-black font-black text-xl mb-1">Your Deal is Ready!</h3>
              <p className="text-gray-500 text-sm font-bold">{activeModalCoupon.title}</p>
            </div>
            {activeModalCoupon.code ? (
              <div className="bg-[#f5f5f5] rounded-2xl p-4 flex items-center justify-between gap-3 mb-5">
                <span className="font-black text-black text-lg tracking-widest">{activeModalCoupon.code}</span>
                <button onClick={() => { navigator.clipboard.writeText(activeModalCoupon.code); setToastCode(activeModalCoupon.code); setShowToast(true); setTimeout(() => setShowToast(false), 2000); }} className="bg-[#056bfa] text-white p-2 rounded-xl hover:bg-[#005f91] transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="bg-[#f5f5f5] rounded-2xl p-4 text-center mb-5">
                <span className="text-gray-500 font-bold text-sm">No code needed – discount applied automatically</span>
              </div>
            )}
            <a href="https://sungaitcn.pxf.io/c/6434050/3933369/54145?subId1=986" target="_blank" rel="nofollow noopener noreferrer" className="w-full bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-base px-6 py-4 rounded-2xl shadow-md transition-all duration-300 text-center flex items-center justify-center gap-2">
              Visit Store <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

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
              <span className="text-black font-extrabold">Sungait</span>
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
                  <a href="https://sungaitcn.pxf.io/c/6434050/3933369/54145?subId1=986" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/sungait-logo_tfolql.webp" alt="Sungait" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Sungait Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Upgrade your everyday eyewear with the latest SUNGAIT promo code and save up to 50% on Polygon Aviator Sunglasses, now available for just $14.99. Use code CLOUDS15 at checkout to get an extra 15% off eligible orders and enjoy even bigger savings. These verified discount code offers are regularly updated for Nov 2026, helping you spend less on polarized sunglasses, aviators, driving glasses, and other stylish eyewear designed for daily comfort and UV protection.
                    </p>
                    <a
                      href="https://sungaitcn.pxf.io/c/6434050/3933369/54145?subId1=986"
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
                    <a href="https://sungaitcn.pxf.io/c/6434050/3933369/54145?subId1=986" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1785148962/sungait-promo-code_gj3nf9.webp" alt="Sungait Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://sungaitcn.pxf.io/c/6434050/3933369/54145?subId1=986" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1785148962/sungait-voucher-code_wsc1sa.webp" alt="Sungait Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://sungaitcn.pxf.io/c/6434050/3933369/54145?subId1=986" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1785148961/sungait-discount-code_s8t5pc.webp" alt="Sungait Voucher Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
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
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Sungait Coupon Codes & Offers</h2>
                  
                </div>

                

                {/* Coupon 1 */}
                {SUNGAIT_COUPONS.map((coupon) => (
                  <div key={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">{coupon.topLabel}</p>
                            <div className={`font-extrabold leading-none mt-2 ${coupon.valueFontClass ?? "text-[18px] sm:text-4xl"}`}>{coupon.mainValue}</div>
                            <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">{coupon.offText}</p>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                          <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                            </div>
                            <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">{coupon.title}</h2>
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">{coupon.description}</p>
                            <button type="button" onClick={() => setExpandedCouponId(expandedCouponId === coupon.id ? null : coupon.id)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                              View Details
                              <ChevronDown size={16} className={`transition-transform duration-300 ${expandedCouponId === coupon.id ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${expandedCouponId === coupon.id ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {coupon.points.map((point, pi) => (
                                  <li key={pi} className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>{point}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                            <button onClick={() => handleCopy(coupon)} aria-label={`Get Sungait deal: ${coupon.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
                  <h3 className="text-black font-black text-lg mb-6">About Sungait</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Sungait is an eyewear brand that focuses on delivering affordable, stylish, and functional glasses for everyday use. The brand is best known for its polarized sunglasses that help reduce glare and provide UV protection, making them suitable for driving, <Link href="/stores/wiskii-discount-code" className="text-[#056bfa] hover:underline">outdoor activities, sports</Link>, and casual wear.
                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    In addition to sunglasses, Sungait offers blue light glasses for digital device users, <Link href="/stores/vooglam-discount-code" className="text-[#056bfa] hover:underline">reading glasses</Link>, and a variety of accessories. By combining classic designs with modern materials, the brand provides comfortable eyewear that suits different face shapes, lifestyles, and personal preferences.
                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Whether you're looking for fashion-forward frames or practical eye protection, Sungait offers options designed to balance style, durability, and value.
                  </p>
                  <a href="https://sungaitcn.pxf.io/c/6434050/3933369/54145?subId1=986" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <h3 className="text-black font-black text-lg mb-2">What Can You Buy from Sungait?</h3>
  <p className="text-gray-500 font-medium text-xs mb-8">
    Sungait offers eyewear for different needs and occasions.
  </p>

  <div className="space-y-8">
    {[
      {
        icon: Sun,
        title: "Polarized Sunglasses",
        sub: "Browse polarized sunglasses that help reduce glare while providing UV protection for driving, fishing, cycling, hiking, and outdoor activities."
      },
      {
        icon: Monitor,
        title: "Blue Light Blocking Glasses",
        sub: "Reduce exposure to blue light from computers, smartphones, and tablets with glasses designed for work, gaming, and extended screen time."
      },
      {
        icon: Glasses,
        title: "Reading Glasses",
        sub: "Choose from a range of reading glasses available in different magnification strengths and frame styles."
      },
      {
        icon: Sparkles,
        title: "Fashion Eyewear",
        sub: "Explore stylish frames designed for everyday wear, combining comfort with modern aesthetics."
      },
      {
        icon: User,
        title: "Men's Sunglasses",
        sub: "Find classic and contemporary designs suitable for casual, business, travel, and outdoor lifestyles."
      },
      {
        icon: Heart,
        title: "Women's Sunglasses",
        sub: "Discover fashionable sunglasses available in various shapes, colors, and frame materials."
      },
      {
        icon: ShoppingBag,
        title: "Eyewear Accessories",
        sub: "Shop protective cases, cleaning cloths, storage pouches, and other accessories to help maintain your eyewear."
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
      {/* Left: Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Sungait Discount Code, Voucher & Promo Code Offers
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
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Vintage Round Sunglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $17.99</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">UV protection, lightweight</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sunglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Retro Wooden Sunglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">$37.99 (Save $10)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Polarized lens protection</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sunglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Night Driving Sunglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">$18.99 (Save $10)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Reduces glare, metal frame</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sunglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Unisex Square Sunglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $17.99 (Save up to $11)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Blocks harmful UV rays</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sunglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Sitewide Orders Over $35</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 10%</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Valid on eligible products</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">All Products</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Sitewide Orders Over $55</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 15%</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Bigger savings, multi-pair</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">All Products</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Real Glass Lens Sunglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">$37.99 (Save $10)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Crystal-clear vision, UV protection</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sunglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Hollow Geometric Aviator Sunglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">$19.99 (Save $10)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Lightweight aviator design</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sunglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Polygon Aviator Sunglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">$14.99 (Save 50%)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Durable, premium UV protection</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sunglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Join & First Order Bonus</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 5%</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">New customers only</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">All Products</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Sitewide With Code CLOUDS15</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 15%</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Use code CLOUDS15 at checkout</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">All Products</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <h3 className="text-xl font-black text-[#056bfa]">
            Save More on Eyewear with a Sungait Discount Code
          </h3>
          <p>
            Looking for stylish sunglasses without overspending? Sungait offers a wide selection of polarized <Link href="/stores/fytoo-discount-code">sunglasses</Link>, blue light blocking glasses, reading glasses, and eyewear accessories designed for everyday comfort and protection. Whether you're driving, traveling, working outdoors, or spending long hours in front of a screen, Sungait provides functional eyewear for men and women.
          </p>
          <p>
            Before you place your order, visit CouponsBit to find the latest Sungait discount code, Sungait voucher, Sungait promo code, and Sungait coupon code. Applying a valid offer at checkout can help you save on your next eyewear purchase.
          </p>

          {/* Why Choose Sungait? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose Sungait?</h3>
            <p><strong>Polarized Lens Technology:</strong> Many Sungait sunglasses feature polarized lenses that help minimize glare from roads, water, and reflective surfaces for clearer vision.</p>
            <p><strong>UV Protection:</strong> Designed to help protect your eyes from harmful UV rays during outdoor activities.</p>
            <p><strong>Comfortable Designs:</strong> Lightweight frames and ergonomic designs provide comfort for extended daily wear.</p>
            <p><strong>Stylish Collection:</strong> Choose from a variety of timeless and modern frame styles suitable for different face shapes and personal preferences.</p>
            <p><strong>Affordable Pricing:</strong> Sungait offers quality eyewear at budget-friendly prices, making it easier to own multiple pairs for different occasions.</p>
            <p><strong>Everyday Versatility:</strong> Whether you're commuting, traveling, exercising, or relaxing outdoors, Sungait eyewear is designed to fit a wide range of lifestyles.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Sungait Discount Code</h3>
            <p className="text-gray-700 font-bold">Saving on your purchase is easy.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit CouponsBit and browse the latest Sungait discount code, voucher, promo code, and coupon code offers.",
                "Step 2: Choose the offer that best matches your purchase.",
                "Step 3: Copy the available promotional code.",
                "Step 4: Visit Sungait and add your preferred eyewear to your shopping cart.",
                "Step 5: Enter the discount code during checkout if applicable.",
                "Step 6: Complete your purchase and enjoy additional savings."
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

          {/* Smart Ways to Save More at Sungait */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Smart Ways to Save More at Sungait</h3>
            <p><strong>Check CouponsBit Before Shopping:</strong> CouponsBit regularly updates verified Sungait discount codes, vouchers, promo codes, and exclusive offers.</p>
            <p><strong>Shop During Seasonal Sales:</strong> Watch for discounts during Black Friday, Cyber Monday, holiday promotions, and other seasonal shopping events.</p>
            <p><strong>Buy Multiple Pairs:</strong> Purchasing sunglasses and blue light glasses together can be a convenient way to build your eyewear collection while maximizing promotional offers.</p>
            <p><strong>Sign Up for Brand Updates:</strong> Subscribe to receive notifications about new product launches, exclusive offers, and upcoming sales.</p>
            <p><strong>Shop Early for Gifts:</strong> Sungait eyewear makes a practical gift for birthdays, holidays, Father's Day, Mother's Day, and other special occasions.</p>
          </div>

          {/* Who Should Buy Sungait Products? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Who Should Buy Sungait Products?</h3>
            <p>Sungait eyewear is ideal for:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Drivers</li>
              <li>Outdoor enthusiasts</li>
              <li>Travelers</li>
              <li>Office professionals</li>
              <li>Students</li>
              <li>Gamers</li>
              <li>Cyclists</li>
              <li>Beachgoers</li>
              <li>Fashion-conscious shoppers</li>
              <li>Anyone looking for affordable eye protection</li>
            </ul>
            <p>
              Whether you need sunglasses for outdoor adventures or blue light glasses for work, Sungait offers practical eyewear for everyday use.
            </p>
          </div>

          {/* Why Use CouponsBit for Sungait Deals? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Sungait Deals?</h3>
            <p>CouponsBit helps shoppers discover verified savings from trusted fashion, lifestyle, and eyewear brands.</p>
            <p><strong>Frequently Updated Offers:</strong> We regularly update Sungait discount codes, vouchers, promo codes, and special promotions.</p>
            <p><strong>Verified Discounts:</strong> Browse trusted coupon codes and limited-time offers in one convenient location.</p>
            <p><strong>Completely Free:</strong> CouponsBit is free to use whenever you're looking to save on eyewear and accessories.</p>
            <p><strong>More Than Fashion Deals:</strong> Besides Sungait, CouponsBit features savings on fashion, electronics, travel, beauty, home essentials, software, and hundreds of other leading brands.</p>
          </div>

          {/* Upgrade Your Eyewear While Spending Less */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Upgrade Your Eyewear While Spending Less</h3>
            <p>
              Whether you're looking for polarized sunglasses for your next road trip, blue light glasses for work, or stylish everyday eyewear, Sungait offers affordable options that combine comfort, protection, and style.
            </p>
            <p>
              Before completing your purchase, visit CouponsBit to grab the latest Sungait discount code, Sungait voucher, Sungait promo code, and Sungait coupon code. It's an easy way to enjoy quality eyewear while saving more on your order.
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
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
          {[
            { q: "What is Sungait?", a: "Sungait is an eyewear brand that offers polarized sunglasses, blue light blocking glasses, reading glasses, and eyewear accessories designed for everyday use." },
            { q: "Does Sungait sell polarized sunglasses?", a: "Yes. Sungait offers a wide range of polarized sunglasses that help reduce glare and provide UV protection for outdoor activities and driving." },
            { q: "Are Sungait blue light glasses suitable for computer use?", a: "Yes. Sungait blue light blocking glasses are designed to help reduce exposure to blue light from digital devices such as computers, smartphones, and tablets." },
            { q: "Where can I find a Sungait discount code?", a: "You can find the latest Sungait discount code, Sungait voucher, Sungait promo code, and Sungait coupon code on CouponsBit before making your purchase." },
            { q: "Does Sungait offer eyewear for both men and women?", a: "Yes. Sungait offers a variety of sunglasses and eyewear styles for men and women." },
            { q: "Is CouponsBit free to use?", a: "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted global brands." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Sungait Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Sungait Promo Code", "Polarized Sunglasses", "Blue Light Glasses", "Sungait Voucher", "Driving Glasses", "UV Protection Eyewear", "Reading Glasses", "Fashion Eyewear"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Sungait Deals</h3>
          <div className="space-y-6">
            {SUNGAIT_COUPONS.slice(0, 5).map((coupon, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">S</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{coupon.topLabel} {coupon.mainValue}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{coupon.title}</p>
                </div>
                <button onClick={() => handleCopy(coupon)} aria-label={`Get Sungait deal: ${coupon.title}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</button>
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
