"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Star, Tag, Percent, Users, BadgeCheck, ExternalLink,
  ShieldCheck, PiggyBank, RefreshCw, ChevronDown, CheckCircle, LayoutGrid,
  Glasses, Eye, Sun, Monitor, Search,
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
  { name: "Fytoo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/fytoo-logo_n0qmqz.webp", dealText: "Up To 40% OFF", href: "/stores/fytoo-discount-code" },
  { name: "Adidas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788783181/adidas-logo_brulmo.webp", dealText: "Up To 50% OFF", href: "/stores/adidas-promo-code" },
  { name: "Nike", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp", dealText: "Up To 60% OFF", href: "/stores/nike-discount-code" },
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Flat 75% OFF", href: "/stores/etsy-coupon-code" },
  { name: "Birkenstock", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1792648468/birkenstork_logo_nin4ru.webp", dealText: "Up To 50% OFF", href: "/stores/birkenstock-promo-code" },
];

const STORE_URL = "https://www.zennioptical.com";

export default function ZenniOpticalCouponsContent() {
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
              <span className="text-black font-extrabold">Zenni Optical</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793614081/zenni-optical-logo_gy9ssm.webp" alt="Zenni Optical" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Zenni Optical Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(9.3k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more on affordable eyewear with the latest Zenni Optical Promo Code and Zenni Optical Discount Code for November 2026. Enjoy Buy 1, Get 1 40% OFF on eligible frames or save up to 30% OFF on selected prescription glasses and sunglasses. New customers can also receive 15% OFF their first order over $65 with free standard shipping on qualifying purchases. Browse stylish, budget-friendly frames, sunglasses, and prescription lenses while taking advantage of verified Zenni Optical deals.
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
                    { icon: Users, val: "3M+", label: "Shoppers" },
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
                    <div className="w-full h-full bg-gradient-to-br from-[#00A3FF] via-[#0077CC] to-[#004A99] flex items-center justify-center">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793614081/zenni-optical-logo_gy9ssm.webp" alt="Zenni Optical Promo Code" width={280} height={120} className="max-h-32 w-auto object-contain" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Zenni Optical Promo Codes & Offers</h2>
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Zenni Optical: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Zenni Optical?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Zenni Optical is an online eyewear retailer offering affordable prescription and non-prescription glasses. Its collection includes frames for men, women, and children, along with different lens types, coatings, and customization options.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Instead of limiting shoppers to traditional optical-store selections, Zenni lets customers browse frames online and customize their lenses during the ordering process. Its range includes everyday prescription glasses, reading glasses, sunglasses, blue-light-blocking lenses, and specialty eyewear.

                  </p>

                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand also offers tools such as Virtual Try-On to help shoppers explore how different frames may look before purchasing. 

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Eyewear Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Glasses, name: "Prescription Glasses", count: "200+", color: "text-blue-500", href: "/categories/eyewear" },
                      { icon: Sun, name: "Prescription Sunglasses", count: "100+", color: "text-yellow-500", href: "/categories/eyewear" },
                      { icon: Monitor, name: "Blue Light Glasses", count: "80+", color: "text-purple-500", href: "/categories/eyewear" },
                      { icon: Eye, name: "Progressive Lenses", count: "60+", color: "text-green-500", href: "/categories/eyewear" },
                      { icon: Search, name: "Kids' Eyewear", count: "40+", color: "text-orange-500", href: "/categories/eyewear" },
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
                  <Link href="/categories/eyewear" className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline">View Eyewear →</Link>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    What Can You Shop for at Zenni?
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Zenni offers eyewear for different prescriptions, styles, and everyday needs. Here are some of the main categories worth exploring.
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>1. Prescription Glasses:</strong> Find frames for single-vision, bifocal, and progressive prescriptions. You can explore different shapes, colors, materials, and sizes to find glasses that suit your preferences.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>2. Sunglasses:</strong> Shop regular and prescription sunglasses in different frame styles. Zenni also offers polarized lenses, tinted lenses, and gradient options for customers who want different levels of glare reduction and style.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>3. Blokz Blue-Light Glasses:</strong> Zenni's Blokz lens range is designed for people who spend time using computers, phones, and other digital screens. You can select compatible blue-light lens options while customizing your glasses.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>4. Reading Glasses:</strong> Browse non-prescription reading glasses in different magnification strengths. Zenni also offers lens options such as photochromic and Blokz lenses for selected readers.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>5. Kids' Glasses:</strong> Explore eyewear designed for children, including flexible frame options. Frame material and fit are important considerations when choosing glasses for younger wearers.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>6. Specialty Eyewear and Accessories:</strong> Zenni also offers selected safety glasses, sport protective goggles, clip-ons, and eyewear accessories. Availability of prescription and lens options depends on the product.</span>
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

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Zenni Promo Code: Save on Prescription Glasses & Sunglasses
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
          "Zenni Optical First Order Welcome Offer",
          "15% OFF + Free Shipping",
          "First-time Customers",
          "Valid on first orders of $65 or more. Includes free standard shipping on eligible orders.",
          "First Qualifying Purchase"
        ],
        [
          "Zenni Optical BOGO 40% Off Deal",
          "BOGO 40% OFF",
          "All Users",
          "Buy one pair of frames and get the second pair at 40% off. Mix and match prescription styles.",
          "Select Frames & Glasses"
        ],
        [
          "Zenni Optical Sale Styles Clearance",
          "Up to 30% OFF",
          "All Users",
          "Savings on selected sale glasses, prescription frames, and sunglasses while stock lasts.",
          "Selected Sale Styles"
        ],
        [
          "Zenni Optical First Purchase Discount",
          "10% OFF",
          "New Customers",
          "Sign up to receive 10% off your first eligible purchase across glasses and accessories.",
          "First Purchase"
        ],
        [
          "Zenni Optical SMS Subscriber Offer",
          "20% OFF",
          "New SMS Subscribers",
          "Valid on orders of $75 or more for new SMS subscribers.",
          "Orders $75+"
        ],
        [
          "Zenni Optical Best-Selling Glasses Offer",
          "Up to 30% OFF",
          "All Users",
          "Discounted pricing on select best-selling prescription and non-prescription frames.",
          "Selected Glasses"
        ],
        [
          "Zenni Optical Spartan Frames Sale",
          "36% OFF (From $22.99)",
          "All Users",
          "Lightweight Spartan frames starting at $22.99. Compatible with various prescription lenses.",
          "Spartan Glasses"
        ],
        [
          "Zenni Optical Dunk Wall Frames Sale",
          "19% OFF ($27.50)",
          "All Users",
          "Highly-rated Dunk Wall frames reduced to $27.50 while stock lasts.",
          "Dunk Wall Frames"
        ],
        [
          "Zenni Optical Aviator Sunglasses Sale",
          "14% OFF ($30.99)",
          "All Users",
          "Classic non-prescription outdoor aviator sunglasses for $30.99.",
          "Aviator Sunglasses"
        ],
        [
          "Zenni Optical Foldable Square Sunglasses",
          "14% OFF ($28.50)",
          "All Users",
          "Compact, travel-ready foldable square sunglasses reduced to $28.50.",
          "Foldable Square Sunglasses"
        ],
        [
          "Zenni Optical Next Order Discount",
          "10% OFF",
          "All Users",
          "Online offer valid on eligible frames, sunglasses, and prescription lens upgrades.",
          "Eligible Next Order"
        ],
        [
          "Zenni Optical Hero Savings Offer",
          "10% OFF",
          "Military, First Responders, Medical Staff",
          "Exclusive verification-based 10% discount for everyday heroes and medical workers.",
          "Qualifying Purchases"
        ],
        [
          "Zenni Optical Bank Partner Offer",
          "10% OFF",
          "Qualifying Bank Cardholders",
          "Save 10% on qualifying prescription glasses and sunglasses orders.",
          "Qualifying Orders"
        ],
        [
          "Zenni Optical New Glasses Savings",
          "10% OFF",
          "All Users",
          "10% off selected frames; works with both prescription and non-prescription options.",
          "Selected New Glasses"
        ],
        [
          "Zenni Optical Sitewide Gift Voucher",
          "10% OFF",
          "All Users",
          "Sitewide savings on men's, women's, and kids' glasses, sunglasses, and lenses.",
          "Sitewide Eligible Orders"
        ],
        [
          "Zenni Optical General Purchase Voucher",
          "10% OFF",
          "All Users",
          "Valid across daily eyewear and premium frame collections for a limited time.",
          "Qualifying Purchases"
        ],
        [
          "Zenni Optical Evo's Favorites Offer",
          "10% OFF",
          "All Users",
          "Save 10% on hand-picked Evo favorite frames. Suitable for gaming and daily wear.",
          "Evo's Favorite Frames"
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
            Looking for stylish eyewear without stretching your budget? Zenni Optical makes it easier to shop for prescription glasses, sunglasses, and everyday eyewear online. Before placing your order, visit CouponsBit to find a Zenni promo code and explore available discounts on your next pair.
          </p>
          <p>
            Whether you need new prescription frames, computer glasses, or sunglasses for outdoor activities, compare the available options and check for an eligible offer before checkout.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Find a Zenni Promo Code on CouponsBit
          </h3>
          <p>
            Want to spend less on your next pair of glasses? Check CouponsBit before shopping at Zenni.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit CouponsBit and open the Zenni store page.</li>
            <li>Browse the available promo codes and discounts.</li>
            <li>Choose an offer that matches your planned purchase.</li>
            <li>Read the terms to check product eligibility and any minimum-spend requirements.</li>
            <li>Copy the available promo code.</li>
            <li>Visit Zenni and select your preferred frames and lens options.</li>
            <li>Continue to checkout and enter the code in the designated promotional code field.</li>
            <li>Apply the code and review your updated order total before payment.</li>
          </ol>
          <p>
            Remember to check the offer's expiry date and restrictions. Some promotions may apply only to selected products or customers.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Apply a Zenni Promo Code
          </h3>
          <p>
            Once you have selected your frames, follow these steps to use an eligible discount:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Choose your preferred glasses on Zenni's website.</li>
            <li>Select the prescription type and enter your prescription details, if required.</li>
            <li>Customize the lens material, coatings, and other available options.</li>
            <li>Add the glasses to your cart.</li>
            <li>Proceed to checkout and look for the promo code field.</li>
            <li>Enter your copied Zenni promo code and apply it.</li>
            <li>Confirm that the discount appears in your order summary before completing payment.</li>
          </ol>
          <p>
            If the code does not work, review its conditions. Zenni's promotional terms state that offers may have expiry dates, may be limited to individual recipients, and generally cannot be combined unless the offer specifically allows it.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Ways to Save More at Zenni
          </h3>
          <p>
            A promo code is not the only thing worth checking when shopping for eyewear. These tips can help you make a more informed purchase.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Compare frame options:</strong> Explore different frame styles and materials before deciding. Consider comfort, weight, flexibility, and fit.</li>
            <li><strong>Choose the right lenses:</strong> Review single-vision, progressive, polarized, photochromic, and blue-light lens options to find what suits your requirements.</li>
            <li><strong>Try frames virtually:</strong> Use Zenni's Virtual Try-On feature to preview selected frames before ordering.</li>
            <li><strong>Check available promotions:</strong> Visit CouponsBit for listed Zenni promo codes and offers before checkout.</li>
            <li><strong>Review shipping choices:</strong> Compare delivery options and estimated arrival times, particularly if you need your glasses by a specific date.</li>
            <li><strong>Understand the return policy:</strong> Check the return conditions before placing an order, especially when buying prescription eyewear.</li>
          </ul>
          <p>
            Zenni's official FAQ explains its lens options, Virtual Try-On tools, shipping services, and return conditions.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Things to Know Before Ordering from Zenni
          </h3>
          <p>
            Prescription eyewear is a personal purchase, so take a moment to review the details before paying.
          </p>
          <p>
            <strong>Check your prescription:</strong> Make sure you have the correct and current prescription information. Zenni does not accept a contact lens prescription for ordering regular glasses.
          </p>
          <p>
            <strong>Review lens specifications:</strong> Different lens materials and coatings offer different features. For example, polycarbonate and Trivex lenses are impact-resistant options, while polarized lenses are designed to reduce reflected glare.
          </p>
          <p>
            <strong>Check frame measurements:</strong> Compare the listed frame measurements with glasses you already own to help assess the fit.
          </p>
          <p>
            <strong>Understand delivery timelines:</strong> Shipping speed and availability vary by order and destination. Some expedited services are restricted to eligible US addresses and selected frames.
          </p>
          <p>
            <strong>Read the return terms:</strong> Zenni's published US and Canada policy allows eligible glasses to be returned within 30 days of delivery for store credit. A refund to the original payment method is available for qualifying returns made within 14 days, minus shipping costs. Review the current policy and conditions before ordering.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Shop for Your Next Pair of Glasses and Save with CouponsBit
          </h3>
          <p>
            From everyday prescription frames to stylish sunglasses and blue-light lenses, Zenni offers plenty of eyewear options to explore. Before placing your order, visit CouponsBit to check the latest Zenni promo code, discount offers, and eyewear deals.
          </p>
          <p>
            Compare the available promotions, choose the glasses that suit your needs, and apply an eligible code at checkout. A little research before buying can help you find the right pair while making the most of your shopping budget.
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
            Frequently Asked Questions About Zenni Promo Codes
          </h3>
          {[
            {
              q: "1. Where can I find a Zenni promo code?",
              a: "Visit the Zenni store page on CouponsBit to check available promo codes and discounts. Review each offer's terms before using it."
            },
            {
              q: "2. Does Zenni offer prescription glasses?",
              a: "Yes. Zenni offers prescription eyewear, including single-vision, bifocal, and progressive glasses. You can select compatible lens options while customizing your order."
            },
            {
              q: "3. Can I use a Zenni promo code with another discount?",
              a: "Not necessarily. Zenni's promotional terms generally do not allow multiple offers to be combined unless the specific promotion states otherwise. Check the conditions attached to your code."
            },
            {
              q: "4. Does Zenni sell prescription sunglasses?",
              a: "Yes. Selected Zenni frames can be customized with prescription sunglass lenses. Options include different tints and polarized lenses, depending on the frame and prescription."
            },
            {
              q: "5. Does Zenni offer blue-light-blocking glasses?",
              a: "Yes. Zenni offers its Blokz range of blue-light-blocking lenses. These options are available for compatible frames and orders."
            },
            {
              q: "6. Can I try on Zenni glasses before buying?",
              a: "Zenni offers a Virtual Try-On feature that lets shoppers preview selected frames using a video or image-based experience. This can help you compare styles before ordering."
            },
            {
              q: "7. What should I do if my Zenni promo code does not work?",
              a: "Check whether the code has expired, whether your selected products qualify, and whether the offer has a minimum purchase requirement. Also check whether the code is restricted to a specific customer or cannot be combined with another promotion."
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
            Popular Zenni Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Zenni Promo Code",
              "Prescription Glasses",
              "Blokz Blue Light Lenses",
              "Prescription Sunglasses",
              "Virtual Try-On",
              "First Order Discount",
              "Progressive Lenses Sale",
              "Affordable Eyewear"
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
            Today's Top Zenni Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "FIRST ORDER DISCOUNT",
                sub: "Save 15% on first orders of $65 or more",
              },
              {
                heading: "BLOKZ BLUE LIGHT",
                sub: "Protect your eyes with Blokz lens options",
              },
              {
                heading: "BOGO OFFER",
                sub: "Buy one pair, get 20% off your second pair",
              },
              {
                heading: "CLEARANCE FRAMES",
                sub: "Up to 30% off selected eyeglasses & shades",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  Z
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
                  aria-label={`Shop Zenni: ${deal.heading}`}
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
