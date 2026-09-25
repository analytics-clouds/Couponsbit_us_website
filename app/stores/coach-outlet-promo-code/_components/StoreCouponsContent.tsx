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
  ShoppingBag,
  Gift,
  Wallet,
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
  { id: "d2", label: "DEAL", heading: "Handbag Deal", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Free Shipping Offer", sub: "Featured Picks" },
  { id: "d4", label: "SALE", heading: "Percentage Off Sitewide", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Accessory Bundle Deal", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Macy's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp", dealText: "Up To 75% OFF", href: "/stores/macys-promo-code" },
  { name: "JCPenney", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/jcpenny-logo_kra7ur.webp", dealText: "Up To 50% OFF", href: "/stores/jcpenney-discount-code" },
  { name: "Aporro", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp", dealText: "Save Up To 45% OFF", href: "/stores/aporro-discount-code" },
  { name: "Blue Cypress", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/blue-cypress-logo_ax2m7c.webp", dealText: "20% OFF First Order", href: "/stores/blue-cypress-discount-code" },
  { name: "Dore & Rose", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/dore-and-rose-logo_jsa9ki.webp", dealText: "Up To 65% OFF", href: "/stores/dore-and-rose-promo-code" },
  { name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", dealText: "Up To 77% OFF", href: "/stores/hm-promo-code" },
];

const STORE_URL = "https://www.coachoutlet.com";

export default function CoachOutletCouponsContent() {
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
              <span className="text-black font-extrabold">Coach Outlet</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789719709/coach_outlet_logo_ysdxtk.webp" alt="Coach Outlet" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Coach Outlet Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(12.7k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Get the latest Coach Outlet Promo Code and Coach Outlet Discount Code to save 80% OFF the Tonal Signature Down Jacket, 70% OFF the 3-In-1 Signature Canvas Wallet, and 60% OFF the Lara Satchel Bag. Compare verified Coach Outlet deals on handbags, wallets, shoes, accessories, and more in September 2026.
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
                    { icon: Tag, val: "33", label: "Offers" },
                    { icon: Percent, val: "80+", label: "Deals" },
                    { icon: Users, val: "1.5M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790324560/52_qdl4yj.webp" alt="Coach Outlet Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Coach Outlet Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "80% OFF", title: "Coach Outlet Promo Code – Tonal Signature Down Jacket | 80% OFF", desc: "Get the Tonal Signature Down Jacket for just $150, reduced from $750 — save 80% on this men's outerwear pick.", bullets: ["Stay warm while adding a premium layer to your seasonal wardrobe from the Coach Factory collection.", "Shop Coach Outlet online and check for an eligible Coach Outlet promo code to save on qualifying orders."] },
                  { label: "SALE", value: "70% OFF", title: "Coach Outlet Promo Code – 3-In-1 Signature Canvas Wallet | 70% OFF", desc: "Pick up the 3-In-1 Wallet in Signature Canvas for $53.40, compared with a $178 comparable value.", bullets: ["This versatile wallet combines everyday functionality with Coach's signature canvas styling.", "Browse the Coach Outlet wallet collection and look for a Coach Outlet promo code for eligible savings."] },
                  { label: "SALE", value: "60% OFF", title: "Coach Outlet Promo Code – Lara Satchel Bag | 60% OFF", desc: "Get the Lara Satchel Bag for $130 against a $325 comparable value, saving 60%.", bullets: ["Carry your everyday essentials in a polished satchel design from the Coach Outlet handbags collection.", "Explore Coach purse outlet deals and check for an available Coach Outlet promo before checkout."] },
                  { label: "SALE", value: "50% OFF", title: "Coach Outlet Promo Code – Signature Canvas Sport Sneaker | 50% OFF", desc: "Shop the Sport Sneaker in Signature Canvas for $87.50, reduced from $175 — save 50%.", bullets: ["Pair this casual sneaker with everyday outfits for a comfortable and stylish finish.", "Discover more Coach Outlet shoes and check for a Coach Outlet promo code on eligible purchases."] },
                  { label: "SALE", value: "53% OFF", title: "Coach Outlet – Signature Canvas Corner Zip Wristlet | 53% OFF", desc: "Get the Corner Zip Wristlet in Signature Canvas with Stripe for $35, compared with a $75 comparable value.", bullets: ["Its compact design makes it an easy everyday accessory for cards, cash and small essentials.", "Shop the Coach Factory Store collection and check the Coach Outlet sale for additional eligible offers."] },
                  { label: "SALE", value: "51% OFF", title: "Coach Outlet – C Heart Round Sunglasses | 51% OFF", desc: "Save 51% on C Heart Round Sunglasses, now $99 compared with a $204 comparable value.", bullets: ["Complete your look with a stylish accessory featuring Coach's signature design details.", "Explore Coach Outlet accessories and check for a Coach Outlet promo code before placing your order."] },
                  { label: "SALE", value: "UP TO 50%", title: "Coach Outlet – Handbags | Up To 50% OFF", desc: "Save up to 50% on selected handbags across the Coach Outlet collection.", bullets: ["Discover shoulder bags, satchels, crossbody styles and other everyday handbag designs.", "Shop Coach Outlet handbags online and check for current Coach Outlet sale savings."] },
                  { label: "SALE", value: "UP TO 50%", title: "Coach Outlet – Jackets & Outerwear | Up To 50% OFF", desc: "Enjoy up to 50% OFF selected jackets and outerwear.", bullets: ["Find seasonal layers designed to complement both casual and everyday wardrobes.", "Browse Coach Outlet online and check for an eligible Coach Outlet promo on selected outerwear."] },
                  { label: "SALE", value: "UP TO 33%", title: "Coach Outlet – Teri Shoulder Bags | Up To 33% OFF", desc: "Save up to 33% on selected Teri Shoulder Bags.", bullets: ["Explore practical shoulder bag styles suitable for everyday use, work and weekend outings.", "Shop Coach bags outlet collections and look for a Coach Outlet promo code on qualifying styles."] },
                  { label: "FROM", value: "$30", title: "Coach Outlet – Gifts for Him | From $30", desc: "Find gift options for him starting at just $30.", bullets: ["Explore wallets, accessories, bags and other useful picks available through Coach Outlet.", "Shop Coach Factory gift ideas and check the Coach Outlet sale for current savings."] },
                  { label: "SALE", value: "UP TO 60%", title: "Coach Outlet – Exclusive Sale | Up To 60% OFF", desc: "Save up to 60% on selected Coach Outlet products during this exclusive sale.", bullets: ["Discover discounted handbags, wallets, accessories, shoes and other Coach favourites.", "Visit the Coach Outlet store or shop Coach Outlet online to explore available clearance deals."] },
                  { label: "SALE", value: "UP TO 50%", title: "Coach Outlet – Wallets | Up To 50% OFF", desc: "Get up to 50% OFF selected wallets from the Coach Outlet collection.", bullets: ["Choose from compact card cases, classic wallets and Signature Canvas designs.", "Explore Coach Outlet wallet deals and check for an eligible Coach Outlet promo code at checkout."] },
                  { label: "FROM", value: "$62", title: "Coach Outlet – Coachtopia Loop | From $62", desc: "Shop selected Coachtopia Loop products starting at $62.", bullets: ["Discover distinctive designs that add a contemporary touch to your everyday accessories.", "Browse Coach Outlet online and check the Coach Outlet sale for eligible Coachtopia offers."] },
                  { label: "SALE", value: "50% OFF", title: "Coach Outlet – Gotham Pack | Flat 50% OFF", desc: "Save a flat 50% on selected Gotham Pack styles.", bullets: ["Choose a practical backpack design for commuting, travel or everyday carry.", "Explore the Coach Outlet backpack collection and check for a Coach Outlet promo before ordering."] },
                  { label: "SAVE", value: "$20 OFF", title: "Coach Outlet – $20 OFF $150+", desc: "Save $20 when you spend $150 or more on eligible Coach Outlet purchases.", bullets: ["Build your order with handbags, wallets, shoes and accessories to reach the qualifying spend.", "Shop Coach Outlet online and look for an applicable Coach Outlet promo code before checkout."] },
                  { label: "FROM", value: "$20", title: "Coach Outlet – Bag Charms | From $20", desc: "Discover Coach bag charms starting from just $20.", bullets: ["Add a personalised touch to your favourite Coach handbag, tote or crossbody.", "Browse Coach Outlet accessories and check the Coach Outlet sale for eligible charm offers."] },
                  { label: "FROM", value: "$49", title: "Coach Outlet – Eau De Parfum | From $49", desc: "Shop selected Eau De Parfum styles starting from $49.", bullets: ["Explore fragrance options that make thoughtful gifts or an elegant addition to your collection.", "Visit Coach Outlet online and check for an eligible Coach Outlet promo code on qualifying products."] },
                  { label: "FROM", value: "$25", title: "Coach Outlet – E-Gift Cards | From $25", desc: "Give someone special the flexibility to choose their favourite Coach products with e-gift cards starting at $25.", bullets: ["A convenient option for gifting handbags, wallets, accessories and more.", "Shop Coach Outlet and review the available gift card terms before purchasing."] },
                  { label: "FROM", value: "$95", title: "Coach Outlet – New Arrivals | From $95", desc: "Explore new Coach arrivals starting from $95.", bullets: ["Discover fresh handbags, accessories, footwear and seasonal styles across the latest collection.", "Shop Coach Outlet online and check for current Coach Outlet promo offers on eligible new arrivals."] },
                  { label: "FROM", value: "$45", title: "Coach Outlet – Bag Charms & Straps | From $45", desc: "Refresh your favourite handbag with Coach bag charms and straps starting from $45.", bullets: ["Choose decorative and practical accessories to personalise your Coach bag.", "Browse Coach Outlet accessories and check for an available Coach Outlet promo code."] },
                  { label: "FROM", value: "$450", title: "Coach Outlet – Tabby Bags | From $450", desc: "Explore selected Tabby Bags starting from $450.", bullets: ["Discover polished handbag styles designed for everyday looks and special occasions.", "Shop Coach handbag outlet collections online and check the Coach Outlet sale for eligible savings."] },
                  { label: "FROM", value: "$47.50", title: "Coach Outlet – Men's Footwear | From $47.50", desc: "Shop selected men's footwear starting from $47.50.", bullets: ["Find casual and everyday footwear options designed to complement a range of looks.", "Explore Coach Outlet shoes and check for a Coach Outlet promo code on eligible footwear."] },
                  { label: "FROM", value: "$75", title: "Coach Outlet – Men's Footwear | From $75", desc: "Discover additional men's footwear styles starting from $75.", bullets: ["Choose from versatile designs suitable for everyday wear and smart-casual outfits.", "Browse the Coach Factory Store collection and check current Coach Outlet sale offers."] },
                  { label: "ONLY", value: "$95", title: "Coach Outlet – Short Jewelry Chain Strap | $95", desc: "Get the Short Jewelry Chain Strap for $95.", bullets: ["Add an elevated finishing touch to your favourite Coach handbag with this stylish accessory.", "Shop Coach Outlet accessories online and check for an eligible Coach Outlet promo."] },
                  { label: "FROM", value: "$95", title: "Coach Outlet – Men's Wallets | From $95", desc: "Shop selected men's wallets starting at $95.", bullets: ["Discover practical designs suitable for everyday use, gifting and organised carry.", "Explore the Coach Outlet wallet collection and check for a Coach Outlet promo code."] },
                  { label: "ONLY", value: "$95", title: "Coach Outlet – Cherry Bag Charm | $95", desc: "Add the Cherry Bag Charm to your collection for $95.", bullets: ["Give your favourite handbag a playful seasonal update with this statement accessory.", "Shop Coach bags outlet accessories and check for current Coach Outlet promo offers."] },
                  { label: "FROM", value: "$117", title: "Coach Outlet – Coachtopia Bags | From $117", desc: "Discover stylish Coachtopia Bags starting from $117.", bullets: ["Explore contemporary bag designs made for everyday carrying and modern looks.", "Shop Coach Outlet online and check the Coach Outlet sale for eligible bag savings."] },
                  { label: "FROM", value: "$150", title: "Coach Outlet – Women's Shoulder Bags | From $150", desc: "Shop selected women's shoulder bags starting from $150.", bullets: ["Find versatile designs that work for everyday outfits, workdays and occasions.", "Explore Coach purse outlet styles and check for an eligible Coach Outlet promo code."] },
                  { label: "FROM", value: "$170", title: "Coach Outlet – Sunglasses | From $170", desc: "Discover selected Coach sunglasses starting from $170.", bullets: ["Complete your outfit with fashionable eyewear featuring signature Coach-inspired details.", "Shop Coach Outlet accessories and check for current Coach Outlet sale offers."] },
                  { label: "FROM", value: "$295", title: "Coach Outlet – Bucket Bags | From $295", desc: "Explore selected bucket bags starting from $295.", bullets: ["Choose a spacious and stylish silhouette for carrying everyday essentials.", "Browse the Coach Outlet handbags collection and check for an available Coach Outlet promo."] },
                  { label: "ONLY", value: "$195", title: "Coach Outlet – Men's 3-In-1 Wallet | $195", desc: "Shop the Men's 3-In-1 Wallet for $195.", bullets: ["Enjoy a versatile wallet design that combines practical storage with Coach styling.", "Explore the Coach Outlet wallet collection and check for a Coach Outlet promo code on eligible purchases."] },
                  { label: "FROM", value: "$395", title: "Coach Outlet – Briefcases | From $395", desc: "Discover selected Coach briefcases starting from $395.", bullets: ["Choose a polished carry option for work, commuting and professional occasions.", "Shop Coach Factory products online and check the Coach Outlet sale for available offers."] },
                  { label: "PERK", value: "FREE SHIP", title: "Coach Outlet – Free Shipping Offer", desc: "Enjoy free shipping on qualifying Coach Outlet orders.", bullets: ["Orders of $75 or more are eligible for free shipping under the stated offer terms.", "Shop Coach Outlet online and look for an eligible Coach Outlet promo code while checking out."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Coach Outlet: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Coach Outlet?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Coach is a New York-based fashion brand known for leather goods, handbags, accessories, footwear, and ready-to-wear collections. The brand was founded in 1941 and has developed a strong identity around leather craftsmanship, fashion, and American style.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Coach Outlet is the outlet shopping destination associated with Coach. It offers a broad range of Coach products and outlet-exclusive styles across categories such as handbags, wallets, shoes, apparel, accessories, jewelry, and gifts.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The outlet experience is particularly popular with shoppers who want Coach products while keeping an eye on value. Its assortment can include classic silhouettes, seasonal styles, signature designs, accessories, and outlet-specific merchandise.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The distinction between Coach's main retail collections and Coach Outlet is important when shopping. Product availability, styles, promotions, and pricing can differ, so shoppers should always check the specific product details and current terms before purchasing.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For anyone who enjoys recognizable designer style but still wants to shop strategically, Coach Outlet can be an appealing destination.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: ShoppingBag, name: "Handbags", count: "30+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Wallet, name: "Wallets & Small Goods", count: "18+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Gift, name: "Accessories", count: "15+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: Truck, name: "Free Shipping", count: "20+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Search, name: "New Arrivals", count: "10+", color: "text-orange-500", href: "/categories/fashion" },
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
    How to Save More at Coach Outlet
  </h3>
  <p className="text-gray-500 font-medium text-[11px] leading-relaxed mb-8">
    Finding a promo code is helpful, but smart shopping involves looking at the bigger picture.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Gift,
        title: "Check the sale section first.",
        sub: "Coach Outlet frequently promotes selected merchandise, so you may find a strong deal without needing a separate code.",
      },
      {
        icon: Receipt,
        title: "Compare offers.",
        sub: "If you have a coupon code and the product is already discounted, calculate which option gives you the better overall value.",
      },
      {
        icon: Calendar,
        title: "Shop around major holidays.",
        sub: "Valentine's Day, Mother's Day, Black Friday, Cyber Monday, and Christmas can all bring increased promotional activity.",
      },
      {
        icon: HeartHandshake,
        title: "Think about versatility.",
        sub: "A handbag or accessory that works with several outfits can provide more practical value than a trendy piece you'll rarely use.",
      },
      {
        icon: ShieldAlert,
        title: "Consider gifts early.",
        sub: "Popular styles and sizes can sell quickly during the holiday season, so don't leave important gift purchases until the last minute.",
      },
      {
        icon: Tag,
        title: "Check CouponsBit before checkout.",
        sub: "A quick search for a current Coach Outlet promo, coupon, or discount offer can help ensure you're not overlooking an available deal.",
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
          Coach Outlet Promo Code, Coupon Code & Discount Offers
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
        ["Tonal Signature Down Jacket", "80% OFF ($150)", "All Users", "Save 80%; reduced from $750 original price", "Men's Outerwear"],
        ["3-In-1 Signature Canvas Wallet", "70% OFF ($53.40)", "All Users", "Compared with a $178 comparable value", "Men's Wallets"],
        ["Lara Satchel Bag", "60% OFF ($130)", "All Users", "Compared with a $325 comparable value", "Handbags & Satchels"],
        ["Signature Canvas Sport Sneaker", "50% OFF ($87.50)", "All Users", "Save 50%; reduced from $175 regular price", "Coach Outlet Shoes"],
        ["Corner Zip Wristlet with Stripe", "53% OFF ($35)", "All Users", "Compared with a $75 comparable value", "Wristlets & Small Leather Goods"],
        ["C Heart Round Sunglasses", "51% OFF ($99)", "All Users", "Compared with a $204 comparable value", "Coach Eyewear & Accessories"],
        ["Handbags Collection Sale", "Up To 50% OFF", "All Users", "Discounts on shoulder bags, satchels, and crossbodies", "Selected Handbags"],
        ["Jackets & Outerwear Sale", "Up To 50% OFF", "All Users", "Seasonal outerwear layers for everyday wear", "Jackets & Outerwear"],
        ["Teri Shoulder Bags Deal", "Up To 33% OFF", "All Users", "Practical and stylish shoulder bags for everyday use", "Teri Shoulder Bags"],
        ["Gifts for Him", "From $30", "All Users", "Selection includes wallets, accessories, and bags", "Men's Gift Collection"],
        ["Exclusive Clearance Sale", "Up To 60% OFF", "All Users", "Major clearance savings on bags, wallets, and shoes", "Sitewide Clearance"],
        ["Wallets Collection Sale", "Up To 50% OFF", "All Users", "Savings on card cases, classic wallets, and canvas styles", "Coach Outlet Wallets"],
        ["Coachtopia Loop Series", "From $62", "All Users", "Contemporary eco-conscious accessory designs", "Coachtopia Loop Items"],
        ["Gotham Pack", "Flat 50% OFF", "All Users", "Flat discount on functional backpack carry options", "Gotham Backpack Styles"],
        ["Spend & Save Promotion", "$20 OFF $150+", "Orders $150+", "Save $20 automatically on qualifying minimum spend", "Sitewide Orders"],
        ["Bag Charms Collection", "From $20", "All Users", "Personalize handbags with decorative bag charms", "Coach Bag Charms"],
        ["Eau De Parfum Fragrances", "From $49", "All Users", "Signature perfumes suitable for personal use or gifting", "Coach Fragrances"],
        ["Coach E-Gift Cards", "From $25", "All Users", "Digital gift cards available in various denominations", "Gift Cards"],
        ["New Arrivals Collection", "From $95", "All Users", "Latest seasonal releases across bags and accessories", "New Arrivals"],
        ["Bag Charms & Straps", "From $45", "All Users", "Decorative and replacement straps and charm accessories", "Charms & Straps"],
        ["Tabby Bags Collection", "From $450", "All Users", "Iconic structured handbag silhouettes", "Tabby Handbags"],
        ["Men's Footwear Sale", "From $47.50", "All Users", "Casual and everyday shoes at reduced prices", "Men's Shoes"],
        ["Men's Footwear (Premium)", "From $75", "All Users", "Versatile smart-casual footwear options", "Men's Shoes"],
        ["Short Jewelry Chain Strap", "$95", "All Users", "Elevated chain strap accessory for Coach handbags", "Handbag Accessories"],
        ["Men's Leather Wallets", "From $95", "All Users", "Practical leather wallets for daily organized carry", "Men's Wallets"],
        ["Cherry Bag Charm", "$95", "All Users", "Statement seasonal cherry charm for bags and totes", "Bag Accessories"],
        ["Coachtopia Bags", "From $117", "All Users", "Modern, sustainable bag silhouettes", "Coachtopia Collection"],
        ["Women's Shoulder Bags", "From $150", "All Users", "Versatile shoulder bag designs for work or leisure", "Shoulder Bags"],
        ["Coach Sunglasses", "From $170", "All Users", "Fashion eyewear featuring signature Coach details", "Sunglasses & Eyewear"],
        ["Bucket Bags Collection", "From $295", "All Users", "Spacious bucket bag silhouettes for everyday carry", "Bucket Bags"],
        ["Men's 3-In-1 Wallet (Classic)", "$195", "All Users", "Versatile wallet design with removable passcase", "Men's Wallets"],
        ["Professional Briefcases", "From $395", "All Users", "Polished work bags and professional carry options", "Briefcases & Work Bags"],
        ["Free Standard Shipping", "Free Shipping", "Orders $75+", "Automatically applies to qualifying orders of $75 or more", "US Shipping"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 32 && "border-b-0")}>
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
            Designer style doesn't always have to come with a designer-sized shopping bill. If you're looking for a Coach handbag, wallet, pair of shoes, or another accessory without paying full retail, Coach Outlet is one of the places worth checking.
          </p>
          <p>
            With a wide selection of handbags, accessories, shoes, clothing, and gifts, Coach Outlet gives shoppers a way to explore the Coach aesthetic while shopping from an outlet-focused collection. And if you're already planning a purchase, checking for a Coach Outlet promo code before checkout can be an easy way to look for additional savings.
          </p>
          <p>
            CouponsBit helps shoppers find current Coach Outlet promotions, coupon codes, discount opportunities, and deals before they complete their order. Whether you're shopping for yourself, refreshing your accessories collection, or looking for a gift, checking available offers first can help you get more from your budget.
          </p>

          <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <p>
    Before adding that new handbag to your cart, take a moment to search for a Coach Outlet promo code.
  </p>
  <p>
    CouponsBit can be a useful starting point for finding available Coach Outlet promotions and savings opportunities. Once you've found an offer, check its terms to determine whether it applies to the products you're considering.
  </p>
  <p>
    Not every promotion works across every item. Some offers may be limited to specific categories, selected merchandise, or certain shopping periods. Other promotions may have exclusions or additional conditions.
  </p>
  <p>
    It's also worth comparing a promo code with the current sale selection. If an item is already part of a major Coach Outlet promotion, the existing offer may provide better value than a separate coupon.
  </p>
  <p>
    The goal isn't simply to find a code. It's to find the best eligible offer for the products you're actually buying.
  </p>

  <div className="space-y-8">
    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Coach Outlet Coupons, Deals & Offers</h3>
      <p>Coach Outlet is known for running promotions throughout the year, particularly around major shopping seasons and special events.</p>
      <p>Depending on the current campaign, shoppers may come across:</p>
      <p><strong>Promotions & Coupons:</strong> Promotional codes, coupon offers, and limited-time online offers.</p>
      <p><strong>Category Discounts:</strong> Handbag and accessory promotions, shoe and apparel offers, and clearance opportunities.</p>
      <p><strong>Event Deals:</strong> Seasonal sales, holiday shopping deals, and gift-focused promotions.</p>
      <p>Because these promotions can change, it's best to check the latest information before ordering rather than relying on an old Coach Outlet coupon code you found elsewhere.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Coach Outlet Handbags</h3>
      <p>Handbags are one of the biggest reasons shoppers visit Coach Outlet. The selection can include shoulder bags, crossbody bags, totes, satchels, backpacks, belt bags, bucket bags, clutches, wristlets, and other styles.</p>
      <p>Different handbag shapes serve different purposes. A compact crossbody can work well for everyday errands or travel, while a tote may be more useful when you need room for a laptop, documents, or daily essentials. Backpacks offer another practical option for commuting, school, and travel.</p>
      <p>You can also find different materials, colors, patterns, hardware, and signature designs, allowing you to choose something that fits your personal style.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Wallets, Card Cases & Small Accessories</h3>
      <p>Coach Outlet carries smaller leather goods and accessories such as wallets, card cases, wristlets, pouches, and other compact pieces.</p>
      <p>These can be particularly useful if you're shopping for a gift. A wallet or card case is easier to choose than apparel because you don't have to worry about clothing sizes, while still offering the recognizable Coach look.</p>
      <p>Small accessories can also be a practical entry point for shoppers who want to add a designer touch to their everyday collection without purchasing a larger item.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Coach Outlet Shoes & Apparel</h3>
      <p>Coach Outlet offers footwear for different occasions and seasons, including sneakers, sandals, boots, loafers, heels, and flats. As with any footwear purchase, check sizing information and return policies before ordering.</p>
      <p>Its assortment also includes women's and men's apparel such as jackets, sweaters, dresses, tops, shirts, denim, and trousers designed to complement the broader accessories collection.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Accessories & Gifts for Every Recipient</h3>
      <p>Coach Outlet offers a variety of accessories including belts, sunglasses, scarves, jewelry, and hats. These products are ideal for experimenting with the Coach aesthetic or giving as gifts for birthdays, anniversaries, graduations, Mother's Day, Valentine's Day, and holidays.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Seasonal Shopping & How to Use a Promo Code</h3>
      <p>Coach Outlet fits into major shopping seasons, including Valentine's Day, Mother's Day, Back-to-School, Fall, Black Friday, Cyber Monday, and Holiday/Christmas shopping.</p>
      <p>To use a Coach Outlet promo code, review the terms on CouponsBit for expiration dates and exclusions, add eligible items to your shopping bag, enter the code in the promotional-code field at checkout, and verify the discount before completing your order.</p>
    </div>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Check CouponsBit for Coach Outlet Deals?</h3>
              <p>Shopping for designer accessories is exactly the kind of purchase where comparing offers can make sense.</p>
              <p>Instead of immediately checking out, use CouponsBit to look for an Coach Outlet promo code, coupon, discount, or other promotional opportunity. Then compare that offer with the deals already available on the Coach Outlet website.</p>
              <p>This approach helps you shop based on actual value rather than simply choosing the first product or promotion you see.</p>
              <p>CouponsBit also gives you a convenient place to start when you're shopping around major events such as Black Friday, Cyber Monday, Valentine's Day, Mother's Day, or the holiday season.</p>
              <p>Whether you're buying one handbag or shopping for several gifts, checking for an available offer before checkout takes very little time.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Find Your Coach Style for Less</h3>
              <p>Coach Outlet makes designer-inspired fashion shopping more accessible by bringing together handbags, wallets, shoes, apparel, accessories, and gifts in one destination.</p>
              <p>Whether you're searching for a new everyday tote, upgrading your wallet, choosing a pair of shoes, or hunting for a gift, don't rush straight to checkout. Take a moment to look for an Coach Outlet promo code, compare it with current sales, and read the offer requirements carefully.</p>
              <p>With CouponsBit, finding that extra savings opportunity can become a quick part of your shopping routine. Check the latest offers, choose the deal that works for your order, and enjoy your Coach Outlet find without spending more than you need to.</p>
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
            Coach Outlet Promo Code FAQs
          </h3>
          {[
            { q: "Does Coach Outlet offer promo codes?", a: "Coach Outlet runs promotions and special offers throughout the year. Some promotions may include promotional codes, while others may be automatic discounts or product-specific deals." },
            { q: "How can I find a Coach Outlet promo code?", a: "You can check CouponsBit for current Coach Outlet promotions and savings opportunities before placing your order. Always review the offer's terms before using it." },
            { q: "Can I use a Coach Outlet coupon code on sale items?", a: "It depends on the individual promotion. Some codes may exclude sale merchandise or selected products, while others may have different eligibility requirements." },
            { q: "What does Coach Outlet sell?", a: "Coach Outlet offers a variety of fashion products, including handbags, wallets, card cases, shoes, apparel, jewelry, accessories, and giftable items." },
            { q: "Is Coach Outlet the same as the regular Coach store?", a: "Coach Outlet is the outlet shopping channel associated with Coach, but its assortment can include outlet-specific products and styles. Product availability and promotions can differ from Coach's main retail collections." },
            { q: "Does Coach Outlet sell handbags?", a: "Yes. Handbags are one of the major categories available at Coach Outlet, with styles such as totes, shoulder bags, crossbody bags, satchels, backpacks, clutches, and more." },
            { q: "Can I shop Coach Outlet for gifts?", a: "Yes. Coach Outlet offers several products that can work well as gifts, including handbags, wallets, card cases, jewelry, scarves, sunglasses, and other accessories." },
            { q: "When is the best time to look for Coach Outlet deals?", a: "Major shopping periods such as Black Friday, Cyber Monday, Mother's Day, Valentine's Day, and the Christmas season can be worth watching. However, Coach Outlet promotions can appear throughout the year." },
            { q: "Should I check for a Coach Outlet promo code before shopping?", a: "Yes. Checking for a current promo code or offer before checkout gives you an opportunity to compare available savings with the deals already running on the site." }
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
            Popular Coach Outlet Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Coach Outlet Promo Code",
              "Handbag Deals",
              "Wallet Discounts",
              "Free Shipping Code",
              "First Order Discount",
              "Clearance Sales",
              "Coach Insider Offers",
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
            Today's Top Coach Outlet Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "DEAL OF THE WEEK", sub: "Up to 70% OFF Clearance Bags & Wallets" },
              { heading: "TEXT ALERT BONUS", sub: "$20 OFF Orders Over $150 w/ SMS Sign-Up" },
              { heading: "HANDBAG SPECIAL", sub: "Bestseller Bags Starting From $78" },
              { heading: "ACCESSORIES DEAL", sub: "Wristlets & Small Goods Under $50" }
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
                  aria-label={`Shop Coach Outlet: ${deal.heading}`}
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
