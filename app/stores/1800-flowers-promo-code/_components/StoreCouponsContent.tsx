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
  Flower2,
  Gift,
  ShoppingBag,
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
  { id: "d2", label: "DEAL", heading: "Same-Day Delivery Deal", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Free Shipping Offer", sub: "Featured Picks" },
  { id: "d4", label: "SALE", heading: "Percentage Off Sitewide", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Plant & Gift Basket Bundle", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Flat 75% OFF", href: "/stores/etsy-coupon-code" },
  { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra", href: "/stores/home-depot-discount-code" },
  { name: "Wayfair", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp", dealText: "Up To 80% OFF", href: "/stores/wayfair-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Dore & Rose", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/dore-and-rose-logo_jsa9ki.webp", dealText: "Up To 65% OFF", href: "/stores/dore-and-rose-promo-code" },
];

const STORE_URL = "https://www.1800flowers.com";

export default function FlowersCouponsContent() {
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
              <span className="text-black font-extrabold">1800 Flowers</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789719709/1800_flower_logo_uqwufx.webp" alt="1800 Flowers" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">1800 Flowers Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(9.8k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Use the latest 1800 Flowers Promo Code and 1800 Flowers Discount Code for September 2026 to save 30% OFF on flowers and gifts, get $20 OFF with the Double Your Blooms offer, and shop the Fall Fresh Pick Bouquet from $39.99. Find verified deals on roses, plants, gift baskets, and flower delivery across the USA.
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
                    { icon: Percent, val: "100+", label: "Deals" },
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789719709/1800_flower_logo_uqwufx.webp" alt="1800 Flowers Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">1800 Flowers Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "30% OFF", title: "1800 Flowers Promo Code – Deal of the Week | 30% OFF", desc: "Save 30% on selected flowers and gifts with the Deal of the Week.", bullets: ["Shop fresh bouquets and thoughtful gifts from the 1800 Flowers shop for birthdays and special occasions.", "Enjoy convenient 1800 Flowers delivery across the USA and check for an eligible promo code."] },
                  { label: "FROM", value: "$39.99", title: "1800 Flowers Promo Code – Fall Fresh Pick Bouquet | From $39.99", desc: "Shop the Fall Fresh Pick Bouquet starting at $39.99.", bullets: ["Send a beautiful seasonal arrangement for birthdays, celebrations and special moments.", "Order through 1800 Flowers delivery and check for an available 1800 Flowers code at checkout."] },
                  { label: "SALE", value: "30% OFF", title: "1800 Flowers Promo Code – Mass Cane Floor Plant | 30% OFF", desc: "Save 30% on the Mass Cane Floor Plant, now $101.49 instead of $144.99.", bullets: ["Choose from 4 available options to add a fresh decorative touch to any space.", "Shop 1800 Flowers and look for an eligible 1800 Flowers coupon before ordering."] },
                  { label: "SALE", value: "15% OFF", title: "1800 Flowers Promo Code – Chocolate Covered Berries | 15% OFF", desc: "Get 15% OFF selected Chocolate Covered Berries.", bullets: ["Send a delicious gift for birthdays, anniversaries and other special occasions.", "Check 1800 Flowers free shipping availability and apply an eligible promo code when available."] },
                  { label: "SALE", value: "30% OFF", title: "1800 Flowers Promo Code – Two Dozen Assorted Roses | 30% OFF", desc: "Save 30% on Two Dozen Assorted Roses, starting at $52.49 instead of $74.99.", bullets: ["Choose from 3 available options and send a colourful rose arrangement to someone special.", "Enjoy 1800 Flowers delivery across the USA and check for an available 1800 Flowers promo code."] },
                  { label: "SAVE", value: "$20 OFF", title: "1800 Flowers – Double Your Blooms | Save $20", desc: "Save $20 with the Double Your Blooms offer on eligible floral arrangements.", bullets: ["Send a fuller bouquet and make your gift even more memorable with this special promotion.", "Explore 1800 Flowers near me delivery options and check for current 1800 Flowers free shipping offers."] },
                  { label: "SALE", value: "30% OFF", title: "1800 Flowers – Shades of Spring Bouquet | 30% OFF", desc: "Save 30% on the Shades of Spring Bouquet with this Bouquet of the Month offer.", bullets: ["Brighten someone's day with a colourful seasonal flower arrangement.", "Shop 1800 Flowers delivery and check for an eligible 1800 Flowers code before checkout."] },
                  { label: "SALE", value: "UP TO 30%", title: "1800 Flowers – Chocolate Gift Basket | Up To 30% OFF", desc: "Get up to 30% OFF selected Chocolate Gift Baskets.", bullets: ["Choose a delicious gift for birthdays, celebrations, thank-you occasions and more.", "Explore 1800 Flowers coupon offers and check whether 1800 Flowers free shipping applies."] },
                  { label: "SALE", value: "15% OFF", title: "1800 Flowers – Assorted Tulip Bouquet | 15% OFF", desc: "Save 15% on the Assorted Tulip Bouquet.", bullets: ["Send a vibrant tulip arrangement for birthdays, celebrations or thoughtful surprises.", "Check 1800 Flowers near me availability and look for an eligible 1800 Flowers promo code."] },
                  { label: "SAVE", value: "UP TO $25", title: "1800 Flowers – Personalized Photo Gifts | Up To $25 OFF", desc: "Save up to $25 on selected Personalized Photo Gifts.", bullets: ["Create a memorable present by adding favourite photos to eligible gift products.", "Shop 1800 Flowers and check for an available 1800 Flowers coupon before checkout."] },
                  { label: "FROM", value: "$9.99", title: "1800 Flowers – Flowers & Fireworks | From $9.99", desc: "Shop selected Flowers & Fireworks gifts starting at just $9.99.", bullets: ["Choose a fun floral gift for celebrations and special occasions.", "Visit the 1800 Flowers shop and check for an eligible 1800 Flowers code."] },
                  { label: "FROM", value: "$13.99", title: "1800 Flowers – Spa Basket | From $13.99", desc: "Find selected Spa Baskets starting from $13.99.", bullets: ["Send a relaxing gift for birthdays, thank-you occasions or someone special.", "Explore 1800 Flowers free shipping options and available 1800 Flowers promo offers."] },
                  { label: "FROM", value: "$29.95", title: "1800 Flowers – Gift Sets | From $29.95", desc: "Shop selected Gift Sets starting at $29.95.", bullets: ["Discover thoughtful gifting options suitable for birthdays, celebrations and special moments.", "Order from 1800 Flowers delivery and check for an eligible 1800 Flowers coupon."] },
                  { label: "FROM", value: "$34", title: "1800 Flowers – Birthday Gifts | From $34", desc: "Find selected Birthday Gifts starting at $34.", bullets: ["Choose from flowers, gift baskets and other presents designed to make birthdays memorable.", "Explore the 1800 Flowers shop and check for an available 1800 Flowers promo code."] },
                  { label: "FROM", value: "$44.99", title: "1800 Flowers – Grand Gardenia Sympathy Arrangement | From $44.99", desc: "Shop the Grand Gardenia™ Sympathy Arrangement starting at $44.99.", bullets: ["Choose from 5 available options when sending a thoughtful floral tribute.", "Use 1800 Flowers delivery for eligible USA orders and contact 1800 Flowers customer service if you need order assistance."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop 1800 Flowers: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is 1800 Flowers?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    1-800-Flowers.com is an online gifting company known for flowers, plants, arrangements, and gifts delivered for different occasions. Its roots go back to 1976, when founder Jim McCann opened his first retail florist shop. The company later became one of the recognizable names in online flower delivery.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Today, shoppers can browse far more than traditional bouquets. The 1-800-Flowers selection includes roses, orchids, mixed arrangements, flowering plants, bonsai, gift baskets, gourmet food, chocolate-covered strawberries, balloons, keepsakes, and other gifts. The site also offers occasion-based shopping for birthdays, sympathy, romance, congratulations, new babies, get-well wishes, and those classic “just because” moments.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    One of the brand's biggest conveniences is delivery. Depending on the product and destination, customers can find same-day delivery options, while local florist partners help create and deliver many arrangements. The company's fulfillment system matches eligible orders with local florists or fulfillment partners in the recipient's area.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    In other words, 1-800-Flowers isn't just about sending flowers. It is designed to be a one-stop gifting destination when you want to send something meaningful without having to visit a florist in person.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Flower2, name: "Flower Arrangements", count: "25+", color: "text-blue-500", href: "/categories/home" },
                        { icon: ShoppingBag, name: "Plants & Greenery", count: "15+", color: "text-purple-500", href: "/categories/home" },
                        { icon: Gift, name: "Gift Baskets", count: "12+", color: "text-pink-500", href: "/categories/home" },
                        { icon: Truck, name: "Same-Day Delivery", count: "30+", color: "text-teal-500", href: "/categories/home" },
                        { icon: Search, name: "New Arrivals", count: "8+", color: "text-orange-500", href: "/categories/home" },
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
  <h3 className="text-black font-black text-lg mb-2">
    How to Save More on 1-800-Flowers
  </h3>
  <p className="text-gray-500 font-medium text-[11px] leading-relaxed mb-8">
    Getting a promo code is only one part of smart flower shopping. A few additional habits can help you get better value.
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Compare promotions before ordering.",
        sub: "A coupon isn't automatically the best deal. Look at the brand's current sale section and compare the final eligible price.",
      },
      {
        icon: Gift,
        title: "Shop sale collections.",
        sub: "1-800-Flowers regularly features discounted flowers, plants, and other gifts, so check those collections before settling on a standard-priced product.",
      },
      {
        icon: HeartHandshake,
        title: "Consider plants.",
        sub: "If you're shopping for someone who enjoys greenery, plants can provide a longer-lasting alternative to traditional bouquets.",
      },
      {
        icon: Calendar,
        title: "Plan major gifts early.",
        sub: "Valentine's Day, Mother's Day, Christmas, and other major occasions can be busy. Shopping earlier can give you more choice in arrangements and delivery dates.",
      },
      {
        icon: Truck,
        title: "Check delivery details.",
        sub: "A low product price doesn't necessarily mean the lowest final order cost. Review delivery and service charges during checkout before completing the purchase.",
      },
      {
        icon: Receipt,
        title: "Look beyond bouquets.",
        sub: "Gift baskets, plants, gourmet treats, and other products may have separate promotions, so don't limit your search to flowers.",
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
          1-800-Flowers Promo Code, Coupon Code & Discount Offers
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
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        ["Deal of the Week", "30% OFF", "All Users", "Save on selected floral gifts and arrangements", "Selected Flowers & Gifts"],
        ["Fall Fresh Pick Bouquet", "From $39.99", "All Users", "Seasonal arrangements for celebrations and birthdays", "Fall Fresh Pick Bouquet"],
        ["Mass Cane Floor Plant", "30% OFF ($101.49)", "All Users", "Was $144.99; choose from 4 decorative options", "Plants & Home Decor"],
        ["Chocolate Covered Berries", "15% OFF", "All Users", "Check for free shipping availability at checkout", "Selected Gourmet Treats"],
        ["Two Dozen Assorted Roses", "30% OFF (From $52.49)", "All Users", "Was $74.99; choose from 3 colorful arrangements", "Two Dozen Assorted Roses"],
        ["Double Your Blooms", "Save $20", "All Users", "Upgrade to a fuller bouquet on eligible arrangements", "Eligible Floral Arrangements"],
        ["Shades of Spring Bouquet", "30% OFF", "All Users", "Bouquet of the Month seasonal promotion", "Shades of Spring Bouquet"],
        ["Chocolate Gift Basket", "Up To 30% OFF", "All Users", "Gourmet baskets for birthdays and thank-you gifts", "Selected Chocolate Baskets"],
        ["Assorted Tulip Bouquet", "15% OFF", "All Users", "Bright and vibrant tulip arrangement", "Assorted Tulip Bouquet"],
        ["Personalized Photo Gifts", "Up To $25 OFF", "All Users", "Customize gift products with favorite photos", "Selected Photo Keepsakes"],
        ["Flowers & Fireworks", "From $9.99", "All Users", "Budget-friendly festive floral options", "Flowers & Fireworks Gifts"],
        ["Spa Basket", "From $13.99", "All Users", "Relaxing gift options for birthdays and special occasions", "Selected Spa Baskets"],
        ["Gift Sets", "From $29.95", "All Users", "Thoughtful curated gifting options for any event", "Selected Gift Sets"],
        ["Birthday Gifts", "From $34.00", "All Users", "Flowers, gift baskets, and celebratory presents", "Selected Birthday Gifts"],
        ["Grand Gardenia™ Sympathy Arrangement", "From $44.99", "All Users", "Choose from 5 available options for floral tributes", "Sympathy Floral Tributes"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 14 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Sending flowers has always been one of the easiest ways to make someone feel special. The only problem? Finding the right bouquet, choosing a delivery date, and staying within your gifting budget can turn a simple idea into a whole shopping mission. That is why 1-800-Flowers is here for your help.
          </p>
          <p>
            From birthday bouquets and romantic roses to sympathy arrangements, flowering plants, gourmet treats, gift baskets, and last-minute surprises, 1-800-Flowers makes it easy to send thoughtful gifts across the U.S. And before you place your order, checking for a 1-800-Flowers promo code can be a smart way to look for additional savings.
          </p>
          <p>
            Whether you're planning ahead for a major holiday or suddenly realize that someone's birthday is tomorrow, CouponsBit can help you discover available 1-800-Flowers coupons, promotions, deals, and other ways to save before checkout.
          </p>

          <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <p>
    What’s the Hype About 1-800-Flowers? 1-800-Flowers.com is an online gifting company known for flowers, plants, arrangements, and gifts delivered for different occasions. Its roots go back to 1976, when founder Jim McCann opened his first retail florist shop. The company later became one of the recognizable names in online flower delivery.
  </p>
  <p>
    Today, shoppers can browse far more than traditional bouquets. The 1-800-Flowers selection includes roses, orchids, mixed arrangements, flowering plants, bonsai, gift baskets, gourmet food, chocolate-covered strawberries, balloons, keepsakes, and other gifts. The site also offers occasion-based shopping for birthdays, sympathy, romance, congratulations, new babies, get-well wishes, and those classic “just because” moments.
  </p>
  <p>
    One of the brand's biggest conveniences is delivery. Depending on the product and destination, customers can find same-day delivery options, while local florist partners help create and deliver many arrangements. The company's fulfillment system matches eligible orders with local florists or fulfillment partners in the recipient's area.
  </p>
  <p>
    In other words, 1-800-Flowers isn't just about sending flowers. It is designed to be a one-stop gifting destination when you want to send something meaningful without having to visit a florist in person.
  </p>

  <div className="space-y-8">
    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a 1-800-Flowers Promo Code</h3>
      <p>Flowers are already a thoughtful gesture, but there is no reason you shouldn't look for a better deal while shopping.</p>
      <p>Before adding your favorite bouquet to the cart, check CouponsBit for a current 1-800-Flowers promo code. Promotions can change based on the season, product category, order requirements, or the type of offer being promoted, so it is worth checking what's available when you're ready to buy.</p>
      <p>A promo code may be useful when you're ordering flowers for a birthday, planning an anniversary surprise, sending a sympathy arrangement, or putting together a larger gift order. Depending on the promotion, savings may apply to selected flowers, plants, gifts, or other eligible products.</p>
      <p>The key is to compare the available code with the offers already running on the 1-800-Flowers website. Sometimes a sale item may provide the better value, while in other situations a valid promo code can make a regular-priced purchase more attractive.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">1-800-Flowers Coupons, Deals & Offers</h3>
      <p>There is more than one way to save when shopping at 1-800-Flowers. The brand maintains a dedicated promotions section where it regularly features promo codes, coupons, sale collections, plant offers, daily deals, and other promotions.</p>
      <p>The exact offers change, but shoppers may find savings opportunities such as:</p>
      <p><strong>Promotional codes:</strong> Available for eligible purchases across various categories.</p>
      <p><strong>Discounts & Specials:</strong> Daily or weekly flower specials, plant promotions, and sale collections.</p>
      <p><strong>Exclusive Perks:</strong> Special offers for new or returning customers, text-message/email promotions, and seasonal gifting deals.</p>
      <p>Since flower promotions can change frequently, don't assume an offer you saw previously is still active. Checking the current promotion before checkout gives you a better chance of applying an offer that actually works for your order.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Flowers for Every Occasion</h3>
      <p>One reason 1-800-Flowers remains useful for gifting is the sheer number of occasions covered by its catalog.</p>
      <p><strong>Birthday Flowers:</strong> A classic choice for personal gifting. Browse colorful arrangements, roses, plants, birthday-themed flowers, and complementary gifts. Enter the recipient's ZIP code for same-day delivery options.</p>
      <p><strong>Anniversary and Romance:</strong> Options range from red roses to mixed bouquets, orchids, romantic arrangements, preserved roses, and gift combinations ideal for Valentine's Day or date nights.</p>
      <p><strong>Sympathy Flowers:</strong> White and soft-colored arrangements, lilies, roses, mixed flowers, and plants designed for sending condolences to home or memorial services.</p>
      <p><strong>Get Well Gifts:</strong> Cheerful bouquets, plants, fruit, gourmet treats, and balloons to brighten someone's recovery.</p>
      <p><strong>New Baby and Congratulations:</strong> Bright bouquets, plants, gift baskets, and personalized items for celebrating major milestones.</p>
      <p><strong>Just Because:</strong> Spontaneous gestures tailored for ordinary days when you want to make someone feel special.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">More Than Flowers: Plants, Food & Gifts</h3>
      <p>If you're not sure flowers are the right choice, 1-800-Flowers gives you plenty of alternatives.</p>
      <p>Its plant selection includes flowering plants, houseplants, bonsai trees, succulents and cacti, orchids, and office-friendly plants for recipients who want gifts that last.</p>
      <p>The gifting selection extends into food and treats—including chocolate-covered strawberries, gourmet gifts, fruit arrangements, cakes, gift baskets, and locally sourced artisan-designed items.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Same-Day Flower Delivery for Last-Minute Gifting</h3>
      <p>1-800-Flowers offers same-day delivery on eligible products and locations through a vast fulfillment network connected to local florists.</p>
      <p>Simply enter the recipient's ZIP code to verify product availability. Always check the delivery date and location during checkout, as same-day delivery depends on destination and product eligibility.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Seasonal Shopping & How to Use a Promo Code</h3>
      <p>Major holidays like Valentine's Day and Mother's Day, alongside Easter, graduations, Christmas, and Thanksgiving, bring featured seasonal catalog updates.</p>
      <p>To use a promo code, select an offer on CouponsBit, add your items to the cart on 1-800-Flowers, and input the code into the promotion field at checkout. Ensure the discount applies before placing your order, and double-check terms for potential exclusions or minimum purchase requirements.</p>
    </div>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Check CouponsBit for 1-800-Flowers Deals?</h3>
              <p>Searching for a 1-800-Flowers promo code before shopping takes only a moment, but it can help you avoid paying more than necessary.</p>
              <p>CouponsBit brings together available coupon codes, promotional offers, discounts, and deals so you can check for savings before heading through checkout. Instead of searching through multiple pages for an offer that may no longer work, you can start with the current deals available through CouponsBit.</p>
              <p>It also helps to make checking for a coupon part of your normal shopping routine. Whether you're buying a birthday bouquet or arranging a last-minute delivery, there's little downside to checking for an available offer before you pay.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Send More, Save Smarter with 1-800-Flowers</h3>
              <p>Whether you're celebrating a birthday, sending congratulations, expressing sympathy, marking an anniversary, or simply reminding someone that you're thinking about them, 1-800-Flowers makes gifting convenient.</p>
              <p>The variety goes well beyond traditional bouquets, with plants, gourmet gifts, gift baskets, treats, keepsakes, and same-day options available for many occasions. And because promotions change throughout the year, checking for a 1-800-Flowers promo code before placing your order is a simple step that can help you find a better deal.</p>
              <p>Before your next floral delivery, browse the latest offers on CouponsBit, choose the gift that fits the occasion, and make your thoughtful gesture a little more budget-friendly.</p>
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
            1-800-Flowers Promo Code FAQs
          </h3>
          {[
            { q: "Does 1-800-Flowers have promo codes?", a: "Yes. 1-800-Flowers maintains a dedicated promotions page featuring current promo codes, coupons, discounts, and other offers. Promotions change regularly, so availability can vary." },
            { q: "How do I find a 1-800-Flowers promo code?", a: "You can check CouponsBit for currently available 1-800-Flowers promotions before placing your order. Compare the available code with any sale offers running directly on the brand's website." },
            { q: "Can I use a 1-800-Flowers coupon on sale items?", a: "It depends on the specific promotion. Some codes may apply only to eligible products or exclude certain sale collections. Always review the terms of the offer before checkout." },
            { q: "Does 1-800-Flowers offer same-day delivery?", a: "Yes, eligible flowers and gifts can be available for same-day delivery depending on the product, destination, and ordering time. Enter the recipient's ZIP code to see the options available for that location." },
            { q: "What can I buy from 1-800-Flowers besides flowers?", a: "You can shop plants, gift baskets, gourmet food, chocolate-covered strawberries, cakes, balloons, keepsakes, and other gifts in addition to floral arrangements." },
            { q: "Can I send plants through 1-800-Flowers?", a: "Yes. The site offers several types of plant gifts, including flowering plants, houseplants, bonsai, succulents and cacti, orchids, and other greenery." },
            { q: "When should I use a 1-800-Flowers promo code?", a: "The best time is before you complete checkout. Check CouponsBit first, then compare any available promo code with the current sales and offers on 1-800-Flowers." }
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
            Popular 1800 Flowers Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "1800 Flowers Promo Code",
              "Flower Delivery Deals",
              "Same-Day Delivery",
              "Gift Basket Bundle",
              "Free Shipping",
              "Plant Delivery",
              "First Order Discount",
              "Seasonal Sale"
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
            Today's Top 1800 Flowers Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "DEAL OF THE WEEK", sub: "30% OFF Selected Flowers & Gifts" },
              { heading: "ASSORTED ROSES", sub: "Two Dozen 30% OFF, From $52.49" },
              { heading: "DOUBLE BLOOMS", sub: "Save $20 On Eligible Arrangements" },
              { heading: "GIFT SETS", sub: "From $29.95" }
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
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Shop 1800 Flowers: ${deal.heading}`}
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
