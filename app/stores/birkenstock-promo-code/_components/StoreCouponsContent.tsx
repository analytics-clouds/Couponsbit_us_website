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
  Gift,
  Truck,
  Footprints,
  Shirt,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "HOKA", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789994531/hoka-logo_zrq4ot.webp", dealText: "Up To 50% OFF", href: "/stores/hoka-coupon-code" },
  { name: "Nike", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp", dealText: "Up To 60% OFF", href: "/stores/nike-discount-code" },
  { name: "Adidas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788783181/adidas-logo_brulmo.webp", dealText: "Up To 50% OFF", href: "/stores/adidas-promo-code" },
  { name: "Lulus", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789994531/lulus-logo_pl1byq.webp", dealText: "Up To 80% OFF", href: "/stores/lulus-promo-code" },
  { name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", dealText: "Up To 50% OFF", href: "/stores/old-navy-promo-code" },
  { name: "Abercrombie", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp", dealText: "Up To 50% OFF", href: "/stores/abercrombie-discount-code" },
];

const STORE_URL = "https://www.birkenstock.com";

export default function BirkenstockCouponsContent() {
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
              <span className="text-black font-extrabold">Birkenstock</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1792648468/birkenstork_logo_nin4ru.webp" alt="Birkenstock" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Birkenstock Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(7.2k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest Birkenstock Promo Code offers and verified Birkenstock Discount Code deals. Grab the Arizona Droplet Buckle sandal for $104.97 (40% off) or the Boston Clog for $100.75 (35% off). Kids' footwear up to 50% OFF, men's clogs from $59, and foot care products from just $9.95. Women's footwear starts at $112, healthcare shoes from $82. Shop iconic Birkenstock styles at unbeatable prices and save big on every pair.
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
                    { icon: Tag, val: "13", label: "Offers" },
                    { icon: Percent, val: "50+", label: "Deals" },
                    { icon: Users, val: "1.2M+", label: "Shoppers" },
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
                      <div className="w-full h-full bg-[#f8f8f8] flex items-center justify-center">
                        <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1792648468/birkenstork_logo_nin4ru.webp" alt="Birkenstock Promo Code" width={300} height={200} className="max-w-[300px] max-h-[200px] object-contain" fetchPriority="high" />
                      </div>
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
                  <h2 className="text-2xl font-black text-black leading-tight">Birkenstock Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "35%", value: "OFF", title: "Birkenstock  Promo Code Bend Chelsea – 35% OFF", desc: "Get the Bend Chelsea in Taupe Suede Leather for just $113.75 instead of $175.", bullets: ["Save $61.25 with an exclusive 35% discount on this stylish suede footwear.", "Discover a versatile design that complements casual and smart-casual outfits.", "Shop the Birkenstock sale and enjoy great savings on selected footwear styles."] },
                  { label: "40%", value: "OFF", title: "Birkenstock Arizona Droplet Buckle Promo Code – 40% OFF", desc: "Shop the Arizona Droplet Buckle in High Shine Oyster for $104.97 instead of $174.95.", bullets: ["Enjoy 40% OFF and save $69.98 on this elegant patent leather sandal.", "Add a glossy finish and distinctive buckle detail to your footwear collection.", "Take advantage of the Birkenstock promo code offers and save on selected styles."] },
                  { label: "40%", value: "OFF", title: "Birkenstock Uji Promo Code – 40% OFF", desc: "Get the Uji in Light Gray for just $90 instead of $150.", bullets: ["Save $60 with a flat 40% discount on this leather-and-felt design.", "Complete your casual looks with this contemporary and versatile footwear style.", "Explore Birkenstock promo code deals to find more savings on selected products."] },
                  { label: "35%", value: "OFF", title: "Birkenstock Boston Promo Code – 35% OFF", desc: "Buy the Boston in Light Gray for $100.75 instead of $155.", bullets: ["Enjoy 35% OFF and save $54.25 on this classic clog style.", "Pair this versatile design with your everyday wardrobe for a relaxed look.", "Check the latest Birkenstock promo code offers for potential additional savings."] },
                  { label: "FROM", value: "$395", title: "Birkenstock 1774 Uerzell Suede Promo Code – Designer Style for $395", desc: "Discover the 1774 Uerzell Suede, designed by Thibo Denis, for $395.", bullets: ["Explore its premium suede leather construction in the Caccia colour.", "Add a distinctive designer piece to your footwear collection.", "Check Birkenstock promo code offers for any applicable discounts on premium styles."] },
                  { label: "UP TO", value: "50% OFF", title: "Birkenstock Little Kids Footwear Promo Code – Up to 50% OFF", desc: "Save up to 50% on selected little kids' footwear.", bullets: ["Discover comfortable footwear options for everyday activities and outings.", "Browse selected designs at reduced prices during the Birkenstock sale.", "Use an eligible Birkenstock promo code if available to maximise your savings."] },
                  { label: "FROM", value: "$9.95", title: "Birkenstock Foot Care Promo Code – Products Starting at $9.95", desc: "Shop selected foot care products starting at just $9.95.", bullets: ["Explore affordable essentials to complement your footwear care routine.", "Find useful products at budget-friendly prices.", "Check Birkenstock promo code offers and terms for additional eligible discounts."] },
                  { label: "FROM", value: "$29.95", title: "Birkenstock Body Care Promo Code – Products Starting at $29.95", desc: "Discover selected body care products starting at $29.95.", bullets: ["Explore personal care essentials for your everyday routine.", "Shop selected products at prices starting under $30.", "Look for applicable Birkenstock promo code offers before checkout."] },
                  { label: "FROM", value: "$59", title: "Birkenstock Men's Clogs Promo Code – Prices Starting at $59", desc: "Shop selected men's clogs starting at $59.", bullets: ["Explore versatile designs for casual wear and everyday activities.", "Find styles that complement relaxed outfits and laid-back looks.", "Check Birkenstock promo code offers for additional savings on eligible products."] },
                  { label: "FROM", value: "$82", title: "Birkenstock Healthcare Shoes Promo Code – Prices Starting at $82", desc: "Explore selected healthcare shoes starting at $82.", bullets: ["Browse footwear options designed for healthcare and work environments.", "Compare available styles to find footwear suited to your needs.", "Check Birkenstock promo code terms for applicable discounts and current offers."] },
                  { label: "FROM", value: "$112", title: "Birkenstock Women's Footwear Promo Code – Prices Starting at $112", desc: "Shop selected women's footwear starting at $112.", bullets: ["Explore stylish options for everyday wear and different occasions.", "Find versatile footwear to complement your personal style.", "Check the latest Birkenstock promo code deals for eligible savings."] },
                  { label: "FROM", value: "$139.95", title: "Birkenstock Men's Footwear Promo Code – Prices Starting at $139.95", desc: "Discover selected men's footwear starting at $139.95.", bullets: ["Browse versatile designs for everyday use and casual styling.", "Find footwear options to suit your wardrobe and personal preferences.", "Explore Birkenstock promo code offers for potential savings on selected products."] },
                  { label: "ONLY", value: "$144", title: "Birkenstock Arizona Chunky Sandals Promo Code – Get Them for $144", desc: "Shop the Arizona Chunky Sandals for just $144.", bullets: ["Add a bold, modern touch to your footwear collection with this chunky design.", "Pair these sandals with casual outfits for a stylish everyday look.", "Check current Birkenstock promo code offers to see whether additional discounts apply."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Birkenstock: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Birkenstock?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Birkenstock is a German footwear brand with a shoemaking heritage dating back to 1774. It is widely recognised for its anatomically shaped footbed, designed to support the natural contours of the foot. Its collections combine comfort-focused construction with timeless silhouettes, using materials such as leather, suede, cork and synthetic alternatives. 

                  </p>
                  
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand offers footwear for women, men and children, including sandals, clogs, shoes, boots and slippers. It also sells accessories and foot-care products, making it a destination for shoppers looking beyond seasonal <Link href="/stores/hoka-coupon-code" className="text-[#056bfa] hover:underline">footwear trends</Link>.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Footprints, name: "Sandals", count: "30+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Sparkles, name: "Clogs", count: "20+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Shirt, name: "Apparel", count: "10+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: Truck, name: "Free Shipping", count: "15+", color: "text-teal-500", href: "/categories/fashion" },
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
    Explore Popular Birkenstock Styles
  </h3>
  <div className="space-y-6">
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Arizona sandals:</strong> The iconic two-strap design is a versatile option for everyday outfits, holidays and relaxed weekends.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Boston clogs:</strong> A closed-toe silhouette that pairs well with <Link href="/stores/old-navy-promo-code" className="text-[#056bfa] hover:underline">casual clothing</Link> and transitional-season outfits.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Gizeh sandals:</strong> A toe-post design for shoppers who prefer a more streamlined sandal.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Madrid sandals:</strong> A minimalist single-strap option with a clean, simple look.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Mayari sandals:</strong> A distinctive design with crossover toe detailing.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Shoes, boots and slippers:</strong> Explore options for cooler weather, indoor comfort and everyday wear.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      When choosing a pair, consider the material, footbed type, fit and intended use. Checking the size guide before ordering can also help you select the right fit.
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
          Birkenstock Promo Code, Discounts & Footwear Deals
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
        [
          "Birkenstock Bend Chelsea Sale",
          "35% OFF ($113.75)",
          "All Users",
          "Reduced from $175 original price (Save $61.25) in Taupe Suede Leather.",
          "Bend Chelsea Suede Footwear"
        ],
        [
          "Birkenstock Arizona Droplet Buckle Sale",
          "40% OFF ($104.97)",
          "All Users",
          "Reduced from $174.95 original price (Save $69.98) in High Shine Oyster.",
          "Arizona Droplet Buckle Sandal"
        ],
        [
          "Birkenstock Uji Sale",
          "40% OFF ($90)",
          "All Users",
          "Reduced from $150 original price (Save $60) in Light Gray leather-and-felt design.",
          "Uji Light Gray Footwear"
        ],
        [
          "Birkenstock Boston Clog Sale",
          "35% OFF ($100.75)",
          "All Users",
          "Reduced from $155 original price (Save $54.25) in Light Gray.",
          "Boston Clog (Light Gray)"
        ],
        [
          "Birkenstock 1774 Uerzell Suede Designer Offer",
          "$395",
          "All Users",
          "Designed by Thibo Denis. Premium suede leather construction in Caccia colour.",
          "1774 Uerzell Suede"
        ],
        [
          "Birkenstock Little Kids Footwear Sale",
          "Up to 50% OFF",
          "All Users",
          "Savings on selected comfortable footwear options for little kids.",
          "Selected Kids' Footwear"
        ],
        [
          "Birkenstock Foot Care Essentials",
          "From $9.95",
          "All Users",
          "Affordable foot care items starting under $10 to complement footwear routine.",
          "Selected Foot Care Products"
        ],
        [
          "Birkenstock Body Care Range",
          "From $29.95",
          "All Users",
          "Personal care and body care essentials with prices starting under $30.",
          "Selected Body Care Products"
        ],
        [
          "Birkenstock Men's Clogs Offer",
          "From $59",
          "All Users",
          "Budget-friendly prices on selected men's clogs for casual wear.",
          "Selected Men's Clogs"
        ],
        [
          "Birkenstock Healthcare Shoes",
          "From $82",
          "All Users",
          "Footwear options specifically designed for healthcare and work environments.",
          "Selected Healthcare Shoes"
        ],
        [
          "Birkenstock Women's Footwear Offer",
          "From $112",
          "All Users",
          "Promotional pricing starting at $112 across selected women's styles.",
          "Selected Women's Footwear"
        ],
        [
          "Birkenstock Men's Footwear Offer",
          "From $139.95",
          "All Users",
          "Versatile designs and everyday styles starting at $139.95.",
          "Selected Men's Footwear"
        ],
        [
          "Birkenstock Arizona Chunky Sandals",
          "$144",
          "All Users",
          "Bold modern chunky design for everyday casual style.",
          "Arizona Chunky Sandals"
        ]
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
            Some shoes make a statement. Others become the pair you reach for almost every day. Birkenstock brings these two ideas together with distinctive designs, signature footbeds and versatile footwear that works across casual outfits, travel and everyday routines. If you're planning to add a new pair to your collection, check CouponsBit for a Birkenstock promo code before completing your purchase.
          </p>
          <p>
            From classic sandals to popular clogs and closed-toe shoes, exploring available discounts can help you find the style you want at better value.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Find a Birkenstock Promo Code on CouponsBit
          </h3>
          <p>
            Before buying your next pair, browse CouponsBit for a Birkenstock promo code, discount offer or current sale deal. Promotions can vary by product, collection, location and shopping period, so check the offer details before relying on a discount.
          </p>
          <p>
            Compare available codes with the offers on Birkenstock's official website. Some promotions may apply only to selected styles, full-price products or qualifying orders, while others may have exclusions or restrictions on combining discounts.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use a Birkenstock Promo Code
          </h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit CouponsBit and look for an available Birkenstock promo code.</li>
            <li>Read the offer's terms, expiry date and product exclusions.</li>
            <li>Browse the official Birkenstock store and select your preferred style and size.</li>
            <li>Add the item to your cart and enter the code in the promotional field, if required.</li>
            <li>Review the final order summary to confirm whether the discount has been applied.</li>
          </ol>
          <p>
            If a code doesn't work, check whether it is valid for your country, selected product and order value. Some offers cannot be combined with other promotions.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            When to Look for Birkenstock Deals
          </h3>
          <p>
            Seasonal sale periods can be a useful time to compare footwear offers. Look for eligible deals during end-of-season sales, holiday shopping events and other promotional periods. Birkenstock's official US store has featured selected sale styles and discounts for eligible healthcare workers, students, teachers and military members, subject to verification and terms.
          </p>
          <p>
            Availability differs across regional stores, so check the terms for your location rather than assuming every offer applies internationally.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Shop Birkenstock for Less With CouponsBit
          </h3>
          <p>
            Whether you're looking for everyday sandals, classic clogs or footwear for your next trip, choose a style that fits your needs and wardrobe. Before checking out, visit CouponsBit for a Birkenstock promo code, discount offers and current deals. Compare the terms, check product availability and make your next footwear purchase with greater confidence.
          </p>

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
            FAQs About Birkenstock Promo Codes
          </h3>
          {[
            {
              q: "Does Birkenstock offer promo codes?",
              a: "Birkenstock features promotions and selected sale offers from time to time. Check CouponsBit and the official store for current opportunities."
            },
            {
              q: "Can I use a promo code on every Birkenstock style?",
              a: "Not always. Certain codes may exclude selected models, discounted items or particular collections."
            },
            {
              q: "What is Birkenstock best known for?",
              a: "The brand is known for its signature anatomically shaped footbed and recognisable styles, including Arizona sandals and Boston clogs."
            },
            {
              q: "How can I find the best Birkenstock deal?",
              a: "Compare available promo codes, eligible sale styles, shipping terms and product exclusions before placing your order."
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
            Popular Birkenstock Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Birkenstock Promo Code",
              "Boston Clogs Deals",
              "Arizona Sandals Sale",
              "Footwear Discounts",
              "Student Discount",
              "Healthcare Worker Offer",
              "End of Season Sale",
              "Free Shipping Offers"
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
            Today's Top Birkenstock Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "ARIZONA SANDALS",
                sub: "Save on classic double-strap sandals",
              },
              {
                heading: "BOSTON CLOGS",
                sub: "Explore deals on popular closed-toe clogs",
              },
              {
                heading: "ESSENTIAL WORKER OFFER",
                sub: "Special discounts for verified professionals",
              },
              {
                heading: "LAST CHANCE SALE",
                sub: "Up to 30% off selected footwear styles",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  B
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
                  aria-label={`Shop Birkenstock: ${deal.heading}`}
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
