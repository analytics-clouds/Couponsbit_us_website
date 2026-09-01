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
  ChevronDown,
  Shirt,
  Sparkles,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Baby,
  Home,
  Gem,
  Footprints,
  Watch,
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
  { id: "d1", label: "UP TO", heading: "Macy's Promo Code – Big Home Event | Up to 60% OFF", sub: "Save 15%-60% OFF during Macy's Big Home Event" },
  { id: "d2", label: "SAVE", heading: "Macy's Promo Code – Star Deals Week | Save 40%-60%", sub: "Enjoy 40%-60% OFF during Macy's Star Deals Week" },
  { id: "d3", label: "UP TO", heading: "Macy's Promo Code – Up to 50% OFF Sale Essentials", sub: "Save up to 50% OFF on selected sale essentials" },
  { id: "d4", label: "EXTRA", heading: "Macy's – Friends & Family Sale | Extra 10%-30% OFF", sub: "Get extra 10%-30% OFF on selected departments" },
  { id: "d5", label: "UP TO", heading: "Macy's – Diamond Sale | Up to 75% OFF Jewelry", sub: "Save up to 75% OFF during the Diamond Sale" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/vooglam-logo_qe8mis.webp", dealText: "Eyeglasses From $65", href: "/stores/vooglam-discount-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/sungait-logo_tfolql.webp", dealText: "Up To 50% OFF", href: "/stores/sungait-discount-code" },
  { name: "Spirit Halloween", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/spirti-logo_x4nbor.webp", dealText: "Up To 75% OFF", href: "/stores/spirit-halloween-discount-code" },
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Wish.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/wish-logo_n1dypa.webp", dealText: "Up To 60% OFF", href: "/stores/wish-discount-code" },
];

const STORE_URL = "https://www.macys.com/";

export default function MacysCouponsContent() {
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
              <span className="text-black font-extrabold">Macy's</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp" alt="Macy's" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Macy's</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(41.2k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Macys promo codes, discount codes, and sale deals for Sep 2026. Save up to 75% on jewelry, 60% on home and bedding, 40% on shoes, 40%-60% during Star Deals Week, plus $20 OFF eligible orders of $100 or more.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "8", label: "Offers" },
                    { icon: Percent, val: "2.1k", label: "Deals" },
                    { icon: Users, val: "8M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787034386/130_u6ubtm.webp" alt="Macy's Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Macy's Promo Codes & Offers</h2>
        </div>

        {[
          { label: "UP TO", value: "60%", title: "Macy's Promo Code – Big Home Event | Up to 60% OFF", desc: "Save 15%-60% OFF during Macy's Big Home Event", bullets: ["Shop bestsellers, top brands and home essentials at special prices", "Find furniture, bedding, décor and more to refresh your home", "Hurry, the Big Home Event ends tomorrow", "Macy's Promo Code, Home Sale, Home Decor Deals, USA"] },
          { label: "SAVE", value: "40-60%", title: "Macy's Promo Code – Star Deals Week | Save 40%-60%", desc: "Enjoy 40%-60% OFF during Macy's Star Deals Week", bullets: ["Discover six days of limited-time savings across multiple categories", "Shop daily Flash Sales for extra discounts throughout the event", "Valid through August 31, 2026, with new deals available during the sale", "Macy's Promo Code, Star Deals, Flash Sale, Macy's Deals, USA"] },
          { label: "UP TO", value: "50%", title: "Macy's Promo Code – Up to 50% OFF Sale Essentials", desc: "Save up to 50% OFF on selected sale essentials", bullets: ["Shop a wide range of products at special reduced prices", "No coupon code is required to claim the offer", "No minimum order value is required for eligible items", "Macy's Promo Code, Sale Essentials, Macy's Discount, USA"] },
          { label: "EXTRA", value: "10-30%", title: "Macy's – Friends & Family Sale | Extra 10%-30% OFF", desc: "Get extra 10%-30% OFF on selected departments", bullets: ["Save 30% OFF on eligible regular-price and sale items", "Enjoy 15% OFF on selected beauty and fragrance products", "Earn $20 Star Money for every $100 spent on qualifying purchases", "Macy's Friends & Family Sale, Beauty Sale, Star Money, Macy's Deals, USA"] },
          { label: "UP TO", value: "75%", title: "Macy's – Diamond Sale | Up to 75% OFF Jewelry", desc: "Save up to 75% OFF during the Diamond Sale", bullets: ["Find sparkling jewelry deals with savings of 55%-75%", "Explore jewelry styles for gifting, special occasions and everyday wear", "Shop across multiple jewelry categories at special sale prices", "Macy's Jewelry Sale, Diamond Sale, Jewelry Deals, USA"] },
          { label: "UP TO", value: "40%", title: "Macy's – Great Shoe Sale | Up to 40% OFF", desc: "Get up to 40% OFF on selected shoe styles", bullets: ["Explore a wide collection of footwear at special prices", "Find shoes for everyday wear, seasonal styling and special occasions", "No coupon code is required to claim the savings", "Macy's Shoe Sale, Footwear Deals, Macy's Sale, USA"] },
          { label: "UP TO", value: "60%", title: "Macy's – Bedding Essentials Sale | Up to 60% OFF", desc: "Save up to 60% OFF on selected bedding essentials", bullets: ["Shop bed sheets, upholstered beds, rugs and area rugs", "Find deals on queen sheets, mattresses, comforter sets and pillows", "Explore duvet covers and UGG blankets at special sale prices", "Macy's Bedding Sale, Home Deals, Bedding Essentials, USA"] },
          { label: "GET", value: "$20", title: "Macy's – $20 OFF Orders Over $100", desc: "Get $20 OFF eligible orders of $100 or more", bullets: ["Shop selected beauty, shoes, jewelry and other categories", "Meet the $100 minimum order requirement to unlock the offer", "Save more when shopping across multiple eligible categories", "Macy's Discount, $20 Off, Macy's Deals, Beauty Sale, USA"] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[110px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-1">
                    {/* Increased label font size to text-[11px] sm:text-[13px] */}
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-bold leading-tight">{c.label}</p>
                    {/* Increased value font size to text-[28px] sm:text-[38px] */}
                    <div className="text-[28px] sm:text-[38px] font-extrabold leading-none mt-2">{c.value}</div>
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Macy's: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="lg:w-[35%] space-y-8">
        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-lg mb-6">Macy’s Coupon Code & Macy’s Promo Code</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            A Macy’s coupon code can help you save on qualifying purchases when an applicable promotion is available. Macy’s regularly features discounts, limited-time promotions, clearance offers, and category-specific deals on its website. Its official deals page includes promotions across women's and men's fashion, kids, shoes, handbags, fine jewelry, home, luggage, and other categories.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            If you're searching for a Macy’s promo code, checking CouponsBit before checkout can help you find an offer that matches your purchase.
          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
           <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
           <div className="space-y-1">
             {[
               { icon: Shirt, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
               { icon: Sparkles, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: ShoppingBag, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: Home, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
          <h3 className="text-black font-black text-lg mb-2">How to Use a Macy’s Coupon Code</h3>
          <p className="text-gray-500 font-medium text-xs mb-8">
            Using a Macy’s coupon code online is straightforward.
          </p>

          <div className="space-y-8">
            {[
              {
                step: "Step 1",
                title: "Find a Macy’s Coupon Code",
                sub: "Visit CouponsBit and browse the latest Macy’s coupon codes, promo codes, and deals."
              },
              {
                step: "Step 2",
                title: "Select Your Macy’s Deal",
                sub: "Choose the offer that best matches the products you're planning to purchase. Read the terms to check eligibility and exclusions."
              },
              {
                step: "Step 3",
                title: "Copy the Macy’s Promo Code",
                sub: "If the promotion requires a code, reveal the Macy’s promo code on CouponsBit and copy it."
              },
              {
                step: "Step 4",
                title: "Shop on Macy’s",
                sub: "Visit Macy's, select your products, and add them to your shopping bag."
              },
              {
                step: "Step 5",
                title: "Apply the Macy’s Discount Code",
                sub: "Proceed to checkout and enter your Macy’s discount code in the applicable promotional code field."
              },
              {
                step: "Step 6",
                title: "Complete Your Order",
                sub: "Check your updated order total to make sure the applicable savings have been reflected, then complete your purchase."
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start text-justify">
                <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xs">
                  {item.step.split(" ")[1]}
                </div>
                <div>
                  <p className="text-black font-black text-sm leading-tight mb-2">
                    {item.step}: {item.title}
                  </p>
                  <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-500 font-medium text-[11px] leading-relaxed mt-8 pt-6 border-t border-[#f0f0f0]">
            If a code doesn't work, review its expiration date, minimum purchase requirement, eligible products, and exclusions.
          </p>
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
          Macy’s Coupon Codes, Promo Codes & Deals 2026
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-[#056BFA]">
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 font-bold text-[14px]">
              {[
                ["Macy's Promo Code – Big Home Event | Up to 60% OFF", "60% OFF", "All Users", "Shop bestsellers, top brands and home essentials at special prices", "Find furniture, bedding, décor and more to refresh your home"],
                ["Macy's Promo Code – Star Deals Week | Save 40%-60%", "40-60% OFF", "All Users", "Discover six days of limited-time savings across multiple categories", "Shop daily Flash Sales for extra discounts throughout the event"],
                ["Macy's Promo Code – Up to 50% OFF Sale Essentials", "50% OFF", "All Users", "Shop a wide range of products at special reduced prices", "No coupon code is required to claim the offer"],
                ["Macy's – Friends & Family Sale | Extra 10%-30% OFF", "10-30% OFF", "All Users", "Save 30% OFF on eligible regular-price and sale items", "Enjoy 15% OFF on selected beauty and fragrance products"],
                ["Macy's – Diamond Sale | Up to 75% OFF Jewelry", "75% OFF", "All Users", "Find sparkling jewelry deals with savings of 55%-75%", "Explore jewelry styles for gifting, special occasions and everyday wear"],
                ["Macy's – Great Shoe Sale | Up to 40% OFF", "40% OFF", "All Users", "Explore a wide collection of footwear at special prices", "Find shoes for everyday wear, seasonal styling and special occasions"],
                ["Macy's – Bedding Essentials Sale | Up to 60% OFF", "60% OFF", "All Users", "Shop bed sheets, upholstered beds, rugs and area rugs", "Find deals on queen sheets, mattresses, comforter sets and pillows"],
                ["Macy's – $20 OFF Orders Over $100", "$20 OFF", "All Users", "Shop selected beauty, shoes, jewelry and other categories", "Meet the $100 minimum order requirement to unlock the offer"],
              ].map((row, i) => (
                <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 7 && "border-b-0")}>
                  <td className="p-5 text-black font-black align-middle max-w-[220px]">{row[0]}</td>
                  <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
                  <td className="p-5 text-gray-500 align-middle">{row[2]}</td>
                  <td className="p-5 text-gray-500 align-middle max-w-[200px]">{row[3]}</td>
                  <td className="p-5 text-gray-500 align-middle max-w-[240px]">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Expandable Text Content */}
        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            Looking for the latest <strong>Macy’s</strong> coupon code, Macy’s promo code, or Macy’s discount code? <strong>CouponsBit</strong> helps you discover current Macy’s coupons, sale offers, and savings opportunities across fashion, beauty, home, jewelry, shoes, luggage, and more.
          </p>
          <p>
            Macy’s is one of the best-known department stores in the U.S., offering a broad selection of national and designer brands alongside its own merchandise. From refreshing your wardrobe and shopping for beauty essentials to furnishing your home or finding a gift, Macy’s gives shoppers plenty of opportunities to find deals throughout the year.
          </p>
          <p>
            Before placing an order, check CouponsBit for the latest Macy’s coupon codes and promo codes. You can compare available offers and look for additional savings before completing your purchase.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Macy’s Discount Code Offers
            </h3>
            <p>
              A Macy’s discount code may provide a percentage discount, a specific dollar amount off, or another promotional benefit depending on the offer.
            </p>
            <p>
              Before applying a code, check its terms. Some Macy's promotions can have exclusions, minimum purchase requirements, product restrictions, or specific validity periods.
            </p>
            <p>
              If you are shopping during a major sale, compare the coupon with the existing sale price rather than assuming that every promotion can be combined.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Macy’s Online Coupon</h4>
            <p>
              Online shoppers can find promotional offers directly through Macy's deals and promotions section. Macy's also encourages customers to sign up for emails to receive information about special discounts, promotions, online sales, and events.
            </p>
            <p>
              Checking for a Macy’s online coupon before placing an order is a quick way to see whether an additional offer is available.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Macy’s Deals & Sale
            </h3>
            <p>
              Macy’s offers deals across a wide range of categories, from clothing and footwear to beauty, furniture, bedding, jewelry, and luggage. Its current deals section organizes promotions by category and price point, including $10-and-under, $25-and-under, $50-and-under, and $100-and-under selections.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Macy’s Women’s Clothing Deals</h4>
            <p>
              Macy’s women's department includes dresses, tops, sweaters, jeans, pants, coats, activewear, sleepwear, lingerie, and more.
            </p>
            <p>
              If you're updating your wardrobe, compare regular prices with sale prices and check whether a Macy’s coupon code can be applied to eligible merchandise.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Macy’s Men’s Clothing Deals</h4>
            <p>
              Men can shop for shirts, T-shirts, jeans, pants, suits, jackets, sweaters, activewear, shoes, and accessories.
            </p>
            <p>
              Macy's also carries products from a range of well-known brands, giving shoppers the opportunity to compare different styles and price points in one place.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Macy’s Shoes & Handbags Deals</h4>
            <p>
              Looking for footwear or a new handbag? Macy's offers shoes and bags for women, men, and kids, including casual styles, formal footwear, boots, sneakers, handbags, backpacks, and luggage.
            </p>
            <p>
              These categories can also feature seasonal promotions, making them worth checking when Macy's runs a larger sale.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Macy’s Beauty Deals</h4>
            <p>
              Macy's beauty selection includes makeup, skincare, fragrance, haircare, bath and body products, and beauty tools.
            </p>
            <p>
              Beauty shoppers can look for brand-specific promotions and seasonal offers. Macy's current deals page, for example, highlights promotions across beauty and cologne alongside its wider sale selection.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Macy’s Home Deals</h4>
            <p>
              Macy's is also a destination for home shopping, with products covering bedding, bath, furniture, kitchen, décor, rugs, and other household categories.
            </p>
            <p>
              If you're furnishing a room or replacing everyday essentials, compare clearance prices and promotional offers to find the best available value.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Macy’s Clearance & Sale
            </h3>
            <p>
              The Macy’s clearance sale can be a useful place to look for lower-priced merchandise across different departments. Macy's maintains a dedicated deals and coupons section featuring clearance and sale finds.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Macy’s Clearance Deals</h4>
            <p>
              Clearance prices can vary by product, size, color, and availability. Popular items may sell out quickly, so shoppers should compare the current price with any applicable promotion before purchasing.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Macy’s Flash Sale</h4>
            <p>
              Limited-time and flash promotions can offer additional savings on selected merchandise. If you're flexible about what you buy, checking the current deals page regularly can help you spot temporary price reductions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Macy’s Star Rewards & Savings
            </h3>
            <p>
              Macy’s Star Rewards is its U.S. loyalty program. Customers can join as free Bronze members, while Macy’s Cardholders receive enhanced benefits based on their membership status. The program has four status levels: Bronze, Silver, Gold, and Platinum.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Macy’s Star Rewards Points</h4>
            <p>
              Star Rewards members can earn points on qualifying purchases. Current program terms list earning rates of 1 point per dollar for Bronze, 2 points for Silver, 3 points for Gold, and 5 points for Platinum. Every 1,000 points results in a $10 Star Money reward, subject to the program's terms.
            </p>
            <p>
              This can be another way to get value from regular Macy's purchases in addition to checking for coupon codes.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Macy’s Star Money</h4>
            <p>
              Star Money rewards can be applied toward qualifying Macy's purchases. Current terms state that Star Money is issued in $10 increments and expires 30 days after issuance. Certain products, services, and transactions are excluded.
            </p>
            <p>
              If you shop at Macy's regularly, keeping track of your Star Money expiration dates can help you avoid losing unused rewards.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Macy’s Free Shipping</h4>
            <p>
              Shipping can also affect the final cost of an online order. Macy's current shipping information states that shoppers who aren't Star Rewards members generally qualify for free standard shipping on $49+ orders in the contiguous U.S. Bronze members can qualify at $39, while Silver members using a Macy's Card qualify at $25. Gold and Platinum members using a Macy's Card receive free standard shipping with no minimum.
            </p>
          </div>

          {/* Bullet Point Block for Major Sales */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Best Ways to Save at Macy’s
            </h3>
            <p>
              A coupon code isn't the only way to save. Combining Macy's sales with smart shopping strategies can help you get more value.
            </p>
            <p>
              <strong>Check Macy’s Coupon Codes Before Checkout:</strong> Before paying, check CouponsBit for the latest Macy’s coupon code and promotional offers. A quick search could uncover an additional discount.
            </p>
            <p>
              <strong>Shop During Major Macy’s Sales:</strong> Macy's regularly runs seasonal and limited-time promotions. Major shopping periods can also be good opportunities to look for discounts on fashion, beauty, home products, and gifts. Keep an eye out around:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 font-medium">
              <li>Black Friday</li>
              <li>Cyber Monday</li>
              <li>Memorial Day</li>
              <li>Labor Day</li>
              <li>Fourth of July</li>
              <li>Back-to-school season</li>
              <li>Holiday shopping</li>
              <li>End-of-season sales</li>
            </ul>
            <p>
              <strong>Compare Sale Prices:</strong> Don't focus only on the coupon percentage. Compare the final price after the promotion and consider shipping costs, exclusions, and available rewards.
            </p>
            <p>
              <strong>Join Macy’s Star Rewards:</strong> Free Bronze membership gives shoppers access to the Star Rewards ecosystem, while higher tiers offer additional benefits. Macy's states that members can receive savings offers and other perks depending on their status.
            </p>
          </div>

          {/* Numbered Steps Block */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">
              How to Shop Macy’s via CouponsBit
            </h3>
            <div className="space-y-6">
              {[
                "Step 1: Browse Available Macy’s Offers — Visit the Macy’s page on CouponsBit and explore the latest offers.",
                "Step 2: Select Your Preferred Offer — Choose the offer that best fits what you're shopping for.",
                "Step 3: Click Get Deal — You'll be taken directly to the relevant Macy’s collection.",
                "Step 4: Browse the Collection — Explore clothing, shoes, beauty products, home essentials, or luggage.",
                "Step 5: Add Items to Your Cart — Select styles, colors, and sizes for your order.",
                "Step 6: Complete Your Purchase — Finalize your order at checkout on Macy’s.",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Why Shop at Macy’s?
            </h3>
            <p>
              Macy's combines department-store shopping with a large online marketplace, making it possible to shop across numerous categories in one place.
            </p>
            <p>
              <strong>Wide Product Selection:</strong> From clothing and shoes to beauty, jewelry, furniture, bedding, and luggage, Macy's offers products for different shopping needs.
            </p>
            <p>
              <strong>Popular Brands:</strong> Macy's carries a wide range of recognizable fashion, beauty, home, and lifestyle brands, making it convenient to compare products across categories.
            </p>
            <p>
              <strong>Online & In-Store Shopping:</strong> Customers can shop online or visit Macy's physical stores. Eligible online purchases may also offer store pickup, providing another convenient way to receive orders.
            </p>
            <p>
              <strong>Rewards for Regular Shoppers:</strong> Star Rewards provides points, Star Money, savings offers, and other benefits depending on membership status.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Find the Latest Macy’s Coupon Codes & Deals
            </h3>
            <p>
              Whether you're shopping for clothing, shoes, beauty products, jewelry, home essentials, furniture, or gifts, Macy's offers plenty of ways to find value throughout the year.
            </p>
            <p>
              Before you place your order, check CouponsBit for the latest Macy’s coupon code, Macy’s promo code, Macy’s discount code, Macy’s online coupon, Macy’s sale deals, and Macy’s clearance offers.
            </p>
            <p>
              Compare the available promotions, check the terms, and choose the offer that gives you the best overall value. A quick coupon check before checkout can make your next Macy's shopping trip a little more rewarding.
            </p>
          </div>

          {/* Gradient Mask when collapsed */}
          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        {/* Read More / Read Less Toggle Button */}
        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform",
              isReadMore && "rotate-180"
            )}
          />
        </button>

        {/* FAQ Accordion Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Macy’s Coupon Code FAQs
          </h3>
          {[
            {
              q: "Does Macy’s Have Coupon Codes?",
              a: "Yes. Macy's offers coupons, promo codes, and other promotional discounts throughout the year. Availability and eligibility vary by offer.",
            },
            {
              q: "Where Can I Find a Macy’s Promo Code?",
              a: "You can check CouponsBit for available Macy’s promo codes, discount codes, and current deals before shopping.",
            },
            {
              q: "What Is a Macy’s Discount Code?",
              a: "A Macy’s discount code is a promotional code that can provide savings on eligible purchases when the applicable terms are met.",
            },
            {
              q: "Does Macy’s Have Free Shipping?",
              a: "Yes. Macy's currently offers free standard shipping at different thresholds depending on whether you're a Star Rewards member and, for some tiers, whether you use a Macy's Card. Other shoppers can qualify for free shipping on eligible $49+ orders in the contiguous U.S.",
            },
            {
              q: "What Is Macy’s Star Rewards?",
              a: "Star Rewards is Macy's loyalty program. Free Bronze membership is available to non-cardholders, while Macy's Cardholders receive enhanced benefits based on their status.",
            },
            {
              q: "Can I Earn Rewards at Macy’s?",
              a: "Yes. Star Rewards members can earn points on qualifying purchases. The number of points earned per dollar depends on membership status.",
            },
            {
              q: "Does Macy’s Have Clearance Sales?",
              a: "Yes. Macy's regularly features clearance and sale merchandise across categories including women's and men's fashion, shoes, handbags, home, luggage, and more.",
            },
            {
              q: "Is CouponsBit Free to Use?",
              a: "Yes. CouponsBit is free to use. You can browse Macy's coupon codes, discounts, promotions, and deals without paying a fee.",
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
                <span className="text-black font-black text-base">
                  {faq.q}
                </span>
                <div
                  className={cn(
                    "bg-[#f0f0f0] p-2 rounded-xl transition-all",
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
        {/* Search Tags */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Macy’s Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Women's Clothing",
              "Men's Suits",
              "Shoes & Handbags",
              "Beauty & Fragrance",
              "Macy's Promo Code",
              "Star Rewards",
              "Bedding & Home",
              "Free Shipping",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Today's Top Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Macy’s Deals
          </h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div
                key={i}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  M
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
                  aria-label={`Shop Macy’s: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90 inline-block text-center"
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
