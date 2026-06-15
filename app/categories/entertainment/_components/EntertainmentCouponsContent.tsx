"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Store, Users, BadgeCheck,
  Laptop, Plane, Tv, Zap, Star, PiggyBank, CheckCircle,
  Ticket, Code,ShoppingBag , Tag, Calendar, LayoutGrid
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
  { id: "stubhub-coupon-code", name: "Stubhub", logo: "/stubhub-coupon-code.webp", coupons: 11, discount: "Up to 15% OFF" },
  { id: "viagogo-coupon-code", name: "Viagogo", logo: "/viagogo-coupon-code.webp", coupons: 9, discount: "Up to 10% OFF" }
];


const SIDEBAR_CATEGORIES = [
  { icon: Laptop, name: "Electronics",        count: "850+", color: "text-[#4A90E2]", href: "/categories/electronics" },
  { icon: Plane,  name: "Travel",             count: "420+", color: "text-[#19798d]", href: "/categories/travel" },
  { icon: Tv,     name: "Entertainment",      count: "210+", color: "text-[#8E44AD]", href: "/categories/entertainment", active: true },
  { icon: Code,   name: "Software & Digital", count: "300+", color: "text-[#6B46C1]", href: "/categories/software" },
  { icon: Zap,    name: "Mobile & Telecom",   count: "320+", color: "text-[#27AE60]", href: "/categories/mobile" },
];

export default function EntertainmentCouponsContent() {
  const [activeTab, setActiveTab] = useState("All (210)");
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
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-[#19798d] selection:text-white">
      <Navbar />

      <div className="bg-white border-b border-[#f0f0f0] mt-24">
        <div className="container mx-auto px-4 max-w-7xl py-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#19798d] hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/categories" className="text-[#19798d] hover:underline">Categories</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-700 font-medium">Entertainment</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            <div className="lg:w-[72%]">

              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-3xl">Entertainment Coupons & Deals</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save on event tickets, concerts, sports and live shows with verified coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: Ticket, val: "210+", label: "Coupons" },
                        { icon: Store, val: "15+", label: "Top Stores" },
                        { icon: Users, val: "25K+", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#8E44AD]" />
                          <div>
                            <p className="text-black font-extrabold text-sm leading-none">{stat.val}</p>
                            <p className="text-gray-500 font-bold text-[10px] uppercase mt-0.5">{stat.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-[45%] h-[200px] md:h-auto overflow-hidden">
                    <img src="/entertainment-coupon-codes.webp" alt="Entertainment Coupons" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Stores Section */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5 mb-5">
                <div className="mb-6">
                  <h2 className="text-black font-extrabold text-xl">Stores in Entertainment</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} stores</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                  {STORES.map((store) => (
                    <div key={store.id} className="bg-white border border-gray-100 rounded-2xl p-4 text-center transform hover:-translate-y-1 hover:shadow-xl hover:border-[#19798d] transition-all duration-300 flex flex-col justify-between group">
                      <div>
                        <div className="h-14 flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                          <img src={store.logo} alt={store.name} className="max-h-12 max-w-[120px] w-auto object-contain" />
                        </div>
                        <h3 className="mt-3 font-extrabold text-black text-sm group-hover:text-[#19798d] transition-colors line-clamp-1 truncate px-1">{store.name}</h3>
                        <p className="text-gray-400 text-[11px] font-bold mt-0.5">{store.coupons} Coupons</p>
                        <span className="text-xs font-black text-[#19798d] uppercase tracking-wide mt-2.5 block bg-[#e8f6f8] py-1 px-2 rounded-lg leading-normal">{store.discount}</span>
                      </div>
                      <div className="mt-4">
                        <Link href={`/stores/${store.id}`} className="block w-full">
                          <button className="w-full text-center py-2 border border-[#19798d] text-[#19798d] hover:bg-[#19798d] hover:text-white rounded-lg text-xs font-black transition-all duration-300">View Store</button>
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
                      <Link key={i} href={cat.href} className={cn("flex items-center justify-between p-2.5 px-3 rounded-xl cursor-pointer transition-all", cat.active ? "bg-[#F5F0FF] text-[#8E44AD]" : "hover:bg-[#f5f5f5]")}>
                        <div className="flex items-center gap-2.5">
                          <cat.icon className={cn("w-4 h-4", cat.active ? "text-[#8E44AD]" : cat.color)} />
                          <span className={cn("text-sm", cat.active ? "font-bold text-[#8E44AD]" : "text-gray-700 font-medium")}>{cat.name}</span>
                        </div>
                        <span className={cn("text-xs", cat.active ? "font-extrabold text-[#8E44AD]" : "text-black font-bold")}>{cat.count}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/categories" className="block mt-4 text-[#19798d] font-bold text-xs hover:underline">View All Categories →</Link>
                </div>

                <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                  <div className="space-y-5">
                    {[
                      { icon: BadgeCheck, title: "100% Verified Coupons", sub: "All codes are tested & verified" },
                      { icon: Star, title: "Best Event Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every ticket" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "25,000+ happy event-goers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#F5F0FF] rounded-full flex items-center justify-center text-[#8E44AD]"><badge.icon className="w-4 h-4" /></div>
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

        {/* A — Intro */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight mb-3">
            Entertainment Coupon Codes, Event Ticket Promo Codes & Exclusive Ticket Deals
          </h2>
          <p className="text-lg font-bold text-[#19798d] mb-5">Looking for the best entertainment coupon codes to save on concerts, sporting events, theater shows, festivals, and other unforgettable experiences? You're in the right place.</p>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Couponsbit, we help savvy shoppers discover the latest discounts on live entertainment, ticket purchases, and digital experiences without spending hours searching for deals.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you're planning to attend a sold-out concert, cheer on your favorite team, enjoy a Broadway performance, or book tickets for a family attraction, finding the right savings can make the experience even more rewarding. That's why Couponsbit brings together verified event ticket promo codes, exclusive offers, and the latest concert and ticket deals from trusted entertainment brands and ticketing platforms, helping you enjoy more while spending less.
          </p>
        </div>

        {/* B — Save More on Live Events and Entertainment */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Save More on Live Events and Entertainment</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            The entertainment industry offers countless experiences, from live performances and sporting events to streaming subscriptions and cultural attractions. While demand for popular events continues to grow, so do ticket prices. Fortunately, many platforms regularly release promotional offers, limited-time discounts, and special deals that can help reduce your costs. At Couponsbit, we help you uncover savings across a variety of entertainment categories.
          </p>
          
          <p className="text-gray-500 text-xs font-bold mb-3">Including:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Concerts and live music events", desc: "Save on Arena tours, independent gigs, and live performances." },
              { title: "Professional and college sports", desc: "Cheer on your favorite teams with verified ticket deals." },
              { title: "Theater and Broadway productions", desc: "Experience live acting, plays, and musical productions for less." },
              { title: "Comedy performances", desc: "Enjoy stand-up comedy specials and local venue laugh nights." },
              { title: "Music festivals", desc: "Secure multi-day passes and seasonal festival access packages." },
              { title: "Family entertainment attractions", desc: "Deals for theme parks, local exhibits, and family events." },
              { title: "Streaming platforms", desc: "Discounts on your digital monthly watch lists and portals." },
              { title: "Special events and exhibitions", desc: "Access limited-time galleries, shows, and trade events." },
              { title: "Cultural experiences", desc: "Save on regional museums, tours, and local experiences." },
              { title: "Seasonal entertainment events", desc: "Holiday attractions, pop-ups, and custom temporary shows." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#19798d]/30 transition-all duration-300 group flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#e8f6f8] flex items-center justify-center shrink-0 group-hover:bg-[#19798d] transition-colors duration-300">
                  <LayoutGrid className="w-5 h-5 text-[#19798d] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Before finalizing any purchase, checking for available event ticket promo codes can be a simple way to keep more money in your pocket.
          </p>
        </div>

        {/* Popular Entertainment Platforms and Ticket Providers */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Popular Entertainment Platforms and Ticket Providers</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">Today's entertainment landscape offers more choices than ever before. Whether you're looking for front-row concert seats or tickets to a highly anticipated sporting event, several trusted platforms make finding tickets easier.</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "StubHub", "Viagogo", "Ticketmaster", "SeatGeek", "AXS", "Vivid Seats", "TicketNetwork", "Live Nation", "Eventbrite", "Broadway Direct"
            ].map((platform) => (
              <span key={platform} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 font-bold text-xs rounded-lg hover:border-[#19798d]/40 transition-all duration-200 cursor-default">
                {platform}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm font-medium leading-relaxed">
            These platforms give fans access to thousands of live experiences throughout the year, and many frequently offer special promotions, seasonal discounts, and exclusive deals.
          </p>
        </div>

        {/* Why Experiences Continue to Matter */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Why Experiences Continue to Matter</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">People are increasingly choosing experiences over material purchases. Live events provide opportunities to create memories, celebrate special occasions, and connect with others through shared interests.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { icon: Tv, title: "Memorable Moments", desc: "A live concert, championship game, or theater performance often becomes a lasting memory that people cherish for years.", color: "bg-blue-50 text-blue-600" },
              { icon: Tag, title: "Access to Exclusive Events", desc: "Many entertainment experiences are available for a limited time, making them unique opportunities worth planning for.", color: "bg-teal-50 text-teal-600" },
              { icon: ShoppingBag, title: "Shared Experiences", desc: "Entertainment brings people together, whether it's family, friends, coworkers, or fellow fans.", color: "bg-purple-50 text-purple-600" },
              { icon: LayoutGrid, title: "Endless Variety", desc: "From intimate performances to large-scale festivals, there's an entertainment option for virtually every interest and budget.", color: "bg-violet-50 text-violet-600" },
              { icon: Calendar, title: "Convenience of Online Booking", desc: "Modern ticketing platforms allow consumers to browse events, compare options, and secure tickets within minutes.", color: "bg-green-50 text-green-600" },
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-[#19798d]/20 transition-all duration-300 group flex gap-4 items-start">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", item.color.split(" ")[0])}>
                  <item.icon className={cn("w-5 h-5", item.color.split(" ")[1])} />
                </div>
                <div>
                  <h3 className="text-black font-extrabold text-sm mb-1 group-hover:text-[#19798d] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Use Entertainment Coupon Codes */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Use Entertainment Coupon Codes</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Finding and applying entertainment discounts is usually a quick and straightforward process.</p>
          
          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Browse Current Offers", desc: "Explore the latest entertainment coupon codes and ticket promotions available on Couponsbit." },
              { step: "2", title: "Select a Deal", desc: "Choose the offer that matches the event, attraction, or service you're interested in." },
              { step: "3", title: "Copy the Code", desc: "If a promotional code is required, simply copy it before visiting the merchant." },
              { step: "4", title: "Complete Your Booking", desc: "Add your tickets or entertainment package to your cart and proceed to checkout." },
              { step: "5", title: "Apply the Discount", desc: "Enter the promo code in the appropriate field and verify that the savings have been applied." },
              { step: "6", title: "Enjoy the Experience", desc: "Finalize your purchase and get ready for your next event while knowing you've secured a better deal." },
            ].map((item, i, arr) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#19798d] text-white flex items-center justify-center font-black text-sm shadow-md">
                    {item.step}
                  </div>
                  {i < arr.length - 1 && <div className="w-0.5 h-8 bg-[#19798d]/20 my-1" />}
                </div>
                <div className="pb-7">
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div>
          <h2 className="text-2xl font-black text-black mb-6">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-6">
            {[
              { q: "What are entertainment coupon codes?", a: "Entertainment coupon codes are promotional discounts that can reduce the cost of event tickets, attractions, streaming subscriptions, and other entertainment-related purchases." },
              { q: "Where can I find event ticket promo codes?", a: "Couponsbit regularly features event ticket promo codes and entertainment deals from popular ticket providers and entertainment brands." },
              { q: "Do entertainment coupon codes really work?", a: "Many promotional offers provide discounts, special pricing, or other savings opportunities when applied according to the offer terms." },
              { q: "What types of entertainment deals are available?", a: "You may find savings on concerts, sports events, theater tickets, comedy shows, festivals, attractions, and digital entertainment services." },
              { q: "When is the best time to buy event tickets?", a: "Early-bird sales, holiday promotions, Black Friday, Cyber Monday, and seasonal events often provide strong savings opportunities." },
              { q: "Is Couponsbit free to use?", a: "Yes. Couponsbit is completely free and helps users discover discounts, promotions, and savings opportunities across a wide range of entertainment categories." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-4">
                <h3 className="text-black font-extrabold text-base mb-2">Q: {faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore More Entertainment While Spending Less */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Explore More Entertainment While Spending Less</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you're planning a night at a concert, attending a major sporting event, discovering a new theater production, or enjoying family-friendly attractions, smart savings can make every experience even more rewarding.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Browse the latest entertainment coupon codes, event ticket promo codes, and concert and ticket deals on Couponsbit and discover new ways to enjoy your favorite experiences for less.
          </p>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* When to Look for Concert and Ticket Deals */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">When to Look for Concert and Ticket Deals</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Timing can significantly impact how much you pay for entertainment.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { title: "Black Friday Promotions", desc: "Many ticketing companies and entertainment brands launch some of their biggest promotions during Black Friday." },
              { title: "Cyber Monday Savings", desc: "Online-exclusive discounts often continue through Cyber Monday, creating additional opportunities to save." },
              { title: "Summer Event Season", desc: "Music festivals, outdoor concerts, and seasonal attractions frequently offer special promotions during the summer months." },
              { title: "Holiday Sales", desc: "Major holidays often bring limited-time entertainment offers and ticket discounts." },
              { title: "Early-Bird Pricing", desc: "Many events reward customers who purchase tickets shortly after they become available." },
              { title: "Last-Minute Opportunities", desc: "In some cases, discounted tickets may become available closer to the event date." }
            ].map((event, i) => (
              <div key={i} className="border-t border-gray-50 pt-2 first:border-0 first:pt-0">
                <span className="text-[#19798d] font-bold text-xs block mb-0.5">{event.title}</span>
                <p className="text-gray-500 text-[11px] leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Ways to Reduce Entertainment Costs */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Smart Ways to Reduce Entertainment Costs</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Enjoying great experiences doesn't always require spending more. These simple strategies can help maximize your savings.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Search for Discounts Before Purchasing",
              "Compare Ticket Options",
              "Join Email Lists",
              "Purchase Early",
              "Consider Alternative Dates",
              "Watch Seasonal Promotions"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#19798d] shrink-0" />
                <span className="text-gray-600 text-xs font-semibold">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Use Couponsbit for Entertainment Savings? */}
        <div className="bg-gradient-to-br from-[#19798d] to-[#0f5a6b] rounded-2xl p-6 text-white">
          <h3 className="font-black text-lg mb-2">Why Use Couponsbit for Entertainment Savings?</h3>
          <p className="text-white font-bold text-xs mb-4">
            Finding reliable deals shouldn't be difficult. Couponsbit helps simplify the process by bringing together a wide variety of entertainment offers in one easy-to-access destination.
          </p>
          <div className="flex flex-col gap-2.5 mb-5 text-white/90 text-xs">
            <p><strong>Updated Offers:</strong> We regularly monitor promotions to help users discover fresh savings opportunities.</p>
            <p><strong>Broad Entertainment Coverage:</strong> From live events and ticketing platforms to digital entertainment services, we cover a diverse range of categories.</p>
            <p><strong>User-Friendly Experience:</strong> Finding, copying, and using deals is quick and straightforward.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use and designed to help consumers spend less on the things they enjoy most.</p>
            <p><strong>Focused on Savings:</strong> Our goal is simple: help users find better deals before they make a purchase.</p>
          </div>
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#19798d] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Shop Ticket Deals Now →
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
          <p className="text-[#19798d] font-mono font-bold text-xs mt-0.5">{toastCode}</p>
        </div>
      </div>
    </div>
  );
}
