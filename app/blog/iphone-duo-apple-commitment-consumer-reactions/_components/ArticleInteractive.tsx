"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle,
  ArrowRight,
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
    { id: "apples-vision-for-iphone-duo", title: "What Is Apple's Vision for the iPhone Duo?" },
    { id: "commitment-to-premium-design", title: "A Commitment to Premium Design and Engineering" },
    { id: "larger-screen-genuinely-useful", title: "Making the Larger Screen Genuinely Useful" },
    { id: "building-trust-durability", title: "Building Trust Around Durability and Reliability" },
    { id: "consumer-reactions", title: "What Are Consumers Really Feeling About the iPhone Duo?" },
    { id: "excitement-new-experience", title: "Excitement About a New iPhone Experience" },
    { id: "concerns-premium-price", title: "Concerns About the Premium Price" },
    { id: "curiosity-vs-purchase-intent", title: "Curiosity Does Not Always Mean Purchase Intent" },
    { id: "is-apple-delivering", title: "Is Apple Delivering on Its Commitment?" },
    { id: "what-apple-needs-to-do-next", title: "What Apple Needs to Do Next" },
    { id: "is-foldable-vision-worth-it", title: "Is Apple's Foldable Vision Worth It?" },
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
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">iPhone Duo: Apple's Commitment</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN */}
            <article className="w-full lg:w-[65%]">
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">TECH INSIGHTS</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">7 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">October 23, 2026</span>
                  </div>
                </div>
                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  iPhone Duo: Apple's Commitment and What Consumers Really Think
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/couponsbit/image/upload/v1793012026/Apple_s_Foldable_iPhone_Duo_Revealed_ohjnmd.webp"
                    alt="iPhone Duo: Apple's Foldable iPhone Commitment and Consumer Reactions"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  Apple's first foldable iPhone Duo — launched October 23, 2026
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    "Apple's commitment should not be measured solely by its product announcements."
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">

                <p className="mb-5">
                  Apple has spent years refining the iPhone, introducing better cameras, faster processors, and improved displays with each generation. But with the iPhone Duo, the company has taken a different approach. Its first foldable iPhone represents a major shift in how people could use their smartphones, combining a pocketable device with a much larger screen for entertainment, reading, and multitasking.
                </p>
                <p className="mb-5">
                  Launched on October 23, 2026, the iPhone Duo has attracted attention from Apple fans, technology enthusiasts, and consumers curious about foldable phones. Early reactions have highlighted its premium design and innovative display, but questions about its price, software experience, and camera capabilities remain. Reuters reported that the launch drew enthusiastic crowds in several major cities.
                </p>
                <p className="mb-5">
                  This raises an important question: What is Apple's commitment to the iPhone Duo, and are consumers convinced that its new approach is worth the investment?
                </p>

                <h2 id="apples-vision-for-iphone-duo" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  What Is Apple's Vision for the iPhone Duo?
                </h2>
                <p className="mb-5">
                  Apple's introduction of the iPhone Duo is about more than creating a phone with a folding screen. The company wants to combine the convenience of a traditional iPhone with the flexibility of a larger display, while maintaining the performance and familiar software experience customers expect.
                </p>
                <p className="mb-5">
                  The device features a 7.6-inch inner display when unfolded and a 5.4-inch outer display when folded. This gives users a larger workspace without requiring them to carry a separate tablet for every task.
                </p>
                <p className="mb-5">
                  According to <Link href="/stores/apple-discount-code" className="text-[#056bfa] hover:underline">Apple's official announcement</Link>, the device combines a titanium design, a precision-engineered hinge, the A20 Pro chip, and iOS 27 features adapted for its foldable form.
                </p>
                <p className="mb-5">
                  Apple's broader commitment rests on three priorities: hardware innovation, an adaptable software experience, and a design that can withstand everyday use.
                </p>

                <h2 id="commitment-to-premium-design" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  1. A Commitment to Premium Design and Engineering
                </h2>
                <p className="mb-5">
                  One of Apple's main selling points is the iPhone Duo's physical design. The company has focused on creating a slim foldable device with a hinge that feels smooth and a screen that minimizes the appearance of the usual crease.
                </p>
                <p className="mb-5">
                  The inner display also features a nano-texture finish designed to reduce glare, while the titanium construction reinforces the device's premium positioning.
                </p>
                <p className="mb-5">
                  For consumers, these details matter because foldable phones introduce practical challenges that conventional smartphones do not face to the same degree. The hinge must function smoothly, the inner screen needs careful protection, and the overall design must remain comfortable to carry and use.
                </p>
                <p className="mb-5">
                  Early reviews have praised the iPhone Duo's engineering and nearly crease-free appearance. However, a polished launch design is only the beginning. Long-term durability will depend on how the device performs after months of folding, opening, carrying, and everyday handling.
                </p>
                <p className="mb-5">
                  Apple's promise of a durable foldable experience will ultimately need to stand up to real-world use.
                </p>

                <h2 id="larger-screen-genuinely-useful" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  2. Making the Larger Screen Genuinely Useful
                </h2>
                <p className="mb-5">
                  A larger display is only valuable if people can do more with it.
                </p>
                <p className="mb-5">
                  Apple has designed iOS 27 to adapt to the iPhone Duo's folding format, with features that support split-screen multitasking and different ways to interact with apps. Users can watch videos, read articles, browse websites, and work across supported applications on the expanded display.
                </p>
                <p className="mb-5">
                  This creates opportunities for people who regularly use their phones for more than calls and messages.
                </p>
                <p className="mb-5">
                  For example, someone planning a trip could view travel information while checking maps. A student could read learning material alongside notes, while a professional might use the larger screen to review documents and communicate with colleagues.
                </p>
                <p className="mb-5">
                  However, the software experience is still developing. Early reviewers have reported that some third-party apps do not fully use the expanded screen, leaving unused space or layouts that feel designed for a conventional phone.
                </p>
                <p className="mb-5">
                  For Apple, the challenge is to ensure that the larger display becomes a practical advantage rather than simply an impressive specification. Better app optimization and more flexible multitasking will be important to delivering on that promise.
                </p>

                <h2 id="building-trust-durability" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  3. Building Trust Around Durability and Reliability
                </h2>
                <p className="mb-5">
                  Consumers buying an expensive smartphone expect it to last. With a foldable device, those expectations become even more important because the screen and hinge introduce additional points of concern.
                </p>
                <p className="mb-5">
                  Apple says the iPhone Duo is built to last and includes a precision-engineered hinge. The phone also carries an IP68 rating for splash, water, and dust resistance under specified test conditions.
                </p>
                <p className="mb-5">
                  These features help establish confidence in the product, but they do not eliminate every risk associated with foldable hardware.
                </p>
                <p className="mb-5">
                  Potential buyers may still wonder how the inner screen will hold up, how much repairs will cost, and whether the device will remain reliable after extended use.
                </p>
                <p className="mb-5">
                  This is particularly relevant for a first-generation product. Consumers are not just evaluating the technology available today; they are also considering the cost of owning and maintaining it over time.
                </p>
                <p className="mb-5">
                  Apple can strengthen consumer confidence by providing clear repair information, dependable after-sales support, and evidence of long-term reliability as more people use the device.
                </p>

                <h2 id="consumer-reactions" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  What Are Consumers Really Feeling About the iPhone Duo?
                </h2>
                <p className="mb-5">
                  The early response suggests a combination of excitement, curiosity, and caution. Consumers can appreciate the innovation while questioning whether it offers enough practical value to justify its price.
                </p>

                <h2 id="excitement-new-experience" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Excitement About a New iPhone Experience
                </h2>
                <p className="mb-5">
                  For many Apple enthusiasts, the iPhone Duo represents a significant change in a product category that has often evolved through incremental improvements.
                </p>
                <p className="mb-5">
                  The ability to unfold a phone into a larger screen has generated interest among people who enjoy mobile gaming, watching videos, reading, and multitasking. Its design has also attracted attention from consumers who have been waiting for Apple to enter the foldable market.
                </p>
                <p className="mb-5">
                  Reuters' launch coverage highlighted enthusiasm for the slim design, folding mechanism, and larger display. Some buyers also saw the device as a potential alternative to carrying both a smartphone and a small tablet.
                </p>

                <h2 id="concerns-premium-price" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Concerns About the Premium Price
                </h2>
                <p className="mb-5">
                  The iPhone Duo starts at $1,999 in the United States, placing it firmly in the premium smartphone category.
                </p>
                <p className="mb-5">
                  At that price, consumers expect a complete experience, including strong cameras, smooth software, dependable performance, and excellent build quality.
                </p>
                <p className="mb-5">
                  Some reviewers have questioned the absence of a dedicated telephoto camera and pointed out that certain apps are not yet fully optimized for the foldable screen. The switch from Face ID to Touch ID may also require adjustment for users accustomed to Apple's traditional flagship phones.
                </p>
                <p className="mb-5">
                  These compromises do not necessarily make the device a poor choice, but they make the buying decision more complicated. Consumers must decide whether the larger screen and foldable design offer enough additional value for their needs.
                </p>

                <h2 id="curiosity-vs-purchase-intent" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Curiosity Does Not Always Mean Purchase Intent
                </h2>
                <p className="mb-5">
                  Pre-launch research offers another useful perspective.
                </p>
                <p className="mb-5">
                  In a September 2026 survey of 200 verified iPhone buyers, Pogo found that 14.5% said they were likely to choose the iPhone Duo as their next phone. Respondents showed interest in the larger display and its potential to combine phone and tablet functionality, while price and durability remained important concerns.
                </p>
                <p className="mb-5">
                  The survey was relatively small and measured stated intentions before the device went on sale, so it should not be treated as a prediction of overall sales. Nevertheless, it highlights an important distinction: consumers can be excited about a new product without being ready to purchase it.
                </p>
                <p className="mb-5">
                  Early launch demand has been strong, but long-term satisfaction will depend on how well the phone performs beyond the initial excitement.
                </p>

                <h2 id="is-apple-delivering" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Is Apple Delivering on Its Commitment?
                </h2>
                <p className="mb-5">
                  The iPhone Duo shows that Apple is taking foldable technology seriously. Its hardware design, larger display, and software adaptations provide a new way to use an iPhone.
                </p>
                <p className="mb-4">
                  However, the company still has several areas to strengthen.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border border-[#f0f0f0] rounded-xl overflow-hidden text-sm">
                    <thead>
                      <tr className="bg-[#056bfa] text-white">
                        <th className="px-4 py-3 text-left font-bold">Consumer expectation</th>
                        <th className="px-4 py-3 text-left font-bold">What Apple needs to demonstrate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Premium engineering", "Consistent performance and reliable hardware"],
                        ["Practical multitasking", "Better optimization across third-party apps"],
                        ["Long-term durability", "Dependable hinge and screen performance"],
                        ["Premium photography", "A camera experience that meets flagship expectations"],
                        ["Value for money", "Clear everyday benefits that justify the price"],
                        ["Ownership confidence", "Accessible repairs and reliable customer support"],
                      ].map(([expectation, need], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f8f8]"}>
                          <td className="px-4 py-3 border-t border-[#f0f0f0] font-medium text-black">{expectation}</td>
                          <td className="px-4 py-3 border-t border-[#f0f0f0] text-[#4b5563]">{need}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mb-5">
                  Apple's commitment should not be measured solely by its product announcements. It will also depend on software updates, developer support, repair experiences, and how the device holds up over time.
                </p>
                <p className="mb-5">
                  The company also says the iPhone Duo contains 35% recycled material overall and is manufactured using 60% renewable energy across its supply chain. These are meaningful elements of its stated environmental approach, although their broader impact must be considered alongside the product's complete lifecycle.
                </p>

                <h2 id="what-apple-needs-to-do-next" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  What Apple Needs to Do Next
                </h2>
                <p className="mb-5">
                  To turn early interest into lasting consumer trust, Apple should focus on several priorities.
                </p>
                <p className="mb-5">
                  First, it needs to keep improving the software experience so that more applications make effective use of the larger screen. Second, it should demonstrate long-term hardware reliability and make ownership costs transparent. Third, future generations could address some of the current trade-offs, particularly around camera versatility and everyday convenience.
                </p>
                <p className="mb-5">
                  Most importantly, Apple needs to show that foldable technology solves real problems for consumers. If users find themselves switching between apps more efficiently, enjoying content more comfortably, and carrying fewer devices, the iPhone Duo will have a stronger reason to exist beyond novelty.
                </p>

                <h2 id="is-foldable-vision-worth-it" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Is Apple's Foldable Vision Worth It?
                </h2>
                <p className="mb-5">
                  The iPhone Duo represents a bold step for Apple, combining a foldable design with the familiar iPhone experience. While its larger display and multitasking capabilities have attracted attention, its premium price, camera limitations, and long-term durability remain important considerations for buyers.
                </p>
                <p className="mb-5">
                  For consumers, the decision comes down to whether the convenience of a foldable phone justifies the investment. Comparing features, evaluating everyday needs, and looking for ways to save can make that decision easier.
                </p>
                <p className="mb-5">
                  Planning to upgrade your tech this season? Visit <Link href="/" className="text-[#056bfa] hover:underline">CouponsBit</Link> to explore the latest <Link href="/deals" className="text-[#056bfa] hover:underline">coupon codes, promo codes, and deals</Link> across popular brands. Whether you're shopping for <Link href="/categories/electronics" className="text-[#056bfa] hover:underline">electronics</Link>, <Link href="/categories/electronics" className="text-[#056bfa] hover:underline">accessories</Link>, or everyday essentials, CouponsBit helps you discover available offers so you can compare your options and make more informed purchasing decisions. Before checking out, <Link href="/stores" className="text-[#056bfa] hover:underline">browse CouponsBit</Link> for relevant discounts and see if you can get more value from your next purchase.
                </p>

              </div>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
                {["iPhone Duo", "Apple", "Foldable iPhone", "Tech Deals", "Apple Discount Code", "CouponsBit"].map((tag, i) => (
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

              {/* Table of Contents */}
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
                    { name: "Apple", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/apple-logo_vrakxu.webp", dealText: "Up To $150 Gift Card", href: "/stores/apple-discount-code" },
                    { name: "Samsung", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788868873/samsung-logo_o6jp7u.webp", dealText: "Up To 30% OFF", href: "/stores/samsung-promo-code" },
                    { name: "Dell", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782890858/dell-coupon-code_mxtssy.webp", dealText: "Up To 69% OFF", href: "/stores/dell-discount-code" },
                    { name: "HP", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782890859/hp-coupon-code_vaogna.webp", dealText: "Up To 55% OFF", href: "/stores/hp-discount-code" },
                    { name: "Geekbuying", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/geekbuying-logo_pnkeev.webp", dealText: "Up To 56% OFF", href: "/stores/geekbuying-discount-code" },
                    { name: "StubHub", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp", dealText: "Flat 10% OFF", href: "/stores/stubhub-discount-code" },
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
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1792742394/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes_bvz06w.webp",
                  date: "October 23, 2026",
                  readTime: "6 MIN READ",
                  title: "Spirit Halloween vs Amazon vs Wish.com: Budget Costumes",
                  desc: "Compare Spirit Halloween, Amazon, and Wish.com for budget Halloween costumes in 2026. Explore affordable costume ideas and tips to save with CouponsBit.",
                  href: "/blog/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes",
                },
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1783077516/how-to-save-money-shopping-online_h5gv1z.webp",
                  date: "July 9, 2026",
                  readTime: "8 MIN READ",
                  title: "Holiday Shopping Calendar 2026: Best Times to Shop & Save",
                  desc: "Plan your purchases around the biggest U.S. shopping events of 2026. Month-by-month guide to maximizing your savings all year.",
                  href: "/blog/holiday-shopping-calendar-2026",
                },
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1000,c_limit/v1783077516/how-to-save-money-shopping-online_h5gv1z.webp",
                  date: "July 3, 2026",
                  readTime: "6 MIN READ",
                  title: "How to Save Money While Shopping Online in 2026",
                  desc: "Learn how to save money online in 2026 with proven shopping tips, coupon strategies, cashback tricks, and exclusive deals from CouponsBit.",
                  href: "/blog/how-to-save-money-shopping-online",
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
                      READ MORE <ArrowRight className="w-3.5 h-3.5" />
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
