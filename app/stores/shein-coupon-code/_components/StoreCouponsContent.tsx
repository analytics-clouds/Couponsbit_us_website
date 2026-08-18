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
  Sparkles,Coins, Truck, Smartphone,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Baby,
  Home,
  Gem,
  Footprints,
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
  { id: "d1", label: "UP TO", heading: "SHEIN Coupon Code – New Season Style | Up to 50% OFF", sub: "Save up to 50% OFF on fresh seasonal fashion styles" },
  { id: "d2", label: "UP TO", heading: "SHEIN Coupon Code – Local Warehouse Sale | Up to 90% OFF", sub: "Enjoy up to 90% OFF on selected items shipped from local warehouses" },
  { id: "d3", label: "UP TO", heading: "SHEIN – Final Bell Sale | Up to 85% OFF", sub: "Save up to 85% OFF during the Final Bell Sale" },
  { id: "d4", label: "UP TO", heading: "SHEIN – Super Savings | Up to 90% OFF", sub: "Score major markdowns of up to 90% OFF" },
  { id: "d5", label: "UP TO", heading: "SHEIN – Endless Summer Glow | Up to 70% OFF", sub: "Enjoy up to 70% OFF on selected summer fashion and beauty picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/vooglam-logo_qe8mis.webp", dealText: "Eyeglasses From $65", href: "/stores/vooglam-discount-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/sungait-logo_tfolql.webp", dealText: "Up To 50% OFF", href: "/stores/sungait-discount-code" },
  { name: "Fytoo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp", dealText: "Frames From $1", href: "/stores/fytoo-discount-code" },
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Wish.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/wish-logo_n1dypa.webp", dealText: "Up To 60% OFF", href: "/stores/wish-discount-code" },
];

const STORE_URL = "https://www.sheinindia.in/";

export default function SheinCouponsContent() {
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
              <span className="text-black font-extrabold">Shein</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp" alt="Shein" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Shein</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(28.9k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find SHEIN coupon codes, promo codes, and fashion deals for Aug 2026. Save up to 90% on selected items, get up to 85% OFF during Final Bell, 70% OFF summer styles, and shop women's tops from $10.99.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "10", label: "Offers" },
                    { icon: Percent, val: "1.8k", label: "Deals" },
                    { icon: Users, val: "5M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787034386/127_kb1vcx.webp" alt="Shein Coupon Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Shein Coupon Codes & Offers</h2>
        </div>

        {[
          { label: "UP TO", value: "50%", title: "SHEIN Coupon Code – New Season Style | Up to 50% OFF", desc: "Save up to 50% OFF on fresh seasonal fashion styles", bullets: ["Discover new clothing, accessories and everyday wardrobe essentials", "Shop trendy looks at budget-friendly prices", "Refresh your wardrobe with the latest SHEIN arrivals", "SHEIN Coupon Code, New Season Sale, Fashion Deals, USA"] },
          { label: "UP TO", value: "90%", title: "SHEIN Coupon Code – Local Warehouse Sale | Up to 90% OFF", desc: "Enjoy up to 90% OFF on selected items shipped from local warehouses", bullets: ["Find fashion deals with faster delivery options on eligible products", "Shop clothing, accessories and seasonal favorites at reduced prices", "Limited-stock offers available while supplies last", "SHEIN Coupon Code, Local Warehouse Sale, Fashion Deals, USA"] },
          { label: "UP TO", value: "85%", title: "SHEIN – Final Bell Sale | Up to 85% OFF", desc: "Save up to 85% OFF during the Final Bell Sale", bullets: ["Discover major markdowns across selected fashion categories", "Shop trendy clothing and accessories at clearance prices", "Limited-time savings available on selected styles", "SHEIN Sale, Final Bell Sale, Fashion Deals, USA"] },
          { label: "UP TO", value: "90%", title: "SHEIN – Super Savings | Up to 90% OFF", desc: "Score major markdowns of up to 90% OFF", bullets: ["Explore deeply discounted styles across multiple categories", "Find budget-friendly fashion for everyday and seasonal wear", "Shop selected deals before popular items sell out", "SHEIN Sale, Super Savings, Up to 90% Off, USA"] },
          { label: "UP TO", value: "70%", title: "SHEIN – Endless Summer Glow | Up to 70% OFF", desc: "Enjoy up to 70% OFF on selected summer fashion and beauty picks", bullets: ["Discover warm-weather styles and seasonal essentials", "Shop summer-ready clothing, accessories and beauty products", "Grab limited-time deals while selected stock lasts", "SHEIN Coupon Code, Summer Sale, Beauty Deals, USA"] },
          { label: "SAVE", value: "70%", title: "SHEIN – Back to School Bash | 70% OFF", desc: "Shop trendy outfits and everyday essentials for the new school season", bullets: ["Find affordable styles for students and young shoppers", "Explore selected clothing and accessories at special prices", "SHEIN Coupon Code, Back to School Sale, Fashion Deals, USA"] },
          { label: "SHOP", value: "$11.49", title: "SHEIN – INAWLY Women's Pleated Long Sleeve Top | $11.49", desc: "Shop the INAWLY Women's Crew Neck Long Sleeve Top for $11.49", bullets: ["Features a fitted pleated design with a solid-color finish", "Listed among the bestselling women's long sleeve tops", "SHEIN Coupon Code, Women's Tops, Long Sleeve Shirt, Fashion Deals, USA"] },
          { label: "SHOP", value: "$23.99", title: "SHEIN – Tween Girls Striped Preppy Top | $23.99", desc: "Get the Tween Girls 2-Piece Striped Patchwork Set for $23.99", bullets: ["Features a casual preppy-inspired lapel design", "A stylish option for everyday wear and outings", "SHEIN Coupon Code, Girls Fashion, Tween Clothing, Preppy Style, USA"] },
          { label: "SHOP", value: "$10.99", title: "SHEIN – BAE Plus Size Floral Camisole Top | $10.99", desc: "Shop the BAE Women's Plus Size Rose Floral Camisole Top for $10.99", bullets: ["Features a romantic floral print for a stylish seasonal look", "Designed for plus-size fashion and everyday styling", "A popular pick with more than 1,400 units sold", "SHEIN Coupon Code, Plus Size Fashion, Floral Top, Women's Clothing, USA"] },
          { label: "SHOP", value: "$20.99", title: "SHEIN – SXY Plus Size 3-Piece Floral Swim Set | $20.99", desc: "Get the SXY Plus Size 3-Piece Floral Swim Set for $20.99", bullets: ["Features a floral design with a stylish solid-color finish", "Ideal for beach days, pool outings and summer vacations", "Almost sold out with more than 1,800 units sold", "SHEIN Coupon Code, Plus Size Swimwear, Floral Swim Set, Summer Fashion, USA"] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                {/* Updated left width to w-[110px] sm:w-[160px] to easily fit larger text */}
                <div className="relative w-[110px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-1">
                    {/* Increased label font size to text-[11px] sm:text-[13px] and weight to font-bold */}
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Shein: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">About Shein</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Shein is a global online fashion and lifestyle retailer known for its fast-moving catalog of women's, men's, kids' and curve apparel, alongside home, beauty and accessory products. New styles are added to the platform on an ongoing basis.
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
          <h3 className="text-black font-black text-lg mb-8">Shein Products & Categories</h3>
          <div className="space-y-8">
            {[
              { icon: Shirt, title: "Women's Fashion", sub: "Apparel spanning everyday wear, occasion wear, activewear and more." },
              { icon: Shirt, title: "Men's Fashion", sub: "Casual and streetwear-inspired apparel for men." },
              { icon: Users, title: "Curve (Plus Size)", sub: "A dedicated size range designed for plus size shoppers." },
              { icon: Baby, title: "Kids & Baby", sub: "Clothing and accessories for kids and babies." },
              { icon: Home, title: "Home & Kitchen", sub: "Home decor, organization and kitchen essentials." },
              { icon: Sparkles, title: "Beauty & Personal Care", sub: "Cosmetics, skincare and personal care products." },
              { icon: Gem, title: "Accessories & Bags", sub: "Jewelry, bags and fashion accessories." },
              { icon: Footprints, title: "Shoes", sub: "Footwear across casual, dressy and athletic styles." },
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
        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      
      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          SHEIN Discount Codes, Promo Codes & Coupon Deals 2026
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
                ["SHEIN Coupon Code – New Season Style | Up to 50% OFF", "50% OFF", "All Users", "Discover new clothing, accessories and everyday wardrobe essentials", "Shop trendy looks at budget-friendly prices"],
                ["SHEIN Coupon Code – Local Warehouse Sale | Up to 90% OFF", "90% OFF", "All Users", "Find fashion deals with faster delivery options on eligible products", "Shop clothing, accessories and seasonal favorites at reduced prices"],
                ["SHEIN – Final Bell Sale | Up to 85% OFF", "85% OFF", "All Users", "Discover major markdowns across selected fashion categories", "Shop trendy clothing and accessories at clearance prices"],
                ["SHEIN – Super Savings | Up to 90% OFF", "90% OFF", "All Users", "Explore deeply discounted styles across multiple categories", "Find budget-friendly fashion for everyday and seasonal wear"],
                ["SHEIN – Endless Summer Glow | Up to 70% OFF", "70% OFF", "All Users", "Discover warm-weather styles and seasonal essentials", "Shop summer-ready clothing, accessories and beauty products"],
                ["SHEIN – Back to School Bash | 70% OFF", "70% OFF", "All Users", "Find affordable styles for students and young shoppers", "Explore selected clothing and accessories at special prices"],
                ["SHEIN – INAWLY Women's Pleated Long Sleeve Top | $11.49", "$11.49", "All Users", "Features a fitted pleated design with a solid-color finish", "Listed among the bestselling women's long sleeve tops"],
                ["SHEIN – Tween Girls Striped Preppy Top | $23.99", "$23.99", "All Users", "Features a casual preppy-inspired lapel design", "A stylish option for everyday wear and outings"],
                ["SHEIN – BAE Plus Size Floral Camisole Top | $10.99", "$10.99", "All Users", "Features a romantic floral print for a stylish seasonal look", "Designed for plus-size fashion and everyday styling"],
                ["SHEIN – SXY Plus Size 3-Piece Floral Swim Set | $20.99", "$20.99", "All Users", "Features a floral design with a stylish solid-color finish", "Ideal for beach days, pool outings and summer vacations"],
              ].map((row, i) => (
                <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 9 && "border-b-0")}>
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
            Looking for the latest <strong>SHEIN</strong> discount code, SHEIN promo code, or SHEIN coupon code? <strong>CouponsBit</strong> helps you find current SHEIN offers and shopping deals so you can save more on fashion, beauty, accessories, home essentials, and more.
          </p>
          <p>
            SHEIN has become a popular online shopping destination for shoppers looking for affordable, trend-focused styles across a wide range of categories. The U.S. SHEIN marketplace currently includes women's fashion, men's clothing, Curve, kids' products, shoes, beauty, home and living, jewelry, sportswear, baby and maternity products, electronics, pet supplies, and more.
          </p>
          <p>
            Whether you're refreshing your wardrobe, shopping for vacation outfits, looking for beauty products, or browsing home accessories, checking CouponsBit for a SHEIN discount or coupon code before checkout can help you make the most of your shopping budget.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              SHEIN Discount Code for Online Shopping
            </h3>
            <p>
              A SHEIN discount code can be particularly useful when you're placing a larger order or shopping during a promotional period. Depending on the offer, discounts may apply to qualifying products or the eligible purchase total.
            </p>
            <p>Before using any code, check:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 font-medium">
              <li>Minimum purchase requirements</li>
              <li>Expiration date</li>
              <li>Eligible products</li>
              <li>New-user or existing-user restrictions</li>
              <li>Whether sale items are excluded</li>
              <li>Whether the code can be combined with another offer</li>
            </ul>
            <p>This can help you avoid applying a code that doesn't qualify for your particular order.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              SHEIN Deals & Fashion Sale
            </h3>
            <p>
              SHEIN is known for frequently updating its product selection and promotional offers. The U.S. site features categories ranging from everyday clothing and vacation styles to party wear, streetwear, workwear, maternity fashion, and sportswear.
            </p>

            <h4 className="text-lg font-black text-black mt-4">SHEIN Women's Clothing Deals</h4>
            <p>
              Women's fashion is one of the largest sections of the SHEIN marketplace. Shoppers can browse dresses, tops, bottoms, denim, jumpsuits, knitwear, coats, jackets, activewear, beachwear, underwear, sleepwear, and more.
            </p>
            <p>
              Whether you're searching for casual basics, work outfits, vacation clothing, or occasion wear, browsing the sale section alongside a SHEIN promo code can help you find additional savings opportunities.
            </p>

            <h4 className="text-lg font-black text-black mt-4">SHEIN Men's Clothing Deals</h4>
            <p>
              SHEIN also offers men's clothing, including T-shirts, shirts, pants, shorts, hoodies, sweatshirts, jeans, and other casual styles.
            </p>
            <p>
              Men's fashion shoppers can compare prices across different styles and check CouponsBit for a SHEIN discount code before checkout.
            </p>

            <h4 className="text-lg font-black text-black mt-4">SHEIN Curve & Plus-Size Fashion</h4>
            <p>
              SHEIN's U.S. marketplace includes a Curve category with clothing designed for shoppers looking for extended sizing and different fits.
            </p>
            <p>
              From casual tops and dresses to vacation outfits and everyday separates, shoppers can explore a broad selection while comparing current prices and available SHEIN deals.
            </p>

            <h4 className="text-lg font-black text-black mt-4">SHEIN Beauty & Health Deals</h4>
            <p>
              SHEIN's Beauty & Health category includes makeup, beauty tools, nail products, eyelashes, hair accessories, fragrances, personal care products, and other beauty-related items.
            </p>
            <p>
              If you're building a beauty haul, compare individual product prices and look for applicable promotions before completing your order.
            </p>

            <h4 className="text-lg font-black text-black mt-4">SHEIN Home & Living Deals</h4>
            <p>
              SHEIN isn't limited to clothing. Its U.S. marketplace also features home and living products, home textiles, storage solutions, décor, kitchen-related products, and other household items.
            </p>
            <p>
              This makes it possible to shop for fashion and home products in the same order while looking for opportunities to save.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              SHEIN First Order Coupon & New User Savings
            </h3>
            <p>
              New customers may be eligible for a SHEIN first order coupon. SHEIN's U.S. first-order guidance currently describes a welcome offer for new customers, with the promotion subject to specific requirements, including a minimum purchase and a limited redemption period.
            </p>

            <h4 className="text-lg font-black text-black mt-4">SHEIN New User Promo Code</h4>
            <p>
              New shoppers should check their account, shopping bag, and available promotions after registration. SHEIN states that coupons may be offered when a new user registers and may also be made available through the homepage, app, promotional pop-ups, or other campaigns.
            </p>
            <p>
              If you're placing your first SHEIN order, checking for a SHEIN new user promo code can be one of the easiest ways to look for an introductory discount.
            </p>
          </div>

          {/* Numbered Steps Block */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">
              How to Use a SHEIN Coupon Code
            </h3>
            <div className="space-y-6">
              {[
                "Step 1: Find a SHEIN Coupon Code — Visit CouponsBit and browse the latest SHEIN coupons, promo codes, and discount offers.",
                "Step 2: Choose Your SHEIN Deal — Select an offer that matches your purchase and review its terms, including minimum spend and eligible products.",
                "Step 3: Copy the SHEIN Promo Code — Reveal the applicable SHEIN promo code and copy it.",
                "Step 4: Shop on SHEIN — Visit SHEIN, browse the products you want, and add them to your shopping bag.",
                "Step 5: Apply Your SHEIN Discount Code — At checkout, enter your SHEIN discount code in the promo code field and apply it. SHEIN's official instructions confirm that valid promo codes are entered at checkout before completing payment.",
                "Step 6: Complete Your Order — Review your updated order total and complete your purchase once the discount has been applied.",
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
              Find the Latest SHEIN Coupon Codes & Deals
            </h3>
            <p>
              Whether you're looking for a new outfit, beauty essentials, home décor, kids' clothing, accessories, or everyday fashion, SHEIN offers a broad selection for U.S. shoppers.
            </p>
            <p>
              Before placing your order, check CouponsBit for the latest SHEIN coupon code, SHEIN promo code, SHEIN discount code, SHEIN first order coupon, SHEIN deals, and SHEIN sale offers.
            </p>
            <p>
              Compare the available promotions, check the eligibility requirements, and apply the offer that gives you the best value. With a quick coupon check before checkout, you can make your next SHEIN shopping trip more budget-friendly.
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
            SHEIN Coupon Code FAQs
          </h3>
          {[
            {
              q: "Does SHEIN Have Coupon Codes?",
              a: "Yes. SHEIN provides promotional coupons and promo codes through different channels and campaigns. Availability, eligibility, and expiration dates can vary.",
            },
            {
              q: "Where Can I Find a SHEIN Promo Code?",
              a: "You can check CouponsBit for available SHEIN promo codes, coupon offers, and discount deals before placing your order.",
            },
            {
              q: "How Do I Use a SHEIN Coupon Code?",
              a: "Add your products to your shopping bag, proceed to checkout, and enter your valid SHEIN coupon code in the promo code field. SHEIN allows one promo code per order.",
            },
            {
              q: "Does SHEIN Have a First Order Discount?",
              a: "SHEIN may provide a welcome offer to new customers. Its current U.S. first-order guidance describes a first-order voucher subject to conditions such as a minimum purchase, expiration period, and one-time use.",
            },
            {
              q: "Can I Use More Than One SHEIN Coupon Code?",
              a: "SHEIN's U.S. coupon policy states that only one coupon can be redeemed for a given order, so multiple coupons generally cannot be stacked together.",
            },
            {
              q: "Do SHEIN Coupon Codes Expire?",
              a: "Yes. SHEIN coupons have expiration dates, and expired coupons cannot be redeemed. Always check the expiration date and terms before using an offer.",
            },
            {
              q: "What Can I Buy at SHEIN?",
              a: "SHEIN's U.S. marketplace offers women's and men's clothing, Curve fashion, kids' products, shoes, accessories, beauty products, home and living items, sportswear, baby and maternity products, electronics, pet supplies, and more.",
            },
            {
              q: "Is CouponsBit Free to Use?",
              a: "Yes. CouponsBit is free to use. Shoppers can browse coupon codes, discounts, and promotional offers across fashion, beauty, technology, travel, entertainment, and other categories.",
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
            Popular SHEIN Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Women's Dresses",
              "Curve & Plus",
              "Men's Streetwear",
              "Beauty & Health",
              "SHEIN Promo Code",
              "First Order Coupon",
              "Home & Decor",
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
            Today's Top SHEIN Deals
          </h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div
                key={i}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  S
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
                  aria-label={`Shop SHEIN: ${deal.heading}`}
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
