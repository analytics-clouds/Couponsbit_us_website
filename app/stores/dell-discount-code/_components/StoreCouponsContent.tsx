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
  Monitor, Gamepad2, Keyboard,
  Code,Server, Globe, Cloud, LayoutGrid, Cpu, Search, LayoutTemplate, ShoppingBag, Mail,
  Zap
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type Coupon, DELL_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "HP", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782890859/hp-coupon-code_vaogna.webp", dealText: "Up to 69% OFF", href: "/stores/hp-discount-code" },
  { name: "Beelink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494081/beelink-coupon-code_gephnd.jpg", dealText: "Up to 35% OFF", href: "/stores/beelink-discount-code" },
  { name: "Apple", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/apple-logo_vrakxu.webp", dealText: "Up To $150 Gift Card", href: "/stores/apple-discount-code" },
  { name: "Geekbuying", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/geekbuying-logo_pnkeev.webp", dealText: "Up To 56% OFF", href: "/stores/geekbuying-discount-code" },
  { name: "TP-Link", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/tp-link-logo_y9efya.webp", dealText: "Up To 50% OFF", href: "/stores/tplink-promo-code" },
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
];

export default function DellCouponsContent() {
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
      {/* Copy Modal */}
      {showModal && activeModalCoupon && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <div className="text-center mb-6">
              <div className="bg-[#f0fdf4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#22c55e]" />
              </div>
              <h3 className="text-black font-black text-xl mb-2">Deal Activated!</h3>
              <p className="text-gray-500 font-bold text-sm">{activeModalCoupon.title}</p>
            </div>
            {activeModalCoupon.code ? (
              <div className="bg-[#f8f8f8] border-2 border-dashed border-[#056bfa] rounded-2xl p-4 text-center mb-6">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">Your Coupon Code</p>
                <p className="text-2xl font-black text-[#056bfa] tracking-widest">{activeModalCoupon.code}</p>
              </div>
            ) : null}
            <a
              href="https://www.anrdoezrs.net/click-100938140-15735549?sid=1015"
              target="_blank"
              rel="nofollow noopener noreferrer"
              onClick={() => setShowModal(false)}
              className="w-full bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-base px-6 py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
            >
              Go to Dell Store <ArrowRight className="inline w-4 h-4 ml-1" />
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
              <span className="text-black font-extrabold">Dell</span>
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
                  <a href="https://www.anrdoezrs.net/click-100938140-15735549?sid=1015" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782890858/dell-coupon-code_mxtssy.webp" alt="Dell" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Dell Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Looking for the latest Dell discount code? Save up to $1,700 on Dell gaming PCs and enjoy up to $1,100 off the premium Dell XPS 16. You'll also find verified deals on laptops, desktops, monitors, accessories, and business PCs throughout Nov 2026. Whether you're a student, gamer, professional, or business user, Dell offers exclusive discounts, education savings, and limited-time promotions to help you upgrade your setup while spending less.
                    </p>
                    <a
                      href="https://www.anrdoezrs.net/click-100938140-15735549?sid=1015"
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
                    <a href="https://www.anrdoezrs.net/click-100938140-15735549?sid=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1400,c_limit/v1782902149/dell-discount-code_xwg2k7.webp" alt="Dell Discount Code" width={800} height={350} className="w-full h-full object-cover" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://www.anrdoezrs.net/click-100938140-15735549?sid=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1400,c_limit/v1782902150/dell-promo-code_vucdke.webp" alt="Dell Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://www.anrdoezrs.net/click-100938140-15735549?sid=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1400,c_limit/v1782902150/dell-voucher-code_gfdrww.webp" alt="Dell Voucher Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Dell Coupon Codes & Offers</h2>
                </div>

                {DELL_COUPONS.map((coupon) => (
                  <div key={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">{coupon.topLabel}</p>
                            <div className={cn("font-extrabold leading-none mt-2", coupon.valueFontClass ?? "text-[18px] sm:text-4xl")}>{coupon.mainValue}</div>
                            {coupon.offText && <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">{coupon.offText}</p>}
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
                            <button
                              type="button"
                              onClick={() => setExpandedCouponId(expandedCouponId === coupon.id ? null : coupon.id)}
                              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
                            >
                              View Details
                              <ChevronDown size={16} className={`transition-transform duration-300 ${expandedCouponId === coupon.id ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${expandedCouponId === coupon.id ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {coupon.points.map((pt, pi) => (
                                  <li key={pi} className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>{pt}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6 gap-3">
                            {coupon.code && (
                              <button onClick={() => handleCopy(coupon)} className="w-full bg-white border-2 border-dashed border-[#056bfa] text-[#056bfa] font-black text-sm px-4 py-2.5 rounded-xl flex items-center justify-between gap-2 hover:bg-[#e8f6f8] transition-colors">
                                <span className="font-mono">{coupon.code}</span>
                                <Copy className="w-4 h-4 shrink-0" />
                              </button>
                            )}
                            <a
                              href="https://www.anrdoezrs.net/click-100938140-15735549?sid=1015"
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label={`Get Dell deal: ${coupon.title}`}
                              className="w-full bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
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
                  <h3 className="text-black font-black text-lg mb-6">About Dell</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Dell is one of the world's leading technology companies, providing computers, monitors, accessories, servers, storage solutions, and IT infrastructure for consumers, professionals, businesses, educational institutions, and enterprises. Since its founding in 1984, Dell has continuously evolved its product portfolio to support modern computing, hybrid work, gaming, and digital transformation.
                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Today, Dell operates in more than 180 countries and serves millions of customers through its official online store, retail partners, and business channels. From everyday laptops to AI-ready workstations and enterprise-grade infrastructure, Dell develops technology solutions that empower people to work smarter, create more, and stay connected.
                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its well-known product families including XPS, Inspiron, Latitude, Alienware, Precision, and PowerEdge have become trusted choices for users around the globe.
                  </p>
                  <a href="https://www.anrdoezrs.net/click-100938140-15735549?sid=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
    <h2 className="text-black font-black text-xl mb-2">What Can You Buy from Dell?</h2>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Dell offers technology products for individuals, businesses, and organizations of every size.
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
          Browse lightweight everyday laptops, premium ultrabooks, business notebooks, creator laptops, and high-performance mobile workstations.
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
          Choose from compact desktops, all-in-one PCs, gaming desktops, and powerful workstations for home, office, or professional use.
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
          Experience immersive gaming with Alienware desktops, Alienware laptops, and Dell G Series gaming computers designed for demanding performance.
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
          Upgrade your workspace with productivity monitors, UltraSharp professional displays, curved monitors, gaming monitors, and high-resolution screens.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Keyboard className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Computer Accessories</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Shop keyboards, wireless mice, docking stations, webcams, backpacks, headphones, speakers, external storage, chargers, and other PC accessories.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Server className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Servers & Enterprise Solutions</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Businesses can explore PowerEdge servers, networking solutions, cloud infrastructure, storage systems, and cybersecurity technologies.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Cpu className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">AI PCs & Workstations</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Dell offers AI-ready computers and professional workstations built for developers, engineers, designers, data scientists, and creative professionals.
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
          Dell Discount Codes, Promo Codes & Computer Deals
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
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dell Discount Code – Up to $750 Off Back to School Sale</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to $750 OFF</td>
        <td className="p-5 text-gray-500 align-middle">Students & teachers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Limited-time back-to-school savings on laptops & accessories</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eligible Dell Products</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dell Discount Code – XPS 13 Student Offer</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $599</td>
        <td className="p-5 text-gray-500 align-middle">Eligible students</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Top performance in a lightweight, portable design</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Dell XPS 13</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dell Promo Code – 10% Off Student & Teacher Discount</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">10% OFF</td>
        <td className="p-5 text-gray-500 align-middle">Eligible students & teachers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Sitewide education savings on laptops & accessories</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eligible Dell Purchases</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dell Promo Code – Up to $1,100 Off XPS 16</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to $1,100 OFF (From $2,799.99)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Premium performance built for creative & heavy workloads</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Dell XPS 16</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dell Voucher Code – Up to $581 Off Dell 14 Laptop</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to $581 OFF (From $799.99)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Steady performance for daily tasks, home & study</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Dell 14 Laptop</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dell Voucher Code – Up to $970 Off Alienware Area-51</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to $970 OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">High-performance gaming desktop for demanding titles</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Alienware Area-51 Desktop</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dell Coupon Code – Up to $150 Off Alienware 27" Monitor</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to $150 OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">QD-OLED panel with vivid visuals and smooth response</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Alienware 27" QD-OLED Gaming Monitor</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dell Coupon Code – Up to $700 Off Business PCs</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to $700 OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Dependable office systems for business productivity</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Dell Business PCs</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dell Referral Code – Up to $640 Off Dell 14 Plus Copilot+ PC</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to $640 OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Built-in AI features for faster, smarter daily productivity</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Dell 14 Plus Copilot+ PC</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dell Referral Code – Up to $30 Off Productivity Software</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to $30 OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Genuine productivity software bundle with device purchase</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eligible Productivity Software</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dell Offer – Up to $1,700 Off Gaming PCs</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to $1,700 OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">High-performance gaming laptops, desktops & accessories</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Select Dell Gaming Products</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dell Deal – Dell 15 Laptop Everyday Deal</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From $629.99 (Save up to $170)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Dependable everyday computing for work, study & entertainment</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Dell 15 Laptop</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <h3 className="text-xl font-black text-[#056bfa] mb-4">Upgrade Your Technology for Less with Dell Coupon Codes</h3>
          <p>
            Whether you're shopping for a powerful business laptop, a high-performance gaming desktop, a reliable home computer, or enterprise IT solutions, Dell offers innovative technology designed to meet every need. Before placing your next order, visit Couponsbit to explore the latest <strong>Dell coupon codes, Dell promo codes, and exclusive deals</strong> that can help you save on <Link href="/stores/hp-discount-code">laptops</Link>, desktops, monitors, accessories, and more.
          </p>
          <p>
            Trusted by millions of customers worldwide, Dell has built a reputation for delivering dependable technology, exceptional performance, and cutting-edge innovation. With Couponsbit, finding verified Dell discounts has never been easier.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose Dell?</h3>
            <p><strong>Trusted Global Technology Brand:</strong> Dell has earned worldwide recognition for producing reliable computers and enterprise technology solutions for nearly four decades.</p>
            <p><strong>Products for Every User:</strong> Whether you're a student, remote worker, gamer, content creator, or business owner, Dell offers devices designed for different needs and budgets.</p>
            <p><strong>Innovative Technology:</strong> Dell integrates the latest processors, AI capabilities, advanced graphics, security features, and premium displays into many of its products.</p>
            <p><strong>Business & Enterprise Expertise:</strong> Beyond personal computers, Dell delivers comprehensive IT solutions that help organizations improve productivity, scalability, and digital transformation.</p>
            <p><strong>Custom Configuration Options:</strong> Many Dell systems allow customers to customize processors, memory, storage, graphics cards, and other specifications before purchasing.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Dell Coupon Code</h3>
            <p className="text-gray-500 text-sm font-bold -mt-4">Saving on your Dell purchase is simple.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit Couponsbit — Browse the latest Dell coupon codes and promotional offers.",
                "Step 2: Choose a Deal — Select the discount that best matches your purchase.",
                "Step 3: Copy the Coupon Code — Copy the available code before visiting Dell.",
                "Step 4: Shop Your Favorite Products — Add laptops, desktops, monitors, accessories, or other technology products to your shopping cart.",
                "Step 5: Apply the Coupon — Enter the promo code during checkout if applicable.",
                "Step 6: Complete Your Purchase — Finalize your order and enjoy savings on your new Dell products."
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
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Smart Ways to Save More at Dell</h3>
            <p><strong>Check Couponsbit Before Every Purchase:</strong> Browse the latest Dell promo codes before completing your order.</p>
            <p><strong>Shop Seasonal Promotions:</strong> Dell frequently offers discounts during major shopping events and seasonal sales.</p>
            <p><strong>Explore Student & Business Programs:</strong> Eligible students, educators, and businesses may qualify for exclusive pricing and special offers.</p>
            <p><strong>Bundle Your Devices:</strong> Purchasing monitors, accessories, or peripherals together with your computer may unlock additional savings.</p>
            <p><strong>Sign Up for Dell Emails:</strong> Joining Dell's mailing list can help you stay informed about product launches, limited-time promotions, and exclusive offers.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Who Can Benefit from Dell?</h3>
            <p>Dell develops technology solutions for a wide range of users, including: Students, Professionals, Remote workers, Gamers, Small businesses, Large enterprises, Software developers, Designers, Content creators, Educators, IT professionals, Home users.</p>
            <p>Whether you're upgrading a personal laptop or equipping an entire organization, Dell offers technology designed to support productivity, creativity, and performance.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for Dell Deals?</h3>
            <p>Couponsbit helps shoppers discover verified savings across technology, software, travel, fashion, electronics, home improvement, and lifestyle brands.</p>
            <p><strong>Updated Offers:</strong> We regularly update Dell coupon codes and promotional deals.</p>
            <p><strong>Verified Discounts:</strong> Browse coupon codes, limited-time offers, and exclusive savings in one convenient place.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use whenever you're looking to save.</p>
            <p><strong>Global Brand Coverage:</strong> Along with Dell, Couponsbit features deals from hundreds of leading global brands across technology and <Link href="/stores/amazon-discount-code" className="text-[#056bfa] hover:underline">online shopping</Link>.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Invest in Better Technology While Saving More</h3>
            <p>Whether you're buying your first laptop, upgrading your gaming setup, replacing office equipment, or investing in enterprise technology, Dell delivers reliable solutions built for work, learning, creativity, and entertainment.</p>
            <p>Browse the latest Dell coupon codes, Dell promo codes, and exclusive computer deals on Couponsbit today and save more on your next Dell purchase.</p>
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
            { q: "What products does Dell sell?", a: "Dell offers laptops, desktop computers, gaming PCs, monitors, accessories, servers, storage solutions, workstations, networking equipment, and enterprise IT infrastructure." },
            { q: "Does Dell make gaming computers?", a: "Yes. Dell owns the Alienware gaming brand and also offers the Dell G Series, providing gaming laptops and desktops designed for high-performance gaming." },
            { q: "Where can I find Dell coupon codes?", a: "You can find the latest Dell coupon codes, promo codes, and exclusive technology deals on Couponsbit." },
            { q: "Can I customize my Dell computer?", a: "Yes. Many Dell laptops and desktops can be customized by selecting different processors, memory, storage, graphics cards, and other hardware options before purchase." },
            { q: "Does Dell offer products for businesses?", a: "Yes. Dell provides commercial laptops, enterprise workstations, servers, cloud infrastructure, cybersecurity solutions, and managed IT services for organizations of all sizes." },
            { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps shoppers discover verified coupon codes, promo offers, and discounts from trusted brands worldwide." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <span className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all inline-flex", openFaq === i && "bg-[#056bfa] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                </span>
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Dell Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Dell Laptops", "Alienware Gaming", "Inspiron Desktop", "Dell Monitors", "Dell Promo Code", "XPS Series", "Latitude Business", "PC Accessories"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Dell Deals</h3>
          <div className="space-y-6">
            {DELL_COUPONS.slice(0, 5).map((coupon, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">D</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{coupon.topLabel} {coupon.mainValue}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{coupon.description}</p>
                </div>
                <a href="https://www.anrdoezrs.net/click-100938140-15735549?sid=1015" target="_blank" rel="nofollow noopener noreferrer" aria-label={`Get Dell deal: ${coupon.title}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
