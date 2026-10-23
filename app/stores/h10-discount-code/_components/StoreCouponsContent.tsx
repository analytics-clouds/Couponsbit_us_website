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
                      Plan your next Mediterranean getaway or Caribbean escape with the latest verified H10 Hotels discount codes and Club H10 promo codes. Enjoy up to 30% savings on beachfront resorts, boutique city hotels, and all-inclusive vacations.
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
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1792761664/h10-logo_fjdthe.webp"
                        alt="H10 Hotels Discount Code"
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
                  <h2 className="text-2xl font-black text-black leading-tight">H10 Hotels Promo Codes & Offers</h2>
                </div>

                {[
                  {
                    label: "MEMBER",
                    value: "5% OFF",
                    title: "Club H10 Loyalty Deal – 5% OFF Direct Bookings + Points",
                    desc: "Join Club H10 for an instant 5% discount on all bookings, free welcome gift, and points rewards.",
                    bullets: [
                      "Receive an instant 5% discount across all participating H10 Hotels & Resorts.",
                      "Earn Club H10 points on bookings and restaurant spend to redeem for future stays.",
                      "Complimentary welcome bottle of wine or water and personalized room amenities.",
                      "100% free to register online before making your booking."
                    ]
                  },
                  {
                    label: "UP TO",
                    value: "25%",
                    title: "H10 Early Booking Offer – Up to 25% OFF Advance Hotel Stays",
                    desc: "Book your hotel or resort stay in advance and save up to 25% on eligible destinations.",
                    bullets: [
                      "Plan ahead for spring and summer holidays across Spain, Portugal, Italy, and the UK.",
                      "Enjoy discounted room rates on ocean-view suites and family rooms.",
                      "Flexible cancellation conditions on selected early bird rates.",
                      "Requires advance reservation; subject to room availability."
                    ]
                  },
                  {
                    label: "UP TO",
                    value: "30%",
                    title: "H10 Canary Islands & Balearics – Up to 30% OFF Beach Getaways",
                    desc: "Enjoy year-round island sunshine in Tenerife, Lanzarote, Fuerteventura, Mallorca, or Ibiza.",
                    bullets: [
                      "Save up to 30% on beachfront resorts with swimming pools, Despacio Spa centres, and live entertainment.",
                      "Half-board, full-board, and all-inclusive accommodation plans available.",
                      "Ideal for couples seeking relaxation and families wanting splash parks and kids' clubs.",
                      "Subject to availability at participating island properties."
                    ]
                  },
                  {
                    label: "FROM",
                    value: "$185",
                    title: "Ocean by H10 Caribbean Stays – All-Inclusive Packages from $185",
                    desc: "Relax in Riviera Maya, Punta Cana, or Jamaica with premium 5-star all-inclusive beachfront deals.",
                    bullets: [
                      "Experience unlimited gourmet dining, top-shelf beverages, and 24-hour room service.",
                      "Direct access to turquoise Caribbean waters and white sandy beaches.",
                      "Upgrade to Privilege Club rooms for private lounge access, butler service, and exclusive beach areas.",
                      "Nightly rates from $185 per person/night; seasonal conditions apply."
                    ]
                  },
                  {
                    label: "UP TO",
                    value: "20%",
                    title: "H10 City Breaks Deal – Up to 20% OFF Barcelona, Madrid, Rome & London",
                    desc: "Save on boutique city center hotels in Europe's most famous cultural and shopping hubs.",
                    bullets: [
                      "Save up to 20% on elegant hotel rooms located in central districts near landmark monuments.",
                      "Enjoy rooftop plunge pools and panoramic cocktail terraces overlooking the city skyline.",
                      "Complimentary Wi-Fi and high-grade amenities in every guestroom.",
                      "Valid on selected weekend and weekday city bookings."
                    ]
                  },
                  {
                    label: "SAVE",
                    value: "20%",
                    title: "H10 Long Stay Discount – Save Up to 20% on Stays of 4+ Nights",
                    desc: "Stay longer and save more on both seaside holiday resorts and urban boutique hotels.",
                    bullets: [
                      "Discount automatically applied when selecting 4 or more consecutive nights.",
                      "Combine with Club H10 member benefits for extra savings.",
                      "Ideal for extended holidays, remote work retreats, and thorough exploration of destination cities.",
                      "Available at participating properties."
                    ]
                  },
                  {
                    label: "LUXURY",
                    value: "5-STAR",
                    title: "The One by H10 Luxury Collection – 5-Star Stays with Complimentary Perks",
                    desc: "Experience 5-star urban luxury in Barcelona and Lisbon with exclusive direct booking benefits.",
                    bullets: [
                      "Book luxury boutique stays at The One Palácio da Anunciada or The One Barcelona.",
                      "Includes Despacio Spa access, complimentary welcome amenity, and fine dining options.",
                      "Prime central locations in historic aristocratic settings.",
                      "Direct booking guarantee with VIP concierge service."
                    ]
                  },
                  {
                    label: "FREE",
                    value: "FLEXIBLE",
                    title: "H10 Free Cancellation Rate – Flexible Bookings With No Upfront Penalty",
                    desc: "Reserve your holiday with complete peace of mind and pay on arrival options.",
                    bullets: [
                      "Cancel for free up to 24 to 48 hours before check-in on flexible rate plans.",
                      "No advance payment required for selected reservations; pay at check-in.",
                      "Modify dates without penalty if your travel schedule changes.",
                      "Check specific rate conditions during booking."
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
                  <h3 className="text-black font-black text-lg mb-6">About H10 Hotels</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Founded in the late 1960s, H10 Hotels is one of Spain&apos;s leading hotel companies, operating more than 65 hotels in 23 destinations across Spain, Europe, and the Caribbean.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    H10 is known for prime beachfront and city-center locations, sophisticated interior design, comprehensive Despacio beauty and wellness centres, and exceptional gastronomy. Their brands include H10 Hotels, Ocean by H10 Hotels in the Caribbean, and The One luxury collection.
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
                    Why Book H10 Hotels Directly?
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>Direct Price Guarantee:</strong> Always secure the lowest guaranteed rate by booking through the official H10 website.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>Club H10 Extra 5% Off:</strong> Club H10 members receive an instant 5% discount on top of ongoing seasonal promotions.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>Free Welcome Gift:</strong> Receive complimentary welcome gifts and amenities when you arrive at your accommodation.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>Flexible Payment & Cancellation:</strong> Enjoy stress-free reservations with free cancellation options and pay-at-the-hotel policies.</span>
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
                  H10 Hotels Promo Code, Discount Codes & Resort Vacation Deals
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
                          "Club H10 Membership Deal",
                          "5% OFF + Points",
                          "Club H10 Members",
                          "Instant saving across direct bookings with points accumulation on eligible spend.",
                          "All H10 Hotels & Resorts"
                        ],
                        [
                          "H10 Early Booking Offer",
                          "Up to 25% OFF",
                          "All Guests",
                          "Plan in advance to access lowest room rates for upcoming travel seasons.",
                          "Eligible Hotels in Spain & Europe"
                        ],
                        [
                          "Canary & Balearic Islands Special",
                          "Up to 30% OFF",
                          "All Guests",
                          "Seasonal discounts across Tenerife, Lanzarote, Fuerteventura, and Mallorca resorts.",
                          "Island Beachfront Hotels"
                        ],
                        [
                          "Ocean by H10 Caribbean Stays",
                          "From $185 / Night",
                          "All Guests",
                          "All-inclusive resort stays in Mexico, Dominican Republic, and Jamaica.",
                          "Caribbean All-Inclusive Resorts"
                        ],
                        [
                          "European City Escapes",
                          "Up to 20% OFF",
                          "All Guests",
                          "Special rates on central city accommodations in Barcelona, Madrid, Rome, London.",
                          "Boutique Urban Hotels"
                        ],
                        [
                          "H10 Long Stay Discount",
                          "Up to 20% OFF",
                          "All Guests",
                          "Minimum stay of 4 consecutive nights required. Subject to availability.",
                          "Participating Hotel Stays"
                        ],
                        [
                          "The One Luxury Collection",
                          "5-Star VIP Perks",
                          "All Guests",
                          "Luxury urban stays with spa access and personalized welcome amenities.",
                          "The One Barcelona & Lisbon"
                        ],
                        [
                          "H10 Free Cancellation Rate",
                          "Flexible Booking",
                          "All Guests",
                          "Free cancellation up to 24-48 hours before check-in. Pay upon arrival.",
                          "Flexible Booking Rates"
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
                    Whether you are seeking sunny Mediterranean shores in Spain, a serene escape to the Canary Islands, an idyllic all-inclusive vacation in the Caribbean, or an architectural city exploration in Barcelona, Madrid, Rome, or London, H10 Hotels delivers modern comfort, exceptional dining, and hospitable service.
                  </p>
                  <p>
                    Before locking in your reservation, visit CouponsBit to browse the latest H10 Hotels promo codes and discount deals. Direct bookings not only grant you access to special promotional pricing but also ensure complete booking flexibility and loyalty benefits.
                  </p>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">
                    Unlock Instant Savings With Club H10
                  </h3>
                  <p>
                    One of the most effective ways to save on H10 reservations is by joining Club H10. Free to join in moments on their official website, Club H10 membership immediately entitles you to an extra 5% discount on all bookings, which stacks seamlessly with most early booking and seasonal promotional rates.
                  </p>
                  <p>
                    Club H10 members also earn points for every stay and on-site food and beverage expense, which can be applied directly towards future holiday bookings or converted into special rewards.
                  </p>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">
                    How to Apply an H10 Hotels Promo Code
                  </h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Find your chosen H10 Hotels discount code or deal on CouponsBit and copy it.</li>
                    <li>Head to the official H10 Hotels booking portal.</li>
                    <li>Input your desired destination, hotel, check-in and check-out dates, and number of guests.</li>
                    <li>Enter your promotional coupon in the &apos;Promotional Code&apos; field on the reservation bar.</li>
                    <li>Click search to see all rooms and discounted rates available for your travel dates.</li>
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
                    FAQs About H10 Hotels Promo Codes
                  </h3>
                  {[
                    {
                      q: "How do I use an H10 Hotels promo code?",
                      a: "Find your offer on CouponsBit, copy the promo code, and go to the H10 Hotels website. Enter your chosen hotel, travel dates, and paste your code into the 'Promotional Code' field on the booking form."
                    },
                    {
                      q: "What are the benefits of joining Club H10?",
                      a: "Club H10 is free to join. Members receive an instant 5% discount on all bookings, a welcome gift upon arrival, points on every stay to redeem for discounts, and special member-only flash sales."
                    },
                    {
                      q: "Does H10 Hotels offer all-inclusive resorts?",
                      a: "Yes, H10 operates premium 4-star and 5-star beachfront all-inclusive resorts under the Ocean by H10 Hotels brand in Mexico, the Dominican Republic, and Jamaica, as well as in the Canary Islands."
                    },
                    {
                      q: "Can I cancel my H10 Hotels reservation for free?",
                      a: "Yes, H10 Hotels offers flexible rates with free cancellation up to 24 to 48 hours prior to arrival, allowing you to pay at the hotel with full flexibility."
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
                    Popular H10 Searches
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "H10 Hotels Promo Code",
                      "Club H10 Discount",
                      "Canary Islands Resort",
                      "Ocean by H10 All-Inclusive",
                      "Barcelona Boutique Hotel",
                      "Early Booking Discount",
                      "Tenerife Hotel Deals",
                      "Free Cancellation"
                    ].map((tag) => (
                      <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                    Today's Top H10 Deals
                  </h3>
                  <div className="space-y-6">
                    {DEALS.map((deal, i) => (
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
