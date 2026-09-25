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
  LayoutGrid,Calendar, Receipt, Zap, Gift,
  Search,
  ShoppingBag,
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
  { id: "d1", label: "NEW", heading: "New User Discount", sub: "Latest Deals" },
  { id: "d2", label: "SALE", heading: "Concert Ticket Deals", sub: "Featured Picks" },
  { id: "d3", label: "SALE", heading: "Sports Event Discounts", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Promo Code Savings, Up To 20% OFF", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Rewards Program", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Stubhub", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/stubhub-coupon-code_fplhay.webp", dealText: "Flat 10% OFF", href: "/stores/stubhub-discount-code" },
  { name: "Viagogo", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/viagogo-coupon-code_t65aol.webp", dealText: "Starting at $332", href: "/stores/viagogo-discount-code" },
  { name: "Spirit Halloween", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/spirti-logo_x4nbor.webp", dealText: "Up To 75% OFF", href: "/stores/spirit-halloween-discount-code" },
  { name: "vegas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/vegas-logo_sifnax.webp", dealText: "Up To 35% OFF", href: "/stores/vegas-discount-code" },
  { name: "Klook", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002063/klook-logo_alzz2a.webp", dealText: "Up To 50% OFF", href: "/stores/klook-discount-code" },
  { name: "Yas Island", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/yas-island-logo_krotjw.webp", dealText: "Up To 50% OFF", href: "/stores/yas-island-promo-code" },
];

const STORE_URL = "https://www.vividseats.com";

export default function VividSeatsCouponsContent() {
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
              <span className="text-black font-extrabold">Vivid Seats</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788951742/vividset-logo_pzyiuj.webp" alt="Vivid Seats" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Vivid Seats Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(10.8k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Vivid Seats promo codes to get 15% OFF your first ticket purchase and save $20 on orders over $200. Students can also enjoy an extra 10% OFF through Student Beans while booking concerts, sports, theatre, and live event tickets in Sept 2026.
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
                    { icon: Tag, val: "16", label: "Offers" },
                    { icon: Percent, val: "350+", label: "Deals" },
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
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789642719/43_mlgpzb.webp" alt="Vivid Seats Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Vivid Seats Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "STUDENT", value: "10% OFF", title: "Vivid Seats Promo Code – Student Tickets | 10% OFF", desc: "Students can enjoy an exclusive 10% OFF on eligible Vivid Seats tickets for concerts, sports, theatre and more.", bullets: ["Use Student Beans to unlock the student discount and save on your next ticket purchase.", "Use a promo code for Vivid Seats tickets and explore Vivid Seats discount promo code offers for additional eligible savings."] },
                  { label: "UNDER", value: "$100", title: "Vivid Seats Promo Code – Events Under $100", desc: "Discover exciting Vivid Seats tickets for events priced under $100 and find affordable options for live entertainment.", bullets: ["Explore sports, concerts and other events with tickets across a wide range of venues and seating options.", "Look for a Vivid Seats coupon promo code to save more when purchasing eligible tickets."] },
                  { label: "FROM", value: "$71", title: "Vivid Seats Promo Code – BYU Cougars vs Colorado State Rams | From $71", desc: "Get tickets to BYU Cougars at Colorado State Rams at Canvas Stadium in Fort Collins, with prices starting from $71.", bullets: ["The football game takes place Saturday, September 19 at 5:30 PM, with multiple seating and ticket options available.", "Grab your Vivid tickets early and check for a Vivid Seats discount promo code before completing your ticket purchase."] },
                  { label: "DEAL", value: "$20 OFF", title: "Vivid Seats – Save $20 On Orders Over $200 Book Now On Vivid Seats ", desc: "Save $20 OFF when you spend $200 or more on eligible Vivid Seats ticket purchases.", bullets: ["Enjoy the offer across qualifying tickets and plan your next concert, sports or theatre experience for less.", "Apply this Vivid Seats offer and look for a promo code for Vivid Seats tickets to maximize your eligible savings."] },
                  { label: "FROM", value: "$325", title: "Vivid Seats – 2026 Yahn Dawn Music Festival | From $325", desc: "Get tickets to the 2026 Yahn Dawn Music Festival 3-Day Pass starting from $325 at Meadow Creek in Buena Vista, Colorado.", bullets: ["The festival runs from September 18–20, 2026, giving music fans three days of live entertainment.", "Shop Vivid Seats concert tickets and check for a Vivid Seats coupon promo code before booking."] },
                  { label: "FROM", value: "$5", title: "Vivid Seats – Seattle Seahawks Tickets | From $5", desc: "Catch Seattle Seahawks tickets starting from just $5 and experience the excitement of live NFL action.", bullets: ["Browse different games and seating options to find tickets that match your budget and preferred game-day experience.", "Search for a Vivid Seats discount promo code and grab your Seahawks tickets early for the best available selection."] },
                  { label: "NEW", value: "15% OFF", title: "Vivid Seats – First Purchase Offer | 15% OFF", desc: "Get 15% OFF your first Vivid Seats ticket purchase and enjoy more live entertainment for less.", bullets: ["Shop tickets for concerts, sports, theatre and major events with transparent pricing and no surprises.", "Take advantage of this first-purchase offer and check for a promo code for Vivid Seats tickets before checkout."] },
                  { label: "NFL", value: "SUPER BOWL", title: "Vivid Seats – Super Bowl Tickets & Major Sports Events", desc: "Explore Vivid Seats Super Bowl tickets and discover premium options for one of the biggest sporting events.", bullets: ["Browse Vivid Seats tickets for NFL, MLB and other major sporting events in a variety of seating sections.", "Look for a Vivid Seats discount promo code when shopping for high-demand sports tickets."] },
                  { label: "MLB", value: "YANKEES", title: "Vivid Seats – Yankees Tickets & MLB Games", desc: "Find New York Yankees tickets Vivid Seats listings and explore available options for upcoming MLB games.", bullets: ["Compare Yankees tickets Vivid Seats prices, seating options and available listings before making your purchase.", "Check for a Vivid Seats coupon promo code to look for additional savings on eligible Yankees tickets."] },
                  { label: "MLB", value: "METS", title: "Vivid Seats – New York Mets Tickets & MLB Games", desc: "Shop New York Mets tickets Vivid Seats listings and find tickets for upcoming Mets games.", bullets: ["Explore different seating options and ticket listings to experience MLB action at Citi Field.", "Use Vivid Tix to browse available tickets and check for a Vivid Seats discount promo code before checkout."] },
                  { label: "NFL", value: "COWBOYS", title: "Vivid Seats – Dallas Cowboys Tickets & NFL Games", desc: "Find Dallas Cowboys tickets Vivid Seats listings and explore available options for upcoming NFL games.", bullets: ["Browse Cowboys tickets Vivid Seats selections across different seating sections and price ranges.", "Search for a promo code for Vivid Seats tickets to discover potential savings on eligible Cowboys tickets."] },
                  { label: "DEAL", value: "CONCERTS", title: "Vivid Seats – Concert Tickets & Live Music", desc: "Discover Vivid Seats concert tickets for major tours, festivals and live music events.", bullets: ["Explore Vivid Seats concert listings and find tickets for your favourite artists and upcoming performances.", "Check for a Vivid Seats coupon promo code before purchasing your tickets and make the most of available offers."] },
                  { label: "DEAL", value: "WALLEN", title: "Vivid Seats – Morgan Wallen Tickets", desc: "Find Vivid Seats Morgan Wallen tickets and explore available listings for upcoming live performances.", bullets: ["Compare ticket prices, seating options and available listings to find the right concert experience.", "Look for a Vivid Seats discount promo code and save on eligible Morgan Wallen ticket purchases."] },
                  { label: "DEAL", value: "BTS", title: "Vivid Seats – BTS Tickets & Concert Events", desc: "Discover BTS Vivid Seats listings and explore available ticket options for fans looking to attend live performances.", bullets: ["Browse Vivid Seats concert tickets and compare available seating and pricing options.", "Check for a promo code for Vivid Seats tickets to find available savings on eligible concert purchases."] },
                  { label: "DEAL", value: "CHRIS BROWN", title: "Vivid Seats – Chris Brown Tickets", desc: "Shop Chris Brown tickets Vivid Seats listings and explore available options for upcoming concerts and performances.", bullets: ["Find different seating choices and ticket listings to plan your next live music experience.", "Look for a Vivid Seats coupon promo code before checkout to maximize eligible ticket savings."] },
                  { label: "MLB", value: "RED SOX", title: "Vivid Seats – Boston Red Sox Tickets", desc: "Find Vivid Seats Boston Red Sox tickets and explore available listings for upcoming MLB games.", bullets: ["Browse different ticket prices and seating options to enjoy live Red Sox baseball at Fenway Park.", "Check for a Vivid Seats discount promo code and look for additional savings on eligible sports tickets."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Vivid Seats: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About Vivid Seats</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Vivid Seats is an online ticket marketplace where fans can discover tickets for a wide variety of live entertainment events across the United States and beyond.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform features tickets for professional and college sports, concerts, theater productions, comedy events, festivals, and other live experiences. Instead of visiting individual team, artist, venue, or event websites separately, shoppers can browse different events through one ticket marketplace.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Sports fans can explore tickets for leagues and teams across the country, while music lovers can search for performances from major artists and touring acts. Theater fans can also find tickets for Broadway productions, shows, and other stage performances.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Vivid Seats also provides tools that allow customers to search for events based on location, date, category, artist, team, or venue.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The marketplace model means ticket availability and prices can vary depending on the event, seating location, demand, and other factors. Because of this, it's useful to compare available tickets and review the complete order details before making a purchase.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For fans who already know what they want to see and for those simply looking for something exciting to do, Vivid Seats offers a convenient way to explore live entertainment.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Music, name: "Concert Tickets", count: "350+", color: "text-blue-500", href: "/categories/entertainment" },
                        { icon: Ticket, name: "Sports Tickets", count: "220+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Sparkles, name: "Rewards Program", count: "40+", color: "text-teal-500", href: "/categories/entertainment" },
                        { icon: ShoppingBag, name: "Theater & Events", count: "130+", color: "text-pink-500", href: "/categories/entertainment" },
                        { icon: Search, name: "Live Entertainment", count: "300+", color: "text-orange-500", href: "/categories/entertainment" },
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
    How to Find Better Vivid Seats Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Buying",
        sub: "Before purchasing tickets, check CouponsBit for the latest Vivid Seats promo code, coupon codes, discount offers, vouchers, and ticket promotions.",
      },
      {
        icon: Calendar,
        title: "Compare Events and Dates",
        sub: "If you're flexible, comparing different dates or similar events can help you find an option that better fits your budget.",
      },
      {
        icon: Ticket,
        title: "Consider Different Seating Options",
        sub: "The best seat isn't always the most expensive one. Compare seating locations and ticket types before deciding.",
      },
      {
        icon: Receipt,
        title: "Look at the Complete Cost",
        sub: "Don't focus only on the initial ticket amount. Review the complete order total and any applicable fees before completing your purchase.",
      },
      {
        icon: Zap,
        title: "Shop Early for Popular Events",
        sub: "High-demand concerts, playoff games, championship events, and major festivals can sell quickly. If you already know which event you want to attend, checking ticket availability early can give you more options.",
      },
      {
        icon: Sparkles,
        title: "Check for Seasonal Promotions",
        sub: "Major holidays, summer entertainment season, Black Friday, Cyber Monday, and other promotional periods can be useful times to look for available offers.",
      },
      {
        icon: Gift,
        title: "Use Tickets as Gifts",
        sub: "If you're struggling to find a gift for a sports or music fan, an event ticket can turn into an experience they'll remember.",
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
          Vivid Seats Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border border-gray-200 bg-white shadow-sm">
  <table className="w-full min-w-[850px] border-collapse text-left" aria-label="Vivid Seats Offers Summary">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Offer</th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Discount / Price</th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Eligibility</th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Key Conditions</th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[14px] font-bold text-gray-600">
      
     
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats Promo Code – Student Tickets | 10% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          10% OFF
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          Verified Students
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Must verify status via Student Beans to unlock code
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Eligible Student Tickets
        </td>
      </tr>

      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats Promo Code – Events Under $100
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Under $100
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Affordable tickets across sports, concerts, and theatre venues
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Select Live Events
        </td>
      </tr>

      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats Promo Code – BYU Cougars vs Colorado State Rams | From $71
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          From $71
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Valid for game on Sat, Sept 19 at Canvas Stadium, Fort Collins
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          BYU vs Colorado State Tickets
        </td>
      </tr>

      
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats – Save $20 On Orders Over $200
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          $20 OFF
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          Orders $200+
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Requires minimum order total of $200 on eligible bookings
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Entire Order ($200+)
        </td>
      </tr>

 
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats – 2026 Yahn Dawn Music Festival | From $325
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          From $325
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          3-Day Pass for festival on Sept 18–20, 2026 at Meadow Creek, CO
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Yahn Dawn Music Festival Passes
        </td>
      </tr>

     
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats – Seattle Seahawks Tickets | From $5
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          From $5
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Starting price for select NFL game listings and seating sections
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Seattle Seahawks Game Tickets
        </td>
      </tr>

     
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats – First Purchase Offer | 15% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          15% OFF
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          First-Time Customers
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Valid on initial ticket purchase across concerts, sports, or theatre
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          First Ticket Order
        </td>
      </tr>

      
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats – Super Bowl Tickets & Major Sports Events
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Special Pricing
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Premium seating options for Super Bowl, NFL, MLB, and major events
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Major Sports Events & Super Bowl
        </td>
      </tr>

      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats – Yankees Tickets & MLB Games
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Market Rates
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Compare prices and seating sections for upcoming MLB games
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          New York Yankees Tickets
        </td>
      </tr>

     
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats – New York Mets Tickets & MLB Games
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Market Rates
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Browse live listings and seat choices for MLB games at Citi Field
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          New York Mets Tickets
        </td>
      </tr>

      
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats – Dallas Cowboys Tickets & NFL Games
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Market Rates
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Available across various price ranges and seating options
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Dallas Cowboys Tickets
        </td>
      </tr>

    
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats – Concert Tickets & Live Music
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Varies by Event
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Covers major music tours, festivals, and live stage performances
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Concert & Festival Listings
        </td>
      </tr>

    
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats – Morgan Wallen Tickets
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Market Rates
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Compare available tour seating and live performance dates
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Morgan Wallen Tour Tickets
        </td>
      </tr>

      
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats – BTS Tickets & Concert Events
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Market Rates
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Browse upcoming concert dates and live performance seating
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          BTS Concert Tickets
        </td>
      </tr>

      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats – Chris Brown Tickets
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Market Rates
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Check live inventory for tour seating and ticket pricing
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Chris Brown Concert Tickets
        </td>
      </tr>

      
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50 last:border-b-0">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Vivid Seats – Boston Red Sox Tickets
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Market Rates
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Find available options for live Red Sox MLB games at Fenway Park
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Boston Red Sox Tickets
        </td>
      </tr>

    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            The best live events are the ones you remember long after the final song, last play, or closing curtain. Whether you're planning to see your favorite artist, cheer for your team from the stands, or finally catch that show everyone's talking about, finding the right tickets can make the experience even better.
          </p>
          <p>
            Vivid Seats gives fans a way to discover and purchase tickets for concerts, sports, theater, comedy shows, festivals, and other live events. Before completing your ticket purchase, checking for a Vivid Seats promo code can be a smart way to look for potential savings.
          </p>
          <p>
            CouponsBit brings together Vivid Seats coupon codes, discount offers, vouchers, ticket deals, event promotions, and other savings opportunities so shoppers can check for an offer before heading to checkout.
          </p>
          <p>
            Whether you're buying tickets for yourself, planning a night out with friends, surprising someone with a concert, or organizing a sports weekend, comparing available offers can help you get more value from your entertainment budget.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">What Is Vivid Seats?</h3>
    <p>Vivid Seats is an online ticket marketplace where fans can discover tickets for a wide variety of live entertainment events across the United States and beyond.</p>
    <p>The platform features tickets for professional and college sports, concerts, theater productions, comedy events, festivals, and other live experiences. Instead of visiting individual team, artist, venue, or event websites separately, shoppers can browse different events through one ticket marketplace.</p>
    <p>Sports fans can explore tickets for leagues and teams across the country, while music lovers can search for performances from major artists and touring acts. Theater fans can also find tickets for Broadway productions, shows, and other stage performances.</p>
    <p>Vivid Seats also provides tools that allow customers to search for events based on location, date, category, artist, team, or venue.</p>
    <p>The marketplace model means ticket availability and prices can vary depending on the event, seating location, demand, and other factors. Because of this, it's useful to compare available tickets and review the complete order details before making a purchase.</p>
    <p>For fans who already know what they want to see and for those simply looking for something exciting to do, Vivid Seats offers a convenient way to explore live entertainment.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a Vivid Seats Promo Code</h3>
    <p>A Vivid Seats promo code can provide an opportunity to save on an eligible ticket purchase when a promotion is available.</p>
    <p>Before buying your tickets, check CouponsBit to see whether there's a current promotional offer that matches your event.</p>
    <p>Promotions can have specific terms and conditions. Some may apply to particular events, ticket categories, customers, or purchase periods. Others may be limited-time offers connected to a particular campaign.</p>
    <p>Always check the details of the offer before using it. Pay attention to expiration dates, eligibility requirements, exclusions, and any other restrictions.</p>
    <p>If one promotion doesn't work for your selected tickets, you can compare it with other available Vivid Seats offers before completing your order.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Vivid Seats Coupon Code and Ticket Discounts</h3>
    <p>A Vivid Seats coupon code is one way to look for savings when buying tickets, but promotions aren't limited to coupon codes.</p>
    <p>Depending on the current offers, shoppers may find discounts, promotional campaigns, ticket deals, vouchers, or event-specific savings.</p>
    <p>The most useful offer will depend on what you're purchasing.</p>
    <p>For example, a discount on sports tickets may be useful when you're planning a game-day experience, while a promotional offer on concert tickets could help when you're buying multiple seats for a group.</p>
    <p>Before relying on a discount, make sure the offer applies to your selected event and review the final order total before completing the transaction.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">What Can You Find on Vivid Seats?</h3>
    <p>Vivid Seats covers a broad range of live entertainment, making it possible to find tickets for different interests and occasions.</p>
    <p><strong>Concert Tickets:</strong> Music fans can browse tickets for concerts and live performances from artists across different genres.</p>
    <p>Whether you're into pop, rock, country, hip-hop, R&B, electronic music, or another genre, you can search for upcoming performances and compare available seating options.</p>
    <p><strong>Sports Tickets:</strong> Sports are a major part of the live-event experience.</p>
    <p>Vivid Seats features tickets for professional and college sporting events, allowing fans to search for games based on teams, leagues, cities, dates, and venues.</p>
    <p>Depending on availability, you can find tickets for regular-season games, rivalry matchups, playoffs, championship events, and other sporting occasions.</p>
    <p><strong>NFL Tickets:</strong> Football fans can look for tickets to NFL games throughout the season.</p>
    <p>From regular-season matchups to playoff games, attending a game in person can turn a Sunday afternoon into a memorable experience.</p>
    <p><strong>NBA Tickets:</strong> Basketball fans can search for tickets to NBA games featuring teams and players they want to see live.</p>
    <p>High-profile matchups and games involving popular teams can attract significant demand, so checking ticket availability early can be useful.</p>
    <p><strong>MLB Tickets:</strong> Baseball offers one of the longest professional sports seasons in the US, giving fans plenty of opportunities to catch a game.</p>
    <p>Vivid Seats can be used to explore available MLB tickets for different teams and matchups.</p>
    <p><strong>NHL Tickets:</strong> Hockey fans can search for NHL games and find tickets for matchups throughout the season.</p>
    <p><strong>College Sports:</strong> College football, basketball, and other collegiate sports have passionate fan bases across the US.</p>
    <p>Rivalry games, conference matchups, tournaments, and postseason events can be particularly popular.</p>
    <p><strong>Theater Tickets:</strong> Live entertainment isn't limited to stadiums and arenas.</p>
    <p>Theater fans can explore tickets for Broadway productions, touring shows, musicals, plays, and other stage performances.</p>
    <p><strong>Comedy Shows:</strong> If you'd rather spend your evening laughing than singing along, comedy shows can make a great night out.</p>
    <p>Vivid Seats features tickets for comedians and live comedy performances, depending on the current event schedule.</p>
    <p><strong>Festivals:</strong> Music and cultural festivals can bring multiple performances and experiences together in one event.</p>
    <p>If you're planning to attend a festival, check ticket options and available promotions before purchasing.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Vivid Seats Deals for Major US Events</h3>
    <p>The US has a packed calendar of sports, concerts, festivals, theater productions, and cultural events. Certain periods can be particularly popular for ticket shoppers.</p>
    <p><strong>Super Bowl Season:</strong> The Super Bowl is one of the biggest sporting events in the US.</p>
    <p>For fans looking to experience championship football in person, ticket demand can be extremely high. If you're planning ahead, check available offers before making a purchase.</p>
    <p><strong>March Madness:</strong> College basketball takes center stage during March Madness.</p>
    <p>The tournament attracts fans from across the country, and tickets can be especially sought after as teams advance through the brackets.</p>
    <p><strong>MLB Opening Day:</strong> Baseball season brings another wave of live sports excitement.</p>
    <p>Opening Day can be a popular occasion for fans who want to kick off the season at the ballpark.</p>
    <p><strong>NBA and NHL Playoffs:</strong> The atmosphere of a playoff game can be very different from a regular-season matchup.</p>
    <p>As teams move closer to their championship goals, ticket demand can increase, making it worthwhile to compare available options early.</p>
    <p><strong>Summer Concert Season:</strong> Summer is a major period for concerts, festivals, outdoor performances, and stadium tours.</p>
    <p>If you're planning a summer music experience, check for a Vivid Seats discount code before completing your ticket purchase.</p>
    <p><strong>Holiday Events:</strong> The holiday season brings special concerts, theater productions, comedy shows, sporting events, and seasonal performances.</p>
    <p>Tickets can also make memorable gifts for friends and family.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Vivid Seats for Gifting</h3>
    <p>Tickets can be more exciting than a traditional gift because they create an experience rather than simply adding another item to someone's home.</p>
    <p><strong>Birthday Gifts:</strong> If you know someone's favorite artist, team, comedian, or show, tickets can make a memorable birthday surprise.</p>
    <p><strong>Anniversary Experiences:</strong> A concert, theater performance, or sporting event can turn an anniversary into a shared experience.</p>
    <p><strong>Graduation Gifts:</strong> Graduation is a major milestone, and tickets to a favorite artist or sporting event can be a fun way to celebrate.</p>
    <p><strong>Holiday Gifts:</strong> Tickets can also work well as Christmas or holiday gifts, especially when you know the recipient's entertainment interests.</p>
    <p><strong>Gifts for Sports Fans:</strong> For someone who lives and breathes sports, tickets to a favorite team can be much more meaningful than a generic present.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Vivid Seats Sale and Seasonal Promotions</h3>
    <p>Ticket promotions can change throughout the year, but several US shopping and entertainment periods are worth watching.</p>
    <p><strong>Valentine's Day:</strong> A concert, comedy show, or theater performance can make an entertaining Valentine's Day experience.</p>
    <p>Instead of buying another traditional gift, consider planning a night around a live event.</p>
    <p><strong>Spring Break:</strong> Spring break is a popular period for travel and entertainment.</p>
    <p>Depending on the destination, travelers may look for concerts, sporting events, festivals, and other live experiences.</p>
    <p><strong>Summer:</strong> Summer brings outdoor concerts, music festivals, sporting events, and tours.</p>
    <p>If you're planning a busy summer calendar, compare ticket options and check for a Vivid Seats coupon code before purchasing.</p>
    <p><strong>Back-to-School:</strong> College students often look for entertainment options during the new academic year.</p>
    <p>Concerts, college sports, professional sports, and comedy events can all make popular outings.</p>
    <p><strong>Halloween:</strong> Halloween brings themed events, concerts, comedy shows, and other entertainment.</p>
    <p>Depending on your city, you may find special performances and seasonal events during October.</p>
    <p><strong>Thanksgiving Weekend:</strong> Thanksgiving weekend is a popular time for family gatherings and travel.</p>
    <p>Some people also use the long weekend to attend sporting events, concerts, theater productions, or other live entertainment.</p>
    <p><strong>Black Friday:</strong> Black Friday is one of the biggest shopping periods in the US.</p>
    <p>While it is traditionally associated with retail, shoppers can also look for ticket promotions and entertainment offers during the holiday shopping season.</p>
    <p><strong>Cyber Monday:</strong> Cyber Monday is another important online shopping period.</p>
    <p>If you're planning to buy tickets as gifts or for upcoming events, check for current Vivid Seats promotions before completing your purchase.</p>
    <p><strong>Christmas and Holiday Season:</strong> The holiday season brings a wide variety of concerts, shows, sporting events, and other entertainment.</p>
    <p>Tickets can also make excellent gifts when you know what the recipient enjoys.</p>
    <p><strong>New Year's Eve:</strong> New Year's Eve is one of the biggest nights of the year for live entertainment.</p>
    <p>Concerts, comedy performances, parties, and other events can make the occasion more memorable.</p>
  </div>
</div>

          {/* Box Section: How to Use */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">
              How to Use a Vivid Seats Promo Code
            </h3>
            <p className="text-gray-600 font-medium -mt-4 mb-4">
              If you find a Vivid Seats promo code through CouponsBit, follow the instructions provided with the individual offer. A typical process may look like this:
            </p>
            <div className="space-y-6">
              {[
                "Find the Vivid Seats offer you want to use.",
                "Visit Vivid Seats and search for your event.",
                "Select the concert, game, show, or other event you're interested in.",
                "Compare available dates and seating options.",
                "Choose your preferred tickets.",
                "Proceed to checkout.",
                "Enter the applicable promo code where requested.",
                "Apply the code and check whether the eligible discount has been reflected.",
                "Review the complete order details and applicable fees.",
                "Complete your ticket purchase."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold mt-2 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium italic mt-4 pt-4 border-t border-gray-100">
              If your code doesn't work, check whether it has expired or whether your tickets meet the promotion's requirements. Some offers may have restrictions involving specific events, ticket types, customers, or purchase conditions.
            </p>
          </div>

          {/* Section: Why Use */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Why Use CouponsBit for Vivid Seats Offers?
            </h3>
            <p>
              Live events can be a significant part of an entertainment budget, particularly when you're purchasing several tickets.
            </p>
            <p>
              CouponsBit gives shoppers a convenient place to check for a Vivid Seats promo code before completing a ticket purchase. You can also explore Vivid Seats coupon codes, discount offers, vouchers, event deals, and other promotions.
            </p>
            <p>
              Rather than assuming the first available offer is your only option, compare the promotions available for your event and make sure they fit your purchase.
            </p>
            <p>
              Whether you're attending a concert with friends, taking the family to a game, planning a date night, or buying tickets as a gift, checking for an available offer before checkout can help you get more value from the experience.
            </p>
          </div>

          {/* Section: Find Your Next Live Event */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Find Your Next Live Event
            </h3>
            <p>
              From the roar of a packed stadium to the excitement of a sold-out concert, live entertainment creates experiences that are difficult to replicate at home.
            </p>
            <p>
              Vivid Seats makes it easier to explore tickets for concerts, sports, theater, comedy, festivals, and other events in one place. Whether you already have an event in mind or you're simply looking for something fun to do, there are plenty of options to explore.
            </p>
            <p>
              Before purchasing your tickets, visit CouponsBit to check for the latest Vivid Seats promo code, along with coupon codes, discount offers, vouchers, ticket deals, and other promotions. Compare the available offers, review the terms, and choose the ticket option that works best for your plans.
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
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Vivid Seats Promo Codes
          </h3>
          {[
            { q: "Does Vivid Seats offer promo codes?", a: "Yes. Vivid Seats may offer promotional codes, discounts, ticket deals, and other promotions. Availability and eligibility can vary by offer." },
            { q: "Where can I find a Vivid Seats promo code?", a: "You can check CouponsBit for available Vivid Seats promo codes, coupon codes, discount offers, vouchers, and ticket promotions before purchasing." },
            { q: "How do I use a Vivid Seats coupon code?", a: "Choose your event and tickets, proceed to checkout, and enter the applicable coupon code in the promotional-code field. Confirm that the offer has been applied before completing your purchase." },
            { q: "Why isn't my Vivid Seats promo code working?", a: "The code may have expired or may not apply to the tickets you've selected. Some promotions can have restrictions based on events, ticket types, customers, or other eligibility requirements." },
            { q: "Can I use a Vivid Seats discount code on any event?", a: "Not necessarily. Promotional codes may have specific terms and exclusions. Check the individual offer before relying on it." },
            { q: "What types of tickets does Vivid Seats sell?", a: "Vivid Seats offers tickets for concerts, professional and college sports, theater, comedy, festivals, and other live entertainment events." },
            { q: "Can I buy sports tickets through Vivid Seats?", a: "Yes. Sports fans can find tickets for professional and college sporting events, subject to availability." },
            { q: "Can I find concert tickets on Vivid Seats?", a: "Yes. Vivid Seats features tickets for concerts and live performances across different genres and locations." },
            { q: "Does Vivid Seats offer tickets for theater and comedy?", a: "Yes. Depending on the current event listings, shoppers can find theater productions, Broadway shows, comedy performances, and other live entertainment." },
            { q: "Is Vivid Seats useful for buying event gifts?", a: "Yes. Tickets can make memorable gifts for birthdays, anniversaries, graduations, holidays, or other special occasions." },
            { q: "Does Vivid Seats have Black Friday deals?", a: "Vivid Seats may feature promotions around Black Friday and the holiday shopping season. Check current offers and their eligibility before purchasing." },
            { q: "Does Vivid Seats have Cyber Monday offers?", a: "Promotions may be available around Cyber Monday, although offers and terms can change." },
            { q: "When is the best time to look for Vivid Seats deals?", a: "There isn't one guaranteed period for every event. However, checking before major sporting seasons, summer concerts, holiday events, Black Friday, and Cyber Monday can help you discover available promotions." },
            { q: "How can I save money on Vivid Seats?", a: "Start by checking CouponsBit for a Vivid Seats promo code, then compare available ticket promotions, discounts, and vouchers. Consider different event dates and seating options, and always review the complete checkout total before purchasing." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa]")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform", openFaq === i && "text-white rotate-180")} />
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
            Popular Vivid Seats Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Vivid Seats Promo Code",
              "Concert Tickets",
              "Sports Events",
              "Theater & Comedy",
              "Festival Passes",
              "Broadway Shows",
              "App Discounts",
              "Last Minute Deals"
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
            Today's Top Vivid Seats Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "10% OFF", sub: "Student Tickets | 10% OFF" },
              { heading: "UNDER $100", sub: "Events Under $100" },
              { heading: "FROM $71", sub: "BYU Cougars vs Colorado State Rams | From $71" },
              { heading: "$20 OFF", sub: "Save $20 On Orders Over $200" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  V
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
                  href="https://www.vividseats.com/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  aria-label={`Shop Vivid Seats: ${deal.heading}`} 
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
