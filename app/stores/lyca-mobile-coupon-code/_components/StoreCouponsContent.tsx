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
  Ticket,
  Flame,
  Phone,
  Wifi,
  Globe,
  Milestone,
  Smartphone,
  Plane,
  Tv,
  Code, PhoneCall, SmartphoneNfc,
  Zap
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
    id: "lyc1",
    discount: "25%",
    label: "UP TO",
    badge: "Best Offer",
    title: "Up to 25% OFF on SIM & prepaid plans",
    heading: "Up to 25% OFF",
    sub: "SIM & Prepaid Plans",
    description: "Connect globally for much less. Browse monthly cellular plans, bulk internet allocations, or local calls and save up to 25%.",
    usedCount: "102k",
    expiresIn: "2 days",
    code: "LYCA25"
  },
  {
    id: "lyc2",
    discount: "$5",
    label: "ONLY",
    badge: "Popular",
    title: "Get Your First Prepaid Month for Just $5",
    heading: "First Month $5",
    sub: "New Prepaid Subscribers",
    description: "Incredible welcome deal. Try Lyca Mobile with premium data, national carrier minutes and SMS for only $5 in month one.",
    usedCount: "89k",
    expiresIn: "6 days",
    code: "FIVEFIRST"
  },
  {
    id: "lyc3",
    discount: "10%",
    label: "EXTRA",
    badge: "Trending",
    title: "Extra 10% OFF on 12-Month Annual Plans",
    heading: "Extra 10% OFF",
    sub: "12-Month Annual Plans",
    description: "Big cellular calling commitment, massive savings. Lock in a full 12-month cell phone plan and receive extra 10% cash off.",
    usedCount: "74k",
    expiresIn: "4 days",
    code: "YEAR10"
  },
  {
    id: "lyc4",
    discount: "20%",
    label: "FLAT",
    title: "Flat 20% OFF Global Travel Roaming Bundles",
    heading: "Flat 20% OFF",
    sub: "Global Travel Roaming",
    description: "Stay fully connected on your overseas vacation. Grab flat 20% savings on Lyca high speed international roaming passes.",
    usedCount: "61k",
    expiresIn: "3 days",
    code: "ROAM20"
  },
  {
    id: "lyc5",
    discount: "FREE",
    label: "SIM",
    title: "Free Express SIM Card and Instant eSIM Activation",
    heading: "Free SIM Card",
    sub: "Express & Instant eSIM",
    description: "Avoid standard activation costs or delivery charges. Request a free physical SIM card or activate compatible eSIMs directly.",
    usedCount: "48k",
    expiresIn: "5 days",
    code: "FREESIM"
  }
];

const RELATED_STORES: StoreItem[] = [
  { name: "StubHub",        logo: "/stubhub-coupon-code.webp",        dealText: "Up to 15% OFF", href: "/stores/stubhub-coupon-code" },
  { name: "Viagogo",        logo: "/viagogo-coupon-code.webp",        dealText: "Up to 10% OFF", href: "/stores/viagogo-coupon-code" },
  { name: "Driffle",        logo: "/driffle-coupon-code.webp",        dealText: "Up to 70% OFF", href: "/stores/driffle-coupon-code" },
  { name: "Bluehost",       logo: "/bluehost-coupon-code.webp",       dealText: "Up to 65% OFF", href: "/stores/bluehost-coupon-code" },
  { name: "Reolink",        logo: "/Reolink-coupon-code.webp",        dealText: "Up to 30% OFF", href: "/stores/reolink-coupon-code" },
  { name: "Rayneo",         logo: "/reyneo-coupon-code.webp",         dealText: "Up to 30% OFF", href: "/stores/rayneo-coupon-code" },
];

export default function LycaCouponsContent() {
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
    <div className="min-h-screen bg-white font-sans selection:bg-[#19798d] selection:text-white">
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
      <main className="mt-24">
        {/* Section 1: Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#19798d] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/stores" className="text-[#19798d] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-black font-extrabold">Lyca Mobile</span>
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
                  <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                    <img src="/lyca-mobile-coupon-code.webp" alt="Lyca Mobile" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Lyca Mobile</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-400 font-bold text-sm">(11.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px]">
                      Lyca Mobile — Affordable no-contract prepaid plans. 10 verified deals live! Plans from $7.50, 69% OFF & international calling from $10. Activate now!
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Tag, val: "10", label: "Coupons" },
                    { icon: Percent, val: "180+", label: "Deals" },
                    { icon: Users, val: "1.5M+", label: "Callers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <stat.icon className="w-4.5 h-4.5 text-[#19798d]" />
                       <div>
                         <p className="text-black font-black text-xs leading-none">{stat.val}</p>
                         <p className="text-gray-500 font-bold text-[10px] uppercase mt-0.5">{stat.label}</p>
                       </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right: Featured Banner Slider */}
              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[350px] shadow-lg group">
                  {/* Slide 1 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 0 ? 1 : 0 }}>
                    <img src="/lyca-mobile-discount-code.webp" alt="Lyca Mobile Discount Code" className="w-full h-full object-cover" />
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <img src="/lyca-mobile-promo-code.webp" alt="Lyca Mobile Promo Code" className="w-full h-full object-cover" />
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <img src="/lyca-mobile-voucher-code.webp" alt="Lyca Mobile Voucher Code" className="w-full h-full object-cover" />
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
                  <item.icon className="w-6 h-6 text-[#19798d] shrink-0" />
                  <div className="text-left">
                    <p className="text-black font-black text-sm leading-none">{item.title}</p>
                    <p className="text-gray-500 font-bold text-[10px] mt-0.5">{item.sub}</p>
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
                  <h2 className="text-2xl font-black text-black leading-tight">Lyca Mobile Coupon Codes & Offers</h2>
                  <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">10 Coupons & Offers Available</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                   <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1">
                      {["All (10)", "Coupons (5)", "Deals (5)"].map((tab) => (
                        <button 
                          key={tab} 
                          onClick={() => setActiveTab(tab.split(' ')[0] as any)}
                          className={cn(
                            "px-5 py-2.5 rounded-full text-sm font-black transition-all whitespace-nowrap active:scale-95",
                            activeTab === tab.split(' ')[0] ? "bg-[#19798d] text-white shadow-lg" : "border-2 border-[#19798d] text-[#19798d] hover:bg-[#e8f6f8]"
                          )}
                        >
                          {tab}
                        </button>
                      ))}
                   </div>
                   <div className="flex items-center gap-3">
                     <span className="text-gray-400 font-black text-xs uppercase tracking-widest">Sort by:</span>
                     <select className="bg-white border-[1.5px] border-[#e0e0e0] rounded-xl px-4 py-2 text-sm font-black text-black outline-none cursor-pointer focus:border-[#19798d] transition-all">
                       <option>Most Popular</option>
                       <option>Latest</option>
                       <option>Expiring Soon</option>
                       <option>Highest Discount</option>
                     </select>
                   </div>
                </div>

                {/* Coupon 1 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Save UP TO</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">69%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Summer Starts Now – Affordable Prepaid Plans</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Enjoy high-speed data, unlimited talk & text with no contracts or credit checks.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>No contracts & no credit checks</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Save up to 69% on selected plans</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Affordable prepaid mobile plans</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lycamobileusa.sjv.io/c/4303217/2047927/25589?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 2 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">60%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">UP TO 60% OFF – Selected Lyca Mobile Plans</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Grab exciting savings on selected prepaid mobile plans.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Get up to 60% OFF instantly</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Unlimited talk with fast-speed data</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Budget-friendly monthly pricing</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lycamobileusa.sjv.io/c/4303217/2047927/25589?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 3 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Promo Price</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$7.50</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">/30 days</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Better Signal Summer Offer – 18GB Plan</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Stay connected with high-speed data and hotspot benefits.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>18GB high-speed data included</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>10GB hotspot data available</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Unlimited nationwide & international talk/text</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lycamobileusa.sjv.io/c/4303217/2047927/25589?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 4 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Starting At</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$18</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">/30 days</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Best Prepaid Phone Plans – Unlimited Plus</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get unlimited data and international calling at affordable prices.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Full-speed access for first 40GB</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Unlimited international minutes to 100 countries</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Unlimited nationwide talk & text</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lycamobileusa.sjv.io/c/4303217/2047927/25589?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 5 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Save UP TO</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">60%</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">More Months. More Savings</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save more when you choose long-term prepaid plans.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Available on 3, 6 & 12-month plans</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>International calling to 100 countries</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Save up to 60% on selected plans</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lycamobileusa.sjv.io/c/4303217/2047927/25589?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 6 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Promo Price</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$18</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">/30 days</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Stream Share Repeat – Unlimited Data Offer</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Perfect prepaid plan for streaming, browsing & sharing.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>High-speed streaming data included</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Unlimited nationwide talk & text</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>International calls to 100 countries</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lycamobileusa.sjv.io/c/4303217/2047927/25589?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 7 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Promo Price</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$7.50</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">/30 days</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Best-Selling $33 High Data Plan</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Enjoy fast 5G data with hotspot access at discounted pricing.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>18GB data at up to 5G speeds</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Includes 10GB hotspot data</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Unlimited nationwide talk & text</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lycamobileusa.sjv.io/c/4303217/2047927/25589?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 8 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Promo Price</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$18</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">/30 days</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Unlimited Plus Plan – Promo Offer</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get unlimited data access with international calling benefits.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Unlimited data with first 40GB at full speed</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Unlimited talk & text nationwide</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>International minutes to 100 countries</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lycamobileusa.sjv.io/c/4303217/2047927/25589?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 9 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Earn UP TO</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$38</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Refer A Friend – Earn Up To $38</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Invite friends and earn rewards with every successful referral.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Earn up to $38 per referral</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Friends get 50% OFF for first 3 months</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Easy refer & earn process</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lycamobileusa.sjv.io/c/4303217/2047927/25589?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 10 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Promo Price</p>
          <h2 className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$29.50</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">/30 days</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">SIM-Only Unlimited Pro Plan</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get premium unlimited data with instant activation support.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Unlimited data prepaid plan</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Unlimited nationwide talk & text</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>International calling to 100 countries</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lycamobileusa.sjv.io/c/4303217/2047927/25589?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Coupon 11 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Starting At</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$10</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">/30 days</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Unlimited International Plan – Starting At $10</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Affordable international prepaid plan with 5G data benefits.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>5GB data at up to 5G speeds</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Unlimited nationwide talk & text</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Unlimited international talk & text</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://lycamobileusa.sjv.io/c/4303217/2047927/25589?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About Lyca</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6">
                    Lyca Mobile is one of the world's largest international mobile virtual network operators (MVNOs), serving millions of customers across multiple countries. In the United States, Lyca Mobile provides affordable prepaid wireless services that focus on flexible plans, international connectivity, and value-driven pricing.
                  </p>
                  <a href="https://lycamobileusa.sjv.io/c/4303217/2047927/25589?subId1=1015" target="_blank" rel="noopener noreferrer" className="text-[#19798d] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
                          <span className="bg-[#e8f6f8] text-[#19798d] px-2.5 py-0.5 rounded-full text-[10px] font-black">{cat.count} Coupons</span>
                        </Link>
                      ))}
                   </div>
                   <Link href="/categories" className="block mt-6 text-[#19798d] font-black text-[11px] uppercase tracking-widest hover:underline">View All Categories →</Link>
                </div>

                {/* Why Shop Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">Lyca Mobile Services</h3>

  <div className="space-y-8">
    {[
      { 
        icon: Smartphone, 
        title: "Prepaid Phone Plans", 
        sub: "Customers can choose flexible prepaid plans without long-term contracts or annual commitments." 
      },
      { 
        icon: PhoneCall, 
        title: "Unlimited Talk & Text Plans", 
        sub: "Many plans include unlimited domestic talk and text options for everyday communication." 
      },
      { 
        icon: Wifi, 
        title: "Mobile Data Plans", 
        sub: "Stay connected with mobile internet access for browsing, streaming, social media, and online activities." 
      },
      { 
        icon: Globe, 
        title: "International Calling", 
        sub: "Lyca Mobile is known for offering affordable international calling options to numerous destinations worldwide." 
      },
      { 
        icon: SmartphoneNfc, 
        title: "SIM Cards", 
        sub: "Customers can activate new service or switch devices using Lyca Mobile SIM cards." 
      },
      { 
        icon: Users, 
        title: "Family-Friendly Mobile Solutions", 
        sub: "Flexible plans make it easier for households to manage wireless expenses while maintaining connectivity." 
      }
    ].map((item, i) => (
      <div key={item.title} className="flex gap-4 items-start">
        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#19798d]">
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

        {/* Section 5: More Stores You'll Love */}
        <section className="py-20 bg-white border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-black text-black mb-10">More Stores You'll Love</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {RELATED_STORES.map((store, i) => (
                <Link 
                  key={i} 
                  href={store.href}
                  className="bg-white border border-[#f0f0f0] rounded-3xl p-6 text-center shadow-sm hover:border-[#19798d] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="h-14 flex items-center justify-center mx-auto">
                    <img src={store.logo} alt={store.name} className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h4 className="text-black font-black text-sm mt-5 mb-1">{store.name}</h4>
                  <p className="text-[#19798d] font-black text-[10px] uppercase mb-4">{store.dealText}</p>
                  <span className="text-[#19798d] font-black text-[10px] uppercase hover:underline decoration-2">View Coupons →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      {/* Left: Text Content */}
      <div className="prose max-w-none">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Lyca Mobile Coupon Codes, Promo Codes & Prepaid Plan Deals 2026
        </h2>
        
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for the latest <strong>Lyca Mobile coupon codes, promo codes, and prepaid wireless deals</strong>? You've come to the right place. At Couponsbit, we help customers save on prepaid phone plans, international calling packages, mobile data plans, and SIM card deals with verified Lyca Mobile discounts and exclusive offers.
          </p>
          <p>
            Whether you're looking for affordable nationwide coverage, low-cost international calling, flexible prepaid plans, or budget-friendly mobile services, Lyca Mobile offers solutions designed to keep you connected without long-term contracts. Before activating your next plan, check Couponsbit for the latest Lyca Mobile deals and savings opportunities.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#19798d] mb-4">About Lyca Mobile</h3>
            
            <p>
              The company is particularly popular among customers who frequently call friends, family, and business contacts abroad. With access to international calling features, competitive mobile plans, and nationwide coverage, Lyca Mobile has become a preferred option for individuals seeking budget-friendly communication services.
            </p>
            <p>
              Unlike traditional wireless carriers that often require long-term commitments, Lyca Mobile allows customers to choose prepaid plans that fit their specific needs. This flexibility makes it an attractive choice for students, families, travelers, and anyone looking to control their monthly phone expenses.
            </p>
            <p>
              In addition to voice services, Lyca Mobile offers mobile data plans, unlimited talk and text options, international calling benefits, and SIM card solutions that help users stay connected both locally and globally.
            </p>
            <p>
              At Couponsbit, we help customers save more by providing access to the latest Lyca Mobile coupon codes, promo codes, and prepaid wireless deals.
            </p>
          </div>

        

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#19798d] mb-8">How to Use a Lyca Mobile Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Browse Available Lyca Mobile Deals — Visit the Lyca Mobile page on Couponsbit and explore the latest promo codes, discounts, and prepaid offers.",
                "Step 2: Select an Offer — Choose the deal that best matches your mobile service needs.",
                "Step 3: Copy the Coupon Code — Click to reveal and copy the promo code if one is available.",
                "Step 4: Visit Lyca Mobile — Go to the Lyca Mobile website and select your preferred prepaid plan, SIM card, or service option.",
                "Step 5: Apply the Promo Code — During checkout, enter the coupon code in the designated field and confirm the discount has been applied.",
                "Step 6: Complete Your Purchase — Finalize your order and start enjoying affordable mobile service with additional savings."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#19798d] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#19798d] mb-4">Best Ways to Save at Lyca Mobile</h3>
            <p><strong>Check Couponsbit Before Activating a Plan:</strong> Always browse Couponsbit for the latest Lyca Mobile promo codes and prepaid wireless deals.</p>
            <p><strong>Look for New Customer Offers:</strong> Lyca Mobile frequently provides introductory promotions for new customers and SIM activations.</p>
            <p><strong>Choose the Right Plan:</strong> Selecting a plan that matches your calling, texting, and data usage can help avoid unnecessary costs.</p>
            <p><strong>Watch for Seasonal Promotions:</strong> Major shopping and promotional events often feature additional savings opportunities. Look for offers during: Black Friday, Cyber Monday, Back-to-School Promotions, Holiday Sales, New Year Deals, and Summer Specials.</p>
            <p><strong>Take Advantage of International Calling Benefits:</strong> If you frequently call overseas, choosing a plan with international calling features may provide greater overall value.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#19798d] mb-4">Why Choose Lyca Mobile?</h3>
            <p><strong>No Long-Term Contracts:</strong> Customers can enjoy prepaid wireless service without annual commitments.</p>
            <p><strong>International Connectivity:</strong> Lyca Mobile helps users stay connected with friends and family around the world.</p>
            <p><strong>Affordable Pricing:</strong> The company offers budget-friendly plans that fit a variety of communication needs.</p>
            <p><strong>Flexible Plan Options:</strong> Users can select plans based on their preferred balance of talk, text, and data.</p>
            <p><strong>Nationwide Coverage:</strong> Customers can access reliable mobile service across much of the United States.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#19798d] mb-4">Why Use Couponsbit for Lyca Mobile Deals?</h3>
            <p><strong>Verified Discounts:</strong> We regularly update available Lyca Mobile offers to help customers find current savings.</p>
            <p><strong>Easy Savings:</strong> Find mobile service deals, coupon codes, and promotional offers in one convenient place.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use and helps consumers save on wireless services, technology, travel, shopping, and more.</p>
            <p><strong>Updated Promotions:</strong> Our team continually monitors deals to help users access the latest offers.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#19798d] mb-4">Stay Connected While Saving More</h3>
            <p>Whether you're looking for affordable prepaid service, international calling solutions, flexible mobile plans, or budget-friendly wireless options, Lyca Mobile offers convenient ways to stay connected.</p>
            <p>Before activating your next plan, visit Couponsbit to explore the latest Lyca Mobile coupon codes, promo codes, and prepaid wireless deals. With verified discounts and regularly updated offers, Couponsbit helps you enjoy reliable mobile service while spending less.</p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button 
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#19798d] font-black text-[11px] uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* FAQs Accordion */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
          {[
            { q: "Does Lyca Mobile offer coupon codes?", a: "Yes. Lyca Mobile occasionally offers promo codes, discounts, and promotional pricing on prepaid plans and SIM card activations." },
            { q: "Where can I find Lyca Mobile promo codes?", a: "You can find the latest Lyca Mobile coupon codes and prepaid wireless deals on Couponsbit." },
            { q: "Does Lyca Mobile offer international calling?", a: "Yes. International calling is one of Lyca Mobile's most popular features, with plans designed for global communication." },
            { q: "Are Lyca Mobile plans prepaid?", a: "Yes. Lyca Mobile primarily offers prepaid wireless plans without long-term contracts." },
            { q: "Can I keep my phone number when switching to Lyca Mobile?", a: "In many cases, customers may be able to transfer or port their existing number, subject to eligibility requirements." },
            { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps users discover verified coupon codes, discounts, and promotional offers." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#19798d] rotate-180")}>
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
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#19798d]/5">
          <h4 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Lyca Searches</h4>
          <div className="flex flex-wrap gap-2.5">
            {["Prepaid Plans", "Lyca SIM Card", "International Call", "Lyca Data Plan", "Lyca Promo Code", "Unlimited Talk", "Wireless Deals", "Mobile Refill"].map(tag => (
              <Link 
                key={tag} 
                href={`/search?q=${encodeURIComponent(tag)}`} 
                className="bg-white px-4 py-2.5 rounded-full text-[10px] font-black text-[#19798d] uppercase tracking-widest shadow-sm hover:bg-[#19798d] hover:text-white transition-all active:scale-95 border border-white"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h4 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Lyca Deals</h4>
          <div className="space-y-6">
            {COUPONS.slice(0, 5).map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#19798d] font-black text-xl italic shadow-inner">L</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#19798d] transition-colors">{deal.heading}</p>
                  <p className="text-gray-400 font-medium text-[10px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://lycamobileusa.sjv.io/c/4303217/2047927/25589?subId1=1015" target="_blank" rel="noopener noreferrer" className="bg-[#e8f6f8] text-[#19798d] px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#19798d] hover:text-white transition-all active:scale-90">GET</a>
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
