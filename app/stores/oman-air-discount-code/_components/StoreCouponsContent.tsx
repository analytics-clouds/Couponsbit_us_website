"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Check,
  ChevronDown,
  Sparkles,
  Heart,
  SlidersHorizontal,
  X, Sun, Ticket, Briefcase, ConciergeBell,
  Plane,
  Tv,
  Code, Globe, LayoutGrid, Zap, Laptop
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { OMAN_AIR_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Latam Airlines", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/latam-airlines-coupon-code_pvcsml.webp", dealText: "Up to 40% OFF", href: "/stores/latam-airlines-discount-code" },
  { name: "Etihad", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784970/etihad-logo_lbl7mo.webp", dealText: "Up To 30% OFF", href: "/stores/etihad-discount-code" },
  { name: "Malaysia Airlines", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/malaysia-logo_xso2cj.webp", dealText: "Up To 35% OFF", href: "/stores/malaysia-airlines-discount-code" },
  { name: "Fireflyz", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/firefly-logo_ju6n0p.webp", dealText: "One-Way Fares From $29", href: "/stores/fireflyz-discount-code" },
  { name: "Kiwi.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/kiwi-logo_egovdr.webp", dealText: "Up to $580 Rewards", href: "/stores/kiwi-discount-code" },
  { name: "Cheapflights", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494079/Cheepflights-coupon-code_cbqikz.jpg", dealText: "Up to 25% OFF", href: "/stores/cheapflights-discount-code" },
];

export default function OmanAirCouponsContent() {
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

  const handleCopyCode = (code: string, id: string, affiliateUrl: string, title: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setModalData({
      isOpen: true,
      code,
      affiliateUrl,
      title,
    });
    window.open(affiliateUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setCopiedId(null);
    }, 3000);
  };

  const filteredCoupons = OMAN_AIR_COUPONS.filter((coupon) => {
    if (filterType === "codes") return Boolean(coupon.code);
    if (filterType === "deals") return !coupon.code;
    return true;
  }).sort((a, b) => {
    if (sortOrder === "discount") {
      const getNum = (v: string) => {
        const match = v.match(/\d+/);
        return match ? parseInt(match[0], 10) : 0;
      };
      return getNum(b.mainValue) - getNum(a.mainValue);
    }
    return 0;
  });

  const codesCount = OMAN_AIR_COUPONS.filter(c => Boolean(c.code)).length;
  const dealsCount = OMAN_AIR_COUPONS.filter(c => !c.code).length;

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      {/* Code Copied Modal Popup */}
      {modalData.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setModalData(prev => ({ ...prev, isOpen: false }))}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-black transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-4">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-black mb-1">Code Copied!</h3>
            <p className="text-sm font-semibold text-gray-500 mb-6">Paste this code at checkout on Oman Air</p>
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
                Continue to Oman Air <ExternalLink className="w-4 h-4" />
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
        {/* Section 1: Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Oman Air</span>
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
                  <a href="https://tracking.syndicmarketing.com/c?o=21657167&m=23654&a=636605&aff_click_id=1015&sub_aff_id=1015" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/oman-air-logo_ozwu2c.webp" alt="Oman Air" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Oman Air Discount Code</h1>
                      <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={cn(
                          "p-2.5 rounded-2xl border transition-all duration-300 md:hidden",
                          isFavorite
                            ? "bg-rose-50 border-rose-200 text-rose-500"
                            : "bg-gray-50 border-gray-200 text-gray-400 hover:text-black"
                        )}
                        aria-label="Save store"
                      >
                        <Heart className={cn("w-5 h-5", isFavorite && "fill-current")} />
                      </button>
                    </div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Looking for the latest Oman Air discount code? Save up to 50% with the Oman Air Pass and enjoy 25% off eligible Economy and Business Class flights. Discover verified airfare deals on popular international routes, including Muscat, Chennai, Dhaka, and Jakarta, throughout Nov 2026. Whether you're traveling for business, a family vacation, or a weekend getaway, Oman Air offers comfortable flights, flexible booking options, and exclusive promotions to help you travel for less.
                    </p>
                    <div className="flex items-center gap-3 mt-4 mb-2">
                      <a
                        href="https://tracking.syndicmarketing.com/c?o=21657167&m=23654&a=636605&aff_click_id=1015&sub_aff_id=1015"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                      >
                        Visit Store <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={cn(
                          "hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-bold transition-all duration-300",
                          isFavorite
                            ? "bg-rose-50 border-rose-200 text-rose-500"
                            : "bg-white border-gray-200 text-gray-600 hover:text-black hover:border-black"
                        )}
                      >
                        <Heart className={cn("w-4 h-4", isFavorite && "fill-current")} />
                        {isFavorite ? "Saved" : "Save Store"}
                      </button>
                    </div>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: `${OMAN_AIR_COUPONS.length}`, label: "Offers" },
                    { icon: Percent, val: `${codesCount}`, label: "Codes" },
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
                  <div className="absolute inset-0">
                    <a href="https://tracking.syndicmarketing.com/c?o=21657167&m=23654&a=636605&aff_click_id=1015&sub_aff_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789121743/25_ll1n5e.webp" alt="Oman Air Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
                    </a>
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
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                  <div>
                    <h2 className="text-2xl font-black text-black leading-tight">Oman Air Discount Codes & Offers</h2>
                    <p className="text-xs font-semibold text-gray-500 mt-1">
                      Showing {filteredCoupons.length} of {OMAN_AIR_COUPONS.length} available offers
                    </p>
                  </div>

                  {/* Filters & Sort Controls */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="inline-flex p-1 bg-gray-100 rounded-2xl">
                      <button
                        onClick={() => setFilterType("all")}
                        className={cn(
                          "px-3 py-1.5 text-xs font-bold rounded-xl transition-all",
                          filterType === "all" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"
                        )}
                      >
                        All ({OMAN_AIR_COUPONS.length})
                      </button>
                      <button
                        onClick={() => setFilterType("codes")}
                        className={cn(
                          "px-3 py-1.5 text-xs font-bold rounded-xl transition-all",
                          filterType === "codes" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"
                        )}
                      >
                        Codes ({codesCount})
                      </button>
                      <button
                        onClick={() => setFilterType("deals")}
                        className={cn(
                          "px-3 py-1.5 text-xs font-bold rounded-xl transition-all",
                          filterType === "deals" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"
                        )}
                      >
                        Deals ({dealsCount})
                      </button>
                    </div>

                    <button
                      onClick={() => setSortOrder(sortOrder === "featured" ? "discount" : "featured")}
                      className="p-2 border border-gray-200 rounded-xl hover:border-black text-gray-600 hover:text-black transition-colors"
                      title={sortOrder === "featured" ? "Sort by Discount" : "Sort by Featured"}
                      aria-label="Toggle sort order"
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Render Coupons List */}
                <div className="space-y-6">
                  {filteredCoupons.map((coupon) => {
                    const isExpanded = expandedCouponId === coupon.id;
                    const isCopied = copiedId === coupon.id;

                    return (
                      <div key={coupon.id} className="w-full max-w-7xl mx-auto">
                        <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex flex-row">
                            {/* Left Badge: Discount */}
                            <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                              <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                              <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                              <div className="text-center px-1">
                                <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
                                  {coupon.topLabel}
                                </p>
                                <div className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">
                                  {coupon.mainValue}
                                </div>
                                {coupon.offText ? (
                                  <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">{coupon.offText}</p>
                                ) : null}
                              </div>
                            </div>

                            {/* Middle & Right Content */}
                            <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                              <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                                <div className="flex flex-wrap gap-2 mb-3">
                                  <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                                    Limited Time
                                  </span>
                                  <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                                    Verified Deal
                                  </span>
                                  {coupon.code ? (
                                    <span className="bg-blue-100 text-[#056bfa] text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                                      Coupon Code
                                    </span>
                                  ) : null}
                                </div>

                                <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                                  {coupon.title}
                                </h3>
                                <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                                  {coupon.description}
                                </p>

                                <button
                                  type="button"
                                  onClick={() => setExpandedCouponId(isExpanded ? null : coupon.id)}
                                  className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
                                >
                                  View Details
                                  <ChevronDown
                                    size={16}
                                    className={cn("transition-transform duration-300", isExpanded && "rotate-180")}
                                  />
                                </button>

                                <div
                                  className={cn(
                                    "overflow-hidden transition-all duration-300",
                                    isExpanded ? "max-h-[300px] opacity-100 mt-3" : "max-h-0 opacity-0"
                                  )}
                                >
                                  <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                    {coupon.points.map((pt, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <span className="text-[#0344b0]">•</span>
                                        <span>{pt}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* Action Button Column */}
                              <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                                {coupon.code ? (
                                  <button
                                    onClick={() => handleCopyCode(coupon.code!, coupon.id, coupon.affiliateUrl, coupon.title)}
                                    className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[16px] sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center flex items-center justify-center gap-2"
                                  >
                                    {isCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                    <span>{isCopied ? "Copied!" : "Show Code"}</span>
                                  </button>
                                ) : (
                                  <a
                                    href={coupon.affiliateUrl}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label={`Get Oman Air deal: ${coupon.title}`}
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
                    );
                  })}
                </div>
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
                  <h3 className="text-black font-black text-lg mb-6">About Oman Air</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Oman Air is the national airline of the Sultanate of Oman, headquartered in Muscat. Since launching operations in 1993, the airline has grown from serving regional routes to becoming an internationally recognized carrier connecting travelers to major cities across the world. Today, Oman Air operates a modern fleet and is celebrated for its premium cabins, Omani hospitality, and commitment to delivering high-quality service.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    In addition to passenger flights, Oman Air offers a range of travel services, including holiday packages through Oman Air Holidays, where travelers can book flights, hotels, tours, and airport transfers together for added convenience.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Whether you're flying for business, leisure, or a special occasion, Oman Air aims to provide a seamless travel experience from booking to arrival.
                  </p>
                  <a href="https://tracking.syndicmarketing.com/c?o=21657167&m=23654&a=636605&aff_click_id=1015&sub_aff_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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

                {/* Why Shop Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-2">What Can You Book with Oman Air?</h3>
                  <p className="text-gray-500 font-medium text-xs mb-8">
                    Oman Air offers a variety of travel products and services to meet different travel needs.
                  </p>

                  <div className="space-y-8">
                    {[
                      {
                        icon: Globe,
                        title: "International Flights",
                        sub: "Book flights to destinations across the Middle East, Europe, Asia, Africa, and other international regions through Oman Air's growing network."
                      },
                      {
                        icon: Plane,
                        title: "Business Class & Economy Class",
                        sub: "Choose from comfortable Economy Class seating or enjoy premium Business Class amenities designed for a luxurious travel experience."
                      },
                      {
                        icon: Sun,
                        title: "Oman Air Holidays",
                        sub: "Book complete vacation packages that combine flights with carefully selected hotels, tours, excursions, and airport transfers."
                      },
                      {
                        icon: Ticket,
                        title: "Flight Pass",
                        sub: "Frequent travelers can explore Flight Pass options that offer flexibility and convenience for eligible routes."
                      },
                      {
                        icon: Briefcase,
                        title: "Travel Extras",
                        sub: "Enhance your journey with seat selection, additional baggage, travel insurance, upgrades, and other optional services."
                      },
                      {
                        icon: ConciergeBell,
                        title: "Special Travel Services",
                        sub: "Oman Air also offers assistance for families, travelers with special requirements, and premium airport services."
                      }
                    ].map((item) => (
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
                  Oman Air Promo Codes, Coupon Codes & Flight Deals
                </h2>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <h3 className="text-xl font-black text-[#056bfa]">
                    Fly Smarter and Save More with Oman Air Promo Codes
                  </h3>
                  <p>
                    Whether you're planning a business trip, an international vacation, or a visit to family and friends, Oman Air offers a premium travel experience with an extensive global route network and award-winning hospitality. Before booking your next flight, visit Couponsbit to discover the latest Oman Air promo codes, Oman Air coupon codes, and exclusive travel deals that can help you save on flights and holiday packages.
                  </p>
                  <p>
                    Known for its exceptional onboard service and modern fleet, Oman Air connects travelers to destinations across the Middle East, Europe, Asia, Africa, and beyond, making every journey comfortable and memorable.
                  </p>

                  {/* Why Choose Oman Air? */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose Oman Air?</h3>
                    <p><strong>Award-Winning Hospitality:</strong> Oman Air is recognized for delivering warm Omani hospitality and attentive customer service throughout the travel experience.</p>
                    <p><strong>Extensive International Network:</strong> The airline connects travelers to numerous destinations across several continents through its global route network.</p>
                    <p><strong>Modern Fleet:</strong> Oman Air operates modern aircraft designed to provide comfort, safety, and an enjoyable flying experience.</p>
                    <p><strong>Premium Cabin Experience:</strong> Business Class travelers enjoy spacious seating, premium dining, airport lounge access on eligible itineraries, and enhanced onboard services.</p>
                    <p><strong>Oman Air Holidays:</strong> Travelers can simplify vacation planning by booking bundled <Link href="/stores/cheapflights-discount-code" className="text-[#056bfa] hover:underline">holiday packages</Link> that include flights, accommodations, and selected travel experiences.</p>
                    <p><strong>Convenient Digital Services:</strong> Manage bookings, check flight schedules, purchase baggage, select seats, and check in online through Oman Air's website and mobile services.</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use an Oman Air Promo Code</h3>
                    <p className="text-gray-700 font-bold">Saving on your next trip is easy.</p>
                    <div className="space-y-6">
                      {[
                        { title: "Step 1: Visit Couponsbit", text: "Browse the latest Oman Air promo codes and travel deals." },
                        { title: "Step 2: Select an Offer", text: "Choose the coupon or promotion that fits your travel plans." },
                        { title: "Step 3: Copy the Promo Code", text: "Copy the available code before visiting Oman Air." },
                        { title: "Step 4: Book Your Flight", text: "Search for flights or holiday packages and add your preferred itinerary." },
                        { title: "Step 5: Apply the Coupon", text: "Enter the promo code during checkout if applicable." },
                        { title: "Step 6: Complete Your Booking", text: "Confirm your reservation and enjoy extra savings on your journey." }
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                            {i + 1}
                          </div>
                          <div>
                            <strong className="text-black font-black block">{step.title}</strong>
                            <p className="text-gray-700 font-bold leading-relaxed mt-1">{step.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Smart Ways to Save More */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Smart Ways to Save More on Oman Air</h3>
                    <p><strong>Check Couponsbit Before Booking:</strong> Browse Couponsbit for the latest Oman Air coupon codes before finalizing your reservation.</p>
                    <p><strong>Book Early:</strong> Planning your trip in advance often gives you access to a wider selection of fares.</p>
                    <p><strong>Explore Holiday Packages:</strong> Booking through Oman Air Holidays may provide additional value by combining flights with hotels and travel experiences.</p>
                    <p><strong>Watch for Seasonal Promotions:</strong> Oman Air regularly features limited-time offers and promotional fares on selected routes.</p>
                    <p><strong>Join the Loyalty Program:</strong> Frequent travelers can enroll in Oman Air's loyalty program to enjoy member benefits and earn rewards on eligible flights.</p>
                    <p><strong>Travel with Flexible Dates:</strong> Adjusting your travel dates may help you find more <Link href="/stores/kiwi-discount-code" className="text-[#056bfa] hover:underline">competitive airfare options</Link>.</p>
                  </div>

                  {/* Who Can Benefit from Oman Air? */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Who Can Benefit from Oman Air?</h3>
                    <p>Oman Air serves a wide range of travelers, including:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Business travelers</li>
                      <li>Families</li>
                      <li>Couples</li>
                      <li>Solo travelers</li>
                      <li>Luxury travelers</li>
                      <li>Students</li>
                      <li>Frequent flyers</li>
                      <li>Vacation travelers</li>
                      <li>International tourists</li>
                      <li>Corporate travelers</li>
                    </ul>
                    <p>
                      Whether you're planning a short regional trip or a long-haul international journey, Oman Air offers travel options for various budgets and travel styles.
                    </p>
                  </div>

                  {/* Why Use Couponsbit for Oman Air Deals? */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for Oman Air Deals?</h3>
                    <p>Couponsbit helps travelers discover verified savings across airlines, hotels, vacation providers, travel agencies, technology, software, fashion, and lifestyle brands.</p>
                    <p><strong>Updated Offers:</strong> We regularly update Oman Air promo codes and travel promotions.</p>
                    <p><strong>Verified Discounts:</strong> Browse verified coupon codes, limited-time offers, and exclusive travel deals in one convenient place.</p>
                    <p><strong>Completely Free:</strong> Couponsbit is free to use whenever you're looking to save.</p>
                    <p><strong>Global Travel Savings:</strong> Alongside Oman Air, Couponsbit features deals from hundreds of trusted airlines, hotel brands, online travel agencies, and vacation providers worldwide.</p>
                  </div>

                  {/* Experience Premium Travel While Spending Less */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Experience Premium Travel While Spending Less</h3>
                    <p>
                      Whether you're flying for business, planning a dream vacation, or exploring a new destination, Oman Air combines award-winning service with a growing international network to make every journey more enjoyable.
                    </p>
                    <p>
                      Browse the latest Oman Air promo codes, coupon codes, and exclusive travel deals on Couponsbit today and save more on your next adventure.
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
                    { q: "What is Oman Air?", a: "Oman Air is the national airline of the Sultanate of Oman, offering international passenger flights and travel services to destinations across the world." },
                    { q: "What services does Oman Air offer?", a: "Oman Air provides international flights, Business and Economy Class travel, Oman Air Holidays vacation packages, Flight Pass options, travel extras, and online booking management." },
                    { q: "What is Oman Air Holidays?", a: "Oman Air Holidays is the airline's vacation platform that allows travelers to book bundled flight and hotel packages, airport transfers, tours, and travel experiences." },
                    { q: "Where can I find Oman Air promo codes?", a: "You can find the latest Oman Air promo codes, coupon codes, and exclusive travel deals on Couponsbit." },
                    { q: "Does Oman Air offer Business Class?", a: "Yes. Oman Air offers premium Business Class cabins on many routes, featuring enhanced comfort, dining, and airport services." },
                    { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps travelers discover verified coupon codes, promotional offers, and discounts from trusted global brands." }
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Oman Air Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Flight Deals", "Business Class", "Oman Air Holidays", "Oman Air Promo Code", "Muscat Flights", "Middle East Airfare", "Vacation Packages", "International Flights"].map(tag => (
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Oman Air Deals</h3>
                  <div className="space-y-6">
                    {OMAN_AIR_COUPONS.slice(0, 5).map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">O</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.mainValue} {deal.offText}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.title}</p>
                        </div>
                        <a href={deal.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Get Oman Air deal: ${deal.title}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
