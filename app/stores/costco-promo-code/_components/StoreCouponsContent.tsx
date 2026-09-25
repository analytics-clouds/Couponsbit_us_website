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
  HeartHandshake,
  ShieldAlert,
  Calendar,
  Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Gift,
  Truck,
  ShoppingBag,
  Tv,
  WashingMachine,
  Utensils,
  Shirt,
  HeartPulse,
  Sofa,
  Car,
  Glasses,
  Plane,
  CreditCard,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Wayfair", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787124413/wayfair-logo_upnj98.webp", dealText: "Up To 80% OFF", href: "/stores/wayfair-discount-code" },
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Flat 75% OFF", href: "/stores/etsy-coupon-code" },
  { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra", href: "/stores/home-depot-discount-code" },
];

const STORE_URL = "https://www.costco.com";

export default function CostcoContent() {
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
              <span className="text-black font-extrabold">Costco</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1790238446/costoc-logo_nkxnxl.webp" alt="Costco" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Costco Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(5,400 Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Use the latest Costco Promo Code and Costco Discount Code to unlock up to a $1,200 Costco Shop Card, $500 OFF Costco Direct, $250 OFF HP laptops, and $200 OFF appliances. Shop verified Costco deals on electronics, furniture, travel, apparel, home essentials, and more while enjoying exclusive member savings throughout September 2026.
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
                    { icon: Tag, val: "19", label: "Offers" },
                    { icon: Percent, val: "6", label: "Deals" },
                    { icon: Users, val: "80K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790238446/costoc-logo_nkxnxl.webp" alt="Costco Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Costco Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "ONLY", value: "$1,299.99", title: "Costco Promo Code – iBUYPOWER Gaming PC for $1,299.99", desc: "Get the iBUYPOWER Element Gaming PC Desktop for an online price of $1,299.99 after $500 OFF.", bullets: ["Features include 32GB RAM, 2TB SSD, GeForce RTX 5060 Ti, and Intel Core Ultra 7 265F.", "Shop Costco online for member-only savings and explore Costco TV deals, electronics, and other Costco Wholesale offers."] },
                  { label: "UP TO", value: "$50", title: "Costco Promo Code – Buy More & Save on Select Apparel", desc: "Save $20 when you buy 5+ select apparel items.", bullets: ["Save $50 when you buy 10+ eligible apparel items.", "Explore Costco Wholesale clothing deals along with Costco online offers and everyday values."] },
                  { label: "UP TO", value: "$1,200", title: "Costco Promo Code – Get Up To $1,200 Costco Shop Card", desc: "Get up to a $1,200 Costco Shop Card on eligible prepaid orders.", bullets: ["Take advantage of prepaid-order savings available through Costco online.", "Costco Wholesale members can also explore Costco Black Friday deals and other seasonal promotions."] },
                  { label: "UP TO", value: "$500", title: "Costco Promo Code – Save Up To $500 With Costco Direct", desc: "Save up to $500 on eligible Costco Direct deals.", bullets: ["Shop selected products directly through Costco online and enjoy member savings.", "Explore Costco Wholesale offers across electronics, appliances, furniture, and Costco TV deals."] },
                  { label: "SAVE", value: "$600", title: "Costco Shop Card – Save $600 on Your Cart", desc: "Get $600 OFF on an eligible Costco purchase.", bullets: ["Shop across Costco Wholesale categories and find savings on qualifying products.", "Check Costco online for current offers, including Costco Black Friday deals and seasonal promotions."] },
                  { label: "SAVE", value: "$250", title: "Costco Electronics Deal – Save $250 on Select HP Laptops", desc: "Save $250 on selected HP laptops at Costco.", bullets: ["Upgrade your technology setup with eligible laptop models available through Costco online.", "Explore Costco Wholesale electronics and compare current Costco TV deals and other tech offers."] },
                  { label: "SAVE", value: "$20", title: "Costco Everyday Essentials – $20 OFF Orders Over $125", desc: "Get $20 OFF eligible orders over $125 during the Everyday Essentials Sale.", bullets: ["Shop everyday household products and essentials from Costco Wholesale.", "Browse Costco online for additional savings on products such as Costco dog food, home essentials, and more."] },
                  { label: "SAVE", value: "$500", title: "Costco Shopping Deal – Get $500 OFF Orders Over $2,499", desc: "Save $500 on eligible orders over $2,499.", bullets: ["Shop qualifying products across the Costco Wholesale collection.", "Check Costco online for current offers and explore upcoming Costco Black Friday deals."] },
                  { label: "SAVE", value: "$200", title: "Costco Appliances – Save $200 on Orders Over $1,499", desc: "Get $200 OFF eligible orders over $1,499 on selected appliances.", bullets: ["Shop kitchen and home appliances from Costco Wholesale.", "Explore Costco bakery products, appliances, and other Costco online offers for additional value."] },
                  { label: "SAVE", value: "$150", title: "Costco Jewelry Deal – $150 OFF Orders Over $999", desc: "Get a flat $150 OFF eligible jewelry orders above $999.", bullets: ["Explore jewelry styles and accessories available from Costco Wholesale.", "Shop Costco online for jewelry savings and browse related accessories such as Costco eyeglasses."] },
                  { label: "SAVE", value: "$100", title: "Costco Dyson Deal – $100 OFF Cyclone V10 Animal", desc: "Save $100 on the Dyson Cyclone V10 Animal cordless vacuum cleaner.", bullets: ["Upgrade your home cleaning setup with an eligible Dyson vacuum from Costco.", "Explore Costco Wholesale home appliance deals and other Costco online savings."] },
                  { label: "UP TO", value: "$200", title: "Costco Shopping Offer – Save Up To $200", desc: "Get up to $200 OFF on qualifying purchases.", bullets: ["Shop eligible products across the Costco Wholesale collection.", "Check Costco online for current offers and explore Costco Black Friday deals when available."] },
                  { label: "UP TO", value: "$400", title: "Costco Multi-Buy Deal – Save Up To $400", desc: "Buy 2 and save $100, buy 3 and save $200, buy 4 and save $300, or buy 5 and save $400.", bullets: ["Enjoy bigger savings when purchasing multiple eligible items from Costco Wholesale.", "Browse Costco online for qualifying products and other member-only promotions."] },
                  { label: "UP TO", value: "$300", title: "Costco Furniture Deal – Save Up To $300", desc: "Get up to $300 OFF on eligible furniture purchases.", bullets: ["Shop furniture for bedrooms, living spaces, dining areas, and more from Costco Wholesale.", "Explore Costco online for furniture offers alongside Costco TV deals and other home savings."] },
                  { label: "FROM", value: "$130", title: "Costco Executive Membership – $130 Membership Offer", desc: "Get an Executive Membership for $130.", bullets: ["Enjoy access to Costco Wholesale member benefits and exclusive savings.", "Members can also explore Costco Citi Visa benefits, Costco online offers, and additional membership perks."] },
                  { label: "FROM", value: "$65", title: "Costco Gold Star Membership – $65 Per Year", desc: "Get a Gold Star Membership for just $65 per year.", bullets: ["Enjoy access to Costco Wholesale warehouses and Costco online shopping.", "Membership provides access to products and services including Costco Optical, Costco hearing aid store, and other Costco services."] },
                  { label: "UP TO", value: "$80", title: "Costco Outdoor Collection – Save Up To $80", desc: "Save up to $80 on selected items from the Naples Outdoor Collection.", bullets: ["Refresh your outdoor space with eligible Costco Wholesale furniture and outdoor products.", "Shop Costco online for outdoor savings and seasonal Costco Black Friday deals."] },
                  { label: "UP TO", value: "$50", title: "Costco Outdoor Rugs – Save Up To $50", desc: "Save up to $50 on selected outdoor rugs.", bullets: ["Find stylish rugs for patios, balconies, and outdoor living spaces at Costco Wholesale.", "Explore Costco online home deals along with other seasonal offers."] },
                  { label: "EARN", value: "2%", title: "Costco Travel – Executive Members Earn 2%", desc: "Executive Members can earn a 2% reward on eligible Costco Travel purchases.", bullets: ["Enjoy additional value when booking eligible travel services through Costco Wholesale.", "Check Costco online for travel offers and member benefits, including Costco Citi Visa rewards."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Costco: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Costco?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Costco Wholesale is a membership-based retailer known for its warehouse shopping model and large selection of products sold in bulk or value-oriented formats. The company operates warehouses and an online store, giving members multiple ways to shop. Costco also operates services such as gasoline stations, pharmacy, optical, travel, and other member-focused offerings.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Costco's merchandise range covers categories including groceries, appliances, electronics, furniture, clothing, jewelry, health and personal care, home improvement, sporting goods, toys, pet supplies, tires, and more. Its catalog also includes seasonal merchandise and special-event products.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Another major part of the Costco experience is Kirkland Signature, Costco's private-label brand, which appears across numerous categories including groceries, household products, clothing, health and personal care, and more.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Because Costco combines everyday essentials with larger-ticket purchases and services, shoppers can find themselves using their membership for everything from a weekly grocery run to a new television or vacation package.

                  </p>
                 
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Tag, name: "Groceries", count: "80+", color: "text-blue-500", href: "/categories/home-lifestyle" },
                        { icon: Percent, name: "Electronics", count: "40+", color: "text-purple-500", href: "/categories/home-lifestyle" },
                        { icon: Truck, name: "Shipping Deals", count: "25+", color: "text-pink-500", href: "/categories/home-lifestyle" },
                        { icon: Gift, name: "Gas Station Savings", count: "10+", color: "text-teal-500", href: "/categories/home-lifestyle" },
                        { icon: Calendar, name: "Travel & Vacation", count: "15+", color: "text-orange-500", href: "/categories/home-lifestyle" },
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
    Why Isn't My Costco Promo Code Working?
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      If a Costco promo code doesn't apply, check the offer's terms before assuming the code has expired.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Possible reasons include:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The promotion has ended.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The code is limited to specific products.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>Your order doesn't meet the minimum requirements.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The offer is available only to eligible members.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The promotion is limited to new members.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The code applies only online or only to a particular service.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The offer cannot be combined with another promotion.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span>The code has been entered incorrectly.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Costco's membership privileges and conditions can change, so it's always best to review the current terms associated with an offer.
    </p>
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
        
        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm max-w-xl mb-8">
  <h2 className="text-black font-black text-xl mb-4">
    Costco Promo Code Summary
  </h2>

  <p className="text-gray-500 font-medium text-sm leading-relaxed mb-4">
    <strong>iBUYPOWER Element Gaming PC Desktop</strong> - Get $500 OFF with this product deal.
  </p>

  <ol className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-5 list-decimal">
    <li><strong>Brand:</strong> Costco</li>
    <li><strong>Offer:</strong> iBUYPOWER Element Gaming PC Desktop</li>
    <li><strong>Discount:</strong> $500 OFF</li>
    <li><strong>Final Price:</strong> $1,299.99</li>
    <li><strong>Offer Type:</strong> Product Deal</li>
    <li><strong>Applicable On:</strong> All users on eligible products</li>
    <li><strong>Availability:</strong> Active</li>
    <li><strong>Country:</strong> USA</li>
    <li><strong>Verified By:</strong> Couponsbit</li>
  </ol>
</div>     
        
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Costco Promo Code, Coupon Code & Discount Offers
        </h2>

        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            Costco is the kind of retailer where one shopping trip can cover groceries, household essentials, electronics, clothing, furniture, beauty products, and even your next vacation. With its warehouse model and extensive online selection, Costco gives members access to a wide range of products and services under one membership.
          </p>
          <p>
            If you're already planning a Costco purchase, checking for a Costco promo code before completing your order can be worthwhile. Costco's promotions can take several forms, from product-specific savings and seasonal events to membership offers, Costco Shop Cards, warehouse promotions, and online-only deals.
          </p>
          <p>
            Whether you're stocking the pantry, upgrading your home, shopping for electronics, preparing for the holidays, or planning a trip through Costco Travel, checking the latest offers can help you make the most of your Costco membership.
          </p>

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
        ["Military Discount Plan", "From $2.99 / Month", "Eligible Military Members", "Special discounted monthly rate upon military status verification", "Peacock Subscription"],
        ["Peacock Premium Plan", "$7.99 / Month", "All Users", "Access to movies, shows, live sports, and original entertainment", "Monthly Subscription"],
        ["Select Monthly Plan", "From $7.99 / Month", "All Users", "Select qualifying monthly plan for full streaming access", "Peacock Plans"],
        ["Premium Monthly Subscription", "$7.99 / Month", "All Users", "Standard premium streaming access; check current terms at signup", "Premium Streaming"],
        ["Peacock Premium Plus Plan", "$13.99 / Month", "All Users", "Ad-free experience with offline downloads & live channel access", "Premium Plus Plan"],
        ["Peacock Gift Cards", "From $25", "All Users", "Convenient digital or physical gift cards for streaming access", "Gift Cards"],
        ["Premium Plus Annual Plan", "From $169.99 / Year", "All Users", "Convenient long-term annual streaming with Premium Plus perks", "Annual Subscription"],
        ["Medical Pros & First Responders Offer", "$6.99 / Month", "Medical Pros & First Responders", "Special monthly rate available upon status verification", "Peacock Premium"],
        ["Peacock Premium with Walmart+", "FREE with Walmart+", "Walmart+ Members", "Included at no additional cost with eligible Walmart+ membership", "Walmart+ Perk"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 8 && "border-b-0")}>
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

          <div className="max-w-5xl mx-auto space-y-12 py-8 px-4 sm:px-6">

  {/* Hero / Header Section */}
  <section className="text-center space-y-4 max-w-3xl mx-auto">
    <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold text-[#0060A9] bg-[#0060A9]/10">
      Costco Offers &amp; Guide
    </Badge>
    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
      Find a Costco Promo Code
    </h1>
    <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-left sm:text-center">
      <p>
        Before you check out at Costco.com, take a moment to look for a current Costco promo code or applicable promotional offer.
      </p>
      <p>
        It's worth knowing that Costco promotions don't always work like traditional retail coupon codes. Many Costco savings appear as product-specific promotions, limited-time offers, member benefits, Costco Shop Card promotions, or online-only deals.
      </p>
      <p>
        For example, Costco's current membership promotions can include a Digital Costco Shop Card for eligible new members who meet the promotion's requirements.
      </p>
      <p>
        That means the best offer for your purchase may not necessarily be a conventional discount code. Compare the available promotion with the item's current offer and any applicable membership benefit before placing your order.
      </p>
    </div>
  </section>

  {/* Coupons, Deals & Offers */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#0060A9] flex items-center gap-2">
          <Tag className="w-6 h-6" /> Costco Coupons, Deals &amp; Offers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          When shoppers search for a Costco coupon, they may actually be looking for several different types of promotions.
        </p>
        <p>
          Costco regularly features a dedicated Savings area where members can find promotional pricing across different departments. The retailer also highlights online-only offers, limited-time events, seasonal promotions, and special product deals.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-gray-900">Depending on the current promotion, Costco shoppers may encounter:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Costco promo codes",
              "Coupon offers",
              "Product-specific discounts",
              "Online-only deals",
              "Warehouse promotions",
              "Costco Shop Card offers",
              "Seasonal sales",
              "Member-exclusive offers",
              "Limited-time promotions",
              "Costco Travel deals",
              "Service-related offers"
            ].map((item, index) => (
              <Badge key={index} variant="outline" className="bg-slate-50 border-slate-300 text-slate-700 py-1">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <p>
          Since Costco promotions change regularly, it's best to check the current terms and eligibility for an offer rather than relying on an older coupon or promotional code.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Groceries & Household Essentials */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#0060A9] flex items-center gap-2">
          <ShoppingBag className="w-6 h-6" /> Shop Groceries &amp; Household Essentials
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          For many members, Costco starts with groceries.
        </p>
        <p>
          The retailer carries a wide selection of pantry staples, snacks, beverages, fresh foods, organic products, cleaning supplies, paper goods, laundry products, and household essentials. Costco's grocery selection also includes many Kirkland Signature products.
        </p>
        <p>
          Buying household staples in larger quantities can be particularly convenient for families and shoppers who prefer to stock up less frequently.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-gray-900">Costco's grocery selection includes categories such as:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Pantry and dry goods",
              "Snacks",
              "Coffee and sweeteners",
              "Water and beverages",
              "Breakfast foods",
              "Organic products",
              "Candy",
              "Cleaning supplies",
              "Laundry products",
              "Paper and plastic products",
              "Pet supplies",
              "Kirkland Signature groceries"
            ].map((item, index) => (
              <Badge key={index} variant="outline" className="bg-slate-50 border-slate-300 text-slate-700 py-1">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <p>
          If you're placing a larger online order, checking for a Costco discount code or current grocery promotion before checkout can be worthwhile.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Electronics, Appliances, Home & Kitchen */}
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Electronics */}
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Tv className="w-5 h-5 text-[#0060A9]" /> Electronics at Costco
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          Need a new TV, laptop, tablet, headphones, gaming console, or smart-home product?
        </p>
        <p>
          Costco has a substantial electronics department covering many of the products shoppers look for when upgrading their home technology.
        </p>
        <p>
          The current electronics selection includes TVs, computers, tablets, headphones, audio and video equipment, gaming consoles, cameras, smart-home products, cell phones, monitors, printers, storage devices, and accessories.
        </p>
        <p>
          Costco also carries electronics from major brands across different price and performance levels.
        </p>
        <p>
          This category can be especially relevant during major shopping periods such as Black Friday, Cyber Monday, back-to-school season, and holiday shopping.
        </p>
      </CardContent>
    </Card>

    {/* Appliances */}
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <WashingMachine className="w-5 h-5 text-[#0060A9]" /> Appliances for the Home
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          Costco also sells major and small appliances for kitchens, laundry rooms, and other parts of the home.
        </p>
        <p>
          Depending on the current assortment, shoppers can find refrigerators, ranges, dishwashers, washers, dryers, microwaves, vacuums, air treatment products, and small kitchen appliances.
        </p>
        <p>
          The retailer frequently features appliance-specific savings and limited-time promotions. Costco's current site also has dedicated savings sections for appliances.
        </p>
        <p>
          If you're planning a major appliance purchase, compare the product's current promotion with any available Costco promo code or Shop Card offer before ordering.
        </p>
      </CardContent>
    </Card>

    {/* Home & Kitchen */}
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Utensils className="w-5 h-5 text-[#0060A9]" /> Costco Home &amp; Kitchen
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          Costco's home selection extends well beyond appliances.
        </p>
        <p>
          You can shop for products such as:
        </p>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Cookware and bakeware",
            "Kitchen utensils",
            "Cutlery",
            "Kitchen storage",
            "Bedding",
            "Bath products",
            "Rugs",
            "Home décor",
            "Glassware and drinkware",
            "Tableware",
            "Cleaning products",
            "Vacuums and floor-care equipment",
            "Furniture",
            "Organization and storage products"
          ].map((item, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
              {item}
            </Badge>
          ))}
        </div>
        <p>
          Costco also carries premium cookware and kitchen brands, giving shoppers options for everything from everyday cooking to upgrading an entire kitchen.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Clothing, Health, Furniture & Auto Grid */}
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Clothing, Shoes & Accessories */}
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#0060A9] flex items-center gap-2">
          <Shirt className="w-5 h-5" /> Clothing, Shoes &amp; Accessories
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Costco isn't only about bulk groceries and household products.
        </p>
        <p>
          Its clothing department includes apparel and accessories for women, men, and children, along with shoes, luggage, handbags, seasonal clothing, outerwear, activewear, and other fashion essentials.
        </p>
        <p>
          Because Costco's inventory can change frequently, the selection may be different from one visit to the next. This rotating assortment is part of the appeal for shoppers who enjoy discovering new products alongside their everyday purchases.
        </p>
      </CardContent>
    </Card>

    {/* Beauty, Health & Personal Care */}
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#0060A9] flex items-center gap-2">
          <HeartPulse className="w-5 h-5" /> Beauty, Health &amp; Personal Care
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Costco's health and personal-care selection includes products ranging from vitamins and supplements to personal care, nutrition products, home healthcare equipment, and beauty essentials.
        </p>
        <p>
          The retailer's health department includes categories such as vitamins and herbals, health products, personal care, nutrition, massage equipment, reading glasses, mobility products, and other wellness-related items.
        </p>
        <p>
          Costco also operates pharmacy and optical services, making its health offering broader than simply selling products online.
        </p>
      </CardContent>
    </Card>

    {/* Furniture & Home Improvement */}
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#0060A9] flex items-center gap-2">
          <Sofa className="w-5 h-5" /> Furniture &amp; Home Improvement
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          If you're furnishing a home, Costco can also be a useful destination for larger household purchases.
        </p>
        <p>
          The retailer offers furniture, mattresses, patio products, storage solutions, home improvement products, flooring-related services, kitchen remodeling options, garage solutions, generators, windows, doors, and other home services.
        </p>
        <p>
          Because many of these purchases involve significant spending, it's worth checking Costco's current promotional offers before placing an order.
        </p>
      </CardContent>
    </Card>

    {/* Tires & Auto */}
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#0060A9] flex items-center gap-2">
          <Car className="w-5 h-5" /> Costco Tires &amp; Auto
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Costco also has an automotive side that goes beyond selling products.
        </p>
        <p>
          Its offerings include tires and automotive products, along with services connected to vehicle ownership. Costco's broader services menu also includes auto-related offerings and other member services.
        </p>
        <p>
          If you're shopping for new tires or preparing your vehicle for a road trip, check the current Costco offers and service promotions available to members.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Pharmacy, Optical & Travel */}
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#0060A9] flex items-center gap-2">
          <Glasses className="w-5 h-5" /> Costco Pharmacy &amp; Optical
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Costco's membership experience extends into healthcare services.
        </p>
        <p>
          The retailer operates pharmacies and optical departments, with services that can include prescription fulfillment, immunizations, eyewear, and other health-related offerings. The Costco app also provides tools for managing prescriptions and family pharmacy accounts.
        </p>
        <p>
          Availability and services can vary by location, so check your local warehouse for specific details.
        </p>
      </CardContent>
    </Card>

    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#0060A9] flex items-center gap-2">
          <Plane className="w-5 h-5" /> Costco Travel
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Planning a vacation? Costco members can also use Costco Travel to book travel-related products.
        </p>
        <p>
          The service includes vacation packages, cruises, rental cars, hotels, and other travel options. Costco promotes Travel as a member benefit that can provide value on selected brand-name travel products.
        </p>
        <p>
          For larger travel purchases, it's useful to compare the available Costco Travel package with other options and review all included benefits and conditions.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Membership & Rewards */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#0060A9] flex items-center gap-2">
          <CreditCard className="w-5 h-5" /> Costco Membership &amp; Rewards
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          A Costco promo code is only one part of the retailer's overall value proposition.
        </p>
        <p>
          Costco operates through paid memberships, with membership types including Gold Star, Business, and Executive options. Executive membership includes additional benefits and an annual reward on eligible purchases, subject to terms and exclusions.
        </p>
        <p>
          Costco also states that membership includes access to shopping online and in warehouses, while eligible Executive members receive additional benefits on selected services.
        </p>
        <p>
          If you shop at Costco regularly, it's worth understanding the benefits attached to your particular membership before deciding which promotions or offers are most useful.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* Seasonal Sales & Shopping Events */}
  <section className="space-y-6">
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#0060A9] flex items-center gap-2">
          <Calendar className="w-6 h-6" /> Costco Seasonal Sales &amp; Shopping Events
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Costco runs promotions throughout the year, with special attention around major shopping seasons.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-gray-900">Depending on the time of year, you may want to check Costco deals around:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Valentine's Day",
              "Easter",
              "Mother's Day",
              "Father's Day",
              "Memorial Day",
              "Fourth of July",
              "Back-to-school season",
              "Labor Day",
              "Halloween",
              "Thanksgiving",
              "Black Friday",
              "Cyber Monday",
              "Christmas",
              "New Year's"
            ].map((event, index) => (
              <Badge key={index} variant="outline" className="bg-slate-50 border-slate-300 text-slate-700 py-1">
                {event}
              </Badge>
            ))}
          </div>
        </div>
        <p>
          Costco's website currently includes dedicated areas for Black Friday, Cyber Monday, holiday and seasonal shopping, and other special events.
        </p>
        <p>
          Promotional timing can vary, so checking the current Savings section around these shopping periods can help you identify relevant offers.
        </p>
      </CardContent>
    </Card>
  </section>

</div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                How to Use a Costco Promo Code
              </h3>
              <p>
                If you have a valid Costco promo code, follow the instructions associated with the offer before completing your online purchase.
              </p>
              <p className="font-bold text-black">A simple process is:</p>
              <ul className="list-disc pl-5 space-y-2 font-semibold">
                <li>Sign in to your Costco account.</li>
                <li>Browse Costco.com and select your products.</li>
                <li>Add the eligible items to your cart.</li>
                <li>Review your order and any promotional requirements.</li>
                <li>Enter the applicable promo code if the offer requires one.</li>
                <li>Confirm that the promotion has been applied correctly.</li>
                <li>Complete your purchase.</li>
              </ul>
              <p>
                Keep in mind that some Costco promotions are automatically applied and don't require a coupon code. Others may have specific eligibility conditions or apply only to selected products.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                How to Find Better Costco Deals
              </h3>
              <p>
                Getting a good Costco offer isn't necessarily about finding one magic coupon. Start by checking Costco's current Savings section and looking at the promotions available in the department you're shopping.
              </p>
              <p>
                Costco frequently separates promotions by category, making it easier to compare offers on products such as appliances, electronics, furniture, health products, tires, and other merchandise.
              </p>
              <p className="font-bold text-black">You can also:</p>
              <ul className="list-disc pl-5 space-y-2 font-semibold">
                <li>
                  <strong>Check online-only offers:</strong> Some Costco promotions are specifically available through Costco.com.
                </li>
                <li>
                  <strong>Compare warehouse and online availability:</strong> Costco notes that warehouse inventory may differ from what is available online.
                </li>
                <li>
                  <strong>Review membership benefits:</strong> Executive members receive additional benefits and rewards on qualifying purchases and services.
                </li>
                <li>
                  <strong>Watch seasonal promotions:</strong> Major shopping periods can bring additional product-specific offers.
                </li>
                <li>
                  <strong>Check for a Costco promo code:</strong> If your purchase requires a code, verify that the offer is valid for the items and membership associated with your order.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Why Check CouponsBit for Costco Offers?
              </h3>
              <p>
                Costco promotions can change frequently, and not every offer is presented in the same format.
              </p>
              <p>
                CouponsBit gives shoppers another place to check before completing a purchase. You can look for the latest Costco promo code, coupon codes, discounts, deals, and promotional offers and then compare them with the offers already available through Costco.
              </p>
              <p>
                This is particularly useful when you're making a larger purchase, shopping during a major seasonal event, or deciding whether a membership promotion applies to you. Rather than relying on an old coupon code, check the latest available offer and its terms before placing your order.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Shop Costco With a Promo Code
              </h3>
              <p>
                Costco gives members plenty of reasons to keep coming back, whether they're buying everyday groceries, replacing an appliance, upgrading their electronics, furnishing a home, shopping for seasonal products, or planning their next vacation.
              </p>
              <p>
                Before checking out, take a moment to look for a current Costco promo code and compare it with Costco's active savings, member offers, Shop Card promotions, and product-specific deals.
              </p>
              <p>
                Because Costco's promotions and inventory change regularly, checking the latest offer is more useful than relying on an old coupon. With the right promotion and a little comparison, you can make your next Costco shopping trip more informed—whether you're filling the pantry or making a much larger purchase.
              </p>
            </div>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isReadMore && "rotate-180"
            )}
          />
        </button>

        {/* Accordion FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Costco Promo Codes
          </h3>
          {[
            {
              q: "Does Costco have promo codes?",
              a: "Costco runs promotions throughout the year, although many of its offers are presented as product-specific savings, member promotions, Shop Card offers, or automatically applied discounts rather than traditional coupon codes. Check the current Costco offers before purchasing.",
            },
            {
              q: "Does Costco offer coupons?",
              a: "Costco offers various promotions and savings opportunities for members. These can include product discounts, seasonal promotions, online-only offers, and other member benefits.",
            },
            {
              q: "Do I need a Costco membership to shop?",
              a: "Costco operates as a membership-based retailer, and membership is generally required for shopping in its warehouses and online. Costco offers different membership types, including Gold Star, Business, and Executive memberships.",
            },
            {
              q: "What can I buy at Costco?",
              a: "Costco sells a broad selection of groceries, household essentials, appliances, electronics, clothing, furniture, jewelry, health and personal-care products, sports equipment, toys, pet supplies, tires, and more. It also provides services such as pharmacy, optical, travel, gasoline, and home services.",
            },
            {
              q: "Does Costco have a rewards programme?",
              a: "Executive Costco members can earn an annual reward on qualifying purchases, subject to applicable terms and exclusions.",
            },
            {
              q: "Does Costco offer online-only deals?",
              a: "Yes. Costco regularly features online-only savings and promotions on Costco.com.",
            },
            {
              q: "Does Costco offer Black Friday and Cyber Monday deals?",
              a: "Costco features dedicated Black Friday and Cyber Monday shopping categories, although the exact promotions and products change each year.",
            },
            {
              q: "Can I use a Costco promo code on every product?",
              a: "Not necessarily. Promotional codes and offers can have product, membership, timing, or other eligibility restrictions. Always review the conditions attached to the specific promotion.",
            },
            {
              q: "How can I find Costco deals?",
              a: "Check Costco's current Savings section, seasonal promotions, online-only offers, membership benefits, and available Costco promo codes before completing your purchase.",
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
                <span className="text-black font-black text-base">{faq.q}</span>
                <div
                  className={cn(
                    "bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300",
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
        {/* Tag Cloud */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Costco Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Costco Promo Code",
              "Member Savings",
              "Costco Shop Card",
              "Executive Rewards",
              "Online-Only Deals",
              "Warehouse Savings",
              "CouponsBit Costco",
              "Costco Travel Deals",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Costco Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "IBUYPOWER GAMING PC FOR $1,299.99",
                sub: "Get the iBUYPOWER Element Gaming PC Desktop for an online price of $1,299.99 after $500 OFF.",
              },
              {
                heading: "GET UP TO $1,200 COSTCO SHOP CARD",
                sub: "Get up to a $1,200 Costco Shop Card on eligible prepaid orders.",
              },
              {
                heading: "EXECUTIVE MEMBERSHIP – $130 MEMBERSHIP OFFER",
                sub: "Get an Executive Membership for $130.",
              },
              {
                heading: "GOLD STAR MEMBERSHIP – $65 PER YEAR",
                sub: "Get a Gold Star Membership for just $65 per year.",
              },
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
                  href="https://www.costco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get deal: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90 flex-shrink-0"
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
