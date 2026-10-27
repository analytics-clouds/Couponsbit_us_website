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
  Hotel,
  Palmtree,
  Coffee,
  Sparkles,
  MapPin,
  Shield,
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
  { id: "d1", label: "EARLY", heading: "Advance Purchase Deal", sub: "Save up to 30% on luxury stays" },
  { id: "d2", label: "MEMBER", heading: "Anantara DISCOVERY Rates", sub: "Extra 10% off member rates" },
  { id: "d3", label: "STAY", heading: "Extended Stay Package", sub: "Up to 35% off 5+ nights" },
  { id: "d4", label: "PERK", heading: "Complimentary Daily Breakfast", sub: "Select villa & suite packages" },
  { id: "d5", label: "SPA", heading: "Signature Spa & Dining Credits", sub: "Exclusive resort inclusions" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Zen Hotels", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/zen-hotels-coupon-code_fbtoik.webp", dealText: "$35 OFF Bookings", href: "/stores/zen-hotels-discount-code" },
  { name: "Agoda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg", dealText: "Up to 69% OFF", href: "/stores/agoda-discount-code" },
  { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", dealText: "Up to 40% OFF", href: "/stores/expedia-discount-code" },
  { name: "ITC Hotels", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/itc-hotels-logo_ceakgl.webp", dealText: "Up To 50% OFF", href: "/stores/itc-hotels-discount-code" },
  { name: "Booking", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/booking-logo_dtnn30.webp", dealText: "Up To 40% OFF", href: "/stores/booking-promo-code" },
  { name: "Radisson", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/radission-logo_gxjubt.webp", dealText: "Up To 40% OFF", href: "/stores/radisson-discount-code" },
];

const STORE_URL = "https://anantara-hotels-and-resorts.pxf.io/c/3121737/1041167/13536?subId1=%7Bpublisher_id%7D&subId2=137&force_deeplink=1&u=https%3A%2F%2Fwww.anantara.com%2F%3Fgclid%3D%7Bgclid%7D";

export default function AnantaraCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDetails = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

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
              <span className="text-black font-extrabold">Anantara</span>
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
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden p-2">
                      <Image
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1792761721/anatara-logo_b50jv5.webp"
                        alt="Anantara Hotels Resorts Spas"
                        width={112}
                        height={112}
                        sizes="112px"
                        className="w-full h-full object-contain"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Anantara Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <span className="text-black font-black text-sm">4.9</span>
                      <span className="text-gray-600 font-bold text-sm">(5.4k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest Anantara Discount Code and Anantara Promo Code on luxury hotels, beachfront resorts, and exclusive vacation packages. Enjoy up to 35% OFF selected stays, 25% OFF qualifying resort bookings, and special rates from $170 per night at premium destinations including the Maldives, Thailand, Oman, Vietnam, and Italy. Discover verified Anantara offers, early booking deals, and limited-time promotions to make your next luxury getaway more affordable while enjoying world-class hospitality.
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
                    { icon: Percent, val: "35%+", label: "Max OFF" },
                    { icon: Users, val: "850k+", label: "Guests" },
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
                      <img
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1793089137/71_irqgdm.webp"
                        alt="Anantara Discount Code"
                        width={800}
                        height={350}
                        className="w-full h-full bg-[#f8f8f8]"
                        fetchPriority="high"
                      />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Anantara Discount Codes & Offers</h2>
                </div>

                {[
                  {
                    label: "JOIN",
                    value: "GIVEAWAY",
                    title: "Anantara Discount Code – Join the D$50,000 Rewards Giveaway",
                    desc: "Sign up for Minor DISCOVERY to become eligible for an exclusive prize draw featuring cash rewards and premium membership benefits.",
                    bullets: [
                      "Register for the D$50,000 promotional giveaway.",
                      "One winner can receive D$5,000 or lifetime Titanium status.",
                      "Joining Minor DISCOVERY is required to participate.",
                      "Entries are accepted for a limited promotional period."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "$563",
                    title: "Anantara Discount Code – Dhigu Maldives Stays from $563",
                    desc: "Plan more days in the Maldives and unlock better room pricing at Anantara Dhigu from $563 per night.",
                    bullets: [
                      "Nightly rates begin at $563.",
                      "Extra nights can qualify for better accommodation pricing.",
                      "Choose from beachfront villas and island-style accommodations.",
                      "Available on eligible reservations."
                    ]
                  },
                  {
                    label: "UP TO",
                    value: "25%",
                    title: "Anantara Promo Code – Riverside Bangkok Hotel Savings",
                    desc: "Reserve multiple nights at Anantara Riverside Bangkok and receive discounted pricing on qualifying bookings.",
                    bullets: [
                      "Get up to 25% off on select hotel stays.",
                      "Book rooms starting at just $172 per night.",
                      "Enjoy riverside accommodations with premium facilities.",
                      "Available on selected booking dates."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "$367",
                    title: "Anantara Promo Code – Desaru Coast Resort from $367",
                    desc: "Spend more time at Anantara Desaru Coast and receive reduced rates on longer vacations.",
                    bullets: [
                      "Accommodation starts from $367 per night.",
                      "Eligible reservations can receive up to 20% savings.",
                      "Experience luxury beachfront accommodations in Malaysia.",
                      "Promotion applies to qualifying stays."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "$1,342",
                    title: "Golden Triangle Explorer Package – From $1,342",
                    desc: "Explore Northern Thailand with a premium travel package that includes accommodations, dining, and daily experiences.",
                    bullets: [
                      "Vacation packages begin at $1,342.",
                      "Includes meals, airport transportation, and selected activities.",
                      "Visit one of Thailand's most famous destinations.",
                      "Package inclusions vary by reservation."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "$311",
                    title: "Chiang Mai Flexible Stay – From $311",
                    desc: "Reserve your stay with added flexibility and adjust your travel plans when needed.",
                    bullets: [
                      "Rates begin at $311 per night.",
                      "Eligible bookings allow date modifications.",
                      "Enjoy luxury accommodations in Chiang Mai.",
                      "Flexible booking conditions apply."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "$4,801",
                    title: "Layan Residences Phuket – Luxury Stay from $4,801",
                    desc: "Experience spacious private residences overlooking the Andaman Sea with premium hospitality services.",
                    bullets: [
                      "Residences are available from $4,801.",
                      "Enjoy a private butler along with spacious and well-appointed living spaces.",
                      "Wake up to panoramic ocean views.",
                      "Flexible booking options are available on eligible reservations."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "$377",
                    title: "Al Jabal Al Akhdar Mountain Stay – From $377",
                    desc: "Discover Oman's mountain landscapes while receiving reduced pricing on longer hotel stays.",
                    bullets: [
                      "Stay from as low as $377 per night.",
                      "Save up to 20% on qualifying reservations.",
                      "Enjoy luxury accommodations surrounded by mountain scenery.",
                      "Offer applies to eligible booking dates."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "$351",
                    title: "Al Baleed Salalah Resort – From $351",
                    desc: "Choose a longer beach vacation at Al Baleed by Anantara and enjoy lower rates on qualifying stays.",
                    bullets: [
                      "Prices start from $351 per night.",
                      "Eligible reservations can receive up to 25% savings.",
                      "Minimum stay requirements may apply.",
                      "Located on the beautiful coastline of Oman."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "$834",
                    title: "Bazaruto Island Luxury Escape – From $834",
                    desc: "Book an island vacation featuring premium accommodations, dining, and resort experiences from $834.",
                    bullets: [
                      "Rates begin at $834 per night.",
                      "Dining and selected resort activities are included.",
                      "Stay on the beautiful Bazaruto Island in Mozambique.",
                      "Available for qualifying reservations."
                    ]
                  },
                  {
                    label: "SAVE",
                    value: "15%",
                    title: "Villa Padierna Palace Early Booking – Save Up to 15%",
                    desc: "Reserve your room ahead of time to receive lower rates and breakfast for two.",
                    bullets: [
                      "Receive up to 15% off eligible advance reservations.",
                      "Accommodation starts from $436 per night.",
                      "Daily breakfast for two is included with qualifying bookings.",
                      "Early reservation is required for this offer."
                    ]
                  },
                  {
                    label: "SAVE",
                    value: "35%",
                    title: "Mui Ne Resort Stay – Save Up to 35%",
                    desc: "Book additional nights at Anantara Mui Ne and receive larger savings on your vacation.",
                    bullets: [
                      "Enjoy savings of up to 35% on selected stays.",
                      "Room prices begin at $170 per night.",
                      "Enjoy beachfront accommodations in Vietnam.",
                      "Discount depends on reservation length."
                    ]
                  },
                  {
                    label: "SAVE",
                    value: "15%",
                    title: "Palazzo Naiadi Rome Early Booking – Save Up to 15%",
                    desc: "Plan your Rome vacation in advance to receive discounted room rates and complimentary breakfast.",
                    bullets: [
                      "Save up to 15% on eligible advance bookings.",
                      "Nightly rates start from $505.",
                      "Selected reservations include breakfast for two.",
                      "Available for qualifying advance purchases."
                    ]
                  },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[110px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-[12px] font-bold leading-tight">{c.label}</p>
                            <div className="text-[18px] sm:text-3xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <button
                              type="button"
                              onClick={() => toggleDetails(i)}
                              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
                            >
                              View Details
                              <ChevronDown size={16} className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {c.bullets.map((b, bi) => (
                                  <li key={bi} className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>{b}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                            <a
                              href={STORE_URL}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label={`Shop Anantara: ${c.title}`}
                              className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
                            >
                              Get Deal
                            </a>
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
                  <h3 className="text-black font-black text-lg mb-6">About Anantara Hotels & Resorts</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Anantara Hotels & Resorts is a luxury hospitality brand that began in Thailand in 2001. Its portfolio includes hotels and resorts across Asia, the Indian Ocean, the Middle East, Africa, and Europe. The brand focuses on distinctive stays that connect guests with local culture, natural surroundings, and personalised experiences.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Anantara properties cater to different travel styles, from relaxing beach holidays and island escapes to city breaks and countryside retreats. Depending on the destination, guests can explore accommodation with scenic views, wellness experiences, destination-inspired dining, and activities that help them discover the local area.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Whether you're planning a romantic holiday, a family vacation, a wellness retreat, or a special celebration, Anantara offers a range of properties to consider.

                  </p>
                  
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Palmtree, name: "Beach Resorts & Villas", count: "30+", color: "text-blue-500", href: "/categories/travel" },
                        { icon: Hotel, name: "Luxury City Hotels", count: "25+", color: "text-purple-500", href: "/categories/hotels" },
                        { icon: Sparkles, name: "Spa & Wellness Escapes", count: "18+", color: "text-pink-500", href: "/categories/travel" },
                        { icon: Coffee, name: "Dining & Gourmet Packages", count: "15+", color: "text-teal-500", href: "/categories/travel" },
                        { icon: Search, name: "Early Bird Offers", count: "12+", color: "text-orange-500", href: "/categories/travel" },
                      ].map((cat, i) => (
                        <Link key={i} href={cat.href} className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <cat.icon className={cn("w-4.5 h-4.5", cat.color)} />
                            <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">{cat.name}</span>
                          </div>
                          <span className="bg-[#e8f6f8] text-[#0451c4] px-2.5 py-0.5 rounded-full text-[12px] font-black">{cat.count}</span>
                        </Link>
                      ))}
                   </div>
                   <Link href="/categories" className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline">View All Categories →</Link>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    Find an Anantara Promo Code on CouponsClouds
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Looking for an Anantara promo code before booking? CouponsClouds helps you explore available promotional codes and hotel offers so you can compare your options before making a reservation.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Anantara regularly features special booking offers on its official website. Depending on the property and travel dates, these may include longer-stay savings, advance-purchase offers, flexible booking rates, and packages with additional benefits.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Here are a few ways to look for potential savings:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Check available promo codes:</strong> Browse CouponsClouds for Anantara promotional offers before booking.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Explore longer-stay offers:</strong> Some participating hotels provide better value when you extend your stay.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Book in advance:</strong> Selected properties may offer special rates for reservations made ahead of arrival.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Compare package deals:</strong> Look for offers that include benefits such as breakfast, dining, spa experiences, or airport transfers where specified.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Review member benefits:</strong> Anantara participates in the Minor DISCOVERY loyalty programme, which offers benefits and recognition to eligible members.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Offers vary by hotel, destination, booking period, and length of stay. Check the terms of each promotion to understand its eligibility requirements and included benefits.
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
          Anantara Promo Code: Save on Luxury Hotels & Resorts
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        [
          "Anantara Minor DISCOVERY Giveaway",
          "D$50,000 Giveaway",
          "Minor DISCOVERY Members",
          "Register for limited-time prize draw. One winner receives D$5,000 or lifetime Titanium status.",
          "Minor DISCOVERY Membership"
        ],
        [
          "Anantara Dhigu Maldives Stays",
          "From $563 / Night",
          "All Users",
          "Extra nights qualify for better pricing on beachfront and island-style villas.",
          "Anantara Dhigu Maldives"
        ],
        [
          "Anantara Riverside Bangkok Offer",
          "Up to 25% OFF (From $172)",
          "All Users",
          "Reserve multiple nights for discounted pricing on selected booking dates.",
          "Anantara Riverside Bangkok"
        ],
        [
          "Anantara Desaru Coast Resort Offer",
          "Up to 20% OFF (From $367)",
          "All Users",
          "Reduced rates on longer luxury beachfront resort vacations in Malaysia.",
          "Anantara Desaru Coast Resort"
        ],
        [
          "Golden Triangle Explorer Package",
          "From $1,342",
          "All Users",
          "Includes accommodations, meals, airport transfers, and daily activities in Northern Thailand.",
          "Golden Triangle Package"
        ],
        [
          "Anantara Chiang Mai Flexible Stay",
          "From $311 / Night",
          "All Users",
          "Flexible booking terms allow date modifications on eligible reservations.",
          "Anantara Chiang Mai Resort"
        ],
        [
          "Layan Residences Phuket Luxury Stay",
          "From $4,801 / Night",
          "All Users",
          "Includes private butler service and spacious ocean-view residences.",
          "Layan Residences Phuket"
        ],
        [
          "Anantara Al Jabal Al Akhdar Stay",
          "Up to 20% OFF (From $377)",
          "All Users",
          "Reduced rates on longer mountain resort stays on eligible booking dates.",
          "Anantara Al Jabal Al Akhdar (Oman)"
        ],
        [
          "Al Baleed Salalah Resort Offer",
          "Up to 25% OFF (From $351)",
          "All Users",
          "Lower rates on longer beach stays; minimum stay requirements may apply.",
          "Al Baleed Resort Salalah by Anantara"
        ],
        [
          "Bazaruto Island Luxury Escape",
          "From $834 / Night",
          "All Users",
          "Includes dining and selected resort activities on Bazaruto Island, Mozambique.",
          "Anantara Bazaruto Island Resort"
        ],
        [
          "Anantara Villa Padierna Palace Early Booking",
          "Up to 15% OFF (From $436)",
          "All Users",
          "Advance reservation required; includes daily breakfast for two.",
          "Anantara Villa Padierna Palace"
        ],
        [
          "Anantara Mui Ne Resort Stay",
          "Up to 35% OFF (From $170)",
          "All Users",
          "Discount scale depends on stay length for beachfront resort in Vietnam.",
          "Anantara Mui Ne Resort"
        ],
        [
          "Anantara Palazzo Naiadi Rome Early Booking",
          "Up to 15% OFF (From $505)",
          "All Users",
          "Book in advance to receive lower nightly rates and breakfast for two.",
          "Anantara Palazzo Naiadi Rome"
        ]
      ].map((row, i, arr) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === arr.length - 1 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Planning a luxury getaway? An Anantara promo code can help you look for savings on a memorable stay, whether you dream of relaxing at a beachfront resort, exploring a vibrant city, or escaping to a private island. Before booking your next trip, visit CouponsClouds to check available Anantara promo codes, hotel deals, and special offers.
          </p>
          <p>
            From tropical retreats and desert hideaways to elegant city hotels, Anantara combines luxury hospitality with experiences inspired by each destination. Compare available booking offers, explore the benefits of booking directly, and check the terms before confirming your reservation.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Explore Anantara Hotels and Resorts
          </h3>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Beachfront and Island Escapes
          </h4>
          <p>
            If your ideal holiday involves ocean views and relaxing surroundings, explore Anantara's beach and island properties. Destinations such as the Maldives and Thailand offer opportunities to enjoy coastal scenery, resort facilities, and destination-based experiences.
          </p>
          <p>
            Depending on the property, accommodation options may include private villas, beachfront rooms, or overwater stays. Check individual hotel details to understand the facilities and experiences available.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Luxury City Hotels
          </h4>
          <p>
            For travellers who prefer city experiences, Anantara also operates hotels in destinations such as Bangkok, Rome, Amsterdam, and Dubai. These properties provide a base for exploring local attractions, shopping districts, dining, and cultural landmarks.
          </p>
          <p>
            Compare hotel locations and available amenities to find accommodation that fits your itinerary.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Desert and Nature Retreats
          </h4>
          <p>
            Travellers looking for something different can explore Anantara's desert resorts and countryside retreats. For example, Qasr Al Sarab Desert Resort by Anantara in the United Arab Emirates offers a desert setting, while other properties focus on nature, heritage, or local culture.
          </p>
          <p>
            These destinations can suit travellers seeking a slower-paced holiday or experiences beyond a traditional city break.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Wellness, Dining and Local Experiences
          </h4>
          <p>
            Anantara stays can include more than accommodation. Depending on the property, guests may find spa treatments, wellness activities, destination-inspired dining, cultural excursions, and guided experiences. Check each hotel's offer details to see which benefits are included in a package and which require an additional booking.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use an Anantara Promo Code
          </h3>
          <p>
            Follow these steps to use an eligible Anantara promo code:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit the Anantara website or open the relevant hotel booking page.</li>
            <li>Choose your destination, property, check-in and check-out dates, and number of guests.</li>
            <li>Review the available room rates and special offers.</li>
            <li>If you have a valid promo code, enter it in the designated booking field, where available.</li>
            <li>Check the updated rate and review the booking conditions.</li>
            <li>Confirm the final amount, cancellation policy, and any additional charges before completing your reservation.</li>
          </ol>
          <p>
            Not every Anantara offer requires a promo code. Some savings are available through special booking rates or packages that you select directly on the website. Always read the terms to confirm whether your dates and chosen room qualify.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Tips to Get More Value From Anantara Deals
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Compare different travel dates:</strong> If your plans are flexible, check whether alternative dates offer better rates.</li>
            <li><strong>Consider a longer stay:</strong> Look for participating properties that offer savings for extended visits.</li>
            <li><strong>Review advance-purchase deals:</strong> Booking early may unlock special rates, although some offers have stricter cancellation conditions.</li>
            <li><strong>Compare package inclusions:</strong> Breakfast, transfers, dining, or spa benefits may add value when included in an eligible offer.</li>
            <li><strong>Check loyalty benefits:</strong> Review Minor DISCOVERY membership benefits before making a direct booking.</li>
            <li><strong>Read cancellation terms:</strong> Make sure the reservation suits your travel plans, especially when choosing a non-refundable rate.</li>
          </ul>
          <p>
            Comparing the total booking cost and included benefits can help you select an offer that fits your budget and travel preferences.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Plan Your Next Luxury Getaway with CouponsClouds
          </h3>
          <p>
            Whether you're planning an island holiday, a city escape, or a relaxing resort stay, Anantara offers destinations and experiences for a range of travel preferences. Before confirming your booking, visit CouponsClouds to explore available Anantara promo codes, hotel deals, and special offers.
          </p>
          <p>
            Compare rates, review the included benefits, and check the booking conditions to make a more informed choice for your next getaway.
          </p>

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
            Frequently Asked Questions
          </h3>
          {[
            {
              q: "Where can I find an Anantara promo code?",
              a: "Visit CouponsClouds to check available Anantara promo codes and booking deals. You can also explore the official Anantara offers page for property-specific promotions."
            },
            {
              q: "Does Anantara offer discounts on hotel bookings?",
              a: "Anantara features promotional offers that may include longer-stay savings, advance-purchase rates, and special packages. Availability and benefits depend on the hotel and booking conditions."
            },
            {
              q: "Can I save by booking directly with Anantara?",
              a: "Anantara promotes direct-booking benefits, including a best-rate guarantee subject to its terms. Review the official website for the applicable conditions and benefits before making a reservation."
            },
            {
              q: "What is Minor DISCOVERY?",
              a: "Minor DISCOVERY is the loyalty programme associated with Minor Hotels, the hotel group behind Anantara. Members can access eligible programme benefits and recognition when staying at participating properties."
            },
            {
              q: "Do all Anantara hotels accept the same promo code?",
              a: "No. Promotional terms can vary by property, destination, room type, and booking dates. Check the conditions of your specific offer before confirming your reservation."
            }
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
            Popular Anantara Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Anantara Promo Code",
              "Luxury Hotel Deals",
              "Resort Discounts",
              "Maldives Overwater Villas",
              "City Break Offers",
              "Desert Retreat Sale",
              "Spa & Wellness Packages",
              "Minor DISCOVERY Rates"
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
            Today's Top Anantara Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "DIRECT BOOKING OFFER",
                sub: "Best rate guarantee and exclusive stay perks",
              },
              {
                heading: "BEACH & ISLAND ESCAPES",
                sub: "Save on luxury villa and overwater stays",
              },
              {
                heading: "MINOR DISCOVERY",
                sub: "Member exclusive rates and loyalty benefits",
              },
              {
                heading: "ADVANCE PURCHASE",
                sub: "Book early for special promotional rates",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  A
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
                  aria-label={`Shop Anantara: ${deal.heading}`}
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
