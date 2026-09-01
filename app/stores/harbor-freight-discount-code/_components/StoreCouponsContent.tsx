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
  ChevronDown,FileText, Calendar,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Wrench,
  Car,
  Zap,
  Boxes,
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
  { id: "d1", label: "SALE", heading: "Scratch & Dent Sale – $4.50 OFF", sub: "ICON & U.S. GENERAL" },
  { id: "d2", label: "DEAL", heading: "12,000 lb. Winch – $399.99", sub: "Inside Track Club" },
  { id: "d3", label: "DEAL", heading: "3 Ton Floor Jack – $159.99", sub: "7-Day Super Deal" },
  { id: "d4", label: "SHOP", heading: "R134A A/C Gauge Set – $67.99", sub: "PITTSBURGH" },
  { id: "d5", label: "DEAL", heading: "Steam Cleaner – $19.99", sub: "Inside Track Club" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Verified Deals", href: "/stores/home-depot-discount-code" },
  { name: "Wayfair", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp", dealText: "Up To 80% OFF", href: "/stores/wayfair-discount-code" },
  { name: "CarCovers", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/carcover-logo_eufopb.webp", dealText: "Save $30 OFF", href: "/stores/carcovers-discount-code" },
  { name: "Discount Tire", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/discounttie-logo_lcrloj.webp", dealText: "Up To $130 OFF", href: "/stores/discounttire-discount-code" },
  { name: "Bluetti", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/bluetti-power-logo_osmets.webp", dealText: "Save Up To $200", href: "/stores/bluetti-discount-code" },
  { name: "Dreame", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/dreame-logo_uqesij.webp", dealText: "Up To 45% OFF", href: "/stores/dreame-discount-code" },
];

const STORE_URL = "https://www.harborfreight.com/";

export default function HarborFreightCouponsContent() {
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
              <span className="text-black font-extrabold">Harbor Freight</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787571687/harbor-frigth_m4sdhc.webp" alt="Harbor Freight" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Harbor Freight</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(44.1k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                     Find genuine Abercrombie discount code offers for September 2026 and save up to 30% off almost everything. Explore the latest US promo code deals on women's, men's and kids' clothing, jeans, dresses, tops and more while limited-time offers last.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "8", label: "Offers" },
                    { icon: Percent, val: "2.7k", label: "Deals" },
                    { icon: Users, val: "12M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787571687/harbor-frigth_m4sdhc.webp" alt="Harbor Freight Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Harbor Freight Discount Codes & Offers</h2>
        </div>

        {[
          { label: "SALE", value: "$4.50 OFF", title: "Harbor Freight Discount Code – Scratch & Dent Sale", desc: "Save $4.50 OFF during the Harbor Freight Scratch & Dent Sale on select ICON and U.S. GENERAL storage products.", bullets: ["Shop discounted tools, storage solutions, and workshop essentials at limited-time prices.", "Quantities are limited, so grab your favorite deals before they sell out.", "Use the Harbor Freight Discount Code to look for additional savings where eligible."] },
          { label: "DEAL", value: "$399.99", title: "Harbor Freight Discount Code – 12,000 lb. Winch Super Deal", desc: "Get the 12,000 lb. Winch with Steel Rope and Wireless Remote for $399.99 for Inside Track Club members.", bullets: ["Regular Super Deal price is $599.99, offering $200 in savings.", "Member Super Deal is available through August 27.", "Check for a Harbor Freight Discount Code to maximize your savings on eligible purchases."] },
          { label: "DEAL", value: "$159.99", title: "Harbor Freight Discount Code – 3 Ton Professional Floor Jack", desc: "Get the 3 Ton Long-Reach Low-Profile Professional Floor Jack with RAPID PUMP for $159.99.", bullets: ["Inside Track Club members can save $110 from the regular $269.99 price.", "Available as a limited-time 7-Day Super Deal through August 27.", "Look for a valid Harbor Freight Discount Code for extra savings on eligible orders."] },
          { label: "SHOP", value: "$67.99", title: "Harbor Freight  – R134A A/C Manifold Gauge Set", desc: "Shop the PITTSBURGH R134A A/C Manifold Gauge Set for $67.99.", bullets: ["A practical choice for automotive A/C service and maintenance work.", "Take advantage of Harbor Freight's bundle savings and tool deals.", "Apply a valid Harbor Freight Discount Code when available for additional savings."] },
          { label: "DEAL", value: "$19.99", title: "Harbor Freight– 1200 Watt Handheld Steam Cleaner", desc: "Get the 1200 Watt Handheld Steam Cleaner for just $19.99 for Inside Track Club members.", bullets: ["Save 55% compared with the regular Super Deal price of $44.99.", "This limited-time deal is ideal for cleaning and household maintenance.", "Check for a Harbor Freight Discount Code before completing your purchase."] },
          { label: "SHOP", value: "$849.97", title: "Harbor Freight – HAUL-MASTER Utility Trailer", desc: "Shop the HAUL-MASTER 2000 lb. Capacity 5 ft. x 10 ft. Custom Modular Utility Trailer for $849.97.", bullets: ["Designed for hauling equipment, supplies, tools, and other heavy loads.", "Find it among Harbor Freight's clearance deals with limited quantities available.", "Use a Harbor Freight Discount Code where applicable for potential additional savings."] },
          { label: "NEW", value: "$89.99", title: "Harbor Freight  – BAUER 20V Cordless Band Saw", desc: "Get the BAUER 20V 2-1/2 in. Cordless Compact Band Saw – Tool Only for $89.99.", bullets: ["Compare at $169, giving you $79 in savings.", "This new Harbor Freight tool is designed for convenient cordless cutting applications.", "Check for a Harbor Freight Discount Code to save more on eligible purchases."] },
          { label: "DEAL", value: "$339.99", title: "Harbor Freight  – MIG 140 Professional Welder", desc: "Get the MIG 140 Professional Welder with 120V Input for $339.99 for Inside Track Club members.", bullets: ["Save $160 from the regular Super Deal price of $499.99.", "Take advantage of this limited-time 7-Day Super Deal while available.", "Use a valid Harbor Freight Discount Code where eligible to maximize your savings."] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[110px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-2">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-bold text-white leading-tight">{c.label}</p>
                    <div className="text-lg sm:text-2xl font-black text-white leading-none mt-2 whitespace-nowrap">{c.value}</div>
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Harbor Freight: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">Harbor Freight Membership and Rewards Savings</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Harbor Freight also offers membership-related savings through its loyalty programs. The specific benefits depend on the membership level and current program terms.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            For regular Harbor Freight shoppers, membership can be another factor to consider alongside coupons and promotional offers. If you frequently purchase tools, equipment, or automotive supplies, compare the available member benefits with the promotions available for your order.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            This is another reason not to focus exclusively on finding a Harbor Freight coupon code. Depending on the purchase, a member benefit or product promotion may provide better overall value.
          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
          <div className="space-y-1">
            {[
              { icon: Wrench, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
              { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
              { icon: Car, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
              { icon: Zap, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
          <h3 className="text-black font-black text-lg mb-8">
            How to Find the Best Harbor Freight Deals
          </h3>
          <div className="space-y-8">
            {[
              {
                icon: Tag,
                title: "Check CouponsBit Before Shopping",
                sub: "Before completing your Harbor Freight purchase, check CouponsBit for the latest Harbor Freight discount code, coupon offers, promotional codes, vouchers, and other available deals."
              },
              {
                icon: ShoppingBag,
                title: "Compare the Promotion With Your Cart",
                sub: "The most valuable offer depends on what you are purchasing. A product-specific deal may be better for one item, while a broader promotion may work better when buying several eligible products."
              },
              {
                icon: Percent,
                title: "Browse Clearance",
                sub: "If you are flexible about product selection, checking clearance merchandise can reveal additional savings opportunities."
              },
              {
                icon: Calendar,
                title: "Watch Major US Shopping Events",
                sub: "Black Friday, Cyber Monday, Father's Day, Memorial Day, Labor Day, and seasonal transitions can be useful periods to monitor for promotions on tools and equipment."
              },
              {
                icon: Wrench,
                title: "Consider the Entire Project",
                sub: "If you are working on a home improvement or automotive project, make a list of the tools and supplies you actually need. Then compare available promotions against the complete list instead of choosing a deal based solely on its advertised discount."
              },
              {
                icon: FileText,
                title: "Read the Offer Terms",
                sub: "Tool and equipment promotions can have exclusions. Some offers may not apply to particular brands or product categories, while others may have expiration dates or purchase requirements."
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
        </div>f
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
          Harbor Freight Discount Code, Coupon Code & Promo Offers
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
            Harbor Freight Scratch &amp; Dent Sale
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $4.50 OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Limited quantities, limited-time sale
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            ICON &amp; U.S. GENERAL storage products
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            12,000 lb. Winch Super Deal
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $399.99 <span className="text-xs text-gray-400 font-normal line-through">$599.99</span> ($200 OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Inside Track Club
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Member Super Deal through August 27
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            12,000 lb. Winch with Steel Rope &amp; Wireless Remote
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            3 Ton Professional Floor Jack
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $159.99 <span className="text-xs text-gray-400 font-normal line-through">$269.99</span> ($110 OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Inside Track Club
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            7-Day Super Deal through August 27
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            3 Ton Long-Reach Low-Profile Floor Jack
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            R134A A/C Manifold Gauge Set
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $67.99
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Limited-time bundle deal
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            PITTSBURGH R134A A/C Manifold Gauge Set
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            1200W Handheld Steam Cleaner
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $19.99 <span className="text-xs text-gray-400 font-normal line-through">$44.99</span> (55% OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Inside Track Club
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Limited-time Super Deal
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            1200 Watt Handheld Steam Cleaner
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            HAUL-MASTER Utility Trailer
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $849.97
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Clearance deal, limited quantities
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            2000 lb. Capacity 5x10 ft. Modular Utility Trailer
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            BAUER 20V Cordless Band Saw
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $89.99 <span className="text-xs text-gray-400 font-normal line-through">$169.00</span> ($79 OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            New tool release, limited-time price
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            BAUER 20V 2-1/2 in. Compact Band Saw (Tool Only)
          </td>
        </tr>
        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            MIG 140 Professional Welder
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $339.99 <span className="text-xs text-gray-400 font-normal line-through">$499.99</span> ($160 OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Inside Track Club
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            7-Day Super Deal, limited-time offer
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            MIG 140 Professional Welder with 120V Input
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Harbor Freight is a popular American retailer for tools, equipment, automotive supplies, hardware, and workshop essentials. From hand tools and power tools to automotive equipment, generators, welding supplies, storage solutions, outdoor equipment, and safety gear, Harbor Freight serves DIYers, mechanics, contractors, tradespeople, and homeowners across the United States.
          </p>
          <p>
            If you are planning a purchase from Harbor Freight, checking for a Harbor Freight discount code before completing your order can be a smart way to look for additional savings. CouponsBit helps shoppers find current coupon codes, promotional offers, vouchers, sales, and other deals so they can compare their options before making a purchase.
          </p>
          <p>
            Whether you need a new power tool for a home project, automotive equipment for your garage, storage for your workshop, or larger equipment for professional use, checking available Harbor Freight offers before checkout can help you get more value from your shopping budget.
          </p>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Find a Harbor Freight Discount Code</h3>
    <p>
      A Harbor Freight discount code can be useful when you are shopping for tools or equipment and want to see whether a current promotion applies to your purchase. Harbor Freight is known for running different types of savings campaigns, including product-specific promotions, coupon offers, seasonal events, member benefits, and clearance opportunities.
    </p>
    <p>
      Not every promotion works in the same way. Some offers may require a code, while others can be automatically reflected in the price of an eligible product. Certain promotions may also be limited to particular products, brands, stores, or periods.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      Before applying a Harbor Freight coupon code, check the offer's terms carefully. Understanding the eligibility requirements can help you choose the promotion that is most relevant to your order.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Harbor Freight Coupon Code and Promotional Savings</h3>
    <p>
      When looking for a Harbor Freight coupon code, it helps to consider the type of product you are buying rather than focusing on one specific discount format.
    </p>
    <p>
      For example, a shopper purchasing a hand tool may find a product-level promotion more useful, while someone buying workshop equipment may benefit from a broader offer. Clearance merchandise can also provide an opportunity to save without necessarily requiring a coupon.
    </p>
    <p className="font-medium text-gray-700">
      Couponsbit allows shoppers to check for a Harbor Freight promo code, discount offer, voucher, sale, or other available promotion before heading to checkout.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Shop Harbor Freight Tools and Equipment</h3>
    <p>
      Harbor Freight carries a wide range of products designed for home improvement, automotive work, construction, maintenance, workshop projects, and everyday repairs.
    </p>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Hand Tools</h4>
      <p>
        Hand tools are among Harbor Freight's core product categories. Depending on the current assortment, shoppers can find wrenches, sockets, ratchets, screwdrivers, pliers, hammers, measuring tools, cutting tools, specialty tools, and tool sets.
      </p>
      <p>
        For homeowners and DIYers, tool sets can be a convenient way to build a basic collection without purchasing every tool individually.
      </p>
      <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
        If you are planning to purchase several tools, checking for a Harbor Freight discount code before checkout can be worthwhile.
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Power Tools</h4>
      <p>
        Harbor Freight also offers power tools for drilling, cutting, grinding, sanding, fastening, woodworking, and other projects.
      </p>
      <p>
        Its selection can include cordless and corded tools, batteries, chargers, saws, drills, impact tools, grinders, sanders, polishers, and related accessories.
      </p>
      <p>
        Shoppers should check the specifications of each product to make sure the tool is appropriate for the intended project.
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Tool Storage</h4>
      <p>
        Keeping tools organized can be just as important as buying the tools themselves. Harbor Freight offers storage solutions such as tool cabinets, tool carts, workbenches, tool boxes, bags, organizers, and storage accessories.
      </p>
      <p>
        For a garage or workshop upgrade, customers may want to compare storage products with current promotions before making a larger purchase.
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Automotive Tools and Equipment</h4>
      <p>
        Harbor Freight has an extensive automotive category for customers working on cars, trucks, motorcycles, and other vehicles.
      </p>
      <p>
        Products can include jacks, jack stands, lifts, diagnostic tools, mechanics' tools, shop equipment, fluid-handling equipment, battery equipment, creepers, pressure washers, and other automotive supplies.
      </p>
      <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
        If you are preparing for a larger automotive project, check for a Harbor Freight coupon code before purchasing equipment and accessories.
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Generators and Power Equipment</h4>
      <p>
        Harbor Freight sells generators and other power-related equipment for different applications. Customers can find options designed for backup power, job sites, camping, outdoor activities, and other uses.
      </p>
      <p>
        The exact products and specifications vary, so shoppers should compare power requirements, fuel type, portability, capacity, and intended use before purchasing.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Welding Equipment</h5>
        <p className="text-sm">Welders, welding helmets, protective equipment, consumables, clamps, and fabrication supplies.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Air Compressors & Tools</h5>
        <p className="text-sm">Compressors, pneumatic air tools, hoses, fittings, and workshop accessories.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Outdoor & Lawn Equipment</h5>
        <p className="text-sm">Garden tools, pressure washers, utility trailers, water pumps, and outdoor storage.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Safety Equipment</h5>
        <p className="text-sm">Protective gloves, eyewear, hearing protection, workwear, and respirators for safer environments.</p>
      </div>
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Harbor Freight for DIY and Home Improvement</h3>
    <p>
      Harbor Freight is a practical destination for DIY enthusiasts working on home repairs, renovations, woodworking, garage projects, and general maintenance.
    </p>
    <p>
      A homeowner might shop for a drill and screwdriver set for a small repair, while someone completing a larger project may need saws, sanders, ladders, workbenches, storage, extension cords, or other equipment.
    </p>
    <p>
      Because DIY projects often require several tools and accessories, checking for available promotions before placing an order can help keep the overall project budget under control.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Harbor Freight for Automotive Projects</h3>
    <p>
      Car enthusiasts and home mechanics can use Harbor Freight for everything from basic maintenance tools to larger garage equipment.
    </p>
    <p>
      Its automotive assortment can support projects such as brake work, oil changes, tire maintenance, vehicle diagnostics, detailing, and general repairs.
    </p>
    <p>
      When buying automotive equipment, consider the complete cost of the project rather than focusing only on one product. A Harbor Freight voucher or promotional offer may be useful when purchasing several related items.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Harbor Freight Clearance and Sale Opportunities</h3>
    <p>
      Harbor Freight uses different promotional approaches throughout the year. Shoppers can find savings through coupons, product promotions, clearance merchandise, seasonal campaigns, and other limited-time offers.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Seasonal Promotions</h5>
        <p className="text-sm">Pressure washers and lawn tools in spring/summer; generators and heaters in fall/winter.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Black Friday & Holiday Sales</h5>
        <p className="text-sm">Major shopping event discounts around Thanksgiving, Christmas, and Cyber Monday.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Father's Day Promotions</h5>
        <p className="text-sm">Promotional emphasis on hand tools, power tools, automotive gear, and workshop storage.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Spring & Garage-Season Deals</h5>
        <p className="text-sm">Targeted savings during prime garage organization and outdoor maintenance months.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Clearance Events</h5>
        <p className="text-sm">Deep markdowns on inventory transitions, discontinued models, and stock replacements.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Limited-Time Promotions</h5>
        <p className="text-sm">Short-window promotional pushes focusing on single categories or urgent weekend deals.</p>
      </div>
    </div>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Harbor Freight Discount Code</h3>
            <p className="text-gray-700 font-bold mb-6">
              If you find a Harbor Freight discount code through CouponsBit, follow these general steps:
            </p>
            <div className="space-y-6">
              {[
                "Select the Harbor Freight offer you want to use.",
                "Visit the Harbor Freight website through the relevant offer.",
                "Browse tools, equipment, automotive products, or other merchandise.",
                "Add the eligible products to your shopping cart.",
                "Proceed to checkout.",
                "Enter the applicable promotional code in the designated field if required.",
                "Apply the code and review your order.",
                "Confirm that the promotion has been accepted before completing your purchase.",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 font-bold leading-relaxed pt-4">
              If the code does not work, check its expiration date and eligibility conditions. The offer may be limited to selected products, brands, quantities, or purchase methods.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Harbor Freight Offers?</h3>
            <p>
              CouponsBit helps shoppers look for savings before they complete an online purchase. Instead of searching separately for a Harbor Freight discount code, coupon, voucher, promotional offer, and sale, customers can check CouponsBit first and compare the available opportunities.
            </p>
            <p>
              This is particularly useful for Harbor Freight because shoppers may be purchasing anything from a single screwdriver set to a much larger collection of tools and equipment.
            </p>
            <p>
              The right offer depends on the purchase. A Harbor Freight promo code may be useful for one order, while a clearance deal, product promotion, seasonal sale, or member benefit may provide better value for another.
            </p>
            <p>
              CouponsBit is designed to help customers identify those possibilities before checkout.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Harbor Freight Purchase</h3>
            <p>
              Harbor Freight gives US shoppers access to a broad range of tools and equipment, from everyday hand tools and power tools to automotive equipment, generators, welding supplies, tool storage, outdoor equipment, and safety products.
            </p>
            <p>
              With promotions changing throughout the year, there are several opportunities to look for savings. Before completing your next purchase, check CouponsBit for the latest Harbor Freight discount code, coupon offers, vouchers, promo codes, and other available deals.
            </p>
            <p>
              Whether you are upgrading your garage, tackling a DIY project, maintaining your vehicle, or building a professional workshop, comparing current offers before checkout can help you get more from your Harbor Freight shopping budget.
            </p>
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Harbor Freight Discount Codes</h3>
          {[
            { q: "Does Harbor Freight offer discount codes?", a: "Yes. Harbor Freight regularly provides different types of promotional savings, including coupons, product offers, seasonal promotions, clearance opportunities, and other deals. The exact promotions available can change." },
            { q: "Where can I find a Harbor Freight discount code?", a: "You can check CouponsBit for available Harbor Freight discount codes, coupon codes, promo codes, vouchers, and other savings opportunities before shopping." },
            { q: "How do I use a Harbor Freight coupon code?", a: "Add eligible products to your cart, proceed through checkout, enter the applicable code if required, and apply it. Always check that the promotion has been accepted before completing the purchase." },
            { q: "Why isn't my Harbor Freight promo code working?", a: "A promotion may not work because it has expired or because your purchase does not meet its requirements. Some offers may exclude particular products, brands, categories, or purchase methods." },
            { q: "Can I use a Harbor Freight discount code on sale items?", a: "It depends on the specific promotion. Some offers may include selected sale merchandise, while others may have exclusions. Check the terms of the individual offer before applying it." },
            { q: "Does Harbor Freight have clearance sales?", a: "Yes. Harbor Freight offers clearance merchandise as part of its broader savings opportunities. Clearance availability can vary by product and location." },
            { q: "When does Harbor Freight have its biggest sales?", a: "Harbor Freight promotions change throughout the year. Black Friday, Cyber Monday, Father's Day, holiday periods, seasonal transitions, and major home-improvement seasons are useful times to watch for special offers." },
            { q: "Does Harbor Freight sell automotive tools?", a: "Yes. Harbor Freight carries a wide range of automotive tools and equipment, including jacks, stands, diagnostic equipment, mechanics' tools, shop equipment, and other automotive supplies." },
            { q: "Does Harbor Freight sell power tools?", a: "Yes. Its assortment includes power tools for drilling, cutting, grinding, sanding, fastening, and other applications, along with batteries, chargers, and accessories." },
            { q: "Can I find Harbor Freight deals on generators?", a: "Harbor Freight offers generators and related power equipment. Availability, models, and promotions can vary, so check the current product selection and available offers before purchasing." },
            { q: "How can I save more at Harbor Freight?", a: "Start by checking CouponsBit for a Harbor Freight discount code, then compare the available offer with current product promotions, clearance merchandise, seasonal deals, and eligible membership benefits. Reviewing the terms can help you choose the option that provides the best value for your purchase." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Harbor Freight Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Power Tools", "Automotive", "Generators", "Harbor Freight Discount Code", "Tool Storage", "Welding Supplies", "Hand Tools", "Clearance"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Harbor Freight Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">H</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Harbor Freight: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
