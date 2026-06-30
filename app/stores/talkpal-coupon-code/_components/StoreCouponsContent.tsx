"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Clock, 
  Copy, 
  ChevronDown, 
  Package, 
  Truck, 
  Shield, 
  Laptop, 
  Shirt, 
  Home, 
  Sparkles, 
  BookOpen, 
  CheckCircle,
  X,
  ArrowRight,
  Plane,
  MessageSquareText, Mic, BookOpenText, Languages, UserCheck, Lock, CalendarOff,
  Tv,
  Code,Server, Globe, Cloud, LayoutGrid, Cpu, Search, LayoutTemplate, ShoppingBag, Mail,
  Zap
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Types ---
interface Coupon {
  id: string;
  discount: string;
  label: string;
  badge?: "Best Offer" | "Popular" | "Trending";
  title: string;
  heading: string;
  sub: string;
  description: string;
  usedCount: string;
  expiresIn: string;
  code: string;
}

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

// --- Data ---
const COUPONS: Coupon[] = [
  {
    id: "c1",
    discount: "60%",
    label: "UP TO",
    badge: "Best Offer",
    title: "Up to 60% OFF on Top Categories",
    heading: "Up to 60% OFF",
    sub: "Top Categories",
    description: "Shop for electronics, fashion, home & more and get up to 60% discount on selected items.",
    usedCount: "112k",
    expiresIn: "2 days",
    code: "AMAZON60"
  },
  {
    id: "c2",
    discount: "50%",
    label: "FLAT",
    badge: "Popular",
    title: "Flat 50% OFF on Electronics",
    heading: "Flat 50% OFF",
    sub: "Electronics",
    description: "Get flat 50% off on best selling electronics & accessories.",
    usedCount: "95k",
    expiresIn: "3 days",
    code: "ELEC50"
  },
  {
    id: "c3",
    discount: "30%",
    label: "FLAT",
    badge: "Trending",
    title: "Flat 30% OFF on Fashion",
    heading: "Flat 30% OFF",
    sub: "Fashion",
    description: "Save big on clothing, footwear, watches & more.",
    usedCount: "88k",
    expiresIn: "1 day",
    code: "FASHION30"
  },
  {
    id: "c4",
    discount: "10%",
    label: "EXTRA",
    title: "Extra 10% OFF on Prepaid Orders",
    heading: "Extra 10% OFF",
    sub: "Prepaid Orders",
    description: "Pay using UPI, Cards, Net Banking & get extra 10% off.",
    usedCount: "76k",
    expiresIn: "2 days",
    code: "PREPAID10"
  },
  {
    id: "c5",
    discount: "FREE",
    label: "DELIVERY",
    title: "Free Delivery on First Order",
    heading: "Free Delivery",
    sub: "On First Order",
    description: "Get FREE delivery on your first order on Talkpal.AI.",
    usedCount: "65k",
    expiresIn: "5 days",
    code: "FREESHIP"
  },
  {
    id: "c6",
    discount: "₹200",
    label: "FLAT",
    title: "Get ₹200 OFF on Min. Order ₹999",
    heading: "₹200 OFF",
    sub: "On Min. Order ₹999",
    description: "Use code and get flat ₹200 off on minimum order of ₹999.",
    usedCount: "54k",
    expiresIn: "3 days",
    code: "SAVE200"
  }
];

const RELATED_STORES: StoreItem[] = [
  { name: "StubHub",        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp",        dealText: "Up to 15% OFF", href: "/stores/stubhub-coupon-code" },
  { name: "Viagogo",        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/viagogo-coupon-code_t65aol.webp",        dealText: "Up to 10% OFF", href: "/stores/viagogo-coupon-code" },
  { name: "Driffle",        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp",        dealText: "Up to 70% OFF", href: "/stores/driffle-coupon-code" },
  { name: "Reolink",        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp",        dealText: "Up to 30% OFF", href: "/stores/reolink-coupon-code" },
  { name: "Lyca Mobile",    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/lyca-mobile-coupon-code_svvddg.webp",    dealText: "Up to 20% OFF", href: "/stores/lyca-mobile-coupon-code" },
  { name: "Rayneo",         logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/reyneo-coupon-code_q3crak.webp",         dealText: "Up to 30% OFF", href: "/stores/rayneo-coupon-code" },
];

export default function TalkpalCouponsContent() {
  const [activeTab, setActiveTab] = useState<"All" | "Coupons" | "Deals">("All");
  const [activeSlide, setActiveSlide] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [expandedCoupon, setExpandedCoupon] = useState<string | null>(null);
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [revealedCodes, setRevealedCodes] = useState<Set<string>>(new Set());
  const [open, setOpen] = useState(false);

  // Slide auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setToastCode(code);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const toggleReveal = (id: string) => {
    const next = new Set(revealedCodes);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setRevealedCodes(next);
  };

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

      {/* Main Content Start */}
      <main>
        {/* Section 1: Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Talkpal.AI</span>
            </nav>
          </div>
        </div>

        {/* Section 2: Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left: Store Info */}
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href="https://talkpalinc.sjv.io/c/4303217/2584077/30644?subId1=1015" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1782288847/talkpal-coupon-code_gozaoz.webp" alt="Talkpal.AI" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Talkpal.AI</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px]">
                      Talkpal AI helps you learn languages through AI-powered conversations. Explore verified deals, save up to 69% OFF premium plans and start free.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Tag, val: "2", label: "Coupons" },
                    { icon: Percent, val: "2.5k", label: "Deals" },
                    { icon: Users, val: "10M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <stat.icon className="w-4.5 h-4.5 text-[#056bfa]" />
                       <div>
                         <p className="text-black font-black text-xs leading-none">{stat.val}</p>
                         <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">{stat.label}</p>
                       </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right: Featured Banner Slider */}
              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  {/* Slide 1 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 0 ? 1 : 0 }}>
                    <a href="https://talkpalinc.sjv.io/c/4303217/2584077/30644?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1782383079/talkpalai-voucher-code_c2afdz.webp" alt="Talkpal.AI Discount Code" width={800} height={350} className="w-full h-full object-cover" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://talkpalinc.sjv.io/c/4303217/2584077/30644?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1782383079/talkpalai-promo-code_giuvob.webp" alt="Talkpal.AI Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://talkpalinc.sjv.io/c/4303217/2584077/30644?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1782383079/talkpalai-voucher-code_c2afdz.webp" alt="Talkpal.AI Voucher Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Controls */}
                  <button onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5 text-white rotate-180" />
                  </button>
                  <button onClick={() => setActiveSlide((prev) => (prev + 1) % 3)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {[0, 1, 2].map(i => (
                      <button key={i} onClick={() => setActiveSlide(i)} className={cn("w-1.5 h-1.5 rounded-full transition-all", activeSlide === i ? "bg-white w-4" : "bg-white/40")} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Trust Bar */}
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

        {/* Section 4: Coupons Section + Right Sidebar */}
        <section className="py-6 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Left Column: Coupons */}
              <div className="lg:w-[65%] lg:sticky lg:top-24 lg:self-start">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Talkpal.AI Coupon Codes & Offers</h2>
                  
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Premium 24 Months — highlighted */}
                  <div className="bg-white border-2 border-[#056bfa] rounded-[24px] p-6 shadow-md relative">
                    <span className="absolute -top-3 right-6 bg-green-100 text-green-700 text-[11px] font-black px-3 py-1 rounded-full">SAVE 69%*</span>
                    <p className="text-red-600 font-bold text-[12px] uppercase tracking-wide mb-1">14 Day Free Trial</p>
                    <p className="text-black font-extrabold text-lg mb-1">Premium 24 Months</p>
                    <p className="text-black font-black text-2xl">$4.29 <span className="text-gray-500 font-bold text-sm">/ month</span></p>
                  </div>

                  {/* Premium 12 Months — standard */}
                  <div className="bg-white border border-gray-200 rounded-[24px] p-6 shadow-sm relative">
                    <span className="absolute -top-3 right-6 bg-green-100 text-green-700 text-[11px] font-black px-3 py-1 rounded-full">SAVE 50%*</span>
                    <p className="text-red-600 font-bold text-[12px] uppercase tracking-wide mb-1">14 Day Free Trial</p>
                    <p className="text-black font-extrabold text-lg mb-1">Premium 12 Months</p>
                    <p className="text-black font-black text-2xl">$6.86 <span className="text-gray-500 font-bold text-sm">/ month</span></p>
                  </div>
                </div>

                  <p className="text-center mb-8">
                                  <a href="https://openartai.pxf.io/c/4303217/3106413/38572?subId1=1015" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-bold text-sm underline">See more plans</a>
                                </p>
                
                                {/* Trust Badges */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                                  {[
                                    { icon: Lock, title: "No payment today", sub: "Enjoy the free 14-day trial." },
                                    { icon: CalendarOff, title: "Cancel anytime", sub: "You can easily cancel anytime." },
                                    { icon: ShieldCheck, title: "Satisfaction guarantee", sub: "No risk on your side." }
                                  ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-3">
                                      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
                                        <item.icon className="w-5 h-5" />
                                      </div>
                                      <div>
                                        <p className="text-black font-bold text-sm leading-tight">{item.title}</p>
                                        <p className="text-gray-500 text-[12px] leading-relaxed">{item.sub}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                
                                {/* Price Comparison Banner */}
                                <div className="bg-gradient-to-r from-[#056bfa] to-[#006d9b] rounded-[24px] p-8 text-center">
                                  <h3 className="text-white font-black text-lg mb-4">What You Get With Openart.AI Premium</h3>
                                  <p className="mb-6">
                                    <span className="text-white/60 line-through text-xl font-bold mr-3">$329.50</span>
                                    <span className="text-white font-black text-3xl">$102.97</span>
                                  </p>
                                  <a href="https://openartai.pxf.io/c/4303217/3106413/38572?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Try Openart.AI Premium for $0.00" className="bg-white hover:bg-gray-100 text-[#0451c4] font-black text-base px-10 py-4 rounded-2xl shadow-md transition-all duration-300 inline-block">Try for $0.00</a>
                                </div>

                

                {/* Coupon 1 */}




              

                
              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">
                {/* About Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">About Talkpal.AI</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6">
                    Talkpal AI is an innovative language-learning platform that uses artificial intelligence to help users practice and improve their communication skills. The platform offers conversational learning experiences that allow users to engage in realistic interactions while receiving instant feedback.
                  </p>
                  <a href="https://talkpalinc.sjv.io/c/4303217/2584077/30644?subId1=1015" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Categories Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Laptop, name: "Electronics",        count: "850+", color: "text-blue-500",   href: "/categories/electronics" },
                        { icon: Plane,  name: "Travel",             count: "420+", color: "text-teal-500",   href: "/categories/travel" },
                        { icon: Tv,     name: "Entertainment",      count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Code,   name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                        { icon: Zap,    name: "Mobile & Telecom",   count: "320+", color: "text-green-500",  href: "/categories/mobile" }
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

                {/* Why Shop Card */}
              <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <div className="mb-8">
    <h3 className="text-black font-black text-lg mb-2">Features Available on Talkpal AI</h3>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Talkpal AI offers a variety of tools designed to enhance your language learning journey.
    </p>
  </div>

  <div className="space-y-8">
    {[
      {
        icon: MessageSquareText, 
        title: "AI-Powered Conversations",
        sub: "Practice real-world conversations with an intelligent AI tutor available anytime."
      },
      {
        icon: Mic, 
        title: "Pronunciation Improvement",
        sub: "Receive feedback that helps improve speaking accuracy and fluency."
      },
      {
        icon: BookOpenText, 
        title: "Vocabulary Building",
        sub: "Learn new words and phrases through interactive exercises and conversations."
      },
      {
        icon: Languages, 
        title: "Multiple Language Options",
        sub: "Access learning materials and practice sessions across various languages."
      },
      {
        icon: UserCheck, 
        title: "Personalized Learning Experience",
        sub: "Lessons can adapt to your progress and learning goals."
      },
      {
        icon: Clock, 
        title: "Flexible Learning Schedule",
        sub: "Practice whenever and wherever it suits your routine."
      }
    ].map((item, i) => (
      <div key={item.title} className="flex gap-4 items-start">
        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
          <item.icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-black font-black text-sm leading-tight mb-2">{item.title}</p>
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

        {/* Section 6: More Stores You'll Love */}
        <section className="py-20 bg-white border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-black text-black mb-10">More Stores You'll Love</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {RELATED_STORES.map((store, i) => (
                <Link 
                  key={i} 
                  href={store.href}
                  className="bg-white border border-[#f0f0f0] rounded-3xl p-6 text-center shadow-sm hover:border-[#056bfa] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="h-14 flex items-center justify-center mx-auto">
                    <img src={store.logo} alt={store.name} width={120} height={48} className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <h3 className="text-black font-black text-sm mt-5 mb-1">{store.name}</h3>
                  <p className="text-[#056bfa] font-black text-[12px] uppercase mb-4">{store.dealText}</p>
                  <span className="text-[#056bfa] font-black text-[12px] uppercase hover:underline decoration-2">View Coupons →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: SEO Text Section */}
      

       <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      
      {/* Left: Text Content */}
      <div className="prose max-w-none">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Talkpal AI Coupon Codes, Promo Codes & Language Learning Deals
        </h2>
        
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More on Language Learning with Talkpal AI Coupon Codes</h3>
          <p>
            Learning a new language has never been more accessible thanks to AI-powered educational tools. If you're looking to improve your speaking, listening, reading, or writing skills without spending a fortune, checking the latest <strong>Talkpal AI coupon codes</strong> and promo offers on CouponsBit can help you save on your subscription.
          </p>
          <p>
            Whether you're preparing for international travel, advancing your career, studying abroad, or simply exploring a new language for personal growth, Talkpal AI provides an interactive learning experience designed to fit modern lifestyles. Before subscribing, browse CouponsBit for the latest discounts and special offers to maximize your savings.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">About Talkpal AI</h3>
            
            <p>
              Designed for learners of all levels, Talkpal AI aims to make language learning more engaging, flexible, and personalized. Users can practice conversations, improve pronunciation, expand vocabulary, and build confidence through AI-driven lessons available across multiple languages.
            </p>
            <p>
              The platform is suitable for students, professionals, travelers, and anyone interested in mastering a new language at their own pace.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Learners Choose Talkpal AI</h3>
            <p><strong>Learn at Your Own Pace:</strong> Users can progress according to their individual learning style and schedule.</p>
            <p><strong>Interactive Practice Sessions:</strong> Engaging conversations help learners apply language skills in practical situations.</p>
            <p><strong>Convenient Accessibility:</strong> Available on multiple devices, making learning easy on the go.</p>
            <p><strong>Beginner to Advanced Support:</strong> Suitable for users ranging from complete beginners to advanced learners.</p>
            <p><strong>Continuous Skill Development:</strong> Regular practice opportunities help strengthen communication confidence.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Talkpal AI Coupon Code</h3>
            <p className="text-gray-700 font-bold -mt-4">Saving on your language-learning subscription is simple.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit CouponsBit — Browse the latest Talkpal AI coupon codes and promotional offers.",
                "Step 2: Choose a Deal — Select the offer that best matches your subscription plan.",
                "Step 3: Copy the Promo Code — Copy the available discount code before visiting Talkpal AI.",
                "Step 4: Select Your Plan — Choose the learning package or subscription that fits your needs.",
                "Step 5: Apply the Coupon Code — Enter the promo code during checkout if required.",
                "Step 6: Complete Your Purchase — Finish the subscription process and start learning."
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

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Tips to Save More on Talkpal AI</h3>
            <p><strong>Look for Seasonal Promotions:</strong> Major sales events often feature attractive subscription discounts.</p>
            <p><strong>Choose Longer Plans:</strong> Annual subscriptions may provide better value compared to monthly plans.</p>
            <p><strong>Check CouponsBit Before Subscribing:</strong> Always verify whether new coupon codes or exclusive deals are available.</p>
            <p><strong>Watch for Student Offers:</strong> Special educational discounts may occasionally be offered.</p>
            <p><strong>Subscribe During Promotional Campaigns:</strong> Limited-time deals can help reduce overall subscription costs.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Who Can Benefit from Talkpal AI?</h3>
            <p className="text-gray-700 font-bold">Talkpal AI is popular among:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Students learning foreign languages</li>
              <li>International travelers</li>
              <li>Business professionals</li>
              <li>Job seekers</li>
              <li>Language enthusiasts</li>
              <li>Study abroad applicants</li>
              <li>Digital nomads</li>
              <li>Expats living overseas</li>
            </ul>
            <p>Its flexible learning approach makes it suitable for a wide range of users and learning objectives.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Talkpal AI Deals?</h3>
            <p><strong>Updated Offers:</strong> We regularly refresh our listings to help users find current discounts.</p>
            <p><strong>Quick Access to Savings:</strong> Find coupon codes, promotional offers, and subscription deals in one place.</p>
            <p><strong>Completely Free:</strong> CouponsBit is free to use and helps shoppers save money effortlessly.</p>
            <p><strong>Deals Across Multiple Categories:</strong> In addition to language-learning platforms, CouponsBit features savings opportunities from education, software, travel, lifestyle, and technology brands.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Learn Smarter While Spending Less</h3>
            <p>Whether you're learning a language for travel, education, career growth, or personal development, finding ways to reduce subscription costs makes the experience even better.</p>
            <p>Browse the latest Talkpal AI coupon codes, promo offers, and language-learning deals on CouponsBit today and start your language-learning journey while keeping more money in your pocket.</p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button 
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* FAQs Accordion */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
          {[
            { q: "What is Talkpal AI?", a: "Talkpal AI is an AI-powered language-learning platform that helps users practice conversations, improve pronunciation, and build language skills through interactive learning experiences." },
            { q: "Is Talkpal AI suitable for beginners?", a: "Yes. The platform is designed to support learners at different proficiency levels, including beginners." },
            { q: "Can I use Talkpal AI on mobile devices?", a: "Yes. Users can access Talkpal AI through supported mobile devices and other compatible platforms." },
            { q: "Where can I find Talkpal AI coupon codes?", a: "You can find the latest Talkpal AI coupon codes, promo offers, and subscription discounts on CouponsBit." },
            { q: "Does Talkpal AI support multiple languages?", a: "Yes. The platform offers learning opportunities across numerous languages." },
            { q: "Is CouponsBit free to use?", a: "Absolutely. CouponsBit is completely free and helps users discover valuable discounts and promotional offers from leading brands." }
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
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Talkpal Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["AI Language Coach", "Speak Spanish AI", "Talkpal Promo Code", "Learn French Online", "AI English Practice", "Talkpal Premium Cost", "Language AI Tutor", "CouponsBit Education"].map(tag => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Talkpal Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Annual Plan Savings", sub: "Get full premium feature sets for less via yearly subscription billing tiers" },
              { heading: "New Learner Voucher", sub: "Introductory offers on initial language tutoring modules" },
              { heading: "Student Discount Code", sub: "Special pricing structures for active academic verification accounts" },
              { heading: "Multi-Language Bundle", sub: "Unlock comprehensive speech paths across multiple study categories" },
              { heading: "CouponsBit Exclusive", sub: "Limited-time software and subscription deal option" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">T</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://talkpal.ai" target="_blank" rel="noopener noreferrer" aria-label={`Get Talkpal deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
