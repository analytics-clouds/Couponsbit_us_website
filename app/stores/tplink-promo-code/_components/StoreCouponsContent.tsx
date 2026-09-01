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
  ShoppingBag,
  Router,
  Wifi,
  Home,
  Camera,
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
  { id: "d1", label: "NEW", heading: "Up to 50% OFF Tapo Anniversary Sale", sub: "Latest Deals" },
  { id: "d2", label: "SHOP", heading: "Save 29% on Tapo RV50 Pro Omni Robot Vacuum", sub: "Featured Picks" },
  { id: "d3", label: "SHOP", heading: "Save 28% on Deco 7 Pro Wi-Fi 7 Mesh System", sub: "Featured Picks" },
  { id: "d4", label: "TOP", heading: "Save 28% on 4K Solar Security Camera Bundle", sub: "Featured Picks" },
  { id: "d5", label: "BEST", heading: "Buy 2, Get 2 Free on MagCam C425", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "HP", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782890859/hp-coupon-code_vaogna.webp", dealText: "Up to 69% OFF", href: "/stores/hp-discount-code" },
  { name: "Dell", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782890858/dell-coupon-code_mxtssy.webp", dealText: "Up to 69% OFF", href: "/stores/dell-discount-code" },
  { name: "Beelink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494081/beelink-coupon-code_gephnd.jpg", dealText: "Up to 35% OFF", href: "/stores/beelink-discount-code" },
  { name: "Oppo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784970/oppo-logo_umnpx7.webp", dealText: "From $39", href: "/stores/oppo-discount-code" },
  { name: "RingConn", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp", dealText: "Starting From $199", href: "/stores/ringconn-discount-code" },
  { name: "Reolink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp", dealText: "Up to 50% OFF", href: "/stores/reolink-discount-code" },
];

const STORE_URL = "https://tplinksystemsinc.sjv.io/c/4303217/3280858/42255?subId1=1015";

export default function TplinkCouponsContent() {
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
              <span className="text-black font-extrabold">TP-Link</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788248210/tp-link-logo_y9efya.webp" alt="TP-Link" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">TP-Link</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(31.6k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified TP-Link promo codes and discount codes for Sep 2026. Save up to 50% on Tapo Anniversary Sale offers, Wi-Fi 7 mesh systems, robot vacuums, 4K solar security cameras, smart home products, and networking devices with the latest deals.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "10", label: "Offers" },
                    { icon: Percent, val: "2.4k", label: "Deals" },
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
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: 1 }}>
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788248210/tp-link-logo_y9efya.webp" alt="TP-Link Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
              <div className="lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">TP-Link Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "50% OFF", title: "TP-Link Promo Code – Up to 50% OFF Tapo Anniversary Sale", desc: "Save up to 50% during the limited-time Tapo Anniversary Sale.", bullets: ["Earn 3X Rewards Points on eligible purchases.", "Explore deals across Home Security, Home Automation, and Robot Vacuums.", "Shop limited-time offers while the Anniversary Sale is live."] },
                  { label: "SALE", value: "29% OFF", title: "TP-Link Promo Code – Save 29% on Tapo RV50 Pro Omni Robot Vacuum", desc: "Get the Tapo RV50 Pro Omni Robot Vacuum & Mop for $499.99.", bullets: ["Save $200 from the original $699.99 price.", "Features 15,000Pa suction and advanced self-cleaning technology.", "Includes LiDAR + Dual-Laser Navigation for intelligent cleaning."] },
                  { label: "SALE", value: "28% OFF", title: "TP-Link Promo Code – Save 28% on Deco 7 Pro Wi-Fi 7 Mesh System", desc: "Get the Deco 7 Pro Outdoor Wi-Fi 7 Mesh System Bundle for $539.98.", bullets: ["Save $210 from the original $749.90 price.", "Includes BE10000 indoor coverage and BE25 Outdoor Wi-Fi 7.", "Enjoy seamless roaming* across indoor and outdoor spaces."] },
                  { label: "SALE", value: "28% OFF", title: "TP-Link Tapo Deal – Save 28% on 4K Solar Security Camera Bundle", desc: "Get the Tapo C660 Kit 4K Solar Pan/Tilt Security Camera Bundle for $599.95.", bullets: ["Save $230 from the original $829.95 price.", "Enjoy 4K UHD video with solar-powered security.", "Includes Tapo CentralHub H500 for smart-home connectivity."] },
                  { label: "DEAL", value: "B2G2 FREE", title: "TP-Link Tapo Promo Deal – Buy 2, Get 2 Free on MagCam C425", desc: "Get the MagCam 2K Wireless Battery-Powered Camera 4-Pack for $259.96.", bullets: ["Save $260 from the original $519.96 price.", "Enjoy a Buy 2, Get 2 Free offer on eligible cameras.", "Features 2K QHD video, battery power, and magnetic installation*."] },
                  { label: "SALE", value: "42% OFF", title: "TP-Link Tapo Deal – Save 42% on MagCam 4K Solar Security Camera", desc: "Get the Tapo C460 MagCam 4K Solar Outdoor Security Camera 3-Pack for $259.97.", bullets: ["Save $190 from the original $449.97 price.", "Enjoy 4K UHD video for clear outdoor security monitoring.", "Features solar power and magnetic installation for easy setup."] },
                  { label: "SALE", value: "36% OFF", title: "TP-Link Promo Deal – Save 36% on Tapo C460 Smart Security Bundle", desc: "Get the Tapo C460 Kit 4K Solar Outdoor Camera Smart CentralHub Bundle for $479.95.", bullets: ["Save $270 from the original $749.95 price.", "Enjoy 4K UHD video and solar-powered outdoor security.", "Includes Tapo CentralHub H500 for connected smart-home protection."] },
                  { label: "SALE", value: "31% OFF", title: "TP-Link Tapo Deal – Save 31% on C660 4K Solar Outdoor Camera", desc: "Get the Tapo C660 Kit 4K Solar Outdoor Pan/Tilt Security Camera 3-Pack for $349.97*.", bullets: ["Save $160 from the original $509.97 price.", "Enjoy 4K UHD video with solar-powered operation.", "Features pan/tilt functionality for wider outdoor coverage."] },
                  { label: "SALE", value: "45% OFF", title: "TP-Link Promo Code – Save 45% on Deco 7 Pro Wi-Fi 7 Mesh System", desc: "Get the Deco 7 Pro BE10000 Tri-Band Wi-Fi 7 Mesh System 2-Pack for $329.99.", bullets: ["Save $269.99 from the original $599.98 price.", "Enjoy Wi-Fi 7 with BE10000 speeds* and coverage up to *5,800 sq ft.", "Features 2.5G WAN/LAN for high-speed wired connectivity."] },
                  { label: "SALE", value: "30% OFF", title: "TP-Link Promo Deal – Save 30% on Tapo RV30 MAX Plus Robot Vacuum", desc: "Get the Tapo RV30 MAX Plus LiDAR Robot Vacuum & Mop for $229.99.", bullets: ["Save $100 from the original $329.99 price.", "Enjoy powerful 5,300Pa suction* with an auto-empty dock.", "Features LiDAR + IMU Dual Navigation* for intelligent home cleaning."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[8px] text-[15px] sm:text-[15px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[15px] sm:text-3xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop TP-Link: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">About TP-Link</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    TP-Link is a networking hardware brand offering routers, mesh WiFi systems, range extenders, smart home devices and security cameras.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Router, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Wifi, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Home, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                        { icon: Search, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
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
                  <h3 className="text-black font-black text-lg mb-8">TP-Link Products & Services</h3>
                  <div className="space-y-8">
                    {[
                      { icon: Router, title: "Routers", sub: "WiFi 6 and WiFi 7 routers for home and office." },
                      { icon: Wifi, title: "Mesh WiFi", sub: "Deco and other systems for whole-home coverage." },
                      { icon: Home, title: "Smart Home", sub: "Smart plugs and connected home devices." },
                      { icon: Camera, title: "Security Cameras", sub: "Tapo and other indoor and outdoor cameras." },
                    ].map((item, i) => (
                      <div key={item.title} className="flex gap-4 items-start text-justify">
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
              <div className="prose max-w-none text-justify">
                <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                  TP-Link Promo Codes, Coupon Codes & Networking Deals 2026
                </h2>

                <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[850px]">
                    <thead>
                      <tr className="bg-[#056BFA]">
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 font-bold text-[14px]">
                      {[
                        ["Tapo Anniversary Sale", "Up to 50% OFF", "All Users", "3X Rewards Points on eligible purchases", "Home Security, Automation & Vacuums"],
                        ["Tapo RV50 Pro Omni Robot Vacuum", "Save 29% ($499.99)", "All Users", "15,000Pa suction, self-cleaning", "Robot vacuums"],
                        ["Deco 7 Pro Wi-Fi 7 Mesh Bundle", "Save 28% ($539.98)", "All Users", "BE10000 indoor + BE25 outdoor coverage", "Mesh Wi-Fi"],
                        ["Tapo C660 4K Solar Camera Bundle", "Save 28% ($599.95)", "All Users", "Includes Tapo CentralHub H500", "Security cameras"],
                        ["MagCam C425 4-Pack", "Buy 2, Get 2 Free ($259.96)", "All Users", "2K QHD video, battery-powered", "Security cameras"],
                        ["Tapo C460 MagCam Solar Camera 3-Pack", "Save 42% ($259.97)", "All Users", "Solar power, magnetic installation", "Security cameras"],
                        ["Tapo C460 Smart Security Bundle", "Save 36% ($479.95)", "All Users", "Includes Tapo CentralHub H500", "Security cameras"],
                        ["Tapo C660 4K Solar Camera 3-Pack", "Save 31% ($349.97)", "All Users", "Pan/tilt outdoor coverage", "Security cameras"],
                        ["Deco 7 Pro Wi-Fi 7 Mesh 2-Pack", "Save 45% ($329.99)", "All Users", "BE10000 speeds, coverage up to 5,800 sq ft", "Mesh Wi-Fi"],
                        ["Tapo RV30 MAX Plus Robot Vacuum", "Save 30% ($229.99)", "All Users", "5,300Pa suction, auto-empty dock", "Robot vacuums"],
                      ].map((row, i) => (
                        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 9 && "border-b-0")}>
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
                    Looking for the latest <strong>TP-Link promo codes and coupon codes</strong>? At Couponsbit, we help shoppers find router offers, mesh WiFi deals, smart home picks and range extender offers.
                  </p>
                  <p>
                    Whether you're upgrading your home network or setting up smart home devices, TP-Link offers a wide range of networking products. Before you shop, check Couponsbit for the latest TP-Link offers.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Know More About TP-Link</h3>
                    <p>
                      TP-Link is a networking hardware brand offering routers, mesh WiFi systems, range extenders, smart home devices and security cameras.
                    </p>
                    <p>
                      With products spanning home and small-office networking, TP-Link serves shoppers looking to improve WiFi coverage and connectivity.
                    </p>
                    <p>
                      At Couponsbit, we help shoppers discover the latest TP-Link offers, router picks and smart home highlights in one place.
                    </p>
                  </div>

                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use TP-Link via Couponsbit</h3>
                    <div className="space-y-6">
                      {[
                        "Step 1: Browse Available TP-Link Offers — Visit the TP-Link page on Couponsbit and explore the latest offers.",
                        "Step 2: Select Your Preferred Offer — Choose the offer that best fits your networking needs.",
                        "Step 3: Click Get Deal — You'll be taken directly to the relevant TP-Link page.",
                        "Step 4: Browse Products — Explore routers, mesh WiFi, smart home devices or cameras.",
                        "Step 5: Check Range Extender Offers — Review options for expanding your coverage.",
                        "Step 6: Complete Your Purchase — Add items to your cart and check out on TP-Link.",
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                          <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save at TP-Link</h3>
                    <p><strong>Check Couponsbit Before Shopping:</strong> Always visit Couponsbit before shopping to see the latest TP-Link offers.</p>
                    <p><strong>Compare Router Models:</strong> WiFi 6 and WiFi 7 routers can offer different value depending on your needs.</p>
                    <p><strong>Bundle Mesh Units:</strong> Multi-pack mesh WiFi systems can offer better overall coverage value.</p>
                    <p><strong>Plan Your Smart Home Setup:</strong> Bundling smart home devices can add up to bigger savings.</p>
                    <p><strong>Check Retailer-Specific Pricing:</strong> Availability and pricing can vary by channel.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose TP-Link?</h3>
                    <p><strong>Wide Product Range:</strong> Routers, mesh WiFi, smart home and security cameras under one brand.</p>
                    <p><strong>Reliable Networking:</strong> Products designed for consistent home and office coverage.</p>
                    <p><strong>Smart Home Ready:</strong> Devices suited for connected home setups.</p>
                    <p><strong>Trusted Brand:</strong> A well-known name in consumer networking hardware.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for TP-Link Deals?</h3>
                    <p><strong>Curated TP-Link Offers:</strong> We regularly review available TP-Link offers to help users discover current promotions.</p>
                    <p><strong>Convenient Browsing:</strong> Find router picks, mesh WiFi deals and smart home highlights in one place.</p>
                    <p><strong>Completely Free:</strong> Couponsbit is free to use and helps customers save across electronics, home, travel and more.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More on Your Next Purchase</h3>
                    <p>Whether you're upgrading your router, adding mesh WiFi coverage, or setting up smart home devices, TP-Link offers a range of options to explore.</p>
                    <p>Before your next purchase, check Couponsbit to explore the latest TP-Link offers and updates.</p>
                  </div>

                  {!isReadMore && (
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
                  )}
                </div>

                <button onClick={() => setIsReadMore(!isReadMore)} className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline">
                  {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
                </button>

                {/* FAQ */}
                <div className="mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
                  {[
                    { q: "What is TP-Link?", a: "TP-Link is a networking hardware brand offering routers, mesh WiFi systems, range extenders, smart home devices and security cameras." },
                    { q: "Does TP-Link offer promo codes?", a: "Yes. TP-Link runs promotions such as mesh WiFi deals and smart home picks." },
                    { q: "Where can I find TP-Link promo codes?", a: "You can find the latest TP-Link promo codes and offers on Couponsbit." },
                    { q: "Does TP-Link sell smart home devices?", a: "Yes. TP-Link offers smart home devices including smart plugs, cameras and connected accessories alongside its networking products." },
                    { q: "Does TP-Link sell WiFi range extenders?", a: "Yes. TP-Link offers a range of WiFi extenders designed to boost coverage alongside its routers and mesh systems." },
                    { q: "Is Couponsbit free to use?", a: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers." },
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

              {/* Sidebar */}
              <div className="space-y-10">
                <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular TP-Link Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["WiFi Routers", "Mesh WiFi", "Smart Plugs", "TP-Link Promo Code", "Range Extenders", "Tapo Cameras", "Smart Home", "Networking Deals"].map(tag => (
                      <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top TP-Link Deals</h3>
                  <div className="space-y-6">
                    {DEALS.map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">T</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop TP-Link: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
