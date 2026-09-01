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
  ChevronDown,Calendar, Grid,
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
                      Find Blue Cypress discount codes, promo codes, and apparel deals for Sep 2026. Sign up for 20% OFF your first order, shop polos for $110, hoodies from $114.95, women's essentials from $109.95, and quarter-zips from $124.95.
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
                {/* Updated left width container to w-[110px] sm:w-[160px] */}
                <div className="relative w-[110px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-1">
                    {/* Increased label font size to text-[11px] sm:text-[13px] */}
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-bold leading-tight">{c.label}</p>
                    {/* Increased value font size to text-[26px] sm:text-[36px] */}
                    <div className="text-[26px] sm:text-[36px] font-extrabold leading-none mt-2">{c.value}</div>
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
          <h3 className="text-black font-black text-lg mb-6">Blue Cypress Hoodies</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           For a more relaxed option, Blue Cypress offers hoodies alongside its performance-oriented polos and quarter-zips.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           The brand currently highlights The Hutton Hoodie and The Signature Hoodie among its collections. 
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           A hoodie can be useful for warm-ups before a round, travel days, casual weekends, or simply adding another layer to your everyday wardrobe.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           The Hutton Hoodie is currently featured prominently on the Blue Cypress website, with the brand describing it as a premium alternative to ordinary casual layers. 
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
  <h3 className="text-black font-black text-lg mb-8">Best Ways to Save at Blue Cypress</h3>
  
  <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8">
    A promotional code isn't the only way to get a better price. Using a few simple shopping strategies can help you make the most of Blue Cypress offers.
  </p>

  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before You Order",
        sub: "Make CouponsBit part of your shopping routine. Checking for a current Blue Cypress discount code before checkout only takes a moment and can help you identify an additional saving."
      },
      {
        icon: ShoppingBag,
        title: "Browse Sale Products First",
        sub: "Don't immediately head for the full-price collection. Blue Cypress already has markdowns on selected products, including several Essential Stripe polos."
      },
      {
        icon: Grid,
        title: "Compare Different Collections",
        sub: "If you're shopping primarily for a polo, compare the Essential, Stripe, Print, and seasonal collections. You may find that a different style gives you a similar look at a more attractive price."
      },
      {
        icon: Calendar,
        title: "Watch for Seasonal Promotions",
        sub: "Golf apparel naturally follows seasonal buying patterns. Keep an eye on new-season launches as well as promotions on earlier collections."
      },
      {
        icon: Layers,
        title: "Consider Versatile Pieces",
        sub: "A performance polo or quarter-zip that works for golf and everyday wear can provide more value than buying separate clothing for different occasions."
      }
    ].map((item, i) => (
      <div key={i} className="flex gap-4 items-start">
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
          Blue Cypress Discount Code, Promo Codes & Deals 2026
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-base font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
        <th className="p-5 text-base font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th className="p-5 text-base font-black text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-5 text-base font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-5 text-base font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 text-sm font-semibold">
      {[
        { title: "The Jackson Polo", val: "$110", cond: "Summer 2026 Collection", app: "Golf rounds & casual wear" },
        { title: "The Stokes Polo", val: "$110", cond: "Summer 2026 Collection", app: "Golf & casual apparel" },
        { title: "Women's Essentials", val: "From $109.95", cond: "Versatile activewear designs", app: "Women's active & golf apparel" },
        { title: "The Roberts Polo (Blue)", val: "$110", cond: "Classic modern fit", app: "Men's golf wear" },
        { title: "Hutton Hoodie (Navy)", val: "$114.95", cond: "Best-selling style", app: "Travel & casual layering" },
        { title: "Hutton Hoodie (Light Blue)", val: "$114.95", cond: "Comfortable layering option", app: "Golf & everyday wear" },
        { title: "Isaac Quarter-Zip (Navy)", val: "$124.95", cond: "Lightweight performance stretch", app: "Golf performance wear" },
        { title: "Isaac Mélange Quarter-Zip (Navy)", val: "$124.95", cond: "Stylish mélange finish", app: "Performance apparel" },
        { title: "First Order Offer", val: "20% OFF", cond: "Sign up required", app: "First-time orders" },
      ].map((item, i, arr) => (
        <tr 
          key={i} 
          className={`border-b border-gray-200 hover:bg-gray-50/50 transition-colors ${i === arr.length - 1 ? 'border-b-0' : ''}`}
        >
          <td className="p-5 text-black font-extrabold text-base align-middle max-w-[200px]">
            {item.title}
          </td>
          <td className="p-5 text-[#056BFA] font-extrabold text-base align-middle whitespace-nowrap">
            {item.val}
          </td>
          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">
            All Users
          </td>
          <td className="p-5 text-gray-500 align-middle max-w-[200px]">
            {item.cond}
          </td>
          <td className="p-5 text-gray-500 align-middle max-w-[220px]">
            {item.app}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for a <strong>Blue Cypress discount code</strong> to save on your next apparel order? CouponsBit helps shoppers discover current offers, sales, and promotions from Blue Cypress, a golf-inspired clothing brand known for combining performance fabrics with polished, versatile designs.
          </p>
          <p>
            Blue Cypress creates apparel for more than just the golf course. Its collections are designed to transition between golf, work, travel, and everyday wear, with products including polos, quarter-zips, hoodies, and accessories. The brand's current collection features Spring and Summer 2026 styles alongside its established essentials.
          </p>
          <p>
            Whether you're looking for a new golf polo, a lightweight layer for cooler mornings, or comfortable clothing that can work beyond the course, checking CouponsBit before ordering can help you find an opportunity to save.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Blue Cypress Discount Code</h3>
            <p>
              A Blue Cypress discount code can be a useful way to reduce the cost of your order when a valid promotion is available. However, shoppers don't necessarily need a code to find savings. Blue Cypress also offers products at sale prices, including selected polos from its Essential collection.
            </p>
            <p>
              For example, several Essential Stripe polos are currently priced at $89.95, compared with their regular price of $109.95.
            </p>
            <p>
              Before buying, compare any available discount with the product's current sale price. This helps you determine which option offers the better value.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Blue Cypress Promo Code Offers</h3>
            <p>
              If you're specifically searching for a Blue Cypress promo code, check CouponsBit before visiting the store. Promotional offers can change over time, so it's worth checking the latest available deal rather than relying on an old code found elsewhere.
            </p>
            <p>
              When you find an offer, review its conditions before applying it. Pay attention to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Expiration dates</li>
              <li>Eligible products</li>
              <li>Minimum order requirements</li>
              <li>Sale-item exclusions</li>
              <li>First-order restrictions</li>
              <li>Whether the offer can be combined with another promotion</li>
            </ul>
            <p>
              If a code isn't accepted at checkout, checking these conditions is usually the best place to start.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Blue Cypress Apparel</h3>
            <p>
              Blue Cypress positions itself around the idea of combining performance and style, with clothing designed for the golf course, office, and everyday life.
            </p>
            <p>
              This makes the brand particularly appealing to shoppers who don't want their golf wardrobe to look overly technical or limited to the course. Its polos can be paired with golf shorts or trousers, while quarter-zips and hoodies can be layered for travel, casual outings, or cooler weather.
            </p>
            <p>The current Blue Cypress range includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Polos</li>
              <li>Quarter-zips</li>
              <li>Hoodies</li>
              <li>Seasonal collections</li>
              <li>Accessories</li>
            </ul>
            <p>
              The brand's website currently highlights Summer 2026 polos, Spring 2026 styles, The Hutton Hoodie, The Signature Hoodie, and The Isaac Quarter-Zip.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Blue Cypress Golf Apparel</h3>
            <p>
              Golf is central to the Blue Cypress aesthetic. The brand's clothing combines performance-oriented materials with clean silhouettes that can easily work outside the course.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Blue Cypress Golf Polos</h3>
            <p>
              Polos are one of the brand's main product categories, with collections covering solid, striped, and printed styles. The current range includes names such as The Cade Polo, The Cullen Polo, The Thompson Polo, The Roberts Polo, The Hampton Polo, and other seasonal designs.
            </p>
            <p>
              The Essential collection is particularly suited to shoppers looking for versatile everyday golf shirts. The Essential Stripe White/Black Polo, for instance, is made from a 92% polyester and 8% spandex blend designed to provide stretch, durability, and comfort.
            </p>
            <p>The current Essential Stripe range includes combinations such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>White and Black</li>
              <li>White and Navy</li>
              <li>White and Light Blue</li>
              <li>Ibiza Blue and Island Blue</li>
              <li>Ibiza Blue and Medieval Blue</li>
              <li>Sweet Lavender and Blue Depths</li>
              <li>Ethereal Blue and Party Punch</li>
            </ul>
            <p>
              Several of these styles are currently marked down to $89.95.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Blue Cypress Quarter-Zips</h3>
            <p>
              A quarter-zip is a practical choice when you need an extra layer on the golf course without sacrificing a polished appearance.
            </p>
            <p>
              The Isaac Quarter-Zip is one of Blue Cypress's current featured pieces. It is made from 89% recycled polyester and 11% spandex and has a smooth performance fabric with stretch and a tailored silhouette. The current listed price is $124.95.
            </p>
            <p>
              The quarter-zip is available in colors such as navy and gray and comes in sizes S through 2XL.
            </p>
            <p>
              Its understated styling means it can be worn over a polo for a round of golf or paired with casual clothing when you're away from the course.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Blue Cypress Sale & Deals</h3>
            <p>
              A Blue Cypress sale can be a good opportunity to shop the brand without necessarily needing a promotional code.
            </p>
            <p>
              The current website already features markdowns across selected products. Several Essential Stripe polos, for example, have been reduced from $109.95 to $89.95.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Blue Cypress Polo Sale</h3>
            <p>
              If you're shopping specifically for a Blue Cypress polo sale, the Essential Stripe collection is worth checking.
            </p>
            <p>
              The current discounted selection includes multiple color combinations, giving shoppers an opportunity to choose between classic neutrals and brighter seasonal shades.
            </p>
            <p>
              Blue Cypress also continues to add seasonal polo collections, so shoppers may find different styles and pricing as new collections arrive.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Blue Cypress Seasonal Deals</h3>
            <p>
              The brand currently features its Summer 2026 Polo collection alongside its Spring 2026 range.
            </p>
            <p>
              Seasonal transitions can be worth watching if you're flexible about colors or designs. New collections may introduce fresh styles, while older products can eventually move into promotional pricing.
            </p>
          </div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Blue Cypress Promo Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Find an Available Offer — Visit CouponsBit and check the latest Blue Cypress offers before shopping.",
                "Step 2: Choose Your Products — Browse the Blue Cypress website and select the polos, quarter-zips, hoodies, or accessories you want.",
                "Step 3: Copy the Promo Code — If the offer requires a code, reveal it on CouponsBit and copy it.",
                "Step 4: Shop at Blue Cypress — Add your selected products to the shopping cart and proceed toward checkout.",
                "Step 5: Apply the Code — Enter the promotional code in the appropriate field during checkout and apply it.",
                "Step 6: Check Your Order Total — Make sure the expected saving has been reflected before completing the purchase.",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 font-bold text-sm mt-4">
              If the promotion doesn't apply, check the offer's terms and make sure your selected products qualify.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Shop Blue Cypress Clothing?</h3>
            <p>
              Blue Cypress appeals to shoppers who want golf apparel that can fit naturally into the rest of their wardrobe.
            </p>
            <p><strong>Performance Meets Everyday Style:</strong> The brand specifically describes its clothing as combining performance and style for use on the course, in the office, and beyond.</p>
            <p><strong>Stretch-Focused Fabrics:</strong> Selected Blue Cypress products use blends designed to provide flexibility and comfort. The Essential Stripe polo, for example, uses 92% polyester and 8% spandex, while the Isaac Quarter-Zip uses 89% recycled polyester and 11% spandex.</p>
            <p><strong>Polished Golf Aesthetic:</strong> Blue Cypress uses relatively clean silhouettes and understated branding, making many of its pieces easy to wear away from the golf course.</p>
            <p><strong>Seasonal Variety:</strong> The brand continues to introduce new seasonal collections, including Spring and Summer 2026 polos.</p>
            <p><strong>Beyond Polos:</strong> Although polos are a major part of the range, Blue Cypress also offers quarter-zips, hoodies, and accessories, allowing shoppers to build a more complete golf and lifestyle wardrobe.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Blue Cypress Order</h3>
            <p>
              Blue Cypress offers a range of polished, performance-focused clothing for golfers and anyone who prefers versatile apparel. From everyday polos and seasonal styles to quarter-zips and hoodies, the collection is designed to move easily between the course and everyday life.
            </p>
            <p>
              Before placing your order, check CouponsBit for a Blue Cypress discount code and compare it with any current sale pricing. A quick check before checkout can help you find a better price without compromising on the style or products you want.
            </p>
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
          <h3 className="text-2xl font-black text-black mb-8">Blue Cypress Discount Code FAQs</h3>
          {[
            { q: "Does Blue Cypress offer a discount code?", a: "Blue Cypress offers sale pricing and promotional opportunities throughout the year. Check CouponsBit for currently available offers before placing your order." },
            { q: "Where can I find a Blue Cypress promo code?", a: "CouponsBit can help you find available Blue Cypress promo codes and other promotional offers in one place." },
            { q: "What does Blue Cypress sell?", a: "Blue Cypress sells golf and lifestyle apparel, including polos, quarter-zips, hoodies, seasonal clothing, and accessories." },
            { q: "Does Blue Cypress sell golf polos?", a: "Yes. Polos are one of Blue Cypress's core categories. The brand offers solid, striped, printed, and seasonal designs." },
            { q: "How much do Blue Cypress polos cost?", a: "Prices vary depending on the collection and style. Several Essential Stripe polos are currently priced at $89.95, reduced from $109.95, while other current polo styles are listed at $110." },
            { q: "How much is the Blue Cypress Isaac Quarter-Zip?", a: "The Isaac Quarter-Zip is currently listed at $124.95. It is made with 89% recycled polyester and 11% spandex and is available in several colors." },
            { q: "Does Blue Cypress have a sale?", a: "Yes. Blue Cypress currently has selected products at reduced prices, including several Essential Stripe polos. Sale availability can change as inventory and seasonal collections are updated." },
            { q: "What is Blue Cypress known for?", a: "Blue Cypress is known for golf-inspired apparel that combines performance-focused materials with a polished lifestyle aesthetic. Its clothing is designed to work both on and off the course." },
            { q: "Is Blue Cypress clothing only for golfers?", a: "No. While golf is an important part of the brand's identity, Blue Cypress positions its clothing for the course, office, and everyday life." },
            { q: "Is CouponsBit free to use?", a: "Yes. CouponsBit is free to use. You can browse available Blue Cypress offers and other shopping deals without paying a fee." },
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
            {["Golf Polos", "Quarter-Zips", "Hoodies", "Blue Cypress Discount Code", "Essential Stripe Polo", "Spring Collection", "Summer 2026", "Free Shipping"].map(tag => (
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
