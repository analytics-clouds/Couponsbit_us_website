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
  Users2,
  Music,
  Clapperboard,
  Palette,
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
  { id: "d1", label: "SALE", heading: "Premium AI & Subscription Deals", sub: "Save Up to 85%" },
  { id: "d2", label: "AI", heading: "ChatGPT GPT-5.6 Sol", sub: "Just $5/Month" },
  { id: "d3", label: "DEV", heading: "Cursor Pro & Pro+", sub: "From $17.99/Month" },
  { id: "d4", label: "GAME", heading: "Roblox Robux", sub: "Starting at $7.20" },
  { id: "d5", label: "GAME", heading: "Pokémon GO Level 40 Account", sub: "$73.90" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Krisp.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/krisp-logo_ajv3iv.webp", dealText: "Save 50% OFF", href: "/stores/krisp-discount-code" },
  { name: "Envato Elements", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/envato-coupon-code_rhfnbt.webp", dealText: "Up to 50% OFF", href: "/stores/envato-elements-discount-code" },
  { name: "Bluehost", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp", dealText: "Up to 69% OFF", href: "/stores/bluehost-discount-code" },
  { name: "Talkpal.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288847/talkpal-coupon-code_gozaoz.webp", dealText: "Save Up to 69%", href: "/stores/talkpal-discount-code" },
  { name: "Openart.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/emergent-coupon-code_oeaxoh_aeoxm7.webp", dealText: "Up to 27% OFF", href: "/stores/openart-discount-code" },
  { name: "Hostinger", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/hostinger-logo_m9ubvs.webp", dealText: "Up To 80% OFF", href: "/stores/hostinger-discount-code" },
];

const STORE_URL = "https://www.gamsgo.com/?im_ref=3fSTNJwT2xycUr:QFtVibWsMUkr08gzhqV790U0&sharedid=&irpid=4303217&irgwc=1&afsrc=1";

export default function GamsGoCouponsContent() {
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
              <span className="text-black font-extrabold">GamsGo</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787739252/gamesgo-logo_xo1xw9.webp" alt="GamsGo" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">GamsGo</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.2</span>
                      <span className="text-gray-600 font-bold text-sm">(14.3k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover GamsGo deals and offers in Aug 2026. Browse Netflix sharing offers, Spotify Premium deals, Disney+ picks and YouTube Premium offers on GamsGo.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "10", label: "Offers" },
                    { icon: Percent, val: "1.9k", label: "Deals" },
                    { icon: Users, val: "5M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787739252/gamesgo-logo_xo1xw9.webp" alt="GamsGo Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">GamsGo Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "85% OFF", title: "GamsGo – Premium AI & Subscription Deals | Save Up to 85% 🎁", desc: "Save up to 85% OFF on selected AI, gaming, and premium subscription services.", bullets: ["Get access to ChatGPT, Cursor, Suno, CapCut, Perplexity AI and other popular platforms.", "Enjoy premium tools for coding, content creation, research, video editing, and music generation.", "Choose flexible subscription options at lower prices with GamsGo."] },
                  { label: "AI", value: "$5/MO", title: "GamsGo – ChatGPT GPT-5.6 Sol | Just $5/Month 🤖", desc: "Unlock GPT-5.6 Sol with advanced execution and coding capabilities.", bullets: ["Create and edit visuals with advanced AI image-generation features.", "Get access to DALL-E 3, Canva, and Data Analyst capabilities.", "Enjoy premium ChatGPT features for only $5/month through GamsGo."] },
                  { label: "DEV", value: "$17.99/MO", title: "GamsGo – Cursor Pro & Pro+ | From $17.99/Month 💻", desc: "Upgrade your development workflow with Cursor Pro or Pro+.", bullets: ["Get unlimited code completion for quicker programming.", "Detect and repair bugs with AI-powered coding assistance.", "Use advanced Agent Proxy features to streamline complex development tasks."] },
                  { label: "GAME", value: "$7.20", title: "GamsGo – Roblox Robux | Starting at $7.20 🎮", desc: "Purchase Roblox Robux at discounted prices with GamsGo.", bullets: ["Get your gaming currency with fast delivery.", "Use Robux to purchase in-game items, upgrades, and exclusive experiences.", "A convenient option for players looking to top up their Roblox balance."] },
                  { label: "GAME", value: "$73.90", title: "GamsGo – Pokémon GO Level 40 Account | $73.90 ⚡", desc: "Start your Pokémon GO journey with a Level 40 starter account.", bullets: ["Get a fresh account prepared for advanced gameplay.", "Receive full account access after purchase.", "Skip the early grind and get straight into higher-level Pokémon GO gameplay."] },
                  { label: "MUSIC", value: "$4.99/MO", title: "GamsGo – Suno Pro AI Music | Only $4.99/Month 🎵", desc: "Get the Official Suno Pro Plan at a discounted monthly price.", bullets: ["Create AI-powered music using Suno v5.5 with upgraded vocals and arrangements.", "Receive 625 Suno credits every month for creating new tracks.", "Generate multiple projects with support for up to 10 simultaneous jobs."] },
                  { label: "EDIT", value: "$7.49/MO", title: "GamsGo – CapCut Pro | Available for $7.49/Month 🎬", desc: "Upgrade your editing experience with CapCut Pro features.", bullets: ["Unlock premium templates, effects, creative assets, and editing tools.", "Produce content in high-quality 4K, HDR, and high-resolution formats.", "Use AI-powered features including video upscaling, script-to-video, and long-video-to-shorts."] },
                  { label: "SEO", value: "$7.99", title: "GamsGo – SEMrush Guru | $7.99 for 1 Month 📊", desc: "Get 1 month of SEMrush Guru access at a discounted price.", bullets: ["Explore professional SEO and digital marketing tools.", "Analyze keywords, competitors, backlinks, traffic, and website performance.", "A useful choice for SEO specialists, marketers, agencies, and businesses."] },
                  { label: "AI", value: "$2.00", title: "GamsGo – Perplexity AI Pro | From Just $2.00 🔎", desc: "Get Perplexity AI Pro at a reduced price through GamsGo.", bullets: ["Select from Shared Account or Full Access options.", "Access advanced AI search, research, and information discovery features.", "Choose from 1-month and longer subscription options based on your requirements."] },
                  { label: "AI", value: "$3.99/DAY", title: "GamsGo – Manus AI | From $3.99/Day 🚀", desc: "Explore Manus AI plans designed for different AI-powered workflows.", bullets: ["Use credits for coding, data analysis, automation, research, and content creation.", "Handle multiple complex AI tasks with faster processing capabilities.", "Create presentations, scrape data, perform analysis, and automate repetitive tasks with AI."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[10px] sm:text-3xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop GamsGo: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About GamsGo</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    GamsGo is a subscription-sharing marketplace where users can access shared slots on family and multi-user plans for services like Netflix, Spotify, Disney+, YouTube Premium, Adobe and Crunchyroll.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Clapperboard, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Music, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Palette, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
                  <h3 className="text-black font-black text-lg mb-8">GamsGo Products & Services</h3>
                  <div className="space-y-8">
                    {[
                      { icon: Clapperboard, title: "Streaming Shares", sub: "Shared Netflix, Disney+ and Crunchyroll profiles." },
                      { icon: Music, title: "Music Shares", sub: "Shared Spotify and YouTube Premium plans." },
                      { icon: Palette, title: "Software Shares", sub: "Shared Adobe subscription plans." },
                      { icon: Users2, title: "Marketplace Access", sub: "Buyer and seller matching for subscription slots." },
                    ].map((item, i) => (
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
              <div className="prose max-w-none text-justify">
                <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                  GamsGo Discount Codes, Coupon Codes & Shared Subscription Deals 2026
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
                        ["Premium AI & Subscription Deals", "Save Up to 85%", "All Users", "Selected AI, gaming and premium services", "AI & subscriptions"],
                        ["ChatGPT GPT-5.6 Sol", "$5/Month", "All Users", "Includes DALL-E 3, Canva, Data Analyst", "ChatGPT"],
                        ["Cursor Pro & Pro+", "From $17.99/Month", "All Users", "Unlimited code completion", "Cursor"],
                        ["Roblox Robux", "From $7.20", "All Users", "Fast delivery", "Roblox Robux"],
                        ["Pokémon GO Level 40 Account", "$73.90", "All Users", "Full account access after purchase", "Pokémon GO"],
                        ["Suno Pro AI Music", "$4.99/Month", "All Users", "625 Suno credits monthly", "Suno"],
                        ["CapCut Pro", "$7.49/Month", "All Users", "4K, HDR and AI-powered editing tools", "CapCut"],
                        ["SEMrush Guru", "$7.99 for 1 Month", "All Users", "SEO and digital marketing tools", "SEMrush"],
                        ["Perplexity AI Pro", "From $2.00", "All Users", "Shared Account or Full Access options", "Perplexity AI"],
                        ["Manus AI", "From $3.99/Day", "All Users", "Credits for coding, research and automation", "Manus AI"],
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

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <p>
                    Looking for the latest <strong>GamsGo discount codes and coupon codes</strong>? At Couponsbit, we help shoppers find Netflix sharing offers, Spotify Premium deals, Disney+ picks and YouTube Premium offers.
                  </p>
                  <p>
                    Whether you're looking to save on streaming or software subscriptions, GamsGo offers a range of shared-access options. Before you sign up, check Couponsbit for the latest GamsGo offers.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Know More About GamsGo</h3>
                    <p>
                      GamsGo is a subscription-sharing marketplace that connects users to shared slots on family and multi-user plans for popular streaming and software services.
                    </p>
                    <p>
                      With shared access across services like Netflix, Spotify, Disney+, YouTube Premium, Adobe and Crunchyroll, GamsGo serves shoppers looking to reduce subscription costs.
                    </p>
                    <p>
                      At Couponsbit, we help shoppers discover the latest GamsGo offers, streaming picks and subscription highlights in one place.
                    </p>
                  </div>

                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use GamsGo via Couponsbit</h3>
                    <div className="space-y-6">
                      {[
                        "Step 1: Browse Available GamsGo Offers — Visit the GamsGo page on Couponsbit and explore the latest offers.",
                        "Step 2: Select Your Preferred Offer — Choose the offer that best fits the subscription you need.",
                        "Step 3: Click Get Deal — You'll be taken directly to the relevant GamsGo page.",
                        "Step 4: Browse Available Plans — Explore Netflix, Spotify, Disney+, YouTube Premium, Adobe or Crunchyroll sharing.",
                        "Step 5: Check Plan Details — Review the shared-access terms for your selected subscription.",
                        "Step 6: Complete Your Purchase — Confirm your shared subscription slot on GamsGo.",
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                          <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save at GamsGo</h3>
                    <p><strong>Check Couponsbit Before Signing Up:</strong> Always visit Couponsbit before signing up to see the latest GamsGo offers.</p>
                    <p><strong>Compare Subscription Plans:</strong> Different services can offer different levels of shared savings.</p>
                    <p><strong>Check Plan Terms:</strong> Review shared-access terms before completing a purchase.</p>
                    <p><strong>Bundle Multiple Services:</strong> Sharing multiple subscriptions can add up to bigger overall savings.</p>
                    <p><strong>Check Availability Regularly:</strong> Shared slots and offers can update frequently.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose GamsGo?</h3>
                    <p><strong>Wide Service Range:</strong> Streaming and software subscriptions under one marketplace.</p>
                    <p><strong>Cost-Conscious Shopping:</strong> Shared-access options designed to reduce subscription costs.</p>
                    <p><strong>Multiple Categories:</strong> Streaming, music and creative software all in one place.</p>
                    <p><strong>Established Marketplace:</strong> A recognized name in subscription sharing.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for GamsGo Deals?</h3>
                    <p><strong>Curated GamsGo Offers:</strong> We regularly review available GamsGo offers to help users discover current promotions.</p>
                    <p><strong>Convenient Browsing:</strong> Find streaming picks, music deals and software highlights in one place.</p>
                    <p><strong>Completely Free:</strong> Couponsbit is free to use and helps customers save across software, home, electronics and more.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More on Your Next Subscription</h3>
                    <p>Whether you're signing up for Netflix, Spotify, Disney+, or another supported service, GamsGo offers a range of shared-access options to explore.</p>
                    <p>Before your next sign-up, check Couponsbit to explore the latest GamsGo offers and updates.</p>
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
                  <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
                  {[
                    { q: "What is GamsGo?", a: "GamsGo is a subscription-sharing marketplace where users can access shared slots on family and multi-user plans for services like Netflix, Spotify, Disney+, YouTube Premium, Adobe and Crunchyroll." },
                    { q: "Does GamsGo offer discount codes?", a: "Yes. GamsGo runs promotions such as Spotify Premium deals and Adobe subscription deals." },
                    { q: "Where can I find GamsGo discount codes?", a: "You can find the latest GamsGo discount codes and offers on Couponsbit." },
                    { q: "What subscriptions can I share through GamsGo?", a: "GamsGo offers shared access to services including Netflix, Spotify, Disney+, YouTube Premium, Adobe and Crunchyroll." },
                    { q: "How does subscription sharing work on GamsGo?", a: "GamsGo connects buyers with sellers offering individual profiles or slots within multi-user subscription plans at a shared cost." },
                    { q: "Is Couponsbit free to use?", a: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers." },
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular GamsGo Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Netflix Sharing", "Spotify Premium", "Disney+ Sharing", "GamsGo Discount Code", "YouTube Premium", "Adobe Sharing", "Crunchyroll Sharing", "Subscription Deals"].map(tag => (
                      <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top GamsGo Deals</h3>
                  <div className="space-y-6">
                    {DEALS.map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">G</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop GamsGo: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
