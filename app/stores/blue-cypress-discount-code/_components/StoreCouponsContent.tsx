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
  Shirt,
  Sparkles,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Home,
  Crown,
  Layers,
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
  { id: "d1", label: "SHOP", heading: "Blue Cypress Discount Code – The Jackson Polo | $110", sub: "Shop The Jackson Polo in White/Seafoam for $110" },
  { id: "d2", label: "SHOP", heading: "Blue Cypress Discount Code – The Stokes Polo | $110", sub: "Get The Stokes Polo for $110 from the Summer 2026 Collection" },
  { id: "d3", label: "STARTING AT", heading: "Blue Cypress Women's Essentials | $109.95", sub: "Explore Blue Cypress Women's Essentials starting at $109.95" },
  { id: "d4", label: "SHOP", heading: "Blue Cypress – The Roberts Polo in Blue | $110", sub: "Shop The Roberts Polo in Blue for $110" },
  { id: "d5", label: "SHOP", heading: "Blue Cypress – Hutton Hoodie Navy | $114.95", sub: "Get the Hutton Hoodie in Navy for $114.95" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/vooglam-logo_qe8mis.webp", dealText: "Eyeglasses From $65", href: "/stores/vooglam-discount-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/sungait-logo_tfolql.webp", dealText: "Up To 50% OFF", href: "/stores/sungait-discount-code" },
  { name: "Fytoo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp", dealText: "Frames From $1", href: "/stores/fytoo-discount-code" },
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Outfitr", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782451456/outfitr-coupon-code_zbvad3.jpg", dealText: "Up to 62% OFF", href: "/stores/outfitr-discount-code" },
];

const STORE_URL = "https://bluecypress.sjv.io/3kOgBX";

export default function BlueCypressCouponsContent() {
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
              <span className="text-black font-extrabold">Blue Cypress</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1786949027/blue-cypress-logo_ax2m7c.webp" alt="Blue Cypress" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Blue Cypress</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(3.1k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Blue Cypress discount codes, promo codes, and apparel deals for Aug 2026. Sign up for 20% OFF your first order, shop polos for $110, hoodies from $114.95, women's essentials from $109.95, and quarter-zips from $124.95.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "9", label: "Offers" },
                    { icon: Percent, val: "480", label: "Deals" },
                    { icon: Users, val: "50k+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786949027/blue-cypress-logo_ax2m7c.webp" alt="Blue Cypress Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Blue Cypress Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "SHOP", value: "$110", title: "Blue Cypress Discount Code – The Jackson Polo | $110", desc: "Shop The Jackson Polo in White/Seafoam for $110", bullets: ["Part of the Blue Cypress Summer 2026 Collection", "Ideal for golf rounds, casual outings and warm-weather styling", "Pair it with shorts or trousers for a clean summer look", "Blue Cypress Discount Code, Jackson Polo, Men's Golf Apparel, Summer Collection, USA"] },
                  { label: "SHOP", value: "$110", title: "Blue Cypress Discount Code – The Stokes Polo | $110", desc: "Get The Stokes Polo for $110 from the Summer 2026 Collection", bullets: ["Designed for a polished and comfortable golf-inspired look", "Suitable for golf, weekend outings and everyday summer wear", "A versatile polo that works well with casual or performance bottoms", "Blue Cypress Discount Code, Stokes Polo, Golf Clothing, Summer Fashion, USA"] },
                  { label: "STARTING AT", value: "$109.95", title: "Blue Cypress Women's Essentials | $109.95", desc: "Explore Blue Cypress Women's Essentials starting at $109.95", bullets: ["Discover versatile pieces designed for active and everyday lifestyles", "Ideal for golf, travel, casual outings and seasonal styling", "Refresh your wardrobe with polished and comfortable women's apparel", "Blue Cypress Discount Code, Women's Essentials, Golf Fashion, Women's Apparel, USA"] },
                  { label: "SHOP", value: "$110", title: "Blue Cypress – The Roberts Polo in Blue | $110", desc: "Shop The Roberts Polo in Blue for $110", bullets: ["Features a classic design suited to modern golf and casual style", "Great for golf rounds, weekends and everyday summer outfits", "Easy-to-pair style for a versatile seasonal wardrobe", "Blue Cypress Discount Code, Roberts Polo, Men's Golf Wear, Blue Polo, USA"] },
                  { label: "SHOP", value: "$114.95", title: "Blue Cypress – Hutton Hoodie Navy | $114.95", desc: "Get the Hutton Hoodie in Navy for $114.95", bullets: ["Best-selling style designed for comfort on and off the golf course", "Perfect for cooler mornings, travel and casual layering", "Combines relaxed comfort with a refined athletic appearance", "Blue Cypress Discount Code, Hutton Hoodie, Golf Hoodie, Men's Apparel, USA"] },
                  { label: "SHOP", value: "$114.95", title: "Blue Cypress – Hutton Hoodie Light Blue | $114.95", desc: "Shop the Hutton Hoodie in Light Blue for $114.95", bullets: ["Comfortable layering option for golf and everyday activities", "Great for cooler weather, travel and relaxed weekend looks", "Adds a casual yet polished touch to your wardrobe", "Blue Cypress Discount Code, Hutton Hoodie, Light Blue Hoodie, Golf Apparel, USA"] },
                  { label: "SHOP", value: "$124.95", title: "Blue Cypress – Isaac Quarter-Zip Navy | $124.95", desc: "Get The Isaac Quarter-Zip in Navy for $124.95", bullets: ["Smooth, lightweight design is made for comfortable movement", "Ideal for golf rounds, active days and outdoor activities", "Classic quarter-zip styling makes it easy to wear beyond the course", "Blue Cypress Discount Code, Isaac Quarter-Zip, Golf Performance Wear, Men's Clothing, USA"] },
                  { label: "SHOP", value: "$124.95", title: "Blue Cypress – Isaac Mélange Quarter-Zip Navy | $124.95", desc: "Shop The Isaac Mélange Quarter-Zip in Navy for $124.95", bullets: ["Features a stylish mélange finish with performance stretch", "Designed for comfortable movement during golf and active occasions", "Works well for the course, travel and everyday wear", "Blue Cypress Discount Code, Isaac Mélange Quarter-Zip, Golf Apparel, Performance Clothing, USA"] },
                  { label: "SAVE", value: "20%", title: "Blue Cypress – First Order Offer | 20% OFF", desc: "Sign up and receive 20% OFF your first Blue Cypress order", bullets: ["Unlock access to exclusive offers and future promotions", "Save on polos, hoodies, quarter-zips and women's essentials", "A great opportunity for new customers to explore the collection", "Blue Cypress Discount Code, 20% Off First Order, Golf Deals, USA"] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[14px] sm:text-2xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Blue Cypress: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">About Blue Cypress</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Blue Cypress is a performance-focused apparel brand blending performance and style — tailored for life on the course, in the office, and everywhere in between. The lineup includes polos, signature hoodies, quarter-zips, headwear and belts.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Shirt, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: Sparkles, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: ShoppingBag, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Home, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
                  <h3 className="text-black font-black text-lg mb-8">Blue Cypress Products & Categories</h3>
                  <div className="space-y-8">
                    {[
                      { icon: Shirt, title: "Polos", sub: "Solid, striped and printed polo styles across seasonal collections." },
                      { icon: Layers, title: "Hoodies & Quarter-Zips", sub: "Signature hoodies and quarter-zip layering pieces." },
                      { icon: Crown, title: "Headwear", sub: "A range of headwear styles designed to pair with the apparel line." },
                      { icon: ShoppingBag, title: "Belts & Accessories", sub: "Durable, polished belts and accessories for everyday and course wear." },
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
                  Blue Cypress Discount Codes, Promo Codes & Apparel Deals 2026
                </h2>

                <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[850px]">
                    <thead>
                      <tr className="bg-[#056BFA]">
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Highlight</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 font-bold text-[14px]">
                      {[
                        ["Blue Cypress Discount Code – The Jackson Polo | $110", "$110", "All Users", "Part of the Blue Cypress Summer 2026 Collection", "Ideal for golf rounds, casual outings and warm-weather styling"],
                        ["Blue Cypress Discount Code – The Stokes Polo | $110", "$110", "All Users", "Designed for a polished and comfortable golf-inspired look", "Suitable for golf, weekend outings and everyday summer wear"],
                        ["Blue Cypress Women's Essentials | $109.95", "$109.95", "All Users", "Discover versatile pieces designed for active and everyday lifestyles", "Ideal for golf, travel, casual outings and seasonal styling"],
                        ["Blue Cypress – The Roberts Polo in Blue | $110", "$110", "All Users", "Features a classic design suited to modern golf and casual style", "Great for golf rounds, weekends and everyday summer outfits"],
                        ["Blue Cypress – Hutton Hoodie Navy | $114.95", "$114.95", "All Users", "Best-selling style designed for comfort on and off the golf course", "Perfect for cooler mornings, travel and casual layering"],
                        ["Blue Cypress – Hutton Hoodie Light Blue | $114.95", "$114.95", "All Users", "Comfortable layering option for golf and everyday activities", "Great for cooler weather, travel and relaxed weekend looks"],
                        ["Blue Cypress – Isaac Quarter-Zip Navy | $124.95", "$124.95", "All Users", "Smooth, lightweight design is made for comfortable movement", "Ideal for golf rounds, active days and outdoor activities"],
                        ["Blue Cypress – Isaac Mélange Quarter-Zip Navy | $124.95", "$124.95", "All Users", "Features a stylish mélange finish with performance stretch", "Designed for comfortable movement during golf and active occasions"],
                        ["Blue Cypress – First Order Offer | 20% OFF", "20% OFF", "All Users", "Unlock access to exclusive offers and future promotions", "Save on polos, hoodies, quarter-zips and women's essentials"],
                      ].map((row, i) => (
                        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 8 && "border-b-0")}>
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
                    Looking for the latest <strong>Blue Cypress discount codes and promo codes</strong>? At Couponsbit, we help shoppers find new polo arrivals, signature hoodies, quarter-zips, headwear and belts from Blue Cypress.
                  </p>
                  <p>
                    Whether you're dressing for the course, the office, or everyday life, Blue Cypress offers apparel designed to blend performance and style. Before you shop, check Couponsbit for the latest Blue Cypress offers.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Know More About Blue Cypress</h3>
                    <p>
                      Blue Cypress is a performance-focused apparel brand offering polos, signature hoodies, quarter-zips, headwear and belts. The brand is built around versatile pieces tailored for life on the golf course, in the office, and everywhere in between.
                    </p>
                    <p>
                      The lineup includes multiple polo collections across solid, striped and printed styles, along with signature hoodie models and quarter-zip options for layering.
                    </p>
                    <p>
                      At Couponsbit, we help shoppers discover the latest Blue Cypress offers, new arrivals and seasonal collections in one place.
                    </p>
                  </div>

                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Shop Blue Cypress via Couponsbit</h3>
                    <div className="space-y-6">
                      {[
                        "Step 1: Browse Available Blue Cypress Offers — Visit the Blue Cypress page on Couponsbit and explore the latest offers.",
                        "Step 2: Select Your Preferred Offer — Choose the offer that best fits what you're shopping for.",
                        "Step 3: Click Get Deal — You'll be taken directly to the relevant Blue Cypress collection.",
                        "Step 4: Browse the Collection — Explore polos, hoodies, quarter-zips, headwear or belts.",
                        "Step 5: Add Items to Your Cart — Select sizes and colors for your order.",
                        "Step 6: Complete Your Purchase — Finalize your order at checkout on Blue Cypress.",
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                          <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save at Blue Cypress</h3>
                    <p><strong>Check Couponsbit Before Shopping:</strong> Always visit Couponsbit before checking out to see the latest Blue Cypress offers.</p>
                    <p><strong>Watch for Free Shipping:</strong> Look out for free shipping offers on eligible orders.</p>
                    <p><strong>Browse New Arrivals Often:</strong> Seasonal collections update regularly, so checking back helps you catch new drops.</p>
                    <p><strong>Shop During Seasonal Sales:</strong> Watch for offers during Black Friday, Cyber Monday, New Year Sales and other seasonal events.</p>
                    <p><strong>Explore the Full Lineup:</strong> Pair polos, hoodies, headwear and belts for a complete look.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose Blue Cypress?</h3>
                    <p><strong>Performance & Style:</strong> Apparel designed to work on the course, in the office, and everywhere in between.</p>
                    <p><strong>Signature Pieces:</strong> Known for its signature hoodie models and quarter-zip layering options.</p>
                    <p><strong>Quality Craftsmanship:</strong> The brand emphasizes premium quality and durable everyday essentials.</p>
                    <p><strong>Complete Wardrobe:</strong> From polos to headwear and belts, Blue Cypress covers a full range of apparel needs.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for Blue Cypress Deals?</h3>
                    <p><strong>Curated Blue Cypress Offers:</strong> We regularly review available Blue Cypress offers to help users discover current promotions.</p>
                    <p><strong>Convenient Browsing:</strong> Find new arrivals, free shipping offers and category highlights in one place.</p>
                    <p><strong>Completely Free:</strong> Couponsbit is free to use and helps customers save across fashion, electronics, travel and more.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Build Your Wardrobe for Less</h3>
                    <p>Whether you're shopping polos, hoodies, quarter-zips, headwear or belts, Blue Cypress offers apparel designed for the course, the office and everyday life.</p>
                    <p>Before you shop, visit Couponsbit to explore the latest Blue Cypress offers and updates.</p>
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
                    { q: "What is Blue Cypress?", a: "Blue Cypress is a performance-focused apparel brand offering polos, hoodies, quarter-zips, headwear and belts designed for golf, office and everyday wear." },
                    { q: "Does Blue Cypress offer discount codes?", a: "Yes. Blue Cypress runs promotions such as free shipping offers and new arrival highlights." },
                    { q: "Where can I find Blue Cypress discount codes?", a: "You can find the latest Blue Cypress discount codes and offers on Couponsbit." },
                    { q: "What does Blue Cypress sell?", a: "Blue Cypress sells polos, hoodies, quarter-zips, headwear and belts, blending performance and style for golf, office and everyday wear." },
                    { q: "Is Blue Cypress apparel suitable for golf?", a: "Yes. Blue Cypress designs its apparel to work for life on the golf course as well as the office and everyday wear." },
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Blue Cypress Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["New Polos", "Signature Hoodies", "Quarter-Zips", "Headwear", "Blue Cypress Discount Code", "Belts", "Free Shipping", "New Arrivals"].map(tag => (
                      <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Blue Cypress Deals</h3>
                  <div className="space-y-6">
                    {DEALS.map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">B</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Blue Cypress: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
