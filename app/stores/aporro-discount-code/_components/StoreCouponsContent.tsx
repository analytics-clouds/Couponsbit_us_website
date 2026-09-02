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
  Shirt,
  Sparkles,
  CheckCircle,
  LayoutGrid,
  Search,Coins, Gift, Layers,
  ShoppingBag,
  Home,
  Gem,
  Circle,
  Link2,
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
  { id: "d1", label: "GET", heading: "Aporro Discount Code – Welcome Offer | $50 OFF", sub: "Sign up for the Aporro email list and unlock $50 OFF" },
  { id: "d2", label: "SHOP", heading: "Aporro Discount Code – 2-Chain Combo | $99", sub: "Get the Aporro 2-Chain Combo for just $99" },
  { id: "d3", label: "FROM", heading: "Aporro – Micro Custom Round Photo Pendant | From $89", sub: "Create a personalized Micro Custom Round Photo Pendant from $89" },
  { id: "d4", label: "SAVE", heading: "Aporro – S925 Baguette Mix Halo Stud Earrings | Save 45%", sub: "Save 45% on the S925 Baguette Mix Halo Stud Earring Set" },
  { id: "d5", label: "SHOP", heading: "Aporro – Trove Orbit Pearl Chain in Rose Gold | $70", sub: "Shop the 8mm Trove Orbit Pearl Chain in Rose Gold for $70" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/vooglam-logo_qe8mis.webp", dealText: "Eyeglasses From $65", href: "/stores/vooglam-discount-code" },
  { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/sungait-logo_tfolql.webp", dealText: "Up To 50% OFF", href: "/stores/sungait-discount-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Wish.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/wish-logo_n1dypa.webp", dealText: "Up To 60% OFF", href: "/stores/wish-discount-code" },
  { name: "Outfitr", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782451456/outfitr-coupon-code_zbvad3.jpg", dealText: "Up to 62% OFF", href: "/stores/outfitr-discount-code" },
  { name: "Fytoo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp", dealText: "Frames From $1", href: "/stores/fytoo-discount-code" },
];

const STORE_URL = "https://guangzhoulitainformationtechnologycoltd.pxf.io/MKj7P3";

export default function AporroCouponsContent() {
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
              <span className="text-black font-extrabold">Aporro</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp" alt="Aporro" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Aporro</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(19.6k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Aporro discount codes, promo code and jewelry deals for Sep 2026. Sign up for the Aporro email list and unlock $50 OFF , while current offers include 2 chains for $99, bundles for $149, $40 rope chains, custom pendants from $89, and up to 45% OFF on S925 Baguette Mix Halo Stud Earring Set.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "9", label: "Offers" },
                    { icon: Percent, val: "920", label: "Deals" },
                    { icon: Users, val: "1M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788350345/158_r17qup.webp" alt="Aporro Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Aporro Discount Codes & Offers</h2>
        </div>

        {[
          { label: "GET", value: "$50", title: "Aporro Discount Code – Welcome Offer | $50 OFF", desc: "Sign up for the Aporro email list and unlock $50 OFF", bullets: ["Enter your email to receive access to the welcome savings", "Explore custom jewelry, chains, pendants and statement pieces", "A great first-order opportunity for new Aporro shoppers", "Aporro Discount Code, $50 Off, Welcome Offer, Jewelry Deals, USA"] },
          { label: "SHOP", value: "$99", title: "Aporro Discount Code – 2-Chain Combo | $99", desc: "Get the Aporro 2-Chain Combo for just $99", bullets: ["Mix and match two chains to create your own jewelry combination", "Designed for flexible styling and everyday layering", "A budget-friendly way to add multiple chains to your collection", "Aporro Discount Code, 2 Chain Combo, Chain Jewelry, Men's Jewelry, USA"] },
          { label: "FROM", value: "$89", title: "Aporro – Micro Custom Round Photo Pendant | From $89", desc: "Create a personalized Micro Custom Round Photo Pendant from $89", bullets: ["Add a meaningful photo to create a unique jewelry piece", "Compact design makes it suitable for everyday styling or gifting", "Choose a custom pendant that adds a personal touch to your look", "Aporro Discount Code, Custom Photo Pendant, Personalized Jewelry, USA"] },
          { label: "SAVE", value: "45%", title: "Aporro – S925 Baguette Mix Halo Stud Earrings | Save 45%", desc: "Save 45% on the S925 Baguette Mix Halo Stud Earring Set", bullets: ["Features a stylish halo-inspired design for an elevated look", "Crafted with S925 silver for a polished jewelry finish", "Ideal for everyday outfits, special occasions or gifting", "Aporro Discount Code, S925 Earrings, Stud Earrings, Jewelry Sale, USA"] },
          { label: "SHOP", value: "$70", title: "Aporro – Trove Orbit Pearl Chain in Rose Gold | $70", desc: "Shop the 8mm Trove Orbit Pearl Chain in Rose Gold for $70", bullets: ["Features a bold pearl-inspired chain design with a polished finish", "Rose gold styling adds a distinctive touch to your jewelry collection", "Suitable for statement looks, layering and special occasions", "Aporro Discount Code, Pearl Chain, Rose Gold Jewelry, Chain Necklace, USA"] },
          { label: "SAVE", value: "23%", title: "Aporro – Saint Mary Double Pendant Chain Set | Save 23%", desc: "Save 23% on the Saint Mary Double Pendant & Chain Layer Set", bullets: ["Features two pendant elements designed for layered styling", "Create a standout look with this detailed statement jewelry set", "Ideal for everyday outfits or occasions that call for extra style", "Aporro Discount Code, Pendant Chain Set, Layered Jewelry, Jewelry Deals, USA"] },
          { label: "SHOP", value: "$40", title: "Aporro – 6mm Iced Clasp Rope Chain Yellow Gold | $40", desc: "Get the 6mm Rope Chain with Iced Clasp in Yellow Gold for $40", bullets: ["Features an anti-tarnish finish for easier everyday wear", "Iced clasp detailing adds extra shine to the classic rope-chain design", "Wear it alone or pair it with a favorite pendant", "Aporro Discount Code, Rope Chain, Yellow Gold Jewelry, Iced Chain, USA"] },
          { label: "SHOP", value: "$40", title: "Aporro – 6mm Iced Clasp Rope Chain Rose Gold | $40", desc: "Shop the 6mm Rope Chain with Iced Clasp in Rose Gold for $40", bullets: ["Comes with an anti-tarnish finish designed for everyday styling", "Rose gold coloring gives the classic rope chain a modern appearance", "Great for layering or wearing as a standalone statement piece", "Aporro Discount Code, Rope Chain, Rose Gold Chain, Iced Jewelry, USA"] },
          { label: "BUNDLE", value: "$149", title: "Aporro – Pendant & 2 Chains Bundle | $149", desc: "Get 1 Pendant plus 2 Chains together for $149", bullets: ["Build a complete layered jewelry look with one convenient bundle", "Mix the pieces to create different combinations and styling options", "A value-focused choice for anyone looking to expand their jewelry collection", "Aporro Discount Code, Jewelry Bundle, Pendant and Chains, Men's Jewelry, USA"] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                {/* Left badge container updated to match standard sizing/typography */}
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Aporro: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="lg:w-[35%] space-y-8">

        <div className="w-full flex justify-center mb-6">
          <a
            href="https://www.google.com/preferences/source?q=couponsbit.us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          >
            <Image
              src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png"
              alt="Add as a preferred source on Google"
              width={280}
              height={70}
              className="w-full max-w-[260px] h-auto object-contain"
              priority
            />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-lg mb-6">Aporro Custom Jewelry Designs</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Custom options include personalized letter pendants, photo pendants, logo pieces, name designs, religious pendants, custom rings, and other one-of-a-kind creations.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Customers can select from different materials depending on the project. Aporro's custom inquiry page lists options including brass and CZ, silver and CZ, silver with VVS moissanite, silver with lab diamonds, and solid gold. 
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            For custom work, the brand asks customers to submit their ideas, images, preferred materials, and other project details before receiving a quote.
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
               { icon: Sparkles, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: ShoppingBag, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: Home, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
  <h3 className="text-black font-black text-lg mb-8">Best Ways to Save at Aporro</h3>
  
  <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8">
    You don't always need a promotional code to get a better price at Aporro. Combining a few shopping strategies can help you find better value.
  </p>

  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check for an Aporro Discount Code",
        sub: "Before placing an order, check CouponsBit for a current Aporro discount code. If the item is already discounted, compare the final price with the promotional offer before checking out."
      },
      {
        icon: Layers,
        title: "Shop Aporro Bundle Deals",
        sub: "If you're purchasing more than one piece, look through Aporro's bundle categories. The store currently features special pricing on chains, pendants, and other combinations."
      },
      {
        icon: Percent,
        title: "Look at Sale Collections",
        sub: "Aporro regularly marks down selected products. Checking the sale sections before browsing the full-price catalog can help you find similar designs at a lower price."
      },
      {
        icon: Gift,
        title: "Consider Member Rewards",
        sub: "Aporro's website currently promotes member benefits, including a welcome reward ($50 off) and gifts based on spending levels. Review current terms to understand how rewards are earned."
      },
      {
        icon: Coins,
        title: "Compare Materials",
        sub: "If you're mainly interested in the look rather than a particular metal, compare different material options. A silver or plated design can cost substantially less than solid gold."
      }
    ].map((item, i) => (
      <div key={i} className="flex gap-4 items-start">
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
          Aporro Discount Code, Promo Codes & Jewelry Deals 2026
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-base font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
        <th className="p-5 text-base font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th className="p-5 text-base font-black text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-5 text-base font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-5 text-base font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 text-sm font-semibold">
      {[
        { title: "Welcome Offer", val: "$50 OFF", cond: "Enter email for savings", app: "Custom jewelry & chains" },
        { title: "2-Chain Combo", val: "$99", cond: "Mix & match 2 chains", app: "Everyday layering sets" },
        { title: "Micro Custom Photo Pendant", val: "From $89", cond: "Add personalized photo", app: "Custom photo pendants" },
        { title: "S925 Baguette Mix Halo Studs", val: "45% OFF", cond: "Halo design", app: "S925 silver earrings" },
        { title: "Trove Orbit Pearl Chain (Rose Gold)", val: "$70", cond: "8mm pearl design", app: "Rose gold chains" },
        { title: "Saint Mary Double Pendant Set", val: "23% OFF", cond: "Two-pendant set", app: "Layered pendant sets" },
        { title: "6mm Iced Clasp Rope Chain (Yellow Gold)", val: "$40", cond: "Anti-tarnish finish", app: "Yellow gold rope chains" },
        { title: "6mm Iced Clasp Rope Chain (Rose Gold)", val: "$40", cond: "Anti-tarnish finish", app: "Rose gold rope chains" },
        { title: "Pendant & 2 Chains Bundle", val: "$149", cond: "Includes 1 pendant + 2 chains", app: "Jewelry bundle sets" },
      ].map((item, i, arr) => (
        <tr 
          key={i} 
          className={`border-b border-gray-200 hover:bg-gray-50/50 transition-colors ${i === arr.length - 1 ? 'border-b-0' : ''}`}
        >
          <td className="p-5 text-black font-extrabold text-base align-middle max-w-[200px]">
            {item.title}
          </td>
          <td className="p-5 text-[#056BFA] font-extrabold text-base align-middle whitespace-nowrap">
            {item.val}
          </td>
          <td className="p-5 text-gray-500 align-middle whitespace-nowrap">
            All Users
          </td>
          <td className="p-5 text-gray-500 align-middle max-w-[200px]">
            {item.cond}
          </td>
          <td className="p-5 text-gray-500 align-middle max-w-[220px]">
            {item.app}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for an <strong>Aporro discount code</strong> to save on your next jewelry purchase? CouponsBit helps shoppers discover current Aporro offers, promotions, and deals on chains, pendants, rings, earrings, bracelets, grillz, watches, and custom jewelry.
          </p>
          <p>
            Aporro is a jewelry brand known for its bold, iced-out aesthetic and extensive range of hip-hop, streetwear, and personalized jewelry. Its catalog includes everything from everyday chains and pendants to moissanite pieces, custom designs, and grillz. The brand also offers custom jewelry services for shoppers who want a piece designed around their own ideas.
          </p>
          <p>
            Whether you're shopping for a Cuban link chain, a personalized pendant, a moissanite ring, or a statement piece, checking CouponsBit before placing your order can help you find an available offer.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Discount Code</h3>
            <p>
              An Aporro discount code can help you lower the cost of eligible jewelry when a promotional offer is available. Since Aporro also runs product markdowns and bundle promotions, it's useful to compare the available offer with the current product price before completing your purchase.
            </p>
            <p>
              The brand's website currently features sale products and bundle offers across several categories. For example, its collections include chain bundles, pendant bundles, earring promotions, and other special offers.
            </p>
            <p>
              When shopping for a discount, always check the terms attached to the promotion. Some offers may exclude premium products, gift cards, custom pieces, or other selected items.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Promo Code Offers</h3>
            <p>
              If you're specifically searching for an Aporro promo code, CouponsBit is a convenient place to check before heading to the store.
            </p>
            <p>
              Promotional offers can change, so don't assume that a code found on an older page is still active. Before using one, check:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The expiration date</li>
              <li>Eligible products</li>
              <li>Minimum order requirements</li>
              <li>Sale-item exclusions</li>
              <li>Custom jewelry restrictions</li>
              <li>Whether the offer can be combined with another promotion</li>
            </ul>
            <p>
              If a code doesn't apply, reviewing these conditions can often explain why.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Jewelry</h3>
            <p>
              Aporro jewelry focuses heavily on statement pieces inspired by hip-hop and streetwear culture. The catalog includes more than 1,000 products across categories such as chains, earrings, custom jewelry, pendants, wallet chains, bracelets, and rings.
            </p>
            <p>
              The brand's current collection includes both ready-to-ship designs and personalized pieces. This gives shoppers the choice between picking a finished design or creating something that represents their own name, logo, image, or concept.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Chains</h3>
            <p>
              Chains are one of Aporro's biggest categories, with options ranging from classic rope and Cuban styles to iced-out and statement designs.
            </p>
            <p>
              The brand currently features products such as the Aporro DNA Chain, Round Cut Prong Cuban Link Chain, rope chains, tennis chains, and other designs.
            </p>
            <p>
              For shoppers who prefer a coordinated look, Aporro also offers chain and bracelet sets. Its collection includes options such as an 8mm 14K Gold Round Cut Cuban Link Chain & Bracelet Gift Set.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Cuban Chain</h3>
            <p>
              The Aporro Cuban chain is a strong choice if you're looking for a classic streetwear-inspired chain with a substantial appearance.
            </p>
            <p>
              Aporro offers Cuban designs in different widths, finishes, and stone configurations. Some designs are available in gold-toned finishes, while others feature iced or paved details for a more eye-catching appearance.
            </p>
            <p>
              When choosing a Cuban chain, consider the width and length as well as the finish. A thinner chain can work well for everyday layering, while wider styles create a more prominent look.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Tennis Chain</h3>
            <p>
              Aporro also offers tennis chains for shoppers who prefer a continuous row of stones rather than the larger links associated with Cuban or rope chains.
            </p>
            <p>
              The brand's collection includes tennis-inspired jewelry in different stone and metal combinations, allowing shoppers to choose between understated and more noticeable styles.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Custom Jewelry</h3>
            <p>
              One of Aporro's standout features is its custom jewelry service. Instead of choosing exclusively from ready-made designs, customers can submit their own ideas and work with the brand to develop a personalized piece.
            </p>
            <p>Aporro's custom service covers products including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pendants</li>
              <li>Necklaces</li>
              <li>Rings</li>
              <li>Bracelets</li>
              <li>Watches</li>
              <li>Grillz</li>
            </ul>
            <p>
              The company says its custom jewelry is designed and handcrafted in-house, with personal jewelry consultants providing visual feedback during the design process.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Custom Jewelry Reviews</h3>
            <p>
              If you're considering a personalized piece, looking at product-specific reviews can be useful. Aporro's website displays customer reviews on individual products, including custom pendants and other jewelry.
            </p>
            <p>
              For example, one custom Old English letter and number pendant currently shows a 4.8 rating from more than 200 reviews on the product page.
            </p>
            <p>
              Reviews can help you evaluate the appearance and perceived quality of a particular design, but custom products can vary depending on the material, size, stone selection, and complexity.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Moissanite Jewelry</h3>
            <p>
              Aporro moissanite jewelry is another important part of the brand's collection.
            </p>
            <p>
              Aporro uses moissanite in various products, including earrings, pendants, chains, and custom jewelry. The brand currently lists products such as Moissanite S925 Toi et Moi earrings and custom moissanite pendants.
            </p>
            <p>
              Moissanite is often chosen for its bright appearance and diamond-like visual qualities. If you're shopping for a stone-heavy piece, compare the stone type, metal, setting, and overall construction rather than judging a product only by its appearance in photographs.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Moissanite Pendants</h3>
            <p>
              Aporro offers personalized moissanite pendants in several styles, including custom letters, numbers, names, and other designs.
            </p>
            <p>
              Its custom Old English pendant, for example, is made from 925 sterling silver and can be ordered with either CZ stones or moissanite. The product page lists the stone quality as 5A/VVS.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Grillz</h3>
            <p>
              Aporro grillz are designed for shoppers looking for a more distinctive statement piece.
            </p>
            <p>
              The brand offers both pre-made and custom grillz. Its custom collection includes different tooth counts, materials, colors, and stone options. One current custom fully iced-out grillz design is available for four, six, or eight teeth and can be ordered with CZ or moissanite stones.
            </p>
            <p>
              Aporro also offers pre-made grillz that don't require customers to visit a dentist or send back a teeth mold.
            </p>
            <p>
              Because grillz are a hygiene-sensitive product, shoppers should pay particular attention to the store's return conditions before purchasing.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Gold Jewelry</h3>
            <p>
              Aporro offers jewelry in a variety of finishes and materials, ranging from plated pieces and sterling silver to solid gold options.
            </p>
            <p>
              The brand's custom service includes yellow gold, white gold, and rose gold options for selected designs.
            </p>
            <p>
              If you're searching for Aporro real gold jewelry, check the individual product description carefully. Not every gold-colored piece is solid gold. Material and finish can vary substantially between products.
            </p>
            <p>
              This is especially important when comparing prices, since a plated or vermeil piece will naturally have a different price and care requirement from solid gold jewelry.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Sale & Deals</h3>
            <p>
              Aporro regularly features reduced-price products and bundle promotions throughout its collections.
            </p>
            <p>
              The current website includes dedicated bundle categories such as $149 chain bundles, $149 pendant bundles, $99 chain bundles, $79 chain bundles, and $89 pendant bundles.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Jewelry Deals</h3>
            <p>
              Bundle promotions can be particularly useful if you're shopping for multiple pieces or want to create a coordinated look.
            </p>
            <p>
              For example, the brand currently highlights discounted chain-and-pendant combinations as well as other sets. Some individual products are also marked down from their regular prices.
            </p>
            <p>
              Before buying a bundle, compare its price with the cost of purchasing individual pieces. This helps you determine whether the bundle actually provides the better value for the items you want.
            </p>
          </div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use an Aporro Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Find an Aporro Coupon Code — Visit CouponsBit and check the available Aporro offers before shopping.",
                "Step 2: Choose Your Jewelry — Browse Aporro's collections and select the chain, pendant, earrings, ring, bracelet, or other item you want.",
                "Step 3: Copy the Code — If the promotion requires a code, reveal it on CouponsBit and copy it.",
                "Step 4: Add Your Items to the Cart — Visit Aporro and add your selected products to your shopping cart.",
                "Step 5: Apply the Code — Proceed to checkout and enter the promotional code in the applicable field.",
                "Step 6: Review Your Total — Confirm that the expected saving has been applied before completing the order.",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 font-bold text-sm mt-4">
              For custom or made-to-order products, check the offer's conditions carefully because some promotions may not apply to these items.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Aporro Shipping & Returns</h3>
            <p>
              Understanding shipping and return conditions is particularly important when buying custom jewelry.
            </p>
            <p>
              Aporro states that standard orders typically require around 2 business days for processing plus approximately 4–6 business days for shipping. Solid gold, custom, and made-to-order products can take longer, with the brand advising customers to allow up to 2–3 weeks for delivery.
            </p>
            <p>
              For U.S. shipments, Aporro states that standard orders generally take 2–4 business days after processing, while custom orders can require additional production time.
            </p>
            <p>
              The brand also states that eligible items can be returned within 14 days of purchase. However, solid gold and custom or made-to-order products are excluded, and earrings and grillz cannot be returned for hygiene reasons.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Shop Aporro Jewelry?</h3>
            <p>
              Aporro offers a broad selection for shoppers who want jewelry with a bold, personalized aesthetic.
            </p>
            <p><strong>Large Jewelry Selection:</strong> The store carries chains, pendants, earrings, rings, bracelets, wallet chains, grillz, watches, and custom jewelry.</p>
            <p><strong>Custom Design Options:</strong> Aporro allows customers to submit their own concepts and work with a personal jewelry consultant on custom pieces.</p>
            <p><strong>Moissanite Collection:</strong> Shoppers can find moissanite earrings, pendants, and other pieces, including personalized designs.</p>
            <p><strong>Wide Range of Price Points:</strong> The catalog includes relatively affordable everyday pieces as well as premium custom and solid-gold jewelry.</p>
            <p><strong>Warranty Support:</strong> Aporro states that gold-plated and vermeil jewelry is covered by a 365-day warranty against manufacturing defects, with a one-time replacement subject to its stated terms and a shipping and handling fee.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Find the Best Aporro Deals</h3>
            <p>
              Whether you're shopping for an everyday chain, an iced-out pendant, moissanite earrings, a Cuban link, or a fully personalized piece, Aporro offers a wide range of jewelry styles to explore.
            </p>
            <p>
              The brand's combination of ready-made designs and custom jewelry makes it particularly useful for shoppers who want something more personal than standard accessories. Its current collections also include sale items, bundle offers, and member rewards that can provide additional ways to save.
            </p>
            <p>
              Before you check out, visit CouponsBit to see whether a current Aporro discount code can make your order more affordable.
            </p>
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
          <h3 className="text-2xl font-black text-black mb-8">Aporro Discount Code FAQs</h3>
          {[
            { q: "Does Aporro offer a discount code?", a: "Aporro offers sales, bundles, member rewards, and promotional offers throughout the year. Check CouponsBit for currently available savings before ordering." },
            { q: "Where can I find an Aporro promo code?", a: "You can check CouponsBit for current Aporro promo codes and other available offers." },
            { q: "What does Aporro sell?", a: "Aporro sells chains, pendants, earrings, rings, bracelets, wallet chains, watches, grillz, and custom jewelry." },
            { q: "Does Aporro offer custom jewelry?", a: "Yes. Aporro offers custom pendants, necklaces, rings, bracelets, watches, and grillz. Customers can submit their own concepts and work with a jewelry consultant during the design process." },
            { q: "Does Aporro sell moissanite jewelry?", a: "Yes. Aporro offers moissanite jewelry across several categories, including earrings and custom pendants." },
            { q: "Does Aporro sell Cuban chains?", a: "Yes. Cuban chains are among the chain styles available through Aporro, with different widths, finishes, and designs." },
            { q: "Does Aporro sell grillz?", a: "Yes. Aporro sells both pre-made and custom grillz. Custom options include different tooth counts, finishes, and stone choices." },
            { q: "How long does Aporro shipping take?", a: "Aporro states that standard orders typically take about 2 business days to process plus approximately 4–6 business days for shipping. Custom and made-to-order products require additional time." },
            { q: "What is Aporro's return policy?", a: "Eligible unworn items can generally be returned within 14 days of receipt. Solid gold and custom or made-to-order products are excluded, while earrings and grillz cannot be returned for hygiene reasons." },
            { q: "Is CouponsBit free to use?", a: "Yes. CouponsBit is free to use. You can browse available Aporro offers and other shopping deals without paying a fee." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Aporro Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["New Chains", "Custom Jewelry", "Pendants", "Earrings", "Aporro Discount Code", "Bracelets", "Rings", "Free Shipping"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Aporro Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">A</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Aporro: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
