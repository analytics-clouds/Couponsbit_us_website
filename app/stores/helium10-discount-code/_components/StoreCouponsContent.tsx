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
  PiggyBank,Copy,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  BarChart3,
  Chrome,
  Gift,
  GraduationCap,
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
  { id: "d2", label: "DEAL", heading: "Annual Plan Discount", sub: "Featured Picks" },
  { id: "d3", label: "FREE", heading: "Chrome Extension Free Tools", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Diamond Plan Deal", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Student & Startup Discount", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Openart.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/emergent-coupon-code_oeaxoh_aeoxm7.webp", dealText: "Up to 27% OFF", href: "/stores/openart-discount-code" },
  { name: "Talkpal.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288847/talkpal-coupon-code_gozaoz.webp", dealText: "Save Up to 69%", href: "/stores/talkpal-discount-code" },
  { name: "Krisp.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/krisp-logo_ajv3iv.webp", dealText: "Save 50% OFF", href: "/stores/krisp-discount-code" },
  { name: "Sintra", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781776169/sintra-coupon-code_piyu2d.webp", dealText: "Up to 70% OFF", href: "/stores/sintra-discount-code" },
  { name: "Upwork", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130860/upwork-logo_ki4h2l.webp", dealText: "Plans From $15", href: "/stores/upwork-discount-code" },
  { name: "Hostinger", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/hostinger-logo_m9ubvs.webp", dealText: "Up To 80% OFF", href: "/stores/hostinger-discount-code" },
];

const STORE_URL = "https://i.helium10.com/c/4303217/3054775/37271?subId1=1015";

export default function Helium10CouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setToastCode(code);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

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
              <span className="text-black font-extrabold">Helium 10</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789640583/helium_10_logo_gt6opp.webp" alt="Helium 10" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Helium 10 Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(11.3k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Use the latest Helium 10 Discount Code and Helium 10 Promo Code for September 2026 to save 25% OFF, enjoy 20% OFF for your first 6 months with code ACLOUDS20, get 10% OFF every month for life using code ACLOUDS10, or subscribe to the Platinum Plan from $96.75/month. Compare verified Helium 10 deals and maximize your ecommerce savings.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "7", label: "Offers" },
                    { icon: Percent, val: "150+", label: "Deals" },
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789732193/48_cjp5ai.webp" alt="Helium 10 Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Helium 10 Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "25% OFF", title: "Helium 10 Discount Code – Save 25% Today", desc: "Get 25% off Helium 10 with the current promotional offer.", bullets: ["Start using Helium 10 tools for your ecommerce business.", "Check the offer requirements before activating your plan.", "Search for a helium 10 discount before subscribing."] },
                  { label: "PLATINUM", value: "$96.75/MO", title: "Helium 10 Discount Code – Platinum for $96.75/Month", desc: "Get 6 months of Platinum for $96.75 per month.", bullets: ["Unlock Helium 10's ecommerce research and business tools.", "The offer provides a reduced rate for the promotional period.", "Check for a coupon for helium 10 before signing up."] },
                  { label: "SALE", value: "20% OFF", title: "Helium 10 Discount Code – 20% Off for 6 Months", desc: "Save 20% for your first 6 months on the eligible plan.", bullets: ["The offer is designed for new subscribers.", "Apply the qualifying promotion during signup.", "Look for a helium 10 coupon code 80 before completing your purchase."] },
                  { label: "POPULAR", value: "20% OFF", title: "Helium 10 Discount Code – 20% Off the Most Popular Plan", desc: "The most popular plan is listed at $103/month.", bullets: ["Get 20% off for 6 months with the promotional offer.", "Enjoy access to Helium 10's ecommerce tools and features.", "Check for a helium 10 discount coupon before subscribing."] },
                  { label: "SALE", value: "10% OFF", title: "Helium 10 Discount Code – 10% Off Every Month", desc: "Get 10% off every month with the qualifying promotion.", bullets: ["The offer can provide ongoing savings on your subscription.", "Check the applicable terms before activating the discount.", "Search for a helium 10 code promo before checkout."] },
                  { label: "SALE", value: "25% OFF", title: "Helium 10 Promo Code – 25% Off Your First 6 Months", desc: "Save 25% on your first 6 months with the applicable code.", bullets: ["Unlock access to the Diamond tools at a reduced price.", "Enter the code during the eligible subscription process.", "Check the latest helium 10 discount code before signing up."] },
                  { label: "LIFETIME", value: "10% OFF", title: "Helium 10 Promo Code – 10% Off Every Month for Life", desc: "Save 10% every month for life with the qualifying offer.", bullets: ["Designed for customers using Helium 10's powerful subscription plans.", "Apply the eligible code to unlock your ongoing discount.", "Search for a helium 10 50 off code to compare available savings."] },
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
                          <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Helium 10: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                            <button type="button" onClick={() => handleCopy("ACLOUDS10")} className="w-full lg:w-auto flex items-center justify-between gap-3 border-2 border-dashed border-[#056bfa] rounded-2xl px-4 py-2.5 bg-white hover:bg-[#e8f6f8] transition-colors mt-4">
                      <span className="font-mono font-black text-[#056bfa] text-sm tracking-widest">ACLOUDS10</span>
                      <span className="flex items-center gap-1 text-[#056bfa] font-bold text-[11px] uppercase shrink-0">
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </span>
                    </button>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Helium 10?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Helium 10 is an e-commerce software platform designed to help sellers research, launch, optimize, advertise, and manage products across online marketplaces.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    While the platform has historically been strongly associated with Amazon sellers, Helium 10 now provides tools for businesses selling across Amazon, Walmart, and TikTok Shop. Its current platform includes more than 30 tools covering product research, keyword research, listing optimization, advertising, operations, analytics, and marketplace growth.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform is designed for different stages of an e-commerce business. A new seller might use Helium 10 to research potential products and keywords, while an established brand may use its analytics, advertising, inventory, and automation tools to manage a larger operation.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Helium 10 currently says its platform is used by more than 4.5 million brands worldwide and supports more than 24 marketplaces.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Search, name: "Product Research", count: "20+", color: "text-blue-500", href: "/categories/software" },
                        { icon: BarChart3, name: "Keyword Research", count: "15+", color: "text-purple-500", href: "/categories/software" },
                        { icon: Chrome, name: "Free Tools", count: "10+", color: "text-orange-500", href: "/categories/software" },
                        { icon: Gift, name: "Plan Deals", count: "10+", color: "text-pink-500", href: "/categories/software" },
                        { icon: GraduationCap, name: "Student Offers", count: "5+", color: "text-teal-500", href: "/categories/software" },
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
  <h3 className="text-black font-black text-lg mb-2">
    How to Find More Helium 10 Savings
  </h3>
  <p className="text-gray-500 font-medium text-[11px] leading-relaxed mb-8">
    Finding a Helium 10 promo code is one way to reduce your subscription cost, but it's worth comparing the complete offer.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Receipt,
        title: "Compare plans first.",
        sub: "A bigger discount doesn't necessarily make a plan more suitable. Start by identifying the tools your business actually needs.",
      },
      {
        icon: Calendar,
        title: "Check annual billing.",
        sub: "Helium 10 currently advertises savings on annual billing for eligible plans. Compare the annual option with monthly billing and any promotional offer available at the time.",
      },
      {
        icon: Gift,
        title: "Look for current promotions.",
        sub: "Helium 10 runs promotional campaigns through its own website and partner channels. Check for an active offer before subscribing.",
      },
      {
        icon: ShieldAlert,
        title: "Check what the discount applies to.",
        sub: "A code may apply only to a particular plan or for a specific promotional period.",
      },
      {
        icon: HeartHandshake,
        title: "Consider your business stage.",
        sub: "A new seller may prioritize research and listing tools, while a larger brand may need advertising automation, inventory management, analytics, and multi-marketplace capabilities.",
      },
      {
        icon: Tag,
        title: "Check CouponsBit before checkout.",
        sub: "A quick search for a current Helium 10 discount code can help you see whether an eligible offer is available before you commit to a plan.",
      },
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start">
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
          Helium 10 Discount Code, Promo Code & Offers
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
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        ["25% OFF Helium 10 Deal", "25% OFF", "All Users", "Save 25% on Helium 10 ecommerce tool suite today", "Helium 10 Plans"],
        ["Platinum Plan Discount", "$96.75/Month", "All Users", "Get 6 months of the Platinum Plan at a reduced monthly rate", "Platinum Plan"],
        ["20% OFF 6-Month Offer", "20% OFF", "New Subscribers", "Valid on qualifying plans for your first 6 months", "Eligible Subscription Plans"],
        ["Popular Plan Promotion", "20% OFF ($103/Mo)", "All Users", "Save 20% for 6 months on the most popular Helium 10 plan", "Popular Subscription Plan"],
        ["Ongoing 10% Monthly Savings", "10% OFF", "All Users", "Enjoy 10% off every month on recurring subscription fees", "Monthly Subscriptions"],
        ["25% OFF Diamond/First 6 Months", "25% OFF", "All Users", "Apply promo code during signup to unlock Diamond tools at a discount", "Diamond Plan / First 6 Months"],
        ["Lifetime 10% Monthly Savings", "10% OFF Lifetime", "All Users", "Get 10% off every month for life with qualifying promo code", "Ongoing Subscription Plans"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 6 && "border-b-0")}>
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

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Running an e-commerce business involves far more than putting a product on Amazon and waiting for sales. Sellers need to research products, understand customer demand, find the right keywords, optimize listings, monitor competitors, manage advertising, track inventory, and make decisions based on constantly changing marketplace data.
          </p>
          <p>
            That is where Helium 10 comes in.
          </p>
          <p>
            If you're considering Helium 10 for your Amazon, Walmart, or TikTok Shop business, checking for a Helium 10 discount code before choosing a plan can be a smart first step. Depending on the current promotion, you may find introductory offers, subscription discounts, or other ways to reduce the cost of the software.
          </p>
          <p>
            On CouponsBit, you can check available Helium 10 offers before signing up and review the terms of each promotion to find an offer that fits your business and subscription needs.
          </p>

          <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <p>
    If you're ready to subscribe to Helium 10, looking for a Helium 10 discount code before choosing your plan is worth doing.
  </p>
  <p>
    Helium 10 frequently promotes special offers through its website, affiliate partners, and targeted campaigns. The exact discount can depend on the promotion, subscription plan, billing cycle, and customer eligibility.
  </p>
  <p>
    CouponsBit gives you another place to check before heading to checkout. Rather than assuming that the standard subscription price is your only option, look for an available offer and compare it with the plan you actually need.
  </p>

  <div className="space-y-8">
    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Helium 10 Coupons, Deals & Offers</h3>
      <p>A Helium 10 coupon code isn't the only way to find a better subscription offer. Depending on the current campaign, Helium 10 may provide discounts for particular plans, limited-time promotions, annual billing incentives, or affiliate-specific offers.</p>
      <p>Before applying a promotion, check:</p>
      <p><strong>Qualifying Plans & Billing:</strong> Determine which plan qualifies, whether the offer applies to monthly or annual billing, and how long promotional pricing lasts.</p>
      <p><strong>Eligibility & Terms:</strong> Check if the promotion is limited to new customers, requires a promo code at signup, or can be combined with other offers.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Product & Keyword Research Tools</h3>
      <p>Finding products and driving traffic are core challenges for online sellers. Helium 10 provides research suites to streamline marketplace discovery.</p>
      <p><strong>Product Research (Black Box & Xray):</strong> Analyze demand, competition, marketplace data, and product opportunities before investing in inventory.</p>
      <p><strong>Keyword Research (Cerebro & Magnet):</strong> Identify high-converting search terms, analyze competitor keywords, and improve listing discoverability across Amazon categories.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Listing Optimization & Advertising Tools</h3>
      <p>Convert views into sales with AI-assisted listing tools that generate optimized titles, bullet points, and A+ content efficiently.</p>
      <p>Helium 10's advertising suite offers AI-powered and rules-based automation for bidding and dayparting, allowing sellers to manage campaign performance without continuous manual adjustments.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Operations, Multi-Marketplace & TikTok Support</h3>
      <p>Beyond Amazon, Helium 10 supports cross-channel growth for Walmart and TikTok Shop.</p>
      <p><strong>Inventory & Analytics:</strong> Track stock levels, organize restocking, analyze business profitability, and claim eligible FBA reimbursements.</p>
      <p><strong>TikTok Shop Solutions:</strong> Features Amazon-to-TikTok Shop listing converters, trending-video research, influencer discovery, and creator outreach tools.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Helium 10 Subscription Plans</h3>
      <p>Helium 10 offers tiers built for different stages of business growth: Platinum for growing sellers, Diamond for scaling operations with advanced advertising/inventory controls, and Enterprise for custom brand solutions.</p>
      <p>New sellers can also access educational resources like Freedom Ticket and Ads Academy to build foundational marketplace knowledge.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Annual Plan Discounts & Seasonal Opportunities</h3>
      <p>Annual billing offers lower effective monthly rates compared to standard monthly payments. Sellers can prepare for peak shopping seasons—such as Q4 holidays, Prime Day, and back-to-school—by using Helium 10 tools ahead of time.</p>
      <p>Before signing up, review current promo codes on CouponsBit to ensure your discount applies to the plan and billing cycle best suited for your business.</p>
    </div>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Use a Helium 10 Discount Code</h3>
              <p>Applying a Helium 10 discount code is generally straightforward when you have an eligible offer.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Find a current Helium 10 offer on CouponsBit.</li>
                <li>Read the promotion's eligibility and plan requirements.</li>
                <li>Visit Helium 10 and choose the applicable subscription.</li>
                <li>Create an account or sign in if required.</li>
                <li>Enter the discount or promotional code in the designated field.</li>
                <li>Confirm that the offer has been applied.</li>
                <li>Review your subscription details before completing payment.</li>
              </ul>
              <p>Helium 10's current promotional landing page includes a dedicated promo-code field during the signup process.</p>
              <p>If a code isn't accepted, review the promotion's conditions before trying another offer.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Isn't My Helium 10 Discount Code Working?</h3>
              <p>If your Helium 10 discount code isn't working, there are several possible explanations.</p>
              <p>The promotion may have expired, may only apply to a particular plan, or may be restricted to new subscriptions.</p>
              <p>Other possibilities include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The code was entered incorrectly</li>
                <li>The promotion applies only to annual or monthly billing</li>
                <li>Your selected plan isn't eligible</li>
                <li>The offer is limited to a particular campaign</li>
                <li>Another promotion has already been applied</li>
                <li>The code has specific customer eligibility requirements</li>
              </ul>
              <p>The affiliate page you shared displays different promotional offers for different plans, which illustrates why checking the conditions of each offer matters before subscribing.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Helium 10 Offers?</h3>
              <p>CouponsBit gives sellers another convenient place to check for available Helium 10 promotions before subscribing.</p>
              <p>Instead of signing up immediately, you can compare the current plan options with any available Helium 10 coupon code, review the offer's terms, and then decide which subscription makes sense for your business.</p>
              <p>This can be especially useful when Helium 10 is running different promotions across plans or billing periods.</p>
              <p>Whether you're launching your first Amazon product, growing an established FBA business, expanding to Walmart, or experimenting with TikTok Shop, checking for a current offer before subscribing is a simple step worth adding to your process.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Grow Your E-Commerce Business With a Helium 10 Discount Code</h3>
              <p>Selling online involves dozens of decisions, from deciding what to sell and understanding customer demand to optimizing listings, managing advertising, and keeping inventory under control.</p>
              <p>Helium 10 brings many of those workflows together in one e-commerce platform, with solutions covering Amazon, Walmart, and TikTok Shop.</p>
              <p>If you're considering Helium 10 for your business, start by identifying the tools and plan that match your current stage. Then check CouponsBit for a current Helium 10 discount code, review the promotion's conditions, and compare the available subscription options before completing your purchase.</p>
              <p>That extra check can help you find an eligible offer while making sure you're choosing a plan based on the tools your business actually needs.</p>
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
            Helium 10 Discount Code FAQs
          </h3>
          {[
            { q: "Does Helium 10 offer discount codes?", a: "Yes. Helium 10 offers promotional discounts through its website and partner campaigns. The available discount, plan eligibility, and promotional period can vary." },
            { q: "Where can I find a Helium 10 discount code?", a: "You can check CouponsBit for available Helium 10 promotions before signing up for a plan." },
            { q: "What can I use Helium 10 for?", a: "Helium 10 provides tools for product research, keyword research, listing optimization, advertising, inventory management, analytics, and other e-commerce operations across marketplaces such as Amazon, Walmart, and TikTok Shop." },
            { q: "Does Helium 10 work with Amazon?", a: "Yes. Amazon is one of Helium 10's primary supported marketplaces, with tools covering product research, keywords, listings, advertising, inventory, and other seller operations." },
            { q: "Does Helium 10 work with Walmart?", a: "Yes. Helium 10 currently provides solutions for Walmart Marketplace alongside its Amazon and TikTok Shop offerings." },
            { q: "Does Helium 10 work with TikTok Shop?", a: "Yes. Helium 10 offers TikTok Shop tools for product research, listing conversion, influencer discovery, profitability analysis, and other seller workflows." },
            { q: "Does Helium 10 have a free plan?", a: "Helium 10 currently provides a Free option with limited access, alongside paid plans such as Platinum, Diamond, and Enterprise." },
            { q: "Can I use a Helium 10 discount code on any plan?", a: "Not necessarily. Promotional codes can be limited to specific plans, billing periods, or customer types. Always check the terms of the individual offer before subscribing." },
            { q: "Is Helium 10 useful for new Amazon sellers?", a: "It can be useful for new sellers who need tools for product research, keyword research, listing optimization, and education. Helium 10 also provides training resources such as Freedom Ticket and Ads Academy." },
            { q: "Does Helium 10 offer annual plans?", a: "Yes. Helium 10 offers annual billing for eligible plans and currently advertises savings compared with monthly billing." },
            { q: "How do I apply a Helium 10 promo code?", a: "Choose an eligible Helium 10 plan, proceed through signup, and enter the promotional code in the designated promo-code field when available. The exact process can vary by promotion." }
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
            Popular Helium 10 Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Helium 10 Promo Code",
              "Platinum Plan Deal",
              "Diamond Plan Discount",
              "Annual Subscription Offer",
              "Amazon FBA Tools",
              "Keyword Research Deals",
              "Walmart Seller Discount",
              "TikTok Shop Offers"
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
            Today's Top Helium 10 Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "DEAL OF THE WEEK", sub: "Save Up to 20% OFF Monthly Plans" },
              { heading: "ANNUAL SAVINGS", sub: "Get Up to 25% OFF Annual Subscriptions" },
              { heading: "FREE ACCESS", sub: "Try Helium 10 Tools with a Free Account" },
              { heading: "STARTER SPECIAL", sub: "Discounts Available on Platinum Plan" }
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
                  rel="noopener noreferrer"
                  aria-label={`Shop Helium 10: ${deal.heading}`}
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
