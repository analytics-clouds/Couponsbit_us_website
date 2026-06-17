"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle,
  Copy,
  Share2,
  Bookmark,
  ArrowRight,
  Lightbulb,
  MessageCircle,
  Twitter,
  Facebook,
  Link as LinkIcon
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
    { id: "overpay", title: "Why Amazon Shoppers Overpay" },
    { id: "tip-1", title: "Always Use Verified Coupon Codes" },
    { id: "tip-2", title: "Stack Coupons with Bank Card Offers" },
    { id: "tip-3", title: "Shop During Great Indian Sale Events" },
    { id: "tip-4", title: "Use Amazon Pay for Extra Cashback" },
    { id: "tip-5", title: "Add Items to Wishlist and Wait" },
    { id: "tip-6", title: "Subscribe & Save Program" },
    { id: "tip-7", title: "Amazon Warehouse Deals" },
    { id: "tip-8", title: "Amazon Business GST Benefits" },
    { id: "tip-9", title: "Compare FBA Product Prices" },
    { id: "tip-10", title: "Bookmark Coupons Clouds Daily" },
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
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-3 flex items-center gap-2">
          <Link href="/" className="text-[#056bfa] text-sm hover:underline">Home</Link>
          <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
          <Link href="/blog" className="text-[#056bfa] text-sm hover:underline">Blog</Link>
          <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
          <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">Amazon Savings Guide</span>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT COLUMN - Article Content */}
          <article className="w-full lg:w-[65%]">
            {/* Post Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">SHOPPING TIPS</span>
                <div className="flex items-center gap-1.5 grayscale opacity-60">
                  <Clock className="w-[13px] h-[13px] text-gray-500" />
                  <span className="text-gray-500 text-[11px]">8 min read</span>
                </div>
                <div className="flex items-center gap-1.5 grayscale opacity-60">
                  <Calendar className="w-[13px] h-[13px] text-gray-500" />
                  <span className="text-gray-500 text-[11px]">May 12, 2026</span>
                </div>
              </div>
              <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                10 Smart Ways to Save Money on Amazon India in 2026
              </h1>

              <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                <img
                  src="/amazon-savings-guide.webp"
                  alt="Amazon shopping India online"
                  width={800}
                  height={420}
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-400 text-[11px] text-center italic mt-2">
                Smart shopping habits can save you thousands every month
              </p>

              <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                  "Verified coupon codes combined with cashback offers can save the average Indian shopper up to ₹5,000 every single month on Amazon alone."
                </p>
              </div>
            </header>

            {/* Article Body */}
            <div className="text-[#4b5563] text-base leading-[1.8] font-inter">
              <p className="mb-5">
                Amazon India is one of the most popular online shopping destinations in the country — but are you really getting the best deals every time you shop? Most people leave thousands of rupees in savings on the table without even realising it. In this guide we will walk you through 10 proven strategies that smart shoppers use to save maximum money on every single Amazon purchase.
              </p>

              <h2 id="overpay" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                Why Amazon Shoppers Overpay
              </h2>
              <p className="mb-5">
                The truth is Amazon's pricing is dynamic — it changes multiple times a day based on demand, competition and time of year. Without the right tools and strategies you are almost certainly paying more than you need to. The good news is that with a few simple habits you can consistently save 20% to 60% on your orders.
              </p>

              <h2 className="flex items-center text-black font-extrabold text-2xl mt-10 mb-6">
                <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                10 Smart Ways to Save Money on Amazon India
              </h2>

              {/* Tip 1 */}
              <div id="tip-1" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#056bfa] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-[#056bfa] font-bold text-xl mb-3">Always Use Verified Coupon Codes</h3>
                  <p className="text-[#4b5563] mb-4">
                    Before placing any order on Amazon visit Coupons Clouds to find verified coupon codes for your product category. Codes like <span className="bg-[#fff3e0] text-[#e65100] rounded px-1.5 py-0.5 font-semibold text-sm">AMAZON60</span> can give you up to 60% OFF on top categories. Our team tests every code before publishing so you always get working coupons.
                  </p>
                  <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                    <span className="font-bold text-[#0344b0] text-sm flex items-center gap-1.5 mb-1.5 uppercase tracking-wide not-italic">
                      <Lightbulb className="w-4 h-4" /> Pro Tip:
                    </span>
                    <p className="text-[#4b5563] text-sm">
                      Search for the specific product category coupon — electronics coupons often give bigger discounts than general sitewide codes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip 2 */}
              <div id="tip-2" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#056bfa] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-[#056bfa] font-bold text-xl mb-3">Stack Coupons with Bank Card Offers</h3>
                  <p className="text-[#4b5563] mb-4">
                    Amazon regularly runs bank card offers where you get an extra 10% to 15% cashback on top of existing discounts when you pay with specific credit or debit cards. HDFC, SBI and ICICI cards frequently have exclusive Amazon offers. Combine these with a coupon code for maximum savings.
                  </p>
                  <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                    <span className="font-bold text-[#0344b0] text-sm flex items-center gap-1.5 mb-1.5 uppercase tracking-wide not-italic">
                      <Lightbulb className="w-4 h-4" /> Pro Tip:
                    </span>
                    <p className="text-[#4b5563] text-sm">
                      Check the bank offers section on Amazon's checkout page before paying — you might be leaving extra cashback on the table.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip 3 */}
              <div id="tip-3" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#056bfa] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-[#056bfa] font-bold text-xl mb-3">Shop During Great Indian Sale Events</h3>
                  <p className="text-[#4b5563] mb-4">
                    Amazon India runs massive sale events multiple times a year — the Great Indian Festival in October, the Summer Sale in April-May and the Republic Day Sale in January. Plan your big purchases around these events and combine them with coupon codes for the biggest discounts of the year — often 40% to 70% OFF.
                  </p>
                </div>
              </div>

              {/* Tip 4 */}
              <div id="tip-4" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#056bfa] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-[#056bfa] font-bold text-xl mb-3">Use Amazon Pay for Extra Cashback</h3>
                  <p className="text-[#4b5563] mb-4">
                    Loading money into your Amazon Pay wallet and using it for purchases often unlocks exclusive cashback offers not available through other payment methods. Amazon regularly runs Amazon Pay promotions giving 5% to 10% additional cashback on eligible orders.
                  </p>
                </div>
              </div>

              {/* Tip 5 */}
              <div id="tip-5" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#056bfa] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-[#056bfa] font-bold text-xl mb-3">Add Items to Wishlist and Wait</h3>
                  <p className="text-[#4b5563] mb-4">
                    Amazon's prices fluctuate constantly. If an item is not urgently needed add it to your wishlist and monitor the price. Prices often drop significantly during sales or when new stock arrives. You can use browser extensions to track price history and set alerts for price drops.
                  </p>
                  <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                    <span className="font-bold text-[#0344b0] text-sm flex items-center gap-1.5 mb-1.5 uppercase tracking-wide not-italic">
                      <Lightbulb className="w-4 h-4" /> Pro Tip:
                    </span>
                    <p className="text-[#4b5563] text-sm">
                      Most products drop to their lowest price during Amazon's major sale events. Add to wishlist in August and buy in October during Great Indian Festival.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip 6 */}
              <div id="tip-6" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#056bfa] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-[#056bfa] font-bold text-xl mb-3">Subscribe & Save for Regular Purchases</h3>
                  <p className="text-[#4b5563] mb-4">
                    For items you buy regularly like groceries, personal care products or supplements — Amazon's Subscribe & Save program gives you 5% to 15% discount on every recurring order. Set up subscriptions for your monthly essentials and save automatically every single month.
                  </p>
                </div>
              </div>

              {/* Tip 7 */}
              <div id="tip-7" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#056bfa] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  7
                </div>
                <div className="flex-1">
                  <h3 className="text-[#056bfa] font-bold text-xl mb-3">Check Amazon Warehouse Deals</h3>
                  <p className="text-[#4b5563] mb-4">
                    Amazon Warehouse sells open-box and returned items at significantly reduced prices — often 20% to 40% below the regular price. These products are graded and described accurately so you know exactly what condition to expect. For electronics and appliances this can mean massive savings on near-perfect items.
                  </p>
                </div>
              </div>

              {/* Tip 8 */}
              <div id="tip-8" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#056bfa] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  8
                </div>
                <div className="flex-1">
                  <h3 className="text-[#056bfa] font-bold text-xl mb-3">Use Amazon Business for GST Benefits</h3>
                  <p className="text-[#4b5563] mb-4">
                    If you are a business owner or freelancer signing up for Amazon Business gives you access to GST invoices on purchases — meaning you can claim input tax credit and effectively get 18% back on business purchases. This is one of the most overlooked ways to reduce your Amazon spending significantly.
                  </p>
                </div>
              </div>

              {/* Tip 9 */}
              <div id="tip-9" className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-[#056bfa] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  9
                </div>
                <div className="flex-1">
                  <h3 className="text-[#056bfa] font-bold text-xl mb-3">Compare Prices with Fulfilled by Amazon Products</h3>
                  <p className="text-[#4b5563] mb-4">
                    Always filter for Fulfilled by Amazon (FBA) products and compare prices from multiple sellers on the same listing. Third party sellers on Amazon sometimes offer the same product at lower prices than Amazon's own inventory especially for popular electronics and books.
                  </p>
                  <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                    <span className="font-bold text-[#0344b0] text-sm flex items-center gap-1.5 mb-1.5 uppercase tracking-wide not-italic">
                      <Lightbulb className="w-4 h-4" /> Pro Tip:
                    </span>
                    <p className="text-[#4b5563] text-sm">
                      Sort by Price: Low to High and filter by Prime eligible to find the best FBA deals with free fast delivery.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip 10 */}
              <div id="tip-10" className="flex gap-4 mb-10">
                <div className="w-8 h-8 bg-[#056bfa] text-white font-bold text-sm rounded-full flex-shrink-0 flex items-center justify-center mt-1 outline outline-4 outline-[#e8f6f8]">
                  10
                </div>
                <div className="flex-1">
                  <h3 className="text-[#056bfa] font-bold text-xl mb-3">Bookmark Coupons Clouds for Daily Deal Alerts</h3>
                  <p className="text-[#4b5563] mb-4">
                    The single most effective habit for saving money on Amazon is to check Coupons Clouds every day before shopping. Our team updates Amazon coupon codes daily and alerts subscribers to flash deals and limited-time offers. Subscribe to our newsletter to get the best Amazon deals delivered to your inbox every morning.
                  </p>
                </div>
              </div>

              <h2 className="flex items-center text-black font-extrabold text-2xl mt-12 mb-4">
                <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                How Much Can You Really Save?
              </h2>
              <p className="mb-5">
                Shoppers who combine these 10 strategies consistently report saving between ₹2,000 and ₹8,000 every month on their Amazon purchases. The key is building these habits into your regular shopping routine — check for coupons first, look for bank offers at checkout, and always buy big items during sale events.
              </p>

              <h2 className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                Start Saving on Amazon Today
              </h2>
              <p className="mb-5">
                You now have everything you need to become a smarter Amazon shopper. Bookmark this guide, subscribe to Coupons Clouds deal alerts, and start applying these strategies from your very next Amazon purchase. Your wallet will thank you.
              </p>
            </div>

            {/* Tags Section */}
            <div className="mt-12 flex flex-wrap items-center gap-2">
              <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
              {[
                "Amazon Deals", "Coupon Codes", "Cashback", "Online Shopping", "Saving Tips", "Amazon Sale"
              ].map((tag, i) => (
                <span key={i} className="bg-[#f5f5f5] text-[#4b5563] text-[11px] font-medium rounded-full px-4 py-1.5 hover:bg-[#e8f6f8] hover:text-[#056bfa] transition-colors duration-300 cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Section */}
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
              <button onClick={() => copyToClipboard(window.location.href)} className="bg-[#f5f5f5] text-[#374151] rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:bg-[#e8f6f8] transition-all">
                <LinkIcon className="w-3.5 h-3.5" /> Copy Link
              </button>
            </div>

           

            {/* Related Posts */}
            <div className="mt-14">
              <h3 className="text-black font-extrabold text-xl mb-6 flex items-center gap-2">
                <span>📖</span> You Might Also Like
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Link href="/blog/amazon-savings-guide" className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex hover:shadow-md hover:border-[#056bfa] transition-all duration-300 cursor-pointer group">
                  <div className="w-[100px] shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=200&h=120"
                      alt="Bank offers"
                      width={200}
                      height={120}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <span className="bg-[#e8f6f8] text-[#0344b0] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Coupon Guides</span>
                    <h4 className="text-black font-bold text-sm line-clamp-2 mt-2 leading-tight">How to Stack Coupons and Bank Offers for Maximum Savings</h4>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-gray-400 text-[10px]">May 10, 2026</span>
                      <span className="text-[#056bfa] text-[10px] font-bold">Read →</span>
                    </div>
                  </div>
                </Link>

                <Link href="/blog" className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex hover:shadow-md hover:border-[#056bfa] transition-all duration-300 cursor-pointer group">
                  <div className="w-[100px] shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=200&h=120"
                      alt="Flipkart sale"
                      width={200}
                      height={120}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <span className="bg-[#e8f6f8] text-[#0344b0] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Shopping Tips</span>
                    <h4 className="text-black font-bold text-sm line-clamp-2 mt-2 leading-tight">Flipkart Big Billion Day — Complete Survival Guide 2026</h4>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-gray-400 text-[10px]">May 8, 2026</span>
                      <span className="text-[#056bfa] text-[10px] font-bold">Read →</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="w-full lg:w-[35%] lg:sticky lg:top-24 h-fit">

           

            {/* Box 2: By the Numbers */}
            <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mb-5">
              <h4 className="text-black font-bold text-base mb-5">By the Numbers</h4>
              <div className="space-y-5">
                {[
                  { value: "₹5,000+", label: "Average monthly savings for smart shoppers" },
                  { value: "60%", label: "Maximum discount available with top Amazon coupons" },
                  { value: "10", label: "Minutes a day is all it takes to find the best deals" }
                ].map((stat, i) => (
                  <div key={i} className={`flex items-baseline gap-3 pb-4 ${i !== 2 ? 'border-b border-[#f0f0f0]' : ''}`}>
                    <span className="text-[#056bfa] font-black text-3xl">{stat.value}</span>
                    <span className="text-gray-500 text-[11px] tracking-tight">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

           

            {/* Box 4: Top Coupons */}
            <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mb-5">
              <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                <span>🔥</span> Top Amazon Coupons Now
              </h4>
              <div className="space-y-4">
                {[
                  { title: "Up to 60% OFF on Top Categories", code: "AMAZON60" },
                  { title: "Flat 50% OFF on Electronics", code: "ELEC50" },
                  { title: "Flat 30% OFF on Fashion", code: "FASHION30" },
                  { title: "Free Delivery on First Order", code: "FREESHIP" }
                ].map((coupon, i) => (
                  <div key={i} className={`pb-4 ${i !== 3 ? 'border-b border-[#f0f0f0]' : ''}`}>
                    <p className="text-[#374151] text-[13px] font-semibold truncate mb-2">{coupon.title}</p>
                    <div className="flex items-center justify-between bg-[#e8f6f8] rounded-xl px-4 py-2.5 border border-dashed border-[#056bfa]">
                      <span className="text-[#0344b0] font-mono font-black text-[12px]">{coupon.code}</span>
                      <Copy
                        className="w-3.5 h-3.5 text-[#056bfa] cursor-pointer hover:scale-110 active:scale-90 transition-transform"
                        onClick={() => copyToClipboard(coupon.code)}
                      />
                    </div>
                    <button className="text-[#056bfa] text-[10px] font-bold mt-2 hover:underline tracking-wide uppercase">Show Code</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 5: TOC */}
            <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
              <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                <span>📋</span> Table of Contents
              </h4>
              <div className="space-y-1">
                {sections.map((section, i) => (
                  <a
                    key={i}
                    href={`#${section.id}`}
                    className={`flex items-start gap-3 py-2.5 group ${i !== sections.length - 1 ? 'border-b border-[#f5f5f5]' : ''}`}
                  >
                    <span className="text-[#056bfa] font-bold text-[11px] mt-1 shrink-0">{(i + 1).toString().padStart(2, '0')}</span>
                    <span className="text-gray-600 text-[13px] group-hover:text-[#056bfa] transition-colors leading-[1.4]">{section.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Newsletter Strip */}
      <section className="bg-[#056bfa] py-14">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-white font-extrabold text-3xl md:text-4xl text-center md:text-left">
              📬 Never Miss a Great Amazon Deal!
            </h2>
            <p className="text-white/70 text-lg max-w-[500px] text-center md:text-left">
              Join 50,000+ shoppers who receive hand-picked deals every morning.
            </p>
          </div>

          <div className="bg-white/10 p-2 rounded-2xl backdrop-blur-sm w-full max-w-[500px]">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white border-2 border-transparent rounded-xl px-5 py-3 outline-none focus:border-[#FF9900] shadow-md text-black font-medium"
              />
              <button className="bg-[#FF9900] hover:bg-[#e68a00] text-black font-black px-8 py-3 rounded-xl transition-all shadow-lg active:scale-95 whitespace-nowrap">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
