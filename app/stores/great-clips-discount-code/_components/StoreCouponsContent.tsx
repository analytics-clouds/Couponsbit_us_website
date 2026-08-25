"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent,Calendar, MapPin,
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
  Scissors,
  Clock,
  Baby,
  Award,
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
  { id: "d1", label: "NEW", heading: "New Haircut Offers", sub: "Latest Deals" },
  { id: "d2", label: "SHOP", heading: "Styling Deals", sub: "Featured Picks" },
  { id: "d3", label: "SHOP", heading: "Kids' Cut Picks", sub: "Featured Picks" },
  { id: "d4", label: "TOP", heading: "Online Check-In Offers", sub: "Featured Picks" },
  { id: "d5", label: "BEST", heading: "Clip Notes Membership Picks", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Philips", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784881809/philips-logo_yuwckz.webp", dealText: "Save Up To £120", href: "/stores/philips-discount-code" },
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up To $260", href: "/stores/merachfit-discount-code" },
  { name: "Bamboocool", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp", dealText: "Up To 25% OFF", href: "/stores/bamboocool-discount-code" },
  { name: "Ballboyz", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/ballboyz-coupon-code_rduo3k.jpg", dealText: "Up To 50% OFF", href: "/stores/ballboyz-discount-code" },
  { name: "Cariloha", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg", dealText: "Up To 50% OFF", href: "/stores/cariloha-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
];

const STORE_URL = "https://www.greatclips.com/";

export default function GreatClipsCouponsContent() {
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
              <span className="text-black font-extrabold">Great Clips</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787639269/great-clips_rz78rf.webp" alt="Great Clips" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Great Clips</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(19.8k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover Great Clips deals and offers in Aug 2026. Browse haircut offers, styling deals, kids' cut picks and online check-in offers on Great Clips.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "1.6k", label: "Deals" },
                    { icon: Users, val: "6M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787639269/great-clips_rz78rf.webp" alt="Great Clips Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Great Clips Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "NEW", value: "HAIRCUTS", title: "New Haircut Offers", desc: "Discover the latest haircut offers from Great Clips.", bullets: ["Offers across men's, women's and kids' haircuts", "New arrivals updated regularly", "Available online and in participating salons"] },
                  { label: "SHOP", value: "STYLING", title: "Styling Deals", desc: "Browse styling deals and offers at Great Clips.", bullets: ["Deals across blowouts and styling services", "Options for everyday and special-occasion looks", "Available online and in participating salons"] },
                  { label: "SHOP", value: "KIDS", title: "Kids' Cut Picks", desc: "Shop kids' cut picks from Great Clips.", bullets: ["Options for kids' haircuts and trims", "Suited for family salon visits", "Available online and in participating salons"] },
                  { label: "TOP", value: "CHECK-IN", title: "Online Check-In Offers", desc: "Browse online check-in offers at Great Clips.", bullets: ["Reserve your spot online before arriving", "Helps reduce wait times at the salon", "Available at participating locations"] },
                  { label: "BEST", value: "MEMBERSHIP", title: "Clip Notes Membership Picks", desc: "Explore Clip Notes membership picks from Great Clips.", bullets: ["Track haircut history and preferences", "Rewards for regular customers", "Available online and in participating salons"] },
                  { label: "SHOP", value: "BEARD", title: "Beard Trim Offers", desc: "Find Great Clips' beard trim offers.", bullets: ["Options for beard trims and grooming", "Suited for a complete grooming visit", "Available at participating locations"] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[10px] sm:text-lg font-extrabold leading-none mt-2">{c.value}</div>
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Great Clips: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">Great Clips Rewards and Savings</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Great Clips has offered loyalty and promotional programs that can provide customers with additional ways to save. The availability and structure of these programs can change over time and may vary by market.

                  </p>
                    <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For regular customers, it can be worthwhile to check both current promotional offers and any eligible loyalty benefits.

                  </p>
                    <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    This is another reason why the best saving opportunity may not always be a traditional Great Clips coupon code. A loyalty benefit, local promotion, or seasonal offer could be more useful depending on your circumstances.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Scissors, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Clock, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Award, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
  <h3 className="text-black font-black text-lg mb-8">
    How to Find the Best Great Clips Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Your Visit",
        sub: "Before heading to the salon, check CouponsBit for the latest Great Clips coupon code, promo code, discount offers, vouchers, and other promotions."
      },
      {
        icon: MapPin,
        title: "Check Your Local Salon",
        sub: "Great Clips operates many locations, and promotional availability can vary. Confirm that your selected salon accepts the offer before planning your visit around it."
      },
      {
        icon: Calendar,
        title: "Look for Seasonal Promotions",
        sub: "Back-to-school, holiday periods, Father's Day, and other seasonal occasions can be useful times to watch for salon promotions."
      },
      {
        icon: Scissors,
        title: "Consider the Service You Need",
        sub: "Make sure the promotion applies to the service you actually want. A coupon intended for a specific haircut or service may not apply to every offering at the salon."
      },
      {
        icon: Clock,
        title: "Check the Expiration Date",
        sub: "Salon coupons can be limited-time offers. Always check the expiration date before visiting the salon."
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
          Great Clips Coupon Code, Promo Code & Discount Offers
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Great Clips is a popular hair salon chain in the United States and Canada, known for convenient haircuts and everyday salon services for women, men, and children. With thousands of salon locations, Great Clips makes it easy for customers to find a nearby salon for a quick haircut, trim, or other eligible service.
          </p>
          <p>
            If you are planning your next haircut, checking for a Great Clips coupon code before visiting a salon can be a simple way to look for savings. CouponsBit helps customers discover available coupon codes, promo codes, discount offers, vouchers, and other Great Clips deals so they can check for potential savings before booking or walking into a salon.
          </p>
          <p>
            Whether you need a regular haircut, a fresh style for a special occasion, or a trim for the whole family, checking current Great Clips promotions can help you make the most of your salon budget.
          </p>

          <div className={cn("text-gray-600 space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Find a Great Clips Coupon Code</h3>
    <p>
      A Great Clips coupon code can help customers look for savings on eligible salon services. Great Clips frequently runs local and national promotions, meaning the offers available can vary depending on the location, service, season, and promotional campaign.
    </p>
    <p>
      Unlike online retailers where a discount code is usually entered during checkout, salon coupons can work differently. A Great Clips offer may be presented digitally, printed, included in a local promotion, or connected to a specific salon or service.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      Before using an offer, check its terms carefully. Some promotions may be valid only at participating salons, for a limited time, or for particular services.
    </p>
    <p className="font-medium text-gray-700">
      CouponsBit gives customers a convenient place to check available Great Clips offers before heading to their appointment or salon visit.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Great Clips Promo Code and Discount Offers</h3>
    <p>
      When searching for a Great Clips promo code, it helps to consider the type of service you need and the salon location you plan to visit.
    </p>
    <p>
      A promotion might offer savings on a haircut, provide a special rate for a particular customer group, or be available during a specific promotional period. Some offers can also be connected to seasonal campaigns or local salon marketing.
    </p>
    <p>
      Rather than assuming every Great Clips discount applies everywhere, check the individual offer's conditions. Salon promotions can have location-specific terms that determine whether a coupon can be redeemed.
    </p>
    <p className="font-medium text-gray-700">
      If you are looking for a Great Clips discount code, CouponsBit can help you check the available offers before your next visit.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Great Clips Haircut and Salon Services</h3>
    <p>
      Great Clips focuses primarily on convenient, affordable haircare services for the entire family. Its salons cater to different hair lengths, styles, and customer needs.
    </p>

    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Haircuts for Women</h4>
      <p>
        Women can visit Great Clips for regular trims, changes in hairstyle, and other haircut services. Depending on the salon, customers can request different lengths and styles suited to their preferences.
      </p>
      <p>
        Whether you want to maintain an existing style or try something different, discussing the desired cut with your stylist can help ensure you get the result you want.
      </p>
      <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
        Before your appointment, check for a Great Clips coupon code that may apply to the service.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Haircuts for Men</h5>
        <p className="text-sm">Trims to detailed cuts, fades, layered styles, and everyday grooming services.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Kids' Haircuts</h5>
        <p className="text-sm">Simple trims and age-appropriate haircuts for children and household members.</p>
      </div>
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Hair Trims & Maintenance</h5>
        <p className="text-sm">Regular maintenance cuts to keep hair looking neat between larger styling visits.</p>
      </div>
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Great Clips Online Check-In</h3>
    <p>
      One of the conveniences associated with Great Clips is its online check-in system. Customers can select a salon and check in before arriving, helping them manage their visit more efficiently.
    </p>
    <p>
      The exact check-in process and availability can depend on the individual location. Before heading out, confirm the selected salon and any information associated with your visit.
    </p>
    <p className="text-sm bg-blue-50 text-[#056bfa] p-3 rounded-xl border border-blue-100 font-medium">
      If you are checking in for a haircut, take a moment to look for a current Great Clips promo code or other eligible offer before your appointment.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Great Clips Haircare Products</h3>
    <p>
      Great Clips salons may also offer professional haircare products and styling products. Availability can vary by salon and product line.
    </p>
    <p>
      Depending on the location, customers may be able to purchase products designed to help maintain their hairstyle between salon visits.
    </p>
    <p className="text-sm bg-blue-50/70 text-gray-700 p-3 rounded-xl border border-blue-100 font-medium">
      If you are interested in adding a haircare product to your salon visit, check whether the promotion you intend to use applies to products as well as services.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa]">Great Clips Savings for Families</h3>
    <p>
      Because Great Clips serves women, men, and children, it can be convenient for households that need regular haircuts for several family members.
    </p>
    <p>
      Instead of arranging separate appointments at different salons, families can often visit a Great Clips location for multiple haircuts.
    </p>
    <p>
      A Great Clips coupon code can become particularly useful when the promotion applies to an eligible service and you are planning several visits. However, always check whether the coupon has a limit on the number of uses or services covered.
    </p>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-black text-[#056bfa]">Great Clips Seasonal Promotions</h3>
    <p>
      Like many service businesses in the United States, Great Clips can use seasonal and event-based promotions to attract customers.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Back-to-School Haircut Promotions</h5>
        <p className="text-sm">Late summer savings when scheduling haircuts for children and students returning to school.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Holiday Haircut Offers</h5>
        <p className="text-sm">Pre-holiday grooming promotions before Thanksgiving, Christmas, and New Year celebrations.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Father's Day Promotions</h5>
        <p className="text-sm">Men's grooming deals as practical gifts or prep for family celebrations.</p>
      </div>

      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
        <h5 className="font-bold text-gray-900">Local and Limited-Time Offers</h5>
        <p className="text-sm">Salon-specific regional campaigns tailored to individual location availability.</p>
      </div>
    </div>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Great Clips Coupon Code</h3>
            <p className="text-gray-700 font-bold mb-6">
              Great Clips coupons can work differently from typical ecommerce discount codes. If you find a Great Clips coupon through CouponsBit, follow the instructions associated with that specific promotion. A typical process may include:
            </p>
            <div className="space-y-6">
              {[
                "Choose the Great Clips offer you want to use.",
                "Check the offer's expiration date and eligibility requirements.",
                "Confirm that your preferred Great Clips salon participates.",
                "Check in online or visit the salon according to the promotion's instructions.",
                "Present or apply the coupon as required.",
                "Confirm that the discount applies to your eligible service.",
                "Complete your salon visit.",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 font-bold leading-relaxed pt-4">
              If the offer does not work, check whether the coupon is still valid and whether the selected salon participates in the promotion.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Great Clips Offers?</h3>
            <p>
              CouponsBit is designed to help customers look for savings before they spend money. For services such as haircuts, where customers may return regularly, finding a relevant promotion can make a difference over time.
            </p>
            <p>
              If you are searching for a Great Clips coupon code, CouponsBit gives you a place to check available promotions alongside discount offers, vouchers, deals, and other savings opportunities.
            </p>
            <p>
              The objective is simple: help customers find an offer that is relevant to their planned visit.
            </p>
            <p>
              Whether you need a haircut for yourself, are taking your children for back-to-school trims, or are arranging several family haircuts, checking for a current promotion before your visit is a useful habit.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next Great Clips Visit</h3>
            <p>
              Getting a haircut is part of many people's regular routines, and finding a suitable promotion can make those recurring visits easier on the budget. Great Clips provides haircut services for women, men, and children, along with convenient online check-in and other salon services.
            </p>
            <p>
              Before your next visit, check CouponsBit for the latest Great Clips coupon code, along with available promo codes, discount offers, vouchers, and other deals. Review the terms, confirm your salon participates, and choose the offer that best fits your planned service.
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
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Great Clips Coupon Codes</h3>
          {[
            { q: "Does Great Clips offer coupon codes?", a: "Yes. Great Clips can offer coupons and promotional savings for eligible salon services. Offers can vary by location, service, and promotional period." },
            { q: "Where can I find a Great Clips coupon code?", a: "You can check CouponsBit for available Great Clips coupon codes, promo codes, discount offers, vouchers, and other promotions before visiting a salon." },
            { q: "How do I use a Great Clips coupon?", a: "Follow the instructions provided with the individual offer. Depending on the promotion, you may need to present the coupon at the salon, show it digitally, or follow another redemption process." },
            { q: "Why isn't my Great Clips coupon code working?", a: "The offer may have expired, may be limited to participating salons, or may apply only to a particular service. Check the coupon's terms and confirm that your chosen location accepts it." },
            { q: "Can I use a Great Clips discount code at any location?", a: "Not necessarily. Some promotions may be valid only at participating salons or within specific markets. Check the offer details before visiting." },
            { q: "Does Great Clips offer men's haircuts?", a: "Yes. Great Clips provides men's haircut services, with available styles and services depending on the salon." },
            { q: "Does Great Clips cut children's hair?", a: "Yes. Great Clips serves children as well as adults, making it a convenient option for family haircuts." },
            { q: "Does Great Clips offer women's haircuts?", a: "Yes. Women can visit Great Clips for haircuts and trims, with available services depending on the individual salon." },
            { q: "Does Great Clips have back-to-school promotions?", a: "Great Clips can run promotions during back-to-school season, when families often schedule haircuts for children and students. Specific offers vary by year and location." },
            { q: "Does Great Clips have seasonal discounts?", a: "Great Clips may run promotions around seasonal events and holidays. Because offers can change, check current promotions before planning your visit." },
            { q: "Can I check in online at Great Clips?", a: "Great Clips provides an online check-in option at participating salons, allowing customers to select a location and manage their visit before arriving." },
            { q: "How can I save money at Great Clips?", a: "Start by checking CouponsBit for a current Great Clips coupon code, then verify whether the offer is valid at your chosen salon and applies to the service you need. Also watch for seasonal and local promotions." },
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Great Clips Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Haircut Deals", "Online Check-In", "Men's Haircuts", "Great Clips Coupon Code", "Kids' Cuts", "Women's Trims", "Back to School", "Salon Offers"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Great Clips Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">G</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Great Clips: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
