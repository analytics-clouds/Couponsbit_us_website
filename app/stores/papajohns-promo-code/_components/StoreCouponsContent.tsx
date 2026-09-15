"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent,
  Users,
  BadgeCheck, UtensilsCrossed, DollarSign, Receipt,
  ExternalLink,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Pizza,
  Truck,
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
  { id: "d1", label: "DEAL", heading: "Build Your Own Pizza From $9.99", sub: "Latest Deals" },
  { id: "d2", label: "DEAL", heading: "Grand Papa Pizza From $14.99", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "$50 Cashback", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Buy 2 Pizzas for $235 Each", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Pizza, Breadsticks & Pepsi for $399", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Little Caesars", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/little-ceaser-pizza_mbcw0k.webp", dealText: "Hot-N-Ready $6.49", href: "/stores/little-caesars-promo-code" },
  { name: "Subway", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295215/subway-logo_eosuh6.webp", dealText: "Buy One Get One Free", href: "/stores/subway-discount-code" },
  { name: "Burger King", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/burger-king-logo_m4nwmx.webp", dealText: "Up To 50% OFF", href: "/stores/burger-king-promo-code" },
  { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Free Delivery", href: "/stores/doordash-promo-code" },
  { name: "Uber Eats", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp", dealText: "40% OFF First Order", href: "/stores/uber-eats-promo-code" },
  { name: "Kroger Digital", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/kroger-logo_berwr1.webp", dealText: "Up To 30% OFF", href: "/stores/kroger-discount-code" },
];

const STORE_URL = "https://www.papajohns.com";

export default function PapajohnsCouponsContent() {
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
              <span className="text-black font-extrabold">Papa Johns</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788868873/papa-johns_zqsir3.webp" alt="Papa Johns" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Papa Johns</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.2</span>
                      <span className="text-gray-600 font-bold text-sm">(15.8k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                     Discover verified Papa Johns promo codes and Papa Johns discount codes at Maxiku Offers. Order Build Your Own Pizza from $9.99, get up to $50 cashback on eligible payments, enjoy combo meals from $399, and save more on pizzas, sides, and family meal deals.
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
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "700+", label: "Deals" },
                    { icon: Users, val: "3M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788868873/papa-johns_zqsir3.webp" alt="Papa Johns Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Papa Johns Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "DEAL", value: "$9.99", title: "Papa Johns Promo Code – Build Your Own Pizza From $9.99", desc: "Create your own pizza and get it at a starting price of just $9.99.", bullets: ["Customize your pizza with your favorite toppings and make it exactly how you like it.", "Choose from available toppings to create a fresh, personalized pizza.", "Check the latest Papa Johns deals before ordering to find additional savings."] },
                  { label: "DEAL", value: "$14.99", title: "Papa Johns Offers – Grand Papa Pizza From $14.99", desc: "Get the Grand Papa Pizza starting at just $14.99 with this available offer.", bullets: ["Enjoy a hearty pizza option at a great starting price for your next meal.", "The offer is available to all customers.", "Browse current Papa Johns offers to find more pizza savings."] },
                  { label: "DEAL", value: "$50 CASHBACK", title: "Papa Johns Discount – $50 Cashback", desc: "Get up to $50 cashback when you pay for your eligible Papa Johns order with a qualifying digital wallet.", bullets: ["Enjoy 20% cashback on qualifying purchases, subject to the applicable cashback limit.", "The cashback offer is available once per customer and is credited to the eligible wallet after the purchase.", "Check the promotion terms before checkout to make sure your order qualifies."] },
                  { label: "DEAL", value: "$235 EACH", title: "Papa Johns Deals – Buy 2 Pizzas for $235 Each", desc: "Get two medium or large pizzas for $235 each with this weekend pizza deal.", bullets: ["Add $70 extra for non-vegetarian pizzas when applicable.", "Choose from available pizza options and order online for delivery or pickup.", "No Papa Johns Promo Code is required to take advantage of this offer."] },
                  { label: "DEAL", value: "$399", title: "Papa Johns Offers – Pizza, Breadsticks & Pepsi for $399", desc: "Get a medium pizza, Garlic Parmesan Breadsticks, and Pepsi for just $399.", bullets: ["This combo is available on select pizzas and participating menu options.", "Enjoy a complete pizza meal at a value-focused price when the offer applies.", "Check the latest Papa Johns deals for availability and menu restrictions."] },
                  { label: "DEAL", value: "$555", title: "Papa Johns Deals – Meal for Three for $555", desc: "Get a meal for three for just $555 with this available combo offer.", bullets: ["Enjoy a convenient meal option when ordering for family or a group.", "This is a limited-time offer, so check availability before placing your order.", "Browse current Papa Johns offers for more pizza and combo savings."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Papa Johns: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Papa Johns?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Papa Johns is a well-known American pizza restaurant chain specializing in pizza, sides, desserts, and other menu items. The brand was founded in 1984 in Jeffersonville, Indiana, and has grown into a global pizza business with restaurants and delivery operations in numerous markets.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Papa Johns is particularly recognized for its pizza menu, which includes a variety of crust styles, toppings, specialty pizzas, and customizable options. Customers can also choose from sides such as breadsticks, wings, cheesesticks, and other items, depending on the location.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand's ordering experience is designed around convenience. Customers can order through Papa Johns' online platform or other available ordering channels and choose delivery or pickup where available.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Papa Johns also regularly runs promotional campaigns and meal deals, making it useful to check the latest offers before placing an order.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Whether you're ordering a quick dinner, planning a family pizza night, or looking for food for a larger gathering, Papa Johns offers a menu built around convenient, customizable meals.

                  </p>
                  
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Pizza, name: "Food & Dining", count: "700+", color: "text-red-500", href: "/categories/food" },
                        { icon: Truck, name: "Delivery", count: "300+", color: "text-blue-500", href: "/categories/food" },
                        { icon: ShoppingBag, name: "Combo Deals", count: "150+", color: "text-orange-500", href: "/categories/food" },
                        { icon: Sparkles, name: "Rewards Programs", count: "90+", color: "text-purple-500", href: "/categories/food" },
                        { icon: Search, name: "Online Ordering", count: "200+", color: "text-green-500", href: "/categories/food" },
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
    How to Find Better Papa Johns Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit First",
        sub: "Before ordering, check CouponsBit for the latest Papa Johns promo code, coupon codes, discount offers, vouchers, and pizza deals.",
      },
      {
        icon: UtensilsCrossed,
        title: "Compare Deals With Individual Items",
        sub: "A meal bundle isn't automatically the cheapest option. Compare the deal with the cost of ordering individual items to see which provides better value for your specific order.",
      },
      {
        icon: Users,
        title: "Look at Family and Group Offers",
        sub: "If you're feeding several people, look for promotions designed around multiple pizzas, sides, or complete meals.",
      },
      {
        icon: Truck,
        title: "Check Delivery and Pickup",
        sub: "Compare both options when they're available. Depending on the current promotion and your location, one may offer better overall value.",
      },
      {
        icon: Pizza,
        title: "Don't Forget the Sides",
        sub: "If you're already planning to order breadsticks, wings, or other sides, check whether a combination deal could save more than buying them individually.",
      },
      {
        icon: DollarSign,
        title: "Check the Minimum Order",
        sub: "Some promotional offers require a minimum purchase amount. Make sure your order qualifies before expecting the discount.",
      },
      {
        icon: Receipt,
        title: "Review the Final Total",
        sub: "Always check the complete checkout amount, including applicable fees and charges, before placing your order.",
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
          Papa Johns Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border border-gray-200 bg-white shadow-sm">
  <table className="w-full min-w-[850px] border-collapse text-left">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Offer
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Discount / Price
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Eligibility
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Key Conditions
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Applicable On
        </th>
      </tr>
    </thead>
    <tbody className="text-[14px] font-bold text-gray-600">
      {[
        {
          title: "Papa Johns Promo Code – Build Your Own Pizza From $9.99",
          discount: "Starting at $9.99",
          eligibility: "All Users",
          conditions: "Customize with your favorite toppings at starting price",
          applicableOn: "Build Your Own Pizza"
        },
        {
          title: "Papa Johns Offers – Grand Papa Pizza From $14.99",
          discount: "From $14.99",
          eligibility: "All Customers",
          conditions: "Hearty pizza option available for online order or pickup",
          applicableOn: "Grand Papa Pizza"
        },
        {
          title: "Papa Johns Discount – $50 Cashback",
          discount: "20% Cashback (Up to $50)",
          eligibility: "Qualifying Digital Wallet Users",
          conditions: "Valid once per customer; credited after purchase",
          applicableOn: "Digital Wallet Orders"
        },
        {
          title: "Papa Johns Deals – Buy 2 Pizzas for $235 Each",
          discount: "$235 / Pizza",
          eligibility: "All Users",
          conditions: "Weekend deal on medium/large; +$70 for non-veg. No code needed",
          applicableOn: "2 Medium or Large Pizzas"
        },
        {
          title: "Papa Johns Offers – Pizza, Breadsticks & Pepsi for $399",
          discount: "Combo at $399",
          eligibility: "All Users",
          conditions: "Includes medium pizza, Garlic Parmesan Breadsticks & Pepsi",
          applicableOn: "Meal Combo"
        },
        {
          title: "Papa Johns Deals – Meal for Three for $555",
          discount: "Meal for 3 at $555",
          eligibility: "All Users",
          conditions: "Limited-time group combo offer; check menu availability",
          applicableOn: "Group Meal Deal"
        }
      ].map((item, index) => (
        <tr
          key={index}
          className="border-b border-gray-200 transition-colors hover:bg-gray-50/50 last:border-b-0"
        >
          <td className="max-w-[220px] p-5 align-middle font-black text-black">
            {item.title}
          </td>
          <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
            {item.discount}
          </td>
          <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
            {item.eligibility}
          </td>
          <td className="max-w-[220px] p-5 align-middle text-gray-500 font-medium">
            {item.conditions}
          </td>
          <td className="max-w-[180px] p-5 align-middle text-gray-500">
            {item.applicableOn}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Pizza night gets even better when you can enjoy your favorite slices without stretching your food budget. Whether you're ordering a classic pizza for yourself, feeding the family, or getting a few sides for a game-night gathering, Papa Johns gives customers plenty of ways to build a meal around their favorite flavors.
          </p>
          <p>
            Before placing your next order, checking for a Papa Johns promo code on CouponsBit can help you look for available savings. Along with promotional codes, you can find Papa Johns coupon codes, discount offers, vouchers, pizza deals, delivery promotions, and other opportunities to save on your order.
          </p>
          <p>
            Promotions can change regularly and may come with specific conditions, so always check the terms of an offer before applying it to your order.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a Papa Johns Promo Code</h3>
    <p>A Papa Johns promo code can help you save on an eligible order when the promotion's requirements are met.</p>
    <p>If you're already planning a pizza order, check CouponsBit before heading to checkout. You may find a promotional code that applies to your purchase or discover another deal that offers better value.</p>
    <p>Papa Johns promotions can differ based on the offer, location, menu items, order type, and promotional period. Some deals may require you to purchase specific menu combinations, while others may have minimum order requirements or restrictions.</p>
    <p>Before applying a code, check the offer details carefully. If one promotion isn't suitable for your order, compare it with other available Papa Johns deals.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Papa Johns Coupon Code and Discount Offers</h3>
    <p>Looking for a Papa Johns coupon code is a good starting point, but pizza savings aren't limited to traditional coupons.</p>
    <p>Depending on the current promotions, you may find discounts on pizzas, combination meals, sides, delivery orders, or other qualifying purchases. Some deals may focus on specific menu items, while others can be structured around a complete meal.</p>
    <p>The best offer depends on what you're ordering.</p>
    <p>If you're getting a single pizza, a percentage-based discount may work well. For a family meal or group order, a bundle or meal promotion could potentially offer better overall value.</p>
    <p>Always compare the final order total and review the terms before completing your purchase.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Explore the Papa Johns Menu</h3>
    <p>Papa Johns gives customers plenty of choices when putting together a pizza meal. Menu availability can vary by location, but the brand offers several categories worth exploring.</p>
    <p><strong>Pizzas:</strong> Pizza is the heart of the Papa Johns menu, with choices ranging from classic favorites to specialty combinations.</p>
    <p>Depending on the location, customers can select different toppings, sauces, crust options, and sizes to create an order that suits their preferences.</p>
    <p>You can also customize your pizza by choosing your preferred combination of toppings.</p>
    <p><strong>Specialty Pizzas:</strong> If you don't want to build your pizza from scratch, specialty pizzas provide ready-made combinations featuring different meats, vegetables, cheeses, and sauces.</p>
    <p>They're especially convenient when you're ordering for several people with different preferences.</p>
    <p><strong>Papadias:</strong> For something different from a traditional pizza, Papa Johns also offers Papadias, a handheld menu option combining pizza-inspired ingredients in a folded format.</p>
    <p>They can be a convenient choice for lunch or a quick individual meal.</p>
    <p><strong>Wings:</strong> Pizza and wings are a classic combination for parties, sports nights, and casual dinners.</p>
    <p>Papa Johns offers wings in different flavors and preparations, with availability depending on the location.</p>
    <p><strong>Breadsticks and Cheesesticks:</strong> Looking for something to share alongside your pizza? Breadsticks and cheesesticks can make an easy addition to a larger order.</p>
    <p>They can also work well as appetizers or snacks for gatherings.</p>
    <p><strong>Desserts:</strong> Finish your meal with a sweet option from the available Papa Johns dessert menu. Choices can vary by location and promotional period.</p>
    <p><strong>Drinks:</strong> Depending on your location, you may also be able to add beverages to your order.</p>
    <p>When ordering for a group, adding drinks and sides can make it easier to put together a complete meal in one order.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Papa Johns Pizza Deals</h3>
    <p>Papa Johns frequently features different types of promotional offers, so it's worth checking the current deals before ordering.</p>
    <p>A pizza deal can sometimes provide better value than purchasing every item individually. This can be especially useful when ordering a combination of pizza, sides, drinks, and desserts.</p>
    <p>If you're feeding several people, compare the cost of a bundle with individual menu items and check whether a Papa Johns discount code can be applied.</p>
    <p>Remember that promotions may vary by location and can have specific eligibility requirements.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Papa Johns Delivery and Pickup</h3>
    <p>Papa Johns gives customers the option to order pizza for delivery or pickup where available.</p>
    <p>Delivery is ideal when you're staying home for movie night, hosting friends, or simply don't want to leave the house for dinner.</p>
    <p>Pickup can be useful when you're already out and want to collect your order on the way home.</p>
    <p>Before selecting an option, compare the total cost and any applicable delivery charges or promotions. The most convenient choice isn't always the same for every order.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Papa Johns Deals for Families and Groups</h3>
    <p>Pizza is naturally suited to group meals, which makes Papa Johns a convenient option for family dinners, parties, office lunches, and casual gatherings.</p>
    <p>If you're ordering for several people, start by estimating how many pizzas you'll need and whether you want to add sides, wings, drinks, or desserts.</p>
    <p>Then compare available meal deals with individual menu items.</p>
    <p>A larger order can also make certain promotions more useful, particularly when an offer has a minimum spending requirement.</p>
    <p>However, don't add food simply to qualify for a promotion. The best deal is one that saves money on food you actually intended to purchase.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Papa Johns Promotions for Major US Occasions</h3>
    <p>Pizza fits almost every celebration, which means there are plenty of opportunities throughout the year to look for Papa Johns offers.</p>
    <p><strong>Super Bowl:</strong> The Super Bowl is one of the biggest pizza-ordering occasions in the US. Pizza, wings, cheesesticks, and other shareable foods are perfect for game-day gatherings.</p>
    <p>If you're feeding a crowd, check for a Papa Johns coupon code and current pizza deals before placing your order.</p>
    <p><strong>Valentine's Day:</strong> Not every Valentine's Day celebration requires an expensive restaurant reservation. A pizza night at home can be a relaxed alternative, especially when paired with dessert and a favorite movie.</p>
    <p><strong>March Madness:</strong> College basketball fans often gather with friends to watch tournament games. Pizza, wings, breadsticks, and other shareable foods make easy game-day choices.</p>
    <p><strong>Easter:</strong> Families celebrating Easter may order food for smaller gatherings or take a break from holiday cooking.</p>
    <p><strong>Mother's Day:</strong> Whether you're ordering lunch, dinner, or a casual meal at home, Papa Johns can provide an easy option when you're celebrating with family.</p>
    <p><strong>Memorial Day:</strong> Memorial Day weekend often means gatherings, barbecues, and outdoor activities. If you're looking for an easy meal after a day outside, pizza can be a convenient choice.</p>
    <p><strong>Fourth of July:</strong> Independence Day celebrations can bring friends and family together for larger gatherings. Pizza and sides are easy to share and can complement other party foods.</p>
    <p><strong>Back-to-School Season:</strong> Once school starts, family schedules become busy again. A quick pizza dinner can be convenient on evenings when there's little time for meal preparation.</p>
    <p><strong>Halloween:</strong> Halloween is another excellent occasion for pizza. Whether you're hosting a party or need dinner before heading out for trick-or-treating, ordering ahead can make the evening easier.</p>
    <p><strong>Thanksgiving:</strong> While Thanksgiving is traditionally associated with a large home-cooked meal, pizza can be useful before the holiday, after celebrations, or when you're simply looking for a break from leftovers.</p>
    <p><strong>Black Friday:</strong> After a full day of shopping, ordering dinner can be much easier than cooking.</p>
    <p>Check CouponsBit for available Papa Johns promotions before placing your order.</p>
    <p><strong>Cyber Monday:</strong> Cyber Monday keeps many shoppers at home, making food delivery a convenient option. Check for current offers before ordering your pizza.</p>
    <p><strong>Christmas and Holiday Season:</strong> The holiday season brings family gatherings, parties, movie nights, and plenty of occasions for casual meals.</p>
    <p>If you're ordering for a group, compare current Papa Johns deals and available promotional codes before checking out.</p>
  </div>
</div>

          {/* Box Section: How to Use */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">
              How to Use a Papa Johns Promo Code
            </h3>
            <p className="text-gray-600 font-medium -mt-4 mb-4">
              If you find a Papa Johns promo code through CouponsBit, follow the instructions provided with the specific offer. A typical process may look like this:
            </p>
            <div className="space-y-6">
              {[
                "Find the Papa Johns offer you want to use.",
                "Visit the Papa Johns website or ordering platform.",
                "Enter your location if required.",
                "Browse the available menu.",
                "Select your pizzas, sides, drinks, or desserts.",
                "Add the items to your cart.",
                "Proceed to checkout.",
                "Enter the applicable promo code in the designated field.",
                "Apply the code and confirm that the discount has been reflected.",
                "Review the final order total before completing your purchase."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium italic mt-4 pt-4 border-t border-gray-100">
              If the code doesn't work, check its expiration date and requirements. Some promotions may only apply to specific menu items, order types, locations, or purchase amounts.
            </p>
          </div>

          {/* Section: Why Use */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Why Use CouponsBit for Papa Johns Offers?
            </h3>
            <p>
              Pizza is a regular part of many people's food routines, whether it's a quick weeknight dinner or a meal for a special occasion. That makes checking for savings before ordering worthwhile.
            </p>
            <p>
              CouponsBit gives customers a convenient place to search for a Papa Johns promo code and discover related coupon codes, discount offers, vouchers, pizza deals, and other promotions.
            </p>
            <p>
              Instead of using the first deal you see, compare the available options with your actual order. A discount on one pizza might work well for an individual meal, while a family deal could make more sense when you're ordering several pizzas and sides.
            </p>
            <p>
              The goal is to help you find an offer that fits what you're already planning to buy.
            </p>
          </div>

          {/* Section: Save Before Next Order */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Get a Deal Before Your Next Papa Johns Order
            </h3>
            <p>
              From a quick dinner after work to a Super Bowl party or family movie night, Papa Johns makes it easy to put together a meal centered around pizza, sides, wings, and other favorites.
            </p>
            <p>
              Because promotions can change frequently, checking for a deal before placing your order can help you make the most of your food budget.
            </p>
            <p>
              Before you check out, visit CouponsBit to find the latest Papa Johns promo code, along with coupon codes, discount offers, vouchers, pizza deals, meal promotions, and other savings opportunities. Compare the available options with your order, check the terms, and choose the deal that works best for you.
            </p>
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
            Frequently Asked Questions About Papa Johns Promo Codes
          </h3>
          {[
            { q: "Does Papa Johns offer promo codes?", a: "Yes. Papa Johns runs promotional campaigns and pizza deals that may include promotional codes, discounts, meal offers, and other savings opportunities. Availability varies." },
            { q: "Where can I find a Papa Johns promo code?", a: "You can check CouponsBit for available Papa Johns promo codes, coupon codes, discount offers, vouchers, and pizza deals before ordering." },
            { q: "How do I use a Papa Johns coupon code?", a: "Choose your food, add it to your cart, proceed to checkout, and enter the applicable coupon code in the designated promotional field. Confirm that the discount has been applied before completing your order." },
            { q: "Why isn't my Papa Johns promo code working?", a: "The code may have expired, or your order may not meet its requirements. Some offers may be restricted to particular menu items, locations, order types, or minimum purchase amounts." },
            { q: "Can I use a Papa Johns discount code on any pizza?", a: "Not necessarily. Individual promotions can have different conditions and may apply only to selected menu items or orders." },
            { q: "Does Papa Johns have family meal deals?", a: "Papa Johns regularly offers different types of pizza and meal promotions. The available deals can vary by location and promotional period." },
            { q: "Does Papa Johns offer delivery?", a: "Papa Johns offers delivery in participating locations. Availability and delivery terms can vary by restaurant." },
            { q: "Can I order Papa Johns for pickup?", a: "Yes, pickup may be available depending on your selected restaurant and location." },
            { q: "Does Papa Johns have deals during the Super Bowl?", a: "Papa Johns commonly promotes pizza and game-day offers around major sporting occasions. Check the latest available promotions before placing your order." },
            { q: "Does Papa Johns have Black Friday deals?", a: "Papa Johns may run promotions during major shopping periods, although the available offers can change. Check CouponsBit and the brand's current offers around Black Friday." },
            { q: "When is the best time to look for Papa Johns deals?", a: "Promotions can appear throughout the year. Super Bowl season, March Madness, major holidays, sporting events, and large family gatherings can all be useful times to check for pizza offers." },
            { q: "How can I save money on Papa Johns?", a: "Start by checking CouponsBit for a Papa Johns promo code, then compare it with current pizza deals, meal bundles, restaurant promotions, and delivery or pickup offers. Always consider the complete order total when deciding which option provides the best value." }
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
            Popular Papa Johns Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Papa Johns Promo Code",
              "Pizza Deals",
              "Free Delivery",
              "Papa Rewards",
              "BOGO Pizza",
              "Family Meal Offers",
              "Game Day Combos",
              "Carryout Specials"
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
            Today's Top Papa Johns Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "25% OFF ORDER", sub: "Save 25% Off Regular Priced Menu Items" },
              { heading: "BUY 1 GET 1 FREE", sub: "Special BOGO Offers On Select Days" },
              { heading: "LARGE SPECIALTY", sub: "Specialty Pizzas Starting At $14.99" },
              { heading: "PAPA REWARDS", sub: "Earn Points Toward Free Pizza On Every Order" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  P
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
                  href="https://www.papajohns.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Shop Papa Johns: ${deal.heading}`} 
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
