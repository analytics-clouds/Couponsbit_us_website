"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  Shirt, Code,
  LayoutGrid,Tag,
  BadgeCheck,
  HeartPulse, Home, UtensilsCrossed, Gamepad2, Baby, Car, BedDouble, Glasses,
  Gift,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const STORES = [
  { id: "1800-flowers-promo-code", name: "1800 Flowers", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/1800_flower_logo_uqwufx.webp", coupons: 10, discount: "Up To 25% OFF" },
  { id: "edible-arrangements-coupon-code", name: "Edible Arrangements", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793338496/edible_arrangements_logo_hcpsvl.webp", coupons: 9, discount: "Up To 20% OFF" },
  { id: "shutterfly-promo-code", name: "Shutterfly", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788783181/shutterfly-logo_wvvske.webp", coupons: 12, discount: "Up To 40% OFF" },
  { id: "snapfish-coupon-codes", name: "Snapfish", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793338496/snapfist-logo_vvb7cq.webp", coupons: 8, discount: "Up To 50% OFF" },
  { id: "mixtiles-promo-code", name: "Mixtiles", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793338496/mixtiles-logo_xrh8pf.webp", coupons: 7, discount: "Up To 30% OFF" },
  { id: "etsy-coupon-code", name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp", coupons: 8, discount: "Flat 75% OFF" },
  { id: "carters-promo-code", name: "Carter's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793338496/carters-logo_fcvfdh.webp", coupons: 10, discount: "Up To 50% OFF" },
  { id: "amazon-discount-code", name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", coupons: 5, discount: "Up To 52% OFF" },
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
  { icon: Glasses, name: "Eyewear", count: "30+", color: "text-[#056bfa]", href: "/categories/eyewear" },
  { icon: Shirt, name: "Fashion", count: "200+", color: "text-[#056bfa]", href: "/categories/fashion" },
  { icon: Gift, name: "Gifts", count: "80+", color: "text-[#056bfa]", href: "/categories/gift", active: true },
];

export default function GiftCouponsContent() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      <div className="bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-4 max-w-7xl py-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/categories" className="text-[#056bfa] hover:underline">Categories</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-700 font-medium">Gifts</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-xl md:text-3xl">Gift Coupons &amp; Promo Codes</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on flowers, personalized gifts, photo books, and special occasion presents with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: Gift, val: "80+", label: "Coupons" },
                        { icon: Store, val: "8+", label: "Top Stores" },
                        { icon: Users, val: "New", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#E11D48]" />
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
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1793604459/gift-category_chorbz.webp"
                      alt="Gift Coupons & Promo Codes"
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
                  <h2 className="text-black font-extrabold text-xl">Stores in Gifts</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} stores</p>
                </div>
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
              </div>

            </div>

            <aside className="lg:w-[28%] space-y-4">
              <div className="sticky top-20 space-y-4">
                <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                  <h3 className="text-black font-extrabold text-base mb-5">All Categories</h3>
                  <div className="space-y-1">
                    {SIDEBAR_CATEGORIES.map((cat, i) => (
                      <Link key={i} href={cat.href} className={cn("flex items-center justify-between p-2.5 px-3 rounded-xl cursor-pointer transition-all hover:bg-[#f5f5f5]", cat.active && "bg-[#e8f6f8]")}>
                        <div className="flex items-center gap-2.5">
                          <cat.icon className={cn("w-4 h-4", cat.color)} />
                          <span className={cn("text-sm font-medium", cat.active ? "text-[#056bfa] font-bold" : "text-gray-700")}>{cat.name}</span>
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
                    rel="nofollow noopener noreferrer"
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
                      { icon: Star, title: "Best Gift Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every order" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "Growing community of happy shoppers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#fff1f2] rounded-full flex items-center justify-center text-[#E11D48]"><badge.icon className="w-4 h-4" /></div>
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

          {/* Main Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-14">

            {/* Hero Header */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight mb-3">
                Gifts for Every Occasion: Find Something Special
              </h2>
              <p className="text-lg font-bold text-[#056bfa] mb-5">
                Finding the right gift should feel exciting, not stressful. Whether you're celebrating a birthday, anniversary, holiday, wedding, or simply surprising someone you love, the perfect gift can make the moment more memorable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At CouponsBit, discover gift ideas for every personality, occasion, and budget. From fashion and beauty products to gadgets, home essentials, accessories, and personalised presents, explore options that make every celebration special. You can also find the latest coupon codes, promo codes, and exclusive deals to make your gift shopping more rewarding.
              </p>
            </div>

            {/* Explore Gifts for Everyone Grid */}
            <div className="bg-[#f9fafb] rounded-2xl p-8">
              <h2 className="text-2xl font-black text-black mb-2">Explore Gifts for Everyone</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Not sure what to buy? Start by exploring gifts based on who you're shopping for.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                {[
                  { title: "Gifts for Her", desc: "Surprise her with beauty products, jewellery, fashion accessories, handbags, skincare, and thoughtful personalised presents." },
                  { title: "Gifts for Him", desc: "Explore watches, grooming essentials, tech gadgets, wallets, clothing, and accessories." },
                  { title: "Gifts for Kids", desc: "Make their day special with toys, games, books, creative kits, and fun accessories." },
                  { title: "Gifts for Family and Friends", desc: "Choose something meaningful, from home décor and lifestyle products to personalised keepsakes." },
                  { title: "Gifts for Couples", desc: "Celebrate togetherness with matching accessories, experience gifts, personalised items, and thoughtful surprises." },
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
            </div>

            {/* Gift Ideas for Every Occasion List */}
            <div>
              <h2 className="text-2xl font-black text-black mb-2">Gift Ideas for Every Occasion</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every celebration deserves a thoughtful gesture. Explore gift options for different occasions and make your shopping easier.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Birthday Gifts", desc: "Find something exciting for friends, family, partners, and loved ones." },
                  { title: "Anniversary Gifts", desc: "Celebrate special milestones with jewellery, personalised gifts, accessories, and memorable surprises." },
                  { title: "Wedding Gifts", desc: "Choose elegant home essentials, décor, kitchen appliances, and thoughtful presents for newlyweds." },
                  { title: "Christmas Gifts", desc: "Spread festive cheer with fashion, beauty, toys, electronics, and holiday surprises." },
                  { title: "Valentine's Day Gifts", desc: "Make your loved ones feel special with romantic gifts, accessories, fragrances, and personalised presents." },
                  { title: "Mother's Day and Father's Day Gifts", desc: "Show appreciation with thoughtful gifts that match their interests and personalities." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-[#f9fafb] rounded-xl p-5 border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#056bfa] text-white font-black text-sm flex items-center justify-center shrink-0">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </div>
                    <div>
                      <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shop Gifts Across Popular Categories */}
            <div>
              <h2 className="text-2xl font-black text-black mb-2">Shop Gifts Across Popular Categories</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sometimes, the best gift is something the recipient has always wanted. Explore different shopping categories to find the right match.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Fashion and Accessories", desc: "Clothing, footwear, handbags, watches, and jewellery." },
                  { title: "Beauty and Personal Care", desc: "Skincare, makeup, fragrances, grooming products, and self-care essentials." },
                  { title: "Electronics and Gadgets", desc: "Smartphones, headphones, smartwatches, speakers, and other useful tech products." },
                  { title: "Home and Kitchen", desc: "Home décor, kitchen appliances, furniture, and everyday essentials." },
                  { title: "Personalised Gifts", desc: "Customised accessories, photo gifts, keepsakes, and memorable presents." },
                ].map((item, i) => (
                  <div key={i} className="bg-[#f9fafb] border border-gray-100 rounded-xl p-5 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#e8f6f8] flex items-center justify-center shrink-0">
                      <Tag className="w-5 h-5 text-[#056bfa]" />
                    </div>
                    <div>
                      <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Save More Section */}
            <div>
              <h2 className="text-2xl font-black text-black mb-4">Save More on Gifts with CouponsBit</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Gift shopping becomes even better when you find the right deal. Before placing your order, explore CouponsBit for the latest coupon codes, discount codes, promo codes, and brand offers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you're shopping for a birthday, anniversary, wedding, festive celebration, or a surprise gift, CouponsBit helps you discover savings across popular brands and shopping categories. Check available offers, apply eligible promo codes at checkout, and make your gift purchases more budget-friendly.
              </p>
              <p className="text-gray-600 font-bold leading-relaxed">
                Find the perfect gift, celebrate every occasion, and enjoy more savings with CouponsBit!
              </p>
            </div>

          </div>

          {/* Sidebar (3 Cols) */}
          <div className="lg:col-span-3 space-y-6 sticky top-20">
            {/* Quick List */}
            <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-6">
              <h3 className="text-black font-extrabold text-base mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5 text-[#056bfa]" /> Popular Gift Recipients
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Gifts for Her",
                  "Gifts for Him",
                  "Gifts for Kids",
                  "Gifts for Family & Friends",
                  "Gifts for Couples"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-[#056bfa] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action Card */}
            <div className="bg-gradient-to-br from-[#056bfa] to-[#0451c4] rounded-2xl p-6 text-white">
              <h3 className="font-extrabold text-base mb-2">Find Gift Deals Now</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Explore verified gift coupon codes and promo codes from top gift stores — all in one place.
              </p>
              <Link href="/stores" className="inline-block bg-white text-[#056bfa] font-black text-xs px-5 py-2.5 rounded-xl hover:bg-[#e8f6f8] transition-colors">
                Browse All Stores &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
}
