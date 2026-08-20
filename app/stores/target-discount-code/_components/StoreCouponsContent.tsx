"use client";

import React, { useState } from "react";
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
  ChevronDown,
  CheckCircle,
  Home, 
  Tv, 
  Sparkles, 
  Baby, 
  Gamepad2, 
  Dumbbell, 
  Dog,
  LayoutGrid,
  Search,
  ShoppingBag,
  ShoppingCart,
  Truck,
  Gift,
  Shirt,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface Deal {
  id: string;
  label: string;
  heading: string;
  sub: string;
}

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const DEALS: Deal[] = [
  { id: "d1", label: "SAVE", heading: "Save Up to $100 on Apple Devices", sub: "Target Promo Code" },
  { id: "d2", label: "UP TO", heading: "Up to 50% OFF Pillows & Bedding", sub: "Target Promo Code" },
  { id: "d3", label: "UP TO", heading: "Up to 50% OFF Clothing for All", sub: "Target Promo Code" },
  { id: "d4", label: "UP TO", heading: "Up to 40% OFF Storage & Home Improvement", sub: "Target Deal" },
  { id: "d5", label: "SAVE", heading: "Sharpie S-Gel Pens 4-Pack | 13% OFF", sub: "Target Deal" },
  { id: "d6", label: "SAVE", heading: "Gucci Guilty Elixir de Parfum | 40% OFF", sub: "Target Deal" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Chewy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp", dealText: "Up To 50% OFF", href: "/stores/chewy-promo-code" },
  { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Up To 30% OFF", href: "/stores/doordash-promo-code" },
  { name: "Uber Eats", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp", dealText: "Up To 60% OFF", href: "/stores/uber-eats-promo-code" },
  { name: "Dreame", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/dreame-logo_uqesij.webp", dealText: "Up To 45% OFF", href: "/stores/dreame-discount-code" },
];

const STORE_URL = "https://www.target.com/";

export default function TargetCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

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
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Target</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp" alt="Target" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Target</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(88.2k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Target discount codes, promo codes, and deals for Aug 2026. Save up to $100 on select Apple devices, get up to 50% OFF clothing and bedding, 40% OFF Gucci fragrance, and shop Champion T-shirts under $20 plus clearance footwear and home deals.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "8", label: "Offers" },
                    { icon: Percent, val: "3.1k", label: "Deals" },
                    { icon: Users, val: "25M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <stat.icon className="w-4.5 h-4.5 text-[#056bfa]" />
                       <div>
                         <div className="text-black font-black text-xs leading-none">{stat.val}</div>
                         <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">{stat.label}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: 1 }}>
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp" alt="Target Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
                    </a>
                  </div>
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
                { icon: RefreshCw, title: "Updated Daily", sub: "New offers every single day" }
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
        {/* Coupons + Sidebar */}
<section className="py-6 md:py-16 bg-white overflow-hidden">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-[65%]">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-black leading-tight">Target Discount Codes & Offers</h2>
        </div>

        {[
          { label: "SAVE", value: "$100", title: "Target Promo Code – Save Up to $100 on Apple Devices", desc: "Save up to $100 on select Apple devices", bullets: ["Discover limited-time savings on popular Apple products", "Shop eligible devices online and find great technology deals", "Availability, exclusions and quantities may vary"] },
          { label: "UP TO", value: "50% OFF", title: "Target Promo Code – Up to 50% OFF Pillows & Bedding", desc: "Get up to 50% OFF select pillows and bedding", bullets: ["Refresh your bedroom with comfortable and stylish bedding essentials", "Online-only savings are available on eligible products", "Shop while supplies last and upgrade your sleep space for less"] },
          { label: "UP TO", value: "50% OFF", title: "Target Promo Code – Up to 50% OFF Clothing for All", desc: "Save up to 50% OFF select clothing for women, men and kids", bullets: ["Discover everyday styles at reduced prices during the clearance event", "Shop seasonal fashion, wardrobe essentials and more", "Quantities are limited and exclusions may apply"] },
          { label: "UP TO", value: "40% OFF", title: "Target – Up to 40% OFF Storage & Home Improvement", desc: "Save up to 40% OFF select storage and home improvement products", bullets: ["Organize your home with practical storage solutions and essentials", "Find useful products for closets, rooms, garages and home projects", "Shop eligible items online while the offer lasts"] },
          { label: "SAVE", value: "13% OFF", title: "Target – Sharpie S-Gel Pens 4-Pack | 13% OFF", desc: "Get the Sharpie S-Gel Pens 4-pack for $4.89, down from $5.59", bullets: ["Save $0.70 with an effective discount of 13% OFF", "Features black 0.7mm medium-tip ink for smooth everyday writing", "Great for school supplies, office work and stationery collections"] },
          { label: "SAVE", value: "40% OFF", title: "Target – Gucci Guilty Elixir de Parfum Pour Homme | 40% OFF", desc: "Shop Gucci Guilty Elixir de Parfum Pour Homme for $109.80, down from $183", bullets: ["Save $73.20 with an effective discount of 40% OFF", "Discover an intense men's fragrance with rich, long-lasting notes", "A premium fragrance pick for everyday wear or gifting"] },
          { label: "SHOP", value: "CLEARANCE", title: "Target – Women’s Eloise Sandals | Clearance Sale", desc: "Get Women’s Eloise Sandals with Memory Foam Insole for $24.50, down from $35", bullets: ["Save $10.50 on this clearance footwear deal", "Designed with a memory foam insole for added everyday comfort", "A versatile choice for casual outfits and warm-weather styling"] },
          { label: "SHOP", value: "UNDER $20", title: "Target – Champion Men’s Big Script T-Shirt | Under $20", desc: "Shop the Champion Men’s Big Script T-Shirt for $12.60–$18.00", bullets: ["Selected styles are available on clearance when purchased online", "A casual everyday tee featuring the recognizable Champion look", "Great budget-friendly option for casual wardrobes and college style"] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[110px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-1">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-bold leading-tight">{c.label}</p>
                    <div className="text-[22px] sm:text-[32px] font-extrabold leading-none mt-2">{c.value}</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                  <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                      <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                    </div>
                    <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">{c.title}</h2>
                    <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">{c.desc}</p>
                    <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                      View Details
                      <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                      <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                        {c.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Target: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="lg:w-[35%] space-y-8">
        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-lg mb-6">About Target</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Founded in 1902, Target Corporation is one of the largest general merchandise retailers in the United States. The company operates more than 2,000 stores nationwide and serves millions of customers through its retail locations, website, and mobile app. In addition to national brands, Target offers over 45 exclusive owned brands across categories including home, apparel, beauty, groceries, baby products, and electronics. 
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Target is known for combining affordability, quality, and convenience. Customers can shop online, choose same-day pickup, Drive Up, same-day delivery in eligible areas, or have orders shipped directly to their homes.
          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
           <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
           <div className="space-y-1">
             {[
               { icon: ShoppingCart, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
               { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: Truck, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: Gift, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
               { icon: Search, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
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

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm max-w-md mx-auto">
  <h3 className="text-black font-black text-lg mb-2">
    What Can You Buy from Target?
  </h3>
  <p className="text-gray-500 font-medium text-xs mb-8">
    Target offers products across virtually every major shopping category.
  </p>

  <div className="space-y-8">
    {[
      {
        icon: Home,
        title: "Home & Furniture",
        sub: "Shop furniture, bedding, home décor, kitchen essentials, storage solutions, lighting, and home improvement products."
      },
      {
        icon: Tv,
        title: "Electronics",
        sub: "Browse TVs, laptops, gaming consoles, headphones, smart home devices, tablets, smartphones, and accessories from leading brands."
      },
      {
        icon: ShoppingBag,
        title: "Grocery & Household Essentials",
        sub: "Purchase fresh groceries, pantry staples, beverages, cleaning supplies, paper products, and daily household necessities."
      },
      {
        icon: Sparkles,
        title: "Beauty & Personal Care",
        sub: "Explore skincare, makeup, fragrances, hair care, grooming products, vitamins, and wellness essentials."
      },
      {
        icon: Shirt,
        title: "Clothing & Accessories",
        sub: "Find fashion for women, men, kids, and babies, along with shoes, handbags, jewelry, and seasonal apparel."
      },
      {
        icon: Baby,
        title: "Baby Products",
        sub: "Shop diapers, baby gear, nursery furniture, feeding essentials, clothing, toys, and parenting must-haves."
      },
      {
        icon: Gamepad2,
        title: "Toys & Games",
        sub: "Discover educational toys, action figures, dolls, puzzles, board games, outdoor toys, and collectibles for all ages."
      },
      {
        icon: Dumbbell,
        title: "Sports & Outdoor Living",
        sub: "Browse fitness equipment, camping gear, bicycles, outdoor furniture, grills, travel accessories, and sporting goods."
      },
      {
        icon: Dog,
        title: "Pet Supplies",
        sub: "Find pet food, treats, toys, beds, grooming products, and accessories for dogs, cats, and other pets."
      }
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start text-justify">
        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
          <item.icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-black font-black text-sm leading-tight mb-2">
            {item.title}
          </p>
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

        {/* More Stores */}
        <section className="py-20 bg-white border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-black text-black mb-10">More Stores You'll Love</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {RELATED_STORES.map((store, i) => (
                <Link key={i} href={store.href} className="bg-white border border-[#f0f0f0] rounded-3xl p-6 text-center shadow-sm hover:border-[#056bfa] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
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

        {/* SEO Text Section */}
        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Target Discount Code, Voucher & Promo Code Offers
        </h2>

        {/* Collapsible Content Area */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          
          {/* Intro Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Save More Every Time You Shop with a Target Discount Code</h3>
            <p>
              Whether you're shopping for groceries, home essentials, electronics, fashion, toys, beauty products, or seasonal décor, Target offers millions of products for every lifestyle and budget. With exclusive brands, everyday low prices, and convenient shopping options, Target has become one of the most popular retail destinations in the United States.
            </p>
            <p>
              Before placing your order, visit CouponsBit to find the latest Target discount code, Target voucher, Target promo code, and Target coupon code. Applying a valid offer at checkout can help you save even more on your favorite brands and everyday essentials.
            </p>
          </div>

          {/* Why Choose Target */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose Target?</h3>
            <p><strong>Wide Product Selection:</strong> From groceries and fashion to electronics and furniture, Target offers an extensive range of products for every member of the family.</p>
            <p><strong>Exclusive Brands:</strong> Target features dozens of exclusive in-house brands across home, apparel, food, and beauty categories that offer quality and value.</p>
            <p><strong>Convenient Shopping Options:</strong> Customers can shop online, pick up orders in-store, use Drive Up, or enjoy same-day delivery in eligible locations.</p>
            <p><strong>Target Circle Rewards:</strong> Join Target Circle, Target's free loyalty program, to access automatic deals, personalized offers, Target Circle Rewards, and other member benefits.</p>
            <p><strong>Target Circle Card Benefits:</strong> Eligible customers can apply for a Target Circle Card, which offers everyday savings and additional shopping benefits on qualifying purchases.</p>
            <p><strong>Seasonal Deals:</strong> Target regularly features promotions for holidays, back-to-school shopping, Black Friday, Cyber Monday, and other major shopping events.</p>
          </div>

          {/* How to Use Code */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-2">How to Use a Target Discount Code</h3>
            <p className="text-gray-500 font-bold -mt-4">Saving on your Target order is quick and easy.</p>
            <div className="space-y-6">
              {[
                "Step 1: Visit CouponsBit and browse the latest Target discount code, voucher, promo code, and coupon code offers.",
                "Step 2: Select the promotion that best matches your purchase.",
                "Step 3: Copy the available promotional code.",
                "Step 4: Visit Target and add your desired products to your shopping cart.",
                "Step 5: Enter the discount code during checkout if applicable.",
                "Step 6: Complete your purchase and enjoy extra savings.",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Ways to Save */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Smart Ways to Save More at Target</h3>
            <p><strong>Check CouponsBit Before Shopping:</strong> CouponsBit regularly updates verified Target discount codes, vouchers, promo codes, and exclusive offers.</p>
            <p><strong>Join Target Circle:</strong> Sign up for the free Target Circle program to receive automatic discounts, personalized rewards, and exclusive member-only deals.</p>
            <p><strong>Shop Seasonal Sales:</strong> Save during Black Friday, Cyber Monday, Memorial Day, Labor Day, Back-to-School, holiday promotions, and clearance events.</p>
            <p><strong>Buy Target-Owned Brands:</strong> Target's exclusive brands often provide excellent quality at competitive prices compared to national brands.</p>
            <p><strong>Use Drive Up or Store Pickup:</strong> Choose free pickup options when available to save time and enjoy convenient shopping.</p>
          </div>

          {/* Who Should Shop */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Who Should Shop at Target?</h3>
            <p>Target is ideal for:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Families</li>
              <li>Students</li>
              <li>Homeowners</li>
              <li>Parents</li>
              <li>Budget-conscious shoppers</li>
              <li>College students</li>
              <li>Professionals</li>
              <li>Pet owners</li>
              <li>Gift shoppers</li>
              <li>Anyone looking for everyday essentials in one place</li>
            </ul>
            <p>Whether you're buying groceries, decorating your home, shopping for gifts, or upgrading your electronics, Target offers products for nearly every need.</p>
          </div>

          {/* Why Use CouponsBit */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Target Deals?</h3>
            <p>CouponsBit helps shoppers discover verified savings from trusted retailers and leading brands.</p>
            <p><strong>Frequently Updated Offers:</strong> We regularly update Target discount codes, vouchers, promo codes, and exclusive promotions.</p>
            <p><strong>Verified Discounts:</strong> Browse trusted coupon codes and limited-time offers in one convenient location.</p>
            <p><strong>Completely Free:</strong> CouponsBit is free to use whenever you're looking to save on everyday shopping.</p>
            <p><strong>More Than Retail Deals:</strong> Besides Target, CouponsBit features savings on fashion, electronics, home essentials, travel, software, beauty products, and hundreds of other global brands.</p>
          </div>

          {/* Shop More While Spending Less */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop More While Spending Less</h3>
            <p>Whether you're stocking up on everyday essentials, refreshing your wardrobe, furnishing your home, or shopping for the latest electronics, Target makes it easy to find quality products at competitive prices.</p>
            <p>Before completing your purchase, visit CouponsBit to grab the latest Target discount code, Target voucher, Target promo code, and Target coupon code. It's a simple way to save more every time you shop.</p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        {/* Read More Button */}
        <button 
          onClick={() => setIsReadMore(!isReadMore)} 
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline focus:outline-none"
        >
          {isReadMore ? "Read Less" : "Read More"} 
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isReadMore && "rotate-180")} />
        </button>

        {/* FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
          {[
            { q: "What is Target?", a: "Target is one of the largest retail chains in the United States, offering groceries, electronics, clothing, beauty products, home goods, toys, pet supplies, and much more through its stores and online platform." },
            { q: "What is Target Circle?", a: "Target Circle is Target's free loyalty program that provides members with automatic deals, personalized offers, rewards, and exclusive member benefits." },
            { q: "What products can I buy at Target?", a: "Target sells products across categories including groceries, home décor, electronics, furniture, apparel, beauty, baby products, toys, pet supplies, and household essentials." },
            { q: "Where can I find a Target discount code?", a: "You can find the latest Target discount code, Target voucher, Target promo code, and Target coupon code on CouponsBit before placing your order." },
            { q: "Does Target offer online shopping?", a: "Yes. Customers can shop online through the Target website or app and choose shipping, in-store pickup, Drive Up, or same-day delivery for eligible orders." },
            { q: "Is CouponsBit free to use?", a: "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted global brands." },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                aria-expanded={openFaq === i}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300", openFaq === i && "bg-[#056bfa] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Section */}
      <aside className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Target Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Target Circle", "Grocery Deals", "Same-Day Delivery", "Target Discount Code", "Electronics Deals", "Home Goods", "Apparel Deals", "Clearance Picks"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Target Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner shrink-0">T</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-1.5 normal-case">{deal.sub}</p>
                </div>
                <a 
                  href={STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Shop Target: ${deal.heading}`} 
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-95 shrink-0"
                >
                  Get Deal
                </a>
              </div>
            ))}
          </div>
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
