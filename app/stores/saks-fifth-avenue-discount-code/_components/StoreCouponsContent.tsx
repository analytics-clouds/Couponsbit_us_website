"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Star, Tag, Percent, Users, BadgeCheck, ExternalLink,
  ShieldCheck, PiggyBank, RefreshCw, ChevronDown, CheckCircle, LayoutGrid,
  ShoppingBag, Gem, Shirt, Package, Search,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { OFFERS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Vuori", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/vuori_euoigj.webp", dealText: "20% OFF First Order", href: "/stores/vuori-discount-code" },
  { name: "Ariat", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793614080/Ariat-Logo_fsk8nx.webp", dealText: "Up To 25% OFF", href: "/stores/ariat-promo-code" },
  { name: "Abercrombie", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp", dealText: "Up To 50% OFF", href: "/stores/abercrombie-discount-code" },
  { name: "Zenni Optical", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793614081/zenni-optical-logo_gy9ssm.webp", dealText: "BOGO 40% OFF", href: "/stores/zenni-optical-promo-code" },
  { name: "Harry and David", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/harryand-david-logo_psaq9y.webp", dealText: "Up To 30% OFF", href: "/stores/harry-and-david-promo-code" },
  { name: "Nespresso", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/nespresso-logo_evanwx.webp", dealText: "20% OFF First Order", href: "/stores/nespresso-promo-code" },
];

const STORE_URL = "https://www.saksfifthavenue.com";

export default function SaksFifthAvenueCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

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
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Saks Fifth Avenue</span>
            </nav>
          </div>
        </div>

        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793688836/saks-fifth-avenue_senmoo.webp" alt="Saks Fifth Avenue" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Saks Fifth Avenue Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(8.6k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save on premium fashion with the latest Saks Fifth Avenue Promo Code and Saks Fifth Avenue Discount Code for November 2026. Enjoy 25% OFF eligible designer clothing, shoes, handbags, and accessories, or get up to $250 OFF qualifying luxury purchases. New shoppers can also unlock 15% OFF by joining Saks emails or text alerts. Browse top designer brands, seasonal collections, beauty products, and exclusive promotions to enjoy verified savings on luxury fashion and accessories.
                    </p>
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors">
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "7", label: "Offers" },
                    { icon: Percent, val: "60+", label: "Deals" },
                    { icon: Users, val: "2.1M+", label: "Shoppers" },
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
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                    <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#111111] flex items-center justify-center">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793688836/saks-fifth-avenue_senmoo.webp" alt="Saks Fifth Avenue Discount Code" width={280} height={120} className="max-h-32 w-auto object-contain filter brightness-0 invert" fetchPriority="high" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Saks Fifth Avenue Discount Codes & Offers</h2>
                </div>
                {OFFERS.map((c, i) => (
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
                              View Details <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Saks Fifth Avenue: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:w-[35%] space-y-8">
                <div className="w-full flex justify-center mb-6">
                  <a href="https://www.google.com/preferences/source?q=couponsbit.us" target="_blank" rel="nofollow noopener noreferrer" className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
                    <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png" alt="Add as a preferred source on Google" width={280} height={70} className="w-full max-w-[260px] h-auto object-contain" priority />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">What Is Saks Fifth Avenue?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    It is a luxury retail destination founded in 1924. It offers an extensive selection of designer fashion, footwear, handbags, jewellery, accessories, beauty products, children's clothing, and home merchandise. Its collections feature established luxury labels alongside emerging designers, making it a destination for shoppers looking for premium styles and distinctive products. 

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Saks Fifth Avenue caters to different shopping needs. You can explore everyday designer clothing, formalwear, luxury accessories, skincare, fragrances, and home décor. Its online store also features curated designer edits, new arrivals, seasonal collections, and selected sale products.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Whether you're shopping for a designer handbag, a new wardrobe, or a gift for someone special, Saks offers a wide range of premium options across different categories.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Shirt, name: "Designer Clothing", count: "50+", color: "text-black", href: "/categories/fashion" },
                      { icon: ShoppingBag, name: "Luxury Handbags", count: "30+", color: "text-amber-700", href: "/categories/fashion" },
                      { icon: Gem, name: "Fine Jewellery", count: "20+", color: "text-blue-500", href: "/categories/fashion" },
                      { icon: Package, name: "Beauty & Fragrance", count: "25+", color: "text-pink-500", href: "/categories/fashion" },
                      { icon: Search, name: "Sale Items", count: "40+", color: "text-red-500", href: "/categories/fashion" },
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
    Explore Popular Shopping Categories at Saks Fifth Avenue
  </h3>
  <div className="space-y-6">
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Designer Clothing for Women:</strong> Refresh your wardrobe with designer clothing for different occasions. Saks features women's collections that include dresses, tops, jeans, trousers, blazers, skirts, outerwear, activewear, and resortwear. Whether you need a polished outfit for work, a dress for an upcoming event, or comfortable everyday pieces, explore different designers, silhouettes, and seasonal styles. You can also browse formal dresses and occasionwear for weddings, parties, and celebrations.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Men's Designer Fashion:</strong> Discover clothing for work, casual outings, and special occasions through Saks' men's collections. Browse shirts, trousers, jackets, suits, knitwear, denim, and other wardrobe essentials. The selection also includes designer grooming products and accessories, making it easier to find pieces that complement your personal style.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Luxury Handbags and Accessories:</strong> Looking for a statement accessory? Explore designer handbags, wallets, belts, sunglasses, scarves, and other finishing touches. Saks features collections from recognised luxury fashion houses, with different styles for everyday use and special occasions. Before purchasing, compare the available designs, materials, colours, and product details to find the right option.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Designer Shoes:</strong> From everyday footwear to standout occasion styles, Saks offers designer shoes for women and men. Browse sneakers, sandals, boots, heels, flats, loafers, and formal footwear. If you're shopping for a particular designer or style, use the available filters to narrow down your choices by size, colour, and category.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Beauty, Skincare and Fragrances:</strong> Explore beauty products from established brands across skincare, makeup, haircare, and fragrance. Whether you're looking for a new skincare routine, a signature perfume, or makeup essentials, Saks offers products across different beauty categories. Check individual promotion terms carefully because beauty and fragrance products may be excluded from certain discount codes.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Jewellery, Kidswear and Home:</strong> Saks also offers fine jewellery, watches, children's clothing, gifts, and selected home products. These categories are worth exploring when shopping for birthdays, celebrations, holidays, or special occasions.</span>
      </p>
    </div>
  </div>
</div>


              </div>
            </div>
          </div>
        </section>

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
              <LayoutGrid className="w-4 h-4" /> View More Stores
            </Link>
          </div>
        </section>

        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Saks Fifth Avenue Promo Code: Save on Designer Fashion & Luxury Brands
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
          "Saks Fifth Avenue Spend & Save Deal",
          "20% OFF",
          "All Users",
          "Valid on eligible luxury orders of $250 or more for a limited time online.",
          "Orders $250+"
        ],
        [
          "Saks Fifth Avenue Designer Fashion Offer",
          "25% OFF",
          "All Users",
          "Applicable to select high-end designer styles and seasonal fashion items.",
          "Select Designer Styles"
        ],
        [
          "Saks Fifth Avenue Email Signup Offer",
          "15% OFF",
          "New Email Subscribers",
          "Sign up for Saks emails to receive 15% off your next eligible online purchase.",
          "Next Purchase"
        ],
        [
          "Saks Fifth Avenue Account Creation Offer",
          "10% OFF",
          "New Account Holders",
          "Exclusive online discount upon creating a new Saks Fifth Avenue account.",
          "First Purchase"
        ],
        [
          "Saks Fifth Avenue SMS Subscriber Discount",
          "15% OFF",
          "New SMS Subscribers",
          "Join Saks text alerts to receive 15% off your next online order.",
          "Next Purchase"
        ],
        [
          "Saks Fifth Avenue Featured Styles Deal",
          "15% OFF",
          "All Users",
          "Save 15% on featured luxury clothing, footwear, and designer accessories.",
          "Select Featured Styles"
        ],
        [
          "Saks Fifth Avenue rag & bone Savings",
          "15% OFF Savings",
          "All Users",
          "Plaid Cotton Flannel Shirt Jacket for $348; qualifies for 15% promo savings.",
          "rag & bone Apparel"
        ],
        [
          "Saks Fifth Avenue Santoni Footwear Offer",
          "Promotional Savings",
          "All Users",
          "Italian footwear features Suede Desert Boots ($890) and Leather Penny Loafers ($1,090).",
          "Santoni Footwear"
        ],
        [
          "Saks Fifth Avenue Ksubi Denim Sale",
          "Save 35% ($156)",
          "All Users",
          "Ksubi Chitch Astral Intruder Slim Jeans reduced from $240 to $156; eligible for extra promos.",
          "Ksubi Jeans"
        ],
        [
          "Saks Fifth Avenue Earned Rewards Event",
          "Up to $900 Gift Card",
          "All Users",
          "Earn promotional gift cards valued between $50 and $900 on eligible spend levels.",
          "Qualifying Purchases"
        ],
        [
          "Saks Fifth Avenue High-End Tiered Offer",
          "Up to $250 OFF",
          "All Users",
          "Tiered promotional savings up to $250 across top luxury designer brands.",
          "Select Luxury Items"
        ],
        [
          "Saks Fifth Avenue Luxury Collections Sale",
          "Special Savings",
          "All Users",
          "Seasonal promotional markdowns across clothing, shoes, handbags, and beauty.",
          "Luxury Collections"
        ],
        [
          "Saks Fifth Avenue Digital & Physical Gift Cards",
          "$50 to $2,000",
          "All Users",
          "Purchased gift cards range from $50 up to $2,000 for use on eligible Saks orders.",
          "Saks Gift Cards"
        ],
        [
          "Saks Fifth Avenue Bonus Gift Card Event",
          "Bonus Gift Card",
          "All Users",
          "Receive promotional bonus gift cards on qualifying luxury spend thresholds during events.",
          "Eligible Event Orders"
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
            Looking for a Saks Fifth Avenue promo code before shopping for your favourite designer brands? From luxury handbags and statement shoes to designer clothing, fine jewellery, and beauty products, Saks Fifth Avenue brings together premium fashion from established and emerging designers. Checking available promo codes and sale offers before checkout can help you find better value on your next luxury purchase.
          </p>
          <p>
            CouponsBit helps you explore Saks Fifth Avenue promo codes, discount offers, and seasonal deals in one place. Whether you're updating your wardrobe, searching for a special-occasion outfit, or choosing a luxury gift, check the latest available offers before placing your order.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Find a Saks Fifth Avenue Promo Code on CouponsBit
          </h3>
          <p>
            Before completing your order, visit CouponsBit to explore available Saks Fifth Avenue promo codes, discount codes, and shopping offers. A valid promotion may help you save on eligible products, although luxury designer brands and selected categories can have specific exclusions.
          </p>
          <p>
            Here are some ways to look for savings:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>New-customer promotions:</strong> Check whether a welcome offer is available for eligible first-time shoppers.</li>
            <li><strong>Seasonal sales:</strong> Explore seasonal markdowns and limited-time shopping events for selected designer products.</li>
            <li><strong>Designer fashion deals:</strong> Look for promotional offers on eligible clothing, shoes, handbags, and accessories.</li>
            <li><strong>Beauty offers:</strong> Check for category-specific promotions on selected beauty and skincare products.</li>
            <li><strong>App-exclusive offers:</strong> Explore the Saks app for personalised recommendations and promotional announcements.</li>
            <li><strong>Special shopping events:</strong> Keep an eye on limited-time events that may offer savings on selected full-price merchandise.</li>
          </ul>
          <p>
            Not every promotion applies to every designer or product. Some offers exclude beauty, fragrances, gift cards, selected luxury labels, and other merchandise. Always read the promotion's terms before applying a code.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use a Saks Fifth Avenue Promo Code
          </h3>
          <p>
            Once you find a suitable offer on CouponsBit, follow these steps to try your Saks Fifth Avenue promo code:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit the Saks Fifth Avenue website and browse the available collections.</li>
            <li>Select your preferred designer products, size, and colour.</li>
            <li>Add eligible items to your shopping bag.</li>
            <li>Proceed to checkout and look for the promo code or discount code field.</li>
            <li>Enter your valid code and apply it.</li>
            <li>Review the updated order summary to confirm whether the discount has been accepted.</li>
            <li>Check shipping costs, applicable taxes, and the final amount before completing your purchase.</li>
          </ol>
          <p>
            If the code doesn't work, check its expiry date, minimum purchase requirements, and product exclusions. Some promotional codes apply only to selected merchandise or require you to sign in to your Saks account.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Ways to Get More Value From Saks Fifth Avenue
          </h3>
          <p>
            Luxury shopping requires a little more comparison, especially when you're purchasing designer products. These tips can help you make a more informed decision.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Browse the Sale section:</strong> Check marked-down designer products before purchasing at full price.</li>
            <li><strong>Compare designer collections:</strong> Similar styles may be available from different labels, giving you more options.</li>
            <li><strong>Check promotional exclusions:</strong> Confirm that your chosen designer and product category qualify for the discount.</li>
            <li><strong>Explore the Saks app:</strong> The app offers personalised shopping features, designer recommendations, and access to promotional updates.</li>
            <li><strong>Review the return policy:</strong> Understand the return window and exclusions before ordering, particularly for final-sale products.</li>
            <li><strong>Check the final checkout amount:</strong> Consider shipping, taxes, and other applicable charges rather than looking at the product discount alone.</li>
          </ul>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Shop Designer Brands for Less with CouponsBit
          </h3>
          <p>
            From designer dresses and luxury handbags to premium footwear, beauty products, and accessories, Saks Fifth Avenue brings together collections for shoppers who appreciate luxury fashion. Before making your next purchase, visit CouponsBit to check available Saks Fifth Avenue promo codes, discount offers, and seasonal deals.
          </p>
          <p>
            Compare the available promotions, review product exclusions, and apply an eligible code at checkout. A little research before shopping can help you get more value from your favourite designer finds.
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
            Frequently Asked Questions
          </h3>
          {[
            {
              q: "Where can I find a Saks Fifth Avenue promo code?",
              a: "You can visit CouponsBit to explore available Saks Fifth Avenue promo codes, coupons, and shopping deals. You can also check the official Saks website for seasonal promotions and selected designer offers."
            },
            {
              q: "Does Saks Fifth Avenue offer discounts on designer brands?",
              a: "Yes, Saks features sale products and promotional offers on selected designer merchandise. However, some designers and product categories may be excluded from specific promotions. Check the offer conditions before purchasing."
            },
            {
              q: "Can I use a Saks Fifth Avenue promo code on sale items?",
              a: "It depends on the promotion. Some codes apply only to selected full-price products, while others may include eligible sale merchandise. Review the terms to confirm whether your items qualify."
            },
            {
              q: "Does Saks Fifth Avenue offer a welcome discount?",
              a: "Welcome promotions may be available to eligible shoppers from time to time. Check the official website and available CouponsBit offers for current eligibility requirements."
            },
            {
              q: "Why is my Saks Fifth Avenue promo code not working?",
              a: "Your code may have expired, may require account sign-in, or may not apply to the products in your shopping bag. Selected designers, beauty products, fragrances, and other categories can be excluded from promotional offers."
            },
            {
              q: "What can I buy at Saks Fifth Avenue?",
              a: "Saks Fifth Avenue offers designer clothing, shoes, handbags, jewellery, accessories, beauty products, children's fashion, gifts, and home merchandise."
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
            Popular Saks Fifth Avenue Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Saks Fifth Avenue Promo Code",
              "Designer Fashion Deals",
              "Luxury Handbags Sale",
              "Designer Shoes Offers",
              "Beauty & Skincare Promo",
              "Welcome Discount",
              "App-Exclusive Savings",
              "Fine Jewellery Sale"
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
            Today's Top Saks Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "WELCOME OFFER",
                sub: "Sign up for email to receive 10% off your order",
              },
              {
                heading: "DESIGNER SALE",
                sub: "Up to 70% off selected designer apparel & shoes",
              },
              {
                heading: "BEAUTY & FRAGRANCE",
                sub: "Complimentary gift sets with select beauty buys",
              },
              {
                heading: "APP EXCLUSIVE",
                sub: "Get special promotional rates on the Saks App",
              },
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
                  href={STORE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Saks Fifth Avenue: ${deal.heading}`}
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
