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
  ShoppingBag,
  Wallet,
  Tag,
  Gift,
  Percent,
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
    { id: "what-are-coupon-cashback-websites", title: "What Are Coupon and Cashback Websites?" },
    { id: "why-check-for-a-deal", title: "Why Check for a Deal Before You Buy?" },
    { id: "does-shopping-cost-more", title: "Does Shopping Through an Affiliate Website Cost More?" },
    { id: "why-couponsbit", title: "Why CouponsBit Be Part of Your Shopping Routine" },
    { id: "make-check-for-a-coupon-final-step", title: "Make “Check for a Coupon” Your Final Shopping Step" },
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
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">Coupon & Cashback Websites</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN - Article Content */}
            <article className="w-full lg:w-[65%]">
              {/* Post Header */}
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">SAVING STRATEGY</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">5 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">September 15, 2026</span>
                  </div>
                </div>
                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  Why You Should Shop Through Coupon and Cashback Websites
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/couponsbit/image/upload/v1789454980/why-shop-through-coupon-and-cashback-websites_jpxnir.webp"
                    alt="Why you should shop through coupon and cashback websites"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  Checking a coupon or cashback site before checkout can help you shop smarter
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    &ldquo;You&rsquo;re already going to buy it. So why pay more than you have to?&rdquo;
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">
                <p className="mb-5">
                  You&rsquo;re already going to buy it. So why pay more than you have to?
                </p>
                <p className="mb-5">
                  That&rsquo;s the question worth asking before every online checkout. Whether you&rsquo;re replacing your sneakers, ordering takeout, booking a hotel, upgrading your tech, or simply restocking household essentials, there&rsquo;s often another step you can take before clicking &ldquo;Place Order&rdquo;: check a coupon or cashback website.
                </p>
                <p className="mb-5">
                  Platforms such as coupon sites and cashback portals have become part of the modern online shopping journey because they can help shoppers discover discounts, promo codes, cashback opportunities, and limited-time deals in one place.
                </p>
                <p className="mb-5">
                  And the best part? You don&rsquo;t necessarily have to change where you shop. You simply check for a better before you complete the purchase.
                </p>

                <h2 id="what-are-coupon-cashback-websites" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  What Are Coupon and Cashback Websites?
                </h2>
                <p className="mb-5">
                  Coupon and cashback websites work as a bridge between shoppers and online retailers.
                </p>
                <p className="mb-5">
                  Instead of visiting a retailer directly, you can first visit a savings platform to look for available promotions. Depending on the platform and retailer, you may find a promo code, percentage-off, free-shipping deal, sale information, or cashback opportunity.
                </p>
                <p className="mb-5">
                  When you use an eligible affiliate link or promotion, the retailer can recognize that the customer came through the partner platform. The retailer may then pay the platform a commission for generating the sale.
                </p>
                <p className="mb-5">
                  Some platforms use part of that commission to provide cashback to shoppers, while others focus primarily on helping users find coupons and promotional offers.
                </p>
                <p className="mb-2">In simple terms, the process can look like this:</p>
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                  <p className="text-[#4b5563] text-sm">
                    Find a product → Check for savings → Apply an eligible offer → Complete your purchase → Save more
                  </p>
                </div>
                <p className="mb-5">
                  It&rsquo;s a small change to your shopping routine that can make a difference over time.
                </p>

                <h2 id="why-check-for-a-deal" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Why Check for a Deal Before You Buy?
                </h2>

                <h3 className="flex items-center text-black font-bold text-xl mt-8 mb-3">
                  <span className="w-1 h-6 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  You could save money on purchases you already planned to make
                </h3>
                <p className="mb-3">
                  The biggest reason to use a coupon website is also the most obvious: You may be able to reduce the cost of your purchase.
                </p>
                <p className="mb-3">
                  Imagine you&rsquo;ve already decided to spend $100 at an online retailer. Before checking out, you find a valid 15% promotional offer. You could potentially save $15 simply because you took a moment to look for an available deal.
                </p>
                <p className="mb-3">
                  The key is that you aren&rsquo;t buying something just because there&rsquo;s a coupon. You&rsquo;re checking for savings on something you were already planning to purchase.
                </p>
                <p className="mb-5">
                  That makes coupon hunting a practical part of shopping rather than an excuse to spend more.
                </p>

                <h3 className="flex items-center text-black font-bold text-xl mt-8 mb-3">
                  <span className="w-1 h-6 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  You can find offers without searching across multiple websites
                </h3>
                <p className="mb-3">
                  Finding a retailer&rsquo;s current promotion can sometimes take time. You might search the brand&rsquo;s website, check its email offers, look through social media, and search Google for a discount.
                </p>
                <p className="mb-3">
                  Coupon platforms bring many of these opportunities together.
                </p>
                <p className="mb-5">
                  A quick visit before checkout can help you discover promotions that you might otherwise overlook. This becomes particularly useful during major shopping periods such as{" "}
                  <Link href="/blog/upcoming-sales-2026" className="text-[#056bfa] hover:underline">
                    Black Friday, Cyber Monday
                  </Link>
                  ,{" "}
                  <Link href="/blog/holiday-shopping-calendar-2026" className="text-[#056bfa] hover:underline">
                    holiday shopping
                  </Link>
                  , back-to-school season, and end-of-season sales.
                </p>

                <h3 className="flex items-center text-black font-bold text-xl mt-8 mb-3">
                  <span className="w-1 h-6 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Cashback can add another layer of savings
                </h3>
                <p className="mb-3">
                  Coupons aren&rsquo;t the only way shoppers can benefit from affiliate platforms.
                </p>
                <p className="mb-3">
                  Cashback programs can give eligible shoppers a portion of the affiliate commission generated by their purchase. The exact amount, eligibility requirements, and payout conditions vary by platform and retailers.
                </p>
                <p className="mb-3">
                  For example, you might find a retailer offering a sale and also discover a cashback opportunity through a shopping platform. When the purchase qualifies, you could receive cashback after the transaction is confirmed.
                </p>
                <p className="mb-5">
                  That means the value of checking a shopping platform doesn&rsquo;t always end at the checkout page.
                </p>

                <h3 className="flex items-center text-black font-bold text-xl mt-8 mb-3">
                  <span className="w-1 h-6 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  You can discover deals you weren&rsquo;t actively looking for
                </h3>
                <p className="mb-3">
                  Online shopping can be overwhelming. Thousands of retailers compete for attention, and promotions change constantly.
                </p>
                <p className="mb-3">
                  A good deals platform can help shoppers discover brands, categories, and offers that match what they&rsquo;re already looking for.
                </p>
                <p className="mb-3">
                  Maybe you&rsquo;re shopping for running shoes and discover a sports retailer offering a better promotion. Perhaps you&rsquo;re{" "}
                  <Link href="/categories/hotels" className="text-[#056bfa] hover:underline">
                    booking a hotel
                  </Link>{" "}
                  and find a seasonal deal you hadn&rsquo;t seen. Or you&rsquo;re buying a birthday gift and come across a retailer offering free shipping.
                </p>
                <p className="mb-5">
                  That platform becomes more than a place to find coupon codes. It can become a starting point for smarter shopping decisions.
                </p>

                <h2 id="does-shopping-cost-more" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Does Shopping Through an Affiliate Website Cost More?
                </h2>
                <p className="mb-3">
                  This is a common concern, and the answer depends on the specific offer and retailer.
                </p>
                <p className="mb-3">
                  In a typical affiliate arrangement, the retailer pays the affiliate partner for sending a customer who completes an eligible purchase. The shopper generally doesn&rsquo;t pay the affiliate website simply for using its referral link.
                </p>
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-4 md:p-5 mb-5 italic">
                  <p className="text-[#4b5563] text-sm">
                    However, shoppers should always read the terms attached to a promotion. Some coupons have minimum spending requirements, exclusions, expiry dates, or restrictions on combining offers. Cashback programs can also have their own eligibility and tracking rules.
                  </p>
                </div>
                <p className="mb-5">
                  The smart approach is simple: check the deal details before completing your purchase.
                </p>

                <h2 id="why-couponsbit" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Why CouponsBit Be Part of Your Shopping Routine
                </h2>
                <p className="mb-3">
                  This is where a platform such as{" "}
                  <Link href="/stores" className="text-[#056bfa] hover:underline">
                    CouponsBit
                  </Link>{" "}
                  can make online shopping more convenient.
                </p>
                <p className="mb-3">
                  Instead of treating savings as something you look for after you&rsquo;ve already bought something, make it part of your routine before checkout.
                </p>
                <p className="mb-3">
                  Visit CouponsBit when you&rsquo;re ready to shop,{" "}
                  <Link href="/stores" className="text-[#056bfa] hover:underline">
                    search for the retailer you&rsquo;re interested in
                  </Link>
                  , and check the available coupons, promo codes, offers and deals. You can then choose the opportunity that makes the most sense for your purchase.
                </p>
                <p className="mb-3">
                  The goal isn&rsquo;t to make shopping complicated. It&rsquo;s the opposite.
                </p>
                <p className="mb-3">
                  Shop where you want. Check for savings first. Then buy.
                </p>
                <p className="mb-5">
                  Whether you're shopping for{" "}
                  <Link href="/categories/fashion" className="text-[#056bfa] hover:underline">
                    fashion
                  </Link>
                  , electronics, food, travel, home essentials, beauty products, or everyday necessities, taking a few seconds to look for an available offer can help you make your budget go further.
                </p>

                <h2 id="make-check-for-a-coupon-final-step" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Make &ldquo;Check for a Coupon&rdquo; Your Final Shopping Step
                </h2>
                <p className="mb-3">
                  We've all developed a shopping routine: add something to the cart, review the items, enter payment details, and place the order.
                </p>
                <p className="mb-3">
                  There's one step worth adding before that final click.
                </p>
                <p className="mb-3">
                  Check for a deal.
                </p>
                <p className="mb-3">
                  You may find nothing. You may find free shipping. You may find a promo code that cuts your total. You may even find a cashback opportunity.
                </p>
                <p className="mb-3">
                  But if you're going to make the purchase anyway, checking first costs very little and could save you money.
                </p>
                <p className="mb-3">
                  That is the real value of coupon and affiliate shopping websites. They don't need to change what you buy or where you shop. They simply give you another opportunity to shop smarter before you spend.
                </p>
                <p className="mb-3">
                  So the next time you're ready to hit &ldquo;Place Order,&rdquo; pause for a moment.
                </p>
                <p className="mb-3">
                  Your cart is ready. Your wallet might want you to check CouponsBit first.
                </p>
              </div>

              {/* Tags Section */}
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
                {[
                  "Coupon Websites", "Cashback", "Online Shopping", "Promo Codes", "Save Money"
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
                    { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
                    { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
                    { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
                    { name: "Booking", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/booking-logo_dtnn30.webp", dealText: "Up To 40% OFF", href: "/stores/booking-promo-code" },
                    { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Up To 30% OFF", href: "/stores/doordash-promo-code" },
                    { name: "Bluehost", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp", dealText: "Up to 69% OFF", href: "/stores/bluehost-discount-code" },
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

              {/* Box 3: Why Check First */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mt-5">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>💡</span> Why Check First
                </h4>
                <div className="space-y-1">
                  {[
                    { icon: Tag,         name: "Promo Codes",       color: "text-blue-500" },
                    { icon: Wallet,      name: "Cashback Offers",   color: "text-green-500" },
                    { icon: Percent,     name: "Sitewide Sales",    color: "text-purple-500" },
                    { icon: Gift,        name: "Free Shipping",     color: "text-rose-500" },
                    { icon: ShoppingBag, name: "Exclusive Deals",   color: "text-indigo-500" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 border-b border-[#f0f0f0] last:border-0">
                      <item.icon className={cn("w-4.5 h-4.5", item.color)} />
                      <span className="text-gray-600 font-bold text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
                <Link href="/stores" className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline">Browse All Stores →</Link>
              </div>
            </aside>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
