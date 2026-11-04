"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Star, Tag, Percent, Users, BadgeCheck, ExternalLink,
  ShieldCheck, PiggyBank, RefreshCw, ChevronDown, CheckCircle, LayoutGrid,
  Gift, Package, Apple, Truck, Search,
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
  { name: "Nespresso", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/nespresso-logo_evanwx.webp", dealText: "20% OFF First Order", href: "/stores/nespresso-promo-code" },
  { name: "Saks Fifth Avenue", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/saks-fifth-avenue_senmoo.webp", dealText: "Up To 40% OFF", href: "/stores/saks-fifth-avenue-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/walmart-logo_dpz4ux.webp", dealText: "Up To 50% OFF", href: "/stores/walmart-promo-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/target-logo_ereq8r.webp", dealText: "Up To 40% OFF", href: "/stores/target-promo-code" },
  { name: "Vuori", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/vuori_euoigj.webp", dealText: "20% OFF First Order", href: "/stores/vuori-discount-code" },
];

const STORE_URL = "https://www.harryanddavid.com";

export default function HarryAndDavidCouponsContent() {
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
              <span className="text-black font-extrabold">Harry and David</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793688836/harryand-david-logo_psaq9y.webp" alt="Harry and David" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Harry and David Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(5.4k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest Harry and David Discount Code and Harry and David Promo Code for November 2026. Enjoy up to 25% OFF when you buy more gourmet gifts and 20% OFF on select Fruit-of-the-Month Club collections. You can also save on Harry's Gift Box, Berry Breakfast Box, Cheryl's Cookie Flavor Box, Tower of Treats®, gourmet popcorn tins, fruit baskets, and other premium gift collections. Browse verified Harry and David deals and make every holiday or special occasion more affordable.
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
                    { icon: Users, val: "800K+", label: "Shoppers" },
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
                    <div className="w-full h-full bg-gradient-to-br from-[#5a3020] via-[#7a4030] to-[#3d1f10] flex items-center justify-center">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793688836/harryand-david-logo_psaq9y.webp" alt="Harry and David Promo Code" width={280} height={120} className="max-h-32 w-auto object-contain filter brightness-0 invert" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Harry and David Promo Codes & Offers</h2>
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Harry and David: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Harry and David?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Harry and David is an American gourmet food and gift company known for its premium gift baskets, fresh fruit, chocolates, wines, and specialty food items. The brand has been in operation for over 85 years and is particularly associated with its Royal Riviera pears and tower-style gift boxes.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its collection includes curated gift baskets for holidays, birthdays, corporate gifting, and special occasions. Harry and David is recognised for quality ingredients, attractive packaging, and a wide selection of seasonal and year-round gourmet offerings.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand also offers a Gold Membership programme that provides members with 10% off every order and exclusive access to member prices and offers.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Gift, name: "Gift Baskets", count: "25+", color: "text-amber-700", href: "/categories/more" },
                      { icon: Apple, name: "Fresh Fruit", count: "10+", color: "text-red-500", href: "/categories/more" },
                      { icon: Package, name: "Chocolates & Sweets", count: "20+", color: "text-brown-500", href: "/categories/more" },
                      { icon: Truck, name: "Free Shipping Items", count: "15+", color: "text-teal-500", href: "/categories/more" },
                      { icon: Search, name: "Holiday Gifts", count: "30+", color: "text-orange-500", href: "/categories/more" },
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
                  <h3 className="text-black font-black text-lg mb-8">What Can You Shop for at Harry and David?</h3>
                  <div className="space-y-6">
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">
                      Harry and David offers a wide range of gourmet foods and gift options. Here are the main categories to explore.
                    </p>
                    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>1. Gift Baskets:</strong> Harry and David's signature gift baskets include curated selections of fruit, chocolates, cheeses, meats, crackers, and specialty snacks. Options range from single-item gifts to elaborate tower arrangements.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>2. Fresh Fruit:</strong> The brand is particularly known for its Royal Riviera pears, along with apples, cherries, and other seasonal fresh fruits delivered directly to the recipient.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>3. Chocolates and Sweets:</strong> Explore assorted chocolates, truffles, caramels, and confections. Harry and David offers standalone sweet selections as well as chocolate-included gift sets.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>4. Wines and Spirits:</strong> Shop Harry and David's wine collections, including red, white, and sparkling options. Wine and food pairing gift sets are also available for special occasions.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>5. Specialty Foods:</strong> Browse a selection of artisan cheeses, gourmet meats, jams, spreads, crackers, and other pantry items available individually or as part of gift arrangements.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-black font-black">•</span>
                        <span><strong>6. Corporate Gifts:</strong> Harry and David offers corporate gifting solutions with customisation options, bulk ordering, and branded packaging for business gifting needs.</span>
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
                  Harry and David Promo Code: Save on Gift Baskets, Gourmet Food & More
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
                        ["Harry and David Sitewide Offer", "Up to 30% OFF", "All Users", "Short-term promotional discount on eligible sitewide orders.", "Sitewide Purchases"],
                        ["Harry and David First Order Discount", "20% OFF", "New Customers", "Sign up for emails to save 20% on your first qualifying order.", "First Purchase"],
                        ["Harry and David Free Shipping", "Free Shipping", "All Users", "Free standard delivery on qualifying orders above threshold.", "Qualifying Orders"],
                        ["Harry and David Gift Basket Savings", "15% OFF", "All Users", "Discount on a wide selection of gift basket styles and sizes.", "Gift Baskets"],
                        ["Harry and David Clearance Sale", "Up to 40% OFF", "All Users", "Deep discounts on selected clearance items while stock lasts.", "Clearance Items"],
                        ["Harry and David Gold Member Offer", "10% OFF", "Gold Members", "Exclusive member pricing on all qualifying year-round orders.", "Member Purchases"],
                        ["Harry and David Bundle Savings", "Bundle Deal", "All Users", "Savings when ordering multiple gift sets or bundle packages.", "Bundle Orders"],
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
                    Looking for a thoughtful gift or gourmet treat? Harry and David offers premium gift baskets, fresh fruit, chocolates, and specialty foods for every occasion. Before shopping, check CouponsBit for a Harry and David promo code and explore available offers on gifts and food.
                  </p>
                  <p>
                    Whether you need a holiday gift basket, a fresh fruit delivery, or a curated wine and cheese set, Harry and David has options for different occasions and budgets. Browse the collection and look for a suitable discount before completing your order.
                  </p>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">How to Find a Harry and David Promo Code on CouponsBit</h3>
                  <p>Before ordering from Harry and David, visit CouponsBit to check the latest available promotions.</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Open CouponsBit and visit the Harry and David store page.</li>
                    <li>Browse the listed promo codes and available discounts.</li>
                    <li>Select an offer that matches your shopping requirements.</li>
                    <li>Check the terms, including product exclusions and eligibility.</li>
                    <li>Copy the promo code if the offer requires one.</li>
                    <li>Visit Harry and David's website and add your chosen products to the cart.</li>
                    <li>Enter your code in the promotional code field at checkout and click Apply.</li>
                    <li>Check the updated total before completing your purchase.</li>
                  </ol>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">How to Save More at Harry and David</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Sign up for emails:</strong> New subscribers receive 20% off their first order.</li>
                    <li><strong>Join Gold Membership:</strong> Members receive 10% off every order year-round plus exclusive member prices.</li>
                    <li><strong>Shop the sale section:</strong> Check the clearance area for up to 40% off selected items.</li>
                    <li><strong>Order bundle sets:</strong> Buying multiple gift items together may offer additional savings.</li>
                    <li><strong>Watch for seasonal sales:</strong> Harry and David offers holiday promotions during key gifting periods.</li>
                  </ul>

                  <h3 className="text-xl font-black text-black mt-8 mb-4">Shop Harry and David and Find More Savings with CouponsBit</h3>
                  <p>From signature pear gift towers and chocolate assortments to wine pairings and holiday baskets, Harry and David offers premium gifting options for every occasion. Visit CouponsBit before placing your order to explore available Harry and David promo codes and discount offers.</p>
                  <p>Compare the offers, check their conditions, and apply an eligible code to your purchase. Send a thoughtful gift while making the most of your gifting budget.</p>

                  {!isReadMore && (
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
                  )}
                </div>

                <button onClick={() => setIsReadMore(!isReadMore)} className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline">
                  {isReadMore ? "Read Less" : "Read More"}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
                </button>

                <div className="faq-section mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Harry and David Promo Codes</h3>
                  {[
                    { q: "1. Where can I find a Harry and David promo code?", a: "Visit the Harry and David page on CouponsBit to check available promo codes and discounts. You can also visit Harry and David's official website for current promotional offers." },
                    { q: "2. Does Harry and David offer a first-order discount?", a: "Yes. Harry and David offers new customers 20% off their first order when they sign up for emails. The offer applies to qualifying gift baskets and food items." },
                    { q: "3. Does Harry and David offer free shipping?", a: "Yes. Harry and David offers free shipping on qualifying orders. Check the current threshold and shipping terms on the Harry and David website for full details." },
                    { q: "4. What is the Harry and David Gold Membership?", a: "Harry and David Gold Membership is a loyalty programme that gives members 10% off every order year-round, along with exclusive member prices, birthday gifts, and other perks." },
                    { q: "5. Can I personalise a Harry and David gift basket?", a: "Yes. Harry and David offers personalisation options on many gift baskets and gift sets, including custom ribbon messages and selected product additions." },
                    { q: "6. What is Harry and David's return policy?", a: "Harry and David stands behind its products and offers a satisfaction guarantee. If you are not satisfied with your purchase, contact customer service within a reasonable time frame for a replacement or refund." },
                    { q: "7. Where do I enter a Harry and David promo code?", a: "Add your selected items to the cart and proceed to checkout. Enter your promo code in the promotional code field and click Apply to see the updated order total." },
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Harry and David Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Harry and David Promo Code",
                      "Gift Baskets",
                      "Royal Riviera Pears",
                      "Chocolate Assortments",
                      "20% First Order Discount",
                      "Gold Membership Benefits",
                      "Holiday Gift Sets",
                      "Corporate Gifting"
                    ].map((tag) => (
                      <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Harry and David Deals</h3>
                  <div className="space-y-6">
                    {[
                      { heading: "20% OFF FIRST ORDER", sub: "Sign up for emails and save on your first purchase" },
                      { heading: "GOLD MEMBERSHIP", sub: "10% off every order year-round" },
                      { heading: "CLEARANCE SALE", sub: "Up to 40% off selected gift items" },
                      { heading: "FREE SHIPPING", sub: "Free delivery on qualifying orders" },
                    ].map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">H</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Harry and David: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
