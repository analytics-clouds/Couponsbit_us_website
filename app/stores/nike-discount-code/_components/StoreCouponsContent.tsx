"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent,UserCheck, Activity,
  Users,
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
  Footprints,
  Shirt,
  Smartphone,
  Sparkles,
  Backpack,
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
  { id: "d1", label: "SAVE", heading: "Nike One Women’s High-Rise Leggings | 60% OFF", sub: "Clearance Sale" },
  { id: "d2", label: "SAVE", heading: "Ava Rover Premium Men’s Shoes | 43% OFF", sub: "Nike Deal" },
  { id: "d3", label: "SAVE", heading: "Nike Motiva Women’s Walking Shoes | 41% OFF", sub: "Nike Deal" },
  { id: "d4", label: "SHOP", heading: "Mercurial Superfly 11 Elite Kylian Mbappé | $305", sub: "Nike Football" },
  { id: "d5", label: "SAVE", heading: "Dri-FIT One Girls’ Leggings | 40% OFF", sub: "Kids’ Activewear" },
  { id: "d6", label: "SAVE", heading: "Air Max Excee Men’s Shoes | 40% OFF", sub: "Clearance Sale" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/vooglam-logo_l3wq6f.webp", dealText: "Up To 50% OFF", href: "/stores/vooglam-discount-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/wiskii-logo_qkxwjs.webp", dealText: "Up To 40% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/sungait-logo_zqf2wm.webp", dealText: "Up To 60% OFF", href: "/stores/sungait-discount-code" },
  { name: "Outfitr", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/outfitr-logo_hqk8kd.webp", dealText: "Up To 30% OFF", href: "/stores/outfitr-discount-code" },
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Chewy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp", dealText: "Up To 50% OFF", href: "/stores/chewy-promo-code" },
];

const STORE_URL = "https://www.nike.com/w/usa-10ciy";

export default function NikeCouponsContent() {
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
              <span className="text-black font-extrabold">Nike</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp" alt="Nike" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Nike</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(94.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Nike promo codes, discount codes, and clearance deals for Aug 2026. Save up to 60% on selected styles, get Nike One leggings for $23.97, shoes from $59.97, kids’ leggings for $17.97, and free shipping on eligible $50+ member orders.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "11", label: "Offers" },
                    { icon: Percent, val: "3.4k", label: "Deals" },
                    { icon: Users, val: "30M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787056328/148_oi53pt.webp" alt="Nike Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Nike Discount Codes & Offers</h2>
        </div>

        {[
          { label: "SAVE", value: "60% OFF", title: "Nike Promo Code – Clearance Sale | Nike One Women’s High-Rise Leggings | 60% OFF", desc: "Get Nike One Women’s High-Rise Leggings for $23.97, down from $60", bullets: ["Save $36.03 with an effective discount of 60% OFF", "Made with recycled materials for comfortable workouts and everyday wear", "Ideal for training, gym sessions and casual athleisure looks"] },
          { label: "SAVE", value: "43% OFF", title: "Nike – Ava Rover Premium Men’s Shoes | 43% OFF", desc: "Shop Nike Ava Rover Premium Men’s Shoes for $87.97, down from $155", bullets: ["Save $67.03 with an effective discount of up to 43% OFF", "Premium footwear designed for versatile everyday styling", "Great for casual outfits, daily activities and back-to-school looks"] },
          { label: "SAVE", value: "41% OFF", title: "Nike – Nike Motiva Women’s Walking Shoes | 41% OFF", desc: "Get Nike Motiva Women’s Walking Shoes for $66.97, down from $115", bullets: ["Save $48.03 with an effective discount of up to 41% OFF", "Designed for comfortable walking and everyday movement", "Suitable for walks, errands and active daily routines"] },
          { label: "SHOP", value: "$305", title: "Nike – Mercurial Superfly 11 Elite Kylian Mbappé | $305", desc: "Shop the Nike Mercurial Superfly 11 Elite “Kylian Mbappé” for $305", bullets: ["Firm-ground high-top soccer cleats designed for speed and performance", "Inspired by Kylian Mbappé’s signature football style", "Built for players looking for a performance-focused soccer boot"] },
          { label: "SAVE", value: "40% OFF", title: "Nike – Dri-FIT One Girls’ Leggings | 40% OFF", desc: "Get Nike Dri-FIT One Big Kids’ Leggings for $17.97, reduced from $30", bullets: ["Save $12.03 with an effective discount of 40% OFF", "Made with recycled materials for active kids", "Ideal for sports, school activities and everyday movement"] },
          { label: "SAVE", value: "40% OFF", title: "Nike Promo Code – Clearance Sale | Air Max Excee Men’s Shoes | 40% OFF", desc: "Shop Nike Air Max Excee Men’s Shoes for $59.97, reduced from $100", bullets: ["Save $40 with an effective discount of 40% OFF", "Best Seller design made for everyday comfort and casual styling", "A versatile sneaker choice for daily activities and relaxed outfits"] },
          { label: "SAVE", value: "34% OFF", title: "Nike – Nike Club Men’s Pullover Fleece Hoodie | 34% OFF", desc: "Shop the Nike Club Men’s Pullover Fleece Hoodie for $45.97, down from $70", bullets: ["Save $24.03 with an effective discount of 34% OFF", "Soft fleece construction is ideal for cooler weather", "Great for casual outfits, travel and comfortable everyday layering"] },
          { label: "SAVE", value: "40% OFF", title: "Nike – Air Jordan 1 Low SE Big Kids’ Shoes | 40% OFF", desc: "Get Air Jordan 1 Low SE Big Kids’ Shoes for $65.97, down from $110", bullets: ["Save $44.03 with an effective discount of 40% OFF", "Classic low-top Jordan styling for everyday wear", "A versatile option for school, casual outfits and daily activities"] },
          { label: "SAVE", value: "35% OFF", title: "Nike – Jordan Sport Hoop Fleece Men’s Dri-FIT Pants | 35% OFF", desc: "Get Jordan Sport Hoop Fleece Men’s Dri-FIT Pants for $64.97, down from $100", bullets: ["Save $35 with an effective discount of 35% OFF", "Dri-FIT technology provides a comfortable option for active lifestyles", "Ideal for training, casual wear and everyday sports styling"] },
          { label: "SAVE", value: "29% OFF", title: "Nike – Sportswear Women’s Poly-Knit Track Shorts | 29% OFF", desc: "Shop Nike Sportswear Women’s Mid-Rise Poly-Knit Track Shorts for $38.97, down from $55", bullets: ["Save $16.03 with an effective discount of 29% OFF", "Made with recycled materials for comfortable activewear", "Ideal for workouts, casual looks and warm-weather activities"] },
          { label: "FREE", value: "SHIPPING", title: "Nike – Free Shipping for Members on $50+ Orders", desc: "Nike Members can enjoy free shipping on eligible orders of $50 or more", bullets: ["Shop footwear, apparel, sportswear and accessories while saving on delivery", "Combine eligible products to reach the $50 order threshold", "A useful membership benefit for regular Nike shoppers in the USA"] },
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Nike: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">Nike Discount Code</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            A Nike discount code can reduce the price of eligible products when shopping on Nike.com or through the Nike App. Nike occasionally provides promotional codes for specific products, categories, or shopping events, while other discounts are available to eligible customers after verification.

          </p>
           <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Nike's official promotions page currently highlights sale shoes, sale clothing, sale best sellers, and other discounted products.

          </p>
           <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Since Nike promotional offers can have product exclusions, expiration dates, or other restrictions, always check the terms of a discount code before completing your order.

          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
           <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
           <div className="space-y-1">
             {[
               { icon: Footprints, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
               { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: Smartphone, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: Shirt, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
  <h3 className="text-black font-black text-lg mb-2">Why Shop at Nike?</h3>
  <p className="text-gray-500 font-medium text-xs mb-8">
    Nike has built a broad product ecosystem around sports, performance, and lifestyle.
  </p>
  
  <div className="space-y-8">
    {[
      {
        icon: ShoppingBag,
        title: "Wide Product Selection",
        sub: "You can shop footwear, clothing, sports equipment, accessories, and specialized collections from one brand."
      },
      {
        icon: Activity,
        title: "Performance-Focused Designs",
        sub: "Nike develops products for activities ranging from running and basketball to training, football, and everyday fitness."
      },
      {
        icon: Sparkles,
        title: "Iconic Sneaker Collections",
        sub: "Styles such as Air Force 1, Air Max, Dunk, and Jordan have become recognizable beyond the world of sports."
      },
      {
        icon: UserCheck,
        title: "Nike Member Benefits",
        sub: "Joining Nike provides access to member-focused benefits, offers, and promotions."
      },
      {
        icon: Smartphone,
        title: "Online & App Shopping",
        sub: "Nike lets shoppers browse its collections and apply eligible promotional codes through both Nike.com and the Nike App."
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
          Nike Discount Codes, Promo Codes & Deals 2026
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
                ["Nike Promo Code – Clearance Sale | Nike One Women’s High-Rise Leggings | 60% OFF", "60% OFF", "All Users", "Recycled materials, workouts & everyday wear", "Women’s leggings"],
                ["Nike – Ava Rover Premium Men’s Shoes | 43% OFF", "Up to 43% OFF", "All Users", "Versatile everyday styling", "Men’s shoes"],
                ["Nike – Nike Motiva Women’s Walking Shoes | 41% OFF", "Up to 41% OFF", "All Users", "Comfortable walking & everyday movement", "Women’s walking shoes"],
                ["Nike – Mercurial Superfly 11 Elite Kylian Mbappé | $305", "$305", "All Users", "Firm-ground high-top soccer cleats", "Soccer cleats"],
                ["Nike – Dri-FIT One Girls’ Leggings | 40% OFF", "40% OFF", "All Users", "Recycled materials for active kids", "Kids’ leggings"],
                ["Nike Promo Code – Clearance Sale | Air Max Excee Men’s Shoes | 40% OFF", "40% OFF", "All Users", "Best Seller, everyday comfort & casual styling", "Men’s shoes"],
                ["Nike – Nike Club Men’s Pullover Fleece Hoodie | 34% OFF", "34% OFF", "All Users", "Soft fleece for cooler weather", "Men’s fleece hoodie"],
                ["Nike – Air Jordan 1 Low SE Big Kids’ Shoes | 40% OFF", "40% OFF", "All Users", "Classic low-top Jordan styling", "Kids’ shoes"],
                ["Nike – Jordan Sport Hoop Fleece Men’s Dri-FIT Pants | 35% OFF", "35% OFF", "All Users", "Dri-FIT technology for active lifestyles", "Men’s sportswear pants"],
                ["Nike – Sportswear Women’s Poly-Knit Track Shorts | 29% OFF", "29% OFF", "All Users", "Recycled materials for comfortable activewear", "Women’s track shorts"],
                ["Nike – Free Shipping for Members on $50+ Orders", "Free Shipping", "Nike Members", "Eligible orders of $50 or more", "All Nike products"],
              ].map((row, i) => (
                <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 10 && "border-b-0")}>
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

        {/* Collapsible Text Container */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          
          <p>
            Looking for a Nike discount code to save on your next pair of sneakers, workout clothes, or sports gear? CouponsBit helps shoppers discover the latest Nike discounts, promo codes, sale offers, and other ways to spend less on Nike products.
          </p>
          <p>
            From iconic sneakers and running shoes to Dri-FIT apparel, Jordan styles, training gear, and accessories, Nike offers products for athletes and everyday shoppers alike. Whether you're replacing your running shoes, refreshing your gym wardrobe, or looking for a new pair of lifestyle sneakers, checking for a current offer before you buy can help you get better value.
          </p>
          <p>
            Nike regularly runs sales and promotions through its website and app. The brand also provides special savings opportunities for eligible students, teachers, military members, first responders, medical professionals, and other groups.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Nike Promo Code Offers</h3>
            <p>
              Searching for a Nike promo code? CouponsBit makes it easier to find available Nike promotions before you shop.
            </p>
            <p>
              Nike says members can receive exclusive promo codes and offers, while its sale section provides another way to save without entering a code.
            </p>
            <p>
              Promo codes may be limited to certain products or customer groups. For example, Nike's student discount provides eligible U.S. students with a single-use 10% promo code for most items after verification.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Nike Shoes, Clothing & Sportswear</h3>
            <p>
              Nike is known for combining performance-focused technology with designs that work equally well for training, sports, and everyday wear.
            </p>
            <p><strong>Nike Running Shoes</strong></p>
            <p>
              Nike offers running shoes for beginners, regular runners, competitive athletes, and anyone who prefers athletic footwear for everyday use.
            </p>
            <p>
              Popular categories include road-running shoes, cushioned trainers, lightweight running shoes, and performance-focused models. If you're shopping for running shoes, compare the available styles based on your running needs rather than choosing solely based on appearance.
            </p>
            <p><strong>Nike Lifestyle Sneakers</strong></p>
            <p>
              Nike's lifestyle collection includes some of the brand's most recognizable silhouettes.
            </p>
            <p>
              Shoppers can find popular styles across the Air Max, Air Force 1, Dunk, and other sneaker families. These shoes can work with casual outfits while incorporating Nike's signature design elements.
            </p>
            <p><strong>Nike Training Shoes</strong></p>
            <p>
              Nike makes footwear for gym workouts, strength training, cross-training, and other athletic activities.
            </p>
            <p>
              Training shoes are generally designed with stability and versatility in mind, making them useful for workouts that involve lifting, conditioning, and movement.
            </p>
            <p><strong>Nike Sportswear</strong></p>
            <p>
              Nike's clothing range includes T-shirts, hoodies, sweatshirts, joggers, shorts, jackets, leggings, and other everyday apparel.
            </p>
            <p>
              Many products feature Dri-FIT technology designed to help manage moisture during physical activity.
            </p>
            <p><strong>Nike Jordan</strong></p>
            <p>
              Jordan products remain one of Nike's most recognizable categories, covering basketball shoes, lifestyle sneakers, apparel, and accessories.
            </p>
            <p>
              Jordan styles are available in men's, women's, and kids' collections, although specific launches and limited releases may have different purchasing rules or exclusions.
            </p>
          </div>

          {/* Styled How-To Steps Box */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Nike Discount Code</h3>
            <p className="text-gray-700 font-bold">
              Applying a Nike discount code is straightforward when you have a valid offer.
            </p>
            <div className="space-y-6">
              {[
                { step: "Step 1: Find a Nike Offer", desc: "Start by checking CouponsBit for available Nike discounts and promotional offers." },
                { step: "Step 2: Check the Terms", desc: "Before copying a code, review its expiration date, eligible products, minimum purchase requirements, and exclusions." },
                { step: "Step 3: Shop on Nike", desc: "Visit Nike.com or open the Nike App and add your preferred products to your shopping bag." },
                { step: "Step 4: Enter the Promo Code", desc: "On Nike.com, select the promo code option in your bag or during checkout. In the Nike App, tap the promo code option and enter your code." },
                { step: "Step 5: Apply the Offer", desc: "Click or tap Apply. If your order and products qualify, the discount should appear in your order summary before you complete payment." },
                { step: "Step 6: Complete Your Order", desc: "Review the final price, shipping information, and selected products before placing your order." }
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
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save at Nike</h3>
            <p>
              Finding a promo code isn't the only way to lower the cost of Nike products. Several other savings strategies can help.
            </p>
            <p><strong>Shop the Nike Sale Section:</strong> Nike maintains dedicated sale sections for shoes, clothing, and other products. The current sale selection includes discounted running shoes, training shoes, lifestyle sneakers, hoodies, pants, and other apparel. Sale prices can be particularly useful when the product you want isn't eligible for an additional promo code.</p>
            <p><strong>Become a Nike Member:</strong> Nike recommends membership as one of the easiest ways to stay informed about its latest deals and promotions. Members can receive access to exclusive offers, special promotions, birthday benefits, and other member-related perks.</p>
            <p><strong>Look for Student Discounts:</strong> Eligible high school, college, and university students in the U.S. can receive 10% off most items on Nike.com and in the Nike App after completing Nike's verification process. The discount isn't available on every product, and exclusions include certain Nike By You products, gift cards, selected launches, SNKRS products, and Apple products.</p>
            <p><strong>Check Military Discounts:</strong> Nike offers a 10% discount to eligible military members on Nike.com and in Nike stores in the U.S. The brand lists military discounts among its official savings opportunities.</p>
            <p><strong>Look for First Responder & Medical Discounts:</strong> Eligible first responders and medical professionals can also receive 10% off most items through Nike's discount program. Verification is required.</p>
            <p><strong>Take Advantage of Birthday Savings:</strong> Nike's promotions page states that members can receive 10% off during their birthday month on Nike.com and in stores.</p>
            <p><strong>Check Nike Factory Stores:</strong> If you don't have a promo code, Nike recommends visiting a nearby Nike Factory Store as another way to shop discounted products.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Nike Deals for Running & Fitness</h3>
            <p>
              Nike is particularly popular among runners and fitness enthusiasts because its product range covers footwear, apparel, and training accessories.
            </p>
            <p><strong>Nike Running Deals</strong></p>
            <p>
              If you're replacing an old pair of running shoes, check the sale section before purchasing a full-price model. Nike regularly discounts selected running footwear, and sale availability changes over time.
            </p>
            <p>
              When choosing running shoes, consider factors such as your running surface, preferred cushioning, mileage, and fit.
            </p>
            <p><strong>Nike Workout Clothing Deals</strong></p>
            <p>
              Nike's Dri-FIT tops, shorts, leggings, joggers, and training apparel are designed for active use but can also work as everyday athleisure.
            </p>
            <p>
              Shopping during seasonal sales can be a good opportunity to pick up workout basics at lower prices.
            </p>
            <p><strong>Nike Training Gear</strong></p>
            <p>
              Nike also sells bags, socks, hats, sports accessories, and other equipment. If you're putting together a complete workout wardrobe, compare sale items across different categories rather than buying everything at full price.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Nike Seasonal Sales & Promotions</h3>
            <p>
              Nike runs promotions throughout the year, and the available offers can change depending on the season.
            </p>
            <p><strong>Back-to-School Nike Deals</strong></p>
            <p>
              Back-to-school promotions can be a useful time to shop for sneakers, athletic clothing, backpacks, and other everyday essentials.
            </p>
            <p>
              Nike's current promotions page includes discounted footwear and apparel across men's, women's, and kids' categories.
            </p>
            <p><strong>Holiday Shopping</strong></p>
            <p>
              Major shopping periods can bring discounts across selected Nike products. Keep an eye on Nike's sale and promotions pages around major holidays to see which products have been marked down.
            </p>
            <p><strong>End-of-Season Sales</strong></p>
            <p>
              Nike also highlights end-of-season sales as an opportunity to save on selected styles.
            </p>
            <p>
              These promotions can be useful if you're flexible about color, size, or season-specific designs.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Nike Deals?</h3>
            <p>
              CouponsBit gives shoppers another place to check before paying full price for their Nike order.
            </p>
            <p><strong>Find Nike Discount Offers:</strong> Browse available Nike discounts and promotions in one place instead of checking multiple sources individually.</p>
            <p><strong>Check Promo Code Availability:</strong> If you're looking for a Nike promo code, CouponsBit can help you identify available offers before checkout.</p>
            <p><strong>Discover More Ways to Save:</strong> Not every Nike promotion requires a coupon. You can also compare sale prices, membership benefits, student discounts, and other eligible offers.</p>
            <p><strong>Free to Use:</strong> CouponsBit is free for shoppers looking for discounts and promotional offers across fashion, sports, technology, travel, and other categories.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More on Nike</h3>
            <p>
              Whether you're looking for new running shoes, everyday sneakers, gym clothes, Jordan styles, or sports accessories, there are several ways to save on Nike. Checking the sale section, joining Nike as a Member, using an eligible discount, or finding a valid Nike discount code can all help reduce your overall spending.
            </p>
            <p>
              Before placing your next order, check CouponsBit for the latest Nike offers and compare them with the promotions available directly through Nike. Because codes and sale prices can change frequently, reviewing the terms and eligible products before checkout is the best way to make sure you're getting the available deal.
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
          <h3 className="text-2xl font-black text-black mb-8">Nike Discount Code FAQs</h3>
          {[
            { q: "Does Nike offer discount codes?", a: "Yes. Nike occasionally provides promotional codes for eligible products and customers. Nike also offers member-only promotions and other discounts." },
            { q: "Where can I find a Nike promo code?", a: "You can check CouponsBit for available Nike offers and promo codes. Nike also recommends becoming a Nike Member to receive updates about exclusive promotions." },
            { q: "Does Nike have a student discount?", a: "Yes. Eligible U.S. high school, college, and university students can receive 10% off most items on Nike.com and in the Nike App after verification." },
            { q: "Does Nike offer a military discount?", a: "Yes. Nike lists a 10% military discount among its official savings options in the U.S." },
            { q: "Can teachers get a Nike discount?", a: "Yes. Nike lists a 10% discount for eligible educators on most items on Nike.com and in the Nike App." },
            { q: "Does Nike offer a discount for first responders?", a: "Yes. Eligible first responders and medical professionals can receive 10% off most items through Nike's discount program." },
            { q: "How do I apply a Nike discount code?", a: "Add your eligible products to your bag, select the promo code option, enter your code, and click Apply. Nike says the discount will appear if the code is valid and the products qualify." },
            { q: "Can I use more than one Nike promo code?", a: "Nike's promo terms determine whether codes can be combined. Some promotional codes cannot be combined with other offers, so check the specific terms before checkout." },
            { q: "Does Nike have a sale section?", a: "Yes. Nike has dedicated sale categories covering shoes, clothing, best sellers, and other products." },
            { q: "Is CouponsBit free to use?", a: "Yes. CouponsBit is free to use. You can browse Nike discounts, promo codes, and other savings opportunities without paying a fee." }
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
            {["Nike", "Promo Code", "Discount Code", "Running Shoes", "Air Force 1", "Dri-FIT", "Jordan Deals", "Student Discount"].map(tag => (
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
                  N
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
                  aria-label={`Shop Nike: ${deal.heading}`} 
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
