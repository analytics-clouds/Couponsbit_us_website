"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Store,
  Users,
  BadgeCheck,
  Laptop,
  Plane,
  Tv,
  Zap,
  Star,Tag,
  PiggyBank,
  CheckCircle,
  Code
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const STORES = [
  { id: "latam-airlines-coupon-code", name: "Latam Airlines", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/latam-airlines-coupon-code_pvcsml.webp", coupons: 8, discount: "Up to 12% OFF" },
  { id: "trainpal-coupon-code", name: "TrainPal", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp", coupons: 9, discount: "Up to 50% OFF" },
  { id: "agoda-coupon-code", name: "Agoda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg", coupons: 10, discount: "Up to 69% OFF" },
  { id: "cheapflights-coupon-code", name: "Cheapflights", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494079/Cheepflights-coupon-code_cbqikz.jpg", coupons: 11, discount: "Up to 25% OFF" },
  { id: "kiwi-coupon-code", name: "Kiwi.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/kiwi-logo_egovdr.webp", coupons: 4, discount: "Up to $580 Rewards" },
  { id: "expedia-coupon-code", name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", coupons: 10, discount: "Up to 40% OFF" },
  { id: "qatar-holidays-coupon-code", name: "Qatar Holidays", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/qatar-coupon-code_maxmdi.jpg", coupons: 8, discount: "Up to 40% OFF" },
  { id: "flixbus-australia-discount-code", name: "FlixBus Australia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784546572/flixbus-australia-coupon-code_nvew4i.webp", coupons: 3, discount: "Up to 50% OFF" },
  { id: "oman-air-discount-code", name: "Oman Air", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/oman-air-logo_ozwu2c.webp", coupons: 5, discount: "Up To 50% OFF" },
  { id: "budget-discount-code", name: "Budget", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/budget-logo_pv0qhg.webp", coupons: 8, discount: "Up To 35% OFF" },
  { id: "avis-discount-code", name: "Avis", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618848/avis-logo_sbg9y8.webp", coupons: 4, discount: "Up To 20% OFF" },
  { id: "fireflyz-discount-code", name: "Fireflyz", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/firefly-logo_ju6n0p.webp", coupons: 7, discount: "One-Way Fares From $29" },
  { id: "etihad-discount-code", name: "Etihad", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784970/etihad-logo_lbl7mo.webp", coupons: 7, discount: "Up To 30% OFF" },
  { id: "malaysia-airlines-discount-code", name: "Malaysia Airlines", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/malaysia-logo_xso2cj.webp", coupons: 6, discount: "Up To 35% OFF" },
  { id: "inspiring-vacation-discount-code", name: "Inspiring Vacation", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/inspiring-vacation-logo_mokiew.webp", coupons: 9, discount: "Up To 50% OFF" },
  { id: "vegas-discount-code", name: "vegas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/vegas-logo_sifnax.webp", coupons: 6, discount: "Up To 35% OFF" },
  { id: "zen-hotels-coupon-code", name: "Zen Hotels", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/zen-hotels-coupon-code_fbtoik.webp", coupons: 8, discount: "$35 OFF Bookings" }
];

const SIDEBAR_CATEGORIES = [
  { icon: Laptop, name: "Electronics",        count: "850+", color: "text-[#4A90E2]", href: "/categories/electronics" },
  { icon: Plane,  name: "Travel",             count: "420+", color: "text-[#056bfa]", href: "/categories/travel", active: true },
  { icon: Tv,     name: "Entertainment",      count: "210+", color: "text-[#8E44AD]", href: "/categories/entertainment" },
  { icon: Code,   name: "Software & Digital", count: "300+", color: "text-[#6B46C1]", href: "/categories/software" },
  { icon: Zap,    name: "Mobile & Telecom",   count: "320+", color: "text-[#27AE60]", href: "/categories/mobile" },
];

export default function TravelCouponsContent() {
  const [activeTab, setActiveTab] = useState("All (420)");
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
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-4 max-w-7xl py-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/categories" className="text-[#056bfa] hover:underline">Categories</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-700 font-medium">Travel</span>
        </div>
      </div>

      <main className="py-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* LEFT COLUMN */}
            <div className="lg:w-[72%]">

              {/* Hero Banner */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-7 md:p-8">
                    <h1 className="text-black font-extrabold text-xl md:text-3xl">Travel Coupons & Deals</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      Save more on flights, hotels and vacation packages with verified travel coupon codes.
                    </p>
                    <div className="hidden md:grid grid-cols-2 gap-y-5 gap-x-8 mt-6">
                      {[
                        { icon: Plane, val: "420+", label: "Coupons" },
                        { icon: Store, val: "20+", label: "Top Stores" },
                        { icon: Users, val: "30K+", label: "Shoppers" },
                        { icon: BadgeCheck, val: "100%", label: "Verified Codes" }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-[#056bfa]" />
                          <div>
                            <p className="text-black font-extrabold text-sm leading-none">{stat.val}</p>
                            <p className="text-gray-500 font-bold text-[10px] uppercase mt-0.5">{stat.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[45%] md:h-auto overflow-hidden">
                    <img src="https://res.cloudinary.com/couponsbit/image/upload/v1781677503/travel-store_ppr2qr.webp" alt="Travel Coupons" width={700} height={500} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Stores Section */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5 mb-5">
                <div className="mb-6">
                  <h2 className="text-black font-extrabold text-xl">Stores in Travel</h2>
                  <p className="text-gray-500 font-bold text-xs mt-1">Showing {STORES.length} store{STORES.length !== 1 ? "s" : ""}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                  {STORES.map((store) => (
                    <div key={store.id} className="bg-white border border-gray-100 rounded-2xl p-4 text-center transform hover:-translate-y-1 hover:shadow-xl hover:border-[#056bfa] transition-all duration-300 flex flex-col justify-between group">
                      <div>
                        <div className="h-14 flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                          <img src={store.logo} alt={store.name} width={120} height={48} className="max-h-12 max-w-[120px] w-auto object-contain" />
                        </div>
                        <h3 className="mt-3 font-extrabold text-black text-sm group-hover:text-[#056bfa] transition-colors line-clamp-1 truncate px-1">{store.name}</h3>
                        <p className="text-gray-400 text-[11px] font-bold mt-0.5">{store.coupons} Coupons</p>
                        <span className="text-xs font-black text-[#0344b0] uppercase tracking-wide mt-2.5 block bg-[#e8f6f8] py-1 px-2 rounded-lg leading-normal">{store.discount}</span>
                      </div>
                      <div className="mt-4">
                        <Link href={`/stores/${store.id}`} className="block w-full">
                          <button className="w-full text-center py-2 border border-[#056bfa] text-[#056bfa] hover:bg-[#056bfa] hover:text-white rounded-lg text-xs font-black transition-all duration-300">
                            View Store
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="lg:w-[28%] space-y-4">
              <div className="sticky top-20 space-y-4">

                <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                  <h3 className="text-black font-extrabold text-base mb-5">All Categories</h3>
                  <div className="space-y-1">
                    {SIDEBAR_CATEGORIES.map((cat, i) => (
                      <Link key={i} href={cat.href} className={cn(
                        "flex items-center justify-between p-2.5 px-3 rounded-xl cursor-pointer transition-all",
                        cat.active ? "bg-[#e8f6f8] text-[#056bfa]" : "hover:bg-[#f5f5f5]"
                      )}>
                        <div className="flex items-center gap-2.5">
                          <cat.icon className={cn("w-4 h-4", cat.active ? "text-[#056bfa]" : cat.color)} />
                          <span className={cn("text-sm transition-colors", cat.active ? "font-bold text-[#056bfa]" : "text-gray-700 font-medium")}>{cat.name}</span>
                        </div>
                        <span className={cn("text-xs", cat.active ? "font-extrabold text-[#0344b0]" : "text-black font-bold")}>{cat.count}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/categories" className="block mt-4 text-[#056bfa] font-bold text-xs hover:underline">View All Categories →</Link>
                </div>

                <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                  <div className="space-y-5">
                    {[
                      { icon: BadgeCheck, title: "100% Verified Coupons", sub: "All codes are tested & verified" },
                      { icon: Star, title: "Best Travel Deals", sub: "Handpicked top deals for you" },
                      { icon: PiggyBank, title: "Save More, Every Time", sub: "Extra savings on every booking" },
                      { icon: Users, title: "Trusted by Shoppers", sub: "30,000+ happy travelers" }
                    ].map((badge, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
                        <div className="w-9 h-9 shrink-0 bg-[#e8f6f8] rounded-full flex items-center justify-center text-[#056bfa]">
                          <badge.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-black font-extrabold text-sm leading-tight mb-0.5">{badge.title}</p>
                          <p className="text-gray-500 font-bold text-[10px] tracking-tight">{badge.sub}</p>
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
            Travel Deals, Discounts & Savings for Smart Travelers 2026
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Travel opens the door to new experiences, unforgettable memories, and exciting adventures. Whether you're planning a weekend getaway, a family vacation, a business trip, or an international journey, finding ways to save can make your travel budget go much further. At Couponsbit, we help travelers discover verified travel promo codes and exclusive offers from leading airlines, hotels, vacation providers, and booking platforms.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From flights and accommodations to tours and travel packages, there are countless opportunities to reduce travel expenses without compromising on your experience. Our goal is simple: help you spend less on travel and more on making memories.
          </p>
        </div>

        {/* B — Why Shop (Discover Categories) */}
        <div className="bg-[#f9fafb] rounded-2xl p-8">
          <h2 className="text-2xl font-black text-black mb-2">Explore Travel Savings Across Every Type of Trip</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Modern travelers have more choices than ever before. Whether you're booking months in advance or planning a last-minute escape, travel providers frequently offer promotions that can help lower the overall cost of your trip.
          </p>
          <p className="text-[#056bfa] text-sm font-bold mb-4">At Couponsbit, you can discover deals across a variety of travel categories, including:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              "Domestic flights", "International travel", "Hotels and resorts",
              "Vacation packages", "Guided tours", "Cruises",
              "Car rentals", "Travel insurance", "Adventure experiences",
              "Family vacations", "Luxury travel", "Business travel"
            ].map((category, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-[#056bfa]/30 transition-all duration-300 group flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-[#e8f6f8] flex items-center justify-center shrink-0 group-hover:bg-[#056bfa] transition-colors duration-300">
                  <Plane className="w-4 h-4 text-[#056bfa] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-black font-extrabold text-xs">{category}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs italic">
            No matter where you're headed, checking available travel offers before booking can help you maximize your budget.
          </p>
        </div>

        {/* E — Category Breakdown (Popular Brands) */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Popular Travel Brands Featured on Couponsbit</h2>
          <p className="text-gray-500 text-sm font-medium mb-6">
            Travel planning often involves multiple providers, from airlines and hotels to tour operators and booking platforms. That's why Couponsbit brings together savings opportunities from a wide range of trusted travel brands.
          </p>
          <p className="text-gray-500 text-xs font-bold mb-3">You may find offers from brands such as:</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {[
              "Etihad Airways", "LATAM Airlines", "ITA Airways",
              "TourRadar", "Inspiring Vacations", "Booking platforms",
              "Hotel chains", "Vacation providers", "Travel experience companies"
            ].map((brand, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-3 text-center hover:shadow-sm hover:border-[#056bfa]/20 transition-all duration-300 group">
                <span className="text-gray-700 font-bold text-xs group-hover:text-[#056bfa] transition-colors">{brand}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm font-medium leading-relaxed">
            By comparing available promotions and discounts, travelers can often reduce costs on transportation, accommodations, and activities.
          </p>
        </div>

        {/* Why More Travelers Search for Deals Before Booking */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Why More Travelers Search for Deals Before Booking</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Travel costs can fluctuate significantly depending on season, destination, and demand. Savvy travelers understand that even small discounts can lead to meaningful savings, especially on larger trips.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "More Budget for Experiences", desc: "Saving on transportation and accommodations leaves more room in your budget for dining, sightseeing, and activities." },
              { title: "Access to Better Travel Options", desc: "Discounts can make premium flights, upgraded accommodations, and unique experiences more affordable." },
              { title: "Flexible Planning", desc: "Travel promotions often allow travelers to explore destinations they may not have previously considered." },
              { title: "Year-Round Savings Opportunities", desc: "Many travel providers run seasonal promotions throughout the year, making it possible to save regardless of when you travel." }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-[#056bfa]/20 transition-all duration-300 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* C — How To Use */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">How to Save on Flights, Hotels, and Vacation Packages</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Finding a great travel deal doesn't have to be complicated. A little planning can often go a long way.</p>
          
          <div className="flex flex-col mb-6">
            {[
              { step: "1", title: "Compare Multiple Providers", desc: "Prices can vary between airlines, hotels, and travel booking platforms, making comparison shopping worthwhile." },
              { step: "2", title: "Look for Seasonal Promotions", desc: "Many providers offer discounts during key travel periods and annual sales events." },
              { step: "3", title: "Book Early When Possible", desc: "Popular destinations and peak travel dates often become more expensive as departure dates approach." },
              { step: "4", title: "Stay Flexible", desc: "Adjusting travel dates by a few days can sometimes result in significant savings." },
              { step: "5", title: "Check Couponsbit Before Booking", desc: "Before confirming reservations, browse Couponsbit for the latest travel-related offers and promotions." }
            ].map((item, i, arr) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#056bfa] text-white flex items-center justify-center font-black text-sm shadow-md">
                    {item.step}
                  </div>
                  {i < arr.length - 1 && <div className="w-0.5 h-8 bg-[#056bfa]/20 my-1" />}
                </div>
                <div className="pb-7">
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Finding Better Airfare and Flight Savings */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Finding Better Airfare and Flight Savings</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Air travel is often one of the largest travel expenses, especially for international trips. Many airlines and booking platforms regularly offer promotions that can help travelers secure better rates.
          </p>
          <p className="text-gray-500 text-xs font-bold mb-3">When searching for flights, consider:</p>
          <div className="flex flex-col gap-2 mb-4">
            {["Midweek departures", "Off-peak travel periods", "Round-trip pricing", "Airline sales events", "Loyalty program benefits"].map((point, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#056bfa]" />
                <span className="text-gray-600 text-sm">{point}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            Keeping an eye on available flight coupon codes may also help reduce costs on eligible bookings throughout the year.
          </p>
        </div>

        {/* Saving on Hotels and Accommodations */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Saving on Hotels and Accommodations</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Accommodations can represent a significant portion of any travel budget. Fortunately, travelers have access to more booking options than ever before.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            From luxury resorts and boutique hotels to vacation rentals and budget-friendly stays, there are opportunities to save across all accommodation types.
          </p>
          <p className="text-gray-500 text-xs font-bold mb-3">Travelers searching for hotel deals online often benefit from:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {["Early booking discounts", "Extended-stay offers", "Seasonal promotions", "Member-exclusive rates", "Package booking incentives"].map((point, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#056bfa]" />
                <span className="text-gray-600 text-sm">{point}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            Comparing available offers before booking can help secure better value for your stay.
          </p>
        </div>

        {/* Why Use Couponsbit Section */}
        <div>
          <h2 className="text-2xl font-black text-black mb-2">Why Travelers Use Couponsbit</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Couponsbit, we understand that travel planning involves more than finding a destination. It's about getting the best possible value for your money.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Updated Travel Offers", desc: "We regularly update travel-related promotions from popular brands and booking providers." },
              { title: "Wide Range of Travel Categories", desc: "From airfare and accommodations to tours and vacation packages, we cover multiple travel segments." },
              { title: "Easy-to-Use Platform", desc: "Finding travel savings should be simple, which is why we make deals easy to browse and access." },
              { title: "Completely Free", desc: "Couponsbit is free to use and designed to help travelers save before they book." },
              { title: "Travel Savings in One Place", desc: "Instead of visiting multiple websites, travelers can discover a variety of promotions from a single destination." }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-[#056bfa]/20 transition-all duration-300 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-black text-black mb-6">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-6">
            {[
              { q: "What are travel promo codes?", a: "Travel promo codes are promotional offers that can provide discounts on flights, hotels, vacation packages, tours, and other travel-related purchases." },
              { q: "How can I save money when booking travel?", a: "Comparing providers, booking early, staying flexible with dates, and checking available promotions can all help reduce travel expenses." },
              { q: "Are travel discounts available year-round?", a: "Yes. Many airlines, hotels, and travel providers offer promotions throughout the year, although availability varies by season and destination." },
              { q: "Where can I find savings on airfare?", a: "Couponsbit regularly features offers from airlines and travel providers that may help travelers secure better pricing on eligible bookings." },
              { q: "Can I find hotel discounts online?", a: "Many hotels and booking platforms offer online-only promotions, member rates, and seasonal discounts throughout the year." },
              { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps users discover travel savings from a variety of trusted brands." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-4">
                <h3 className="text-black font-extrabold text-base mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

        {/* D — Seasonal Sales Card (Best Times of Year) */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-black font-black text-lg mb-2">Best Times of Year to Find Travel Deals</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            While travel discounts can appear year-round, certain periods are known for particularly strong promotions.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {[
              "Black Friday Travel Sales", "Cyber Monday Promotions", 
              "Holiday Travel Campaigns", "Shoulder Seasons", "Early Booking Windows"
            ].map((event) => (
              <span key={event} className="px-3 py-1.5 bg-[#e8f6f8] border border-[#056bfa]/20 text-[#056bfa] font-bold text-xs rounded-full cursor-default">
                {event}
              </span>
            ))}
          </div>
        </div>

        {/* G — CTA Card */}
        <div className="bg-gradient-to-br from-[#056bfa] to-[#0451c4] rounded-2xl p-6 text-white">
          <h3 className="font-black text-lg mb-2">Make Every Trip More Affordable</h3>
          <p className="text-white/90 text-xs leading-relaxed mb-4">
            Whether you're planning a relaxing beach vacation, an international adventure, a business trip, or a weekend escape, smart travel planning starts with finding the right deals.
          </p>
          <p className="text-white/80 text-xs leading-relaxed mb-5">
            Explore the latest offers on Couponsbit and discover new ways to save on flights, accommodations, tours, and travel experiences. With regularly updated promotions and trusted travel brands, planning your next journey can be both exciting and budget-friendly.
          </p>
          
          <Link href="/stores" className="block">
            <button className="w-full bg-white text-[#056bfa] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
              Shop & Save Now →
            </button>
          </Link>
        </div>

      </aside>

    </div>
  </div>
</section>

      <Footer />

      {/* Toast */}
      <div className={cn(
        "fixed top-6 right-6 z-[60] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-4 flex items-center gap-4 transition-all duration-300 transform",
        showToast ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0 pointer-events-none"
      )}>
        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-[#22c55e]">
          <CheckCircle className="w-5 h-5" />
        </div>
        <div>
          <p className="text-black font-black text-sm">Code Copied!</p>
          <p className="text-[#056bfa] font-mono font-bold text-xs mt-0.5">{toastCode}</p>
        </div>
      </div>
    </div>
  );
}
