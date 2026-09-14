"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent, Calendar, Receipt,
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
  Shirt,
  Ticket,
  Music,
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
  { id: "d1", label: "NEW", heading: "$20 Off Your First $100+ Order", sub: "Latest Deals" },
  { id: "d2", label: "DEAL", heading: "Up to $20 Off Tickets", sub: "Featured Picks" },
  { id: "d3", label: "NEW", heading: "$10 Off First Purchase of $150+", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "10% Off Concert Tickets", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "10% Off Orders Over $50", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Stubhub", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/stubhub-coupon-code_fplhay.webp", dealText: "Flat 10% OFF", href: "/stores/stubhub-discount-code" },
  { name: "Viagogo", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/viagogo-coupon-code_t65aol.webp", dealText: "Starting at $332", href: "/stores/viagogo-discount-code" },
  { name: "Spirit Halloween", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/spirti-logo_x4nbor.webp", dealText: "Up To 75% OFF", href: "/stores/spirit-halloween-discount-code" },
  { name: "vegas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/vegas-logo_sifnax.webp", dealText: "Up To 35% OFF", href: "/stores/vegas-discount-code" },
  { name: "Klook", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002063/klook-logo_alzz2a.webp", dealText: "Up To 50% OFF", href: "/stores/klook-discount-code" },
  { name: "Yas Island", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/yas-island-logo_krotjw.webp", dealText: "Up To 50% OFF", href: "/stores/yas-island-promo-code" },
];

const STORE_URL = "https://seatgeek.com";

export default function SeatgeekCouponsContent() {
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
              <span className="text-black font-extrabold">SeatGeek</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788868873/seatgeek-logo_rhvjww.webp" alt="SeatGeek" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">SeatGeek</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(11.2k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified SeatGeek promo codes and SeatGeek discount codes at Maxiku Offers. Get $20 OFF your first ticket order over $100, save 10% on concert tickets and eligible $50+ orders, and find deals on sports, concerts, theater, and live events.
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
                    { icon: Tag, val: "15", label: "Offers" },
                    { icon: Percent, val: "400+", label: "Deals" },
                    { icon: Users, val: "2M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788868873/seatgeek-logo_rhvjww.webp" alt="SeatGeek Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">SeatGeek Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "NEW", value: "$20 OFF", title: "SeatGeek Promo Code – $20 Off Your First $100+ Order", desc: "Sign up for SeatGeek emails and get $20 off your first ticket order of $100 or more.", bullets: ["New customers can use this offer to save on their first eligible ticket purchase.", "Get updates about special offers, upcoming events, and limited-time ticket deals.", "Check the latest SeatGeek offers and eligibility requirements before purchasing."] },
                  { label: "DEAL", value: "$20 OFF", title: "SeatGeek Offers – Up to $20 Off Tickets", desc: "Save up to $20 on eligible SeatGeek ticket purchases with this available offer.", bullets: ["Shop tickets for sports, concerts, and other live entertainment events.", "The discount can help lower your total ticket cost on qualifying purchases.", "Review the latest SeatGeek deals before checkout to find available savings."] },
                  { label: "NEW", value: "$10 OFF", title: "SeatGeek Deals – $10 Off First Purchase of $150+", desc: "Get $10 off your first SeatGeek purchase of $150 or more when you meet the offer requirements.", bullets: ["This promotion gives new customers an easy way to save on their first ticket order.", "Browse sports, concerts, and live events to find tickets that fit your plans.", "Check the latest SeatGeek discounts before completing your purchase."] },
                  { label: "DEAL", value: "10% OFF", title: "SeatGeek Discount – 10% Off Concert Tickets", desc: "Save 10% on eligible concert tickets with this SeatGeek promotion.", bullets: ["Find tickets for live music events and popular artists while keeping more money in your pocket.", "Make sure your selected event qualifies for the promotion before checkout.", "Explore current SeatGeek offers for additional ticket savings."] },
                  { label: "DEAL", value: "10% OFF", title: "SeatGeek Offers – 10% Off Orders Over $50", desc: "Get 10% off eligible orders over $50 when the promotion requirements are met.", bullets: ["Save on tickets for sports, concerts, comedy shows, and other live events.", "This discount can help reduce your total spending on qualifying ticket purchases.", "Check the latest SeatGeek deals and terms before placing your order."] },
                  { label: "DEAL", value: "$20 OFF", title: "SeatGeek Deals – $20 Off Tickets", desc: "Save $20 on eligible SeatGeek ticket purchases with this available discount.", bullets: ["Shop for sports, concerts, theater, and other live entertainment events.", "Check your selected tickets and order total to see whether the offer applies.", "Browse current SeatGeek discounts for more ways to save."] },
                  { label: "DEAL", value: "NBA", title: "SeatGeek Tickets – NBA Deals", desc: "Browse NBA tickets on SeatGeek and compare available listings for upcoming games.", bullets: ["Use SeatGeek's ticket filters to find seats based on price, location, and other preferences.", "Check Deal Score to help identify better-value ticket listings.", "Look through the latest SeatGeek deals before buying your NBA tickets."] },
                  { label: "DEAL", value: "SWIFT", title: "SeatGeek Tickets – Taylor Swift Events", desc: "Shop Taylor Swift tickets on SeatGeek and compare available listings for upcoming events.", bullets: ["Review ticket prices, seat locations, and available listings before making a purchase.", "Use SeatGeek's tools to compare options and identify better-value tickets.", "Check available SeatGeek offers before completing your order."] },
                  { label: "DEAL", value: "$5 OFF", title: "SeatGeek Deals – Save Up to $5 on Select Tickets", desc: "Save up to $5 on tickets with select SeatGeek offers.", bullets: ["Look for eligible events and promotions when browsing available ticket listings.", "Compare ticket options to find a price that works for your budget.", "Check the latest SeatGeek deals before checkout."] },
                  { label: "DEAL", value: "COMPARE", title: "SeatGeek Ticket Deals – Find Lower-Priced Listings", desc: "Compare multiple ticket listings on SeatGeek to find competitive prices for live events.", bullets: ["Use Deal Score to help identify tickets that offer strong value.", "Set price alerts to keep track of ticket price changes for events you're interested in.", "Browse current SeatGeek ticket deals before making your purchase."] },
                  { label: "DEAL", value: "ALERTS", title: "SeatGeek Offers – Track Ticket Price Drops", desc: "Set up price alerts to receive notifications when ticket prices change.", bullets: ["Track events you're interested in instead of constantly checking ticket prices manually.", "Use SeatGeek's shopping tools to compare listings and find better-value seats.", "Check current SeatGeek discounts and deals before buying."] },
                  { label: "DEAL", value: "SPORTS", title: "SeatGeek Deals – Sports Tickets", desc: "Browse sports tickets on SeatGeek for MLB, NFL, NBA, and other major sporting events.", bullets: ["Compare available seats and prices to find a ticket that fits your budget.", "Use filters and Deal Score to narrow down better-value listings.", "Check current SeatGeek offers before purchasing your sports tickets."] },
                  { label: "DEAL", value: "CONCERTS", title: "SeatGeek Deals – Concert Tickets", desc: "Find concert tickets on SeatGeek and compare listings from different sellers.", bullets: ["Browse upcoming tours, live performances, and popular music events.", "Use SeatGeek's shopping tools to compare prices and seat options.", "Look for current SeatGeek discounts before completing your purchase."] },
                  { label: "DEAL", value: "LIVE EVENTS", title: "SeatGeek Offers – Live Event Tickets", desc: "Shop live event tickets on SeatGeek for sports, concerts, theater, and more.", bullets: ["Compare ticket prices and seating options before choosing your seats.", "Use available filters to find tickets based on price and other preferences.", "Check the latest SeatGeek deals to maximize your ticket savings."] },
                  { label: "DEAL", value: "BEST VALUE", title: "SeatGeek Discount – Find the Best Ticket Value", desc: "Compare available listings to find better-value tickets for your favorite events.", bullets: ["SeatGeek's Deal Score helps shoppers identify listings that offer stronger value.", "Set price alerts to stay informed when prices change.", "Browse current SeatGeek offers before checkout to find available savings."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop SeatGeek: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is SeatGeek?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    SeatGeek is an online ticket marketplace that helps fans discover and purchase tickets for live events. The platform brings together tickets for sports, concerts, theater, comedy, festivals, and other entertainment experiences, allowing customers to browse events and compare available tickets in one place.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Instead of visiting multiple websites to search for an upcoming event, fans can use SeatGeek to explore different events, seating options, and ticket listings.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Sports fans can find tickets for professional and college sporting events, while music lovers can browse concerts and tours from artists across different genres. The platform also features comedy shows, theater productions, festivals, family entertainment, and other live experiences.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    One of SeatGeek's useful features is its interactive approach to exploring seats. Depending on the event, customers can review venue maps, compare seating locations, and evaluate ticket options before deciding where they want to sit.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    SeatGeek also provides tools that can help customers understand ticket value and compare listings, making the ticket-shopping process easier to navigate.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Whether you're buying tickets for yourself, planning a date night, taking friends to a game, or organizing a group outing, SeatGeek gives you a centralized place to discover live entertainment.

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
                        { icon: Music, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
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
    How to Find Better SeatGeek Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Buying",
        sub: "Before purchasing your tickets, check CouponsBit for the latest SeatGeek promo code, coupon codes, discount offers, vouchers, and other available promotions.",
      },
      {
        icon: Ticket,
        title: "Compare Different Seats",
        sub: "Don't automatically choose the first ticket listing you see. Compare nearby sections and seating locations to see whether another option provides better value.",
      },
      {
        icon: Calendar,
        title: "Consider Different Event Dates",
        sub: "If you're flexible about when you attend, compare multiple dates for the same artist, team, or show.",
      },
      {
        icon: Receipt,
        title: "Check the Full Ticket Cost",
        sub: "Always look at the final checkout amount, including applicable fees and taxes, when comparing ticket options.",
      },
      {
        icon: Sparkles,
        title: "Look for Event-Specific Offers",
        sub: "A particular event may have its own promotion or discounted ticket opportunity. Check the event listing before completing your purchase.",
      },
      {
        icon: Users,
        title: "Buy for Groups Carefully",
        sub: "If you're purchasing several tickets, compare the total cost across different listings. Even a small difference per ticket can become significant when multiplied across a group.",
      },
      {
        icon: ShoppingBag,
        title: "Check Major Shopping Periods",
        sub: "Black Friday, Cyber Monday, holiday periods, and major event seasons can be useful times to check for ticket promotions.",
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
          SeatGeek Promo Code, Coupon Code & Discount Offers
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
          title: "SeatGeek Promo Code – $20 Off Your First $100+ Order",
          discount: "$20 OFF",
          eligibility: "New Email Subscribers",
          conditions: "Min. order value $100; sign up for email updates to claim",
          applicableOn: "First Ticket Order"
        },
        {
          title: "SeatGeek Offers – Up to $20 Off Tickets",
          discount: "Up to $20 OFF",
          eligibility: "All Users",
          conditions: "Valid on eligible ticket purchases across sports, concerts & live events",
          applicableOn: "Live Event Tickets"
        },
        {
          title: "SeatGeek Deals – $10 Off First Purchase of $150+",
          discount: "$10 OFF",
          eligibility: "New Customers",
          conditions: "Min. order value $150 on eligible first-time ticket purchases",
          applicableOn: "First Ticket Order"
        },
        {
          title: "SeatGeek Discount – 10% Off Concert Tickets",
          discount: "10% OFF",
          eligibility: "All Users",
          conditions: "Valid on eligible live music and concert ticket listings",
          applicableOn: "Concert Tickets"
        },
        {
          title: "SeatGeek Offers – 10% Off Orders Over $50",
          discount: "10% OFF",
          eligibility: "All Users",
          conditions: "Min. order value $50 on qualifying sports, concert & comedy tickets",
          applicableOn: "Orders $50+"
        },
        {
          title: "SeatGeek Deals – $20 Off Tickets",
          discount: "$20 OFF",
          eligibility: "All Users",
          conditions: "Applies to qualifying sports, concert, and theater purchases",
          applicableOn: "Select Tickets"
        },
        {
          title: "SeatGeek Tickets – NBA Deals",
          discount: "Best Value / Deal Score",
          eligibility: "All Users",
          conditions: "Compare listings and use filters to find top-ranked NBA game deals",
          applicableOn: "NBA Tickets"
        },
        {
          title: "SeatGeek Tickets – Taylor Swift Events",
          discount: "Exclusive Listings",
          eligibility: "All Users",
          conditions: "Compare seat locations, prices & Deal Scores for tour events",
          applicableOn: "Taylor Swift Tickets"
        },
        {
          title: "SeatGeek Deals – Save Up to $5 on Select Tickets",
          discount: "Up to $5 OFF",
          eligibility: "All Users",
          conditions: "Valid on select budget-friendly ticket listings & events",
          applicableOn: "Select Event Tickets"
        },
        {
          title: "SeatGeek Ticket Deals – Find Lower-Priced Listings",
          discount: "Price Alert Deals",
          eligibility: "All Users",
          conditions: "Use Deal Score and price drop alerts to track competitive ticket prices",
          applicableOn: "All Events"
        },
        {
          title: "SeatGeek Offers – Track Ticket Price Drops",
          discount: "Real-Time Tracking",
          eligibility: "All Users",
          conditions: "Set custom price alerts to receive notifications on price drops",
          applicableOn: "Tracked Events"
        },
        {
          title: "SeatGeek Deals – Sports Tickets",
          discount: "Best Value Deals",
          eligibility: "All Users",
          conditions: "Compare available seats for MLB, NFL, NBA & major sporting events",
          applicableOn: "Sports Tickets"
        },
        {
          title: "SeatGeek Deals – Concert Tickets",
          discount: "Competitive Pricing",
          eligibility: "All Users",
          conditions: "Browse upcoming tours & compare live music performance listings",
          applicableOn: "Concert Tickets"
        },
        {
          title: "SeatGeek Offers – Live Event Tickets",
          discount: "Flexible Options",
          eligibility: "All Users",
          conditions: "Compare seat options & apply available discounts at checkout",
          applicableOn: "Sports, Concerts & Theater"
        },
        {
          title: "SeatGeek Discount – Find the Best Ticket Value",
          discount: "Deal Score Savings",
          eligibility: "All Users",
          conditions: "Leverage automated Deal Score tools & price alerts for maximum savings",
          applicableOn: "Sitewide Events"
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
            Planning your next night out doesn't have to mean spending hours searching for tickets. Whether you're looking forward to a live concert, a major sporting event, a comedy show, or a festival, SeatGeek gives fans a convenient way to discover and buy tickets for events across the US.
          </p>
          <p>
            Before you book your next event, checking for a SeatGeek promo code on CouponsBit can be a worthwhile step. You can also find information about SeatGeek coupon codes, discount offers, ticket deals, vouchers, and other promotions that may help you get more value from your event budget.
          </p>
          <p>
            Ticket prices and availability can change quickly, so it's always smart to compare the available options and check the terms of any promotion before completing your purchase.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a SeatGeek Promo Code</h3>
    <p>A SeatGeek promo code can provide an opportunity to save on an eligible ticket purchase, depending on the promotion and its terms.</p>
    <p>If you're already planning to attend an event, check CouponsBit before completing your purchase. You may find a promotional code that applies to your order or discover another ticket offer worth considering.</p>
    <p>Promotions can have specific requirements. A code may be limited to certain customers, events, ticket types, purchase amounts, or promotional periods.</p>
    <p>Before applying an offer, check the expiration date and eligibility conditions. If a particular code doesn't apply to your tickets, compare it with other available SeatGeek offers rather than assuming there are no savings available.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">SeatGeek Coupon Code and Discount Offers</h3>
    <p>Looking for a SeatGeek coupon code is a simple way to start your search for ticket savings, but promotions aren't limited to traditional coupon codes.</p>
    <p>Depending on the current offers, shoppers may find event-specific promotions, discounts, special ticket offers, or other incentives.</p>
    <p>The best deal depends on the event you're attending and the tickets you're considering. A discount may be more valuable on a larger ticket purchase, while an event-specific offer could work better for a particular show or game.</p>
    <p>Remember to look at the final amount you'll pay. Ticket prices, fees, taxes, and other applicable charges can affect your total, so compare the complete checkout amount rather than focusing only on the advertised ticket price.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">What Can You Buy on SeatGeek?</h3>
    <p>SeatGeek covers a wide range of live entertainment, making it useful for different types of fans and occasions.</p>
    <p><strong>Sports Tickets:</strong> Sports are a major part of the live-event experience on SeatGeek. Depending on availability, fans can look for tickets to professional and college sporting events.</p>
    <p>You may find tickets for football, basketball, baseball, hockey, soccer, and other sports.</p>
    <p>Whether you're following your favorite team throughout the season or planning to attend a major rivalry game, comparing ticket listings before purchasing can help you find an option that fits your preferences and budget.</p>
    <p><strong>Concert Tickets:</strong> Music fans can explore concerts and tours featuring artists across a variety of genres.</p>
    <p>From major arena performances to smaller live shows, SeatGeek can help fans discover upcoming events and compare available ticket options.</p>
    <p>If you're planning to buy several tickets for a concert, check for a SeatGeek discount code before completing the transaction.</p>
    <p><strong>Comedy Shows:</strong> Looking for a night of laughs? SeatGeek also features tickets for stand-up comedians, comedy tours, and other live comedy events.</p>
    <p>Comedy shows can make great date nights, birthday experiences, or outings with friends.</p>
    <p><strong>Theater and Performing Arts:</strong> Fans of theater and performing arts can browse available events and find tickets for shows, performances, and other productions.</p>
    <p>Availability varies by location and event, so check the listings for the latest information.</p>
    <p><strong>Festivals:</strong> Music and cultural festivals can attract large crowds and often feature multiple performers or activities in one event.</p>
    <p>If you're planning to attend a festival, compare available ticket listings and check for any current promotions before purchasing.</p>
    <p><strong>Family Entertainment:</strong> Live entertainment isn't just for adults. Depending on the event and location, families can find tickets for shows and other experiences suitable for children and groups.</p>
    <p><strong>College Sports:</strong> College sports fans can also explore available tickets for games and events involving university teams.</p>
    <p>From football and basketball to other collegiate competitions, availability depends on the event and participating venue.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">SeatGeek Event Deals</h3>
    <p>Not every opportunity to save comes in the form of a coupon code.</p>
    <p>Event-specific offers can sometimes make certain tickets more attractive, especially when you're flexible about the event date, seating location, or ticket type.</p>
    <p>If you don't have a specific seat in mind, compare different sections and listings. A slightly different seating location could provide better overall value.</p>
    <p>You should also consider the event date. Popular dates can have different ticket demand from less busy dates, which can affect available listings.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">SeatGeek Ticket Prices and Fees</h3>
    <p>When shopping for tickets, it's important to understand the difference between the displayed ticket price and the final amount at checkout.</p>
    <p>SeatGeek provides information about ticket listings and applicable fees, and the total cost can vary depending on the event, tickets, and order.</p>
    <p>When comparing offers, look at the complete purchase total. A ticket that initially appears cheaper isn't necessarily the best deal if additional fees make the final price higher.</p>
    <p>This is particularly important when using a SeatGeek promo code. Make sure the promotion has actually been applied and check how it affects your final eligible purchase.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">SeatGeek for Sports Fans</h3>
    <p>Sports tickets can be one of the most exciting purchases you make, especially when you're attending an important matchup.</p>
    <p>You can use SeatGeek to explore available tickets for different sporting events and compare seating options.</p>
    <p><strong>NFL:</strong> Football fans can look for tickets to NFL games and plan everything from regular-season matchups to highly anticipated games.</p>
    <p><strong>NBA:</strong> Basketball fans can browse tickets for NBA games and compare available seating options.</p>
    <p><strong>MLB:</strong> Baseball season brings plenty of opportunities to catch a live game. SeatGeek can help fans explore available tickets for participating teams and venues.</p>
    <p><strong>NHL:</strong> Hockey fans can also search for tickets to NHL games and compare listings before making a purchase.</p>
    <p><strong>MLS and Soccer:</strong> Soccer continues to attract fans across the US, and SeatGeek provides access to available tickets for participating soccer events and teams.</p>
    <p>The exact selection changes throughout the year, so check current listings for upcoming games.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">SeatGeek Seasonal Promotions and Major US Events</h3>
    <p>The US live-entertainment calendar is packed throughout the year, and certain periods can be particularly useful for finding events and ticket promotions.</p>
    <p><strong>Super Bowl Season:</strong> The Super Bowl is one of the biggest sporting events in the US. While tickets can be highly sought after, fans can also use SeatGeek to explore available listings and related events.</p>
    <p><strong>March Madness:</strong> College basketball becomes a major focus during March Madness. Fans looking to experience tournament action can check available ticket listings and compare options.</p>
    <p><strong>Summer Concert Season:</strong> Summer is one of the busiest periods for live music. Outdoor concerts, stadium tours, festivals, and other events give fans plenty of opportunities to see their favorite artists.</p>
    <p>If you're planning multiple concerts, checking for a SeatGeek coupon code before purchasing can be worthwhile.</p>
    <p><strong>Fourth of July:</strong> Independence Day often brings concerts, festivals, sporting events, and other live entertainment across the country.</p>
    <p><strong>Back-to-School Season:</strong> As summer comes to an end, sports seasons and concert schedules continue. College sports, professional sports, comedy tours, and fall events can all provide opportunities for live entertainment.</p>
    <p><strong>Halloween:</strong> Halloween isn't limited to costumes and candy. Concerts, themed events, comedy shows, festivals, and other entertainment can also take place around the holiday.</p>
    <p><strong>Thanksgiving Weekend:</strong> Thanksgiving weekend can be a popular time for families and friends to get together. Depending on your location, you may find sports games, concerts, theater productions, and other events.</p>
    <p><strong>Black Friday and Cyber Monday:</strong> While these shopping events are best known for retail discounts, they can also be a good time to check entertainment platforms for available ticket promotions.</p>
    <p>If you're planning future concerts, sporting events, or shows, check SeatGeek offers during the holiday shopping period.</p>
    <p><strong>Christmas and Holiday Season:</strong> The holiday season brings concerts, theater productions, sporting events, comedy shows, and family entertainment.</p>
    <p>Tickets can also make memorable gifts, particularly for someone who already has a favorite team, artist, or performer.</p>
  </div>
</div>

          {/* Box Section: How to Use */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">
              How to Use a SeatGeek Promo Code
            </h3>
            <p className="text-gray-600 font-medium -mt-4 mb-4">
              If you find a SeatGeek promo code through CouponsBit, follow the instructions associated with the specific promotion. A typical process may include:
            </p>
            <div className="space-y-6">
              {[
                "Find the SeatGeek offer you want to use.",
                "Visit SeatGeek and sign in or create an account if required.",
                "Search for your preferred event.",
                "Browse available ticket listings and seating options.",
                "Select the tickets you want.",
                "Proceed to checkout.",
                "Enter the applicable promotional code where requested.",
                "Apply the code.",
                "Confirm that the promotion has been reflected in your eligible purchase.",
                "Review the complete order total and finish your purchase."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium italic mt-4 pt-4 border-t border-gray-100">
              If the code doesn't work, check whether it has expired or whether your tickets meet the promotion's requirements. Some offers may have restrictions relating to event type, purchase amount, account eligibility, or other conditions.
            </p>
          </div>

          {/* Section: Why Use */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Why Use CouponsBit for SeatGeek Offers?
            </h3>
            <p>
              Buying tickets can be a significant part of your entertainment budget, so checking for available savings before you purchase makes sense.
            </p>
            <p>
              CouponsBit gives fans a convenient place to search for a SeatGeek promo code and discover related coupon codes, discounts, vouchers, ticket offers, and promotions.
            </p>
            <p>
              You don't have to spend hours searching across different websites for potential savings. Instead, check available offers, review their conditions, and compare them with the tickets you're considering.
            </p>
            <p>
              Whether you're attending a concert, watching your favorite team, going to a comedy show, or planning a special night out, a little research before checkout can help you make a more informed ticket purchase.
            </p>
          </div>

          {/* Section: Save Before Next Event */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Find a SeatGeek Deal Before Your Next Event
            </h3>
            <p>
              Whether you're planning to see your favorite artist, cheer for your team, laugh through a comedy show, or experience a major live event, SeatGeek gives you a convenient way to explore ticket options.
            </p>
            <p>
              Since ticket availability and promotions can change quickly, checking for savings before you purchase can be worthwhile.
            </p>
            <p>
              Before completing your next ticket order, visit CouponsBit to look for the latest SeatGeek promo code, along with coupon codes, discount offers, vouchers, ticket deals, and other promotions. Compare the available options with your event and choose the offer that makes the most sense for your plans.
            </p>
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
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About SeatGeek Promo Codes
          </h3>
          {[
            { q: "Does SeatGeek offer promo codes?", a: "Yes. SeatGeek may offer promotional codes and other ticket-related promotions. Availability, eligibility, and terms can vary by offer." },
            { q: "Where can I find a SeatGeek promo code?", a: "You can check CouponsBit for available SeatGeek promo codes, coupon codes, discount offers, vouchers, and ticket promotions before purchasing." },
            { q: "How do I use a SeatGeek coupon code?", a: "Select your event and tickets, proceed to checkout, and enter the applicable coupon or promotional code in the designated field. Confirm that the offer has been applied before completing your purchase." },
            { q: "Why isn't my SeatGeek promo code working?", a: "The code may have expired, or your purchase may not meet the promotion's requirements. Some offers can also be limited to particular customers, events, ticket types, or purchase conditions." },
            { q: "Can I use a SeatGeek discount code on any event?", a: "Not necessarily. Promotional codes can have specific eligibility requirements. Check the terms of the individual offer before purchasing your tickets." },
            { q: "Does SeatGeek sell sports tickets?", a: "Yes. SeatGeek offers tickets for various sporting events, including professional and college sports, subject to availability." },
            { q: "Can I buy concert tickets through SeatGeek?", a: "Yes. Fans can browse available concert and live-music events and compare ticket listings." },
            { q: "Does SeatGeek have comedy and theater tickets?", a: "Yes. Depending on location and availability, SeatGeek features tickets for comedy shows, theater, performing arts, and other live entertainment." },
            { q: "Are SeatGeek ticket fees included in the advertised price?", a: "Ticket pricing and fees can vary depending on the event and purchase. Always review the complete checkout total before completing your transaction." },
            { q: "Does SeatGeek have Black Friday deals?", a: "SeatGeek may feature promotions around major shopping periods, although availability can change. Check current offers around Black Friday and Cyber Monday." },
            { q: "When is the best time to look for SeatGeek deals?", a: "There isn't one guaranteed time when every ticket will be cheapest. However, checking around major shopping periods, seasonal events, concert seasons, and major sporting occasions can help you discover available promotions." },
            { q: "How can I save money on SeatGeek tickets?", a: "Start by checking CouponsBit for a SeatGeek promo code, then compare ticket listings, seating sections, event dates, and applicable promotions. Always consider the complete purchase total when deciding which ticket provides the best value." }
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
            Popular SeatGeek Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "SeatGeek Promo Code",
              "Concert Tickets",
              "NBA Tickets",
              "NFL Tickets",
              "MLB Tickets",
              "Broadway Shows",
              "Comedy Specials",
              "First Order Discount"
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
            Today's Top SeatGeek Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "$20 OFF FIRST ORDER", sub: "Save $20 On Your First SeatGeek Booking" },
              { heading: "CONCERT SPECIALS", sub: "Up To 30% Off Selected Live Shows" },
              { heading: "SPORTS TICKET DEALS", sub: "Exclusive Discounts On Major League Games" },
              { heading: "THEATER & COMEDY", sub: "Best Seats At Lowest Available Prices" }
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
                  href="https://seatgeek.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Shop SeatGeek: ${deal.heading}`} 
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
