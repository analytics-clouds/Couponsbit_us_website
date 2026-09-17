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
  ShoppingBag,
  Gem,
  Gift,
  Sparkles,
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
  { id: "d1", label: "NEW", heading: "New Arrivals Discount", sub: "Latest Deals" },
  { id: "d2", label: "DEAL", heading: "Charm Bracelet Deal", sub: "Featured Picks" },
  { id: "d3", label: "SALE", heading: "Percentage Off Sitewide", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Free Gift With Purchase", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Ring & Earring Sale", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Aporro", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp", dealText: "Up To 40% OFF", href: "/stores/aporro-discount-code" },
  { name: "Dore & Rose", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/dore-and-rose-logo_jsa9ki.webp", dealText: "Up To 30% OFF", href: "/stores/dore-and-rose-promo-code" },
  { name: "Blue Cypress", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/blue-cypress-logo_ax2m7c.webp", dealText: "Up To 35% OFF", href: "/stores/blue-cypress-discount-code" },
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Up To 20% OFF", href: "/stores/etsy-coupon-code" },
  { name: "Macy's", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp", dealText: "Up To 60% OFF", href: "/stores/macys-promo-code" },
  { name: "JCPenney", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/jcpenny-logo_kra7ur.webp", dealText: "Up To 50% OFF", href: "/stores/jcpenney-discount-code" },
];

const STORE_URL = "https://www.pandora.net";

export default function PandoraCouponsContent() {
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
              <span className="text-black font-extrabold">Pandora</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788951742/pandora-logo_gnbedt.webp" alt="Pandora" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Pandora Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.4</span>
                      <span className="text-gray-600 font-bold text-sm">(13.9k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified Pandora coupon codes and promo codes to save 50% on selected Marvel and Disney charms, enjoy an extra 15% OFF with the student discount, and get a FREE limited-edition tote bag with qualifying bracelet purchases in Sept 2026.
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
                    { icon: Tag, val: "9", label: "Offers" },
                    { icon: Percent, val: "400+", label: "Deals" },
                    { icon: Users, val: "2M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789642719/42_tg6ene.webp" alt="Pandora Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Pandora Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "50% OFF", title: "Pandora Coupon Code – Marvel Spider-Man Mask Charm | 50% OFF", desc: "Shop the Marvel Spider-Man Mask Charm in sterling silver for just $24.99, reduced from $50 — save 50% on this limited-time deal.", bullets: ["Add this Spider-Man-inspired charm to your Pandora bracelet or Marvel collection for a fun and collectible touch.", "Grab this Final Sale offer at 50% OFF and get the charm for just $24.99 while stocks last."] },
                  { label: "SALE", value: "50% OFF", title: "Pandora Coupon Code – Marvel Spider-Man Mask Charm | 50% OFF", desc: "Shop the Marvel Spider-Man Mask Charm in sterling silver for just $24.99, reduced from $50 — save 50% on this limited-time deal.", bullets: ["Add this Spider-Man-inspired charm to your Pandora bracelet or Marvel collection for a fun and collectible touch.", "Grab this Final Sale offer at 50% OFF and get the charm for just $24.99 while stocks last."] },
                  { label: "SALE", value: "50% OFF", title: "Pandora Coupon Code – Disney Mickey & Minnie Halloween Charm | 50% OFF", desc: "Save 50% on the Disney Mickey Mouse & Minnie Mouse Halloween Pumpkin Charm, now available for $53.99 instead of $108.", bullets: ["Crafted from sterling silver with 14k rose gold plating, this seasonal charm is a perfect pick for Disney fans and festive jewellery collections.", "Take advantage of the Final Sale offer and save $54.01 on this limited-edition Disney-inspired charm while available."] },
                  { label: "SALE", value: "30% OFF", title: "Pandora Coupon Code – Halo Heart Trilogy Ring | 30% OFF", desc: "Get the Halo Heart Trilogy Ring for just $84, reduced from $120 — save 30% on this elegant jewellery pick.", bullets: ["Crafted in sterling silver, the heart-inspired design makes a beautiful choice for everyday wear, special occasions, or thoughtful gifting.", "Enjoy 30% OFF on this stylish ring and save $36 compared with the regular $120 price."] },
                  { label: "DEAL", value: "$28", title: "Pandora Coupon Code – Pink Murano Glass Mini Charm | Free Limited Edition Tote", desc: "Add the Pink Murano Glass Mini Charm to your collection for just $28 and give your Pandora bracelet a delicate pop of colour.", bullets: ["Made with sterling silver and beautiful Murano glass detailing, this mini charm is a stylish choice for everyday jewellery lovers.", "Get a FREE Limited-Edition Tote Bag with any qualifying full-price bracelet purchase and enjoy this special Pandora offer."] },
                  { label: "STUDENT", value: "15% OFF", title: "Pandora Student Savings – Extra 15% OFF Your Order", desc: "Students can enjoy an exclusive 15% OFF on eligible Pandora purchases with this special student savings offer.", bullets: ["Shop Pandora charms, bracelets, rings, and jewellery while making the most of student-exclusive savings.", "Save an extra 15% on your eligible Pandora purchase with the student offer, subject to applicable eligibility terms."] },
                  { label: "FROM", value: "$37.99", title: "Pandora Bracelets – Stylish Designs Starting From $37.99", desc: "Discover stylish Pandora bracelets starting from just $37.99 and find an option to match your personal style.", bullets: ["Choose from charm bracelets, bangles, chain bracelets, lab-created diamond bracelets, leather bracelets, link bracelets, sliding bracelets, and more.", "Get a FREE Limited-Edition Tote Bag with any full-price bracelet purchase as part of the special bracelet offer."] },
                  { label: "FROM", value: "$55", title: "Pandora Protective Hamsa Hand Dangle Charm – Starting From $55", desc: "Get the Protective Hamsa Hand Dangle Charm starting from just $55 and add a meaningful piece to your jewellery collection.", bullets: ["Designed with sterling silver and 14k rose gold-plated detailing, this distinctive charm features elegant beading around its outline.", "Shop this stylish charm from $55 and pair it with your favourite Pandora bracelet for a personalised jewellery look."] },
                  { label: "DEAL", value: "FREE TOTE", title: "Pandora Bracelets – Free Limited-Edition Tote Bag", desc: "Get a FREE Limited-Edition Tote Bag with any full-price bracelet purchase.", bullets: ["Explore Pandora’s stylish bracelet collection and choose a design that suits your everyday look or gifting needs.", "Enjoy Free Standard Shipping on orders of $75 or more On Pandora Shop Now ."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Pandora: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Pandora?
</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Pandora is a Danish jewelry brand known for its customizable jewelry, particularly its charm bracelets and charms. Founded in Copenhagen in 1982, the brand has grown into an internationally recognized jewelry company with collections designed for personal expression and gifting.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Pandora's jewelry is centered around the idea of creating pieces that reflect individual stories, relationships, interests, and milestones. Its charms allow shoppers to build personalized collections, while the wider range includes bracelets, rings, necklaces, earrings, and other jewelry pieces.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand offers jewelry for a variety of occasions, whether you're celebrating a birthday, anniversary, graduation, holiday, friendship, relationship, or simply looking for something special for yourself.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Pandora's collections also make it easy to combine different pieces. A bracelet can become more personal over time as new charms are added to represent important moments, places, people, hobbies, or memories.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    With online shopping available for US customers, Pandora makes it convenient to browse collections, compare designs, and shop for gifts from home.

                  </p>
                  
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Gem, name: "Charm Bracelets", count: "150+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Sparkles, name: "Rings & Earrings", count: "180+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Gift, name: "Gift Sets", count: "60+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: ShoppingBag, name: "Necklaces", count: "90+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Search, name: "New Collections", count: "40+", color: "text-orange-500", href: "/categories/fashion" },
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
    How to Find Better Pandora Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Shopping",
        sub: "Before placing your order, check CouponsBit for the latest Pandora promo code, coupon codes, discount offers, vouchers, and sale promotions.",
      },
      {
        icon: HeartHandshake,
        title: "Shop During Major Gifting Seasons",
        sub: "Valentine's Day, Mother's Day, graduation season, Black Friday, Cyber Monday, and Christmas can be useful periods to check for jewelry promotions.",
      },
      {
        icon: Sparkles,
        title: "Look Beyond One Product",
        sub: "If you're buying a gift, compare several jewelry categories before deciding. A charm, bracelet, necklace, or earrings may provide different options depending on your budget and the recipient's style.",
      },
      {
        icon: Gift,
        title: "Consider Personalized Gifts",
        sub: "If you're shopping for someone special, a meaningful charm can make a gift feel more personal than a generic accessory.",
      },
      {
        icon: ShieldAlert,
        title: "Check Promotion Restrictions",
        sub: "A promotion may only apply to selected products or require specific conditions. Always read the terms before purchasing.",
      },
      {
        icon: Calendar,
        title: "Plan Holiday Shopping Early",
        sub: "Popular gifting periods can become busy, so shopping early gives you more time to find the right piece and compare available offers.",
      },
      {
        icon: Receipt,
        title: "Review the Final Order",
        sub: "Before completing your purchase, make sure any eligible promotion has been applied and review your complete order details.",
      },
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start">
        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
          <item.icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-black font-black text-sm leading-tight mb-2">
            {item.title}
          </p>
          <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
            {item.sub}
          </p>
        </div>
      </div>
    ))}
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
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Pandora Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border border-gray-200 bg-white shadow-sm">
  <table className="w-full min-w-[850px] border-collapse text-left" aria-label="Pandora Coupon Codes and Offers Summary">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Offer</th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Discount / Price</th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Eligibility</th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Key Conditions</th>
        <th className="p-5 text-[15px] font-black uppercase tracking-wider text-white">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[14px] font-bold text-gray-600">
      
  
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Pandora Coupon Code – Marvel Spider-Man Mask Charm | 50% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          50% OFF ($24.99)
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Final Sale deal reduced from $50; sterling silver charm available while stocks last
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Marvel Spider-Man Mask Charm
        </td>
      </tr>

   
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Pandora Coupon Code – Disney Mickey & Minnie Halloween Charm | 50% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          50% OFF ($53.99)
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Final Sale offer reduced from $108; sterling silver with 14k rose gold plating
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Disney Mickey & Minnie Pumpkin Charm
        </td>
      </tr>

    
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Pandora Coupon Code – Halo Heart Trilogy Ring | 30% OFF
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          30% OFF ($84)
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Save $36 off regular $120 price; sterling silver heart-inspired design
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Halo Heart Trilogy Ring
        </td>
      </tr>


      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Pandora Coupon Code – Pink Murano Glass Mini Charm | Free Limited Edition Tote
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          From $28 + Free Gift
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Get a free limited-edition tote bag with any qualifying full-price bracelet purchase
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Pink Murano Glass Mini Charm
        </td>
      </tr>

   
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Pandora Student Savings – Extra 15% OFF Your Order
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Extra 15% OFF
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          Verified Students
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Requires student verification; valid on eligible full-priced and promotional items
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Eligible Pandora Orders
        </td>
      </tr>


      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Pandora Bracelets – Stylish Designs Starting From $37.99
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          From $37.99
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Includes free limited-edition tote bag with full-price bracelet purchases
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Pandora Bracelets Collection
        </td>
      </tr>

    
      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Pandora Protective Hamsa Hand Dangle Charm – Starting From $55
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          From $55
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Features sterling silver and 14k rose gold-plated detailing with outline beading
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Protective Hamsa Hand Charm
        </td>
      </tr>


      <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50 last:border-b-0">
        <td className="max-w-[220px] p-5 align-middle font-black text-black">
          Pandora Bracelets – Free Limited-Edition Tote Bag
        </td>
        <td className="p-5 align-middle font-black text-[#056BFA] whitespace-nowrap">
          Free Gift + Free Shipping
        </td>
        <td className="p-5 align-middle text-gray-500 whitespace-nowrap">
          All Users
        </td>
        <td className="max-w-[220px] p-5 align-middle font-medium text-gray-500">
          Free tote with full-price bracelet purchase; free standard shipping on orders $75+
        </td>
        <td className="max-w-[180px] p-5 align-middle text-gray-500">
          Full-Price Bracelet Purchases
        </td>
      </tr>

    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            A meaningful piece of jewelry can turn an ordinary moment into something worth remembering. Whether you're looking for a charm to mark a special memory, a bracelet to build your own collection, or a thoughtful gift for someone you love, Pandora offers jewelry designed around personal expression and memorable occasions.
          </p>
          <p>
            If you're planning to shop for your next piece, checking for a Pandora promo code before placing your order can be a smart way to look for savings. CouponsBit helps shoppers discover Pandora coupon codes, discount offers, vouchers, sale promotions, gift deals, and other ways to potentially save on their jewelry purchases.
          </p>
          <p>
            From everyday accessories to birthday gifts and holiday presents, there are plenty of reasons to shop Pandora. And with promotions changing throughout the year, checking for an available offer before checkout can help you make the most of your shopping budget.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Find a Pandora Promo Code</h3>
    <p>A Pandora promo code can help you look for savings on eligible purchases when a promotion is available.</p>
    <p>Before completing your order, check CouponsBit to see whether there is a current Pandora promotional offer that matches what you're shopping for.</p>
    <p>Promotions can have specific conditions. Some may apply to selected products or collections, while others may be connected to a particular shopping event or customer eligibility.</p>
    <p>Always review the terms of the offer, including its expiration date and product restrictions, before expecting a discount at checkout.</p>
    <p>If one promotional code isn't suitable for your purchase, compare it with other available Pandora deals and offers.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Pandora Coupon Code and Discount Offers</h3>
    <p>A Pandora coupon code is one option shoppers can look for when they're trying to reduce the cost of a jewelry purchase. However, savings can come in several different forms.</p>
    <p>Pandora may feature promotions involving selected jewelry, seasonal collections, gifts, limited-time events, or other qualifying purchases.</p>
    <p>The right offer depends on what you're buying. A discount on selected charms could be useful if you're expanding an existing collection, while a broader promotion may be more helpful when you're purchasing a bracelet, necklace, ring, or multiple gifts.</p>
    <p>When comparing offers, don't focus only on the advertised discount. Check the products included in the promotion and make sure the offer works with the pieces you actually want.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Explore Pandora Jewelry</h3>
    <p>Pandora offers jewelry across several categories, giving shoppers plenty of options for personal collections and gifts.</p>
    <p><strong>Charms:</strong> Charms are one of Pandora's signature categories and allow shoppers to personalize bracelets and other compatible jewelry.</p>
    <p>You can choose charms based on hobbies, interests, symbols, animals, celebrations, relationships, travel memories, and other meaningful themes.</p>
    <p>Building a charm collection over time can make the jewelry increasingly personal.</p>
    <p><strong>Charm Bracelets:</strong> Pandora's charm bracelets provide a foundation for creating a customized jewelry collection.</p>
    <p>You can select a bracelet style and gradually add charms that represent different memories and milestones.</p>
    <p>This also makes a charm bracelet a gift that can evolve over time.</p>
    <p><strong>Rings:</strong> Pandora offers rings in a variety of designs, from understated everyday pieces to styles intended for special occasions.</p>
    <p>Rings can be worn individually or combined with other pieces for a layered jewelry look.</p>
    <p><strong>Necklaces and Pendants:</strong> Necklaces and pendants offer another way to incorporate Pandora's designs into an everyday jewelry collection.</p>
    <p>Depending on the collection, shoppers can find minimalist styles as well as pieces featuring symbolic or decorative details.</p>
    <p><strong>Earrings:</strong> From simple everyday earrings to more decorative designs, Pandora offers different styles for various outfits and occasions.</p>
    <p>Earrings can also make practical gifts when you're looking for something that doesn't require knowing someone's exact ring or bracelet size.</p>
    <p><strong>Bracelets:</strong> Beyond charm bracelets, Pandora offers other bracelet designs that can work as standalone accessories.</p>
    <p>Different materials, finishes, and styles allow shoppers to choose something that suits their personal taste.</p>
    <p><strong>Gift Sets:</strong> Gift sets can make shopping easier when you're buying for a birthday, anniversary, holiday, or another special occasion.</p>
    <p>They can also provide a coordinated way to give multiple pieces together.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Pandora Gifts for Every Occasion</h3>
    <p>Jewelry can carry emotional meaning, which makes Pandora a popular choice for gifting.</p>
    <p><strong>Birthday Gifts:</strong> A Pandora charm, bracelet, necklace, ring, or pair of earrings can make a thoughtful birthday present.</p>
    <p>If you know the recipient's interests, choosing a charm around a favorite hobby, symbol, or memory can make the gift feel more personal.</p>
    <p><strong>Anniversary Gifts:</strong> Anniversaries are all about celebrating shared memories, making personalized jewelry particularly suitable for the occasion.</p>
    <p>A charm representing an important moment in a relationship can add sentimental value to the gift.</p>
    <p><strong>Valentine's Day:</strong> Valentine's Day is a major gifting occasion for jewelry.</p>
    <p>Pandora offers a range of romantic and symbolic designs that can be chosen for partners, spouses, or anyone special in your life.</p>
    <p>Check CouponsBit for a Pandora discount code before making your Valentine's purchase.</p>
    <p><strong>Mother's Day:</strong> Pandora jewelry can also make a thoughtful Mother's Day gift.</p>
    <p>Personalized charms can represent family relationships, important memories, or qualities that make the recipient special.</p>
    <p><strong>Graduation:</strong> Graduation marks a major milestone, and jewelry can serve as a lasting reminder of the achievement.</p>
    <p>A bracelet, charm, necklace, or other piece can become a keepsake for the next chapter.</p>
    <p><strong>Christmas:</strong> The holiday season is one of the biggest jewelry-shopping periods of the year.</p>
    <p>From stocking-stuffer-sized charms to larger jewelry gifts, Pandora offers options across different gifting occasions.</p>
    <p><strong>Just Because:</strong> You don't need a holiday to give someone jewelry.</p>
    <p>A small charm or piece of jewelry can be a simple way to celebrate a friendship, relationship, personal achievement, or meaningful moment.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Pandora Sale and Seasonal Promotions</h3>
    <p>Pandora promotions can change throughout the year, with certain periods often attracting more attention from shoppers.</p>
    <p><strong>Valentine's Day Sales:</strong> Romantic jewelry becomes especially popular in February. Shoppers can look for Pandora offers when preparing Valentine's Day gifts.</p>
    <p><strong>Mother's Day Promotions:</strong> Spring is another important gifting period, with jewelry often appearing among popular Mother's Day gift choices.</p>
    <p><strong>Graduation Season:</strong> As graduation season approaches, shoppers may look for jewelry that can commemorate academic achievements and new beginnings.</p>
    <p><strong>Summer Sales:</strong> Summer promotions can provide opportunities to shop for everyday jewelry, gifts, or pieces for vacations and special events.</p>
    <p><strong>Back-to-School Season:</strong> While jewelry isn't traditionally considered a back-to-school essential, college students and young adults may shop for new accessories as they prepare for a new academic year.</p>
    <p><strong>Halloween:</strong> Pandora occasionally features seasonal designs and collections that can appeal to shoppers looking for themed or playful jewelry.</p>
    <p><strong>Thanksgiving:</strong> Thanksgiving marks the beginning of the major US holiday shopping period. If you're preparing for holiday gifting, it can be a useful time to check for available promotions.</p>
    <p><strong>Black Friday:</strong> Black Friday is one of the biggest shopping events in the US and is worth watching if you're planning to purchase jewelry or gifts.</p>
    <p>Before placing an order, check CouponsBit for a Pandora coupon code, discount offer, or other promotion.</p>
    <p><strong>Cyber Monday:</strong> Cyber Monday provides another opportunity to check online retailers for holiday shopping offers.</p>
    <p>If you prefer buying gifts online, compare available Pandora promotions before completing your purchase.</p>
    <p><strong>Christmas and Holiday Shopping:</strong> Pandora jewelry can make a memorable holiday gift, especially when you choose a piece connected to the recipient's personality or interests.</p>
    <p>Planning your shopping early can also give you more time to compare designs and available promotions.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Pandora Jewelry for Personal Collections</h3>
    <p>Pandora isn't only about gifting. The brand's customizable approach also makes it popular with shoppers building their own jewelry collections.</p>
    <p>You might start with a simple bracelet and add charms after important experiences or milestones.</p>
    <p>A charm could represent a favorite destination, a beloved pet, a personal interest, a relationship, or an achievement.</p>
    <p>Over time, the collection becomes more than just jewelry. Each piece can represent a story.</p>
    <p>If you're adding multiple pieces to your collection, check whether a Pandora voucher or promotional offer is available before placing your order.</p>
  </div>
</div>

          {/* Box Section: How to Use */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">
              How to Use a Pandora Promo Code
            </h3>
            <p className="text-gray-600 font-medium -mt-4 mb-4">
              If you find a Pandora promo code through CouponsBit, follow the instructions provided with the specific promotion. A typical process may include:
            </p>
            <div className="space-y-6">
              {[
                "Find the Pandora offer you want to use.",
                "Visit the Pandora website.",
                "Browse the jewelry collections and select your items.",
                "Add eligible products to your shopping bag.",
                "Proceed to checkout.",
                "Enter the applicable promo code in the designated field.",
                "Apply the code.",
                "Confirm that the promotion has been reflected in your order.",
                "Review the complete checkout details.",
                "Complete your purchase."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium italic mt-4 pt-4 border-t border-gray-100">
              If the code doesn't work, check its expiration date and eligibility requirements. Certain offers may only apply to selected products, collections, customers, or promotional periods.
            </p>
          </div>

          {/* Section: Why Use */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Why Use CouponsBit for Pandora Offers?
            </h3>
            <p>
              Jewelry is often purchased for meaningful occasions, and even a small saving can make your shopping budget go further.
            </p>
            <p>
              CouponsBit gives shoppers a convenient place to check for a Pandora promo code before making a purchase. You can also find Pandora coupon codes, discount offers, vouchers, sale promotions, and other potential savings.
            </p>
            <p>
              Instead of searching through multiple sources, you can start by checking the available offers on CouponsBit and then compare them with the jewelry you're planning to buy.
            </p>
            <p>
              Whether you're shopping for yourself or looking for a birthday, anniversary, Valentine's Day, Mother's Day, graduation, or holiday gift, checking for an offer before checkout can be worthwhile.
            </p>
          </div>

          {/* Section: Find Your Next Pandora Deal */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">
              Find Your Next Pandora Deal
            </h3>
            <p>
              Whether you're adding a new charm to a collection, treating yourself to a new accessory, or searching for a meaningful gift, Pandora offers jewelry that can be connected to personal stories and special occasions.
            </p>
            <p>
              With promotions changing throughout the year, checking for savings before you shop can be a simple way to make your jewelry budget go further.
            </p>
            <p>
              Before checking out, visit CouponsBit to look for the latest Pandora promo code, along with coupon codes, discount offers, vouchers, sale promotions, and other available deals. Compare the offers with your purchase, check the terms, and choose the option that works best for you.
            </p>
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
            Frequently Asked Questions About Pandora Promo Codes
          </h3>
          {[
            { q: "Does Pandora offer promo codes?", a: "Yes. Pandora may offer promotional codes, discounts, seasonal promotions, and other savings opportunities. Availability and eligibility can vary." },
            { q: "Where can I find a Pandora promo code?", a: "You can check CouponsBit for available Pandora promo codes, coupon codes, discount offers, vouchers, and sale promotions before shopping." },
            { q: "How do I use a Pandora coupon code?", a: "Add eligible jewelry to your shopping bag, proceed to checkout, and enter the applicable coupon code in the promotional-code field. Confirm that the offer has been applied before completing your purchase." },
            { q: "Why isn't my Pandora promo code working?", a: "The promotion may have expired, or your order may not meet its requirements. Some offers can be limited to selected products, collections, customers, or promotional periods." },
            { q: "Can I use a Pandora discount code on every product?", a: "Not necessarily. Promotional codes may have product exclusions or other restrictions. Check the terms of the individual offer before using it." },
            { q: "What is Pandora best known for?", a: "Pandora is particularly known for its customizable charm jewelry, including charm bracelets and individual charms that can represent personal memories, interests, and milestones." },
            { q: "Does Pandora sell jewelry besides charms?", a: "Yes. Pandora offers a range of jewelry including bracelets, rings, necklaces, pendants, earrings, and other accessories." },
            { q: "Is Pandora jewelry suitable for gifts?", a: "Yes. Pandora offers jewelry across a variety of styles and occasions, making it a popular choice for birthdays, anniversaries, Valentine's Day, Mother's Day, graduations, holidays, and other celebrations." },
            { q: "Does Pandora have Black Friday deals?", a: "Pandora may run promotions around Black Friday and other major shopping periods. Check current offers to see what is available and whether specific products qualify." },
            { q: "Does Pandora have Cyber Monday offers?", a: "Online promotions may be available around Cyber Monday, although offers and eligibility can change from year to year." },
            { q: "When is the best time to look for Pandora deals?", a: "Promotions can appear throughout the year. Major gifting occasions and shopping periods such as Valentine's Day, Mother's Day, Black Friday, Cyber Monday, and Christmas can be useful times to check." },
            { q: "How can I save money when shopping at Pandora?", a: "Start by checking CouponsBit for a Pandora promo code, then compare available discounts, sale promotions, vouchers, and other offers. Make sure you review the terms and confirm the promotion has been applied before completing your purchase." }
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
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
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
            Popular Pandora Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Pandora Promo Code",
              "Charm Bracelets",
              "Silver Charms",
              "Pandora Rings",
              "First Order Discount",
              "Mother's Day Sale",
              "Birthstone Jewelry",
              "Free Shipping"
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
            Today's Top Pandora Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "50% OFF", sub: "Marvel Spider-Man Mask Charm | 50% OFF" },
              { heading: "50% OFF", sub: "Disney Mickey & Minnie Halloween Charm | 50% OFF" },
              { heading: "30% OFF", sub: "Halo Heart Trilogy Ring | 30% OFF" },
              { heading: "STUDENT", sub: "Extra 15% OFF Your Order" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  P
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
                  href="https://www.pandora.net/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Shop Pandora: ${deal.heading}`} 
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
