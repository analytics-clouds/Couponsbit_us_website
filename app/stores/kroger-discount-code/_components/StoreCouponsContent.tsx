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
  ShoppingCart,Fuel, Sparkles, Smartphone, Calendar,
  Truck,
  Pill,
  Ticket,
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
  { id: "d1", label: "NEW", heading: "Flat $20 OFF Your First Pickup or Delivery", sub: "New Users" },
  { id: "d2", label: "NEW", heading: "$30 OFF First Pickup or Delivery Order", sub: "Orders $75+" },
  { id: "d3", label: "DEAL", heading: "$10 OFF Orders of $75+", sub: "All Users" },
  { id: "d4", label: "CANDY", heading: "Easter Candy Deal – Up to 5% OFF", sub: "Selected Candy" },
  { id: "d5", label: "NEW", heading: "Flat $15 OFF Orders Over $75", sub: "Signup Promotion" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Chewy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp", dealText: "Up To 50% OFF", href: "/stores/chewy-promo-code" },
  { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Up To 30% OFF", href: "/stores/doordash-promo-code" },
  { name: "Uber Eats", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp", dealText: "Up To 60% OFF", href: "/stores/uber-eats-promo-code" },
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
];

const STORE_URL = "https://www.kroger.com/";

export default function KrogerDigitalCouponsContent() {
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
              <span className="text-black font-extrabold">Kroger Digital</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787639269/kroger-logo_berwr1.webp" alt="Kroger Digital" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Kroger Digital</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(37.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                    Discover verified Kroger discount codes and coupon codes for Sep 2026. Save $30 OFF your first order, get free delivery, enjoy $20 OFF pickup, $15 OFF qualifying grocery orders, earn bonus Fuel Points, and save on groceries, household essentials, and seasonal deals.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "12", label: "Offers" },
                    { icon: Percent, val: "3.9k", label: "Deals" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787639269/kroger-logo_berwr1.webp" alt="Kroger Digital Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Kroger Digital Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "NEW", value: "$20 OFF", title: "Kroger Discount Code – Flat $20 OFF Your First Pickup or Delivery", desc: "Get $20 OFF your first Kroger pickup or delivery order.", bullets: ["Enjoy the offer on orders of $75 or more.", "Available for new users only on eligible pickup and delivery orders.", "Use a valid Kroger discount code at checkout to save on your first order."] },
                  { label: "NEW", value: "$30 OFF", title: "Kroger Discount Code – $30 OFF First Pickup or Delivery Order", desc: "Save $30 OFF your first pickup or delivery order of $75 or more.", bullets: ["Offer is valid through September 15, 2026, where pickup and delivery are available.", "The minimum purchase requirement must be met after applicable discounts.", "Apply an eligible Kroger discount code and enjoy extra savings."] },
                  { label: "DEAL", value: "$10 OFF", title: "Kroger Discount Code – $10 OFF Orders of $75+", desc: "Get a flat $10 OFF on eligible Kroger orders worth $75 or more.", bullets: ["Enjoy savings on groceries, household essentials, and other qualifying products.", "All users can take advantage of this offer.", "Use a valid Kroger discount code to save on your order."] },
                  { label: "CANDY", value: "5% OFF", title: "Kroger Easter Candy Deal – Up to 5% OFF", desc: "Save up to 5% OFF on selected Easter candy purchases at Kroger.", bullets: ["Choose from popular flavours including almond, apple, berry, raspberry, and more.", "Enjoy sweet savings on eligible candy products.", "This offer is available to all Kroger USA users."] },
                  { label: "NEW", value: "$15 OFF", title: "Kroger Discount Code – Flat $15 OFF Orders Over $75", desc: "Get Flat $15 OFF on eligible Kroger orders of $75 or more.", bullets: ["Enjoy savings on your qualifying grocery and household purchases.", "The offer is available as a signup/first-order promotion.", "Apply an eligible Kroger discount code to claim your savings."] },
                  { label: "NEW", value: "$15 OFF", title: "Kroger First Order Discount – Save $15 OFF", desc: "Save $15 OFF your first Kroger order when you meet the $75 minimum purchase.", bullets: ["Shop groceries, fresh food, household essentials, and more.", "The offer is available to eligible Kroger users.", "Use a valid Kroger discount code where applicable for extra savings."] },
                  { label: "EARN", value: "2X POINTS", title: "Kroger Fuel Points Deal – Earn 2X Points on Groceries", desc: "Earn 2 Fuel Points for every $1 spent on eligible groceries and general merchandise.", bullets: ["Redeem your Fuel Points for savings on fuel at participating Kroger locations.", "Kroger Boost membership starts at $59/year.", "A great way to earn rewards while shopping for everyday essentials."] },
                  { label: "SHOP", value: "$2.99", title: "Kroger Red Baron Pizza Deal – From $2.99", desc: "Shop Red Baron Pizza starting from just $2.99 at Kroger.", bullets: ["Enjoy an affordable option for quick and convenient meals.", "Choose from eligible Red Baron Pizza varieties and flavours.", "This deal is available to Kroger USA shoppers."] },
                  { label: "EARN", value: "10X POINTS", title: "Kroger Simple Truth Deal – Up to 10X Fuel Points", desc: "Earn 10X Fuel Points on eligible Simple Truth and Simple Truth Organic products.", bullets: ["Boost Members can earn 11X Fuel Points on qualifying purchases.", "Shop Simple Truth products starting from around $1.62.", "Save more while earning extra fuel rewards on everyday grocery purchases."] },
                  { label: "NEW", value: "$30+FREE", title: "Kroger Discount Code – $30 OFF + Free Delivery for First Orders", desc: "First-order shoppers can save $30 OFF on eligible Kroger orders.", bullets: ["Get free delivery on your first 5 orders where the promotion applies.", "Shop groceries and everyday essentials conveniently from Kroger.", "Apply an eligible Kroger discount code at checkout to maximize your savings."] },
                  { label: "SHOP", value: "LABOR DAY", title: "Kroger Labor Day Essentials – Summer Grocery Deals", desc: "Stock up on Labor Day essentials for end-of-summer cookouts and gatherings.", bullets: ["Shop groceries, snacks, beverages, and seasonal essentials at Kroger.", "Explore the Summer Finds collection for convenient holiday shopping.", "Enjoy great prices on selected products available to Kroger USA shoppers."] },
                  { label: "SHOP", value: "$3.99", title: "Kroger Sweet Corn on the Cob – $3.99", desc: "Get Kroger Sweet Corn on the Cob for $3.99.", bullets: ["Perfect for Labor Day cookouts, BBQs, family meals, and summer gatherings.", "Add fresh corn to your grocery cart along with other seasonal essentials.", "Shop this Kroger USA grocery deal while the promotional price lasts"] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[15px] font-semibold leading-3">{c.label}</p>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Kroger Digital: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">Kroger Weekly Deals</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Grocery retailers frequently update their weekly promotions, and Kroger is no exception. Weekly deals can cover fresh food, pantry products, beverages, household items, personal care, and other categories.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   If you shop at Kroger regularly, checking weekly offers before creating your shopping list can help you decide which products to purchase during a promotional period.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   You can also compare weekly sale prices with available coupons to determine whether the offer provides additional value.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: ShoppingCart, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Truck, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Ticket, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
    How to Find the Best Kroger Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Shopping",
        sub: "Before placing your grocery order, check CouponsBit for the latest Kroger discount code, coupon codes, promo codes, vouchers, digital offers, and other deals."
      },
      {
        icon: Calendar,
        title: "Review Weekly Deals",
        sub: "Kroger's weekly promotions can help you plan your grocery list around products that are currently discounted."
      },
      {
        icon: Smartphone,
        title: "Activate Digital Coupons",
        sub: "Check your account for available digital coupons before shopping. If an offer applies to something you were already planning to buy, activating it can be an easy way to reduce the cost."
      },
      {
        icon: Sparkles,
        title: "Plan Around Seasonal Sales",
        sub: "Major holidays and seasonal events can influence grocery promotions. Planning ahead for Thanksgiving, Christmas, July 4th, back-to-school shopping, and other occasions can help you take advantage of relevant offers."
      },
      {
        icon: ShoppingBag,
        title: "Compare Brands",
        sub: "If you are flexible about which brand you buy, compare promotional prices across eligible products. A sale on an alternative brand may provide better value than a coupon for your usual product."
      },
      {
        icon: Fuel,
        title: "Use Fuel Rewards Where Eligible",
        sub: "If your shopping qualifies for fuel rewards, factor those savings into the overall value of your Kroger purchases."
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
          Kroger Discount Code, Coupon Code & Promo Offers
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
            First Pickup or Delivery Deal 🛒
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Flat $20 OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            New Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Minimum order value of $75 required
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            First pickup or delivery order
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            First Order Special Promo 🚚
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $30 OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            First-Time Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Valid through Sep 15, 2026; $75+ min purchase post-discounts
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            First pickup or delivery reservation
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            $75+ Spend Grocery Saving 🏷️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Flat $10 OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Minimum spend of $75 on qualifying items
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Groceries &amp; household essentials
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Easter Candy Deal 🍬
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 5% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Select flavours &amp; products; limited time
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Selected Easter candy products
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Signup / First Order Promotion 🎉
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Flat $15 OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            New Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Requires minimum purchase of $75 or more
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Qualifying grocery &amp; household purchases
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Kroger First Order Discount 🥦
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Save $15 OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Eligible New Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            $75 minimum order requirement
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Groceries, fresh food &amp; essentials
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Fuel Points Promotion ⛽
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            2X Points
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Kroger Loyalty Members
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Earn 2 points per $1 spent; Boost starts at $59/yr
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Eligible groceries &amp; general merchandise
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Red Baron Pizza Deal 🍕
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $2.99
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Promotional pricing on selected varieties
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Eligible Red Baron Pizza varieties
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Simple Truth Fuel Multiplier 🌿
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 10X Points
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users / Boost Members
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Boost Members get up to 11X Fuel Points
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Simple Truth &amp; Organic products (from $1.62)
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            $30 OFF + Free Delivery Offer 📦
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $30 OFF + Free Delivery
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            First-Order Shoppers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Free delivery on first 5 orders where promo applies
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Kroger grocery &amp; everyday essentials
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Labor Day Essentials Deal ☀️
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Special Sale Prices
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            End-of-summer cookout &amp; holiday specials
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Groceries, snacks, beverages &amp; seasonal finds
          </td>
        </tr>

        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Sweet Corn on the Cob 🌽
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $3.99
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Promotional price while supplies last
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Kroger Sweet Corn on the Cob
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Kroger is one of the largest grocery retailers in the United States, offering shoppers a convenient place to purchase groceries, household essentials, fresh foods, beverages, personal care products, pharmacy items, and more. From everyday pantry staples and fresh produce to bakery items, meat, dairy, snacks, frozen foods, and household supplies, Kroger caters to a wide range of everyday shopping needs.
          </p>
          <p>
            For customers looking to make their grocery budget go further, checking for a Kroger discount code before placing an order can be a useful step. CouponsBit helps shoppers find available Kroger coupon codes, promo codes, vouchers, digital offers, sales, and other savings opportunities so they can compare deals before completing their purchase.
          </p>
          <p>
            Kroger also runs promotions around major US holidays, seasonal shopping periods, weekly grocery campaigns, fuel savings, digital coupons, and special events. Since available offers can change frequently, checking the latest promotions before shopping can help you identify opportunities that fit your grocery list.
          </p>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Find a Kroger Discount Code</h3>
    <p>
      A Kroger discount code can help shoppers look for savings on eligible purchases, although grocery promotions can work differently from standard online retail discounts. Some offers may require a code, while others are activated digitally through a customer's Kroger account or applied automatically when qualifying products are added to the cart.
    </p>
    <p>
      The type of savings available can depend on the products you are buying, your selected store, the ordering method, and the terms of the promotion.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      Before using a Kroger coupon code, check the offer details carefully. Certain promotions may apply only to selected products, require a minimum purchase, have quantity restrictions, or be available for a limited time.
    </p>
    <p className="font-medium text-gray-700">
      CouponsBit gives shoppers a convenient place to check current Kroger offers before heading to the store or placing an online grocery order.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Kroger Coupon Code and Promotional Offers</h3>
    <p>
      When searching for a Kroger coupon code, it is useful to consider the full range of savings opportunities rather than looking for a single type of promotion.
    </p>
    <p>
      Kroger can offer digital coupons, weekly deals, personalized offers, product markdowns, seasonal promotions, loyalty-related savings, and fuel rewards. Depending on your shopping list, one of these options may provide better value than another.
    </p>
    <p>
      For example, a digital coupon may be ideal for a frequently purchased household product, while a weekly sale may provide a better deal on fresh food or pantry staples. If you are buying multiple qualifying products, a promotional offer connected to a minimum purchase may also be worth considering.
    </p>
    <p className="font-medium text-gray-700">
      Check CouponsBit for available Kroger promotions and compare them with the items in your cart before completing your purchase.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Shop Groceries at Kroger</h3>
    <p>
      Kroger carries a broad range of food and household products, making it possible to complete much of your weekly shopping in one place.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Fresh Produce</h5>
        <p className="text-sm">Fruits and vegetables for everyday meals, snacks, salads, smoothies, and cooking. Apples, bananas, berries, greens, and seasonal options.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Meat and Seafood</h5>
        <p className="text-sm">Beef, chicken, pork, turkey, deli meats, seafood, and other protein options for daily meals or barbecue gatherings.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Dairy and Eggs</h5>
        <p className="text-sm">Milk, cheese, yogurt, butter, eggs, creamers, and refrigerated essentials for regular grocery replenishment.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Bakery</h5>
        <p className="text-sm">Fresh bread, rolls, cakes, cookies, pastries, pies, and baked goods for everyday staples and celebrations.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Pantry Staples</h5>
        <p className="text-sm">Rice, pasta, cereal, canned foods, sauces, condiments, baking ingredients, snacks, coffee, tea, and shelf-stable goods.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Frozen Foods</h5>
        <p className="text-sm">Frozen fruits, vegetables, prepared meals, pizza, ice cream, desserts, appetizers, and quick convenient options.</p>
      </div>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Snacks and Beverages</h4>
      <p>
        Customers can browse chips, crackers, cookies, nuts, candy, soft drinks, juices, bottled water, sports drinks, coffee, and other beverages.
      </p>
      <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
        These categories are frequently featured in seasonal and promotional campaigns, particularly around holidays and major sporting events.
      </p>
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Kroger Household Essentials</h3>
    <p>
      Kroger is also a destination for everyday household products.
    </p>
    <p>
      Shoppers can find laundry detergent, paper products, cleaning supplies, trash bags, storage products, kitchen essentials, and other items needed around the home.
    </p>
    <p>
      Buying these products during a promotion can be useful because many household essentials are regularly replenished.
    </p>
    <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
      Before adding several products to your cart, check whether a current Kroger promo code or digital promotion can be applied.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
      <h5 className="font-bold text-gray-900">Personal Care & Beauty</h5>
      <p className="text-sm">Shampoo, conditioner, soap, body wash, skincare, oral care, cosmetics, and everyday personal care.</p>
    </div>

    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
      <h5 className="font-bold text-gray-900">Baby Products</h5>
      <p className="text-sm">Diapers, wipes, baby food, formula, bath products, and childcare necessities for regular savings.</p>
    </div>

    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
      <h5 className="font-bold text-gray-900">Kroger Pharmacy</h5>
      <p className="text-sm">Prescriptions and health and wellness services (note that grocery coupons may not apply to pharmacy items).</p>
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Kroger Fuel and Fuel Rewards</h3>
    <p>
      Fuel savings are another important part of the Kroger shopping experience. Eligible purchases and participating programs can allow customers to earn fuel-related rewards that can be redeemed according to the current program rules.
    </p>
    <p>
      For customers who shop at Kroger regularly and drive frequently, considering fuel rewards alongside grocery promotions can add another dimension to overall savings.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Kroger Digital Coupons</h3>
    <p>
      Digital coupons are a major part of modern grocery shopping. Kroger customers can browse available offers through their account and add eligible digital coupons before shopping.
    </p>
    <p>
      Once activated, qualifying offers can generally be applied according to their terms when the customer purchases the eligible product.
    </p>
    <p>
      Digital coupons can be particularly useful because shoppers can review available offers before creating their grocery list.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      If you are looking for a Kroger coupon code, remember that a digital coupon or account-based offer may sometimes be more relevant to your purchase than a traditional code.
    </p>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Kroger Seasonal Promotions and Major US Sales</h3>
    <p>
      Kroger runs promotions throughout the year, with certain periods creating particularly strong demand for groceries and household products.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Super Bowl and Game-Day Promotions</h3>
    <p>
      The Super Bowl and other major sporting events create a significant demand for snacks, beverages, party foods, frozen appetizers, chips, dips, wings, and other game-day essentials.
    </p>
    <p>
      Kroger can promote products suited to gatherings during these periods, making it a useful time to watch for grocery deals.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Valentine's Day</h3>
    <p>
      Valentine's Day promotions can include chocolates, flowers, bakery products, beverages, gift items, and ingredients for a special meal.
    </p>
    <p>
      Customers planning a Valentine's dinner or looking for a simple gift can compare seasonal promotions with their shopping list.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Easter Promotions</h3>
    <p>
      Around Easter, grocery shoppers often purchase candy, chocolate, eggs, baking supplies, brunch ingredients, flowers, and seasonal decorations.
    </p>
    <p>
      Kroger's seasonal selection can help customers prepare for Easter gatherings while taking advantage of applicable promotions.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Summer & Outdoor Entertaining Sales</h3>
    
    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Memorial Day Sales</h4>
      <p>
        Memorial Day is an important shopping period for outdoor gatherings and barbecues. Customers may stock up on meat, buns, condiments, beverages, snacks, disposable tableware, and other barbecue essentials.
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Fourth of July Promotions</h4>
      <p>
        Independence Day is another major grocery-shopping occasion in the US. Customers often purchase grilling supplies, drinks, snacks, desserts, fresh produce, and party essentials.
      </p>
      <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
        Checking Kroger's seasonal promotions before a July 4th gathering can help you plan your shopping list around available savings.
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
      <h5 className="font-bold text-gray-900">Back-to-School Deals</h5>
      <p className="text-sm">Increased demand for lunchbox snacks, breakfast foods, beverages, school supplies, personal-care products, and household essentials. Families can check weekly deals to manage shopping.</p>
    </div>

    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
      <h5 className="font-bold text-gray-900">Halloween Promotions</h5>
      <p className="text-sm">Features promotions around candy, pumpkins, baking supplies, party snacks, beverages, and seasonal products as the holiday approaches.</p>
    </div>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Holiday & Year-End Shopping</h3>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Thanksgiving Deals</h4>
      <p>
        Thanksgiving is one of the biggest grocery-shopping periods in the United States. Customers may purchase turkeys, hams, vegetables, baking ingredients, desserts, beverages, appetizers, and other products for family gatherings.
      </p>
      <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
        Planning ahead and checking promotional offers can be especially useful when preparing a large holiday meal.
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Christmas and Holiday Sales</h4>
      <p>
        The Christmas season creates demand for baking ingredients, chocolates, beverages, party foods, gift items, decorations, and everyday groceries. Kroger can feature seasonal products and promotional campaigns throughout the holiday period.
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Black Friday and Cyber Monday</h4>
      <p>
        While Black Friday and Cyber Monday are traditionally associated with electronics, clothing, and other retail categories, grocery shoppers can also encounter promotions around these dates.
      </p>
      <p>
        Kroger may feature special digital offers, household deals, gift-related products, or other limited-time promotions depending on the campaign.
      </p>
    </div>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Kroger Discount Code</h3>
            <p className="text-gray-700 font-bold mb-6">
              If you find a Kroger discount code through CouponsBit, follow the instructions provided with that particular offer. A typical online process may include:
            </p>
            <div className="space-y-6">
              {[
                "Go to CouponsBit’s website and select the Kroger offer you want to use.",
                "Visit Kroger through the relevant offer.",
                "Sign in to your Kroger account if required.",
                "Add eligible groceries and household products to your cart.",
                "Review available digital coupons and promotions.",
                "Enter the applicable code if the offer requires one.",
                "Apply the promotion and check that the savings have been reflected.",
                "Complete your order after reviewing the final total.",
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
              For digital coupons, the process may involve clipping or activating the offer before purchasing rather than entering a traditional promotional code.
            </p>
            <p className="text-gray-500 font-bold leading-relaxed">
              If an offer does not work, check its expiration date, product requirements, quantity limits, selected store, and other terms.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Kroger Offers?</h3>
            <p>
              Grocery shopping is a recurring expense, which makes even small savings useful when they can be applied consistently.
            </p>
            <p>
              CouponsBit helps shoppers check for Kroger discount codes, coupon codes, promotional offers, vouchers, digital deals, and seasonal savings before completing their purchases.
            </p>
            <p>
              The best offer can depend on your shopping list. Someone buying fresh groceries may benefit from weekly produce promotions, while another shopper purchasing household products may find a digital coupon more useful.
            </p>
            <p>
              By checking CouponsBit before shopping, customers can compare available opportunities and choose promotions that actually fit the products they need.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Kroger Shopping Trip</h3>
            <p>
              Kroger gives US shoppers access to a broad selection of groceries, fresh foods, household essentials, personal-care products, baby items, pharmacy services, and other everyday necessities.
            </p>
            <p>
              Because grocery promotions change frequently, checking available savings before placing an order can be worthwhile. Whether you are preparing a regular weekly grocery list, stocking up for a holiday, planning a barbecue, or shopping for household essentials, there may be several ways to reduce your overall spending.
            </p>
            <p>
              Before checkout, visit CouponsBit to look for the latest Kroger discount code, along with coupon codes, promo codes, vouchers, digital offers, weekly deals, and seasonal promotions. Compare the available options with your shopping list, review the conditions, and choose the offer that best fits your purchase.
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Kroger Discount Codes</h3>
          {[
            { q: "Does Kroger offer discount codes?", a: "Kroger offers a variety of promotional savings, including digital coupons, weekly deals, personalized offers, seasonal promotions, and other discounts. Traditional promotional codes may also be available for eligible offers." },
            { q: "Where can I find a Kroger discount code?", a: "You can check CouponsBit for available Kroger discount codes, coupon codes, promo codes, vouchers, digital offers, and other grocery deals before shopping." },
            { q: "How do I use a Kroger coupon code?", a: "The process depends on the promotion. Some offers require a code during online checkout, while digital coupons may need to be activated through your Kroger account before purchasing eligible products." },
            { q: "Why isn't my Kroger discount code working?", a: "The offer may have expired or may not apply to the products in your cart. Other restrictions can include minimum purchase requirements, quantity limits, participating stores, selected brands, or other eligibility conditions." },
            { q: "Does Kroger have digital coupons?", a: "Yes. Kroger provides digital coupons and account-based offers for eligible customers. Available promotions can change frequently." },
            { q: "Can I use a Kroger coupon on sale items?", a: "This depends on the individual offer. Some coupons may apply to already discounted products, while others may have exclusions. Always check the promotion's terms before purchasing." },
            { q: "Does Kroger offer fuel rewards?", a: "Kroger provides fuel-related rewards through its applicable loyalty and rewards programs. The number of rewards earned and redemption conditions can vary according to current program rules." },
            { q: "Does Kroger have weekly sales?", a: "Yes. Kroger regularly promotes selected products through weekly deals and other rotating promotions." },
            { q: "Does Kroger have holiday sales?", a: "Kroger can run seasonal promotions around major US holidays, including Thanksgiving, Christmas, Easter, Halloween, Valentine's Day, Memorial Day, and the Fourth of July." },
            { q: "Can I find household products at Kroger?", a: "Yes. In addition to groceries, Kroger stores and its online shopping platform can offer cleaning supplies, paper products, laundry products, personal-care items, baby products, and other household essentials." },
            { q: "Does Kroger sell fresh food?", a: "Yes. Kroger offers fresh produce, meat, seafood, dairy, eggs, bakery products, deli items, and other fresh foods, although availability can vary by location." },
            { q: "How can I save more at Kroger?", a: "Start by checking CouponsBit for a current Kroger discount code, then compare available digital coupons, weekly deals, seasonal promotions, and eligible fuel rewards. Building your shopping list around relevant promotions can also help you manage your grocery budget." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Kroger Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Digital Coupons", "Grocery Savings", "Fuel Points", "Kroger Discount Code", "Weekly Ads", "Fresh Produce", "Pantry Staples", "Household Essentials"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Kroger Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">K</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Kroger: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
