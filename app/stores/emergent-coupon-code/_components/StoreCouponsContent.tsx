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
  CreditCard, LayoutDashboard, Bot, Store, Rocket, Code2,
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
    discount: "$2.63",
    label: "FROM",
    badge: "Best Offer",
    title: "Standard Plan – Flat 85% OFF, Now $2.63/mo",
    heading: "Standard Plan",
    sub: "$2.63/mo (Save $14.79)",
    description: "Perfect for first-time builders — 100 credits/mo with mobile app development, private hosting and GitHub integration.",
    usedCount: "112k",
    expiresIn: "2 days",
    code: "EMERGENTSTANDARD"
  },
  {
    id: "c2",
    discount: "$146.10",
    label: "FROM",
    badge: "Popular",
    title: "Pro Plan – Built for Serious Creators and Brands",
    heading: "Pro Plan",
    sub: "$146.10/mo (Save $12.22)",
    description: "750 credits/mo with E-3 Agent, free deployment, custom domain, analytics dashboard and full project memory.",
    usedCount: "95k",
    expiresIn: "3 days",
    code: "EMERGENTPRO"
  }
];

const RELATED_STORES: StoreItem[] = [
  { name: "StubHub",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/stubhub-coupon-code_fplhay.webp",        dealText: "Up to 15% OFF", href: "/stores/stubhub-coupon-code" },
  { name: "Viagogo",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/viagogo-coupon-code_t65aol.webp",        dealText: "Up to 10% OFF", href: "/stores/viagogo-coupon-code" },
  { name: "Driffle",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/driffle-coupon-code_n2upgl.webp",        dealText: "Up to 70% OFF", href: "/stores/driffle-coupon-code" },
  { name: "Reolink",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/reolink-coupon-code_zsrmh1.webp",        dealText: "Up to 30% OFF", href: "/stores/reolink-coupon-code" },
  { name: "Lyca Mobile",    logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/lyca-mobile-coupon-code_svvddg.webp",    dealText: "Up to 20% OFF", href: "/stores/lyca-mobile-coupon-code" },
  { name: "Rayneo",         logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/reyneo-coupon-code_q3crak.webp",         dealText: "Up to 30% OFF", href: "/stores/rayneo-coupon-code" },
];

export default function EmergentCouponsContent() {
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
              <span className="text-black font-extrabold">Emergent</span>
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
                  <a href="https://app.emergent.sh/?via=CC" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782198036/emergent-coupon-code_oeaxoh.webp" alt="Emergent" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Emergent</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Emergent Coupon Code & Deals – Get 85% OFF the Standard Plan and start building apps from just $2.63/month. Enjoy AI-powered development, GitHub integration, project hosting, and more.

                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "35", label: "Coupons" },
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
                    <a href="https://app.emergent.sh/?via=CC" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782209699/emergent-promo-code_yapppq.webp" alt="Emergent Discount Code" width={800} height={350} className="w-full h-full object-cover" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://app.emergent.sh/?via=CC" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782209696/emergent-discount-code_j4d2gx.webp" alt="Emergent Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://app.emergent.sh/?via=CC" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782209699/emergent-promo-code_yapppq.webp" alt="Emergent Voucher Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Emergent Pricing Plans</h2>
                  
                </div>

                

                {/* Promo Banner */}
                <div className="inline-flex flex-wrap items-center gap-3 bg-gradient-to-r from-[#056bfa] to-[#006d9b] text-white px-6 py-3 rounded-2xl shadow-md mb-8">
                  <Zap className="w-4 h-4" />
                  <span className="font-bold text-sm">FLAT 85% OFF on Standard Monthly Plan</span>
                  <span className="bg-white/20 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">Discount Auto Applied</span>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Standard Plan */}
                  <div className="bg-white border border-gray-200 rounded-[24px] p-8 shadow-sm flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-[#056bfa]" />
                      <h3 className="text-black font-black text-lg">Standard</h3>
                    </div>
                    <p className="text-gray-500 text-xs font-bold mb-6">Perfect for first-time builders</p>
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-gray-400 line-through text-sm font-bold">$17.42</span>
                      <span className="bg-green-100 text-green-700 text-[11px] font-black px-2.5 py-1 rounded-full">Save $14.79</span>
                    </div>
                    <div className="flex items-end gap-1 mb-6">
                      <span className="text-4xl font-black text-black">$2.63</span>
                      <span className="text-gray-500 font-bold text-sm mb-1">/mo</span>
                    </div>
                    <div className="bg-[#f8f8f8] rounded-xl px-4 py-2.5 text-xs font-black text-gray-700 mb-6 inline-block w-fit">100 credits/mo</div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {[
                        "Mobile App Development",
                        "Private project hosting",
                        "GitHub integration",
                        "Fork tasks",
                        "Ability to buy additional credits"
                      ].map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                          <CheckCircle className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="https://app.emergent.sh/?via=CC" target="_blank" rel="noopener noreferrer" aria-label="Get Emergent deal: Standard Plan" className="bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                  </div>

                  {/* Pro Plan */}
                  <div className="bg-gradient-to-br from-[#056bfa] to-[#0451c4] text-white rounded-[24px] p-8 shadow-lg flex flex-col relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheck className="w-4 h-4 text-white" />
                      <h3 className="font-black text-lg">Pro</h3>
                    </div>
                    <p className="text-white/70 text-xs font-bold mb-6">Built for serious creators and brands</p>
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-white/50 line-through text-sm font-bold">$158.32</span>
                      <span className="bg-white/20 text-white text-[11px] font-black px-2.5 py-1 rounded-full">Save $12.22</span>
                    </div>
                    <div className="flex items-end gap-1 mb-6">
                      <span className="text-4xl font-black">$146.10</span>
                      <span className="text-white/70 font-bold text-sm mb-1">/mo</span>
                    </div>
                    <div className="bg-white/15 rounded-xl px-4 py-2.5 text-xs font-black mb-6 inline-block w-fit">750 credits/mo</div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {[
                        "E-3 Agent",
                        "Free deployment",
                        "Free custom domain",
                        "Analytics dashboard",
                        "Full project memory",
                        "Beast Thinking"
                      ].map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm font-medium">
                          <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="https://app.emergent.sh/?via=CC" target="_blank" rel="noopener noreferrer" aria-label="Get Emergent deal: Pro Plan" className="bg-white hover:bg-gray-100 text-[#0451c4] font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md transition-all duration-300 text-center block">Upgrade to Pro</a>
                  </div>
                </div>

              

                
              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">
                {/* About Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">About Emergent</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Emergent is an AI-powered application development platform that enables users to create full-stack web and mobile applications through natural language conversations. Instead of writing code manually, users can describe what they want to build, and Emergent's AI agents help generate the application's frontend, backend, workflows, and deployment infrastructure. 
                  </p>
                  <a href="https://app.emergent.sh/?via=CC" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
    <h3 className="text-black font-black text-lg mb-2">What Can You Build with Emergent?</h3>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Emergent is designed for a wide variety of projects and business needs.
    </p>
  </div>

  <div className="space-y-8">
    {[
      {
        icon: CreditCard, 
        title: "SaaS Applications",
        sub: "Create subscription-based software products without building everything from scratch."
      },
      {
        icon: LayoutDashboard, 
        title: "Business Tools",
        sub: "Develop internal dashboards, workflow systems, and operational platforms."
      },
      {
        icon: Bot, 
        title: "AI-Powered Applications",
        sub: "Build applications that integrate AI capabilities and automation features."
      },
      {
        icon: Store, 
        title: "Marketplace Platforms",
        sub: "Launch platforms that connect buyers, sellers, service providers, or communities."
      },
      {
        icon: Rocket, 
        title: "Startup Products",
        sub: "Validate business ideas and create minimum viable products (MVPs) faster."
      },
      {
        icon: Code2, 
        title: "Custom Web Applications",
        sub: "Design and deploy tailored solutions for personal or professional use."
      }
    ].map((item, i) => (
      <div key={item.title} className="flex gap-4 items-start text-justify">
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
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Build Faster and Save More with Emergent Promo Codes
        </h2>
        
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Turning an idea into a working application traditionally required coding skills, development teams, and significant time. Today, platforms like Emergent are changing that process by making app creation accessible to everyone. If you're looking for the latest <strong>Emergent promo codes</strong>, Couponsbit helps you discover savings opportunities on one of the fastest-growing AI-powered app development platforms.
          </p>
          <p>
            Whether you're an entrepreneur, startup founder, freelancer, product manager, or someone with an idea for a new application, Emergent helps transform concepts into fully functional software using simple natural-language prompts. Before choosing a plan, be sure to check Couponsbit for available discounts and promotional offers.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">About Emergent</h3>
            
            <p>
              Founded by entrepreneurs Mukund Jha and Madhav Jha, Emergent has quickly gained attention in the growing AI development space by helping both technical and non-technical users bring software ideas to life faster. The platform is designed to reduce development complexity while accelerating the journey from concept to launch. 
            </p>
            <p>
              Today, millions of users worldwide leverage AI-powered development tools to create business applications, SaaS products, internal tools, marketplaces, dashboards, and much more. 
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Users Choose Emergent</h3>
            <p><strong>No Traditional Coding Required:</strong> Users can describe their ideas using natural language instead of manually writing large amounts of code.</p>
            <p><strong>Faster Development Cycles:</strong> Projects that once required weeks or months can often be developed significantly faster using AI-assisted workflows.</p>
            <p><strong>Full-Stack Capabilities:</strong> Emergent helps generate both frontend and backend components as part of the development process.</p>
            <p><strong>Accessible for Non-Technical Users:</strong> Entrepreneurs and business owners can create software solutions without extensive programming experience.</p>
            <p><strong>Rapid Prototyping:</strong> Quickly test ideas, build MVPs, and gather user feedback before investing in larger development efforts.</p>
          </div>

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use an Emergent Promo Code</h3>
            <p className="text-gray-700 font-bold -mt-4">Saving on your subscription is simple.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit Couponsbit — Browse the latest Emergent promo codes and discount offers.",
                "Step 2: Choose an Offer — Select the promotion that best matches your preferred subscription plan.",
                "Step 3: Copy the Code — Copy the available promo code before visiting Emergent.",
                "Step 4: Select a Plan — Choose the subscription that fits your development needs.",
                "Step 5: Apply the Discount — Enter the promo code during checkout if applicable.",
                "Step 6: Complete Your Purchase — Activate your plan and begin building your next application."
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
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Who Can Benefit from Emergent AI?</h3>
            <p className="text-gray-700 font-bold">One of Emergent's biggest advantages is its flexibility across different user groups.</p>
            <p><strong>Entrepreneurs:</strong> Launch business ideas faster without assembling a full development team.</p>
            <p><strong>Startups:</strong> Build and validate products before committing significant development resources.</p>
            <p><strong>Freelancers:</strong> Create client solutions and prototypes more efficiently.</p>
            <p><strong>Product Managers:</strong> Experiment with ideas and workflows without waiting for development cycles.</p>
            <p><strong>Small Businesses:</strong> Develop custom tools and business applications tailored to operational needs.</p>
            <p><strong>Creators and Innovators:</strong> Transform ideas into working products without deep technical expertise.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Tips for Getting the Most Value from Emergent</h3>
            <p><strong>Start with a Clear Vision:</strong> The more detailed your project requirements, the better the AI can assist in building your application.</p>
            <p><strong>Test Early and Often:</strong> Launch prototypes quickly and gather feedback before expanding functionality.</p>
            <p><strong>Use Couponsbit Before Subscribing:</strong> Always check for available Emergent promo codes and discounts before purchasing a plan.</p>
            <p><strong>Explore Different Use Cases:</strong> Many users discover new opportunities once they begin experimenting with AI-powered development.</p>
            <p><strong>Keep Improving Your Application:</strong> Modern AI development platforms make ongoing iteration easier and more accessible.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for Emergent Deals?</h3>
            <p className="text-gray-700 font-bold">At Couponsbit, we help users discover savings opportunities across software, technology, AI tools, web services, and digital platforms.</p>
            <p><strong>Updated Promotions:</strong> We regularly review and update available offers.</p>
            <p><strong>Easy Access to Discounts:</strong> Find promo codes, special offers, and savings opportunities in one place.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use whenever you're looking to save.</p>
            <p><strong>Technology-Focused Savings:</strong> From AI tools and web hosting to software subscriptions and business platforms, we help users find value across digital services.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Turn Ideas into Applications for Less</h3>
            <p>Whether you're building your first startup, launching a new digital product, creating business tools, or exploring AI-powered development, Emergent offers a faster way to bring ideas to life.</p>
            <p>Browse the latest Emergent promo codes, discount offers, and software deals on Couponsbit today and discover smarter ways to save while building your next project.</p>
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
            { q: "What is Emergent?", a: "Emergent is an AI-powered development platform that helps users create full-stack applications using natural-language prompts instead of traditional coding workflows." },
            { q: "Do I need coding experience to use Emergent?", a: "Emergent is designed to be accessible to both technical and non-technical users, making software creation easier for a wider audience." },
            { q: "What types of projects can I build?", a: "Users can create SaaS products, business tools, dashboards, marketplaces, AI applications, and custom web solutions." },
            { q: "Where can I find Emergent promo codes?", a: "Couponsbit regularly features the latest Emergent promo codes, discount offers, and subscription savings opportunities." },
            { q: "Is Emergent suitable for startups?", a: "Yes. Many founders and startups use AI-powered development platforms to build MVPs and validate ideas more efficiently." },
            { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps shoppers discover coupon codes, promo offers, and discounts from leading brands and software platforms." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Emergent Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["AI App Builder", "Vibe Coding", "Full-Stack AI", "Emergent Labs Promo", "Build App No Code", "SaaS Generator", "Mukund Jha Startup", "MVP Prototyping"].map(tag => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white"
              >
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
