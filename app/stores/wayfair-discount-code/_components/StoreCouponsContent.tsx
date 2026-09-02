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
  Sparkles, 
  Laptop, 
  Clock, 
  CalendarDays, 
  Bed, 
  Armchair, 
  Sun,
  ShoppingBag,
  Sofa,
  Lamp,
  TreePine,
  Briefcase,
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
  { id: "d1", label: "UP TO", heading: "48-Hour Clearance Sale | Up to 70% OFF", sub: "Wayfair Promo Code" },
  { id: "d2", label: "UP TO", heading: "Closeout Sale | Up to 80% OFF", sub: "Wayfair Promo Code" },
  { id: "d3", label: "UP TO", heading: "Bedroom Furniture | Up to 50% OFF", sub: "Wayfair Deal" },
  { id: "d4", label: "UP TO", heading: "Area Rugs | Up to 70% OFF", sub: "Wayfair Deal" },
  { id: "d5", label: "FROM", heading: "Dorm Room Deals | Picks From $20", sub: "Wayfair Deal" },
  { id: "d6", label: "FREE", heading: "Free Shipping on Orders Over $35", sub: "Wayfair Deal" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "CarCovers", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/carcover-logo_eufopb.webp", dealText: "Save $30 OFF", href: "/stores/carcovers-discount-code" },
  { name: "Dreame", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/dreame-logo_uqesij.webp", dealText: "Up To 45% OFF", href: "/stores/dreame-discount-code" },
  { name: "Lumibrick", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/lumricks-logo_a84nyo.webp", dealText: "From $56.99", href: "/stores/lumibrick-discount-code" },
  { name: "Bluetti", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/bluetti-power-logo_osmets.webp", dealText: "Save Up To $200", href: "/stores/bluetti-discount-code" },
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up To $260", href: "/stores/merachfit-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Verified Deals", href: "/stores/target-discount-code" },
];

const STORE_URL = "https://www.wayfair.com/";

export default function WayfairCouponsContent() {
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
              <span className="text-black font-extrabold">Wayfair</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp" alt="Wayfair" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Wayfair</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(56.4k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Wayfair discount codes, promo codes, and home deals for Sep 2026. Save up to 80% on closeouts, 70% on clearance and area rugs, shop dorm essentials from $20, outdoor décor from $15, get 10% OFF for new subscribers, plus free shipping.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "9", label: "Offers" },
                    { icon: Percent, val: "2.8k", label: "Deals" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788350543/151_um3pet.webp" alt="Wayfair Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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

        
        <section className="py-6 md:py-16 bg-white overflow-hidden">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-[65%]">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-black leading-tight">Wayfair Discount Codes & Offers</h2>
        </div>

        {[
          { label: "UP TO", value: "70% OFF", title: "Wayfair Promo Code – 48-Hour Clearance Sale | Up to 70% OFF", desc: "Shop the 48-Hour Clearance and save up to 70% OFF on selected products", bullets: ["Discover limited-time markdowns across furniture, home décor and more", "Hurry—clearance deals are available for a limited time only", "Refresh your home with major savings on popular Wayfair finds"] },
          { label: "UP TO", value: "80% OFF", title: "Wayfair Promo Code – Closeout Sale | Up to 80% OFF", desc: "Score up to 80% OFF on selected closeout products while supplies last", bullets: ["Discover final-sale bargains across furniture, décor and home essentials", "Limited quantities available, making these deals ideal for bargain shoppers", "Find stylish home upgrades at significantly reduced prices"] },
          { label: "UP TO", value: "50% OFF", title: "Wayfair – Bedroom Furniture | Up to 50% OFF", desc: "Save up to 50% OFF on selected bedroom furniture", bullets: ["Shop beds, dressers, nightstands and other bedroom essentials", "Upgrade your space with stylish furniture at reduced prices", "Explore a range of designs for modern and classic bedrooms"] },
          { label: "UP TO", value: "70% OFF", title: "Wayfair – Area Rugs | Up to 70% OFF", desc: "Get up to 70% OFF on selected area rugs", bullets: ["Refresh your living room, bedroom or dining space with stylish designs", "Great opportunity to add a finishing touch to your home for less"] },
          { label: "FROM", value: "$20", title: "Wayfair – Dorm Room Deals | Picks From $20", desc: "Discover budget-friendly dorm room essentials starting from $20", bullets: ["Shop practical furniture, storage solutions, bedding and décor", "Find on-budget picks designed for college and student spaces", "Fast and free delivery is available on qualifying items"] },
          { label: "FROM", value: "$15", title: "Wayfair – Outdoor Décor | From $15", desc: "Shop outdoor décor starting from just $15", bullets: ["Add stylish finishing touches to patios, balconies and outdoor spaces", "Discover small décor pieces that can transform your outdoor sanctuary", "Find budget-friendly options for seasonal home refreshes"] },
          { label: "SHOP", value: "UNDER $50", title: "Wayfair – Vases, Urns, Jars & Bottles | Under $50", desc: "Discover vases, urns, jars and decorative bottles priced under $50", bullets: ["Add affordable decorative accents to shelves, tables and living spaces", "Choose from a variety of styles to complement your home décor", "Great picks for refreshing your space without overspending"] },
          { label: "EXTRA", value: "10% OFF", title: "Wayfair – Extra 10% OFF for New Subscribers", desc: "New subscribers can get an extra 10% OFF on eligible purchases", bullets: ["Sign up to unlock additional savings on your Wayfair shopping", "Combine the offer with selected home, furniture and décor deals where eligible", "A simple way for new customers to save more on their first purchases"] },
          { label: "FREE", value: "SHIPPING", title: "Wayfair – Free Shipping on Orders Over $35", desc: "Enjoy Fast & Free Shipping on qualifying orders over $35", bullets: ["Shop furniture, décor, rugs and home essentials with convenient delivery", "Reach the qualifying order threshold and save on shipping costs", "Availability and exclusions may apply to selected products and locations"] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[140px] sm:w-[220px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-2">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[13px] sm:text-[16px] font-extrabold leading-tight">{c.label}</p>
                    <div className="text-[20px] sm:text-4xl font-black leading-none mt-2 sm:mt-3 whitespace-nowrap">{c.value}</div>
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Wayfair: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">What Is a Wayfair Discount Code?</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           A Wayfair discount code is a promotional code that may reduce the price of eligible merchandise or provide another benefit during checkout.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           The terms can vary depending on the promotion. Some offers may be limited to certain categories, require a minimum purchase, apply only to selected products, or be available for a specific period.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           Always review the conditions before relying on a discount.

          </p>
          <h3 className="text-black font-black text-lg mb-6">What Is a Wayfair Coupon Code?</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           A Wayfair coupon code is another common term for a promotional code used to obtain a qualifying discount or offer.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           Not every Wayfair promotion requires a code. Some savings are applied automatically through sale pricing, special promotions, clearance offers, or other campaigns.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           That's why it's useful to compare a coupon with the product's current selling price rather than assuming that a coupon will always provide the lowest total.

          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
           <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
           <div className="space-y-1">
             {[
               { icon: Sofa, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
               { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: Lamp, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: TreePine, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm max-w-md mx-auto">
  <h3 className="text-black font-black text-lg mb-2">
    What Types of Wayfair Sales and Offers Are Available?
  </h3>
  <p className="text-gray-500 font-medium text-xs mb-8">
    Wayfair is known for running frequent promotions across different home categories.
  </p>

  <div className="space-y-8">
    {[
      {
        icon: Sparkles,
        title: "Way Day",
        sub: "Way Day is one of Wayfair's biggest promotional events. It typically features discounts across furniture, décor, mattresses, appliances, rugs, outdoor products, and other home categories. If you're planning a large purchase, Way Day can be a useful period to watch for major reductions."
      },
      {
        icon: Tag,
        title: "Black Friday",
        sub: "Wayfair's Black Friday sale is another important shopping period, with promotions often spanning furniture, home décor, mattresses, appliances, rugs, lighting, and seasonal products."
      },
      {
        icon: Laptop,
        title: "Cyber Monday",
        sub: "Cyber Monday can extend online shopping promotions after Black Friday, giving shoppers another opportunity to compare Wayfair deals."
      },
      {
        icon: Percent,
        title: "Clearance Sales",
        sub: "Wayfair's clearance section can be useful for shoppers prioritizing price over having access to every color or configuration. Clearance inventory can change quickly as products sell through."
      },
      {
        icon: Clock,
        title: "Daily and Limited-Time Deals",
        sub: "Wayfair regularly features short-term offers on selected products and categories. These deals can be useful if you're flexible about the exact product you purchase."
      },
      {
        icon: CalendarDays,
        title: "Seasonal Sales",
        sub: "Wayfair promotions can also coincide with seasonal shopping periods, including: Spring sales, Summer promotions, Labor Day, Fall sales, Holiday promotions, Christmas sales, and New Year offers."
      },
      {
        icon: Bed,
        title: "Mattress Sales",
        sub: "Mattresses and bedroom products are frequently included in home-focused promotional events. If you're replacing a mattress, compare the sale price, size, materials, delivery terms, and return policy before purchasing."
      },
      {
        icon: Armchair,
        title: "Furniture Sales",
        sub: "Sofas, beds, dining sets, desks, cabinets, and other furniture can appear in major Wayfair promotions."
      },
      {
        icon: Sun,
        title: "Outdoor Sales",
        sub: "Outdoor furniture, patio accessories, grills, umbrellas, fire pits, and garden products are particularly relevant during spring and summer promotions."
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
          Wayfair Discount Code, Coupon Code & Sale
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
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">48-Hour Clearance Sale</td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">Up to 70% OFF</td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">All Users</td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">Limited time (48 Hours)</td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">Selected clearance items, furniture &amp; décor</td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">Closeout Sale</td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">Up to 80% OFF</td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">All Users</td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">While supplies last</td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">Selected closeout products</td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">Bedroom Furniture Deal</td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">Up to 50% OFF</td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">All Users</td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">Select items only</td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">Beds, dressers, nightstands &amp; bedroom essentials</td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">Area Rugs Discount</td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">Up to 70% OFF</td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">All Users</td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">Selected rug designs</td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">Living room, bedroom &amp; dining rugs</td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">Dorm Room Deals</td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">Starting From $20</td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">All Users</td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">Budget student picks</td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">Storage, bedding, furniture &amp; dorm décor</td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">Outdoor Décor Sale</td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">Starting From $15</td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">All Users</td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">Seasonal offer</td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">Patio &amp; balcony outdoor accents</td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">Decorative Accents</td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">Under $50</td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">All Users</td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">Priced under $50</td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">Vases, urns, jars &amp; decorative bottles</td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">New Subscriber Offer</td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">Extra 10% OFF</td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">New Subscribers</td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">Sign-up required</td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">Eligible first-time orders</td>
        </tr>
        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">Free Shipping Offer</td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">FREE Shipping</td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">All Users</td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">Valid on orders over $35</td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">Qualifying furniture &amp; home orders</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        {/* Collapsible Content Area */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          
          {/* Intro Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Find a Wayfair Discount Code and Save on Your Next Order</h3>
            <p>
              Looking for a Wayfair discount code before refreshing your home? Whether you're furnishing a new room, replacing an old sofa, upgrading your bedroom, or searching for smaller décor pieces, Wayfair offers a huge selection of furniture and home products across different styles and budgets.
            </p>
            <p>
              From living room furniture and bedroom sets to mattresses, rugs, lighting, outdoor furniture, kitchen products, bathroom essentials, storage, and décor, you can find products for almost every part of your home.
            </p>
            <p>
              Before you place an order, checking for a Wayfair coupon code, promo code, or current Wayfair sale can help you compare available savings. At CouponsBit, you can look for current Wayfair offers before heading to checkout and see whether a promotion makes sense for your purchase.
            </p>
          </div>

          {/* Why Shop at Wayfair? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Shop at Wayfair?</h3>
            <p>
              Wayfair is an online home retailer with an extensive assortment covering furniture, décor, home improvement products, appliances, outdoor living, and everyday household essentials.
            </p>
            <p>
              Its broad catalog makes it possible to shop for a single accent piece or furnish several rooms in one place.
            </p>
            <p>Popular Wayfair categories include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Living room furniture</li>
              <li>Bedroom furniture</li>
              <li>Dining furniture</li>
              <li>Mattresses</li>
              <li>Rugs</li>
              <li>Lighting</li>
              <li>Home décor</li>
              <li>Outdoor furniture</li>
              <li>Patio products</li>
              <li>Kitchen products</li>
              <li>Bathroom products</li>
              <li>Storage and organization</li>
              <li>Home improvement</li>
              <li>Appliances</li>
              <li>Office furniture</li>
              <li>Kids' furniture</li>
              <li>Baby products</li>
              <li>Pet products</li>
              <li>Seasonal décor</li>
            </ul>
          </div>

          {/* Wayfair Living Room Furniture */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Living Room Furniture</h3>
            <p>
              The living room is one of Wayfair's biggest furniture categories, with options for different room sizes, layouts, and decorating styles.
            </p>
            <p><strong>Sofas and Couches:</strong> You can browse traditional sofas, sectionals, loveseats, sleeper sofas, modular seating, and other upholstered furniture. When choosing a sofa, consider dimensions, upholstery, seating capacity, cushion construction, and the amount of available floor space.</p>
            <p><strong>Sectional Sofas:</strong> Sectionals can provide additional seating and are available in different configurations, including L-shaped and modular designs. They can work particularly well in larger living rooms or open-plan spaces.</p>
            <p><strong>Coffee Tables:</strong> Wayfair offers coffee tables in materials and styles ranging from wood and metal to glass and mixed-material designs.</p>
            <p><strong>TV Stands and Media Consoles:</strong> TV stands and entertainment centers provide a place for televisions, gaming equipment, media devices, and decorative accessories.</p>
            <p><strong>Accent Chairs:</strong> Accent chairs can add another seating option while introducing a different color, fabric, or design element to a room.</p>
            <p><strong>Ottomans and Benches:</strong> Ottomans can be used as footrests, additional seating, or occasional tables, while benches can work in living rooms, entryways, bedrooms, and other spaces.</p>
          </div>

          <div className="space-y-6">
  {/* Wayfair Bedroom Furniture */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Bedroom Furniture</h3>
    <p>
      Whether you're furnishing a master bedroom, guest room, or smaller sleeping space, Wayfair offers a variety of bedroom furniture.
    </p>
    <p><strong>Beds and Bed Frames:</strong> Options include platform beds, upholstered beds, canopy beds, storage beds, panel beds, and other frame styles.</p>
    <p><strong>Headboards:</strong> Headboards are available separately for shoppers who want to change the appearance of an existing bed.</p>
    <p><strong>Dressers and Chests:</strong> Bedroom storage includes dressers, chests, nightstands, armoires, and other organizational furniture.</p>
    <p><strong>Nightstands:</strong> Nightstands provide convenient bedside storage for lamps, books, electronics, and personal items.</p>
    <p><strong>Bedroom Sets:</strong> Bedroom collections can make it easier to coordinate multiple pieces, such as beds, dressers, nightstands, and chests.</p>
  </div>

  {/* Wayfair Mattresses and Bedding */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Mattresses and Bedding</h3>
    <p>
      Wayfair also has products designed to make bedrooms more comfortable.
    </p>
    <p><strong>Mattresses:</strong> Shoppers can compare different mattress sizes and constructions based on their preferred sleeping style and comfort requirements.</p>
    <p><strong>Mattress Toppers:</strong> A mattress topper can provide an additional comfort layer without replacing the entire mattress.</p>
    <p><strong>Bedding:</strong> The selection includes sheets, comforters, quilts, duvet covers, blankets, bedspreads, pillows, and other bedroom textiles.</p>
    <p><strong>Pillows:</strong> You can find pillows designed for different sleeping positions and preferences.</p>
  </div>

  {/* Wayfair Dining Room Furniture */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Dining Room Furniture</h3>
    <p>
      For dining spaces, Wayfair offers furniture ranging from individual pieces to complete dining sets.
    </p>
    <p><strong>Dining Tables:</strong> Dining tables come in different shapes, sizes, materials, and designs to suit both compact and spacious dining areas.</p>
    <p><strong>Dining Chairs:</strong> Options include upholstered chairs, wooden chairs, benches, counter-height seating, and other styles.</p>
    <p><strong>Bar and Counter Stools:</strong> Bar stools and counter stools can be used around kitchen islands, breakfast counters, and home bars.</p>
    <p><strong>Dining Sets:</strong> Dining sets can provide coordinated tables and seating for shoppers furnishing a dining area from scratch.</p>
    <p><strong>Buffets and Sideboards:</strong> These pieces offer additional storage for dinnerware, table linens, serving items, and decorative accessories.</p>
  </div>

  {/* Wayfair Rugs */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Rugs</h3>
    <p>
      Rugs can change the look and feel of a room while helping define different areas within an open floor plan.
    </p>
    <p>Wayfair offers rugs for:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Living rooms</li>
      <li>Bedrooms</li>
      <li>Dining rooms</li>
      <li>Kitchens</li>
      <li>Hallways</li>
      <li>Entryways</li>
      <li>Nurseries</li>
      <li>Outdoor spaces</li>
    </ul>
    <p>You can browse different patterns, materials, shapes, colors, pile heights, and sizes.</p>
    <p><strong>Area Rugs:</strong> Area rugs can anchor furniture groupings and create visual separation between spaces.</p>
    <p><strong>Runner Rugs:</strong> Runners are useful for hallways, kitchens, entryways, and other narrow areas.</p>
    <p><strong>Outdoor Rugs:</strong> Outdoor rugs are designed for patios, balconies, porches, and other exterior living areas.</p>
  </div>

  {/* Wayfair Lighting */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Lighting</h3>
    <p>
      Lighting is another major Wayfair category, with products designed for both practical illumination and decorative impact.
    </p>
    <p><strong>Ceiling Lights:</strong> Options include flush mounts, semi-flush fixtures, chandeliers, and other ceiling-mounted lighting.</p>
    <p><strong>Pendant Lights:</strong> Pendant lights can be used above kitchen islands, dining tables, entryways, and other areas.</p>
    <p><strong>Chandeliers:</strong> Wayfair offers chandeliers in traditional, modern, farmhouse, industrial, and other design styles.</p>
    <p><strong>Floor Lamps:</strong> Floor lamps provide additional illumination without requiring a permanent installation.</p>
    <p><strong>Table Lamps:</strong> Table lamps work well on nightstands, desks, consoles, side tables, and other surfaces.</p>
    <p><strong>Bathroom Lighting:</strong> Vanity lights and other bathroom fixtures can provide targeted lighting around mirrors and sinks.</p>
  </div>

  {/* Wayfair Home Décor */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Home Décor</h3>
    <p>
      Small decorative changes can transform a room without requiring a major renovation.
    </p>
    <p>Wayfair's décor selection can include:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Wall art</li>
      <li>Mirrors</li>
      <li>Vases</li>
      <li>Decorative objects</li>
      <li>Candles</li>
      <li>Candle holders</li>
      <li>Picture frames</li>
      <li>Throw pillows</li>
      <li>Blankets</li>
      <li>Clocks</li>
      <li>Sculptures</li>
      <li>Seasonal decorations</li>
    </ul>
    <p>
      You can mix these products with existing furniture to change the appearance of a room without replacing everything.
    </p>
  </div>

  {/* Wayfair Curtains and Window Treatments */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Curtains and Window Treatments</h3>
    <p>
      Window treatments can add privacy while also contributing to the overall design of a room.
    </p>
    <p>Shoppers can explore:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Curtains</li>
      <li>Curtain panels</li>
      <li>Blackout curtains</li>
      <li>Sheer curtains</li>
      <li>Valances</li>
      <li>Curtain rods</li>
      <li>Blinds</li>
      <li>Shades</li>
      <li>Window accessories</li>
    </ul>
    <p>
      Blackout options can be particularly useful in bedrooms, nurseries, and home theaters.
    </p>
  </div>

  {/* Wayfair Kitchen */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Kitchen</h3>
    <p>
      Wayfair offers a variety of kitchen products, ranging from furniture and organization to appliances and everyday accessories.
    </p>
    <p><strong>Kitchen Islands and Carts:</strong> Kitchen islands can add preparation space and storage, while rolling carts provide a flexible option for smaller kitchens.</p>
    <p><strong>Bar Stools:</strong> Counter and bar stools can complement kitchen islands and breakfast counters.</p>
    <p><strong>Kitchen Storage:</strong> Products include pantry organizers, cabinets, shelves, racks, containers, and other storage solutions.</p>
    <p><strong>Kitchen Accessories:</strong> You can also find cookware, bakeware, serving products, utensils, drinkware, and other kitchen essentials.</p>
  </div>

  {/* Wayfair Bathroom */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Bathroom</h3>
    <p>
      The bathroom collection includes furniture, storage, fixtures, textiles, and decorative accessories.
    </p>
    <p><strong>Bathroom Vanities:</strong> Vanities combine countertop space with storage and are available in different widths and designs.</p>
    <p><strong>Bathroom Cabinets:</strong> Additional cabinets can help organize towels, toiletries, cleaning products, and personal-care items.</p>
    <p><strong>Mirrors:</strong> Wayfair offers bathroom mirrors in different shapes, sizes, frames, and designs.</p>
    <p><strong>Bathroom Accessories:</strong> You can also shop for shower curtains, bath mats, towel sets, storage products, soap dispensers, and other bathroom essentials.</p>
  </div>

  {/* Wayfair Outdoor Furniture */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Outdoor Furniture</h3>
    <p>
      Wayfair isn't limited to indoor furniture. Its outdoor selection can help turn patios, balconies, decks, and gardens into usable living areas.
    </p>
    <p><strong>Patio Seating:</strong> Outdoor seating can include sofas, sectionals, chairs, benches, loungers, and conversation sets.</p>
    <p><strong>Outdoor Dining:</strong> You can find patio dining tables and chairs for outdoor meals and entertaining.</p>
    <p><strong>Outdoor Umbrellas:</strong> Patio umbrellas can provide shade for outdoor seating and dining areas.</p>
    <p><strong>Outdoor Rugs:</strong> Outdoor rugs can add color and help define patio spaces.</p>
    <p><strong>Fire Pits:</strong> Fire pits can create a focal point for outdoor gatherings and provide warmth during cooler evenings.</p>
    <p><strong>Outdoor Storage:</strong> Deck boxes, storage cabinets, sheds, and other products can help keep outdoor supplies organized.</p>
  </div>
</div>

          {/* Wayfair Home Office Furniture */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Home Office Furniture</h3>
            <p>
              With more people working and studying from home, dedicated office furniture is another useful Wayfair category.
            </p>
            <p>You can shop for:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Desks</li>
              <li>Office chairs</li>
              <li>Standing desks</li>
              <li>Bookcases</li>
              <li>Filing cabinets</li>
              <li>Computer desks</li>
              <li>Desk accessories</li>
              <li>Office storage</li>
              <li>Shelving</li>
              <li>Lighting</li>
            </ul>
            <p><strong>Desks:</strong> Options range from compact writing desks to larger executive desks and adjustable standing desks.</p>
            <p><strong>Office Chairs:</strong> Ergonomic and task-oriented seating can help create a more functional workspace.</p>
            <p><strong>Bookcases and Shelving:</strong> Storage furniture can organize books, documents, office equipment, and decorative items.</p>
          </div>

          {/* Wayfair Kids' Furniture */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Kids' Furniture</h3>
            <p>Wayfair also offers furniture and décor for children's rooms.</p>
            <p>Products can include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Kids' beds</li>
              <li>Bunk beds</li>
              <li>Toddler beds</li>
              <li>Dressers</li>
              <li>Nightstands</li>
              <li>Desks</li>
              <li>Bookcases</li>
              <li>Toy storage</li>
              <li>Rugs</li>
              <li>Lighting</li>
              <li>Nursery furniture</li>
            </ul>
          </div>

          {/* Wayfair Baby and Nursery */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Baby and Nursery</h3>
            <p>Parents can shop for products to furnish and organize nurseries and baby spaces.</p>
            <p>Common categories include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Cribs</li>
              <li>Changing tables</li>
              <li>Nursery dressers</li>
              <li>Gliders</li>
              <li>Rocking chairs</li>
              <li>Bassinets</li>
              <li>Nursery décor</li>
              <li>Baby bedding</li>
              <li>Storage</li>
            </ul>
            <p>
              When shopping for baby products, always review the product specifications and applicable safety information.
            </p>
          </div>

          {/* Wayfair Storage and Organization */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Storage and Organization</h3>
            <p>Storage furniture can help make better use of available space throughout the home.</p>
            <p>You can find:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Storage cabinets</li>
              <li>Shelving units</li>
              <li>Bookcases</li>
              <li>Closet organizers</li>
              <li>Shoe storage</li>
              <li>Baskets</li>
              <li>Storage bins</li>
              <li>Entryway organizers</li>
              <li>Under-bed storage</li>
              <li>Bathroom storage</li>
            </ul>
            <p>
              These products can be especially useful when you're trying to organize smaller homes, apartments, bedrooms, garages, or home offices.
            </p>
          </div>

          {/* Wayfair Appliances */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Appliances</h3>
            <p>Wayfair also sells appliances for kitchens, laundry rooms, and other areas of the home.</p>
            <p>Depending on the current assortment, shoppers can browse:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Refrigerators</li>
              <li>Freezers</li>
              <li>Dishwashers</li>
              <li>Ranges</li>
              <li>Ovens</li>
              <li>Microwaves</li>
              <li>Wine refrigerators</li>
              <li>Washers</li>
              <li>Dryers</li>
              <li>Air conditioners</li>
              <li>Heating products</li>
              <li>Small appliances</li>
            </ul>
            <p>
              When comparing major appliances, consider delivery, installation, dimensions, energy usage, warranty coverage, and return conditions in addition to the purchase price.
            </p>
          </div>

          {/* Wayfair Home Improvement */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Home Improvement</h3>
            <p>Wayfair can also be useful for smaller renovation and improvement projects.</p>
            <p>Products may include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Faucets</li>
              <li>Sinks</li>
              <li>Lighting</li>
              <li>Hardware</li>
              <li>Flooring</li>
              <li>Tile</li>
              <li>Bathroom fixtures</li>
              <li>Doors</li>
              <li>Shelving</li>
              <li>Storage</li>
              <li>Home security products</li>
              <li>Heating and cooling accessories</li>
            </ul>
          </div>

          {/* Wayfair Pet Products */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Wayfair Pet Products</h3>
            <p>Pet owners can also find furniture and accessories for their animals.</p>
            <p>Popular categories include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Dog beds</li>
              <li>Cat trees</li>
              <li>Pet houses</li>
              <li>Crates</li>
              <li>Feeding stations</li>
              <li>Pet bowls</li>
              <li>Pet furniture</li>
              <li>Toys</li>
              <li>Pet ramps</li>
              <li>Storage</li>
            </ul>
          </div>

          {/* How to Save More at Wayfair */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Save More at Wayfair</h3>
            <p><strong>Check CouponsBit Before Shopping:</strong> Before placing an order, check CouponsBit for an available Wayfair discount code, coupon, or promotional offer.</p>
            <p><strong>Compare the Coupon With Sale Pricing:</strong> If the item is already discounted, compare its current price with the price after applying the coupon to determine which option gives you the better deal.</p>
            <p><strong>Shop During Way Day:</strong> If your purchase isn't urgent, waiting for Way Day may be worthwhile for larger home purchases.</p>
            <p><strong>Check Clearance:</strong> Clearance can offer lower prices on selected furniture, décor, bedding, lighting, and other products.</p>
            <p><strong>Look for Category-Specific Deals:</strong> Wayfair promotions aren't always storewide. A discount on mattresses may be more useful than a general offer if you're specifically replacing your bed.</p>
            <p><strong>Compare Shipping Costs:</strong> When comparing similar products, look at the complete checkout price, including shipping and any applicable additional charges.</p>
            <p><strong>Bundle Your Home Projects:</strong> If you're furnishing multiple rooms, compare the total cost of buying several products during the same promotional period rather than purchasing items individually at different times.</p>
          </div>

          {/* How to Use a Wayfair Coupon Code */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-2">How to Use a Wayfair Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Find a Wayfair Offer — Check CouponsBit for available Wayfair coupon codes, discount codes, and promotions.",
                "Step 2: Choose Your Products — Browse furniture, mattresses, rugs, décor, appliances, lighting, outdoor products, or another category.",
                "Step 3: Review the Promotion — Read the offer's conditions carefully, including minimum spend, eligible products, exclusions, and expiration date.",
                "Step 4: Copy the Code — If the promotion requires a code, copy it before proceeding to checkout.",
                "Step 5: Add Products to Your Cart — Select your preferred size, color, configuration, quantity, and other options.",
                "Step 6: Apply the Code — Enter the Wayfair coupon code in the relevant promotional field during checkout.",
                "Step 7: Check Your Final Total — Make sure the expected discount has been applied and review shipping and other charges before completing the order.",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Wayfair Products to Explore */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Popular Wayfair Products to Explore</h3>
            <p>Wayfair can be a useful destination whether you're furnishing a new home or making smaller changes to an existing space.</p>
            <p>For living rooms, explore sofas, sectionals, accent chairs, coffee tables, TV stands, ottomans, and living room décor.</p>
            <p>For bedrooms, browse beds, bed frames, mattresses, nightstands, dressers, wardrobes, bedding, and bedroom benches.</p>
            <p>Dining spaces can be furnished with dining tables, chairs, benches, bar stools, sideboards, and dining sets.</p>
            <p>For home offices, Wayfair offers desks, office chairs, bookcases, filing cabinets, shelving, and workspace accessories.</p>
            <p>Outdoor shoppers can look at patio furniture, outdoor sectionals, dining sets, umbrellas, fire pits, outdoor rugs, and storage.</p>
            <p>You can also explore lighting, rugs, curtains, bathroom products, kitchen accessories, appliances, storage solutions, kids' furniture, nursery products, and home décor.</p>
          </div>

          {/* Shop Wayfair With CouponsBit */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Wayfair With CouponsBit</h3>
            <p>From furniture and mattresses to rugs, lighting, appliances, outdoor living, kitchen products, bathroom essentials, storage, décor, and home office furniture, Wayfair provides products for almost every room and project.</p>
            <p>Before making your next purchase, check CouponsBit for a Wayfair discount code, Wayfair coupon code, or current Wayfair promo sale. Compare available coupon offers with Way Day promotions, Black Friday deals, clearance pricing, seasonal sales, and category-specific offers to find the option that works best for your purchase.</p>
            <p>Whether you're furnishing an entire home, replacing a mattress, updating your living room, creating a home office, or simply adding a few decorative touches, checking for current Wayfair savings before checkout can help you make the most of your home-shopping budget.</p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        {/* Read More Button */}
        <button 
          onClick={() => setIsReadMore(!isReadMore)} 
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline focus:outline-none"
        >
          {isReadMore ? "Read Less" : "Read More"} 
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isReadMore && "rotate-180")} />
        </button>

        {/* FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Wayfair Discount Codes</h3>
          {[
            { q: "Where Can I Find a Wayfair Discount Code?", a: "You can check CouponsBit for available Wayfair discount codes, coupon codes, deals, and promotions before placing your order." },
            { q: "What Is a Wayfair Coupon Code?", a: "A Wayfair coupon code is a promotional code that may provide a discount or another benefit on qualifying purchases, depending on the offer's conditions." },
            { q: "Does Wayfair Always Have a Discount Code?", a: "Not necessarily. Wayfair runs different types of promotions throughout the year, and some savings are automatically applied rather than requiring a code." },
            { q: "Does Wayfair Have a Sale?", a: "Yes. Wayfair regularly runs sales and promotional events covering furniture, décor, mattresses, appliances, rugs, lighting, outdoor products, and other categories." },
            { q: "What Is Way Day?", a: "Way Day is Wayfair's major promotional shopping event, featuring offers across a broad range of home products." },
            { q: "Does Wayfair Have a Black Friday Sale?", a: "Yes. Black Friday is a major promotional period for Wayfair, with deals across multiple home categories." },
            { q: "Does Wayfair Sell Furniture?", a: "Yes. Furniture is one of Wayfair's core categories, including sofas, beds, dining furniture, desks, chairs, cabinets, storage, and outdoor furniture." },
            { q: "Does Wayfair Sell Mattresses?", a: "Yes. Wayfair offers mattresses, mattress toppers, pillows, bedding, bed frames, and other bedroom products." },
            { q: "Does Wayfair Sell Rugs?", a: "Yes. You can find area rugs, runners, outdoor rugs, washable rugs, and rugs in different sizes, patterns, and materials." },
            { q: "Does Wayfair Sell Outdoor Furniture?", a: "Yes. Outdoor products include patio seating, dining sets, loungers, umbrellas, outdoor rugs, fire pits, and storage solutions." },
            { q: "Can I Use a Wayfair Discount Code on Sale Items?", a: "That depends on the specific promotion. Some offers may exclude already-discounted merchandise or selected categories, so review the coupon terms before checkout." },
            { q: "Does Wayfair Sell Appliances?", a: "Yes. Wayfair offers various major and small appliances, including refrigerators, dishwashers, ranges, microwaves, washers, dryers, and other home appliances." },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                aria-expanded={openFaq === i}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300", openFaq === i && "bg-[#056bfa] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Section */}
      <aside className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Wayfair Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Living Room Furniture", "Sectional Sofas", "Area Rugs", "Outdoor Patio Sets", "Standing Desks", "Mattresses", "Kitchen Appliances", "Storage Cabinets"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Wayfair Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner shrink-0">W</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-1.5 normal-case">{deal.sub}</p>
                </div>
                <a 
                  href={STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Shop Wayfair: ${deal.heading}`} 
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-95 shrink-0"
                >
                  Get Deal
                </a>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>


      </main>

      <Footer />
    </div>
  );
}
