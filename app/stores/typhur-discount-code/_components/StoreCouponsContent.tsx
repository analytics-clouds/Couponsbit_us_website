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
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Flame,
  Gift,
  Thermometer,
  Truck,
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
  { name: "Dreame", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/dreame-logo_uqesij.webp", dealText: "Up To 45% OFF", href: "/stores/dreame-discount-code" },
  { name: "Bluetti", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/bluetti-power-logo_osmets.webp", dealText: "Save Up To $200", href: "/stores/bluetti-discount-code" },
  { name: "Beelink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494081/beelink-coupon-code_gephnd.jpg", dealText: "Up to 35% OFF", href: "/stores/beelink-discount-code" },
  { name: "Reolink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp", dealText: "Up to 50% OFF", href: "/stores/reolink-discount-code" },
  { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra", href: "/stores/home-depot-discount-code" },
  { name: "Wayfair", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp", dealText: "Up To 80% OFF", href: "/stores/wayfair-discount-code" },
];

const STORE_URL = "https://typhur.sjv.io/c/4303217/1616910/18771?subId1=1015";

export default function TyphurCouponsContent() {
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
              <span className="text-black font-extrabold">Typhur</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1790146959/typhur-logo_abminz.webp" alt="Typhur" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Typhur Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(6.1k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover the latest Typhur Discount Code offers and verified Typhur promo Code deals. Save up to 40% during the Fall Sale, get the Dome 2 & Sync Gold Dual Bundle with $140 OFF, or save $105 on the Nugget Ice Maker & InstaWhisk Pro Bundle. Compare verified deals and upgrade your kitchen for less.
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
                    { icon: Tag, val: "10", label: "Offers" },
                    { icon: Percent, val: "60+", label: "Deals" },
                    { icon: Users, val: "500K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790146959/typhur-logo_abminz.webp" alt="Typhur Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Typhur Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "UP TO 40%", title: "Typhur Discount Code – Fall Sale Save Up to 40%", desc: "Save up to 40% on selected Typhur fall favorites for cozy family meals.", bullets: ["Explore Typhur culinary appliances powered by innovative Typhur technology for convenient home cooking.", "Check for a Typhur discount code or Typhur coupon code to unlock additional savings where eligible."] },
                  { label: "SAVE", value: "$140 OFF", title: "Typhur Discount Code – Dome 2 & Sync Gold Dual Bundle Save $140", desc: "Get the Dome 2 & Sync Gold Dual Bundle for $459.98, reduced from $599.98.", bullets: ["Save $140 with the bundle featuring the Typhur Dome 2 Air Fryer and Sync Gold Dual wireless thermometer.", "Compare the Typhur price and explore Typhur culinary solutions for smarter everyday cooking."] },
                  { label: "SAVE", value: "$105 OFF", title: "Typhur Discount Code – Nugget Ice Maker & InstaWhisk Pro Save $105", desc: "Get the Nugget Ice Maker & InstaWhisk Pro bundle for $199.99, down from $304.99.", bullets: ["Save $105 and enjoy nugget ice in just 6 minutes, with up to 35 lbs of ice in 24 hours.", "Check the Typhur cost and look for a Typhur coupon code before purchasing when applicable."] },
                  { label: "SAVE", value: "$80 OFF", title: "Typhur Discount Code – Fast Nugget Ice Maker Wi-Fi Save $80", desc: "Get the Typhur Fast Nugget Ice Maker with Wi-Fi for $199, reduced from $279.", bullets: ["Save $80 and enjoy fresh ice anytime with convenient Wi-Fi functionality.", "Explore Typhur technology and compare the Typhur price with other kitchen appliances."] },
                  { label: "SAVE", value: "$70 OFF", title: "Typhur Sync Gold Dual Premium Gift Edition – Save $70", desc: "Get the Sync Gold Dual Premium Gift Edition for $149.99, reduced from $219.99.", bullets: ["Save $70 on this wireless meat thermometer designed for convenient cooking.", "For shoppers researching Typhur culinary products, this is a useful addition to a smart kitchen setup."] },
                  { label: "SAVE", value: "$70 OFF", title: "Typhur Sync Oven – Save $70 on Countertop Cooking", desc: "Get the Typhur Sync Oven for $229.99, reduced from $299.99.", bullets: ["Save $70 on the countertop oven featuring a built-in wireless probe.", "Explore Typhur technology and compare the Typhur culinary price with other countertop cooking appliances."] },
                  { label: "SAVE", value: "$10 OFF", title: "Typhur Grill Brush Bot – Save $10 on Grill Cleaning", desc: "Get the Typhur Grill Brush Bot for $89.99, reduced from $99.99.", bullets: ["Save $10 on an automated solution designed to power through grill grime without bristles or stalling.", "Check the latest Typhur cost and available Typhur coupon code offers before ordering."] },
                  { label: "SAVE", value: "$60 OFF", title: "Typhur Dome 2 Air Fryer – Save $60 on Dual-Heating Cooking", desc: "Get the Typhur Dome 2 Air Fryer for $339.99, reduced from $399.99.", bullets: ["Save $60 on the extra-wide, dual-heating air fryer designed to eliminate the need for flipping.", "Explore Typhur culinary technology and compare the current Typhur price before buying."] },
                  { label: "SAVE", value: "$40 OFF", title: "Typhur Sync Air Fryer – Save $40 on Everyday Cooking", desc: "Get the Typhur Sync Air Fryer for $159.99, reduced from $199.99.", bullets: ["Save $40 on this convenient air fryer for everyday meals.", "If you're comparing Typhur sous vide and air-frying options, explore the available Typhur technology and product range."] },
                  { label: "SAVE", value: "$17 OFF", title: "Typhur InstaWhisk Pro – Save $17 on Coffee Preparation", desc: "Get the Typhur InstaWhisk Pro for $22.99, reduced from $39.99.", bullets: ["Save $17 and bring convenient coffee-shop-style preparation into your home.", "Explore Typhur culinary products and compare the Typhur culinary price across the range."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Typhur: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Typhur Robotics?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Typhur Robotics is a home robotics company focused on the kitchen. Its approach combines cooking science, connected technology, sensing, and precision to create products that help home cooks achieve more consistent results. The company's longer-term vision is kitchen autonomy, while its current product range focuses on practical cooking technology that shoppers can use today.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its U.S. collection includes products such as the Typhur Dome 2, Sous Vide Station, Sync series wireless cooking thermometers, InstaProbe instant-read thermometers, and other kitchen accessories and tools.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Typhur is therefore not simply another kitchen-appliance brand. Its products are built around helping cooks monitor temperature, control cooking more precisely, and simplify parts of the cooking process.

                  </p>
                 
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Flame, name: "Air Fryers", count: "12+", color: "text-blue-500", href: "/categories/home" },
                        { icon: Thermometer, name: "Smart Thermometers", count: "8+", color: "text-purple-500", href: "/categories/home" },
                        { icon: Gift, name: "Cooking Accessories", count: "10+", color: "text-pink-500", href: "/categories/home" },
                        { icon: Truck, name: "Free Shipping", count: "20+", color: "text-teal-500", href: "/categories/home" },
                        { icon: Search, name: "New Arrivals", count: "6+", color: "text-orange-500", href: "/categories/home" },
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
                  <h3 className="text-black font-black text-lg mb-6">
                    Why Check CouponsBit Before Buying?
                  </h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Typhur products are designed for shoppers who care about cooking precision, smart functionality, and well-engineered kitchen tools. When you have already decided which product fits your needs, there is little reason to skip checking for a current offer.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Visit CouponsBit to look for a Typhur discount code, coupon, promo code, or deal, then compare it with the promotion available directly on Typhur. Always review the terms before applying a code, especially when the product is already included in a bundle or limited-time sale.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Typhur also offers a 30-day money-back guarantee and a limited warranty on eligible products, with extended coverage available for qualifying products when registered within the required period.

                  </p>
                 
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
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
          Typhur Robotics Discount Code, Promo Code & Deals
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
        ["Fall Sale Offer", "Up To 40% OFF", "All Users", "Save up to 40% on selected fall favorite culinary appliances", "Typhur Culinary Range"],
        ["Dome 2 & Sync Gold Dual Bundle", "Save $140 ($459.98)", "All Users", "Reduced from $599.98; includes Dome 2 Air Fryer & Sync Gold Dual probe", "Kitchen Appliances Bundle"],
        ["Nugget Ice Maker & InstaWhisk Pro", "Save $105 ($199.99)", "All Users", "Reduced from $304.99; ice in 6 minutes, up to 35 lbs daily production", "Ice Maker & Frother Bundle"],
        ["Fast Nugget Ice Maker Wi-Fi", "Save $80 ($199)", "All Users", "Reduced from $279 regular price; smart Wi-Fi enabled control", "Nugget Ice Makers"],
        ["Sync Gold Dual Premium Gift Edition", "Save $70 ($149.99)", "All Users", "Reduced from $219.99 regular price; wireless meat thermometer setup", "Meat Thermometers"],
        ["Typhur Sync Oven", "Save $70 ($229.99)", "All Users", "Reduced from $299.99; countertop oven with built-in wireless probe", "Countertop Ovens"],
        ["Typhur Grill Brush Bot", "Save $10 ($89.99)", "All Users", "Reduced from $99.99; automated bristle-free grill cleaner", "Grill Accessories"],
        ["Typhur Dome 2 Air Fryer", "Save $60 ($339.99)", "All Users", "Reduced from $399.99; extra-wide, dual-heating air fryer requiring no flipping", "Air Fryers"],
        ["Typhur Sync Air Fryer", "Save $40 ($159.99)", "All Users", "Reduced from $199.99 regular price; convenient smart air fryer", "Air Fryers"],
        ["Typhur InstaWhisk Pro", "Save $17 ($22.99)", "All Users", "Reduced from $39.99 regular price; coffee-shop style milk frothing tool", "Coffee Accessories"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 9 && "border-b-0")}>
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

        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            What if your kitchen could become a little smarter without making cooking feel complicated? That is the idea behind Typhur Robotics, a technology-driven brand focused on bringing precision, automation, and intelligent tools into the home kitchen. From advanced cooking appliances to temperature-control devices and smart kitchen tools, Typhur is building an ecosystem designed around more consistent cooking and less guesswork.
          </p>
          <p>
            If you are planning to shop for Typhur products, checking CouponsBit for a current Typhur discount code can be a useful step before checkout. You may also find Typhur promo codes, limited-time deals, product offers, or other promotions that can make a particular purchase more appealing.
          </p>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Find a Typhur Discount Code on CouponsBit
              </h3>
              <p>
                Before ordering from Typhur, check CouponsBit for the latest Typhur discount code, promo code, and available deals. This is particularly useful when you already have a specific product in mind and want to see whether a promotional offer applies to it.
              </p>
              <p>
                It is also worth comparing a coupon with Typhur's direct promotions. The brand regularly runs limited-time campaigns, and its current U.S. sale pages can include product-specific discounts. Typhur notes that discounts and promo codes generally cannot be combined unless the promotion specifically says otherwise.
              </p>
              <p>
                That means the best approach is simple: identify the product you want, check its current offer, and then see whether an eligible Typhur promo code provides another option.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Shop Typhur Kitchen Technology
              </h3>
              <p>Typhur's product range covers several areas of modern cooking.</p>
              <p>
                The Dome 2 is designed for countertop cooking and air frying, while the Sous Vide Station focuses on controlled sous vide cooking. The Sync family provides wireless temperature monitoring, while InstaProbe products are designed for quick temperature readings.
              </p>
              <p>
                Typhur also offers products such as the Grill Brush Bot, InstaWhisk, ice-maker cleaning products, replacement accessories, and product bundles.
              </p>
              <p>
                For shoppers, this means there is room to build a Typhur setup around a specific cooking style rather than buying a single appliance simply because it is on sale.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Typhur Deals for Home Cooks
              </h3>
              <p>
                Typhur deals can be particularly useful when you are comparing premium kitchen equipment. Instead of looking only for a generic coupon, check whether the product itself is already part of a current promotion.
              </p>
              <p>
                The brand's U.S. site has recently featured seasonal sale campaigns, while its promotional terms indicate that some offers may be limited by product availability and U.S. shipping eligibility.
              </p>
              <p>
                This is where CouponsBit can help you quickly check for an available Typhur promo code before making the final purchase.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                How to Use a Typhur Promo Code
              </h3>
              <p>
                Once you find an eligible Typhur promo code, add your chosen product to your cart and proceed through checkout. Enter the code in the designated promotional-code field and confirm that the offer has been applied before completing your order.
              </p>
              <p>
                If the code does not work, check whether the product is excluded, the promotion has expired, or another offer is already being applied. Typhur's promotional terms can vary between campaigns.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Shop Smarter with Typhur Deals
              </h3>
              <p>
                From precision thermometers and wireless temperature monitoring to advanced countertop cooking appliances, Typhur is bringing technology deeper into the everyday kitchen. Its broader robotics vision is focused on making cooking more intelligent while keeping the experience practical for home cooks.
              </p>
              <p>
                Before you place your next Typhur order, check CouponsBit for the latest Typhur discount code, promo code, coupons, and deals. A quick comparison between the available offer and Typhur's current promotion can help you choose the deal that best fits your purchase.
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
            Typhur Robotics Promo Code FAQs
          </h3>
          {[
            {
              q: "Does Typhur offer promo codes?",
              a: "Yes. Typhur regularly provides discount codes and promo codes for eligible smart kitchen appliances and accessories.",
            },
            {
              q: "Where can I find a Typhur discount code?",
              a: "You can check CouponsBit for available Typhur promotional offers, coupon codes, and deal updates before placing your order.",
            },
            {
              q: "Can I combine multiple Typhur promo codes?",
              a: "Typhur states that promotional codes and discounts generally cannot be combined on a single order unless explicitly stated.",
            },
            {
              q: "Does Typhur offer seasonal sale discounts?",
              a: "Yes. Typhur frequently runs limited-time seasonal and holiday sale campaigns featuring site-wide or product-specific savings.",
            },
            {
              q: "How do I apply a Typhur coupon code at checkout?",
              a: "Add your desired item to the cart, head to checkout, enter the code into the promo field, and verify the discount before completing payment.",
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
            Popular Typhur Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Typhur Promo Code",
              "Dome 2 Air Fryer",
              "Sous Vide Station",
              "Typhur Sync Thermometer",
              "InstaProbe Discount",
              "Grill Brush Bot",
              "Smart Kitchen Deals",
              "Typhur CouponsBit",
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
            Today's Top Typhur Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "TYPHUR DOME 2",
                sub: "Smart Countertop Air Fryer & Oven Savings",
              },
              {
                heading: "SOUS VIDE STATION",
                sub: "Precision All-in-One Sous Vide System",
              },
              {
                heading: "TYPHUR SYNC & INSTAPROBE",
                sub: "Wireless Ultra-Fast Temperature Monitoring",
              },
              {
                heading: "SEASONAL KITCHEN BUNDLES",
                sub: "Save Big on Smart Appliance Bundles",
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
                  href="https://www.typhur.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Typhur: ${deal.heading}`}
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
