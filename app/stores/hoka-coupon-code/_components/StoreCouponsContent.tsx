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
  HeartHandshake,
  ShieldAlert,
  Calendar,
  Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Gift,
  Truck,
  Footprints,
  Mountain,
  Shirt,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Nike", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp", dealText: "Up To 60% OFF", href: "/stores/nike-discount-code" },
  { name: "Adidas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788783181/adidas-logo_brulmo.webp", dealText: "Up To 50% OFF", href: "/stores/adidas-promo-code" },
  { name: "Halara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789535819/halara_coupon_code_ujuwnv.webp", dealText: "Up To 80% OFF", href: "/stores/halara-coupon-code" },
  { name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", dealText: "Up To 50% OFF", href: "/stores/old-navy-promo-code" },
  { name: "Abercrombie", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp", dealText: "Up To 50% OFF", href: "/stores/abercrombie-discount-code" },
  { name: "LL Bean", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/llbean_logo_xsbw4x.webp", dealText: "Up To 60% OFF", href: "/stores/llbean-promo-code" },
];

const STORE_URL = "https://www.hoka.com";

export default function HokaCouponsContent() {
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
              <span className="text-black font-extrabold">HOKA</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789994531/hoka-logo_zrq4ot.webp" alt="HOKA" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">HOKA Coupon Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(8.9k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified HOKA coupon codes and coupon offers for Sep 2026. Save on running shoes, trail shoes, and everyday footwear.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "90+", label: "Deals" },
                    { icon: Users, val: "1.5M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789994531/hoka-logo_zrq4ot.webp" alt="HOKA Coupon Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">HOKA Coupon Codes & Offers</h2>
                </div>

                {[
                  { label: "NEW", value: "NEW", title: "HOKA – New Customer Offer", desc: "New customers can save on their first HOKA order.", bullets: ["Sign up as a new HOKA customer to unlock this offer.", "Discount applies to your first qualifying order.", "Terms and eligible items may vary."] },
                  { label: "DEAL", value: "RUNNING", title: "HOKA – Running Shoe Deal", desc: "Save on select HOKA running shoe styles.", bullets: ["Discount applies to select road running shoe models.", "Choose from a range of cushioning levels and colors.", "Availability may vary by style and size."] },
                  { label: "SALE", value: "SITEWIDE", title: "HOKA – Percentage Off Sitewide", desc: "Save a percentage on qualifying sitewide orders.", bullets: ["Discount applies to qualifying sitewide purchases.", "Some exclusions may apply.", "Terms and conditions may vary."] },
                  { label: "DEAL", value: "FREE SHIP", title: "HOKA – Free Shipping Offer", desc: "Enjoy free shipping on select qualifying orders.", bullets: ["Discount applies to select qualifying orders.", "Minimum order value may apply.", "Terms may vary by promotion."] },
                  { label: "DEAL", value: "TRAIL", title: "HOKA – Trail & Hiking Picks", desc: "Save on select trail running and hiking footwear.", bullets: ["Discount applies to select trail and hiking styles.", "Designed for off-road grip and support.", "Availability may vary by collection."] },
                  { label: "SALE", value: "CLEARANCE", title: "HOKA – Seasonal Clearance Sale", desc: "Save on select seasonal clearance footwear and apparel.", bullets: ["Discount applies to select clearance items.", "Stock and sizes are limited and vary.", "Great for finding running gear at a lower price."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[10px] sm:tracking-[5px] text-[8px] sm:text-[15px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[15px] sm:text-4xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop HOKA: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is HOKA?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    HOKA is a performance footwear and apparel brand known for its highly cushioned running shoes and distinctive sole designs. HOKA was founded in France in 2009 by Nicolas Mermoud and Jean-Luc Diard, originally with the goal of creating footwear that could help runners move downhill faster.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand has since expanded beyond trail running into road running, walking, fitness, recovery, outdoor activities, and lifestyle footwear. HOKA says its goal is to inspire people to move and create products for athletes of different abilities and activities.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    HOKA's footwear is particularly recognizable for its substantial cushioning and engineered midsoles. Technologies such as MetaRocker™, Active Foot Frame™, and various stability and cushioning systems are used across different models to create different riding experiences.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Today, shoppers can find HOKA running shoes for everyday training, racing, trail running, walking, recovery, and other forms of movement. The brand also offers apparel and accessories, giving customers the option to build more of their active wardrobe in one place.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Footprints, name: "Running Shoes", count: "30+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Mountain, name: "Trail & Hiking", count: "15+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Shirt, name: "Apparel & Gear", count: "12+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: Truck, name: "Free Shipping", count: "20+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Search, name: "New Arrivals", count: "8+", color: "text-orange-500", href: "/categories/fashion" },
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
  <h3 className="text-black font-black text-lg mb-8">
    How to Save More at HOKA
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      A discount code is only one part of shopping strategically for running gear.
    </p>
    <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
      <p>
        <strong className="text-black font-black block mb-1">Compare sale products.</strong>
        If a shoe is already included in a current promotion, compare its final price with what you'd pay after applying a code elsewhere.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Know what you need.</strong>
        Buying the wrong running shoe because it is discounted isn't really a saving. Start with your running style, terrain, distance, and fit requirements.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Shop by activity.</strong>
        HOKA separates products into categories such as running, trail running, walking, recovery, lifestyle, and other uses.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Replace worn-out shoes at the right time.</strong>
        If your current shoes are showing significant wear or no longer feel supportive, waiting indefinitely for a particular promotion may not be worth it.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Watch seasonal promotions.</strong>
        Spring running, summer outdoor activities, fall race season, holiday shopping, Black Friday, and Cyber Monday can all be useful times to check for offers.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check CouponsBit before checkout.</strong>
        Search for a current HOKA discount code, coupon, or promotional offer before completing your order.
      </p>
    </div>
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

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          HOKA Discount Code, Promo Code & Discount Offers
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            A good pair of running shoes can change the way a workout feels. Whether you're training for your first 5K, logging miles every morning, heading out for a trail run, or simply looking for a comfortable pair of shoes for walking, HOKA has built its reputation around cushioned, performance-focused footwear.
          </p>
          <p>
            But quality running shoes can be a significant purchase, especially when you're buying more than one pair or upgrading your gear for a new training season. That's why checking for a HOKA discount code before placing your order can be a smart part of the shopping process.
          </p>
          <p>
            CouponsBit helps you discover available HOKA promo codes, coupon codes, voucher codes, deals, and other offers so you can compare your options before checkout. Whether you're shopping for the latest road-running shoe or looking for everyday comfort, checking for an available offer takes only a moment.
          </p>

          <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Find a HOKA Discount Code
        </h3>
        <p>
          If you're already planning to buy HOKA shoes, don't head straight to checkout.
        </p>
        <p>
          First, check CouponsBit for a current HOKA discount code. You may find a promotional code, coupon, seasonal offer, or another deal that could apply to your purchase.
        </p>
        <p>
          The important thing is to check the terms of each offer. A discount may apply only to selected products, certain collections, or qualifying orders. Some promotions can also have expiration dates or other restrictions.
        </p>
        <p>
          It's also worth comparing a discount code with HOKA's own sale and promotional selections. If the shoe you're interested in is already included in a current offer, that may provide a different route to savings.
        </p>
        <p>
          Rather than searching for a code simply because you expect one to exist, compare the offers available for the exact shoes or products you're planning to purchase.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          HOKA Coupons, Deals &amp; Offers
        </h3>
        <p>
          HOKA promotions can take several forms throughout the year. The exact offers change, but shoppers may encounter:
        </p>
        <p>HOKA discount codes</p>
        <p>Promo codes</p>
        <p>Coupon offers</p>
        <p>Seasonal promotions</p>
        <p>Sale footwear</p>
        <p>Selected product discounts</p>
        <p>New-arrival promotions</p>
        <p>Member-related offers</p>
        <p>Apparel and accessory deals</p>
        <p>Limited-time shopping events</p>
        <p>
          Because HOKA products are often purchased for specific activities, it's useful to consider the purpose of the shoe before looking only at the discount.
        </p>
        <p>
          A lower-priced shoe isn't necessarily the right shoe for your training. Look at the intended use, cushioning, support, fit, terrain, and running style first. Then use available promotions to see how you can get better value on the model that actually suits your needs.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Shop HOKA Road Running Shoes
        </h3>
        <p>
          Road running is one of HOKA's core categories.
        </p>
        <p>
          The brand offers several models designed for everyday road running, speed-focused training, racing, and different levels of cushioning and support. Current HOKA collections include popular families such as Clifton, Bondi, Gaviota, Mach, Cielo, Rocket, and Skyflow, among others.
        </p>
        <p>
          <strong>HOKA Clifton:</strong> The Clifton family is designed as an everyday running option that balances cushioning with a relatively lightweight feel. HOKA's own road-running guide describes the Clifton as an everyday runner designed to provide a smooth ride without unnecessary bulk. That makes the Clifton range relevant for runners who want one versatile shoe for regular training rather than a model dedicated solely to race day.
        </p>
        <p>
          <strong>HOKA Bondi:</strong> The Bondi is associated with a more cushioned running experience. HOKA describes the Bondi as one of its most cushioned options, making it relevant for runners and walkers looking for a soft, comfortable ride. Because of its cushioning-focused design, Bondi models can also appeal to people who spend long periods on their feet.
        </p>
        <p>
          <strong>HOKA Gaviota:</strong> The Gaviota is another option for shoppers who want additional support. HOKA describes the Gaviota as offering a roomy fit and all-day support, including for longer distances. If you're comparing running shoes based on stability and support, the Gaviota family is worth exploring alongside HOKA's other stability-oriented models.
        </p>
        <p>
          <strong>HOKA Mach:</strong> The Mach family is aimed more toward runners interested in a responsive, faster-feeling shoe for training and performance. HOKA's current collections position Mach models within everyday running and training categories. If you're building a rotation with different shoes for easy runs and faster sessions, a Mach model may serve a different purpose from a highly cushioned everyday option.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          HOKA Trail Running Shoes
        </h3>
        <p>
          Road running isn't the only environment where HOKA footwear is designed to perform.
        </p>
        <p>
          Trail runners can explore models such as the Speedgoat, Challenger, Mafate, Tecton, and Torrent families, depending on their terrain and running preferences. HOKA's current product categories include dedicated trail-running collections.
        </p>
        <p>
          Trail shoes need to handle conditions that road shoes don't encounter regularly, including uneven surfaces, dirt, rocks, elevation changes, and variable weather.
        </p>
        <p>
          <strong>HOKA Speedgoat:</strong> The Speedgoat is one of HOKA's recognizable trail-running families. Current HOKA collections position Speedgoat models specifically within trail running. For trail runners, factors such as grip, protection, stability, and fit become particularly important. Compare those characteristics with the terrain where you'll actually be running rather than choosing solely based on appearance or discount.
        </p>
        <p>
          <strong>HOKA Challenger:</strong> The Challenger family sits in a versatile space for shoppers who want footwear that can work across different surfaces. HOKA lists Challenger among its running and trail-oriented styles. It can be worth considering for runners whose routes move between roads, paths, and lighter trails.
        </p>
        <p>
          <strong>HOKA Mafate:</strong> Mafate models are another part of HOKA's trail-focused lineup. Current HOKA collections include Mafate and Mafate Speed among the available styles. As with any trail shoe, consider your terrain, distance, and preferred level of cushioning and protection before deciding.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          HOKA Walking Shoes
        </h3>
        <p>
          You don't have to be a competitive runner to shop HOKA.
        </p>
        <p>
          The brand specifically caters to walking and everyday movement, making its shoes relevant for people who spend long periods on their feet, walk regularly, travel frequently, or simply prefer highly cushioned footwear.
        </p>
        <p>
          Models designed primarily for running can sometimes overlap with walking use, but shoppers should still consider what they need from the shoe. If you're buying for daily walks rather than running, comfort, fit, weight, and support may matter more than race-oriented performance features.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          HOKA Recovery Footwear
        </h3>
        <p>
          After a long run or demanding workout, your footwear needs can change.
        </p>
        <p>
          HOKA offers recovery-oriented products such as the ORA family, including recovery slides. Current HOKA collections categorize recovery footwear separately from running models.
        </p>
        <p>
          Recovery footwear can be useful around the house, after training, or when you want a different feel from your regular running shoes.
        </p>
        <p>
          If you're building a complete running setup, you might want to compare the cost of a recovery pair with your everyday running shoes and look for a HOKA coupon code before purchasing.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          HOKA Lifestyle &amp; Everyday Shoes
        </h3>
        <p>
          HOKA has also expanded into lifestyle-oriented footwear.
        </p>
        <p>
          Not every customer buying HOKA is training for a marathon. Some shoppers simply like the brand's distinctive silhouette and cushioned feel for everyday wear.
        </p>
        <p>
          Lifestyle options can work with casual clothing and everyday routines, while still reflecting the design language that made HOKA recognizable in the running world.
        </p>
        <p>
          This category can be especially interesting if you're looking for a pair that bridges active and casual wear.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          HOKA Apparel &amp; Accessories
        </h3>
        <p>
          HOKA's product range extends beyond shoes.
        </p>
        <p>
          The brand also offers apparel and accessories designed to complement its footwear and active lifestyle focus. Depending on the current collection, shoppers can explore items for running, training, outdoor activities, and everyday movement.
        </p>
        <p>
          If you're refreshing your entire running wardrobe, compare apparel and accessory promotions alongside footwear offers. A current HOKA promo code may have specific category restrictions, so check the terms before assuming it applies to everything in your cart.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          HOKA for Different Types of Runners
        </h3>
        <p>
          One of the biggest mistakes when buying running shoes is assuming there is one universally “best” model.
        </p>
        <p>
          A marathon runner, trail runner, casual walker, gym-goer, and new runner can all have very different requirements.
        </p>
        <p>
          If you're new to running, you may prioritize comfort and a versatile everyday shoe. A high-mileage runner may focus more closely on cushioning, durability, fit, and training goals. Trail runners need to think about terrain and grip, while walkers may prioritize all-day comfort.
        </p>
        <p>
          HOKA's range covers several of these use cases, which is why comparing the intended purpose of each model can be more useful than simply choosing whichever shoe has the biggest promotion.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Seasonal HOKA Shopping
        </h3>
        <p>
          Running and outdoor activities continue throughout the year, but different seasons can change what shoppers need.
        </p>
        <p>
          <strong>Spring Running:</strong> Spring is a popular time to refresh running gear as temperatures become more comfortable and outdoor training picks up. This can be a good time to evaluate your existing running shoes, especially if they've accumulated significant mileage. Look for lightweight apparel, everyday trainers, trail shoes, and accessories that fit your spring training plans.
        </p>
        <p>
          <strong>Summer Running:</strong> Hot-weather running can require lighter apparel and breathable footwear choices. Summer is also a popular season for races, travel, hiking, and outdoor activities, making it a useful time to compare road and trail-running options.
        </p>
        <p>
          <strong>Fall Running:</strong> Fall brings cooler temperatures and is often a popular racing season in many parts of the U.S. It can also be a good time to refresh running layers, socks, jackets, and shoes before colder weather arrives.
        </p>
        <p>
          <strong>Winter Training:</strong> Winter runners need to think about weather and terrain. Depending on where you live, that could mean rain, snow, cold temperatures, or slippery surfaces. Trail and weather-oriented footwear may become more relevant, while warm running layers can help make outdoor training more manageable.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          HOKA for Marathon &amp; Race Training
        </h3>
        <p>
          If you're training for a marathon, half marathon, 10K, or 5K, your shoe requirements may change as your mileage increases.
        </p>
        <p>
          Rather than buying a shoe solely because it's popular, consider how it fits into your training rotation.
        </p>
        <p>
          Some runners prefer one versatile daily trainer, while others use different shoes for easy mileage, speed sessions, long runs, and race day.
        </p>
        <p>
          HOKA offers models across these different performance categories, including everyday running, training, and racing-focused footwear. Current collections include styles such as Clifton, Bondi, Mach, Cielo, Rocket, and others.
        </p>
        <p>
          If you're preparing for a major race, give yourself enough time to test a new pair during training rather than buying unfamiliar shoes immediately before race day.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          How to Use a HOKA Discount Code
        </h3>
        <p>
          Found a HOKA discount code you want to use? Before applying it, check the offer's terms carefully.
        </p>
        <p>
          Look for information about expiration dates, eligible products, minimum purchase requirements, exclusions, and other conditions.
        </p>
        <p>
          Then visit HOKA and add the products you want to your shopping bag. Continue toward checkout and look for the promotional-code section if the offer requires a code.
        </p>
        <p>
          Enter the discount code exactly as provided and apply it. Before completing the purchase, review your order summary to confirm that the expected promotion has been reflected.
        </p>
        <p>
          If the code doesn't work, check whether your selected product qualifies. A code may be restricted to certain merchandise or may no longer be active.
        </p>
      </div>
    </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Check CouponsBit for HOKA Deals?</h3>
              <p>Running shoes aren't always an impulse purchase. You may have researched several models, compared cushioning and support, checked your size, and finally decided which pair fits your needs.</p>
              <p>Once you've done that work, checking for an available HOKA discount code is an easy final step.</p>
              <p>CouponsBit gives shoppers a convenient place to look for HOKA coupon codes, promo codes, voucher codes, deals, and other offers. You can then compare the available promotion with HOKA's current sale selection and decide which option fits your purchase.</p>
              <p>This approach is particularly useful when you're buying multiple pairs, shopping for running apparel, or preparing for a new training season.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Find Your HOKA Pair for Less</h3>
              <p>Whether you're running your first mile, training for a marathon, exploring a trail, walking around the city, or simply looking for a comfortable everyday shoe, HOKA has built a range around different types of movement.</p>
              <p>The key is to choose the shoe based on how you'll actually use it. Once you've found the right model, take one more step before checkout: check CouponsBit for a HOKA discount code and compare it with the brand's current offers.</p>
              <p>A little research can help you find the right footwear while making sure you haven't overlooked an available deal.</p>
            </div>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            HOKA Discount Code FAQs
          </h3>
          {[
            { q: "Does HOKA offer discount codes?", a: "HOKA runs promotional offers throughout the year, and some promotions may involve discount codes. Availability and eligibility can change, so check current offers before placing an order." },
            { q: "How can I find a HOKA discount code?", a: "You can check CouponsBit for available HOKA discount codes, coupons, and promotional offers. Compare any available code with current HOKA promotions before checkout." },
            { q: "Can I use a HOKA discount code on sale items?", a: "That depends on the specific promotion. Some offers may exclude sale merchandise or selected products. Always check the terms of the code before applying it." },
            { q: "What is HOKA known for?", a: "HOKA is known for highly cushioned running footwear and distinctive midsole designs. The brand now offers products for running, trail running, walking, recovery, fitness, outdoor activities, and lifestyle use." },
            { q: "Does HOKA make shoes for walking?", a: "Yes. HOKA offers footwear designed for walking as well as running and other activities. Its product categories include walking alongside running, trail running, recovery, and lifestyle footwear." },
            { q: "What is HOKA Bondi used for?", a: "The Bondi is a highly cushioned HOKA running shoe family. HOKA describes it as one of its most cushioned options and highlights it for comfortable long walks or runs." },
            { q: "What is HOKA Clifton used for?", a: "Clifton models are positioned as lightweight everyday running shoes designed to balance cushioning and a smooth ride." },
            { q: "Does HOKA make trail-running shoes?", a: "Yes. HOKA has a dedicated trail-running category with models including Speedgoat, Challenger, Mafate, Tecton, and Torrent." },
            { q: "Does HOKA sell apparel?", a: "Yes. HOKA's current collections include apparel alongside footwear and accessories." },
            { q: "When should I look for HOKA deals?", a: "You can check throughout the year, but seasonal changes, race seasons, major U.S. shopping events such as Black Friday and Cyber Monday, and holiday periods can be useful times to watch for promotions." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300", openFaq === i && "bg-[#056bfa]")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform duration-300", openFaq === i && "text-white rotate-180")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        {/* Tag Cloud */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular HOKA Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "HOKA Promo Code",
              "Clifton Series Deals",
              "Bondi Cushion Offers",
              "Speedgoat Trail Discounts",
              "Free Shipping Code",
              "First Order Offer",
              "Clearance Sales",
              "Apparel & Accessories"
            ].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top HOKA Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "DEAL OF THE WEEK", sub: "Up to 30% OFF Sale & Clearance Styles" },
              { heading: "WELCOME BONUS", sub: "10% OFF Your Order w/ Email Sign-Up" },
              { heading: "FREE SHIPPING", sub: "Free Standard Shipping & Easy Returns" },
              { heading: "TRAIL SPECIAL", sub: "Trail Running Gear Starting From $125" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                    {deal.heading}
                  </p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">
                    {deal.sub}
                  </p>
                </div>
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Shop HOKA: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90 flex-shrink-0"
                >
                  Get Deal
                </a>
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
