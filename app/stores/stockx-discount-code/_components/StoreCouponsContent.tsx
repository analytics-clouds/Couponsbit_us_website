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
  Gift,
  Truck,
  Shirt,
  Sparkles,
  Package,
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
  { name: "HOKA", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789994531/hoka-logo_zrq4ot.webp", dealText: "Up To 50% OFF", href: "/stores/hoka-coupon-code" },
  { name: "Abercrombie", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp", dealText: "Up To 50% OFF", href: "/stores/abercrombie-discount-code" },
  { name: "Coach Outlet", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/coach_outlet_logo_ysdxtk.webp", dealText: "Up To 80% OFF", href: "/stores/coach-outlet-promo-code" },
  { name: "SHEIN", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp", dealText: "Up To 90% OFF", href: "/stores/shein-coupon-code" },
];

const STORE_URL = "https://www.stockx.com";

export default function StockXCouponsContent() {
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
              <span className="text-black font-extrabold">StockX</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1792648465/stock-logo_ixdvkn.webp" alt="StockX" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">StockX Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(5.8k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest StockX Discount Code offers and verified StockX Promo Code deals. Shop sneakers up to 40% off retail — starting at just $56. Score apparel up to 50% off from adidas, Balenciaga & Sp5der. Grab accessories up to 60% off retail, starting at $28. Find Apple products from $55, hoodies from $72, and handbags from $53. Over 1.5M+ shoppers trust StockX for authenticated streetwear, sneakers, and collectibles at below-retail prices.
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
                    { icon: Tag, val: "15", label: "Offers" },
                    { icon: Percent, val: "50+", label: "Deals" },
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
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <div className="w-full h-full bg-[#f8f8f8] flex items-center justify-center">
                        <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793089136/72_uuyqhr.webp" alt="StockX Discount Code" width={800} height={350} className="w-full h-full bg-[#f8f8f8]" fetchPriority="high" />
                      </div>
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
                  <h2 className="text-2xl font-black text-black leading-tight">StockX Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "UP TO", value: "40% OFF", title: "StockX Discount Code – Sneakers Up to 40% Off Retail", desc: "Shop popular sneakers from brands like Nike, adidas, and ASICS at prices below retail.", bullets: ["Get the Nike Air Max 95 OG Big Bubble in Neon Paisley Bandana for $70.", "Explore sought-after sneaker styles and find standout designs for your collection.", "Browse StockX deals to discover sneakers at competitive prices and check for applicable discount codes."] },
                  { label: "UP TO", value: "50% OFF", title: "StockX Discount Code – Apparel Up to 50% Off Retail", desc: "Save up to 50% off retail prices on selected apparel from adidas, Balenciaga, Sp5der, and more.", bullets: ["Get the Noah x adidas Originals T-Shirt in Core White for $34.", "Refresh your wardrobe with trending apparel and streetwear styles.", "Explore StockX apparel deals and check for eligible discount code offers."] },
                  { label: "UP TO", value: "60% OFF", title: "StockX Discount Code – Accessories Up to 60% Off Retail", desc: "Discover selected accessories at up to 60% off retail prices.", bullets: ["Shop the Saint Laurent Square Sunglasses in Black/Black/Yellow for $121.", "Explore bags, beanies, sunglasses, watches, and other accessories to complete your look.", "Browse StockX accessory deals and check current discount code availability."] },
                  { label: "FROM", value: "$5", title: "StockX Discount Code – Women's Clothing Essentials Starting at $5", desc: "Shop selected women's clothing essentials with prices starting at just $5.", bullets: ["Discover budget-friendly fashion finds for everyday outfits.", "Explore a variety of clothing styles and refresh your wardrobe for less.", "Check StockX listings for current prices and any applicable discount code offers."] },
                  { label: "FROM", value: "$28", title: "StockX Discount Code – Accessories Starting at $28", desc: "Explore selected accessories with prices beginning at $28.", bullets: ["Find stylish add-ons to complement your streetwear and everyday looks.", "Browse different accessory categories and discover options for your personal style.", "Shop StockX deals and check for any applicable discount codes before purchasing."] },
                  { label: "FROM", value: "$31", title: "StockX Discount Code – T-Shirts Starting at $31", desc: "Shop selected T-shirts starting at $31.", bullets: ["Explore casual tops and graphic styles from popular brands.", "Find versatile pieces to pair with sneakers, jeans, and streetwear essentials.", "Check current StockX listings for available styles, prices, and discount code offers."] },
                  { label: "FROM", value: "$53", title: "StockX Discount Code – Handbags & Belt Bags Starting at $53", desc: "Discover selected handbags and belt bags starting at $53.", bullets: ["Explore practical accessories that complement casual outfits and streetwear looks.", "Find styles suitable for carrying everyday essentials.", "Browse StockX listings and check whether any discount code offers apply."] },
                  { label: "FROM", value: "$55", title: "StockX Discount Code – Apple Products Starting at $55", desc: "Explore selected Apple products with prices starting at $55.", bullets: ["Browse available listings for Apple devices and accessories at varying price points.", "Compare product condition, seller details, and pricing before making a purchase.", "Check StockX for current listings and any applicable discount code offers."] },
                  { label: "UP TO", value: "40% OFF", title: "StockX Discount Code – Sneakers Up to 40% Off", desc: "Save up to 40% off retail prices on selected sneakers.", bullets: ["Explore sought-after styles from popular footwear brands.", "Find sneakers for everyday wear, streetwear outfits, and collectors' wish lists.", "Browse eligible StockX listings and check for current discount code opportunities."] },
                  { label: "FROM", value: "$56", title: "StockX Discount Code – Sneakers Starting at $56", desc: "Shop selected sneakers with prices starting at $56.", bullets: ["Discover a variety of styles from popular athletic and lifestyle brands.", "Compare available designs and prices to find a pair that suits your style.", "Check StockX listings for current availability and applicable discount code offers."] },
                  { label: "FROM", value: "$72", title: "StockX Discount Code – Hoodies Starting at $72", desc: "Explore selected hoodies with prices starting at $72.", bullets: ["Find casual layers and streetwear essentials for everyday styling.", "Pair your favourite hoodie with jeans, joggers, or sneakers for a relaxed look.", "Browse StockX listings and check for any eligible discount code offers."] },
                  { label: "FROM", value: "$109", title: "StockX Discount Code – Card Holders Starting at $109", desc: "Shop selected card holders starting at $109.", bullets: ["Explore compact accessories from sought-after brands.", "Find a practical addition to your everyday essentials or accessory collection.", "Check StockX listings for current prices and any applicable discount codes."] },
                  { label: "FROM", value: "$128", title: "StockX Discount Code – Dyson Products Starting at $128", desc: "Discover selected Dyson products with prices starting at $128.", bullets: ["Explore available listings across eligible Dyson product categories.", "Compare product details and prices before choosing the right option.", "Visit StockX to check current availability and any applicable discount code offers."] },
                  { label: "FROM", value: "$140", title: "StockX Discount Code – Backpacks Starting at $140", desc: "Explore selected backpacks starting at $140.", bullets: ["Find functional and fashionable designs for travel, daily use, and streetwear styling.", "Browse available brands and styles to suit your needs.", "Check StockX listings for current prices and eligible discount code offers."] },
                  { label: "FROM", value: "$299", title: "StockX Discount Code – Refurbished Apple Products Starting at $299", desc: "Shop selected refurbished Apple products with prices starting at $299.", bullets: ["Explore available listings and compare models, condition details, and prices.", "Consider refurbished options when looking for Apple products at different price points.", "Review the listing details and StockX terms, and check for any applicable discount code offers."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop StockX: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is StockX?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    StockX is an online marketplace where shoppers can buy and sell high-demand products, including sneakers, apparel, electronics, accessories, trading cards, and collectibles. It connects buyers and sellers through a marketplace model where prices respond to demand, giving shoppers another place to discover popular releases and hard-to-find items. 

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform is particularly popular among sneaker enthusiasts and streetwear fans looking for sought-after styles and limited releases. Its product range also includes items from well-known brands across fashion, <Link href="/stores/hoka-coupon-code" className="text-[#056bfa] hover:underline">footwear</Link>, and collectibles.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    StockX offers a different shopping experience from a traditional online retailer. Depending on the listing, you can buy an item at its displayed price or use the marketplace’s buying options to pursue a price that works for you.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Package, name: "Sneakers", count: "50+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Shirt, name: "Streetwear", count: "30+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Sparkles, name: "Collectibles", count: "10+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: Truck, name: "Free Shipping", count: "20+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Search, name: "New Listings", count: "15+", color: "text-orange-500", href: "/categories/fashion" },
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
    Shop Gymshark's Popular Collections
  </h3>
  <div className="space-y-6">
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Leggings and sports bras:</strong> Explore workout essentials in different fits and support levels for lifting, running, Pilates and other training sessions.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Men's training clothes:</strong> Browse gym T-shirts, tank tops, shorts, joggers and performance-focused tops.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Seamless activewear:</strong> Discover collections designed for movement, with body-contouring fits and versatile workout staples.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Hoodies and sweatpants:</strong> Add comfortable layers for warm-ups, travel and rest days.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Running apparel:</strong> Find clothing designed for running sessions, from breathable tops to running shorts and tights.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Accessories and basics:</strong> Complete your gym bag with practical training essentials and everyday staples.</span>
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
          StockX Discount Code: Save on Sneakers, Streetwear & More
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        [
          "StockX Sneakers Below Retail Deal",
          "Up to 40% OFF",
          "All Users",
          "Includes Nike Air Max 95 OG Big Bubble in Neon Paisley Bandana for $70.",
          "Select Sneakers (Nike, adidas, ASICS)"
        ],
        [
          "StockX Apparel Retail Sale",
          "Up to 50% OFF",
          "All Users",
          "Includes Noah x adidas Originals T-Shirt in Core White for $34.",
          "Select Apparel (adidas, Balenciaga, Sp5der)"
        ],
        [
          "StockX Accessories Retail Sale",
          "Up to 60% OFF",
          "All Users",
          "Includes Saint Laurent Square Sunglasses in Black/Black/Yellow for $121.",
          "Bags, Sunglasses, Watches & Accessories"
        ],
        [
          "StockX Women's Clothing Essentials",
          "From $5",
          "All Users",
          "Budget-friendly fashion basics and everyday apparel options.",
          "Women's Clothing Essentials"
        ],
        [
          "StockX Streetwear Accessories",
          "From $28",
          "All Users",
          "Prices start at $28 across selected streetwear add-ons and accessories.",
          "Selected Accessories"
        ],
        [
          "StockX Graphic & Casual T-Shirts",
          "From $31",
          "All Users",
          "Casual tops and graphic t-shirts from popular streetwear brands.",
          "Selected T-Shirts"
        ],
        [
          "StockX Handbags & Belt Bags",
          "From $53",
          "All Users",
          "Practical streetwear bags and everyday carry options.",
          "Handbags & Belt Bags"
        ],
        [
          "StockX Apple Products Offer",
          "From $55",
          "All Users",
          "Varying price points on select Apple devices and accessories. Verify seller condition details.",
          "Apple Products & Accessories"
        ],
        [
          "StockX Footwear Promotional Savings",
          "Up to 40% OFF",
          "All Users",
          "Save up to 40% off retail across sought-after footwear and collector styles.",
          "Selected Sneakers"
        ],
        [
          "StockX Entry-Level Sneakers",
          "From $56",
          "All Users",
          "Prices start at $56 on athletic and lifestyle footwear designs.",
          "Selected Sneakers"
        ],
        [
          "StockX Streetwear Hoodies",
          "From $72",
          "All Users",
          "Casual outerwear and streetwear hoodies starting at $72.",
          "Selected Hoodies"
        ],
        [
          "StockX Designer Card Holders",
          "From $109",
          "All Users",
          "Compact designer accessories and cardholders from sought-after brands.",
          "Selected Card Holders"
        ],
        [
          "StockX Dyson Products Offer",
          "From $128",
          "All Users",
          "Competitive pricing starting at $128 on eligible Dyson tech and appliances.",
          "Dyson Products"
        ],
        [
          "StockX Streetwear Backpacks",
          "From $140",
          "All Users",
          "Functional designs suitable for daily use, travel, and streetwear style.",
          "Selected Backpacks"
        ],
        [
          "StockX Refurbished Apple Products",
          "From $299",
          "All Users",
          "Verified refurbished listings for Apple hardware with detailed condition reports.",
          "Refurbished Apple Devices"
        ]
      ].map((row, i, arr) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === arr.length - 1 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for a StockX discount code to save on your next purchase? Whether you want limited-edition sneakers, trending streetwear, collectible cards, or sought-after accessories, finding the right deal can make shopping for your next favourite item more rewarding. CouponsBit helps you explore StockX promo codes and available offers so you can check for potential savings before placing an order.
          </p>
          <p>
            StockX occasionally shares promotional codes through email, influencer partnerships, social media, and its blog. Since offers can expire or come with specific conditions, check the code’s validity before applying it at checkout.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            What Can You Shop for on StockX?
          </h3>
          <p>
            StockX offers products across several popular categories, making it worth exploring whether you're shopping for yourself or searching for a gift.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Sneakers and Shoes
          </h4>
          <p>
            Sneakers remain one of StockX’s best-known categories. Explore sought-after releases, classic silhouettes, and footwear from popular brands. If you're looking for a particular colourway or a hard-to-find release, compare listings before purchasing.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Streetwear and Apparel
          </h4>
          <p>
            Refresh your wardrobe with apparel from established streetwear and fashion brands. Depending on availability, you can browse clothing that complements your everyday style or helps you build a collection around a favourite label.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Collectibles and Trading Cards
          </h4>
          <p>
            Collectors can explore trading cards and other collectible products. Since availability and demand can vary, compare listings and review product details before making your purchase.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Electronics and Accessories
          </h4>
          <p>
            StockX also features selected electronics and accessories. Check the product listing carefully to understand exactly what is available and whether it meets your needs.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use a StockX Promo Code
          </h3>
          <p>
            Applying a StockX discount code is straightforward when you have a valid offer.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit StockX and sign in to your account or create one.</li>
            <li>Find the product you want and select Buy on its item page.</li>
            <li>Continue to checkout and locate the Discount Code field.</li>
            <li>Select Add, enter your StockX promo code, and choose Apply.</li>
            <li>Check the updated price to confirm the discount has been applied.</li>
            <li>Continue through checkout to complete your order.</li>
          </ol>
          <p>
            These steps follow StockX’s official promo-code instructions. Each promotional code has an expiry date, so check its validity before completing your purchase.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Tips to Get More Value From Your StockX Order
          </h3>
          <p>
            A discount code is only one way to make a smarter purchase. Keep these tips in mind while shopping:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Compare prices:</strong> Review available listings for the same product before choosing one.</li>
            <li><strong>Check the final checkout amount:</strong> Consider applicable shipping, processing, taxes, or other charges displayed during checkout.</li>
            <li><strong>Look for limited-time offers:</strong> Follow StockX’s official channels and check CouponsBit for available promotions.</li>
            <li><strong>Read product details:</strong> Confirm the size, model, colour, condition, and other listing information before ordering.</li>
            <li><strong>Check regional eligibility:</strong> A promotion may apply only in certain markets or under specific conditions.</li>
          </ul>
          <p>
            Taking a moment to compare your options can help you make a more informed buying decision.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Shop Smarter With a StockX Discount Code
          </h3>
          <p>
            From sought-after sneakers and streetwear to collectibles and accessories, StockX gives shoppers access to products that can be difficult to find elsewhere. Before placing your next order, explore StockX discount codes on CouponsBit and check for an eligible offer that fits your purchase.
          </p>
          <p>
            Compare listings, review the terms, and apply a valid promo code at checkout to make the most of your shopping experience.
          </p>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQ Section */}
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions
          </h3>
          {[
            {
              q: "Does StockX offer discount codes?",
              a: "Yes. StockX occasionally offers promotional codes through email, influencer partnerships, social media, and its blog. Availability and terms vary, so check the official promotion details."
            },
            {
              q: "How do I redeem a StockX discount code?",
              a: "Choose your item, proceed to checkout, and enter the code in the Discount Code field. Select Apply and check whether the price updates before completing your order."
            },
            {
              q: "Why isn't my StockX promo code working?",
              a: "The code may have expired, may not apply to your selected purchase, or may have specific eligibility requirements. Review its terms and confirm that you entered it correctly."
            },
            {
              q: "Can I use a StockX discount code on every product?",
              a: "Not necessarily. Each promotion may have its own conditions, eligible products, or regional restrictions. Check the offer details before relying on a discount."
            },
            {
              q: "Where can I find StockX deals?",
              a: "Check CouponsBit for available StockX discount codes and browse StockX’s official website, email promotions, and social channels for offers. Confirm the validity of any code before checkout."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
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
            Popular StockX Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "StockX Discount Code",
              "Sneaker Deals",
              "Streetwear Promo Code",
              "Collectible Cards",
              "Limited Edition Sneakers",
              "Electronics Offers",
              "Trading Cards Sale",
              "Apparel Discounts"
            ].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top StockX Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "SNEAKER RELEASES",
                sub: "Explore trending footwear and limited drops",
              },
              {
                heading: "STREETWEAR COLLECTION",
                sub: "Save on top streetwear and apparel brands",
              },
              {
                heading: "COLLECTIBLES & CARDS",
                sub: "Special deals on trading cards & items",
              },
              {
                heading: "ELECTRONICS DEALS",
                sub: "Shop verified tech, consoles & gear",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  S
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
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop StockX: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90"
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
