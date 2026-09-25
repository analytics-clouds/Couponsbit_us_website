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
  Sandwich,
  Globe,
  Pizza,
  ShoppingBag,
  Sparkles,
  Store,
  UserPlus,
  Utensils,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Up To 30% OFF", href: "/stores/doordash-promo-code" },
  { name: "Uber Eats", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786949027/uber-eats-logo_d4dwih.webp", dealText: "Up To 60% OFF", href: "/stores/uber-eats-promo-code" },
  { name: "Grubhub", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1788868873/grubhub-logo_zzagn2.webp", dealText: "20% OFF First Order", href: "/stores/grubhub-promo-code" },
  { name: "Subway", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787295215/subway-logo_eosuh6.webp", dealText: "Up To 20% OFF", href: "/stores/subway-discount-code" },
  { name: "Little Caesars", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787571687/little-ceaser-pizza_mbcw0k.webp", dealText: "Up To 20% OFF", href: "/stores/little-caesars-promo-code" },
  { name: "Burger King", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787639269/burger-king-logo_m4nwmx.webp", dealText: "Up To 50% OFF", href: "/stores/burger-king-promo-code" },
];

const STORE_URL = "https://www.postmates.com";

export default function PostmatesContent() {
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
              <span className="text-black font-extrabold">Postmates</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1790238446/postmates-logo_lfkxjl.webp" alt="Postmates" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Postmates Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(3,200 Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest Postmates Promo Code and Postmates Discount Code. Enjoy 20% OFF at Surf Club Sushi Chestnut, $8 OFF at Nourish Cafe Hyde, and free delivery on eligible orders over $15. Browse verified Postmates restaurant and grocery offers to make every order more affordable.
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
                    { icon: Tag, val: "12", label: "Offers" },
                    { icon: Percent, val: "6", label: "Deals" },
                    { icon: Users, val: "40K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790238446/postmates-logo_lfkxjl.webp" alt="Postmates Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Postmates Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SAVE", value: "20%", title: "Postmates Promo Code – Surf Club Sushi Chestnut 20% OFF", desc: "Get a flat 20% OFF on eligible orders from Surf Club Sushi Chestnut.", bullets: ["Enjoy convenient Postmates food delivery and explore local restaurant offers.", "Check for a Postmates promo code, Postmates discount code, or promocode for Postmates before ordering."] },
                  { label: "SAVE", value: "20%", title: "Postmates Promo Code – Alyssas Dessert Bar 20% OFF", desc: "Save 20% on eligible orders from Alyssas Dessert Bar.", bullets: ["Satisfy your sweet cravings with convenient Postmates delivery.", "Look for Postmates promotions and a Postmates discount code before placing your order."] },
                  { label: "SAVE", value: "3%", title: "Postmates Promo Code – MrBeast Burger 3% OFF", desc: "Get a flat 3% OFF on eligible MrBeast Burger orders.", bullets: ["Order your favorite meals through Postmates food delivery.", "Check for a Postmates promo code or promocode for Postmates to find additional eligible savings."] },
                  { label: "SAVE", value: "$8", title: "Postmates Promo Code – Save $8 at Nourish Cafe Hyde", desc: "Save $8 on eligible orders from Nourish Cafe Hyde.", bullets: ["Enjoy convenient Postmates delivery from participating restaurants.", "Look for a Postmates discount code or Postmates promotions before checkout."] },
                  { label: "SAVE", value: "$5", title: "Postmates Discount Code – Save $5 on Pizza Orders", desc: "Get $5 OFF on eligible pizza orders.", bullets: ["Order pizza conveniently through Postmates food delivery.", "Check for a Postmates promo code or Postmates free delivery code when available."] },
                  { label: "ONLY", value: "$8.04", title: "Postmates Discount Code – Grilled Cheese Burrito for $8.04", desc: "Get a Grilled Cheese Burrito for just $8.04 through the listed offer.", bullets: ["Enjoy convenient Postmates delivery for your next meal.", "Search for a Postmates discount code or postmates first order promo before ordering."] },
                  { label: "UNDER", value: "$15", title: "Postmates Discount Code – Daily Restaurant Deals Under $15", desc: "Order from participating top restaurants with daily deals under $15.", bullets: ["Discover affordable meals through Postmates food delivery.", "Check current Postmates promotions and available promocode for Postmates offers."] },
                  { label: "ONLY", value: "$15", title: "Postmates Discount Code – Breakfast & Brunch Favorites for $15", desc: "Enjoy selected breakfast and brunch favorites for just $15.", bullets: ["Use Postmates delivery to order meals from participating restaurants.", "Look for a Postmates promo code or Postmates discount code for additional savings."] },
                  { label: "UNDER", value: "$20", title: "Postmates Promo Code – Food, Medicine & Groceries Under $20", desc: "Order eligible food, medicine, and groceries for under $20.", bullets: ["Use Postmates grocery delivery and convenient delivery options for everyday essentials.", "Check for a Postmates promo code, Postmates free delivery code, or current promotions."] },
                  { label: "BOGO", value: "FREE", title: "Postmates Promo Code – Thrive Kitchen BOGO Over $30", desc: "Buy 1 and Get 1 FREE on eligible Thrive Kitchen orders over $30.", bullets: ["Enjoy more food for your money with convenient Postmates food delivery.", "Check Postmates promotions and available Postmates discount code offers before ordering."] },
                  { label: "FREE", value: "Delivery", title: "Postmates Promo Code – Free Delivery for Unlimited Members", desc: "Get free delivery on eligible orders with a Postmates Unlimited membership.", bullets: ["Enjoy convenient Postmates delivery while reducing delivery costs on qualifying orders.", "Check for a Postmates free delivery code and current Postmates promotions."] },
                  { label: "FREE", value: "Delivery", title: "Postmates Discount Code – Free Delivery on Orders Over $15", desc: "Get free delivery on eligible orders over $15.", bullets: ["Enjoy convenient Postmates food delivery from participating restaurants.", "Check for a Postmates promo code, Postmates discount code, or promocode for Postmates before checkout."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Postmates: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Postmates?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Postmates is an on-demand delivery platform that connects customers with restaurants, grocery stores, retailers, and other local businesses. Customers can browse participating merchants through the Postmates website or app, select what they want, and arrange delivery to their chosen location.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform's current marketplace features restaurants and stores offering everything from prepared meals to groceries and everyday products. Availability and delivery options depend on the customer's location.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Postmates has also become closely integrated with Uber's broader delivery ecosystem. Customers can find eligible restaurants, stores, and delivery offers through the Postmates experience, while Uber One provides benefits across eligible Uber rides and delivery orders.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    This means Postmates can be useful for more than ordering dinner. Your local marketplace may include restaurants, supermarkets, convenience stores, pharmacies, retailers, and other businesses.

                  </p>
                  
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Truck, name: "Food Delivery", count: "150+", color: "text-blue-500", href: "/categories/food-dining" },
                        { icon: Tag, name: "Grocery Delivery", count: "50+", color: "text-purple-500", href: "/categories/food-dining" },
                        { icon: Percent, name: "First Order Deals", count: "30+", color: "text-pink-500", href: "/categories/food-dining" },
                        { icon: Gift, name: "Restaurant Rewards", count: "40+", color: "text-teal-500", href: "/categories/food-dining" },
                        { icon: Users, name: "Group Orders", count: "20+", color: "text-orange-500", href: "/categories/food-dining" },
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
    Why Isn't My Postmates Promo Code Working?
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      There are several reasons a promo code may not apply to your order.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Before giving up on the offer, check:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the code has expired</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether your account qualifies</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the restaurant or store participates</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether a minimum order requirement applies</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the promotion is limited to new users</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the code is restricted to certain locations</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether your order meets the promotional conditions</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether another promotion is already attached</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the code was entered correctly</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Postmates promotions can be account-specific or subject to individual terms, so always check the details attached to the offer.
    </p>
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
          Postmates Promo Code, Coupon Code & Discount Offers
        </h2>

        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            Craving your favorite takeout but don't feel like leaving the house? Need groceries, snacks, drinks, or everyday essentials delivered instead? Postmates makes it possible to browse local restaurants and stores, place an order online, and have your purchases brought to your door.
          </p>
          <p>
            Before you place your next order, checking for a Postmates promo code can be a simple way to look for an available offer. Depending on your account, location, restaurant, store, and current promotions, you may also find coupon codes, delivery deals, discounts, credits, and other offers that can make your order more worthwhile.
          </p>
          <p>
            From quick lunches and late-night cravings to grocery runs and household essentials, Postmates gives customers access to a wide range of local businesses through its delivery platform.
          </p>

          <div className="max-w-5xl mx-auto space-y-12 py-8 px-4 sm:px-6">
  
  {/* Hero / Header Section */}
  <section className="text-center space-y-4 max-w-3xl mx-auto">
    <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold text-[#056bfa] bg-[#056bfa]/10">
      Postmates Offers &amp; Guide
    </Badge>
    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
      Find a Postmates Promo Code
    </h1>
    <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-left sm:text-center">
      <p>
        Before confirming an order, check whether you have an active Postmates promo code available.
      </p>
      <p>
        Postmates maintains a dedicated promotions page where customers can learn about available promotional offers and how to apply them. Promo codes can be added directly to an account or entered during checkout, but they need to be applied before the order is placed.
      </p>
      <p>
        The important thing to remember is that not every Postmates promotion works for every customer or order. Some offers can have requirements involving participating merchants, order amounts, locations, account eligibility, or promotional periods.
      </p>
      <p>
        If you're ordering regularly, it's worth checking your available promotions before every larger order rather than assuming the same offer will remain available.
      </p>
    </div>
  </section>

  {/* Coupons, Deals & Offers */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <Tag className="w-6 h-6" /> Postmates Coupons, Deals &amp; Offers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          A Postmates coupon code isn't the only type of promotion you may encounter.
        </p>
        <p>
          Depending on what's available in your area, Postmates can feature restaurant-specific promotions and other offers directly within the marketplace. Current listings can include deals such as Buy One, Get One offers, percentage discounts, dollar-off promotions, free-item promotions, and delivery-fee offers.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-gray-900">Some common types of offers you may see include:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Postmates promo codes",
              "Coupon codes",
              "Restaurant discounts",
              "Buy One, Get One offers",
              "Free-item promotions",
              "Delivery offers",
              "Store-specific deals",
              "Percentage-off promotions",
              "Dollar-off offers",
              "Postmates Cash",
              "Referral promotions",
              "Uber One benefits"
            ].map((item, index) => (
              <Badge key={index} variant="outline" className="bg-slate-50 border-slate-300 text-slate-700 py-1">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <p>
          Because these offers can vary by location and change frequently, the promotions shown in your account may differ from those available to another customer.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Order Food & Categories Grid */}
  <section className="space-y-6">
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <Utensils className="w-6 h-6" /> Order Food From Local Restaurants
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Food delivery remains one of the biggest reasons customers use Postmates.
        </p>
        <p>
          Instead of calling a restaurant or driving across town, you can browse participating restaurants through the platform and order meals for delivery.
        </p>
        <p>
          The restaurant selection varies by location, but customers can find options across cuisines and dining styles, from fast food and pizza to Mexican, Indian, Chinese, Japanese, Mediterranean, American, desserts, coffee, and more.
        </p>
        <p>
          The platform currently highlights local restaurants alongside categories such as “Great value,” “Great for groups,” and restaurants with specific promotional offers.
        </p>
      </CardContent>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Fast Food */}
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Sandwich className="w-5 h-5 text-[#056bfa]" /> Fast Food
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            Craving a burger, fries, chicken, tacos, or another quick meal? Postmates can help you browse nearby fast-food restaurants and check which ones currently offer delivery.
          </p>
          <p>
            Fast-food promotions can be especially useful when you're ordering for multiple people, since restaurant-specific Buy One, Get One and other offers may be available.
          </p>
        </CardContent>
      </Card>

      {/* Pizza */}
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Pizza className="w-5 h-5 text-[#056bfa]" /> Pizza
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            Pizza is an easy choice for everything from a solo dinner to a movie night with friends.
          </p>
          <p>
            Compare nearby pizza restaurants and look for active Postmates offers before placing your order. Depending on the restaurant, you may find bundle deals, free-item promotions, or order-value discounts.
          </p>
        </CardContent>
      </Card>

      {/* International Cuisines */}
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#056bfa]" /> International Cuisines
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            Postmates also gives customers access to a broad range of cuisines.
          </p>
          <p>
            Depending on your location, you may find Indian curries, sushi, ramen, Chinese dishes, Mexican food, Mediterranean meals, Thai food, Korean dishes, and many other options.
          </p>
          <p>
            This variety makes the platform particularly useful when everyone in a household wants something different.
          </p>
        </CardContent>
      </Card>
    </div>
  </section>

  {/* Grocery & Convenience Essentials */}
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" /> Grocery Delivery With Postmates
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Postmates isn't limited to restaurant meals.
        </p>
        <p>
          Depending on your location, the platform can also connect you with grocery stores and other retailers, allowing you to order food and household essentials for delivery.
        </p>
        <p>
          This can be convenient when you're short on time, working from home, preparing for a gathering, or simply don't want to make another trip to the store.
        </p>
        <p>
          When ordering groceries, compare the available store offers and check your account for a Postmates discount code before checkout.
        </p>
      </CardContent>
    </Card>

    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
          <Store className="w-5 h-5" /> Convenience Store &amp; Everyday Essentials
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Forgot snacks for movie night? Need drinks, household items, or another everyday product?
        </p>
        <p>
          Local convenience stores and retailers available through Postmates can make it possible to order these items for delivery rather than making a separate trip.
        </p>
        <p>
          The exact selection depends on your location, so enter your delivery address and browse the stores available in your area.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Group Orders */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
          <Users className="w-5 h-5" /> Postmates for Group Orders
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Ordering for several people can quickly turn into a complicated process when everyone wants something different.
        </p>
        <p>
          Postmates can simplify the experience by allowing you to browse participating restaurants and place delivery orders through the platform.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-gray-900">Group ordering can be useful for:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Family dinners",
              "Office lunches",
              "Game nights",
              "Movie nights",
              "Birthday gatherings",
              "Weekend get-togethers",
              "Casual parties"
            ].map((item, index) => (
              <Badge key={index} variant="outline" className="bg-slate-50 border-slate-300 text-slate-700 py-1">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <p>
          When ordering for a group, pay attention to minimum order requirements and available restaurant promotions. A restaurant-specific offer may be more relevant to your order than a general coupon code.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Occasions (Tabs) */}
  <section className="space-y-6">
    <h2 className="text-2xl font-bold text-[#056bfa] text-center">Postmates Deals for Different Occasions</h2>

    <Tabs defaultValue="weeknights" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto flex-wrap sm:flex-nowrap">
        <TabsTrigger value="weeknights">Busy Weeknights</TabsTrigger>
        <TabsTrigger value="gameday">Game Day</TabsTrigger>
        <TabsTrigger value="movienights">Movie Nights</TabsTrigger>
        <TabsTrigger value="celebrations">Birthdays</TabsTrigger>
        <TabsTrigger value="holidays">Holidays</TabsTrigger>
      </TabsList>

      <Card className="mt-4 border-slate-200">
        <CardContent className="pt-6">
          <TabsContent value="weeknights" className="space-y-3 mt-0">
            <h3 className="text-lg font-bold text-gray-900">Busy Weeknights</h3>
            <p className="text-gray-600 leading-relaxed">
              After a long workday, ordering dinner can be easier than cooking or driving to a restaurant. Browse your local options, compare delivery times, and check whether any restaurant promotions are available.
            </p>
          </TabsContent>

          <TabsContent value="gameday" className="space-y-3 mt-0">
            <h3 className="text-lg font-bold text-gray-900">Game Day</h3>
            <p className="text-gray-600 leading-relaxed">
              Whether you're watching football, basketball, baseball, or another sporting event, delivery can make feeding a group easier. Look for pizza, wings, burgers, snacks, drinks, and other group-friendly options.
            </p>
          </TabsContent>

          <TabsContent value="movienights" className="space-y-3 mt-0">
            <h3 className="text-lg font-bold text-gray-900">Movie Nights</h3>
            <p className="text-gray-600 leading-relaxed">
              Staying in for a movie? Order your favorite meal, dessert, snacks, or drinks without leaving home.
            </p>
          </TabsContent>

          <TabsContent value="celebrations" className="space-y-3 mt-0">
            <h3 className="text-lg font-bold text-gray-900">Birthdays &amp; Celebrations</h3>
            <p className="text-gray-600 leading-relaxed">
              Postmates can also be useful when you're hosting a birthday or casual celebration. Depending on your area, you can order meals, desserts, drinks, groceries, and other essentials from different participating businesses.
            </p>
          </TabsContent>

          <TabsContent value="holidays" className="space-y-3 mt-0">
            <h3 className="text-lg font-bold text-gray-900">Holidays</h3>
            <p className="text-gray-600 leading-relaxed">
              Delivery can be convenient around major US holidays when people are hosting gatherings or simply don't want to spend the entire day cooking. Promotions and participating stores vary by location, so check the marketplace closer to the occasion.
            </p>
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  </section>

  {/* Perks, Referrals & Cash Grid */}
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Uber One */}
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
          <Sparkles className="w-5 h-5" /> Postmates Promo Codes &amp; Uber One
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>
          Postmates customers may also encounter Uber One benefits.
        </p>
        <p>
          Uber One is a membership programme that combines benefits across eligible Uber rides and delivery orders. The current Postmates membership page lists benefits such as $0 delivery fees on eligible food and grocery orders, discounts on eligible deliveries and pickup orders, and Uber One credits on eligible purchases. Availability and eligibility can vary.
        </p>
        <p>
          For frequent delivery customers, it's worth comparing the benefits of a membership with the individual promotions available on your account.
        </p>
        <p>
          A Postmates promo code and a membership benefit don't necessarily work in the same way, so always check the applicable terms before placing an order.
        </p>
      </CardContent>
    </Card>

    {/* Referral Offers */}
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
          <UserPlus className="w-5 h-5" /> Postmates Referral Offers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>
          Postmates also has a referral programme.
        </p>
        <p>
          According to Postmates, when someone signs up using an eligible referral link, the referral code can automatically be applied to their account, providing a unique credit offer.
        </p>
        <p>
          Referral offers can be particularly useful for new users, but the exact terms and value of the credit can change.
        </p>
      </CardContent>
    </Card>

    {/* Postmates Cash */}
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
          <Wallet className="w-5 h-5" /> Postmates Cash
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>
          Postmates Cash is another payment option available through the platform.
        </p>
        <p>
          Postmates says customers can use Postmates Cash toward orders in a similar way to using cash or a gift card.
        </p>
        <p>
          If you have Postmates Cash available, check your balance before placing an order and review how it interacts with any active promotion.
        </p>
      </CardContent>
    </Card>
  </section>

</div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                How to Use a Postmates Promo Code
              </h3>
              <p>
                Found a Postmates promo code you want to try? Applying it is straightforward.
              </p>
              <ul className="list-disc pl-5 space-y-2 font-semibold">
                <li>Open Postmates and sign into your account.</li>
                <li>Choose the restaurant, store, or merchant you want to order from.</li>
                <li>Add your selected items to your cart.</li>
                <li>Review your order and delivery details.</li>
                <li>Enter your eligible promo code in the appropriate promotion field or add it to your account.</li>
                <li>Confirm that the offer has been applied.</li>
                <li>Complete your order.</li>
              </ul>
              <p>
                Postmates specifically states that promotional codes need to be applied before placing the order because a promotion can't be added after the order has already been submitted.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Can You Use More Than One Postmates Promo Code?
              </h3>
              <p>
                Postmates currently states that customers can apply only one promo code to an order. However, a promo code can be used together with Postmates Cash and other discounts when the applicable terms allow it.
              </p>
              <p>
                That makes it important to compare the available offers before checkout rather than trying to stack several promotional codes.
              </p>
              <p>
                If you have more than one code, look at the requirements for each one and determine which is eligible for your particular order.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                How to Find Better Postmates Deals
              </h3>
              <p>
                You don't have to rely on one coupon to find a better offer. Start by checking your available promotions before adding items to your cart. Then compare the deals shown on the restaurant or store's listing.
              </p>
              <p>
                For example, if a restaurant is already offering a Buy One, Get One promotion, that offer may be more relevant to your order than a general promo code.
              </p>
              <p className="font-bold text-black">You can also:</p>
              <ul className="list-disc pl-5 space-y-2 font-semibold">
                <li>
                  <strong>Check restaurant-specific offers:</strong> Some merchants display their own promotions directly in the Postmates marketplace.
                </li>
                <li>
                  <strong>Compare pickup and delivery:</strong> If you're flexible, compare the available ordering options and associated charges.
                </li>
                <li>
                  <strong>Look for larger order promotions:</strong> Some deals require a minimum order amount, which may work well when ordering for several people.
                </li>
                <li>
                  <strong>Check your account:</strong> Postmates allows users to view available and expired promotions under Promos and Credits.
                </li>
                <li>
                  <strong>Consider Uber One:</strong> Frequent users can compare the cost and benefits of membership with their normal delivery habits.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Why Check CouponsBit for Postmates Offers?
              </h3>
              <p>
                When you're already ready to order food or groceries, searching through multiple websites for a working promotion can be frustrating.
              </p>
              <p>
                CouponsBit gives shoppers another place to check for the latest Postmates promo code, coupon codes, discounts, deals, and promotional offers before completing an order.
              </p>
              <p>
                Rather than assuming that the first offer you see is the only one available, compare the current code with restaurant-specific promotions, account offers, and other eligible discounts.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Order With a Postmates Promo Code
              </h3>
              <p>
                Whether you're ordering dinner after work, grabbing groceries for the week, planning a game-night feast, or picking up last-minute essentials, Postmates gives you access to a broad selection of local businesses through one delivery platform.
              </p>
              <p>
                Before you hit the order button, check for a current Postmates promo code, review the offers available on your chosen restaurant or store, and make sure you understand the conditions attached to the promotion.
              </p>
              <p>
                With restaurant deals, account promotions, referral offers, Postmates Cash, and Uber One benefits all potentially playing a role, checking your options before checkout can help you find the offer that best fits your particular order.
              </p>
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
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isReadMore && "rotate-180"
            )}
          />
        </button>

        {/* Accordion FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Postmates Promo Codes
          </h3>
          {[
            {
              q: "Does Postmates have promo codes?",
              a: "Yes. Postmates provides promotional codes and other offers from time to time. The platform also allows users to apply eligible promo codes directly to their accounts or during checkout.",
            },
            {
              q: "Where do I enter a Postmates promo code?",
              a: "You can apply a promo code to your account or enter it during checkout. Postmates says the code must be applied before the order is placed.",
            },
            {
              q: "Can I use multiple Postmates promo codes?",
              a: "No. Postmates currently states that only one promo code can be applied to an order. However, the platform says a promo code can be combined with Postmates Cash and other discounts when permitted.",
            },
            {
              q: "Does Postmates offer referral discounts?",
              a: "Yes. Postmates has a referral programme where eligible new users can receive a unique credit offer when they sign up through a referral link.",
            },
            {
              q: "Can I use Postmates Cash with a promo code?",
              a: "Postmates says promo codes can be used in combination with Postmates Cash and other discounts, subject to applicable terms.",
            },
            {
              q: "Does Postmates deliver groceries?",
              a: "Postmates' marketplace can include grocery stores and other retailers alongside restaurants, although availability depends on your location. Check the stores available after entering your delivery address.",
            },
            {
              q: "Does Postmates have restaurant-specific deals?",
              a: "Yes. Current Postmates listings can show merchant-specific promotions, including Buy One, Get One offers, free-item promotions, dollar-off discounts, and other deals. Availability varies by location and merchant.",
            },
            {
              q: "What is Uber One?",
              a: "Uber One is a membership programme that provides benefits across eligible Uber rides and delivery orders. The current Postmates page lists benefits including $0 delivery fees on eligible orders, discounts on eligible deliveries and pickup orders, and Uber One credits. Terms and eligibility apply.",
            },
            {
              q: "How can I find Postmates discounts?",
              a: "Check your available Postmates promotions, browse merchant-specific offers, look for an active Postmates promo code, and compare any applicable Uber One benefits before placing your order.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div
                  className={cn(
                    "bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300",
                    openFaq === i && "bg-[#056bfa]"
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-gray-500 transition-transform duration-300",
                      openFaq === i && "text-white rotate-180"
                    )}
                  />
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 px-8 bg-white",
                  openFaq === i
                    ? "max-h-60 pb-8 opacity-100"
                    : "max-h-0 opacity-0 pb-0"
                )}
              >
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
            Popular Postmates Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Postmates Promo Code",
              "Food Delivery Deals",
              "Uber One Benefits",
              "Buy 1 Get 1 Free",
              "Grocery Delivery Offers",
              "Postmates Cash",
              "CouponsBit Postmates",
              "Referral Discounts",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Postmates Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "SURF CLUB SUSHI CHESTNUT 20% OFF",
                sub: "Get a flat 20% OFF on eligible orders from Surf Club Sushi Chestnut.",
              },
              {
                heading: "GRILLED CHEESE BURRITO FOR $8.04",
                sub: "Get a Grilled Cheese Burrito for just $8.04 through the listed offer.",
              },
              {
                heading: "THRIVE KITCHEN BOGO OVER $30",
                sub: "Buy 1 and Get 1 FREE on eligible Thrive Kitchen orders over $30.",
              },
              {
                heading: "FREE DELIVERY ON ORDERS OVER $15",
                sub: "Get free delivery on eligible orders over $15.",
              },
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
                  href="https://postmates.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get deal: ${deal.heading}`}
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
