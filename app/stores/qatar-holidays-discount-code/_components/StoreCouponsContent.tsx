"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
  Layers,
  LayoutGrid,
  Heart,
  Copy,
  Check,
  X,
  Laptop,
  Plane,
  Tv,
  Code,
  Zap,
  Hotel,
  Car,
  Ticket,
  Crown,
  Luggage
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { type Coupon, QATAR_HOLIDAYS_COUPONS } from "./offers";

interface StoreCouponsContentProps {
  relatedStores?: any[];
}

export default function StoreCouponsContent({ relatedStores }: StoreCouponsContentProps) {
  // Exactly 8 state variables per template spec
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<"all" | "codes" | "deals">("all");
  const [sortOrder, setSortOrder] = useState<"featured" | "discount">("featured");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    code: string;
    affiliateUrl: string;
    title: string;
  }>({
    isOpen: false,
    code: "",
    affiliateUrl: "",
    title: "",
  });

  const handleCopy = (code: string, id: string, affiliateUrl: string, title: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setModalData({
      isOpen: true,
      code,
      affiliateUrl,
      title,
    });
    setTimeout(() => {
      setCopiedId(null);
    }, 3000);
  };

  const RELATED_STORES = [
    { name: "Inspiring Vacation", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/inspiring-vacation-logo_mokiew.webp", dealText: "Up To 50% OFF", href: "/stores/inspiring-vacation-discount-code" },
    { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", dealText: "Up to 40% OFF", href: "/stores/expedia-discount-code" },
    { name: "Agoda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg", dealText: "Up to 69% OFF", href: "/stores/agoda-discount-code" },
    { name: "Zen Hotels", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/zen-hotels-coupon-code_fbtoik.webp", dealText: "$35 OFF Bookings", href: "/stores/zen-hotels-discount-code" },
    { name: "Radisson", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/radission-logo_gxjubt.webp", dealText: "Up To 40% OFF", href: "/stores/radisson-discount-code" },
    { name: "Klook", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002063/klook-logo_alzz2a.webp", dealText: "Up To 50% OFF", href: "/stores/klook-discount-code" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Code copied popup modal */}
      {modalData.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-gray-100 text-center animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setModalData(prev => ({ ...prev, isOpen: false }))}
              className="absolute right-5 top-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-black transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-[#056bfa]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#056bfa]">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-black mb-1">Code Copied!</h3>
            <p className="text-sm font-semibold text-gray-500 mb-6">Paste this code at checkout on Qatar Airways Holidays</p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center justify-between gap-3 mb-6">
              <span className="font-mono text-xl font-black tracking-wider text-black select-all">{modalData.code}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(modalData.code);
                  setCopiedId("modal");
                  setTimeout(() => setCopiedId(null), 2000);
                }}
                className="px-4 py-2 bg-black text-white text-xs font-bold rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-1.5 shrink-0"
              >
                {copiedId === "modal" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedId === "modal" ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={modalData.affiliateUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                onClick={() => setModalData(prev => ({ ...prev, isOpen: false }))}
                className="w-full py-3.5 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Continue to Qatar Holidays <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setModalData(prev => ({ ...prev, isOpen: false }))}
                className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors py-1"
              >
                Close and return to page
              </button>
            </div>
          </div>
        </div>
      )}

      <Navbar />

      <main>
        {/* Section 1: Breadcrumb and Store Header */}
        <section className="border-b border-[#f0f0f0] bg-white">
          <div className="container mx-auto px-4 max-w-7xl pt-4 pb-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-8 uppercase tracking-widest">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <Link href="/stores" className="hover:text-black transition-colors">Stores</Link>
              <span>/</span>
              <span className="text-black">Qatar Holidays</span>
            </nav>

            {/* Store Identity Hero */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-[32px] border border-[#f0f0f0] p-6 flex items-center justify-center bg-white shadow-sm shrink-0 group relative">
                <img
                  src="https://res.cloudinary.com/couponsbit/image/upload/v1783502778/qatar-coupon-code_maxmdi.jpg"
                  alt="Qatar Holidays"
                  width={160}
                  height={160}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                  <h1 className="text-2xl md:text-4xl font-black text-black tracking-tight">Qatar Holidays Discount Code</h1>
                  <span className="bg-[#e8f6f8] text-[#0451c4] text-xs font-black px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Store
                  </span>
                </div>

                <p className="text-gray-500 font-bold text-sm md:text-base max-w-3xl leading-relaxed mb-6">
                  Looking for the latest Qatar Holidays discount code? Save up to 40% on Doha holiday packages and book Doha stopover packages from just $76. Explore verified deals that include flights, hotels, and unforgettable experiences, making your trip more affordable. Whether you're planning a short stopover, a family vacation, or a luxury getaway, Qatar Holidays offers exclusive savings on premium travel packages and popular destinations throughout Nov 2026, helping you enjoy more while spending less.
                </p>

                {/* Badges / Micro-stats */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs font-black text-gray-500 uppercase tracking-widest border-t border-[#f0f0f0] pt-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-black">{QATAR_HOLIDAYS_COUPONS.length} Offers Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Updated November 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-gray-400" />
                    <span>2.6k Used Today</span>
                  </div>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={cn(
                      "flex items-center gap-1.5 transition-colors cursor-pointer ml-auto md:ml-0",
                      isFavorite ? "text-red-500 font-black" : "hover:text-black"
                    )}
                  >
                    <Heart className={cn("w-3.5 h-3.5", isFavorite && "fill-current")} />
                    <span>{isFavorite ? "Favorited" : "Save Store"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section 3 & 4: Coupons List + Sidebar */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Coupons List (Main Content) */}
              <div className="lg:w-[65%] space-y-6">

                {/* Coupon Cards */}
                {QATAR_HOLIDAYS_COUPONS.map((coupon) => (
                  <div key={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            {coupon.topLabel && (
                              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
                                {coupon.topLabel}
                              </p>
                            )}
                            <div className="text-[18px] sm:text-4xl md:text-5xl font-extrabold leading-none mt-2">
                              {coupon.mainValue}
                            </div>
                            {coupon.offText && (
                              <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">
                                {coupon.offText}
                              </p>
                            )}
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
                              onClick={() => setExpandedCouponId(expandedCouponId === coupon.id ? null : coupon.id)}
                              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
                            >
                              View Details
                              <ChevronDown
                                size={16}
                                className={cn(
                                  "transition-transform duration-300",
                                  expandedCouponId === coupon.id && "rotate-180"
                                )}
                              />
                            </button>
                            <div
                              className={cn(
                                "overflow-hidden transition-all duration-300",
                                expandedCouponId === coupon.id
                                  ? "max-h-[250px] opacity-100 mt-3"
                                  : "max-h-0 opacity-0"
                              )}
                            >
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {coupon.points.map((point, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-[#0344b0]">•</span>
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                            {coupon.code ? (
                              <button
                                onClick={() => handleCopy(coupon.code, coupon.id, coupon.affiliateUrl, coupon.title)}
                                className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
                              >
                                {copiedId === coupon.id ? "Copied!" : "Get Code"}
                              </button>
                            ) : (
                              <a
                                href={coupon.affiliateUrl}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label={`Get Qatar Holidays deal: ${coupon.title}`}
                                className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
                              >
                                Get Deal
                              </a>
                            )}
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
                  <h3 className="text-black font-black text-lg mb-6">About Qatar Holidays</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Qatar Airways Holidays is the official holiday package provider of Qatar Airways, offering travelers complete vacation experiences to destinations around the world. The platform allows customers to book flights, hotels, airport transfers, tours, and travel experiences together, creating seamless travel itineraries from a single booking.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    As part of the globally recognized Qatar Airways brand, Qatar Airways Holidays focuses on delivering premium travel experiences while offering travelers flexibility, convenience, and excellent value. From luxury resorts and romantic getaways to family holidays and city breaks, the platform provides carefully selected travel packages for a variety of budgets and travel styles.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Members of the Qatar Airways Privilege Club may also have opportunities to earn or redeem Avios on eligible holiday bookings, depending on current program terms.
                  </p>
                  <a href="https://www.tkqlhce.com/click-100938140-15736270?sid=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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

                {/* What Can You Book Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm max-w-2xl mx-auto">
                  <div className="mb-8">
                    <h2 className="text-black font-black text-xl mb-2">What Can You Book with Qatar Airways Holidays?</h2>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">
                      Qatar Airways Holidays offers complete travel solutions designed to simplify your vacation planning.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Luggage className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Vacation Packages</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Book complete holiday packages that combine flights and accommodations for destinations across the globe.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Hotel className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Hotels & Resorts</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Choose from luxury hotels, beachfront resorts, boutique accommodations, family-friendly properties, and premium city hotels.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Plane className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Flights</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Travel with Qatar Airways to hundreds of destinations through its extensive global network.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Car className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Airport Transfers</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Add convenient airport transportation for a smoother travel experience.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Ticket className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Tours & Activities</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Enhance your vacation with sightseeing tours, local experiences, cultural attractions, and adventure activities available in selected destinations.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Crown className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Luxury Escapes</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Explore premium vacation packages featuring five-star accommodations, exclusive experiences, and luxury travel options.
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
                  Qatar Airways Holidays Promo Codes, Coupon Codes & Vacation Deals
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
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Doha Holiday Packages</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 40% OFF</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Premium hotels, flights & experiences</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Doha Holiday Packages</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Doha Stopover Packages</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $76</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Carefully selected 4-star hotels</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Stopover Packages</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Dubai City Breaks</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $74/night</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Earn Avios and Qpoints</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Dubai Stays</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Phuket Beach Holidays</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $69/night</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Earn Avios and Qpoints</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Phuket Stays</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Formula 1 Qatar Grand Prix</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 20% OFF</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Flights, hotels & 3-day race tickets</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Lusail International Circuit Packages</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Maldives Escapes</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $67/night</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Earn Avios and Qpoints</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Maldives Stays</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Premium Doha Stopover</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $111</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Premium 5-star, 4 nights</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Doha Stopover Packages</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Bangkok Signature Collection</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Signature Collection</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Return flights, premium hotels, transfers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Bangkok Holiday Packages</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <h3 className="text-xl font-black text-[#056BFA] mb-4">Save More on Your Dream Vacation with Qatar Airways Holidays Promo Codes</h3>
                  <p>
                    Planning a relaxing beach escape, a luxury <Link href="/stores/klook-discount-code" className="text-[#056bfa] hover:underline">city break</Link>, or an unforgettable family vacation? Qatar Airways Holidays makes it easy to book complete travel packages that combine flights, hotels, and curated experiences in one convenient place. Before confirming your reservation, visit Couponsbit to discover the latest <strong>Qatar Airways Holidays promo codes, Qatar Airways Holidays coupon codes, and exclusive vacation deals</strong> that can help you save on your next getaway.
                  </p>
                  <p>
                    Whether you're traveling for leisure, celebrating a special occasion, or exploring a new destination, Qatar Airways Holidays offers thoughtfully designed vacation packages backed by the award-winning service of Qatar Airways.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Why Choose Qatar Airways Holidays?</h3>
                    <p><strong>Complete Vacation Planning:</strong> Book flights, hotels, and selected travel services together through one trusted platform.</p>
                    <p><strong>Award-Winning Airline Experience:</strong> Holiday packages are built around Qatar Airways' extensive global route network and renowned onboard service.</p>
                    <p><strong>Worldwide Destinations:</strong> Choose from vacation packages to destinations across Europe, Asia, the Middle East, Africa, Australia, and the Americas.</p>
                    <p><strong>Carefully Selected Hotels:</strong> Qatar Airways Holidays partners with a wide range of <Link href="/stores/agoda-discount-code" className="text-[#056bfa] hover:underline">hotels and resorts</Link> to accommodate different travel styles and budgets.</p>
                    <p><strong>Exclusive Holiday Offers:</strong> Travelers can often access seasonal promotions, limited-time vacation packages, and special travel offers throughout the year.</p>
                    <p><strong>Privilege Club Benefits:</strong> Eligible travelers may earn or redeem Avios on qualifying bookings, depending on the current Privilege Club program rules.</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056BFA] mb-8">How to Use a Qatar Airways Holidays Promo Code</h3>
                    <p className="text-gray-500 text-sm font-bold -mt-4">Saving on your next vacation is quick and easy.</p>
                    <div className="space-y-6">
                      {[
                        "Step 1: Visit Couponsbit — Browse the latest Qatar Airways Holidays promo codes and travel offers.",
                        "Step 2: Select an Offer — Choose the coupon or promotion that best matches your travel plans.",
                        "Step 3: Copy the Promo Code — Copy the available code before visiting Qatar Airways Holidays.",
                        "Step 4: Build Your Vacation — Select your destination, travel dates, hotel, flights, and any additional services.",
                        "Step 5: Apply the Coupon — Enter the promo code during checkout if applicable.",
                        "Step 6: Complete Your Booking — Confirm your reservation and enjoy savings on your holiday package."
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056BFA] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100 italic">
                            {i + 1}
                          </div>
                          <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Smart Ways to Save More on Qatar Airways Holidays</h3>
                    <p><strong>Check Couponsbit Before Booking:</strong> Browse Couponsbit for the latest Qatar Airways Holidays promo codes before finalizing your vacation.</p>
                    <p><strong>Book Vacation Packages:</strong> Bundling flights and hotels together may provide better overall value than booking each separately.</p>
                    <p><strong>Travel During Promotional Periods:</strong> Look for seasonal travel campaigns and holiday offers throughout the year.</p>
                    <p><strong>Join Qatar Airways Privilege Club:</strong> Eligible members can enjoy loyalty benefits and may earn or redeem Avios on qualifying holiday bookings.</p>
                    <p><strong>Plan Early:</strong> Booking your vacation in advance often provides greater availability and more accommodation choices.</p>
                    <p><strong>Stay Flexible:</strong> If your travel dates are flexible, comparing different departure periods may help you secure better pricing.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Who Can Benefit from Qatar Airways Holidays?</h3>
                    <p>Qatar Airways Holidays serves travelers from around the world, including: Families, Couples, Honeymooners, Solo travelers, Luxury travelers, Business travelers extending their stay, Adventure travelers, Group travelers, Frequent international travelers.</p>
                    <p>Whether you're planning a romantic escape, a luxury vacation, or a memorable family holiday, Qatar Airways Holidays offers packages designed for a variety of travel preferences.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Why Use Couponsbit for Qatar Airways Holidays Deals?</h3>
                    <p>Couponsbit helps travelers discover verified savings across airlines, hotels, vacation providers, travel agencies, technology, fashion, software, and lifestyle brands.</p>
                    <p><strong>Updated Offers:</strong> We regularly update Qatar Airways Holidays coupon codes and promotional offers.</p>
                    <p><strong>Verified Discounts:</strong> Browse verified coupon codes, exclusive promotions, and limited-time travel deals in one convenient place.</p>
                    <p><strong>Completely Free:</strong> Couponsbit is free to use whenever you're looking to save.</p>
                    <p><strong>Global Travel Savings:</strong> Along with Qatar Airways Holidays, Couponsbit features deals from hundreds of trusted travel brands, airlines, hotel chains, and <Link href="/stores/expedia-discount-code" className="text-[#056bfa] hover:underline">online booking platforms</Link> worldwide.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Make Your Next Vacation More Rewarding</h3>
                    <p>Whether you're dreaming of a tropical beach retreat, a cultural city escape, or a luxury international holiday, Qatar Airways Holidays makes planning your trip simple with expertly curated vacation packages and world-class travel experiences.</p>
                    <p>Browse the latest Qatar Airways Holidays promo codes, coupon codes, and exclusive vacation deals on Couponsbit today and enjoy greater value on your next unforgettable journey.</p>
                  </div>

                  {!isReadMore && (
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
                  )}
                </div>

                <button
                  onClick={() => setIsReadMore(!isReadMore)}
                  className="mt-10 flex items-center gap-2 text-[#056BFA] font-black text-xs uppercase tracking-widest hover:underline"
                >
                  {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
                </button>

                {/* FAQs Accordion */}
                <div className="faq-section mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
                  {[
                    { q: "What is Qatar Airways Holidays?", a: "Qatar Airways Holidays is the official vacation package platform of Qatar Airways, offering travelers bundled bookings that can include flights, hotels, airport transfers, and selected travel experiences." },
                    { q: "What can I book through Qatar Airways Holidays?", a: "You can book vacation packages, flights, hotels, airport transfers, and selected tours or activities for destinations around the world." },
                    { q: "Does Qatar Airways Holidays offer luxury vacations?", a: "Yes. The platform features a variety of premium hotels, luxury resorts, and curated vacation packages for travelers seeking upscale experiences." },
                    { q: "Where can I find Qatar Airways Holidays promo codes?", a: "You can find the latest Qatar Airways Holidays promo codes, coupon codes, and exclusive vacation deals on Couponsbit." },
                    { q: "Can I earn Avios when booking through Qatar Airways Holidays?", a: "Eligible travelers may earn or redeem Avios through the Qatar Airways Privilege Club on qualifying bookings, subject to the program's current terms and conditions." },
                    { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps travelers discover verified coupon codes, promo offers, and discounts from trusted global brands." }
                  ].map((faq, i) => (
                    <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
                      >
                        <span className="text-black font-black text-base">{faq.q}</span>
                        <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056BFA] rotate-180")}>
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
                <div className="bg-[#eff6ff] rounded-[40px] p-10 border border-[#056BFA]/5">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Vacation Packages", "Luxury Resorts", "Flight Deals", "Holiday Promo Code", "Privilege Club", "Avios Deals", "Beach Escapes", "International Holidays"].map(tag => (
                      <span
                        key={tag}
                        className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056BFA] uppercase tracking-widest shadow-sm border border-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Deals</h3>
                  <div className="space-y-6">
                    {QATAR_HOLIDAYS_COUPONS.slice(0, 5).map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056BFA] font-black text-xl italic shadow-inner">Q</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056BFA] transition-colors">{deal.topLabel} {deal.mainValue} {deal.offText}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.description}</p>
                        </div>
                        <a href={deal.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Get Qatar Airways Holidays deal: ${deal.title}`} className="bg-[#eff6ff] text-[#056BFA] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056BFA] hover:text-white transition-all active:scale-90">Get Deal</a>
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
