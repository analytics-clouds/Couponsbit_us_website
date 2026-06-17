"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Search,
  Laptop,
  Plane,
  Tv,
  Zap,
  ArrowRight,
  ChevronDown,
  CheckCircle,
  Flame,
  BadgeCheck,
  Store,
  Users,
  Code
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    icon: Laptop,
    emoji: "🖥️",
    href: "/categories/electronics",
    accent: "#4A90E2",
    lightBg: "#EBF8FF",
    coupons: "850+",
    stores: "50+",
    description: "AR glasses, cameras, gadgets & devices",
    featured: ["Rayneo", "Reolink", "Samsung", "Apple"],
    gradient: "from-[#4A90E2] to-[#2B6CB0]",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1781677503/electronics-store_lbf784.webp"
  },
  {
    id: "travel",
    name: "Travel",
    icon: Plane,
    emoji: "✈️",
    href: "/categories/travel",
    accent: "#056bfa",
    lightBg: "#E8F6F8",
    coupons: "420+",
    stores: "20+",
    description: "Flights, hotels & vacation packages",
    featured: ["LATAM Airlines", "Expedia", "Booking.com", "Airbnb"],
    gradient: "from-[#056bfa] to-[#0451c4]",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1781677503/travel-store_ppr2qr.webp"
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: Tv,
    emoji: "🎫",
    href: "/categories/entertainment",
    accent: "#8E44AD",
    lightBg: "#F5F0FF",
    coupons: "210+",
    stores: "15+",
    description: "Concerts, sports events & live shows",
    featured: ["StubHub", "Viagogo", "Ticketmaster", "SeatGeek"],
    gradient: "from-[#8E44AD] to-[#6C3483]",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1781677504/entertainment-store_n2svyq.webp"
  },
  {
    id: "software",
    name: "Software & Digital",
    icon: Code,
    emoji: "💻",
    href: "/categories/software",
    accent: "#6B46C1",
    lightBg: "#FAF5FF",
    coupons: "300+",
    stores: "30+",
    description: "Game keys, hosting, AI tools & more",
    featured: ["Driffle", "Bluehost", "Envato", "Sintra"],
    gradient: "from-[#6B46C1] to-[#553C9A]",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1781677501/software-store_obazsu.webp"
  },
  {
    id: "mobile",
    name: "Mobile & Telecom",
    icon: Zap,
    emoji: "📱",
    href: "/categories/mobile",
    accent: "#00A651",
    lightBg: "#F0FFF4",
    coupons: "320+",
    stores: "10+",
    description: "SIM plans, data packs & calling",
    featured: ["Lyca Mobile", "Mint Mobile", "Visible", "Google Fi"],
    gradient: "from-[#00A651] to-[#007A3D]",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1781677504/mobile-store_qo5cuh.webp"
  }
];

export default function CategoriesPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = categories.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden bg-gradient-to-br from-[#0451c4] via-[#056bfa] to-[#1a9db5]">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />

        {/* Floating blobs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center pb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/15 border border-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8"
          >
            <Flame className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
            6 Active Categories · Updated Daily
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight tracking-tight"
          >
            Shop by Category
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg max-w-xl mx-auto mb-10 font-medium"
          >
            Verified coupon codes and exclusive deals across every category — all in one place.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {[
              { icon: Store, label: "2,000+ Stores" },
              { icon: BadgeCheck, label: "15K+ Coupons" },
              { icon: Users, label: "500K+ Shoppers" },
              { icon: CheckCircle, label: "100% Verified" }
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-2 rounded-full backdrop-blur-sm">
                <s.icon className="w-4 h-4" />
                {s.label}
              </div>
            ))}
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-lg mx-auto"
          >
            <div className="flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-white/80 focus-within:border-[#e8f6f8] transition-all">
              <div className="pl-5 shrink-0">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search categories..."
                className="flex-1 py-4 px-4 text-black font-medium outline-none bg-transparent text-sm placeholder:text-gray-400"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="pr-4 text-gray-400 hover:text-gray-600 text-lg">×</button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" fill="#f8fafc" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,80L60,69.3C120,59,240,37,360,32C480,27,600,37,720,42.7C840,48,960,48,1080,42.7C1200,37,1320,27,1380,21.3L1440,16V80H0Z" />
          </svg>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-4 max-w-7xl py-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#056bfa] hover:underline font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-black font-semibold">Categories</span>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-black">All Categories</h2>
              <p className="text-gray-500 text-sm font-medium mt-1">
                {filtered.length} {filtered.length === 1 ? "category" : "categories"} available
              </p>
            </div>
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-sm text-[#056bfa] font-bold hover:underline">
                Clear search
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🔍</p>
              <h3 className="text-black font-black text-xl mb-2">No categories found</h3>
              <p className="text-gray-500 text-sm">Try a different search term</p>
              <button onClick={() => setSearchQuery("")} className="mt-4 text-[#056bfa] font-bold text-sm hover:underline">Clear search</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((cat, i) => (
                  <motion.div
                    key={cat.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                  >
                    <Link href={cat.href} className="group block h-full">
                      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-transparent overflow-hidden h-full transition-all duration-300 hover:-translate-y-1">

                        {/* Card Header — image */}
                        <div className={cn("relative overflow-hidden bg-gradient-to-br", cat.gradient)}>
                          {/* Category image */}
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-auto block group-hover:scale-105 transition-transform duration-300"
                          />

                          {/* Coupon count badge */}
                          <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                            {cat.coupons} Coupons
                          </div>

                          {/* Stores badge */}
                          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full">
                            <Store className="w-3 h-3" />
                            {cat.stores} Stores
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6">
                          <h3 className="text-black font-black text-xl mb-1.5 group-hover:text-[#056bfa] transition-colors">
                            {cat.name}
                          </h3>
                          <p className="text-gray-500 text-sm font-medium mb-5 leading-relaxed">
                            {cat.description}
                          </p>

                          {/* Featured stores */}
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {cat.featured.map(s => (
                              <span key={s} className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${cat.accent}15`, color: cat.accent }}>
                                {s}
                              </span>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="text-sm font-black" style={{ color: cat.accent }}>
                              View All Coupons
                            </span>
                            <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1" style={{ backgroundColor: `${cat.accent}15` }}>
                              <ArrowRight className="w-4 h-4" style={{ color: cat.accent }} />
                            </div>
                          </div>
                        </div>

                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

    

      {/* SEO + Sidebar */}
      <section className="bg-[#f8fafc] py-16 border-t border-[#f0f0f0]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col lg:flex-row gap-12">

      {/* Left: SEO Content */}
      <div className="lg:w-3/5 space-y-10">
        <div>
          <h2 className="text-3xl font-black text-black mb-4">Online Coupons by Category</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Want a simple way to save on your favorite products and services? You've come to the right place. Couponsbit makes it simple to discover the latest online coupons by category, helping shoppers quickly browse deals based on their interests and shopping needs. Instead of searching through hundreds of offers, you can explore organized categories and find relevant discounts from trusted brands all in one place.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you're planning a vacation, shopping for new technology, upgrading your wardrobe, purchasing software, booking entertainment, or switching mobile providers, our category pages help you uncover valuable savings opportunities faster. With a wide selection of deals across multiple industries, Couponsbit makes smart shopping more convenient than ever.
          </p>
          <h3 className="text-xl font-extrabold text-black mb-2">Explore Popular Coupon Categories</h3>
          <p className="text-gray-600 leading-relaxed">
            Everyone shops differently. That's why Couponsbit organizes offers into dedicated categories, making it easier to discover discounts that match your interests. From everyday essentials to major purchases, our growing collection of coupon categories USA shoppers love includes some of the most popular online shopping destinations and services.
          </p>
        </div>

        {/* Categories Grid (6 Sections From Content) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              cat: categories[1], // Travel
              title: "Travel Deals & Discounts",
              desc: "Planning your next adventure? Browse travel-related offers on:",
              bullets: ["Flights", "Hotels", "Vacation packages", "Tours and experiences", "Car rentals", "Travel services"],
              extra: "Find savings opportunities from airlines, travel providers, and booking platforms that help make every trip more affordable."
            },
            {
              cat: categories[5] || categories[0], // Fashion
              title: "Fashion & Apparel Offers",
              desc: "Refresh your wardrobe without overspending. Explore deals on:",
              bullets: ["Clothing", "Footwear", "Accessories", "Designer brands", "Activewear", "Seasonal collections"],
              extra: "Fashion lovers can discover discounts from popular apparel retailers and online stores."
            },
            {
              cat: categories[0], // Electronics
              title: "Electronics Deals",
              desc: "Technology upgrades don't always have to come with premium prices. Browse offers on:",
              bullets: ["Laptops", "Smartphones", "Gaming accessories", "Smart home devices", "Computer equipment", "Consumer electronics"],
              extra: "Find savings from trusted electronics brands and technology retailers."
            },
            {
              cat: categories[3], // Software
              title: "Software & Digital Services",
              desc: "Whether you're working, creating, or managing a business, software plays a major role in daily life. Explore discounts on:",
              bullets: ["Productivity tools", "AI platforms", "Design software", "Web hosting", "Business solutions", "Cybersecurity products"],
              extra: "Discover digital solutions that help you work smarter while spending less."
            },
            {
              cat: categories[2], // Entertainment
              title: "Entertainment & Ticket Deals",
              desc: "Enjoy more experiences for less. Browse offers on:",
              bullets: ["Concert tickets", "Sports events", "Theater performances", "Festivals", "Streaming services", "Live entertainment"],
              extra: "Entertainment categories help users discover promotions from popular ticketing and event platforms."
            },
            {
              cat: categories[4], // Mobile
              title: "Mobile & Wireless Savings",
              desc: "Stay connected while keeping your costs under control. Find offers on:",
              bullets: ["Mobile plans", "Prepaid services", "Smartphones", "International calling", "Wireless accessories", "Data plans"],
              extra: "Explore promotions from leading mobile carriers and wireless providers."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#056bfa]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  {item.cat && (
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.cat.accent}15` }}>
                      <item.cat.icon className="w-5 h-5" style={{ color: item.cat.accent }} />
                    </div>
                  )}
                  <h3 className="text-black font-extrabold text-sm">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-xs mb-2 leading-relaxed">{item.desc}</p>
                <ul className="list-disc pl-4 text-xs text-gray-500 space-y-0.5 mb-3">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-500 text-[11px] leading-relaxed italic border-t border-gray-50 pt-2">{item.extra}</p>
            </div>
          ))}
        </div>

        {/* Why Browse Deals by Category? */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h3 className="text-[#056bfa] font-black text-lg mb-2">Why Browse Deals by Category?</h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Searching for discounts becomes much easier when offers are organized by shopping interests. Instead of browsing unrelated promotions, category pages allow users to quickly access relevant deals. When you shop deals by category, you can:
          </p>
          <div className="space-y-4">
            {[
              { title: "Save Time", desc: "Quickly find offers related to the products and services you're already planning to purchase." },
              { title: "Discover New Brands", desc: "Explore companies and retailers you may not have considered before." },
              { title: "Compare Offers", desc: "Review multiple deals within the same category and choose the one that provides the best value." },
              { title: "Stay Updated", desc: "Category pages make it easier to keep track of new promotions and seasonal offers." },
              { title: "Find Relevant Savings", desc: "See discounts tailored to your specific shopping needs rather than sorting through unrelated promotions." }
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#056bfa] shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-extrabold text-sm block">{benefit.title}</span>
                  <span className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How Couponsbit Helps You Save */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h3 className="text-black font-extrabold text-lg mb-2">How Couponsbit Helps You Save</h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            At Couponsbit, our mission is to simplify online savings. We understand that shoppers want genuine offers without the frustration of endless searching. That's why we organize deals into easy-to-browse categories while continuously updating available promotions from trusted brands and retailers.
          </p>
          <p className="text-gray-600 text-sm mb-3 font-bold">Our platform helps users:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {[
              "Discover new savings opportunities",
              "Find relevant coupon codes",
              "Explore seasonal promotions",
              "Access exclusive discounts",
              "Compare offers across categories"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#056bfa]" />
                <span className="text-gray-600 text-sm">{point}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3 italic">
            Whether you're making a small purchase or a major investment, finding the right deal can make a meaningful difference.
          </p>
        </div>

        {/* Seasonal Savings Across Categories */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h3 className="text-black font-extrabold text-lg mb-2">Seasonal Savings Across Categories</h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Many of the best deals appear during major shopping events throughout the year. Category pages help shoppers stay informed about promotions during:
          </p>
          <div className="space-y-3">
            {[
              { title: "Black Friday", desc: "One of the biggest shopping events for fashion, electronics, software, and more." },
              { title: "Cyber Monday", desc: "A popular time for online-exclusive discounts across multiple categories." },
              { title: "Holiday Sales", desc: "Seasonal shopping events often bring promotions from retailers and service providers." },
              { title: "Back-to-School Promotions", desc: "Students and families can find discounts on technology, software, apparel, and educational products." },
              { title: "End-of-Season Sales", desc: "Fashion, travel, and lifestyle brands frequently launch special offers during seasonal transitions." }
            ].map((season, i) => (
              <div key={i} className="border-l-2 border-[#056bfa] pl-3">
                <span className="text-black font-bold text-sm block">{season.title}</span>
                <span className="text-gray-600 text-xs leading-relaxed">{season.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Find the Right Deals Faster (Bottom Banner Content) */}
        <div className="p-6 bg-[#e8f6f8] rounded-2xl border border-[#056bfa]/10">
          <h3 className="text-black font-extrabold text-lg mb-2">Find the Right Deals Faster</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Whether you're booking travel, shopping for fashion, upgrading your technology, purchasing software, or searching for entertainment offers, Couponsbit makes it easy to discover relevant savings. Browse our collection of online coupons by category, explore popular coupon categories USA shoppers trust, and shop deals by category to find offers that match your interests and help you save on every purchase.
          </p>
        </div>
      </div>

      {/* Right: Sidebar */}
      <div className="lg:w-2/5">
        <aside className="sticky top-24 space-y-5">

          {/* All Stores */}
          <div className="bg-white border border-[#f0f0f0] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <Store className="w-5 h-5 text-[#056bfa]" />
              <h3 className="text-black font-extrabold text-base">All Stores</h3>
            </div>
            <div className="space-y-1">
              {[
                { name: "StubHub",        deal: "Up to 15% OFF on Tickets",    href: "/stores/stubhub-coupon-code" },
                { name: "Viagogo",        deal: "Up to 10% OFF on Events",     href: "/stores/viagogo-coupon-code" },
                { name: "LATAM Airlines",  deal: "Up to 12% OFF on Flights",    href: "/stores/latam-airlines-coupon-code" },
                { name: "Rayneo",          deal: "Up to 30% OFF on AR Glasses", href: "/stores/rayneo-coupon-code" },
                { name: "Driffle",         deal: "Up to 70% OFF on Game Keys",  href: "/stores/driffle-coupon-code" },
                { name: "Lyca Mobile",     deal: "Up to 20% OFF on Plans",      href: "/stores/lyca-mobile-coupon-code" },
                { name: "Bluehost",        deal: "Up to 65% OFF on Hosting",    href: "/stores/bluehost-coupon-code" },
                { name: "Reolink",         deal: "Up to 30% OFF on Cameras",    href: "/stores/reolink-coupon-code" },
                { name: "Envato Elements", deal: "Up to 50% OFF on Assets",     href: "/stores/envato-elements-coupon-code" },
                { name: "Sintra",          deal: "Up to 40% OFF on AI Tools",   href: "/stores/sintra-coupon-code" },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="group block">
                  <div className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 hover:bg-gray-50 rounded-xl px-2 -mx-2 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0 bg-[#056bfa]" />
                      <div>
                        <p className="text-sm font-black text-black leading-tight">{item.name}</p>
                        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wide">{item.deal}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-tighter px-2.5 py-1 rounded-lg bg-[#e8f6f8] text-[#056bfa]">GET</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Why Choose Couponsbit? (Moved to sidebar for balance) */}
          <div className="bg-white border border-[#f0f0f0] rounded-2xl p-6 shadow-sm">
            <h3 className="text-black font-extrabold text-base mb-4">Why Choose Couponsbit?</h3>
            <p className="text-gray-600 text-xs mb-4 leading-relaxed">
              Finding savings shouldn't be complicated. Couponsbit is designed to help shoppers access organized, easy-to-browse deals from trusted brands.
            </p>
            <div className="space-y-4">
              {[
                { title: "Wide Variety of Categories", desc: "Explore savings opportunities across travel, fashion, electronics, software, entertainment, mobile services, and more." },
                { title: "Updated Promotions", desc: "We regularly update offers to help users discover new deals and discounts." },
                { title: "Easy Navigation", desc: "Browse categories, brands, and promotions quickly and efficiently." },
                { title: "Completely Free", desc: "Couponsbit is free to use and available whenever you're ready to save." },
                { title: "Trusted Shopping Resource", desc: "Our goal is to help shoppers make informed purchasing decisions while maximizing savings opportunities." }
              ].map((point, i) => (
                <div key={i} className="space-y-0.5">
                  <span className="text-sm font-bold text-black block">{point.title}</span>
                  <span className="text-gray-500 text-xs block leading-relaxed">{point.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs (Updated with exact client text) */}
          <div className="bg-white border border-[#f0f0f0] rounded-2xl p-6 shadow-sm">
            <h3 className="text-black font-extrabold text-base mb-5">Frequently Asked Questions</h3>
            <div className="space-y-2">
              {[
                { q: "What are online coupons by category?", a: "Online coupons by category are organized collections of deals and discounts grouped by shopping interests such as travel, fashion, electronics, software, entertainment, and mobile services." },
                { q: "What coupon categories are available on Couponsbit?", a: "Couponsbit features a variety of coupon categories, including travel, fashion, electronics, software, entertainment, mobile, and other popular shopping segments." },
                { q: "Why should I browse deals by category?", a: "Browsing deals by category helps you find relevant offers faster and makes it easier to compare savings opportunities within a specific industry or shopping interest." },
                { q: "Are category pages updated regularly?", a: "Yes. Couponsbit regularly updates promotions and discounts to help users discover current savings opportunities." },
                { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps shoppers discover deals, discounts, and coupon codes from trusted brands." }
              ].map((faq, i) => (
                <div key={i} className="border-b border-[#f0f0f0] last:border-0 pb-2 last:pb-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex items-center justify-between w-full text-left py-2 group"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-sm font-bold text-black group-hover:text-[#056bfa] transition-colors pr-4 leading-snug">{faq.q}</span>
                    <ChevronDown className={cn("w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200", openFaq === i && "rotate-180")} />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-500 pb-3 leading-relaxed">{faq.a}</p>
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

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-br from-[#0451c4] via-[#056bfa] to-[#1a9db5] rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)", backgroundSize: "20px 20px" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-3">Start Saving Across All Categories</h2>
              <p className="text-white/80 text-base mb-8 max-w-lg mx-auto">
                Browse verified coupon codes from 2000+ stores. Fashion, travel, tech and more — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/stores">
                  <button className="h-13 px-8 py-3.5 rounded-full bg-white text-[#056bfa] hover:bg-[#e8f6f8] font-black text-sm transition-all active:scale-95 shadow-xl">
                    Browse All Stores →
                  </button>
                </Link>
                <Link href="/deals">
                  <button className="h-13 px-8 py-3.5 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#056bfa] font-black text-sm transition-all active:scale-95">
                    Today's Top Deals
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
