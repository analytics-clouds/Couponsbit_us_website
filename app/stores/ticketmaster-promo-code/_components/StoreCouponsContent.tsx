"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Star, Tag, Percent, Users, BadgeCheck, ExternalLink,
  ShieldCheck, PiggyBank, RefreshCw, ChevronDown, CheckCircle, LayoutGrid,
  Ticket, Music, Trophy, Theater, Search,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { OFFERS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "1800 Flowers", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/1800_flower_logo_uqwufx.webp", dealText: "Up To 25% OFF", href: "/stores/1800-flowers-promo-code" },
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Flat 75% OFF", href: "/stores/etsy-coupon-code" },
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/expedia-logo_yihnst.webp", dealText: "Up To 40% OFF", href: "/stores/expedia-discount-code" },
  { name: "Booking.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/booking-logo_v2amtr.webp", dealText: "Up To 30% OFF", href: "/stores/booking-promo-code" },
  { name: "Agoda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/agoda-logo_qdp5oj.webp", dealText: "Up To 40% OFF", href: "/stores/agoda-discount-code" },
];

const STORE_URL = "https://www.ticketmaster.com";

export default function TicketmasterCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

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
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Ticketmaster</span>
            </nav>
          </div>
        </div>

        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793614081/ticketmaster-logo_boxlia.webp" alt="Ticketmaster" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Ticketmaster Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(18.6k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more on live entertainment with the latest Ticketmaster Discount Code and Ticketmaster Coupon Code for November 2026. Enjoy up to 65% OFF eligible event tickets, including concerts, sports, theater shows, and festivals. You can also find exclusive deals like 2 Live Nation tickets for just $55, plus discounts on selected concerts and special events. Browse verified Ticketmaster offers to secure great seats at lower prices and make your next live experience more affordable.
                    </p>
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors">
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "7", label: "Offers" },
                    { icon: Percent, val: "30+", label: "Deals" },
                    { icon: Users, val: "10M+", label: "Shoppers" },
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
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                    <div className="w-full h-full bg-gradient-to-br from-[#026CDF] via-[#003A82] to-[#001F5B] flex items-center justify-center">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793614081/ticketmaster-logo_boxlia.webp" alt="Ticketmaster Promo Code" width={280} height={120} className="max-h-32 w-auto object-contain" fetchPriority="high" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Ticketmaster Promo Codes & Offers</h2>
                </div>
                {OFFERS.map((c, i) => (
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
                              View Details <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Ticketmaster: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:w-[35%] space-y-8">
                <div className="w-full flex justify-center mb-6">
                  <a href="https://www.google.com/preferences/source?q=couponsbit.us" target="_blank" rel="nofollow noopener noreferrer" className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
                    <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png" alt="Add as a preferred source on Google" width={280} height={70} className="w-full max-w-[260px] h-auto object-contain" priority />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">What Is Ticketmaster?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Ticketmaster is a ticketing platform that connects fans with live entertainment and events. It provides access to tickets for concerts, sports games, theatre productions, comedy shows, festivals, and other live experiences.
 
                  </p>
                  
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform works with event organisers, artists, sports teams, and venues to sell tickets. Depending on the event, customers can browse standard tickets, premium seating, VIP packages, and eligible resale listings.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Ticketmaster also provides tools to manage digital tickets, transfer tickets when permitted, and access event information through its website and mobile app.

                  </p>

                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Event Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Music, name: "Concerts & Music", count: "500+", color: "text-purple-500", href: "/categories/entertainment" },
                      { icon: Trophy, name: "Sports Events", count: "300+", color: "text-blue-500", href: "/categories/entertainment" },
                      { icon: Theater, name: "Theatre & Arts", count: "150+", color: "text-pink-500", href: "/categories/entertainment" },
                      { icon: Ticket, name: "Family Shows", count: "80+", color: "text-green-500", href: "/categories/entertainment" },
                      { icon: Search, name: "Festivals", count: "60+", color: "text-orange-500", href: "/categories/entertainment" },
                    ].map((cat, i) => (
                      <Link key={i} href={cat.href} className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <cat.icon className={cn("w-4.5 h-4.5", cat.color)} />
                          <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">{cat.name}</span>
                        </div>
                        <span className="bg-[#e8f6f8] text-[#0451c4] px-2.5 py-0.5 rounded-full text-[12px] font-black">{cat.count} Events</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/categories/entertainment" className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline">View Entertainment →</Link>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    Where Can You Find Ticketmaster Tickets?
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Ticketmaster covers several categories of live entertainment. Here are some of the popular event types you can explore:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Concerts and music:</strong> Find tickets for touring artists, bands, music festivals, and live performances.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Sports:</strong> Browse tickets for professional and other sporting events, depending on availability.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Theatre and performing arts:</strong> Discover Broadway productions, musicals, plays, and other stage performances.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Comedy:</strong> Book tickets for stand-up shows, comedy tours, and live entertainment.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Festivals and special events:</strong> Explore festivals, seasonal events, and other experiences.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>VIP experiences:</strong> Some events offer premium seating or special packages with additional benefits.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Event availability, seating options, and ticket prices depend on the organiser, venue, and event.
    </p>
  </div>
</div>

              </div>
            </div>
          </div>
        </section>

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
              <LayoutGrid className="w-4 h-4" /> View More Stores
            </Link>
          </div>
        </section>

        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Ticketmaster Promo Code: Find Deals on Concerts, Sports & Live Events
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
          "Ticketmaster Sitewide Discount",
          "20% OFF",
          "All Users",
          "Limited-time online offer across eligible concerts, sports, theater, and live events.",
          "Eligible Ticketmaster Purchases"
        ],
        [
          "Ticketmaster Select Event Savings",
          "Up to 45% OFF",
          "All Users",
          "Valid on selected concerts and live shows for a limited time.",
          "Selected Event Tickets"
        ],
        [
          "Ticketmaster Major Order Discount",
          "Up to 65% OFF",
          "All Users",
          "High-value savings across selected live entertainment, sports, and concerts.",
          "Eligible Event Tickets"
        ],
        [
          "Ticketmaster Featured Events Offer",
          "Up to 50% OFF",
          "All Users",
          "Applicable on qualifying concerts, festivals, and live shows.",
          "Selected Event Tickets"
        ],
        [
          "Ticketmaster Event Savings Pass",
          "Up to 25% OFF",
          "All Users",
          "Short-term promotional savings covering concerts, sports, and theater.",
          "Selected Ticket Purchases"
        ],
        [
          "Ticketmaster Order Savings",
          "Up to 5% OFF",
          "All Users",
          "Quick discount on qualifying ticket orders across various live events.",
          "Qualifying Orders"
        ],
        [
          "Ticketmaster Entertainment Discount",
          "15% OFF",
          "All Users",
          "Online promotion for selected concerts, sports, and theater tickets.",
          "Eligible Ticket Purchases"
        ],
        [
          "Ticketmaster Live Nation 2-Ticket Package",
          "2 for $55 ($27.50 ea)",
          "All Users",
          "Includes service fees. Valid on participating amphitheater shows while stock lasts.",
          "Live Nation Amphitheater Shows"
        ],
        [
          "Ticketmaster Flat Order Discount",
          "$49 OFF",
          "All Users",
          "Direct dollar savings on qualifying premium event ticket orders.",
          "Qualifying Orders"
        ],
        [
          "Ticketmaster Booking Discount",
          "20% OFF",
          "All Users",
          "Short-term offer covering concerts, sports events, and theater shows.",
          "Eligible Ticket Bookings"
        ],
        [
          "Ticketmaster Battle in the Bay Deal",
          "25% OFF",
          "All Users",
          "Special sports event discount on selected tickets while availability lasts.",
          "Battle in the Bay Tickets"
        ],
        [
          "Ticketmaster Dru Hill 30th Anniversary Tour",
          "50% OFF",
          "All Users",
          "Half-price concert savings on selected qualifying anniversary tour tickets.",
          "Dru Hill 30th Anniversary Tickets"
        ],
        [
          "Ticketmaster Partner Bank Offer",
          "13% OFF",
          "Qualifying Bank Cardholders",
          "Save 13% on qualifying online ticket bookings across selected entertainment.",
          "Qualifying Ticket Bookings"
        ],
        [
          "Ticketmaster Premium Bank Partner Offer",
          "25% OFF",
          "Qualifying Bank Cardholders",
          "Special cardholder discount for concerts, sports, and theater events.",
          "Selected Ticketmaster Purchases"
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
            Looking forward to a live concert, an exciting sports match, or a theatre performance? Ticketmaster makes it easier to discover events and book tickets for experiences you don't want to miss. Before completing your booking, check CouponsBit for a Ticketmaster promo code that may help you save on eligible ticket purchases.
          </p>
          <p>
            Whether you're planning a night out with friends or getting tickets to see your favourite artist, explore available Ticketmaster deals and offers before you check out.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Find a Ticketmaster Promo Code on CouponsBit
          </h3>
          <p>
            Looking for a Ticketmaster discount? Visit CouponsBit and check the latest available offers before booking your tickets.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Open CouponsBit and visit the Ticketmaster store page.</li>
            <li>Browse the listed promo codes and available deals.</li>
            <li>Choose an offer that matches your event and purchase requirements.</li>
            <li>Read the offer conditions, including eligibility and expiry details.</li>
            <li>Copy the promo code, if one is available, and visit Ticketmaster.</li>
            <li>Select your event, choose eligible tickets, and continue to checkout.</li>
            <li>Enter the code in the promo code section and apply it before completing your purchase.</li>
          </ol>
          <p>
            Always check the final order total to confirm that the discount has been applied.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Apply a Ticketmaster Promo Code
          </h3>
          <p>
            Ticketmaster has different types of codes, and knowing where to enter each one can make booking easier.
          </p>
          <p>
            To use a promo code:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Sign in to your Ticketmaster account.</li>
            <li>Select an event and choose your tickets.</li>
            <li>Continue to the checkout page.</li>
            <li>Select Add Credits / Promo Codes / Gift Cards.</li>
            <li>Enter your promo code and select Apply.</li>
            <li>Check the updated order total before paying.</li>
          </ol>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            What about presale and discount codes?
          </h4>
          <p>
            These codes work differently. Enter an eligible passcode or discount code through the Unlock option on the event's ticket search page, before selecting your seats. It may reveal tickets available through a special sale or at a special price.
          </p>
          <p>
            Ticketmaster confirms that promo codes, discount codes, and passcodes cannot be applied to resale ticket purchases. Codes also cannot be added to orders that have already been completed.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Tips to Save on Ticketmaster Bookings
          </h3>
          <p>
            A little planning can help you find a suitable ticket without spending more than necessary.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Check presale opportunities:</strong> Some artists, sponsors, and fan clubs offer early ticket access. Check the event page for registration requirements and codes.</li>
            <li><strong>Compare seating options:</strong> Review different sections and ticket categories before choosing your seats.</li>
            <li><strong>Check the complete price:</strong> Consider applicable fees and taxes, not just the base ticket price.</li>
            <li><strong>Look for eligible offers:</strong> Review available promotions and read their terms before applying a code.</li>
            <li><strong>Follow your favourite artists:</strong> Keep an eye on event announcements and presale updates so you don't miss ticket releases.</li>
            <li><strong>Book through trusted channels:</strong> Use Ticketmaster or the event's authorised ticketing partner to reduce the risk of invalid tickets.</li>
          </ul>
          <p>
            Presale access does not guarantee that tickets will be available, so check the event details and sale conditions before booking.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Understand Ticketmaster Fees Before Checkout
          </h3>
          <p>
            The ticket price is not always the only amount you need to consider. Ticketmaster explains that its displayed upfront price generally includes the ticket's face value and required fees, before applicable taxes. Depending on the event and delivery method, additional charges may apply.
          </p>
          <p>
            Resale tickets are priced by the seller and may be listed above or below the original ticket value. Review the price breakdown before completing your purchase so you understand the total cost.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Book Your Next Live Experience with Ticketmaster and CouponsBit
          </h3>
          <p>
            From concerts and comedy shows to theatre productions and sports events, Ticketmaster gives fans a place to discover and book live experiences. Before making your next purchase, visit CouponsBit to check available Ticketmaster promo codes, discount offers, and ticket deals.
          </p>
          <p>
            Compare eligible offers, read the terms, and apply a valid code before checkout. Your next memorable experience could come with a little extra saving!
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
              q: "1. Where can I find a Ticketmaster promo code?",
              a: "You can check the Ticketmaster page on CouponsBit for available promo codes and offers. Review each offer's terms to confirm that it applies to your selected event and tickets."
            },
            {
              q: "2. Can I use a Ticketmaster promo code on resale tickets?",
              a: "No. Ticketmaster states that promo codes, discount codes, and passcodes cannot be applied to resale ticket purchases."
            },
            {
              q: "3. What is the difference between a promo code and a presale code?",
              a: "A promo code is entered during checkout to reduce the eligible order total. A presale passcode is entered before selecting tickets to unlock access to a special ticket sale."
            },
            {
              q: "4. Why is my Ticketmaster promo code not working?",
              a: "A code may not work if it has expired, the selected tickets are not eligible, the offer's conditions have not been met, or the purchase involves resale tickets. Check the offer terms and confirm that you are entering the code in the correct section."
            },
            {
              q: "5. Can I apply a promo code after purchasing tickets?",
              a: "No. Ticketmaster says codes cannot be applied to existing orders. Make sure you enter an eligible code before completing payment."
            },
            {
              q: "6. Does Ticketmaster offer presale tickets?",
              a: "Yes. Depending on the event, presales may be available through artists, sponsors, fan clubs, or other partners. Some require registration or a special code, and access does not guarantee ticket availability."
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
            Popular Ticketmaster Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Ticketmaster Promo Code",
              "Concert Ticket Deals",
              "Sports Events Sale",
              "Presale Passcodes",
              "2 for 1 Ticket Offers",
              "Theatre & Arts Discounts",
              "Broadway Show Deals",
              "NFL & NBA Tickets"
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
            Today's Top Ticketmaster Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "2-FOR-1 TICKET SPECIAL",
                sub: "Buy 1 get 1 free on select live events",
              },
              {
                heading: "UP TO 50% OFF",
                sub: "Save on concert & theatre ticket deals",
              },
              {
                heading: "PRESALE TICKETS",
                sub: "Get early access with exclusive partner passcodes",
              },
              {
                heading: "FAMILY & ARTS SALE",
                sub: "Special discounts on family shows & plays",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  T
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
                  aria-label={`Shop Ticketmaster: ${deal.heading}`}
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
