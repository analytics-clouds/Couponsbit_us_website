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
  Laptop, Glasses, Monitor, Sun, Eye,Sliders,
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
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VOOGLAM_COUPONS, Coupon } from "./offers";

// --- Types ---
interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

// --- Data ---

const RELATED_STORES: StoreItem[] = [
  { name: "Rayneo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/reyneo-coupon-code_q3crak.webp", dealText: "Save $130 OFF", href: "/stores/rayneo-discount-code" },
  { name: "Fytoo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp", dealText: "Frames From $1", href: "/stores/fytoo-discount-code" },
  { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/sungait-logo_tfolql.webp", dealText: "Up To 50% OFF", href: "/stores/sungait-discount-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Bamboocool", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp", dealText: "Up To 25% OFF", href: "/stores/bamboocool-discount-code" },
  { name: "Aporro", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp", dealText: "Save Up To 45% OFF", href: "/stores/aporro-discount-code" },
];

export default function VooglamCouponsContent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);

  // Slide auto-play
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
      {/* Copy Modal */}
      {showModal && activeModalCoupon && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative bg-white rounded-[32px] shadow-2xl p-8 max-w-sm w-full z-10" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100">
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f0fdf4] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#22c55e]" />
              </div>
              <h3 className="text-black font-black text-xl mb-2">{activeModalCoupon.title}</h3>
              {activeModalCoupon.code ? (
                <>
                  <p className="text-gray-500 font-bold text-sm mb-4">Your code is ready. Copy it below:</p>
                  <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-6 flex items-center justify-between gap-3">
                    <span className="text-black font-black text-lg font-mono tracking-widest">{activeModalCoupon.code}</span>
                    <button onClick={() => { navigator.clipboard.writeText(activeModalCoupon!.code); setToastCode(activeModalCoupon!.code); setShowToast(true); setTimeout(() => setShowToast(false), 2000); }} className="bg-[#056bfa] text-white px-4 py-2 rounded-xl font-black text-sm flex items-center gap-1.5 hover:bg-[#005f91] transition-colors">
                      <Copy className="w-4 h-4" /> Copy
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-gray-500 font-bold text-sm mb-6">No code needed. Click below to visit the store.</p>
              )}
              <a href="https://performance.gotrackier.com/click?campaign_id=4641&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full bg-[#056bfa] hover:bg-[#005f91] text-white font-black text-base py-3.5 rounded-2xl transition-colors text-center">
                Visit Store <ExternalLink className="w-4 h-4 inline ml-1" />
              </a>
            </div>
          </div>
        </div>
      )}
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
              <span className="text-black font-extrabold">Vooglam</span>
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
                  <a href="https://performance.gotrackier.com/click?campaign_id=4641&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/vooglam-logo_qe8mis.webp" alt="Vooglam" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Vooglam Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Looking for the latest Vooglam promo code? Save on premium eyewear with verified offers available throughout Nov 2026. Enjoy 20% off Charisse Eyeglasses, shop stylish Ando, Loos, Scarpa, and Meridian eyeglasses from just $65, grab Ando Aviator Sunglasses for $100, or pick up Razor Rectangle Black Sunglasses for $108.50. Personalize your frames with 20 lens tint options and explore the latest Vooglam discount codes, coupons, and voucher deals to save on fashionable eyewear for every occasion.
                    </p>
                    <a
                      href="https://performance.gotrackier.com/click?campaign_id=4641&pub_id=1015"
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
                    <a href="https://performance.gotrackier.com/click?campaign_id=4641&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784716897/vooglam-promo-code_igfpgi.webp" alt="Vooglam Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://performance.gotrackier.com/click?campaign_id=4641&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784716896/vooglam-discount-code_ay4ero.webp" alt="Vooglam Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://performance.gotrackier.com/click?campaign_id=4641&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784716896/vooglam-voucher-code_p2e1ew.webp" alt="Vooglam Voucher Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Vooglam Coupon Codes & Offers</h2>
                  
                </div>

                

                {VOOGLAM_COUPONS.map((coupon) => (
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
                            <button onClick={() => handleCopy(coupon)} aria-label={`Get Vooglam deal: ${coupon.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</button>
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
                  <h3 className="text-black font-black text-lg mb-6">About Vooglam</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Vooglam is an online eyewear brand that combines fashion with functionality. The company specializes in stylish prescription glasses, sunglasses, and blue light glasses designed for men and women with different tastes and lifestyles.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    With an ever-growing collection of unique frame styles, Vooglam focuses on helping customers express their individuality through eyewear. From minimalist classics to colorful statement pieces, the brand offers frames suitable for work, casual outings, special occasions, and everyday wear.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Customers can browse and customize their eyewear online by selecting frame styles, lens types, coatings, and prescription options before placing an order.
                  </p>
                  <a href="https://performance.gotrackier.com/click?campaign_id=4641&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <h3 className="text-black font-black text-lg mb-2">What Can You Buy at Vooglam?</h3>
  <p className="text-gray-500 font-medium text-xs mb-8">
    Vooglam offers a wide variety of eyewear designed to suit different needs and fashion preferences.
  </p>

  <div className="space-y-8">
    {[
      {
        icon: Glasses,
        title: "Prescription Glasses",
        sub: "Browse an extensive selection of prescription eyeglasses available in modern, classic, oversized, geometric, round, square, and cat-eye designs."
      },
      {
        icon: Monitor,
        title: "Blue Light Glasses",
        sub: "Protect your eyes during long hours of screen time with stylish blue light blocking glasses designed for work, gaming, studying, and everyday digital use."
      },
      {
        icon: Sun,
        title: "Sunglasses",
        sub: "Choose from fashionable sunglasses available with UV protection in various frame styles, colors, and lens options for both men and women."
      },
      {
        icon: Eye,
        title: "Prescription Sunglasses",
        sub: "Enjoy clear vision outdoors with prescription sunglasses that combine vision correction with sun protection."
      },
      {
        icon: Sparkles,
        title: "Fashion Frames",
        sub: "Discover trendy eyewear collections featuring bold colors, transparent frames, vintage-inspired designs, and modern statement pieces."
      },
      {
        icon: Sliders,
        title: "Lens Upgrades",
        sub: "Customize your glasses with lens enhancements such as anti-reflective coatings, scratch-resistant finishes, UV protection, photochromic lenses, and other available options."
      },
      {
        icon: ShoppingBag,
        title: "Accessories",
        sub: "Complete your purchase with eyewear accessories including protective cases, cleaning cloths, and maintenance essentials."
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
          Vooglam Coupon Codes, Promo Codes & Eyewear Deals
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
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Razor Rectangle Black Sunglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">New In ($108.50, reg. $115.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Premium UV protection</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sunglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Charisse Eyeglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 20% ($36.00, reg. $45.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Bestselling style</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eyeglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Ando Aviator Eyeglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">$65.00</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Chrome aviator construction</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eyeglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Loos Geometric Silver Eyeglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">$65.00</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Sculpted bridge design</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eyeglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Scarpa Rectangle Silver Eyeglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">$65.00</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Double-wire temples</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eyeglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Ando Aviator Silver Sunglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">New Arrival ($100.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Full UV protection</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sunglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Meridian Square Tortoise Eyeglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">$65.00</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">'70s-inspired styling</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eyeglasses</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Color Tint Lab™</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">20 Stylish Lens Tints</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Custom lens personalization</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Lens Customization</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Pierce Eyeglasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Best Seller ($85.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Modern lightweight comfort</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eyeglasses</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <h3 className="text-xl font-black text-[#056bfa]">
            Upgrade Your Eyewear for Less with Vooglam Coupon Codes
          </h3>
          <p>
            Finding stylish glasses shouldn't mean overspending. Whether you're looking for prescription eyeglasses, blue light glasses, sunglasses, or trendy frames that reflect your personality, Vooglam offers fashionable <Link href="/stores/fytoo-discount-code">eyewear</Link> at affordable prices. Before placing your order, visit CouponsBit to discover the latest Vooglam coupon codes, promo codes, and exclusive eyewear deals that can help you save more on every purchase.
          </p>
          <p>
            Known for its bold designs and diverse frame collection, Vooglam has become a popular choice for customers across North America who want premium-looking eyewear without paying premium prices.
          </p>

          {/* Why Shop at Vooglam? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Shop at Vooglam?</h3>
            <p><strong>Fashion-Forward Designs:</strong> Vooglam is known for its creative and stylish frame collections that allow customers to showcase their personality through eyewear.</p>
            <p><strong>Affordable Pricing:</strong> The brand offers fashionable prescription glasses and sunglasses at competitive prices, making stylish eyewear more accessible.</p>
            <p><strong>Wide Selection:</strong> With hundreds of frame styles, colors, and shapes available, shoppers can easily find glasses that complement their face shape and personal style.</p>
            <p><strong>Prescription Customization:</strong> Customers can personalize their glasses by selecting prescription lenses, coatings, and lens upgrades that suit their vision requirements.</p>
            <p><strong>Convenient Online Shopping:</strong> Vooglam makes buying eyewear online simple with detailed product descriptions, virtual try-on features (where available), and an easy ordering process.</p>
            <p><strong>New Collections Throughout the Year:</strong> The brand regularly introduces fresh frame designs inspired by seasonal trends and contemporary fashion.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Vooglam Coupon Code</h3>
            <p className="text-gray-700 font-bold">Saving on your next eyewear purchase is quick and easy.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit CouponsBit and browse the latest Vooglam coupon codes.",
                "Step 2: Select the offer that matches your order.",
                "Step 3: Copy the available promo code.",
                "Step 4: Visit Vooglam and add your preferred frames and lenses to your shopping cart.",
                "Step 5: Enter the coupon code during checkout if applicable.",
                "Step 6: Complete your purchase and enjoy additional savings on your eyewear."
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

          {/* Tips to Save More at Vooglam */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Tips to Save More at Vooglam</h3>
            <p><strong>Visit CouponsBit Before Shopping:</strong> Check CouponsBit regularly for updated Vooglam promo codes, seasonal discounts, and exclusive promotional offers.</p>
            <p><strong>Watch for Seasonal Sales:</strong> Vooglam frequently offers discounts during major shopping events, holiday promotions, and clearance sales.</p>
            <p><strong>Subscribe to Email Updates:</strong> Join the Vooglam newsletter to receive notifications about new arrivals, exclusive offers, and limited-time promotions.</p>
            <p><strong>Bundle Multiple Pairs:</strong> Purchasing more than one pair of glasses during promotional events may help you maximize available discounts.</p>
            <p><strong>Explore Clearance Offers:</strong> Check clearance collections to find stylish frames at reduced prices while supplies last.</p>
          </div>

          {/* Who Should Shop at Vooglam? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Who Should Shop at Vooglam?</h3>
            <p>Vooglam is ideal for:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Prescription eyeglass wearers</li>
              <li>Students</li>
              <li>Remote workers</li>
              <li>Office professionals</li>
              <li>Gamers</li>
              <li>Fashion enthusiasts</li>
              <li>Frequent computer users</li>
              <li>Sunglasses shoppers</li>
              <li>First-time eyewear buyers</li>
              <li>Anyone looking for affordable and stylish glasses</li>
            </ul>
            <p>
              Whether you need glasses for everyday use, work, travel, or fashion, Vooglam offers options for nearly every lifestyle.
            </p>
          </div>

          {/* Why Choose CouponsBit for Vooglam Deals? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose CouponsBit for Vooglam Deals?</h3>
            <p>CouponsBit helps shoppers save money by offering verified coupon codes and promotional deals from leading brands across fashion, beauty, travel, electronics, software, home essentials, and lifestyle categories.</p>
            <p><strong>Frequently Updated Coupons:</strong> We regularly update Vooglam coupon codes and promotional offers, giving you access to the latest savings opportunities.</p>
            <p><strong>Verified Deals:</strong> Browse trusted promo codes, limited-time offers, seasonal sales, and exclusive discounts in one place.</p>
            <p><strong>Completely Free:</strong> CouponsBit is free to use, allowing shoppers to save without paying subscription or membership fees.</p>
            <p><strong>More Than Eyewear Savings:</strong> Along with Vooglam deals, CouponsBit features discounts from hundreds of global brands across clothing, beauty, technology, travel, entertainment, and home products.</p>
          </div>

          {/* Shop Smarter and Save More with Vooglam */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Smarter and Save More with Vooglam</h3>
            <p>
              Whether you're updating your everyday prescription glasses, adding <Link href="/stores/sungait-discount-code" className="text-[#056bfa] hover:underline">stylish sunglasses</Link> to your collection, or protecting your eyes with blue light glasses, Vooglam offers fashionable eyewear for every occasion. Before completing your purchase, visit CouponsBit to browse the latest Vooglam coupon codes, promo codes, and exclusive eyewear deals to enjoy extra savings on your favorite frames.
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
            { q: "What is Vooglam?", a: "Vooglam is an online eyewear retailer offering fashionable prescription glasses, blue light glasses, sunglasses, and customizable lenses for customers worldwide." },
            { q: "Does Vooglam sell prescription glasses?", a: "Yes. Customers can order prescription eyeglasses and customize lenses according to their vision requirements." },
            { q: "Can I buy blue light glasses from Vooglam?", a: "Yes. Vooglam offers a variety of blue light filtering glasses designed for people who spend extended hours using digital devices." },
            { q: "Does Vooglam offer sunglasses?", a: "Absolutely. The brand offers both standard sunglasses and prescription sunglasses in a wide range of styles." },
            { q: "Where can I find Vooglam coupon codes?", a: "You can find the latest Vooglam coupon codes, promo codes, and exclusive eyewear deals on CouponsBit before placing your order." },
            { q: "Is CouponsBit free to use?", a: "Yes. CouponsBit is completely free and helps shoppers discover verified coupon codes and promotional offers from trusted online brands." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Vooglam Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Prescription Glasses", "Blue Light Glasses", "Trendy Frames", "Vooglam Promo Code", "Cat Eye Glasses", "Sunglasses", "Cat-Eye Frames", "Cheap Eyeglasses"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Vooglam Deals</h3>
          <div className="space-y-6">
            {VOOGLAM_COUPONS.slice(0, 5).map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">V</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://performance.gotrackier.com/click?campaign_id=4641&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" aria-label={`Get Vooglam deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
