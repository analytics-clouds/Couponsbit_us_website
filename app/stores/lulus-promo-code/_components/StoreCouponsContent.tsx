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
  Shirt,
  Sparkles,
  ShoppingBag,
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
  { name: "Fashion Nova", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/fashion-nova_cm1al3.webp", dealText: "Up To 50% OFF", href: "/stores/fashion-nova-discount-code" },
  { name: "Shein", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp", dealText: "Up To 90% OFF", href: "/stores/shein-coupon-code" },
  { name: "Zara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp", dealText: "Up To 80% OFF", href: "/stores/zara-discount-code" },
  { name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", dealText: "Up To 77% OFF", href: "/stores/hm-promo-code" },
  { name: "Halara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789535819/halara_coupon_code_ujuwnv.webp", dealText: "Up To 80% OFF", href: "/stores/halara-coupon-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
];

const STORE_URL = "https://www.lulus.com";

export default function LulusCouponsContent() {
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
              <span className="text-black font-extrabold">Lulus</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789994531/lulus-logo_pl1byq.webp" alt="Lulus" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Lulus Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(9.6k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Explore the latest Lulus Discount Code offers and verified Lulus promo Code deals. Get Buy 2 Get 1 FREE with code BUY2GET1, save 80% on the Trendsetting Flirt Bustier Top for $5, or enjoy 50% OFF the Alaia Satin Midi Dress. Shop verified fashion deals and refresh your wardrobe for less.
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
                    { icon: Tag, val: "10", label: "Offers" },
                    { icon: Percent, val: "80+", label: "Deals" },
                    { icon: Users, val: "1M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790324559/55_ney1sg.webp" alt="Lulus Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Lulus Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "DEAL", value: "BUY 2 GET 1", title: "Lulus Promo Code – Buy 2 Eligible Items & Get 1 Free", desc: "Buy 2 eligible items and get 1 item FREE with the Lulus offer.", bullets: ["Use promo code BUY2GET1 to unlock the free-item deal.", "Shop the Lulus sale for women’s dresses, tops, bottoms, and more in the USA."] },
                  { label: "SALE", value: "80%+ OFF", title: "Lulus Promo Code – Trendsetting Flirt Bustier Top 80% OFF+", desc: "Get the Trendsetting Flirt Light Blue Crinkled Strapless Bustier Bow Top for just $5, reduced from $25.", bullets: ["Save 80%+ on this stylish women’s fashion pick.", "Use available Lulus promo offers to save more on eligible USA orders."] },
                  { label: "SALE", value: "70% OFF", title: "Lulus Promo Code – Mulvaney Burgundy Micro Shorts 70% OFF", desc: "Get the Mulvaney Burgundy Tweed Textured Micro Shorts for just $10, reduced from $49.", bullets: ["Save 70% on this trendsetting fashion style.", "Shop Lulus sale items and explore additional savings on eligible USA orders."] },
                  { label: "ONLY", value: "$10", title: "Lulus Promo Code – Parker Black & White Bikini Bottoms for $10", desc: "Get the Parker Black and White High-Waisted Bikini Bottoms for just $10, reduced from $35.", bullets: ["Enjoy major savings on this stylish swimwear pick.", "Shop Lulus for more women’s fashion and sale styles in the USA."] },
                  { label: "ONLY", value: "$35", title: "Lulus Sakira Navy Bustier Mini Dress – Under $40", desc: "Get the Sakira Navy Mesh Sequin Lace-Up Bustier Mini Dress for $35, reduced from $59.", bullets: ["Save on this statement mini dress from the Lulus sale collection.", "Use promo code BUY2GET1 to get 1 FREE eligible item when you buy 2."] },
                  { label: "ONLY", value: "$35", title: "Lulus Glittery Beauty Purple Sequin Mini Dress – $35", desc: "Get the Glittery Beauty Purple Sequin One-Shoulder Mini Dress for $35, reduced from $59.", bullets: ["Add a stylish sequin dress to your wardrobe at a discounted price.", "Shop Lulus Archive Sale styles and discover more USA fashion deals."] },
                  { label: "ONLY", value: "$47.20", title: "Lulus Sultry Intentions Mini Dress – Save on $47.20 Price", desc: "Get the Sultry Intentions Black Strapless Ruffled Mini Dress for $47.20, reduced from $59.", bullets: ["Save on this elegant strapless mini dress from Lulus.", "Use code DEALS20 to unlock the listed discounted price."] },
                  { label: "SALE", value: "50% OFF", title: "Lulus Alaia Satin Midi Dress – 50% OFF", desc: "Get the Alaia Chartreuse Satin Backless Midi Dress for $34, reduced from $68.", bullets: ["Save 50% on this stylish satin midi dress.", "Shop Lulus sale fashion for more discounted dresses and women’s styles in the USA."] },
                  { label: "SALE", value: "20% OFF", title: "Lulus Illustrious Glow Sequin Mini Dress – Save 20%", desc: "Get the Illustrious Glow Black Sheer Tulle Sequin Tiered Mini Dress for $71.20, reduced from $89.", bullets: ["Save 20% on this glamorous sequin mini dress.", "Explore Lulus sale styles for more women’s fashion deals in the USA."] },
                  { label: "SALE", value: "74%+ OFF", title: "Lulus Nasia Burgundy Crop Top – Save 74%+", desc: "Get the Nasia Burgundy Strapless Cutout Crop Top for just $10, reduced from $39.", bullets: ["Save 74%+ on this stylish strapless crop top.", "Shop Lulus sale items for more affordable women’s fashion in the USA."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Lulus: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Lulus?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Lulus is a California-based fashion brand that started as a small vintage shop in Northern California in 1996. The company has since grown into a global online fashion brand focused on chic, modern pieces for women and clothing designed around different moments and occasions.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Rather than focusing only on everyday basics, Lulus has built much of its identity around helping shoppers get dressed for memorable occasions. Its collections cover wedding guest dresses, bridesmaid dresses, homecoming, prom, cocktail events, formal occasions, vacations, parties, and everyday looks.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The assortment goes beyond dresses, too. Shoppers can explore tops, bottoms, jumpsuits, rompers, shoes, handbags, jewelry, accessories, bridal styles, and other wardrobe pieces.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    That makes Lulus particularly useful when you're shopping for an entire look rather than just one item. You might find the dress first, then complete the outfit with shoes, a handbag, jewelry, and other accessories.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Shirt, name: "Dresses", count: "40+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Sparkles, name: "Wedding & Occasion", count: "20+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: ShoppingBag, name: "Shoes & Accessories", count: "15+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: Truck, name: "Free Shipping", count: "18+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Search, name: "New Arrivals", count: "10+", color: "text-orange-500", href: "/categories/fashion" },
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
    How to Find More Lulus Savings
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Getting a promo code isn't the only way to shop strategically at Lulus.
    </p>
    <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
      <p>
        <strong className="text-black font-black block mb-1">Browse the sale section.</strong>
        Lulus has dedicated sale categories covering clothing, dresses, shoes, accessories, and seasonal styles.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check for new-customer offers.</strong>
        If you've never ordered from Lulus before, look for an eligible first-order promotion.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Consider email or SMS signup.</strong>
        Lulus currently promotes discounts for eligible new email and text subscribers.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Join Love Rewards.</strong>
        Regular shoppers can receive personalized promotions and other member benefits through the loyalty program.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Compare the code with sale pricing.</strong>
        A coupon code isn't automatically the most useful promotion for every item. Check whether the products you're buying are already discounted or included in a dedicated promotion.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check CouponsBit before checkout.</strong>
        Searching for a current Lulus promo code before placing your order gives you another opportunity to identify an available offer.
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
          Lulus Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        ["Buy 2 Get 1 FREE Offer", "Buy 2 Get 1 FREE", "All Users", "Use promo code BUY2GET1 to unlock free item on eligible items", "Women's Fashion"],
        ["Trendsetting Flirt Bustier Top", "80%+ OFF ($5)", "All Users", "Reduced from $25 regular price; light blue strapless top", "Women's Tops"],
        ["Mulvaney Micro Shorts", "70% OFF ($10)", "All Users", "Reduced from $49 regular price; burgundy tweed textured shorts", "Women's Bottoms"],
        ["Parker High-Waisted Bikini Bottoms", "70%+ OFF ($10)", "All Users", "Reduced from $35 regular price; black & white bikini bottoms", "Women's Swimwear"],
        ["Sakira Navy Bustier Mini Dress", "$35", "All Users", "Reduced from $59; eligible for BUY2GET1 promo code deal", "Mini Dresses"],
        ["Glittery Beauty Sequin Mini Dress", "40% OFF ($35)", "All Users", "Reduced from $59; purple sequin one-shoulder mini dress", "Lulus Archive Sale"],
        ["Sultry Intentions Mini Dress", "20% OFF ($47.20)", "All Users", "Reduced from $59; use code DEALS20 to unlock discounted price", "Black Mini Dresses"],
        ["Alaia Satin Backless Midi Dress", "50% OFF ($34)", "All Users", "Reduced from $68 regular price; chartreuse satin backless dress", "Midi Dresses"],
        ["Illustrious Glow Sequin Mini Dress", "20% OFF ($71.20)", "All Users", "Reduced from $89; black sheer tulle sequin tiered mini dress", "Women's Dresses"],
        ["Nasia Burgundy Strapless Crop Top", "74%+ OFF ($10)", "All Users", "Reduced from $39 regular price; strapless cutout crop top", "Crop Tops"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 9 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            A wedding invitation just landed in your inbox. Homecoming is around the corner. You have a brunch, birthday party, date night, or vacation coming up and suddenly, “I have nothing to wear” feels very real. That is where Lulus comes in.
          </p>
          <p>
            Known for feminine, trend-forward fashion and occasion-ready styles, Lulus makes it easy to shop for everything from everyday outfits to dresses for the moments that deserve a little extra effort. And before you place your order, checking for a current Lulus promo code can help you see whether an eligible offer is available for your purchase.
          </p>
          <p>
            From dresses and tops to shoes, handbags, jewelry, bridal styles, and more, Lulus gives shoppers plenty to browse. You can also find sale sections, promotional offers, rewards benefits, and special discounts throughout the year. On CouponsBit, you can check available Lulus deals before heading to checkout.
          </p>

          <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Find a Lulus Promo Code
        </h3>
        <p>
          Looking for a Lulus promo code before shopping can be a worthwhile step, especially if you already know what you're looking for.
        </p>
        <p>
          Lulus regularly runs promotional campaigns through its website, email marketing, text alerts, affiliate partners, social media, and other channels. Some promotions are intended for new customers, while others may apply to particular categories or shoppers who meet specific requirements.
        </p>
        <p>
          Lulus currently lists several ways shoppers can access promotions, including offers for new customers, email and SMS subscribers, selected sale merchandise, referrals, and its Love Rewards program.
        </p>
        <p>
          Because promotional terms can change, check the details of the offer before applying it to your order.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Lulus Coupons, Deals &amp; Offers
        </h3>
        <p>
          There is more than one way to find a better offer at Lulus. Depending on when you shop, you may come across a Lulus coupon code, sale merchandise, a category-specific promotion, a new-customer offer, or a rewards benefit.
        </p>
        <p>
          Lulus also maintains dedicated sale sections where shoppers can browse discounted clothing, dresses, shoes, accessories, and other fashion pieces.
        </p>
        <p>
          <strong>New-Customer Offers:</strong> If you're shopping with Lulus for the first time, check whether a new-customer promotion is available. Lulus currently advertises a first-order offer for new customers who create an account, although eligibility requirements and the promotional code can change over time. If you qualify, compare the new-customer promotion with any other available offer before placing your first order.
        </p>
        <p>
          <strong>Email &amp; SMS Promotions:</strong> Signing up for Lulus email or text communications can also unlock promotional opportunities. Lulus currently advertises a promotional offer for new email and SMS subscribers. These promotions generally come with conditions such as first-time subscriber eligibility, one-time use, exclusions, and requirements around where the purchase is made.
        </p>
        <p>
          <strong>Lulus Deals &amp; Sale Items:</strong> If you already have a few styles saved, don't forget to browse Lulus' sale sections before checking out. The retailer maintains dedicated sale categories across dresses, clothing, shoes, accessories, seasonal fashion, and other styles. Lulus also periodically runs additional promotions on products already included in its Deals category. These promotions can have separate codes and restrictions, so check the individual offer terms before applying one.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Shop Dresses at Lulus
        </h3>
        <p>
          Dresses are one of Lulus' most recognizable categories, and the selection is built around a wide range of occasions.
        </p>
        <p>
          <strong>Wedding Guest Dresses:</strong> Have a wedding coming up? Lulus offers styles designed for different dress codes, venues, seasons, and levels of formality. You can browse everything from more relaxed dresses for outdoor celebrations to polished options for formal or black-tie events. Before buying, check whether your selected dress qualifies for a current Lulus discount code or sale promotion.
        </p>
        <p>
          <strong>Bridesmaid Dresses:</strong> Lulus also has a dedicated bridesmaid collection with different silhouettes, colors, and styles. The brand highlights options designed to work for coordinated bridal parties as well as mix-and-match approaches. If you're buying for multiple members of a wedding party, checking current promotions can be especially useful.
        </p>
        <p>
          <strong>Homecoming &amp; Prom Dresses:</strong> Homecoming and prom are another major part of the Lulus occasionwear assortment. You can find mini dresses, satin styles, sequined looks, statement silhouettes, and other options aimed at formal school events. Lulus currently features dedicated homecoming and prom categories on its website.
        </p>
        <p>
          <strong>Cocktail &amp; Formal Dresses:</strong> For cocktail parties, galas, celebrations, dinners, and other dressier occasions, Lulus carries a selection of cocktail and formal dresses. Formal collections include longer gowns and elevated silhouettes suited to occasions where a more polished dress code is expected.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          More Than Dresses: Shop the Full Look
        </h3>
        <p>
          While dresses may be a major attraction, Lulus is designed to help shoppers build complete outfits.
        </p>
        <p>
          <strong>Tops:</strong> From casual tops to more dressed-up styles, Lulus offers a range of silhouettes that can work with jeans, trousers, skirts, or coordinated bottoms.
        </p>
        <p>
          <strong>Bottoms:</strong> Shoppers can explore pants, skirts, shorts, and other bottomwear to create outfits beyond traditional dresses.
        </p>
        <p>
          <strong>Jumpsuits &amp; Rompers:</strong> Jumpsuits and rompers can provide an alternative to dresses for parties, vacations, dinners, and special events. They're particularly useful when you want a complete outfit without having to coordinate multiple pieces.
        </p>
        <p>
          <strong>Shoes:</strong> The right shoes can completely change the feel of an outfit. Lulus carries footwear designed to complement its clothing collections, including styles suited to weddings, parties, formal occasions, and everyday dressing.
        </p>
        <p>
          <strong>Handbags:</strong> Lulus also offers handbags and other accessories that can be used to complete an occasion outfit. A clutch or small evening bag can work for formal events, while larger everyday styles can be paired with casual outfits.
        </p>
        <p>
          <strong>Jewelry &amp; Accessories:</strong> Jewelry, hair accessories, and other finishing pieces can add another layer to a look. Lulus' sale assortment also includes accessories such as jewelry and shoes, giving shoppers the opportunity to complete an outfit while browsing discounted styles.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Lulus Bridal Shopping
        </h3>
        <p>
          Lulus is particularly relevant for shoppers preparing for weddings—not only bridesmaids and wedding guests.
        </p>
        <p>
          Its occasion-led collections make it possible to browse different pieces for bridal events, engagement celebrations, rehearsal dinners, bachelorette parties, wedding guests, and other moments surrounding a wedding.
        </p>
        <p>
          If you're shopping for several events, it can be useful to compare your cart with available Lulus offers before checking out rather than buying each outfit separately without checking for promotions.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Shop Lulus for Every Occasion
        </h3>
        <p>
          One of the easiest ways to shop Lulus is by thinking about the event first.
        </p>
        <p>
          Need something for a brunch? Look for a relaxed dress or versatile top.
        </p>
        <p>
          Heading to a beach vacation? Browse lightweight dresses, swimwear, sandals, and accessories.
        </p>
        <p>
          Have a wedding on the calendar? Explore wedding guest and formal collections.
        </p>
        <p>
          Planning a night out? Cocktail dresses, going-out outfits, heels, handbags, and jewelry can help build the complete look.
        </p>
        <p>
          For everyday wear, Lulus also offers casual clothing that can be mixed into your existing wardrobe.
        </p>
        <p>
          This occasion-based approach is part of what makes the brand different from a retailer focused purely on basics. Lulus describes its purpose around helping women get dressed for everything from graduations and brunches to major life events.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Lulus Love Rewards
        </h3>
        <p>
          Frequent shoppers can also look into Lulus Love Rewards.
        </p>
        <p>
          The program provides members with access to rewards-related benefits, including personalized offers, coupons, gifts, early access to promotions and new arrivals, and other perks depending on membership status.
        </p>
        <p>
          Lulus currently advertises Love Rewards as a way to access exclusive rewards and promotions, including a birthday gift for eligible members.
        </p>
        <p>
          The program's terms can change, so review the current conditions when joining or using rewards.
        </p>
        <p>
          For regular Lulus shoppers, checking your available rewards alongside a Lulus promo code can help you understand which offer is applicable to your order.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Seasonal Shopping at Lulus
        </h3>
        <p>
          Fashion shopping changes with the calendar, and Lulus' occasion-based assortment makes the brand relevant throughout the year.
        </p>
        <p>
          <strong>Valentine's Day:</strong> Valentine's Day can be a good time to browse dresses, tops, going-out outfits, jewelry, and accessories for date nights or celebrations.
        </p>
        <p>
          <strong>Spring &amp; Wedding Season:</strong> Spring brings weddings, graduations, showers, brunches, and other events. This is when wedding guest dresses, bridesmaid styles, cocktail dresses, and lighter seasonal outfits become particularly relevant.
        </p>
        <p>
          <strong>Graduation:</strong> Graduation celebrations call for outfits that feel polished but still personal. Lulus' dresses, jumpsuits, shoes, and accessories can all work together for graduation-related events.
        </p>
        <p>
          <strong>Summer &amp; Vacation:</strong> Summer is ideal for lightweight dresses, vacation outfits, sandals, accessories, and going-out styles. If you're building several vacation looks at once, check for a Lulus coupon code before completing your order.
        </p>
        <p>
          <strong>Back-to-School &amp; Homecoming:</strong> For U.S. shoppers, late summer and early fall bring homecoming season, making this an important period for dress shopping.
        </p>
        <p>
          <strong>Halloween:</strong> Halloween can be an opportunity to shop for party outfits, statement pieces, dresses, accessories, and other styles that can be dressed up for events.
        </p>
        <p>
          <strong>Thanksgiving &amp; Holiday Parties:</strong> As the holiday season begins, shoppers often start looking for cocktail dresses, formal outfits, party-ready tops, accessories, and giftable fashion pieces.
        </p>
        <p>
          <strong>Black Friday &amp; Cyber Monday:</strong> Black Friday and Cyber Monday are major U.S. shopping events, and Lulus maintains dedicated promotional and sale sections throughout the year. When these shopping events arrive, compare the current sale with any available Lulus promo code before checking out.
        </p>
        <p>
          <strong>Christmas &amp; New Year's Eve:</strong> Holiday parties and New Year's Eve create another opportunity to shop for statement dresses, sequins, metallic details, heels, handbags, and jewelry.
        </p>
      </div>
    </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Use a Lulus Promo Code</h3>
              <p>Once you've found a valid Lulus promo code, applying it is straightforward:</p>
              <ol className="list-decimal pl-5 space-y-2 font-medium">
                <li>Choose the items you want from Lulus.</li>
                <li>Add them to your shopping bag.</li>
                <li>Proceed to checkout.</li>
                <li>Locate the promo code field.</li>
                <li>Enter or paste your valid code.</li>
                <li>Apply the code and review the updated order.</li>
                <li>Complete your purchase after confirming that the promotion has been accepted.</li>
              </ol>
              <p>Lulus states that promo codes are entered in the designated box at checkout. Its promotions page also notes that codes are not case sensitive.</p>
              <p>Keep in mind that promotional codes generally cannot be combined with another coupon code unless the specific offer says otherwise. Certain products and categories may also be excluded.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Isn't My Lulus Promo Code Working?</h3>
              <p>If your Lulus promo code doesn't apply, don't immediately assume the code is invalid.</p>
              <p>There are several possible reasons. The promotion may have expired, may only be available to new customers, or may require you to meet a specific condition. Some codes are also limited to certain products or categories.</p>
              <p>Lulus' promotional terms state that discount codes may exclude gift cards, beauty and wellness products, previous purchases, taxes, shipping, and other specified items or charges.</p>
              <p>A code may also be limited to one use or may not be combined with another promotion. Before trying another code, read the offer's terms and check whether the products in your cart qualify.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Lulus Deals?</h3>
              <p>CouponsBit gives shoppers a convenient place to check available Lulus promotions before completing their purchase.</p>
              <p>Instead of searching for individual codes across multiple websites, you can start by checking current offers, reading the applicable terms, and then visiting Lulus to shop.</p>
              <p>This can be particularly helpful when you're shopping for an occasion and already have a specific outfit in mind. Whether it's a wedding guest dress, homecoming look, bridesmaid outfit, vacation dress, or a complete party ensemble, checking for a Lulus discount code before checkout takes only a moment.</p>
              <p>And because Lulus promotions can change frequently, checking for a current offer is more useful than relying on an old code you found elsewhere.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Lulus With a Promo Code</h3>
              <p>Whether you're dressing for a wedding, planning your next vacation, getting ready for homecoming, searching for a graduation outfit, or simply refreshing your wardrobe, Lulus offers fashion for plenty of occasions.</p>
              <p>Before you place your next order, check CouponsBit for a current Lulus promo code and compare it with any sale, rewards benefit, or other promotion available to you.</p>
              <p>The right dress may already be waiting in your cart. Taking a moment to check for an applicable offer before checkout can make the shopping experience even better.</p>
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
            Lulus Promo Code FAQs
          </h3>
          {[
            { q: "Does Lulus offer promo codes?", a: "Yes. Lulus regularly offers promotional codes through its website, email, SMS, affiliate partners, social media, and other promotional channels. Availability and eligibility vary by offer." },
            { q: "Where can I find a Lulus promo code?", a: "You can check CouponsBit for available Lulus promotions before shopping on the Lulus website." },
            { q: "Does Lulus have a first-order discount?", a: "Lulus currently advertises a first-order promotion for eligible new customers who create a Lulus account. The code and terms can change, so check the current offer before using it." },
            { q: "Does Lulus offer student discounts?", a: "Lulus lists student promotions among its available services, although eligibility and the current offer may vary." },
            { q: "Does Lulus offer healthcare or military discounts?", a: "Lulus lists healthcare and military/armed forces discounts among its promotional programs, with verification and eligibility requirements applying to these offers." },
            { q: "Can I use two Lulus promo codes together?", a: "Generally, Lulus promo codes cannot be combined with another coupon code unless the specific promotion states otherwise." },
            { q: "Can I use a Lulus promo code on sale items?", a: "Some Lulus promotional codes can apply to already discounted merchandise, while others are limited to particular products or categories. Always check the terms of the individual offer." },
            { q: "Does Lulus have a rewards program?", a: "Yes. Lulus Love Rewards provides members with rewards-related benefits, personalized offers, coupons, gifts, and other perks depending on membership status." },
            { q: "What should I do if my Lulus coupon code doesn't work?", a: "Check the code's expiration date, product eligibility, customer eligibility, usage restrictions, and exclusions. Lulus promotional codes may also be limited to one use and generally cannot be combined with another discount code." }
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
            Popular Lulus Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Lulus Promo Code",
              "Wedding Guest Dresses",
              "First Order 15% OFF",
              "Lulus Love Rewards",
              "Student Discount 10%",
              "Vacation & Resortwear",
              "Bridesmaid Dresses",
              "Clearance & Sale Deals"
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
            Today's Top Lulus Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "BUY 2 GET 1", sub: "Free Item With Promo Code BUY2GET1" },
              { heading: "BUSTIER TOP", sub: "80%+ OFF, Now $5" },
              { heading: "ALAIA MIDI DRESS", sub: "50% OFF, Now $34" },
              { heading: "NASIA CROP TOP", sub: "74%+ OFF, Now $10" }
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
                  href="https://www.lulus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Shop Lulus: ${deal.heading}`}
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
