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
  Search,
  ShoppingBag,
  Home, Package, Calendar, Mail,
  Moon,
  Bed,
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
  { id: "d1", label: "UP TO", heading: "Dore & Rose Discount Code – End of Summer Clearance | Up to 65% OFF", sub: "Save up to 65% OFF on selected sleep essentials during the End of Summer Clearance" },
  { id: "d2", label: "SAVE", heading: "Dore & Rose Discount Code – Ultimate Cooling Sleep Bundle | Save 65%", sub: "Get the Ultimate Cooling Sleep Bundle for $143.85, reduced from $411" },
  { id: "d3", label: "SAVE", heading: "Dore & Rose – Kids Deep Sleep Bundle | Save 60%", sub: "Shop the Kids Deep Sleep Bundle for $64.80, down from $162" },
  { id: "d4", label: "SAVE", heading: "Dore & Rose – Cooling Sleep Bundle | Save 55%", sub: "Get the Cooling Sleep Bundle for $121.95, reduced from $271" },
  { id: "d5", label: "SHOP", heading: "Dore & Rose – Scalloped Silk Pillowcase | $89", sub: "Shop the Scalloped Silk Pillowcase for $89, down from $304" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up to 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Kerala Ayurveda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg", dealText: "Flat 10% OFF", href: "/stores/kerala-ayurveda-discount-code" },
  { name: "Lumibrick", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/lumricks-logo_a84nyo.webp", dealText: "From $56.99", href: "/stores/lumibrick-discount-code" },
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up To $260", href: "/stores/merachfit-discount-code" },
  { name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699425/vooglam-logo_qe8mis.webp", dealText: "Eyeglasses From $65", href: "/stores/vooglam-discount-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
];

const STORE_URL = "https://dorerose.pxf.io/9VQ0m0";

export default function DoreAndRoseCouponsContent() {
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
              <span className="text-black font-extrabold">Dore & Rose</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1786949027/dore-and-rose-logo_jsa9ki.webp" alt="Dore & Rose" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Dore & Rose</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(12.4k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      DiscoveFind Dore & Rose promo codes, discount codes, and sleep deals for Sep 2026. Save up to 65% during the End of Summer Clearance, with cooling bundles from $121.95, silk sleep masks for $35.50, and sleepwear from $65.80.Lunara Silk and TENCEL.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "10", label: "Offers" },
                    { icon: Percent, val: "540", label: "Deals" },
                    { icon: Users, val: "500k+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787034385/133_djzdfd.webp" alt="Dore & Rose Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Dore & Rose Promo Codes & Offers</h2>
        </div>

        {[
          { label: "UP TO", value: "65%", title: "Dore & Rose Discount Code – End of Summer Clearance | Up to 65% OFF", desc: "Save up to 65% OFF on selected sleep essentials during the End of Summer Clearance", bullets: ["Discover limited-stock bedding, sleepwear, cooling products and accessories", "Clearance offers are available for a limited time and end August 31", "Shop last-chance styles before selected items sell out", "Dore & Rose Discount Code, Summer Clearance, Sleep Deals, USA"] },
          { label: "SAVE", value: "65%", title: "Dore & Rose Discount Code – Ultimate Cooling Sleep Bundle | Save 65%", desc: "Get the Ultimate Cooling Sleep Bundle for $143.85, reduced from $411", bullets: ["Save 65% on a complete cooling-focused sleep collection", "Features Aeris™ Cooling Fabric designed for a comfortable sleep experience", "Ideal for shoppers looking to upgrade their summer sleep setup", "Dore & Rose Discount Code, Cooling Sleep Bundle, Aeris Cooling, Sleep Sale, USA"] },
          { label: "SAVE", value: "60%", title: "Dore & Rose – Kids Deep Sleep Bundle | Save 60%", desc: "Shop the Kids Deep Sleep Bundle for $64.80, down from $162", bullets: ["Enjoy 60% OFF on this kids' sleep collection", "Made with Lunara™ Silk for a soft and comfortable feel", "A thoughtful option for refreshing a child's nighttime essentials", "Dore & Rose Discount Code, Kids Sleep Bundle, Lunara Silk, Sleepwear Sale, USA"] },
          { label: "SAVE", value: "55%", title: "Dore & Rose – Cooling Sleep Bundle | Save 55%", desc: "Get the Cooling Sleep Bundle for $121.95, reduced from $271", bullets: ["Save 55% during the limited-time summer clearance", "Made with Aeris™ Cooling Fabric for a lightweight cooling feel", "Designed to help create a more comfortable bedtime routine", "Dore & Rose Discount Code, Cooling Collection, Aeris Fabric, Sleep Essentials, USA"] },
          { label: "SHOP", value: "$89", title: "Dore & Rose – Scalloped Silk Pillowcase | $89", desc: "Shop the Scalloped Silk Pillowcase for $89, down from $304", bullets: ["Features Lunara™ Silk with an elegant scalloped edge", "Designed to add a luxurious touch to your nighttime setup", "A stylish sleep accessory for upgrading your bedding collection", "Dore & Rose Discount Code, Silk Pillowcase, Lunara Silk, Bedding Deals, USA"] },
          { label: "SAVE", value: "50%", title: "Dore & Rose – Aura Silk Sleep Mask | Save 50%", desc: "Get the Aura Sleep Mask for $35.50, reduced from $71", bullets: ["Save 50% on this Lunara™ Silk sleep accessory", "Soft silk construction makes it a comfortable addition to your bedtime routine", "Compact design makes it convenient for travel and everyday use", "Dore & Rose Discount Code, Silk Sleep Mask, Aura Sleep Mask, Sleep Sale, USA"] },
          { label: "SHOP", value: "$75.65", title: "Dore & Rose – Pointelle Baby Tee & Pants Set | $75.65", desc: "Shop the Pointelle Baby Tee and Pants Set for $75.65, down from $89", bullets: ["Made with Cotton Pointelle for a soft and comfortable feel", "A coordinated sleepwear option for relaxed nights and lounging", "Save 15% on this selected sleepwear style", "Dore & Rose Discount Code, Baby Sleepwear, Cotton Pointelle, Pajama Set, USA"] },
          { label: "SAVE", value: "30%", title: "Dore & Rose – Short Tencel PJ Set | Save 30%", desc: "Get the Short Tencel PJ Set for $65.80, reduced from $94", bullets: ["Save 30% on this Soft Soothe Tencel sleepwear", "Lightweight short-PJ design is ideal for comfortable nights", "A versatile choice for summer sleep and relaxed lounging", "Dore & Rose Discount Code, Tencel Pajamas, Short PJ Set, Sleepwear Deals, USA"] },
          { label: "SAVE", value: "35%", title: "Dore & Rose – Lunara Silk Bridal Kimono | 35% OFF", desc: "Shop the Lunara™ Silk Bridal Kimono for $155.35, down from $239", bullets: ["Save 35% on this elegant silk sleepwear piece", "Designed with a luxurious finish suitable for bridal and special occasions", "A beautiful choice for getting ready, relaxing or gifting", "Dore & Rose Discount Code, Silk Bridal Kimono, Bridal Sleepwear, Lunara Silk, USA"] },
          { label: "UP TO", value: "40%", title: "Dore & Rose – Sleep Wellness Collection | Up to 40% OFF", desc: "Save up to 40% OFF on selected sleep wellness essentials", bullets: ["Explore individually designed products focused on comfort and nighttime relaxation", "Discover sleepwear, bedding, masks and other premium sleep accessories", "Shop selected offers while seasonal inventory is available", "Dore & Rose Discount Code, Sleep Wellness, Sleep Essentials, Bedding Deals, USA"] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[110px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-1">
                    {/* Increased font size for the label: text-[11px] sm:text-[13px] */}
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-bold leading-tight">{c.label}</p>
                    {/* Increased font size for the value: text-[36px] sm:text-[38px] */}
                    <div className="text-[36px] sm:text-[38px] font-extrabold leading-none mt-2">{c.value}</div>
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Dore & Rose: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
          <h3 className="text-black font-black text-lg mb-6">Latest Dore & Rose Deals & Savings</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            There are several ways to save when shopping for Dore & Rose products. Depending on the promotion, shoppers may come across coupon codes, markdowns, bundle offers, or special campaigns.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            A Dore & Rose promo code can be useful when the offer applies to the products you're buying. However, a sale price may sometimes provide a better deal than a coupon, so it's worth comparing both before placing an order.
          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            When checking a promotion, look at the conditions attached to it. Some offers may be restricted to particular collections, require a minimum spend, exclude already discounted products, or have a specific expiry date.
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
          <h3 className="text-black font-black text-lg mb-2">Smart Ways to Save on Dore & Rose</h3>
          <p className="text-gray-500 font-medium text-xs mb-8">
            Looking for a coupon is only one way to reduce your Dore & Rose spending. These options are also worth checking.
          </p>
          
          <div className="space-y-8">
            {[
              {
                icon: Tag,
                title: "Compare Coupons With Sale Prices",
                sub: "An item that's already reduced may offer greater savings than a percentage-off coupon. Compare the final prices before choosing an offer."
              },
              {
                icon: Package,
                title: "Consider Bundles",
                sub: "If you're buying several sleep products, look at the available bundles. Combining products through a promotional bundle may work out cheaper than purchasing them individually."
              },
              {
                icon: Calendar,
                title: "Watch for Seasonal Promotions",
                sub: "Dore & Rose may run special campaigns around seasonal shopping periods and gifting occasions. These can be useful times to look for additional promotions."
              },
              {
                icon: Mail,
                title: "Sign Up for Updates",
                sub: "Brand emails can keep you informed about new collections, promotions, and special shopping events."
              },
              {
                icon: CheckCircle,
                title: "Check CouponsBit Before Checkout",
                sub: "Make checking CouponsBit part of your shopping routine. A quick search for a Dore & Rose coupon code before payment could help you identify an offer you might otherwise miss."
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
        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      
      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Dore & Rose Discount Codes, Promo Codes & Deals 2026
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
                ["Dore & Rose Discount Code – End of Summer Clearance | Up to 65% OFF", "65% OFF", "All Users", "Discover limited-stock bedding, sleepwear, cooling products and accessories", "Clearance offers are available for a limited time and end August 31"],
                ["Dore & Rose Discount Code – Ultimate Cooling Sleep Bundle | Save 65%", "65% OFF", "All Users", "Save 65% on a complete cooling-focused sleep collection", "Features Aeris™ Cooling Fabric designed for a comfortable sleep experience"],
                ["Dore & Rose – Kids Deep Sleep Bundle | Save 60%", "60% OFF", "All Users", "Enjoy 60% OFF on this kids' sleep collection", "Made with Lunara™ Silk for a soft and comfortable feel"],
                ["Dore & Rose – Cooling Sleep Bundle | Save 55%", "55% OFF", "All Users", "Save 55% during the limited-time summer clearance", "Made with Aeris™ Cooling Fabric for a lightweight cooling feel"],
                ["Dore & Rose – Scalloped Silk Pillowcase | $89", "$89", "All Users", "Features Lunara™ Silk with an elegant scalloped edge", "Designed to add a luxurious touch to your nighttime setup"],
                ["Dore & Rose – Aura Silk Sleep Mask | Save 50%", "50% OFF", "All Users", "Save 50% on this Lunara™ Silk sleep accessory", "Soft silk construction makes it a comfortable addition to your bedtime routine"],
                ["Dore & Rose – Pointelle Baby Tee & Pants Set | $75.65", "$75.65", "All Users", "Made with Cotton Pointelle for a soft and comfortable feel", "A coordinated sleepwear option for relaxed nights and lounging"],
                ["Dore & Rose – Short Tencel PJ Set | Save 30%", "30% OFF", "All Users", "Save 30% on this Soft Soothe Tencel sleepwear", "Lightweight short-PJ design is ideal for comfortable nights"],
                ["Dore & Rose – Lunara Silk Bridal Kimono | 35% OFF", "35% OFF", "All Users", "Save 35% on this elegant silk sleepwear piece", "Designed with a luxurious finish suitable for bridal and special occasions"],
                ["Dore & Rose – Sleep Wellness Collection | Up to 40% OFF", "40% OFF", "All Users", "Explore individually designed products focused on comfort and nighttime relaxation", "Discover sleepwear, bedding, masks and other premium sleep accessories"],
              ].map((row, i) => (
                <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 9 && "border-b-0")}>
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

        {/* Expandable Text Content */}
        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            Want to spend less on premium sleepwear and bedtime essentials? Before buying from <strong>Dore & Rose</strong>, check <strong>CouponsBit</strong> for a Dore & Rose discount coupon code, promotional offer, or current sale. You may find ways to lower the price of everything from pajamas and silk pillowcases to sleep masks, bedding, and cooling products.
          </p>
          <p>
            Dore & Rose is dedicated to products that make bedtime more comfortable while keeping the designs stylish. Its U.S. collection covers a wide range of sleep-focused products, including silk and cotton pajamas, TENCEL™ sleepwear, pillowcases, bonnets, sleep masks, scrunchies, duvet covers, cooling bedding, children's sleepwear, and bundles.
          </p>
          <p>
            If you're refreshing your own sleepwear collection or shopping for a gift, comparing the available offers before checkout can help you find a better price.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              What to Check Before Using a Dore & Rose Discount Code
            </h3>
            <p>Before applying a Dore & Rose discount code, make sure you know:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 font-medium">
              <li>When the promotion ends</li>
              <li>Which products qualify</li>
              <li>Whether a minimum order value applies</li>
              <li>If sale products are excluded</li>
              <li>Whether the discount is automatically applied</li>
              <li>If another offer can be used at the same time</li>
            </ul>
            <p>This can help you avoid adding a code that doesn't apply to your order.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Shop Dore & Rose Pajamas & Sleepwear
            </h3>
            <p>
              Dore & Rose has built its collection around sleepwear, with styles ranging from everyday cotton sets to premium silk pajamas and lightweight TENCEL™ designs.
            </p>
            <p>
              The U.S. range includes several fabric choices, allowing shoppers to select sleepwear based on their preferred texture, weight, and style.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Dore & Rose Pajamas</h4>
            <p>
              Whether you prefer classic pajama sets or something more relaxed, Dore & Rose has several styles to choose from. Its collection includes long and short sets, camisole designs, striped options, cotton sleepwear, and TENCEL™ pieces.
            </p>
            <p>
              The Long Tencel PJ Set, for instance, combines 91% TENCEL™ Modal with 9% elastane. The fabric blend gives the set a lightweight feel with some added stretch.
            </p>
            <p>
              If you've already chosen a pajama set, check its current selling price against any available Dore & Rose coupon code before paying.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Dore & Rose Silk Pajamas</h4>
            <p>
              Silk is one of the standout materials in the Dore & Rose range. Depending on the item, its premium silk sleepwear is made with 22 or 23 Momme Mulberry Silk.
            </p>
            <p>
              The U.S. collection includes long premium silk pajama sets, silk camisole sets, and coordinating silk accessories.
            </p>
            <p>
              Because premium silk sleepwear can have a higher price tag, finding a valid Dore & Rose promo code can be particularly useful when one is available.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Dore & Rose TENCEL™ Sleepwear</h4>
            <p>
              For shoppers who prefer lightweight sleepwear, the Soft Soothe TENCEL™ range is worth exploring. The collection focuses on smooth and breathable pieces suitable for sleeping or relaxing at home.
            </p>
            <p>
              The Long Tencel PJ Set uses a TENCEL™ Modal blend with elastane and features a relaxed silhouette.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Dore & Rose Cotton Sleepwear</h4>
            <p>
              Cotton remains another option for everyday sleepwear. The Jersey Sleep Set is made from 92% cotton and 8% elastane and pairs a long-sleeve top with shorts.
            </p>
            <p>
              Its simple design makes it suitable for shoppers who want comfortable, breathable pajamas for regular use.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Dore & Rose Silk Pillowcases & Bedtime Accessories
            </h3>
            <p>
              Your bedtime routine doesn't have to stop at pajamas. Dore & Rose also offers accessories and bedding designed to complement its sleepwear collection.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Dore & Rose Silk Pillowcase</h4>
            <p>
              A Dore & Rose silk pillowcase can add a premium touch to your bedroom setup. The U.S. collection includes a Premium Silk Pillowcase made from 23 Momme Mulberry Silk.
            </p>
            <p>
              There are also cooling pillowcase options for shoppers who prefer a cooler feel while sleeping.
            </p>
            <p>
              If you're buying a pillowcase along with other products, check for a Dore & Rose discount code or bundle promotion that could reduce your total spend.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Dore & Rose Sleep Masks</h4>
            <p>
              Sleep masks are another part of the brand's accessories range. Available designs include the Deep Sleep Mask, Aura Sleep Mask, and Cooling Sleep Mask.
            </p>
            <p>
              The collection includes both 23 Momme Mulberry Silk options and cooling-fabric designs, giving shoppers different materials to choose from.
            </p>
            <p>
              They can also make easy gift choices for someone who enjoys sleep and relaxation products.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Dore & Rose Silk Bonnet</h4>
            <p>
              The Premium Silk Bonnet is made from 23 Momme Mulberry Silk and comes in a selection of colors. It adds another option for shoppers looking to incorporate silk accessories into their bedtime routine.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Dore & Rose Cooling Products</h4>
            <p>
              If traditional bedding feels too warm, the Dore & Rose Cooling Collection offers an alternative. These products use the brand's Aeris™ Cooling Fabric.
            </p>
            <p>
              The collection includes cooling sleep masks, pillowcases, and a Cooling Comforter.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Dore & Rose Sale & Bundle Offers
            </h3>
            <p>
              You don't necessarily need a coupon to get a lower price at Dore & Rose. The brand also places selected products on sale and promotes bundle savings.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Dore & Rose Bundle Deals</h4>
            <p>
              Bundles can be useful when you're purchasing several related products instead of buying each item separately.
            </p>
            <p>
              Dore & Rose's U.S. website currently promotes a mid-season offer with up to 40% off selected bundles. Depending on what you're buying, a bundle may provide better value than purchasing the products individually.
            </p>

            <h4 className="text-lg font-black text-black mt-4">Dore & Rose Sale</h4>
            <p>
              The sale selection can include different categories of sleep products. Examples featured on the U.S. site include Jersey Sleep Sets, Premium Silk Pillowcases, Long Premium Silk PJ Sets, Cooling Comforters, and sleep masks.
            </p>
            <p>
              When you see an item that's already discounted, compare its sale price with the savings available through a Dore & Rose coupon code. The better option will depend on the individual promotion and product.
            </p>
          </div>

          {/* Numbered Steps Block */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">
              How to Shop Dore & Rose via CouponsBit
            </h3>
            <div className="space-y-6">
              {[
                "Step 1: Browse Available Dore & Rose Offers — Visit the Dore & Rose page on CouponsBit and explore the latest offers.",
                "Step 2: Select Your Preferred Offer — Choose the offer that best fits what you're shopping for.",
                "Step 3: Click Get Deal — You'll be taken directly to the relevant Dore & Rose collection.",
                "Step 4: Browse the Collection — Explore eye masks, pillowcases, pajama sets, or bedding.",
                "Step 5: Add Items to Your Cart — Select colors and sizes for your order.",
                "Step 6: Complete Your Purchase — Finalize your order at checkout on Dore & Rose.",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Smart Ways to Save on Dore & Rose
            </h3>
            <p>Looking for a coupon is only one way to reduce your Dore & Rose spending. These options are also worth checking.</p>
            <p><strong>Compare Coupons With Sale Prices:</strong> An item that's already reduced may offer greater savings than a percentage-off coupon. Compare the final prices before choosing an offer.</p>
            <p><strong>Consider Bundles:</strong> If you're buying several sleep products, look at the available bundles. Combining products through a promotional bundle may work out cheaper than purchasing them individually.</p>
            <p><strong>Watch for Seasonal Promotions:</strong> Dore & Rose may run special campaigns around seasonal shopping periods and gifting occasions. These can be useful times to look for additional promotions.</p>
            <p><strong>Sign Up for Updates:</strong> Brand emails can keep you informed about new collections, promotions, and special shopping events.</p>
            <p><strong>Check CouponsBit Before Checkout:</strong> Make checking CouponsBit part of your shopping routine. A quick search for a Dore & Rose coupon code before payment could help you identify an offer you might otherwise miss.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              What Makes Dore & Rose Worth Shopping?
            </h3>
            <p>Dore & Rose concentrates specifically on sleepwear and bedtime products rather than selling a broad assortment of unrelated categories.</p>
            <p><strong>Multiple Fabric Choices:</strong> The brand's collections use materials such as Mulberry Silk, cotton, TENCEL™ Modal, modal, and lyocell, giving shoppers different options for comfort and feel.</p>
            <p><strong>Sleepwear for Different Preferences:</strong> The range covers premium silk sets, cotton pajamas, TENCEL™ sleepwear, and cooling designs, so shoppers can choose according to their preferred material and style.</p>
            <p><strong>More Than Just Pajamas:</strong> Alongside sleepwear, Dore & Rose sells products such as pillowcases, sleep masks, bonnets, scrunchies, duvet covers, sleep socks, and travel accessories.</p>
            <p><strong>Suitable for Gifting:</strong> Several products can work as gifts, particularly silk pillowcases, sleep masks, pajamas, bonnets, and curated bundles. Some products also come with gift-friendly packaging.</p>
            <p><strong>U.S. Store & Shipping:</strong> The Dore & Rose U.S. store lists prices in U.S. dollars and provides shipping options for U.S. shoppers. The store currently advertises free shipping on orders of $80 or more, with paid standard and express options available below that amount.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Find Dore & Rose Coupons & Deals on CouponsBit
            </h3>
            <p>
              Whether you're interested in a new pajama set, premium silk sleepwear, a Dore & Rose silk pillowcase, a sleep mask, cooling bedding, or a gift, it's worth checking current promotions before placing your order.
            </p>
            <p>
              Visit CouponsBit to look for the latest Dore & Rose coupon code, Dore & Rose promo code, Dore & Rose discount code, sale offers, and bundle deals.
            </p>
            <p>
              Review each offer's terms, compare it with any existing sale price, and choose the promotion that gives you the most worthwhile saving.
            </p>
          </div>

          {/* Gradient Mask when collapsed */}
          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        {/* Read More / Read Less Toggle Button */}
        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform",
              isReadMore && "rotate-180"
            )}
          />
        </button>

        {/* FAQ Accordion Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions
          </h3>
          {[
            {
              q: "How Can I Save Money at Dore & Rose?",
              a: "Check CouponsBit for available Dore & Rose coupon codes, then compare those offers with current sale prices and bundle promotions on the brand's website.",
            },
            {
              q: "Where Should I Look for a Dore & Rose Promo Code?",
              a: "CouponsBit lists Dore & Rose promo codes, discounts, and other available offers. Checking before checkout can help you identify potential savings.",
            },
            {
              q: "What Products Does Dore & Rose Sell?",
              a: "Dore & Rose specializes in sleepwear and bedtime products. Its range includes pajamas, silk sleepwear, pillowcases, sleep masks, bonnets, scrunchies, duvet covers, cooling products, children's sleepwear, travel accessories, and bundles.",
            },
            {
              q: "Are Dore & Rose Pajamas Available in Silk?",
              a: "Yes. The brand offers premium silk pajama sets made from Mulberry Silk, including long and short styles.",
            },
            {
              q: "Does Dore & Rose Offer Sale Prices?",
              a: "Yes. Dore & Rose periodically discounts selected products and runs promotional campaigns. The U.S. website currently features a mid-season promotion with up to 40% off selected bundles.",
            },
            {
              q: "What Is the Free Shipping Threshold at Dore & Rose?",
              a: "The U.S. store currently advertises free shipping for orders totaling $80 or more. Orders below that amount may qualify for paid standard or express shipping options.",
            },
            {
              q: "Can I Buy Gifts From Dore & Rose?",
              a: "Yes. Pajamas, silk pillowcases, sleep masks, bonnets, and curated bundles can all work as gift options. Some products also have gift-friendly packaging.",
            },
            {
              q: "Does CouponsBit Charge to Use Its Coupon Listings?",
              a: "No. CouponsBit is free to use. You can browse available Dore & Rose coupons, promotional offers, and deals without paying a fee.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
              >
                <span className="text-black font-black text-base">
                  {faq.q}
                </span>
                <div
                  className={cn(
                    "bg-[#f0f0f0] p-2 rounded-xl transition-all",
                    openFaq === i && "bg-[#056bfa]"
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-gray-500 transition-transform duration-300",
                      openFaq === i && "text-white rotate-180"
                    )}
                  />
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 px-8 bg-white",
                  openFaq === i
                    ? "max-h-60 pb-8 opacity-100"
                    : "max-h-0 opacity-0 pb-0"
                )}
              >
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
        {/* Search Tags */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Dore & Rose Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Silk Eye Masks",
              "Silk Pillowcases",
              "Pajama Sets",
              "Duvet Covers",
              "Dore & Rose Promo Code",
              "Bonnets",
              "Scallop Collection",
              "Free Shipping",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Today's Top Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Dore & Rose Deals
          </h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div
                key={i}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  D
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
                  aria-label={`Shop Dore & Rose: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90 inline-block text-center"
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
