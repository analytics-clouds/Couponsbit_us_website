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
  Plane, Dumbbell, Heart, Disc,
  Tv,
  Code,Server, Globe, Cloud, LayoutGrid, Cpu, Search, LayoutTemplate, ShoppingBag, Mail,
  Zap
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NUAGE_COUPONS as NUAGEWEAR_COUPONS } from "./offers";

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



const RELATED_STORES: StoreItem[] = [
  { name: "Bamboocool", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp", dealText: "Up To 25% OFF", href: "/stores/bamboocool-discount-code" },
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Aporro", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp", dealText: "Save Up To 45% OFF", href: "/stores/aporro-discount-code" },
  { name: "Dore & Rose", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/dore-and-rose-logo_jsa9ki.webp", dealText: "Up To 65% OFF", href: "/stores/dore-and-rose-promo-code" },
  { name: "Blue Cypress", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/blue-cypress-logo_ax2m7c.webp", dealText: "20% OFF First Order", href: "/stores/blue-cypress-discount-code" },
];

export default function NuagewearCouponsContent() {
  const [activeTab, setActiveTab] = useState<"All" | "Coupons" | "Deals">("All");
  const [activeSlide, setActiveSlide] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [expandedCoupon, setExpandedCoupon] = useState<string | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
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
              <span className="text-black font-extrabold">Nuagewear</span>
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
                  <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782373659/nuage-coupon-code_ggmnbf.jpg" alt="Nuagewear" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Nuagewear Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                     Refresh your everyday essentials for less with a NuageWears promo code in Nov 2026. Verified offers include 39% off the Wireless Soft Stay-Put Bra, 37% off the NuBloom Bra, and free worldwide shipping on orders over $60. Looking for a discount code? You can also save 35% on the Daily Cover Comfort Guard Bra and shop everyday bras, shapewear, briefs, and underwear starting from $14 with regularly updated deals.
                    </p>
                    <a
                      href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015"
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
                    <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1400,c_limit/v1782731611/nuage-voucher-code_sunxhy.webp" alt="Nuagewear Discount Code" width={800} height={350} className="w-full h-full object-cover" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1400,c_limit/v1782731611/nuage-promo-code_zkbkc2.webp" alt="Nuagewear Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1400,c_limit/v1782731611/nuage-discount-code_olwx9y.webp" alt="Nuagewear Voucher Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
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
              
              <div className="top-offers lg:w-[65%]">
  <div className="mb-10">
    <h2 className="text-2xl font-black text-black leading-tight">
      Nuagewear Coupon Codes &amp; Offers
    </h2>
  </div>

  {NUAGEWEAR_COUPONS.map((coupon) => (
    <div key={coupon.id} id={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
      <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
        <div className="flex flex-row">
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
            <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
            <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
            <div className="text-center px-1">
              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[15px] font-semibold leading-3">
                {coupon.topLabel}
              </p>
              <div className="text-[15px] sm:text-2xl font-extrabold leading-none mt-2">
                {coupon.mainValue}
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row min-w-0">
            <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>
                <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Verified Deal
                </span>
              </div>

              <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                {coupon.title}
              </h2>

              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                {coupon.description}
              </p>

              <button
                type="button"
                onClick={() =>
                  setExpandedCouponId(
                    expandedCouponId === coupon.id ? null : coupon.id
                  )
                }
                className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
              >
                View Details
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    expandedCouponId === coupon.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedCouponId === coupon.id
                    ? "max-h-[250px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                  {coupon.points.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2">
                      <span className="text-[#0344b0]">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
              <a
                href={coupon.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={coupon.ariaLabel}
                className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
              >
                Get Deal
              </a>
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
                  <h3 className="text-black font-black text-lg mb-6">About Nuagewear</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Nuagewear is a women's underwear brand focused on redefining comfort through seamless design and performance-driven fabrics. Inspired by the French word "Nuage," meaning cloud, the brand aims to deliver lightweight, soft, and comfortable underwear that feels almost invisible when worn.
                  </p>
                  <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <div className="mb-8">
    <h3 className="text-black font-black text-lg mb-2">Popular Products Available at Nuagewear</h3>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Nuagewear offers a range of comfortable and functional intimate apparel designed for daily use and active lifestyles.
    </p>
  </div>

  <div className="space-y-8">
    {[
      {
        icon: Sparkles, 
        title: "Seamless Briefs",
        sub: "Designed for smooth coverage and everyday comfort without bulky seams or visible lines."
      },
      {
        icon: Dumbbell, 
        title: "Performance Underwear",
        sub: "Lightweight styles engineered for workouts, outdoor activities, and active routines."
      },
      {
        icon: Heart, 
        title: "Yoga & Daily Wear Collections",
        sub: "Soft, flexible underwear created to move naturally with your body throughout the day."
      },
      {
        icon: Shield, 
        title: "Shaping Essentials",
        sub: "Comfort-focused styles that offer gentle support while maintaining flexibility."
      },
      {
        icon: Disc, 
        title: "Wireless Bras",
        sub: "Comfortable designs that provide support without the discomfort of traditional underwires."
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
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Nuagewear Coupon Codes, Promo Codes & Seamless Underwear Deals
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
                <td className="p-5 text-black font-black align-middle max-w-[220px]">USA Offer – Free Worldwide Shipping</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">FREE Shipping</td>
                <td className="p-5 text-gray-500 align-middle">Orders over $60</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Worldwide shipping</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bras, Shapewear & Essentials</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Commando Chic Shorts</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $49</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Comfort & sleek fit</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Shorts</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Wireless Soft Stay-Put Bra</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">39% OFF ($36.00, reg. $59.88)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Everyday comfort fit</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bras</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Daily Cover Comfort Guard Bra</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">35% OFF ($36.00, reg. $56.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Full coverage design</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bras</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Perfect Coverage Push-Up Bra</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">33% OFF ($36.00, reg. $54.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Support & flattering silhouette</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bras</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuAir Mesh Pivot+ 5-Pack</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 12% ($79.00, reg. $90.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Breathable mesh 5-pack</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Briefs</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuCloud Red Holiday Bra Set</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">33% OFF ($59.00, reg. $89.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Holiday-edition bra set</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bras</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuAir Mesh Flex Brief</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $16.00</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Lightweight, breathable mesh</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Briefs</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuAir Mesh Flex Brief 5-Pack</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Save 10% ($72.00, reg. $80.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Breathable 5-pack</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Briefs</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuAir Mesh FlexShield Thong</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $18.00</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Seamless, breathable</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Thongs</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuCloud Original Bikini</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $14.00</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Second-skin comfort, yoga/pilates</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bikinis</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">NuBloom Bra</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">37% OFF ($62.00, reg. $99.00)</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Available in multiple colors</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bras</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More on Comfort Essentials with Nuagewear Coupon Codes</h3>
          <p>
            Finding underwear that combines comfort, performance, and everyday confidence can be challenging. That's why many women turn to Nuagewear for innovative seamless designs that prioritize softness, flexibility, and a barely-there feel. Before placing your next order, check the latest <strong>Nuagewear coupon codes</strong>, promo offers, and exclusive discounts on CouponsBit to unlock extra savings.
          </p>
          <p>
            Whether you're heading to the <Link href="/stores/wiskii-discount-code" className="text-[#056bfa] hover:underline">gym</Link>, practicing yoga, running errands, or simply looking for comfortable everyday essentials, Nuagewear offers thoughtfully designed products created to move with your body. With the right promo code, you can enjoy premium comfort while keeping your budget in check.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">About Nuagewear</h3>
            
            <p>
              The company specializes in innovative underwear solutions designed to eliminate common issues such as visible panty lines, discomfort, pinching, rolling waistbands, and unwanted shifting during movement. By combining modern fabric technology with thoughtful design, Nuagewear creates products suitable for both active lifestyles and everyday wear.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Customers Choose Nuagewear</h3>
            <p><strong>Barely-There Comfort:</strong> Nuagewear products are designed to feel lightweight and unobtrusive throughout the day.</p>
            <p><strong>Seamless Construction:</strong> The brand focuses on reducing irritation and visible lines under clothing through modern seamless technology.</p>
            <p><strong>Designed for Movement:</strong> Many products are created with active lifestyles in mind, making them suitable for workouts, yoga sessions, and daily activities.</p>
            <p><strong>Breathable Materials:</strong> Lightweight fabrics help promote airflow and all-day comfort.</p>
            <p><strong>Modern Fit Technology:</strong> Innovative design features help improve fit and reduce common discomforts associated with traditional underwear.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Nuagewear Coupon Code</h3>
            <p className="text-gray-700 font-bold -mt-4">Saving money on your next order is simple.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit CouponsBit — Browse the latest Nuagewear coupon codes and promotional offers.",
                "Step 2: Select a Deal — Choose the discount that best matches your purchase.",
                "Step 3: Copy the Coupon Code — Copy the available promo code before visiting Nuagewear.",
                "Step 4: Shop Your Favorites — Add your preferred products to the shopping cart.",
                "Step 5: Apply the Discount — Enter the coupon code during checkout if required.",
                "Step 6: Complete Your Order — Finalize your purchase and enjoy your savings."
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
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Tips to Save More on Nuagewear</h3>
            <p><strong>Check CouponsBit Before Every Purchase:</strong> New coupon codes and promotions may be added regularly.</p>
            <p><strong>Shop Multi-Pack Deals:</strong> Bundle offers can often provide better value compared to individual purchases.</p>
            <p><strong>Watch for Seasonal Sales:</strong> Holiday promotions and limited-time campaigns may feature deeper discounts.</p>
            <p><strong>Join Brand Updates:</strong> Newsletter subscribers may occasionally receive exclusive offers and early sale access.</p>
            <p><strong>Explore New Collection Launches:</strong> Special promotions are sometimes available when new products are introduced.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Nuagewear Deals?</h3>
            <p><strong>Updated Discounts:</strong> We regularly update our listings to help shoppers find current offers.</p>
            <p><strong>Quick and Easy Savings:</strong> Access coupon codes, promotions, and special deals in one convenient location.</p>
            <p><strong>Completely Free to Use:</strong> CouponsBit helps you save money without any membership or subscription fees.</p>
            <p><strong>Discounts Across Multiple Categories:</strong> In addition to fashion and apparel brands, CouponsBit features deals from travel, technology, lifestyle, beauty, and wellness companies.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Nuagewear Coupons by City</h3>
            <p>Find city-specific delivery estimates, sales tax details and shopper tips for Nuagewear in these locations:</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/stores/nuage-discount-code/new-york" className="rounded-full bg-[#e8f6f8] text-[#056bfa] hover:bg-[#056bfa] hover:text-white transition-colors px-4 py-2 text-sm font-bold">New York</Link>
              <Link href="/stores/nuage-discount-code/boston" className="rounded-full bg-[#e8f6f8] text-[#056bfa] hover:bg-[#056bfa] hover:text-white transition-colors px-4 py-2 text-sm font-bold">Boston</Link>
              <Link href="/stores/nuage-discount-code/los-angeles" className="rounded-full bg-[#e8f6f8] text-[#056bfa] hover:bg-[#056bfa] hover:text-white transition-colors px-4 py-2 text-sm font-bold">Los Angeles</Link>
              <Link href="/stores/nuage-discount-code/san-francisco" className="rounded-full bg-[#e8f6f8] text-[#056bfa] hover:bg-[#056bfa] hover:text-white transition-colors px-4 py-2 text-sm font-bold">San Francisco</Link>
              <Link href="/stores/nuage-discount-code/seattle" className="rounded-full bg-[#e8f6f8] text-[#056bfa] hover:bg-[#056bfa] hover:text-white transition-colors px-4 py-2 text-sm font-bold">Seattle</Link>
              <Link href="/stores/nuage-discount-code/austin" className="rounded-full bg-[#e8f6f8] text-[#056bfa] hover:bg-[#056bfa] hover:text-white transition-colors px-4 py-2 text-sm font-bold">Austin</Link>
              <Link href="/stores/nuage-discount-code/miami" className="rounded-full bg-[#e8f6f8] text-[#056bfa] hover:bg-[#056bfa] hover:text-white transition-colors px-4 py-2 text-sm font-bold">Miami</Link>
              <Link href="/stores/nuage-discount-code/dallas" className="rounded-full bg-[#e8f6f8] text-[#056bfa] hover:bg-[#056bfa] hover:text-white transition-colors px-4 py-2 text-sm font-bold">Dallas</Link>
              <Link href="/stores/nuage-discount-code/atlanta" className="rounded-full bg-[#e8f6f8] text-[#056bfa] hover:bg-[#056bfa] hover:text-white transition-colors px-4 py-2 text-sm font-bold">Atlanta</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Upgrade Your Comfort for Less</h3>
            <p>Comfort starts with the essentials you wear every day. Whether you're looking for seamless underwear, activewear-friendly designs, or lightweight everyday basics, Nuagewear offers solutions designed around comfort and movement.</p>
            <p>Browse the latest Nuagewear coupon codes, promo offers, and exclusive discounts on CouponsBit today and enjoy premium comfort while spending less.</p>
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
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
          {[
            { q: "What is Nuagewear?", a: "Nuagewear is a women's underwear brand focused on seamless comfort, performance fabrics, and innovative fit technology." },
            { q: "What products does Nuagewear sell?", a: "The brand offers seamless underwear, performance briefs, shaping essentials, wireless bras, and everyday comfort collections." },
            { q: "Is Nuagewear suitable for workouts?", a: "Many Nuagewear products are designed to support active lifestyles, including fitness training, yoga, and everyday movement." },
            { q: "Where can I find Nuagewear coupon codes?", a: "You can find the latest Nuagewear coupon codes, promo offers, and discounts on CouponsBit." },
            { q: "Is CouponsBit free to use?", a: "Yes. CouponsBit is completely free and helps shoppers discover valuable savings opportunities from popular brands." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Nuagewear Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Seamless Underwear", "No Show Panties", "Nuagewear Promo Code", "Wireless Lounge Bra", "Comfort Intimates", "Yoga Briefs Women", "Athletic Underwear", "CouponsBit Apparel"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Nuagewear Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Multi-Pack Bundle", sub: "Save significantly on underwear bundles and multipack combinations" },
              { heading: "Welcome Order Promo", sub: "Introductory price adjustments on first-time brand configurations" },
              { heading: "Free Standard Delivery", sub: "Complimentary shipping structures applied on minimum tier values" },
              { heading: "Seasonal Collection Sale", sub: "Limited-time reductions on selected lounge and wireless variants" },
              { heading: "CouponsBit Special", sub: "Exclusive checkout incentive code adjustments for active users" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">N</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://go.sjv.io/c/4303217/3232402/41026?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" aria-label={`Get Nuagewear deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
