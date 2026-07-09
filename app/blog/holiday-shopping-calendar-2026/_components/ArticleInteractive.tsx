"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle,
  Share2,
  Bookmark,
  ArrowRight,
  Lightbulb,
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
    { id: "calendar-at-a-glance", title: "Holiday Shopping Calendar 2026 at a Glance" },
    { id: "january-new-year-sales", title: "January – New Year Sales" },
    { id: "february-valentines-day", title: "February – Valentine's Day Deals" },
    { id: "march-spring-shopping", title: "March – Spring Shopping Events" },
    { id: "april-easter-sales", title: "April – Easter Sales" },
    { id: "may-memorial-day", title: "May – Memorial Day Sales" },
    { id: "june-fathers-day-summer", title: "June – Father's Day & Summer Deals" },
    { id: "july-independence-day", title: "July – Independence Day Sales" },
    { id: "august-back-to-school", title: "August – Back-to-School Shopping" },
    { id: "september-labor-day", title: "September – Labor Day Sales" },
    { id: "october-halloween-early-holiday", title: "October – Halloween & Early Holiday Shopping" },
    { id: "november-black-friday-cyber-monday", title: "November – Black Friday & Cyber Monday" },
    { id: "december-christmas-end-of-year", title: "December – Christmas & End-of-Year Sales" },
    { id: "smart-shopping-tips", title: "Smart Shopping Tips for Holiday Sales" },
    { id: "why-use-couponsbit", title: "Why Use CouponsBit Before You Shop?" },
  ];

  const calendarRows = [
    { month: "January", event: "New Year Sales", buy: "Winter clothing, fitness equipment, furniture" },
    { month: "February", event: "Valentine's Day", buy: "Jewelry, beauty, fragrances, gifts" },
    { month: "March", event: "Spring Sales", buy: "Kitchen appliances, gardening tools, fashion" },
    { month: "April", event: "Easter Sales", buy: "Home décor, toys, clothing" },
    { month: "May", event: "Memorial Sales", buy: "Mattresses, furniture, appliances" },
    { month: "June", event: "Father's Day", buy: "Tech gadgets, outdoor gear, sports equipment" },
    { month: "July", event: "Independence Day Sales", buy: "Electronics, home appliances, summer fashion" },
    { month: "August", event: "Back-to-School Sales", buy: "Laptops, backpacks, stationery" },
    { month: "September", event: "Labor Day", buy: "Furniture, mattresses, home improvement" },
    { month: "October", event: "Halloween & Early Holiday Deals", buy: "Costumes, gaming accessories, gifts" },
    { month: "November", event: "Black Friday & Cyber Monday", buy: "Electronics, fashion, beauty, home appliances" },
    { month: "December", event: "Christmas & End-of-Year Sales", buy: "Gifts, toys, winter apparel, holiday décor" },
  ];

  const faqs = [
    { q: "What is the biggest shopping holiday in the USA?", a: <><Link href="/deals" className="text-[#056bfa] hover:underline">Black Friday</Link> is widely considered the biggest shopping event in the United States, followed closely by Cyber Monday.</> },
    { q: "When is the best time to buy electronics?", a: <>The best times are <Link href="/categories/electronics" className="text-[#056bfa] hover:underline">Independence Day sales</Link> in July, Back-to-School promotions in August and Black Friday and Cyber Monday in November.</> },
    { q: "Which month has the best furniture deals?", a: <><Link href="/stores/deer-valley-coupon-code" className="text-[#056bfa] hover:underline">Furniture</Link> shoppers can usually find excellent discounts during Memorial Day, Labor Day and New Year clearance sales.</> },
    { q: "How can I save more during holiday sales?", a: "Plan your purchases in advance, compare prices and use verified coupon codes and promo codes before completing purchase." },
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
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">Holiday Shopping Calendar</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN - Article Content */}
            <article className="w-full lg:w-[65%]">
              {/* Post Header */}
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">SHOPPING CALENDAR</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">10 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">July 9, 2026</span>
                  </div>
                </div>
                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  Holiday Shopping Calendar 2026: The Best Times to Shop & Save Money in the USA
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/couponsbit/image/upload/v1783578422/holiday-shopping-calendar-2026_ak4cju.webp"
                    alt="Holiday Shopping Calendar 2026 – Best USA Shopping Holidays & Sales"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  The best USA shopping holidays in 2026, month by month
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    "Shopping smart isn't about buying more - it's about buying at the right time."
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">
                <p className="mb-5">
                  Timing can make a huge difference when it comes to saving money online. While many shoppers wait for Black Friday or Cyber Monday, there are incredible discounts available throughout the year. Knowing when to shop can help you grab the best deals in electronics, fashion, home essentials, beauty products, travel and much more.
                </p>
                <p className="mb-5">
                  This Holiday Shopping Calendar 2026 is designed for shoppers in the United States who want to plan purchases wisely, avoid paying full price, and maximize savings using <Link href="/deals" className="text-[#056bfa] hover:underline">coupon codes, promo codes and seasonal discounts</Link>. Whether you're shopping for yourself or buying gifts for loved ones, this guide highlights the <Link href="/deals-of-the-day" className="text-[#056bfa] hover:underline">biggest USA shopping holidays</Link> in 2026 and what you should buy during each sale.
                </p>

                <h2 id="calendar-at-a-glance" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Holiday Shopping Calendar 2026 at a Glance
                </h2>

                <div className="my-8 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm not-prose">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-[#056bfa]">
                        <th className="p-4 text-[13px] font-black text-white uppercase tracking-wider rounded-l-xl">Month</th>
                        <th className="p-4 text-[13px] font-black text-white uppercase tracking-wider">Major Shopping Event</th>
                        <th className="p-4 text-[13px] font-black text-white uppercase tracking-wider rounded-r-xl">Best Things to Buy</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-[13px]">
                      {calendarRows.map((row, i) => (
                        <tr key={row.month} className={i !== calendarRows.length - 1 ? "border-b border-gray-200 hover:bg-gray-50/50 transition-colors" : "hover:bg-gray-50/50 transition-colors"}>
                          <td className="p-4 text-black font-black align-middle whitespace-nowrap">{row.month}</td>
                          <td className="p-4 font-bold text-[#056bfa] align-middle">{row.event}</td>
                          <td className="p-4 text-gray-500 align-middle">{row.buy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h2 id="january-new-year-sales" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  January – New Year Sales
                </h2>
                <p className="mb-3">The beginning of the year is one of the best times to find clearance deals. Retailers reduce prices on winter inventory and holiday merchandise to make room for new collections.</p>
                <p className="mb-2">Best things to buy:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Winter jackets</li>
                  <li>Bedding</li>
                  <li><Link href="/stores/deer-valley-coupon-code" className="text-[#056bfa] hover:underline">Mattresses</Link></li>
                  <li>Fitness equipment</li>
                  <li>Home organization products</li>
                </ul>
                <p className="mb-5"><strong className="text-black">Shopping Tip:</strong> January clearance sales become even more affordable when combined with <Link href="/deals" className="text-[#056bfa] hover:underline">verified coupon codes and free shipping offers</Link>.</p>

                <h2 id="february-valentines-day" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  February – Valentine's Day Deals
                </h2>
                <p className="mb-3">Valentine's Day isn't just for couples. Many retailers offer discounts across <Link href="/categories" className="text-[#056bfa] hover:underline">beauty</Link>, fashion, chocolates, jewelry and personalized gifts.</p>
                <p className="mb-2">Best things to buy:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Jewelry</li>
                  <li>Watches</li>
                  <li>Makeup</li>
                  <li>Perfumes</li>
                  <li>Gift hampers</li>
                </ul>
                <p className="mb-5">If you're shopping after February 14, you'll often find seasonal clearance prices on Valentine's merchandise.</p>

                <h2 id="march-spring-shopping" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  March – Spring Shopping Events
                </h2>
                <p className="mb-3">Spring sales bring fresh collections while older inventory goes on sale. It's an excellent month for updating your wardrobe or refreshing your home.</p>
                <p className="mb-2">Best things to buy:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Spring clothing</li>
                  <li>Kitchen appliances</li>
                  <li>Gardening tools</li>
                  <li>Home essentials</li>
                  <li>Outdoor accessories</li>
                </ul>
                <p className="mb-5">Many online retailers also launch sitewide spring promotions with attractive promo codes.</p>

                <h2 id="april-easter-sales" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  April – Easter Sales
                </h2>
                <p className="mb-3">Easter promotions usually feature family-focused discounts on clothing, toys, home décor and kitchen essentials.</p>
                <p className="mb-2">Best things to buy:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Kids' clothing</li>
                  <li>Home decorations</li>
                  <li>Kitchen appliances</li>
                  <li>Toys</li>
                  <li>Dining essentials</li>
                </ul>
                <p className="mb-5">Many brands also introduce limited-time coupon offers during Easter weekend.</p>

                <h2 id="may-memorial-day" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  May – Memorial Day Sales
                </h2>
                <p className="mb-3">Memorial Day is one of the biggest shopping holidays in the USA. Retailers offer deep discounts across nearly every shopping category.</p>
                <p className="mb-2">Best things to buy:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Furniture</li>
                  <li>Mattresses</li>
                  <li>Home appliances</li>
                  <li>Outdoor furniture</li>
                  <li>Barbecue grills</li>
                </ul>
                <p className="mb-5">If you're planning home upgrades, Memorial Day sales are worth waiting for.</p>

                <h2 id="june-fathers-day-summer" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  June – Father's Day & Summer Deals
                </h2>
                <p className="mb-3">June combines Father's Day promotions with early summer sales, making it a great month for gifting and outdoor shopping.</p>
                <p className="mb-2">Best things to buy:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li><Link href="/categories/electronics" className="text-[#056bfa] hover:underline">Smartwatches</Link></li>
                  <li>Power tools</li>
                  <li>Camping gear</li>
                  <li>Sports equipment</li>
                  <li><Link href="/categories/travel" className="text-[#056bfa] hover:underline">Travel accessories</Link></li>
                </ul>
                <p className="mb-5">Many brands also provide exclusive online discounts during Father's Day week.</p>

                <h2 id="july-independence-day" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  July – Independence Day Sales
                </h2>
                <p className="mb-3">Fourth of July sales are among the biggest holiday sales in the USA. Retailers slash prices on electronics, furniture and home appliances while preparing for late-summer inventory.</p>
                <p className="mb-2">Best things to buy:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li><Link href="/categories/electronics" className="text-[#056bfa] hover:underline">Smartphones</Link></li>
                  <li><Link href="/categories/electronics" className="text-[#056bfa] hover:underline">Laptops</Link></li>
                  <li><Link href="/categories/electronics" className="text-[#056bfa] hover:underline">Smart TVs</Link></li>
                  <li>Kitchen appliances</li>
                  <li>Summer clothing</li>
                </ul>
                <p className="mb-5">If you've been waiting for the best time to buy electronics, July offers excellent opportunities before the holiday season.</p>

                <h2 id="august-back-to-school" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  August – Back-to-School Shopping
                </h2>
                <p className="mb-3">Back-to-school season isn't only for students. Professionals, remote workers, and families can also find impressive technology deals.</p>
                <p className="mb-2">Best things to buy:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li><Link href="/categories/electronics" className="text-[#056bfa] hover:underline">Laptops</Link></li>
                  <li><Link href="/categories/electronics" className="text-[#056bfa] hover:underline">Tablets</Link></li>
                  <li>Headphones</li>
                  <li>Office supplies</li>
                  <li>Backpacks</li>
                </ul>
                <p className="mb-3">Many retailers also offer student discounts during August.</p>
                <p className="mb-5">Brands like <Link href="/stores/dell-coupon-code" className="text-[#056bfa] hover:underline">Dell</Link> and <Link href="/stores/hp-coupon-code" className="text-[#056bfa] hover:underline">HP</Link> offer student discounts during this period.</p>

                <h2 id="september-labor-day" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  September – Labor Day Sales
                </h2>
                <p className="mb-3">Labor Day marks another major shopping event where retailers clear seasonal inventory before the holiday shopping rush begins.</p>
                <p className="mb-2">Best things to buy:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Furniture</li>
                  <li>Home improvement products</li>
                  <li>Appliances</li>
                  <li>Mattresses</li>
                  <li>Outdoor equipment</li>
                </ul>
                <p className="mb-5">This is also one of the best months for home renovation purchases.</p>

                <h2 id="october-halloween-early-holiday" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  October – Halloween & Early Holiday Shopping
                </h2>
                <p className="mb-3">October is ideal for shoppers who prefer to buy holiday gifts early. Retailers begin introducing pre-Black Friday promotions while Halloween sales dominate seasonal shopping.</p>
                <p className="mb-2">Best things to buy:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Halloween costumes</li>
                  <li>Decorations</li>
                  <li><Link href="/stores/driffle-coupon-code" className="text-[#056bfa] hover:underline">Gaming</Link> <Link href="/stores/kinguin-coupon-code" className="text-[#056bfa] hover:underline">accessories</Link></li>
                  <li>Gift items</li>
                  <li>Collectibles</li>
                </ul>
                <p className="mb-5">Shopping early can help you avoid price increases later in the year.</p>

                <h2 id="november-black-friday-cyber-monday" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  November – Black Friday & Cyber Monday
                </h2>
                <p className="mb-3">No online shopping calendar 2026 is complete without Black Friday and Cyber Monday. These two shopping events consistently deliver some of the biggest discounts of the year.</p>
                <p className="mb-2">Best things to buy:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li><Link href="/categories/electronics" className="text-[#056bfa] hover:underline">Smartphones</Link></li>
                  <li><Link href="/stores/driffle-coupon-code" className="text-[#056bfa] hover:underline">Gaming consoles</Link></li>
                  <li><Link href="/categories/electronics" className="text-[#056bfa] hover:underline">Televisions</Link></li>
                  <li>Fashion</li>
                  <li>Beauty products</li>
                  <li>Kitchen appliances</li>
                  <li>Smart home devices</li>
                </ul>
                <p className="mb-5">Before checking out, compare prices across retailers and apply <Link href="/deals-of-the-week" className="text-[#056bfa] hover:underline">verified promo codes for additional savings</Link>.</p>

                <h2 id="december-christmas-end-of-year" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  December – Christmas & End-of-Year Sales
                </h2>
                <p className="mb-3">December is perfect for holiday shopping, gift buying and stocking up on seasonal essentials. After Christmas, many stores launch clearance events to prepare for the new year.</p>
                <p className="mb-2">Best things to buy:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Christmas gifts</li>
                  <li>Toys</li>
                  <li>Winter clothing</li>
                  <li>Holiday decorations</li>
                  <li><Link href="/stores" className="text-[#056bfa] hover:underline">Gift cards</Link></li>
                </ul>
                <p className="mb-5">Post-Christmas sales can also be a great opportunity to purchase decorations for next year at significantly lower prices.</p>

                <h2 id="smart-shopping-tips" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Smart Shopping Tips for Holiday Sales
                </h2>
                <p className="mb-3">Planning ahead helps you get the most value from every shopping event. Here are a few simple ways to save more during the biggest USA shopping holidays in 2026:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Create your shopping list before major sales begin.</li>
                  <li>Compare prices across multiple retailers instead of buying from the first store you visit.</li>
                  <li>Sign up for newsletters to receive early access to exclusive discounts.</li>
                  <li>Always <Link href="/deals" className="text-[#056bfa] hover:underline">search for coupon codes</Link> before completing your purchase.</li>
                  <li>Combine sale prices with promo codes whenever possible.</li>
                  <li>Look for <Link href="/deals-of-the-day" className="text-[#056bfa] hover:underline">free shipping offers</Link> to reduce your total order value.</li>
                  <li>Set a budget to avoid impulse purchases during large sale events.</li>
                </ul>
                <p className="mb-5">These habits may seem simple, but they can lead to significant savings throughout the year.</p>

                <h2 id="why-use-couponsbit" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Why Use CouponsBit Before You Shop?
                </h2>
                <p className="mb-5">
                  No matter which shopping holiday you're preparing for, checking <Link href="/deals" className="text-[#056bfa] hover:underline">CouponsBit</Link> before placing an order can help you save more. The platform regularly features updated coupon codes, promo codes and special offers from leading online <Link href="/stores" className="text-[#056bfa] hover:underline">retailers</Link> across <Link href="/categories" className="text-[#056bfa] hover:underline">fashion</Link>, <Link href="/categories/electronics" className="text-[#056bfa] hover:underline">electronics</Link>, <Link href="/categories/travel" className="text-[#056bfa] hover:underline">travel</Link>, <Link href="/categories" className="text-[#056bfa] hover:underline">beauty</Link>, <Link href="/categories/software" className="text-[#056bfa] hover:underline">software</Link>, and <Link href="/categories" className="text-[#056bfa] hover:underline">home essentials</Link>.
                </p>
                <p className="mb-5">
                  Instead of paying full price, take a few extra minutes to look for available discounts. Combining retailer sales with verified coupons is one of the easiest ways to reduce your shopping expenses.
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

                <h2 className="flex items-center text-black font-extrabold text-2xl mt-12 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  In Short
                </h2>
                <p className="mb-3">Shopping smart isn't about buying more - it's about buying at the right time. By following this Holiday Shopping Calendar 2026, you can take advantage of the biggest holiday sales in the USA, plan major purchases more effectively and avoid paying full price.</p>
                <p className="mb-3">Whether you're upgrading your laptop during Back-to-School season, furnishing your home on Memorial Day, or shopping for gifts during Black Friday, timing your purchases can make a noticeable difference to your budget.</p>
                <p className="mb-3">Before you complete your next order, don't forget to visit CouponsBit for the latest coupon codes, promo codes and verified discounts. A little planning today can lead to big savings throughout 2026.</p>
              </div>

              {/* Tags Section */}
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
                {[
                  "CouponsBit", "Holiday Shopping", "Black Friday", "Cyber Monday", "Coupon Codes", "Shopping Calendar 2026"
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
                  <span>🛍️</span> Popular Stores
                </h4>
                <div className="space-y-4">
                  {[
                    { name: "StubHub", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp", dealText: "Flat 10% OFF", href: "/stores/stubhub-coupon-code" },
                    { name: "Viagogo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/viagogo-coupon-code_t65aol.webp", dealText: "Starting at $332", href: "/stores/viagogo-coupon-code" },
                    { name: "Bluehost", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp", dealText: "Up to 69% OFF", href: "/stores/bluehost-coupon-code" },
                    { name: "TrainPal", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp", dealText: "Up to 50% OFF", href: "/stores/trainpal-coupon-code" },
                    { name: "Fytoo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp", dealText: "Frames From $1", href: "/stores/fytoo-coupon-code" },
                    { name: "Driffle", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp", dealText: "Up to 95% OFF", href: "/stores/driffle-coupon-code" },
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
