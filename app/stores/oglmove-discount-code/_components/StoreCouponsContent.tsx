"use client";

import React, { useState } from "react";
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
  ChevronDown,
  LayoutGrid,
  Search,
  ShoppingBag,
  Shirt,
  Leaf,
  Recycle,
  Sparkles,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { OGLMOVE_COUPONS, type Coupon } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Bamboocool", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp", dealText: "Up to 25% OFF", href: "/stores/bamboocool-discount-code" },
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Aporro", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp", dealText: "Save Up To 45% OFF", href: "/stores/aporro-discount-code" },
  { name: "Blue Cypress", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/blue-cypress-logo_ax2m7c.webp", dealText: "20% OFF First Order", href: "/stores/blue-cypress-discount-code" },
  { name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/vooglam-logo_qe8mis.webp", dealText: "Eyeglasses From $65", href: "/stores/vooglam-discount-code" },
];

const STORE_URL = "https://eastriseinternationalgrouplimited.pxf.io/QYv3Yz";

export default function OglmoveCouponsContent() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<"all" | "code" | "deal">("all");
  const [sortOrder, setSortOrder] = useState<"popular" | "newest">("popular");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [modalData, setModalData] = useState<Coupon | null>(null);

  const filtered = OGLMOVE_COUPONS.filter(
    (c) => filterType === "all" || c.type === filterType
  );

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      {/* Modal */}
      {modalData && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setModalData(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalData(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            >
              ✕
            </button>
            <div className="mb-4">
              <span className="bg-[#056bfa] text-white text-xs font-black px-3 py-1 rounded-full uppercase">
                {modalData.label}
              </span>
            </div>
            <h3 className="text-xl font-black text-black mb-2">{modalData.title}</h3>
            <p className="text-gray-500 font-bold text-sm mb-4">{modalData.description}</p>
            {modalData.code && (
              <div className="bg-[#f5f5f5] border-2 border-dashed border-[#056bfa] rounded-2xl px-6 py-4 flex items-center justify-between mb-4">
                <span className="font-black text-[#056bfa] text-lg tracking-widest">{modalData.code}</span>
                <button
                  onClick={() => {
                    if (modalData.code) {
                      navigator.clipboard.writeText(modalData.code);
                      setCopiedId(modalData.id);
                      setTimeout(() => setCopiedId(null), 2000);
                    }
                  }}
                  className="bg-[#056bfa] text-white px-4 py-2 rounded-xl font-black text-sm"
                >
                  {copiedId === modalData.id ? "Copied!" : "Copy"}
                </button>
              </div>
            )}
            <ul className="space-y-2 mb-6">
              {(modalData.terms || modalData.points || []).map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm font-bold">
                  <span className="text-[#056bfa]">•</span>{t}
                </li>
              ))}
            </ul>
            <a
              href={STORE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="block w-full bg-[#056bfa] hover:bg-[#005f91] text-white font-black text-center py-4 rounded-2xl transition-colors"
            >
              Get Deal
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
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">OGLmove</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788434147/ogl-logo_p8i400.webp" alt="OGLmove" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">OGLmove Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(5.2k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Shoppers can find OGLmove Promo Code savings with up to 75% off select fashion styles and 50% off through text signup offers. The OGLmove Discount Code options also feature 15% off eligible orders, free shipping over $69, and stylish sets starting at $79. From dresses and tops to lounge outfits, these hand-picked deals provide valuable savings across collections. Verified codes are regularly updated for Nov 2026, helping shoppers secure tested discounts before checkout with confidence and enjoy seasonal fashion deals.
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
                    { icon: Tag, val: "13", label: "Offers" },
                    { icon: Percent, val: "1.0k", label: "Deals" },
                    { icon: Users, val: "1M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <stat.icon className="w-4.5 h-4.5 text-[#056bfa]" />
                      <div>
                        <div className="text-black font-black text-xs leading-none">{stat.val}</div>
                        <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: 1 }}>
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788434147/ogl-logo_p8i400.webp" alt="OGLmove Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                { icon: Star, title: "Top Deals", sub: "Best offers handpicked for you" },
                { icon: ShieldCheck, title: "Verified Coupons", sub: "100% working & tested codes" },
                { icon: PiggyBank, title: "Big Savings", sub: "Save more on every order" },
                { icon: RefreshCw, title: "Updated Daily", sub: "New offers every single day" },
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

        {/* Coupons + Sidebar */}
        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="top-offers lg:w-[65%]">
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-black leading-tight">OGLmove Discount Codes &amp; Offers</h2>
                </div>

                {/* Filter + Sort Bar */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className="flex bg-[#f5f5f5] rounded-2xl p-1 gap-1">
                    {(["all", "code", "deal"] as const).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFilterType(f)}
                        className={cn(
                          "px-4 py-2 rounded-xl text-sm font-black capitalize transition-all",
                          filterType === f ? "bg-white shadow text-black" : "text-gray-500 hover:text-black"
                        )}
                      >
                        {f === "all" ? "All" : f === "code" ? "Codes" : "Deals"}
                      </button>
                    ))}
                  </div>
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as "popular" | "newest")}
                    className="ml-auto bg-[#f5f5f5] border-0 rounded-2xl px-4 py-2.5 text-sm font-black text-black cursor-pointer"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                  </select>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-black border-2 transition-all",
                      isFavorite
                        ? "bg-red-50 border-red-400 text-red-500"
                        : "border-[#f0f0f0] text-gray-500 hover:border-red-300"
                    )}
                  >
                    <Heart className={cn("w-4 h-4", isFavorite && "fill-red-400 text-red-400")} /> Save Store
                  </button>
                </div>

                {filtered.map((c) => (
                  <div key={c.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[8px] text-[15px] sm:text-[15px] font-semibold leading-3">
                              {c.topLabel || c.label || "DEAL"}
                            </p>
                            <div className="text-[15px] sm:text-3xl font-extrabold leading-none mt-2">
                              {c.mainValue || c.discount}
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
                              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                            </div>
                            <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">{c.title}</h3>
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">{c.description}</p>
                            <button
                              type="button"
                              onClick={() => setExpandedCouponId(expandedCouponId === c.id ? null : c.id)}
                              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
                            >
                              View Details
                              <ChevronDown size={16} className={`transition-transform duration-300 ${expandedCouponId === c.id ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${expandedCouponId === c.id ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {(c.terms || c.points || []).map((b, bi) => (
                                  <li key={bi} className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>{b}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                            <button
                              onClick={() => setModalData(c)}
                              className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
                            >
                              Get Deal
                            </button>
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
                  <h3 className="text-black font-black text-lg mb-6">About OGLmove</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    OGLmove is a women's fashion brand offering sustainable "Everyday Comfortwear" made from soft, breathable fabrics derived from eco-conscious materials.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Shirt, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                      { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                      { icon: Leaf, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                      { icon: Sparkles, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                      { icon: Search, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
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

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8">OGLmove Products &amp; Services</h3>
                  <div className="space-y-8">
                    {[
                      { icon: Shirt, title: "Comfortwear", sub: "Everyday tops, bottoms and layering pieces." },
                      { icon: Recycle, title: "Sustainable Fabric", sub: "Patented biodegradable Plantive fabric." },
                      { icon: Sparkles, title: "Loungewear", sub: "Relaxed-fit sets for at-home comfort." },
                      { icon: Leaf, title: "B Corp Values", sub: "1% of annual revenue donated to the planet." },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4 items-start text-justify">
                        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-black font-black text-sm leading-tight mb-2">{item.title}</p>
                          <p className="text-gray-500 font-medium text-[11px] leading-relaxed">{item.sub}</p>
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
            <h2 className="text-2xl font-black text-black mb-10">More Stores You'll Love</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {RELATED_STORES.map((store, i) => (
                <Link key={i} href={store.href} className="bg-white border border-[#f0f0f0] rounded-3xl p-6 text-center shadow-sm hover:border-[#056bfa] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
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

        {/* SEO Text Section */}
        <section className="py-24 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
              <div className="prose max-w-none text-justify">
                <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                  OGLmove Discount Codes, Coupon Codes &amp; Comfortwear Deals 2026
                </h2>

                <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[850px]">
                    <thead>
                      <tr className="bg-[#056BFA]">
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 font-bold text-[14px]">
                      {[
                        ["Sandwashed Duo Lounge Set", "$119 (11% OFF)", "All Users", "Reduced from $134", "Loungewear sets"],
                        ["Sandwashed Palazzo & Bra Tank Set", "$129 (13% OFF)", "All Users", "Reduced from $140", "Loungewear sets"],
                        ["Eco-Mousse Asymmetrical Neck Top", "$49", "All Users", "New Arrival", "Tops"],
                        ["Cardigan & Flare Pants Set", "$135 (9% OFF)", "All Users", "Reduced from $148", "Loungewear sets"],
                        ["Free Standard Shipping", "On Orders Over $69", "All Users", "Add qualifying products to cart", "Sitewide"],
                        ["Eco-Mousse Surplice Midi Dress", "$79", "All Users", "New Arrival", "Dresses"],
                        ["LiteWarm Multi-Wear Layering Bra Top", "$69", "All Users", "Versatile styling", "Bra tops"],
                        ["Two-Piece Cami & Surplice Ruched Top", "$79", "All Users", "Two-piece set", "Bra tops"],
                        ["Off-Shoulder Airy Bra Top", "$55", "All Users", "Criss-cross design", "Bra tops"],
                        ["Wide-Leg Trouser", "$79", "All Users", "Stretch cotton blend", "Trousers"],
                        ["Ponte Little Black Bra Dress", "$89", "All Users", "Includes pockets", "Dresses"],
                        ["Eco-SkinKiss Ruched A-Line Midi Skirt", "$69", "All Users", "Flowy side-ruched design", "Skirts"],
                        ["Stretch Cotton Mock Neck Brami Top", "$49", "All Users", "Off-Duty Effortless staple", "Tops"],
                      ].map((row, i) => (
                        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 12 && "border-b-0")}>
                          <td className="p-5 text-black font-black align-middle max-w-[220px]">{row[0]}</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
                          <td className="p-5 text-gray-500 align-middle">{row[2]}</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[200px]">{row[3]}</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[240px]">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <p>
                    Looking for the latest <strong>OGLmove discount codes and coupon codes</strong>? At Couponsbit, we help shoppers find new arrival offers, comfortwear picks, sustainable fabric deals and loungewear offers.
                  </p>
                  <p>
                    Whether you're refreshing your everyday wardrobe or looking for sustainably made loungewear, OGLmove offers a range of Everyday Comfortwear pieces. Before you shop, check Couponsbit for the latest OGLmove offers.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Know More About OGLmove</h3>
                    <p>
                      OGLmove is a women's fashion brand offering sustainable "Everyday Comfortwear" made from soft, breathable fabrics derived from eco-conscious materials.
                    </p>
                    <p>
                      As a certified B Corp, OGLmove is committed to sustainability and social responsibility, using its patented biodegradable Plantive fabric across its comfortwear collections.
                    </p>
                    <p>
                      At Couponsbit, we help shoppers discover the latest OGLmove offers, fabric picks and loungewear highlights in one place.
                    </p>
                  </div>

                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use OGLmove via Couponsbit</h3>
                    <div className="space-y-6">
                      {[
                        "Step 1: Browse Available OGLmove Offers — Visit the OGLmove page on Couponsbit and explore the latest offers.",
                        "Step 2: Select Your Preferred Offer — Choose the offer that best fits your style.",
                        "Step 3: Click Get Deal — You'll be taken directly to the relevant OGLmove page.",
                        "Step 4: Choose Your Pieces — Browse comfortwear, loungewear or activewear.",
                        "Step 5: Check Sustainable Fabric Deals — Review options made with Plantive fabric.",
                        "Step 6: Complete Your Purchase — Confirm your order on OGLmove.",
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                          <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save at OGLmove</h3>
                    <p><strong>Check Couponsbit Before Shopping:</strong> Always visit Couponsbit before shopping to see the latest OGLmove offers.</p>
                    <p><strong>Watch for New Arrivals:</strong> New styles and colors are added regularly.</p>
                    <p><strong>Bundle Loungewear Sets:</strong> Shopping full sets can add up to bigger savings.</p>
                    <p><strong>Check Sale Picks:</strong> Selected seasonal styles are often discounted.</p>
                    <p><strong>Check Current Promotions Regularly:</strong> Offers and availability can update frequently.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose OGLmove?</h3>
                    <p><strong>Sustainable Materials:</strong> Patented biodegradable Plantive fabric across collections.</p>
                    <p><strong>Certified B Corp:</strong> Committed to sustainability and social responsibility.</p>
                    <p><strong>Everyday Comfort:</strong> Designed for softness, breathability and stretch.</p>
                    <p><strong>Values-Led Design:</strong> Fashion built around comfort and environmental responsibility.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for OGLmove Deals?</h3>
                    <p><strong>Curated OGLmove Offers:</strong> We regularly review available OGLmove offers to help users discover current promotions.</p>
                    <p><strong>Convenient Browsing:</strong> Find comfortwear picks, fabric deals and loungewear highlights in one place.</p>
                    <p><strong>Completely Free:</strong> Couponsbit is free to use and helps customers save across fashion, home, electronics and more.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More on Your Next Order</h3>
                    <p>Whether you're building a sustainable capsule wardrobe or restocking loungewear essentials, OGLmove offers a range of options to explore.</p>
                    <p>Before your next order, check Couponsbit to explore the latest OGLmove offers and updates.</p>
                  </div>

                  {!isReadMore && (
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
                  )}
                </div>

                <button onClick={() => setIsReadMore(!isReadMore)} className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline">
                  {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
                </button>

                {/* FAQ */}
                <div className="faq-section mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
                  {[
                    { q: "What is OGLmove?", a: "OGLmove is a women's fashion brand offering sustainable \"Everyday Comfortwear\" made from soft, breathable fabrics derived from eco-conscious materials." },
                    { q: "Does OGLmove offer discount codes?", a: "Yes. OGLmove runs promotions such as comfortwear picks and sustainable fabric deals." },
                    { q: "Where can I find OGLmove discount codes?", a: "You can find the latest OGLmove discount codes and offers on Couponsbit." },
                    { q: "What is OGLmove's Plantive fabric?", a: "Plantive is OGLmove's patented biodegradable fabric, designed for softness, breathability and stretch." },
                    { q: "Is OGLmove a certified B Corp?", a: "Yes. OGLmove is a certified B Corporation and commits to donating 1% of its annual revenue to environmental causes." },
                    { q: "Is Couponsbit free to use?", a: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers." },
                  ].map((faq, i) => (
                    <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors">
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

              {/* Sidebar */}
              <div className="space-y-10">
                <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular OGLmove Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Comfortwear", "Loungewear", "Activewear", "OGLmove Discount Code", "Sustainable Fashion", "Plantive Fabric", "New Arrivals", "Sale Picks"].map((tag) => (
                      <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top OGLmove Deals</h3>
                  <div className="space-y-6">
                    {OGLMOVE_COUPONS.slice(0, 5).map((deal) => (
                      <div key={deal.id} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">O</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.title}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">
                            {deal.mainValue ? `${deal.mainValue} ${deal.offText || ""}`.trim() : deal.discount}
                          </p>
                        </div>
                        <button onClick={() => setModalData(deal)} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</button>
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
