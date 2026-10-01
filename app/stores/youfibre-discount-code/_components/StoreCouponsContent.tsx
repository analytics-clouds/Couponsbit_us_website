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
  Wifi,
  Router,
  Gauge,
  Home as HomeIcon,
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
                    YouFibre is a UK broadband provider that builds and operates its own full-fibre network, offering home internet plans directly to eligible properties.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Instead of relying on existing infrastructure, YouFibre lays new fibre connections street by street, expanding availability to new areas over time.
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
                    How to Find Better YouFibre Deals
                  </h3>
                  <div className="space-y-8">
                    {[
                      { icon: Tag, title: "Check CouponsBit Before Signing Up", sub: "Before signing up, check CouponsBit for the latest YouFibre discount code and current offers." },
                      { icon: HomeIcon, title: "Check Availability First", sub: "Confirm YouFibre's full-fibre network has reached your address before comparing plans." },
                      { icon: Gauge, title: "Compare Speed Tiers", sub: "Compare available speed plans against your household's actual internet usage." },
                      { icon: ShieldAlert, title: "Check Promotion Restrictions", sub: "A promotion may only apply to selected plans or require specific conditions. Always read the terms before signing up." },
                      { icon: Receipt, title: "Review the Final Order", sub: "Before completing sign-up, make sure any eligible promotion has been applied and review your complete plan details." },
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
                  YouFibre Discount Code, Coupon Code & Discount Offers
                </h2>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <p>
                    YouFibre is a UK full-fibre broadband provider, building its own fibre network to bring fast, reliable home internet plans to eligible areas.
                  </p>
                  <p>
                    Before signing up, check CouponsBit to see whether there is a current YouFibre discount code that matches the plan and area you're looking at.
                  </p>
                  <p>
                    YouFibre offers a range of speed tiers and occasional bundle options, so it's worth comparing plans against your household's needs before signing a contract.
                  </p>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a YouFibre Discount Code</h3>
                      <p>A YouFibre discount code can help you save on a broadband plan when a promotion is available.</p>
                      <p>Before completing sign-up, check CouponsBit to see whether there is a current YouFibre offer that matches your address and plan choice.</p>
                      <p>Promotions can have specific conditions. Some may apply to selected plans or areas, while others may be tied to a particular sign-up period.</p>
                      <p>Always review the terms of the offer, including its expiration date and restrictions, before expecting a discount on your bill.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-black text-[#056bfa] mb-4">YouFibre Broadband Plans</h3>
                      <p>YouFibre offers full-fibre broadband plans across a range of speed tiers, built on its own fibre network rather than existing infrastructure.</p>
                      <p>Each plan lists its download and upload speeds and contract length, so it's worth comparing options against your household's internet usage before signing up.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-black text-[#056bfa] mb-4">YouFibre Sale and Seasonal Promotions</h3>
                      <p>YouFibre occasionally runs seasonal promotions around sign-up periods and new area launches.</p>
                      <p>Before signing up, check CouponsBit for a YouFibre discount code, coupon offer, or other promotion.</p>
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
                    Frequently Asked Questions About YouFibre Discount Codes
                  </h3>
                  {[
                    { q: "Does YouFibre offer discount codes?", a: "YouFibre periodically offers promotional codes, discounts, and seasonal promotions on its broadband plans. Availability and eligibility can vary by location." },
                    { q: "Where can I find a YouFibre discount code?", a: "You can check CouponsBit for available YouFibre discount codes, coupon codes, and promotions before signing up." },
                    { q: "How do I use a YouFibre discount code?", a: "Select your eligible broadband plan, proceed through sign-up, and enter the applicable code in the promotional-code field. Confirm the discount has been applied before completing your order." },
                    { q: "Why isn't my YouFibre discount code working?", a: "The promotion may have expired, or your address may not meet the offer's requirements. Some offers can be limited to selected plans, areas or promotional periods." },
                    { q: "What is YouFibre?", a: "YouFibre is a full-fibre broadband provider that builds its own fibre network to offer home internet plans in eligible UK areas." },
                    { q: "Is YouFibre available at my address?", a: "Availability depends on whether YouFibre's network has reached your area. Check your address on the YouFibre website before signing up." },
                    { q: "Does YouFibre require a contract?", a: "Contract lengths and terms vary by plan, so check the specific details for your chosen YouFibre plan before signing up." },
                    { q: "Does YouFibre offer different speed plans?", a: "Yes, YouFibre offers a range of full-fibre broadband speeds, so you can choose a plan that matches your household's needs." },
                    { q: "Can I bundle YouFibre with other services?", a: "Bundle options can vary over time, so check YouFibre's current plans for any available bundle offers." },
                    { q: "How can I find YouFibre deals?", a: "Check CouponsBit for the latest YouFibre discount code and current offers before signing up for a broadband plan." },
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
                    Popular YouFibre Searches
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "YouFibre Discount Code",
                      "Full Fibre Broadband",
                      "YouFibre Promo Code",
                      "UK Broadband Deals",
                      "YouFibre Bundle Offers",
                      "Fibre Internet Plans",
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
                    Today's Top YouFibre Deals
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                      heading: "FULL FIBRE 1000",
                      sub: "1000 Mbps broadband for £25/month",
                      },
                      {
                      heading: "YOU 8000",
                      sub: "Superfast 7000 Mbps for £50/month",
                      },
                      {
                      heading: "YOU 2000",
                      sub: "1800 Mbps full fibre for £30/month",
                      },
                      {
                      heading: "YOU 1000",
                      sub: "900 Mbps full fibre for £25/month",
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
                          aria-label={`Shop YouFibre: ${deal.heading}`}
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
