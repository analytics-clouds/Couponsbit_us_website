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
  Code,
  Gamepad2,
  Sparkles,
  Server,
  Tv,
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
    { id: "what-is-gamsgo", title: "What Is GamsGo?" },
    { id: "why-gamsgo-promo-code", title: "Why Should You Look for a GamsGo Promo Code?" },
    { id: "how-to-use-gamsgo-promo-code", title: "How to Use a GamsGo Promo Code" },
    { id: "why-check-couponsbit", title: "Why Check CouponsBit Before You Buy?" },
    { id: "make-shopping-budget-friendly", title: "Make Digital Shopping More Budget-Friendly" },
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
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">GamsGo Discount Code</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN - Article Content */}
            <article className="w-full lg:w-[65%]">
              {/* Post Header */}
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">COUPON GUIDES</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">5 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">September 14, 2026</span>
                  </div>
                </div>
                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  Get More Savings With a GamsGo Promo Code
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/couponsbit/image/upload/v1789389490/gamsgo-discount-code-and-promo-codes_uqqkua.webp"
                    alt="GamsGo discount code and promo codes"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  Save more on digital subscriptions with an eligible GamsGo discount code
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    "So checking for a current code before you buy can help you avoid leaving potential savings behind."
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">
                <p className="mb-5">
                  How many digital subscriptions do you pay for every month?
                </p>
                <p className="mb-5">
                  From streaming and AI tools to gaming and productivity services, those monthly charges can add up faster than you expect. If you're looking for a simple way to make your digital spending more manageable, checking for a GamsGo{" "}
                  <Link href="/stores/gamsgo-discount-code" className="text-[#056bfa] hover:underline">
                    discount code
                  </Link>{" "}
                  before you complete a purchase can be a smart place to start.
                </p>
                <p className="mb-5">
                  GamsGo offers access to a wide range of digital subscriptions and products at discounted rates, covering categories such as entertainment, AI, productivity, gaming, and software. With hundreds of digital services available across numerous countries, the platform gives shoppers another way to access the services they use every day while keeping an eye on their budget.
                </p>
                <p className="mb-5">
                  And there's another opportunity to save. When an eligible offer is available, using a GamsGo discount code at checkout can reduce your purchase cost even further. It takes only a moment to check, but that small step can make a difference when you're already planning to spend.
                </p>
                <p className="mb-5">
                  So, before you subscribe or purchase your next digital service, it makes sense to look for an available deal first.
                </p>

                <h2 id="what-is-gamsgo" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  What Is GamsGo?
                </h2>
                <p className="mb-5">
                  GamsGo is a digital marketplace focused on making subscriptions and digital products more affordable. Its catalog covers several categories, including entertainment, AI, productivity, gaming, software, and digital top-ups.
                </p>
                <p className="mb-5">
                  Instead of paying the full standalone cost of every digital service, shoppers can explore discounted options available through GamsGo.
                </p>
                <p className="mb-5">
                  The platform says its pricing model uses bulk purchasing, subscription sharing, and marketplace sellers to reduce the cost per user. Its marketplace also connects buyers with third-party sellers, while GamsGo provides a buyer-protection system for eligible transactions.
                </p>
                <p className="mb-5">
                  That makes GamsGo particularly interesting for people who regularly pay for multiple digital services.
                </p>

                <h2 id="why-gamsgo-promo-code" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Why Should You Look for a GamsGo Promo Code?
                </h2>
                <p className="mb-3">
                  Finding a discount before you pay may sound obvious, but it's an easy step to skip.
                </p>
                <p className="mb-3">
                  You find the subscription you want, add it to your cart, enter your payment details, and finish the purchase. Done.
                </p>
                <p className="mb-3">
                  But what if you could reduce that final amount before clicking the payment button?
                </p>
                <p className="mb-3">
                  That's where a GamsGo coupon can add extra value.
                </p>
                <p className="mb-3">
                  GamsGo says its{" "}
                  <a href="http://gamsgo.sjv.io/c/7400446/3806046/49319?subId1=776" target="_blank" rel="noopener noreferrer" className="text-[#056bfa] hover:underline">
                    promo codes
                  </a>{" "}
                  can provide additional discounts on eligible purchases. The platform currently distributes promotional codes through activities on its website, social channels, email promotions, and affiliate partners.
                </p>
                <p className="mb-5">
                  So checking for a current code before you buy can help you avoid leaving potential savings behind.
                </p>

                <h3 className="flex items-center text-black font-bold text-xl mt-8 mb-3">
                  <span className="w-1 h-6 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  1. Get More Value From an Already Discounted Purchase
                </h3>
                <p className="mb-3">
                  One of the biggest attractions of GamsGo is its discounted digital offerings. Adding an eligible promo code can provide another opportunity to reduce your purchase cost.
                </p>
                <p className="mb-2">Think of it as a two-step savings strategy:</p>
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                  <p className="text-[#4b5563] text-sm">
                    Choose a discounted digital service → Apply an eligible promo code → Pay the reduced amount
                  </p>
                </div>
                <p className="mb-3">
                  You don't have to search for a completely different product. You simply look for an available promotion before checkout.
                </p>
                <p className="mb-5">
                  That small habit can become particularly useful when you regularly renew digital subscriptions.
                </p>

                <h3 className="flex items-center text-black font-bold text-xl mt-8 mb-3">
                  <span className="w-1 h-6 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  2. Digital Subscriptions Can Add Up Quickly
                </h3>
                <p className="mb-3">
                  Streaming and entertainment subscriptions aren't the only recurring digital expenses anymore.
                </p>
                <p className="mb-3">
                  Consumers now use AI assistants, design platforms, productivity software, online learning services, gaming products, VPNs, and other digital tools.
                </p>
                <p className="mb-3">
                  Paying for several services every month can make subscription management surprisingly expensive.
                </p>
                <p className="mb-5">
                  A platform such as GamsGo gives shoppers another option to explore before committing to a subscription at its standard price. And when you combine an already-discounted offering with an eligible GamsGo voucher code, you may be able to stretch your digital budget further.
                </p>

                <h3 className="flex items-center text-black font-bold text-xl mt-8 mb-3">
                  <span className="w-1 h-6 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  3. Promo Codes Are Easy to Apply
                </h3>
                <p className="mb-3">
                  You don't need a complicated process to use a GamsGo discount code.
                </p>
                <p className="mb-3">
                  According to GamsGo's own instructions, shoppers can enter an eligible promo code during the purchase process and select Apply. The platform then displays the applicable savings before payment.
                </p>
                <p className="mb-3">
                  That makes it easy to verify whether the code actually worked before you complete your order.
                </p>
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                  <p className="text-[#4b5563] text-sm">
                    One important detail: GamsGo says discount codes need to be applied before placing the order and cannot be added afterward. It also notes that codes may not apply to every product, so checking the product page and offer terms remains important.
                  </p>
                </div>

                <h3 className="flex items-center text-black font-bold text-xl mt-8 mb-3">
                  <span className="w-1 h-6 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  4. You Can Shop Across Multiple Digital Categories
                </h3>
                <p className="mb-3">
                  Another reason to keep GamsGo on your savings radar is the range of digital products available.
                </p>
                <p className="mb-2">Depending on what's currently listed, shoppers can find options related to:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Streaming and entertainment</li>
                  <li>AI tools</li>
                  <li>Productivity and office software</li>
                  <li>Gaming</li>
                  <li>Digital top-ups</li>
                  <li>Other subscription-based services</li>
                </ul>
                <p className="mb-3">
                  GamsGo also supports direct game top-ups for certain products, where eligible digital currency or items can be added directly to a user's gaming account.
                </p>
                <p className="mb-5">
                  This variety makes promotional savings useful beyond just one type of subscription.
                </p>

                <h2 id="how-to-use-gamsgo-promo-code" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  How to Use a GamsGo Promo Code
                </h2>
                <p className="mb-3">
                  First, find the digital product or subscription you want. Before paying, check whether the product accepts the code and look for a currently valid offer.
                </p>
                <p className="mb-3">
                  Enter the code in the designated coupon code field and select Apply. Review the updated amount to make sure the discount has been reflected. Once everything looks correct, continue with payment.
                </p>
                <p className="mb-5">
                  GamsGo recommends checking its official activities and promotional channels for current codes because offers and partnerships can change over time.
                </p>

                <h2 id="why-check-couponsbit" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Why Check CouponsBit Before You Buy?
                </h2>
                <p className="mb-3">
                  This is where smart shoppers can add one more step to their routine.
                </p>
                <p className="mb-3">
                  Before purchasing a digital subscription from GamsGo, check CouponsBit for an available GamsGo discount code, or current offer.
                </p>
                <p className="mb-3">
                  Instead of searching the internet repeatedly for a working deal, you can make CouponsBit part of your pre-purchase routine.
                </p>
                <p className="mb-2">The idea is simple:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Find what you need.</li>
                  <li>Check CouponsBit for a deal.</li>
                  <li>Apply the eligible offer.</li>
                  <li>Then complete your purchase.</li>
                </ul>
                <p className="mb-5">
                  You may not always find a code that applies to your particular product, but checking takes very little time. When a valid promotion is available, that extra step could reduce your final spending.
                </p>

                <h2 id="make-shopping-budget-friendly" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Make Digital Shopping More Budget-Friendly
                </h2>
                <p className="mb-3">
                  Subscriptions have changed the way we spend money online. We no longer make every digital purchase once and move on. Many services renew monthly or annually, which means even a small saving can become meaningful when you purchase or renew repeatedly.
                </p>
                <p className="mb-3">
                  That's why it makes sense to look for savings before you pay.
                </p>
                <p className="mb-3">
                  GamsGo already focuses on discounted access to a wide range of digital products and services. An eligible promo code can provide another opportunity to lower the cost of your purchase.
                </p>
                <p className="mb-3">
                  So before you click Pay Now, take a few seconds to check for a deal.
                </p>
                <p className="mb-3">
                  Your subscription may already be discounted. Your promo code could make it even better.
                </p>
              </div>

              {/* Tags Section */}
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
                {[
                  "GamsGo", "Discount Code", "Promo Code", "Digital Subscriptions", "Software Deals"
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

            </article>

            {/* RIGHT SIDEBAR */}
            <aside className="w-full lg:w-[35%] h-fit">

              {/* Box 1: TOC */}
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

              {/* Box 2: Popular Stores */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🛍️</span> Popular Stores
                </h4>
                <div className="space-y-4">
                  {[
                    { name: "Driffle", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp", dealText: "Up to 95% OFF", href: "/stores/driffle-discount-code" },
                    { name: "Kinguin", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494079/kinguin-coupon-code_ugjj9s.jpg", dealText: "Up to 97% OFF", href: "/stores/kinguin-discount-code" },
                    { name: "Unipin", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782198037/unipijn-coupon-code_nh4xhc.webp", dealText: "Top-Ups From $0.94", href: "/stores/unipin-discount-code" },
                    { name: "Bluehost", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp", dealText: "Up to 69% OFF", href: "/stores/bluehost-discount-code" },
                    { name: "Hostinger", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/hostinger-logo_m9ubvs.webp", dealText: "Up To 80% OFF", href: "/stores/hostinger-discount-code" },
                    { name: "Sintra", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781776169/sintra-coupon-code_piyu2d.webp", dealText: "Up to 70% OFF", href: "/stores/sintra-discount-code" },
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

              {/* Box 3: Store Categories */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mt-5">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🗂️</span> Store Categories
                </h4>
                <div className="space-y-1">
                  {[
                    { icon: Code,      name: "Software & Digital",     count: "300+", color: "text-violet-500", href: "/categories/software" },
                    { icon: Gamepad2,  name: "Gaming & Digital Goods", count: "70+",  color: "text-indigo-500", href: "/categories/gaming" },
                    { icon: Tv,        name: "Entertainment",          count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                    { icon: Server,    name: "Mobile & Telecom",       count: "320+", color: "text-green-500",  href: "/categories/mobile" },
                    { icon: Sparkles,  name: "Electronics",            count: "850+", color: "text-blue-500",   href: "/categories/electronics" },
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

      </main>
      <Footer />
    </div>
  );
}
