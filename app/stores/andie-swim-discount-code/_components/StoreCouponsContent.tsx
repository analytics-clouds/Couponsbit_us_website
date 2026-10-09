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
  ExternalLink, HeartHandshake, ShieldAlert, Calendar, Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Sparkles,
  Gift,
  Waves,
  Truck,
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
  { id: "d1", label: "NEW", heading: "New Customer Offer", sub: "Latest Deals" },
  { id: "d2", label: "SALE", heading: "Percentage Off Sitewide", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "One-Piece Swimsuit Deal", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Bikini Bundle Discount", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Free Shipping Offer", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Lulus", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789994531/lulus-logo_pl1byq.webp", dealText: "Up To 80% OFF", href: "/stores/lulus-promo-code" },
  { name: "Halara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789535819/halara_coupon_code_ujuwnv.webp", dealText: "Up To 80% OFF", href: "/stores/halara-coupon-code" },
  { name: "Fashion Nova", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/fashion-nova_cm1al3.webp", dealText: "Up To 50% OFF", href: "/stores/fashion-nova-discount-code" },
  { name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", dealText: "Up To 50% OFF", href: "/stores/old-navy-promo-code" },
  { name: "Abercrombie", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp", dealText: "Up To 50% OFF", href: "/stores/abercrombie-discount-code" },
  { name: "Shein", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp", dealText: "Up To 90% OFF", href: "/stores/shein-coupon-code" },
];

const STORE_URL = "https://andie-swim.pxf.io/c/4303217/1224854/15139?subId1=1015";

export default function AndieSwimCouponsContent() {
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
              <span className="text-black font-extrabold">Andie Swim</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1791543378/Andie_swim_discount_code_cnars1.webp" alt="Andie Swim" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Andie Swim Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(3.2k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save on premium swimwear with the latest Andie Swim Discount Code. Enjoy up to 60% OFF selected one-piece swimsuits and receive a free gift with eligible Support Edit purchases. Use an Andie Swim Promo Code to unlock verified savings on stylish swimsuits, accessories, and seasonal collections.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "11", label: "Offers" },
                    { icon: Percent, val: "50+", label: "Deals" },
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
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1791543378/Andie_swim_discount_code_cnars1.webp" alt="Andie Swim Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Andie Swim Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "DONATES", value: "10%", title: "Andie Swim – The Support Edit: 10% of Profits Donated to Breast Cancer Research", desc: "Shop The Support Edit throughout October, featuring swimsuits designed with adjustable straps, supportive under-bust elastic and comfortable coverage.", bullets: ["Andie Swim donates 10% of profits from The Support Edit to the Breast Cancer Research Fund throughout the month.", "Discover thoughtfully designed swimwear with removable soft cups and supportive details.", "Shop the collection and support breast cancer research while refreshing your swimwear wardrobe."] },
                  { label: "ONLY", value: "$112", title: "Andie Swim – The Amalfi One Piece at $112 + Free Gift", desc: "Shop The Amalfi One Piece for $112 on the US storefront.", bullets: ["Receive a free deluxe sample of MAËLYS So-Silky Foaming Body Scrub with every eligible Support Edit one-piece order, according to the supplied offer.", "Features include a scoop neckline, adjustable straps, under-bust elastic for added lift and removable soft cups.", "Sizes 2X and 3X feature wider straps for additional support."] },
                  { label: "ONLY", value: "$112", title: "Andie Swim – The Malibu One Piece at $112 + Free Gift", desc: "Get The Malibu One Piece in Sherbert for $112 on the US storefront.", bullets: ["Receive a free deluxe sample of MAËLYS So-Silky Foaming Body Scrub with every eligible Support Edit one-piece purchase, according to the supplied offer.", "Enjoy a classic scoop neckline, adjustable straps, under-bust elastic and removable soft cups.", "Shop this timeless swimsuit, with wider straps available in sizes 2X and 3X."] },
                  { label: "UP TO", value: "60%", title: "Andie Swim Sale – Up to 60% Off The Lanikai One Piece", desc: "Shop The Lanikai One Piece Long Torso for $57, reduced from $142 on the official US sale collection.", bullets: ["Save approximately 60% on this selected swimsuit.", "Enjoy a V-neck design and medium seat coverage, with a fit designed for longer torsos.", "Shop the Andie Swim sale and save on selected swimwear while available."] },
                  { label: "UP TO", value: "60%", title: "Andie Swim Sale – Up to 60% Off The Lucaya One Piece", desc: "Explore the Andie Swim sale for discounts of up to 60% on selected one-piece swimsuits.", bullets: ["The Lucaya One Piece was listed in the supplied offer at a 60% discount; its current US price could not be verified.", "Discover swimwear designed for different fits and coverage preferences.", "Check the US storefront for current pricing, available sizes and sale eligibility."] },
                  { label: "UP TO", value: "50%", title: "Andie Swim Sale – Up to 50% Off Selected Accessories", desc: "Explore selected accessories and swimwear essentials during the Andie Swim sale.", bullets: ["The supplied Andie Socks offer lists a discount of approximately 47%; current US pricing could not be verified.", "Find versatile additions to complement your swimwear wardrobe.", "Check the US storefront for available accessories and current sale prices."] },
                  { label: "UP TO", value: "40%", title: "Andie Swim Sale – Up to 40% Off The Amalfi One Piece", desc: "Explore selected Amalfi One Piece styles at discounted prices in the official US sale collection.", bullets: ["The official US affordable collection lists a selected Amalfi One Piece at $51, reduced from $128, for approximately 60% off.", "Discover a classic scoop neckline, adjustable straps and available Long Torso and Plus Sizes options.", "Shop the sale collection to find eligible styles and sizes at reduced prices."] },
                  { label: "UP TO", value: "39%", title: "Andie Swim Sale – Up to 39% Off The Sahara Bikini Top", desc: "Explore selected Andie Swim bikini tops during the sale.", bullets: ["The supplied Sahara Bikini Top offer lists a discount of approximately 39%; its current US price could not be verified.", "Pair your favourite bikini top with coordinating swim bottoms for a complete beach-ready look.", "Visit the US storefront to check current styles, sizes and prices."] },
                  { label: "SAVE", value: "20%", title: "Andie Swim Texture Edit – Save on The Amalfi Swim Dress", desc: "Discover The Amalfi Swim Dress in the official US collection, with selected styles discounted.", bullets: ["A listed US style is priced at $118, reduced from $148, saving approximately 20%.", "Explore swim dresses with distinctive prints and fit options, including selected Long Torso and Plus Sizes styles.", "Shop the Texture Edit and find selected swimwear at special prices."] },
                  { label: "UP TO", value: "30%", title: "Andie Swim Mom Edit – Up to 30% Off The Devon One Piece", desc: "Explore the Andie Swim Mom Edit, featuring swimwear designed with comfort and fit in mind.", bullets: ["The supplied Devon One Piece offer lists a price reduction of approximately 30%; its current US price could not be verified.", "Check available Long Torso and Plus Sizes options when browsing the collection.", "Shop the US storefront for current prices, sizes and available offers."] },
                  { label: "FREE", value: "SHIPPING", title: "Andie Swim – Free Shipping on Orders Over $150", desc: "Enjoy free shipping on eligible US orders over $150, as advertised on the Andie Swim website.", bullets: ["Shop one-piece swimsuits, bikini tops, swim dresses and other available styles.", "Add eligible items to your cart to reach the free-shipping threshold.", "Review the shipping terms at checkout before placing your order."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[10px] sm:tracking-[5px] text-[8px] sm:text-[15px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[15px] sm:text-4xl font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Andie Swim: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                    rel="nofollow noopener noreferrer"
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Andie Swim?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Andie Swim is a direct-to-consumer swimwear brand offering one-piece swimsuits, bikinis, and cover-ups designed for a comfortable, flattering fit.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand focuses on size-inclusive swimwear with a range of styles, from classic one-pieces to mix-and-match bikini tops and bottoms.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Andie Swim is popular with shoppers looking for well-fitting swimwear for travel, vacations, and everyday wear.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand also offers seasonal collections and clearance styles throughout the year.
                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Waves, name: "One-Piece Swimsuits", count: "15+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Sparkles, name: "Bikinis", count: "20+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Gift, name: "Cover-Ups", count: "10+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: Truck, name: "Free Shipping", count: "12+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Search, name: "New Arrivals", count: "8+", color: "text-orange-500", href: "/categories/fashion" },
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
  <h3 className="text-black font-black text-lg mb-8">
    How to Find Better Andie Swim Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Shopping",
        sub: "Before placing your order, check CouponsBit for the latest Andie Swim discount code and current offers.",
      },
      {
        icon: HeartHandshake,
        title: "Sign Up For Emails",
        sub: "Join Andie Swim's email list to get notified about new arrivals, restocks, and member-exclusive offers.",
      },
      {
        icon: Calendar,
        title: "Watch for Sales Events",
        sub: "Seasonal sales and holiday promotions can be useful periods to check for extra discounts.",
      },
      {
        icon: ShieldAlert,
        title: "Check Promotion Restrictions",
        sub: "A promotion may only apply to selected styles or sizes. Always read the terms before purchasing.",
      },
      {
        icon: Gift,
        title: "Bundle Your Order",
        sub: "Bundling tops and bottoms together can often provide better value than buying separately.",
      },
      {
        icon: Sparkles,
        title: "Check the Size Guide",
        sub: "Reviewing Andie Swim's size guide before ordering can help reduce the need for returns or exchanges.",
      },
      {
        icon: Receipt,
        title: "Review the Final Order",
        sub: "Before completing your purchase, make sure any eligible promotion has been applied and review your complete order details.",
      },
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start">
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

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Andie Swim Discount Code, Coupon Code & Discount Offers
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        ["The Support Edit - Charity Offer", "10% Profits Donated", "All Users", "10% of profits donated to Breast Cancer Research Fund throughout October", "The Support Edit Collection"],
        ["The Amalfi One Piece + Free Gift", "$112", "All Users", "Includes a free deluxe sample of MAËLYS So-Silky Foaming Body Scrub", "Amalfi One Piece"],
        ["The Malibu One Piece + Free Gift", "$112", "All Users", "Includes a free deluxe sample of MAËLYS So-Silky Foaming Body Scrub", "Malibu One Piece (Sherbert)"],
        ["The Lanikai One Piece Sale", "60% OFF ($57)", "All Users", "Reduced from $142 original price; designed for longer torsos", "Lanikai One Piece Long Torso"],
        ["The Lucaya One Piece Sale", "Up to 60% OFF", "All Users", "Deep savings on selected one-piece styles while stock lasts", "Lucaya One Piece"],
        ["Andie Swim Accessories Sale", "Up to 50% OFF", "All Users", "Discounts up to ~47% off on selected swimwear essentials & socks", "Selected Accessories"],
        ["The Amalfi One Piece Sale", "Up to 60% OFF ($51)", "All Users", "Selected styles reduced from $128 to $51 in official sale collection", "Selected Amalfi One Piece"],
        ["The Sahara Bikini Top Sale", "Up to 39% OFF", "All Users", "Discounted bikini tops to pair with coordinating swim bottoms", "Sahara Bikini Top"],
        ["The Amalfi Swim Dress - Texture Edit", "20% OFF ($118)", "All Users", "Reduced from $148 original price; available in select prints & fits", "Amalfi Swim Dress"],
        ["The Devon One Piece - Mom Edit", "Up to 30% OFF", "All Users", "Price reduction on comfortable swim styles with Long Torso/Plus options", "Devon One Piece"],
        ["Andie Swim Free Shipping", "Free Shipping $150+", "US Customers", "Free standard shipping on eligible US orders exceeding $150", "Orders $150+"]
      ].map((row, i, arr) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === arr.length - 1 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Whether you're shopping for a new one-piece or building a mix-and-match bikini, Andie Swim offers a wide range of swimwear styles designed for a comfortable fit.
          </p>
          <p>
            If you're planning your next swimwear purchase, checking for an Andie Swim discount code before placing your order can be a smart way to look for savings. CouponsBit helps shoppers discover Andie Swim coupon codes, promo offers, and other ways to potentially save on their order.
          </p>
          <p>
            From new-customer offers to bundle discounts and seasonal clearance picks, there are plenty of reasons to check current promotions before you check out.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Find an Andie Swim Discount Code</h3>
    <p>An Andie Swim discount code can help you look for savings on eligible swimsuits, bikinis, or cover-ups when a promotion is available.</p>
    <p>Before completing your order, check CouponsBit to see whether there is a current Andie Swim promotional offer that matches what you're shopping for.</p>
    <p>Promotions can have specific conditions. Some may apply to selected styles or sizes, while others may be connected to a particular sales event.</p>
    <p>Always review the terms of the offer, including its expiration date and style restrictions, before expecting a discount at checkout.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Explore Andie Swim's Product Lineup</h3>
    <p>Andie Swim offers swimwear across several categories, giving shoppers plenty of options for their next trip or everyday wear.</p>
    <p><strong>One-Piece Swimsuits:</strong> A range of necklines and coverage levels designed for a flattering fit.</p>
    <p><strong>Bikinis:</strong> Mix-and-match tops and bottoms for a customizable fit.</p>
    <p><strong>Cover-Ups & Accessories:</strong> Complementary pieces to pair with your swimwear.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Andie Swim Sale and Seasonal Promotions</h3>
    <p>Andie Swim promotions can change throughout the year, with certain periods often attracting more attention from shoppers.</p>
    <p><strong>Seasonal Sales Events:</strong> Warm-weather and holiday sales events are a popular period for savings.</p>
    <p><strong>Clearance Collections:</strong> Past-season styles are often discounted while stocks last.</p>
    <p>Before placing an order, check CouponsBit for an Andie Swim discount code, coupon offer, or other promotion.</p>
  </div>
</div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQ Section */}
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Andie Swim Discount Codes
          </h3>
          {[
            { q: "Does Andie Swim offer discount codes?", a: "Andie Swim periodically offers promotional codes, discounts, and seasonal promotions. Availability and eligibility can vary." },
            { q: "Where can I find an Andie Swim discount code?", a: "You can check CouponsBit for available Andie Swim discount codes, coupon codes, and sale promotions before shopping." },
            { q: "How do I use an Andie Swim discount code?", a: "Add eligible items to your cart, proceed to checkout, and enter the applicable code in the promotional-code field. Confirm the discount has been applied before completing your purchase." },
            { q: "Why isn't my Andie Swim promo code working?", a: "The promotion may have expired, or your order may not meet its requirements. Some offers can be limited to selected styles or sizes." },
            { q: "What does Andie Swim sell?", a: "Andie Swim sells one-piece swimsuits, bikinis, cover-ups, and swimwear accessories." },
            { q: "Does Andie Swim offer free shipping?", a: "Andie Swim may offer free shipping on qualifying orders. Check current offers for minimum order requirements." },
            { q: "Does Andie Swim have a size guide?", a: "Yes. Andie Swim provides a size guide to help shoppers choose the right fit before ordering." },
            { q: "Does Andie Swim have seasonal sales?", a: "Andie Swim may run promotions around seasonal and holiday shopping periods. Check current offers to see what is available." },
            { q: "Can I return or exchange Andie Swim items?", a: "Andie Swim has its own returns and exchange policy. Check the official site for current terms before ordering." },
            { q: "When is the best time to look for Andie Swim deals?", a: "Promotions can appear throughout the year, with seasonal sales events often bringing additional savings." },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        {/* Tag Cloud */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Andie Swim Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Andie Swim Discount Code",
              "One-Piece Swimsuits",
              "Bikini Bundle",
              "Free Shipping",
              "Percentage Off Sitewide",
              "New Customer Offer",
              "Seasonal Sale",
              "Swimwear Deals"
            ].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Andie Swim Deals
          </h3>
          <div className="space-y-6">
            {[
              {
              heading: "SUPPORT EDIT",
              sub: "10% of profits donated to breast cancer research",
              },
              {
              heading: "AMALFI ONE PIECE",
              sub: "$112 plus a free gift",
              },
              {
              heading: "LANIKAI ONE PIECE SALE",
              sub: "Up to 60% off",
              },
              {
              heading: "FREE SHIPPING",
              sub: "On US orders over $150",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  A
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
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Andie Swim: ${deal.heading}`}
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
