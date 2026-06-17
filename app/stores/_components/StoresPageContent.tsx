"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Store, 
  ShoppingBag, 
  Ticket, 
  Users, 
  CheckCircle, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  Laptop,
  Plane,
  Tv,
  Code,
  Zap,
  LayoutGrid, 
  Mail,
  ShieldCheck,
  Calendar,
  AlertTriangle,
  BadgeCheck,
  Tag
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { allStores } from "@/lib/stores-data";

export default function StoresPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Stores (2000+)");
  const [showAllLimit, setShowAllLimit] = useState(15);

  const tabs = [
    "All Stores (2000+)",
    "Popular",
    "Fashion",
    "Electronics",
    "Travel",
    "Beauty",
    "Home & Living",
    "Sports",
    "More ▾"
  ];

  // Filtering stores based on search query AND horizontal filter tabs
  const filteredStores = allStores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (selectedCategory === "All Stores (2000+)") return true;
    if (selectedCategory === "Popular") return store.popular;
    if (selectedCategory === "Fashion") return store.category === "Fashion";
    if (selectedCategory === "Electronics") return store.category === "Electronics";
    if (selectedCategory === "Travel") return store.category === "Travel";
    if (selectedCategory === "Beauty") return store.category === "Beauty";
    if (selectedCategory === "Home & Living") return store.category === "Home & Living";
    if (selectedCategory === "Sports") return store.category === "Sports";
    if (selectedCategory === "More ▾") return store.category === "More";
    return true;
  });

  const storesToDisplay = filteredStores.slice(0, showAllLimit);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />
      <main>

      {/* SECTION 1 — Hero (full-width, white bg) */}
      <section className="w-full bg-white py-4 border-b border-gray-100 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
                All Stores
              </h1>
              <p className="text-gray-500 text-base sm:text-lg mt-3 font-medium max-w-xl">
                Explore top stores and save big with verified coupons & exclusive deals.
              </p>

              {/* Search Bar */}
              <div className="w-full max-w-xl mt-6">
                <div className="flex bg-white items-center border-2 border-gray-100 rounded-2xl p-1 shadow-sm focus-within:border-[#056bfa] focus-within:shadow-md transition-all">
                  <div className="pl-4 pr-2 text-gray-400">
                    <Search className="w-5 h-5 pointer-events-none" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search for stores or brands..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-grow bg-transparent text-black text-sm outline-none placeholder:text-gray-400 py-3 block w-full font-medium"
                  />
                  <button 
                    onClick={() => {}}
                    className="bg-[#056bfa] hover:bg-[#0451c4] text-white font-extrabold text-sm rounded-xl px-6 py-3 transition-colors shrink-0"
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Stat Badges */}
              <div className="flex flex-wrap gap-2.5 mt-8">
                {[
                  { label: "2,000+ Stores", icon: Store, bg: "bg-teal-50 text-[#0344b0]" },
                  { label: "15,000+ Coupons & Deals", icon: Ticket, bg: "bg-blue-50 text-blue-700" },
                  { label: "500K+ Happy Shoppers", icon: Users, bg: "bg-purple-50 text-purple-700" },
                  { label: "100% Verified Stores", icon: CheckCircle, bg: "bg-emerald-50 text-emerald-700" }
                ].map((stat, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black tracking-wide shadow-sm font-sans uppercase border border-transparent hover:border-gray-200 transition-colors",
                      stat.bg
                    )}
                  >
                    <stat.icon className="w-3.5 h-3.5" />
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side — Decorative Illustration */}
<div className="lg:col-span-5 hidden lg:flex justify-end relative h-80">
  <div className="absolute inset-x-0 bottom-0 top-6 bg-gradient-to-tr from-[#e8f6f8] to-cyan-50/50 rounded-[40px] border border-gray-100 overflow-hidden">
    <img
      src="/all-stores.webp"
      alt="Shopping Banner"
      width={800}
      height={400}
      className="w-full h-full object-cover"
      fetchPriority="high"
      loading="lazy"
    />
  </div>
</div>

          </div>
        </div>
      </section>


      {/* SECTION 3 — Main Content (2 column layout: left ~70%, right sidebar ~30%) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          
          {/* LEFT — Top Stores (~70% space) */}
          <div className="lg:col-span-7">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-black">
                Top Stores
              </h2>
              {searchQuery && (
                <div className="text-xs bg-gray-100 text-[#056bfa] px-3 py-1.5 rounded-full font-bold">
                  Showing {filteredStores.length} results
                </div>
              )}
            </div>

        

            {/* Empty State */}
            {filteredStores.length === 0 && (
              <div className="bg-[#fcfdfd] border border-dashed border-gray-200 rounded-3xl p-12 text-center my-4">
                <Store className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-black font-extrabold text-lg">No Stores Found</h3>
                <p className="text-gray-400 text-sm mt-1 max-w-md mx-auto">
                  We couldn't find any stores matching "{searchQuery}". Check the spelling, try another category or explore all stores!
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Stores (2000+)");
                  }}
                  className="bg-[#056bfa] hover:bg-[#0451c4] text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl mt-5 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Store Grid (5-column responsive layout) */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {storesToDisplay.map((store, storeIdx) => {
                const storeSlug = store.id;
                return (
                  <div 
                    key={store.id}
                    className="bg-white border border-gray-100 rounded-2xl p-4 text-center transform hover:-translate-y-1 hover:shadow-xl hover:border-[#056bfa] transition-all duration-300 flex flex-col justify-between h-full group"
                  >
                    <div>
                      {/* Brand Logo Centered */}
                      <div className="h-14 flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={store.logo}
                          alt={store.name}
                          width={120}
                          height={48}
                          className="max-h-12 max-w-[120px] w-auto object-contain"
                          fetchPriority={storeIdx === 0 ? "high" : undefined}
                          loading={storeIdx > 0 ? "lazy" : undefined}
                        />
                      </div>

                      {/* Store Name */}
                      <h3 className="mt-3 font-extrabold text-black text-sm group-hover:text-[#056bfa] transition-colors line-clamp-1 truncate px-1">
                        {store.name}
                      </h3>

                      {/* Deal count */}
                      <p className="text-gray-400 text-[11px] font-bold mt-0.5">
                        {store.coupons} Coupons
                      </p>

                      {/* Discount display */}
                      <span className="text-xs font-black text-[#0344b0] uppercase tracking-wide mt-2.5 block bg-[#e8f6f8] py-1 px-2 rounded-lg leading-normal">
                        {store.discount}
                      </span>
                    </div>

                    {/* Outlined Custom Link Button */}
                    <div className="mt-4">
                      <Link
                        href={`/stores/${storeSlug}`}
                        aria-label={`View ${store.name} store`}
                        className="block w-full"
                      >
                        <button className="w-full text-center py-2 border border-[#056bfa] text-[#056bfa] hover:bg-[#056bfa] hover:text-white rounded-lg text-xs font-black transition-all duration-300">
                          View Store
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Show More Stores Button */}
            {filteredStores.length > showAllLimit && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setShowAllLimit(prev => prev + 15)}
                  className="inline-flex items-center gap-1.5 px-8 py-3.5 border-2 border-[#056bfa] text-[#056bfa] bg-white rounded-full font-black text-sm uppercase tracking-wider hover:bg-[#056bfa] hover:text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Show More Stores ▾
                </button>
              </div>
            )}
          </div>

          {/* RIGHT — Sticky Sidebar (~30% space) */}
          <div className="lg:col-span-3 space-y-6">
            <aside className="sticky top-24 self-start space-y-6">
              
              {/* Store Categories Card */}
              <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
                <h3 className="text-black font-black text-base uppercase tracking-wider pb-3 border-b border-gray-100 flex items-center gap-2">
                  <LayoutGrid className="w-5 h-5 text-[#056bfa]" />
                  Store Categories
                </h3>
                <div className="mt-4 space-y-1">
                  {[
                    { label: "Electronics",        count: "850+", icon: Laptop, href: "/categories/electronics" },
                    { label: "Travel",             count: "420+", icon: Plane,  href: "/categories/travel" },
                    { label: "Entertainment",      count: "210+", icon: Tv,     href: "/categories/entertainment" },
                    { label: "Software & Digital", count: "300+", icon: Code,   href: "/categories/software" },
                    { label: "Mobile & Telecom",   count: "320+", icon: Zap,    href: "/categories/mobile" },
                  ].map((cat, idx) => {
                    const IconComp = cat.icon;
                    return (
                      <Link
                        key={idx}
                        href={cat.href}
                        className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-gray-50 cursor-pointer group transition-colors"
                      >
                        <div className="flex items-center gap-3 text-gray-600 group-hover:text-black transition-colors">
                          <IconComp className="w-4 h-4 text-gray-400 group-hover:text-[#056bfa] transition-colors shrink-0" />
                          <span className="text-xs font-bold">{cat.label}</span>
                        </div>
                        <span className="text-[10px] font-black text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full group-hover:bg-[#e8f6f8] group-hover:text-[#056bfa] transition-colors leading-none">
                          {cat.count}
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <Link 
                  href="/categories" 
                  className="block text-center mt-4 pt-3 border-t border-gray-50 text-xs font-black text-[#056bfa] hover:text-[#0451c4] transition-colors uppercase tracking-wider"
                >
                  View All Categories →
                </Link>
              </div>

              {/* Promo Card */}
              <div className="bg-[#056bfa] rounded-3xl p-6 text-white relative overflow-hidden shadow-xl shadow-[#056bfa]/20">
                <h3 className="font-black text-xl leading-snug">
                  Big Savings on Top Stores!
                </h3>
                <p className="text-white/80 text-xs font-semibold leading-relaxed mt-1.5 max-w-[200px]">
                  Unlock exclusive coupons & up to 80% discount on select brands.
                </p>

                {/* Shopping Bag Woman Image representation */}
                <div className="w-full h-28 relative mt-4 overflow-hidden rounded-2xl bg-white/10 border border-white/10 hover:border-white/20 transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=300&h=200"
                    alt="Promo Offer"
                    width={300}
                    height={200}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#056bfa]/70 to-transparent pointer-events-none" />
                </div>

            
                {/* Visual elements */}
                <span className="absolute bottom-[-10%] right-[-10%] text-7xl select-none opacity-10 pointer-events-none">🎁</span>
              </div>

            
           

            </aside>
          </div>

        </div>
      </section>



      {/* SECTION: SEO Content — 2-column layout */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 items-start">

            {/* ── LEFT COLUMN ── */}
            <div className="lg:col-span-7 flex flex-col gap-14">

              {/* A — Intro */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight mb-3">
                Top Store Deals, Promo Codes & Online Discounts On Couponsbit
                </h2>
                <p className="text-lg font-bold text-[#056bfa] mb-5">Save More at Your Favorite Stores With Couponsbit</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Looking for the best store deals, verified promo codes, and online discounts from top brands? Couponsbit makes it easier to save money while shopping online by bringing together the latest deals, exclusive offers, and working coupon codes all in one place.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  From fashion and electronics to beauty, travel, food delivery, and lifestyle brands, Couponsbit helps shoppers discover better prices from stores they already love. Whether you’re shopping for everyday essentials or searching for limited-time sales, our platform is designed to help you unlock smarter savings every time you shop.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Online shoppers today expect convenience, value, and reliable discounts. However, finding active promo codes and genuine offers can often feel frustrating. Many coupon sites are filled with expired deals, misleading promotions, and outdated codes that waste time and create checkout disappointment.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  That’s why Couponsbit focuses on verified store deals and regularly updated offers that help shoppers save with confidence
                </p>
              </div>

              {/* B — Why Shop */}
              <div className="bg-[#f9fafb] rounded-2xl p-8">
                <h2 className="text-2xl font-black text-black mb-2">Why Shop Through Couponsbit Store Pages?</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
  { 
    icon: BadgeCheck, 
    title: "Verified Promo Codes & Deals", 
    desc: "Couponsbit focuses on quality deals that shoppers can actually use. Our team regularly reviews and updates coupon codes to reduce expired offers and improve user experience." 
  },
  { 
    icon: Calendar, 
    title: "Latest Sales & Discounts", 
    desc: "We constantly track seasonal promotions, limited-time sales, and trending store offers to ensure users always have access to fresh savings opportunities." 
  },
  { 
    icon: Tag, 
    title: "Easy Access to Store Coupons", 
    desc: "Each store page is designed to help users quickly find active promo codes, featured deals, and shopping offers without unnecessary clutter or confusion." 
  },
  { 
    icon: LayoutGrid, 
    title: "Better Online Shopping Experience", 
    desc: "Instead of searching multiple websites for discounts, shoppers can discover store-specific deals in one organized platform." 
  },
  { 
    icon: ShoppingBag, 
    title: "Free Savings Platform", 
    desc: "Couponsbit is completely free to use. Users can browse stores, reveal promo codes, and unlock savings instantly while shopping online." 
  },
].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#056bfa]/30 transition-all duration-300 group flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#e8f6f8] flex items-center justify-center shrink-0 group-hover:bg-[#056bfa] transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-[#056bfa] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* C — How To Use */}
              <div>
  <h2 className="text-2xl font-black text-black mb-2">How To Use Store Promo Codes on Couponsbit</h2>
  <p className="text-gray-500 text-sm font-medium mb-8">Saving money with Couponsbit is simple and takes only a few steps.</p>
  
  <div className="flex flex-col mb-6">
    {[
      { step: "1", title: "Step 1: Visit Your Favorite Store Page", desc: "Search for your preferred online store or browse popular categories on Couponsbit." },
      { step: "2", title: "Step 2: Find an Active Deal or Promo Code", desc: "Choose from available discounts, special offers, or exclusive coupon codes listed on the store page." },
      { step: "3", title: "Step 3: Copy the Promo Code", desc: "Click to reveal and copy the code instantly." },
      { step: "4", title: "Step 4: Shop on the Store Website", desc: "Visit the retailer’s website, add products to your cart, and continue to checkout." },
      { step: "5", title: "Step 5: Apply the Code & Save", desc: "Paste the promo code during checkout to enjoy instant savings on your order." },
    ].map((item, i, arr) => (
      <div key={i} className="flex gap-5 items-start">
        <div className="flex flex-col items-center shrink-0">
          <div className="w-10 h-10 rounded-full bg-[#056bfa] text-white flex items-center justify-center font-black text-sm shadow-md">
            {item.step}
          </div>
          {i < arr.length - 1 && <div className="w-0.5 h-8 bg-[#056bfa]/20 my-1" />}
        </div>
        <div className="pb-7">
          <h3 className="text-black font-extrabold text-sm mb-1">{item.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Added Bottom Content Note */}
  <p className="text-gray-500 text-sm font-medium leading-relaxed">
    Couponsbit helps shoppers save time, reduce spending, and discover better online deals effortlessly.
  </p>
</div>

              {/* E — Category Breakdown */}
              <div>
  <h2 className="text-2xl font-black text-black mb-2">Discover Deals Across Every Shopping Category</h2>
  
  <p className="text-gray-500 text-sm font-medium mb-6">Couponsbit helps shoppers save across a wide variety of categories and online stores.</p>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    {[
      { icon: Laptop, title: "Electronics & Tech Retailers", desc: "Explore deals on AR glasses, security cameras, gadgets, smart devices and consumer electronics.", color: "bg-blue-50 text-blue-600" },
      { icon: Plane, title: "Travel & Booking Platforms", desc: "Find travel deals on flights, hotels, vacation packages and booking services.", color: "bg-teal-50 text-teal-600" },
      { icon: Tv, title: "Entertainment & Events", desc: "Get discounts on event tickets for concerts, sports, theater and live entertainment shows.", color: "bg-purple-50 text-purple-600" },
      { icon: Code, title: "Software & Digital Products", desc: "Save on game keys, web hosting, creative assets, AI tools and SaaS subscriptions.", color: "bg-violet-50 text-violet-600" },
      { icon: Zap, title: "Mobile & Telecom Plans", desc: "Find the best deals on SIM plans, data packs and international calling packages.", color: "bg-green-50 text-green-600" },
      { icon: ShoppingBag, title: "More Top Stores", desc: "Browse all our verified partner stores and discover exclusive coupons across every category.", color: "bg-amber-50 text-amber-600" },
    ].map((item, i) => (
      <div key={i} className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-[#056bfa]/20 transition-all duration-300 group flex gap-4 items-start">
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", item.color.split(" ")[0])}>
          <item.icon className={cn("w-5 h-5", item.color.split(" ")[1])} />
        </div>
        <div>
          <h3 className="text-black font-extrabold text-sm mb-1 group-hover:text-[#056bfa] transition-colors">{item.title}</h3>
          <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Added Bottom Content Note */}
  <p className="text-gray-500 text-sm font-medium leading-relaxed">
    No matter what you shop for, Couponsbit helps users find smarter ways to save online.
  </p>
</div>

     <div>
                <h2 className="text-2xl font-black text-black mb-2">Why Verified Store Deals Matters</h2>
  
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  Online shoppers today want more than random discount codes. They want trusted savings that work at checkout.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Expired coupons, misleading offers, and fake discounts can create frustration and reduce trust in online coupon platforms. That’s why Couponsbit focuses on verified store deals and regularly updated offers designed to improve shopping confidence.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our goal is to make online savings simpler, faster, and more reliable for everyday shoppers.
                </p>
               
              </div>

                 <div>
                <h2 className="text-2xl font-black text-black mb-2">Smart Shopping Starts With Trusted Store Deals</h2>
  
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  Before making a purchase, millions of shoppers search online for promo codes and discounts to lower costs and get better value. Couponsbit was built to support smarter shopping habits by giving users quick access to active deals from trusted stores.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Instead of wasting time searching through multiple websites, users can explore organized store pages filled with trending offers, verified coupons, and seasonal promotions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We believe saving money online should feel rewarding, not complicated.
                </p>
               
              </div>



            </div>

            {/* ── RIGHT COLUMN ── */}
            <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28">

              {/* D — Seasonal Sales Card */}
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
  {/* Main Heading */}
  <h3 className="text-black font-black text-lg mb-2">Save More During Seasonal Store Sales</h3>
  
  {/* Introductory Paragraph */}
  <p className="text-gray-500 text-xs leading-relaxed mb-4">
    Throughout the year, online stores launch major shopping events filled with exciting discounts and exclusive promotions. Couponsbit helps shoppers stay updated on the latest seasonal sales and trending store offers.
  </p>

  {/* List Subheading */}
  <p className="text-gray-500 text-xs font-bold mb-3">Popular shopping events include:</p>
  
  {/* Event Tags */}
  <div className="flex flex-wrap gap-2 mb-4">
    {[
      "Black Friday Sales", 
      "Cyber Monday Deals", 
      "Holiday Discounts", 
      "Spring Sales", 
      "Summer Promotions", 
      "Memorial Day Deals", 
      "Fourth of July Sales", 
      "Back-to-School Offers", 
      "Labor Day Discounts", 
      "End-of-Season Clearance Sales"
    ].map((event) => (
      <span key={event} className="px-3 py-1.5 bg-[#e8f6f8] border border-[#056bfa]/20 text-[#0344b0] font-bold text-xs rounded-full hover:bg-[#056bfa] hover:text-white transition-all duration-200 cursor-default">
        {event}
      </span>
    ))}
  </div>

  {/* Closing Paragraph */}
  <p className="text-gray-500 text-xs leading-relaxed">
    During peak shopping seasons, Couponsbit regularly updates store pages with fresh deals and limited-time offers to help users maximize savings.
  </p>
</div>

              {/* F — Why Different Card */}
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
  {/* Main Heading */}
  <h3 className="text-black font-black text-lg mb-2">Why Couponsbit Is Different</h3>
  
  {/* Introductory Paragraph */}
  <p className="text-gray-500 text-xs leading-relaxed mb-4">
    Unlike cluttered coupon websites filled with outdated codes, Couponsbit focuses on creating a clean and user-friendly experience for modern shoppers.
  </p>

  {/* Subheading */}
  <p className="text-gray-500 text-xs font-bold mb-3">What makes Couponsbit different:</p>
  
  {/* Points List */}
  <div className="flex flex-col gap-3 mb-4">
    {[
      "Verified promo codes updated regularly",
      "Deals from trusted brands and online stores",
      "Organized store pages for faster browsing",
      "Fresh seasonal promotions and trending offers",
      "Easy-to-use platform with simple navigation",
      "100% free access for shoppers",
    ].map((point, i) => (
      <div key={i} className="flex items-center gap-2.5">
        <CheckCircle className="w-4 h-4 text-[#056bfa] shrink-0" />
        <span className="text-gray-600 text-xs font-semibold">{point}</span>
      </div>
    ))}
  </div>

  {/* Closing Paragraph */}
  <p className="text-gray-500 text-xs leading-relaxed">
    Our mission is simple: help users save more while making online shopping easier and more rewarding.
  </p>
</div>

              {/* G — CTA Card */}
             <div className="bg-gradient-to-br from-[#056bfa] to-[#0451c4] rounded-2xl p-6 text-white">
  {/* Main Heading */}
  <h3 className="font-black text-lg mb-2">Start Saving at Your Favorite Stores Today</h3>
  
  {/* Subheading */}
  <p className="text-white font-bold text-xs mb-3">
    Ready to unlock better prices and smarter online shopping?
  </p>
  
  {/* Main Paragraph Content */}
  <p className="text-white/80 text-xs leading-relaxed mb-5">
    Browse store deals, discover verified promo codes, and explore exclusive online discounts from top brands with Couponsbit. Whether you’re shopping for fashion, electronics, beauty, travel, or everyday essentials, we help you save more on every purchase.
  </p>

  <p className="text-white/80 text-xs leading-relaxed mb-5">
     Start exploring the latest store offers today and enjoy a smarter way to shop online with Couponsbit. →
    
  </p>
  
  {/* Link & Button with Updated Content */}
  <Link href="/stores" className="block">
    <button className="w-full bg-white text-[#056bfa] hover:bg-[#e8f6f8] font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-200">
     Shop & Save Now →
    </button>
  </Link>
</div>

            </aside>

          </div>
        </div>
      </section>

      

      </main>
      <Footer />
    </div>
  );
}
