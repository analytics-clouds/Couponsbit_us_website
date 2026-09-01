"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent,ArrowRight,
  Users,
  BadgeCheck,
  ExternalLink,
  ShieldCheck,CheckCircle2,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,Scissors, Heart, Gem, Wind, Sparkles,
  ShoppingBag,
  Shirt,
  Baby,
  Home,
  Gift,
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
  { id: "d1", label: "SAVE", heading: "Women's Summer Sale | Up to 72% OFF", sub: "H&M Discount Code" },
  { id: "d2", label: "SAVE", heading: "MAMA 2-Piece Jersey Set | Up to 70% OFF", sub: "H&M Discount Code" },
  { id: "d3", label: "SAVE", heading: "Men's Resort Shirt | Up to 77% OFF", sub: "H&M Discount Code" },
  { id: "d4", label: "SAVE", heading: "Men's Blazers & Suits | Up to 65% OFF", sub: "H&M Deal" },
  { id: "d5", label: "SAVE", heading: "H&M Home Bedding Sale | Up to 70% OFF", sub: "H&M Home" },
  { id: "d6", label: "SAVE", heading: "Fragrance & Perfume Sale | Up to 69% OFF", sub: "H&M Deal" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Shein", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp", dealText: "Up To 90% OFF", href: "/stores/shein-coupon-code" },
  { name: "Macy's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp", dealText: "Up To 75% OFF", href: "/stores/macys-promo-code" },
  { name: "Aporro", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp", dealText: "Save Up To 45% OFF", href: "/stores/aporro-discount-code" },
  { name: "Blue Cypress", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/blue-cypress-logo_ax2m7c.webp", dealText: "20% OFF First Order", href: "/stores/blue-cypress-discount-code" },
  { name: "Zara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp", dealText: "Verified Deals", href: "/stores/zara-discount-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
];

const STORE_URL = "https://www2.hm.com/";

export default function HmCouponsContent() {
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
              <span className="text-black font-extrabold">H&M</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp" alt="H&M" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">H&M</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(52.6k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find H&M promo codes, discount codes, and sale deals for Sep 2026. Save up to 77% on selected men’s styles, 72% on women’s fashion, 70% on beauty and bedding, and discover summer clothing, footwear, fragrance and makeup from $2.49.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "18", label: "Offers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787135071/162_ohoggy.webp" alt="H&M Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">H&M Promo Codes & Offers</h2>
        </div>

        {[
          { label: "SAVE", value: "72% OFF", title: "H&M Discount Code – Women's Summer Sale | Up to 72% OFF 👚", desc: "Get the Layered Crop Top for just $16.99 (Regular Price $59.99) and SAVE 72%.", bullets: ["Check for an H&M discount code to get additional savings on your purchase.", "Shop women's Summer 2026 fashion with up to 72% OFF selected styles.", "Grab the deal while sizes and discounted stock are available."] },
          { label: "SAVE", value: "70% OFF", title: "H&M Discount Code – MAMA 2-Piece Jersey Set | Up to 70% OFF 👩", desc: "Buy the MAMA 2-Piece Textured Jersey Set for only $14.99 (Regular Price $49.99) and SAVE 70%.", bullets: ["Use an H&M discount code for potential extra savings at checkout.", "Enjoy up to 70% OFF selected women's fashion and summer styles.", "Shop the sale before your preferred size sells out."] },
          { label: "UP TO", value: "72% OFF", title: "H&M Discount Code – Summer Fashion Deals | Up to 72% OFF ☀️", desc: "Discover women's Summer 2026 styles with up to 72% OFF selected products.", bullets: ["Check for an active H&M discount code to maximize your savings.", "Find discounted tops, jackets, footwear, denim and more.", "Limited-time H&M sale prices are available while stock lasts."] },
          { label: "SAVE", value: "70% OFF", title: "H&M – Jelly Flip-Flops | Up to 70% OFF 🩴", desc: "Get the Jelly Flip-Flops for just $7.49 (Regular Price $24.99) and SAVE 70%.", bullets: ["Check H&M discount offers for additional savings on your order.", "Shop up to 70% OFF selected summer footwear."] },
          { label: "UP TO", value: "70% OFF", title: "H&M – Women's Beauty Sale | Up to 70% OFF 💄", desc: "Save up to 70% OFF selected H&M beauty products.", bullets: ["Grab the Eau de Toilette for only $2.99 (Regular Price $7.99).", "Check for an H&M discount code before completing your beauty purchase.", "Shop discounted fragrances and makeup while offers last."] },
          { label: "SAVE", value: "62% OFF", title: "H&M – Sports Leggings | Up to 62% OFF 🏃", desc: "Get H&M MOVE Sports Leggings with SoftMove™ for $16.99 (Regular Price $44.99) and SAVE 62%.", bullets: ["Look for an H&M discount code for potential extra savings.", "Shop up to 62% OFF selected women's activewear.", "Ideal for workouts, sports and comfortable everyday wear."] },
          { label: "UP TO", value: "62% OFF", title: "H&M – Preppy Printed T-Shirt | Up to 62% OFF 👕", desc: "Get the Relaxed-Fit Printed T-Shirt for just $12.99.", bullets: ["Check current H&M discount offers before checkout.", "Discover up to 62% OFF selected women's fashion styles.", "Pair this casual T-shirt with jeans, shorts or skirts."] },
          { label: "UP TO", value: "62% OFF", title: "H&M – Denim Edit | Up to 62% OFF 👖", desc: "Shop the Baggy Regular Waist Jeans for $34.99.", bullets: ["Check for an H&M discount code to save more on your fashion order.", "Discover up to 62% OFF selected women's denim and fashion.", "Find relaxed-fit jeans and everyday wardrobe essentials."] },
          { label: "SAVE", value: "77% OFF", title: "H&M Discount Code – Men's Resort Shirt | Up to 77% OFF 🌴", desc: "Get the Regular-Fit Jacquard Resort Shirt for only $6.99 (Regular Price $29.99) and SAVE 77%.", bullets: ["Use an H&M discount code for potential extra savings.", "Shop men's fashion deals with up to 77% OFF selected styles."] },
          { label: "SAVE", value: "70% OFF", title: "H&M Discount Code – Open-Knit Polo Shirt | Up to 70% OFF 👔", desc: "Buy the Relaxed-Fit Open-Knit Polo Shirt for $14.99 (Regular Price $49.99) and SAVE 70%.", bullets: ["Check for an H&M discount code before checkout.", "Enjoy up to 70% OFF selected men's summer fashion.", "Lightweight knit styling is perfect for warm-weather outfits."] },
          { label: "SAVE", value: "35% OFF", title: "H&M – Men's Accessories Sale | Up to 35% OFF 🧦", desc: "Get the 2-Pack Socks for just $6.49 (Regular Price $9.99) and SAVE 35%.", bullets: ["Check H&M promotions and discount codes for additional savings.", "Shop up to 35% OFF selected men's accessories.", "Buy 2 Get 1 Free offer is also highlighted on the deal."] },
          { label: "SAVE", value: "60% OFF", title: "H&M – Men's T-Shirts & Tops | Up to 60% OFF 👕", desc: "Get the Regular-Fit Linen-Blend Polo Shirt for $19.99 (Regular Price $49.99) and SAVE 60%.", bullets: ["Check for an H&M discount code to maximize your order savings.", "Shop up to 60% OFF selected men's T-shirts and tops.", "Premium linen-blend styling is ideal for summer outfits."] },
          { label: "SAVE", value: "67% OFF", title: "H&M – Men's Shorts Sale | Up to 67% OFF 🩳", desc: "Get the Loose-Fit Cotton Cargo Shorts for $14.99 (Regular Price $44.99) and SAVE 67%.", bullets: ["Check H&M discount code offers before completing your purchase.", "Shop up to 67% OFF selected men's shorts and summer styles."] },
          { label: "SAVE", value: "65% OFF", title: "H&M – Men's Blazers & Suits | Up to 65% OFF 🧥", desc: "Grab the Relaxed-Fit Double-Breasted Jacket for $34.99 (Regular Price $99.00) and SAVE 65%.", bullets: ["Check available H&M discount codes for additional savings.", "Shop up to 65% OFF selected men's blazers, jackets and suits.", "Ideal for smart-casual and dressed-up occasions."] },
          { label: "SAVE", value: "58% OFF", title: "H&M – Men's Shoes Sale | Up to 58% OFF 👟", desc: "Get the Canvas Espadrilles for $20.99 (Regular Price $49.99) and SAVE 58%.", bullets: ["Look for an H&M discount code before checkout.", "Shop up to 58% OFF selected men's shoes and footwear.", "Lightweight espadrilles are perfect for summer and vacation looks."] },
          { label: "SAVE", value: "70% OFF", title: "H&M Home – Bedding Sale | Up to 70% OFF 🛏️", desc: "Get the Linen-Blend Bedspread for $20.99 (Regular Price $69.99) and SAVE 70%.", bullets: ["Check H&M discount offers for additional savings on H&M Home products.", "Shop up to 70% OFF selected bedding and home essentials.", "Refresh your bedroom with discounted seasonal styles."] },
          { label: "SAVE", value: "70% OFF", title: "H&M – Beauty & Makeup Sale | Up to 70% OFF 💋", desc: "Get the Perfect Finishing Icon Mattifying Powder for $4.49 (Regular Price $14.99) and SAVE 70%.", bullets: ["Check for an H&M discount code to unlock potential extra savings.", "Shop up to 70% OFF selected beauty and makeup products.", "Find affordable makeup essentials while the sale is live."] },
          { label: "SAVE", value: "69% OFF", title: "H&M – Fragrance & Perfume Sale | Up to 69% OFF 🌸", desc: "Get the Eau de Toilette for just $2.49 (Regular Price $7.99) and SAVE 69%.", bullets: ["Check H&M discount code offers for additional savings.", "Shop up to 69% OFF selected fragrances and perfumes.", "Grab these low-price fragrance deals while stock lasts."] },
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop H&M: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">Stay Active With H&M Move</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            H&M also has a dedicated activewear direction through H&M Move. The range is designed for movement and can include workout clothing such as leggings, sports bras, tops, shorts, sweatshirts, and lightweight jackets.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            You do not necessarily have to be a dedicated athlete to shop this category. Activewear can also work well for walking, travel, casual dressing, or anyone who prefers comfortable clothing with a sporty feel.
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
               { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: Baby, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
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
  <h3 className="text-black font-black text-lg mb-2">Discover H&M Beauty</h3>
  
  <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8">
    H's beauty offering adds another dimension to its product range. Shoppers can find makeup, fragrance, nail products, skincare-related items, hair accessories, tools, and beauty sets.
  </p>

  <div className="space-y-8">
    {[
      {
        icon: Sparkles,
        title: "Makeup Collection",
        sub: "Depending on availability, makeup products can include foundation, concealer, blush, bronzer, mascara, eyeliner, eyeshadow, lip products, and palettes."
      },
      {
        icon: Wind,
        title: "Fragrance",
        sub: "For those shopping for scents, H offers fragrance products such as perfumes, eau de toilette, eau de parfum, and body mists."
      },
      {
        icon: Gem,
        title: "Nail Products",
        sub: "The nail category can include polish and products designed for nail care and styling."
      },
      {
        icon: Heart,
        title: "Skincare",
        sub: "Shoppers interested in skincare can explore products and accessories associated with cleansing, exfoliation, lip care, facial care, and body care."
      },
      {
        icon: Scissors,
        title: "Hair Accessories",
        sub: "Hair clips, combs, headbands, and other styling accessories are available within the beauty assortment."
      },
      {
        icon: Gift,
        title: "Beauty Accessories and Sets",
        sub: "Makeup brushes, cosmetic bags, toiletry cases, beauty tools, and curated sets can be practical additions for personal use or gifting."
      }
    ].map((item, i) => (
      <div key={i} className="flex gap-4 items-start">
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
       <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
      {/* Main Article Column */}
      <div className="prose max-w-none text-left">
        <h1 className="text-3xl lg:text-4xl font-black text-black mb-6 leading-tight tracking-tight">
          H&M Discount Code, Coupon Code & Sale
        </h1>

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
        { label: "SAVE", value: "72% OFF", title: "H&M Discount Code – Women's Summer Sale – Layered Crop Top", desc: "Get the Layered Crop Top for just $16.99 (Regular Price $59.99).", bullets: ["Check for an H&M discount code for extra savings.", "Shop women's Summer 2026 fashion.", "Grab the deal while stock lasts."] },
        { label: "SAVE", value: "70% OFF", title: "H&M Discount Code – MAMA 2-Piece Jersey Set", desc: "Buy the MAMA 2-Piece Textured Jersey Set for $14.99 (Regular Price $49.99).", bullets: ["Use an H&M discount code at checkout.", "Enjoy savings on selected summer styles.", "Shop before your size sells out."] },
        { label: "UP TO", value: "72% OFF", title: "H&M Discount Code – Summer Fashion Deals", desc: "Discover women's Summer 2026 styles.", bullets: ["Check for an active H&M discount code.", "Find tops, jackets, footwear, denim and more.", "Limited-time sale prices."] },
        { label: "SAVE", value: "70% OFF", title: "H&M – Jelly Flip-Flops", desc: "Get Jelly Flip-Flops for $7.49 (Regular Price $24.99).", bullets: ["Check H&M discount offers.", "Selected summer footwear."] },
        { label: "UP TO", value: "70% OFF", title: "H&M – Women's Beauty Sale", desc: "Save on selected H&M beauty products.", bullets: ["Eau de Toilette for only $2.99.", "Check for an H&M discount code.", "Discounted fragrances and makeup."] },
        { label: "SAVE", value: "62% OFF", title: "H&M – Sports Leggings", desc: "Get MOVE Sports Leggings for $16.99 (Regular Price $44.99).", bullets: ["Look for an H&M discount code.", "Selected women's activewear.", "Ideal for workouts and everyday wear."] },
        { label: "UP TO", value: "62% OFF", title: "H&M – Preppy Printed T-Shirt", desc: "Get Relaxed-Fit Printed T-Shirt for $12.99.", bullets: ["Check current H&M discount offers.", "Selected women's fashion styles."] },
        { label: "UP TO", value: "62% OFF", title: "H&M – Denim Edit", desc: "Shop Baggy Regular Waist Jeans for $34.99.", bullets: ["Save more on your fashion order.", "Selected women's denim and fashion."] },
        { label: "SAVE", value: "77% OFF", title: "H&M Discount Code – Men's Resort Shirt", desc: "Get Jacquard Resort Shirt for $6.99 (Regular Price $29.99).", bullets: ["Use discount code for extra savings.", "Men's fashion deals."] },
        { label: "SAVE", value: "70% OFF", title: "H&M Discount Code – Open-Knit Polo Shirt", desc: "Buy Open-Knit Polo Shirt for $14.99 (Regular Price $49.99).", bullets: ["Check discount code before checkout.", "Lightweight knit styling."] },
        { label: "SAVE", value: "35% OFF", title: "H&M – Men's Accessories Sale", desc: "Get 2-Pack Socks for $6.49 (Regular Price $9.99).", bullets: ["Buy 2 Get 1 Free offer highlighted.", "Selected men's accessories."] },
        { label: "SAVE", value: "60% OFF", title: "H&M – Men's T-Shirts & Tops", desc: "Get Linen-Blend Polo Shirt for $19.99 (Regular Price $49.99).", bullets: ["Maximize your order savings.", "Premium linen-blend styling."] },
        { label: "SAVE", value: "67% OFF", title: "H&M – Men's Shorts Sale", desc: "Get Cotton Cargo Shorts for $14.99 (Regular Price $44.99).", bullets: ["Check H&M discount code offers.", "Selected men's shorts."] },
        { label: "SAVE", value: "65% OFF", title: "H&M – Men's Blazers & Suits", desc: "Grab Double-Breasted Jacket for $34.99 (Regular Price $99.00).", bullets: ["Check available discount codes.", "Ideal for smart-casual occasions."] },
        { label: "SAVE", value: "58% OFF", title: "H&M – Men's Shoes Sale", desc: "Get Canvas Espadrilles for $20.99 (Regular Price $49.99).", bullets: ["Look for a discount code.", "Perfect for summer looks."] },
        { label: "SAVE", value: "70% OFF", title: "H&M Home – Bedding Sale", desc: "Get Linen-Blend Bedspread for $20.99 (Regular Price $69.99).", bullets: ["H&M Home product savings.", "Bedding and home essentials."] },
        { label: "SAVE", value: "70% OFF", title: "H&M – Beauty & Makeup Sale", desc: "Get Mattifying Powder for $4.49 (Regular Price $14.99).", bullets: ["Unlock potential extra savings.", "Affordable makeup essentials."] },
        { label: "SAVE", value: "69% OFF", title: "H&M – Fragrance & Perfume Sale", desc: "Get Eau de Toilette for $2.49 (Regular Price $7.99).", bullets: ["Low-price fragrance deals.", "Available while stock lasts."] },
      ].map((item, i) => (
        <tr key={i} className="hover:bg-gray-50/80 transition-colors">
          <td className="p-4 text-gray-900 font-semibold align-middle max-w-[280px]">
            {item.title}
          </td>
          <td className="p-4 text-[#056BFA] font-bold align-middle whitespace-nowrap">
            {item.label === "UP TO" ? `Up to ${item.value}` : item.value}
          </td>
          <td className="p-4 text-gray-500 align-middle whitespace-nowrap">
            All Users
          </td>
          <td className="p-4 text-gray-500 align-middle max-w-[220px]">
            {item.bullets[0] || "Check offer details"}
          </td>
          <td className="p-4 text-gray-500 align-middle max-w-[260px]">
            {item.desc}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        {/* Introductory Hero Banner / Card */}
        <div className="bg-white p-8 rounded-[32px] border border-gray-200 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-[#056bfa] mb-4">
            Save More on Your H&M Shopping
          </h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-4">
            Planning your next H&M order? Before you head to checkout, it is worth looking for an H&M discount code that could help lower your total. Whether you are shopping for new-season fashion, basics, children's clothing, activewear, beauty products, or home accessories, a quick check for current promotions can help you find a better deal.
          </p>
          <p className="text-gray-600 font-medium leading-relaxed mb-4">
            H&M has grown beyond a traditional clothing retailer. Its collections cover fashion for women, men, children, and babies, as well as shoes, bags, jewelry, sportswear, beauty, and home products. Shoppers can also discover specialist ranges such as H&M Move, maternity clothing, Premium Selection, and H&M Home.
          </p>
          <p className="text-gray-600 font-medium leading-relaxed">
            CouponsBit brings together H&M promotions and savings opportunities in one place, making it easier to look for an H&M coupon code before completing an order. You can also compare promotional offers against items already included in an H&M sale to see which option works best for your shopping list.
          </p>
        </div>

        {/* Collapsible Content Area */}
        <div
          className={cn(
            "relative transition-all duration-500 ease-in-out text-gray-600 font-medium space-y-8",
            !isReadMore && "max-h-[600px] overflow-hidden"
          )}
        >
          {/* What Makes H&M Worth Shopping? */}
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-xl font-black text-black">What Makes H&M Worth Shopping?</h3>
            <p className="leading-relaxed">
              H&M offers a broad mix of affordable fashion, wardrobe basics, seasonal collections, and lifestyle products. Instead of visiting separate stores for clothing, accessories, beauty products, and home essentials, shoppers can explore many of these categories through the same retailer.
            </p>
            <p className="font-bold text-gray-800">The main shopping areas include:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {[
                "Women's fashion",
                "Men's fashion",
                "Kids' and baby clothing",
                "Shoes",
                "Bags and accessories",
                "Sportswear",
                "Beauty",
                "Home furnishings and décor",
              ].map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8fafc] p-3 rounded-2xl text-center text-xs font-bold text-gray-800 border border-gray-100"
                >
                  {cat}
                </div>
              ))}
            </div>
            <p className="leading-relaxed pt-2">
              This variety makes H&M suitable for different shopping needs, from replacing everyday basics to preparing for a new season or refreshing a room at home.
            </p>
          </div>

          {/* Women's Fashion Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-[#056bfa]">Women's Fashion at H&M</h3>
            <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
  {/* Hyperlink wrapping the full-size image */}
  <a href="" className="absolute inset-0 z-10 block">
    <img 
      src="https://res.cloudinary.com/couponsbit/image/upload/v1787143281/1_lyqppz.webp" 
      alt="Women's Clothing Collection" 
      className="w-full h-full object-cover"
    />
  </a>
  </div>
            
            <p className="leading-relaxed">
              The women's department includes clothing for casual days, work, holidays, evenings, workouts, and everyday wear. Depending on the current range, shoppers can browse everything from simple T-shirts and jeans to dresses, tailoring, knitwear, swimwear, lingerie, and outerwear.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Dresses for Everyday and Special Occasions</h4>
                <p className="text-sm">H&M's dress selection covers different lengths, cuts, fabrics, and aesthetics. You may come across casual cotton dresses, knitted designs, printed styles, fitted silhouettes, relaxed shapes, and more polished options for events.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Tops, Shirts and Everyday Basics</h4>
                <p className="text-sm">T-shirts, tank tops, shirts, blouses, and other tops form an important part of the women's range. They can be mixed with denim, skirts, tailored trousers, or shorts to create outfits for different occasions.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Denim and Trousers</h4>
                <p className="text-sm">If denim is on your shopping list, H&M offers jeans in a variety of cuts, washes, rises, and fits. The collection also includes trousers and other bottoms, giving shoppers options for casual and smarter outfits.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Skirts and Shorts</h4>
                <p className="text-sm">Skirts and shorts provide versatile options for warmer weather. Depending on the season, you may find denim, casual, tailored, printed, or more fashion-focused designs.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Knitwear</h4>
                <p className="text-sm">Sweaters and cardigans are useful for layering throughout the cooler months. H&M's knitwear selection can include lightweight pieces, chunky sweaters, cardigans, and other styles suitable for different seasons.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Outerwear and Tailoring</h4>
                <p className="text-sm">For colder weather or more structured outfits, H&M offers coats, jackets, blazers, and similar outerwear. These pieces can work with both casual and formal wardrobes.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Beachwear and Swimwear</h4>
                <p className="text-sm">Planning a holiday? H&M's swimwear range can include bikinis, one-piece swimsuits, beachwear, and coordinating pieces for poolside or vacation looks.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Underwear and Nightwear</h4>
                <p className="text-sm">The women's selection also includes everyday underwear, lingerie, socks, tights, pajamas, and nightwear, giving shoppers access to practical wardrobe essentials alongside fashion pieces.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Maternity Collection</h4>
                <p className="text-sm">H&M also caters to maternity wardrobes with clothing designed to accommodate changing needs during pregnancy. The range can include maternity tops, dresses, trousers, and other everyday pieces.</p>
              </div>
            </div>
          </div>

          {/* Men fashion */}
          <div className="space-y-6">
  <h3 className="text-2xl font-black text-[#056bfa]">Men's Fashion at H&M</h3>
  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
  {/* Hyperlink wrapping the full-size image */}
  <a href="" className="absolute inset-0 z-10 block">
    <img 
      src="https://res.cloudinary.com/couponsbit/image/upload/v1787143281/2_ywq6aw.webp" 
      alt="Women's Clothing Collection" 
      className="w-full h-full object-cover"
    />
  </a>
  </div>
  
  <p className="leading-relaxed">
    Men can find clothing for relaxed weekends, office days, formal occasions, workouts, and everyday wear. The assortment covers essentials as well as seasonal and trend-led styles.
  </p>

  <div className="space-y-4">
    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">T-Shirts and Shirts</h4>
      <p className="text-sm">Build a simple everyday wardrobe with basic T-shirts, polos, button-up shirts, overshirts, and other casual or smart-casual options.</p>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">Jeans and Trousers</h4>
      <p className="text-sm">H&M's men's denim range features different fits and washes, while trousers and casual pants offer alternatives for work, events, and everyday outfits.</p>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">Blazers and Formalwear</h4>
      <p className="text-sm">For occasions that call for a smarter appearance, shoppers can explore blazers, suits, shirts, trousers, and other tailoring pieces.</p>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">Sweaters and Knitwear</h4>
      <p className="text-sm">Knitwear provides an easy way to add warmth without relying entirely on heavy outerwear. Options can include classic sweaters, lighter knits, and layering pieces.</p>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">Hoodies and Sweatshirts</h4>
      <p className="text-sm">For casual outfits, H&M offers relaxed hoodies and sweatshirts that can be paired with jeans, joggers, shorts, and other everyday clothing.</p>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">Jackets and Coats</h4>
      <p className="text-sm">Men's outerwear includes different types of jackets, coats, overshirts, and seasonal layers suitable for changing weather.</p>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">Underwear and Basics</h4>
      <p className="text-sm">Everyday essentials such as underwear and socks are also available, making it possible to replenish basic items alongside larger wardrobe purchases.</p>
    </div>
  </div>
</div>

{/* clothing kids */}
<div className="space-y-6">
  <h3 className="text-2xl font-black text-[#056bfa]">Clothing for Kids and Babies</h3>
  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
  {/* Hyperlink wrapping the full-size image */}
  <a href="" className="absolute inset-0 z-10 block">
    <img 
      src="https://res.cloudinary.com/couponsbit/image/upload/v1787143282/3_x80jia.webp" 
      alt="Women's Clothing Collection" 
      className="w-full h-full object-cover"
    />
  </a>
  </div>
  
  <p className="leading-relaxed">
    Families can shop for children across different age groups, with collections designed for babies, toddlers, girls, and boys. H&M's children's assortment combines everyday basics with seasonal clothing and accessories.
  </p>

  <div className="space-y-4">
    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">Babywear</h4>
      <p className="text-sm">Parents can browse comfortable clothing for babies and younger children, including everyday outfits, sleepwear, basics, and seasonal pieces.</p>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">Girls' Collection</h4>
      <p className="text-sm">Girls' clothing can include dresses, tops, T-shirts, skirts, jeans, trousers, sweaters, jackets, coats, and other everyday wardrobe staples.</p>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">Boys' Collection</h4>
      <p className="text-sm">Boys can choose from T-shirts, shirts, jeans, trousers, shorts, sweatshirts, hoodies, sweaters, jackets, and other casual pieces.</p>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">Children's Accessories and Footwear</h4>
      <p className="text-sm">Shoes and accessories can be added to complete children's outfits, making it easier to put together a full look during one shopping trip.</p>
    </div>
  </div>
</div>

<div className="space-y-6">
  <h3 className="text-2xl font-black text-[#056bfa]">Shoes, Bags and Accessories</h3>
  <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
  {/* Hyperlink wrapping the full-size image */}
  <a href="" className="absolute inset-0 z-10 block">
    <img 
      src="https://res.cloudinary.com/couponsbit/image/upload/v1787143282/4_ytnlfp.webp" 
      alt="Women's Clothing Collection" 
      className="w-full h-full object-cover"
    />
  </a>
  </div>

  <p className="leading-relaxed">
    A new accessory can change an existing outfit without requiring a complete wardrobe overhaul. H&M offers various accessories and footwear options to complement its clothing collections.
  </p>
  
  <p className="font-bold text-gray-800">Depending on the current assortment, shoppers may find:</p>
  
  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
    {[
      "Trainers and sneakers",
      "Boots",
      "Sandals",
      "Flats",
      "Heels",
      "Loafers",
      "Slippers",
      "Handbags",
      "Shoulder bags",
      "Crossbody bags",
      "Backpacks",
      "Belts",
      "Caps and hats",
      "Scarves",
      "Jewelry",
      "Sunglasses",
      "Hair accessories",
      "Socks and tights",
    ].map((item, idx) => (
      <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100 text-xs font-bold text-gray-800">
        <CheckCircle2 className="w-4 h-4 text-[#056bfa] shrink-0" />
        <span>{item}</span>
      </div>
    ))}
  </div>

  <div className="pt-2">
    <div className="bg-white p-5 rounded-2xl border border-gray-100">
      <h4 className="font-black text-black mb-1">Perfect for Everyday & Gifting</h4>
      <p className="text-sm">These categories can also be useful when you are searching for smaller purchases, finishing touches, or gifts.</p>
    </div>
  </div>
</div>

          {/* Explore H&M Home Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-[#056bfa]">Explore H&M Home</h3>
           <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
  {/* Hyperlink wrapping the full-size image */}
  <a href="" className="absolute inset-0 z-10 block">
    <img 
      src="https://res.cloudinary.com/couponsbit/image/upload/v1787143281/5_tbss5i.webp" 
      alt="Women's Clothing Collection" 
      className="w-full h-full object-cover"
    />
  </a>
  </div>
           
            <p className="leading-relaxed">
              Your H&M shopping trip does not have to stop at fashion. H&M Home offers products for decorating, furnishing, organizing, and improving different areas of the house.
            </p>
            <p className="font-bold text-gray-800">Its home range can include:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Bedding",
                "Furniture",
                "Lighting",
                "Cushions and textiles",
                "Decorative accessories",
                "Kitchenware",
                "Dining products",
                "Bathroom accessories",
                "Storage",
                "Home fragrance",
                "Children's room products",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100 text-xs font-bold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#056bfa] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Give Your Space a New Look</h4>
                <p className="text-sm">Small decorative additions can make a noticeable difference to a room. Cushions, mirrors, decorative objects, textiles, and other accents can be used to update a living room, bedroom, hallway, or other space.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Bedding and Bedroom Essentials</h4>
                <p className="text-sm">H&M Home includes products such as duvet covers, bedspreads, cushion covers, and other bedroom textiles. These can be useful for seasonal updates or a simple bedroom refresh.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Furniture</h4>
                <p className="text-sm">For larger changes, shoppers can browse furniture and other pieces intended to furnish or organize different parts of the home.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Lighting</h4>
                <p className="text-sm">Table lamps, lampshades, and other lighting products can combine functionality with decorative appeal.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Kitchen and Dining</h4>
                <p className="text-sm">The kitchen and dining range includes products designed for cooking, serving, eating, and entertaining.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Bathroom Accessories</h4>
                <p className="text-sm">From practical accessories to textiles, H&M Home provides products that can help make a bathroom more functional and visually appealing.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Storage Solutions</h4>
                <p className="text-sm">Storage products can help keep different rooms organized, including bedrooms, bathrooms, kitchens, and living spaces.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Home Fragrance</h4>
                <p className="text-sm">Candles and other home-fragrance products can be used to introduce pleasant scents and create a particular mood within a room.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Children's Spaces</h4>
                <p className="text-sm">H&M Home also has products intended for nurseries and children's rooms, alongside products for other areas such as bedrooms, living rooms, kitchens, bathrooms, hallways, and outdoor spaces.</p>
              </div>
            </div>
          </div>

          {/* Educational Content Sections */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-[28px] border border-gray-100 space-y-2">
              <h3 className="text-xl font-black text-[#056bfa]">Understanding an H&M Discount Code</h3>
              <p className="leading-relaxed text-sm">
                An H&M discount code is a promotional code that can provide a price reduction or another benefit when the conditions of the promotion are met.
              </p>
              <p className="leading-relaxed text-sm">
                Not every code works on every order. A promotion could be restricted by product category, order value, customer eligibility, location, or validity period. Some offers may also exclude particular products.
              </p>
              <p className="leading-relaxed text-sm">
                For that reason, always read the terms associated with a promotion before applying it.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[28px] border border-gray-100 space-y-2">
              <h3 className="text-xl font-black text-[#056bfa]">What Does H&M Coupon Code Mean?</h3>
              <p className="leading-relaxed text-sm">
                The phrase H&M coupon code generally refers to a promotional code that can be entered during the shopping or checkout process to unlock an eligible offer.
              </p>
              <p className="leading-relaxed text-sm">
                However, a coupon is not always the cheapest option. An item included in a sale could already have a lower price than the discount available through a code. Seasonal campaigns, student promotions, membership-related benefits, and other offers may also provide alternative ways to save.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[28px] border border-gray-100 space-y-2">
              <h3 className="text-xl font-black text-[#056bfa]">How to Find the Best H&M Sale Deals</h3>
              <p className="leading-relaxed text-sm">
                An H&M sale can be useful when your priority is getting a lower price rather than finding a particular item in a specific color or size.
              </p>
              <p className="leading-relaxed text-sm">
                Sale merchandise may span fashion, footwear, accessories, beauty, and home categories. The available selection changes regularly, so products can disappear as sizes and inventory become limited.
              </p>
              <p className="leading-relaxed text-sm">
                If you are flexible about what you buy, browsing sale categories before purchasing full-price items can be worthwhile.
              </p>
            </div>
          </div>

          {/* Simple Ways to Reduce Your H&M Spend */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-[#056bfa]">Simple Ways to Reduce Your H&M Spend</h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Search for Promotions Before You Shop</h4>
                <p className="text-sm">Start your shopping trip by checking CouponsBit for current H&M offers. Doing this before adding products to your basket means you can make your purchasing decision with available promotions in mind.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Compare the Actual Final Price</h4>
                <p className="text-sm">Do not automatically assume that a coupon is the best deal. Compare the discounted price, sale price, and any applicable promotional offer before deciding.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Look Across H&M's Other Categories</h4>
                <p className="text-sm">If you already need beauty products, accessories, sportswear, or home items, check whether H&M has what you need. Consolidating purchases can make your shopping trip more convenient.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Look for Student Savings</h4>
                <p className="text-sm">Eligible students may find student-focused offers. Since promotional conditions can change, confirm the current requirements before using this as part of your savings strategy.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100">
                <h4 className="font-black text-black mb-1">Keep an Eye on Seasonal Events</h4>
                <p className="text-sm">H&M promotions can change around major seasons and shopping periods. Holiday events, summer promotions, back-to-school periods, and end-of-season campaigns can all be worth watching.</p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <div className="bg-white p-8 lg:p-10 rounded-[36px] border border-gray-200 shadow-sm my-8 space-y-6">
            <h3 className="text-2xl font-black text-[#056bfa]">How to Apply an H&M Coupon Code</h3>
            <div className="space-y-4">
              {[
                { title: "1. Visit CouponsBit", text: "Begin by checking the H&M offers currently available on CouponsBit." },
                { title: "2. Select a Suitable Deal", text: "Look through the available promotions and choose one that matches the products you plan to purchase." },
                { title: "3. Read the Offer Details", text: "Before copying a code, check the fine print. Pay attention to minimum order values, exclusions, expiration dates, eligible products, and customer restrictions." },
                { title: "4. Copy the Promotional Code", text: "If a code is required, copy it so that it is ready when you reach checkout." },
                { title: "5. Build Your H&M Basket", text: "Shop for clothing, accessories, footwear, beauty products, home goods, or other items you need." },
                { title: "6. Enter the Code During Checkout", text: "Locate the promotional-code section at checkout and enter the code exactly as required." },
                { title: "7. Review Your Order", text: "Before submitting payment, look at the final order total. Confirm that the promotion has been recognized and that the resulting price matches your expectations." },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 shrink-0 bg-[#056bfa] text-white font-black rounded-xl flex items-center justify-center text-sm shadow-md">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-black text-black text-sm">{step.title}</h4>
                    <p className="text-gray-700 font-medium text-xs leading-relaxed mt-0.5">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What Can You Shop for at H&M? */}
          <div className="bg-white p-6 rounded-[28px] border border-gray-100 space-y-3">
            <h3 className="text-xl font-black text-[#056bfa]">What Can You Shop for at H&M?</h3>
            <p className="leading-relaxed text-sm">
              H&M is suitable for a wide range of shopping lists. Someone updating a women's wardrobe might look for dresses, denim, tops, knitwear, blazers, footwear, and bags.
            </p>
            <p className="leading-relaxed text-sm">
              A men's shopping trip could include T-shirts, shirts, jeans, trousers, jackets, knitwear, and sneakers. Parents can combine children's clothing, shoes, and accessories with their own purchases.
            </p>
            <p className="leading-relaxed text-sm">
              Beauty shoppers can browse makeup, fragrance, nail products, skincare items, hair accessories, brushes, and beauty sets. For the home, H&M Home offers bedding, furniture, lighting, décor, storage, kitchen products, dining accessories, bathroom items, and room fragrance.
            </p>
            <p className="leading-relaxed text-sm">
              This wide selection means you can potentially use one promotion across a varied shopping trip, depending on its terms.
            </p>
          </div>

          {/* Find H&M Savings With CouponsBit */}
          <div className="bg-white p-6 rounded-[28px] border border-gray-100 space-y-3">
            <h3 className="text-xl font-black text-[#056bfa]">Find H&M Savings With CouponsBit</h3>
            <p className="leading-relaxed text-sm">
              H&M gives shoppers plenty of ways to browse, from seasonal clothing and everyday basics to kids' fashion, activewear, beauty, accessories, and home products.
            </p>
            <p className="leading-relaxed text-sm">
              Before you place your next order, visit CouponsBit to look for an H&M discount code, H&M coupon code, or an ongoing H&M sale. Compare the available promotions with the prices of the products in your basket, check the applicable terms, and then choose the option that gives you the most worthwhile deal.
            </p>
            <p className="leading-relaxed text-sm">
              A few moments spent checking for current offers before checkout could help you reduce your spending and get more value from your H&M shopping trip.
            </p>
          </div>

          {/* Gradient Overlay when Collapsed */}
          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Read More / Read Less Button */}
        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-8 flex items-center gap-2 text-[#056bfa] font-black text-xs uppercase tracking-widest hover:underline focus:outline-none"
        >
          <span>{isReadMore ? "Read Less" : "Read Full Shopping Guide"}</span>
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isReadMore && "rotate-180"
            )}
          />
        </button>

        {/* FAQ Accordion Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            H&M Discount Code FAQs
          </h3>
          {[
            {
              q: "How Can I Find an H&M Discount Code?",
              a: "CouponsBit is one place to check for available H&M discount codes, coupons, deals, and promotions before you shop.",
            },
            {
              q: "Is an H&M Coupon Code the Same as a Discount Code?",
              a: "The terms are often used interchangeably. Both generally refer to promotional offers that can provide a saving or another benefit when the relevant conditions are met.",
            },
            {
              q: "Are H&M Discount Codes Available All the Time?",
              a: "No. Promotional availability changes. At different times, shoppers may encounter coupon codes, sale prices, seasonal promotions, student offers, or other campaigns instead.",
            },
            {
              q: "Does H&M Have Sale Items?",
              a: "Yes. H&M regularly offers reduced-price products, although the products and discounts available can change as stock is updated.",
            },
            {
              q: "What Categories Does H&M Offer?",
              a: "H&M's assortment includes women's, men's, children's, and baby clothing, as well as shoes, accessories, sportswear, beauty, and home products.",
            },
            {
              q: "Can I Buy Makeup and Fragrance at H&M?",
              a: "Yes. H&M's beauty selection can include makeup, perfumes, body mists, nail products, skincare-related products, hair accessories, brushes, cosmetic bags, and beauty sets.",
            },
            {
              q: "Can I Shop for Home Products at H&M?",
              a: "Yes. H&M Home offers a range of products for areas including bedrooms, living rooms, bathrooms, kitchens, children's rooms, hallways, and outdoor spaces.",
            },
            {
              q: "Does H&M Offer Student Savings?",
              a: "Student offers may be available depending on the market and current promotion. Always check the latest eligibility rules and terms before attempting to use one.",
            },
            {
              q: "Can a Coupon Be Used on H&M Sale Products?",
              a: "There is no universal rule. Each promotion has its own conditions, and certain codes may exclude sale items, selected categories, or other products. Check the specific offer before checkout.",
            },
            {
              q: "What Else Does H&M Sell Besides Clothing?",
              a: "Along with apparel, H&M offers footwear, handbags, jewelry, accessories, sportswear, beauty products, fragrances, makeup tools, home décor, furniture, bedding, lighting, kitchen and dining products, bathroom accessories, storage products, and other lifestyle items.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[24px] overflow-hidden border border-gray-200 shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors focus:outline-none"
              >
                <span className="text-black font-black text-sm pr-4">
                  {faq.q}
                </span>
                <div
                  className={cn(
                    "p-2 rounded-xl transition-all duration-300 shrink-0",
                    openFaq === i
                      ? "bg-[#056bfa] text-white rotate-180"
                      : "bg-gray-100 text-gray-500"
                  )}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 px-6 bg-white",
                  openFaq === i
                    ? "max-h-96 pb-6 opacity-100"
                    : "max-h-0 opacity-0 pb-0"
                )}
              >
                <p className="text-gray-600 font-bold text-xs leading-relaxed pt-3 border-t border-gray-100">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-8">
        {/* Popular Searches Widget */}
        <div className="bg-[#e8f6f8] rounded-[36px] p-8 border border-[#056bfa]/10">
          <h3 className="text-black font-black text-sm mb-6 uppercase tracking-widest flex items-center gap-2">
            <Tag className="w-4 h-4 text-[#056bfa]" />
            Popular H&M Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Women's Apparel",
              "Men's Apparel",
              "Kids' Collection",
              "H&M Promo Code",
              "H&M Home",
              "H&M Member",
              "Seasonal Sale",
              "Fashion Deals",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white px-3.5 py-2 rounded-full text-[11px] font-black text-[#056bfa] uppercase tracking-wider shadow-sm border border-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Today's Top Deals Widget */}
        <div className="bg-white rounded-[36px] p-8 border border-gray-200 shadow-sm sticky top-8">
          <h3 className="text-black font-black text-sm mb-6 uppercase tracking-widest flex items-center gap-2">
            <Percent className="w-4 h-4 text-[#056bfa]" />
            Today's Top H&M Deals
          </h3>
          <div className="space-y-5">
            {DEALS.map((deal, i) => (
              <div
                key={i}
                className="flex items-center gap-3.5 group cursor-pointer pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
              >
                <div className="w-10 h-10 bg-[#f8fafc] rounded-xl flex items-center justify-center text-[#056bfa] font-black text-lg italic shadow-inner shrink-0">
                  H
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-wider group-hover:text-[#056bfa] transition-colors truncate">
                    {deal.heading}
                  </p>
                  <p className="text-gray-500 font-medium text-[11px] truncate mt-0.5">
                    {deal.sub}
                  </p>
                </div>
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get deal: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#056bfa] px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-[#056bfa] hover:text-white transition-all shrink-0 flex items-center gap-1"
                >
                  Deal <ArrowRight className="w-3 h-3" />
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
