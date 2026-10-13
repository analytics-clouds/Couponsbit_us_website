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
  Ticket,
  Users,
  ShieldCheck,
  TrendingUp,
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
    { id: "vivid-seats-deals-2026", title: "Vivid Seats Discount Codes and Deals for October 2026" },
    { id: "what-is-vivid-seats", title: "What Is Vivid Seats?" },
    { id: "how-to-apply", title: "How to Apply a Vivid Seats Discount Code" },
    { id: "first-order-discount", title: "Vivid Seats First-Order Discount: What Should You Know?" },
    { id: "vs-stubhub-seatgeek", title: "Vivid Seats vs. StubHub vs. SeatGeek: Which Is Better?" },
    { id: "vivid-seats-rewards", title: "Vivid Seats Rewards: Another Way to Save" },
    { id: "tips-to-save", title: "5 Tips to Save More on Concert and Sports Tickets" },
  ];

  const faqs: { q: string; a: string }[] = [
    { q: "Is Vivid Seats legit?", a: "Vivid Seats is an established ticket marketplace. It publishes terms of sale and describes its Buyer Guarantee, which provides protections subject to the applicable conditions. Read the order terms carefully and verify your ticket details before purchasing." },
    { q: "Can I use multiple Vivid Seats promo codes?", a: "Don't assume that you can stack multiple promotional codes. The terms of your specific offer determine whether other discounts or credits can be combined. Review the checkout summary to see which savings apply." },
    { q: "Does Vivid Seats offer a student discount?", a: "We couldn't verify a current, universally available student discount from the official information reviewed. Check Vivid Seats' current promotions and any student offers available through your account before buying." },
    { q: "Why is my Vivid Seats discount code not working?", a: "Your code may have expired, require a minimum ticket subtotal, apply only to eligible events, or be restricted to certain customers. Some email offers also require you to follow a specific link. Check the offer's terms and confirm that your order qualifies." },
    { q: "Does Vivid Seats offer a military discount?", a: "We couldn't confirm a current, general military discount. Check the official website or contact customer support to ask about any offers available to eligible service members." },
    { q: "Can I get a discount on Vivid Seats without a promo code?", a: "Yes, you can look for email-linked promotions, app offers, and Vivid Seats Rewards. Comparing ticket prices and checking the final order total can also help you find better value, even when you don't have a coupon code." }
  ];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">Vivid Seats Discount Code</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN - Article Content */}
            <article className="w-full lg:w-[65%]">
              {/* Post Header */}
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">TICKET DEALS</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">8 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">October 13, 2026</span>
                  </div>
                </div>
                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  Vivid Seats Discount Code: Best Deals on Concerts & Sports Tickets 2026
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/couponsbit/image/upload/v1791895197/vivid-seats-discount-code-best-ticket-deals-2026_bnsuht.webp"
                    alt="Vivid Seats Discount Code: Best Deals on Concerts & Sports Tickets 2026"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  Find verified Vivid Seats discount codes and smarter ways to save on live event tickets
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    "A great live event doesn't have to mean paying more than necessary."
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">

                <p className="mb-5">
                  Your favorite artist is touring, your team has a big game coming up, or you finally want to experience a live show. There’s just one catch: ticket prices can make you think twice. That’s where a Vivid Seats discount code can help you save on your next live event.
                </p>

                <p className="mb-5">
                  <Link href="/stores/vivid-seats-promo-code" className="text-[#056bfa] hover:underline">Vivid Seats</Link> lets fans browse tickets for concerts, sports, and theater performances across the US. Along with comparing ticket options, you can look for promotional offers, earn rewards, and check the final price before you buy.
                </p>

                <p className="mb-5">
                  If you’re planning your next outing, this guide covers how to find Vivid Seats promo codes, apply available discounts, and make smarter ticket-buying decisions with <Link href="/deals" className="text-[#056bfa] hover:underline">CouponsBit</Link>.
                </p>

                <h2 id="vivid-seats-deals-2026" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Vivid Seats Discount Codes and Deals for October 2026
                </h2>

                <p className="mb-5">
                  The best offer depends on your account, event, order value, and promotion eligibility. We couldn't independently confirm a universal, currently active code for either 15% off a first order or $20 off a $200 purchase, so check the offer terms before relying on either discount.
                </p>

                <div className="my-8 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm not-prose">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-[#056bfa]">
                        <th className="p-4 text-[13px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer to Look For</th>
                        <th className="p-4 text-[13px] font-black text-white uppercase tracking-wider">Eligibility</th>
                        <th className="p-4 text-[13px] font-black text-white uppercase tracking-wider rounded-r-xl">What to Check</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-[13px]">
                        <tr className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="p-4 text-black font-black align-middle">First-order discount</td>
                          <td className="p-4 text-gray-600 align-middle">May be limited to new customers</td>
                          <td className="p-4 text-gray-600 align-middle">Discount rate, eligible events, and maximum savings</td>
                        </tr>
                        <tr className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="p-4 text-black font-black align-middle">Spend-based promo</td>
                          <td className="p-4 text-gray-600 align-middle">Usually requires a minimum ticket subtotal</td>
                          <td className="p-4 text-gray-600 align-middle">Minimum spend and excluded fees</td>
                        </tr>
                        <tr className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="p-4 text-black font-black align-middle">Email-exclusive offer</td>
                          <td className="p-4 text-gray-600 align-middle">Depends on the promotion</td>
                          <td className="p-4 text-gray-600 align-middle">Whether you must open the offer link to activate it</td>
                        </tr>
                        <tr className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="p-4 text-black font-black align-middle">App promotions</td>
                          <td className="p-4 text-gray-600 align-middle">Varies by account and event</td>
                          <td className="p-4 text-gray-600 align-middle">Current offer details and expiration</td>
                        </tr>
                        <tr className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="p-4 text-black font-black align-middle">Vivid Seats Rewards</td>
                          <td className="p-4 text-gray-600 align-middle">Eligible purchases by enrolled members</td>
                          <td className="p-4 text-gray-600 align-middle">Stamp balance and available Reward Credits</td>
                        </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-5">
                  Note: These are offer types to check, not a list of verified active codes. Before purchasing, compare the ticket subtotal and final checkout total. A discount may reduce the ticket price without reducing service or delivery fees.
                </p>

                <h2 id="what-is-vivid-seats" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  What Is Vivid Seats?
                </h2>

                <p className="mb-5">
                  Vivid Seats is an online ticket marketplace where fans can discover and purchase tickets to concerts, sporting events, and theater shows. It offers access to a broad range of live experiences, from major music tours and professional sports games to stage performances.
                </p>

                <p className="mb-5">
                  Unlike buying directly from an event organizer, shopping through a resale marketplace can give you more ticket options for an event with limited availability through its original seller. However, ticket prices and availability vary, and resale tickets can cost more or less than their original face value.
                </p>

                <p className="mb-5">
                  Vivid Seats is worth comparing with alternatives such as <Link href="/stores/stubhub-discount-code" className="text-[#056bfa] hover:underline">StubHub</Link> and <Link href="/stores/seatgeek-promo-code" className="text-[#056bfa] hover:underline">SeatGeek</Link> when you want to compare seating options, prices, and available promotions before deciding where to buy.
                </p>

                <h2 id="how-to-apply" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  How to Apply a Vivid Seats Discount Code
                </h2>

                <p className="mb-5">
                  Found a Vivid Seats coupon code? Follow these steps to check whether it works for your tickets.
                </p>

                <ol className="list-decimal list-inside space-y-3 mb-5 pl-2">
                  <li className="mb-3"><strong className="text-black">Step 1: Find your event</strong><br />Visit the Vivid Seats website and search for the concert, game, or theater performance you want to attend.</li>
                  <li className="mb-3"><strong className="text-black">Step 2: Choose your tickets</strong><br />Compare available seats, ticket quantities, and prices. Check the event date and venue before proceeding.</li>
                  <li className="mb-3"><strong className="text-black">Step 3: Proceed to checkout</strong><br />Review your order and look for the promotional code field or an eligible offer applied through a promotion link.</li>
                  <li className="mb-3"><strong className="text-black">Step 4: Apply the offer and verify your savings</strong><br />Enter your code and select Apply, if prompted. Confirm that the discount appears in your order summary before placing the order.</li>
                </ol>

                <p className="mb-5">
                  Some email promotions activate automatically when you follow the offer link rather than enter a code manually. Minimum purchase requirements may also exclude service and delivery fees.
                </p>

                <h2 id="first-order-discount" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Vivid Seats First-Order Discount: What Should You Know?
                </h2>

                <p className="mb-5">
                  First-order promotions can be particularly useful if you're buying tickets through Vivid Seats for the first time. However, not every offer applies to every customer or event.
                </p>

                <p className="mb-2">
                  Before using a first-order Vivid Seats promo code, check these details:
                </p>

                <ul className="list-disc list-inside space-y-1 mb-5 pl-2">
                  <li><strong className="text-black">New-customer eligibility:</strong> The promotion may exclude existing customers or accounts that have previously redeemed an offer.</li>
                  <li><strong className="text-black">Minimum spend:</strong> Some codes require a qualifying ticket subtotal before the discount applies.</li>
                  <li><strong className="text-black">Discount limits:</strong> A percentage-based offer may have a maximum savings cap.</li>
                  <li><strong className="text-black">Eligible events:</strong> Certain promotions may apply only to selected tickets, categories, or purchases.</li>
                  <li><strong className="text-black">Other offers:</strong> Check whether the promotion allows other discounts or account credits.</li>
                </ul>

                <p className="mb-5">
                  Don't assume that a code advertised elsewhere will work on your order. Always verify the offer terms and confirm that the discount has applied before submitting payment.
                </p>

                <h2 id="vs-stubhub-seatgeek" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Vivid Seats vs. StubHub vs. SeatGeek: Which Is Better?
                </h2>

                <p className="mb-5">
                  Each marketplace offers a different selection of tickets and promotions. The best choice depends on the event, the seats you want, and the final price.
                </p>

                <div className="my-8 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm not-prose">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-[#056bfa]">
                        <th className="p-4 text-[13px] font-black text-white uppercase tracking-wider rounded-l-xl">Feature</th>
                        <th className="p-4 text-[13px] font-black text-white uppercase tracking-wider">Vivid Seats</th>
                        <th className="p-4 text-[13px] font-black text-white uppercase tracking-wider">StubHub</th>
                        <th className="p-4 text-[13px] font-black text-white uppercase tracking-wider rounded-r-xl">SeatGeek</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-[13px]">
                        <tr className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="p-4 text-black font-black align-middle">Main offering</td>
                          <td className="p-4 text-gray-600 align-middle">Concert, sports, and theater tickets</td>
                          <td className="p-4 text-gray-600 align-middle">Event tickets and resale listings</td>
                          <td className="p-4 text-gray-600 align-middle">Event tickets and resale listings</td>
                        </tr>
                        <tr className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="p-4 text-black font-black align-middle">Promo opportunities</td>
                          <td className="p-4 text-gray-600 align-middle">Email and app offers, plus rewards</td>
                          <td className="p-4 text-gray-600 align-middle">Check current promotions</td>
                          <td className="p-4 text-gray-600 align-middle">Check current promo codes and account offers</td>
                        </tr>
                        <tr className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="p-4 text-black font-black align-middle">Loyalty benefits</td>
                          <td className="p-4 text-gray-600 align-middle">Vivid Seats Rewards</td>
                          <td className="p-4 text-gray-600 align-middle">Check current program availability</td>
                          <td className="p-4 text-gray-600 align-middle">Check current offers</td>
                        </tr>
                        <tr className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="p-4 text-black font-black align-middle">Best approach</td>
                          <td className="p-4 text-gray-600 align-middle">Compare eligible seats and final totals</td>
                          <td className="p-4 text-gray-600 align-middle">Compare equivalent tickets</td>
                          <td className="p-4 text-gray-600 align-middle">Compare equivalent tickets</td>
                        </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-5">
                  Promotions and fees vary by order and marketplace. This table is a general shopping guide, not a live price comparison.
                </p>

                <p className="mb-5">
                  Which should you choose? Start with the event you want to attend and compare equivalent tickets across platforms. Look at the same section, row, ticket quantity, and delivery conditions. Then compare the complete checkout totals instead of choosing the marketplace with the lowest advertised ticket price.
                </p>

                <p className="mb-5">
                  Vivid Seats also has a Lowest Price Guarantee for qualifying purchases made through its app. Eligible claims must meet the program's conditions, including requirements for comparable tickets on specified marketplaces. Review the official terms before relying on this benefit.
                </p>

                <h2 id="vivid-seats-rewards" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Vivid Seats Rewards: Another Way to Save
                </h2>

                <p className="mb-5">
                  A discount code isn't the only way to get more value from your ticket purchases. Vivid Seats offers a free loyalty program called Vivid Seats Rewards.
                </p>

                <p className="mb-5">
                  According to its published program information, members earn one stamp for each eligible ticket purchased. After collecting 10 stamps, members receive a Reward Credit based on the average eligible value of those tickets, excluding taxes, fees, and processing costs. Members can use Reward Credits toward eligible future purchases in the Vivid Seats app.
                </p>

                <p className="mb-2">
                  Here's how to get started:
                </p>

                <ol className="list-decimal list-inside space-y-1 mb-5 pl-2">
                  <li>Download the Vivid Seats app and sign in or create an account.</li>
                  <li>Join Vivid Seats Rewards when prompted.</li>
                  <li>Purchase eligible tickets and track your stamps.</li>
                  <li>Once you earn a Reward Credit, apply it to a future purchase through the app.</li>
                </ol>

                <p className="mb-5">
                  Check your account for credit balances, expiration dates, and applicable terms. If you regularly attend concerts or sporting events, rewards can become a useful part of your savings strategy.
                </p>

                <h2 id="tips-to-save" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  5 Tips to Save More on Concert and Sports Tickets
                </h2>

                <p className="mb-5">
                  A Vivid Seats discount code can help, but a few smart shopping habits can make a difference too.
                </p>

                <div className="mb-5">
                  <h3 className="text-black font-bold text-lg mb-2">1. Compare prices before booking</h3>
                  <p className="text-[#4b5563]">Check equivalent seats across <Link href="/stores/viagogo-discount-code" className="text-[#056bfa] hover:underline">ticket marketplaces</Link>. A lower listed price isn't always the cheapest final option once fees are included.</p>
                </div>
                <div className="mb-5">
                  <h3 className="text-black font-bold text-lg mb-2">2. Look for offers directly from Vivid Seats</h3>
                  <p className="text-[#4b5563]">Sign up for promotional emails and check app notifications for event-specific or account-specific deals. Follow the offer's instructions to activate it correctly.</p>
                </div>
                <div className="mb-5">
                  <h3 className="text-black font-bold text-lg mb-2">3. Shop early, but keep comparing</h3>
                  <p className="text-[#4b5563]">Booking early gives you more time to explore available seats. Prices and inventory can change, so compare options before committing rather than assuming the earliest listing is the best deal.</p>
                </div>
                <div className="mb-5">
                  <h3 className="text-black font-bold text-lg mb-2">4. Check ticket details carefully</h3>
                  <p className="text-[#4b5563]">Review the seating location, event date, delivery method, and total amount due. Avoid choosing a ticket based only on its headline price.</p>
                </div>
                <div className="mb-5">
                  <h3 className="text-black font-bold text-lg mb-2">5. Use rewards when eligible</h3>
                  <p className="text-[#4b5563]">If you have Vivid Seats Reward Credits, check whether you can apply them to your next app purchase. You can also look for an eligible discount code before completing checkout.</p>
                </div>

                <h2 className="flex items-center text-black font-extrabold text-2xl mt-12 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Final Verdict: Find Your Vivid Seats Deal with CouponsBit
                </h2>

                <p className="mb-5">
                  A great live event doesn't have to mean paying more than necessary. Before buying tickets, compare available seats, check the final price, and look for a Vivid Seats discount code that matches your order. If you use the platform regularly, Vivid Seats Rewards may offer another way to save on future purchases.
                </p>

                <p className="mb-5">
                  For your next concert, game, or theater outing, check <Link href="/deals" className="text-[#056bfa] hover:underline">CouponsBit</Link> for the latest Vivid Seats promo codes and deals before you book. Review the offer terms, apply eligible savings, and make sure the discount appears at checkout. That way, you can spend less time worrying about ticket costs and more time looking forward to the experience.
                </p>

                {/* Accordion FAQ Section */}
                <h2 className="flex items-center text-black font-extrabold text-2xl mt-12 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Vivid Seats Discount Code FAQs
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
                      <div className={cn("overflow-hidden transition-all duration-300 px-6", openFaq === i ? "max-h-60 pb-4 opacity-100" : "max-h-0 opacity-0")}>
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
                  "CouponsBit", "Vivid Seats", "Concert Tickets", "Sports Tickets", "Ticket Deals", "Vivid Seats Rewards"
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

              {/* Box 2: Popular Ticket Stores */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🎟️</span> Popular Ticket Marketplaces
                </h4>
                <div className="space-y-4">
                  {[
                    { name: "Vivid Seats", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788951742/vividset-logo_pzyiuj.webp", dealText: "15% OFF First Order", href: "/stores/vivid-seats-promo-code" },
                    { name: "StubHub", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp", dealText: "Flat 10% OFF", href: "/stores/stubhub-discount-code" },
                    { name: "SeatGeek", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788868873/seatgeek-logo_rhvjww.webp", dealText: "Up to $20 Off Tickets", href: "/stores/seatgeek-promo-code" },
                    { name: "Viagogo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/viagogo-coupon-code_t65aol.webp", dealText: "Starting at $332", href: "/stores/viagogo-discount-code" },
                  ].map((store, i) => (
                    <Link
                      key={store.name}
                      href={store.href}
                      className={`flex items-center gap-3 pb-4 group ${i !== 3 ? 'border-b border-[#f0f0f0]' : ''}`}
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
                    { icon: Ticket,      name: "Entertainment", count: "150+", color: "text-purple-500", href: "/categories/entertainment" },
                    { icon: Users,       name: "Travel",        count: "420+", color: "text-teal-500",   href: "/categories/travel" },
                    { icon: ShieldCheck, name: "Hotels",        count: "90+",  color: "text-blue-500",   href: "/categories/hotels" },
                    { icon: TrendingUp,  name: "Gaming",        count: "90+",  color: "text-green-500",  href: "/categories/gaming" },
                    { icon: Percent,     name: "Mobile",        count: "320+", color: "text-orange-500", href: "/categories/mobile" }
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
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1791548920/halloween-shopping-guide-2026_ctk0zx.webp",
                  date: "October 9, 2026",
                  readTime: "5 MIN READ",
                  title: "Halloween Shopping Guide 2026: Spooky Deals You Can\u2019t Miss",
                  desc: "Celebrate Halloween 2026 for less with the best Halloween coupon codes, promo codes, and shopping deals. Save on costumes, decorations, candy, party supplies, and beauty products with CouponsBit.",
                  href: "/blog/halloween-shopping-guide-2026",
                },
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
