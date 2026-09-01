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
  ShoppingBag,BadgePercent, Store,
  Home,
  Utensils,
  Store as StoreIcon,
  Clock,
  Users2,
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
  { id: "d1", label: "UP TO", heading: "Uber Eats Promo Code – 50% OFF Orders of $15+", sub: "Save up to 50% OFF when you spend $15 or more" },
  { id: "d2", label: "SAVE", heading: "Uber Eats Promo Code – 37% OFF 7-Eleven Chocolate Chunk Cookies", sub: "Get 37% OFF on select 7-Eleven Chocolate Chunk Cookies" },
  { id: "d3", label: "SAVE", heading: "Uber Eats – 20% OFF Orders of $15+ at Dunkin", sub: "Save 20% OFF up to $12 on eligible Dunkin orders" },
  { id: "d4", label: "UP TO", heading: "Uber Eats – Up to 50% OFF When You Spend $20", sub: "Get up to 50% OFF when you spend $20 or more" },
  { id: "d5", label: "GET", heading: "Uber Eats – $10 OFF Your First Order", sub: "Enjoy $10 OFF your first eligible Uber Eats order" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Up To 30% OFF", href: "/stores/doordash-promo-code" },
  { name: "Chewy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp", dealText: "Up To 50% OFF", href: "/stores/chewy-promo-code" },
  { name: "LovesJerkyCo", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002073/lovejurky-logo_o9v01b.webp", dealText: "From $10", href: "/stores/lovejurky-discount-code" },
  { name: "Factor75", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/factor75-coupon-code_a7lrym.webp", dealText: "Up to $130 OFF", href: "/stores/factor75-discount-code" },
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up To $260", href: "/stores/merachfit-discount-code" },
  { name: "Kerala Ayurveda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg", dealText: "Flat 10% OFF", href: "/stores/kerala-ayurveda-discount-code" },
];

const STORE_URL = "https://www.ubereats.com/";

export default function UberEatsCouponsContent() {
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
              <span className="text-black font-extrabold">Uber Eats</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp" alt="Uber Eats" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Uber Eats</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(52.3k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Uber Eats promo codes, discounts, and food delivery deals for Sep 2026. Save up to 60% on $15+ orders, get 50% OFF qualifying orders, $10 OFF your first $20+ order, $15 OFF Denny’s $35+ orders, and free fries.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "10", label: "Offers" },
                    { icon: Percent, val: "3.4k", label: "Deals" },
                    { icon: Users, val: "20M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787034385/121_nbakgc.webp" alt="Uber Eats Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Uber Eats Promo Codes & Offers</h2>
        </div>

        {[
          { label: "UP TO", value: "50%", title: "Uber Eats Promo Code – 50% OFF Orders of $15+", desc: "Save up to 50% OFF when you spend $15 or more", bullets: ["Offer applies to eligible full-priced items at participating stores", "Enjoy bigger savings on food, groceries and everyday essentials", "Availability may vary by selected stores and location", "Uber Eats Promo Code, 50% Off, Food Delivery Deals, USA"] },
          { label: "SAVE", value: "37%", title: "Uber Eats Promo Code – 37% OFF 7-Eleven Chocolate Chunk Cookies", desc: "Get 37% OFF on select 7-Eleven Chocolate Chunk Cookies", bullets: ["Enjoy a freshly baked cookie packed with chocolate chunks", "Discount is automatically applied at checkout", "Available at participating 7-Eleven locations", "Uber Eats Promo Code, 7-Eleven Deal, Cookie Offer, USA"] },
          { label: "SAVE", value: "20%", title: "Uber Eats – 20% OFF Orders of $15+ at Dunkin", desc: "Save 20% OFF up to $12 on eligible Dunkin orders", bullets: ["Spend $15 or more to qualify for the offer", "No promo code is required to receive the discount", "Enjoy Dunkin favorites while saving on your order", "Uber Eats Discount, Dunkin Deal, 20% Off, Food Delivery, USA"] },
          { label: "UP TO", value: "50%", title: "Uber Eats – Up to 50% OFF When You Spend $20", desc: "Get up to 50% OFF when you spend $20 or more", bullets: ["Save on eligible meals, snacks and everyday food orders", "A great way to reduce your delivery order total", "Offer availability may vary by customer and participating stores", "Uber Eats Deals, 50% Off, Food Delivery Offer, USA"] },
          { label: "GET", value: "$10", title: "Uber Eats – $10 OFF Your First Order", desc: "Enjoy $10 OFF your first eligible Uber Eats order", bullets: ["Minimum order value of $20 is required", "No promo code is needed to claim the savings", "Alcohol and other regulated items may be excluded", "Uber Eats First Order Deal, $10 Off, Food Delivery, USA"] },
          { label: "SAVE", value: "$15", title: "Uber Eats – $15 OFF Denny's Orders Over $35", desc: "Save $15 OFF eligible Denny's orders", bullets: ["Spend $35 or more to qualify for the offer", "Discount is automatically applied with no code required", "Enjoy your favorite Denny's meals for less", "Uber Eats Deal, Denny's Offer, $15 Off, Food Delivery, USA"] },
          { label: "SAVE", value: "30%", title: "Uber Eats – 30% OFF Caribbean Wrap", desc: "Get 30% OFF the Caribbean Wrap at Stuytown Marketplace INC.", bullets: ["Enjoy the wrap for just $9.09 after the discount", "No coupon code is required for this offer", "Discount is automatically applied to eligible orders", "Uber Eats Food Deal, Caribbean Wrap, 30% Off, USA"] },
          { label: "FREE", value: "FRIES", title: "Uber Eats – FREE Fries on Orders Over $30", desc: "Get FREE fries or eligible free items on qualifying orders", bullets: ["Spend $30 or more to unlock the offer", "No promo code is required", "Offer is available to eligible customers at participating locations", "Uber Eats Freebie, Free Fries, Food Delivery Deal, USA"] },
          { label: "SAVE", value: "20%", title: "Uber Eats – 20% OFF Hollywood Diner Orders $20+", desc: "Save 20% OFF when ordering $20 or more from Hollywood Diner", bullets: ["Enjoy popular diner meals while spending less", "No coupon code is required to receive the discount", "Alcohol and other regulated items may be excluded", "Uber Eats Deal, Hollywood Diner, 20% Off, Food Delivery, USA"] },
          { label: "UP TO", value: "60%", title: "Uber Eats – 60% OFF Orders of $15+", desc: "Save up to 60% OFF eligible Uber Eats orders", bullets: ["Minimum order value of $15 is required", "No promo code is required to claim the discount", "Offer provides extra savings on qualifying food and essentials", "Uber Eats Discount, 60% Off, Food Delivery Deals, USA"] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                {/* Updated left width container to w-[110px] sm:w-[160px] */}
                <div className="relative w-[110px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-1">
                    {/* Increased label font size to text-[11px] sm:text-[13px] */}
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-bold leading-tight">{c.label}</p>
                    {/* Increased value font size to text-[26px] sm:text-[36px] */}
                    <div className="text-[26px] sm:text-[36px] font-extrabold leading-none mt-2">{c.value}</div>
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Order on Uber Eats: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">Uber Eats Coupon Code & Uber Eats Promo Code</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            An Uber Eats coupon code can provide a discount on an eligible order when the applicable terms are met. Promotions can vary by location, account, restaurant, order type, and expiration date, so it's important to check the conditions attached to each offer.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            If you're searching for an Uber Eats promo code, CouponsBit gives you a convenient place to look before ordering. You can check available promotions and then apply an eligible code through Uber Eats.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Uber states that promotions must be applied before placing an order and that only one promo code can be used on an order. Some promotions are also limited to specific cities, states, countries, or user groups.
          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
           <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
           <div className="space-y-1">
             {[
               { icon: Utensils, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
               { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: Home, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: StoreIcon, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
          <h3 className="text-black font-black text-lg mb-2">Best Ways to Save on Uber Eats</h3>
          <p className="text-gray-500 font-medium text-xs mb-8">
            Using a coupon isn't the only way to reduce your food delivery costs.
          </p>
          
          <div className="space-y-8">
            {[
              {
                icon: Tag,
                title: "Check Uber Eats Coupon Codes Before Ordering",
                sub: "Before placing an order, check CouponsBit for the latest Uber Eats coupon code and promotional offers. A quick check can help you identify available savings before you pay."
              },
              {
                icon: Utensils,
                title: "Look for Buy One Get One Deals",
                sub: "Restaurant-specific Buy One Get One promotions can provide good value, particularly when ordering for two or more people."
              },
              {
                icon: Store,
                title: "Choose Restaurants With Current Promotions",
                sub: "Uber Eats displays restaurant-specific deals directly in its marketplace. If you're flexible about what you order, choosing a restaurant with an active promotion can reduce your total."
              },
              {
                icon: Clock,
                title: "Try No Rush Delivery",
                sub: "Uber Eats currently promotes No Rush as a way to save on eligible orders by accepting a longer delivery wait. The availability and savings can vary, so check the option shown at checkout."
              },
              {
                icon: ShoppingBag,
                title: "Consider Pickup",
                sub: "Where available, pickup can be another way to reduce delivery-related costs. Check the restaurant's Uber Eats listing to see whether pickup is offered."
              },
              {
                icon: BadgePercent,
                title: "Check Uber One",
                sub: "Frequent users can compare the cost of an Uber One membership with the potential savings from eligible $0 Delivery Fee and other member benefits."
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start text-justify">
                <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-black font-black text-sm leading-tight mb-2">{item.title}</p>
                  <p className="text-gray-500 font-medium text-[11px] leading-relaxed">{item.sub}</p>
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
          Uber Eats Coupon Codes, Promo Codes & Food Delivery Deals 2026
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-[#056BFA]">
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 font-bold text-[14px]">
              {[
                ["Uber Eats Promo Code – 50% OFF Orders of $15+", "50% OFF", "All Users", "Offer applies to eligible full-priced items at participating stores", "Enjoy bigger savings on food, groceries and everyday essentials"],
                ["Uber Eats Promo Code – 37% OFF 7-Eleven Chocolate Chunk Cookies", "37% OFF", "All Users", "Enjoy a freshly baked cookie packed with chocolate chunks", "Discount is automatically applied at checkout"],
                ["Uber Eats – 20% OFF Orders of $15+ at Dunkin", "20% OFF", "All Users", "Spend $15 or more to qualify for the offer", "No promo code is required to receive the discount"],
                ["Uber Eats – Up to 50% OFF When You Spend $20", "50% OFF", "All Users", "Save on eligible meals, snacks and everyday food orders", "A great way to reduce your delivery order total"],
                ["Uber Eats – $10 OFF Your First Order", "$10 OFF", "All Users", "Minimum order value of $20 is required", "No promo code is needed to claim the savings"],
                ["Uber Eats – $15 OFF Denny's Orders Over $35", "$15 OFF", "All Users", "Spend $35 or more to qualify for the offer", "Discount is automatically applied with no code required"],
                ["Uber Eats – 30% OFF Caribbean Wrap", "30% OFF", "All Users", "Enjoy the wrap for just $9.09 after the discount", "No coupon code is required for this offer"],
                ["Uber Eats – FREE Fries on Orders Over $30", "FREE Fries", "All Users", "Spend $30 or more to unlock the offer", "No promo code is required"],
                ["Uber Eats – 20% OFF Hollywood Diner Orders $20+", "20% OFF", "All Users", "Enjoy popular diner meals while spending less", "No coupon code is required to receive the discount"],
                ["Uber Eats – 60% OFF Orders of $15+", "60% OFF", "All Users", "Minimum order value of $15 is required", "No promo code is required to claim the discount"],
              ].map((row, i) => (
                <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 9 && "border-b-0")}>
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

        {/* Expandable Text Content */}
        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            Looking for the latest <strong>Uber Eats</strong> coupon code, Uber Eats promo code, or Uber Eats discount code? <strong>CouponsBit</strong> helps you discover current Uber Eats offers, restaurant deals, delivery promotions, and other ways to save on food, groceries, and everyday essentials.
          </p>
          <p>
            Uber Eats lets customers order from participating restaurants, stores, and other local merchants through its app and website. From a quick lunch or dinner to groceries and convenience items, you can browse nearby options, compare available deals, and have your order delivered or choose pickup where available.
          </p>
          <p>
            Before placing your next order, check CouponsBit for the latest Uber Eats coupon codes and promo codes. You may find an offer that can lower your order total or help reduce delivery costs.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Uber Eats Discount Code
            </h3>
            <p>
              A Uber Eats discount code can help reduce the cost of an eligible food delivery or pickup order. Depending on the promotion, a discount may have a minimum order requirement, specific restaurant restrictions, or other conditions.
            </p>
            <p>Before using a code, check:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 font-medium">
              <li>The promotion's expiration date</li>
              <li>Minimum order requirements</li>
              <li>Eligible restaurants or stores</li>
              <li>Whether the offer is for new or existing users</li>
              <li>Geographic restrictions</li>
              <li>Whether the promotion applies to delivery or pickup</li>
              <li>Any other terms listed with the offer</li>
            </ul>
            <p>This helps ensure you choose an offer that actually applies to your order.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Uber Eats Deals & Food Delivery Offers
            </h3>
            <p>
              Uber Eats regularly features restaurant-specific promotions and other savings opportunities. Its current U.S. savings page highlights options such as $0 Delivery Fee promotions, Daily Dinner Deals, No Rush delivery savings, and a Latest Deals section.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Uber Eats Food Deals</h4>
            <p>
              Food deals can vary by restaurant and location. Depending on what's available in your area, you may see offers such as percentage discounts, money-off promotions, Buy One Get One deals, free items with qualifying purchases, or reduced delivery fees.
            </p>
            <p>
              Because restaurant promotions can change frequently, checking the Uber Eats app or website before ordering is one of the easiest ways to find current deals.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Uber Eats Restaurant Deals</h4>
            <p>
              Participating restaurants can run their own promotions through Uber Eats. Current listings can include offers such as Buy One Get One promotions, discounts on orders above a specific amount, and free items with qualifying purchases.
            </p>
            <p>
              If you're flexible about where you order from, compare restaurants offering promotions before deciding what to order.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Uber Eats $0 Delivery Fee</h4>
            <p>
              Uber Eats currently promotes $0 Delivery Fee offers at participating restaurants, although availability and eligibility can change. The platform's savings page notes that featured restaurants can change throughout the day.
            </p>
            <p>
              You may also see $0 Delivery Fee benefits through an eligible Uber One membership.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Uber Eats Promo Code for Existing Users & Customers
            </h3>
            <p>
              Not every Uber Eats promo code is limited to first-time customers. Existing users can also receive promotions through their Uber Eats account, restaurant-specific offers, email communications, or in-app notifications.
            </p>
            <p>
              Uber's official guidance says existing users can check their available promotions through the account section of the Uber Eats app. Selected restaurants may also provide promotions based on spending or other conditions.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Uber Eats Deals for Existing Customers</h4>
            <p>
              If you've already ordered through Uber Eats, don't assume that new-user offers are your only opportunity to save. Check your account's Promotions section and look at the restaurants you're interested in before placing an order.
            </p>
            <p>
              Available offers may vary from one account or location to another, so the promotions shown to you may not be identical to those available to another customer.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Uber Eats First Order & New User Promo Codes
            </h3>
            <p>
              New customers may be eligible for an Uber Eats first order promo code or other introductory promotion. However, eligibility and promotional terms can vary.
            </p>
            <p>
              Uber's official promotion guidance notes that certain promotions may only apply to first-time Uber Eats users.
            </p>
            <p>
              If you're ordering from Uber Eats for the first time, check CouponsBit for available introductory offers and review the requirements before placing your order.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Uber Eats New User Promo Code</h4>
            <p>
              A Uber Eats new user promo code may be subject to restrictions such as minimum spending requirements, geographic availability, and expiration dates.
            </p>
            <p>
              After adding a promotional code, check the order summary before paying to make sure the discount has been applied.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Uber Eats Grocery & Convenience Deals
            </h3>
            <p>
              Uber Eats isn't limited to restaurant meals. Depending on your location, you can also use the platform to order groceries, convenience products, household essentials, personal care items, and other products from participating merchants.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Uber Eats Grocery Delivery</h4>
            <p>
              Grocery availability depends on your location and participating stores. You can browse eligible merchants through Uber Eats and add available products to your cart.
            </p>
            <p>
              If a grocery store is running a promotion, the offer may appear directly in the store's listing or during the shopping process.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Uber Eats Convenience Store Deals</h4>
            <p>
              Convenience stores and other retailers can also appear on Uber Eats. This can be useful when you need snacks, drinks, household essentials, or other items without making a separate trip to the store.
            </p>
            <p>
              Check the merchant page for current promotions and minimum purchase requirements.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Uber One & Uber Eats Savings
            </h3>
            <p>
              Frequent Uber Eats customers may want to consider Uber One, Uber's membership program for eligible Uber and Uber Eats benefits.
            </p>
            <p>
              The current U.S. Uber Eats membership page lists Uber One at $9.99 per month or $96 per year. Benefits include $0 Delivery Fee on eligible orders, up to 10% off eligible deliveries and pickup orders, and other Uber-related benefits.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Uber One $0 Delivery Fee</h4>
            <p>
              One of the main Uber One benefits is a $0 Delivery Fee on eligible orders when the applicable requirements are met. Participating merchants are identified with the Uber One icon, and minimum order requirements may apply.
            </p>
            <p>
              For customers who order frequently, reducing delivery costs can make a membership more worthwhile.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Uber One Member Deals</h4>
            <p>
              Uber One members can also receive access to member-specific promotions and other perks. The exact offers available can change over time.
            </p>
            <p>
              If you're considering membership, compare the cost of Uber One with how frequently you order and the benefits available to your account.
            </p>
          </div>

          {/* Numbered Steps Block */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">
              How to Use an Uber Eats Coupon Code
            </h3>
            <div className="space-y-6">
              {[
                "Step 1: Find an Uber Eats Coupon Code — Visit CouponsBit and browse the latest Uber Eats coupon codes, promo codes, and food delivery offers.",
                "Step 2: Select Your Uber Eats Deal — Choose a promotion that matches your order and review the offer's requirements.",
                "Step 3: Copy the Uber Eats Promo Code — If a code is required, reveal the Uber Eats promo code and copy it.",
                "Step 4: Choose Your Food or Products — Open Uber Eats and select your restaurant, grocery store, or participating merchant. Add your desired products to the cart.",
                "Step 5: Apply the Uber Eats Discount Code — Enter the Uber Eats discount code in the Promotions section or applicable promotion field before completing the order. Uber's official instructions also allow users to access promotions through Account -> Promotions in the app.",
                "Step 6: Check Your Order Total — Make sure the discount has been applied before placing your order. Uber states that a promotion cannot be added after an order has already been placed.",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Why Use Uber Eats?
            </h3>
            <p>
              Uber Eats makes it possible to browse and order from participating restaurants, stores, and other merchants through one platform.
            </p>
            <p>
              <strong>Wide Range of Restaurants:</strong> Depending on your location, you can discover restaurants serving different cuisines, from fast food and pizza to Indian, Mexican, Asian, Mediterranean, and more.
            </p>
            <p>
              <strong>Food Delivery & Pickup:</strong> Uber Eats supports delivery from participating merchants and, in some locations, pickup orders.
            </p>
            <p>
              <strong>Restaurant-Specific Promotions:</strong> Restaurants can feature their own offers, allowing customers to find discounts beyond general Uber Eats promotions.
            </p>
            <p>
              <strong>Grocery & Retail Shopping:</strong> In addition to meals, Uber Eats can connect customers with participating grocery stores, convenience stores, and other retailers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Find the Latest Uber Eats Coupon Codes & Deals
            </h3>
            <p>
              Whether you're ordering dinner, grabbing lunch, shopping for groceries, or looking for a quick convenience-store delivery, Uber Eats offers multiple ways to find savings.
            </p>
            <p>
              Before placing your next order, check CouponsBit for the latest Uber Eats coupon code, Uber Eats promo code, Uber Eats discount code, Uber Eats first order promo code, Uber Eats deals, and food delivery offers.
            </p>
            <p>
              Compare available promotions, check the eligibility requirements, and make sure your discount is applied before submitting your order. With the right combination of restaurant deals, promotional offers, and eligible delivery savings, you can make your next Uber Eats order more affordable.
            </p>
          </div>

          {/* Gradient Mask when collapsed */}
          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        {/* Read More / Read Less Toggle Button */}
        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform",
              isReadMore && "rotate-180"
            )}
          />
        </button>

        {/* FAQ Accordion Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Uber Eats Coupon Code FAQs
          </h3>
          {[
            {
              q: "Does Uber Eats Have Promo Codes?",
              a: "Yes. Uber Eats offers promotional codes and other discounts. Available promotions can vary by location, user, restaurant, and order.",
            },
            {
              q: "Where Can I Find an Uber Eats Promo Code?",
              a: "You can check CouponsBit for available Uber Eats promo codes. You can also view promotions available to your account through the Uber Eats app under Account -> Promotions.",
            },
            {
              q: "Is There an Uber Eats Promo Code for Existing Users?",
              a: "Existing users may receive promotions through their Uber Eats account, restaurants, emails, or in-app notifications. Not all promotions are available to every customer.",
            },
            {
              q: "Does Uber Eats Have a First Order Discount?",
              a: "Uber Eats may offer promotions specifically for first-time users. Eligibility and terms can vary, so check the current promotion before placing your first order.",
            },
            {
              q: "Can I Use Two Uber Eats Promo Codes?",
              a: "No. Uber Eats states that only one promo code can be applied to an order.",
            },
            {
              q: "Can I Apply a Promo Code After Ordering?",
              a: "No. Promotions need to be applied before the order is placed. A promo code generally cannot be added after the order has been submitted.",
            },
            {
              q: "Does Uber Eats Offer Free Delivery?",
              a: "Uber Eats offers $0 Delivery Fee promotions at participating restaurants, and eligible Uber One members can receive $0 Delivery Fee on qualifying orders. Availability and minimum order requirements vary.",
            },
            {
              q: "What Is Uber One?",
              a: "Uber One is a paid membership program offering benefits across eligible Uber and Uber Eats orders and rides. The current U.S. membership page lists plans at $9.99 monthly or $96 annually.",
            },
            {
              q: "Is CouponsBit Free to Use?",
              a: "Yes. CouponsBit is free to use. You can browse Uber Eats coupon codes, food delivery discounts, restaurant promotions, and other deals without paying a fee.",
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
                <span className="text-black font-black text-base">
                  {faq.q}
                </span>
                <div
                  className={cn(
                    "bg-[#f0f0f0] p-2 rounded-xl transition-all",
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
        {/* Search Tags */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Uber Eats Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "First Order Code",
              "Existing User Deals",
              "$0 Delivery Fee",
              "Uber One Perks",
              "Grocery Delivery",
              "Convenience Stores",
              "Daily Dinner Deals",
              "Uber Eats Promo Code",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Today's Top Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Uber Eats Deals
          </h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div
                key={i}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  U
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
                  aria-label={`Shop Uber Eats: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90 inline-block text-center"
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
