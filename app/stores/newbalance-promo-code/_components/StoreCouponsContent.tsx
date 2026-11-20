"use client";

import { useState, useEffect } from "react";
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
  Search,
  CheckSquare,
  CheckCircle2,
  ChevronDown,
  Laptop,
  CheckCircle,
  Tv,
  Plane,
  Code,
  Zap,
  LayoutGrid,
  ShoppingBag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { type Coupon, NEWBALANCE_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Nike",        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp",             dealText: "Up To 60% OFF", href: "/stores/nike-discount-code" },
  { name: "Adidas",      logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788783181/adidas-logo_brulmo.webp",           dealText: "Up To 50% OFF", href: "/stores/adidas-promo-code" },
  { name: "HOKA",        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789994531/hoka-logo_zrq4ot.webp",            dealText: "Up To 50% OFF", href: "/stores/hoka-coupon-code" },
  { name: "Converse",    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793338495/converse-logo_zpgzpr.webp",         dealText: "Up To 80% OFF", href: "/stores/converse-promo-code" },
  { name: "Birkenstock", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1792648468/birkenstork_logo_nin4ru.webp",     dealText: "Up To 50% OFF", href: "/stores/birkenstock-promo-code" },
  { name: "JD Sports",   logo: "https://res.cloudinary.com/couponsbit/image/upload/v1791446502/jD-logo_lfuzxu.webp",              dealText: "Up To 50% OFF", href: "/stores/jdsports-discount-code" },
];

const STORE_URL = "https://newbalancemalaysia.pxf.io/c/4303217/2202900/28355?subId1=1015";

export default function NewBalanceCouponsContent() {
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
      <Navbar />

      {/* Code Copy Modal */}
      {showModal && activeModalCoupon && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-black font-black text-xl mb-2">Coupon Code Copied!</h3>
            <div className="bg-[#f0f7ff] border border-[#056bfa]/20 rounded-2xl px-6 py-3 mb-6">
              <span className="text-[#056bfa] font-black text-2xl font-mono">{activeModalCoupon.code}</span>
            </div>
            <a
              href={STORE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              onClick={() => setShowModal(false)}
              className="block w-full bg-[#056bfa] text-white font-black py-4 rounded-2xl mb-3 hover:bg-[#005f91] transition-colors"
            >
              Continue to New Balance →
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-500 font-bold text-sm hover:text-black transition-colors"
            >
              Close Window
            </button>
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

      <main>
        {/* Section 1: Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">New Balance</span>
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
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <img src="https://res.cloudinary.com/zzlsqavg/image/upload/v1795168908/newbalance-logo.webp" alt="New Balance" width={112} height={112} className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">New Balance Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-70" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(3.8k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-7 max-w-[400px] text-justify">
                      Step into bigger savings with a New Balance promo code and shop top footwear and apparel deals in Nov 2026. Verified offers include up to 70% off selected shoes, up to 60% off footwear, and 15% off your first online order when you subscribe. Looking for a discount code? You can also find up to 53% off apparel and retailer-exclusive savings across sneakers, running shoes, activewear, and accessories with regularly updated deals.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-32">
                  {[
                    { icon: Tag, val: "10", label: "Coupons" },
                    { icon: Percent, val: "60%", label: "Max Off" },
                    { icon: Users, val: "5M+", label: "Shoppers" },
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
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group bg-gradient-to-br from-[#1a1a1a] to-[#444] flex items-center justify-center">

                  {/* Slide 1 */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center p-8"
                    style={{ opacity: activeSlide === 0 ? 1 : 0 }}
                  >
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-center text-white">
                      <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Sitewide Sale</p>
                      <p className="text-6xl font-black">40%</p>
                      <p className="text-2xl font-bold mt-1">OFF Sale Styles</p>
                      <p className="text-sm opacity-80 mt-3">Fresh Foam X, 990v6 & more</p>
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center p-8"
                    style={{ opacity: activeSlide === 1 ? 1 : 0 }}
                  >
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-center text-white">
                      <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Free Shipping</p>
                      <p className="text-6xl font-black">FREE</p>
                      <p className="text-2xl font-bold mt-1">On Orders $75+</p>
                      <p className="text-sm opacity-80 mt-3">Plus free returns on eligible orders</p>
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center p-8"
                    style={{ opacity: activeSlide === 2 ? 1 : 0 }}
                  >
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-center text-white">
                      <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Clearance Sale</p>
                      <p className="text-6xl font-black">60%</p>
                      <p className="text-2xl font-bold mt-1">OFF Clearance</p>
                      <p className="text-sm opacity-80 mt-3">Past-season styles at big savings</p>
                    </a>
                  </div>

                  {/* Controls */}
                  <button
                    onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5 text-white rotate-180" />
                  </button>

                  <button
                    onClick={() => setActiveSlide((prev) => (prev + 1) % 3)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {[0, 1, 2].map((i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all",
                          activeSlide === i ? "bg-white w-5" : "bg-white/50"
                        )}
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
                <div className="mb-8">
                  <h2 className="text-2xl font-black text-black leading-tight">New Balance Coupon Codes & Offers</h2>
                  <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">10 Coupons & Offers Available</p>
                </div>

                {NEWBALANCE_COUPONS.map((coupon) => (
                  <div key={coupon.id} id={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">

                        {/* LEFT OFFER BOX */}
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
                              {coupon.topLabel}
                            </p>
                            <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                              {coupon.mainValue}
                            </div>
                            <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">
                              {coupon.offText}
                            </p>
                          </div>
                        </div>

                        {/* CONTENT SECTION */}
                        <div className="flex-1 flex flex-col lg:flex-row min-w-0">

                          {/* CENTER CONTENT */}
                          <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">

                            {/* BADGES */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                                Limited Time
                              </span>
                              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                                Verified Deal
                              </span>
                            </div>

                            {/* HEADING */}
                            <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                              {coupon.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                              {coupon.description}
                            </p>

                            {/* VIEW DETAILS */}
                            <button
                              type="button"
                              onClick={() => setExpandedCouponId(expandedCouponId === coupon.id ? null : coupon.id)}
                              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
                            >
                              View Details
                              <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${expandedCouponId === coupon.id ? "rotate-180" : ""}`}
                              />
                            </button>

                            {/* ACCORDION */}
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                expandedCouponId === coupon.id
                                  ? "max-h-[250px] opacity-100 mt-3"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {coupon.points.map((point, pi) => (
                                  <li key={pi} className="flex items-start gap-2">
                                    <span className="text-[#0344b0]">•</span>
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* BUTTON SECTION */}
                          <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6 gap-3">
                            {coupon.code && (
                              <button
                                onClick={() => handleCopy(coupon)}
                                className="w-full bg-white border-2 border-dashed border-[#056bfa] text-[#056bfa] font-black text-sm px-4 py-2.5 rounded-xl flex items-center justify-between gap-2 hover:bg-[#f0f7ff] transition-colors"
                              >
                                <span className="font-mono">{coupon.code}</span>
                                <Copy className="w-4 h-4 shrink-0" />
                              </button>
                            )}
                            <a
                              href={STORE_URL}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label={`Get New Balance deal: ${coupon.title}`}
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
                    <img
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png"
                      alt="Add as a preferred source on Google"
                      width={280}
                      height={70}
                      className="w-full max-w-[260px] h-auto object-contain"
                    />
                  </a>
                </div>

                {/* About Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">New Balance Promo Code & Coupon Codes</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    A New Balance promo code can help eligible shoppers save on footwear and apparel when a promotion is available. New Balance promotions may change depending on the season, campaign, or other offer conditions, so it's worth checking for a current deal before checkout.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    If you're specifically searching for a New Balance coupon code, CouponsBit brings available offers together in one place. You can browse current promotions, check the terms, and then head to New Balance to shop.
                  </p>
                  <h3 className="text-black font-black text-lg mb-6">Real New Balance Discount Offers</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Searching for a real New Balance discount code? Always check the offer details before applying a code. A promotion may have restrictions based on the product category, purchase amount, expiration date, or other conditions.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Categories Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: ShoppingBag, name: "Fashion", count: "620+", color: "text-pink-500", href: "/categories/fashion" },
                      { icon: Laptop, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                      { icon: Plane, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
                      { icon: Tv, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                      { icon: Zap, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" }
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
                <div className="rounded-[32px] border border-[#f0f0f0] bg-white p-8 shadow-sm">
                  <div className="mb-8">
                    <span className="mb-2 inline-block rounded-full bg-[#e8f6f8] px-3 py-1 text-xs font-bold text-[#056bfa]">
                      CouponsBit Guide
                    </span>
                    <h3 className="text-xl font-black text-black sm:text-2xl">
                      How to Use a New Balance Promo Code
                    </h3>
                    <p className="mt-2 text-sm font-medium text-gray-500">
                      Using a New Balance promo code is simple when an eligible promotion is available.
                    </p>
                  </div>

                  <div className="relative space-y-6 before:absolute before:left-[19px] before:top-3 before:h-[calc(100%-24px)] before:w-[2px] before:bg-gray-100">
                    {[
                      {
                        step: "01",
                        icon: Search,
                        title: "Find a New Balance Promo Code",
                        desc: "Visit the New Balance page on CouponsBit and browse available promo codes, coupon codes, and shoe deals.",
                      },
                      {
                        step: "02",
                        icon: CheckSquare,
                        title: "Select Your New Balance Deal",
                        desc: "Choose an offer that matches your planned purchase and read the applicable terms.",
                      },
                      {
                        step: "03",
                        icon: Copy,
                        title: "Copy the New Balance Coupon Code",
                        desc: "If the offer requires a code, reveal it and copy the New Balance coupon code.",
                      },
                      {
                        step: "04",
                        icon: ShoppingBag,
                        title: "Shop at New Balance",
                        desc: "Visit New Balance, browse footwear and apparel, and add your items to the cart.",
                      },
                      {
                        step: "05",
                        icon: Tag,
                        title: "Apply the Discount Code",
                        desc: "Proceed through checkout and enter the applicable coupon or promotional code in the designated field.",
                      },
                      {
                        step: "06",
                        icon: CheckCircle2,
                        title: "Complete Your Purchase",
                        desc: "Check your order total to confirm that the applicable discount has been reflected before completing your purchase.",
                      },
                    ].map((item) => (
                      <div key={item.step} className="relative flex items-start gap-4">
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#e8f6f8] text-[#056bfa] ring-4 ring-white">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="pt-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black uppercase tracking-wider text-[#056bfa]">
                              Step {item.step}
                            </span>
                            <h4 className="text-sm font-black text-black">{item.title}</h4>
                          </div>
                          <p className="mt-1 text-xs font-medium leading-relaxed text-gray-500">
                            {item.desc}
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

        {/* Section 5: More Stores You'll Love */}
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
                    <img src={store.logo} alt={store.name} width={120} height={48} className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
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

              {/* Left Column: Main Text Content */}
              <div className="prose max-w-none text-justify">
                <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                  New Balance Promo Codes, Coupon Codes & Shoe Deals 2026
                </h2>

                <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[850px]">
                      <thead>
                        <tr className="bg-[#056BFA]">
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Offer</th>
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount</th>
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Applicable On</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 font-bold text-[14px]">
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle">Sitewide Sale</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Up to 40% OFF</td>
                          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
                          <td className="p-5 text-gray-500 align-middle">While stocks last</td>
                          <td className="p-5 text-gray-500 align-middle">Selected sale styles</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle">Free Shipping</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">FREE Shipping</td>
                          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
                          <td className="p-5 text-gray-500 align-middle">Orders over $75</td>
                          <td className="p-5 text-gray-500 align-middle">Footwear, apparel & accessories</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle">New Customer</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Save 20% OFF</td>
                          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">New Users</td>
                          <td className="p-5 text-gray-500 align-middle">First order only</td>
                          <td className="p-5 text-gray-500 align-middle">Full-price items</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle">Clearance</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Up to 60% OFF</td>
                          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
                          <td className="p-5 text-gray-500 align-middle">While clearance stock lasts</td>
                          <td className="p-5 text-gray-500 align-middle">Past-season footwear & apparel</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle">Student Discount</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Flat 15% OFF</td>
                          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">Students Only</td>
                          <td className="p-5 text-gray-500 align-middle">Verification required</td>
                          <td className="p-5 text-gray-500 align-middle">Full-price footwear & apparel</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  className={cn(
                    "text-gray-500 font-bold leading-relaxed space-y-6 relative transition-all duration-500",
                    !isReadMore && "max-h-[500px] overflow-hidden"
                  )}
                >
                  <p>
                    Looking for the latest New Balance promo code, New Balance coupon code, or New Balance discount code? CouponsBit helps you find current New Balance offers so you can save on running shoes, lifestyle sneakers, apparel, and accessories.
                  </p>
                  <p>
                    Whether you're shopping for Fresh Foam X running shoes, 990v6 sneakers, women's lifestyle styles, or kids' footwear, checking for a New Balance coupon before you buy can help you get better value.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      About New Balance
                    </h3>
                    <p>
                      New Balance is an American athletic footwear and apparel brand founded in 1906. The company is known for its performance running shoes, lifestyle sneakers, and its Made in USA collection.
                    </p>
                    <p>
                      New Balance offers a wide range of products across men's, women's, and kids' categories, with a particular focus on fit, comfort, and performance.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      Popular New Balance Shoe Collections
                    </h3>
                    <p>
                      New Balance offers several popular footwear lines that appeal to different types of shoppers:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Fresh Foam X — cushioned running and training shoes</li>
                      <li>990v6 — premium lifestyle and heritage sneakers</li>
                      <li>Made in USA — domestically produced footwear</li>
                      <li>FuelCell — performance running shoes</li>
                      <li>327, 574, 550 — lifestyle and retro sneaker styles</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      New Balance Running Shoes
                    </h3>
                    <p>
                      New Balance running shoes are designed for road running, trail running, training, and everyday wear. The Fresh Foam X and FuelCell lines are among the most popular choices for performance runners.
                    </p>
                    <p>
                      Available in multiple widths, New Balance running shoes cater to a range of foot shapes, making them a popular choice for shoppers who need a wider fit.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      New Balance Lifestyle Sneakers
                    </h3>
                    <p>
                      Beyond performance footwear, New Balance offers a broad range of lifestyle sneakers. The 990v6 and 574 models are popular choices for everyday casual wear, while the 550 and 327 styles have become fashion favorites.
                    </p>
                    <p>
                      If you're looking for a lifestyle sneaker with a mix of heritage and modern design, New Balance offers options across a wide price range.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      How to Save on New Balance
                    </h3>
                    <div className="space-y-6 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-6">
                      <p className="text-gray-600">
                        A few smart shopping strategies can make a difference when buying New Balance footwear and apparel:
                      </p>
                      <div className="space-y-4 text-gray-700">
                        <p><strong>Check New Balance Sale Section:</strong> New Balance regularly runs sales on footwear and apparel, with discounts of up to 40% or more on selected styles.</p>
                        <p><strong>Browse Clearance Items:</strong> The clearance section offers past-season styles at significant discounts, often up to 60% off.</p>
                        <p><strong>Use a Student Discount:</strong> Students can save an extra 15% with verified student status.</p>
                        <p><strong>Meet the Free Shipping Threshold:</strong> Orders over $75 typically qualify for free standard shipping.</p>
                        <p><strong>Check CouponsBit Before Buying:</strong> Always search for a New Balance promo code, New Balance coupon code, or New Balance discount code before checkout.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      Save More With New Balance Promo Codes & Shoe Deals
                    </h3>
                    <p>
                      Whether you're shopping for running shoes, lifestyle sneakers, apparel, or accessories, comparing available offers can help you make a smarter purchase.
                    </p>
                    <p>
                      Before buying, check CouponsBit for the latest New Balance promo code, New Balance coupon code, New Balance discount code, and New Balance shoe deals. Compare your options, review the offer terms, and choose the deal that gives you the best overall value.
                    </p>
                  </div>

                  {!isReadMore && (
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
                  )}
                </div>

                {/* Read More / Read Less Toggle */}
                <button
                  onClick={() => setIsReadMore(!isReadMore)}
                  className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline focus:outline-none"
                >
                  {isReadMore ? "Read Less" : "Read More"}{" "}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      isReadMore && "rotate-180"
                    )}
                  />
                </button>

                {/* FAQ Accordion */}
                <div className="faq-section mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">
                    New Balance Promo Code FAQs
                  </h3>
                  {[
                    { q: "Does New Balance Have a Promo Code?", a: "New Balance may offer promotional codes, sale events, and discount deals at different times. Check CouponsBit for currently available New Balance promo codes before making a purchase." },
                    { q: "Does New Balance Offer Free Shipping?", a: "New Balance typically offers free standard shipping on orders that meet a minimum purchase threshold. Check the current terms on CouponsBit or at checkout before placing your order." },
                    { q: "Can I Stack New Balance Coupons?", a: "New Balance generally allows one promotional code per order. Stacking multiple codes is usually not permitted, but free shipping and sale pricing may apply together depending on the offer terms." },
                    { q: "Does New Balance Have a Student Discount?", a: "New Balance may offer a student discount with verified student status. Check CouponsBit for currently available student offers before subscribing." },
                    { q: "What Are the Most Popular New Balance Shoes?", a: "Popular New Balance models include the Fresh Foam X, 990v6, 574, 327, 550, and FuelCell lines. Availability and pricing vary by style and colorway." },
                    { q: "Does New Balance Make Shoes in the USA?", a: "Yes. New Balance is known for its Made in USA collection, which is produced in New England factories. These styles are typically priced higher than imported footwear." },
                    { q: "Does New Balance Offer a Clearance Sale?", a: "New Balance regularly offers clearance pricing on past-season footwear and apparel. Discounts in the clearance section can be significant, often up to 60% off original prices." },
                    { q: "Is CouponsBit Free to Use?", a: "Yes. CouponsBit is free to use. You can browse available coupon codes, promotions, and deals across fashion, electronics, travel, and other categories." }
                  ].map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors focus:outline-none"
                      >
                        <span className="text-black font-black text-base">{faq.q}</span>
                        <div
                          className={cn(
                            "bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300",
                            openFaq === i && "bg-[#056bfa]"
                          )}
                        >
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 text-gray-500 transition-transform duration-300",
                              openFaq === i && "text-white rotate-180"
                            )}
                          />
                        </div>
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 px-8 bg-white",
                          openFaq === i
                            ? "max-h-[500px] pb-8 opacity-100"
                            : "max-h-0 opacity-0 pb-0"
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

              {/* Right Column: Sidebar */}
              <div className="space-y-10">
                <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                    Popular New Balance Searches
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Fresh Foam X",
                      "990v6 Sneakers",
                      "Made in USA",
                      "Running Shoes",
                      "Free Shipping",
                      "Student Discount",
                      "New Balance Sale",
                      "Clearance Deals",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                    Today's Top New Balance Deals
                  </h3>
                  <div className="space-y-6">
                    {NEWBALANCE_COUPONS.slice(0, 5).map((coupon, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                          N
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                            {coupon.topLabel} {coupon.mainValue} {coupon.offText}
                          </p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-1 normal-case">
                            {coupon.description}
                          </p>
                        </div>
                        <a
                          href={STORE_URL}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
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
