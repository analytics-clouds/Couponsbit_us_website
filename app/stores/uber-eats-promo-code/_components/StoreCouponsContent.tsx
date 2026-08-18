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
  ShoppingBag,
  Home,
  Utensils,
  Store as StoreIcon,
  Clock,
  Users2,
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
  { id: "d1", label: "UP TO", heading: "Uber Eats Promo Code – 50% OFF Orders of $15+", sub: "Save up to 50% OFF when you spend $15 or more" },
  { id: "d2", label: "SAVE", heading: "Uber Eats Promo Code – 37% OFF 7-Eleven Chocolate Chunk Cookies", sub: "Get 37% OFF on select 7-Eleven Chocolate Chunk Cookies" },
  { id: "d3", label: "SAVE", heading: "Uber Eats – 20% OFF Orders of $15+ at Dunkin", sub: "Save 20% OFF up to $12 on eligible Dunkin orders" },
  { id: "d4", label: "UP TO", heading: "Uber Eats – Up to 50% OFF When You Spend $20", sub: "Get up to 50% OFF when you spend $20 or more" },
  { id: "d5", label: "GET", heading: "Uber Eats – $10 OFF Your First Order", sub: "Enjoy $10 OFF your first eligible Uber Eats order" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Up To 30% OFF", href: "/stores/doordash-promo-code" },
  { name: "Chewy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp", dealText: "Up To 50% OFF", href: "/stores/chewy-promo-code" },
  { name: "LovesJerkyCo", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002073/lovejurky-logo_o9v01b.webp", dealText: "From $10", href: "/stores/lovejurky-discount-code" },
  { name: "Factor75", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/factor75-coupon-code_a7lrym.webp", dealText: "Up to $130 OFF", href: "/stores/factor75-discount-code" },
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up To $260", href: "/stores/merachfit-discount-code" },
  { name: "Kerala Ayurveda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg", dealText: "Flat 10% OFF", href: "/stores/kerala-ayurveda-discount-code" },
];

const STORE_URL = "https://www.ubereats.com/";

export default function UberEatsCouponsContent() {
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
              <span className="text-black font-extrabold">Uber Eats</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp" alt="Uber Eats" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Uber Eats</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(52.3k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover Uber Eats deals and offers in Aug 2026. Browse restaurant delivery, grocery delivery, free delivery offers and pickup savings on Uber Eats.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "10", label: "Offers" },
                    { icon: Percent, val: "3.4k", label: "Deals" },
                    { icon: Users, val: "20M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp" alt="Uber Eats Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Uber Eats Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "UP TO", value: "50%", title: "Uber Eats Promo Code – 50% OFF Orders of $15+", desc: "Save up to 50% OFF when you spend $15 or more", bullets: ["Offer applies to eligible full-priced items at participating stores", "Enjoy bigger savings on food, groceries and everyday essentials", "Availability may vary by selected stores and location", "Uber Eats Promo Code, 50% Off, Food Delivery Deals, USA"] },
                  { label: "SAVE", value: "37%", title: "Uber Eats Promo Code – 37% OFF 7-Eleven Chocolate Chunk Cookies", desc: "Get 37% OFF on select 7-Eleven Chocolate Chunk Cookies", bullets: ["Enjoy a freshly baked cookie packed with chocolate chunks", "Discount is automatically applied at checkout", "Available at participating 7-Eleven locations", "Uber Eats Promo Code, 7-Eleven Deal, Cookie Offer, USA"] },
                  { label: "SAVE", value: "20%", title: "Uber Eats – 20% OFF Orders of $15+ at Dunkin", desc: "Save 20% OFF up to $12 on eligible Dunkin orders", bullets: ["Spend $15 or more to qualify for the offer", "No promo code is required to receive the discount", "Enjoy Dunkin favorites while saving on your order", "Uber Eats Discount, Dunkin Deal, 20% Off, Food Delivery, USA"] },
                  { label: "UP TO", value: "50%", title: "Uber Eats – Up to 50% OFF When You Spend $20", desc: "Get up to 50% OFF when you spend $20 or more", bullets: ["Save on eligible meals, snacks and everyday food orders", "A great way to reduce your delivery order total", "Offer availability may vary by customer and participating stores", "Uber Eats Deals, 50% Off, Food Delivery Offer, USA"] },
                  { label: "GET", value: "$10", title: "Uber Eats – $10 OFF Your First Order", desc: "Enjoy $10 OFF your first eligible Uber Eats order", bullets: ["Minimum order value of $20 is required", "No promo code is needed to claim the savings", "Alcohol and other regulated items may be excluded", "Uber Eats First Order Deal, $10 Off, Food Delivery, USA"] },
                  { label: "SAVE", value: "$15", title: "Uber Eats – $15 OFF Denny's Orders Over $35", desc: "Save $15 OFF eligible Denny's orders", bullets: ["Spend $35 or more to qualify for the offer", "Discount is automatically applied with no code required", "Enjoy your favorite Denny's meals for less", "Uber Eats Deal, Denny's Offer, $15 Off, Food Delivery, USA"] },
                  { label: "SAVE", value: "30%", title: "Uber Eats – 30% OFF Caribbean Wrap", desc: "Get 30% OFF the Caribbean Wrap at Stuytown Marketplace INC.", bullets: ["Enjoy the wrap for just $9.09 after the discount", "No coupon code is required for this offer", "Discount is automatically applied to eligible orders", "Uber Eats Food Deal, Caribbean Wrap, 30% Off, USA"] },
                  { label: "FREE", value: "FRIES", title: "Uber Eats – FREE Fries on Orders Over $30", desc: "Get FREE fries or eligible free items on qualifying orders", bullets: ["Spend $30 or more to unlock the offer", "No promo code is required", "Offer is available to eligible customers at participating locations", "Uber Eats Freebie, Free Fries, Food Delivery Deal, USA"] },
                  { label: "SAVE", value: "20%", title: "Uber Eats – 20% OFF Hollywood Diner Orders $20+", desc: "Save 20% OFF when ordering $20 or more from Hollywood Diner", bullets: ["Enjoy popular diner meals while spending less", "No coupon code is required to receive the discount", "Alcohol and other regulated items may be excluded", "Uber Eats Deal, Hollywood Diner, 20% Off, Food Delivery, USA"] },
                  { label: "UP TO", value: "60%", title: "Uber Eats – 60% OFF Orders of $15+", desc: "Save up to 60% OFF eligible Uber Eats orders", bullets: ["Minimum order value of $15 is required", "No promo code is required to claim the discount", "Offer provides extra savings on qualifying food and essentials", "Uber Eats Discount, 60% Off, Food Delivery Deals, USA"] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[13px] sm:text-2xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Order on Uber Eats: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">About Uber Eats</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Uber Eats is a food delivery platform, part of Uber, that connects users with restaurants for delivery and pickup orders. In many markets, Uber Eats also offers grocery and convenience store delivery.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Utensils, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Home, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: StoreIcon, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
                  <h3 className="text-black font-black text-lg mb-8">Uber Eats Products & Services</h3>
                  <div className="space-y-8">
                    {[
                      { icon: Utensils, title: "Restaurant Delivery", sub: "Order from a wide range of local and national restaurant partners." },
                      { icon: StoreIcon, title: "Grocery Delivery", sub: "Order groceries and everyday essentials from local grocery partners." },
                      { icon: ShoppingBag, title: "Convenience Store Delivery", sub: "Get snacks, drinks and household essentials delivered quickly." },
                      { icon: Clock, title: "Pickup Orders", sub: "Order ahead and pick up your order in-store, skipping delivery fees." },
                      { icon: Users2, title: "Group Ordering", sub: "Coordinate orders with friends, family or coworkers from a shared cart." },
                      { icon: Home, title: "Delivery Tracking", sub: "Track your order in real time from restaurant to your door." },
                    ].map((item, i) => (
                      <div key={item.title} className="flex gap-4 items-start text-justify">
                        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-black font-black text-sm leading-tight mb-2">{item.title}</p>
                          <p className="text-gray-500 font-medium text-[11px] leading-relaxed">{item.sub}</p>
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
                  Uber Eats Promo Codes, Coupon Codes & Food Delivery Deals 2026
                </h2>

                <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[850px]">
                    <thead>
                      <tr className="bg-[#056BFA]">
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Highlight</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 font-bold text-[14px]">
                      {[
                        ["Uber Eats Promo Code – 50% OFF Orders of $15+", "50% OFF", "All Users", "Offer applies to eligible full-priced items at participating stores", "Enjoy bigger savings on food, groceries and everyday essentials"],
                        ["Uber Eats Promo Code – 37% OFF 7-Eleven Chocolate Chunk Cookies", "37% OFF", "All Users", "Enjoy a freshly baked cookie packed with chocolate chunks", "Discount is automatically applied at checkout"],
                        ["Uber Eats – 20% OFF Orders of $15+ at Dunkin", "20% OFF", "All Users", "Spend $15 or more to qualify for the offer", "No promo code is required to receive the discount"],
                        ["Uber Eats – Up to 50% OFF When You Spend $20", "50% OFF", "All Users", "Save on eligible meals, snacks and everyday food orders", "A great way to reduce your delivery order total"],
                        ["Uber Eats – $10 OFF Your First Order", "$10 OFF", "All Users", "Minimum order value of $20 is required", "No promo code is needed to claim the savings"],
                        ["Uber Eats – $15 OFF Denny's Orders Over $35", "$15 OFF", "All Users", "Spend $35 or more to qualify for the offer", "Discount is automatically applied with no code required"],
                        ["Uber Eats – 30% OFF Caribbean Wrap", "30% OFF", "All Users", "Enjoy the wrap for just $9.09 after the discount", "No coupon code is required for this offer"],
                        ["Uber Eats – FREE Fries on Orders Over $30", "FREE Fries", "All Users", "Spend $30 or more to unlock the offer", "No promo code is required"],
                        ["Uber Eats – 20% OFF Hollywood Diner Orders $20+", "20% OFF", "All Users", "Enjoy popular diner meals while spending less", "No coupon code is required to receive the discount"],
                        ["Uber Eats – 60% OFF Orders of $15+", "60% OFF", "All Users", "Minimum order value of $15 is required", "No promo code is required to claim the discount"],
                      ].map((row, i) => (
                        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 9 && "border-b-0")}>
                          <td className="p-5 text-black font-black align-middle max-w-[220px]">{row[0]}</td>
                          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
                          <td className="p-5 text-gray-500 align-middle">{row[2]}</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[200px]">{row[3]}</td>
                          <td className="p-5 text-gray-500 align-middle max-w-[240px]">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <p>
                    Looking for the latest <strong>Uber Eats promo codes and coupon codes</strong>? At Couponsbit, we help hungry shoppers find restaurant delivery offers, grocery delivery deals, free delivery promotions and pickup savings.
                  </p>
                  <p>
                    Whether you're ordering dinner, grocery essentials, or a quick snack, Uber Eats connects you with a wide range of restaurant and grocery partners. Before you order, check Couponsbit for the latest Uber Eats offers.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Know More About Uber Eats</h3>
                    <p>
                      Uber Eats is a food delivery platform, part of Uber, that connects users with local and national restaurant partners for delivery and pickup orders. In many markets, the platform also supports grocery and convenience store delivery.
                    </p>
                    <p>
                      Uber Eats offers real-time order tracking, group ordering for shared carts, and a pickup option that lets customers order ahead and skip delivery fees.
                    </p>
                    <p>
                      At Couponsbit, we help customers discover the latest Uber Eats offers, restaurant highlights and delivery promotions in one place.
                    </p>
                  </div>

                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Order on Uber Eats via Couponsbit</h3>
                    <div className="space-y-6">
                      {[
                        "Step 1: Browse Available Uber Eats Offers — Visit the Uber Eats page on Couponsbit and explore the latest offers.",
                        "Step 2: Select Your Preferred Offer — Choose the offer that best fits what you're ordering.",
                        "Step 3: Click Get Deal — You'll be taken directly to Uber Eats.",
                        "Step 4: Choose a Restaurant or Store — Browse restaurants, grocery stores or convenience stores near you.",
                        "Step 5: Build Your Order — Add items to your cart and select delivery or pickup.",
                        "Step 6: Complete Your Order — Finalize your order at checkout on Uber Eats.",
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                          <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save at Uber Eats</h3>
                    <p><strong>Check Couponsbit Before Ordering:</strong> Always visit Couponsbit before checking out to see the latest Uber Eats offers.</p>
                    <p><strong>Watch for Free Delivery:</strong> Look out for free delivery offers on eligible orders.</p>
                    <p><strong>Choose Pickup When Possible:</strong> Skip delivery fees by ordering ahead and picking up in-store.</p>
                    <p><strong>Order With Friends:</strong> Group ordering can help split delivery fees across a shared cart.</p>
                    <p><strong>Explore New Restaurants:</strong> New restaurant partners are added regularly, often with introductory offers.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose Uber Eats?</h3>
                    <p><strong>Wide Restaurant Selection:</strong> Uber Eats connects you with a broad range of local and national restaurant partners.</p>
                    <p><strong>Beyond Restaurants:</strong> Grocery and convenience store delivery is available in many markets.</p>
                    <p><strong>Real-Time Tracking:</strong> Track your order from the restaurant to your door.</p>
                    <p><strong>Flexible Ordering:</strong> Choose between delivery, pickup, or group ordering depending on your needs.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for Uber Eats Deals?</h3>
                    <p><strong>Curated Uber Eats Offers:</strong> We regularly review available Uber Eats offers to help users discover current promotions.</p>
                    <p><strong>Convenient Browsing:</strong> Find restaurant offers, grocery deals and free delivery promotions in one place.</p>
                    <p><strong>Completely Free:</strong> Couponsbit is free to use and helps customers save across food delivery, fashion, travel and more.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Order Smarter With Uber Eats</h3>
                    <p>Whether you're ordering dinner, groceries, or a quick pickup order, Uber Eats offers a wide range of options to explore.</p>
                    <p>Before you order, visit Couponsbit to explore the latest Uber Eats offers and updates.</p>
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
                  <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
                  {[
                    { q: "What is Uber Eats?", a: "Uber Eats is a food delivery platform that connects users with restaurants for delivery and pickup orders, and also offers grocery and convenience store delivery in many markets." },
                    { q: "Does Uber Eats offer promo codes?", a: "Yes. Uber Eats regularly runs promotions such as free delivery offers and new restaurant highlights." },
                    { q: "Where can I find Uber Eats promo codes?", a: "You can find the latest Uber Eats promo codes and offers on Couponsbit." },
                    { q: "Can I order groceries through Uber Eats?", a: "Yes. In addition to restaurant delivery, Uber Eats offers grocery and convenience store delivery in many markets." },
                    { q: "Can I pick up my Uber Eats order instead of getting it delivered?", a: "Yes. Uber Eats offers a pickup option on eligible orders, letting you skip delivery fees." },
                    { q: "Is Couponsbit free to use?", a: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers." },
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Uber Eats Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Free Delivery", "Grocery Delivery", "Pickup Orders", "New Restaurants", "Uber Eats Promo Code", "Group Ordering", "Convenience Delivery", "Trending Nearby"].map(tag => (
                      <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Uber Eats Deals</h3>
                  <div className="space-y-6">
                    {DEALS.map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">U</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Order on Uber Eats: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
