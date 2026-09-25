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
  Globe,
  Smartphone,
  Wifi,
  Plane,
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
  { name: "Airalo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/airalo-logo_fc6u6p.webp", dealText: "USA eSIM From $4.50", href: "/stores/airalo-discount-code" },
  { name: "Lyca Mobile", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/lyca-mobile-coupon-code_svvddg.webp", dealText: "Up to 69% OFF", href: "/stores/lyca-mobile-discount-code" },
  { name: "Jetpac", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787741564/jetpac-logo_prj8gu.webp", dealText: "Save Up To 70%", href: "/stores/jetpac-discount-code" },
  { name: "Klook", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002063/klook-logo_alzz2a.webp", dealText: "Up To 50% OFF", href: "/stores/klook-discount-code" },
  { name: "Apple", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/apple-logo_vrakxu.webp", dealText: "Up To $150 Gift Card", href: "/stores/apple-discount-code" },
  { name: "TrainPal", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp", dealText: "Up to 50% OFF", href: "/stores/trainpal-discount-code" },
];

const STORE_URL = "https://saily.com";

export default function SailyContent() {
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
              <span className="text-black font-extrabold">Saily</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1790335107/saily-logo_s5w4hl.webp" alt="Saily" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Saily Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(1,400 Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover the latest Saily Discount Code offers and verified Saily Coupon Code deals. Get 15% OFF your first student data plan, save 5% on all eligible Saily plans with code Saily5, or earn up to US$10 in referral credits through the Refer a Friend program. You can also choose the Saily Ultra plan with unlimited data and premium travel benefits or get a US phone number for just US$1.99/month. Compare verified offers and enjoy affordable, hassle-free connectivity wherever you travel.
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
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "6", label: "Deals" },
                    { icon: Users, val: "20K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790335107/saily-logo_s5w4hl.webp" alt="Saily Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Saily Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "PREMIUM", value: "Unlimited", title: "Saily Ultra – Premium Travel Plan with Unlimited Data", desc: "Get unlimited international data with the Saily Ultra plan.", bullets: ["Enjoy airport lounge access, faster security and check-in benefits.", "Get premium online protection with tools like NordVPN.", "Choose Saily Ultra for an all-in-one premium travel experience."] },
                  { label: "SAVE", value: "15%", title: "Saily Student Discount – Get 15% Off Your First Data Plan", desc: "Students can get 15% off their first Saily data plan.", bullets: ["Enjoy reliable mobile data across 200+ destinations.", "Stay connected while traveling without expensive roaming fees.", "Save more on your international eSIM data with Saily."] },
                  { label: "UP TO", value: "$10", title: "Saily Refer a Friend – Earn Up to US$10 in Credits", desc: "Refer friends to Saily and earn Saily credits for every successful referral.", bullets: ["Both users can get US$5 with standard plans.", "Earn up to US$10 when your friend chooses Saily Ultra.", "Share Saily with friends and get rewarded with travel credits."] },
                  { label: "ONLY", value: "$1.99", title: "Saily US Phone Number – Get a Number for US$1.99/Month", desc: "Get a US phone number directly through the Saily eSIM app.", bullets: ["Add the number in just a few taps and pair it with mobile data.", "Stay connected with a US number while using your Saily eSIM.", "Get the service for just US$1.99 per month."] },
                  { label: "ONLY", value: "$30", title: "Saily Voucher – Buy US$30 Credits for 12 Months", desc: "Buy a US$30 Saily voucher for future travel and data needs.", bullets: ["Use your voucher credits anytime within 12 months.", "Get US$30 worth of Saily credits for US$30.", "Earn 3% back in Saily credits with the voucher purchase."] },
                  { label: "SAVE", value: "5%", title: "Saily Discount Code – Get 5% Off All Saily Plans", desc: "Get 5% off all eligible Saily plans with the discount code Saily5.", bullets: ["Choose your travel destination and apply the discount at checkout.", "Save on Saily eSIM data plans for international travel.", "Use Saily5 to enjoy your discount when purchasing a plan."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Saily: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Saily?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Saily is an eSIM travel data app, built by the team behind NordVPN, that lets travelers buy and activate mobile data plans digitally for destinations worldwide.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Instead of hunting for a local SIM card at the airport, you can install an eSIM plan through the Saily app before or during your trip and get connected in minutes on a compatible device.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Globe, name: "Regional eSIM Plans", count: "40+", color: "text-blue-500", href: "/categories/travel" },
                        { icon: Wifi, name: "Unlimited Data Plans", count: "20+", color: "text-purple-500", href: "/categories/travel" },
                        { icon: Smartphone, name: "Single-Country Plans", count: "60+", color: "text-pink-500", href: "/categories/travel" },
                        { icon: Percent, name: "Promo Offers", count: "15+", color: "text-teal-500", href: "/categories/travel" },
                        { icon: Plane, name: "Travel Essentials", count: "35+", color: "text-orange-500", href: "/categories/travel" },
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
                    How to Find Better Saily Deals
                  </h3>
                  <div className="space-y-8">
                    {[
                      { icon: Tag, title: "Check CouponsBit Before Buying", sub: "Before purchasing, check CouponsBit for the latest Saily discount code and current offers." },
                      { icon: Globe, title: "Compare Regional Plans", sub: "Compare pricing across single-country and regional multi-country plans before booking your trip." },
                      { icon: Calendar, title: "Plan Ahead For Your Trip", sub: "Buying your eSIM plan a little before departure can help you compare available options." },
                      { icon: ShieldAlert, title: "Check Promotion Restrictions", sub: "A promotion may only apply to selected destinations or require specific conditions. Always read the terms before completing your order." },
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

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm max-w-xl mb-6">
  <h2 className="text-black font-black text-xl mb-4">
    Saily Discount Code Summary
  </h2>

  <p className="text-gray-500 font-medium text-sm leading-relaxed mb-4">
    <strong>Ultra Premium Travel Plan</strong> - Get Unlimited International Data & Premium Travel Benefits.
  </p>

  <ol className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-5 list-decimal">
    <li><strong>Brand:</strong> Saily</li>
    <li><strong>Offer:</strong> Ultra Premium Travel Plan</li>
    <li><strong>Discount:</strong> Unlimited International Data & Premium Travel Benefits</li>
    <li><strong>Offer Type:</strong> Premium Plan</li>
    <li><strong>Applicable On:</strong> All users on eligible products</li>
    <li><strong>Availability:</strong> Active</li>
    <li><strong>Country:</strong> Global</li>
    <li><strong>Verified By:</strong> Couponsbit</li>
  </ol>
</div>
                <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                  Saily Discount Code, Coupon Code & Discount Offers
                </h2>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <p>
                    Saily is an eSIM travel data app from the makers of NordVPN, letting you buy and activate mobile data plans digitally for 150+ destinations without needing a physical SIM card.
                  </p>
                  <p>
                    Before your next trip, check CouponsBit to see whether there is a current Saily discount code that matches the destination and plan you're looking for.
                  </p>
                  <p>
                    Saily offers single-country plans, regional multi-country plans, and higher-data or unlimited options for select destinations, so it's worth comparing plans before you travel.
                  </p>

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
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        ["Saily Ultra Premium Plan", "Unlimited Data Perks", "All Users", "Includes airport lounge access, fast security, check-in benefits & NordVPN protection", "Premium Travel Plans"],
        ["Saily Student Discount", "15% OFF", "Students", "Get 15% off your first data plan across 200+ destinations", "First Data Plans"],
        ["Refer a Friend Program", "Up to $10 Credits", "All Users", "Get $5 for standard plans or up to $10 credits when friends choose Saily Ultra", "Referral Rewards"],
        ["Saily US Phone Number", "$1.99 / Month", "All Users", "Get a US phone number directly in the app paired with mobile data", "US Phone Number Add-on"],
        ["Saily Voucher Deal", "$30 Credits", "All Users", "Buy $30 credits valid for 12 months & earn 3% back in Saily credits", "Saily Vouchers"],
        ["Saily Storewide Discount", "5% OFF", "All Users", "Use code Saily5 at checkout to save on international travel data plans", "All Saily eSIM Plans"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 5 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a Saily Discount Code</h3>
                      <p>A Saily discount code can help you save on an eSIM data plan when a promotion is available.</p>
                      <p>Before completing your order, check CouponsBit to see whether there is a current Saily offer that matches your destination or plan size.</p>
                      <p>Promotions can have specific conditions. Some may apply to selected plans or regions, while others may be tied to a particular event or season.</p>
                      <p>Always review the terms of the offer, including its expiration date and restrictions, before expecting a discount at checkout.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-black text-[#056bfa] mb-4">Saily eSIM Plans</h3>
                      <p>Saily offers eSIM data plans for individual countries as well as regional plans covering multiple countries, useful for multi-stop trips.</p>
                      <p>Each plan lists its data allowance, validity period, and coverage area, so it's worth comparing options against your itinerary before purchasing.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-black text-[#056bfa] mb-4">Saily Sale and Seasonal Promotions</h3>
                      <p>Saily occasionally runs seasonal promotions around holidays and peak travel periods.</p>
                      <p>Before placing an order, check CouponsBit for a Saily discount code, coupon offer, or other promotion.</p>
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
                    Frequently Asked Questions About Saily Discount Codes
                  </h3>
                  {[
                    { q: "Does Saily offer discount codes?", a: "Saily periodically offers promotional codes, discounts, and seasonal promotions on its eSIM data plans. Availability and eligibility can vary." },
                    { q: "Where can I find a Saily discount code?", a: "You can check CouponsBit for available Saily discount codes, coupon codes, and promotions before purchasing." },
                    { q: "How do I use a Saily discount code?", a: "Select your eligible eSIM plan, proceed to checkout, and enter the applicable code in the promotional-code field. Confirm the discount has been applied before completing your order." },
                    { q: "Why isn't my Saily discount code working?", a: "The promotion may have expired, or your order may not meet its requirements. Some offers can be limited to selected plans, regions or promotional periods." },
                    { q: "What is Saily?", a: "Saily is an eSIM app that provides travel data plans for numerous countries and regions, letting you stay connected while traveling without a physical SIM card." },
                    { q: "How does an eSIM work with Saily?", a: "Saily's eSIM plans install digitally on compatible devices, so you can activate mobile data for your destination without swapping a physical SIM card." },
                    { q: "Is my phone compatible with Saily?", a: "Compatibility depends on whether your device supports eSIM technology. Check your phone's specifications or Saily's compatibility list before purchasing a plan." },
                    { q: "Can I use Saily in multiple countries?", a: "Saily offers both single-country and regional multi-country eSIM data plans, depending on your travel needs." },
                    { q: "Does Saily offer unlimited data plans?", a: "Saily offers a range of data plan sizes, including higher-data and unlimited options for select destinations, subject to availability." },
                    { q: "How can I find Saily deals?", a: "Check CouponsBit for the latest Saily discount code and current offers before purchasing an eSIM data plan." },
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
                    Popular Saily Searches
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Saily Discount Code",
                      "Saily eSIM",
                      "Travel Data Plans",
                      "Saily Promo Code",
                      "Regional eSIM Plans",
                      "Unlimited Data eSIM",
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
                    Today's Top Saily Deals
                  </h3>
                  <div className="space-y-6">
                    {[
                      { heading: "SAILY ULTRA – UNLIMITED DATA", sub: "Get unlimited international data with the Saily Ultra plan." },
                      { heading: "STUDENT DISCOUNT – 15% OFF", sub: "Students can get 15% off their first Saily data plan." },
                      { heading: "REFER A FRIEND – UP TO US$10", sub: "Refer friends to Saily and earn Saily credits for every successful referral." },
                      { heading: "DISCOUNT CODE – 5% OFF ALL PLANS", sub: "Get 5% off all eligible Saily plans with the discount code Saily5." },
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
                          aria-label={`Shop Saily: ${deal.heading}`}
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
