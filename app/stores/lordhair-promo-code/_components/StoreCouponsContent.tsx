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
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Scissors,
  Layers,
  Package,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface Deal {
  id: string;
  label: string;
  heading: string;
  sub: string;
}

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const DEALS: Deal[] = [
  { id: "d1", label: "NEW", heading: "Get $40 OFF 1 Custom Hair System", sub: "Latest Deals" },
  { id: "d2", label: "SHOP", heading: "Up to $100 OFF Exclusive Hair Systems", sub: "Featured Picks" },
  { id: "d3", label: "SHOP", heading: "$45 OFF 1 Hair System", sub: "Featured Picks" },
  { id: "d4", label: "TOP", heading: "Save on Hair System Maintenance Collection", sub: "Featured Picks" },
  { id: "d5", label: "BEST", heading: "SuperSkin-V Hair System for $249", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Bamboocool", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp", dealText: "Up to 25% OFF", href: "/stores/bamboocool-discount-code" },
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up to $260", href: "/stores/merachfit-discount-code" },
  { name: "Philips", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/philips-logo_yuwckz.webp", dealText: "Save Up To £120", href: "/stores/philips-discount-code" },
  { name: "Ballboyz", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/ballboyz-coupon-code_rduo3k.jpg", dealText: "Up to 50% OFF", href: "/stores/ballboyz-discount-code" },
  { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/sungait-logo_tfolql.webp", dealText: "Up To 50% OFF", href: "/stores/sungait-discount-code" },
];

const STORE_URL = "https://lordhair.pxf.io/c/4303217/1224094/15134?subId1=1015";

export default function LordhairCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

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
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
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
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788248210/lorthair-logo_g84ojx.webp" alt="Lordhair" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Lordhair</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(8.9k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Lordhair promo codes and discount codes for Sep 2026. Save up to $100 on custom hair systems, claim new customer savings, shop maintenance kits and hair treatments, and enjoy discounts on premium men's and women's hair replacement solutions.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "13", label: "Offers" },
                    { icon: Percent, val: "1.2k", label: "Deals" },
                    { icon: Users, val: "2M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" }
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788248210/lorthair-logo_g84ojx.webp" alt="Lordhair Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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

        {/* Coupons + Sidebar */}
        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Lordhair Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "DEAL", value: "$40 OFF", title: "Lordhair Promo Code – Get $40 OFF 1 Custom Hair System", desc: "Get $40 OFF when you order 1 custom hair system.", bullets: ["Enjoy $90 OFF when you purchase 2 custom hair systems.", "Earn Double Points for Everyone during the promotional period.", "Get a free Refresh travel size with qualifying U.S. orders from September 1–30."] },
                  { label: "SALE", value: "$100 OFF", title: "Lordhair Promo Code – Up to $100 OFF Exclusive Hair Systems", desc: "Save up to $100 OFF on selected exclusive hair systems.", bullets: ["Enjoy special savings during the Lordhair Brand Month promotion.", "Choose from a wide range of custom hair systems designed for a natural look.", "Limited-time offer available while promotional stock lasts."] },
                  { label: "DEAL", value: "$45 OFF", title: "Lordhair Promo Code – $45 OFF 1 Hair System", desc: "Get $45 OFF when you purchase any 1 hair system.", bullets: ["Save $100 OFF when you purchase any 2 hair systems.", "Explore Lordhair best-sellers with built-in antibacterial comfort**.", "Take advantage of these special Brand Month savings."] },
                  { label: "DEAL", value: "$91.92", title: "Lordhair – Save on Hair System Maintenance Collection", desc: "Get the 3R Hair System Maintenance Collection for $91.92.", bullets: ["Regular price is $114.90, offering significant savings.", "Stock up on professional-grade maintenance and styling essentials.", "Collection includes products for maintaining, securing, and styling hair systems."] },
                  { label: "DEAL", value: "$249", title: "Lordhair  – SuperSkin-V Hair System for $249", desc: "Get the SuperSkin-V Hair System for $249.", bullets: ["Features an ultra-thin 0.06mm skin base for a realistic appearance.", "Designed with realistic V-looped hair for a natural-looking finish.", "Offers hassle-free maintenance and a stress-free application."] },
                  { label: "SALE", value: "10% OFF", title: "Lordhair – Ruby Hair Integration System 10% OFF", desc: "Get the Ruby Hair Integration with Remy Human Hair for Women for $269.", bullets: ["Save 10% from the original $299 price.", "Made with Remy human hair for a natural and realistic appearance.", "Designed to provide comfortable hair integration for women."] },
                  { label: "DEAL", value: "$239", title: "Lordhair – UTS Hair System for $239", desc: "Get the UTS Hair System for $239.", bullets: ["Features an ultra-thin 0.03mm base for enhanced realism.", "Lightweight design delivers a natural scalp appearance.", "Subtle V-looped strands create a seamless and realistic finish."] },
                  { label: "DEAL", value: "$49.90", title: "Lordhair – Renewal Deep Moisture Treatment for $49.90", desc: "Get Renewal Deep Moisture Treatment for $49.90.", bullets: ["Designed to provide deep moisture for hair systems.", "Helps improve softness and reduce tangling.", "Ideal for maintaining the look and feel of your hair system."] },
                  { label: "NEW", value: "$30 OFF", title: "Lordhair  – New Customer Offer with $30 OFF", desc: "New customers can get $30 OFF their first hair system.", bullets: ["Receive Free Tape with the promotional offer.", "Get Renewal for $19.90 with the qualifying purchase.", "Offer is available for U.S. customers only."] },
                  { label: "DEAL", value: "$279", title: "Lordhair  – ZyroSen SuperSkin-V Starter Pack for $279", desc: "Get the ZYROSEN SuperSkin-V Starter Pack for $279.", bullets: ["Features an upgraded antimicrobial hair system.", "Includes essential hair system products designed for new users.", "Built for comfort, convenience, and everyday hair system wear."] },
                  { label: "DEAL", value: "$79.90", title: "Lordhair  – 3R Kit for $79.90", desc: "Add the 3R Kit for $79.90 during the Brand Month promotion.", bullets: ["Designed for comprehensive hair system maintenance.", "Helps you reset, renew, and refresh your hair system routine.", "Keep your hair system looking fresh and extend its wearability."] },
                  { label: "DEAL", value: "$329", title: "Lordhair  – French Lace Hair System for $329", desc: "Get the French Lace Hair System for $329.", bullets: ["Made with 100% French lace for softness and breathability.", "Designed to blend seamlessly with your natural hairline.", "Ideal for comfortable wear in **warm and humid climates."] },
                  { label: "NEW", value: "$20 OFF", title: "Lordhair  – Get $20 OFF Your First Hair System", desc: "Get $20 OFF your first hair system.", bullets: ["Explore different bases, densities, hairlines, colors, and styles.", "Choose a hair system designed around your preferred look and comfort.", "A great introductory offer for new Lordhair customers."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[12px] sm:text-[15px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[15px] sm:text-3xl font-extrabold leading-none mt-2">{c.value}</div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                          <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                            </div>
                            <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">{c.title}</h2>
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">{c.desc}</p>
                            <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                              View Details
                              <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {c.bullets.map((b, bi) => (
                                  <li key={bi} className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>{b}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Lordhair: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                    rel="noopener noreferrer"
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
                  <h3 className="text-black font-black text-lg mb-6">About Lordhair</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Lordhair is a hair replacement system manufacturer offering non-surgical, custom hair systems and toupees for men, handcrafted with human hair.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Scissors, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Layers, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Package, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
                  <h3 className="text-black font-black text-lg mb-8">Lordhair Products & Services</h3>
                  <div className="space-y-8">
                    {[
                      { icon: Scissors, title: "Hair Systems", sub: "Ready-made and custom non-surgical hair systems." },
                      { icon: Layers, title: "Base Materials", sub: "Thin skin and lace base options for a natural look." },
                      { icon: Package, title: "Tape & Accessories", sub: "Adhesive tapes and application tools." },
                      { icon: Sparkles, title: "Customization", sub: "Custom color, density, length and style options." },
                    ].map((item, i) => (
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
                  Lordhair Promo Codes, Coupon Codes & Hair System Deals 2026
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
                        ["Custom Hair System", "$40 OFF", "All Users", "$90 OFF on 2 custom systems", "Custom hair systems"],
                        ["Exclusive Hair Systems", "Up to $100 OFF", "All Users", "Lordhair Brand Month promotion", "Exclusive hair systems"],
                        ["1 Hair System", "$45 OFF", "All Users", "$100 OFF on 2 hair systems", "Hair systems"],
                        ["Maintenance Collection", "$91.92", "All Users", "Regular price $114.90", "Maintenance & styling"],
                        ["SuperSkin-V Hair System", "$249", "All Users", "Ultra-thin 0.06mm skin base", "SuperSkin-V systems"],
                        ["Ruby Hair Integration System", "10% OFF", "Women", "Remy human hair, $269", "Hair integration"],
                        ["UTS Hair System", "$239", "All Users", "Ultra-thin 0.03mm base", "UTS systems"],
                        ["Renewal Deep Moisture Treatment", "$49.90", "All Users", "Deep moisture for hair systems", "Maintenance products"],
                        ["New Customer Offer", "$30 OFF", "New Customers", "U.S. customers only", "First hair system"],
                        ["ZyroSen SuperSkin-V Starter Pack", "$279", "New Users", "Upgraded antimicrobial system", "Starter packs"],
                        ["3R Kit", "$79.90", "All Users", "Brand Month promotion", "Maintenance kits"],
                        ["French Lace Hair System", "$329", "All Users", "100% French lace", "French lace systems"],
                        ["First Hair System", "$20 OFF", "New Customers", "Introductory offer", "First hair system"],
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
                    Looking for the latest <strong>Lordhair promo codes and coupon codes</strong>? At Couponsbit, we help shoppers find new hair system offers, thin skin base deals, lace base picks and custom hair system deals.
                  </p>
                  <p>
                    Whether you're exploring a non-surgical hair loss solution or looking for a custom hairpiece, Lordhair offers a wide range of hair replacement systems. Before you order, check Couponsbit for the latest Lordhair offers.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Know More About Lordhair</h3>
                    <p>
                      Lordhair is a hair replacement system manufacturer and online retailer offering non-surgical hair systems and toupees for men.
                    </p>
                    <p>
                      With options across thin skin and lace base materials, all handcrafted using 100% human hair, Lordhair serves customers looking for a customizable, at-home hair loss solution.
                    </p>
                    <p>
                      At Couponsbit, we help shoppers discover the latest Lordhair offers, base material picks and custom system highlights in one place.
                    </p>
                  </div>

                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use Lordhair via Couponsbit</h3>
                    <div className="space-y-6">
                      {[
                        "Step 1: Browse Available Lordhair Offers — Visit the Lordhair page on Couponsbit and explore the latest offers.",
                        "Step 2: Select Your Preferred Offer — Choose the offer that best fits the hair system you need.",
                        "Step 3: Click Get Deal — You'll be taken directly to the relevant Lordhair page.",
                        "Step 4: Choose Your Base Material — Select thin skin, lace, or a custom hair system.",
                        "Step 5: Check Tape & Accessories Offers — Review available application accessories.",
                        "Step 6: Complete Your Purchase — Confirm your order on Lordhair.",
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                          <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save at Lordhair</h3>
                    <p><strong>Check Couponsbit Before Ordering:</strong> Always visit Couponsbit before ordering to see the latest Lordhair offers.</p>
                    <p><strong>Compare Base Materials:</strong> Thin skin and lace bases can offer different value depending on your needs.</p>
                    <p><strong>Consider Custom Systems:</strong> A custom hair system can offer a more tailored fit and look.</p>
                    <p><strong>Bundle Accessories:</strong> Ordering tape and accessories together can add convenience.</p>
                    <p><strong>Check Current Promotions Regularly:</strong> Offers and availability can update frequently.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose Lordhair?</h3>
                    <p><strong>Non-Surgical Solution:</strong> A pain-free alternative to surgical hair restoration.</p>
                    <p><strong>Customizable Systems:</strong> Options for color, density, length and style.</p>
                    <p><strong>Quality Materials:</strong> Hair systems handcrafted using 100% human hair.</p>
                    <p><strong>At-Home Convenience:</strong> Order and apply your hair system without salon visits.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for Lordhair Deals?</h3>
                    <p><strong>Curated Lordhair Offers:</strong> We regularly review available Lordhair offers to help users discover current promotions.</p>
                    <p><strong>Convenient Browsing:</strong> Find base material picks, custom system deals and accessory highlights in one place.</p>
                    <p><strong>Completely Free:</strong> Couponsbit is free to use and helps customers save across personal care, home, electronics and more.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More on Your Next Order</h3>
                    <p>Whether you're ordering your first hair system or exploring a custom design, Lordhair offers a range of options to explore.</p>
                    <p>Before your next order, check Couponsbit to explore the latest Lordhair offers and updates.</p>
                  </div>

                  {!isReadMore && (
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
                  )}
                </div>

                <button onClick={() => setIsReadMore(!isReadMore)} className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline">
                  {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
                </button>

                {/* FAQ */}
                <div className="mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
                  {[
                    { q: "What is Lordhair?", a: "Lordhair is a hair replacement system manufacturer offering non-surgical, custom hair systems and toupees for men, handcrafted with human hair." },
                    { q: "Does Lordhair offer promo codes?", a: "Yes. Lordhair runs promotions such as thin skin base deals and custom hair system deals." },
                    { q: "Where can I find Lordhair promo codes?", a: "You can find the latest Lordhair promo codes and offers on Couponsbit." },
                    { q: "What base materials does Lordhair offer?", a: "Lordhair offers hair systems with base materials including thin skin and lace, customizable for color, density, length and style." },
                    { q: "Does Lordhair use human hair?", a: "Yes. Lordhair crafts its hair systems using 100% human hair." },
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Lordhair Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Hair Systems", "Thin Skin Base", "Lace Base", "Lordhair Promo Code", "Men's Toupees", "Custom Hair System", "Hair Replacement", "Tape & Accessories"].map(tag => (
                      <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Lordhair Deals</h3>
                  <div className="space-y-6">
                    {DEALS.map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">L</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Lordhair: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
