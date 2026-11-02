"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Star, Tag, Percent, Users, BadgeCheck, ExternalLink,
  ShieldCheck, PiggyBank, RefreshCw, ChevronDown, CheckCircle, LayoutGrid,
  Home, Lamp, Sofa, UtensilsCrossed, Search,
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
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Dreame", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/dreame-logo_szj8pe.webp", dealText: "Up To 40% OFF", href: "/stores/dreame-discount-code" },
  { name: "EcoFlow", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/ecoflow-logo_ojcbah.webp", dealText: "Up To 30% OFF", href: "/stores/ecoflow-discount-code" },
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Flat 75% OFF", href: "/stores/etsy-coupon-code" },
  { name: "Booking.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/booking-logo_v2amtr.webp", dealText: "Up To 30% OFF", href: "/stores/booking-promo-code" },
  { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/expedia-logo_yihnst.webp", dealText: "Up To 40% OFF", href: "/stores/expedia-discount-code" },
];

const STORE_URL = "https://www.ikea.com";

export default function IkeaCouponsContent() {
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
              <span className="text-black font-extrabold">IKEA</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793614081/ikea-logo_suwglk.webp" alt="IKEA" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">IKEA Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(12.4k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more on your next home makeover with the latest IKEA Discount Code and IKEA Coupon Code for November 2026. Enjoy up to 70% OFF selected products across furniture, home décor, kitchenware, storage, and mattresses, plus up to 40% OFF on lighting, curtains, bedsheets, cushions, and organizers. IKEA Family members can unlock exclusive discounts, while additional offers on cookware, bedroom furniture, and outdoor collections help you furnish every room for less.
                    </p>
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors">
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "7", label: "Offers" },
                    { icon: Percent, val: "50+", label: "Deals" },
                    { icon: Users, val: "5M+", label: "Shoppers" },
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
                    <div className="w-full h-full bg-gradient-to-br from-[#0058A3] via-[#006EBF] to-[#FFDA1A] flex items-center justify-center">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793614081/ikea-logo_suwglk.webp" alt="IKEA Discount Code" width={280} height={120} className="max-h-32 w-auto object-contain" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">IKEA Discount Codes & Offers</h2>
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop IKEA: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is IKEA?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    IKEA is a Swedish home furnishings retailer known for functional furniture, practical home accessories, and designs that make everyday living easier. The company offers products for homes of different sizes, with an emphasis on affordability, useful design, and space-saving solutions.

                  </p>
                  
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its US online store features a wide selection of products, including sofas, beds, mattresses, wardrobes, desks, kitchen cabinets, lighting, rugs, cookware, home décor, bathroom accessories, and children's furniture. IKEA also offers planning services and selected home delivery and assembly options. 

                  </p>

                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    One reason shoppers choose IKEA is the ability to coordinate different parts of a home through its product collections. You can furnish a living room, organise a wardrobe, upgrade a kitchen, or find smaller accessories to complete a room without shopping across multiple retailers.

                  </p>

                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Home, name: "Bedroom Furniture", count: "30+", color: "text-blue-500", href: "/categories/home" },
                      { icon: Sofa, name: "Living Room", count: "25+", color: "text-green-500", href: "/categories/home" },
                      { icon: UtensilsCrossed, name: "Kitchen", count: "40+", color: "text-orange-500", href: "/categories/food" },
                      { icon: Lamp, name: "Lighting", count: "15+", color: "text-yellow-500", href: "/categories/home" },
                      { icon: Search, name: "New Arrivals", count: "10+", color: "text-purple-500", href: "/categories/home" },
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
    Find an IKEA Promo Code on CouponsBit
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Looking for an IKEA promo code before placing your order? CouponsBit helps you explore available IKEA discount codes, coupons, and promotional offers so you can check potential savings before checkout.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      IKEA runs different types of promotions throughout the year. Some require a promotional code, while others are available automatically when you sign in with an eligible IKEA Family account.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Here are some ways to find better IKEA deals:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>IKEA Family offers:</strong> Join the free IKEA Family programme to access member-only prices, selected product discounts, and other benefits.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Seasonal sales:</strong> Check promotions around major shopping periods and seasonal home refresh events.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Furniture deals:</strong> Look for reduced prices on selected sofas, beds, tables, chairs, and storage products.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Kitchen and home accessory offers:</strong> Explore discounts on selected cookware, tableware, lighting, and home organisation products.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Delivery benefits:</strong> Check whether your IKEA Family membership qualifies you for a delivery or collection offer.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Student promotions:</strong> Look for student-specific offers when available and check the verification requirements.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      IKEA Family is free to join in the US. Its benefits include member-only offers, free workshops and events, free coffee or tea at participating stores, and 90-day price protection on eligible product purchases. Specific promotions have their own restrictions and eligibility requirements.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      A useful tip: Don't assume every IKEA discount needs a promo code. Some IKEA Family prices are applied automatically when you sign in to your account and your order meets the offer conditions.
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
          IKEA Promo Code: Save on Furniture, Home Décor & Essentials
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
          "IKEA Home Textiles Sale",
          "Up to 40% OFF",
          "All Users",
          "Savings on bedsheets, cushions, and other modern home textiles for a limited time.",
          "Bedsheets, Cushions & Textiles"
        ],
        [
          "IKEA Curtains Discount Offer",
          "Up to 40% OFF",
          "All Users",
          "Discounted pricing on selected curtains to add privacy and style across all rooms.",
          "Selected Curtains"
        ],
        [
          "IKEA Storage & Organisers Sale",
          "Up to 40% OFF",
          "All Users",
          "Special prices on small storage items and organisers while stock lasts.",
          "Storage & Organisers"
        ],
        [
          "IKEA ANNONS 5-Piece Cookware Set",
          "22% OFF (₹999)",
          "All Users",
          "Reduced from ₹1,290 regular price. Includes 5 stainless steel pieces with glass lids.",
          "ANNONS 5-Piece Cookware Set"
        ],
        [
          "IKEA Furniture Sale",
          "Up to 35% OFF",
          "All Users",
          "Short-time furniture sale on Scandinavian designs for sofas, tables, chairs, and more.",
          "Selected Furniture"
        ],
        [
          "IKEA Outdoor Furniture Sale",
          "Up to 30% OFF",
          "All Users",
          "Seasonal promotional offer on outdoor garden, balcony, and patio furniture.",
          "Outdoor Furniture"
        ],
        [
          "IKEA Bookcases & Shelving Offer",
          "Up to 25% OFF",
          "All Users",
          "Savings on bookcases and shelving units in various sizes and finishes for home and office.",
          "Bookcases & Shelving Units"
        ],
        [
          "IKEA Lighting Sale",
          "Up to 40% OFF",
          "All Users",
          "Short-term lighting offer across lamps, ceiling lights, and decorative lighting.",
          "Selected Lighting"
        ],
        [
          "IKEA Bedroom Furniture Bundle",
          "15% OFF",
          "IKEA Family Members",
          "Buy a qualifying bed and get 15% off select bedroom furniture like wardrobes and bedside tables.",
          "Bedroom Furniture"
        ],
        [
          "IKEA FÄRGKLAR Side Plate Sale",
          "17% OFF (₹289)",
          "All Users",
          "Save 17% on light pink finish side plates for daily meals and special occasions while stock lasts.",
          "FÄRGKLAR Side Plate"
        ],
        [
          "IKEA Sitewide Savings Offer",
          "Up to 70% OFF",
          "All Users",
          "Sitewide promotional discount with prices starting at ₹233 across furniture, beds, and lighting.",
          "Sitewide Products"
        ],
        [
          "IKEA Selected Products Deal",
          "Up to 70% OFF",
          "All Users",
          "Prices start at ₹99 across home décor, kitchenware, storage items, and mattresses.",
          "Selected Product Collections"
        ],
        [
          "IKEA Family Sale Member Offer",
          "Up to 70% OFF",
          "IKEA Family Members",
          "Exclusive member-only seasonal event savings across furniture, home decor, and storage.",
          "Selected IKEA Collections"
        ],
        [
          "IKEA Plants & Pots Savings",
          "30% OFF",
          "All Users",
          "Save 30% on selected decorative pots when purchasing indoor plants and planters.",
          "Selected Plants & Pots"
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
            Giving your home a fresh look doesn't have to mean replacing everything or spending beyond your budget. An IKEA promo code can help you save on selected furniture, storage solutions, kitchen essentials, lighting, and home accessories. Whether you're furnishing a new apartment, upgrading your bedroom, or organising a small space, check CouponsBit for available IKEA promo codes and deals before shopping.
          </p>
          <p>
            IKEA offers practical home furnishing solutions for different rooms, lifestyles, and budgets. From sofas and beds to kitchenware and smart storage, you can find products for everyday living in one place. Explore available discounts, compare product options, and check IKEA Family benefits to make your next home improvement purchase more rewarding.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Shop Popular IKEA Categories
          </h3>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Living Room Furniture
          </h4>
          <p>
            Create a comfortable space for relaxing, entertaining, and spending time with family. IKEA offers sofas, sectionals, armchairs, coffee tables, TV units, shelving, and living room storage.
          </p>
          <p>
            You can explore different styles, sizes, and configurations to suit your room. If you're furnishing a smaller apartment, consider compact seating and modular storage that helps you use available space efficiently.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Bedroom Furniture and Mattresses
          </h4>
          <p>
            Refresh your bedroom with beds, mattresses, wardrobes, bedside tables, dressers, and bedding. IKEA offers different bedroom furniture options, from simple bed frames to coordinated storage solutions.
          </p>
          <p>
            Explore mattresses and bedding alongside your furniture to create a more comfortable sleeping space. Check the product dimensions and available sizes before ordering.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Kitchen Furniture and Essentials
          </h4>
          <p>
            Planning a kitchen upgrade? Browse kitchen cabinets, countertops, kitchen islands, sinks, appliances, and organisation accessories. IKEA also offers cookware, dinnerware, cutlery, food storage containers, and other everyday kitchen essentials.
          </p>
          <p>
            Whether you're organising a compact kitchen or planning a larger renovation, compare the available products and planning options before purchasing.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Storage and Organisation
          </h4>
          <p>
            Make better use of your space with wardrobes, shelving units, drawer organisers, storage boxes, shoe cabinets, baskets, and utility carts.
          </p>
          <p>
            These products can help organise bedrooms, kitchens, bathrooms, home offices, and entryways. IKEA's storage systems also offer options for shoppers who want to build solutions around their available space.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Home Décor and Lighting
          </h4>
          <p>
            Small details can change the look and feel of a room. Explore rugs, cushions, curtains, mirrors, wall décor, plants, candles, lamps, and decorative accessories.
          </p>
          <p>
            IKEA also offers smart lighting and other home electronics, giving shoppers options to improve both the appearance and functionality of their homes.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Outdoor and Children's Products
          </h4>
          <p>
            IKEA's range also includes outdoor furniture, patio accessories, children's furniture, toys, storage, and baby products. Whether you're setting up a balcony, creating a play area, or organising a child's bedroom, explore the relevant collections for practical options.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use an IKEA Promo Code
          </h3>
          <p>
            Applying an IKEA promo code is simple when you have an eligible offer.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit the IKEA US website and browse the products you want.</li>
            <li>Add your selected furniture, accessories, or home essentials to your shopping bag.</li>
            <li>Review the offer's terms to check which products qualify.</li>
            <li>If the promotion requires a code, enter it in the designated promo code field during checkout.</li>
            <li>If the offer is an IKEA Family member price, sign in to your IKEA Family account before completing the purchase.</li>
            <li>Review your updated order total and confirm that the discount has been applied.</li>
            <li>Check delivery charges, taxes, and the final amount before placing your order.</li>
          </ol>
          <p>
            Some IKEA Family offers apply automatically at checkout once you sign in and meet the eligibility requirements. Other promotions require a coupon code or an in-store QR code. Follow the instructions attached to your specific offer.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Get More Benefits with IKEA Family
          </h3>
          <p>
            If you shop at IKEA regularly, joining IKEA Family can be a useful way to access additional benefits. The US membership programme is free and offers more than occasional product discounts.
          </p>
          <p>
            Some of its benefits include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Member-only prices:</strong> Access selected offers on furniture and home essentials.</li>
            <li><strong>90-day price protection:</strong> If an eligible product you purchased becomes cheaper within 90 days, you may qualify for a refund of the price difference under the programme terms.</li>
            <li><strong>Free workshops and events:</strong> Explore home furnishing workshops and activities at participating stores.</li>
            <li><strong>Free coffee or tea:</strong> Enjoy this benefit when visiting participating IKEA stores.</li>
            <li><strong>Delivery and collection offers:</strong> Check current member benefits for eligible delivery and collection services.</li>
          </ul>
          <p>
            Remember to sign in to your IKEA Family account or provide your membership details when required. Benefits and promotional terms can change, so check the official programme page before shopping.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Tips to Save More on IKEA Shopping
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Make a shopping list:</strong> Identify what you need before browsing to avoid unnecessary purchases.</li>
            <li><strong>Check the IKEA Offers section:</strong> Look for current product discounts and limited-time promotions.</li>
            <li><strong>Compare IKEA Family prices:</strong> Sign in to see whether your selected products qualify for member savings.</li>
            <li><strong>Explore the As-is section:</strong> IKEA Family members can browse selected gently used, discontinued, and other reduced-price products through the online As-is section.</li>
            <li><strong>Measure your space:</strong> Check furniture dimensions, doorways, and available floor space before ordering.</li>
            <li><strong>Compare delivery options:</strong> Review delivery and collection costs because they can affect the final purchase total.</li>
            <li><strong>Check assembly requirements:</strong> Some furniture requires self-assembly, so review the product details before buying.</li>
          </ul>
          <p>
            These steps can help you find suitable furniture, avoid unnecessary costs, and make better use of available IKEA offers.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Refresh Your Home for Less with CouponsBit
          </h3>
          <p>
            From living room furniture and bedroom essentials to kitchen accessories, lighting, and smart storage, IKEA offers practical ways to improve your home. Before placing your next order, visit CouponsBit to explore available IKEA promo codes, discount offers, and seasonal deals.
          </p>
          <p>
            Compare member prices, check the offer conditions, and apply an eligible coupon at checkout. A little planning can help you find the right home furnishing products while making the most of available savings.
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
              q: "Where can I find an IKEA promo code?",
              a: "Visit CouponsBit to check available IKEA promo codes, coupons, and offers. You can also browse the official IKEA US offers page for current promotions and IKEA Family prices."
            },
            {
              q: "Does IKEA offer discount codes?",
              a: "IKEA offers promotional discounts, but not all of them use a coupon code. Some savings are available through IKEA Family member prices and apply automatically at checkout when you meet the offer requirements."
            },
            {
              q: "Is IKEA Family free to join?",
              a: "Yes. IKEA Family membership is free in the US. Members can access selected product offers, workshops, store benefits, and other programme perks."
            },
            {
              q: "Does IKEA offer student discounts?",
              a: "IKEA US has featured student-specific promotions through its verification programme. Availability, discount amounts, and eligible products can change, so check the official student discount page for current conditions."
            },
            {
              q: "Can I combine an IKEA promo code with IKEA Family offers?",
              a: "Not always. Some IKEA Family offers specifically state that they cannot be combined with other coupons or promotions. Check the terms of both offers before trying to use them together."
            },
            {
              q: "What can I buy at IKEA?",
              a: "IKEA sells furniture, mattresses, storage products, kitchenware, lighting, rugs, home décor, bathroom accessories, outdoor furniture, children's products, and selected home electronics."
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
            Popular IKEA Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "IKEA Promo Code",
              "IKEA Family Member Prices",
              "Living Room Furniture Deals",
              "Storage & Organisation",
              "As-Is Outlet Section",
              "Student Discount Offers",
              "Bedroom & Mattress Sale",
              "Kitchen Cabinets Offers"
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
            Today's Top IKEA Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "IKEA FAMILY OFFERS",
                sub: "Exclusive member prices & 90-day price protection",
              },
              {
                heading: "AS-IS ONLINE SECTION",
                sub: "Save on gently used, open-box & clearance items",
              },
              {
                heading: "STORAGE & ORGANISATION",
                sub: "Discounts on wardrobes, shelving & drawers",
              },
              {
                heading: "STUDENT SPECIALS",
                sub: "Verified student discounts on dorm & desk essentials",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  I
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
                  aria-label={`Shop IKEA: ${deal.heading}`}
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
