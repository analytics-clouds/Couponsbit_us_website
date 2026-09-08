"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent,ShoppingCart, HelpCircle, Layers,
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
  Shirt,
  Gift,
  Smartphone,
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
  { id: "d1", label: "NEW", heading: "New User Welcome Offer, Up To 90% OFF", sub: "Latest Deals" },
  { id: "d2", label: "SALE", heading: "Flash Deals, Up To 70% OFF", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Free Shipping On Orders", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Free Gift with Purchase", sub: "Featured Picks" },
  { id: "d5", label: "SALE", heading: "Clearance Picks, Up To 80% OFF", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Wish.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/wish-logo_n1dypa.webp", dealText: "Up To 60% OFF", href: "/stores/wish-discount-code" },
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "AliExpress", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788783184/aliexpress-logo_uued0o.webp", dealText: "Up To 70% OFF", href: "/stores/aliexpress-promo-code" },
  { name: "Geekbuying", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/geekbuying-logo_pnkeev.webp", dealText: "Up To 56% OFF", href: "/stores/geekbuying-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
];

const STORE_URL = "https://www.temu.com";

export default function TemuCouponsContent() {
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
              <span className="text-black font-extrabold">Temu</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788783183/temu-logo_our7ig.webp" alt="Temu" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Temu</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(30.2k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Temu coupon codes and discount codes for Sep 2026. Save up to 90% on fashion, home goods and electronics, plus free shipping and gifts with the latest verified offers.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "5K+", label: "Deals" },
                    { icon: Users, val: "15M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788783183/temu-logo_our7ig.webp" alt="Temu Coupon Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Temu Coupon Codes & Offers</h2>
                </div>

                {[
                  { label: "NEW", value: "Up To 90% OFF", title: "Temu – New User Welcome Offer", desc: "New shoppers can unlock exclusive first-order discounts across categories.", bullets: ["Sign up as a new Temu user to unlock welcome pricing.", "Discounts apply across fashion, home and electronics.", "Offer availability may vary by region."] },
                  { label: "SALE", value: "Up To 70% OFF", title: "Temu – Flash Deals", desc: "Shop limited-time flash deal pricing across fashion, home and electronics.", bullets: ["Flash deals run for a limited time on select products.", "Discounts apply across multiple popular categories.", "Check back often as flash deal items rotate frequently."] },
                  { label: "DEAL", value: "FREE SHIP", title: "Temu – Free Shipping On Orders", desc: "Enjoy free shipping on qualifying Temu orders.", bullets: ["Shop fashion, home goods and electronics.", "Look for the free shipping tag at checkout.", "Availability varies by item and destination."] },
                  { label: "DEAL", value: "FREE GIFT", title: "Temu – Free Gift with Purchase", desc: "Get a free gift added to select qualifying orders.", bullets: ["Add qualifying items to your cart to unlock a free gift.", "Gift selection may vary and is subject to availability.", "Combine with other available offers where permitted."] },
                  { label: "SALE", value: "Up To 80% OFF", title: "Temu – Clearance Picks", desc: "Shop clearance-priced items across multiple categories.", bullets: ["Find clearance pricing across fashion, home and electronics.", "Stock is limited and changes regularly.", "Great for finding one-off deals at reduced prices."] },
                  { label: "DEAL", value: "Extra 30% OFF", title: "Temu – App-Exclusive Coupons", desc: "Unlock extra discounts available only through the Temu app.", bullets: ["Download the Temu app to access exclusive coupons.", "Combine app coupons with select store promotions.", "App-only pricing updates regularly."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Temu: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">Find a Temu Promo Code</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   A good promo code can make online shopping a little easier on your wallet. Temu regularly features promotions across different product categories, and the offers available to shoppers can change depending on the products, account eligibility, campaign period, or other terms.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Before placing an order, visit CouponsBit to look for an available Temu promo code. Check the conditions attached to the offer, including expiration dates, minimum purchase requirements, eligible products, and any restrictions.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   If a code isn’t suitable for your order, don’t worry. Temu also provides other ways to find savings, including product-level discounts, limited-time promotions, coupons, special events, and app-based offers.

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
                        { icon: Smartphone, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
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
  <h3 className="text-black font-black text-lg mb-4">
    How to Use a Temu Promo Code
  </h3>
  <p className="text-gray-500 font-medium text-[11px] leading-relaxed mb-8">
    Applying a Temu promo code is usually a simple part of the checkout process.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Search,
        title: "Find and Review Your Offer",
        sub: "First, find an eligible offer on CouponsBit and read the conditions carefully.",
      },
      {
        icon: ShoppingCart,
        title: "Follow the Checkout Steps",
        sub: (
          <>
            Then:
            <ul className="list-disc pl-4 mt-2 space-y-1">
              <li>Visit Temu and select the products you want.</li>
              <li>Add your items to the shopping cart.</li>
              <li>Proceed to checkout.</li>
              <li>Enter the applicable promo or coupon code in the designated field.</li>
              <li>Apply the code.</li>
              <li>Review the order total and confirm that the expected promotion has been applied.</li>
              <li>Complete your purchase.</li>
            </ul>
          </>
        ),
      },
      {
        icon: HelpCircle,
        title: "Troubleshoot If Needed",
        sub: "If your code doesn’t work, check whether it has expired or whether your order meets the requirements. Some promotions may only apply to particular products, customers, regions, or promotional periods.",
      },
      {
        icon: Layers,
        title: "Check Combination Rules",
        sub: "You should also check whether another offer is already applied to your order and whether the promotions can be combined.",
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
          <div className="text-gray-500 font-medium text-[11px] leading-relaxed">
            {item.sub}
          </div>
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
          Temu Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Finding something useful online without spending a fortune is part of the appeal of shopping on Temu. From home essentials and electronics to fashion, beauty products, gadgets, accessories, and everyday items, the marketplace brings a huge variety of products together in one place. With frequent promotions and rotating offers, there are plenty of opportunities to look for savings before you check out.
          </p>
          <p>
            If you’re planning your next Temu order, checking for a Temu promo code on CouponsBit can be a smart first step. You can compare available coupon codes and promotional offers with the deals already running on Temu to find an option that works best for your purchase.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Temu Coupon Code and Discount Offers</h3>
    <p>Temu shopping is built around frequent deals, which means you don’t always need to rely on a traditional coupon to save.</p>
    <p>You may come across a Temu coupon code while browsing promotional offers, or you might find an item that is already discounted. Depending on the current campaign, Temu can also feature bundles, limited-time offers, new-user promotions, and other incentives.</p>
    <p>The best approach is to compare the available savings before completing your order. A Temu discount code may be useful for one purchase, while a product promotion or coupon bundle could provide better value for another.</p>
    <p>Because promotions can change frequently, always check the applicable terms before assuming an offer will work with your cart.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">What Can You Buy on Temu?</h3>
    <p>One of the biggest attractions of Temu is its enormous selection of products. Whether you’re looking for something practical for the home or simply browsing for an interesting gadget, you can explore a wide range of categories.</p>
    <p><strong>Home and Kitchen:</strong> Give your home a small refresh without making a major shopping trip. Temu features kitchen organizers, storage solutions, cookware, tableware, cleaning products, home décor, lighting, bathroom accessories, and other household items.</p>
    <p>From organization products for a cluttered drawer to decorative pieces for a living room, this category is worth exploring when you’re looking for affordable everyday additions.</p>
    <p><strong>Electronics and Gadgets:</strong> If you enjoy discovering useful gadgets, Temu has plenty to browse. You can find accessories, cables, chargers, smart-home products, computer accessories, phone accessories, LED lighting, and other electronics-related items.</p>
    <p>Before buying electronics, pay attention to specifications, compatibility, reviews, and seller information rather than choosing solely based on price.</p>
    <p><strong>Fashion and Accessories:</strong> Temu also offers clothing and accessories for women, men, and children. Shoppers can browse dresses, tops, bottoms, activewear, shoes, bags, jewelry, watches, sunglasses, and other fashion accessories.</p>
    <p>Since styles and inventory change regularly, checking the latest offers can be worthwhile if you’re shopping for seasonal clothing or accessories.</p>
    <p><strong>Beauty and Personal Care:</strong> Beauty shoppers can explore makeup accessories, skincare tools, hair accessories, grooming products, personal-care items, and beauty organizers.</p>
    <p>When purchasing products that come into contact with your skin, hair, or body, make sure you review the product description, ingredients where applicable, seller information, and customer reviews before ordering.</p>
    <p><strong>Toys and Hobbies:</strong> Parents and gift shoppers can browse toys, games, crafts, educational products, collectibles, and hobby supplies.</p>
    <p>This can be particularly useful around birthdays and holidays when shoppers are looking for small gifts, party supplies, or creative activities.</p>
    <p><strong>Pet Supplies:</strong> Temu also offers products for pets, including toys, grooming accessories, feeding supplies, collars, beds, and other everyday pet accessories.</p>
    <p>Whether you’re shopping for a new pet accessory or looking for something to keep your dog or cat entertained, it’s another category worth exploring.</p>
    <p><strong>Automotive Accessories:</strong> Car owners can find a range of automotive accessories and useful items, from organization products and interior accessories to cleaning tools and other vehicle-related supplies.</p>
    <p>Always confirm compatibility and product specifications before purchasing anything intended for a particular vehicle.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Temu Deals and Limited-Time Offers</h3>
    <p>Temu is known for frequently changing promotions, so it pays to check the latest offers rather than assuming yesterday’s deal is still available.</p>
    <p>Limited-time promotions can be particularly useful when you already know what you want to buy. If you see a product you need included in a current promotion, compare its offer with any available Temu coupon code before checking out.</p>
    <p>Flash-style promotions and countdown offers can also create a sense of urgency, but you should still take a moment to confirm that the product meets your needs and that the advertised saving represents a good deal for you.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Temu During Major US Shopping Seasons</h3>
    <p>The timing of your purchase can also influence the type of promotions you find. Major US shopping periods often bring increased promotional activity across online retailers, and Temu can be worth checking during these occasions.</p>
    <p>Valentine’s Day can be a good time to browse gifts, accessories, home décor, and small surprises. Around Mother’s Day and Father’s Day, shoppers can look for personalized gifts, gadgets, hobby products, and everyday accessories.</p>
    <p>As summer approaches, promotions may focus on outdoor products, travel accessories, clothing, home organization, and seasonal essentials. Back-to-school season is another useful period for finding supplies, accessories, storage products, electronics accessories, and items for students.</p>
    <p>Later in the year, shoppers can watch for Halloween, Thanksgiving, Black Friday, Cyber Monday, Christmas, and New Year promotions. These shopping events can be particularly useful if you’re buying gifts or stocking up on household and lifestyle products.</p>
    <p>The important thing is not to wait for a specific holiday if you already find a suitable deal. Temu promotions change frequently, so a good offer available today may be more useful than waiting for an event that has no guarantee of a better discount.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Temu Coupons for New and Existing Shoppers</h3>
    <p>Some Temu promotions may be designed specifically for new customers, while other offers can be available to existing shoppers. Eligibility can vary depending on the campaign and the customer's account.</p>
    <p>If you’re a first-time shopper, check whether a new-user promotion is available before placing your first order. Existing customers should also look for account-specific coupons, promotional events, or other eligible offers.</p>
    <p>This is another reason to read the terms of a Temu promotion carefully. A code that works for a new account may not apply to an existing customer, and some offers may require specific products or spending thresholds.</p>
  </div>
</div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Get Better Temu Deals</h3>
            <p>
              The easiest way to improve your chances of finding a good Temu deal is to compare different types of savings rather than relying on one coupon.
            </p>
            <p>
              Start by checking CouponsBit for a current Temu promo code. Then browse Temu’s ongoing promotions and compare the final eligible savings.
            </p>
            <p>
              It can also help to create a shopping list before browsing. Temu has a huge product selection, and it’s easy to add items simply because they look interesting. Having a clear list helps you focus on products you actually need.
            </p>
            <p>
              For larger shopping trips, consider grouping related purchases together when a promotion has a minimum-spend requirement. However, don’t buy unnecessary products simply to qualify for a discount.
            </p>
            <p>
              Customer reviews are another important part of smart shopping. Look at ratings, written reviews, product images, dimensions, specifications, and seller information before purchasing, especially for electronics, clothing, beauty products, and products where quality or fit matters.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Check CouponsBit Before Shopping at Temu?</h3>
            <p>
              Searching for a coupon can sometimes feel like another task on your shopping list. CouponsBit makes that process easier by giving shoppers a convenient place to look for available Temu savings before checkout.
            </p>
            <p>
              You can check for a Temu promo code, compare coupon offers, and look for other deals that could help reduce your shopping costs.
            </p>
            <p>
              The goal isn’t simply to find a coupon. It’s to help you make a better-informed purchase by comparing the promotions available at the time you shop.
            </p>
            <p>
              Whether you’re picking up home accessories, browsing gadgets, buying gifts, refreshing your wardrobe, or looking for everyday essentials, checking for an offer first can become a simple part of your Temu shopping routine.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Find Temu Savings Before You Shop</h3>
            <p>
              Temu gives US shoppers plenty to explore, from home and fashion to electronics, beauty, hobbies, pet supplies, and everyday essentials. With new products and promotions appearing regularly, there are often different ways to approach your shopping and look for better value.
            </p>
            <p>
              Before placing your next order, check CouponsBit for a Temu promo code and compare it with the latest offers available on the platform. Whether you’re shopping for one useful item or putting together a larger cart, checking for savings before checkout can help you shop more confidently and keep your budget in mind.
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Temu Promo Codes</h3>
          {[
            { q: "Does Temu offer promo codes?", a: "Yes. Temu frequently runs promotional campaigns and offers that may include coupon codes, discounts, product promotions, and other incentives. Availability and eligibility can vary." },
            { q: "Where can I find a Temu promo code?", a: "You can check CouponsBit for available Temu promo codes and compare them with the promotions currently available on Temu." },
            { q: "Can I use a Temu coupon code on discounted products?", a: "It depends on the specific promotion. Some codes may have product or purchase restrictions, while others may have different eligibility requirements. Check the terms before applying the offer." },
            { q: "Does Temu have seasonal sales?", a: "Temu frequently runs promotional campaigns throughout the year. Major US shopping periods such as Valentine's Day, Mother's Day, Back-to-School, Halloween, Black Friday, Cyber Monday, and Christmas can be useful times to check for additional offers." },
            { q: "Are Temu promotions available to existing customers?", a: "Some promotions are available to existing shoppers, while others may be targeted toward new customers or specific accounts. Check the terms of each promotion to determine eligibility." },
            { q: "Why isn't my Temu promo code working?", a: "A code may fail because it has expired, your order does not meet its requirements, the products are excluded, or the promotion is limited to certain customers. Check the offer conditions before trying another code." },
            { q: "How can I find the best Temu deals?", a: "Compare available Temu promo codes with product discounts, coupons, limited-time promotions, and other offers. Also consider reviews and product specifications so that you’re saving on products that actually meet your needs." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Temu Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Temu Promo Code", "Electronics", "Home Essentials", "Fashion Deals", "Gadgets", "Seasonal Sale", "Flash Sale", "New Users"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Temu Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">T</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Temu: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
