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
  ExternalLink, HeartHandshake, ShieldAlert, Calendar, Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Smartphone,
  Wifi,
  Zap,
  Gift,
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
  { id: "d1", label: "NEW", heading: "New Customer Offer", sub: "Latest Deals" },
  { id: "d2", label: "DEAL", heading: "Unlimited Plan Discount", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Trade-In Credit", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Device Deal", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Switch & Save Offer", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Lyca Mobile", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/lyca-mobile-coupon-code_svvddg.webp", dealText: "Up to 69% OFF", href: "/stores/lyca-mobile-discount-code" },
  { name: "Oppo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784970/oppo-logo_umnpx7.webp", dealText: "From $39", href: "/stores/oppo-discount-code" },
  { name: "Airalo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/airalo-logo_fc6u6p.webp", dealText: "USA eSIM From $4.50", href: "/stores/airalo-discount-code" },
  { name: "Apple", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/apple-logo_vrakxu.webp", dealText: "Up To $150 Gift Card", href: "/stores/apple-discount-code" },
  { name: "Jetpac", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787741564/jetpac-logo_prj8gu.webp", dealText: "Save Up To 70%", href: "/stores/jetpac-discount-code" },
];

const STORE_URL = "https://www.verizon.com";

export default function VerizonCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

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
              <span className="text-black font-extrabold">Verizon</span>
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
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789535820/verizon_promo_code_zdxzxp.webp" alt="Verizon" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Verizon Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(21.4k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                     Discover verified Verizon promo codes and discount codes to save up to $500 on Home Internet and up to 85% on phone accessories. Get Home Internet from $25/month, enjoy free phones with eligible new lines, and explore exclusive Verizon wireless and Fios deals in Sept 2026.
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
                    { icon: Tag, val: "17", label: "Offers" },
                    { icon: Percent, val: "300+", label: "Deals" },
                    { icon: Users, val: "2M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789535820/verizon_promo_code_zdxzxp.webp" alt="Verizon Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Verizon Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "FROM", value: "$30/MO", title: "Verizon Promo Code – Simplicity Plan | Starting At $30/Month", desc: "Get Verizon’s Simplicity Plan starting at $30 per month per line after AutoPay and the $15/month switch discount.", bullets: ["Explore Verizon wireless plans with a simple monthly price for your mobile service.", "Check My Verizon for available plan promotions and savings on eligible lines."] },
                  { label: "FROM", value: "$30/MO", title: "Verizon Promo Code – Home Internet | Starting At $30/Month", desc: "Add Verizon Home Internet starting at $30/month with Auto Pay for Fios 300 Mbps or $35/month for 5G Home Internet with an eligible Verizon mobile plan.", bullets: ["Compare Fios internet plans and Verizon internet plans to find the right connection for your home.", "Check VerizonFios availability and explore current home internet offers."] },
                  { label: "SALE", value: "UP TO 85%", title: "Verizon Promo Code – Phone Accessories | Up To 85% OFF", desc: "Save up to 85% on selected phone accessories and upgrade your mobile essentials for less.", bullets: ["Shop through the Verizon store for accessories compatible with your Verizon wireless devices.", "Explore current Verizon offers and find eligible savings on selected accessories."] },
                  { label: "SALE", value: "30% OFF", title: "Verizon Promo Code – Choose Any 5 Accessories | 30% OFF", desc: "Choose any five eligible phone accessories and receive 30% OFF your qualifying purchase.", bullets: ["Find useful accessories for your devices and everyday Verizon wireless needs.", "Shop the Verizon store and take advantage of this multi-item savings offer."] },
                  { label: "DEAL", value: "UP TO $100", title: "Samsung Galaxy S25 Edge – Save Up To $100", desc: "Save up to $100 on the Samsung Galaxy S25 Edge with this eligible Verizon device offer.", bullets: ["Upgrade your smartphone while staying connected with Verizon wireless cell phone plans.", "Check My Verizon for current device promotions and available savings."] },
                  { label: "DEAL", value: "UP TO $50/MO", title: "Ultimate iPhone Plan With Apple One – Up To $50/Month", desc: "Get savings of up to $50 per month on the Ultimate iPhone plan with Apple One.", bullets: ["Enjoy premium mobile benefits while exploring Verizon plans for your iPhone.", "Check your available Verizon wireless offers through My Verizon."] },
                  { label: "SALE", value: "30% OFF", title: "Pick 5 Accessories – 30% OFF", desc: "Choose five eligible accessories and save 30% on your qualifying purchase.", bullets: ["Build your preferred mobile accessory collection through the Verizon store.", "Enjoy this multi-product offer when purchasing qualifying accessories together."] },
                  { label: "SALE", value: "40% OFF", title: "Top Streaming Services – 40% OFF", desc: "Save 40% on selected top streaming services with this Verizon entertainment offer.", bullets: ["Add entertainment benefits to your Verizon plans and enjoy more value from your service.", "Check My Verizon for eligible streaming promotions and available savings."] },
                  { label: "STUDENT", value: "UP TO $10/MO", title: "Student Fios Internet Discount – Save Up To $10/Month", desc: "Students can save up to $10 per month on eligible Fios internet plans.", bullets: ["Enjoy reliable Fios internet for studying, streaming and everyday online activities.", "Check VerizonFios availability and review the current student offer."] },
                  { label: "DEAL", value: "UP TO $25", title: "First Responders Discount – Save Up To $25", desc: "Eligible first responders can save up to $25 per month with 2 to 3 qualifying lines.", bullets: ["Explore Verizon wireless plans and choose an option that fits your personal connectivity needs.", "Check eligibility with Verizon before selecting your qualifying plan."] },
                  { label: "DEAL", value: "UP TO $500", title: "Verizon Home Internet – Get Up To $500 OFF", desc: "Switch to Verizon Home Internet and receive savings of up to $500 on eligible offers.", bullets: ["Explore Verizon internet plans, Verizon WiFi and Fios internet options for your home.", "Check availability and choose the home internet offer that suits your needs."] },
                  { label: "DEAL", value: "5G UNLIMITED", title: "Mix & Match 5G Unlimited Plans", desc: "Mix and match eligible plans to create a flexible 5G Unlimited setup for your household.", bullets: ["Choose from Verizon wireless plans designed for different users and connectivity needs.", "Manage your services conveniently through My Verizon."] },
                  { label: "DEAL", value: "FREE PHONE", title: "Free Phone When You Add A New Line", desc: "Get a free phone when you add a qualifying new line to your Verizon service.", bullets: ["Explore Verizon wireless cell phone plans and select a device that fits your needs.", "Check My VZW for current new-line promotions and eligible device offers."] },
                  { label: "MILITARY", value: "UP TO $25/MO", title: "Military Members Discount – Save Up To $25/Month", desc: "Military members can save up to $25 per month on eligible Verizon wireless services.", bullets: ["Explore Verizon plans and find a qualifying option for your mobile needs.", "Review the military discount requirements and available Verizon offers before signing up."] },
                  { label: "NURSES", value: "UP TO $25/MO", title: "Nurses Discount – Save Up To $25/Month", desc: "Nurses can save up to $25 per month on eligible personal Verizon lines.", bullets: ["Explore Verizon wireless plans and choose a service option suited to your needs.", "Check Verizon customer service or My Verizon for eligibility details."] },
                  { label: "FROM", value: "$25", title: "Verizon Home Internet – Starting At $25", desc: "Get Verizon Home Internet starting at $25 with this eligible home connectivity offer.", bullets: ["Compare Fios internet plans, Verizon WiFi and other Verizon internet plans for your home.", "Check availability to find the right Verizon home internet option."] },
                  { label: "MILITARY", value: "$20/LINE", title: "Welcome Unlimited – $20/Line For Military Families", desc: "Eligible military families can get Welcome Unlimited for just $20 per line.", bullets: ["Enjoy affordable Verizon wireless service while keeping your family connected.", "Check My Verizon for eligibility and current military family plan details."] },
                ].map((c, i) => (
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
                              View Details
                              <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Verizon: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Verizon?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Verizon is a major American telecommunications company that provides wireless communications and internet services to consumers and businesses across the United States.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The company is best known for its mobile network and wireless phone plans, but its offerings go well beyond smartphones. Customers can shop for phones, tablets, smartwatches, mobile hotspots, connected devices, accessories, and home internet services.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For home connectivity, Verizon offers services including 5G Home Internet and Fios fiber internet in eligible locations. Fios uses a fiber-optic network, while 5G Home Internet provides fixed wireless connectivity through Verizon's 5G network. Availability depends on the customer's location.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Verizon also gives customers opportunities to combine mobile and home internet services. Eligible customers can receive Mobile + Home benefits, with savings and other perks depending on the plans they have.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand also offers connected-device plans for products such as tablets, smartwatches, laptops, hotspots, and connected cars, allowing customers to keep more of their devices connected when they're away from traditional Wi-Fi.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For shoppers, that means Verizon can be relevant whether you're looking for a new iPhone, Android phone, wireless plan, home internet connection, smartwatch, tablet, or another connected device.
                  
                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Smartphone, name: "Smartphones", count: "150+", color: "text-blue-500", href: "/categories/mobile" },
                        { icon: Wifi, name: "Unlimited Plans", count: "20+", color: "text-purple-500", href: "/categories/mobile" },
                        { icon: Zap, name: "Trade-In Deals", count: "40+", color: "text-orange-500", href: "/categories/mobile" },
                        { icon: Gift, name: "Accessories", count: "90+", color: "text-pink-500", href: "/categories/mobile" },
                        { icon: Search, name: "New Arrivals", count: "30+", color: "text-teal-500", href: "/categories/mobile" },
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
    How to Find Better Verizon Deals
  </h3>
  <div className="space-y-6">
    <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
      <p>
        <strong className="text-black font-black block mb-1">Check CouponsBit Before Signing Up</strong>
        Before ordering a phone, switching plans, or purchasing home internet, check CouponsBit for the latest Verizon promo code, coupon codes, discount offers, and other promotions.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Compare Device Promotions</strong>
        Don't automatically choose the first discount you see. Compare the promotion attached to your preferred phone with other eligible devices.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Consider Trade-In Offers</strong>
        If you're upgrading, check whether your existing device qualifies for a trade-in promotion.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Compare the Plan Requirements</strong>
        A device may appear heavily discounted but require a particular plan. Look at the combined cost of the phone and service before deciding.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check Bundle Opportunities</strong>
        If you need both mobile and home internet, compare Verizon's Mobile + Home benefits and other bundle-related offers.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check Availability</strong>
        Home internet offerings depend on location. Verizon recommends checking availability for your address before choosing a particular Fios or wireless home internet plan.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Watch Major Shopping Periods</strong>
        Black Friday, Cyber Monday, holiday shopping, back-to-school season, and major device launches can be useful times to compare Verizon offers.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Read the Fine Print</strong>
        Telecom promotions can have more conditions than ordinary retail coupons. Always check activation requirements, qualifying plans, bill-credit periods, trade-in rules, and other restrictions.
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

      {/* Main Content Area */}
      <div className="prose max-w-none text-left">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Verizon Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 font-bold text-[14px]">
      {[
        ["Simplicity Plan", "Starting At $30/mo", "New & Switcher Lines", "After AutoPay and $15/mo switch discount", "Mobile Wireless Plans"],
        ["Home Internet", "Starting At $30/mo", "All Users", "With AutoPay; $30 Fios 300 Mbps / $35 5G Home Internet", "Fios & 5G Home Internet"],
        ["Phone Accessories Sale", "Up To 85% OFF", "All Users", "Deep discounts on selected phone gear", "Selected Accessories"],
        ["Bundle 5 Accessories", "30% OFF", "All Users", "Multi-item discount applied when buying 5 items", "Phone Accessories"],
        ["Samsung Galaxy S25 Edge", "Save Up To $100", "All Users", "Device upgrade promotion on eligible cell plans", "Samsung Smartphones"],
        ["Ultimate iPhone + Apple One", "Save Up To $50/mo", "All Users", "Bundled savings on premium mobile + Apple One plan", "iPhone Mobile Plans"],
        ["Pick 5 Accessories Deal", "30% OFF", "All Users", "Select 5 eligible accessories to receive savings", "Mobile Accessories"],
        ["Top Streaming Services", "40% OFF", "All Users", "Save on entertainment add-on perks via My Verizon", "Streaming Services"],
        ["Student Fios Internet Discount", "Save Up To $10/mo", "Students", "Verified student savings on Fios home internet", "Fios Internet Plans"],
        ["First Responders Discount", "Save Up To $25/mo", "First Responders", "Valid on 2 to 3 qualifying wireless lines", "Wireless Plans"],
        ["Verizon Home Internet Switch", "Up To $500 OFF", "Switchers", "Savings offer when switching home internet service", "Fios & 5G Home Internet"],
        ["Mix & Match 5G Unlimited", "Custom Pricing", "All Users", "Flexible account configuration per user needs", "5G Unlimited Plans"],
        ["Free Phone Promotion", "FREE Phone", "New Lines", "Get a free phone when adding a new line", "Select Mobile Devices"],
        ["Military Members Discount", "Save Up To $25/mo", "Military & Veterans", "Exclusive account savings on qualifying plans", "Wireless Services"],
        ["Nurses Discount", "Save Up To $25/mo", "Nurses", "Special rate reduction on eligible personal lines", "Wireless Plans"],
        ["Home Internet Base Deal", "Starting At $25", "All Users", "Entry pricing for eligible home connectivity", "Home Internet & WiFi"],
        ["Welcome Unlimited for Military", "$20/Line", "Military Families", "Affordable per-line rate for military accounts", "Welcome Unlimited Plan"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 16 && "border-b-0")}>
          <td className="p-5 text-black font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-gray-500 align-middle">{row[2]}</td>
          <td className="p-5 text-gray-500 align-middle max-w-[200px]">{row[3]}</td>
          <td className="p-5 text-gray-500 align-middle max-w-[240px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Shopping for a new phone or switching your wireless provider is a bigger decision than picking up another item online. You're choosing a network, a plan, a device, and potentially a home internet service that you'll use every day. That's why finding the right offer before signing up can make a meaningful difference.
          </p>
          <p>
            Verizon is one of the biggest names in wireless and connectivity in the United States, offering mobile plans, smartphones, connected devices, and home internet services. If you're planning to switch providers, upgrade your phone, add a new line, or set up home internet, checking for a Verizon promo code before you buy can be a smart way to look for savings.
          </p>
          <p>
            CouponsBit helps shoppers discover Verizon coupon codes, discount offers, vouchers, device promotions, wireless deals, home internet offers, and other opportunities to potentially save.
          </p>

          <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Find a Verizon Promo Code
        </h3>
        <p>
          A Verizon promo code can be useful when you're looking for a way to reduce the cost of an eligible purchase or take advantage of a promotional offer.
        </p>
        <p>
          Before placing an order or switching your service, check CouponsBit for available Verizon promotions. You may find a promotional code, device offer, service discount, or another deal that fits your purchase.
        </p>
        <p>
          Verizon promotions can differ depending on the product, plan, customer eligibility, new-line requirements, trade-in conditions, location, and promotional period. Always review the terms of an offer before relying on it.
        </p>
        <p>
          If a particular promo code doesn't apply to your order, compare it with Verizon's other available promotions. Sometimes a device promotion, plan incentive, or bundle benefit can provide better overall value than a standalone coupon.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Verizon Coupon Code and Discount Offers
        </h3>
        <p>
          A Verizon coupon code isn't the only way to find savings.
        </p>
        <p>
          Telecom promotions often work differently from traditional retail discounts. Instead of simply taking a percentage off a shopping cart, an offer might provide savings through a device promotion, monthly bill credit, eligible trade-in, new-line offer, bundle discount, gift card, or service perk.
        </p>
        <p>
          That's why it's important to look at the entire offer rather than focusing only on the word "discount."
        </p>
        <p>
          For example, Verizon currently promotes offers involving smartphones and new lines, while its home internet promotions can include benefits such as gift cards or entertainment-related offers.
        </p>
        <p>
          Before signing up, compare the plan requirements, device eligibility, promotional period, and any required commitment or qualifying service.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          What Can You Shop for at Verizon?
        </h3>
        <p>
          Verizon offers much more than mobile phone service. Depending on availability and eligibility, shoppers can explore several categories.
        </p>
        <p>
          Smartphones
        </p>
        <p>
          Smartphones are at the heart of Verizon's retail offering.
        </p>
        <p>
          Customers can shop for popular Apple iPhones, Samsung Galaxy devices, Google Pixel phones, Motorola models, and other smartphones.
        </p>
        <p>
          Depending on the promotion, Verizon may offer savings on selected devices when you add a new line, switch from another provider, trade in an eligible phone, or select a qualifying plan.
        </p>
        <p>
          If you're already planning a phone upgrade, compare the current device promotions before paying full price.
        </p>
        <p>
          iPhone
        </p>
        <p>
          Apple's iPhone lineup is one of the most popular smartphone choices among Verizon customers.
        </p>
        <p>
          Depending on the current promotion, Verizon may offer device discounts, trade-in incentives, or other offers connected to eligible plans and new lines.
        </p>
        <p>
          If you're upgrading to a new iPhone, check CouponsBit for a Verizon promo code and compare it with the current device promotions.
        </p>
        <p>
          Samsung Galaxy
        </p>
        <p>
          Samsung Galaxy smartphones provide another major option for Android shoppers.
        </p>
        <p>
          The Galaxy range includes different models designed for different budgets and features, from everyday smartphones to premium devices.
        </p>
        <p>
          Verizon regularly features Samsung promotions, so it's worth comparing the available offer with your preferred Galaxy model.
        </p>
        <p>
          Google Pixel
        </p>
        <p>
          Google Pixel devices are another option for Android users looking for Google's software experience and camera-focused features.
        </p>
        <p>
          Verizon may feature Pixel promotions tied to eligible plans or new lines, so check the current terms before ordering.
        </p>
        <p>
          Tablets
        </p>
        <p>
          Verizon offers connected tablet options for customers who want mobile connectivity beyond their smartphone.
        </p>
        <p>
          A tablet data plan can be useful for travel, work, entertainment, school, and situations where Wi-Fi isn't available.
        </p>
        <p>
          Smartwatches
        </p>
        <p>
          A smartwatch can keep you connected even when your phone isn't immediately within reach.
        </p>
        <p>
          Verizon offers smartwatch data plans and compatible devices for customers who want cellular connectivity on their wearable.
        </p>
        <p>
          Mobile Hotspots
        </p>
        <p>
          Mobile hotspots can provide portable internet connectivity when you're traveling or working away from a traditional Wi-Fi network.
        </p>
        <p>
          They can be useful for people who need an additional connection for laptops, tablets, or other devices.
        </p>
        <p>
          Accessories
        </p>
        <p>
          Verizon also offers accessories for smartphones and other connected devices, including cases, chargers, audio products, and other everyday essentials.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Verizon Wireless Plans
        </h3>
        <p>
          Choosing a phone is only one part of the decision. Your wireless plan determines how you'll use that phone every day.
        </p>
        <p>
          Verizon offers different plan structures designed around different levels of data, features, and connected services.
        </p>
        <p>
          When comparing plans, think about how you actually use your phone.
        </p>
        <p>
          If you mostly browse, message, and occasionally stream, you may have different needs from someone who regularly streams video, uses a mobile hotspot, travels internationally, or connects multiple family members.
        </p>
        <p>
          Before choosing a plan, compare the included benefits rather than focusing only on the advertised monthly cost.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Verizon Home Internet
        </h3>
        <p>
          For customers looking beyond mobile service, Verizon also provides home internet options.
        </p>
        <p>
          5G Home Internet
        </p>
        <p>
          Verizon 5G Home Internet uses a fixed wireless connection powered by Verizon's 5G network. Availability and performance depend on location.
        </p>
        <p>
          It can be an alternative to traditional wired broadband for eligible households.
        </p>
        <p>
          Fios Home Internet
        </p>
        <p>
          Fios is Verizon's fiber-optic internet service and is available primarily in the Northeast and Mid-Atlantic regions.
        </p>
        <p>
          Depending on location, Verizon offers multiple Fios speed tiers, including options reaching multi-gigabit speeds.
        </p>
        <p>
          If Fios is available at your address, compare the available plans and current promotions before signing up.
        </p>
        <p>
          Verizon Home Internet Lite
        </p>
        <p>
          Verizon also offers Home Internet Lite in eligible locations where the service is available. Current Verizon promotions can include online gift-card incentives and other benefits, subject to eligibility and promotional terms.
        </p>
        <p>
          Because home internet availability varies by address, check your location before assuming a particular plan is available.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Verizon Mobile + Home Savings
        </h3>
        <p>
          If you're considering both mobile and home internet service, bundling may provide additional value.
        </p>
        <p>
          Verizon's Mobile + Home benefits currently provide eligible customers with a monthly discount on qualifying home internet service. Some eligible plans can also provide credits toward selected perks.
        </p>
        <p>
          This can be particularly useful for households that already use Verizon for mobile service and are considering moving their home internet to the same provider.
        </p>
        <p>
          When comparing providers, look at the combined cost rather than evaluating each service separately.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Verizon Deals on Phones and Devices
        </h3>
        <p>
          Device promotions can be one of the biggest opportunities for Verizon shoppers.
        </p>
        <p>
          Depending on the current campaign, offers may involve:
        </p>
        <p>
          New-line promotions
        </p>
        <p>
          Eligible trade-in offers
        </p>
        <p>
          Discounts on selected smartphones
        </p>
        <p>
          Buy-one-get-one-style promotions
        </p>
        <p>
          Device bill credits
        </p>
        <p>
          Tablet and smartwatch offers
        </p>
        <p>
          Prepaid phone promotions
        </p>
        <p>
          Bundle-related savings
        </p>
        <p>
          Verizon's current offers change regularly, so check the exact terms attached to the phone and plan you're considering.
        </p>
        <p>
          For example, Verizon currently advertises several smartphone promotions tied to eligible plans and new lines.
        </p>
        <p>
          A Verizon discount code may not always be the most valuable option if a larger device promotion is available, so compare the complete value of the offers before deciding.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Verizon Prepaid Offers
        </h3>
        <p>
          Verizon also operates a prepaid service offering for customers who prefer prepaid wireless plans.
        </p>
        <p>
          Current prepaid promotions can include discounts on selected phones, service credits, free-device offers with qualifying activations, and multiline or bundle savings.
        </p>
        <p>
          Prepaid can be worth considering if you prefer greater control over your monthly wireless spending or don't want to choose a traditional postpaid plan.
        </p>
        <p>
          Check the requirements of each offer carefully because prepaid promotions can have different eligibility conditions from Verizon's standard wireless offers.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Verizon Deals for Families
        </h3>
        <p>
          Families often have different wireless needs, making plan selection particularly important.
        </p>
        <p>
          One person may need significant mobile data, another may mainly use their phone for calls and messaging, while children may need basic connectivity.
        </p>
        <p>
          When shopping for multiple lines, compare the total cost of the plan rather than looking only at the price of an individual line.
        </p>
        <p>
          Also consider whether family members need connected tablets, smartwatches, or other devices.
        </p>
        <p>
          A Verizon promo code combined with a qualifying multiline or device promotion could potentially make the overall setup more affordable, depending on the current terms.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Verizon Seasonal Sales and Promotions
        </h3>
        <p>
          Verizon offers can change throughout the year, and major shopping periods can be useful times to check for new promotions.
        </p>
        <p>
          New Year
        </p>
        <p>
          The beginning of the year can be a natural time to upgrade an old phone or rethink your wireless setup.
        </p>
        <p>
          If you're considering switching providers, compare current Verizon offers before signing up.
        </p>
        <p>
          Valentine's Day
        </p>
        <p>
          A new smartphone, smartwatch, or connected device can make a practical Valentine's Day gift.
        </p>
        <p>
          If you're buying a device for someone else, check current promotions before paying full price.
        </p>
        <p>
          Mother's Day
        </p>
        <p>
          Smartphones, tablets, and smartwatches can all make useful Mother's Day gifts.
        </p>
        <p>
          Consider the recipient's everyday needs when choosing a device rather than focusing only on the latest model.
        </p>
        <p>
          Father's Day
        </p>
        <p>
          For Father's Day, shoppers can explore smartphones, smartwatches, tablets, accessories, and other connected devices.
        </p>
        <p>
          Graduation Season
        </p>
        <p>
          A new phone can be a useful graduation gift, particularly for students heading to college or starting a new job.
        </p>
        <p>
          Check Verizon's current device promotions before purchasing.
        </p>
        <p>
          Back-to-School
        </p>
        <p>
          Back-to-school season is one of the biggest periods for shopping for students and families.
        </p>
        <p>
          Phones, tablets, smartwatches, and mobile connectivity can all become part of a student's technology setup.
        </p>
        <p>
          Summer Travel
        </p>
        <p>
          Traveling often means relying heavily on your phone for navigation, communication, entertainment, photography, and booking.
        </p>
        <p>
          It can be a good time to check whether your current device, accessories, and wireless plan meet your needs.
        </p>
        <p>
          Labor Day
        </p>
        <p>
          Labor Day marks another major US shopping period.
        </p>
        <p>
          If you're planning a device upgrade or considering a new internet service, check Verizon's current offers around the holiday.
        </p>
        <p>
          Halloween
        </p>
        <p>
          While Halloween isn't traditionally associated with telecom shopping, October can be a useful time to check for new device and service promotions ahead of the holiday season.
        </p>
        <p>
          Thanksgiving
        </p>
        <p>
          Thanksgiving kicks off the major holiday shopping period.
        </p>
        <p>
          If you've been waiting to upgrade your smartphone or switch providers, compare Verizon's latest offers before making a decision.
        </p>
        <p>
          Black Friday
        </p>
        <p>
          Black Friday is one of the biggest shopping events in the US, and smartphones and electronics are among the categories shoppers often watch closely.
        </p>
        <p>
          Check CouponsBit for a Verizon promo code, coupon code, device offer, or other promotion before purchasing.
        </p>
        <p>
          Cyber Monday
        </p>
        <p>
          Cyber Monday is particularly relevant to customers shopping online.
        </p>
        <p>
          If you missed a Black Friday offer or are still looking for a phone, tablet, smartwatch, or home internet promotion, compare the available Verizon offers before checkout.
        </p>
        <p>
          Christmas
        </p>
        <p>
          Phones, tablets, smartwatches, and accessories can all make popular holiday gifts.
        </p>
        <p>
          If you're buying for someone else, make sure you understand the device, plan, and activation requirements associated with the promotion.
        </p>
      </div>
    </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Use a Verizon Promo Code</h3>
              <p>If you find a Verizon promo code through CouponsBit, follow the instructions associated with the specific offer.</p>
              <p>A typical process may include:</p>
              <p>Find the Verizon offer you want to use.</p>
              <p>Visit Verizon and select the product or service you're interested in.</p>
              <p>Choose your device, plan, or internet service.</p>
              <p>Review the eligibility requirements.</p>
              <p>Add the selected product or service to your order.</p>
              <p>Proceed through the checkout or sign-up process.</p>
              <p>Enter the applicable promo code if the offer requires one.</p>
              <p>Apply the code.</p>
              <p>Confirm that the promotion or discount has been reflected.</p>
              <p>Review the complete order details before completing the purchase.</p>
              <p>If a code doesn't work, check its expiration date and eligibility conditions.</p>
              <p>For Verizon, it's especially important to check whether an offer requires a new line, eligible plan, trade-in, qualifying device, Auto Pay enrollment, or another condition.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Verizon Offers?</h3>
              <p>Wireless service is an ongoing expense, and a device purchase can represent a significant upfront or long-term commitment.</p>
              <p>That's why checking for savings before signing up can be worthwhile.</p>
              <p>CouponsBit gives shoppers a convenient place to look for a Verizon promo code, coupon code, discount offer, voucher, device deal, wireless promotion, or home internet offer.</p>
              <p>Instead of focusing on one type of discount, compare the full value of the available promotions. A coupon may be useful for one purchase, while a device promotion, trade-in offer, or mobile-and-home benefit may provide more value for another.</p>
              <p>Whether you're buying your first smartphone, upgrading an existing device, switching carriers, adding a family line, or setting up home internet, checking available offers before completing your purchase can help you make a more informed decision.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Find Your Next Verizon Deal</h3>
              <p>Whether you're upgrading your smartphone, switching wireless providers, adding another line, connecting a tablet or smartwatch, or bringing home a new internet service, Verizon offers a wide range of ways to stay connected.</p>
              <p>Because telecom promotions can change frequently, don't assume the first offer you see is the best one. Compare the available device, plan, trade-in, bundle, and promotional options before making your decision.</p>
              <p>Before you complete your order, visit CouponsBit to check for the latest Verizon promo code, along with coupon codes, discount offers, vouchers, device deals, wireless promotions, and home internet savings. Review the eligibility requirements, compare the total value, and choose the offer that makes the most sense for your needs.</p>
            </div>
          </div>

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
            Frequently Asked Questions About Verizon Promo Codes
          </h3>
          {[
            { q: "Does Verizon offer promo codes?", a: "Yes. Verizon offers various promotions, discounts, device deals, service incentives, and other savings opportunities. Not every promotion requires a traditional promo code." },
            { q: "Where can I find a Verizon promo code?", a: "You can check CouponsBit for available Verizon promo codes, coupon codes, discount offers, device promotions, and other deals before shopping." },
            { q: "How do I use a Verizon coupon code?", a: "If your promotion includes a coupon or promo code, follow the offer instructions and enter the code in the appropriate field during the purchase or sign-up process. Always confirm that the offer has been applied before completing your order." },
            { q: "Why isn't my Verizon promo code working?", a: "The promotion may have expired or your purchase may not meet its requirements. Verizon offers can require a specific plan, device, new line, trade-in, activation, location, or other qualifying condition." },
            { q: "Does Verizon offer discounts on phones?", a: "Yes. Verizon regularly promotes savings on selected smartphones and may offer device discounts, trade-in incentives, bill credits, or other promotional offers depending on the current campaign." },
            { q: "Does Verizon offer iPhone deals?", a: "Yes. Verizon frequently features promotions on iPhones and other smartphones. Current eligibility and requirements vary by device and plan." },
            { q: "Does Verizon offer Samsung Galaxy deals?", a: "Yes. Samsung Galaxy devices can be included in Verizon's promotional offers. Check the current terms for the specific model you're considering." },
            { q: "Does Verizon offer Google Pixel deals?", a: "Yes. Verizon may feature promotional offers on selected Google Pixel devices, depending on the current campaign." },
            { q: "Does Verizon offer home internet?", a: "Yes. Verizon offers home internet services including Fios and 5G Home Internet in eligible areas, along with other home internet options. Availability varies by location." },
            { q: "Can I save by combining Verizon mobile and home internet?", a: "Eligible customers may receive Mobile + Home benefits when they have qualifying Verizon mobile and home internet services. Current benefits can include a monthly home internet discount and, on certain plans, credits toward eligible perks." },
            { q: "Does Verizon have Black Friday deals?", a: "Verizon typically participates in major holiday shopping periods with device and service promotions. Check current offers around Black Friday to see which phones, plans, and services qualify." },
            { q: "Does Verizon have Cyber Monday offers?", a: "Verizon may offer online promotions around Cyber Monday. Offers can change, so check the current terms before purchasing." },
            { q: "Does Verizon offer prepaid deals?", a: "Yes. Verizon Prepaid offers can include device discounts, service credits, free-device promotions, and savings for multiple lines or bundled devices." },
            { q: "When is the best time to look for Verizon deals?", a: "Promotions can appear throughout the year. Black Friday, Cyber Monday, back-to-school season, major holidays, and smartphone launch periods can be useful times to compare available offers." },
            { q: "How can I save money at Verizon?", a: "Start by checking CouponsBit for a Verizon promo code, then compare device promotions, trade-in offers, plan incentives, bundle savings, and home internet deals. Review the full terms and total cost before committing." }
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
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
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
            Popular Verizon Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Verizon Promo Code",
              "iPhone Deals",
              "Trade-In Offers",
              "5G Home Internet",
              "Fios Discounts",
              "Prepaid Plans",
              "Switching Deals",
              "Mobile + Home"
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
            Today's Top Verizon Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "FROM $30/MO", sub: "Simplicity Plan | Starting At $30/Month" },
              { heading: "UP TO 85%", sub: "Phone Accessories | Up To 85% OFF" },
              { heading: "UP TO $100", sub: "Samsung Galaxy S25 Edge – Save Up To $100" },
              { heading: "FREE PHONE", sub: "Free Phone When You Add A New Line" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  V
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
                  aria-label={`Shop Verizon: ${deal.heading}`}
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
