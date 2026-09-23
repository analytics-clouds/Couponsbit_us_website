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
  Truck,
  Car,
  Wrench,
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
  { name: "Discount Tire", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/discounttie-logo_lcrloj.webp", dealText: "Up To $130 OFF", href: "/stores/discounttire-discount-code" },
  { name: "Valvoline", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/valvoline-logo_qfdbbq.webp", dealText: "Up To 50% OFF", href: "/stores/valvoline-discount-code" },
  { name: "CarCovers", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/carcover-logo_eufopb.webp", dealText: "Save $30 OFF", href: "/stores/carcovers-discount-code" },
  { name: "Harbor Freight", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/harbor-frigth_m4sdhc.webp", dealText: "Up To 50% OFF", href: "/stores/harbor-freight-discount-code" },
  { name: "Outfitr", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782451456/outfitr-coupon-code_zbvad3.jpg", dealText: "Up to 62% OFF", href: "/stores/outfitr-discount-code" },
  { name: "Budget", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/budget-logo_pv0qhg.webp", dealText: "Up To 35% OFF", href: "/stores/budget-discount-code" },
];

const STORE_URL = "https://www.safelite.com";

export default function SafeliteCouponsContent() {
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
              <span className="text-black font-extrabold">Safelite</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789994531/safelite-logo_szoht4.webp" alt="Safelite" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Safelite Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(7.8k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Safelite promo codes and coupon offers for Sep 2026. Save on windshield replacement, repair, and mobile auto glass service.
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
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "60+", label: "Deals" },
                    { icon: Users, val: "800K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789994531/safelite-logo_szoht4.webp" alt="Safelite Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Safelite Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "NEW", value: "NEW", title: "Safelite – New Customer Offer", desc: "New customers can save on their first Safelite order.", bullets: ["Sign up as a new Safelite customer to unlock this offer.", "Discount applies to your first qualifying order.", "Terms and eligible items may vary."] },
                  { label: "DEAL", value: "REPLACEMENT", title: "Safelite – Windshield Replacement Discount", desc: "Save on eligible windshield replacement service.", bullets: ["Discount applies to eligible windshield replacement.", "Coverage and pricing can vary by vehicle.", "Terms and conditions may apply."] },
                  { label: "DEAL", value: "REPAIR", title: "Safelite – Windshield Repair Offer", desc: "Save on eligible windshield chip and crack repair.", bullets: ["Discount applies to eligible repair service.", "Repair eligibility depends on the size and location of the damage.", "Terms and conditions may apply."] },
                  { label: "DEAL", value: "MOBILE", title: "Safelite – Mobile Service Deal", desc: "Save on eligible mobile auto glass service.", bullets: ["Mobile service brings the repair to your location where available.", "Availability may vary by area.", "Terms and conditions may apply."] },
                  { label: "DEAL", value: "WIPERS", title: "Safelite – Wiper Blade Bundle", desc: "Save on select wiper blades with a service.", bullets: ["Discount applies to select wiper blade products.", "Choose from a range of blade types and sizes.", "Availability may vary by vehicle."] },
                  { label: "SALE", value: "SEASONAL", title: "Safelite – Seasonal Service Sale", desc: "Save on select services during seasonal promotions.", bullets: ["Discount applies during select seasonal periods.", "Availability may vary by service and location.", "Great for handling glass damage at a lower cost."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Safelite: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Safelite?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Safelite AutoGlass is a U.S. auto glass repair and replacement company that specializes in helping drivers deal with damaged vehicle glass. Its services cover windshields, rear windows, side windows, power windows, and advanced safety system recalibration.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Safelite has a nationwide presence and says its services are available to 97% of U.S. drivers across all 50 states. Customers can choose between visiting a Safelite location and using mobile service in most areas.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The company handles both minor windshield damage that may be repairable and larger damage that requires replacement. Safelite also works with many insurance providers and can assist with insurance claims when coverage applies.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    This makes Safelite different from a typical online retailer. Instead of shopping for a physical product, customers are generally booking a service based on their vehicle, the type of damage, their location, and whether insurance covers the work.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Car, name: "Windshield Replacement", count: "15+", color: "text-blue-500", href: "/categories/automotive" },
                        { icon: Wrench, name: "Windshield Repair", count: "12+", color: "text-purple-500", href: "/categories/automotive" },
                        { icon: Truck, name: "Mobile Service", count: "10+", color: "text-pink-500", href: "/categories/automotive" },
                        { icon: Gift, name: "Wiper Blades", count: "6+", color: "text-teal-500", href: "/categories/automotive" },
                        { icon: Search, name: "Service Deals", count: "8+", color: "text-orange-500", href: "/categories/automotive" },
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
    How to Find More Safelite Savings
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      A promo code isn't the only thing to consider when arranging auto glass service.
    </p>
    <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
      <p>
        <strong className="text-black font-black block mb-1">Check insurance coverage first.</strong>
        Your policy may cover some or all of the eligible service depending on your coverage and deductible. Safelite can work with many insurance providers to help process claims.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Compare repair and replacement.</strong>
        If your damage qualifies for repair, fixing the windshield rather than replacing it may be a different and potentially less expensive service option. Safelite recommends repairing suitable small damage early.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Look for current promotions.</strong>
        Safelite maintains a dedicated promotions page, so check for a current Safelite promo code before booking.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check eligibility-based discounts.</strong>
        Military members, AAA members, AARP members, and first responders may have access to designated offers, subject to verification and restrictions.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Consider mobile service.</strong>
        If eligible, mobile service can save you the trip to a shop by bringing the technician to your home, workplace, or another location.
      </p>
    </div>
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
          Safelite Promo Code, Coupon Code & Discount Offers
        </h2>

        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            A small windshield chip can turn into a much bigger problem when you keep driving on it. Whether you are dealing with a cracked windshield, broken side window, damaged rear glass, or a vehicle that needs windshield recalibration, getting the right auto glass service matters. And before you schedule, checking for a Safelite promo code can be a useful way to see whether an eligible offer is available.
          </p>
          <p>
            Safelite AutoGlass provides windshield repair and replacement along with services for side windows, rear glass, power windows, and advanced safety system recalibration. The company offers both in-shop and mobile service, so eligible customers can have a technician come to their home, workplace, or another convenient location.
          </p>
          <p>
            On CouponsBit, you can check for available Safelite offers before booking your service and review the terms to determine whether a particular Safelite coupon code or promotional offer applies to your appointment.
          </p>

          <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Find a Safelite Promo Code
        </h3>
        <p>
          When your vehicle needs auto glass service, checking for a Safelite promo code before scheduling can be worthwhile.
        </p>
        <p>
          Safelite maintains a dedicated promotions page with offers for services such as windshield repair and replacement. Promotional codes can be subject to restrictions, including exclusions for insurance claims, commercial or fleet services, specific service types, or other qualifying conditions.
        </p>
        <p>
          CouponsBit can help you find available Safelite promotions in one place. Before using a code, read the offer details carefully and make sure your appointment qualifies.
        </p>
        <p>
          A promotion designed for windshield replacement, for example, may not apply to a repair appointment. Similarly, a code available for direct-pay customers may not be valid when the service is being processed through an insurance claim.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Safelite Coupons, Deals &amp; Offers
        </h3>
        <p>
          Safelite promotions can vary depending on the service you need. Instead of assuming that every Safelite discount code applies to every appointment, look at the specific conditions attached to the offer.
        </p>
        <p>
          <strong>Windshield Repair Offers:</strong> Windshield repair is generally intended for smaller chips and cracks that meet certain conditions. Safelite says repair may be possible when damage is less than six inches, there are no more than three chips or cracks, and the damage does not interfere with cameras or sensors. If your damage qualifies for repair, check whether a current Safelite promo code is available for that service before scheduling. Repairing suitable damage early can also prevent the issue from developing into a larger windshield problem.
        </p>
        <p>
          <strong>Windshield Replacement Offers:</strong> When a windshield is too severely damaged to repair, replacement may be necessary. Safelite offers windshield replacement for customers with larger or more extensive damage and can handle the service either at a location or through eligible mobile appointments. If you are booking a replacement directly rather than filing through insurance, check CouponsBit for a current Safelite coupon code before completing the appointment.
        </p>
        <p>
          <strong>Advanced Safety System Recalibration:</strong> Modern vehicles can have cameras and sensors connected to the windshield. Replacing the windshield may therefore require recalibration of advanced driver-assistance systems. Safelite provides recalibration services for systems that can include lane-keeping assistance, automatic emergency braking, and forward collision warning. Some current Safelite promotions specifically target replacement appointments that include recalibration, although eligibility and promotional terms can change.
        </p>
        <p>
          <strong>Special-Group Offers:</strong> Safelite also lists discounts for eligible groups such as military members, AAA members, AARP members, and first responders. Eligibility verification may be required, and restrictions apply to these offers. If you qualify for a special offer, compare it with any other available Safelite promo code and choose the promotion that actually applies to your service.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Safelite Windshield Repair
        </h3>
        <p>
          A windshield chip might look minor when it first appears, but factors such as temperature changes, road vibration, and additional impacts can cause damage to spread.
        </p>
        <p>
          Safelite recommends addressing suitable windshield damage early. According to the company, smaller damage can often be repaired instead of requiring an entire windshield replacement.
        </p>
        <p>
          Windshield repair can be particularly useful when:
        </p>
        <p>You have a small chip or crack</p>
        <p>The damage meets Safelite's repair criteria</p>
        <p>The damaged area does not interfere with cameras or sensors</p>
        <p>You want to avoid a full windshield replacement when repair is appropriate</p>
        <p>
          Before booking, check whether a current Safelite promo code is available specifically for windshield repair.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Safelite Windshield Replacement
        </h3>
        <p>
          Some windshield damage cannot be repaired safely or effectively. In those situations, replacement may be the appropriate service.
        </p>
        <p>
          Safelite provides windshield replacement for a range of vehicle makes and models. Its technicians can also address features integrated into modern windshields, including rain sensors and heads-up displays when applicable.
        </p>
        <p>
          If your vehicle uses advanced driver-assistance technology, ask about recalibration as part of the replacement process. Safelite says that in many cases windshield replacement and advanced safety system recalibration can be completed as part of the same appointment.
        </p>
        <p>
          This is another situation where comparing available Safelite deals before scheduling can be useful.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Side Window &amp; Rear Glass Replacement
        </h3>
        <p>
          Windshield damage isn't the only reason drivers may need auto glass service.
        </p>
        <p>
          Safelite also provides replacement services for damaged side windows and rear windows. Broken side glass can leave your vehicle exposed to weather and security concerns, while rear glass can be damaged by accidents, impacts, vandalism, or other incidents.
        </p>
        <p>
          Depending on the vehicle and service area, you may be able to arrange mobile service instead of driving to a shop with damaged glass.
        </p>
        <p>
          Check the current service availability for your vehicle and location before booking.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Power Window Repair
        </h3>
        <p>
          Safelite also provides power window repair services.
        </p>
        <p>
          If a vehicle window stops operating properly because of an issue with the power window motor or related components, a power window service may be appropriate.
        </p>
        <p>
          Because auto glass needs vary significantly between vehicles, your quote and service options can depend on the specific vehicle and problem.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Safelite Mobile Auto Glass Service
        </h3>
        <p>
          One of Safelite's most convenient features is its mobile service.
        </p>
        <p>
          Instead of taking your vehicle to a shop, an eligible Safelite technician can come to your home, workplace, or another convenient location. Safelite says mobile service is available in most areas and covers repair and replacement services.
        </p>
        <p>
          Mobile service can be particularly useful when:
        </p>
        <p>Your windshield is damaged and you don't want to drive unnecessarily</p>
        <p>A side window is broken</p>
        <p>You have a busy workday</p>
        <p>Your vehicle is parked at home</p>
        <p>You prefer having the service completed at a convenient location</p>
        <p>
          Availability depends on the vehicle, location, weather, and service required, so confirm the details when scheduling.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Safelite and Auto Insurance
        </h3>
        <p>
          Before paying out of pocket, it's worth checking whether your auto insurance covers the required glass service.
        </p>
        <p>
          Safelite works with many major insurance companies and can assist customers with the claims process. The company says it works with more than 500 insurance companies nationwide.
        </p>
        <p>
          Your actual out-of-pocket cost depends on your insurance policy, deductible, coverage, location, type of damage, and whether the glass can be repaired or needs to be replaced.
        </p>
        <p>
          This is important when looking for a Safelite discount code. A promotional code may not be valid for an insurance claim, so check the offer conditions before assuming that a coupon can be combined with your coverage.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Safelite for Advanced Driver-Assistance Systems
        </h3>
        <p>
          Many newer vehicles use cameras and sensors connected to the windshield to support advanced safety features.
        </p>
        <p>
          After certain windshield replacements, these systems may require recalibration to make sure the camera and associated technology are correctly aligned.
        </p>
        <p>
          Safelite's recalibration service can support features such as:
        </p>
        <p>Lane keep assist</p>
        <p>Forward collision warning</p>
        <p>Automatic emergency braking</p>
        <p>
          The exact technology depends on the vehicle.
        </p>
        <p>
          When scheduling a replacement, provide accurate vehicle information so Safelite can determine whether recalibration is required.
        </p>
      </div>
    </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                How to Use a Safelite Promo Code
              </h3>
              <p>Using a Safelite promo code is generally straightforward when booking an eligible service.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Find a current Safelite promotion on CouponsBit.</li>
                <li>Read the terms and check the service requirements.</li>
                <li>Visit Safelite and enter your vehicle and service information.</li>
                <li>Get your quote or select the appropriate service.</li>
                <li>Enter the promotional code when prompted.</li>
                <li>Confirm that the discount has been applied.</li>
                <li>Complete your appointment booking.</li>
              </ul>
              <p>
                Safelite's current promotions specify that some codes are valid only when scheduling online and may not apply to insurance claims or commercial/fleet services.
              </p>
              <p>
                If a code does not work, double-check that you have entered it correctly and that your service qualifies.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Why Isn't My Safelite Promo Code Working?
              </h3>
              <p>There are several reasons a Safelite promo code may not apply.</p>
              <p>
                The code could have expired, your service may not meet the promotion's requirements, or the offer could exclude insurance claims, commercial or fleet services, or certain types of work.
              </p>
              <p>
                Safelite also states that multiple promotional discounts cannot be combined on a single order for certain offers.
              </p>
              <p>If you receive an error, check:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Whether the code is still active</li>
                <li>Whether your service qualifies</li>
                <li>Whether the promotion is online-only</li>
                <li>Whether your booking is being processed through insurance</li>
                <li>Whether the code has additional eligibility requirements</li>
                <li>Whether another promotion is already being applied</li>
              </ul>
              <p>
                Safelite recommends checking the code for accuracy, expiration, and eligibility requirements if a promotional code doesn't work.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Why Use CouponsBit for Safelite Offers?
              </h3>
              <p>
                CouponsBit gives you a convenient place to check for available Safelite promotions before scheduling auto glass service.
              </p>
              <p>
                Because Safelite offers several different types of services, not every promotion will apply to every customer. Checking the details of a Safelite coupon code before booking helps you understand what the offer covers and whether your appointment qualifies.
              </p>
              <p>
                Whether you need a small windshield repair, a full replacement, side-window service, rear-glass replacement, or recalibration after windshield replacement, checking available promotions can be a useful part of the booking process.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Book Safelite With a Promo Code
              </h3>
              <p>
                Windshield damage rarely happens at a convenient time. Whether a small chip has appeared after a highway drive or your vehicle needs a complete windshield replacement, getting the right service promptly can help you get back on the road.
              </p>
              <p>
                Before scheduling, check CouponsBit for a current Safelite promo code and read the offer requirements carefully. Then compare the available promotion with your insurance coverage, eligibility-based discounts, and service options.
              </p>
              <p>
                From windshield repair and replacement to mobile service and advanced safety system recalibration, Safelite provides several ways to handle auto glass needs across the U.S. Checking for an eligible offer before you book is simply another useful step in the process.
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
            Safelite Promo Code FAQs
          </h3>
          {[
            {
              q: "Does Safelite have promo codes?",
              a: "Yes. Safelite offers promotional codes for eligible auto glass services. Offers can vary by service and may have restrictions relating to insurance, commercial or fleet services, eligibility, and booking method.",
            },
            {
              q: "Where can I find a Safelite promo code?",
              a: "You can check CouponsBit for available Safelite offers before visiting Safelite to get a quote or schedule service.",
            },
            {
              q: "Can I use a Safelite promo code with insurance?",
              a: "It depends on the promotion. Safelite's current promotional offers commonly specify that the code is not valid on insurance claims, so check the terms of the specific offer before booking.",
            },
            {
              q: "Does Safelite offer mobile service?",
              a: "Yes. Safelite offers mobile auto glass service in most areas, allowing eligible customers to have a technician come to their home, workplace, or another convenient location.",
            },
            {
              q: "Does Safelite repair small windshield chips?",
              a: "Yes. Safelite provides windshield repair for qualifying minor chips and cracks. The company says repair may be possible for damage under six inches, with no more than three chips or cracks, provided the damage does not interfere with cameras or sensors.",
            },
            {
              q: "Does Safelite replace side windows?",
              a: "Yes. Safelite provides side-window replacement along with windshield and rear-window services.",
            },
            {
              q: "Does Safelite replace rear windshields?",
              a: "Yes. Safelite offers back-glass and rear-window replacement services.",
            },
            {
              q: "Does Safelite offer windshield recalibration?",
              a: "Yes. Safelite provides recalibration for advanced safety systems connected to the windshield. Depending on the vehicle, these systems can include lane-keeping assistance, automatic emergency braking, and forward collision warning.",
            },
            {
              q: "Does Safelite offer discounts for military members or first responders?",
              a: "Safelite currently lists discounts for military members, AAA members, AARP members, and first responders, subject to eligibility verification and offer restrictions.",
            },
            {
              q: "How do I know whether I need windshield repair or replacement?",
              a: "The appropriate service depends on the size, location, and severity of the damage, as well as whether the damaged area affects cameras or sensors. Safelite can assess the damage and determine whether repair or replacement is appropriate.",
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
            Popular Safelite Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Safelite Promo Code",
              "Windshield Repair Discount",
              "Mobile Service Offers",
              "Military & AAA Discounts",
              "Windshield Recalibration",
              "Side Window Replacement",
              "Rear Glass Service",
              "Safelite Coupon Code",
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
            Today's Top Safelite Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "WINDSHIELD REPAIR & REPLACEMENT",
                sub: "Save on Professional Auto Glass Service",
              },
              {
                heading: "MOBILE SERVICE CONVENIENCE",
                sub: "Technician Comes to Your Location",
              },
              {
                heading: "SPECIAL MEMBER DISCOUNTS",
                sub: "Savings for AAA, AARP & Military Members",
              },
              {
                heading: "SAFETY SYSTEM RECALIBRATION",
                sub: "Advanced Safety System Camera Recalibration",
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
                  href="https://www.safelite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Shop Safelite: ${deal.heading}`}
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
