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
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1792761721/anatara-logo_b50jv5.webp"
                        alt="Anantara Discount Code"
                        width={800}
                        height={350}
                        className="w-full h-full object-contain bg-[#f8f8f8] p-6"
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
                    Born in Thailand, Anantara Hotels, Resorts & Spas is an internationally acclaimed luxury hospitality brand renowned for connecting modern travelers to authentic indigenous culture, pristine landscapes, and refined culinary artistry.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    From desert palaces in the Empty Quarter to tranquil overwater villas in the Maldives and grand European historical palaces, Anantara delivers personalized luxury, holistic wellness, and unforgettable destinations across Asia, the Indian Ocean, the Middle East, Africa, and Europe.
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
                    Why Book Anantara Directly?
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>Best Price Guarantee:</strong> Booking directly guarantees you the best available rate online, along with exclusive package inclusions.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>DISCOVERY Member Rewards:</strong> Earn DISCOVERY Dollars (D$) and redeem them for hotel experiences, dining, and spa treatments worldwide.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>Complimentary Inclusions:</strong> Many direct offers bundle daily breakfast, resort credits, airport transfers, and room upgrades.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>Personalized Hospitality:</strong> Direct communication with the resort allows seamless handling of special requests, dietary requirements, and celebration surprises.</span>
                      </p>
                    </div>
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
                  Anantara Discount Code, Resort Promo Codes & Luxury Stay Deals
                </h2>

                <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[850px]">
                    <thead>
                      <tr className="bg-[#056BFA]">
                        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
                        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Perk</th>
                        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#333333] font-bold text-[14px]">
                      {[
                        [
                          "Anantara Early Bird Offer",
                          "Up to 30% OFF",
                          "All Guests",
                          "Book 14-30 days in advance. Subject to property availability. T&C apply.",
                          "Rooms, Suites & Villas Worldwide"
                        ],
                        [
                          "Anantara DISCOVERY Member Rate",
                          "Extra 10% OFF",
                          "DISCOVERY Members",
                          "Free membership program. Includes D$ rewards and room upgrade eligibility.",
                          "Direct Bookings Worldwide"
                        ],
                        [
                          "Anantara Extended Stay Discount",
                          "Up to 35% OFF",
                          "All Guests",
                          "Requires minimum 5 consecutive nights. Additional dining & spa savings.",
                          "Participating Luxury Resorts"
                        ],
                        [
                          "Anantara Luxury Escapes",
                          "Free Breakfast + Credits",
                          "Direct Bookings",
                          "Includes daily buffet breakfast for 2 and dedicated resort dining/spa credit.",
                          "Eligible Vacation Packages"
                        ],
                        [
                          "Anantara Maldives Island Offer",
                          "Up to 25% OFF",
                          "All Guests",
                          "Special rates on overwater pool villas & transfers. Advance booking required.",
                          "Maldives Overwater & Beach Villas"
                        ],
                        [
                          "Anantara City Weekend Breaks",
                          "Up to 20% OFF",
                          "All Guests",
                          "Valid on Friday to Sunday stays in European & Asian capital destinations.",
                          "City Center Hotels & Suites"
                        ],
                        [
                          "Anantara Spa & Wellness Deal",
                          "15% OFF Treatments",
                          "Hotel Guests",
                          "Discount applied to signature spa, Ayurvedic, and holistic therapy bookings.",
                          "Anantara Spa Facilities"
                        ],
                        [
                          "Anantara Family Vacation Special",
                          "Kids Stay & Dine Free",
                          "Families with Kids",
                          "Children under 12 stay free and eat from children's menu when with adults.",
                          "Family Suites & Multi-Bedroom Villas"
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
                    Whether you are planning a bucket-list honeymoon in the Maldives, an exotic cultural journey through northern Thailand, a desert adventure in Abu Dhabi, or a romantic European getaway in Rome or Amalfi, Anantara Hotels & Resorts represents the gold standard of luxury hospitality. Before reserving your luxury retreat, checking CouponsBit for an active Anantara discount code or promo code ensures you enjoy premier 5-star comfort at the best possible direct value.
                  </p>
                  <p>
                    With over 40 luxury hotels and resorts positioned in dramatic coastal, wildlife, desert, and metropolitan locations across Southeast Asia, the Middle East, the Indian Ocean, Africa, and Europe, Anantara crafts deeply rooted authentic experiences tailored to discerning world travelers.
                  </p>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">
                    Find Verified Anantara Discount Codes on CouponsBit
                  </h3>
                  <p>
                    Before confirming your reservation, visit CouponsBit to explore the latest Anantara promo codes, early bird booking bonuses, and member deals. Promotional discounts vary by property location, travel season, room category, and minimum length of stay.
                  </p>
                  <p>
                    When selecting your luxury holiday package, take note of complimentary inclusions like gourmet champagne breakfasts, airport limousine or speedboat transfers, and dining credits that significantly enhance the overall value of your vacation.
                  </p>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">
                    Maximise Savings with Anantara DISCOVERY
                  </h3>
                  <p>
                    Anantara is part of the Global Hotel Alliance (GHA). By joining the Anantara DISCOVERY loyalty program for free, members instantly receive guaranteed member rates offering up to an additional 10% discount on direct bookings. Furthermore, members earn DISCOVERY Dollars (D$) starting at 4% back on all eligible spend, which can be applied directly towards room charges, spa sessions, fine dining, and local experiences.
                  </p>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">
                    How to Use Your Anantara Promo Code
                  </h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Find and copy the latest Anantara promo code or deal link on CouponsBit.</li>
                    <li>Click through to the official Anantara website.</li>
                    <li>Select your destination, arrival and departure dates, and number of guests.</li>
                    <li>Paste your coupon code into the Promo Code / Corporate Code field on the booking engine.</li>
                    <li>Click &apos;Check Availability&apos; to view the discounted rates applied directly to your selected villa or room.</li>
                  </ol>

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
                    FAQs About Anantara Discount Codes
                  </h3>
                  {[
                    {
                      q: "How do I use an Anantara discount code?",
                      a: "Choose an offer from CouponsBit, copy the promo code if applicable, and head to the official Anantara website. Enter your destination, travel dates, and paste your code into the promo code box before searching."
                    },
                    {
                      q: "Does Anantara offer DISCOVERY loyalty member discounts?",
                      a: "Yes, Anantara DISCOVERY members get exclusive rates with up to an additional 10% off, plus DISCOVERY Dollars (D$) to spend at hotels and resorts."
                    },
                    {
                      q: "Can I get free breakfast or resort credit with Anantara deals?",
                      a: "Many direct booking promotional packages include complimentary daily buffet breakfast, dining credits, and spa vouchers depending on the resort and package selected."
                    },
                    {
                      q: "Can I cancel or modify my Anantara booking?",
                      a: "Cancellation terms depend on the selected rate. Flexible rate options allow free cancellation up to a few days prior to check-in, whereas prepaid advance booking offers may carry stricter terms."
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
                <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                    Popular Anantara Searches
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Anantara Discount Code",
                      "Overwater Villa Deals",
                      "Maldives Resort Promo",
                      "Anantara DISCOVERY",
                      "Early Bird Booking",
                      "Luxury Beach Resort",
                      "Spa & Wellness Credit",
                      "Kids Stay Free"
                    ].map((tag) => (
                      <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                    Today's Top Anantara Deals
                  </h3>
                  <div className="space-y-6">
                    {DEALS.map((deal, i) => (
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
