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
  ShieldCheck,Store, DollarSign, ListCheck, Receipt, Calendar,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Shirt,
  Truck,
  ShoppingCart,
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
  { id: "d1", label: "DEAL", heading: "Save $20 + Free Delivery", sub: "Latest Deals" },
  { id: "d2", label: "NEW", heading: "$50 Off for New Customers", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "$35 Off Your First 2 Orders", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "$50 Off Your First 3 Orders", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "$20 Off $35+ With FSA/HSA", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Kroger Digital", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/kroger-logo_berwr1.webp", dealText: "Up To 50% OFF", href: "/stores/kroger-discount-code" },
  { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Up To 30% OFF", href: "/stores/doordash-promo-code" },
  { name: "Uber Eats", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp", dealText: "Up To 60% OFF", href: "/stores/uber-eats-promo-code" },
  { name: "Subway", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295215/subway-logo_eosuh6.webp", dealText: "Up To 20% OFF", href: "/stores/subway-discount-code" },
  { name: "Little Caesars", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/little-ceaser-pizza_mbcw0k.webp", dealText: "Up To 20% OFF", href: "/stores/little-caesars-promo-code" },
  { name: "Burger King", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/burger-king-logo_m4nwmx.webp", dealText: "Up To 50% OFF", href: "/stores/burger-king-promo-code" },
];

const STORE_URL = "https://www.instacart.com";

export default function InstacartCouponsContent() {
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
              <span className="text-black font-extrabold">Instacart</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788868873/instacart-logo_yhmlhq.webp" alt="Instacart" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Instacart Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(14.6k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Instacart promo codes and Instacart discount codes at Maxiku Offers. Save $20 with FREE delivery, get $50 OFF your first order, enjoy up to $150 OFF your first three qualifying orders, and unlock extra savings on grocery delivery and everyday essentials.
                    
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "7", label: "Offers" },
                    { icon: Percent, val: "800+", label: "Deals" },
                    { icon: Users, val: "4M+", label: "Shoppers" },
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
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789559424/39_h7vlzm.webp" alt="Instacart Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Instacart Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "DEAL", value: "$20 OFF", title: "Instacart Promo Code – Save $20 + Free Delivery", desc: "Save $20 on your Instacart order and enjoy free delivery for extra grocery savings.", bullets: ["New customers can save $50 on their first order or up to $150 across their first three $75+ orders.", "Get $35 off your first two orders with free shipping on eligible purchases.", "Explore the latest Instacart offers and deals to find more ways to save on grocery delivery."] },
                  { label: "NEW", value: "$50 OFF", title: "Instacart Offers – $50 Off for New Customers", desc: "New customers can get $50 off their first Instacart order and enjoy major savings from the start.", bullets: ["This introductory Instacart deal is ideal for shoppers trying the service for the first time.", "Check the available promotion and make sure your account meets the qualifying requirements.", "Apply the eligible Instacart Promo Code at checkout when a code is required."] },
                  { label: "DEAL", value: "$35 OFF", title: "Instacart Deals – $35 Off Your First 2 Orders", desc: "Save $35 across your first two orders and get free shipping on eligible purchases.", bullets: ["This deal is a great option for new shoppers planning multiple grocery deliveries.", "Use the eligible promotion at checkout to unlock the available savings.", "Check the latest Instacart deals for qualifying requirements and expiration details."] },
                  { label: "DEAL", value: "$50 OFF", title: "Instacart Discount – $50 Off Your First 3 Orders", desc: "New users can save $50 on each of their first three orders of $75 or more.", bullets: ["Complete all three qualifying orders to save up to $150 in total.", "This Instacart discount can help reduce the cost of multiple grocery orders.", "Check the offer terms and eligibility before placing your qualifying orders."] },
                  { label: "DEAL", value: "$20 OFF", title: "Instacart Offers – $20 Off $35+ With FSA/HSA", desc: "Get $20 off qualifying purchases of $35 or more when paying with an eligible FSA or HSA card.", bullets: ["This offer is useful for shoppers purchasing eligible health and wellness products.", "Make sure your payment method and items meet the promotion requirements.", "Review the latest Instacart offers before completing your purchase."] },
                  { label: "DEAL", value: "$10 OFF", title: "Instacart Deals – $10 Off $35+ Orders", desc: "Take $10 off orders of $35 or more and lower your grocery delivery costs.", bullets: ["This Instacart deal is ideal when you're already planning a qualifying $35+ order.", "Check whether the promotion is automatically applied or requires a code at checkout.", "Browse available Instacart discounts to find more ways to save."] },
                  { label: "DEAL", value: "$10 OFF", title: "Instacart Offers – $10 Off + Free Delivery", desc: "Get $10 off your order while enjoying free delivery with this eligible offer.", bullets: ["Save on groceries while avoiding an additional delivery charge.", "Check the promotion requirements before placing your order to make sure you qualify.", "Browse the latest Instacart deals for more grocery savings."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Instacart: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                    rel="nofollow noopener noreferrer"
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Instacart?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Instacart is an online grocery technology and delivery platform that connects customers with participating grocery stores, supermarkets, retailers, and other businesses. Rather than operating as a traditional grocery store itself, Instacart allows shoppers to browse products from participating retailers, build a cart, and arrange delivery or pickup through its platform.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The service is designed around convenience. Customers can search for groceries and household essentials online, choose a participating retailer, select the products they want, and place an order without having to walk through a physical store.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Depending on the retailer and location, shoppers can find fresh produce, meat and seafood, dairy products, pantry staples, beverages, snacks, frozen foods, personal-care products, cleaning supplies, pet products, and many other everyday essentials.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Instacart also works with a broad network of retailers, which means the stores and products available to you can depend on where you live.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For busy families, professionals, students, older adults, or anyone who simply prefers online grocery shopping, Instacart can provide a convenient alternative to a traditional store visit.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Shirt, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Search, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Sparkles, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                        { icon: Truck, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
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
    How to Find Better Instacart Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Ordering",
        sub: "Before placing your grocery order, check CouponsBit for the latest Instacart promo code, coupon codes, discounts, vouchers, and other offers.",
      },
      {
        icon: Store,
        title: "Compare Retailers",
        sub: "If you have flexibility, compare the participating stores available in your area. Product prices, availability, promotions, and delivery options can differ between retailers.",
      },
      {
        icon: ShoppingBag,
        title: "Look for Product Promotions",
        sub: "You may find discounts on individual products or selected brands even when you don't have a general coupon code.",
      },
      {
        icon: Truck,
        title: "Compare Delivery and Pickup",
        sub: "If both options are available, compare the final cost of delivery and pickup before deciding which works better for your order.",
      },
      {
        icon: DollarSign,
        title: "Watch Minimum Order Requirements",
        sub: "Some promotions require you to reach a particular order value. Check the terms before adding unnecessary products just to qualify.",
      },
      {
        icon: ListCheck,
        title: "Build a Shopping List",
        sub: "A shopping list can help prevent impulse purchases. Online grocery platforms make it easy to browse thousands of products, so knowing what you actually need can keep your spending focused.",
      },
      {
        icon: Receipt,
        title: "Check the Final Checkout Total",
        sub: "A discount isn't the only factor that determines how much you save. Delivery fees, service fees, taxes, product substitutions, and other charges can affect the final amount.",
      },
      {
        icon: Calendar,
        title: "Plan Around Major Holidays",
        sub: "Super Bowl, Easter, Memorial Day, Fourth of July, back-to-school season, Halloween, Thanksgiving, Christmas, and other major occasions can mean larger grocery orders. Checking promotions ahead of these events can be worthwhile.",
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
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Instacart Promo Code, Coupon Code & Discount Offers
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
          title: "Instacart Promo Code – Save $20 + Free Delivery",
          discount: "$20 OFF + Free Delivery",
          eligibility: "New Customers",
          conditions: "Save up to $150 across first three $75+ orders or $35 off first two orders",
          applicableOn: "Grocery Delivery"
        },
        {
          title: "Instacart Offers – $50 Off for New Customers",
          discount: "$50 OFF",
          eligibility: "New Customers",
          conditions: "Introductory deal on first order; apply promo code at checkout if required",
          applicableOn: "First Order"
        },
        {
          title: "Instacart Deals – $35 Off Your First 2 Orders",
          discount: "$35 OFF + Free Shipping",
          eligibility: "New Shoppers",
          conditions: "Savings split across first 2 orders with free shipping on eligible purchases",
          applicableOn: "First 2 Orders"
        },
        {
          title: "Instacart Discount – $50 Off Your First 3 Orders",
          discount: "Up to $150 OFF ($50/order)",
          eligibility: "New Users",
          conditions: "Min. order value $75 per order across first 3 qualifying orders",
          applicableOn: "First 3 Orders ($75+)"
        },
        {
          title: "Instacart Offers – $20 Off $35+ With FSA/HSA",
          discount: "$20 OFF",
          eligibility: "FSA/HSA Cardholders",
          conditions: "Min. order value $35 on qualifying health & wellness products",
          applicableOn: "FSA/HSA Eligible Items"
        },
        {
          title: "Instacart Deals – $10 Off $35+ Orders",
          discount: "$10 OFF",
          eligibility: "All Users",
          conditions: "Min. order value $35; check if auto-applied or code required at checkout",
          applicableOn: "Orders $35+"
        },
        {
          title: "Instacart Offers – $10 Off + Free Delivery",
          discount: "$10 OFF + Free Delivery",
          eligibility: "Eligible Users",
          conditions: "Waives delivery fee while giving $10 off qualifying grocery orders",
          applicableOn: "Grocery Orders"
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
            Grocery shopping is one of those weekly tasks that has to get done, but that doesn't mean you always have to spend more than necessary. Instacart makes it possible to shop for groceries and everyday essentials from participating retailers through one online platform, giving customers a convenient way to order what they need for delivery or pickup.
          </p>
          <p>
            If you're planning your next grocery order, checking for an Instacart promo code before checkout can be a simple way to look for savings. CouponsBit helps shoppers find Instacart coupon codes, discount offers, vouchers, delivery promotions, grocery deals, and other opportunities to potentially lower the cost of their orders.
          </p>
          <p>
            Whether you're stocking the pantry, preparing for a family gathering, ordering household essentials, or simply trying to avoid a trip to the store, checking available offers before you pay can make grocery shopping a little easier on your budget.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Find an Instacart Promo Code</h3>
    <p>An Instacart promo code may provide savings on an eligible order, depending on the promotion and its terms. Offers can vary based on factors such as the customer, retailer, location, order value, product eligibility, or promotional period.</p>
    <p>Before placing your order, check CouponsBit for an available Instacart promo code. If you find one that fits your purchase, review the conditions carefully before applying it.</p>
    <p>Some offers may require a minimum order amount, while others may be limited to new customers, selected retailers, specific products, or particular ordering periods.</p>
    <p>If a promotional code doesn't apply to your order, don't assume there are no other ways to save. Instacart may also feature retailer promotions, product discounts, free-delivery opportunities, membership benefits, and other offers.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Instacart Coupon Code and Discount Offers</h3>
    <p>Looking for an Instacart coupon code can be a good starting point, but smart grocery savings often involve comparing several types of promotions.</p>
    <p>Depending on what's available, you may come across a percentage discount, fixed-value offer, product-specific promotion, free-delivery opportunity, retailer deal, or other incentive.</p>
    <p>For example, a percentage-based promotion may be more useful for a larger grocery order, while a product-specific deal could be better if you're already planning to buy that particular item.</p>
    <p>The final cost matters more than the headline discount. Before placing your order, check the eligible items, delivery fees, service fees, taxes, minimum spending requirements, and any other applicable charges.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Groceries and Everyday Essentials on Instacart</h3>
    <p>Instacart gives customers access to a wide range of grocery and everyday categories through participating retailers.</p>
    <p><strong>Fresh Produce:</strong> Stock up on fruits and vegetables for weekly meals, packed lunches, snacks, smoothies, or special occasions.</p>
    <p>Depending on the retailer, you can shop for fresh produce such as apples, bananas, berries, leafy greens, potatoes, tomatoes, onions, peppers, and seasonal items.</p>
    <p><strong>Meat and Seafood:</strong> Planning dinner for the family or preparing meals for the week? Participating retailers may offer meat, poultry, seafood, deli products, and other protein options.</p>
    <p>Availability varies by store and location, so check individual product listings before ordering.</p>
    <p><strong>Dairy and Eggs:</strong> Milk, cheese, yogurt, butter, eggs, and other refrigerated staples are among the products shoppers may order through participating grocery retailers.</p>
    <p><strong>Pantry Staples:</strong> Keep your kitchen stocked with essentials such as rice, pasta, flour, cereal, canned foods, sauces, spices, baking supplies, snacks, and other shelf-stable products.</p>
    <p><strong>Frozen Foods:</strong> Frozen vegetables, pizzas, prepared meals, desserts, ice cream, and other frozen products can make convenient additions to your grocery order.</p>
    <p><strong>Snacks and Beverages:</strong> Whether you're preparing lunchboxes, stocking the pantry, or getting ready for a gathering, Instacart can help you browse snacks and beverages from participating retailers.</p>
    <p><strong>Household Essentials:</strong> Grocery shopping isn't just about food. Depending on the retailer, you can also order paper products, cleaning supplies, laundry products, storage items, kitchen essentials, and other household necessities.</p>
    <p><strong>Personal Care:</strong> Customers can find products such as shampoo, soap, oral-care products, skincare items, shaving products, and other personal-care essentials.</p>
    <p><strong>Baby Products:</strong> Participating retailers may also offer diapers, wipes, baby food, formula, feeding accessories, and other baby essentials.</p>
    <p><strong>Pet Supplies:</strong> Pet owners can browse food, treats, toys, grooming products, cleaning supplies, and other pet essentials from participating stores.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Instacart Delivery and Pickup</h3>
    <p>One of Instacart's biggest advantages is flexibility. Depending on the store and your location, you may be able to choose between delivery and pickup.</p>
    <p>Delivery is convenient when you don't have time to visit a store or simply prefer having groceries brought to your door.</p>
    <p>Pickup can be useful if you're already out running errands and want your order prepared before you arrive.</p>
    <p>When comparing the two options, consider the complete cost of your order. A delivery promotion may make one option more attractive, while pickup may be more economical for another order.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Instacart+ and Membership Savings</h3>
    <p>Frequent grocery shoppers may also want to explore Instacart+, Instacart's membership program. Depending on the current membership terms and eligible orders, members can receive benefits related to delivery fees and other savings.</p>
    <p>If you order groceries through Instacart regularly, compare the potential value of membership with the promotions available on individual orders.</p>
    <p>A membership can make more sense for frequent users, while an occasional shopper may prefer using an Instacart promo code or retailer-specific offer when available.</p>
    <p>Always review the current membership terms and eligibility requirements before subscribing.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Instacart Retailer Deals</h3>
    <p>Instacart works with many grocery stores and retailers, so available promotions can vary significantly from one store to another.</p>
    <p>If you already know which retailer you want to shop from, check its available offers before adding products to your cart.</p>
    <p>You may find promotions on selected brands, buy-more-save-more opportunities, product discounts, or other retailer-specific deals.</p>
    <p>If you're flexible about where you shop, comparing participating retailers can also help you find a better combination of product selection, availability, delivery options, and savings.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Instacart Promotions for New Customers</h3>
    <p>First-time shoppers may find introductory promotions designed to encourage their first Instacart order.</p>
    <p>If you're new to the platform, check CouponsBit for any available new-customer promotion before placing your first order.</p>
    <p>These offers can have specific requirements, such as a minimum purchase amount, eligible delivery area, expiration date, or restrictions on participating retailers.</p>
    <p>Existing customers shouldn't overlook available offers either. Promotions can vary, and some deals may be available to returning shoppers.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Instacart Sales and Major US Shopping Events</h3>
    <p>Grocery shopping happens all year, but certain holidays and events can lead to larger shopping trips. These occasions are worth watching when you're looking for an Instacart deal or promotional offer.</p>
    <p><strong>Super Bowl:</strong> Super Bowl gatherings often mean larger grocery orders filled with wings, chips, dips, pizza ingredients, beverages, desserts, and other party foods.</p>
    <p>If you're feeding a group, check for an Instacart discount code and retailer-specific promotions before placing your order.</p>
    <p><strong>Valentine's Day:</strong> Valentine's Day shopping can include chocolates, flowers, desserts, beverages, ingredients for a home-cooked dinner, and other treats.</p>
    <p><strong>Easter:</strong> Easter can bring larger family grocery trips, with shoppers looking for baking ingredients, candy, seasonal foods, beverages, and items for family gatherings.</p>
    <p><strong>Mother's Day:</strong> Whether you're preparing brunch at home or buying snacks and ingredients for a family celebration, Instacart can make Mother's Day grocery shopping more convenient.</p>
    <p><strong>Memorial Day:</strong> Memorial Day weekend is a popular time for cookouts and gatherings. Customers may shop for burgers, hot dogs, barbecue ingredients, snacks, beverages, and other outdoor-meal essentials.</p>
    <p><strong>Fourth of July:</strong> Independence Day can mean backyard barbecues, parties, picnics, and family gatherings. Grocery orders may include grilling supplies, drinks, desserts, snacks, and party essentials.</p>
    <p><strong>Back-to-School Season:</strong> Back-to-school shopping isn't limited to school supplies. Families also need breakfast foods, lunchbox snacks, beverages, pantry staples, cleaning products, and household essentials.</p>
    <p>Ordering groceries online can make weekly restocking easier when school and work schedules become busy.</p>
    <p><strong>Halloween:</strong> Halloween shopping can include candy, baking supplies, party snacks, beverages, decorations, and ingredients for themed gatherings.</p>
    <p><strong>Thanksgiving:</strong> Thanksgiving is one of the biggest grocery-shopping occasions of the year. Customers may order turkey, vegetables, baking ingredients, desserts, beverages, appetizers, and other holiday essentials.</p>
    <p>Planning your order early can be especially useful because popular products and delivery windows may become limited as the holiday approaches.</p>
    <p><strong>Black Friday:</strong> Black Friday is traditionally associated with electronics, fashion, and home goods, but shoppers may also need groceries and refreshments while spending the day shopping.</p>
    <p>If you're hosting friends or taking a break from shopping, check Instacart for available restaurant and grocery options.</p>
    <p><strong>Cyber Monday:</strong> Cyber Monday can be another useful time to check online shopping platforms for promotions. If you're spending the day shopping from home, ordering groceries through Instacart can save you a trip to the store.</p>
    <p><strong>Christmas and Holiday Shopping:</strong> Holiday grocery shopping can involve everything from baking ingredients and festive meals to snacks, beverages, desserts, and party supplies.</p>
    <p>If you're hosting guests, compare available Instacart offers before placing a larger order.</p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use an Instacart Promo Code</h3>
            <p className="text-gray-600 font-medium -mt-4 mb-4">
              If you find an Instacart promo code through CouponsBit, follow the instructions associated with that specific offer. A typical process may include:
            </p>
            <div className="space-y-6">
              {[
                "Select the Instacart offer you want to use.",
                "Visit Instacart and sign in or create an account if required.",
                "Enter your delivery location.",
                "Choose a participating retailer.",
                "Browse groceries and add eligible products to your cart.",
                "Proceed to checkout.",
                "Enter the applicable promo code.",
                "Apply the code and confirm that the discount has been reflected.",
                "Review delivery or pickup fees, service charges, taxes, and the final total.",
                "Complete your order."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium italic mt-4 pt-4 border-t border-gray-100">
              If the code doesn't work, check its expiration date and eligibility requirements. Some promotions may only apply to new customers, selected retailers, particular products, or orders above a specified amount.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Instacart Offers?</h3>
            <p>
              Grocery shopping is a recurring expense, which makes small savings meaningful over time.
            </p>
            <p>
              CouponsBit gives shoppers a convenient place to check for an Instacart promo code before placing an order. You can also look for coupon codes, discount offers, vouchers, retailer promotions, and other deals.
            </p>
            <p>
              Instead of assuming the first available promotion is the best one, compare the offer with your actual shopping list and final order total.
            </p>
            <p>
              For one shopper, a percentage discount might provide the greatest value. For another, a free-delivery offer or retailer-specific promotion could make more sense.
            </p>
            <p>
              The goal is simple: check your options before you pay and choose the offer that fits your order.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Instacart Order</h3>
            <p>
              Instacart brings grocery shopping and everyday essentials to your screen, giving you a convenient way to shop from participating retailers without making a traditional store trip.
            </p>
            <p>
              From fresh produce and pantry staples to household supplies, personal-care products, pet essentials, snacks, and holiday groceries, there's plenty to explore. And because promotions can change regularly, checking for a deal before completing your order can be worthwhile.
            </p>
            <p>
              Before you check out, visit CouponsBit to look for the latest Instacart promo code, along with coupon codes, discount offers, vouchers, retailer deals, and delivery promotions. Compare the available options with your shopping list and final order total, then choose the offer that makes the most sense for your grocery run.
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
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Instacart Promo Codes</h3>
          {[
            { q: "Does Instacart offer promo codes?", a: "Yes. Instacart offers different promotions that may include promo codes, discounts, retailer offers, delivery promotions, and other savings opportunities. Availability and eligibility can vary." },
            { q: "Where can I find an Instacart promo code?", a: "You can check CouponsBit for available Instacart promo codes, coupon codes, discount offers, vouchers, and other promotions before placing your grocery order." },
            { q: "How do I use an Instacart coupon code?", a: "Add your groceries to the cart, proceed to checkout, and enter the applicable coupon or promotional code in the designated field. Confirm that the discount has been applied before completing your order." },
            { q: "Why isn't my Instacart promo code working?", a: "A code may not work because it has expired or because your order doesn't meet its requirements. Restrictions may include minimum spending amounts, customer eligibility, participating retailers, products, or locations." },
            { q: "Can I use an Instacart discount code at any retailer?", a: "Not necessarily. Some promotions may be restricted to particular retailers, products, customers, or locations. Check the individual offer's terms before ordering." },
            { q: "Does Instacart offer free delivery?", a: "Instacart may provide delivery-related promotions and membership benefits for eligible orders. Availability and conditions can change, so check the current offer before placing your order." },
            { q: "What is Instacart+?", a: "Instacart+ is Instacart's membership program. It provides eligible members with certain benefits related to delivery and other savings, subject to the current membership terms." },
            { q: "Can I order household products through Instacart?", a: "Yes. Depending on the participating retailer, customers can order household essentials such as cleaning products, paper goods, laundry supplies, personal-care items, pet products, and other everyday necessities." },
            { q: "Can I use Instacart for holiday grocery shopping?", a: "Yes. Instacart can be useful for larger grocery trips around holidays such as Thanksgiving, Christmas, Easter, the Fourth of July, and other family celebrations." },
            { q: "Does Instacart have Black Friday deals?", a: "Instacart and participating retailers may run promotions around major shopping periods. Check the current offers to see which products, retailers, and customers qualify." },
            { q: "When is the best time to look for Instacart deals?", a: "Promotions can appear throughout the year, but major holidays and shopping periods such as the Super Bowl, Memorial Day, Fourth of July, back-to-school season, Thanksgiving, Black Friday, Cyber Monday, and Christmas can be useful times to check." },
            { q: "How can I save more on Instacart?", a: "Start by checking CouponsBit for an Instacart promo code, then compare it with retailer-specific promotions, product discounts, delivery offers, and membership benefits. Always consider the complete checkout total when deciding which deal provides the best value." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Instacart Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Instacart Promo Code", "Instacart+", "Free Delivery", "Grocery Deals", "First Order Discount", "Retailer Coupons", "Pantry Staples", "Same-Day Delivery"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Instacart Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">I</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Instacart: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
