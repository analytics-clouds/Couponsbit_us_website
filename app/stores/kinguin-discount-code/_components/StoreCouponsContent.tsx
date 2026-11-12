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
  Gamepad2,
  Gift,
  FileCode2,
  CreditCard,
  PlusCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Season from "@/components/ui/Season";
import { type Coupon, KINGUIN_COUPONS } from "./offers";

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
    { name: "Driffle", dealText: "Up to 90% OFF", href: "/stores/driffle-discount-code", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494082/driffle-coupon-code_qfxsmi.jpg" },
    { name: "Unipin", dealText: "Up to 50% OFF", href: "/stores/unipin-discount-code", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494083/unipin-coupon-code_a2w0l6.jpg" },
    { name: "GamsGo", dealText: "Up to 70% OFF", href: "/stores/gamsgo-discount-code", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494081/gamsgo-coupon-code_sqwaw5.jpg" },
    { name: "Envato Elements", dealText: "Up to 60% OFF", href: "/stores/envato-elements-discount-code", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494080/envato-elements-coupon-code_i4f11n.jpg" },
    { name: "Hostinger", dealText: "Up to 75% OFF", href: "/stores/hostinger-discount-code", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494080/hostinger-coupon-code_goyh88.jpg" },
    { name: "Sintra", dealText: "Up to 40% OFF", href: "/stores/sintra-discount-code", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494081/sintra-coupon-code_r7m23k.jpg" },
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
            <p className="text-sm font-semibold text-gray-500 mb-6">Paste this code at checkout on Kinguin</p>
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
                Continue to Kinguin <ExternalLink className="w-4 h-4" />
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
              <span className="text-black">Kinguin</span>
            </nav>

            {/* Store Identity Hero */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-[32px] border border-[#f0f0f0] p-6 flex items-center justify-center bg-white shadow-sm shrink-0 group relative">
                <img
                  src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1783494079/kinguin-coupon-code_ugjj9s.jpg"
                  alt="Kinguin"
                  width={160}
                  height={160}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                  <h1 className="text-2xl md:text-4xl font-black text-black tracking-tight">Kinguin Discount Code</h1>
                  <span className="bg-[#e8f6f8] text-[#0451c4] text-xs font-black px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Store
                  </span>
                </div>

                <p className="text-gray-500 font-bold text-sm md:text-base max-w-3xl leading-relaxed mb-6">
                  Looking for the latest Kinguin discount code? Save up to 97% on PC games, software, gift cards, and digital content with verified Kinguin deals. Enjoy instant digital delivery on thousands of game keys, software licenses, subscriptions, and in-game items from top brands. Whether you're a casual gamer or a dedicated PC enthusiast, Kinguin makes it easy to unlock massive savings on your favorite titles and digital products with exclusive offers available throughout Nov 2026.
                </p>

                {/* Badges / Micro-stats */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs font-black text-gray-500 uppercase tracking-widest border-t border-[#f0f0f0] pt-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-black">{KINGUIN_COUPONS.length} Offers Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Updated November 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-gray-400" />
                    <span>3.8k Used Today</span>
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

        {/* Section 2: Season Component */}
        <Season />

        {/* Section 3 & 4: Coupons List + Sidebar */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Coupons List (Main Content) */}
              <div className="lg:w-[65%] space-y-6">

                {/* Coupon Cards */}
                {KINGUIN_COUPONS.map((coupon) => (
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
                                aria-label={`Get Kinguin deal: ${coupon.title}`}
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
                  <h3 className="text-black font-black text-lg mb-6">About Kinguin</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Kinguin is a global digital marketplace specializing in video game keys, software licenses, gift cards, and other digital products. Since its launch in 2013, the platform has grown into one of the largest marketplaces for gamers, offering products from multiple independent sellers through a single online platform.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Instead of selling only its own inventory, Kinguin operates as a marketplace where verified merchants list digital products for customers worldwide. Buyers can browse thousands of products across popular gaming platforms and software publishers while comparing prices before making a purchase.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Today, Kinguin serves millions of customers globally and continues expanding its marketplace with games, operating systems, productivity software, digital gift cards, and gaming subscriptions.
                  </p>
                  <a href="https://kinguin.sjv.io/c/4303217/3827272/50048?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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

                {/* What Can You Buy Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm max-w-2xl mx-auto">
                  <div className="mb-8">
                    <h2 className="text-black font-black text-xl mb-2">What Can You Buy on Kinguin?</h2>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">
                      Kinguin offers an extensive catalog of digital products across multiple categories.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Gamepad2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">PC Game Keys</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Purchase digital activation keys for popular PC games across a variety of genres, from action and adventure to strategy, simulation, sports, and RPGs.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Tv className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Console Games</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Browse digital games and downloadable content for supported gaming platforms.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <Gift className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Gaming Gift Cards</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Find digital gift cards for gaming platforms, online stores, and entertainment services.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <FileCode2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Software Licenses</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Kinguin also offers software activation keys for operating systems, office productivity suites, security software, antivirus programs, and other business tools.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Gaming Subscriptions</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Purchase digital subscription codes for selected gaming services and online memberships.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                        <PlusCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-black font-black text-sm leading-tight mb-2">Downloadable Content (DLC)</h3>
                        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                          Expand your favorite games with downloadable expansions, season passes, and additional content available through supported publishers.
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
                  Kinguin Coupon Codes, Promo Codes & Digital Gaming Deals
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
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Kinguin USA Summer Gaming Sale</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 97% OFF</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Steam, Xbox & PlayStation deals</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">PC Games, Gift Cards & In-Game Content</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Kinguin USA Summer Gift Cards Sale</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 67% OFF</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Steam, Spotify Premium, Netflix, Amazon</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Digital Gift Cards & Subscriptions</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Kinguin USA Meccha Chameleon</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 52% OFF</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Region-free Steam activation</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">PC Steam Account</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Kinguin USA EA SPORTS FC 26 Deal</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $1.86</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Region-free Steam account</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">PC Game Key</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Kinguin USA Forza Horizon 6 Deluxe Edition</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 33% OFF</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Bonus cars & deluxe content</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Xbox Series X|S & PC</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Kinguin KING'S Pass</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $2.99/month</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Up to 25% OFF, priority pre-orders, weekly drops</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Games, Software, Gift Cards & Digital Products</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Kinguin USA Forza Horizon 6 Standard Edition</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 29% OFF</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Open-world racing adventure</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Xbox Series X|S & PC</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Kinguin USA Steam Gift Cards</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Top Up & Save</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Safe, instant digital delivery</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Steam Gift Cards</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Kinguin USA Mystery Keys</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $5.84</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Chance to receive premium titles</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Mystery Game Keys</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Kinguin USA Gothic 1 Remake</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Best Price Available</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Legendary RPG rebuilt for modern gamers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">PC Steam CD Key</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Kinguin USA Valkyria Chronicles Bundle</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 24% OFF</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Tactical strategy gameplay</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Steam CD Key Bundle</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Kinguin USA Whiteout Survival Top-Up</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Exclusive Savings</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Fast digital delivery, secure global service</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Game Top-Ups</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Kinguin USA Grand Theft Auto Complete Bundle</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 14% OFF</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Includes classic GTA titles</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Complete Collection Bundle</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <h3 className="text-xl font-black text-[#056BFA] mb-4">Save More on Games, Software & Gift Cards with Kinguin Coupon Codes</h3>
                  <p>
                    Whether you're expanding your game library, purchasing <Link href="/stores/envato-elements-discount-code" className="text-[#056bfa] hover:underline">software licenses</Link>, or looking for discounted gift cards, Kinguin offers a marketplace where you can discover digital products at competitive prices. Before completing your purchase, visit Couponsbit to explore the latest <strong>Kinguin coupon codes, Kinguin promo codes, and exclusive gaming deals</strong> that help you save even more.
                  </p>
                  <p>
                    Trusted by millions of gamers and digital shoppers worldwide, Kinguin connects buyers with a wide selection of <Link href="/stores/driffle-discount-code">game keys</Link>, software licenses, gift cards, and gaming-related digital products. With Couponsbit, finding verified savings on your next purchase is quick and easy.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Why Choose Kinguin?</h3>
                    <p><strong>Large Digital Marketplace:</strong> Kinguin offers access to thousands of digital products across gaming, software, and entertainment categories.</p>
                    <p><strong>Competitive Prices:</strong> The marketplace allows customers to compare listings from different sellers, often resulting in attractive pricing on popular digital products.</p>
                    <p><strong>Instant Digital Delivery:</strong> Many digital keys and activation codes are delivered shortly after purchase, allowing customers to access their products quickly.</p>
                    <p><strong>Wide Platform Support:</strong> Kinguin offers products compatible with major gaming platforms and PC software ecosystems, making it convenient for a broad range of users.</p>
                    <p><strong>Secure Shopping Experience:</strong> The platform provides secure payment methods and customer support to help users manage their purchases and resolve eligible issues.</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056BFA] mb-8">How to Use a Kinguin Coupon Code</h3>
                    <p className="text-gray-500 text-sm font-bold -mt-4">Saving on your next purchase is simple.</p>
                    <div className="space-y-6">
                      {[
                        "Step 1: Visit Couponsbit — Browse the latest Kinguin coupon codes and promotional offers.",
                        "Step 2: Select an Offer — Choose the discount that matches your purchase.",
                        "Step 3: Copy the Coupon Code — Copy the available promo code before visiting Kinguin.",
                        "Step 4: Shop Your Digital Products — Add your preferred games, software licenses, gift cards, or subscriptions to your cart.",
                        "Step 5: Apply the Coupon — Enter the promo code during checkout if applicable.",
                        "Step 6: Complete Your Purchase — Finish your order and receive your digital products according to the seller's delivery process."
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
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Smart Ways to Save More at Kinguin</h3>
                    <p><strong>Check Couponsbit Before Every Purchase:</strong> Couponsbit regularly updates Kinguin coupon codes and promotional offers to help you maximize your savings.</p>
                    <p><strong>Compare Seller Listings:</strong> Since Kinguin operates as a marketplace, comparing available offers can help you find competitive pricing.</p>
                    <p><strong>Watch for Seasonal Sales:</strong> Gaming promotions often coincide with major shopping events, seasonal sales, and publisher campaigns.</p>
                    <p><strong>Bundle Your Purchases:</strong> Buying multiple digital products together may help you take advantage of promotional pricing or coupon eligibility.</p>
                    <p><strong>Subscribe for Updates:</strong> Stay informed about upcoming promotions, featured deals, and newly added digital products.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Who Can Benefit from Kinguin?</h3>
                    <p>Kinguin serves a wide range of digital shoppers, including: PC gamers, Console gamers, Casual players, Competitive gamers, Software users, Students, Professionals, Content creators, Tech enthusiasts, Gift card shoppers.</p>
                    <p>Whether you're purchasing your next game, upgrading your productivity software, or buying a <Link href="/stores/unipin-discount-code" className="text-[#056bfa] hover:underline">digital gift card</Link>, Kinguin offers a convenient marketplace for digital purchases.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Why Use Couponsbit for Kinguin Deals?</h3>
                    <p>Couponsbit helps shoppers discover verified savings across gaming, software, technology, travel, fashion, electronics, and lifestyle brands.</p>
                    <p><strong>Updated Offers:</strong> We regularly update Kinguin coupon codes and promotional deals.</p>
                    <p><strong>Verified Discounts:</strong> Browse coupon codes, exclusive offers, and limited-time savings in one convenient place.</p>
                    <p><strong>Completely Free:</strong> Couponsbit is free to use whenever you're looking to save.</p>
                    <p><strong>More Than Gaming Deals:</strong> Alongside Kinguin, Couponsbit features offers from hundreds of trusted brands across software, entertainment, online services, and digital shopping.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056BFA] mb-4">Unlock More Value on Every Digital Purchase</h3>
                    <p>Whether you're buying the latest PC game, renewing your software, or picking up a digital gift card, Kinguin offers a vast marketplace with thousands of digital products to explore.</p>
                    <p>Browse the latest Kinguin coupon codes, promo codes, and exclusive gaming deals on Couponsbit today and save more on your next digital purchase.</p>
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
                    { q: "What is Kinguin?", a: "Kinguin is a global digital marketplace where customers can purchase game keys, software licenses, gift cards, gaming subscriptions, and other digital products from independent sellers." },
                    { q: "What products are available on Kinguin?", a: "Kinguin offers PC game keys, console games, software licenses, operating systems, office software, antivirus programs, gaming gift cards, downloadable content (DLC), and digital subscriptions." },
                    { q: "How does Kinguin work?", a: "Kinguin connects buyers with independent sellers offering digital products. Customers can compare available listings, complete their purchase, and receive digital activation codes based on the seller's delivery process." },
                    { q: "Where can I find Kinguin coupon codes?", a: "You can find the latest Kinguin coupon codes, promo codes, and exclusive gaming deals on Couponsbit." },
                    { q: "Does Kinguin sell software licenses?", a: "Yes. In addition to games, Kinguin offers digital licenses for operating systems, office software, security applications, and other productivity tools." },
                    { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps shoppers discover verified coupon codes, promotional offers, and discounts from trusted brands worldwide." }
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Kinguin Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Game Keys", "PC Gaming", "Gift Cards", "Software Keys", "Kinguin Promo Code", "Steam Keys", "Office Licenses", "Gaming Subscriptions"].map(tag => (
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Kinguin Deals</h3>
                  <div className="space-y-6">
                    {KINGUIN_COUPONS.slice(0, 5).map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056BFA] font-black text-xl italic shadow-inner">K</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056BFA] transition-colors">{deal.topLabel} {deal.mainValue} {deal.offText}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.description}</p>
                        </div>
                        <a href={deal.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Get Kinguin deal: ${deal.title}`} className="bg-[#eff6ff] text-[#056BFA] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056BFA] hover:text-white transition-all active:scale-90">Get Deal</a>
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
