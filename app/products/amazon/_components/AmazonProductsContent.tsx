"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  ChevronLeft,
  Heart, 
  Star, 
  Package, 
  Grid, 
  BadgeCheck, 
  Truck, 
  RefreshCw, 
  Shield, 
  Laptop, 
  Shirt, 
  Home as HomeIcon, 
  Sparkles, 
  BookOpen, 
  Trophy, 
  Gamepad, 
  X, 
  Filter, 
  ChevronDown, 
  ShoppingCart, 
  ExternalLink,
  Copy,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

// --- Types ---
interface Product {
  id: string;
  name: string;
  keyword: string;
  discount: string;
  rating: number;
  reviews: string;
  salePrice: string;
  originalPrice: string;
  discountAmt: string;
}

// --- Data ---
const AMAZON_PRODUCTS: Product[] = [
  { id: "p1", name: "boAt Rockerz 450 Pro Bluetooth Wireless Headphones", keyword: "headphones", discount: "28% OFF", rating: 4.5, reviews: "12,450", salePrice: "2,499", originalPrice: "3,499", discountAmt: "28%" },
  { id: "p2", name: "Fire-Boltt Ninja 3 Plus Smartwatch", keyword: "smartwatch", discount: "35% OFF", rating: 4.4, reviews: "8,750", salePrice: "1,699", originalPrice: "2,599", discountAmt: "35%" },
  { id: "p3", name: "Puma Men's Running Shoes (Blue)", keyword: "running shoes", discount: "20% OFF", rating: 4.3, reviews: "6,250", salePrice: "1,999", originalPrice: "2,499", discountAmt: "20%" },
  { id: "p4", name: "Philips HD9252/90 Air Fryer", keyword: "air fryer", discount: "18% OFF", rating: 4.6, reviews: "9,150", salePrice: "7,349", originalPrice: "8,999", discountAmt: "18%" },
  { id: "p5", name: "HP 15s, 12th Gen Intel Core i5 Laptop (8GB/512GB SSD)", keyword: "laptop", discount: "32% OFF", rating: 4.4, reviews: "3,250", salePrice: "39,990", originalPrice: "58,999", discountAmt: "32%" },
  { id: "p6", name: "Apple iPhone 15 (128GB) - Blue", keyword: "iphone smartphone", discount: "25% OFF", rating: 4.8, reviews: "1,850", salePrice: "69,900", originalPrice: "79,900", discountAmt: "25%" },
  { id: "p7", name: "American Tourister 32L Laptop Backpack", keyword: "backpack", discount: "30% OFF", rating: 4.5, reviews: "4,250", salePrice: "1,399", originalPrice: "1,999", discountAmt: "30%" },
  { id: "p8", name: "Armaf Club de Nuit Intense Men Eau de Parfum (105ml)", keyword: "perfume", discount: "20% OFF", rating: 4.4, reviews: "2,950", salePrice: "2,099", originalPrice: "2,699", discountAmt: "20%" },
  { id: "p9", name: "Bajaj Rex 500W Mixer Grinder with 3 Jars", keyword: "mixer grinder", discount: "15% OFF", rating: 4.3, reviews: "6,450", salePrice: "1,599", originalPrice: "1,899", discountAmt: "15%" },
  { id: "p10", name: "Atomic Habits by James Clear", keyword: "book reading", discount: "40% OFF", rating: 4.8, reviews: "11,250", salePrice: "239", originalPrice: "399", discountAmt: "40%" },
  { id: "p11", name: "Adidas Men's Sneakers (Black/White)", keyword: "sneakers", discount: "30% OFF", rating: 4.4, reviews: "3,750", salePrice: "2,099", originalPrice: "2,999", discountAmt: "30%" },
  { id: "p12", name: "Skybags Cabin Luggage (55cm)", keyword: "luggage trolley", discount: "21% OFF", rating: 4.3, reviews: "2,150", salePrice: "2,849", originalPrice: "3,599", discountAmt: "21%" },
];

export default function AmazonProductsContent() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [activeTab, setActiveTab] = useState("All (15000)");

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#19798d] selection:text-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0] mt-[64px]">
        <div className="container mx-auto px-4 max-w-7xl py-3 flex items-center gap-2 text-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link href="/" className="text-[#19798d] hover:underline shrink-0">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <Link href="/products" className="text-[#19798d] hover:underline shrink-0">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-gray-700 font-medium shrink-0">Amazon</span>
        </div>
      </div>

      {/* Brand Hero Header */}
      <div className="container mx-auto px-4 mt-6">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex flex-col lg:flex-row lg:h-[280px]">
          {/* Left Content */}
          <div className="flex-1 p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-[100px] h-[100px] rounded-2xl border-2 border-[#f0f0f0] shadow-md bg-white flex items-center justify-center shrink-0">
                <span className="text-[#FF9900] font-extrabold text-2xl sm:text-3xl">amazon</span>
              </div>
              <div className="flex-1">
                <h1 className="text-black font-extrabold text-3xl">Amazon Products</h1>
                <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">
                  Explore 15,000+ amazing products across multiple categories. Shop the best. Save more.
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                   <button className="border-1.5 border-[#f0f0f0] rounded-full px-4 py-2 flex items-center gap-2 text-gray-600 text-sm hover:border-[#19798d] hover:text-[#19798d] transition-all">
                     <Heart className="w-4 h-4 text-gray-400 group-hover:text-[#19798d]" />
                     Add to Favorites
                   </button>
                   <div className="flex items-center gap-1.5">
                     <div className="flex items-center">
                       {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                       <Star className="w-4 h-4 text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} strokeWidth={2} />
                       <Star className="w-4 h-4 text-gray-200 absolute opacity-0" />
                     </div>
                     <span className="text-black font-bold text-sm">4.5</span>
                     <span className="text-gray-400 text-sm">(12.5K Reviews)</span>
                   </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 mt-6 border-t border-[#f0f0f0] pt-6">
              {[
                { icon: Package, val: "15,000+", label: "Products" },
                { icon: Grid, val: "100+", label: "Categories" },
                { icon: Star, val: "4.5 ★", label: "Average Rating", color: "text-[#FF9900]" },
                { icon: BadgeCheck, val: "100%", label: "Original Products" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <stat.icon className={cn("w-4 h-4", stat.color || "text-[#19798d]")} />
                  <div>
                    <span className="text-black font-bold text-sm block leading-none">{stat.val}</span>
                    <span className="text-gray-500 text-[10px] uppercase font-bold">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:flex lg:w-[60%] bg-gradient-to-br from-[#FFF8E7] to-[#FFF3CD] relative items-center justify-center overflow-hidden">
             <div className="absolute w-[260px] h-[260px] bg-[#e8f6f8] rounded-full blur-3xl opacity-60"></div>
             
             <div className="text-8xl relative z-10 select-none -translate-x-12 animate-pulse">🎧</div>
             <div className="absolute right-[30%] top-[40%] text-7xl animate-bounce" style={{ animationDuration: '3s' }}>📦</div>
             <div className="absolute right-[10%] top-[45%] text-6xl animate-bounce" style={{ animationDuration: '4.5s' }}>👟</div>
             <div className="absolute bottom-[20%] left-[30%] text-5xl animate-pulse">📷</div>
             <div className="absolute bottom-[25%] right-[25%] text-5xl animate-bounce" style={{ animationDuration: '5s' }}>⌚</div>

             <div className="absolute top-6 right-8 w-[90px] h-[90px] bg-[#19798d] rounded-full flex flex-col items-center justify-center text-white p-3 text-center leading-tight shadow-xl shadow-[#19798d]/20 animate-wiggle">
               <span className="text-[10px] font-black uppercase">Best Brands</span>
               <span className="text-[10px] font-black mt-0.5">Lowest Prices</span>
             </div>

             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                <span className="text-[#FF9900] font-black text-2xl tracking-tighter">amazon</span>
                <div className="w-24 h-4 bg-transparent border-b-2 border-[#FF9900] rounded-[50%] mx-auto -mt-2"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Sections 3 Trust Bar */}
      <div className="bg-white border-y border-[#f0f0f0] py-5 mt-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x-0 lg:divide-x lg:divide-[#f0f0f0]">
            {[
              { icon: Heart, title: "Great Prices", sub: "Lower prices on millions of products" },
              { icon: Truck, title: "Fast Delivery", sub: "Quick & reliable delivery options" },
              { icon: RefreshCw, title: "Easy Returns", sub: "Hassle-free returns on eligible items" },
              { icon: Shield, title: "Secure Payments", sub: "100% secure payment methods" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 lg:pl-6 first:lg:pl-0">
                <div className="w-11 h-11 bg-[#e8f6f8] rounded-full shrink-0 flex items-center justify-center text-[#19798d]">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-black font-extrabold text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-[11px] leading-tight mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar */}
          <aside className="lg:w-[22%] shrink-0">
            <div className="sticky top-20 space-y-4">
              
              {/* Category Filter */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5 pb-4">
                <h3 className="text-black font-extrabold text-base mb-4">Categories</h3>
                <div className="space-y-1">
                  {[
                    { icon: Laptop, name: "Electronics", count: "3,250", color: "text-[#4A90E2]" },
                    { icon: Shirt, name: "Fashion", count: "2,450", color: "text-[#FF6B9D]" },
                    { icon: HomeIcon, name: "Home & Kitchen", count: "2,150", color: "text-[#E67E22]" },
                    { icon: Sparkles, name: "Beauty & Personal Care", count: "1,650", color: "text-[#9B59B6]" },
                    { icon: BookOpen, name: "Books", count: "1,250", color: "text-[#3498DB]" },
                    { icon: Trophy, name: "Sports & Outdoors", count: "1,100", color: "text-[#F39C12]" },
                    { icon: Gamepad, name: "Toys & Games", count: "900", color: "text-[#E91E63]" },
                  ].map((cat, i) => (
                    <div key={i} className="flex justify-between items-center py-2.5 border-b border-[#f0f0f0] last:border-0 cursor-pointer group text-gray-700 hover:text-[#19798d] transition-all">
                      <div className="flex items-center gap-2.5">
                        <cat.icon className={cn("w-3.5 h-3.5 transition-colors", cat.color)} />
                        <span className="text-sm font-medium">{cat.name}</span>
                      </div>
                      <span className="text-gray-400 text-[10px] font-bold">{cat.count}</span>
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-1.5 text-[#19798d] text-[11px] font-black uppercase tracking-widest mt-4 hover:underline">
                  View All Categories <ChevronDown className="w-3 h-3" />
                </button>
              </div>

              {/* Price Range Filter */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                <h3 className="text-black font-extrabold text-base mb-4">Price Range</h3>
                <div className="space-y-3">
                  {["Under ₹500", "₹500 - ₹1,000", "₹1,000 - ₹5,000", "₹5,000 - ₹10,000", "Above ₹10,000"].map((opt) => (
                    <label key={opt} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-2.5">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#19798d] focus:ring-[#19798d]" />
                        <span className="text-gray-700 text-sm font-medium group-hover:text-black transition-colors">{opt}</span>
                      </div>
                      <span className="text-gray-400 text-[10px] font-bold">(2,150)</span>
                    </label>
                  ))}
                </div>
                <div className="mt-6">
                  <input type="range" className="w-full h-1.5 bg-[#f0f0f0] rounded-lg appearance-none cursor-pointer accent-[#19798d]" />
                  <div className="flex justify-between mt-2 text-gray-500 font-bold text-[10px]">
                    <span>₹0</span>
                    <span>₹50,000+</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                <h3 className="text-black font-extrabold text-base mb-4">Customer Rating</h3>
                <div className="space-y-3">
                  {[5, 4, 3, 2].map((num) => (
                    <label key={num} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-2.5">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#19798d] focus:ring-[#19798d]" />
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={cn("w-3 h-3", i < num ? "fill-yellow-400 text-yellow-400" : "text-gray-200")} />
                          ))}
                          {num < 5 && <span className="text-gray-600 text-xs font-medium ml-1">& above</span>}
                        </div>
                      </div>
                      <span className="text-gray-400 text-[10px] font-bold">({num === 5 ? "4,520" : num === 4 ? "8,250" : num === 3 ? "10,320" : "12,150"})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Discount Filter */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                <h3 className="text-black font-extrabold text-base mb-4">Discount</h3>
                <div className="space-y-3 mb-5">
                  {["10%", "20%", "30%", "40%"].map(d => (
                    <label key={d} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-2.5">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#19798d] focus:ring-[#19798d]" />
                        <span className="text-gray-700 text-sm font-medium">{d} and above</span>
                      </div>
                      <span className="text-gray-400 text-[10px] font-bold">(4,520)</span>
                    </label>
                  ))}
                </div>
                <button className="w-full border-1.5 border-[#e0e0e0] rounded-xl py-2.5 text-xs font-black text-gray-500 flex items-center justify-center gap-2 hover:border-red-400 hover:text-red-500 transition-all uppercase tracking-widest">
                  <X className="w-3.5 h-3.5" /> Clear Filters
                </button>
              </div>

            </div>
          </aside>

          {/* Right Column - Products */}
          <main className="flex-1 min-w-0">
            <div className="mb-6">
              <h2 className="text-black font-extrabold text-xl">All Amazon Products</h2>
              <p className="text-gray-500 font-bold text-xs mt-0.5 uppercase tracking-tighter">Showing 1 — 20 of 15,000+ products</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
               <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                 {["All (15000)", "Electronics (3250)", "Fashion (2450)", "Home & Kitchen (2150)", "Beauty (1650)"].map(tab => (
                   <button 
                     key={tab} 
                     onClick={() => setActiveTab(tab)}
                     className={cn(
                       "px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap",
                       activeTab === tab ? "bg-[#19798d] text-white shadow-lg shadow-[#19798d]/20" : "bg-white border border-[#e0e0e0] text-gray-600 hover:bg-gray-50"
                     )}
                   >
                     {tab}
                   </button>
                 ))}
               </div>
               <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <span className="text-gray-400 text-[10px] uppercase font-black tracking-widest">Sort by:</span>
                    <div className="border border-[#e0e0e0] rounded-lg px-3 py-1.5 flex items-center gap-2 bg-white group-hover:border-[#19798d] transition-all">
                       <span className="text-black text-xs font-bold">Most Popular</span>
                       <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#19798d]" />
                    </div>
                  </div>
                  <button className="border border-[#e0e0e0] rounded-lg px-3 py-1.5 flex items-center gap-2 bg-white hover:border-[#19798d] transition-all">
                    <Filter className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-black text-xs font-bold">Filter</span>
                  </button>
               </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {AMAZON_PRODUCTS.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex flex-col group hover:shadow-xl hover:border-[#19798d] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-[180px] sm:h-[200px] bg-white relative flex items-center justify-center p-4">
                    <img 
                      src={`https://source.unsplash.com/300x300/?${product.keyword}`} 
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-0 left-0 bg-[#FF9900] text-white text-[10px] font-black uppercase tracking-widest rounded-br-xl px-2.5 py-1 shadow-sm">
                      {product.discount}
                    </div>
                  </div>
                  <div className="p-3.5 sm:p-4 flex flex-col flex-1">
                    <h3 className="text-black font-extrabold text-[13px] sm:text-sm line-clamp-2 leading-snug h-[32px] sm:h-[36px] mb-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2.5">
                       <div className="flex items-center gap-0.5">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} className={cn("w-2.5 h-2.5", i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200")} />
                         ))}
                       </div>
                       <span className="text-gray-600 font-bold text-[10px] ml-0.5">{product.rating}</span>
                       <span className="text-gray-400 font-medium text-[10px]">({product.reviews})</span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                       <span className="text-black font-extrabold text-base">₹{product.salePrice}</span>
                       <span className="text-gray-400 text-xs line-through">₹{product.originalPrice}</span>
                       <span className="bg-[#FFF3E0] text-[#E65100] text-[9px] font-black uppercase rounded-full px-2 py-0.5">
                         {product.discountAmt}
                       </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#22c55e] mb-4">
                       <Truck className="w-3 h-3" />
                       <span className="text-[10px] font-black uppercase tracking-tight">FREE Delivery</span>
                    </div>
                    <div className="mt-auto flex items-center gap-2">
                       <button 
                         onClick={() => setSelectedProduct(product)}
                         className="flex-1 border-1.5 border-[#19798d] text-[#19798d] rounded-xl text-xs font-black uppercase tracking-widest py-2 hover:bg-[#19798d] hover:text-white transition-all active:scale-95"
                       >
                         View Product
                       </button>
                       <button className="w-9 h-9 shrink-0 border border-[#f0f0f0] rounded-xl flex items-center justify-center text-[#19798d] hover:bg-[#e8f6f8] hover:border-[#19798d] transition-all">
                         <ShoppingCart className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-2">
              <button className="border border-[#f0f0f0] rounded-lg p-2.5 text-gray-400 hover:border-[#19798d] hover:text-[#19798d] transition-all bg-white">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {[1, 2, 3, 4, 5, "...", 750].map((page, i) => (
                <button 
                  key={i} 
                  className={cn(
                    "min-w-[40px] h-10 border border-[#f0f0f0] rounded-lg text-sm font-bold flex items-center justify-center transition-all px-2",
                    page === 1 ? "bg-[#19798d] text-white border-[#19798d] shadow-lg shadow-[#19798d]/20" : "bg-white text-gray-500 hover:border-[#19798d] hover:text-[#19798d]"
                  )}
                >
                  {page}
                </button>
              ))}
              <button className="border border-[#f0f0f0] rounded-lg p-2.5 text-gray-400 hover:border-[#19798d] hover:text-[#19798d] transition-all bg-white">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </main>

        </div>
      </div>

      {/* Section 6 Bottom Promo */}
      <section className="bg-[#19798d] py-12 relative overflow-hidden">
        <div className="absolute right-[-5%] bottom-[-20%] text-9xl opacity-10 pointer-events-none select-none">🛍️</div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
           <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="flex items-center gap-6 text-center md:text-left flex-col md:flex-row">
                 <div className="relative shrink-0">
                    <span className="text-6xl md:text-7xl drop-shadow-xl">🛍️</span>
                    <div className="absolute -top-1 -right-1 w-10 h-10 bg-[#FF9900] rounded-full flex items-center justify-center text-white text-base font-black border-4 border-[#19798d] shadow-lg">
                      %
                    </div>
                 </div>
                 <div>
                    <h2 className="text-white font-black text-2xl md:text-3xl leading-tight">Love Shopping with Amazon?</h2>
                    <p className="text-white opacity-80 text-sm md:text-base mt-2 max-w-xl">
                      Don't miss out on amazing deals & discounts. Grab the best offers now and save big on your next purchase!
                    </p>
                 </div>
              </div>
              <Link 
                href="/stores/amazon" 
                className="bg-white text-[#19798d] px-8 py-4 rounded-2xl font-black text-sm md:text-base flex items-center gap-3 hover:shadow-2xl hover:scale-105 transition-all active:scale-95 whitespace-nowrap shadow-xl"
              >
                Explore Amazon Deals <ArrowRight className="w-5 h-5" />
              </Link>
           </div>
        </div>
      </section>

      {/* Section 7 Bottom Trust Bar */}
      <div className="bg-white border-t border-[#f0f0f0] py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BadgeCheck, title: "100% Original Products", sub: "Sourced directly from brand" },
              { icon: Truck, title: "Fast & Free Delivery", sub: "On eligible orders" },
              { icon: RefreshCw, title: "Easy Returns", sub: "Within 7 days" },
              { icon: Shield, title: "Secure Payments", sub: "100% secure checkout" }
            ].map((item, i) => (
              <div key={i} className="flex gap-3.5 items-center">
                <div className="w-10 h-10 bg-[#e8f6f8] rounded-full shrink-0 flex items-center justify-center text-[#19798d]">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-black font-extrabold text-sm leading-tight">{item.title}</h4>
                  <p className="text-gray-500 text-[10px] font-bold uppercase mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
           <div 
             className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
             onClick={() => setSelectedProduct(null)}
           />
           <div 
             className="relative bg-white w-full max-w-[500px] rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
             onClick={(e) => e.stopPropagation()}
           >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-500 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-[#f5f5f5] h-[220px] relative p-8 flex items-center justify-center">
                 <img 
                   src={`https://source.unsplash.com/600x600/?${selectedProduct.keyword}`} 
                   alt={selectedProduct.name}
                   className="w-full h-full object-contain mix-blend-multiply" 
                 />
                 <div className="absolute top-6 left-6 bg-[#FF9900] text-white text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-br-2xl shadow-lg">
                   {selectedProduct.discount}
                 </div>
              </div>

              <div className="p-6 md:p-8">
                 <h2 className="text-black font-black text-xl leading-tight">{selectedProduct.name}</h2>
                 <div className="flex items-center gap-2 mt-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn("w-3.5 h-3.5", i < Math.floor(selectedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200")} />
                      ))}
                    </div>
                    <span className="text-black font-black text-sm ml-1">{selectedProduct.rating}</span>
                    <span className="text-gray-400 font-bold text-xs">({selectedProduct.reviews} reviews)</span>
                 </div>

                 <div className="flex items-center gap-4 mt-6">
                    <span className="text-black font-black text-3xl">₹{selectedProduct.salePrice}</span>
                    <div className="flex flex-col">
                      <span className="text-gray-400 line-through font-bold text-sm leading-none">₹{selectedProduct.originalPrice}</span>
                      <span className="text-[#E65100] font-black text-xs uppercase tracking-tighter mt-1 bg-[#FFF3E0] px-1.5 rounded-md inline-block">
                        {selectedProduct.discountAmt} OFF
                      </span>
                    </div>
                 </div>

                 <div className="flex items-center gap-2 text-[#22c55e] mt-3 font-black text-sm uppercase tracking-tight">
                    <Truck className="w-4 h-4" />
                    FREE Delivery
                 </div>

                 <div className="h-px bg-[#f0f0f0] my-6" />

                 <div className="space-y-2">
                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-[2px]">APPLY COUPON FOR EXTRA SAVINGS</span>
                    <div 
                      className="bg-[#e8f6f8] border-2 border-dashed border-[#19798d] rounded-2xl p-4 flex items-center justify-between group cursor-pointer active:scale-95 transition-transform"
                      onClick={() => handleCopy("AMAZON60")}
                    >
                       <span className="text-[#19798d] font-mono font-black text-2xl tracking-widest shrink-0">AMAZON60</span>
                       <div className="flex items-center gap-2 bg-[#19798d] text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#19798d]/20 transition-all group-hover:scale-105">
                         <Copy className="w-3.5 h-3.5" /> Copy Code
                       </div>
                    </div>
                    <p className="text-gray-400 text-[10px] text-center font-bold">Simply click on the box and copy the code</p>
                 </div>

                 <div className="flex gap-3 mt-6">
                    {[
                      { label: "Discount", val: "60% OFF" },
                      { label: "Delivery", val: "FREE" },
                      { label: "Rating", val: "4.5 ★" }
                    ].map((box, i) => (
                      <div key={i} className="flex-1 bg-[#f5f5f5] rounded-xl p-3 text-center">
                         <p className="text-gray-400 text-[9px] font-black uppercase tracking-tight leading-none mb-1.5">{box.label}</p>
                         <p className="text-black font-black text-sm truncate">{box.val}</p>
                      </div>
                    ))}
                 </div>

                 <div className="mt-8 space-y-4">
                    <button 
                      onClick={() => window.open('https://www.amazon.in', '_blank')}
                      className="w-full bg-[#FF9900] text-white rounded-2xl py-4 font-black text-base shadow-xl shadow-[#FF9900]/20 flex items-center justify-center gap-3 hover:bg-[#e67e00] transition-all active:scale-[0.98]"
                    >
                      View on Amazon <ExternalLink className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setSelectedProduct(null)}
                      className="w-full text-[#19798d] font-black text-xs uppercase tracking-widest hover:underline text-center"
                    >
                      ← Back to Products
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Toast Notification */}
      <div className={cn(
        "fixed top-6 right-6 z-[110] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-[#f0f0f0] p-4 flex items-center gap-4 transition-all duration-300 transform",
        showToast ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0 pointer-events-none"
      )}>
        <div className="w-11 h-11 bg-green-50 rounded-full flex items-center justify-center text-[#22c55e]">
          <CheckCircle className="w-5 h-5" />
        </div>
        <div>
          <p className="text-black font-black text-sm">Code Copied!</p>
          <p className="text-[#19798d] font-mono font-black text-xs mt-0.5 tracking-widest">AMAZON60</p>
        </div>
      </div>

    </div>
  );
}
