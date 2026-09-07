"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  Gamepad2, Code,
  LayoutGrid,
  Tag,
  ShoppingBag,
  Calendar,
  ChevronDown,
  ArrowRight, BadgeCheck,
  HeartPulse, Home, UtensilsCrossed, Baby, Car, BedDouble, Glasses, Shirt
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface Coupon {
  id: string;
  store: { name: string; style: string; brandColor: string };
  badge?: "Best Offer" | "Popular" | "Trending";
  title: string;
  description: string;
  usedCount: string;
  expiresIn: string;
  code: string;
}

const STORES = [
  { id: "driffle-discount-code", name: "Driffle", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp", coupons: 9, discount: "Up to 95% OFF" },
  { id: "unipin-discount-code", name: "Unipin", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782198037/unipijn-coupon-code_nh4xhc.webp", coupons: 10, discount: "Top-Ups From $0.94" },
  { id: "kinguin-discount-code", name: "Kinguin", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494079/kinguin-coupon-code_ugjj9s.jpg", coupons: 13, discount: "Up to 97% OFF" },
  { id: "gamsgo-discount-code", name: "GamsGo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787739252/gamesgo-logo_xo1xw9.webp", coupons: 10, discount: "Save Up to 85%" }
];

const SIDEBAR_CATEGORIES = [
  { icon: Laptop, name: "Electronics", count: "850+", color: "text-[#056bfa]", href: "/categories/electronics" },
  { icon: Plane, name: "Travel", count: "420+", color: "text-[#056bfa]", href: "/categories/travel" },
  { icon: Tv, name: "Entertainment", count: "210+", color: "text-[#056bfa]", href: "/categories/entertainment" },
  { icon: Code, name: "Software & Digital", count: "300+", color: "text-[#056bfa]", href: "/categories/software" },
  { icon: Zap, name: "Mobile & Telecom", count: "320+", color: "text-[#056bfa]", href: "/categories/mobile" },
  { icon: HeartPulse, name: "Health & Wellness", count: "90+", color: "text-[#056bfa]", href: "/categories/health" },
  { icon: Home, name: "Home & Lifestyle", count: "120+", color: "text-[#056bfa]", href: "/categories/home" },
  { icon: UtensilsCrossed, name: "Food & Dining", count: "150+", color: "text-[#056bfa]", href: "/categories/food" },
  { icon: Gamepad2, name: "Gaming & Digital Goods", count: "70+", color: "text-[#056bfa]", href: "/categories/gaming", active: true },
  { icon: Baby, name: "Baby & Maternity", count: "50+", color: "text-[#056bfa]", href: "/categories/baby" },
  { icon: Car, name: "Automotive", count: "60+", color: "text-[#056bfa]", href: "/categories/automotive" },
  { icon: BedDouble, name: "Hotels & Accommodation", count: "40+", color: "text-[#056bfa]", href: "/categories/hotels" },
  { icon: Glasses, name: "Eyewear", count: "30+", color: "text-[#056bfa]", href: "/categories/eyewear" },
  { icon: Shirt, name: "Fashion", count: "200+", color: "text-[#056bfa]", href: "/categories/fashion" },
];

export default function GamingCouponsContent() {
  const [activeTab, setActiveTab] = useState("All");
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [expandedCoupons, setExpandedCoupons] = useState<Set<string>>(new Set());
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setToastCode(code);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const toggleExpand = (id: string) => {
    const next = new Set(expandedCoupons);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedCoupons(next);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      <div className="bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-4 max-w-7xl py-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/categories" className="text-[#056bfa] hover:underline">Categories</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-700 font-medium">Gaming & Digital Goods</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-xl md:text-3xl">Gaming & Digital Goods Coupons & Deals</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on game keys, in-game currency, gift cards and digital subscriptions with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: Gamepad2, val: "42", label: "Coupons" },
                        { icon: Store, val: "4", label: "Top Stores" },
                        { icon: Users, val: "New", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#4F46E5]" />
                          <div>
                            <p className="text-black font-extrabold text-sm leading-none">{stat.val}</p>
                            <p className="text-gray-500 font-bold text-[10px] uppercase mt-0.5">{stat.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[45%] md:h-auto overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788780440/game_qszmf9.png"
                      alt="Gaming & Digital Goods Coupons"
                      width={700}
                      height={500}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Stores Section */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5 mb-5">
                <div className="mb-6">
                  <h2 className="text-black font-extrabold text-xl">Stores in Gaming & Digital Goods</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} stores</p>
                </div>
                {STORES.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-14 px-6 border border-dashed border-gray-200 rounded-2xl">
                    <div className="w-14 h-14 rounded-full bg-[#eef2ff] flex items-center justify-center mb-4">
                      <Gamepad2 className="w-6 h-6 text-[#4F46E5]" />
                    </div>
                    <h3 className="text-black font-extrabold text-base mb-1">No stores yet in Gaming & Digital Goods</h3>
                    <p className="text-gray-500 text-sm max-w-sm">We're adding new gaming & digital goods stores regularly — check back soon for verified coupon codes.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {STORES.map((store) => (
                      <div key={store.id} className="bg-white border border-gray-100 rounded-2xl p-4 text-center transform hover:-translate-y-1 hover:shadow-xl hover:border-[#056bfa] transition-all duration-300 flex flex-col justify-between group">
                        <div>
                          <div className="h-14 flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                            <img src={store.logo} alt={store.name} width={120} height={48} className="max-h-12 max-w-[120px] w-auto object-contain" />
                          </div>
                          <h3 className="mt-3 font-extrabold text-black text-sm group-hover:text-[#056bfa] transition-colors line-clamp-1 truncate px-1">{store.name}</h3>
                          <p className="text-gray-400 text-[11px] font-bold mt-0.5">{store.coupons} Coupons</p>
                          <span className="text-xs font-black text-[#0344b0] uppercase tracking-wide mt-2.5 block bg-[#e8f6f8] py-1 px-2 rounded-lg leading-normal">{store.discount}</span>
                        </div>
                        <div className="mt-4">
                          <Link href={`/stores/${store.id}`} aria-label={`View ${store.name} store`} className="block w-full">
                            <button className="w-full text-center py-2 border border-[#056bfa] text-[#056bfa] hover:bg-[#056bfa] hover:text-white rounded-lg text-xs font-black transition-all duration-300">View Store</button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>


            </div>

            <aside className="lg:w-[28%] space-y-4">
              <div className="sticky top-20 space-y-4">
                <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                  <h3 className="text-black font-extrabold text-base mb-5">All Categories</h3>
                  <div className="space-y-1">
                    {SIDEBAR_CATEGORIES.map((cat, i) => (
                      <Link key={i} href={cat.href} className="flex items-center justify-between p-2.5 px-3 rounded-xl cursor-pointer transition-all hover:bg-[#f5f5f5]">
                        <div className="flex items-center gap-2.5">
                          <cat.icon className={cn("w-4 h-4", cat.color)} />
                          <span className="text-sm text-gray-700 font-medium">{cat.name}</span>
                        </div>
                        <span className="text-xs text-black font-bold">{cat.count}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/categories" className="block mt-4 text-[#056bfa] font-bold text-xs hover:underline">View All Categories →</Link>
                </div>

                <div className="w-full flex justify-center mb-6 mt-6">
      <a
        href="https://www.google.com/preferences/source?q=couponsbit.us"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
      >
        <img
          src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png"
          alt="Add as a preferred source on Google"
          className="w-full max-w-[260px] h-auto object-contain"
        />
      </a>
    </div>

                <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                  <div className="space-y-5">
                    {[
                      { icon: BadgeCheck, title: "100% Verified Coupons", sub: "All codes are tested & verified" },
                      { icon: Star, title: "Best Gaming Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every order" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "Growing community of happy shoppers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#eef2ff] rounded-full flex items-center justify-center text-[#4F46E5]"><badge.icon className="w-4 h-4" /></div>
                        <div>
                          <p className="text-black font-extrabold text-sm leading-tight mb-0.5">{badge.title}</p>
                          <p className="text-gray-500 font-bold text-[10px]">{badge.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <section className="bg-white py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 items-start">

      {/* ── LEFT COLUMN ── */}
      <div className="lg:col-span-7 flex flex-col gap-14">

        {/* Intro */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight mb-3">
            Gaming Coupons, Promo Codes & Deals
          </h2>
          <p className="text-lg font-bold text-[#056bfa] mb-5">
            Gaming is no longer just a hobby you pick up occasionally.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For millions of players across the USA, it is entertainment, competition, social connection, and even a way to unwind after a long day.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            But building a gaming setup or keeping up with new releases can get expensive. Games, accessories, consoles, PCs, controllers, headsets, gaming chairs, subscriptions, and digital content can all add to your entertainment budget.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That is where smart shopping comes in.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Gaming category on CouponsBit helps gamers discover coupon codes, promo codes, discounts, offers, and gaming deals from online retailers and gaming-related stores.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Before buying your next game or upgrading your setup, checking for a gaming coupon code could help you get more for your budget.
          </p>
        </div>

        {/* Discover Gaming Coupon Codes */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Discover Gaming Coupon Codes</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Gaming retailers frequently run promotions around new releases, holidays, seasonal sales, major gaming events, and shopping occasions.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            CouponsBit provides a convenient place to look for these savings opportunities.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Depending on the retailer, you may find a gaming discount code, promotional offer, bundle deal, free-shipping promotion, or sale on selected products.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Whether you play on PC, PlayStation, Xbox, Nintendo Switch, or another platform, it makes sense to check available offers before completing your purchase.
          </p>
        </div>

        {/* What Gaming Products Can You Save On? */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">What Gaming Products Can You Save On?</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">
            Gaming is a huge category, covering much more than video games. You may find deals on:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Video games", desc: "Digital and physical releases across all major platforms." },
              { title: "Gaming consoles", desc: "Savings on PlayStation, Xbox, and Nintendo systems." },
              { title: "Gaming PCs", desc: "Pre-built rigs, custom setups, and desktop deals." },
              { title: "Computer components", desc: "GPUs, CPUs, RAM, power supplies, and storage drives." },
              { title: "Gaming laptops", desc: "Portable powerhouses for gaming on the go." },
              { title: "Controllers", desc: "Pro controllers, standard gamepads, and custom pads." },
              { title: "Gaming keyboards", desc: "Mechanical, RGB, and low-latency gaming keyboards." },
              { title: "Gaming mice", desc: "Ultra-lightweight, high-DPI, and wireless gaming mice." },
              { title: "Headsets", desc: "Immersive surround-sound headsets and audiophile gear." },
              { title: "Microphones", desc: "Broadcast-quality USB and XLR mics for communication." },
              { title: "Gaming monitors", desc: "High-refresh-rate, 4K, and curved gaming displays." },
              { title: "Gaming chairs", desc: "Ergonomic seating and racing-style gaming chairs." },
              { title: "Streaming equipment", desc: "Capture cards, webcams, ring lights, and stream decks." },
              { title: "Gaming accessories", desc: "Desk pads, cable management, stands, and charging docks." },
              { title: "Digital subscriptions", desc: "Deals on Game Pass, PlayStation Plus, and online passes." },
              { title: "Collectibles", desc: "Statues, action figures, and pop culture memorabilia." },
              { title: "Merchandise", desc: "Apparel, posters, and official gaming brand gear." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#056bfa]/30 transition-all duration-300 group flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#fff7ed] flex items-center justify-center shrink-0 group-hover:bg-[#EA580C] transition-colors duration-300">
                  <LayoutGrid className="w-5 h-5 text-[#EA580C] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            If you are putting together a complete gaming setup, savings across multiple purchases can make a noticeable difference.
          </p>
        </div>

        {/* Save on Games and Digital Entertainment */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Save on Games and Digital Entertainment</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            New game releases can be exciting, but buying every title at launch can quickly increase your entertainment spending.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Instead of paying immediately, check whether the retailer has an applicable video game promo code or current promotion.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Digital storefronts and gaming retailers often run seasonal events where selected games receive discounts. Holiday periods and major shopping events can also be useful times to look for offers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you are flexible about when you purchase a game, waiting for a promotion can sometimes provide better value.
          </p>
        </div>

        {/* Upgrade Your Gaming Setup */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Upgrade Your Gaming Setup</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A gaming experience depends on more than the game itself.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A better headset can improve communication. A responsive mouse can help competitive players. A quality monitor can enhance visuals, while a comfortable gaming chair can make long sessions more enjoyable.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            These upgrades can become expensive when purchased together.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Before buying gaming equipment, check CouponsBit for available promotions. A gaming accessories coupon code or storewide discount could help reduce your overall spending.
          </p>
        </div>

        {/* PC Gaming Savings */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">PC Gaming Savings</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            PC gaming gives players enormous flexibility, but building or upgrading a computer can require careful budgeting.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Components such as graphics cards, processors, storage drives, memory, monitors, and peripherals can represent significant purchases.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When shopping for hardware, look beyond a single discount. Compare retailers, check bundle offers, and search for a relevant PC gaming discount code before placing an order.
          </p>
          <p className="text-gray-600 font-semibold leading-relaxed">
            Also pay attention to compatibility and specifications. A discount is only useful when the product actually fits your setup.
          </p>
        </div>

        {/* Console Gaming Deals */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Console Gaming Deals</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Console gamers also have plenty of opportunities to save.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you are shopping for a console, controller, headset, physical game, digital gift card, or accessory, retailers frequently run promotions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Major U.S. shopping events such as Black Friday, Cyber Monday, holiday sales, and back-to-school promotions can be particularly useful for gaming shoppers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            CouponsBit can help you identify available offers so you can compare your options before buying.
          </p>
        </div>

        {/* Gaming During the Holidays */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Gaming During the Holidays</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Gaming promotions often become especially popular during the holiday shopping season.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Black Friday and Cyber Monday are major opportunities for gamers to look for deals on hardware, games, accessories, and entertainment products.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Christmas and other holiday periods can also bring bundles and gift-focused promotions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you are shopping for another gamer, checking for a gaming coupon code before purchasing can help you stay within your gift budget.
          </p>
        </div>

        {/* How to Use a Gaming Promo Code */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Use a Gaming Promo Code</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Using a gaming promo code is generally straightforward.</p>

          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Step 1: Choose Retailer & Offer", desc: "Choose the retailer and offer you want to use." },
              { step: "2", title: "Step 2: Copy Code & Visit Site", desc: "If a code is provided, copy it and visit the retailer's website." },
              { step: "3", title: "Step 3: Add to Cart", desc: "Add the eligible product to your cart and proceed to checkout." },
              { step: "4", title: "Step 4: Enter Promo Code", desc: "Enter the code in the promotional or discount-code field and apply it." },
              { step: "5", title: "Step 5: Confirm Your Savings", desc: "Confirm that the offer has been reflected in your total before completing the order." },
            ].map((item, i, arr) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#056bfa] text-white flex items-center justify-center font-black text-sm shadow-md">
                    {item.step}
                  </div>
                  {i < arr.length - 1 && <div className="w-0.5 h-8 bg-[#056bfa]/20 my-1" />}
                </div>
                <div className="pb-7">
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs leading-relaxed">
            Always read the terms because some codes may apply only to specific products, categories, or customer accounts.
          </p>
        </div>

        {/* Game More, Spend Smarter */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Game More, Spend Smarter</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Saving money does not mean compromising on your gaming experience.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            It simply means being strategic about where and when you shop.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before buying a new title, upgrading your setup, or purchasing accessories, check CouponsBit for a relevant coupon code, promo code, discount offer, or gaming deal.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The few seconds it takes to check could help you keep more money in your entertainment budget.
          </p>
        </div>

        {/* Find Gaming Deals on CouponsBit */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Find Gaming Deals on CouponsBit</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you are a competitive PC player, console gamer, casual player, streamer, or someone shopping for a gamer in your life, CouponsBit can help you discover ways to save.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Explore gaming offers, compare available promotions, and look for a gaming discount code before checking out.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Because your gaming setup should be built around what you enjoy—not what you accidentally overspend on.
          </p>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* Seasonal & Holiday Gaming Deals */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Seasonal & Holiday Deals</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Gaming retailers and digital storefronts feature massive price drops during key shopping seasons.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "Black Friday & Cyber Monday", desc: "Huge savings on consoles, PC hardware, flagship titles, and gear." },
              { title: "Holiday Sales Events", desc: "Game bundles, digital gift cards, and gift-focused gaming discounts." },
              { title: "Summer & Publisher Sales", desc: "Seasonal digital store events featuring massive library discounts." },
              { title: "Back-to-School", desc: "Promotions on gaming laptops, desktop monitors, and desk setup accessories." }
            ].map((event, i) => (
              <div key={i} className="border-t border-gray-50 pt-2 first:border-0 first:pt-0">
                <span className="text-[#056bfa] font-bold text-xs block mb-0.5">{event.title}</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Gaming Shopping Tips */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Smart Gamer Shopping Tips</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Level up your savings with these straightforward habits.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Check Coupons Before Launch Day",
              "Verify PC Component Compatibility",
              "Look for Bundle Discounts",
              "Compare Digital vs. Physical Prices",
              "Watch for Free Shipping Thresholds",
              "Check CouponsBit Before Checkout"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#056bfa] shrink-0" />
                <span className="text-gray-600 text-xs font-semibold">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Check CouponsBit CTA Card */}
        <div className="bg-gradient-to-br from-[#056bfa] to-[#0451c4] rounded-2xl p-6 text-white">
          <h3 className="font-black text-lg mb-2">Why Check CouponsBit Before Checkout?</h3>
          <p className="text-white font-bold text-xs mb-4">
            Checking for a gaming deal takes just a few seconds and can stretch your entertainment budget.
          </p>
          <div className="flex flex-col gap-2.5 mb-5 text-white/90 text-xs">
            <p><strong>Hardware Savings:</strong> Get valid codes for PCs, laptops, components, and consoles.</p>
            <p><strong>Peripherals & Gear:</strong> Save on high-performance mice, keyboards, headsets, and chairs.</p>
            <p><strong>Video Games:</strong> Discover promotions on physical discs, digital downloads, and passes.</p>
            <p><strong>Verified Offers:</strong> Access regularly updated promotions for trusted gaming retailers.</p>
          </div>
          <p className="text-white/80 text-[11px] leading-relaxed mb-4">
            <strong>Build Your Dream Setup:</strong> High-end gear doesn't have to strain your wallet. Check CouponsBit before every purchase to play more and spend less.
          </p>
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#056bfa] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Find Gaming Deals Now →
            </button>
          </Link>
        </div>

      </aside>

    </div>
  </div>
</section>

      <Footer />

      <div className={cn("fixed top-6 right-6 z-[60] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-4 flex items-center gap-4 transition-all duration-300 transform", showToast ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0 pointer-events-none")}>
        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-[#22c55e]"><CheckCircle className="w-5 h-5" /></div>
        <div>
          <p className="text-black font-black text-sm">Code Copied!</p>
          <p className="text-[#056bfa] font-mono font-bold text-xs mt-0.5">{toastCode}</p>
        </div>
      </div>
    </div>
  );
}
