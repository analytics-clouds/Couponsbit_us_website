"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent,
  Users,
  BadgeCheck,
  ExternalLink, HeartHandshake, ShieldAlert, Calendar, Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Footprints,
  Sparkles,
  Gift,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface Deal {
  id: string;
  label: string;
  heading: string;
  sub: string;
}

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const DEALS: Deal[] = [
  { id: "d1", label: "NEW", heading: "New Customer Offer", sub: "Latest Deals" },
  { id: "d2", label: "DEAL", heading: "Classic Clog Deal", sub: "Featured Picks" },
  { id: "d3", label: "SALE", heading: "Percentage Off Sitewide", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Free Shipping Offer", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Jibbitz Charm Bundle", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Zara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp", dealText: "Up To 50% OFF", href: "/stores/zara-discount-code" },
  { name: "H&M", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp", dealText: "Up To 77% OFF", href: "/stores/hm-promo-code" },
  { name: "Shein", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp", dealText: "Up To 90% OFF", href: "/stores/shein-coupon-code" },
  { name: "Nike", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp", dealText: "Up To 60% OFF", href: "/stores/nike-discount-code" },
  { name: "Old Navy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/old-navy-logo_qa0qp6.webp", dealText: "Up To 50% OFF", href: "/stores/old-navy-promo-code" },
  { name: "Fashion Nova", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/fashion-nova_cm1al3.webp", dealText: "Up To 50% OFF", href: "/stores/fashion-nova-discount-code" },
];

const STORE_URL = "https://www.crocs.com";

export default function CrocsCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      {/* Toast Notification */}
      <div className={cn(
        "fixed top-20 right-6 z-[60] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-4 flex items-center gap-3 transition-all duration-300 transform",
        showToast ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0 pointer-events-none"
      )}>
        <div className="bg-[#f0fdf4] p-2 rounded-full">
          <CheckCircle className="w-5 h-5 text-[#22c55e]" />
        </div>
        <div>
          <p className="font-black text-black text-sm">Code Copied!</p>
          <p className="text-gray-500 text-xs font-bold font-mono">{toastCode}</p>
        </div>
      </div>

      <main>
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Crocs</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789535819/crocs_promo_code_tx3jlm.webp" alt="Crocs" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Crocs</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(18.2k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Crocs promo codes and discount codes to save up to 75% sitewide and shop shoes, sandals, and Jibbitz from $19.99. Buy any 3 eligible items to get 30% OFF and enjoy stylish footwear for women, men, and kids in Sept 2026.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "16", label: "Offers" },
                    { icon: Percent, val: "300+", label: "Deals" },
                    { icon: Users, val: "2.5M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <stat.icon className="w-4.5 h-4.5 text-[#056bfa]" />
                       <div>
                         <div className="text-black font-black text-xs leading-none">{stat.val}</div>
                         <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">{stat.label}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: 1 }}>
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789535819/crocs_promo_code_tx3jlm.webp" alt="Crocs Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="hidden md:block bg-[#f5f5f5] py-5 border-y border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
              {[
                { icon: Star, title: "Top Deals", sub: "Best offers handpicked for you" },
                { icon: ShieldCheck, title: "Verified Coupons", sub: "100% working & tested codes" },
                { icon: PiggyBank, title: "Big Savings", sub: "Save more on every order" },
                { icon: RefreshCw, title: "Updated Daily", sub: "New offers every single day" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center md:border-r last:border-0 border-[#e0e0e0] px-4">
                  <item.icon className="w-6 h-6 text-[#056bfa] shrink-0" />
                  <div className="text-left">
                    <p className="text-black font-black text-sm leading-none">{item.title}</p>
                    <p className="text-gray-500 font-bold text-[12px] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coupons + Sidebar */}
        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Crocs Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "50% OFF", title: "Crocs Promo Code – Cutie Beach Bear Jibbitz | 50% OFF", desc: "Get the Cutie Beach Bear Jibbitz charm for just $2.50 instead of $4.99 and save 50%.", bullets: ["Add this playful charm to your Crocs shoes and personalize your favourite pair with a fun beach-inspired detail.", "Grab this Crocs sale offer while stocks last and check for a Crocs promo code or Crocs coupon for additional eligible savings."] },
                  { label: "UNDER", value: "$19.99", title: "Crocs Promo Code – Shoes, Sandals & Jibbitz | $19.99 Or Less", desc: "Shop selected Crocs shoes, Crocs sandals and Jibbitz charms priced at $19.99 or less.", bullets: ["Discover affordable styles for everyday wear, including options for Crocs for women, mens Crocs and kids Crocs.", "Take advantage of this Crocs sale and look for a Crocs promo code before completing your purchase."] },
                  { label: "SALE", value: "UP TO 75%", title: "Crocs Promo Code – Sitewide Sale | Up To 75% OFF", desc: "Save up to 75% on selected Crocs footwear, accessories and other eligible styles during the sale.", bullets: ["Explore Crocs shoes, croc slides, Crocs slippers and more at significantly reduced prices.", "Shop the Crocs outlet-style savings and use a Crocs promo code when an eligible offer is available."] },
                  { label: "SALE", value: "UP TO 50%", title: "Crocs Promo Code – Women’s Footwear | Up To 50% OFF", desc: "Enjoy up to 50% OFF selected women’s footwear during the Crocs sale.", bullets: ["Browse Crocs for women in a variety of comfortable designs, colours and seasonal styles.", "Find your favourite pair of black Crocs, white Crocs or pink Crocs and check for available promo code savings."] },
                  { label: "SALE", value: "30% OFF", title: "Crocs – Buy 3, Get 30% OFF", desc: "Choose any three eligible products and receive 30% OFF with this special Crocs offer.", bullets: ["Mix and match Crocs shoes, Jibbitz charms and other selected footwear to build your collection.", "Add kids Crocs, toddler Crocs or everyday styles to your cart and enjoy the multi-item discount."] },
                  { label: "STUDENT", value: "25% OFF", title: "Crocs – Student Discount | 25% OFF", desc: "Students can enjoy an exclusive 25% OFF on eligible Crocs purchases.", bullets: ["Shop comfortable footwear and accessories for everyday campus, travel and casual wear.", "Explore the Crocs store and make the most of this student saving on qualifying products."] },
                  { label: "SALE", value: "UP TO 20%", title: "Crocs – Women’s Footwear | Up To 20% OFF", desc: "Save up to 20% on selected women’s footwear and refresh your everyday shoe collection.", bullets: ["Explore Crocs for women, including versatile shoes, sandals and comfortable casual styles.", "Shop the Crocs sale and check for a Crocs coupon to maximize your savings on eligible footwear."] },
                  { label: "SALE", value: "UP TO 20%", title: "Crocs – Men’s Footwear | Up To 20% OFF", desc: "Get up to 20% OFF selected men’s footwear with this Crocs offer.", bullets: ["Discover mens Crocs in comfortable silhouettes designed for everyday activities and casual styling.", "Browse the Crocs store and look for a Crocs promo code before purchasing eligible styles."] },
                  { label: "FROM", value: "$4.99", title: "Crocs – Jibbitz Charms | Starting From $4.99", desc: "Personalize your favourite footwear with Jibbitz charms starting from just $4.99.", bullets: ["Explore fun designs to create a unique look across your Crocs shoes, croc slides and slippers.", "Add your favourite croc jibbitz and check for a Crocs coupon or promo code on qualifying orders."] },
                  { label: "FROM", value: "$18.74", title: "Crocs – New Arrivals | Starting From $18.74", desc: "Discover Crocs new arrivals starting from $18.74 across selected footwear and accessories.", bullets: ["Find fresh styles for women, men and kids alongside seasonal designs and everyday favourites.", "Explore the latest Crocs shoes and look for an available Crocs promo code before checkout."] },
                  { label: "FROM", value: "$44.99", title: "Crocs – Soho Y-Strap Sandal | Up To $59.99", desc: "Shop the TikTok-viral Soho Y-Strap Sandal priced from $44.99 to $59.99.", bullets: ["Its stylish Y-strap design makes it an easy choice for casual summer outfits and everyday wear.", "Explore Crocs sandals during the sale and check for a Crocs promo code on eligible purchases."] },
                  { label: "SALE", value: "50% OFF", title: "Crocs – Tropical Flower Jibbitz | 50% OFF", desc: "Get the Tropical Flower Jibbitz charm for just $2.50 instead of $4.99 and save 50%.", bullets: ["Add a colourful floral accent to your footwear and give your Crocs a personalized seasonal look.", "Shop this Crocs sale deal and pair it with other croc jibbitz to create your own charm collection."] },
                  { label: "DEAL", value: "FREE SHIP", title: "Crocs – Free Shipping On Orders $34.99+", desc: "Enjoy Free Shipping on eligible Crocs orders of $34.99 or more.", bullets: ["Plus, get Free Returns on all orders for added convenience when shopping for your favourite footwear.", "Stock up on Crocs shoes, Crocs sandals or accessories and take advantage of the shipping offer."] },
                  { label: "DEAL", value: "$99.99", title: "Crocs Trailbreak 2 Tech – $99.99", desc: "Shop the Crocs Trailbreak 2 Tech in Bone for $99.99 and explore a rugged footwear option for outdoor adventures.", bullets: ["The design offers a practical choice for customers looking beyond everyday Crocs shoes and sandals.", "Add this versatile pair to your collection and check for a Crocs promo code before placing your eligible order."] },
                  { label: "NEW", value: "KIDS", title: "Crocs – Kids & Toddler Styles", desc: "Discover comfortable Crocs footwear designed for younger shoppers, with styles made for everyday adventures.", bullets: ["Explore kids Crocs, toddler Crocs and baby Crocs in a variety of fun colours and designs.", "Shop the Crocs sale and look for styles inspired by favourites such as Hello Kitty Crocs, Lightning McQueen Crocs and Spiderman Crocs."] },
                  { label: "NEW", value: "COLLABS", title: "Crocs – Popular Styles & Collaborations", desc: "Explore popular Crocs styles including fuzzy Crocs, Crocs Echo and other distinctive footwear collections.", bullets: ["Discover statement designs and collaborations such as Salehe Bembury Crocs for a more fashion-forward look.", "Browse the Crocs store and check for a Crocs promo code when shopping eligible styles."] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[10px] sm:tracking-[5px] text-[8px] sm:text-[15px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[15px] sm:text-4xl font-extrabold leading-none mt-2">{c.value}</div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                          <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                            </div>
                            <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">{c.title}</h2>
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">{c.desc}</p>
                            <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                              View Details
                              <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {c.bullets.map((b, bi) => (
                                  <li key={bi} className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>{b}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Crocs: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">

                <div className="w-full flex justify-center mb-6">
                  <a
                    href="https://www.google.com/preferences/source?q=couponsbit.us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                  >
                    <Image
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png"
                      alt="Add as a preferred source on Google"
                      width={280}
                      height={70}
                      className="w-full max-w-[260px] h-auto object-contain"
                      priority
                    />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">What Is Crocs?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Crocs is a global footwear brand best known for its distinctive clogs, lightweight construction, and comfort-focused designs. The brand's Classic Clog became its signature product and helped establish Crocs as a recognizable name in casual footwear.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Today, Crocs sells considerably more than its original clog. Its collections include clogs, sandals, slides, sneakers, slippers, boots, flip-flops, accessories, bags, and Jibbitz shoe charms. The brand has separate collections for women, men, kids, and toddlers, giving shoppers options across different ages and lifestyles.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Crocs also frequently collaborates with entertainment franchises, artists, sports properties, and other brands. These collaborations have helped turn its footwear into more than just a comfort-focused purchase, especially for shoppers who enjoy collectible or statement-making designs.

                  </p>  
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    At the center of the brand is its focus on lightweight, flexible comfort. The Classic Clog, for example, is designed to be lightweight, water-friendly, breathable, easy to clean, and customizable with Jibbitz charms.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Footprints, name: "Classic Clogs", count: "120+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Sparkles, name: "Sandals", count: "80+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Gift, name: "Jibbitz Charms", count: "60+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: ShoppingBag, name: "Kids' Footwear", count: "70+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Search, name: "New Arrivals", count: "40+", color: "text-orange-500", href: "/categories/fashion" },
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

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    Why Use CouponsBit for Crocs?
  </h3>
  <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
    <p>
      You shouldn't have to open ten different tabs just to figure out whether you're getting a good deal.
    </p>
    <p>
      CouponsBit gives shoppers a convenient place to check for Crocs promo codes, coupon offers, discounts, and deals before completing an order.
    </p>
    <p>
      The idea is simple: check the available savings first, compare them with the current sale, and then decide what works best for your purchase.
    </p>
    <p>
      Whether you're buying one pair of Classic Clogs or shopping for the whole family, making that quick check can help you avoid missing a potentially useful promotion.
    </p>
  </div>
</div>


              </div>
            </div>
          </div>
        </section>

        {/* More Stores */}
        <section className="py-20 bg-white border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-black text-black mb-10">More Stores You'll Love</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {RELATED_STORES.map((store, i) => (
                <Link key={i} href={store.href} className="bg-white border border-[#f0f0f0] rounded-3xl p-6 text-center shadow-sm hover:border-[#056bfa] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="h-14 flex items-center justify-center mx-auto">
                    <img src={store.logo} alt={store.name} width={120} height={48} className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <h3 className="text-black font-black text-sm mt-5 mb-1">{store.name}</h3>
                  <p className="text-[#056bfa] font-black text-[12px] uppercase mb-4">{store.dealText}</p>
                  <span className="text-[#056bfa] font-black text-[12px] uppercase hover:underline decoration-2">Visit Store →</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/stores" className="inline-flex items-center gap-2 px-9 py-3.5 border-2 border-[#056bfa] text-[#056bfa] bg-white rounded-full font-black hover:bg-[#056bfa] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
              <LayoutGrid className="w-4 h-4" />
              View More Stores
            </Link>
          </div>
        </section>

        {/* SEO Text Section */}
        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Main Content Area */}
      <div className="prose max-w-none text-left">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Crocs Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 font-bold text-[14px]">
      {[
        ["Cutie Beach Bear Jibbitz", "$2.50 (50% OFF)", "All Users", "Was $4.99; playful beach-inspired charm detail", "Jibbitz Charms"],
        ["Shoes, Sandals & Jibbitz", "$19.99 Or Less", "All Users", "Affordable styles for everyday wear", "Footwear & Accessories"],
        ["Sitewide Sale", "Up To 75% OFF", "All Users", "Outlet-style reduced prices on eligible styles", "Sitewide / Footwear"],
        ["Women's Footwear Sale", "Up To 50% OFF", "All Users", "Comfortable seasonal designs in multiple colors", "Women's Footwear"],
        ["Buy 3, Get 30% OFF", "30% OFF", "All Users", "Mix and match any 3 eligible products", "Shoes, Charms & Accessories"],
        ["Student Discount", "25% OFF", "Students", "Exclusive savings for campus and casual wear", "Eligible Purchases"],
        ["Women's Footwear Refresh", "Up To 20% OFF", "All Users", "Versatile shoes, sandals, and casual styles", "Women's Footwear"],
        ["Men's Footwear Deal", "Up To 20% OFF", "All Users", "Comfortable silhouettes for daily activities", "Men's Footwear"],
        ["Jibbitz Charms", "From $4.99", "All Users", "Personalize shoes with fun custom accents", "Jibbitz Charms"],
        ["New Arrivals", "From $18.74", "All Users", "Fresh footwear and accessory releases", "New Arrivals"],
        ["Soho Y-Strap Sandal", "$44.99 - $59.99", "All Users", "TikTok-viral summer sandal design", "Women's Sandals"],
        ["Tropical Flower Jibbitz", "$2.50 (50% OFF)", "All Users", "Was $4.99; colorful floral charm accent", "Jibbitz Charms"],
        ["Free Shipping Offer", "FREE Shipping", "Orders $34.99+", "Includes free returns on all orders", "Sitewide Orders"],
        ["Trailbreak 2 Tech (Bone)", "$99.99", "All Users", "Rugged footwear option for outdoor adventures", "Outdoor Footwear"],
        ["Kids & Toddler Styles", "Sale Prices", "All Users", "Includes Hello Kitty, McQueen & Spiderman themes", "Kids & Toddler Footwear"],
        ["Popular Styles & Collabs", "Sale Prices", "All Users", "Includes Fuzzy, Echo & Salehe Bembury collabs", "Featured Footwear"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 15 && "border-b-0")}>
          <td className="p-5 text-black font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-gray-500 align-middle">{row[2]}</td>
          <td className="p-5 text-gray-500 align-middle max-w-[200px]">{row[3]}</td>
          <td className="p-5 text-gray-500 align-middle max-w-[240px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Some shoes are made for a particular occasion. Crocs are made for pretty much everything. Whether you're heading out for a quick coffee, spending the day on your feet, packing for vacation, or looking for something comfortable to wear around the house, Crocs have become a go-to choice for shoppers who value comfort without giving up personality.
          </p>
          <p>
            And then there are the Jibbitz charms. Because apparently, regular shoes weren't expressive enough.
          </p>
          <p>
            If you're planning to add a new pair of clogs, sandals, sneakers, or charms to your collection, checking for a Crocs promo code before checkout can help you make the most of your purchase. Crocs regularly features sales, limited-time promotions, seasonal offers, and other ways to save, so it is worth comparing the available options before placing your order.
          </p>
          <p>
            CouponsBit makes that process easier by bringing together Crocs coupon codes, deals, promotional offers, and other savings opportunities in one place.
          </p>

          <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Find a Crocs Promo Code
        </h3>
        <p>
          Before you check out at Crocs, take a quick look for an active Crocs promo code on CouponsBit.
        </p>
        <p>
          A promotional code may provide a discount on eligible purchases, but the exact savings and requirements can vary. Some promotions may apply to selected products, while others may have minimum purchase requirements, expiration dates, or other restrictions.
        </p>
        <p>
          The smartest approach is to compare the promo code with any sale already running on the Crocs website. If a pair you want is already discounted, a separate coupon isn't necessarily the best option. On the other hand, a qualifying promotional code could potentially make your overall order even more appealing.
        </p>
        <p>
          Always check the terms of an offer before applying it so you know exactly what is eligible.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Crocs Coupon Code and Discount Offers
        </h3>
        <p>
          Crocs offers several different ways for shoppers to save throughout the year.
        </p>
        <p>
          The official Crocs website maintains dedicated sale and deals sections featuring discounted footwear for women, men, and kids. Its promotions can include clogs, sandals, sneakers, Jibbitz, and other products, with the selection changing regularly.
        </p>
        <p>
          You may also find limited-time flash sales and special promotional events. Crocs has previously promoted deals across clogs, sneakers, sandals, and other footwear categories, meaning it is worth checking current promotions before assuming that a standard coupon is your only opportunity to save.
        </p>
        <p>
          For frequent shoppers, Crocs Club and the Crocs app can also be worth exploring. The official site currently promotes a Crocs Club sign-up offer, while its app features exclusive promotional events and deals.
        </p>
        <p>
          Because promotions change, checking CouponsBit before every purchase gives you a chance to compare the latest available options.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Shop Classic Crocs Clogs
        </h3>
        <p>
          The Classic Clog is the product most people associate with Crocs, and for good reason.
        </p>
        <p>
          It is designed as an everyday comfort shoe with a lightweight construction, ventilation holes, water-friendly materials, a pivoting heel strap, and an easy-to-clean design. It can also be customized with Jibbitz charms.
        </p>
        <p>
          Classic Clogs work for everything from quick errands and gardening to casual outings, travel, and relaxing at home.
        </p>
        <p>
          If you're buying your first pair, the Classic Clog is an obvious place to start. If you already own one, however, the huge range of colors and personalization options makes it easy to justify another pair.
        </p>
        <p>
          And yes, Crocs absolutely knows what it's doing when it comes to making people want a pair in a color they technically don't need.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Crocs Sandals and Slides
        </h3>
        <p>
          Looking for something more open than a traditional clog?
        </p>
        <p>
          Crocs offers a variety of sandals, slides, flip-flops, and other warm-weather footwear. These styles can be useful for vacations, beach days, casual summer outfits, poolside wear, and everyday errands.
        </p>
        <p>
          Sandals can also make a practical choice when you want the comfort associated with Crocs without the enclosed shape of a clog.
        </p>
        <p>
          Before buying, compare different styles and check whether any current Crocs deals apply to the category you're shopping.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Crocs Sneakers and Casual Shoes
        </h3>
        <p>
          Crocs has expanded into sneakers and other casual footwear for shoppers who want a more traditional shoe silhouette while retaining the brand's comfort-focused approach.
        </p>
        <p>
          These styles can be useful for everyday outfits, travel, walking, casual work environments, or anyone who wants an alternative to traditional sneakers.
        </p>
        <p>
          The broader footwear selection means you don't necessarily have to choose between "Crocs comfort" and a conventional-looking shoe.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Crocs for Women
        </h3>
        <p>
          Women's Crocs collections include clogs, sandals, slides, boots, sneakers, slippers, flats, bags, accessories, and Jibbitz charms.
        </p>
        <p>
          That variety makes it possible to build a Crocs collection around different seasons and occasions.
        </p>
        <p>
          Choose a Classic Clog for everyday use, sandals for warmer weather, boots for cooler conditions, or a fashion-forward collaboration when you want something that stands out.
        </p>
        <p>
          Platform styles and statement designs can also turn Crocs into part of an outfit rather than simply a practical footwear choice.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Crocs for Men
        </h3>
        <p>
          Men's collections include classic clogs, sandals, sneakers, slides, boots, and other casual footwear.
        </p>
        <p>
          The versatility makes Crocs suitable for relaxed weekends, travel, outdoor activities, vacations, errands, and everyday wear.
        </p>
        <p>
          For shoppers who prefer a simple wardrobe, neutral-colored clogs or sneakers can work across multiple outfits. If you prefer something more playful, Crocs' collaborations and wide range of colors make it easy to go in the opposite direction.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Crocs for Kids and Toddlers
        </h3>
        <p>
          Crocs are also popular for younger shoppers because many styles are easy to put on and remove.
        </p>
        <p>
          Kids' collections include clogs, sandals, boots, sneakers, and colorful designs, while Jibbitz can add another layer of personalization.
        </p>
        <p>
          For families, checking for a Crocs promo code before buying multiple pairs can be particularly useful. Instead of treating every purchase as a separate shopping trip, look at the current promotions and determine whether an available deal works across the items you need.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Personalize Your Crocs With Jibbitz
        </h3>
        <p>
          A plain pair of Crocs is only the beginning.
        </p>
        <p>
          Jibbitz are small shoe charms designed to personalize Crocs footwear. They come in an enormous variety of themes, including characters, animals, sports, food and drinks, letters, numbers, hobbies, travel, and more.
        </p>
        <p>
          You can change them whenever you want, which means one pair of Crocs can have a completely different look from one day to the next.
        </p>
        <p>
          They are also an easy gifting option. A pair of Crocs combined with a selection of Jibbitz can create a more personalized present for birthdays, holidays, back-to-school shopping, or other occasions.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Crocs Collaborations and Limited Editions
        </h3>
        <p>
          Crocs is no stranger to collaborations.
        </p>
        <p>
          The brand regularly introduces collections inspired by entertainment, gaming, characters, sports, fashion, and popular culture. These collaborations can include special clogs, sandals, slides, and matching Jibbitz.
        </p>
        <p>
          For collectors and fans, limited-edition releases can be particularly interesting because they bring together the familiar Crocs silhouette with a completely different visual theme.
        </p>
        <p>
          If you're shopping for a collaboration, don't wait too long to check availability. Limited collections can move quickly, and a coupon code may not necessarily apply to every exclusive release.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Shop Crocs for Every Season
        </h3>
        <p>
          Crocs can fit into almost every part of the US shopping calendar.
        </p>
        <p>
          During spring and summer, shoppers often gravitate toward sandals, lightweight clogs, colorful styles, and vacation-ready footwear. Back-to-school season can be a good time to look for kids' footwear, everyday clogs, and customizable styles.
        </p>
        <p>
          As fall arrives, lined clogs, boots, and warmer footwear become more relevant. Holiday shopping also creates an opportunity to look for Crocs gifts, Jibbitz, special collaborations, and family footwear.
        </p>
        <p>
          Major shopping periods such as Labor Day, Halloween, Thanksgiving, Black Friday, Cyber Monday, Christmas, and New Year's can also bring special promotions across retail categories.
        </p>
        <p>
          Crocs maintains dedicated promotions and sale sections, so checking for current deals around these shopping events can be worthwhile.
        </p>
      </div>
    </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Crocs Promo Code for Gifts</h3>
              <p>Need a gift that doesn't feel completely predictable?</p>
              <p>Crocs can be surprisingly easy to gift because there are options for different ages, personalities, and styles.</p>
              <p>A classic pair of clogs works for someone who values everyday comfort. A pair of sandals can make sense for someone planning a vacation. Kids can personalize their footwear with character-themed Jibbitz, while fans of particular franchises may appreciate a collaboration.</p>
              <p>You can also build a gift around Jibbitz alone. Since the charms cover categories ranging from food and sports to characters and hobbies, you can choose something that actually matches the recipient's interests.</p>
              <p>Before buying several gifts, look for a Crocs promo code or current deal and see whether the promotion applies to your selections.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Use a Crocs Promo Code</h3>
              <p>Applying a Crocs promo code is simple.</p>
              <p>First, add the footwear or accessories you want to your shopping cart. When you're ready to check out, look for the “Promo or Coupon Code” field in the cart.</p>
              <p>Enter your code and select the apply option. Crocs states that the discount should appear in the cart once the coupon or promotional code has been successfully applied.</p>
              <p>Before completing your purchase, make sure the expected discount has actually been reflected in your order total.</p>
              <p>If the code doesn't work, check the expiration date, eligibility requirements, product exclusions, and any minimum purchase conditions. Also remember that some Crocs-issued codes may be restricted to Crocs.com and may not work in physical stores or other Crocs-owned websites.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Get Better Crocs Deals</h3>
              <p>Finding a good deal isn't always about locating the biggest-looking percentage.</p>
              <p>Start by checking the current Crocs sale section. A product that's already marked down may provide better value than an individual coupon, depending on the promotion.</p>
              <p>Next, check CouponsBit for a current promo code. Compare the available code with the sale price and read the terms before choosing one.</p>
              <p>It's also worth checking Crocs' app promotions. The brand currently promotes app-exclusive shopping events, including its recurring Appy Hour concept.</p>
              <p>If you're buying for several people, put everything you need into one planned shopping trip and compare the available offer against your full cart.</p>
              <p>And don't forget accessories. If you're already purchasing footwear, Jibbitz can turn a basic pair into a personalized gift or a completely different look.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Step Into a Better Crocs Deal</h3>
              <p>Whether you're loyal to the Classic Clog, searching for a new pair of sandals, experimenting with a platform style, shopping for your kids, or building a collection of Jibbitz, Crocs offers plenty of ways to make your footwear a little more fun.</p>
              <p>But before you click Buy, take a moment to check for a Crocs promo code on CouponsBit. Compare the available coupon with current sales and promotions, read the terms, and choose the offer that makes the most sense for your cart.</p>
              <p>Because when your shoes already come with personality, your shopping experience might as well come with savings too.</p>
            </div>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Crocs Promo Codes
          </h3>
          {[
            { q: "Does Crocs offer promo codes?", a: "Yes. Crocs offers promotional codes and other special offers from time to time. The availability and conditions of individual promotions can change, so check for a current offer before purchasing." },
            { q: "Where can I find a Crocs promo code?", a: "You can check CouponsBit for available Crocs promo codes and other promotional offers. Always review the terms of a code before applying it." },
            { q: "How do I use a Crocs promo code?", a: "Add your products to the cart, enter the code in the “Promo or Coupon Code” field, and apply it. Crocs says the discount should appear in the cart when the code is successfully applied." },
            { q: "Can I use a promo code on sale items?", a: "It depends on the individual promotion. Some codes may have product exclusions or may not be combinable with other promotions. Check the terms of the specific offer before checkout." },
            { q: "Does Crocs have sales?", a: "Yes. Crocs maintains dedicated sale and deals sections featuring discounted footwear and other products. The styles and promotions change regularly." },
            { q: "Does Crocs have deals on Jibbitz?", a: "Crocs regularly features promotions involving Jibbitz and other accessories. Current offers can change, so check the latest deals before purchasing." },
            { q: "What are Jibbitz?", a: "Jibbitz are customizable shoe charms designed to personalize compatible Crocs footwear. They are available in a wide variety of designs, including characters, sports, animals, food, hobbies, letters, numbers, and more." },
            { q: "Are Crocs good for everyday wear?", a: "Crocs are designed with everyday comfort in mind. The Classic Clog, for example, features lightweight construction, ventilation, a pivoting heel strap, water-friendly properties, and easy cleaning." },
            { q: "Does Crocs have an app?", a: "Yes. Crocs has an official shopping app, and the brand promotes app-exclusive deals and shopping events." },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        {/* Tag Cloud */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Crocs Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Crocs Promo Code",
              "Classic Clogs",
              "Jibbitz Charms",
              "Sandal Deals",
              "First Order Discount",
              "Free Shipping",
              "Sitewide Sale",
              "Kids' Crocs"
            ].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Crocs Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "50% OFF", sub: "Cutie Beach Bear Jibbitz | 50% OFF" },
              { heading: "UP TO 75%", sub: "Sitewide Sale | Up To 75% OFF" },
              { heading: "UNDER $19.99", sub: "Shoes, Sandals & Jibbitz | $19.99 Or Less" },
              { heading: "$99.99", sub: "Crocs Trailbreak 2 Tech" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  C
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                    {deal.heading}
                  </p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">
                    {deal.sub}
                  </p>
                </div>
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Shop Crocs: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90"
                >
                  Get Deal
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      </main>

      <Footer />
    </div>
  );
}
