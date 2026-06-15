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
  Tv,
  Plane,Glasses, Monitor, Gamepad2, Briefcase,
  Code,
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
  { name: "StubHub",        logo: "/stubhub-coupon-code.webp",        dealText: "Up to 15% OFF", href: "/stores/stubhub-coupon-code" },
  { name: "Viagogo",        logo: "/viagogo-coupon-code.webp",        dealText: "Up to 10% OFF", href: "/stores/viagogo-coupon-code" },
  { name: "Driffle",        logo: "/driffle-coupon-code.webp",        dealText: "Up to 70% OFF", href: "/stores/driffle-coupon-code" },
  { name: "Bluehost",       logo: "/bluehost-coupon-code.webp",       dealText: "Up to 65% OFF", href: "/stores/bluehost-coupon-code" },
  { name: "Lyca Mobile",    logo: "/lyca-mobile-coupon-code.webp",    dealText: "Up to 20% OFF", href: "/stores/lyca-mobile-coupon-code" },
  { name: "Reolink",        logo: "/Reolink-coupon-code.webp",        dealText: "Up to 30% OFF", href: "/stores/reolink-coupon-code" },
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
                  <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                    <img src="/reyneo-coupon-code.webp" alt="Rayneo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Rayneo</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <span className="text-black font-black text-sm">4.8</span>
                      <span className="text-gray-400 font-bold text-sm">(8.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px]">
                      Rayneo — Next-gen AR smart glasses brand. 6 verified deals live! Save $130 on X3 Pro AI & $70 OFF Air Series. Shop now!
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Tag, val: "6", label: "Coupons" },
                    { icon: Percent, val: "80+", label: "Deals" },
                    { icon: Users, val: "100k+", label: "Shoppers" },
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
                    <img src="/rayneo-voucher-code.webp" alt="Rayneo Voucher Code" className="w-full h-full object-cover" />
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <img src="/rayneo-promo-code.webp" alt="Rayneo Promo Code" className="w-full h-full object-cover" />
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <img src="/rayneo-discount-code.webp" alt="Rayneo Discount Code" className="w-full h-full object-cover" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Rayneo Coupon Codes & Offers</h2>
                  <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">6 Coupons & Offers Available</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                   <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1">
                      {["All (6)", "Coupons (4)", "Deals (2)"].map((tab) => (
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UPTO</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$70</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">UPTO $70 OFF – RayNeo Air Series Sale</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Upgrade your entertainment experience with exclusive savings on RayNeo Air Series products.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Enjoy UPTO $70 OFF on Air Series devices</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Premium AR viewing experience at special prices</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Limited-time offer while stocks last</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Starting At</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$299</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">RayNeo Air 4 Pro – AR Glasses Deal</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Experience the future of entertainment with RayNeo Air 4 Pro AR Glasses.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>World's first HDR10 AR Glasses at just $299</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Premium quad-speaker audio by Bang & Olufsen</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Immersive giant-screen viewing experience</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Save</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$130</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Best Offer Save $130 – RayNeo X3 Pro AI</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Experience next-generation smart eyewear with advanced AI and AR technology.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Save $130 instantly on purchase</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Sale Price: $1,169 (Regular $1,299)</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Worldwide Olympic Partner product</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Save</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$70</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Save $70 – Air 3s + HDMI Adapter Bundle</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Upgrade your entertainment setup with the ultimate legacy device hub bundle.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Save $70 on combo purchase</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Includes Air 3s + HDMI Adapter</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Easy plug-and-play connectivity</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Save</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$70</h2>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Save $70 – RayNeo Air 3s & Pocket TV Bundle</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Enjoy wireless entertainment anywhere with this smart TV bundle.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Save $70 instantly</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Bundle Price: $309 (Regular $379)</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Includes Wireless Google TV Mate</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Starting At</p>
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">$254.15</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">RayNeo Air 4 Pro AR Glasses Offer – Starting At $254.15</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Experience immersive visuals with premium AR display technology.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>World's First HDR10 display in AR glasses</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>201" giant virtual screen experience</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Sale Price: $254.15 (Regular $299)</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Price</p>
          <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">$1,169</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">RayNeo X3 Pro AI + AR Smart Glasses</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Advanced AR smart glasses with support for customized vision lenses.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Supports customized nearsighted lenses</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>AI-powered smart features included</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Price: $1,169 (Regular $1,299)</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Only At</p>
          <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">$89</h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">RayNeo JoyDock – Giant-Screen Gaming Companion</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Transform your gaming experience with portable giant-screen support.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Ideal for immersive gaming sessions</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Portable and easy-to-use device</li>
              <li className="flex items-start gap-2"><span className="text-[#0077b6]">•</span>Available for $89 only</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
          <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About Rayneo</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6">
                   RayNeo is an emerging technology brand specializing in augmented reality (AR) smart glasses, wearable displays, and immersive visual solutions. The company focuses on creating products that blend advanced display technology with portability, comfort, and everyday usability.
                  </p>
                  <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="text-[#19798d] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <h3 className="text-black font-black text-lg mb-8">Popular RayNeo Products</h3>

  <div className="space-y-8">
    {[
      { 
        icon: Glasses, 
        title: "AR Smart Glasses", 
        sub: "RayNeo's flagship products provide immersive visual experiences through advanced augmented reality and display technologies." 
      },
      { 
        icon: Monitor, 
        title: "Wearable Displays", 
        sub: "Enjoy large virtual screens for work, entertainment, content consumption, and multitasking." 
      },
      { 
        icon: Gamepad2, 
        title: "Gaming Accessories", 
        sub: "Many RayNeo devices are compatible with gaming consoles, handheld gaming systems, laptops, and smartphones." 
      },
      { 
        icon: Tv, 
        title: "Portable Entertainment Solutions", 
        sub: "Watch movies, stream content, and enjoy media on a cinematic virtual display experience while traveling or relaxing at home." 
      },
      { 
        icon: Briefcase, 
        title: "Productivity Tools", 
        sub: "Professionals can use RayNeo products to create private workspaces, improve focus, and increase productivity from virtually anywhere." 
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
          RayNeo Coupon Codes, Promo Codes & AR Smart Glasses Deals 2026
        </h2>
        
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for the latest <strong>RayNeo coupon codes, promo codes, and smart glasses deals</strong>? You've come to the right place. At Couponsbit, we help tech enthusiasts, gamers, professionals, and everyday consumers save on innovative wearable technology with verified RayNeo discounts and exclusive offers.
          </p>
          <p>
            Whether you're shopping for AR smart glasses, wearable displays, immersive entertainment devices, or next-generation productivity tools, RayNeo offers cutting-edge technology designed to transform how you work, play, and connect. Before making your purchase, explore the latest RayNeo promo codes and deals on Couponsbit to maximize your savings.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#19798d] mb-4">Know More About RayNeo</h3>
           
            <p>
              Unlike traditional screens and monitors, RayNeo smart glasses create a large virtual display experience that users can enjoy from almost anywhere. Whether you're streaming movies, playing games, working remotely, or multitasking on the go, RayNeo products offer a unique way to access digital content without carrying bulky equipment.
            </p>
            <p>
              The brand continues to innovate in the fields of augmented reality, wearable computing, and smart display technology, helping users experience the future of digital interaction.
            </p>
          </div>

        

          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#19798d] mb-8">How to Use a RayNeo Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Browse Available RayNeo Deals — Visit the RayNeo page on Couponsbit and explore current discounts, promo codes, and promotional offers.",
                "Step 2: Choose an Offer — Select the deal that best matches the product you want to purchase.",
                "Step 3: Copy the Coupon Code — Click to reveal and copy the coupon code if one is available.",
                "Step 4: Visit RayNeo — Go to the RayNeo website and add your preferred products to your shopping cart.",
                "Step 5: Apply the Promo Code — During checkout, enter the coupon code in the designated discount field and verify the savings.",
                "Step 6: Complete Your Order — Finalize your purchase and enjoy your new wearable technology while spending less."
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
            <h3 className="text-xl font-black text-[#19798d] mb-4">Best Ways to Save at RayNeo</h3>
            <p><strong>Check Couponsbit Before Buying:</strong> Always browse Couponsbit before placing an order to find the latest RayNeo promo codes and technology deals.</p>
            <p><strong>Shop Major Sales Events:</strong> Look for significant technology discounts during Black Friday, Cyber Monday, Memorial Day, Labor Day, and Holiday Sales.</p>
            <p><strong>Watch for Launch Promotions:</strong> New product releases often come with introductory discounts and limited-time offers.</p>
            <p><strong>Bundle Accessories:</strong> Purchasing accessories together with your device may provide additional value and savings opportunities.</p>
            <p><strong>Subscribe for Updates:</strong> Email subscribers may gain access to special promotions and exclusive product announcements.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#19798d] mb-4">Why Choose RayNeo?</h3>
            <p><strong>Immersive Viewing:</strong> RayNeo devices create large virtual screens that enhance entertainment, gaming, and productivity.</p>
            <p><strong>Portable Design:</strong> Lightweight construction allows users to enjoy digital content virtually anywhere.</p>
            <p><strong>Multi-Device Compatibility:</strong> Works with smartphones, tablets, laptops, and gaming consoles.</p>
            <p><strong>Innovative Tech:</strong> Ongoing investment in advanced AR and wearable display solutions for modern digital lifestyles.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#19798d] mb-4">Experience the Future for Less</h3>
            <p>Whether you're looking for AR smart glasses, wearable displays, or innovative productivity solutions, RayNeo offers technology designed to enhance how you interact with the digital world.</p>
            <p>Before completing your purchase, visit Couponsbit to explore the latest RayNeo coupon codes, promo codes, and smart glasses deals. With verified discounts, we help you unlock more value from your next tech purchase.</p>
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
            { q: "Does RayNeo offer coupon codes?", a: "Yes. RayNeo occasionally offers promo codes, discounts, and special promotions on smart glasses and wearable technology products." },
            { q: "Where can I find RayNeo promo codes?", a: "You can find the latest RayNeo coupon codes and technology deals directly on Couponsbit." },
            { q: "What does RayNeo sell?", a: "RayNeo specializes in AR smart glasses, wearable displays, immersive entertainment devices, and productivity-focused technology products." },
            { q: "Are RayNeo smart glasses compatible with smartphones?", a: "Many RayNeo products are designed to work with compatible smartphones, tablets, laptops, gaming devices, and other supported hardware." },
            { q: "Who should use RayNeo products?", a: "RayNeo products are ideal for gamers, remote workers, content creators, travelers, and technology early adopters." },
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
          <h4 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular RayNeo Searches</h4>
          <div className="flex flex-wrap gap-2.5">
            {["AR Glasses", "RayNeo Air 2", "Wearable Display", "Smart Glasses", "RayNeo Promo Code", "Gaming Glasses", "AR Display", "Tech Deals"].map(tag => (
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
          <h4 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top RayNeo Deals</h4>
          <div className="space-y-6">
            {COUPONS.slice(0, 5).map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#19798d] font-black text-xl italic shadow-inner">R</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#19798d] transition-colors">{deal.heading}</p>
                  <p className="text-gray-400 font-medium text-[10px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://rayneo.pxf.io/c/4303217/1983430/24338?subId1=1015" target="_blank" rel="noopener noreferrer" className="bg-[#e8f6f8] text-[#19798d] px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#19798d] hover:text-white transition-all active:scale-90">GET</a>
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
