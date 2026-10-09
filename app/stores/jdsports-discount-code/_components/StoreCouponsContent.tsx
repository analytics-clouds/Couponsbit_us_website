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
  HeartHandshake,
  ShieldAlert,
  Calendar,
  Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Gift,
  Footprints,
  Shirt,
  Backpack,
  HelpCircle,
  ShoppingBag,
  Smile,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Nike", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp", dealText: "Up To 60% OFF", href: "/stores/nike-discount-code" },
  { name: "Adidas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788783181/adidas-logo_brulmo.webp", dealText: "Up To 50% OFF", href: "/stores/adidas-promo-code" },
  { name: "Halara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789535819/halara_coupon_code_ujuwnv.webp", dealText: "Up To 80% OFF", href: "/stores/halara-coupon-code" },
  { name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", dealText: "Up To 50% OFF", href: "/stores/old-navy-promo-code" },
  { name: "Abercrombie", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp", dealText: "Up To 50% OFF", href: "/stores/abercrombie-discount-code" },
  { name: "LL Bean", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/llbean_logo_xsbw4x.webp", dealText: "Up To 60% OFF", href: "/stores/llbean-promo-code" },
];

const STORE_URL = "https://jdsportsindonesia.pxf.io/c/4303217/2317816/29551?subId1=1015";

export default function JDSportsContent() {
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
              <span className="text-black font-extrabold">JD Sports</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1791446502/jD-logo_lfuzxu.webp" alt="JD Sports" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">JD Sports Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(4,200 Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest JD Sports Discount Code on top sportswear and sneakers. Enjoy up to 50% OFF selected clothing, footwear, and accessories, plus 10% OFF your first order. Use a JD Sports Promo Code to unlock verified savings on Nike, adidas, Jordan, New Balance, and more.
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
                    { icon: Percent, val: "6", label: "Deals" },
                    { icon: Users, val: "35K+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1791446502/jD-logo_lfuzxu.webp" alt="JD Sports Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">JD Sports Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "UP TO", value: "50%", title: "JD Sports Accessories Sale – Up to 50% Off", desc: "Save up to 50% on accessories from Nike, adidas, Jordan, Puma, New Balance, ASICS, McKenzie and more.", bullets: ["Explore trend-forward bags, socks and everyday accessories at discounted prices.", "Enjoy free standard shipping on eligible orders, subject to applicable terms.", "Shop now before the offers end or available stock runs out."] },
                  { label: "ONLY", value: "Rp275,000", title: "JD Sports – adidas Originals Adicolor Classics Diamond Bag at Rp275,000", desc: "Get the adidas Originals Adicolor Classics Diamond Bag for Rp275,000, reduced from Rp550,000.", bullets: ["Save 50% on this stylish adidas Originals accessory.", "Add a versatile bag to your everyday outfits with this special sale offer.", "Shop JD Sports and grab the deal while stocks last."] },
                  { label: "ONLY", value: "Rp134,500", title: "JD Sports – Jordan Cush Poly Socks 3 Pairs at Rp134,500", desc: "Get the Jordan Cush Poly Socks 3 Pairs for Rp134,500, down from Rp269,000.", bullets: ["Save 50% on this Jordan socks multipack.", "Refresh your everyday essentials with a practical addition to your sportswear collection.", "Shop now at JD Sports while the discounted price is available."] },
                  { label: "ONLY", value: "Rp341,400", title: "JD Sports – Nike Aura Crescent Crossbody Bag at Rp341,400", desc: "Grab the Nike Aura Crescent Crossbody Bag for Rp341,400, reduced from Rp569,000.", bullets: ["Save 40% on this stylish Nike crossbody bag.", "Complete your casual outfits with a convenient accessory for carrying everyday essentials.", "Shop the JD Sports accessories sale before the offer ends."] },
                  { label: "UP TO", value: "50%", title: "JD Sports Clothing Sale – Up to 50% Off", desc: "Save up to 50% on selected clothing during the JD Sports sale.", bullets: ["Discover sportswear and casual styles from popular brands, including Nike, adidas, Jordan and New Balance.", "Refresh your wardrobe with discounted apparel for everyday wear and active lifestyles.", "Shop now and explore the latest clothing offers while stocks last."] },
                  { label: "ONLY", value: "Rp729,500", title: "JD Sports – Jordan Flight Polo Jersey at Rp729,500", desc: "Get the Jordan Flight Polo Jersey for Rp729,500, reduced from Rp1,459,000.", bullets: ["Save 50% on this Jordan apparel deal.", "Add a sporty, casual style to your wardrobe with this discounted polo jersey.", "Shop JD Sports and take advantage of the limited-stock offer."] },
                  { label: "ONLY", value: "Rp279,300", title: "JD Sports – New Balance Core Logo Graphic T-Shirt at Rp279,300", desc: "Get the New Balance Core Logo Graphic T-Shirt for Rp279,300, down from Rp399,000.", bullets: ["Save 30% on this everyday graphic T-shirt.", "Add a versatile New Balance piece to your casual wardrobe.", "Shop now at JD Sports and save on selected clothing."] },
                  { label: "ONLY", value: "Rp1,424,500", title: "JD Sports – Nike Air Max 95 at Rp1,424,500", desc: "Grab the Nike Air Max 95 for Rp1,424,500 during the JD Sports sale.", bullets: ["The listed price drops from Rp2,049,000, offering substantial savings.", "Discover the iconic Nike Air Max design for your sneaker collection.", "Shop now while the discounted price and available sizes last."] },
                  { label: "ONLY", value: "Rp899,500", title: "JD Sports – Nike Air Max Phoenix Junior at Rp899,500", desc: "Get the Nike Air Max Phoenix Junior for Rp899,500, reduced from Rp1,799,000.", bullets: ["Save 50% on these junior Nike sneakers.", "Explore a sporty footwear option for younger sneaker fans.", "Shop the JD Sports sale before your preferred size sells out."] },
                  { label: "SAVE", value: "10%", title: "JD Sports – Get 10% Off Your First Order", desc: "Enjoy 10% off your first order at JD Sports, subject to applicable terms and conditions.", bullets: ["Discover sneakers, clothing and accessories from popular sportswear brands.", "Take advantage of next-day delivery where available and eligible.", "Shop online and explore convenient Click & Collect store pickup options."] },
                  { label: "EARN", value: "Access", title: "JD Sports Members – Get Exclusive Early Access", desc: "Join JD Sports membership to access exclusive early deals and promotions.", bullets: ["Discover selected sneakers, sportswear and accessories before wider sale access.", "Enjoy convenient shopping options, including available delivery and Click & Collect services.", "Sign up or log in to check your membership benefits and claim eligible offers."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop JD Sports: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is JD Sports?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    JD Sports is a major sports fashion retailer known for its selection of sneakers, athletic footwear, clothing, and accessories. The retailer brings together products from well-known sportswear and lifestyle brands, making it a popular destination for shoppers looking for both performance-focused gear and everyday streetwear.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its range covers products for men, women, and children, with categories spanning footwear, clothing, sports accessories, and fashion essentials. Shoppers can find trainers and sneakers alongside tracksuits, T-shirts, hoodies, jackets, leggings, shorts, and other activewear.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    JD Sports is also known for its focus on sports-inspired fashion, giving customers the option to combine athletic styles with everyday outfits.
                  </p>
                 
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Footprints, name: "Sneakers & Trainers", count: "150+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Shirt, name: "Sportswear & Apparel", count: "90+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Backpack, name: "Bags & Accessories", count: "40+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: Percent, name: "Clearance & Sale", count: "60+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Gift, name: "New Releases", count: "25+", color: "text-orange-500", href: "/categories/fashion" },
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
    How to Use a JD Sports Discount Code
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Found a suitable JD Sports discount code on CouponsBit? Follow these general steps:
    </p>
    <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
      <p>
        <strong className="text-black font-black block mb-1">Visit CouponsBit:</strong>
        Open the JD Sports page on CouponsBit and review the available offers.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Choose your offer:</strong>
        Select the coupon or promotional deal that suits your purchase.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Copy the code:</strong>
        If the promotion requires a code, copy it from CouponsBit.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Shop at JD Sports:</strong>
        Visit JD Sports and add your chosen sneakers, clothing, or accessories to your basket.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Apply the code:</strong>
        Enter the promotional code in the relevant field during checkout.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check your total:</strong>
        Confirm that the discount has been applied before completing your order.
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      If a code doesn't work, check its expiry date and eligibility requirements. It may also be restricted to particular products, brands, or customers.
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
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          JD Sports Discount Code, Coupons & Deals
        </h2>

        <div
          className={cn(
            "text-gray-500 font-bold leading-relaxed space-y-6 relative",
            !isReadMore && "max-h-[500px] overflow-hidden"
          )}
        >
          <p>
            Looking for a JD Sports discount code to save on your next pair of sneakers, sportswear, or activewear? CouponsBit helps shoppers find the latest JD Sports discount codes, promo codes, coupons, and deals before placing an order. Whether you're refreshing your everyday wardrobe, picking up new trainers, or looking for sportswear from popular brands, checking for a deal before checkout can help you shop for less.
          </p>
          <p>
            Before you complete your JD Sports purchase, visit CouponsBit to check the latest available offers and find a promotion that matches your shopping needs.
          </p>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Tips for Saving More at JD Sports
              </h3>
              <p>
                Finding a coupon is only one way to make your JD Sports shopping more budget-friendly. Before buying, compare the available promotions and check whether the products you're interested in are already included in a sale.
              </p>
              <p>
                It's also worth considering whether a promotion applies to your entire basket or only selected items. Reading the terms can help you understand the actual saving before you place your order.
              </p>
              <p>
                If you're shopping for multiple products, adding everything you need to your basket first can also make it easier to determine which available offer provides the best value.
              </p>
              <p>
                Most importantly, check CouponsBit before checkout for the latest JD Sports discount code, deals, and promotional offers.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12 py-8 px-4 sm:px-6">

  {/* Hero / Header Section */}
  <section className="text-center space-y-4 max-w-3xl mx-auto">
    <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold text-[#056bfa] bg-[#056bfa]/10">
      JD Sports Shopping Guide
    </Badge>
    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
      Find a JD Sports Discount Code on CouponsBit
    </h1>
    <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-left sm:text-center">
      <p>
        Sportswear and branded sneakers can be a significant purchase, especially when you're shopping for multiple items. Finding a JD Sports discount code before checkout can give you an opportunity to reduce your total spending when an eligible offer is available.
      </p>
      <p>
        CouponsBit makes it easier to check for current JD Sports coupons and promotions in one place. Before purchasing, head to the JD Sports page on CouponsBit and review the available offers.
      </p>
      <p>
        You may find a promotional code that can be entered at checkout or a deal that applies automatically to eligible products. Make sure you read the offer details carefully, as individual promotions can have different requirements.
      </p>
      <p>
        Checking CouponsBit before shopping can also help you avoid missing a limited-time promotion.
      </p>
    </div>
  </section>

  {/* Coupons, Promo Codes & Offers */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <Tag className="w-6 h-6" /> JD Sports Coupons, Promo Codes &amp; Offers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          JD Sports promotions can take different forms. Depending on the current campaign, shoppers may find discounts on selected products, promotional codes, seasonal offers, or other opportunities to save.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-gray-900">CouponsBit can help you look for:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "JD Sports discount codes",
              "JD Sports promo codes",
              "JD Sports coupons",
              "JD Sports promotional offers",
              "Sneaker and footwear deals",
              "Sportswear offers",
              "Seasonal sales",
              "Selected-brand promotions",
              "Limited-time shopping deals"
            ].map((item, index) => (
              <Badge key={index} variant="outline" className="bg-slate-50 border-slate-300 text-slate-700 py-1">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <p>
          Not every offer will apply to every product. Some promotions may have exclusions for selected brands, products, sale items, or other categories. Always check the terms before completing your purchase.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* What Can You Shop at JD Sports? */}
  <section className="space-y-6">
    <div className="text-center space-y-2">
      <h2 className="text-2xl font-bold text-[#056bfa]">What Can You Shop at JD Sports?</h2>
      <p className="text-gray-600">JD Sports offers a broad selection of sports fashion and lifestyle products, making it useful for shoppers with different needs.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Sneakers and Trainers */}
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Footprints className="w-5 h-5 text-[#056bfa]" /> Sneakers and Trainers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            Footwear is one of JD Sports' key categories. Shoppers can browse sneakers and trainers designed for sports, casual wear, running, and everyday use. The selection includes popular styles from major sports and lifestyle brands.
          </p>
        </CardContent>
      </Card>

      {/* Sportswear and Activewear */}
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Shirt className="w-5 h-5 text-[#056bfa]" /> Sportswear and Activewear
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            You can also find clothing designed for workouts, training, and active lifestyles. Depending on the collection, this can include T-shirts, shorts, leggings, tracksuits, sweatshirts, hoodies, and performance-focused clothing.
          </p>
        </CardContent>
      </Card>

      {/* Kids' Clothing and Footwear */}
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Smile className="w-5 h-5 text-[#056bfa]" /> Kids' Clothing and Footwear
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            JD Sports also offers options for younger shoppers, including children's trainers, clothing, and sportswear. This makes it possible to shop for different members of the family in one place.
          </p>
        </CardContent>
      </Card>

      {/* Accessories */}
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#056bfa]" /> Accessories
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            Alongside footwear and apparel, shoppers can find sports and lifestyle accessories that complement their outfits and training gear.
          </p>
        </CardContent>
      </Card>
    </div>
  </section>

  {/* Why Check for a JD Sports Promo Code? */}
  <section>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#056bfa] flex items-center gap-2">
          <HelpCircle className="w-6 h-6" /> Why Check for a JD Sports Promo Code?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          If you're already planning to purchase sneakers or sportswear, checking for a promotion before checkout is a simple way to look for additional value.
        </p>
        <p>
          A JD Sports promo code may be particularly useful when you're purchasing more than one item or shopping during a promotional period. Even when you don't find a suitable coupon code, checking current deals can help you identify products that are already discounted.
        </p>
        <p>
          CouponsBit gives shoppers a convenient starting point for this process. Rather than searching across multiple websites for JD Sports offers, you can check available promotions before heading to checkout.
        </p>
      </CardContent>
    </Card>
  </section>

</div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">
                Save on Your Next JD Sports Purchase With CouponsBit
              </h3>
              <p>
                Whether you're looking for the latest sneakers, sportswear, activewear, or accessories, JD Sports offers plenty of options for sports and lifestyle shopping. And before you pay full price, it's worth checking whether an eligible promotion can lower your total.
              </p>
              <p>
                Visit CouponsBit before your next JD Sports purchase to find the latest JD Sports discount code, coupons, promo codes, and deals. Compare the available offers, check their terms, and choose the one that works best for your shopping basket.
              </p>
            </div>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isReadMore && "rotate-180"
            )}
          />
        </button>

        {/* Accordion FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About JD Sports Discount Codes
          </h3>
          {[
            {
              q: "How can I find a JD Sports discount code?",
              a: "Visit the JD Sports page on CouponsBit to check for available discount codes, coupons, and promotional offers. Choose an eligible deal and follow its redemption instructions.",
            },
            {
              q: "Can I use a JD Sports discount code on sale items?",
              a: "This depends on the individual promotion. Some coupon codes may exclude sale products or selected brands, while others may have broader eligibility. Check the terms of the offer before using it.",
            },
            {
              q: "Why isn't my JD Sports promo code working?",
              a: "A promo code may not work if it has expired, has usage restrictions, applies only to selected products, or isn't valid for your order. Check the promotion's conditions and make sure the code has been entered correctly.",
            },
            {
              q: "Does JD Sports offer deals without a discount code?",
              a: "Yes. Shoppers may find sale products and other promotional offers where the discount is already reflected in the listed price and no code is required.",
            },
            {
              q: "Should I check CouponsBit before shopping at JD Sports?",
              a: "Yes. Checking CouponsBit before checkout lets you see whether a JD Sports discount code or another promotional offer is available for your purchase.",
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
                <span className="text-black font-black text-base">{faq.q}</span>
                <div
                  className={cn(
                    "bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300",
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
        {/* Tag Cloud */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular JD Sports Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "JD Sports Promo Code",
              "Sneakers Discount",
              "Nike Trainer Deals",
              "Adidas Activewear Offers",
              "JD Sports Clearance Sale",
              "CouponsBit JD Sports",
              "Sportswear Coupons",
              "Free Delivery Offers",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top JD Sports Deals
          </h3>
          <div className="space-y-6">
            {[
              {
              heading: "ACCESSORIES SALE",
              sub: "Save up to 50% on accessories from Nike, adidas, Jordan and more",
              },
              {
              heading: "NIKE AIR MAX 95",
              sub: "At Rp1,424,500 during the JD Sports sale",
              },
              {
              heading: "FIRST ORDER OFFER",
              sub: "Enjoy 10% off your first order at JD Sports",
              },
              {
              heading: "MEMBERS EARLY ACCESS",
              sub: "Join JD Sports membership for exclusive early deals",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  {i + 1}
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
                  href="https://www.jdsports.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get deal: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90 flex-shrink-0"
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
