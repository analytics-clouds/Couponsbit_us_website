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
  Sandwich,
  Salad,
  Users2,
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
  { id: "d1", label: "SAVE", heading: "New Customer Offer | 20% OFF", sub: "Subway Discount Code" },
  { id: "d2", label: "SAVE", heading: "Members Offer | 20% OFF", sub: "Subway Discount Code" },
  { id: "d3", label: "SAVE", heading: "First Order Deal | 10% OFF", sub: "Subway Deal" },
  { id: "d4", label: "SAVE", heading: "In-Store Deals | SAVE $2 + BOGO", sub: "Subway Deal" },
  { id: "d5", label: "FROM", heading: "Meals Starting From $4.99", sub: "Subway Deal" },
  { id: "d6", label: "FROM", heading: "Meal of the Day | From $6.99", sub: "Subway Deal" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Up To 30% OFF", href: "/stores/doordash-promo-code" },
  { name: "Uber Eats", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp", dealText: "Up To 60% OFF", href: "/stores/uber-eats-promo-code" },
  { name: "Chewy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp", dealText: "Up To 50% OFF", href: "/stores/chewy-promo-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Verified Deals", href: "/stores/target-discount-code" },
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
];

const STORE_URL = "https://subway.in/";

export default function SubwayCouponsContent() {
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
              <span className="text-black font-extrabold">Subway</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787295215/subway-logo_eosuh6.webp" alt="Subway" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Subway</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(32.6k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Subway discount codes, promo codes, and food deals for Sep 2026. New customers and members can save 20% on eligible orders, while selected meals start at $4.99, Meal of the Day from $6.99, and bottled drinks from $2.39 at participating locations.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "8", label: "Offers" },
                    { icon: Percent, val: "1.9k", label: "Deals" },
                    { icon: Users, val: "9M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788258588/5_ljmkzz.webp" alt="Subway Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Subway Discount Codes & Offers</h2>
        </div>

        {[
          { label: "SAVE", value: "20% OFF", title: "Subway Discount Code – New Customer Offer | 20% OFF 🥪", desc: "Get 20% OFF your first order as a new Subway customer in the USA.", bullets: ["Check available offers and enjoy savings on your first Subway order.", "Try your favorite subs, sandwiches, sides and drinks at a reduced price.", "Perfect for first-time customers looking to explore the Subway menu.", "Offer availability may vary by participating location."] },
          { label: "SAVE", value: "20% OFF", title: "Subway Discount Code – Members Offer | 20% OFF 🥪", desc: "Subway Members can SAVE 20% OFF eligible orders.", bullets: ["Enjoy exclusive member savings on your favorite Subway menu items.", "Get subs, sandwiches, meals and more at special member prices.", "No coupon code is required when the offer is automatically applied to eligible members.", "Check your Subway account for available member promotions."] },
          { label: "SAVE", value: "10% OFF", title: "Subway – First Order Deal | 10% OFF 🍔", desc: "Enjoy a special 10% OFF your first order as a new customer.", bullets: ["Explore Subway's subs, sandwiches and meal options while saving on your first purchase.", "A tasty introductory deal for customers trying Subway for the first time.", "Perfect for discovering new menu favorites at a lower price.", "Offer terms and availability may vary by location."] },
          { label: "SAVE", value: "$2 + BOGO", title: "Subway – In-Store Deals | SAVE $2 + BOGO 🥪", desc: "Enjoy selected in-store Subway discounts at participating USA restaurants.", bullets: ["Save $2 OFF eligible footlong sandwiches.", "Look for Buy One, Get One Free promotions on selected menu items.", "Take advantage of combo deals for additional value.", "Available offers can vary by restaurant and location."] },
          { label: "FROM", value: "$4.99", title: "Subway – Meals Starting From $4.99 🥤", desc: "Get selected Subway meals with prices starting from $4.99.", bullets: ["Choose from affordable subs, sandwiches and meal combinations.", "Enjoy a budget-friendly Subway meal without compromising on flavor.", "Great for quick lunches, dinners and casual meals.", "Prices and menu availability vary by participating USA locations."] },
          { label: "FROM", value: "$6.99", title: "Subway – Meal of the Day | From $6.99 🌯", desc: "Enjoy Subway's Meal of the Day starting from $6.99.", bullets: ["Featured meal options can change throughout the week.", "Get a filling Subway meal at a value-focused price.", "Explore different menu favorites and daily specials.", "Deal availability and pricing may vary by location."] },
          { label: "FROM", value: "$2.39", title: "Subway – Bottled Beverages | From $2.39 🥤", desc: "Grab selected bottled beverages starting from $2.39.", bullets: ["Pair your favorite drink with a Subway sub or sandwich.", "Enjoy refreshing beverage options at an affordable price.", "A convenient add-on for lunch, dinner or a quick snack.", "Prices and beverage selection may vary by restaurant."] },
          { label: "FROM", value: "$6.99", title: "Subway – Steak Philly Combo | From $6.99 🥩", desc: "Enjoy the Steak Philly Combo starting from $6.99 at participating locations.", bullets: ["Get a hearty steak sandwich as part of a value-focused combo.", "Perfect for a satisfying lunch or dinner in the USA.", "Pair your meal with a drink and other available sides.", "Pricing and availability may vary by participating Subway restaurant."] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                {/* Left Blue Badge */}
                <div className="relative w-[110px] sm:w-[150px] bg-[#056bfa] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-2">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-[11px] font-bold text-white leading-tight">{c.label}</p>
                    <div className="text-sm sm:text-2xl font-black text-white leading-none mt-2 whitespace-nowrap">{c.value}</div>
                  </div>
                </div>

                {/* Content */}
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Subway: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">What Is a Subway Discount Code?</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            A Subway discount code is a promotional code that can provide a discount or special offer on an eligible order.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            The exact conditions depend on the promotion. Some offers may apply only to particular sandwiches, sizes, meal combinations, ordering channels, or participating restaurants.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Before using a code, review the terms to confirm that your order qualifies.
          </p>
          <h3 className="text-black font-black text-lg mb-6">What Is a Subway Coupon Code?</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            A Subway coupon code is another common term used for a promotional code or digital offer.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Subway promotions can appear in several forms. You may find a percentage discount, a fixed-price meal, a buy-more-save-more promotion, a discounted Footlong, or another limited-time offer.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Some offers may not require a code at all and can be automatically applied when you order through an eligible channel.
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
              { icon: Salad, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
              { icon: Users2, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
          Subway Discount Code, Coupon Code & Deals
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
            New Customer Offer
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Save 20% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            New Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Valid on first order; USA locations
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Subs, sandwiches, sides &amp; drinks
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Members Exclusive Deal
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Save 20% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Subway Members
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Auto-applied at checkout for eligible accounts
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Eligible Subway menu items
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            First Order Introductory Deal
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Save 10% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            New Customers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Valid on introductory orders
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Subs, sandwiches &amp; meal purchases
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            In-Store Specials &amp; BOGO
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Save $2 + BOGO
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Participating USA in-store restaurants
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Footlong sandwiches &amp; select combos
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Subway Meals Deal
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $4.99
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Budget meal combinations
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Selected subs, sandwiches &amp; sides
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Meal of the Day
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $6.99
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Featured specials change daily
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Daily rotating meal options
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Bottled Beverages
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $2.39
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Add-on pricing at participating stores
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Selected bottled drink options
          </td>
        </tr>
        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Steak Philly Combo
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $6.99
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Value meal combo pricing
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Steak Philly sandwich with drink &amp; side
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        {/* Collapsible Content Area */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          
          {/* Intro Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Find a Subway Discount Code for Your Next Meal</h3>
            <p>
              Looking for a Subway discount code before ordering your next meal? Subway is a popular sandwich restaurant known for customizable subs, wraps, salads, sides, drinks, and meal combinations. Whether you're grabbing a quick lunch, ordering dinner for the family, or looking for a convenient meal on the go, Subway gives customers plenty of ways to build an order around their preferences.
            </p>
            <p>
              Before checking out, it's worth looking for a Subway coupon code, promo code, meal deal, or limited-time offer. Subway frequently promotes different combinations and savings opportunities through its online ordering channels, app, loyalty program, and participating restaurants.
            </p>
            <p>
              At CouponsBit, you can check available Subway offers before ordering and compare promotions to find an option that suits your meal.
            </p>
          </div>

          {/* Why Choose Subway? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose Subway?</h3>
            <p>
              Subway is best known for made-to-order sandwiches, allowing customers to choose their bread, fillings, vegetables, sauces, and other toppings.
            </p>
            <p>The menu can also include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Footlong sandwiches</li>
              <li>6-inch sandwiches</li>
              <li>Wraps</li>
              <li>Salads</li>
              <li>Breakfast items at participating locations</li>
              <li>Cookies</li>
              <li>Chips</li>
              <li>Drinks</li>
              <li>Meal combinations</li>
              <li>Snacks and sides</li>
              <li>Catering options</li>
            </ul>
            <p>
              Because Subway restaurants can have location-specific menus and promotions, available products and offers may differ depending on where you order.
            </p>
          </div>

          {/* Subway Sandwiches */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Subway Sandwiches</h3>
            <p>
              Sandwiches remain at the center of the Subway menu. Customers can select a pre-designed sandwich or customize their order with preferred ingredients.
            </p>
            <p><strong>Classic Subs:</strong> Subway offers a range of familiar sandwich combinations featuring different meats, cheeses, vegetables, and sauces. Popular choices can include turkey, ham, roast beef, chicken, steak, tuna, and other selections depending on the local menu.</p>
            <p><strong>Chicken Sandwiches:</strong> Chicken-based subs provide options for customers who prefer poultry. Depending on the current menu, choices can include grilled or seasoned chicken paired with vegetables, cheese, sauces, and other toppings.</p>
            <p><strong>Steak Subs:</strong> Steak sandwiches are another option for customers looking for a heartier meal. They can be customized with cheese, vegetables, sauces, and other additions.</p>
            <p><strong>Turkey Sandwiches:</strong> Turkey subs are a popular choice for a lighter-style sandwich, with plenty of customization options.</p>
            <p><strong>Veggie Options:</strong> Customers looking for meat-free meals can choose vegetable-focused sandwiches and add their preferred toppings and sauces.</p>
          </div>

          <div className="space-y-6">
  {/* Customize Your Subway Sandwich */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Customize Your Subway Sandwich</h3>
    <p>One of Subway's biggest attractions is customization.</p>
    <p>Depending on the location and current menu, you can select:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Bread</li>
      <li>Protein</li>
      <li>Cheese</li>
      <li>Lettuce</li>
      <li>Tomatoes</li>
      <li>Onions</li>
      <li>Cucumbers</li>
      <li>Peppers</li>
      <li>Pickles</li>
      <li>Olives</li>
      <li>Jalapeños</li>
      <li>Sauces</li>
      <li>Seasonings</li>
    </ul>
    <p>
      This makes it possible to order the same basic sandwich in completely different ways.
    </p>
    <p>You can also choose between different sizes and formats where available.</p>
  </div>

  {/* Subway Footlong Subs */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Subway Footlong Subs</h3>
    <p>
      The Subway Footlong is one of the restaurant's most recognizable menu options.
    </p>
    <p>
      A Footlong can be useful when you want a larger sandwich or want to save part of your meal for later, depending on your preferences and food-safety considerations.
    </p>
    <p>
      Footlong promotions are also commonly associated with Subway's promotional campaigns, so customers searching for a Subway coupon code may want to check whether current offers apply to Footlong orders.
    </p>
  </div>

  {/* Subway 6-Inch Subs */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Subway 6-Inch Subs</h3>
    <p>The 6-inch format provides a smaller alternative to a Footlong.</p>
    <p>It can work well for:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Quick lunches</li>
      <li>Smaller appetites</li>
      <li>Kids and families</li>
      <li>Pairing with a side</li>
      <li>Trying a new sandwich</li>
    </ul>
    <p>Availability and menu combinations can vary by location.</p>
  </div>

  {/* Subway Wraps */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Subway Wraps</h3>
    <p>
      For customers who prefer a tortilla-style meal instead of traditional bread, Subway offers wraps at participating locations.
    </p>
    <p>
      Wraps can feature many of the same proteins, vegetables, cheeses, and sauces available for sandwiches.
    </p>
    <p>You can customize the fillings to create a meal that matches your preferences.</p>
  </div>

  {/* Subway Salads */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Subway Salads</h3>
    <p>
      Subway salads offer another way to enjoy many of the restaurant's ingredients without ordering a traditional sub.
    </p>
    <p>
      Depending on the current menu, you can select a protein and combine it with vegetables, cheese, dressings, and other toppings.
    </p>
    <p>
      Salads can be useful for customers who want a different format while still enjoying Subway's customizable ingredients.
    </p>
  </div>

  {/* Subway Breakfast */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Subway Breakfast</h3>
    <p>
      Some Subway restaurants offer breakfast menus, although availability can depend on location.
    </p>
    <p>
      Breakfast options can include egg-based sandwiches and combinations featuring meats, cheese, and other breakfast ingredients.
    </p>
    <p>
      If you're ordering in the morning, check your local restaurant's menu to see which breakfast products are available.
    </p>
  </div>

  {/* Subway Sides and Snacks */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Subway Sides and Snacks</h3>
    <p>
      A sandwich doesn't have to be the entire order. Subway also offers sides and snacks that can complement a meal.
    </p>
    <p>Depending on the restaurant, options can include:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Potato chips</li>
      <li>Cookies</li>
      <li>Other snack items</li>
      <li>Drinks</li>
    </ul>
    <p>
      Combining a sub with a side and beverage can also make it easier to create a complete meal.
    </p>
  </div>

  {/* Subway Cookies */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Subway Cookies</h3>
    <p>Subway cookies are a popular addition to many orders.</p>
    <p>
      Cookie flavors and availability can change, but the menu has traditionally included varieties featuring chocolate chips, oatmeal, white chocolate, and other ingredients.
    </p>
    <p>
      If you're looking for a sweet treat after your sandwich, check the current cookie selection at your local Subway.
    </p>
  </div>

  {/* Subway Drinks */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Subway Drinks</h3>
    <p>
      Customers can pair their meals with soft drinks and other beverages available at participating restaurants.
    </p>
    <p>Drink choices, sizes, and availability can vary by location.</p>
  </div>

  {/* Subway Meal Deals */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Subway Meal Deals</h3>
    <p>A Subway meal deal can be useful when you want more than a sandwich.</p>
    <p>
      Depending on the current promotion, a meal combination may include a sandwich with a drink and side.
    </p>
    <p>
      Meal deals can sometimes provide better overall value than ordering each item separately, so compare the available combinations before completing your order.
    </p>
  </div>

  {/* Subway Catering */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Subway Catering</h3>
    <p>Subway can also be an option when you're ordering food for a group.</p>
    <p>
      Catering availability depends on the restaurant and local menu. Options may include sandwich platters, boxed meals, giant subs, cookies, drinks, and other group-order products.
    </p>
    <p>Subway catering can be useful for:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Office lunches</li>
      <li>Birthday gatherings</li>
      <li>School events</li>
      <li>Family occasions</li>
      <li>Meetings</li>
      <li>Parties</li>
      <li>Group lunches</li>
    </ul>
    <p>
      When ordering for an event, allow enough time for preparation and confirm availability with the participating restaurant.
    </p>
  </div>
</div>

          {/* Subway Promo Codes and Digital Offers */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Subway Promo Codes and Digital Offers</h3>
            <p>
              Customers searching for a Subway promo code should consider more than traditional coupon codes.
            </p>
            <p>Promotional savings may be connected to:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Online ordering</li>
              <li>The Subway app</li>
              <li>Digital coupons</li>
              <li>Loyalty rewards</li>
              <li>Limited-time menu campaigns</li>
              <li>Meal bundles</li>
              <li>Participating restaurants</li>
              <li>Promotional events</li>
            </ul>
            <p>
              Since terms can change, check the details associated with the promotion before ordering.
            </p>
          </div>

          {/* What Types of Subway Sales and Promotions Are Available? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">What Types of Subway Sales and Promotions Are Available?</h3>
            <p>Subway promotions can change regularly, and individual restaurants may participate in different offers.</p>
            <p><strong>Footlong Promotions:</strong> Footlongs are frequently featured in Subway promotional campaigns. These offers can reduce the cost of selected Footlong sandwiches or create special pricing when ordering qualifying products.</p>
            <p><strong>Meal Deals:</strong> Meal combinations can bundle sandwiches with sides and drinks.</p>
            <p><strong>Buy-One Promotions:</strong> Some campaigns may offer a second qualifying item at a reduced price or provide another incentive when purchasing multiple products.</p>
            <p><strong>Limited-Time Offers:</strong> Subway regularly introduces temporary menu items and promotions. These can provide an opportunity to try something new while taking advantage of a promotional price.</p>
            <p><strong>Digital Coupons:</strong> Digital offers may be available through Subway's online ordering experience or app.</p>
            <p><strong>Loyalty Offers:</strong> Subway's loyalty program can provide rewards and promotional benefits to eligible members. Terms and rewards can change over time.</p>
            <p><strong>Seasonal Promotions:</strong> Restaurant promotions may appear around major holidays, sporting events, or other seasonal shopping periods.</p>
            <p><strong>Catering Offers:</strong> Group orders may occasionally qualify for promotional pricing or special catering offers.</p>
          </div>

          {/* How to Save More at Subway */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Save More at Subway</h3>
            <p><strong>Check CouponsBit Before Ordering:</strong> Before placing your order, check CouponsBit for a current Subway discount code, coupon, or promotional offer.</p>
            <p><strong>Compare Meal Combinations:</strong> If you're ordering a sandwich, drink, and side, compare the available meal combinations against ordering the products individually.</p>
            <p><strong>Look for Footlong Offers:</strong> If you're planning to order a Footlong, check whether there is a current Footlong promotion.</p>
            <p><strong>Check the Subway App:</strong> Digital promotions and loyalty-related offers may be available through Subway's official ordering channels.</p>
            <p><strong>Consider Ordering for a Group:</strong> If you're feeding several people, compare individual meals with available group or catering options.</p>
            <p><strong>Check Participating Locations:</strong> Restaurant-level promotions can vary. Make sure the offer you're viewing applies to the location where you intend to order.</p>
          </div>

          {/* How to Use a Subway Coupon Code */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-2">How to Use a Subway Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Find a Subway Offer — Start by checking CouponsBit for available Subway discount codes, coupons, and promotions.",
                "Step 2: Select Your Restaurant — Choose the Subway location where you want to place your order.",
                "Step 3: Choose Your Meal — Browse sandwiches, Footlongs, wraps, salads, sides, drinks, or other available products.",
                "Step 4: Check the Promotion Terms — Review any requirements relating to minimum orders, eligible products, participating restaurants, ordering channels, or expiration dates.",
                "Step 5: Add Your Items — Customize your sandwich or meal according to your preferences and add the qualifying products to your order.",
                "Step 6: Apply the Code — If the promotion requires a coupon or promo code, enter it during the applicable stage of checkout.",
                "Step 7: Confirm Your Savings — Review your order summary and make sure the expected discount or promotional price has been applied before completing the purchase.",
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

          {/* Popular Subway Orders to Explore */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Popular Subway Orders to Explore</h3>
            <p>Subway's menu gives customers several ways to create a meal depending on what they're looking for.</p>
            <p>For a classic sandwich meal, you might choose a Footlong or 6-inch sub with a drink and chips.</p>
            <p>If you prefer a different format, a Subway wrap or salad can provide an alternative to traditional bread.</p>
            <p>For a quick snack, Subway cookies and drinks can be added to an existing order.</p>
            <p>For groups, Subway catering and sandwich platters can be worth considering instead of ordering individual meals separately.</p>
            <p>And if you're looking for the best value, compare the current Subway coupon code, meal deal, Footlong promotion, and digital offers before checkout.</p>
          </div>

          {/* Order Subway With CouponsBit */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Order Subway With CouponsBit</h3>
            <p>Whether you're looking for a Subway Footlong, 6-inch sandwich, wrap, salad, cookie, drink, meal combination, or catering option, checking available promotions before ordering can help you find a better deal.</p>
            <p>Before your next Subway order, visit CouponsBit to look for a Subway discount code, Subway coupon code, promo code, Footlong offer, meal deal, or other current promotion.</p>
            <p>Compare the available offers with the menu at your participating restaurant, check the terms, and make sure the promotion applies to your order before completing checkout. This simple step can help you make the most of your Subway budget while enjoying a meal customized to your preferences.</p>
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Subway Discount Codes</h3>
          {[
            { q: "Where Can I Find a Subway Discount Code?", a: "You can check CouponsBit for available Subway discount codes, coupons, deals, and promotional offers before placing your order." },
            { q: "What Is a Subway Coupon Code?", a: "A Subway coupon code is a promotional code that may provide a discount or special offer on qualifying products, subject to the promotion's terms." },
            { q: "Does Subway Always Have a Discount Code?", a: "No. Subway promotions change regularly, and some offers may be available as digital promotions, meal deals, loyalty rewards, or automatically applied discounts instead of traditional coupon codes." },
            { q: "Does Subway Have Footlong Deals?", a: "Subway frequently features promotions involving Footlong sandwiches, although the exact offer, price, participating locations, and qualifying products can change." },
            { q: "Does Subway Have Meal Deals?", a: "Yes. Subway offers meal combinations and promotional bundles at participating locations. The exact contents and terms vary." },
            { q: "Can I Use a Subway Coupon Code Online?", a: "Some Subway promotions may be available through online ordering, while others may have restrictions. Check the individual offer's terms before using it." },
            { q: "Can I Use Subway Coupons in the App?", a: "Eligible digital promotions may be available through Subway's app or online ordering system. Availability can depend on the specific offer and restaurant." },
            { q: "Does Subway Have a Loyalty Program?", a: "Subway has a loyalty program that can provide rewards and member offers. Program benefits and conditions may change, so check the current terms." },
            { q: "Does Subway Offer Catering?", a: "Yes. Participating Subway locations offer catering options for groups and events, although available products and ordering requirements vary by restaurant." },
            { q: "Does Subway Have Vegetarian Options?", a: "Subway offers vegetable-focused menu options, and customers can customize many sandwiches and salads with available vegetables, sauces, and other ingredients." },
            { q: "Can I Customize My Subway Sandwich?", a: "Yes. Customization is one of Subway's key features. Depending on the location, you can select bread, protein, cheese, vegetables, sauces, and other toppings." },
            { q: "Can I Use a Subway Discount Code on a Meal Deal?", a: "That depends on the promotion. Some coupons may apply to specific products or orders while others may exclude promotional bundles or require particular conditions." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Subway Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Footlong Subs", "Meal Deals", "Chicken Subs", "Veggie Delite", "Breakfast Combos", "Subway App Offers", "Catering Platters"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Subway Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner shrink-0">S</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-1.5 normal-case">{deal.sub}</p>
                </div>
                <a 
                  href="https://www.subway.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Order Subway: ${deal.heading}`} 
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
