"use client";

import { useState, useEffect } from "react";
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
  Search, CheckSquare,ShoppingBag, CheckCircle2,AlertCircle,
  Ticket,
  Flame,
  Tv,
  Plane,Glasses, Monitor, Gamepad2, Briefcase,
  Code,
  Zap,
  LayoutGrid,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    id: "ray1",
    discount: "30%",
    label: "UP TO",
    badge: "Best Offer",
    title: "Up to 30% OFF on Advanced AR Smart Glasses",
    heading: "Up to 30% OFF",
    sub: "Advanced AR Smart Glasses",
    description: "Upgrade your vision. Grab up to 30% off the latest binocular full-color augmented reality (AR) smart glasses.",
    usedCount: "42k",
    expiresIn: "3 days",
    code: "RAYNEO30"
  },
  {
    id: "ray2",
    discount: "$100",
    label: "FLAT",
    badge: "Popular",
    title: "Save Flat $100 on Rayneo X2 Pioneer",
    heading: "Flat $100 OFF",
    sub: "Rayneo X2 Pioneer",
    description: "Unbelievable hardware deal. Save direct $100 on Rayneo X2 Pioneer, featuring real-time AI translation and AR assistant navigation.",
    usedCount: "38k",
    expiresIn: "5 days",
    code: "ARGLASS100"
  },
  {
    id: "ray3",
    discount: "15%",
    label: "FLAT",
    badge: "Trending",
    title: "Flat 15% OFF Prescription Lens Clip-ons",
    heading: "Flat 15% OFF",
    sub: "Prescription Lens Clip-ons",
    description: "Tailor made smart vision. Save 15% flat on customized prescription lens adapters and magnetic visual clips.",
    usedCount: "31k",
    expiresIn: "2 days",
    code: "ARACCESS15"
  },
  {
    id: "ray4",
    discount: "5%",
    label: "EXTRA",
    title: "Extra 5% Discount on All Glass Accessories",
    heading: "Extra 5% OFF",
    sub: "All Glass Accessories",
    description: "Get smart carrying cases, fast charging frames or custom visual cables with an extra 5% instant coupon discount.",
    usedCount: "25k",
    expiresIn: "4 days",
    code: "WELCOME5"
  },
  {
    id: "ray5",
    discount: "$50",
    label: "FLAT",
    title: "Save Flat $50 on Rayneo Air 2 XR Glasses",
    heading: "Flat $50 OFF",
    sub: "Rayneo Air 2 XR Glasses",
    description: "Bring the giant IMAX theater on-the-go. Take flat $50 off the premium lightweight Rayneo Air 2 XR display glasses.",
    usedCount: "19k",
    expiresIn: "6 days",
    code: "THEATER50"
  }
];

const RELATED_STORES: StoreItem[] = [
  { name: "StubHub",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/stubhub-coupon-code_fplhay.webp",        dealText: "Up to 15% OFF", href: "/stores/stubhub-discount-code" },
  { name: "Viagogo",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/viagogo-coupon-code_t65aol.webp",        dealText: "Up to 10% OFF", href: "/stores/viagogo-discount-code" },
  { name: "Driffle",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/driffle-coupon-code_n2upgl.webp",        dealText: "Up to 70% OFF", href: "/stores/driffle-discount-code" },
  { name: "Bluehost",       logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/bluehost-coupon-code_j8pvdt.webp",       dealText: "Up to 65% OFF", href: "/stores/bluehost-discount-code" },
  { name: "Lyca Mobile",    logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/lyca-mobile-coupon-code_svvddg.webp",    dealText: "Up to 20% OFF", href: "/stores/lyca-mobile-discount-code" },
  { name: "Reolink",        logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/reolink-coupon-code_zsrmh1.webp",        dealText: "Up to 30% OFF", href: "/stores/reolink-discount-code" },
];

export default function RayneoCouponsContent() {
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
              <span className="text-black font-extrabold">Rayneo</span>
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
                  <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/reyneo-coupon-code_q3crak.webp" alt="Rayneo" width={112} height={112} className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Rayneo</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <span className="text-black font-black text-sm">4.8</span>
                      <span className="text-gray-600 font-bold text-sm">(8.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Get verified RayNeo discount codes & promo codes for September 2026. Grab the world's first HDR10 AR Glasses — RayNeo Air 4 Pro from $254.15. Save $130 on the AI-powered X3 Pro smart glasses at just $1,169.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "6", label: "Coupons" },
                    { icon: Percent, val: "80+", label: "Deals" },
                    { icon: Users, val: "100k+", label: "Shoppers" },
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
                    <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782202556/rayneo-promo-code_fa2jqu.webp" alt="Rayneo Voucher Code" width={800} height={350} className="w-full h-full object-cover" fetchPriority="high" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782202551/rayneo-discount-code_rw5xwp.webp" alt="Rayneo Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782202552/rayneo-voucher-code_xqqil9.webp" alt="Rayneo Discount Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Rayneo discount Codes & Offers</h2>
                  <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">6 Coupons & Offers Available</p>
                </div>

             

               
{/* Coupon 1 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UPTO</p>
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$70</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">UPTO $70 OFF – RayNeo Air Series Sale</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Upgrade your entertainment experience with exclusive savings on RayNeo Air Series products.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy UPTO $70 OFF on Air Series devices</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Premium AR viewing experience at special prices</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Limited-time offer while stocks last</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 2 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Starting At</p>
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$299</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">RayNeo Air 4 Pro – AR Glasses Deal</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Experience the future of entertainment with RayNeo Air 4 Pro AR Glasses.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>World's first HDR10 AR Glasses at just $299</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Premium quad-speaker audio by Bang & Olufsen</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Immersive giant-screen viewing experience</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 3 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Save</p>
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$130</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Best Offer Save $130 – RayNeo X3 Pro AI</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Experience next-generation smart eyewear with advanced AI and AR technology.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save $130 instantly on purchase</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Sale Price: $1,169 (Regular $1,299)</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Worldwide Olympic Partner product</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 4 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Save</p>
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$70</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Save $70 – Air 3s + HDMI Adapter Bundle</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Upgrade your entertainment setup with the ultimate legacy device hub bundle.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save $70 on combo purchase</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes Air 3s + HDMI Adapter</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Easy plug-and-play connectivity</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 5 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Save</p>
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$70</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Save $70 – RayNeo Air 3s & Pocket TV Bundle</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Enjoy wireless entertainment anywhere with this smart TV bundle.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save $70 instantly</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Bundle Price: $309 (Regular $379)</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Includes Wireless Google TV Mate</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 6 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Starting At</p>
          <div className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">$254.15</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">RayNeo Air 4 Pro AR Glasses Offer – Starting At $254.15</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Experience immersive visuals with premium AR display technology.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>World's First HDR10 display in AR glasses</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>201" giant virtual screen experience</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Sale Price: $254.15 (Regular $299)</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 7 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Price</p>
          <div className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">$1,169</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">RayNeo X3 Pro AI + AR Smart Glasses</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Advanced AR smart glasses with support for customized vision lenses.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Supports customized nearsighted lenses</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>AI-powered smart features included</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Price: $1,169 (Regular $1,299)</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 8 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Only At</p>
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$89</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">RayNeo JoyDock – Giant-Screen Gaming Companion</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Transform your gaming experience with portable giant-screen support.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for immersive gaming sessions</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Portable and easy-to-use device</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Available for $89 only</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">
                {/* About Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">RayNeo Coupon Code & RayNeo Promo Code
</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   A RayNeo coupon code can help shoppers save when purchasing eligible RayNeo products. RayNeo promotions can vary throughout the year, so it's worth checking for available offers before completing your order.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   CouponsBit makes it easier to find RayNeo promo codes, discount offers, and other promotions in one place. Instead of searching multiple websites, shoppers can browse available offers before heading to checkout.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Whether you're purchasing smart glasses for entertainment, gaming, travel, work, or simply exploring wearable technology, checking for a coupon is a simple step that could reduce your overall purchase cost.
                  </p>
                  <h3 className="text-black font-black text-lg mb-6">RayNeo Discount Code Offers

</h3>

 <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   If you're specifically searching for a RayNeo discount code, check CouponsBit before buying. Available offers may include percentage discounts, fixed-amount savings, special promotions, or other limited-time deals.
                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Always check the terms of an offer, including its expiration date, eligible products, minimum purchase requirements, and other restrictions.
                  </p>
                  <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
              <div className="rounded-[32px] border border-[#f0f0f0] bg-white p-8 shadow-sm">
  {/* Header */}
  <div className="mb-8">
    <span className="mb-2 inline-block rounded-full bg-[#e8f6f8] px-3 py-1 text-xs font-bold text-[#056bfa]">
      CouponsBit Guide
    </span>
    <h3 className="text-xl font-black text-black sm:text-2xl">
      How to Use a RayNeo Coupon Code
    </h3>
    <p className="mt-2 text-sm font-medium text-gray-500">
      Using a RayNeo coupon code through CouponsBit is straightforward.
    </p>
  </div>

  {/* Steps List */}
  <div className="relative space-y-6 before:absolute before:left-[19px] before:top-3 before:h-[calc(100%-24px)] before:w-[2px] before:bg-gray-100">
    {[
      {
        step: "01",
        icon: Search,
        title: "Find a RayNeo Coupon Code",
        desc: "Visit CouponsBit and browse the latest RayNeo coupon codes, promo codes, and available discounts.",
      },
      {
        step: "02",
        icon: CheckSquare,
        title: "Select Your RayNeo Deal",
        desc: "Choose an offer that matches the RayNeo product you're planning to purchase. Review its terms before proceeding.",
      },
      {
        step: "03",
        icon: Copy,
        title: "Copy Your RayNeo Promo Code",
        desc: "If the offer requires a code, reveal it on CouponsBit and copy the RayNeo promo code.",
      },
      {
        step: "04",
        icon: ShoppingBag,
        title: "Shop on RayNeo",
        desc: "Visit the RayNeo website, choose your preferred product, and add it to your shopping cart.",
      },
      {
        step: "05",
        icon: Tag,
        title: "Apply the Coupon Code",
        desc: "Proceed to checkout and enter the RayNeo coupon code in the applicable promotional or discount code field.",
      },
      {
        step: "06",
        icon: CheckCircle2,
        title: "Complete Your Purchase",
        desc: "Confirm that the discount has been applied to your order total, then complete your purchase.",
      },
    ].map((item) => (
      <div key={item.step} className="relative flex items-start gap-4">
        {/* Step Icon Badge */}
        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#e8f6f8] text-[#056bfa] ring-4 ring-white">
          <item.icon className="h-5 w-5" />
        </div>

        {/* Step Content */}
        <div className="pt-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#056bfa]">
              Step {item.step}
            </span>
            <h4 className="text-sm font-black text-black">{item.title}</h4>
          </div>
          <p className="mt-1 text-xs font-medium leading-relaxed text-gray-500">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Troubleshooting Footer Callout */}
  <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
    <div className="text-xs leading-relaxed text-amber-900">
      <span className="font-bold">If a code doesn't work:</span> Check whether
      it has expired, whether your product qualifies, or whether a minimum
      purchase requirement applies.
    </div>
  </div>
</div>

              </div>

            </div>
          </div>
        </section>

        {/* Section 5: More Stores You'll Love */}
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

   <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      
      {/* Left Column: Main Text Content */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Rayneo Discount , Voucher & promo code & Smart Glasses Deals | Sep 2026
        </h2>

        <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse min-w-[750px]">
      <thead>
        <tr className="bg-[#056BFA]">
          <th className="p-5 text-[14px] font-black text-white uppercase tracking-wider">Offer</th>
          <th className="p-5 text-[14px] font-black text-white uppercase tracking-wider">Discount / Price</th>
          <th className="p-5 text-[14px] font-black text-white uppercase tracking-wider">Eligibility</th>
          <th className="p-5 text-[14px] font-black text-white uppercase tracking-wider">Key Conditions</th>
          <th className="p-5 text-[14px] font-black text-white uppercase tracking-wider">Applicable On</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 font-bold text-[14px] divide-y divide-gray-100">
        <tr className="hover:bg-gray-50/50 transition-colors">
          <td className="p-5 text-black font-black align-middle max-w-[220px]">RayNeo Air Series Sale</td>
          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Up To $70 OFF</td>
          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
          <td className="p-5 text-gray-500 align-middle max-w-[200px]">Limited-time offer while stocks last</td>
          <td className="p-5 text-gray-500 align-middle max-w-[240px]">RayNeo Air Series devices</td>
        </tr>
        <tr className="hover:bg-gray-50/50 transition-colors">
          <td className="p-5 text-black font-black align-middle max-w-[220px]">RayNeo Air 4 Pro – AR Glasses Deal</td>
          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Starting At $299</td>
          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
          <td className="p-5 text-gray-500 align-middle max-w-[200px]">World's first HDR10 AR glasses</td>
          <td className="p-5 text-gray-500 align-middle max-w-[240px]">RayNeo Air 4 Pro AR Glasses</td>
        </tr>
        <tr className="hover:bg-gray-50/50 transition-colors">
          <td className="p-5 text-black font-black align-middle max-w-[220px]">RayNeo X3 Pro AI</td>
          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Save $130 OFF</td>
          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
          <td className="p-5 text-gray-500 align-middle max-w-[200px]">Sale Price $1,169 (Regular $1,299)</td>
          <td className="p-5 text-gray-500 align-middle max-w-[240px]">RayNeo X3 Pro AI smart glasses</td>
        </tr>
        <tr className="hover:bg-gray-50/50 transition-colors">
          <td className="p-5 text-black font-black align-middle max-w-[220px]">Air 3s + HDMI Adapter Bundle</td>
          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Save $70 OFF</td>
          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
          <td className="p-5 text-gray-500 align-middle max-w-[200px]">Includes Air 3s + HDMI Adapter</td>
          <td className="p-5 text-gray-500 align-middle max-w-[240px]">Legacy device hub bundle</td>
        </tr>
        <tr className="hover:bg-gray-50/50 transition-colors">
          <td className="p-5 text-black font-black align-middle max-w-[220px]">RayNeo Air 3s & Pocket TV Bundle</td>
          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Save $70 OFF</td>
          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
          <td className="p-5 text-gray-500 align-middle max-w-[200px]">Bundle Price $309 (Regular $379)</td>
          <td className="p-5 text-gray-500 align-middle max-w-[240px]">Air 3s & Pocket TV wireless bundle</td>
        </tr>
        <tr className="hover:bg-gray-50/50 transition-colors">
          <td className="p-5 text-black font-black align-middle max-w-[220px]">RayNeo Air 4 Pro AR Glasses Offer</td>
          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Starting At $254.15</td>
          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
          <td className="p-5 text-gray-500 align-middle max-w-[200px]">Sale Price $254.15 (Regular $299)</td>
          <td className="p-5 text-gray-500 align-middle max-w-[240px]">RayNeo Air 4 Pro AR Glasses</td>
        </tr>
        <tr className="hover:bg-gray-50/50 transition-colors">
          <td className="p-5 text-black font-black align-middle max-w-[220px]">RayNeo X3 Pro AI + AR Smart Glasses</td>
          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Price $1,169</td>
          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
          <td className="p-5 text-gray-500 align-middle max-w-[200px]">Supports customized nearsighted lenses</td>
          <td className="p-5 text-gray-500 align-middle max-w-[240px]">RayNeo X3 Pro AI + AR Smart Glasses</td>
        </tr>
        <tr className="hover:bg-gray-50/50 transition-colors">
          <td className="p-5 text-black font-black align-middle max-w-[220px]">RayNeo JoyDock</td>
          <td className="p-5 text-[#056BFA] font-black align-middle whitespace-nowrap">Only At $89</td>
          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">All Users</td>
          <td className="p-5 text-gray-500 align-middle max-w-[200px]">Portable and easy-to-use device</td>
          <td className="p-5 text-gray-500 align-middle max-w-[240px]">Giant-screen gaming companion</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative transition-all duration-500",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            Looking for the latest RayNeo discount code, RayNeo promo code, or RayNeo deals? CouponsBit helps you discover current discounts, promotional offers, and savings opportunities on RayNeo smart glasses and wearable display technology.
          </p>
          <p>
            RayNeo has built a name in the wearable technology space with products designed around augmented reality, immersive viewing, entertainment, gaming, and portable productivity. From RayNeo AR smart glasses to the TCL RayNeo X2, its products offer an alternative to traditional screens for consumers interested in next-generation displays.
          </p>
          <p>
            Before buying, check CouponsBit for the latest RayNeo coupon codes and promotional offers. A valid discount can help you save on your purchase and get more value from your RayNeo technology.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Ray Neo Smart Glasses & Wearable Technology
            </h3>
            <p>
              RayNeo specializes in AR smart glasses, wearable displays, and immersive visual technology. Its products are designed to provide users with a more portable way to experience digital content without depending entirely on traditional televisions or computer monitors.
            </p>
            <p>
              RayNeo smart glasses can appeal to gamers, movie enthusiasts, frequent travelers, remote professionals, and technology enthusiasts looking to explore wearable displays.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              RayNeo AR Smart Glasses
            </h3>
            <p>
              RayNeo AR smart glasses provide a wearable viewing experience that can make compatible movies, videos, games, and other digital content feel more immersive.
            </p>
            <p>
              One of the biggest advantages of wearable displays is portability. Instead of carrying a separate monitor, users can take their glasses with them and use them with compatible devices in different locations.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              TCL RayNeo X2 AR Glasses
            </h3>
            <p>
              The TCL RayNeo X2 AR glasses are designed around augmented reality and wearable computing. The glasses bring digital information and visual experiences into a compact wearable format.
            </p>
            <p>
              If you're researching the TCL RayNeo X2, consider factors such as display capabilities, connectivity, supported devices, battery performance, software compatibility, comfort, and available features before purchasing.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Ray Neo X2 Glasses
            </h3>
            <p>
              Searches for Ray Neo X2 glasses, RayNeo X2 glasses, and TCL Ray Neo X2 glasses generally relate to RayNeo's X2 AR glasses. When comparing products or listings, check the exact model name and specifications to make sure you're looking at the right device.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              RayNeo X2 Price & Product Information
            </h3>
            <p>
              The RayNeo X2 price is an important consideration for shoppers researching AR glasses. However, the price alone doesn't tell the complete story. Available promotions, bundles, accessories, product configuration, and compatibility can all affect the overall value of a purchase.
            </p>
            <p>
              The RayNeo X2 price can vary depending on availability, promotions, retailer, and region. U.S. shoppers should check the current listing before purchasing and compare any available discounts with the regular price. If you find a RayNeo coupon code that applies to your order, the resulting discount may make the purchase more attractive.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              RayNeo X2 AR Features
            </h3>
            <p>
              The RayNeo X2 AR experience is designed around wearable augmented reality and hands-free digital interaction. AR glasses can offer applications across entertainment, information, communication, and productivity.
            </p>
            <p>
              When comparing the RayNeo X2 with other smart glasses, consider the features that matter most to you rather than choosing solely based on price.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Ray Neo 2 vs. RayNeo X2
            </h3>
            <p>
              If you're searching for Ray Neo 2, Ray Neo X2, or RayNeo X2, make sure you're comparing the exact products you're interested in. Product names can be searched in several variations, so checking specifications is important before placing an order.
            </p>
          </div>

          {/* Best Ways to Save Card */}
          <div className="space-y-6 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa]">
              Best Ways to Save on RayNeo
            </h3>
            <p className="text-gray-600">
              A coupon isn't the only way to save when shopping for RayNeo products. Combining smart shopping strategies can help you find better overall value.
            </p>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>Check RayNeo Discount Code Offers:</strong> Before checkout, search CouponsBit for a current RayNeo discount code. Promotions can change, so checking immediately before purchasing is worthwhile.</p>
              <p><strong>Shop During Major U.S. Sales:</strong> Major shopping events can bring discounts across consumer electronics. Look for RayNeo promotions during Black Friday, Cyber Monday, Memorial Day, Labor Day, Fourth of July, Back-to-School season, and Holiday sales.</p>
              <p><strong>Look for RayNeo Deals and Bundles:</strong> Product bundles can sometimes provide better value than buying accessories separately. Check what accessories and extras are included in the offer.</p>
              <p><strong>Compare RayNeo Prices:</strong> Compare current product prices, available discount codes, included accessories, shipping costs, and return policies to get a clear picture of actual value.</p>
            </div>
          </div>

          {/* Why Choose RayNeo Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Why Choose RayNeo Smart Glasses?
            </h3>
            <p>RayNeo combines wearable technology with immersive displays, giving consumers a different way to experience digital content.</p>
            <p><strong>Immersive Viewing Experience:</strong> RayNeo smart glasses can create a large virtual display in a compact wearable format, making them appealing for movies, videos, gaming, and other supported content.</p>
            <p><strong>Portable Entertainment:</strong> Because they are designed as wearable devices, RayNeo glasses can be easier to carry than a traditional monitor—particularly useful for travelers.</p>
            <p><strong>Gaming:</strong> Compatible RayNeo products provide an immersive display for gaming. Consider factors such as compatibility, display quality, refresh rate, latency, and comfort.</p>
            <p><strong>Productivity and Remote Work:</strong> A virtual screen provides an alternative to carrying a physical monitor for remote work or travel.</p>
            <p><strong>Innovative Technology:</strong> RayNeo operates in a rapidly developing category combining augmented reality, wearable computing, and display technology.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Find the Latest RayNeo Coupon Code & Deals
            </h3>
            <p>
              Whether you're interested in RayNeo smart glasses, TCL RayNeo X2 AR glasses, wearable displays, or augmented reality technology, checking for a discount before checkout can help you save.
            </p>
            <p>
              Before purchasing, visit CouponsBit to find the latest RayNeo coupon code, RayNeo promo code, RayNeo discount code, RayNeo X2 deals, and smart glasses offers. Compare available promotions, review the terms, and choose the offer that provides the best value for your purchase.
            </p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        {/* Read More / Read Less Toggle */}
        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline focus:outline-none"
        >
          {isReadMore ? "Read Less" : "Read More"}{" "}
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isReadMore && "rotate-180"
            )}
          />
        </button>

        {/* Dynamic FAQ Accordion */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            RayNeo promo Code FAQs
          </h3>
          {[
            { q: "Does RayNeo Have a Coupon Code?", a: "RayNeo may offer promotional codes, discounts, and special offers at different times. Check CouponsBit for currently available RayNeo coupon codes before shopping." },
            { q: "Where Can I Find a RayNeo Promo Code?", a: "You can check CouponsBit for available RayNeo promo codes, discount codes, and promotional offers. New deals may appear during seasonal sales and special promotional events." },
            { q: "What Is a RayNeo Coupon Code?", a: "A RayNeo coupon code is a promotional code that may provide a discount or other benefit on an eligible RayNeo purchase. Each promotion has its own terms and conditions." },
            { q: "What Is the RayNeo X2 Price?", a: "The RayNeo X2 price can vary based on availability, promotions, retailer, region, and product configuration. Check the latest price before purchasing." },
            { q: "What Are TCL Ray Neo X2 Glasses?", a: "TCL Ray Neo X2 glasses are AR glasses designed to provide augmented reality and digital viewing experiences through a wearable device." },
            { q: "Are RayNeo Smart Glasses Compatible With Smartphones?", a: "Compatibility varies by model. Check the specifications for the particular RayNeo product to confirm supported smartphones, laptops, gaming consoles, and other devices." },
            { q: "When Is the Best Time to Buy RayNeo?", a: "Black Friday, Cyber Monday, Memorial Day, Labor Day, and holiday shopping periods can be good times to look for RayNeo deals. However, promotions may be available at other times throughout the year." },
            { q: "Is CouponsBit Free to Use?", a: "Yes. CouponsBit is free to use. Shoppers can browse coupon codes, discounts, and promotional offers across technology, fashion, travel, beauty, and other categories." }
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors focus:outline-none"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div
                  className={cn(
                    "bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300",
                    openFaq === i && "bg-[#056bfa]"
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-gray-500 transition-transform duration-300",
                      openFaq === i && "text-white rotate-180"
                    )}
                  />
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 px-8 bg-white",
                  openFaq === i
                    ? "max-h-[500px] pb-8 opacity-100"
                    : "max-h-0 opacity-0 pb-0"
                )}
              >
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular RayNeo Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "AR Glasses",
              "RayNeo Air 2",
              "Wearable Display",
              "Smart Glasses",
              "RayNeo Promo Code",
              "Gaming Glasses",
              "AR Display",
              "Tech Deals",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top RayNeo Deals
          </h3>
          <div className="space-y-6">
            {(typeof COUPONS !== "undefined" ? COUPONS : [
              { heading: "EXCLUSIVE DEAL", sub: "Save up to 20% on RayNeo X2" },
              { heading: "LIMITED TIME", sub: "Get free shipping on Smart Glasses" }
            ]).slice(0, 5).map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  R
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                    {deal.heading}
                  </p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-1 normal-case">
                    {deal.sub}
                  </p>
                </div>
                <a
                  href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015"
                  target="_blank"
                  rel="noopener noreferrer"
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
