"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  ChevronRight, 
  Store, 
  Package, 
  Users, 
  BadgeCheck, 
  ArrowRight,
  Laptop,
  Shirt,
  Sparkles,
  Home,
  Trophy,
  Gamepad,
  Car,
  BookOpen,
  Tag,
  Shield,
  Mail,
  Gift
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const TOP_BRANDS = [
  // Row 1
  { name: "Amazon", logo: "amazon", style: "text-[#FF9900] font-extrabold", products: "15,000+" },
  { name: "Flipkart", logo: "Flipkart ⭐", style: "text-[#2874F0] font-extrabold", products: "8,500+" },
  { name: "AJIO", logo: "AJIO", style: "text-[#000000] font-extrabold", products: "5,200+" },
  { name: "Myntra", logo: "M", style: "text-[#FF3F6C] font-extrabold text-4xl", products: "12,000+" },
  { name: "Tata Cliq", logo: <><span className="text-sm font-normal">TATA</span> CLiQ</>, style: "text-black font-extrabold", products: "3,500+" },
  { name: "Nykaa", logo: "NYKAA", style: "text-[#FC2779] font-extrabold italic", products: "6,800+" },
  // Row 2
  { name: "Nike", logo: "✓", style: "text-[#000000] font-black text-3xl", products: "4,200+" },
  { name: "Puma", logo: "PUMA", style: "text-[#000000] font-extrabold", products: "3,800+" },
  { name: "Adidas", logo: "adidas", style: "text-[#000000] font-black lowercase", products: "4,500+" },
  { name: "boAt", logo: "boAt", style: "text-[#1B1B1B] font-extrabold", products: "2,900+" },
  { name: "Samsung", logo: "SAMSUNG", style: "text-[#1428A0] font-extrabold", products: "6,200+" },
  { name: "OnePlus", logo: "1+ OnePlus", style: "text-[#EB0028] font-extrabold", products: "2,400+" },
  // Row 3
  { name: "Philips", logo: "PHILIPS", style: "text-[#0B5ED7] font-extrabold", products: "3,100+" },
  { name: "Realme", logo: <span className="bg-[#FFD700] text-black px-2 rounded-lg">realme</span>, style: "font-extrabold", products: "2,800+" },
  { name: "American Tourister", logo: "AMERICAN TOURISTER", style: "text-[#E31E2D] font-bold text-sm", products: "1,900+" },
  { name: "WOW Skin Science", logo: "WOW Skin Science", style: "text-[#00B140] font-extrabold", products: "1,600+" },
  { name: "Levi's", logo: "Levi's", style: "text-[#C41230] font-extrabold italic", products: "4,000+" },
  { name: "Dyson", logo: "dyson", style: "text-[#CC0099] font-extrabold lowercase", products: "1,200+" },
];

const CATEGORIES = [
  { name: "Electronics", icon: Laptop, color: "#4A90E2", bg: "#EBF4FF", products: "3,200+", href: "/categories/electronics" },
  { name: "Fashion", icon: Shirt, color: "#FF6B9D", bg: "#FFF0F5", products: "8,500+", href: "/categories/fashion" },
  { name: "Beauty & Personal Care", icon: Sparkles, color: "#9B59B6", bg: "#F5EEFF", products: "4,100+", href: "/categories/beauty" },
  { name: "Home & Kitchen", icon: Home, color: "#E67E22", bg: "#FFF3E0", products: "5,600+", href: "/categories/home" },
  { name: "Sports & Fitness", icon: Trophy, color: "#F39C12", bg: "#FFFDE7", products: "2,800+", href: "/categories/sports" },
  { name: "Toys & Games", icon: Gamepad, color: "#E91E63", bg: "#FCE4EC", products: "1,900+", href: "/categories/toys" },
  { name: "Automotive", icon: Car, color: "#607D8B", bg: "#ECEFF1", products: "2,200+", href: "/categories/automotive" },
  { name: "Books & Stationery", icon: BookOpen, color: "#3498DB", bg: "#E3F2FD", products: "1,300+", href: "/categories/books" },
];

const TRUST_ITEMS = [
  { icon: BadgeCheck, title: "100% Verified Listings", subtitle: "All brands and products are manually verified for you." },
  { icon: Tag, title: "Best Prices", subtitle: "Get the best prices & amazing offers on all top brands." },
  { icon: Users, title: "Trusted by Shoppers", subtitle: "Join 500K+ happy shoppers who trust us every day." },
  { icon: Shield, title: "Safe & Secure", subtitle: "Your data is always safe with us." },
];

export default function ProductsPageContent() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#19798d] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-24">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[320px]">
          {/* Left Content */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
              Explore Top Brands.
            </h1>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#19798d] leading-tight mt-1">
              Discover Best Products.
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-3 max-w-lg">
              Find amazing products from top brands and save more with verified coupons.
            </p>

            <div className="mt-8 flex border-2 border-[#e0e0e0] rounded-xl overflow-hidden shadow-sm max-w-[400px] focus-within:border-[#19798d] transition-colors">
              <input 
                type="text" 
                placeholder="Search for brands or products..." 
                className="flex-1 px-4 py-3 text-sm outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="bg-[#19798d] text-white px-6 py-3 font-bold hover:bg-[#0f5a6b] transition-all">
                Search
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
              {[
                { icon: Store, val: "1500+", label: "Brands" },
                { icon: Package, val: "10K+", label: "Products" },
                { icon: Users, val: "500K+", label: "Happy Shoppers" },
                { icon: BadgeCheck, val: "100%", label: "Verified Listings" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <stat.icon className="w-4.5 h-4.5 text-[#19798d]" />
                  <div>
                    <span className="text-sm font-bold text-black block leading-none">{stat.val}</span>
                    <span className="text-[10px] text-gray-500 font-medium">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration Area */}
          <div className="hidden md:flex md:w-[55%] bg-gradient-to-br from-[#e8f6f8] to-white relative items-center justify-center overflow-hidden">
            <div className="absolute w-[280px] h-[280px] bg-[#e8f6f8] rounded-full blur-3xl opacity-60"></div>
            
            {/* Logos */}
            <div className="absolute top-[15%] left-[10%] bg-white rounded-2xl shadow-lg p-3 w-14 h-14 flex items-center justify-center text-2xl animate-bounce">🍎</div>
            <div className="absolute top-[10%] left-[45%] bg-white rounded-2xl shadow-lg p-3 w-14 h-14 flex items-center justify-center font-extrabold text-[#FF3F6C] text-2xl">M</div>
            <div className="absolute top-[15%] right-[10%] bg-white rounded-2xl shadow-lg p-3 w-14 h-14 flex items-center justify-center font-black text-2xl">✓</div>
            <div className="absolute bottom-[15%] left-[15%] bg-white rounded-2xl shadow-lg p-3 w-14 h-14 flex items-center justify-center font-extrabold text-[#FF9900] text-3xl">a</div>

            {/* Product Emojis */}
            <div className="text-8xl relative z-10 select-none animate-pulse">📱</div>
            <div className="absolute left-[30%] top-[45%] text-6xl animate-bounce" style={{ animationDuration: '3s' }}>👟</div>
            <div className="absolute right-[30%] top-[40%] text-6xl animate-bounce" style={{ animationDuration: '4s' }}>🎧</div>
            <div className="absolute bottom-[25%] left-[45%] text-6xl animate-pulse">⌚</div>
            <div className="absolute right-[25%] bottom-[30%] text-6xl animate-bounce" style={{ animationDuration: '5s' }}>👜</div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0] mt-6">
        <div className="container mx-auto px-4 max-w-7xl py-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#19798d] hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-700 font-medium">Products</span>
        </div>
      </div>

      {/* Top Brands */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-extrabold text-black">Top Brands</h2>
            <Link href="/stores" className="text-[#19798d] font-medium text-sm hover:underline">View All Brands →</Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TOP_BRANDS.map((brand, i) => {
              const content = (
                <div 
                  className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 text-center hover:shadow-lg hover:border-[#19798d] hover:-translate-y-1 transition-all duration-300 cursor-pointer group h-full"
                >
                  <div className="h-[60px] flex items-center justify-center mb-3">
                    <div className={cn("transition-transform group-hover:scale-110", brand.style)}>
                      {brand.logo}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-black">{brand.name}</h3>
                  <p className="text-gray-500 text-[10px] uppercase font-bold mt-1">{brand.products} Products</p>
                </div>
              );

              if (brand.name === "Amazon") {
                return (
                  <Link key={i} href="/products/amazon" className="block">
                    {content}
                  </Link>
                );
              }

              return <div key={i}>{content}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="mb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4">
                <div className="relative">
                  <span className="text-5xl">🛍️</span>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#19798d] rounded-full flex items-center justify-center text-white text-[10px] font-black border-2 border-white shadow-sm">
                    %
                  </div>
                </div>
                <div>
                  <h3 className="text-black font-extrabold text-xl">Love top brands?</h3>
                  <p className="text-gray-600 text-sm mt-0.5">Save more with exclusive coupons & offers</p>
                </div>
             </div>
             <Link 
               href="/deals" 
               className="bg-[#19798d] text-white px-7 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#0f5a6b] shadow-md hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
             >
               Explore Deals <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-extrabold text-black">Shop by Category</h2>
            <Link href="/categories" className="text-[#19798d] font-medium text-sm hover:underline">View All Categories →</Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
            {CATEGORIES.map((cat, i) => (
              <Link 
                key={i} 
                href={cat.href}
                className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5 text-center hover:shadow-md hover:border-[#19798d] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div 
                  className="w-[52px] h-[52px] rounded-full mx-auto flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: cat.bg }}
                >
                  <cat.icon className="w-6 h-6" style={{ color: cat.color }} />
                </div>
                <h3 className="text-xs font-extrabold text-black mt-3 leading-tight truncate">{cat.name}</h3>
                <p className="text-gray-500 text-[9px] uppercase font-bold mt-1">{cat.products} Products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#f5f5f5] py-8 border-y border-[#f0f0f0]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_ITEMS.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-11 h-11 bg-white border border-[#f0f0f0] rounded-full shrink-0 flex items-center justify-center shadow-sm text-[#19798d]">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-black font-extrabold text-sm">{item.title}</h4>
                  <p className="text-gray-500 text-[11px] leading-tight mt-1">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Text Section */}
      <section className="w-full bg-[#f5f5f5] py-10 px-4">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-[#000000] font-bold text-[22px] leading-tight">
            Explore the Best Products & Deals from Top Brands Worldwide
          </h2>
          <p className="text-[#555555] text-[15px] leading-relaxed mt-4">
            Discover thousands of top-rated products across every category — from electronics and fashion to beauty, travel, and home essentials. Coupons Clouds brings you the most up-to-date deals, verified discount codes, and exclusive offers from over 2,000 trusted brands worldwide. Whether you're hunting for the latest gadgets, trending fashion, or everyday must-haves, our platform ensures you always shop smarter and save more.
          </p>

          <h3 className="text-[#000000] font-bold text-[17px] leading-tight mt-6">
            Why Shop Through Coupons Clouds?
          </h3>
          <p className="text-[#555555] text-[15px] leading-relaxed mt-4">
            Every product deal listed on Coupons Clouds is hand-verified by our team to ensure accuracy and maximum savings. We partner directly with leading global brands like Amazon, Flipkart, Nike, Samsung, Myntra, and hundreds more to bring you real-time discounts that actually work. No fake codes, no expired offers — just genuine savings on the products you love, updated daily.
          </p>

          <h3 className="text-[#000000] font-bold text-[17px] leading-tight mt-6">
            Shop Across Every Category
          </h3>
          <p className="text-[#555555] text-[15px] leading-relaxed mt-4">
            From cutting-edge electronics and stylish apparel to health & pharma, food & dining, sports equipment, and travel bookings — Coupons Clouds covers every shopping category imaginable. Use our smart search and category filters to find exactly what you need in seconds, and never pay full price again.
          </p>
        </div>
      </section>

      {/* Newsletter Strip */}
      <section className="bg-[#19798d] py-12 text-center md:text-left">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-5xl">✉️</span>
              <div>
                <h2 className="text-white font-black text-2xl leading-tight">Never Miss a Great Deal!</h2>
                <p className="text-white opacity-80 text-sm mt-1 max-w-lg">Subscribe to get the latest coupons, deals & exclusive offers straight to your inbox.</p>
              </div>
            </div>
            <div className="w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 w-full bg-white rounded-xl py-3.5 px-5 text-sm font-medium outline-none focus:ring-2 focus:ring-white transition-all shadow-xl" 
                />
                <button className="bg-black text-white px-8 py-3.5 rounded-xl font-black text-sm hover:bg-gray-800 transition-all active:scale-95 shadow-xl whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-white/60 text-[11px] font-bold mt-3 text-center sm:text-left sm:pl-2">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
