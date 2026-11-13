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
  BookOpen,Stethoscope, Activity,
  CheckCircle,
  X,
  ArrowRight,
  Plane,
  Tv,
  Code,Server, Globe, Cloud, LayoutGrid, Cpu, Search, LayoutTemplate, ShoppingBag, Mail,
  Zap,
  Leaf, Droplet, Sun, Gift
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { KERALA_COUPONS, Coupon } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "The Ayurveda Experience", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295215/tae-logo_dwfmfi.webp", dealText: "Flat 50% OFF", href: "/stores/the-ayurveda-experience-discount-code" },
  { name: "GoodRx", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/goodrx-logo_ibgfjr.webp", dealText: "From $39/Month", href: "/stores/goodrx-discount-code" },
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up To $260", href: "/stores/merachfit-discount-code" },
  { name: "Superrun", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037376/superrun_w6lj1n.webp", dealText: "Save $30 OFF", href: "/stores/superrun-discount-code" },
  { name: "Lordhair", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/lorthair-logo_g84ojx.webp", dealText: "Up To 50% OFF", href: "/stores/lordhair-promo-code" },
  { name: "RingConn", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp", dealText: "Starting From $199", href: "/stores/ringconn-discount-code" },
];

export default function KeralaAyurvedaCouponsContent() {
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
                <span className="text-gray-500 font-bold text-sm">No code needed â€“ discount applied automatically</span>
              </div>
            )}
            <a href="https://keralaayurveda.store/?utm_source=count&utm_medium=affiliate&utm_campaign=February2026" target="_blank" rel="nofollow noopener noreferrer" className="w-full bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-base px-6 py-4 rounded-2xl shadow-md transition-all duration-300 text-center flex items-center justify-center gap-2">
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
              <span className="text-black font-extrabold">Kerala Ayurveda</span>
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
                  <a href="https://keralaayurveda.store/?utm_source=count&utm_medium=affiliate&utm_campaign=February2026" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg" alt="Kerala Ayurveda" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Kerala Ayurveda Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more on natural wellness with the latest Kerala Ayurveda discount code and enjoy up to 20% off eligible products plus an extra 10% off when you use promo code COUNTNEW10. Shop Ayurvedic favorites like Kumkumadi Oil from $27, Shilajit Capsules for $25.95, and Digi Eye Defense for $31.95 at reduced prices. These verified promo code offers are regularly updated for Nov 2026, helping you save on trusted supplements, skincare, and everyday wellness essentials.
                    </p>
                    <a
                      href="https://keralaayurveda.store/?utm_source=count&utm_medium=affiliate&utm_campaign=February2026"
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
                    <a href="https://keralaayurveda.store/?utm_source=count&utm_medium=affiliate&utm_campaign=February2026" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1785845004/kerala-ayurveda-coupon-code_abjbpy.png" alt="Kerala Ayurveda Discount Code" width={800} height={350} className="w-full h-full object-cover" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://keralaayurveda.store/?utm_source=count&utm_medium=affiliate&utm_campaign=February2026" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1785845004/kerala-ayurveda-discount-code_wugu2g.png" alt="Kerala Ayurveda Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://keralaayurveda.store/?utm_source=count&utm_medium=affiliate&utm_campaign=February2026" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1785845004/kerala-ayurveda-promo-code_ydbhhf.png" alt="Kerala Ayurveda Voucher Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">
                  Use code COUNTNEW10 for 10% OFF | Nov 2026
                  </h2>

                </div>




{KERALA_COUPONS.map((coupon) => (
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
            <button onClick={() => handleCopy(coupon)} aria-label={`Get Kerala Ayurveda deal: ${coupon.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</button>
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
                  <h3 className="text-black font-black text-lg mb-6">Bringing the Wisdom of Ayurveda to Modern Living</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Kerala Ayurveda is one of India's well-established Ayurvedic brands, dedicated to preserving and promoting the principles of Ayurveda through authentic products and wellness services. Drawing inspiration from Kerala's rich Ayurvedic heritage, the brand combines traditional knowledge with modern manufacturing practices to create products that support everyday health and wellness.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its portfolio includes classical Ayurvedic formulations, proprietary herbal products, <Link href="/stores/the-ayurveda-experience-discount-code" className="text-[#056bfa] hover:underline">personal care essentials</Link>, and nutritional supplements. In addition to wellness products, Kerala Ayurveda is also known for its Ayurvedic treatment centers, consultations, and educational initiatives that help people better understand holistic health.
                  </p>
                
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    With decades of experience in Ayurveda, the brand continues to serve individuals seeking natural wellness solutions for their daily lives.

                  </p>
                  <a href="https://keralaayurveda.store/?utm_source=count&utm_medium=affiliate&utm_campaign=February2026" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
                   <Link href="/categories" className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline">View All Categories â†’</Link>
                </div>

                {/* Why Shop Card */}
              <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">Explore Kerala Ayurveda's Wellness Range</h3>

  <div className="space-y-8">
    {[
      {
        icon: Stethoscope,
        title: "Ayurvedic Medicines",
        sub: "Browse a wide selection of classical and proprietary Ayurvedic formulations developed using traditional herbs and ingredients for various wellness needs."
      },
      {
        icon: Leaf,
        title: "Herbal Supplements",
        sub: "Discover herbal supplements designed to support everyday wellness, vitality, and overall health as part of a balanced lifestyle."
      },
      {
        icon: Sparkles,
        title: "Personal Care Products",
        sub: "Choose from Ayurvedic shampoos, hair oils, soaps, skincare products, and oral care essentials made with herbal ingredients."
      },
      {
        icon: Shield,
        title: "Immunity & Wellness Solutions",
        sub: "Explore products formulated to support seasonal wellness and overall health using traditional Ayurvedic herbs."
      },
      {
        icon: Activity,
        title: "Digestive & Daily Wellness Products",
        sub: "Find herbal products that complement a healthy lifestyle and support everyday digestive wellness based on Ayurvedic principles."
      },
      {
        icon: Gift,
        title: "Ayurvedic Gift Packs",
        sub: "Browse wellness kits and curated product collections that make thoughtful gifts for family and friends who appreciate natural healthcare traditions."
      }
    ].map((item) => (
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
                  <span className="text-[#056bfa] font-black text-[12px] uppercase hover:underline decoration-2">Visit Store â†’</span>
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
          Kerala Ayurveda Coupon Codes, Promo Codes & Ayurvedic Wellness Deals
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[950px]">
            <thead>
              <tr className="bg-[#056BFA] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-none rounded-br-none">
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Coupon Code</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 font-bold text-[14px]">
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Kalyanaka Ghee</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $28.95</td>
                <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">COUNTNEW10</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 10% OFF with code</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Mental Wellness Ghee</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Rasnasapthakam Kwath</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $22.95</td>
                <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">COUNTNEW10</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 10% OFF with code</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Joint & Muscle Support</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Digi Eye Defense</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $31.95</td>
                <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">COUNTNEW10</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 10% OFF with code</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eye Health Supplement</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Indukantham Kwath</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $25.95</td>
                <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">COUNTNEW10</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 10% OFF with code</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Daily Wellness Tablets</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Kumkumadi Oil</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $27</td>
                <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">COUNTNEW10</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 10% OFF with code</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Ayurvedic Face Oil</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Shilajit Capsules</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $25.95</td>
                <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">COUNTNEW10</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 10% OFF with code</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Energy & Stamina Support</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Brilliant Mind</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $28.95</td>
                <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">COUNTNEW10</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 10% OFF with code</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Brain & Memory Support</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Kumkumadi Thailam</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $27</td>
                <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">COUNTNEW10</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 10% OFF with code</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Natural Face Oil</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Triphala Capsules</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $28.95</td>
                <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">COUNTNEW10</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 10% OFF with code</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Gut Health Support</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Dashamula Capsules</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">Only $28.95</td>
                <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">COUNTNEW10</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 10% OFF with code</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Detox Support</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Embrace Holistic Wellness While Saving More with Kerala Ayurveda Coupon Codes
          </p>
          <p>
            Ayurveda has been trusted for centuries to support overall health and well-being through natural remedies and time-tested practices. Kerala Ayurveda brings this tradition to modern lifestyles with a wide range of authentic Ayurvedic products and wellness solutions. Before placing your next order, browse the latest Kerala Ayurveda coupon codes, promo codes, and exclusive wellness deals on Couponsbit to enjoy extra savings.
          </p>
          <p>
            Whether you're looking for herbal supplements, Ayurvedic medicines, personal care products, immunity support, or wellness essentials, Kerala Ayurveda offers carefully crafted solutions rooted in traditional <Link href="/stores/the-ayurveda-experience-discount-code">Ayurvedic principles</Link>. With verified offers from Couponsbit, taking a natural approach to wellness becomes even more affordable.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Kerala Ayurveda Stands Out</h3>
            <p><strong>Rooted in Authentic Ayurvedic Principles:</strong> The brand follows the time-tested philosophy of Ayurveda, using traditional herbal knowledge to develop its wellness products.</p>
            <p><strong>Wide Selection of Herbal Products:</strong> From daily wellness supplements to personal care essentials, Kerala Ayurveda offers solutions across multiple health and beauty categories.</p>
            <p><strong>Trusted Heritage:</strong> With decades of experience in Ayurvedic healthcare, the brand has built a reputation for authenticity and quality.</p>
            <p><strong>Holistic Approach to Wellness:</strong> Kerala Ayurveda promotes overall well-being by focusing on balance, healthy lifestyle practices, and natural ingredients rather than quick fixes.</p>
            <p><strong>Carefully Selected Herbal Ingredients:</strong> Many products feature herbs and botanical ingredients traditionally used in Ayurveda for everyday wellness and self-care.</p>
            <p><strong>Wellness Beyond Products:</strong> Along with its product range, Kerala Ayurveda also supports Ayurvedic education, consultations, and wellness services, reflecting its broader commitment to holistic health.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-2">How to Use a Kerala Ayurveda Coupon Code</h3>
            <p className="text-gray-500 text-sm font-bold mb-6">Saving on your wellness purchase is simple.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit Couponsbit â€” Browse the latest Kerala Ayurveda coupon codes and promotional offers.",
                "Step 2: Select the Best Offer â€” Choose the deal that matches the products you plan to purchase.",
                "Step 3: Copy the Coupon Code â€” Copy the available promo code before visiting the official Kerala Ayurveda website.",
                "Step 4: Add Products to Your Cart â€” Select your preferred Ayurvedic products and proceed to checkout.",
                "Step 5: Apply the Coupon â€” Enter the coupon code in the designated field to receive the applicable discount.",
                "Step 6: Complete Your Order â€” Finish your purchase and enjoy additional savings on your wellness essentials."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Simple Ways to Save More on Kerala Ayurveda</h3>
            <p><strong>Check Couponsbit Before Every Purchase:</strong> Browse Couponsbit for the latest Kerala Ayurveda coupon codes and verified promotional offers before placing your order.</p>
            <p><strong>Shop During Festival & Wellness Sales:</strong> Special occasions and seasonal campaigns often feature discounts across popular Ayurvedic products and wellness collections.</p>
            <p><strong>Purchase Wellness Combos:</strong> Buying complementary products together may provide better value than purchasing them individually, especially during promotional periods.</p>
            <p><strong>Explore New Product Launches:</strong> Keep an eye on newly introduced herbal formulations and wellness products, which may come with introductory offers.</p>
            <p><strong>Subscribe for Brand Updates:</strong> Stay informed about upcoming promotions, product launches, and exclusive wellness campaigns through the brand's updates.</p>
            <p><strong>Plan Your Wellness Purchases:</strong> If you regularly use Ayurvedic products, shopping during major promotional events can help you save over time.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Popular Categories at Kerala Ayurveda</h3>
            <p>Customers frequently explore:</p>
            <p>Ayurvedic medicines, Herbal supplements, Immunity support, Digestive wellness products, Hair oils, Ayurvedic shampoos, Skincare products, Herbal soaps, Oral care products, Wellness kits, Personal care essentials, and New arrivals.</p>
            <p>Whether you're beginning your Ayurvedic wellness journey or continuing an established routine, Kerala Ayurveda offers products inspired by one of the world's oldest systems of natural healthcare.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Check Couponsbit Before Shopping?</h3>
            <p>Finding updated wellness offers shouldn't be difficult. Couponsbit regularly brings together verified Kerala Ayurveda coupon codes, promo codes, and exclusive discounts to help shoppers save more.</p>
            <p>Our platform is completely free to use and features deals across hundreds of categories, including health, beauty, fashion, electronics, travel, food delivery, home essentials, and lifestyle brands.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Support Your Wellness Journey While Spending Less</h3>
            <p>Whether you're exploring Ayurveda for the first time or already incorporate herbal wellness into your daily routine, Kerala Ayurveda offers a wide selection of products inspired by traditional healing practices and modern quality standards.</p>
            <p>Before placing your next order, visit Couponsbit to discover the latest Kerala Ayurveda coupon codes, promo codes, and exclusive wellness deals. It's a simple way to save more while investing in your everyday health and well-being.</p>
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
            { q: "What is Kerala Ayurveda?", a: "Kerala Ayurveda is an Indian Ayurvedic wellness brand offering herbal products, Ayurvedic medicines, personal care essentials, and wellness solutions inspired by traditional Ayurvedic practices." },
            { q: "What products does Kerala Ayurveda offer?", a: "The brand offers Ayurvedic medicines, herbal supplements, immunity support products, skincare, haircare, personal care items, wellness kits, and other Ayurvedic essentials." },
            { q: "Does Kerala Ayurveda only sell wellness products?", a: "No. In addition to wellness products, Kerala Ayurveda is also associated with Ayurvedic consultations, wellness centers, and educational initiatives focused on Ayurveda." },
            { q: "Where can I find Kerala Ayurveda coupon codes?", a: "You can find the latest Kerala Ayurveda coupon codes, promo codes, and verified wellness deals on Couponsbit." },
            { q: "Are Kerala Ayurveda products based on traditional Ayurvedic principles?", a: "Yes. The brand develops its products using Ayurvedic knowledge and carefully selected herbal ingredients while following modern quality standards." },
            { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps shoppers discover verified coupon codes and exclusive offers from hundreds of leading brands." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Kerala Ayurveda Searches</h3>
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Kerala Ayurveda Deals</h3>
          <div className="space-y-6">
            {KERALA_COUPONS.slice(0, 5).map((coupon, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">K</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{coupon.topLabel} {coupon.mainValue}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{coupon.title}</p>
                </div>
                <button onClick={() => handleCopy(coupon)} aria-label={`Get Kerala Ayurveda deal: ${coupon.title}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</button>
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