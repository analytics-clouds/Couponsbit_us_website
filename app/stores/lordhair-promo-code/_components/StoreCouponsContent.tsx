"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent,
  Users,PlusCircle, Crown, CheckCircle2,
  BadgeCheck,
  ExternalLink,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Scissors,
  Layers,
  Package,
  Sparkles,
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
  { id: "d1", label: "NEW", heading: "Get $40 OFF 1 Custom Hair System", sub: "Latest Deals" },
  { id: "d2", label: "SHOP", heading: "Up to $100 OFF Exclusive Hair Systems", sub: "Featured Picks" },
  { id: "d3", label: "SHOP", heading: "$45 OFF 1 Hair System", sub: "Featured Picks" },
  { id: "d4", label: "TOP", heading: "Save on Hair System Maintenance Collection", sub: "Featured Picks" },
  { id: "d5", label: "BEST", heading: "SuperSkin-V Hair System for $249", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Bamboocool", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp", dealText: "Up to 25% OFF", href: "/stores/bamboocool-discount-code" },
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up to $260", href: "/stores/merachfit-discount-code" },
  { name: "Philips", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/philips-logo_yuwckz.webp", dealText: "Save Up To £120", href: "/stores/philips-discount-code" },
  { name: "Ballboyz", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/ballboyz-coupon-code_rduo3k.jpg", dealText: "Up to 50% OFF", href: "/stores/ballboyz-discount-code" },
  { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/sungait-logo_tfolql.webp", dealText: "Up To 50% OFF", href: "/stores/sungait-discount-code" },
];

const STORE_URL = "https://lordhair.pxf.io/c/4303217/1224094/15134?subId1=1015";

export default function LordhairCouponsContent() {
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
              <span className="text-black font-extrabold">Lordhair</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788248210/lorthair-logo_g84ojx.webp" alt="Lordhair" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Lordhair</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(8.9k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Lordhair promo codes and discount codes for Sep 2026. Save up to $100 on custom hair systems, claim new customer savings, shop maintenance kits and hair treatments, and enjoy discounts on premium men's and women's hair replacement solutions.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "13", label: "Offers" },
                    { icon: Percent, val: "1.2k", label: "Deals" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788248210/lorthair-logo_g84ojx.webp" alt="Lordhair Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Lordhair Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "DEAL", value: "$40 OFF", title: "Lordhair Promo Code – Get $40 OFF 1 Custom Hair System", desc: "Get $40 OFF when you order 1 custom hair system.", bullets: ["Enjoy $90 OFF when you purchase 2 custom hair systems.", "Earn Double Points for Everyone during the promotional period.", "Get a free Refresh travel size with qualifying U.S. orders from September 1–30."] },
                  { label: "SALE", value: "$100 OFF", title: "Lordhair Promo Code – Up to $100 OFF Exclusive Hair Systems", desc: "Save up to $100 OFF on selected exclusive hair systems.", bullets: ["Enjoy special savings during the Lordhair Brand Month promotion.", "Choose from a wide range of custom hair systems designed for a natural look.", "Limited-time offer available while promotional stock lasts."] },
                  { label: "DEAL", value: "$45 OFF", title: "Lordhair Promo Code – $45 OFF 1 Hair System", desc: "Get $45 OFF when you purchase any 1 hair system.", bullets: ["Save $100 OFF when you purchase any 2 hair systems.", "Explore Lordhair best-sellers with built-in antibacterial comfort**.", "Take advantage of these special Brand Month savings."] },
                  { label: "DEAL", value: "$91.92", title: "Lordhair – Save on Hair System Maintenance Collection", desc: "Get the 3R Hair System Maintenance Collection for $91.92.", bullets: ["Regular price is $114.90, offering significant savings.", "Stock up on professional-grade maintenance and styling essentials.", "Collection includes products for maintaining, securing, and styling hair systems."] },
                  { label: "DEAL", value: "$249", title: "Lordhair  – SuperSkin-V Hair System for $249", desc: "Get the SuperSkin-V Hair System for $249.", bullets: ["Features an ultra-thin 0.06mm skin base for a realistic appearance.", "Designed with realistic V-looped hair for a natural-looking finish.", "Offers hassle-free maintenance and a stress-free application."] },
                  { label: "SALE", value: "10% OFF", title: "Lordhair – Ruby Hair Integration System 10% OFF", desc: "Get the Ruby Hair Integration with Remy Human Hair for Women for $269.", bullets: ["Save 10% from the original $299 price.", "Made with Remy human hair for a natural and realistic appearance.", "Designed to provide comfortable hair integration for women."] },
                  { label: "DEAL", value: "$239", title: "Lordhair – UTS Hair System for $239", desc: "Get the UTS Hair System for $239.", bullets: ["Features an ultra-thin 0.03mm base for enhanced realism.", "Lightweight design delivers a natural scalp appearance.", "Subtle V-looped strands create a seamless and realistic finish."] },
                  { label: "DEAL", value: "$49.90", title: "Lordhair – Renewal Deep Moisture Treatment for $49.90", desc: "Get Renewal Deep Moisture Treatment for $49.90.", bullets: ["Designed to provide deep moisture for hair systems.", "Helps improve softness and reduce tangling.", "Ideal for maintaining the look and feel of your hair system."] },
                  { label: "NEW", value: "$30 OFF", title: "Lordhair  – New Customer Offer with $30 OFF", desc: "New customers can get $30 OFF their first hair system.", bullets: ["Receive Free Tape with the promotional offer.", "Get Renewal for $19.90 with the qualifying purchase.", "Offer is available for U.S. customers only."] },
                  { label: "DEAL", value: "$279", title: "Lordhair  – ZyroSen SuperSkin-V Starter Pack for $279", desc: "Get the ZYROSEN SuperSkin-V Starter Pack for $279.", bullets: ["Features an upgraded antimicrobial hair system.", "Includes essential hair system products designed for new users.", "Built for comfort, convenience, and everyday hair system wear."] },
                  { label: "DEAL", value: "$79.90", title: "Lordhair  – 3R Kit for $79.90", desc: "Add the 3R Kit for $79.90 during the Brand Month promotion.", bullets: ["Designed for comprehensive hair system maintenance.", "Helps you reset, renew, and refresh your hair system routine.", "Keep your hair system looking fresh and extend its wearability."] },
                  { label: "DEAL", value: "$329", title: "Lordhair  – French Lace Hair System for $329", desc: "Get the French Lace Hair System for $329.", bullets: ["Made with 100% French lace for softness and breathability.", "Designed to blend seamlessly with your natural hairline.", "Ideal for comfortable wear in **warm and humid climates."] },
                  { label: "NEW", value: "$20 OFF", title: "Lordhair  – Get $20 OFF Your First Hair System", desc: "Get $20 OFF your first hair system.", bullets: ["Explore different bases, densities, hairlines, colors, and styles.", "Choose a hair system designed around your preferred look and comfort.", "A great introductory offer for new Lordhair customers."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[12px] sm:text-[15px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[15px] sm:text-3xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Lordhair: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">Lordhair Deals & Offers</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    A Lordhair promo code isn't the only way to save.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand periodically runs promotional campaigns across its hair systems and accessories. Depending on the campaign, shoppers may find offers involving individual systems, multiple systems, custom orders, maintenance products, or other eligible purchases.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Lordhair's website also features promotional areas such as its Outlet, VIP program, Lordhair Club, and other customer savings opportunities.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Because these promotions change, it's worth checking the current offer before completing your order.

                  </p>
                 
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Scissors, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Layers, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Package, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
    How to Find the Best Lordhair Discount
  </h3>
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 text-justify">
    If you're trying to reduce the overall cost of a hair system, don't immediately focus on one coupon code. Instead, compare the different ways you could save.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "1. Check CouponsBit First",
        sub: "Search CouponsBit for the latest Lordhair promo code, discount code, coupon, and promotional offers."
      },
      {
        icon: ShoppingBag,
        title: "2. Compare the Promotion With Your Product",
        sub: "Some promotions may apply only to hair systems, while others may cover selected products or accessories."
      },
      {
        icon: Layers,
        title: "3. Check Multi-Product Offers",
        sub: "If you're planning to purchase more than one system, check whether Lordhair is running a multi-unit promotion."
      },
      {
        icon: PlusCircle,
        title: "4. Look at Add-On Offers",
        sub: "Lordhair also offers add-on hair systems and other products that may be available at special prices when purchased with an eligible hair system."
      },
      {
        icon: Crown,
        title: "5. Check Membership Benefits",
        sub: "Lordhair provides customer programs such as Lordhair VIP and Lordhair Club. Review the current terms to see whether any benefits apply to your purchase."
      },
      {
        icon: CheckCircle2,
        title: "6. Review the Final Cart",
        sub: "Before completing the order, make sure your promotion has been applied correctly and that the products meet the offer's requirements."
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
          Lordhair Promo Code, Discount Code & Coupon Offers
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
            Custom Hair Systems Deal 💇‍♂️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $40 OFF (1) / $90 OFF (2)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Earn 2X points; U.S. orders get free Refresh travel size (Sept 1–30)
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Custom hair systems
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Exclusive Hair Systems Promo ✨
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to $100 OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Valid during Brand Month; while promotional stock lasts
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Select exclusive hair systems
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Brand Month Hair System Savings 🏷️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $45 OFF (1) / $100 OFF (2)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Special Brand Month discount on best-selling systems
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Lordhair hair systems &amp; best-sellers
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            3R Maintenance Collection 🧴
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $91.92 <span className="text-xs text-gray-400 line-through">$114.90</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Professional-grade kit for securing, maintaining, and styling
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            3R Maintenance Collection
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            SuperSkin-V Hair System 💇‍♂️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $249
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Features an ultra-thin 0.06mm skin base and realistic V-looped hair
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            SuperSkin-V Hair System
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Ruby Hair Integration System 👑
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $269 <span className="text-xs font-normal text-gray-500">(10% OFF)</span>
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Women Shoppers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Original price $299; crafted with 100% Remy human hair
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Ruby Hair Integration for Women
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            UTS Ultra-Thin Hair System 🌿
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $239
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Lightweight 0.03mm base with subtle V-looped strands
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            UTS Hair System
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Renewal Deep Moisture Treatment 💧
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $49.90
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Formulated to improve softness and eliminate tangles
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Renewal Deep Moisture Treatment
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            New Customer Special Offer 🎉
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $30 OFF + Free Tape
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            New U.S. Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Includes Free Tape and Renewal for $19.90 with qualifying purchase
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            First hair system order
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            ZyroSen SuperSkin-V Starter Pack 🚀
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $279
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            New &amp; Existing Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Includes upgraded antimicrobial system and essential start-up products
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            ZYROSEN SuperSkin-V Starter Pack
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            3R Care &amp; Maintenance Kit 🧰
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $79.90
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Brand Month price for resetting and extending wearability
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            3R Kit maintenance bundle
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            French Lace Hair System 🇫🇷
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $329
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            100% French lace design, ideal for warm and humid climates
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            French Lace Hair System
          </td>
        </tr>

        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            First Order Discount 🎁
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Flat $20 OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            First-Time Buyers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Introductory discount applicable across custom bases, densities, and colors
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            First hair system purchase
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
              Finding the right hair replacement system is a personal decision, but getting better value from your purchase doesn't have to be complicated. If you're shopping for a new hair system, toupee, hairpiece, or maintenance supplies, checking for a Lordhair promo code before placing your order can help you make the most of your budget.
            </p>
            <p>
              Lordhair specializes in non-surgical hair replacement solutions for men, offering ready-to-wear and customizable hair systems in different base materials, hair densities, styles, and configurations. Its catalog includes skin, lace, hybrid, and monofilament systems, custom hair systems, men's toupees, hair patches, wigs, and hair system care products. The brand also offers accessories such as tapes, adhesives, removers, shampoos, conditioners, and styling products.
            </p>
            <p>
              Whether you're shopping from the USA, Canada, or UK, CouponsBit can help you check for available Lordhair promotions before you shop. Since offers and eligibility can change, always review the terms of a particular Lordhair discount code before applying it.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a Lordhair Promo Code and Save</h3>
            <p>
              A hair system is more than an ordinary fashion purchase. You may need to consider the base material, hair density, hairstyle, color, attachment method, maintenance requirements, and how the system fits your daily routine.
            </p>
            <p>
              Lordhair offers solutions for different preferences and experience levels, from beginner-friendly systems to highly customized hairpieces. Its catalog also includes products designed for specific areas of hair loss, such as frontal, temple, crown, and side patches.
            </p>
            <p>
              Before choosing a product, compare the available options and then check CouponsBit for a Lordhair promo code that may apply to your purchase.
            </p>
            <p>You may also find other ways to save, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Lordhair coupon codes</li>
              <li>Promotional offers</li>
              <li>Seasonal sales</li>
              <li>Multi-unit offers</li>
              <li>Product-specific promotions</li>
              <li>First-order opportunities</li>
              <li>Subscription savings on selected products</li>
              <li>Add-on deals</li>
              <li>Loyalty and membership benefits</li>
            </ul>
            <p>
              The availability of each promotion depends on the current Lordhair campaign and applicable terms.
            </p>
          </div>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  {/* Main Header & Overview */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Shop Lordhair Hair Systems</h3>
    <p>
      Lordhair's main product range focuses on men's hair replacement systems. The brand offers different construction types so shoppers can choose a system based on their preferred balance of realism, breathability, attachment, durability, maintenance, and lifestyle.
    </p>
    <p>
      Its current catalog includes skin, lace, hybrid, and monofilament hair systems, as well as custom options.
    </p>
    <p>
      Let's look at the main categories you can explore.
    </p>
  </div>

  {/* Skin Hair Systems */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Skin Hair Systems</h3>
    <p>
      Skin hair systems use a thin skin or poly-style base designed to create a close-to-scalp appearance.
    </p>
    <p>
      Lordhair offers multiple skin-based options with different thicknesses and construction approaches. Its catalog includes systems such as SuperSkin-V, UTS, SuperSkin, SuperSkin Premier, and other skin-base designs.
    </p>
    <p>Skin systems can be particularly appealing to shoppers who prioritize:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "A natural-looking scalp appearance",
        "Easy attachment",
        "A low-profile base",
        "Different thickness options",
        "Beginner-friendly maintenance",
        "Shorter or more flexible wear routines"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      The right thickness and construction depend on your experience, attachment preferences, and desired balance between appearance and durability.
    </p>
  </div>

  {/* Lace Hair Systems */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Lace Hair Systems</h3>
    <p>
      Lace hair systems are designed with breathable lace bases and are often considered by people who prioritize airflow and a lightweight feel.
    </p>
    <p>
      Lordhair offers French lace and other lace-based configurations. Its Champion range, for example, is positioned as a breathable option for active lifestyles and warmer environments.
    </p>
    <p>Lace systems can be worth exploring if your priorities include:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Breathability",
        "Lightweight construction",
        "Natural-looking hair movement",
        "Active lifestyles",
        "Warm-weather comfort",
        "A realistic front hairline"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      Because lace and skin systems behave differently, shoppers should compare their attachment and maintenance preferences before choosing one.
    </p>
  </div>

  {/* Hybrid Hair Systems */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Hybrid Hair Systems</h3>
    <p>Can't decide between lace and skin?</p>
    <p>
      A hybrid system combines different base materials to provide characteristics associated with both.
    </p>
    <p>
      Lordhair's Neo hair system is one example, combining a lace front with a skin perimeter. The design is positioned as a versatile option that balances airflow with attachment and security.
    </p>
    <p>Hybrid systems can be a good option for shoppers who want:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "A breathable front",
        "Additional perimeter security",
        "A natural-looking hairline",
        "Versatility for different lifestyles",
        "A balance between comfort and attachment"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      If you're unsure which construction is right for you, Lordhair also provides consultation and educational resources to help customers understand their options.
    </p>
  </div>

  {/* Monofilament Hair Systems */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Monofilament Hair Systems</h3>
    <p>
      Monofilament systems focus on durability and strength while maintaining a natural appearance.
    </p>
    <p>
      Lordhair's monofilament collection includes systems made with human hair and designed for shoppers who want a longer-lasting base construction.
    </p>
    <p>These systems may appeal to users who prioritize:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Durability",
        "Strength",
        "A natural appearance",
        "Long-term use",
        "More robust construction"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      Lordhair currently offers several monofilament options, allowing shoppers to compare different designs and specifications.
    </p>
  </div>

  {/* Custom Hair Systems */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Custom Hair Systems</h3>
    <p>Not everyone wants an off-the-shelf hairpiece.</p>
    <p>
      For shoppers who want more control over their final appearance, Lordhair offers custom hair systems that can be personalized according to individual requirements.
    </p>
    <p>Depending on the product, customization can include details such as:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Base size",
        "Hair color",
        "Hair density",
        "Hair length",
        "Hair type",
        "Hairstyle",
        "Gray hair percentage",
        "Base material"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      This makes custom systems particularly useful for shoppers who want a closer match to their existing appearance.
    </p>
    <p>
      Lordhair's custom collection includes lace, skin, and monofilament options, allowing you to select a construction that suits your preferred wearing experience.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      If you're investing in a customized hair system, take the time to review the specifications carefully before ordering.
    </p>
  </div>

  {/* Lordhair Toupees & Hairpieces for Men */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Lordhair Toupees &amp; Hairpieces for Men</h3>
    <p>
      Lordhair offers a wide selection of men's toupees and hairpieces designed around different patterns and degrees of hair loss.
    </p>
    <p>
      Instead of automatically choosing a full-size hair system, shoppers can explore more targeted solutions depending on where they need coverage.
    </p>
    <p>The catalog includes products such as:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Men's toupees",
        "Frontal hairpieces",
        "Crown hairpieces",
        "Temple patches",
        "Side patches",
        "Hair loss patches",
        "Pre-cut hairpieces",
        "Ready-to-wear systems"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      This makes Lordhair useful for shoppers who need coverage in a particular area rather than a complete transformation.
    </p>
  </div>

  {/* Hair Systems by Hairstyle */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Hair Systems by Hairstyle</h3>
    <p>
      Choosing the base is only one part of finding the right hairpiece. The hairstyle also affects how natural and comfortable the final result looks.
    </p>
    <p>
      Lordhair offers hair systems in a variety of pre-cut hairstyles, allowing shoppers to choose a look without necessarily starting with an entirely blank system.
    </p>
    <p>Available styles include options such as:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Short quiff",
        "Slicked-back styles",
        "Side fades",
        "Low fades",
        "Other contemporary men's hairstyles"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      You can also explore customizable systems if you want more control over the final cut and styling.
    </p>
    <p>
      When choosing a hairstyle, think about your existing hair, preferred styling routine, face shape, and how much maintenance you're comfortable with.
    </p>
  </div>

  {/* Lordhair Premier Hair Systems */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Lordhair Premier Hair Systems</h3>
    <p>
      For shoppers looking for a premium option, Lordhair offers its Premier range.
    </p>
    <p>
      The Premier collection uses 100% human Remy hair, with an emphasis on hair softness, quality, manageability, and refined knotting.
    </p>
    <p>
      The collection includes different base configurations, allowing customers to choose premium hair while still considering their preferred base construction.
    </p>
    <p>Premier systems can be worth exploring if your priorities include:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Premium human hair",
        "Softer hair texture",
        "Easier styling",
        "Refined hairline appearance",
        "High-quality construction",
        "A more luxurious hair system experience"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Lordhair Hair Patches */}
  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Lordhair Hair Patches</h3>
    <p>
      Full coverage isn't always necessary.
    </p>
    <p>
      Lordhair offers smaller hair patches designed to address specific areas of hair loss. These can be particularly useful for people experiencing thinning around the crown, temples, sides, or frontal area.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Crown Hair Patches</h5>
        <p className="text-sm">
          Designed for people experiencing hair loss or thinning around the crown area.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Temple Patches</h5>
        <p className="text-sm">
          Useful for addressing thinning around the temples without covering the entire top of the head.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Side Patches</h5>
        <p className="text-sm">
          Designed to provide targeted coverage around the sides.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Frontal Hairpieces</h5>
        <p className="text-sm">
          These can help address recession or thinning around the front hairline.
        </p>
      </div>
    </div>

    <p>
      Targeted hairpieces can provide an alternative for shoppers who don't need a complete hair system.
    </p>
  </div>

  {/* Lordhair Hair System Accessories */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Lordhair Hair System Accessories</h3>
    <p>
      Buying a hair system is only the beginning. Proper maintenance and attachment can play an important role in keeping the system looking and feeling its best.
    </p>
    <p>
      Lordhair has a dedicated accessories range covering many of the supplies needed for hair system care. Current categories include tapes and contour strips, glue and removers, shampoos and conditioners, and hair system maintenance products.
    </p>
    <p>You can explore accessories such as:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Hair system tapes",
        "Contour tape strips",
        "Adhesives",
        "Glue",
        "Adhesive removers",
        "Scalp care products",
        "Hair system shampoos",
        "Conditioners",
        "Leave-in sprays",
        "Maintenance treatments",
        "Styling tools"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      Adding the right maintenance products to your order can make your hair system routine much easier.
    </p>
  </div>

  {/* Lordhair 3R Hair System Maintenance */}
  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Lordhair 3R Hair System Maintenance</h3>
    <p>
      Lordhair has developed a dedicated 3R maintenance approach: Reset, Renewal, and Refresh.
    </p>
    <p>
      The system is designed around three stages of hair system care:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Reset</h5>
        <p className="text-sm">
          Focuses on cleansing the hair system and scalp while removing residue and buildup.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Renewal</h5>
        <p className="text-sm">
          Focuses on moisture and conditioning to help address dryness, tangling, and shedding.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h5 className="font-bold text-gray-900">Refresh</h5>
        <p className="text-sm">
          A leave-in protection step designed for ongoing care.
        </p>
      </div>
    </div>

    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      Lordhair currently offers individual 3R products as well as a maintenance collection in its U.S. store. Some maintenance products are region-specific, so shoppers outside the USA should check availability before ordering.
    </p>
  </div>

  {/* Lordhair Shampoos & Conditioners */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Lordhair Shampoos &amp; Conditioners</h3>
    <p>
      Hair systems don't receive natural oils from the scalp in the same way as growing hair, which means their maintenance requirements can differ from natural hair.
    </p>
    <p>
      Lordhair offers specialized cleansing and conditioning products intended for hair systems.
    </p>
    <p>These products can be useful for maintaining:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Hair softness",
        "Manageability",
        "Moisture",
        "Cleanliness",
        "Smoothness",
        "Overall appearance"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      When shopping for hair system care, make sure the product is appropriate for your particular base and hair type.
    </p>
  </div>

  {/* Lordhair Adhesives, Tapes & Removers */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Lordhair Adhesives, Tapes &amp; Removers</h3>
    <p>
      Attachment products are another important part of the hair system experience.
    </p>
    <p>
      Lordhair offers both adhesive and tape-based products, giving users options depending on their preferred attachment method.
    </p>
    <p>Its accessory range includes:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
      {[
        "Double-sided adhesive tapes",
        "Contour strips",
        "Hair system glue",
        "Adhesive removers",
        "Scalp preparation products"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      Choosing between tape and liquid adhesive can depend on factors such as the base material, desired hold, application method, lifestyle, and personal preference.
    </p>
  </div>

  {/* Truncation Gradient Overlay */}
  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          {/* How-To Steps Box */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Lordhair Promo Code</h3>
            <div className="space-y-6">
              {[
                { title: "Step 1: Find Your Offer", text: "Visit CouponsBit and check the available Lordhair promotions." },
                { title: "Step 2: Choose the Right Code", text: "Select a promotion that matches the product you're planning to purchase." },
                { title: "Step 3: Read the Terms", text: "Check the expiration date, product restrictions, country eligibility, and other requirements." },
                { title: "Step 4: Copy the Code", text: "Copy the Lordhair promo code provided with the offer." },
                { title: "Step 5: Shop Lordhair", text: "Browse the available hair systems, toupees, hairpieces, accessories, or maintenance products." },
                { title: "Step 6: Add Your Products", text: "Select the appropriate size, color, density, base, hairstyle, or customization options where applicable." },
                { title: "Step 7: Apply the Code", text: "Enter the promotional code during checkout in the applicable coupon or promotional field." },
                { title: "Step 8: Confirm Your Savings", text: "Before paying, check that the expected discount or promotion has been applied successfully." }
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
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shopping Lordhair in the USA, Canada & UK</h3>
            <p>
              Lordhair serves customers internationally, and shoppers in the USA, Canada, and UK should pay attention to regional availability when ordering.
            </p>
            <p>
              The website supports multiple currencies, including USD, CAD, and GBP, allowing shoppers in these markets to select a relevant currency while browsing.
            </p>
            <p>
              However, specific products, maintenance items, promotional campaigns, shipping conditions, and other terms can vary by location.
            </p>
            <p>
              For example, some of Lordhair's maintenance products are currently listed as U.S.-only, so shoppers in Canada and the UK should check the product page for regional availability before adding an item to their cart.
            </p>
            <p>
              When looking for a Lordhair promo code, always make sure the promotion applies to your market.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Choose the Right Lordhair Hair System</h3>
            <p>With so many different systems available, choosing one can feel overwhelming, particularly if you're buying your first hairpiece.</p>
            <p>Start by identifying where you need coverage. If you need coverage across the top of your head, a full hair system may be appropriate. If the thinning is concentrated around the temples or crown, a smaller patch may provide a more targeted solution.</p>
            <p>Next, consider the base material:</p>
            <p><strong>Choose Skin if:</strong> You prioritize a close-to-scalp appearance and straightforward attachment.</p>
            <p><strong>Choose Lace if:</strong> Breathability and airflow are particularly important to you.</p>
            <p><strong>Choose Hybrid if:</strong> You want a combination of lace breathability and skin-based security.</p>
            <p><strong>Choose Monofilament if:</strong> Durability and a stronger base construction are your priorities.</p>
            <p><strong>Choose Custom if:</strong> You want greater control over size, density, color, length, hairstyle, and other details.</p>
            <p>There's no single best hair system for everyone. Your lifestyle, experience level, styling preferences, and desired maintenance routine should all influence your decision.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Shop Lordhair?</h3>
            <p>Lordhair has built its product range around non-surgical hair replacement for men, offering both ready-to-wear and customizable systems. Some of the reasons shoppers explore the brand include:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Wide product selection:</strong> Choose from different base materials, styles, densities, and coverage options.</li>
              <li><strong>Customization:</strong> Custom systems allow you to personalize important details instead of relying entirely on a standard configuration.</li>
              <li><strong>Targeted solutions:</strong> Hair patches and smaller hairpieces provide options for localized thinning.</li>
              <li><strong>Maintenance ecosystem:</strong> Lordhair sells tapes, adhesives, removers, shampoos, conditioners, and other care products alongside its hair systems.</li>
              <li><strong>Different experience levels:</strong> The catalog includes options aimed at beginners as well as experienced hair system wearers.</li>
              <li><strong>International shopping:</strong> Lordhair serves customers across multiple markets, including the USA, Canada, and UK.</li>
            </ul>
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Lordhair Promo Codes</h3>
          {[
            { q: "Where can I find a Lordhair promo code?", a: "You can check CouponsBit for available Lordhair promo codes, coupon codes, discount offers, and other promotions before shopping." },
            { q: "What is a Lordhair promo code?", a: "A Lordhair promo code is a promotional code that can provide a discount or other promotional benefit when used on an eligible purchase. The exact conditions depend on the offer." },
            { q: "Does Lordhair offer discount codes?", a: "Lordhair periodically provides promotional offers and coupon opportunities. Availability can change, so check the latest offers before placing your order." },
            { q: "Can I use a Lordhair coupon code on every product?", a: "Not necessarily. Some Lordhair promotions are limited to specific products or categories. The brand also notes that many coupons apply to hair systems and may not be combinable with other promotional discounts." },
            { q: "Does Lordhair sell products for women?", a: "Lordhair's primary catalog focuses on men's hair replacement systems, wigs, toupees, and hairpieces. Its current website is positioned around men's hair systems and hair replacement solutions." },
            { q: "What types of hair systems does Lordhair sell?", a: "Lordhair offers skin, lace, hybrid, and monofilament hair systems, along with custom hair systems and premium Remy hair options." },
            { q: "Can I customize a Lordhair hair system?", a: "Yes. Lordhair's custom hair systems can be personalized according to specifications such as base size, hair density, hair length, color, hair type, and hairstyle." },
            { q: "Does Lordhair sell hair system accessories?", a: "Yes. Its accessories include tapes, adhesives, removers, shampoos, conditioners, scalp-care products, and other maintenance supplies." },
            { q: "What is the Lordhair 3R system?", a: "The 3R approach stands for Reset, Renewal, and Refresh. It is Lordhair's hair system maintenance routine covering cleansing, conditioning/treatment, and ongoing protection." },
            { q: "Does Lordhair ship internationally?", a: "Lordhair states that it ships to more than 100 countries. However, individual products and promotional offers may have regional restrictions, so check the applicable shipping and product information for your location." },
            { q: "Can shoppers in Canada use a Lordhair promo code?", a: "Canadian shoppers can browse Lordhair's international store and select CAD where available. However, individual promotions may have country-specific terms, so check the conditions attached to each Lordhair coupon code." },
            { q: "Can shoppers in the UK use a Lordhair discount code?", a: "UK shoppers can shop Lordhair and select GBP where available. As with any promotion, check the offer's terms to confirm that the discount code is valid for your order and region." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Lordhair Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Skin Systems", "Lace Toupees", "Custom Hairpiece", "Lordhair Promo Code", "Maintenance Supplies", "Remy Hair", "Hair Patches", "Hybrid Systems"].map((tag) => (
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
