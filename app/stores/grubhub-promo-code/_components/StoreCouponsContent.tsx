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
  ChevronDown, DollarSign, Receipt, Calendar,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Shirt,
  Truck,
  Utensils,
  Sparkles,
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
  { id: "d1", label: "NEW", heading: "20% OFF Your First Order", sub: "Latest Deals" },
  { id: "d2", label: "DEAL", heading: "$8 OFF Orders of $30+", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "$5 OFF Lunch Specials on $15+ Orders", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "$5 OFF Pizza Orders of $25+", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "$5 OFF Mexican Food Orders of $25+", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Up To 30% OFF", href: "/stores/doordash-promo-code" },
  { name: "Uber Eats", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp", dealText: "Up To 60% OFF", href: "/stores/uber-eats-promo-code" },
  { name: "Subway", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295215/subway-logo_eosuh6.webp", dealText: "Up To 20% OFF", href: "/stores/subway-discount-code" },
  { name: "Little Caesars", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/little-ceaser-pizza_mbcw0k.webp", dealText: "Up To 20% OFF", href: "/stores/little-caesars-promo-code" },
  { name: "Burger King", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/burger-king-logo_m4nwmx.webp", dealText: "Up To 50% OFF", href: "/stores/burger-king-promo-code" },
  { name: "Kroger Digital", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/kroger-logo_berwr1.webp", dealText: "Up To 50% OFF", href: "/stores/kroger-discount-code" },
];

const STORE_URL = "https://www.grubhub.com";

export default function GrubhubCouponsContent() {
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
              <span className="text-black font-extrabold">Grubhub</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788868873/grubhub-logo_zzagn2.webp" alt="Grubhub" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Grubhub Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-30" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(18.4k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Grubhub promo codes and Grubhub discount codes at Maxiku Offers. Save 20% OFF your first order, enjoy unlimited FREE delivery with Grubhub+, get $8 OFF dinner orders, and save $5 on pizza, lunch, and Mexican food from participating restaurants.
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
                    { icon: Percent, val: "1K+", label: "Deals" },
                    { icon: Users, val: "3M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789559424/35_yf1ghr.webp" alt="Grubhub Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Grubhub Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "NEW", value: "20% OFF", title: "Grubhub Promo Code – 20% OFF Your First Order", desc: "New Grubhub users can enjoy 20% OFF their first eligible food order.", bullets: ["This introductory offer is exclusively available to new users in the USA.", "No promo code is required to claim the discount.", "Order your favorite meals and enjoy your first Grubhub delivery with extra savings."] },
                  { label: "DEAL", value: "$8 OFF", title: "Grubhub Dinner Offer – $8 OFF Orders of $30+", desc: "Get $8 OFF when you spend $30 or more on an eligible Grubhub dinner order.", bullets: ["Save on your favorite dinner meals from participating restaurants across the USA.", "The offer is valid once per diner and cannot be combined with other offers.", "Meet the $30 minimum order value and enjoy extra savings on your next dinner."] },
                  { label: "DEAL", value: "$5 OFF", title: "Grubhub Promo Code – $5 OFF Lunch Specials on $15+ Orders", desc: "Get a flat $5 OFF Grubhub lunch specials when you spend $15 or more.", bullets: ["Enjoy savings on popular lunch options including pasta, Mexican food and more.", "Meet the minimum order value of $15 to unlock the discount.", "Order your favorite lunch from participating restaurants across the USA and save."] },
                  { label: "DEAL", value: "$5 OFF", title: "Grubhub Promo Code – $5 OFF Pizza Orders of $25+", desc: "Save a flat $5 on eligible Grubhub pizza orders of $25 or more.", bullets: ["Enjoy delicious pizzas from participating restaurants across the USA.", "Restaurants may include Papa Johns, Tumbys, Blaze Pizza, Para Pizza and more.", "Meet the $25 minimum order requirement and enjoy extra savings on your pizza order."] },
                  { label: "DEAL", value: "$5 OFF", title: "Grubhub Promo Code – $5 OFF Mexican Food Orders of $25+", desc: "Get a flat $5 OFF eligible Mexican food orders of $25 or more on Grubhub.", bullets: ["Explore popular Mexican dishes including tacos, Alfredo, tortas, mariscos and more.", "Meet the minimum order value of $25 to qualify for the offer.", "Enjoy your favorite Mexican cuisine from participating restaurants across the USA."] },
                  { label: "DEAL", value: "FREE DELIVERY", title: "Grubhub Hamburgers – Orders Starting at $25 + FREE Delivery", desc: "Enjoy delicious hamburger options on Grubhub with prices starting from $25.", bullets: ["Get FREE delivery on eligible hamburger orders with no minimum order value.", "Choose from popular restaurants and chains including McDonald's, Jack in the Box, Farmer Boys, Wendy's and more.", "Order your favorite burgers through Grubhub and enjoy convenient delivery across the USA."] },
                  { label: "DEAL", value: "$5 OFF", title: "Grubhub Famosa Taqueria – $5 OFF Orders of $75+", desc: "Save $5 when your Famosa Taqueria order total reaches $75 or more.", bullets: ["Enjoy popular Mexican favorites including nachos, birria, tacos and more.", "No promo code is required to claim the $5 discount.", "This offer is open to everyone and is available on eligible orders."] },
                  { label: "DEAL", value: "FREE DELIVERY", title: "Grubhub+ Membership – Unlimited FREE Delivery", desc: "Join Grubhub+ and enjoy unlimited FREE delivery fees on eligible orders from participating restaurants.", bullets: ["Get convenient delivery savings when ordering your favorite meals through Grubhub.", "Grubhub+ costs $9.99/month after the trial period.", "Cancel anytime and enjoy membership benefits on eligible orders across the USA."] },
                  { label: "DEAL", value: "FREE DELIVERY", title: "Grubhub+ Membership – Unlimited FREE Delivery for Eligible Orders", desc: "Sign up for Grubhub+ and enjoy unlimited FREE delivery fees on eligible restaurant orders.", bullets: ["Save on delivery costs while ordering food from your favorite participating restaurants.", "Membership is available for just $9.99/month after the trial period.", "Cancel anytime and enjoy convenient food delivery savings across the USA."] },
                  { label: "DEAL", value: "FROM $2", title: "Grubhub Breakfast Deals – Meals Starting From $2", desc: "Enjoy Grubhub breakfast deals with selected items starting from just $2.", bullets: ["Find popular breakfast options including burritos, muffins and hash browns.", "Explore affordable breakfast choices from participating restaurants across the USA.", "Order your favorite breakfast and enjoy delicious food at budget-friendly prices."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Grubhub: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Grubhub?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Grubhub is a US-based online food ordering and delivery marketplace that connects customers with restaurants, merchants, and convenience retailers. Instead of preparing food itself, Grubhub provides the technology and platform that allows diners to browse menus, place orders, and choose available delivery or pickup options from participating businesses.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform was created to make ordering from local restaurants easier. Today, customers can use the Grubhub website or mobile app to discover food nearby, browse different cuisines, order meals, and track eligible deliveries. Grubhub's marketplace includes a broad range of restaurants and food choices, from everyday fast food to local independent restaurants and different international cuisines.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Grubhub is particularly useful for people who want variety without having to visit several restaurant websites individually. Enter your location, explore available restaurants, choose your meal, and place your order through the platform.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The company also offers services and programs designed around food ordering, delivery, pickup, restaurant technology, catering, and membership-related savings.

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
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Search, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Sparkles, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                        { icon: Utensils, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
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
    How to Find Better Grubhub Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Ordering",
        sub: "Before placing your order, check CouponsBit for the latest Grubhub promo code, coupon codes, discount offers, vouchers, and other promotions.",
      },
      {
        icon: Utensils,
        title: "Compare Restaurant Promotions",
        sub: "If you're flexible about the restaurant, compare nearby options. A restaurant-specific offer may provide better value than a general promotional code.",
      },
      {
        icon: ShoppingBag,
        title: "Compare Pickup and Delivery",
        sub: "If you don't need delivery, check the pickup option. Depending on the restaurant and promotion, the overall cost may differ.",
      },
      {
        icon: DollarSign,
        title: "Check Minimum Order Requirements",
        sub: "Some offers require you to spend a certain amount before the promotion applies. Make sure your order meets the requirement before assuming the discount will appear.",
      },
      {
        icon: Users,
        title: "Consider Group Orders",
        sub: "When ordering for family or friends, a percentage-based promotion can sometimes provide greater savings because the eligible order total is higher.",
      },
      {
        icon: Receipt,
        title: "Look Beyond the Headline Discount",
        sub: "A large discount doesn't always mean a lower final bill. Delivery fees, service charges, taxes, and other costs can affect what you actually pay.",
      },
      {
        icon: Calendar,
        title: "Watch Major Events",
        sub: "Super Bowl, Valentine's Day, Mother's Day, Fourth of July, Halloween, Black Friday, Cyber Monday, and the holiday season can all be useful periods to check for food delivery promotions.",
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
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Grubhub Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border border-gray-200 bg-white shadow-sm">
  <table className="w-full min-w-[850px] border-collapse text-left">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Offer
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Discount / Price
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Eligibility
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Key Conditions
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Applicable On
        </th>
      </tr>
    </thead>
    <tbody className="text-[14px] font-bold text-gray-600">
      {[
        {
          title: "Grubhub Promo Code – 20% OFF Your First Order",
          discount: "20% OFF",
          eligibility: "New USA Users",
          conditions: "Exclusively for new users; no promo code required",
          applicableOn: "First Food Order"
        },
        {
          title: "Grubhub Dinner Offer – $8 OFF Orders of $30+",
          discount: "$8 OFF",
          eligibility: "All USA Users",
          conditions: "Min. order value $30; valid once per diner at participating restaurants",
          applicableOn: "Dinner Orders"
        },
        {
          title: "Grubhub Promo Code – $5 OFF Lunch Specials on $15+ Orders",
          discount: "$5 OFF",
          eligibility: "USA Users",
          conditions: "Min. order value $15 on popular lunch specials",
          applicableOn: "Lunch Specials"
        },
        {
          title: "Grubhub Promo Code – $5 OFF Pizza Orders of $25+",
          discount: "$5 OFF",
          eligibility: "USA Users",
          conditions: "Min. order value $25; valid at Papa Johns, Blaze Pizza & more",
          applicableOn: "Pizza Orders"
        },
        {
          title: "Grubhub Promo Code – $5 OFF Mexican Food Orders of $25+",
          discount: "$5 OFF",
          eligibility: "USA Users",
          conditions: "Min. order value $25 on eligible Mexican food orders",
          applicableOn: "Mexican Food"
        },
        {
          title: "Grubhub Hamburgers – Orders Starting at $25 + FREE Delivery",
          discount: "FREE Delivery",
          eligibility: "All Users",
          conditions: "Orders starting from $25 at McDonald's, Wendy's, Jack in the Box & more",
          applicableOn: "Hamburgers"
        },
        {
          title: "Grubhub Famosa Taqueria – $5 OFF Orders of $75+",
          discount: "$5 OFF",
          eligibility: "All Users",
          conditions: "Min. order value $75; no promo code required",
          applicableOn: "Famosa Taqueria"
        },
        {
          title: "Grubhub+ Membership – Unlimited FREE Delivery",
          discount: "Free Delivery / $9.99/mo",
          eligibility: "All Users",
          conditions: "Includes free trial, $9.99/mo after; cancel anytime",
          applicableOn: "Grubhub+ Membership"
        },
        {
          title: "Grubhub+ Membership – Unlimited FREE Delivery for Eligible Orders",
          discount: "Free Delivery / $9.99/mo",
          eligibility: "Eligible Orders",
          conditions: "Unlimited free delivery fees on participating restaurant orders",
          applicableOn: "Grubhub+ Membership"
        },
        {
          title: "Grubhub Breakfast Deals – Meals Starting From $2",
          discount: "Starting at $2",
          eligibility: "USA Users",
          conditions: "Valid on selected items including burritos, muffins & hash browns",
          applicableOn: "Breakfast Menu"
        }
      ].map((item, index) => (
        <tr
          key={index}
          className="border-b border-gray-200 transition-colors hover:bg-gray-50/50 last:border-b-0"
        >
          <td className="max-w-[220px] p-5 align-middle font-black text-black">
            {item.title}
          </td>
          <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
            {item.discount}
          </td>
          <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
            {item.eligibility}
          </td>
          <td className="max-w-[220px] p-5 align-middle text-gray-500 font-medium">
            {item.conditions}
          </td>
          <td className="max-w-[180px] p-5 align-middle text-gray-500">
            {item.applicableOn}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            When you're hungry, the last thing you want to do is spend more than necessary on your meal. Whether you're ordering lunch during a busy workday, grabbing dinner after a long day, or getting food for a group of friends, Grubhub makes it easy to explore nearby restaurants and order online.
          </p>
          <p>
            Before placing your next order, checking for a Grubhub promo code on CouponsBit can help you find an opportunity to save. Along with promotional codes, you can discover Grubhub coupon codes, discount offers, vouchers, restaurant deals, delivery promotions, and other ways to make your food order more affordable.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a Grubhub Promo Code</h3>
    <p>A Grubhub promo code can help reduce the cost of an eligible food order, depending on the terms of the promotion. Grubhub runs different types of offers, and availability can depend on factors such as your location, restaurant, order value, customer eligibility, and promotional period.</p>
    <p>If you're about to order, check CouponsBit before heading to checkout. You may find a promotional code that works with your order or another offer that provides better value.</p>
    <p>Keep in mind that not every code applies to every restaurant or order. Some promotions may require a minimum purchase, apply only to participating restaurants, or be available only to specific customers.</p>
    <p>Always review the offer conditions before placing your order.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Grubhub Coupon Code and Discount Offers</h3>
    <p>Searching for a Grubhub coupon code doesn't mean you're limited to one type of saving. Depending on what's available, you may find percentage discounts, fixed-value offers, restaurant-specific deals, delivery promotions, membership benefits, or other limited-time incentives.</p>
    <p>The right option depends on what you're ordering.</p>
    <p>For example, a percentage-based discount may be more useful when ordering dinner for several people, while a fixed discount could work well for a smaller lunch. If you're ordering from a restaurant with delivery fees, an eligible delivery promotion may also make a noticeable difference to the final cost.</p>
    <p>Instead of automatically using the first offer you find, compare the promotion with your order total and check the conditions attached to it.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Order From Restaurants on Grubhub</h3>
    <p>One of Grubhub's biggest strengths is its variety. Customers can browse restaurants based on cuisine, dish, location, and other preferences. Depending on where you live, you may find everything from local neighborhood restaurants to familiar national chains.</p>
    <p><strong>Pizza:</strong> Pizza is a popular choice for delivery, whether you're ordering dinner for yourself or feeding a group.</p>
    <p>You can browse different pizza restaurants and explore options ranging from classic cheese and pepperoni to specialty pizzas, sides, desserts, and drinks.</p>
    <p>If you're placing a larger pizza order, checking for a Grubhub discount code beforehand can be worthwhile.</p>
    <p><strong>Burgers and Fast Food:</strong> Looking for a quick burger, fries, chicken sandwich, or other fast-food favorite? Grubhub lets customers browse participating restaurants and order online.</p>
    <p>Depending on your location, you may find both major chains and local restaurants offering similar favorites.</p>
    <p><strong>Mexican Food:</strong> Tacos, burritos, quesadillas, nachos, bowls, and other Mexican dishes are widely available through participating restaurants.</p>
    <p>You can compare nearby menus and look for restaurant-specific offers before choosing where to order.</p>
    <p><strong>Chinese Food:</strong> Chinese food is another convenient option for group orders. Depending on your area, you may find everything from fried rice and noodles to dumplings, combination meals, and specialty dishes.</p>
    <p><strong>Indian Food:</strong> Grubhub also features participating Indian restaurants, where customers may find curries, biryani, naan, tandoori dishes, vegetarian meals, and other favorites.</p>
    <p><strong>Japanese and Asian Cuisine:</strong> Sushi, ramen, poke, teriyaki, Thai food, Korean dishes, and other Asian cuisines can also be available depending on your location.</p>
    <p><strong>Breakfast and Brunch:</strong> Grubhub isn't only for lunch and dinner. Customers can also find participating restaurants offering breakfast, coffee, pastries, sandwiches, pancakes, and brunch favorites.</p>
    <p><strong>Healthy and Vegetarian Options:</strong> Customers looking for salads, bowls, vegetarian meals, plant-based options, gluten-free dishes, and other dietary preferences can explore available menus and restaurants in their area.</p>
    <p>Because menus vary by restaurant, always check the individual listing for current ingredients and dietary information.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Grubhub Delivery and Pickup</h3>
    <p>Grubhub allows customers to choose between available delivery and pickup options depending on the restaurant and location.</p>
    <p>Delivery is convenient when you want your food brought to your home, office, hotel, or another eligible address.</p>
    <p>Pickup can be useful when you're already nearby and prefer to collect the order yourself. It can also be worth comparing pickup with delivery when you're trying to keep the overall cost of your meal down.</p>
    <p>Before completing your order, look at the final total rather than focusing only on the menu price.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Grubhub+ and Additional Savings</h3>
    <p>Frequent Grubhub customers can also explore Grubhub+, the platform's membership program. Eligible benefits can include savings related to delivery and service fees at participating restaurants. Grubhub currently promotes Grubhub+ as a way to save on eligible orders, with membership availability also offered through certain partnerships.</p>
    <p>If you order food through Grubhub regularly, compare the potential value of membership benefits with the individual promotions available for your order.</p>
    <p>A Grubhub promo code may be useful for a particular campaign, while Grubhub+ benefits may make more sense for frequent orders.</p>
    <p>Always check the current membership terms and participating restaurants before relying on a particular benefit.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Grubhub Restaurant Deals</h3>
    <p>Restaurant-specific promotions can be particularly useful when you already know where you want to order from.</p>
    <p>Participating restaurants may offer discounts on selected menu items, special meal promotions, reduced delivery fees, or other limited-time offers.</p>
    <p>The availability of these deals can vary by restaurant and location, so browse the current restaurant listing before placing your order.</p>
    <p>If you're flexible about where you eat, comparing several nearby restaurants can also help you find a better combination of food, reviews, delivery time, and promotional savings.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Grubhub Promotions for New Customers</h3>
    <p>From time to time, Grubhub may offer introductory promotions designed for new diners. These can provide an incentive to place your first order through the platform.</p>
    <p>If you're ordering from Grubhub for the first time, check CouponsBit for any available new-customer offer before completing your order.</p>
    <p>Read the terms carefully because introductory promotions can have specific requirements, including minimum order values, eligible restaurants, expiration dates, and customer restrictions.</p>
    <p>Existing customers should also check for current promotions because not every Grubhub offer is limited to first-time users.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Grubhub Seasonal Promotions and Major US Events</h3>
    <p>Food delivery can become especially useful around major US holidays, sporting events, shopping periods, and celebrations. These occasions can also be good times to watch for restaurant promotions.</p>
    <p><strong>Super Bowl:</strong> The Super Bowl is one of the biggest food-ordering occasions in the US. Pizza, wings, burgers, fries, nachos, sandwiches, and other shareable meals are popular choices for game-day gatherings.</p>
    <p>If you're feeding a group, check for a Grubhub coupon code before placing your order.</p>
    <p><strong>Valentine's Day:</strong> Valentine's Day can be a good opportunity to order a meal at home instead of dealing with crowded restaurants. Depending on your location, you can explore options ranging from pizza and sushi to desserts and full-course dinners.</p>
    <p><strong>Mother's Day:</strong> Families celebrating Mother's Day can look for brunch, dinner, desserts, and other restaurant options available for delivery or pickup.</p>
    <p><strong>Father's Day:</strong> From burgers and barbecue to pizza and steaks, Father's Day can be an opportunity to order a meal that suits the occasion while avoiding the need to cook.</p>
    <p><strong>Memorial Day:</strong> Memorial Day weekend often brings gatherings and outdoor celebrations. Group-friendly food such as burgers, barbecue, pizza, sandwiches, and wings can be popular choices.</p>
    <p><strong>Fourth of July:</strong> Independence Day is another major gathering occasion. Customers can browse restaurants for burgers, barbecue, pizza, snacks, desserts, and other foods suitable for groups.</p>
    <p><strong>Back-to-School Season:</strong> Once school starts, busy families often have less time for meal preparation. Grubhub can be useful for those evenings when a quick delivery or pickup order is more convenient.</p>
    <p><strong>Halloween:</strong> Halloween can mean a busy evening of trick-or-treating, parties, and gatherings. Ordering pizza, burgers, snacks, or other easy-to-share food can make the night simpler.</p>
    <p><strong>Thanksgiving:</strong> While Thanksgiving is traditionally associated with home cooking, food delivery can still be useful before the holiday, after celebrations, or when you're looking for desserts, snacks, or an alternative meal.</p>
    <p><strong>Black Friday:</strong> After spending hours shopping on Black Friday, ordering dinner can be a convenient way to finish the day.</p>
    <p>Check CouponsBit for Grubhub offers and restaurant promotions before placing your order.</p>
    <p><strong>Cyber Monday:</strong> Cyber Monday is another online-focused shopping event and can be a useful time to check Grubhub for available food delivery promotions.</p>
    <p><strong>Christmas and Holiday Season:</strong> The holiday season can bring plenty of reasons to order food, whether you're taking a break from cooking, hosting guests, shopping for gifts, or simply enjoying a quiet meal at home.</p>
    <p>Check current promotions before ordering, especially if you're placing a larger group order.</p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Grubhub Promo Code</h3>
            <p className="text-gray-600 font-medium -mt-4 mb-4">
              If you find a Grubhub promo code through CouponsBit, follow the instructions associated with the specific offer. A typical process includes:
            </p>
            <div className="space-y-6">
              {[
                "Choose the Grubhub offer you want to use.",
                "Visit Grubhub and enter your delivery location.",
                "Browse restaurants and available menus.",
                "Select your food and add it to your cart.",
                "Review your order and available promotions.",
                "Enter the applicable promo code in the designated field.",
                "Apply the code.",
                "Confirm that the expected discount has been reflected.",
                "Review delivery fees, service charges, taxes, tip, and the final order total.",
                "Complete your order."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium italic mt-4 pt-4 border-t border-gray-100">
              If the code doesn't work, check whether it has expired or whether your order meets the promotion's requirements.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Grubhub Offers?</h3>
            <p>
              Food delivery is already designed to make ordering easier, and finding a deal shouldn't have to be complicated either.
            </p>
            <p>
              CouponsBit gives shoppers a convenient place to check for a Grubhub promo code before placing an order. You can also explore coupon codes, discount offers, vouchers, restaurant deals, and other promotions.
            </p>
            <p>
              The most useful offer depends on your order. A small discount may be enough for a quick lunch, while a larger percentage-based promotion could be more valuable for a family dinner or group order.
            </p>
            <p>
              By checking available promotions before checkout, you can compare your options and make a more informed decision instead of automatically paying the standard amount.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Grubhub Order</h3>
            <p>
              Grubhub makes it easier to discover restaurants, explore different cuisines, and order meals for delivery or pickup from participating businesses across the US. From a quick lunch to a family dinner or a big game-day spread, there's plenty to explore.
            </p>
            <p>
              Because promotions can change regularly, checking for savings before placing your order is worth making part of your routine.
            </p>
            <p>
              Before you check out, visit CouponsBit to look for the latest Grubhub promo code, along with coupon codes, discount offers, vouchers, restaurant deals, and other promotions. Compare the available options with your order, review the terms, and choose the offer that makes the most sense for your meal.
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
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Grubhub Promo Codes</h3>
          {[
            { q: "Does Grubhub offer promo codes?", a: "Yes. Grubhub runs promotional campaigns that can include promo codes, discounts, restaurant offers, delivery promotions, and other savings opportunities. Availability and eligibility vary." },
            { q: "Where can I find a Grubhub promo code?", a: "You can check CouponsBit for available Grubhub promo codes, coupon codes, discounts, vouchers, restaurant deals, and other promotions before ordering." },
            { q: "How do I use a Grubhub coupon code?", a: "Choose your restaurant and food, add the items to your cart, proceed toward checkout, and enter the applicable coupon code in the promotional field. Make sure the discount has been applied before completing your order." },
            { q: "Why isn't my Grubhub promo code working?", a: "The code may have expired, or your order may not meet the promotion's requirements. Restrictions can include participating restaurants, locations, minimum order amounts, customer eligibility, or promotional periods." },
            { q: "Can I use a Grubhub discount code at any restaurant?", a: "Not necessarily. Some promotions apply only to participating restaurants or selected orders. Check the terms of the individual offer before ordering." },
            { q: "Does Grubhub have restaurant-specific deals?", a: "Yes. Participating restaurants can feature their own promotions and offers. These deals may vary depending on the restaurant and your location." },
            { q: "Does Grubhub offer delivery savings?", a: "Grubhub offers different delivery-related promotions and membership benefits. Grubhub+ can also provide eligible members with delivery and service-fee benefits at participating restaurants." },
            { q: "What is Grubhub+?", a: "Grubhub+ is Grubhub's membership program, offering eligible customers benefits related to delivery and other savings. The specific benefits and participating restaurants can change, so check the current terms before subscribing or ordering." },
            { q: "Can I order food for a group on Grubhub?", a: "Yes. Customers can order from participating restaurants for multiple people. When placing a larger order, check for promotions with minimum order requirements or percentage-based savings." },
            { q: "Does Grubhub offer deals during Black Friday?", a: "Grubhub may run promotions around major shopping periods such as Black Friday and Cyber Monday. Available offers can change, so check current promotions before ordering." },
            { q: "When is the best time to look for Grubhub deals?", a: "Promotions can appear throughout the year. Major occasions such as the Super Bowl, Valentine's Day, Mother's Day, Fourth of July, Halloween, Black Friday, Cyber Monday, and the holiday season can be useful times to check." },
            { q: "How can I save more when ordering from Grubhub?", a: "Start by checking CouponsBit for a Grubhub promo code, then compare it with restaurant-specific deals, delivery promotions, membership benefits, and other available offers. Always consider the complete checkout total when deciding which option gives you the best value." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Grubhub Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Grubhub Promo Code", "Grubhub+", "Delivery Deals", "Restaurant Coupons", "Free Delivery", "First Order Discount", "Local Restaurants", "Group Orders"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Grubhub Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">G</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Grubhub: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
