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
  BatteryCharging,
  Sun,
  Home as HomeIcon,
  Zap,
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
  { name: "Bluetti", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/bluetti-power-logo_osmets.webp", dealText: "Save Up To $200", href: "/stores/bluetti-discount-code" },
  { name: "Beelink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494081/beelink-coupon-code_gephnd.jpg", dealText: "Up to 35% OFF", href: "/stores/beelink-discount-code" },
  { name: "RingConn", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp", dealText: "Starting From $199", href: "/stores/ringconn-discount-code" },
  { name: "Dreame", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/dreame-logo_uqesij.webp", dealText: "Up To 45% OFF", href: "/stores/dreame-discount-code" },
  { name: "Reolink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp", dealText: "Up to 50% OFF", href: "/stores/reolink-discount-code" },
  { name: "Geekbuying", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/geekbuying-logo_pnkeev.webp", dealText: "Up To 56% OFF", href: "/stores/geekbuying-discount-code" },
];

const STORE_URL = "https://ecoflowtechnologyinc.pxf.io/c/4303217/2780662/31823?subId1=1015";

export default function EcoFlowContent() {
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
              <span className="text-black font-extrabold">EcoFlow</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1790831304/ecoflow_bc7yqs.webp" alt="EcoFlow" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">EcoFlow Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(3,100 Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Unlock bigger savings with the latest EcoFlow Discount Code and EcoFlow Promo Code. Enjoy up to 57% OFF during the Prime Day Fall Sale, receive up to $449 in bonus value, and save 35% on the DELTA 3 Max Plus Smart Extra Battery. Shop verified EcoFlow deals with confidence.
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
                    { icon: Tag, val: "11", label: "Offers" },
                    { icon: Percent, val: "6", label: "Deals" },
                    { icon: Users, val: "40K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790831304/ecoflow_bc7yqs.webp" alt="EcoFlow Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">EcoFlow Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "UP TO", value: "57%", title: "EcoFlow Coupon Code – Up to 57% OFF in the Prime Day Fall Sale", desc: "Grab discounts of up to 57% on chosen EcoFlow power stations and add-ons.", bullets: ["Unlock as much as $449 in bonus value on qualifying orders.", "The sale is live from September 20 till October 5.", "Deals last only until the stock runs out."] },
                  { label: "SAVE", value: "35%", title: "EcoFlow Coupon Code – 35% OFF on DELTA 3 Max Plus Smart Extra Battery", desc: "DELTA 3 Max Plus Smart Extra Battery now starts at $859 (was $1,329).", bullets: ["Cut 35% off the regular price.", "Adds more battery capacity to your existing portable power setup.", "A handy pick for home backup as well as outdoor trips."] },
                  { label: "SAVE", value: "27%", title: "EcoFlow Discount Code – 27% OFF on DELTA Pro Ultra", desc: "EcoFlow DELTA Pro Ultra is now $4,199, reduced from $5,799.", bullets: ["Get 27% off on this complete home backup system.", "Offers 6–90kWh capacity with output reaching 21.6kW.", "Keeps your home powered during outages and emergencies."] },
                  { label: "SAVE", value: "27%", title: "EcoFlow Discount Code – 27% OFF on DELTA Pro 3", desc: "Pick up the EcoFlow DELTA Pro 3 at $2,799.", bullets: ["That's 27% less than its usual $3,699 price.", "Capacity can be scaled from 4kWh up to 48kWh.", "Strong 4kW output to run essential home appliances."] },
                  { label: "SAVE", value: "28%", title: "EcoFlow Promo Code – Get the DELTA 3 Ultra Plus for 28% Less", desc: "DELTA 3 Ultra Plus (3072Wh) available from $1,579, down from $2,199.", bullets: ["Instant 28% price cut at checkout.", "Capacity can be extended to as much as 11kWh.", "3600W output handles heavy-duty appliances easily."] },
                  { label: "SAVE", value: "27%", title: "EcoFlow Promo Code – 27% OFF on DELTA Pro Ultra X Smart Extra Battery", desc: "DELTA Pro Ultra X Smart Extra Battery now begins at $2,399.", bullets: ["Pay 27% less than the original $3,299 price.", "An easy way to boost your home backup storage.", "Works seamlessly with the DELTA Pro Ultra X setup."] },
                  { label: "SAVE", value: "6%", title: "EcoFlow Voucher – Discount on RAPID Pro X Power Bank", desc: "EcoFlow RAPID Pro X Power Bank now $279.99, earlier $299.", bullets: ["A big 27,650mAh power bank at a lower price.", "Supports super-fast 300W charging.", "Handy for trips, office use, and daily device charging."] },
                  { label: "FROM", value: "$7,999", title: "EcoFlow Voucher – Explore the All-New DELTA Pro Ultra X", desc: "The DELTA Pro Ultra X is available from $7,999.", bullets: ["Made to provide steady backup power for the entire home.", "Engineered for large-scale energy storage.", "A strong choice for extended outages and off-grid living."] },
                  { label: "FROM", value: "$399", title: "EcoFlow Offers – NextGen 220W Bifacial Solar Panel Starting $399", desc: "NextGen 220W Bifacial Portable Solar Panel starts at $399.", bullets: ["25% conversion efficiency for quicker solar charging.", "IP68 rating keeps it protected against harsh weather.", "Great for camping trips, RVs, and home backup setups."] },
                  { label: "EXTRA", value: "5%", title: "EcoFlow Offers – 5% OFF on Your First Order", desc: "Sign up for the EcoFlow newsletter and get 5% off your first order.", bullets: ["Be the first to hear about special deals and new launches.", "Valid only for new subscribers.", "Some terms and conditions may be applicable."] },
                  { label: "EARN", value: "UP TO $500", title: "Earn Up to $500 Cash Rewards by Refers Friends", desc: "Earn 5% cash back for every successful purchase made by friends you refer.", bullets: ["Total referral earnings can go as high as $500.", "Send your unique referral link to eligible buyers.", "An easy way to save more on your next EcoFlow order."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop EcoFlow: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is EcoFlow Global?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    EcoFlow is a global energy technology company known for developing portable and home power solutions designed to make reliable electricity more accessible. The brand focuses on products that combine battery storage, portable power, solar charging, and smart energy management.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    EcoFlow's range is built for different use cases. Its portable power stations can provide backup electricity during outages or power electronic devices while travelling and camping. The brand also offers solar panels and other accessories that can work alongside its power stations, giving customers more ways to generate, store, and use energy.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For homeowners, EcoFlow offers larger energy storage and backup solutions designed to support essential appliances and household power requirements. Its product ecosystem also includes smart features that allow users to monitor and manage their energy setup more conveniently.

                  </p>
                 
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: BatteryCharging, name: "Portable Power Stations", count: "30+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: Sun, name: "Solar Generators", count: "20+", color: "text-purple-500", href: "/categories/electronics" },
                        { icon: HomeIcon, name: "Home Backup Systems", count: "15+", color: "text-pink-500", href: "/categories/electronics" },
                        { icon: Zap, name: "Solar Panels", count: "15+", color: "text-teal-500", href: "/categories/electronics" },
                        { icon: Percent, name: "Promo Offers", count: "10+", color: "text-orange-500", href: "/categories/electronics" },
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
    How to Use an EcoFlow Global Discount Code
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Using an EcoFlow Global coupon code is generally straightforward. Once you have found a suitable offer on CouponsBit, follow these steps:
    </p>
    <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
      <p>
        <strong className="text-black font-black block mb-1">Choose an offer:</strong>
        Browse the available EcoFlow Global coupons and select a deal that matches your purchase.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Copy the code:</strong>
        If the promotion requires a code, copy it from CouponsBit.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Visit EcoFlow Global:</strong>
        Continue to the EcoFlow website and select the products you want to purchase.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Add your products:</strong>
        Add eligible items to your shopping cart and proceed toward checkout.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Apply the code:</strong>
        Look for the promotional or discount-code field and enter your copied code.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check your savings:</strong>
        Confirm that the discount has been applied before completing your order.
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      If a code doesn't work, review its terms and conditions. The offer may have expired, may apply only to certain products, or may require a minimum purchase.
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
          EcoFlow Global Discount Code, Deals & Offers
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
        ["EcoFlow Prime Day Fall Sale", "Up to 57% OFF", "All Users", "Unlock up to $449 bonus value, valid Sept 20 - Oct 5 while stock lasts", "Power Stations & Add-ons"],
        ["DELTA 3 Max Plus Smart Extra Battery", "35% OFF ($859)", "All Users", "Reduced from $1,329 original price, ideal for home backup & outdoor trips", "Smart Extra Battery"],
        ["EcoFlow DELTA Pro Ultra", "27% OFF ($4,199)", "All Users", "Reduced from $5,799, 6-90kWh capacity with 21.6kW output", "Home Backup System"],
        ["EcoFlow DELTA Pro 3", "27% OFF ($2,799)", "All Users", "Reduced from $3,699, scalable 4kWh to 48kWh capacity with 4kW output", "DELTA Pro 3 System"],
        ["DELTA 3 Ultra Plus (3072Wh)", "28% OFF ($1,579)", "All Users", "Reduced from $2,199, expandable up to 11kWh with 3600W output", "DELTA 3 Ultra Plus"],
        ["DELTA Pro Ultra X Smart Extra Battery", "27% OFF ($2,399)", "All Users", "Reduced from $3,299, works seamlessly with DELTA Pro Ultra X setup", "Smart Extra Battery"],
        ["RAPID Pro X Power Bank", "6% OFF ($279.99)", "All Users", "Reduced from $299, 27,650mAh capacity with 300W super-fast charging", "Power Bank"],
        ["All-New DELTA Pro Ultra X", "From $7,999", "All Users", "Engineered for large-scale energy storage and steady whole-home backup", "DELTA Pro Ultra X"],
        ["NextGen 220W Bifacial Solar Panel", "From $399", "All Users", "25% conversion efficiency, IP68 weather protection for camping/RVs", "Bifacial Solar Panel"],
        ["First Order Newsletter Offer", "Flat 5% OFF", "New Subscribers", "Sign up for newsletter to receive 5% off your first order", "First Orders"],
        ["Referral Rewards Program", "Earn Up to $500", "All Users", "Earn 5% cash back per successful friend referral up to $500 total", "Qualifying Referrals"]
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
            Looking for an EcoFlow Global discount code to save on portable power solutions, solar products, or backup batteries? CouponsBit brings together the latest EcoFlow Global coupons, promotional offers, and deals in one place, helping you check available savings before completing your purchase. Whether you need reliable power for home backup, outdoor adventures, travel, or everyday energy needs, checking CouponsBit first can help you make a smarter purchase.
          </p>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Why Check CouponsBit Before Shopping at EcoFlow Global?
              </h3>
              <p>
                Searching for a coupon immediately before checkout can be an easy way to avoid missing an available promotion. CouponsBit makes this process simpler by bringing discount opportunities together so shoppers can compare available offers before making a purchase.
              </p>
              <p>
                Instead of paying the listed price without checking, you can take a few moments to look for an EcoFlow Global discount code, promotional offer, or active deal. This is especially useful when purchasing higher-value products such as portable power stations, solar generators, or home backup systems.
              </p>
              <p>
                CouponsBit also gives shoppers a convenient starting point for discovering savings across different brands and shopping categories. If you're already planning an EcoFlow purchase, checking the latest coupon options can become part of your normal checkout routine.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Shop EcoFlow Global and Save More
              </h3>
              <p>
                EcoFlow Global offers energy solutions for a wide range of needs, from portable power for outdoor activities to backup energy for homes and larger power requirements. With products spanning portable power stations, solar charging solutions, batteries, and accessories, shoppers can choose a setup based on how and where they need power.
              </p>
              <p>
                Before placing your order, head to CouponsBit and check the latest EcoFlow Global discount code and available offers. Compare the promotions, read the applicable terms, and use the offer that provides the best value for your purchase.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12 py-8 px-4 sm:px-6">

  {/* Hero / Header Section */}
  <section className="text-center space-y-4 max-w-3xl mx-auto">
    <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold text-[#056bfa] bg-[#056bfa]/10">
      EcoFlow Energy Guide
    </Badge>
    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
      Find an EcoFlow Global Discount Code on CouponsBit
    </h1>
    <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-left sm:text-center">
      <p>
        Buying a portable power station or home energy system can be a significant investment, so finding an EcoFlow Global discount code before checkout can make a noticeable difference. CouponsBit helps shoppers discover available coupon codes and promotions without having to search across multiple websites.
      </p>
      <p>
        Before purchasing, visit the EcoFlow Global page on CouponsBit and check the latest available offers. Depending on the promotion, you may find a discount code that can be entered during checkout or an offer that applies automatically when you meet the required conditions.
      </p>
      <p>
        It's worth checking the terms of each offer before using it. Some EcoFlow Global promotions may apply only to selected products, specific categories, minimum order values, or particular shopping periods.
      </p>
    </div>
  </section>

  {/* EcoFlow Global Deals and Offers */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <Tag className="w-6 h-6" /> EcoFlow Global Deals and Offers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          A discount code isn't the only way to save when shopping with EcoFlow Global. The brand may also run seasonal promotions, product-specific deals, bundle offers, and other limited-time campaigns.
        </p>
        <p>
          These offers can be particularly useful when you're comparing different power stations, solar generators, batteries, or accessories. A product promotion combined with an eligible coupon can potentially provide greater value than purchasing at the standard price.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-gray-900">On CouponsBit, you can check for:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "EcoFlow Global discount codes",
              "EcoFlow promotional codes",
              "EcoFlow coupons",
              "EcoFlow deals and offers",
              "Seasonal and limited-time promotions",
              "Product-specific discounts",
              "Bundle and shopping offers"
            ].map((item, index) => (
              <Badge key={index} variant="outline" className="bg-slate-50 border-slate-300 text-slate-700 py-1">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <p>
          Since promotions can change, checking the CouponsBit page before you shop can help you identify the latest available saving opportunity.
        </p>
      </CardContent>
    </Card>
  </section>

</div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Save on Your Next EcoFlow Purchase With CouponsBit
              </h3>
              <p>
                Whether you're buying a portable power station for your next adventure, preparing your home for a power outage, or exploring solar-powered energy solutions, don't forget to check for savings first. Visit CouponsBit to find an EcoFlow Global discount code, explore current offers, and make the most of your shopping budget.
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
            Frequently Asked Questions About EcoFlow Global Discount Codes
          </h3>
          {[
            {
              q: "How can I find an EcoFlow Global discount code?",
              a: "You can check the EcoFlow Global page on CouponsBit for currently available discount codes, coupons, and promotional offers. Always review the offer details before applying a code.",
            },
            {
              q: "Can I use an EcoFlow Global discount code on every product?",
              a: "Not necessarily. Some promotional codes may have product exclusions or other conditions. Check the specific terms of the offer to determine whether your selected products qualify.",
            },
            {
              q: "Why isn't my EcoFlow Global coupon code working?",
              a: "A coupon may not work if it has expired, has usage restrictions, applies only to selected products, or requires a minimum purchase. Check the promotion's terms before trying another offer.",
            },
            {
              q: "Does EcoFlow Global offer deals without coupon codes?",
              a: "Yes, promotional savings don't always require a code. EcoFlow Global may offer product discounts, bundles, seasonal promotions, or other deals where the reduced price is applied automatically.",
            },
            {
              q: "Where should I check before buying from EcoFlow Global?",
              a: "Check CouponsBit before completing your purchase to look for the latest EcoFlow Global discount codes, coupons, and deals. Comparing available offers can help you identify a suitable saving opportunity before checkout.",
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
            Popular EcoFlow Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "EcoFlow Discount Code",
              "Portable Power Stations",
              "Solar Generator Deals",
              "Home Backup Battery",
              "EcoFlow DELTA Series",
              "RIVER Series Coupons",
              "CouponsBit EcoFlow",
              "Solar Panel Bundles",
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
            Today's Top EcoFlow Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "PORTABLE POWER STATIONS",
                sub: "Save Big On DELTA & RIVER Series Portable Power",
              },
              {
                heading: "SOLAR GENERATOR BUNDLES",
                sub: "Discounted Power Station & Solar Panel Packages",
              },
              {
                heading: "WHOLE-HOME BACKUP",
                sub: "Promotions On Home Battery Ecosystems",
              },
              {
                heading: "LIMITED-TIME DEALS",
                sub: "Special Savings On Portable Energy Accessories",
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
                  href="https://ecoflow.com"
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
