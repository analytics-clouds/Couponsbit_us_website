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
  Search,
  ShoppingBag,
  Sandwich,MapPin, Clock,
  Utensils,
  Gift,
  Smartphone,
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
  { id: "d1", label: "NEW", heading: "2x Crowns on King Jr. Meals", sub: "Aug 24–30, 2026" },
  { id: "d2", label: "DEAL", heading: "The Actually $1 Menu", sub: "Select Markets" },
  { id: "d3", label: "DEAL", heading: "Whopper Wednesday – $3.98", sub: "Royal Perks" },
  { id: "d4", label: "BOGO", heading: "BOGO Original Chicken Sandwich", sub: "Royal Perks" },
  { id: "d5", label: "DUO", heading: "$5 Duo – Any Two Items", sub: "Participating Restaurants" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Subway", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295215/subway-logo_eosuh6.webp", dealText: "Up To 20% OFF", href: "/stores/subway-discount-code" },
  { name: "Little Caesars", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/little-ceaser-pizza_mbcw0k.webp", dealText: "Up To 20% OFF", href: "/stores/little-caesars-promo-code" },
  { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Up To 30% OFF", href: "/stores/doordash-promo-code" },
  { name: "Uber Eats", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp", dealText: "Up To 60% OFF", href: "/stores/uber-eats-promo-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Chewy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp", dealText: "Up To 50% OFF", href: "/stores/chewy-promo-code" },
];

const STORE_URL = "https://www.bk.com/";

export default function BurgerKingCouponsContent() {
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
              <span className="text-black font-extrabold">Burger King</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787639269/burger-king-logo_m4nwmx.webp" alt="Burger King" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Burger King</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(52.6k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find verified Burger King promo codes and discount codes for Sep 2026. Save with the $1 Menu, $5 Duo, $7 Trio, Whopper Wednesday, BOGO Chicken Sandwich, Royal Perks rewards, free fries, welcome offers, and exclusive app-only restaurant deals.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "16", label: "Offers" },
                    { icon: Percent, val: "3.4k", label: "Deals" },
                    { icon: Users, val: "18M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787639269/burger-king-logo_m4nwmx.webp" alt="Burger King Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Burger King Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "NEW", value: "2X CROWNS", title: "Burger King Promo Code – 2x Crowns on King Jr. Meals", desc: "Earn 2x Crowns on eligible King Jr. Kids Meals from August 24–30, 2026.", bullets: ["Activate the promotion before making your qualifying purchase.", "Available through the BK App, bk.com, kiosks, and eligible BK delivery.", "Check for a Burger King Promo Code to maximize your savings."] },
                  { label: "DEAL", value: "$1 MENU", title: "Burger King Promo Code – The Actually $1 Menu", desc: "Enjoy selected Burger King menu items for just $1 at participating restaurants.", bullets: ["Available from August 18 through September 15, 2026, in select Portland and Louisville markets.", "Choose from Chicken Fries, fries, onion rings, drinks, cookies, coffee, and soft serve.", "Check for a Burger King Promo Code before ordering to find additional savings."] },
                  { label: "DEAL", value: "$3.98", title: "Burger King Promo Code – Whopper Wednesday", desc: "Get a regular Whopper sandwich for $3.98 before taxes and fees every Wednesday.", bullets: ["Available at participating U.S. Burger King restaurants through Royal Perks.", "Activate the offer through the BK App or bk.com before placing your order.", "Use a Burger King Promo Code where eligible for additional savings."] },
                  { label: "BOGO", value: "FREE", title: "Burger King – BOGO Original Chicken Sandwich", desc: "Buy one Original Chicken Sandwich at regular price and get another of equal or lesser value free.", bullets: ["Available to Royal Perks members through the BK App and bk.com.", "Activate the offer before placing your order to receive the discount.", "Check for a Burger King Promo Code to discover additional savings."] },
                  { label: "DUO", value: "$5", title: "Burger King – $5 Duo", desc: "Choose any two featured menu items with the Burger King $5 Duo offer.", bullets: ["Select from Whopper Jr., Bacon Cheeseburger, Original Chicken Sandwich, Medium Fries, Chicken Fries, or Medium Soft Drink.", "Available at participating U.S. Burger King restaurants with prices varying by location.", "Look for a Burger King Promo Code before ordering for potential savings."] },
                  { label: "TRIO", value: "$7", title: "Burger King – $7 Trio", desc: "Choose three featured Burger King items with the $7 Trio offer.", bullets: ["Select from Whopper Jr., Bacon Cheeseburger, Original Chicken Sandwich, Medium Fries, Chicken Fries, or Medium Soft Drink.", "Available at participating U.S. Burger King restaurants.", "Check for a Burger King Promo Code to maximize your order savings."] },
                  { label: "PERK", value: "SPOTIFY", title: "Burger King – Free Spotify Premium", desc: "Eligible Royal Perks members can receive a promotional Spotify Premium subscription with a qualifying $10+ purchase.", bullets: ["New eligible Spotify Premium users may receive 4 months free.", "Eligible returning users may receive 2 months free under the promotion terms.", "Check for a Burger King Promo Code before making your qualifying purchase."] },
                  { label: "PERK", value: "FREE", title: "Burger King – Free Whopper Every 3 Months", desc: "Walmart+ members can receive a free Whopper sandwich with a qualifying purchase once per calendar quarter.", bullets: ["Available through the BK App and bk.com at participating U.S. Burger King restaurants.", "Activate the offer before ordering and meet the required purchase conditions.", "Check for a Burger King Promo Code to discover more eligible offers."] },
                  { label: "PERK", value: "40% OFF", title: "Burger King – 40% Off Walmart+ Membership", desc: "Eligible Royal Perks members can get 40% off a 1-year Walmart+ monthly membership.", bullets: ["A qualifying Royal Perks account is required to redeem the promotion.", "The promotional membership automatically renews after the promotional period unless canceled.", "Look for a Burger King Promo Code or eligible membership offer before redeeming."] },
                  { label: "PERK", value: "FREE FRIES", title: "Burger King – Free Any Size Fries with $5 Purchase", desc: "Select Royal Perks members can get free fries of any size with a qualifying $5+ purchase.", bullets: ["Redeem the offer once per week at participating U.S. Burger King restaurants.", "Activate the offer through the BK App or bk.com before ordering.", "Check for a Burger King Promo Code to maximize your savings."] },
                  { label: "DEAL", value: "$2", title: "Burger King – $2 Large Fries", desc: "Select Royal Perks members can get Large Fries for just $2.", bullets: ["The offer can be redeemed once per week for a limited time.", "Activate the offer through the BK App or bk.com before placing your order.", "Check for a Burger King Promo Code for additional eligible savings."] },
                  { label: "NEW", value: "WELCOME", title: "Burger King – Welcome Offer", desc: "New Royal Perks members can choose a free Whopper Jr. or Original Chicken Sandwich with a $3+ purchase.", bullets: ["The welcome offer is available for 14 days after joining Royal Perks.", "Redeem through the BK App or bk.com at participating U.S. Burger King restaurants.", "Use a Burger King Promo Code and activate the welcome offer before ordering."] },
                  { label: "SHOP", value: "DELIVERY", title: "Burger King – BK App & Website Delivery", desc: "Burger King delivery is available at participating U.S. restaurants through the BK App and bk.com.", bullets: ["A minimum $5 order is required before taxes and fees.", "Delivery, service, small-cart, and geographical fees may apply depending on location.", "Check for a Burger King Promo Code before placing your delivery order."] },
                  { label: "EARN", value: "10X", title: "Burger King – Royal Perks Rewards", desc: "Royal Perks members can earn 10 Crowns for every $1 spent on eligible purchases.", bullets: ["Crowns can be redeemed for eligible Burger King menu items.", "Program availability and participation may vary by location.", "Use a Burger King Promo Code before ordering to maximize your savings."] },
                  { label: "SURVEY", value: "FREE FOOD", title: "Burger King – My BK Experience Survey", desc: "Complete the My BK Experience survey within 48 hours of purchase for an eligible free food reward.", bullets: ["Rewards may include a Whopper, Original Chicken Sandwich, or Croissan’wich with a qualifying purchase.", "Available at participating U.S. Burger King restaurants with a validated receipt.", "Check for a Burger King Promo Code and complete the survey to claim eligible rewards."] },
                  { label: "PERK", value: "BADGES", title: "Burger King – Royal Perks Badge Program", desc: "Royal Perks badges recognize selected activities through digital badges in the BK App and bk.com.", bullets: ["Badges have no monetary value and are not coupons, discounts, or redeemable Crowns.", "Badge availability, milestones, and campaigns may change or end at any time.", "Check your Royal Perks account for available Burger King Promo Code offers."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Burger King: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">Burger King Delivery and Pickup Offers</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Burger King customers can generally choose between different ordering and fulfillment options depending on their location, including pickup and delivery.

                  </p>
                    <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   The available promotions may differ according to the ordering channel. An offer available through the Burger King app may not necessarily apply to a third-party delivery platform, and vice versa.

                  </p>
                    <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Before placing a delivery order, check the conditions of the offer and confirm that it applies to your chosen ordering method.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Sandwich, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Smartphone, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Gift, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
    How to Find the Best Burger King Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Ordering",
        sub: "Before placing your order, check CouponsBit for the latest Burger King promo code, coupon codes, discount offers, vouchers, and other available promotions."
      },
      {
        icon: Smartphone,
        title: "Check the Burger King App",
        sub: "The Burger King app can feature digital offers and Royal Perks benefits. If you are a regular customer, checking the app alongside CouponsBit can help you compare different savings opportunities."
      },
      {
        icon: Utensils,
        title: "Compare Meal Deals",
        sub: "If you are ordering a complete meal, compare individual-item discounts with combo or meal promotions. A bundled offer may provide better overall value for your order."
      },
      {
        icon: Clock,
        title: "Watch Limited-Time Offers",
        sub: "Burger King promotions can change quickly, especially when connected to new menu items or seasonal campaigns. Check the expiration date before relying on a limited-time promotion."
      },
      {
        icon: MapPin,
        title: "Check Your Location",
        sub: "Restaurant promotions can vary between locations. Make sure the selected Burger King restaurant participates in the promotion before completing your order."
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
          Burger King Promo Code, Coupon Code & Discount Offers
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
            2x Crowns on King Jr. Meals 👑
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            2x Crowns
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Royal Perks Members
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            August 24–30, 2026; activate before purchase
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            King Jr. Kids Meals (App, Web, Kiosk, Delivery)
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            The Actually $1 Menu 🍔
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $1.00
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Aug 18 – Sep 15, 2026; select Portland &amp; Louisville markets
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Select sides, drinks, cookies, coffee, soft serve
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Whopper Wednesday 🍔
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $3.98 Whopper
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Royal Perks Members
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Wednesdays only; activate offer in App/Web
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Regular Whopper Sandwich
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            BOGO Original Chicken Sandwich 🍗
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Buy 1 Get 1 FREE
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Royal Perks Members
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Activate offer in App or bk.com before ordering
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Original Chicken Sandwich
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Burger King $5 Duo 🍟
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            2 Items for $5.00
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Prices &amp; participation may vary by location
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Select 2: Whopper Jr., Bacon Cheeseburger, OCS, Fries, etc.
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Burger King $7 Trio 🥤
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            3 Items for $7.00
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Available at participating U.S. locations
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Select 3: Whopper Jr., Bacon Cheeseburger, OCS, Fries, etc.
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Free Spotify Premium 🎵
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 4 Months FREE
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Royal Perks Members
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Qualifying $10+ purchase required; 4 mos new / 2 mos returning
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Spotify Premium Subscription
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Free Whopper Every 3 Months 🛒
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            FREE Whopper
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Walmart+ Members
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Once per calendar quarter with qualifying purchase
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Whopper Sandwich via BK App / Web
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            40% Off Walmart+ Membership 🛍️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            40% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Royal Perks Members
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            1-year monthly membership; auto-renews unless canceled
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Walmart+ Monthly Membership
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Free Any Size Fries 🍟
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            FREE Any Size
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Select Royal Perks
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Redeem 1x/week with qualifying $5+ purchase
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Any Size Burger King Fries
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            $2 Large Fries Deal 🍟
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $2.00
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Select Royal Perks
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Redeem 1x/week for a limited time; activate in App/Web
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Large Fries
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            New Member Welcome Offer 🎉
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            FREE Item w/ $3+ Spend
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            New Royal Perks
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Valid for 14 days after joining Royal Perks
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Choice of Whopper Jr. or Original Chicken Sandwich
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            BK App &amp; Web Delivery 🛵
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Standard Delivery
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            $5 min order; delivery, service, and small-cart fees apply
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            BK App &amp; bk.com orders
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Royal Perks Rewards 👑
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            10 Crowns per $1
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Royal Perks Members
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Earn on eligible purchases &amp; redeem for free food
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Eligible Burger King menu items
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            My BK Experience Survey 📋
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            FREE Food Reward
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Receipt Holders
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Complete survey within 48 hours of purchase with receipt
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Whopper, Original Chicken Sandwich, or Croissan’wich
          </td>
        </tr>

        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Royal Perks Badge Program 🏅
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Digital Badges
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Royal Perks Members
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Badges have no cash value; awarded for completing activities
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            In-app milestone recognition
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Burger King is one of the most recognized fast-food brands in the United States, known for flame-grilled burgers, chicken sandwiches, fries, breakfast favorites, beverages, and a variety of value-focused meal options. Whether you are picking up a quick lunch, ordering dinner for the family, grabbing breakfast on the go, or looking for a satisfying meal without stretching your budget, Burger King offers a wide range of choices.
          </p>
          <p>
            If you are planning to order, checking for a Burger King promo code before completing your purchase can be a smart way to look for savings. CouponsBit helps shoppers discover available Burger King coupon codes, discount offers, vouchers, deals, and other promotions so they can compare their options before placing an order.
          </p>
          <p>
            Burger King also frequently uses app-based and digital promotions, limited-time menu campaigns, seasonal offers, and loyalty-related benefits. This means the best saving opportunity may not always be a traditional coupon code. Checking the available offers before ordering can help you find a promotion that fits your meal.
          </p>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Find a Burger King Promo Code</h3>
    <p>
      A Burger King promo code can provide an opportunity to save on qualifying menu items or orders. Promotions can change frequently and may be connected to particular products, ordering channels, restaurants, or limited-time campaigns.
    </p>
    <p>
      Some offers are entered manually during the ordering process, while others may be available through the Burger King app or automatically applied when the relevant conditions are met.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      If you are searching for a Burger King coupon code, always check the offer details before ordering. A promotion may have an expiration date, location restrictions, product exclusions, or other conditions that determine whether it can be used.
    </p>
    <p className="font-medium text-gray-700">
      CouponsBit makes it easier to check available Burger King promotions before you decide what to order.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Burger King Coupon Code and Discount Offers</h3>
    <p>
      When looking for a Burger King coupon code, it helps to look beyond one particular type of promotion. Fast-food brands commonly offer different ways to save depending on the occasion and ordering method.
    </p>
    <p>
      You may find an offer connected to a specific burger, a combo meal, breakfast, chicken items, beverages, or another menu category. Other promotions may focus on app orders, delivery, pickup, loyalty members, or limited-time menu launches.
    </p>
    <p>
      The best deal depends on your order. A discount on a single item may work well for one person, while a bundle or meal promotion could be more useful when ordering for a family or group.
    </p>
    <p>
      Before checking out, compare the available offers with your actual order and review the terms of the promotion.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Burger King Menu and Popular Food Options</h3>
    <p>
      Burger King's menu goes well beyond its famous burgers. Customers can choose from burgers, chicken sandwiches, chicken nuggets, breakfast items, sides, beverages, desserts, and other limited-time offerings.
    </p>
    <p>
      The exact menu and availability can vary by location.
    </p>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Whopper and Burgers</h4>
      <p>
        The Whopper is Burger King's signature burger and one of the brand's best-known menu items. Burger King also offers other burgers and sandwiches featuring different combinations of beef, cheese, toppings, sauces, and buns.
      </p>
      <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
        If you are ordering a burger meal, check CouponsBit for a current Burger King promo code before completing your order.
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Chicken Sandwiches and Nuggets</h4>
      <p>
        Burger King offers a selection of chicken-based menu items, including chicken sandwiches, chicken nuggets, chicken fries, and other options depending on the current menu.
      </p>
      <p>
        These can be useful alternatives for customers who do not want a traditional beef burger. Limited-time chicken promotions can also appear during special campaigns.
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Breakfast</h4>
      <p>
        Burger King's breakfast menu includes options such as breakfast sandwiches, croissant-based items, biscuits, hash browns, coffee, and other morning choices, depending on the location.
      </p>
      <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
        For customers who regularly purchase breakfast, checking for an applicable Burger King coupon code before ordering can help identify available morning promotions.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">French Fries & Sides</h5>
        <p className="text-sm">French fries and sides paired with burgers or main items, often included in meal bundles.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Drinks</h5>
        <p className="text-sm">Soft drinks, iced beverages, coffee, and shakes tied to specific meals or digital orders.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Desserts</h5>
        <p className="text-sm">Sweet menu options such as pies, cookies, shakes, and other seasonal treats.</p>
      </div>
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Burger King Value Meals and Combo Deals</h3>
    <p>
      Value-focused offers are an important part of fast-food shopping. Burger King frequently promotes combinations that allow customers to purchase a main item alongside sides and a drink.
    </p>
    <p>
      A combo or meal deal can sometimes provide better value than ordering every item individually. If you are ordering for more than one person, compare the available combinations with your total cart before choosing a promotion.
    </p>
    <p>
      A Burger King discount code may also be useful when an applicable offer can be combined with the items you already plan to purchase, although promotions can have restrictions on combining offers.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Burger King App Deals and Royal Perks</h3>
    <p>
      Burger King's digital ecosystem is an important part of its promotional strategy. The Burger King app can provide customers with access to digital offers, ordering functionality, and loyalty benefits through the Royal Perks program.
    </p>
    <p>
      Royal Perks allows participating customers to earn Crowns on eligible purchases and redeem them for selected menu items, subject to the program's terms. Burger King also promotes app-exclusive offers from time to time.
    </p>
    <p>
      For frequent customers, checking the app alongside CouponsBit can therefore be useful. A traditional Burger King promo code is not necessarily the only way to find savings.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Burger King Seasonal and Major US Promotions</h3>
    <p>
      Burger King, like other major fast-food brands in the United States, uses the country's retail and holiday calendar to promote special offers.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Game-Day Promotions</h5>
        <p className="text-sm">Special offers during major events like the Super Bowl for burgers, chicken, fries, drinks, and group meals.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Summer Promotions</h5>
        <p className="text-sm">Promotional deals on cold beverages, frozen treats, burgers, chicken, and warm-weather menu choices.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Back-to-School Offers</h5>
        <p className="text-sm">Affordable meal packages for families, students, and busy routines during the back-to-school season.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Halloween Promotions</h5>
        <p className="text-sm">Themed marketing campaigns featuring special Halloween menu items and promotional activities.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Thanksgiving & Holiday Season</h5>
        <p className="text-sm">Seasonal restaurant promotions helping customers find quick, convenient meals during the holiday rush.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Black Friday & Cyber Monday</h5>
        <p className="text-sm">Digital offers, gift card incentives, and special loyalty campaigns during major retail shopping days.</p>
      </div>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Limited-Time Menu Launches</h4>
      <p>
        One of the most common ways fast-food brands generate interest is by introducing limited-time menu items. Burger King can promote new or returning products through temporary campaigns, app offers, or special pricing.
      </p>
      <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
        If a limited-time item interests you, check whether a current Burger King promo code or digital promotion is available before ordering.
      </p>
    </div>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Burger King Promo Code</h3>
            <p className="text-gray-700 font-bold mb-6">
              If you find a Burger King promo code through CouponsBit, follow these general steps:
            </p>
            <div className="space-y-6">
              {[
                "Go to CouponsBit’s website and select the Burger King offer you want to use.",
                "Visit the Burger King website or app through the applicable offer.",
                "Choose your restaurant location.",
                "Browse the menu and add your desired items.",
                "Proceed to the order or checkout section.",
                "Enter the applicable promotional code if one is required.",
                "Apply the offer and check that the expected promotion has been reflected.",
                "Review your order and complete the purchase.",
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
              If the code does not work, check the promotion's expiration date, eligible products, ordering method, and location requirements.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Burger King Offers?</h3>
            <p>
              CouponsBit is designed to help customers check for savings before completing an online purchase. Instead of searching separately for a Burger King coupon, discount code, voucher, or promotional offer, you can start by checking CouponsBit for available deals.
            </p>
            <p>
              The purpose is not simply to find a code. It is to help you identify the most relevant saving opportunity for your particular order.
            </p>
            <p>
              For example, a customer ordering one burger may benefit from a single-item promotion, while someone ordering for a family may find a meal deal more useful. Another customer may already have access to an app-exclusive offer or loyalty benefit.
            </p>
            <p>
              By checking current offers before checkout, you can compare the available options and make a more informed ordering decision.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Burger King Order</h3>
            <p>
              Burger King offers plenty of choices for breakfast, lunch, dinner, snacks, and group meals, from the iconic Whopper and other burgers to chicken sandwiches, fries, breakfast favorites, drinks, and desserts.
            </p>
            <p>
              Because promotions can change throughout the year, checking for current savings before ordering is worthwhile. Whether you are grabbing a quick meal, ordering for the family, or trying a limited-time menu item, visit CouponsBit first to look for the latest Burger King promo code, coupon code, discount offer, voucher, or deal.
            </p>
            <p>
              Compare the available promotions with your order, check the applicable terms, and choose the option that gives you the best fit for your meal.
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Burger King Promo Codes</h3>
          {[
            { q: "Does Burger King have promo codes?", a: "Yes. Burger King regularly offers promotions through different channels, including digital offers, app promotions, coupons, limited-time campaigns, and loyalty-related savings. Availability and terms can change." },
            { q: "Where can I find a Burger King promo code?", a: "You can check CouponsBit for current Burger King promo codes, coupon codes, discount offers, vouchers, and other available deals before placing your order." },
            { q: "How do I use a Burger King coupon code?", a: "Select the applicable offer, choose your Burger King location, add eligible items to your order, and enter the code in the appropriate field if required. Check that the offer has been applied before completing checkout." },
            { q: "Why isn't my Burger King promo code working?", a: "The promotion may have expired or may be restricted to particular products, locations, ordering channels, or customers. Check the offer's terms carefully before trying again." },
            { q: "Can I use a Burger King discount code with another offer?", a: "Not necessarily. Promotional offers often have restrictions on combining discounts. Check the specific terms of both promotions before attempting to use them together." },
            { q: "Does Burger King have app-exclusive offers?", a: "Burger King can provide digital offers through its app and Royal Perks loyalty program. The exact offers available can change, so customers should check the current app promotions." },
            { q: "What is Burger King Royal Perks?", a: "Royal Perks is Burger King's loyalty program. Eligible customers can earn Crowns on qualifying purchases and redeem them for selected menu items, subject to the program's current terms." },
            { q: "Does Burger King offer deals on the Whopper?", a: "Burger King frequently promotes its signature Whopper through different campaigns and offers. Availability varies, so check current promotions before ordering." },
            { q: "Does Burger King offer breakfast deals?", a: "Burger King can run breakfast promotions involving selected breakfast items or combinations. Available offers vary by location and campaign." },
            { q: "Does Burger King have seasonal promotions?", a: "Yes. Burger King can run campaigns around seasons, holidays, sporting events, limited-time menu launches, and other major occasions in the US." },
            { q: "How can I save more at Burger King?", a: "Start by checking CouponsBit for a current Burger King promo code, then compare it with available app offers, meal deals, loyalty benefits, and other promotions. Choose the offer that best matches your order and check its terms before completing the purchase." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Burger King Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Whopper Deals", "Royal Perks", "Family Bundles", "Burger King Promo Code", "Breakfast Deals", "Chicken Sandwiches", "App Exclusive", "Delivery Offers"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Burger King Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">B</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Burger King: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
