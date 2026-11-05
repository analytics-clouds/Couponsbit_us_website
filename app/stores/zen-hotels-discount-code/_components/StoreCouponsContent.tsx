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
  ChevronDown,
  CheckCircle,
  X,
  Laptop,
  Plane,
  Hotel, Building, Palmtree, Bed, Briefcase,
  Home,
  Tv,
  Code, LayoutGrid, Zap,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { type Coupon, ZEN_HOTELS_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Agoda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg", dealText: "Up to 69% OFF", href: "/stores/agoda-discount-code" },
  { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", dealText: "Up to 40% OFF", href: "/stores/expedia-discount-code" },
  { name: "Radisson", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/radission-logo_gxjubt.webp", dealText: "Up To 40% OFF", href: "/stores/radisson-discount-code" },
  { name: "vegas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/vegas-logo_sifnax.webp", dealText: "Up To 35% OFF", href: "/stores/vegas-discount-code" },
  { name: "ITC Hotels", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/itc-hotels-logo_ceakgl.webp", dealText: "Up To 50% OFF", href: "/stores/itc-hotels-discount-code" },
  { name: "Booking", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/booking-logo_dtnn30.webp", dealText: "Up To 40% OFF", href: "/stores/booking-promo-code" },
];

export default function ZenHotelsCouponsContent() {
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
    navigator.clipboard.writeText(coupon.code);
    setToastCode(coupon.code);
    setShowToast(true);
    setActiveModalCoupon(coupon);
    setShowModal(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">

      {/* Modal */}
      {showModal && activeModalCoupon && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white rounded-[32px] shadow-2xl max-w-md w-full p-8 z-10" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#f5f5f5] transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-b from-[#056bfa] to-[#006d9b] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-black text-2xl italic">Z</div>
              <h3 className="text-black font-black text-xl mb-1">{activeModalCoupon.title}</h3>
              <p className="text-gray-500 font-bold text-sm">{activeModalCoupon.description}</p>
            </div>
            {activeModalCoupon.code && (
              <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-6 text-center">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Your Coupon Code</p>
                <p className="text-2xl font-black text-black font-mono tracking-widest">{activeModalCoupon.code}</p>
              </div>
            )}
            <a
              href="https://emergingtravelinc.pxf.io/c/4303217/3321365/43614?subId1=1015"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="block w-full bg-[#056bfa] hover:bg-[#005f91] text-white font-black text-center py-4 rounded-2xl transition-colors"
            >
              Continue to Zen Hotels →
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
              <span className="text-black font-extrabold">Zen Hotels</span>
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
                  <a href="https://emergingtravelinc.pxf.io/c/4303217/3321365/43614?subId1=1015" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782288848/zen-hotels-coupon-code_fbtoik.webp" alt="Zen Hotels" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Zen Hotels Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest ZenHotels Discount Code and ZenHotels Promo Code for November 2026. Enjoy $35 OFF eligible hotel bookings made through the ZenHotels app or book hotel stays from just $291. Discover great deals on luxury hotels in New York, Greece, Portugal, Prague, Paris, Milan, and the UK, with stays at top-rated properties like Residence Inn by Marriott JFK, Tivoli Carvoeiro, and Hotel Berna. Browse verified ZenHotels offers and book your next trip for less.
                    </p>
                    <a
                      href="https://emergingtravelinc.pxf.io/c/4303217/3321365/43614?subId1=1015"
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
                    { icon: Tag, val: "8", label: "Coupons" },
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
                    <a href="https://emergingtravelinc.pxf.io/c/4303217/3321365/43614?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782374308/zen-hotels-discount-code_jf3fpe.webp" alt="Zen Hotels Discount Code" width={800} height={350} className="w-full h-full object-cover" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://emergingtravelinc.pxf.io/c/4303217/3321365/43614?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782374308/zen-hotels-promo-code_tjhyjc.webp" alt="Zen Hotels Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://emergingtravelinc.pxf.io/c/4303217/3321365/43614?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782374308/zen-hotels-voucher-code_sfgxvo.webp" alt="Zen Hotels Voucher Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Zen Hotels Coupon Codes & Offers</h2>
                </div>

                {ZEN_HOTELS_COUPONS.map((coupon) => (
                  <div key={coupon.id} id={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">{coupon.topLabel}</p>
                            <div className={`${coupon.valueFontClass} font-extrabold leading-none mt-2`}>{coupon.mainValue}</div>
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
                                {coupon.points.map((point, pi) => (
                                  <li key={pi} className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>{point}</li>
                                ))}
                              </ul>
                            </div>
                            {coupon.code && (
                              <button
                                onClick={() => handleCopy(coupon)}
                                className="mt-3 inline-flex items-center gap-2 bg-[#f0f7ff] text-[#056bfa] font-black text-xs px-4 py-2 rounded-xl hover:bg-[#056bfa] hover:text-white transition-all"
                              >
                                {coupon.code}
                              </button>
                            )}
                          </div>
                          <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                            <a
                              href="https://emergingtravelinc.pxf.io/c/4303217/3321365/43614?subId1=1015"
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label={`Get Zen Hotels deal: ${coupon.title}`}
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
                  <h3 className="text-black font-black text-lg mb-6">About Zen Hotels</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    ZenHotels is an international hotel reservation platform that allows travelers to search, compare, and book accommodations across countless destinations worldwide. The platform brings together a vast range of lodging options, making it easier for users to find stays that fit their preferences and budget.

                  </p>
                  <a href="https://emergingtravelinc.pxf.io/c/4303217/3321365/43614?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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

                {/* Accommodation Options Card */}
             <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <div className="mb-8">
    <h3 className="text-black font-black text-lg mb-2">Accommodation Options Available on ZenHotels</h3>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      ZenHotels provides access to a diverse selection of properties to suit different preferences and travel styles.
    </p>
  </div>

  <div className="space-y-8">
    {[
      {
        icon: Hotel,
        title: "Hotels",
        sub: "Choose from budget-friendly properties, boutique hotels, premium resorts, and luxury accommodations."
      },
      {
        icon: Building,
        title: "Apartments",
        sub: "Ideal for families, groups, or travelers seeking extra space and home-style comfort."
      },
      {
        icon: Palmtree,
        title: "Resorts",
        sub: "Discover beachfront retreats, wellness resorts, and all-inclusive vacation destinations."
      },
      {
        icon: Home,
        title: "Vacation Rentals",
        sub: "Enjoy private stays that offer greater flexibility and a personalized travel experience."
      },
      {
        icon: Bed,
        title: "Hostels",
        sub: "Affordable lodging options designed for backpackers, solo travelers, and budget-conscious explorers."
      },
      {
        icon: Briefcase,
        title: "Business Travel Accommodations",
        sub: "Find convenient stays with amenities suited for meetings, work trips, and professional travel."
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
          ZenHotels Coupon Codes, Promo Deals & Hotel Booking Discounts
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
                <td className="p-5 text-black font-black align-middle max-w-[220px]">New York Stay Deal – Residence Inn by Marriott JFK</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $2,625</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Save up to $80, complimentary JFK shuttle</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Residence Inn New York JFK</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">App Exclusive Offer – $35 OFF</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">$35 OFF</td>
                <td className="p-5 text-gray-500 align-middle">Bookings of $700+ via mobile app</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">App-exclusive, min. booking $700</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Hotel Bookings via App</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Greece Beach Escape – Avra Imperial Hotel</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $2,009</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Five-star beachfront resort, Crete</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Avra Imperial Hotel, Crete</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Portugal Luxury Stay – Tivoli Carvoeiro</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $2,553</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Near Praia do Vale Covo, Algarve</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Tivoli Carvoeiro, Algarve</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Prague Luxury Escape – Alchymist Grand Hotel</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $1,145</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Luxury suites, spa, gourmet dining</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Alchymist Grand Hotel, Prague</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Paris City Break – Hôtel Vacances Bleues Provinces Opéra</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $852</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Near the Opéra district</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Hotel near Paris Opéra</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">Milan Romantic Getaway – Hotel Berna</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $818</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Close to shopping & transport</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Hotel Berna, Milan</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="p-5 text-black font-black align-middle max-w-[220px]">UK Weekend Escape – Moxy Chester</td>
                <td className="p-5 text-[#056BFA] font-black align-middle">From $291</td>
                <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                <td className="p-5 text-gray-500 align-middle max-w-[200px]">Save up to $11, modern rooms</td>
                <td className="p-5 text-gray-500 align-middle max-w-[240px]">Moxy Chester, UK</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More on Hotel Bookings with ZenHotels Coupon Codes</h3>
          <p>
            A memorable trip starts with finding the right place to stay, but getting a great deal on your accommodation can make the journey even better. With the latest <strong>ZenHotels coupon codes</strong>, promo offers, and <Link href="/stores/agoda-discount-code">hotel booking</Link> discounts available on CouponsBit, travelers can reduce their travel expenses while enjoying comfortable stays around the world.
          </p>
          <p>
            Whether you're organizing a quick <Link href="/stores/vegas-discount-code" className="text-[#056bfa] hover:underline">weekend escape</Link>, a family holiday, a work-related trip, or an overseas adventure, ZenHotels offers a wide selection of accommodation choices at competitive rates. Before confirming your reservation, explore CouponsBit to discover available savings opportunities that can help stretch your travel budget further.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">About ZenHotels</h3>
            <p>
              ZenHotels is an international hotel reservation platform that allows travelers to search, compare, and book accommodations across countless destinations worldwide. The platform brings together a vast range of lodging options, making it easier for users to find stays that fit their preferences and budget.
            </p>
            <p>
              From <Link href="/stores/radisson-discount-code" className="text-[#056bfa] hover:underline">luxury resorts</Link> and city hotels to apartments, hostels, and vacation rentals, ZenHotels serves both leisure and business travelers looking for convenient booking solutions. Its user-friendly interface enables travelers to compare prices, review amenities, and manage reservations through desktop and mobile devices.
            </p>
            <p>
              With access to millions of accommodation listings spread across hundreds of countries and regions, ZenHotels helps travelers find suitable lodging no matter where their journey takes them.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Travelers Prefer ZenHotels</h3>
            <p><strong>Huge Selection of Properties:</strong> Travelers gain access to millions of accommodation options located across the globe.</p>
            <p><strong>Competitive Room Rates:</strong> ZenHotels helps users compare pricing and identify attractive accommodation deals.</p>
            <p><strong>Exclusive Member Savings:</strong> Registered users may unlock special rates and promotions that are not always available to everyone.</p>
            <p><strong>Easy Mobile Booking:</strong> The mobile app allows travelers to search, reserve, and manage bookings anytime and anywhere.</p>
            <p><strong>Customer Support Assistance:</strong> Travelers can access support services whenever they need help with reservations or booking-related inquiries.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a ZenHotels Coupon Code</h3>
            <p className="text-gray-700 font-bold -mt-4">Getting extra savings on your accommodation booking is simple.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit CouponsBit — Explore the latest ZenHotels deals, discounts, and promotional offers.",
                "Step 2: Select Your Preferred Offer — Choose a coupon or deal that matches your travel requirements.",
                "Step 3: Copy the Coupon Code — Copy the available code before heading to the ZenHotels website.",
                "Step 4: Search for Accommodation — Enter your destination, travel dates, and preferred stay options.",
                "Step 5: Apply the Discount — Paste the coupon code during checkout if the promotion requires one.",
                "Step 6: Confirm Your Booking — Complete the reservation process and prepare for your upcoming trip."
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
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Tips to Save More on ZenHotels Bookings</h3>
            <p><strong>Reserve Early:</strong> Booking ahead often provides access to better availability and competitive pricing.</p>
            <p><strong>Compare Multiple Stays:</strong> Review different accommodation options before making a final choice.</p>
            <p><strong>Use the Mobile App:</strong> Special app-only promotions and discounts may be available to mobile users.</p>
            <p><strong>Travel During Off-Season Periods:</strong> Flexible travel dates can sometimes lead to lower room rates and better deals.</p>
            <p><strong>Check CouponsBit Before Booking:</strong> Always browse CouponsBit for the latest ZenHotels coupon codes and hotel offers before completing your purchase.</p>
            <p><strong>Join Membership Programs:</strong> Member-exclusive pricing and promotional benefits can provide additional savings.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Popular Travel Purposes Supported by ZenHotels</h3>
            <p className="text-gray-700 font-bold">Travelers frequently use ZenHotels for:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Family holidays</li>
              <li>Business travel</li>
              <li>Weekend escapes</li>
              <li>International vacations</li>
              <li>Solo adventures</li>
              <li>Romantic getaways</li>
              <li>Long-term stays</li>
              <li>Last-minute bookings</li>
            </ul>
            <p>The platform's extensive property inventory allows travelers to find accommodations tailored to different travel styles and budgets.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for ZenHotels Discounts?</h3>
            <p><strong>Regularly Updated Offers:</strong> We continuously refresh our deals to help users access current travel savings opportunities.</p>
            <p><strong>Convenient Access to Discounts:</strong> Find coupon codes, promotional offers, and travel deals in one easy-to-use destination.</p>
            <p><strong>Completely Free to Use:</strong> CouponsBit helps travelers save money without any subscription or membership fees.</p>
            <p><strong>Savings Across Leading Travel Brands:</strong> In addition to ZenHotels, CouponsBit features discounts from airlines, hotel providers, tour companies, vacation services, and other travel-related brands.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Travel Smarter and Spend Less</h3>
            <p>Whether you're planning a short city break, a dream vacation, or an important business trip, securing quality accommodation at the right price can make a significant difference to your overall travel experience.</p>
            <p>Browse the latest ZenHotels coupon codes, promo deals, and hotel booking discounts on CouponsBit today and unlock extra savings on your next journey.</p>
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
            { q: "What is ZenHotels?", a: "ZenHotels is an online accommodation booking platform that allows users to search, compare, and reserve hotels, apartments, resorts, hostels, and vacation rentals worldwide." },
            { q: "What types of accommodations can I book through ZenHotels?", a: "Travelers can choose from hotels, apartments, resorts, hostels, vacation homes, and various other lodging options." },
            { q: "Does ZenHotels have a mobile app?", a: "Yes. Travelers can use the ZenHotels app to search properties, manage bookings, and access travel information on the go." },
            { q: "Where can I find ZenHotels coupon codes?", a: "The latest ZenHotels coupon codes, hotel deals, and promotional offers can be found on CouponsBit." },
            { q: "Does ZenHotels provide member-only discounts?", a: "Yes. The platform occasionally offers exclusive rates and special deals for registered members." },
            { q: "Is CouponsBit free?", a: "Absolutely. CouponsBit is completely free and helps users discover discounts, coupon codes, and special promotions from popular travel brands." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular ZenHotels Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Hotel Booking Site", "ZenHotels Promo Code", "Discount Luxury Resorts", "Cheap Vacation Rental", "Last Minute Lodging", "ZenHotels App Deal", "Boutique Apartments", "CouponsBit Travel"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top ZenHotels Deals</h3>
          <div className="space-y-6">
            {ZEN_HOTELS_COUPONS.slice(0, 5).map((coupon, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">Z</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{coupon.topLabel} {coupon.mainValue} {coupon.offText}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{coupon.description}</p>
                </div>
                <a href="https://emergingtravelinc.pxf.io/c/4303217/3321365/43614?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" aria-label={`Get ZenHotels deal: ${coupon.topLabel} ${coupon.mainValue}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
