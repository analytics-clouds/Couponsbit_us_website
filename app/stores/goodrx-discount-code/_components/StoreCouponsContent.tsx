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
  ExternalLink,Layers, Smartphone, CreditCard,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Home,
  Pill,
  Stethoscope,
  MapPinned,
  BadgePercent,
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
  { id: "d1", label: "FROM", heading: "Online Weight Loss Care | $39/Month", sub: "GoodRx Discount Code" },
  { id: "d2", label: "FREE", heading: "250+ Free Medications | From $14.99/Month", sub: "GoodRx Companion" },
  { id: "d3", label: "LOW AS", heading: "Foundayo GLP-1 Medication | As Low As $149", sub: "GoodRx Deal" },
  { id: "d4", label: "LOW AS", heading: "Zepbound KwikPen | As Low As $299", sub: "GoodRx Deal" },
  { id: "d5", label: "LOW AS", heading: "Wegovy | As Low As $149", sub: "GoodRx Deal" },
  { id: "d6", label: "FREE", heading: "Free Medications & $19 Online Care", sub: "GoodRx Companion" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Kerala Ayurveda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg", dealText: "Flat 10% OFF", href: "/stores/kerala-ayurveda-discount-code" },
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up To $260", href: "/stores/merachfit-discount-code" },
  { name: "Chewy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp", dealText: "Up To 50% OFF", href: "/stores/chewy-promo-code" },
  { name: "RingConn", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp", dealText: "Starting From $199", href: "/stores/ringconn-discount-code" },
  { name: "Dreame", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/dreame-logo_uqesij.webp", dealText: "Up To 45% OFF", href: "/stores/dreame-discount-code" },
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
];

const STORE_URL = "https://www.goodrx.com/";

export default function GoodRxCouponsContent() {
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
              <span className="text-black font-extrabold">GoodRx</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787050069/goodrx-logo_ibgfjr.webp" alt="GoodRx" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">GoodRx</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(72.3k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                     Find GoodRx discount codes, promo codes, and healthcare savings for Sep 2026. Explore online care from $39/month, 250+ free medications with GoodRx Companion, GLP-1 options from $149, Zepbound from $299, and online care visits from $19.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "2.6k", label: "Deals" },
                    { icon: Users, val: "20M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788350344/160_zt45ih.webp" alt="GoodRx Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          {/* Coupons + Sidebar */}
<section className="py-6 md:py-16 bg-white overflow-hidden">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-[65%]">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-black leading-tight">GoodRx Discount Codes & Offers</h2>
        </div>

        {[
          { label: "FROM", value: "$39/MO", title: "GoodRx Discount Code – Online Weight Loss Care | $39/Month", desc: "Access online weight loss care and support for eligible patients in the USA", bullets: ["Get help with GLP-1 prescription treatment through online care", "Membership starts at $39 per month", "Explore convenient virtual care and potential access to lower-cost brand-name GLP-1 medications"] },
          { label: "FREE", value: "250+ RX", title: "GoodRx Companion – 250+ Free Medications | From $14.99/Month", desc: "Join GoodRx Companion and get access to 250+ medications for $0", bullets: ["Unlock additional savings on prescriptions and eligible healthcare services", "Get discounts on dental, vision, laboratory, imaging and online care services", "Membership starts from $14.99 per month with a free trial option"] },
          { label: "LOW AS", value: "$149", title: "GoodRx – Foundayo GLP-1 Medication | As Low As $149", desc: "Save on eligible Foundayo GLP-1 medication with prices starting as low as $149", bullets: ["Explore potential prescription savings through GoodRx in the USA", "Compare medication pricing and find lower-cost options where available", "Prescription requirements and eligibility may apply"] },
          { label: "LOW AS", value: "$299", title: "GoodRx – Zepbound KwikPen | As Low As $299", desc: "Get potential savings on eligible Zepbound KwikPen prescriptions from as low as $299", bullets: ["Compare available prescription prices through GoodRx", "Explore savings options for eligible patients across the USA", "Prescription and eligibility requirements may apply"] },
          { label: "LOW AS", value: "$149", title: "GoodRx – Wegovy | As Low As $149", desc: "Save on eligible Wegovy products with prices starting as low as $149", bullets: ["Explore available prescription savings through GoodRx in the USA", "Compare prices across participating pharmacies to find potential savings", "Prescription requirements and eligibility restrictions may apply"] },
          { label: "FREE", value: "$19 CARE", title: "GoodRx Companion – Free Medications & $19 Online Care", desc: "Get access to 250+ medications for free through GoodRx Companion", bullets: ["Find hundreds of additional medications priced under $10", "Access $19 online care visits 7 days a week", "Receive discounts on eligible dental, vision, lab and imaging services"] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[110px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-1">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-bold leading-tight">{c.label}</p>
                    <div className="text-[22px] sm:text-[32px] font-extrabold leading-none mt-2">{c.value}</div>
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop GoodRx: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">GoodRx Discount Code</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            A GoodRx discount code works differently from a typical retail coupon. GoodRx's primary savings mechanism is its prescription coupon system. You search for your medication, enter your prescription details and location, compare pharmacy prices, and select the applicable coupon. (GoodRx Support)

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            GoodRx says its free coupons can provide savings of up to 80% at participating pharmacies, although the actual price depends on the medication, pharmacy, location, and other factors. (GoodRx Support)

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            When searching for savings, don't assume that the largest advertised percentage will apply to your prescription. Instead, compare the actual prices displayed for your specific medication and pharmacy.

          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
           <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
           <div className="space-y-1">
             {[
               { icon: Pill, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
               { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: Home, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: Stethoscope, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
  <h3 className="text-black font-black text-lg mb-2">Why Use GoodRx?</h3>
  <p className="text-gray-500 font-medium text-xs mb-8">
    GoodRx can be useful for consumers who want to compare prescription costs before paying at the pharmacy.
  </p>
  
  <div className="space-y-8">
    {[
      {
        icon: Search,
        title: "Easy Price Comparison",
        sub: "Instead of checking prices individually, you can search for your medication and compare participating pharmacies through GoodRx."
      },
      {
        icon: Tag,
        title: "Free Savings Option",
        sub: "You don't necessarily need a paid membership to use GoodRx. Its free service provides access to prescription coupons and price comparisons."
      },
      {
        icon: CreditCard,
        title: "Physical Savings Card",
        sub: "People who prefer a physical card can request a free GoodRx Prescription Drug Savings Card."
      },
      {
        icon: Smartphone,
        title: "Mobile Access",
        sub: "The GoodRx mobile app lets users search for medications, access coupons, manage prescriptions, and participate in Rewards."
      },
      {
        icon: Layers,
        title: "Multiple Savings Options",
        sub: "Depending on your prescription, you may be able to compare GoodRx coupons, cash prices, pharmacy membership prices, manufacturer programs, and other available options."
      },
    ].map((item) => (
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
        {/* SEO Text Section */}
<section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      
      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          GoodRx Discount Code, Promo Codes & Prescription Savings 2026
        </h2>

        <div className="my-12 overflow-x-auto rounded-[20px] border border-gray-200 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[800px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider rounded-l-lg">Offer</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider whitespace-nowrap">Discount / Price</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider rounded-r-lg">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 font-normal text-[13px] divide-y divide-gray-100">
      {[
        ["GoodRx Discount Code – Online Weight Loss Care", "$39/Month", "All Users", "GLP-1 prescription treatment through online care", "Weight loss care"],
        ["GoodRx Companion – 250+ Free Medications", "From $14.99/Month", "All Users", "Includes dental, vision, lab & imaging discounts", "GoodRx Companion membership"],
        ["GoodRx – Foundayo GLP-1 Medication", "As Low As $149", "All Users", "Prescription requirements may apply", "Foundayo GLP-1 medication"],
        ["GoodRx – Zepbound KwikPen", "As Low As $299", "All Users", "Prescription and eligibility requirements may apply", "Zepbound KwikPen"],
        ["GoodRx – Wegovy", "As Low As $149", "All Users", "Prescription requirements and eligibility restrictions may apply", "Wegovy"],
        ["GoodRx Companion – Free Medications & $19 Online Care", "$19 Online Care", "All Users", "250+ free medications, online care 7 days a week", "GoodRx Companion membership"],
      ].map((row, i) => (
        <tr key={i} className="hover:bg-gray-50/80 transition-colors">
          <td className="p-4 text-gray-900 font-semibold align-middle max-w-[280px]">{row[0]}</td>
          <td className="p-4 text-[#056BFA] font-bold align-middle whitespace-nowrap">{row[1]}</td>
          <td className="p-4 text-gray-500 align-middle whitespace-nowrap">{row[2]}</td>
          <td className="p-4 text-gray-500 align-middle max-w-[220px]">{row[3]}</td>
          <td className="p-4 text-gray-500 align-middle max-w-[240px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        {/* Collapsible Text Container */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          
          <p>
            Looking for a GoodRx discount code to lower the cost of your prescription? GoodRx helps consumers compare prescription prices at pharmacies across the U.S. and find coupons that can reduce out-of-pocket costs.
          </p>
          <p>
            Unlike a traditional online retailer, GoodRx isn't a pharmacy where you purchase medication directly. Instead, it provides prescription pricing information and discount coupons that can be used at participating pharmacies. You can search for your medication, compare available prices, and select a coupon before heading to the pharmacy.
          </p>
          <p>
            GoodRx also offers additional services, including GoodRx Gold, prescription savings cards, Rewards, and GoodRx Care. Before filling a prescription, checking CouponsBit for available GoodRx offers can help you identify additional savings opportunities.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">GoodRx Promo Code Offers</h3>
            <p>
              If you're searching for a GoodRx promo code, check CouponsBit for currently available offers and promotions.
            </p>
            <p>
              GoodRx promotions can differ from its standard prescription coupons. Some offers may relate to memberships, new-user promotions, Rewards, or other GoodRx services rather than providing a direct reduction on every prescription.
            </p>
            <p>
              Before using an offer, review its eligibility requirements and expiration date. This is particularly important when a promotion is restricted to new members or specific services.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">How Does GoodRx Work?</h3>
            <p>
              GoodRx is essentially a prescription price comparison and savings platform. Instead of visiting several pharmacies individually to ask about medication prices, you can search for your prescription through the GoodRx website or app.
            </p>
            <p><strong>Search for Your Prescription</strong></p>
            <p>
              Enter the name of your medication into GoodRx and provide the relevant prescription details. You can then set your location and search for prices at nearby pharmacies.
            </p>
            <p><strong>Compare Pharmacy Prices</strong></p>
            <p>
              GoodRx displays different pricing options, which may include cash prices, pharmacy membership prices, online pharmacy prices, and GoodRx coupon prices.
            </p>
            <p>
              Prices can vary considerably between pharmacies, so comparing options before filling your prescription can potentially reduce what you pay.
            </p>
            <p><strong>Select a GoodRx Coupon</strong></p>
            <p>
              Once you've found the price you want, you can select the corresponding coupon. GoodRx allows users to print, email, or text coupons to themselves through its website or mobile app.
            </p>
            <p><strong>Present It at the Pharmacy</strong></p>
            <p>
              Take your coupon to the pharmacist along with your prescription. GoodRx recommends telling the pharmacist about the coupon before the medication is processed.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">GoodRx Coupon Code & Prescription Savings</h3>
            <p>
              A GoodRx coupon code isn't necessarily a code that you type into a checkout box. Instead, GoodRx coupons contain the information the pharmacy needs to apply the negotiated discount to an eligible prescription.
            </p>
            <p>
              This distinction is important when searching online for GoodRx savings. A GoodRx coupon can be generated for a specific medication and pharmacy, meaning the price isn't necessarily universal.
            </p>
            <p>
              GoodRx also explains that its website and app can show multiple pricing options. The displayed cash price may be available without a coupon, while a separate GoodRx coupon price may offer a different rate.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">GoodRx Prescription Discount Card</h3>
            <p>
              GoodRx also offers a free prescription savings card for people who prefer to carry a physical card. According to GoodRx, the card can provide discounts of up to 80% at most U.S. pharmacies.
            </p>
            <p>
              However, GoodRx notes that searching for your specific prescription and generating a coupon through its website or app may provide additional savings compared with simply using the physical card.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">GoodRx Gold</h3>
            <p>
              For people who regularly fill prescriptions, GoodRx Gold is GoodRx's paid membership option.
            </p>
            <p>
              GoodRx currently lists an individual Gold plan at $9.99 per month or $89.99 per year, while its family plan costs $19.99 per month or $179.99 per year. GoodRx says Gold members can receive prescription savings of up to 90%, along with benefits such as discounted GoodRx Care telehealth visits and free home delivery where available.
            </p>
            <p><strong>GoodRx Gold Benefits</strong></p>
            <p>Depending on the plan and eligibility, Gold includes:</p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-gray-600">
              <li>Prescription discounts</li>
              <li>Access to Gold pricing</li>
              <li>Discounted GoodRx Care visits</li>
              <li>Free home delivery when available</li>
              <li>Rewards</li>
              <li>Family-plan options</li>
            </ul>
            <p>
              GoodRx states that Gold is accepted at more than 38,000 pharmacy locations nationwide.
            </p>
            <p>
              The free version of GoodRx can still be useful for people who don't want a paid membership. GoodRx's comparison guide lists free prescription discounts alongside Gold savings, with the free service also providing price comparison and access to the GoodRx app.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">GoodRx Gold Discount</h3>
            <p>
              If you regularly purchase prescription medication, compare the price available through the free GoodRx service with the Gold price before paying for a membership.
            </p>
            <p>
              GoodRx allows Gold members to view Gold prices alongside other prescription prices after entering their medication and location.
            </p>
            <p>
              This makes it easier to determine whether the membership could be worthwhile based on your own prescriptions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">GoodRx Rewards</h3>
            <p>
              GoodRx also offers a Rewards program through its mobile app.
            </p>
            <p>
              With GoodRx Rewards, eligible users can earn points for certain activities, including searching for medications and using a free GoodRx coupon at the pharmacy. Once users accumulate at least 3,000 points, GoodRx says they can redeem them for an additional $5, $10, or $15 discount on eligible prescriptions or for a digital gift card.
            </p>
            <p>
              Rewards eligibility and redemption rules can vary, so check the current terms within your GoodRx account.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">GoodRx Home Delivery</h3>
            <p>
              GoodRx Gold members can also have eligible prescriptions delivered to their homes through Gold Mail Delivery.
            </p>
            <p>
              When the service is available for a particular medication, GoodRx displays Gold Mail Delivery as an option on the medication's pricing page. GoodRx says Gold Home Delivery includes free shipping.
            </p>
            <p>
              This can be useful if you prefer not to visit a pharmacy to collect eligible prescriptions.
            </p>
          </div>

          {/* Styled How-To Steps Box */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a GoodRx Coupon</h3>
            <p>Using a GoodRx coupon at a participating pharmacy is relatively straightforward.</p>
            <div className="space-y-6">
              {[
                { step: "Step 1: Search for Your Medication", desc: "Visit GoodRx and search for the prescription you need." },
                { step: "Step 2: Enter Your Details", desc: "Select the correct medication, dosage, quantity, and location to see relevant prices." },
                { step: "Step 3: Compare Pharmacies", desc: "Review the prices available at nearby pharmacies and look for the best option." },
                { step: "Step 4: Get Your Coupon", desc: "Select the applicable GoodRx coupon and print, email, or text it to yourself." },
                { step: "Step 5: Show the Coupon to the Pharmacist", desc: "When picking up your prescription, tell the pharmacist you want to use GoodRx and present the coupon before checkout." },
                { step: "Step 6: Check the Final Price", desc: "Confirm the price before paying. Prescription prices can change, so GoodRx recommends checking with the pharmacy before filling your prescription." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <div className="mt-1">
                    <p className="text-black font-black text-base">{item.step}</p>
                    <p className="text-gray-700 font-bold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save with GoodRx</h3>
            <p>
              Getting the most value from GoodRx isn't necessarily about finding one generic coupon code. The biggest savings can come from comparing the actual prices available for your prescription.
            </p>

            <p><strong>Compare Multiple Pharmacies:</strong> The same medication can have different prices at different pharmacies. GoodRx allows users to compare prices in their area, making it easier to identify a potentially lower-cost option.</p>

            <p><strong>Check Before Every Refill:</strong> Prescription prices can change, so don't assume that the price you received last time will remain the same. Checking GoodRx before each refill can help you identify current pricing.</p>

            <p><strong>Compare Free GoodRx and Gold:</strong> If you regularly fill prescriptions, compare the free coupon price with the Gold price. A paid membership may make sense for some users, while the free service may be sufficient for others.</p>

            <p><strong>Check Manufacturer Programs:</strong> GoodRx also lists manufacturer assistance programs for certain brand-name medications. These programs can sometimes provide another way to reduce prescription costs.</p>

            <p><strong>Ask the Pharmacy About Other Prices:</strong> GoodRx recommends comparing available options rather than automatically assuming its coupon is the cheapest. If a pharmacy's own price or another available offer is lower, you may want to consider that option.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">GoodRx for Over-the-Counter Products</h3>
            <p>
              GoodRx isn't limited to prescription medications. The platform also provides prices and coupons for certain over-the-counter medications, medical supplies, and devices. Examples listed by GoodRx include products such as Zyrtec, aspirin, vitamins, Claritin, nicotine patches, test strips, needles, and meters.
            </p>
            <p>
              However, the process for receiving a GoodRx discount on an over-the-counter product can be different. GoodRx notes that a prescription may be required to receive the discount even though the product itself doesn't normally require one.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More on Prescription Costs</h3>
            <p>
              GoodRx gives consumers a way to compare prescription prices and find potential savings before visiting a pharmacy. Its free coupons, prescription savings card, Gold membership, Rewards program, and other services provide several ways to approach prescription costs.
            </p>
            <p>
              Before filling your next prescription, check CouponsBit for the latest GoodRx discount code and available promotions. Then compare the actual price for your medication at participating pharmacies to find the option that works best for you.
            </p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        {/* Read More / Read Less Button */}
        <button 
          onClick={() => setIsReadMore(!isReadMore)} 
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"} 
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Dynamic FAQ Accordion Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">GoodRx Discount Code FAQs</h3>
          {[
            { q: "Does GoodRx offer discount codes?", a: "GoodRx primarily provides prescription coupons and savings rather than traditional retail-style discount codes. Promotional offers may also be available for specific GoodRx services or memberships." },
            { q: "Where can I find a GoodRx promo code?", a: "You can check CouponsBit for available GoodRx promotions and savings opportunities before using the service." },
            { q: "Is GoodRx free?", a: "Yes. GoodRx offers a free service that allows users to compare prescription prices and access eligible coupons. GoodRx Gold is a separate paid membership." },
            { q: "How much can I save with GoodRx?", a: "GoodRx states that its free coupons can provide savings of up to 80% at participating pharmacies, while GoodRx Gold advertises savings of up to 90%. Actual savings vary by medication, pharmacy, location, and other factors." },
            { q: "Is GoodRx a pharmacy?", a: "No. GoodRx is not a pharmacy and does not fill or prescribe medications. It lists prices and coupons for pharmacies across the United States." },
            { q: "Can I use GoodRx with insurance?", a: "GoodRx coupons generally work as an alternative to insurance rather than being combined with your insurance for the same prescription transaction. Check the terms for your specific prescription and discuss your options with your pharmacist." },
            { q: "Does GoodRx offer a prescription savings card?", a: "Yes. GoodRx provides a free prescription savings card that can be used at participating pharmacies." },
            { q: "What is GoodRx Gold?", a: "GoodRx Gold is a paid membership offering additional prescription savings and other benefits. GoodRx currently lists individual plans starting at $9.99 per month, with family plans also available." },
            { q: "Does GoodRx offer home delivery?", a: "GoodRx Gold offers free home delivery for eligible prescriptions when Gold Mail Delivery is available." },
            { q: "Is CouponsBit free to use?", a: "Yes. CouponsBit is free to use. You can browse available GoodRx offers and other savings opportunities without paying a fee." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
              >
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["GoodRx", "Promo Code", "Discount Code", "Prescription Savings", "GoodRx Gold", "Rx Coupon", "Free Savings Card", "Home Delivery"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  G
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
                  aria-label={`Shop GoodRx: ${deal.heading}`} 
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
