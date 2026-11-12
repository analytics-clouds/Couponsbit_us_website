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
  Heart,
  SlidersHorizontal,
  X,
  Lock,
  Plane,
  Tv,
  Code,
  Server,
  Cloud,
  LayoutGrid,
  Search,
  Laptop,
  Zap
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { MCAFEE_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const STORE_URL = "https://performance.gotrackier.com/click?campaign_id=4801&pub_id=1015";
const STORE_LOGO = "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784618848/mcafree-logo_fy86ap.webp";

const RELATED_STORES: StoreItem[] = [
  { name: "UltaHost", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/ultahost-logo_zsnpu7.webp", dealText: "Up To 62% OFF", href: "/stores/ultahost-discount-code" },
  { name: "Hostinger", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/hostinger-logo_m9ubvs.webp", dealText: "Up To 80% OFF", href: "/stores/hostinger-discount-code" },
  { name: "Bluehost", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp", dealText: "Up to 69% OFF", href: "/stores/bluehost-discount-code" },
  { name: "Hosting", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/Hosting_logo_c17yhb.webp", dealText: "Up To 75% OFF", href: "/stores/hosting-discount-code" },
  { name: "Upwork", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130860/upwork-logo_ki4h2l.webp", dealText: "Plans From $15", href: "/stores/upwork-discount-code" },
  { name: "Sintra", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781776169/sintra-coupon-code_piyu2d.webp", dealText: "Up to 70% OFF", href: "/stores/sintra-discount-code" },
];

export default function McafeeCouponsContent() {
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

  const filteredCoupons = MCAFEE_COUPONS.filter((coupon) => {
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

  const codesCount = MCAFEE_COUPONS.filter(c => Boolean(c.code)).length;
  const dealsCount = MCAFEE_COUPONS.filter(c => !c.code).length;

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
            <p className="text-sm font-semibold text-gray-500 mb-6">Paste this code at checkout on McAfee</p>
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
                Continue to McAfee <ExternalLink className="w-4 h-4" />
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
              <span className="text-black font-extrabold">McAfee</span>
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
                      <Image src={STORE_LOGO} alt="McAfee" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h1 className="text-black font-black text-3xl md:text-4xl mb-2">McAfee Discount Code</h1>
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
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">Ratings</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Looking for the latest McAfee discount code? Save up to 75% on McAfee Total Protection and secure your devices with trusted antivirus, identity theft protection, and online privacy features. Choose from plans for individuals, families, and multiple devices while enjoying verified discounts throughout Nov 2026. Whether you want to protect your PC, Mac, smartphone, or tablet, McAfee delivers comprehensive digital security with powerful threat detection and exclusive offers at affordable prices.
                    </p>
                    <div className="flex items-center gap-3 mt-4 mb-2">
                      <a
                        href={STORE_URL}
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
                    { icon: Tag, val: `${MCAFEE_COUPONS.length}`, label: "Offers" },
                    { icon: Percent, val: `${codesCount}`, label: "Codes" },
                    { icon: Users, val: "1M+", label: "Shoppers" },
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
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1784636681/mcafree-voucher-code_pllho9.webp " alt="McAfee Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
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
                    <h2 className="text-2xl font-black text-black leading-tight">McAfee Coupon Codes & Offers</h2>
                    <p className="text-xs font-semibold text-gray-500 mt-1">
                      Showing {filteredCoupons.length} of {MCAFEE_COUPONS.length} available offers
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
                        All ({MCAFEE_COUPONS.length})
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
                                    aria-label={`Get McAfee deal: ${coupon.title}`}
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
                  <h3 className="text-black font-black text-lg mb-6">About McAfee</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Founded in 1987, McAfee is a leading cybersecurity company that provides comprehensive digital protection for individuals, families, and businesses. Its security solutions help defend against viruses, malware, ransomware, phishing attacks, and other online threats.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Today, McAfee offers more than traditional antivirus software. Its product lineup includes identity protection, VPN services, password management, web protection, privacy tools, and multi-device security, helping users stay protected across Windows, macOS, Android, and iOS devices.
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
                  <h3 className="text-black font-black text-lg mb-2">What Can You Buy from McAfee?</h3>
                  <p className="text-gray-500 font-medium text-xs mb-8">
                    McAfee offers a variety of security products to meet different needs.
                  </p>

                  <div className="space-y-8">
                    {[
                      {
                        icon: Server,
                        title: "Antivirus Protection",
                        sub: "Protect your computer against viruses, malware, spyware, ransomware, and other evolving cyber threats."
                      },
                      {
                        icon: ShieldCheck,
                        title: "Total Protection",
                        sub: "An all-in-one security suite that combines antivirus protection with secure browsing, firewall protection, password management, and identity monitoring."
                      },
                      {
                        icon: Search,
                        title: "Identity Protection",
                        sub: "Monitor personal information and receive alerts that can help detect potential identity theft or data exposure."
                      },
                      {
                        icon: Cloud,
                        title: "Secure VPN",
                        sub: "Browse the internet more privately by encrypting your internet connection, especially when using public Wi-Fi networks."
                      },
                      {
                        icon: Lock,
                        title: "Password Manager",
                        sub: "Generate, store, and manage strong passwords securely across multiple devices."
                      },
                      {
                        icon: LayoutGrid,
                        title: "Multi-Device Security",
                        sub: "Protect multiple devices under a single subscription, including PCs, Macs, smartphones, and tablets."
                      },
                      {
                        icon: Users,
                        title: "Family Security Plans",
                        sub: "Choose plans designed to protect multiple users and devices within a household."
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
                  Protect Your Devices for Less with McAfee Coupon Codes
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
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Total Protection</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 75% OFF ($24.99, reg. $99.99)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Protects up to 5 devices</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Total Protection Suite</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Total Protection Plan</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Flat 66% OFF (from $49.99)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Covers up to 10 devices</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Total Protection Plan</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Advanced Plan</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Save $110 (from $89.99/yr)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Unlimited device coverage, identity protection</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Advanced Security Plan</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Individual Ultimate Plan</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Save $80 (from $79.99/yr)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Unlimited device protection, identity monitoring</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Individual Ultimate Plan</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Family Plan</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to $225 OFF (from $69.99/yr)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Covers Premium, Advanced & Ultimate Family plans</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Family Security Plans</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Back-To-School Sale</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Extra 10% OFF (from $39.99/yr)</td>
                        <td className="p-5 text-gray-500 align-middle">Students & families</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Real-time protection, VPN, identity monitoring</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Student & Family Subscriptions</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Premium Antivirus</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $24.99</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Malware & phishing protection</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Antivirus Software</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Multi-Device Security</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $69.99/yr</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Unlimited compatible devices</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Multi-Device Security Plans</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <p>
                    Keeping your devices secure doesn't have to be expensive. Whether you want to protect your laptop, smartphone, tablet, or your entire family's devices, McAfee offers a range of cybersecurity solutions designed to safeguard your digital life. Before purchasing a subscription, visit CouponsBit to discover the latest McAfee coupon codes, McAfee promo codes, and exclusive antivirus deals that help you save on trusted security software.
                  </p>
                  <p>
                    With decades of experience in cybersecurity, McAfee is trusted by millions of users worldwide for antivirus protection, identity monitoring, privacy features, and online security tools.
                  </p>

                  {/* Why Choose McAfee? */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose McAfee?</h3>
                    <p><strong>Comprehensive Protection:</strong> McAfee helps defend against viruses, malware, ransomware, phishing scams, and other online threats with continuously updated security technology.</p>
                    <p><strong>Multi-Platform Support:</strong> Protect Windows PCs, Mac computers, Android smartphones, and iPhones using one security solution.</p>
                    <p><strong>Real-Time Threat Detection:</strong> McAfee continuously monitors your device for emerging threats and helps block malicious activity before it causes damage.</p>
                    <p><strong>Privacy Features:</strong> Many subscriptions include Secure VPN, identity monitoring, password management, and web protection for enhanced online privacy.</p>
                    <p><strong>Easy-to-Use Dashboard:</strong> Manage your devices, subscriptions, and security settings through a simple and user-friendly interface.</p>
                    <p><strong>Trusted Global Brand:</strong> With decades of experience in cybersecurity, McAfee remains one of the most recognized names in digital security.</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a McAfee Coupon Code</h3>
                    <p className="text-gray-700 font-bold">Saving on your McAfee subscription is easy.</p>
                    <div className="space-y-6">
                      {[
                        "Step 1: Visit CouponsBit and browse the latest McAfee coupon codes.",
                        "Step 2: Choose the offer that matches your preferred subscription.",
                        "Step 3: Copy the available promo code.",
                        "Step 4: Visit McAfee and select your security plan.",
                        "Step 5: Enter the coupon code during checkout if required.",
                        "Step 6: Complete your purchase and activate your subscription."
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

                  {/* Smart Ways to Save More */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Smart Ways to Save More on McAfee</h3>
                    <p><strong>Check CouponsBit Before Buying:</strong> Browse CouponsBit regularly for updated McAfee promo codes and verified offers.</p>
                    <p><strong>Choose Annual Plans:</strong> Annual subscriptions often provide better value than paying monthly.</p>
                    <p><strong>Watch for Seasonal Sales:</strong> McAfee frequently offers discounts during Black Friday, Cyber Monday, Back-to-School promotions, and holiday sales.</p>
                    <p><strong>Select the Right Plan:</strong> Choose a subscription based on the number of devices and security features you actually need.</p>
                    <p><strong>Look for Multi-Device Packages:</strong> Family and multi-device plans can be more cost-effective than purchasing separate subscriptions.</p>
                  </div>

                  {/* Who Should Use McAfee? */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Who Should Use McAfee?</h3>
                    <p>McAfee is a great choice for:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Home users</li>
                      <li>Students</li>
                      <li>Families</li>
                      <li>Remote workers</li>
                      <li>Small business owners</li>
                      <li>Online shoppers</li>
                      <li>Gamers</li>
                      <li>Travelers</li>
                      <li>Professionals</li>
                      <li>Anyone looking to improve online security</li>
                    </ul>
                    <p>
                      Whether you're protecting one device or several, McAfee offers flexible security solutions for everyday digital protection.
                    </p>
                  </div>

                  {/* Why Use CouponsBit for McAfee Deals? */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for McAfee Deals?</h3>
                    <p>CouponsBit helps shoppers discover verified discounts across software, technology, travel, fashion, lifestyle, and more.</p>
                    <p><strong>Regularly Updated Offers:</strong> We frequently update McAfee coupon codes and promotional deals.</p>
                    <p><strong>Verified Discounts:</strong> Find genuine promo codes, exclusive offers, and limited-time antivirus discounts in one place.</p>
                    <p><strong>Completely Free:</strong> CouponsBit is free to use whenever you're looking to save money online.</p>
                    <p><strong>More Than Cybersecurity:</strong> In addition to McAfee, CouponsBit features savings from hundreds of trusted global brands across software, electronics, <Link href="/stores/ultahost-discount-code" className="text-[#056bfa] hover:underline">web hosting</Link>, cloud services, travel, and online shopping.</p>
                  </div>

                  {/* Stay Protected While Spending Less */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Stay Protected While Spending Less</h3>
                    <p>
                      Whether you're securing a personal laptop, protecting your family's devices, or looking for a complete cybersecurity solution, McAfee offers reliable protection against today's online threats.
                    </p>
                    <p>
                      Before subscribing, visit CouponsBit to browse the latest McAfee coupon codes, McAfee promo codes, and exclusive antivirus deals so you can enjoy premium digital security at a better price.
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
                    { q: "What is McAfee?", a: "McAfee is a global cybersecurity company that provides antivirus software, identity protection, VPN services, password management, and multi-device security solutions." },
                    { q: "Does McAfee protect against viruses and malware?", a: "Yes. McAfee helps protect devices from viruses, malware, ransomware, spyware, phishing attacks, and other common online threats." },
                    { q: "Can I use McAfee on multiple devices?", a: "Yes. Many McAfee subscriptions support multiple devices, including Windows PCs, Macs, Android phones, and iPhones." },
                    { q: "Does McAfee include a VPN?", a: "Many McAfee plans include a Secure VPN that helps protect your privacy while browsing online, especially on public Wi-Fi." },
                    { q: "Where can I find McAfee coupon codes?", a: "You can find the latest McAfee coupon codes, McAfee promo codes, and exclusive antivirus deals on CouponsBit." },
                    { q: "Is CouponsBit free to use?", a: "Absolutely. CouponsBit is completely free and helps users discover verified coupon codes, promo offers, and discounts from trusted global brands." }
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular McAfee Searches</h3>
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top McAfee Deals</h3>
                  <div className="space-y-6">
                    {MCAFEE_COUPONS.slice(0, 5).map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">M</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.topLabel} {deal.mainValue} {deal.offText}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.title}</p>
                        </div>
                        <a href={deal.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Get McAfee deal: ${deal.title}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
