"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent, Smile, Layers, Copy, Calendar, FileText, Receipt,
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
  Glasses,
  Sun,
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
  { id: "d1", label: "NEW", heading: "New Customer Glasses Discount", sub: "Latest Deals" },
  { id: "d2", label: "DEAL", heading: "Blue-Light Lens Deal", sub: "Featured Picks" },
  { id: "d3", label: "SALE", heading: "Percentage Off Sitewide", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Free Shipping Offer", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Progressive Lens Savings", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Rayneo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/rayneo-logo_jz1o4h.webp", dealText: "Up To 40% OFF", href: "/stores/rayneo-discount-code" },
  { name: "Fytoo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/fytoo-logo_hidcto.webp", dealText: "Frames From $1", href: "/stores/fytoo-discount-code" },
  { name: "Vooglam", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707356/vooglam-logo_qkfz8u.webp", dealText: "Eyeglasses From $65", href: "/stores/vooglam-discount-code" },
  { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707356/sungait-logo_wxq5jt.webp", dealText: "Up To 50% OFF", href: "/stores/sungait-discount-code" },
];

const STORE_URL = "https://www.zennioptical.com";

export default function ZenniCouponsContent() {
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
              <span className="text-black font-extrabold">Zenni</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788951742/zenni-logo_ktqkou.webp" alt="Zenni" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Zenni</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(12.4k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Zenni Optical promo codes to save up to 75% on Blokz lenses and up to 30% on selected glasses. Enjoy 15% OFF your first order over $65, free shipping on eligible orders, and affordable prescription eyewear starting under $20 in Sept 2026.
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
                    { icon: Tag, val: "15", label: "Offers" },
                    { icon: Percent, val: "350+", label: "Deals" },
                    { icon: Users, val: "2M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788951742/zenni-logo_ktqkou.webp" alt="Zenni Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Zenni Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "UP TO 30%", title: "Zenni Optical Promo Code – Save Up To 30% On Selected Glasses", desc: "Give your eyewear collection a fresh update with selected Zenni glasses available at up to 30% OFF.", bullets: ["Browse a mix of modern frames and everyday designs to find a pair that suits your personal style.", "Check for a Zenni optical promo code at checkout to make your eligible purchase even more rewarding."] },
                  { label: "SALE", value: "UP TO 75%", title: "Zenni Optical Promo Code – Blokz Lenses | Up To 75% OFF", desc: "Enjoy savings of up to 75% on selected Blokz lenses and discover affordable options for your eyewear needs.", bullets: ["Choose from popular styles such as Black Bowline, Black Square, Mist/Blue Square and other eligible designs.", "Look for a Zenni optical coupon code and unlock the available promotion on qualifying lens selections."] },
                  { label: "DEAL", value: "$10.99", title: "Zenni Optical Promo Code – Tortoiseshell Wild Sight | $10.99", desc: "Pick up the Tortoiseshell Wild Sight style for only $10.99, offering an impressive 45% reduction from its original price.", bullets: ["Its distinctive tortoiseshell appearance adds a stylish finish to your everyday eyewear collection.", "Use a Zenni glasses coupon or available Zenni discount promo code to explore extra savings on eligible purchases."] },
                  { label: "SALE", value: "25% OFF", title: "Zenni Optical Promo Code – Get 25% OFF Orders Of $89+", desc: "Spend $89 or more and receive 25% OFF your qualifying Zenni Optical order with this special promotion.", bullets: ["From prescription eyewear to fashionable frames, there are plenty of options to build a look that works for you.", "Search for a Zenni optical promotion code before checkout and take advantage of any additional eligible savings."] },
                  { label: "DEAL", value: "CODE: GET20", title: "Zenni Optical – Buy One, Get The Second 20% OFF", desc: "Pick your favourite Zenni eyewear and receive 20% OFF the second qualifying item with code GET20.", bullets: ["Mix and match different glasses or frames to create versatile options for your everyday wardrobe.", "Enter GET20 during checkout to activate the Buy One, Get One 20% OFF promotion on eligible purchases."] },
                  { label: "SALE", value: "UP TO 35%", title: "Zenni Optical – Bifocal Eyewear | Up To 35% OFF", desc: "Save up to 35% on selected bifocal glasses and find a practical combination of vision support and personal style.", bullets: ["Available frame choices include Black/Violet Ion, Matte Black/Orange Ion, Matte Black/Silver and more.", "Browse Zenni prescription glasses and check for a Zenni coupon promo code before placing your eligible order."] },
                  { label: "FROM", value: "$32.95", title: "Zenni Optical – Green Geometric Frames | Starting At $32.95", desc: "Add a bold touch to your eyewear collection with Green Geometric Glasses starting at $32.95.", bullets: ["The jewel-inspired colour and geometric shape make these frames an eye-catching choice for everyday styling.", "Explore Zenni optical frames and check for available Zenni discount coupons when shopping for your next pair."] },
                  { label: "FROM", value: "$42.95", title: "Zenni Optical – Kittles Exclusive Collection | From $42.95", desc: "Discover the Kittles x Zenni collection with selected everyday frames and standout designs starting from $42.95.", bullets: ["Inspired by George and Claire Kittle, the range includes both sunglasses and everyday eyewear with customizable lens options.", "Explore Zenni optical prescription styles and look for a Zenni glasses discount code when eligible offers are available."] },
                  { label: "UNDER", value: "$30", title: "Zenni Optical – Prescription Sunglasses | Under $30", desc: "Discover affordable prescription sunglasses designed to match your vision needs and personal style.", bullets: ["Shop Zenni prescription eyeglasses and sunglasses with options created for comfortable everyday wear.", "Use a Zenni online coupon or Zenni optical online coupon code to look for additional savings on eligible purchases."] },
                  { label: "FROM", value: "$42.95", title: "Zenni Optical – The Gold Standard Glasses | From $42.95", desc: "Add this stylish frame to your collection and explore more Zenni optical glasses for everyday and statement looks.", bullets: ["Check for a Zenni optical prescription discount or Zenni glasses coupon code before completing your purchase."] },
                  { label: "UNDER", value: "$20", title: "Zenni Optical – Complete Eyeglasses Under $20", desc: "Shop complete Zenni eyeglasses priced under $20 for an affordable eyewear option.", bullets: ["Single-vision lenses are included in the frame-and-lens combination price, while upgrades and coatings are priced separately.", "Look for discount coupons for Zenni Optical and enjoy extra savings on eligible complete eyewear purchases."] },
                  { label: "UNDER", value: "$30", title: "Zenni Optical – Eyeglasses Under $30", desc: "Discover stylish eyeglasses priced under $30 and enjoy affordable options for your everyday eyewear needs.", bullets: ["Browse Zenni optical frames in different designs, colours and styles to find a pair that fits your look.", "Use a Zenni glasses coupon code or Zenni online coupon to make your purchase even more affordable."] },
                  { label: "DEAL", value: "FREE SHIP", title: "Zenni Optical – Free Standard Shipping On Orders $65+", desc: "Get Free Standard Shipping when you place an eligible Zenni Optical order of $65 or more.", bullets: ["Shop Zenni optical prescription glasses, frames and other eyewear while enjoying convenient delivery savings.", "Look for a Zenni free shipping code or Zenni optical free shipping code to find additional shipping offers on eligible orders."] },
                  { label: "SALE", value: "17% OFF", title: "Zenni Optical – Crystal Gray Round Sunglasses | 17% OFF", desc: "Get Crystal Gray Round Sunglasses starting at $19.99, reduced from $23.95 — save 17%.", bullets: ["Add this classic round design to your eyewear collection and explore more stylish Zenni glasses.", "Check for a Zenni glasses coupon or Zenni discount promo code to discover additional savings on eligible sunglasses."] },
                  { label: "NEW", value: "15% OFF", title: "Zenni Optical – 15% OFF Your First Order", desc: "Join Zenni and get 15% OFF your first order of $65 or more.", bullets: ["Enjoy early access to deals, new styles and special offers while shopping Zenni optical prescription collections.", "Take advantage of this first-order promotion and check for a Zenni optical coupon code for additional eligible savings."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Zenni: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">About Zenni</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Zenni is an online eyewear retailer known for making prescription glasses, sunglasses, and other eyewear available through an online shopping experience.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand offers a broad range of frame styles, colors, shapes, and lens options, giving shoppers the flexibility to choose eyewear based on their prescription needs, personal style, and everyday lifestyle.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Zenni is particularly popular with customers who prefer shopping for glasses online rather than visiting a traditional optical store. Its website allows shoppers to browse different frames and customize their eyewear with various lens and coating options.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The selection includes styles for women, men, and children, along with eyewear designed for different activities and preferences.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    From classic rectangular frames and round glasses to cat-eye designs, aviators, oversized styles, sports eyewear, and sunglasses, shoppers can explore a variety of looks in one place.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Zenni also offers options for prescription lenses, making it possible to order eyewear online using your prescription information.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    With a combination of everyday practicality and fashion-focused designs, Zenni gives shoppers an accessible way to explore eyewear without limiting themselves to a small selection of frames.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Glasses, name: "Prescription Glasses", count: "350+", color: "text-blue-500", href: "/categories/eyewear" },
                        { icon: Sun, name: "Sunglasses", count: "150+", color: "text-orange-500", href: "/categories/eyewear" },
                        { icon: Sparkles, name: "Blue-Light Lenses", count: "90+", color: "text-purple-500", href: "/categories/eyewear" },
                        { icon: ShoppingBag, name: "Progressive Lenses", count: "60+", color: "text-teal-500", href: "/categories/eyewear" },
                        { icon: Search, name: "New Frame Styles", count: "40+", color: "text-pink-500", href: "/categories/eyewear" },
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
    How to Find Better Zenni Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Ordering",
        sub: "Before completing your purchase, check CouponsBit for the latest Zenni promo code, coupon codes, discount offers, vouchers, and eyewear promotions.",
      },
      {
        icon: Glasses,
        title: "Compare Frames",
        sub: "Don't choose a frame based solely on the first design you like. Compare different shapes, materials, colors, and sizes to find an option that suits your style and everyday needs.",
      },
      {
        icon: Smile,
        title: "Consider Your Lifestyle",
        sub: "Think about when and where you'll wear the glasses. Everyday work glasses may require different features from sunglasses designed for travel or outdoor activities.",
      },
      {
        icon: Layers,
        title: "Check Lens Options",
        sub: "The frame is only part of the purchase. Review the available lens options and coatings and select those that suit your prescription and intended use.",
      },
      {
        icon: Copy,
        title: "Look for Multi-Pair Savings",
        sub: "If you need more than one pair, compare the current promotions to see whether purchasing multiple eligible items provides better overall value.",
      },
      {
        icon: Calendar,
        title: "Shop Around Major Sale Periods",
        sub: "Black Friday, Cyber Monday, back-to-school season, summer, and other major shopping periods can be useful times to check for eyewear promotions.",
      },
      {
        icon: FileText,
        title: "Review Your Prescription Carefully",
        sub: "When ordering prescription eyewear online, enter your prescription information carefully and make sure it is current and suitable for your needs.",
      },
      {
        icon: Receipt,
        title: "Check the Final Checkout Total",
        sub: "Before completing your order, confirm that any eligible promotion has been applied and review the complete purchase details.",
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
          Zenni Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border border-gray-200 bg-white shadow-sm">
  
  <table className="w-full min-w-[850px] border-collapse text-left" aria-label="Zenni Optical Offers Summary">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Offer</th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Discount / Price</th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Eligibility</th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Key Conditions</th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[14px] font-bold text-gray-600">
      
    
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Zenni Optical Promo Code – Save Up To 30% On Selected Glasses
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Up to 30% OFF
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Applies to selected frames and modern designs; check code at checkout
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Selected Frames & Glasses
        </td>
      </tr>

      
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Zenni Optical Promo Code – Blokz Lenses | Up To 75% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Up to 75% OFF
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Valid on popular styles including Black Bowline, Black Square, Mist/Blue Square
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Selected Blokz Lenses
        </td>
      </tr>

      
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Zenni Optical Promo Code – Tortoiseshell Wild Sight | $10.99
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          $10.99 (45% OFF)
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Price reduced from original listing for the Tortoiseshell Wild Sight frame
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Tortoiseshell Wild Sight Glasses
        </td>
      </tr>

   
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50 last:border-b-0">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Zenni Optical Promo Code – Get 25% OFF Orders Of $89+
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          25% OFF
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          Orders $89+
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Applies to qualifying orders meeting the $89 minimum spend requirement
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Entire Order ($89+)
        </td>
      </tr>

    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            A new pair of glasses can change more than your look. It can make everyday life more comfortable, help you express your personal style, and give you a practical accessory you'll actually use every day. Zenni makes shopping for eyewear online convenient, with a wide selection of prescription glasses, sunglasses, and other eyewear options.
          </p>
          <p>
            If you're planning to update your eyewear, checking for a Zenni promo code before placing your order can be a smart way to look for savings. CouponsBit helps shoppers find Zenni coupon codes, discount offers, vouchers, eyewear deals, sale promotions, and other opportunities to potentially spend less on their next purchase.
          </p>
          <p>
            Whether you need prescription glasses for everyday wear, sunglasses for your next trip, blue-light glasses for screen-heavy days, or a stylish new frame, checking available promotions before checkout can help you make the most of your budget.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a Zenni Promo Code</h3>
    <p>A Zenni promo code can help you look for savings on an eligible eyewear purchase when a promotion is available.</p>
    <p>Before placing your order, check CouponsBit for current Zenni offers. You may find a promotional code that works with your purchase or discover another deal that better suits the items you're ordering.</p>
    <p>Promotions can come with specific conditions. Some may apply to selected products, lens options, order values, or customer groups, while others may be connected to a particular promotional period.</p>
    <p>Always check the offer details before applying a code. Look for expiration dates, product exclusions, minimum purchase requirements, and other restrictions.</p>
    <p>If one promotion doesn't apply to your order, compare it with other available Zenni offers before checking out.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Zenni Coupon Code and Discount Offers</h3>
    <p>A Zenni coupon code is one way to search for eyewear savings, but it isn't the only type of promotion worth considering.</p>
    <p>Depending on the current offers, shoppers may find discounts on frames, lenses, sunglasses, selected collections, or qualifying orders.</p>
    <p>The best deal depends on what you're buying.</p>
    <p>For example, a promotion on prescription eyewear could be more useful if you're replacing your everyday glasses, while a deal on sunglasses may make more sense if you're preparing for a vacation.</p>
    <p>Before purchasing, compare the available promotion with your selected products and check whether the offer applies to the complete order or only specific items.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Explore Zenni Eyewear</h3>
    <p>Zenni offers eyewear for different needs, age groups, styles, and everyday activities.</p>
    <p><strong>Prescription Glasses:</strong> Prescription glasses are one of Zenni's core categories.</p>
    <p>You can browse frames in different shapes and styles and select lens options based on your prescription and preferences.</p>
    <p>When ordering prescription eyewear online, make sure you enter your prescription details accurately and follow the retailer's instructions.</p>
    <p><strong>Sunglasses:</strong> Sunglasses can combine everyday eye protection with personal style.</p>
    <p>Zenni offers a variety of sunglasses styles, including options that can be fitted with prescription lenses depending on the product.</p>
    <p>They can be useful for driving, outdoor activities, vacations, beach trips, and everyday use.</p>
    <p><strong>Blue-Light Glasses:</strong> For people who spend significant amounts of time looking at digital screens, blue-light eyewear can be another option to explore.</p>
    <p>Zenni offers eyewear designed around different digital-use preferences, though shoppers should review the specific features of each lens before purchasing.</p>
    <p><strong>Kids' Glasses:</strong> Children's eyewear needs to be practical, comfortable, and durable.</p>
    <p>Zenni offers frames designed for younger wearers in different colors and styles.</p>
    <p>Parents can explore options based on their child's prescription and preferred frame style.</p>
    <p><strong>Sports and Active Eyewear:</strong> For people with active lifestyles, specialized eyewear can provide an alternative to traditional frames.</p>
    <p>Depending on the available collection, shoppers can explore eyewear designed for sports and outdoor activities.</p>
    <p><strong>Computer and Everyday Eyewear:</strong> If you spend long periods working at a computer or switching between different environments throughout the day, you may want eyewear designed around your specific routine.</p>
    <p>Zenni offers various lens options that can be explored based on your needs.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Choose the Right Zenni Frame</h3>
    <p>One of the advantages of shopping for glasses online is the sheer variety of styles available.</p>
    <p><strong>Round Frames:</strong> Round glasses can create a vintage-inspired or artistic look and work well for shoppers who want something different from traditional rectangular frames.</p>
    <p><strong>Rectangle Frames:</strong> Rectangular frames offer a classic look that can work well for everyday wear.</p>
    <p>They are available in different colors, materials, and proportions.</p>
    <p><strong>Cat-Eye Frames:</strong> Cat-eye glasses can add a distinctive, fashion-forward touch to an outfit.</p>
    <p>They are especially useful when you want your eyewear to become a noticeable part of your overall look.</p>
    <p><strong>Aviator Frames:</strong> Aviator-inspired frames provide a recognizable style that works particularly well for sunglasses and fashion-focused eyewear.</p>
    <p><strong>Oversized Frames:</strong> Oversized glasses can make a stronger style statement while providing a larger frame shape.</p>
    <p><strong>Browline Frames:</strong> Browline designs combine a classic silhouette with a distinctive upper-frame detail.</p>
    <p>They're a good option for shoppers looking for something between traditional and contemporary styles.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Zenni Eyewear for Different Lifestyles</h3>
    <p>The best pair of glasses isn't necessarily the most fashionable one. It should also suit how you spend your time.</p>
    <p><strong>For Students:</strong> Students often move between classrooms, libraries, laptops, phones, and outdoor activities.</p>
    <p>A comfortable everyday frame can make a practical addition to a student's routine.</p>
    <p><strong>For Remote Workers:</strong> People working from home may spend hours switching between video calls, laptops, phones, and other screens.</p>
    <p>Choosing an appropriate pair of everyday glasses can help create a consistent work setup.</p>
    <p><strong>For Drivers:</strong> Clear vision and a suitable prescription are important when driving.</p>
    <p>If you need prescription sunglasses, explore the available lens options and make sure they meet your needs before ordering.</p>
    <p><strong>For Travelers:</strong> A backup pair of prescription glasses can be useful when traveling.</p>
    <p>Sunglasses can also be an important part of a vacation packing list, particularly for destinations with lots of outdoor activities.</p>
    <p><strong>For Families:</strong> With eyewear available for adults and children, families can explore multiple options from the same retailer.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Zenni Sale and Seasonal Promotions</h3>
    <p>Eyewear is something people shop for throughout the year, but certain seasons and US shopping occasions can provide additional opportunities to look for promotions.</p>
    <p><strong>New Year:</strong> The beginning of the year can be a good time to refresh everyday essentials, including prescription glasses and sunglasses.</p>
    <p>If you've been using the same frames for years, January can be a natural time to explore a new style.</p>
    <p><strong>Valentine's Day:</strong> Glasses can also be a practical gift for someone who wears prescription eyewear.</p>
    <p>If you're shopping for a partner or loved one, explore frames that match their everyday style.</p>
    <p><strong>Spring:</strong> Spring often brings changes in fashion and more time spent outdoors.</p>
    <p>It can be a good season to explore new frames and sunglasses before summer arrives.</p>
    <p><strong>Spring Break:</strong> If you're heading somewhere sunny for spring break, sunglasses can be an important part of your travel plans.</p>
    <p>Check for a Zenni discount code before purchasing new eyewear for your trip.</p>
    <p><strong>Mother's Day:</strong> Eyewear can make a useful and personal gift, particularly if you know the recipient's preferred frame style.</p>
    <p><strong>Father's Day:</strong> For someone who wears glasses every day, a new pair of frames or sunglasses can be a practical Father's Day gift.</p>
    <p><strong>Graduation Season:</strong> Graduation marks a new chapter, whether someone is heading to college, starting a career, or moving somewhere new.</p>
    <p>A new pair of glasses can be a useful addition to a graduate's everyday essentials.</p>
    <p><strong>Summer:</strong> Summer is one of the biggest seasons for sunglasses.</p>
    <p>Travel, outdoor activities, road trips, and beach vacations can all create reasons to shop for new eyewear.</p>
    <p><strong>Back-to-School:</strong> Back-to-school season is another useful time to check eyewear promotions, particularly for families with children or students who need updated prescriptions.</p>
    <p><strong>Halloween:</strong> Halloween can inspire shoppers to experiment with different fashion styles, including statement frames and accessories.</p>
    <p><strong>Thanksgiving:</strong> Thanksgiving marks the beginning of the major holiday shopping period in the US.</p>
    <p>If you've been planning an eyewear purchase, check current Zenni promotions before ordering.</p>
    <p><strong>Black Friday:</strong> Black Friday is one of the biggest shopping events of the year and can be an important period for eyewear shoppers.</p>
    <p>Check CouponsBit for a Zenni coupon code, discount offer, or other promotion before making your purchase.</p>
    <p><strong>Cyber Monday:</strong> Cyber Monday is especially relevant for online shoppers.</p>
    <p>If you're already planning to purchase glasses or sunglasses online, compare available Zenni offers before completing your order.</p>
    <p><strong>Christmas and Holiday Shopping:</strong> Eyewear can make a practical holiday gift, particularly when you know the recipient's prescription and style preferences.</p>
    <p>If you're not sure about their prescription, consider whether a gift card or another accessory might be more appropriate.</p>
  </div>
</div>

          {/* Box Section: How to Use */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">
              How to Use a Zenni Promo Code
            </h3>
            <p className="text-gray-600 font-medium -mt-4 mb-4">
              If you find a Zenni promo code through CouponsBit, follow the instructions associated with that specific offer. A typical process may include:
            </p>
            <div className="space-y-6">
              {[
                "Find the Zenni offer you want to use.",
                "Visit Zenni and browse the available eyewear.",
                "Select your preferred frame.",
                "Choose the appropriate lens and customization options.",
                "Enter your prescription information when required.",
                "Add the product to your cart.",
                "Proceed to checkout.",
                "Enter the applicable promo code in the designated field.",
                "Apply the code and confirm that the promotion has been reflected.",
                "Review your order details before completing the purchase."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold mt-2 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium italic mt-4 pt-4 border-t border-gray-100">
              If the code doesn't work, check the expiration date and promotion requirements. Some offers may be restricted to selected frames, lens options, order values, or customer accounts.
            </p>
          </div>

          {/* Section: Why Use */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Why Use CouponsBit for Zenni Offers?
            </h3>
            <p>
              Eyewear is an everyday necessity for many people, but that doesn't mean you need to ignore potential savings when buying it.
            </p>
            <p>
              CouponsBit provides shoppers with a convenient place to check for a Zenni promo code before placing an order. You can also discover Zenni coupon codes, discount offers, vouchers, sale promotions, and other eyewear deals.
            </p>
            <p>
              Instead of assuming the first offer is the best one, compare the available promotions with the products you're actually planning to purchase.
            </p>
            <p>
              Whether you're replacing an old prescription pair, shopping for sunglasses, updating your child's frames, or looking for a new style, checking for an available offer before checkout can help you make your budget go further.
            </p>
          </div>

          {/* Section: Find a Zenni Deal for Your Next Pair */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Find a Zenni Deal for Your Next Pair
            </h3>
            <p>
              Whether you need prescription glasses for everyday life, sunglasses for your next vacation, a backup pair, or a fresh frame to match your style, Zenni gives you plenty of eyewear options to explore online.
            </p>
            <p>
              Because promotions and product availability can change, checking for an offer before completing your purchase can be worthwhile.
            </p>
            <p>
              Before you check out, visit CouponsBit to look for the latest Zenni promo code, along with coupon codes, discount offers, vouchers, eyewear deals, sale promotions, and other savings opportunities. Compare the available offers with your selected eyewear, review the terms, and choose the option that works best for your purchase.
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
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Zenni Promo Codes
          </h3>
          {[
            { q: "Does Zenni offer promo codes?", a: "Yes. Zenni may offer promotional codes, discounts, seasonal campaigns, and other savings opportunities. Availability and eligibility can vary." },
            { q: "Where can I find a Zenni promo code?", a: "You can check CouponsBit for available Zenni promo codes, coupon codes, discount offers, vouchers, and eyewear promotions before shopping." },
            { q: "How do I use a Zenni coupon code?", a: "Choose your eyewear, add it to your cart, proceed to checkout, and enter the applicable coupon code in the promotional-code field. Confirm that the discount has been applied before completing your order." },
            { q: "Why isn't my Zenni promo code working?", a: "The code may have expired, or your order may not meet the promotion's requirements. Some offers can be restricted to particular products, lens options, customers, or purchase amounts." },
            { q: "Can I use a Zenni discount code on prescription glasses?", a: "It depends on the individual promotion. Some offers may apply to prescription eyewear, while others may exclude certain products or lens options." },
            { q: "Does Zenni sell prescription glasses?", a: "Yes. Zenni offers prescription eyewear in a wide range of frame styles and lens options." },
            { q: "Does Zenni sell sunglasses?", a: "Yes. Zenni offers sunglasses in different styles, including options that may be available with prescription lenses." },
            { q: "Does Zenni sell glasses for children?", a: "Yes. Zenni offers children's eyewear in different frame styles and sizes." },
            { q: "Can I buy blue-light glasses from Zenni?", a: "Zenni offers eyewear with options designed for digital-device use. Review the specific product details to understand the features available with each lens." },
            { q: "Does Zenni have Black Friday deals?", a: "Zenni may run promotions around Black Friday and the broader holiday shopping season. Check current offers to see which products and customers qualify." },
            { q: "Does Zenni have Cyber Monday offers?", a: "Zenni may offer online promotions around Cyber Monday. Availability and terms can change, so check the current offer before purchasing." },
            { q: "When is the best time to look for Zenni deals?", a: "Promotions can appear throughout the year. Summer, back-to-school season, Black Friday, Cyber Monday, and holiday shopping periods can be useful times to check for eyewear offers." },
            { q: "How can I save money on Zenni?", a: "Start by checking CouponsBit for a Zenni promo code, then compare available discounts, sale offers, vouchers, and other promotions. Review the terms and confirm that the offer has been applied before completing your purchase." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa]")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform", openFaq === i && "text-white rotate-180")} />
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
            Popular Zenni Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Zenni Promo Code",
              "Prescription Glasses",
              "Blue Light Glasses",
              "Prescription Sunglasses",
              "Kids Eyewear",
              "Progressive Lenses",
              "Titanium Frames",
              "Virtual Try-On"
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
            Today's Top Zenni Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "UP TO 30%", sub: "Save Up To 30% On Selected Glasses" },
              { heading: "UP TO 75%", sub: "Blokz Lenses | Up To 75% OFF" },
              { heading: "$10.99", sub: "Tortoiseshell Wild Sight | $10.99" },
              { heading: "25% OFF", sub: "Get 25% OFF Orders Of $89+" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  Z
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
                  href="https://www.zennioptical.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Shop Zenni: ${deal.heading}`} 
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
