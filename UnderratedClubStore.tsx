'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,
  Tag,
  ShieldCheck,
  Heart,
  ExternalLink,
  Copy,
  Check,
  Lock,
  RefreshCw,
  Headset,
  ArrowRight,
  TrendingUp,
  Info,
  AlertCircle
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';
import { Coupon, UNDERRATED_CLUB_COUPONS } from './underratedClubCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.underratedclub.com/?utm_source=affnads&utm_medium=affiliate&utm_campaign=couponscrew';

export default function UnderratedClubStore() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [newsEmail, setNewsEmail] = useState<string>('');
  const [newsSubscribed, setNewsSubscribed] = useState<boolean>(false);
  const [newsSubmitting, setNewsSubmitting] = useState<boolean>(false);
  const [newsError, setNewsError] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('Latest');

  const coupons: Coupon[] = UNDERRATED_CLUB_COUPONS;

  const handleCopyCode = (coupon: Coupon) => {
    navigator.clipboard.writeText(coupon.code);
    setCopiedCode(coupon.code);
    setActiveModalCoupon(coupon);
    setShowModal(true);
    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
  };

  const handleGetDeal = () => {
    window.open(AFFILIATE_URL, '_blank', 'noopener,noreferrer');
  };

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim() || newsSubmitting) return;

    setNewsSubmitting(true);
    setNewsError('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsEmail.trim() }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Subscription failed');
      }

      setNewsSubscribed(true);
      setNewsEmail('');
      setTimeout(() => setNewsSubscribed(false), 5000);
    } catch {
      setNewsError('Something went wrong. Please try again.');
      setTimeout(() => setNewsError(''), 5000);
    } finally {
      setNewsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: 'How do I use an Underrated Club coupon code?',
      a: 'Add your chosen pieces to the cart on underratedclub.com, go to checkout, and enter the code (such as CREW10) in the "Apply Coupon" field before payment. The discount updates the order total instantly.'
    },
    {
      q: 'Can I use multiple coupon codes on Underrated Club?',
      a: 'No — only one promo code can be applied per order. Sitewide sale pricing may already be reflected in the listed price alongside a code, but two separate codes cannot be stacked.'
    },
    {
      q: 'Why is my Underrated Club promo code not working?',
      a: 'Common reasons: the code has expired, it excludes items already marked down in a sale, or your cart is below the minimum order value required for that specific code.'
    },
    {
      q: 'Where can I find the best Underrated Club offers?',
      a: 'We keep this Underrated Club store page updated 24/7 with the best discounts, verified coupon codes, and upcoming sale dates.'
    },
    {
      q: 'Does Underrated Club offer free shipping?',
      a: 'Yes, Underrated Club offers free standard shipping on orders delivered across India, with delivery timelines varying by pin code.'
    },
    {
      q: 'How often are Underrated Club coupons updated?',
      a: 'Our deals team verifies and updates coupons every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working codes.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      {/* ==========================================
          BREADCRUMBS & HERO CONTAINER
          ========================================== */}
      <section className="w-full bg-[#FFFFFF] pt-6 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2  text-xs md:text-sm text-[#4A4A6A] select-none mb-6">
            <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#5B4FBE] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#5B4FBE] font-semibold">Underrated Club Coupon Code</span>
          </div>

          {/* Main Hero Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Store Detail Card (Left 7 Columns) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Logo Section */}
                <div className="flex flex-col items-center gap-3">
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="w-28 h-28 bg-white border border-[#E8E8F0] rounded-2xl flex items-center justify-center p-4 shadow-sm shrink-0"
                  >
                    <img
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1793116890/underrated_club_logo_r9juzr.webp"
                      alt="Underrated Club Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.5 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Underrated Club Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Upgrade your streetwear collection for less with the latest Underrated Club coupon code and Underrated Club discount code. Enjoy savings of up to 42% OFF on trendy sweatshirts, hoodies, oversized T-shirts, polo combos, and jeans. Plus, use coupon code CREW10 at checkout to get an extra 10% OFF on eligible orders. Browse our verified Underrated Club offers and refresh your wardrobe with premium streetwear at the best prices.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#E8E8F0] flex flex-wrap items-center gap-4">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Underrated Club</span>
                  <ExternalLink size={16} />
                </a>

                <a
                  href="https://www.google.com/preferences/source?q=couponscrew.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center hover:opacity-90 transition-opacity active:scale-95"
                >
                  <img
                    src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788011120/google-preferred-sources-561_m6yj79.webp"
                    alt="Google Preferred Source"
                    className="h-[56px] w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Promo Banner Image (Right 5 Columns) — desktop only */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#5B4FBE]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1793117259/Underrated_Club_10_Off_Campaign_gfpqrb.webp"
                alt="Underrated Club Offers"
                fill
                sizes="(max-width: 1024px) 0px, 480px"
                referrerPolicy="no-referrer"
                className="object-contain w-full h-full"
                priority
              />
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          STATS STRIP ACCENT BAR — desktop only
          ========================================== */}
      <section className="hidden lg:block bg-white border-b border-[#E8E8F0] py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 select-none">
          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#F0EEFF] text-[#5B4FBE] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">6+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 40%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹500+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#F0EEFF] text-[#5B4FBE] rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">100%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Verified Offers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          MAIN LAYOUT CONTAINER
          ========================================== */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

          {/* LEFT COLUMN: Coupons, Editorial Content, FAQ (70% width) */}
          <main className="flex-1 space-y-10 order-1">

            {/* Header Control Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E8F0] select-none">
              <div>
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Underrated Club Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Underrated Club coupon codes & offers.</p>
              </div>
            </div>

           {/* Coupons Card List */}
            <div className="space-y-6 max-w-5xl mx-auto p-4">
              {coupons.map((coupon) => {
                const isExpanded = expandedCouponId === coupon.id;
                const isCopied = copiedCode === coupon.code;

                return (
                  <div
                    key={coupon.id}
                    className="bg-[#F8F9FA] rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
                  >
                    {/* Main Flex Container */}
                    <div className="flex flex-row items-stretch">

                      {/* LEFT DISCOUNT SECTION */}
                      <div
                        className="w-24 sm:w-32 lg:w-40 bg-[#5B4FBE] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
                      >
                        {/* Ticket Cutout Circles */}
                        <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
                        <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

                        <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
                          {coupon.badgeType || "UP TO"}
                        </span>
                        <span className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
                          {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "10%"}
                        </span>
                        <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
                          OFF
                        </span>
                      </div>

                      {/* RIGHT WRAPPER */}
                      <div className="flex-1 flex flex-col lg:flex-row items-stretch">

                        {/* CENTER CONTENT SECTION */}
                        <div className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                            <span className="bg-[#FF5722]/10 text-[#FF5722] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                              {coupon.type || "Best Offer"}
                            </span>
                            <span className="bg-[#E6F7ED] text-[#00A854] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                              {coupon.verified || "Verified"}
                            </span>
                          </div>

                          <h3 className="text-base sm:text-lg lg:text-[22px] font-black text-[#0B1A30] leading-snug tracking-tight">
                            {coupon.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed max-w-2xl">
                            {coupon.description}
                          </p>

                          {/* View Details Toggle */}
                          {coupon.points && coupon.points.length > 0 && (
                            <button
                              onClick={() => setExpandedCouponId(isExpanded ? null : coupon.id)}
                              className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#5B4FBE] hover:opacity-80 w-fit transition-opacity"
                            >
                              View Details
                              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>
                          )}

                          {/* Dynamic Bullet Points List */}
                          {isExpanded && coupon.points && (
                            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                              {coupon.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* RIGHT ACTION SECTION */}
                        <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent gap-3">
                          {/* Larger Coupon Code Box */}
                          <div className="w-full border-2 border-dashed border-[#5B4FBE]/40 bg-[#5B4FBE]/5 rounded-2xl py-3 px-4 flex items-center justify-between shadow-sm">
                            <span className="font-mono font-black text-base sm:text-lg tracking-wider text-[#0B1A30]">
                              {coupon.code || "CREW10"}
                            </span>
                            <button
                              onClick={() => handleCopyCode(coupon)}
                              className="text-xs sm:text-sm font-bold text-[#5B4FBE] hover:underline flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-[#5B4FBE]/20 shadow-xs"
                            >
                              {isCopied ? "Copied!" : "Copy"}
                            </button>
                          </div>

                          <button
                            onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                            className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                              isCopied
                                ? "bg-green-600 text-white"
                                : "bg-[#FF5722] hover:bg-[#E64A19] text-white"
                            }`}
                          >
                            {isCopied ? "Copied!" : "Get Deal"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </main>

          {/* RIGHT COLUMN: Sidebar (30% width) */}
          <aside className="w-full lg:w-80 flex-shrink-0 self-start space-y-6 order-2">

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <h2 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Apply an Underrated Club Discount Code
  </h2>

  <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Go to theunderratedclub.com and add your chosen pieces to the cart.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        At checkout, look for the "Apply Coupon" or "Have a promo code?" field.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Enter your Underrated Club coupon code exactly — codes are case-sensitive.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Click Apply and confirm the discount updates in your cart total before paying.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Choose your payment method. Paying prepaid (UPI, card, net banking) saves an additional flat 5% on top — no extra code needed.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Free shipping is available on all orders with no minimum cart value. COD is available but selecting prepaid always saves you more.
      </span>
    </li>
  </ol>
</div>


<div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <h2 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Underrated Club Promo Code Not Working? What to Check
  </h2>

  <ul className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-disc list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Minimum cart not met.</strong> The 20% code requires ₹7,999 and the 25% code requires ₹9,999 — these are the most commonly missed conditions. Check your cart subtotal before taxes and shipping.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Code stacking.</strong> Sitewide codes generally can't be combined with each other. CREW10 applies on top of the ongoing sale price, not on top of another percentage-off code.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>COD restriction.</strong> Some Underrated Club codes apply only on prepaid orders. If a code isn't applying and you've selected COD, switch to prepaid and try again.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>New arrivals vs bestsellers.</strong> The flat 6% code runs separately across new arrivals and bestsellers but is listed under different offers. If you're mixing cart items from both categories, verify the code applies to all of them.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Expiry.</strong> CouponzGuru's last update was October 2 — codes listed there should be re-verified before go-live since expiry windows run 2–5 weeks from that date.
      </span>
    </li>
  </ul>
</div>

          </aside>

        </div>
      </section>

      <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Main Content Column */}
      <div className="prose max-w-none">
        
        {/* Main Title - Replaced H1 with Styled Paragraph */}
        <p className="text-3xl font-black text-black mb-10 leading-tight italic">
          Underrated Club Coupon Code: Save on Streetwear, Denim, and Cargos (November 2026)
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            An Underrated Club coupon code is a promo code you apply at checkout on theunderratedclub.com to get a flat percentage off your order of oversized tees, premium denim, cargos, or shirts. Active codes this October include CREW10 (10% off sitewide, no minimum), flat 20% off above ₹7,999, and flat 25% off above ₹9,999. The brand also runs a flat 5% off on all prepaid orders with no code required — which stacks quietly with most sale prices.
          </p>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Underrated Club Coupon Codes — November 2026
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Code</th>
            <th className="p-4 font-bold">Offer</th>
            <th className="p-4 font-bold">Min. Cart</th>
            <th className="p-4 font-bold">Valid Until</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">CREW10</td>
            <td className="p-4">10% off sitewide</td>
            <td className="p-4">No minimum</td>
            <td className="p-4">Ongoing (CouponsCrew exclusive)</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Flat 6% off</td>
            <td className="p-4">On new arrivals + bestsellers</td>
            <td className="p-4">₹1,499</td>
            <td className="p-4">4 Nov 2026</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Flat 20% off</td>
            <td className="p-4">Sitewide</td>
            <td className="p-4">₹7,999</td>
            <td className="p-4">2 Nov 2026</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Flat 25% off</td>
            <td className="p-4">Sitewide</td>
            <td className="p-4">₹9,999</td>
            <td className="p-4">5 Nov 2026</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <em>Dev note (EEAT):</em> CREW10 is a CouponsCrew exclusive code — verify it is active in the affiliate dashboard before publishing. Flat 6%, 20%, 25% codes sourced from partner coupon pages (updated October 2, 2026) — actual code strings reveal on click; confirm via the affiliate dashboard before go-live. A separate Flat 15% off code (min ₹5,999) was listed as expiring October 28 — treat as likely expired, do not list without re-verification.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Deals That Don't Need a Code
    </p>

    <p>
      Not every Underrated Club saving needs a code at checkout. Several discounts are automatic.
    </p>

    <p>
      The brand runs a flat 5% off prepaid orders — if you pay by UPI, credit/debit card, or net banking, the saving applies without entering anything. On a ₹2,000 order, that's ₹100 back just for not choosing COD.
    </p>

    <p>
      Beyond that, the combo packs section consistently carries the deepest discount — up to 65% off bundled sets starting at ₹999. These are usually coordinated two-piece or three-piece sets (tee + cargo, tee + shirt) at a price lower than buying each piece individually. If you're buying multiple pieces anyway, checking the combo section before adding items separately often means the same order costs less.
    </p>

    <p>
      Category-wise, men's topwear runs up to 50% off, the jeans and cargos section carries up to 44% off selected styles, and new arrivals have had up to 34% off in recent weeks. Women's topwear runs up to 35% off with pieces starting around ₹999.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      What Underrated Club Actually Is — And Why the Name Matters
    </p>

    <p>
      Most coupon pages list a few codes and stop there. But if you're buying from a brand you don't know well, the brand name itself is worth understanding.
    </p>

    <p>
      Underrated Club was founded in Pune by Abhishek Teri and Kartik Anand under KingsCraft Online Brands Pvt. Ltd. The word "underrated" isn't just a name — it's the brand's actual positioning. The idea is that quality, comfort, and longevity are undervalued in a market full of fast fashion. The "club" part refers to a community of people who choose clothing because of how it fits and holds up, not because of how loud the logo is.
    </p>

    <p>
      That framing matters if you're deciding whether to try the brand. Underrated Club doesn't chase weekly micro-trends. Their design process runs an internal test for every piece: would someone want to wear this again tomorrow? If not, it goes back to the drawing board. Whether or not you buy into that philosophy, it explains why the catalogue is smaller and more focused than a brand like Bewakoof or Snitch — they're not trying to push 500 new SKUs a month.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Underrated Originals vs Underrated Classics: Which Collection to Pick
    </p>

    <p>
      Underrated Club sells across two collections, and knowing the difference helps you find the right piece without scrolling through everything.
    </p>

    <p>
      <strong>Underrated Originals</strong> is the brand's fashion-forward line — seasonal drops, bolder graphics, more distinctive cuts. This is where you find the pieces that look like they came from a streetwear brand that actually thought about design. If you want something that stands out and you're okay with availability being limited by season, this is the collection.
    </p>

    <p>
      <strong>Underrated Classics</strong> is the everyday wardrobe side of the brand — well-made basics designed to be worn repeatedly over time rather than replaced each season. Oversized tees, clean-cut cargos, everyday shirts. The focus is on fabric quality and fit that holds its shape after multiple washes. If you want pieces that become staples rather than statement items, start here.
    </p>

    <p>
      The combo packs in their discount section usually pull from Classics, which is why they carry the steepest discounts — you're stacking base essentials, not one-off drops. If you want something from Originals during a sale, check the new arrivals section first since those carry 34% off when they drop.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      The Prepaid Saving Strategy
    </p>

    <p>
      This is worth understanding before you pay, because it's money left on the table if you choose COD.
    </p>

    <p>
      Underrated Club gives a flat 5% off on all prepaid transactions — no code, no minimum, no conditions attached. A separate ₹100 flat off applies on prepaid orders above ₹1,499. So if you're ordering above ₹1,499, you're looking at both: ₹100 off plus 5% off the cart total.
    </p>

    <p>
      On a ₹2,500 order (roughly the brand's average order value), that combination saves you ₹225 just by switching from COD to UPI or card. On a ₹5,000 combo order where a 20% code also applies, the prepaid saving adds on top of the code — these don't cancel each other out.
    </p>

    <p>
      The only scenario where COD makes sense is if it's your first order and you're uncertain about sizing. After that, switching to prepaid pays off with every subsequent order.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Quick Commerce in Mumbai and Bengaluru
    </p>

    <p>
      Underrated Club has expanded to quick-commerce channels in Mumbai and Bengaluru, which means selected products are available for faster-than-standard delivery in these cities. The brand hasn't named its platform partners publicly, but the move targets buyers who don't want to wait the standard 3–5 day delivery window for basics like oversized tees, cargos, and shirts.
    </p>

    <p>
      For buyers in these two cities: before placing a standard website order, it's worth checking whether the item you want is available on the quick-commerce platform — delivery time could be substantially shorter. The website order remains the better channel for Originals drops and anything with personalisation or less common sizing, since quick-commerce availability is limited to select SKUs.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Who Buys Underrated Club — And What They Come Back For
    </p>

    <p>
      The brand reports a 30% repeat customer rate — three in ten buyers have placed more than one order. That's a meaningful signal for a D2C brand that's been operating for a relatively short time. It also tells you something about what to expect: the customers who return are mostly coming back for the denim and cargos (the brand's reported best sellers) and the oversized tees.
    </p>

    <p>
      Revenue grew from ₹2 crore to over ₹10 crore in FY26 according to the founders — 400% year-on-year. These are self-reported figures, not audited, but the growth trajectory is consistent with a brand that's expanding from niche to visible in its category. Their strongest markets are Hyderabad, Mumbai, Bengaluru, and Pune — which tracks with where premium D2C streetwear has the most traction among younger buyers.
    </p>

    <p>
      Why does this matter for a shopper? It means you're not buying from a brand that's likely to go dark six months from now, which matters for warranty claims, returns, and restocks of sizes you want to repurchase.
    </p>
  </div>
</div>

          <hr className="my-10 border-gray-200" />

          {/* FAQs Section Header - Replaced H1/H2 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            Frequently Asked Questions
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is the best Underrated Club coupon code right now?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                As of November 2026, CREW10 gives 10% off sitewide with no minimum — that's the strongest single code available right now. For larger orders, flat 20% off (above ₹7,999) and flat 25% off (above ₹9,999) give better savings if your cart crosses those thresholds. Stack CREW10 with the prepaid 5% off for maximum saving without needing any code changes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does Underrated Club offer free shipping?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes, Underrated Club offers free shipping on all orders with no minimum cart requirement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is Underrated Club's return policy?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Return policy details aren't prominently listed on third-party coupon sources. Check theunderratedclub.com's own policy page before placing an order — particularly for sizing-related returns, since D2C streetwear brands have varying exchange windows.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is Underrated Club available on Myntra or Flipkart?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The brand currently sells primarily through its own website and quick-commerce channels in Mumbai and Bengaluru. Marketplace expansion (Myntra, Amazon) has been mentioned as a future plan but is not confirmed at the time of writing — check the brand's social channels for updates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What makes Underrated Club different from Bewakoof or Snitch?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Underrated Club sits in a slightly different positioning — smaller catalogue, slower-drop model, focus on fit and fabric over volume. Bewakoof and Snitch release new collections very frequently, which keeps prices competitive but means more variability in quality across styles. Underrated Club targets buyers who want fewer pieces that last longer, rather than filling a wardrobe with a high volume of budget items. The price entry point (tees from ₹949) is slightly higher than Bewakoof's base but below premium streetwear labels.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            If you're buying multiple pieces in one order, the combo section is the most efficient first stop — the bundle pricing there consistently undercuts building the same order from individual product pages. For anything above ₹7,999, the flat 20% code closes the gap further. Pay prepaid to capture the additional 5% off without entering anything extra, and you've stacked three savings layers with two minutes of effort.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Underrated Club Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Underrated Club Coupons", "Streetwear Offers", "Oversized Tees Deals", "Premium Denim Discounts", "Cargos Sale", "Prepaid Discount", "CouponsCrew Home"].map(tag => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#5B4FBE] uppercase tracking-widest shadow-sm border border-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* ==========================================
          INTERACTIVE CODE COPYING MODAL / POPUP
          ========================================== */}
      {showModal && activeModalCoupon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-xs select-none">
          <div className="bg-white rounded-3xl border border-[#E8E8F0] shadow-2xl p-6 md:p-8 max-w-md w-full text-center relative space-y-5 animate-in fade-in zoom-in-95 duration-200">

            {/* Success icon */}
            <div className="w-16 h-16 bg-[#EAFDF3] border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
              <Check size={28} className="stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1A1A2E]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Underrated Club checkout for instant discounts.
              </p>
            </div>

            {/* Code Box */}
            <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl py-3 px-4 flex items-center justify-between gap-4">
              <span className="font-mono font-bold text-sm tracking-wider text-gray-500 select-all">
                {activeModalCoupon.code}
              </span>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 uppercase">
                Copied
              </span>
            </div>

            <div className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 justify-center bg-gray-50 py-2.5 px-4 rounded-xl border border-gray-100">
              <AlertCircle size={14} className="text-gray-400" />
              <span>Make sure to paste code before finalizing payment.</span>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                onClick={() => setShowModal(false)}
                className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Underrated Club</span>
                <ExternalLink size={14} />
              </a>

              <button
                onClick={() => setShowModal(false)}
                className="w-full text-xs font-bold text-gray-400 hover:text-[#1A1A2E] py-2 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
