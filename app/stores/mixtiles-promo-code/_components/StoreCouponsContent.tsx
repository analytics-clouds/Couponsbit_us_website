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
    discount: "27%",
    label: "UP TO",
    title: "Save Up to 27% on Mixtiles Wall Art Collections",
    heading: "Up to 27% OFF",
    sub: "WALL ART",
    description: "Give your walls a fresh look with custom photo displays and save up to 27% on select Mixtiles collections. Pick from many modern designs that fit any room.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c2",
    discount: "15%",
    label: "UP TO",
    title: "Up to 15% Off Large Orders at Mixtiles",
    heading: "Up to 15% OFF",
    sub: "LARGE ORDERS",
    description: "Save more on bigger purchases with special volume discounts — 5% off orders over $1,500, 10% off $3,000 or more, and 15% off $10,000 or more. The discount applies automatically.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c3",
    discount: "SHIP",
    label: "FREE",
    title: "Free Shipping on Orders Over $59 at Mixtiles",
    heading: "Free Shipping",
    sub: "OVER $59",
    description: "Order your favorite wall art and get free shipping on eligible Mixtiles purchases over $59. Quick delivery means you can decorate sooner, and each order is packed with care.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c4",
    discount: "$164",
    label: "FROM",
    title: "Wild Visuals Collection From $164.25 at Mixtiles",
    heading: "From $164.25",
    sub: "WILD VISUALS",
    description: "Build an eye-catching gallery wall with the Wild Visuals collection, now from $164.25 instead of the regular $219. The large layout makes a bold statement in any room.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c5",
    discount: "$105",
    label: "FROM",
    title: "Offbeat Set From $105.75 at Mixtiles",
    heading: "From $105.75",
    sub: "OFFBEAT SET",
    description: "Bring modern style to your walls with the bestselling Offbeat Set, starting at $105.75 instead of the regular $141. The unique layout makes a gallery display that stands out.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Snapfish", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1793338496/snapfist-logo_vvb7cq.webp", dealText: "Up To 75% OFF", href: "/stores/snapfish-coupon-codes" },
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Up To 75% OFF", href: "/stores/etsy-coupon-code" },
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra OFF", href: "/stores/home-depot-discount-code" },
];

export default function MixtilesCouponsContent() {
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
              <span className="text-black font-extrabold">Mixtiles</span>
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
                  <a href="https://www.mixtiles.com" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1793338496/mixtiles-logo_xrh8pf.webp"
                        alt="Mixtiles"
                        width={112}
                        height={112}
                        sizes="112px"
                        className="w-full h-full object-contain"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Mixtiles Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-60" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(16.3k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find the latest Mixtiles discount code and Mixtiles promo code for October 2026 to save on custom photo wall art and gallery collections. Enjoy the Buy 1 Get 1 50% OFF offer on your second Mixtiles pack, up to 27% OFF selected wall art layouts, and free shipping on orders over $59. Create personalized gallery walls with your favorite memories using bestselling Mixtiles collections. Apply a verified Mixtiles discount code or promo code at checkout to maximize your savings.
                    </p>
                    <a
                      href="https://www.mixtiles.com"
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
                    { icon: Users, val: "4M+", label: "Shoppers" },
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
                      <a href="https://www.mixtiles.com" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                        <img
                          src="https://res.cloudinary.com/couponsbit/image/upload/v1793338496/mixtiles-logo_xrh8pf.webp"
                          alt="Mixtiles Promo Code"
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
                  <h2 className="text-2xl font-black text-black leading-tight">Mixtiles Coupon Codes & Offers</h2>
                </div>

                {/* Coupon 1 — Save Up to 27% on Wall Art Collections */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">27%</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">WALL ART</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Mixtiles Discount Code: Save Up to 27% on Wall Art Collections</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Give your walls a fresh look with custom photo displays and save up to 27% on select Mixtiles collections.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save up to 27% on bestselling wall art layouts and photo displays.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Pick from many modern designs that fit any room.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Build your own gallery wall from your favorite memories.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A simple way to freshen up your home with personal decor.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.mixtiles.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Mixtiles deal: Save Up to 27% on Wall Art Collections" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon 2 — Get Up to 15% Off Large Orders */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">15%</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">LARGE ORDERS</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Mixtiles Discount Code: Get Up to 15% Off Large Orders</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Save more on bigger purchases with special volume discounts from Mixtiles.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Get 5% off orders over $1,500, 10% off orders of $3,000 or more, and 15% off orders of $10,000 or more.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>The more you buy, the more you save, and the discount applies automatically.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A good fit for businesses, offices, and big decorating projects.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A smart choice when you are furnishing more than one space.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.mixtiles.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Mixtiles deal: Up to 15% Off Large Orders" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon 3 — Enjoy Fast and Free Shipping */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FREE</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">SHIP</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">OVER $59</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Mixtiles Promo Code: Enjoy Fast and Free Shipping</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Order your favorite wall art and get fast shipping on eligible purchases.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Get free shipping on orders over $59.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Quick delivery means you can decorate sooner.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Each order is packed with care to keep your artwork safe.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great for home makeovers and thoughtful gifts.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.mixtiles.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Mixtiles deal: Free Shipping on Orders Over $59" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon 4 — Wild Visuals From $164.25 */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FROM</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$164</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">WILD VISUALS</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Mixtiles Promo Code: Wild Visuals From $164.25</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Build an eye-catching gallery wall with the Wild Visuals collection, starting at $164.25.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save on Wild Visuals, now from $164.25 instead of the regular $219.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>The large layout makes a bold statement in any room.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great for showing off travel, family, or wedding photos.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A strong centerpiece for a living room or office.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.mixtiles.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Mixtiles deal: Wild Visuals From $164.25" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon 5 — Offbeat Set From $105.75 */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FROM</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$105</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">OFFBEAT SET</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Mixtiles Discount Deals: Offbeat Set From $105.75</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Bring modern style to your walls with the bestselling Offbeat Set, starting at $105.75.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Get the Offbeat Set from $105.75 instead of the regular $141.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>The unique layout makes a gallery display that stands out.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Easy to personalize with your favorite memories.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A nice pick for bedrooms, hallways, or home offices.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.mixtiles.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Mixtiles deal: Offbeat Set From $105.75" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About Mixtiles?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Mixtiles is a personalized photo decor brand known for turning digital pictures into lightweight wall art. The company offers photo tiles that allow customers to print their favorite images and arrange them on walls without the hassle of traditional framing.

                  </p>

                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Instead of leaving travel pictures, family portraits, wedding photos, or special memories stored on your phone, you can use Mixtiles to create a customized display for your living room, bedroom, home office, or hallway.

                  </p>

                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand focuses on making photo printing and wall decoration convenient. Its products are designed to help customers create personalized displays, whether they prefer a symmetrical gallery wall or a collection of pictures arranged in a more creative layout.

                  </p>

                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Mixtiles is particularly appealing to people who want personalized home decor without investing in multiple traditional frames. Its photo tiles can also make meaningful gifts for birthdays, anniversaries, weddings, housewarmings, and other memorable occasions.

                  </p>
                  
                  <a href="https://www.mixtiles.com" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Categories Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    Find the Latest Mixtiles Promo Code on CouponsBit
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      A Mixtiles promo code can help you look for savings when ordering personalized photo tiles. If you're planning a gallery wall or creating a photo gift, checking for promotional offers before checkout is a practical way to manage your decorating budget.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      CouponsBit helps shoppers in the United States discover coupon codes, promo codes, and discounts across different brands. Visit CouponsBit to explore available Mixtiles offers and review the conditions attached to each promotion.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Here are some types of offers worth checking:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Percentage-off promo codes:</strong> Eligible promotions may reduce your order total by a specified percentage.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Dollar-off discounts:</strong> Some offers may provide a fixed amount off qualifying purchases.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Multi-tile deals:</strong> Look for promotions that may offer better value when purchasing several photo tiles together.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Seasonal promotions:</strong> Check for deals around holidays, birthdays, Mother's Day, Father's Day, and other gifting occasions.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>First-order offers:</strong> If available, introductory promotions may help new customers save on eligible purchases.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Shipping offers:</strong> Review whether any current promotion applies to delivery costs.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      These are potential promotion types, not guaranteed active offers. Availability, minimum spending requirements, and product exclusions can change, so verify the terms before ordering.
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
          Mixtiles Promo Code: Save on Personalized Photo Tiles
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
          "Mixtiles Wall Art Collections Sale",
          "Up to 27% OFF",
          "All Users",
          "Savings on bestselling wall art layouts, photo displays, and gallery wall setups.",
          "Select Mixtiles Collections"
        ],
        [
          "Mixtiles Volume Discount",
          "Up to 15% OFF",
          "All Users",
          "5% off $1,500+, 10% off $3,000+, and 15% off $10,000+. Automatically applied at checkout.",
          "Large & Bulk Orders"
        ],
        [
          "Mixtiles Fast & Free Shipping",
          "Free Shipping",
          "All Users",
          "Free fast shipping on qualifying orders totaling $59 or more.",
          "Orders $59+"
        ],
        [
          "Mixtiles Wild Visuals Collection",
          "Save 25% (From $164.25)",
          "All Users",
          "Reduced from $219 regular price. Large gallery layout statement centerpiece.",
          "Wild Visuals Collection"
        ],
        [
          "Mixtiles Offbeat Set Sale",
          "Save 25% (From $105.75)",
          "All Users",
          "Reduced from $141 regular price. Modern unique layout display.",
          "Offbeat Set"
        ],
        [
          "Mixtiles 12 Memories Collection",
          "Save 20% (From $144)",
          "All Users",
          "Reduced from $180 regular price. Displays 12 photos in one neat arrangement.",
          "12 Memories Collection"
        ],
        [
          "Mixtiles 6 Enduring Pictures Sale",
          "Save 25% (From $202.50)",
          "All Users",
          "Reduced from $270 regular price. Clean, durable multi-frame layout.",
          "6 Enduring Pictures Collection"
        ],
        [
          "Mixtiles Symphony of Frames Sale",
          "Save 25% (From $209.25)",
          "All Users",
          "Reduced from $279 regular price. Premium large gallery wall arrangement.",
          "Symphony of Frames Collection"
        ],
        [
          "Mixtiles Bold Statement Collection",
          "Save 25% (From $231.75)",
          "All Users",
          "Reduced from $309 regular price. Oversized layout focal point display.",
          "Bold Statement Collection"
        ],
        [
          "Mixtiles Bestselling Layouts Offer",
          "From $81",
          "All Users",
          "Parallel Triplet from $81, Timeless Quartet from $135, and Harmony in Four from $297.",
          "Selected Wall Art Layouts"
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
            Looking for a Mixtiles promo code to turn your favorite memories into beautiful wall decor for less? Mixtiles makes it easy to transform photos from your phone into personalized photo tiles that you can display around your home. Whether you're decorating a new apartment, creating a gallery wall, or putting together a thoughtful gift for someone special, Mixtiles offers a simple way to make your favorite moments part of your everyday space.
          </p>
          <p>
            Before placing an order, check CouponsBit for available Mixtiles promo codes, discount offers, and deals. Comparing current promotions can help you find eligible savings on photo tiles and other personalized wall decor.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Popular Mixtiles Products to Explore
          </h3>
          <p>
            Mixtiles offers personalized photo decor for different spaces, styles, and occasions. Your ideal choice depends on the pictures you want to display and the look you're trying to create.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            1. Personalized Photo Tiles
          </h4>
          <p>
            Photo tiles are the foundation of Mixtiles' offering. You can use your favorite digital images to create wall displays featuring family moments, friends, pets, travel memories, or everyday snapshots.
          </p>
          <p>
            Arrange several tiles together to create a coordinated gallery wall, or use a single photo tile to highlight a special memory in a smaller space.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            2. Gallery Walls
          </h4>
          <p>
            If you have multiple pictures you love, a gallery wall can bring them together in one personalized display. You can combine vacation photos, family portraits, celebrations, and candid moments to create decor that reflects your personality.
          </p>
          <p>
            Before ordering, plan your layout and select images that work well together. Checking the available product sizes and current bundle offers can help you choose an arrangement that fits your wall and budget.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            3. Personalized Gifts
          </h4>
          <p>
            Custom photo tiles can make thoughtful gifts because they feature memories shared with the recipient. Consider creating a display for a wedding anniversary, a parent's birthday, a graduation, or a housewarming.
          </p>
          <p>
            A collection of travel photos can also be a meaningful gift for someone who enjoys exploring new destinations.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            4. Home Office and Bedroom Decor
          </h4>
          <p>
            Personalized wall tiles can add character to workspaces, bedrooms, and other areas of your home. You might choose motivational travel pictures for a home office or a collection of family photographs for a bedroom wall.
          </p>
          <p>
            Selecting images that match your existing decor can help you create a cohesive look without purchasing additional decorative accessories.
          </p>
          <p>
            Product styles, sizes, and customization options may vary, so check Mixtiles' current catalog before placing an order.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use a Mixtiles Promo Code
          </h3>
          <p>
            Applying a Mixtiles promo code is generally straightforward. Follow these steps to check whether your selected offer works for your purchase.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Visit CouponsBit:</strong> Look for available Mixtiles promo codes and current discount offers.</li>
            <li><strong>Choose your promotion:</strong> Read the offer details, including any minimum purchase requirements or exclusions.</li>
            <li><strong>Visit Mixtiles:</strong> Browse the available photo tiles and select the products you want.</li>
            <li><strong>Upload your pictures:</strong> Follow the site's instructions to personalize your chosen products.</li>
            <li><strong>Review your cart:</strong> Check the number of tiles, product details, shipping information, and order total.</li>
            <li><strong>Enter the promo code:</strong> If the offer requires a code, enter it in the designated promotional-code field during checkout.</li>
            <li><strong>Confirm your savings:</strong> Verify that the discount appears in the final total before completing payment.</li>
          </ol>
          <p>
            Some promotions may apply automatically rather than requiring a code. Always review the final checkout amount to confirm which savings have been applied.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Tips to Save More on Mixtiles
          </h3>
          <p>
            A promo code can help reduce your spending, but a few additional steps can make your purchase more cost-effective.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Plan your gallery wall first:</strong> Decide how many tiles you need before ordering to avoid unnecessary purchases.</li>
            <li><strong>Compare multi-tile offers:</strong> If you're decorating a large wall, check whether a qualifying bundle or multi-item promotion offers better value.</li>
            <li><strong>Choose your photos carefully:</strong> Select clear, high-quality images that work well with your intended layout.</li>
            <li><strong>Check seasonal sales:</strong> Look for promotions around major US holidays and popular gifting occasions.</li>
            <li><strong>Review shipping costs:</strong> Consider delivery fees when comparing discounts and calculating the final order total.</li>
            <li><strong>Read offer conditions:</strong> Check expiration dates, minimum spending requirements, and restrictions on combining promotions.</li>
            <li><strong>Check CouponsBit before checkout:</strong> Explore available Mixtiles promo codes to see whether you qualify for additional savings.</li>
          </ul>
          <p>
            Remember that buying more tiles only makes sense when you need them. A discount should help you save on your planned purchase rather than encourage unnecessary spending.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            When Is the Best Time to Shop for Mixtiles?
          </h3>
          <p>
            If you're planning personalized wall decor, shopping around major promotional periods may give you more opportunities to find an offer.
          </p>
          <p>
            <strong>Black Friday and Cyber Monday:</strong> These major US shopping events are worth checking for potential home decor and personalized gift promotions.
          </p>
          <p>
            <strong>Christmas and the holiday season:</strong> Personalized photo tiles can make meaningful gifts for family members and friends. Ordering early gives you more time to prepare your pictures and check delivery estimates.
          </p>
          <p>
            <strong>Mother's Day and Father's Day:</strong> Family photo displays can make thoughtful gifts for parents and grandparents.
          </p>
          <p>
            <strong>Birthdays and anniversaries:</strong> You don't always need to wait for a major sale. Check available promo codes whenever you're planning a personalized photo gift.
          </p>
          <p>
            Promotional schedules and discounts vary, so compare the current offers rather than assuming a particular deal will be available.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Why Check CouponsBit for Mixtiles Promo Codes?
          </h3>
          <p>
            CouponsBit helps shoppers across the United States discover promo codes, coupon codes, and deals from participating brands. If you're planning to personalize your walls with Mixtiles, checking for available offers before checkout can help you identify potential savings.
          </p>
          <p>
            You can use CouponsBit as a starting point to look for relevant Mixtiles promotions and review the requirements attached to each offer. Since discounts can change, make sure your selected code is valid and applicable to your order.
          </p>
          <p>
            Whether you're creating a photo wall for your new home or preparing a personalized gift, combining thoughtful planning with a suitable Mixtiles promo code can help you make the most of your budget.
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
              q: "1. Where can I find a Mixtiles promo code?",
              a: "Check CouponsBit for available Mixtiles promo codes and discount offers. Review each promotion's terms and confirm that it applies to your intended purchase."
            },
            {
              q: "2. How do I apply a Mixtiles promo code?",
              a: "Select an eligible offer, customize your photo tiles, and enter the code in the designated promotional-code field at checkout if required. Confirm that the discount appears before completing your order."
            },
            {
              q: "3. Does Mixtiles offer discounts on multiple photo tiles?",
              a: "Promotions and product pricing may vary. Check the current Mixtiles catalog and available offers to see whether a multi-tile purchase qualifies for a discount."
            },
            {
              q: "4. Can I use a Mixtiles promo code on my first order?",
              a: "Some promotions may be available to new customers, depending on the current offer terms. Check the eligibility requirements to see whether a first-order discount is available."
            },
            {
              q: "5. Why is my Mixtiles promo code not working?",
              a: "Your code may have expired, may require a minimum purchase, or may exclude certain products. Check for typing errors, review the offer conditions, and verify that your cart meets the requirements."
            },
            {
              q: "6. Are Mixtiles photo tiles a good gift?",
              a: "Personalized photo tiles can be a thoughtful gift for birthdays, anniversaries, weddings, graduations, and housewarmings. Choosing pictures that reflect shared memories can make the gift more personal."
            },
            {
              q: "7. When should I order Mixtiles for the holidays?",
              a: "Order early enough to account for photo selection, customization, processing, and shipping. Check the current delivery estimates before placing an order, especially during busy holiday periods."
            },
            {
              q: "8. Can I combine Mixtiles promo codes with other discounts?",
              a: "That depends on the terms of the specific promotion. Review the retailer's current checkout rules to determine whether multiple offers can be combined."
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
            Popular Mixtiles Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Mixtiles Promo Code",
              "Personalized Photo Tiles",
              "Gallery Wall Deals",
              "Custom Photo Gifts",
              "Multi-Tile Discounts",
              "First Order Promo",
              "Home Wall Decor",
              "Holiday Photo Gifts"
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
            Today's Top Mixtiles Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "GALLERY WALL BUNDLE",
                sub: "Save when you buy multiple photo tiles",
              },
              {
                heading: "FIRST ORDER OFFER",
                sub: "Special discount for new customers",
              },
              {
                heading: "SEASONAL WALL DECOR",
                sub: "Promotional savings on custom photo prints",
              },
              {
                heading: "MULTI-TILE PACKS",
                sub: "Up to 30% off selected photo sets",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  M
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
                  href="https://www.mixtiles.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Mixtiles: ${deal.heading}`}
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
