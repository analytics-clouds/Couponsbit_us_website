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
  Heart, 
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
  ArrowRight
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Types ---
interface Coupon {
  id: string;
  discount: string;
  label: string; // FLAT or UP TO
  badge?: "Best Offer" | "Popular" | "Trending";
  title: string;
  description: string;
  usedCount: string;
  expiresIn: string;
  code: string;
}

interface StoreItem {
  name: string;
  logoInitial: string;
  dealText: string;
  gradient: string;
}

// --- Data ---
const COUPONS: Coupon[] = [
  {
    id: "c1",
    discount: "60%",
    label: "UP TO",
    badge: "Best Offer",
    title: "Up to 60% OFF on Top Categories",
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
    description: "Get FREE delivery on your first order on Amazon.",
    usedCount: "65k",
    expiresIn: "5 days",
    code: "FREESHIP"
  },
  {
    id: "c6",
    discount: "?200",
    label: "FLAT",
    title: "Get ?200 OFF on Min. Order ?999",
    description: "Use code and get flat ?200 off on minimum order of ?999.",
    usedCount: "54k",
    expiresIn: "3 days",
    code: "SAVE200"
  }
];

const RELATED_STORES: StoreItem[] = [
  { name: "Flipkart", logoInitial: "F", dealText: "Up to 80% OFF", gradient: "from-[#2874f0] to-[#1259c7]" },
  { name: "Myntra", logoInitial: "M", dealText: "Up to 70% OFF", gradient: "from-[#FF6B9D] to-[#C44B8A]" },
  { name: "Ajio", logoInitial: "A", dealText: "Up to 80% OFF", gradient: "from-[#F39C12] to-[#d35400]" },
  { name: "Tata Cliq", logoInitial: "T", dealText: "Up to 60% OFF", gradient: "from-[#DA1C22] to-[#A00000]" },
  { name: "Nykaa", logoInitial: "N", dealText: "Up to 50% OFF", gradient: "from-[#e80071] to-[#b30057]" },
  { name: "Croma", logoInitial: "C", dealText: "Up to 40% OFF", gradient: "from-[#000000] to-[#333333]" },
];

export default function AmazonCouponsContent() {
  const [activeTab, setActiveTab] = useState<"All" | "Coupons" | "Deals">("All");
  const [activeSlide, setActiveSlide] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [expandedCoupon, setExpandedCoupon] = useState<string | null>(null);
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [revealedCodes, setRevealedCodes] = useState<Set<string>>(new Set());

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
      <main className="mt-[64px]">
        {/* Section 1: Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#19798d] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/stores" className="text-[#19798d] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-black font-extrabold">Amazon</span>
            </nav>
          </div>
        </div>

        {/* Section 2: Store Header */}
        <section className="bg-white py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left: Store Info */}
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                  <div className="w-28 h-28 shrink-0 bg-white border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center text-[#19798d] font-black text-5xl italic">
                    A
                  </div>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Amazon</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-400 font-bold text-sm">(32.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px]">
                      Up to 60% OFF on Electronics, Fashion, Home & more. Shop from a wide range of categories on Amazon and save more with verified coupon codes & exciting offers.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Tag, val: "35", label: "Coupons" },
                    { icon: Percent, val: "2.5k", label: "Deals" },
                    { icon: Users, val: "10M+", label: "Shoppers" },
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

                <div className="flex flex-wrap items-center gap-4">
                  <button className="h-11 px-6 border-[1.5px] border-[#f0f0f0] rounded-full flex items-center gap-2 text-gray-600 text-sm font-bold hover:border-[#19798d] hover:text-[#19798d] transition-all group active:scale-95 shadow-sm">
                    <Heart className="w-4 h-4 group-hover:fill-[#19798d]" />
                    Add to Favorites
                  </button>
                  <a href="https://amazon.in" target="_blank" rel="noopener noreferrer" className="text-[#19798d] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right: Featured Banner Slider */}
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[220px] md:h-[260px] shadow-lg group">
                  {/* Slides */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 0 ? 1 : 0 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF9500] to-[#FF6B00] flex items-center p-8 md:p-12">
                      <div className="max-w-[60%] relative z-10">
                        <span className="inline-block bg-white text-[#FF6B00] px-2.5 py-1 rounded-full text-[10px] font-black uppercase mb-4">Special Offer</span>
                        <h2 className="text-white font-black text-2xl md:text-3xl lg:text-4xl leading-tight mb-2">Up to 60% OFF Sitewide On Amazon</h2>
                        <p className="text-white/80 text-sm font-bold mb-6">Limited Time Offer!</p>
                        <button className="bg-white text-[#FF6B00] px-6 py-2.5 rounded-full font-black text-sm active:scale-95 transition-all shadow-xl">Shop Now</button>
                      </div>
                      <div className="absolute right-10 bottom-4 text-7xl md:text-9xl opacity-20 pointer-events-none select-none">??????</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#19798d] to-[#0f5a6b] flex items-center p-8 md:p-12">
                      <div className="max-w-[60%] relative z-10">
                        <span className="inline-block bg-white text-[#19798d] px-2.5 py-1 rounded-full text-[10px] font-black uppercase mb-4">Exclusive Deal</span>
                        <h2 className="text-white font-black text-2xl md:text-3xl lg:text-4xl leading-tight mb-2">Extra 10% OFF with HDFC Cards</h2>
                        <p className="text-white/80 text-sm font-bold mb-6">Maximum Savings Guaranteed</p>
                        <button className="bg-white text-[#19798d] px-6 py-2.5 rounded-full font-black text-sm active:scale-95 transition-all shadow-xl">Shop Now</button>
                      </div>
                      <div className="absolute right-10 bottom-4 text-7xl md:text-9xl opacity-20 pointer-events-none select-none">??????</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#232F3E] to-[#131921] flex items-center p-8 md:p-12">
                      <div className="max-w-[60%] relative z-10">
                        <span className="inline-block bg-[#FF9500] text-white px-2.5 py-1 rounded-full text-[10px] font-black uppercase mb-4">Flash Sale</span>
                        <h2 className="text-white font-black text-2xl md:text-3xl lg:text-4xl leading-tight mb-2">Amazon Electronics Sale — Up to 70% OFF</h2>
                        <p className="text-white/80 text-sm font-bold mb-6">Ending Soon! Don't Miss Out</p>
                        <button className="bg-[#FF9500] text-white px-6 py-2.5 rounded-full font-black text-sm active:scale-95 transition-all shadow-xl">Shop Now</button>
                      </div>
                      <div className="absolute right-10 bottom-4 text-7xl md:text-9xl opacity-20 pointer-events-none select-none">?????</div>
                    </div>
                  </div>

                  {/* Controls */}
                  <button onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5 text-white rotate-180" />
                  </button>
                  <button onClick={() => setActiveSlide((prev) => (prev + 1) % 3)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
        <section className="bg-[#f5f5f5] py-5 border-y border-[#f0f0f0]">
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
        <section className="py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Left Column: Coupons */}
              <div className="lg:w-[65%]">
                <div className="mb-8">
                  <h2 className="text-2xl font-black text-black leading-tight">Amazon Coupon Codes & Offers</h2>
                  <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">35 Coupons & Offers Available</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                   <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1">
                      {["All (35)", "Coupons (20)", "Deals (15)"].map((tab) => (
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

                <div className="space-y-6">
                  {COUPONS.map((coupon) => (
                    <div key={coupon.id} className="bg-white rounded-3xl border border-[#f0f0f0] shadow-sm flex flex-col md:flex-row overflow-hidden hover:shadow-xl hover:border-[#19798d] transition-all duration-300 group">
                      {/* Left: Discount Box */}
                      <div className="md:w-28 shrink-0 bg-[#e8f6f8] p-6 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-dashed border-[#19798d]/30">
                         <span className="text-gray-500 font-black text-[10px] uppercase mb-1">{coupon.label}</span>
                         <span className="text-[#19798d] font-black text-3xl leading-none">{coupon.discount}</span>
                         <span className="text-[#19798d] font-black text-[10px] uppercase mt-1 tracking-widest">OFF</span>
                      </div>

                      {/* Center: Info */}
                      <div className="flex-1 p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-2">
                           {coupon.badge && (
                             <span className={cn(
                               "px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest",
                               coupon.badge === "Best Offer" ? "bg-orange-50 text-orange-600" :
                               coupon.badge === "Popular" ? "bg-pink-50 text-pink-600" : "bg-green-50 text-green-600"
                             )}>
                               {coupon.badge}
                             </span>
                           )}
                           <h3 className="text-black font-black text-lg leading-tight">{coupon.title}</h3>
                        </div>
                        <p className="text-gray-500 font-bold text-sm mb-6 line-clamp-2 leading-relaxed">{coupon.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-6">
                          <div className="flex items-center gap-1.5 text-[#22c55e]">
                            <BadgeCheck className="w-4 h-4" />
                            <span className="text-[11px] font-black uppercase tracking-tight">Verified</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-400">
                             <Users className="w-3.5 h-3.5" />
                             <span className="text-[11px] font-black uppercase tracking-tight">{coupon.usedCount} used</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-400">
                             <Clock className="w-3.5 h-3.5" />
                             <span className="text-[11px] font-black uppercase tracking-tight">Expires in {coupon.expiresIn}</span>
                          </div>
                        </div>

                        <button 
                          onClick={() => setExpandedCoupon(expandedCoupon === coupon.id ? null : coupon.id)}
                          className="mt-6 flex items-center gap-1.5 text-[#19798d] font-black text-[11px] uppercase tracking-widest hover:underline"
                        >
                          View Details <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", expandedCoupon === coupon.id && "rotate-180")} />
                        </button>

                        <div className={cn(
                          "transition-all duration-300 overflow-hidden",
                          expandedCoupon === coupon.id ? "max-h-40 mt-6 pt-6 border-t border-[#f0f0f0]" : "max-h-0"
                        )}>
                          <p className="text-gray-400 text-xs font-bold font-mono leading-relaxed">
                            Terms & Conditions: Offer valid on selected categories only. Cannot be clubbed with other promotional offers. Minimum order value might apply as per store policy.
                          </p>
                        </div>
                      </div>

                      {/* Right: Code + Action */}
                      <div className="md:w-[200px] bg-white p-6 md:p-8 flex flex-col items-center justify-center gap-4 text-center border-t md:border-t-0 md:border-l border-[#f0f0f0]">
                        <div 
                          className="w-full bg-[#f8fafc] border-2 border-dashed border-[#19798d]/40 rounded-2xl p-3 flex items-center justify-between gap-3 group/code cursor-pointer hover:border-[#19798d] transition-all"
                          onClick={() => handleCopy(coupon.code)}
                        >
                          <span className="text-[#19798d] font-mono font-black text-base tracking-widest">
                            {revealedCodes.has(coupon.id) ? coupon.code : `${coupon.code.slice(0, 4)}****`}
                          </span>
                          <Copy className="w-4.5 h-4.5 text-[#19798d] group-hover/code:scale-125 transition-all" />
                        </div>
                        <Button 
                          onClick={() => {
                            if (!revealedCodes.has(coupon.id)) toggleReveal(coupon.id);
                            else window.open('https://amazon.in', '_blank');
                          }}
                          className="w-full h-12 bg-[#19798d] hover:bg-[#0f5a6b] text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-teal-50"
                        >
                          {revealedCodes.has(coupon.id) ? "Visit Store" : "Show Code"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <button className="h-14 px-12 border-2 border-[#19798d] text-[#19798d] bg-white hover:bg-[#19798d] hover:text-white rounded-full font-black text-base transition-all active:scale-95 shadow-xl shadow-teal-50 flex items-center gap-2 mx-auto uppercase">
                    Show More Coupons <ChevronDown className="w-5 h-5" />
                  </button>
                  <p className="text-gray-400 font-extrabold text-[10px] uppercase tracking-[0.2em] mt-6">Showing 6 of 35 coupons</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">
                {/* About Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">About Amazon</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6">
                    Amazon is one of the world's largest online shopping destinations. Shop for electronics, fashion, home, books and more at the best prices with amazing deals.
                  </p>
                  <a href="https://amazon.in" target="_blank" rel="noopener noreferrer" className="text-[#19798d] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Categories Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Laptop, name: "Electronics", count: "12", color: "text-blue-500" },
                        { icon: Shirt, name: "Fashion", count: "10", color: "text-pink-500" },
                        { icon: Home, name: "Home & Kitchen", count: "8", color: "text-orange-500" },
                        { icon: Sparkles, name: "Beauty", count: "6", color: "text-purple-500" },
                        { icon: BookOpen, name: "Books", count: "5", color: "text-teal-500" }
                      ].map((cat, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <cat.icon className={cn("w-4.5 h-4.5", cat.color)} />
                            <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">{cat.name}</span>
                          </div>
                          <span className="bg-[#e8f6f8] text-[#19798d] px-2.5 py-0.5 rounded-full text-[10px] font-black">{cat.count} Coupons</span>
                        </div>
                      ))}
                   </div>
                   <Link href="/categories" className="block mt-6 text-[#19798d] font-black text-[11px] uppercase tracking-widest hover:underline">View All Categories ?</Link>
                </div>

                {/* Why Shop Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-8">Why Shop with Amazon?</h3>
                   <div className="space-y-8">
                      {[
                        { icon: Package, title: "Wide Range of Products", sub: "Millions of products across categories" },
                        { icon: Tag, title: "Best Prices", sub: "Unbeatable prices & exciting offers" },
                        { icon: Truck, title: "Fast Delivery", sub: "Quick & reliable delivery options" },
                        { icon: RefreshCw, title: "Easy Returns", sub: "Hassle-free returns & refunds" },
                        { icon: Shield, title: "Secure Payments", sub: "100% secure payment options" }
                      ].map((reason, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#19798d]">
                            <reason.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-black font-black text-sm leading-tight mb-1">{reason.title}</p>
                            <p className="text-gray-500 font-bold text-[10px] leading-relaxed uppercase tracking-tight">{reason.sub}</p>
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
                  href="/stores" 
                  className="bg-white border border-[#f0f0f0] rounded-3xl p-6 text-center shadow-sm hover:border-[#19798d] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={cn("w-14 h-14 rounded-full mx-auto flex items-center justify-center text-white font-black text-2xl shadow-lg bg-gradient-to-br transition-transform group-hover:scale-110", store.gradient)}>
                    {store.logoInitial}
                  </div>
                  <h4 className="text-black font-black text-sm mt-5 mb-1">{store.name}</h4>
                  <p className="text-[#19798d] font-black text-[10px] uppercase mb-4">{store.dealText}</p>
                  <span className="text-[#19798d] font-black text-[10px] uppercase hover:underline decoration-2">View Coupons ?</span>
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
                 <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">Amazon Coupon Codes & Offers — Save Up to 60% in 2026</h2>
                 <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                    <p>Looking for the latest <strong>Amazon India coupons</strong>? You've come to the right place. At Coupons Clouds, we track and verify the best deals available on Amazon.in to ensure you never pay full price again. Whether it's electronics, fashion, home essentials, or books, our community of savvy shoppers shares the best working promo codes daily.</p>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-black text-[#19798d] mb-4">Amazon Great Indian Sale Coupons</h3>
                      <p>Amazon's Great Indian Sale is one of the biggest shopping events in the country. During these sales, you can find massive discounts and extra bank offers. We list exclusive bank-specific coupon codes (HDFC, SBI, ICICI) that give you an additional 10% instant discount on top of already slashed prices.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-black text-[#19798d] mb-4">Amazon Electronics Deals & Offers</h3>
                      <p>If you're in the market for a new smartphone, laptop, or smart TV, Amazon's electronics department has unbeatable prices. Use our verified electronics promo codes to grab devices from Apple, Samsung, OnePlus, and HP at a fraction of the cost.</p>
                    </div>

                    <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                       <h3 className="text-xl font-black text-[#19798d] mb-8">How to Use Amazon Coupon Codes?</h3>
                       <div className="space-y-6">
                         {[
                           "Visit Coupons Clouds and find the best Amazon coupon code",
                           "Click Show Code to reveal the full coupon code",
                           "Copy the code with one click",
                           "Visit Amazon India and add items to your cart",
                           "Paste the code at checkout and enjoy your discount instantly"
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
                     { q: "Does Amazon give coupon codes?", a: "Yes! Amazon regularly offers coupon codes for electronics, fashion, home and more. Coupons Clouds lists all verified Amazon coupon codes updated daily." },
                     { q: "How do I apply a coupon on Amazon?", a: "Add items to your cart on Amazon, proceed to checkout, find the coupon or promo code field and paste your code from Coupons Clouds to get instant discount." },
                     { q: "What is the best Amazon coupon today?", a: "The best Amazon coupon today is AMAZON60 giving up to 60% OFF on top categories. Check Coupons Clouds daily for the latest and highest value Amazon codes." },
                     { q: "Does Amazon offer cashback?", a: "Yes! Amazon offers cashback through various bank card deals, Amazon Pay offers and wallet cashback. Check Coupons Clouds for all active Amazon cashback offers." }
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
                        <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-40 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                          <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
                        </div>
                     </div>
                   ))}
                 </div>
               </div>

               {/* Sidebar */}
               <div className="space-y-10">
                 {/* Box 1: Popular Searches */}
                 <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#19798d]/5">
                   <h4 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Amazon Searches</h4>
                   <div className="flex flex-wrap gap-2.5">
                      {["Amazon Sale", "Amazon Electronics", "Amazon Fashion", "Amazon Cashback", "Amazon Promo Code", "Amazon Bank Offers", "Amazon Free Delivery", "Amazon Today's Deal"].map(tag => (
                        <Link 
                          key={tag} 
                          href={`/search?q=${tag}`} 
                          className="bg-white px-4 py-2.5 rounded-full text-[10px] font-black text-[#19798d] uppercase tracking-widest shadow-sm hover:bg-[#19798d] hover:text-white transition-all active:scale-95 border border-white"
                        >
                          {tag}
                        </Link>
                      ))}
                   </div>
                 </div>

                 {/* Box 2: Today's Top Deals */}
                 <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                   <h4 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Amazon Deals</h4>
                   <div className="space-y-6">
                      {COUPONS.slice(0, 5).map((deal, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-pointer">
                           <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#19798d] font-black text-xl italic shadow-inner">A</div>
                           <div className="flex-1 min-w-0">
                             <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none mb-1 group-hover:text-[#19798d] transition-colors truncate">Amazon</p>
                             <p className="text-gray-400 font-bold text-[10px] truncate leading-none uppercase tracking-tight">{deal.discount} OFF</p>
                           </div>
                           <button className="bg-[#e8f6f8] text-[#19798d] px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#19798d] hover:text-white transition-all active:scale-90">GET</button>
                        </div>
                      ))}
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Section 8: Newsletter Strip */}
        <section className="bg-[#19798d] py-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-60 h-60 bg-white/5 rounded-full -translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4 italic">Never Miss a Great Deal!</h2>
            <p className="text-white/70 font-bold mb-10 max-w-md mx-auto">Subscribe to get the best Amazon coupon codes directly in your inbox.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <input type="email" placeholder="Enter your email address" className="w-full h-14 bg-white/10 border-2 border-white/20 rounded-2xl px-6 outline-none focus:border-white transition-all text-white placeholder:text-white/40 font-bold text-sm" />
              <button className="w-full sm:w-auto h-14 bg-white text-[#19798d] px-10 rounded-2xl font-black text-sm uppercase tracking-widest active:scale-95 transition-all shadow-xl hover:shadow-white/10">Subscribe</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
