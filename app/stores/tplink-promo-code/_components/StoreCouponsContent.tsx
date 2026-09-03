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
  Pizza, Sandwich, Drumstick,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Router,
  Network, 
  Gamepad2, 
  Calculator,
  Video, 
  Plug, 
  Calendar, 
  Package, 
  Clock,
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788436259/20_ujztbz.webp" alt="TP-Link Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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

                <div className="w-full flex justify-center mb-6">
                  <a
                    href="https://www.google.com/preferences/source?q=couponsbit.us"
                    target="_blank"
                    rel="noopener noreferrer"
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
                  <h3 className="text-black font-black text-lg mb-6">What Is a TP-Link Promo Code?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    A TP-Link promo code is a promotional code that may provide a discount or another promotional benefit on an eligible purchase.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The availability and conditions of promotional codes can vary by country, product, retailer, campaign, and date. An offer available to shoppers in the U.S. may not necessarily apply to customers in Canada or the UK.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Before using any promotion, check its terms and confirm that the products in your cart qualify.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    At CouponsBit, shoppers can check for available TP-Link promotions before visiting the relevant regional store.

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
  <h3 className="text-black font-black text-lg mb-6">
    TP-Link Deals & Offers
  </h3>
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
    A promo code isn't necessarily the only way to save when shopping for networking equipment.
  </p>
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 text-justify">
    Depending on the market and current campaigns, shoppers may find opportunities involving:
  </p>
  <div className="space-y-8 mb-8">
    {[
      {
        icon: Wifi,
        title: "Router promotions",
        sub: "Discounts and special pricing on standard home and office routers."
      },
      {
        icon: Network,
        title: "Mesh Wi-Fi offers",
        sub: "Promotional savings on Deco and mesh Wi-Fi system packages."
      },
      {
        icon: Gamepad2,
        title: "Gaming networking deals",
        sub: "Savings on high-performance gaming routers and networking gear."
      },
      {
        icon: Home,
        title: "Smart-home discounts",
        sub: "Offers covering smart plugs, smart bulbs, and connected home tech."
      },
      {
        icon: Video,
        title: "Security-camera offers",
        sub: "Promotional pricing on indoor and outdoor security cameras."
      },
      {
        icon: Plug,
        title: "Accessory promotions",
        sub: "Deals on network adapters, switches, extenders, and accessories."
      },
      {
        icon: Calendar,
        title: "Seasonal sales",
        sub: "Category-wide discounts tied to major shopping seasons and events."
      },
      {
        icon: Percent,
        title: "Clearance offers",
        sub: "Special clearance pricing on previous-generation models and inventory."
      },
      {
        icon: Package,
        title: "Bundle promotions",
        sub: "Multi-pack savings and combination hardware packages."
      },
      {
        icon: Clock,
        title: "Limited-time campaigns",
        sub: "Short-term flash sales and time-sensitive promotional codes."
      }
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start text-justify">
        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
          <item.icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-black font-black text-sm leading-tight mb-2">
            {item.title}
          </p>
          <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
            {item.sub}
          </p>
        </div>
      </div>
    ))}
  </div>
  <p className="text-gray-500 font-bold text-sm leading-relaxed text-justify">
    Because TP-Link sells products across several categories, it's worth checking the specific product you're interested in rather than assuming every promotion applies across the entire catalog.
  </p>
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
          TP-Link Promo Code, Deals & Offers
        </h2>

        <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[850px] border-collapse text-left">
      <thead>
        <tr className="bg-[#056BFA]">
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Offer</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Discount / Price</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Eligibility</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Key Conditions</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Applicable On</th>
        </tr>
      </thead>
      <tbody className="text-[14px] font-bold text-gray-600">
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Tapo Anniversary Sale 🎉
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 50% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Limited-time sale; earn 3X Rewards Points on eligible purchases
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Home security, automation &amp; robot vacuums
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Tapo RV50 Pro Omni Vacuum Deal 🤖
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $499.99 <span className="text-xs text-gray-400 line-through">$699.99</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Save $200; features 15,000Pa suction &amp; self-cleaning LiDAR navigation
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Tapo RV50 Pro Omni Robot Vacuum &amp; Mop
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Deco 7 Pro Mesh Bundle Deal 📡
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $539.98 <span className="text-xs text-gray-400 line-through">$749.90</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Save $210; includes BE10000 indoor &amp; BE25 outdoor coverage
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Deco 7 Pro Outdoor Wi-Fi 7 Mesh System Bundle
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            4K Solar Security Camera Bundle ☀️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $599.95 <span className="text-xs text-gray-400 line-through">$829.95</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Save $230; includes 4K Pan/Tilt solar cameras + CentralHub H500
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Tapo C660 Kit 4K Solar Security Camera Bundle
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            MagCam C425 Buy 2 Get 2 Free 📹
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $259.96 <span className="text-xs text-gray-400 line-through">$519.96</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Save $260 (50% OFF); 4-pack bundle with 2K QHD video &amp; magnetic mounts
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            MagCam 2K Wireless Battery-Powered Camera 4-Pack
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            MagCam 4K Solar Camera 3-Pack 🔋
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $259.97 <span className="text-xs text-gray-400 line-through">$449.97</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Save $190 (42% OFF); solar powered with magnetic installation
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Tapo C460 MagCam 4K Solar Security Camera 3-Pack
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Tapo C460 Smart Security Bundle 🏠
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $479.95 <span className="text-xs text-gray-400 line-through">$749.95</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Save $270 (36% OFF); includes solar outdoor cameras &amp; CentralHub H500
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Tapo C460 Kit 4K Solar Outdoor Camera Bundle
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            C660 4K Solar Camera 3-Pack ☀️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $349.97 <span className="text-xs text-gray-400 line-through">$509.97</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Save $160 (31% OFF); 4K UHD video with pan/tilt functionality
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Tapo C660 Kit 4K Solar Outdoor Camera 3-Pack
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Deco 7 Pro Wi-Fi 7 Mesh 2-Pack 🌐
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $329.99 <span className="text-xs text-gray-400 line-through">$599.98</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Save $269.99 (45% OFF); BE10000 tri-band with coverage up to 5,800 sq ft
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Deco 7 Pro BE10000 Wi-Fi 7 Mesh System 2-Pack
          </td>
        </tr>

        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Tapo RV30 MAX Plus Robot Vacuum 🧹
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $229.99 <span className="text-xs text-gray-400 line-through">$329.99</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Save $100 (30% OFF); 5,300Pa suction with auto-empty dock &amp; LiDAR
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Tapo RV30 MAX Plus LiDAR Robot Vacuum &amp; Mop
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        {/* Expandable Content Area */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative transition-all", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a TP-Link Promo Code and Save on Your Next Purchase</h3>
            <p>
              Looking for a TP-Link promo code before upgrading your home or business network? Whether you need a faster Wi-Fi router, a whole-home mesh system, a range extender, a 4G or 5G gateway, networking accessories, or smart-home devices, checking for available promotions before you buy can help you get more value from your purchase.
            </p>
            <p>
              TP-Link offers a broad ecosystem of networking and connected-home products across its consumer, smart-home, and business ranges. Its portfolio includes Archer routers, Deco mesh Wi-Fi systems, Tapo smart-home products, Omada business networking solutions, VIGI security products, adapters, switches, access points, and more. The exact assortment varies by market, so shoppers in the USA, Canada, and UK can explore their respective TP-Link stores for region-specific products and offers.
            </p>
            <p>
              At CouponsBit, you can check available TP-Link promotions before heading to the retailer. Whether you're building a new network or replacing an older device, comparing the available offers can be a useful final step before checkout.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Shop TP-Link?</h3>
            <p>
              A reliable internet connection has become essential for everything from streaming and gaming to remote work, video calls, smart-home devices, and connected security systems. TP-Link offers products designed for different network sizes, internet connections, budgets, and use cases.
            </p>
            <p>
              For home users, the Archer and Deco families cover traditional routers and whole-home mesh networking. The Tapo range expands into smart cameras, doorbells, plugs, lighting, sensors, and other connected devices. For businesses and professional deployments, TP-Link offers Omada networking and VIGI surveillance products.
            </p>
            <p>
              That means shoppers can start with a single router or extender and build a much larger connected setup as their requirements change.
            </p>
          </div>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  {/* TP-Link Wi-Fi Routers */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">TP-Link Wi-Fi Routers</h3>
    <p>
      A router is the foundation of many home networks, and TP-Link offers routers across several generations and performance levels.
    </p>
    <p>
      Its current U.S. and Canadian ranges include Wi-Fi 7, Wi-Fi 6E, Wi-Fi 6, Wi-Fi 5, and gaming routers, while individual models offer different speeds, wireless bands, Ethernet connectivity, and advanced features.
    </p>
  </div>

  {/* Wi-Fi 7 Routers */}
  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Wi-Fi 7 Routers</h4>
    <p>
      For shoppers looking for the latest generation of wireless networking, TP-Link offers Wi-Fi 7 routers with features designed for high-speed connections and demanding multi-device environments.
    </p>
    <p>
      Models in the range include options such as the Archer BE900, BE800, BE700, BE550, BE6500, and other Wi-Fi 7 routers, with specifications varying by model and market. Some feature multi-gigabit Ethernet ports and multiple wireless bands.
    </p>
    <p>
      These routers can be particularly relevant for households with fast broadband, multiple connected devices, high-resolution streaming, gaming, or other bandwidth-intensive activities.
    </p>
  </div>

  {/* Wi-Fi 6 & Wi-Fi 6E Routers */}
  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Wi-Fi 6 &amp; Wi-Fi 6E Routers</h4>
    <p>
      Wi-Fi 6 and Wi-Fi 6E routers provide alternatives for shoppers who want modern wireless technology without necessarily moving to the newest Wi-Fi 7 hardware.
    </p>
    <p>
      TP-Link offers models across different speed classes, coverage requirements, and feature sets.
    </p>
  </div>

  {/* Gaming Routers */}
  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Gaming Routers</h4>
    <p>
      Gamers can explore dedicated TP-Link gaming routers designed around gaming-focused features and connectivity. The current range includes models under the Archer gaming lineup, with options offering features such as game acceleration, multi-gigabit connectivity, and dedicated gaming controls.
    </p>
    <p>
      A gaming router can be worth considering when several people share a connection or when consistent network performance matters during online gaming.
    </p>
  </div>

  {/* VPN Routers */}
  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">VPN Routers</h4>
    <p>
      TP-Link also offers routers with VPN-related functionality, giving shoppers options when they need networking features beyond basic wireless connectivity.
    </p>
  </div>

  {/* TP-Link Deco Mesh Wi-Fi */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">TP-Link Deco Mesh Wi-Fi</h3>
    <p>
      If one router struggles to provide consistent coverage throughout a larger home, TP-Link Deco mesh Wi-Fi can be an alternative to traditional single-router setups.
    </p>
    <p>
      Deco systems use multiple units working together to create a unified network. TP-Link says Deco units can work together under one network name, with devices automatically connecting to the appropriate Deco as users move around the home.
    </p>
  </div>

  {/* Wi-Fi 7 Mesh Systems */}
  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Wi-Fi 7 Mesh Systems</h4>
    <p>
      TP-Link's Deco range includes newer Wi-Fi 7 systems designed for households looking for high-performance whole-home connectivity.
    </p>
    <p>
      Models include products such as Deco BE95, BE85, BE75, BE65, and BE25, with specifications differing by model and region.
    </p>
  </div>

  {/* Wi-Fi 6 & Wi-Fi 6E Mesh */}
  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Wi-Fi 6 &amp; Wi-Fi 6E Mesh</h4>
    <p>
      Shoppers can also choose from Deco Wi-Fi 6 and Wi-Fi 6E systems, including models such as the Deco XE75, X50, X20, and other systems.
    </p>
    <p>
      These can be useful for homes with multiple rooms, connected devices, streaming requirements, home offices, and areas where a conventional router leaves dead zones.
    </p>
  </div>

  {/* Outdoor Mesh Wi-Fi */}
  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Outdoor Mesh Wi-Fi</h4>
    <p>
      TP-Link also offers outdoor-oriented Deco products. These can be useful for shoppers who want to extend connectivity beyond the main indoor living area.
    </p>
  </div>

  {/* PoE Mesh Solutions */}
  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">PoE Mesh Solutions</h4>
    <p>
      Certain Deco models support Power over Ethernet, offering another installation option for users with compatible networking infrastructure.
    </p>
  </div>

  {/* TP-Link Wi-Fi Range Extenders */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">TP-Link Wi-Fi Range Extenders</h3>
    <p>
      Not every shopper needs to replace their router. If the existing network works well in most areas but struggles in a particular room, a Wi-Fi range extender can be a simpler solution.
    </p>
    <p>
      TP-Link's extender lineup includes models across Wi-Fi 7, Wi-Fi 6, Wi-Fi 6E, and earlier standards. Examples include the RE655BE, RE700X, RE705X, RE815XE, RE715X, RE550, and other range extenders.
    </p>
    <p>Range extenders can be useful for:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Bedrooms far from the router",
        "Home offices",
        "Garages",
        "Upstairs rooms",
        "Larger homes",
        "Areas with weak wireless signals"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      The appropriate model depends on your existing router, required speed, coverage area, and compatibility requirements.
    </p>
  </div>

  {/* TP-Link 4G & 5G Routers */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">TP-Link 4G &amp; 5G Routers</h3>
    <p>Traditional broadband isn't the only way to connect a home or office.</p>
    <p>
      TP-Link offers 4G and 5G routers that can use cellular networks to provide internet connectivity. The UK range, for example, includes products such as the Archer NX200 5G router and other 4G/5G models.
    </p>
    <p>These devices can be useful for:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Homes without fixed broadband",
        "Backup internet connections",
        "Temporary locations",
        "Remote work setups",
        "Travel and mobile connectivity",
        "Rural or hard-to-wire locations"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      Because cellular compatibility varies by country and carrier, shoppers should check the specifications and network compatibility for their region before purchasing.
    </p>
  </div>

  {/* TP-Link DSL Modems & Routers */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">TP-Link DSL Modems &amp; Routers</h3>
    <p>
      For shoppers using compatible DSL broadband connections, TP-Link offers modem-router products that combine modem and wireless networking functionality.
    </p>
    <p>
      The UK range includes products such as the Archer VR400, Archer VX1800v, TD-W9960, and TD-W9950, with different DSL standards, Wi-Fi capabilities, ports, and features.
    </p>
    <p>
      These products can be useful when you want a single device to manage your broadband connection and local wireless network.
    </p>
  </div>

  {/* TP-Link Network Adapters */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">TP-Link Network Adapters</h3>
    <p>
      A computer or laptop may not always have the wireless capabilities you need. TP-Link's adapters provide another way to add or upgrade connectivity.
    </p>
    <p>Its product ranges include:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "USB Wi-Fi adapters",
        "High-gain wireless adapters",
        "Wi-Fi 6 adapters",
        "Wi-Fi 7 adapters",
        "Bluetooth adapters",
        "PCIe network adapters"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      The Canadian TP-Link store, for example, currently lists products including the Archer T4U Plus AC1300, Archer TBE400U Plus Wi-Fi 7 adapter, UB500 Bluetooth adapter, and newer Bluetooth products.
    </p>
    <p>
      These can be useful when upgrading an older desktop, improving wireless connectivity, or adding Bluetooth functionality to compatible computers.
    </p>
  </div>

  {/* TP-Link Ethernet Switches */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">TP-Link Ethernet Switches</h3>
    <p>
      For homes, offices, gaming setups, and larger networks, Ethernet switches can provide additional wired connections.
    </p>
    <p>TP-Link offers different types of switches, including:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Unmanaged switches",
        "Easy Smart switches",
        "Managed switches",
        "Gigabit switches",
        "Multi-gigabit switches",
        "PoE switches",
        "Business networking switches"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      A switch can be particularly useful when several wired devices need to connect to the same network, such as desktop computers, gaming consoles, smart TVs, access points, cameras, printers, or network storage.
    </p>
  </div>

  {/* TP-Link Access Points */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">TP-Link Access Points</h3>
    <p>
      Access points provide another way to expand wireless coverage, particularly in business or more advanced network environments.
    </p>
    <p>
      TP-Link's Omada range includes wireless access points designed for professional deployments. The UK store currently highlights products such as the EAP772 BE9300 Tri-Band Wi-Fi 7 access point.
    </p>
    <p>
      These products can be relevant for offices, hospitality spaces, schools, commercial properties, and other environments requiring centrally managed wireless networking.
    </p>
  </div>

  {/* TP-Link Omada Business Networking */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">TP-Link Omada Business Networking</h3>
    <p>
      TP-Link's Omada ecosystem is designed for business and professional networking rather than only household connectivity.
    </p>
    <p>The range covers products such as:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Wi-Fi access points",
        "Network switches",
        "PoE switches",
        "Gateways",
        "Controllers",
        "Cloud-managed networking equipment",
        "Wireless bridges",
        "Business networking accessories"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      TP-Link's current U.S. and UK sites feature Omada products ranging from multi-port switches to Wi-Fi 7 access points and wireless bridge solutions.
    </p>
    <p>
      For businesses, Omada can provide a broader networking ecosystem than simply purchasing an individual consumer router.
    </p>
  </div>

  {/* TP-Link VIGI Security & Surveillance */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">TP-Link VIGI Security &amp; Surveillance</h3>
    <p>
      TP-Link also operates VIGI, a security and surveillance product range for businesses and professional environments.
    </p>
    <p>
      Products include network cameras and related surveillance equipment. The UK site currently features VIGI products such as the InSight S445 4MP Full-Color Turret Network Camera.
    </p>
    <p>
      Businesses can explore surveillance products alongside networking infrastructure when building a connected security setup.
    </p>
  </div>

  {/* TP-Link Tapo Smart Home Products */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">TP-Link Tapo Smart Home Products</h3>
    <p>
      TP-Link's Tapo ecosystem brings connected-home functionality beyond networking.
    </p>
    <p>
      The range includes smart cameras, video doorbells, smart plugs, lighting, sensors, robot vacuums, and other smart-home products. Current U.S. and UK stores highlight products including Tapo cameras, video doorbells, robot vacuums, and smart-home devices.
    </p>
  </div>

  {/* Tapo Sub-categories */}
  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Tapo Security Cameras</h4>
    <p>
      Tapo cameras can be used for monitoring indoor and outdoor spaces. Current products include different camera designs and capabilities, including wire-free and solar-powered options.
    </p>
    <p>
      Depending on the model, shoppers can find cameras designed for indoor monitoring, outdoor security, motion detection, and other home-monitoring requirements.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Tapo Video Doorbells</h4>
    <p>
      Tapo also offers smart video doorbells, allowing homeowners to add connected monitoring to their front door.
    </p>
    <p>
      The current U.S. and UK product ranges include Tapo video doorbell products such as the Tapo D225 and Tapo D260.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Tapo Smart Plugs</h4>
    <p>
      Smart plugs can turn compatible household devices into connected appliances that can be controlled through a smart-home setup.
    </p>
    <p>
      TP-Link's portfolio includes Tapo smart plugs with options such as energy monitoring, depending on the model and market.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Tapo Smart Lighting</h4>
    <p>
      Tapo smart bulbs offer connected lighting options, including dimmable and multicolor products.
    </p>
    <p>
      These can be useful for creating different lighting environments or managing lights through a connected-home ecosystem.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Tapo Robot Vacuums</h4>
    <p>
      The Tapo range has expanded beyond cameras and plugs into home appliances. Current TP-Link stores feature robot vacuum and mop products, including models with LiDAR navigation and auto-empty docks.
    </p>
  </div>

  {/* TP-Link Products for Different Shopping Needs */}
  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">TP-Link Products for Different Shopping Needs</h3>
    <p>
      The right TP-Link product depends largely on what you are trying to accomplish.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">For Everyday Home Wi-Fi</h5>
        <p className="text-sm">
          A standard Archer router can be a practical choice for households that need reliable wireless connectivity without setting up a multi-unit mesh network.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">For Larger Homes</h5>
        <p className="text-sm">
          A Deco mesh system can be useful when you need coverage across multiple rooms, floors, or areas of a larger property.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">For Gaming</h5>
        <p className="text-sm">
          A gaming-focused Archer router can provide features designed specifically around gaming and high-performance networking.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">For Weak Wi-Fi Areas</h5>
        <p className="text-sm">
          A range extender can help improve coverage in specific areas where your primary router's signal doesn't reach effectively.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">For Cellular Internet</h5>
        <p className="text-sm">
          A 4G or 5G router can provide connectivity where cellular broadband is a suitable alternative or backup.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">For Smart Homes</h5>
        <p className="text-sm">
          Tapo products can complement your network with cameras, doorbells, plugs, lighting, sensors, and smart appliances.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2 md:col-span-2">
        <h5 className="font-bold text-gray-900">For Businesses</h5>
        <p className="text-sm">
          Omada networking and VIGI surveillance products provide options for professional connectivity and security deployments.
        </p>
      </div>
    </div>
  </div>

  {/* Truncation Gradient Overlay */}
  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          {/* How-To Steps Box */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a TP-Link Promo Code</h3>
            <div className="space-y-6">
              {[
                { title: "Step 1: Visit CouponsBit", text: "Start by checking CouponsBit for the latest TP-Link promotions available for your region." },
                { title: "Step 2: Choose an Offer", text: "Select the offer that best matches the product or products you're planning to purchase." },
                { title: "Step 3: Check the Terms", text: "Review the promotion carefully. Look for product exclusions, minimum purchase requirements, expiration dates, regional restrictions, or other conditions." },
                { title: "Step 4: Copy the Promo Code", text: "If the offer requires a code, copy it before heading to the applicable TP-Link store." },
                { title: "Step 5: Shop for Your Products", text: "Browse routers, mesh systems, extenders, smart-home products, adapters, switches, cameras, or other TP-Link products." },
                { title: "Step 6: Apply the Code", text: "Enter the promotional code in the applicable field during checkout." },
                { title: "Step 7: Confirm Your Savings", text: "Review your order total to ensure the expected promotion has been applied before completing your purchase." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 italic">
                    {i + 1}
                  </div>
                  <div className="mt-1">
                    <strong className="text-gray-900 font-black block">{step.title}</strong>
                    <p className="text-gray-700 font-bold leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shopping for TP-Link in the USA, Canada & UK</h3>
            <p>
              TP-Link maintains separate regional websites and product catalogs for different markets, so shoppers should make sure they're browsing the store intended for their country.
            </p>
            <p><strong>TP-Link USA:</strong> U.S. shoppers can browse consumer networking, Deco mesh, Tapo smart-home products, Omada business networking, and VIGI surveillance solutions.</p>
            <p><strong>TP-Link Canada:</strong> The Canadian store offers networking products including Wi-Fi 7 routers, Deco mesh systems, wireless adapters, switches, and other connected products.</p>
            <p><strong>TP-Link UK:</strong> The UK store includes home networking, Deco mesh, 4G/5G routers, Omada networking, VIGI surveillance, and Tapo smart-home products.</p>
            <p>
              Regional differences can affect product availability, specifications, compatible standards, and promotions, so always check the relevant country store before purchasing.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Choose the Right TP-Link Product</h3>
            <p>With such a large product catalog, choosing the right device can be more important than simply finding the biggest discount.</p>
            <p>Start with your internet connection. If you have a high-speed fiber connection, look for networking equipment capable of taking advantage of the available bandwidth.</p>
            <p>Consider the size of your home. A single router may be sufficient for a smaller property, while a Deco mesh system can make more sense for larger or multi-level homes.</p>
            <p>Think about wired devices. If you have several computers, consoles, cameras, or other Ethernet-connected devices, you may need a router or switch with enough ports.</p>
            <p>Consider how many devices you use. Homes with smart TVs, phones, tablets, laptops, gaming systems, cameras, smart speakers, and other connected products can benefit from networking equipment designed for multiple simultaneous connections.</p>
            <p>Don't overlook compatibility. Check Wi-Fi standards, Ethernet speeds, broadband type, cellular compatibility, and other technical requirements before ordering.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Find Your TP-Link Offer With CouponsBit</h3>
            <p>Whether you're replacing an outdated router, eliminating Wi-Fi dead zones, building a whole-home mesh network, upgrading a gaming setup, adding smart-home devices, or equipping a business network, TP-Link offers products for a wide range of connectivity needs.</p>
            <p>From Archer routers and Deco mesh systems to Tapo cameras and smart plugs, Omada business networking, VIGI surveillance, adapters, switches, and 4G/5G routers, there are plenty of products to explore.</p>
            <p>Before making your purchase in the USA, Canada, or UK, check CouponsBit for a TP-Link promo code and other available offers. Compare the promotion with the product you're considering, read the terms, and make sure you're using the appropriate regional store.</p>
            <p>A quick check before checkout could help you get more value from your next TP-Link purchase.</p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"}{" "}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQs */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About TP-Link Promo Codes</h3>
          {[
            { q: "Where can I find a TP-Link promo code?", a: "You can check CouponsBit for available TP-Link promotional offers before shopping. Make sure you select the appropriate offer for your country and product." },
            { q: "What is a TP-Link promo code?", a: "A TP-Link promo code is a promotional code that may provide a discount or other benefit on an eligible purchase. The exact terms vary between promotions." },
            { q: "Does TP-Link offer discounts?", a: "TP-Link and its regional stores may run different promotions, sales, and product-specific offers. Availability can change, so check the current offers before purchasing." },
            { q: "Does a TP-Link promo code work in every country?", a: "Not necessarily. Promotions can be region-specific. A code offered in the USA may not work on the Canadian or UK store, so check the terms and use the correct regional website." },
            { q: "What products does TP-Link sell?", a: "TP-Link sells a wide range of networking and smart-home products, including routers, mesh Wi-Fi systems, range extenders, switches, access points, network adapters, 4G/5G routers, smart cameras, video doorbells, smart plugs, smart lighting, robot vacuums, and business networking equipment." },
            { q: "What is TP-Link Deco?", a: "Deco is TP-Link's whole-home mesh Wi-Fi product family. Multiple Deco units can work together to provide a unified wireless network throughout a home." },
            { q: "What is TP-Link Tapo?", a: "Tapo is TP-Link's smart-home ecosystem, with products including security cameras, video doorbells, smart plugs, smart bulbs, sensors, and smart appliances such as robot vacuums." },
            { q: "Does TP-Link sell gaming routers?", a: "Yes. TP-Link offers gaming-oriented Archer routers with features designed for gaming and high-performance connectivity." },
            { q: "Does TP-Link sell 5G routers?", a: "Yes. TP-Link offers 5G and 4G routers in various regional catalogs. The UK range, for example, includes the Archer NX200 5G router." },
            { q: "Does TP-Link offer business networking products?", a: "Yes. Its Omada ecosystem includes business networking products such as access points, switches, gateways, controllers, and other networking equipment." },
            { q: "Can I use a TP-Link promo code on any product?", a: "That depends on the specific promotion. Some codes may be limited to selected products, categories, customers, regions, or dates. Always check the applicable terms before checkout." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa]")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform", openFaq === i && "text-white rotate-180")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Area */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular TP-Link Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Archer Routers", "Deco Mesh", "Tapo Smart Home", "Omada Business", "TP-Link Promo Code", "5G Routers", "Range Extenders", "Wi-Fi 7"].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
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
