"use client";

import { useState } from "react";
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
  Copy,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Watch,
  Moon,
  Heart,
  Activity,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { type Coupon, ULTRAHUMAN_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Openart.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/emergent-coupon-code_oeaxoh_aeoxm7.webp", dealText: "Up to 27% OFF", href: "/stores/openart-discount-code" },
  { name: "Talkpal.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288847/talkpal-coupon-code_gozaoz.webp", dealText: "Save Up to 69%", href: "/stores/talkpal-discount-code" },
  { name: "Krisp.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/krisp-logo_ajv3iv.webp", dealText: "Save 50% OFF", href: "/stores/krisp-discount-code" },
  { name: "Sintra", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781776169/sintra-coupon-code_piyu2d.webp", dealText: "Up to 70% OFF", href: "/stores/sintra-discount-code" },
  { name: "Upwork", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130860/upwork-logo_ki4h2l.webp", dealText: "Plans From $15", href: "/stores/upwork-discount-code" },
  { name: "Hostinger", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/hostinger-logo_m9ubvs.webp", dealText: "Up To 80% OFF", href: "/stores/hostinger-discount-code" },
];

const STORE_URL = "https://ultrahumanhealthcare.pxf.io/c/4303217/3114542/38784?subId1=1016b";

export default function UltrahumanCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expandedCoupon, setExpandedCoupon] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setToastCode(code);
    setShowToast(true);
    const coupon = ULTRAHUMAN_COUPONS.find((c) => c.code === code) || null;
    setActiveModalCoupon(coupon);
    setShowModal(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const faqs = [
    {
      q: "Does Ultrahuman offer discount codes?",
      a: "Ultrahuman occasionally runs promotions with promo codes. The best deals appear during launch events and seasonal sales — Couponsbit lists all verified codes.",
    },
    {
      q: "How do I use an Ultrahuman promo code?",
      a: "Add the Ultrahuman Ring AIR to your cart at ultrahuman.com, enter the promo code at checkout, and the discount applies automatically before payment.",
    },
    {
      q: "Does Ultrahuman Ring AIR require a subscription?",
      a: "No. Unlike competitors such as Oura, Ultrahuman charges a one-time hardware fee with no ongoing subscription required for health tracking features.",
    },
    {
      q: "Where does Ultrahuman ship to?",
      a: "Ultrahuman ships to over 50 countries including the USA, India, UAE, Canada, and the United Kingdom. Free shipping is available on selected orders.",
    },
    {
      q: "What is the Ultrahuman Ring AIR battery life?",
      a: "The Ultrahuman Ring AIR offers up to 6 days of battery life depending on usage and ring size, with a full charge taking approximately 60–80 minutes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">

      {/* Copy Modal */}
      {showModal && activeModalCoupon && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 flex flex-col items-center gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#056bfa] flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-2xl italic">U</span>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-2">Your coupon code has been copied!</p>
              <div className="bg-[#f5f5f5] border-2 border-dashed border-[#056bfa] rounded-xl px-6 py-3">
                <span className="text-[#056bfa] font-black text-xl tracking-widest">
                  {activeModalCoupon.code || "NO CODE NEEDED"}
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm text-center">{activeModalCoupon.description}</p>
            <a
              href={STORE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="w-full bg-[#056bfa] hover:bg-[#333333] text-white font-bold py-3.5 px-6 rounded-2xl text-center text-sm transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Continue to Store <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-400 text-sm hover:text-gray-600 transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      <Navbar />

      {/* Toast */}
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
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Ultrahuman</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[55%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/zzlsqavg/image/upload/v1793879483/Ultrahuman_logo.webp"
                        alt="Ultrahuman"
                        width={112}
                        height={112}
                        sizes="112px"
                        className="w-full h-full object-contain"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Ultrahuman Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.9</span>
                      <span className="text-gray-600 font-bold text-sm">(8.1k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest Ultrahuman Discount Code and Ultrahuman Promo Code for November 2026. Enjoy up to 40% OFF the Ultrahuman Ring AIR, 30% OFF selected products, and 20% OFF sitewide wellness deals. You can also get 3 free months of UltrahumanX with eligible purchases. Browse verified Ultrahuman offers to save on smart rings, sleep tracking, recovery monitoring, metabolism insights, and advanced wearable health technology designed to improve your overall wellness.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#333333] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: `${ULTRAHUMAN_COUPONS.length}`, label: "Offers" },
                    { icon: Percent, val: "10+", label: "Deals" },
                    { icon: Users, val: "500K+", label: "Users" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <stat.icon className="w-4 h-4 text-[#056bfa]" />
                      <div>
                        <div className="text-black font-black text-xs leading-none">{stat.val}</div>
                        <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                    <div className="w-full h-full bg-gradient-to-br from-[#056bfa] via-[#222222] to-[#333333] flex items-center justify-center">
                      <Image
                        src="https://res.cloudinary.com/zzlsqavg/image/upload/v1793879483/Ultrahuman_logo.webp"
                        alt="Ultrahuman Discount Code"
                        width={280}
                        height={120}
                        className="max-h-32 w-auto object-contain filter brightness-0 invert"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
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

        {/* Coupons + Sidebar */}
        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Left: Coupons */}
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Ultrahuman Discount Codes &amp; Offers</h2>
                </div>
                {ULTRAHUMAN_COUPONS.map((coupon) => (
                  <div key={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#056bfa] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[10px] sm:tracking-[5px] text-[8px] sm:text-[15px] font-semibold leading-3">{coupon.topLabel}</p>
                            <div className={cn("font-extrabold leading-none mt-2", coupon.valueFontClass || "text-[15px] sm:text-4xl")}>{coupon.mainValue}</div>
                            {coupon.offText && (
                              <p className="text-[8px] sm:text-sm font-bold mt-1 opacity-80">{coupon.offText}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                          <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                            </div>
                            <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">{coupon.title}</h2>
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">{coupon.description}</p>
                            <div className="flex flex-wrap items-center gap-3 mt-2 sm:mt-3 text-xs text-gray-400">
                              <span className="flex items-center gap-1">
                                <Users className="w-3.5 h-3.5" /> {coupon.userType}
                              </span>
                              <span className="flex items-center gap-1">
                                <BadgeCheck className="w-3.5 h-3.5" /> {coupon.verified}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => setExpandedCoupon(expandedCoupon === coupon.id ? null : coupon.id)}
                              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1 focus:outline-none"
                            >
                              View Details
                              <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${expandedCoupon === coupon.id ? "rotate-180" : ""}`}
                              />
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                expandedCoupon === coupon.id
                                  ? "max-h-[250px] opacity-100 mt-3"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {coupon.points.map((point, pi) => (
                                  <li key={pi} className="flex items-start gap-2">
                                    <span className="text-[#056bfa]">•</span>
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6 gap-3">
                            {coupon.code && (
                              <button
                                onClick={() => handleCopy(coupon.code)}
                                className="w-full bg-white border-2 border-dashed border-[#056bfa] text-[#056bfa] font-black text-sm px-4 py-2.5 rounded-xl flex items-center justify-between gap-2 hover:bg-[#f5f5f5] transition-colors"
                              >
                                <span className="font-mono">{coupon.code}</span>
                                <Copy className="w-4 h-4 shrink-0" />
                              </button>
                            )}
                            <a
                              href={STORE_URL}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label={`Get Ultrahuman deal: ${coupon.title}`}
                              className="w-full bg-[#056bfa] hover:bg-[#333333] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
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
                    className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-lg"
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

                {/* What Is Ultrahuman? */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">What Is Ultrahuman?</h3>
                  
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Ultrahuman is a health technology company specialising in wearable devices, metabolic health tracking, and personalised health insights. Its products combine sensor technology, mobile applications, and data analysis to help users understand patterns related to sleep, movement, recovery, and other health metrics.

                  </p>

                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand is particularly recognised for its smart rings, which offer an alternative to traditional fitness watches. Its product ecosystem also includes the M1 continuous glucose monitoring experience and Ultrahuman Home, a device designed to monitor indoor environmental conditions.
                  </p>

                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Ultrahuman focuses on helping users make more informed lifestyle decisions through accessible health-related data. Its products are designed for wellness and tracking purposes and should not replace professional medical advice or diagnosis.
                  </p>
                  <a
                    href={STORE_URL}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2"
                  >
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Top Categories */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Watch, name: "Smart Ring", count: "5+", color: "text-black" },
                      { icon: Moon, name: "Sleep Tracking", count: "5+", color: "text-indigo-500" },
                      { icon: Heart, name: "HRV & Recovery", count: "5+", color: "text-red-500" },
                      { icon: Activity, name: "Activity Monitoring", count: "5+", color: "text-green-600" },
                      { icon: Zap, name: "Metabolic Health", count: "5+", color: "text-amber-500" },
                    ].map((cat, i) => (
                      <Link
                        key={i}
                        href="/categories"
                        className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <cat.icon className={cn("w-4 h-4", cat.color)} />
                          <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">{cat.name}</span>
                        </div>
                        <span className="bg-[#f5f5f5] text-[#056bfa] px-2.5 py-0.5 rounded-full text-[12px] font-black">{cat.count}+ Coupons</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/categories" className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline">
                    View All Categories →
                  </Link>
                </div>

                {/* Popular Categories bullet list */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    What Can You Shop for at Ultrahuman?
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Ultrahuman offers several products and services focused on wearable technology and everyday health tracking.
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>1. Ultrahuman Ring AIR:</strong> The Ring AIR is one of Ultrahuman's best-known products. It is a lightweight smart ring designed to collect health and activity data throughout the day and night.</span>
      </p>
      <p className="text-gray-500 font-medium text-sm leading-relaxed pl-6">
        Its features include:
      </p>
      <div className="pl-6 space-y-2">
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span>Sleep duration and sleep-stage tracking.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span>Heart rate monitoring.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span>Heart rate variability (HRV) tracking.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span>Movement and activity monitoring.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span>Skin temperature tracking.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span>Blood oxygen monitoring during sleep.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span>Recovery-related insights.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span>Women's health and cycle-related tracking features.</span>
        </p>
      </div>
      <p className="text-gray-500 font-medium text-sm leading-relaxed pl-6">
        The ring syncs with the Ultrahuman app, where users can explore their measurements and trends.
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>2. Ultrahuman Ring PRO:</strong> Ultrahuman's Ring PRO expands its smart ring range with additional hardware and battery capabilities.</span>
      </p>
      <p className="text-gray-500 font-medium text-sm leading-relaxed pl-6">
        The product information highlights features related to sleep, activity, recovery, workouts, and women's health. Ultrahuman advertises battery life of up to 15 days for Ring PRO, although actual performance depends on usage and settings.
      </p>
      <p className="text-gray-500 font-medium text-sm leading-relaxed pl-6">
        Customers comparing Ring AIR and Ring PRO should review the current feature comparison and availability in their country before purchasing.
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>3. Ultrahuman M1 Continuous Glucose Monitoring:</strong> The M1 system is designed to help users understand how their glucose levels respond to food, activity, sleep, and everyday routines.</span>
      </p>
      <p className="text-gray-500 font-medium text-sm leading-relaxed pl-6">
        Its experience combines continuous glucose monitoring sensors with the Ultrahuman app to provide metabolic insights.
      </p>
      <p className="text-gray-500 font-medium text-sm leading-relaxed pl-6">
        Depending on the market, customers can explore individual sensor purchases or subscription-style packages. Availability, regulatory requirements, and purchasing conditions vary by country.
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>4. Ultrahuman Home:</strong> Ultrahuman Home is designed to monitor environmental factors inside a living space, including:</span>
      </p>
      <div className="pl-6 space-y-2">
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span>Air quality.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span>Humidity.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span>Temperature.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span>Other environmental conditions that can influence indoor comfort.</span>
        </p>
      </div>
      <p className="text-gray-500 font-medium text-sm leading-relaxed pl-6">
        The product connects environmental information with lifestyle insights to help users understand their surroundings. Ultrahuman lists availability in selected markets, including the US, UK, EU, India, and UAE.
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>5. Ultrahuman App and PowerPlugs:</strong> The Ultrahuman app is an important part of the product experience. It presents information collected by compatible devices and turns measurements into accessible health and lifestyle insights.</span>
      </p>
      <p className="text-gray-500 font-medium text-sm leading-relaxed pl-6">
        Its PowerPlugs provide additional insights and features across different areas. Some PowerPlugs may carry separate charges, while core ring features do not require a recurring subscription.
      </p>
    </div>
  </div>
</div>


              </div>
            </div>
          </div>
        </section>

        {/* More Stores */}
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
                    <img
                      src={store.logo}
                      alt={store.name}
                      width={120}
                      height={48}
                      className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-black font-black text-sm mt-5 mb-1">{store.name}</h3>
                  <p className="text-[#056bfa] font-black text-[12px] uppercase mb-4">{store.dealText}</p>
                  <span className="text-[#056bfa] font-black text-[12px] uppercase hover:underline decoration-2">Visit Store →</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/stores"
              className="inline-flex items-center gap-2 px-9 py-3.5 border-2 border-[#056bfa] text-[#056bfa] bg-white rounded-full font-black hover:bg-[#056bfa] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <LayoutGrid className="w-4 h-4" /> View More Stores
            </Link>
          </div>
        </section>

        {/* Big Content Section */}
        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Ultrahuman Promo Code: Save on Smart Rings & Health Trackers
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
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Ultrahuman Discount Code – Up to 40% Off Ring AIR</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 40% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Includes 2-hour delivery in select cities (11 AM - 7 PM)</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Ultrahuman Ring AIR</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Ultrahuman Discount Code – 30% Off + 3 Free Months UltrahumanX</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">30% OFF + 3 Free Months</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Includes Care and Insurance Plan protection benefits</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eligible Ultrahuman Products</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Ultrahuman Promo Code – 20% Off Sitewide</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">20% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & returning customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Sitewide wellness products and health tracking gear</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sitewide Products</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Ultrahuman Promo Code – Up to 20% Off Ring AIR</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 20% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Advanced sleep, movement and recovery health insights</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Ultrahuman Ring AIR</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Ultrahuman Voucher Code – Flat 46% Off Home Products</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Flat 46% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Limited-time deal on select home essentials and setup upgrades</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Select Home Products</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Ultrahuman Voucher Code – 25% Off Sitewide</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">25% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Premium wellness technology and limited-time deals</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Sitewide Products</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Ultrahuman Coupon Code – 30% Off Ring AIR</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">30% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Lightweight wearable tech for sleep, recovery & activity tracking</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Ultrahuman Ring AIR</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Ultrahuman Coupon Code – 10% Off All Orders</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">10% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Everyday wellness shopping across health products</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">All Orders Sitewide</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Want to understand your sleep patterns, track daily activity, or learn more about your body's recovery? Ultrahuman brings wearable technology and health insights together through products designed to help users understand their everyday habits. Before purchasing, visit CouponsBit to find an Ultrahuman promo code and explore available deals on its smart rings and other health-tracking products.
          </p>
          <p>
            Whether you're considering the Ultrahuman Ring AIR, exploring the newer Ring PRO, or looking into continuous glucose monitoring, compare the available products and check for a suitable discount before ordering.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Find an Ultrahuman Promo Code on CouponsBit
          </h3>
          <p>
            Before purchasing a smart ring or another Ultrahuman product, visit CouponsBit to check available discounts.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Open CouponsBit and visit the Ultrahuman store page.</li>
            <li>Browse the available promo codes and promotional offers.</li>
            <li>Choose an offer that matches your selected product and country.</li>
            <li>Read the offer conditions, including expiry dates and regional restrictions.</li>
            <li>Copy the promo code if the offer requires one.</li>
            <li>Visit the relevant Ultrahuman website for your location.</li>
            <li>Select your preferred product and follow the ordering instructions.</li>
            <li>Continue to checkout and enter the promo code in the designated field.</li>
            <li>Apply the code and confirm that the discount appears in your order summary.</li>
          </ol>
          <p>
            Some offers may be available through affiliate links or automatically applied promotions rather than a manually entered code. Follow the instructions attached to each deal.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Apply an Ultrahuman Promo Code
          </h3>
          <p>
            Using an eligible Ultrahuman discount code is straightforward.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit the Ultrahuman website or app.</li>
            <li>Select the product you want to purchase.</li>
            <li>Check the available product features, colours, and purchase options.</li>
            <li>Add the selected product to your cart.</li>
            <li>Proceed to checkout.</li>
            <li>Locate the promotional code field, if available.</li>
            <li>Enter your copied code and apply it.</li>
            <li>Review the updated order amount, shipping charges, and applicable taxes.</li>
            <li>Complete your purchase.</li>
          </ol>
          <p>
            If a code does not work, check its validity, product eligibility, country restrictions, and any minimum-spend requirements.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Ways to Save More at Ultrahuman
          </h3>
          <p>
            A promo code is one way to make your purchase more affordable. You can also consider these options before placing an order.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Compare Ring AIR and Ring PRO:</strong> Review their features, battery capabilities, and prices to choose a product that meets your requirements.</li>
            <li><strong>Look for regional promotions:</strong> Ultrahuman may advertise different deals through its country-specific websites. Check the correct regional store before ordering.</li>
            <li><strong>Explore UltrahumanX:</strong> Eligible customers in India and the UAE can explore UltrahumanX benefits, which include extended coverage and trade-in-related features under the programme's terms.</li>
            <li><strong>Check bundle options:</strong> If you're considering multiple products or sensors, compare available packages with individual purchases.</li>
            <li><strong>Review payment options:</strong> Depending on your country, payment methods and financing options may differ.</li>
            <li><strong>Check shipping and import charges:</strong> International purchases may involve customs duties, taxes, or other fees. Review the final checkout amount before paying.</li>
          </ul>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Ultrahuman Availability and Shopping Information by Country
          </h3>
          <p>
            Ultrahuman serves different markets through regional entities and country-specific shopping arrangements. CouponsBit shoppers in India, the USA, UAE, Canada, and the UK should check the relevant terms before purchasing.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-[#f0f0f0] shadow-sm">
              <thead>
                <tr className="bg-[#e8f6f8] text-[#056bfa] font-black text-sm uppercase tracking-widest border-b border-[#f0f0f0]">
                  <th className="p-4">Target country</th>
                  <th className="p-4">Important shopping information</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0] text-gray-600 font-bold text-sm">
                <tr>
                  <td className="p-4 text-black">India</td>
                  <td className="p-4">Orders are serviced by Ultrahuman Healthcare Private Limited. Indian shoppers can check INR pricing and available payment options.</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">USA</td>
                  <td className="p-4">Orders are serviced by Ultrahuman's US entity. Check current product availability, particularly for individual ring models.</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">UAE</td>
                  <td className="p-4">Orders are serviced by Ultrahuman Healthcare SP LLC. Eligible customers can also explore UltrahumanX.</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Canada</td>
                  <td className="p-4">Check shipping availability, applicable import charges, and the checkout currency before ordering.</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">UK</td>
                  <td className="p-4">Orders are serviced by Ultrahuman Healthcare Limited. Review UK-specific pricing, shipping, and return conditions.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Ultrahuman's sales terms identify the regional entities responsible for servicing customers in India, the USA, UAE, and UK. Customers in countries not separately listed, including Canada, are generally serviced by its Indian entity under the published terms. However, actual shipping availability must be confirmed at checkout.
          </p>
          <p>
            A note for US shoppers: Ultrahuman's September 2026 buying and availability FAQ stated that Ring AIR was not available for direct purchase in the US at the time of publication. Product availability can change, so confirm the current US catalogue before planning your purchase.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Things to Check Before Buying an Ultrahuman Product
          </h3>
          <p>
            Smart health devices involve more than choosing a design or comparing prices. Consider these factors before ordering.
          </p>
          <p>
            <strong>Choose the right ring size:</strong> Ultrahuman provides a sizing kit with ring orders so customers can confirm their size before receiving the final product. Follow the sizing instructions carefully to avoid fit-related issues.
          </p>
          <p>
            <strong>Check device compatibility:</strong> Confirm that your smartphone supports the Ultrahuman app. The platform supports iOS and Android devices.
          </p>
          <p>
            <strong>Understand the subscription model:</strong> Ultrahuman states that core ring features do not require a recurring subscription. However, selected additional PowerPlugs and other services may involve separate charges.
          </p>
          <p>
            <strong>Review battery expectations:</strong> Ring AIR generally offers around four to six days of battery life, while Ring PRO is advertised for up to 15 days. Actual battery life varies with usage.
          </p>
          <p>
            <strong>Check warranty and returns:</strong> Ultrahuman's published Ring AIR FAQ describes a 30-day return or exchange window, subject to the product's condition and applicable terms. Review the policy for your region before ordering.
          </p>
          <p>
            <strong>Understand health-data limitations:</strong> Wearable measurements are useful for observing trends, but they are not a substitute for clinical testing or medical diagnosis. Consult a qualified healthcare professional for medical concerns.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Explore Ultrahuman Deals and Save with CouponsBit
          </h3>
          <p>
            From smart rings that track sleep and recovery to continuous glucose monitoring and indoor environmental tracking, Ultrahuman offers technology for people interested in understanding their everyday health patterns.
          </p>
          <p>
            Before purchasing, visit CouponsBit to explore the latest Ultrahuman promo codes, smart ring deals, and wearable technology discounts. Whether you're shopping from India, the USA, UAE, Canada, or the UK, check regional availability and offer conditions before applying a discount.
          </p>
          <p>
            Compare the available products, choose the features that suit your requirements, and use an eligible promo code to make your next Ultrahuman purchase more rewarding.
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
            Frequently Asked Questions About Ultrahuman Promo Codes
          </h3>
          {[
            {
              q: "1. Where can I find an Ultrahuman promo code?",
              a: "Visit the Ultrahuman store page on CouponsBit to explore available promo codes, smart ring discounts, and other promotional offers. Check the conditions to confirm that the offer applies to your country and selected product."
            },
            {
              q: "2. Does Ultrahuman require a monthly subscription?",
              a: "No. Ultrahuman states that the core features of its smart rings are available without a recurring subscription. Some additional PowerPlugs and services may have separate charges."
            },
            {
              q: "3. What is the difference between Ultrahuman Ring AIR and Ring PRO?",
              a: "Both are smart rings designed to track everyday health and activity metrics. Ring PRO introduces updated hardware and extended battery capabilities, with Ultrahuman advertising up to 15 days of battery life. Check the official comparison for the latest differences."
            },
            {
              q: "4. Does Ultrahuman track sleep and recovery?",
              a: "Yes. Its smart rings collect information related to sleep, heart rate, HRV, movement, and other measurements. The app uses this information to provide sleep, recovery, and activity-related insights."
            },
            {
              q: "5. Is Ultrahuman available in India?",
              a: "Yes. Ultrahuman operates an India-specific website and supports purchases in INR. Customers can explore its smart rings and other available products through the Indian store."
            },
            {
              q: "6. Can I buy Ultrahuman products in the UAE?",
              a: "Yes. Ultrahuman has a UAE regional entity and offers products through its UAE shopping arrangements. Product availability and promotional benefits depend on the selected product and current terms."
            },
            {
              q: "7. Does Ultrahuman ship to Canada?",
              a: "Ultrahuman's terms state that customers in countries not separately listed are generally serviced by its Indian entity. However, shipping eligibility can depend on the product and destination. Confirm Canada availability through the checkout process before ordering."
            },
            {
              q: "8. Can I return an Ultrahuman Ring AIR?",
              a: "Ultrahuman's published returns FAQ provides a 30-day return or exchange window for Ring AIR, subject to its stated conditions. Contact customer support to initiate the process and confirm the policy applicable to your purchase."
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
            Popular Ultrahuman Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Ultrahuman Promo Code",
              "Ring AIR Discounts",
              "Ring PRO Offers",
              "Continuous Glucose Monitor",
              "No Subscription Smart Ring",
              "UltrahumanX Coverage",
              "Free Sizing Kit",
              "Sleep & Recovery Tracker"
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
            Today's Top Ultrahuman Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "RING AIR PROMOTIONS",
                sub: "Save on lightweight smart rings for sleep & recovery",
              },
              {
                heading: "NO SUBSCRIPTION REQUIRED",
                sub: "Access core ring insights without monthly fees",
              },
              {
                heading: "ULTRAHUMANX BENEFIT",
                sub: "Extended coverage & trade-in perks in IN & UAE",
              },
              {
                heading: "FREE SIZING KIT",
                sub: "Get a free sizing kit sent prior to ring shipment",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  U
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
                  href={STORE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Ultrahuman: ${deal.heading}`}
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
