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
  Sparkles,
  Gift,
  Droplet,
  Truck,
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
  { id: "d1", label: "NEW", heading: "New Customer Offer", sub: "Latest Deals" },
  { id: "d2", label: "DEAL", heading: "Beauty Insider Rewards Deal", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Free Shipping Offer", sub: "Featured Picks" },
  { id: "d4", label: "SALE", heading: "Percentage Off Sitewide", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Skincare Bundle Deal", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Macy's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp", dealText: "Up To 75% OFF", href: "/stores/macys-promo-code" },
  { name: "JCPenney", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/jcpenny-logo_kra7ur.webp", dealText: "Up To 50% OFF", href: "/stores/jcpenney-discount-code" },
  { name: "Aporro", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp", dealText: "Save Up To 45% OFF", href: "/stores/aporro-discount-code" },
  { name: "Blue Cypress", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/blue-cypress-logo_ax2m7c.webp", dealText: "20% OFF First Order", href: "/stores/blue-cypress-discount-code" },
  { name: "Dore & Rose", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/dore-and-rose-logo_jsa9ki.webp", dealText: "Up To 65% OFF", href: "/stores/dore-and-rose-promo-code" },
  { name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", dealText: "Up To 50% OFF", href: "/stores/old-navy-promo-code" },
];

const STORE_URL = "https://www.sephora.com";

export default function SephoraCouponsContent() {
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
              <span className="text-black font-extrabold">Sephora</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789719709/Sephora-Logo_djk72l.webp" alt="Sephora" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Sephora Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(21.4k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Sephora promo codes and coupon offers for Sep 2026. Save on makeup, skincare, and fragrance from top beauty brands.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "18", label: "Offers" },
                    { icon: Percent, val: "150+", label: "Deals" },
                    { icon: Users, val: "6M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789719709/Sephora-Logo_djk72l.webp" alt="Sephora Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Sephora Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "UP TO 50%", title: "Sephora Promo Code – Skincare Sale | Up To 50% OFF", desc: "Save up to 50% on selected Sephora skincare and skin care products during the latest beauty offers.", bullets: ["Explore cleansers, serums, moisturizers and other Sephora skincare favourites from popular brands.", "Shop the Sephora sale online and check for an eligible Sephora promo code or Sephora coupons before checkout."] },
                  { label: "SALE", value: "UP TO 50%", title: "Sephora Promo Code – Beauty Products | Up To 50% OFF", desc: "Enjoy up to 50% OFF on selected beauty products across makeup, skincare, haircare and fragrance.", bullets: ["Discover Sephora makeup, Sephora perfume, Sephora foundation and other beauty essentials for your routine.", "Browse the latest Sephora sale and use an eligible Sephora promo code to unlock available savings."] },
                  { label: "SALE", value: "UP TO 30%", title: "Sephora Promo Code – Value Sets | Up To 30% OFF", desc: "Save up to 30% on selected beauty value sets featuring popular skincare, makeup and personal-care picks.", bullets: ["Explore Sephora gift sets that make convenient choices for birthdays, celebrations and everyday gifting.", "Check for a Sephora promo code or Sephora voucher code when shopping eligible sets online."] },
                  { label: "SALE", value: "20% OFF", title: "Sephora Promo Code – Beauty Essentials | 20% OFF", desc: "Get 20% OFF selected beauty essentials from Sephora's range of makeup, skincare and fragrance products.", bullets: ["Stock up on everyday favourites including Sephora lip gloss, lip balm, foundation and other makeup essentials.", "Shop Sephora online and check available Sephora coupons or a Sephora promo code for qualifying purchases."] },
                  { label: "SALE", value: "UP TO 50%", title: "Sephora Promo Code – Haircare Collection | Up To 50% OFF", desc: "Save up to 50% on selected haircare products available through Sephora.", bullets: ["Discover shampoos, conditioners, treatments and styling products for different haircare routines.", "Explore the Sephora sale and check for an eligible Sephora promo code before placing your order."] },
                  { label: "SALE", value: "5% OFF", title: "Sephora – Retractable Rouge Gel Lip Liner | 5% OFF", desc: "Save 5% on the Retractable Rouge Gel Lip Liner and add a defined finish to your makeup routine.", bullets: ["Pair it with your favourite Sephora lip gloss or lip balm for a complete lip look.", "Check Sephora coupons and available promo code offers for additional eligible savings."] },
                  { label: "FROM", value: "$10", title: "Sephora – Gift Cards | Starting At $10", desc: "Shop Sephora gift cards starting from just $10 for convenient beauty gifting.", bullets: ["Give recipients the freedom to choose Sephora makeup, skincare, fragrance, perfume and more.", "Choose a Sephora eGift card or Sephora online gift card for an easy gifting option."] },
                  { label: "FROM", value: "$15.80", title: "Sephora – Best Sellers | Starting At $15.80", desc: "Discover popular Sephora best sellers starting from $15.80.", bullets: ["Explore customer favourites across Sephora makeup, skincare, fragrance, haircare and beauty accessories.", "Shop online and check for a Sephora promo code or Sephora coupons on eligible products."] },
                  { label: "FROM", value: "$25", title: "Sephora – E-Gift Cards | Starting At $25", desc: "Get Sephora e-gift cards starting at $25 for a simple and flexible gifting option.", bullets: ["Send a Sephora online gift card to friends or family so they can choose their favourite beauty products.", "Use the gift card toward eligible Sephora makeup, Sephora skincare, fragrance and other products."] },
                  { label: "ONLY", value: "$25", title: "Sephora – Watermelon Glow Niacinamide Blush | $25", desc: "Get the Watermelon Glow Niacinamide Dewy Flush Brightening Serum Blush for $25.", bullets: ["Add a fresh, dewy finish to your makeup look with this multifunctional beauty pick.", "Explore Sephora makeup and check for an eligible Sephora promo code or Sephora coupons when available."] },
                  { label: "SALE", value: "50% OFF", title: "Sephora – Colorful Blush | 50% OFF", desc: "Pick up Sephora Collection Colorful Blush for $7, reduced from $14, and save 50%.", bullets: ["Build your preferred colour intensity with a highly rated blush designed for a customizable finish.", "Shop the Sephora sale and check for a Sephora promo code to find additional eligible savings."] },
                  { label: "PERK", value: "FREE SHIP", title: "Sephora Beauty Insider – Free Shipping Offer", desc: "Sephora Beauty Insider members can enjoy free shipping benefits on eligible orders.", bullets: ["Shop favourites including Sephora perfume, Sephora fragrance, makeup, skincare and gift sets.", "Sign in to your Sephora Beauty Insider account and check the applicable shipping terms before checkout."] },
                  { label: "SALE", value: "UP TO 50%", title: "Sephora – Beauty Sale | Up To 50% OFF", desc: "Save up to 50% on selected beauty products during Sephora's latest promotional offers.", bullets: ["Find makeup, fragrance, skincare and haircare picks from Sephora and leading beauty brands.", "Explore Sephora coupons and check for an available Sephora promo code before ordering."] },
                  { label: "SHOP", value: "MAKEUP", title: "Sephora – Makeup Collection", desc: "Discover a wide range of Sephora makeup for creating everyday and special-occasion looks.", bullets: ["Shop foundations, lip products, blushes and trending picks including Makeup by Mario and Wonder Skin Lip Stain.", "Browse the Sephora sale and check for eligible promo code savings on qualifying products."] },
                  { label: "SHOP", value: "FRAGRANCE", title: "Sephora – Fragrance Collection", desc: "Explore Sephora's fragrance selection featuring perfumes and colognes for different preferences.", bullets: ["Discover Sephora perfume, Sephora fragrance and Sephora cologne options from popular beauty brands.", "Check for an available Sephora promo code or Sephora voucher code before purchasing eligible fragrances."] },
                  { label: "SHOP", value: "GIFT SETS", title: "Sephora – Gift Sets & Birthday Gifting", desc: "Explore Sephora gift sets designed for birthdays, celebrations and thoughtful beauty gifting.", bullets: ["Find skincare, makeup, fragrance and self-care bundles suitable for different beauty routines.", "Check Sephora coupons and available promo code offers when shopping eligible gift sets."] },
                  { label: "SHOP", value: "AT KOHL'S", title: "Sephora – Kohl's Beauty Collection", desc: "Discover selected beauty products available through Kohl's Sephora locations and the Sephora at Kohl's experience.", bullets: ["Shop makeup, skincare, fragrance and other beauty essentials from participating collections.", "Check applicable Sephora promo code and Kohl's Sephora offer terms before checkout."] },
                  { label: "SHOP", value: "LIP PRODUCTS", title: "Sephora – Lip Products", desc: "Shop a variety of lip products including Sephora lip gloss, lip balm, liners and colour cosmetics.", bullets: ["Discover everyday shades and statement colours to complement different makeup looks.", "Browse Sephora makeup offers and check for an eligible promo code before ordering."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Sephora: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Sephora?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Sephora is a beauty retailer offering makeup, skincare, haircare, and fragrance from a wide range of established and emerging brands.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The retailer's Beauty Insider loyalty program offers points, rewards, and member-exclusive offers based on your membership tier.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Sephora is popular with shoppers looking for a wide selection of beauty products in one place, from drugstore staples to prestige brands.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The retailer also offers in-store services such as makeovers and skincare consultations at select locations.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Sparkles, name: "Makeup", count: "60+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Droplet, name: "Skincare", count: "45+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Gift, name: "Fragrance", count: "25+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: Truck, name: "Free Shipping", count: "35+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Search, name: "New Arrivals", count: "15+", color: "text-orange-500", href: "/categories/fashion" },
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
    How to Find Better Sephora Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Shopping",
        sub: "Before placing your order, check CouponsBit for the latest Sephora promo code and current offers.",
      },
      {
        icon: HeartHandshake,
        title: "Join Beauty Insider",
        sub: "Sign up for Sephora's free Beauty Insider program to unlock points, rewards, and member-exclusive offers.",
      },
      {
        icon: Calendar,
        title: "Watch for Sales Events",
        sub: "Beauty Insider sales events and Black Friday can be useful periods to check for extra discounts.",
      },
      {
        icon: ShieldAlert,
        title: "Check Promotion Restrictions",
        sub: "A promotion may only apply to selected brands or require a specific Beauty Insider tier. Always read the terms before purchasing.",
      },
      {
        icon: Gift,
        title: "Bundle Your Routine",
        sub: "Bundling skincare or makeup items together can often provide better value than buying separately.",
      },
      {
        icon: Sparkles,
        title: "Try Samples First",
        sub: "Sephora often includes samples with orders, which can help you try a product before committing to full size.",
      },
      {
        icon: Receipt,
        title: "Review the Final Order",
        sub: "Before completing your purchase, make sure any eligible promotion has been applied and review your complete order details.",
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

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Sephora Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Whether you're restocking your skincare routine or trying a new makeup brand, Sephora offers a wide selection of beauty products from established and emerging brands.
          </p>
          <p>
            If you're planning your next beauty purchase, checking for a Sephora promo code before placing your order can be a smart way to look for savings. CouponsBit helps shoppers discover Sephora coupon codes, promo offers, and other ways to potentially save on their beauty routine.
          </p>
          <p>
            From new-customer offers to Beauty Insider rewards and seasonal sale picks, there are plenty of reasons to check current promotions before you check out.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a Sephora Promo Code</h3>
    <p>A Sephora promo code can help you look for savings on eligible makeup, skincare, or fragrance when a promotion is available.</p>
    <p>Before completing your order, check CouponsBit to see whether there is a current Sephora promotional offer that matches what you're shopping for.</p>
    <p>Promotions can have specific conditions. Some may apply to selected brands or Beauty Insider tiers, while others may be connected to a particular sales event.</p>
    <p>Always review the terms of the offer, including its expiration date and product restrictions, before expecting a discount at checkout.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Explore Sephora's Product Lineup</h3>
    <p>Sephora offers beauty products across several categories, giving shoppers plenty of options for their routine.</p>
    <p><strong>Makeup:</strong> Foundation, eyeshadow, lipstick, and more from a wide range of brands.</p>
    <p><strong>Skincare:</strong> Cleansers, serums, and moisturizers suited to different skin types.</p>
    <p><strong>Fragrance:</strong> Perfumes and colognes from designer and niche brands.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Sephora Sale and Seasonal Promotions</h3>
    <p>Sephora promotions can change throughout the year, with certain periods often attracting more attention from shoppers.</p>
    <p><strong>Beauty Insider Sales Events:</strong> Member-exclusive sales events are a popular period for savings.</p>
    <p><strong>Black Friday and Cyber Monday:</strong> These major shopping events are worth watching if you're planning a bigger purchase.</p>
    <p>Before placing an order, check CouponsBit for a Sephora promo code, coupon offer, or other promotion.</p>
  </div>
</div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Sephora Promo Codes
          </h3>
          {[
            { q: "Does Sephora offer promo codes?", a: "Sephora periodically offers promotional codes, discounts, and seasonal promotions. Availability and eligibility can vary." },
            { q: "Where can I find a Sephora promo code?", a: "You can check CouponsBit for available Sephora promo codes, coupon codes, and sale promotions before shopping." },
            { q: "How do I use a Sephora promo code?", a: "Add eligible items to your cart, proceed to checkout, and enter the applicable promo code in the promotional-code field. Confirm the discount has been applied before completing your purchase." },
            { q: "Why isn't my Sephora promo code working?", a: "The promotion may have expired, or your order may not meet its requirements. Some offers can be limited to selected products or Beauty Insider tiers." },
            { q: "What does Sephora sell?", a: "Sephora sells makeup, skincare, haircare, and fragrance from a wide range of beauty brands." },
            { q: "What is Sephora's Beauty Insider program?", a: "Beauty Insider is Sephora's loyalty program, offering points, rewards, and member-exclusive offers based on your membership tier." },
            { q: "Does Sephora offer free shipping?", a: "Sephora may offer free shipping on qualifying orders or for eligible Beauty Insider members. Check current offers for minimum order requirements." },
            { q: "Does Sephora have Black Friday deals?", a: "Sephora may run promotions around Black Friday and other major shopping periods. Check current offers to see what is available." },
            { q: "Does Sephora sell fragrance?", a: "Yes. Sephora offers a wide selection of fragrance in addition to its makeup and skincare products." },
            { q: "When is the best time to look for Sephora deals?", a: "Promotions can appear throughout the year, with Beauty Insider sales events often bringing additional savings." },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
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
            Popular Sephora Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Sephora Promo Code",
              "Beauty Insider Rewards",
              "Skincare Bundle",
              "Free Shipping",
              "Percentage Off Sitewide",
              "First Order Discount",
              "Seasonal Sale",
              "Fragrance Deals"
            ].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Sephora Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "SKINCARE SALE", sub: "Up To 50% OFF" },
              { heading: "BEAUTY PRODUCTS", sub: "Up To 50% OFF" },
              { heading: "BEAUTY INSIDER", sub: "Free Shipping On Eligible Orders" },
              { heading: "GIFT CARDS", sub: "Starting At $10" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
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
                  aria-label={`Shop Sephora: ${deal.heading}`}
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
