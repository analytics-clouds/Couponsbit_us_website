"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingBag,
  Ticket,
  Users,
  BadgeCheck,
  Store,
  Tag,
  BadgeCheck as BadgeCheckIcon,
  Clock,
  LayoutGrid,
  Flame,
  Zap,
  ArrowRight,
  CheckCircle,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  MessageCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    { id: 1, image: "/driffle-discount-code.webp",      alt: "Driffle Discount Code – Up to 95% OFF on Digital Games and Steam Keys" },
    { id: 2, image: "/latam-airlines-promo-code.webp",  alt: "LATAM Airlines Promo Code – Save on Flights, Hotels and Vacation Packages" },
    { id: 3, image: "/envato-elements-promo-code.webp", alt: "Envato Elements Promo Code – Unlimited Creative Assets from $16.50 per Month" },
    { id: 4, image: "/lyca-mobile-promo-code.webp",     alt: "Lyca Mobile Promo Code – Affordable Prepaid SIM and Data Plans" },
    { id: 5, image: "/rayneo-promo-code.webp",          alt: "Rayneo Promo Code – Save on AR Smart Glasses and XR Devices" },
    { id: 6, image: "/reolink-voucher-code.webp",       alt: "Reolink Voucher Code – Deals on Smart Security Cameras and Surveillance Systems" },
    { id: 7, image: "/sintra-discount-code.webp",       alt: "Sintra Discount Code – AI Automation Plans with up to 70% Savings" },
    { id: 8, image: "/stubhub-voucher-code.webp",       alt: "StubHub Voucher Code – Verified Deals on Event, Concert and Sports Tickets" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-white py-4 mt-24">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="relative overflow-hidden group">
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#e8f6f8] transition-all duration-300 active:scale-90"
          >
            <ChevronLeft className="w-5 h-5 text-[#19798d]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#e8f6f8] transition-all duration-300 active:scale-90"
          >
            <ChevronRight className="w-5 h-5 text-[#19798d]" />
          </button>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)` }}
          >
            {[...slides, ...slides.slice(0, 2)].map((slide, idx) => (
              <div
                key={`${slide.id}-${idx}`}
                className={cn("shrink-0 px-2", isMobile ? "w-full" : "w-1/3")}
              >
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                currentIndex === i ? "w-6 bg-[#19798d]" : "w-2 bg-[#e0e0e0]"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TOP_BRANDS = [
  { name: "StubHub",         logo: "/stubhub-coupon-code.webp",        discount: "Flat 10% OFF",    href: "/stores/stubhub" },
  { name: "Viagogo",         logo: "/viagogo-coupon-code.webp",         discount: "Starting at $332", href: "/stores/viagogo" },
  { name: "LATAM Airlines",  logo: "/latam-airlines-coupon-code.webp",  discount: "Up to 40% OFF",   href: "/stores/latam-airlines" },
  { name: "Rayneo",          logo: "/reyneo-coupon-code.webp",          discount: "Save $130 OFF",   href: "/stores/rayneo" },
  { name: "Driffle",         logo: "/driffle-coupon-code.webp",         discount: "Up to 95% OFF",   href: "/stores/driffle" },
  { name: "Lyca Mobile",     logo: "/lyca-mobile-coupon-code.webp",     discount: "Up to 69% OFF",   href: "/stores/lyca-mobile" },
  { name: "Bluehost",        logo: "/bluehost-coupon-code.webp",        discount: "Up to 69% OFF",   href: "/stores/bluehost" },
  { name: "Reolink",         logo: "/Reolink-coupon-code.webp",         discount: "Up to 50% OFF",   href: "/stores/reolink" },
  { name: "Envato Elements", logo: "/envato-coupon-code.webp",          discount: "Up to 50% OFF",   href: "/stores/envato-elements" },
  { name: "Sintra",          logo: "/sintra-coupon-code.webp",          discount: "Up to 70% OFF",   href: "/stores/sintra" },
];

const TopBrands = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) =>
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-7xl mb-7 flex justify-between items-center">
        <h2 className="text-black font-extrabold text-2xl flex items-center gap-2">
           Top Brands
        </h2>
        <Link href="/stores" className="text-[#19798d] font-bold text-sm hover:underline flex items-center gap-1 group">
          View All Stores <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        <button
          onClick={() => scroll(-1)}
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-[#f0f0f0] flex items-center justify-center hover:bg-[#e8f6f8] transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-[#19798d]" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-[#f0f0f0] flex items-center justify-center hover:bg-[#e8f6f8] transition-all"
        >
          <ChevronRight className="w-5 h-5 text-[#19798d]" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-1 pb-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {TOP_BRANDS.map((store, i) => (
            <Link
              key={i}
              href={store.href}
              className="shrink-0 w-[175px] bg-white border border-[#f0f0f0] rounded-2xl shadow-sm p-5 flex flex-col items-center text-center hover:border-[#19798d] hover:shadow-md transition-all duration-300 group"
            >
              <div className="h-14 flex items-center justify-center mb-3">
                <img
                  src={store.logo}
                  alt={store.name}
                  className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-black font-extrabold text-sm mb-1">{store.name}</p>
              <p className="text-[#19798d] font-black text-[10px] uppercase tracking-wide mb-3">{store.discount}</p>
              <span className="text-[#19798d] font-black text-[10px] uppercase tracking-tighter group-hover:underline">
                View Coupons →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQS = [
  {
    q: "How does Couponsbit work?",
    a: "Using Couponsbit is simple. Browse your favorite store, category, or brand, select a coupon code or deal that matches your purchase, and follow the instructions provided. You can then apply the offer during checkout on the retailer's website to enjoy potential savings."
  },
  {
    q: "Is Couponsbit free to use?",
    a: "Yes. Couponsbit is completely free for shoppers. There are no membership fees, subscription costs, or hidden charges. You can browse deals, coupon codes, and promotional offers anytime without creating an account."
  },
  {
    q: "Are the coupon codes on Couponsbit verified?",
    a: "Our team regularly reviews and updates offers to help users discover current savings opportunities. While retailers may change or end promotions without notice, we strive to provide accurate and relevant coupon information whenever possible."
  },
  {
    q: "Why isn't my coupon code working?",
    a: "A coupon code may not work for several reasons, including:",
    list: [
      "The promotion has expired.",
      "The offer applies only to specific products or categories.",
      "Minimum purchase requirements have not been met.",
      "The code has already been used.",
      "The retailer has ended the promotion."
    ],
    note: "Always review the terms and conditions associated with each offer before making a purchase."
  },
  {
    q: "What types of brands can I find on Couponsbit?",
    a: "Couponsbit features deals from a wide range of industries and categories, including:",
    list: [
      "Travel and airlines",
      "Fashion and apparel",
      "Electronics and technology",
      "Software and digital services",
      "Entertainment and ticketing",
      "Mobile and wireless providers",
      "Home and lifestyle brands",
      "Online subscription services"
    ],
    note: "Our goal is to help shoppers find savings opportunities across many of the brands they already know and trust."
  },
  {
    q: "Can I use multiple coupon codes on one purchase?",
    a: "This depends on the retailer. Some merchants allow coupon stacking, while others only permit one promotional code per order. Always review the retailer's coupon policy during checkout."
  },
  {
    q: "Why should I use Couponsbit before shopping online?",
    a: "Checking Couponsbit before completing a purchase can help you discover available discounts, promotional offers, and special deals that may lower your total cost. A few moments spent searching for a deal could help you save on your next purchase."
  }
];

export default function HomePageContent() {
  const [timeLeft, setTimeLeft] = useState(43200);
  const [toast, setToast] = useState<{ show: boolean, code: string }>({ show: false, code: "" });
  const [openFeatured, setOpenFeatured] = useState<number | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 43200));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return {
      h: h.toString().padStart(2, '0'),
      m: m.toString().padStart(2, '0'),
      s: s.toString().padStart(2, '0')
    };
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setToast({ show: true, code });
    setTimeout(() => setToast({ show: false, code: "" }), 2000);
  };

  const time = formatTime(timeLeft);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary selection:text-white bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .marquee-left { animation: scroll-left 25s linear infinite; }
        .marquee-right { animation: scroll-right 25s linear infinite; }
        .marquee-left:hover, .marquee-right:hover { animation-play-state: paused; }
      `}} />

      <Navbar />

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 right-4 z-[100] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-4 pr-6 flex items-center gap-3 animate-in slide-in-from-right duration-300">
          <CheckCircle className="w-5 h-5 text-[#22c55e]" />
          <div>
            <p className="text-black font-extrabold text-sm">Code Copied!</p>
            <p className="text-[#19798d] font-mono text-xs font-bold leading-none mt-0.5">{toast.code}</p>
          </div>
        </div>
      )}

      <main>
        <Hero />

        {/* Section 1: Trust Stats Bar */}
        <section className="bg-gradient-to-r from-slate-50 to-white py-6 md:py-8">
  <div className="container mx-auto max-w-7xl px-4">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {[
        { icon: Store, val: "2,000+", label: "Top Stores" },
        { icon: Tag, val: "15,000+", label: "Coupons & Deals" },
        { icon: Users, val: "500K+", label: "Happy Shoppers" },
        { icon: BadgeCheck, val: "100%", label: "Verified Coupons" },
      ].map((stat, i) => (
        <div
          key={i}
          className="
            bg-white
            rounded-xl
            border border-gray-100
            shadow-sm
            hover:shadow-md
            transition-all
            duration-300
            p-4 md:p-5
          "
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#19798d]/10 flex items-center justify-center shrink-0">
              <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-[#19798d]" />
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-none">
                {stat.val}
              </h3>

              <p className="text-xs md:text-sm text-gray-500 mt-1">
                {stat.label}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Tagline Banner */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-black font-extrabold text-2xl md:text-3xl tracking-tight">
              Shop Beyond the Price Tag.
            </h2>
            <div className="w-16 h-[3px] bg-[#19798D] rounded-full mx-auto mt-3"></div>
          </div>
        </section>

        {/* Section 2: Top Brands Slider */}
        <TopBrands />

        {/* Section 3: Shop by Categories */}
        <section className="bg-[#f8fafc] py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-black font-extrabold text-2xl flex items-center gap-2">
               Shop by Categories
              </h2>
              <Link href="/categories" className="text-[#19798d] font-bold text-sm hover:underline">
                View All Categories →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  id: "electronics",
                  name: "Electronics",
                  description: "AR glasses, cameras, gadgets & devices",
                  image: "/electronics-store.webp",
                  coupons: "850+",
                  stores: "50+",
                  accent: "#4A90E2",
                  featured: ["Rayneo", "Reolink", "Samsung", "Apple"],
                  href: "/categories/electronics"
                },
                {
                  id: "travel",
                  name: "Travel",
                  description: "Flights, hotels & vacation packages",
                  image: "/travel-store.webp",
                  coupons: "420+",
                  stores: "20+",
                  accent: "#19798d",
                  featured: ["LATAM Airlines", "Expedia", "Booking.com", "Airbnb"],
                  href: "/categories/travel"
                },
                {
                  id: "entertainment",
                  name: "Entertainment",
                  description: "Concerts, sports events & live shows",
                  image: "/entertainment-store.webp",
                  coupons: "210+",
                  stores: "15+",
                  accent: "#8E44AD",
                  featured: ["StubHub", "Viagogo", "Ticketmaster", "SeatGeek"],
                  href: "/categories/entertainment"
                }
              ].map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="group block bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-transparent overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={cat.image}
                      alt={`${cat.name} Coupons & Deals`}
                      className="w-full h-auto block group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      {cat.coupons} Coupons
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full">
                      <Store className="w-3 h-3" />
                      {cat.stores} Stores
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-black font-black text-xl mb-1.5 group-hover:text-[#19798d] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium mb-4 leading-relaxed">
                      {cat.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cat.featured.map((s) => (
                        <span key={s} className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${cat.accent}15`, color: cat.accent }}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#19798d] font-black text-sm">View All Coupons</span>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-all duration-300" style={{ backgroundColor: `${cat.accent}15` }}>
                        <ArrowRight className="w-4 h-4" style={{ color: cat.accent }} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="/categories" className="inline-flex items-center gap-2 px-9 py-3.5 border-2 border-[#19798d] text-[#19798d] bg-white rounded-full font-black hover:bg-[#19798d] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
                <LayoutGrid className="w-4 h-4" />
                View More Categories
              </Link>
            </div>
          </div>
        </section>

        
      


        {/* Section 4: Featured & Exclusive Coupons */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex justify-between items-center mb-7 flex-wrap gap-4">
              <div>
                <h2 className="text-black font-extrabold text-2xl"> Featured & Exclusive Coupons</h2>
                <p className="text-gray-500 text-sm mt-0.5">Hand-picked verified deals updated daily</p>
              </div>
              <Link href="/deals" className="text-[#19798d] font-bold text-sm hover:underline">
                View All Deals →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  label: "UP TO", discount: "95%", cat: "Digital Games",
                  title: "UP TO 95% OFF – XCOM 2 on Driffle",
                  desc: "Enjoy huge discounts on top-rated strategy and digital games.",
                  points: ["Up to 95% OFF on selected game titles", "Instant digital delivery", "Valid on PC & console keys"],
                  href: "/stores/driffle"
                },
                {
                  label: "SAVE", discount: "70%", cat: "AI Tools",
                  title: "Sintra 12-Month Plan – Save 70%",
                  desc: "Unlock maximum savings with Sintra AI's most popular annual plan.",
                  points: ["Save 70% on annual plan", "Access all AI automation bots", "Best value for businesses"],
                  href: "/stores/sintra"
                },
                {
                  label: "UP TO", discount: "69%", cat: "Mobile Plans",
                  title: "Up to 69% OFF – Summer Prepaid Plans by Lyca Mobile",
                  desc: "High-speed data, unlimited talk & text with no contracts.",
                  points: ["Up to 69% OFF on prepaid plans", "High-speed 4G/5G data included", "No lock-in contracts"],
                  href: "/stores/lyca-mobile"
                },
                {
                  label: "UP TO", discount: "50%", cat: "Web Hosting",
                  title: "UP TO 50% OFF – Bluehost Hosting Plan Savings",
                  desc: "Save big on secure and reliable Bluehost hosting subscriptions.",
                  points: ["Up to 50% OFF on hosting plans", "Free domain included", "24/7 customer support"],
                  href: "/stores/bluehost"
                },
              ].map((c, i) => (
                <div key={i} className="flex bg-white border border-gray-100 rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Blue left discount box */}
                  <div className="w-[130px] sm:w-[160px] bg-gradient-to-b from-[#0388b8] to-[#006d9b] flex flex-col items-center justify-center text-white shrink-0 p-4 text-center relative">
                    <div className="absolute -right-3 top-8 w-6 h-6 bg-white rounded-full" />
                    <div className="absolute -right-3 bottom-8 w-6 h-6 bg-white rounded-full" />
                    <p className="text-[11px] font-bold tracking-[2px] uppercase opacity-80">{c.label}</p>
                    <p className="font-black tracking-tighter mt-1" style={{ fontSize: c.discount.length > 3 ? "2.2rem" : "3rem" }}>{c.discount}</p>
                    <p className="text-[12px] font-bold mt-1 uppercase opacity-80">OFF</p>
                  </div>
                  {/* Right content */}
                  <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex gap-1.5 mb-2">
                        <span className="bg-red-50 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Limited Time</span>
                        <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Verified Deal</span>
                      </div>
                      <p className="text-[#19798d] text-[11px] font-black uppercase tracking-widest mb-1">{c.cat}</p>
                      <h3 className="text-base font-extrabold text-slate-900 leading-snug mb-1.5 line-clamp-2">{c.title}</h3>
                      <p className="text-gray-400 text-[13px] leading-snug line-clamp-2">{c.desc}</p>
                      <button
                        onClick={() => setOpenFeatured(openFeatured === i ? null : i)}
                        className="mt-2 text-[#19798d] font-bold text-[13px] flex items-center gap-1"
                      >
                        View Details <ChevronRight className={cn("w-3.5 h-3.5 transition-transform", openFeatured === i ? "rotate-90" : "")} />
                      </button>
                      {openFeatured === i && (
                        <ul className="mt-2 space-y-1 text-gray-600 text-[12px]">
                          {c.points.map((p, pi) => (
                            <li key={pi} className="flex gap-1"><span className="text-[#19798d]">•</span>{p}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <Link href={c.href}>
                      <button className="mt-3 w-full bg-[#19798d] hover:bg-[#0f5a6b] text-white text-sm font-bold py-2.5 rounded-xl transition-all">Get Deal</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Smarter Savings CTA Banner */}
        <section className="bg-gradient-to-br from-[#0f5a6b] to-[#19798d] py-24 md:py-14">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-white font-black text-3xl md:text-5xl leading-tight mb-6">
              Smarter Savings Start Here.
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">
              Discover verified discounts, exclusive offers, and money-saving deals from your favorite brands. Whether you're shopping for travel, fashion, electronics, software, entertainment, or mobile services, Couponsbit helps you find better deals and save more on every purchase.
            </p>
            <Link href="/deals" className="inline-flex items-center gap-2 bg-white text-[#19798d] font-black px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
              Browse Deals <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 3: Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Column: Image/Illustration */}
            <div className="w-full lg:w-1/2">
              <img
                src="/our-story.webp"
                alt="About Couponsbit"
                className="w-full h-[400px] md:h-[520px] rounded-[48px] object-cover"
              />
              <p className="text-center text-gray-500 text-sm italic mt-8">Trusted by 500,000+ shoppers across India</p>
            </div>

            {/* Right Column: Story Text */}
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-4 py-1.5 bg-[#e8f6f8] text-[#19798d] rounded-full text-xs font-black uppercase tracking-widest mb-6">OUR STORY</span>
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-8">Save More on the Brands You Love</h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                <p>
                  Couponsbit is a savings destination built for shoppers who believe paying full price should always be a choice - not the default. We help you discover verified coupon codes, exclusive promo offers, and limited-time deals from trusted brands across travel, fashion, electronics, software, entertainment, mobile services, and more.
                </p>
                <p>
                  Our mission is simple: make online savings easier to find. Instead of spending time searching through dozens of websites, shoppers can explore the latest discounts, promotions, and money-saving opportunities all in one place. Whether you're booking a trip, upgrading your tech, refreshing your wardrobe, or purchasing everyday essentials, Couponsbit helps you shop smarter and keep more money in your pocket.
                </p>
                
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
            {/* Left: Heading + Accordion */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-10">
                Frequently Asked<br />Questions
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-black text-black text-base md:text-lg">{faq.q}</span>
                      <div className={cn("shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors", openFaqIndex === i ? "bg-[#19798d]" : "bg-[#f0f0f0]")}>
                        {openFaqIndex === i ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-gray-500" />}
                      </div>
                    </button>
                    {openFaqIndex === i && (
                      <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                        <p>{faq.a}</p>
                        {faq.list && (
                          <ul className="list-disc pl-5 mt-3 space-y-1">
                            {faq.list.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {faq.note && <p className="mt-3">{faq.note}</p>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Support Card */}
            <div className="bg-white rounded-3xl border border-[#f0f0f0] shadow-sm p-8 h-fit lg:sticky lg:top-28">
              <div className="w-12 h-12 rounded-2xl bg-[#19798d] flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-black mb-3">Still have questions?</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Can't find the answer you're looking for? Get in touch with our support team and we'll be happy to help you find the best deals.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 bg-[#19798D] hover:bg-[#e88a00] text-white font-black px-6 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

        {/* Section 7: Latest Blog Posts */}
        {/* <section className="bg-[#f5f5f5] py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-10">
              <p className="text-gray-500 font-black text-[10px] tracking-[0.2em] uppercase mb-2">FROM OUR EDITORS</p>
              <h2 className="text-black font-extrabold text-4xl lg:text-5xl">Latest from Our Blog</h2>
              <div className="w-16 h-[3px] bg-[#FF9900] rounded-full mx-auto mt-4" />
              <p className="text-gray-500 text-base max-w-[600px] mx-auto mt-4 leading-relaxed">
                Shopping tips, saving hacks and deal guides from our expert team
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                { kw: "amazon online shopping india", date: "May 12, 2026", read: "6 min read", title: "10 Smart Ways to Save Money on Amazon India in 2026", desc: "Amazon India is a goldmine of deals if you know where to look. Here are 10 proven strategies.", href: "/blog/amazon-savings-guide" },
                { kw: "coupon code discount", date: "May 10, 2026", read: "5 min read", title: "How to Stack Coupons and Bank Offers for Maximum Savings", desc: "Did you know you can combine multiple deals for even bigger discounts? This guide explains how.", href: "/blog" },
                { kw: "fashion sale clothing", date: "May 8, 2026", read: "7 min read", title: "Myntra Grand Sale 2026 — Complete Guide to Getting the Best Deals", desc: "Myntra's biggest sale of the year is here. Here is your complete guide to saving the most money.", href: "/blog" }
              ].map((post, i) => (
                <Link href={post.href} key={i} className="group bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex flex-col sm:flex-row lg:flex-col hover:shadow-xl hover:border-[#19798d] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-full sm:w-[180px] lg:w-full h-48 sm:h-auto lg:h-44 shrink-0 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=300&h=200&sig=${i}`}
                      alt="Blog Post"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-none">
                        <span>{post.date}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.read}</span>
                        </div>
                      </div>
                      <h3 className="text-[#19798d] font-extrabold text-base leading-snug line-clamp-2 group-hover:text-[#0f5a6b] transition-colors">{post.title}</h3>
                      <p className="text-gray-500 text-xs mt-2 line-clamp-2 leading-relaxed">{post.desc}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[#19798d] font-black text-xs mt-4 uppercase tracking-[0.1em] group-hover:gap-4 transition-all">
                      READ MORE <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="/blog" className="inline-flex items-center gap-2 px-9 py-3 border-2 border-[#19798d] text-[#19798d] bg-white rounded-full font-black hover:bg-[#19798d] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl">
                <BookOpen className="w-4 h-4" />
                View All Articles →
              </Link>
            </div>
          </div>
        </section> */}

      </main>

      <Footer />
    </div>
  );
}
