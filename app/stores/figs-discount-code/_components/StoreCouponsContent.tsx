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
  Stethoscope,
  Shirt,
  Gift,
  ShoppingBag,
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
  { id: "d2", label: "DEAL", heading: "Scrub Set Discount", sub: "Featured Picks" },
  { id: "d3", label: "SALE", heading: "Percentage Off Sitewide", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Free Shipping Offer", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Lab Coat Deal", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Zara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp", dealText: "Up To 50% OFF", href: "/stores/zara-discount-code" },
  { name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", dealText: "Up To 77% OFF", href: "/stores/hm-promo-code" },
  { name: "Shein", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp", dealText: "Up To 90% OFF", href: "/stores/shein-coupon-code" },
  { name: "Nike", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp", dealText: "Up To 60% OFF", href: "/stores/nike-discount-code" },
  { name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", dealText: "Up To 50% OFF", href: "/stores/old-navy-promo-code" },
  { name: "Fashion Nova", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/fashion-nova_cm1al3.webp", dealText: "Up To 50% OFF", href: "/stores/fashion-nova-discount-code" },
];

const STORE_URL = "https://www.wearfigs.com";

export default function FigsCouponsContent() {
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
              <span className="text-black font-extrabold">FIGS</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789535819/figs_discount_code_p5ah56.webp" alt="FIGS" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Figs Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(7.6k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified FIGS discount codes and promo codes to save up to 40% on selected scrubs and apparel, enjoy 20% OFF with the student discount, and get 15% OFF your first eligible order. Shop premium workwear for healthcare professionals in Sept 2026.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "18", label: "Offers" },
                    { icon: Percent, val: "150+", label: "Deals" },
                    { icon: Users, val: "800K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789535819/figs_discount_code_p5ah56.webp" alt="FIGS Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">FIGS Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "DEAL", value: "$42", title: "FIGS Discount Code – Catarina Scrub Top | $42", desc: "Shop the Catarina Scrub Top for $42 and add a polished essential to your professional wardrobe.", bullets: ["Designed for comfort and everyday wear, this scrub top is a practical pick from the FIGS scrubs women collection.", "Browse the FIGS store and use an eligible FIGS scrubs discount code to save more on qualifying orders."] },
                  { label: "DEAL", value: "$36.90", title: "FIGS Discount Code – Tansen Jogger Scrub Pant | $36.90", desc: "Get the Tansen Jogger Scrub Pant for $36.90, reduced from $52, with this final-sale offer.", bullets: ["The comfortable jogger silhouette makes it a versatile choice for FIGS nursing scrubs and busy workdays.", "Shop FIGS on sale and look for a FIGS scrubs coupon or discount code before checkout."] },
                  { label: "SALE", value: "20% OFF", title: "FIGS Discount Code – Refer a Friend & Get 20% OFF", desc: "Refer a friend and they can receive 20% OFF their first $100+ order.", bullets: ["You can also earn 20% OFF when your friend completes a qualifying purchase.", "Share the offer with fellow FIGS scrubs women or FIGS men shoppers and enjoy FIGS discount savings together."] },
                  { label: "STUDENT", value: "20% OFF", title: "FIGS – Student Discount | 20% OFF", desc: "Students can enjoy 20% OFF eligible FIGS purchases with this special student offer.", bullets: ["Refresh your professional wardrobe with FIGS scrubs for women, men and other workwear essentials.", "Make the most of the FIGS student discount while shopping qualifying products at the FIGS store."] },
                  { label: "FROM", value: "$31.90", title: "FIGS – Cairo Straight-Leg Scrub Pant | From $31.90", desc: "Shop the Cairo Straight-Leg Scrub Pant from $31.90, reduced from the original $52 price.", bullets: ["Choose this classic silhouette for a comfortable and professional addition to your FIGS nursing scrubs collection.", "Explore FIGS scrubs on sale and check for a FIGS discount code to unlock extra eligible savings."] },
                  { label: "SALE", value: "15% OFF", title: "FIGS – Storewide Offer | 15% OFF", desc: "Save 15% on eligible FIGS products with this storewide promotional offer.", bullets: ["Shop FIGS apparel, scrubs and everyday workwear for a refreshed professional wardrobe.", "Visit WearFIGS and check for a FIGS coupon before placing your qualifying order."] },
                  { label: "NEW", value: "15% OFF", title: "FIGS – New Customer Offer | 15% OFF First Order", desc: "New customers can enjoy 15% OFF their first eligible FIGS order.", bullets: ["Discover FIGS scrubs women, FIGS scrubs men and versatile apparel designed for demanding workdays.", "Apply an eligible FIGS discount code at checkout and make your first purchase more rewarding."] },
                  { label: "SALE", value: "UP TO 40%", title: "FIGS – Wardrobe Refresh | Up To 40% OFF", desc: "Refresh your professional wardrobe with savings of up to 40% on selected FIGS styles.", bullets: ["Explore discounted scrubs and FIGS apparel designed with comfort, functionality and everyday movement in mind.", "Browse the FIGS sale collection for limited-time savings across eligible styles."] },
                  { label: "SALE", value: "20% OFF", title: "FIGS – Nurses Week Offer | 20% OFF", desc: "Celebrate Nurses Week with 20% OFF eligible products across the FIGS store.", bullets: ["Shop FIGS nursing scrubs and professional essentials created for healthcare workers.", "Take advantage of this special FIGS scrubs discount while the promotional offer is available."] },
                  { label: "DEAL", value: "20% OFF", title: "FIGS – Referral Offer | 20% OFF", desc: "Earn 20% OFF by referring friends to FIGS through the referral promotion.", bullets: ["Your friend can also receive 20% OFF their qualifying first order of $100 or more.", "Invite fellow FIGS scrubs women or FIGS scrubs men shoppers and enjoy savings together."] },
                  { label: "MILITARY", value: "15% OFF", title: "FIGS – Military Discount | 15% OFF", desc: "Military members can receive 15% OFF eligible FIGS purchases through this special discount.", bullets: ["Explore FIGS apparel, scrubs and workwear suitable for comfortable everyday use.", "Check the FIGS store for qualifying products and available FIGS discount savings."] },
                  { label: "FROM", value: "$78", title: "FIGS – Men’s Jackets & Vests | From $78", desc: "Shop selected men’s jackets and vests starting from $78.", bullets: ["Discover functional FIGS men outerwear designed to complement your professional and everyday wardrobe.", "Pair your outerwear with FIGS scrubs men styles for a complete work-ready look."] },
                  { label: "FROM", value: "$18", title: "FIGS – Scrub Caps | Starting At $18", desc: "Find selected FIGS scrub caps starting at just $18.", bullets: ["Add a practical accessory to your professional wardrobe while shopping FIGS nursing scrubs and workwear.", "Explore the FIGS store for available colours and styles at special prices."] },
                  { label: "FROM", value: "$38", title: "FIGS – Scrub Tops | Starting At $38", desc: "Shop selected FIGS scrub tops starting from $38.", bullets: ["Explore comfortable options from the FIGS scrubs for women and FIGS scrubs men collections.", "Build your workwear rotation with FIGS apparel available at accessible prices."] },
                  { label: "SALE", value: "10% OFF", title: "FIGS – Storewide Purchase | 10% OFF", desc: "Save 10% on eligible FIGS purchases with this promotional offer.", bullets: ["Shop scrubs, tops, pants and other FIGS apparel for your everyday professional wardrobe.", "Look for a FIGS scrubs coupon or eligible discount code to make your order even more valuable."] },
                  { label: "FROM", value: "$38", title: "FIGS – Women’s Spring Wear | From $38", desc: "Explore the women’s Spring Wear collection with selected styles starting from $38.", bullets: ["Discover fresh FIGS apparel that combines comfortable fits with polished everyday styling.", "Add pink FIGS or FIGS pink scrubs to your seasonal wardrobe for a brighter professional look."] },
                  { label: "DEAL", value: "FREE SHIP", title: "FIGS – Free Shipping & Free Returns On $50+", desc: "Enjoy FREE SHIPPING on qualifying orders of $50 or more.", bullets: ["Eligible purchases also come with FREE RETURNS for added convenience.", "Stock up on FIGS nursing scrubs, apparel and workwear while taking advantage of the shipping benefit."] },
                  { label: "FROM", value: "$36.90", title: "FIGS – Zamora Jogger Scrub Pant | From $36.90", desc: "Shop the Zamora Jogger Scrub Pant from $36.90, reduced from the original $52 price.", bullets: ["The jogger design offers a comfortable, practical option for busy professional days.", "Explore FIGS scrubs women styles and check for a FIGS scrubs coupon before completing your purchase."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop FIGS: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is FIGS Medical Uniform?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    FIGS is a healthcare apparel brand focused on creating medical clothing that combines functionality, comfort, durability, and style. Rather than treating scrubs as basic uniforms, FIGS approaches them as purpose-built workwear designed around the needs of healthcare professionals.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its collections cover women's and men's scrubs, with options ranging from traditional scrub tops and pants to jackets, underscrubs, outerwear, footwear, accessories, and ready-to-shop sets.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand's scrub collections are available in different fits, colors, and silhouettes. FIGS also maintains core colors for healthcare facilities that require specific uniform shades while introducing limited-edition colors and styles throughout the year.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Another important part of the FIGS experience is its focus on technical fabric. The brand's FIONx™ fabric technology is designed to provide features including moisture-wicking performance, wrinkle resistance, odor resistance, softness, durability, and four-way stretch.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    In short, FIGS is built around a simple idea: healthcare professionals deserve workwear that can keep up with them.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Stethoscope, name: "Scrub Sets", count: "100+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Shirt, name: "Lab Coats", count: "30+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Gift, name: "New Customer Deals", count: "20+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: ShoppingBag, name: "Accessories", count: "40+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Search, name: "New Arrivals", count: "25+", color: "text-orange-500", href: "/categories/fashion" },
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
    FIGS Deals and Seasonal Savings
  </h3>
  <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
    <p>
      FIGS promotions can change throughout the year, so there isn't one permanent offer that shoppers should rely on.
    </p>
    <p>
      The brand regularly introduces new arrivals and limited-edition styles while keeping a core collection available throughout the year.
    </p>
    <p>
      Seasonal shopping can also be a useful time to look for savings. Back-to-school and back-to-clinical-rotation periods may be relevant for students, while the end of a season can be a good opportunity to explore changing colors and collections.
    </p>
    <p>
      Major US shopping periods such as Labor Day, Thanksgiving, Black Friday, Cyber Monday, and the holiday season may also bring promotional activity across the retail sector.
    </p>
    <p>
      The exact FIGS promotion will vary, so checking CouponsBit before you purchase is a better strategy than waiting for one particular sale event.
    </p>
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
      <div className="prose max-w-none text-left">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          FIGS Medical Uniform Discount Code, Coupon & Deals
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 font-bold text-[14px]">
      {[
        ["Catarina Scrub Top", "$42", "All Users", "Polished essential designed for everyday comfort", "Women's Scrub Tops"],
        ["Tansen Jogger Scrub Pant", "$36.90", "All Users", "Was $52; final-sale offer on comfortable jogger fit", "Nursing Scrubs"],
        ["Refer a Friend Offer", "20% OFF", "Referrers & Friends", "Valid on friend's first $100+ order; both get 20% OFF", "Sitewide / First Orders"],
        ["Student Discount", "20% OFF", "Students", "Exclusive savings on qualifying student purchases", "Women's & Men's Scrubs"],
        ["Cairo Straight-Leg Scrub Pant", "From $31.90", "All Users", "Was $52; classic professional straight-leg silhouette", "Nursing Scrubs / Pants"],
        ["Storewide Offer", "15% OFF", "All Users", "Promotional discount across eligible workwear styles", "Sitewide / Apparel"],
        ["New Customer Offer", "15% OFF First Order", "New Customers", "Valid on initial purchase of eligible scrubs & apparel", "First Purchases"],
        ["Wardrobe Refresh Sale", "Up To 40% OFF", "All Users", "Limited-time savings on functional healthcare apparel", "Select Sale Styles"],
        ["Nurses Week Special", "20% OFF", "All Users / Healthcare", "Special event discount honoring healthcare workers", "Nursing Scrubs & Essentials"],
        ["Referral Program", "20% OFF", "Referrers & Friends", "Earn 20% OFF when friend makes qualifying $100+ purchase", "Sitewide Orders"],
        ["Military Discount", "15% OFF", "Military Personnel", "Special discount on eligible apparel and workwear", "Eligible Products"],
        ["Men's Jackets & Vests", "From $78", "All Users", "Functional outerwear designed to layer with scrubs", "Men's Outerwear"],
        ["Scrub Caps", "From $18", "All Users", "Practical healthcare accessories in various colors", "Scrub Accessories"],
        ["Scrub Tops", "From $38", "All Users", "Accessible base pricing across men's and women's tops", "Tops / Women & Men"],
        ["Storewide Purchase Deal", "10% OFF", "All Users", "Promotional discount on eligible everyday workwear", "Sitewide Apparel"],
        ["Women's Spring Wear", "From $38", "All Users", "Seasonal collection featuring fresh styles & colorways", "Women's Apparel"],
        ["Free Shipping & Returns", "FREE Shipping", "Orders $50+", "Includes free returns on all eligible purchases", "Sitewide Orders"],
        ["Zamora Jogger Scrub Pant", "From $36.90", "All Users", "Was $52; popular jogger design for busy workdays", "Women's Scrub Pants"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 17 && "border-b-0")}>
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
            When your workday can stretch for hours, your uniform needs to do more than simply look professional. It needs to move with you, feel comfortable through long shifts, hold up to repeated wear, and give you enough room for the essentials you need on the job. That is the space FIGS has carved out for itself.
          </p>
          <p>
            Known for combining technical performance with modern design, FIGS creates medical uniforms and healthcare apparel for professionals who spend their days moving, treating, assisting, and caring for others. Its range includes scrub tops, scrub pants, jackets, underscrubs, footwear, accessories, and complete scrub sets for women and men.
          </p>
          <p>
            If you're preparing for a new clinical rotation, replacing worn-out uniforms, building a complete work wardrobe, or simply looking for better scrubs, checking for a FIGS discount code before placing your order can be a smart way to save.
          </p>
          <p>
            CouponsBit makes it easier to look for current FIGS coupon codes, promotional offers, deals, and other savings opportunities before you head to checkout.
          </p>

          <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Find a FIGS Discount Code
        </h3>
        <p>
          Before buying a new set of scrubs, check CouponsBit for a current FIGS discount code.
        </p>
        <p>
          A discount code can be particularly useful when you're purchasing multiple pieces at once. Instead of buying a scrub top today and pants next month, many healthcare professionals prefer to build several complete uniforms together. That's when comparing available promotions becomes even more worthwhile.
        </p>
        <p>
          Not every code will apply to every product, however. Some promotions may have specific eligibility requirements, exclusions, expiration dates, or other terms. Always check the conditions of the individual offer before relying on it.
        </p>
        <p>
          If you're already shopping a FIGS promotion, compare the sale with any available discount code rather than automatically assuming one option will provide the best value.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          FIGS Scrub Tops
        </h3>
        <p>
          A good scrub top is the starting point for almost any medical uniform.
        </p>
        <p>
          FIGS offers a wide selection of women's and men's scrub tops in different cuts, necklines, fits, colors, and silhouettes. Current collections include styles such as the Catarina, Casma, Leon, Chisec, Rafaela, and other designs.
        </p>
        <p>
          Whether you prefer a classic V-neck, a more relaxed fit, or a contemporary silhouette, you can build your uniform around the style that feels most practical for your workday.
        </p>
        <p>
          FIGS also offers scrub tops in core uniform colors such as black, navy, royal blue, charcoal, moss, and burgundy, along with additional seasonal and limited-edition shades.
        </p>
        <p>
          If your workplace has a strict color requirement, check the available color options before purchasing.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          FIGS Scrub Pants
        </h3>
        <p>
          Scrub pants can make or break a uniform.
        </p>
        <p>
          Too restrictive and you're thinking about them all day. Too loose and you're constantly adjusting them. FIGS offers different fits and silhouettes to accommodate different preferences, including straight-leg, jogger, wide-leg, high-rise, slim, and other styles.
        </p>
        <p>
          Women's collections currently include options such as high-rise wide-leg, straight-leg, jogger, flare, and maternity scrub pants. Men's collections include straight-leg and jogger-style options among other fits.
        </p>
        <p>
          That variety makes it easier to create a uniform around your preferred fit rather than settling for a one-style-fits-all approach.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          FIGS Scrub Sets
        </h3>
        <p>
          If choosing a top and bottom separately sounds like one more decision you don't need during a busy week, FIGS also offers ready-made scrub sets.
        </p>
        <p>
          The brand promotes its bestselling sets as an easy way to pair compatible scrub tops and pants, allowing shoppers to create a complete uniform without spending time matching individual pieces.
        </p>
        <p>
          Sets can also be useful for students, new healthcare professionals, or anyone building a work wardrobe from scratch.
        </p>
        <p>
          Before ordering several sets, check whether a FIGS discount code or current promotion applies to the products you're considering.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          FIGS Scrubs for Women
        </h3>
        <p>
          FIGS offers an extensive women's medical-uniform collection with different fits, styles, colors, and inseams.
        </p>
        <p>
          The women's range includes scrub tops, scrub pants, jackets, jumpsuits, sets, maternity options, underscrubs, and other medical apparel.
        </p>
        <p>
          The maternity collection is particularly useful for healthcare professionals who want workwear designed around a changing fit. Current women's collections include maternity scrub tops, jogger pants, leggings, and straight-leg pants.
        </p>
        <p>
          With options ranging from traditional uniform silhouettes to more contemporary cuts, shoppers can build a medical wardrobe that feels professional without looking overly generic.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          FIGS Scrubs for Men
        </h3>
        <p>
          Men's FIGS collections include scrub tops, scrub pants, jackets, sets, underscrubs, and additional layers designed for healthcare environments.
        </p>
        <p>
          Current men's scrub collections include multiple fits and colors, with options such as the Leon scrub top, Cairo straight-leg scrub pant, Tansen casual scrub pant, and other styles.
        </p>
        <p>
          FIGS describes its men's scrubs as combining function, comfort, durability, and style, with FIONx™ fabric technology designed to provide moisture-wicking, wrinkle-resistant, odor-resistant, and four-way-stretch performance.
        </p>
        <p>
          That makes the collection suitable for professionals who want practical medical uniforms without giving up a modern fit.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          FIGS Scrubs for Nurses and Healthcare Professionals
        </h3>
        <p>
          Nurses spend some of the longest and most physically demanding days in healthcare, so comfortable medical uniforms matter.
        </p>
        <p>
          FIGS offers dedicated nurse scrub collections featuring tops, pants, sets, and additional workwear. The brand highlights its FIONx™ fabric technology and focuses on durability, functionality, comfort, and movement.
        </p>
        <p>
          The collection also includes a variety of colors and fits, which can be helpful for healthcare professionals whose workplaces have particular uniform requirements.
        </p>
        <p>
          Whether you're working in a hospital, clinic, private practice, urgent care setting, or another healthcare environment, consider your facility's dress code and color requirements before ordering.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          FIGS Medical Student Scrubs
        </h3>
        <p>
          Starting clinical rotations can mean starting an entirely new wardrobe.
        </p>
        <p>
          FIGS offers a dedicated medical student collection with scrub tops, scrub pants, underscrubs, jackets, caps, and other essentials. The brand also currently promotes a student offer on its student collection, although eligibility and promotional terms can change.
        </p>
        <p>
          For students building their first serious collection of clinical uniforms, it can make sense to choose versatile colors and interchangeable tops and bottoms.
        </p>
        <p>
          And because students often need multiple uniforms, checking for a FIGS coupon code or student-specific offer before purchasing can be especially worthwhile.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          FIGS Underscrubs and Layers
        </h3>
        <p>
          Scrubs are not always enough on their own.
        </p>
        <p>
          Hospitals and clinics can be surprisingly cold, while early-morning commutes and long shifts may call for an extra layer. FIGS offers underscrubs, jackets, fleece pieces, vests, and other layering options to complement its core uniforms.
        </p>
        <p>
          Underscrubs can also provide an additional layer underneath a scrub top without creating unnecessary bulk.
        </p>
        <p>
          For colder clinical environments, outerwear and warm layers can help you stay comfortable without compromising the overall uniform look.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          FIGS Footwear and Accessories
        </h3>
        <p>
          A medical uniform doesn't stop at the scrubs.
        </p>
        <p>
          FIGS also has categories for footwear and accessories, allowing healthcare professionals to build more of their work wardrobe in one place. The brand's current category structure includes footwear and accessories alongside scrub tops, scrub pants, underscrubs, and outerwear.
        </p>
        <p>
          Accessories can also include practical additions such as scrub caps and badge-related items, depending on the current collection.
        </p>
        <p>
          When shopping for work accessories, think about what you actually use during a shift. A few well-chosen additions can be more useful than filling your cart simply because an offer is available.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Shop FIGS Core Colors
        </h3>
        <p>
          If your workplace requires specific uniform colors, FIGS makes it relatively easy to shop by its core palette.
        </p>
        <p>
          Current core colors include shades such as black, navy, royal blue, charcoal, moss, burgundy, mauve, dark harbour, ceil blue, and Caribbean blue, although the exact selection can vary by collection and market.
        </p>
        <p>
          Core colors are intended to remain available more consistently, while limited-edition colors provide an opportunity to try something different.
        </p>
        <p>
          Before buying, check your employer's uniform policy. A beautiful shade doesn't help much if your workplace requires navy.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Build a Complete Medical Uniform
        </h3>
        <p>
          One of the easiest ways to shop FIGS is to think in complete uniforms rather than individual pieces.
        </p>
        <p>
          Start with several scrub tops and rotate them with two or three pairs of pants. Add an underscrub for colder environments and a jacket or other outer layer if your workplace requires additional coverage.
        </p>
        <p>
          You can then add footwear and practical accessories to finish the setup.
        </p>
        <p>
          This approach also makes it easier to identify where a FIGS discount code could provide the most value. If you're buying several pieces in one order, compare all available promotions before checking out.
        </p>
      </div>
    </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Use a FIGS Discount Code</h3>
              <p>Once you've found a FIGS discount code that appears suitable for your purchase, head to the FIGS website and add your selected items to your cart.</p>
              <p>At checkout, look for the promotional or discount-code field and enter your code. Apply the code and review your updated order summary.</p>
              <p>Before completing the purchase, make sure the expected discount has been reflected.</p>
              <p>If the code doesn't work, check whether it has expired or whether your products meet the promotion's requirements. Some offers may apply only to certain products, customers, or collections.</p>
              <p>It is also worth checking whether your cart already contains promotional items. Sometimes a current sale can provide better value than a separate code.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Save More on FIGS Medical Uniforms</h3>
              <p>Buying medical uniforms is usually a practical expense rather than an impulse purchase, which makes planning your order worthwhile.</p>
              <p><strong>Check for a discount code first:</strong> Search CouponsBit before checkout to see what offers are currently available.</p>
              <p><strong>Compare the promotion with sale items:</strong> A coupon isn't automatically the best deal. Look at your final cart total.</p>
              <p><strong>Buy around your actual needs:</strong> If you know you're going to need several uniforms for a new semester or job, planning the purchase can help you take advantage of an applicable offer.</p>
              <p><strong>Mix and match:</strong> Choose tops and pants that work together across several outfits rather than buying a completely different set for every shift.</p>
              <p><strong>Check student offers:</strong> If you're eligible for FIGS' student program, look at the current terms before purchasing. The brand currently promotes student savings on its medical student collection.</p>
              <p><strong>Watch new and limited-edition collections:</strong> If color matters to you, keep an eye on new arrivals, but make sure the style meets your workplace's uniform requirements.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for FIGS?</h3>
              <p>Shopping for medical uniforms is already a task you probably don't want to overcomplicate.</p>
              <p>CouponsBit gives you a convenient place to check for a FIGS discount code, coupon code, promotional offer, or other savings opportunity before you place your order.</p>
              <p>Instead of searching through multiple websites and wondering whether an old promotion still applies, start by checking the current offers available on CouponsBit. Then compare the offer with FIGS' own promotions and the products in your cart.</p>
              <p>Whether you're a nursing student buying your first clinical uniforms, an experienced healthcare professional replacing your everyday scrubs, or someone putting together a complete medical wardrobe, that quick check can help you shop more strategically.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Get Ready for Your Next Shift</h3>
              <p>The right medical uniform shouldn't just meet a dress code. It should make a demanding workday a little easier.</p>
              <p>With its range of scrub tops, pants, sets, underscrubs, outerwear, footwear, and accessories, FIGS gives healthcare professionals plenty of ways to build a functional work wardrobe.</p>
              <p>Before placing your next order, check CouponsBit for a FIGS discount code and compare it with any current FIGS promotions. Read the terms, check what applies to your cart, and choose the offer that gives you the best value.</p>
              <p>Because when you're spending long hours caring for other people, your uniform should at least be working for you.</p>
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
            Frequently Asked Questions About FIGS Discount Codes
          </h3>
          {[
            { q: "Does FIGS offer discount codes?", a: "FIGS offers promotional opportunities and discounts from time to time. The availability and terms can change, so check CouponsBit for current offers before placing an order." },
            { q: "Where can I find a FIGS discount code?", a: "You can check CouponsBit for available FIGS discount codes, coupon offers, and promotions. Make sure you review the terms of an offer before using it." },
            { q: "Can I use a FIGS discount code on sale items?", a: "It depends on the individual promotion. Some codes may have exclusions or may not apply to products already included in another promotion." },
            { q: "Why isn't my FIGS discount code working?", a: "A code may fail because it has expired, doesn't apply to the products in your cart, has eligibility requirements, or cannot be combined with another promotion. Check the specific terms of the offer before trying again." },
            { q: "Does FIGS offer student discounts?", a: "FIGS currently promotes a student offer through its medical student collection. Eligibility and terms can change, so students should check the current requirements before purchasing." },
            { q: "What does FIGS sell?", a: "FIGS sells healthcare apparel including scrub tops, scrub pants, scrub sets, underscrubs, jackets, outerwear, footwear, accessories, and other medical workwear for healthcare professionals." },
            { q: "Does FIGS sell maternity scrubs?", a: "Yes. FIGS' women's collection currently includes maternity scrub tops, jogger pants, leggings, and straight-leg scrub pants." },
            { q: "Does FIGS offer men's medical uniforms?", a: "Yes. FIGS has a dedicated men's scrub collection featuring tops, pants, jackets, sets, and other medical apparel in multiple fits and colors." },
            { q: "What is FIONx™ fabric?", a: "FIONx™ is FIGS' proprietary fabric technology used in its scrubs. FIGS describes the fabric as soft, moisture-wicking, anti-wrinkle, odor-resistant, and equipped with four-way stretch." }
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
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
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
            Popular FIGS Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "FIGS Discount Code",
              "Scrub Sets",
              "Student Discount",
              "FIONx Fabric",
              "Jogger Scrubs",
              "Maternity Scrubs",
              "Men's Scrubs",
              "Free Shipping"
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
            Today's Top FIGS Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "$42", sub: "Catarina Scrub Top" },
              { heading: "$36.90", sub: "Tansen Jogger Scrub Pant" },
              { heading: "20% OFF", sub: "Refer a Friend & Get 20% OFF" },
              { heading: "15% OFF", sub: "New Customer Offer | 15% OFF First Order" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  F
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
                  aria-label={`Shop FIGS: ${deal.heading}`}
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
