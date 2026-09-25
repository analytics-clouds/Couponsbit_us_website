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
  Gift,
  Footprints,
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
  { id: "d2", label: "DEAL", heading: "Outdoor Apparel Bundle", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Free Shipping Offer", sub: "Featured Picks" },
  { id: "d4", label: "SALE", heading: "Percentage Off Sitewide", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Footwear Deal", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Nike", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp", dealText: "Up To 60% OFF", href: "/stores/nike-discount-code" },
  { name: "Zara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp", dealText: "Up To 80% OFF", href: "/stores/zara-discount-code" },
  { name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", dealText: "Up To 77% OFF", href: "/stores/hm-promo-code" },
  { name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", dealText: "Up To 50% OFF", href: "/stores/old-navy-promo-code" },
  { name: "Fashion Nova", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/fashion-nova_cm1al3.webp", dealText: "Up To 50% OFF", href: "/stores/fashion-nova-discount-code" },
  { name: "Abercrombie", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp", dealText: "Up To 50% OFF", href: "/stores/abercrombie-discount-code" },
];

const STORE_URL = "https://www.llbean.com";

export default function LLBeanCouponsContent() {
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
              <span className="text-black font-extrabold">LL Bean</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789719709/llbean_logo_xsbw4x.webp" alt="LL Bean" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">LL Bean Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(14.2k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified L.L.Bean Promo Code and L.L.Bean Discount Code offers to save up to 60% OFF sale styles and up to 50% OFF new markdowns on clothing, jackets, footwear, and outdoor essentials in September 2026.
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
                    { icon: Tag, val: "21", label: "Offers" },
                    { icon: Percent, val: "90+", label: "Deals" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790324560/51_n5ul59.webp" alt="LL Bean Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">LL Bean Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "UP TO 60%", title: "L.L.Bean promo code - Up to 60% Off Sale", desc: "Save up to 60% OFF on selected L.L.Bean styles in the sale collection.", bullets: ["Discover new markdowns across clothing and seasonal favorites at reduced prices.", "Shop now to grab your favorite L.L.Bean deals before the sale ends."] },
                  { label: "SALE", value: "UP TO 50%", title: "L.L.Bean Promo Code – New Markdowns | Up To 50% OFF", desc: "Save up to 50% on newly marked-down L.L.Bean clothing, footwear and seasonal styles.", bullets: ["Browse the L.L.Bean sale for deals across men's, women's and kids' collections.", "Shop the L.L.Bean store and check for an eligible L.L.Bean promo or L.L.Bean coupon before checkout."] },
                  { label: "SALE", value: "15% OFF", title: "L.L.Bean Promo Code – Holiday Sale | 15% OFF", desc: "Get 15% OFF eligible sitewide orders during the Holiday Sale.", bullets: ["Explore L.L.Bean clothing, L.L.Bean men's jackets, shirts and other cold-weather essentials.", "Visit the L.L.Bean store in the USA and look for an available L.L.Bean promo code."] },
                  { label: "SALE", value: "UP TO 50%", title: "L.L.Bean Promo Code – Sitewide Savings | Up To 50% OFF", desc: "Enjoy up to 50% OFF selected products across the L.L.Bean website.", bullets: ["Discover L.L.Bean mens, L.L.Bean womens, footwear, accessories and outdoor essentials.", "Shop the L.L.Bean sale and check for an eligible L.L.Bean coupon before placing your order."] },
                  { label: "SALE", value: "UP TO 50%", title: "L.L.Bean Promo Code – Savings Alert | Up To 50% OFF", desc: "Grab savings of up to 50% on selected L.L.Bean products.", bullets: ["Find discounted L.L.Bean clothing, footwear and outdoor gear for the whole family.", "Explore the L.L.Bean outlet-style deals and check for an available L.L.Bean promo at checkout."] },
                  { label: "NEW", value: "10% OFF", title: "L.L.Bean Promo Code – New Customer Offer | 10% OFF", desc: "New customers can receive a flat 10% OFF their first eligible order after signing up.", bullets: ["Discover L.L.Bean clothing, accessories and outdoor favourites across the latest collections.", "Join the L.L.Bean store community and check the offer terms before using the L.L.Bean coupon."] },
                  { label: "SALE", value: "25% OFF", title: "L.L.Bean Promo Code – Storewide Offer | 25% OFF", desc: "Save 25% on eligible L.L.Bean orders with this special promotion.", bullets: ["Shop everything from L.L.Bean jeans and shirts to jackets, footwear and outdoor essentials.", "Browse the L.L.Bean sale and check for an eligible L.L.Bean promo code before checkout."] },
                  { label: "CARD", value: "20% OFF", title: "L.L.Bean – Mastercard Approval | 20% OFF", desc: "Save 20% when approved for an L.L.Bean Mastercard, along with additional cardholder benefits.", bullets: ["The L.L.Bean Mastercard can provide extra savings when shopping eligible products.", "Review the terms of the llbeanmastercard offer before applying or making a purchase."] },
                  { label: "SALE", value: "UP TO 55%", title: "L.L.Bean – Home Goods | Up To 55% OFF", desc: "Save up to 55% on selected home goods from L.L.Bean.", bullets: ["Explore useful home essentials including the popular L.L.Bean dog bed and other household products.", "Shop the L.L.Bean store and check for an L.L.Bean coupon on qualifying home purchases."] },
                  { label: "SALE", value: "UP TO 50%", title: "L.L.Bean – Outerwear | Up To 50% OFF", desc: "Save up to 50% on selected outerwear and cold-weather clothing.", bullets: ["Shop L.L.Bean down jackets, L.L.Bean men's jackets and L.L.Bean women's jackets for seasonal protection.", "Explore the L.L.Bean sale and check for an available L.L.Bean promo code on eligible styles."] },
                  { label: "SALE", value: "UP TO 50%", title: "L.L.Bean – Kids' Swimwear | Up To 50% OFF", desc: "Enjoy up to 50% OFF selected kids' swimwear.", bullets: ["Find comfortable seasonal styles for children at the L.L.Bean store.", "Browse the L.L.Bean sale and check for an eligible L.L.Bean coupon before ordering."] },
                  { label: "SALE", value: "25% OFF", title: "L.L.Bean – Sonic Snow Tube | 25% OFF", desc: "Get a flat 25% OFF the Sonic Snow Tube.", bullets: ["Add this seasonal outdoor item to your winter gear collection for snowy adventures.", "Shop L.L.Bean outdoor products and check for an available L.L.Bean promo at checkout."] },
                  { label: "CARD", value: "UP TO 25%", title: "L.L.Bean – Mastercard | Up To 25% OFF", desc: "Get up to 25% OFF through eligible L.L.Bean Mastercard savings.", bullets: ["Cardholders can explore additional benefits when shopping qualifying L.L.Bean products.", "Check the llbeanmastercard terms and conditions for details on eligible purchases."] },
                  { label: "CARD", value: "20% OFF", title: "L.L.Bean – Mastercard | 20% OFF", desc: "Enjoy 20% OFF eligible orders when using an L.L.Bean Mastercard.", bullets: ["Shop L.L.Bean clothing, footwear, accessories and outdoor essentials with the cardholder offer.", "Explore the L.L.Bean store and review the llbeanmastercard terms before checkout."] },
                  { label: "SALE", value: "UP TO 40%", title: "L.L.Bean – Home Goods | Up To 40% OFF", desc: "Save up to 40% on selected home goods at L.L.Bean.", bullets: ["Discover practical products for your home, including the L.L.Bean dog bed and other household favourites.", "Shop the L.L.Bean sale and look for an eligible L.L.Bean promo code before completing your order."] },
                  { label: "FROM", value: "$9.99", title: "L.L.Bean – Toddlers' Graphic Tee | From $9.99", desc: "Shop the Toddlers' Graphic Tee, Short-Sleeve Glow-In-The-Dark style from $9.99.", bullets: ["Find fun and comfortable kids' clothing at reduced prices through the L.L.Bean sale.", "Visit the L.L.Bean store and check for an available L.L.Bean coupon on qualifying orders."] },
                  { label: "SALE", value: "25% OFF", title: "L.L.Bean – Women's VentureSoft Pullover | 25% OFF", desc: "Get the Women's VentureSoft Quilted Funnelneck Pullover for $59.99, reduced from $79.95.", bullets: ["Save 25% on this comfortable women's layer designed for casual and outdoor wear.", "Explore L.L.Bean womens clothing and check for an eligible L.L.Bean promo code before purchase."] },
                  { label: "SALE", value: "22% OFF", title: "L.L.Bean – Women's Scotch Plaid Flannel Pajamas | 22% OFF", desc: "Save 22% on Women's Scotch Plaid Flannel Pajamas, now $69.99 instead of $89.95.", bullets: ["Enjoy a soft and comfortable sleepwear option from the L.L.Bean womens collection.", "Shop the L.L.Bean store and check for an available L.L.Bean promo on eligible products."] },
                  { label: "ONLY", value: "$150", title: "L.L.Bean – Men's NextVenture Waterproof Slip-On Shoes | $150", desc: "Shop Men's NextVenture Waterproof Slip-On Shoes in leather for $150.", bullets: ["These practical shoes are designed for comfortable everyday and outdoor use.", "Explore L.L.Bean mens footwear and check for an eligible L.L.Bean coupon before checkout."] },
                  { label: "ONLY", value: "$150", title: "L.L.Bean – Women's Adirondack Barn Coat | $150", desc: "Get the Women's Adirondack Barn Coat with flannel lining for $150.", bullets: ["The versatile outer layer is a practical addition to an L.L.Bean womens wardrobe.", "Browse L.L.Bean women's jackets and check for an available L.L.Bean promo code before ordering."] },
                  { label: "SHOP", value: "SLIPPERS", title: "L.L.Bean – Wicked Good Slippers", desc: "Discover the popular L.L.Bean Wicked Good Slippers for cozy everyday comfort.", bullets: ["Explore L.L.Bean slippers and L.L.Bean mens slippers in selected styles and sizes.", "Shop the L.L.Bean store and check for current L.L.Bean sale offers before purchasing."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop LL Bean: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is LL Bean?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    L.L.Bean is an American outdoor retailer founded in 1912 by Leon Leonwood Bean in Freeport, Maine. The company began with its famous Maine Hunting Shoe and grew into a broad outdoor and lifestyle retailer offering apparel, footwear, hunting and fishing equipment, camping gear, luggage, home products, and more.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    L.L.Bean is particularly known for combining practical design with outdoor functionality. Its product range covers everything from waterproof boots and hiking shoes to insulated jackets, flannel shirts, backpacks, sleeping bags, and outdoor furniture.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand also offers plenty for shoppers who aren't heading into the wilderness. Casual clothing, sweaters, pajamas, slippers, bedding, home décor, bags, and accessories make L.L.Bean relevant for everyday shopping as well.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its product selection is organized around both activities and lifestyles, making it easy to shop for hiking, camping, fishing, hunting, travel, winter weather, casual weekends, or simply comfortable everyday clothing.

                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    That combination of outdoor performance and everyday practicality is a big part of what makes L.L.Bean distinctive.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Shirt, name: "Outdoor Apparel", count: "40+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Footprints, name: "Boots & Footwear", count: "20+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Gift, name: "Gift Ideas", count: "10+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: Truck, name: "Free Shipping", count: "30+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Search, name: "New Arrivals", count: "12+", color: "text-orange-500", href: "/categories/fashion" },
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
  <h3 className="text-black font-black text-lg mb-2">
    How to Save More at L.L.Bean
  </h3>
  <p className="text-gray-500 font-medium text-[11px] leading-relaxed mb-8">
    You don't have to rely on one discount method when shopping at L.L.Bean.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Receipt,
        title: "Compare sale prices with promo codes.",
        sub: "A sale item may already offer strong value, so compare the final price rather than assuming a coupon is automatically better.",
      },
      {
        icon: Calendar,
        title: "Shop seasonally.",
        sub: "Outdoor products naturally become more relevant at different times of the year. Planning ahead can help you shop before you urgently need something.",
      },
      {
        icon: Gift,
        title: "Look at clearance and sale sections.",
        sub: "If you're flexible about color or style, discounted merchandise can provide another route to savings.",
      },
      {
        icon: ShieldAlert,
        title: "Build your cart thoughtfully.",
        sub: "If a promotion has a minimum purchase requirement, make sure you're adding products you actually want rather than spending unnecessarily just to trigger a discount.",
      },
      {
        icon: Tag,
        title: "Check CouponsBit before checkout.",
        sub: "A quick search for a current L.L.Bean coupon, promo, or deal can help you make sure you're not overlooking an available offer.",
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
          L.L.Bean Promo Code, Coupon Code & Discount Offers
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
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        ["Up to 60% Off Sale", "Up to 60% OFF", "All Users", "Savings on selected L.L.Bean apparel and seasonal favorites", "Sale Collection"],
        ["New Markdowns Deal", "Up to 50% OFF", "All Users", "Newly marked-down clothing, footwear, and seasonal gear", "Men's, Women's & Kids' Collections"],
        ["Holiday Sale Promotion", "15% OFF", "All Users", "Sitewide savings on eligible cold-weather essentials", "Sitewide / Cold-Weather Apparel"],
        ["Sitewide Savings", "Up to 50% OFF", "All Users", "Discounts across apparel, outdoor equipment, and footwear", "Sitewide Products"],
        ["Savings Alert Deal", "Up to 50% OFF", "All Users", "Outlet-style deals on outdoor gear and family clothing", "Selected Apparel & Outdoor Gear"],
        ["New Customer Offer", "10% OFF", "First-Time Customers", "Sign up required; valid on first eligible purchase", "Sitewide / First Orders"],
        ["Storewide Promotion", "25% OFF", "All Users", "Applies to jeans, shirts, jackets, and footwear", "Storewide Orders"],
        ["Mastercard Approval Offer", "20% OFF", "New Cardholders", "Save 20% upon approval for the L.L.Bean Mastercard", "Qualifying Purchases"],
        ["Home Goods Sale", "Up to 55% OFF", "All Users", "Savings on home essentials including dog beds and decor", "Home Goods Collection"],
        ["Outerwear Sale", "Up to 50% OFF", "All Users", "Discounts on down jackets, parkas, and cold-weather gear", "Men's & Women's Outerwear"],
        ["Kids' Swimwear Deal", "Up to 50% OFF", "All Users", "Seasonal savings on children's swimwear styles", "Kids' Swimwear"],
        ["Sonic Snow Tube Deal", "25% OFF", "All Users", "Flat 25% discount on winter snow tubes", "Outdoor Snow Gear"],
        ["Mastercard Cardholder Savings", "Up to 25% OFF", "L.L.Bean Cardholders", "Exclusive cardholder discount on qualifying orders", "Qualifying L.L.Bean Orders"],
        ["Mastercard Shopping Discount", "20% OFF", "L.L.Bean Cardholders", "Enjoy 20% off when paying with an L.L.Bean Mastercard", "Clothing, Footwear & Gear"],
        ["Home Goods Discount", "Up to 40% OFF", "All Users", "Savings on select home items, beds, and accessories", "Home Goods"],
        ["Toddlers' Graphic Tee", "From $9.99", "All Users", "Short-sleeve glow-in-the-dark graphic tees for toddlers", "Toddlers' Apparel"],
        ["Women's VentureSoft Pullover", "25% OFF ($59.99)", "All Users", "Reduced from $79.95; quilted funnelneck pullover", "Women's Pullovers"],
        ["Women's Scotch Plaid Pajamas", "22% OFF ($69.99)", "All Users", "Reduced from $89.95; soft flannel sleepwear set", "Women's Pajamas & Sleepwear"],
        ["Men's NextVenture Shoes", "$150.00", "All Users", "Waterproof leather slip-on shoes for everyday wear", "Men's Footwear"],
        ["Women's Adirondack Barn Coat", "$150.00", "All Users", "Flannel-lined versatile barn coat", "Women's Outerwear"],
        ["Wicked Good Slippers", "Special Price", "All Users", "Cozy shearling-lined everyday slippers", "Men's & Women's Slippers"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 20 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Some brands sell clothes. Others sell gear. Then there are brands like L.L.Bean, where you can walk in looking for a pair of boots and somehow leave thinking about flannel shirts, hiking gear, slippers, and a new jacket for winter.
          </p>
          <p>
            Known for its outdoor heritage and practical, durable products, L.L.Bean has become a go-to destination for shoppers looking for clothing, footwear, outdoor equipment, and home essentials. Whether you're preparing for a camping trip, refreshing your cold-weather wardrobe, or looking for a comfortable everyday pair of shoes, there is plenty to explore.
          </p>
          <p>
            And before placing your order, checking for an L.L.Bean promo code can be a smart way to look for additional savings. CouponsBit helps shoppers discover available L.L.Bean coupons, promotions, deals, and other offers so they can compare their options before checkout.
          </p>

          <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <p>
    If L.L.Bean is already on your shopping list, checking for an L.L.Bean promo code before completing your order is worth doing.
  </p>
  <p>
    Start by looking through the latest offers on CouponsBit. You may find a promotional code, seasonal offer, product-specific discount, or another deal that could apply to your purchase.
  </p>
  <p>
    However, don't assume that every code works across the entire L.L.Bean website. Promotions can have specific conditions, including eligible products, minimum purchase requirements, exclusions, expiration dates, or other restrictions.
  </p>
  <p>
    The smartest approach is to compare the available promo with L.L.Bean's own sale and promotional offers. If a particular jacket is already discounted, for example, the sale price may be more valuable than a code that applies only to full-price merchandise.
  </p>
  <p>
    Always check the terms and make sure the expected savings appear before completing your purchase.
  </p>

  <div className="space-y-8">
    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">L.L.Bean Coupons, Deals & Offers</h3>
      <p>L.L.Bean offers several ways for shoppers to find value throughout the year. While the exact promotions change, you may come across seasonal sales, clearance events, product-specific offers, limited-time promotions, and promotional codes.</p>
      <p>Depending on the current campaign, shoppers may find savings on categories such as:</p>
      <p><strong>Apparel & Outerwear:</strong> Clothing, cold-weather essentials, kids' clothing, and selected seasonal merchandise.</p>
      <p><strong>Footwear & Gear:</strong> Boots, shoes, outdoor equipment, camping gear, bags, luggage, and accessories.</p>
      <p><strong>Home & Living:</strong> Quality home products, bedding, and cozy outdoor furniture.</p>
      <p>This is why it pays to look beyond a single L.L.Bean coupon code. A strong sale on the product you actually want can sometimes beat a general promotion.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop L.L.Bean Clothing</h3>
      <p>L.L.Bean's apparel collection covers a wide range of everyday and outdoor clothing for men, women, and kids.</p>
      <p>For warmer months, shoppers can find T-shirts, polos, shorts, lightweight shirts, dresses, swimwear, and other easygoing pieces. When temperatures drop, the selection shifts toward sweaters, fleece, flannel, insulated jackets, vests, parkas, and other cold-weather layers.</p>
      <p>The brand is particularly associated with practical fabrics and classic styling, which makes many of its pieces easy to incorporate into an everyday wardrobe. You can also shop clothing based on activity like hiking, travel, fishing, and hunting.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">L.L.Bean Boots & Footwear</h3>
      <p>Few L.L.Bean products are as recognizable as its footwear. The Bean Boot, also known as the Maine Hunting Shoe, is one of the company's signature products originally designed for outdoor use.</p>
      <p>The broader footwear collection includes hiking boots, trail shoes, sneakers, sandals, slippers, casual shoes, winter boots, and other options for different conditions and activities.</p>
      <p>When shopping for footwear, think about where you'll actually use it. You can also check for an L.L.Bean promo code before ordering to see whether a current offer can improve the value of your purchase.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Outdoor Gear, Bags & Travel Equipment</h3>
      <p>Planning a camping trip? You can shop for tents, sleeping bags, sleeping pads, camp furniture, coolers, cooking equipment, backpacks, and other essentials, along with gear for fishing, hunting, paddling, and snow sports.</p>
      <p>L.L.Bean offers iconic totes, backpacks, duffle bags, travel bags, and luggage designed around different everyday and outdoor needs, emphasizing capacity, organization, durability, and weather resistance.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">L.L.Bean Home & Kids Selection</h3>
      <p>Its home collection includes bedding, towels, blankets, pillows, furniture, décor, storage solutions, and pet products. Flannel bedding and cozy blankets are especially appealing during colder months.</p>
      <p>Parents can shop for kids' clothing, footwear, outerwear, backpacks, sleepwear, accessories, and outdoor gear built to handle school days, playgrounds, family trips, and changing weather.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Seasonal, Holiday Shopping & How to Use a Promo Code</h3>
      <p>L.L.Bean fits into seasonal moments year-round: rainwear and hiking gear in Spring; camping equipment and swimwear in Summer; flannel, fleece, and layering pieces in Fall; and parkas, thermal layers, and winter boots during Winter.</p>
      <p>It's also ideal for Back-to-School shopping and holiday gifting during Black Friday and Cyber Monday. To use a promo code, review the terms on CouponsBit, add your items to the L.L.Bean cart, enter the code in the offer field at checkout, and ensure your savings apply before finalizing your purchase.</p>
    </div>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Check CouponsBit for L.L.Bean Deals?</h3>
              <p>Shopping at L.L.Bean often involves larger purchases than a single casual clothing item. You might be buying a winter jacket, a pair of boots, camping equipment, or several gifts at once.</p>
              <p>That makes it even more worthwhile to check for savings before placing an order.</p>
              <p>CouponsBit provides a convenient place to look for an L.L.Bean promo code, coupons, deals, and other promotional opportunities. You can compare the available offers with the discounts already featured on L.L.Bean and then decide which option makes the most sense for your purchase.</p>
              <p>The important thing is to focus on the final value rather than chasing a coupon simply because it says “discount.” A sale, promotion, or product-specific offer may sometimes be the better choice.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Gear Up and Save on Your Next L.L.Bean Order</h3>
              <p>From the iconic Bean Boot to camping equipment, flannel shirts, backpacks, winter jackets, home essentials, and everyday footwear, L.L.Bean has built a product range around comfort, practicality, and getting outside.</p>
              <p>Whether you're preparing for a weekend adventure or simply upgrading your everyday wardrobe, it's worth checking current offers before you buy. Search CouponsBit for an L.L.Bean promo code, compare it with available sales and promotions, and review the terms before completing your order.</p>
              <p>A little planning can make your next L.L.Bean shopping trip—and your final checkout total—a whole lot better.</p>
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
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            L.L.Bean Promo Code FAQs
          </h3>
          {[
            { q: "Does L.L.Bean offer promo codes?", a: "L.L.Bean runs promotional offers throughout the year, and some promotions may include codes or other qualifying offers. Availability and terms can change, so check for current promotions before ordering." },
            { q: "How can I find an L.L.Bean promo code?", a: "You can check CouponsBit for available L.L.Bean promotions before shopping. Compare any available code with the current sales and offers on the L.L.Bean website." },
            { q: "Can I use an L.L.Bean promo code on sale items?", a: "It depends on the individual promotion. Some offers may exclude sale or clearance merchandise, while others may apply only to eligible products. Always check the terms." },
            { q: "What is L.L.Bean best known for?", a: "L.L.Bean is particularly known for its Maine Hunting Shoe or Bean Boot, as well as its outdoor apparel, footwear, camping equipment, and classic lifestyle products." },
            { q: "Does L.L.Bean sell more than outdoor gear?", a: "Yes. In addition to outdoor equipment, L.L.Bean sells clothing, footwear, bags, luggage, home products, bedding, furniture, accessories, kids' products, and other lifestyle merchandise." },
            { q: "Does L.L.Bean sell camping equipment?", a: "Yes. Its outdoor selection includes products such as tents, sleeping bags, sleeping pads, backpacks, camp furniture, cooking equipment, and other camping essentials." },
            { q: "Can I shop L.L.Bean for winter clothing?", a: "Yes. L.L.Bean offers a broad range of cold-weather products, including insulated jackets, parkas, sweaters, fleece, flannel, winter footwear, hats, gloves, and other seasonal essentials." },
            { q: "Does L.L.Bean have Black Friday deals?", a: "L.L.Bean may run holiday and Black Friday promotions, but the specific offers change from year to year. Check current promotions when the shopping season begins." },
            { q: "Is it worth checking for an L.L.Bean promo code before checkout?", a: "Yes. Even if you're already shopping a sale, checking for a current promo code or offer takes little time and can help you compare your available savings options." }
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
            Popular L.L.Bean Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "L.L.Bean Promo Code",
              "Bean Boots Deals",
              "Outerwear Discounts",
              "Free Shipping Code",
              "First Order Discount",
              "Clearance Sales",
              "Mastercard Rewards",
              "Seasonal Sale"
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
            Today's Top L.L.Bean Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "DEAL OF THE WEEK", sub: "Up to 50% OFF Clearance & Sale Items" },
              { heading: "WELCOME BONUS", sub: "10% OFF Your First Order w/ Email Sign-Up" },
              { heading: "FREE SHIPPING", sub: "Free Standard Shipping on Orders $75+" },
              { heading: "OUTDOOR GEAR", sub: "Backpacks & Totes Starting From $29.95" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  {i + 1}
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
                  aria-label={`Shop L.L.Bean: ${deal.heading}`}
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
