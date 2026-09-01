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
  Shirt,
  Moon,
  Ticket, 
  Clock, 
  Calendar,
  Footprints,
  Package,
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
  { id: "d1", label: "UP TO", heading: "Summer Collection | Up to 25% OFF", sub: "BambooCool Discount Code" },
  { id: "d2", label: "ONLY", heading: "Men's Polo Shirt | $27.29", sub: "BambooCool Discount Code" },
  { id: "d3", label: "ONLY", heading: "Women's Seamless Briefs 5-Pack | $36.99", sub: "BambooCool Deal" },
  { id: "d4", label: "ONLY", heading: "Men's Bamboo Underwear 7-Pack | $56.99", sub: "BambooCool Deal" },
  { id: "d5", label: "ONLY", heading: "Women's Short-Sleeve Pajama Set | $49.34", sub: "BambooCool Deal" },
  { id: "d6", label: "SAVE", heading: "First Order | 20% OFF", sub: "BambooCool Discount Code" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/sungait-logo_tfolql.webp", dealText: "Up To 50% OFF", href: "/stores/sungait-discount-code" },
  { name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/vooglam-logo_qe8mis.webp", dealText: "Eyeglasses From $65", href: "/stores/vooglam-discount-code" },
  { name: "Zara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp", dealText: "Verified Deals", href: "/stores/zara-discount-code" },
  { name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", dealText: "Verified Deals", href: "/stores/hm-promo-code" },
];

const STORE_URL = "https://bamboocoolapparel.com/";

export default function BamboocoolCouponsContent() {
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
              <span className="text-black font-extrabold">Bamboocool</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp" alt="Bamboocool" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Bamboocool</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(14.2k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                     Find BambooCool discount codes, promo codes, and apparel deals for Sep 2026. Save up to 25% on summer styles, get 20% OFF your first order, enjoy free shipping on eligible $49+ orders, and shop bamboo underwear, pajamas and multi-packs from $27.29.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "10", label: "Offers" },
                    { icon: Percent, val: "980", label: "Deals" },
                    { icon: Users, val: "3M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp" alt="Bamboocool Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Bamboocool Discount Codes & Offers</h2>
        </div>

        {[
          { label: "UP TO", value: "25% OFF", title: "BambooCool Discount Code – Summer Collection | Up to 25% OFF", desc: "Save up to 25% OFF on selected summer underwear and apparel", bullets: ["Enjoy lightweight bamboo fabrics designed for breathable everyday comfort", "Get FREE SHIPPING on eligible orders over $49", "Explore soft, comfortable styles made for warm-weather wear"] },
          { label: "ONLY", value: "$27.29", title: "BambooCool Discount Code – Men's Polo Shirt | $27.29", desc: "Save from the regular price of $45.99 on this clearance deal", bullets: ["Features a comfortable short-sleeve design for casual everyday outfits", "A versatile option for summer styling and daily wear"] },
          { label: "ONLY", value: "$36.99", title: "BambooCool – Women's Seamless Briefs 5-Pack | $36.99", desc: "Shop the Mid-Waist Seamless Women's Briefs 5-Pack for $36.99", bullets: ["Save compared with the regular price of $38.99", "Seamless construction offers a smooth and comfortable everyday fit", "Practical multi-pack option for refreshing your underwear drawer"] },
          { label: "ONLY", value: "$56.94", title: "BambooCool – Men's Boxer Briefs 7-Pack | $56.94", desc: "Get the Days of the Week Men's Boxer Briefs 7-Pack for $56.94", bullets: ["Reduced from the regular price of $66.99", "Seven-piece pack provides a fresh pair for each day of the week", "Designed for comfortable everyday use and easy wardrobe rotation"] },
          { label: "ONLY", value: "$56.99", title: "BambooCool – Men's Bamboo Underwear 7-Pack | $56.99", desc: "Shop the Bamboo Cool Men's Underwear 7-Pack for $56.99", bullets: ["Save from the regular price of $65.99", "Bamboo fabric offers a soft and breathable feel for everyday wear", "Multi-pack design makes it easy to stock up on essentials"] },
          { label: "ONLY", value: "$35.99", title: "BambooCool – Women's Lace Hipster Bikini 6-Pack | $35.99", desc: "Get the Women's Lace Hipster Bikini 6-Pack for $35.99", bullets: ["Reduced from the regular price of $39.99", "Features a feminine lace detail with a comfortable hipster silhouette", "Six-piece pack makes a practical addition to your everyday essentials"] },
          { label: "ONLY", value: "$36.74", title: "BambooCool – Seamless High-Waist Thongs 6-Pack | $36.74", desc: "Shop the Seamless High-Waist Women's Thongs 6-Pack for $36.74", bullets: ["Save compared with the regular price of $43.99", "High-waist seamless construction provides a smooth fit under clothing", "A convenient six-piece collection for everyday wear"] },
          { label: "ONLY", value: "$32.59", title: "BambooCool – Lightweight Lace Trim Pajama Set | $32.59", desc: "Get the Lightweight Women's Lace Trim Pajama Set for $32.59", bullets: ["Reduced from the regular price of $33.99", "Features a lightweight design with stylish lace trim detailing", "Ideal for comfortable summer nights and relaxed lounging"] },
          { label: "ONLY", value: "$49.34", title: "BambooCool – Women's Short-Sleeve Pajama Set | $49.34", desc: "Shop the Women's Short-Sleeve Pajama Set for $49.34", bullets: ["Save from the regular price of $55.99", "Short-sleeve styling makes it suitable for comfortable warm-weather sleep", "A versatile choice for relaxing at home or nighttime wear"] },
          { label: "SAVE", value: "20% OFF", title: "BambooCool Discount Code – First Order | 20% OFF", desc: "Sign up and receive 20% OFF your first BambooCool order", bullets: ["Get access to exclusive promotions and new-arrival updates", "A great opportunity for new customers to save on bamboo apparel and underwear", "Offer applies to eligible first orders according to the store's terms"] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[110px] sm:w-[170px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-1">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-extrabold leading-3">{c.label}</p>
                    <div className="text-[16px] sm:text-2xl font-black leading-none mt-2.5">{c.value}</div>
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Bamboocool: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">Bamboo Cool Sustainability and Materials</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Material selection is central to Bamboo Cool's brand positioning.

          </p>
            <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            The company says it uses bamboo viscose as a primary material and focuses on certified and responsibly sourced fibers. Its website highlights certifications and standards including OCS, OEKO-TEX STANDARD 100, FSC-related sourcing, and BSCI.

          </p>
            <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Bamboo Cool also describes its bamboo fabric as soft and breathable and says it is developing additional bamboo-based materials, including bamboo lyocell and bamboo modal.

          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
           <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
           <div className="space-y-1">
             {[
               { icon: Shirt, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
               { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: Moon, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: Footprints, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
  <h3 className="text-black font-black text-lg mb-8">
    How to Save More at Bamboo Cool
  </h3>

  <div className="space-y-8">
    {[
      {
        icon: Ticket,
        title: "Check for a Bamboo Cool Discount Code",
        sub: "Before adding products to your basket, check CouponsBit for available Bamboo Cool promotions and coupon codes."
      },
      {
        icon: Percent,
        title: "Compare Codes With Sale Prices",
        sub: "If an item is already discounted, compare its sale price with the final price available through a coupon. The lower advertised percentage is not necessarily the better deal."
      },
      {
        icon: Package,
        title: "Shop Multipacks",
        sub: "Bamboo Cool offers many underwear and basics in multipacks. If you regularly purchase these products, buying a larger pack can potentially provide better value per item."
      },
      {
        icon: Tag,
        title: "Check Clearance",
        sub: "Clearance can be a good option when your main priority is price and you are flexible about available colors, styles, and sizes."
      },
      {
        icon: Clock,
        title: "Watch Limited-Time Offers",
        sub: "Limited-time collections can change frequently, so checking them before placing an order may uncover discounts that aren't immediately visible in the standard product categories."
      },
      {
        icon: Calendar,
        title: "Shop During Major Events",
        sub: "Black Friday, holiday campaigns, Father's Day, New Year promotions, and other seasonal periods can be useful times to watch for additional Bamboo Cool offers."
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
          Bamboo Cool Discount Code, Coupon Code & Sale
        </h2>

        <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[850px] border-collapse text-left">
      <thead>
        <tr className="bg-[#056BFA]">
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Offer</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Discount / Price</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Eligibility</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Key Conditions</th>
          <th scope="col" className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Applicable On</th>
        </tr>
      </thead>
      <tbody className="text-[14px] font-bold text-gray-600">
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Summer Collection Sale
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to 25% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Free shipping on orders over $49
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Selected summer underwear &amp; bamboo apparel
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Men&apos;s Short-Sleeve Polo Shirt
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $27.29
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Clearance pricing (Reg. $45.99)
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Men&apos;s casual short-sleeve polo shirts
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Women&apos;s Seamless Briefs 5-Pack
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $36.99
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Reduced from $38.99; 5-piece multipack
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Mid-waist seamless women&apos;s briefs
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Men&apos;s Boxer Briefs 7-Pack
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $56.94
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Reduced from $66.99; 7-piece daily pack
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Days of the Week men&apos;s boxer briefs
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Men&apos;s Bamboo Underwear 7-Pack
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $56.99
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Reduced from $65.99; multipack deal
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Bamboo Cool men&apos;s underwear
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Women&apos;s Lace Hipster Bikini 6-Pack
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $35.99
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Reduced from $39.99; 6-piece multipack
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Lace trim hipster bikini underwear
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Seamless High-Waist Thongs 6-Pack
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $36.74
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Reduced from $43.99; 6-piece multipack
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Seamless high-waist women&apos;s thongs
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Lace Trim Pajama Set
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $32.59
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Reduced from $33.99; lightweight summer wear
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Lightweight women&apos;s lace trim pajamas
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Women&apos;s Short-Sleeve Pajama Set
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $49.34
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Reduced from $55.99
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Short-sleeve women&apos;s sleepwear sets
          </td>
        </tr>
        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            New Customer Offer
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Save 20% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            New Subscribers
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Sign-up required; valid on first eligible order
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            First orders across bamboo apparel &amp; underwear
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        {/* Collapsible Content Area */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          
          {/* Intro Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Find a Bamboo Cool Discount Code and Save on Bamboo Apparel</h3>
            <p>
              Shopping for softer everyday basics, breathable underwear, or comfortable loungewear? Before placing your next order, checking for a Bamboo Cool discount code can be a simple way to look for savings.
            </p>
            <p>
              Bamboo Cool specializes in apparel made primarily with bamboo viscose, with its current collection focused heavily on underwear, boxer briefs, briefs, loungewear, pajamas, undershirts, and other everyday clothing. The brand also offers products for women and children, along with different bamboo-fabric collections and comfort-focused ranges. Bamboo Cool currently ships within the United States.
            </p>
            <p>
              At CouponsBit, you can check for an available Bamboo Cool coupon code, promotional offer, or current Bamboo Cool sale before completing your order. Comparing coupon offers with products that are already discounted can help you decide which promotion provides the better overall value.
            </p>
          </div>

          {/* Why Shop Bamboo Cool */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Shop Bamboo Cool?</h3>
            <p>
              Bamboo Cool takes a material-first approach to everyday apparel. The brand says its products are developed around bamboo viscose, with an emphasis on softness, breathability, comfort, and responsible sourcing. Its fabrics are presented as being certified under standards including OEKO-TEX and OCS, while the brand also highlights FSC-certified sourcing and BSCI-related production standards.
            </p>
            <p>The current Bamboo Cool catalog includes categories such as:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Men's boxer briefs</li>
              <li>Men's boxer shorts</li>
              <li>Men's briefs</li>
              <li>Extra-long boxer briefs</li>
              <li>Undershirts</li>
              <li>T-shirts</li>
              <li>Pajamas and loungewear</li>
              <li>Men's clothing</li>
              <li>Women's bamboo underwear</li>
              <li>Kids' products</li>
              <li>Bamboo-blend apparel</li>
              <li>Cooling collections</li>
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Clearance products</li>
            </ul>
            <p>The brand's collections page currently lists more than 180 products across its various collections.</p>
          </div>

          {/* Bamboo Cool Men's Underwear */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Bamboo Cool Men's Underwear</h3>
            <p>
              Men's underwear is one of Bamboo Cool's largest product categories. The range includes several cuts and multipack options, allowing shoppers to choose based on fit, coverage, and everyday use.
            </p>
            <p><strong>Men's Boxer Briefs:</strong> Bamboo Cool offers boxer briefs in several designs, pack sizes, and fabric variations. The brand emphasizes features such as softness, stretch, breathability, moisture management, and comfortable construction. Some styles use bamboo viscose blended with spandex for added stretch and flexibility.</p>
            <p><strong>Men's Boxer Shorts:</strong> For shoppers who prefer a looser silhouette, Bamboo Cool also sells traditional boxer shorts. These can be useful for relaxed everyday wear and sleeping.</p>
            <p><strong>Men's Briefs:</strong> The men's briefs collection offers a more compact fit for shoppers who prefer less coverage. Options are available in different colors, designs, and pack configurations.</p>
            <p><strong>Extra-Long Boxer Briefs:</strong> Bamboo Cool's extra-long boxer brief collection is designed for shoppers who prefer additional leg coverage. These can also be useful for people who want a longer inseam to reduce riding up.</p>
            <p><strong>Seamless Boxer Briefs:</strong> The brand also offers seamless and smooth-fitting boxer brief designs intended to minimize bulk and provide a more streamlined feel beneath clothing.</p>
            <p><strong>Athletic Underwear:</strong> Some Bamboo Cool underwear styles are designed with activewear in mind, combining stretch, ventilation, moisture management, and supportive construction.</p>
          </div>

          {/* Bamboo Cool Men's Clothing */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Bamboo Cool Men's Clothing</h3>
            <p>Bamboo Cool's catalog extends beyond underwear into everyday men's clothing and basics.</p>
            <p><strong>Bamboo T-Shirts:</strong> The brand offers bamboo-fabric T-shirts in multipacks and different fits. These can work as standalone casual tops or as lightweight base layers.</p>
            <p><strong>Undershirts:</strong> Undershirts are another major category, with crew-neck and sleeveless styles available in different pack sizes. These basics can be worn underneath work shirts, sweaters, jackets, or casual clothing.</p>
            <p><strong>Tank Tops:</strong> Bamboo Cool also sells sleeveless undershirts and tank-style basics made with stretch bamboo fabric.</p>
            <p><strong>Hoodies and Outdoor Tops:</strong> The brand's clothing collection includes longer-sleeve and hoodie-style pieces, including products positioned for activities such as golf, fishing, outdoor use, and casual wear.</p>
          </div>

          {/* Bamboo Cool Lounge & Sleepwear */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Bamboo Cool Lounge & Sleepwear</h3>
            <p>Comfort-focused clothing is another important part of the Bamboo Cool range.</p>
            <p><strong>Pajama Bottoms:</strong> The brand offers bamboo pajama bottoms designed for sleeping and relaxing at home. Some styles feature drawstring waists and pockets for added practicality.</p>
            <p><strong>Pajama Sets:</strong> Shoppers can also find multi-piece pajama and lounge sets, depending on the current collection.</p>
            <p><strong>Loungewear:</strong> Bamboo Cool's loungewear is designed around the same soft, breathable fabric approach used throughout its underwear range. These pieces can be suitable for relaxing at home, sleeping, traveling, or casual everyday wear.</p>
          </div>

          {/* Bamboo Cool Women's Products */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Bamboo Cool Women's Products</h3>
            <p>Although men's underwear represents a significant part of the current catalog, Bamboo Cool also has women's bamboo apparel and underwear.</p>
            <p>Women's products can include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Bamboo underwear</li>
              <li>Boxer-style underwear</li>
              <li>Women's basics</li>
              <li>Loungewear</li>
              <li>Bamboo clothing</li>
              <li>Comfortable everyday essentials</li>
            </ul>
            <p>The brand's overall approach focuses on lightweight, soft, and breathable fabrics designed for daily wear.</p>
          </div>

          {/* Bamboo Cool Kids' Products */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Bamboo Cool Kids' Products</h3>
            <p>Bamboo Cool also has a dedicated kids' category. Its current collections page lists children's products alongside its men's and general apparel collections.</p>
            <p>Depending on current inventory, parents can look for bamboo-based basics and comfortable clothing designed for younger wearers.</p>
            <p>The use of soft, breathable fabric can make these products particularly relevant for everyday clothing and sleepwear.</p>
          </div>

          {/* Bamboo Cool Cooling Collections */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Bamboo Cool Cooling Collections</h3>
            <p>One of the more distinctive areas of the brand's catalog is its cooling-focused apparel.</p>
            <p>The current collections include products such as BreezeBoo-Air and BreezeBoo-Ice, which are positioned around lightweight and cooling comfort.</p>
            <p>These collections can be worth exploring if your priority is staying comfortable in warm conditions or choosing lightweight underwear and basics.</p>
          </div>

          {/* Bamboo Blend Collection */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Bamboo Blend Collection</h3>
            <p>Bamboo Cool also offers a Bamboo Blend collection featuring products that combine bamboo-based fabric with other fibers.</p>
            <p>Blended fabrics can provide a different balance of softness, stretch, durability, and fit compared with garments made from a single material.</p>
          </div>

          {/* Bamboo Cool Best Sellers */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Bamboo Cool Best Sellers</h3>
            <p>If you are unfamiliar with the brand, the Best Sellers section can be a useful starting point.</p>
            <p>Bamboo Cool currently separates best-selling products into broader collections as well as men's-specific best sellers.</p>
            <p>This can help shoppers narrow down the catalog without having to browse every product individually.</p>
          </div>

          {/* Bamboo Cool New Arrivals */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Bamboo Cool New Arrivals</h3>
            <p>The New Arrivals collection is designed for shoppers who want to see the brand's latest products rather than relying on older collections.</p>
            <p>This section can be useful if you're looking for newly introduced colors, designs, fits, fabrics, or product categories.</p>
          </div>

          {/* Discount & Coupon Definitions */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">What Is a Bamboo Cool Discount Code?</h3>
            <p>A Bamboo Cool discount code is a promotional code that may reduce the price of eligible products or provide another benefit during checkout.</p>
            <p>The exact conditions can vary between promotions. A code may be restricted to certain products, have a minimum purchase requirement, apply only during a specified period, or exclude other discounted items.</p>
            <p>Always check the terms attached to the promotion before using a code.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">What Is a Bamboo Cool Coupon Code?</h3>
            <p>A Bamboo Cool coupon code is another term shoppers may use when searching for a promotional code for the brand.</p>
            <p>A coupon code isn't necessarily the only way to save. Bamboo Cool also runs direct product markdowns and promotional campaigns, meaning a product may already be discounted before a code is applied.</p>
            <p>For this reason, comparing the coupon price with the current sale price can help you identify the better deal.</p>
          </div>

          {/* Types of Sales */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">What Types of Bamboo Cool Sales Does the Brand Run?</h3>
            <p>Bamboo Cool uses several different promotional formats throughout the year. Its current collections page includes dedicated sections for Clearance, Limited Time Offer, HBD America Sitewide Sale, and Black Friday Pre Sale, along with seasonal and event-focused collections.</p>
            <p><strong>Sitewide Sales:</strong> Bamboo Cool sometimes runs broader promotions covering a significant portion of its catalog. A sitewide campaign can be useful if you're planning to purchase multiple products or want flexibility about which category you shop.</p>
            <p><strong>Limited-Time Offers:</strong> The brand maintains a Limited Time Offer collection, indicating that some discounts are available for restricted periods. These promotions can be worth checking when you're ready to buy because the products and discounts may change.</p>
            <p><strong>Clearance Sales:</strong> Clearance products can provide some of the lowest prices in the catalog. The trade-off is that clearance inventory can be more limited, particularly when it comes to popular sizes or colors.</p>
            <p><strong>Black Friday Pre-Sale:</strong> Bamboo Cool has also maintained a dedicated Black Friday Pre Sale collection. Black Friday is therefore an important period to watch if you are planning a larger purchase or want to stock up on underwear and everyday basics.</p>
            <p><strong>Holiday Promotions:</strong> Seasonal events and holidays can lead to temporary discounts, product bundles, or category-specific campaigns.</p>
            <p><strong>Father's Day Promotions:</strong> Bamboo Cool has a Father's Day Underwear & Apparel collection, making seasonal gifting campaigns another promotional category to watch.</p>
            <p><strong>New Year Promotions:</strong> The brand has also promoted New Year-focused wardrobe refreshes, particularly around replacing everyday underwear and basics.</p>
            <p><strong>Product-Specific Discounts:</strong> Not every promotion has to cover the entire website. Bamboo Cool can also discount selected products or collections while leaving other items at regular prices.</p>
          </div>

          {/* How to Use a Coupon Code */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-2">How to Use a Bamboo Cool Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Check CouponsBit — Start by searching CouponsBit for current Bamboo Cool coupon codes, promotions, and deals.",
                "Step 2: Choose Your Products — Browse underwear, clothing, loungewear, pajamas, kids' products, or other Bamboo Cool collections.",
                "Step 3: Review the Offer — Before using a promotion, check its expiration date, eligible products, minimum spend, exclusions, and other conditions.",
                "Step 4: Copy the Code — If the promotion requires a coupon code, copy it before moving to checkout.",
                "Step 5: Add Products to Your Cart — Select your preferred sizes, colors, and pack quantities and add them to your shopping cart.",
                "Step 6: Enter the Coupon — Apply the Bamboo Cool coupon code in the appropriate section during checkout.",
                "Step 7: Confirm Your Savings — Review your final order total and make sure the promotion has been applied correctly before completing your purchase.",
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

          {/* Popular Products */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Popular Bamboo Cool Products to Explore</h3>
            <p>Bamboo Cool is particularly relevant for shoppers looking for everyday essentials rather than trend-focused fashion.</p>
            <p>Some of the main product types worth exploring include bamboo boxer briefs, boxer shorts, briefs, extra-long boxer briefs, undershirts, T-shirts, tank tops, pajamas, loungewear, and kids' apparel.</p>
            <p>For men, the brand's current catalog has a particularly broad selection of underwear, including multi-pack boxer briefs, classic boxers, briefs, seamless styles, and activewear-oriented options.</p>
            <p>If you're interested in cooling apparel, the BreezeBoo collections are another area to explore, while shoppers interested in material blends can browse the Bamboo Blend collection.</p>
          </div>

          {/* Shop Bamboo Cool With CouponsBit */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Bamboo Cool With CouponsBit</h3>
            <p>Bamboo Cool focuses on everyday apparel built around bamboo-based fabrics, with a particularly strong selection of men's underwear, boxer briefs, boxer shorts, briefs, undershirts, T-shirts, pajamas, and loungewear. The brand also offers women's products, children's items, cooling collections, bamboo blends, and other comfort-focused basics.</p>
            <p>Before placing your next order, check CouponsBit for a Bamboo Cool discount code, Bamboo Cool coupon code, or current Bamboo Cool sale. Compare promotional codes with clearance prices, limited-time offers, sitewide campaigns, and seasonal promotions to find the option that provides the best value.</p>
            <p>Whether you're replacing everyday underwear, stocking up on multipacks, looking for breathable summer basics, or buying comfortable loungewear, checking for a current Bamboo Cool promotion before checkout can help you make your budget go further.</p>
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Bamboo Cool Discount Codes</h3>
          {[
            { q: "Where Can I Find a Bamboo Cool Discount Code?", a: "You can check CouponsBit for available Bamboo Cool discount codes, coupon codes, deals, and promotional offers before placing your order." },
            { q: "What Is a Bamboo Cool Coupon Code?", a: "A Bamboo Cool coupon code is a promotional code that may provide a discount or other benefit on eligible purchases, depending on the terms of the promotion." },
            { q: "Does Bamboo Cool Always Have a Discount Code?", a: "Not necessarily. Promotional codes can come and go, while direct sale pricing and limited-time offers may be available separately." },
            { q: "Does Bamboo Cool Have a Sale?", a: "Yes. Bamboo Cool's current collections include sale-oriented sections such as Clearance, Limited Time Offer, HBD America Sitewide Sale, and Black Friday Pre Sale." },
            { q: "When Does Bamboo Cool Have Its Biggest Sales?", a: "Major promotional periods such as Black Friday can be worth watching, but Bamboo Cool also runs limited-time, clearance, seasonal, and sitewide campaigns throughout the year." },
            { q: "Does Bamboo Cool Sell Men's Underwear?", a: "Yes. Men's underwear is one of the brand's major product categories, with boxer briefs, boxer shorts, briefs, extra-long styles, seamless designs, and multipacks." },
            { q: "Does Bamboo Cool Sell Women's Products?", a: "Yes. Bamboo Cool also offers women's bamboo underwear and apparel alongside its men's collections." },
            { q: "Does Bamboo Cool Sell Kids' Clothing?", a: "Yes. The brand currently has a dedicated Kids' Products collection." },
            { q: "What Is Bamboo Cool Made From?", a: "Bamboo Cool states that bamboo viscose is a primary material used across its products. The brand also has bamboo-blend products and says it is exploring materials such as bamboo lyocell and bamboo modal." },
            { q: "Does Bamboo Cool Sell Loungewear?", a: "Yes. Its current collections include men's clothing and lounge products, as well as pajamas and other comfort-focused apparel." },
            { q: "Does Bamboo Cool Have Clearance Products?", a: "Yes. Bamboo Cool currently maintains a Clearance collection, although available products, sizes, and discounts can change as inventory sells." },
            { q: "Can I Use a Bamboo Cool Discount Code on Sale Items?", a: "It depends on the individual promotion. Some codes may apply to sale merchandise, while others may exclude discounted products or require specific conditions. Check the coupon terms before checkout." },
            { q: "Does Bamboo Cool Ship to the United States?", a: "Yes. Bamboo Cool's FAQ states that the brand currently ships exclusively within the United States, while it is working toward expanding international delivery." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Bamboo Cool Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Men's Underwear", "Boxer Briefs", "Bamboo T-Shirts", "Discount Code", "Loungewear", "Cooling Collection", "Clearance Picks", "Kids' Basics"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Bamboo Cool Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner shrink-0">B</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-1.5 normal-case">{deal.sub}</p>
                </div>
                <a 
                  href={STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Shop Bamboo Cool: ${deal.heading}`} 
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
