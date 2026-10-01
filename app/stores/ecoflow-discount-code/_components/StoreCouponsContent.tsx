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
  HeartHandshake,
  ShieldAlert,
  Calendar,
  Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Gift,
  BatteryCharging,
  Sun,
  Home as HomeIcon,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Bluetti", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/bluetti-power-logo_osmets.webp", dealText: "Save Up To $200", href: "/stores/bluetti-discount-code" },
  { name: "Beelink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494081/beelink-coupon-code_gephnd.jpg", dealText: "Up to 35% OFF", href: "/stores/beelink-discount-code" },
  { name: "RingConn", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp", dealText: "Starting From $199", href: "/stores/ringconn-discount-code" },
  { name: "Dreame", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/dreame-logo_uqesij.webp", dealText: "Up To 45% OFF", href: "/stores/dreame-discount-code" },
  { name: "Reolink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp", dealText: "Up to 50% OFF", href: "/stores/reolink-discount-code" },
  { name: "Geekbuying", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/geekbuying-logo_pnkeev.webp", dealText: "Up To 56% OFF", href: "/stores/geekbuying-discount-code" },
];

const STORE_URL = "https://ecoflowtechnologyinc.pxf.io/c/4303217/2780662/31823?subId1=1015";

export default function EcoFlowContent() {
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
              <span className="text-black font-extrabold">EcoFlow</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1790831304/ecoflow_bc7yqs.webp" alt="EcoFlow" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">EcoFlow Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(3,100 Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Unlock bigger savings with the latest EcoFlow Discount Code and EcoFlow Promo Code. Enjoy up to 57% OFF during the Prime Day Fall Sale, receive up to $449 in bonus value, and save 35% on the DELTA 3 Max Plus Smart Extra Battery. Shop verified EcoFlow deals with confidence.
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
                    { icon: Tag, val: "11", label: "Offers" },
                    { icon: Percent, val: "6", label: "Deals" },
                    { icon: Users, val: "40K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790831304/ecoflow_bc7yqs.webp" alt="EcoFlow Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">EcoFlow Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "UP TO", value: "57%", title: "EcoFlow Coupon Code – Up to 57% OFF in the Prime Day Fall Sale", desc: "Grab discounts of up to 57% on chosen EcoFlow power stations and add-ons.", bullets: ["Unlock as much as $449 in bonus value on qualifying orders.", "The sale is live from September 20 till October 5.", "Deals last only until the stock runs out."] },
                  { label: "SAVE", value: "35%", title: "EcoFlow Coupon Code – 35% OFF on DELTA 3 Max Plus Smart Extra Battery", desc: "DELTA 3 Max Plus Smart Extra Battery now starts at $859 (was $1,329).", bullets: ["Cut 35% off the regular price.", "Adds more battery capacity to your existing portable power setup.", "A handy pick for home backup as well as outdoor trips."] },
                  { label: "SAVE", value: "27%", title: "EcoFlow Discount Code – 27% OFF on DELTA Pro Ultra", desc: "EcoFlow DELTA Pro Ultra is now $4,199, reduced from $5,799.", bullets: ["Get 27% off on this complete home backup system.", "Offers 6–90kWh capacity with output reaching 21.6kW.", "Keeps your home powered during outages and emergencies."] },
                  { label: "SAVE", value: "27%", title: "EcoFlow Discount Code – 27% OFF on DELTA Pro 3", desc: "Pick up the EcoFlow DELTA Pro 3 at $2,799.", bullets: ["That's 27% less than its usual $3,699 price.", "Capacity can be scaled from 4kWh up to 48kWh.", "Strong 4kW output to run essential home appliances."] },
                  { label: "SAVE", value: "28%", title: "EcoFlow Promo Code – Get the DELTA 3 Ultra Plus for 28% Less", desc: "DELTA 3 Ultra Plus (3072Wh) available from $1,579, down from $2,199.", bullets: ["Instant 28% price cut at checkout.", "Capacity can be extended to as much as 11kWh.", "3600W output handles heavy-duty appliances easily."] },
                  { label: "SAVE", value: "27%", title: "EcoFlow Promo Code – 27% OFF on DELTA Pro Ultra X Smart Extra Battery", desc: "DELTA Pro Ultra X Smart Extra Battery now begins at $2,399.", bullets: ["Pay 27% less than the original $3,299 price.", "An easy way to boost your home backup storage.", "Works seamlessly with the DELTA Pro Ultra X setup."] },
                  { label: "SAVE", value: "6%", title: "EcoFlow Voucher – Discount on RAPID Pro X Power Bank", desc: "EcoFlow RAPID Pro X Power Bank now $279.99, earlier $299.", bullets: ["A big 27,650mAh power bank at a lower price.", "Supports super-fast 300W charging.", "Handy for trips, office use, and daily device charging."] },
                  { label: "FROM", value: "$7,999", title: "EcoFlow Voucher – Explore the All-New DELTA Pro Ultra X", desc: "The DELTA Pro Ultra X is available from $7,999.", bullets: ["Made to provide steady backup power for the entire home.", "Engineered for large-scale energy storage.", "A strong choice for extended outages and off-grid living."] },
                  { label: "FROM", value: "$399", title: "EcoFlow Offers – NextGen 220W Bifacial Solar Panel Starting $399", desc: "NextGen 220W Bifacial Portable Solar Panel starts at $399.", bullets: ["25% conversion efficiency for quicker solar charging.", "IP68 rating keeps it protected against harsh weather.", "Great for camping trips, RVs, and home backup setups."] },
                  { label: "EXTRA", value: "5%", title: "EcoFlow Offers – 5% OFF on Your First Order", desc: "Sign up for the EcoFlow newsletter and get 5% off your first order.", bullets: ["Be the first to hear about special deals and new launches.", "Valid only for new subscribers.", "Some terms and conditions may be applicable."] },
                  { label: "EARN", value: "UP TO $500", title: "Earn Up to $500 Cash Rewards by Refers Friends", desc: "Earn 5% cash back for every successful purchase made by friends you refer.", bullets: ["Total referral earnings can go as high as $500.", "Send your unique referral link to eligible buyers.", "An easy way to save more on your next EcoFlow order."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop EcoFlow: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is EcoFlow?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    EcoFlow is a portable power and solar energy brand, known for its lineup of power stations, solar generators, and home backup systems used for travel, outdoor activities, and emergency power.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its products range from compact power stations for camping to larger whole-home backup systems designed to keep essential appliances running during an outage.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: BatteryCharging, name: "Portable Power Stations", count: "30+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: Sun, name: "Solar Generators", count: "20+", color: "text-purple-500", href: "/categories/electronics" },
                        { icon: HomeIcon, name: "Home Backup Systems", count: "15+", color: "text-pink-500", href: "/categories/electronics" },
                        { icon: Zap, name: "Solar Panels", count: "15+", color: "text-teal-500", href: "/categories/electronics" },
                        { icon: Percent, name: "Promo Offers", count: "10+", color: "text-orange-500", href: "/categories/electronics" },
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
                    How to Find Better EcoFlow Deals
                  </h3>
                  <div className="space-y-8">
                    {[
                      { icon: Tag, title: "Check CouponsBit Before Buying", sub: "Before purchasing, check CouponsBit for the latest EcoFlow discount code and current offers." },
                      { icon: BatteryCharging, title: "Compare Capacity Needs", sub: "Compare power station capacity and output against what you actually plan to run before choosing a model." },
                      { icon: Calendar, title: "Watch for Seasonal Sales", sub: "Power station deals often appear around major shopping events and storm-season promotions." },
                      { icon: ShieldAlert, title: "Check Promotion Restrictions", sub: "A promotion may only apply to selected products or require specific conditions. Always read the terms before completing your order." },
                      { icon: Receipt, title: "Review the Final Order", sub: "Before completing your purchase, make sure any eligible promotion has been applied and review your complete order details." },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4 items-start">
                        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-black font-black text-sm leading-tight mb-2">{item.title}</p>
                          <p className="text-gray-500 font-medium text-[11px] leading-relaxed">{item.sub}</p>
                        </div>
                      </div>
                    ))}
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
                  EcoFlow Discount Code, Coupon Code & Discount Offers
                </h2>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <p>
                    EcoFlow makes portable power stations, solar generators, and home backup systems designed to keep devices and appliances running during travel, outdoor activities, or a power outage.
                  </p>
                  <p>
                    Before your next purchase, check CouponsBit to see whether there is a current EcoFlow discount code that matches the product you're looking for.
                  </p>
                  <p>
                    EcoFlow offers compact power stations for everyday and outdoor use, larger solar generator setups, and home backup systems for bigger power needs, so it's worth comparing models before you buy.
                  </p>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-black text-[#056bfa] mb-4">Find an EcoFlow Discount Code</h3>
                      <p>An EcoFlow discount code can help you save on a power station, solar generator, or home backup system when a promotion is available.</p>
                      <p>Before completing your order, check CouponsBit to see whether there is a current EcoFlow offer that matches your product and budget.</p>
                      <p>Promotions can have specific conditions. Some may apply to selected products or capacities, while others may be tied to a particular event or season.</p>
                      <p>Always review the terms of the offer, including its expiration date and restrictions, before expecting a discount at checkout.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-black text-[#056bfa] mb-4">EcoFlow Power Stations & Solar Products</h3>
                      <p>EcoFlow's lineup covers portable power stations of different capacities, solar panels and generators, and larger home backup systems.</p>
                      <p>Each product lists its capacity, output, and compatible accessories, so it's worth comparing options against your intended use before purchasing.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-black text-[#056bfa] mb-4">EcoFlow Sale and Seasonal Promotions</h3>
                      <p>EcoFlow occasionally runs seasonal promotions around holidays and storm-season periods.</p>
                      <p>Before placing an order, check CouponsBit for an EcoFlow discount code, coupon offer, or other promotion.</p>
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
                    Frequently Asked Questions About EcoFlow Discount Codes
                  </h3>
                  {[
                    { q: "Does EcoFlow offer discount codes?", a: "EcoFlow periodically offers promotional codes, discounts, and seasonal promotions on its power stations and solar products. Availability and eligibility can vary." },
                    { q: "Where can I find an EcoFlow discount code?", a: "You can check CouponsBit for available EcoFlow discount codes, coupon codes, and promotions before purchasing." },
                    { q: "How do I use an EcoFlow discount code?", a: "Select your eligible product, proceed to checkout, and enter the applicable code in the promotional-code field. Confirm the discount has been applied before completing your order." },
                    { q: "Why isn't my EcoFlow discount code working?", a: "The promotion may have expired, or your order may not meet its requirements. Some offers can be limited to selected products or promotional periods." },
                    { q: "What does EcoFlow sell?", a: "EcoFlow sells portable power stations, solar generators, solar panels, and home backup power systems for outdoor use, travel, and emergency preparedness." },
                    { q: "Can EcoFlow power a home during an outage?", a: "EcoFlow offers home backup systems designed to provide power during outages, with capacity depending on the specific system and household needs." },
                    { q: "Are EcoFlow power stations solar compatible?", a: "Many EcoFlow power stations support solar charging with compatible EcoFlow solar panels, subject to the specific model." },
                    { q: "Does EcoFlow offer a warranty?", a: "Warranty coverage varies by product, so check the specific terms listed for your EcoFlow product before purchasing." },
                    { q: "Can I use EcoFlow products for camping and travel?", a: "Yes, EcoFlow's portable power stations are commonly used for camping, road trips, and other outdoor activities." },
                    { q: "How can I find EcoFlow deals?", a: "Check CouponsBit for the latest EcoFlow discount code and current offers before purchasing a power station or solar product." },
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
                    Popular EcoFlow Searches
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "EcoFlow Discount Code",
                      "EcoFlow Power Station",
                      "Solar Generator Deals",
                      "EcoFlow Promo Code",
                      "Home Backup Power",
                      "Portable Power Stations",
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
                    Today's Top EcoFlow Deals
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                      heading: "PRIME DAY FALL SALE",
                      sub: "Up to 57% OFF chosen power stations and add-ons",
                      },
                      {
                      heading: "DELTA PRO ULTRA – 27% OFF",
                      sub: "Now $4,199, reduced from $5,799",
                      },
                      {
                      heading: "NEXTGEN SOLAR PANEL",
                      sub: "220W Bifacial Portable Solar Panel starts at $399",
                      },
                      {
                      heading: "REFER A FRIEND",
                      sub: "Earn up to $500 in cash rewards",
                      },
                    ].map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                          {i + 1}
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
                          aria-label={`Shop EcoFlow: ${deal.heading}`}
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
