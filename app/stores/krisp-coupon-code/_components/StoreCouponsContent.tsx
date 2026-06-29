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
  VolumeX, NotebookTabs, FileText, Video, Languages,
  Laptop, 
  Shirt, 
  Home, 
  Sparkles, 
  BookOpen, 
  CheckCircle,
  X,
  ArrowRight,
  Plane,
  Bot,
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
    description: "Get FREE delivery on your first order on Krisp.AI.",
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

export default function KrispCouponsContent() {
  const [activeTab, setActiveTab] = useState<"All" | "Coupons" | "Deals">("All");
  const [activeSlide, setActiveSlide] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [expandedCoupon, setExpandedCoupon] = useState<string | null>(null);
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [revealedCodes, setRevealedCodes] = useState<Set<string>>(new Set());
  const [open, setOpen] = useState(false);
  const [billingAnnual, setBillingAnnual] = useState(true);

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
              <span className="text-black font-extrabold">Krisp.AI</span>
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
                  <a href="https://krisp.pxf.io/c/4303217/2859289/33230?subId1=1015" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1782730730/krisp-logo_ajv3iv.webp" alt="Krisp.AI" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Krisp.AI</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px]">
                      Krisp AI Coupon Code & Deals – Discover verified coupon codes, promo codes, and exclusive offers on AI meeting tools, transcription, noise cancellation, and productivity plans with Krisp AI.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Tag, val: "4", label: "Coupons" },
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
                    <a href="https://krisp.pxf.io/c/4303217/2859289/33230?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1782131741/bluehost_promo_code_w1og4n.webp" alt="Krisp.AI Discount Code" width={800} height={350} className="w-full h-full object-cover" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://krisp.pxf.io/c/4303217/2859289/33230?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1782131740/bluehost_discount_code_hclh1n.webp" alt="Krisp.AI Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://krisp.pxf.io/c/4303217/2859289/33230?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1782131740/bluehost_voucher_code_xltlyy.webp" alt="Krisp.AI Voucher Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
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
        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Left Column: Coupons */}
              <div className="lg:w-[65%]">
                <div className="mb-8">
                  <h2 className="text-2xl font-black text-black leading-tight">Krisp.AI Pricing – Meeting AI</h2>
                  <p className="text-gray-500 text-sm font-medium mt-2">Supercharge your meetings with AI. Flexible plans for teams of all sizes.</p>
                </div>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-4 mb-10">
                  <span className={cn("font-bold text-sm", !billingAnnual ? "text-black" : "text-gray-400")}>Monthly</span>
                  <button
                    type="button"
                    onClick={() => setBillingAnnual(!billingAnnual)}
                    className={cn("relative w-14 h-7 rounded-full transition-colors duration-300", billingAnnual ? "bg-[#056bfa]" : "bg-gray-300")}
                    aria-label="Toggle monthly or annual billing"
                  >
                    <span className={cn("absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300", billingAnnual && "translate-x-7")} />
                  </button>
                  <span className={cn("font-bold text-sm", billingAnnual ? "text-black" : "text-gray-400")}>Annually</span>
                  <span className="bg-[#e8f6f8] text-[#0451c4] text-[11px] font-black px-2.5 py-1 rounded-full uppercase">Save 50%</span>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {/* Free Trial */}
                  <div className="bg-white border border-gray-200 rounded-[24px] p-6 shadow-sm flex flex-col">
                    <p className="text-black font-extrabold text-lg mb-1">Free Trial</p>
                    <p className="text-gray-500 text-[12px] mb-4">Explore Krisp on your own.</p>
                    <p className="text-black font-black text-3xl mb-4">$0</p>
                    <a href="https://krisp.pxf.io/c/4303217/2859289/33230?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Try Krisp.AI Free Trial" className="border-2 border-[#056bfa] text-[#056bfa] hover:bg-[#056bfa] hover:text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 text-center mb-5">Try it Free</a>
                    <div className="space-y-3">
                      <p className="text-gray-400 font-black text-[10px] uppercase tracking-widest">Why 7-Day Free Trial</p>
                      <ul className="space-y-2 text-gray-700 text-[13px] leading-5">
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Test all premium features risk-free</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />No credit card required</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Free for 7 days</li>
                      </ul>
                      <p className="text-gray-400 font-black text-[10px] uppercase tracking-widest mt-4">Key Features</p>
                      <ul className="space-y-2 text-gray-700 text-[13px] leading-5">
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Unlimited Transcription</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Unlimited Noise Cancellation</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Unlimited Audio &amp; Video Recording</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Unlimited AI Notes &amp; Action Items</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Limited AI Accent Conversion &amp; Understanding</li>
                      </ul>
                    </div>
                  </div>

                  {/* Core */}
                  <div className="bg-white border border-gray-200 rounded-[24px] p-6 shadow-sm flex flex-col">
                    <p className="text-black font-extrabold text-lg mb-1">Core</p>
                    <p className="text-gray-500 text-[12px] mb-4">Best for individuals and small teams.</p>
                    <p className="text-black font-black text-3xl mb-4">{billingAnnual ? "$8" : "$16"}<span className="text-gray-500 font-bold text-sm">/mo/user</span></p>
                    <a href="https://krisp.pxf.io/c/4303217/2859289/33230?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Start with Krisp.AI Core plan" className="border-2 border-[#056bfa] text-[#056bfa] hover:bg-[#056bfa] hover:text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 text-center mb-5">Start with Core</a>
                    <div className="space-y-3">
                      <p className="text-gray-400 font-black text-[10px] uppercase tracking-widest">Why Core</p>
                      <ul className="space-y-2 text-gray-700 text-[13px] leading-5">
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Unlimited AI Note-taker</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Unlimited Noise Cancellation</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Unlimited Integrations &amp; webhook</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Mobile app</li>
                      </ul>
                      <p className="text-gray-400 font-black text-[10px] uppercase tracking-widest mt-4">Key Features</p>
                      <ul className="space-y-2 text-gray-700 text-[13px] leading-5">
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Multilingual Transcript</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />AI Chat</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />1hr/day Accent Conversion</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Team &amp; billing management</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />MCP integration</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />10 GB storage</li>
                      </ul>
                    </div>
                  </div>

                  {/* Advanced — highlighted */}
                  <div className="bg-white border-2 border-[#056bfa] rounded-[24px] p-6 shadow-md flex flex-col relative">
                    <span className="absolute -top-3 right-6 bg-[#056bfa] text-white text-[11px] font-black px-3 py-1 rounded-full">Most Popular</span>
                    <p className="text-black font-extrabold text-lg mb-1">Advanced</p>
                    <p className="text-gray-500 text-[12px] mb-4">For advanced features and controls.</p>
                    <p className="text-black font-black text-3xl mb-4">{billingAnnual ? "$15" : "$30"}<span className="text-gray-500 font-bold text-sm">/mo/user</span></p>
                    <a href="https://krisp.pxf.io/c/4303217/2859289/33230?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Start with Krisp.AI Advanced plan" className="bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 text-center mb-5">Start with Advanced</a>
                    <div className="space-y-3">
                      <p className="text-gray-400 font-black text-[10px] uppercase tracking-widest">Why Advanced</p>
                      <ul className="space-y-2 text-gray-700 text-[13px] leading-5">
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Unlimited Accent Conversion*</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Advanced Integrations</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Advanced admin controls</li>
                      </ul>
                      <p className="text-gray-400 font-black text-[10px] uppercase tracking-widest mt-4">Everything in Core +</p>
                      <ul className="space-y-2 text-gray-700 text-[13px] leading-5">
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Manager view</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Company deal grouping</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Trim and comment</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Salesforce integration</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />ConnectWise integration</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Team-level webhooks</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />60 GB storage</li>
                      </ul>
                    </div>
                  </div>

                  {/* Enterprise */}
                  <div className="bg-white border border-gray-200 rounded-[24px] p-6 shadow-sm flex flex-col">
                    <p className="text-black font-extrabold text-lg mb-1">Enterprise</p>
                    <p className="text-gray-500 text-[12px] mb-4">Best for org-wide rollout &amp; security.</p>
                    <p className="text-black font-black text-3xl mb-4">Custom Pricing</p>
                    <a href="https://krisp.pxf.io/c/4303217/2859289/33230?subId1=1015" target="_blank" rel="noopener noreferrer" aria-label="Talk to Sales about Krisp.AI Enterprise" className="border-2 border-[#056bfa] text-[#056bfa] hover:bg-[#056bfa] hover:text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 text-center mb-5">Talk to Sales</a>
                    <div className="space-y-3">
                      <p className="text-gray-400 font-black text-[10px] uppercase tracking-widest">Why Enterprise</p>
                      <ul className="space-y-2 text-gray-700 text-[13px] leading-5">
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />SSO/SCIM</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Advanced Security and Reports</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Private Transcription &amp; Recordings (On-device)</li>
                      </ul>
                      <p className="text-gray-400 font-black text-[10px] uppercase tracking-widest mt-4">Everything in Advanced +</p>
                      <ul className="space-y-2 text-gray-700 text-[13px] leading-5">
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Super admin role</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Dedicated account manager</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Usage analytics reports</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />HIPAA Compliance</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />Unlimited storage</li>
                      </ul>
                    </div>
                  </div>
                </div>

              

                
              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">
                {/* About Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">About Krisp.AI</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6">
                    Krisp AI is an AI-powered meeting assistant designed to improve virtual communication. Initially recognized for its industry-leading noise cancellation technology, Krisp has evolved into a comprehensive productivity platform that automatically records meetings, generates transcripts, creates AI-powered meeting summaries, captures action items, and integrates with popular workplace tools. 

                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6">
                    Unlike traditional meeting assistants that require a bot to join calls, Krisp works directly with supported meeting platforms, allowing users to enjoy a more seamless meeting experience. It supports popular video conferencing platforms such as Zoom, Microsoft Teams, Google Meet, Slack, and many other communication tools.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6">
                    Today, professionals worldwide use Krisp AI to improve communication, reduce background distractions, and automate post-meeting tasks.
                  </p>
                  <a href="https://krisp.pxf.io/c/4303217/2859289/33230?subId1=1015" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
              <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm max-w-2xl mx-auto">
  <div className="mb-8">
    <h2 className="text-black font-black text-xl mb-2">What Can You Do with Krisp AI?</h2>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Krisp offers a wide range of AI-powered features that simplify online meetings and improve productivity.
    </p>
  </div>

  <div className="space-y-8">
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <VolumeX className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">AI Noise Cancellation</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Remove background noise, echoes, keyboard clicks, barking dogs, and other distractions from both sides of the conversation for clearer calls. 
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <NotebookTabs className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">AI Meeting Notes</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Automatically capture meeting notes so you can stay engaged in the discussion instead of taking manual notes. 
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <FileText className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Meeting Transcription</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Generate accurate transcripts with multilingual support, making it easy to review conversations later. 
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Sparkles className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">AI Meeting Summaries</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Receive concise summaries highlighting key discussion points and action items after every meeting. 
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Video className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">Audio & Screen Recording</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Record meetings for future reference while keeping everything securely organized. 
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
        <Languages className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-black font-black text-sm leading-tight mb-2">AI Accent Conversion</h3>
        <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
          Improve communication clarity with AI-powered accent conversion that helps participants understand one another more easily during meetings. 
        </p>
      </div>
    </div>
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
          Krisp AI Promo Codes, Discount Codes & AI Meeting Assistant Deals
        </h2>
        
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <h3 className="text-xl font-black text-[#056bfa] mb-4">Boost Meeting Productivity for Less with Krisp AI Promo Codes</h3>
          <p>
            Whether you're working remotely, leading virtual meetings, or collaborating with clients across the globe, clear communication is essential. Krisp AI helps eliminate distractions by combining AI-powered noise cancellation with meeting transcription, summaries, recordings, and productivity tools. Before subscribing, check Couponsbit for the latest <strong>Krisp AI promo codes, discount offers, and exclusive software deals</strong> to save on your plan.
          </p>
          <p>
            From freelancers and remote professionals to sales teams and enterprises, Krisp AI helps users stay focused on conversations while AI handles note-taking and meeting organization.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Professionals Choose Krisp AI</h3>
            <p><strong>Crystal-Clear Audio:</strong> Krisp's AI technology removes unwanted background sounds in real time, making meetings more professional and easier to follow.</p>
            <p><strong>Stay Focused:</strong> Instead of multitasking between listening and note-taking, users can fully participate while Krisp documents the meeting.</p>
            <p><strong>Works with Popular Meeting Platforms:</strong> Krisp integrates with many of today's most widely used communication tools without requiring complex setup.</p>
            <p><strong>Boost Team Productivity:</strong> AI-generated notes, summaries, and action items help teams stay aligned after every meeting.</p>
            <p><strong>Ideal for Remote Work:</strong> Whether you're working from home, traveling, or collaborating across time zones, Krisp helps maintain professional communication.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <div>
              <h3 className="text-xl font-black text-[#056bfa] mb-2">How to Use a Krisp AI Promo Code</h3>
              <p className="text-gray-500 text-sm font-bold">Saving on your Krisp subscription is easy.</p>
            </div>
            <div className="space-y-6">
              {[
                "Step 1: Visit Couponsbit — Browse the latest Krisp AI promo codes and software deals.",
                "Step 2: Choose an Offer — Select the promotion that best fits your subscription plan.",
                "Step 3: Copy the Promo Code — Copy the available code before visiting Krisp AI.",
                "Step 4: Select Your Plan — Choose the subscription that matches your personal or business needs.",
                "Step 5: Apply the Discount — Enter the promo code during checkout if applicable.",
                "Step 6: Activate Your Account — Complete your purchase and start enjoying AI-powered meeting assistance."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Smart Ways to Save More on Krisp AI</h3>
            <p><strong>Check Couponsbit Before Subscribing:</strong> New Krisp AI discounts and promotional offers may become available throughout the year.</p>
            <p><strong>Choose Annual Billing:</strong> Many software providers offer better long-term value with yearly subscriptions.</p>
            <p><strong>Take Advantage of Free Features:</strong> Explore Krisp's free capabilities before deciding which paid plan best suits your workflow.</p>
            <p><strong>Connect Your Favorite Tools:</strong> Integrate Krisp with your calendar, CRM, Slack, or productivity apps to streamline your workflow.</p>
            <p><strong>Keep Your Meetings Organized:</strong> Review AI-generated notes and action items after each meeting to improve follow-up and collaboration.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Who Can Benefit from Krisp AI?</h3>
            <p>Krisp AI is designed for professionals across many industries. Remote employees, Business teams, Sales professionals, Customer support agents, Consultants, Recruiters, Teachers and educators, Freelancers, Entrepreneurs, Content creators, Online coaches. Anyone who regularly participates in virtual meetings can benefit from cleaner audio and AI-powered meeting assistance.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for Krisp AI Deals?</h3>
            <p>Couponsbit helps users discover verified savings on software, AI tools, business platforms, web services, travel, and lifestyle brands.</p>
            <p><strong>Updated Offers:</strong> We regularly update Krisp AI promo codes and discount opportunities.</p>
            <p><strong>Easy-to-Find Deals:</strong> Browse the latest software offers in one convenient place.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use whenever you're looking for ways to save.</p>
            <p><strong>Trusted Savings Platform:</strong> Our goal is to help shoppers and professionals get more value from the products and services they already use.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Make Every Meeting More Productive</h3>
            <p>Whether you're attending client calls, leading team meetings, teaching online classes, or collaborating remotely, Krisp AI helps you communicate more clearly and work more efficiently.</p>
            <p>Browse the latest Krisp AI promo codes, discount offers, and software deals on Couponsbit today to save on your next subscription while making every meeting more productive.</p>
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
            { q: "What is Krisp AI?", a: "Krisp AI is an AI-powered meeting assistant that offers noise cancellation, meeting transcription, AI-generated summaries, recordings, and productivity tools for virtual meetings." },
            { q: "Does Krisp AI only remove background noise?", a: "No. In addition to AI noise cancellation, Krisp also provides meeting recordings, AI notes, transcripts, summaries, action items, and accent conversion." },
            { q: "Which meeting platforms work with Krisp AI?", a: "Krisp works with many popular communication platforms, including Zoom, Microsoft Teams, Google Meet, Slack, Webex, and others." },
            { q: "Where can I find Krisp AI promo codes?", a: "You can find the latest Krisp AI promo codes, discount offers, and software deals on Couponsbit." },
            { q: "Is Krisp AI suitable for remote teams?", a: "Yes. Krisp AI is widely used by remote workers, distributed teams, freelancers, and businesses to improve meeting quality and collaboration." },
            { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps users discover verified coupon codes, promo offers, and discounts from leading software and technology brands." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Krisp AI Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Noise Cancellation", "AI Transcription", "Meeting Summaries", "Zoom Integration", "Teams Noise Filter", "Krisp AI Pro", "Remote Work Tools", "Audio Recorder"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Krisp AI Deals</h3>
          <div className="space-y-6">
            {COUPONS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-1.5 normal-case">{deal.sub}</p>
                </div>
                <a 
                  href="https://krisp.pxf.io/c/4303217/2859289/33230?subId1=1015"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Get Krisp AI deal: ${deal.heading}`} 
                  className="bg-[#e8f6f8] text-[#056bfa] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90"
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
