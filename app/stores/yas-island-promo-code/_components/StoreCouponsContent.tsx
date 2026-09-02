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
  Ticket,
  Waves,
  Building2,Globe, MapPin, Sparkles, Bus, Crown, Calendar, Map,
  Hotel,
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
  { id: "d1", label: "NEW", heading: "Annual Pass from AED 134/Month", sub: "Latest Deals" },
  { id: "d2", label: "SHOP", heading: "Diamond Annual Pass for AED 3,295", sub: "Featured Picks" },
  { id: "d3", label: "SHOP", heading: "Gold Annual Pass for AED 1,795", sub: "Featured Picks" },
  { id: "d4", label: "TOP", heading: "Up to 50% OFF Flying & Climbing Experiences", sub: "Featured Picks" },
  { id: "d5", label: "BEST", heading: "Silver Annual Pass for AED 1,595", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Klook", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002063/klook-logo_alzz2a.webp", dealText: "Up To 50% OFF", href: "/stores/klook-discount-code" },
  { name: "Agoda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg", dealText: "Up To 69% OFF", href: "/stores/agoda-discount-code" },
  { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", dealText: "Up To 40% OFF", href: "/stores/expedia-discount-code" },
  { name: "Airalo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/airalo-logo_fc6u6p.webp", dealText: "USA eSIM From $4.50", href: "/stores/airalo-discount-code" },
  { name: "Booking", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/booking-logo_dtnn30.webp", dealText: "Up To 40% OFF", href: "/stores/booking-promo-code" },
  { name: "ITC Hotels", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/itc-hotels-logo_ceakgl.webp", dealText: "Up To 50% OFF", href: "/stores/itc-hotels-discount-code" },
];

const STORE_URL = "https://www.dpbolvw.net/click-101212283-17058185?sid=1015";

export default function YasIslandCouponsContent() {
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
              <span className="text-black font-extrabold">Yas Island</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788248210/yas-island-logo_krotjw.webp" alt="Yas Island" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Yas Island</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(22.4k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                     Discover verified Yas Island promo codes and discount codes for Sep 2026. Save up to 50% on adventures, buy Annual Passes from AED 134/month, enjoy Kids Go FREE offers, dining discounts, CLYMB savings, and exclusive benefits across Yas Island attractions.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "10", label: "Offers" },
                    { icon: Percent, val: "2.1k", label: "Deals" },
                    { icon: Users, val: "8M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788248210/yas-island-logo_krotjw.webp" alt="Yas Island Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Yas Island Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "PASS", value: "AED 134/MO", title: "Yas Island Promo Code – Annual Pass from AED 134/Month", desc: "Get your Yas Annual Pass from only AED 134 per month with Tabby.", bullets: ["Split the cost into easy, interest-free monthly payments.", "Enjoy year-round access to 4 record-breaking theme parks.", "Unlock exclusive Passholder benefits, special events and Yas Island savings.", "Choose your Annual Pass and make every visit your Best Day Ever"] },
                  { label: "PASS", value: "AED 3,295", title: "Yas Island Promo Code – Diamond Annual Pass for AED 3,295", desc: "Get the Diamond Yas Annual Pass for AED 3,295.", bullets: ["Enjoy Quick Pass benefits to skip the line.", "Save 25% OFF on dining, shopping and paid experiences.", "Get exclusive hotel perks, drinks and spa offers.", "Enjoy premium Yas Island benefits and special event access."] },
                  { label: "PASS", value: "AED 1,795", title: "Yas Island Promo Code – Gold Annual Pass for AED 1,795 Gold Pass", desc: "Get the Gold Yas Annual Pass for AED 1,795.", bullets: ["Enjoy unlimited access to Yas Theme Parks.", "Get 25% OFF on dining, shopping and paid experiences.", "Save 25% OFF on Family & Friends tickets.", "Unlock exclusive Yas Island offers and hotel discounts."] },
                  { label: "SALE", value: "50% OFF", title: "Yas Island – Up to 50% OFF Flying & Climbing Experiences", desc: "Get 50% OFF on eligible midweek flying and climbing adventures.", bullets: ["Enjoy 25% OFF on selected weekend adventures.", "Experience heart-racing activities at Yas Island for less.", "Explore exciting indoor flying and climbing experiences.", "Book your adventure and enjoy limited-time savings."] },
                  { label: "PASS", value: "AED 1,595", title: "Yas Island – Silver Annual Pass for AED 1,595 Hurry Up Shop Now", desc: "Get the Silver Yas Annual Pass for AED 1,595.", bullets: ["Enjoy year-round park access with limited exclusions.", "Save 15% OFF on dining, shopping and paid experiences.", "Get 15% OFF on Family & Friends tickets.", "Enjoy 50% OFF on Yas Beach access."] },
                  { label: "DEAL", value: "25% OFF", title: "Yas Island – Digital Photos & Gaming Promotions", desc: "Get unlimited digital photos with eligible promotions.", bullets: ["Enjoy 25% OFF on single photo prints.", "Save more on selected game play bundles.", "Capture your favourite Yas Island memories.", "Check available photo and gaming promotions before your visit."] },
                  { label: "SALE", value: "20% OFF", title: "Yas Island – Get 20% OFF with FacePass", desc: "Get 20% OFF on your first Food & Beverage purchase.", bullets: ["Available for first-time FacePass users.", "Enroll through the Yas Island app to access the offer.", "Enjoy savings on your first eligible food and beverage order.", "Check the offer terms before making your purchase."] },
                  { label: "DEAL", value: "KIDS FREE", title: "Yas Island – Kids Go FREE Summer Package Tour", desc: "1 Kid Goes FREE per Adult with the eligible summer package.", bullets: ["Book participating hotels until 31 October.", "Up to two children under 12 can stay FREE with two paying adults.", "Kids can enjoy eligible free stay, play and dine benefits.", "Enjoy flexible cancellation on new eligible bookings."] },
                  { label: "SALE", value: "25% OFF", title: "Yas Island – Get 25% OFF Dining with Your Annual Pass", desc: "Enjoy 25% OFF dining at selected partner restaurants.", bullets: ["Available with an eligible Yas Annual Pass.", "Save on food and dining experiences across participating venues.", "Explore exclusive Passholder dining privileges.", "Check participating restaurants and offer terms before visiting."] },
                  { label: "SALE", value: "20% OFF", title: "Yas Island – Get 20% OFF at CLYMB", desc: "Enjoy 20% OFF at CLYMB Yas Island with valid Yas Theme Park tickets.", bullets: ["Experience thrilling indoor adventures for less.", "A perfect offer for a day filled with adrenaline.", "Enjoy exciting flying and climbing experiences.", "Check eligible tickets and terms before booking."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[8px] text-[15px] sm:text-[15px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[15px] sm:text-2xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Yas Island: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
  <h3 className="text-black font-black text-lg mb-6">
    What Is Yas Island?
  </h3>
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
    Yas Island is a major entertainment and leisure destination in Abu Dhabi, UAE. It combines theme parks, hotels, restaurants, shopping, entertainment venues, beaches, and other attractions in one location.
  </p>
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 text-justify">
    For travelers, this makes Yas Island particularly convenient because you can combine multiple activities during the same trip rather than planning separate journeys across the city.
  </p>
  
  <p className="text-black font-black text-sm leading-relaxed mb-6">
    The destination's major attractions include four large theme parks:
  </p>
  
  <div className="space-y-8 mb-8">
    {[
      {
        icon: Globe,
        title: "Ferrari World Yas Island",
        sub: "Home to Formula Rossa, the world's fastest roller coaster, and iconic high-speed racing experiences."
      },
      {
        icon: MapPin,
        title: "Warner Bros. World Yas Island",
        sub: "A massive indoor theme park featuring six immersive lands filled with iconic DC comics and cartoon characters."
      },
      {
        icon: Sparkles,
        title: "Yas Waterworld",
        sub: "An Emirati-themed water park packed with dozens of thrilling slides, rides, and family wave pools."
      },
      {
        icon: Bus,
        title: "SeaWorld Yas Island",
        sub: "The region's first marine life theme park, featuring eight ocean realms and up-close animal encounters."
      }
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start text-justify">
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

  <p className="text-gray-500 font-bold text-sm leading-relaxed text-justify">
    Yas Island also provides transport options such as Yas Express, which connects visitors with attractions around the island.
  </p>
</div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Ticket, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Waves, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Building2, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
  <h3 className="text-black font-black text-lg mb-6">
    Ways to Save on Yas Island
  </h3>
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 text-justify">
    A promo code is only one way to make your trip more budget-friendly.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Ticket,
        title: "Compare Individual and Multi-Park Tickets",
        sub: "If you plan to visit multiple parks, compare combination tickets with separate admissions."
      },
      {
        icon: Crown,
        title: "Consider an Annual Pass",
        sub: "Frequent visitors may find an annual pass more useful than purchasing individual tickets repeatedly. Yas Island's current annual-pass program includes unlimited access benefits along with additional island-wide discounts and privileges."
      },
      {
        icon: Calendar,
        title: "Look for Seasonal Offers",
        sub: "Theme parks and travel destinations often introduce special promotions around holidays, school breaks, and major events. Check for current Yas Island offers before booking."
      },
      {
        icon: Hotel,
        title: "Check Hotel Packages",
        sub: "If you're staying overnight, compare hotel-and-attraction packages with booking each component separately."
      },
      {
        icon: Map,
        title: "Plan Multiple Activities",
        sub: "A multi-day itinerary can help you get more from your trip instead of trying to visit every attraction in one day."
      },
      {
        icon: Tag,
        title: "Check CouponsBit Before Every Booking",
        sub: "Before paying for tickets, accommodation, or eligible experiences, check CouponsBit for a current Yas Island coupon code, promo code, discount, or special offer."
      }
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start text-justify">
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
          Yas Island Promo Code, Discount Code & Ticket Deals
        </h2>

        <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[850px] border-collapse text-left">
      <thead>
        <tr className="bg-[#056BFA]">
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Offer</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Discount / Price</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Eligibility</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Key Conditions</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Applicable On</th>
        </tr>
      </thead>
      <tbody className="text-[14px] font-bold text-gray-600">
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Annual Pass Monthly Plan 💳
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From AED 134/mo
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Visitors
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Split into interest-free monthly payments via Tabby; includes exclusive Passholder perks
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Yas Annual Pass (Access to 4 theme parks)
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Diamond Annual Pass 💎
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            AED 3,295
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Visitors
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Includes Quick Pass line-skipping, 25% OFF dining/shopping/experiences, plus hotel &amp; spa perks
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Diamond Yas Annual Pass
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Gold Annual Pass 🥇
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            AED 1,795
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Visitors
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Unlimited park access, 25% OFF dining &amp; shopping, plus 25% OFF Family &amp; Friends tickets
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Gold Yas Annual Pass
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Silver Annual Pass 🥈
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            AED 1,595
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Visitors
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Year-round access (limited blackout dates), 15% OFF dining/shopping, 50% OFF Yas Beach
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Silver Yas Annual Pass
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Flying &amp; Climbing Adventures 🧗‍♂️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 50% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Visitors
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            50% OFF midweek adventures; 25% OFF selected weekend experiences
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            CLYMB indoor flying &amp; climbing
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            CLYMB Ticket Holder Discount 🧗
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            20% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Theme Park Ticket Holders
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Requires valid Yas Theme Park ticket; valid on indoor climbing &amp; flying
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            CLYMB Yas Island experience
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Kids Go FREE Summer Package 🏖️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            1 Kid FREE per Adult
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Families (Kids &lt; 12)
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Up to 2 kids stay, play &amp; dine FREE with 2 adults; book participating hotels by Oct 31
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Participating hotel &amp; park packages
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Passholder Dining Privilege 🍽️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            25% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Annual Passholders
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Valid at selected partner restaurants and dining venues across Yas Island
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Participating partner restaurants
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            FacePass F&amp;B Welcome Offer 🍔
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            20% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            First-Time FacePass Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Must enroll via the official Yas Island app; applies to first eligible F&amp;B purchase
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            First Food &amp; Beverage order
          </td>
        </tr>

        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Digital Photos &amp; Gaming Perks 📸
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 25% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Visitors
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Unlimited digital photos on select packages; 25% OFF single prints &amp; game bundles
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Photo prints &amp; arcade game bundles
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        {/* Expandable Content Area */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative transition-all", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <div className="space-y-4">
            <p>
              Planning an exciting getaway to Abu Dhabi? A Yas Island promo code can help you look for savings on theme park tickets, experiences, stays, and other activities across one of the UAE’s most popular entertainment destinations. Whether you are traveling with family, planning a weekend with friends, or building a complete Abu Dhabi holiday, Yas Island brings attractions, entertainment, dining, shopping, and hotels together in one destination.
            </p>
            <p>
              Yas Island is home to four major theme parks: Ferrari World Yas Island, Warner Bros. World Yas Island, Yas Waterworld, and SeaWorld Yas Island. The destination also offers hotels, restaurants, shopping, beaches, live entertainment, and other experiences.
            </p>
            <p>
              CouponsBit helps you find available Yas Island promo codes, Yas Island discount codes, ticket deals, coupons, offers, and travel savings before you book.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Yas Island Promo Codes & Deals</h3>
            <p>
              Before purchasing your next Yas Island experience, check CouponsBit for the latest promotional offers. Depending on the promotion, Yas Island deals may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Yas Island promo codes</li>
              <li>Yas Island discount codes</li>
              <li>Yas Island ticket offers</li>
              <li>Theme park deals</li>
              <li>Family ticket offers</li>
              <li>Multi-park ticket promotions</li>
              <li>Hotel and attraction packages</li>
              <li>Annual pass offers</li>
              <li>Dining offers</li>
              <li>Seasonal promotions</li>
              <li>Special event offers</li>
              <li>Experience discounts</li>
              <li>Shopping and entertainment deals</li>
            </ul>
            <p>
              Promotions can have specific terms, dates, attraction restrictions, or eligibility requirements, so always check the conditions attached to an offer before booking.
            </p>
          </div>

          <div className={cn("text-gray-600 space-y-8 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  {/* Ferrari World Yas Island */}
  <div className="space-y-4">
    <h2 className="text-2xl font-black text-[#056bfa]">Ferrari World Yas Island</h2>
    <p>
      If speed, roller coasters, and Ferrari-inspired experiences are on your travel list, Ferrari World is one of the main attractions to explore.
    </p>
    <p>
      The park features more than 40 rides and attractions, combining high-speed thrills with family-friendly entertainment.
    </p>

    <h3 className="text-lg font-bold text-gray-900 mt-4">What to Experience at Ferrari World</h3>
    <p>Depending on the available attractions and operating schedules, visitors can explore:</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 my-4">
      {[
        "High-speed roller coasters", "Family rides", "Ferrari-inspired experiences",
        "Interactive attractions", "Racing-themed activities", "Shows and entertainment",
        "Children's attractions", "Ferrari-themed environments", "Dining venues", "Retail stores"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-semibold text-gray-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      Ferrari World can appeal to both serious thrill seekers and families looking for a variety of experiences in one indoor theme park.
    </p>

    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2 mt-4">
      <h4 className="font-bold text-[#056bfa]">Ferrari World Ticket Deals</h4>
      <p>
        Before booking, check for a Yas Island discount code or multi-attraction offer that may apply to Ferrari World.
      </p>
      <p>
        If your itinerary includes several Yas Island parks, compare individual admission with available multi-park options before purchasing.
      </p>
    </div>
  </div>

  {/* Warner Bros. World Yas Island */}
  <div className="space-y-4">
    <h2 className="text-2xl font-black text-[#056bfa]">Warner Bros. World Yas Island</h2>
    <p>
      Warner Bros. World Yas Island brings famous characters, stories, and fictional worlds into an immersive indoor theme park.
    </p>
    <p>
      The park features six themed lands with attractions, entertainment, and family experiences.
    </p>

    <h3 className="text-lg font-bold text-gray-900 mt-4">Warner Bros. World Experiences</h3>
    <p>
      Visitors can discover themed environments inspired by popular Warner Bros. characters and franchises.
    </p>
    <p>The park can be particularly appealing to families and fans of:</p>
    <div className="flex flex-wrap gap-2 my-4">
      {[
        "DC superheroes", "Looney Tunes", "Cartoon characters",
        "Family entertainment", "Interactive attractions", "Themed rides", "Live entertainment"
      ].map((item, idx) => (
        <span key={idx} className="bg-blue-50 text-[#056bfa] text-xs font-bold px-3 py-1.5 rounded-lg border border-blue-100">
          {item}
        </span>
      ))}
    </div>
    <p>
      Because Warner Bros. World is an indoor park, it can also be a convenient option when you want to spend the day enjoying rides and entertainment away from Abu Dhabi's outdoor heat.
    </p>
  </div>

  {/* Yas Waterworld */}
  <div className="space-y-4">
    <h2 className="text-2xl font-black text-[#056bfa]">Yas Waterworld</h2>
    <p>
      For travelers who would rather spend the day in the water, Yas Waterworld offers a collection of slides, rides, and aquatic experiences.
    </p>
    <p>
      The park is designed for visitors of different ages, with attractions ranging from high-energy water rides to experiences suitable for families and children.
    </p>

    <h3 className="text-lg font-bold text-gray-900 mt-4">Yas Waterworld Attractions</h3>
    <p>A visit can include:</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 my-4">
      {[
        "Water slides", "Family rides", "Children's water attractions",
        "Wave and water experiences", "Adventure activities", "Relaxation areas",
        "Food and beverage outlets", "Souvenir shopping"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-semibold text-gray-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      If you are visiting Abu Dhabi during warmer months, a water park can be a fun addition to your itinerary.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      Check CouponsBit before purchasing your Yas Waterworld tickets to see whether a Yas Island promo code or current ticket promotion is available.
    </p>
  </div>

  {/* SeaWorld Yas Island */}
  <div className="space-y-4">
    <h2 className="text-2xl font-black text-[#056bfa]">SeaWorld Yas Island</h2>
    <p>
      SeaWorld Yas Island offers a different type of theme park experience, focusing on marine life, immersive environments, attractions, and entertainment.
    </p>
    <p>
      The park takes visitors through eight themed realms, ranging from polar environments to tropical areas, while showcasing marine life and ocean-inspired experiences.
    </p>

    <h3 className="text-lg font-bold text-gray-900 mt-4">SeaWorld Yas Island Experiences</h3>
    <p>Depending on the current attractions and schedule, visitors can explore:</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 my-4">
      {[
        "Marine-life environments", "Interactive experiences", "Educational attractions",
        "Family activities", "Immersive themed areas", "Entertainment", "Dining", "Retail experiences"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-semibold text-gray-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      SeaWorld can be a good choice for families who want to combine entertainment with opportunities to learn about marine environments and wildlife.
    </p>
  </div>

  {/* Multi-Park & Annual Passes */}
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Yas Island Multi-Park Tickets</h3>
      <p>
        If you want to visit more than one attraction, look for multi-park ticket options before buying individual admissions.
      </p>
      <p>A multi-park approach can make sense for travelers planning to visit:</p>
      <div className="flex flex-wrap gap-2 my-2">
        {["Ferrari World", "Warner Bros. World", "Yas Waterworld", "SeaWorld"].map((park, idx) => (
          <span key={idx} className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-md border border-indigo-100">
            {park}
          </span>
        ))}
      </div>
      <p>
        Instead of automatically purchasing separate tickets, compare the available combination options for your travel dates.
      </p>
      <p>
        This is especially useful for families and visitors staying on Yas Island for several days.
      </p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Yas Island Annual Pass</h3>
      <p>Frequent visitors can also consider a Yas Annual Pass.</p>
      <p>
        Yas Island currently offers annual pass tiers that provide year-round access to its entertainment parks, subject to applicable blackout dates and terms. The official annual-pass information lists Silver, Gold, and Diamond options with different benefits.
      </p>
      <p>Depending on the pass, benefits can include:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
        {[
          "Unlimited theme park access", "Discounts at restaurants and cafés",
          "Retail discounts", "Discounts on tickets for family and friends",
          "Discounts on selected paid experiences", "Seasonal event access",
          "Parking benefits", "Selected hotel benefits", "Other island-wide privileges"
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-semibold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 italic">
        The exact benefits depend on the annual-pass tier and current terms.
      </p>
      <p>
        If you plan to visit Yas Island repeatedly throughout the year, compare an annual pass with individual tickets to determine which option makes more sense for your itinerary.
      </p>
    </div>
  </div>

  {/* Accommodations */}
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Yas Island Hotels</h3>
      <p>
        Yas Island is also home to several hotels, making it possible to stay close to the theme parks and other attractions.
      </p>
      <p>
        Staying on or near Yas Island can be useful if you want to spend multiple days exploring the destination.
      </p>
      <p>Hotel options can provide convenient access to:</p>
      <div className="flex flex-wrap gap-2 my-2">
        {[
          "Theme parks", "Yas Mall", "Yas Beach", "Restaurants",
          "Entertainment venues", "Yas Marina", "Other island attractions"
        ].map((item, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md">
            {item}
          </span>
        ))}
      </div>
      <p>
        When planning a complete holiday, compare standalone hotel bookings with available hotel-and-attraction packages.
      </p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Yas Island Hotel Packages</h3>
      <p>
        Travelers planning an extended stay can look for packages that combine accommodation with entertainment.
      </p>
      <p>Depending on the promotion, packages may include combinations such as:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
        {[
          "Hotel accommodation", "Theme park tickets", "Attraction access",
          "Dining benefits", "Resort amenities", "Family activities", "Seasonal experiences"
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-semibold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 italic">
        Package availability can change, so check the current terms before booking.
      </p>
      <p className="text-sm bg-amber-50 text-amber-800 p-3 rounded-xl border border-amber-200 font-medium">
        A Yas Island discount code may also apply only to specific products or promotional bookings, so read the offer conditions carefully.
      </p>
    </div>
  </div>

  {/* Dining & Shopping */}
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Yas Island Dining</h3>
      <p>
        Yas Island isn't only about theme parks. The destination also offers restaurants, cafés, and other food and beverage experiences.
      </p>
      <p>Depending on where you visit, you can find options for:</p>
      <div className="flex flex-wrap gap-2 my-2">
        {[
          "Casual dining", "Family meals", "Cafés", "International cuisine",
          "Fast-casual food", "Fine dining", "Waterfront dining",
          "Theme park restaurants", "Snacks and refreshments"
        ].map((item, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md">
            {item}
          </span>
        ))}
      </div>
      <p>
        Annual-pass holders may also receive selected restaurant and café benefits. The current official annual-pass information lists dining discounts that vary according to the pass tier.
      </p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Yas Island Shopping</h3>
      <p>Yas Island also gives visitors opportunities to shop between attractions.</p>
      <p>
        Yas Mall is one of the destination's major shopping locations, while the theme parks themselves offer branded merchandise and souvenirs.
      </p>
      <p>Shopping categories can include:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
        {[
          "Fashion", "Beauty", "Electronics", "Lifestyle products",
          "Children's products", "Theme park merchandise", "Gifts",
          "Souvenirs", "Food and specialty products"
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-semibold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <p>
        If you are visiting with children, theme park stores can also be a convenient place to find character merchandise and souvenirs from your favorite attractions.
      </p>
    </div>
  </div>

  {/* Beach & Entertainment */}
  <div className="space-y-6">
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Yas Beach</h3>
      <p>
        For travelers who want some downtime between theme park visits, Yas Beach provides an opportunity to enjoy a more relaxed side of the island.
      </p>
      <p>
        Annual passholders may receive special benefits at Yas Beach, with the current annual-pass program listing a beach discount as one of its island-wide perks.
      </p>
      <p>
        A beach day can also be combined with a theme park itinerary, giving you a balance between active attractions and relaxation.
      </p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Yas Island Entertainment & Experiences</h3>
      <p>
        Beyond the four major theme parks, Yas Island hosts other entertainment and paid experiences.
      </p>
      <p>Depending on current availability, visitors can explore experiences connected with:</p>
      <div className="flex flex-wrap gap-2 my-2">
        {[
          "Adventure activities", "Live entertainment", "Sports",
          "Family activities", "Seasonal events", "Dining experiences",
          "Shopping", "Waterfront activities"
        ].map((item, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md">
            {item}
          </span>
        ))}
      </div>
      <p>
        The island also offers attractions and entertainment designed for different age groups, making it suitable for couples, families, groups of friends, and solo travelers.
      </p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Yas Island Events</h3>
      <p>Yas Island regularly hosts entertainment and seasonal events.</p>
      <p>Events can include:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
        {[
          "Concerts", "Family entertainment", "Seasonal celebrations",
          "Sporting events", "Special theme park experiences",
          "Holiday activities", "Limited-time attractions"
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-semibold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <p>
        If your travel dates are flexible, checking the events calendar before booking can help you plan a trip around a particular experience.
      </p>
    </div>
  </div>

  {/* Audience Guides */}
  <div className="space-y-6">
    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
      <h3 className="text-xl font-bold text-gray-900">Yas Island for Families</h3>
      <p className="text-sm">
        Yas Island can be especially appealing to families because several attractions cater to different age groups.
      </p>
      <p className="text-sm font-semibold text-gray-800">A family itinerary could combine:</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm font-medium text-gray-700">
        <div className="bg-white p-2 rounded-lg border border-gray-200">Day 1: Ferrari World</div>
        <div className="bg-white p-2 rounded-lg border border-gray-200">Day 2: Warner Bros. World</div>
        <div className="bg-white p-2 rounded-lg border border-gray-200">Day 3: Yas Waterworld</div>
        <div className="bg-white p-2 rounded-lg border border-gray-200">Day 4: SeaWorld</div>
      </div>
      <p className="text-sm">
        You can also mix theme parks with shopping, dining, beach time, and hotel activities.
      </p>
      <p className="text-xs text-gray-500 italic">
        If you have younger children, compare attraction height requirements and age recommendations before purchasing tickets.
      </p>
    </div>

    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
      <h3 className="text-xl font-bold text-gray-900">Yas Island for Couples</h3>
      <p className="text-sm">Yas Island isn't limited to family vacations.</p>
      <p className="text-sm font-semibold text-gray-800">Couples can create an itinerary around:</p>
      <div className="flex flex-wrap gap-2">
        {[
          "Theme park experiences", "Fine dining", "Waterfront restaurants",
          "Beach time", "Shopping", "Entertainment", "Hotel stays", "Live events"
        ].map((item, idx) => (
          <span key={idx} className="bg-white text-gray-800 text-xs font-medium px-2.5 py-1 rounded border border-gray-200">
            {item}
          </span>
        ))}
      </div>
      <p className="text-sm">
        A weekend on Yas Island can combine adrenaline-filled attractions during the day with dining and entertainment in the evening.
      </p>
    </div>

    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
      <h3 className="text-xl font-bold text-gray-900">Yas Island for Thrill Seekers</h3>
      <p className="text-sm">Adventure lovers have plenty to consider.</p>
      <p className="text-sm">
        Ferrari World is particularly suited to travelers looking for high-speed experiences, while Yas Waterworld provides water-based thrills.
      </p>
      <p className="text-sm">
        You can also combine several attractions into a multi-day itinerary to experience different types of rides and entertainment.
      </p>
    </div>
  </div>

  {/* Truncation Gradient Overlay */}
  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>


          {/* How-To Steps Box */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Find a Yas Island Promo Code on CouponsBit</h3>
            <div className="space-y-6">
              {[
                { title: "Step 1: Visit CouponsBit", text: "Open the Yas Island page on CouponsBit to check the latest available offers." },
                { title: "Step 2: Browse Available Deals", text: "Look through the listed Yas Island coupons, ticket offers, discounts, and promotions. Pay attention to validity dates, eligible attractions, travel dates, blackout dates, and product restrictions." },
                { title: "Step 3: Copy the Promo Code", text: "If an applicable code is available, copy it before continuing to the Yas Island booking page." },
                { title: "Step 4: Choose Your Experience", text: "Select the attraction, ticket, package, hotel, or experience you want to purchase." },
                { title: "Step 5: Apply the Code", text: "Enter your Yas Island promo code in the applicable promotional-code field during checkout." },
                { title: "Step 6: Complete Your Booking", text: "Make sure the discount or promotional benefit has been applied correctly before completing the transaction." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 italic">
                    {i + 1}
                  </div>
                  <div className="mt-1">
                    <strong className="text-gray-900 font-black block">{step.title}</strong>
                    <p className="text-gray-700 font-bold leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Tips for Planning a Yas Island Trip</h3>
            <p>Making the most of your visit requires a bit of preparation. Keep these essential tips in mind:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Choose Your Parks in Advance:</strong> With four major theme parks, planning your preferred attractions beforehand can make your trip easier.</li>
              <li><strong>Allow Enough Time:</strong> Trying to experience every park in a single day can make your itinerary unnecessarily rushed. If you want to visit multiple attractions, consider staying for several days.</li>
              <li><strong>Check Park Schedules:</strong> Operating hours, attraction availability, and event schedules can change. Check the official information for your visit dates.</li>
              <li><strong>Compare Ticket Types:</strong> Look at individual tickets, multi-park options, and annual passes before deciding.</li>
              <li><strong>Check Age and Height Requirements:</strong> Some rides have specific requirements. Check these before planning your family's itinerary.</li>
              <li><strong>Keep Your Booking Details Handy:</strong> Save your tickets, confirmation details, and relevant booking information so you can access them easily during your trip.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Make Your Yas Island Trip More Rewarding</h3>
            <p>
              From Ferrari-powered thrills and superhero adventures to water slides, marine-life experiences, shopping, dining, beaches, and hotels, Yas Island gives travelers plenty of ways to build a complete Abu Dhabi getaway.
            </p>
            <p>
              Before booking your next experience, check CouponsBit for a Yas Island promo code, Yas Island discount code, coupon, ticket deal, or special offer. Compare the available options, review the terms, and choose the combination of attractions and experiences that best fits your itinerary.
            </p>
            <p>
              Whether you're visiting for a weekend or planning a longer Abu Dhabi holiday, checking for available promotions before checkout can help you get more value from your Yas Island experience.
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
          {isReadMore ? "Read Less" : "Read More"}{" "}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQs */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Yas Island Promo Codes</h3>
          {[
            { q: "What is a Yas Island promo code?", a: "A Yas Island promo code is a promotional code that may provide a discount or special offer on eligible Yas Island products, tickets, experiences, or bookings." },
            { q: "Where can I find a Yas Island discount code?", a: "You can check CouponsBit for available Yas Island discount codes, coupons, promo codes, ticket deals, and other offers before booking." },
            { q: "What attractions are available on Yas Island?", a: "Yas Island is home to Ferrari World Yas Island, Warner Bros. World Yas Island, Yas Waterworld, and SeaWorld Yas Island." },
            { q: "Can I visit more than one Yas Island theme park?", a: "Yes. Visitors can choose from individual attraction tickets and available combination or multi-park options, depending on the current ticket selection." },
            { q: "Does Yas Island have an annual pass?", a: "Yes. Yas Island currently offers annual pass options with year-round access benefits and additional privileges, subject to the applicable terms and blackout dates." },
            { q: "What are the benefits of a Yas Annual Pass?", a: "Benefits vary by tier but can include unlimited park access, restaurant discounts, retail discounts, family and friend ticket benefits, selected experience discounts, and other island-wide privileges." },
            { q: "Is Yas Island suitable for children?", a: "Yes. Yas Island offers several family-oriented attractions, including Warner Bros. World, Yas Waterworld, SeaWorld, and selected family-friendly experiences at Ferrari World." },
            { q: "Can I stay at a hotel on Yas Island?", a: "Yes. Yas Island has multiple hotels, allowing visitors to stay close to the parks, restaurants, shopping, and other attractions." },
            { q: "Can I use a Yas Island promo code on every attraction?", a: "Not necessarily. Promotional codes and offers can have restrictions regarding attractions, ticket types, travel dates, or booking conditions. Always check the terms before purchasing." },
            { q: "Does Yas Island offer dining discounts?", a: "Selected Yas Annual Pass tiers currently include discounts at participating restaurants and cafés. The exact benefits vary by pass tier and current terms." },
            { q: "Does Yas Island have a beach?", a: "Yes. Yas Beach is one of the island's leisure attractions, and selected annual-pass holders can receive beach-related benefits under the current program." }
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
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Area */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Yas Island Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Yas Island Promo Code", "Ferrari World Deals", "Warner Bros World", "Yas Waterworld", "SeaWorld Abu Dhabi", "Multi-Park Passes", "Yas Annual Pass", "Abu Dhabi Hotels"].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
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
