"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
  Layers,
  LayoutGrid,
  Heart,
  Copy,
  Check,
  X,
  Laptop,
  Plane,
  Tv,
  Code,
  Zap,
  Bus,
  MapPin,
  GraduationCap,
  Briefcase,
  Sun
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { type Coupon, FLIXBUS_COUPONS } from "./offers";

interface StoreCouponsContentProps {
  relatedStores?: any[];
}

export default function StoreCouponsContent({ relatedStores }: StoreCouponsContentProps) {
  // Exactly 8 state variables per template spec
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<"all" | "codes" | "deals">("all");
  const [sortOrder, setSortOrder] = useState<"featured" | "discount">("featured");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    code: string;
    affiliateUrl: string;
    title: string;
  }>({
    isOpen: false,
    code: "",
    affiliateUrl: "",
    title: "",
  });

  const handleCopy = (code: string, id: string, affiliateUrl: string, title: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setModalData({
      isOpen: true,
      code,
      affiliateUrl,
      title,
    });
    setTimeout(() => {
      setCopiedId(null);
    }, 3000);
  };

  const RELATED_STORES = [
    { name: "TrainPal", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp", dealText: "Up to 50% OFF", href: "/stores/trainpal-discount-code" },
    { name: "Kiwi.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/kiwi-logo_egovdr.webp", dealText: "Up to $580 Rewards", href: "/stores/kiwi-discount-code" },
    { name: "Cheapflights", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494079/Cheepflights-coupon-code_cbqikz.jpg", dealText: "Up to 25% OFF", href: "/stores/cheapflights-discount-code" },
    { name: "Fireflyz", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784971/firefly-logo_ju6n0p.webp", dealText: "One-Way Fares From $29", href: "/stores/fireflyz-discount-code" },
    { name: "Latam Airlines", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/latam-airlines-coupon-code_pvcsml.webp", dealText: "Up to 40% OFF", href: "/stores/latam-airlines-discount-code" },
    { name: "Etihad", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784784970/etihad-logo_lbl7mo.webp", dealText: "Up To 30% OFF", href: "/stores/etihad-discount-code" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      {/* Code copied popup modal */}
      {modalData.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-gray-100 text-center animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setModalData(prev => ({ ...prev, isOpen: false }))}
              className="absolute right-5 top-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-black transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-[#056bfa]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#056bfa]">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-black mb-1">Code Copied!</h3>
            <p className="text-sm font-semibold text-gray-500 mb-6">Paste this code at checkout on FlixBus</p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center justify-between gap-3 mb-6">
              <span className="font-mono text-xl font-black tracking-wider text-black select-all">{modalData.code}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(modalData.code);
                  setCopiedId("modal");
                  setTimeout(() => setCopiedId(null), 2000);
                }}
                className="px-4 py-2 bg-black text-white text-xs font-bold rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-1.5 shrink-0"
              >
                {copiedId === "modal" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedId === "modal" ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={modalData.affiliateUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                onClick={() => setModalData(prev => ({ ...prev, isOpen: false }))}
                className="w-full py-3.5 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Continue to FlixBus <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setModalData(prev => ({ ...prev, isOpen: false }))}
                className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors py-1"
              >
                Close and return to page
              </button>
            </div>
          </div>
        </div>
      )}

      <Navbar />

      <main>
        {/* Section 1: Breadcrumb and Store Header */}
        <section className="border-b border-[#f0f0f0] bg-white">
          <div className="container mx-auto px-4 max-w-7xl pt-4 pb-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-8 uppercase tracking-widest">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <Link href="/stores" className="hover:text-black transition-colors">Stores</Link>
              <span>/</span>
              <span className="text-black">FlixBus</span>
            </nav>

            {/* Store Identity Hero */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-[32px] border border-[#f0f0f0] p-6 flex items-center justify-center bg-white shadow-sm shrink-0 group relative">
                <img
                  src="https://res.cloudinary.com/couponsbit/image/upload/v1784546572/flixbus-australia-coupon-code_nvew4i.webp"
                  alt="FlixBus"
                  width={160}
                  height={160}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                  <h1 className="text-2xl md:text-4xl font-black text-black tracking-tight">FlixBus Discount Code</h1>
                  <span className="bg-[#e8f6f8] text-[#0451c4] text-xs font-black px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Store
                  </span>
                </div>

                <p className="text-gray-500 font-bold text-sm md:text-base max-w-3xl leading-relaxed mb-6">
                  Looking for the latest FlixBus discount code? Save up to 50% on eligible bus tickets and use coupon code FLXAUGND to get an extra 20% off app bookings. Travel across Australia with affordable fares, including routes starting from $9.99, and enjoy comfortable coaches with modern amenities. Whether you're planning a weekend getaway, daily commute, or holiday trip, FlixBus offers verified discounts and budget-friendly travel options to help you save more throughout Nov 2026.
                </p>

                {/* Badges / Micro-stats */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs font-black text-gray-500 uppercase tracking-widest border-t border-[#f0f0f0] pt-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-black">{FLIXBUS_COUPONS.length} Offers Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Updated November 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-gray-400" />
                    <span>2.4k Used Today</span>
                  </div>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={cn(
                      "flex items-center gap-1.5 transition-colors cursor-pointer ml-auto md:ml-0",
                      isFavorite ? "text-red-500 font-black" : "hover:text-black"
                    )}
                  >
                    <Heart className={cn("w-3.5 h-3.5", isFavorite && "fill-current")} />
                    <span>{isFavorite ? "Favorited" : "Save Store"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section 3 & 4: Coupons List + Sidebar */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Coupons List (Main Content) */}
              <div className="lg:w-[65%] space-y-6">

                {/* Coupon Cards */}
                {FLIXBUS_COUPONS.map((coupon) => (
                  <div key={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            {coupon.topLabel && (
                              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">
                                {coupon.topLabel}
                              </p>
                            )}
                            <div className="text-[18px] sm:text-4xl md:text-5xl font-extrabold leading-none mt-2">
                              {coupon.mainValue}
                            </div>
                            {coupon.offText && (
                              <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">
                                {coupon.offText}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                          <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                                Limited Time
                              </span>
                              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                                Verified Deal
                              </span>
                            </div>
                            <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                              {coupon.title}
                            </h2>
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                              {coupon.description}
                            </p>
                            <button
                              type="button"
                              onClick={() => setExpandedCouponId(expandedCouponId === coupon.id ? null : coupon.id)}
                              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
                            >
                              View Details
                              <ChevronDown
                                size={16}
                                className={cn(
                                  "transition-transform duration-300",
                                  expandedCouponId === coupon.id && "rotate-180"
                                )}
                              />
                            </button>
                            <div
                              className={cn(
                                "overflow-hidden transition-all duration-300",
                                expandedCouponId === coupon.id
                                  ? "max-h-[250px] opacity-100 mt-3"
                                  : "max-h-0 opacity-0"
                              )}
                            >
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {coupon.points.map((point, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-[#0344b0]">•</span>
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex flex-col items-center justify-center gap-3 px-3 sm:px-5 py-3 sm:py-6">
                            <a
                              href={coupon.affiliateUrl}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label={`Get FlixBus deal: ${coupon.title}`}
                              className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 lg:px-6 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block lg:whitespace-nowrap"
                            >
                              Visit Website
                            </a>
                            {coupon.code && (
                              <button
                                type="button"
                                onClick={() => handleCopy(coupon.code, coupon.id, coupon.affiliateUrl, coupon.title)}
                                className="w-full lg:w-auto flex items-center justify-between gap-3 border-2 border-dashed border-[#056bfa] rounded-2xl px-4 py-2.5 bg-white hover:bg-[#e8f6f8] transition-colors"
                              >
                                <span className="font-mono font-black text-[#056bfa] text-sm tracking-widest">{coupon.code}</span>
                                <span className="flex items-center gap-1 text-[#056bfa] font-bold text-[11px] uppercase shrink-0">
                                  {copiedId === coupon.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                  {copiedId === coupon.id ? "Copied" : "Copy"}
                                </span>
                              </button>
                            )}
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
                  <h3 className="text-black font-black text-lg mb-6">About FlixBus</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    FlixBus is recognised worldwide for making long-distance coach travel more accessible and affordable. The company operates an extensive transportation network that connects major cities and regional destinations, helping millions of passengers travel comfortably every year.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The booking process has been designed with convenience in mind. Travellers can search routes, compare schedules, purchase tickets, manage bookings, and access digital boarding passes using either the official website or mobile application.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its combination of affordability and convenience has made FlixBus a popular choice among budget-conscious travellers looking for reliable transportation without compromising on comfort.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For Australians planning holidays, business trips, weekend escapes, or university travel, using a FlixBus voucher code can further reduce ticket prices and stretch every travel dollar.
                  </p>
                  <a href="https://www.flixbus.com.au/" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
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
                        <span className="bg-[#e8f6f8] text-[#0451c4] px-2.5 py-0.5 rounded-full text-[12px] font-black">{cat.count} Coupons</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/categories" className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline">View All Categories →</Link>
                </div>

                {/* Travel Services Available Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8">Travel Services Available with FlixBus</h3>
                  <p className="text-gray-600 font-medium text-xs mb-8 leading-relaxed">
                    FlixBus serves different types of travellers by offering flexible booking options suitable for various travel needs.
                  </p>
                  <div className="space-y-8">
                    {[
                      {
                        icon: Bus,
                        title: "City-to-City Travel",
                        sub: "Whether you're commuting between major Australian cities or visiting regional destinations, FlixBus provides affordable transport without the stress of driving."
                      },
                      {
                        icon: MapPin,
                        title: "Weekend Getaways",
                        sub: "Planning a quick escape? Coach travel allows you to enjoy spontaneous trips while keeping transportation costs low."
                      },
                      {
                        icon: GraduationCap,
                        title: "Student Travel",
                        sub: "Students frequently travel between universities and hometowns throughout the year. Affordable fares make FlixBus an attractive option for managing education-related travel expenses."
                      },
                      {
                        icon: Briefcase,
                        title: "Business Trips",
                        sub: "Professionals appreciate reliable schedules, comfortable seating, and onboard amenities that help them remain productive during their journey."
                      },
                      {
                        icon: Sun,
                        title: "Holiday Transportation",
                        sub: "Families and tourists can travel comfortably while saving money that can instead be spent on accommodation, dining, or sightseeing."
                      },
                      {
                        icon: Users,
                        title: "Group Bookings",
                        sub: "Whether it's a sports team, university group, corporate event, or family reunion, FlixBus offers practical transportation for groups of different sizes."
                      }
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4 items-start text-left">
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

        {/* Section 6: More Stores You'll Love */}
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

        {/* Section 7: SEO Text Section */}
        <section className="py-24 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
              {/* Left: Text Content */}
              <div className="prose max-w-none text-justify">
                <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                  FlixBus Discount Code Australia | Grab the Best Travel Savings with CouponsBit
                </h2>

                <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[950px]">
                    <thead>
                      <tr className="bg-[#056BFA] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-none rounded-br-none">
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Coupon Code</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 font-bold text-[14px]">
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Sydney To Thredbo Snow Trip</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $74.99/trip</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">FLXAUGND</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 20% OFF with code</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sydney–Thredbo Coach Travel</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">Enjoy 50% OFF Your Next Trip</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">Flat 50% OFF</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">FLXAUGND</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 20% OFF with code</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Australia Coach Routes</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 text-black font-black align-middle max-w-[220px]">One-Way Fares From Just $9.99</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle">From $9.99 one-way</td>
                        <td className="p-5 text-[#056BFA] font-black align-middle font-mono tracking-widest">FLXAUGND</td>
                        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Extra 20% OFF with code, selected routes only</td>
                        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Selected One-Way Routes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <p>
                    Travelling across Australia doesn't have to come with a hefty price tag. Whether you're planning a scenic road trip from Sydney to Melbourne, heading to Brisbane for a holiday, or travelling between cities for work or study, FlixBus offers a comfortable and budget-friendly way to reach your destination. Better still, you can make every journey even more affordable by using a valid FlixBus discount code available on CouponsBit.
                  </p>
                  <p>
                    At CouponsBit, we help smart travellers discover verified savings before they book. Instead of paying full fare, you can browse the latest FlixBus voucher code, promotional offers, and exclusive travel deals in one convenient place. A few seconds spent applying a coupon at checkout could help lower your travel costs, allowing you to spend more on experiences rather than transportation.
                  </p>
                  <p>
                    FlixBus has become a preferred choice for travellers looking for reliable coach services without the high costs often associated with <Link href="/stores/cheapflights-discount-code" className="text-[#056bfa] hover:underline">air travel</Link> or driving long distances. Its modern fleet, comfortable seating, digital booking system, and extensive network make it suitable for solo travellers, families, students, backpackers, and business professionals alike.
                  </p>
                  <p>
                    Whether you're booking your first journey or you're already a frequent passenger, CouponsBit makes it easier to save with the latest FlixBus coupon code and promotional offers designed for Australian travellers.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose FlixBus for Your Australian Adventures?</h3>
                    <p>
                      Australia is filled with breathtaking coastlines, vibrant cities, charming regional towns, and unforgettable road trip destinations. Travelling between them should be simple, affordable, and comfortable—exactly what FlixBus aims to provide.
                    </p>
                    <p>
                      Instead of worrying about expensive fuel, airport queues, or costly <Link href="/stores/kiwi-discount-code" className="text-[#056bfa] hover:underline">domestic flights</Link>, travellers can relax onboard modern coaches equipped with practical amenities that make long-distance travel enjoyable.
                    </p>
                    <p>Some of the reasons people continue choosing FlixBus include:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>Affordable ticket prices</li>
                      <li>Comfortable reclining seats</li>
                      <li>Free onboard Wi-Fi on many routes</li>
                      <li>USB charging ports</li>
                      <li>Air-conditioned coaches</li>
                      <li>Convenient online booking</li>
                      <li>Mobile ticketing</li>
                      <li>Flexible travel options</li>
                      <li>Expanding destination network</li>
                      <li>Reliable customer support</li>
                    </ul>
                    <p>
                      Adding a FlixBus discount code during checkout makes an already affordable journey even better value.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Save More Every Time You Book with CouponsBit</h3>
                    <p>
                      Finding genuine coupon codes online can often be frustrating. Many websites list expired promotions that no longer work, leaving travellers disappointed during checkout.
                    </p>
                    <p>CouponsBit takes a different approach.</p>
                    <p>
                      Our goal is to help shoppers and travellers access genuine savings by regularly updating available deals from leading brands, including FlixBus. Instead of searching multiple coupon websites, you can browse current promotions in one place.
                    </p>
                    <p>Benefits of using CouponsBit include:</p>
                    <p><strong>Updated Travel Offers:</strong> Our team regularly checks available promotions to help travellers find current FlixBus savings.</p>
                    <p><strong>Free Access:</strong> There are no subscription fees or membership charges to browse available deals.</p>
                    <p><strong>Easy-to-Use Website:</strong> Finding a FlixBus coupon code takes only a few clicks.</p>
                    <p><strong>Travel Savings Throughout the Year:</strong> From holiday promotions to seasonal campaigns, CouponsBit keeps travellers informed about opportunities to reduce booking costs.</p>
                    <p><strong>Convenient Browsing Experience:</strong> Whether you're planning weeks in advance or booking at the last minute, our organised offers help you save time.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Using a FlixBus Discount Code Makes Sense</h3>
                    <p>
                      Many travellers search for cheaper transportation without realising they may already qualify for additional savings.
                    </p>
                    <p>Applying a valid FlixBus discount code before completing payment offers several advantages:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>Lower booking costs</li>
                      <li>Better travel value</li>
                      <li>Affordable family trips</li>
                      <li>Reduced student travel expenses</li>
                      <li>Savings on multiple passenger bookings</li>
                      <li>Budget-friendly holiday planning</li>
                      <li>Extra value during seasonal promotions</li>
                      <li>Opportunity to travel more frequently without increasing your budget</li>
                    </ul>
                    <p>
                      Even a small discount can make a noticeable difference, especially for travellers booking several journeys throughout the year.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Popular Australian Trips with FlixBus</h3>
                    <p>FlixBus is suitable for a wide range of travel occasions.</p>
                    <p>Many passengers use the service for:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>Weekend city breaks</li>
                      <li>University holidays</li>
                      <li>Business conferences</li>
                      <li>Family visits</li>
                      <li>Music festivals</li>
                      <li>Sporting events</li>
                      <li>Tourist attractions</li>
                      <li>Backpacking adventures</li>
                      <li>Coastal holidays</li>
                      <li>Regional exploration</li>
                    </ul>
                    <p>
                      No matter where your next journey takes you, checking CouponsBit for a FlixBus voucher code before booking is always a smart decision.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Experience Comfortable Coach Travel</h3>
                    <p>
                      Modern coach travel has evolved significantly over the years, and FlixBus reflects that change by focusing on passenger comfort.
                    </p>
                    <p>Depending on the route, travellers may enjoy features such as:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>Spacious seating</li>
                      <li>Air conditioning</li>
                      <li>USB charging points</li>
                      <li>Complimentary Wi-Fi</li>
                      <li>Large luggage compartments</li>
                      <li>Easy online check-in</li>
                      <li>Digital boarding passes</li>
                      <li>Professional drivers</li>
                      <li>Convenient departure locations</li>
                    </ul>
                    <p>
                      These amenities make long-distance journeys more relaxing, allowing passengers to read, work, stream entertainment, or simply enjoy the scenery.
                    </p>
                    <p>
                      Excellent! Here's CouponsBit – Part 2 (Final). This completes the store page with unique sections, different FAQs, and a distinct conclusion. The content remains SEO-focused, human-written, and tailored for the Australian audience while naturally incorporating your target keywords.
                    </p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a FlixBus Discount Code</h3>
                    <p className="text-gray-700 font-bold leading-relaxed mb-6">
                      Saving on your next coach journey is easy when you know where to find the latest deals. CouponsBit regularly updates available promotions so you can book your trip with confidence. Follow these simple steps to redeem a FlixBus discount code:
                    </p>
                    <div className="space-y-6">
                      {[
                        "Step 1: Browse the Latest Offers — Visit CouponsBit and search for FlixBus. Review the available promotions and choose the FlixBus voucher code that best matches your travel plans.",
                        "Step 2: Copy the Code — Click the offer to reveal the promotional code, then copy it for use during checkout.",
                        "Step 3: Plan Your Journey — Go to the FlixBus website or mobile app and enter your departure city, destination, travel dates, and passenger details.",
                        "Step 4: Select Your Trip — Compare the available routes and departure times before choosing the option that suits your schedule.",
                        "Step 5: Apply Your Coupon — During checkout, locate the promo code field and paste your copied FlixBus coupon code. If the offer is valid for your booking, the discount will be reflected in your total.",
                        "Step 6: Complete Your Booking — Finish the payment process and receive your digital ticket by email or within the FlixBus app."
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                            {i + 1}
                          </div>
                          <p className="text-gray-700 font-bold mt-2 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Smart Ways to Save More on FlixBus Bookings</h3>
                    <p>
                      Using a FlixBus discount code is one of the easiest ways to reduce your travel expenses, but there are several other strategies that can help you save even more.
                    </p>
                    <p><strong>Book Early Whenever Possible:</strong> Coach fares are often lower when tickets are purchased well before the departure date. If you already know your travel plans, booking in advance can help secure better prices.</p>
                    <p><strong>Be Flexible with Travel Times:</strong> Travelling during quieter periods or selecting less popular departure times can often result in lower fares.</p>
                    <p><strong>Compare Different Travel Dates:</strong> If your schedule allows, check prices across multiple dates before booking. Even shifting your trip by a day or two may lead to noticeable savings.</p>
                    <p><strong>Travel During Off-Peak Seasons:</strong> Avoiding school holidays, public holidays, and major events can help you access more affordable ticket prices.</p>
                    <p><strong>Visit CouponsBit Before Every Booking:</strong> Travel promotions change regularly. Checking CouponsBit before you pay ensures you don't miss a newly released FlixBus voucher code.</p>
                    <p><strong>Sign Up for Travel Updates:</strong> Subscribing to travel newsletters may give you early access to promotional campaigns and special offers.</p>
                    <p><strong>Use the Mobile App:</strong> Some promotions are available through the FlixBus app, making it worthwhile to compare prices across both desktop and mobile platforms.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Times of the Year to Find FlixBus Deals</h3>
                    <p>
                      Travel discounts are often linked to seasonal campaigns and special events. If you're flexible with your booking dates, you may be able to take advantage of extra savings.
                    </p>
                    <p><strong>Black Friday:</strong> One of the biggest online shopping events of the year, Black Friday often features discounts across travel services, making it a great time to plan future trips.</p>
                    <p><strong>Cyber Monday:</strong> Following Black Friday, Cyber Monday may include online-exclusive travel offers and limited-time promotions.</p>
                    <p><strong>Boxing Day Sales:</strong> Australian travellers frequently look for post-Christmas deals, and travel promotions can be part of the seasonal shopping excitement.</p>
                    <p><strong>End of Financial Year (EOFY):</strong> The EOFY period is another opportunity to watch for special offers on travel bookings and promotional campaigns.</p>
                    <p><strong>Easter and School Holidays:</strong> Demand tends to increase during holiday periods, so booking early and applying a FlixBus coupon code can help reduce costs.</p>
                    <p><strong>Summer Travel:</strong> Many Australians travel during the warmer months. Planning ahead can make a significant difference in the final ticket price.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Travellers Trust CouponsBit</h3>
                    <p>
                      CouponsBit is designed to help online shoppers and travellers save money without spending hours searching for valid promotions.
                    </p>
                    <p>Here's why thousands of users rely on our platform:</p>
                    <p><strong>Frequently Updated Deals:</strong> We continuously monitor available promotions so you can discover the latest opportunities to save.</p>
                    <p><strong>Easy Navigation:</strong> Our website is organised to help you quickly find the offers you're looking for.</p>
                    <p><strong>Free Access:</strong> Browsing coupons and promotions on CouponsBit is completely free.</p>
                    <p><strong>Verified Offers:</strong> We aim to feature active and relevant deals, helping reduce the frustration of expired promotions.</p>
                    <p><strong>Wide Brand Selection:</strong> Along with travel brands like FlixBus, CouponsBit features offers across shopping, fashion, electronics, software, food delivery, lifestyle, and more.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Students Prefer FlixBus</h3>
                    <p>
                      Student life often involves balancing tuition fees, accommodation costs, and everyday expenses. Affordable transportation can make a real difference.
                    </p>
                    <p>FlixBus appeals to students because it offers:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>Budget-friendly fares</li>
                      <li>Convenient online booking</li>
                      <li>Comfortable coaches</li>
                      <li>USB charging ports</li>
                      <li>Wi-Fi on many routes</li>
                      <li>Multiple daily departures</li>
                      <li>Digital tickets</li>
                      <li>Reliable service</li>
                    </ul>
                    <p>
                      Pairing student-friendly fares with a FlixBus discount code makes travelling home during semester breaks or visiting friends even more affordable.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Group Travel Made Simple</h3>
                    <p>
                      Whether you're organising a university trip, family holiday, sporting event, or company outing, travelling together should be straightforward.
                    </p>
                    <p>FlixBus offers practical transport options for groups travelling to destinations across Australia.</p>
                    <p>Group travel is ideal for:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>Family vacations</li>
                      <li>School excursions</li>
                      <li>University events</li>
                      <li>Music festivals</li>
                      <li>Business conferences</li>
                      <li>Sporting competitions</li>
                      <li>Wedding celebrations</li>
                      <li>Social gatherings</li>
                    </ul>
                    <p>
                      Checking CouponsBit for a FlixBus voucher code before booking may help lower the total cost of your group reservation.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Manage Your Journey with the FlixBus App</h3>
                    <p>The FlixBus mobile app provides everything you need to organise your journey in one place.</p>
                    <p>App features include:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>Secure ticket booking</li>
                      <li>Digital boarding passes</li>
                      <li>Trip management</li>
                      <li>Live journey updates</li>
                      <li>Route search</li>
                      <li>Booking history</li>
                      <li>Easy payment options</li>
                      <li>Customer support access</li>
                    </ul>
                    <p>
                      Using the app makes travelling more convenient, especially for passengers who prefer managing bookings on their smartphone.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Book Your Tickets Now</h3>
                    <p>
                      Exploring Australia should be exciting - not expensive. Whether you're travelling for work, study, family visits, or your next adventure, FlixBus provides a practical and cost-effective way to get there. With modern coaches, convenient booking options, and an expanding network of destinations, it's an excellent choice for travellers who value comfort and affordability.
                    </p>
                    <p>
                      Before confirming your next reservation, make CouponsBit part of your booking routine. Checking for the latest FlixBus discount code, FlixBus voucher code, or FlixBus coupon code only takes a moment, but it could help you save on your fare. It's a simple step that lets you enjoy more of Australia while keeping your travel budget under control.
                    </p>
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
                <div className="faq-section mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
                  {[
                    { q: "Where can I find a FlixBus discount code?", a: "You can browse the latest FlixBus promotions on CouponsBit before making your booking." },
                    { q: "How do I apply a FlixBus voucher code?", a: "Simply enter the promotional code in the coupon or promo code field during checkout before completing your payment." },
                    { q: "Does every booking qualify for a discount?", a: "Eligibility depends on the terms of each promotion. Some offers may apply only to selected routes, travel dates, or minimum booking values." },
                    { q: "Can I use a FlixBus coupon code on the mobile app?", a: "Many promotions work across both the website and mobile app, although some offers may have specific conditions." },
                    { q: "Are there discounts for first-time users?", a: "Occasionally, promotional campaigns may target new customers. Check CouponsBit regularly for the latest offers." },
                    { q: "Can I change my booking later?", a: "Booking modifications depend on the fare conditions selected at the time of purchase." },
                    { q: "Does FlixBus offer digital tickets?", a: "Yes. After completing your booking, you'll receive a digital ticket that can be presented during boarding." },
                    { q: "Is Wi-Fi available during the journey?", a: "Many FlixBus services include complimentary onboard Wi-Fi, though availability may vary depending on the coach and route." },
                    { q: "How much luggage can I bring?", a: "Luggage allowances vary by route and booking conditions. It's always a good idea to review the baggage policy before travelling." },
                    { q: "Can families travel with FlixBus?", a: "Yes. Families frequently choose FlixBus because it provides a convenient and affordable way to travel together." },
                    { q: "Does CouponsBit charge for coupon codes?", a: "No. All available deals and coupon codes on CouponsBit can be accessed free of charge." },
                    { q: "How often are new FlixBus offers added?", a: "CouponsBit regularly updates its listings to include the latest available travel promotions whenever they become available." },
                    { q: "Why should I check CouponsBit before booking?", a: "Because even a small saving with a valid FlixBus discount code can help reduce your overall travel expenses, making every trip more affordable." }
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular FlixBus Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Coach Booking", "Sydney to Melbourne", "Brisbane Bus", "FlixBus Deals", "FlixBus Promo Code", "Student Bus Travel", "Long Distance Coach", "FlixBus App"].map(tag => (
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top FlixBus Deals</h3>
                  <div className="space-y-6">
                    {FLIXBUS_COUPONS.slice(0, 5).map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">F</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.topLabel} {deal.mainValue} {deal.offText}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.description}</p>
                        </div>
                        <a href={deal.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Get FlixBus deal: ${deal.title}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
