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
  ExternalLink,FileText, Calendar,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Shirt,
  Home,
  Scissors,
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
  { id: "d1", label: "SALE", heading: "Up to 70% OFF Fine Jewellery", sub: "Spend $1,500+" },
  { id: "d2", label: "SALE", heading: "Up to 70% OFF Clearance Styles", sub: "New Markdowns Fridays" },
  { id: "d3", label: "SALE", heading: "50% OFF on $325+ Purchases", sub: "Eligible Styles" },
  { id: "d4", label: "SALE", heading: "Up to 60% OFF Fine Jewelry", sub: "Spend $800+" },
  { id: "d5", label: "B2S", heading: "Back-to-School Sale – Up to $500 OFF", sub: "Last Day" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Macy's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp", dealText: "Up To 75% OFF", href: "/stores/macys-promo-code" },
  { name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", dealText: "Up To 50% OFF", href: "/stores/old-navy-promo-code" },
  { name: "Zara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp", dealText: "Up To 80% OFF", href: "/stores/zara-discount-code" },
  { name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", dealText: "Up To 77% OFF", href: "/stores/hm-promo-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
];

const STORE_URL = "https://www.jcpenney.com/";

export default function JcpenneyCouponsContent() {
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
              <span className="text-black font-extrabold">JCPenney</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787639269/jcpenny-logo_kra7ur.webp" alt="JCPenney" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">JCPenney</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(31.2k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified JCPenney discount codes and coupon codes for Sep 2026. Save up to 70% on fine jewelry and clearance, enjoy up to $500 OFF Back-to-School deals, shop fall fashion, Levi's apparel, footwear, women's clothing, home essentials, and more.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "17", label: "Offers" },
                    { icon: Percent, val: "2.3k", label: "Deals" },
                    { icon: Users, val: "9M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787639269/jcpenny-logo_kra7ur.webp" alt="JCPenney Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">JCPenney Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "70% OFF", title: "JCPenney Discount Code – Up to 70% OFF Fine Jewellery", desc: "Shop Fine Jewelry online only and get up to 70% OFF when you spend $1,500 or more.", bullets: ["Enjoy bigger savings with the Buy More, Save More promotion.", "This USA offer is available online only on eligible fine jewelry styles.", "Use the JCPenney discount code at checkout where applicable and save more."] },
                  { label: "SALE", value: "70% OFF", title: "JCPenney Discount Code – Up to 70% OFF Clearance Styles", desc: "Save up to 70% OFF on select clearance products at JCPenney.", bullets: ["Shop the Clearance – Shop All Products collection for marked-down styles.", "Enjoy new markdowns added every Friday on selected products.", "Use an eligible JCPenney discount code where applicable; some items are coupon excluded."] },
                  { label: "SALE", value: "50% OFF", title: "JCPenney Sale – 50% OFF on $325+ Purchases", desc: "Enjoy 50% OFF on eligible styles when you spend $325 or more.", bullets: ["Unlock bigger savings on qualifying JCPenney purchases.", "Shop selected fashion and lifestyle products at discounted prices.", "Check offer terms and exclusions before placing your order."] },
                  { label: "SALE", value: "60% OFF", title: "JCPenney Discount Code – Up to 60% OFF Fine Jewelry", desc: "Get up to 60% OFF Fine Jewelry when you spend $800 or more.", bullets: ["Save more with the Buy More, Save More online-only promotion.", "Shop eligible jewelry styles available through JCPenney USA.", "Apply a valid JCPenney discount code at checkout where eligible."] },
                  { label: "B2S", value: "$500 OFF", title: "JCPenney Back-to-School Sale – Up to $500 OFF", desc: "Last Day! Shop the JCPenney Back-to-School collection.", bullets: ["Save up to $500 OFF on select eligible styles.", "Find fashion and essentials for the new school season.", "Shop this limited-time USA deal before it ends."] },
                  { label: "SALE", value: "43% OFF", title: "JCPenney Sale – St. John's Bay Blouse 43% OFF", desc: "Shop the St. John's Bay Women's Split Tie Neck 3/4 Sleeve Blouse for just $24.99.", bullets: ["Save 43% OFF the original $44 price.", "Explore more stylish women's apparel from the St. John's Bay collection.", "Grab this JCPenney USA sale while the discounted price lasts."] },
                  { label: "SALE", value: "50% OFF", title: "JCPenney Sale – Up to 50% OFF Fall Styles", desc: "Get up to 50% OFF selected fall styles at JCPenney.", bullets: ["Shop seasonal fashion and refresh your wardrobe for the upcoming fall season.", "Discover selected apparel and fashion picks at special sale prices.", "Shop the JCPenney USA sale while the offer lasts."] },
                  { label: "SHOP", value: "$18", title: "JCPenney Women's Tops Sale – From $18", desc: "Shop Women's Tops from just $18 at JCPenney.", bullets: ["Discover stylish tops for everyday wear and seasonal outfits.", "Refresh your wardrobe with affordable women's fashion.", "Shop selected tops at special USA sale prices."] },
                  { label: "SALE", value: "$14.99", title: "JCPenney Hairspray Sale – From $14.99", desc: "Shop the Semi-Annual Hairspray Sale at JCPenney.", bullets: ["Choose from 100+ hairsprays and styling products on sale.", "Selected products start from just $14.99.", "Sale ends October 4 on eligible hair styling products."] },
                  { label: "SHOP", value: "$23", title: "JCPenney Women's Jeans Sale – From $23", desc: "Shop Women's Jeans from $23 during the JCPenney sale.", bullets: ["Explore a variety of fits and styles for everyday wear.", "Find denim options for casual and stylish looks.", "Shop online in the USA while sale prices last."] },
                  { label: "SHOP", value: "$32", title: "JCPenney Women's Dresses Sale – From $32", desc: "Find Women's Dresses from $32 at JCPenney.", bullets: ["Shop dresses for casual outings, occasions, and everyday styling.", "Explore selected designs at affordable sale prices.", "Grab your favourite styles before the offer ends."] },
                  { label: "SHOP", value: "$31", title: "JCPenney Women's Pants Sale – From $31", desc: "Shop Women's Pants from $31 at JCPenney.", bullets: ["Find versatile styles for workwear, casual outfits, and everyday looks.", "Save on selected women's pants at special sale prices.", "Shop the latest JCPenney USA fashion deals online."] },
                  { label: "SHOP", value: "$31", title: "JCPenney Women's Dress Shoes Sale – From $31", desc: "Shop Women's Dress Shoes from $31 during the JCPenney sale.", bullets: ["Discover footwear for office looks, special occasions, and everyday wear.", "Choose from selected dress shoe styles at discounted prices.", "Shop the JCPenney USA footwear sale while stocks last."] },
                  { label: "SALE", value: "45% OFF", title: "JCPenney Women's Cowboy Boots – 45% OFF", desc: "Shop the Pop Women's Ellary Block Heel Cowboy Boots for $54.99.", bullets: ["Save 45% OFF the original $100 price.", "Add a stylish western-inspired touch to your wardrobe.", "Grab this JCPenney footwear deal while the sale price lasts."] },
                  { label: "SALE", value: "33% OFF", title: "JCPenney Women's Sneakers – 33% OFF", desc: "Shop the Shu by Shu Shop Samira Women's Sneakers for $59.99.", bullets: ["Save 33% OFF the original $90 price.", "Enjoy a stylish option for casual everyday outfits.", "Shop this JCPenney USA footwear deal while available."] },
                  { label: "HOME", value: "50%+30%", title: "JCPenney Home Sale – Up to 50% + Extra 30% OFF", desc: "Shop the JCPenney Labor Day Home Sale and save up to 50% + an extra 30% OFF.", bullets: ["Get additional savings on select home styles with a discount code.", "Refresh your home with eligible furniture, décor, bedding, and more.", "Offer ends September 13; check terms and exclusions before purchase."] },
                  { label: "SALE", value: "30% OFF", title: "JCPenney Levi's Sale – Up to 30% OFF", desc: "Shop Levi's women's and men's apparel with up to 30% OFF selected styles.", bullets: ["Discover popular Levi's fashion picks at JCPenney.", "Refresh your wardrobe with discounted Levi's apparel.", "Additional offers, discount codes, and coupons do not apply to Levi's."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[12px] sm:text-[15px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[15px] sm:text-2xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop JCPenney: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">JCPenney Rewards and Membership Savings</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    JCPenney offers loyalty-related benefits through its rewards program. Depending on the current program terms, members may receive benefits associated with purchases, special promotions, or other rewards.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For frequent shoppers, checking membership benefits alongside a JCPenney coupon code can be useful. The best option may depend on the products in your cart and the specific promotion available at the time.

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
                        { icon: Home, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Sparkles, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
    How to Find the Best JCPenney Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Checkout",
        sub: "Before completing your order, check CouponsBit for the latest JCPenney coupon code, promo code, discount offer, voucher, and other available deals."
      },
      {
        icon: Percent,
        title: "Compare Coupons With Sale Prices",
        sub: "A coupon is not always the best option. If an item is already heavily discounted, compare the sale price with any available coupon to determine which provides better overall value."
      },
      {
        icon: Calendar,
        title: "Shop During Major US Sales",
        sub: "Black Friday, Cyber Monday, Memorial Day, Labor Day, back-to-school season, and end-of-season periods can all be useful times to monitor JCPenney promotions."
      },
      {
        icon: Sparkles,
        title: "Check Clearance",
        sub: "Clearance sections can offer additional savings on products that are being phased out or replaced with newer inventory."
      },
      {
        icon: ShoppingBag,
        title: "Plan Larger Purchases Around Promotions",
        sub: "If you need several clothing pieces or home products, consider waiting for a suitable promotion when possible. A qualifying offer may provide greater value on a larger eligible purchase."
      },
      {
        icon: FileText,
        title: "Read the Terms",
        sub: "Always check the details of a coupon before using it. Some offers can exclude certain brands, categories, clearance products, or services."
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
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          JCPenney Coupon Code, Promo Code & Discount Offers
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            JCPenney is a long-established American department store offering fashion, beauty, home essentials, jewelry, accessories, and everyday products for the whole family. From women's and men's clothing to kids' apparel, footwear, bedding, furniture, appliances, beauty products, and seasonal merchandise, JCPenney gives shoppers plenty of options for refreshing their wardrobe or home.
          </p>
          <p>
            If you are planning to shop at JCPenney, checking for a JCPenney coupon code before placing your order can be a useful way to look for savings. CouponsBit helps shoppers find current coupon codes, promo codes, discount offers, vouchers, sales, and other promotional opportunities so they can compare available deals before checkout.
          </p>
          <p>
            JCPenney also runs different types of promotions throughout the year, from seasonal sales and clearance events to holiday campaigns, beauty offers, back-to-school promotions, and special shopping events. Because offers can change frequently, checking the latest savings before purchasing can help you make a better shopping decision.
          </p>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Find a JCPenney Coupon Code</h3>
    <p>
      A JCPenney coupon code can help shoppers save on eligible purchases across selected categories. Depending on the promotion, an offer may apply to clothing, shoes, accessories, home products, beauty items, or other merchandise.
    </p>
    <p>
      JCPenney promotions can work in different ways. Some offers require a code during checkout, while others may be automatically reflected in the price or apply to selected merchandise.
    </p>
    <p>
      The eligibility of a coupon can also vary. Certain promotions may require a minimum purchase, apply only to specific categories, exclude clearance merchandise, or have other conditions.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      Before completing your order, check the details of the available offer to determine whether it matches your shopping cart.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">JCPenney Promo Code and Discount Offers</h3>
    <p>
      When looking for a JCPenney promo code, it is worth comparing different types of savings instead of focusing on one particular offer.
    </p>
    <p>
      For example, a percentage-based promotion may be useful when purchasing several full-price items, while a category-specific offer may be better for beauty, home products, or selected apparel. A clearance markdown can also provide significant savings without requiring a promotional code.
    </p>
    <p className="font-medium text-gray-700">
      CouponsBit brings these opportunities together so shoppers can check for a JCPenney coupon, discount offer, voucher, sale, or other promotion before placing an order.
    </p>
    <p>
      The right deal ultimately depends on what you are buying, the current promotion, and the conditions attached to it.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Shop Women's Clothing at JCPenney</h3>
    <p>
      JCPenney offers a broad selection of women's fashion for different lifestyles, seasons, and occasions. Shoppers can browse dresses, tops, jeans, pants, skirts, sweaters, jackets, activewear, sleepwear, swimwear, lingerie, workwear, and other wardrobe essentials.
    </p>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Women's Dresses</h4>
      <p>
        The women's collection includes dresses suitable for everyday wear, work, vacations, parties, weddings, and other occasions. Depending on the season, shoppers may find casual dresses, maxi dresses, midi styles, occasionwear, sweater dresses, and other silhouettes.
      </p>
      <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
        If you are shopping for multiple pieces, check for a current JCPenney coupon code before completing your purchase.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Women's Tops</h5>
        <p className="text-sm">T-shirts, blouses, sweaters, cardigans, button-down shirts, tanks, tunics, and sweatshirts.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Jeans and Pants</h5>
        <p className="text-sm">Denim in various fits and washes, alongside trousers, leggings, cargos, and casual bottoms.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Activewear & Loungewear</h5>
        <p className="text-sm">Leggings, sweatshirts, joggers, sports tops, shorts, and comfortable basics for workouts or relaxation.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Women's Outerwear</h5>
        <p className="text-sm">Coats, jackets, blazers, vests, puffer styles, and trench coats for all weather conditions.</p>
      </div>
    </div>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Men's Clothing at JCPenney</h3>
    <p>
      JCPenney also offers men's clothing ranging from casual basics to workwear and occasion-ready pieces.
    </p>
    <p>
      Shoppers can find T-shirts, polo shirts, button-down shirts, sweaters, hoodies, jeans, chinos, dress pants, shorts, suits, blazers, jackets, outerwear, underwear, and other essentials.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Suits & Formalwear</h5>
        <p className="text-sm">Suits, dress shirts, ties, dress pants, and blazers for weddings, interviews, and business events.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Men's Casual Clothing</h5>
        <p className="text-sm">Jeans, T-shirts, polos, sweatshirts, sweaters, casual pants, and shorts for everyday wear.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Shoes & Accessories</h5>
        <p className="text-sm">Dress shoes, sneakers, belts, wallets, hats, and socks to complete any outfit.</p>
      </div>
    </div>

    <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
      If you are putting together a complete outfit, compare available promotions to see whether a JCPenney promo code can be used on your eligible items.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Kids' Clothing and Baby Essentials</h3>
    <p>
      JCPenney provides clothing and essentials for babies, toddlers, kids, and teens.
    </p>
    <p>
      Parents can shop for everyday outfits, school clothing, dresses, jeans, tops, pajamas, outerwear, shoes, accessories, and seasonal apparel.
    </p>
    <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
      The children's section can be particularly useful during back-to-school shopping, when families need to purchase several clothing items at once. Checking for a JCPenney discount code before a larger order may help identify a suitable promotion.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">JCPenney Shoes</h3>
    <p>
      JCPenney offers footwear for women, men, and children, with options ranging from casual shoes and sneakers to boots, sandals, flats, heels, dress shoes, and seasonal footwear.
    </p>
    <p>
      Shoppers can coordinate shoes with new clothing purchases or look for everyday footwear suitable for work, school, travel, or casual activities.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Jewelry and Accessories</h3>
    <p>
      JCPenney has a long-standing presence in jewelry, offering products such as rings, necklaces, earrings, bracelets, watches, and other accessories.
    </p>
    <p>
      Customers shopping for gifts or special occasions can explore jewelry collections alongside fashion accessories such as handbags, wallets, belts, sunglasses, scarves, and hats.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      Promotional eligibility can differ by category, so check the terms of a JCPenney coupon code before assuming it applies to jewelry or other accessories.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">JCPenney Beauty</h3>
    <p>
      Beauty is another significant part of JCPenney's retail offering. Depending on the current assortment, shoppers can browse makeup, skincare, haircare, fragrances, personal care products, and beauty tools.
    </p>
    <p>
      The retailer also features beauty brands and salon-related services, giving customers multiple ways to shop for personal-care essentials.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      Beauty promotions may have their own conditions, so compare the offer details before using a JCPenney voucher or coupon on these products.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">JCPenney Home Products</h3>
    <p>
      JCPenney is not limited to fashion. Its home assortment covers a wide range of products for bedrooms, bathrooms, kitchens, living spaces, and everyday household needs.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Bedding and Bath</h5>
        <p className="text-sm">Sheets, comforters, quilts, duvet covers, pillows, blankets, towels, and bath accessories.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Furniture</h5>
        <p className="text-sm">Furnishings for living rooms, bedrooms, and dining spaces including beds, dressers, tables, and seating.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Kitchen and Dining</h5>
        <p className="text-sm">Cookware, bakeware, kitchen tools, small appliances, dinnerware, glassware, and storage solutions.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Home Décor</h5>
        <p className="text-sm">Curtains, rugs, lighting, wall décor, decorative accents, and seasonal home accessories.</p>
      </div>
    </div>

    <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
      If you are planning a larger home refresh, checking for a JCPenney discount code before checkout can be worthwhile.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">JCPenney Appliances and Everyday Essentials</h3>
    <p>
      JCPenney can also be a destination for selected appliances and practical household products. Depending on availability, shoppers may find small appliances and other products designed for everyday use.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      As with other categories, check the promotion's eligibility before applying a coupon to appliances or larger purchases.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">JCPenney Sale and Clearance Offers</h3>
    <p>
      JCPenney uses several promotional strategies throughout the year, giving shoppers opportunities to find savings beyond standard coupon codes.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Clearance Sales</h5>
        <p className="text-sm">Marked-down inventory across clothing, shoes, accessories, home products, and beauty items.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Seasonal Sales</h5>
        <p className="text-sm">End-of-season discounts on winter coats, swimwear, and seasonal apparel transitions.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Back-to-School Sales</h5>
        <p className="text-sm">Promotional events covering kids' apparel, shoes, backpacks, accessories, and dorm essentials.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Black Friday & Cyber Monday</h5>
        <p className="text-sm">Major department store savings campaigns across fashion, home, electronics, and beauty.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Memorial Day & Labor Day Sales</h5>
        <p className="text-sm">Long-weekend promotions targeting apparel, home products, appliances, and seasonal goods.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Mother's Day & Father's Day</h5>
        <p className="text-sm">Gift-focused deals across jewelry, clothing, beauty, accessories, and home items.</p>
      </div>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Holiday and Christmas Sales</h4>
      <p>
        The holiday shopping season brings promotions across clothing, toys, beauty, jewelry, home products, gifts, and seasonal merchandise.
      </p>
      <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
        Customers preparing for Christmas can compare available offers with clearance and holiday promotions to find the most suitable savings opportunity.
      </p>
    </div>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a JCPenney Coupon Code</h3>
            <p className="text-gray-700 font-bold mb-6">
              If you find a JCPenney coupon code through CouponsBit, the general redemption process is straightforward:
            </p>
            <div className="space-y-6">
              {[
                "Visit CouponsBit’s website, check and select the JCPenney offer you want to use.",
                "Visit JCPenney through the relevant offer.",
                "Browse clothing, shoes, beauty products, home items, jewelry, or other merchandise.",
                "Add eligible products to your shopping bag.",
                "Proceed to checkout.",
                "Enter the coupon code in the applicable promotional field.",
                "Apply the code and review your updated order total.",
                "Complete your purchase after confirming that the promotion has been accepted.",
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
              If the coupon does not work, check its expiration date, product exclusions, minimum purchase requirements, and other conditions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for JCPenney Offers?</h3>
            <p>
              CouponsBit is designed to help shoppers check for savings before completing an online purchase.
            </p>
            <p>
              When you search for a JCPenney coupon code, you may find several different types of offers. One promotion might be useful for clothing, another for home products, and another for beauty or seasonal merchandise.
            </p>
            <p>
              Rather than assuming one offer is automatically the best, compare the available options with your actual shopping cart.
            </p>
            <p>
              CouponsBit brings together coupon codes, promo codes, vouchers, discount offers, sales, and other savings opportunities so customers can check their options before checkout.
            </p>
            <p>
              Whether you are buying a new outfit, refreshing your bedroom, shopping for children's clothing, purchasing beauty products, or looking for a gift, checking current JCPenney offers can be a useful final step.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next JCPenney Order</h3>
            <p>
              JCPenney gives shoppers a broad selection of products across fashion, beauty, jewelry, footwear, children's clothing, home furnishings, bedding, kitchen essentials, and seasonal merchandise.
            </p>
            <p>
              With promotions changing throughout the year, checking for savings before completing your order can be worthwhile. Whether you are shopping for a new wardrobe, preparing children for school, refreshing your home, or buying gifts for a special occasion, there may be several ways to reduce your overall spending.
            </p>
            <p>
              Before checkout, visit CouponsBit to look for the latest JCPenney coupon code, along with available promo codes, discount offers, vouchers, sales, and other deals. Compare the available options with your cart, review the terms, and choose the promotion that best fits your purchase.
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About JCPenney Coupon Codes</h3>
          {[
            { q: "Does JCPenney offer coupon codes?", a: "Yes. JCPenney regularly runs coupons and promotional campaigns across different categories. The exact offers and eligibility requirements can change." },
            { q: "Where can I find a JCPenney coupon code?", a: "You can check CouponsBit for current JCPenney coupon codes, promo codes, discount offers, vouchers, and other available deals before shopping." },
            { q: "How do I use a JCPenney coupon code?", a: "Add eligible products to your shopping bag, proceed to checkout, enter the applicable coupon code in the promotional field, and apply it. Check that the discount has been reflected before completing your order." },
            { q: "Why isn't my JCPenney coupon code working?", a: "The coupon may have expired or may not apply to the products in your cart. Other restrictions can include minimum purchase requirements, excluded brands, sale merchandise, or category limitations." },
            { q: "Can I use a JCPenney coupon code on clearance items?", a: "This depends on the individual offer. Some coupons may exclude clearance merchandise, while others may apply to selected markdowns. Always check the terms before purchasing." },
            { q: "Does JCPenney have clearance sales?", a: "Yes. JCPenney regularly marks down selected merchandise through clearance and seasonal markdowns. Availability can change as products sell out." },
            { q: "When does JCPenney have its biggest sales?", a: "Major US shopping events such as Black Friday and Cyber Monday are important promotional periods. Memorial Day, Labor Day, back-to-school season, holiday shopping, and end-of-season sales can also bring significant offers." },
            { q: "Does JCPenney sell women's clothing?", a: "Yes. JCPenney offers women's dresses, tops, jeans, pants, activewear, outerwear, sleepwear, swimwear, and other fashion categories." },
            { q: "Does JCPenney sell men's clothing?", a: "Yes. Men's merchandise includes casual clothing, jeans, shirts, sweaters, suits, formalwear, outerwear, underwear, footwear, and accessories." },
            { q: "Does JCPenney sell children's clothing?", a: "Yes. JCPenney carries clothing and related products for babies, toddlers, kids, and teens." },
            { q: "Can I shop for home products at JCPenney?", a: "Yes. JCPenney's home selection includes bedding, bath products, furniture, kitchen and dining items, décor, storage, and other household essentials." },
            { q: "Does JCPenney sell beauty products?", a: "Yes. Customers can shop for beauty products including makeup, skincare, haircare, fragrances, personal care items, and beauty tools, depending on the current assortment." },
            { q: "How can I save more at JCPenney?", a: "Start by checking CouponsBit for a current JCPenney coupon code, then compare it with sale prices, clearance offers, seasonal promotions, and eligible rewards benefits. Review the terms to determine which option offers the best value for your purchase." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular JCPenney Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Women's Apparel", "Home & Bedding", "JCP Rewards", "JCPenney Coupon Code", "Clearance Sale", "Jewelry & Beauty", "Men's Apparel", "Kids & Baby"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top JCPenney Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">J</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop JCPenney: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
