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
  Zap
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
  { id: "holiday-shopping-season", title: "Quick Fact: The Holiday Shopping Season Is Huge" },
  { id: "labor-day-sales", title: "Labor Day Sales: Start Saving in September" },
  { id: "halloween-sales", title: "Halloween Sales: Save on Costumes, Décor & More" },
  { id: "veterans-day-sales", title: "Veterans Day Sales: Look for Special Offers" },
  { id: "thanksgiving-sales", title: "Thanksgiving Sales: The Shopping Season Accelerates" },
  { id: "black-friday-2026", title: "Black Friday 2026: Compare Before You Buy" },
  { id: "cyber-monday-2026", title: "Cyber Monday 2026: Shop Online for More Deals" },
  { id: "christmas-sales", title: "Christmas Sales: Shop for Everyone on Your List" },
  { id: "year-end-sales", title: "Year-End Sales: One Last Chance to Save" },
  { id: "save-more-holiday-sales", title: "How to Save More During U.S. Holiday Sales" },
  { id: "shop-smarter-couponsbit", title: "Shop Smarter With CouponsBit" },
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
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">Upcoming Sales 2026</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN - Article Content */}
            <article className="w-full lg:w-[65%]">
              {/* Post Header */}
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">SAVINGS GUIDE</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">6 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">June 23, 2026</span>
                  </div>
                </div>
                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  The Biggest U.S. Sales Coming Up in 2026 
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/couponsbit/image/upload/v1787725876/upcoming-sales-2026_nqxs3z.webp"
                    alt="Upcoming Sales 2026 Calendar"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  Plan your purchases around major sales events to lock in maximum discounts
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    "Timing your purchases around key shopping holidays is the single most effective way to save money online."
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">
  <p className="mb-5">
    The second half of the year has started and it brings some of the biggest shopping opportunities in the United States. From Labor Day and Halloween to Thanksgiving, Black Friday, Cyber Monday, Christmas, and year-end clearance sales, retailers roll out promotions across fashion, electronics, home, beauty, travel, and everyday essentials.
  </p>
  <p className="mb-5">
    For shoppers, these events create plenty of opportunities to save. But knowing when to shop, what to buy, and how to find an extra discount can make a bigger difference than simply waiting for a sale.
  </p>
  <p className="mb-5">
    And guess what, CouponsBit can help. Instead of visiting dozens of websites to hunt for discounts, shoppers can use CouponsBit to discover coupon codes, promo codes, discount codes, deals, and offers for popular brands.
  </p>
  <p className="mb-5">
    Here is your guide to the biggest upcoming U.S. shopping occasions in 2026 and how you can make the most of them.
  </p>

  {/* Callout Box */}
  <div className="space-y-3 bg-[#e8f6f8] p-6 rounded-2xl border-l-4 border-[#056bfa] my-6">
    <h3 className="font-bold text-black text-lg flex items-center gap-2">
      <span>💡</span> Quick Fact: The Holiday Shopping Season Is Huge
    </h3>
    <p className="text-sm text-[#4b5563] leading-relaxed">
      Thanksgiving weekend has become one of the busiest shopping periods in the U.S. In 2025, a record 202.9 million Americans shopped during the five-day period from Thanksgiving through Cyber Monday, according to the National Retail Federation.
    </p>
    <p className="text-sm text-[#4b5563] leading-relaxed">
      The five-day shopping stretch starts with Thanksgiving and includes Black Friday and Cyber Monday. Retailers have increasingly extended promotions across a longer period instead of limiting discounts to a single day.
    </p>
  </div>

  <h2 id="labor-day-sales" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
    <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block" aria-hidden="true"></span>
    Labor Day Sales: Start Saving in September
  </h2>
  <p className="mb-5">
    Labor Day falls on September 7, 2026, marking one of the first major shopping opportunities of the fall season.
  </p>
  <p className="mb-5">
    Retailers often use Labor Day promotions to clear summer inventory and introduce fall merchandise. That makes this period particularly interesting for shoppers looking for deals on:
  </p>
  <ul className="list-disc list-inside space-y-2 mb-5 pl-2">
    <li>Clothing and footwear</li>
    <li>Furniture</li>
    <li>Mattresses</li>
    <li>Appliances</li>
    <li>Home improvement products</li>
    <li>Outdoor products</li>
    <li>Electronics</li>
  </ul>
  <p className="mb-5">
    If you already have something on your shopping list, don't simply look at the sale price. Search CouponsBit for the retailer's latest coupon code or promo code as well. You may be able to combine a sale with another eligible offer, depending on the retailer's terms.
  </p>

  <h3 className="font-bold text-black text-lg mt-6 mb-2">How to save more during Labor Day</h3>
  <p className="mb-5">
    Start watching prices before the sale begins. Compare the promotional price with the item's usual price, check the retailer's coupon policy, and look for free-shipping offers or additional promo codes.
  </p>
  <p className="mb-5">
    The goal isn't to buy because something says "sale." It's to buy because the final price makes sense.
  </p>

  <h2 id="halloween-sales" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
    <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block" aria-hidden="true"></span>
    Halloween Sales: Save on Costumes, Décor & More
  </h2>
  <p className="mb-5">
    Halloween arrives on October 31, and retailers typically start promoting Halloween products well before the big day.
  </p>
  <p className="mb-5">
    If you're shopping for a Halloween party, decorating your home, or putting together costumes for the family, October can offer plenty of opportunities to save.
  </p>
  <p className="mb-3 font-semibold text-black">Popular Halloween shopping categories include:</p>
  <ul className="list-disc list-inside space-y-2 mb-5 pl-2">
    <li><Link href="/stores/spirit-halloween-discount-code" className="text-[#056bfa] hover:underline">Costumes</Link></li>
    <li>Decorations</li>
    <li>Party supplies</li>
    <li>Candy</li>
    <li>Makeup and accessories</li>
    <li>Home décor</li>
    <li>Kids' products</li>
  </ul>
  <p className="mb-5">
    One smart strategy is to shop early for popular items. Waiting until the final few days may leave you with fewer choices, even if retailers introduce deeper clearance discounts later.
  </p>
  <p className="mb-5">
    If you're buying multiple items, check whether a retailer offers a percentage-off coupon, category discount, or free-shipping code. CouponsBit can help you look for those additional savings before checkout.
  </p>

  <h2 id="veterans-day-sales" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
    <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block" aria-hidden="true"></span>
    Veterans Day Sales: Look for Special Offers
  </h2>
  <p className="mb-5">
    Veterans Day falls on November 11, 2026.
  </p>
  <p className="mb-5">
    Veterans Day is primarily a day to honor U.S. military veterans, but many retailers also run special promotions around the occasion. Some brands provide dedicated discounts for veterans and military members, while others launch broader seasonal sales.
  </p>
  <p className="mb-5">
    The eligibility requirements can differ significantly between retailers, so shoppers should always check the terms before assuming a discount applies.
  </p>
  <p className="mb-3 font-semibold text-black">For eligible shoppers, Veterans Day can be an excellent time to compare:</p>
  <ul className="list-disc list-inside space-y-2 mb-5 pl-2">
    <li>Electronics</li>
    <li>Clothing</li>
    <li>Shoes</li>
    <li>Home products</li>
    <li>Travel</li>
    <li>Restaurants</li>
    <li>Fitness products</li>
  </ul>
  <p className="mb-5">
    Even when a retailer doesn't offer a Veterans Day promotion, you may still find a regular coupon code or discount code through CouponsBit.
  </p>

  <h2 id="thanksgiving-sales" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
    <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block" aria-hidden="true"></span>
    Thanksgiving Sales: The Shopping Season Accelerates
  </h2>
  <p className="mb-5">
    Thanksgiving Day falls on November 26, 2026.
  </p>
  <p className="mb-5">
    For many shoppers, Thanksgiving marks the beginning of the most important shopping stretch of the year.
  </p>
  <p className="mb-5">
    Retailers know that consumers are preparing for Christmas, buying gifts, <Link href="/stores/kroger-discount-code" className="text-[#056bfa] hover:underline">hosting gatherings</Link>, and taking advantage of seasonal promotions. As a result, sales can cover almost every major shopping category.
  </p>
  <p className="mb-3 font-semibold text-black">What can you shop for?</p>
  <ul className="list-disc list-inside space-y-2 mb-5 pl-2">
    <li><strong className="text-black">Home:</strong> Furniture, kitchen appliances, décor, bedding and home improvement products.</li>
    <li><strong className="text-black">Electronics:</strong> TVs, laptops, headphones, smart-home devices and accessories.</li>
    <li><strong className="text-black">Fashion:</strong> Clothing, shoes, bags, accessories and winter wear.</li>
    <li><strong className="text-black">Beauty:</strong> Skincare, makeup, fragrances and personal-care products.</li>
    <li><strong className="text-black">Gifts:</strong> Toys, games, gadgets, fashion, beauty and lifestyle products.</li>
  </ul>
  <p className="mb-5">
    The biggest mistake shoppers can make during Thanksgiving weekend is assuming that the first deal they see is automatically the best one.
  </p>
  <p className="mb-2 font-bold text-black">Compare.</p>
  <p className="mb-2 font-bold text-black">Check competing retailers.</p>
  <p className="mb-2 font-bold text-black">Look for coupon codes.</p>
  <p className="mb-5 font-bold text-black">And calculate the final checkout price.</p>

  <h2 id="black-friday-sales" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
    <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block" aria-hidden="true"></span>
    Black Friday 2026: Compare Before You Buy
  </h2>
  <p className="mb-5">
    Black Friday falls on November 27, 2026, the day after Thanksgiving.
  </p>
  <p className="mb-5">
    Black Friday remains one of the most recognizable shopping events in the United States. However, the way people shop during Black Friday has changed.
  </p>
  <p className="mb-5">
    You no longer need to wake up early and stand outside a store to find deals. Retailers now launch promotions online, extend sales across multiple days, and sometimes start Black Friday campaigns well before Thanksgiving.
  </p>

  <p className="mb-3 font-semibold text-black">What should you shop for on Black Friday?</p>
  <p className="mb-3">Black Friday can be particularly attractive for:</p>
  <ul className="list-disc list-inside space-y-2 mb-5 pl-2">
    <li>TVs and electronics</li>
    <li>Laptops and accessories</li>
    <li><Link href="/stores/amazon-discount-code" className="text-[#056bfa] hover:underline">Smartphones</Link></li>
    <li>Home appliances</li>
    <li>Furniture</li>
    <li>Clothing</li>
    <li>Shoes</li>
    <li>Beauty products</li>
    <li>Toys</li>
    <li>Gaming products</li>
  </ul>

  <h3 className="font-bold text-black text-lg mt-6 mb-2">How CouponsBit can help</h3>
  <p className="mb-5">
    Before purchasing a Black Friday deal, search the retailer on CouponsBit.
  </p>
  <p className="mb-3 font-semibold text-black">You may find:</p>
  <div className="bg-[#e8f6f8] p-4 rounded-xl border border-[#056bfa]/20 my-4 text-black font-medium text-center">
    Sale price + coupon code + free shipping = greater overall savings
  </div>
  <p className="mb-5">
    Of course, retailers decide whether coupons can be combined with sale prices, so always check the offer's terms.
  </p>
  <p className="mb-5">
    Black Friday should also be about research, not rushing. Create a shopping list before the event, compare prices, and avoid buying something simply because the retailer labels it a "doorbuster."
  </p>

  <h2 id="cyber-monday-sales" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
    <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block" aria-hidden="true"></span>
    Cyber Monday 2026: Shop Online for More Deals
  </h2>
  <p className="mb-5">
    If Black Friday is traditionally associated with major retail promotions, Cyber Monday focuses heavily on online shopping.
  </p>
  <p className="mb-5">
    In 2026, Cyber Monday falls on November 30.
  </p>
  <p className="mb-5">
    The event has become one of the busiest online shopping occasions in the U.S. Retailers often use Cyber Monday to promote electronics, software, fashion, beauty, <Link href="/stores/walmart-promo-code" className="text-[#056bfa] hover:underline">home products</Link>, and other online-friendly categories.
  </p>

  <h3 className="font-bold text-black text-lg mt-6 mb-2">Why shoppers should pay attention to Cyber Monday</h3>
  <p className="mb-5">
    You can shop from home, compare multiple retailers quickly, and search for additional online coupon codes before completing your order.
  </p>
  <p className="mb-5">
    This is where a coupon website becomes particularly useful.
  </p>
  <p className="mb-3 font-semibold text-black">Instead of opening multiple retailer websites individually, shoppers can use CouponsBit to look for available:</p>
  <ul className="list-disc list-inside space-y-2 mb-5 pl-2">
    <li>Promo codes</li>
    <li>Coupon codes</li>
    <li>Discount codes</li>
    <li>Online deals</li>
    <li>Store offers</li>
    <li>Free-shipping promotions</li>
  </ul>
  <p className="mb-5">
    If you missed a Black Friday deal, don't automatically assume you've missed your opportunity. Check the retailer again on Cyber Monday because some brands change their offers throughout the weekend.
  </p>

  <h2 id="christmas-sales" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
    <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block" aria-hidden="true"></span>
    Christmas Sales: Shop for Everyone on Your List
  </h2>
  <p className="mb-5">
    After Black Friday and Cyber Monday, the focus shifts toward holiday gifting.
  </p>
  <p className="mb-5">
    Christmas Day falls on December 25, but Christmas shopping starts much earlier.
  </p>
  <p className="mb-5">
    This period is ideal for shoppers who need <Link href="/stores/target-discount-code" className="text-[#056bfa] hover:underline">gifts</Link> for family members, friends, coworkers, or themselves.
  </p>
  <p className="mb-3 font-semibold text-black">Popular categories include:</p>
  <ul className="list-disc list-inside space-y-2 mb-5 pl-2">
    <li>Fashion</li>
    <li>Beauty</li>
    <li>Electronics</li>
    <li>Toys</li>
    <li>Home décor</li>
    <li>Kitchen products</li>
    <li><Link href="/stores/macys-promo-code" className="text-[#056bfa] hover:underline">Jewelry</Link></li>
    <li>Fitness products</li>
    <li>Personal accessories</li>
  </ul>

  <h3 className="font-bold text-black text-lg mt-6 mb-2">Create a gift list before shopping</h3>
  <p className="mb-5">
    One simple way to avoid overspending is to create a list before you start browsing.
  </p>
  <p className="mb-5">
    Assign a budget to each person and search for offers based on what you actually need. Then check CouponsBit before purchasing to see whether the retailer has a working discount code.
  </p>
  <p className="mb-5">
    This approach can help prevent the classic holiday mistake of adding unnecessary items to your cart simply because they're discounted.
  </p>

  <h2 id="year-end-sales" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
    <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block" aria-hidden="true"></span>
    Year-End Sales: One Last Chance to Save
  </h2>
  <p className="mb-5">
    After Christmas, retailers often shift their attention toward clearance and year-end sales.
  </p>
  <p className="mb-5">
    December 26 through the end of the year can bring discounts as retailers make room for new inventory. This makes the period particularly interesting for shoppers who don't need their purchases immediately.
  </p>
  <p className="mb-3 font-semibold text-black">You may find opportunities in categories such as:</p>
  <ul className="list-disc list-inside space-y-2 mb-5 pl-2">
    <li>Winter clothing</li>
    <li>Shoes</li>
    <li>Home décor</li>
    <li>Furniture</li>
    <li>Electronics</li>
    <li>Beauty</li>
    <li>Seasonal products</li>
    <li>Accessories</li>
  </ul>
  <p className="mb-5">
    The best purchases during year-end sales are often items you can use beyond the holiday season.
  </p>
  <p className="mb-5">
    For example, if you find a heavily discounted winter coat that you genuinely need, the timing may work in your favor. But buying Christmas-themed décor simply because it has received a large markdown may not provide much value after the holidays.
  </p>
  <p className="mb-5 font-bold text-black">
    A big discount doesn't automatically mean a good deal.
  </p>

  <h2 id="how-to-save-more" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
    <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block" aria-hidden="true"></span>
    How to Save More During U.S. Holiday Sales
  </h2>
  <p className="mb-5">
    Knowing the shopping calendar gives you a head start, but your shopping habits determine how much you actually save.
  </p>

  <div className="space-y-6 my-6 pl-2">
    <div>
      <h3 className="font-bold text-black text-lg mb-1">1. Start with a shopping list</h3>
      <p>Write down what you need before opening your favorite retailer's website. A list helps you focus on planned purchases rather than impulse buys.</p>
    </div>

    <div>
      <h3 className="font-bold text-black text-lg mb-1">2. Compare prices</h3>
      <p>Don't assume every retailer offers the same deal. Compare the final price, shipping fees, return policy, and included benefits.</p>
    </div>

    <div>
      <h3 className="font-bold text-black text-lg mb-1">3. Search for discount or promo codes</h3>
      <p>Before checkout, search CouponsBit for the retailer's latest coupon codes, promo codes, and discount offers.</p>
      <p className="mt-2">You might find an additional saving that isn't immediately visible on the retailer's sale page.</p>
    </div>

    <div>
      <h3 className="font-bold text-black text-lg mb-1">4. Check the terms</h3>
      <p>Some coupons only work on selected products. Others require a minimum purchase or exclude sale items.</p>
      <p className="mt-2">Always read the conditions before applying a code.</p>
    </div>

    <div>
      <h3 className="font-bold text-black text-lg mb-1">5. Watch prices before major sales</h3>
      <p>Tracking prices before Black Friday or Cyber Monday can help you understand whether a discount represents a meaningful reduction.</p>
    </div>

    <div>
      <h3 className="font-bold text-black text-lg mb-1">6. Don't wait for the final day</h3>
      <p>Some promotions have limited inventory or end earlier than expected. If you've found a good price on something you genuinely need, waiting indefinitely for a larger discount can backfire.</p>
    </div>

    <div>
      <h3 className="font-bold text-black text-lg mb-1">7. Think about the final price</h3>
      <p className="mb-2">A 30% discount sounds attractive, but the real question is:</p>
      <p className="font-semibold text-black italic mb-2">What will you actually pay after the coupon, shipping, taxes, and other applicable charges?</p>
      <p className="font-bold text-[#056bfa]">That's the number that matters.</p>
    </div>
  </div>

  <h2 id="shop-smarter" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
    <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block" aria-hidden="true"></span>
    Shop Smarter With CouponsBit
  </h2>
  <p className="mb-5">
    The biggest shopping events of the year don't have to mean spending more.
  </p>
  <p className="mb-5">
    With a little planning, you can use seasonal sales to buy the things you already need while looking for additional ways to reduce your final cost.
  </p>
  <p className="mb-5">
    From Labor Day sales in September to Halloween and Veterans Day, and then the major Thanksgiving–Black Friday–Cyber Monday shopping period, followed by Christmas and year-end clearance, there are plenty of opportunities to shop strategically.
  </p>
  <p className="mb-5">
    Before you hit "Place Order," make one final stop at CouponsBit.
  </p>
  <p className="mb-5">
    Search for the retailer, check the available coupon codes, promo codes, discount codes, deals, and offers, read the terms, and then compare your final price.
  </p>
  <p className="mb-2 font-bold text-black">
    Because the smartest shopper isn't necessarily the person who finds the biggest sale.
  </p>
  <p className="mb-5 font-bold text-[#056bfa] text-lg">
    It's the person who finds the best final price.
  </p>
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
      <div
        key={i}
        className={`flex items-start gap-3 py-2.5 ${i !== sections.length - 1 ? 'border-b border-[#f5f5f5]' : ''}`}
      >
        <span className="text-[#056bfa] font-bold text-[11px] mt-1 shrink-0">
          {(i + 1).toString().padStart(2, '0')}
        </span>
        <span className="text-gray-600 text-[13px] leading-[1.4]">
          {section.title}
        </span>
      </div>
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
                    { name: "Macy's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp", dealText: "Up To 75% OFF", href: "/stores/macys-promo-code" },
                    { name: "Spirit Halloween", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/spirti-logo_x4nbor.webp", dealText: "Up To 75% OFF", href: "/stores/spirit-halloween-discount-code" },
                    { name: "Kroger Digital", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/kroger-logo_berwr1.webp", dealText: "Up To 50% OFF", href: "/stores/kroger-discount-code" },
                  ].map((store, i) => (
                    <Link
                      key={store.name}
                      href={store.href}
                      className={`flex items-center gap-3 pb-4 group ${i !== 5 ? 'border-b border-[#f0f0f0]' : ''}`}
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
                    { icon: Laptop, name: "Electronics",        count: "850+", color: "text-blue-500",   href: "/categories/electronics" },
                    { icon: Plane,  name: "Travel",             count: "420+", color: "text-teal-500",   href: "/categories/travel" },
                    { icon: Tv,     name: "Entertainment",      count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                    { icon: Code,   name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                    { icon: Zap,    name: "Mobile & Telecom",   count: "320+", color: "text-green-500",  href: "/categories/mobile" }
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