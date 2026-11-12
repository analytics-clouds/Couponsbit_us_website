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
  Luggage,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { type Coupon, CHEAPFLIGHTS_COUPONS } from "./offers";

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
    { name: "Kiwi.com", dealText: "Up to 50% OFF", href: "/stores/kiwicom-discount-code", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494079/Kiwi.com-coupon-code_qox8uh.jpg" },
    { name: "Latam Airlines", dealText: "Up to 45% OFF", href: "/stores/latam-airlines-discount-code", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494079/latam-airlines-coupon-code_e5y4q7.jpg" },
    { name: "Etihad", dealText: "Up to 30% OFF", href: "/stores/etihad-discount-code", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494079/Etihad-coupon-code_t63y3h.jpg" },
    { name: "Malaysia Airlines", dealText: "Up to 35% OFF", href: "/stores/malaysia-airlines-discount-code", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494080/malaysia-airlines-coupon-code_zcqz8f.jpg" },
    { name: "Oman Air", dealText: "Up to 25% OFF", href: "/stores/oman-air-discount-code", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494080/oman-air-coupon-code_d8f8k0.jpg" },
    { name: "Expedia", dealText: "Up to 40% OFF", href: "/stores/expedia-discount-code", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494080/expedia-coupon-code_v7s5m9.jpg" },
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
            <p className="text-sm font-semibold text-gray-500 mb-6">Paste this code at checkout on CheapFlights</p>
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
                Continue to CheapFlights <ExternalLink className="w-4 h-4" />
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
              <span className="text-black">CheapFlights</span>
            </nav>

            {/* Store Identity Hero */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-[32px] border border-[#f0f0f0] p-6 flex items-center justify-center bg-white shadow-sm shrink-0 group relative">
                <img
                  src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494079/Cheepflights-coupon-code_cbqikz.jpg"
                  alt="CheapFlights"
                  width={160}
                  height={160}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                  <h1 className="text-2xl md:text-4xl font-black text-black tracking-tight">CheapFlights Discount Code</h1>
                  <span className="bg-[#e8f6f8] text-[#0451c4] text-xs font-black px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Store
                  </span>
                </div>

                <p className="text-gray-500 font-bold text-sm md:text-base max-w-3xl leading-relaxed mb-6">
                  Looking for the latest CheapFlights discount code? Save up to 60% on eligible flight bookings and enjoy up to 45% off Business Class fares with verified travel deals. Explore exclusive discounts on domestic and international flights, hotels, cruises, car rentals, and vacation packages throughout Nov 2026. Whether you're traveling for business, a family holiday, or a weekend escape, CheapFlights helps you compare fares, unlock exclusive savings, and book your next trip at the best available price.
                </p>

                {/* Badges / Micro-stats */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs font-black text-gray-500 uppercase tracking-widest border-t border-[#f0f0f0] pt-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-black">{CHEAPFLIGHTS_COUPONS.length} Offers Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Updated November 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-gray-400" />
                    <span>2.9k Used Today</span>
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
                {CHEAPFLIGHTS_COUPONS.map((coupon) => (
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
                                aria-label={`Get Cheapflights deal: ${coupon.title}`}
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
                  <h3 className="text-black font-black text-lg mb-6">About Cheapflights</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    CheapFlights is a global online travel agency (OTA) established in 2014 with the goal of helping travelers find affordable flights and travel services. In addition to flight bookings, the platform allows customers to reserve hotels, rental cars, and vacation packages, making it a one-stop destination for travel planning.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The company partners with major airlines and travel suppliers to provide competitive fares across domestic and international routes. Along with online booking tools, CheapFlights offers customer support to assist travelers before, during, and after their trip.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Today, millions of travelers use CheapFlights to compare travel options and book trips while staying within their budget.
                  </p>
                  <a href="https://www.anrdoezrs.net/click-100938140-15524726?sid=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
                    <h2 className="text-black font-black text-xl mb-2">What Can You Book on CheapFlights?</h2>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">
                      CheapFlights offers a wide variety of travel services designed to simplify trip planning.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Plane className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Flight Tickets</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Search and book domestic and international flights across numerous airlines and destinations.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Hotel className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Hotels</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Choose from hotels, resorts, and accommodations that suit different travel styles and budgets.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Car className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Car Rentals</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Reserve rental vehicles for business trips, vacations, road trips, and airport transportation.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Luggage className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Vacation Packages</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Combine flights and accommodations into convenient travel packages for added value.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Last-Minute Travel</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Find deals on last-minute trips when your travel plans change unexpectedly.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">International Travel</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Book flights to destinations across North America, Europe, Asia, Australia, the Middle East, and many other regions.
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
                  CheapFlights Coupon Codes, Promo Codes & Flight Deals
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
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">CheapFlights USA – Flights Under $99</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Under $99</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Unbeatable limited-time pricing</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Domestic Flights</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">CheapFlights USA – Earn Up To $100 Travel Credits</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to $100 credits</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Applies to eligible flight bookings</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Travel Credits</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">CheapFlights USA – Airline Deals</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $141</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Subscribe for up to $10 OFF</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Airline Tickets</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">CheapFlights USA – Top Flight Deals For Summer Travel</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Top Deals</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Best fares on popular domestic routes</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Summer Flights</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">CheapFlights USA – Cruise Vacation Deals</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 25% OFF</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Exclusive instant savings & guest offers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Cruise Vacations</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">CheapFlights USA – Deals Of The Week</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Weekly Deals</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Low fares on top airlines</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Weekly Flight Deals</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">CheapFlights USA – Business Class Sale</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Save $10 (code INSTANT10)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Promo code INSTANT10 required</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Business Class Flights</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">CheapFlights USA – Student Flight Deals</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Save $10</td>
                        <td className="p-5 text-gray-500 align-middle">Verified students</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Subscribe for savings on college travel</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Student Flights</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">CheapFlights USA – Hotels</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $11/night</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Savings in Las Vegas, Miami & more</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Hotels</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">CheapFlights USA – Popular Hotel Deals</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Top Rated</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Exclusive prices, Las Vegas & Miami</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Hotels</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">CheapFlights USA – Car Rentals</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $65/day</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Great rates on airport pickups</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Car Rentals</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <h3 className="text-xl font-black text-[#056BFA] mb-4">Save More on Your Next Trip with CheapFlights Coupon Codes</h3>
                  <p>
                    Finding affordable airfare doesn't have to be complicated. Whether you're planning a family vacation, a business trip, or a last-minute getaway, CheapFlights helps travelers book flights, hotels, rental cars, and <Link href="/stores/expedia-discount-code" className="text-[#056bfa] hover:underline">vacation packages</Link> at competitive prices. Before you complete your booking, visit Couponsbit to discover the latest <strong>CheapFlights coupon codes, CheapFlights promo codes, and exclusive travel deals</strong> that can help you save more on every journey.
                  </p>
                  <p>
                    Serving millions of travelers worldwide, CheapFlights combines competitive pricing with dedicated customer support, making travel planning easier and more affordable.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Why Choose CheapFlights?</h3>
                    <p><strong>Competitive Flight Deals:</strong> CheapFlights focuses on helping travelers discover affordable airfare and travel services across a wide network of destinations.</p>
                    <p><strong>Complete Travel Booking Platform:</strong> Instead of booking flights and hotels separately, travelers can organize multiple parts of their trip in one place.</p>
                    <p><strong>Customer Support:</strong> The company offers customer assistance to help with bookings, travel questions, and itinerary support.</p>
                    <p><strong>Flexible Travel Options:</strong> Whether you're planning months ahead or booking close to departure, CheapFlights offers options for different travel needs.</p>
                    <p><strong>Worldwide Destinations:</strong> Travelers can search routes to destinations across the globe, making the platform suitable for both domestic and <Link href="/stores/oman-air-discount-code" className="text-[#056bfa] hover:underline">international travel</Link>.</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056BFA] mb-8">How to Use a CheapFlights Coupon Code</h3>
                    <p className="text-gray-500 text-sm font-bold -mt-4">Saving on your next booking is easy.</p>
                    <div className="space-y-6">
                      {[
                        "Step 1: Visit Couponsbit — Browse the latest CheapFlights coupon codes and travel deals.",
                        "Step 2: Choose an Offer — Select the promotion that matches your booking.",
                        "Step 3: Copy the Coupon Code — Copy the available promo code before visiting CheapFlights.",
                        "Step 4: Search for Your Trip — Choose your destination, travel dates, and preferred travel services.",
                        "Step 5: Apply the Coupon — Enter the coupon code during checkout if applicable.",
                        "Step 6: Complete Your Booking — Confirm your reservation and enjoy extra savings on your trip."
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056BFA] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-sky-100 italic">
                            {i + 1}
                          </div>
                          <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Smart Ways to Save More on CheapFlights</h3>
                    <p><strong>Check Couponsbit Before Booking:</strong> Visit Couponsbit before every booking to discover the latest CheapFlights promo codes.</p>
                    <p><strong>Book Early:</strong> Planning your trip in advance often provides more choices and competitive fares.</p>
                    <p><strong>Be Flexible with Your Travel Dates:</strong> Adjusting your departure or return dates may help you find lower prices.</p>
                    <p><strong>Compare Different Airports:</strong> Nearby airports sometimes offer more affordable flight options.</p>
                    <p><strong>Look for Vacation Packages:</strong> Booking flights together with hotels or rental cars may provide better overall value.</p>
                    <p><strong>Subscribe for Travel Updates:</strong> Stay informed about upcoming promotions, special offers, and seasonal travel deals.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Who Can Benefit from CheapFlights?</h3>
                    <p>CheapFlights serves many different types of travelers, including: Vacation travelers, Business professionals, Families, Solo travelers, Students, Digital nomads, Couples, Frequent flyers, Budget-conscious travelers, Last-minute travelers.</p>
                    <p>Whether you're planning a weekend escape or an international vacation, CheapFlights offers travel solutions for a variety of budgets.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Why Use Couponsbit for CheapFlights Deals?</h3>
                    <p>Couponsbit helps travelers discover verified savings across airlines, hotels, travel agencies, vacation packages, software, technology, fashion, and lifestyle brands.</p>
                    <p><strong>Updated Offers:</strong> We regularly update CheapFlights coupon codes and travel promotions.</p>
                    <p><strong>Verified Savings:</strong> Browse coupon codes, promo offers, and exclusive discounts in one convenient place.</p>
                    <p><strong>Completely Free:</strong> Couponsbit is free to use whenever you're looking to save.</p>
                    <p><strong>More Than Travel Deals:</strong> Alongside CheapFlights, Couponsbit features savings from hundreds of leading brands across travel and online shopping.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Book Smarter and Save on Every Journey</h3>
                    <p>Whether you're booking a quick domestic flight, planning an international vacation, or organizing a complete travel itinerary, CheapFlights offers convenient booking options designed to make travel more affordable.</p>
                    <p>Explore the latest CheapFlights coupon codes, promo codes, and exclusive travel deals on Couponsbit today and enjoy smarter savings on your next adventure.</p>
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
                    { q: "What is CheapFlights?", a: "CheapFlights is an online travel agency that allows customers to book flights, hotels, rental cars, and vacation packages through a single platform." },
                    { q: "What services does CheapFlights offer?", a: "The platform offers flight bookings, hotel reservations, car rentals, and vacation packages for travelers worldwide." },
                    { q: "Can I book international flights through CheapFlights?", a: "Yes. CheapFlights provides booking options for both domestic and international destinations." },
                    { q: "Where can I find CheapFlights coupon codes?", a: "You can find the latest CheapFlights coupon codes, promo codes, and travel deals on Couponsbit." },
                    { q: "Does CheapFlights provide customer support?", a: "Yes. The company offers customer support to assist travelers with bookings and travel-related inquiries." },
                    { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps shoppers and travelers discover verified coupon codes, promo offers, and discounts from trusted brands." }
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
                <div className="bg-[#f0f9ff] rounded-[40px] p-10 border border-[#056BFA]/5">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Flight Deals", "Cheap Airfare", "Hotel Booking", "Vacation Packages", "Promo Code", "Car Rentals", "Domestic Flights", "International Travel"].map(tag => (
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
                    {CHEAPFLIGHTS_COUPONS.slice(0, 5).map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056BFA] font-black text-xl italic shadow-inner">C</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056BFA] transition-colors">{deal.topLabel} {deal.mainValue} {deal.offText}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.description}</p>
                        </div>
                        <a href={deal.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Get CheapFlights deal: ${deal.title}`} className="bg-[#f0f9ff] text-[#056BFA] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056BFA] hover:text-white transition-all active:scale-90">Get Deal</a>
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
