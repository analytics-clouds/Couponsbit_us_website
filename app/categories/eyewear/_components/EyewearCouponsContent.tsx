"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  Glasses, Code,
  LayoutGrid,
  Tag,
  ShoppingBag,
  Calendar,
  ChevronDown,
  ArrowRight, BadgeCheck,
  HeartPulse, Home, UtensilsCrossed, Gamepad2, Baby, Car, BedDouble, Shirt
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
  { id: "rayneo-discount-code", name: "Rayneo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/reyneo-coupon-code_q3crak.webp", coupons: 8, discount: "Save $130 OFF" },
  { id: "fytoo-discount-code", name: "Fytoo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp", coupons: 7, discount: "Frames From $1" },
  { id: "vooglam-discount-code", name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/vooglam-logo_qe8mis.webp", coupons: 9, discount: "Eyeglasses From $65" },
  { id: "sungait-discount-code", name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/sungait-logo_tfolql.webp", coupons: 14, discount: "Up To 50% OFF" }
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
  { icon: Gamepad2, name: "Gaming & Digital Goods", count: "70+", color: "text-[#056bfa]", href: "/categories/gaming" },
  { icon: Baby, name: "Baby & Maternity", count: "50+", color: "text-[#056bfa]", href: "/categories/baby" },
  { icon: Car, name: "Automotive", count: "60+", color: "text-[#056bfa]", href: "/categories/automotive" },
  { icon: BedDouble, name: "Hotels & Accommodation", count: "40+", color: "text-[#056bfa]", href: "/categories/hotels" },
  { icon: Glasses, name: "Eyewear", count: "30+", color: "text-[#056bfa]", href: "/categories/eyewear", active: true },
  { icon: Shirt, name: "Fashion", count: "200+", color: "text-[#056bfa]", href: "/categories/fashion" },
];

export default function EyewearCouponsContent() {
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
          <span className="text-gray-700 font-medium">Eyewear</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-xl md:text-3xl">Eyewear Coupons & Deals</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on glasses, sunglasses, contact lenses and eyewear accessories with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: Glasses, val: "38", label: "Coupons" },
                        { icon: Store, val: "4", label: "Top Stores" },
                        { icon: Users, val: "New", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#0EA5E9]" />
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
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788780441/lens_pz1by4.png"
                      alt="Eyewear Coupons"
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
                  <h2 className="text-black font-extrabold text-xl">Stores in Eyewear</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} stores</p>
                </div>
                {STORES.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-14 px-6 border border-dashed border-gray-200 rounded-2xl">
                    <div className="w-14 h-14 rounded-full bg-[#f0f9ff] flex items-center justify-center mb-4">
                      <Glasses className="w-6 h-6 text-[#0EA5E9]" />
                    </div>
                    <h3 className="text-black font-extrabold text-base mb-1">No stores yet in Eyewear</h3>
                    <p className="text-gray-500 text-sm max-w-sm">We're adding new eyewear stores regularly — check back soon for verified coupon codes.</p>
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
                      { icon: Star, title: "Best Eyewear Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every order" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "Growing community of happy shoppers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#f0f9ff] rounded-full flex items-center justify-center text-[#0EA5E9]"><badge.icon className="w-4 h-4" /></div>
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
            Eyewear Coupons, Promo Codes & Discount Codes
          </h2>
          <p className="text-lg font-bold text-[#056bfa] mb-5">
            A great pair of glasses can change your look, improve everyday comfort, and help you see clearly.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            And with more eyewear brands selling online, shoppers now have access to prescription glasses, sunglasses, blue-light glasses, contacts, frames, and accessories without always needing to visit a traditional store.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            But eyewear can still become an expensive purchase, especially when you are buying prescription frames or shopping for multiple pairs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Eyewear category on CouponsBit helps shoppers across the USA discover coupon codes, promo codes, discount offers, and eyewear deals from online retailers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Before ordering your next pair of glasses or sunglasses, take a moment to check whether a glasses coupon code or promotional offer is available.
          </p>
        </div>

        {/* Find Eyewear Coupon Codes */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Find Eyewear Coupon Codes</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Online eyewear stores frequently run promotions to attract new customers, promote new collections, clear seasonal inventory, or celebrate major shopping events.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            You may find offers on frames, prescription glasses, sunglasses, contact lenses, accessories, or complete eyewear packages.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            CouponsBit brings these opportunities together so you can explore available savings before purchasing.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Depending on the retailer, an offer may appear as a discount code, coupon code, promo code, voucher, sale, or automatic promotion.
          </p>
        </div>

        {/* Shop for Glasses and Sunglasses */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Shop for Glasses and Sunglasses</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">
            Eyewear is both functional and fashionable. Prescription glasses help with everyday vision needs, while sunglasses offer UV protection and complement personal style. Blue-light and specialty frames serve digital lifestyle needs. You may find promotions on:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Prescription glasses", desc: "Single vision, progressive, and bifocal lenses with stylish frames." },
              { title: "Sunglasses", desc: "Polarized, non-polarized, and UV-protected designer sunwear." },
              { title: "Designer frames", desc: "High-end luxury brand frames and premium designer collections." },
              { title: "Everyday frames", desc: "Affordable, durable frames built for everyday wear and comfort." },
              { title: "Blue-light glasses", desc: "Protective lenses designed to reduce screen eye strain." },
              { title: "Reading glasses", desc: "Non-prescription and magnified specs for close-up tasks." },
              { title: "Contact lenses", desc: "Daily, bi-weekly, and monthly disposable contact lenses." },
              { title: "Eyewear accessories", desc: "Chains, cords, adjustments tools, and travel cases." },
              { title: "Cases", desc: "Hard protective shells and soft microfiber pouch sleeves." },
              { title: "Cleaning products", desc: "Lens cleaning sprays, anti-fog wipes, and cloths." },
              { title: "Kids' eyewear", desc: "Flexible, impact-resistant frames crafted for children." },
              { title: "Replacement lenses", desc: "Custom lens replacement for existing frame favorites." },
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
            Before buying, check for an applicable eyewear discount code.
          </p>
        </div>

        {/* Save on Prescription Glasses */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Save on Prescription Glasses</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Prescription eyewear can involve several costs, including frames, lenses, coatings, and other options.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Online eyewear retailers sometimes offer promotions on complete prescription glasses or specific lens options.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you already have your prescription information and know what you want, comparing available promotions can help you find better value.
          </p>
          <p className="text-gray-600 font-semibold leading-relaxed">
            Look for a prescription glasses promo code or retailer offer that applies to your order. Be sure to understand what the promotion includes and whether upgraded lens options are excluded.
          </p>
        </div>

        {/* Sunglasses for Every Season */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Sunglasses for Every Season</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sunglasses are not just a summer purchase. They can be useful throughout the year, especially during bright outdoor conditions. That makes sunglasses a practical and style-focused purchase for many shoppers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Eyewear retailers may introduce promotions around spring, summer, holidays, and major shopping events.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you are planning to buy a new pair, check CouponsBit before placing your order. You may find a sunglasses coupon code that can reduce your purchase cost.
          </p>
        </div>

        {/* Eyewear Deals for Families */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Eyewear Deals for Families</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Families may need to purchase multiple pairs of glasses, particularly when children need new frames or prescriptions change. Some retailers offer promotions that can make multiple purchases more affordable.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Instead of assuming you need to pay the listed price, check for available store promotions and coupon codes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When using an offer, confirm whether it applies to multiple products or only one eligible item.
          </p>
        </div>

        {/* Online Eyewear Shopping Made Easier */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Online Eyewear Shopping Made Easier</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Shopping for eyewear online can provide access to a wide selection of frame shapes, materials, colors, and styles. You can compare different retailers from the comfort of home and take your time deciding what fits your needs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            CouponsBit adds another step to that process: checking for savings before checkout.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A simple search for an eyewear coupon code or discount code can help you discover promotions that you may otherwise miss.
          </p>
        </div>

        {/* Seasonal Eyewear Promotions */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Seasonal Eyewear Promotions</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Eyewear promotions can change throughout the year. Spring and summer often bring sunglasses campaigns, while back-to-school periods can be useful for families shopping for children's glasses.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Black Friday, Cyber Monday, holiday shopping, and year-end promotions can also create opportunities for eyewear savings.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you do not need your purchase immediately, watching for seasonal promotions can sometimes be worthwhile.
          </p>
        </div>

        {/* How to Use an Eyewear Coupon Code */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Use an Eyewear Coupon Code</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Using an eyewear code is quick and simple.</p>

          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Step 1: Choose Your Offer", desc: "Start by selecting an eyewear retailer and offer on CouponsBit." },
              { step: "2", title: "Step 2: Copy the Promo Code", desc: "If the offer includes a coupon code, copy the code and visit the retailer's website." },
              { step: "3", title: "Step 3: Select Frames & Add Lenses", desc: "Choose your frames, lenses, sunglasses, or eligible products and add them to your cart." },
              { step: "4", title: "Step 4: Apply Code at Checkout", desc: "At checkout, look for the coupon or discount code field. Enter the code and apply it." },
              { step: "5", title: "Step 5: Verify Discount & Complete", desc: "Check that the discount appears in your order total before completing the purchase." },
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
            Remember that some promotions may exclude prescription upgrades, designer brands, sale products, or specific collections.
          </p>
        </div>

        {/* Shop Smart for Your Next Pair */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Shop Smart for Your Next Pair</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Eyewear is something you may use every day, so choosing the right product matters more than simply finding the biggest discount.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Compare styles, product specifications, lens options, retailer policies, and available promotions before buying.
          </p>
          <p className="text-gray-600 leading-relaxed">
            CouponsBit can help you with the savings part by making it easier to discover coupon codes, promo codes, discount offers, and eyewear deals.
          </p>
        </div>

        {/* Find Eyewear Deals on CouponsBit */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Find Eyewear Deals on CouponsBit</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you are replacing an old pair of glasses, shopping for sunglasses, updating your everyday look, or buying eyewear for your family, CouponsBit can help you explore ways to save.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Check the Eyewear category before you buy and look for an applicable eyewear discount code or coupon.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Clearer vision and a great-looking pair of frames do not have to mean ignoring your budget.
          </p>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* Seasonal Eyewear Deals */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Seasonal Eyewear Deals</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Keep an eye out for these annual sales windows across popular eyewear platforms.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "Spring & Summer Shades", desc: "Sunglasses campaigns and major designer frame price drops." },
              { title: "Back-to-School Season", desc: "Promotions on kids' frames and blue-light screen glasses." },
              { title: "Black Friday & Cyber Week", desc: "Deep discounts on complete prescription lens and frame packages." },
              { title: "Year-End HSA/FSA Spend", desc: "Maximize remaining vision healthcare balance before rules reset." }
            ].map((event, i) => (
              <div key={i} className="border-t border-gray-50 pt-2 first:border-0 first:pt-0">
                <span className="text-[#056bfa] font-bold text-xs block mb-0.5">{event.title}</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Eyewear Shopping Tips */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Smart Eyewear Tips</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Get top quality specs and lenses for less with these helpful habits.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Check HSA/FSA Eligibility at Checkout",
              "Look for Free First-Pair or BOGO Deals",
              "Verify Lens Anti-Glare Coating Exclusions",
              "Measure Frame Size Dimensions First",
              "Compare Contact Lens Subscription Bundles",
              "Watch for New Customer Sign-Up Codes"
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
          <h3 className="font-black text-lg mb-2">Why Check CouponsBit Before Buying?</h3>
          <p className="text-white font-bold text-xs mb-4">
            Custom lenses and brand-name frames can be pricey. Checking for codes keeps costs low.
          </p>
          <div className="flex flex-col gap-2.5 mb-5 text-white/90 text-xs">
            <p><strong>Complete Package Savings:</strong> Get discounts applied across both frames and lenses.</p>
            <p><strong>Prescription Add-Ons:</strong> Save on progressive upgrades, thin lenses, and coatings.</p>
            <p><strong>Multi-Pair Offers:</strong> Discount additional backup pairs or everyday sunglasses.</p>
            <p><strong>Verified Stores:</strong> Instant access to active promo codes from top USA eyewear stores.</p>
          </div>
          <p className="text-white/80 text-[11px] leading-relaxed mb-4">
            <strong>See Clearly for Less:</strong> Looking good and seeing comfortably shouldn't break your budget. Explore available codes on CouponsBit before checking out.
          </p>
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#056bfa] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Shop Eyewear Deals Now →
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
