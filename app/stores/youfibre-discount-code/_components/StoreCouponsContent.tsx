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
  Cpu, Radio, ArrowRightLeft,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Gift,
  Wifi,
  Router,
  Gauge,
  Home as HomeIcon,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "AT&T", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/att_logo_xntyq0.webp", dealText: "Up To $1,900 OFF", href: "/stores/att-promo-code" },
  { name: "TP-Link", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/tp-link-logo_y9efya.webp", dealText: "Up To 50% OFF", href: "/stores/tplink-promo-code" },
  { name: "Lyca Mobile", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/lyca-mobile-coupon-code_svvddg.webp", dealText: "Up to 69% OFF", href: "/stores/lyca-mobile-discount-code" },
  { name: "Apple", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/apple-logo_vrakxu.webp", dealText: "Up To $150 Gift Card", href: "/stores/apple-discount-code" },
  { name: "Jetpac", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787741564/jetpac-logo_prj8gu.webp", dealText: "Save Up To 70%", href: "/stores/jetpac-discount-code" },
];

const STORE_URL = "https://youfibre.pxf.io/c/4303217/1911351/22933?subId1=1015";

export default function YouFibreContent() {
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
              <span className="text-black font-extrabold">YouFibre</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1790831304/youfibre-logo_egqvo6.webp" alt="YouFibre" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">YouFibre Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(2,300 Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save on high-speed broadband with the latest YouFibre Discount Code and YouFibre Promo Code. Get 1000 Mbps from £25/month, 7000 Mbps from £50/month, or choose 1800 Mbps from £30/month, all with free installation, a Wi-Fi 7 Hub, and fixed-price plans. Find the best broadband deal for your needs.
                    
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
                    { icon: Tag, val: "7", label: "Offers" },
                    { icon: Percent, val: "6", label: "Deals" },
                    { icon: Users, val: "15K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790833996/youfibe-discount-code_x6i7vh.webp" alt="YouFibre Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">YouFibre Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "FROM", value: "£25", title: "YouFibre Full Fibre 1000 – Get 1000 Mbps Broadband for £25/Month", desc: "Switch to YouFibre Full Fibre 1000 for just £25 per month.", bullets: ["Lock in a 24-month fixed price with no in-contract price increases.", "Enjoy fast broadband for streaming, gaming, video calls, and working from home.", "Get a Wi-Fi 7 Hub, free installation, and no set-up fees included."] },
                  { label: "FROM", value: "£50", title: "YouFibre YOU 8000 – Superfast 7000 Mbps for £50/Month", desc: "Get the YOU 8000 plan for £50 per month with a 24-month fixed-price contract.", bullets: ["Experience average wired download and upload speeds of up to 7000 Mbps, device dependent.", "Designed for serious gamers, power users, and busy households with high internet demands.", "Includes Wi-Fi 7 Hub, free installation, no set-up fees, and no in-contract price rises."] },
                  { label: "FROM", value: "£30", title: "YouFibre YOU 2000 – 1800 Mbps Full Fibre for £30/Month", desc: "Enjoy the YOU 2000 plan for £30 per month with a 24-month fixed price.", bullets: ["Get average wired speeds of up to 1800 Mbps, device dependent.", "Ideal for 4K streaming, large file uploads, smart homes, and multiple connected devices.", "Wi-Fi 7 Hub and free installation are included with no set-up fees."] },
                  { label: "FROM", value: "£25", title: "YouFibre YOU 1000 – 900 Mbps Full Fibre at £25/Month", desc: "Choose the YOU 1000 plan for £25 per month on a 24-month fixed-price deal.", bullets: ["Get average wired speeds of up to 900 Mbps, device dependent.", "Built for everyday high-speed use including streaming, gaming, and working from home.", "Enjoy a Wi-Fi 7 Hub, free installation, and no in-contract price rises."] },
                  { label: "FROM", value: "£129.99", title: "YouFibre YOU 8000 Rolling Plan – 7000 Mbps for £129.99/Month", desc: "Choose the YOU 8000 Rolling Monthly plan for £129.99 per month.", bullets: ["Get average wired speeds of up to 7000 Mbps, device dependent.", "A high-performance option for power users, serious gamers, and demanding households.", "Includes Wi-Fi 7 Hub, free installation, no set-up fees, and no in-contract price rises."] },
                  { label: "FROM", value: "£44.99", title: "YouFibre YOU 2000 Rolling Plan – 1800 Mbps for £44.99/Month", desc: "Get YOU 2000 on a Rolling Monthly plan for £44.99 per month.", bullets: ["Enjoy average wired speeds of up to 1800 Mbps, device dependent.", "Suitable for 4K streaming, large uploads, smart home devices, and heavy internet usage.", "Wi-Fi 7 Hub, free installation, and no set-up fees are included."] },
                  { label: "FROM", value: "£39.99", title: "YouFibre YOU 1000 Rolling Plan – 900 Mbps for £39.99/Month", desc: "Get YOU 1000 on a flexible Rolling Monthly plan for £39.99 per month.", bullets: ["Enjoy average wired speeds of up to 900 Mbps, device dependent.", "A strong option for streaming, gaming, remote work, and everyday browsing.", "Includes a Wi-Fi 7 Hub, free installation, and no set-up fees."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop YouFibre: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is YouFibre?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    YouFibre is a UK broadband provider specialising in Full Fibre broadband for homes and businesses. Its residential plans offer a range of speeds, with eligible customers able to access connections of up to 8,000 Mbps. Availability depends on your address, so you need to check your postcode before choosing a plan.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The provider focuses on giving customers more flexibility around their broadband package. Depending on the plan, customers can choose between rolling monthly and fixed-term options, while YouFibre also highlights features such as a minimum speed guarantee, price matching, contract buyout and fixed-price plans.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Beyond broadband, YouFibre offers additional services including YouMesh, YouPhone and Static IP. This means customers can add services depending on how they use their connection rather than paying for features they don't need.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Wifi, name: "Full Fibre Broadband", count: "10+", color: "text-blue-500", href: "/categories/mobile" },
                        { icon: Gauge, name: "Speed Plans", count: "8+", color: "text-purple-500", href: "/categories/mobile" },
                        { icon: Router, name: "Home Networking", count: "6+", color: "text-pink-500", href: "/categories/mobile" },
                        { icon: HomeIcon, name: "Bundle Offers", count: "5+", color: "text-teal-500", href: "/categories/mobile" },
                        { icon: Percent, name: "Promo Offers", count: "6+", color: "text-orange-500", href: "/categories/mobile" },
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
    How to Use a YouFibre Promo Code
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      If CouponsBit lists a valid YouFibre promo code, check its terms before trying to redeem it. Then follow these steps:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">1.</span>
        <span>Visit CouponsBit and check the latest YouFibre discount offers.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">2.</span>
        <span>Select the relevant YouFibre deal or promotional code.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">3.</span>
        <span>Visit YouFibre and enter your postcode to check availability.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">4.</span>
        <span>Choose a broadband speed and contract option that suits your requirements.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">5.</span>
        <span>Apply the promo code if the offer requires one.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">6.</span>
        <span>Review the final order details and confirm that any applicable promotion has been reflected before completing the purchase.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      YouFibre requires customers to check their address because Full Fibre availability varies by location.
    </p>
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
          YouFibre Discount Code, Promo Code & Broadband Deals
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
        ["YouFibre Full Fibre 1000", "£25 / month", "All Users", "24-month fixed price, no price rises, includes Wi-Fi 7 Hub & free installation", "1000 Mbps Broadband"],
        ["YouFibre YOU 8000", "£50 / month", "All Users", "24-month fixed price, avg up to 7000 Mbps, Wi-Fi 7 Hub & free installation", "Superfast 7000 Mbps"],
        ["YouFibre YOU 2000", "£30 / month", "All Users", "24-month fixed price, avg up to 1800 Mbps, Wi-Fi 7 Hub & free installation", "1800 Mbps Full Fibre"],
        ["YouFibre YOU 1000", "£25 / month", "All Users", "24-month fixed price, avg up to 900 Mbps, Wi-Fi 7 Hub & free installation", "900 Mbps Full Fibre"],
        ["YouFibre YOU 8000 Rolling Plan", "£129.99 / month", "All Users", "Rolling monthly plan, avg up to 7000 Mbps, Wi-Fi 7 Hub & free setup", "7000 Mbps Rolling"],
        ["YouFibre YOU 2000 Rolling Plan", "£44.99 / month", "All Users", "Rolling monthly plan, avg up to 1800 Mbps, Wi-Fi 7 Hub & free setup", "1800 Mbps Rolling"],
        ["YouFibre YOU 1000 Rolling Plan", "£39.99 / month", "All Users", "Rolling monthly plan, avg up to 900 Mbps, Wi-Fi 7 Hub & free setup", "900 Mbps Rolling"]
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

        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            A broadband connection is no longer just about getting online. With streaming, gaming, video calls, smart TVs, work laptops and connected devices all competing for bandwidth, choosing the right internet plan can make a noticeable difference to everyday life. If you're considering a new connection or switching providers, checking for a YouFibre discount code before signing up can be a smart first step.
          </p>
          <p>
            CouponsBit brings together YouFibre deals, promotional offers and discount opportunities so you can explore your options before committing to a broadband plan. Whether you need reliable internet for everyday browsing or serious speeds for a busy household, comparing the available offers can help you choose a package that makes sense for your needs.
          </p>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Why Might a YouFibre Discount Code Not Work?
              </h3>
              <p>
                Finding a code does not always mean it will apply to every broadband order. A YouFibre discount code may have specific eligibility requirements, an expiry date, restrictions on selected plans or other terms.
              </p>
              <p>
                If a code doesn't work, check that you've entered it correctly and that you're purchasing an eligible service. You should also check whether the offer is intended for new customers, existing customers or a particular contract type.
              </p>
              <p>
                If the code still doesn't apply, compare the available YouFibre deals directly. A promotional offer may provide better overall value even when a separate coupon code isn't available.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                How to Get More Value From Your YouFibre Order
              </h3>
              <p>
                Don't judge a broadband deal only by its promotional discount. Look at the complete package.
              </p>
              <p>
                Consider the broadband speed, contract length, Wi-Fi equipment, installation requirements and whether you'll actually use optional services such as YouMesh or YouPhone. You should also check whether the connection is available at your address before spending time comparing plans.
              </p>
              <p>
                It's also worth checking CouponsBit before major UK shopping periods and throughout the year, as broadband providers can introduce limited-time promotions and new customer offers.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Why Check CouponsBit for YouFibre Deals?
              </h3>
              <p>
                CouponsBit makes it easier to look for savings before you make a broadband purchase. Instead of going straight to a provider and accepting the first offer you see, you can check for a YouFibre discount code, promo code or current deal first.
              </p>
              <p>
                The goal isn't simply to find the biggest-looking discount. It's to find an offer that works with the broadband package you actually need.
              </p>
              <p>
                For example, a slightly different promotion could be more useful if it applies to the speed or contract you're considering. Comparing the code, offer terms and overall package can help you make a more informed decision.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12 py-8 px-4 sm:px-6">

  {/* Hero / Header Section */}
  <section className="text-center space-y-4 max-w-3xl mx-auto">
    <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold text-[#056bfa] bg-[#056bfa]/10">
      YouFibre Broadband Guide
    </Badge>
    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
      Find a YouFibre Discount Code on CouponsBit
    </h1>
    <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-left sm:text-center">
      <p>
        Before choosing a broadband plan, check CouponsBit for a current YouFibre discount code. Broadband promotions can change, so checking available offers before completing your order gives you a chance to see whether there is a relevant deal available.
      </p>
      <p>
        A YouFibre promo code may not always be the only way to get better value. It's worth comparing any promotional code with the provider's current broadband offers, contract options and included features. That way, you can look beyond the headline discount and consider the overall value of the package.
      </p>
      <p>
        YouFibre currently highlights both rolling monthly and 12-month fixed-price options on its plans page. Current offers and availability are subject to the provider's terms and eligibility requirements.
      </p>
    </div>
  </section>

  {/* Choose the Right Broadband Plan */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <Wifi className="w-6 h-6" /> Choose the Right YouFibre Broadband Plan
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Not every household needs the fastest broadband available. The best plan depends on the number of people using the connection, the devices you have and what you regularly do online.
        </p>
        <p>
          A lighter-use household may simply need reliable broadband for browsing, online shopping, social media, video calls and streaming. Larger households with several people working or studying from home may benefit from a faster connection that can handle multiple devices simultaneously.
        </p>
        <p>
          Gamers, streamers and households with connected TVs, consoles, laptops, tablets and smart-home equipment may also want to consider a higher-speed plan. YouFibre says its network can support multiple connected devices, while its newer routers use Wi-Fi 7 technology designed to handle more devices and provide faster, lower-latency wireless connectivity.
        </p>
        <p>
          The important point is to match the speed to your actual requirements rather than automatically choosing the most expensive option.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Hardware, Coverage & Extra Services */}
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* YouFibre Wi-Fi 7 */}
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
          <Cpu className="w-5 h-5" /> YouFibre Wi-Fi 7 and Home Connectivity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          One of YouFibre's notable features is its approach to home Wi-Fi. The provider says Wi-Fi 7 is included as standard for new residential and business customers, rather than being restricted to premium packages.
        </p>
        <p>
          The standard YouFibre Hub with Wi-Fi 7 is used with plans from YOU 200 through YOU 2000, while the YouFibre Hub Pro is designed for the YOU 8000 plan. The routers support features such as device management, guest networks and time limits, giving customers more control over their home network.
        </p>
        <p>
          This can be particularly useful for busy households where several devices need to stay connected at once.
        </p>
      </CardContent>
    </Card>

    {/* YouMesh & Additional Services */}
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#056bfa] flex items-center gap-2">
          <Radio className="w-5 h-5" /> Get Better Coverage With YouMesh
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          A fast broadband package does not automatically mean every room in your home will receive the same Wi-Fi performance. Thick walls, loft spaces, extensions and the layout of a property can affect wireless coverage.
        </p>
        <p>
          That's where YouMesh comes in. YouFibre's mesh option allows customers to add Wi-Fi boosters around the home to extend coverage and help maintain connection quality in areas where the main router's signal struggles to reach. YouMesh and YouMesh Pro are available for different broadband speed ranges.
        </p>
        <p>
          YouFibre also offers YouPhone for customers who want a home phone service and Static IP for specific requirements such as remote access or certain gaming setups.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Switching Broadband & Loyalty Promises */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <ArrowRightLeft className="w-6 h-6" /> YouFibre Deals for Switching Broadband
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Switching broadband providers can feel like a hassle, especially when you're still within an existing contract. YouFibre has introduced features designed to make the process more straightforward, including a contract buyout option and price matching, subject to eligibility and the relevant terms.
        </p>
        <p>
          YouFibre also promotes a loyalty promise under which customers approaching the end of their contract can choose from the same offers available to new customers. The company says it sends an email around 40 days before the contract ends with details of the live deals available.
        </p>
        <p>
          This makes it useful to check YouFibre offers not only when you're joining but also when you're approaching the end of your existing contract.
        </p>
      </CardContent>
    </Card>
  </section>

</div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Find Your YouFibre Deal With CouponsBit
              </h3>
              <p>
                Choosing a new broadband provider is about more than finding the fastest number on the screen. You need a connection that fits your household, coverage that works throughout your home and a contract that makes sense for your budget.
              </p>
              <p>
                Before signing up, check CouponsBit for a YouFibre discount code, promo code and current broadband deals. Compare the available promotions with YouFibre's plans and choose the option that gives you the right balance of speed, flexibility and value.
              </p>
            </div>
          </div>



          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isReadMore && "rotate-180"
            )}
          />
        </button>

        {/* Accordion FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About YouFibre Discount Codes
          </h3>
          {[
            {
              q: "Does YouFibre offer discount codes?",
              a: "YouFibre runs different promotions and offers, although availability and terms can change. Check CouponsBit for current YouFibre discount codes and deals before signing up.",
            },
            {
              q: "Can I use a YouFibre discount code on any broadband plan?",
              a: "Not necessarily. Promotional codes can have their own eligibility conditions. Check the specific terms of the offer before completing your order.",
            },
            {
              q: "Is YouFibre available throughout the UK?",
              a: "YouFibre's Full Fibre network is available in selected areas rather than across every UK postcode. You can check availability by entering your postcode on the YouFibre website.",
            },
            {
              q: "Does YouFibre offer fast broadband for gaming and streaming?",
              a: "Yes. YouFibre offers multiple speed options, including plans reaching up to 8,000 Mbps in eligible locations. The provider also offers Wi-Fi 7 routers designed to support high-speed connections and multiple connected devices.",
            },
            {
              q: "What is YouMesh?",
              a: "YouMesh is YouFibre's mesh Wi-Fi option. It adds Wi-Fi boosters around your home to help extend coverage, particularly in areas where walls, extensions or the layout of the property affect the signal.",
            },
            {
              q: "Does YouFibre have offers for existing customers?",
              a: "YouFibre's loyalty promise says customers nearing the end of their contract can access the same offers available to new customers, subject to the applicable terms.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div
                  className={cn(
                    "bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300",
                    openFaq === i && "bg-[#056bfa]"
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-gray-500 transition-transform duration-300",
                      openFaq === i && "text-white rotate-180"
                    )}
                  />
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 px-8 bg-white",
                  openFaq === i
                    ? "max-h-60 pb-8 opacity-100"
                    : "max-h-0 opacity-0 pb-0"
                )}
              >
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
            Popular YouFibre Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "YouFibre Discount Code",
              "Full Fibre Broadband",
              "8000 Mbps Internet",
              "YouMesh Wi-Fi Boosters",
              "Wi-Fi 7 Router Deals",
              "CouponsBit YouFibre",
              "UK Broadband Deals",
              "Existing Customer Promise",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top YouFibre Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "HYPERFAST FULL FIBRE",
                sub: "Ultrafast Speeds Up To 8,000 Mbps In Eligible Areas",
              },
              {
                heading: "YOUMESH WI-FI BOOSTERS",
                sub: "Extend Full Home Coverage & Eliminate Dead Zones",
              },
              {
                heading: "SAME DEAL LOYALTY PROMISE",
                sub: "Existing Customers Get Access To New Customer Prices",
              },
              {
                heading: "WI-FI 7 HARDWARE INCLUDED",
                sub: "Next-Gen Router Included On Selected Packages",
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
                  href="https://www.youfibre.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get deal: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90 flex-shrink-0"
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
