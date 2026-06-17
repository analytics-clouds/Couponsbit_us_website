"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Search,
  ArrowLeft,
  ArrowRight,
  Clock,
  X,
  ExternalLink,
  Flame,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Shirt,
  Laptop,
  ShoppingBag,
  Sparkles,
  Plane,
  Utensils,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Deal {
  id: string; store: string; title: string; description: string;
  code: string; discount: string; expires: string; usedToday: number;
  category: string; gradient: string; initial: string; emoji: string;
}

const slides = [
  { id: 1, image: "https://res.cloudinary.com/couponsbit/image/upload/v1781610276/driffle-online-deals_bn9tix.webp",        alt: "Driffle Deals" },
  { id: 2, image: "https://res.cloudinary.com/couponsbit/image/upload/v1781610276/lyca-mobile-online-deals_gda53i.webp",    alt: "Lyca Mobile Deals" },
  { id: 3, image: "https://res.cloudinary.com/couponsbit/image/upload/v1781610276/latam-airlines-online-deals_zujyop.webp", alt: "LATAM Airlines Deals" },
  { id: 4, image: "https://res.cloudinary.com/couponsbit/image/upload/v1781610276/bluehost-online-deals_fejbsz.webp",       alt: "Bluehost Deals" },
  { id: 5, image: "https://res.cloudinary.com/couponsbit/image/upload/v1781610276/sintra-online-deals_fglfxk.webp",         alt: "Sintra Deals" },
];

const mobileSlides = [
  { id: 1, image: "https://res.cloudinary.com/couponsbit/image/upload/v1781609368/driffle-online-deals-mobile_zi2m9t.webp",        alt: "Driffle Deals" },
  { id: 2, image: "https://res.cloudinary.com/couponsbit/image/upload/v1781609368/lyca-mobile-voucher-code_yptivs.webp",    alt: "Lyca Mobile Deals" },
  { id: 3, image: "https://res.cloudinary.com/couponsbit/image/upload/v1781609369/latam-airlines-online-deals-mobile_v7ibke.webp", alt: "LATAM Airlines Deals" },
  { id: 4, image: "https://res.cloudinary.com/couponsbit/image/upload/v1781609369/bluehost-online-deals-mobile_aicetp.webp",       alt: "Bluehost Deals" },
  { id: 5, image: "https://res.cloudinary.com/couponsbit/image/upload/v1781609369/sintra-online-deals-mobile_lm67mf.webp",         alt: "Sintra Deals" },
];

const DealModal = ({ deal, isOpen, onClose }: { deal: Deal | null, isOpen: boolean, onClose: () => void }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => { if (!deal) return; navigator.clipboard.writeText(deal.code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  const handleShopNow = () => window.open("https://www.google.com", "_blank");
  if (!isOpen || !deal) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="relative bg-white w-full max-w-[480px] rounded-[40px] shadow-2xl overflow-visible z-10">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-black z-20"><X className="w-6 h-6" /></button>
        <div className="flex flex-col items-center pt-0">
          <div className="w-24 h-24 bg-[#e8f6f8] rounded-3xl shadow-xl flex items-center justify-center text-4xl font-black text-[#056bfa] -mt-12 mb-4 border-4 border-white">{deal.initial}</div>
          <div className="px-4 py-1.5 bg-[#22c55e] text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-md mb-6">Verified Deal</div>
        </div>
        <div className="px-8 pb-10">
          <div className="text-center mb-8">
            <p className="text-[#056bfa] font-bold text-sm uppercase tracking-wider mb-2">{deal.store}</p>
            <h2 className="text-2xl font-black text-black leading-tight mb-3">{deal.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed">{deal.description}</p>
          </div>
          <div className="w-full h-px bg-gray-100 mb-8" />
          <div className="mb-8">
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] text-center mb-4">Your Coupon Code</p>
            <div onClick={copyToClipboard} className="bg-[#e8f6f8] border-2 border-dashed border-[#056bfa] rounded-[32px] p-6 text-center cursor-pointer group hover:bg-[#056bfa] transition-all duration-300">
              <p className={cn("text-3xl font-black font-mono transition-colors", copied ? "text-white" : "text-[#056bfa] group-hover:text-white")}>{deal.code}</p>
              <p className={cn("text-xs font-bold mt-2 flex items-center justify-center gap-2", copied ? "text-white/80" : "text-gray-400 group-hover:text-white/80")}>
                {copied ? <><Check className="w-4 h-4" /> Copied!</> : "Click to Copy"}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[{ label: "Discount", value: deal.discount }, { label: "Expires", value: `${deal.expires} Days` }, { label: "Used", value: deal.usedToday }].map((stat) => (
              <div key={stat.label} className="bg-gray-50 p-3 rounded-2xl text-center">
                <p className="text-black font-bold text-sm">{stat.value}</p>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <Button onClick={handleShopNow} className="w-full bg-[#056bfa] hover:bg-[#0451c4] text-white rounded-[24px] h-16 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            View Deal on Store <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-center text-gray-400 text-[11px] font-bold mt-6">You will be redirected to the store's official website</p>
          <button onClick={onClose} className="w-full text-center text-[#056bfa] font-bold text-sm mt-4 hover:underline">← Back to Deals</button>
        </div>
      </motion.div>
    </div>
  );
};

export default function DealsOfTheWeekContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedDeal] = useState<Deal | null>(null);
  const [isModalOpen] = useState(false);
  const [isSeoExpanded, setIsSeoExpanded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Section 1: Hero Slider (Desktop) */}
      <div className="relative w-full overflow-hidden hidden md:block" style={{ aspectRatio: "1920/400" }}>
        {slides.map((slide, index) => (
          <motion.div key={slide.id} initial={{ opacity: 0 }} animate={{ opacity: currentSlide === index ? 1 : 0 }} transition={{ duration: 0.8 }} className={cn("absolute inset-0 w-full h-full", currentSlide === index ? "z-10" : "z-0")}>
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
          </motion.div>
        ))}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all"><ArrowLeft className="w-5 h-5 text-white" /></button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all"><ArrowRight className="w-5 h-5 text-white" /></button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (<button key={i} onClick={() => setCurrentSlide(i)} className={cn("h-2 rounded-full transition-all duration-300", currentSlide === i ? "w-6 bg-white" : "w-2 bg-white/50")} />))}
        </div>
      </div>

      {/* Section 1: Hero Slider (Mobile) */}
      <div className="relative w-full overflow-hidden md:hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={mobileSlides[currentSlide].id}
            src={mobileSlides[currentSlide].image}
            alt={mobileSlides[currentSlide].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-auto block"
          />
        </AnimatePresence>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all"><ArrowLeft className="w-5 h-5 text-white" /></button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all"><ArrowRight className="w-5 h-5 text-white" /></button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {mobileSlides.map((_, i) => (<button key={i} onClick={() => setCurrentSlide(i)} className={cn("h-2 rounded-full transition-all duration-300", currentSlide === i ? "w-6 bg-white" : "w-2 bg-white/50")} />))}
        </div>
      </div>

      {/* Section 2: Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#056bfa] font-medium hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-black font-extrabold">Deals of the Week</span>
          </nav>
        </div>
      </div>

      {/* ── 5 Store Coupon Sections ── */}
      <div className="container mx-auto px-4 max-w-6xl py-12 space-y-16">

        {/* ════ BLUEHOST — Horizontal card with left gradient block ════ */}
        <section>
          <div className="flex items-center gap-5 mb-10">
            <div className="shrink-0">
              <p className="text-[11px] font-black uppercase tracking-[3px] text-[#056bfa] mb-0.5">Exclusive Coupons</p>
              <h2 className="text-3xl font-black text-black">Bluehost Coupons</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#056bfa]/30 to-transparent" />
            <Link href="/stores/bluehost-coupon-code" className="shrink-0 text-[#056bfa] font-black text-sm border border-[#056bfa] rounded-full px-5 py-2 hover:bg-[#056bfa] hover:text-white transition-all duration-200">View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: "FROM",   discount: "$1.99", cat: "WordPress Hosting", title: "WordPress Hosting – Starting At $1.99/Month",   desc: "Build your WordPress website faster with AI-powered tools and secure hosting." },
              { label: "UP TO", discount: "50%",   cat: "Hosting Plans",     title: "UP TO 50% OFF – Hosting Plan Savings",           desc: "Save big on secure and reliable Bluehost hosting subscriptions." },
              { label: "FLAT",  discount: "33%",   cat: "VPS Hosting",       title: "33% OFF – VPS Hosting Plans",                    desc: "Upgrade your website performance with discounted VPS hosting." },
              { label: "FROM",  discount: "$15.99", cat: "Online Store Plan",  title: "Online Store Plan – Starting At $15.99/Month",   desc: "Launch your online store with built-in eCommerce tools and Bluehost's secure hosting." },
            ].map((c, i) => (
              <div key={i} className="flex bg-white border border-gray-100 rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-[130px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex flex-col items-center justify-center text-white shrink-0 p-4 text-center relative">
                  <div className="absolute -right-3 top-8 w-6 h-6 bg-white rounded-full" />
                  <div className="absolute -right-3 bottom-8 w-6 h-6 bg-white rounded-full" />
                  <p className="text-[11px] font-bold tracking-[2px] uppercase opacity-80">{c.label}</p>
                  <p className="font-black tracking-tighter mt-1" style={{ fontSize: c.discount.length > 3 ? "2.2rem" : "3rem" }}>{c.discount}</p>
                  {!c.discount.startsWith("$") && <p className="text-[12px] font-bold mt-1 uppercase opacity-80">OFF</p>}
                </div>
                <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex gap-1.5 mb-2">
                      <span className="bg-red-50 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Limited Time</span>
                      <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Verified</span>
                    </div>
                    <p className="text-[#056bfa] text-[11px] font-black uppercase tracking-widest mb-1">{c.cat}</p>
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug mb-1.5 line-clamp-2">{c.title}</h3>
                    <p className="text-gray-400 text-[13px] leading-snug line-clamp-2">{c.desc}</p>
                  </div>
                  <Link href="/stores/bluehost-coupon-code"><button className="mt-3 w-full bg-[#056bfa] hover:bg-[#0451c4] text-white text-sm font-bold py-2.5 rounded-xl transition-all">Get Deal</button></Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════ DRIFFLE — Left-accent border card design ════ */}
        <section>
          <div className="flex items-center gap-5 mb-10">
            <div className="shrink-0">
              <p className="text-[11px] font-black uppercase tracking-[3px] text-[#056bfa] mb-0.5">Exclusive Coupons</p>
              <h2 className="text-3xl font-black text-black">Driffle Coupons</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#056bfa]/30 to-transparent" />
            <Link href="/stores/driffle-coupon-code" className="shrink-0 text-[#056bfa] font-black text-sm border border-[#056bfa] rounded-full px-5 py-2 hover:bg-[#056bfa] hover:text-white transition-all duration-200">View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { badge: "UP TO", discount: "94%", title: "UP TO 94% OFF – Neverwinter Nights Enhanced Edition", desc: "Grab exciting savings on selected PC games & digital keys.",        tag: "Best Offer" },
              { badge: "UP TO", discount: "95%", title: "UP TO 95% OFF – XCOM 2",                              desc: "Enjoy huge discounts on top-rated strategy games.",                  tag: "Popular" },
              { badge: "UP TO", discount: "81%", title: "UP TO 81% OFF – EA SPORTS FC 26",                     desc: "Score massive savings on the latest football gaming experience.",    tag: "Trending" },
            ].map((c, i) => (
              <div key={i} className="bg-white border-y border-r border-l-4 border-gray-100 border-l-[#056bfa] rounded-r-[24px] rounded-l-sm p-6 flex flex-col justify-between min-h-[300px] hover:border-y-[#056bfa] hover:border-r-[#056bfa] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#056bfa] text-[10px] font-black tracking-widest uppercase bg-[#e8f6f8] px-2.5 py-1 rounded-md">{c.badge}</span>
                  <span className="text-[9px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full uppercase">Limited Time</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline text-[#056bfa] mb-2">
                    <span className="text-5xl font-black tracking-tighter">{c.discount}</span>
                    <span className="text-lg font-extrabold ml-1 uppercase">OFF</span>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 leading-snug mb-2">{c.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-[#056bfa] uppercase tracking-wide">{c.tag}</span>
                  <Link href="/stores/driffle-coupon-code"><button className="bg-[#056bfa] hover:bg-[#0451c4] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all">Get Deal</button></Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════ LATAM AIRLINES — Horizontal scroll cards with badge ════ */}
        <section>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-2xl">✈️</span>
              <span className="text-2xl">🎫</span>
              <h2 className="text-xl sm:text-2xl font-black text-black">LATAM Airlines Coupons & Offers</h2>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-xs sm:text-sm">Exclusive flight deals & travel savings — book now</p>
              <Link href="/stores/latam-airlines-coupon-code" className="text-[#056bfa] font-black text-sm border border-[#056bfa] rounded-full px-5 py-2 hover:bg-[#056bfa] hover:text-white transition-all duration-200 ml-4">View All →</Link>
            </div>
          </div>
          <div className="overflow-x-auto pb-4 flex gap-5 snap-x snap-mandatory">
            {[
              { type: "Bonus Miles",   title: "LATAM Credit Card – Earn 40,000 Bonus Miles",           tags: ["LATAM Card", "International"], info: "ON APPROVED APPLICATIONS" },
              { type: "Economy",       title: "Flights from New York to Santiago – Starting At $308",   tags: ["New York", "Santiago"],        info: "STARTING FROM $308" },
              { type: "Packages",      title: "Up to 40% OFF on Packages, Hotels & Car Rentals",        tags: ["Hotels", "Car Rentals"],       info: "SELECTED BOOKINGS ONLY" },
              { type: "South America", title: "Miami To Rio De Janeiro – Starting At USD 554",           tags: ["Miami", "Rio de Janeiro"],     info: "STARTING FROM $554" },
            ].map((c, i) => (
              <div key={i} className="w-[240px] shrink-0 bg-white border border-gray-100 rounded-[28px] p-5 shadow-sm flex flex-col justify-between h-[300px] snap-start hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="bg-[#056bfa] text-white text-[11px] font-black px-3 py-1.5 rounded-xl uppercase tracking-wider">LATAM</span>
                  <span className="bg-[#e8f6f8] text-[#056bfa] text-[10px] font-bold px-2.5 py-1 rounded-lg">{c.type}</span>
                </div>
                <div className="my-auto pt-4 pb-2">
                  <h3 className="text-[15px] font-black text-gray-900 leading-snug">{c.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {c.tags.map((tag) => (<span key={tag} className="bg-gray-100 text-gray-500 text-[11px] font-semibold px-3 py-1 rounded-full">{tag}</span>))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] font-black tracking-wider uppercase mb-4">{c.info}</p>
                  <Link href="/stores/latam-airlines-coupon-code"><button className="w-full bg-[#056bfa] hover:bg-[#0451c4] text-white font-extrabold text-sm py-3.5 rounded-2xl transition-colors">View Offer</button></Link>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-100 h-1 rounded-full mt-3 hidden sm:block">
            <div className="bg-[#056bfa] w-1/4 h-full rounded-full" />
          </div>
        </section>

        {/* ════ LYCA MOBILE — Badge-card vertical design ════ */}
        <section>
          <div className="flex items-center gap-5 mb-10">
            <div className="shrink-0">
              <p className="text-[11px] font-black uppercase tracking-[3px] text-[#056bfa] mb-0.5">Exclusive Coupons</p>
              <h2 className="text-3xl font-black text-black">Lyca Mobile Coupons</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#056bfa]/30 to-transparent" />
            <Link href="/stores/lyca-mobile-coupon-code" className="shrink-0 text-[#056bfa] font-black text-sm border border-[#056bfa] rounded-full px-5 py-2 hover:bg-[#056bfa] hover:text-white transition-all duration-200">View All →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { badge: "SAVE UP TO", discount: "69%",   label: "OFF",  type: "Prepaid Plans",  title: "Summer Starts Now – Affordable Prepaid Plans",  info: "Limited Time Offer" },
              { badge: "UP TO",      discount: "60%",   label: "OFF",  type: "Selected Plans", title: "UP TO 60% OFF – Selected Lyca Mobile Plans",    info: "Best Seller" },
              { badge: "PROMO",      discount: "$7.50", label: "/30d", type: "18GB Plan",      title: "Better Signal Summer Offer – 18GB Plan",        info: "Summer Offer" },
            ].map((c, i) => (
              <div key={i} className="bg-white border border-[#f0f0f0] rounded-[28px] p-6 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-5">
                  <span className="bg-[#056bfa] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wide">LYCA</span>
                  <span className="bg-[#f5f5f5] text-gray-500 text-[10px] font-bold px-3 py-1.5 rounded-full">{c.type}</span>
                </div>
                <h3 className="text-[#056bfa] font-black text-4xl leading-none mb-1">{c.discount}</h3>
                <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-3">{c.badge}{c.label ? ` ${c.label}` : ""}</p>
                <p className="text-black font-extrabold text-sm leading-snug mb-4 flex-1">{c.title}</p>
                <p className="text-[9px] font-black uppercase tracking-[3px] text-gray-300 mb-4">{c.info}</p>
                <Link href="/stores/lyca-mobile-coupon-code"><button className="w-full bg-[#056bfa] hover:bg-[#0451c4] text-white font-bold text-sm py-3 rounded-xl transition-all">View Offer</button></Link>
              </div>
            ))}
          </div>
        </section>

        {/* ════ SINTRA — Ticket/voucher design ════ */}
        <section>
          <div className="flex items-center gap-5 mb-10">
            <div className="shrink-0">
              <p className="text-[11px] font-black uppercase tracking-[3px] text-[#056bfa] mb-0.5">Exclusive Coupons</p>
              <h2 className="text-3xl font-black text-black">Sintra Coupons</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#056bfa]/30 to-transparent" />
            <Link href="/stores/sintra-coupon-code" className="shrink-0 text-[#056bfa] font-black text-sm border border-[#056bfa] rounded-full px-5 py-2 hover:bg-[#056bfa] hover:text-white transition-all duration-200">View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "FROM", discount: "$15.60", title: "Sintra AI Plans – Starting From $15.60/Month", desc: "Choose the perfect Sintra AI plan with powerful AI helpers and premium features.", badge: "Best Value" },
              { label: "SAVE", discount: "50%",    title: "Sintra 1-Month Plan – Save 50%",               desc: "Get started with flexible monthly access at discounted pricing.",                 badge: "Popular" },
              { label: "SAVE", discount: "70%",    title: "Sintra 12-Month Plan – Save 70%",              desc: "Unlock maximum savings with Sintra AI's most popular annual plan.",               badge: "Trending" },
            ].map((c, i) => (
              <div key={i} className="relative bg-white rounded-[20px] overflow-visible shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" style={{ filter: "drop-shadow(0 4px 16px rgba(25,121,141,0.10))" }}>
                <div className="relative rounded-t-[20px] bg-[#056bfa] px-6 pt-7 pb-8 text-center overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 flex justify-around px-4 pt-2">
                    {Array.from({ length: 12 }).map((_, k) => <span key={k} className="w-1 h-1 rounded-full bg-white/20 block" />)}
                  </div>
                  <p className="text-white/60 text-[9px] font-black uppercase tracking-[4px] mb-1">{c.label}</p>
                  <p className="text-white font-black leading-none" style={{ fontSize: c.discount.length > 3 ? "3.5rem" : "4.5rem" }}>{c.discount}</p>
                  <span className="absolute top-4 right-4 text-[8px] font-black uppercase bg-white text-[#056bfa] px-2.5 py-1 rounded-full">{c.badge}</span>
                  <div className="absolute -bottom-3 left-0 right-0 flex items-center">
                    <div className="w-6 h-6 rounded-full bg-white -translate-x-1/2 shrink-0" />
                    <div className="flex-1 border-t-2 border-dashed border-white/20 mx-1" />
                    <div className="w-6 h-6 rounded-full bg-white translate-x-1/2 shrink-0" />
                  </div>
                </div>
                <div className="rounded-b-[20px] bg-white px-6 pt-7 pb-6">
                  <div className="flex gap-2 mb-4">
                    <span className="flex items-center gap-1 text-[9px] font-bold uppercase bg-red-50 text-red-500 px-2.5 py-1 rounded-full"><Clock className="w-2.5 h-2.5" />Limited Time</span>
                    <span className="flex items-center gap-1 text-[9px] font-bold uppercase bg-[#e8f6f8] text-[#056bfa] px-2.5 py-1 rounded-full"><CheckCircle className="w-2.5 h-2.5" />Verified</span>
                  </div>
                  <h3 className="text-black font-extrabold text-[14px] leading-snug mb-2">{c.title}</h3>
                  <p className="text-gray-400 text-[12px] leading-relaxed mb-5">{c.desc}</p>
                  <Link href="/stores/sintra-coupon-code"><button className="w-full bg-[#056bfa] hover:bg-[#0451c4] text-white font-bold text-sm py-3 rounded-xl transition-all">Get Coupon →</button></Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Section 11: SEO Content Section */}
      <section className="bg-white py-24 border-t border-[#f0f0f0]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col lg:flex-row gap-16">
      <div className="lg:w-3/5">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-4xl font-black text-black mb-8 leading-tight">Deal of the Week: This Week's Best Deals, Discounts & Savings</h2>
          <div className="space-y-6">
            <h3 className="text-[#056bfa] font-black text-2xl mb-2">Discover This Week's Biggest Savings</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium mb-4">Welcome to Couponsbit's Deal of the Week page, where we showcase the best online deals, highest-value discounts, and most popular promotions available this week.</p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium mb-4">Every week brings new shopping opportunities, seasonal sales, and exclusive offers from leading brands. To help shoppers save time and money, we carefully select the most rewarding deals across multiple categories.</p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">Whether you're shopping for fashion, electronics, beauty products, travel bookings, software subscriptions, or home essentials, our weekly deals help you maximize savings.</p>
          </div>

          <div className={cn("overflow-hidden transition-all duration-1000 ease-in-out", isSeoExpanded ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100")}>
            <div className="pt-8 space-y-6">
              <h3 className="text-[#056bfa] font-black text-2xl mb-4">Why Explore Our Weekly Deals?</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">Not every promotion is worth your attention. That's why Couponsbit highlights only the most valuable deals based on popularity, savings potential, and overall shopper value.</p>
              <div className="space-y-4 mb-8">
                {["Find the biggest savings opportunities", "Access top-rated deals from trusted brands", "Discover seasonal promotions", "Compare popular offers in one place", "Save money on planned purchases", "Shop smarter throughout the week"].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 py-2 border-b border-[#f0f0f0] last:border-0">
                    <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
                    <p className="text-gray-700 text-lg font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <h3 className="text-[#056bfa] font-black text-2xl mb-6">Featured Weekly Deal Categories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Shirt,       title: "Fashion & Lifestyle Deals",          desc: "Explore discounts on apparel, footwear, accessories, luxury brands, and everyday fashion essentials.", bg: "bg-pink-50 text-pink-600" },
                  { icon: Laptop,      title: "Electronics & Tech Savings",         desc: "Shop deals on laptops, smartphones, gaming products, smart home devices, and technology accessories.", bg: "bg-blue-50 text-blue-600" },
                  { icon: Sparkles,    title: "Beauty & Wellness Offers",           desc: "Find savings on skincare, makeup, personal care products, and wellness subscriptions.", bg: "bg-purple-50 text-purple-600" },
                  { icon: ShoppingBag, title: "Home & Kitchen Deals",               desc: "Upgrade your living space with discounts on furniture, home decor, appliances, and kitchen essentials.", bg: "bg-amber-50 text-amber-600" },
                  { icon: Plane,       title: "Travel Promotions",                  desc: "Save on hotels, vacation packages, flights, rental cars, and travel experiences.", bg: "bg-teal-50 text-teal-600" },
                  { icon: Utensils,    title: "Software & Subscription Discounts",  desc: "Discover offers on streaming services, productivity tools, online learning platforms, and digital subscriptions.", bg: "bg-red-50 text-red-600" },
                ].map((item, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-[#056bfa]/20 transition-all duration-300 group flex gap-4 items-start bg-white">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", item.bg.split(" ")[0])}>
                      <item.icon className={cn("w-5 h-5", item.bg.split(" ")[1])} />
                    </div>
                    <div>
                      <h4 className="text-black font-extrabold text-sm mb-1 group-hover:text-[#056bfa] transition-colors">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-12 space-y-6">
              <h3 className="text-[#056bfa] font-black text-2xl mb-4">Seasonal Shopping Opportunities</h3>
              <div className="flex flex-wrap gap-3">
                {["Black Friday sales", "Cyber Monday promotions", "Back-to-school savings", "Holiday shopping events", "Summer sales", "Memorial Day deals", "Labor Day discounts", "Fourth of July promotions"].map((tag) => (
                  <span key={tag} className="bg-gray-50 text-gray-700 border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-sm">{tag}</span>
                ))}
              </div>
            </div>

            <div className="pt-12 space-y-8">
              <div>
                <h3 className="text-[#056bfa] font-black text-2xl mb-4">Why Shoppers Trust Couponsbit</h3>
                <p className="text-gray-600 leading-relaxed text-lg">At Couponsbit, we focus on helping users find real savings through verified promo codes, exclusive offers, and carefully selected deals.</p>
              </div>
              <div>
                <h3 className="text-[#056bfa] font-black text-2xl mb-4">Make This Week More Rewarding</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">Don't miss out on this week's best savings opportunities. Browse featured monthly deals, unlock exclusive discounts, and discover smarter ways to save.</p>
                <p className="text-gray-600 leading-relaxed text-lg font-medium">Start exploring this week's top deals today and make every purchase count.</p>
              </div>
            </div>
          </div>

          <button onClick={() => setIsSeoExpanded(!isSeoExpanded)} className="flex justify-center w-full lg:hidden mt-8">
            <div className="flex items-center gap-3 px-8 py-3 bg-[#e8f6f8] text-[#056bfa] font-black rounded-full border border-[#056bfa] shadow-sm hover:bg-[#056bfa] hover:text-white transition-all">
              {isSeoExpanded ? <>Read Less <ChevronUp className="w-5 h-5" /></> : <>Read More <ChevronDown className="w-5 h-5" /></>}
            </div>
          </button>
        </div>
      </div>

      <div className="lg:w-2/5">
        <aside className="sticky top-24 space-y-8">
          <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8"><Search className="w-6 h-6 text-[#056bfa]" /><h3 className="text-black font-black text-xl">Popular Searches</h3></div>
            <div className="flex flex-wrap gap-2.5">
              {["This Week's Amazon Deal", "Flipkart Weekly Sale", "Weekly Cashback", "Featured Mega Deals", "Top Fashion Coupons", "Electronics This Week", "Weekly Travel Offers", "Best Software Deals", "Bank Cards Offers", "Brand Discount Codes"].map((pill) => (
                <button key={pill} className="bg-[#e8f6f8] text-[#056bfa] rounded-full text-xs font-black px-5 py-2.5 hover:bg-[#056bfa] hover:text-white transition-all duration-300 shadow-sm">{pill}</button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8"><Flame className="w-6 h-6 text-orange-500 fill-orange-500" /><h3 className="text-black font-black text-xl">This Week's Top Picks</h3></div>
            <div className="space-y-6">
              {[
                { store: "Bluehost",       deal: "WordPress Hosting From $1.99/mo" },
                { store: "Driffle",        deal: "Up to 95% OFF on Game Keys" },
                { store: "LATAM Airlines", deal: "Flights from NYC – From $308" },
                { store: "Lyca Mobile",    deal: "Save up to 69% OFF Plans" },
                { store: "Sintra",         deal: "AI Plans – Save up to 70%" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between group py-3 border-b border-[#f0f0f0] last:border-0 hover:bg-gray-50/50 rounded-xl transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#056bfa] group-hover:scale-150 transition-transform" />
                    <div>
                      <p className="text-sm font-black text-black leading-tight">{item.store}</p>
                      <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">{item.deal}</p>
                    </div>
                  </div>
                  <button className="text-[11px] font-black text-[#056bfa] hover:underline uppercase tracking-tighter bg-[#e8f6f8] px-3 py-1.5 rounded-lg">GET</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 shadow-sm">
            <h3 className="text-black font-black text-xl mb-8">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {[
                { q: "What are Deals of the Week on Couponsbit?", a: "Deals of the Week are our curated selection of high-value discounts, seasonal sales, and trending promotions valid throughout the current week." },
                { q: "Are these monthly deals verified?", a: "Yes! All featured coupons, promotions, and deals are manually checked and verified by our dedicated team to ensure quality and accuracy." },
                { q: "How often is the content updated?", a: "While these main offers stay relevant across the week, specific brand coupons, flash sales, and seasonal discount opportunities are regularly refreshed." },
                { q: "Can I combine these deals with bank offers?", a: "Absolutely! You can stack these verified weekly discounts with available credit or debit card offers on partner stores." }
              ].map((faq, i) => (
                <div key={i} className="border-b border-[#f0f0f0] last:border-0 pb-4 last:pb-0">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex items-center justify-between w-full text-left py-2 group">
                    <span className="text-base font-black text-black group-hover:text-[#056bfa] transition-colors pr-6 leading-tight">{faq.q}</span>
                    <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform shrink-0", openFaq === i && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-sm text-gray-500 mt-4 leading-relaxed font-medium">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</section>

      <Footer />

      <AnimatePresence>
        {isModalOpen && <DealModal isOpen={isModalOpen} deal={selectedDeal} onClose={() => {}} />}
      </AnimatePresence>
    </div>
  );
}
