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
  Home,
  Utensils,
  Sparkles,
  Tag,
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
    { id: "halloween-costume", title: "1. Find Your Perfect Halloween Costume" },
    { id: "haunted-house", title: "2. Turn Your Home Into a Haunted House" },
    { id: "candy-and-treats", title: "3. Stock Up on Halloween Candy and Treats" },
    { id: "party-essentials", title: "4. Shop for Halloween Party Essentials" },
    { id: "beauty-and-accessories", title: "5. Don't Forget Halloween Beauty and Accessories" },
    { id: "affordable-with-couponsbit", title: "6. Make Halloween Shopping More Affordable With CouponsBit" },
    { id: "shop-early", title: "7. Shop Early for the Best Halloween Experience" },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    { q: "When should I start Halloween shopping in 2026?", a: "Starting early gives you more time to compare products, check delivery estimates and find suitable discounts, especially for popular costumes, party supplies and decorations." },
    { q: "Where can I find Halloween coupon codes?", a: <>You can check <Link href="/deals" className="text-[#056bfa] hover:underline">CouponsBit</Link> for available Halloween coupon codes, promo codes and discount codes from participating online retailers.</> },
    { q: "What should I buy early for Halloween?", a: "Costumes, decorations and party supplies are worth buying early since popular sizes and styles can sell out closer to October 31." },
    { q: "How do I use a Halloween promo code?", a: "Add eligible items to your cart, proceed to checkout, enter the code in the designated promo-code field and confirm the discount has been applied before completing your order." },
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
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">Halloween Shopping Guide 2026</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN - Article Content */}
            <article className="w-full lg:w-[65%]">
              {/* Post Header */}
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">HALLOWEEN GUIDE</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">5 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">October 9, 2026</span>
                  </div>
                </div>
                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  Halloween Shopping Guide 2026: Spooky Deals You Can’t Miss
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/couponsbit/image/upload/v1791548920/halloween-shopping-guide-2026_ctk0zx.webp"
                    alt="Halloween Shopping Guide 2026 – Best Halloween Coupon Codes & Deals"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  Smart Halloween shopping tips for costumes, decorations, candy and more in 2026
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    “After all, the only thing that should give you a fright is the Halloween décor—not your shopping bill!”
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">
                <p className="mb-5">
                  Halloween is the perfect excuse to get creative, dress up, decorate your home, and enjoy some spooky fun. From planning a standout costume to filling your candy bowl and hosting a Halloween party, there’s plenty to shop for before October 31. But with so many things on your list, the expenses can quickly add up.
                </p>
                <p className="mb-5">
                  The good news? You don’t have to spend a fortune to celebrate Halloween in style. With a little planning, smart shopping, and the right Halloween coupon codes, you can find great deals on seasonal essentials while keeping more money in your pocket.
                </p>
                <p className="mb-5">
                  If you’re getting ready for Halloween 2026, here’s how to make your shopping more exciting and budget-friendly with CouponsBit.
                </p>

                <h2 id="halloween-costume" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  1. Find Your Perfect Halloween Costume
                </h2>
                <p className="mb-5">
                  A Halloween costume is often the highlight of the celebration. Whether you’re dressing up as a classic vampire, a movie character, a spooky skeleton, or something completely original, the right outfit can make your Halloween memorable.
                </p>
                <p className="mb-5">
                  Start shopping early to explore more options in your size and style. Look for <Link href="/stores/spirit-halloween-discount-code" className="text-[#056bfa] hover:underline">costumes</Link>, wigs, masks, makeup, and accessories at retailers that offer seasonal promotions. You can also create a unique look by combining pieces you already own with a few new additions.
                </p>
                <p className="mb-5">
                  Before checking out, look for a Halloween promo code or costume discount code on <Link href="/deals" className="text-[#056bfa] hover:underline">CouponsBit</Link>. Even a small discount can help when you’re shopping for multiple outfits for yourself, your partner, or the whole family.
                </p>

                <h2 id="haunted-house" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  2. Turn Your Home Into a Haunted House
                </h2>
                <p className="mb-5">
                  No Halloween celebration feels complete without a few spooky decorations. From glowing pumpkins and creepy cobwebs to skeletons, artificial spiders, and eerie outdoor lights, decorations help set the mood for trick-or-treaters and party guests.
                </p>
                <p className="mb-5">
                  You don’t need to transform every room to create a memorable Halloween atmosphere. Focus on a few high-impact areas, such as your front porch, entrance, living room, or party table. Reusable decorations can also help you save money in the years ahead.
                </p>
                <p className="mb-5">
                  Explore <Link href="/stores/wayfair-discount-code" className="text-[#056bfa] hover:underline">home and décor retailers</Link> for Halloween deals, then check CouponsBit for available discount codes and online coupons before placing your order. This way, you can make your space look spooky without making your shopping bill frightening.
                </p>

                <h2 id="candy-and-treats" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  3. Stock Up on Halloween Candy and Treats
                </h2>
                <p className="mb-5">
                  For many American households, Halloween means one important thing: candy! Whether you’re preparing for trick-or-treaters, filling treat bags, or planning a movie night with friends, stocking up on sweets is part of the fun.
                </p>
                <p className="mb-5">
                  Make a list of the treats you need before heading to the store. Buying the right quantities can help prevent last-minute purchases and unnecessary spending. If you’re hosting a gathering, consider adding popcorn, cookies, chocolates, and other snacks to your menu.
                </p>
                <p className="mb-5">
                  Check <Link href="/stores/kroger-discount-code" className="text-[#056bfa] hover:underline">grocery stores</Link> and online retailers for seasonal offers, bundle deals, and discounts on bulk purchases. If an eligible coupon or promotional code is available, apply it at checkout to make your Halloween treat budget go further.
                </p>

                <h2 id="party-essentials" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  4. Shop for Halloween Party Essentials
                </h2>
                <p className="mb-5">
                  Hosting a Halloween party? It’s time to plan your menu, choose a theme, and gather everything you need to entertain your guests.
                </p>
                <p className="mb-5">
                  Look for themed plates, cups, tablecloths, serving trays, string lights, and party favors. You can also find creative ways to decorate using items you already have at home. A little DIY creativity can make your party look impressive without requiring a big budget.
                </p>
                <p className="mb-5">
                  If you need new <Link href="/stores/target-discount-code" className="text-[#056bfa] hover:underline">kitchenware</Link>, lighting, or entertaining essentials, compare prices across retailers before buying. Search CouponsBit for relevant Halloween deals and promo codes that may help you save on eligible purchases.
                </p>

                <h2 id="beauty-and-accessories" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  5. Don’t Forget Halloween Beauty and Accessories
                </h2>
                <p className="mb-5">
                  Halloween is also a great time to experiment with <Link href="/stores/sephora-promo-code" className="text-[#056bfa] hover:underline">makeup</Link> and accessories. From dramatic eyeliner and glitter to face paint, colored accessories, and themed nail designs, small details can bring your costume to life.
                </p>
                <p className="mb-5">
                  If you’re planning a detailed look, check your makeup collection first and buy only what you need. For new products, look for beauty promotions and retailer discounts. Always check product instructions and suitability, especially when using face paint or cosmetics near your eyes.
                </p>
                <p className="mb-5">
                  Before completing your purchase, visit CouponsBit to look for beauty coupon codes and promotional offers that apply to your chosen products.
                </p>

                <h2 id="affordable-with-couponsbit" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  6. Make Halloween Shopping More Affordable With CouponsBit
                </h2>
                <p className="mb-5">
                  Shopping for Halloween can involve several purchases across different categories. That’s why checking for discounts before checkout is a simple habit worth building.
                </p>
                <p className="mb-5">
                  <Link href="/deals" className="text-[#056bfa] hover:underline">CouponsBit</Link> helps shoppers discover coupon codes, promo codes, discount codes, and deals for participating online retailers. Instead of paying the listed price straight away, you can check whether a relevant offer is available for your shopping cart.
                </p>
                <p className="mb-2">Here’s how to make the most of your savings:</p>
                <ul className="list-disc list-inside space-y-1 mb-5 pl-2">
                  <li><strong className="text-black">Plan your shopping list:</strong> Decide what you need for costumes, decorations, candy, and parties before browsing.</li>
                  <li><strong className="text-black">Compare prices:</strong> Check different <Link href="/stores" className="text-[#056bfa] hover:underline">retailers</Link> to find an offer that suits your budget.</li>
                  <li><strong className="text-black">Look for Halloween coupon codes:</strong> Visit CouponsBit to discover available promotions for participating stores.</li>
                  <li><strong className="text-black">Read the terms:</strong> Check minimum purchase requirements, product exclusions, expiration dates, and other restrictions.</li>
                  <li><strong className="text-black">Apply the code at checkout:</strong> Enter a valid promo code in the designated field and confirm that the discount has been applied.</li>
                  <li><strong className="text-black">Focus on the final price:</strong> Consider shipping fees and other charges before deciding which deal offers the best value.</li>
                </ul>
                <p className="mb-5">
                  Remember, the best deal isn’t always the one with the biggest advertised percentage off. It’s the one that helps you buy what you actually need at a price that works for you.
                </p>

                <h2 id="shop-early" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  7. Shop Early for the Best Halloween Experience
                </h2>
                <p className="mb-5">
                  Waiting until the last minute can limit your choices, especially for popular costumes, party supplies, and decorations. Starting early gives you more time to compare products, check delivery estimates, and find suitable discounts.
                </p>
                <p className="mb-5">
                  However, if Halloween is just around the corner, don’t panic. Focus on essential purchases, check local stores for immediate availability, and look for <Link href="/deals-of-the-day" className="text-[#056bfa] hover:underline">online deals</Link> with delivery dates that meet your needs.
                </p>
                <p className="mb-5">
                  You can also plan ahead for next year by choosing reusable decorations and accessories that you can store safely after the celebrations.
                </p>

                <h2 className="flex items-center text-black font-extrabold text-2xl mt-12 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Make Halloween 2026 Spooky, Fun, and Budget-Friendly
                </h2>
                <p className="mb-5">
                  Halloween is about creativity, community, and making memories—not about overspending. Whether you’re planning an elaborate costume, decorating your home, preparing treat bags, or hosting a themed party, a little smart shopping can make a real difference.
                </p>
                <p className="mb-5">
                  Before you complete your seasonal purchases, visit <Link href="/deals" className="text-[#056bfa] hover:underline">CouponsBit</Link> to explore available Halloween coupon codes, promo codes, discounts, and deals from participating <Link href="/stores" className="text-[#056bfa] hover:underline">retailers</Link>. Compare offers, check the terms, and choose the savings opportunities that fit your plans.
                </p>
                <p className="mb-5">
                  This Halloween, let your creativity run wild and your spending stay under control. After all, the only thing that should give you a fright is the Halloween décor—not your shopping bill!
                </p>

                <h2 className="flex items-center text-black font-extrabold text-2xl mt-12 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4 mb-8">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-[#f0f0f0]">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                      >
                        <span className="text-black font-bold text-sm">{faq.q}</span>
                        <ChevronRight className={cn("w-4 h-4 text-[#056bfa] transition-transform shrink-0 ml-3", openFaq === i && "rotate-90")} />
                      </button>
                      <div className={cn("overflow-hidden transition-all duration-300 px-6", openFaq === i ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0")}>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Section */}
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
                {[
                  "CouponsBit", "Halloween Shopping", "Halloween Costumes", "Halloween Decorations", "Coupon Codes", "Halloween 2026"
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
                <div className="space-y-1 max-h-[420px] overflow-y-auto pr-1">
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

              {/* Box 2: Popular Stores */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🎃</span> Popular Halloween Stores
                </h4>
                <div className="space-y-4">
                  {[
                    { name: "Spirit Halloween", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/spirti-logo_x4nbor.webp", dealText: "Up To 75% OFF", href: "/stores/spirit-halloween-discount-code" },
                    { name: "Wayfair", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/wayfair-logo_upnj98.webp", dealText: "Up To 80% OFF", href: "/stores/wayfair-discount-code" },
                    { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
                    { name: "Kroger Digital", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/kroger-logo_berwr1.webp", dealText: "Up To 50% OFF", href: "/stores/kroger-discount-code" },
                    { name: "Sephora", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/Sephora-Logo_djk72l.webp", dealText: "Up To 50% OFF", href: "/stores/sephora-promo-code" },
                    { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra", href: "/stores/home-depot-discount-code" },
                  ].map((store, i) => (
                    <Link
                      key={store.name}
                      href={store.href}
                      className={`flex items-center gap-3 pb-4 group ${i !== 5 ? 'border-b border-[#f0f0f0]' : ''}`}
                    >
                      <div className="w-10 h-10 shrink-0 rounded-xl border border-[#f0f0f0] bg-white flex items-center justify-center overflow-hidden">
                        <img src={store.logo} alt={store.name} width={40} height={40} loading="lazy" className="w-full h-full object-contain" />
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
                  <span>🗂️</span> Shop By Category
                </h4>
                <div className="space-y-1">
                  {[
                    { icon: ShoppingBag, name: "Fashion",       count: "900+", color: "text-blue-500",   href: "/categories/fashion" },
                    { icon: Home,        name: "Home",          count: "260+", color: "text-teal-500",   href: "/categories/home" },
                    { icon: Utensils,    name: "Food & Dining", count: "180+", color: "text-orange-500", href: "/categories/food" },
                    { icon: Sparkles,    name: "Entertainment", count: "150+", color: "text-purple-500", href: "/categories/entertainment" },
                    { icon: Tag,         name: "Gaming",        count: "90+",  color: "text-green-500",  href: "/categories/gaming" }
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

        {/* Continue Reading Section */}
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
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1789454980/why-shop-through-coupon-and-cashback-websites_jpxnir.webp",
                  date: "September 15, 2026",
                  readTime: "5 MIN READ",
                  title: "Why You Should Shop Through Coupon and Cashback Websites",
                  desc: "Learn how coupon and cashback websites help you save money with promo codes, cashback offers, and exclusive deals. Shop smarter and find the best savings with CouponsBit.",
                  href: "/blog/why-shop-through-coupon-and-cashback-websites",
                },
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1789389490/gamsgo-discount-code-and-promo-codes_uqqkua.webp",
                  date: "September 14, 2026",
                  readTime: "5 MIN READ",
                  title: "Get More Savings With a GamsGo Promo Code",
                  desc: "Looking for a GamsGo discount code? Discover how to find and apply GamsGo promo codes and save more on digital subscriptions, gaming, AI tools and software.",
                  href: "/blog/how-to-use-gamsgo-discount-code",
                },
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1783578422/holiday-shopping-calendar-2026_ak4cju.webp",
                  date: "July 9, 2026",
                  readTime: "10 MIN READ",
                  title: "Holiday Shopping Calendar 2026: The Best Times to Shop & Save Money",
                  desc: "Discover the complete Holiday Shopping Calendar 2026 for the USA — the best time to buy electronics, fashion, furniture and more while saving with coupon codes.",
                  href: "/blog/holiday-shopping-calendar-2026",
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
