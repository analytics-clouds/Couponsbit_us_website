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
  HardDrive,
  Laptop,
  Plane,
  Tv,
  Code,
  Server,
  Globe,
  Cloud,
  LayoutGrid,
  Mail,
  Zap,
  Link as LinkIcon
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ULTAHOST_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Hostinger", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/hostinger-logo_m9ubvs.webp", dealText: "Up To 80% OFF", href: "/stores/hostinger-discount-code" },
  { name: "Hosting", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/Hosting_logo_c17yhb.webp", dealText: "Up To 75% OFF", href: "/stores/hosting-discount-code" },
  { name: "Bluehost", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp", dealText: "Up to 69% OFF", href: "/stores/bluehost-discount-code" },
  { name: "Upwork", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130860/upwork-logo_ki4h2l.webp", dealText: "Plans From $15", href: "/stores/upwork-discount-code" },
  { name: "Envato Elements", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/envato-coupon-code_rhfnbt.webp", dealText: "Up to 50% OFF", href: "/stores/envato-elements-discount-code" },
  { name: "Sintra", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781776169/sintra-coupon-code_piyu2d.webp", dealText: "Up to 70% OFF", href: "/stores/sintra-discount-code" },
];

export default function UltahostCouponsContent() {
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

  const filteredCoupons = ULTAHOST_COUPONS.filter((coupon) => {
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

  const codesCount = ULTAHOST_COUPONS.filter(c => Boolean(c.code)).length;
  const dealsCount = ULTAHOST_COUPONS.filter(c => !c.code).length;

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
            <p className="text-sm font-semibold text-gray-500 mb-6">Paste this code at checkout on UltaHost</p>
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
                Continue to UltaHost <ExternalLink className="w-4 h-4" />
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
              <span className="text-black font-extrabold">UltaHost</span>
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
                  <a href="https://ultahost.sjv.io/c/4303217/1888268/22575?subId1=subid&subId2=1015" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/ultahost-logo_zsnpu7.webp" alt="UltaHost" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h1 className="text-black font-black text-3xl md:text-4xl mb-2">UltaHost Discount Code</h1>
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
                      Looking for the latest UltaHost promo codes and discount codes for November 2026? Save up to 62% on premium hosting services, including Game Hosting, Shared Hosting, VPS, Dedicated Servers, Windows Hosting, and Mac Hosting. Whether you're building a personal website, business platform, online store, or game server, UltaHost delivers reliable performance at competitive prices. Explore our verified November 2026 UltaHost promo codes, discount codes, coupon codes, and voucher deals to unlock exclusive savings on hosting plans starting from just $2.00 per month.
                    </p>
                    <div className="flex items-center gap-3 mt-4 mb-2">
                      <a
                        href="https://ultahost.sjv.io/c/4303217/1888268/22575?subId1=subid&subId2=1015"
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
                    { icon: Tag, val: `${ULTAHOST_COUPONS.length}`, label: "Offers" },
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
                    <a href="https://ultahost.sjv.io/c/4303217/1888268/22575?subId1=subid&subId2=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789121743/26_j640j2.webp" alt="UltaHost Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f5f5f5]" fetchPriority="high" />
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
                    <h2 className="text-2xl font-black text-black leading-tight">UltaHost Coupon Codes & Offers</h2>
                    <p className="text-xs font-semibold text-gray-500 mt-1">
                      Showing {filteredCoupons.length} of {ULTAHOST_COUPONS.length} available offers
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
                        All ({ULTAHOST_COUPONS.length})
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
                                    aria-label={`Get UltaHost deal: ${coupon.title}`}
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
                  <h3 className="text-black font-black text-lg mb-6">About UltaHost</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Established in 2018 and headquartered in Delaware, USA, UltaHost is a global hosting company offering affordable and performance-driven web hosting services. The company serves customers across the world with solutions ranging from basic shared hosting to enterprise-level dedicated servers.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its portfolio includes shared hosting, managed WordPress hosting, VPS hosting, cloud hosting, reseller hosting, dedicated servers, domain registration, and professional email hosting.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    UltaHost operates multiple international data centers to deliver faster loading speeds and better website availability. By utilizing NVMe SSD storage, advanced server technology, and managed hosting services, the company helps businesses maintain secure, fast, and reliable online experiences. Customers also benefit from intuitive control panels, website management tools, automated backups, and responsive technical support.
                  </p>
                  <a href="https://ultahost.sjv.io/c/4303217/1888268/22575?subId1=subid&subId2=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
                  <h3 className="text-black font-black text-lg mb-2">Services Available at UltaHost</h3>
                  <p className="text-gray-500 font-medium text-xs mb-8">
                    UltaHost offers hosting products suitable for websites of every size and industry.
                  </p>

                  <div className="space-y-8">
                    {[
                      {
                        icon: LayoutGrid,
                        title: "Shared Hosting",
                        sub: "Perfect for blogs, personal websites, portfolios, startups, and small businesses looking for an affordable hosting solution with reliable performance."
                      },
                      {
                        icon: Globe,
                        title: "WordPress Hosting",
                        sub: "Hosting plans specifically optimized for WordPress websites, featuring one-click installation, automatic updates, improved security, and enhanced speed."
                      },
                      {
                        icon: Server,
                        title: "VPS Hosting",
                        sub: "Choose between managed and unmanaged Virtual Private Servers with dedicated resources, flexible configurations, and greater control over your hosting environment."
                      },
                      {
                        icon: HardDrive,
                        title: "Dedicated Servers",
                        sub: "Powerful dedicated hosting solutions designed for enterprise applications, high-traffic websites, gaming servers, and resource-intensive workloads."
                      },
                      {
                        icon: Cloud,
                        title: "Cloud Hosting",
                        sub: "Scalable cloud hosting that provides improved uptime, flexibility, and performance as your website grows."
                      },
                      {
                        icon: Users,
                        title: "Reseller Hosting",
                        sub: "Ideal for freelancers, agencies, and entrepreneurs who want to offer hosting services under their own brand."
                      },
                      {
                        icon: LinkIcon,
                        title: "Domain Registration",
                        sub: "Search, register, and manage domain names for your personal or business website from one platform."
                      },
                      {
                        icon: Mail,
                        title: "Business Email Hosting",
                        sub: "Create secure, professional email addresses using business-grade email hosting for improved communication and branding."
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
                  Save More on Web Hosting with the Latest UltaHost Coupon Codes
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
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Game Hosting</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Save up to 62% ($2.00/mo, reg. $5.30/mo)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Lag-free dedicated servers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Game Hosting</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Windows Hosting</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Save 45% ($13.99/mo, reg. $25.50/mo)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Full RDP access</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Windows Hosting</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Flash Sale – All Hosting Services</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 40% OFF (from $3.29/mo)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">30-Day Money-Back Guarantee</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">All Hosting Plans</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Power Plus VPS Hosting</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Save 40% ($32.80/mo, reg. $54.80/mo)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">8GB DDR5 RAM, 250GB NVMe</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">VPS Hosting</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">VPS Basic Hosting</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Save 40% ($4.80/mo, reg. $7.99/mo)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">1GB DDR5 RAM, 30GB NVMe</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">VPS Hosting</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Ulta-X1 Dedicated Server</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Save 20% ($74.80/mo, reg. $93.50/mo)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Intel Xeon, 16GB DDR3 RAM</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Dedicated Servers</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Shared Starter Hosting</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Save 40% ($3.80/mo, reg. $5.99/mo)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Free SSL & Backups</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Shared Hosting</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Mac Hosting</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Save 40% ($16.50/mo, reg. $27.50/mo)</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">macOS environment</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Mac Hosting</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <p>
                    Looking for reliable <Link href="/stores/hostinger-discount-code">web hosting</Link> without overspending? UltaHost makes it easy to launch and manage websites with a wide range of hosting solutions for beginners, businesses, developers, and agencies. Before choosing your hosting plan, explore the latest UltaHost coupon codes, UltaHost promo codes, and exclusive hosting deals on CouponsBit to enjoy extra savings on shared hosting, WordPress hosting, VPS servers, dedicated hosting, and more.
                  </p>
                  <p>
                    Recognized for its high-speed infrastructure, secure hosting environment, and worldwide server locations, UltaHost has become a preferred hosting provider for individuals and businesses seeking dependable performance and scalability.
                  </p>

                  {/* Why Choose UltaHost? */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose UltaHost?</h3>
                    <p><strong>Excellent Website Performance:</strong> UltaHost uses cutting-edge NVMe SSD storage and optimized server architecture to deliver faster page loading speeds and smooth website performance.</p>
                    <p><strong>Hosting Plans for Every Need:</strong> Whether you're creating your first website or managing multiple enterprise projects, UltaHost offers hosting packages that can grow alongside your business.</p>
                    <p><strong>Worldwide Data Centers:</strong> With servers located in several countries, customers can host their websites closer to their audience, helping reduce latency and improve user experience.</p>

                    <p><strong>Advanced Website Security:</strong> Many hosting plans include valuable security features such as:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Free SSL Certificates</li>
                      <li>Daily Backups</li>
                      <li>Malware Detection</li>
                      <li>Firewall Protection</li>
                      <li>DDoS Protection</li>
                    </ul>
                    <p>These features help safeguard websites against online threats.</p>

                    <p><strong>Developer-Friendly Environment:</strong> Developers can take advantage of features including:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Root access on supported VPS plans</li>
                      <li>Multiple control panel choices</li>
                      <li>One-click application installation</li>
                      <li>Support for popular programming languages and web technologies</li>
                    </ul>

                    <p><strong>Round-the-Clock Support:</strong> UltaHost provides 24/7 customer assistance to help users with technical issues, server management, and hosting-related questions whenever needed.</p>
                  </div>

                  {/* How to Apply Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Apply an UltaHost Coupon Code</h3>
                    <p className="text-gray-700 font-bold">Saving money on your hosting purchase only takes a few simple steps.</p>
                    <div className="space-y-6">
                      {[
                        "Step 1: Visit CouponsBit and browse the newest UltaHost coupon codes and promotional offers.",
                        "Step 2: Choose the deal that best matches the hosting service you need.",
                        "Step 3: Copy the available coupon or promo code.",
                        "Step 4: Visit UltaHost and select your preferred hosting package, domain, or server.",
                        "Step 5: Paste the coupon code during checkout if the offer requires one.",
                        "Step 6: Complete your purchase and enjoy discounted pricing on your hosting plan."
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

                  {/* Tips to Save Even More at UltaHost */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Tips to Save Even More at UltaHost</h3>
                    <p><strong>Visit CouponsBit Regularly:</strong> CouponsBit frequently updates UltaHost promo codes, limited-time discounts, and special hosting promotions.</p>
                    <p><strong>Choose Longer Billing Cycles:</strong> Annual or multi-year hosting plans often provide significantly lower pricing compared to monthly subscriptions.</p>
                    <p><strong>Select the Right Hosting Package:</strong> Choose a hosting solution based on your website traffic, storage requirements, and future growth to avoid paying for unnecessary resources.</p>
                    <p><strong>Shop During Seasonal Sales:</strong> Major shopping events often bring attractive hosting discounts, making it a great time to purchase or renew your plan.</p>
                    <p><strong>Bundle Multiple Services:</strong> Combining hosting with domain registration or business email hosting can simplify website management while providing greater overall value.</p>
                  </div>

                  {/* Who Should Use UltaHost? */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Who Should Use UltaHost?</h3>
                    <p>UltaHost offers flexible hosting solutions suitable for:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Bloggers</li>
                      <li>Small businesses</li>
                      <li>Online stores</li>
                      <li>Startups</li>
                      <li>Freelancers</li>
                      <li>Web developers</li>
                      <li>Digital agencies</li>
                      <li>WordPress website owners</li>
                      <li>SaaS companies</li>
                      <li>Large enterprises</li>
                    </ul>
                    <p>
                      Whether you're building a personal blog or managing several client websites, UltaHost provides scalable hosting services designed to support every stage of growth.
                    </p>
                  </div>

                  {/* Why Find UltaHost Deals on CouponsBit? */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Find UltaHost Deals on CouponsBit?</h3>
                    <p>CouponsBit helps shoppers save money on web hosting, software, technology, travel, fashion, and many other online services.</p>
                    <p><strong>Regularly Updated Offers:</strong> Our team continuously refreshes UltaHost coupon codes and promotional deals so you can access the latest savings.</p>
                    <p><strong>Verified Discounts:</strong> Browse genuine promo codes, limited-time offers, and exclusive hosting discounts in one convenient destination.</p>
                    <p><strong>Completely Free to Use:</strong> CouponsBit never charges users for accessing coupon codes or discount offers.</p>
                    <p><strong>Savings Beyond Hosting:</strong> Besides UltaHost, CouponsBit features deals from hundreds of trusted global brands across web hosting, cloud computing, software, business tools, travel, fashion, and lifestyle categories.</p>
                  </div>

                  {/* Build Your Website for Less */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Build Your Website for Less</h3>
                    <p>
                      Whether you're starting a personal blog, launching an eCommerce business, running a <Link href="/stores/bluehost-discount-code" className="text-[#056bfa] hover:underline">WordPress website</Link>, or deploying a high-performance VPS, UltaHost offers dependable hosting solutions built for speed, security, and long-term growth.
                    </p>
                    <p>
                      Before you purchase your next hosting plan, check CouponsBit for the latest UltaHost coupon codes, UltaHost promo codes, and exclusive web hosting deals to maximize your savings while investing in reliable hosting.
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
                    { q: "What is UltaHost?", a: "UltaHost is an international web hosting provider offering shared hosting, WordPress hosting, VPS hosting, dedicated servers, cloud hosting, reseller hosting, domain registration, and professional email hosting." },
                    { q: "Is UltaHost suitable for WordPress websites?", a: "Yes. UltaHost provides optimized WordPress hosting with enhanced speed, one-click installation, automatic updates, and features designed specifically for WordPress users." },
                    { q: "Does UltaHost provide VPS hosting?", a: "Yes. Customers can choose from both managed and unmanaged VPS hosting plans with scalable resources, root access on eligible plans, and flexible server configurations." },
                    { q: "Where can I find the latest UltaHost coupon codes?", a: "You can discover updated UltaHost coupon codes, UltaHost promo codes, and exclusive hosting discounts on CouponsBit." },
                    { q: "Does UltaHost include website security?", a: "Many hosting plans include free SSL certificates, malware scanning, automated backups, firewall protection, and DDoS mitigation to help keep websites secure." },
                    { q: "Is CouponsBit free?", a: "Yes. CouponsBit is completely free and helps users find verified coupon codes, promotional offers, and discounts from trusted brands worldwide." }
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular UltaHost Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Shared Hosting", "WordPress Hosting", "VPS Hosting", "Dedicated Server", "NVMe Hosting", "UltaHost Promo Code", "Cloud Hosting", "Cheap Hosting"].map(tag => (
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top UltaHost Deals</h3>
                  <div className="space-y-6">
                    {ULTAHOST_COUPONS.slice(0, 5).map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">U</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.topLabel} {deal.mainValue} {deal.offText}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.title}</p>
                        </div>
                        <a href={deal.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Get UltaHost deal: ${deal.title}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
