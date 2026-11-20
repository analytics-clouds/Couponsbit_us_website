"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Users, TrendingUp, Clock, ArrowRight, Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const posts = [
  {
    href: "/blog/amd-vs-nvidia-ai-chip-war",
    image: "https://res.cloudinary.com/zzlsqavg/image/upload/v1795154734/amd-vs-nvidia-ai-chip-war.webp",
    alt: "AMD vs NVIDIA: Is the AI Chip War Changing?",
    category: "TECH NEWS",
    categoryBg: "bg-purple-500",
    date: "November 20, 2026",
    readTime: "4 MIN READ",
    title: "AMD vs NVIDIA: Is the AI Chip War Changing?",
    desc: "Discover how AMD is challenging NVIDIA in AI chips and what their growing competition could mean for technology and consumers.",
  },
  {
    href: "/blog/reasons-to-shop-black-friday-sale",
    image: "https://res.cloudinary.com/zzlsqavg/image/upload/v1794915843/reasons-to-shop-black-friday-sale.webp",
    alt: "Top 5 Reasons to Shop During the Black Friday Sale",
    category: "DEAL ALERTS",
    categoryBg: "bg-orange-500",
    date: "November 17, 2026",
    readTime: "6 MIN READ",
    title: "Top 5 Reasons to Shop During the Black Friday Sale",
    desc: "Discover 5 reasons to shop during the Black Friday sale in the US. Find seasonal deals, save on gifts, compare prices, and use promo codes.",
  },
  {
    href: "/blog/reasons-to-use-promo-code-before-buying",
    image: "/blog/reasons-to-use-promo-code-before-buying.webp",
    alt: "Top 5 Reasons to Use a Promo Code Before Buying Anything",
    category: "COUPON GUIDES",
    categoryBg: "bg-[#056bfa]",
    date: "November 13, 2026",
    readTime: "6 MIN READ",
    title: "Top 5 Reasons to Use a Promo Code Before Buying Anything",
    desc: "Discover 5 reasons to use a promo code before buying anything. Learn how promo codes help you save money, shop smarter, and get better value.",
  },
  {
    href: "/blog/veterans-day-2026-ways-to-honour-veterans",
    image: "https://res.cloudinary.com/zzlsqavg/image/upload/v1793866032/veterans-day-2026-ways-to-honour-veterans.webp",
    alt: "Veterans Day 2026: Ways to Honour Our Heroes",
    category: "TIPS",
    categoryBg: "bg-green-500",
    date: "November 5, 2026",
    readTime: "5 MIN READ",
    title: "Veterans Day 2026: Ways to Honour Our Heroes",
    desc: "Discover the meaning of Veterans Day 2026, its history, celebration ideas, and thoughtful ways to honour the brave men and women who served.",
  },
  {
    href: "/blog/amazon-shopping-tips-find-better-deals",
    image: "/blog/amazon-shopping-tips-find-better-deals.webp",
    alt: "Shopping on Amazon? Find Better Deals and Save More",
    category: "SHOPPING TIPS",
    categoryBg: "bg-teal-500",
    date: "November 4, 2026",
    readTime: "8 MIN READ",
    title: "Shopping on Amazon? Find Better Deals and Save More",
    desc: "Shop smarter on Amazon with practical tips to compare products, spot genuine discounts, use coupons, and find more savings with CouponsBit.",
  },
  {
    href: "/blog/halloween-fun-ideas-costumes-parties",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1793359590/halloween-fun-ideas-costumes-parties_ywte6e.webp",
    alt: "Halloween Fun Ideas for Costumes, Parties and Trick-or-Treating",
    category: "TIPS",
    categoryBg: "bg-green-500",
    date: "October 30, 2026",
    readTime: "6 MIN READ",
    title: "Halloween Is Almost Here: Fun Ideas for Everyone",
    desc: "Get ready for Halloween with fun costume ideas, trick-or-treating, spooky decorations, party games, and last-minute shopping tips from CouponsBit.",
  },
  {
    href: "/blog/iphone-duo-apple-commitment-consumer-reactions",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1793012026/Apple_s_Foldable_iPhone_Duo_Revealed_ohjnmd.webp",
    alt: "iPhone Duo: Apple's Commitment and Consumer Reactions",
    category: "TECH NEWS",
    categoryBg: "bg-purple-500",
    date: "October 23, 2026",
    readTime: "7 MIN READ",
    title: "iPhone Duo: Apple's Commitment and What Consumers Really Think",
    desc: "Explore Apple's first foldable iPhone — its premium design, foldable display, consumer reactions, and whether the $1,999 price tag delivers real value.",
  },
  {
    href: "/blog/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1792742394/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes_bvz06w.webp",
    alt: "Spirit Halloween vs Amazon vs Wish.com: Budget Halloween Costumes 2026",
    category: "DEAL ALERTS",
    categoryBg: "bg-orange-500",
    date: "October 23, 2026",
    readTime: "6 MIN READ",
    title: "Spirit Halloween vs Amazon vs Wish.com: Budget Costumes",
    desc: "Compare Spirit Halloween, Amazon, and Wish.com for budget Halloween costumes in 2026. Explore affordable costume ideas and tips to save with CouponsBit.",
  },
  {
    href: "/blog/best-web-hosting-coupons-2026",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1792143842/best-web-hosting-coupons-2026_kuuoi7.webp",
    alt: "Best Web Hosting Coupons 2026: Bluehost vs Hostinger",
    category: "COUPON GUIDES",
    categoryBg: "bg-[#056bfa]",
    date: "October 16, 2026",
    readTime: "14 MIN READ",
    title: "Best Web Hosting Coupons 2026: Bluehost vs Hostinger",
    desc: "Compare the best web hosting coupons for 2026 from Bluehost, Hostinger, ScalaHosting, SiteGround, and TMD Hosting. Find hosting deals and save more with CouponsBit.",
  },
  {
    href: "/blog/vivid-seats-discount-code-best-ticket-deals-2026",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1791895197/vivid-seats-discount-code-best-ticket-deals-2026_bnsuht.webp",
    alt: "Vivid Seats Discount Code: Best Deals on Concerts & Sports Tickets 2026",
    category: "DEAL ALERTS",
    categoryBg: "bg-orange-500",
    date: "October 13, 2026",
    readTime: "8 MIN READ",
    title: "Vivid Seats Discount Code: Best Deals on Concerts & Sports Tickets 2026",
    desc: "Find Vivid Seats discount codes for October 2026 and explore concert and sports ticket deals, promo offers, rewards, and tips to save with CouponsBit.",
  },
  {
    href: "/blog/halloween-shopping-guide-2026",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1791548920/halloween-shopping-guide-2026_ctk0zx.webp",
    alt: "Halloween Shopping Guide 2026 – Best Halloween Coupon Codes & Deals",
    category: "DEAL ALERTS",
    categoryBg: "bg-orange-500",
    date: "October 9, 2026",
    readTime: "5 MIN READ",
    title: "Halloween Shopping Guide 2026: Spooky Deals You Can't Miss",
    desc: "Celebrate Halloween 2026 for less with the best Halloween coupon codes, promo codes, and shopping deals. Save on costumes, decorations, candy, party supplies, and beauty products with CouponsBit.",
  },
  {
    href: "/blog/why-shop-through-coupon-and-cashback-websites",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1789454980/why-shop-through-coupon-and-cashback-websites_jpxnir.webp",
    alt: "Why you should shop through coupon and cashback websites",
    category: "SHOPPING TIPS",
    categoryBg: "bg-teal-500",
    date: "September 15, 2026",
    readTime: "5 MIN READ",
    title: "Why You Should Shop Through Coupon and Cashback Websites",
    desc: "Learn how coupon and cashback websites help you save money with promo codes, cashback offers, and exclusive deals. Shop smarter and find the best savings with CouponsBit.",
  },
  {
    href: "/blog/how-to-use-gamsgo-discount-code",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1789389490/gamsgo-discount-code-and-promo-codes_uqqkua.webp",
    alt: "GamsGo discount code and promo codes",
    category: "COUPON GUIDES",
    categoryBg: "bg-[#056bfa]",
    date: "September 14, 2026",
    readTime: "5 MIN READ",
    title: "Get More Savings With a GamsGo Promo Code",
    desc: "Looking for a GamsGo discount code? Discover how to find and apply GamsGo promo codes and save more on digital subscriptions, gaming, AI tools and software.",
  },
  {
    href: "/blog/holiday-shopping-calendar-2026",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1783578422/holiday-shopping-calendar-2026_ak4cju.webp",
    alt: "Holiday Shopping Calendar 2026 – Best USA Shopping Holidays & Sales",
    category: "SHOPPING TIPS",
    categoryBg: "bg-teal-500",
    date: "July 9, 2026",
    readTime: "10 MIN READ",
    title: "Holiday Shopping Calendar 2026: The Best Times to Shop & Save Money in the USA",
    desc: "Discover the complete Holiday Shopping Calendar 2026 for the USA — the best time to buy electronics, fashion, furniture and more while saving with coupon codes.",
  },
  {
    href: "/blog/how-to-save-money-shopping-online",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1783077516/how-to-save-money-shopping-online_h5gv1z.webp",
    alt: "How to save money while shopping online in 2026",
    category: "SHOPPING TIPS",
    categoryBg: "bg-teal-500",
    date: "July 3, 2026",
    readTime: "6 MIN READ",
    title: "How to Save Money While Shopping Online in 2026",
    desc: "Proven shopping tips, coupon strategies, cashback tricks, and exclusive deals to help you save more in 2026.",
  },
  {
    href: "/blog/upcoming-sales-2026",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1787725876/upcoming-sales-2026_nqxs3z.webp",
    alt: "The Biggest U.S. Sales Coming Up in 2026",
    category: "DEAL ALERTS",
    categoryBg: "bg-orange-500",
    date: "June 23, 2026",
    readTime: "6 MIN READ",
    title: "The Biggest U.S. Sales Coming Up in 2026",
    desc: "Explore the ultimate guide to upcoming sales in 2026. Find the best coupon codes, promo offers, and major shopping dates to maximize your savings.",
  },
  {
    href: "/blog/couponsbit-shopping-savings-guide",
    image: "https://res.cloudinary.com/couponsbit/image/upload/v1782215435/couponsbit-shopping-savings-guide_ihevvt.webp",
    alt: "How to save money online shopping",
    category: "COUPON GUIDES",
    categoryBg: "bg-[#056bfa]",
    date: "June 23, 2026",
    readTime: "8 MIN READ",
    title: "What Is CouponsBit? Why Smart Shoppers Use It",
    desc: "Online shopping has transformed the way we buy everything from clothing — discover how CouponsBit helps you find promo codes and save more.",
  },
];

const categoryList = [
  { name: "All Posts", count: 16 },
  { name: "Deal Alerts", count: 5 },
  { name: "Shopping Tips", count: 4 },
  { name: "Coupon Guides", count: 4 },
  { name: "Tips", count: 2 },
  { name: "Tech News", count: 1 },
];

const recentPosts = posts.slice(0, 4);

export default function BlogContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filtered = posts.filter((p) => {
    const matchCat =
      activeCategory === "All Posts" ||
      p.category.toLowerCase() === activeCategory.toLowerCase();
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>

        {/* Hero Section */}
        <section className="relative w-full pt-20 pb-36 md:pt-24 md:pb-48 bg-gradient-to-br from-[#0451c4] to-[#056bfa] overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-md mb-10 animate-pulse">
              <span className="text-[#056bfa] font-bold text-sm tracking-wide">
                 Smart Shopping Starts Here
              </span>
            </div>
            <h1 className="text-white font-extrabold text-5xl md:text-7xl mb-1 flex flex-col gap-2">
              <span>Couponsbit Blog</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mt-8 mb-16 leading-relaxed">
              Discover shopping tips, money-saving ideas, deal guides, and expert insights to help you save more every time you shop online.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {[
                { icon: BookOpen, text: "50+ Articles Published" },
                { icon: Users, text: "500K+ Monthly Readers" },
                { icon: TrendingUp, text: "Updated Weekly" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2.5 min-w-[220px]"
                >
                  <item.icon className="w-5 h-5 text-[#056bfa]" />
                  <span className="text-black font-black text-sm whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-[calc(100%+1.3px)] h-[80px] fill-white text-white"
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.77,117.81,104,176.89,97.43,235.97,90.86,281.42,75.29,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-gray-500 font-medium text-xs tracking-widest uppercase mb-3 text-center">
                FROM OUR EDITORS
              </p>
              <h2 className="text-black font-extrabold text-5xl text-center">
                Latest Insights
              </h2>
              <div className="w-20 h-[3px] bg-[#FF9900] rounded-full mx-auto mt-3"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 mt-12">

              {/* Main Grid */}
              <div className="w-full lg:w-[68%]">
                {filtered.length === 0 ? (
                  <div className="text-center py-16 text-gray-400 text-base font-medium">
                    No articles found. Try a different search or category.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filtered.map((post, i) => (
                      <Link
                        key={post.href}
                        href={post.href}
                        className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden hover:shadow-lg hover:border-[#056bfa] transition-all duration-300 group flex flex-col"
                      >
                        {/* Image + category badge */}
                        <div className="relative w-full h-[200px] overflow-hidden shrink-0">
                          <img
                            src={post.image}
                            alt={post.alt}
                            width={400}
                            height={200}
                            loading={i < 4 ? "eager" : "lazy"}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className={`absolute top-3 left-3 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${post.categoryBg}`}>
                            {post.category}
                          </span>
                        </div>

                        {/* Card content */}
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-2.5">
                            <span className="text-gray-500 text-xs font-medium uppercase">{post.date}</span>
                            <span className="text-gray-300" aria-hidden="true">•</span>
                            <Clock className="w-3 h-3 text-gray-400" />
                            <span className="text-gray-500 text-xs uppercase font-medium">{post.readTime}</span>
                          </div>
                          <h3 className="text-black font-extrabold text-base leading-tight mb-2 group-hover:text-[#056bfa] transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">{post.desc}</p>
                          <span className="mt-4 text-[#056bfa] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                            Read More <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="w-full lg:w-[32%]">
                <div className="sticky top-24 space-y-5">

                  {/* Search */}
                  <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-5">
                    <div className="flex items-center gap-3 bg-[#f9f9f9] rounded-xl px-4 py-3 border border-[#f0f0f0]">
                      <Search className="w-4 h-4 text-gray-400 shrink-0" />
                      <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
                    <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                      <span>🗂️</span> Categories
                    </h4>
                    <div className="space-y-2">
                      {categoryList.map((cat) => {
                        const isActive = cat.name === activeCategory;
                        return (
                          <button
                            key={cat.name}
                            onClick={() => setActiveCategory(cat.name)}
                            className="w-full flex items-center justify-between py-2 border-b border-[#f5f5f5] last:border-0 cursor-pointer hover:opacity-80 transition-opacity"
                          >
                            <span className={`text-sm font-semibold ${isActive ? "text-[#056bfa]" : "text-gray-700"}`}>
                              {cat.name}
                            </span>
                            <span className={`text-[12px] font-black px-2.5 py-0.5 rounded-full ${isActive ? "bg-[#056bfa] text-white" : "bg-[#e8f6f8] text-[#0451c4]"}`}>
                              {cat.count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Recent Posts */}
                  <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
                    <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                      <span>🕒</span> Recent Posts
                    </h4>
                    <div className="space-y-4">
                      {recentPosts.map((post, i) => (
                        <Link
                          key={post.href}
                          href={post.href}
                          className={`flex items-start gap-3 group ${i !== recentPosts.length - 1 ? "pb-4 border-b border-[#f0f0f0]" : ""}`}
                        >
                          <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden border border-[#f0f0f0]">
                            <img
                              src={post.image}
                              alt={post.alt}
                              width={64}
                              height={64}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-400 text-[11px] mb-1">{post.date}</p>
                            <p className="text-black font-bold text-[13px] leading-tight line-clamp-2 group-hover:text-[#056bfa] transition-colors">
                              {post.title}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
