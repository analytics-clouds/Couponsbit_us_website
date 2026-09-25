"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,Library, GraduationCap, FileText,
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
  Gamepad2,
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
  { id: "d1", label: "SALE", heading: "Extra 25% OFF Annual Family Plan", sub: "Latest Deals" },
  { id: "d2", label: "FREE", heading: "Family Free Trial with 7-Day Trial", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Family Monthly Plan for $13.99/Month", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "12-Month Subscription for $84.99", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "12-Month Subscription – $84.99", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Driffle", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp", dealText: "Up To 80% OFF", href: "/stores/driffle-discount-code" },
  { name: "Unipin", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782198037/unipijn-coupon-code_nh4xhc.webp", dealText: "Up To 20% OFF", href: "/stores/unipin-discount-code" },
  { name: "Kinguin", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494079/kinguin-coupon-code_ugjj9s.jpg", dealText: "Up To 70% OFF", href: "/stores/kinguin-discount-code" },
  { name: "GamsGo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787739252/gamesgo-logo_xo1xw9.webp", dealText: "Up To 85% OFF", href: "/stores/gamsgo-discount-code" },
];

const STORE_URL = "https://epic.pxf.io/c/4303217/3763127/47834?adnetwork=1&trafsrc=2";

export default function EpicCouponsContent() {
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
              <span className="text-black font-extrabold">Epic Games</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789032950/epic-logo_kxo5y0.webp" alt="Epic Games" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Epic Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(21.3k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Epic discount codes and Epic promo codes at Maxiku Offers. Save an extra 25% OFF the Family annual membership, start a 7-day free trial, and unlock unlimited access to 40,000+ digital books, audiobooks, and educational videos for kids.
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
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "500+", label: "Deals" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789559424/34_eji14a.webp" alt="Epic Games Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Epic Games Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "25% OFF", title: "Epic Discount Code – Extra 25% OFF Annual Family Plan", desc: "Get an Extra 25% OFF the Epic Family annual membership in the USA.", bullets: ["Pay $5.25/month, with the first-year annual price reduced from $84.99 to $62.99.", "Enjoy 40,000+ digital kids’ books, videos and audiobooks with your family membership.", "Start your 7-day free trial and inspire kids to read, learn and discover more."] },
                  { label: "FREE", value: "7-DAY TRIAL", title: "Epic Discount Code – Family Free Trial with 7-Day Trial", desc: "Explore Epic’s digital library with 40,000+ high-quality books, videos and audiobooks for kids across the USA.", bullets: ["Start a 7-day free trial and discover engaging reading and learning content for the whole family.", "Enjoy access to children’s books and educational entertainment at home or on the go.", "Family membership plans are available from as low as $5.25/month with the annual offer."] },
                  { label: "DEAL", value: "$13.99/MO", title: "Epic Discount Code – Family Monthly Plan for $13.99/Month", desc: "Choose Epic Family’s flexible monthly membership for $13.99/month in the USA.", bullets: ["Get monthly access to 40,000+ digital books, videos and audiobooks for kids.", "Discover entertaining and educational content designed to encourage a love of reading.", "Start with a 7-day free trial and enjoy Epic at home or while travelling."] },
                  { label: "DEAL", value: "$84.99", title: "Epic Discount Code – 12-Month Subscription for $84.99", desc: "Get a 12-month Epic subscription for $84.99 and give kids a year of reading and discovery.", bullets: ["Explore a huge collection of 40,000+ digital kids’ books, videos and audiobooks.", "Enjoy convenient access to engaging content at home, during trips or on the go.", "Choose Epic to keep children entertained while encouraging regular reading habits."] },
                  { label: "DEAL", value: "$84.99", title: "Epic 12-Month Subscription – $84.99", desc: "Enjoy a full year of access to Epic’s digital library for kids for $84.99.", bullets: ["Explore 40,000+ books, videos and audiobooks created for young readers.", "Give children an engaging way to read, learn and discover new topics.", "Access digital content conveniently at home or on the go across the USA."] },
                  { label: "DEAL", value: "$39.99", title: "Epic 3-Month Subscription – $39.99", desc: "Get three months of Epic access for $39.99 with the 3-month subscription.", bullets: ["Explore 40,000+ digital books, videos and audiobooks for children.", "Encourage kids to discover new stories and educational content through digital reading.", "Enjoy convenient access to Epic’s kids’ library at home or on the go."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Epic Games: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About Epic Games</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Epic is a digital reading and learning platform built specifically for children 12 and under. Its library includes more than 40,000 books, audiobooks, educational videos, and other learning content from more than 250 publishers.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform is designed for both families and educators. Parents can use Epic to encourage children to read at home, while teachers can use its digital library and classroom tools to support reading and learning.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Epic's collection covers a broad range of subjects and reading levels, including fiction, nonfiction, STEM, science, math, history, graphic novels, chapter books, early readers, and more. It also offers Read-To-Me titles, audiobooks, and learning videos for children who prefer listening or watching alongside traditional reading.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Safety is another major part of the platform. Epic describes its library as ad-free, carefully curated, and designed specifically for children, with parent controls that help families guide the reading experience.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Gamepad2, name: "PC Games", count: "500+", color: "text-blue-500", href: "/categories/gaming" },
                        { icon: Gift, name: "Weekly Free Games", count: "50+", color: "text-green-500", href: "/categories/gaming" },
                        { icon: ShoppingBag, name: "Game Bundles", count: "120+", color: "text-purple-500", href: "/categories/gaming" },
                        { icon: Sparkles, name: "Epic Rewards", count: "40+", color: "text-teal-500", href: "/categories/gaming" },
                        { icon: Search, name: "Seasonal Sales", count: "90+", color: "text-orange-500", href: "/categories/gaming" },
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
  <h3 className="text-black font-black text-lg mb-4">
    How to Save More on Epic
  </h3>
  <p className="text-gray-500 font-medium text-[11px] leading-relaxed mb-8">
    Getting the best Epic deal isn't necessarily about finding the biggest percentage discount.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Compare Offers First",
        sub: "Start by checking CouponsBit for a current Epic promo code. Then compare the code with Epic's own free trial or subscription promotion.",
      },
      {
        icon: Library,
        title: "Evaluate Regular Usage",
        sub: "If you're a parent, consider how frequently your child will actually use the platform. A large digital library is valuable when it becomes part of a regular reading routine.",
      },
      {
        icon: GraduationCap,
        title: "Check Free School Access",
        sub: "Educators should also check whether Epic School provides the access they need before considering a paid option. Epic currently offers free school access for educators and students during school hours.",
      },
      {
        icon: Users,
        title: "Watch for School-Related Offers",
        sub: "Families connected to participating educators should also watch for any current teacher or school-related offers.",
      },
      {
        icon: FileText,
        title: "Read Subscription Terms Carefully",
        sub: "Most importantly, read the subscription terms carefully. Promotional pricing, trials, renewal terms, and eligibility requirements can change.",
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
          Epic Promo Code, Coupon Code & Discount Offers
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
          title: "Epic Discount Code – Extra 25% OFF Annual Family Plan",
          discount: "$5.25 / mo ($62.99 / yr)",
          eligibility: "USA Users",
          conditions: "Was $84.99; extra 25% OFF annual price. Includes 40k+ books & 7-day trial",
          applicableOn: "Annual Family Plan"
        },
        {
          title: "Epic Discount Code – Family Free Trial with 7-Day Trial",
          discount: "7-Day Free Trial",
          eligibility: "All USA Users",
          conditions: "Plans start at $5.25/mo. Full digital access on home or go",
          applicableOn: "Family Free Trial"
        },
        {
          title: "Epic Discount Code – Family Monthly Plan for $13.99/Month",
          discount: "$13.99 / Month",
          eligibility: "USA Users",
          conditions: "Flexible monthly renewal. Includes 7-day free trial",
          applicableOn: "Monthly Membership"
        },
        {
          title: "Epic Discount Code – 12-Month Subscription for $84.99",
          discount: "$84.99 / Year",
          eligibility: "All Users",
          conditions: "Full year access to 40k+ books, videos & audiobooks",
          applicableOn: "Annual Subscription"
        },
        {
          title: "Epic 12-Month Subscription – $84.99",
          discount: "$84.99 / Year",
          eligibility: "USA Users",
          conditions: "1 Year subscription for young readers",
          applicableOn: "12-Month Plan"
        },
        {
          title: "Epic 3-Month Subscription – $39.99",
          discount: "$39.99 / 3 Months",
          eligibility: "All Users",
          conditions: "3-month limited duration access",
          applicableOn: "3-Month Plan"
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
            What if screen time could actually make kids more excited about reading?
          </p>
          <p>
            That is the idea behind Epic. Instead of asking children to choose between books and technology, Epic brings the two together through a digital library filled with children's books, audiobooks, learning videos, and interactive reading experiences. The platform is designed for children 12 and under and gives families and educators a kid-friendly place to discover stories and learn.
          </p>
          <p>
            With more than 40,000 books and videos available across its platform, Epic can be useful for bedtime reading, independent reading, classroom activities, summer learning, or simply finding something new for a child who has already read their favorite book approximately 47 times.
          </p>
          <p>
            If you're considering an Epic subscription for your family, checking for an Epic promo code before signing up can be a smart way to look for additional savings. CouponsBit helps you find Epic promotional codes, coupon offers, discounts, and other deals so you can compare your options before starting a subscription.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Find an Epic Promo Code</h3>
    <p>If you're planning to subscribe to Epic for your family, start by checking for an Epic promo code on CouponsBit.</p>
    <p>A promotional code can sometimes provide a discount or special subscription offer, depending on the current promotion and eligibility requirements. Since offers can change, it's important to check the terms and expiration date before relying on a particular code.</p>
    <p>You should also compare any available promotion with Epic's current subscription offer. Sometimes a direct free trial or special campaign may provide better value than a separate coupon.</p>
    <p>The goal isn't simply to find a code. It's to find the offer that makes the most sense for your family.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Epic Family for Kids</h3>
    <p>Epic Family is designed for families who want children to have access to books and learning content outside the classroom.</p>
    <p>The family experience provides 24/7 access to Epic's library, including more than 40,000 books, audiobooks, and other content. Parents also get tools that allow them to see what their children are reading and suggest books.</p>
    <p>This makes Epic useful for families who want to build a regular reading routine without having to constantly search for new age-appropriate material.</p>
    <p>Instead of buying a new stack of books every time your child finishes a favorite series, Epic puts a large digital library in one place.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Epic Books for Kids</h3>
    <p>Books are at the heart of the Epic experience.</p>
    <p>The platform includes picture books, early readers, chapter books, nonfiction, graphic novels, educational titles, and other formats. Parents and children can browse by age, topic, reading level, and format.</p>
    <p>The subject range is broad enough to accommodate different interests. Children can explore science, animals, adventure, fantasy, sports, history, technology, nature, arts and crafts, friendship, mysteries, and many other topics.</p>
    <p>That variety can be particularly useful when a child says, "I don't like reading."</p>
    <p>Maybe they don't dislike reading. Maybe they just haven't found the right book yet.</p>
    <p>Epic makes it easier to experiment with different genres and subjects until something clicks.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Read-To-Me Books and Audiobooks</h3>
    <p>Not every child wants to sit quietly and read a page independently.</p>
    <p>Epic offers Read-To-Me books and audiobooks that give children another way to experience stories. These formats can be useful for younger readers, children who are still developing confidence, or families looking for something to enjoy together.</p>
    <p>Parents can also use read-aloud content as part of bedtime or quiet-time routines.</p>
    <p>For children who are beginning to transition from listening to independent reading, these formats can provide a bridge between the two experiences.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Educational Videos on Epic</h3>
    <p>Epic isn't limited to digital books.</p>
    <p>The platform also offers learning videos covering subjects and activities such as science, math, DIY, yoga, LEGO construction, and other educational topics.</p>
    <p>This gives parents another way to make learning more varied.</p>
    <p>A child might read about space, watch a related educational video, and then move on to another book about planets. That kind of variety can make learning feel less like an assignment and more like exploration.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Epic for Different Reading Levels</h3>
    <p>One of the biggest challenges for parents is finding books that aren't simply appropriate for a child's age but also appropriate for their reading ability.</p>
    <p>Epic offers content across different reading levels, including Read-To-Me books, leveled readers, decodable books, early readers, and chapter books. Educators can also filter content using different reading-level and grade-level tools.</p>
    <p>This allows children to gradually move toward more challenging material as their confidence and skills develop.</p>
    <p>For parents, it also means less guesswork when searching for something a child can realistically read and enjoy.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Epic for Parents</h3>
    <p>Parents get more than just access to a digital library.</p>
    <p>Epic's family experience includes a parent dashboard that allows parents to see what their children are reading and suggest books. The platform also provides personalized recommendations and age-appropriate content.</p>
    <p>These tools can make it easier to encourage reading without turning every reading session into a negotiation.</p>
    <p>Parents can also use Epic to create more consistent reading habits at home. Whether that's 20 minutes after school, a bedtime story, or weekend reading, having a large selection readily available removes one of the common barriers: figuring out what to read next.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Epic for Teachers and Educators</h3>
    <p>Epic isn't only built for families.</p>
    <p>Teachers can use Epic as a classroom reading resource, with tools designed to help assign books, organize collections, track reading progress, and support students at different reading levels.</p>
    <p>Epic School currently gives educators and students free access to around 20,000 books and videos during school hours on weekdays, while Epic School Plus is designed to provide broader year-round access to the full library through participating schools and districts.</p>
    <p>Teachers can also use features such as Reading Badges, Daily 20, ELA tools, quizzes, dictionary lookup, and curated collections to make reading more engaging.</p>
    <p>For educators, this can turn Epic into more than an online bookshelf. It becomes a classroom tool for encouraging regular reading and monitoring progress.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Epic School: Free Access for Educators</h3>
    <p>One of Epic's notable features is its support for educators.</p>
    <p>Epic School provides free access to educators and students during the school day, with access to approximately 20,000 books and videos. Epic says this access is available Monday through Friday during its designated school hours.</p>
    <p>This makes Epic particularly useful for teachers who want to introduce digital reading without requiring every family to purchase an individual subscription.</p>
    <p>Schools and districts looking for broader access can also explore Epic School Plus, which offers 24/7 access to more than 40,000 books and videos.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Multilingual Books and Learning Content</h3>
    <p>Children don't all learn in the same language, and Epic's library reflects that.</p>
    <p>Alongside English-language content, Epic offers books and videos in languages including Spanish, French, and Chinese, with its educator materials also highlighting Gaelic-language content.</p>
    <p>Multilingual resources can help families introduce children to additional languages or provide reading material for children who speak another language at home.</p>
    <p>For parents raising multilingual children, having multiple language options within the same platform can be especially convenient.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Epic Originals</h3>
    <p>Epic also develops its own original content.</p>
    <p>The platform currently highlights more than 350 Epic Originals across more than 40 series. These titles are created with educational input and cover themes designed to support reading and broader learning.</p>
    <p>For children who quickly work through popular titles, Epic Originals provide another reason to keep exploring the platform.</p>
    <p>The library is also updated regularly, with new books and videos added over time.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Epic for Back-to-School Reading</h3>
    <p>Back-to-school season is one of the most natural times to consider a digital reading subscription.</p>
    <p>Children are returning to structured learning, teachers are setting reading goals, and parents are looking for ways to keep reading habits consistent outside the classroom.</p>
    <p>Epic currently highlights its large library as a resource for back-to-school reading and discovery.</p>
    <p>If you're setting up a new reading routine for the school year, check CouponsBit for an Epic promo code before starting a paid family subscription.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Epic for Summer Learning</h3>
    <p>Summer can be a tricky time for maintaining reading habits.</p>
    <p>School is out, routines change, and the phrase "I'm bored" tends to appear with impressive frequency.</p>
    <p>A digital library like Epic can give children something structured to explore without making every activity feel like homework. Parents can encourage children to choose books based on their own interests, while Read-To-Me titles and educational videos provide additional ways to keep learning going.</p>
    <p>Summer is also a good opportunity for children to explore topics they may not encounter in their regular schoolwork.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Epic Deals and Subscription Savings</h3>
    <p>If you're considering a paid Epic Family subscription, don't stop at the first offer you see.</p>
    <p>Epic periodically runs promotional campaigns and free-trial opportunities. Its current website promotes a free trial for families, while the exact subscription terms can change over time.</p>
    <p>You may also encounter special offers connected to educator referrals, seasonal campaigns, or other promotional events.</p>
    <p>This is why checking for an Epic promo code before subscribing can be worthwhile. If a code is available, compare its terms with Epic's direct offer and choose whichever provides the better overall value.</p>
  </div>
</div>

          {/* Box Section: How to Use */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">
              How to Use an Epic Promo Code
            </h3>
            <p className="text-gray-600 font-medium -mt-4 mb-4">
              Using an Epic promo code is generally straightforward when a promotional offer is available.
            </p>
            <div className="space-y-6">
              {[
                "Start by visiting Epic and selecting the family or subscription option that fits your needs.",
                "Review the current plan and promotional terms before proceeding.",
                "If you have an eligible promo code, enter it in the designated promotional-code field during the signup process.",
                "Before completing your subscription, check the order summary to confirm that the expected offer has been applied."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold mt-2 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium italic mt-4 pt-4 border-t border-gray-100">
              If the code doesn't work, check whether it has expired or whether it is restricted to a specific plan, customer group, referral, or promotional campaign. Some older Epic coupon codes found online may no longer be active, so always rely on the current terms associated with the promotion.
            </p>
          </div>

          {/* Section: Why Use */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Why Use CouponsBit for Epic?
            </h3>
            <p>
              Educational subscriptions are worth comparing just like any other recurring service.
            </p>
            <p>
              CouponsBit gives parents and shoppers a convenient place to check for Epic promo codes, coupon codes, discounts, offers, and other savings opportunities before subscribing.
            </p>
            <p>
              Instead of searching through old promotional pages and wondering whether a code still works, start with the latest available Epic offers on CouponsBit.
            </p>
            <p>
              You can then compare the available promotion with Epic's own subscription terms and decide which option makes the most sense for your family.
            </p>
            <p>
              For something as useful as encouraging children to read, finding a little extra value is always a nice bonus.
            </p>
          </div>

          {/* Section: Make Reading More Exciting With Epic */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Make Reading More Exciting With Epic
            </h3>
            <p>
              A good digital reading platform shouldn't simply give children more things to scroll through. It should give them reasons to be curious.
            </p>
            <p>
              With tens of thousands of books, audiobooks, learning videos, Read-To-Me titles, educational resources, and personalized reading options, Epic gives children plenty of opportunities to find something that genuinely interests them.
            </p>
            <p>
              Whether you're a parent building a reading routine, a teacher looking for classroom resources, or a family preparing for the new school year, Epic can make digital reading feel more engaging and accessible.
            </p>
            <p>
              Before starting a paid subscription, check CouponsBit for an Epic promo code and compare it with the latest free trial or subscription offer. Review the terms, choose the plan that fits your needs, and let the reading begin.
            </p>
            <p>
              Because if a child asks for "just one more book," that's probably one screen-time argument worth having.
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
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Epic Promo Codes
          </h3>
          {[
            { q: "Does Epic offer promo codes?", a: "Epic periodically offers promotional campaigns, free trials, and other subscription offers. Availability and eligibility can change, so check CouponsBit and Epic's current terms before subscribing." },
            { q: "Where can I find an Epic promo code?", a: "You can check CouponsBit for current Epic promo codes, coupon offers, and subscription deals before signing up." },
            { q: "Does Epic have a free trial?", a: "Epic currently promotes a free trial for families. The length and terms of the trial can change, so check the current offer before signing up." },
            { q: "Is Epic free for teachers?", a: "Epic School currently provides free access for educators and students during designated school hours on weekdays." },
            { q: "How many books does Epic have?", a: "Epic currently promotes a library of more than 40,000 books, audiobooks, and learning videos from more than 250 publishers." },
            { q: "What age is Epic for?", a: "Epic is designed primarily for children 12 and under, with content available across different ages and reading levels." },
            { q: "Does Epic have audiobooks?", a: "Yes. Epic includes audiobooks and Read-To-Me books, giving children options to listen to stories as well as read them independently." },
            { q: "Does Epic have educational videos?", a: "Yes. Epic's library includes educational videos covering subjects and activities such as science, math, DIY, yoga, and other learning topics." },
            { q: "Can parents track what their children read on Epic?", a: "Epic Family includes a parent dashboard where parents can see what their children are reading and suggest books." },
            { q: "Is Epic safe for kids?", a: "Epic describes its platform as ad-free, curated by experts, and designed specifically for children. It also provides parent controls to help families guide their children's reading experience." },
            { q: "Can children read Epic books offline?", a: "Epic Family promotes offline reading as one of its features, allowing children to continue reading outside an internet connection." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa]")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform", openFaq === i && "text-white rotate-180")} />
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
            Popular Epic Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Epic Promo Code",
              "Kids Reading App",
              "Epic Free Trial",
              "Audiobooks For Kids",
              "Epic For Educators",
              "Read-To-Me Books",
              "Stem Learning Videos",
              "Bedtime Stories"
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
            Today's Top Epic Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "FREE TRIAL FOR FAMILIES", sub: "Unlimited Access To 40,000+ Kids Books" },
              { heading: "FREE FOR EDUCATORS", sub: "Free Classroom Access During School Hours" },
              { heading: "EPIC FAMILY ANNUAL PLAN", sub: "Save Big With An Annual Membership Subscription" },
              { heading: "OFFLINE READING MODE", sub: "Download Books To Read Anywhere Without WiFi" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  E
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
                  href="https://www.getepic.com/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  aria-label={`Shop Epic: ${deal.heading}`} 
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
