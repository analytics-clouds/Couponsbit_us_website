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
  PiggyBank,FileText, Calendar,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Shirt,
  Baby,
  Sparkles,
  Droplet,
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
  { id: "d1", label: "SALE", heading: "Up to 30% OFF Almost Everything", sub: "Sitewide Sale" },
  { id: "d2", label: "KIDS", heading: "BOGO 50% OFF Abercrombie Kids", sub: "Buy One, Get One" },
  { id: "d3", label: "MEN", heading: "Denim Shirt Clearance – $39.99", sub: "Down from $75" },
  { id: "d4", label: "MEN", heading: "Vintage Graphic Tee – $24.99", sub: "Reduced from $45" },
  { id: "d5", label: "NEW", heading: "NFL Patriots Denim Shirt – $100", sub: "New Arrival" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Zara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp", dealText: "Verified Deals", href: "/stores/zara-discount-code" },
  { name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", dealText: "Verified Deals", href: "/stores/hm-promo-code" },
  { name: "Outfitr", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/outfitr-logo_hqk8kd.webp", dealText: "Up To 30% OFF", href: "/stores/outfitr-discount-code" },
  { name: "Macy's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp", dealText: "Up To 75% OFF", href: "/stores/macys-promo-code" },
  { name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", dealText: "Verified Deals", href: "/stores/old-navy-promo-code" },
  { name: "Fashion Nova", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/fashion-nova_cm1al3.webp", dealText: "Verified Deals", href: "/stores/fashion-nova-discount-code" },
];

const STORE_URL = "https://www.abercrombie.com/shop/wd";

export default function AbercrombieCouponsContent() {
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
              <span className="text-black font-extrabold">Abercrombie</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp" alt="Abercrombie" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Abercrombie</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(36.2k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save with the latest Abercrombie discount codes, promo code and deals. Get up to 30% OFF almost everything, BOGO 50% OFF at Abercrombie Kids, plus clearance savings on men’s and kids’ styles. Enjoy exclusive USA fashion offers and free shipping on qualifying orders.

                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "7", label: "Offers" },
                    { icon: Percent, val: "2.5k", label: "Deals" },
                    { icon: Users, val: "17M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp" alt="Abercrombie Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-3xl font-black text-black leading-tight">Abercrombie Discount Codes & Offers</h2>
        </div>

        {[
          { label: "SALE", value: "30% OFF", title: "Abercrombie Discount Code – Up to 30% OFF Almost Everything", desc: "Enjoy up to 30% OFF almost everything during the limited-time Abercrombie sale.", bullets: ["Shop savings across women's clothing, men's fashion, jeans, tops, dresses, and more.", "This online-only USA deal is available for a limited time.", "Don't miss the chance to refresh your wardrobe with Abercrombie styles at reduced prices."] },
          { label: "KIDS", value: "BOGO 50%", title: "Abercrombie Kids Discount code – Buy One, Get One 50% OFF", desc: "Shop Buy One, Get One 50% OFF on almost everything at Abercrombie Kids.", bullets: ["Find stylish deals across girls, boys, baby, and toddler collections.", "Stock up on everyday kids' clothing while saving on additional items.", "Available for Abercrombie shoppers in the USA for a limited time."] },
          { label: "MEN", value: "CLEARANCE", title: "Abercrombie Men Discount Code – 100% Cotton Denim Shirt Clearance", desc: "Get the A&F Archive 100% Cotton Short-Sleeve Denim Button-Up Shirt for $39.99, down from $75.", bullets: ["Save approximately 47% OFF during the Abercrombie men's clearance sale.", "Features a versatile 100% cotton denim design for casual everyday outfits.", "Shop this Abercrombie USA men's clearance deal while sizes last."] },
          { label: "MEN", value: "CLEARANCE", title: "Abercrombie Men – Vintage Graphic Tee Clearance", desc: "Get the 100% Cotton Fallout Vintage-Inspired Graphic Tee for $24.99, reduced from $45.", bullets: ["Save approximately 44% OFF on this men's clearance style.", "Made with 100% cotton and featuring a vintage-inspired graphic design.", "A great Abercrombie USA deal for casual and everyday men's fashion."] },
          { label: "NEW", value: "NFL", title: "Abercrombie – New England Patriots Denim Button-Up Shirt", desc: "Shop the NFL by Abercrombie New England Patriots Denim Button-Up Shirt for $100.", bullets: ["Made from 100% cotton for a comfortable and versatile fit.", "Part of the new NFL collection launched for the kickoff season.", "A stylish USA sports-inspired addition for New England Patriots fans."] },
          { label: "KIDS", value: "CLEARANCE", title: "Abercrombie Kids – Lace Mini Skort Clearance", desc: "Get the Lace Mini Skort for just $18.99, down from $34.95.", bullets: ["Save approximately 46% OFF on this Abercrombie Kids clearance style.", "A versatile fashion piece that can be styled for casual and everyday looks.", "Shop the Abercrombie USA kids' clearance sale before stock runs out."] },
          { label: "SHIP", value: "FREE $99+", title: "Abercrombie – Free Standard Shipping on $99+", desc: "Get Free Standard Shipping and Handling on orders over $99.", bullets: ["Shop your favorite Abercrombie clothing and reach the minimum order value to qualify.", "Available on qualifying orders for Abercrombie customers in the USA.", "Save on delivery costs while shopping the latest men's, women's, and kids' styles."] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[110px] sm:w-[160px] bg-[#056bfa] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-2">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-[11px] font-bold text-white leading-tight">{c.label}</p>
                    <div className="text-base sm:text-2xl font-black text-white leading-none mt-2 whitespace-nowrap">{c.value}</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                  <div className="flex-1 px-4 sm:px-6 py-4 sm:py-6 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-red-100 text-red-700 text-[9px] sm:text-[11px] font-bold px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                      <span className="bg-green-100 text-green-700 text-[9px] sm:text-[11px] font-bold px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                    </div>
                    <h2 className="text-[17px] sm:text-[24px] font-extrabold text-[#061b3a] leading-snug">{c.title}</h2>
                    <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">{c.desc}</p>
                    <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-sm sm:text-base flex items-center gap-1">
                      View Details
                      <ChevronDown size={18} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                      <ul className="space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                        {c.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-[210px] flex items-center justify-center px-4 sm:px-5 py-4 sm:py-6">
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Abercrombie: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-xl sm:text-xl px-6 sm:px-10 py-3.5 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-xl mb-6">Find an Abercrombie Discount Code</h3>
          <p className="text-gray-600 font-bold text-base leading-relaxed mb-6 text-justify">
            An Abercrombie discount code can help shoppers look for savings when purchasing clothing, denim, accessories, or other products from the brand. Abercrombie regularly runs promotions connected to seasons, product categories, special shopping periods, and member benefits.
          </p>
          <p className="text-gray-600 font-bold text-base leading-relaxed mb-6 text-justify">
            Some offers may require a code at checkout, while others can be automatically reflected in the cart when the qualifying conditions are met. The exact terms can vary from one promotion to another.
          </p>
          <p className="text-gray-600 font-bold text-base leading-relaxed mb-6 text-justify">
            For example, an offer might apply to selected merchandise, require a qualifying purchase, exclude certain products, or be available only during a specified promotional period. Always review the conditions associated with an offer before relying on it.
          </p>
          <p className="text-gray-600 font-bold text-base leading-relaxed mb-6 text-justify">
            If you are planning an Abercrombie order, check CouponsBit first to see whether there is a current Abercrombie coupon code, discount offer, or other promotion that fits your purchase.
          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-base flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-xl mb-6">Top Categories</h3>
          <div className="space-y-1">
            {[
              { icon: Shirt, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
              { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
              { icon: Baby, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
              { icon: Droplet, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
              { icon: Search, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
            ].map((cat, i) => (
              <Link key={i} href={cat.href} className="flex items-center justify-between py-3.5 border-b border-[#f0f0f0] last:border-0 group cursor-pointer">
                <div className="flex items-center gap-3">
                  <cat.icon className={cn("w-5 h-5", cat.color)} />
                  <span className="text-gray-700 font-bold text-base group-hover:text-black transition-colors">{cat.name}</span>
                </div>
                <span className="bg-[#e8f6f8] text-[#0451c4] px-3 py-1 rounded-full text-xs sm:text-sm font-black">{cat.count} Coupons</span>
              </Link>
            ))}
          </div>
          <Link href="/categories" className="block mt-6 text-[#056bfa] font-black text-xs uppercase tracking-widest hover:underline">View All Categories →</Link>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-xl mb-8">
            How to Get the Best Abercrombie Deals
          </h3>
          <div className="space-y-8">
            {[
              {
                icon: Tag,
                title: "Check CouponsBit Before Checkout",
                sub: "Before completing your Abercrombie order, visit CouponsBit and check the latest available discount codes, coupon offers, promo codes, vouchers, and deals."
              },
              {
                icon: Percent,
                title: "Browse the Sale Section",
                sub: "A product that is already discounted may sometimes offer better value than purchasing full-price merchandise with a separate code. Check Abercrombie's sale selection before making a final decision."
              },
              {
                icon: Calendar,
                title: "Shop During Major US Sales",
                sub: "If your purchase can wait, major US shopping events such as Black Friday, Cyber Monday, back-to-school season, Memorial Day, Labor Day, and end-of-season sales can be useful periods to monitor."
              },
              {
                icon: ShoppingBag,
                title: "Build Your Cart Carefully",
                sub: "If a promotion requires a minimum qualifying purchase, make sure you understand what counts toward that threshold. Adding an unnecessary item just to activate a promotion does not always result in a better overall deal."
              },
              {
                icon: FileText,
                title: "Check the Offer Terms",
                sub: "An offer can have exclusions involving categories, products, sale merchandise, or other conditions. Reading the terms before checkout can prevent surprises when you try to apply an Abercrombie promotional code."
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start text-justify">
                <div className="w-11 h-11 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-black font-black text-base leading-tight mb-2">
                    {item.title}
                  </p>
                  <p className="text-gray-600 font-medium text-xs sm:text-sm leading-relaxed">
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
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Abercrombie Discount Code, Coupon Code & Promo Offers
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
            Up to 30% OFF Almost Everything
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 30% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Limited-time, online-only deal
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Women's &amp; men's fashion, jeans, tops, dresses
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Abercrombie Kids BOGO 50% OFF
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Buy 1, Get 1 50% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Limited-time offer on select styles
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Girls, boys, baby, &amp; toddler collections
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            100% Cotton Denim Shirt Clearance
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $39.99 <span className="text-xs text-gray-400 font-normal line-through">$75</span> (~47% OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Clearance deal, while sizes last
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            A&amp;F Archive Short-Sleeve Denim Button-Up
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Vintage Graphic Tee Clearance
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $24.99 <span className="text-xs text-gray-400 font-normal line-through">$45</span> (~44% OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Clearance deal, limited time
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Fallout Vintage-Inspired Graphic Tee
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            New England Patriots Denim Shirt
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $100
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            New NFL collection launch
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            NFL by Abercrombie Patriots Denim Shirt
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Abercrombie Kids Lace Mini Skort
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $18.99 <span className="text-xs text-gray-400 font-normal line-through">$34.95</span> (~46% OFF)
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Kids clearance, before stock runs out
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Abercrombie Kids Lace Mini Skort
          </td>
        </tr>
        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Free Standard Shipping
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            FREE Shipping
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            USA Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Minimum order value of $99+
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Qualifying men's, women's, &amp; kids' orders
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Abercrombie & Fitch is a well-known American fashion retailer offering modern clothing, denim, dresses, activewear, swimwear, outerwear, accessories, and fragrances for women and men. The brand is particularly recognized for its elevated casual style, extensive denim collection, occasion-ready clothing, and wardrobe essentials designed around contemporary fits and silhouettes.
          </p>
          <p>
            Whether you are searching for a new pair of jeans, putting together an outfit for a special occasion, updating your everyday wardrobe, or looking for seasonal fashion, Abercrombie offers a wide range of options. Before completing your order, checking for an Abercrombie discount code on CouponsBit can help you discover potential savings.
          </p>
          <p>
            CouponsBit brings together available coupon codes, promo codes, vouchers, sales, and other promotional opportunities so shoppers can check their options before purchasing. Since Abercrombie promotions can change throughout the year, taking a moment to review the latest offers can be worthwhile.
          </p>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Abercrombie Coupon Code and Promo Offers</h3>
    <p>
      Looking for an Abercrombie coupon code is only one part of finding the best available savings. The retailer can use different promotional formats throughout the year, meaning the most useful offer will depend on what you are purchasing.
    </p>
    <p>
      A promotion may focus on a particular category, provide savings across eligible merchandise, or offer a special incentive around a major shopping event. Some offers may also be connected to Abercrombie's loyalty program.
    </p>
    <p className="font-medium text-gray-700">
      Rather than adding a keyword-heavy list of promotion types, think of it this way: when you visit Couponsbit, you can check whether there is an Abercrombie promo code, voucher, sale offer, or other current deal that matches the products in your cart.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Shop Women's Fashion at Abercrombie</h3>
    <p>
      Abercrombie's women's collection covers everything from everyday basics to occasion-ready pieces. Shoppers can browse jeans, pants, dresses, tops, sweaters, skirts, shorts, activewear, swimwear, jackets, coats, loungewear, shoes, accessories, and more.
    </p>
    <p>
      The brand's assortment makes it possible to build an entire wardrobe around different occasions and seasons.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Abercrombie Jeans and Denim</h4>
    <p>
      Denim is one of Abercrombie's most prominent categories. Shoppers can explore different fits, rises, washes, lengths, and silhouettes designed for different preferences.
    </p>
    <p>
      Women's denim can include straight-leg, wide-leg, flare, bootcut, skinny, relaxed, baggy, and other contemporary styles. The selection also extends beyond jeans to denim skirts, shorts, jackets, and other pieces.
    </p>
    <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
      If you are shopping for multiple pairs or refreshing your denim collection, checking for an Abercrombie discount code before checkout can be particularly useful.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Dresses</h4>
    <p>
      Abercrombie offers dresses for casual days, vacations, work, parties, weddings, date nights, and other occasions. Depending on the season, shoppers may find mini, midi, maxi, slip, sweater, linen, denim, and other dress styles.
    </p>
    <p>
      For shoppers looking for occasionwear, checking both the current sale selection and any available Abercrombie promotional offer can help identify potential savings.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Tops and Shirts</h4>
    <p>
      The women's collection includes T-shirts, bodysuits, blouses, button-down shirts, tanks, sweaters, cardigans, sweatshirts, and other tops.
    </p>
    <p>
      These pieces can be combined with Abercrombie denim, trousers, skirts, or shorts to create casual, smart-casual, or more polished outfits.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Pants and Trousers</h4>
    <p>
      Abercrombie's selection extends beyond denim with trousers, tailored pants, wide-leg pants, cargo styles, linen pants, leggings, and other bottoms. This gives shoppers options for workwear, travel, everyday outfits, and seasonal dressing.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Activewear</h4>
    <p>
      For shoppers with active lifestyles, Abercrombie offers performance-inspired clothing including leggings, active tops, sports bras, shorts, sweatshirts, and other workout-friendly pieces.
    </p>
    <p>
      Some activewear products may be included in category-specific sales or promotions, so check the current offers before purchasing.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Swimwear</h4>
    <p>
      Abercrombie also offers swimwear for vacations, beach days, pool trips, and warm-weather travel. Shoppers can find bikinis, one-piece swimsuits, cover-ups, and coordinating pieces depending on the current collection.
    </p>
  </div>

  <div className="space-y-4">
    <h4 className="text-lg font-bold text-gray-900">Outerwear</h4>
    <p>
      Jackets and coats form another part of the Abercrombie assortment. Seasonal options can include denim jackets, leather-inspired jackets, blazers, puffer styles, trench coats, wool-inspired coats, and other outerwear.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Abercrombie Men's Clothing</h3>
    <p>
      Abercrombie's men's collection includes denim, pants, shorts, T-shirts, shirts, polos, sweaters, sweatshirts, jackets, outerwear, activewear, swimwear, underwear, shoes, accessories, and fragrances.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Men's Jeans</h5>
        <p className="text-sm">Choose from straight, athletic, relaxed, slim, and contemporary fit silhouettes.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Shirts & Tops</h5>
        <p className="text-sm">Everyday T-shirts, graphic tees, button-downs, polos, hoodies, and sweaters.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Pants & Shorts</h5>
        <p className="text-sm">Chinos, tailored trousers, cargos, casual sweatpants, and seasonal shorts.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Men's Swimwear</h5>
        <p className="text-sm">Swim trunks and warm-weather essentials for travel and vacation wardrobes.</p>
      </div>
    </div>
    <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
      If you are buying several pieces, check for an Abercrombie coupon code before completing your order to see whether an applicable promotion is available.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Abercrombie Activewear</h3>
    <p>
      Abercrombie has expanded its offering beyond traditional casual fashion with activewear designed for workouts, movement, travel, and everyday wear.
    </p>
    <p>
      Shoppers can find leggings, performance tops, sports bras, shorts, sweatshirts, and other athletic-inspired pieces. The category can be particularly useful for customers who prefer clothing that works across both fitness and casual settings.
    </p>
    <p>
      Before purchasing activewear, check whether there is a current category promotion or Abercrombie promo code available for your order.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Abercrombie Accessories</h3>
    <p>
      Accessories can help complete an outfit, and Abercrombie's selection includes items such as bags, belts, hats, sunglasses, jewelry, socks, hair accessories, and other fashion essentials.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      A smaller accessory purchase may not always qualify for the same promotions as clothing, so check the specific terms of any offer before applying a code.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Abercrombie Fragrances</h3>
    <p>
      Abercrombie is also associated with fragrances, giving shoppers another way to explore the brand beyond clothing. Fragrance collections can include perfumes, colognes, body products, and giftable items depending on the current assortment.
    </p>
    <p>
      Fragrance products may have different promotional conditions from apparel, so always check whether a particular Abercrombie voucher or discount offer includes beauty and fragrance merchandise.
    </p>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Abercrombie Sale vs. Discount Code: Which Should You Use?</h3>
            <p>
              Finding a discount code does not automatically mean it will provide the best value.
            </p>
            <p>
              Suppose an item is already marked down during an Abercrombie sale. A separate promotional code may or may not apply to that product. Alternatively, a broader discount could be more useful if you are purchasing full-price merchandise.
            </p>
            <p>
              The best approach is to compare the available options against your actual shopping cart.
            </p>
            <p>Check:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Which products qualify</li>
              <li>Whether sale items are included</li>
              <li>Whether a minimum purchase is required</li>
              <li>Whether the offer has an expiration date</li>
              <li>Whether multiple promotions can be combined</li>
              <li>Whether the promotion applies to your selected category</li>
            </ul>
            <p>
              This simple comparison can help you avoid choosing an offer simply because its headline discount sounds larger.
            </p>
          </div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use an Abercrombie Discount Code</h3>
            <p className="text-gray-700 font-bold mb-6">
              If you find an Abercrombie discount code through CouponsBit, you can generally use it by following these steps:
            </p>
            <div className="space-y-6">
              {[
                "Select the Abercrombie offer you want to use from CouponsBit’s website.",
                "Visit the Abercrombie website through the relevant offer.",
                "Browse the clothing, accessories, fragrance, or other products you want.",
                "Add eligible items to your shopping bag.",
                "Proceed to checkout.",
                "Enter the applicable discount code in the promotional-code field.",
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
              If the code does not work, check its expiration date and terms. It may be restricted to certain products, require a minimum purchase, or have other eligibility conditions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Abercrombie Offers?</h3>
            <p>
              CouponsBit is built around a simple idea: shoppers should have an opportunity to check for savings before completing an online purchase.
            </p>
            <p>
              When you search for an Abercrombie discount code, you may find that several types of offers are available. A coupon may suit one order, while a sale promotion, voucher, seasonal deal, or category-specific offer may work better for another.
            </p>
            <p>
              CouponsBit helps bring these possibilities together so you can compare available savings before heading to checkout.
            </p>
            <p>
              Whether you are shopping for Abercrombie jeans, dresses, activewear, men's clothing, swimwear, accessories, or fragrances, checking for a current promotion can be a useful final step before purchasing.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Abercrombie Order</h3>
            <p>
              Abercrombie offers much more than everyday clothing. From its extensive denim range and women's dresses to men's essentials, activewear, swimwear, outerwear, accessories, and fragrances, the brand provides options for different wardrobes, seasons, and occasions.
            </p>
            <p>
              Promotions can change throughout the year, so it is worth checking for current savings before completing your order. Whether you are shopping during a major US retail event, browsing an end-of-season sale, or simply looking for a better deal on your next pair of jeans, start by checking CouponsBit for an Abercrombie discount code.
            </p>
            <p>
              Compare the available offer with your cart, review the terms, and choose the promotion that makes the most sense for your purchase.
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Abercrombie Discount Codes</h3>
          {[
            { q: "Does Abercrombie offer discount codes?", a: "Yes. Abercrombie runs promotional campaigns throughout the year, and some offers may involve discount codes while others may be automatically applied or connected to specific products, categories, or shopping events." },
            { q: "Where can I find an Abercrombie discount code?", a: "You can check CouponsBit for available Abercrombie discount codes, coupon codes, promo codes, vouchers, sales, and other promotional offers before shopping." },
            { q: "How do I use an Abercrombie coupon code?", a: "Add your eligible products to your shopping bag, proceed to checkout, enter the applicable code in the promotional field, and apply it. Check your order total to make sure the promotion has been accepted before completing the purchase." },
            { q: "Why is my Abercrombie promo code not working?", a: "A code may have expired or may only apply to selected merchandise. Other possible restrictions can include minimum purchase requirements, excluded products, or limitations on combining promotions. Check the individual offer's terms before trying again." },
            { q: "Can I use an Abercrombie discount code on sale items?", a: "This depends on the specific promotion. Some codes may apply only to eligible full-price merchandise, while others may include selected sale products. Always check the conditions of the offer." },
            { q: "Does Abercrombie have sales?", a: "Yes. Abercrombie runs seasonal and promotional sales throughout the year. Shoppers can also encounter markdowns around major US shopping periods and during end-of-season campaigns." },
            { q: "When does Abercrombie have its biggest sales?", a: "There is no single permanent biggest sale because promotions change from year to year. Black Friday, Cyber Monday, holiday shopping, end-of-season periods, and major seasonal transitions are useful times to watch for larger promotional campaigns." },
            { q: "Does Abercrombie sell men's clothing?", a: "Yes. Abercrombie has men's collections covering jeans, pants, shirts, T-shirts, sweaters, outerwear, activewear, swimwear, underwear, shoes, accessories, and fragrances." },
            { q: "Does Abercrombie sell activewear?", a: "Yes. The brand offers women's and men's activewear, including leggings, athletic tops, sports bras, shorts, sweatshirts, and other active-inspired clothing." },
            { q: "Does Abercrombie offer fragrances?", a: "Yes. Abercrombie offers fragrances and related products alongside its fashion collections. Availability and assortment can vary." },
            { q: "How can I save more when shopping at Abercrombie?", a: "Start by checking CouponsBit for an Abercrombie discount code, then compare it with the current sale selection and any other applicable promotional offers. Check the terms carefully to determine which option provides the best value for your particular order." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Abercrombie Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Denim Deals", "Dresses", "Activewear", "Abercrombie Discount Code", "Men's Apparel", "Swimwear", "Fragrances", "Clearance"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Abercrombie Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">A</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Abercrombie: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
