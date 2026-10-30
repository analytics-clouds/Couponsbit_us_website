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
    discount: "60%",
    label: "UP TO",
    title: "Up to 60% Off During Carter's Stellar Sleep Week",
    heading: "Up to 60% OFF",
    sub: "SLEEP WEEK",
    description: "Get cozy pajamas for the whole family at up to 60% off during Carter's Stellar Sleep Week. Save on kids' pajamas, classic plaid prints, and soft sleepwear for babies, toddlers, and big kids.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c2",
    discount: "20%",
    label: "SAVE",
    title: "20% Off When You Join Carter's Email and Texts",
    heading: "Save 20% OFF",
    sub: "EMAIL DEAL",
    description: "Sign up for Carter's email and text alerts today and unlock 20% off your next purchase. Be the first to hear about special promotions, new arrivals, and seasonal sales.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c3",
    discount: "30%",
    label: "SAVE",
    title: "30% Off With a Carter's Credit Card",
    heading: "Save 30% OFF",
    sub: "W/ CARD",
    description: "Apply for a Carter's Credit Card and take 30% off your first purchase. Earn 3X points every day on eligible purchases with VIP+ perks, plus enjoy free shipping every day.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c4",
    discount: "SHIP",
    label: "FREE",
    title: "Free Shipping on Orders Over $50 at Carter's",
    heading: "Free Shipping",
    sub: "OVER $50",
    description: "Spend $50 or more at Carter's online and skip the shipping fee. Pair free shipping with current sales for even more savings on clothes, shoes, accessories, and baby basics.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c5",
    discount: "75%",
    label: "UP TO",
    title: "75% Off Baby Girl Heart Fleece Layering Set – Just $22.80",
    heading: "Up to 75% OFF",
    sub: "FLEECE SET",
    description: "Dress your baby in comfy, adorable style with this 3-piece fleece layering set for just $22.80, down from the regular $90. Soft fleece helps keep your baby warm and cozy.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Up To 75% OFF", href: "/stores/etsy-coupon-code" },
  { name: "Spirit Halloween", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699426/spirti-logo_x4nbor.webp", dealText: "Up To 75% OFF", href: "/stores/spirit-halloween-discount-code" },
  { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra OFF", href: "/stores/home-depot-discount-code" },
];

export default function CartersCouponsContent() {
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
              <span className="text-black font-extrabold">Carter&apos;s</span>
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
                  <a href="https://www.carters.com" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1793338496/carters-logo_fcvfdh.webp"
                        alt="Carter's"
                        width={112}
                        height={112}
                        sizes="112px"
                        className="w-full h-full object-contain"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Carter&apos;s Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-60" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(31.4k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find the latest Carter's discount code and Carter's promo code for October 2026 to save on baby and kids' clothing. Enjoy up to 60% OFF during Stellar Sleep Week, 30% OFF your first purchase with a Carter's Credit Card, 20% OFF when you join emails and texts, plus free shipping on orders over $50. Shop sleepwear, baby essentials, toddler clothing, jackets, and everyday outfits while applying a verified Carter's discount code or promo code to maximize your savings.
                    </p>
                    <a
                      href="https://www.carters.com"
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
                    { icon: Users, val: "9M+", label: "Shoppers" },
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
                      <a href="https://www.carters.com" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                        <img
                          src="https://res.cloudinary.com/couponsbit/image/upload/v1793338496/carters-logo_fcvfdh.webp"
                          alt="Carter's Promo Code"
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
                  <h2 className="text-2xl font-black text-black leading-tight">Carter&apos;s Coupon Codes & Offers</h2>
                </div>

                {/* Coupon 1 — Up to 60% Off During Stellar Sleep Week */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">60%</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">SLEEP WEEK</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Carter&apos;s Discount Code: Up to 60% Off During Stellar Sleep Week</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Get cozy pajamas for the whole family at up to 60% off during Carter&apos;s Stellar Sleep Week.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save up to 60% on kids&apos; pajamas from October 29 through November 3.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Browse classic plaid prints that are perfect for matching siblings.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Find soft sleepwear for babies, toddlers, and big kids.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A great time to restock your family&apos;s bedtime basics for less.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.carters.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Carter's deal: Up to 60% Off During Stellar Sleep Week" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon 2 — 20% Off When You Join Email and Texts */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">20%</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">EMAIL DEAL</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Carter&apos;s Discount Code: 20% Off When You Join Email and Texts</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Sign up for Carter&apos;s email and text alerts today and unlock a special discount.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Get 20% off your next purchase after you sign up.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Be the first to hear about special promotions and new arrivals.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Stay in the loop on seasonal sales and limited-time deals.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>An easy way to save on your favorite Carter&apos;s styles.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.carters.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Carter's deal: 20% Off When You Join Email and Texts" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon 3 — 30% Off With a Carter's Credit Card */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">30%</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">W/ CARD</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Carter&apos;s Promo Code: 30% Off With a Carter&apos;s Credit Card</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Apply for a Carter&apos;s Credit Card to save more and earn VIP+ rewards.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Take 30% off your first purchase made with the card.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Earn 3X points every day on eligible purchases with VIP+ perks.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy free shipping every day, plus special offers for cardholders.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A smart choice for families who shop at Carter&apos;s all year.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.carters.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Carter's deal: 30% Off With a Carter's Credit Card" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon 4 — Free Shipping on Orders Over $50 */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FREE</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">SHIP</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">OVER $50</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Carter&apos;s Promo Code: Free Shipping on Orders Over $50</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Spend $50 or more at Carter&apos;s online and skip the shipping fee.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Get free shipping on eligible orders over $50.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Pair free shipping with current sales for even more savings.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Add clothes, shoes, accessories, and baby basics to the same order.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A simple way to save while stocking up on family favorites.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.carters.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Carter's deal: Free Shipping on Orders Over $50" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon 5 — 75% Off Baby Girl Heart Fleece Layering Set */}
                <div className="w-full max-w-7xl mx-auto mb-6">
                  <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                    <div className="flex flex-row">
                      <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                        <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                        <div className="text-center px-1">
                          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UP TO</p>
                          <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">75%</div>
                          <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">FLEECE SET</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                            <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                          </div>
                          <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">Carter&apos;s Discount Deals: 75% Off Baby Girl Heart Fleece Layering Set</h2>
                          <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">Dress your baby in comfy, adorable style with this 3-piece fleece layering set for just $22.80.</p>
                          <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                            View Details
                            <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                            <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save nearly 75% and pay just $22.80 instead of the regular $90.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Three matching pieces make everyday outfits easy.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Soft fleece helps keep your baby warm and cozy.</li>
                              <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A great value for a gift or a wardrobe refresh.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                          <a href="https://www.carters.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Carter's deal: 75% Off Baby Girl Heart Fleece Layering Set" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Carter’s?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Carter’s is an American clothing brand known for baby clothes, toddler outfits, and children’s apparel. Its collections include everyday essentials, sleepwear, bodysuits, dresses, rompers, tops, bottoms, outfit sets, and accessories. The brand also offers clothing for different ages, from newborns and babies to toddlers and older kids. 

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    
                    Carter’s focuses on practical styles for the many stages of childhood. Parents can shop for daily wear, comfortable sleepwear, coordinated outfits, seasonal clothing, and gifts for baby showers or birthdays. Its range includes options for both baby boys and baby girls, along with neutral styles.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For shoppers in India, the official Carter’s India website provides access to its local collection. Before using a promo code, make sure it applies to the website and region where you intend to shop.

                  </p>
                  <a href="https://www.carters.com" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
    Find a Carter’s Promo Code on CouponsClouds
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Looking for a Carter’s promo code to use on your next order? Visit CouponsBitto check for available coupons, discount codes, and special offers. Promotions can change throughout the year, so review the listed terms before choosing an offer.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Here are a few ways to look for potential savings:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Welcome offers:</strong> Check whether Carter’s provides a discount for new customers or newsletter subscribers in your region.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Seasonal promotions:</strong> Look for special offers around festive periods, seasonal wardrobe updates, and major shopping events.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Prepaid-order offers:</strong> Carter’s India has advertised savings on prepaid orders. Check the official website to confirm whether the offer is currently available.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Product deals:</strong> Explore offers on selected clothing categories, multipacks, and coordinated outfits.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Website promotions:</strong> Check the official Carter’s website for current offers and any eligibility requirements.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Not every promotion applies to every product. Some codes may have minimum-spend requirements, product exclusions, or expiry dates. Always check the details before placing an order.
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
          Carter’s Promo Code: Save on Baby Clothes & Kidswear
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
          "Carter's Stellar Sleep Week Sale",
          "Up to 60% OFF",
          "All Users",
          "Valid Oct 29 – Nov 3 on kids', baby, and toddler sleepwear, including matching sibling plaid prints.",
          "Sleepwear & Pajamas"
        ],
        [
          "Carter's Email & Text Signup Offer",
          "20% OFF",
          "New Subscribers",
          "Sign up for email and text alerts to receive 20% off your next purchase.",
          "Next Purchase"
        ],
        [
          "Carter's Credit Card Welcome Offer",
          "30% OFF",
          "New Cardholders",
          "30% off first purchase made with the card. Includes VIP+ perks, 3X points, and free shipping.",
          "First Credit Card Purchase"
        ],
        [
          "Carter's Free Shipping Offer",
          "Free Shipping",
          "All Users",
          "Free standard shipping on qualifying orders over $50.",
          "Orders $50+"
        ],
        [
          "Baby Girl Heart Fleece Layering Set",
          "75% OFF ($22.80)",
          "All Users",
          "Reduced from $90 regular price. 3-piece cozy fleece matching outfit set.",
          "Baby Girl Heart Fleece Set"
        ],
        [
          "Toddler Girl Long-Sleeve Peplum Top",
          "From $5",
          "All Users",
          "Reduced from $7 regular price. Soft long-sleeve top for cooler weather.",
          "Toddler Girl Peplum Top"
        ],
        [
          "Toddler Boy French Terry Joggers",
          "From $7",
          "All Users",
          "Reduced from $10 regular price. Soft French terry with elastic waistband.",
          "Toddler Boy French Terry Joggers"
        ],
        [
          "Baby Bear Fair Isle Cardigan Sweater",
          "50% OFF ($21)",
          "All Users",
          "Reduced from $42 regular price. Soft knit cardigan with bear print detail.",
          "Baby Bear Cardigan Sweater"
        ],
        [
          "Baby Bear Fleece Pullover Sweatshirt",
          "From $23",
          "All Users",
          "Reduced from $30 regular price. Soft fleece pullover style for cooler weather.",
          "Baby Bear Fleece Pullover"
        ],
        [
          "Baby Girl Bow Poplin Jacket",
          "Save $25 ($39)",
          "All Users",
          "Reduced from $64 regular price. Lightweight jacket with cute bow detailing.",
          "Baby Girl Bow Poplin Jacket"
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
            Shopping for your little one becomes easier when you find comfortable clothes, cute designs, and useful savings in one place. With a Carter’s promo code, parents can look for extra savings on baby essentials, toddler outfits, sleepwear, and everyday kidswear. CouponsBit helps you discover available Carter’s offers and promotional deals so you can check for savings before placing your order.
          </p>
          <p>
            Whether you are preparing for a newborn, refreshing your child’s wardrobe, or choosing a thoughtful baby gift, explore Carter’s collections and check for an eligible offer before checkout.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Shop Popular Carter’s Collections
          </h3>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Baby Bodysuits and Essentials
          </h4>
          <p>
            Bodysuits are practical wardrobe staples for babies. Carter’s offers different designs and multipacks that can help parents stock up on everyday essentials. Explore options for different ages, sleeve lengths, and occasions.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Sleepsuits and Pajamas
          </h4>
          <p>
            Comfortable sleepwear is an important part of a baby's wardrobe. Browse sleepsuits, one-piece pajamas, and other bedtime essentials in a range of prints and designs.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Outfit Sets and Rompers
          </h4>
          <p>
            Looking for an easy outfit? Coordinated sets and rompers make dressing your little one simpler. These styles are useful for everyday activities, family outings, and casual occasions.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Dresses and Girls’ Clothing
          </h4>
          <p>
            Explore dresses, tops, bottoms, and coordinated outfits for baby girls, toddlers, and older girls. Different prints and styles make it easier to find clothing for everyday wear or special occasions.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Boys’ Clothing
          </h4>
          <p>
            Carter’s collection includes tops, bottoms, joggers, overalls, sweatshirts, and outfit sets for baby boys and older children. Browse the available sizes and designs to find options suited to your child's needs.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            Baby Gifts and Accessories
          </h4>
          <p>
            If you are shopping for a baby shower or a newborn gift, explore clothing sets, essentials, and accessories. Coordinated pieces can make useful gifts for new parents.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use a Carter’s Promo Code
          </h3>
          <p>
            Follow these steps to apply an eligible Carter’s promo code:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit the Carter’s website for your region.</li>
            <li>Browse the collection and add your selected products to the shopping bag.</li>
            <li>Open your cart or proceed to checkout.</li>
            <li>Look for the promo code or discount code field.</li>
            <li>Enter your code as provided and select the option to apply it.</li>
            <li>Check the order summary to confirm whether the discount has been applied.</li>
            <li>Review the final payable amount before completing your purchase.</li>
          </ol>
          <p>
            If the code does not work, check whether it has expired, whether your products qualify, and whether your order meets the minimum-spend requirement. Also confirm that the code is valid on the regional website you are using.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Tips to Get More Value From Carter’s Deals
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Plan purchases around your child’s needs:</strong> Make a list of essentials such as bodysuits, pajamas, and everyday outfits before shopping.</li>
            <li><strong>Compare multipacks with individual pieces:</strong> Multipacks may be useful when you need several basics in the same size.</li>
            <li><strong>Check the size guide:</strong> Children grow quickly, so review the available sizing information before ordering.</li>
            <li><strong>Browse sale sections:</strong> Look for discounts on selected styles and seasonal collections.</li>
            <li><strong>Read offer conditions:</strong> Confirm whether a promo code can be combined with other deals and whether particular products are excluded.</li>
            <li><strong>Check delivery and return policies:</strong> Review the terms on the regional website before completing your order.</li>
          </ul>
          <p>
            These simple steps can help you choose suitable clothing while making the most of available promotions.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Save on Your Next Carter’s Order with CouponsClouds
          </h3>
          <p>
            From newborn essentials and sleepsuits to toddler outfits and kids’ clothing, Carter’s offers a range of styles for growing children. Before you shop, visit CouponsBit to explore available Carter’s promo codes, coupons, and special offers.
          </p>
          <p>
            Compare the available deals, check the conditions, and apply an eligible code at checkout to make your next kidswear purchase more rewarding.
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
              q: "Where can I find a Carter’s promo code?",
              a: "You can visit CouponsBit to check available Carter’s promo codes and deals. The official Carter’s website may also feature promotional offers, subject to regional availability."
            },
            {
              q: "Does Carter’s offer discounts on baby clothes?",
              a: "Carter’s runs promotions on selected products and categories from time to time. Check the official website and CouponsBit for available offers and their conditions."
            },
            {
              q: "Can I use a Carter’s promo code on sale items?",
              a: "It depends on the promotion. Some codes exclude sale or clearance products, while others apply only to selected collections. Read the terms before applying a code."
            },
            {
              q: "Does Carter’s offer promotions in India?",
              a: "Yes, the official Carter’s India website has advertised promotions, including prepaid-order savings. Offers can change, so check the website for current availability and conditions."
            },
            {
              q: "Why is my Carter’s promo code not working?",
              a: "A code may be expired, restricted to specific products, or subject to a minimum order value. It may also be valid only on a particular regional website. Review the offer details and check that the code has been entered correctly."
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
            Popular Carter’s Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Carter’s Promo Code",
              "Baby Clothes Deals",
              "Kidswear Discounts",
              "Baby Bodysuits Multipack",
              "Toddler Outfit Sets",
              "Sleepsuits Sale",
              "Prepaid Order Savings",
              "Newborn Baby Gifts"
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
            Today's Top Carter’s Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "BABY ESSENTIALS",
                sub: "Save on bodysuits, pajamas & multipacks",
              },
              {
                heading: "TODDLER & KIDSWEAR",
                sub: "Discounts on everyday outfits & sets",
              },
              {
                heading: "PREPAID SAVINGS",
                sub: "Extra discounts on select online orders",
              },
              {
                heading: "CLEARANCE & SALE",
                sub: "Up to 50% off seasonal kidswear styles",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  C
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
                  href="https://www.carters.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Carter’s: ${deal.heading}`}
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
