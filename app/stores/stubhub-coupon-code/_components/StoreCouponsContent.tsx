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
  Home,
  BookOpen,
  CheckCircle,
  X,
  ArrowRight,
  Ticket,
  Tv,
  Plane,
  Code,Music, Trophy, Theater, Laugh, Tent, Sparkles,
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
    id: "stub1",
    discount: "10%",
    label: "FLAT",
    badge: "Best Offer",
    title: "Flat 10% OFF Sitewide On Orders Above $40",
    heading: "Flat 10% OFF",
    sub: "Sitewide on orders above $40",
    description: "Unlock instant savings on concerts, sports events, live shows and more.",
    usedCount: "112k",
    expiresIn: "2 days",
    code: "FLAT10"
  },
  {
    id: "stub2",
    discount: "5%",
    label: "Save Up To",
    badge: "Popular",
    title: "NBA Playoffs - Western Conference Finals",
    heading: "Save Up To 5%",
    sub: "NBA Playoffs - West. Conference Finals",
    description: "Book your NBA Playoffs tickets now for the Oklahoma City Thunder vs San Antonio Spurs clash.",
    usedCount: "95k",
    expiresIn: "3 days",
    code: ""
  },
  {
    id: "stub3",
    discount: "$30",
    label: "Starting From",
    badge: "Trending",
    title: "Rock Music Tickets - Starting From $30",
    heading: "Starting From $30",
    sub: "Rock Music Tickets",
    description: "Enjoy electrifying live rock performances at affordable ticket prices.",
    usedCount: "88k",
    expiresIn: "1 day",
    code: ""
  },
  {
    id: "stub4",
    discount: "$171",
    label: "Starting At",
    title: "The Lion King New York Tickets - Starting At $171",
    heading: "Starting At $171",
    sub: "The Lion King - New York",
    description: "Experience the magic of The Lion King live in New York at special prices.",
    usedCount: "76k",
    expiresIn: "2 days",
    code: ""
  },
  {
    id: "stub5",
    discount: "$582",
    label: "Starting At",
    title: "Under The Big Sky Festival Tickets - Starting At $582",
    heading: "Starting At $582",
    sub: "Under The Big Sky Festival",
    description: "Enjoy a 3-day music festival experience packed with entertainment and live performances.",
    usedCount: "65k",
    expiresIn: "5 days",
    code: ""
  },
  {
    id: "stub6",
    discount: "$25",
    label: "FLAT",
    title: "Student Discount - Flat $25 OFF On Ticket Booking",
    heading: "Flat $25 OFF",
    sub: "Student Discount",
    description: "Students can unlock extra savings on event and concert tickets.",
    usedCount: "58k",
    expiresIn: "4 days",
    code: ""
  },
  {
    id: "stub7",
    discount: "$20",
    label: "GET",
    title: "New User Offer - Get $20 OFF On First Order",
    heading: "Get $20 OFF",
    sub: "New User - First Order",
    description: "Sign up today and enjoy an exclusive discount on your first booking.",
    usedCount: "50k",
    expiresIn: "3 days",
    code: ""
  }
];

const RELATED_STORES: StoreItem[] = [
  { name: "Viagogo",        logo: "/viagogo-coupon-code.webp",        dealText: "Up to 10% OFF", href: "/stores/viagogo-coupon-code" },
  { name: "LATAM Airlines", logo: "/latam-airlines-coupon-code.webp", dealText: "Up to 12% OFF", href: "/stores/latam-airlines-coupon-code" },
  { name: "Lyca Mobile",    logo: "/lyca-mobile-coupon-code.webp",    dealText: "Up to 20% OFF", href: "/stores/lyca-mobile-coupon-code" },
  { name: "Driffle",        logo: "/driffle-coupon-code.webp",        dealText: "Up to 70% OFF", href: "/stores/driffle-coupon-code" },
  { name: "Bluehost",       logo: "/bluehost-coupon-code.webp",       dealText: "Up to 65% OFF", href: "/stores/bluehost-coupon-code" },
  { name: "Rayneo",         logo: "/reyneo-coupon-code.webp",         dealText: "Up to 30% OFF", href: "/stores/rayneo-coupon-code" },
];

export default function StubHubCouponsContent() {
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
      <main className="mt-[64px]">
        {/* Section 1: Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0] mt-24">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#19798d] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/stores" className="text-[#19798d] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-black font-extrabold">StubHub</span>
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
                    <img src="/stubhub-coupon-code.webp" alt="StubHub" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">StubHub</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-400 font-bold text-sm">(18k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px]">
                      StubHub — World's largest ticket marketplace. 7 verified coupon codes live! Grab Flat 10% OFF, $25 student discount & $20 OFF for new users. Book now!
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Tag, val: "7", label: "Coupons" },
                    { icon: Percent, val: "150+", label: "Deals" },
                    { icon: Users, val: "2M+", label: "Shoppers" },
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
              {/* Right: Featured Banner Slider */}
<div className="hidden md:block flex-1">
  <div className="relative rounded-2xl overflow-hidden h-[350px] md:h-[350px] shadow-lg group">

    {/* Slide 1 */}
    <div
      className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center"
      style={{ opacity: activeSlide === 0 ? 1 : 0 }}
    >
      <img
        src="/stubhub-discount-code.webp"
        alt="Banner 1"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Slide 2 */}
    <div
      className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center"
      style={{ opacity: activeSlide === 1 ? 1 : 0 }}
    >
      <img
        src="/stubhub-promo-code.webp"
        alt="Banner 2"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Slide 3 */}
    <div
      className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center"
      style={{ opacity: activeSlide === 2 ? 1 : 0 }}
    >
      <img
        src="/stubhub-voucher-code.webp"
        alt="Banner 3"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Controls */}
    <button
      onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <ChevronRight className="w-5 h-5 text-white rotate-180" />
    </button>

    <button
      onClick={() => setActiveSlide((prev) => (prev + 1) % 3)}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <ChevronRight className="w-5 h-5 text-white" />
    </button>

    {/* Dots */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
      {[0, 1, 2].map((i) => (
        <button
          key={i}
          onClick={() => setActiveSlide(i)}
          className={cn(
            "w-2 h-2 rounded-full transition-all",
            activeSlide === i ? "bg-white w-5" : "bg-white/50"
          )}
        />
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
                  <h2 className="text-2xl font-black text-black leading-tight">StubHub Coupon Codes & Offers</h2>
                  <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">7 Coupons & Offers Available</p>
                </div>

               <div className="w-full max-w-7xl mx-auto mb-6">

      <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">

        {/* DESKTOP LAYOUT SAME */}
        <div className="flex flex-row">

          {/* LEFT OFFER BOX */}
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">

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

                <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>

                <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
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
                    <span className="text-[#0077b6]">•</span>
                    Flat 10% OFF on sitewide bookings
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                    Applicable on orders above $40
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                    Covers concerts, sports & live events
                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
              >

                Get Deal

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>


{/* Coupon 2 */}

   
 <div className="w-full max-w-7xl mx-auto mb-6">

      <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">

        {/* DESKTOP LAYOUT SAME */}
        <div className="flex flex-row">

          {/* LEFT OFFER BOX */}
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">

            {/* CUTS */}
            <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="text-center px-1">

              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
                Save Up To
              </p>

              <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                5%
              </h2>

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

                <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>

                <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Verified Deal
                </span>

              </div>

              {/* HEADING */}
              <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">

-NBA Playoffs Tickets – Western Conference Finals
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                Book your NBA Playoffs tickets now for the Oklahoma City Thunder vs San Antonio Spurs clash.

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
                    <span className="text-[#0077b6]">•</span>
                     - Match Date: May 24                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                    Venue: Frost Bank Center, San Antonio
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                   Western Conference Finals - Home Game 2  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
              >

                Get Deal

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>


{/* Coupon 3 */}

   
 <div className="w-full max-w-7xl mx-auto mb-6">

      <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">

        {/* DESKTOP LAYOUT SAME */}
        <div className="flex flex-row">

          {/* LEFT OFFER BOX */}
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">

            {/* CUTS */}
            <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="text-center px-1">

              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
                Starting From

              </p>

              <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                $30
              </h2>

              <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">
              </p>

            </div>

          </div>

          {/* CONTENT SECTION */}
          <div className="flex-1 flex flex-col lg:flex-row min-w-0">

            {/* CENTER CONTENT */}
            <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">

              {/* BADGES */}
              <div className="flex flex-wrap gap-2 mb-3">

                <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>

                <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Verified Deal
                </span>

              </div>

              {/* HEADING */}
              <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">

                 Rock Music Tickets – Starting From $30
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                Enjoy electrifying live rock performances at affordable ticket prices.

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
                    <span className="text-[#0077b6]">•</span>
                    Ticket prices start from just $30   </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                    Live performances by top artists & bands
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                    Available for all users
                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
              >

                Get Deal

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>

{/* Coupon 4 */}

   
 <div className="w-full max-w-7xl mx-auto mb-6">

      <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">

        {/* DESKTOP LAYOUT SAME */}
        <div className="flex flex-row">

          {/* LEFT OFFER BOX */}
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">

            {/* CUTS */}
            <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="text-center px-1">

              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
               Starting At
              </p>

              <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
              $171
              </h2>

           
            </div>

          </div>

          {/* CONTENT SECTION */}
          <div className="flex-1 flex flex-col lg:flex-row min-w-0">

            {/* CENTER CONTENT */}
            <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">

              {/* BADGES */}
              <div className="flex flex-wrap gap-2 mb-3">

                <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>

                <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Verified Deal
                </span>

              </div>

              {/* HEADING */}
              <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">

                The Lion King New York Tickets – Starting At $171

              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                Experience the magic of The Lion King live in New York at special prices.

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
                    <span className="text-[#0077b6]">•</span>
                     Tickets starting from $171   </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                    Premium theater experience
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                     Book now before seats sell out </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
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
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">

            {/* CUTS */}
            <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="text-center px-1">

              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
                 Starting At
              </p>

              <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                 $582  </h2>

          
            </div>

          </div>

          {/* CONTENT SECTION */}
          <div className="flex-1 flex flex-col lg:flex-row min-w-0">

            {/* CENTER CONTENT */}
            <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">

              {/* BADGES */}
              <div className="flex flex-wrap gap-2 mb-3">

                <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>

                <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Verified Deal
                </span>

              </div>

              {/* HEADING */}
              <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">

                 Under The Big Sky Festival Tickets - Starting At $582
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                 Enjoy a 3-day music festival experience packed with entertainment and live performance
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
                    <span className="text-[#0077b6]">•</span>
                  Tickets start at $582 </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                    3-day passes available
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                     Offer valid for all users</li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
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
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">

            {/* CUTS */}
            <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="text-center px-1">

              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
               Flat              </p>

              <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                $25
              </h2>

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

                <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>

                <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Verified Deal
                </span>

              </div>

              {/* HEADING */}
              <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">

                 STUDENT DISCOUNT – Flat $25 OFF On Ticket Booking
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                 Students can unlock extra savings on event and concert tickets.
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
                    <span className="text-[#0077b6]">•</span>
                     Flat $25 OFF with student code  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                    Applicable on ticket bookings
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                     Special offer for students only </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
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
          <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">

            {/* CUTS */}
            <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>

            <div className="text-center px-1">

              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
                 GET $20 OFF </p>

              <h2 className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                $20
              </h2>

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

                <span className="bg-red-100 text-red-500 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Limited Time
                </span>

                <span className="bg-green-100 text-green-600 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                  Verified Deal
                </span>

              </div>

              {/* HEADING */}
              <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">

                 NEW USER OFFER - Get $20 OFF On First Order
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                Sign up today and enjoy an exclusive discount on your first booking. 
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
                    <span className="text-[#0077b6]">•</span>
                   Flat $20 OFF for new users </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                        Applicable on first order only
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0077b6]">•</span>
                     -Limited-time welcome offer </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#0077b6] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
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
                  <h3 className="text-black font-black text-lg mb-6">About StubHub</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6">
                    StubHub is one of the most recognized online ticket marketplaces, connecting buyers and sellers for live events across a wide range of categories. Founded in 2000, the platform has become a go-to destination for millions of fans looking to buy and sell tickets for concerts, sports, theater, comedy shows, festivals, and other live entertainment experiences.
                  </p>
                  <a href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015" target="_blank" rel="noopener noreferrer" className="text-[#19798d] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                </div>

                {/* Categories Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Laptop, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: Plane, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
                        { icon: Tv, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Code, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                        { icon: Zap, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" }
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
  <h3 className="text-black font-black text-lg mb-8">What Can You Buy on StubHub?</h3>
  
  {/* Client Approved Description */}
  <p className="text-gray-500 font-medium text-sm mb-8 leading-relaxed">
    StubHub offers access to a wide variety of live event tickets.
  </p>

  <div className="space-y-8">
    {[
      { 
        icon: Music, 
        title: "Concert Tickets", 
        sub: "Find tickets for: Pop concerts, Rock tours, Country music events, Hip-hop performances, EDM festivals, International music tours. Whether you're looking for front-row seats or affordable options, StubHub offers access to events of all sizes." 
      },
      { 
        icon: Trophy, 
        title: "Sports Tickets", 
        sub: "Sports fans can find tickets for: NFL games, NBA games, MLB games, NHL games, MLS matches, College sports, Golf tournaments, Tennis events, Motorsports." 
      },
      { 
        icon: Theater, 
        title: "Theater Tickets", 
        sub: "Enjoy access to: Broadway shows, Touring productions, Musicals, Plays, Performing arts events." 
      },
      { 
        icon: Laugh, 
        title: "Comedy Shows", 
        sub: "Purchase tickets to see popular comedians and stand-up performances nationwide." 
      },
      { 
        icon: Tent, 
        title: "Festival Tickets", 
        sub: "Explore tickets for music festivals, food festivals, cultural celebrations, and seasonal events." 
      },
      { 
        icon: Sparkles, 
        title: "Special Events", 
        sub: "StubHub also features tickets for family entertainment, live experiences, exhibitions, and unique events throughout the year." 
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


                {/* Section 7: SEO Text Section */}
        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      {/* Left: Text Content */}
      <div className="prose max-w-none">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          StubHub Coupon Codes, Promo Codes & Ticket Deals 2026
        </h2>
        
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for the latest <strong>StubHub coupon codes, promo codes, and ticket deals</strong>? You've come to the right place. At Couponsbit, we help fans save on concert tickets, sports events, theater performances, comedy shows, festivals, and live entertainment experiences with verified StubHub discounts and exclusive offers.
          </p>
          <p>
            Whether you're planning to attend a major sporting event, see your favorite artist live, catch a Broadway show, or experience a sold-out event, StubHub makes it easier to find tickets for some of the most popular events across the United States and around the world. Before purchasing your next ticket, check Couponsbit for the latest StubHub deals and savings opportunities.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#19798d] mb-4">Know more About StubHub</h3>
          
            <p>
              The platform provides access to tickets for both upcoming and sold-out events, helping fans find seats for experiences that may be difficult to secure through primary ticket providers. StubHub's marketplace model allows ticket holders to resell tickets they can no longer use, creating additional opportunities for buyers to access highly sought-after events.
            </p>
            <p>
              Today, StubHub serves customers across multiple markets and continues to be a trusted name in event ticketing, offering convenient ticket transfers, digital delivery options, and customer support services.
            </p>
            <p>
              At Couponsbit, we help shoppers find the latest StubHub coupon codes, promo codes, and ticket deals to make live entertainment more affordable.
            </p>
          </div>

        

          {/* Dynamic Interactive Steps Map */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#19798d] mb-8">How to Use a StubHub Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Browse Available StubHub Deals — Visit the StubHub page on Couponsbit and explore current discounts, promo codes, and ticket offers.",
                "Step 2: Choose an Offer — Select the deal that best matches your ticket purchase.",
                "Step 3: Copy the Coupon Code — Click to reveal and copy the coupon code if one is available.",
                "Step 4: Visit StubHub — Search for your desired event and select the tickets you'd like to purchase.",
                "Step 5: Apply the Promo Code — Enter the coupon code during checkout and confirm that the discount has been applied.",
                "Step 6: Complete Your Purchase — Finalize your order and get ready to enjoy your event."
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
            <h3 className="text-xl font-black text-[#19798d] mb-4">Best Ways to Save on StubHub</h3>
            <p>Looking to maximize your savings? Here are several strategies that can help.</p>
            <p><strong>Check Couponsbit Before Buying:</strong> Always browse Couponsbit before purchasing tickets to find the latest StubHub promo codes and special offers.</p>
            <p><strong>Compare Seating Sections:</strong> Different seating areas often offer significantly different price points while still providing a great event experience.</p>
            <p><strong>Buy Early for Popular Events:</strong> For high-demand concerts and sporting events, purchasing tickets early may provide more seating options and competitive pricing.</p>
            <p><strong>Monitor Ticket Prices:</strong> Ticket prices can fluctuate based on event demand, venue capacity, and ticket availability.</p>
            <p><strong>Look for Seasonal Promotions:</strong> StubHub may participate in major shopping and promotional events, including: Black Friday, Cyber Monday, Holiday Sales, Summer Promotions, Back-to-School Deals, New Year Events.</p>
            <p><strong>Consider Weekday Events:</strong> Tickets for weekday performances and games may sometimes be priced lower than weekend events.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#19798d] mb-4">Why Fans Choose StubHub</h3>
            <p><strong>Huge Selection of Events:</strong> StubHub offers access to millions of tickets across sports, music, theater, comedy, and live entertainment categories.</p>
            <p><strong>Access to Sold-Out Events:</strong> Fans may be able to purchase tickets for events that are no longer available through primary ticket sellers.</p>
            <p><strong>Convenient Digital Ticketing:</strong> Many tickets can be transferred electronically, making the buying process faster and more convenient.</p>
            <p><strong>User-Friendly Marketplace:</strong> The platform allows buyers to browse seating options, compare prices, and complete purchases online.</p>
            <p><strong>Ticket Resale Opportunities:</strong> Ticket holders who can no longer attend an event may be able to list their tickets for sale through the marketplace.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#19798d] mb-4">Why Use Couponsbit for StubHub Deals?</h3>
            <p>At Couponsbit, we help shoppers find genuine savings on the brands and services they use most.</p>
            <p><strong>Verified Promo Codes:</strong> We regularly update available StubHub offers to help users discover current discounts.</p>
            <p><strong>Easy Savings:</strong> Find ticket deals, promo codes, and event-related discounts in one convenient place.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use and helps consumers save on entertainment, travel, technology, shopping, and more.</p>
            <p><strong>Updated Offers:</strong> Our team continually monitors promotions to help users access the latest savings opportunities.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#19798d] mb-4">Save More on Live Entertainment</h3>
            <p>Whether you're attending a concert, cheering for your favorite team, enjoying a Broadway production, or planning a memorable night out, StubHub helps connect fans with the events they love.</p>
            <p>Before purchasing your tickets, visit Couponsbit to explore the latest StubHub coupon codes, promo codes, and ticket deals. With verified discounts and regularly updated offers, Couponsbit helps you enjoy more live events while spending less.</p>
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
            { q: "Does StubHub offer coupon codes?", a: "Yes. StubHub occasionally offers promo codes, ticket discounts, and limited-time promotions on select events and purchases." },
            { q: "Where can I find StubHub promo codes?", a: "You can find the latest StubHub coupon codes and ticket deals directly on Couponsbit." },
            { q: "Is StubHub a ticket marketplace?", a: "Yes. StubHub operates as an online ticket marketplace that connects buyers and sellers for live events." },
            { q: "What types of tickets are available on StubHub?", a: "StubHub offers tickets for concerts, sports events, theater performances, comedy shows, festivals, and many other live experiences." },
            { q: "Can I sell tickets on StubHub?", a: "Yes. Eligible users may list tickets for sale if they can no longer attend an event." },
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
        {/* Box 1: Popular Searches */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#19798d]/5">
          <h4 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular StubHub Searches</h4>
          <div className="flex flex-wrap gap-2.5">
            {["StubHub Concerts", "StubHub Sports", "StubHub Theater", "StubHub Comedy", "StubHub Promo Code", "StubHub Ticket Deals", "StubHub Festivals", "StubHub Offers"].map(tag => (
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

        {/* Box 2: Today's Top Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h4 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top StubHub Deals</h4>
          <div className="space-y-6">
            {COUPONS.slice(0, 7).map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#19798d] font-black text-xl italic shadow-inner">S</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#19798d] transition-colors">{deal.heading}</p>
                  <p className="text-gray-400 font-medium text-[10px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://stubhub.prf.hn/click/camref:1100l4aspZ/pubref:1015" target="_blank" rel="noopener noreferrer" className="bg-[#e8f6f8] text-[#19798d] px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#19798d] hover:text-white transition-all active:scale-90">GET</a>
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
