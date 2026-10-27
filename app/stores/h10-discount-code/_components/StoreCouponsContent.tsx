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
  Compass,
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
  { id: "d1", label: "CLUB", heading: "Club H10 Instant 5% OFF", sub: "Member rates + points on every stay" },
  { id: "d2", label: "EARLY", heading: "Early Booking Discount", sub: "Up to 25% off advance bookings" },
  { id: "d3", label: "BEACH", heading: "Canary Islands Escapes", sub: "Save up to 30% on island stays" },
  { id: "d4", label: "RESORT", heading: "Ocean by H10 All-Inclusive", sub: "Caribbean resorts from $185/night" },
  { id: "d5", label: "CITY", heading: "Boutique European City Breaks", sub: "Up to 20% off Barcelona & Rome" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Zen Hotels", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/zen-hotels-coupon-code_fbtoik.webp", dealText: "$35 OFF Bookings", href: "/stores/zen-hotels-discount-code" },
  { name: "Agoda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg", dealText: "Up to 69% OFF", href: "/stores/agoda-discount-code" },
  { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", dealText: "Up to 40% OFF", href: "/stores/expedia-discount-code" },
  { name: "ITC Hotels", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/itc-hotels-logo_ceakgl.webp", dealText: "Up To 50% OFF", href: "/stores/itc-hotels-discount-code" },
  { name: "Radisson", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/radission-logo_gxjubt.webp", dealText: "Up To 40% OFF", href: "/stores/radisson-discount-code" },
  { name: "vegas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/vegas-logo_sifnax.webp", dealText: "Up To 35% OFF", href: "/stores/vegas-discount-code" },
];

const STORE_URL = "https://h10hotels.pxf.io/c/3121737/1055035/13563/?subId1=%7Bpublisher_id%7D&subId2=137&force_deeplink=1&u=https%3A%2F%2Fwww.h10hotels.com%2F%3Fgclid%3D%7Bgclid%7D";

export default function H10CouponsContent() {
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
              <span className="text-black font-extrabold">H10 Hotels</span>
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
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1792761664/h10-logo_fjdthe.webp"
                        alt="H10 Hotels"
                        width={112}
                        height={112}
                        sizes="112px"
                        className="w-full h-full object-contain"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">H10 Hotels Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <span className="text-black font-black text-sm">4.8</span>
                      <span className="text-gray-600 font-bold text-sm">(6.2k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest H10 Hotels Discount Code and H10 Hotels Promo Code on your next holiday. Enjoy up to 35% OFF flight + hotel packages and 20% OFF selected autumn stays. You can also book all-inclusive resorts, beachfront hotels, and adults-only escapes from €140 per night or vacation packages from ₹63,886. Explore destinations including the Canary Islands, Riviera Maya, Mallorca, and the Caribbean while enjoying verified H10 Hotels offers this October 2026.
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
                    { icon: Percent, val: "30%+", label: "Max OFF" },
                    { icon: Users, val: "700k+", label: "Guests" },
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
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1793089136/70_zxt5ym.webp"
                        alt="H10 Hotels Discount Code"
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
                  <h2 className="text-2xl font-black text-black leading-tight">H10 Hotels Promo Codes & Offers</h2>
                </div>

                {[
                  {
                    label: "SAVE",
                    value: "35%",
                    title: "H10 Hotels Discount Code – Save Up to 35% on Flight + Hotel Packages",
                    desc: "Book your next vacation with H10 Hotels and save up to 35% on select flight and hotel packages across top beach destinations.",
                    bullets: [
                      "Save up to 35% on selected H10 Hotels flight and hotel packages.",
                      "Enjoy up to 25% off hotel stays at participating destinations.",
                      "Explore Mallorca, the Canary Islands, the Caribbean, and more.",
                      "Bundle your flights and hotel to unlock better vacation savings."
                    ]
                  },
                  {
                    label: "CODE",
                    value: "H10ESCAPE",
                    title: "H10 Hotels Discount Code – Save Up to 20% on Autumn Escapes",
                    desc: "Enjoy up to 20% off eligible H10 Hotels stays this season with the exclusive H10ESCAPE discount code.",
                    bullets: [
                      "Save up to 20% on selected autumn hotel stays.",
                      "Apply promo code H10ESCAPE during checkout.",
                      "Discover relaxing destinations perfect for a seasonal getaway.",
                      "Book before the promotion ends to secure your savings."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "₹63,886",
                    title: "H10 Hotels Promo Code – Riviera Maya Flight + Hotel Package from ₹63,886",
                    desc: "Escape to Riviera Maya with an H10 Hotels vacation package that combines flights and hotel accommodations at a special price.",
                    bullets: [
                      "Book a 4-day, 3-night Riviera Maya package from ₹63,886.",
                      "Includes both flights and hotel accommodations.",
                      "Relax on Caribbean beaches while enjoying resort-style amenities.",
                      "Check travel dates and package availability before booking."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "€149",
                    title: "H10 Hotels Promo Code – Taburiente Playa Stay from €149 Per Night",
                    desc: "Stay steps from the beach at H10 Taburiente Playa with rooms starting from just €149 per night.",
                    bullets: [
                      "Book your stay from €149 per night.",
                      "Enjoy an all-inclusive seafront hotel experience.",
                      "Access swimming pools, restaurants, bars, and family-friendly facilities.",
                      "Perfect for beach vacations in La Palma."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "$250",
                    title: "H10 Hotels Voucher Code – Ocean Riviera Paradise from $250 Per Night",
                    desc: "Enjoy an all-inclusive family getaway at Ocean Riviera Paradise with rates starting from $250 per night.",
                    bullets: [
                      "Stay from just $250 per night at this beachfront resort.",
                      "Enjoy pools, water park, restaurants, spa, and entertainment.",
                      "Great for families looking for an all-inclusive vacation.",
                      "Free transfers are available with eligible bookings."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "€140",
                    title: "H10 Hotels Voucher Code – Blue Mar Adults-Only Stay from €140 Per Night",
                    desc: "Relax by the Mediterranean with an adults-only stay at H10 Blue Mar from just €140 per night.",
                    bullets: [
                      "Book adults-only accommodations from €140 per night.",
                      "Stay near the beach with beautiful sea views.",
                      "Unwind by the outdoor pool or enjoy the chill-out terrace.",
                      "Perfect for couples seeking a peaceful getaway."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "€230",
                    title: "H10 Hotels Offers – Costa Mogán Adults-Only Resort from €230 Per Night",
                    desc: "Enjoy a relaxing all-inclusive stay at H10 Costa Mogán with rooms starting from €230 per night.",
                    bullets: [
                      "Stay from €230 per night at this adults-only beachfront resort.",
                      "Enjoy complimentary dining options along with access to premium hotel amenities.",
                      "Relax by outdoor pools, sea-view terraces, and the fitness center.",
                      "Great for a peaceful Canary Islands vacation."
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
                              aria-label={`Shop H10 Hotels: ${c.title}`}
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
                  <h3 className="text-black font-black text-lg mb-6">What Is H10 Hotels?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    H10 Hotels is a hospitality group offering hotels and resorts in popular destinations across Spain, Europe, and the Caribbean. Its portfolio includes city hotels, beachfront properties, boutique accommodation, family-friendly resorts, and luxury stays. The group also operates distinct hotel collections, including Ocean Signature Resorts, The One, and H10 Horizons Collection.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Whether you want to explore Barcelona's architecture, enjoy the beaches of Tenerife, discover Rome's historic attractions, or relax at a Caribbean resort, H10 Hotels offers properties suited to different travel preferences.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Depending on the hotel, guests can find amenities such as swimming pools, restaurants, spa facilities, family entertainment, rooftop terraces, and all-inclusive packages. Individual properties offer different facilities, so check the hotel details before booking.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Palmtree, name: "Canary & Balearic Resorts", count: "35+", color: "text-blue-500", href: "/categories/travel" },
                        { icon: Hotel, name: "European City Center Hotels", count: "25+", color: "text-purple-500", href: "/categories/hotels" },
                        { icon: Compass, name: "Caribbean All-Inclusive", count: "10+", color: "text-pink-500", href: "/categories/travel" },
                        { icon: Coffee, name: "The One Luxury Collection", count: "5+", color: "text-teal-500", href: "/categories/hotels" },
                        { icon: Search, name: "Club H10 Member Deals", count: "8+", color: "text-orange-500", href: "/categories/travel" },
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
    Find an H10 Promo Code on CouponsBit
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Looking for an H10 promo code before booking your stay? CouponsBit helps you discover available promotional codes and hotel deals so you can explore potential savings before making a reservation.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      H10 Hotels regularly features special offers on its official website. These may include seasonal discounts, extended-stay offers, flight-and-hotel packages, breakfast promotions, and benefits for loyalty programme members. Availability and savings depend on the offer's terms.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Here are some ways to look for a suitable deal:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Check seasonal promotions:</strong> Look for limited-time hotel offers that match your travel dates.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Explore longer-stay discounts:</strong> Selected properties offer additional savings when guests meet the minimum-stay requirements.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Compare holiday packages:</strong> Check available flight-and-hotel deals if you prefer to arrange both parts of your trip together.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Look for breakfast offers:</strong> Participating hotels may offer special rates or discounts on breakfast.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Check H10 Rewards:</strong> Members can access eligible booking discounts, exclusive promotions, and other programme benefits.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Compare direct-booking offers:</strong> Review the official H10 Hotels website for promotions that may not require a separate code.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Always check the terms, travel dates, participating hotels, and booking conditions before relying on a promotion.
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
          H10 Promo Code: Save on Hotels, Resorts & Holiday Stays
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
          "H10 Hotels Flight + Hotel Package Deal",
          "Up to 35% OFF",
          "All Users",
          "Save up to 35% on bundled packages (or up to 25% on standalone stays) across Mallorca, Canary Islands, Caribbean, and more.",
          "Flight + Hotel Packages"
        ],
        [
          "H10 Hotels Autumn Escapes Offer",
          "Up to 20% OFF",
          "All Users",
          "Apply promo code H10ESCAPE at checkout. Valid on selected seasonal autumn hotel stays.",
          "Selected Autumn Hotel Stays"
        ],
        [
          "H10 Hotels Riviera Maya Vacation Package",
          "From ₹63,886",
          "All Users",
          "Includes 4-day, 3-night resort accommodations and flights. Subject to travel date availability.",
          "Riviera Maya Package (Flights + Hotel)"
        ],
        [
          "H10 Taburiente Playa Beachfront Stay",
          "From €149 / Night",
          "All Users",
          "Seafront all-inclusive hotel stay in La Palma with pool, restaurant, bar, and family access.",
          "H10 Taburiente Playa"
        ],
        [
          "Ocean Riviera Paradise All-Inclusive Getaway",
          "From $250 / Night",
          "All Users",
          "Beachfront resort with pools, water park, spa, and entertainment. Free transfers available on eligible bookings.",
          "Ocean Riviera Paradise Resort"
        ],
        [
          "H10 Blue Mar Adults-Only Mediterranean Stay",
          "From €140 / Night",
          "Adults Only",
          "Near the beach with sea views, outdoor pool, and chill-out terrace. Tailored for couples.",
          "H10 Blue Mar (Adults Only)"
        ],
        [
          "H10 Costa Mogán Adults-Only Resort",
          "From €230 / Night",
          "Adults Only",
          "All-inclusive beachfront resort with complimentary dining, sea-view terraces, outdoor pools, and fitness center.",
          "H10 Costa Mogán (Canary Islands)"
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
            Planning your next holiday? An H10 promo code can help you find savings on hotel bookings, whether you're dreaming of a beach escape in Spain, a city break in Europe, or an all-inclusive resort holiday in the Caribbean. Before confirming your reservation, check CouponsBit for available H10 Hotels promo codes, hotel discounts, and special booking offers.
          </p>
          <p>
            H10 Hotels offers accommodation for different types of travellers, from couples looking for adults-only retreats to families planning a relaxing vacation. By comparing promotional offers, checking loyalty benefits, and choosing suitable travel dates, you can make a more informed booking decision.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Explore Popular H10 Hotels Stays
          </h3>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Beachfront Hotels and Island Resorts
          </h4>
          <p>
            If you want a holiday centred on sunshine, beaches, and relaxation, explore H10 properties in destinations such as Tenerife, Fuerteventura, Mallorca, and the Caribbean. Depending on the resort, you may find swimming pools, ocean views, water activities, and all-inclusive accommodation.
          </p>
          <p>
            These stays can suit couples, families, and travellers looking for a break from their usual routine.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            European City Hotels
          </h4>
          <p>
            H10 Hotels also operates properties in destinations including Barcelona, Madrid, Lisbon, London, Paris, Rome, Venice, and Berlin. These hotels can provide convenient bases for exploring local attractions, museums, shopping districts, and restaurants.
          </p>
          <p>
            When choosing a city hotel, compare its location, transport connections, room facilities, and cancellation conditions to find the best fit for your itinerary.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Family-Friendly Resorts
          </h4>
          <p>
            Travelling with children? Explore participating H10 properties that offer family rooms, children's entertainment, swimming pools, and activities for different age groups. Some resorts also feature water parks and dedicated family facilities.
          </p>
          <p>
            Check the individual hotel's amenities and family offers before making your reservation.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Adults-Only and Luxury Stays
          </h4>
          <p>
            For a quieter getaway, H10's portfolio includes adults-only properties and upscale accommodation. Depending on the hotel, you may find spa facilities, rooftop terraces, premium dining, and additional services designed to make your stay more relaxing.
          </p>
          <p>
            Compare the available packages to see whether a promotional rate includes benefits that matter to you.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use an H10 Promo Code
          </h3>
          <p>
            Applying an H10 promo code is straightforward when your selected offer requires one.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit the official H10 Hotels website through the booking link.</li>
            <li>Choose your destination or hotel, travel dates, number of guests, and rooms.</li>
            <li>Look for the promotional code field in the booking form.</li>
            <li>Enter your valid H10 promo code and continue with your search.</li>
            <li>Compare the available room rates and check whether the promotion has been applied.</li>
            <li>Review the cancellation policy, included amenities, and final booking amount.</li>
            <li>Complete your reservation if the offer meets your requirements.</li>
          </ol>
          <p>
            Some H10 Hotels promotions apply automatically when you select an eligible offer, while others require a code. For example, the official website currently advertises an autumn offer using code H10ESCAPE, with savings of up to 20% subject to the promotion's conditions. Check the official offer page to confirm availability for your destination and travel dates.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Save More with H10 Rewards
          </h3>
          <p>
            H10 Rewards is the group's loyalty programme. Members can access eligible booking discounts, earn points towards hotel stays and services, and receive exclusive promotions and other benefits.
          </p>
          <p>
            The official programme advertises a guaranteed 5% discount on eligible bookings, along with opportunities to earn and redeem points. Benefits and eligibility depend on the programme's terms and membership conditions.
          </p>
          <p>
            If you travel regularly, joining H10 Rewards may be worth considering. Compare the member rate with other available promotions to determine which option offers the best value for your stay.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Tips to Get Better H10 Hotel Deals
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Compare travel dates:</strong> Flexible dates may help you find a more suitable rate.</li>
            <li><strong>Book longer stays when practical:</strong> Check whether your destination offers a discount for meeting its minimum-stay requirement.</li>
            <li><strong>Review package inclusions:</strong> Breakfast, transfers, or other extras may be included in selected promotions.</li>
            <li><strong>Check loyalty benefits:</strong> Compare eligible H10 Rewards rates with publicly available offers.</li>
            <li><strong>Read cancellation conditions:</strong> A lower rate may come with stricter booking terms.</li>
            <li><strong>Compare the final cost:</strong> Consider the room rate, taxes, fees, and any additional services before confirming your booking.</li>
          </ul>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Book Your Next Getaway with CouponsBit
          </h3>
          <p>
            From beachfront escapes and family holidays to European city breaks and premium resort stays, H10 Hotels offers accommodation for a variety of travel plans. Before confirming your next trip, visit CouponsBit to explore available H10 promo codes, hotel discounts, and special booking offers.
          </p>
          <p>
            Compare rates, review the benefits, and check the booking terms to find an offer that suits your destination and travel plans.
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
              q: "Where can I find an H10 promo code?",
              a: "Visit CouponsBit to check available H10 promo codes and hotel deals. You can also explore the official H10 Hotels offers page for current promotions and destination-specific discounts."
            },
            {
              q: "Does H10 Hotels offer discounts on bookings?",
              a: "Yes. H10 Hotels lists promotions such as seasonal offers, longer-stay discounts, selected breakfast deals, and flight-and-hotel packages. The availability and conditions vary by property and destination."
            },
            {
              q: "What is the H10ESCAPE promo code?",
              a: "H10ESCAPE is a code advertised on the official H10 Hotels website for an autumn promotion offering up to 20% off. Eligibility, participating hotels, and booking conditions apply, so verify the details before booking."
            },
            {
              q: "Does H10 Hotels have a loyalty programme?",
              a: "Yes. H10 Rewards offers eligible members booking discounts, points, exclusive promotions, and other benefits. Check the programme's official terms for details."
            },
            {
              q: "Can I use an H10 promo code at every hotel?",
              a: "Not necessarily. Offers may be limited to specific properties, destinations, room types, or travel periods. Check the conditions attached to your chosen promotion before completing your reservation."
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
            Popular H10 Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "H10 Promo Code",
              "Hotel Discounts",
              "H10 Rewards",
              "H10ESCAPE Code",
              "Beachfront Resorts",
              "European City Breaks",
              "Adults-Only Stays",
              "Family Vacation Deals"
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
            Today's Top H10 Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "PROMO CODE H10ESCAPE",
                sub: "Save up to 20% on autumn hotel stays",
              },
              {
                heading: "H10 REWARDS",
                sub: "Guaranteed 5% discount & points for members",
              },
              {
                heading: "BEACH & ISLAND RESORTS",
                sub: "Special offers on Spain & Caribbean stays",
              },
              {
                heading: "EUROPEAN CITY BREAKS",
                sub: "Book city center stays across top capitals",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  H
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
                  aria-label={`Shop H10: ${deal.heading}`}
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
