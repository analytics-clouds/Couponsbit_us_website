"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,DollarSign, Minimize2, Laptop,
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
  Activity,
  Gauge,
  Package,
  Monitor,
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
  { id: "d1", label: "SAVE", heading: "Superun Discount Code – RUN Pro Foldable Treadmill with Table Board | SAVE $30 🏃", sub: "Grab the Superun RUN Pro Foldable Treadmill with Table Board for just $264.99." },
  { id: "d2", label: "SAVE", heading: "Superun Discount Code – Walk&Run 2-in-1 Foldable Treadmill | SAVE $20 🏃", sub: "Get the Superun Walk&Run 2-in-1 Foldable Treadmill for only $249.99." },
  { id: "d3", label: "SHOP", heading: "Superun Treadmill Remote Control Replacement | $39.99 🎮", sub: "Get the Superun Treadmill Remote Control Replacement for only $39.99." },
  { id: "d4", label: "SAVE", heading: "Superun WALK Urban Under Desk Treadmill | SAVE $10 🚶", sub: "Buy the Superun WALK Urban Under Desk Treadmill for just $129.00." },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up To $260", href: "/stores/merachfit-discount-code" },
  { name: "Kerala Ayurveda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg", dealText: "Flat 10% OFF", href: "/stores/kerala-ayurveda-discount-code" },
  { name: "RingConn", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp", dealText: "Starting From $199", href: "/stores/ringconn-discount-code" },
  { name: "Bluetti", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/bluetti-power-logo_osmets.webp", dealText: "Save Up To $200", href: "/stores/bluetti-discount-code" },
  { name: "Dreame", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130848/dreame-logo_uqesij.webp", dealText: "Up To 45% OFF", href: "/stores/dreame-discount-code" },
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
];

const STORE_URL = "https://joyfitinc.sjv.io/aN67yb";

export default function SuperrunCouponsContent() {
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
              <span className="text-black font-extrabold">Superrun</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787037376/superrun_w6lj1n.webp" alt="Superrun" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Superrun</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(6.2k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Superun discount codes, promo codes, and treadmill deals for Sep 2026. Save $30 on the RUN Pro Foldable Treadmill at $264.99, $20 on Walk&Run at $249.99, $10 on the WALK Urban at $129, plus a $39.99 replacement remote.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "4", label: "Offers" },
                    { icon: Percent, val: "310", label: "Deals" },
                    { icon: Users, val: "80k+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787037376/superrun_w6lj1n.webp" alt="Superrun Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Superrun Discount Codes & Offers</h2>
        </div>

        {[
          { label: "SAVE", value: "$30", title: "Superun Discount Code – RUN Pro Foldable Treadmill with Table Board | SAVE $30", desc: "Grab the Superun RUN Pro Foldable Treadmill with Table Board for just $264.99.", bullets: ["Save $30 on this Superun treadmill deal from the regular price of $294.99.", "Enjoy a foldable design with a convenient table board for home workouts."] },
          { label: "SAVE", value: "$20", title: "Superun Discount Code – Walk&Run 2-in-1 Foldable Treadmill | SAVE $20", desc: "Get the Superun Walk&Run 2-in-1 Foldable Treadmill for only $249.99.", bullets: ["Save $20 from the regular price of $269.99 on this Superun deal.", "Enjoy a versatile 2-in-1 design for convenient walking and running workouts."] },
          { label: "SHOP", value: "$39.99", title: "Superun Treadmill Remote Control Replacement | $39.99", desc: "Get the Superun Treadmill Remote Control Replacement for only $39.99.", bullets: ["Replace a lost or damaged remote with this convenient Superun accessory.", "Designed for compatible Superun treadmill models and easy everyday use.", "Check your treadmill model before ordering to ensure remote compatibility."] },
          { label: "SAVE", value: "$10", title: "Superun WALK Urban Under Desk Treadmill | SAVE $10", desc: "Buy the Superun WALK Urban Under Desk Treadmill for just $129.00.", bullets: ["Save $10 from the regular price of $139.00 on this Superun treadmill offer.", "Compact under-desk design is perfect for home, office, and everyday walking.", "Shop this Superun deal for a convenient way to stay active while working."] },
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Superrun: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">Superun Coupon Code & Superun Promo Code</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            A Superun coupon code can provide savings on eligible fitness equipment when a valid promotion is available. Depending on the promotion, shoppers may find percentage discounts, fixed-dollar savings, product-specific offers, or other limited-time deals.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            If you're searching for a Superun promo code, check CouponsBit before checkout to see whether a current offer is available for the product you're considering.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Superun promotions can differ by product, so it's important to review the terms of an offer before applying it. A code may be restricted to selected products, require a minimum purchase, or have an expiration date.

          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
           <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
           <div className="space-y-1">
             {[
               { icon: Activity, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
               { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: Home, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: Monitor, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
  <h3 className="text-black font-black text-lg mb-2">Why Choose Superun Fitness Equipment?</h3>
  <p className="text-gray-500 font-medium text-xs mb-8">
    Superun products can appeal to shoppers who want to make exercise more accessible without investing in a large home gym.
  </p>
  
  <div className="space-y-8">
    {[
      {
        icon: Home,
        title: "Compact Fitness Equipment",
        sub: "Walking pads and folding treadmills can be useful for homes where floor space is limited. Their compact designs make them suitable for bedrooms, apartments, home offices, and other smaller spaces."
      },
      {
        icon: Activity,
        title: "Options for Walking and Running",
        sub: "Superun offers different types of equipment for different activity levels. A walking pad may work well for light daily movement, while a treadmill can provide a wider range of workout options."
      },
      {
        icon: Laptop,
        title: "Useful for Home Offices",
        sub: "An under-desk walking pad can make it easier to add movement to your workday, particularly if you spend long periods sitting at a desk."
      },
      {
        icon: Minimize2,
        title: "Folding Designs",
        sub: "Folding treadmills can make storage easier when the equipment isn't being used. This can be useful for people who don't have a dedicated workout room."
      },
      {
        icon: DollarSign,
        title: "Different Price Points",
        sub: "Superun offers different equipment configurations, allowing shoppers to compare compact walking pads with more traditional treadmill designs based on their budget and intended use."
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
          Superun discount Codes, Promo Codes & Treadmill Deals 2026
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
                ["Superun Discount Code – RUN Pro Foldable Treadmill with Table Board | SAVE $30", "$264.99 (Save $30)", "All Users", "Foldable design with table board", "RUN Pro Foldable Treadmill"],
                ["Superun Discount Code – Walk&Run 2-in-1 Foldable Treadmill | SAVE $20", "$249.99 (Save $20)", "All Users", "2-in-1 walking & running design", "Walk&Run 2-in-1 Foldable Treadmill"],
                ["Superun Treadmill Remote Control Replacement | $39.99", "$39.99", "All Users", "Check model compatibility before ordering", "Treadmill Remote Control Replacement"],
                ["Superun WALK Urban Under Desk Treadmill | SAVE $10", "$129.00 (Save $10)", "All Users", "Compact under-desk design", "WALK Urban Under Desk Treadmill"],
              ].map((row, i) => (
                <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 3 && "border-b-0")}>
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
            Looking for the latest Superun coupon code, Superun promo code, or Superun discount code? CouponsBit helps you find current Superun offers, treadmill deals, and fitness equipment discounts so you can save more when upgrading your home workout setup.
          </p>
          <p>
            Superun focuses on home fitness equipment, particularly treadmills and walking pads designed for indoor exercise. Its product range includes folding treadmills, under-desk walking pads, compact walking machines, and other equipment aimed at making regular movement easier at home or in a workspace. Current coupon listings also show offers on selected Superun walking pads and treadmills, including discounts on specific models and sale items.
          </p>
          <p>
            Whether you're building a home gym, looking for a compact treadmill for daily walking, or want an under-desk walking pad for staying active while working, checking CouponsBit for a Superun coupon code before placing your order can help you find an available deal.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Superun Discount Code Offers</h3>
            <p>
              A Superun discount code can be especially useful when purchasing larger fitness equipment such as a treadmill or walking pad. Even a fixed-dollar discount can make a noticeable difference on a higher-priced product.
            </p>
            <p>Before using a discount code, check:</p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-gray-600">
              <li>Whether the code applies to your selected model</li>
              <li>The promotion's expiration date</li>
              <li>Any minimum order requirements</li>
              <li>Whether sale products are eligible</li>
              <li>Whether the offer can be combined with another promotion</li>
              <li>Shipping terms and other restrictions</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Superun Treadmill Deals</h3>
            <p>
              Superun's product range centers on compact home fitness equipment, making its treadmills and walking pads suitable for shoppers who want to exercise without needing a traditional commercial gym setup.
            </p>
            <p>
              Current promotional listings include discounts on folding treadmills, under-desk treadmills, and selected walking pad models.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Superun Folding Treadmill</h3>
            <p>
              A Superun folding treadmill can be a practical option for shoppers who want a running or walking machine without permanently dedicating a large amount of floor space to their equipment.
            </p>
            <p>
              Folding designs can be particularly useful in apartments, bedrooms, home offices, or other spaces where equipment needs to be stored when it isn't being used.
            </p>
            <p>
              Before buying, compare the treadmill's dimensions, speed range, motor specifications, weight capacity, running surface, folding mechanism, and available features.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Superun Walking Pad</h3>
            <p>
              A Superun walking pad is designed for shoppers who primarily want a compact way to add more walking to their day.
            </p>
            <p>
              Walking pads can be useful for home offices, apartments, and small workout areas because they generally take up less space than traditional treadmills. Current Superun promotional listings include the BA03 Smart Walking Pad and BA04 Mini and Ultra Smart Walking Pad models.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Superun Under Desk Treadmill</h3>
            <p>
              A Superun under desk treadmill can help people incorporate low-intensity walking into their workday. These compact machines are intended to fit beneath compatible standing desks, allowing users to walk while performing tasks that don't require them to remain stationary.
            </p>
            <p>
              If you're shopping for one, consider the machine's dimensions, maximum speed, noise level, remote-control functionality, weight capacity, and whether it fits comfortably beneath your desk.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Superun 2-in-1 Folding Treadmill</h3>
            <p>
              A Superun 2-in-1 folding treadmill can offer additional flexibility for people who want equipment suitable for both walking and faster-paced workouts.
            </p>
            <p>
              Current promotional listings show Superun CT04 2-in-1 Folding Treadmill offers in multiple colors, including black, green, and orange.
            </p>
            <p>
              When comparing a 2-in-1 treadmill, look beyond the advertised discount. Consider how you plan to use it, the available speed settings, deck size, folding design, and storage requirements.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Superun CT04 Treadmill</h3>
            <p>
              The Superun CT04 appears in current promotional listings as a 2-in-1 folding treadmill. Available offers can vary, so shoppers should verify the current product price and applicable promotion before purchasing.
            </p>
            <p>
              If you find a Superun discount code that applies to the CT04, compare the final discounted price with any current product-level sale before completing your order.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Superun Walking Pad Deals</h3>
            <p>
              Walking pads are particularly useful for people who want a simple way to increase daily activity without setting up a full home gym.
            </p>
            <p><strong>Superun BA03 Smart Walking Pad</strong></p>
            <p>
              The Superun BA03 Smart Walking Pad is listed among current Superun promotional offers, with some coupon listings advertising a fixed-dollar discount on the model. If you're considering the BA03, compare its current price with available Superun promotions and check whether shipping is included in the final cost.
            </p>
            <p><strong>Superun BA04 Walking Pad</strong></p>
            <p>
              The Superun BA04 range includes compact walking pad models designed for indoor use. Current promotional listings feature both the BA04 Mini Walking Pad with Remote Control and the BA04 Ultra Smart Walking Pad with Remote Control. A product-specific discount can sometimes provide better value than a general percentage promotion, so compare all available offers before ordering.
            </p>
          </div>

          {/* Styled How-To Steps Box */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Superun Coupon Code</h3>
            <p>Using a Superun coupon code through CouponsBit is simple.</p>
            <div className="space-y-6">
              {[
                { step: "Step 1: Find a Superun Coupon Code", desc: "Visit CouponsBit and browse the available Superun coupon codes, promotional offers, and treadmill deals." },
                { step: "Step 2: Choose Your Superun Deal", desc: "Select an offer that matches the treadmill or walking pad you're planning to purchase." },
                { step: "Step 3: Copy the Superun Promo Code", desc: "If the promotion requires a code, reveal the Superun promo code and copy it." },
                { step: "Step 4: Shop for Your Fitness Equipment", desc: "Visit the Superun store, choose your preferred treadmill or walking pad, and add it to your cart." },
                { step: "Step 5: Apply the Superun Discount Code", desc: "Proceed to checkout and enter the Superun discount code in the applicable promotional code field." },
                { step: "Step 6: Complete Your Order", desc: "Review the final order total and make sure the discount has been applied before completing your purchase." }
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
              If the code doesn't work, check the expiration date, product eligibility, minimum purchase requirement, and other terms associated with the offer.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save on Superun</h3>
            <p>
              A coupon code isn't the only way to reduce the cost of Superun fitness equipment. Comparing promotions and shopping strategically can help you find better overall value.
            </p>

            <p><strong>Check Superun Coupon Codes Before Buying:</strong> Before placing your order, check CouponsBit for the latest Superun coupon code. Promotions can change, so checking immediately before checkout is worthwhile.</p>

            <p><strong>Look for Superun Sale Items:</strong> Current promotional listings advertise savings of up to 30% on selected Superun sale items and folding treadmills. If a product is already discounted, compare its sale price with any available coupon to determine which offer gives you the better deal.</p>

            <p><strong>Look for Product-Specific Discounts:</strong> Some promotions apply directly to individual models rather than the entire store. Current listings include fixed-dollar offers on selected Superun walking pads and treadmills. A product-specific discount may be more valuable than a general coupon, particularly when you're already interested in a particular treadmill.</p>

            <p><strong>Check for Free Shipping:</strong> Shipping can have a meaningful impact on the final cost of large fitness equipment. Current Superun coupon listings advertise free shipping promotions, although shoppers should verify the current terms before placing an order.</p>

            <p><strong>Sign Up for Promotions:</strong> Signing up for store communications can be another way to hear about upcoming sales, product launches, and promotional offers.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Find the Latest Superun Coupon Codes & Deals</h3>
            <p>
              Whether you're looking for a Superun treadmill, folding treadmill, walking pad, or under-desk fitness machine, comparing available promotions before checkout can help you get better value.
            </p>
            <p>
              Before purchasing, visit CouponsBit to find the latest Superun coupon code, Superun promo code, Superun discount code, Superun treadmill deals, Superun walking pad deals, and fitness equipment offers.
            </p>
            <p>
              Compare product prices, check the terms of each promotion, and choose the offer that provides the best overall value for your home workout setup.
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
          <h3 className="text-2xl font-black text-black mb-8">Superun discount Code FAQs</h3>
          {[
            { q: "Does Superun Have Coupon Codes?", a: "Yes. Current coupon listings show several Superun promotional offers, including percentage discounts, fixed-dollar discounts on selected products, sale offers, and free-shipping promotions. Availability can change, so check the current terms before purchasing." },
            { q: "Where Can I Find a Superun Promo Code?", a: "You can check CouponsBit for available Superun promo codes, discount offers, and treadmill deals before placing your order." },
            { q: "Does Superun Sell Treadmills?", a: "Yes. Superun is associated with treadmills and other home fitness equipment, including folding treadmill and walking pad products. A U.S. trademark application for the SUPERRUN mark also lists fitness equipment such as treadmills, running machines, stationary exercise bicycles, rowing machines, and related equipment. (Justia Trademarks)" },
            { q: "What Is a Superun Walking Pad?", a: "A Superun walking pad is a compact indoor walking machine designed for home use. It can be useful for daily walking, light exercise, and adding movement to a home-office routine." },
            { q: "Does Superun Have an Under Desk Treadmill?", a: "Superun promotional listings include under-desk treadmill offers and walking pad models designed for compact indoor use. Check the current product specifications to confirm whether a particular model is suitable for use beneath your standing desk." },
            { q: "Does Superun Offer Folding Treadmills?", a: "Yes. Current listings include Superun folding treadmill products, including 2-in-1 models." },
            { q: "Can I Find Superun Walking Pad Deals?", a: "Yes. Current promotional listings include discounts on selected Superun walking pad models, including BA03 and BA04 products." },
            { q: "Does Superun Offer Free Shipping?", a: "Current third-party coupon listings advertise free shipping offers, but shipping conditions can change. Check the applicable terms at checkout before relying on a free-shipping promotion." },
            { q: "Is CouponsBit Free to Use?", a: "Yes. CouponsBit is free to use. You can browse Superun coupon codes, discounts, and promotional offers without paying a fee." }
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Superun", "Promo Code", "Discount Code", "Treadmill Deals", "Walking Pad", "Under Desk Treadmill", "2-in-1 Treadmill", "Free Shipping"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  S
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
                  aria-label={`Shop Superun: ${deal.heading}`} 
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
