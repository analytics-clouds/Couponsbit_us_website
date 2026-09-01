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
  Baby,
  Home,
  Sparkles,
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
  { id: "d1", label: "SAVE", heading: "Short Lace Godet Dress | UP TO 80% OFF", sub: "Zara Discount Code" },
  { id: "d2", label: "SAVE", heading: "Ruffled Striped Shirt | UP TO 80% OFF", sub: "Zara Discount Code" },
  { id: "d3", label: "SAVE", heading: "Corset Halter Top | UP TO 80% OFF", sub: "Zara Deal" },
  { id: "d4", label: "SAVE", heading: "Polka Dot Volume Halter Midi Dress | UP TO 40% OFF", sub: "Zara Deal" },
  { id: "d5", label: "ONLY", heading: "Satin Effect Cut Out Dress | ONLY $49.90", sub: "Zara Discount Code" },
  { id: "d6", label: "UP TO", heading: "Women’s Outerwear | UP TO 50% OFF", sub: "Zara Discount Code" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/vooglam-logo_qe8mis.webp", dealText: "Eyeglasses From $65", href: "/stores/vooglam-discount-code" },
  { name: "Outfitr", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782451456/outfitr-coupon-code_zbvad3.jpg", dealText: "Up To 62% OFF", href: "/stores/outfitr-discount-code" },
  { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/sungait-logo_tfolql.webp", dealText: "Up To 50% OFF", href: "/stores/sungait-discount-code" },
  { name: "Macy's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp", dealText: "Up To 75% OFF", href: "/stores/macys-promo-code" },
  { name: "Shein", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp", dealText: "Up To 90% OFF", href: "/stores/shein-coupon-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
];

const STORE_URL = "https://www.zara.com/";

export default function ZaraCouponsContent() {
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
              <span className="text-black font-extrabold">Zara</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp" alt="Zara" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Zara</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(47.9k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Zara discount codes, promo codes, and fashion deals for Sep 2026. Save up to 80% on selected styles, shop dresses and tops from $9.98, women’s outerwear up to 50% OFF, halter tops from $14, and linen shirts at 46% OFF.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "10", label: "Offers" },
                    { icon: Percent, val: "2.4k", label: "Deals" },
                    { icon: Users, val: "22M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787134832/161_dhcfwa.webp" alt="Zara Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Zara Discount Codes & Offers</h2>
        </div>

        {[
          { label: "SAVE", value: "80% OFF", title: "Zara Discount Code – Short Lace Godet Dress | UP TO 80% OFF 👗", desc: "Get the Zara Short Lace Godet Dress for just $13.98, reduced from $69.90.", bullets: ["Save an impressive 80% OFF on this Zara fashion deal.", "Use a Zara discount code when available to unlock additional savings.", "Shop Zara sale styles and enjoy up to 80% OFF on selected fashion while stocks last."] },
          { label: "SAVE", value: "80% OFF", title: "Zara Discount Code – Ruffled Striped Shirt | UP TO 80% OFF 👚", desc: "Grab the Zara Ruffled Striped Shirt for only $9.98, down from $49.90.", bullets: ["Enjoy 80% OFF on this stylish Zara shirt during the current sale.", "Apply a Zara discount code at checkout when available for potential extra savings.", "Explore Zara sale styles and get up to 80% OFF on selected fashion items."] },
          { label: "SAVE", value: "80% OFF", title: "Zara Corset Halter Top – UP TO 80% OFF 👗", desc: "Get the Zara Corset Halter Top for just $9.98, reduced from $49.90.", bullets: ["Save 80% OFF on this trendy Zara fashion deal.", "Add a stylish statement piece to your wardrobe at a heavily reduced price.", "Shop the Zara sale and explore selected styles available with up to 80% OFF."] },
          { label: "SAVE", value: "40% OFF", title: "Zara Polka Dot Volume Halter Midi Dress – UP TO 40% OFF 💃", desc: "Get the Zara Polka Dot Volume Halter Midi Dress for $41.94, down from $69.90.", bullets: ["Save 40% OFF on this elegant Zara dress.", "Enjoy a stylish polka-dot design with a flattering halter silhouette.", "Shop Zara sale deals and discover selected fashion styles with up to 40% OFF."] },
          { label: "ONLY", value: "$49.90", title: "Zara Discount Code – Satin Effect Cut Out Dress | ONLY $49.90 👗", desc: "Grab the Zara Satin Effect Cut Out Dress for just $49.90.", bullets: ["Enjoy a stylish midi dress with a V-neck and spaghetti straps.", "Use a Zara discount code when available to unlock additional savings.", "Shop Zara fashion deals and discover exclusive styles at great prices."] },
          { label: "UP TO", value: "50% OFF", title: "Zara Discount Code – Women’s Outerwear | UP TO 50% OFF 🧥", desc: "Get selected Zara women’s outerwear styles with up to 50% OFF.", bullets: ["Shop coats and outerwear starting from just $23.96.", "Apply a Zara discount code at checkout when available for potential extra savings.", "Explore Zara outerwear deals and refresh your wardrobe for less."] },
          { label: "FROM", value: "$14", title: "Zara Women’s Halter Top Collection | FROM $14 👚", desc: "Explore Zara’s Women’s Halter Top Collection with prices starting from $14.", bullets: ["Choose from multiple stylish designs and color options.", "Find fashionable halter tops at exclusive prices for everyday looks.", "Shop Zara deals and grab your favorite styles while available."] },
          { label: "FLAT", value: "46% OFF", title: "Zara Oversized Linen Blend Shirt | FLAT 46% OFF 👔", desc: "Get the Zara Oversized Linen Blend Shirt for just $45.90.", bullets: ["Enjoy a comfortable oversized fit with a lapel collar and long sleeves.", "Features a practical front patch pocket and versatile white color.", "Pair it with jeans or pants for an effortless everyday look."] },
          { label: "ONLY", value: "$39.90", title: "Zara Basic Knit Sweater | ONLY $39.90 🧶", desc: "Grab the Zara Basic Knit Sweater for only $39.90.", bullets: ["Features a classic round neck and long sleeves for comfortable everyday wear.", "Available as an offer on selected Zara products.", "Shop Zara sale deals and find stylish essentials at great prices."] },
          { label: "ONLY", value: "$49.90", title: "Zara Satin Effect Cut Out Dress | ONLY $49.90 ✨", desc: "Get the Zara Satin Effect Cut Out Dress for just $49.90.", bullets: ["Designed with a stylish V-neck, spaghetti straps, and elegant midi length.", "Perfect for creating a sophisticated and fashionable look.", "Shop Zara deals and grab this stylish dress at a great price."] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[120px] sm:w-[190px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-1">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[12px] sm:text-[14px] font-extrabold leading-3">{c.label}</p>
                    <div className="text-[18px] sm:text-3xl font-black leading-none mt-2.5 sm:mt-3 whitespace-nowrap">{c.value}</div>
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Zara: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">What Is a Zara Discount Code?</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            A Zara discount code is a promotional code or offer that may provide a saving on an eligible purchase when the applicable terms are met.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Not every Zara promotion necessarily works in the same way. An offer could be connected to particular products, collections, customers, dates, or other conditions. Before relying on a promotion, check its specific terms and make sure it applies to the items in your cart.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            At CouponsBit, shoppers can check the available Zara offers before heading to checkout and compare the savings opportunities currently available.

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
               { icon: Baby, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
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
  <h3 className="text-black font-black text-lg mb-2">How to Use a Zara Coupon Code</h3>
  
  <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8">
    Using a promotional offer is generally straightforward:
  </p>

  <div className="space-y-8">
    {[
      {
        step: "Step 1",
        title: "Visit CouponsBit",
        sub: "Start by checking the available Zara discount code and other Zara offers on CouponsBit."
      },
      {
        step: "Step 2",
        title: "Choose an Offer",
        sub: "Look through the available promotions and select one that matches the products you're planning to purchase."
      },
      {
        step: "Step 3",
        title: "Read the Terms",
        sub: "Check the promotion's conditions, including eligible products, minimum purchase requirements, dates, and any customer restrictions."
      },
      {
        step: "Step 4",
        title: "Copy the Code",
        sub: "If the promotion requires a code, copy it before continuing to the Zara website."
      },
      {
        step: "Step 5",
        title: "Shop at Zara",
        sub: "Browse the products you want and add eligible items to your shopping bag."
      },
      {
        step: "Step 6",
        title: "Apply the Promotion",
        sub: "Enter the applicable code in the designated promotional-code field if required."
      },
      {
        step: "Step 7",
        title: "Check Your Total",
        sub: "Make sure the expected saving has been reflected before completing the purchase."
      }
    ].map((item, i) => (
      <div key={i} className="flex gap-4 items-start">
        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xs">
          {i + 1}
        </div>
        <div>
          <p className="text-black font-black text-sm leading-tight mb-2">
            {item.step}: {item.title}
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


        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Zara Discount Code, Coupon Code & Sale
        </h2>

        <div className="my-12 overflow-x-auto rounded-[20px] border border-gray-200 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[800px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider rounded-l-lg">Offer</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider whitespace-nowrap">Discount / Price</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider">Key Highlights</th>
        <th className="p-4 text-[14px] font-bold text-white uppercase tracking-wider rounded-r-lg">Details & Description</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 font-normal text-[13px] divide-y divide-gray-100">
      {[
        { label: "SAVE", value: "80% OFF", title: "Zara Discount Code – Short Lace Godet Dress 👗", desc: "Get the Zara Short Lace Godet Dress for just $13.98, reduced from $69.90.", bullets: ["Save an impressive 80% OFF on this Zara fashion deal.", "Use a Zara discount code when available for additional savings."] },
        { label: "SAVE", value: "80% OFF", title: "Zara Discount Code – Ruffled Striped Shirt 👚", desc: "Grab the Zara Ruffled Striped Shirt for only $9.98, down from $49.90.", bullets: ["Enjoy 80% OFF on this stylish Zara shirt during the sale.", "Apply a Zara discount code at checkout when available."] },
        { label: "SAVE", value: "80% OFF", title: "Zara Corset Halter Top 👗", desc: "Get the Zara Corset Halter Top for just $9.98, reduced from $49.90.", bullets: ["Save 80% OFF on this trendy Zara fashion deal.", "Add a stylish statement piece to your wardrobe."] },
        { label: "SAVE", value: "40% OFF", title: "Zara Polka Dot Volume Halter Midi Dress 💃", desc: "Get the Zara Polka Dot Volume Halter Midi Dress for $41.94, down from $69.90.", bullets: ["Save 40% OFF on this elegant Zara dress.", "Enjoy a stylish polka-dot design with a flattering halter silhouette."] },
        { label: "ONLY", value: "$49.90", title: "Zara Discount Code – Satin Effect Cut Out Dress 👗", desc: "Grab the Zara Satin Effect Cut Out Dress for just $49.90.", bullets: ["Enjoy a stylish midi dress with a V-neck and spaghetti straps.", "Use a Zara discount code when available."] },
        { label: "UP TO", value: "50% OFF", title: "Zara Discount Code – Women’s Outerwear 🧥", desc: "Get selected Zara women’s outerwear styles with up to 50% OFF.", bullets: ["Shop coats and outerwear starting from just $23.96.", "Explore Zara outerwear deals."] },
        { label: "FROM", value: "$14", title: "Zara Women’s Halter Top Collection 👚", desc: "Explore Zara’s Women’s Halter Top Collection with prices starting from $14.", bullets: ["Choose from multiple stylish designs and color options.", "Find fashionable halter tops for everyday looks."] },
        { label: "FLAT", value: "46% OFF", title: "Zara Oversized Linen Blend Shirt 👔", desc: "Get the Zara Oversized Linen Blend Shirt for just $45.90.", bullets: ["Enjoy a comfortable oversized fit with a lapel collar.", "Features a practical front patch pocket and versatile white color."] },
        { label: "ONLY", value: "$39.90", title: "Zara Basic Knit Sweater 🧶", desc: "Grab the Zara Basic Knit Sweater for only $39.90.", bullets: ["Features a classic round neck and long sleeves.", "Available as an offer on selected Zara products."] },
        { label: "ONLY", value: "$49.90", title: "Zara Satin Effect Cut Out Dress ✨", desc: "Get the Zara Satin Effect Cut Out Dress for just $49.90.", bullets: ["Designed with a stylish V-neck and elegant midi length.", "Perfect for creating a sophisticated and fashionable look."] },
      ].map((item, i) => (
        <tr key={i} className="hover:bg-gray-50/80 transition-colors">
          <td className="p-4 text-gray-900 font-semibold align-middle max-w-[280px]">
            {item.title}
          </td>
          <td className="p-4 text-[#056BFA] font-bold align-middle whitespace-nowrap">
            {item.label === "UP TO"
              ? `Up to ${item.value}`
              : item.label === "FLAT"
              ? `Flat ${item.value}`
              : item.label === "ONLY"
              ? `Only ${item.value}`
              : item.label === "FROM"
              ? `From ${item.value}`
              : item.value}
          </td>
          <td className="p-4 text-gray-500 align-middle whitespace-nowrap">
            All Users
          </td>
          <td className="p-4 text-gray-500 align-middle max-w-[220px]">
            {item.bullets[0]}
          </td>
          <td className="p-4 text-gray-500 align-middle max-w-[260px]">
            {item.desc}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <h3 className="text-xl font-black text-[#056bfa] mb-4">
            Find the Best Zara Discount Code and Save on Your Next Order
            </h3>
            
          <p>
            Looking for a <strong>Zara discount code</strong> before placing your next order? Whether you're refreshing your wardrobe, shopping for a new outfit, updating your accessories, or browsing Zara Home, checking for an available offer can help you get more value from your purchase.
          </p>
          <p>
            Zara is known for fashion-forward clothing, footwear, accessories, beauty products, fragrances, and home collections for women, men, and children. The U.S. store also features dedicated collections such as Zara Home, beauty, Zara Hair, and pre-owned fashion.
          </p>
          <p>
            At CouponsBit, you can check available Zara coupon code offers, promotions, and savings opportunities before shopping. If you're planning a seasonal wardrobe update or waiting for a Zara sale, comparing the available offers first can be a simple way to shop more strategically.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Shop at Zara?</h3>
            
            <p>
              Zara has built its reputation around contemporary fashion, with collections that cover everyday essentials, occasionwear, seasonal pieces, footwear, accessories, beauty, and home products. Its U.S. catalog is organized across women's, men's, kids', beauty, Zara Home, and other collections.
            </p>
            <p>
              Whether you're looking for a statement dress, a tailored blazer, everyday denim, sneakers, a new fragrance, or something for your home, Zara gives shoppers plenty of categories to explore.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Women's Clothing</h3>
            
            <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
  {/* Hyperlink wrapping the full-size image */}
  <a href="https://www.zara.com/in/en/woman-mkt1000.html?v1=1881757&regionGroupId=230" className="absolute inset-0 z-10 block">
    <img 
      src="https://res.cloudinary.com/couponsbit/image/upload/v1787141942/1_nlbu8r.webp" 
      alt="Women's Clothing Collection" 
      className="w-full h-full object-cover"
    />
  </a>
  </div>
            <p>
              Zara's women's collection covers a broad range of wardrobe staples and trend-led pieces. Shoppers can browse dresses, tops, bodysuits, T-shirts, tank tops, shirts, blouses, cardigans, sweaters, pants, shorts, co-ord sets, jeans, skirts, jackets, blazers, sweatshirts, sweatpants, swimwear, lingerie, and linen pieces.
            </p>
            <p>
              For shoppers building a complete outfit, Zara also offers women's shoes, bags, accessories, jewelry, perfumes, makeup, and hair products.
            </p>
            <p><strong>Dresses:</strong> From casual day dresses to more polished styles, dresses are a major part of Zara's women's collection. Depending on the season, shoppers may find mini, midi, maxi, fitted, flowing, printed, knit, linen, and occasion-focused styles.</p>
            <p><strong>Tops, Shirts & Blouses:</strong> Zara offers a wide selection of everyday and elevated tops, including T-shirts, tank tops, bodysuits, shirts, and blouses. These can work as standalone pieces or as the foundation for layered outfits.</p>
            <p><strong>Jeans, Pants & Shorts:</strong> For everyday dressing, Zara carries jeans, trousers, pants, shorts, and other bottom styles. Different fits, washes, fabrics, and silhouettes make it possible to build everything from casual weekend outfits to more polished looks.</p>
            <p><strong>Knitwear:</strong> Cardigans, sweaters and other knit pieces provide options for layering and seasonal dressing. Lightweight knits can work for transitional weather, while heavier sweaters offer additional warmth.</p>
            <p><strong>Jackets, Blazers & Outerwear:</strong> Zara's outerwear selection includes jackets and blazers, with styles suited to casual, professional, evening, and seasonal wardrobes.</p>
            <p><strong>Swimwear & Lingerie:</strong> Zara also offers swimwear and lingerie as part of its women's collections, giving shoppers options beyond everyday clothing.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Men's Clothing</h3>
            
            <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
  {/* Hyperlink wrapping the full-size image */}
  <a href="https://www.zara.com/in/en/man-l534.html?v1=1885841&regionGroupId=230" className="absolute inset-0 z-10 block">
    <img 
      src="https://res.cloudinary.com/couponsbit/image/upload/v1787141943/2_g3cab3.webp" 
      alt="Women's Clothing Collection" 
      className="w-full h-full object-cover"
    />
  </a>
  </div>
            
            <p>
              Zara's men's range covers casual, smart-casual, formal, and seasonal wardrobes. Current U.S. categories include shirts, T-shirts, jeans, pants, shorts, polo shirts, matching sets, sweaters, suits, blazers, jackets, overshirts, hoodies, sweatshirts, and other wardrobe essentials.
            </p>
            <p><strong>Shirts & T-Shirts:</strong> Men can choose from everyday T-shirts and more polished shirts in a variety of cuts, fabrics, patterns, and seasonal styles.</p>
            <p><strong>Jeans, Pants & Shorts:</strong> Zara's men's bottoms include jeans, pants, chinos-style options, shorts, and seasonal silhouettes that can be paired with casual or more refined tops.</p>
            <p><strong>Suits & Blazers:</strong> For workwear, events, weddings, dinners, and other occasions, Zara offers suits and blazers that can be worn together or separately.</p>
            <p><strong>Sweaters & Knitwear:</strong> Men's knitwear includes sweaters and other layering pieces designed for cooler weather and transitional seasons.</p>
            <p><strong>Jackets & Overshirts:</strong> Zara's men's outerwear range includes jackets and overshirts suitable for casual everyday outfits and seasonal layering.</p>
            <p><strong>Sportswear & Casualwear:</strong> Hoodies, sweatshirts and other relaxed pieces provide options for off-duty wardrobes and comfortable everyday dressing.</p>
            <p><strong>Shoes, Bags & Accessories:</strong> Men can also browse shoes, sneakers, bags, backpacks, swimwear, underwear, socks, and accessories.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Zara Kids</h3>
            
             <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
  {/* Hyperlink wrapping the full-size image */}
  <a href="https://www.zara.com/in/en/kids-mkt1.html?v1=2112261&regionGroupId=230" className="absolute inset-0 z-10 block">
    <img 
      src="https://res.cloudinary.com/couponsbit/image/upload/v1787141943/3_r9lhlz.webp" 
      alt="Women's Clothing Collection" 
      className="w-full h-full object-cover"
    />
  </a>
  </div>
            <p>
              Zara's U.S. kids' collections cover different age groups, from newborns and babies through toddlers and children up to 14 years. The range includes clothing, shoes, accessories, and basics.
            </p>
            <p><strong>Girls' Clothing:</strong> Girls' collections include dresses, tops, T-shirts, shirts, blouses, pants, shorts, skirts, jeans, cardigans, sweaters, jackets, blazers, sweatshirts, swimwear, and co-ordinated sets.</p>
            <p><strong>Boys' Clothing:</strong> Boys can shop for T-shirts, shirts, jeans, pants, shorts, polo shirts, sweaters, suits, blazers, jackets, hoodies, sweatshirts, and other everyday pieces.</p>
            <p><strong>Baby & Toddler:</strong> Zara also has dedicated ranges for babies and toddlers, including clothing, shoes, accessories, and practical everyday pieces.</p>
            <p><strong>Kids' Shoes & Accessories:</strong> The children's range includes shoes and accessories designed for different age groups. Zara also offers children's home products and gift-oriented items through Zara Home Kids.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Zara Shoes, Bags & Accessories</h3>
             <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
  {/* Hyperlink wrapping the full-size image */}
  <a href="https://www.zara.com/in/en/man-shoes-l769.html" className="absolute inset-0 z-10 block">
    <img 
      src="https://res.cloudinary.com/couponsbit/image/upload/v1787141944/4_vnvmws.webp" 
      alt="Women's Clothing Collection" 
      className="w-full h-full object-cover"
    />
  </a>
  </div>
            
            <p>
              A new outfit is not complete without the right finishing touches. Zara offers footwear and accessories across its women's, men's, and kids' collections.
            </p>
            <p>Depending on the collection, shoppers can find:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sneakers</li>
              <li>Boots</li>
              <li>Sandals</li>
              <li>Flats</li>
              <li>Heels</li>
              <li>Loafers</li>
              <li>Handbags</li>
              <li>Shoulder bags</li>
              <li>Crossbody bags</li>
              <li>Backpacks</li>
              <li>Belts</li>
              <li>Hats</li>
              <li>Jewelry</li>
              <li>Sunglasses</li>
              <li>Wallets and other accessories</li>
            </ul>
            <p>
              These categories make it easier to coordinate an entire look rather than shopping for clothing alone.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Zara Beauty, Perfumes & Hair</h3>
            
             <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
  {/* Hyperlink wrapping the full-size image */}
  <a href="https://zarabeauty.co/" className="absolute inset-0 z-10 block">
    <img 
      src="https://res.cloudinary.com/couponsbit/image/upload/v1787141942/6_xnhhkq.webp" 
      alt="Women's Clothing Collection" 
      className="w-full h-full object-cover"
    />
  </a>
  </div>
            <p>
              Zara's U.S. site also has a dedicated beauty offering covering perfumes, makeup, and Zara Hair. Women's and men's collections feature fragrances, while beauty and hair products provide additional options for personal care and grooming.
            </p>
            <p><strong>Perfumes & Fragrances:</strong> Zara's fragrance collections include perfumes for women and colognes for men. They can be an option for shoppers looking to explore fragrances alongside their fashion purchases.</p>
            <p><strong>Makeup:</strong> Zara's beauty range includes makeup products, allowing shoppers to coordinate their beauty routine with the rest of their style.</p>
            <p><strong>Zara Hair:</strong> The brand also offers Zara Hair products as part of its beauty assortment.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Zara Home</h3>
            <p>
              Zara isn't limited to fashion. Zara Home offers products for decorating, furnishing, organizing, and adding finishing touches to different areas of the home. Its U.S. categories include furniture, bed linens, lighting, mirrors, rugs, décor, baskets, cushions, throws, curtains and blinds, dining, kitchen, laundry and cleaning, bathroom, dressing room, loungewear, home footwear, bags and toiletry cases, home fragrances, and pet products.
            </p>
            <p><strong>Furniture:</strong> Zara Home carries furniture and practical pieces for different rooms, including storage and seating options.</p>
            <p><strong>Bedding & Textiles:</strong> Shoppers can find bed linens, cushions, throws, rugs, curtains, and other textiles that can change the look and feel of a room.</p>
            <p><strong>Lighting & Décor:</strong> Lighting, mirrors, decorative accessories, and other accents can help add personality to bedrooms, living spaces, and other areas.</p>
            <p><strong>Kitchen & Dining:</strong> Zara Home also covers kitchen and dining, including products designed for cooking, serving, eating, and entertaining.</p>
            <p><strong>Bathroom & Cleaning:</strong> Bathroom accessories, laundry products, and cleaning-related items provide practical additions for everyday home use.</p>
            <p><strong>Home Fragrance:</strong> Candles and other home-fragrance products can be used to create a particular atmosphere in living spaces.</p>
            <p><strong>Kids' Home:</strong> Zara Home Kids extends the home collection to children's spaces with toys, furniture, bedding, lighting, baskets, towels, decorative accessories, clothing and pajamas, shoes, and other children's products.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">How a Zara Coupon Code Can Help You Save</h3>
            <p>
              A Zara coupon code can potentially reduce the cost of an eligible purchase, but the actual value of an offer depends on its terms.
            </p>
            <p>When looking for savings, consider checking:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clothing promotions</li>
              <li>Seasonal discounts</li>
              <li>Sale items</li>
              <li>Selected-product offers</li>
              <li>New-customer promotions, when available</li>
              <li>App-related promotions, when available</li>
              <li>Free-shipping offers, when available</li>
              <li>Limited-time promotions</li>
              <li>Special seasonal campaigns</li>
            </ul>
            <p>
              If you're already planning a purchase, checking for an offer before paying takes little time and may help you avoid missing an available saving.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Looking for a Zara Sale?</h3>
            <p>
              A Zara sale can be an especially useful opportunity for shoppers who want to refresh their wardrobe while paying less for selected styles.
            </p>
            <p>
              Sale inventory can include clothing, shoes, accessories, and other products, with availability changing as sizes and items sell out. Zara's U.S. site currently provides dedicated sale sections within its women's, men's, and kids' shopping experiences.
            </p>
            <p>
              If you have a particular item in mind, it's worth comparing its regular price with the available sale price and checking whether any additional eligible promotion can be used.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save at Zara</h3>
            <p><strong>Check for a Zara Discount Code Before Checkout:</strong> Before completing your order, check CouponsBit for a current offer that matches your purchase.</p>
            <p><strong>Browse the Sale Section:</strong> If you don't need a specific new-season item, browsing sale products can uncover lower-priced clothing, shoes, and accessories.</p>
            <p><strong>Shop Seasonal Collections Strategically:</strong> End-of-season periods can be useful for shoppers looking for reduced prices on seasonal clothing and accessories.</p>
            <p><strong>Compare Similar Products:</strong> If you're flexible about the exact item you want, compare similar styles, materials, and prices before making your final choice.</p>
            <p><strong>Check Offer Conditions:</strong> A headline discount doesn't necessarily apply to every item. Always review the eligibility requirements before assuming an offer will reduce your final total.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Zara Products Worth Exploring</h3>
            <p>
              Whether you're shopping for yourself, your family, or your home, Zara's U.S. assortment provides several different ways to build a larger order.
            </p>
            <p>
              You could shop for a complete women's outfit with a dress, shoes, handbag, jewelry, and fragrance, put together a men's wardrobe with shirts, trousers, blazers, sneakers, and accessories, or browse Zara Home for bedding, lighting, furniture, décor, and dining products.
            </p>
            <p>
              Families can also shop across children's clothing, shoes, accessories, newborn products, toys, and children's home collections.
            </p>
            <p>
              This broad selection is one reason it can be useful to check for a promotion before placing a Zara order; the more products you're considering, the more worthwhile it can be to compare available savings.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Smarter With a Zara Discount Code</h3>
            <p>
              Zara gives shoppers plenty of ways to update their wardrobes, discover new styles, shop for the family, and even furnish their homes. From women's dresses and men's tailoring to children's clothing, shoes, fragrances, beauty products, and Zara Home collections, there is a broad selection to explore.
            </p>
            <p>
              Before you complete your next order, take a moment to check CouponsBit for a Zara discount code, Zara coupon code, or current Zara sale. Compare the available options, review the offer terms, and choose the promotion that best fits what you're buying.
            </p>
            <p>
              A few minutes of checking before checkout could be all it takes to find a better way to shop.
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Zara Discount Codes</h3>
          {[
            { q: "Where can I find a Zara discount code?", a: "You can check CouponsBit for available Zara promotions, coupon codes, and deals before shopping." },
            { q: "What is a Zara coupon code?", a: "A Zara coupon code is a promotional code that may provide a discount or another benefit when used on an eligible purchase according to the offer's conditions." },
            { q: "Does Zara always have a coupon code?", a: "No. The availability of promotional codes can change. Zara may also offer savings through sale pricing and other promotions, so it's worth checking the current offers rather than assuming a code is required." },
            { q: "When is the next Zara sale?", a: "Zara's promotional and sale periods can change, and inventory may vary throughout the year. Check CouponsBit for current Zara sale information and available offers." },
            { q: "What can I buy at Zara?", a: "Zara offers women's, men's, and children's fashion, including dresses, tops, shirts, T-shirts, jeans, pants, skirts, shorts, knitwear, jackets, blazers, suits, swimwear, lingerie, shoes, bags, and accessories. It also offers perfumes, makeup, Zara Hair, and Zara Home products." },
            { q: "Does Zara sell home products?", a: "Yes. Zara Home offers furniture, bedding, lighting, rugs, décor, kitchen and dining products, bathroom items, cleaning products, home fragrances, textiles, and more." },
            { q: "Does Zara have products for children?", a: "Yes. Zara offers clothing, shoes, accessories, and other products for girls, boys, toddlers, babies, and newborns. Zara Home Kids also offers furniture, toys, bedding, décor, and other children's products." },
            { q: "Can I combine a Zara coupon code with sale items?", a: "That depends on the specific promotion and its terms. Check the conditions of the offer before assuming it can be combined with sale pricing." },
            { q: "Does Zara have an app?", a: "Zara's U.S. site provides a download-app option, and app-related promotions may vary over time." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Zara Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Zara Discount Code", "Women's Dresses", "Men's Suits", "Zara Home", "Kids Collection", "Perfumes & Beauty", "Zara Sale", "Free Shipping"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Zara Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">Z</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Zara: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
