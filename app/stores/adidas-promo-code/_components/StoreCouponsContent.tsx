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
  CheckCircle,
  LayoutGrid,
  Search, Scale, Calendar, History, ShieldAlert, UserCheck,
  ShoppingBag,
  Shirt,
  Footprints,
  Award,
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
  { id: "d1", label: "DEAL", heading: "Adizero Control Running Short Leggings – 40% OFF", sub: "Latest Deals" },
  { id: "d2", label: "SALE", heading: "Extra 30% OFF Apparel Summer Sale", sub: "Featured Picks" },
  { id: "d3", label: "SALE", heading: "Up to 40% OFF Favorite Styles", sub: "Featured Picks" },
  { id: "d4", label: "NEW", heading: "JENNIE Superstar SQ Ballet Shoes for $130", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Samba OG C Shoes for $70", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Nike", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp", dealText: "Up To 60% OFF", href: "/stores/nike-discount-code" },
  { name: "Zara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp", dealText: "Up To 80% OFF", href: "/stores/zara-discount-code" },
  { name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", dealText: "Up To 77% OFF", href: "/stores/hm-promo-code" },
  { name: "Fashion Nova", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/fashion-nova_cm1al3.webp", dealText: "Up To 50% OFF", href: "/stores/fashion-nova-discount-code" },
  { name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", dealText: "Up To 50% OFF", href: "/stores/old-navy-promo-code" },
  { name: "Abercrombie", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp", dealText: "Up To 50% OFF", href: "/stores/abercrombie-discount-code" },
];

const STORE_URL = "https://www.adidas.com";

export default function AdidasCouponsContent() {
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
              <span className="text-black font-extrabold">Adidas</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788783181/adidas-logo_brulmo.webp" alt="Adidas" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Adidas</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-60" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(12.8k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                     Discover verified Adidas promo codes and Adidas discount codes at Maxiku Offers. Save up to 50% OFF clothing and footwear, enjoy an extra 30% OFF apparel with code EXTRA, get up to 40% OFF shoes, and shop new arrivals starting from just $15 across the USA.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "18", label: "Offers" },
                    { icon: Percent, val: "500+", label: "Deals" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788783181/adidas-logo_brulmo.webp" alt="Adidas Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Adidas Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "DEAL", value: "$78", title: "Adidas Adizero Control Running Short Leggings – 40% OFF", desc: "Get the women's Adizero Control Running Short Leggings for $78.", bullets: ["Save 40% from the original $130 price.", "Designed for running and active workouts with a performance-focused fit.", "Refresh your running wardrobe with this discounted adidas women's style."] },
                  { label: "SALE", value: "30% OFF", title: "Adidas – Extra 30% OFF Apparel Summer Sale", desc: "Use promo code EXTRA to get an additional 30% OFF full-price and sale apparel styles.", bullets: ["Refresh your wardrobe with adidas clothing, including hoodies, T-shirts, track jackets and sportswear.", "Shop seasonal styles for men, women and kids while upgrading your everyday and workout wardrobe.", "Limited-time USA summer sale offer available on eligible adidas apparel styles."] },
                  { label: "SALE", value: "40% OFF", title: "Adidas – Up to 40% OFF Favorite Styles", desc: "Grab up to 40% OFF selected adidas shoes, clothing and accessories across popular collections.", bullets: ["Shop trending adidas styles for men, women and kids at reduced prices.", "adiClub members can enjoy exclusive benefits and additional member savings on eligible purchases.", "Enjoy free returns and easy exchanges on qualifying adidas USA orders."] },
                  { label: "NEW", value: "$130", title: "adidas – JENNIE Superstar SQ Ballet Shoes for $130", desc: "Discover the adidas Originals by JENNIE Superstar SQ Ballet Shoes inspired by ballet-inspired movement and style.", bullets: ["Designed as part of the first adidas Originals collaboration with global icon JENNIE.", "Shop these women's Originals shoes for $130 in the USA.", "Add a distinctive ballet-inspired adidas style to your everyday sneaker collection."] },
                  { label: "DEAL", value: "$70", title: "adidas – Samba OG C Shoes for $70", desc: "Shop the classic adidas Samba OG C Shoes as part of the Back to School clothes and shoes collection.", bullets: ["Get these iconic adidas shoes for just $70 in the USA.", "Designed for an easy everyday style that pairs well with casual outfits.", "Perfect for refreshing your seasonal footwear collection with a classic adidas silhouette."] },
                  { label: "SALE", value: "50% OFF", title: "adidas Fall Refresh Sale – Up to 50% OFF", desc: "Save up to 50% OFF selected adidas styles for men, women and kids.", bullets: ["Discover seasonal clothing, footwear and everyday essentials for the whole family.", "Shop cozy layers, bold basics and fresh seasonal styles designed for comfort and everyday wear.", "Limited-time USA sale with selected products available at up to 50% OFF."] },
                  { label: "DEAL", value: "$60", title: "adidas Swift Run 1.0 Shoes – 25% OFF for $60", desc: "Save 25% on selected adidas Swift Run 1.0 sportswear sneakers.", bullets: ["Get the stylish everyday sneakers for just $60, reduced from the original $80.", "Enjoy a sporty design with comfortable cushioning for everyday movement.", "Shop this limited-time footwear offer while eligible sizes and styles are available."] },
                  { label: "DEAL", value: "$45", title: "adidas Minecraft Pro Shoes Children – 25% OFF", desc: "Get the adidas Minecraft Pro Shoes for children for just $45.", bullets: ["Save 25% compared with the original price of $60.", "Give kids a comfortable adidas style inspired by the popular Minecraft collection.", "A great pick for everyday wear, school outfits and active play."] },
                  { label: "DEAL", value: "$49", title: "adidas Lite Racer Adapt 8.0 Wide Shoes – 30% OFF", desc: "Shop the adidas Lite Racer Adapt 8.0 Wide Shoes for just $49.", bullets: ["Save 30% from the original $70 price.", "Enjoy a wide-fit design made for comfortable everyday movement.", "Ideal for casual wear, walking and everyday activities in the USA."] },
                  { label: "DEAL", value: "$46", title: "adidas Breaknet Sleek Shoes – 25% OFF", desc: "Get the adidas Breaknet Sleek Shoes for only $46.", bullets: ["Save 25% from the original price of $65.", "Enjoy a sleek, versatile adidas design that works well with everyday casual outfits.", "Shop this discounted footwear style while the offer is available."] },
                  { label: "DEAL", value: "$83", title: "adidas Campus 00s Shoes – 20% OFF", desc: "Shop the popular adidas Campus 00s Shoes for $83.", bullets: ["Save 20% compared with the original price of $110.", "Bring a classic adidas Originals-inspired look to your everyday wardrobe.", "A versatile sneaker option for casual outfits and everyday USA wear."] },
                  { label: "SALE", value: "30% OFF", title: "adidas Soccer Jerseys – Extra 30% OFF", desc: "Shop selected adidas soccer jerseys with an extra 30% OFF eligible styles.", bullets: ["Get ready for match days with authentic-inspired soccer apparel and team designs.", "Find jerseys for fans looking to represent their favorite national teams.", "Check eligible products for the additional 30% OFF offer in the USA."] },
                  { label: "DEAL", value: "$105", title: "adidas Argentina 26 Home Authentic Jersey – 30% OFF", desc: "Shop the Argentina 26 Home Authentic Jersey for $105.", bullets: ["Save 30% from the original $150 price.", "Show your support with the official-style Argentina home jersey from adidas.", "Perfect for soccer fans, match days and collecting the latest national-team apparel."] },
                  { label: "DEAL", value: "$84", title: "adidas Gazelle Bold Shoes – 30% OFF for $84", desc: "Grab the iconic adidas Gazelle Bold Shoes for just $84.", bullets: ["Save 30% from the original $120 price.", "Choose from multiple color options in this popular women's adidas Originals style.", "Enjoy a fashionable everyday sneaker designed for comfort and versatile styling."] },
                  { label: "NEW", value: "$15", title: "adidas New Arrivals – Styles Starting at $15", desc: "Discover new adidas arrivals starting at just $15 in the USA.", bullets: ["Find affordable essentials including socks, gloves, T-shirts and other seasonal accessories.", "Refresh your wardrobe with new adidas styles without stretching your budget.", "Shop limited-time deals while selected new arrivals remain available."] },
                  { label: "DEAL", value: "$75", title: "adidas Terrex Anylander Rain.Rdy Hiking Shoes – 10% OFF", desc: "Get the adidas Terrex Anylander Rain.Rdy Hiking Shoes for $75.", bullets: ["Save 10% from the original price of $85.", "Designed for men's outdoor adventures with Rain.Rdy technology for wet-weather conditions.", "A practical choice for hiking, walking and exploring during changing weather."] },
                  { label: "NEW", value: "$110", title: "adidas Pixar Toy Story Samba Jane Shoes – $110", desc: "Step into playful style with the adidas Pixar Toy Story Samba Jane Shoes.", bullets: ["Shop this women's ballet-inspired adidas style for $110.", "Combine classic adidas design with fun Toy Story-inspired details.", "A stylish choice for casual outfits, everyday wear and fans of the Pixar collection."] },
                  { label: "DEAL", value: "$56", title: "adidas Argentina 26 Home Jersey Kids – 30% OFF", desc: "Get the Argentina 26 Home Jersey for kids for just $56.", bullets: ["Save 30% from the original price of $80.", "Let young soccer fans show their Argentina pride with this adidas kids' jersey.", "Perfect for match days, soccer practice"] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Adidas: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">Find an adidas Promo Code</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                  An adidas promo code can provide savings on qualifying products or selected orders, depending on the terms of the promotion. Some offers may cover a particular category, while others can apply across eligible merchandise.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                  Promotions can also have specific conditions. A code might require a minimum purchase, exclude certain products, apply only to full-price merchandise, or have a limited redemption period.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                  That is why checking the details before using an offer is important. If you already know what you want to buy, compare the promotion with the products in your cart and make sure the offer applies.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                  CouponsBit helps shoppers check available adidas promotions before they complete their purchase.
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
                        { icon: Search, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Sparkles, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                        { icon: Award, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
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
    How to Find the Best adidas Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Checkout",
        sub: "Before placing your order, check CouponsBit for the latest adidas promo code, coupon codes, discount offers, vouchers, and other available deals.",
      },
      {
        icon: Scale,
        title: "Compare Sale Prices",
        sub: "Don't assume a coupon will always provide the biggest saving. Compare the promotional price with sale and clearance prices before making your decision.",
      },
      {
        icon: Calendar,
        title: "Shop During Major Sales",
        sub: "Black Friday, Cyber Monday, Memorial Day, Labor Day, back-to-school season, and end-of-season sales can be useful periods for finding adidas promotions.",
      },
      {
        icon: History,
        title: "Consider Older Collections",
        sub: "If you don't need the newest release, previous-season styles can sometimes provide better value through sale and clearance markdowns.",
      },
      {
        icon: ShieldAlert,
        title: "Check Product Eligibility",
        sub: "Popular releases, limited-edition products, and selected collaborations may have restrictions on promotional discounts. Read the offer details before purchasing.",
      },
      {
        icon: UserCheck,
        title: "Look for Member Offers",
        sub: "If you're an adidas member, compare available member benefits with other promotions to determine which option works best for your order.",
      },
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start">
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
          adidas Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Whether you're refreshing your workout wardrobe, replacing worn-out sneakers, or looking for the latest sportswear, adidas gives shoppers plenty of options to explore. The brand's lineup covers athletic shoes, clothing, accessories, and lifestyle products for men, women, and kids, with collections designed for everything from everyday wear to serious training.
          </p>
          <p>
            Before placing an order, it is worth checking for an adidas promo code that could help you save on an eligible purchase. CouponsBit brings together available adidas coupon codes, discount offers, vouchers, sales, and other promotions, giving shoppers an easy way to look for savings before checkout.
          </p>
          <p>
            adidas also runs major seasonal campaigns and limited-time promotions throughout the year. From back-to-school shopping and summer sales to Black Friday, Cyber Monday, holiday events, and end-of-season markdowns, there are plenty of occasions when shoppers can look for a better deal.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">adidas Coupon Code and Discount Offers</h3>
            <p>
              When searching for an adidas coupon code, don't limit yourself to traditional codes. The brand offers savings in several forms, and the most useful option can depend on what you're shopping for.
            </p>
            <p>
              You may come across sale prices, seasonal markdowns, limited-time promotions, member offers, or category-specific deals. Some savings are reflected directly in the product price, while others may require a promotional code during checkout.
            </p>
            <p>
              For example, a shopper buying running shoes may benefit from a footwear promotion, while someone updating their entire workout wardrobe could get more value from an offer that applies to multiple eligible categories.
            </p>
            <p>
              Checking CouponsBit before checkout gives you an opportunity to compare the available adidas deals and choose one that fits your purchase.
            </p>
          </div>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">adidas Coupon Code and Discount Offers</h3>
    <p>When searching for an adidas coupon code, don't limit yourself to traditional codes. The brand offers savings in several forms, and the most useful option can depend on what you're shopping for.</p>
    <p>You may come across sale prices, seasonal markdowns, limited-time promotions, member offers, or category-specific deals. Some savings are reflected directly in the product price, while others may require a promotional code during checkout.</p>
    <p>For example, a shopper buying running shoes may benefit from a footwear promotion, while someone updating their entire workout wardrobe could get more value from an offer that applies to multiple eligible categories.</p>
    <p>Checking CouponsBit before checkout gives you an opportunity to compare the available adidas deals and choose one that fits your purchase.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop adidas Shoes</h3>
    <p>Footwear is at the heart of adidas, with options designed for sports, training, running, and everyday lifestyle use.</p>
    <p><strong>Running Shoes:</strong> adidas offers running shoes for different types of runners and training needs. Collections can include lightweight everyday trainers, performance-focused running shoes, cushioned models, and shoes designed for longer distances.</p>
    <p>If you're replacing an old pair or preparing for a new training routine, check for an adidas promo code before purchasing.</p>
    <p><strong>Training and Gym Shoes:</strong> Training shoes are designed for workouts that involve different types of movement, including strength training, gym sessions, and fitness classes.</p>
    <p>Depending on the model, shoppers can find shoes focused on stability, flexibility, support, or versatility.</p>
    <p><strong>Soccer Shoes:</strong> adidas has a strong presence in soccer, offering footwear designed for different playing surfaces and player preferences. Customers can explore soccer cleats and related footwear from adidas' sports collections.</p>
    <p><strong>Basketball Shoes:</strong> Basketball fans can find performance footwear designed for court movement, traction, cushioning, and support. adidas also releases basketball shoes connected to athletes and signature collections.</p>
    <p><strong>Lifestyle Sneakers:</strong> Not every adidas shoe is designed for the gym. Lifestyle sneakers remain a major part of the brand's lineup, with classic silhouettes and modern designs that work with casual outfits.</p>
    <p>Popular styles can include retro-inspired sneakers, everyday trainers, and fashion-focused footwear.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">adidas Clothing</h3>
    <p>Alongside footwear, adidas offers sportswear and casual apparel for different activities and lifestyles.</p>
    <p><strong>T-Shirts and Tops:</strong> Customers can find performance T-shirts, casual tees, tank tops, long-sleeve shirts, and other tops suitable for workouts or everyday wear.</p>
    <p><strong>Hoodies and Sweatshirts:</strong> Hoodies and sweatshirts are useful for training, travel, lounging, and casual outfits. adidas offers different weights and designs depending on the season and collection.</p>
    <p><strong>Leggings and Tights:</strong> Women's activewear includes leggings and tights designed for running, workouts, yoga, training, and everyday wear.</p>
    <p><strong>Shorts and Pants:</strong> adidas offers athletic shorts, track pants, joggers, training pants, and other bottoms for both performance and casual use.</p>
    <p><strong>Jackets and Outerwear:</strong> For colder weather and outdoor activities, shoppers can explore jackets, windbreakers, insulated layers, and other outerwear.</p>
    <p>If you're shopping for several pieces at once, a qualifying adidas discount code can be worth checking before checkout.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">adidas Collections for Women, Men, and Kids</h3>
    <p>adidas offers products across men's, women's, and kids' categories.</p>
    <p>Women's collections include activewear, running gear, sports bras, leggings, tops, jackets, sneakers, and lifestyle clothing.</p>
    <p>Men can shop for training apparel, T-shirts, hoodies, shorts, track pants, jackets, sneakers, running shoes, and sports-specific products.</p>
    <p>For children, adidas offers shoes, tracksuits, T-shirts, hoodies, jackets, sportswear, and other everyday clothing.</p>
    <p>Families shopping for multiple people can compare available promotions to see whether a current adidas coupon code works across their eligible items.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">adidas Sportswear and Performance Gear</h3>
    <p>adidas serves athletes across several sports and activities, including running, soccer, basketball, training, tennis, golf, and outdoor activities.</p>
    <p>Sports-specific collections are built around different performance requirements. For example, running apparel may focus on lightweight materials and breathability, while soccer products may prioritize movement and performance on the pitch.</p>
    <p>If you are buying specialized sports equipment or clothing, always check whether the current promotion applies to the particular collection or product.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">adidas Originals</h3>
    <p>adidas Originals brings together lifestyle-focused products inspired by the brand's heritage. The collection includes sneakers, apparel, and accessories designed primarily for everyday fashion rather than athletic performance.</p>
    <p>Classic silhouettes and heritage-inspired designs can make adidas Originals appealing to shoppers who want recognizable adidas styling outside the gym.</p>
    <p>Limited releases and popular products can sell quickly, so availability may change.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">adidas Accessories</h3>
    <p>The brand's selection extends beyond footwear and apparel. Depending on the current assortment, shoppers can find backpacks, bags, hats, socks, sports accessories, and other products.</p>
    <p>Accessories can be useful additions when building a complete training kit or casual wardrobe.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">adidas Sale and Clearance</h3>
    <p>One of the easiest ways to find adidas savings is by exploring sale and clearance sections.</p>
    <p>Sale merchandise can include sneakers, clothing, sportswear, and accessories across different categories. Clearance products may offer deeper markdowns as the brand makes room for newer collections.</p>
    <p>Because sizes and colors can sell out quickly, clearance availability changes regularly.</p>
    <p>A sale price may also have different conditions from a promotional code, so compare the final price before making your purchase.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">adidas Seasonal Promotions and Major US Sales</h3>
    <p>Major shopping periods in the United States create plenty of opportunities to watch for adidas offers.</p>
    <p><strong>New Year and Fitness Promotions:</strong> January is a popular time for fitness-related shopping as many people begin new workout routines or refresh their gym gear.</p>
    <p>This can make running shoes, training apparel, leggings, shorts, and other activewear particularly relevant during early-year promotions.</p>
    <p><strong>Valentine's Day:</strong> Valentine's Day can be a good opportunity to shop for sneakers, apparel, or accessories as gifts. adidas may feature selected products or campaigns around the holiday.</p>
    <p><strong>Spring Sales:</strong> Spring often brings new collections alongside promotions on previous-season products. Shoppers looking for lighter clothing, sneakers, and outdoor gear can monitor adidas deals during this period.</p>
    <p><strong>Memorial Day:</strong> Memorial Day is a major US shopping weekend and can bring promotions across apparel, footwear, and other categories.</p>
    <p>If you're planning a summer wardrobe refresh, check CouponsBit for an adidas promo code around the holiday.</p>
    <p><strong>Fourth of July:</strong> The Fourth of July shopping period can feature summer apparel, sneakers, outdoor clothing, and other warm-weather products.</p>
    <p><strong>Back-to-School Sales:</strong> Back-to-school shopping is one of the biggest seasonal opportunities for sportswear and footwear. Students may need sneakers, backpacks, athletic clothing, and everyday outfits before the school year begins.</p>
    <p>Families shopping for multiple items can compare current adidas promotions before completing their purchases.</p>
    <p><strong>Labor Day:</strong> Labor Day marks another major promotional period in the US. Retailers frequently use the long weekend to clear seasonal inventory and promote new offers.</p>
    <p><strong>Halloween:</strong> Although Halloween is not primarily a sportswear shopping holiday, adidas can still run limited promotions or seasonal campaigns during the fall.</p>
    <p><strong>Black Friday:</strong> Black Friday is one of the most important shopping events of the year. adidas shoppers can watch for markdowns across sneakers, apparel, accessories, and selected collections.</p>
    <p><strong>Cyber Monday:</strong> Cyber Monday focuses heavily on online shopping, making it another important period to check for an adidas promotional code and online-exclusive offers.</p>
    <p><strong>Christmas and Holiday Shopping:</strong> The holiday season is a major time for sneaker and sportswear shopping. adidas products can make popular gifts, particularly sneakers, hoodies, jackets, and accessories.</p>
    <p>Holiday promotions may also cover selected collections or provide additional incentives for online shoppers.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">adidas Member Benefits</h3>
    <p>adidas offers a membership program that can provide registered customers with access to selected benefits, product information, and promotional opportunities.</p>
    <p>Membership-related offers can change, and eligibility may depend on the specific promotion.</p>
    <p>If you're a regular adidas shopper, it can be useful to compare member benefits with any available adidas coupon code before completing an order.</p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use an adidas Promo Code</h3>
            <p className="text-gray-600 font-medium -mt-4 mb-4">
              If you find an adidas promo code through CouponsBit, the general redemption process is simple:
            </p>
            <div className="space-y-6">
              {[
                "Select the adidas offer you want to use.",
                "Visit adidas through the relevant offer.",
                "Browse shoes, apparel, accessories, or other products.",
                "Add your chosen items to the shopping bag.",
                "Proceed to checkout.",
                "Enter the promotional code in the applicable field.",
                "Apply the code and check that the discount has been reflected.",
                "Review your order before completing the purchase."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium italic mt-4 pt-4 border-t border-gray-100">
              If the code is rejected, check its expiration date and terms. Some offers may exclude selected products, require a minimum purchase, or be limited to specific collections.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for adidas Offers?</h3>
            <p>
              CouponsBit helps shoppers look for savings before they complete an online purchase. Instead of checking multiple places separately for an adidas coupon, promo code, discount, or voucher, you can start with available offers on CouponsBit.
            </p>
            <p>
              The best deal depends on your purchase. A customer buying one pair of sneakers may benefit from a product-specific promotion, while someone shopping for a complete workout wardrobe could find more value in a broader offer.
            </p>
            <p>
              CouponsBit makes it easier to compare these opportunities and check the conditions before checkout.
            </p>
            <p>
              Whether you're buying your first pair of running shoes, upgrading your gym wardrobe, shopping for your kids, or looking for a gift, checking current adidas offers can be a useful step before placing your order.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next adidas Order</h3>
            <p>
              From performance running shoes and soccer cleats to everyday sneakers, hoodies, activewear, kids' clothing, and accessories, adidas gives shoppers plenty of options for sport and everyday style.
            </p>
            <p>
              Promotions can change throughout the year, so checking for savings before completing your purchase can be worthwhile. Major US shopping events such as Black Friday, Cyber Monday, Memorial Day, Labor Day, and back-to-school season can also be useful periods to watch.
            </p>
            <p>
              Before checkout, visit CouponsBit to look for the latest adidas promo code, along with coupon codes, discount offers, vouchers, sale deals, and other promotions. Compare the available options with your cart, check the eligibility requirements, and choose the offer that works best for your purchase.
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About adidas Promo Codes</h3>
          {[
            { q: "Does adidas offer promo codes?", a: "Yes. adidas runs promotional campaigns throughout the year, and eligible customers may find promotional codes, sale offers, member benefits, and other discounts. Availability varies by promotion." },
            { q: "Where can I find an adidas promo code?", a: "You can check CouponsBit for available adidas promo codes, coupon codes, discount offers, vouchers, sale deals, and other promotions before shopping." },
            { q: "How do I use an adidas coupon code?", a: "Add eligible products to your shopping bag, proceed to checkout, enter the coupon code in the applicable promotional field, and apply it. Check that the discount has been reflected before completing your purchase." },
            { q: "Why isn't my adidas promo code working?", a: "The code may have expired or may not apply to the products in your cart. Certain products, collections, collaborations, or sale items may also be excluded from particular promotions." },
            { q: "Can I use an adidas discount code on sale items?", a: "This depends on the specific promotion. Some codes can apply to selected sale products, while others are limited to full-price merchandise or particular categories." },
            { q: "Does adidas have a sale section?", a: "Yes. adidas regularly features sale and clearance merchandise across footwear, clothing, and accessories. Product availability can change as items sell out." },
            { q: "Does adidas offer Black Friday deals?", a: "Black Friday is a major US shopping event, and adidas can run promotions during the period. Specific offers and eligible products vary from year to year." },
            { q: "Does adidas have Cyber Monday offers?", a: "adidas can run online promotions around Cyber Monday. Check the current offer details to see which products and orders qualify." },
            { q: "Does adidas offer back-to-school deals?", a: "Back-to-school is an important shopping season for sneakers, sportswear, and backpacks. adidas may run promotions during this period, depending on the current campaign." },
            { q: "Does adidas sell running shoes?", a: "Yes. adidas offers running shoes designed for different training styles and running needs." },
            { q: "Does adidas sell sportswear?", a: "Yes. Customers can shop for sportswear across categories such as running, soccer, basketball, training, tennis, golf, and other activities." },
            { q: "Does adidas have products for kids?", a: "Yes. adidas offers footwear, clothing, and accessories for children, with products available across different age groups." },
            { q: "How can I save more when shopping at adidas?", a: "Start by checking CouponsBit for an adidas promo code, then compare it with current sale prices, clearance products, member benefits, and seasonal offers. Always check the terms to find the promotion that provides the best value for your purchase." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular adidas Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["adidas Promo Code", "Sneaker Deals", "Running Shoes", "Outlet Sale", "Free Shipping", "New Arrivals", "Training Gear", "Seasonal Sale"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top adidas Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">A</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop adidas: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
