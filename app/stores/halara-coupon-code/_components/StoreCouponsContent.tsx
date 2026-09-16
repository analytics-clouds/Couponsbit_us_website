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
  Shirt,
  Sparkles,
  Gift,
  ShoppingBag,
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
  { id: "d2", label: "DEAL", heading: "Activewear Bundle Deal", sub: "Featured Picks" },
  { id: "d3", label: "SALE", heading: "Percentage Off Sitewide", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Free Shipping Offer", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Loungewear Picks", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Bamboocool", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp", dealText: "Up To 25% OFF", href: "/stores/bamboocool-discount-code" },
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Nuagewear", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373659/nuage-coupon-code_ggmnbf.jpg", dealText: "Up to 39% OFF", href: "/stores/nuage-discount-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Aporro", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp", dealText: "Save Up To 45% OFF", href: "/stores/aporro-discount-code" },
  { name: "Blue Cypress", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/blue-cypress-logo_ax2m7c.webp", dealText: "20% OFF First Order", href: "/stores/blue-cypress-discount-code" },
];

const STORE_URL = "https://www.halara.com";

export default function HalaraCouponsContent() {
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
              <span className="text-black font-extrabold">Halara</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789535819/halara_coupon_code_ujuwnv.webp" alt="Halara" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Halara Coupon code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(9.8k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Halara coupon codes and promo codes to save up to 80% during the Flash Sale, claim a $100 coupon bundle with free shipping, and enjoy Buy 1 Get 1 FREE on eligible styles. Shop leggings, dresses, skirts, and activewear in Sept 2026.
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
                    { icon: Tag, val: "22", label: "Offers" },
                    { icon: Percent, val: "250+", label: "Deals" },
                    { icon: Users, val: "1M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789535819/halara_coupon_code_ujuwnv.webp" alt="Halara Coupon Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Halara Coupon Codes & Offers</h2>
                </div>

                {[
                  { label: "NEW", value: "$100 BUNDLE", title: "Halara Coupon Code – $100 Coupon Bundle + Free Shipping", desc: "New Halara app users can unlock a $100 coupon bundle along with free shipping.", bullets: ["Download the Halara app to access this special new-user promotion.", "Enjoy extra savings on Halara clothing and selected products through the app."] },
                  { label: "SALE", value: "UP TO 80%", title: "Halara Coupon Code – Flash Sale Up To 80% OFF", desc: "Shop Halara’s Flash Sale and save up to 80% on selected styles.", bullets: ["Explore discounted Halara leggings, shorts, dresses and more during the limited-time sale.", "Refresh your wardrobe with Halara clothing at heavily reduced prices."] },
                  { label: "SALE", value: "UP TO 60%", title: "Halara Coupon Code – Skirts & Skorts Up To 60% OFF", desc: "Save up to 60% on selected Halara skirts and skorts.", bullets: ["Find comfortable, stylish options designed for everyday wear and active moments.", "Explore new Halara styles while the limited-time discount is available."] },
                  { label: "SALE", value: "UP TO 60%", title: "Halara Coupon Code – Plus Size Tops Up To 60% OFF", desc: "Get up to 60% OFF selected plus-size tops from Halara.", bullets: ["Choose from comfortable fits designed to complement your everyday wardrobe.", "Pair these tops with Halara leggings, jeans or casual bottoms for versatile outfits."] },
                  { label: "SALE", value: "UP TO 60%", title: "Halara – Up To 60% OFF + Free Totebag", desc: "Save up to 60% on selected Halara styles with this special offer.", bullets: ["Receive a FREE totebag when you spend $139 or more on eligible orders.", "Combine your favorite Halara clothing pieces and enjoy an extra gift with your purchase."] },
                  { label: "SALE", value: "UP TO 60%", title: "Halara – Cargo Pants Up To 60% OFF", desc: "Enjoy savings of up to 60% on selected Halara cargo pants.", bullets: ["Choose practical designs with comfortable fits and useful pocket details.", "This offer is ideal for shoppers looking for stylish Halara work pants and everyday bottoms."] },
                  { label: "SALE", value: "UP TO 50%", title: "Halara – Women’s Dresses Up To 50% OFF", desc: "Save up to 50% on selected women’s dresses at Halara.", bullets: ["Discover flattering styles suitable for casual outings, everyday wear and relaxed occasions.", "Explore Halara dresses and find new-season looks at reduced prices."] },
                  { label: "SALE", value: "UP TO 50%", title: "Halara – Best Sellers Up To 50% OFF", desc: "Save up to 50% on selected Halara best sellers.", bullets: ["Shop popular headbags and totebags designed to complement your everyday looks.", "Complete your Halara outfit with practical accessories available at special prices."] },
                  { label: "SALE", value: "UP TO 70%", title: "Halara – Bestsellers Up To 70% OFF", desc: "Shop Halara bestsellers with discounts reaching up to 70% OFF.", bullets: ["Discover popular Halara leggings, shorts, tops and other movement-ready styles.", "Pick your favorite Halara clothing before the best-selling pieces sell out."] },
                  { label: "SALE", value: "UP TO 60%", title: "Halara – The Bottoms Edit Up To 60% OFF", desc: "Save up to 60% on selected bottoms from Halara.", bullets: ["Explore leggings, pants, skirts and other versatile everyday styles.", "Shoppers looking for Halara pants review-worthy comfort can explore the latest discounted fits."] },
                  { label: "DEAL", value: "10% OFF", title: "Halara – 10% OFF Orders Over $120", desc: "Get 10% OFF when your eligible Halara order exceeds $120.", bullets: ["Use code SEP2026 at checkout to claim the discount.", "Build a larger order with Halara leggings, shorts, dresses or other wardrobe essentials."] },
                  { label: "DEAL", value: "12% OFF", title: "Halara – 12% OFF Orders Over $150", desc: "Save 12% on eligible Halara purchases of $150 or more.", bullets: ["Apply code SEP2026 during checkout to receive the promotional discount.", "Stock up on Halara clothing and enjoy greater savings on qualifying orders."] },
                  { label: "DEAL", value: "B2G1 FREE", title: "Halara – Buy 2, Get 1 FREE", desc: "Buy any 2 eligible items and receive a third item FREE.", bullets: ["Mix and match selected Halara clothing styles to create a versatile wardrobe.", "Choose from popular categories including Halara shorts, tops, leggings and more."] },
                  { label: "DEAL", value: "2 FOR $59", title: "Halara – Buy 2 For $59", desc: "Get 2 selected Halara styles for just $59.", bullets: ["This offer is a great way to refresh your everyday wardrobe without overspending.", "Explore comfortable bottoms and activewear inspired by popular Halara styles."] },
                  { label: "DEAL", value: "2 FOR $69", title: "Halara – Buy 2 For $69", desc: "Pick 2 eligible Halara items for a combined price of $69.", bullets: ["Discover practical and stylish pieces designed for movement and everyday comfort.", "Add popular Halara pants, leggings or other selected styles to your wardrobe."] },
                  { label: "DEAL", value: "$39.95", title: "Halara Flex Denim Work Leggings – $39.95", desc: "Shop Halara Flex High Waisted Crossover Pocket Denim Work Leggings for $39.95.", bullets: ["The style features a high-waisted design, crossover pockets and denim-inspired detailing.", "Compare this comfortable option with popular Halara work pants when updating your everyday wardrobe."] },
                  { label: "DEAL", value: "B1G1 FREE", title: "Halara – Buy 1, Get 1 FREE", desc: "Enjoy a Buy 1, Get 1 FREE offer on eligible Halara styles.", bullets: ["Choose movement-ready pieces featuring soft stretch, practical details and comfortable fits.", "Build your activewear collection with popular Halara leggings, tops and other everyday essentials."] },
                  { label: "NEW", value: "ARRIVALS", title: "Halara – New Arrivals", desc: "Explore Halara’s latest women’s arrivals across dresses, leggings, tops, skirts, joggers and activewear.", bullets: ["Discover comfortable designs made for everyday movement and flattering styling.", "Browse the newest Halara clothing and find fresh additions to your wardrobe."] },
                  { label: "DEAL", value: "$24.95", title: "Halara SoftlyZero Leggings – $24.95", desc: "Get SoftlyZero High Waisted Crossover Pocket Contrast Lace Flare Yoga Leggings for $24.95, reduced from $49.95.", bullets: ["The high-waisted design features crossover pockets and a flare silhouette for yoga and everyday styling.", "A great pick for shoppers searching for comfortable Halara leggings and butt lifting leggings styles."] },
                  { label: "DEAL", value: "$24.95", title: "Halara Breezeful Skirted Leggings – $24.95", desc: "Shop Breezeful High Waisted Pleated 2-in-1 Mesh Skirted Leggings for $24.95, down from $39.95.", bullets: ["The design combines leggings with a pleated skirt and quick-dry mesh detailing.", "Enjoy a versatile option for dance, workouts and casual wear while exploring Halara shorts alternatives."] },
                  { label: "DEAL", value: "$19.95", title: "Halara SoftlyZero Faux Leather Mini Skirt – $19.95", desc: "Get the SoftlyZero Faux Leather 2-in-1 Pleated Mini Skirt for just $19.95, reduced from $39.95.", bullets: ["The stretchy design includes pockets and sparkle foil detailing for a standout look.", "Add this fashionable piece to your Halara clothing collection for casual and going-out outfits."] },
                  { label: "DEAL", value: "$19.95", title: "Halara UltraSculpt Yoga Tank Top – $19.95", desc: "Shop the UltraSculpt Double Straps Twisted Backless Cropped Yoga Tank Top for $19.95.", bullets: ["Enjoy the Buy 2, Get 10% OFF or Buy 3, Get 20% OFF offer on eligible purchases.", "Pair it with Halara leggings or other activewear for a comfortable workout-ready outfit."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Halara: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Halara?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Halara is a direct-to-consumer activewear and loungewear brand known for its comfort-focused designs, including its signature soft, flexible fabrics.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Halara is a fashion and athleisure brand focused on combining the comfort and functionality of activewear with everyday style. The brand describes its approach as creating clothing that supports movement while still fitting naturally into daily life. Its collections cover everything from workout-ready pieces to casual and lifestyle clothing.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Halara has become particularly known for products such as exercise dresses, leggings, skorts, tennis skirts, and other performance-inspired clothing. Its product range has expanded into areas including golf apparel, joggers, tops, outerwear, swimwear, casual dresses, and loungewear.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    One of the interesting things about Halara is its community-driven design philosophy. The company says customer feedback from surveys, social media, and its Halara Circle community helps influence new designs and improvements. Its Everyday Easy Peezy Dress, for example, was developed using substantial customer feedback before being refined further.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The result is a brand aimed at shoppers who want clothing that can move between different parts of their day without requiring a complete outfit change.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Shirt, name: "Activewear", count: "200+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Sparkles, name: "Loungewear", count: "150+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Gift, name: "Bundle Deals", count: "40+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: ShoppingBag, name: "Dresses", count: "90+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Search, name: "New Arrivals", count: "60+", color: "text-orange-500", href: "/categories/fashion" },
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
    How to Get the Most From Halara Deals
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      A little preparation can make your shopping experience more rewarding.
    </p>
    <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
      <p>
        <strong className="text-black font-black">Check CouponsBit before checkout:</strong> A quick search can help you identify current coupon opportunities before you pay.
      </p>
      <p>
        <strong className="text-black font-black">Compare promotions:</strong> Don't automatically use the first offer you see. Compare it with current sale prices and other eligible promotions.
      </p>
      <p>
        <strong className="text-black font-black">Build your cart strategically:</strong> If an offer has a minimum purchase requirement, check whether the products you genuinely need bring your order within the qualifying range.
      </p>
      <p>
        <strong className="text-black font-black">Watch seasonal sales:</strong> Major shopping events can bring special promotions, particularly around major US retail holidays.
      </p>
      <p>
        <strong className="text-black font-black">Check the terms:</strong> A discount that looks impressive may have exclusions. Always read the conditions before relying on an offer.
      </p>
      <p>
        <strong className="text-black font-black">Look at multiple categories:</strong> Halara has expanded well beyond leggings. Dresses, skirts, golf apparel, loungewear, swimwear, tops, and outerwear can all be worth exploring depending on your needs.
      </p>
    </div>
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
      <div className="prose max-w-none text-left">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Halara Coupon Code, Promo Code & Discount Offers
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
    <tbody className="text-gray-600 font-bold text-[14px]">
      {[
        ["$100 Coupon Bundle + Free Shipping", "$100 Bundle", "New App Users", "Must download and order via Halara app", "App Orders / Sitewide"],
        ["Flash Sale", "Up To 80% OFF", "All Users", "Limited-time discounts on selected styles", "Leggings, Shorts & Dresses"],
        ["Skirts & Skorts Sale", "Up To 60% OFF", "All Users", "Comfortable, activewear-inspired everyday options", "Skirts & Skorts"],
        ["Plus Size Tops Deal", "Up To 60% OFF", "All Users", "Flattering, comfortable fits for everyday wear", "Plus Size Tops"],
        ["Up To 60% OFF + Free Totebag", "Up To 60% OFF", "All Users", "Free gift with eligible orders of $139 or more", "Sitewide / Clothing"],
        ["Cargo Pants Promotion", "Up To 60% OFF", "All Users", "Practical designs with functional pocket details", "Cargo & Work Pants"],
        ["Women's Dresses Sale", "Up To 50% OFF", "All Users", "Flattering styles for casual and relaxed occasions", "Women's Dresses"],
        ["Best Sellers Accessories", "Up To 50% OFF", "All Users", "Popular headbags and totebags at reduced prices", "Accessories & Bags"],
        ["Bestsellers Sale", "Up To 70% OFF", "All Users", "High-demand styles available while supplies last", "Leggings, Shorts & Tops"],
        ["The Bottoms Edit", "Up To 60% OFF", "All Users", "Everyday versatile fits, skirts, and leggings", "Pants, Leggings & Bottoms"],
        ["10% OFF Orders Over $120", "10% OFF", "Orders $120+", "Use promo code SEP2026 at checkout", "Sitewide Orders"],
        ["12% OFF Orders Over $150", "12% OFF", "Orders $150+", "Use promo code SEP2026 at checkout", "Sitewide Orders"],
        ["Buy 2, Get 1 FREE", "Buy 2, Get 1 FREE", "All Users", "Mix and match eligible apparel items", "Shorts, Tops & Leggings"],
        ["Buy 2 For $59", "2 For $59", "All Users", "Special bundle price on selected everyday styles", "Activewear & Bottoms"],
        ["Buy 2 For $69", "2 For $69", "All Users", "Combine 2 eligible movement-ready pieces", "Pants & Leggings"],
        ["Halara Flex Denim Work Leggings", "$39.95", "All Users", "High-waisted crossover pocket denim leggings", "Work Pants & Leggings"],
        ["Buy 1, Get 1 FREE", "BOGO FREE", "All Users", "Soft stretch movement-ready activewear pieces", "Leggings & Tops"],
        ["New Arrivals", "Regular Price", "All Users", "Fresh new-season releases across apparel", "Dresses, Joggers & Tops"],
        ["SoftlyZero Flare Yoga Leggings", "$24.95", "All Users", "Was $49.95; high-waisted lace flare design", "Yoga Leggings"],
        ["Breezeful 2-in-1 Skirted Leggings", "$24.95", "All Users", "Was $39.95; pleated quick-dry mesh skirted style", "Skirted Leggings"],
        ["SoftlyZero Faux Leather Mini Skirt", "$19.95", "All Users", "Was $39.95; 2-in-1 pleated design with pockets", "Skirts & Mini Skirts"],
        ["UltraSculpt Yoga Tank Top", "$19.95", "All Users", "Buy 2 Get 10% OFF or Buy 3 Get 20% OFF", "Tops & Activewear"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 21 && "border-b-0")}>
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

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Cute enough for your coffee run, comfortable enough for a workout, and practical enough to survive a full day of errands - Halara has built its name around clothes that refuse to stay in just one category. From viral exercise dresses and tennis skirts to leggings, joggers, tops, loungewear, and everyday outfits, the brand brings activewear-inspired functionality into everyday fashion.
          </p>
          <p>
            If you are planning a Halara haul, finding a Halara coupon code before you check out can be a smart way to make your order more affordable. Halara frequently features special promotions, seasonal sales, limited-time offers, and other opportunities to save, although availability and terms can change.
          </p>
          <p>
            That is where CouponsBit can help. Instead of heading straight to checkout, check the latest Halara coupon and promotional offers available on CouponsBit first and see whether you can save on the styles already sitting in your cart.
          </p>

          <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Find a Halara Coupon Code
        </h3>
        <p>
          Before placing your Halara order, take a moment to look for an active Halara coupon code on CouponsBit. A working code can potentially reduce your order total or unlock a promotional benefit, depending on the terms attached to the offer.
        </p>
        <p>
          The best time to search is usually right before checkout. Promotions can have specific requirements, such as a minimum purchase, selected products, new-customer eligibility, limited validity, or exclusions on certain collections.
        </p>
        <p>
          If you see multiple Halara offers, compare them rather than automatically choosing the first one. A percentage-based discount may be useful for a larger cart, while a product-specific promotion could make more sense if you are purchasing a particular category.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Halara Coupon and Discount Offers
        </h3>
        <p>
          Halara gives shoppers several ways to look for savings beyond a traditional coupon code. The brand regularly promotes special deals and limited-time campaigns across its online store and app, with the exact promotions changing over time.
        </p>
        <p>
          You may come across offers connected to new-customer purchases, selected collections, seasonal events, app promotions, or special shopping campaigns. Halara's official app also promotes exclusive savings and daily deals, although the details and eligibility can change.
        </p>
        <p>
          This is why checking CouponsBit before every Halara purchase can be useful. Instead of assuming that one type of discount is always best, compare the available coupon, sale, and promotional offers against what you actually plan to buy.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Shop Halara Activewear
        </h3>
        <p>
          Halara's activewear collection is designed for people who want their workout clothes to work just as well outside the gym.
        </p>
        <p>
          <strong>Leggings and Pants:</strong> Leggings are one of Halara's recognizable categories, with styles designed for everything from everyday wear and walking to workouts and other activities. Depending on the collection, shoppers can find different fits, lengths, fabrics, waist designs, and levels of support. Joggers and other casual bottoms offer another option when you want something more relaxed. They can work for travel days, errands, lounging, warm-ups, or casual outfits.
        </p>
        <p>
          <strong>Exercise Dresses:</strong> Halara's exercise dresses have become one of the brand's signature categories. These dresses combine the appearance of a casual dress with activewear-inspired functionality, making them particularly useful for shoppers who want a one-piece outfit for activities and everyday plans. Pair one with sneakers for a casual weekend look, or use it for activities such as walking, tennis, travel, or light workouts.
        </p>
        <p>
          <strong>Tennis Skirts and Skorts:</strong> If you like the sporty look without committing to traditional athletic shorts, Halara's skirts and skorts are worth exploring. These styles can work for tennis, golf, casual outings, vacations, or simply creating a sporty everyday outfit. Skorts are especially practical because they provide the appearance of a skirt while incorporating shorts underneath.
        </p>
        <p>
          <strong>Tops and Sports Bras:</strong> Halara also offers tops and sports bras that can be combined with its bottoms, skirts, or leggings. Depending on the design, these pieces can work as workout essentials or as part of a casual athleisure outfit.
        </p>
        <p>
          <strong>Golf Apparel:</strong> Golf-inspired clothing is another part of Halara's expanding range. Shoppers can find pieces designed to bring activewear comfort into golf outfits, making them suitable for the course while maintaining a more polished appearance.
        </p>
        <p>
          <strong>Outerwear:</strong> For cooler days, layering pieces can complete a Halara outfit. Lightweight jackets, sweaters, and other outerwear can be paired with leggings, joggers, dresses, or skirts depending on the season.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Halara Casual Clothing and Everyday Wear
        </h3>
        <p>
          You do not have to be heading to the gym to shop at Halara.
        </p>
        <p>
          The brand's philosophy is built around bringing activewear functionality into everyday clothing. Its current collections include casual dresses, loungewear, denim, and other lifestyle-focused pieces alongside traditional activewear.
        </p>
        <p>
          That makes Halara interesting for shoppers who prioritize comfort but do not want their wardrobe to look like a permanent gym uniform.
        </p>
        <p>
          Think travel days, coffee dates, grocery runs, weekend walks, casual lunches, working from home, or simply relaxing at home. Many of these situations call for clothes that feel easy but still look put together.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Halara Swimwear and Vacation Styles
        </h3>
        <p>
          Planning a beach trip or warm-weather getaway? Halara also offers swimwear and vacation-friendly clothing.
        </p>
        <p>
          Look for pieces that can be mixed and matched with casual dresses, skirts, shorts, or lightweight layers to create outfits that work beyond the beach.
        </p>
        <p>
          If you are building a vacation wardrobe, it can be especially useful to check for a Halara coupon code before buying several pieces at once. A promotion that applies to a larger qualifying order may offer more value than shopping for individual items separately.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Shop Halara for Different Lifestyles
        </h3>
        <p>
          One of Halara's biggest advantages is versatility.
        </p>
        <p>
          A single wardrobe can include pieces for morning workouts, afternoon errands, travel, casual social plans, and relaxing at home. This is part of the broader athleisure concept Halara focuses on—using performance-inspired fabrics, functional details, and everyday styling together.
        </p>
        <p>
          For someone building a practical wardrobe, that flexibility can make Halara worth exploring.
        </p>
        <p>
          You can also mix different categories instead of buying complete outfits. Pair a Halara skirt with a casual top, wear leggings with an oversized layer, or style an exercise dress with everyday sneakers.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Save on Halara During Seasonal Shopping
        </h3>
        <p>
          Timing can make a difference when shopping for fashion.
        </p>
        <p>
          Halara may run promotional campaigns around major shopping periods throughout the year, so keep an eye out during occasions such as Valentine's Day, Memorial Day, Fourth of July, Back-to-School season, Labor Day, Halloween, Thanksgiving, Black Friday, Cyber Monday, and the Christmas and New Year shopping period.
        </p>
        <p>
          Season changes can also be useful opportunities to look for discounts. Spring and summer are natural times to browse dresses, skirts, swimwear, and lighter activewear, while fall and winter shopping can shift toward leggings, joggers, jackets, sweaters, and layering pieces.
        </p>
        <p>
          Since promotions change, it is worth checking CouponsBit for the latest available Halara offers instead of assuming an older deal is still active.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          How to Use a Halara Coupon Code
        </h3>
        <p>
          Using a Halara coupon code is generally straightforward.
        </p>
        <p>
          Start by browsing Halara and adding the products you want to your shopping bag. Before completing your purchase, review the available promotion and check its requirements.
        </p>
        <p>
          Enter the coupon code in the designated promotional or discount-code field during checkout and apply it. Make sure the discount appears in your order summary before you complete the purchase.
        </p>
        <p>
          If the code does not work, do not immediately assume it is invalid. Check whether the offer has expired, whether your products qualify, whether a minimum order requirement applies, or whether the promotion is limited to particular customers or collections.
        </p>
        <p>
          Some offers cannot be combined with others, so comparing the available promotion with an existing sale can help you determine which option provides better value.
        </p>
      </div>
    </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Halara?</h3>
              <p>Finding a discount should not feel like another shopping project.</p>
              <p>CouponsBit brings coupon codes, promotional offers, deals, and savings opportunities together so shoppers can check for available offers before heading to checkout.</p>
              <p>Instead of searching through multiple websites hoping to find something that works, start with the Halara offers available on CouponsBit. You can then compare the available options with the products in your cart and choose the promotion that makes the most sense.</p>
              <p>For regular Halara shoppers, checking before every purchase can become an easy part of the shopping routine.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Start Saving on Your Halara Order</h3>
              <p>Whether you are looking for a new pair of leggings, an exercise dress for your next active day, a tennis skort, comfortable loungewear, or an entire athleisure refresh, Halara offers plenty of options to explore.</p>
              <p>But before you hit that checkout button, check for a Halara coupon code on CouponsBit. Compare the available promotions, review the terms, and see which offer fits your order best.</p>
              <p>A few seconds of checking can turn a regular Halara shopping trip into a smarter one—and when you are already planning a wardrobe refresh, there is little reason to pay more than you need to.</p>
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
            Frequently Asked Questions About Halara Coupon Codes
          </h3>
          {[
            { q: "Does Halara offer coupon codes?", a: "Halara offers promotional discounts and special deals from time to time. The availability, value, and eligibility of individual offers can change, so check CouponsBit for currently available opportunities before purchasing." },
            { q: "Where can I find a Halara coupon code?", a: "You can check CouponsBit for available Halara coupon codes and promotional offers. Always review the terms of an offer before applying it." },
            { q: "Can I use a coupon code on sale items?", a: "It depends on the specific promotion. Some Halara offers may apply only to selected products, while others can have exclusions or additional requirements." },
            { q: "Why isn't my Halara coupon code working?", a: "The code may have expired, may not apply to your selected products, or may require a minimum purchase. Some promotions may also be restricted to specific customers or cannot be combined with another offer." },
            { q: "Does Halara have sales?", a: "Halara regularly promotes special offers and deals, although the exact campaigns change. Its official app also advertises exclusive promotions and selected daily deals." },
            { q: "What can I buy from Halara?", a: "Halara sells a broad selection of women's athleisure and everyday clothing, including leggings, exercise dresses, skirts and skorts, tops, sports bras, joggers, golf apparel, outerwear, swimwear, casual dresses, and loungewear." },
            { q: "Is Halara only for workouts?", a: "No. Halara positions its clothing at the intersection of activewear and everyday fashion, so many of its pieces can be styled for casual outings, travel, errands, lounging, and other daily activities." }
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
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
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
            Popular Halara Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Halara Coupon Code",
              "Exercise Dresses",
              "Tennis Skirts",
              "Leggings & Joggers",
              "Loungewear Deals",
              "App Exclusive Sales",
              "Athleisure Offers",
              "Free Shipping"
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
            Today's Top Halara Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "$100 BUNDLE", sub: "$100 Coupon Bundle + Free Shipping" },
              { heading: "UP TO 80%", sub: "Flash Sale Up To 80% OFF" },
              { heading: "UP TO 70%", sub: "Bestsellers Up To 70% OFF" },
              { heading: "B1G1 FREE", sub: "Buy 1, Get 1 FREE" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  H
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
                  aria-label={`Shop Halara: ${deal.heading}`}
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
