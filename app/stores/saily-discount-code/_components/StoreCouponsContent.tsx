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
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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

const STORE_URL = "https://performance.gotrackier.com/click?campaign_id=5006&pub_id=1015";

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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1791803751/59_pzjmxk.webp" alt="Saily Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                    Saily is a global eSIM service designed for travelers who want convenient mobile data while visiting other countries. Instead of purchasing a physical SIM card after arriving at your destination, users can purchase an eSIM plan online and install it on a compatible device.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Saily offers mobile data plans across numerous destinations, making it useful for international travelers who need internet access for navigation, messaging, travel bookings, social media, and other everyday online activities.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The service is particularly convenient for people who want to arrange their connectivity before leaving home. Once the eSIM is installed and activated according to the plan's requirements, travelers can use mobile data without needing to visit a local telecom store or swap their physical SIM.

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
    How to Use a Saily Discount Code
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      If you find an eligible Saily discount code on CouponsBit, applying it is generally simple.
    </p>
    <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
      <p>
        <strong className="text-black font-black block mb-1">Visit CouponsBit:</strong>
        Open the Saily page on CouponsBit and check the available offers.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Choose your offer:</strong>
        Select the discount code or promotion that suits your purchase.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Copy the code:</strong>
        If the offer requires a promotional code, copy it before heading to Saily.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Choose your destination:</strong>
        Browse Saily's available eSIM plans and select the destination you need.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Enter the code:</strong>
        Apply the promotional code during the relevant stage of the purchase process.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Complete your purchase:</strong>
        Confirm that the offer has been applied and finish your order.
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Always check the terms associated with a coupon before using it. If a code doesn't apply, it may have expired or may be restricted to particular customers, plans, or destinations.
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
          Saily Discount Code, Coupons & Deals
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
        ["Saily Ultra Premium Plan", "Unlimited Data", "All Users", "Includes airport lounge access, fast-track security, and NordVPN protection", "Saily Ultra Plans"],
        ["Saily Student Discount", "15% OFF", "Students", "Valid on first Saily data plan across 200+ destinations", "First Data Orders"],
        ["Refer a Friend Reward", "Up to US$10 Credits", "All Users", "Earn $5 for standard plans or up to $10 when friends choose Saily Ultra", "Referral Program"],
        ["Saily US Phone Number", "$1.99 / month", "All Users", "Add directly via eSIM app and pair seamlessly with mobile data", "US Phone Service"],
        ["Saily Travel Voucher", "$30 Voucher", "All Users", "Credits valid for 12 months; earn 3% back in Saily credits on purchase", "Voucher Purchases"],
        ["Storewide Saily Discount", "5% OFF", "All Users", "Use coupon code Saily5 at checkout on eligible international data plans", "All Saily Plans"]
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
            Looking for a Saily discount code to save on your next eSIM plan? CouponsBit helps you discover the latest Saily discount codes, coupons, promotional offers, and deals before you purchase. Whether you're planning an international holiday, business trip, or longer stay abroad, a Saily eSIM can help you stay connected without relying on expensive traditional roaming plans.
          </p>
          <p>
            Before buying your next travel eSIM, check CouponsBit for available Saily offers and see if you can get extra savings on your plan.
          </p>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Save More on Your Next Saily Plan
              </h3>
              <p>
                A travel eSIM may seem like a small part of your overall holiday budget, but checking for an available promotion can make your purchase more cost-effective. This becomes even more useful if you're purchasing connectivity for several trips or choosing plans for longer stays.
              </p>
              <p>
                CouponsBit gives you a convenient place to check for Saily discount codes before you buy. By comparing available promotions and reviewing their conditions, you can choose an offer that works for your travel plans.
              </p>
              <p>
                Whether you're traveling for leisure, work, study, or an extended international trip, checking for a Saily coupon before checkout takes only a moment and could help you spend less.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12 py-8 px-4 sm:px-6">

  {/* Hero / Header Section */}
  <section className="text-center space-y-4 max-w-3xl mx-auto">
    <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold text-[#056bfa] bg-[#056bfa]/10">
      Saily Travel eSIM Guide
    </Badge>
    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
      Find a Saily Discount Code on CouponsBit
    </h2>
    <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-left sm:text-center">
      <p>
        Travel expenses can quickly add up when you're booking flights, accommodation, activities, and transportation. Saving on connectivity is therefore another simple way to manage your travel budget.
      </p>
      <p>
        That's where a Saily discount code can help. CouponsBit brings available Saily coupons and promotional offers together, making it easier to check for potential savings before purchasing your eSIM plan.
      </p>
      <p>
        Instead of buying immediately, visit the Saily page on CouponsBit and check the available promotions. Select an offer that matches your requirements, review its conditions, and follow the instructions to redeem the saving.
      </p>
      <p>
        Because promotional campaigns can change, it's always worth checking the latest available Saily offers before completing your purchase.
      </p>
    </div>
  </section>

  {/* Coupons, Promo Codes & Offers */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <Tag className="w-6 h-6" /> Saily Coupons, Promo Codes &amp; Offers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Saily savings aren't limited to traditional coupon codes. Depending on the current promotion, shoppers may find different types of offers that can reduce the cost of an eSIM plan or provide additional value.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-gray-900">CouponsBit can help you look for:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Saily discount codes",
              "Saily promo codes",
              "Saily coupons",
              "Saily promotional offers",
              "Saily travel deals",
              "Limited-time Saily offers",
              "New-user promotions",
              "eSIM plan discounts"
            ].map((item, index) => (
              <Badge key={index} variant="outline" className="bg-slate-50 border-slate-300 text-slate-700 py-1">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <p>
          The availability and conditions of individual promotions can vary. Some offers may be intended for new customers, while others may apply to particular plans, destinations, or promotional periods.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Why Use a Saily eSIM? */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <Globe className="w-6 h-6" /> Why Use a Saily eSIM?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          One of the biggest advantages of an eSIM is convenience. Travelers don't need to wait until they reach their destination to find a local SIM card. With Saily, users can arrange their mobile data plan in advance and avoid carrying an additional physical SIM.
        </p>
        <p>
          An eSIM can also make international travel simpler for people who want to keep their primary SIM active while using another connection for mobile data, depending on their device and carrier configuration.
        </p>
        <p>
          Saily's destination-based plans allow travelers to choose connectivity based on where they're going. This can be particularly useful for people visiting multiple countries or taking frequent international trips.
        </p>
        <p>
          From checking maps and translating languages to contacting accommodation providers and sharing travel updates, reliable mobile data has become an important part of modern travel.
        </p>
      </CardContent>
    </Card>
  </section>

</div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Check CouponsBit Before Buying Saily
              </h3>
              <p>
                Staying connected abroad doesn't have to mean dealing with physical SIM cards or unexpected roaming costs. Saily gives travelers a convenient way to arrange mobile data through an eSIM, while CouponsBit helps you look for opportunities to save on your purchase.
              </p>
              <p>
                Before selecting your next Saily plan, check CouponsBit for the latest Saily discount code, coupons, promo codes, and offers. Review the available deals, choose the one that fits your needs, and make your next travel connection a little more budget-friendly.
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
            Frequently Asked Questions About Saily Discount Codes
          </h3>
          {[
            {
              q: "How can I find a Saily discount code?",
              a: "Visit the Saily page on CouponsBit to check for available discount codes, coupons, and promotional offers. Choose an eligible offer and follow its redemption instructions.",
            },
            {
              q: "Can I use a Saily discount code on any eSIM plan?",
              a: "Not necessarily. Some promotions may have specific eligibility requirements or apply only to selected plans, destinations, or customers. Check the terms of the individual offer before purchasing.",
            },
            {
              q: "Why isn't my Saily promo code working?",
              a: "A Saily promo code may not work if it has expired, has already reached its usage limit, or has restrictions that don't match your purchase. Review the offer conditions and make sure the code has been entered correctly.",
            },
            {
              q: "Does Saily offer promotions without a coupon code?",
              a: "Yes. Travel eSIM providers can run promotional campaigns where savings are applied automatically. Check CouponsBit for both code-based and direct Saily offers.",
            },
            {
              q: "Is it worth checking for a Saily coupon before traveling?",
              a: "Yes. Checking for an available coupon before purchasing your eSIM takes little time and can help you avoid paying more than necessary for your mobile data plan.",
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
            Popular Saily Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Saily Discount Code",
              "Travel eSIM Coupons",
              "International Data Plans",
              "Global eSIM Deals",
              "Saily Promo Code",
              "CouponsBit Saily",
              "Cheap Mobile Data",
              "No Roaming Fees",
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
            Today's Top Saily Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "FIRST TRAVEL ESIM DISCOUNT",
                sub: "Exclusive Discount For New Saily App Users",
              },
              {
                heading: "GLOBAL DATA BUNDLES",
                sub: "Save Big On Multi-Country Travel Packages",
              },
              {
                heading: "REGIONAL DATA PROMOTIONS",
                sub: "Special Rates On Europe, Asia & USA Data Plans",
              },
              {
                heading: "LONG-STAY TRAVEL OFFERS",
                sub: "Discounted Monthly Data Packages For Digital Nomads",
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
                  href="https://saily.com"
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
