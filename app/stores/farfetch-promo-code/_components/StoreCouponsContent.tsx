"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent, Calendar, Watch, ShieldAlert, Receipt,
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
  Shirt,
  Footprints,
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
  { id: "d1", label: "NEW", heading: "New Customer Offer", sub: "Latest Deals" },
  { id: "d2", label: "SALE", heading: "Designer Sale Picks", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Percentage Off First Order", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Free Shipping Offer", sub: "Featured Picks" },
  { id: "d5", label: "REWARDS", heading: "Access Rewards Member Perks", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Zara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp", dealText: "Up To 50% OFF", href: "/stores/zara-discount-code" },
  { name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", dealText: "Up To 60% OFF", href: "/stores/hm-promo-code" },
  { name: "Shein", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp", dealText: "Up To 90% OFF", href: "/stores/shein-coupon-code" },
  { name: "Nike", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp", dealText: "Up To 50% OFF", href: "/stores/nike-discount-code" },
  { name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", dealText: "Up To 60% OFF", href: "/stores/old-navy-promo-code" },
  { name: "Fashion Nova", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/fashion-nova_cm1al3.webp", dealText: "Up To 70% OFF", href: "/stores/fashion-nova-discount-code" },
];

const STORE_URL = "https://www.farfetch.com";

export default function FarfetchCouponsContent() {
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
              <span className="text-black font-extrabold">Farfetch</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788951742/farfetch-logo_c4ik3i.webp" alt="Farfetch" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Farfetch Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(16.7k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Farfetch promo codes to save 75% on the TechnoMarine Coral Legacy Watch and shop Moon Boot Icon Fleece Lace-Up Boots from $261. Enjoy 15% OFF pre-owned styles while exploring luxury clothing, footwear, bags, and designer accessories in Sept 2026.
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
                    { icon: Tag, val: "15", label: "Offers" },
                    { icon: Percent, val: "600+", label: "Deals" },
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
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789559424/36_hlamj5.webp" alt="Farfetch Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Farfetch Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "75% OFF", title: "Farfetch Promo Code – TechnoMarine Coral Legacy 36mm Watch | 75% OFF", desc: "Get the TechnoMarine Coral Legacy 36mm Watch for just $91, reduced from $400 — save 75% on this final-sale designer watch.", bullets: ["Shop this stylish timepiece through Farfetch and explore more designer deals available at heavily reduced prices.", "Use a promo code on Farfetch and look for a Farfetch voucher code or Farfetch discount code to unlock extra savings on eligible offers."] },
                  { label: "SALE", value: "UP TO 70%", title: "Farfetch Promo Code – SS26 Sale | Up To 70% OFF", desc: "Explore the SS26 Sale and enjoy up to 70% OFF selected styles from Farfetch’s latest seasonal collections.", bullets: ["Discover Farfetch clothing, designer footwear and accessories with attractive seasonal discounts.", "Shop with a Farfetch sale promo code or Farfetch offer code and make the most of the latest Farfetch sale coupon offers."] },
                  { label: "SALE", value: "70% OFF", title: "Farfetch Promo Code – Philipp Plein Logo Leather Sneakers | 70% OFF", desc: "Get the Philipp Plein logo-detail leather sneakers for just $195 with a huge 70% OFF sale discount.", bullets: ["Add premium designer footwear to your collection and discover more luxury styles across Farfetch.", "Use a Farfetch coupon promo code or Farfetch code coupon to look for additional savings on eligible designer purchases."] },
                  { label: "SALE", value: "UP TO 70%", title: "Farfetch Designer Kidswear & Baby Essentials | Up To 70% OFF", desc: "Save up to 70% OFF selected designer kidswear and baby essentials during the Members Sale.", bullets: ["Shop Diesel tees, tanks and tracksuits, along with Lanvin infant sneakers and other stylish pieces.", "Grab this Farfetch sale offer and search for a Farfetch discount coupon or promocode for Farfetch to maximize your savings."] },
                  { label: "SALE", value: "UP TO 60%", title: "Farfetch Women’s Clothing Sale – Up To 60% OFF", desc: "Enjoy up to 60% OFF selected women’s clothing and discover fashionable styles for every occasion.", bullets: ["Refresh your wardrobe with Farfetch clothing and explore a wide selection of designer fashion at reduced prices.", "Use a Farfetch discount code or Farfetch voucher to save more on eligible women’s fashion purchases."] },
                  { label: "SALE", value: "50% OFF", title: "Farfetch – Maje Cropped Tweed Jacket | 50% OFF", desc: "Shop the Maje cropped tweed jacket for $280 instead of $560 and save 50% on this designer fashion pick.", bullets: ["Add this sophisticated jacket to your wardrobe and discover more premium seasonal styles on Farfetch.", "Look for a Farfetch voucher code or Farfetch sale coupon to enjoy additional savings on eligible purchases."] },
                  { label: "DEAL", value: "$261", title: "Farfetch – Moon Boot Icon Fleece Lace-Up Boots | $261", desc: "Get the Moon Boot Icon fleece lace-up boots for $261 and add a distinctive designer style to your footwear collection.", bullets: ["Enjoy a cosy fleece design with a fashionable lace-up finish, perfect for a stylish seasonal wardrobe.", "Shop this Farfetch offer and check for a Farfetch offer code or Farfetch discount coupon before completing your purchase."] },
                  { label: "DEAL", value: "FREE SHIP", title: "Farfetch Free Shipping Offer – Free Shipping On Orders Over $400", desc: "Enjoy Free Shipping on Farfetch orders over $400 and make your designer shopping experience even more convenient.", bullets: ["Plus, get Free Returns for 30 days on eligible purchases for added flexibility after your order.", "Look for a Farfetch free shipping code or Farfetch coupon code free shipp offer to find additional delivery savings on qualifying orders."] },
                  { label: "SALE", value: "15% OFF", title: "Farfetch Voucher – Pre-Owned Styles | 15% OFF", desc: "Get 15% OFF the Pre-Owned Styles Collection and discover designer fashion at reduced prices.", bullets: ["Shop quality pre-owned clothing and fashion essentials while enjoying attractive savings across selected styles.", "Use a Farfetch voucher or Farfetch voucher code to explore additional savings available on eligible pre-owned purchases."] },
                  { label: "FROM", value: "$75", title: "Farfetch Women’s Accessories – Starting From $75", desc: "Discover designer women’s accessories starting from just $75 and shop stylish pieces at attractive prices.", bullets: ["Explore a variety of accessories to complete your wardrobe, from everyday essentials to statement fashion pieces.", "Check for a Farfetch discount code or Farfetch voucher before shopping to make the most of eligible offers."] },
                  { label: "FROM", value: "$147", title: "Farfetch Accessories – Starting From $147", desc: "Shop designer accessories starting from $147 and discover stylish pieces at competitive prices.", bullets: ["Explore hats, belts and more fashionable accessories designed to add the finishing touch to your look.", "Search for a Farfetch code coupon or Farfetch discount coupon to find extra savings on eligible accessories."] },
                  { label: "SALE", value: "30% OFF", title: "Farfetch – Sergio Moretti Firenze Slingback Sandals | 30% OFF", desc: "Get the Sergio Moretti Firenze suede slingback sandals for $108 instead of $154 — save 30%.", bullets: ["Complete your designer wardrobe with these elegant suede sandals featuring a sophisticated slingback design.", "Use a Farfetch sale coupon or Farfetch discount code to look for additional savings on selected footwear."] },
                  { label: "SALE", value: "25% OFF", title: "Farfetch – Palm Angels Logo Waistband Mockneck Top | 25% OFF", desc: "Shop the Palm Angels logo waistband mockneck top for $131, reduced from $185 — save 25%.", bullets: ["Explore Farfetch Palm Angels styles and add this contemporary designer top to your seasonal wardrobe.", "Check for a Farfetch sale promo code or Farfetch offer code to unlock potential savings on eligible Palm Angels purchases."] },
                  { label: "NEW", value: "OFF-WHITE", title: "Farfetch – Off-White Designer Fashion Collection", desc: "Discover the latest Off-White designer fashion and explore statement clothing, footwear and accessories on Farfetch.", bullets: ["Shop Farfetch Off White styles and find distinctive pieces to elevate your designer wardrobe.", "Look for a Farfetch voucher, Farfetch discount code or promocode for Farfetch before placing an eligible order."] },
                  { label: "NEW", value: "FENDI", title: "Farfetch – Fendi Baguette Collection", desc: "Explore the iconic Fendi Baguette collection and discover luxury handbags and designer accessories on Farfetch.", bullets: ["Find statement pieces from the Fendi Baguette range and shop a selection of premium designer styles.", "Check Farfetchcom for the latest Farfetch voucher code, discount offers and eligible sale promotions."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Farfetch: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Farfetch?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Farfetch is a global online luxury fashion marketplace that connects shoppers with fashion brands and boutiques from around the world. Rather than functioning like a traditional single-brand retailer, Farfetch brings together products from a wide network of luxury fashion labels and independent boutiques.

                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform features a broad selection of designer clothing, shoes, handbags, accessories, jewelry, watches, beauty products, and other fashion items. Its assortment includes established luxury houses as well as contemporary and emerging designers.

                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Farfetch is particularly useful for shoppers who want access to a wide variety of international fashion without visiting multiple boutiques or brand websites individually.
                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform caters to both men's and women's fashion, with collections covering everything from everyday designer pieces to statement items intended for special occasions.

                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    For shoppers who enjoy discovering new labels, Farfetch can also be a useful destination for exploring designers and styles that may not be readily available through local retailers.

                  </p>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Because the marketplace brings together products from different brands and boutiques, availability, shipping options, promotions, and return conditions can vary depending on the individual item.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Shirt, name: "Designer Fashion", count: "600+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Footprints, name: "Footwear", count: "250+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: ShoppingBag, name: "Accessories", count: "300+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: Sparkles, name: "Access Rewards", count: "50+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Search, name: "New Arrivals", count: "180+", color: "text-orange-500", href: "/categories/fashion" },
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
    How to Find Better Farfetch Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Checkout",
        sub: "Before completing your order, check CouponsBit for the latest Farfetch promo code, coupon codes, discounts, vouchers, and other fashion offers.",
      },
      {
        icon: ShoppingBag,
        title: "Browse the Sale Section",
        sub: "Farfetch's sale selection can be useful when you're looking for designer fashion at a reduced price.",
      },
      {
        icon: Shirt,
        title: "Compare Different Designers",
        sub: "If you're shopping for a particular type of product rather than a specific brand, compare several designers to find a style and offer that suits your budget.",
      },
      {
        icon: Calendar,
        title: "Look for Seasonal Promotions",
        sub: "Spring, summer, fall, holiday shopping, Black Friday, and Cyber Monday can all be useful periods to check for fashion promotions.",
      },
      {
        icon: Watch,
        title: "Consider Accessories",
        sub: "If a full designer outfit isn't within your budget, accessories such as wallets, belts, scarves, jewelry, or sunglasses can provide a more accessible way to shop a luxury label.",
      },
      {
        icon: ShieldAlert,
        title: "Check Product Eligibility",
        sub: "Before relying on a discount, make sure the products in your cart qualify. Some promotional codes may exclude sale items or particular designers.",
      },
      {
        icon: Receipt,
        title: "Review the Final Cost",
        sub: "Always check the complete checkout amount, including applicable shipping costs, taxes, and other charges, before completing your purchase.",
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
          Farfetch Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border border-gray-200 bg-white shadow-sm">
  <table className="w-full min-w-[850px] border-collapse text-left" aria-label="Farfetch Offers Summary">
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
          Farfetch Promo Code – TechnoMarine Coral Legacy 36mm Watch | 75% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          75% OFF ($91)
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Final-sale designer watch reduced from $400 original price
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          TechnoMarine Coral Legacy Watch
        </td>
      </tr>

    
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch Promo Code – SS26 Sale | Up To 70% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Up to 70% OFF
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Valid on selected seasonal styles across clothing, footwear, and accessories
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          SS26 Collection Items
        </td>
      </tr>

  
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch Promo Code – Philipp Plein Logo Leather Sneakers | 70% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          70% OFF ($195)
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Limited-time sale discount applied on premium Philipp Plein footwear
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Philipp Plein Logo Leather Sneakers
        </td>
      </tr>

      
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch Designer Kidswear & Baby Essentials | Up To 70% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Up to 70% OFF
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          Farfetch Members
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Exclusive Members Sale pricing on selected kids and baby items (Diesel, Lanvin, etc.)
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Designer Kidswear & Baby Essentials
        </td>
      </tr>

      
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch Women’s Clothing Sale – Up To 60% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Up to 60% OFF
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Applies to selected women's apparel and designer apparel styles
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Women's Clothing Collection
        </td>
      </tr>

     
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch – Maje Cropped Tweed Jacket | 50% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          50% OFF ($280)
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Save $280 compared to the original price of $560
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Maje Cropped Tweed Jacket
        </td>
      </tr>

      
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch – Moon Boot Icon Fleece Lace-Up Boots | $261
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          From $261
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Special promotional price on selected fleece lace-up footwear
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Moon Boot Icon Fleece Boots
        </td>
      </tr>

     
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch Free Shipping Offer – Free Shipping On Orders Over $400
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Free Shipping
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          Orders Over $400
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Automatically applied on qualifying totals; includes 30-day free returns
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Entire Order ($400+)
        </td>
      </tr>

      
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch Voucher – Pre-Owned Styles | 15% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          15% OFF
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Valid on eligible pre-owned clothing and vintage fashion styles
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Pre-Owned Styles Collection
        </td>
      </tr>

      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch Women’s Accessories – Starting From $75
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          From $75
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Starting prices on selected women's designer fashion accessories
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Women's Designer Accessories
        </td>
      </tr>

   
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch Accessories – Starting From $147
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          From $147
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Covers hats, belts, and luxury wardrobe essentials
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Farfetch Accessories Range
        </td>
      </tr>

    
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch – Sergio Moretti Firenze Slingback Sandals | 30% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          30% OFF ($108)
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Reduced from regular price of $154 on suede slingback styles
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Sergio Moretti Firenze Sandals
        </td>
      </tr>

   
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch – Palm Angels Logo Waistband Mockneck Top | 25% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          25% OFF ($131)
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Reduced from $185 original price on selected designer apparel
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Palm Angels Mockneck Top
        </td>
      </tr>

      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch – Off-White Designer Fashion Collection
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Special Pricing
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Featured collection pricing on clothing, footwear, and accessories
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Off-White Designer Fashion
        </td>
      </tr>


      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50 last:border-b-0">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Farfetch – Fendi Baguette Collection
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Special Pricing
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Check website for live promotional prices on luxury handbags and accessories
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Fendi Baguette Collection
        </td>
      </tr>

    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Luxury fashion can make a statement, but finding a better way to shop for it can make the experience even more rewarding. From designer handbags and statement sneakers to premium clothing, jewelry, watches, and accessories, Farfetch brings together fashion from brands and boutiques around the world.
          </p>
          <p>
            If you're planning a designer purchase, checking for a Farfetch promo code before checkout can be a smart place to start. CouponsBit helps shoppers discover Farfetch coupon codes, discount offers, vouchers, sale promotions, and other opportunities to potentially save on their next fashion purchase.
          </p>
          <p>
            Whether you're searching for a new-season wardrobe piece, hunting for a designer gift, or waiting for a major sale event, comparing available offers before completing your order can help you make a more informed purchase.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a Farfetch Promo Code</h3>
    <p>A Farfetch promo code can help you look for savings on an eligible order when a promotion is available.</p>
    <p>Before purchasing a designer item, check CouponsBit for the latest Farfetch offers. You may find a promotional code that applies to your order or discover another deal that works better for your selected products.</p>
    <p>Promotional codes can come with specific conditions. Some may be available only during particular campaigns, while others may apply to selected products, customers, or order values.</p>
    <p>Always review the terms of an offer before using it. Pay attention to expiration dates, product exclusions, minimum purchase requirements, and any other eligibility conditions.</p>
    <p>If one code isn't suitable for your order, compare it with other available Farfetch promotions before checking out.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Farfetch Coupon Code and Discount Offers</h3>
    <p>A Farfetch coupon code is one way to look for savings, but it isn't the only type of promotion worth checking.</p>
    <p>Depending on the current campaign, shoppers may find discounts on selected designers, seasonal collections, sale items, or qualifying purchases.</p>
    <p>For example, if you're already shopping during a seasonal sale, an additional eligible promotion could potentially provide more value. On the other hand, a broader promotional offer may be more useful when your order contains full-price items.</p>
    <p>The best option depends on what you're buying.</p>
    <p>Before completing your purchase, compare the applicable offer with your selected products and check whether the promotion can actually be applied.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Explore Farfetch's Fashion Selection</h3>
    <p>Farfetch brings together an extensive selection of luxury and designer fashion. Product availability changes regularly, but shoppers can explore a wide range of categories.</p>
    <p><strong>Women's Clothing:</strong> Women's collections can include dresses, tops, shirts, jackets, coats, knitwear, trousers, denim, skirts, activewear, and other designer clothing.</p>
    <p>Whether you're looking for a statement piece or something understated for everyday wear, the platform offers styles from a wide selection of fashion labels.</p>
    <p><strong>Men's Clothing:</strong> Men's fashion includes categories such as shirts, T-shirts, jackets, coats, suits, trousers, denim, knitwear, and other wardrobe essentials.</p>
    <p>You can also explore designer collections for formal occasions, casual outfits, and contemporary streetwear-inspired looks.</p>
    <p><strong>Designer Shoes:</strong> Farfetch offers a broad selection of footwear, including sneakers, boots, loafers, sandals, heels, flats, and other designer styles.</p>
    <p>Shoes can be one of the easiest ways to introduce a designer label into your wardrobe without completely changing your everyday style.</p>
    <p><strong>Handbags:</strong> From everyday shoulder bags and crossbody styles to statement handbags and evening pieces, Farfetch offers bags from numerous luxury and contemporary designers.</p>
    <p>If you're shopping for a particular designer, comparing different styles and sizes can help you find the right option.</p>
    <p><strong>Accessories:</strong> Accessories can completely change the look of an outfit. Farfetch features products such as belts, scarves, hats, sunglasses, wallets, and other fashion accessories.</p>
    <p><strong>Jewelry:</strong> Shoppers can discover designer jewelry including earrings, necklaces, bracelets, rings, and other pieces.</p>
    <p>Whether you're looking for everyday jewelry or a statement accessory for an event, the selection covers different styles and designers.</p>
    <p><strong>Watches:</strong> Luxury and designer watches are another major category on the platform.</p>
    <p>If you're considering a watch as an investment-style purchase or a special gift, compare designs, specifications, and brand collections carefully before ordering.</p>
    <p><strong>Beauty:</strong> Depending on the current assortment and market, Farfetch also offers beauty products from selected luxury and premium brands.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Farfetch Designer Fashion Deals</h3>
    <p>Luxury shopping doesn't always mean paying full retail price.</p>
    <p>Farfetch regularly features sale collections where shoppers can discover selected designer pieces at reduced prices. The available selection can change quickly, particularly when popular sizes or styles sell out.</p>
    <p>If you're flexible about color, size, season, or designer, browsing the sale section can uncover interesting options.</p>
    <p>You can also check CouponsBit for a Farfetch discount code before completing a purchase to see whether an additional eligible promotion is available.</p>
    <p>However, always compare the complete cost and check the terms of any promotion before making your decision.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Farfetch Sale and Seasonal Promotions</h3>
    <p>Fashion retailers often align their promotions with major seasons and shopping occasions. Farfetch shoppers can keep an eye on several important periods throughout the year.</p>
    <p><strong>Spring Fashion:</strong> Spring brings new collections, lighter fabrics, fresh colors, and seasonal wardrobe updates.</p>
    <p>If you're preparing for warmer weather, it can be a good time to browse new-season clothing, footwear, bags, and accessories.</p>
    <p><strong>Summer Sales:</strong> Summer is one of the major periods for fashion promotions. Seasonal markdowns can give shoppers an opportunity to find designer pieces from previous collections.</p>
    <p>If you're shopping during a summer sale, check whether a Farfetch coupon code can be applied to your selected items.</p>
    <p><strong>Back-to-School Season:</strong> Back-to-school shopping isn't limited to school supplies. Students and young professionals may also look for sneakers, bags, jackets, accessories, and everyday wardrobe pieces.</p>
    <p>Designer streetwear and footwear can be particularly appealing during this period.</p>
    <p><strong>Fall Fashion:</strong> Fall introduces new outerwear, knitwear, boots, tailoring, and layered looks.</p>
    <p>It's also a popular period for refreshing your wardrobe ahead of colder weather and upcoming holiday events.</p>
    <p><strong>Halloween:</strong> Halloween can inspire everything from statement accessories to party-ready fashion.</p>
    <p>Shoppers looking for distinctive pieces can explore designer accessories, footwear, and clothing for seasonal events.</p>
    <p><strong>Thanksgiving:</strong> Thanksgiving marks the beginning of the major US holiday shopping period.</p>
    <p>If you're preparing for holiday parties or searching for gifts, it's worth checking available Farfetch promotions before purchasing.</p>
    <p><strong>Black Friday:</strong> Black Friday is one of the biggest shopping events in the US and can be an important period for fashion shoppers.</p>
    <p>Designer sale collections and promotional campaigns can make this a useful time to browse Farfetch.</p>
    <p>Before checking out, look for a Farfetch promo code on CouponsBit and review the current offer terms.</p>
    <p><strong>Cyber Monday:</strong> Cyber Monday focuses heavily on online shopping, making it another important date for customers looking for fashion deals.</p>
    <p>If you missed a Black Friday offer or are continuing your holiday shopping, compare the available Farfetch promotions before purchasing.</p>
    <p><strong>Christmas and Holiday Shopping:</strong> The holiday season is one of the biggest gifting periods of the year.</p>
    <p>Farfetch offers plenty of options for shoppers looking for designer gifts, from handbags and jewelry to sneakers, accessories, watches, and clothing.</p>
    <p>Shopping early can be useful when you're looking for a particular designer or product, especially when popular items have limited availability.</p>
    <p><strong>New Year's Eve:</strong> New Year's Eve often calls for statement fashion, party-ready clothing, standout shoes, jewelry, and accessories.</p>
    <p>If you're putting together a special-event look, Farfetch can provide plenty of designer options to explore.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Farfetch for Designer Gifts</h3>
    <p>Luxury fashion can make a memorable gift, particularly when you choose something that reflects the recipient's personal style.</p>
    <p><strong>Gifts for Her:</strong> Depending on your budget, you can explore handbags, jewelry, shoes, accessories, clothing, beauty products, and other designer pieces.</p>
    <p><strong>Gifts for Him:</strong> Men's gift options can include sneakers, watches, wallets, belts, clothing, bags, accessories, and other fashion items.</p>
    <p><strong>Gifts for Special Occasions:</strong> Farfetch can also be useful for milestone birthdays, anniversaries, graduations, weddings, promotions, and other celebrations.</p>
    <p>When you're unsure about someone's exact style, accessories can be easier to choose than highly specific clothing.</p>
  </div>
</div>

          {/* Box Section: How to Use */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">
              How to Use a Farfetch Promo Code
            </h3>
            <p className="text-gray-600 font-medium -mt-4 mb-4">
              If you find a Farfetch promo code through CouponsBit, follow the instructions associated with that particular offer. A typical process may include:
            </p>
            <div className="space-y-6">
              {[
                "Find the Farfetch offer you want to use.",
                "Visit Farfetch and browse the available collections.",
                "Select the clothing, shoes, bags, accessories, or other products you want.",
                "Add your items to the shopping bag.",
                "Proceed to checkout.",
                "Enter the applicable promo code in the designated field.",
                "Apply the code.",
                "Check that the eligible discount has been reflected.",
                "Review shipping, taxes, and the complete order total.",
                "Complete your purchase."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium italic mt-4 pt-4 border-t border-gray-100">
              If the code doesn't work, check the promotion's expiration date and eligibility requirements. Some offers may exclude certain designers, products, sale items, or categories.
            </p>
          </div>

          {/* Section: Why Use */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Why Use CouponsBit for Farfetch Offers?
            </h3>
            <p>
              Designer shopping can represent a significant purchase, which makes finding a legitimate promotion even more valuable.
            </p>
            <p>
              CouponsBit gives shoppers a convenient place to check for a Farfetch promo code before making a purchase. You can also discover Farfetch coupon codes, discount offers, vouchers, sale promotions, and other potential savings.
            </p>
            <p>
              Rather than choosing the first offer you find, compare the available promotions with the products you're actually planning to buy. A discount on selected full-price items may be useful for one shopper, while a sale price on a designer piece could provide better value for another.
            </p>
            <p>
              The idea is simple: check your options before checkout and choose the offer that best fits your purchase.
            </p>
          </div>

          {/* Section: Find Your Next Deal */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Find Your Next Farfetch Deal
            </h3>
            <p>
              From a statement handbag to a pair of designer sneakers, a special gift, or a complete wardrobe refresh, Farfetch gives fashion shoppers access to an extensive range of international designers and boutiques.
            </p>
            <p>
              Because designer products and promotions can change quickly, checking for a saving before you place your order can be worthwhile.
            </p>
            <p>
              Before you check out, visit CouponsBit to find the latest Farfetch promo code, along with coupon codes, discount offers, vouchers, designer sale deals, and other fashion promotions. Compare the available offers with your selected products, review the terms, and choose the deal that works best for your purchase.
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
            Frequently Asked Questions About Farfetch Promo Codes
          </h3>
          {[
            { q: "Does Farfetch offer promo codes?", a: "Yes. Farfetch may offer promotional codes, seasonal campaigns, designer discounts, and other savings opportunities. Availability and eligibility can vary." },
            { q: "Where can I find a Farfetch promo code?", a: "You can check CouponsBit for available Farfetch promo codes, coupon codes, discount offers, vouchers, and fashion promotions before shopping." },
            { q: "How do I use a Farfetch coupon code?", a: "Add your selected products to your shopping bag, proceed to checkout, and enter the applicable coupon code in the promotional-code field. Confirm that the discount has been applied before completing your purchase." },
            { q: "Why isn't my Farfetch promo code working?", a: "The code may have expired or may not apply to the products in your order. Some promotions can exclude specific designers, sale products, categories, or customer groups." },
            { q: "Can I use a Farfetch discount code on sale items?", a: "It depends on the individual promotion. Some discount codes may apply to sale products, while others may exclude them. Check the terms of the offer before purchasing." },
            { q: "What does Farfetch sell?", a: "Farfetch offers a wide selection of luxury and designer fashion, including clothing, shoes, handbags, accessories, jewelry, watches, and selected beauty products." },
            { q: "Does Farfetch sell men's and women's fashion?", a: "Yes. Farfetch features both men's and women's collections, including clothing, footwear, accessories, bags, jewelry, and other fashion products." },
            { q: "Does Farfetch have designer sales?", a: "Yes. Farfetch features sale collections where shoppers can find selected designer products at reduced prices. The available selection can change frequently." },
            { q: "Does Farfetch have Black Friday deals?", a: "Farfetch may run promotions around Black Friday and the broader holiday shopping period. Check current offers and eligibility before purchasing." },
            { q: "Does Farfetch offer Cyber Monday discounts?", a: "Farfetch may feature online promotions around Cyber Monday. Available deals and participating products can change." },
            { q: "When is the best time to look for Farfetch deals?", a: "Promotions can appear throughout the year. Seasonal sales, Black Friday, Cyber Monday, and the holiday shopping period can be particularly useful times to check." },
            { q: "How can I save money on Farfetch?", a: "Start by checking CouponsBit for a Farfetch promo code, then compare it with sale prices, seasonal promotions, vouchers, and other available offers. Always check product eligibility and the final checkout total before completing your order." }
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
            Popular Farfetch Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Farfetch Promo Code",
              "Designer Shoes",
              "Luxury Handbags",
              "Streetwear Deals",
              "First Order Discount",
              "Seasonal Sale",
              "New In Fashion",
              "Express Shipping"
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
            Today's Top Farfetch Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "75% OFF", sub: "TechnoMarine Coral Legacy 36mm Watch | 75% OFF" },
              { heading: "SS26 SALE", sub: "SS26 Sale | Up To 70% OFF" },
              { heading: "70% OFF", sub: "Philipp Plein Logo Leather Sneakers | 70% OFF" },
              { heading: "FREE SHIP", sub: "Free Shipping On Orders Over $400" }
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
                  href="https://www.farfetch.com/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  aria-label={`Shop Farfetch: ${deal.heading}`} 
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
