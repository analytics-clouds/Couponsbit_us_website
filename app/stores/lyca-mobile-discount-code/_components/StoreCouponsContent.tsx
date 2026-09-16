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
    id: "lyc1",
    discount: "50%",
    label: "SAVE UP TO",
    badge: "Best Offer",
    title: "Lyca Mobile 30GB Pay Monthly Plan – Discount Code | 50% OFF + Extra 10% OFF",
    heading: "30GB Pay Monthly Plan",
    sub: "50% OFF + Extra 10% OFF",
    description: "Get 30GB data for just £5 for the first month, reduced from £10 with this limited-time Lyca Mobile offer.",
    usedCount: "102k",
    expiresIn: "2 days",
    code: "LYCA10"
  },
  {
    id: "lyc2",
    discount: "50%",
    label: "UP TO",
    badge: "Popular",
    title: "Lyca Mobile UK Unlimited Plan – Discount Code | 50% OFF",
    heading: "UK Unlimited Plan",
    sub: "50% OFF",
    description: "Get unlimited data for just £12.50 per 30 days, reduced from £25, with 50% OFF for the first 3 months.",
    usedCount: "89k",
    expiresIn: "6 days",
    code: "LYCA10"
  },
  {
    id: "lyc3",
    discount: "50%",
    label: "UP TO",
    badge: "Trending",
    title: "Lyca Mobile Super Extra 5G Plan – Discount Code | 50% OFF",
    heading: "Super Extra 5G Plan",
    sub: "50% OFF",
    description: "Get 75GB of 5G data for just £7.50 per 30 days, reduced from £15, with 50% OFF for the first 3 months.",
    usedCount: "74k",
    expiresIn: "4 days",
    code: "LYCA10"
  },
  {
    id: "lyc4",
    discount: "50%",
    label: "SAVE UP TO",
    title: "Lyca Mobile Pay As You Go SIM – Discount Code | 50% OFF + Extra 10% OFF",
    heading: "Pay As You Go SIM",
    sub: "50% OFF + Extra 10% OFF",
    description: "Enjoy 50% OFF for the first month and get 30GB data for just £5 for 30 days.",
    usedCount: "61k",
    expiresIn: "3 days",
    code: "LYCA10"
  },
  {
    id: "lyc5",
    discount: "50%",
    label: "UP TO",
    title: "Lyca Mobile Exclusive 5G Plan | Up To 50% OFF",
    heading: "Exclusive 5G Plan",
    sub: "Up To 50% OFF",
    description: "Get up to 50% OFF for the first 6 months on a 24-month contract and enjoy unlimited data at a reduced monthly price.",
    usedCount: "48k",
    expiresIn: "5 days",
    code: "LYCA10"
  }
];

const RELATED_STORES: StoreItem[] = [
  { name: "Oppo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784970/oppo-logo_umnpx7.webp", dealText: "From $39", href: "/stores/oppo-discount-code" },
  { name: "Airalo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/airalo-logo_fc6u6p.webp", dealText: "USA eSIM From $4.50", href: "/stores/airalo-discount-code" },
  { name: "Apple", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/apple-logo_vrakxu.webp", dealText: "Up To $150 Gift Card", href: "/stores/apple-discount-code" },
  { name: "Jetpac", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787741564/jetpac-logo_prj8gu.webp", dealText: "Save Up To 70%", href: "/stores/jetpac-discount-code" },
  { name: "TP-Link", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/tp-link-logo_y9efya.webp", dealText: "Up To 50% OFF", href: "/stores/tplink-promo-code" },
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
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
                  <a href="https://www.lycamobile.co.uk/en/affiliate-coupon-code-10/?im_ref=VlX35y3mRxyZUPhT3qXyp0onUkr2fZV5qV790U0&utm_campaign=4303217&utm_content=Analytics%20clouds&utm_source=impact&utm_medium=Affiliate&irgwc=1&afsrc=1" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/lyca-mobile-coupon-code_svvddg.webp" alt="Lyca Mobile" width={112} height={112} className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Lyca Mobile Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(11.5k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Lyca Mobile discount codes and promo codes to save 50% on selected Pay Monthly, Unlimited, 5G, and SIM plans. Use discount code LYCA10 to get an extra 10% OFF on eligible orders while enjoying generous data, international minutes, and EU roaming.
                    </p>
                    <a
                      href="https://www.lycamobile.co.uk/en/affiliate-coupon-code-10/?im_ref=VlX35y3mRxyZUPhT3qXyp0onUkr2fZV5qV790U0&utm_campaign=4303217&utm_content=Analytics%20clouds&utm_source=impact&utm_medium=Affiliate&irgwc=1&afsrc=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "5", label: "Coupons" },
                    { icon: Percent, val: "180+", label: "Deals" },
                    { icon: Users, val: "1.5M+", label: "Callers" },
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
                    <a href="https://www.lycamobile.co.uk/en/affiliate-coupon-code-10/?im_ref=VlX35y3mRxyZUPhT3qXyp0onUkr2fZV5qV790U0&utm_campaign=4303217&utm_content=Analytics%20clouds&utm_source=impact&utm_medium=Affiliate&irgwc=1&afsrc=1" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782131654/lyca_discount_code_wiubg0.webp" alt="Lyca Mobile Discount Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://www.lycamobile.co.uk/en/affiliate-coupon-code-10/?im_ref=VlX35y3mRxyZUPhT3qXyp0onUkr2fZV5qV790U0&utm_campaign=4303217&utm_content=Analytics%20clouds&utm_source=impact&utm_medium=Affiliate&irgwc=1&afsrc=1" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782131654/lyca_voucher_code_omppiu.webp" alt="Lyca Mobile Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://www.lycamobile.co.uk/en/affiliate-coupon-code-10/?im_ref=VlX35y3mRxyZUPhT3qXyp0onUkr2fZV5qV790U0&utm_campaign=4303217&utm_content=Analytics%20clouds&utm_source=impact&utm_medium=Affiliate&irgwc=1&afsrc=1" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782131654/lyca_discount_code_wiubg0.webp" alt="Lyca Mobile Voucher Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Lyca Mobile Coupon Codes & Offers</h2>
                  <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">5 Coupons & Offers Available</p>
                </div>

      

                {/* Coupon 1 */}
<div className="w-full max-w-7xl mx-auto mb-6">
  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
    <div className="flex flex-row">
      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
        <div className="text-center px-1">
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Save UP TO</p>
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">50%</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">+10% OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Lyca Mobile 30GB Pay Monthly Plan – Discount Code | 50% OFF + Extra 10% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get 30GB data for just £5 for the first month, reduced from £10 with this limited-time Lyca Mobile offer.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy 12GB EU roaming, 100 international minutes, and unlimited EU calls and texts while roaming.</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Use Discount Code: LYCA10 | Get an Extra 10% OFF on your order.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6 mb-2 lg:mb-0 gap-3">
          <a href="https://www.lycamobile.co.uk/en/affiliate-coupon-code-10/?im_ref=VlX35y3mRxyZUPhT3qXyp0onUkr2fZV5qV790U0&utm_campaign=4303217&utm_content=Analytics%20clouds&utm_source=impact&utm_medium=Affiliate&irgwc=1&afsrc=1" target="_blank" rel="noopener noreferrer" aria-label="Get Lyca Mobile deal: 30GB Pay Monthly Plan 50% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
          <button type="button" onClick={() => handleCopy("LYCA 10")} className="w-full lg:w-auto flex items-center justify-between gap-3 border-2 border-dashed border-[#056bfa] rounded-2xl px-4 py-2.5 bg-white hover:bg-[#e8f6f8] transition-colors">
                      <span className="font-mono font-black text-[#056bfa] text-sm tracking-widest">LYCA 10</span>
                      <span className="flex items-center gap-1 text-[#056bfa] font-bold text-[11px] uppercase shrink-0">
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </span>
                    </button>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">50%</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Lyca Mobile UK Unlimited Plan – Discount Code | 50% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get unlimited data for just £12.50 per 30 days, reduced from £25, with 50% OFF for the first 3 months.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy unlimited UK calls and texts, 100 international minutes, plus EU & India roaming with up to 35GB data.</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Use Discount Code: LYCA10 | Get an Extra 10% OFF on your order.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6 mb-2 lg:mb-0 gap-3">
          <a href="https://www.lycamobile.co.uk/en/affiliate-coupon-code-10/?im_ref=VlX35y3mRxyZUPhT3qXyp0onUkr2fZV5qV790U0&utm_campaign=4303217&utm_content=Analytics%20clouds&utm_source=impact&utm_medium=Affiliate&irgwc=1&afsrc=1" target="_blank" rel="noopener noreferrer" aria-label="Get Lyca Mobile deal: 30GB Pay Monthly Plan 50% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
          <button type="button" onClick={() => handleCopy("LYCA 10")} className="w-full lg:w-auto flex items-center justify-between gap-3 border-2 border-dashed border-[#056bfa] rounded-2xl px-4 py-2.5 bg-white hover:bg-[#e8f6f8] transition-colors">
                      <span className="font-mono font-black text-[#056bfa] text-sm tracking-widest">LYCA 10</span>
                      <span className="flex items-center gap-1 text-[#056bfa] font-bold text-[11px] uppercase shrink-0">
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </span>
                    </button>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">50%</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Lyca Mobile Super Extra 5G Plan – Discount Code | 50% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get 75GB of 5G data for just £7.50 per 30 days, reduced from £15, with 50% OFF for the first 3 months.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy unlimited UK calls and texts, 100 international minutes, and EU & India roaming with up to 12GB roaming data.</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Use Discount Code: LYCA10 | Get an Extra 10% OFF on your order.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6 mb-2 lg:mb-0 gap-3">
          <a href="https://www.lycamobile.co.uk/en/affiliate-coupon-code-10/?im_ref=VlX35y3mRxyZUPhT3qXyp0onUkr2fZV5qV790U0&utm_campaign=4303217&utm_content=Analytics%20clouds&utm_source=impact&utm_medium=Affiliate&irgwc=1&afsrc=1" target="_blank" rel="noopener noreferrer" aria-label="Get Lyca Mobile deal: 30GB Pay Monthly Plan 50% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
          <button type="button" onClick={() => handleCopy("LYCA 10")} className="w-full lg:w-auto flex items-center justify-between gap-3 border-2 border-dashed border-[#056bfa] rounded-2xl px-4 py-2.5 bg-white hover:bg-[#e8f6f8] transition-colors">
                      <span className="font-mono font-black text-[#056bfa] text-sm tracking-widest">LYCA 10</span>
                      <span className="flex items-center gap-1 text-[#056bfa] font-bold text-[11px] uppercase shrink-0">
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </span>
                    </button>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">Save UP TO</p>
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">50%</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">+10% OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Lyca Mobile Pay As You Go SIM – Discount Code | 50% OFF + Extra 10% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Enjoy 50% OFF for the first month and get 30GB data for just £5 for 30 days.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Get 12GB EU roaming, 100 international minutes, plus 5G and eSIM support for added flexibility.</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Use Discount Code: LYCA10 | Get an Extra 10% OFF on your order. T&Cs apply.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6 mb-2 lg:mb-0 gap-3">
          <a href="https://www.lycamobile.co.uk/en/affiliate-coupon-code-10/?im_ref=VlX35y3mRxyZUPhT3qXyp0onUkr2fZV5qV790U0&utm_campaign=4303217&utm_content=Analytics%20clouds&utm_source=impact&utm_medium=Affiliate&irgwc=1&afsrc=1" target="_blank" rel="noopener noreferrer" aria-label="Get Lyca Mobile deal: 30GB Pay Monthly Plan 50% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
          <button type="button" onClick={() => handleCopy("LYCA 10")} className="w-full lg:w-auto flex items-center justify-between gap-3 border-2 border-dashed border-[#056bfa] rounded-2xl px-4 py-2.5 bg-white hover:bg-[#e8f6f8] transition-colors">
                      <span className="font-mono font-black text-[#056bfa] text-sm tracking-widest">LYCA 10</span>
                      <span className="flex items-center gap-1 text-[#056bfa] font-bold text-[11px] uppercase shrink-0">
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </span>
                    </button>
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
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
          <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">50%</div>
          <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">OFF</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
          </div>
          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Lyca Mobile Exclusive 5G Plan | Up To 50% OFF</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get up to 50% OFF for the first 6 months on a 24-month contract and enjoy unlimited data at a reduced monthly price.</p>
          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
            View Details
            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Pay just £9 per month and get unlimited data, 30GB EU roaming, and 100 international minutes.</li>
              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Use Coupon Code: LYCA10 | Get 10% OFF on your order. T&Cs apply.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6 mb-2 lg:mb-0 gap-3">
          <a href="https://www.lycamobile.co.uk/en/affiliate-coupon-code-10/?im_ref=VlX35y3mRxyZUPhT3qXyp0onUkr2fZV5qV790U0&utm_campaign=4303217&utm_content=Analytics%20clouds&utm_source=impact&utm_medium=Affiliate&irgwc=1&afsrc=1" target="_blank" rel="noopener noreferrer" aria-label="Get Lyca Mobile deal: 30GB Pay Monthly Plan 50% OFF" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
          <button type="button" onClick={() => handleCopy("LYCA 10")} className="w-full lg:w-auto flex items-center justify-between gap-3 border-2 border-dashed border-[#056bfa] rounded-2xl px-4 py-2.5 bg-white hover:bg-[#e8f6f8] transition-colors">
                      <span className="font-mono font-black text-[#056bfa] text-sm tracking-widest">LYCA 10</span>
                      <span className="flex items-center gap-1 text-[#056bfa] font-bold text-[11px] uppercase shrink-0">
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </span>
                    </button>
        </div>
      </div>
    </div>
  </div>
</div>

           
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
                    <img
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png"
                      alt="Add as a preferred source on Google"
                      width={280}
                      height={70}
                      className="w-full max-w-[260px] h-auto object-contain"
                    />
                  </a>
                </div>

                {/* About Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">About Lyca</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Lyca Mobile is one of the world's largest international mobile virtual network operators (MVNOs), serving millions of customers across multiple countries. In the United States, Lyca Mobile provides affordable prepaid wireless services that focus on flexible plans, international connectivity, and value-driven pricing.
                  </p>
                  <a href="https://www.lycamobile.co.uk/en/affiliate-coupon-code-10/?im_ref=VlX35y3mRxyZUPhT3qXyp0onUkr2fZV5qV790U0&utm_campaign=4303217&utm_content=Analytics%20clouds&utm_source=impact&utm_medium=Affiliate&irgwc=1&afsrc=1" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
                    <img src={store.logo} alt={store.name} width={120} height={48} className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
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
      {/* Left: Text Content */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Lyca Mobile Coupon Codes, Promo Codes & Prepaid Plan Deals 2026
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-none rounded-br-none">
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 font-bold text-[14px]">
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">30GB Pay Monthly Plan</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">50% OFF + Extra 10% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">£5 first month, reduced from £10</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">30GB pay monthly plan</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">UK Unlimited Plan</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">50% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">£12.50/30 days, reduced from £25</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">UK unlimited data plan</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Super Extra 5G Plan</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">50% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">£7.50/30 days, reduced from £15</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">75GB 5G data plan</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Pay As You Go SIM</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">50% OFF + Extra 10% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">£5 for 30 days, 5G & eSIM support</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Pay As You Go SIM</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Exclusive 5G Plan</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up To 50% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">£9/month on a 24-month contract</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Unlimited data 5G plan</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for the latest <strong>Lyca Mobile coupon codes, promo codes, and prepaid wireless deals</strong>? You've come to the right place. At Couponsbit, we help customers save on prepaid phone plans, international calling packages, mobile data plans, and SIM card deals with verified Lyca Mobile discounts and exclusive offers.
          </p>
          <p>
            Whether you're looking for affordable nationwide coverage, low-cost international calling, flexible prepaid plans, or budget-friendly mobile services, Lyca Mobile offers solutions designed to keep you connected without long-term contracts. Before activating your next plan, check Couponsbit for the latest Lyca Mobile deals and savings opportunities.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">About Lyca Mobile</h3>
            
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
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Lyca Mobile Coupon Code</h3>
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
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save at Lyca Mobile</h3>
            <p><strong>Check Couponsbit Before Activating a Plan:</strong> Always browse Couponsbit for the latest Lyca Mobile promo codes and prepaid wireless deals.</p>
            <p><strong>Look for New Customer Offers:</strong> Lyca Mobile frequently provides introductory promotions for new customers and SIM activations.</p>
            <p><strong>Choose the Right Plan:</strong> Selecting a plan that matches your calling, texting, and data usage can help avoid unnecessary costs.</p>
            <p><strong>Watch for Seasonal Promotions:</strong> Major shopping and promotional events often feature additional savings opportunities. Look for offers during: Black Friday, Cyber Monday, Back-to-School Promotions, Holiday Sales, New Year Deals, and Summer Specials.</p>
            <p><strong>Take Advantage of International Calling Benefits:</strong> If you frequently call overseas, choosing a plan with international calling features may provide greater overall value.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose Lyca Mobile?</h3>
            <p><strong>No Long-Term Contracts:</strong> Customers can enjoy prepaid wireless service without annual commitments.</p>
            <p><strong>International Connectivity:</strong> Lyca Mobile helps users stay connected with friends and family around the world.</p>
            <p><strong>Affordable Pricing:</strong> The company offers budget-friendly plans that fit a variety of communication needs.</p>
            <p><strong>Flexible Plan Options:</strong> Users can select plans based on their preferred balance of talk, text, and data.</p>
            <p><strong>Nationwide Coverage:</strong> Customers can access reliable mobile service across much of the United States.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for Lyca Mobile Deals?</h3>
            <p><strong>Verified Discounts:</strong> We regularly update available Lyca Mobile offers to help customers find current savings.</p>
            <p><strong>Easy Savings:</strong> Find mobile service deals, coupon codes, and promotional offers in one convenient place.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use and helps consumers save on wireless services, technology, travel, shopping, and more.</p>
            <p><strong>Updated Promotions:</strong> Our team continually monitors deals to help users access the latest offers.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Stay Connected While Saving More</h3>
            <p>Whether you're looking for affordable prepaid service, international calling solutions, flexible mobile plans, or budget-friendly wireless options, Lyca Mobile offers convenient ways to stay connected.</p>
            <p>Before activating your next plan, visit Couponsbit to explore the latest Lyca Mobile coupon codes, promo codes, and prepaid wireless deals. With verified discounts and regularly updated offers, Couponsbit helps you enjoy reliable mobile service while spending less.</p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button 
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline"
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Lyca Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Prepaid Plans", "Lyca SIM Card", "International Call", "Lyca Data Plan", "Lyca Promo Code", "Unlimited Talk", "Wireless Deals", "Mobile Refill"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Lyca Deals</h3>
          <div className="space-y-6">
            {COUPONS.slice(0, 5).map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">L</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://www.lycamobile.co.uk/en/affiliate-coupon-code-10/?im_ref=VlX35y3mRxyZUPhT3qXyp0onUkr2fZV5qV790U0&utm_campaign=4303217&utm_content=Analytics%20clouds&utm_source=impact&utm_medium=Affiliate&irgwc=1&afsrc=1" target="_blank" rel="noopener noreferrer" aria-label={`Get Lyca Mobile deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
