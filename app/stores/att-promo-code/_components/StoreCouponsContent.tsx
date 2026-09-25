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
  ExternalLink, HeartHandshake, ShieldAlert, Calendar, Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Smartphone,
  Gift,
  Wifi,
  Truck,
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
  { id: "d1", label: "NEW", heading: "New Customer Offer", sub: "Latest Deals" },
  { id: "d2", label: "DEAL", heading: "Unlimited Plan Discount", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Trade-In Credit", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Internet & Wireless Bundle Deal", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Device Deal", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Lyca Mobile", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/lyca-mobile-coupon-code_svvddg.webp", dealText: "Up to 69% OFF", href: "/stores/lyca-mobile-discount-code" },
  { name: "Oppo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784970/oppo-logo_umnpx7.webp", dealText: "From $39", href: "/stores/oppo-discount-code" },
  { name: "Airalo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/airalo-logo_fc6u6p.webp", dealText: "USA eSIM From $4.50", href: "/stores/airalo-discount-code" },
  { name: "Apple", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/apple-logo_vrakxu.webp", dealText: "Up To $150 Gift Card", href: "/stores/apple-discount-code" },
  { name: "Jetpac", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787741564/jetpac-logo_prj8gu.webp", dealText: "Save Up To 70%", href: "/stores/jetpac-discount-code" },
];

const STORE_URL = "https://www.att.com";

export default function ATTCouponsContent() {
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
              <span className="text-black font-extrabold">AT&T</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789719709/att_logo_xntyq0.webp" alt="AT&T" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">AT&T Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.2</span>
                      <span className="text-gray-600 font-bold text-sm">(18.6k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Get the latest AT&T Promo Code and AT&T Discount Code to save up to $1,200 OFF the new iPhone 18 Pro Max with an eligible trade-in and 50% OFF selected Pixel accessories. Compare verified AT&T phone deals, wireless offers, and exclusive savings to maximize your purchase in September 2026.
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
                    { icon: Tag, val: "19", label: "Offers" },
                    { icon: Percent, val: "120+", label: "Deals" },
                    { icon: Users, val: "5M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790324560/50_aldekn.webp" alt="AT&T Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">AT&T Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SAVE", value: "UP TO $1,200", title: "AT&T Promo Code – iPhone 18 Pro Max | Up To $1,200 OFF", desc: "New and existing customers can get the new iPhone 18 Pro Max for up to $1,200 OFF with an eligible trade-in.", bullets: ["The offer allows trade-ins in any condition, with free shipping included on qualifying orders.", "Explore AT&T phone deals and check the latest AT&T promotions for eligible wireless plans."] },
                  { label: "SAVE", value: "$300 OFF", title: "AT&T Promo Code – Apple Watch | $300 OFF", desc: "Get $300 OFF Apple Watch when you purchase two eligible watches.", bullets: ["This offer is available to qualifying customers shopping through AT&T.", "Visit the AT&T store to explore Apple Watch options and current AT&T deals."] },
                  { label: "SAVE", value: "$200 OFF", title: "AT&T Promo Code – New Phone Line | $200 OFF Per Line", desc: "Get $200 OFF per line when you call or order online with an eligible wireless plan and new phone line.", bullets: ["Choose from AT&T wireless plans and available phone options to build your mobile service.", "Compare AT&T phone plans and AT&T new customer deals before placing your order."] },
                  { label: "SAVE", value: "UP TO $1,900", title: "AT&T Promo Code – Samsung Galaxy Z Fold8 Ultra | Up To $1,900 OFF", desc: "New and existing customers can get up to $1,900 OFF the Samsung Galaxy Z Fold8 Ultra with an eligible trade-in.", bullets: ["The offer requires a trade-in valued at $290 or more and an eligible plan; terms and restrictions apply.", "Shop AT&T phone deals and check the offer details before the September 17 expiration."] },
                  { label: "SAVE", value: "UP TO $1,800", title: "AT&T Promo Code – Buy All Three | Up To $1,800 OFF", desc: "Save up to $1,800 when you purchase all three eligible products.", bullets: ["Combine qualifying devices and services to unlock the maximum available savings.", "Explore AT&T deals and check the latest AT&T promotions for qualifying purchases."] },
                  { label: "SALE", value: "50% OFF", title: "AT&T Promo Code – Samsung Accessories | 50% OFF", desc: "Enjoy 50% OFF eligible Samsung accessories.", bullets: ["Shop chargers, cases and other compatible accessories for your Samsung devices.", "Visit the AT&T store and look for available AT&T promotions before checkout."] },
                  { label: "SALE", value: "50% OFF", title: "AT&T Promo Code – Pixel Accessories | 50% OFF", desc: "Get a flat 50% OFF selected Pixel accessories.", bullets: ["Upgrade your Pixel setup with eligible cases, chargers and other accessories.", "Browse AT&T deals and check for qualifying AT&T promo code offers."] },
                  { label: "SAVE", value: "$1,000 OFF", title: "AT&T – iPhone 16 Pro Max | $1,000 OFF", desc: "Save $1,000 on the iPhone 16 Pro Max with this AT&T phone deal.", bullets: ["Choose an eligible wireless plan and explore available iPhone options through AT&T.", "Compare AT&T phone plans and current AT&T promotions before purchasing."] },
                  { label: "SALE", value: "60% OFF", title: "AT&T – Motorola Moto G PLAY 2024 | 60% OFF", desc: "Get a flat 60% OFF the Motorola Moto G PLAY 2024.", bullets: ["This offer provides an affordable option for customers looking for a new AT&T mobile device.", "Explore AT&T cell phone plans and check the AT&T store for eligible device offers."] },
                  { label: "SALE", value: "UP TO 50%", title: "AT&T – Back To School Sale | Up To 50% OFF", desc: "Save up to 50% during the AT&T Back To School Sale.", bullets: ["Explore eligible phones, accessories and wireless products included in the seasonal promotion.", "Check AT&T new customer deals and available AT&T promotions while the sale is active."] },
                  { label: "SALE", value: "20% OFF", title: "AT&T – Cases, Screens & Chargers | 20% OFF", desc: "Save 20% on eligible cases, screen accessories and AT&T Brand chargers.", bullets: ["Protect your phone and stock up on essential mobile accessories at a discounted price.", "Shop the AT&T store and explore accessories compatible with AT&T phone plans."] },
                  { label: "REWARD", value: "UP TO $150", title: "AT&T – AT&T Fiber | Up To $150 Reward Card", desc: "Order AT&T Fiber and receive an eligible reward card worth up to $150.", bullets: ["Explore AT&T Fiber internet options for reliable home connectivity.", "Compare AT&T internet plans and check the current AT&T Fiber promotion for eligibility."] },
                  { label: "SALE", value: "20% OFF", title: "AT&T – Monthly Savings | 20% OFF", desc: "Save 20% on eligible AT&T services every month with this promotional offer.", bullets: ["Explore qualifying wireless and connectivity services available through AT&T.", "Compare AT&T service options and current AT&T deals to find eligible monthly savings."] },
                  { label: "SAVE", value: "$20/MO", title: "AT&T – AT&T Fiber | Save $20/Month", desc: "Save $20 per month on eligible AT&T Fiber service.", bullets: ["Choose an AT&T Fiber internet plan designed for your home connectivity needs.", "Check AT&T internet availability and compare current AT&T Fiber offers before signing up."] },
                  { label: "EARN", value: "UP TO $340", title: "AT&T – Cashback Points | Up To $340", desc: "Earn up to $340 in eligible cashback points through this AT&T offer.", bullets: ["Qualifying customers can use the available reward opportunity toward future eligible purchases or services.", "Explore AT&T deals and check the current promotion terms before claiming the offer."] },
                  { label: "FROM", value: "$10.99/MO", title: "AT&T – iPhone 16 Plus | From $10.99/Month", desc: "Get the Apple iPhone 16 Plus with payments starting at $10.99 per month on eligible terms.", bullets: ["Choose a qualifying AT&T wireless plan to pair with your new iPhone.", "Compare AT&T phone deals and available AT&T cell phone plans before ordering."] },
                  { label: "FROM", value: "$25/MO", title: "AT&T – Unlimited Data | From $25/Month", desc: "Get unlimited data starting at just $25 per month with an eligible AT&T plan.", bullets: ["Choose from available AT&T wireless plans designed for customers who need more mobile data.", "Compare AT&T phone plans and current AT&T promotions for qualifying options."] },
                  { label: "PLAN", value: "$30/MO", title: "AT&T – 5GB Data | $30/Month", desc: "Get 5GB of data for $30 per month with this AT&T wireless offer.", bullets: ["Choose an eligible mobile plan based on your data and calling needs.", "Explore AT&T cell phone plans and visit the AT&T store for current plan availability."] },
                  { label: "FROM", value: "$30/MO", title: "AT&T – Unlimited Plans | From $30/Month Per Line", desc: "Get AT&T unlimited service starting at $30 per month per line when you have four lines.", bullets: ["Mix and match eligible unlimited plans across your lines with no annual contract required.", "Compare AT&T wireless plans, AT&T phone plans and available AT&T promotions before switching."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop AT&T: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is AT&T?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    AT&T is one of the largest telecommunications companies in the United States, providing wireless communications, broadband internet, and related connectivity services to consumers and businesses.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For everyday shoppers, AT&T is best known for its mobile phone service and internet offerings. Customers can choose from wireless plans for individual users and families, purchase smartphones and other connected devices, and access home internet services in eligible locations.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its wireless lineup covers major smartphone brands and devices, while AT&T Fiber provides high-speed internet service in areas where fiber is available. AT&T also offers options for connected devices such as tablets, smartwatches, and other products that can use a cellular connection.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The company has a large retail and online presence, allowing customers to shop for devices, compare plans, manage existing services, and explore promotions without necessarily visiting a physical store.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Because AT&T sells both products and ongoing services, the best savings opportunity isn't always a traditional coupon. A promotional offer, trade-in deal, device incentive, plan benefit, or bundled service promotion may provide greater value depending on what you're purchasing.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Smartphone, name: "Unlimited Plans", count: "10+", color: "text-blue-500", href: "/categories/mobile" },
                        { icon: Wifi, name: "Internet Bundles", count: "8+", color: "text-purple-500", href: "/categories/mobile" },
                        { icon: Gift, name: "Trade-In Credit", count: "6+", color: "text-pink-500", href: "/categories/mobile" },
                        { icon: Truck, name: "Device Deals", count: "15+", color: "text-teal-500", href: "/categories/mobile" },
                        { icon: Search, name: "New Arrivals", count: "5+", color: "text-orange-500", href: "/categories/mobile" },
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
  <h3 className="text-black font-black text-lg mb-2">
    How to Find Better AT&T Deals
  </h3>
  <p className="text-gray-500 font-medium text-[11px] leading-relaxed mb-8">
    Finding a code is only one part of saving on telecommunications.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Receipt,
        title: "Compare the total cost.",
        sub: "A lower upfront price doesn't necessarily mean a lower overall cost. Consider monthly service, device payments, promotional credits, taxes, fees, and other applicable charges.",
      },
      {
        icon: HeartHandshake,
        title: "Check trade-in promotions.",
        sub: "If you're upgrading your phone, determine whether your existing device qualifies for a current trade-in offer.",
      },
      {
        icon: ShieldAlert,
        title: "Compare plans before choosing a device.",
        sub: "Some device promotions are tied to specific plans, so choosing the phone first can sometimes limit your options.",
      },
      {
        icon: Truck,
        title: "Look at internet availability.",
        sub: "If you're considering AT&T Fiber, check what's available at your address rather than relying on general service information.",
      },
      {
        icon: Calendar,
        title: "Shop during major promotional periods.",
        sub: "Black Friday, Cyber Monday, back-to-school season, and holiday shopping can bring additional promotions, although offers vary each year.",
      },
      {
        icon: Tag,
        title: "Check CouponsBit before checkout.",
        sub: "Even when you're already on the AT&T website, taking a moment to look for a current coupon, promo, or discount offer can be worthwhile.",
      },
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start">
        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
          <item.icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-black font-black text-sm leading-tight mb-2">
            {item.title}
          </p>
          <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
            {item.sub}
          </p>
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

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          AT&T Promo Code, Coupon Code & Discount Offers
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
        ["iPhone 18 Pro Max Promo", "Up To $1,200 OFF", "New & Existing Customers", "Requires eligible trade-in (any condition); includes free shipping", "iPhone 18 Pro Max"],
        ["Apple Watch Deal", "$300 OFF", "Qualifying Customers", "Save $300 when you buy two eligible Apple Watches", "Apple Watches"],
        ["New Phone Line Deal", "$200 OFF Per Line", "New Line Activations", "Order online or call with an eligible wireless plan", "New Phone Lines"],
        ["Samsung Galaxy Z Fold8 Ultra", "Up To $1,900 OFF", "New & Existing Customers", "Requires eligible plan & trade-in valued at $290+; exp. Sep 17", "Samsung Galaxy Z Fold8 Ultra"],
        ["Buy All Three Bundle", "Up To $1,800 OFF", "All Users", "Purchase all three qualifying products to unlock maximum savings", "Selected Device Bundles"],
        ["Samsung Accessories Sale", "50% OFF", "All Users", "Flat 50% discount on chargers, cases, and compatible accessories", "Samsung Accessories"],
        ["Pixel Accessories Sale", "50% OFF", "All Users", "Flat 50% discount on selected cases, chargers, and accessories", "Google Pixel Accessories"],
        ["iPhone 16 Pro Max Deal", "$1,000 OFF", "All Users", "Save $1,000 when paired with an eligible wireless plan", "iPhone 16 Pro Max"],
        ["Motorola Moto G PLAY 2024", "60% OFF", "All Users", "Flat 60% discount on budget mobile device", "Motorola Moto G PLAY 2024"],
        ["Back To School Sale", "Up To 50% OFF", "All Users", "Seasonal savings across selected phones, accessories, and products", "Phones, Accessories & Services"],
        ["Cases, Screens & Chargers", "20% OFF", "All Users", "Save 20% on eligible protective cases, screen accessories, and chargers", "AT&T Brand Accessories"],
        ["AT&T Fiber Reward Card", "Up To $150 Card", "New Fiber Customers", "Receive an eligible reward card when signing up for home internet", "AT&T Fiber Plans"],
        ["Monthly Service Savings", "20% OFF", "Qualifying Customers", "Save 20% every month on eligible wireless and connectivity services", "Select AT&T Services"],
        ["AT&T Fiber Discount", "Save $20/Month", "All Users", "Save $20/mo on eligible home internet connectivity plans", "AT&T Fiber Internet"],
        ["Cashback Points Offer", "Up To $340 Cashback", "Qualifying Customers", "Earn reward points redeemable toward future purchases or services", "AT&T Rewards Program"],
        ["iPhone 16 Plus Plan", "From $10.99/Month", "All Users", "Monthly installment pricing on eligible wireless terms", "iPhone 16 Plus"],
        ["Unlimited Data Plan", "From $25/Month", "All Users", "Budget-friendly unlimited mobile data option", "Select Wireless Plans"],
        ["5GB Data Plan", "$30/Month", "All Users", "Includes 5GB of monthly mobile data", "Prepaid / Wireless Plans"],
        ["Unlimited Family Plans", "From $30/Mo Per Line", "4-Line Accounts", "Mix and match eligible plans across 4 lines with no annual contract", "AT&T Unlimited Plans"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 18 && "border-b-0")}>
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
            Your phone plan, home internet, connected devices, and streaming services can become a pretty significant part of your monthly budget. So when you're switching carriers, upgrading your phone, adding a new line, or setting up internet at home, it makes sense to look for every available way to save.
          </p>
          <p>
            That’s where checking for an AT&T promo code before you buy can help. AT&T regularly runs promotions around wireless plans, smartphones, internet services, trade-ins, accessories, and new-customer offers. The exact deals change, but taking a few minutes to compare current promotions can help you find an offer that fits what you're already planning to purchase.
          </p>
          <p>
            CouponsBit makes that search easier by bringing together available AT&T coupons, promotional offers, deals, and savings opportunities in one place. Whether you're shopping for a new iPhone, switching your wireless service, or looking for AT&T Fiber, check the latest offers before completing your order.
          </p>

          <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <p>
    Looking for an AT&T promo code before you shop is a simple step that can help you identify available savings before committing to a new plan or device.
  </p>
  <p>
    Start by checking CouponsBit for current AT&T promotions. Then compare those offers with the promotions available directly through AT&T. Since telecom promotions can have specific eligibility requirements, always read the terms carefully before deciding which deal makes the most sense.
  </p>
  <p>
    For example, one offer might be designed for new customers, while another could require an eligible trade-in or a specific wireless plan. Some promotions may focus on a particular device rather than reducing the cost of your entire service.
  </p>
  <p>
    The goal isn't simply to find a code. It's to find the AT&T promo code or offer that provides the best overall value for your particular purchase.
  </p>

  <div className="space-y-8">
    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">AT&T Coupons, Deals & Offers</h3>
      <p>AT&T promotions can take several different forms. Unlike shopping for clothing or household products, where a coupon code may simply reduce the price of an item, telecom savings often depend on the plan, device, trade-in, or services you select.</p>
      <p>Depending on current promotions, shoppers may come across:</p>
      <p><strong>Plan & Line Deals:</strong> Wireless plan promotions, new-line promotions, internet offers, AT&T Fiber promotions, and bundle opportunities.</p>
      <p><strong>Device Savings:</strong> Smartphone offers, trade-in incentives, device upgrade deals, connected-device promotions, and accessory deals.</p>
      <p><strong>Limited-Time Offers:</strong> Seasonal promotions and targeted sales with specific eligibility criteria.</p>
      <p>The terms attached to each offer matter. A deal may require an eligible plan, a qualifying trade-in, a new line, or a particular purchase method. Always check the current requirements rather than assuming every promotion applies to every AT&T customer.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop AT&T Wireless Plans</h3>
      <p>For many customers, the biggest AT&T purchase isn't the phone itself. It's the wireless plan that comes with it.</p>
      <p>AT&T offers different wireless plan options designed around varying data and household needs. Individual users may want a straightforward plan for everyday calls, texts, and mobile data, while families may be more interested in plans that allow multiple lines under one account.</p>
      <p>When comparing wireless options, don't look at the monthly service alone. Think about how much data you actually use, how many people need lines, whether you travel, and whether you need hotspot access or other plan features.</p>
      <p>If you're switching from another carrier, this is also a good time to check whether AT&T is running a new-customer or switcher promotion. A current AT&T promo code may be useful, but the larger savings could come from a plan-specific promotional offer.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Upgrade Your Smartphone & Trade-In Offers</h3>
      <p>Smartphone upgrades are another major reason shoppers visit AT&T. You can shop for popular devices from major manufacturers, including Apple and Samsung, as well as other compatible smartphones.</p>
      <p>Before buying a new phone at full price, look at the available upgrade promotions. AT&T frequently structures device promotions around qualifying plans and trade-ins, so the value of an offer can depend heavily on the phone you're trading in and the service you choose.</p>
      <p>If you have an older smartphone sitting in a drawer, don't automatically assume it's worthless. Trade-in promotions can potentially reduce the overall cost of upgrading, depending on the device, its condition, eligibility requirements, and the promotion running at the time.</p>
      <p>Evaluate the complete offer rather than focusing on one number. Look at the trade-in value, required plan, payment arrangement, promotional credits, and any other conditions.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">AT&T Fiber and Home Internet</h3>
      <p>AT&T isn't just a wireless provider. Its home internet services are another major part of the business.</p>
      <p>AT&T Fiber is the company's fiber-optic internet offering in eligible areas. Fiber internet can be particularly appealing to households with multiple connected devices, people working or studying from home, gamers, streamers, and families that regularly use bandwidth-intensive services.</p>
      <p>Your available internet options depend on your address, so check service availability before making a decision.</p>
      <p>Before signing up, check CouponsBit for any current AT&T internet offers and compare them with promotions displayed on the AT&T website.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Connected Devices, Accessories & Family Plans</h3>
      <p>Depending on current availability, AT&T also sells connected devices such as tablets, smartwatches, mobile hotspots, and essential accessories including cases, chargers, cables, screen protection, and headphones.</p>
      <p>Families often have very different connectivity requirements under one roof. When evaluating family options, calculate the total cost for all required lines rather than comparing only the price of one line, while factoring in device financing, trade-ins, taxes and fees, and promotional credits.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Seasonal AT&T Deals & How to Use a Promo Code</h3>
      <p>During Black Friday, Cyber Monday, back-to-school, and major product launches, AT&T refreshes its promotions around smartphones, wireless service, accessories, and connected devices.</p>
      <p>To use an AT&T promo code, review the eligibility requirements on CouponsBit to confirm whether it applies to new customers, upgrades, specific devices, or plans.</p>
      <p>Visit the AT&T website, add eligible items to your cart, and enter your code in the designated promotional-code field during checkout. Check that the promotion has been recognized before completing your purchase.</p>
    </div>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for AT&T Offers?</h3>
              <p>Shopping for telecommunications services can involve more decisions than buying a regular product. You're not just looking at a sticker price. You're comparing plans, devices, eligibility requirements, trade-ins, promotions, and ongoing costs.</p>
              <p>CouponsBit gives you a convenient starting point for checking available AT&T deals before making that decision.</p>
              <p>Instead of assuming the first offer you see is the best one, you can compare current promotions and look for an AT&T promo code that may provide additional value. This is particularly useful when you're already planning a major purchase such as a new smartphone, multiple wireless lines, or home internet.</p>
              <p>Make checking for an offer part of your normal shopping routine. It takes little time and can help you make a more informed purchase.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Stay Connected Without Overspending</h3>
              <p>Whether you're looking for a new smartphone, switching wireless providers, adding another line, or setting up home internet, AT&T gives you plenty of connectivity options to compare.</p>
              <p>But don't stop at the first offer you see. Before committing to a plan or device, check for an AT&T promo code, compare current AT&T deals, and look at trade-in and plan-specific promotions that could affect your overall cost.</p>
              <p>With CouponsBit, you can make that final savings check part of your shopping routine. Find the offer that fits your purchase, review the terms, and then head to AT&T ready to make a smarter buying decision.</p>
            </div>
          </div>

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
            AT&T Promo Code FAQs
          </h3>
          {[
            { q: "Does AT&T offer promo codes?", a: "AT&T offers promotional deals and incentives that can vary by product, service, customer eligibility, and time of year. Check CouponsBit and AT&T's current promotions before making a purchase." },
            { q: "How can I find an AT&T promo code?", a: "You can check CouponsBit for available AT&T promotional offers before shopping. It's also a good idea to compare any code with the promotions currently offered directly by AT&T." },
            { q: "Can existing AT&T customers use promotional offers?", a: "Some promotions are available to existing customers, while others may be designed specifically for new customers, new lines, upgrades, or qualifying purchases. Always check the individual offer's terms." },
            { q: "Does AT&T offer smartphone deals?", a: "Yes. AT&T regularly promotes smartphones and device offers. Depending on the promotion, eligibility may involve a qualifying wireless plan, trade-in, new line, or other requirements." },
            { q: "Does AT&T have trade-in offers?", a: "AT&T offers trade-in programs and may run additional promotional incentives for eligible devices. The value and terms depend on the phone being traded in and the promotion available at the time." },
            { q: "Does AT&T offer home internet?", a: "Yes. AT&T provides home internet services, including AT&T Fiber in eligible locations. Availability and plan options depend on your address." },
            { q: "When is the best time to look for AT&T deals?", a: "There isn't one guaranteed best time. Major shopping periods such as Black Friday, Cyber Monday, the holiday season, and back-to-school can bring notable promotions, but AT&T also runs offers throughout the year." },
            { q: "Can an AT&T promo code be combined with another offer?", a: "That depends on the specific promotion. Some AT&T offers may not be combinable with other discounts or promotions. Always review the terms before checkout." }
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
            Popular AT&T Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "AT&T Promo Code",
              "Wireless Plan Deals",
              "Trade-In Offers",
              "AT&T Fiber Deals",
              "Phone Upgrade Discount",
              "New Line Promotions",
              "First Order Discount",
              "Seasonal Sale"
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
            Today's Top AT&T Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "DEAL OF THE WEEK", sub: "Up to $1000 OFF Eligible Phones w/ Trade-In" },
              { heading: "AT&T FIBER", sub: "Get a $150 Reward Card with Select Plans" },
              { heading: "UNLIMITED PLANS", sub: "Save $10/mo Per Line on Eligible Unlimited Plans" },
              { heading: "DEVICE BUNDLES", sub: "Buy One, Get One Discounted on Select Accessories" }
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
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop AT&T: ${deal.heading}`}
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
