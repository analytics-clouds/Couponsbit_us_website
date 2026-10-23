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
    { id: "spirit-halloween", title: "1. Spirit Halloween: Best for Classic Halloween Looks" },
    { id: "amazon", title: "2. Amazon: Best for Variety and Convenient Shopping" },
    { id: "wishcom", title: "3. Wish.com: Best for Exploring Low-Cost Accessories" },
    { id: "comparison", title: "4. Spirit Halloween vs Amazon vs Wish.com: Which One Wins?" },
    { id: "costume-ideas", title: "5. Budget Halloween Costume Ideas You Can Try in 2026" },
    { id: "smart-ways", title: "6. Smart Ways to Save on Halloween Shopping" },
    { id: "couponsbit-cta", title: "7. Make Halloween 2026 More Affordable with CouponsBit" },
    { id: "faq", title: "8. Frequently Asked Questions" },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    {
      q: "Which is better for budget Halloween costumes: Spirit Halloween, Amazon, or Wish.com?",
      a: "It depends on what you need. Spirit Halloween specializes in Halloween costumes and accessories, Amazon offers a broad selection for price comparisons, and Wish.com can be useful for inexpensive accessories. Compare the specific products, delivery estimates, and total costs before choosing.",
    },
    {
      q: "Where can I find affordable Halloween costumes for adults and kids?",
      a: "Start with Spirit Halloween and Amazon for ready-made costume options, then consider Wish.com for accessories and DIY costume pieces. Availability, sizes, and prices vary by listing and seller.",
    },
    {
      q: "How can I save money on Halloween costumes?",
      a: "Reuse clothing you already own, purchase only the accessories you need, compare costume bundles, and review shipping charges. Check CouponsBit for available promotional codes before completing your purchase.",
    },
    {
      q: "Is Wish.com a good option for last-minute Halloween shopping?",
      a: "It may be suitable for items with confirmed delivery dates, but don't rely on a low listed price alone. Check the estimated arrival date, shipping charges, product reviews, and seller policies. If Halloween is very close, a local store or a retailer offering suitable pickup options may be more practical.",
    },
    {
      q: "Can I use coupon codes on Halloween costumes?",
      a: "Some retailers offer eligible coupon codes or promotional discounts on selected products. Restrictions can apply to specific sellers, categories, or items. Check the offer terms and final checkout price before ordering.",
    },
    {
      q: "When should I shop for Halloween costumes?",
      a: "Shopping early gives you more time to compare options, find your size, and receive your order. If you're shopping close to October 31, prioritize local availability or delivery dates that are clearly confirmed.",
    },
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
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">Spirit Halloween vs Amazon vs Wish</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN - Article Content */}
            <article className="w-full lg:w-[65%]">
              {/* Post Header */}
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">HALLOWEEN DEALS</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">6 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">October 23, 2026</span>
                  </div>
                </div>
                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  Spirit Halloween vs Amazon vs Wish: Halloween Deals 2026
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/couponsbit/image/upload/v1792742394/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes_bvz06w.webp"
                    alt="Spirit Halloween vs Amazon vs Wish.com: Budget Halloween Costumes 2026"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  Comparing Spirit Halloween, Amazon, and Wish.com for budget Halloween costumes in 2026
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    "The best Halloween deal isn't always the item with the lowest advertised price. It's the one that fits your budget, arrives on time, and gives you the look you want."
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">
                <p className="mb-5">
                  Halloween is the perfect excuse to dress up as your favorite movie character, a spooky vampire, a classic witch, or even a funny internet meme. But between costumes, makeup, accessories, and Halloween parties, getting your look ready can quickly become expensive. The good news? You don't need to spend a fortune to put together an unforgettable Halloween outfit.
                </p>
                <p className="mb-5">
                  If you're shopping for Halloween costumes on a budget, three places worth comparing are Spirit Halloween, Amazon, and Wish.com. Each offers a different shopping experience, whether you want a complete costume, a quick DIY look, or inexpensive accessories to bring your idea to life.
                </p>
                <p className="mb-5">
                  So, which retailer should you choose for Halloween 2026? Let's compare their strengths, explore costume ideas, and find out how you can make your <Link href="/blog/halloween-shopping-guide-2026" className="text-[#056bfa] hover:underline">Halloween shopping</Link> more affordable with <Link href="/deals" className="text-[#056bfa] hover:underline">CouponsBit</Link>.
                </p>

                <h2 id="spirit-halloween" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  1. Spirit Halloween: Best for Classic Halloween Looks
                </h2>
                <p className="mb-5">
                  If Halloween is your favorite time of year, Spirit Halloween is a natural place to start. The retailer specializes in seasonal costumes, spooky decorations, masks, props, and accessories for adults, children, and even pets. Its collection includes traditional Halloween favorites alongside costumes inspired by popular entertainment and themed characters.
                </p>
                <p className="mb-4 font-bold text-black">What can you find at Spirit Halloween?</p>
                <ul className="list-disc list-inside space-y-1 mb-5 pl-2">
                  <li>Classic spooky costumes: Witches, vampires, skeletons, ghosts, and other Halloween staples.</li>
                  <li>Character-inspired outfits: Costumes based on recognizable characters and entertainment themes.</li>
                  <li>Costume accessories: Wigs, masks, hats, gloves, and props to complete your look.</li>
                  <li>Family and group costumes: Coordinated ideas for friends, couples, and families.</li>
                </ul>
                <p className="mb-5">
                  Spirit Halloween is especially useful when you have a specific costume idea and want to find several matching pieces in one place. You can also visit a seasonal store to see the available options in person.
                </p>
                <p className="mb-4 font-bold text-black">How to save money at Spirit Halloween</p>
                <p className="mb-5">
                  Instead of purchasing every accessory separately, look for costumes that already include the essential pieces. Check the product description to understand exactly what comes in the package, then add only the items you genuinely need.
                </p>
                <p className="mb-5">
                  You can also browse available <Link href="/stores/spirit-halloween-discount-code" className="text-[#056bfa] hover:underline">Spirit Halloween coupon codes</Link> and promotional offers on CouponsBit before checking out. Compare the final cost, including shipping, rather than focusing only on the displayed discount.
                </p>
                <p className="mb-5">
                  <strong className="text-black">Best for:</strong> Shoppers who want a recognizable Halloween costume, themed accessories, and a dedicated Halloween shopping experience.
                </p>

                <h2 id="amazon" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  2. Amazon: Best for Variety and Convenient Shopping
                </h2>
                <p className="mb-5">
                  Amazon is a convenient option if you want to compare multiple Halloween costume styles without visiting different stores. Its marketplace features costumes and accessories from numerous sellers, making it easy to explore different designs, sizes, and price points.
                </p>
                <p className="mb-5">
                  Whether you're planning a last-minute party outfit or putting together matching costumes for the family, Amazon offers plenty of options to investigate.
                </p>
                <p className="mb-4 font-bold text-black">What can you find on Amazon?</p>
                <ul className="list-disc list-inside space-y-1 mb-5 pl-2">
                  <li>Affordable costume sets: Options for adults, children, and babies.</li>
                  <li>DIY costume essentials: Capes, hats, masks, gloves, and themed clothing.</li>
                  <li>Makeup and accessories: Face paint, fake blood, wigs, and decorative pieces.</li>
                  <li>Group costume ideas: Coordinated outfits for couples, friends, and families.</li>
                  <li>Simple Halloween outfits: Graphic T-shirts, themed pajamas, and easy-to-style clothing.</li>
                </ul>
                <p className="mb-5">
                  One advantage of shopping on Amazon is the ability to compare similar products from different sellers. Customer reviews, product photos, size charts, and delivery estimates can help you decide which item offers the best value.
                </p>
                <p className="mb-4 font-bold text-black">How to save money on Amazon Halloween costumes</p>
                <p className="mb-5">
                  Start by setting a budget before browsing. Search for affordable Halloween costumes, compare similar listings, and check whether a complete costume set costs less than buying each component individually.
                </p>
                <p className="mb-5">
                  Don't forget to review the estimated delivery date. With Halloween approaching, a low-priced costume isn't a bargain if it arrives after your party.
                </p>
                <p className="mb-5">
                  Look for eligible Amazon promotional offers and coupon discounts, and compare the final checkout price. You can also check CouponsBit for available <Link href="/stores/amazon-discount-code" className="text-[#056bfa] hover:underline">Amazon promo codes</Link> before placing your order.
                </p>
                <p className="mb-5">
                  <strong className="text-black">Best for:</strong> Shoppers who want a wide selection, convenient price comparisons, and costume options for different budgets.
                </p>

                <h2 id="wishcom" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  3. Wish.com: Best for Exploring Low-Cost Costume Accessories
                </h2>
                <p className="mb-5">
                  <Link href="/stores/wish-discount-code" className="text-[#056bfa] hover:underline">Wish.com</Link> is another marketplace to consider when you're searching for inexpensive Halloween accessories or unusual costume ideas. Its listings may include masks, wigs, themed jewelry, decorative props, costume pieces, and novelty items from different sellers.
                </p>
                <p className="mb-5">
                  Rather than expecting every item to be a complete Halloween outfit, think of Wish.com as a place to explore individual pieces that can help you create a costume on a smaller budget.
                </p>
                <p className="mb-4 font-bold text-black">What can you shop for on Wish.com?</p>
                <ul className="list-disc list-inside space-y-1 mb-5 pl-2">
                  <li>Costume accessories: Masks, hats, gloves, and novelty pieces.</li>
                  <li>Spooky add-ons: Decorative items that can enhance a Halloween look.</li>
                  <li>DIY costume components: Individual pieces to combine with clothes you already own.</li>
                  <li>Themed extras: Small accessories for parties, photo booths, and group outfits.</li>
                </ul>
                <p className="mb-5">
                  The biggest consideration is that low listed prices don't always translate into the best overall value. Product quality, sizing, shipping charges, delivery estimates, and seller-specific policies can vary.
                </p>
                <p className="mb-4 font-bold text-black">How to shop smartly on Wish.com</p>
                <p className="mb-5">
                  Read product descriptions carefully and check the dimensions, materials, and available sizes before ordering. Examine customer reviews and photos when available, and confirm the total cost at checkout.
                </p>
                <p className="mb-5">
                  Pay particular attention to delivery estimates. If Halloween is only a few days away, an item with an uncertain arrival date may not be worth the risk.
                </p>
                <p className="mb-5">
                  For a more affordable approach, use Wish.com to find a few accessories and combine them with clothing you already own. For example, a black outfit, inexpensive themed jewelry, and dramatic makeup can create a complete look without requiring a full costume set.
                </p>
                <p className="mb-5">
                  <strong className="text-black">Best for:</strong> Budget-conscious shoppers who enjoy DIY costumes and want to explore inexpensive accessories, provided the delivery timeline works for them.
                </p>

                <h2 id="comparison" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  4. Spirit Halloween vs Amazon vs Wish.com: Which One Wins?
                </h2>
                <p className="mb-5">
                  Each retailer has its own advantages. Your best choice depends on the costume you want, how much you're willing to spend, and how quickly you need it.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse rounded-2xl overflow-hidden">
                    <thead>
                      <tr className="bg-[#056bfa] text-white">
                        <th className="text-left px-4 py-3 font-bold">Shopping factor</th>
                        <th className="text-left px-4 py-3 font-bold">Spirit Halloween</th>
                        <th className="text-left px-4 py-3 font-bold">Amazon</th>
                        <th className="text-left px-4 py-3 font-bold">Wish.com</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#f0f0f0] bg-white">
                        <td className="px-4 py-3 font-semibold text-black">Main strength</td>
                        <td className="px-4 py-3 text-gray-600">Dedicated Halloween selection</td>
                        <td className="px-4 py-3 text-gray-600">Broad marketplace variety</td>
                        <td className="px-4 py-3 text-gray-600">Low-cost items to explore</td>
                      </tr>
                      <tr className="border-b border-[#f0f0f0] bg-[#f9f9f9]">
                        <td className="px-4 py-3 font-semibold text-black">Complete costumes</td>
                        <td className="px-4 py-3 text-gray-600">A key part of its offering</td>
                        <td className="px-4 py-3 text-gray-600">Many styles from different sellers</td>
                        <td className="px-4 py-3 text-gray-600">Depends on the listing</td>
                      </tr>
                      <tr className="border-b border-[#f0f0f0] bg-white">
                        <td className="px-4 py-3 font-semibold text-black">Accessories</td>
                        <td className="px-4 py-3 text-gray-600">Extensive themed options</td>
                        <td className="px-4 py-3 text-gray-600">Wide range of choices</td>
                        <td className="px-4 py-3 text-gray-600">Useful for individual costume pieces</td>
                      </tr>
                      <tr className="border-b border-[#f0f0f0] bg-[#f9f9f9]">
                        <td className="px-4 py-3 font-semibold text-black">Price comparison</td>
                        <td className="px-4 py-3 text-gray-600">Compare costumes and bundles</td>
                        <td className="px-4 py-3 text-gray-600">Easy to compare multiple listings</td>
                        <td className="px-4 py-3 text-gray-600">Check the total price carefully</td>
                      </tr>
                      <tr className="border-b border-[#f0f0f0] bg-white">
                        <td className="px-4 py-3 font-semibold text-black">Delivery considerations</td>
                        <td className="px-4 py-3 text-gray-600">Check shipping or local store availability</td>
                        <td className="px-4 py-3 text-gray-600">Check seller and delivery estimates</td>
                        <td className="px-4 py-3 text-gray-600">Allow extra time if delivery is uncertain</td>
                      </tr>
                      <tr className="border-b border-[#f0f0f0] bg-[#f9f9f9]">
                        <td className="px-4 py-3 font-semibold text-black">Ideal shopping style</td>
                        <td className="px-4 py-3 text-gray-600">Ready-made themed looks</td>
                        <td className="px-4 py-3 text-gray-600">Convenience and variety</td>
                        <td className="px-4 py-3 text-gray-600">DIY and accessory-led looks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-5">
                  The verdict: Spirit Halloween is a strong starting point for dedicated Halloween costumes, Amazon is a practical choice for variety and comparison shopping, and Wish.com is worth exploring for inexpensive accessories. None is automatically the cheapest for every costume, so compare the actual products and final checkout totals before deciding.
                </p>

                <h2 id="costume-ideas" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  5. Budget Halloween Costume Ideas You Can Try in 2026
                </h2>
                <p className="mb-5">
                  You don't have to buy a complete costume to look Halloween-ready. A little creativity can help you put together an outfit using clothes you already own and a few affordable extras.
                </p>
                <p className="mb-3 font-bold text-black">1. Classic Witch</p>
                <p className="mb-5">
                  Use a black dress or black top and trousers, then add a pointed hat, dark makeup, and boots. Shop for a costume bundle if you need several pieces, or build your look from individual accessories.
                </p>
                <p className="mb-3 font-bold text-black">2. Vampire Look</p>
                <p className="mb-5">
                  A black outfit, a dark red accent, dramatic eye makeup, and vampire fangs can create a recognizable look. A cape is optional, so you can skip it if you're working with a tight budget.
                </p>
                <p className="mb-3 font-bold text-black">3. Zombie or Skeleton</p>
                <p className="mb-5">
                  Use old clothes that you don't mind altering, then add Halloween makeup. If you prefer a ready-made outfit, compare skeleton-print clothing and costume sets across the three retailers.
                </p>
                <p className="mb-3 font-bold text-black">4. Movie or Pop-Culture Character</p>
                <p className="mb-5">
                  Choose a character with a distinctive color palette or signature accessory. You may already own most of the clothing needed, leaving you to purchase only a wig, hat, mask, or other recognizable detail.
                </p>
                <p className="mb-3 font-bold text-black">5. Matching Group Costumes</p>
                <p className="mb-5">
                  Coordinate with friends using a shared theme rather than buying identical full outfits. For example, everyone could dress in black and add different spooky accessories. This approach keeps the group look consistent without requiring everyone to spend the same amount.
                </p>

                <h2 id="smart-ways" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  6. Smart Ways to Save on Halloween Shopping
                </h2>
                <p className="mb-5">
                  A budget-friendly Halloween starts with a plan. Before you buy anything, decide how much you're comfortable spending on your entire look.
                </p>
                <p className="mb-3">Here are a few ways to keep your shopping costs under control:</p>
                <ul className="list-disc list-inside space-y-1 mb-5 pl-2">
                  <li><strong className="text-black">Set a total budget:</strong> Include your costume, makeup, accessories, shipping, and any party essentials.</li>
                  <li><strong className="text-black">Shop your wardrobe first:</strong> Build your outfit around clothes you already own.</li>
                  <li><strong className="text-black">Compare complete costs:</strong> A cheaper listing may become more expensive once shipping is added.</li>
                  <li><strong className="text-black">Read reviews and sizing details:</strong> Avoid paying for an item that doesn't fit or match its description.</li>
                  <li><strong className="text-black">Order early when possible:</strong> Delivery delays can turn a good deal into a missed opportunity.</li>
                  <li><strong className="text-black">Look for bundle offers:</strong> Costume sets may cost less than purchasing every item individually.</li>
                  <li><strong className="text-black">Check CouponsBit before checkout:</strong> Browse available coupon codes, promo codes, and retailer offers to see whether you can save more on eligible purchases.</li>
                </ul>
                <p className="mb-5">
                  Remember that the best Halloween deal isn't always the item with the lowest advertised price. It's the one that fits your budget, arrives on time, and gives you the look you want.
                </p>

                <h2 id="couponsbit-cta" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  7. Make Halloween 2026 More Affordable with CouponsBit
                </h2>
                <p className="mb-5">
                  Halloween should be about having fun, expressing your creativity, and making memories—not worrying about overspending on a costume you'll wear once.
                </p>
                <p className="mb-5">
                  Whether you're browsing Spirit Halloween for a classic spooky outfit, comparing Amazon costume deals, or exploring <Link href="/stores/wish-discount-code" className="text-[#056bfa] hover:underline">Wish.com</Link> for inexpensive accessories, take a few minutes to compare your options before making a purchase.
                </p>
                <p className="mb-5">
                  <Link href="/" className="text-[#056bfa] hover:underline">CouponsBit</Link> helps shoppers discover available coupon codes, promo codes, and discounts across participating retailers. Before you check out, explore the latest offers listed on CouponsBit and check their terms to see whether your chosen items qualify.
                </p>
                <p className="mb-5">
                  With a little planning and smart comparison shopping, you can create a memorable Halloween look while keeping more money in your pocket for candy, decorations, and the celebrations ahead.
                </p>

                <h2 id="faq" className="flex items-center text-black font-extrabold text-2xl mt-12 mb-4">
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
                  "Halloween Costumes", "Budget Halloween", "Spirit Halloween", "Amazon", "Wish.com", "Coupon Codes", "Halloween 2026"
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
                      className={`flex items-start gap-3 py-2.5 group ${i !== sections.length - 1 ? "border-b border-[#f5f5f5]" : ""}`}
                    >
                      <span className="text-[#056bfa] font-bold text-[11px] mt-1 shrink-0">{(i + 1).toString().padStart(2, "0")}</span>
                      <span className="text-gray-600 text-[13px] group-hover:text-[#056bfa] transition-colors leading-[1.4]">{section.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Box 2: Popular Halloween Stores */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🎃</span> Popular Halloween Stores
                </h4>
                <div className="space-y-4">
                  {[
                    { name: "Spirit Halloween", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/spirti-logo_x4nbor.webp", dealText: "Up To 75% OFF", href: "/stores/spirit-halloween-discount-code" },
                    { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
                    { name: "Wish.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/wish-logo_n1dypa.webp", dealText: "Up To 60% OFF", href: "/stores/wish-discount-code" },
                    { name: "Shein", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp", dealText: "Up To 90% OFF", href: "/stores/shein-coupon-code" },
                    { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
                    { name: "Sephora", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/Sephora-Logo_djk72l.webp", dealText: "Up To 50% OFF", href: "/stores/sephora-promo-code" },
                  ].map((store, i) => (
                    <Link
                      key={store.name}
                      href={store.href}
                      className={`flex items-center gap-3 pb-4 group ${i !== 5 ? "border-b border-[#f0f0f0]" : ""}`}
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

              {/* Box 3: Shop By Category */}
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
                    { icon: Tag,         name: "Gaming",        count: "90+",  color: "text-green-500",  href: "/categories/gaming" },
                  ].map((cat, i) => (
                    <Link key={i} href={cat.href} className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <cat.icon className={cn("w-4 h-4", cat.color)} />
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
                  title: "Halloween Shopping Guide 2026: Spooky Deals You Can't Miss",
                  desc: "Smart Halloween shopping tips for costumes, decorations, candy, party supplies, and makeup. Find the best Halloween coupon codes with CouponsBit.",
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
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1783077516/how-to-save-money-shopping-online_h5gv1z.webp",
                  date: "July 3, 2026",
                  readTime: "8 MIN READ",
                  title: "How to Save Money While Shopping Online in 2026",
                  desc: "Proven online shopping tips, coupon strategies, cashback tricks, and exclusive deals to help you save more every time you shop.",
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
