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
  Plane,
  Briefcase,
  MapPin,
  Calendar,
  Tv,Globe, Armchair, BriefcaseBusiness, CreditCard, PlusCircle,
  Code,
  Map,
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
    id: "lat1",
    discount: "40%",
    label: "UP TO",
    badge: "Best Offer",
    title: "Up to 40% OFF on Mid-Week Flights",
    heading: "Up to 40% OFF",
    sub: "Mid-Week Flights",
    description: "Plan your South America escape or international trip. Save up to 40% when booking mid week flights on select routes.",
    usedCount: "94k",
    expiresIn: "2 days",
    code: "LATAM40"
  },
  {
    id: "lat2",
    discount: "$150",
    label: "FLAT",
    badge: "Popular",
    title: "Flat $150 OFF Flight + Hotel Package",
    heading: "Flat $150 OFF",
    sub: "Flight + Hotel Package",
    description: "Ultimate bundled savings! Save flat $150 instantly on flight + hotel vacation reservation packages globally.",
    usedCount: "83k",
    expiresIn: "5 days",
    code: "ESCAPE150"
  },
  {
    id: "lat3",
    discount: "10%",
    label: "EXTRA",
    badge: "Trending",
    title: "Extra 10% OFF Flight Bookings for Members",
    heading: "Extra 10% OFF",
    sub: "LATAM Pass Members",
    description: "Exclusive LATAM Pass loyalty promo code. Get an extra 10% discount on standard domestic or international airfares.",
    usedCount: "71k",
    expiresIn: "3 days",
    code: "LOYALTY10"
  },
  {
    id: "lat4",
    discount: "15%",
    label: "FLAT",
    title: "Flat 15% OFF Premium Class Cabin Seats",
    heading: "Flat 15% OFF",
    sub: "Premium Class Cabin Seats",
    description: "Fly with maximum luxury and space. Get flat 15% off on Premium Economy & Business Class flight tickets.",
    usedCount: "58k",
    expiresIn: "4 days",
    code: "PREMIUM15"
  },
  {
    id: "lat5",
    discount: "FREE",
    label: "UPGRADE",
    title: "Free Carry-On Cabin Baggage Allowance",
    heading: "Free Carry-On",
    sub: "Cabin Baggage Allowance",
    description: "Bring more on your journey. Apply this exclusive promo voucher code and secure free cabin baggage upgrades.",
    usedCount: "44k",
    expiresIn: "6 days",
    code: "FREEBAG"
  }
];

const RELATED_STORES: StoreItem[] = [
  { name: "StubHub",        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp",        dealText: "Up to 15% OFF", href: "/stores/stubhub-coupon-code" },
  { name: "Viagogo",        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/viagogo-coupon-code_t65aol.webp",        dealText: "Up to 10% OFF", href: "/stores/viagogo-coupon-code" },
  { name: "Driffle",        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp",        dealText: "Up to 70% OFF", href: "/stores/driffle-coupon-code" },
  { name: "Bluehost",       logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp",       dealText: "Up to 65% OFF", href: "/stores/bluehost-coupon-code" },
  { name: "Lyca Mobile",    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/lyca-mobile-coupon-code_svvddg.webp",    dealText: "Up to 20% OFF", href: "/stores/lyca-mobile-coupon-code" },
  { name: "Rayneo",         logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/reyneo-coupon-code_q3crak.webp",         dealText: "Up to 30% OFF", href: "/stores/rayneo-coupon-code" },
];

export default function LatamCouponsContent() {
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
              <span className="text-black font-extrabold">Latam Airlines</span>
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
                  <a href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1781775924/latam-airlines-coupon-code_pvcsml.webp" alt="LATAM Airlines" width={112} height={112} className="w-full h-full object-contain" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2 flex items-center gap-2">
                      LATAM Airlines
                    </h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(25k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px]">
                      LATAM Airlines — Top South American carrier. 8 verified deals live! Flights from $136, 40% OFF packages & earn 40,000 bonus miles. Book now!
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Tag, val: "8", label: "Coupons" },
                    { icon: Percent, val: "200+", label: "Deals" },
                    { icon: Users, val: "3M+", label: "Shoppers" },
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
                <div className="relative rounded-2xl overflow-hidden h-[280px] shadow-lg group">
                  {/* Slide 1 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 0 ? 1 : 0 }}>
                    <a href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="/latam-airlines-discount-ode.webp" alt="LATAM Airlines Discount Code" width={800} height={350} className="w-full h-full object-cover" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="/latam-airlines-voucher-code.webp" alt="LATAM Airlines Voucher Code" width={800} height={350} className="w-full h-full object-cover" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="/latam-airlines-promo-code.webp" alt="LATAM Airlines Promo Code" width={800} height={350} className="w-full h-full object-cover" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">LATAM Airlines Coupon Codes & Offers</h2>
                  <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">8 Coupons & Offers Available</p>
                </div>


                  <div className="w-full max-w-7xl mx-auto mb-6">

      <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">

        {/* DESKTOP LAYOUT SAME */}
        <div className="flex flex-row">

          {/* LEFT OFFER BOX */}
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">

            {/* CUTS */}
            <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="text-center px-1">

              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
              Earn</p>

              <h2 className="text-[20px] sm:text-4xl font-extrabold leading-none mt-2">
                  40,000  </h2>

              <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">
                
Bonus Miles
              </p>

            </div>

          </div>

          {/* CONTENT SECTION */}
          <div className="flex-1 flex flex-col lg:flex-row min-w-0">

            {/* CENTER CONTENT */}
            <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">

              {/* BADGES */}
              <div className="flex flex-wrap gap-2 mb-3">

                <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>

                <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Verified Deal
                </span>

              </div>

              {/* HEADING */}
              <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">

                LATAM Airlines Credit Card Offer – Earn 40,000 Bonus Miles

              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                Get rewarded with bonus miles on approved LATAM Airlines credit cards.

              </p>

              {/* VIEW DETAILS */}
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
              >
                View Details

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ACCORDION */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open
                    ? "max-h-[250px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >

                <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Earn 40,000 bonus miles
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Redeem miles for South America flights
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Minimum spend terms apply
                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
              >

                Get Deal

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>




                 <div className="w-full max-w-7xl mx-auto mb-6">

      <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">

        {/* DESKTOP LAYOUT SAME */}
        <div className="flex flex-row">

          {/* LEFT OFFER BOX */}
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">

            {/* CUTS */}
            <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="text-center px-1">

              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
              starting
             </p>

              <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                  $308</h2>

           
            </div>

          </div>

          {/* CONTENT SECTION */}
          <div className="flex-1 flex flex-col lg:flex-row min-w-0">

            {/* CENTER CONTENT */}
            <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">

              {/* BADGES */}
              <div className="flex flex-wrap gap-2 mb-3">

                <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>

                <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Verified Deal
                </span>

              </div>

              {/* HEADING */}
              <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">

                Flights from New York to Santiago, Chile.

              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                Book affordable direct flights from New York to Santiago.

              </p>

              {/* VIEW DETAILS */}
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
              >
                View Details

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ACCORDION */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open
                    ? "max-h-[250px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >

                <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                      Departure: 08/10/26
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Fares starting at USD 308
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Direct economy flight available
                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
              >

                Get Deal

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>



                 <div className="w-full max-w-7xl mx-auto mb-6">

      <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">

        {/* DESKTOP LAYOUT SAME */}
        <div className="flex flex-row">

          {/* LEFT OFFER BOX */}
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">

            {/* CUTS */}
            <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="text-center px-1">

              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
              UPTO </p>

              <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                  40% </h2>

              <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">
                OFF
              </p>

            </div>

          </div>

          {/* CONTENT SECTION */}
          <div className="flex-1 flex flex-col lg:flex-row min-w-0">

            {/* CENTER CONTENT */}
            <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">

              {/* BADGES */}
              <div className="flex flex-wrap gap-2 mb-3">

                <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>

                <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Verified Deal
                </span>

              </div>

              {/* HEADING */}
              <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">

                
               UPTO 40% OFF On Packages, Hotels & Car Rentals

              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                Save big on complete travel bookings with LATAM Airlines offers.

              </p>

              {/* VIEW DETAILS */}
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
              >
                View Details

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ACCORDION */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open
                    ? "max-h-[250px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >

                <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Up to 40% OFF sitewide bookings
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Applicable on orders above $40
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Covers concerts, sports & live events
                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
              >

                Get Deal

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>


                 <div className="w-full max-w-7xl mx-auto mb-6">

      <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">

        {/* DESKTOP LAYOUT SAME */}
        <div className="flex flex-row">

          {/* LEFT OFFER BOX */}
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">

            {/* CUTS */}
            <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="text-center px-1">

              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
              Starting  </p>

              <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                  $554</h2>

              

            </div>

          </div>

          {/* CONTENT SECTION */}
          <div className="flex-1 flex flex-col lg:flex-row min-w-0">

            {/* CENTER CONTENT */}
            <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">

              {/* BADGES */}
              <div className="flex flex-wrap gap-2 mb-3">

                <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>

                <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Verified Deal
                </span>

              </div>

              {/* HEADING */}
              <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">

                Miami To Rio De Janeiro – Starting At USD 554

              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                Enjoy budget-friendly fares from Miami to Rio De Janeiro.

              </p>

              {/* VIEW DETAILS */}
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
              >
                View Details

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ACCORDION */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open
                    ? "max-h-[250px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >

                <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                  Departure: 08/21/26
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    One-way economy booking
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Flight with connection included
                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
              >

                Get Deal

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>


                 <div className="w-full max-w-7xl mx-auto mb-6">

      <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">

        {/* DESKTOP LAYOUT SAME */}
        <div className="flex flex-row">

          {/* LEFT OFFER BOX */}
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">

            {/* CUTS */}
            <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="text-center px-1">

              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
              starting at</p>

              <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                  $136</h2>

            
            </div>

          </div>

          {/* CONTENT SECTION */}
          <div className="flex-1 flex flex-col lg:flex-row min-w-0">

            {/* CENTER CONTENT */}
            <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">

              {/* BADGES */}
              <div className="flex flex-wrap gap-2 mb-3">

                <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>

                <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Verified Deal
                </span>

              </div>

              {/* HEADING */}
              <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">

                Miami To Punta Cana – Starting At $136

              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                Grab affordable flights to Punta Cana at the best prices.

              </p>

              {/* VIEW DETAILS */}
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
              >
                View Details

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ACCORDION */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open
                    ? "max-h-[250px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >

                <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Flights starting at $136
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Affordable vacation travel deal
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Special LATAM pricing available
                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
              >

                Get Deal

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>

                 <div className="w-full max-w-7xl mx-auto mb-6">

      <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">

        {/* DESKTOP LAYOUT SAME */}
        <div className="flex flex-row">

          {/* LEFT OFFER BOX */}
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">

            {/* CUTS */}
            <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="text-center px-1">

              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
              Flat   </p>

              <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                  10%  </h2>

              <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">
                OFF
              </p>

            </div>

          </div>

          {/* CONTENT SECTION */}
          <div className="flex-1 flex flex-col lg:flex-row min-w-0">

            {/* CENTER CONTENT */}
            <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">

              {/* BADGES */}
              <div className="flex flex-wrap gap-2 mb-3">

                <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>

                <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Verified Deal
                </span>

              </div>

              {/* HEADING */}
              <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">

                Flat 10% OFF Sitewide On Orders Above $40

              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                Unlock instant savings on concerts,
                sports events, live shows and more.

              </p>

              {/* VIEW DETAILS */}
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
              >
                View Details

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ACCORDION */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open
                    ? "max-h-[250px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >

                <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Flat 10% OFF on sitewide bookings
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Applicable on orders above $40
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#056bfa]">•</span>
                    Covers concerts, sports & live events
                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
              >

                Get Deal

              </a>

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
                  <h3 className="text-black font-black text-lg mb-6">About LATAM</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6">
                    LATAM Airlines is one of the largest airline groups in Latin America, serving millions of passengers every year through an extensive network of domestic and international routes. The airline connects major cities across countries such as Brazil, Chile, Peru, Colombia, Ecuador, and Argentina, while also offering flights to North America, Europe, Oceania, and other global destinations.
                  </p>
                  <a href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
  <h3 className="text-black font-black text-lg mb-8">What Does LATAM Airlines Offer?</h3>

  <div className="space-y-8">
    {[
      { 
        icon: Map, 
        title: "Domestic Flights", 
        sub: "LATAM operates extensive domestic networks throughout several South American countries, helping travelers reach both major cities and regional destinations." 
      },
      { 
        icon: Globe, 
        title: "International Flights", 
        sub: "Travelers can book flights between Latin America and destinations across the United States, Europe, Oceania, and other international markets." 
      },
      { 
        icon: Armchair, 
        title: "Premium Economy", 
        sub: "Enjoy additional comfort, priority services, and enhanced travel benefits on eligible routes." 
      },
      { 
        icon: BriefcaseBusiness, 
        title: "Premium Business", 
        sub: "Business-class travelers can access premium seating, airport benefits, and additional baggage allowances on qualifying flights." 
      },
      { 
        icon: CreditCard, 
        title: "LATAM Pass Loyalty Program", 
        sub: "Frequent travelers can earn and redeem miles through the LATAM Pass rewards program while accessing benefits such as priority services, lounge access, upgrades, and additional baggage allowances." 
      },
      { 
        icon: PlusCircle, 
        title: "Travel Add-Ons", 
        sub: "Passengers can customize their trips with: Seat selection, Additional baggage, Travel insurance, Special assistance services, Airport services, and Flexible booking options." 
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
                  <span className="text-[#056bfa] font-black text-[12px] uppercase hover:underline decoration-2">View Coupons →</span>
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
          LATAM Airlines Coupon Codes, Promo Codes & Flight Deals 2026
        </h2>
        
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for the latest <strong>LATAM Airlines coupon codes, promo codes, and flight deals</strong>? You've come to the right place. At Couponsbit, we help travelers save on flights, vacation packages, seat upgrades, baggage services, and travel experiences with verified LATAM Airlines discounts and exclusive offers.
          </p>
          <p>
            Whether you're planning a vacation in South America, a business trip, a family getaway, or an international adventure, LATAM Airlines connects travelers to hundreds of destinations across Latin America and beyond. Before booking your next flight, check Couponsbit for the latest LATAM Airlines deals and travel savings opportunities.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Know More About LATAM Airlines</h3>
            
            <p>
              LATAM Airlines is known for providing a variety of travel options, including Economy, Premium Economy, and Premium Business cabins. The airline also offers digital travel tools, baggage services, seat selection options, travel protection services, and loyalty benefits through its LATAM Pass program.
            </p>
            <p>
              Whether you're traveling for leisure, business, or family visits, LATAM Airlines offers flexible travel solutions designed to accommodate different budgets and travel preferences.
            </p>
            <p>
              At Couponsbit, we help travelers find the latest LATAM Airlines coupon codes, promo codes, and flight deals to make every journey more affordable.
            </p>
          </div>

          

          {/* How to Use Array Map */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a LATAM Airlines Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Browse Available LATAM Airlines Deals — Visit the LATAM Airlines page on Couponsbit and explore current discounts and travel offers.",
                "Step 2: Select an Offer — Choose the coupon code or deal that best matches your travel plans.",
                "Step 3: Copy the Promo Code — Click to reveal and copy the promo code if required.",
                "Step 4: Visit LATAM Airlines — Search for flights, vacation packages, or travel services on the LATAM Airlines website.",
                "Step 5: Apply the Coupon Code — Enter the promo code during checkout and verify that the discount has been applied.",
                "Step 6: Complete Your Booking — Finalize your reservation and enjoy savings on your upcoming trip."
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
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save on LATAM Airlines</h3>
            <p><strong>Check Couponsbit Before Booking:</strong> Always visit Couponsbit before making a reservation to find the latest LATAM Airlines promo codes and travel deals.</p>
            <p><strong>Join LATAM Pass:</strong> Frequent travelers can earn miles that may be redeemed for flights, upgrades, and travel benefits.</p>
            <p><strong>Book Early:</strong> Flight prices are often more competitive when reservations are made well in advance.</p>
            <p><strong>Watch for Seasonal Sales:</strong> Look for promotions during: Black Friday, Cyber Monday, Summer Travel Sales, Holiday Travel Promotions, New Year Travel Deals, and End-of-Season Sales.</p>
            <p><strong>Purchase Baggage in Advance:</strong> LATAM notes that travelers can often save money by purchasing baggage before arriving at the airport. Advance baggage purchases may cost less than airport rates.</p>
            <p><strong>Be Flexible With Travel Dates:</strong> Adjusting departure and return dates may help uncover lower fares and better travel deals.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Travelers Choose LATAM Airlines</h3>
            <p><strong>Extensive Route Network:</strong> LATAM serves numerous destinations throughout Latin America and international markets.</p>
            <p><strong>Flexible Fare Options:</strong> Travelers can choose fare classes that align with their budget and travel preferences.</p>
            <p><strong>Loyalty Rewards:</strong> The LATAM Pass program offers opportunities to earn and redeem miles while accessing travel perks.</p>
            <p><strong>Modern Travel Experience:</strong> Passengers can manage bookings, check in digitally, select seats, and access travel information online.</p>
            <p><strong>Business and Leisure Travel Solutions:</strong> LATAM offers services designed for both vacation travelers and corporate passengers.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for LATAM Airlines Deals?</h3>
            <p><strong>Verified Travel Discounts:</strong> We regularly update LATAM Airlines offers to help travelers find current savings opportunities.</p>
            <p><strong>Convenient Savings:</strong> Find flight deals, promo codes, and travel offers in one place.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use and helps travelers save on flights, hotels, shopping, software, and more.</p>
            <p><strong>Updated Promotions:</strong> Our team continuously monitors deals to help users access relevant travel savings.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Fly Farther While Spending Less</h3>
            <p>Whether you're exploring South America, planning an international vacation, visiting family, or traveling for business, LATAM Airlines offers a wide range of travel options to help you reach your destination comfortably.</p>
            <p>Before booking your next trip, visit Couponsbit to discover the latest LATAM Airlines coupon codes, promo codes, and flight deals. With verified offers and regularly updated travel discounts, Couponsbit helps you save more on every journey.</p>
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
            { q: "Does LATAM Airlines offer coupon codes?", a: "Yes. LATAM Airlines occasionally offers promotional fares, discount codes, and limited-time travel deals." },
            { q: "Where can I find LATAM Airlines promo codes?", a: "You can find the latest LATAM Airlines coupon codes and travel deals on Couponsbit." },
            { q: "What is LATAM Pass?", a: "LATAM Pass is the airline's loyalty program that allows members to earn and redeem miles while accessing travel benefits." },
            { q: "Does LATAM Airlines offer international flights?", a: "Yes. LATAM operates flights across Latin America and to destinations in North America, Europe, Oceania, and beyond." },
            { q: "Can I add baggage after booking?", a: "Yes. Travelers can purchase additional baggage through their reservation, and LATAM recommends purchasing baggage in advance when possible." },
            { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps users discover verified coupon codes, promo codes, and travel discounts." }
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
        {/* Box 1: Popular Searches */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular LATAM Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["LATAM Flights", "LATAM Pass", "LATAM Baggage", "LATAM Upgrades", "LATAM Promo Code", "LATAM Flight Deals", "South America Flights", "LATAM Offers"].map(tag => (
              <Link 
                key={tag} 
                href={`/search?q=${encodeURIComponent(tag)}`} 
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm hover:bg-[#056bfa] hover:text-white transition-all active:scale-95 border border-white"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Box 2: Today's Top Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top LATAM Deals</h3>
          <div className="space-y-6">
            {COUPONS.slice(0, 5).map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">L</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015" target="_blank" rel="noopener noreferrer" className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
