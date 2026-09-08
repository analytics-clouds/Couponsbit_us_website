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
  ExternalLink, Calculator, Truck, Calendar,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Shirt,
  Camera,
  Gift,
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
  { id: "d1", label: "SALE", heading: "50% OFF Cards & Stationery", sub: "Latest Deals" },
  { id: "d2", label: "SALE", heading: "40% OFF Photo Books + FREE Extra Pages", sub: "Featured Picks" },
  { id: "d3", label: "NEW", heading: "Gallery of Ten Photo Mug for $13.99", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "11 oz Photo Mugs for $9.99", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "FREE Photo Prints – Code MEMS", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Flat 75% OFF", href: "/stores/etsy-coupon-code" },
  { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra", href: "/stores/home-depot-discount-code" },
  { name: "Wayfair", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp", dealText: "Up To 80% OFF", href: "/stores/wayfair-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Macy's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp", dealText: "Up To 75% OFF", href: "/stores/macys-promo-code" },
  { name: "Dore & Rose", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/dore-and-rose-logo_jsa9ki.webp", dealText: "Up To 65% OFF", href: "/stores/dore-and-rose-promo-code" },
];

const STORE_URL = "https://www.shutterfly.com";

export default function ShutterflyCouponsContent() {
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
              <span className="text-black font-extrabold">Shutterfly</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788783181/shutterfly-logo_wvvske.webp" alt="Shutterfly" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Shutterfly</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-10" />
                      </div>
                      <span className="text-black font-black text-sm">4.1</span>
                      <span className="text-gray-600 font-bold text-sm">(6.7k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Shutterfly promo codes and Shutterfly discount codes at Maxiku Offers. Save 50% OFF cards and stationery, enjoy 40% OFF personalized photo books with FREE extra pages, get FREE photo prints, and unlock FREE shipping on qualifying USA orders.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "9", label: "Offers" },
                    { icon: Percent, val: "300+", label: "Deals" },
                    { icon: Users, val: "800K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788783181/shutterfly-logo_wvvske.webp" alt="Shutterfly Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Shutterfly Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "50% OFF", title: "Shutterfly – 50% OFF Cards & Stationery", desc: "Get a flat 50% OFF on eligible cards and stationery orders at Shutterfly.", bullets: ["Meet the minimum cart value requirement of $45 or more to qualify for the discount.", "Enjoy FREE shipping on eligible orders with this limited-time USA deal."] },
                  { label: "SALE", value: "40% OFF", title: "Shutterfly – 40% OFF Photo Books + FREE Extra Pages", desc: "Save 40% OFF on eligible photo books at Shutterfly.", bullets: ["Enjoy unlimited FREE extra pages to create a more memorable and personalized photo book.", "This offer is available to all eligible Shutterfly customers in the USA."] },
                  { label: "NEW", value: "$13.99", title: "Shutterfly – Gallery of Ten Photo Mug for $13.99", desc: "Create a personalized Gallery of Ten Photo Mug using favorite photos from your camera roll.", bullets: ["Get the featured 11 oz photo mug for just $13.99, reduced from $19.99.", "Personalize your mug with memorable photos for a unique everyday gift or keepsake.", "Shop this Shutterfly USA deal while the promotional price is available."] },
                  { label: "DEAL", value: "$9.99", title: "Shutterfly – 11 oz Photo Mugs for $9.99", desc: "Get selected 11 oz White Photo Mugs for just $9.99 at Shutterfly.", bullets: ["Create a personalized mug featuring your favorite photos and memories.", "Make a thoughtful personalized gift for birthdays, holidays, family and special occasions.", "Shop the offer while selected photo mug designs remain available."] },
                  { label: "DEAL", value: "FREE PRINTS", title: "Shutterfly FREE Photo Prints – Code MEMS", desc: "Get FREE photo prints from Shutterfly using code MEMS on eligible orders.", bullets: ["Turn your favorite digital memories into physical prints to display or share.", "Choose from Shutterfly's personalized photo printing options for your favorite moments.", "Use code MEMS at checkout and check the offer terms for eligible USA orders."] },
                  { label: "DEAL", value: "$37.99", title: "Shutterfly 8x11 Wall Calendars – From $37.99", desc: "Shop personalized 8x11 Wall Calendars at Shutterfly starting from $37.99.", bullets: ["Add your favorite photos and memories to create a customized calendar.", "Create a practical and personal addition to your home or office.", "Order your personalized Shutterfly calendar for delivery in the USA."] },
                  { label: "NEW", value: "$164.80", title: "Shutterfly Loving Festive Script Holiday Card – Up to 37% OFF", desc: "Shop the Loving Festive Script Holiday Card from the Shutterfly Trending Now collection.", bullets: ["Get the featured card design for $164.80 compared with the original $261.60 price.", "Save $96.80 on the selected holiday card design.", "Create personalized holiday stationery for sending festive greetings to family and friends."] },
                  { label: "SALE", value: "20% OFF", title: "Shutterfly Fleece Blankets – Extra 20% OFF", desc: "Get an Extra 20% OFF eligible fleece blankets at Shutterfly.", bullets: ["Use code EXTRA20 at checkout to claim the additional discount.", "Personalize your fleece blanket with favorite photos, memories or custom designs.", "Shop this limited-time USA offer while eligible fleece blankets are available."] },
                  { label: "DEAL", value: "FREE SHIP", title: "Shutterfly – FREE Shipping on Orders $99+", desc: "Get FREE shipping on qualifying Shutterfly orders of $99 or more.", bullets: ["Use code SHIP99 at checkout to claim the shipping offer.", "Save on delivery costs while ordering personalized photo books, gifts, prints and more.", "Offer applies to eligible USA orders meeting the required $99 minimum."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Shutterfly: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">Find a Shutterfly Promo Code</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    A Shutterfly promo code may provide savings on eligible products or orders, depending on the promotion's terms. Some offers may apply to specific product categories, while others can cover a broader selection of merchandise.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Promotions can also come with certain conditions. A code may require a minimum purchase, apply only to selected products, exclude certain items, or remain valid for a limited period.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Before placing your order, check the offer details carefully. This can help you understand whether the promotion applies to the products you're creating and whether any additional requirements need to be met.

                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    CouponsBit gives shoppers a convenient place to check available Shutterfly promotions before completing a purchase.

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
                        { icon: Search, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Sparkles, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                        { icon: Gift, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
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
    How to Find the Best Shutterfly Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Ordering",
        sub: "Before completing your photo project, check CouponsBit for the latest Shutterfly promo code, coupon codes, discount offers, vouchers, and other promotions.",
      },
      {
        icon: Calculator,
        title: "Compare Different Promotions",
        sub: "Don't automatically choose the offer with the largest advertised percentage. Compare the actual savings based on the products in your cart.",
      },
      {
        icon: Truck,
        title: "Look for Free Shipping",
        sub: "If you're placing a larger order, a free-shipping promotion may provide useful savings. Compare the total checkout cost with other available offers.",
      },
      {
        icon: Calendar,
        title: "Plan Around Major Holidays",
        sub: "Shutterfly products are especially relevant during Mother's Day, Father's Day, graduation season, Christmas, Valentine's Day, and other gifting periods. Planning ahead can give you more time to compare promotions and account for production and shipping times.",
      },
      {
        icon: Gift,
        title: "Create Multiple Gifts Together",
        sub: "If you need several personalized gifts for family members, teachers, friends, or coworkers, consider creating them in one order when the available promotion allows it.",
      },
      {
        icon: ShoppingBag,
        title: "Watch for Seasonal Promotions",
        sub: "Holiday campaigns, Black Friday, Cyber Monday, and other seasonal shopping periods can bring additional promotional opportunities.",
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
          Shutterfly Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Some memories deserve more than a spot in your phone's camera roll. Shutterfly makes it easy to turn everyday moments, family celebrations, vacations, milestones, and special occasions into personalized products you can actually hold onto. From photo books and prints to greeting cards, wall art, calendars, gifts, and home décor, the platform offers plenty of ways to bring your favorite photographs to life.
          </p>
          <p>
            If you're planning to create something personalized, checking for a Shutterfly promo code before placing your order can be a smart way to look for savings. CouponsBit helps shoppers discover Shutterfly coupon codes, discount offers, vouchers, sale promotions, and other available deals so they can compare their options before checkout.
          </p>
          <p>
            Shutterfly also runs promotions throughout the year, with special offers often appearing around holidays, major US shopping events, and popular gifting seasons. Whether you're creating a photo book for a family vacation, ordering holiday cards, or putting together a personalized gift, checking the latest offer can help you get more from your order.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Lowe’s Coupon Code and Promotional Offers</h3>
    <p>A coupon isn’t the only way to save at Lowe’s. The retailer provides several different types of savings throughout the year, giving shoppers multiple opportunities to find a better deal.</p>
    <p>Lowe’s currently highlights everyday deals, Deals of the Day, its Weekly Ad, rebates, bulk savings, subscriptions, and other promotional opportunities on its savings pages.</p>
    <p>That means you don’t necessarily have to wait for a traditional Lowe’s coupon code. If a code isn’t available for what you need, compare the current sale offers and other promotions before completing your purchase.</p>
    <p>For larger projects, this approach can be particularly useful. You might find that a product is already discounted, while another category has a separate promotion running at the same time.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Lowe’s for Every Home Improvement Project</h3>
    <p>One of Lowe’s biggest advantages is the sheer range of products available. Its online store covers everything from basic household supplies to materials for large-scale renovation projects.</p>
    <p><strong>Appliances:</strong> Planning a kitchen or laundry-room upgrade? Lowe’s carries refrigerators, dishwashers, ranges, microwaves, cooktops, wall ovens, freezers, washers, dryers, and other major appliances.</p>
    <p>You can also explore appliance packages and appliance-specific savings when planning a larger upgrade. If you’re buying several appliances together, compare the current promotions before checking out.</p>
    <p><strong>Tools and Hardware:</strong> For DIY enthusiasts, contractors, and anyone who likes handling home projects themselves, Lowe’s offers a huge selection of tools and hardware.</p>
    <p>You’ll find power tools, hand tools, drills, drivers, ladders, tool storage, measuring equipment, welding supplies, hardware, fasteners, electrical products, and more.</p>
    <p>Popular tool brands and Lowe’s private-label brands give shoppers plenty of options depending on the project and budget.</p>
    <p><strong>Building Supplies:</strong> Taking on a bigger renovation? Lowe’s carries building materials for projects ranging from small repairs to major construction work.</p>
    <p>Shop for lumber, drywall, insulation, roofing supplies, concrete and masonry products, decking, fencing, siding, doors, windows, and other building essentials.</p>
    <p>For larger quantities, it can be useful to look for bulk savings or project-specific promotions before placing your order.</p>
    <p><strong>Kitchen and Bathroom:</strong> A kitchen or bathroom makeover can involve dozens of individual products, making savings especially valuable.</p>
    <p>Lowe’s offers kitchen cabinets, countertops, sinks, faucets, backsplashes, lighting, hardware, vanities, toilets, showers, bathtubs, bathroom accessories, and other remodeling essentials.</p>
    <p>If you’re planning a complete renovation rather than buying a single item, explore Lowe’s installation and design services as well as product promotions.</p>
    <p><strong>Flooring:</strong> Give your home a new look with hardwood, laminate, vinyl flooring, tile, carpet, rugs, and related installation supplies.</p>
    <p>Lowe’s also offers flooring samples and project resources that can help you compare materials before committing to a larger purchase.</p>
    <p><strong>Lawn and Garden:</strong> Your outdoor space can get just as much attention as the inside of your home. Lowe’s offers lawn mowers, plants, soil, fertilizer, garden tools, hoses, irrigation products, landscaping supplies, outdoor storage, and other lawn and garden essentials.</p>
    <p>Seasonal promotions can make this category particularly interesting for shoppers preparing their yards for spring and summer.</p>
    <p><strong>Outdoor Living:</strong> Planning a backyard upgrade? Explore patio furniture, grills, outdoor cooking equipment, fire pits, patio heaters, gazebos, pergolas, sheds, pools, and other outdoor products.</p>
    <p>Lowe’s outdoor selection also includes landscaping and hardscaping supplies for customers taking on larger backyard projects.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More With Lowe’s Sales and Seasonal Promotions</h3>
    <p>Lowe’s runs different promotions throughout the year, and the best opportunity to save often depends on what you’re buying and when you’re shopping.</p>
    <p>For example, spring is a popular time for lawn care, gardening, landscaping, outdoor furniture, and home maintenance purchases. Summer can bring attention to grills, patio products, outdoor living, fans, and cooling solutions.</p>
    <p>Back-to-school season can also be a useful time to watch for storage, organization, lighting, home office, and household deals.</p>
    <p>As the year moves toward fall and winter, shoppers may find promotions around Halloween, Thanksgiving, Black Friday, Cyber Monday, Christmas, and end-of-year shopping. Holiday decorations, appliances, tools, home décor, and giftable products may feature prominently during these periods.</p>
    <p>Major US shopping events such as Labor Day, Black Friday, Cyber Monday, and Christmas are especially worth watching if you have a larger purchase planned. However, promotions change frequently, so it’s smart to compare the available Lowe’s deals rather than waiting for a specific event automatically.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Lowe’s Weekly Ad and Deals of the Day</h3>
    <p>If you’re shopping without a particular coupon code in mind, Lowe’s Weekly Ad is another useful place to look for savings.</p>
    <p>The Weekly Ad can feature promotions across categories such as appliances, tools, paint, lighting, home décor, lawn and garden, and other home improvement products. Lowe’s also promotes Deals of the Day, which can include online-only offers available for a limited period and while supplies last.</p>
    <p>Checking these offers before shopping can help you identify a discount even when a traditional coupon isn’t available.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Lowe’s Rewards and Member Savings</h3>
    <p>Regular Lowe’s shoppers can also explore MyLowe’s Rewards for additional benefits. Lowe’s offers member-only opportunities, including exclusive offers and gifts, while its rewards ecosystem is designed to provide benefits to customers who shop with the retailer regularly.</p>
    <p>If you frequently purchase supplies for home projects, creating an account can make it easier to keep track of orders and take advantage of eligible member benefits.</p>
    <p>Lowe’s also offers a MyLowe’s Rewards Credit Card with an advertised 5% everyday savings benefit on eligible purchases, subject to credit approval and exclusions. Because credit-related promotions have specific terms, shoppers should review the current conditions before applying.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Lowe’s Military Discount</h3>
    <p>Eligible military members, veterans, and qualifying spouses can also access Lowe’s Military Discount after completing the required verification. Lowe’s currently states that verified participants receive 10% off eligible purchases, with exclusions and other terms applying.</p>
    <p>The military discount generally cannot be combined with certain other discounts or applied to various excluded products and services, so check Lowe’s current terms before relying on it for a particular purchase.</p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Shutterfly Promo Code</h3>
            <p className="text-gray-600 font-medium -mt-4 mb-4">
              If you find a Shutterfly promo code through CouponsBit, follow the instructions associated with that particular offer. A typical process may include:
            </p>
            <div className="space-y-6">
              {[
                "Select the Shutterfly offer you want to use.",
                "Visit Shutterfly through the relevant offer.",
                "Choose the product you want to personalize.",
                "Upload your photographs and customize the design.",
                "Add the finished product to your cart.",
                "Proceed to checkout.",
                "Enter the applicable promotional code.",
                "Apply the code and check that the offer has been reflected.",
                "Review shipping, delivery information, and the final order total.",
                "Complete your purchase."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium italic mt-4 pt-4 border-t border-gray-100">
              If the code doesn't work, check its expiration date and eligibility requirements. Some promotions may apply only to specific products, require a minimum purchase, or exclude certain services or merchandise.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Shutterfly Offers?</h3>
            <p>
              Creating personalized products can turn digital photographs into meaningful keepsakes, but larger photo projects can also become expensive when you're ordering several products at once.
            </p>
            <p>
              CouponsBit helps shoppers check for savings before completing their Shutterfly order. By looking for a Shutterfly promo code, coupon, discount, voucher, sale offer, or shipping promotion, you can compare the available options with your project.
            </p>
            <p>
              The best promotion depends on what you're ordering. A photo book promotion may be more valuable for one customer, while another shopper may benefit more from a discount on prints or a shipping offer.
            </p>
            <p>
              CouponsBit gives you a convenient starting point for checking available savings before checkout.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Shutterfly Order</h3>
            <p>
              Shutterfly makes it possible to transform photographs into something tangible, whether you're creating a family photo book, printing vacation pictures, designing holiday cards, making a personalized calendar, or choosing a thoughtful gift.
            </p>
            <p>
              Because promotions can change frequently, checking for savings before completing your order is worthwhile. Major US shopping periods such as Black Friday, Cyber Monday, Mother's Day, Christmas, Valentine's Day, and graduation season can also be good times to look for special offers.
            </p>
            <p>
              Before placing your order, visit CouponsBit to find the latest Shutterfly promo code, along with coupon codes, discount offers, vouchers, sale deals, and potential shipping promotions. Compare the available options with your project, check the offer terms, and choose the deal that works best for your order.
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Shutterfly Promo Codes</h3>
          {[
            { q: "Does Shutterfly offer promo codes?", a: "Yes. Shutterfly regularly runs promotional campaigns covering different products and categories. The availability and terms of each offer can vary." },
            { q: "Where can I find a Shutterfly promo code?", a: "You can check CouponsBit for available Shutterfly promo codes, coupon codes, discount offers, vouchers, sale promotions, and other deals." },
            { q: "How do I use a Shutterfly coupon code?", a: "Create your personalized products, add them to your cart, proceed to checkout, and enter the applicable coupon code in the promotional field. Confirm that the discount has been applied before completing your order." },
            { q: "Why isn't my Shutterfly promo code working?", a: "The offer may have expired or may not apply to your selected products. Other restrictions can include minimum purchase requirements, product exclusions, limited-time conditions, or other promotional rules." },
            { q: "Does Shutterfly offer free shipping?", a: "Shutterfly may run free-shipping promotions on qualifying orders from time to time. Check the individual offer for eligibility and shipping conditions." },
            { q: "Does Shutterfly have photo book deals?", a: "Shutterfly regularly promotes photo books and other photo products through various campaigns. Available offers can change, so check for current promotions before placing an order." },
            { q: "Can I create personalized gifts on Shutterfly?", a: "Yes. Shutterfly offers a range of personalized products that can be customized with photographs, designs, messages, and other available options." },
            { q: "Does Shutterfly make holiday cards?", a: "Yes. Customers can create personalized cards for holidays and other occasions using photographs and available designs." },
            { q: "Can I make a personalized calendar with Shutterfly?", a: "Yes. Shoppers can create personalized calendars featuring their own photographs and designs." },
            { q: "Does Shutterfly sell wall décor?", a: "Yes. Shutterfly offers different photo-based décor and display products, depending on the current assortment." },
            { q: "Is Shutterfly good for personalized gifts?", a: "Shutterfly offers a wide range of customizable products, making it a useful option for shoppers looking for photo-based gifts for birthdays, weddings, anniversaries, holidays, graduations, and other occasions." },
            { q: "When is the best time to look for Shutterfly deals?", a: "Major US shopping events such as Black Friday and Cyber Monday, along with Mother's Day, Father's Day, Christmas, Valentine's Day, graduation season, and other gifting periods, can be useful times to check for promotions." },
            { q: "How can I save more on Shutterfly?", a: "Start by checking CouponsBit for a current Shutterfly promo code, then compare it with available product discounts, seasonal promotions, sale offers, and free-shipping opportunities. Review the terms and final checkout total to determine which offer provides the best value." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Shutterfly Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Shutterfly Promo Code", "Photo Books", "Free Shipping", "Holiday Cards", "Personalized Gifts", "Wall Art", "Calendars", "Photo Prints"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Shutterfly Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">S</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Shutterfly: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
