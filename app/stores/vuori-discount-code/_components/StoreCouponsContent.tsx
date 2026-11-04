"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Star, Tag, Percent, Users, BadgeCheck, ExternalLink,
  ShieldCheck, PiggyBank, RefreshCw, ChevronDown, CheckCircle, LayoutGrid,
  Shirt, Package, Dumbbell, Truck, Search,
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
  { name: "Ariat", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793614080/Ariat-Logo_fsk8nx.webp", dealText: "Up To 25% OFF", href: "/stores/ariat-promo-code" },
  { name: "Nike", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp", dealText: "Up To 60% OFF", href: "/stores/nike-discount-code" },
  { name: "Adidas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788783181/adidas-logo_brulmo.webp", dealText: "Up To 50% OFF", href: "/stores/adidas-promo-code" },
  { name: "Saks Fifth Avenue", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/saks-fifth-avenue_senmoo.webp", dealText: "Up To 40% OFF", href: "/stores/saks-fifth-avenue-discount-code" },
  { name: "Abercrombie", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp", dealText: "Up To 50% OFF", href: "/stores/abercrombie-discount-code" },
  { name: "Zenni Optical", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793614081/zenni-optical-logo_gy9ssm.webp", dealText: "BOGO 40% OFF", href: "/stores/zenni-optical-promo-code" },
];

const STORE_URL = "https://vuoriclothing.com";

export default function VuoriCouponsContent() {
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
              <span className="text-black font-extrabold">Vuori</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793688836/vuori_euoigj.webp" alt="Vuori" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Vuori Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.8</span>
                      <span className="text-gray-600 font-bold text-sm">(7.3k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save on premium activewear with the latest Vuori Promo Code and Vuori Discount Code for November 2026. Enjoy up to 40% OFF select performance apparel or get 25% OFF eligible Vuori clothing and accessories. You can also unlock 20% OFF through the referral program and enjoy free standard shipping on qualifying orders over $75. Shop comfortable joggers, leggings, shorts, hoodies, and workout essentials while taking advantage of verified Vuori deals and seasonal savings.
                    </p>
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors">
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "7", label: "Offers" },
                    { icon: Percent, val: "40+", label: "Deals" },
                    { icon: Users, val: "1.1M+", label: "Shoppers" },
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
                    <div className="w-full h-full bg-gradient-to-br from-[#1a3a4a] via-[#1f4a60] to-[#0d2233] flex items-center justify-center">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793688836/vuori_euoigj.webp" alt="Vuori Discount Code" width={280} height={120} className="max-h-32 w-auto object-contain filter brightness-0 invert" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Vuori Discount Codes & Offers</h2>
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Vuori: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Vuori?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Vuori is a California-based activewear brand known for designing performance clothing that works equally well in the gym, on the trail, and in everyday life. The brand focuses on high-quality fabrics, versatile styles, and a laid-back coastal aesthetic.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its collections include performance shorts, joggers, hoodies, tees, leggings, and outerwear for men and women. Vuori is recognised for its soft, durable fabrics and designs that transition easily from workouts to casual wear.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand offers free shipping on orders over $75, free returns, and a student discount for verified students.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Shirt, name: "Performance Shorts", count: "15+", color: "text-blue-700", href: "/categories/fashion" },
                      { icon: Package, name: "Joggers & Pants", count: "12+", color: "text-teal-500", href: "/categories/fashion" },
                      { icon: Dumbbell, name: "Hoodies & Tops", count: "20+", color: "text-green-500", href: "/categories/fashion" },
                      { icon: Truck, name: "Free Shipping Items", count: "10+", color: "text-orange-500", href: "/categories/fashion" },
                      { icon: Search, name: "Sale Styles", count: "25+", color: "text-red-500", href: "/categories/fashion" },
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
                  <h3 className="text-black font-black text-lg mb-8">What Can You Shop for at Vuori?</h3>
                  <div className="space-y-6">
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">
                      Vuori offers premium activewear and everyday clothing for active lifestyles. Here are the main categories to explore.
                    </p>
                    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>1. Performance Shorts:</strong> Vuori's shorts collection includes training shorts, running shorts, and hybrid styles for the gym and outdoor activities. Known for soft, quick-dry fabrics and functional designs.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>2. Joggers and Pants:</strong> Shop performance joggers, casual pants, and technical bottoms suitable for yoga, training, travel, and everyday wear. Available in men's and women's styles.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>3. Hoodies and Sweatshirts:</strong> Vuori's hoodies and sweatshirts feature premium fabrics and relaxed fits for post-workout comfort and daily wear. Available in pullover and zip-up styles.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>4. Tees and Tops:</strong> Explore a range of performance tees, tank tops, and training shirts. Designed for breathability and comfort during active use and casual outings.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>5. Leggings and Women's Activewear:</strong> Vuori offers women's leggings, bras, tanks, and shorts designed for yoga, running, and everyday active wear.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>6. Outerwear:</strong> Shop lightweight jackets, vests, and layering pieces for transitional weather and outdoor activities.</span>
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
                  Vuori Discount Code: Save on Activewear, Shorts & Performance Clothing
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
                        ["Vuori First Order Welcome Offer", "20% OFF", "New Customers", "Sign up for emails to save 20% on your first qualifying order.", "First Purchase"],
                        ["Vuori Free Shipping Offer", "Free Shipping", "All Users", "Free standard shipping on qualifying orders over $75.", "Orders $75+"],
                        ["Vuori Sale Styles Discount", "15% OFF", "All Users", "Extra savings on eligible marked-down activewear styles.", "Sale Items"],
                        ["Vuori Student Discount", "10% OFF", "Verified Students", "Exclusive 10% discount for verified students on qualifying items.", "Student Purchases"],
                        ["Vuori Seasonal Sale", "Up to 40% OFF", "All Users", "Deep discounts across the Vuori seasonal sale collection.", "Sale Collection"],
                        ["Vuori Free Returns", "Free Returns", "All Users", "Free returns on qualifying domestic orders. Terms apply.", "Qualifying Orders"],
                        ["Vuori Extra Savings Offer", "Extra 25% OFF", "All Users", "Extra savings on selected activewear styles for a limited time.", "Selected Items"],
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
                    Looking for premium activewear that performs as well as it looks? Vuori creates high-quality clothing for workouts, outdoor activities, and everyday wear. Before shopping, check CouponsBit for a Vuori discount code and explore available offers on activewear.
                  </p>
                  <p>
                    Whether you need performance shorts, comfortable joggers, or versatile hoodies, Vuori has options for different activities and lifestyles. Browse the collection and look for a suitable discount before completing your order.
                  </p>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">How to Find a Vuori Discount Code on CouponsBit</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Open CouponsBit and visit the Vuori store page.</li>
                    <li>Browse the listed discount codes and available offers.</li>
                    <li>Select an offer that matches your shopping needs.</li>
                    <li>Check the terms, including product eligibility and exclusions.</li>
                    <li>Copy the discount code if required.</li>
                    <li>Visit Vuori's website and add your selected items to the cart.</li>
                    <li>Enter your code at checkout in the promo code field and click Apply.</li>
                    <li>Check the updated total before completing your purchase.</li>
                  </ol>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">How to Save More at Vuori</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Sign up for emails:</strong> New subscribers receive 20% off their first order.</li>
                    <li><strong>Qualify for free shipping:</strong> Orders over $75 ship free.</li>
                    <li><strong>Explore the sale section:</strong> The Vuori sale collection offers up to 40% off selected styles.</li>
                    <li><strong>Use the student discount:</strong> Verified students receive 10% off qualifying purchases.</li>
                    <li><strong>Shop with free returns:</strong> Buy with confidence knowing returns are free on qualifying orders.</li>
                  </ul>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">Shop Vuori and Find More Savings with CouponsBit</h3>
                  <p>From performance shorts and joggers to hoodies and leggings, Vuori offers premium activewear for an active lifestyle. Before placing your order, visit CouponsBit to explore available Vuori discount codes and promotional offers.</p>
                  <p>Compare the offers, check their conditions, and apply an eligible code to your purchase. Find the Vuori activewear you need while making the most of your shopping budget.</p>

                  {!isReadMore && (
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
                  )}
                </div>

                <button onClick={() => setIsReadMore(!isReadMore)} className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline">
                  {isReadMore ? "Read Less" : "Read More"}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
                </button>

                <div className="faq-section mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Vuori Discount Codes</h3>
                  {[
                    { q: "1. Where can I find a Vuori discount code?", a: "Visit the Vuori page on CouponsBit to check available discount codes and promo offers. You can also visit Vuori's official website for current promotional discounts." },
                    { q: "2. Does Vuori offer a first-order discount?", a: "Yes. Vuori offers new customers 20% off their first order when they sign up for emails. The offer applies to qualifying activewear and apparel purchases." },
                    { q: "3. Does Vuori offer free shipping?", a: "Yes. Vuori offers free standard shipping on qualifying orders over $75. Check the current terms on the Vuori website for eligibility and shipping options." },
                    { q: "4. Does Vuori offer free returns?", a: "Yes. Vuori offers free returns on qualifying domestic orders. Items must be in their original condition. Check the Vuori return policy for full details and timeframes." },
                    { q: "5. Does Vuori offer a student discount?", a: "Yes. Vuori offers a student discount for verified students. Verify your student status through the designated verification service to unlock the exclusive discount on qualifying purchases." },
                    { q: "6. What kind of activewear does Vuori sell?", a: "Vuori offers a range of performance activewear including shorts, joggers, hoodies, tees, leggings, and outerwear for men and women. Their clothing is designed for yoga, running, and everyday active use." },
                    { q: "7. Where do I enter a Vuori discount code?", a: "Add your selected items to the cart and proceed to checkout. Enter your discount code in the promo code field and click Apply to see the updated order total before completing your purchase." },
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Vuori Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Vuori Discount Code",
                      "Performance Shorts",
                      "Activewear Deals",
                      "20% First Order Discount",
                      "Free Shipping Offer",
                      "Student Discount",
                      "Yoga Clothing Savings",
                      "Free Returns Policy"
                    ].map((tag) => (
                      <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Vuori Deals</h3>
                  <div className="space-y-6">
                    {[
                      { heading: "20% OFF FIRST ORDER", sub: "Sign up for emails and save on your first purchase" },
                      { heading: "FREE SHIPPING $75+", sub: "Free standard shipping on qualifying orders" },
                      { heading: "FREE RETURNS", sub: "Free returns on qualifying domestic orders" },
                      { heading: "STUDENT DISCOUNT", sub: "10% off for verified students on qualifying items" },
                    ].map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">V</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Vuori: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
