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
    { id: "dont-buy-first-product", title: "Don't Buy the First Product You See" },
    { id: "read-customer-reviews", title: "Read Customer Reviews Before Checking Out" },
    { id: "compare-prices", title: "Compare Prices Before Making a Purchase" },
    { id: "look-for-amazon-coupons", title: "Look for Amazon Coupons and Available Discounts" },
    { id: "deal-vs-genuine-saving", title: "Understand the Difference Between a Deal and a Genuine Saving" },
    { id: "avoid-common-mistakes", title: "Avoid Common Online Shopping Mistakes" },
    { id: "plan-shopping-around-sales", title: "Plan Your Shopping Around Major Sale Events" },
    { id: "make-couponsbit-part-of-routine", title: "Make CouponsBit Part of Your Online Shopping Routine" },
    { id: "final-thoughts", title: "Final Thoughts: Shop Smarter, Not Just More" },
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
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">Amazon Shopping Tips</span>
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
                    <span className="text-gray-500 text-[11px]">November 4, 2026</span>
                  </div>
                </div>
                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  Shopping on Amazon? Here&apos;s How to Find Better Deals and Make Every Purchase Count
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="/blog/amazon-shopping-tips-find-better-deals.webp"
                    alt="Shopping on Amazon – Tips to find better deals and save more"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  A few smart shopping habits can help you get more value from every Amazon purchase
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    &ldquo;A simple rule: Compare the value, not just the discount percentage.&rdquo;
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">
                <p className="mb-5">
                  Online shopping has made buying almost anything easier. Need a new laptop? Looking for kitchen essentials? Want to upgrade your wardrobe or find a gift for someone? You can explore thousands of options without leaving your home.
                </p>
                <p className="mb-5">
                  And when it comes to online shopping in the United States, Amazon is one of the platforms many shoppers turn to.
                </p>
                <p className="mb-5">
                  But here&apos;s something worth remembering: finding a product online is easy. Finding the right product at the right price takes a little more effort.
                </p>
                <p className="mb-5">
                  From comparing sellers to checking product reviews and looking for available discounts, a few smart shopping habits can help you make better buying decisions. Whether you&apos;re shopping for everyday essentials or planning a bigger purchase, knowing where and how to look for savings can make a difference.
                </p>
                <p className="mb-5">
                  Let&apos;s explore how to shop smarter on Amazon and get more value from your money.
                </p>

                {/* Section 1 */}
                <h2 id="dont-buy-first-product" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  1. Don&apos;t Buy the First Product You See
                </h2>
                <p className="mb-5">
                  One of the most common online shopping mistakes is choosing the first product that looks appealing.
                </p>
                <p className="mb-3">
                  Amazon offers products across several categories, often with multiple brands selling similar items. Instead of making a quick decision, compare a few options before adding something to your cart.
                </p>
                <p className="mb-2">Pay attention to:</p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-2">
                  <li><strong>Product specifications:</strong> Check dimensions, materials, compatibility, and important features.</li>
                  <li><strong>Customer ratings:</strong> Look at the overall rating, but don&apos;t rely on it alone.</li>
                  <li><strong>Recent reviews:</strong> Read feedback from customers who purchased the product recently.</li>
                  <li><strong>Seller information:</strong> Check who sells the product and who handles fulfilment.</li>
                  <li><strong>Return policy:</strong> Understand the return window and any conditions before ordering.</li>
                </ul>
                <p className="mb-5">
                  A product with a slightly higher price may offer better quality, durability, or customer support. The cheapest option isn&apos;t always the best value.
                </p>

                {/* Section 2 */}
                <h2 id="read-customer-reviews" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  2. Read Customer Reviews Before Checking Out
                </h2>
                <p className="mb-5">
                  Product photos can look impressive, but customer experiences often reveal details that product descriptions miss.
                </p>
                <p className="mb-3">
                  Before buying, read a mix of positive, neutral, and critical reviews. Look for repeated comments about product quality, performance, packaging, and durability.
                </p>
                <p className="mb-3">
                  For example, if you&apos;re purchasing wireless headphones, customers may mention battery life, sound quality, comfort, or connectivity issues. These details can help you decide whether the product meets your expectations.
                </p>
                <p className="mb-2">Here are a few useful review-reading habits:</p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-2">
                  <li>Focus on reviews that explain actual product usage.</li>
                  <li>Check whether buyers mention the same problem repeatedly.</li>
                  <li>Look for photos or videos uploaded by customers.</li>
                  <li>Consider how recent the feedback is.</li>
                  <li>Be cautious of reviews that sound vague, repetitive, or overly promotional.</li>
                </ul>
                <p className="mb-5">
                  Remember, reviews are individual experiences, not guarantees. Use them alongside product specifications and seller information.
                </p>

                {/* Section 3 */}
                <h2 id="compare-prices" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  3. Compare Prices Before Making a Purchase
                </h2>
                <p className="mb-5">
                  A discount label can make a product look like a great bargain, but it doesn&apos;t automatically mean you&apos;re getting the best price.
                </p>
                <p className="mb-5">
                  Before purchasing, compare the product with similar options and check its price across different sellers where possible.
                </p>
                <p className="mb-5">
                  You should also consider the complete cost, including shipping charges, taxes, and any additional fees shown at checkout.
                </p>
                <p className="mb-5">
                  For bigger purchases, such as electronics, appliances, or furniture, take a little extra time to research. A small price difference can add up when you&apos;re buying multiple items.
                </p>
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5">
                  <p className="text-[#4b5563] text-sm font-bold">
                    A simple rule: Compare the value, not just the discount percentage.
                  </p>
                </div>

                {/* Section 4 */}
                <h2 id="look-for-amazon-coupons" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  4. Look for Amazon Coupons and Available Discounts
                </h2>
                <p className="mb-5">
                  If you already know what you want to purchase, your next step should be checking whether an eligible offer is available.
                </p>
                <p className="mb-3">
                  Amazon may display product-specific coupons, promotional offers, limited-time deals, and other savings opportunities. Their availability and terms can vary by product, seller, account, and shopping period.
                </p>
                <p className="mb-2">Here are some places to check:</p>
                <div className="space-y-4 mb-5">
                  <p><strong>Product pages:</strong> Some eligible products display a coupon that shoppers can select before adding the item to their cart.</p>
                  <p><strong>Amazon deals sections:</strong> Browse available deals to discover discounts across different categories.</p>
                  <p><strong>Promotional offers:</strong> Check the product listing and checkout page for applicable promotions.</p>
                  <p><strong>External coupon platforms:</strong> Coupon websites can help shoppers discover additional promotional codes and offers worth checking.</p>
                </div>
                <p className="mb-5">
                  If you&apos;re searching for an <strong>Amazon coupon code</strong>, visit{" "}
                  <Link href="/stores/amazon-discount-code" className="text-[#056bfa] hover:underline">CouponsBit&apos;s Amazon coupon page</Link>{" "}
                  to explore available offers before completing your purchase.
                </p>
                <p className="mb-5">
                  Always read the offer conditions. Some discounts apply only to selected products, qualifying orders, or eligible customers.
                </p>

                {/* Section 5 */}
                <h2 id="deal-vs-genuine-saving" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  5. Understand the Difference Between a Deal and a Genuine Saving
                </h2>
                <p className="mb-5">
                  A product marked 40% off may look tempting, but smart shoppers know that the final price matters more than the advertised percentage.
                </p>
                <p className="mb-3">Imagine you&apos;re looking at two similar products:</p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-2">
                  <li>Product A costs $100 and has a 20% discount.</li>
                  <li>Product B costs $85 and has no advertised discount.</li>
                </ul>
                <p className="mb-5">
                  Product A costs $80 after the discount, while Product B costs $85. In this case, Product A is cheaper, assuming both products offer comparable value.
                </p>
                <p className="mb-5">
                  However, if Product A has fewer features or lower quality, Product B might still be the better purchase.
                </p>
                <p className="mb-5">
                  That&apos;s why you should consider the original price, current selling price, product quality, and available alternatives before deciding.
                </p>
                <p className="mb-5">
                  A good deal should meet your needs and fit your budget.
                </p>

                {/* Section 6 */}
                <h2 id="avoid-common-mistakes" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  6. Avoid Common Online Shopping Mistakes
                </h2>
                <p className="mb-5">
                  Even experienced online shoppers can make rushed decisions. A little caution can help you avoid unnecessary spending.
                </p>
                <p className="mb-2">Watch out for these common mistakes:</p>
                <div className="space-y-4 mb-5">
                  <p><strong>Buying because of urgency:</strong> Countdown timers and limited-stock messages can encourage quick decisions. Check whether you actually need the product.</p>
                  <p><strong>Ignoring product details:</strong> Always verify size, colour, model number, compatibility, and other important specifications.</p>
                  <p><strong>Overlooking delivery charges:</strong> A low product price may not reflect the total amount you&apos;ll pay.</p>
                  <p><strong>Skipping the return policy:</strong> Check whether the product qualifies for returns or replacements.</p>
                  <p><strong>Ignoring seller details:</strong> Review the seller&apos;s information and product listing before placing an order.</p>
                  <p><strong>Buying unnecessary items to unlock a deal:</strong> Spending extra money to qualify for a promotion may cancel out the savings.</p>
                </div>
                <p className="mb-5">
                  The goal is not to buy more. It&apos;s to buy better.
                </p>

                {/* Section 7 */}
                <h2 id="plan-shopping-around-sales" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  7. Plan Your Shopping Around Major Sale Events
                </h2>
                <p className="mb-5">
                  Timing can influence how much you spend online.
                </p>
                <p className="mb-3">
                  Throughout the year, Amazon and other retailers run promotional events around seasonal occasions, holidays, and major shopping periods.
                </p>
                <p className="mb-2">Some popular US shopping periods include:</p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-2">
                  <li><strong>Presidents&apos; Day sales:</strong> A February shopping period with offers across selected categories.</li>
                  <li><strong>Memorial Day sales:</strong> May promotions often include home, outdoor, and seasonal products.</li>
                  <li><strong>Amazon Prime Day:</strong> An Amazon shopping event with deals for eligible customers and products.</li>
                  <li><strong>Back-to-School sales:</strong> A useful period for school supplies, electronics, clothing, and accessories.</li>
                  <li><strong>Black Friday and Cyber Monday:</strong> Major November shopping events with promotions across several categories.</li>
                  <li><strong>Holiday sales:</strong> Seasonal offers on gifts, decorations, electronics, and everyday essentials.</li>
                </ul>
                <p className="mb-5">
                  You don&apos;t need to wait for a major sale to make a purchase. However, if an item isn&apos;t urgent, comparing prices during different shopping periods may help you find a better offer.
                </p>

                {/* Section 8 */}
                <h2 id="make-couponsbit-part-of-routine" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  8. Make CouponsBit Part of Your Online Shopping Routine
                </h2>
                <p className="mb-5">
                  Finding the right product is only one part of shopping smart. Checking for available discounts before checkout is another habit worth developing.
                </p>
                <p className="mb-3">
                  That&apos;s where <strong>CouponsBit</strong> comes in.
                </p>
                <p className="mb-5">
                  CouponsBit helps shoppers discover coupon codes, promo codes, discount offers, and deals across popular brands and shopping categories. Instead of going directly to checkout, you can visit the relevant store page and check whether an offer is available for your purchase.
                </p>
                <p className="mb-5">
                  If you&apos;re planning to shop on Amazon, explore the{" "}
                  <Link href="/stores/amazon-discount-code" className="text-[#056bfa] hover:underline">Amazon coupon code page on CouponsBit</Link>.
                  {" "}You can check the listed offers, review their terms, and try an applicable code during checkout.
                </p>
                <p className="mb-5">
                  You can also browse{" "}
                  <Link href="/" className="text-[#056bfa] hover:underline">CouponsBit</Link>{" "}
                  for offers from other popular retailers when comparing products or planning your next shopping trip.
                </p>
                <p className="mb-5">
                  Remember that coupon availability changes. Not every code works on every product, and some promotions may have eligibility requirements. Always verify the final price and discount at checkout.
                </p>

                {/* Final Thoughts */}
                <h2 id="final-thoughts" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Final Thoughts: Shop Smarter, Not Just More
                </h2>
                <p className="mb-5">
                  Amazon makes it convenient to explore products, compare options, and shop across different categories. But convenience shouldn&apos;t mean making rushed purchases.
                </p>
                <p className="mb-5">
                  Take time to read reviews, compare prices, understand product details, and check the final cost. Look for genuine discounts instead of getting distracted by large percentage-off labels.
                </p>
                <p className="mb-5">
                  And before you complete your next Amazon order, make one more stop at CouponsBit to explore available coupon codes and deals.
                </p>
                <p className="mb-5">
                  A little research before checkout can help you make more informed decisions and get better value from every purchase.
                </p>
                <p className="mb-5 font-bold">
                  Happy shopping!
                </p>
              </div>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
                {[
                  "Amazon Coupon Code", "Amazon Deals", "Online Shopping Tips", "Save Money on Amazon", "CouponsBit", "Shopping Guide"
                ].map((tag, i) => (
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
                <button onClick={() => copyToClipboard(window.location.href)} className="bg-[#f5f5f5] text-[#374151] rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:bg-[#e8f6f8] transition-all">
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
                    { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/amazon-coupon-code_kvl7wq.webp", dealText: "Latest Amazon Deals", href: "/stores/amazon-discount-code" },
                    { name: "StubHub", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp", dealText: "Flat 10% OFF", href: "/stores/stubhub-discount-code" },
                    { name: "Viagogo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/viagogo-coupon-code_t65aol.webp", dealText: "Starting at $332", href: "/stores/viagogo-discount-code" },
                    { name: "Bluehost", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp", dealText: "Up to 69% OFF", href: "/stores/bluehost-discount-code" },
                    { name: "Driffle", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp", dealText: "Up to 95% OFF", href: "/stores/driffle-discount-code" },
                    { name: "Lyca Mobile", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/lyca-mobile-coupon-code_svvddg.webp", dealText: "50% OFF + LYCA10", href: "/stores/lyca-mobile-discount-code" },
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
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1783077516/how-to-save-money-shopping-online_h5gv1z.webp",
                  date: "July 3, 2026",
                  readTime: "6 MIN READ",
                  title: "How to Save Money While Shopping Online in 2026",
                  desc: "Learn how to save money online in 2026 with proven shopping tips, coupon strategies, cashback tricks, and exclusive deals from CouponsBit.",
                  href: "/blog/how-to-save-money-shopping-online",
                },
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1782215435/couponsbit-shopping-savings-guide_ihevvt.webp",
                  date: "June 23, 2026",
                  readTime: "8 MIN READ",
                  title: "What Is CouponsBit? Why Smart Shoppers Use It",
                  desc: "Online shopping has transformed the way we buy everything from clothing and electronics to travel and software.",
                  href: "/blog/couponsbit-shopping-savings-guide",
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
                    <img
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500 text-xs font-medium uppercase">{post.date}</span>
                      <span className="text-gray-300" aria-hidden="true">•</span>
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500 text-xs uppercase font-medium">{post.readTime}</span>
                    </div>
                    <h3 className="text-[#056bfa] font-extrabold text-lg leading-tight mb-2.5 group-hover:text-[#0451c4] transition-all line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.desc}
                    </p>
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
