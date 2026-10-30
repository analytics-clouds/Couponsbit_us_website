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



const RELATED_STORES: StoreItem[] = [
  { name: "Mixtiles", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1793338496/mixtiles-logo_xrh8pf.webp", dealText: "Save 20% on Tiles", href: "/stores/mixtiles-promo-code" },
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Up To 75% OFF", href: "/stores/etsy-coupon-code" },
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra OFF", href: "/stores/home-depot-discount-code" },
];

export default function SnapfishCouponsContent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [openCard, setOpenCard] = useState<Record<string, boolean>>({});

  const toggleDetails = (id: string) => setOpenCard((prev) => ({ ...prev, [id]: !prev[id] }));

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
              <span className="text-black font-extrabold">Snapfish</span>
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
                  <a href="https://www.snapfish.com" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1793338496/snapfist-logo_vvb7cq.webp"
                        alt="Snapfish"
                        width={112}
                        height={112}
                        sizes="112px"
                        className="w-full h-full object-contain"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Snapfish Coupon Codes</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-60" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(18.7k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find the latest Snapfish discount code and Snapfish promo code to save on personalized photo gifts, prints, cards, calendars, canvas art, and home décor. Enjoy 77% OFF custom Matte Photo Tiles, Buy 1 Get 2 FREE personalized calendars, and 60% OFF your next eligible order when you sign up for SMS alerts. Explore verified October 2026 Snapfish deals on photo books, canvas prints, mugs, and custom cards to preserve your favorite memories while spending less.
                    </p>
                    <a
                      href="https://www.snapfish.com"
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
                    { icon: Tag, val: "5", label: "Coupons" },
                    { icon: Percent, val: "5", label: "Deals" },
                    { icon: Users, val: "6M+", label: "Shoppers" },
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
                      <a href="https://www.snapfish.com" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                        <img
                          src="https://res.cloudinary.com/couponsbit/image/upload/v1793338496/snapfist-logo_vvb7cq.webp"
                          alt="Snapfish Coupon Codes"
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
              <h2 className="text-2xl font-black text-black leading-tight">
                Snapfish Coupon Codes & Offers
              </h2>
            </div>

            {/* Coupon 1 — 70% Off Custom Cards */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">70%</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">CUSTOM CARDS</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Snapfish Discount Code: 70% Off Custom Cards</h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Make personalized holiday cards with Snapfish and save 70% for a limited time.</p>
                      <button type="button" onClick={() => toggleDetails("c1")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c1"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c1"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Take 70% off custom cards and share holiday cheer for less.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Pick from many card designs for any occasion.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Printed on thick, high-quality cardstock for a polished look.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A thoughtful way to send warm wishes to family and friends.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.snapfish.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Snapfish deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 2 — 65% Off Photo Books */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">65%</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">PHOTO BOOKS</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Snapfish Discount Code: 65% Off Photo Books</h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Turn your favorite memories into lasting keepsakes with photo books at 65% off.</p>
                      <button type="button" onClick={() => toggleDetails("c2")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c2"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c2"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save 65% on custom photo books for any special occasion.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Choose your own layouts, covers, and pages, and fill them with your photos.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Rich printing gives you bright colors and sharp images.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for saving vacations, weddings, and family milestones.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.snapfish.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Snapfish deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 3 — Buy 1 Get 2 FREE Calendars */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">B1G2</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">FREE</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">CALENDARS</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Snapfish Promo Code: Buy 1, Get 2 FREE Calendars</h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Make a custom calendar and get two more at no extra cost.</p>
                      <button type="button" onClick={() => toggleDetails("c3")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c3"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c3"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Buy 1 calendar and get 2 FREE for a limited time.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Add your favorite photos to every month.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A great gift for family, friends, and coworkers.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A handy way to stay organized while showing off your best memories.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.snapfish.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Snapfish deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 4 — 4x6 Prints for Just 1¢ Each */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">JUST</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">1¢</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">4X6 PRINTS</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Snapfish Promo Code: 4x6 Prints for Just 1¢ Each</h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Print your favorite moments for less with 4x6 photo prints at just $0.01 each.</p>
                      <button type="button" onClick={() => toggleDetails("c4")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c4"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c4"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Order 4x6 prints for only 1¢ each.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Quality printing keeps every detail and color crisp.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great for vacation shots, family memories, and special events.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>An affordable way to start or refresh your photo collection.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.snapfish.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Snapfish deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 5 — 70% Off 5x7 Cards */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">70%</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">5X7 CARDS</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Snapfish Discount Deals: 70% Off 5x7 Standard Cardstock Cards</h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Create custom 5x7 cardstock cards for as little as $0.75 each.</p>
                      <button type="button" onClick={() => toggleDetails("c5")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c5"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c5"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save 70% and pay from $0.75 per card instead of the regular $2.50.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Sturdy cardstock gives your cards a clean, professional feel.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Add your own photos and a personal message.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great for holiday cards, invitations, and announcements.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.snapfish.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Snapfish deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 6 — Photo Mugs From Just $1.99 */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FROM</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$1.99</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">PHOTO MUGS</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Snapfish Discount Deals: Photo Mugs From Just $1.99</h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Design your own coffee mug for only $1.99 and save big.</p>
                      <button type="button" onClick={() => toggleDetails("c6")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c6"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c6"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Get an 11 oz. photo mug for $1.99 instead of the regular $15.99.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save 87% on custom mugs for home or the office.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Add your favorite photos, artwork, or your own design.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A thoughtful gift for birthdays, holidays, and other special days.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.snapfish.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Snapfish deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 7 — 73% Off Hardcover Photo Books */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">73%</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">HARDCOVER BOOKS</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Snapfish Sale: 73% Off Hardcover Photo Books</h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Keep your favorite memories safe in a hardcover photo book for just $11.99.</p>
                      <button type="button" onClick={() => toggleDetails("c7")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c7"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c7"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save 73% and pay $11.99 for an 8x11 hardcover photo book, down from $44.99.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>The sturdy hardcover protects your memories for years.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Customize every page with photos and your own captions.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great for family albums, weddings, vacations, and celebrations.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.snapfish.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Snapfish deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 8 — 77% Off Matte Photo Tiles */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">77%</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">PHOTO TILES</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Snapfish Sale: 77% Off Matte Photo Tiles</h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Brighten up your walls with custom matte photo tiles from just $1.99.</p>
                      <button type="button" onClick={() => toggleDetails("c8")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c8"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c8"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save 77% and pay $1.99 for 8x8 matte photo tiles, down from $8.99.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>The lightweight tiles are easy to arrange and move around.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Show off family photos, travel memories, or artwork.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>An affordable way to add personal touches to your home.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.snapfish.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Snapfish deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 9 — Up to 72% Off Canvas Prints */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">72%</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">CANVAS PRINTS</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Snapfish Discount Offers: Up to 72% Off Canvas Prints</h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Turn your favorite photos into eye-catching canvas wall art and save up to 72%.</p>
                      <button type="button" onClick={() => toggleDetails("c9")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c9"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c9"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Pay $13.99 for an 8x10, $19.99 for an 11x14, or $29.99 for a 16x20.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save up to 72% on quality unframed canvas prints.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Sharp printing brings out vivid colors and fine detail.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for decorating your home or making a personal gift.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.snapfish.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Snapfish deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 10 — 60% Off SMS Alerts */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">60%</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">SMS ALERTS</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Snapfish Discount Offers: 60% Off When You Sign Up for SMS</h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Join Snapfish text alerts today and unlock special savings.</p>
                      <button type="button" onClick={() => toggleDetails("c10")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c10"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c10"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Sign up for SMS and get 60% off your next eligible order.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Hear about exclusive promotions and limited-time deals first.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Stay up to date on seasonal sales and offers made for you.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>An easy way to save more on photo gifts, prints, and home decor.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.snapfish.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Snapfish deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Snapfish?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Snapfish is an online photo-printing and personalised gift service that lets customers turn digital pictures into physical prints, home décor, greeting cards, and custom gifts. Instead of keeping every memory on your phone, you can use the platform to create photo products for your home, family, and friends.

                  </p>

                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its product range includes photo books, standard prints, canvas prints, photo cards, calendars, mugs, blankets, photo magnets, puzzles, and other personalised items. These products work well for birthdays, weddings, anniversaries, graduations, holidays, and family celebrations.

                  </p>

                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Snapfish is particularly useful when you want a gift that feels personal. You can select your favourite photographs, customise the product, and create something that reflects a special memory or relationship.

                  </p>
                  
                  <a href="https://www.snapfish.com" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
    Find a Snapfish Promo Code on CouponsBit
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Looking for a Snapfish promo code before checking out? CouponsBit helps you explore available discount codes and promotional offers so you can compare your options before placing an order.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Snapfish regularly features promotions on selected photo products and may share offers through its website and email communications. Depending on the promotion, you may find discounts on photo books, cards, prints, personalised gifts, or other eligible items.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Here are a few ways to look for savings:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Photo book offers:</strong> Check for promotions on hardcover, softcover, and other photo book formats.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Photo print deals:</strong> Look for offers on standard prints and selected print products.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Greeting card discounts:</strong> Explore promotions on personalised cards for birthdays, holidays, and special announcements.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Personalised gift offers:</strong> Check for discounts on mugs, blankets, magnets, puzzles, and photo décor.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Email promotions:</strong> Consider enabling deal notifications in your Snapfish account settings to hear about available offers.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Remember that promo codes can have different expiry dates, product restrictions, and eligibility conditions. Review the details before using a code.
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
            <h2 className="text-2xl font-black text-black mb-10">More Stores You&apos;ll Love</h2>
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
          Snapfish Promo Code: Save on Photo Books, Prints & Gifts
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
          "Snapfish Custom Holiday Cards Sale",
          "70% OFF",
          "All Users",
          "Printed on thick, high-quality cardstock. Ideal for holiday cheer and special occasions.",
          "Custom Cards"
        ],
        [
          "Snapfish Custom Photo Books Sale",
          "65% OFF",
          "All Users",
          "Customizable layouts, covers, and pages with rich printing for vacations and events.",
          "Custom Photo Books"
        ],
        [
          "Snapfish Photo Calendars Offer",
          "Buy 1, Get 2 FREE",
          "All Users",
          "Add favorite photos to every month. Limited-time offer across calendar styles.",
          "Custom Calendars"
        ],
        [
          "Snapfish 4x6 Photo Prints Deal",
          "1¢ Each ($0.01)",
          "All Users",
          "Crisp detail and color quality for vacation shots and family memories.",
          "4x6 Photo Prints"
        ],
        [
          "Snapfish 5x7 Standard Cardstock Cards",
          "70% OFF (From $0.75)",
          "All Users",
          "Reduced from $2.50 regular price. Printed on sturdy cardstock for invitations and cards.",
          "5x7 Standard Cardstock Cards"
        ],
        [
          "Snapfish Custom Photo Mugs",
          "87% OFF ($1.99)",
          "All Users",
          "Reduced from $15.99 regular price. 11 oz. custom photo mug for home or office.",
          "11 oz. Photo Mugs"
        ],
        [
          "Snapfish Hardcover Photo Books Sale",
          "73% OFF ($11.99)",
          "All Users",
          "Reduced from $44.99 regular price. 8x11 hardcover with customizable pages.",
          "8x11 Hardcover Photo Books"
        ],
        [
          "Snapfish Matte Photo Tiles Sale",
          "77% OFF ($1.99)",
          "All Users",
          "Reduced from $8.99 regular price. 8x8 lightweight matte photo tiles.",
          "8x8 Matte Photo Tiles"
        ],
        [
          "Snapfish Canvas Wall Art Offer",
          "Up to 72% OFF",
          "All Users",
          "Priced at $13.99 (8x10), $19.99 (11x14), and $29.99 (16x20) on quality unframed canvas.",
          "Unframed Canvas Prints"
        ],
        [
          "Snapfish SMS Signup Discount",
          "60% OFF",
          "New SMS Subscribers",
          "Sign up for text alerts to get 60% off your next eligible order and exclusive deal access.",
          "Next Eligible Order"
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
            Turn your favourite memories into personalised keepsakes with a Snapfish promo code. Whether you want to create a photo book, print pictures from a recent trip, design greeting cards, or surprise someone with a custom photo gift, Snapfish makes it easy to add a personal touch to everyday moments and special occasions.
          </p>
          <p>
            Before placing your order, visit CouponsBit to check available Snapfish promo codes, coupons, and deals. A valid offer may help you save on eligible photo products, making it easier to create thoughtful gifts without stretching your budget.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Shop Popular Snapfish Products
          </h3>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Photo Books
          </h4>
          <p>
            Create a lasting record of your favourite moments with a personalised photo book. You can bring together pictures from holidays, weddings, birthdays, family gatherings, and other milestones in one keepsake.
          </p>
          <p>
            Photo books also make thoughtful gifts for parents, partners, friends, and relatives. Before ordering, compare the available sizes, covers, and layouts to find the right format for your photographs.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Photo Prints
          </h4>
          <p>
            If you prefer physical photographs, Snapfish offers print options that help you bring digital memories to life. Use your favourite pictures to create albums, decorate your space, or share memories with family and friends.
          </p>
          <p>
            Check available print sizes and finishes before placing your order.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Personalised Cards and Invitations
          </h4>
          <p>
            Custom cards can make celebrations feel more personal. Explore photo cards for birthdays, weddings, holidays, thank-you messages, and other occasions. Adding your own pictures and message lets you create a design that feels more meaningful than a standard card.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Canvas Prints and Home Décor
          </h4>
          <p>
            Give your favourite photographs a place in your home with canvas prints and other photo décor. You can use family portraits, travel pictures, or memorable moments to personalise bedrooms, living rooms, and workspaces.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Photo Mugs, Blankets and Other Gifts
          </h4>
          <p>
            Looking for a practical gift with a personal touch? Snapfish offers items such as photo mugs, blankets, magnets, puzzles, and calendars. Choose a favourite picture or create a design around a special event to make the gift more memorable.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use a Snapfish Promo Code
          </h3>
          <p>
            Applying a Snapfish promo code is simple. Follow these steps to check whether your discount works:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit Snapfish and browse the products you want to personalise.</li>
            <li>Upload your photographs and customise the selected items.</li>
            <li>Add your finished products to the shopping cart.</li>
            <li>Proceed to checkout and find the Coupon Code field.</li>
            <li>Enter your Snapfish promo code and select Apply.</li>
            <li>Review the order summary to confirm that the discount has been applied.</li>
            <li>Check shipping charges and the final order total before completing your purchase.</li>
          </ol>
          <p>
            Snapfish confirms that customers can enter coupon codes at checkout on its website. Its app also supports promo code redemption. Always review the offer's terms to make sure it applies to your selected products.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Tips to Get More Value From Snapfish Deals
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Plan around special occasions:</strong> Order photo gifts for birthdays, anniversaries, and holidays ahead of time.</li>
            <li><strong>Compare product formats:</strong> Consider different photo book sizes, print finishes, and gift options before choosing.</li>
            <li><strong>Check bulk discounts:</strong> If you need multiple cards, review whether a bulk offer is available.</li>
            <li><strong>Review the shipping terms:</strong> A product discount may not cover delivery charges, so check the final amount.</li>
            <li><strong>Check the expiry date:</strong> Some promotions are available only for a limited period.</li>
            <li><strong>Read product-specific conditions:</strong> A code for mugs or photo books may not apply to every item on the website.</li>
          </ul>
          <p>
            These small checks can help you choose suitable products and make better use of available offers.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Save on Personalised Gifts With CouponsBit
          </h3>
          <p>
            From photo books and prints to custom cards, canvas décor, mugs, and blankets, Snapfish offers plenty of ways to turn photographs into meaningful keepsakes. Before you place your next order, visit CouponsBit to explore available Snapfish promo codes, coupons, and special deals.
          </p>
          <p>
            Compare the offers, check their terms, and apply a valid code at checkout to make your next personalised photo project even more rewarding.
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
              q: "Where can I find a Snapfish promo code?",
              a: "Visit CouponsBit to check available Snapfish promo codes and deals. You can also explore the official Snapfish deals page and sign up for email notifications about promotions."
            },
            {
              q: "What products can I buy with a Snapfish promo code?",
              a: "The products covered depend on the specific offer. Snapfish promotions may include photo books, prints, cards, canvas prints, mugs, blankets, calendars, magnets, puzzles, and other personalised gifts."
            },
            {
              q: "How do I know if my Snapfish promo code is valid?",
              a: "Check the code's expiry date, product eligibility, minimum order requirements, and other terms. After applying it at checkout, confirm that the order total reflects the discount."
            },
            {
              q: "Can I use a Snapfish promo code in the app?",
              a: "Snapfish states that its app supports promo code redemption. Add your products to the cart and enter the code at checkout, while checking the offer's terms for any app-specific restrictions."
            },
            {
              q: "Why isn't my Snapfish promo code working?",
              a: "The code may have expired, may apply only to selected products, or may require a minimum spend. Check that you entered it correctly and review the promotion's conditions before trying again."
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
            Popular Snapfish Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Snapfish Promo Code",
              "Personalised Photo Books",
              "Canvas Prints Deals",
              "Custom Photo Cards",
              "Photo Mugs & Blankets",
              "Bulk Card Discounts",
              "Photo Gifts Sale",
              "Free Prints Offers"
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
            Today's Top Snapfish Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "PHOTO BOOKS SALE",
                sub: "Up to 60% off custom hardcover photo books",
              },
              {
                heading: "CANVAS & HOME DÉCOR",
                sub: "Save on high-quality wall prints and canvas",
              },
              {
                heading: "CUSTOM CARDS BUNDLE",
                sub: "Discounts on holiday and invitation cards",
              },
              {
                heading: "PHOTO GIFTS OFFER",
                sub: "Special deals on mugs, blankets & puzzles",
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
                  href="https://www.snapfish.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Snapfish: ${deal.heading}`}
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
