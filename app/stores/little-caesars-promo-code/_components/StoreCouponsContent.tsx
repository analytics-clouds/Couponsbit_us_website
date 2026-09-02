"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,MapPin, Calculator, Clock,
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
  Pizza,
  Sandwich,
  Drumstick,
  Smartphone,
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
  { id: "d1", label: "NEW", heading: "2 Large Pizzas for $4.99 Each", sub: "Promo Code: PIZZAPIZZA" },
  { id: "d2", label: "SHOP", heading: "$2 OFF Webberoni", sub: "Promo Code: WEBBERONI" },
  { id: "d3", label: "JOIN", heading: "eClub – Get $3 OFF $15+", sub: "Little Caesars eClub" },
  { id: "d4", label: "SAVE", heading: "$5 OFF Orders of $30+", sub: "Code: 5OFF30" },
  { id: "d5", label: "SAVE", heading: "$4 OFF Delivery Orders", sub: "Code: DELIVERY4YOU" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Subway", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295215/subway-logo_eosuh6.webp", dealText: "Verified Deals", href: "/stores/subway-discount-code" },
  { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Up To 30% OFF", href: "/stores/doordash-promo-code" },
  { name: "Uber Eats", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp", dealText: "Up To 60% OFF", href: "/stores/uber-eats-promo-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Verified Deals", href: "/stores/target-discount-code" },
  { name: "Chewy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp", dealText: "Up To 50% OFF", href: "/stores/chewy-promo-code" },
];

const STORE_URL = "https://littlecaesars.com/en-us/";

export default function LittleCaesarsCouponsContent() {
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
              <span className="text-black font-extrabold">Little Caesars</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787571687/little-ceaser-pizza_mbcw0k.webp" alt="Little Caesars" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Little Caesars</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(27.9k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Looking for the latest Little Caesars promo codes, discount code? Explore verified Little Caesars deals and save on pizzas, sides, drinks, and delivery orders across participating USA locations. Get $5 OFF orders of $30+ with code 5OFF30, $4 OFF delivery orders of $24+ with code DELIVERY4YOU, and $2 OFF Webberoni orders of $10+ with code WEBBERONI.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "5", label: "Offers" },
                    { icon: Percent, val: "1.6k", label: "Deals" },
                    { icon: Users, val: "8M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788349790/11_u8vv2j.webp" alt="Little Caesars Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Little Caesars Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "DEAL", value: "$4.99 EA", title: "Little Caesars Promo Code – 2 Large Pizzas for $4.99 Each", desc: "This limited-time offer is available online only at participating Little Caesars locations in the USA.", bullets: ["Use Promo Code: PIZZAPIZZA when placing your online order.", "Grab this Little Caesars pizza deal for an affordable meal with family and friends."] },
                  { label: "SAVE", value: "$2 OFF", title: "Little Caesars Promo Code – $2 OFF Webberoni", desc: "Get $2 OFF Webberoni when you spend $10 or more on your Little Caesars order.", bullets: ["Use Promo Code: WEBBERONI to claim the offer.", "Enjoy this Little Caesars USA deal on your next pizza order."] },
                  { label: "JOIN", value: "ECLUB", title: "Little Caesars eClub – Get $3 OFF $15+", desc: "Join the Little Caesars eClub and get $3 OFF orders of $15 or more.", bullets: ["Receive access to exclusive offers, promotions, and special savings.", "Enjoy additional value on pizzas, sides, and other Little Caesars favorites.", "A convenient way for USA customers to discover future Little Caesars deals."] },
                  { label: "SAVE", value: "$5 OFF", title: "Little Caesars – $5 OFF Orders of $30+", desc: "Save $5 OFF your Little Caesars order when you spend $30 or more.", bullets: ["Add pizzas, sides, drinks, and other menu favorites to meet the minimum order value.", "Enter Code: 5OFF30 at checkout to redeem the offer.", "A great USA deal for family meals, group orders, and pizza nights."] },
                  { label: "SAVE", value: "$4 OFF", title: "Little Caesars – $4 OFF Delivery Orders", desc: "Get $4 OFF qualifying Little Caesars delivery orders of $24 or more.", bullets: ["Order your favorite pizzas and sides for convenient delivery.", "Use Code: DELIVERY4YOU at checkout to receive the discount.", "Save more on qualifying Little Caesars delivery orders in the USA."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[10px] sm:text-3xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Little Caesars: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">Find a Little Caesars Promo Code</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    A Little Caesars promo code can be useful when you are ready to order and want to check whether an additional offer is available. The restaurant regularly runs promotions around specific menu items, ordering occasions, and seasonal campaigns, so available savings can change over time.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Depending on the promotion, an offer may provide a discount on a qualifying pizza, a special price on a combination of menu items, or savings when certain requirements are met. Some deals may also be automatically applied through participating ordering channels rather than requiring a code.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    If you find a Little Caesars coupon or promotional offer, check its conditions before ordering. Some offers may be limited to participating locations, specific products, online orders, carryout, delivery, or a particular period.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Pizza, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Sandwich, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Drumstick, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
  <h3 className="text-black font-black text-lg mb-8">
    How to Find the Best Little Caesars Deals
  </h3>
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 text-justify">
    Finding the best deal is not always about choosing the coupon with the biggest headline discount. Consider the size and contents of your order before selecting an offer.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Ordering",
        sub: "Before placing your order, check CouponsBit for the latest Little Caesars promo codes, coupons, vouchers, discounts, and other available offers. This gives you an opportunity to see whether there is a promotion that fits your order."
      },
      {
        icon: Calculator,
        title: "Compare Deals With Your Order",
        sub: "A discount on one pizza may not be as useful as a meal deal if you are ordering for several people. Look at the qualifying products and calculate which available promotion best matches your needs."
      },
      {
        icon: Clock,
        title: "Check Limited-Time Offers",
        sub: "Restaurant promotions can change quickly. If you see a limited-time Little Caesars offer that fits your order, check its expiration date and restrictions before assuming it will still be available later."
      },
      {
        icon: MapPin,
        title: "Check Participating Locations",
        sub: "Some restaurant promotions may be available only at participating locations. Enter your location and verify that the offer is valid before completing your order."
      },
      {
        icon: Users,
        title: "Look for Group-Order Savings",
        sub: "If you are feeding several people, compare offers based on the entire order rather than one item. Pizza, wings, sides, and drinks can add up, so a qualifying bundle or combination promotion may provide better overall value."
      }
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start text-justify">
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
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Little Caesars Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[850px] border-collapse text-left">
      <thead>
        <tr className="bg-[#056BFA]">
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Offer</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Discount / Price</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Eligibility</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Key Conditions</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Applicable On</th>
        </tr>
      </thead>
      <tbody className="text-[14px] font-bold text-gray-600">
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            2 Large Pizzas Special Deal
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $4.99 Each
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Online only with code: PIZZAPIZZA
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            2 Large Pizzas at participating locations
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Webberoni Discount
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $2 OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Use code: WEBBERONI on orders $10+
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Webberoni pizza purchases
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Little Caesars eClub Signup
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $3 OFF $15+
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            eClub Members
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Requires eClub registration, min spend $15
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Pizzas, sides, &amp; menu favorites
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            $5 OFF Family &amp; Group Orders
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $5 OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Use code: 5OFF30 on orders $30+
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Full menu including pizzas, sides, &amp; drinks
          </td>
        </tr>
        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Delivery Savings Discount
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $4 OFF Delivery
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Use code: DELIVERY4YOU on orders $24+
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Qualifying Little Caesars delivery orders
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Craving pizza without spending more than you need to? Little Caesars is a popular American pizza chain known for convenient carryout, delivery, and a menu built around pizza, wings, sides, and other quick meal options. Whether you are ordering a classic pizza for a family dinner, grabbing a meal for game night, or looking for something easy to share with friends, Little Caesars gives customers plenty of choices.
          </p>
          <p>
            Before placing an order, it is worth checking for a Little Caesars promo code on CouponsBit. A current promotion can make your order more affordable, especially when you are ordering multiple pizzas, adding sides, or feeding a group. Along with promo codes, shoppers may find Little Caesars coupon codes, discount offers, vouchers, limited-time deals, and other ways to save.
          </p>
          <p>
            CouponsBit helps customers find these opportunities before they complete their purchase, making it easier to compare available offers and choose a deal that suits their order.
          </p>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Little Caesars Coupon Code and Discount Offers</h3>
    <p>
      When looking for a Little Caesars coupon code, don't limit your search to one type of promotion. Restaurant chains frequently use different promotional formats to encourage customers to order particular menu combinations or try limited-time products.
    </p>
    <p>You may find savings connected to:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Individual pizzas",
        "Pizza & side combos",
        "Family or group meals",
        "Wings & sides",
        "Online ordering",
        "Carryout orders",
        "Delivery orders",
        "Limited-time items",
        "Seasonal promotions",
        "App / digital orders",
        "Location offers"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      A Little Caesars discount code may be especially useful when your order contains several qualifying items. However, the best offer depends on the products in your cart and the terms of the promotion.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">What Can You Order at Little Caesars?</h3>
    <p>
      Little Caesars is best known for pizza, but its menu includes more than traditional pizza options. Customers can build an order around pizza and add sides, wings, drinks, desserts, and other menu items depending on their location.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      Because menus can vary between restaurants, the exact selection available to you may depend on the Little Caesars location you choose.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Pizza</h4>
    <p>
      Pizza is the centerpiece of the Little Caesars menu. Customers can choose from different pizza varieties, crust styles, toppings, and specialty combinations, depending on the current menu and participating location.
    </p>
    <p>
      The brand's menu has historically included popular options such as pepperoni pizza, cheese pizza, sausage pizza, and specialty pizzas featuring combinations of meats, vegetables, and other toppings.
    </p>
    <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
      If pizza is the main reason you are ordering, check Couponsbit for a Little Caesars promo code before finalizing your order.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Crazy Bread and Sides</h4>
    <p>
      Little Caesars is also known for Crazy Bread and other side options that can turn a pizza order into a larger meal. Customers can add bread, dips, cheese-based sides, and other options depending on the location.
    </p>
    <p>
      A side-focused promotion can sometimes be more useful than a general discount, particularly if you are ordering pizza for a group and want to add extras.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Wings</h4>
    <p>
      Chicken wings are another popular part of the Little Caesars menu. Depending on the location and current menu, customers may find different flavors and preparation options.
    </p>
    <p>
      If your order includes both pizza and wings, look for a deal that applies to the overall combination rather than automatically choosing the first coupon you find.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Drinks</h4>
    <p>
      Soft drinks and other beverages are available at participating Little Caesars restaurants. Adding drinks can be convenient when ordering for a group, particularly for parties, family meals, or sporting events.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Desserts</h4>
    <p>
      Little Caesars also offers dessert options that can vary by location and current availability. A dessert can be an easy addition when ordering for a celebration or group gathering.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Little Caesars Deals for Families and Groups</h3>
    <p>
      Pizza is naturally suited to group occasions, and Little Caesars promotions can be particularly useful when you are ordering multiple menu items at once.
    </p>
    <p>
      Families may order several pizzas along with Crazy Bread, wings, drinks, or other sides. Rather than looking only for a discount on one item, compare the available offers with the full order.
    </p>
    <p>
      For example, a combination promotion may be more valuable than a standalone Little Caesars coupon code if you are already planning to purchase several qualifying items.
    </p>
    <p>
      This is also why it helps to check the terms of each promotion. An offer designed for one pizza may not provide the same value as a deal built around multiple menu items.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Little Caesars Carryout and Delivery</h3>
    <p>
      Little Caesars gives customers different ways to receive their orders, including carryout and delivery options at participating locations.
    </p>
    <p>
      Carryout can be useful when you are looking for a quick pickup, while delivery can make ordering more convenient when you are staying at home or feeding a group.
    </p>
    <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
      When looking for a Little Caesars discount code, check whether the offer applies specifically to carryout, delivery, online orders, or another ordering method. Not every promotion will work across every channel.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Little Caesars App and Online Ordering Deals</h3>
    <p>
      Digital ordering can make it easier to browse available menu items and promotions before completing an order. Little Caesars' online ordering experience allows customers to select a location, build an order, and review applicable offers.
    </p>
    <p>
      Before completing an online order, check Couponsbit for a current Little Caesars promo code or other available promotion. If a code is listed, make sure you understand whether it must be entered manually or whether the offer is connected to a particular online ordering promotion.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Little Caesars Seasonal Promotions</h3>
    <p>
      Like many major US food brands, Little Caesars uses seasonal and event-based promotions to attract customers throughout the year. These offers can change according to holidays, sports seasons, product launches, and other major occasions.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Super Bowl & Game-Day Offers</h5>
        <p className="text-sm">
          Major sporting events feature game-day promotions encouraging group ordering, pizza-and-wing combos, and large-format deals.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Holiday Promotions</h5>
        <p className="text-sm">
          Special offers around New Year's, Halloween, and other holiday events when group ordering interest peaks.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Limited-Time Menu Items</h5>
        <p className="text-sm">
          Short-term product rollouts often debut alongside specific promo codes and bundle pricing.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">National Pizza Month</h5>
        <p className="text-sm">
          October brings designated nationwide marketing, menu highlights, and special customer offers.
        </p>
      </div>
    </div>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Little Caesars Promo Code</h3>
            <p className="text-gray-700 font-bold mb-6">
              If you find a Little Caesars promo code through CouponsBit, the process of using it is generally straightforward:
            </p>
            <div className="space-y-6">
              {[
                "Select the Little Caesars offer you want to use.",
                "Follow the offer to the appropriate Little Caesars ordering page.",
                "Choose your preferred restaurant location.",
                "Select your pizza, sides, wings, drinks, or other menu items.",
                "Add the qualifying products to your order.",
                "Enter the promotional code in the applicable field if a code is required.",
                "Apply the offer and check that the promotion has been accepted.",
                "Review your order and complete checkout.",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 font-bold leading-relaxed pt-4">
              If your code does not apply, check the offer's terms. It may be restricted to specific menu items, locations, ordering methods, or dates.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Little Caesars Offers?</h3>
            <p>
              CouponsBit is designed to help shoppers find savings before they complete an online purchase. Instead of searching separately for a Little Caesars coupon code, discount code, voucher, and other offers, customers can check CouponsBit for available promotions in one place.
            </p>
            <p>
              The goal is simple: help customers find a relevant offer before they order.
            </p>
            <p>
              Whether you are ordering a single pizza for dinner or putting together a larger meal for family and friends, checking for a Little Caesars promo code first can help you identify potential savings.
            </p>
            <p>
              CouponsBit also helps shoppers understand that the best deal is not always a traditional coupon. Depending on the order, a limited-time promotion, meal deal, online offer, or location-specific discount may provide better value.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Little Caesars Order</h3>
            <p>
              Little Caesars makes it easy to build a meal around pizza, with options for sides, wings, drinks, and other menu favorites. Whether you are ordering dinner for your household, preparing for game day, or feeding a larger group, the right promotion can make your order more affordable.
            </p>
            <p>
              Before placing your next order, check CouponsBit for the latest Little Caesars promo code along with available coupon codes, discount offers, vouchers, and other deals. Compare the options with your cart, check the terms, and choose the offer that provides the best fit for your order.
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Little Caesars Promo Codes</h3>
          {[
            { q: "Does Little Caesars have promo codes?", a: "Yes. Little Caesars uses promotional offers that can provide savings on qualifying menu items or orders. Available promotions and their conditions can change, so it is worth checking for current offers before ordering." },
            { q: "Where can I find a Little Caesars promo code?", a: "You can check CouponsBit for available Little Caesars promo codes, coupon codes, discount offers, vouchers, and other deals before placing your order." },
            { q: "How do I use a Little Caesars coupon code?", a: "Choose your Little Caesars location, add eligible menu items to your order, and enter the coupon or promotional code in the appropriate field if one is required. Confirm that the offer has been applied before completing checkout." },
            { q: "Why isn't my Little Caesars promo code working?", a: "A promotional code may not work if it has expired, applies only to specific menu items, is restricted to participating locations, requires a particular ordering method, or has other conditions. Review the offer's terms before trying again." },
            { q: "Can I use a Little Caesars discount code on any pizza?", a: "Not necessarily. Some promotions apply only to specific pizzas, sizes, menu combinations, or participating locations. Check the conditions of the individual offer before ordering." },
            { q: "Does Little Caesars offer online deals?", a: "Little Caesars provides online ordering and can feature digital promotions and special offers. The availability of specific deals can vary, so check the current promotions before placing an online order." },
            { q: "Does Little Caesars offer deals for large orders?", a: "Little Caesars promotions can vary, but group orders may qualify for certain combination or promotional offers depending on the current campaign. If you are ordering for a family or event, compare available deals against your complete order." },
            { q: "Does Little Caesars have seasonal promotions?", a: "Yes. Like other major US restaurant brands, Little Caesars can run promotions around holidays, sporting events, limited-time menu launches, and other seasonal occasions. The specific offers available depend on the current campaign." },
            { q: "Can I use a Little Caesars voucher online?", a: "It depends on the type and terms of the voucher. Some offers may be designed specifically for online ordering, while others may have restrictions on how and where they can be redeemed." },
            { q: "How can I save more on Little Caesars?", a: "Start by checking CouponsBit for the latest Little Caesars promo code, then compare available discounts, coupons, vouchers, combination deals, and limited-time offers with your planned order. Also verify the location and eligibility requirements before completing your purchase." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Little Caesars Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Pizza Deals", "Crazy Bread", "Wings Offers", "Little Caesars Promo Code", "Meal Deals", "Family Combos", "Delivery Deals", "Online Offers"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Little Caesars Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">L</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Little Caesars: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
