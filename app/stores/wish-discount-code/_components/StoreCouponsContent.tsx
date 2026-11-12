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
  Shirt, Smartphone, Smile, Dumbbell, Dog, Car, UserCheck,
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

import { WISH_COUPONS, Coupon } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Shein", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp", dealText: "Up To 90% OFF", href: "/stores/shein-coupon-code" },
  { name: "Fashion Nova", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/fashion-nova_cm1al3.webp", dealText: "Up To 50% OFF", href: "/stores/fashion-nova-discount-code" },
  { name: "Wayfair", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp", dealText: "Up To 80% OFF", href: "/stores/wayfair-discount-code" },
];

export default function WishCouponsContent() {
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
            <a href="https://performance.gotrackier.com/click?campaign_id=3168&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="w-full bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-base px-6 py-4 rounded-2xl shadow-md transition-all duration-300 text-center flex items-center justify-center gap-2">
              Visit Store <ExternalLink className="w-4 h-4" />
            </a>
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
              <span className="text-black font-extrabold">Wish</span>
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
                  <a href="https://performance.gotrackier.com/click?campaign_id=3168&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/wish-logo_n1dypa.webp" alt="Wish" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Wish.com Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Looking for the latest Wish promo code? Save up to 67% on trending products with verified offers throughout Nov 2026. Enjoy 67% off the Flower Bee Fidget Ring, up to 60% off Daily Deals, plus discounts on pet beds, charging cables, scooter accessories, reading glasses, voice recorders, and more. Whether you're shopping for home essentials, electronics, pet supplies, fashion, or unique gadgets, Wish offers incredible value with the latest discount codes, coupons, and limited-time deals across thousands of products.
                    </p>
                    <a
                      href="https://performance.gotrackier.com/click?campaign_id=3168&pub_id=1015"
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
                    { icon: Tag, val: "10", label: "Coupons" },
                    { icon: Percent, val: "10", label: "Deals" },
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
                    <a href="https://performance.gotrackier.com/click?campaign_id=3168&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784716378/wish-voucher-code_qrajge.webp" alt="Wish Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://performance.gotrackier.com/click?campaign_id=3168&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784716378/wish-promo-code_inotqa.webp" alt="Wish Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://performance.gotrackier.com/click?campaign_id=3168&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784716422/wish-discount-code_msb921.webp" alt="Wish Voucher Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Wish Coupon Codes & Offers</h2>
                  
                </div>

                

                {WISH_COUPONS.map((coupon) => (
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
                            <button onClick={() => handleCopy(coupon)} aria-label={`Get Wish deal: ${coupon.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</button>
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
                  <h3 className="text-black font-black text-lg mb-6">About Wish</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Launched in 2010, Wish is a global e-commerce marketplace that makes affordable shopping accessible to customers worldwide. The platform connects shoppers with merchants offering a wide variety of products across multiple categories, making it easy to discover budget-friendly items in one place.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Wish is known for its extensive product catalog, personalized shopping experience, and frequent promotional campaigns. The platform serves customers in numerous countries and offers products ranging from <Link href="/stores/shein-coupon-code" className="text-[#056bfa] hover:underline">fashion</Link> and electronics to home goods, beauty products, pet supplies, and outdoor equipment.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    With a user-friendly website and mobile app, Wish allows shoppers to browse millions of products, compare prices, and enjoy convenient online shopping from virtually anywhere.
                  </p>
                  <a href="https://performance.gotrackier.com/click?campaign_id=3168&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
              <div className="space-y-8">
  {/* What Can You Buy Section */}
  <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
    <h3 className="text-black font-black text-lg mb-2">What Can You Buy on Wish?</h3>
    <p className="text-gray-500 font-medium text-xs mb-8">
      Wish offers products across a wide range of categories.
    </p>

    <div className="space-y-8">
      {[
        {
          icon: ShoppingBag,
          title: "Fashion & Accessories",
          sub: "Shop clothing for men, women, and children, along with shoes, handbags, wallets, jewelry, watches, sunglasses, and fashion accessories."
        },
        {
          icon: Smartphone,
          title: "Electronics & Gadgets",
          sub: "Find smartphones, smartwatches, headphones, charging accessories, phone cases, computer peripherals, LED lights, and other electronic gadgets."
        },
        {
          icon: Home,
          title: "Home & Kitchen",
          sub: "Browse furniture, home décor, storage organizers, kitchen tools, cookware, cleaning supplies, bedding, and household essentials."
        },
        {
          icon: Sparkles,
          title: "Beauty & Personal Care",
          sub: "Explore skincare products, makeup, hair care, grooming tools, beauty accessories, and personal wellness items."
        },
        {
          icon: Smile,
          title: "Toys & Hobbies",
          sub: "Discover educational toys, puzzles, craft supplies, collectibles, games, and hobby products for children and adults."
        },
        {
          icon: Dumbbell,
          title: "Sports & Outdoor",
          sub: "Shop fitness equipment, camping gear, cycling accessories, travel essentials, outdoor tools, and sporting goods."
        },
        {
          icon: Dog,
          title: "Pet Supplies",
          sub: "Find pet beds, toys, feeding accessories, grooming products, leashes, and other essentials for your furry companions."
        },
        {
          icon: Car,
          title: "Automotive Accessories",
          sub: "Browse car organizers, phone holders, cleaning kits, lighting accessories, and maintenance tools for your vehicle."
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
          Wish Discount Code, Voucher & Promo Code Offers
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
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Daily Deals Hub</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Up to 60% OFF</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">New deals added daily</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Electronics, Fashion & More</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Flower Bee Fidget Anxiety Ring</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 67% ($0.79, reg. $2.40)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">30-day hassle-free return</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Fidget Accessories</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Self-Warming Pet Bed</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save up to 43% ($7.29, reg. $12.03)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Soft, anti-skid design</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Pet Supplies</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">USB-C PD 60W Fast Charging Cable</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 44% ($3.57, reg. $6.42)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Supports 480Mbps data transfer</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Electronics</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Outdoor Cooling Raised Dog Bed</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 44% ($36.23, reg. $64.94)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Washable, chew-resistant fabric</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Pet Supplies</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Waterproof Scooter Handlebar Bag</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save up to 40% ($12.75, reg. $21.31)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Waterproof, spacious storage</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Travel Accessories</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">DIY Rhinestone Nail Art Stones</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">$3.12</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Multiple sizes available</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Beauty Accessories</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Voice Activated Recorder</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save up to 22% ($17.35, reg. $22.43)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Crystal-clear voice activation</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Electronics</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Reinforced Cloth Headwear Storage Organizer</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 21% ($34.66, reg. $44.15)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Keeps accessories organized</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Home Organization</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Progressive Multifocal Reading Glasses</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 29% ($5.42, reg. $7.65)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Anti-blue light eyewear</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eyewear</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <h3 className="text-xl font-black text-[#056bfa]">
            Save More on Everyday Shopping with a Wish Discount Code
          </h3>
          <p>
            Looking for budget-friendly products across fashion, home essentials, electronics, beauty, and more? Wish is a popular online shopping <Link href="/stores/amazon-discount-code">marketplace</Link> that connects millions of shoppers with a vast selection of affordable products from sellers around the world. Whether you're searching for trendy accessories, gadgets, <Link href="/stores/wayfair-discount-code" className="text-[#056bfa] hover:underline">home décor</Link>, or everyday essentials, Wish offers thousands of products at competitive prices.
          </p>
          <p>
            Before you check out, visit CouponsBit to find the latest Wish discount code, Wish voucher, Wish promo code, and Wish coupon code offers. Applying a valid discount can help you save even more on your next online purchase.
          </p>

          {/* Why Shop on Wish? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Shop on Wish?</h3>
            <p><strong>Affordable Prices:</strong> Wish is well known for offering budget-friendly products across thousands of categories, making it easier to shop without overspending.</p>
            <p><strong>Huge Product Selection:</strong> The marketplace features millions of products, giving shoppers access to everything from everyday essentials to unique finds.</p>
            <p><strong>Frequent Promotions:</strong> Wish regularly offers flash sales, seasonal discounts, daily deals, and special promotions throughout the year.</p>
            <p><strong>Personalized Shopping Experience:</strong> The platform recommends products based on your browsing and shopping preferences, helping you discover items that match your interests.</p>
            <p><strong>Convenient Mobile Shopping:</strong> With its easy-to-use mobile app and website, Wish allows customers to browse, order, and track purchases anytime.</p>
            <p><strong>Worldwide Availability:</strong> Wish serves customers across many countries, making it a convenient platform for international online shopping.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Wish Discount Code</h3>
            <p className="text-gray-700 font-bold">Saving money on Wish is simple.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit CouponsBit and browse the latest Wish discount code, voucher, promo code, and coupon code offers.",
                "Step 2: Select the deal that suits your purchase.",
                "Step 3: Copy the available promotional code.",
                "Step 4: Visit Wish and add your desired products to your shopping cart.",
                "Step 5: Enter the discount code during checkout if applicable.",
                "Step 6: Complete your order and enjoy additional savings."
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

          {/* Smart Ways to Save More on Wish */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Smart Ways to Save More on Wish</h3>
            <p><strong>Check CouponsBit Before Shopping:</strong> Browse CouponsBit regularly for updated Wish discount codes, vouchers, and verified promotional offers.</p>
            <p><strong>Shop During Seasonal Sales:</strong> Take advantage of discounts during Black Friday, Cyber Monday, holiday sales, Back-to-School promotions, and other shopping events.</p>
            <p><strong>Browse Daily Deals:</strong> Wish frequently features limited-time deals on popular products across different categories.</p>
            <p><strong>Compare Similar Products:</strong> Since multiple sellers may offer similar items, comparing prices and customer reviews can help you find the best value.</p>
            <p><strong>Buy Multiple Items Together:</strong> Bundling purchases can help you make the most of available promotions and reduce overall shopping costs.</p>
          </div>

          {/* Who Should Shop on Wish? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Who Should Shop on Wish?</h3>
            <p>Wish is a great platform for:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Budget-conscious shoppers</li>
              <li>Students</li>
              <li>Families</li>
              <li>Fashion enthusiasts</li>
              <li>Home decorators</li>
              <li>Gadget lovers</li>
              <li>DIY hobbyists</li>
              <li>Travelers</li>
              <li>Pet owners</li>
              <li>Anyone looking for affordable online shopping</li>
            </ul>
            <p>
              Whether you're shopping for daily essentials or searching for unique gifts, Wish offers products to suit a wide variety of lifestyles and budgets.
            </p>
          </div>

          {/* Why Use CouponsBit for Wish Deals? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Wish Deals?</h3>
            <p>CouponsBit helps shoppers discover verified savings from leading online stores and global marketplaces.</p>
            <p><strong>Frequently Updated Offers:</strong> We regularly update Wish discount codes, vouchers, promo codes, and special promotions.</p>
            <p><strong>Verified Discounts:</strong> Browse genuine coupon codes and limited-time deals in one convenient place.</p>
            <p><strong>Completely Free:</strong> CouponsBit is free to use whenever you're looking to save on online shopping.</p>
            <p><strong>Savings Across Hundreds of Brands:</strong> Besides Wish, CouponsBit features discounts on fashion, electronics, travel, software, home essentials, beauty products, and hundreds of other trusted brands.</p>
          </div>

          {/* Shop More While Spending Less */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop More While Spending Less</h3>
            <p>
              Whether you're upgrading your home, refreshing your wardrobe, shopping for gadgets, or buying gifts for family and friends, Wish offers a huge selection of products at affordable prices.
            </p>
            <p>
              Before placing your next order, visit CouponsBit to grab the latest Wish discount code, Wish voucher, Wish promo code, and Wish coupon code. It's a simple way to enjoy extra savings on your favorite products while shopping smarter.
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
            { q: "What is Wish?", a: "Wish is a global online marketplace that offers affordable products across categories such as fashion, electronics, home goods, beauty, toys, pet supplies, and more." },
            { q: "Does Wish sell electronics?", a: "Yes. Wish offers a wide selection of electronics, including smartphones, smartwatches, accessories, headphones, charging devices, and other gadgets." },
            { q: "Can I shop on Wish using a mobile app?", a: "Yes. Wish provides both a website and a mobile app, allowing customers to browse products, place orders, and track deliveries conveniently." },
            { q: "Where can I find a Wish discount code?", a: "You can find the latest Wish discount code, Wish voucher, Wish promo code, and Wish coupon code offers on CouponsBit." },
            { q: "Does Wish offer seasonal sales?", a: "Yes. Wish regularly runs flash sales, holiday promotions, and special shopping events where customers can save on a wide range of products." },
            { q: "Is CouponsBit free to use?", a: "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted online retailers." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Wish Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Wish Promo Code", "Flash Sales", "Affordable Gadgets", "Budget Fashion", "Home Essentials", "Wish Voucher", "Daily Deals", "Cheap Shopping"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Wish Deals</h3>
          <div className="space-y-6">
            {WISH_COUPONS.slice(0, 5).map((coupon, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">W</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{coupon.topLabel} {coupon.mainValue}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{coupon.title}</p>
                </div>
                <button onClick={() => handleCopy(coupon)} aria-label={`Get Wish deal: ${coupon.topLabel} ${coupon.mainValue}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</button>
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
