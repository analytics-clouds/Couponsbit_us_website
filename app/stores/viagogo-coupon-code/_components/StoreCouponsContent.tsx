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
  Plane,Music, Trophy, Theater, Laugh, Tent,
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
    id: "via1",
    discount: "15%",
    label: "UP TO",
    badge: "Best Offer",
    title: "Up to 15% OFF on Sports & Concerts",
    heading: "Up to 15% OFF",
    sub: "Sports & Concerts Tickets",
    description: "Tickets for global football tournaments, high energy concerts, and major comedy shows. Claim up to 15% off quickly.",
    usedCount: "82k",
    expiresIn: "3 days",
    code: "VIASPORT15"
  },
  {
    id: "via2",
    discount: "10%",
    label: "FLAT",
    badge: "Popular",
    title: "Flat 10% OFF on All Live Music Gigs",
    heading: "Flat 10% OFF",
    sub: "All Live Music Gigs",
    description: "Feel the stadium vibe. Save flat 10% on ticket bookings for world class touring artists, rock, pop, or hip-hop festivals.",
    usedCount: "74k",
    expiresIn: "4 days",
    code: "GIGS10"
  },
  {
    id: "via3",
    discount: "$20",
    label: "FLAT",
    badge: "Trending",
    title: "Save Flat $20 on Orders Above $150",
    heading: "Flat $20 OFF",
    sub: "On Orders Above $150",
    description: "Get immediate $20 discount when booking ticket reservations exceeding $150. Fully valid on ultimate sports seating.",
    usedCount: "66k",
    expiresIn: "2 days",
    code: "VIASAVE20"
  },
  {
    id: "via4",
    discount: "5%",
    label: "EXTRA",
    title: "Extra 5% OFF Mobile App Bookings",
    heading: "Extra 5% OFF",
    sub: "Mobile App Bookings",
    description: "Use Viagogo mobile application to book any show or match ticket and enjoy an extra 5% discount instantly.",
    usedCount: "50k",
    expiresIn: "6 days",
    code: "VIAPP5"
  },
  {
    id: "via5",
    discount: "FREE",
    label: "SHIPPING",
    title: "Free Worldwide Courier or E-ticket Delivery",
    heading: "Free Delivery",
    sub: "Worldwide Courier or E-ticket",
    description: "Get physical badges, bracelets, or digital barcode tickets delivered on time with zero shipping fees.",
    usedCount: "43k",
    expiresIn: "5 days",
    code: "VIASHIP"
  }
];

const RELATED_STORES: StoreItem[] = [
  { name: "StubHub",        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp",        dealText: "Up to 15% OFF", href: "/stores/stubhub-coupon-code" },
  { name: "LATAM Airlines", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/latam-airlines-coupon-code_pvcsml.webp", dealText: "Up to 12% OFF", href: "/stores/latam-airlines-coupon-code" },
  { name: "Driffle",        logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp",        dealText: "Up to 70% OFF", href: "/stores/driffle-coupon-code" },
  { name: "Bluehost",       logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp",       dealText: "Up to 65% OFF", href: "/stores/bluehost-coupon-code" },
  { name: "Lyca Mobile",    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/lyca-mobile-coupon-code_svvddg.webp",    dealText: "Up to 20% OFF", href: "/stores/lyca-mobile-coupon-code" },
  { name: "Rayneo",         logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/reyneo-coupon-code_q3crak.webp",         dealText: "Up to 30% OFF", href: "/stores/rayneo-coupon-code" },
];

export default function ViaggogoCouponsContent() {
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
              <span className="text-black font-extrabold">Viagogo</span>
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
                  <a href="https://viagogo.prf.hn/click/camref:1100l4aspY/pubref:1015" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1781775923/viagogo-coupon-code_t65aol.webp" alt="Viagogo" width={112} height={112} className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Viagogo</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(12k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px]">
                      Viagogo — Global ticket marketplace. 9 verified deals live! Grab Coachella passes from $603, World Cup tickets from $120 & concerts from $49. Book now!
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Tag, val: "9", label: "Coupons" },
                    { icon: Percent, val: "100+", label: "Deals" },
                    { icon: Users, val: "1.5M+", label: "Shoppers" },
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
                <div className="relative rounded-2xl overflow-hidden h-[250px] md:h-[250px] shadow-lg group">
                  {/* Slide 1 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 0 ? 1 : 0 }}>
                    <a href="https://viagogo.prf.hn/click/camref:1100l4aspY/pubref:1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1782128527/viagogo_promo_code_esys0c.webp" alt="Viagogo Discount Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://viagogo.prf.hn/click/camref:1100l4aspY/pubref:1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1782128527/viagogo_voucher_code_ufnybk.webp" alt="Viagogo Promo Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://viagogo.prf.hn/click/camref:1100l4aspY/pubref:1015" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1782128527/viagogo_discount_code_vkpkpp.webp" alt="Viagogo Voucher Code" width={800} height={350} className="w-full h-full object-cover" loading="lazy" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Viagogo Coupon Codes & Offers</h2>
                  <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">9 Coupons & Offers Available</p>
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
              Starting At </p>

              <p className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                 $603 </p>

             
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

              BEST OFFER – Coachella Music Festival Tickets.
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                Secure your Coachella festival passes at the best available price.

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
                    <span className="text-[#0344b0]">•</span>
                     Tickets starting from $603
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0344b0]">•</span>
                     Location: Empire Polo Field, California
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0344b0]">•</span>
                    Limited-time festival deal
                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://viagogo.prf.hn/click/camref:1100l4aspY/pubref:1015"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Viagogo deal: Coachella Music Festival Tickets starting at $603"
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
              Starting At </p>

              <p className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                 $332 </p>

             
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

               Katseye Tickets – Governors Ball Festival </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

               Enjoy an unforgettable music festival experience with Katseye and top global artists.

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
                    <span className="text-[#0344b0]">•</span>
                     Event Dates: June 5–7
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0344b0]">•</span>
                     Location: Corona Park, Flushing Meadows, NY
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0344b0]">•</span>

                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://viagogo.prf.hn/click/camref:1100l4aspY/pubref:1015"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Viagogo deal: Katseye Tickets Governors Ball Festival"
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

              <p className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                 $120 </p>

             
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

                 World Cup Tickets – United States vs Paraguay
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                Secure your Coachella festival passes at the best available price.

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
                    <span className="text-[#0344b0]">•</span>
                     Tickets starting from $603
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0344b0]">•</span>
                     Location: Empire Polo Field, California
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0344b0]">•</span>
                    Limited-time festival deal
                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://viagogo.prf.hn/click/camref:1100l4aspY/pubref:1015"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Viagogo deal: World Cup Tickets United States vs Paraguay"
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
              Starting At  </p>

              <p className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                 $109 </p>

             
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

              HOT DEAL – Westlife Tickets.
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

               Grab Westlife concert tickets at special discounted prices.
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
                    <span className="text-[#0344b0]">•</span>
                     Prices start from $109
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0344b0]">•</span>
                     Available in Indonesia, Hong Kong & Singapore
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0344b0]">•</span>
                    Limited seats available
                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://viagogo.prf.hn/click/camref:1100l4aspY/pubref:1015"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Viagogo deal: Westlife Tickets starting at $109"
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
              Starting At $49 </p>

              <p className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                 $49 </p>

             
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

             HOT DEAL – Concert Tickets.
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

                Enjoy live concerts from top global artists at affordable prices.

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
                    <span className="text-[#0344b0]">•</span>
                     Ticket prices start at $49
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0344b0]">•</span>
                     Artists include Blackpink, Madonna & Westlife
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0344b0]">•</span>
                    Limited-time concert offer
                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://viagogo.prf.hn/click/camref:1100l4aspY/pubref:1015"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Viagogo deal: Concert Tickets starting at $49"
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
              Starting At $65 </p>

              <p className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">
                  $65 </p>

             
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

              HOT DEAL – Madonna Parking Passes.
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">

              Book convenient parking passes for Madonna concerts at the best rates.



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
                    <span className="text-[#0344b0]">•</span>
                      Parking passes start at $65
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0344b0]">•</span>
                     Garage & underground parking available
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#0344b0]">•</span>
                    Easy access to concert venue
                  </li>

                </ul>

              </div>

            </div>

            {/* BUTTON SECTION */}
            <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">

              <a
                href="https://viagogo.prf.hn/click/camref:1100l4aspY/pubref:1015"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Viagogo deal: Madonna Parking Passes starting at $65"
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
                  <h3 className="text-black font-black text-lg mb-6">About Viagogo</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6">
                   Viagogo is one of the world's largest ticket resale marketplaces, allowing users to buy and sell tickets for live events across numerous countries. Founded in 2006, the platform serves millions of customers looking for access to concerts, sporting events, theater performances, comedy shows, festivals, and other live entertainment experiences.
                  </p>
                  <a href="https://viagogo.prf.hn/click/camref:1100l4aspY/pubref:1015" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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

              <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">What Can You Buy on Viagogo?</h3>

  <div className="space-y-8">
    {[
      { 
        icon: Music, 
        title: "Concert Tickets", 
        sub: "Find tickets for major music tours, live concerts, arena shows, and performances from popular artists around the world." 
      },
      { 
        icon: Trophy, 
        title: "Sports Tickets", 
        sub: "Purchase tickets for professional and collegiate sporting events, including football, basketball, baseball, soccer, tennis, motorsports, and more." 
      },
      { 
        icon: Theater, 
        title: "Theater Tickets", 
        sub: "Browse tickets for Broadway productions, musicals, plays, and performing arts events." 
      },
      { 
        icon: Tent, 
        title: "Festival Tickets", 
        sub: "Secure access to music festivals, cultural events, and seasonal celebrations." 
      },
      { 
        icon: Laugh, 
        title: "Comedy Shows", 
        sub: "Discover tickets for stand-up comedy performances and live entertainment events." 
      },
      { 
        icon: Sparkles, 
        title: "Special Events", 
        sub: "Viagogo also offers tickets for various live experiences, exhibitions, family events, and entertainment attractions." 
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

        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      {/* Left: Text Content */}
      <div className="prose max-w-none">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Viagogo Coupon Codes, Promo Codes & Event Ticket Deals 2026
        </h2>
        
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for the latest <strong>Viagogo coupon codes, promo codes, and ticket deals</strong>? You've come to the right place. At Couponsbit, we help fans save on concert tickets, sports events, theater shows, festivals, and live entertainment experiences with verified Viagogo discounts and promotional offers.
          </p>
          <p>
            Whether you're trying to secure tickets to a sold-out concert, a championship game, a Broadway show, or a major festival, Viagogo provides access to a global ticket marketplace where buyers and sellers can connect. Before purchasing your next event ticket, check Couponsbit for the latest Viagogo deals and savings opportunities.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Know More About Viagogo</h3>
           
            <p>
              The marketplace operates in multiple languages and currencies, helping fans access tickets for events around the globe. Viagogo provides a platform where ticket holders can resell tickets they can no longer use, while buyers gain access to a wider inventory of event tickets.
            </p>
            <p>
              Viagogo offers access to millions of event listings and provides customer support, security checks, transparent pricing information, and a buyer guarantee program designed to enhance confidence when purchasing tickets through the platform.
            </p>
            <p>
              At Couponsbit, we help shoppers discover the latest Viagogo coupon codes, promo codes, and ticket deals to make live entertainment more affordable.
            </p>
          </div>

        

          {/* How to Use Array Map */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Viagogo Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Browse Available Viagogo Deals — Visit the Viagogo page on Couponsbit and explore current discounts, promo codes, and ticket offers.",
                "Step 2: Select an Offer — Choose the promotion that best fits your ticket purchase.",
                "Step 3: Copy the Coupon Code — Reveal and copy the coupon code if one is available.",
                "Step 4: Visit Viagogo — Search for your desired event and select available tickets.",
                "Step 5: Apply the Promo Code — Enter the coupon code during checkout and confirm that the discount has been applied.",
                "Step 6: Complete Your Purchase — Finalize your order and prepare for your upcoming event."
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
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save on Viagogo</h3>
            <p><strong>Check Couponsbit Before Buying:</strong> Always browse Couponsbit before purchasing tickets to find the latest Viagogo promo codes and special offers.</p>
            <p><strong>Compare Seating Options:</strong> Different sections within the same venue may offer significant price differences while still providing a great event experience.</p>
            <p><strong>Book Early:</strong> For high-demand events, purchasing tickets earlier may help you find better availability and pricing.</p>
            <p><strong>Monitor Event Pricing:</strong> Ticket prices on resale marketplaces can fluctuate based on demand, availability, and event popularity.</p>
            <p><strong>Look for Seasonal Promotions:</strong> Watch for savings opportunities during: Black Friday, Cyber Monday, Holiday Promotions, Summer Entertainment Sales, Back-to-School Events, New Year Deals.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Fans Use Viagogo</h3>
            <p><strong>Global Ticket Marketplace:</strong> Viagogo operates internationally and offers access to live events around the world.</p>
            <p><strong>Wide Event Selection:</strong> The platform features tickets for concerts, sports, theater, festivals, and entertainment events.</p>
            <p><strong>Ticket Resale Flexibility:</strong> Users who can no longer attend an event may have the option to resell their tickets through the marketplace.</p>
            <p><strong>Multiple Currency and Language Support:</strong> The platform serves customers across numerous regions and countries.</p>
            <p><strong>Buyer Protection Features:</strong> Viagogo advertises security checks, customer support, transparent pricing, and a 100% order guarantee program.</p>
          </div>

          <div className="space-y-4 bg-amber-50/50 p-8 rounded-[32px] border border-amber-100 my-8">
            <h3 className="text-xl font-black text-black mb-4">Important Things to Know Before Buying</h3>
            <p className="text-sm">
              Because Viagogo operates as a resale marketplace, ticket prices may be above or below the original face value depending on market demand. Buyers should carefully review ticket details, seating information, transfer requirements, and event policies before completing a purchase.
            </p>
            <p className="text-sm mt-3">
              It's also important to understand that experiences with resale marketplaces can vary. While many customers successfully receive valid tickets, consumer organizations and regulators in several countries have raised concerns over pricing transparency and resale practices over the years.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for Viagogo Deals?</h3>
            <p><strong>Verified Discounts:</strong> We regularly update available Viagogo offers to help users find current savings opportunities.</p>
            <p><strong>Convenient Savings:</strong> Find ticket deals, promo codes, and event discounts in one place.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use and helps shoppers save on travel, entertainment, technology, shopping, and more.</p>
            <p><strong>Updated Promotions:</strong> Our team continuously monitors available offers to help users discover relevant savings.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Get More Access to Live Events for Less</h3>
            <p>Whether you're searching for concert tickets, sports events, theater performances, comedy shows, or major festivals, Viagogo provides access to a wide range of live entertainment experiences around the world.</p>
            <p>Before completing your purchase, visit Couponsbit to explore the latest Viagogo coupon codes, promo codes, and ticket deals. With verified discounts and regularly updated offers, Couponsbit helps you enjoy more live events while keeping your entertainment budget under control.</p>
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
            { q: "Does Viagogo offer coupon codes?", a: "Yes. Viagogo occasionally offers promotional discounts, special offers, and event-related savings opportunities." },
            { q: "Where can I find Viagogo promo codes?", a: "You can find the latest Viagogo coupon codes and ticket deals directly on Couponsbit." },
            { q: "Is Viagogo a ticket marketplace?", a: "Yes. Viagogo operates as a ticket resale marketplace where buyers and sellers can exchange event tickets." },
            { q: "What types of events are available on Viagogo?", a: "The platform offers tickets for concerts, sports events, theater productions, comedy shows, festivals, and other live entertainment experiences." },
            { q: "Does Viagogo provide a buyer guarantee?", a: "Viagogo advertises a 100% order guarantee and customer support for ticket purchases made through its platform." },
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
        {/* Box 1: Popular Searches */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Viagogo Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Viagogo Concerts", "Viagogo Sports", "Viagogo Theater", "Viagogo Comedy", "Viagogo Promo Code", "Viagogo Ticket Deals", "Viagogo Festivals", "Viagogo Offers"].map(tag => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Box 2: Today's Top Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Viagogo Deals</h3>
          <div className="space-y-6">
            {COUPONS.slice(0, 5).map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">V</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href="https://viagogo.prf.hn/click/camref:1100l4aspY/pubref:1015" target="_blank" rel="noopener noreferrer" aria-label={`Get Viagogo deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        {/* Section 6: Newsletter Strip */}
        <section className="bg-[#056bfa] py-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-60 h-60 bg-white/5 rounded-full -translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4 italic">Never Miss a Great Deal!</h2>
            <p className="text-white/90 font-bold mb-10 max-w-md mx-auto">Subscribe to get the best Viagogo coupon codes directly in your inbox.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <input type="email" placeholder="Enter your email address" className="w-full h-14 bg-white/10 border-2 border-white/20 rounded-2xl px-6 outline-none focus:border-white transition-all text-white placeholder:text-white/70 font-bold text-sm" />
              <button className="w-full sm:w-auto h-14 bg-white text-[#056bfa] px-10 rounded-2xl font-black text-sm uppercase tracking-widest active:scale-95 transition-all shadow-xl hover:shadow-white/10">Subscribe</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
