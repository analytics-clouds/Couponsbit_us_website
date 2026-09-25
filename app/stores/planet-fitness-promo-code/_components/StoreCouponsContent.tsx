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
  ExternalLink, HeartHandshake, ShieldAlert, Calendar, Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Dumbbell,
  HeartPulse,
  Gift,
  Users as UsersIcon,
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
  { id: "d1", label: "NEW", heading: "New Member Offer", sub: "Latest Deals" },
  { id: "d2", label: "DEAL", heading: "Black Card Membership Deal", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Annual Fee Waived", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Free Trial Pass", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Referral Bonus", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up To $260", href: "/stores/merachfit-discount-code" },
  { name: "Superrun", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037376/superrun_w6lj1n.webp", dealText: "Save $30 OFF", href: "/stores/superrun-discount-code" },
  { name: "Ballboyz", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/ballboyz-coupon-code_rduo3k.jpg", dealText: "Up to 50% OFF", href: "/stores/ballboyz-discount-code" },
  { name: "RingConn", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp", dealText: "Starting From $199", href: "/stores/ringconn-discount-code" },
  { name: "SignalRing", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/singnalring_i9epcf.jpg", dealText: "Starting At $399", href: "/stores/signalring-discount-code" },
  { name: "GoodRx", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/goodrx-logo_ibgfjr.webp", dealText: "From $39/Month", href: "/stores/goodrx-discount-code" },
];

const STORE_URL = "https://www.planetfitness.com";

export default function PlanetFitnessCouponsContent() {
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
              <span className="text-black font-extrabold">Planet Fitness</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789535819/planet_fitness_promo_code_yaozty.webp" alt="Planet Fitness" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Planet Fitness Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.2</span>
                      <span className="text-gray-600 font-bold text-sm">(24.9k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Planet Fitness promo codes and discount codes to join for just $1 down and $10/month or get the PF Black Card from $24.99/month. Enjoy Classic Memberships from $15/month and access affordable fitness plans at participating USA clubs in Sept 2026.
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
                    { icon: Tag, val: "8", label: "Offers" },
                    { icon: Percent, val: "150+", label: "Deals" },
                    { icon: UsersIcon, val: "1.5M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789535819/planet_fitness_promo_code_yaozty.webp" alt="Planet Fitness Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Planet Fitness Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "NEW", value: "$1 DOWN", title: "Planet Fitness Promo Code – $1 Down + $10/Month", desc: "New members can join with just $1 down and pay $10 a month with this limited-time Planet Fitness membership offer.", bullets: ["The no-commitment deal is available to new members and ends today; additional fees and restrictions may apply.", "Check Planet Fitness deals and membership cost details at participating USA Planet Fitness locations."] },
                  { label: "FROM", value: "$24.99", title: "Planet Fitness Promo Code – PF Black Card Membership From $24.99/Month", desc: "The PF Black Card membership starts at $24.99 per month, plus applicable taxes and fees.", bullets: ["Members can access any participating club, bring a guest anytime and use PF+ premium digital workouts.", "Compare Planet Fitness prices and Planet Fitness gym membership benefits before joining."] },
                  { label: "FROM", value: "$15", title: "Planet Fitness Promo Code – Classic Membership From $15/Month", desc: "Planet Fitness Classic Membership starts at $15 per month, plus applicable taxes and fees.", bullets: ["Enjoy unlimited access to your selected home club with this standard Planet Fitness membership.", "Check Planet Fitness hours, Planet Fitness hrs and club availability at your preferred location."] },
                  { label: "DEAL", value: "OPTIONS", title: "Planet Fitness Promo Code – Membership Options", desc: "Choose between the PF Black Card and Classic Membership based on the access and benefits you need.", bullets: ["Both membership options provide access to The Judgement Free Zone and cardio and strength equipment.", "Compare Planet Fitness membership cost, Planet Fitness coupons and available Planet Fitness deals before signing up."] },
                  { label: "DEAL", value: "LOCATOR", title: "Planet Fitness Promo Code – Find A Club", desc: "Explore Planet Fitness locations across the USA to find a convenient Planet Fitness gym.", bullets: ["Check the nearest Planet Fitness club for current Planet Fitness hours and available membership options.", "Use the official club locator to compare nearby locations, membership prices and access details."] },
                  { label: "DEAL", value: "SEASONAL", title: "Planet Fitness Promo Code – Summer Pass", desc: "Explore seasonal Planet Fitness offers such as the Planet Fitness Summer Pass when available.", bullets: ["A summer pass Planet Fitness promotion can provide a flexible way for eligible visitors to enjoy participating clubs.", "Check current Planet Fitness summer pass availability, terms and participating USA locations."] },
                  { label: "DEAL", value: "DAY PASS", title: "Planet Fitness Promo Code – Day Pass & Visitor Options", desc: "Check whether a Planet Fitness day pass or visitor pass is available at your preferred club.", bullets: ["Visitor access and guest policies can vary depending on membership type and individual club rules.", "Contact or check your nearest Planet Fitness location for current pass options and requirements."] },
                  { label: "DEAL", value: "24-HR", title: "Planet Fitness Promo Code – 24-Hour Club Access", desc: "Some Planet Fitness locations offer extended or 24-hour access depending on the individual club.", bullets: ["Check Planet Fitness 24 hours availability before planning a late-night or early-morning workout.", "Search your local Planet Fitness gym for current hours, including any available 24 hour Planet Fitness near me options."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Planet Fitness: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Planet Fitness?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Planet Fitness is a US-based fitness club franchise known for its affordable membership options and its welcoming, low-pressure approach to working out.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand was founded with the goal of creating a fitness environment where people could feel comfortable exercising regardless of their fitness experience. Its well-known Judgement Free Zone® philosophy is designed to make gyms feel less intimidating, particularly for people who may be new to fitness.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Today, Planet Fitness operates thousands of locations across the US and other markets. Individual clubs can vary in equipment, amenities, hours, and available services, so checking your local location is important before joining.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Planet Fitness memberships generally provide access to cardio machines, strength equipment, free weights, locker rooms, and other club amenities. Depending on the membership level and location, members may also receive access to additional perks and services.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand's PF Black Card® membership is designed for members who want benefits beyond basic gym access. Depending on the current membership structure and location, Black Card benefits can include access to other Planet Fitness locations, guest privileges, use of massage chairs and other amenities, and discounts from participating partners.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Because membership terms and promotions can vary, checking the current offer before joining is always a smart move.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Dumbbell, name: "Standard Membership", count: "50+", color: "text-blue-500", href: "/categories/health" },
                        { icon: HeartPulse, name: "Black Card Membership", count: "40+", color: "text-purple-500", href: "/categories/health" },
                        { icon: Gift, name: "New Member Offers", count: "20+", color: "text-pink-500", href: "/categories/health" },
                        { icon: UsersIcon, name: "Referral Deals", count: "15+", color: "text-teal-500", href: "/categories/health" },
                        { icon: Search, name: "Free Trial Passes", count: "25+", color: "text-orange-500", href: "/categories/health" },
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
    How to Use a Planet Fitness Promo Code
  </h3>
  <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
    <p>
      If you've found a Planet Fitness promo code, review its terms before beginning the membership process.
    </p>
    <p>
      Start by selecting the Planet Fitness location where you want to become a member. Review the membership options available at that club and choose the plan that fits your needs.
    </p>
    <p>
      During the signup process, look for the appropriate field or promotional offer area and enter the eligible code if one is provided.
    </p>
    <p>
      Before completing your membership registration, make sure the promotion has been reflected correctly.
    </p>
    <p>
      If a code doesn't work, check whether it applies to your selected location and membership. Some promotions may be limited to new members, specific clubs, specific membership levels, or a defined promotional period.
    </p>
    <p>
      Because Planet Fitness operates through individual franchise locations, membership pricing, fees, and promotions can vary. Always read the current membership agreement before signing up.
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
      <div className="prose max-w-none text-left">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Planet Fitness Promo Code, Coupon Code & Membership Deals
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 font-bold text-[14px]">
      {[
        ["$1 Down Promo Deal", "$1 Down + $10/mo", "New Members", "No-commitment deal ending today; fees/restrictions apply", "Classic Membership"],
        ["PF Black Card Membership", "From $24.99/mo", "All Users", "Includes guest access, multi-club access & PF+ workouts", "Black Card Membership"],
        ["Classic Membership", "From $15/mo", "All Users", "Standard access to selected home club location", "Classic Membership"],
        ["Membership Plans", "Varies by Plan", "All Users", "Access to Judgement Free Zone, cardio & strength gear", "PF Black Card / Classic"],
        ["Find A Club Locator", "Free Access", "All Users", "Explore USA locations, hours & club-specific deals", "Club Locations"],
        ["Summer Pass Promotion", "Seasonal Rates", "Eligible Visitors", "Flexible access during seasonal promo windows", "Participating Clubs"],
        ["Day Pass & Visitor Options", "Varies by Location", "Guests & Visitors", "Pass availability & guest policies vary by club", "Guest Passes"],
        ["24-Hour Club Access", "Standard Rates", "All Members", "Extended/24-hour access available at select clubs", "Participating Gyms"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 7 && "border-b-0")}>
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
            Joining a gym can sometimes feel like signing up for a second mortgage—with initiation fees, equipment you may never touch, and enough mirrors to make you question every life decision. Planet Fitness takes a different approach.
          </p>
          <p>
            Built around the idea of making fitness more accessible and less intimidating, Planet Fitness is one of the best-known gym chains in the US. Its clubs offer cardio and strength equipment, free fitness training, locker rooms, and other amenities, while its Black Card membership adds additional perks for members who want more flexibility and benefits.
          </p>
          <p>
            If you're thinking about joining a club, upgrading your membership, or simply looking for ways to spend less on your fitness routine, checking for a Planet Fitness promo code before signing up can be worthwhile.
          </p>
          <p>
            CouponsBit helps you find Planet Fitness coupon codes, promotional offers, membership deals, and other savings opportunities so you can compare available options before committing to a membership.
          </p>

          <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Find a Planet Fitness Promo Code
        </h3>
        <p>
          Looking for a Planet Fitness promo code? Start by checking CouponsBit before signing up.
        </p>
        <p>
          Gym memberships can involve more than the recurring membership fee. Depending on the club and promotion, you may encounter enrollment-related costs, annual fees, or other membership terms. A promotional offer could potentially help reduce the cost of joining or provide another membership benefit.
        </p>
        <p>
          However, Planet Fitness promotions can vary by location and change over time. A deal available at one club may not necessarily be available at another.
        </p>
        <p>
          That's why it's important to check the details of the current offer, including the participating location, membership level, promotional period, and any restrictions.
        </p>
        <p>
          If you find multiple offers, compare them rather than automatically choosing the first Planet Fitness coupon code you see. The best deal is the one that actually matches the membership and location you want.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Planet Fitness Membership Options
        </h3>
        <p>
          Planet Fitness generally offers membership choices designed around different fitness needs and budgets.
        </p>
        <p>
          The basic membership is intended for people who primarily want access to their home club and standard fitness equipment.
        </p>
        <p>
          The PF Black Card® is designed for members who want additional benefits and greater flexibility. Its benefits can include access to participating Planet Fitness locations, the ability to bring a guest, and additional club amenities.
        </p>
        <p>
          Membership structures and benefits can change, so always check the current terms for your preferred club before signing up.
        </p>
        <p>
          If you're someone who travels frequently, for example, access to additional locations may make a higher membership tier more useful. If you simply want a nearby gym for regular workouts, a basic membership may be enough.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Planet Fitness Gym Equipment
        </h3>
        <p>
          You don't need to be a professional athlete to use Planet Fitness.
        </p>
        <p>
          Planet Fitness clubs typically offer a mix of cardio and strength equipment designed for different types of workouts. Depending on your location, you may find treadmills, ellipticals, stair climbers, stationary bikes, strength machines, free weights, and other equipment.
        </p>
        <p>
          Cardio equipment can be useful for walking, running, cycling, or general endurance workouts. Strength machines and free weights provide options for resistance training and muscle-building routines.
        </p>
        <p>
          Equipment availability varies between clubs, so if there's a specific machine you consider essential, check with your local Planet Fitness location.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Planet Fitness Free Fitness Training
        </h3>
        <p>
          Not sure what you're doing when you walk into a gym?
        </p>
        <p>
          You're definitely not alone.
        </p>
        <p>
          Planet Fitness offers PE@PF, a fitness training program designed to help members become more comfortable using equipment and developing workout routines. The availability and format of training can vary by location.
        </p>
        <p>
          This can be particularly helpful for beginners who don't know where to start.
        </p>
        <p>
          Rather than wandering around the gym pretending to understand every machine—which, let's be honest, happens to everyone at some point—members can take advantage of available training resources to learn how equipment works and develop more confidence.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          PF Black Card Benefits
        </h3>
        <p>
          The PF Black Card is one of Planet Fitness's most recognizable membership options.
        </p>
        <p>
          Its benefits can include:
        </p>
        <p>
          Access to participating Planet Fitness locations
        </p>
        <p>
          Ability to bring a guest
        </p>
        <p>
          Use of select additional amenities
        </p>
        <p>
          Discounts from participating partners
        </p>
        <p>
          Access to certain relaxation and recovery amenities
        </p>
        <p>
          Planet Fitness has historically included perks such as massage chairs, HydroMassage®, tanning at participating clubs, and Total Body Enhancement® among Black Card benefits. Availability can vary by location and current membership terms.
        </p>
        <p>
          The guest benefit can also make the membership more appealing if you enjoy working out with a friend, partner, or family member.
        </p>
        <p>
          Before joining specifically for one benefit, check whether that amenity is available at your preferred location.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Planet Fitness App
        </h3>
        <p>
          Your gym experience doesn't necessarily begin when you walk through the doors.
        </p>
        <p>
          The Planet Fitness app provides members with tools and resources that can support their fitness routine. Depending on the current app features, users can access workout resources, account information, club details, and other fitness-related tools.
        </p>
        <p>
          For beginners, having workout guidance available on your phone can make it easier to arrive at the gym with a plan rather than spending the first 15 minutes deciding what to do.
        </p>
        <p>
          The app can also make it more convenient to keep track of your relationship with your Planet Fitness membership.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Planet Fitness for Beginners
        </h3>
        <p>
          Planet Fitness has positioned itself strongly around beginner-friendly fitness.
        </p>
        <p>
          You don't need to arrive knowing how to use every machine, understand complicated gym terminology, or have a perfectly structured workout routine.
        </p>
        <p>
          The combination of accessible equipment, fitness training resources, and the Judgement Free Zone® concept is intended to create an environment where people can work toward their goals at their own pace.
        </p>
        <p>
          For someone returning to exercise after a long break, this can be especially useful. Your first goal doesn't have to be becoming the fittest person in the building. Sometimes the biggest win is simply showing up consistently.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Planet Fitness for Cardio Workouts
        </h3>
        <p>
          If cardio is your main focus, Planet Fitness clubs typically provide plenty of options.
        </p>
        <p>
          Treadmills can work for walking or running, while ellipticals and bikes offer lower-impact alternatives. Depending on your club, you may also find additional cardio equipment.
        </p>
        <p>
          You can create a simple routine around your preferred machine or mix different types of cardio throughout the week.
        </p>
        <p>
          If you're just getting started, focus on consistency rather than trying to turn every workout into a punishment session. A routine you'll actually maintain is far more valuable than an intense plan you abandon after two weeks.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Planet Fitness for Strength Training
        </h3>
        <p>
          Planet Fitness also offers equipment for resistance and strength training.
        </p>
        <p>
          Strength machines can provide a straightforward way for beginners to learn movement patterns, while free weights offer more flexibility for experienced gym-goers.
        </p>
        <p>
          A balanced routine can combine strength training with cardio, mobility work, and rest days.
        </p>
        <p>
          The right equipment for you will depend on your goals. Someone focused on general fitness may have very different needs from someone training for a specific sport or strength milestone.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Planet Fitness for Women
        </h3>
        <p>
          Planet Fitness provides a general fitness environment for members of all genders and fitness levels.
        </p>
        <p>
          Women can use the same cardio, strength, and functional equipment available at their club while taking advantage of fitness resources designed to support different experience levels.
        </p>
        <p>
          If you're new to weight training, starting with machines and gradually learning free-weight movements can be a comfortable approach.
        </p>
        <p>
          The most important factor is finding a routine and gym environment that makes you feel comfortable enough to keep coming back.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Planet Fitness for Students
        </h3>
        <p>
          For students, a gym membership can be useful when you want a convenient place to exercise without building an elaborate home gym.
        </p>
        <p>
          Students can check their local Planet Fitness club for current membership promotions or eligibility-based offers. Promotional availability may differ by location and time.
        </p>
        <p>
          If you're comparing memberships, look beyond the advertised monthly cost. Consider how close the gym is to your school or home, what equipment you actually use, the membership terms, and whether additional benefits are worth it for your routine.
        </p>
        <p>
          And before you sign up, check CouponsBit for a current Planet Fitness promo code or membership offer.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Planet Fitness Black Friday and Seasonal Deals
        </h3>
        <p>
          Fitness doesn't have to wait for January.
        </p>
        <p>
          While the New Year is an obvious time for people to start thinking about exercise, gyms can run promotional campaigns throughout the year.
        </p>
        <p>
          Keep an eye out around major US shopping periods such as New Year's, Valentine's Day, Memorial Day, Fourth of July, Back-to-School season, Labor Day, Thanksgiving, Black Friday, Cyber Monday, and the holiday season.
        </p>
        <p>
          Planet Fitness promotions can be location-specific, so don't assume that a nationwide shopping event automatically means every club will have the same offer.
        </p>
        <p>
          Checking for current promotions through CouponsBit can help you identify opportunities before you sign up.
        </p>
      </div>
    </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Save on Planet Fitness Memberships</h3>
              <p>Finding the right gym deal isn't simply about hunting for the biggest-looking discount.</p>
              <p>Start by checking CouponsBit for a current Planet Fitness promo code or membership offer. Then compare that promotion with any offer displayed by your local club.</p>
              <p>Think about how you'll actually use the membership. If you only need access to one nearby gym, paying for additional benefits may not be necessary. If you travel frequently or want to bring a guest, a higher membership level could offer more practical value.</p>
              <p>You should also consider the long-term cost. A promotional signup offer may look attractive initially, but understanding the ongoing membership terms, annual fees, cancellation conditions, and other charges is important before committing.</p>
              <p>Most importantly, choose a gym you can realistically visit. The best membership deal in the world isn't much of a deal if the gym is so far away that you never go.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Planet Fitness?</h3>
              <p>Finding a gym membership offer shouldn't require hours of searching.</p>
              <p>CouponsBit gives you a convenient place to check for Planet Fitness promo codes, coupon codes, membership deals, promotional offers, and other savings opportunities before signing up.</p>
              <p>You can compare available offers, check the terms, and then decide whether the promotion makes sense for the membership you're considering.</p>
              <p>This is particularly useful because Planet Fitness promotions can vary by location. Rather than assuming every club has the same deal, make checking current offers part of your signup process.</p>
              <p>A few minutes of research can help you start your fitness journey with a little more money left in your wallet.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Start Your Fitness Journey for Less</h3>
              <p>Getting into a consistent fitness routine doesn't have to begin with an expensive membership or an intimidating gym experience.</p>
              <p>Planet Fitness offers a broad range of equipment, beginner-friendly resources, and membership options designed to make regular exercise more accessible. Whether you're looking for a simple place to get your cardio in, want to start strength training, or prefer the additional benefits of a Black Card membership, there are different ways to build a routine around your goals.</p>
              <p>Before you sign up, take a moment to check for a Planet Fitness promo code on CouponsBit. Compare it with the current offer at your preferred club, read the membership terms, and choose the option that genuinely fits your needs.</p>
              <p>Because the smartest fitness routine is the one you can stick with and the smartest gym membership is the one that doesn't make your wallet do all the heavy lifting.</p>
            </div>
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
            Frequently Asked Questions About Planet Fitness Promo Codes
          </h3>
          {[
            { q: "Does Planet Fitness offer promo codes?", a: "Planet Fitness offers promotional membership deals from time to time. Offers can vary by location and membership type, so check CouponsBit and your preferred club for current promotions." },
            { q: "Where can I find a Planet Fitness promo code?", a: "You can check CouponsBit for available Planet Fitness promo codes, coupon offers, and membership deals before signing up." },
            { q: "Can I use a Planet Fitness promo code at any location?", a: "Not necessarily. Planet Fitness promotions can vary between locations, particularly because individual clubs may have different membership terms and offers. Always check whether a promotion applies to your selected club." },
            { q: "Does Planet Fitness have membership discounts?", a: "Planet Fitness periodically offers promotional membership pricing and other signup incentives. The available savings depend on the club, membership type, and current promotion." },
            { q: "What is the PF Black Card?", a: "The PF Black Card is Planet Fitness's higher-tier membership option. Benefits can include access to participating Planet Fitness locations, guest privileges, and additional amenities. Exact benefits can vary by location and current membership terms." },
            { q: "Can I bring a guest to Planet Fitness?", a: "Guest privileges are one of the benefits associated with the PF Black Card, subject to current membership terms and club policies." },
            { q: "Does Planet Fitness offer free fitness training?", a: "Planet Fitness offers PE@PF fitness training at participating locations. The availability and format can vary by club." },
            { q: "Does Planet Fitness have an app?", a: "Yes. Planet Fitness has a mobile app that provides fitness and membership-related features. Current features can change as the app is updated." },
            { q: "Is Planet Fitness good for beginners?", a: "Planet Fitness is designed around an accessible, beginner-friendly gym environment. Its Judgement Free Zone® philosophy and available fitness resources can make it a comfortable option for people who are new to working out." },
            { q: "Does Planet Fitness have Black Friday deals?", a: "Planet Fitness may run promotional offers during different periods of the year, including around major shopping events. Promotions can vary by location, so check current offers before joining." }
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
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
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
            Popular Planet Fitness Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Planet Fitness Promo Code",
              "PF Black Card",
              "Classic Membership",
              "No Startup Fee Deals",
              "Judgement Free Zone",
              "Guest Pass Perks",
              "Annual Fee Details",
              "App Features"
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
            Today's Top Planet Fitness Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "$1 DOWN", sub: "$1 Down + $10/Month" },
              { heading: "FROM $24.99", sub: "PF Black Card Membership From $24.99/Month" },
              { heading: "FROM $15", sub: "Classic Membership From $15/Month" },
              { heading: "SEASONAL", sub: "Summer Pass" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  P
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
                  href={STORE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Planet Fitness: ${deal.heading}`}
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
