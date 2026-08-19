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
  Sofa,
  Lamp,
  TreePine,
  Briefcase,
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
  { id: "d1", label: "UP TO", heading: "48-Hour Clearance Sale | Up to 70% OFF", sub: "Wayfair Promo Code" },
  { id: "d2", label: "UP TO", heading: "Closeout Sale | Up to 80% OFF", sub: "Wayfair Promo Code" },
  { id: "d3", label: "UP TO", heading: "Bedroom Furniture | Up to 50% OFF", sub: "Wayfair Deal" },
  { id: "d4", label: "UP TO", heading: "Area Rugs | Up to 70% OFF", sub: "Wayfair Deal" },
  { id: "d5", label: "FROM", heading: "Dorm Room Deals | Picks From $20", sub: "Wayfair Deal" },
  { id: "d6", label: "FREE", heading: "Free Shipping on Orders Over $35", sub: "Wayfair Deal" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "CarCovers", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/carcover-logo_eufopb.webp", dealText: "Save $30 OFF", href: "/stores/carcovers-discount-code" },
  { name: "Dreame", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/dreame-logo_uqesij.webp", dealText: "Up To 45% OFF", href: "/stores/dreame-discount-code" },
  { name: "Lumibrick", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/lumricks-logo_a84nyo.webp", dealText: "From $56.99", href: "/stores/lumibrick-discount-code" },
  { name: "Bluetti", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/bluetti-power-logo_osmets.webp", dealText: "Save Up To $200", href: "/stores/bluetti-discount-code" },
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up To $260", href: "/stores/merachfit-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Verified Deals", href: "/stores/target-discount-code" },
];

const STORE_URL = "https://www.wayfair.com/";

export default function WayfairCouponsContent() {
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
              <span className="text-black font-extrabold">Wayfair</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp" alt="Wayfair" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Wayfair</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(56.4k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover Wayfair deals and offers in Aug 2026. Browse furniture offers, home decor deals, outdoor and patio picks and Wayfair Professional offers on Wayfair.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "9", label: "Offers" },
                    { icon: Percent, val: "2.8k", label: "Deals" },
                    { icon: Users, val: "18M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp" alt="Wayfair Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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

        
        <section className="py-6 md:py-16 bg-white overflow-hidden">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-[65%]">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-black leading-tight">Wayfair Discount Codes & Offers</h2>
        </div>

        {[
          { label: "UP TO", value: "70% OFF", title: "Wayfair Promo Code – 48-Hour Clearance Sale | Up to 70% OFF", desc: "Shop the 48-Hour Clearance and save up to 70% OFF on selected products", bullets: ["Discover limited-time markdowns across furniture, home décor and more", "Hurry—clearance deals are available for a limited time only", "Refresh your home with major savings on popular Wayfair finds"] },
          { label: "UP TO", value: "80% OFF", title: "Wayfair Promo Code – Closeout Sale | Up to 80% OFF", desc: "Score up to 80% OFF on selected closeout products while supplies last", bullets: ["Discover final-sale bargains across furniture, décor and home essentials", "Limited quantities available, making these deals ideal for bargain shoppers", "Find stylish home upgrades at significantly reduced prices"] },
          { label: "UP TO", value: "50% OFF", title: "Wayfair – Bedroom Furniture | Up to 50% OFF", desc: "Save up to 50% OFF on selected bedroom furniture", bullets: ["Shop beds, dressers, nightstands and other bedroom essentials", "Upgrade your space with stylish furniture at reduced prices", "Explore a range of designs for modern and classic bedrooms"] },
          { label: "UP TO", value: "70% OFF", title: "Wayfair – Area Rugs | Up to 70% OFF", desc: "Get up to 70% OFF on selected area rugs", bullets: ["Refresh your living room, bedroom or dining space with stylish designs", "Great opportunity to add a finishing touch to your home for less"] },
          { label: "FROM", value: "$20", title: "Wayfair – Dorm Room Deals | Picks From $20", desc: "Discover budget-friendly dorm room essentials starting from $20", bullets: ["Shop practical furniture, storage solutions, bedding and décor", "Find on-budget picks designed for college and student spaces", "Fast and free delivery is available on qualifying items"] },
          { label: "FROM", value: "$15", title: "Wayfair – Outdoor Décor | From $15", desc: "Shop outdoor décor starting from just $15", bullets: ["Add stylish finishing touches to patios, balconies and outdoor spaces", "Discover small décor pieces that can transform your outdoor sanctuary", "Find budget-friendly options for seasonal home refreshes"] },
          { label: "SHOP", value: "UNDER $50", title: "Wayfair – Vases, Urns, Jars & Bottles | Under $50", desc: "Discover vases, urns, jars and decorative bottles priced under $50", bullets: ["Add affordable decorative accents to shelves, tables and living spaces", "Choose from a variety of styles to complement your home décor", "Great picks for refreshing your space without overspending"] },
          { label: "EXTRA", value: "10% OFF", title: "Wayfair – Extra 10% OFF for New Subscribers", desc: "New subscribers can get an extra 10% OFF on eligible purchases", bullets: ["Sign up to unlock additional savings on your Wayfair shopping", "Combine the offer with selected home, furniture and décor deals where eligible", "A simple way for new customers to save more on their first purchases"] },
          { label: "FREE", value: "SHIPPING", title: "Wayfair – Free Shipping on Orders Over $35", desc: "Enjoy Fast & Free Shipping on qualifying orders over $35", bullets: ["Shop furniture, décor, rugs and home essentials with convenient delivery", "Reach the qualifying order threshold and save on shipping costs", "Availability and exclusions may apply to selected products and locations"] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[140px] sm:w-[220px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-2">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[13px] sm:text-[16px] font-extrabold leading-tight">{c.label}</p>
                    <div className="text-[20px] sm:text-4xl font-black leading-none mt-2 sm:mt-3 whitespace-nowrap">{c.value}</div>
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Wayfair: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">About Wayfair</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Wayfair is an online retailer specializing in furniture, home decor and home goods, offering products for every room along with Wayfair Professional trade pricing for eligible businesses.
          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
           <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
           <div className="space-y-1">
             {[
               { icon: Sofa, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
               { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: Lamp, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: TreePine, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
          <h3 className="text-black font-black text-lg mb-8">Wayfair Products & Services</h3>
          <div className="space-y-8">
            {[
              { icon: Sofa, title: "Furniture", sub: "Living room, bedroom and dining furniture for every home." },
              { icon: Lamp, title: "Home Decor & Lighting", sub: "Rugs, wall art, decorative accents and lighting options." },
              { icon: TreePine, title: "Outdoor & Patio", sub: "Furniture and accessories for patios and outdoor living spaces." },
              { icon: Briefcase, title: "Wayfair Professional", sub: "Trade pricing and benefits for eligible business customers." },
            ].map((item, i) => (
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
        <section className="py-24 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
              <div className="prose max-w-none text-justify">
                <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                  Wayfair Discount Codes, Promo Codes & Furniture Deals 2026
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
                        ["Wayfair Promo Code – 48-Hour Clearance Sale | Up to 70% OFF", "Up to 70% OFF", "All Users", "Limited-time markdowns, available briefly", "Furniture, home décor & more"],
                        ["Wayfair Promo Code – Closeout Sale | Up to 80% OFF", "Up to 80% OFF", "All Users", "Final-sale, limited quantities", "Furniture, décor & home essentials"],
                        ["Wayfair – Bedroom Furniture | Up to 50% OFF", "Up to 50% OFF", "All Users", "Beds, dressers, nightstands & more", "Bedroom furniture"],
                        ["Wayfair – Area Rugs | Up to 70% OFF", "Up to 70% OFF", "All Users", "Living room, bedroom or dining designs", "Area rugs"],
                        ["Wayfair – Dorm Room Deals | Picks From $20", "From $20", "All Users", "Fast and free delivery on qualifying items", "Dorm room essentials"],
                        ["Wayfair – Outdoor Décor | From $15", "From $15", "All Users", "Budget-friendly seasonal refreshes", "Outdoor décor"],
                        ["Wayfair – Vases, Urns, Jars & Bottles | Under $50", "Under $50", "All Users", "Variety of styles available", "Vases, urns, jars & bottles"],
                        ["Wayfair – Extra 10% OFF for New Subscribers", "Extra 10% OFF", "New Subscribers", "Combine with select home & décor deals", "Eligible purchases"],
                        ["Wayfair – Free Shipping on Orders Over $35", "Free Shipping", "All Users", "Availability and exclusions may apply", "Orders over $35"],
                      ].map((row, i) => (
                        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 8 && "border-b-0")}>
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

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <p>
                    Looking for the latest <strong>Wayfair discount codes and promo codes</strong>? At Couponsbit, we help shoppers find furniture offers, home decor deals, outdoor and patio picks and Wayfair Professional offers.
                  </p>
                  <p>
                    Whether you're furnishing a new home or refreshing your decor, Wayfair offers a wide range of products for every room. Before you shop, check Couponsbit for the latest Wayfair offers.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Know More About Wayfair</h3>
                    <p>
                      Wayfair is an online retailer specializing in furniture, home decor and home goods, offering products across living room, bedroom, dining, outdoor and more.
                    </p>
                    <p>
                      Through Wayfair Professional, eligible business customers such as designers and contractors can access trade pricing and additional benefits. Wayfair also holds Way Day, a seasonal sale event across furniture and decor.
                    </p>
                    <p>
                      At Couponsbit, we help shoppers discover the latest Wayfair offers, seasonal picks and professional program highlights in one place.
                    </p>
                  </div>

                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use Wayfair via Couponsbit</h3>
                    <div className="space-y-6">
                      {[
                        "Step 1: Browse Available Wayfair Offers — Visit the Wayfair page on Couponsbit and explore the latest offers.",
                        "Step 2: Select Your Preferred Offer — Choose the offer that best fits your needs.",
                        "Step 3: Click Get Deal — You'll be taken directly to the relevant Wayfair page.",
                        "Step 4: Browse Products — Explore furniture, decor or outdoor items on Wayfair.",
                        "Step 5: Check Wayfair Professional — Business customers can explore trade pricing if eligible.",
                        "Step 6: Complete Your Purchase — Add items to your cart and check out on Wayfair.",
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                          <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save at Wayfair</h3>
                    <p><strong>Check Couponsbit Before Shopping:</strong> Always visit Couponsbit before shopping to see the latest Wayfair offers.</p>
                    <p><strong>Watch for Way Day:</strong> Wayfair's seasonal sale event often features deals across categories.</p>
                    <p><strong>Consider Wayfair Professional:</strong> Business customers may benefit from trade pricing.</p>
                    <p><strong>Compare Outdoor & Patio Picks:</strong> Seasonal pricing is updated regularly.</p>
                    <p><strong>Browse Lighting & Decor:</strong> Small decor accents can be a budget-friendly way to refresh a room.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Choose Wayfair?</h3>
                    <p><strong>Wide Product Range:</strong> Furniture and home decor for every room and style.</p>
                    <p><strong>Business Benefits:</strong> Wayfair Professional offers trade pricing for eligible customers.</p>
                    <p><strong>Seasonal Sales:</strong> Way Day and other events offer periodic savings opportunities.</p>
                    <p><strong>Nationwide Delivery:</strong> Products delivered across the country.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for Wayfair Deals?</h3>
                    <p><strong>Curated Wayfair Offers:</strong> We regularly review available Wayfair offers to help users discover current promotions.</p>
                    <p><strong>Convenient Browsing:</strong> Find furniture deals, decor picks and professional program highlights in one place.</p>
                    <p><strong>Completely Free:</strong> Couponsbit is free to use and helps customers save across home, electronics, travel and more.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">Furnish Your Home for Less</h3>
                    <p>Whether you're shopping for furniture, home decor, or outdoor items, Wayfair offers a range of options to explore.</p>
                    <p>Before your next order, check Couponsbit to explore the latest Wayfair offers and updates.</p>
                  </div>

                  {!isReadMore && (
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
                  )}
                </div>

                <button onClick={() => setIsReadMore(!isReadMore)} className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline">
                  {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
                </button>

                {/* FAQ */}
                <div className="mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
                  {[
                    { q: "What is Wayfair?", a: "Wayfair is an online retailer specializing in furniture, home decor and home goods." },
                    { q: "Does Wayfair offer discount codes?", a: "Yes. Wayfair runs promotions such as furniture deals and seasonal Way Day sale picks." },
                    { q: "Where can I find Wayfair discount codes?", a: "You can find the latest Wayfair discount codes and offers on Couponsbit." },
                    { q: "What is Wayfair Professional?", a: "Wayfair Professional is a free program offering trade pricing and benefits for eligible business customers." },
                    { q: "What is Way Day?", a: "Way Day is Wayfair's seasonal sale event featuring deals across furniture and home decor." },
                    { q: "Is Couponsbit free to use?", a: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers." },
                  ].map((faq, i) => (
                    <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors">
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Wayfair Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Furniture Deals", "Home Decor", "Outdoor Furniture", "Wayfair Discount Code", "Wayfair Professional", "Way Day Sale", "Lighting Deals", "Patio Furniture"].map(tag => (
                      <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Wayfair Deals</h3>
                  <div className="space-y-6">
                    {DEALS.map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">W</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Wayfair: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
