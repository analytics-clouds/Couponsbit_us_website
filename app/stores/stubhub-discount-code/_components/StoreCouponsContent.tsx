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
  Truck,
  Laptop,
  BookOpen,
  CheckCircle,
  X,
  Ticket,
  Tv,
  Plane,
  Code,
  Music,
  Trophy,
  Theater,
  Laugh,
  Tent,
  Sparkles,
  Zap,
  LayoutGrid,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { type Coupon, STUBHUB_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Viagogo", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/viagogo-coupon-code_t65aol.webp", dealText: "Starting at $332", href: "/stores/viagogo-discount-code" },
  { name: "Spirit Halloween", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/spirti-logo_x4nbor.webp", dealText: "Up To 75% OFF", href: "/stores/spirit-halloween-discount-code" },
  { name: "vegas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/vegas-logo_sifnax.webp", dealText: "Up To 35% OFF", href: "/stores/vegas-discount-code" },
  { name: "Klook", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002063/klook-logo_alzz2a.webp", dealText: "Up To 50% OFF", href: "/stores/klook-discount-code" },
  { name: "Yas Island", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/yas-island-logo_krotjw.webp", dealText: "Up To 50% OFF", href: "/stores/yas-island-promo-code" },
  { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", dealText: "Up to 40% OFF", href: "/stores/expedia-discount-code" },
];

export default function StubHubCouponsContent() {
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
              href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015"
              target="_blank"
              rel="nofollow noopener noreferrer"
              onClick={() => setShowModal(false)}
              className="block w-full bg-[#056bfa] text-white font-black py-4 rounded-2xl mb-3 hover:bg-[#005f91] transition-colors"
            >
              Continue to StubHub →
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
              <span className="text-black font-extrabold">StubHub</span>
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
                  <a href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/stubhub-coupon-code_fplhay.webp" alt="StubHub" width={112} height={112} className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Stubhub Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(18k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-7 max-w-[400px] text-justify">
                      Save more on live events with the latest StubHub Discount Code and StubHub Promo Code for November 2026. Enjoy 10% OFF sitewide ticket orders over $40 or get $20 OFF your first booking as a new customer. Students can also save $25 OFF eligible ticket purchases. Browse verified StubHub deals on NBA Playoffs, The Lion King, Under The Big Sky Festival, rock concerts, sports events, theater shows, and thousands of live experiences at great prices.
                    </p>
                    <a
                      href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015"
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
                    { icon: Tag, val: "7", label: "Coupons" },
                    { icon: Percent, val: "150+", label: "Deals" },
                    { icon: Users, val: "2M+", label: "Shoppers" },
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
                <div className="relative rounded-2xl overflow-hidden h-[250px] md:h-[250px] shadow-lg group">

                  {/* Slide 1 */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center"
                    style={{ opacity: activeSlide === 0 ? 1 : 0 }}
                  >
                    <a href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full">
                      <img
                        src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781851154/stubhub-voucher-code_vmfi3h.webp"
                        alt="Banner 1"
                        width={800} height={270} className="w-full object-cover"
                        loading="lazy"
                      />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center"
                    style={{ opacity: activeSlide === 1 ? 1 : 0 }}
                  >
                    <a href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full">
                      <img
                        src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782127919/Stubhub_voucher_code_wl9gvl.webp"
                        alt="Banner 2"
                        width={800} height={270} className="w-full object-cover"
                        loading="lazy"
                      />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center"
                    style={{ opacity: activeSlide === 2 ? 1 : 0 }}
                  >
                    <a href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full">
                      <img
                        src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782127903/Stubhub_discount_code_s0bfnm.webp"
                        alt="Banner 3"
                        width={800} height={270} className="w-full object-cover"
                        loading="lazy"
                      />
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
                  <h2 className="text-2xl font-black text-black leading-tight">StubHub Coupon Codes & Offers</h2>
                  <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">7 Coupons & Offers Available</p>
                </div>

                {STUBHUB_COUPONS.map((coupon) => (
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
                              href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015"
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label={`Get StubHub deal: ${coupon.title}`}
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
                  <h3 className="text-black font-black text-lg mb-6">StubHub Discount Code & StubHub Promo Code
</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    A StubHub discount code can help eligible shoppers save on ticket purchases when a promotion is available. StubHub promotions may change depending on the event, campaign, season, or other offer conditions, so it's worth checking for a current deal before checkout.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    If you're specifically searching for a StubHub promo code, CouponsBit brings available offers together in one place. You can browse current promotions, check the terms, and then head to StubHub to purchase your tickets.

                  </p>
                  <h3 className="text-black font-black text-lg mb-6">Real StubHub Discount Code Offers</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Searching for a real StubHub discount code? Always check the offer details before applying a code. A promotion may have restrictions based on the event, ticket type, purchase amount, expiration date, or other conditions.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Checking CouponsBit before buying gives you an opportunity to find an available StubHub offer before spending on your tickets.

                  </p>
                  <a href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Categories Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Laptop, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                      { icon: Plane, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
                      { icon: Tv, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
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
                      How to Use a StubHub Coupon Code
                    </h3>
                    <p className="mt-2 text-sm font-medium text-gray-500">
                      Using a StubHub coupon code is simple when an eligible promotion is available.
                    </p>
                  </div>

                  <div className="relative space-y-6 before:absolute before:left-[19px] before:top-3 before:h-[calc(100%-24px)] before:w-[2px] before:bg-gray-100">
                    {[
                      {
                        step: "01",
                        icon: Search,
                        title: "Find a StubHub Coupon Code",
                        desc: "Visit the StubHub page on CouponsBit and browse available coupon codes, promo offers, and ticket deals.",
                      },
                      {
                        step: "02",
                        icon: CheckSquare,
                        title: "Select Your StubHub Deal",
                        desc: "Choose an offer that matches your planned ticket purchase and read the applicable terms.",
                      },
                      {
                        step: "03",
                        icon: Copy,
                        title: "Copy the StubHub Promo Code",
                        desc: "If the offer requires a code, reveal it and copy the StubHub promo code.",
                      },
                      {
                        step: "04",
                        icon: Ticket,
                        title: "Find Your StubHub Tickets",
                        desc: "Visit StubHub, search for your event, and select the tickets you want to purchase.",
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
                  StubHub Discount Codes, Promo Codes & Ticket Deals 2026
                </h2>

                <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[850px]">
                      <thead>
                        <tr className="bg-[#056BFA]">
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Offer</th>
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                          <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Applicable On</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 font-bold text-[14px]">
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle max-w-[220px]">Flat 10% OFF Sitewide</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Flat 10% OFF</td>
                          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[200px]">Valid on orders above $40</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[240px]">Concerts, sports events, live shows & sitewide bookings</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle max-w-[220px]">NBA Playoffs Tickets – Western Conference Finals</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Save Up To 5% OFF</td>
                          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[200px]">Valid for Western Conference Finals – Home Game 2 (May 24)</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[240px]">Oklahoma City Thunder vs San Antonio Spurs tickets</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle max-w-[220px]">Rock Music Tickets</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Starting From $30</td>
                          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[200px]">Limited-time pricing</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[240px]">Live rock concerts and music events</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle max-w-[220px]">The Lion King New York Tickets</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Starting At $171</td>
                          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[200px]">Subject to seat availability</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[240px]">The Lion King Broadway show in New York</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle max-w-[220px]">Under The Big Sky Festival Tickets</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Starting At $582</td>
                          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[200px]">3-day passes available</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[240px]">Under The Big Sky Festival</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle max-w-[220px]">Student Discount</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Flat $25 OFF</td>
                          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">Students Only</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[200px]">Student verification/code required</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eligible ticket bookings</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 text-black font-black align-middle max-w-[220px]">New User Offer</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Flat $20 OFF</td>
                          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">New Users Only</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[200px]">Valid on first order only</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[240px]">First ticket booking</td>
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
                    Looking for the latest StubHub coupon code, StubHub promo code, or StubHub discount code? CouponsBit helps you find current StubHub offers and ticket deals so you can save on concerts, sports, theater, festivals, comedy shows, and other live events.
                  </p>
                  <p>
                    Whether you're searching for StubHub tickets to see your favorite team, attending a major concert, or planning ahead for a major sporting event, checking for a coupon or promotional offer before you buy can help you get better value.
                  </p>
                  <p>
                    From NFL and NBA games to concerts, <Link href="/stores/vegas-discount-code" className="text-[#056bfa] hover:underline">Broadway shows</Link>, and major international sporting events, StubHub gives fans access to tickets for a wide range of live experiences. Before completing your purchase, check CouponsBit for the latest StubHub deals and available savings.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      StubHub Tickets for Sports, Concerts & Live Events
                    </h3>
                    <p>
                      StubHub tickets cover a wide range of live entertainment and sporting events. The marketplace allows fans to browse available tickets and compare options based on event, seating location, and price.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      StubHub Sports Tickets
                    </h3>
                    <p>
                      Sports fans can use StubHub to find tickets for major professional and college sporting events across the U.S.
                    </p>
                    <p>Popular categories include:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>NFL, NBA, MLB, NHL, MLS</li>
                      <li>College sports</li>
                      <li>Golf, Tennis, and Motorsports</li>
                    </ul>
                    <p>
                      Whether you're looking for tickets to a regular-season game, rivalry matchup, playoff game, or championship event, availability and prices can vary based on demand.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      StubHub Concert Tickets
                    </h3>
                    <p>
                      Looking for StubHub concert tickets? The platform offers tickets for artists and tours across a variety of music genres, including Pop concerts, Rock shows, Country music, Hip-hop and rap, R&B, EDM, Music festivals, and International tours.
                    </p>
                    <p>
                      Ticket prices can vary significantly depending on the artist, venue, seating section, event date, and demand.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      StubHub Theater Tickets
                    </h3>
                    <p>
                      StubHub also gives fans an opportunity to find tickets for theater productions, musicals, Broadway shows, comedy performances, and other live entertainment.
                    </p>
                    <p>
                      If you're planning a special night out, comparing available seating and prices can help you find an option that fits your budget.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      StubHub World Cup Tickets
                    </h3>
                    <p>
                      Major international sporting events can generate significant interest in the <Link href="/stores/viagogo-discount-code">ticket marketplace</Link>. Searches for StubHub World Cup tickets and StubHub FIFA World Cup tickets have seen particularly strong interest in the keyword data, making major soccer events an important part of the StubHub search landscape.
                    </p>
                    <p>
                      If you're looking for tickets to a major tournament or international sporting event, check the event details carefully and compare available listings before purchasing.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      FIFA World Cup Tickets on StubHub
                    </h3>
                    <p>
                      For shoppers searching for FIFA World Cup tickets StubHub, availability can depend heavily on the event, match, location, and demand.
                    </p>
                    <p>
                      Since major sporting events can sell quickly and prices may fluctuate, it's useful to monitor listings and compare different seating options before making a purchase.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      StubHub NFL Tickets & Sports Deals
                    </h3>
                    <p>
                      NFL games are among the most popular sporting events searched by ticket buyers, and StubHub offers a marketplace for fans looking for available seats.
                    </p>
                    <p>
                      If you're searching for a StubHub NFL promo code, check CouponsBit before purchasing your football tickets. A promotional offer, when available and applicable, could help reduce your overall ticket cost.
                    </p>
                    <p>
                      Compare the available ticket prices and seating sections along with any applicable promotion rather than focusing only on the coupon amount.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      StubHub New York Yankees Tickets
                    </h3>
                    <p>
                      Baseball fans searching for StubHub New York Yankees or StubHub NY Yankees tickets can browse available listings for Yankees games.
                    </p>
                    <p>
                      When searching for NY Yankees tickets StubHub, consider both the ticket price and the location of the seats. A slightly different section may offer a better balance between price and viewing experience.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      StubHub Concert Deals & Popular Artists
                    </h3>
                    <p>
                      StubHub's concert marketplace includes tickets for some of the biggest artists and tours, such as Bruno Mars and Morgan Wallen. Search interest around artists can change quickly as tours, album releases, and event dates are announced.
                    </p>
                    <p>
                      If you're planning to attend high-demand shows, compare ticket listings and seating sections to find an option that matches your budget.
                    </p>
                  </div>

                  {/* Best Ways to Save Card */}
                  <div className="space-y-6 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa]">
                      Best Ways to Save on StubHub Tickets
                    </h3>
                    <p className="text-gray-600">
                      Finding a coupon isn't the only way to save. A few smart shopping strategies can make a difference when buying event tickets:
                    </p>
                    <div className="space-y-4 text-gray-700">
                      <p><strong>Compare StubHub Ticket Prices:</strong> Ticket prices can vary considerably between seating sections and listings. Compare multiple options before choosing your seats.</p>
                      <p><strong>Check StubHub Deals Before Buying:</strong> Always search for a StubHub coupon code, StubHub promo code, or StubHub discount code before checkout.</p>
                      <p><strong>Consider Different Seating Sections:</strong> If you're flexible about where you sit, compare different sections. Moving slightly farther from the stage, field, or court can significantly reduce the ticket price.</p>
                      <p><strong>Look at Different Event Dates:</strong> For tours, sports seasons, and recurring performances, attending a different date may offer more affordable options.</p>
                      <p><strong>Monitor Prices for High-Demand Events:</strong> Prices can change based on demand and availability. Monitoring ticket listings before purchasing helps you see how prices move.</p>
                    </div>
                  </div>

                  {/* Why Choose StubHub Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      Why Choose StubHub for Tickets?
                    </h3>
                    <p>StubHub is a well-known <Link href="/stores/seatgeek-promo-code">ticket marketplace</Link> where buyers can search for tickets across sports, music, theater, and other live events.</p>
                    <p><strong>Wide Selection:</strong> Offers tickets across numerous event categories, making it easy to search for concerts, sports, comedy shows, and more.</p>
                    <p><strong>Access to High-Demand Events:</strong> Provides additional options for events that may have limited availability through primary ticket sellers.</p>
                    <p><strong>Multiple Seating Options:</strong> Buyers can compare different sections, rows, and price points before selecting their tickets.</p>
                    <p><strong>Convenient Online Shopping:</strong> Search for an event, compare available listings, select tickets, and complete your purchase online.</p>
                    <p><strong><Link href="/stores/vivid-seats-promo-code">Ticket Resale Marketplace</Link>:</strong> Provides a space where eligible ticket holders can list tickets they no longer need.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      Save More With StubHub Coupon Codes & Ticket Deals
                    </h3>
                    <p>
                      Whether you're looking for StubHub tickets to see your favorite team, attending a major concert, planning a theater night, or searching for tickets to a <Link href="/stores/expedia-discount-code" className="text-[#056bfa] hover:underline">major international sporting event</Link>, comparing available offers can help you make a smarter purchase.
                    </p>
                    <p>
                      Before buying, check CouponsBit for the latest StubHub coupon code, StubHub promo code, StubHub discount code, and StubHub ticket deals. Compare ticket prices, review the offer terms, and choose the option that gives you the best overall value.
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
                    StubHub Coupon Code FAQs
                  </h3>
                  {[
                    { q: "Does StubHub Have a Coupon Code?", a: "StubHub may offer promotional codes, discounts, and special offers at different times. Check CouponsBit for currently available StubHub coupon codes before purchasing tickets." },
                    { q: "Where Can I Find a StubHub Promo Code?", a: "You can check CouponsBit for available StubHub promo codes, discount codes, and ticket offers before completing your order." },
                    { q: "Is There a Real StubHub Discount Code?", a: "Available promotions can change, so check the current StubHub offers on CouponsBit and review the terms of each deal before using it." },
                    { q: "What Can I Buy With StubHub Tickets?", a: "StubHub offers tickets for concerts, professional and college sports, theater, comedy, festivals, and other live entertainment events." },
                    { q: "Can I Find StubHub World Cup Tickets?", a: "StubHub may have listings for major international sporting events, including World Cup-related events. Availability and pricing can vary significantly depending on the match and demand." },
                    { q: "Can I Find StubHub NFL Tickets?", a: "Yes, StubHub features listings for NFL games. Search by team, matchup, location, or event date to find available tickets." },
                    { q: "Can I Find StubHub Concert Tickets?", a: "Yes. StubHub offers tickets for numerous concerts, tours, and music events. Availability depends on the artist, venue, date, and current listings." },
                    { q: "Can I Sell Tickets on StubHub?", a: "Eligible ticket holders may be able to list tickets they can no longer use through StubHub's marketplace, subject to the platform's applicable requirements." },
                    { q: "Is CouponsBit Free to Use?", a: "Yes. CouponsBit is free to use. You can browse available coupon codes, promotions, and deals across entertainment, travel, fashion, technology, and other categories." }
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
                    Popular StubHub Searches
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "NFL Tickets",
                      "World Cup Tickets",
                      "Concert Tickets",
                      "Yankees Tickets",
                      "Broadway Shows",
                      "Bruno Mars Tour",
                      "Morgan Wallen",
                      "StubHub Deals",
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
                    Today's Top StubHub Deals
                  </h3>
                  <div className="space-y-6">
                    {STUBHUB_COUPONS.slice(0, 5).map((coupon, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                          S
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
                          href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015"
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
