"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft, ArrowRight, BadgeCheck, Clock,
  Shirt, Laptop, Sparkles, Plane, Utensils,
  AppWindow, ChevronDown, ChevronUp, Search, Flame,
  ShoppingBag, HeartHandshake, HelpCircle
 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";


const slides = [
  { id: 1, image: "https://res.cloudinary.com/couponsbit/image/upload/v1793189781/us_website_home_yzammr.webp",          alt: "Reolink Deals" },
  { id: 2, image: "https://res.cloudinary.com/couponsbit/image/upload/v1793189333/2_dfvqzt.webp",          alt: "Reolink Deals" },
  { id: 3, image: "https://res.cloudinary.com/couponsbit/image/upload/v1793189290/1_dwbtpt.webp",          alt: "Reolink Deals" },
  { id: 4, image: "https://res.cloudinary.com/couponsbit/image/upload/v1793189291/5_xhtwty.webp",          alt: "Reolink Deals" },
  { id: 5, image: "https://res.cloudinary.com/couponsbit/image/upload/v1793189291/4_tt1rqi.webp",          alt: "Reolink Deals" },
  { id: 6, image: "https://res.cloudinary.com/couponsbit/image/upload/v1793189292/3_u7jjsl.webp",          alt: "Reolink Deals" },

];

const mobileSlides = [
  { id: 1, image: "https://res.cloudinary.com/couponsbit/image/upload/v1793189781/us_website_home_yzammr.webp",          alt: "Reolink Deals" },
  { id: 2, image: "https://res.cloudinary.com/couponsbit/image/upload/v1793189333/2_dfvqzt.webp",          alt: "Reolink Deals" },
  { id: 3, image: "https://res.cloudinary.com/couponsbit/image/upload/v1793189290/1_dwbtpt.webp",          alt: "Reolink Deals" },
  { id: 4, image: "https://res.cloudinary.com/couponsbit/image/upload/v1793189291/5_xhtwty.webp",          alt: "Reolink Deals" },
  { id: 5, image: "https://res.cloudinary.com/couponsbit/image/upload/v1793189291/4_tt1rqi.webp",          alt: "Reolink Deals" },
  { id: 6, image: "https://res.cloudinary.com/couponsbit/image/upload/v1793189292/3_u7jjsl.webp",          alt: "Reolink Deals" },

];


export default function DealsPageContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openStub, setOpenStub] = useState<number | null>(null);
  const [isSeoExpanded, setIsSeoExpanded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-[#f4f7f8] font-sans selection:bg-[#056bfa] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>

      {/* ── Hero Slider (Desktop) ── */}
      <div className="relative w-full overflow-hidden hidden md:block" style={{ aspectRatio: "1920/400" }}>
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className={cn("absolute inset-0 w-full h-full", currentSlide === index ? "z-10" : "z-0")}
          >
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        ))}
        <button onClick={prevSlide} aria-label="Previous slide" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <button onClick={nextSlide} aria-label="Next slide" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all">
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} aria-label={`Go to slide ${i + 1}`} className={cn("h-2 rounded-full transition-all duration-300", currentSlide === i ? "w-6 bg-white" : "w-2 bg-white/50")} />
          ))}
        </div>
      </div>

      {/* ── Hero Slider (Mobile) ── */}
      <div className="relative w-full overflow-hidden md:hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={mobileSlides[currentSlide].id}
            src={mobileSlides[currentSlide].image}
            alt={mobileSlides[currentSlide].alt}
            width={750}
            height={350}
            fetchPriority={currentSlide === 0 ? "high" : undefined}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-auto block"
          />
        </AnimatePresence>
        <button onClick={prevSlide} aria-label="Previous slide" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <button onClick={nextSlide} aria-label="Next slide" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all">
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {mobileSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} aria-label={`Go to slide ${i + 1}`} className={cn("h-2 rounded-full transition-all duration-300", currentSlide === i ? "w-6 bg-white" : "w-2 bg-white/50")} />
          ))}
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-[#e8e8e8]">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#056bfa] font-medium hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-black font-extrabold">Deals</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-12 space-y-16">

        {/* ════════════════════════════════════════
            SINGAPORE AIRLINES — Horizontal card with left gradient block
        ════════════════════════════════════════ */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[3px] text-[#0344b0] mb-0.5">Exclusive Deals</p>
              <h2 className="text-2xl sm:text-3xl font-black text-black">Singapore Airlines Flight Deals</h2>
            </div>
            <Link href="/stores/singapore-airlines-promo-code" aria-label="View all Singapore Airlines deals" className="text-[#056bfa] font-black text-sm border border-[#056bfa] rounded-full px-5 py-2 hover:bg-[#056bfa] hover:text-white transition-all">View All →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: "FROM", discount: "1,475", currency: "SGD", route: "SIN→AMS", cat: "Amsterdam",           title: "Singapore Airlines Flights to Amsterdam from SGD 1,475",         desc: "Book flights from Singapore (SIN) to Amsterdam (AMS) starting at SGD 1,475." },
              { label: "FROM", discount: "415",   currency: "SGD", route: "SIN→BWN", cat: "Bandar Seri Begawan", title: "Singapore Airlines Flights to Bandar Seri Begawan from SGD 415", desc: "Find flights from Singapore to Bandar Seri Begawan (BWN) starting at SGD 415." },
              { label: "FROM", discount: "343",   currency: "SGD", route: "SIN→CEB", cat: "Cebu",                title: "Singapore Airlines Flights to Cebu from SGD 343",                desc: "Book flights from Singapore (SIN) to Cebu (CEB) starting at SGD 343." },
              { label: "FROM", discount: "298",   currency: "SGD", route: "SIN→CGK", cat: "Jakarta",             title: "Singapore Airlines Flights to Jakarta from SGD 298",             desc: "Find flights from Singapore (SIN) to Jakarta (CGK) starting at SGD 298." },
              { label: "FROM", discount: "1,045", currency: "SGD", route: "SIN→LAX", cat: "Los Angeles",         title: "Singapore Airlines Flights to Los Angeles from SGD 1,045",       desc: "Book flights from Singapore to Los Angeles (LAX) starting at SGD 1,045." },
              { label: "FROM", discount: "697",   currency: "SGD", route: "SIN→MEL", cat: "Melbourne",           title: "Singapore Airlines Flights to Melbourne from SGD 697",           desc: "Find flights from Singapore to Melbourne (MEL) starting at SGD 697." },
              { label: "FROM", discount: "713",   currency: "SGD", route: "SIN→KIX", cat: "Osaka",               title: "Singapore Airlines Flights to Osaka from SGD 713",               desc: "Book flights from Singapore (SIN) to Osaka (KIX) starting at SGD 713." },
            ].map((c, i) => (
              <div key={i} className="flex bg-white border border-gray-100 rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-[130px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex flex-col items-center justify-center text-white shrink-0 p-4 text-center relative">
                  <div className="absolute -right-3 top-8 w-6 h-6 bg-[#f4f7f8] rounded-full" />
                  <div className="absolute -right-3 bottom-8 w-6 h-6 bg-[#f4f7f8] rounded-full" />
                  <p className="text-[10px] font-bold tracking-[2px] uppercase opacity-80">{c.label}</p>
                  <p className="text-[11px] font-bold opacity-80 mt-0.5">{c.currency}</p>
                  <p className="font-black tracking-tighter leading-none mt-0.5" style={{ fontSize: c.discount.length > 3 ? "1.8rem" : "2.4rem" }}>{c.discount}</p>
                  <p className="text-[9px] font-bold mt-1.5 opacity-80">{c.route}</p>
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
                  <Link href="/stores/singapore-airlines-promo-code" aria-label={`Get deal: ${c.title}`}>
                    <button className="mt-3 w-full bg-[#056bfa] hover:bg-[#0451c4] text-white text-sm font-bold py-2.5 rounded-xl transition-all">Get Deal</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Content */}

        <section className="py-24 border-t border-[#f0f0f0]">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Main Approved Content Container */}
          <div className="lg:w-3/5">
            <div>
              
              {/* HEADER & INTRO */}
              <h1 className="text-4xl font-black text-black mb-8 leading-tight">
                Best Online Deals, Promo Codes & Exclusive Discounts On Couponsbit
              </h1>

              <div className="space-y-6">
                <h3 className="text-[#056bfa] font-black text-2xl mb-2">
                  Save More Every Time You Shop With Couponsbit Deals
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium mb-4">
                  Looking for the best online deals, verified promo codes, and exclusive discounts from top brands? Welcome to Couponsbit - your trusted destination for smarter online shopping and real savings.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-medium mb-4">
                  At Couponsbit, we help shoppers discover the latest deals, limited-time offers, seasonal sales, and working promo codes from popular brands across fashion, electronics, beauty, travel, food delivery, software, lifestyle, and more. Whether you're shopping for everyday essentials or planning a big purchase, our goal is simple: help you save money effortlessly.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Online shopping has become part of everyday life, but finding genuine discounts can still be frustrating. Many shoppers waste time testing expired coupon codes or browsing unreliable deal websites, this is why Couponsbit is one of the best coupon websites. That’s where Couponsbit makes a difference. Our platform is built to deliver verified deals, updated offers, and a smooth shopping experience that helps users shop smarter and spend less.
                </p>
              </div>

              {/* Expandable Content Wrapper for Mobile UX Optimization */}
              <div className={cn(
                "overflow-hidden transition-all duration-1000 ease-in-out",
                isSeoExpanded ? "max-h-[8000px] opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
              )}>
                
                {/* VERIFIED DEALS SECTION */}
                <div className="pt-8 space-y-6">
                  <h3 className="text-[#056bfa] font-black text-2xl mb-4">
                    Discover Verified Deals From Top Brands
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    Couponsbit brings together a wide collection of online deals and promo codes from trusted U.S. and international brands. Our team regularly reviews and updates offers so shoppers can access active savings opportunities without the hassle.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    From fashion discounts and electronics sales to travel offers and beauty deals, Couponsbit helps users find promotions that actually work.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg font-semibold mb-4">
                    Some of the most popular deal categories include:
                  </p>
                  
                  {/* Bullet Points Grid */}
                  <div className="space-y-4 mb-8">
                    {[
                      "Fashion & apparel deals",
                      "Electronics and gadget discounts",
                      "Beauty and skincare offers",
                      "Food delivery promo codes",
                      "Travel and hotel deals",
                      "Software and subscription discounts",
                      "Home and lifestyle sales",
                      "Seasonal shopping promotions"
                    ].map((point, i) => (
                      <div key={i} className="flex items-center gap-4 py-2 border-b border-[#f0f0f0] last:border-0">
                        <span className="w-2 h-2 rounded-full bg-[#056bfa] shrink-0" />
                        <p className="text-gray-700 text-lg font-medium">{point}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    We continuously update our platform with fresh online deals to help shoppers discover the latest savings opportunities every day.
                  </p>
                </div>

                {/* WHY SHOPPERS LOVE COUPONSBIT */}
                <div className="pt-12 space-y-6">
                  <h3 className="text-[#056bfa] font-black text-2xl mb-6">
                    Why Shoppers Love Couponsbit Deals
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-black font-extrabold text-lg mb-2">Verified Promo Codes</h4>
                      <p className="text-gray-600 leading-relaxed text-base">One of the biggest frustrations with online coupon websites is expired or fake promo codes. At Couponsbit, we focus on verified deals and regularly updated offers so users can save time and avoid unnecessary checkout frustration.</p>
                    </div>
                    <div>
                      <h4 className="text-black font-extrabold text-lg mb-2">Daily Updated Offers</h4>
                      <p className="text-gray-600 leading-relaxed text-base">Our team constantly monitors new promotions, flash sales, and limited-time discounts to ensure shoppers always have access to the latest online deals.</p>
                    </div>
                    <div>
                      <h4 className="text-black font-extrabold text-lg mb-2">Easy Shopping Experience</h4>
                      <p className="text-gray-600 leading-relaxed text-base">Couponsbit is designed to make saving simple. Users can browse categories, search favorite brands, reveal promo codes instantly, and start saving within seconds.</p>
                    </div>
                    <div>
                      <h4 className="text-black font-extrabold text-lg mb-2">Savings Across Multiple Categories</h4>
                      <p className="text-gray-600 leading-relaxed text-base">Whether you are shopping for clothing, electronics, travel bookings, subscriptions, or home essentials, Couponsbit helps you discover deals across a wide range of industries.</p>
                    </div>
                    <div>
                      <h4 className="text-black font-extrabold text-lg mb-2">100% Free to Use</h4>
                      <p className="text-gray-600 leading-relaxed text-base">Couponsbit is completely free for shoppers. No subscriptions, hidden fees, or memberships required - just real savings from brands people already love.</p>
                    </div>
                  </div>
                </div>

                {/* HOW IT WORKS SECTION */}
                <div className="pt-12 space-y-6">
                  <h3 className="text-[#056bfa] font-black text-2xl mb-4">
                    How Couponsbit Deals Work
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Saving money with Couponsbit is simple and quick.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="border border-gray-100 rounded-xl p-5 bg-white">
                      <span className="text-xs font-black text-[#056bfa] uppercase tracking-wider block mb-1">Step 1</span>
                      <h4 className="text-black font-extrabold text-base mb-2">Search for Your Favorite Brand</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">Browse thousands of deals and promo codes from popular stores and online brands.</p>
                    </div>
                    <div className="border border-gray-100 rounded-xl p-5 bg-white">
                      <span className="text-xs font-black text-[#056bfa] uppercase tracking-wider block mb-1">Step 2</span>
                      <h4 className="text-black font-extrabold text-base mb-2">Reveal the Promo Code</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">Click on the deal or coupon to copy the code instantly.</p>
                    </div>
                    <div className="border border-gray-100 rounded-xl p-5 bg-white">
                      <span className="text-xs font-black text-[#056bfa] uppercase tracking-wider block mb-1">Step 3</span>
                      <h4 className="text-black font-extrabold text-base mb-2">Shop on the Brand’s Website</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">Visit the retailer’s website and add your favorite products or services to your cart.</p>
                    </div>
                    <div className="border border-gray-100 rounded-xl p-5 bg-white">
                      <span className="text-xs font-black text-[#056bfa] uppercase tracking-wider block mb-1">Step 4</span>
                      <h4 className="text-black font-extrabold text-base mb-2">Apply the Promo Code</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">Paste the promo code during checkout and enjoy instant savings on your purchase.</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg pt-2">
                    It only takes a few seconds to unlock better prices and smarter online shopping.
                  </p>
                </div>

                {/* SEASONAL SALES */}
                <div className="pt-12 space-y-6">
                  <h3 className="text-[#056bfa] font-black text-2xl mb-4">
                    Save More During Seasonal Sales
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Couponsbit helps shoppers maximize savings during major shopping events throughout the year.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg font-semibold mb-4">
                    Some of the most popular seasonal sales include:
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Black Friday Deals", "Cyber Monday Sales", "Back-to-School Discounts",
                      "Holiday Shopping Deals USA", "Summer Sales", "End-of-Season Offers",
                      "Valentine’s Day Promotions", "Memorial Day Sales", "Fourth of July Deals"
                    ].map((tag) => (
                      <span key={tag} className="bg-gray-50 text-gray-700 border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg pt-4">
                    During peak shopping seasons, our team works to bring users the latest discounts, promo codes, and exclusive online deals from top brands.
                  </p>
                </div>

                {/* SMART SHOPPING */}
                <div className="pt-12 space-y-6">
                  <h3 className="text-[#056bfa] font-black text-2xl mb-4">
                    Smart Shopping Starts With Better Deals
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    Today’s shoppers are smarter than ever. Before completing a purchase, many consumers search for promo codes, discounts, and online deals to reduce costs and maximize value.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    Couponsbit was created to support this new generation of smart shoppers by making savings easier to access. Instead of searching through multiple websites, users can discover verified offers in one convenient place.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg font-medium">
                    We believe online shopping should feel rewarding - not expensive.
                  </p>
                </div>

                {/* DEALS FOR EVERY SHOPPER GRID BLOCK */}
                <div className="pt-12 space-y-6">
                  <h3 className="text-[#056bfa] font-black text-2xl mb-4">
                    Deals for Every Type of Shopper
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    At Couponsbit, we understand that every shopper has different needs and preferences. That’s why we feature deals across multiple industries and shopping categories.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="border border-gray-100 rounded-xl p-5 flex gap-4 items-start bg-white">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-pink-50 text-pink-600"><Shirt className="w-5 h-5" /></div>
                      <div>
                        <h4 className="text-black font-extrabold text-sm mb-1">Fashion Deals</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Discover discounts on clothing, shoes, accessories, activewear, and luxury fashion brands.</p>
                      </div>
                    </div>

                    <div className="border border-gray-100 rounded-xl p-5 flex gap-4 items-start bg-white">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-blue-50 text-blue-600"><Laptop className="w-5 h-5" /></div>
                      <div>
                        <h4 className="text-black font-extrabold text-sm mb-1">Electronics Deals</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Save on laptops, smartphones, gaming accessories, headphones, smart devices, and tech gadgets.</p>
                      </div>
                    </div>

                    <div className="border border-gray-100 rounded-xl p-5 flex gap-4 items-start bg-white">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-purple-50 text-purple-600"><Sparkles className="w-5 h-5" /></div>
                      <div>
                        <h4 className="text-black font-extrabold text-sm mb-1">Beauty & Skincare Offers</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Explore savings on makeup, skincare products, wellness brands, and beauty subscriptions.</p>
                      </div>
                    </div>

                    <div className="border border-gray-100 rounded-xl p-5 flex gap-4 items-start bg-white">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-teal-50 text-teal-600"><Plane className="w-5 h-5" /></div>
                      <div>
                        <h4 className="text-black font-extrabold text-sm mb-1">Travel & Vacation Deals</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Find promo codes for hotels, flights, travel bookings, vacation packages, and car rentals.</p>
                      </div>
                    </div>

                    <div className="border border-gray-100 rounded-xl p-5 flex gap-4 items-start bg-white">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-red-50 text-red-600"><Utensils className="w-5 h-5" /></div>
                      <div>
                        <h4 className="text-black font-extrabold text-sm mb-1">Food Delivery Discounts</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Enjoy savings on takeout, meal delivery services, grocery apps, and restaurant orders.</p>
                      </div>
                    </div>

                    <div className="border border-gray-100 rounded-xl p-5 flex gap-4 items-start bg-white">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-indigo-50 text-indigo-600"><AppWindow className="w-5 h-5" /></div>
                      <div>
                        <h4 className="text-black font-extrabold text-sm mb-1">Subscription & Software Deals</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Access discounts on streaming services, productivity software, online tools, and digital subscriptions.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg pt-4">
                    No matter what you shop for, Couponsbit helps you find better prices online.
                  </p>
                </div>

                {/* WHY VERIFIED DEALS MATTER */}
                <div className="pt-12 space-y-6">
                  <h3 className="text-[#056bfa] font-black text-2xl mb-4">
                    Why Verified Deals Matter
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    The internet is filled with outdated coupon codes and unreliable discount websites. Shoppers often waste time testing offers that no longer work.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Couponsbit focuses on quality over quantity. We prioritize verified promo codes, active offers, and real savings opportunities to create a better shopping experience for users.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg font-medium">
                    Our goal is to help shoppers feel confident every time they search for online deals.
                  </p>
                </div>

                {/* SMARTER WAY TO SAVE */}
                <div className="pt-12 space-y-6">
                  <h3 className="text-[#056bfa] font-black text-2xl mb-4">
                    A Smarter Way to Save Money Online
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    Saving money online should not feel complicated. Couponsbit simplifies the process by organizing deals, promo codes, and brand offers in one easy-to-use platform.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    Whether you are making a quick everyday purchase or planning a larger shopping spree, Couponsbit helps you spend less while getting more value from every order.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    As online shopping continues to grow, finding trusted deals has become more important than ever. That’s why we continue building a platform focused on convenience, trust, and genuine savings.
                  </p>
                </div>

                {/* START EXPLORING CLOSING OUTRO */}
                <div className="pt-12 space-y-6">
                  <h3 className="text-[#056bfa] font-black text-2xl mb-4">
                    Start Exploring the Latest Deals Today
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    Ready to unlock better prices and smarter online shopping?
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    Browse the latest promo codes, online deals, and exclusive offers from top brands with Couponsbit. From everyday essentials to trending products and seasonal sales, we help shoppers save more every day.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg font-medium">
                    Start exploring verified deals today and discover a smarter way to shop online with Couponsbit.
                  </p>
                </div>

              </div>

              {/* Mobile View Accordion Toggle Button */}
              <button
                onClick={() => setIsSeoExpanded(!isSeoExpanded)}
                className="flex justify-center w-full lg:hidden mt-8"
              >
                <div className="flex items-center gap-3 px-8 py-3 bg-[#e8f6f8] text-[#056bfa] font-black rounded-full border border-[#056bfa] shadow-sm hover:bg-[#056bfa] hover:text-white transition-all">
                  {isSeoExpanded ? (
                    <>Read Less <ChevronUp className="w-5 h-5" /></>
                  ) : (
                    <>Read More <ChevronDown className="w-5 h-5" /></>
                  )}
                </div>
              </button>

            </div>
          </div>

          {/* Right Column: Interactive Conversational/SEO Widgets */}
          <div className="lg:w-2/5">
            <aside className="sticky top-24 space-y-8">
              
             

              {/* Sidebar Widget 2: Featured Brands Highlights */}
              <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <Flame className="w-6 h-6 text-orange-500 fill-orange-500" />
                  <h3 className="text-black font-black text-xl">Top Savings Offers</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { store: "Entertainment",      deal: "StubHub & Viagogo Ticket Deals" },
                    { store: "Travel",             deal: "LATAM Airlines – Up to 40% OFF" },
                    { store: "Electronics",        deal: "Rayneo & Reolink – Save Up to $130" },
                    { store: "Software & Digital", deal: "Driffle – Up to 95% OFF Game Keys" },
                    { store: "Mobile & Telecom",   deal: "Lyca Mobile – Up to 69% OFF Plans" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between group py-3 border-b border-[#f0f0f0] last:border-0 hover:bg-gray-50/50 rounded-xl transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#056bfa] group-hover:scale-150 transition-transform" />
                        <div>
                          <p className="text-sm font-black text-black leading-tight">{item.store}</p>
                          <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">{item.deal}</p>
                        </div>
                      </div>
                      <button className="text-[11px] font-black text-[#0344b0] hover:underline uppercase tracking-tighter bg-[#e8f6f8] px-3 py-1.5 rounded-lg">VIEW</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Widget 3: Quick Trust Accordion */}
              <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <HeartHandshake className="w-6 h-6 text-[#056bfa]" />
                  <h3 className="text-black font-black text-xl">Couponsbit Trust</h3>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      q: "Are Couponsbit deals really free?",
                      a: "Yes! Couponsbit is completely free for shoppers. No subscriptions, hidden fees, or memberships required to unlock real brand savings."
                    },
                    {
                      q: "How does the platform verify promo codes?",
                      a: "Our team regularly reviews, updates, and manually tests offers so shoppers can access active savings opportunities without checking expired codes."
                    }
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-[#f0f0f0] last:border-0 pb-4 last:pb-0">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex items-center justify-between w-full text-left py-2 group"
                      >
                        <span className="text-base font-black text-black group-hover:text-[#056bfa] transition-colors pr-6 leading-tight">{faq.q}</span>
                        <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform shrink-0", openFaq === i && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-gray-500 mt-4 leading-relaxed font-medium">
                              {faq.a}
                            </p>
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

        

      </div>


      

      

      </main>
      <Footer />
    </div>
  );
}
