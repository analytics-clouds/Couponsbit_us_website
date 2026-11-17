"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Star,
  Users,
  Copy,
  Check,
  X,
  Tag,
  Percent,
  BadgeCheck,
  PiggyBank,
  RefreshCw,
  LayoutGrid,
  Search,
  ShoppingBag,
  Scissors,
  Layers,
  Package,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { type Coupon, LORDHAIR_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  {
    name: "The Ayurveda Experience",
    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295215/tae-logo_dwfmfi.webp",
    dealText: "Flat 50% OFF",
    href: "/stores/the-ayurveda-experience-discount-code",
  },
  {
    name: "Kerala Ayurveda",
    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg",
    dealText: "Flat 10% OFF",
    href: "/stores/kerala-ayurveda-discount-code",
  },
  {
    name: "GoodRx",
    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/goodrx-logo_ibgfjr.webp",
    dealText: "From $39/Month",
    href: "/stores/goodrx-discount-code",
  },
  {
    name: "Merachfit",
    logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp",
    dealText: "Save Up To $260",
    href: "/stores/merachfit-discount-code",
  },
  {
    name: "Superrun",
    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037376/superrun_w6lj1n.webp",
    dealText: "Save $30 OFF",
    href: "/stores/superrun-discount-code",
  },
  {
    name: "RingConn",
    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp",
    dealText: "Starting From $199",
    href: "/stores/ringconn-discount-code",
  },
];

const STORE_URL =
  "https://lordhair.pxf.io/c/4303217/1224094/15134?subId1=1015";

export default function LordhairCouponsContent() {
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

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleOpenModal = (coupon: Coupon) => {
    const url = coupon.affiliateUrl || STORE_URL;
    if (coupon.code) {
      setModalData({
        isOpen: true,
        code: coupon.code,
        affiliateUrl: url,
        title: coupon.title,
      });
      navigator.clipboard.writeText(coupon.code);
      setCopiedId(coupon.id);
      setTimeout(() => setCopiedId(null), 2500);
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const filteredCoupons = LORDHAIR_COUPONS.filter((coupon) => {
    if (filterType === "codes") return Boolean(coupon.code);
    if (filterType === "deals") return !coupon.code;
    return true;
  }).sort((a, b) => {
    if (sortOrder === "discount") {
      const aVal = parseInt(a.mainValue.replace(/[^0-9]/g, "")) || 0;
      const bVal = parseInt(b.mainValue.replace(/[^0-9]/g, "")) || 0;
      return bVal - aVal;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      {/* Code Modal Popup */}
      {modalData.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 text-center shadow-2xl">
            <button
              onClick={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-[#e8f6f8] text-[#056bfa] rounded-2xl flex items-center justify-center mx-auto mb-4 font-black text-2xl">
              ✓
            </div>
            <h3 className="text-xl font-black text-black mb-2">Code Copied!</h3>
            <p className="text-gray-600 text-sm mb-6">{modalData.title}</p>
            <div className="flex items-center justify-between border-2 border-dashed border-[#056bfa] rounded-2xl p-3 bg-gray-50 mb-6">
              <span className="font-mono text-xl font-black text-[#056bfa] tracking-wider">
                {modalData.code}
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(modalData.code);
                  setCopiedId("modal");
                  setTimeout(() => setCopiedId(null), 2500);
                }}
                className="bg-[#056bfa] text-white p-2.5 rounded-xl hover:bg-[#005f91] transition-colors"
              >
                {copiedId === "modal" ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <a
              href={modalData.affiliateUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="w-full inline-block bg-[#056bfa] hover:bg-[#005f91] text-white font-bold py-3.5 rounded-2xl transition-colors text-center"
            >
              Go to Store & Redeem
            </a>
          </div>
        </div>
      )}

      <Navbar />

      <main>
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">
                Stores
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Lordhair</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a
                    href={STORE_URL}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1788248210/lorthair-logo_g84ojx.webp"
                        alt="Lordhair"
                        width={112}
                        height={112}
                        sizes="112px"
                        className="w-full h-full object-contain"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">
                      Lordhair Promo Code
                    </h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map((i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">
                        (8.9k Ratings)
                      </span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find better value on hair replacement solutions with the latest Lordhair promo code and Lordhair discount code offers in Nov 2026. Save 35% on hair systems, get up to $100 off exclusive hair systems, or take $45 off select hair system purchases. You can also explore men’s wigs up to 25% off and featured systems like SuperSkin-V for $249. Our verified codes are regularly updated, helping you save on wigs, hairpieces, and custom hair solutions.
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

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    {
                      icon: Tag,
                      val: `${LORDHAIR_COUPONS.length}`,
                      label: "Offers",
                    },
                    { icon: Percent, val: "1.2k", label: "Deals" },
                    { icon: Users, val: "2M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <stat.icon className="w-4.5 h-4.5 text-[#056bfa]" />
                      <div>
                        <div className="text-black font-black text-xs leading-none">
                          {stat.val}
                        </div>
                        <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ opacity: 1 }}
                  >
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1788349789/7_acjcjg.webp"
                        alt="Lordhair Promo Code"
                        width={800}
                        height={350}
                        className="w-full h-full object-contain bg-[#f8f8f8]"
                        fetchPriority="high"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="hidden md:block bg-[#f5f5f5] py-5 border-y border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
              {[
                {
                  icon: Star,
                  title: "Top Deals",
                  sub: "Best offers handpicked for you",
                },
                {
                  icon: ShieldCheck,
                  title: "Verified Coupons",
                  sub: "100% working & tested codes",
                },
                {
                  icon: PiggyBank,
                  title: "Big Savings",
                  sub: "Save more on every order",
                },
                {
                  icon: RefreshCw,
                  title: "Updated Daily",
                  sub: "New offers every single day",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 justify-center md:border-r last:border-0 border-[#e0e0e0] px-4"
                >
                  <item.icon className="w-6 h-6 text-[#056bfa] shrink-0" />
                  <div className="text-left">
                    <p className="text-black font-black text-sm leading-none">
                      {item.title}
                    </p>
                    <p className="text-gray-500 font-bold text-[12px] mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coupons + Sidebar */}
        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">
                    Lordhair Promo Codes & Offers
                  </h2>
                </div>

                {filteredCoupons.map((c) => (
                  <div key={c.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[12px] sm:text-[15px] font-semibold leading-3">
                              {c.topLabel}
                            </p>
                            <div className="text-[15px] sm:text-3xl font-extrabold leading-none mt-2">
                              {c.mainValue}
                            </div>
                            {c.offText && (
                              <p className="text-[10px] sm:text-[11px] font-bold text-white/90 uppercase tracking-widest mt-1">
                                {c.offText}
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
                            <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                              {c.title}
                            </h3>
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                              {c.description}
                            </p>
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedCouponId(
                                  expandedCouponId === c.id ? null : c.id
                                )
                              }
                              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
                            >
                              View Details
                              <ChevronDown
                                size={16}
                                className={cn(
                                  "transition-transform duration-300",
                                  expandedCouponId === c.id && "rotate-180"
                                )}
                              />
                            </button>
                            <div
                              className={cn(
                                "overflow-hidden transition-all duration-300",
                                expandedCouponId === c.id
                                  ? "max-h-[250px] opacity-100 mt-3"
                                  : "max-h-0 opacity-0"
                              )}
                            >
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {c.points.map((b, bi) => (
                                  <li
                                    key={bi}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-[#0344b0]">•</span>
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                            {c.code ? (
                              <button
                                type="button"
                                onClick={() => handleOpenModal(c)}
                                className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
                              >
                                Get Code
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={() => handleOpenModal(c)}
                                className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
                              >
                                Get Deal
                              </button>
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

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">
                    Find a Lordhair Promo Code
                  </h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    A Lordhair promo code can help you save on men's and women's
                    custom hair systems, stock hairpieces, toupees, hair
                    maintenance supplies, adhesives, tapes, and styling
                    products.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Lordhair regularly offers promotional campaigns such as
                    Brand Month savings, discounts on thin skin and lace base
                    systems, first-time customer coupons, and multi-piece
                    bundles.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Before placing your order, check CouponsBit for current
                    Lordhair promo codes, discounts, and verified offers to
                    maximize your savings.
                  </p>
                  <a
                    href={STORE_URL}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2"
                  >
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">
                    Top Categories
                  </h3>
                  <div className="space-y-1">
                    {[
                      {
                        icon: Scissors,
                        name: "Electronics",
                        count: "850+",
                        color: "text-blue-500",
                        href: "/categories/electronics",
                      },
                      {
                        icon: ShoppingBag,
                        name: "Entertainment",
                        count: "210+",
                        color: "text-purple-500",
                        href: "/categories/entertainment",
                      },
                      {
                        icon: Layers,
                        name: "Mobile & Telecom",
                        count: "320+",
                        color: "text-green-500",
                        href: "/categories/mobile",
                      },
                      {
                        icon: Package,
                        name: "Software & Digital",
                        count: "300+",
                        color: "text-violet-500",
                        href: "/categories/software",
                      },
                      {
                        icon: Search,
                        name: "Travel",
                        count: "420+",
                        color: "text-teal-500",
                        href: "/categories/travel",
                      },
                    ].map((cat, i) => (
                      <Link
                        key={i}
                        href={cat.href}
                        className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <cat.icon className={cn("w-4.5 h-4.5", cat.color)} />
                          <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">
                            {cat.name}
                          </span>
                        </div>
                        <span className="bg-[#e8f6f8] text-[#0451c4] px-2.5 py-0.5 rounded-full text-[12px] font-black">
                          {cat.count} Coupons
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/categories"
                    className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline"
                  >
                    View All Categories →
                  </Link>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">
                    How to Get the Best Deals on Lordhair
                  </h3>
                  <div className="space-y-8">
                    {[
                      {
                        icon: Tag,
                        title: "Check CouponsBit Before Ordering",
                        sub: "Before placing your Lordhair order, visit CouponsBit to look for available discount codes, vouchers, multi-unit savings, and promotional deals.",
                      },
                      {
                        icon: Percent,
                        title: "Order Multi-Piece Bundles",
                        sub: "Purchasing 2 hair systems instead of 1 often unlocks higher discounts such as $90 to $100 OFF total order value.",
                      },
                      {
                        icon: Sparkles,
                        title: "Take Advantage of New Customer Offers",
                        sub: "First-time shoppers can often claim $20 to $30 OFF their first hair system, sometimes paired with free tape or accessories.",
                      },
                      {
                        icon: Package,
                        title: "Bundle Maintenance Supplies",
                        sub: "Kits like the 3R Maintenance System provide shampoo, conditioner, and scalp-care items at bundle rates compared to individual item purchases.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex gap-4 items-start text-justify"
                      >
                        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-black font-black text-sm leading-tight mb-2">
                            {item.title}
                          </p>
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

        {/* More Stores */}
        <section className="py-20 bg-white border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-black text-black mb-10">
              More Stores You'll Love
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {RELATED_STORES.map((store, i) => (
                <Link
                  key={i}
                  href={store.href}
                  className="bg-white border border-[#f0f0f0] rounded-3xl p-6 text-center shadow-sm hover:border-[#056bfa] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="h-14 flex items-center justify-center mx-auto">
                    <img
                      src={store.logo}
                      alt={store.name}
                      width={120}
                      height={48}
                      className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-black font-black text-sm mt-5 mb-1">
                    {store.name}
                  </h3>
                  <p className="text-[#056bfa] font-black text-[12px] uppercase mb-4">
                    {store.dealText}
                  </p>
                  <span className="text-[#056bfa] font-black text-[12px] uppercase hover:underline decoration-2">
                    Visit Store →
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/stores"
              className="inline-flex items-center gap-2 px-9 py-3.5 border-2 border-[#056bfa] text-[#056bfa] bg-white rounded-full font-black hover:bg-[#056bfa] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <LayoutGrid className="w-4 h-4" />
              View More Stores
            </Link>
          </div>
        </section>

        {/* SEO Text Section */}
        <section className="py-24 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
              {/* Main Content Area */}
              <div className="prose max-w-none text-justify">
                <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                  Lordhair Promo Code, Discount Code & Hair System Deals
                </h2>

                <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[850px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#056BFA]">
                          <th
                            scope="col"
                            className="p-5 text-[15px] font-black uppercase tracking-wider text-white"
                          >
                            Offer
                          </th>
                          <th
                            scope="col"
                            className="p-5 text-[15px] font-black uppercase tracking-wider text-white"
                          >
                            Discount / Price
                          </th>
                          <th
                            scope="col"
                            className="p-5 text-[15px] font-black uppercase tracking-wider text-white"
                          >
                            Base / System Type
                          </th>
                          <th
                            scope="col"
                            className="p-5 text-[15px] font-black uppercase tracking-wider text-white"
                          >
                            Key Features &amp; Details
                          </th>
                          <th
                            scope="col"
                            className="p-5 text-[15px] font-black uppercase tracking-wider text-white"
                          >
                            Applicable On
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-[14px] font-bold text-gray-600">
                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            1 Custom Hair System Deal
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $40 OFF ($90 OFF on 2)
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Custom
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            Earn double points; free Refresh travel size on qualifying U.S. orders
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Custom hair replacement systems
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            Exclusive Hair Systems Promotion
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            Up to $100 OFF
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Exclusive Systems
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            Brand Month promotion; natural-looking hairpieces with custom fit
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Selected exclusive hair systems
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            Any 1 or 2 Hair Systems
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $45 OFF ($100 OFF on 2)
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Best Sellers
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            Built-in antibacterial comfort; Brand Month special offer
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            All qualifying hair systems
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            3R Maintenance Collection
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $91.92 (was $114.90)
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Maintenance
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            Complete care kit: products for maintaining, securing, and styling
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            3R Hair System Maintenance Collection
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            SuperSkin-V Hair System
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $249 Flat
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Thin Skin (0.06mm)
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            Realistic V-looped hair, ultra-thin base, low maintenance application
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            SuperSkin-V Hair System
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            Ruby Hair Integration for Women
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $269 (10% OFF / was $299)
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Women's Integration
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            100% Remy human hair for natural blending and volume enhancement
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Ruby Hair Integration System
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            UTS Ultra-Thin Skin System
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $239 Flat
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            UTS Skin (0.03mm)
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            0.03mm ultra-thin base, seamless scalp look, subtle V-looping
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            UTS Hair System
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            Renewal Deep Moisture Treatment
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $49.90
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Treatment
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            Restores softness, reduces tangles, prolongs hairpiece lifespan
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Renewal Deep Moisture Treatment
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            New Customer Offer
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $30 OFF + Free Tape
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            First-Time Buyers
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            $30 OFF first system, free tape, Renewal for $19.90 (U.S. only)
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            First hair system purchase
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            ZyroSen SuperSkin-V Starter Pack
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $279 Flat
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Starter Kit
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            Antimicrobial hair system + essentials designed for beginners
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            ZyroSen SuperSkin-V Starter Pack
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            3R Maintenance Kit Add-On
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $79.90
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Maintenance
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            Special add-on price during Brand Month; reset, renew &amp; refresh
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Lordhair 3R Kit
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            French Lace Hair System
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $329 Flat
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            French Lace
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            100% French lace base, ultra-breathable, ideal for warm climates
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            French Lace Hair System
                          </td>
                        </tr>

                        <tr className="transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            Introductory First System Offer
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $20 OFF
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            First-Time Buyers
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            Save $20 on any first hair system; choose base, density, and style
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            First hair system order
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Expandable Content Area */}
                <div
                  className={cn(
                    "text-gray-500 font-bold leading-relaxed space-y-6 relative transition-all",
                    !isReadMore && "max-h-[500px] overflow-hidden"
                  )}
                >
                  <div className="space-y-4">
                    <p>
                      Are you looking for a realistic, non-surgical hair replacement solution that fits naturally and restores your confidence? Before placing your next order, checking for a Lordhair promo code on CouponsBit can help you find discounts, special savings, and promotional offers on custom and stock hair systems.
                    </p>
                    <p>
                      Lordhair is an internationally recognized manufacturer specializing in handcrafted hair replacement systems, toupees, wigs, and hairpieces for men, along with hair integration systems for women. Every system is constructed with 100% human hair to achieve a completely natural appearance, lifelike movement, and undetectable hairlines.
                    </p>
                    <p>
                      Whether you prefer an ultra-thin skin base for seamless blending, breathable French lace for active lifestyles and warm climates, or a durable monofilament hybrid design, Lordhair provides customizable options tailored to your specifications.
                    </p>
                    <p>
                      CouponsBit aggregates the latest verified Lordhair coupon codes, promotional discounts, and seasonal deals so you can compare available savings before checkout.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      Save With a Lordhair Promo Code
                    </h3>
                    <p>
                      A quality hair system represents an investment in personal grooming, self-esteem, and everyday comfort. Because hair systems require regular maintenance and occasional replacement, taking advantage of discounts can lead to substantial long-term savings.
                    </p>
                    <p>
                      Lordhair frequently offers multi-unit promotions, brand-month discounts, and introductory coupon codes for first-time buyers.
                    </p>
                    <p>Common promotion types include:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>$40 to $45 OFF single custom or stock hair systems</li>
                      <li>$90 to $100 OFF when purchasing two hair systems together</li>
                      <li>First-order discounts of $20 to $30 OFF for new customers</li>
                      <li>Free accessories or discounted maintenance products on qualifying orders</li>
                      <li>Percentage savings on women's integration systems and Remy human hair products</li>
                      <li>Seasonal promotional bundles on maintenance kits and scalp-care items</li>
                    </ul>
                    <p>
                      Always verify the terms and conditions of each coupon code to ensure it applies to the specific base, customization, or bundle in your shopping cart.
                    </p>
                  </div>

                  <div
                    className={cn(
                      "text-gray-600 space-y-8 relative",
                      !isReadMore && "max-h-[500px] overflow-hidden"
                    )}
                  >
                    {/* Header & Overview */}
                    <div className="space-y-4">
                      <h2 className="text-2xl font-black text-[#056bfa]">
                        Lordhair System Base Types & Collections
                      </h2>
                      <p>
                        Choosing the right hair system begins with selecting the appropriate base construction for your lifestyle, skin sensitivity, and maintenance preferences.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                          <h4 className="font-bold text-[#056bfa]">Thin Skin Bases</h4>
                          <p className="text-sm">
                            Constructed from ultra-thin polyurethane ranging from 0.03mm (UTS) to 0.08mm. Skin bases blend seamlessly with the scalp, feature V-looped knotless ventilation, and are easy to clean and re-tape.
                          </p>
                        </div>
                        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                          <h4 className="font-bold text-[#056bfa]">Lace Bases</h4>
                          <p className="text-sm">
                            Made from fine French or Swiss lace. These bases offer maximum breathability and an invisible front hairline, making them ideal for active wearers and warmer climates.
                          </p>
                        </div>
                        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                          <h4 className="font-bold text-[#056bfa]">Monofilament & Hybrids</h4>
                          <p className="text-sm">
                            Featuring a durable mono top combined with skin perimeters or lace fronts. Monofilament systems provide extended durability and easy maintenance for long-term wear.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* The 3R Maintenance System */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        The Lordhair 3R Maintenance Routine
                      </h3>
                      <p>
                        To maximize the lifespan and natural look of any human hair system, proper care is essential. Lordhair developed the 3R routine:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1">
                          <h5 className="font-bold text-[#056bfa]">1. Reset</h5>
                          <p className="text-sm text-gray-700">Thorough cleansing and gentle residue removal to keep the base and hair strands free of buildup.</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1">
                          <h5 className="font-bold text-[#056bfa]">2. Renewal</h5>
                          <p className="text-sm text-gray-700">Deep conditioning and moisture treatments to restore softness, manageability, and prevent dryness.</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1">
                          <h5 className="font-bold text-[#056bfa]">3. Refresh</h5>
                          <p className="text-sm text-gray-700">Daily leave-in protection, detangling, and UV defense to keep hair looking healthy between washes.</p>
                        </div>
                      </div>
                    </div>

                    {!isReadMore && (
                      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    )}
                  </div>

                  {/* How-To Steps Box */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">
                      How to Use a Lordhair Promo Code
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Step 1: Browse CouponsBit",
                          text: "Visit CouponsBit to find the latest verified Lordhair promo codes and promotional offers.",
                        },
                        {
                          title: "Step 2: Copy the Code",
                          text: "Select the coupon that matches your desired hair system or maintenance products and copy it.",
                        },
                        {
                          title: "Step 3: Select Your System",
                          text: "Go to Lordhair's website, customize your base size, hair color, density, wave, and length, and add it to your cart.",
                        },
                        {
                          title: "Step 4: Enter the Promo Code",
                          text: "Paste your code into the coupon/promo code field during checkout and click apply.",
                        },
                        {
                          title: "Step 5: Review & Save",
                          text: "Confirm that the discount is reflected in your total amount before completing payment.",
                        },
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 italic">
                            {i + 1}
                          </div>
                          <div className="mt-1">
                            <strong className="text-gray-900 font-black block">
                              {step.title}
                            </strong>
                            <p className="text-gray-700 font-bold leading-relaxed">
                              {step.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      Why Use CouponsBit for Lordhair Discounts?
                    </h3>
                    <p>
                      CouponsBit tests and updates coupon codes regularly so you never waste time with expired or invalid codes. We highlight exact terms, multi-piece discount thresholds, and product eligibility so you can make informed decisions and secure the best price on your hair replacement system.
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
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isReadMore && "rotate-180"
                    )}
                  />
                </button>

                {/* Accordion FAQs */}
                <div className="faq-section mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">
                    Frequently Asked Questions About Lordhair Promo Codes
                  </h3>
                  {[
                    {
                      q: "What is a Lordhair promo code?",
                      a: "A Lordhair promo code is a promotional code that can provide a discount or other promotional benefit when used on an eligible purchase. The exact conditions depend on the offer.",
                    },
                    {
                      q: "Where can I find Lordhair promo codes?",
                      a: "You can check Couponsbit for available Lordhair promo codes, coupon codes, discount offers, and other promotions before placing your order.",
                    },
                    {
                      q: "Can I use a Lordhair coupon code on every product?",
                      a: "Not necessarily. Some Lordhair promotions are limited to specific products or categories. Many coupons apply primarily to hair systems and may not be combinable with other promotional discounts.",
                    },
                    {
                      q: "Does Lordhair sell products for women?",
                      a: "Lordhair's primary catalog focuses on men's hair replacement systems, wigs, toupees, and hairpieces. Its current website is positioned around men's hair systems and hair replacement solutions.",
                    },
                    {
                      q: "What base materials and hair systems does Lordhair offer?",
                      a: "Lordhair offers skin, lace, hybrid, and monofilament hair systems, along with custom hair systems and premium Remy hair options customizable for color, density, length, and style.",
                    },
                    {
                      q: "Does Lordhair use human hair?",
                      a: "Yes. Lordhair crafts its hair systems using 100% human hair.",
                    },
                    {
                      q: "Can I customize a Lordhair hair system?",
                      a: "Yes. Lordhair's custom hair systems can be personalized according to specifications such as base size, hair density, hair length, color, hair type, and hairstyle.",
                    },
                    {
                      q: "Does Lordhair sell hair system accessories?",
                      a: "Yes. Its accessories include tapes, adhesives, removers, shampoos, conditioners, scalp-care products, and other maintenance supplies.",
                    },
                    {
                      q: "What is the Lordhair 3R system?",
                      a: "The 3R approach stands for Reset, Renewal, and Refresh. It is Lordhair's hair system maintenance routine covering cleansing, conditioning/treatment, and ongoing protection.",
                    },
                    {
                      q: "Does Lordhair ship internationally?",
                      a: "Lordhair states that it ships to more than 100 countries. However, individual products and promotional offers may have regional restrictions, so check the applicable shipping and product information for your location.",
                    },
                    {
                      q: "Can shoppers in Canada use a Lordhair promo code?",
                      a: "Canadian shoppers can browse Lordhair's international store and select CAD where available. However, individual promotions may have country-specific terms, so check the conditions attached to each Lordhair coupon code.",
                    },
                    {
                      q: "Can shoppers in the UK use a Lordhair discount code?",
                      a: "UK shoppers can shop Lordhair and select GBP where available. As with any promotion, check the offer's terms to confirm that the discount code is valid for your order and region.",
                    },
                  ].map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
                      >
                        <span className="text-black font-black text-base">
                          {faq.q}
                        </span>
                        <div
                          className={cn(
                            "bg-[#f0f0f0] p-2 rounded-xl transition-all",
                            openFaq === i && "bg-[#056bfa]"
                          )}
                        >
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 text-gray-500 transition-transform",
                              openFaq === i && "text-white rotate-180"
                            )}
                          />
                        </div>
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 px-8 bg-white",
                          openFaq === i
                            ? "max-h-60 pb-8 opacity-100"
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

              {/* Sidebar Area */}
              <div className="space-y-10">
                <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                    Popular Lordhair Searches
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Lordhair Promo Code",
                      "Thin Skin Toupee",
                      "French Lace Systems",
                      "Men's Hair Replacement",
                      "Custom Hairpieces",
                      "Hair System Tape",
                      "Human Hair Wigs",
                      "3R Maintenance Kit",
                    ].map((tag) => (
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                    Today's Top Lordhair Deals
                  </h3>
                  <div className="space-y-6">
                    {LORDHAIR_COUPONS.slice(0, 5).map((deal) => (
                      <div
                        key={deal.id}
                        className="flex items-center gap-4 group cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                          L
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                            {deal.title}
                          </p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">
                            {deal.description}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleOpenModal(deal)}
                          className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90"
                        >
                          {deal.code ? "Get Code" : "Get Deal"}
                        </button>
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
