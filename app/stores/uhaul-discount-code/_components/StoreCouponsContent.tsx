"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent, Car, Warehouse, Box,
  Package,
  Container,
  Users,Calendar,
  BadgeCheck,
  ExternalLink,
  HeartHandshake,
  ShieldAlert,
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
  { name: "Budget", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784618847/budget-logo_pv0qhg.webp", dealText: "Up To 35% OFF", href: "/stores/budget-discount-code" },
  { name: "Avis", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784618848/avis-logo_sbg9y8.webp", dealText: "Up To 20% OFF", href: "/stores/avis-discount-code" },
  { name: "Discount Tire", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/discounttie-logo_lcrloj.webp", dealText: "Up To $130 OFF", href: "/stores/discounttire-discount-code" },
  { name: "CarCovers", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784895740/carcover-logo_eufopb.webp", dealText: "Save $30 OFF", href: "/stores/carcovers-discount-code" },
  { name: "Valvoline", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787050069/valvoline-logo_qfdbbq.webp", dealText: "Up To 50% OFF", href: "/stores/valvoline-discount-code" },
  { name: "Harbor Freight", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787571687/harbor-frigth_m4sdhc.webp", dealText: "Up To 50% OFF", href: "/stores/harbor-freight-discount-code" },
];

const STORE_URL = "https://www.uhaul.com";

export default function UhaulContent() {
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
              <span className="text-black font-extrabold">U-Haul</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1790238446/uhaul-logo_qbdgyu.webp" alt="U-Haul" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">U-Haul Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(2,700 Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      U-Haul offers truck and trailer rentals, moving supplies, and self-storage units to help make your move easier.
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
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "6", label: "Deals" },
                    { icon: Users, val: "30K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790238446/uhaul-logo_qbdgyu.webp" alt="U-Haul Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">U-Haul Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "SAVE", value: "New", title: "U-Haul – New Customer Offer", desc: "Check for savings available to new U-Haul customers on their first reservation.", bullets: ["Compare truck and trailer sizes before booking.", "Availability varies by location.", "Confirm the offer terms before reserving."] },
                  { label: "SAVE", value: "Truck", title: "U-Haul – Truck Rental Discount", desc: "Look for a discount on eligible U-Haul truck rentals.", bullets: ["Applies to select truck sizes and locations.", "Enter the code at checkout if prompted.", "Confirm the discount before completing your reservation."] },
                  { label: "SAVE", value: "Supplies", title: "U-Haul – Moving Supplies Deal", desc: "Check for savings on moving supplies like boxes and packing materials.", bullets: ["Available online and in-store.", "Bundle pricing may offer better value.", "Check the offer terms before purchasing."] },
                  { label: "SAVE", value: "Storage", title: "U-Haul – Storage Unit Offer", desc: "Look for discounted rates on U-Haul self-storage units.", bullets: ["Availability varies by location and unit size.", "Check terms before reserving a unit.", "Confirm pricing with your local facility."] },
                  { label: "SAVE", value: "Trailer", title: "U-Haul – Trailer Rental Discount", desc: "Check for a discount on eligible U-Haul trailer rentals.", bullets: ["Applies to select trailer types.", "Availability varies by location.", "Confirm the discount before booking."] },
                  { label: "SAVE", value: "Seasonal", title: "U-Haul – Seasonal Moving Sale", desc: "Check for seasonal promotions during peak moving periods.", bullets: ["Availability varies by season and location.", "Popular dates may book up quickly.", "Check the website regularly for new offers."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop U-Haul: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is U-Haul?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    U-Haul is a major moving and storage company serving customers across North America. Since its founding in 1945, the company has grown into a broad moving-services network offering rental trucks, trailers, towing equipment, storage, portable U-Box containers, moving supplies, and moving labor.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Rather than focusing only on truck rentals, U-Haul lets customers combine different services depending on what their move requires. You can reserve a moving truck for a local or one-way move, rent a trailer, purchase boxes and packing materials, arrange storage, or hire independent moving helpers through its Moving Help Marketplace.
                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    U-Haul also provides an app that allows customers to get quotes, make reservations, modify bookings, and manage parts of their move from their phones.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Truck, name: "Truck Rentals", count: "50+", color: "text-blue-500", href: "/categories/automotive" },
                        { icon: Tag, name: "Moving Supplies", count: "30+", color: "text-purple-500", href: "/categories/automotive" },
                        { icon: Percent, name: "Storage Units", count: "20+", color: "text-pink-500", href: "/categories/automotive" },
                        { icon: Calendar, name: "Trailer Rentals", count: "15+", color: "text-teal-500", href: "/categories/automotive" },
                        { icon: Users, name: "Local & One-Way", count: "25+", color: "text-orange-500", href: "/categories/automotive" },
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
    Why Is My U-Haul Discount Code Not Working?
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Found a U-Haul coupon but it is not applying? There are several possible reasons.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      The code may have expired, may only apply to certain products or services, or may be restricted to particular locations or rental types. Some offers may also require specific booking dates or other conditions.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Before giving up on the offer, check:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the code is still valid</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether you entered it correctly</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether your selected service qualifies</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the offer applies to your location</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether minimum purchase or rental conditions apply</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether another promotion is already being applied</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Whether the offer has additional restrictions</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      If the code still does not work, compare it with the current offers shown directly by U-Haul.
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
          U-Haul Discount Code, Promo Code & Discount Offers
        </h2>

        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            Planning a move usually means juggling a lot at once, finding the right truck, buying packing supplies, arranging storage, and figuring out how to get everything from one place to another. That is where U-Haul comes in. Whether you are moving across town, heading to another state, storing your belongings temporarily, or simply need a trailer for a specific project, U-Haul offers a wide range of moving and storage solutions.
          </p>
          <p>
            Before making a reservation, it is worth checking for a current U-Haul discount code. Along with promotional codes, U-Haul regularly features selected discounts, special offers, storage promotions, and deals on moving supplies. The available offer can depend on your location, rental type, dates, and the service you choose, so comparing the available options before booking can help you find an offer that fits your move.
          </p>

          <div className="max-w-5xl mx-auto space-y-12 py-8 px-4 sm:px-6">
  
  {/* Hero / Header Section */}
  <section className="text-center space-y-4 max-w-3xl mx-auto">
    <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold text-[#056bfa] bg-[#056bfa]/10">
      U-Haul Offers &amp; Guide
    </Badge>
    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
      Find a U-Haul Discount Code
    </h1>
    <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-left sm:text-center">
      <p>
        Moving expenses can involve several separate services, so finding a U-Haul discount code before you finalize your plans can be useful. Start by checking the latest U-Haul discounts available for your type of move rather than assuming every code applies to every rental.
      </p>
      <p>
        U-Haul maintains an official discounts and promotions section where customers can search discounted rates based on factors such as pickup location, drop-off location, date, and equipment type. Current promotions can include selected move discounts, storage offers, and other location- or service-specific promotions.
      </p>
      <p>
        You can also check CouponsBit before booking to see whether a U-Haul coupon, promo code, or other offer is currently available.
      </p>
    </div>
  </section>

  {/* Coupons, Deals & Offers */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <Tag className="w-6 h-6" /> U-Haul Coupons, Deals &amp; Offers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          A U-Haul coupon code is not necessarily the only way to get a better deal. The company also runs direct promotions that may apply automatically when you meet the relevant conditions.
        </p>
        <p>
          For example, U-Haul's current promotions include selected discounts on qualifying moves. Its official discounts page also lists storage promotions, including a one-year price-lock offer and a one-month-free storage promotion at participating locations for qualifying truck or trailer rentals. Availability and eligibility can vary.
        </p>
        <p>
          That makes it useful to compare a U-Haul promo code with the company's current offers before completing a reservation.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Equipment Options Grid */}
  <section className="space-y-6">
    <div className="text-center space-y-2">
      <h2 className="text-2xl font-bold text-[#056bfa]">Equipment &amp; Rentals</h2>
      <p className="text-gray-600">Explore equipment options tailored to your moving needs.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Moving Truck Discounts */}
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#056bfa]" /> Moving Truck Discounts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            Moving trucks are one of U-Haul's best-known services. Depending on your moving plans, you can choose equipment designed for different types and sizes of moves.
          </p>
          <p>
            Local moves may require a truck for transporting furniture and boxes around town, while a one-way rental can make more sense when you are moving to another city or state. U-Haul also offers pickups and cargo vans for smaller transportation needs.
          </p>
          <p>
            When searching for a U-Haul discount code, check whether the offer applies to the specific equipment and route you are considering.
          </p>
        </CardContent>
      </Card>

      {/* Trailer Rentals */}
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Container className="w-5 h-5 text-[#056bfa]" /> Trailer Rentals
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            You do not always need a full moving truck. U-Haul also offers several trailer options for customers who already have a suitable vehicle.
          </p>
          <p>
            Trailers can be useful when transporting furniture, equipment, recreational gear, or other larger items. Depending on the trailer and your vehicle, towing requirements can differ, so make sure your vehicle is compatible before reserving.
          </p>
        </CardContent>
      </Card>

      {/* Towing Equipment */}
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Car className="w-5 h-5 text-[#056bfa]" /> Towing Equipment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            U-Haul also offers towing equipment for customers who need to transport another vehicle as part of their move. Depending on the situation, available options can include tow dollies, auto transport equipment, and related towing products.
          </p>
          <p>
            If towing is part of your moving plan, look beyond the headline rental rate and check whether your selected U-Haul coupon code or offer applies to the complete rental combination.
          </p>
        </CardContent>
      </Card>
    </div>
  </section>

  {/* Storage & U-Box Section */}
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
          <Warehouse className="w-5 h-5" /> U-Haul Storage Options
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Moving does not always happen in one day. You might move out of your current home before the new one is ready, renovate your property, downsize, or simply need somewhere to keep belongings temporarily.
        </p>
        <p>
          U-Haul offers traditional self-storage as well as portable storage through U-Box.
        </p>
        <p>
          The company's current promotions include a one-month-free storage offer at participating locations for qualifying customers who rent a truck or trailer one way. Eligibility is verified during the reservation process, so terms and participating locations matter.
        </p>
      </CardContent>
    </Card>

    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
          <Box className="w-5 h-5" /> U-Box Portable Moving &amp; Storage
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          U-Box gives customers another way to handle moving and storage without relying entirely on a traditional truck rental.
        </p>
        <p>
          U-Box containers can be delivered to your home, loaded on your schedule, and then stored at a U-Haul facility or transported to another destination. Customers can also choose from different delivery and loading arrangements depending on how much assistance they need.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-gray-900">This can be particularly useful for:</p>
          <div className="flex flex-wrap gap-2">
            {["Long-distance moves", "Temporary storage", "Home renovations", "Moving between homes", "College moves", "Situations where you need more flexibility around moving dates"].map((item, index) => (
              <Badge key={index} variant="outline" className="bg-slate-50 border-slate-300 text-slate-700 py-1">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <p>
          U-Haul also offers Moving Help services that can assist with loading and unloading U-Box containers.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Moving Supplies & Moving Help Services */}
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
          <Package className="w-5 h-5" /> Moving Supplies from U-Haul
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          A truck is only one part of a move. You also need boxes, tape, protective materials, labels, packing paper, furniture pads, and other supplies.
        </p>
        <p>
          U-Haul's online store includes a broad range of moving and shipping supplies, including standard moving boxes, specialty boxes, packing materials, storage products, tie-down equipment, and other moving accessories.
        </p>
        <p>
          Depending on the product and location, customers can also find in-store pickup and delivery options. U-Haul notes that some products may have additional savings when customers choose in-store pickup.
        </p>
        <p>
          If you are buying several moving supplies together, check for a current U-Haul promo code or applicable store offer before placing the order.
        </p>
      </CardContent>
    </Card>

    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
          <Users className="w-5 h-5" /> Moving Help Services
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Not everyone wants to do all the heavy lifting themselves. U-Haul's Moving Help Marketplace connects customers with moving-service providers who can assist with tasks such as loading, unloading, packing, and unpacking.
        </p>
        <p>
          You can combine a U-Haul truck rental with labor assistance, allowing you to handle the driving while helpers take care of some of the physical work.
        </p>
        <p>
          This can be especially helpful when moving large furniture, appliances, or numerous boxes.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Use Cases Section (Tabs) */}
  <section className="space-y-6">
    <h2 className="text-2xl font-bold text-[#056bfa] text-center">U-Haul for Different Types of Moves</h2>

    <Tabs defaultValue="local" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto flex-wrap sm:flex-nowrap">
        <TabsTrigger value="local">Local Moves</TabsTrigger>
        <TabsTrigger value="long-distance">Long-Distance</TabsTrigger>
        <TabsTrigger value="college">College Moves</TabsTrigger>
        <TabsTrigger value="renovations">Renovations</TabsTrigger>
        <TabsTrigger value="business">Business</TabsTrigger>
      </TabsList>

      <Card className="mt-4 border-slate-200">
        <CardContent className="pt-6">
          <TabsContent value="local" className="space-y-3 mt-0">
            <h3 className="text-lg font-bold text-gray-900">Local Moves</h3>
            <p className="text-gray-600 leading-relaxed">
              For an apartment move or relocation within the same city, a local truck or cargo van may be all you need. You can add moving supplies, labor, or storage depending on the size of the move.
            </p>
          </TabsContent>

          <TabsContent value="long-distance" className="space-y-3 mt-0">
            <h3 className="text-lg font-bold text-gray-900">Long-Distance Moves</h3>
            <p className="text-gray-600 leading-relaxed">
              One-way truck rentals and U-Box containers can be useful when you are relocating to another city or state. Your ideal option depends on how much you are moving, your preferred schedule, and whether you want to drive the vehicle yourself.
            </p>
          </TabsContent>

          <TabsContent value="college" className="space-y-3 mt-0">
            <h3 className="text-lg font-bold text-gray-900">College Moves</h3>
            <p className="text-gray-600 leading-relaxed">
              Students moving into dorms or apartments may need smaller transportation options, boxes, and temporary storage rather than a full-size moving solution.
            </p>
          </TabsContent>

          <TabsContent value="renovations" className="space-y-3 mt-0">
            <h3 className="text-lg font-bold text-gray-900">Home Renovations</h3>
            <p className="text-gray-600 leading-relaxed">
              Renovation projects can create a surprising amount of furniture and equipment that needs to be moved out of the way. Temporary storage or a U-Box container can provide additional flexibility.
            </p>
          </TabsContent>

          <TabsContent value="business" className="space-y-3 mt-0">
            <h3 className="text-lg font-bold text-gray-900">Business Relocations</h3>
            <p className="text-gray-600 leading-relaxed">
              U-Haul also provides moving and storage solutions for businesses, including business storage, portable U-Box storage, moving supplies, and relocation-related services.
            </p>
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  </section>

  {/* Seasonal Times Section */}
  <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
    <h2 className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
      <Calendar className="w-6 h-6" /> Seasonal Times to Check for U-Haul Offers
    </h2>
    <div className="space-y-4 text-gray-600 leading-relaxed">
      <p>
        Moving demand changes throughout the year. People often move during warmer months, around the end of leases, before the start of a school year, or when relocating for work.
      </p>
      <p>
        You may also see people searching for moving equipment around major U.S. shopping and holiday periods. However, U-Haul offers are not limited to major sale events, and eligibility can depend on the specific location, equipment, and dates.
      </p>
      <p>
        Instead of waiting for a particular holiday, check the current U-Haul discounts whenever you are ready to make your reservation.
      </p>
    </div>
  </section>

</div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                How to Use a U-Haul Discount Code
              </h3>
              <p>
                If you have found a valid U-Haul discount code, applying it is generally straightforward for eligible online purchases.
              </p>
              <ul className="list-disc pl-5 space-y-2 font-semibold">
                <li>Visit U-Haul and select the product or service you need.</li>
                <li>Enter your pickup, drop-off, and rental information where applicable.</li>
                <li>Choose the equipment, service, or supplies you want.</li>
                <li>Continue to the shopping cart or checkout.</li>
                <li>Look for the option to apply a gift card or discount code.</li>
                <li>Enter your code and select Apply.</li>
                <li>Review the updated order or reservation details before completing your purchase.</li>
              </ul>
              <p>
                U-Haul's own FAQ confirms that online shoppers can enter a discount code from the shopping cart using the “Apply gift card or discount code” option.
              </p>
              <p>
                Remember that some promotional offers have specific eligibility requirements, so always check the terms attached to the code.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                How to Get More Value from Your U-Haul Booking
              </h3>
              <p>
                Finding a code is only one part of planning a U-Haul rental. Start by deciding exactly what you need before booking.
              </p>
              <p>
                If you are moving a small apartment, a large truck may be unnecessary. If you are relocating across the country, a one-way rental or U-Box may be more convenient. If you already have a capable vehicle, a trailer could be another option.
              </p>
              <p>
                It is also worth checking whether you need storage, moving labor, packing supplies, or towing equipment. Combining the right services can make the entire process easier to manage.
              </p>
              <p>
                U-Haul's app can also help customers get quotes, reserve equipment, modify reservations, and manage their moving services from one place.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Why Check CouponsBit for U-Haul?
              </h3>
              <p>
                Moving is rarely a single purchase. You may be booking transportation, buying supplies, arranging storage, and adding extra services along the way.
              </p>
              <p>
                That is why checking for a U-Haul discount code before you book can be worthwhile. CouponsBit brings together available coupon codes, promotional offers, deals, and discounts so you can check what is available before heading to checkout.
              </p>
              <p>
                Instead of searching multiple websites every time you move, start with the latest U-Haul offers on CouponsBit and then verify the terms that apply to your specific booking.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Start Your Move with a U-Haul Deal
              </h3>
              <p>
                Whether you are moving into your first apartment, relocating across the country, renovating your home, or simply need temporary storage, U-Haul offers more than just moving trucks. With rental equipment, trailers, storage, U-Box containers, moving supplies, and labor assistance, you can build a moving solution around what you actually need.
              </p>
              <p>
                Before you reserve, check CouponsBit for a current U-Haul discount code, then compare it with the latest U-Haul promotions and offers. Since discounts and eligibility can change, reviewing the terms before checkout is the easiest way to make sure the offer fits your particular move.
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
            Frequently Asked Questions About U-Haul Discount Codes
          </h3>
          {[
            {
              q: "Does U-Haul have discount codes?",
              a: "U-Haul offers discount codes from time to time, alongside direct promotions and discounts. Available offers can depend on the service, location, rental dates, and other eligibility requirements.",
            },
            {
              q: "Can I use a U-Haul discount code online?",
              a: "Yes. U-Haul's website provides an option to apply a gift card or discount code from the shopping cart for eligible purchases.",
            },
            {
              q: "Does U-Haul offer storage discounts?",
              a: "U-Haul currently lists several storage promotions, including a one-month-free storage offer at participating locations for qualifying truck or trailer rentals. Promotions and eligibility can change.",
            },
            {
              q: "Does U-Haul offer moving supplies?",
              a: "Yes. U-Haul sells a wide selection of moving and shipping supplies, including boxes, packing materials, storage products, and moving accessories.",
            },
            {
              q: "Can I use U-Haul for long-distance moves?",
              a: "Yes. U-Haul offers one-way moving options, and U-Box containers can also be shipped to destinations across the country and beyond, depending on the service and destination.",
            },
            {
              q: "Does U-Haul offer moving help?",
              a: "Yes. U-Haul's Moving Help Marketplace allows customers to arrange assistance with services such as loading, unloading, packing, and unpacking.",
            },
            {
              q: "Can I get a U-Haul discount without a promo code?",
              a: "Yes. U-Haul directly advertises selected discounts and promotions, so a promo code is not always necessary. The available offers can change based on your move and location.",
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
            Popular U-Haul Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "U-Haul Promo Code",
              "Moving Truck Rental",
              "1 Month Free Storage",
              "U-Box Containers",
              "Moving Supplies Coupon",
              "U-Haul Trailer Deals",
              "CouponsBit U-Haul",
              "Moving Help Marketplace",
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
            Today's Top U-Haul Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "1 MONTH FREE STORAGE",
                sub: "At Participating Locations With One-Way Rental",
              },
              {
                heading: "U-BOX CONTAINER DEALS",
                sub: "Flexible Moving & Storage Solutions",
              },
              {
                heading: "MOVING HELP MARKETPLACE",
                sub: "Find Local Moving Assistance & Packing Services",
              },
              {
                heading: "MOVING SUPPLIES DISCOUNTS",
                sub: "Save Big On Boxes, Tape & Packing Supplies",
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
                  href="https://www.uhaul.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
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
