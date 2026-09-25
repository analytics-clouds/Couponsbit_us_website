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
  ShieldCheck,Calendar, Home, Layers, Rocket, CreditCard, Headphones,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Shirt,
  Smartphone,
  Tv,
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
  { id: "d1", label: "NEW", heading: "Galaxy Z Fold8 Starting at $1,899.99", sub: "Latest Deals" },
  { id: "d2", label: "SALE", heading: "77-Inch OLED S90H Save $1,400", sub: "Featured Picks" },
  { id: "d3", label: "SALE", heading: "Monitors – Up to $500 OFF", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Galaxy Watch8 Classic – Up to $250 Trade-In Credit", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Galaxy Watch9 – Save $237.99 + $200 Samsung Credit", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Apple", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/apple-logo_vrakxu.webp", dealText: "Up To $150 Gift Card", href: "/stores/apple-discount-code" },
  { name: "HP", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782890859/hp-coupon-code_vaogna.webp", dealText: "Up to 69% OFF", href: "/stores/hp-discount-code" },
  { name: "Dell", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782890858/dell-coupon-code_mxtssy.webp", dealText: "Up to 69% OFF", href: "/stores/dell-discount-code" },
  { name: "Beelink", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494081/beelink-coupon-code_gephnd.jpg", dealText: "Up to 35% OFF", href: "/stores/beelink-discount-code" },
  { name: "Geekbuying", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/geekbuying-logo_pnkeev.webp", dealText: "Up To 56% OFF", href: "/stores/geekbuying-discount-code" },
  { name: "TP-Link", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/tp-link-logo_y9efya.webp", dealText: "Up To 50% OFF", href: "/stores/tplink-promo-code" },
];

const STORE_URL = "https://www.samsung.com";

export default function SamsungCouponsContent() {
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
              <span className="text-black font-extrabold">Samsung</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788868873/samsung-logo_o6jp7u.webp" alt="Samsung" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Samsung Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-70" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(22.3k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Samsung promo codes and Samsung discount codes at Maxiku Offers. Save up to $1,900 OFF OLED TVs, receive up to $800 trade-in credit on Galaxy devices, enjoy up to $500 OFF monitors, plus exclusive deals on smartphones, tablets, smartwatches, and home appliances.
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
                    { icon: Tag, val: "16", label: "Offers" },
                    { icon: Percent, val: "600+", label: "Deals" },
                    { icon: Users, val: "5M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789559424/38_synvnj.webp" alt="Samsung Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Samsung Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "NEW", value: "$1,899.99", title: "Samsung Promo Code – Galaxy Z Fold8 Starting at $1,899.99", desc: "Explore the all-new Samsung Galaxy Z Fold8 with Galaxy AI and next-generation foldable technology.", bullets: ["The 256GB model starts at $1,899.99, while 512GB is available for $2,099.99.", "Upgrade to the 1TB Galaxy Z Fold8 for $2,499.99 and enjoy powerful storage for your everyday needs.", "Choose from available configurations and unlock exclusive Samsung benefits in the USA."] },
                  { label: "SALE", value: "$1,400 OFF", title: "Samsung Promo Code – 77-Inch OLED S90H Save $1,400", desc: "Upgrade your home entertainment with the 77-inch Samsung OLED S90H 4K Smart TV.", bullets: ["Get Samsung Vision AI and stunning OLED picture quality for $2,299.99.", "Original price is $3,699.99, giving you a massive $1,400 saving.", "Eligible customers can also qualify for next-day delivery when ordering by 3 PM EST."] },
                  { label: "SALE", value: "$500 OFF", title: "Samsung Monitors – Up to $500 OFF", desc: "Save up to $500 on selected Samsung monitors.", bullets: ["Explore gaming monitors, Smart Monitors and displays with different resolutions and features.", "Enjoy free shipping and free returns on eligible monitor purchases.", "Shop Samsung monitors and upgrade your work, gaming or entertainment setup."] },
                  { label: "DEAL", value: "$250 CREDIT", title: "Samsung Galaxy Watch8 Classic – Up to $250 Trade-In Credit", desc: "Upgrade to the Samsung Galaxy Watch8 Classic and get up to $250 in instant trade-in credit.", bullets: ["Trade in an eligible smartwatch to unlock additional savings on your upgrade.", "Enjoy a sophisticated design with advanced features for fitness and everyday use.", "Take advantage of this limited-time trade-in offer while eligible credits are available."] },
                  { label: "DEAL", value: "$237.99 OFF", title: "Samsung Promo Code Galaxy Watch9 – Save $237.99 + $200 Samsung Credit", desc: "Get the Samsung Galaxy Watch9 for just $142.00 with eligible bundle savings applied.", bullets: ["Original price is $379.99, giving you total savings of $237.99.", "The offer includes a $200 Samsung Credit plus $37.99 in bundle savings.", "Start building healthy habits with a feature-packed Galaxy smartwatch."] },
                  { label: "NEW", value: "$1,549.99", title: "Samsung Promo Code – Galaxy Tab S11 Ultra $1,549.99", desc: "Experience a premium big-screen tablet with the Samsung Galaxy Tab S11 Ultra.", bullets: ["Get the 14.6-inch Wi-Fi model with 1TB storage for just $1,549.99.", "Save $350 compared with the original price of $1,899.99.", "Enjoy Galaxy AI features and a powerful tablet experience for work, study and entertainment."] },
                  { label: "DEAL", value: "FROM $99.99", title: "Samsung Promo Code – Galaxy Accessories & Cases From $99.99", desc: "Protect and personalize your Galaxy devices with Samsung’s latest accessories.", bullets: ["The Galaxy Z Fold8 Ultra Click Magnet Case is available for $99.99.", "Explore Samsung accessories designed for convenient everyday use and device protection.", "Shop the latest Galaxy accessories and enhance your Samsung setup in the USA."] },
                  { label: "NEW", value: "$699.99", title: "Samsung Promo Code Galaxy Watch Ultra2 – $699.99", desc: "Upgrade your smartwatch experience with the Samsung Galaxy Watch Ultra2.", bullets: ["Get the 47mm LTE + Wi-Fi model for $699.99.", "Choose from Titanium Gray, Marine and Black options with Medium/Large sizing.", "Enjoy Galaxy AI features and advanced smartwatch capabilities for fitness and everyday use."] },
                  { label: "DEAL", value: "$100 OFF", title: "Samsung Care+ with Theft and Loss – Save $100", desc: "Get Samsung Care+ with Theft and Loss for added protection and peace of mind.", bullets: ["Save $100 instantly with Samsung Credit on eligible yearly plans.", "Enjoy unlimited same-day $0 cracked screen and back glass repairs along with same-day theft and loss replacements.", "Plans start at $8.00/month or $0.00 for a 2-year term with the eligible promotion."] },
                  { label: "DEAL", value: "$800 CREDIT", title: "Samsung Galaxy Trade-In – Up to $800 Instant Credit", desc: "Upgrade your eligible Galaxy device and get up to $800 in instant trade-in credit.", bullets: ["You can also unlock carrier deals worth up to $1,900 on eligible devices and plans.", "Trade in your current device toward the latest Samsung smartphones and products.", "Check your eligible device and available trade-in value before upgrading."] },
                  { label: "SALE", value: "40% OFF", title: "Samsung Refrigerators – Up to 40% OFF", desc: "Save up to 40% on selected Samsung refrigerators in the USA.", bullets: ["Shop Bespoke, 4-Door Flex, French Door, Top Freezer and other refrigerator styles.", "The offer is valid on selected refrigerator categories and eligible models.", "Explore Samsung refrigerators and upgrade your kitchen while enjoying major savings."] },
                  { label: "SALE", value: "20% OFF", title: "Samsung Smart Watch Collection – 20% OFF", desc: "Save 20% on selected Samsung smartwatches and upgrade your wearable technology.", bullets: ["Explore smartwatches packed with features for fitness, health tracking and everyday activities.", "Shop Samsung’s latest watch collection and discover advanced Galaxy features.", "Buy now and enjoy the available smartwatch savings in the USA."] },
                  { label: "DEAL", value: "$30 CREDIT", title: "Samsung Galaxy Reservation – Up to $30 Samsung Credit", desc: "Reserve the upcoming Samsung Galaxy device with a $50 commitment to access launch benefits.", bullets: ["Get up to $30 in Samsung Credit when the eligible device is purchased.", "Gain early access to exclusive launch offers, bonuses and product updates.", "Reserve early and stay updated on the latest Samsung Galaxy release details in the USA."] },
                  { label: "SALE", value: "30% OFF", title: "Samsung Health Band Collection – Up to 30% OFF", desc: "Save up to 30% on selected Samsung health bands and wearable products.", bullets: ["Explore Samsung wearables designed to help track fitness, health and everyday activity.", "Shop now and take advantage of the available health band discounts.", "Grab the offer and enjoy additional savings on eligible Samsung products."] },
                  { label: "DEAL", value: "30% OFF", title: "Samsung Employee Offer – Up to 30% OFF", desc: "Eligible Samsung employee customers can save up to 30% on qualifying purchases.", bullets: ["The offer may apply to phones, tablets, mobile devices, monitors and other selected products.", "Enjoy free shipping on eligible purchases under the employee offer.", "Check product eligibility and employee pricing before completing your order."] },
                  { label: "SALE", value: "$1,900 OFF", title: "Samsung 77-Inch OLED S-Series TVs – Up to $1,900 OFF", desc: "Save up to $1,900 on selected 77-inch Samsung OLED S-Series TVs.", bullets: ["Explore premium models including the S95F, S90F, S85F and S90D.", "Upgrade your home theater with rich colors, deep contrast and cinematic picture quality.", "Shop selected Samsung OLED TVs and enjoy massive savings in the USA."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Samsung: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About Samsung</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Samsung is one of the world's best-known technology and electronics brands, with a huge presence across India. The company offers an extensive range of consumer electronics, mobile devices, home appliances, accessories, and connected technology.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Samsung is particularly well known for its Galaxy smartphones and tablets, but its product lineup goes far beyond mobile devices. Shoppers can explore televisions, monitors, refrigerators, washing machines, air conditioners, microwaves, vacuum cleaners, wearables, audio products, storage devices, and various accessories.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand has also built a strong reputation for bringing advanced technology into everyday products. From smart TVs and connected appliances to feature-packed smartphones and wearable devices, Samsung focuses heavily on combining modern design with useful technology.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    That wide selection is one reason Samsung appeals to such a broad audience. Whether you're shopping for personal electronics or upgrading your home, you can often find several Samsung products worth considering.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    And if you’re already planning to buy, why pay more than you need to?

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Shirt, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Smartphone, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Sparkles, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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
  <h3 className="text-black font-black text-lg mb-4">
    Samsung Deals Worth Watching
  </h3>
  <p className="text-gray-500 font-medium text-[11px] leading-relaxed mb-8">
    Samsung regularly runs different types of promotional campaigns, so shoppers should keep an eye out for opportunities such as:
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Calendar,
        title: "Seasonal Samsung sales",
      },
      {
        icon: Sparkles,
        title: "Festive shopping offers",
      },
      {
        icon: Smartphone,
        title: "Smartphone promotions",
      },
      {
        icon: Tv,
        title: "Television deals",
      },
      {
        icon: Home,
        title: "Home appliance offers",
      },
      {
        icon: Layers,
        title: "Bundle promotions",
      },
      {
        icon: Rocket,
        title: "Product launch campaigns",
      },
      {
        icon: Tag,
        title: "Limited-time Samsung coupons",
      },
      {
        icon: CreditCard,
        title: "Bank and payment-related promotions",
      },
      {
        icon: Percent,
        title: "Selected-product discounts",
      },
      {
        icon: Headphones,
        title: "Accessory offers",
      },
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-center">
        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
          <item.icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-black font-black text-sm leading-tight">
            {item.title}
          </p>
        </div>
      </div>
    ))}
  </div>
  <p className="text-gray-500 font-medium text-[11px] leading-relaxed mt-8">
    The availability and terms of these promotions can change, so always check the current offer before making your purchase.
  </p>
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
          Samsung Promo Code, Coupons & Deals
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border border-gray-200 bg-white shadow-sm">
  <table className="w-full min-w-[850px] border-collapse text-left">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Offer
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Discount / Price
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Eligibility
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Key Conditions
        </th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">
          Applicable On
        </th>
      </tr>
    </thead>
    <tbody className="text-[14px] font-bold text-gray-600">
      {[
        {
          title: "Samsung Promo Code – Galaxy Z Fold8 Starting at $1,899.99",
          discount: "From $1,899.99",
          eligibility: "USA Users",
          conditions: "256GB at $1,899.99, 512GB at $2,099.99 & 1TB at $2,499.99 with Galaxy AI",
          applicableOn: "Galaxy Z Fold8"
        },
        {
          title: "Samsung Promo Code – 77-Inch OLED S90H Save $1,400",
          discount: "$1,400 OFF ($2,299.99)",
          eligibility: "Eligible Users",
          conditions: "Was $3,699.99. Samsung Vision AI & next-day delivery by 3 PM EST",
          applicableOn: "OLED S90H 4K TV"
        },
        {
          title: "Samsung Monitors – Up to $500 OFF",
          discount: "Up to $500 OFF",
          eligibility: "All Users",
          conditions: "Applies to gaming & Smart Monitors. Free shipping & free returns",
          applicableOn: "Samsung Monitors"
        },
        {
          title: "Samsung Galaxy Watch8 Classic – Up to $250 Trade-In Credit",
          discount: "Up to $250 Credit",
          eligibility: "Trade-In Users",
          conditions: "Instant credit with eligible smartwatch trade-in",
          applicableOn: "Galaxy Watch8 Classic"
        },
        {
          title: "Samsung Promo Code Galaxy Watch9 – Save $237.99 + $200 Credit",
          discount: "$142.00 ($237.99 OFF)",
          eligibility: "All Users",
          conditions: "Was $379.99. Includes $200 Samsung Credit + $37.99 bundle savings",
          applicableOn: "Galaxy Watch9"
        },
        {
          title: "Samsung Promo Code – Galaxy Tab S11 Ultra $1,549.99",
          discount: "$350 OFF ($1,549.99)",
          eligibility: "USA Users",
          conditions: "Was $1,899.99 for 14.6-inch Wi-Fi 1TB model with Galaxy AI",
          applicableOn: "Galaxy Tab S11 Ultra"
        },
        {
          title: "Samsung Promo Code – Galaxy Accessories & Cases From $99.99",
          discount: "From $99.99",
          eligibility: "USA Users",
          conditions: "Includes Galaxy Z Fold8 Ultra Click Magnet Case & latest accessories",
          applicableOn: "Galaxy Accessories"
        },
        {
          title: "Samsung Promo Code Galaxy Watch Ultra2 – $699.99",
          discount: "$699.99",
          eligibility: "All Users",
          conditions: "47mm LTE + Wi-Fi model in Titanium Gray, Marine or Black",
          applicableOn: "Galaxy Watch Ultra2"
        },
        {
          title: "Samsung Care+ with Theft and Loss – Save $100",
          discount: "Save $100 / From $8.00/mo",
          eligibility: "Eligible Plans",
          conditions: "Includes $0 cracked screen/back glass repairs & same-day replacements",
          applicableOn: "Samsung Care+"
        },
        {
          title: "Samsung Galaxy Trade-In – Up to $800 Instant Credit",
          discount: "Up to $800 Credit",
          eligibility: "Trade-In Users",
          conditions: "Instant trade-in credit plus carrier deals up to $1,900",
          applicableOn: "Galaxy Smartphones"
        },
        {
          title: "Samsung Refrigerators – Up to 40% OFF",
          discount: "Up to 40% OFF",
          eligibility: "USA Users",
          conditions: "Valid on Bespoke, 4-Door Flex, French Door & Top Freezer models",
          applicableOn: "Refrigerators"
        },
        {
          title: "Samsung Smart Watch Collection – 20% OFF",
          discount: "20% OFF",
          eligibility: "USA Users",
          conditions: "Valid on selected smartwatches with fitness & health tracking",
          applicableOn: "Smartwatches"
        },
        {
          title: "Samsung Galaxy Reservation – Up to $30 Samsung Credit",
          discount: "Up to $30 Credit",
          eligibility: "Early Reserve Users",
          conditions: "Requires $50 commitment for early access & launch benefits",
          applicableOn: "Upcoming Galaxy Device"
        },
        {
          title: "Samsung Health Band Collection – Up to 30% OFF",
          discount: "Up to 30% OFF",
          eligibility: "All Users",
          conditions: "Valid on selected health bands & wearable devices",
          applicableOn: "Health Bands"
        },
        {
          title: "Samsung Employee Offer – Up to 30% OFF",
          discount: "Up to 30% OFF",
          eligibility: "Samsung Employees",
          conditions: "Applies to phones, tablets & monitors. Free shipping included",
          applicableOn: "Sitewide / Selected Items"
        },
        {
          title: "Samsung 77-Inch OLED S-Series TVs – Up to $1,900 OFF",
          discount: "Up to $1,900 OFF",
          eligibility: "USA Users",
          conditions: "Valid on S95F, S90F, S85F & S90D premium models",
          applicableOn: "77-Inch OLED S-Series"
        }
      ].map((item, index) => (
        <tr
          key={index}
          className="border-b border-gray-200 transition-colors hover:bg-gray-50/50 last:border-b-0"
        >
          <td className="max-w-[220px] p-5 align-middle font-black text-black">
            {item.title}
          </td>
          <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
            {item.discount}
          </td>
          <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
            {item.eligibility}
          </td>
          <td className="max-w-[220px] p-5 align-middle text-gray-500 font-medium">
            {item.conditions}
          </td>
          <td className="max-w-[180px] p-5 align-middle text-gray-500">
            {item.applicableOn}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Whether you’re planning to upgrade your smartphone, bring home a new television, or finally replace that aging refrigerator, Samsung has a product for almost every corner of your home and lifestyle. And when you’re spending on premium technology, finding an extra way to save can make the purchase feel even better.
          </p>
          <p>
            That’s where a Samsung Promo Code can come in handy.
          </p>
          <p>
            At CouponsClouds, we make it easier for Indian shoppers to discover Samsung coupons, promotional offers, discounts, and deals before they complete their purchases. Instead of browsing through countless offers on your own, you can check the latest savings opportunities in one place and see whether a Samsung promo is available for the product you want.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Look for a Samsung Promo Code?</h3>
    <p>A good deal doesn't always come with a giant discount banner.</p>
    <p>Sometimes, the opportunity to save can be hidden behind a promotional code, coupon, limited-time offer, or special campaign. That’s why checking for a Samsung Promo Code before placing an order is a smart step for deal-conscious shoppers.</p>
    <p>Depending on the promotion, Samsung may offer savings across selected products or categories. Promotional campaigns can also change throughout the year, especially around major shopping periods, festive occasions, product launches, and seasonal sales.</p>
    <p>Using CouponsClouds as part of your shopping routine gives you another place to check before checkout.</p>
    <p>You may find a Samsung coupon, promotional offer, or other deal that could make your purchase more attractive.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">What Can You Shop for at Samsung?</h3>
    <p>One of the biggest advantages of shopping with Samsung is the variety. You aren't limited to one type of product or one category.</p>
    <p><strong>Samsung Smartphones:</strong> Galaxy smartphones are among Samsung's most recognizable products. From flagship devices packed with advanced features to more affordable options designed for everyday use, the Galaxy lineup covers different needs and preferences.</p>
    <p>If you're considering a new phone, compare the models carefully rather than choosing the first one you see. Look at the camera setup, processor, display, storage, battery, software features, and other specifications that matter to you.</p>
    <p>Before checking out, it can also be worth searching for a Samsung Promo Code that applies to your purchase.</p>
    <p><strong>Samsung Tablets:</strong> Need something larger than a smartphone but more portable than a laptop?</p>
    <p>Samsung Galaxy tablets offer an option for entertainment, browsing, studying, productivity, and more. Depending on the model, you can find different screen sizes, performance levels, storage options, and accessories.</p>
    <p>If a tablet has been sitting on your wishlist, keep an eye on Samsung offers and promotions before making your purchase.</p>
    <p><strong>Samsung TVs:</strong> Samsung has a substantial television lineup, ranging from everyday smart TVs to premium models designed for shoppers who want an enhanced viewing experience.</p>
    <p>You can explore different screen sizes and display technologies depending on your entertainment setup and budget.</p>
    <p>A television can be a significant purchase, so checking available Samsung deals and promotions before ordering can be worthwhile.</p>
    <p><strong>Samsung Home Appliances:</strong> Samsung isn't just about screens and smartphones.</p>
    <p>Its home appliance range includes refrigerators, washing machines, air conditioners, microwaves, vacuum cleaners, and other products designed to make everyday household tasks easier.</p>
    <p>If you're renovating your home or replacing an old appliance, compare models carefully and look for applicable promotions before buying.</p>
    <p><strong>Samsung Wearables:</strong> Smartwatches and wearable devices have become increasingly popular among people who want convenient access to notifications, fitness features, connectivity, and other smart functions.</p>
    <p>Samsung's wearable ecosystem works particularly well for shoppers already using Galaxy devices, making it easier to build a connected collection of products.</p>
    <p><strong>Samsung Accessories:</strong> Sometimes, you don't need a completely new device. You simply need the right accessory.</p>
    <p>Samsung offers products such as chargers, cases, cables, earbuds, storage solutions, and other accessories that complement its wider ecosystem.</p>
    <p>These smaller purchases can add up, so checking for Samsung coupons before ordering can still be worthwhile.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Find a Samsung Promo Code on CouponsClouds</h3>
    <p>Finding a promotion doesn't have to become another task on your shopping list.</p>
    <p>When you're planning to shop at Samsung, visit CouponsClouds and look through the available Samsung offers. If a Samsung Promo Code is listed, check its terms and conditions to understand where and when it can be used.</p>
    <p>Once you've found an offer that suits your purchase, follow the instructions provided and apply the code during checkout if required.</p>
    <p>Always check the offer details before using a code. Some promotions may apply only to selected products, categories, customers, or campaigns.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Don't Stop at the First Samsung Deal You See</h3>
    <p>Here's a shopping habit worth developing: don't assume the first discount you find is automatically the best deal.</p>
    <p>If you're buying an expensive product such as a smartphone, TV, refrigerator, or laptop, take a few minutes to compare your options.</p>
    <p>Look at the product's specifications.</p>
    <p>Check customer reviews.</p>
    <p>Compare similar Samsung models.</p>
    <p>Look for ongoing promotions.</p>
    <p>Then check whether a Samsung coupon code or promo is available.</p>
    <p>This approach can help you make a more informed purchase instead of getting distracted by a flashy sale banner.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">When Should You Look for Samsung Offers?</h3>
    <p>There isn't just one time of year to search for Samsung deals.</p>
    <p>Promotions can appear throughout the year, but certain shopping periods can be especially interesting for bargain hunters.</p>
    <p>Keep an eye on major festive shopping seasons, holiday promotions, seasonal campaigns, brand events, new product launches, and other limited-time sales.</p>
    <p>If you're not in a hurry, you can also track the product you're interested in and wait for an offer that fits your budget.</p>
    <p>That doesn't mean you should delay every purchase indefinitely. It simply means that a little timing and research can sometimes work in your favor.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Make Your Samsung Shopping Smarter</h3>
    <p>Saving money isn't only about finding a coupon.</p>
    <p>It's also about knowing what you're buying.</p>
    <p>Before purchasing a Samsung product, ask yourself what you actually need from it. If you're shopping for a smartphone, do you need a flagship camera system, or would a mid-range Galaxy device meet your needs? If you're buying a television, what screen size works for your room? If you're replacing a refrigerator, which capacity and features make sense for your household?</p>
    <p>Once you know your requirements, shopping becomes much easier.</p>
    <p>You can narrow down the products that fit your needs and then focus on finding the best available Samsung offer.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Check CouponsClouds Before You Checkout</h3>
    <p>You've researched the product.</p>
    <p>You've compared the options.</p>
    <p>You've finally decided what you're buying.</p>
    <p>There's just one more step.</p>
    <p>Check for a Samsung Promo Code.</p>
    <p>It takes only a moment, but it can help you avoid overlooking a promotion that could make your purchase more rewarding.</p>
    <p>CouponsClouds brings together coupon codes, promotional offers, deals, and discounts to help Indian shoppers discover more ways to save while shopping online.</p>
    <p>So, before you click that final checkout button, make CouponsClouds part of your routine.</p>
    <p>Because the best shopping strategy isn't always about finding the cheapest product.</p>
    <p>It's about finding the right product at the right deal.</p>
  </div>
</div>

          {/* Box Section: Tips */}
          <div className="space-y-6 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Tips for Getting More Value From Samsung Coupons
            </h3>
            <p className="text-gray-600 font-medium">
              A coupon works best when it fits a purchase you were already planning to make.
            </p>
            <div className="space-y-4 text-gray-700">
              <p>• Start by making a shortlist of the products you need, then compare models and check their features.</p>
              <p>• Once you've narrowed down your choice, look for an applicable Samsung discount or promotional offer.</p>
              <p>• Read the conditions attached to the promotion: check minimum purchase requirements, eligible products, validity periods, or other restrictions.</p>
              <p className="font-black text-black italic">
                Most importantly, don't buy something simply because you found a coupon for it. A discount on something you don't need isn't really a saving.
              </p>
            </div>
          </div>

          {/* Section: Why Shop */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Why Shop Samsung Through CouponsClouds?
            </h3>
            <p>
              Online shopping can involve a lot of tabs, searches, comparisons, and offer hunting. CouponsClouds helps simplify one part of that process by giving shoppers a place to look for available Samsung coupons and promotional opportunities.
            </p>
            <p>
              Whether you're searching for a Samsung Promo Code, Samsung coupon, Samsung discount, or current Samsung deal, you can check CouponsClouds before completing your purchase.
            </p>
            <p>
              The idea is simple: shop for what you need, then look for a better way to pay for it.
            </p>
          </div>

          {/* Section: Save More */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Ready to Shop Samsung for Less?
            </h3>
            <p>
              A new Galaxy smartphone, a bigger TV, a smarter home appliance, or a simple accessory - whatever is sitting on your Samsung wishlist, there's no reason to stop at the product page.
            </p>
            <p>
              Before you buy, take one extra step: Check CouponsClouds for the latest Samsung Promo Code, coupons, deals, and offers. Your next Samsung purchase could be closer to a great deal than you think.
            </p>
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
            Frequently Asked Questions About Samsung Promo Codes
          </h3>
          {[
            {
              q: "Where can I find a Samsung Promo Code?",
              a: "You can check CouponsClouds for available Samsung promo codes, coupons, offers, and deals before placing your order. Always review the conditions of the promotion to make sure it applies to your purchase."
            },
            {
              q: "Does Samsung offer coupons in India?",
              a: "Samsung may run different promotional campaigns and offers for Indian shoppers throughout the year. The availability of specific coupons and promotions can vary, so check the current offers before purchasing."
            },
            {
              q: "What products can I buy from Samsung?",
              a: "Samsung offers a wide selection of products, including smartphones, tablets, televisions, monitors, home appliances, wearables, audio products, accessories, and other consumer electronics."
            },
            {
              q: "How do I use a Samsung coupon code?",
              a: "If a valid coupon or promotional code is available, follow the instructions associated with the offer and enter the code at the applicable stage of checkout. Make sure you review the terms before applying it."
            },
            {
              q: "Can I use a Samsung Promo Code on every product?",
              a: "Not necessarily. Promotional codes can have specific conditions and may be limited to certain products, categories, campaigns, or customers. Always check the offer's terms before using it."
            },
            {
              q: "How can I save money when shopping at Samsung?",
              a: "Compare products, watch for seasonal and promotional sales, check available Samsung offers, and look for a valid Samsung Promo Code before checkout. You can also use CouponsClouds to discover available coupon and promotional opportunities."
            }
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
            Popular Samsung Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Samsung Promo Code",
              "Galaxy S Series",
              "App Discounts",
              "TV Coupons",
              "Student Discount",
              "Home Appliances",
              "Exchange Offer",
              "Bank Cashback"
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
            Today's Top Samsung Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "GALAXY PHONES", sub: "Up to ₹10,000 Off + Bank Cashbacks" },
              { heading: "SAMSUNG APP OFFER", sub: "Flat ₹4,500 Off on App Orders" },
              { heading: "SMART TVS & AUDIO", sub: "Up to 30% Off on Crystal 4K TVs" },
              { heading: "HOME APPLIANCES", sub: "Up to 50% Off on Refrigerators & ACs" }
            ].map((deal, i) => (
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
                  href="https://www.samsung.com/in/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  aria-label={`Shop Samsung: ${deal.heading}`} 
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
