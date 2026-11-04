"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Star, Tag, Percent, Users, BadgeCheck, ExternalLink,
  ShieldCheck, PiggyBank, RefreshCw, ChevronDown, CheckCircle, LayoutGrid,
  Car, Wrench, Settings, Gauge, Search,
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
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/walmart-logo_dpz4ux.webp", dealText: "Up To 50% OFF", href: "/stores/walmart-promo-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/target-logo_ereq8r.webp", dealText: "Up To 40% OFF", href: "/stores/target-promo-code" },
  { name: "Nespresso", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/nespresso-logo_evanwx.webp", dealText: "20% OFF First Order", href: "/stores/nespresso-promo-code" },
  { name: "Vuori", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/vuori_euoigj.webp", dealText: "20% OFF First Order", href: "/stores/vuori-discount-code" },
  { name: "Saks Fifth Avenue", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/saks-fifth-avenue_senmoo.webp", dealText: "Up To 40% OFF", href: "/stores/saks-fifth-avenue-discount-code" },
];

const STORE_URL = "https://www.mavis.com";

export default function MavisCouponsContent() {
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
              <span className="text-black font-extrabold">Mavis</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793688836/mavis-logo_fhmyy8.webp" alt="Mavis" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Mavis Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(4.1k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save on tires and auto care with the latest Mavis Promo Code and Mavis Discount Code for November 2026. Enjoy up to $250 OFF select sets of four tires or get up to $160 OFF eligible tire purchases with instant discounts and mail-in rebates. You can also save on wheel alignments, brake services, oil changes, and muffler repairs while taking advantage of financing offers and Mavis Credit Card rewards. Shop verified Mavis deals to keep your vehicle road-ready for less.
                    </p>
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors">
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "7", label: "Offers" },
                    { icon: Percent, val: "20+", label: "Deals" },
                    { icon: Users, val: "600K+", label: "Customers" },
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
                    <div className="w-full h-full bg-gradient-to-br from-[#d4181d] via-[#b01216] to-[#7a0a0d] flex items-center justify-center">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793688836/mavis-logo_fhmyy8.webp" alt="Mavis Discount Code" width={280} height={120} className="max-h-32 w-auto object-contain filter brightness-0 invert" fetchPriority="high" />
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
                { icon: PiggyBank, title: "Big Savings", sub: "Save more on every service" },
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
                  <h2 className="text-2xl font-black text-black leading-tight">Mavis Discount Codes & Offers</h2>
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Book Mavis Service: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Mavis?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Mavis Discount Tire is one of the largest independent tire dealers and auto service chains in the United States. The company operates hundreds of service centres primarily across the northeastern US, offering tires, oil changes, brake services, wheel alignments, and general vehicle maintenance.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Mavis carries a wide selection of tire brands including Michelin, Goodyear, Bridgestone, Continental, and more. Customers can shop tires online, book appointments, and receive competitive pricing on auto services.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand is known for convenient online booking, transparent pricing, and a satisfaction guarantee across its service locations.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Services</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Car, name: "Tires", count: "10+", color: "text-red-700", href: "/categories/more" },
                      { icon: Wrench, name: "Oil Changes", count: "5+", color: "text-blue-500", href: "/categories/more" },
                      { icon: Settings, name: "Brake Service", count: "5+", color: "text-green-500", href: "/categories/more" },
                      { icon: Gauge, name: "Wheel Alignment", count: "5+", color: "text-teal-500", href: "/categories/more" },
                      { icon: Search, name: "Free Inspection", count: "Available", color: "text-orange-500", href: "/categories/more" },
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
                  <h3 className="text-black font-black text-lg mb-8">What Services Does Mavis Offer?</h3>
                  <div className="space-y-6">
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">
                      Mavis provides a comprehensive range of tire and auto services. Here are the main services available at Mavis locations.
                    </p>
                    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>1. Tires:</strong> Shop and install tires from top brands. Mavis carries all-season, winter, performance, and truck tires. Book online and get installation included at your selected location.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>2. Oil Changes:</strong> Choose from conventional, synthetic blend, or full synthetic oil change options. Mavis technicians use quality oil and replace the filter as part of the service.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>3. Brake Services:</strong> Mavis offers brake pad replacement, rotor resurfacing, and brake system inspections. Check coupons for available savings on front or rear brake services.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>4. Wheel Alignment:</strong> Proper alignment improves handling and reduces uneven tire wear. Mavis offers alignment checks and adjustments at participating service centres.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>5. Tire Rotation and Balancing:</strong> Regular rotation helps extend tire life. Mavis may include free tire rotation and balance with qualifying tire purchase packages.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>6. Free Vehicle Inspection:</strong> Mavis offers a complimentary multi-point vehicle inspection covering brakes, tires, suspension, and other key systems — with no purchase required.</span>
                      </p>
                    </div>
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

              <div className="prose max-w-none text-justify">
                <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                  Mavis Discount Code: Save on Tires, Oil Changes & Auto Services
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
                        ["Mavis 4-Tire Package Discount", "$50 OFF", "All Customers", "Save $50 when purchasing any set of 4 qualifying tires.", "Set of 4 Tires"],
                        ["Mavis Oil Change Coupon", "$20 OFF", "All Customers", "Save $20 on conventional or synthetic oil change service.", "Oil Change Service"],
                        ["Mavis Free Tire Rotation", "Free Service", "Qualifying Purchases", "Free tire rotation and balance with qualifying tire purchase.", "Tire Purchases"],
                        ["Mavis Brake Service Discount", "$25 OFF", "All Customers", "Save $25 on qualifying front or rear brake pad replacement.", "Brake Services"],
                        ["Mavis Premium Tire Package", "Up to $100 OFF", "All Customers", "Big savings on selected premium tire packages and brands.", "Premium Tire Packages"],
                        ["Mavis Alignment Service Coupon", "$15 OFF", "All Customers", "Save $15 on a qualifying wheel alignment service.", "Wheel Alignment"],
                        ["Mavis Free Inspection Offer", "Free Inspection", "All Customers", "Complimentary multi-point vehicle inspection at participating locations.", "Vehicle Inspection"],
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
                    Need new tires, an oil change, or a brake service? Mavis Discount Tire offers competitive pricing on a full range of auto services. Before booking, check CouponsBit for a Mavis discount code to save on your next service visit.
                  </p>
                  <p>
                    Whether you need a standard tire replacement, synthetic oil change, or alignment check, Mavis has options across hundreds of service locations. Look for an available coupon before confirming your appointment.
                  </p>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">How to Find a Mavis Discount Code on CouponsBit</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Open CouponsBit and visit the Mavis store page.</li>
                    <li>Browse the listed discount codes and service coupons.</li>
                    <li>Select an offer that matches your service needs.</li>
                    <li>Check the terms, including location eligibility and service types.</li>
                    <li>Copy the coupon code or note the offer details.</li>
                    <li>Visit Mavis's website to find a nearby location and book your appointment.</li>
                    <li>Present the coupon at the service centre or enter the code during online booking.</li>
                  </ol>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">How to Save More at Mavis</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Buy 4 tires at once:</strong> Mavis offers $50 off when you purchase a full set of 4 qualifying tires.</li>
                    <li><strong>Book online:</strong> Online bookings may come with exclusive pricing or promotional offers not available at walk-in.</li>
                    <li><strong>Check seasonal promotions:</strong> Mavis often runs tire sales during spring and fall seasons when many drivers switch between tire types.</li>
                    <li><strong>Use the free inspection:</strong> A complimentary multi-point inspection can identify issues before they become costly repairs.</li>
                    <li><strong>Compare tire brands:</strong> Mavis carries multiple price tiers from economy to premium tires — compare options to find the best value for your needs.</li>
                  </ul>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">Shop Mavis and Find More Savings with CouponsBit</h3>
                  <p>From tire purchases and oil changes to brake services and wheel alignments, Mavis offers reliable auto services at competitive prices. Before booking your next service, visit CouponsBit to explore available Mavis discount codes and service coupons.</p>

                  {!isReadMore && (
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
                  )}
                </div>

                <button onClick={() => setIsReadMore(!isReadMore)} className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline">
                  {isReadMore ? "Read Less" : "Read More"}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
                </button>

                <div className="faq-section mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Mavis Discount Codes</h3>
                  {[
                    { q: "1. Where can I find a Mavis discount code?", a: "Visit the Mavis page on CouponsBit to check available discount codes and service coupons. You can also check Mavis's official website for current promotional offers." },
                    { q: "2. Does Mavis offer discounts on tires?", a: "Yes. Mavis regularly offers discounts on tire purchases, including $50 off when you buy a set of 4 qualifying tires. Check CouponsBit or the Mavis website for current tire deals." },
                    { q: "3. Does Mavis offer oil change coupons?", a: "Yes. Mavis offers oil change service coupons that can save you money on conventional and synthetic oil change services. Check CouponsBit for the latest available offers." },
                    { q: "4. Can I book a Mavis appointment online?", a: "Yes. Mavis allows customers to schedule tire, oil change, brake, and alignment services online through its website. You can find a nearby location and book a convenient appointment time." },
                    { q: "5. Does Mavis offer free tire rotation?", a: "Yes. Mavis may offer free tire rotation and balance with qualifying tire purchases. Check the current offer terms on CouponsBit or the Mavis website for eligibility details." },
                    { q: "6. What brands of tires does Mavis carry?", a: "Mavis carries a wide selection of major tire brands including Michelin, Goodyear, Bridgestone, Continental, Pirelli, and more. Visit a Mavis location or check online for available brands and sizes." },
                    { q: "7. Where do I redeem a Mavis discount code?", a: "You can redeem Mavis discount coupons when booking online or at the service centre. Present the coupon at the time of your appointment or enter the code during online booking." },
                  ].map((faq, i) => (
                    <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors">
                        <span className="text-black font-black text-base">{faq.q}</span>
                        <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa] rotate-180")}>
                          <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                        </div>
                      </button>
                      <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                        <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-10">
                <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Mavis Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Mavis Discount Code",
                      "$50 Off 4 Tires",
                      "Oil Change Coupon",
                      "Brake Service Deal",
                      "Free Tire Rotation",
                      "Wheel Alignment Savings",
                      "Michelin Tire Deals",
                      "Free Vehicle Inspection"
                    ].map((tag) => (
                      <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Mavis Deals</h3>
                  <div className="space-y-6">
                    {[
                      { heading: "$50 OFF 4 TIRES", sub: "Save $50 when you buy a set of 4 qualifying tires" },
                      { heading: "$20 OFF OIL CHANGE", sub: "Save on your next conventional or synthetic oil change" },
                      { heading: "FREE INSPECTION", sub: "Complimentary multi-point vehicle inspection" },
                      { heading: "FREE TIRE ROTATION", sub: "Free rotation and balance with tire purchase" },
                    ].map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">M</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Book Mavis: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
