"use client";

import React, { useState, useEffect } from "react";
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
  MapPin,
  Globe,
  CheckCircle,
  Plane,
  Tv,
  Code,
  LayoutGrid,
  Zap,
  Laptop,
  Compass,
  Wifi,
  Package,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

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

const COUPONS: Coupon[] = [
  {
    id: "c1",
    discount: "1,475",
    label: "SGD",
    title: "Singapore Airlines Flights to Amsterdam from SGD 1,475",
    heading: "SGD 1,475",
    sub: "SIN → AMS",
    description: "Book flights from Singapore (SIN) to Amsterdam (AMS) starting at SGD 1,475.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c2",
    discount: "415",
    label: "SGD",
    title: "Singapore Airlines Flights to Bandar Seri Begawan from SGD 415",
    heading: "SGD 415",
    sub: "SIN → BWN",
    description: "Find flights from Singapore to Bandar Seri Begawan (BWN) starting at SGD 415.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c3",
    discount: "343",
    label: "SGD",
    title: "Singapore Airlines Flights to Cebu from SGD 343",
    heading: "SGD 343",
    sub: "SIN → CEB",
    description: "Book flights from Singapore (SIN) to Cebu (CEB) starting at SGD 343.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c4",
    discount: "298",
    label: "SGD",
    title: "Singapore Airlines Flights to Jakarta from SGD 298",
    heading: "SGD 298",
    sub: "SIN → CGK",
    description: "Find flights from Singapore (SIN) to Jakarta (CGK) starting at SGD 298.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c5",
    discount: "1,045",
    label: "SGD",
    title: "Singapore Airlines Flights to Los Angeles from SGD 1,045",
    heading: "SGD 1,045",
    sub: "SIN → LAX",
    description: "Book flights from Singapore to Los Angeles (LAX) starting at SGD 1,045.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Airalo", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784895740/airalo-logo_fc6u6p.webp", dealText: "Up to 20% OFF", href: "/stores/airalo-discount-code" },
  { name: "Klook", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002063/klook-logo_alzz2a.webp", dealText: "Up To 50% OFF", href: "/stores/klook-discount-code" },
  { name: "Expedia", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg", dealText: "Up To 30% OFF", href: "/stores/expedia-promo-code" },
  { name: "Etihad Airways", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784970/etihad-logo_lbl7mo.webp", dealText: "Up To 25% OFF", href: "/stores/etihad-airways-promo-code" },
  { name: "Malaysia Airlines", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/malaysia-logo_xso2cj.webp", dealText: "Up To 20% OFF", href: "/stores/malaysia-airlines-promo-code" },
  { name: "Booking.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/booking-logo_dtnn30.webp", dealText: "Up To 20% OFF", href: "/stores/booking-discount-code" },
];

export default function SingaporeAirlinesCouponsContent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

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

      <main>
        {/* Section 1: Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Singapore Airlines</span>
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
                  <a href="https://performance.gotrackier.com/click?campaign_id=5047&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1793169709/Singapore_Airlines_logo_an5s0z.webp"
                        alt="Singapore Airlines"
                        width={112}
                        height={112}
                        sizes="112px"
                        className="w-full h-full object-contain"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Singapore Airlines Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-60" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(28.3k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find the latest Singapore Airlines promo code and Singapore Airlines discount code to book flights from SGD 298 to top destinations including Jakarta, Cebu, Melbourne, Osaka, Amsterdam, Los Angeles, and Bandar Seri Begawan. Enjoy competitive fares, award-winning service, and convenient global connections for business or leisure travel. Compare verified flight deals, seasonal offers, and limited-time promotions to maximize your savings. Apply an eligible Singapore Airlines promo code or discount code at checkout to enjoy extra savings on your next booking.
                    </p>
                    <a
                      href="https://performance.gotrackier.com/click?campaign_id=5047&pub_id=1015"
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
                    { icon: Tag, val: "7", label: "Coupons" },
                    { icon: Percent, val: "7", label: "Deals" },
                    { icon: Users, val: "10M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" },
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

              {/* Right: Banner Slider */}
              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  {[0, 1, 2].map((idx) => (
                    <div
                      key={idx}
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{ opacity: activeSlide === idx ? 1 : 0 }}
                    >
                      <a href="https://performance.gotrackier.com/click?campaign_id=5047&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                        <img
                          src="https://res.cloudinary.com/couponsbit/image/upload/v1793169709/Singapore_Airlines_logo_an5s0z.webp"
                          alt="Singapore Airlines Promo Code"
                          width={800}
                          height={350}
                          className="w-full h-full object-contain bg-[#f5f5f5]"
                          fetchPriority={idx === 0 ? "high" : undefined}
                          loading={idx === 0 ? undefined : "lazy"}
                        />
                      </a>
                    </div>
                  ))}

                  <button
                    onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5 text-white rotate-180" />
                  </button>
                  <button
                    onClick={() => setActiveSlide((prev) => (prev + 1) % 3)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={cn("w-1.5 h-1.5 rounded-full transition-all", activeSlide === i ? "bg-white w-4" : "bg-white/40")}
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
                { icon: RefreshCw, title: "Updated Daily", sub: "New offers every single day" },
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

        {/* Section 4: Coupons + Sidebar */}
        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Left: Coupon Cards */}
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Singapore Airlines Coupon Codes & Offers</h2>
                </div>

                {/* Coupon 1 */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FROM</p>
                          <div className="text-[14px] sm:text-2xl font-extrabold leading-none mt-2">SGD</div>
                          <div className="text-[14px] sm:text-2xl font-extrabold leading-none mt-1">1,475</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">SIN→AMS</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Singapore Airlines Flights to Amsterdam from SGD 1,475</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Book flights from Singapore (SIN) to Amsterdam (AMS) starting at SGD 1,475.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Plan your European getaway with a trip to the Netherlands' vibrant capital.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Explore Amsterdam's famous canals, historic streets and cultural attractions.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Check Singapore Airlines for available travel dates, fares and booking conditions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://performance.gotrackier.com/click?campaign_id=5047&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Singapore Airlines deal: Flights to Amsterdam from SGD 1,475" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FROM</p>
                          <div className="text-[14px] sm:text-2xl font-extrabold leading-none mt-2">SGD</div>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-1">415</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">SIN→BWN</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Singapore Airlines Flights to Bandar Seri Begawan from SGD 415</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Find flights from Singapore to Bandar Seri Begawan (BWN) starting at SGD 415.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Plan a getaway to Brunei's capital and discover its rich culture and heritage.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Explore the city's mosques, waterfront sights and local attractions.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Check Singapore Airlines for available travel dates, fares and booking conditions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://performance.gotrackier.com/click?campaign_id=5047&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Singapore Airlines deal: Flights to Bandar Seri Begawan from SGD 415" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FROM</p>
                          <div className="text-[14px] sm:text-2xl font-extrabold leading-none mt-2">SGD</div>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-1">343</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">SIN→CEB</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Singapore Airlines Flights to Cebu from SGD 343</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Book flights from Singapore (SIN) to Cebu (CEB) starting at SGD 343.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Discover a popular Philippine destination known for its tropical scenery and island escapes.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Plan a trip filled with beaches, local cuisine and sightseeing opportunities.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Check Singapore Airlines for available travel dates, fares and booking conditions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://performance.gotrackier.com/click?campaign_id=5047&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Singapore Airlines deal: Flights to Cebu from SGD 343" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FROM</p>
                          <div className="text-[14px] sm:text-2xl font-extrabold leading-none mt-2">SGD</div>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-1">298</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">SIN→CGK</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Singapore Airlines Flights to Jakarta from SGD 298</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Find flights from Singapore (SIN) to Jakarta (CGK) starting at SGD 298.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Visit Indonesia's bustling capital for a mix of culture, shopping and city experiences.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Explore local food spots, landmarks and popular attractions during your stay.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Check Singapore Airlines for available travel dates, fares and booking conditions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://performance.gotrackier.com/click?campaign_id=5047&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Singapore Airlines deal: Flights to Jakarta from SGD 298" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FROM</p>
                          <div className="text-[14px] sm:text-2xl font-extrabold leading-none mt-2">SGD</div>
                          <div className="text-[14px] sm:text-2xl font-extrabold leading-none mt-1">1,045</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">SIN→LAX</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Singapore Airlines Flights to Los Angeles from SGD 1,045</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Book flights from Singapore to Los Angeles (LAX) starting at SGD 1,045.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Plan a trip to California and experience the city's entertainment, dining and shopping scenes.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Discover famous attractions, beaches and iconic Hollywood sights.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Check Singapore Airlines for available travel dates, fares and booking conditions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://performance.gotrackier.com/click?campaign_id=5047&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Singapore Airlines deal: Flights to Los Angeles from SGD 1,045" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FROM</p>
                          <div className="text-[14px] sm:text-2xl font-extrabold leading-none mt-2">SGD</div>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-1">697</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">SIN→MEL</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Singapore Airlines Flights to Melbourne from SGD 697</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Find flights from Singapore to Melbourne (MEL) starting at SGD 697.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Explore Australia's cultural capital, known for its cafés, arts and lively neighbourhoods.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy city sightseeing, shopping and day trips to nearby attractions.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Check Singapore Airlines for available travel dates, fares and booking conditions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://performance.gotrackier.com/click?campaign_id=5047&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Singapore Airlines deal: Flights to Melbourne from SGD 697" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FROM</p>
                          <div className="text-[14px] sm:text-2xl font-extrabold leading-none mt-2">SGD</div>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-1">713</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">SIN→KIX</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Singapore Airlines Flights to Osaka from SGD 713</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Book flights from Singapore (SIN) to Osaka (KIX) starting at SGD 713.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Discover Japan's vibrant city, celebrated for its food culture, shopping and entertainment.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Visit popular attractions and explore Osaka's famous dining districts.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Check Singapore Airlines for available travel dates, fares and booking conditions.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://performance.gotrackier.com/click?campaign_id=5047&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Singapore Airlines deal: Flights to Osaka from SGD 713" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                    rel="nofollow noopener noreferrer"
                    className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                  >
                    <Image
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png"
                      alt="Add as a preferred source on Google"
                      width={280}
                      height={70}
                      className="w-full max-w-[260px] h-auto object-contain"
                      priority
                    />
                  </a>
                </div>

                {/* About Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">What Is Singapore Airlines?
</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Singapore Airlines is an international airline headquartered in Singapore and known for its premium onboard experience, extensive route network, and multiple cabin classes. The airline operates flights to destinations worldwide, connecting travelers through its Singapore hub at Changi Airport.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Passengers can choose from Economy Class, Premium Economy Class, Business Class, and First Class or Suites on eligible aircraft and routes. Depending on the flight, onboard amenities may include in-flight entertainment, meals, comfortable seating, and other services designed to improve the travel experience.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Singapore Airlines serves travelers with different needs, whether they're booking a short regional journey or a long-haul international flight. Its loyalty programme, KrisFlyer, also allows eligible members to earn miles on qualifying flights and use rewards toward future travel.

                  </p>
                  <a href="https://performance.gotrackier.com/click?campaign_id=5047&pub_id=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Categories Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Plane,  name: "Travel",             count: "420+", color: "text-teal-500",   href: "/categories/travel" },
                      { icon: Laptop, name: "Electronics",        count: "850+", color: "text-blue-500",   href: "/categories/electronics" },
                      { icon: Tv,     name: "Entertainment",      count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                      { icon: Code,   name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                      { icon: Zap,    name: "Mobile & Telecom",   count: "320+", color: "text-green-500",  href: "/categories/mobile" },
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
  <h3 className="text-black font-black text-lg mb-8">
    How to Use a Singapore Airlines Promo Code
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Applying a Singapore Airlines promo code is straightforward when your selected offer requires one.
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>1. Visit the official Singapore Airlines website.</strong></span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>2. Enter your departure city, destination, travel dates, and passenger details.</strong></span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>3. Locate the promo code option in the flight search section.</strong></span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>4. Enter your valid Singapore Airlines promo code.</strong></span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>5. Search for flights and review the eligible fares displayed.</strong></span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>6. Select your preferred flight and check the fare conditions.</strong></span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>7. Confirm the discount and final booking total before completing payment.</strong></span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Singapore Airlines explains that promotional fares appear when the itinerary meets the code's conditions and eligible seats are available. Some codes also require payment with a specified card or can only be redeemed through the airline's website.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      If a code does not work, check its validity period, route restrictions, eligible cabin classes, payment requirements, and passenger limits.
    </p>
  </div>
</div>

              </div>
            </div>
          </div>
        </section>

        {/* Section 5: More Stores */}
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

        {/* Section 6: SEO + FAQ */}
       <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Singapore Airlines Promo Code: Save on Flights & Travel Deals
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        [
          "Singapore Airlines Amsterdam Flights",
          "From SGD 1,475",
          "All Users",
          "Plan a European getaway to explore Amsterdam's famous canals, historic streets, and cultural attractions.",
          "Singapore (SIN) to Amsterdam (AMS)"
        ],
        [
          "Singapore Airlines Bandar Seri Begawan Flights",
          "From SGD 415",
          "All Users",
          "Discover Brunei's capital, featuring mosques, waterfront sights, and rich cultural heritage.",
          "Singapore (SIN) to Bandar Seri Begawan (BWN)"
        ],
        [
          "Singapore Airlines Cebu Flights",
          "From SGD 343",
          "All Users",
          "Popular Philippine tropical getaway known for beaches, local cuisine, and island sightseeing.",
          "Singapore (SIN) to Cebu (CEB)"
        ],
        [
          "Singapore Airlines Jakarta Flights",
          "From SGD 298",
          "All Users",
          "Visit Indonesia's capital for shopping, local food spots, landmarks, and city experiences.",
          "Singapore (SIN) to Jakarta (CGK)"
        ],
        [
          "Singapore Airlines Los Angeles Flights",
          "From SGD 1,045",
          "All Users",
          "Travel to California to experience entertainment, dining, shopping, beaches, and Hollywood sights.",
          "Singapore (SIN) to Los Angeles (LAX)"
        ],
        [
          "Singapore Airlines Melbourne Flights",
          "From SGD 697",
          "All Users",
          "Explore Australia's cultural capital, famous for cafés, arts, lively neighbourhoods, and day trips.",
          "Singapore (SIN) to Melbourne (MEL)"
        ],
        [
          "Singapore Airlines Osaka Flights",
          "From SGD 713",
          "All Users",
          "Discover Japan's culinary hub with famous food culture, vibrant shopping, and entertainment districts.",
          "Singapore (SIN) to Osaka (KIX)"
        ]
      ].map((row, i, arr) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === arr.length - 1 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Planning your next international trip? A Singapore Airlines promo code can help you find savings on eligible flight bookings while exploring destinations around the world. Whether you're planning a family vacation, a business trip, or a long-awaited holiday, check CouponsBit for available promo codes, flight deals, and special offers before booking your tickets.
          </p>
          <p>
            Singapore Airlines connects travelers to destinations across Asia, Europe, Australia, and the Americas through its global network. By comparing available fares, checking promotional offers, and making the most of loyalty rewards, you can find a booking option that suits your itinerary and budget.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Find a Singapore Airlines Promo Code on CouponsBit
          </h3>
          <p>
            Looking for a Singapore Airlines promo code before booking your next flight? CouponsBit helps you explore available promotional codes, airline deals, and travel offers so you can check for potential savings before completing your reservation.
          </p>
          <p>
            Singapore Airlines publishes promotions through its official website, including selected flight offers and partner promotions. Some deals are linked to specific payment cards, routes, travel periods, or booking conditions, so the availability of a discount depends on the offer.
          </p>
          <p>
            Here are a few ways to look for potential savings:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Check flight promotions:</strong> Browse available offers for selected destinations and travel dates.</li>
            <li><strong>Look for payment-card offers:</strong> Some promotions provide discounts to eligible cardholders who meet the payment requirements.</li>
            <li><strong>Compare cabin classes:</strong> Check Economy, Premium Economy, Business Class, and First Class fares to find an option that suits your trip.</li>
            <li><strong>Explore KrisFlyer benefits:</strong> Eligible members can earn miles on qualifying flights and access available rewards.</li>
            <li><strong>Check regional offers:</strong> Promotions can differ between the US, Singapore, India, and other markets. Make sure the offer applies to your departure location and booking currency.</li>
          </ul>
          <p>
            Always review the promotion's expiry date, eligible routes, payment requirements, and other terms before relying on a discount.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Explore Singapore Airlines Flight Options
          </h3>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Economy Class
          </h4>
          <p>
            Economy Class is an option for travelers looking for a comfortable way to reach their destination. Depending on the aircraft and route, passengers may have access to in-flight entertainment, meals, and other standard onboard services.
          </p>
          <p>
            If you're planning a holiday or visiting family, compare available Economy fares and fare conditions before booking.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Premium Economy Class
          </h4>
          <p>
            Premium Economy offers an upgraded experience on selected flights, with features such as additional personal space and enhanced onboard services compared with Economy Class. It can be worth considering for longer journeys when comfort is a priority.
          </p>
          <p>
            Compare the fare difference and included benefits to decide whether the upgrade suits your travel plans.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Business Class
          </h4>
          <p>
            Business Class caters to travelers seeking additional comfort and service. Depending on the aircraft, features may include lie-flat seating, premium dining, and access to eligible airport lounges.
          </p>
          <p>
            Business Class can be an option for long-haul trips, special occasions, or business travel. Check the details of your selected flight to understand which amenities are included.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            First Class and Suites
          </h4>
          <p>
            Singapore Airlines offers First Class and Suites on selected aircraft and routes. These premium travel options provide an elevated onboard experience, with features and amenities that vary by aircraft.
          </p>
          <p>
            Availability depends on the route and flight, so review the details before choosing your preferred cabin.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Popular Destinations with Singapore Airlines
          </h3>
          <p>
            Singapore Airlines connects travelers to destinations across multiple regions, making it useful for both direct trips to Singapore and onward international journeys.
          </p>
          <p>
            Depending on the route and schedule, travelers can explore destinations such as:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Asia:</strong> Singapore, Bangkok, Tokyo, Seoul, Hong Kong, and other major cities.</li>
            <li><strong>Europe:</strong> London, Frankfurt, Rome, and other international destinations.</li>
            <li><strong>Australia and New Zealand:</strong> Cities such as Sydney, Brisbane, and Auckland.</li>
            <li><strong>North America:</strong> Selected destinations in the United States, including New York and Los Angeles.</li>
          </ul>
          <p>
            Available routes and connections depend on the departure city, travel dates, and operating schedule. Travelers departing from the US should check the official website for flights from their preferred airport.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Earn Travel Rewards with KrisFlyer
          </h3>
          <p>
            KrisFlyer is Singapore Airlines' frequent-flyer programme. Members can earn miles on eligible flights and use them for qualifying rewards, subject to the programme's terms.
          </p>
          <p>
            The number of miles earned depends on factors such as the fare type, booking class, distance flown, and membership status. Eligible promotional fares may also earn KrisFlyer miles, although the amount can differ from standard fares.
          </p>
          <p>
            If you travel regularly, joining KrisFlyer can help you work toward future rewards. Review the programme's current conditions to understand how miles are earned and redeemed.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Tips to Get Better Singapore Airlines Deals
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Book with flexible dates:</strong> Compare nearby travel dates to find fares that suit your budget.</li>
            <li><strong>Check official promotions:</strong> Review the airline's offers page before purchasing your tickets.</li>
            <li><strong>Compare fare conditions:</strong> Lower fares may have different change, cancellation, or baggage conditions.</li>
            <li><strong>Check your departure market:</strong> A promo code available in Singapore may not work for flights departing from the US.</li>
            <li><strong>Review payment requirements:</strong> Some promotions are restricted to specific credit or debit cards.</li>
            <li><strong>Consider your rewards:</strong> If you are a KrisFlyer member, check the miles you could earn on the selected fare.</li>
          </ul>
          <p>
            Comparing the complete fare and its conditions can help you make a more informed booking decision.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Book Your Next Flight with CouponsBit
          </h3>
          <p>
            Whether you're planning a business trip, an international holiday, or a visit to family, Singapore Airlines offers several cabin classes and connections to destinations around the world. Before confirming your reservation, visit CouponsBit to explore available Singapore Airlines promo codes, flight deals, and special offers.
          </p>
          <p>
            Compare fares, check the conditions, and apply an eligible promo code to make your next flight booking more rewarding.
          </p>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQ Section */}
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions
          </h3>
          {[
            {
              q: "Where can I find a Singapore Airlines promo code?",
              a: "Visit CouponsBit to check available Singapore Airlines promo codes and travel deals. You can also explore the airline's official promotions page for current offers and eligibility requirements."
            },
            {
              q: "Does Singapore Airlines offer flight discounts?",
              a: "Singapore Airlines publishes promotional fares and partner offers from time to time. Availability depends on the destination, booking period, travel dates, and offer conditions."
            },
            {
              q: "Why is my Singapore Airlines promo code not working?",
              a: "Your code may have expired, may not apply to your selected route, or may require a particular payment card or cabin class. Check the offer's terms and confirm that your itinerary meets its requirements."
            },
            {
              q: "Can I use a Singapore Airlines promo code for international flights?",
              a: "Some promotions apply to selected international routes, while others are restricted to specific departure markets. Review the eligible destinations and travel conditions before booking."
            },
            {
              q: "Can I earn KrisFlyer miles on discounted tickets?",
              a: "Eligible promotional fares can earn KrisFlyer miles. The number of miles depends on the fare type, booking class, distance, and applicable membership conditions."
            }
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
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        {/* Tag Cloud */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Singapore Airlines Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Singapore Airlines Promo Code",
              "Flight Deals",
              "KrisFlyer Miles",
              "Business Class Upgrades",
              "Asia Flight Offers",
              "Europe Flights",
              "Payment Card Discounts",
              "Premium Economy Sale"
            ].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Singapore Airlines Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "KRISFLYER REWARDS",
                sub: "Earn & redeem miles on international flights",
              },
              {
                heading: "SPECIAL FLIGHT DEALS",
                sub: "Promotional fares on selected international routes",
              },
              {
                heading: "PAYMENT CARD OFFERS",
                sub: "Exclusive discounts for eligible cardholders",
              },
              {
                heading: "PREMIUM CABIN OFFERS",
                sub: "Explore deals on Business and Suites",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  S
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                    {deal.heading}
                  </p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">
                    {deal.sub}
                  </p>
                </div>
                <a
                  href="https://performance.gotrackier.com/click?campaign_id=5047&pub_id=1015"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Singapore Airlines: ${deal.heading}`}
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
