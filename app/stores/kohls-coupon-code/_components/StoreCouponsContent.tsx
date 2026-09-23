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
  Truck,
  Shirt,
  ShoppingBag,
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
  { name: "Macy's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp", dealText: "Up To 75% OFF", href: "/stores/macys-promo-code" },
  { name: "JCPenney", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/jcpenny-logo_kra7ur.webp", dealText: "Up To 50% OFF", href: "/stores/jcpenney-discount-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", dealText: "Up To 50% OFF", href: "/stores/old-navy-promo-code" },
  { name: "Sephora", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/Sephora-Logo_djk72l.webp", dealText: "Up To 50% OFF", href: "/stores/sephora-promo-code" },
];

const STORE_URL = "https://www.kohls.com";

export default function KohlsCouponsContent() {
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
              <span className="text-black font-extrabold">Kohl's</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789994531/kohls-logo_pijwvs.webp" alt="Kohl's" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Kohl's Coupon Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(21.7k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Kohl's coupon codes and coupon offers for Sep 2026. Save on apparel, shoes, home goods, and beauty.
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
                    { icon: Tag, val: "6", label: "Offers" },
                    { icon: Percent, val: "150+", label: "Deals" },
                    { icon: Users, val: "3M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789994531/kohls-logo_pijwvs.webp" alt="Kohl's Coupon Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Kohl's Coupon Codes & Offers</h2>
                </div>

                {[
                  { label: "NEW", value: "NEW", title: "Kohl's – New Customer Offer", desc: "New customers can save on their first Kohl's order.", bullets: ["Sign up as a new Kohl's customer to unlock this offer.", "Discount applies to your first qualifying order.", "Terms and eligible items may vary."] },
                  { label: "DEAL", value: "KOHL'S CASH", title: "Kohl's – Kohl's Cash Deal", desc: "Earn Kohl's Cash on qualifying purchases.", bullets: ["Kohl's Cash can be redeemed on a future eligible purchase.", "Earning and redemption periods apply.", "Terms and exclusions may vary."] },
                  { label: "SALE", value: "SITEWIDE", title: "Kohl's – Percentage Off Sitewide", desc: "Save a percentage on qualifying sitewide orders.", bullets: ["Discount applies to qualifying sitewide purchases.", "Some exclusions may apply.", "Terms and conditions may vary."] },
                  { label: "DEAL", value: "FREE SHIP", title: "Kohl's – Free Shipping Offer", desc: "Enjoy free shipping on select qualifying orders.", bullets: ["Discount applies to select qualifying orders.", "Minimum order value may apply.", "Terms may vary by promotion."] },
                  { label: "DEAL", value: "PICKS", title: "Kohl's – Home & Apparel Picks", desc: "Save on select home goods and apparel.", bullets: ["Discount applies to select home and apparel items.", "Choose from a variety of brands and styles.", "Availability may vary by collection."] },
                  { label: "SALE", value: "CLEARANCE", title: "Kohl's – Seasonal Clearance Sale", desc: "Save on select seasonal clearance items.", bullets: ["Discount applies to select clearance items.", "Stock and styles are limited and vary.", "Great for finding items at a lower price."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Kohl's: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Kohl's?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Kohl's is a major American department store retailer offering products across fashion, home, beauty, footwear, accessories, and everyday lifestyle categories. Its assortment combines well-known national brands with Kohl's own brands, giving shoppers a wide range of options across different parts of the store.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The retailer carries national brands such as Levi's, Nike, adidas, Under Armour, Carter's, Tommy Hilfiger, and Eddie Bauer, alongside Kohl's brands including Sonoma Goods for Life, Nine West, Apt. 9, Jumping Beans, LC Lauren Conrad, Simply Vera Vera Wang, Tek Gear, and FLX.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Kohl's also has a substantial home assortment covering bedding, bath, kitchen and dining, electronics, floor care, décor, lighting, and other household categories. Its beauty selection includes products available through Kohl's as well as Sephora at Kohl's, although certain Kohl's coupons and promotions exclude Sephora merchandise.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    With both physical stores and online shopping through Kohls.com, customers can choose between shopping in person and ordering from home. Kohl's also offers services such as store pickup and delivery options for eligible purchases.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Shirt, name: "Apparel & Shoes", count: "50+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: ShoppingBag, name: "Home & Kitchen", count: "30+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Sparkles, name: "Beauty", count: "15+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: Gift, name: "Kohl's Cash", count: "12+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Truck, name: "Free Shipping", count: "25+", color: "text-orange-500", href: "/categories/fashion" },
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
    How to Find More Kohl's Deals
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Finding a code is only one part of shopping strategically at Kohl's. You can also compare several types of offers before placing your order.
    </p>
    <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
      <p>
        <strong className="text-black font-black block mb-1">Check sale merchandise first.</strong>
        Kohl's frequently combines sale pricing with other promotional opportunities. Look at the item's current promotion before deciding which coupon to apply.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check your Kohl's Wallet.</strong>
        Eligible coupons can be saved to your Wallet, making them easier to access during checkout.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Look for Kohl's Cash periods.</strong>
        If you're shopping during a Kohl's Cash earning event, consider whether your qualifying purchase could generate future Kohl's Cash.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check Rewards benefits.</strong>
        Frequent shoppers can review their Rewards balance and available benefits before completing an order.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Compare the offer terms.</strong>
        A percentage-off coupon isn't automatically useful for every order. Check which items qualify and whether the promotion works with the products you actually want.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check CouponsBit before checkout.</strong>
        A quick search for a current Kohl's promo code can help you identify an available offer before you place your order.
      </p>
    </div>
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
          Kohl's Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Shopping for clothes, shoes, beauty products, home essentials, or gifts often means comparing multiple offers before you check out. At Kohl's, there are several ways to look for a better deal, from promotional discounts and sale events to Kohl's Cash and Rewards. That makes checking for a Kohl's promo code before completing your order a useful step.
          </p>
          <p>
            Kohl's brings together fashion, footwear, accessories, beauty, home products, toys, pet essentials, and more under one retail destination. Whether you're refreshing your wardrobe, preparing for a new season, shopping for the family, or looking for holiday gifts, you can browse current Kohl's offers and then check CouponsBit for an available promotion before placing your order.
          </p>

          <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Find a Kohl's Promo Code
        </h3>
        <p>
          A Kohl's promo code can help you access an eligible promotion when shopping online. Kohl's provides online-eligible coupons with associated promo codes, which can be entered during checkout or saved to your Kohl's Wallet.
        </p>
        <p>
          Before you shop, check CouponsBit for available Kohl's promotions and review the terms attached to each offer. Some promotions may apply to specific departments, brands, or types of merchandise, while others may have broader eligibility.
        </p>
        <p>
          It's also worth checking whether the promotion can be combined with other available Kohl's discounts. Kohl's has specific rules for applying multiple coupons, so understanding those conditions can help you use your available offers correctly.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Kohl's Coupons, Deals &amp; Offers
        </h3>
        <p>
          Kohl's shopping promotions aren't limited to one type of discount. Depending on the current promotion calendar, shoppers may come across percentage-off offers, department-specific coupons, dollar-off promotions, sale pricing, Kohl's Cash opportunities, and Rewards benefits.
        </p>
        <p>
          Checking these options together can help you understand which promotion works with the items in your cart.
        </p>
        <p>
          <strong>Clothing &amp; Apparel:</strong> Kohl's is a convenient destination for everyday clothing for women, men, and children. You can find casual clothing, workwear, activewear, seasonal apparel, sleepwear, outerwear, denim, and other wardrobe essentials. Its assortment includes both national labels and Kohl's-owned brands, giving shoppers options for different styles and occasions. Whether you're shopping for everyday basics or updating your seasonal wardrobe, look for sale items and check whether a current Kohl's promo code applies to the products you're considering.
        </p>
        <p>
          <strong>Shoes:</strong> Kohl's carries footwear for women, men, and kids across casual, athletic, dress, outdoor, and seasonal styles. You can shop sneakers, boots, sandals, flats, heels, slippers, work shoes, and children's footwear from a mix of national and Kohl's brands. Footwear can also become a useful category to watch during seasonal promotions, back-to-school shopping, and holiday sales.
        </p>
        <p>
          <strong>Beauty:</strong> Beauty shoppers can find skincare, cosmetics, haircare, fragrance, personal care, and beauty accessories at Kohl's. Kohl's also has Sephora at Kohl's locations and online assortment, giving shoppers access to a broader selection of beauty brands. However, Kohl's specifically notes that Sephora at Kohl's merchandise is excluded from certain coupons and promotions, so always check the offer's terms before checkout.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Home &amp; Kitchen
        </h3>
        <p>
          Kohl's home department covers everything from bedding and bath products to kitchen and dining essentials.
        </p>
        <p>
          You can shop for:
        </p>
        <p>Bedding and sheets</p>
        <p>Towels and bath accessories</p>
        <p>Kitchen appliances and tools</p>
        <p>Cookware and bakeware</p>
        <p>Dinnerware and glassware</p>
        <p>Home décor</p>
        <p>Lighting</p>
        <p>Storage and organization</p>
        <p>Electronics</p>
        <p>Floor-care products</p>
        <p>
          Kohl's has expanded its home assortment to include categories such as wall art, glassware, ceramic décor, barware, botanicals, and lighting.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Kids &amp; Baby
        </h3>
        <p>
          Families can shop children's clothing, shoes, toys, accessories, and other everyday essentials. Kohl's carries children's brands alongside its own collections, making it possible to build seasonal wardrobes or shop for birthdays and holidays in one place.
        </p>
        <p>
          Back-to-school is particularly relevant for this category, with clothing, footwear, backpacks, and other essentials often becoming part of seasonal shopping campaigns.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Toys &amp; Gifts
        </h3>
        <p>
          Kohl's also provides options for birthdays, holidays, celebrations, and everyday gifting.
        </p>
        <p>
          Depending on the season, shoppers can find toys, games, accessories, home gifts, beauty products, apparel, and other items suitable for different recipients.
        </p>
        <p>
          If you're shopping for multiple gifts at once, checking for a Kohl's coupon code before checkout can be worthwhile, particularly when your cart contains several eligible items.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Pet Essentials
        </h3>
        <p>
          Kohl's assortment also includes pet-related products, making the store useful beyond traditional clothing and home shopping.
        </p>
        <p>
          For households shopping across multiple categories, the ability to combine different types of merchandise in one order can make Kohl's a practical one-stop shopping destination.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Kohl's Cash: Another Way to Save
        </h3>
        <p>
          One of the most recognizable parts of the Kohl's shopping experience is Kohl's Cash.
        </p>
        <p>
          During designated promotional periods, customers can earn Kohl's Cash on qualifying purchases made online or in stores. The amount is calculated after applicable coupons and discounts but before tax and shipping. Kohl's Cash can then be redeemed during the stated redemption period.
        </p>
        <p>
          This makes Kohl's Cash different from a traditional Kohl's promo code. Instead of immediately reducing the current purchase through a percentage-off promotion, it can provide a future shopping benefit when used during its valid redemption window.
        </p>
        <p>
          Kohl's Cash is also applied before percentage-off total-purchase coupons during checkout.
        </p>
        <p>
          Because Kohl's Cash has specific earning and redemption dates, check those dates carefully rather than assuming that an unused coupon will remain valid indefinitely.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Kohl's Rewards
        </h3>
        <p>
          Kohl's Rewards gives shoppers another way to earn benefits from qualifying purchases.
        </p>
        <p>
          Rewards activity can contribute toward Kohl's Cash, subject to the program's current terms. Kohl's states that qualifying purchases are calculated after applicable coupons and discounts and before shipping, fees, and tax.
        </p>
        <p>
          For frequent Kohl's shoppers, it's worth checking the Rewards program alongside available Kohl's discount code offers. A promotion isn't necessarily the only factor to consider when comparing the overall value of an order.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Seasonal Shopping at Kohl's
        </h3>
        <p>
          Kohl's product range makes it relevant throughout the year, and its promotions often align with seasonal shopping occasions.
        </p>
        <p>
          <strong>Back-to-School:</strong> Back-to-school shopping can cover everything from children's clothing and shoes to backpacks, home items, and other everyday essentials. A Kohl's back-to-school promotion may be particularly useful when you're shopping for several family members at once.
        </p>
        <p>
          <strong>Halloween:</strong> Halloween brings opportunities to shop for seasonal décor, children's clothing, pajamas, accessories, and other items connected to the holiday. As October approaches, check Kohl's promotions alongside any available promo code before completing your seasonal order.
        </p>
        <p>
          <strong>Thanksgiving:</strong> Thanksgiving shopping can include home décor, kitchen products, tableware, apparel, and gifts. It's also the beginning of one of the busiest U.S. shopping periods, making it a useful time to compare Kohl's offers before purchasing.
        </p>
        <p>
          <strong>Black Friday &amp; Cyber Monday:</strong> Black Friday and Cyber Monday are major shopping events for Kohl's customers. The retailer typically features promotions across multiple departments during the holiday shopping period. If you're preparing a large holiday shopping list, compare sale pricing with available coupons, Kohl's Cash opportunities, and any Kohl's promo code that applies to your cart.
        </p>
        <p>
          <strong>Christmas &amp; Holiday Shopping:</strong> Kohl's broad product range makes holiday shopping possible across multiple categories. You can look for gifts in apparel, beauty, toys, home, accessories, footwear, and other departments. Checking for a current promotion before checkout can be particularly useful when you're purchasing several gifts in one order.
        </p>
      </div>
    </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Use a Kohl's Promo Code</h3>
              <p>Using a Kohl's promo code online is straightforward:</p>
              <ol className="list-decimal pl-5 space-y-2 font-medium">
                <li>Find an active Kohl's promotion on CouponsBit.</li>
                <li>Read the offer details and check the expiration date.</li>
                <li>Visit Kohl's and add eligible products to your cart.</li>
                <li>Proceed to checkout.</li>
                <li>Enter the promotional code in the coupon field or select an eligible saved coupon from your Kohl's Wallet.</li>
                <li>Apply the code and review your updated order total.</li>
                <li>Complete your purchase after confirming that the promotion has been applied.</li>
              </ol>
              <p>Kohl's says shoppers can enter a promo code in the shopping cart or during checkout. Customers using the Kohl's app can also access coupons and Kohl's Cash through the checkout process.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Can You Use Multiple Kohl's Coupons?</h3>
              <p>Kohl's allows multiple coupons to be applied to eligible orders, but specific rules determine which combinations can be used.</p>
              <p>Kohl's currently states that up to four promo codes can be applied to an online order, with a limit of two promo codes on mobile devices. Only one sitewide percentage-off coupon can be used, while certain department-specific and dollar-off coupons may also apply.</p>
              <p>The order in which discounts are applied also matters. Kohl's explains that qualifying department-specific discounts are applied first, dollar-off benefits such as Kohl's Cash are then deducted, and an eligible sitewide percentage-off coupon is applied afterward.</p>
              <p>Because exclusions and combinations can change by promotion, always check the current terms attached to your coupon.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Isn't My Kohl's Promo Code Working?</h3>
              <p>If a Kohl's promo code isn't applying, there could be several reasons.</p>
              <p>The code may have expired, the products in your cart may not qualify, or the promotion may be limited to certain brands or departments.</p>
              <p>Kohl's also excludes certain purchases from coupons, including gift cards, taxes, shipping and handling fees, payments toward a Kohl's credit card account, Kohl's Cares merchandise, Sephora at Kohl's merchandise, and other specifically excluded products or brands.</p>
              <p>Some coupon codes may also have usage limits. Kohl's recommends checking the details of the individual coupon for its specific restrictions.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Kohl's Offers?</h3>
              <p>CouponsBit gives shoppers a convenient place to check for available Kohl's promotions before visiting the retailer.</p>
              <p>Instead of relying on an old code found through a random search, you can start by checking current offers and reviewing their terms. This is especially useful during major shopping periods when retailers may have multiple promotions running at the same time.</p>
              <p>Whether you're buying clothing, shoes, home products, beauty items, toys, or gifts, checking for a Kohl's promo code can become a simple step in your shopping routine.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Kohl's With a Promo Code</h3>
              <p>From everyday clothing and footwear to home essentials, beauty products, toys, and gifts, Kohl's gives shoppers plenty of categories to explore throughout the year.</p>
              <p>Before you place your next order, check CouponsBit for a current Kohl's promo code, review the promotion's terms, and compare it with any sale pricing, Kohl's Cash, or Rewards benefits available to you.</p>
              <p>A few extra seconds spent checking the available offers can help you make sure you're not overlooking a promotion that could apply to your purchase.</p>
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
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Kohl's Promo Code FAQs
          </h3>
          {[
            { q: "Does Kohl's offer promo codes?", a: "Yes. Kohl's offers promotional coupons and codes for eligible purchases. Available offers, eligibility, and expiration dates vary by promotion." },
            { q: "Where can I find a Kohl's promo code?", a: "You can check CouponsBit for available Kohl's promotions before shopping on Kohls.com." },
            { q: "Can I use more than one Kohl's promo code?", a: "Kohl's allows multiple eligible coupons on qualifying online orders, although restrictions apply. Kohl's currently states that up to four promo codes can be applied to an online order and only one sitewide percentage-off coupon can be used." },
            { q: "Can I use Kohl's Cash with a promo code?", a: "Kohl's Cash can generally be used alongside eligible coupons, subject to the terms of the individual promotions. Kohl's Cash is applied before a percentage-off total-purchase coupon." },
            { q: "Does Kohl's Cash expire?", a: "Yes. Kohl's Cash can only be redeemed during the redemption period specified for the promotion or coupon." },
            { q: "Can I use a Kohl's coupon on Sephora at Kohl's?", a: "Certain Kohl's coupons and promotions exclude Sephora at Kohl's merchandise. Always check the individual coupon's exclusions before checkout." },
            { q: "Why is my Kohl's promo code not working?", a: "The code may be expired, restricted to specific products or brands, subject to usage limits, or incompatible with another promotion. Kohl's also excludes certain categories and charges from coupons." },
            { q: "Does Kohl's have discounts during Black Friday and Cyber Monday?", a: "Kohl's participates in the major U.S. holiday shopping season, and shoppers can look for promotions during Black Friday and Cyber Monday. Available offers vary from year to year." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300", openFaq === i && "bg-[#056bfa]")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform duration-300", openFaq === i && "text-white rotate-180")} />
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
            Popular Kohl's Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Kohl's Promo Code",
              "Kohl's Cash Offers",
              "Sitewide Coupon 20%",
              "Kohl's Card Discounts",
              "Free Shipping over $49",
              "Home & Kitchen Deals",
              "Clearance Sales",
              "Sephora at Kohl's"
            ].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Kohl's Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "SITEWIDE DISCOUNT", sub: "Extra 20% OFF Orders w/ Promo Code" },
              { heading: "CARDHOLDER PERK", sub: "Extra 35% OFF First Kohl's Card Purchase" },
              { heading: "FREE SHIPPING", sub: "Free Standard Delivery on Orders $49+" },
              { heading: "CLEARANCE EVENT", sub: "Up to 70% OFF New Markdown Items" }
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
                  href="https://www.kohls.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Shop Kohl's: ${deal.heading}`}
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
