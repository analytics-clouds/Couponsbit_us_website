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
  { name: "Budget", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784618847/budget-logo_pv0qhg.webp", dealText: "Up To 35% OFF", href: "/stores/budget-discount-code" },
  { name: "Avis", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784618848/avis-logo_sbg9y8.webp", dealText: "Up To 20% OFF", href: "/stores/avis-discount-code" },
  { name: "Discount Tire", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/discounttie-logo_lcrloj.webp", dealText: "Up To $130 OFF", href: "/stores/discounttire-discount-code" },
  { name: "CarCovers", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784895740/carcover-logo_eufopb.webp", dealText: "Save $30 OFF", href: "/stores/carcovers-discount-code" },
  { name: "Valvoline", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787050069/valvoline-logo_qfdbbq.webp", dealText: "Up To 50% OFF", href: "/stores/valvoline-discount-code" },
  { name: "Harbor Freight", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787571687/harbor-frigth_m4sdhc.webp", dealText: "Up To 50% OFF", href: "/stores/harbor-freight-discount-code" },
];

const STORE_URL = "https://www.turo.com";

export default function TuroContent() {
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
              <span className="text-black font-extrabold">Turo</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1790238446/turo-logo_exsf96.webp" alt="Turo" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Turo Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(1,900 Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save on your next trip with the latest Turo Promo Code and Turo Discount Code. Enjoy 20% OFF storewide, up to $1,000 OFF monthly car rentals, and $83 OFF eligible BMW rentals. Browse verified Turo offers and book the right vehicle for less with confidence.
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
                    { icon: Tag, val: "9", label: "Offers" },
                    { icon: Percent, val: "6", label: "Deals" },
                    { icon: Users, val: "25K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790238446/turo-logo_exsf96.webp" alt="Turo Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Turo Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SAVE", value: "20%", title: "Turo Promo Code – Flat 20% OFF Storewide", desc: "Get a flat 20% OFF on eligible Turo car rental bookings across the USA.", bullets: ["Save on a wide range of vehicles through the Turo app and enjoy flexible auto rental options.", "Use a Turo promo code, Turo discount code, or coupon code Turo offer when available to unlock additional savings."] },
                  { label: "UP TO", value: "$1,000", title: "Turo Promo Code – Up To $1,000 OFF Monthly Car Rentals", desc: "Grab up to $1,000 OFF on eligible monthly car rentals through Turo.", bullets: ["Choose from a variety of vehicles for extended rental needs across the USA.", "Explore Turo auto rental deals and apply an available Turo promo code at checkout."] },
                  { label: "SAVE", value: "$20", title: "Turo Promo Code – Save $20 On Tesla Model 3 Rentals", desc: "Save $20 on eligible Tesla Model 3 rental bookings through Turo.", bullets: ["Book a Tesla for your next trip with flexible car rental options in the USA.", "Check for a Turo discount code or coupon code Turo offer before completing your booking."] },
                  { label: "SAVE", value: "$83", title: "Turo Promo Code – Get $83 OFF BMW Rental Bookings", desc: "Save $83 on eligible BMW rental bookings through Turo.", bullets: ["Explore premium vehicles and convenient Turo car rental options across the USA.", "Apply an available Turo promo code or Turo discount code to maximize your savings."] },
                  { label: "UP TO", value: "$57", title: "Turo Car Rentals – Grab Up To $57 OFF Your Booking", desc: "Get up to $57 OFF on eligible Turo bookings in the USA.", bullets: ["Browse different vehicle categories and find a car that fits your travel plans.", "The Turo app makes it easy to explore car rental options and manage your booking."] },
                  { label: "SAVE", value: "$25", title: "Turo Auto Rental – Save $25 On Rental Bookings", desc: "Save $25 on eligible Turo rental bookings.", bullets: ["Choose from a wide selection of cars available for rent across the USA.", "Look for a Turo discount code or Turo Voucher code to unlock additional savings when eligible."] },
                  { label: "UP TO", value: "$16", title: "Turo Car Rental – Get Up To $16 OFF Car Bookings", desc: "Grab up to $16 OFF on eligible Turo car bookings.", bullets: ["Find convenient vehicle rental options for trips, weekends, and everyday travel in the USA.", "Compare Turo auto rental options through the Turo app before booking."] },
                  { label: "FROM", value: "$50", title: "Turo Gift Card – Starting From $50", desc: "Get Turo gift cards starting from $50.", bullets: ["A Turo gift card can be used toward eligible Turo car rental bookings.", "Gift a flexible car rental experience with a Turo gift card for travel in the USA."] },
                  { label: "FROM", value: "$62", title: "Turo Car Rentals – Bookings Starting At Just $62", desc: "Find eligible Turo car rental bookings starting at just $62.", bullets: ["Browse a range of vehicles and rental options for travel across the USA.", "Explore alternatives for car rental like Turo and compare available vehicles through the Turo app."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Turo: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
  <h3 className="text-black font-black text-lg mb-8">
    What Is Turo?
  </h3>
  <div className="space-y-6 text-gray-500 font-medium text-sm leading-relaxed">
    <p>
      Turo is a peer-to-peer car-sharing marketplace where people can rent vehicles directly from local hosts. Unlike a conventional rental company that owns and manages its own fleet, Turo provides the platform through which hosts list their vehicles and guests search, book, and manage their trips.
    </p>
    <p>
      Turo says its marketplace includes more than 1,600 unique makes and models, with vehicles available across thousands of pickup locations. Guests can browse listings, read reviews, select a specific vehicle, choose pickup or delivery options where available, and communicate with their host through the platform.
    </p>
    <p>
      The marketplace includes a wide range of vehicle types, including:
    </p>
    <div className="space-y-3 pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Economy and everyday cars</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>SUVs</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Convertibles</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Sports cars</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Exotic and luxury cars</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Classic cars</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Electric vehicles</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Minivans</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Trucks</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Cargo vans</span>
      </p>
    </div>
    <p>
      This variety makes Turo useful for very different types of trips. Someone visiting a city for a few days may want a compact car, while someone heading out for a family vacation might prefer an SUV or minivan.
    </p>
  </div>
</div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Truck, name: "Rental Cars", count: "120+", color: "text-blue-500", href: "/categories/automotive" },
                        { icon: Users, name: "Airport Pickup", count: "60+", color: "text-purple-500", href: "/categories/automotive" },
                        { icon: Tag, name: "Luxury & Exotic", count: "45+", color: "text-pink-500", href: "/categories/automotive" },
                        { icon: Percent, name: "Weekly Rentals", count: "80+", color: "text-teal-500", href: "/categories/automotive" },
                        { icon: Calendar, name: "Long-Term Trips", count: "35+", color: "text-orange-500", href: "/categories/automotive" },
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
    Why Isn't My Turo Promo Code Working?
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      If your code doesn't apply, there may be a straightforward explanation.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Check whether:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The promo code has expired.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Your trip meets the offer's eligibility requirements.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The promotion applies to your booking type.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>You are using the correct account.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The offer is limited to new or returning customers.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The promotional code has already been redeemed.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Another promotion is already attached to the booking.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The trip dates fall outside the promotional period.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      If a code doesn't work, compare the available vehicle discounts and longer-trip pricing as well. A host's weekly or monthly discount may be relevant even when a separate promotional code isn't.
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
          Turo Promo Code, Coupon Code & Discount Offers
        </h2>

        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            Why settle for whatever car happens to be available at a traditional rental counter when you can choose the exact vehicle you want for your trip? Turo gives travelers a different way to rent a car, connecting them with local hosts who list their own vehicles on the platform.
          </p>
          <p>
            Whether you're planning a weekend getaway, business trip, family vacation, road trip, or simply need a car for a few days, checking for a Turo promo code before booking can be a useful way to look for an available offer. You can also find discounts through longer bookings, host-specific deals, loyalty benefits, and promotional campaigns.
          </p>
          <p>
            From everyday sedans and SUVs to convertibles, sports cars, luxury vehicles, classic cars, electric vehicles, trucks, and vans, Turo gives US travelers a broad selection of vehicles to choose from.
          </p>

          <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Find a Turo Promo Code
        </h3>
        <p>
          Before booking your next vehicle, check for a current Turo promo code that may apply to your trip.
        </p>
        <p>
          Turo itself says it sends occasional promo codes, discounts, and deals to users who opt into email notifications and push notifications.
        </p>
        <p>
          Because Turo is a marketplace with individual hosts setting their own vehicle prices, availability, discounts, and delivery options, the final cost of a trip can vary significantly depending on the vehicle and booking details.
        </p>
        <p>
          That makes it useful to check for a Turo coupon or promotional offer before confirming a reservation rather than assuming every vehicle will have the same pricing structure.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Turo Coupons, Deals &amp; Offers
        </h3>
        <p>
          A Turo discount code isn't the only way to look for a better deal.
        </p>
        <p>
          Depending on the trip and current promotions, you may come across:
        </p>
        <p>Turo promo codes</p>
        <p>Discount codes</p>
        <p>Coupon offers</p>
        <p>Weekly trip discounts</p>
        <p>Monthly trip discounts</p>
        <p>Host-specific discounts</p>
        <p>Seasonal promotions</p>
        <p>Promotional offers</p>
        <p>Delivery-related offers</p>
        <p>
          Turo states that many hosts offer discounted pricing for weekly and monthly trips, which can make longer bookings worth comparing with shorter reservations.
        </p>
        <p>
          Since hosts control their own vehicle pricing and availability, two similar cars in the same city may have different prices, delivery options, mileage allowances, and discounts. Comparing listings can therefore be just as important as finding a coupon code.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Choose From Different Types of Cars
        </h3>
        <p>
          One of Turo's biggest differences from traditional rental companies is the variety of vehicles available through its marketplace.
        </p>
        <p>
          <strong>Everyday Cars:</strong> For errands, commuting, business travel, or a simple weekend trip, you can browse practical cars from popular manufacturers. This can be useful when you want something familiar and efficient rather than a large or premium vehicle.
        </p>
        <p>
          <strong>SUVs:</strong> SUVs can make sense for family vacations, road trips, ski trips, or journeys where you need additional passenger or cargo space. Turo offers SUV rentals across a variety of makes and models, giving travelers the opportunity to select the specific vehicle they want instead of simply receiving a vehicle category at pickup.
        </p>
        <p>
          <strong>Luxury &amp; Exotic Cars:</strong> Planning something more memorable? Turo also features luxury and exotic vehicles, giving travelers access to cars that may be difficult to find through conventional rental fleets. These can be particularly relevant for special occasions, celebrations, vacations, or simply experiencing a particular vehicle for a short period.
        </p>
        <p>
          <strong>Sports Cars &amp; Convertibles:</strong> A weekend road trip can feel very different behind the wheel of a sports car or convertible. Turo's marketplace includes sports cars and convertibles, allowing guests to search for specific models and choose a vehicle based on their destination, dates, and preferences.
        </p>
        <p>
          <strong>Electric Vehicles:</strong> Electric vehicles are another category available through Turo. If you're interested in trying an EV before buying one, traveling with an electric vehicle, or simply prefer electric driving for a particular trip, Turo allows you to browse EV listings alongside conventional vehicles.
        </p>
        <p>
          <strong>Vans, Minivans &amp; Trucks:</strong> For moving, group travel, family holidays, or larger loads, Turo also has minivans, cargo vans, trucks, and other larger vehicles. The right vehicle ultimately depends on what you're carrying, how many people are traveling, and where you're going.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Turo for Road Trips
        </h3>
        <p>
          A road trip is one of the situations where choosing your exact rental vehicle can make a noticeable difference.
        </p>
        <p>
          Instead of selecting a generic vehicle category, you can browse specific Turo listings and compare the cars available for your dates.
        </p>
        <p>
          For a family road trip, you might prioritize an SUV or minivan. For a long weekend with friends, you could look for a comfortable sedan or larger vehicle. For a scenic getaway, a convertible might be more appealing.
        </p>
        <p>
          Turo also allows hosts to offer different pickup and delivery arrangements. Some vehicles can be delivered to airports, hotels, train stations, or other locations, depending on the host and trip.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Turo for Airport Travel
        </h3>
        <p>
          Airport car rental can be one of the more frustrating parts of a trip, particularly after a long flight.
        </p>
        <p>
          Turo offers airport pickup and delivery options at numerous airports, although availability and airport policies vary by location. Turo says cars can be picked up at airport parking facilities and garages at more than 100 airports in the US and Canada, with some airports offering other pickup arrangements.
        </p>
        <p>
          When comparing vehicles, look carefully at the delivery details because not every host offers the same options. Some hosts may charge a delivery fee, while others may offer delivery under certain conditions.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Turo Monthly Car Rentals
        </h3>
        <p>
          Don't necessarily think of Turo as a platform for only two- or three-day rentals.
        </p>
        <p>
          Turo also offers monthly and longer-term vehicle rentals, giving customers an alternative to traditional long-term car ownership or conventional rental arrangements.
        </p>
        <p>
          Turo Monthly allows customers to search for multi-month rental options and choose vehicles such as sedans, SUVs, hybrids, EVs, and other types of cars. The platform positions this as an alternative for people who want a car without committing to a traditional purchase or long-term auto loan.
        </p>
        <p>
          For longer trips, it's worth comparing the total cost of a monthly booking with shorter reservations and checking whether the host offers a long-trip discount.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Turo for Business Trips
        </h3>
        <p>
          Turo can also be useful for business travel.
        </p>
        <p>
          If you're traveling to another city for meetings, conferences, events, or extended work assignments, you can choose a vehicle based on your schedule and requirements.
        </p>
        <p>
          Depending on the location, you may be able to select airport delivery, hotel delivery, or another convenient pickup arrangement. The ability to choose the exact vehicle can also be useful when your transportation needs are more specific than a standard rental-car category.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Turo for Special Occasions
        </h3>
        <p>
          Not every car rental needs to be purely practical.
        </p>
        <p>
          Turo's selection of luxury cars, sports cars, convertibles, and classic vehicles can make the platform relevant for birthdays, anniversaries, weddings, celebrations, weekend getaways, and other special occasions.
        </p>
        <p>
          If you're booking for a special event, remember that availability can be more limited for particular vehicles. Searching early can give you more options to compare.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          How Turo Discounts Work
        </h3>
        <p>
          Turo's marketplace operates differently from a traditional rental company because individual hosts list their vehicles and set their own pricing, discounts, availability, and delivery options.
        </p>
        <p>
          This means you may encounter different types of offers depending on the vehicle and host.
        </p>
        <p>
          Longer bookings are one example. Turo says many hosts offer discounted prices for weekly and monthly trips.
        </p>
        <p>
          You can also receive promotional codes directly from Turo if you opt into relevant communications.
        </p>
        <p>
          Because promotions can have individual eligibility requirements, always review the details attached to an offer before relying on it.
        </p>
      </div>
    </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                How to Use a Turo Promo Code
              </h3>
              <p>
                Once you have an eligible Turo promo code, follow the instructions provided with the offer and apply it during the booking process.
              </p>
              <p>A simple approach is:</p>
              <ul className="list-disc pl-5 space-y-2 font-semibold">
                <li>Create or sign into your Turo account.</li>
                <li>Enter your destination and travel dates.</li>
                <li>Browse available vehicles.</li>
                <li>Choose the car that fits your trip.</li>
                <li>Review the pickup, delivery, mileage, and trip details.</li>
                <li>Proceed through the booking process.</li>
                <li>Enter your eligible promotional code when prompted.</li>
                <li>Check that the discount has been reflected before completing your reservation.</li>
              </ul>
              <p>
                Make sure the offer applies to your specific trip. Promotional codes can have conditions relating to eligibility, dates, destinations, or other booking requirements.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Turo Protection & Insurance
              </h3>
              <p>
                Before booking, it's important to understand that Turo isn't simply a conventional rental-car company.
              </p>
              <p>
                For US trips, Turo provides guests with a range of protection plans, and trips include third-party liability insurance under a policy issued to Turo by Travelers, subject to terms, conditions, and exclusions. Guests can choose from available Premier, Standard, and Minimum protection plans, depending on eligibility and trip details.
              </p>
              <p>
                The protection plan you choose can affect your financial responsibility for eligible physical damage to the host's vehicle.
              </p>
              <p>
                Because protection options and costs depend on the trip, vehicle, and other circumstances, review the specific details shown during booking rather than assuming every reservation has identical coverage.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Turo Cancellation Policy
              </h3>
              <p>
                Travel plans can change, so cancellation terms are worth checking before you book.
              </p>
              <p>
                Turo's current US guidance says guests can generally cancel a refundable trip for a full refund up to 24 hours before the trip starts. If the booking is made less than 24 hours before the scheduled start, there is generally a one-hour window after booking to cancel for free. Different rules can apply to non-refundable bookings.
              </p>
              <p>
                Always review the cancellation terms shown for your specific trip before completing your reservation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                How to Find Better Turo Deals
              </h3>
              <p>
                Finding a Turo deal isn't just about searching for a coupon code.
              </p>
              <p>
                Start by comparing several vehicles in your destination. Look at the complete booking cost rather than only the advertised daily rate.
              </p>
              <p>Then consider:</p>
              <ul className="list-disc pl-5 space-y-2 font-semibold">
                <li><strong>Trip length:</strong> Longer bookings may qualify for host discounts.</li>
                <li><strong>Pickup location:</strong> A nearby vehicle may have different delivery charges from one located at an airport.</li>
                <li><strong>Vehicle type:</strong> Compare several models that meet your needs instead of limiting your search to one make.</li>
                <li><strong>Dates:</strong> If your schedule is flexible, shifting your dates may reveal different vehicles or pricing.</li>
                <li><strong>Promotions:</strong> Check for a current Turo promo code before confirming the booking.</li>
                <li><strong>Loyalty:</strong> Frequent Turo users can check whether they qualify for loyalty benefits.</li>
              </ul>
              <p>
                This combination can help you evaluate the complete booking rather than focusing on one discount in isolation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Why Check CouponsBit for Turo Offers?
              </h3>
              <p>
                A car booking can involve several decisions, from choosing the right vehicle and pickup location to checking trip dates and available promotions.
              </p>
              <p>
                CouponsBit gives shoppers another place to check before they complete their booking. By looking for the latest Turo promo code, coupon offers, discount codes, and deals before confirming your trip, you can see whether there is an applicable promotion worth using.
              </p>
              <p>
                It's also useful to compare any promotional code with the discounts already offered by individual hosts, especially for weekly or monthly bookings.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Book Your Next Trip With a Turo Promo Code
              </h3>
              <p>
                From practical daily transportation to weekend road trips and special-occasion drives, Turo gives travelers a different approach to car rental. Instead of choosing from a fixed corporate fleet, you can browse vehicles from local hosts and select the specific car that fits your plans.
              </p>
              <p>
                Before confirming your reservation, check for a current Turo promo code, compare host discounts, look at longer-trip pricing where relevant, and review the complete booking terms.
              </p>
              <p>
                Whether you're searching for an SUV for a family vacation, an EV for your next trip, a luxury vehicle for a special occasion, or a simple car for everyday travel, taking a few extra minutes to compare your options can help you book with greater confidence.
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
            FAQs About Turo Promo Codes
          </h3>
          {[
            {
              q: "Does Turo offer promo codes?",
              a: "Yes. Turo says it sends occasional promo codes, discounts, and deals to users who opt into email notifications and push notifications. Frequent travelers may also earn a loyalty bonus that includes a promo code for a bonus day after qualifying trips.",
            },
            {
              q: "Does Turo have coupon codes?",
              a: "Turo may offer promotional codes and discounts from time to time. The available offers and eligibility requirements can change, so check the current promotion before booking.",
            },
            {
              q: "Can I get a discount for a longer Turo rental?",
              a: "Potentially. Turo says many hosts offer discounted prices for weekly and monthly trips. The exact discount depends on the individual host and vehicle.",
            },
            {
              q: "What types of cars can I rent on Turo?",
              a: "Turo offers a broad range of vehicles, including everyday cars, SUVs, convertibles, sports cars, exotic and luxury vehicles, classic cars, EVs, minivans, trucks, and vans.",
            },
            {
              q: "Can I get a Turo car delivered?",
              a: "Many hosts offer delivery to locations such as airports, hotels, train stations, or other agreed locations. Delivery availability and fees vary by vehicle and host.",
            },
            {
              q: "Do I need my own car insurance to rent on Turo?",
              a: "You don't need personal insurance coverage to book a car on Turo in the US. Turo provides third-party liability coverage under a policy issued to Turo by Travelers, while guests can select from available protection plans for eligible physical damage. The exact terms depend on the trip and plan.",
            },
            {
              q: "Can someone else drive my Turo rental?",
              a: "Yes. Additional drivers can be added when they meet Turo's eligibility requirements and are approved to drive. Turo says the primary driver can add additional drivers without an additional driver charge.",
            },
            {
              q: "Can I cancel a Turo booking?",
              a: "Cancellation rules depend on the booking. For refundable US trips, Turo generally allows a full refund when you cancel at least 24 hours before the trip starts, with a shorter free-cancellation window for bookings made less than 24 hours before the start time.",
            },
            {
              q: "How can I find Turo deals?",
              a: "Check for a current Turo promo code, compare host-specific discounts, look at weekly or monthly pricing, and review any loyalty or promotional offers available to your account.",
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
            Popular Turo Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Turo Promo Code",
              "Turo Discount Code",
              "Weekly Rental Deals",
              "Airport Car Delivery",
              "Luxury Car Rental",
              "EV Rentals",
              "CouponsBit Turo",
              "Turo Loyalty Bonus",
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
            Today's Top Turo Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "FLAT 20% OFF STOREWIDE",
                sub: "Get a flat 20% OFF on eligible Turo car rental bookings across the USA.",
              },
              {
                heading: "UP TO $1,000 OFF MONTHLY CAR RENTALS",
                sub: "Grab up to $1,000 OFF on eligible monthly car rentals through Turo.",
              },
              {
                heading: "GET $83 OFF BMW RENTAL BOOKINGS",
                sub: "Save $83 on eligible BMW rental bookings through Turo.",
              },
              {
                heading: "TURO GIFT CARD",
                sub: "Get Turo gift cards starting from $50.",
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
                  href="https://turo.com"
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
