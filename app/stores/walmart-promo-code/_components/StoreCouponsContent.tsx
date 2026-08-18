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
  LayoutGrid,
  Search,
  ShoppingBag,
  Home,
  Apple,BadgePercent, Store, MapPin,
  Cpu,
  Sofa,
  HeartPulse,
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
  { id: "d1", label: "SHOP", heading: "Walmart – Acer Nitro ED0 27\" Curved Gaming Monitor | $119", sub: "Get the Acer Nitro ED270R S3biip 27-inch Curved Gaming Monitor for $119" },
  { id: "d2", label: "TRY", heading: "Walmart+ – 30-Day Trial for Just $1", sub: "Try Walmart+ for 30 days for only $1" },
  { id: "d3", label: "FROM", heading: "Walmart – Ball Glass Mason Jars with Lids & Bands | 12 Count", sub: "Get the Ball Glass Mason Jars with Lids & Bands in a 12-count pack" },
  { id: "d4", label: "UP TO", heading: "Walmart – Phones & More | Up to 35% OFF", sub: "Save up to 35% OFF on selected phones and other tech products" },
  { id: "d5", label: "SAVE", heading: "Walmart – August Style Edit | Virtu Twin XL Comforter Set $74.99", sub: "Get the Virtu Twin XL Comforter Set for $74.99, down from $99.99" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Wish.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/wish-logo_n1dypa.webp", dealText: "Up To 60% OFF", href: "/stores/wish-discount-code" },
  { name: "Chewy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp", dealText: "Up To 50% OFF", href: "/stores/chewy-promo-code" },
  { name: "Discount Tire", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/discounttie-logo_lcrloj.webp", dealText: "Up To $130 OFF", href: "/stores/discounttire-discount-code" },
  { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Up To 30% OFF", href: "/stores/doordash-promo-code" },
  { name: "CarCovers", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/carcover-logo_eufopb.webp", dealText: "Save $30 OFF", href: "/stores/carcovers-discount-code" },
];

const STORE_URL = "https://www.walmart.com/";

export default function WalmartCouponsContent() {
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
              <span className="text-black font-extrabold">Walmart</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp" alt="Walmart" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Walmart</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(64.8k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Walmart promo codes, discount codes, deals, and savings for Aug 2026. Save up to 65% OFF during Flash Deals, get a Walmart+ 30-day trial for $1, Acer Nitro 27-inch monitor for $119, headphones for $17.99, and bedding for $74.99.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "4.1k", label: "Deals" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787057165/142_eavxz6.webp" alt="Walmart Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
        <section className="py-6 md:py-16 bg-white overflow-hidden">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-[65%]">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-black leading-tight">Walmart Promo Codes & Offers</h2>
        </div>

        {[
          { label: "SHOP", value: "$119", title: "Walmart – Acer Nitro ED0 27\" Curved Gaming Monitor | $119", desc: "Get the Acer Nitro ED270R S3biip 27-inch Curved Gaming Monitor for $119", bullets: ["Save $50.99 from the regular $169.99 price", "Features Full HD 1920 × 1080 resolution and a fast 180Hz refresh rate", "Includes AMD FreeSync Premium technology for smoother, tear-free gaming", "Walmart Deal, Acer Nitro Monitor, 180Hz Gaming Monitor, Curved Monitor, Gaming Deals, USA"] },
          { label: "TRY", value: "$1", title: "Walmart+ – 30-Day Trial for Just $1", desc: "Try Walmart+ for 30 days for only $1", bullets: ["Enjoy easier shopping with Walmart+ membership benefits", "Claim the limited-time $1 trial offer and explore the membership", "A convenient way to test Walmart+ before committing to a full membership", "Walmart+ Offer, Walmart Membership Deal, $1 Trial, Shopping Deals, USA"] },
          { label: "FROM", value: "$14.47", title: "Walmart – Ball Glass Mason Jars with Lids & Bands | 12 Count", desc: "Get the Ball Glass Mason Jars with Lids & Bands in a 12-count pack", bullets: ["Features clear, wide-mouth 16 oz glass jars for convenient storage", "Great for canning, preserving, meal prep and everyday kitchen organization", "Available in multiple options with prices ranging from $14.47 to $52.09", "Walmart Deal, Ball Mason Jars, Kitchen Storage, Canning Supplies, Home & Kitchen, USA"] },
          { label: "UP TO", value: "35%", title: "Walmart – Phones & More | Up to 35% OFF", desc: "Save up to 35% OFF on selected phones and other tech products", bullets: ["Explore special offers across smartphones and everyday electronics", "Shop popular devices at reduced prices for a limited time", "Find more Walmart deals and upgrade your tech for less", "Walmart Deals, Phone Offers, Smartphone Sale, Electronics Deals, USA"] },
          { label: "SAVE", value: "$25", title: "Walmart – August Style Edit | Virtu Twin XL Comforter Set $74.99", desc: "Get the Virtu Twin XL Comforter Set for $74.99, down from $99.99", bullets: ["Save $25 on this dorm-room bedding essential", "Ideal for college dorms, back-to-school setups and Twin XL beds", "Refresh your room with a comfortable and stylish bedding upgrade", "Walmart Deal, Twin XL Comforter Set, Dorm Room Essentials, Back to School Sale, USA"] },
          { label: "UP TO", value: "65%", title: "Walmart – Boyoun Daj Pro Noise Canceling Headphones | Up to 65% OFF", desc: "Get the Boyoun Daj Pro Noise Canceling headphones for just $17.99", bullets: ["Save up to 65% OFF during Walmart Flash Deals", "Designed with noise-canceling features for a more immersive listening experience", "Great for music, travel, work and everyday entertainment", "Walmart Deal, Boyoun Daj Headphones, Noise Canceling Headphones, Flash Sale, Electronics Deals, USA"] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                {/* Left badge container updated with standard width, text sizing, and font weights */}
                <div className="relative w-[110px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-1">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-bold leading-tight">{c.label}</p>
                    <div className="text-[26px] sm:text-[36px] font-extrabold leading-none mt-2">{c.value}</div>
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Walmart: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">Walmart Coupon Code & Walmart Promo Code</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            A Walmart coupon code can provide an additional discount when a valid promotion applies to your purchase. However, Walmart savings aren't always provided through traditional checkout codes. Depending on the product and promotion, you may find automatic discounts, seller-specific savings, digital offers, Rollbacks, clearance prices, or other promotional deals.

          </p>
           <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Walmart's help center also explains that some Marketplace sellers offer additional savings on eligible products. These offers can appear as banners on qualifying products and may require shoppers to select the applicable savings before adding the item to their cart.

          </p>
           <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            If you're specifically searching for a Walmart promo code, checking CouponsBit before checkout can help you identify currently available promotional opportunities.

          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
           <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
           <div className="space-y-1">
             {[
               { icon: Cpu, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
               { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: Home, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: Sofa, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-2">Best Ways to Save at Walmart</h3>
  <p className="text-gray-500 font-medium text-xs mb-8">
    There are several ways to reduce your Walmart shopping costs, even when you don't have a traditional coupon.
  </p>
  
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check Walmart Coupon Codes Before Shopping",
        sub: "Before placing an order, visit CouponsBit to check for a current Walmart coupon code or promotional offer. A quick comparison can help you determine whether a coupon provides a better price than an existing Walmart deal."
      },
      {
        icon: ShoppingBag,
        title: "Shop Walmart Deals Events",
        sub: "Walmart periodically runs major savings events with discounts across thousands of products. Its 2026 Walmart Deals event, for example, included electronics, fashion, toys, furniture, skincare, and back-to-school products."
      },
      {
        icon: Store,
        title: "Compare Marketplace Savings",
        sub: "Walmart's Marketplace can include additional seller promotions. Some eligible listings display an extra-savings banner that shoppers can activate before checkout."
      },
      {
        icon: MapPin,
        title: "Use Free Store Pickup",
        sub: "If you don't need home delivery, store pickup can be a convenient alternative for eligible products. It can also help you avoid certain delivery costs while allowing you to collect your order from a nearby Walmart."
      },
      {
        icon: BadgePercent,
        title: "Consider Walmart+",
        sub: "If you regularly order online or have Walmart grocery deliveries, compare your estimated delivery and shipping costs with the cost of Walmart+. The membership currently includes free shipping on eligible orders with no minimum, free store delivery on qualifying $35+ orders, fuel savings, early access to select deals, and other benefits."
      },
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start text-justify">
        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
          <item.icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-black font-black text-sm leading-tight mb-2">{item.title}</p>
          <p className="text-gray-500 font-medium text-[11px] leading-relaxed">{item.sub}</p>
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
        {/* SEO Text Section */}
<section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      
      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Walmart Discount Codes, Promo Codes & Deals 2026
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-[#056BFA]">
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
                <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 font-bold text-[14px]">
              {[
                ["Walmart – Acer Nitro ED0 27\" Curved Gaming Monitor | $119", "$119 (Save $50.99)", "All Users", "180Hz refresh rate, AMD FreeSync Premium", "Acer Nitro Curved Gaming Monitor"],
                ["Walmart+ – 30-Day Trial for Just $1", "$1 Trial", "All Users", "Limited-time 30-day trial offer", "Walmart+ Membership"],
                ["Walmart – Ball Glass Mason Jars with Lids & Bands | 12 Count", "From $14.47", "All Users", "12-count, wide-mouth 16 oz jars", "Ball Mason Jars (Kitchen Storage)"],
                ["Walmart – Phones & More | Up to 35% OFF", "Up to 35% OFF", "All Users", "Selected smartphones & electronics", "Phones & Electronics"],
                ["Walmart – August Style Edit | Virtu Twin XL Comforter Set $74.99", "$74.99 (Save $25)", "All Users", "Twin XL bedding, dorm-room essential", "Virtu Comforter Set"],
                ["Walmart – Boyoun Daj Pro Noise Canceling Headphones | Up to 65% OFF", "$17.99 (Up to 65% OFF)", "All Users", "Noise-canceling, Flash Deal pricing", "Boyoun Daj Headphones"],
              ].map((row, i) => (
                <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 5 && "border-b-0")}>
                  <td className="p-5 text-black font-black align-middle max-w-[220px]">{row[0]}</td>
                  <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
                  <td className="p-5 text-gray-500 align-middle">{row[2]}</td>
                  <td className="p-5 text-gray-500 align-middle max-w-[200px]">{row[3]}</td>
                  <td className="p-5 text-gray-500 align-middle max-w-[240px]">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Collapsible Text Container */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          
          <p>
            Looking for the latest Walmart coupon code, Walmart promo code, or Walmart discount code? CouponsBit helps shoppers discover Walmart deals, special offers, clearance savings, and promotions across electronics, groceries, fashion, beauty, home essentials, toys, appliances, and more.
          </p>
          <p>
            From everyday household purchases to major electronics and seasonal shopping, Walmart gives U.S. shoppers access to millions of products at competitive prices. The retailer also offers several ways to save beyond traditional coupons, including Walmart+ benefits, rollback prices, clearance deals, free pickup, shipping offers, and special shopping events.
          </p>
          <p>
            Before completing your next Walmart order, check CouponsBit for the latest Walmart coupon codes and promo codes to see whether an additional saving is available.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Walmart Discount Code Offers</h3>
            <p>
              A Walmart discount code may apply to selected products, categories, or promotional campaigns. Not every Walmart deal requires a code, so it's worth comparing coupon offers with Walmart's existing product prices.
            </p>
            <p>Before using a discount code, check:</p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-gray-600">
              <li>Whether the offer is currently active</li>
              <li>Which products qualify</li>
              <li>Whether a minimum purchase is required</li>
              <li>Whether Marketplace products are included</li>
              <li>Whether the discount is automatically applied</li>
              <li>Whether the promotion can be combined with other offers</li>
              <li>Any applicable exclusions or expiration dates</li>
            </ul>
            <p>
              This can help you calculate the actual final price instead of focusing only on the advertised discount.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Walmart Deals & Sale</h3>
            <p>
              Walmart is known for its everyday low pricing, but shoppers can find additional savings through temporary promotions and major sales events.
            </p>
            <p>
              Walmart's recent Deals events have included thousands of discounted products across electronics, fashion, toys, collectibles, furniture, skincare, back-to-school essentials, and other categories.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Walmart Rollback Deals</h3>
            <p>
              Rollback prices are one of the ways Walmart highlights reduced prices on selected products. These deals can appear across everyday essentials, electronics, household products, personal care, food, and other categories.
            </p>
            <p>
              If you're already planning a purchase, comparing the current Rollback price with any available Walmart coupon code can help you determine whether you're getting the best available value.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Walmart Clearance Deals</h3>
            <p>
              The Walmart clearance sale can be useful for shoppers looking for lower prices on discontinued, seasonal, overstocked, or limited-availability products.
            </p>
            <p>
              Clearance inventory can vary by store and online, and popular sizes, colors, or models may sell quickly. If you find something you want at a good price, check the product details and final checkout price before purchasing.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Walmart Electronics Deals</h3>
            <p>
              Walmart is a popular destination for electronics, offering products ranging from everyday accessories to larger consumer electronics.
            </p>
            
            <h4 className="text-lg font-black text-black mt-4">Walmart TV Deals</h4>
            <p>
              Shoppers can find televisions in different sizes, resolutions, and price ranges. Major sale periods can be particularly useful for comparing TV prices from brands such as Samsung, LG, TCL, Hisense, and others.
            </p>
            <p>
              When shopping for a TV, compare screen size, resolution, smart-TV platform, refresh rate, connectivity, and warranty coverage rather than choosing solely based on the advertised discount.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Walmart Laptop Deals</h4>
            <p>
              Walmart carries laptops and computers for students, professionals, families, and everyday users. Deals can include Windows laptops, Chromebooks, gaming laptops, and accessories.
            </p>
            <p>
              Before buying, compare the processor, RAM, storage, display, battery specifications, and operating system to make sure the discounted model meets your needs.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Walmart Phone Deals</h4>
            <p>
              Walmart offers smartphones, prepaid phones, mobile accessories, chargers, cases, and other connected devices.
            </p>
            <p>
              Phone promotions can sometimes be linked to specific carriers or plans, so check the conditions carefully before assuming a discount applies to an unlocked device.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Walmart Grocery Deals</h3>
            <p>
              Walmart is also a major destination for grocery shopping in the U.S. Customers can shop for fresh produce, pantry staples, snacks, beverages, frozen food, household supplies, and personal-care products.
            </p>
            
            <h4 className="text-lg font-black text-black mt-4">Walmart Grocery Coupons</h4>
            <p>
              Grocery savings can come from product promotions, Walmart's everyday pricing, manufacturer offers, and eligible digital savings.
            </p>
            <p>
              When buying frequently used products, compare the price per unit rather than just the total package price. A larger package isn't automatically the cheaper option.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Walmart Grocery Delivery</h4>
            <p>
              Walmart+ members can receive free delivery from their local Walmart store on qualifying orders of $35 or more, subject to restrictions. Walmart also offers same-day delivery on select items in eligible areas.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Walmart+ Deals & Membership Benefits</h3>
            <p>
              Walmart+ is Walmart's paid membership program, offering several benefits designed to reduce delivery costs and provide additional shopping perks.
            </p>
            <p>
              Walmart currently lists the regular membership at $98 per year or $12.95 per month, plus applicable taxes.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Walmart+ Free Shipping</h4>
            <p>
              One of the main Walmart+ benefits is free shipping with no order minimum on eligible products sold by Walmart or shipped by Walmart through Walmart.com or the Walmart app. Some Marketplace, freight, oversized, and other products may be excluded.
            </p>
            <p>
              This can be valuable for smaller online purchases where a non-member might otherwise pay a shipping fee.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Walmart+ Free Delivery</h4>
            <p>
              Walmart+ members can receive free delivery from their local store on eligible orders of $35 or more. Walmart states that Express Delivery may also be available in select locations, with additional terms and savings depending on the order.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Walmart+ Gas Savings</h4>
            <p>
              Walmart+ also includes fuel savings at participating Walmart, Exxon, Mobil, and Murphy stations. Current membership information advertises savings of 10¢ per gallon, although availability can vary by location and participating station.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Walmart+ Early Access Deals</h4>
            <p>
              Paid Walmart+ members can receive early access to selected online deals, including certain Black Friday promotions and other major shopping events. Walmart's membership page states that early access is available online and subject to availability.
            </p>
          </div>

          {/* Styled How-To Steps Box */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Walmart Coupon Code</h3>
            <p>If you find a valid Walmart coupon code, applying it is straightforward.</p>
            <div className="space-y-6">
              {[
                { step: "Step 1: Find a Walmart Coupon Code", desc: "Visit CouponsBit and browse the available Walmart coupon codes, promotions, and deals." },
                { step: "Step 2: Select Your Walmart Deal", desc: "Choose an offer that matches the products you want to purchase. Review the terms before using it." },
                { step: "Step 3: Copy the Walmart Promo Code", desc: "If the promotion requires a code, reveal the Walmart promo code and copy it." },
                { step: "Step 4: Shop on Walmart", desc: "Visit Walmart.com or use the Walmart app to search for your desired products and add them to your cart." },
                { step: "Step 5: Apply the Walmart Discount Code", desc: "Proceed through checkout and enter the applicable Walmart discount code where required." },
                { step: "Step 6: Review Your Order", desc: "Check the order summary to make sure the applicable savings have been reflected. Then select your preferred shipping, pickup, or delivery option and complete your purchase." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <div className="mt-1">
                    <p className="text-black font-black text-base">{item.step}</p>
                    <p className="text-gray-700 font-bold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4">
              If a code doesn't work, check its terms, expiration date, eligible products, and minimum purchase requirements.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Walmart Black Friday Deals</h3>
            <p>
              Walmart Black Friday deals are among the retailer's most anticipated promotions of the year. Discounts can span electronics, appliances, toys, home products, fashion, gaming, and other popular categories.
            </p>
            <p>
              Walmart+ members may receive early access to selected online Black Friday deals, giving eligible paid members an opportunity to shop certain offers before they become available more broadly.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Walmart Cyber Monday Deals</h3>
            <p>
              Cyber Monday is another useful time to compare online prices at Walmart. Electronics, computers, accessories, smart-home products, toys, and other online-friendly categories can be particularly worth watching.
            </p>
            <p>
              However, sale prices and product availability can change quickly, so compare the final price and specifications before purchasing.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Shop at Walmart?</h3>
            <p>
              Walmart has built its U.S. retail business around convenience, broad product selection, and competitive everyday pricing.
            </p>
            <p><strong>Huge Product Selection:</strong> Walmart sells products across grocery, electronics, clothing, beauty, home, furniture, toys, appliances, automotive, pets, and many other categories.</p>
            <p><strong>Online & In-Store Shopping:</strong> Customers can shop through Walmart.com, the Walmart app, or physical Walmart stores. Depending on the product and location, shoppers may have options such as shipping, store pickup, or delivery.</p>
            <p><strong>Multiple Ways to Save:</strong> Customers can combine smart shopping strategies with Walmart's everyday pricing, Rollbacks, clearance offers, seller promotions, major sales events, and Walmart+ benefits.</p>
            <p><strong>Convenient Delivery Options:</strong> Depending on location and product eligibility, Walmart offers shipping, store delivery, Express Delivery, and pickup options. Walmart+ members receive additional delivery and shipping benefits.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Find the Latest Walmart Coupon Codes & Deals</h3>
            <p>
              Whether you're buying groceries for the week, upgrading your electronics, shopping for clothes, furnishing your home, or preparing for a major seasonal event, Walmart offers numerous ways to save.
            </p>
            <p>
              Before placing your order, check CouponsBit for the latest Walmart coupon code, Walmart promo code, Walmart discount code, Walmart deals, Walmart clearance offers, and Walmart sale promotions.
            </p>
            <p>
              Compare available offers with Walmart's current product prices, check the terms of each promotion, and select the option that gives you the best overall value. With a little preparation before checkout, you can make your Walmart shopping budget go further.
            </p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        {/* Read More / Read Less Button */}
        <button 
          onClick={() => setIsReadMore(!isReadMore)} 
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"} 
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Dynamic FAQ Accordion Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Walmart Coupon Code FAQs</h3>
          {[
            { q: "Does Walmart Have Coupon Codes?", a: "Walmart offers various promotions and savings opportunities, although not every discount requires a traditional coupon code. Shoppers can also find Rollbacks, clearance prices, Marketplace promotions, and other special offers." },
            { q: "Where Can I Find a Walmart Promo Code?", a: "You can check CouponsBit for the latest Walmart promo codes, coupon offers, and current deals before shopping." },
            { q: "Does Walmart Have a Discount Code?", a: "Walmart may offer promotional discount codes for qualifying products or campaigns. Availability and terms vary, so check the offer details before checkout." },
            { q: "Does Walmart Offer Free Shipping?", a: "Walmart+ members receive free shipping with no order minimum on eligible items sold or shipped by Walmart. Non-members may also qualify for free shipping depending on the order and current Walmart shipping policies. Marketplace, oversized, freight, and other exclusions can apply." },
            { q: "What Is Walmart+?", a: "Walmart+ is Walmart's membership program, offering benefits such as free shipping on eligible orders, free store delivery on qualifying orders, fuel savings, early access to select deals, pharmacy delivery, and other perks." },
            { q: "How Much Does Walmart+ Cost?", a: "Walmart currently lists Walmart+ at $98 per year or $12.95 per month, plus applicable taxes. Promotional trials and discounted memberships may be available to eligible customers." },
            { q: "Does Walmart Offer Grocery Delivery?", a: "Yes. Walmart offers grocery and other store delivery options in eligible areas. Walmart+ members can receive free store delivery on qualifying orders of $35 or more, subject to restrictions." },
            { q: "Can I Get Walmart Deals Online?", a: "Yes. Walmart runs online promotions throughout the year, including category-specific offers and major events. Walmart's Deals events can feature thousands of products across multiple categories." },
            { q: "Does Walmart Have Clearance Sales?", a: "Yes. Walmart offers clearance merchandise across different categories, although available products and prices can vary by store and online." },
            { q: "Is CouponsBit Free to Use?", a: "Yes. CouponsBit is free to use. You can browse Walmart coupon codes, promo offers, discounts, and deals without paying a fee." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Walmart Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["New Arrivals", "Grocery Delivery", "Electronics Deals", "Walmart Promo Code", "Rollback Deals", "Home & Furniture", "Free Shipping", "Walmart+"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Walmart Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  W
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
                  rel="noopener noreferrer" 
                  aria-label={`Shop Walmart: ${deal.heading}`} 
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
