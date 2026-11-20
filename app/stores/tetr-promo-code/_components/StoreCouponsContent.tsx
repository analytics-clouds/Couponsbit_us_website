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
  BookOpen,
  CheckCircle,
  X,
  Tv,
  Plane,
  Code,
  Zap,
  LayoutGrid,
  Gamepad2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { type Coupon, TETR_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Epic",       logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789032950/epic-logo_kxo5y0.webp",          dealText: "Extra 25% OFF",         href: "/stores/epic-discount-code" },
  { name: "GamsGo",     logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787739252/gamesgo-logo_xo1xw9.webp",       dealText: "Save Up to 85%",        href: "/stores/gamsgo-discount-code" },
  { name: "Peacock",    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789994531/peacock-logo_mhfin7.webp",        dealText: "From $2.99/Month",      href: "/stores/peacock-promo-code" },
  { name: "Vistaprint", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1790238446/vista-logo_xyfgde.webp",          dealText: "Up To 40% OFF",         href: "/stores/vistaprint-promo-code" },
  { name: "Snapfish",   logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793338496/snapfist-logo_vvb7cq.webp",       dealText: "77% Off Tiles",         href: "/stores/snapfish-coupon-codes" },
  { name: "Instacart",  logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788868873/instacart-logo_yhmlhq.webp",      dealText: "Save $20 + Free Delivery", href: "/stores/instacart-promo-code" },
];

const STORE_URL = "https://tetr.io";

export default function TetrCouponsContent() {
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
              Continue to Tetr →
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
              <span className="text-black font-extrabold">Tetr</span>
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
                      <img src="https://res.cloudinary.com/zzlsqavg/image/upload/v1795168729/tetr-logo.webp" alt="Tetr" width={112} height={112} className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Tetr Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-60" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(1.2k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-7 max-w-[400px] text-justify">
                      Explore world-class learning opportunities with a Tetr promo code and discover innovative global education programs in Nov 2026. Verified listings include the Pathfinder: US Edition from USD 33,000, the Global Gap Year Program for USD 55,000, and the Family Business Program priced at USD 62,790. Looking for a discount code? Browse international entrepreneurship, technology, and leadership programs spanning multiple countries, with regularly updated information to help you compare your options confidently.
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
                    { icon: Tag, val: "8", label: "Coupons" },
                    { icon: Percent, val: "40%", label: "Max Off" },
                    { icon: Users, val: "500k+", label: "Players" },
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
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group bg-gradient-to-br from-[#056bfa] to-[#003d99] flex items-center justify-center">

                  {/* Slide 1 */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center p-8"
                    style={{ opacity: activeSlide === 0 ? 1 : 0 }}
                  >
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-center text-white">
                      <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Limited Time Offer</p>
                      <p className="text-6xl font-black">FREE</p>
                      <p className="text-2xl font-bold mt-1">7-Day Trial</p>
                      <p className="text-sm opacity-80 mt-3">New users — no commitment</p>
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center p-8"
                    style={{ opacity: activeSlide === 1 ? 1 : 0 }}
                  >
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-center text-white">
                      <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Annual Plan</p>
                      <p className="text-6xl font-black">40%</p>
                      <p className="text-2xl font-bold mt-1">OFF Plus</p>
                      <p className="text-sm opacity-80 mt-3">Save more with annual billing</p>
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center p-8"
                    style={{ opacity: activeSlide === 2 ? 1 : 0 }}
                  >
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-center text-white">
                      <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Student Deal</p>
                      <p className="text-6xl font-black">15%</p>
                      <p className="text-2xl font-bold mt-1">OFF for Students</p>
                      <p className="text-sm opacity-80 mt-3">Verified student discount</p>
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
                { icon: PiggyBank, title: "Big Savings", sub: "Save more on every subscription" },
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
                  <h2 className="text-2xl font-black text-black leading-tight">Tetr Promo Codes & Offers</h2>
                  <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">8 Coupons & Offers Available</p>
                </div>

                {TETR_COUPONS.map((coupon) => (
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
                              aria-label={`Get Tetr deal: ${coupon.title}`}
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
                  <h3 className="text-black font-black text-lg mb-6">Tetr Promo Code & TETR.IO Plus Deals</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    A Tetr promo code can help eligible subscribers save on TETR.IO Plus when a promotion is available. TETR.IO Plus promotions may change depending on the offer, so it's worth checking for a current deal before subscribing.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    If you're specifically searching for a Tetr discount code, CouponsBit brings available offers together in one place. You can browse current promotions, check the terms, and then head to TETR.IO to subscribe.
                  </p>
                  <h3 className="text-black font-black text-lg mb-6">TETR.IO Plus Subscription Benefits</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    TETR.IO Plus gives subscribers access to custom skins, animated stage backgrounds, an exclusive supporter badge, and an ad-free competitive experience. Always check the offer details before applying a Tetr promo code.
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
                      { icon: Laptop, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                      { icon: Tv, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                      { icon: Gamepad2, name: "Gaming", count: "150+", color: "text-green-500", href: "/categories/gaming" },
                      { icon: Code, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
                      How to Use a Tetr Promo Code
                    </h3>
                    <p className="mt-2 text-sm font-medium text-gray-500">
                      Using a Tetr promo code is simple when an eligible promotion is available.
                    </p>
                  </div>

                  <div className="relative space-y-6 before:absolute before:left-[19px] before:top-3 before:h-[calc(100%-24px)] before:w-[2px] before:bg-gray-100">
                    {[
                      {
                        step: "01",
                        icon: Search,
                        title: "Find a Tetr Promo Code",
                        desc: "Visit the Tetr page on CouponsBit and browse available promo codes and subscription deals.",
                      },
                      {
                        step: "02",
                        icon: CheckSquare,
                        title: "Select Your Tetr Deal",
                        desc: "Choose an offer that matches your plan and read the applicable terms before proceeding.",
                      },
                      {
                        step: "03",
                        icon: Copy,
                        title: "Copy the Tetr Discount Code",
                        desc: "If the offer requires a code, reveal it and copy the Tetr discount code to your clipboard.",
                      },
                      {
                        step: "04",
                        icon: Gamepad2,
                        title: "Head to TETR.IO",
                        desc: "Visit TETR.IO and navigate to the Plus subscription page to begin checkout.",
                      },
                      {
                        step: "05",
                        icon: Tag,
                        title: "Apply the Promo Code",
                        desc: "Enter the applicable coupon code in the designated promo field during checkout.",
                      },
                      {
                        step: "06",
                        icon: CheckCircle2,
                        title: "Complete Your Subscription",
                        desc: "Check your order total to confirm that the applicable discount has been reflected before subscribing.",
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
                  Tetr Promo Codes, Discount Codes & TETR.IO Plus Deals 2026
                </h2>

                <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                      <thead>
                        <tr className="bg-[#056BFA]">
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Offer</th>
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount</th>
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 font-bold text-[14px]">
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle">7-Day Free Trial</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle">FREE</td>
                          <td className="p-5 text-gray-500 align-middle">New Users</td>
                          <td className="p-5 text-gray-500 align-middle">First-time subscribers only</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle">Monthly Plus Plan</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle">Save 20% OFF</td>
                          <td className="p-5 text-gray-500 align-middle">All Users</td>
                          <td className="p-5 text-gray-500 align-middle">Monthly billing</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle">Annual Plus Plan</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle">Save 40% OFF</td>
                          <td className="p-5 text-gray-500 align-middle">All Users</td>
                          <td className="p-5 text-gray-500 align-middle">Annual billing — best value</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle">Student Discount</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle">Flat 15% OFF</td>
                          <td className="p-5 text-gray-500 align-middle">Students Only</td>
                          <td className="p-5 text-gray-500 align-middle">Verification required</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle">Plus From</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle">From $4.99/mo</td>
                          <td className="p-5 text-gray-500 align-middle">All Users</td>
                          <td className="p-5 text-gray-500 align-middle">Starting price for Plus</td>
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
                    Looking for the latest Tetr promo code, Tetr discount code, or TETR.IO Plus deal? CouponsBit helps you find current Tetr offers so you can save on competitive Tetris subscriptions.
                  </p>
                  <p>
                    Whether you're a new player looking to try Plus for free or a regular who wants to save on annual billing, checking for a Tetr coupon before subscribing can help you get better value.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      What Is TETR.IO?
                    </h3>
                    <p>
                      TETR.IO is a free-to-play competitive Tetris game available online. Players can compete in ranked matches, unranked play, and custom rooms against opponents around the world.
                    </p>
                    <p>
                      The platform features a detailed ranking system, real-time multiplayer, and a large active community of competitive Tetris players.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      What Is TETR.IO Plus?
                    </h3>
                    <p>
                      TETR.IO Plus is the paid subscription tier for TETR.IO. It gives subscribers access to exclusive cosmetic and quality-of-life features not available on the free plan.
                    </p>
                    <p>Plus features include:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Custom skins for blocks and boards</li>
                      <li>Animated stage backgrounds</li>
                      <li>Exclusive supporter badge on your profile</li>
                      <li>Ad-free competitive play</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      TETR.IO Plus Pricing
                    </h3>
                    <p>
                      TETR.IO Plus is available as a monthly or annual subscription. The annual plan typically offers a lower per-month cost compared to monthly billing, making it the better value for regular players.
                    </p>
                    <p>
                      Checking CouponsBit before subscribing gives you an opportunity to find an available Tetr promo code or deal before spending on your subscription.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      How to Save on TETR.IO Plus
                    </h3>
                    <div className="space-y-6 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-6">
                      <p className="text-gray-600">
                        A few strategies can help you get more value from your TETR.IO Plus subscription:
                      </p>
                      <div className="space-y-4 text-gray-700">
                        <p><strong>Try the Free Trial First:</strong> New users can trial TETR.IO Plus free for 7 days before committing to a paid plan.</p>
                        <p><strong>Choose Annual Billing:</strong> The annual plan saves up to 40% compared to paying month-to-month.</p>
                        <p><strong>Check for a Student Discount:</strong> Students can save 15% with verified student status.</p>
                        <p><strong>Browse CouponsBit Before Subscribing:</strong> Check CouponsBit for the latest Tetr promo codes and limited-time offers before checkout.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      Save More With Tetr Promo Codes & Subscription Deals
                    </h3>
                    <p>
                      Whether you're subscribing to TETR.IO Plus for the first time or renewing your plan, comparing available offers can help you make a smarter purchase.
                    </p>
                    <p>
                      Before subscribing, check CouponsBit for the latest Tetr promo code, Tetr discount code, and TETR.IO Plus subscription deals. Review the offer terms and choose the option that gives you the best overall value.
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
                    Tetr Promo Code FAQs
                  </h3>
                  {[
                    { q: "Does Tetr Have a Promo Code?", a: "Tetr may offer promotional codes and subscription deals at different times. Check CouponsBit for currently available Tetr promo codes before subscribing to TETR.IO Plus." },
                    { q: "Is TETR.IO Plus Worth It?", a: "TETR.IO Plus gives subscribers access to custom skins, animated stage backgrounds, an exclusive supporter badge, and an ad-free competitive experience. Whether it's worth it depends on how often you play and how much you value those features." },
                    { q: "How Do I Apply a Tetr Promo Code?", a: "Find an available Tetr promo code on CouponsBit, copy it, then head to TETR.IO and apply the code during the subscription checkout process." },
                    { q: "What Does TETR.IO Plus Include?", a: "TETR.IO Plus includes custom block and board skins, animated stage backgrounds, an exclusive supporter badge, and ad-free play." },
                    { q: "Can New Users Try TETR.IO Plus for Free?", a: "TETR.IO Plus may be available as a free trial for new users. Check the current offer details on CouponsBit before subscribing." },
                    { q: "Is There a Student Discount for TETR.IO Plus?", a: "A student discount for TETR.IO Plus may be available with verified student status. Check CouponsBit for currently available student offers." },
                    { q: "Is CouponsBit Free to Use?", a: "Yes. CouponsBit is free to use. You can browse available coupon codes, promotions, and deals across entertainment, gaming, software, fashion, and other categories." }
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
                    Popular Tetr Searches
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "TETR.IO Plus",
                      "Tetr Free Trial",
                      "Annual Plan",
                      "Student Discount",
                      "Custom Skins",
                      "Ad-Free Play",
                      "Tetr Deals",
                      "Competitive Tetris",
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
                    Today's Top Tetr Deals
                  </h3>
                  <div className="space-y-6">
                    {TETR_COUPONS.slice(0, 5).map((coupon, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                          T
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
