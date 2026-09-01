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
  Ticket,  
  GraduationCap, 
  School, 
  Calculator,
  ShoppingBag,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Headphones,
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
  { id: "d1", label: "UP TO", heading: "$150 Gift Card with Education Savings", sub: "Apple Discount Code" },
  { id: "d2", label: "FROM", heading: "MacBook Neo Deal | From $599", sub: "Apple Deal" },
  { id: "d3", label: "FROM", heading: "iPad Air Deal | From $699", sub: "Apple Deal" },
  { id: "d4", label: "FROM", heading: "Apple Watch Series 11 | From $359", sub: "Apple Deal" },
  { id: "d5", label: "FROM", heading: "iPhone 16 Deal | From $799", sub: "Apple Deal" },
  { id: "d6", label: "FLAT", heading: "Flat 20% OFF Student Discount", sub: "Apple Discount Code" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Dell", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782890858/dell-coupon-code_mxtssy.webp", dealText: "Up to 69% OFF", href: "/stores/dell-discount-code" },
  { name: "HP", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782890859/hp-coupon-code_vaogna.webp", dealText: "Up to 69% OFF", href: "/stores/hp-discount-code" },
  { name: "Beelink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494081/beelink-coupon-code_gephnd.jpg", dealText: "Up to 35% OFF", href: "/stores/beelink-discount-code" },
  { name: "RingConn", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp", dealText: "Starting From $199", href: "/stores/ringconn-discount-code" },
  { name: "Bluetti", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/bluetti-power-logo_osmets.webp", dealText: "Save Up To $200", href: "/stores/bluetti-discount-code" },
  { name: "Geekbuying", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/geekbuying-logo_pnkeev.webp", dealText: "Up To 56% OFF", href: "/stores/geekbuying-discount-code" },
];

const STORE_URL = "https://www.apple.com/";

export default function AppleCouponsContent() {
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
              <span className="text-black font-extrabold">Apple</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787205138/apple-logo_vrakxu.webp" alt="Apple" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Apple</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(112.4k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                     Find Apple discount codes, promo codes, and student deals for Aug 2026. Get a $100-$150 gift card with eligible Mac or iPad purchases, 20% OFF qualifying student orders, MacBook Neo from $599, MacBook Air from $999, and iPad Air from $699.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "12", label: "Offers" },
                    { icon: Percent, val: "4.2k", label: "Deals" },
                    { icon: Users, val: "45M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788258588/2_astk87.webp" alt="Apple Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Apple Discount Codes & Offers</h2>
        </div>

        {[
          { label: "UP TO", value: "$150 GIFT CARD", title: "Apple Discount Code – Up to $150 Gift Card with Education Savings 🎁", desc: "Get a $100–$150 gift card when you buy an eligible Mac or iPad with education savings.", bullets: ["Enjoy special Apple education pricing on selected Mac and iPad models.", "Available for eligible students, teachers, and education staff.", "Limited-time Apple student savings offer."] },
          { label: "FROM", value: "$599", title: "Apple MacBook Neo Deal – From $599 💻", desc: "Shop the new MacBook Neo starting from just $599.", bullets: ["Eligible students can access special Apple education pricing.", "Flexible payment options start from $49.91 per month for 12 months.", "Great Apple laptop deal for students and everyday productivity."] },
          { label: "FLAT", value: "20% OFF", title: "Apple Discount Code – Flat 20% OFF Student Discount 🎓", desc: "Get Flat 20% OFF your purchase with the Apple student discount offer.", bullets: ["Enjoy savings on eligible sitewide products with a minimum order value of $129.", "Offer is exclusively available for eligible students.", "Limited-time Apple student discount deal."] },
          { label: "FROM", value: "$999", title: "Apple MacBook Air Deal – From $999 💻", desc: "Buy MacBook Air starting from $999 with powerful performance for work and study.", bullets: ["Eligible students, teachers, and staff may receive Apple education pricing.", "Choose the MacBook Air configuration that suits your performance needs.", "Great MacBook Air discount and student laptop deal."] },
          { label: "FROM", value: "$699", title: "Apple iPad Air Deal – From $699 📱", desc: "Shop the iPad Air starting from $699 for study, creativity, and entertainment.", bullets: ["Choose between the 11-inch and 13-inch iPad Air models.", "Flexible monthly payment options are available on eligible purchases.", "Great Apple iPad discount for students and everyday users."] },
          { label: "FROM", value: "$1,899", title: "Apple MacBook Pro Deal – From $1,899 💻", desc: "Shop the powerful MacBook Pro starting from $1,899.", bullets: ["Get high-performance hardware for creative and demanding professional tasks.", "Choose from different MacBook Pro configurations.", "Great Apple MacBook deal for professionals and students."] },
          { label: "FROM", value: "$359", title: "Apple Watch Series 11 Deal – From $359 ⌚", desc: "Buy Apple Watch Series 11 starting from just $359.", bullets: ["Enjoy advanced features for fitness, health, productivity, and everyday use.", "Flexible payments start from $29.91 per month for 12 months.", "Limited-time Apple Watch discount and savings available."] },
          { label: "FROM", value: "$799", title: "Apple iPhone 16 Deal – From $799 📱", desc: "Shop iPhone 16 with advanced camera features starting from $799.", bullets: ["Trade in an eligible device to potentially lower the purchase cost.", "Enjoy Apple's powerful performance and premium smartphone features.", "Great iPhone discount and Apple phone deal."] },
          { label: "FROM", value: "$199", title: "Apple TV 4K Deal – From $199 📺", desc: "Get Apple TV 4K starting from $199 for an upgraded entertainment experience.", bullets: ["Stream your favorite Apple services and popular streaming apps.", "Enjoy high-quality picture and sound at home.", "Great Apple TV deal for streaming and entertainment lovers."] },
          { label: "FROM", value: "$1,099", title: "Apple iPhone 17 Pro Deal – From $1,099 📱", desc: "Shop the iPhone 17 Pro starting from $1,099 with advanced Pro features.", bullets: ["Experience Apple's latest premium smartphone technology.", "Trade-in options may help reduce the cost of your new iPhone.", "Great iPhone 17 Pro discount and Apple smartphone deal."] },
          { label: "ONLY", value: "$49", title: "Apple iPhone 17 Silicone Case with MagSafe – $49 📱", desc: "Get the iPhone 17 Silicone Case with MagSafe for just $49.", bullets: ["Choose the Electric Lavender finish for a stylish look.", "Designed to provide protection while supporting MagSafe accessories.", "Great Apple accessories deal for iPhone 17 users."] },
          { label: "FROM", value: "$39.95", title: "Apple Native Union Ultralight Sleeve Deal – From $39.95 💻", desc: "Get the Native Union Ultralight Sleeve for 13\" and 14\" MacBook models for just $39.95.", bullets: ["Enjoy lightweight protection designed for everyday MacBook use.", "Ideal for students, professionals, and MacBook users on the go.", "Great MacBook accessory deal and Apple laptop protection offer."] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[110px] sm:w-[175px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-1">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-extrabold leading-3">{c.label}</p>
                    <div className="text-[15px] sm:text-2xl font-black leading-tight sm:leading-none mt-2.5">{c.value}</div>
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Apple: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">What Is an Apple Discount Code?</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            An Apple discount code is a promotional code that may provide a discount or another purchasing benefit on eligible Apple products or services.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Unlike some fashion and retail websites, Apple does not rely exclusively on traditional coupon codes. Its savings opportunities can instead come through education pricing, trade-in credit, carrier promotions, seasonal campaigns, limited-time offers, refurbished products, and other programs.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            This means that when searching for an Apple discount, it is worth considering the entire range of available promotions rather than looking only for a code.

          </p>

          <h3 className="text-black font-black text-lg mb-6">
          What Is an Apple Coupon Code?

            </h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           An Apple coupon code is a commonly searched term for a promotional code that may provide savings on an eligible Apple purchase.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           The availability of traditional coupon codes can vary. Some Apple promotions are automatically applied, while others depend on eligibility or require a particular purchase combination.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
           For this reason, shoppers should compare the total cost after all applicable promotions instead of assuming a coupon code will always provide the biggest saving.

          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
           <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
           <div className="space-y-1">
             {[
               { icon: Smartphone, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
               { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: Laptop, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: Tablet, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
    How to Save More When Shopping at Apple
  </h3>

  <div className="space-y-8">
    {[
      {
        icon: Ticket,
        title: "Check CouponsBit Before Buying",
        sub: "Before placing your order, check CouponsBit for an available Apple discount code, promotional offer, or deal."
      },
      {
        icon: RefreshCw,
        title: "Compare Promotions With Trade-In Value",
        sub: "If you're upgrading from an existing device, calculate the effective price after applying its trade-in value. This can sometimes provide more meaningful savings than a conventional coupon."
      },
      {
        icon: GraduationCap,
        title: "Look at Education Pricing",
        sub: "Students, educators, and other eligible customers should compare standard pricing with Apple's education store before purchasing a Mac or iPad."
      },
      {
        icon: School,
        title: "Shop During Back-to-School Season",
        sub: "If you are a student and your purchase can wait, Apple's back-to-school campaign can be a useful period to watch. Promotional benefits can include gift cards or other qualifying products alongside education pricing."
      },
      {
        icon: ShieldCheck,
        title: "Consider Certified Refurbished",
        sub: "If you are comfortable buying refurbished, Apple's Certified Refurbished store can offer another way to purchase Apple hardware at a lower price."
      },
      {
        icon: Calculator,
        title: "Compare the Complete Package",
        sub: "Don't look only at the device price. Consider trade-in credit, AppleCare+, accessories, financing, education benefits, and any gift-card promotion when calculating the actual value of an Apple purchase."
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
          Apple Discount Code, Coupon Code & Sale
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
            Apple Education Savings Offer
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Up to $150 Gift Card
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Students &amp; Educators
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Valid with Education Savings on eligible Mac or iPad purchases
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Selected Mac &amp; iPad models
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            MacBook Neo Deal
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $599
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users / Students
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Monthly financing available from $49.91/mo for 12 mos
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            All-new MacBook Neo models
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Sitewide Student Discount
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Flat 20% OFF
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            Eligible Students
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Minimum order value of $129 required
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Eligible sitewide Apple products
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            MacBook Air Deal
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $999
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users / Students
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Education pricing available for eligible users
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            MacBook Air laptops
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            iPad Air Deal
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $699
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Flexible monthly financing options available
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            11-inch &amp; 13-inch iPad Air models
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            MacBook Pro Deal
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $1,899
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Multiple hardware configurations available
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            MacBook Pro laptops
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Apple Watch Series 11
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $359
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Monthly financing from $29.91/mo for 12 mos
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Apple Watch Series 11 models
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            iPhone 16 Deal
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $799
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Trade-in options available to lower purchase cost
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            iPhone 16 smartphones
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Apple TV 4K Deal
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $199
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Standard pricing for home streaming devices
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            Apple TV 4K streaming boxes
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            iPhone 17 Pro Deal
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $1,099
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Device trade-in options available
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            iPhone 17 Pro models
          </td>
        </tr>
        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            iPhone 17 MagSafe Case
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            Only $49
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Electric Lavender finish; MagSafe compatible
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            iPhone 17 Silicone Case
          </td>
        </tr>
        <tr className="transition-colors hover:bg-gray-50/50">
          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
            Native Union Ultralight Sleeve
          </td>
          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
            From $39.95
          </td>
          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
            All Users
          </td>
          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
            Lightweight protective sleeve design
          </td>
          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
            13&quot; and 14&quot; MacBook models
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
            <h3 className="text-xl font-black text-[#056bfa]">Find an Apple Discount Code and Save on Your Next Purchase</h3>
            <p>
              Looking for an Apple discount code before buying a new iPhone, Mac, iPad, Apple Watch, or another Apple product? Checking available promotions before placing an order can help you find opportunities to reduce your overall spending.
            </p>
            <p>
              Apple's product range covers much more than smartphones and computers. You can shop for iPhone models, Mac computers, iPad tablets, Apple Watch, AirPods, Apple Vision Pro, Apple TV, HomePod, AirTag, accessories, and other products through Apple's online store.
            </p>
            <p>
              At CouponsBit, you can check available Apple coupon code offers, promotions, and savings opportunities before shopping. It is also useful to compare any coupon or promotion with Apple's current sale prices, education offers, trade-in opportunities, and other limited-time deals.
            </p>
          </div>

          {/* Why Shop at Apple */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Shop at Apple?</h3>
            <p>
              Apple is one of the world's best-known technology brands, with a product ecosystem covering personal devices, entertainment, productivity, communication, health, and smart-home experiences.
            </p>
            <p>The Apple Store currently organizes its shopping experience around:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>iPhone</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>Apple Watch</li>
              <li>Apple Vision Pro</li>
              <li>AirPods</li>
              <li>AirTag</li>
              <li>Apple TV 4K</li>
              <li>HomePod</li>
              <li>Accessories</li>
              <li>Apple Gift Card</li>
            </ul>
            <p>Apple also sells a wide range of compatible accessories and products from selected third-party brands.</p>
          </div>

          {/* Apple iPhone */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Apple iPhone</h3>
            <p>
              The iPhone remains one of Apple's most popular product categories. Depending on the current lineup, shoppers can choose between standard models, higher-end Pro models, and other variants designed for different budgets and preferences.
            </p>
            <p><strong>iPhone Pro:</strong> The Pro range is aimed at customers looking for Apple's more advanced smartphone features, camera capabilities, displays, and performance.</p>
            <p><strong>Standard iPhone:</strong> The standard iPhone lineup offers many of Apple's core smartphone features without necessarily requiring the highest-end Pro configuration.</p>
            <p><strong>iPhone Air:</strong> Apple's current store also features iPhone Air as part of its iPhone lineup.</p>
            <p><strong>iPhone e:</strong> The iPhone e range provides another option for shoppers who want an iPhone experience in a different price and feature segment.</p>
            <p><strong>iPhone Accessories:</strong> After choosing an iPhone, shoppers can also find cases, MagSafe accessories, chargers, cables, power adapters, wallets, screen protection, and other compatible products.</p>
          </div>

          <div className="space-y-6">
  {/* Apple Mac */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Apple Mac</h3>
    <p>
      Mac is Apple's desktop and laptop computer category, covering products for students, professionals, creators, businesses, and everyday users.
    </p>
    <p><strong>MacBook Air:</strong> MacBook Air is designed as a portable Mac for everyday computing, study, work, browsing, creative tasks, and general productivity. Current Apple listings include MacBook Air models in different screen sizes and configurations.</p>
    <p><strong>MacBook Pro:</strong> MacBook Pro is aimed at customers who need higher performance for demanding workloads. It is particularly relevant for developers, designers, video editors, musicians, photographers, and other professional users. Apple currently offers MacBook Pro with M5, M5 Pro, and M5 Max configurations.</p>
    <p><strong>MacBook Neo:</strong> Apple's current lineup also includes MacBook Neo, positioned as a more accessible Mac option.</p>
    <p><strong>Mac Desktop Computers:</strong> Apple's desktop range includes products such as Mac mini, iMac, and Mac Studio, offering different combinations of size, performance, and expandability.</p>
    <p><strong>Mac Accessories:</strong> Mac shoppers can also purchase keyboards, mice, trackpads, displays, adapters, cables, storage products, and other accessories.</p>
  </div>

  {/* Apple iPad */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Apple iPad</h3>
    <p>
      Apple's iPad range covers tablets designed for entertainment, study, creativity, work, and everyday use.
    </p>
    <p><strong>iPad Pro:</strong> iPad Pro is designed for users looking for high-end tablet performance, advanced displays, and professional capabilities.</p>
    <p><strong>iPad Air:</strong> iPad Air provides a balance between performance, portability, and price, making it suitable for students, professionals, creators, and general users.</p>
    <p><strong>iPad:</strong> The standard iPad provides a straightforward tablet experience for browsing, entertainment, education, communication, and everyday tasks.</p>
    <p><strong>iPad Mini:</strong> The iPad mini offers a smaller form factor for customers who prioritize portability.</p>
    <p><strong>Apple Pencil:</strong> Apple also sells Apple Pencil products for compatible iPad models, making them useful for drawing, note-taking, annotation, and creative work.</p>
    <p><strong>iPad Keyboards and Cases:</strong> Accessories include keyboard cases, covers, folios, chargers, adapters, and other products designed to protect or expand an iPad's functionality.</p>
  </div>

  {/* Apple Watch */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Apple Watch</h3>
    <p>
      Apple Watch combines smartwatch features with communication, fitness, health-related tracking, and everyday convenience. Depending on the current range, shoppers can explore different Apple Watch models and configurations.
    </p>
    <p><strong>Apple Watch Series:</strong> The main Apple Watch Series line provides features for everyday users, including fitness tracking, notifications, communication, and health-related functionality.</p>
    <p><strong>Apple Watch Ultra:</strong> The Ultra line is designed for users who want a more rugged Apple Watch experience with features geared toward outdoor activities, adventure, fitness, and demanding environments.</p>
    <p><strong>Apple Watch SE:</strong> Apple Watch SE provides another entry point into Apple's smartwatch ecosystem for shoppers looking for essential Apple Watch features.</p>
    <p><strong>Apple Watch Bands:</strong> Apple offers interchangeable watch bands in different materials, colors, styles, and sizes, allowing customers to personalize their watch.</p>
  </div>

  {/* AirPods and Audio Products */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">AirPods and Audio Products</h3>
    <p>
      Apple's audio category includes several AirPods options designed for different listening preferences.
    </p>
    <p><strong>AirPods:</strong> Standard AirPods provide wireless audio for music, calls, podcasts, video, and everyday listening.</p>
    <p><strong>AirPods Pro:</strong> AirPods Pro are designed for customers seeking more advanced audio features, including active noise cancellation on compatible models.</p>
    <p><strong>AirPods Max:</strong> AirPods Max are Apple's over-ear headphones and target users looking for a larger headphone design and premium listening experience.</p>
    <p>
      Apple's current accessory listings include AirPods Pro 3, AirPods 4, AirPods 4 with Active Noise Cancellation, and AirPods Max 2.
    </p>
    <p><strong>AirPods Accessories:</strong> Shoppers can also find charging cases and other accessories for compatible AirPods models.</p>
  </div>
</div>

          {/* Apple Vision Pro */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Apple Vision Pro</h3>
            <p>Apple Vision Pro is Apple's spatial-computing product, combining immersive digital experiences with Apple's broader ecosystem.</p>
            <p>The product category can appeal to users interested in spatial computing, entertainment, productivity, immersive content, and emerging technology.</p>
            <p>Apple currently lists Vision Pro among its main store categories, with both M5 and M2 versions appearing in its product listings.</p>
          </div>

          {/* Apple TV 4K */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Apple TV 4K</h3>
            <p>Apple TV 4K is designed to bring streaming, entertainment, apps, and other digital content to a television.</p>
            <p>It can be useful for households already using Apple products and services and wanting a more integrated entertainment setup.</p>
          </div>

          {/* HomePod */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">HomePod</h3>
            <p>HomePod is Apple's smart-speaker category. It can be used for music, voice interactions, smart-home control, and integration with compatible Apple devices.</p>
            <p>Apple's current store and education store both list HomePod among Apple's product categories.</p>
          </div>

          {/* AirTag */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">AirTag</h3>
            <p>AirTag is Apple's tracking accessory designed to help users locate compatible personal belongings through the Find My network.</p>
            <p>It can be useful for tracking items such as bags, keys, luggage, or other belongings.</p>
            <p>Apple also offers AirTag multipacks and accessories.</p>
          </div>

          {/* Apple Accessories */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Apple Accessories</h3>
            <p>Apple's accessory selection is extensive and covers products for nearly every major Apple device.</p>
            <p><strong>Cases and Protection:</strong> Protective cases and covers are available for compatible iPhone, iPad, Mac, and other devices.</p>
            <p><strong>Chargers and Power Adapters:</strong> Apple sells USB-C power adapters, charging cables, MagSafe chargers, and other charging accessories.</p>
            <p><strong>Keyboards and Mice:</strong> Mac users can choose from Magic Keyboard, Magic Mouse, and Magic Trackpad products.</p>
            <p><strong>Apple Pencil:</strong> Apple Pencil products are designed for compatible iPad models and can be used for writing, drawing, note-taking, and creative work.</p>
            <p><strong>Watch Bands:</strong> Apple Watch bands allow customers to change the appearance and style of their smartwatch.</p>
            <p><strong>Headphones and Speakers:</strong> Apple's accessories category includes AirPods, headphones, speakers, and selected third-party audio products.</p>
            <p><strong>Storage:</strong> External storage products and related accessories are available through Apple's accessory store.</p>
            <p><strong>Office Accessories:</strong> Apple also carries products for productivity and desk setups, including keyboards, mice, hubs, displays, adapters, and other peripherals.</p>
            <p><strong>Gaming Accessories:</strong> The accessory store includes products connected with gaming, controllers, storage, audio, and other gaming-related needs.</p>
            <p><strong>Smart Home Accessories:</strong> Apple's store also features smart-home accessories and products designed to work with Apple's broader ecosystem.</p>
            <p>Apple categorizes accessories across areas such as gaming, content creation, health and fitness, office accessories, smart-home products, cases and protection, chargers, storage, headphones and speakers, and keyboards and mice.</p>
          </div>

          {/* Apple Beats Products */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Apple Beats Products</h3>
            <p>Apple also sells Beats products through its accessory ecosystem.</p>
            <p>Depending on the current range, shoppers can find Beats headphones, earbuds, and related audio accessories.</p>
            <p>This gives customers another option when shopping for wireless audio products alongside AirPods.</p>
          </div>

          {/* Apple Services and Digital Products */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Apple Services and Digital Products</h3>
            <p>Apple's ecosystem also includes digital services and software-related products.</p>
            <p>Depending on the current offerings, customers can access services and subscriptions associated with:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Apple Music</li>
              <li>Apple TV</li>
              <li>Apple Arcade</li>
              <li>iCloud</li>
              <li>Apple Fitness+</li>
              <li>AppleCare+</li>
              <li>Creative and productivity software</li>
              <li>Apple Gift Cards</li>
            </ul>
            <p>Apple's education store also currently promotes Apple Creator Studio for students and educators, which includes creative applications such as Final Cut Pro, Logic Pro, and Pixelmator Pro.</p>
          </div>

          {/* Sales and Offers */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">What Kind of Apple Sales and Offers Does Apple Run?</h3>
            <p>Apple's approach to promotions differs from many retailers. Instead of running constant sitewide percentage-off sales, Apple frequently uses targeted promotions and value-added offers.</p>
            <p>Here are some of the main types of Apple deals shoppers should watch for.</p>
            <p><strong>Education Pricing:</strong> Apple provides special education pricing for eligible students, educators, and other qualifying customers. Current education offers can include reduced pricing on Mac and iPad products. Apple's 2026 U.S. college promotion also provides an Apple Gift Card when qualifying products are purchased during the promotional period. In India, Apple's current 2026 education promotion provides eligible purchasers with promotional savings when purchasing qualifying Mac or iPad products together with selected promotion products.</p>
            <p><strong>Back-to-School Offers:</strong> Back-to-school promotions are among Apple's most important seasonal campaigns for students. These offers can combine education pricing with a promotional product or Apple Gift Card. The exact benefit depends on the country, eligible device, and promotional period. For example, Apple's current India education promotion runs from July 16 through August 27, 2026.</p>
            <p><strong>Trade-In Offers:</strong> Apple Trade In allows customers to exchange an eligible device for credit toward a new purchase or an Apple Gift Card. This can apply to smartphones and other eligible devices, making trade-in one of the more significant ways to reduce the effective cost of upgrading.</p>
            <p><strong>iPhone Carrier Deals:</strong> Apple's U.S. store also advertises carrier-related iPhone offers. Depending on eligibility and the participating carrier, customers may receive substantial credit toward a new iPhone when meeting the applicable conditions.</p>
            <p><strong>Refurbished Apple Products:</strong> Apple also sells Certified Refurbished products. These can provide another route for shoppers who want an Apple device at a lower price than a comparable new product. Apple states that its refurbished products are backed by a one-year warranty.</p>
            <p><strong>Student and Educator Offers:</strong> Education pricing is particularly relevant for college students, parents, educators, and other eligible purchasers. Current U.S. education promotions include savings on Mac and iPad products, while Apple also offers education-related benefits on selected services and AppleCare+.</p>
            <p><strong>AppleCare+ Savings:</strong> Apple's education store currently advertises savings of up to 10% on AppleCare+ coverage for eligible Mac and iPad purchases by students and educators.</p>
            <p><strong>Holiday and Seasonal Promotions:</strong> Apple may introduce limited-time promotions around major shopping periods and holidays. These offers are often structured differently from conventional retail sales and may include gift cards, bundles, or product-specific incentives.</p>
            <p><strong>Product Launch Promotions:</strong> New product launches can sometimes be accompanied by special purchasing incentives, trade-in opportunities, financing options, or promotional campaigns. Because Apple's product lineup changes throughout the year, checking current offers around a launch period can be worthwhile.</p>
            <p><strong>Gift Card Promotions:</strong> One of Apple's recurring promotional formats is providing an Apple Gift Card with the purchase of selected products. This type of offer can be particularly useful if you already expect to purchase apps, accessories, subscriptions, or another Apple product later.</p>
            <p><strong>Financing and Payment Offers:</strong> Apple can also provide payment options that allow customers to spread the cost of eligible purchases. The exact financing options vary by country and product.</p>
          </div>

          {/* How to Use an Apple Coupon Code */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-2">How to Use an Apple Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Check CouponsBit — Start by checking CouponsBit for current Apple promotions and available coupon offers.",
                "Step 2: Find the Product You Need — Choose from iPhone, Mac, iPad, Apple Watch, AirPods, Vision Pro, accessories, or another Apple product.",
                "Step 3: Review Current Apple Promotions — Before checkout, look at Apple's own promotional opportunities, including education pricing, trade-in offers, seasonal campaigns, and other applicable deals.",
                "Step 4: Check the Coupon Terms — If you have found an Apple coupon code, review its validity, eligible products, customer requirements, and any exclusions.",
                "Step 5: Apply the Code if Required — Enter the promotional code in the appropriate field if the offer requires one.",
                "Step 6: Consider Trade-In — If you're replacing an older Apple or other eligible device, check its potential trade-in value and compare the final cost after credit.",
                "Step 7: Review Your Final Order — Before completing your purchase, check the final price, promotional benefits, trade-in credit, accessories, warranty coverage, and other charges.",
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

          {/* Popular Apple Products */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Popular Apple Products to Explore</h3>
            <p>Apple's broad ecosystem means there are products for different types of shoppers.</p>
            <p>If you're upgrading your phone, explore the iPhone range and compatible cases, chargers, MagSafe accessories, and other add-ons.</p>
            <p>For work or education, consider MacBook Air, MacBook Pro, MacBook Neo, iMac, Mac mini, and Mac Studio, depending on your performance and portability requirements. Apple's current store lists these Mac categories alongside its latest products.</p>
            <p>Students, artists, and professionals can explore iPad, iPad Air, iPad Pro, iPad mini, and Apple Pencil products.</p>
            <p>For fitness and everyday convenience, Apple Watch and its interchangeable bands can be useful additions.</p>
            <p>Audio shoppers can choose from AirPods, AirPods Pro, and AirPods Max, while smart-home and entertainment shoppers can explore HomePod, Apple TV 4K, AirTag, and related accessories.</p>
          </div>

          {/* Shop Apple With CouponsBit */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Apple With CouponsBit</h3>
            <p>From iPhone and Mac to iPad, Apple Watch, AirPods, Vision Pro, AirTag, accessories, and smart-home products, Apple offers a wide range of technology for work, study, entertainment, fitness, communication, and everyday use.</p>
            <p>Before making your next purchase, check CouponsBit for an Apple discount code, Apple coupon code, or current Apple promotion. Then compare the available offer with Apple's sale prices, education benefits, trade-in value, gift-card promotions, refurbished options, and other applicable savings.</p>
            <p>Apple promotions can work differently from traditional retail discounts, so looking beyond a simple coupon code can be particularly useful. A trade-in, education offer, seasonal promotion, or gift-card incentive may provide better overall value depending on what you are buying.</p>
            <p>Whether you're upgrading an iPhone, purchasing a Mac for work, getting an iPad for college, replacing your AirPods, or building an Apple ecosystem from scratch, checking for current savings before checkout can help you make a more informed purchase.</p>
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Apple Discount Codes</h3>
          {[
            { q: "Where Can I Find an Apple Discount Code?", a: "You can check CouponsBit for available Apple discount codes, coupons, deals, and promotions before making a purchase." },
            { q: "What Is an Apple Coupon Code?", a: "An Apple coupon code is a promotional code that may provide a discount or another benefit on eligible products or purchases." },
            { q: "Does Apple Always Offer Discount Codes?", a: "No. Apple does not continuously run traditional coupon-code promotions. Savings may instead come through education pricing, trade-in offers, seasonal promotions, carrier deals, refurbished products, gift-card promotions, and other incentives." },
            { q: "Does Apple Have Sales?", a: "Apple does offer promotional campaigns, but its approach is generally different from retailers that run frequent sitewide percentage-off sales. Promotions can include education savings, trade-in credits, gift cards, carrier offers, refurbished products, and limited-time campaigns." },
            { q: "When Does Apple Run Back-to-School Sales?", a: "Apple typically runs education-focused promotions around the back-to-school period. The exact dates and benefits depend on the country and year. Apple's 2026 U.S. promotion runs from July 16 through August 27, while the current India promotion uses the same promotional dates." },
            { q: "Does Apple Offer Student Discounts?", a: "Yes. Apple provides education pricing for eligible students and educators. Current education offers include special pricing on selected Mac and iPad products and other student-focused benefits." },
            { q: "Does Apple Have a Trade-In Program?", a: "Yes. Apple Trade In allows customers to receive credit toward an eligible purchase or an Apple Gift Card when trading in an eligible device." },
            { q: "Can I Buy Refurbished Apple Products?", a: "Yes. Apple offers Certified Refurbished products, providing an alternative to buying new devices. Apple's U.S. store states that its refurbished products come with a one-year warranty." },
            { q: "What Products Does Apple Sell?", a: "Apple sells iPhone, Mac, iPad, Apple Watch, Apple Vision Pro, AirPods, AirTag, Apple TV 4K, HomePod, accessories, and Apple Gift Cards." },
            { q: "Does Apple Sell Accessories?", a: "Yes. Apple has a large accessories section covering chargers, adapters, cases, cables, keyboards, mice, storage, headphones, speakers, Apple Pencil, watch bands, smart-home accessories, gaming products, and more." },
            { q: "Can I Get an Apple Discount on an iPhone?", a: "Potential savings on an iPhone can come from trade-in credit, carrier promotions, seasonal campaigns, or other applicable offers. The exact promotion depends on the country, device, and current campaign. Apple's U.S. store currently advertises carrier deals that can provide significant credit toward eligible iPhone purchases." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Apple Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["iPhone Deals", "MacBook Promo", "Education Pricing", "Apple Watch", "AirPods Sale", "Vision Pro", "Refurbished Mac", "Trade-In Credit"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Apple Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner shrink-0">A</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-1.5 normal-case">{deal.sub}</p>
                </div>
                <a 
                  href={STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Shop Apple: ${deal.heading}`} 
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
