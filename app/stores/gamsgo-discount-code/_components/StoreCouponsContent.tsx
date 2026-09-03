"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent, Globe, Calendar, Sparkles,
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

const STORE_URL = "http://gamsgo.sjv.io/c/4303217/3806046/49319?subId1=1015";

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
                      Discover verified GamsGo discount codes and promo codes to save up to 85% on premium AI tools, software, gaming services, and subscriptions. Enjoy discounted access to ChatGPT, Cursor Pro, Suno Pro, CapCut Pro, Perplexity AI, SEMrush Guru, Roblox Robux, Manus AI, and more.
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788436259/18_qoqyru.webp" alt="GamsGo Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h3 className="text-black font-black text-lg mb-6">GamsGo Delivery & Product Access</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Delivery depends on the type of digital product you purchase.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Some products are delivered through digital codes, while others may involve account credentials or direct top-up services.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    GamsGo's marketplace currently shows guaranteed delivery times on product listings, with some products marked for instant delivery and others providing longer delivery windows.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For direct top-ups, delivery is tied to the player's UID or Player ID rather than a traditional redemption code.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Always read the product description before ordering so you know how your purchase will be delivered.

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
  <h3 className="text-black font-black text-lg mb-6">
    How to Save More on GamsGo
  </h3>
  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 text-justify">
    A promo code isn't the only way to improve your savings.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Search,
        title: "Compare Product Listings",
        sub: "Some categories contain multiple listings for similar products. Compare the product details, access type, duration, delivery time, warranty, and seller information rather than choosing based only on the headline offer."
      },
      {
        icon: Globe,
        title: "Check the Region",
        sub: "A digital product may be restricted to a particular country or currency. Choosing the wrong region can make a product unsuitable for your account."
      },
      {
        icon: Calendar,
        title: "Look for Longer Durations",
        sub: "If you already know that you'll use a service for several months, compare longer-duration products with monthly options."
      },
      {
        icon: Sparkles,
        title: "Check Current Promotions",
        sub: "GamsGo regularly features discounted products and special campaigns, so check the marketplace before purchasing."
      },
      {
        icon: Tag,
        title: "Use a GamsGo Promo Code",
        sub: "After finding the appropriate product, check whether a current GamsGo promo code can provide an additional saving."
      },
      {
        icon: ShieldCheck,
        title: "Review the Warranty",
        sub: "For account-based products, check the warranty period and support terms before placing an order."
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
      
      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          GamsGo Promo Code, Discount Code & Coupon Deals
        </h2>

        <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[850px] border-collapse text-left">
      <thead>
        <tr className="bg-[#056BFA]">
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Offer</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Discount / Price</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Category / Tag</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Key Features &amp; Details</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Applicable On</th>
        </tr>
      </thead>
      <tbody className="text-[14px] font-bold text-gray-600">
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            GamsGo – Premium AI &amp; Subscription Deals 🎁
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Save Up to 85% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            SALE
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Flexible subscription options at lower prices; tools for coding, content, research, and video
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            ChatGPT, Cursor, Suno, CapCut, Perplexity AI, etc.
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            GamsGo – ChatGPT GPT-5.6 Sol 🤖
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $5.00 / Month
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            AI
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Advanced execution, coding, DALL-E 3, Canva, and Data Analyst tools
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            ChatGPT Premium features
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            GamsGo – Cursor Pro &amp; Pro+ 💻
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $17.99 / Month
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            DEV
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Unlimited code completion, AI bug fixing, and Agent Proxy features
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Cursor IDE development workflows
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            GamsGo – Roblox Robux 🎮
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Starting at $7.20
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            GAME
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Fast delivery of gaming currency for items, upgrades, and experiences
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Roblox account balance top-up
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            GamsGo – Pokémon GO Level 40 Account ⚡
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $73.90 Flat
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            GAME
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Fresh starter account with full access; skip early gameplay grind
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Pokémon GO gameplay
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            GamsGo – Suno Pro AI Music 🎵
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $4.99 / Month
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            MUSIC
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Official Suno Pro plan with 625 monthly credits and up to 10 simultaneous jobs
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Suno v5.5 AI music generation
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            GamsGo – CapCut Pro 🎬
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $7.49 / Month
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            EDIT
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Premium assets, 4K/HDR rendering, AI upscaling, and script-to-video tools
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            CapCut Pro video editing
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            GamsGo – SEMrush Guru 📊
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            $7.99 / 1 Month
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            SEO
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Complete SEO suite: keyword research, competitor analysis, backlink tracking
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            SEMrush Guru platform
          </td>
        </tr>

        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            GamsGo – Perplexity AI Pro 🔎
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $2.00
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            AI
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Shared Account or Full Access options for advanced AI search and research
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Perplexity AI Pro search engine
          </td>
        </tr>

        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            GamsGo – Manus AI 🚀
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $3.99 / Day
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            AI
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Fast multi-tasking credits for automation, web scraping, slides, and coding
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Manus AI workflows &amp; task automation
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        {/* Expandable Content Area */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative transition-all", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <div className="space-y-4">
            <p>
              Looking for cheaper ways to access digital subscriptions, gaming products, gift cards, or online services? Before completing your next purchase, checking for a GamsGo promo code can help you find an additional way to save.
            </p>
            <p>
              GamsGo is a digital marketplace offering a wide range of products across digital subscriptions, game accounts, game top-ups, gift cards, game currency, and game items. Its current marketplace includes entertainment services, AI tools, software subscriptions, gaming memberships, digital gift cards, and in-game products.
            </p>
            <p>
              Instead of visiting separate websites for every digital service you use, GamsGo brings multiple categories together on one platform. Depending on what you're looking for, you can explore subscriptions such as Netflix, YouTube, Disney+, Crunchyroll, Spotify, AI platforms, VPN services, software, Xbox and PlayStation products, gift cards, and gaming top-ups.
            </p>
            <p>
              Before you place an order, check CouponsBit for an available GamsGo promo code, discount code, or coupon offer and review the terms that apply to your selected product.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a GamsGo Promo Code and Save</h3>
            <p>
              Digital subscriptions and gaming purchases can quickly add up when you use several services at once. A streaming subscription here, an AI tool there, a gaming membership, and occasional game purchases can become a significant part of your monthly digital spending.
            </p>
            <p>
              GamsGo gives shoppers a marketplace where they can compare different digital products and services in one place.
            </p>
            <p>Depending on what's currently available, you can find:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Streaming subscriptions</li>
              <li>Music subscriptions</li>
              <li>AI subscriptions</li>
              <li>Software memberships</li>
              <li>VPN services</li>
              <li>Sports subscriptions</li>
              <li>Gaming memberships</li>
              <li>Game accounts</li>
              <li>Gift cards</li>
              <li>Game currency</li>
              <li>Game items</li>
              <li>Direct game top-ups</li>
            </ul>
            <p>
              A GamsGo discount code may provide an additional saving on an eligible purchase, although the availability, discount amount, and applicable products can change. That's why it's worth checking CouponsBit before you buy.
            </p>
          </div>

          <div className={cn("text-gray-600 space-y-8 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  {/* Header & Overview */}
  <div className="space-y-4">
    <h2 className="text-2xl font-black text-[#056bfa]">What Can You Buy on GamsGo?</h2>
    <p>
      GamsGo's marketplace covers several major categories, making it more than just a subscription website.
    </p>
    <p>
      Its current catalog includes SVOD and entertainment subscriptions, music services, AI tools, sports services, software, gaming products, gift cards, game coins, and game items.
    </p>
    <p>Let's take a closer look at the main categories.</p>
  </div>

  {/* GamsGo Streaming Subscriptions */}
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-gray-900">GamsGo Streaming Subscriptions</h3>
    <p>
      Streaming is one of the largest categories available on GamsGo. The marketplace currently lists services including:
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 my-4">
      {[
        "Netflix", "Prime Video", "Disney+", "YouTube", 
        "Crunchyroll", "Peacock", "ViX", "NBA League Pass", 
        "Viki", "Mubi", "Plex", "Shahid", "OSN+"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-semibold text-gray-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p className="text-sm text-gray-500 italic">
      * The exact products available can vary, so check the GamsGo marketplace for the latest listings.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h4 className="font-bold text-[#056bfa]">Netflix</h4>
        <p className="text-sm">
          Netflix is one of the most recognizable streaming services available through the marketplace. Depending on the listing, shoppers may find different account types, plans, durations, or access arrangements. Always read the individual product description carefully to understand exactly what you're purchasing.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h4 className="font-bold text-[#056bfa]">YouTube</h4>
        <p className="text-sm">
          YouTube-related subscriptions are also available through GamsGo, making the platform an option for users looking for digital video and entertainment services.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h4 className="font-bold text-[#056bfa]">Disney+</h4>
        <p className="text-sm">
          Disney+ is another entertainment subscription listed on GamsGo. If you're comparing digital subscriptions, look carefully at the duration, account type, region, and warranty information attached to each listing.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <h4 className="font-bold text-[#056bfa]">Crunchyroll</h4>
        <p className="text-sm">
          Anime fans can explore Crunchyroll subscription products on GamsGo. This can be particularly useful for shoppers who want access to a dedicated anime streaming service rather than a general entertainment platform.
        </p>
      </div>
    </div>

    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2 mt-4">
      <h4 className="font-bold text-gray-900">Sports Streaming</h4>
      <p className="text-sm text-gray-700">
        GamsGo also lists sports-oriented services such as NBA League Pass, DAZN Sports, ViX, Shahid, Peacock, and other sports or entertainment platforms. Availability varies by region and product, so verify the applicable territory before buying.
      </p>
    </div>
  </div>

  {/* GamsGo Music Subscriptions */}
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-gray-900">GamsGo Music Subscriptions</h3>
    <p>
      Music is another major category on GamsGo. The marketplace currently lists services such as:
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
      {["YouTube Music", "Apple Music", "Qobuz", "Deezer", "Anghami"].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-semibold text-gray-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p>
      These products can appeal to users who want access to music streaming without purchasing individual albums or songs. When selecting a music subscription, check the plan duration, account type, region, and whether the product provides individual or shared access.
    </p>
  </div>

  {/* GamsGo AI Subscriptions */}
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-gray-900">GamsGo AI Subscriptions</h3>
    <p>
      AI tools have become an increasingly important part of digital subscriptions, and GamsGo has expanded its marketplace into this category.
    </p>
    <div className="flex flex-wrap gap-2 my-4">
      {[
        "ChatGPT", "Claude", "Gemini", "Grok", "Midjourney", "Perplexity",
        "Cursor", "GitHub Copilot", "Canva", "DeepL", "ElevenLabs",
        "Leonardo", "Runway", "Suno", "Manus", "Lovable", "Figma"
      ].map((tool, idx) => (
        <span key={idx} className="bg-blue-50 text-[#056bfa] text-xs font-bold px-3 py-1.5 rounded-lg border border-blue-100">
          {tool}
        </span>
      ))}
    </div>
    <p className="text-sm text-gray-700 font-medium">
      This category can be particularly useful for students, creators, developers, designers, marketers, writers, and professionals who regularly use AI-powered tools.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">AI Writing & Research Tools</h5>
        <p className="text-sm">Products such as ChatGPT, Claude, Gemini, Perplexity, and other AI platforms can support research, writing, brainstorming, coding, and productivity workflows.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">AI Image & Video Tools</h5>
        <p className="text-sm">Tools such as Midjourney, Runway, Leonardo, and other creative platforms can be useful for image generation, video creation, design, and visual experimentation.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">AI Music Tools</h5>
        <p className="text-sm">Platforms such as Suno provide AI-assisted music creation and can be relevant for creators experimenting with songs, audio, and other musical projects.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">AI Developer Tools</h5>
        <p className="text-sm">Developers can explore products such as GitHub Copilot, Cursor, and other coding-focused tools listed in GamsGo's AI marketplace.</p>
      </div>
    </div>
    <p className="text-xs bg-amber-50 text-amber-800 p-3 rounded-xl border border-amber-200 font-medium">
      Before buying an AI subscription, check exactly what access the listing provides. Features can differ between plans and account types.
    </p>
  </div>

  {/* GamsGo Software & Productivity Subscriptions */}
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-gray-900">GamsGo Software & Productivity Subscriptions</h3>
    <p>
      GamsGo also lists software and productivity services outside the AI category.
    </p>
    <div className="flex flex-wrap gap-2 my-4">
      {[
        "Microsoft Office", "Apple services", "ExpressVPN", "Surfshark", 
        "Zoom", "TradingView", "Proton VPN", "Discord", "LinkedIn", 
        "Notion", "Figma", "Autodesk", "Replit", "Canva"
      ].map((item, idx) => (
        <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md">
          {item}
        </span>
      ))}
    </div>
    <p>
      This gives professionals, students, creators, and businesses another place to explore digital tools.
    </p>
  </div>

  {/* GamsGo VPN Services */}
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-gray-900">GamsGo VPN Services</h3>
    <p>
      Online privacy and secure browsing tools are another category available through the marketplace. Current listings include VPN services such as ExpressVPN, Surfshark, and Proton VPN.
    </p>
    <p className="font-semibold text-gray-900">When comparing a VPN subscription, consider:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-2">
      {[
        "Subscription duration", "Number of supported devices", "Server availability",
        "Supported platforms", "Account type", "Region", "Renewal conditions"
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>

  {/* GamsGo Gaming Products */}
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-gray-900">GamsGo Gaming Products</h3>
    <p>
      Gaming is one of GamsGo's largest categories. The platform offers products related to major gaming ecosystems including:
    </p>
    <div className="flex flex-wrap gap-2 my-4">
      {[
        "Xbox", "PlayStation", "Nintendo", "Roblox", "Steam", "Razer",
        "Valorant", "Free Fire", "PUBG", "Genshin Impact", "Fortnite",
        "Minecraft", "EA SPORTS FC", "Call of Duty", "Pokémon GO",
        "Diablo", "Elden Ring", "Path of Exile"
      ].map((game, idx) => (
        <span key={idx} className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-md border border-indigo-100">
          {game}
        </span>
      ))}
    </div>
    <p>
      Instead of purchasing every type of gaming product separately, shoppers can explore memberships, gift cards, top-ups, game currency, and digital items through the marketplace.
    </p>

    {/* Top-Ups & Direct Top-Up */}
    <div className="space-y-4 mt-6">
      <h4 className="text-lg font-bold text-gray-900">GamsGo Game Top-Ups</h4>
      <p>
        Game top-ups allow players to add currency, passes, or other eligible content to their gaming accounts across platforms like Roblox, Free Fire, Valorant, PUBG Mobile, Mobile Legends, Genshin Impact, Zenless Zone Zero, Honkai: Star Rail, Pokémon GO, Call of Duty, Xbox, PlayStation, Nintendo, Google Play, and Razer.
      </p>

      <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-3">
        <h5 className="font-bold text-[#056bfa]">Direct Game Top-Up</h5>
        <p className="text-sm">
          Rather than purchasing a traditional gift card or redeem code, a direct top-up can send the selected game currency or item directly to the player's account using a UID or Player ID.
        </p>
        <p className="text-sm font-semibold text-gray-800">This can be useful for players who:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">✓ Have trouble using local payment methods</div>
          <div className="flex items-center gap-2">✓ Want to recharge another person's account</div>
          <div className="flex items-center gap-2">✓ Don't want to share their account password</div>
          <div className="flex items-center gap-2">✓ Need game currency or passes</div>
          <div className="flex items-center gap-2">✓ Prefer direct account crediting</div>
        </div>
      </div>
    </div>

    {/* Game Currency */}
    <div className="space-y-4 mt-6">
      <h4 className="text-lg font-bold text-gray-900">GamsGo Game Currency</h4>
      <p>
        Players can find virtual currency and other in-game balances for games such as Roblox, EA SPORTS FC, Path of Exile, Diablo IV, Elden Ring, Albion Online, Pokémon GO, Old School RuneScape, Final Fantasy XIV, and Delta Force.
      </p>
      <p className="text-sm text-gray-600">
        Game currency can be used for eligible purchases within supported games, such as in-game items, passes, upgrades, or other virtual content. Always verify the game, platform, region, and currency before ordering.
      </p>
    </div>

    {/* Game Items */}
    <div className="space-y-4 mt-6">
      <h4 className="text-lg font-bold text-gray-900">GamsGo Game Items</h4>
      <p>
        GamsGo's marketplace also includes individual game items for titles like Fortnite, Roblox, Minecraft, Pokémon GO, Genshin Impact, Valorant, Free Fire, GTA 5, Call of Duty, League of Legends, Diablo IV, Elden Ring, and others.
      </p>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
        <p className="font-semibold text-gray-900">Before purchasing, read the listing carefully to understand:</p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700 list-disc list-inside">
          <li>What the item includes</li>
          <li>Which game it belongs to</li>
          <li>Which platform is supported</li>
          <li>Whether item is account-bound</li>
          <li>Delivery method</li>
          <li>Warranty period</li>
          <li>Region restrictions</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Truncation Gradient Overlay */}
  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>


          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">GamsGo Game Accounts & PlayStation Products</h3>
            <p>
              GamsGo also operates a marketplace for gaming accounts and memberships. Its current gaming account categories include products associated with platforms such as Xbox and PlayStation, alongside other gaming services.
            </p>
            <p>
              For example, GamsGo's PlayStation marketplace currently includes different PlayStation Plus tiers, durations, and account types, including Essential, Extra, and Premium listings.
            </p>
            <p>
              PlayStation users can find several types of digital products on GamsGo, including PlayStation Plus, PlayStation gift cards, PlayStation-related game products, digital content, and other services. Because account products can have different access arrangements, shoppers should pay close attention to whether a listing offers full access or shared access and review its warranty details before purchasing.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">GamsGo Xbox Products & Gift Cards</h3>
            <p>
              Xbox shoppers can explore Xbox gift cards and Xbox Game Pass-related products. The current Xbox marketplace includes Game Pass Essential, Premium, Ultimate, and PC-related listings, with different durations and account types depending on the seller and product.
            </p>
            <p>
              Gift cards provide another way to purchase digital products while giving you control over how the balance is used. GamsGo currently lists gift cards for platforms and brands including PlayStation, Xbox, Apple, Google Play, Nintendo, Razer, Riot, and other gaming and digital services.
            </p>
            <p>
              However, gift cards are often region-specific. Always confirm that the card's currency and country match the account where you intend to redeem it before purchasing.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">GamsGo Deals & Offers</h3>
            <p>
              One of the biggest reasons shoppers search for a GamsGo promo code is the opportunity to combine marketplace pricing with additional promotions. GamsGo frequently features discounted digital products across its marketplace, with exact discounts varying by product, seller, category, and campaign.
            </p>
            <p>
              You may find offers on streaming subscriptions, AI tools, gaming memberships, gift cards, game currency, game items, software, VPN services, and gaming top-ups. GamsGo also promotes special campaigns around major shopping and holiday periods. Always check the current listing and promotion terms before purchasing.
            </p>
          </div>

          {/* How-To Steps Box */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a GamsGo Promo Code</h3>
            <div className="space-y-6">
              {[
                { title: "Step 1: Visit CouponsBit", text: "Start by checking CouponsBit for the latest GamsGo promo codes and available offers." },
                { title: "Step 2: Select an Offer", text: "Choose the promotion that best matches the digital product you're planning to purchase." },
                { title: "Step 3: Read the Conditions", text: "Check whether the offer has any restrictions involving products, categories, minimum order values, account status, or expiration dates." },
                { title: "Step 4: Copy the Promo Code", text: "Copy the GamsGo promo code exactly as provided." },
                { title: "Step 5: Choose Your Product", text: "Browse GamsGo and select your subscription, gift card, game top-up, game item, account, or other digital product." },
                { title: "Step 6: Add the Product to Your Order", text: "Select the correct duration, region, currency, platform, or account type where applicable." },
                { title: "Step 7: Apply the Code", text: "Enter your promotional code in the appropriate field during the checkout process." },
                { title: "Step 8: Check Your Final Total", text: "Confirm that the promotion has been applied before completing payment." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 italic">
                    {i + 1}
                  </div>
                  <div className="mt-1">
                    <strong className="text-gray-900 font-black block">{step.title}</strong>
                    <p className="text-gray-700 font-bold leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Save More & Things to Check Before Buying</h3>
            <p>A promo code isn't the only way to improve your savings on GamsGo. Consider these essential tips before checking out:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Compare Product Listings:</strong> Compare product details, access type, duration, delivery time, warranty, and seller information rather than choosing based only on headline offers.</li>
              <li><strong>Check the Region:</strong> Digital products may be restricted to a particular country or currency. Choosing the wrong region can make a product unsuitable for your account.</li>
              <li><strong>Look for Longer Durations:</strong> If you know you'll use a service for several months, compare longer-duration products with monthly options for better rates.</li>
              <li><strong>Check Account Type & Delivery:</strong> Confirm whether account products are shared or full access. Also check guaranteed delivery times—some items deliver instantly, while direct top-ups rely on your player UID/ID.</li>
              <li><strong>Review the Warranty:</strong> For eligible products, review the warranty period and support terms on the listing prior to ordering.</li>
            </ul>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"}{" "}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQs */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About GamsGo Promo Codes</h3>
          {[
            { q: "What is a GamsGo promo code?", a: "A GamsGo promo code is a promotional code that may provide a discount or other offer on an eligible purchase. The exact terms depend on the promotion." },
            { q: "Where can I find a GamsGo promo code?", a: "You can check CouponsBit for available GamsGo promo codes, discount codes, coupon offers, and deals before completing your purchase." },
            { q: "What can I buy on GamsGo?", a: "GamsGo offers digital subscriptions, game accounts, gift cards, game top-ups, game currency, and game items. Its marketplace includes entertainment, music, AI, software, sports, gaming, and other digital products." },
            { q: "Does GamsGo sell Netflix subscriptions?", a: "Netflix is currently listed in GamsGo's digital subscription marketplace. Product type, duration, account access, region, and other conditions can vary by listing." },
            { q: "Does GamsGo sell AI subscriptions?", a: "Yes. GamsGo currently lists AI-related services including ChatGPT, Claude, Gemini, Grok, Midjourney, Perplexity, Cursor, GitHub Copilot, Canva, and other AI tools." },
            { q: "Does GamsGo sell game top-ups?", a: "Yes. GamsGo has a dedicated top-up center covering games and platforms such as Roblox, Free Fire, Valorant, PUBG Mobile, Genshin Impact, Pokémon GO, Xbox, PlayStation, Nintendo, and others." },
            { q: "What is a GamsGo direct top-up?", a: "A direct top-up allows eligible game currency or items to be credited directly to a game account using information such as a UID or Player ID rather than a traditional gift card or redeem code." },
            { q: "Does GamsGo sell gift cards?", a: "Yes. GamsGo currently offers gift cards associated with platforms including PlayStation, Xbox, Apple, Nintendo, Google Play, Razer, and others." },
            { q: "Can I buy PlayStation Plus on GamsGo?", a: "Yes. GamsGo currently lists PlayStation Plus products across Essential, Extra, and Premium tiers, with different durations and access arrangements." },
            { q: "Can I buy Xbox Game Pass on GamsGo?", a: "Yes. The current GamsGo marketplace includes Xbox Game Pass-related products across different plans and durations." },
            { q: "Are GamsGo products region-specific?", a: "Some are. Digital gift cards and subscriptions may be restricted by country, currency, platform, or account region. Always check the individual product listing before purchasing." },
            { q: "Does GamsGo offer instant delivery?", a: "Some products are listed with instant delivery, while others have longer guaranteed delivery windows. The delivery time is shown on the individual product listing." },
            { q: "Can I use a GamsGo discount code on every product?", a: "Not necessarily. Promotional codes can have individual terms and may apply only to selected products, categories, or campaigns. Check the promotion details before ordering." },
            { q: "Does GamsGo have gaming products?", a: "Yes. Gaming is a major part of the marketplace, with game accounts, top-ups, gift cards, game currency, and game items available across numerous titles and platforms." }
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
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Area */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular GamsGo Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["GamsGo Promo Code", "Streaming Deals", "AI Subscriptions", "PS Plus Offers", "Xbox Game Pass", "Gift Cards", "Direct Top-Ups", "Game Accounts"].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
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
