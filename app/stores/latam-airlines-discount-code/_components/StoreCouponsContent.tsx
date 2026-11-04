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
  Copy,
  ChevronDown,
  Laptop,
  CheckCircle,
  Ticket,
  Plane,
  Tv, Globe, Armchair, BriefcaseBusiness, CreditCard, PlusCircle,
  Code,
  Map,
  Zap,
  LayoutGrid,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { type Coupon, LATAM_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Etihad", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784970/etihad-logo_lbl7mo.webp", dealText: "Up To 30% OFF", href: "/stores/etihad-discount-code" },
  { name: "Malaysia Airlines", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/malaysia-logo_xso2cj.webp", dealText: "Up To 35% OFF", href: "/stores/malaysia-airlines-discount-code" },
  { name: "Oman Air", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/oman-air-logo_ozwu2c.webp", dealText: "Up To 50% OFF", href: "/stores/oman-air-discount-code" },
  { name: "Fireflyz", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/firefly-logo_ju6n0p.webp", dealText: "One-Way Fares From $29", href: "/stores/fireflyz-discount-code" },
  { name: "Kiwi.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/kiwi-logo_egovdr.webp", dealText: "Up to $580 Rewards", href: "/stores/kiwi-discount-code" },
  { name: "Cheapflights", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494079/Cheepflights-coupon-code_cbqikz.jpg", dealText: "Up to 25% OFF", href: "/stores/cheapflights-discount-code" },
];

export default function LatamCouponsContent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (coupon: Coupon) => {
    navigator.clipboard.writeText(coupon.code);
    setToastCode(coupon.code);
    setShowToast(true);
    setActiveModalCoupon(coupon);
    setShowModal(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">

      {showModal && activeModalCoupon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-black font-black text-xl mb-2">Coupon Code Copied!</h3>
            <div className="bg-[#e8f6f8] border border-[#056bfa]/20 rounded-2xl px-6 py-3 mb-6">
              <span className="text-[#056bfa] font-black text-2xl font-mono">{activeModalCoupon.code}</span>
            </div>
            <a href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015"
              target="_blank" rel="nofollow noopener noreferrer"
              onClick={() => setShowModal(false)}
              className="block w-full bg-[#056bfa] text-white font-black py-4 rounded-2xl mb-3 hover:bg-[#005f91] transition-colors">
              Continue to LATAM Airlines →
            </a>
            <button onClick={() => setShowModal(false)}
              className="text-gray-500 font-bold text-sm hover:text-black transition-colors">
              Close Window
            </button>
          </div>
        </div>
      )}

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
                  <a href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/latam-airlines-coupon-code_pvcsml.webp" alt="LATAM Airlines" width={112} height={112} className="w-full h-full object-contain" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2 flex items-center gap-2">
                      Latam Airlines Discount Code
                    </h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(25k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest LATAM Airlines Discount Code and LATAM Airlines Promo Code for November 2026. Enjoy up to 40% OFF on travel packages, hotels, and car rentals, or earn 40,000 bonus miles with eligible LATAM Airlines credit cards. You can also book flights from New York to Santiago starting at $308 and Miami to Punta Cana from just $136. Browse verified LATAM Airlines offers to save on flights, vacation packages, and travel essentials for your next trip.
                    </p>
                    <a
                      href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
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
                <div className="relative rounded-2xl overflow-hidden h-[250px] md:h-[250px] shadow-lg group">
                  {/* Slide 1 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 0 ? 1 : 0 }}>
                    <a href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782128905/latam_airlines_promo_code_jzlmrg.webp" alt="LATAM Airlines Discount Code" width={800} height={350} className="w-full h-full object-cover" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782128905/latam_airlines_discount_code_lp5s9f.webp" alt="LATAM Airlines Voucher Code" width={800} height={350} className="w-full h-full object-cover" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782128905/latam_airlines_broucher_code_oiwbr0.webp" alt="LATAM Airlines Promo Code" width={800} height={350} className="w-full h-full object-cover" />
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
              <div className="top-offers lg:w-[65%]">
                <div className="mb-8">
                  <h2 className="text-2xl font-black text-black leading-tight">LATAM Airlines Coupon Codes & Offers</h2>
                  <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">8 Coupons & Offers Available</p>
                </div>

                {LATAM_COUPONS.map((coupon) => (
                  <div key={coupon.id} id={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        {/* LEFT BADGE */}
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#005f91] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full" />
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full" />
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">{coupon.topLabel}</p>
                            <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">{coupon.mainValue}</div>
                            <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">{coupon.offText}</p>
                          </div>
                        </div>
                        {/* CENTER CONTENT */}
                        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                          <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                            </div>
                            <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">{coupon.title}</h3>
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">{coupon.description}</p>
                            <button
                              type="button"
                              onClick={() => setExpandedCouponId(expandedCouponId === coupon.id ? null : coupon.id)}
                              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
                            >
                              View Details
                              <ChevronDown size={16} className={`transition-transform duration-300 ${expandedCouponId === coupon.id ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${expandedCouponId === coupon.id ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {coupon.points.map((point, pi) => (
                                  <li key={pi} className="flex items-start gap-2">
                                    <span className="text-[#0344b0]">•</span>{point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          {/* RIGHT ACTION */}
                          <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6 gap-3">
                            {coupon.code && (
                              <button onClick={() => handleCopy(coupon)}
                                className="w-full bg-white border-2 border-dashed border-[#056bfa] text-[#056bfa] font-black text-sm px-4 py-2.5 rounded-xl flex items-center justify-between gap-2 hover:bg-[#e8f6f8] transition-colors">
                                <span className="font-mono">{coupon.code}</span>
                                <Copy className="w-4 h-4 shrink-0" />
                              </button>
                            )}
                            <a
                              href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015"
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label={`Get deal: ${coupon.title}`}
                              className="w-full bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
                            >
                              Get Deal
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">

                <div className="w-full flex justify-center mb-6">
                  <a
                    href="https://www.google.com/preferences/source?q=couponsbit.us"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
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
                  <h3 className="text-black font-black text-lg mb-6">About LATAM</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    LATAM Airlines is one of the largest airline groups in Latin America, serving millions of passengers every year through an extensive network of domestic and international routes. The airline connects major cities across countries such as Brazil, Chile, Peru, Colombia, Ecuador, and Argentina, while also offering flights to North America, Europe, Oceania, and other global destinations.
                  </p>
                  <a href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
          LATAM Airlines Coupon Codes, Promo Codes & Flight Deals 2026
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
        <td className="p-5 text-black font-black align-middle max-w-[220px]">LATAM Airlines Credit Card Offer</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Earn 40,000 Bonus Miles</td>
        <td className="p-5 text-gray-500 align-middle">Approved Cardholders</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Minimum spend terms apply</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Miles redeemable for South America flights</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">New York to Santiago, Chile</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Starting At $308</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Departure 08/10/26; direct economy flight</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">New York to Santiago route</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Packages, Hotels & Car Rentals</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up To 40% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Valid on complete travel bookings</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Vacation packages, hotels & car rentals</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Miami To Rio De Janeiro</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Starting At $554</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Departure 08/21/26; one-way economy, connection included</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Miami to Rio De Janeiro route</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Miami To Punta Cana</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Starting At $136</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Special LATAM pricing available</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Miami to Punta Cana route</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Flat 10% OFF Sitewide</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Flat 10% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Valid on orders above $40</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sitewide LATAM Airlines bookings</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for the latest <strong>LATAM Airlines coupon codes, promo codes, and flight deals</strong>? You've come to the right place. At Couponsbit, we help travelers save on flights, vacation packages, seat upgrades, baggage services, and travel experiences with verified LATAM Airlines discounts and exclusive offers.
          </p>
          <p>
            Whether you're planning a vacation in South America, a business trip, a family getaway, or an <Link href="/stores/kiwi-discount-code" className="text-[#056bfa] hover:underline">international adventure</Link>, LATAM Airlines connects travelers to hundreds of destinations across Latin America and beyond. Before booking your next flight, check Couponsbit for the latest LATAM Airlines deals and travel savings opportunities.
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
        <div className="faq-section mt-20 space-y-4">
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top LATAM Deals</h3>
          <div className="space-y-6">
            {LATAM_COUPONS.slice(0, 5).map((coupon, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">L</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                    {coupon.topLabel} {coupon.mainValue} {coupon.offText}
                  </p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{coupon.description}</p>
                </div>
                <a href="https://latamairlines.sjv.io/c/4303217/2023250/25131?subId1=1015" target="_blank" rel="nofollow noopener noreferrer" className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
