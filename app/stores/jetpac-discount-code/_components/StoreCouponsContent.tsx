"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,Globe, HardDrive, Package,
  Percent,
  Users,
  BadgeCheck,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Smartphone,
  Globe2,
  Armchair,
  Briefcase,
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
  { id: "d1", label: "SALE", heading: "Save Up To 70% on International eSIMs", sub: "vs Traditional Roaming" },
  { id: "d2", label: "SALE", heading: "Up To 53% OFF Airport Lounge Access", sub: "Selected Lounges" },
  { id: "d3", label: "REFER", heading: "Get $10 With Refer a Friend", sub: "Referral Reward" },
  { id: "d4", label: "EARN", heading: "Affiliate Program – Up To 15% Commission", sub: "Earn From Sales" },
  { id: "d5", label: "CALLS", heading: "Worldwide Voice Calls – 30 Min for $9.99", sub: "99 Countries" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Airalo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/airalo-logo_fc6u6p.webp", dealText: "USA eSIM From $4.50", href: "/stores/airalo-discount-code" },
  { name: "Klook", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002063/klook-logo_alzz2a.webp", dealText: "Up To 50% OFF", href: "/stores/klook-discount-code" },
  { name: "Agoda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg", dealText: "Up To 69% OFF", href: "/stores/agoda-discount-code" },
  { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", dealText: "Up To 40% OFF", href: "/stores/expedia-discount-code" },
  { name: "Kiwi.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/kiwi-logo_egovdr.webp", dealText: "Up to $580 Rewards", href: "/stores/kiwi-discount-code" },
  { name: "Booking", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/booking-logo_dtnn30.webp", dealText: "Up To 40% OFF", href: "/stores/booking-promo-code" },
];

const STORE_URL = "http://affiliate.jetpacglobal.com/c/4303217/1833340/21879?subId1=1015";

const dealsData = [
  { label: "SALE", value: "70% OFF", title: "Jetpac Discount Code – Save Up To 70% on International eSIMs", desc: "Save Up To 70% on international eSIM plans compared with traditional roaming rates.", bullets: ["Use a Jetpac Discount Code to save more on eligible travel connectivity plans.", "Stay connected across the USA and international destinations without expensive roaming bills.", "Choose affordable eSIM plans based on your destination and travel needs.", "Enjoy reliable mobile connectivity for international trips with easy eSIM activation."], code: "ANC10" },
  { label: "SALE", value: "53% OFF", title: "Jetpac Discount Code – Up To 53% OFF Airport Lounge Access", desc: "Enjoy Up To 53% OFF selected airport Lounge Access services.", bullets: ["Use a Jetpac Discount Code where eligible to unlock additional savings.", "Relax in premium airport lounges while travelling from or within the USA.", "Check available lounges, destinations and prices before booking.", "Make your airport experience more comfortable while saving on lounge access."], code: "ANC10" },
  { label: "REFER", value: "$10", title: "Jetpac Discount Code – Get $10 With Refer a Friend", desc: "Refer a friend to Jetpac and give them $5 OFF their first eSIM purchase.", bullets: ["Earn $10 after your referred friend completes their first eligible purchase.", "Share your Jetpac referral offer with friends travelling across the USA or abroad.", "Use the referral opportunity to help friends save on international connectivity.", "Start referring friends and earn your $10 reward."], code: "ANC10" },
  { label: "EARN", value: "15%", title: "Jetpac Affiliate Program – Earn Up To 15% Commission", desc: "Join the Jetpac Affiliate Program and earn Up To 15% commission on eligible Jetpac sales.", bullets: ["Promote international eSIM plans to travellers, creators and online audiences.", "Ideal for USA travel bloggers, publishers, creators and affiliate marketers.", "Start promoting Jetpac eSIM products and earn from qualifying sales."], code: "ANC10" },
  { label: "CALLS", value: "$9.99", title: "Jetpac Worldwide Voice Calls – 30 Minutes for $9.99", desc: "Get 30 minutes of worldwide voice calls for $9.99.", bullets: ["Make calls across 99 countries with 30-day validity.", "Save Up To 15% OFF on eligible purchases when buying more.", "Ideal for travellers from the USA who need affordable international calling.", "Enjoy prepaid worldwide calling with no hidden additional fees."], code: "ANC10" },
  { label: "CALLS", value: "$4.99", title: "Jetpac Worldwide Voice Calls – 15 Minutes for $4.99", desc: "Get 15 minutes of worldwide voice calls for just $4.99.", bullets: ["Enjoy calling coverage across 99 countries with 30-day validity.", "Save Up To 15% OFF on eligible voice pack purchases.", "Stay connected with family, friends and contacts while travelling internationally.", "Enjoy affordable prepaid calling without unexpected additional fees."], code: "ANC10" },
  { label: "LOUNGE", value: "$35", title: "Jetpac Airport Lounge Access – 36% OFF at Madrid Airport", desc: "Get Lounge Access at Adolfo Suárez Madrid-Barajas Airport for $35.", bullets: ["Save 36% OFF the listed airport lounge access price.", "Enjoy a comfortable place to relax before your international flight.", "Jetpac provides access to 1,300+ airport lounges worldwide.", "Enjoy convenient airport lounge access without needing a traditional lounge membership."], code: "ANC10" },
  { label: "FAST", value: "$14", title: "Jetpac Fast Track – 24% OFF at Beijing Airport", desc: "Get Fast Track at Beijing Capital International Airport for $14.", bullets: ["Save 24% OFF the listed Fast Track service.", "Skip long airport queues and enjoy a faster travel experience.", "Jetpac Fast Track services are available across 80+ locations.", "Ideal for USA travellers looking to save valuable time during international journeys."], code: "ANC10" },
];

export default function JetpacCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const toggleOpen = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const handleCopy = (code: string, i: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(i);
    setToastCode(code);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
    setTimeout(() => setCopiedIndex(null), 2000);
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
              <span className="text-black font-extrabold">Jetpac</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787739252/jetpac-logo_bng0au.webp" alt="Jetpac" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Jetpac</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(9.7k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Use the verified Jetpac discount code ANC10 and latest promo codes to save up to 70% on international eSIM plans. Enjoy discounted airport lounge access, worldwide voice calls, Fast Track services, referral rewards, and affordable travel connectivity across 100+ destinations.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "8", label: "Offers" },
                    { icon: Percent, val: "1.4k", label: "Deals" },
                    { icon: Users, val: "3M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787741564/jetpac-logo_prj8gu.webp" alt="Jetpac Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
      {/* Main Content Area */}
      <div className="lg:w-[65%]">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-black leading-tight">
            Jetpac Discount Codes & Offers
          </h2>
        </div>

        {dealsData.map((c, i) => {
          const isOpen = openIndex === i;
          const isCopied = copiedIndex === i;

          return (
            <div key={i} className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-col sm:flex-row">
                  {/* Left Badge Header */}
                  <div className="relative w-full sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="hidden sm:block absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="hidden sm:block absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-[11px] font-bold leading-3">
                        {c.label}
                      </p>
                      <div className="text-2xl sm:text-3xl font-extrabold leading-none mt-2">
                        {c.value}
                      </div>
                    </div>
                  </div>

                  {/* Content Body & Actions */}
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    {/* Information Section */}
                    <div className="flex-1 px-4 sm:px-6 py-4 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[8px] sm:text-[9px] font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                          Limited Time
                        </span>
                        <span className="bg-green-100 text-green-700 text-[8px] sm:text-[9px] font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                          Verified Deal
                        </span>
                      </div>
                      <h2 className="text-[16px] sm:text-[20px] font-black text-[#061b3a] leading-tight">
                        {c.title}
                      </h2>
                      <p className="mt-2 text-gray-600 text-[13px] sm:text-sm leading-6">
                        {c.desc}
                      </p>

                      {/* Accordion Toggle */}
                      <button
                        type="button"
                        onClick={() => toggleOpen(i)}
                        className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1 hover:opacity-80 transition-opacity"
                      >
                        View Details
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Collapsible Details */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen
                            ? "max-h-[500px] opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          {c.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2">
                              <span className="text-[#0344b0]">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Button and Coupon Code Side Box */}
                    <div className="w-full lg:w-[220px] flex flex-col items-center justify-center gap-3 px-4 sm:px-6 py-5 sm:py-6 shrink-0">
                      <a
                        href={STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit Website: ${c.title}`}
                        className="w-full bg-[#056bfa] hover:bg-[#005f91] text-white font-black text-sm sm:text-base py-3 rounded-xl shadow-md transition-all duration-300 text-center block"
                      >
                        Visit Website
                      </a>

                      <button
                        type="button"
                        onClick={() => handleCopy(c.code, i)}
                        className="w-full border-2 border-dashed border-[#056bfa] bg-white hover:bg-blue-50 text-[#056bfa] font-extrabold text-xs sm:text-sm py-2 px-3 rounded-xl flex items-center justify-between transition-colors uppercase tracking-wider"
                      >
                        <span>{c.code}</span>
                        <span className="flex items-center gap-1 text-[11px] uppercase">
                          {isCopied ? (
                            <>
                              <Check size={14} className="text-green-600" />
                              <span className="text-green-600">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              Copy
                            </>
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
          <h3 className="text-black font-black text-lg mb-6">What Is Jetpac?</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Jetpac is a travel connectivity service focused on eSIM data plans for international travelers. Instead of purchasing a traditional physical SIM card when you arrive at your destination, an eSIM allows you to download and activate a mobile data plan digitally on a compatible device.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Jetpac provides eSIM options for individual countries as well as broader regions. Its website currently lists destinations and regional plans covering areas such as North America, Europe, Africa, the Caribbean, and Asia, alongside individual-country plans.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            The Jetpac Global app also allows travelers to manage their eSIM, monitor data usage, and access available features and perks.

          </p>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2"
          >
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
          <div className="space-y-1">
            {[
              { icon: Smartphone, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
              { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
              { icon: Globe2, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
              { icon: Briefcase, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
              { icon: Search, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
            ].map((cat, i) => (
              <Link
                key={i}
                href={cat.href}
                className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <cat.icon className={`w-4 h-4 ${cat.color}`} />
                  <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">
                    {cat.name}
                  </span>
                </div>
                <span className="bg-[#e8f6f8] text-[#0451c4] px-2.5 py-0.5 rounded-full text-[12px] font-black">
                  {cat.count} Coupons
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/categories"
            className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline"
          >
            View All Categories →
          </Link>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-6">
    Ways to Save on Jetpac
  </h3>
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 text-justify">
    A promo code isn't the only way to look for better value when buying a travel eSIM.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Globe,
        title: "Compare Country and Regional Plans",
        sub: "If you are visiting multiple countries, compare individual-country plans with regional options."
      },
      {
        icon: HardDrive,
        title: "Select the Right Data Allowance",
        sub: "Avoid automatically choosing an unlimited plan if you only need basic connectivity. Similarly, heavy data users should make sure their allowance matches their usage."
      },
      {
        icon: Package,
        title: "Check Multi-Pack Promotions",
        sub: "Jetpac sometimes runs promotions where purchasing multiple packs can provide additional savings. Current product pages show quantity-based promotional offers on selected plans, although these offers can change over time."
      },
      {
        icon: Tag,
        title: "Check CouponsBit Before Checkout",
        sub: "Before purchasing, check CouponsBit for the latest Jetpac coupon code, promo code, discount code, or deal."
      },
      {
        icon: Smartphone,
        title: "Check App-Based Offers",
        sub: "Jetpac manages many features through its mobile application, so travelers should also check the app for applicable promotions and account-specific opportunities."
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
          Jetpac Promo Code, Discount Code & eSIM Deals
        </h2>

        <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[850px] border-collapse text-left">
      <thead>
        <tr className="bg-[#056BFA]">
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Offer</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Discount / Price</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Coupon Code</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Eligibility</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Key Conditions</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Applicable On</th>
        </tr>
      </thead>
      <tbody className="text-[14px] font-bold text-gray-600">
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[200px] p-5 align-middle font-black text-black break-words">
            International eSIM Savings 📶
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 70% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap font-mono font-black text-gray-800">
            <span className="rounded bg-gray-100 px-2.5 py-1 border border-gray-300">ANC10</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Savings compared to standard international roaming rates
          </td>
          <td className="max-w-[220px] p-5 align-middle text-gray-500 break-words">
            International eSIM data plans
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[200px] p-5 align-middle font-black text-black break-words">
            Airport Lounge Access Deal 🛋️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 53% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap font-mono font-black text-gray-800">
            <span className="rounded bg-gray-100 px-2.5 py-1 border border-gray-300">ANC10</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Discount applies to selected airport lounges globally
          </td>
          <td className="max-w-[220px] p-5 align-middle text-gray-500 break-words">
            Jetpac Airport Lounge bookings
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[200px] p-5 align-middle font-black text-black break-words">
            Refer a Friend Bonus 🎁
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Get $10 ($5 OFF for Friend)
          </td>
          <td className="p-5 align-middle whitespace-nowrap font-mono font-black text-gray-800">
            <span className="rounded bg-gray-100 px-2.5 py-1 border border-gray-300">ANC10</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Existing &amp; New Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Referred friend receives $5 OFF their initial eSIM purchase
          </td>
          <td className="max-w-[220px] p-5 align-middle text-gray-500 break-words">
            First eSIM purchases via referral link
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[200px] p-5 align-middle font-black text-black break-words">
            Jetpac Affiliate Program 💼
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 15% Commission
          </td>
          <td className="p-5 align-middle whitespace-nowrap font-mono font-black text-gray-800">
            <span className="rounded bg-gray-100 px-2.5 py-1 border border-gray-300">ANC10</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Approved Affiliates
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Commissions paid out on eligible Jetpac sales conversions
          </td>
          <td className="max-w-[220px] p-5 align-middle text-gray-500 break-words">
            All successful referral sales
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[200px] p-5 align-middle font-black text-black break-words">
            Worldwide Voice Calls (30 Min) 📞
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $9.99
          </td>
          <td className="p-5 align-middle whitespace-nowrap font-mono font-black text-gray-800">
            <span className="rounded bg-gray-100 px-2.5 py-1 border border-gray-300">ANC10</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Includes 30 talk-time minutes globally
          </td>
          <td className="max-w-[220px] p-5 align-middle text-gray-500 break-words">
            Jetpac international voice calls
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[200px] p-5 align-middle font-black text-black break-words">
            Worldwide Voice Calls (15 Min) 📱
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $4.99
          </td>
          <td className="p-5 align-middle whitespace-nowrap font-mono font-black text-gray-800">
            <span className="rounded bg-gray-100 px-2.5 py-1 border border-gray-300">ANC10</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Includes 15 talk-time minutes globally
          </td>
          <td className="max-w-[220px] p-5 align-middle text-gray-500 break-words">
            Jetpac international voice calls
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[200px] p-5 align-middle font-black text-black break-words">
            Madrid Airport Lounge Pass 🍷
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $35 (36% OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap font-mono font-black text-gray-800">
            <span className="rounded bg-gray-100 px-2.5 py-1 border border-gray-300">ANC10</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Travelers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Valid at Adolfo Suárez Madrid-Barajas Airport (MAD)
          </td>
          <td className="max-w-[220px] p-5 align-middle text-gray-500 break-words">
            Madrid airport lounge access pass
          </td>
        </tr>

        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[200px] p-5 align-middle font-black text-black break-words">
            Beijing Airport Fast Track Pass ⚡
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $14 (24% OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap font-mono font-black text-gray-800">
            <span className="rounded bg-gray-100 px-2.5 py-1 border border-gray-300">ANC10</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Travelers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Valid at Beijing Capital International Airport (PEK)
          </td>
          <td className="max-w-[220px] p-5 align-middle text-gray-500 break-words">
            Beijing airport fast track pass
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        {/* Expandable Content Area */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative transition-all", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <div className="space-y-4">
            <p>
              Planning an international trip? Staying connected should be one of the easiest parts of your journey. With a Jetpac promo code, travelers can look for ways to save on eSIM data plans while keeping their phones connected across destinations around the world. Jetpac offers travel eSIMs designed for international travelers who need mobile data without relying entirely on traditional roaming services.
            </p>
            <p>
              Whether you're heading to the United States, Europe, Japan, South Korea, Southeast Asia, Canada, or another destination, Jetpac offers country-specific and regional eSIM options. You can choose plans according to your destination, preferred validity period, and data requirements, making it easier to find an option that fits your travel style.
            </p>
            <p>
              CouponsBit helps you discover available Jetpac promo codes, Jetpac discount codes, coupon codes, deals, and offers so you can check for savings before completing your purchase.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Jetpac Promo Codes & Deals</h3>
            <p>
              Looking for a Jetpac promo code before your next trip? Start by checking the latest available offers on CouponsBit. Depending on the promotion, Jetpac deals may apply to selected eSIM plans, destinations, or qualifying purchases.
            </p>
            <p>Jetpac may offer different types of promotions, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Jetpac promo codes</li>
              <li>Jetpac discount codes</li>
              <li>Jetpac coupon codes</li>
              <li>Travel eSIM deals</li>
              <li>Regional eSIM offers</li>
              <li>Country-specific eSIM promotions</li>
              <li>Multi-pack savings</li>
              <li>Promotional campaigns</li>
              <li>Referral or app-based offers</li>
              <li>Limited-time travel deals</li>
            </ul>
            <p>
              Because travel promotions can change, always check the terms and eligibility requirements of an offer before applying it.
            </p>
          </div>

          <div className={cn("text-gray-600 space-y-8 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  {/* Header & Overview */}
  <div className="space-y-4">
    <h2 className="text-2xl font-black text-[#056bfa]">Jetpac eSIM Plans</h2>
    <p>
      The main product offered by Jetpac is its travel eSIM. Instead of choosing a conventional roaming package from your home carrier, you can select an eSIM based on where you are traveling and how much data you expect to use.
    </p>
    <p>Jetpac plans can vary by:</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 my-4">
      {[
        "Destination", "Region", "Data allowance", "Plan duration",
        "Standard or unlimited data options", "Network availability", "Device compatibility"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-semibold text-gray-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      This flexibility makes Jetpac useful for different types of travelers, from people taking short vacations to those spending several weeks abroad.
    </p>
  </div>

  {/* Country-Specific eSIMs */}
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-gray-900">Country-Specific eSIMs</h3>
    <p>
      Traveling to one particular country? Jetpac offers dedicated country plans for numerous destinations.
    </p>
    <p>
      Country-specific eSIMs can be useful when your itinerary focuses on one location because you can select a plan specifically designed for that destination.
    </p>
    <p>Examples include:</p>
    <div className="flex flex-wrap gap-2 my-4">
      {[
        "United States", "Canada", "Japan", "South Korea",
        "Philippines", "Vietnam", "Brazil", "China",
        "Puerto Rico", "And many other destinations"
      ].map((item, idx) => (
        <span key={idx} className="bg-blue-50 text-[#056bfa] text-xs font-bold px-3 py-1.5 rounded-lg border border-blue-100">
          {item}
        </span>
      ))}
    </div>
    <p>
      For example, Jetpac's U.S. eSIM page provides multiple data and validity options for travelers visiting the United States.
    </p>
    <p>
      Japan travelers can similarly choose from different data allowances and validity periods through Jetpac's Japan eSIM plans.
    </p>
  </div>

  {/* Regional eSIM Plans */}
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-gray-900">Regional eSIM Plans</h3>
    <p>
      If your trip includes multiple countries, a regional eSIM can be more convenient than purchasing separate plans for every destination.
    </p>
    <p>Jetpac offers regional connectivity options for areas such as:</p>
    <div className="flex flex-wrap gap-2 my-4">
      {["Europe", "North America", "Africa", "Caribbean", "Asia and other international destinations"].map((item, idx) => (
        <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md">
          {item}
        </span>
      ))}
    </div>
    <p>
      For example, Jetpac's Europe plans provide different data allowances and validity periods for travelers visiting multiple European destinations.
    </p>
    <p>
      A regional plan can be particularly useful for road trips, multi-country vacations, backpacking itineraries, business travel, and extended holidays.
    </p>
  </div>

  {/* Jetpac Unlimited Data Plans */}
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-gray-900">Jetpac Unlimited Data Plans</h3>
    <p>
      For travelers who use their phones heavily, Jetpac also offers unlimited-data plan options in selected destinations.
    </p>
    <p>Unlimited plans can be useful when you regularly use:</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 my-4">
      {[
        "Google Maps", "WhatsApp", "Instagram", "TikTok",
        "YouTube", "Video calls", "Ride-hailing apps", "Travel apps",
        "Social media", "Cloud services", "Online work tools"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-semibold text-gray-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p className="text-sm bg-amber-50 text-amber-800 p-3 rounded-xl border border-amber-200 font-medium">
      However, "unlimited" plans can have network-speed conditions. Jetpac currently states that its unlimited plans provide the first 3 GB every 24 hours at standard network speeds, after which connectivity continues at speeds of up to 1 Mbps until the daily allowance refreshes.
    </p>
    <p className="text-xs text-gray-500 italic">Always read the individual plan's terms before purchasing.</p>
  </div>

  {/* Jetpac Data Plans */}
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-gray-900">Jetpac Data Plans</h3>
    <p>
      Not every traveler needs unlimited data. If you primarily need maps, messaging, email, ride-hailing, and occasional browsing, a fixed-data plan may be enough.
    </p>
    <p>Jetpac provides different data allowances depending on the destination.</p>
    <p>You can select a plan according to your expected usage:</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-[#056bfa]">Light Data Users</h5>
        <p className="text-sm">
          A smaller data package can work well for travelers who mainly use:
        </p>
        <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
          <li>Messaging</li>
          <li>Maps</li>
          <li>Email</li>
          <li>Travel bookings</li>
          <li>Basic web browsing</li>
        </ul>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-[#056bfa]">Moderate Data Users</h5>
        <p className="text-sm">
          A medium-sized data plan can be useful for people who regularly use social media, navigation, browsing, and photo uploads.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-[#056bfa]">Heavy Data Users</h5>
        <p className="text-sm">
          Travelers who stream content, make frequent video calls, upload large files, or use their phones as a hotspot may prefer plans with larger data allowances or an unlimited option where available.
        </p>
      </div>
    </div>

    <p>
      Choosing the right plan instead of automatically selecting the largest package can help you manage your travel connectivity more efficiently.
    </p>
  </div>

  {/* Destination Specifics */}
  <div className="space-y-6">
    {/* Jetpac eSIM for the United States */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Jetpac eSIM for the United States</h3>
      <p>
        Planning a trip to the U.S.? Jetpac offers dedicated United States eSIM plans with multiple data and validity options.
      </p>
      <p>A U.S. travel eSIM can help you stay connected while exploring destinations such as:</p>
      <div className="flex flex-wrap gap-2 my-2">
        {[
          "New York", "Los Angeles", "Las Vegas", "Miami",
          "San Francisco", "Orlando", "Chicago", "Washington, D.C.",
          "Boston", "Seattle"
        ].map((city, idx) => (
          <span key={idx} className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-md border border-indigo-100">
            {city}
          </span>
        ))}
      </div>
      <p>
        You can use mobile data for maps, transportation apps, hotel communication, restaurant searches, travel bookings, and staying in touch with friends and family.
      </p>
    </div>

    {/* Jetpac eSIM for Canada */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Jetpac eSIM for Canada</h3>
      <p>
        Jetpac also provides dedicated Canada eSIM plans with different data allowances and validity periods.
      </p>
      <p>
        A Canada eSIM can be convenient for travelers visiting cities such as Toronto, Vancouver, Montreal, Calgary, and other destinations.
      </p>
      <p>
        If your itinerary includes both the United States and Canada, a North America regional plan may also be worth considering.
      </p>
    </div>

    {/* Jetpac eSIM for Japan */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Jetpac eSIM for Japan</h3>
      <p>Japan is another destination supported by Jetpac's travel eSIM service.</p>
      <p>A Japan eSIM can help travelers stay connected while exploring:</p>
      <div className="flex flex-wrap gap-2 my-2">
        {["Tokyo", "Kyoto", "Osaka", "Hiroshima", "Nara", "Sapporo", "Fukuoka"].map((city, idx) => (
          <span key={idx} className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-md border border-indigo-100">
            {city}
          </span>
        ))}
      </div>
      <p>
        Instead of searching for a local SIM after landing, travelers can prepare their eSIM before departure and activate it according to the plan instructions. Jetpac provides several Japan data and validity options.
      </p>
    </div>

    {/* Jetpac eSIM for South Korea */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Jetpac eSIM for South Korea</h3>
      <p>
        Traveling to Seoul, Busan, Jeju, or other parts of South Korea? Jetpac offers South Korea eSIM plans with multiple data options and validity periods.
      </p>
      <p>
        This can be useful for navigating unfamiliar areas, translating signs, checking public transportation, finding restaurants, and staying connected while sightseeing.
      </p>
    </div>

    {/* Jetpac eSIM for Europe */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Jetpac eSIM for Europe</h3>
      <p>
        Europe is particularly well suited to regional eSIM plans because travelers often visit several countries during a single trip.
      </p>
      <p>A Europe eSIM can be useful for itineraries covering destinations such as:</p>
      <div className="flex flex-wrap gap-2 my-2">
        {[
          "France", "Italy", "Spain", "Germany", "Netherlands",
          "Switzerland", "Portugal", "Greece", "Austria", "Belgium"
        ].map((country, idx) => (
          <span key={idx} className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-md border border-indigo-100">
            {country}
          </span>
        ))}
      </div>
      <p>
        Instead of changing SIM cards as you cross borders, a regional plan can provide a more convenient way to manage mobile data across supported destinations.
      </p>
    </div>

    {/* Jetpac eSIM for Asia */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Jetpac eSIM for Asia</h3>
      <p>Jetpac also offers plans for several Asian destinations.</p>
      <p>
        Depending on your itinerary, you can find country-specific options for destinations such as Japan, South Korea, China, Vietnam, and the Philippines.
      </p>
      <p>
        This makes Jetpac an option for vacations, business trips, study travel, and multi-destination Asian adventures.
      </p>
    </div>
  </div>

  {/* Features & Technical Details */}
  <div className="space-y-6">
    {/* Jetpac Hotspot Sharing */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Jetpac Hotspot Sharing</h3>
      <p>
        Jetpac also highlights hotspot sharing as one of its eSIM features. The company states that users can share their internet connection without hotspot data restrictions on its eSIM service.
      </p>
      <p>This can be useful when traveling with:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-2">
        {["A laptop", "Tablet", "Second phone", "Travel companion", "Work equipment"].map((item, idx) => (
          <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-semibold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <p>
        For example, a traveler working remotely could use their phone's connection to get a laptop online while away from Wi-Fi.
      </p>
      <p className="text-xs text-gray-500 italic">
        Always check the specific plan terms and device compatibility before relying on hotspot functionality.
      </p>
    </div>

    {/* Stay Connected to Essential Apps */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Stay Connected to Essential Apps</h3>
      <p>
        One useful Jetpac feature is continued access to certain essential services on qualifying plans.
      </p>
      <p>
        Jetpac states that purchases of eligible packs with 3 GB or more include free access for WhatsApp chat, Uber, Grab, and navigation on Google Maps even when the main eSIM data allowance runs out.
      </p>
      <p>This can be particularly useful when you need to:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-2">
        {[
          "Contact your hotel", "Message your travel companions", "Book a ride",
          "Find directions", "Navigate to an airport", "Locate a restaurant",
          "Find your accommodation"
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-semibold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 italic">
        Availability and eligibility can depend on the plan, so check the current terms before purchasing.
      </p>
    </div>

    {/* Jetpac SmartDelay & Airport Lounge Perks */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Jetpac SmartDelay & Airport Lounge Perks</h3>
      <p>
        Jetpac also offers SmartDelay as a complimentary perk associated with eligible eSIM purchases.
      </p>
      <p>
        According to Jetpac, travelers can register through the Jetpac Global app and use SmartDelay if their flight is delayed, with access to an airport lounge available under the program's conditions.
      </p>
      <p>This adds another travel-related benefit beyond basic mobile connectivity.</p>
    </div>

    {/* Jetpac Voice Calling */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Jetpac Voice Calling</h3>
      <p>
        Jetpac's standard eSIM service is primarily a data-roaming service and does not include SMS. Jetpac states that users can purchase voice packs through the Jetpac app and use its in-app calling feature when voice service is needed.
      </p>
      <p>This means travelers should consider their communication requirements before selecting a plan.</p>
      <p>
        If your trip requires traditional phone calls or SMS, check the available voice options and your device's capabilities before departure.
      </p>
    </div>

    {/* Jetpac Multi-Network Connectivity */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Jetpac Multi-Network Connectivity</h3>
      <p>
        One reason travelers use eSIM services is to avoid being tied to a single physical SIM card.
      </p>
      <p>
        Jetpac highlights multi-network connectivity, with the eSIM able to connect to an available network at the destination. Its website says the service can automatically connect to the strongest available network in supported destinations.
      </p>
      <p className="text-sm text-gray-500 italic">
        Network performance can still vary depending on local coverage, location, device, congestion, and other factors.
      </p>
    </div>

    {/* Jetpac eSIM-Compatible Devices */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Jetpac eSIM-Compatible Devices</h3>
      <p>
        Before purchasing a Jetpac eSIM, make sure your phone or other device supports eSIM functionality.
      </p>
      <p>Jetpac lists compatibility across a range of devices and manufacturers, including:</p>
      <div className="flex flex-wrap gap-2 my-4">
        {[
          "iPhone", "iPad", "Google Pixel", "Samsung", "Motorola",
          "OnePlus", "OPPO", "Xiaomi", "Sony Xperia", "Nokia",
          "Huawei", "HONOR", "Vivo", "TCL", "Other compatible devices"
        ].map((device, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-md">
            {device}
          </span>
        ))}
      </div>
      <p>Jetpac also provides a device compatibility checker on its product pages.</p>
      <p>
        Compatibility can vary by model and region, so checking your exact device before purchase is important.
      </p>
    </div>
  </div>

  {/* Truncation Gradient Overlay */}
  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          {/* How-To Steps Box */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Find a Jetpac Discount Code on CouponsBit</h3>
            <div className="space-y-6">
              {[
                { title: "Step 1: Visit the Jetpac Page on CouponsBit", text: "Start by visiting the Jetpac deals page on CouponsBit to view available offers." },
                { title: "Step 2: Check Available Offers & Conditions", text: "Review the current promo codes and pay attention to eligible products, minimum spend, destination limits, expiry dates, new-user rules, or app promotions." },
                { title: "Step 3: Copy the Promo Code", text: "If a valid code is available, copy it before heading to Jetpac." },
                { title: "Step 4: Select Your eSIM", text: "Choose your destination and select the data allowance and validity period that match your trip." },
                { title: "Step 5: Apply the Code", text: "Enter your Jetpac promo code during checkout in the applicable field." },
                { title: "Step 6: Complete Your Purchase", text: "Check that the discount or promotion has been applied correctly before completing your order." }
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
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use a Jetpac Promo Code?</h3>
            <p>
              A Jetpac promo code can make an already planned travel purchase more cost-efficient when a valid offer is available. Instead of paying the standard listed amount, checking for a code can help reduce overall costs.
            </p>
            <p>This is especially worth checking when:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You are buying multiple eSIM packs</li>
              <li>You are traveling with family</li>
              <li>You have several destinations planned</li>
              <li>You need connectivity for an extended trip</li>
              <li>You are planning multiple international trips</li>
              <li>Jetpac is running a seasonal promotion</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Tips for Choosing a Jetpac eSIM</h3>
            <p>Choosing the right eSIM isn't only about finding the biggest discount. Consider these essential factors prior to purchase:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Destination:</strong> Make sure the plan covers every country on your itinerary.</li>
              <li><strong>Duration:</strong> Select a validity period that covers your complete trip.</li>
              <li><strong>Data usage:</strong> Think about how often you will use video, social media, navigation, and video calls.</li>
              <li><strong>Device compatibility:</strong> Confirm that your phone supports eSIM technology.</li>
              <li><strong>Hotspot requirements:</strong> If you need to connect a laptop or another device, verify hotspot support.</li>
              <li><strong>Network coverage:</strong> Review coverage details for your destination.</li>
              <li><strong>Voice requirements:</strong> Remember that Jetpac's standard data service does not include SMS, and voice calling is handled separately through its app-based service.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Trip With Jetpac</h3>
            <p>
              Staying connected abroad doesn't have to mean relying solely on expensive traditional roaming options. Jetpac provides a flexible range of travel eSIMs for individual destinations and regions, along with features designed for travelers who depend on their phones for navigation, communication, entertainment, and work.
            </p>
            <p>
              Before purchasing your next travel eSIM, visit CouponsBit to check for a Jetpac promo code, Jetpac discount code, coupon, deal, or other available offer. Compare the available plans, choose the option that matches your destination and data needs, and make sure you review the terms before checkout.
            </p>
            <p>
              With the right eSIM and a valid promotional offer, you can focus less on finding connectivity after landing and more on enjoying your trip.
            </p>
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Jetpac Promo Codes</h3>
          {[
            { q: "What is a Jetpac promo code?", a: "A Jetpac promo code is a promotional code that may provide a discount or special benefit when purchasing eligible Jetpac products. Availability, eligibility, and terms vary by promotion." },
            { q: "Where can I find a Jetpac discount code?", a: "You can check CouponsBit for available Jetpac discount codes, coupon codes, promotional offers, and deals before completing your purchase." },
            { q: "Does Jetpac offer eSIMs for the USA?", a: "Yes. Jetpac provides dedicated eSIM plans for the United States with different data allowances and validity periods." },
            { q: "Does Jetpac work in Europe?", a: "Jetpac offers Europe regional eSIM plans designed for travelers visiting supported European destinations." },
            { q: "Can I use Jetpac in Japan?", a: "Yes. Jetpac provides Japan-specific eSIM plans with different data options and durations." },
            { q: "Does Jetpac offer unlimited data?", a: "Jetpac offers unlimited plans in selected destinations. However, unlimited plans may have speed-management conditions, so check the details of your selected plan before purchasing." },
            { q: "Does Jetpac include SMS?", a: "Jetpac's standard eSIM service is data-only and does not include SMS. Voice options can be purchased through the Jetpac app where available." },
            { q: "Can I use Jetpac as a hotspot?", a: "Jetpac states that its eSIM supports hotspot sharing. Check the terms of your selected plan and your device compatibility before relying on this feature." },
            { q: "How long does a Jetpac eSIM remain available before activation?", a: "Jetpac states that an unactivated data pack remains available in the user's account for three months from the date of purchase. Once activated, the plan follows the validity period selected during purchase." },
            { q: "Can I use Jetpac for multiple trips?", a: "Jetpac describes its travel eSIM as reusable for future trips, with users able to top up when traveling again." },
            { q: "Is Jetpac available for different countries?", a: "Yes. Jetpac provides country-specific and regional eSIM options covering numerous destinations worldwide." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Jetpac Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Jetpac Promo Code", "Global eSIM", "USA Travel Data", "Europe eSIM", "Japan Mobile Data", "Hotspot Support", "Reusable eSIM", "Travel Perks"].map((tag) => (
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
