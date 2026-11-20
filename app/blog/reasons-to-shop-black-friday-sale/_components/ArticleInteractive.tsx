"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle,
  MessageCircle,
  Twitter,
  Facebook,
  Link as LinkIcon,
  Laptop,
  Plane,
  Tv,
  Code,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

export default function ArticleInteractive() {
  const [showToast, setShowToast] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const sections = [
    { id: "get-better-deals", title: "Get Better Deals on Products You Already Need" },
    { id: "find-discounts-multiple-categories", title: "Find Discounts Across Multiple Shopping Categories" },
    { id: "save-on-holiday-gifts", title: "Save on Holiday Gifts Before December Arrives" },
    { id: "make-expensive-purchases-affordable", title: "Make Expensive Purchases More Affordable" },
    { id: "combine-sale-promo-codes", title: "Combine Sale Offers With Promo Codes for Additional Savings" },
    { id: "how-to-shop-smart", title: "How to Shop Smart During Black Friday" },
    { id: "make-the-most-couponsbit", title: "Make the Most of Black Friday With CouponsBit" },
    { id: "final-thoughts", title: "Final Thoughts" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#056bfa] z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-[80px] right-4 z-[70] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-[12px] px-[18px] py-[12px] flex items-center gap-[10px] animate-in slide-in-from-right duration-300">
          <CheckCircle className="w-[18px] h-[18px] text-[#22c55e]" />
          <span className="text-black font-bold text-sm">Copied!</span>
        </div>
      )}

      <main>
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-3 flex items-center gap-2">
            <Link href="/" className="text-[#056bfa] text-sm hover:underline">Home</Link>
            <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
            <Link href="/blog" className="text-[#056bfa] text-sm hover:underline">Blog</Link>
            <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">5 Reasons to Shop Black Friday</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN */}
            <article className="w-full lg:w-[65%]">
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">DEAL ALERTS</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">6 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">November 17, 2026</span>
                  </div>
                </div>

                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  Top 5 Reasons to Shop During the Black Friday Sale
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/zzlsqavg/image/upload/v1794915843/reasons-to-shop-black-friday-sale.webp"
                    alt="Top 5 Reasons to Shop During the Black Friday Sale"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  Black Friday brings together seasonal discounts, gift-shopping opportunities, and promo code savings
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    "Black Friday can be a great opportunity to purchase things you already need, save on bigger expenses, and get more value from your holiday shopping budget."
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">

                <p className="mb-5">
                  Black Friday is one of the biggest shopping events of the year in the United States. Every year, millions of shoppers look forward to this annual sale to find discounts on electronics, clothing, home essentials, beauty products, appliances, gifts, and much more.
                </p>
                <p className="mb-5">
                  But Black Friday is about more than eye-catching sale banners and limited-time offers. When approached with a little planning, it can be a great opportunity to purchase things you already need, save on bigger expenses, and get more value from your holiday shopping budget.
                </p>
                <p className="mb-5">
                  Whether you're preparing for the holiday season, upgrading your home, or simply waiting for the right time to buy something expensive, here are <strong>five reasons why shopping during the Black Friday sale can be worth it.</strong>
                </p>

                {/* Section 1 */}
                <h2 id="get-better-deals" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  1. Get Better Deals on Products You Already Need
                </h2>
                <p className="mb-5">
                  One of the biggest reasons to shop during Black Friday is the opportunity to save on planned purchases.
                </p>
                <p className="mb-5">
                  Think about the items you've been meaning to buy for months. Perhaps you need a new laptop, want to replace an old television, or have been waiting to purchase a kitchen appliance. Black Friday can bring attractive discounts on products across these categories.
                </p>
                <p className="mb-5">
                  Instead of making an unplanned purchase just because something is on sale, make a list of the things you genuinely need. Then compare their regular prices with the advertised Black Friday offers.
                </p>
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                  <p className="text-[#4b5563] text-sm">
                    <strong>Why it matters:</strong> You can use seasonal discounts to reduce the cost of necessary purchases rather than spending money on products you never intended to buy.
                  </p>
                </div>

                {/* Section 2 */}
                <h2 id="find-discounts-multiple-categories" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  2. Find Discounts Across Multiple Shopping Categories
                </h2>
                <p className="mb-5">
                  Black Friday isn't limited to electronics anymore. Retailers across the US participate in the shopping event, offering deals on a wide range of products and services.
                </p>
                <p className="mb-3">Some popular categories to explore include:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li><strong>Electronics:</strong> Smartphones, laptops, headphones, televisions, gaming accessories, and smart home devices.</li>
                  <li><strong>Fashion:</strong> Clothing, footwear, handbags, winter wear, and accessories.</li>
                  <li><strong>Home and Kitchen:</strong> Furniture, mattresses, cookware, appliances, and home décor.</li>
                  <li><strong>Beauty and Personal Care:</strong> Skincare, makeup, haircare, and grooming products.</li>
                  <li><strong>Travel:</strong> Hotel bookings, luggage, travel accessories, and selected travel services.</li>
                  <li><strong>Toys and Gifts:</strong> Games, toys, hobby products, and holiday presents.</li>
                </ul>
                <p className="mb-5">
                  This variety makes Black Friday useful for shoppers with different needs. You can compare offers across retailers and potentially complete several planned purchases during the same shopping season.
                </p>

                {/* Section 3 */}
                <h2 id="save-on-holiday-gifts" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  3. Save on Holiday Gifts Before December Arrives
                </h2>
                <p className="mb-5">
                  Black Friday arrives at a particularly useful time for holiday shoppers. With Thanksgiving behind them and Christmas approaching, many Americans use this shopping event to get their gift shopping started.
                </p>
                <p className="mb-5">
                  Buying gifts early can offer two advantages. First, you get an opportunity to explore seasonal discounts before the final holiday rush. Second, you have more time to compare products, check delivery estimates, and choose something that genuinely suits the recipient.
                </p>
                <p className="mb-3">You can look for gifts such as:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Headphones and tech accessories for gadget lovers.</li>
                  <li>Clothing, shoes, and bags for friends and family.</li>
                  <li>Skincare and beauty sets for personal-care enthusiasts.</li>
                  <li>Kitchen gadgets and home accessories for new homeowners.</li>
                  <li>Toys, books, and games for children.</li>
                </ul>
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                  <p className="text-[#4b5563] text-sm">
                    <strong>A useful tip:</strong> Don't wait until the last minute to check shipping deadlines. A discounted gift isn't much help if it doesn't arrive in time for the occasion.
                  </p>
                </div>

                {/* Section 4 */}
                <h2 id="make-expensive-purchases-affordable" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  4. Make Expensive Purchases More Affordable
                </h2>
                <p className="mb-5">
                  Some purchases are easier to postpone because of their higher price. A new laptop, refrigerator, mattress, or home entertainment system can take a considerable portion of your budget.
                </p>
                <p className="mb-5">
                  Black Friday may provide an opportunity to purchase these items at a lower price, depending on the retailer and product. Even a modest percentage discount can make a noticeable difference when you're buying something expensive.
                </p>
                <p className="mb-5">
                  However, don't assume every Black Friday offer represents the lowest price of the year. Check the product's price history where possible, compare competing retailers, and review the specifications before making a decision.
                </p>
                <p className="mb-5">
                  Also, remember to consider the full cost of your purchase, including shipping, taxes, warranties, and any additional fees.
                </p>
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                  <p className="text-[#4b5563] text-sm">
                    <strong>The smart approach:</strong> Focus on the final amount you'll pay, not just the percentage discount displayed on the product page.
                  </p>
                </div>

                {/* Section 5 */}
                <h2 id="combine-sale-promo-codes" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  5. Combine Sale Offers With Promo Codes for Additional Savings
                </h2>
                <p className="mb-5">
                  Here's one Black Friday shopping tip worth remembering: the advertised sale price may not always be the final price you can get.
                </p>
                <p className="mb-5">
                  Some retailers offer additional savings through eligible promo codes, coupon codes, or special checkout promotions. Depending on the retailer's terms, these offers may help you reduce your total bill further.
                </p>
                <p className="mb-3">Before completing your purchase:</p>
                <ol className="list-decimal list-inside space-y-1 mb-4 pl-2">
                  <li>Check whether the retailer has an active Black Friday promo code.</li>
                  <li>Read the offer's terms, including minimum order requirements and product exclusions.</li>
                  <li>See whether the code applies to sale items.</li>
                  <li>Compare the final checkout price with other retailers.</li>
                  <li>Confirm that the discount has been applied before placing your order.</li>
                </ol>
                <p className="mb-5">
                  You can also explore <Link href="/" className="text-[#056bfa] hover:underline">CouponsBit</Link> to discover coupon codes, promo codes, and available deals from popular retailers. Checking for an applicable offer before checkout is a simple habit that can help you avoid missing out on additional savings.
                </p>

                {/* Section 6 */}
                <h2 id="how-to-shop-smart" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  How to Shop Smart During Black Friday
                </h2>
                <p className="mb-5">
                  Black Friday can offer plenty of opportunities, but a little preparation makes a big difference. Keep these practical tips in mind:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li><strong>Set a budget:</strong> Decide how much you can comfortably spend before browsing sales.</li>
                  <li><strong>Make a shopping list:</strong> Prioritise products you actually need or have planned to purchase.</li>
                  <li><strong>Compare prices:</strong> Check more than one retailer instead of relying on the first discount you see.</li>
                  <li><strong>Read product reviews:</strong> Look at verified customer feedback and product specifications before buying.</li>
                  <li><strong>Check return policies:</strong> Understand the retailer's return window, refund rules, and any restocking fees.</li>
                  <li><strong>Watch out for misleading discounts:</strong> Compare the current price with previous prices where possible.</li>
                  <li><strong>Shop securely:</strong> Buy from trusted retailers and use secure payment methods.</li>
                </ul>
                <p className="mb-5">
                  These steps can help you make better purchasing decisions without getting carried away by the excitement of a major sale.
                </p>

                {/* Section 7 */}
                <h2 id="make-the-most-couponsbit" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Make the Most of Black Friday With CouponsBit
                </h2>
                <p className="mb-5">
                  Black Friday is a good time to revisit your shopping list, compare retailers, and look for opportunities to save on purchases you've already planned.
                </p>
                <p className="mb-5">
                  But don't stop at the advertised sale price. Before checking out, take a moment to look for an eligible coupon code, promo code, or additional discount.
                </p>
                <p className="mb-5">
                  At <Link href="/" className="text-[#056bfa] hover:underline">CouponsBit</Link>, you can explore deals and discount codes across different shopping categories and popular US retailers. You can also visit individual store pages, such as the <Link href="/stores/amazon-coupon-code" className="text-[#056bfa] hover:underline">Amazon coupon code page</Link>, to check for available savings before placing an order.
                </p>

                {/* Section 8 */}
                <h2 id="final-thoughts" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Final Thoughts
                </h2>
                <p className="mb-5">
                  Black Friday is worth considering because it brings together seasonal discounts, offers across multiple shopping categories, and opportunities to get ahead with holiday shopping. It can also make planned big-ticket purchases more affordable and give shoppers another chance to use eligible promo codes.
                </p>
                <p className="mb-5">
                  The key is to shop with a plan. Compare prices, check product quality, understand the offer conditions, and buy what you genuinely need.
                </p>
                <p className="mb-5">
                  <strong>A good Black Friday deal isn't simply the product with the biggest discount. It's the purchase that gives you the best value for your money.</strong>
                </p>
              </div>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
                {["Black Friday", "Promo Code", "Holiday Deals", "CouponsBit", "Shopping Tips", "Deal Alerts"].map((tag, i) => (
                  <span key={i} className="bg-[#f5f5f5] text-[#4b5563] text-[11px] font-medium rounded-full px-4 py-1.5 hover:bg-[#e8f6f8] hover:text-[#056bfa] transition-colors duration-300 cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Share this article:</span>
                <button className="bg-[#25D366] text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                  <MessageCircle className="w-4 h-4 fill-white" /> Share on WhatsApp
                </button>
                <button className="bg-black text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                  <Twitter className="w-3.5 h-3.5 fill-white" /> Share on Twitter
                </button>
                <button className="bg-[#1877F2] text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                  <Facebook className="w-4 h-4 fill-white" /> Share on Facebook
                </button>
                <button onClick={() => copyToClipboard(typeof window !== "undefined" ? window.location.href : "")} className="bg-[#f5f5f5] text-[#374151] rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:bg-[#e8f6f8] transition-all">
                  <LinkIcon className="w-3.5 h-3.5" /> Copy Link
                </button>
              </div>
            </article>

            {/* RIGHT SIDEBAR */}
            <aside className="w-full lg:w-[35%] h-fit">

              {/* TOC */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mb-5">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>📋</span> Table of Contents
                </h4>
                <div className="space-y-1">
                  {sections.map((section, i) => (
                    <a
                      key={i}
                      href={`#${section.id}`}
                      className={`flex items-start gap-3 py-2.5 group ${i !== sections.length - 1 ? "border-b border-[#f5f5f5]" : ""}`}
                    >
                      <span className="text-[#056bfa] font-bold text-[11px] mt-1 shrink-0">{(i + 1).toString().padStart(2, "0")}</span>
                      <span className="text-gray-600 text-[13px] group-hover:text-[#056bfa] transition-colors leading-[1.4]">{section.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Popular Stores */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🛍️</span> Popular Stores
                </h4>
                <div className="space-y-4">
                  {[
                    { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up to 50% OFF", href: "/stores/amazon-discount-code" },
                    { name: "Airalo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/airalo-logo_fc6u6p.webp", dealText: "Save with AC10ALL", href: "/stores/airalo-discount-code" },
                    { name: "Bluehost", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp", dealText: "Up to 69% OFF", href: "/stores/bluehost-discount-code" },
                    { name: "TrainPal", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp", dealText: "Up to 50% OFF", href: "/stores/trainpal-discount-code" },
                    { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/sungait-logo_tfolql.webp", dealText: "Save with CLOUDS15", href: "/stores/sungait-discount-code" },
                    { name: "Kerala Ayurveda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg", dealText: "Save with COUNTNEW10", href: "/stores/kerala-ayurveda-discount-code" },
                  ].map((store, i) => (
                    <Link
                      key={store.name}
                      href={store.href}
                      className={`flex items-center gap-3 pb-4 group ${i !== 5 ? "border-b border-[#f0f0f0]" : ""}`}
                    >
                      <div className="w-14 h-14 shrink-0 rounded-xl border border-[#f0f0f0] bg-white flex items-center justify-center overflow-hidden">
                        <img src={store.logo} alt={store.name} width={56} height={56} loading="lazy" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-bold text-[15px] truncate group-hover:text-[#056bfa] transition-colors">{store.name}</p>
                        <p className="text-[#056bfa] text-[13px] font-semibold truncate">{store.dealText}</p>
                      </div>
                      <span className="text-[#056bfa] text-[12px] font-bold uppercase tracking-wide shrink-0">View →</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Store Categories */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mt-5">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🗂️</span> Store Categories
                </h4>
                <div className="space-y-1">
                  {[
                    { icon: Laptop, name: "Electronics",        count: "850+", color: "text-blue-500",   href: "/categories/electronics" },
                    { icon: Plane,  name: "Travel",             count: "420+", color: "text-teal-500",   href: "/categories/travel" },
                    { icon: Tv,     name: "Entertainment",      count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                    { icon: Code,   name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                    { icon: Zap,    name: "Mobile & Telecom",   count: "320+", color: "text-green-500",  href: "/categories/mobile" },
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
            </aside>
          </div>
        </div>

        {/* Continue Reading */}
        <section className="bg-white py-20 border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-[2px] w-10 sm:w-16 bg-[#056bfa]/20"></span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center">
                Continue <span className="text-[#056bfa]">Reading</span>
              </h2>
              <span className="h-[2px] w-10 sm:w-16 bg-[#056bfa]/20"></span>
            </div>
            <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
              Discover more shopping guides, coupon tips, and seasonal savings from CouponsBit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  image: "/blog/amazon-shopping-tips-find-better-deals.webp",
                  date: "November 4, 2026",
                  readTime: "8 MIN READ",
                  title: "Shopping on Amazon? Find Better Deals and Save More",
                  desc: "Shop smarter on Amazon with practical tips to compare products, spot genuine discounts, use coupons, and find more savings with CouponsBit.",
                  href: "/blog/amazon-shopping-tips-find-better-deals",
                },
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1000,c_limit/v1783077516/how-to-save-money-shopping-online_h5gv1z.webp",
                  date: "July 3, 2026",
                  readTime: "6 MIN READ",
                  title: "How to Save Money While Shopping Online in 2026",
                  desc: "Learn how to save money online in 2026 with proven shopping tips, coupon strategies, cashback tricks, and exclusive deals from CouponsBit.",
                  href: "/blog/how-to-save-money-shopping-online",
                },
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1787725876/upcoming-sales-2026_nqxs3z.webp",
                  date: "June 23, 2026",
                  readTime: "6 MIN READ",
                  title: "The Biggest U.S. Sales Coming Up in 2026",
                  desc: "Explore the ultimate guide to upcoming sales in 2026. Find the best coupon codes, promo offers, and major shopping dates to maximize your savings.",
                  href: "/blog/upcoming-sales-2026",
                },
              ].map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden hover:shadow-lg hover:border-[#056bfa] transition-all duration-300 group flex flex-col"
                >
                  <div className="w-full h-[200px] shrink-0 relative overflow-hidden">
                    <img src={post.image} alt={post.title} width={400} height={200} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500 text-xs font-medium uppercase">{post.date}</span>
                      <span className="text-gray-300" aria-hidden="true">•</span>
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500 text-xs uppercase font-medium">{post.readTime}</span>
                    </div>
                    <h3 className="text-[#056bfa] font-extrabold text-lg leading-tight mb-2.5 group-hover:text-[#0451c4] transition-all line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{post.desc}</p>
                    <span className="text-[#056bfa] font-bold text-sm flex items-center gap-1 uppercase tracking-wide group-hover:gap-2 transition-all duration-300">
                      READ MORE <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
