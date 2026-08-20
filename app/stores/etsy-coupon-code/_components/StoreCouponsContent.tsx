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
  ExternalLink,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Palette,
  Ticket, 
  Store, 
  GitCompare,  
  CalendarDays, 
  Truck, 
  FileDown,
  Gem,
  Home,
  Gift,
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
  { id: "d1", label: "FLAT", heading: "Custom Neon Signs | FLAT 75% OFF", sub: "Etsy Coupon Code" },
  { id: "d2", label: "SAVE", heading: "Custom Keepsake Gifts | 70% OFF", sub: "Etsy Coupon Code" },
  { id: "d3", label: "UP TO", heading: "New Arrivals | UP TO 65% OFF", sub: "Etsy Deal" },
  { id: "d4", label: "UP TO", heading: "Jewelry Designs | UP TO 70% OFF", sub: "Etsy Deal" },
  { id: "d5", label: "SAVE", heading: "Willow Vine Fairy Lights | 25% OFF", sub: "Etsy Deal" },
  { id: "d6", label: "UP TO", heading: "Sitewide Sale | UP TO 40% OFF", sub: "Etsy Deal" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Wish.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/wish-logo_n1dypa.webp", dealText: "Up To 60% OFF", href: "/stores/wish-discount-code" },
  { name: "Chewy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp", dealText: "Up To 50% OFF", href: "/stores/chewy-promo-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Verified Deals", href: "/stores/target-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "DoorDash", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp", dealText: "Up To 30% OFF", href: "/stores/doordash-promo-code" },
];

const STORE_URL = "https://www.etsy.com/";

export default function EtsyCouponsContent() {
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
              <span className="text-black font-extrabold">Etsy</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp" alt="Etsy" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Etsy</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(68.3k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find Etsy coupon codes, promo codes, and deals for Aug 2026. Save up to 75% on custom neon signs, 70% on keepsake gifts and jewelry, 65% on new arrivals, 50% on personalized ornaments, and up to 40% on selected purchases.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "8", label: "Offers" },
                    { icon: Percent, val: "3.6k", label: "Deals" },
                    { icon: Users, val: "16M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp" alt="Etsy Coupon Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
          <h2 className="text-2xl font-black text-black leading-tight">Etsy Coupon Codes & Offers</h2>
        </div>

        {[
          { label: "FLAT", value: "75% OFF", title: "Etsy Coupon Code – Custom Neon Signs | FLAT 75% OFF ✨", desc: "Save FLAT 75% OFF on selected custom neon signs available to Etsy shoppers in the USA.", bullets: ["Find personalized signs for bedrooms, home offices, weddings, parties and businesses.", "Check for an Etsy coupon code to potentially save even more on eligible purchases.", "Shop unique designs created by independent Etsy sellers across the USA.", "Offer availability, shipping and pricing may vary by seller."] },
          { label: "SAVE", value: "70% OFF", title: "Etsy Coupon Code – Custom Keepsake Gifts | 70% OFF 🎁", desc: "Get selected Custom Keepsake Gifts for $12, reduced from $40, and SAVE 70%.", bullets: ["Discover personalized gifts for birthdays, weddings, anniversaries, housewarmings and holidays.", "Use an Etsy coupon code when available for additional savings.", "Shop unique handmade gifts from Etsy sellers serving customers across the USA.", "Check seller shipping times before ordering for your special occasion."] },
          { label: "UP TO", value: "65% OFF", title: "Etsy – New Arrivals | UP TO 65% OFF 🛍️", desc: "Discover Etsy's newest products with UP TO 65% OFF selected items.", bullets: ["Selected products start from $69, compared with original prices of $197.14+.", "Explore handmade, personalized and creative products from independent sellers.", "Find unique gifts and home, fashion, jewelry and lifestyle products for USA shoppers.", "Prices, shipping and discounts vary by individual seller."] },
          { label: "UP TO", value: "70% OFF", title: "Etsy – Jewelry Designs | UP TO 70% OFF 💎", desc: "Save UP TO 70% OFF on selected jewelry designs.", bullets: ["Find unique rings, necklaces, bracelets and handmade jewelry starting from $5.50.", "Selected products may include free shipping within the USA.", "Discover personalized jewelry and statement pieces from independent Etsy sellers.", "Check individual product terms for shipping, customization and availability."] },
          { label: "SAVE", value: "25% OFF", title: "Etsy – Willow Vine Fairy Lights | 25% OFF ✨", desc: "Get Willow Vine Lights for $31.87+, reduced from $42.50+, and SAVE 25%.", bullets: ["Create a warm, cozy atmosphere in bedrooms, living rooms, dorms and home offices.", "Bendable branch-style fairy lights make a stylish USA home decor accent.", "Great for apartment decor, parties, weddings and gifting.", "Sale ends in 3 days, so shop before the promotional price expires."] },
          { label: "SAVE", value: "50% OFF", title: "Etsy – Custom Watercolor House Ornament | 50% OFF 🏠", desc: "Get the Custom Watercolor House Ornament for $13.49, down from $26.99, and SAVE 50%.", bullets: ["Personalize this keepsake with a favorite home for a meaningful gift.", "Perfect for Christmas, housewarming, new homeowners and family gifting in the USA.", "A thoughtful personalized decoration created by an Etsy seller.", "Check estimated delivery dates before ordering for holiday gifting."] },
          { label: "UP TO", value: "40% OFF", title: "Etsy – Sitewide Sale | UP TO 40% OFF 🛒", desc: "Enjoy UP TO 40% OFF eligible Etsy purchases across selected categories.", bullets: ["Shop deals on templates, statement rings, prints, women's decor and more.", "No promo code is required for qualifying discounted products.", "Discover unique handmade and personalized products from sellers across the USA.", "Discounts, shipping costs and eligibility may vary by individual seller."] },
          { label: "UP TO", value: "20% OFF", title: "Etsy – Rings Sale | UP TO 20% OFF 💍", desc: "Save UP TO 20% OFF on selected rings available to USA shoppers.", bullets: ["Discover statement rings, personalized designs and handmade jewelry.", "Find unique styles for engagements, anniversaries, everyday wear and gifting.", "The offer applies to eligible ring products from participating Etsy sellers.", "Shop before the promotional pricing expires."] },
        ].map((c, i) => (
          <div key={i} className="w-full max-w-7xl mx-auto mb-6">
            <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="flex flex-row">
                <div className="relative w-[110px] sm:w-[175px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                  <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                  <div className="text-center px-1">
                    <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-[13px] font-extrabold leading-3">{c.label}</p>
                    <div className="text-[15px] sm:text-2xl font-black leading-tight sm:leading-none mt-2.5">{c.value}</div>
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Etsy: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="lg:w-[35%] space-y-8">
        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
          <h3 className="text-black font-black text-lg mb-6">What Is an Etsy Discount Code?
</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            An Etsy discount code is a promotional code that can provide a discount on eligible purchases.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Because Etsy is a marketplace made up of independent sellers, not every coupon applies across the entire website. A code may be created by an individual seller and only work on products from that particular shop.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Other promotions can be offered directly by Etsy and may have their own eligibility requirements.

          </p>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Always check the conditions attached to a coupon before placing your order.

          </p>

          <h3 className="text-black font-black text-lg mb-6">What Is an Etsy Coupon Code?

</h3>
          <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            An Etsy coupon code is a promotional code that can be entered during checkout to receive a qualifying discount.

          </p>
           <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            Etsy coupons can work differently from traditional retailer coupons because individual sellers can create their own promotions.

          </p>
           <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
            For example, a seller may offer a percentage discount when you spend a certain amount, while another shop may provide a discount on selected products.

          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
            Visit Store <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
           <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
           <div className="space-y-1">
             {[
               { icon: Palette, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
               { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
               { icon: Gem, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
               { icon: Home, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
               { icon: Search, name: "Travel", count: "420+", color: "text-teal-500", href: "/categories/travel" },
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

        <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm max-w-md mx-auto">
  <h3 className="text-black font-black text-lg mb-8">
    How to Save More on Etsy
  </h3>

  <div className="space-y-8">
    {[
      {
        icon: Ticket,
        title: "Check CouponsBit Before Shopping",
        sub: "Before placing an Etsy order, check CouponsBit for an available Etsy discount code or current promotional offer."
      },
      {
        icon: Store,
        title: "Look at the Seller's Current Promotions",
        sub: "Since Etsy shops can run their own sales, check the individual seller's shop page and product listing for additional offers."
      },
      {
        icon: GitCompare,
        title: "Compare Similar Listings",
        sub: "Etsy often has multiple sellers offering similar products. Comparing price, shipping, customization, reviews, and delivery estimates can help you determine the best overall value."
      },
      {
        icon: ShoppingBag,
        title: "Buy From the Same Shop",
        sub: "If you're purchasing several items, check whether one seller offers a discount for reaching a minimum order value."
      },
      {
        icon: CalendarDays,
        title: "Watch Seasonal Events",
        sub: "Major shopping periods such as Black Friday, Cyber Monday, Valentine's Day, Mother's Day, and Christmas can be useful times to look for promotions."
      },
      {
        icon: Truck,
        title: "Check Shipping Costs",
        sub: "A product with a lower sticker price isn't necessarily the cheapest option if shipping costs are significantly higher."
      },
      {
        icon: FileDown,
        title: "Consider Digital Products",
        sub: "For items such as invitations, planners, templates, and artwork, digital downloads can eliminate physical shipping costs."
      }
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start text-justify">
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
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Etsy Discount Code, Coupon Code & Sale
        </h2>

        {/* Collapsible Content Area */}
        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          
          {/* Intro Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa]">Find an Etsy Discount Code and Save on Your Next Order</h3>
            <p>
              Looking for an Etsy discount code before buying something special? From personalized gifts and handmade jewelry to home décor, wedding essentials, clothing, craft supplies, and vintage finds, Etsy gives shoppers access to products from independent sellers around the world.
            </p>
            <p>
              Before placing an order, checking for an Etsy coupon code can help you find available seller promotions, Etsy-wide offers, or other ways to save. It is also worth comparing coupon offers with the latest Etsy sale, discounted listings, and seasonal shopping events.
            </p>
            <p>
              At CouponsBit, you can check available Etsy coupons, discount codes, promo codes, deals, and promotions before completing your purchase.
            </p>
          </div>

          {/* Why Shop at Etsy? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Shop at Etsy?</h3>
            <p>
              Etsy is an online marketplace built around independent sellers and distinctive products. Unlike conventional retailers that mainly sell standardized inventory, Etsy brings together individual shops offering handmade, personalized, vintage, and creative products.
            </p>
            <p>You can shop for:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Handmade jewelry</li>
              <li>Personalized gifts</li>
              <li>Clothing</li>
              <li>Shoes and accessories</li>
              <li>Home décor</li>
              <li>Furniture</li>
              <li>Wedding products</li>
              <li>Party supplies</li>
              <li>Art and prints</li>
              <li>Craft supplies</li>
              <li>Sewing and fabric</li>
              <li>Knitting and crochet supplies</li>
              <li>Vintage products</li>
              <li>Toys and games</li>
              <li>Pet products</li>
              <li>Beauty and self-care items</li>
              <li>Digital downloads</li>
              <li>Holiday décor</li>
            </ul>
            <p>
              Because products are sold by individual shops, prices, shipping policies, processing times, and available discounts can differ from one listing to another.
            </p>
          </div>

          {/* Etsy Jewelry */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Jewelry</h3>
            <p>
              Jewelry is one of Etsy's most popular shopping categories, with products ranging from everyday pieces to personalized and occasion-specific designs.
            </p>
            <p><strong>Necklaces:</strong> Shoppers can find minimalist necklaces, name necklaces, birthstone designs, pendants, engraved pieces, and statement styles.</p>
            <p><strong>Earrings:</strong> Etsy offers studs, hoops, drop earrings, handmade designs, gemstone earrings, and personalized options.</p>
            <p><strong>Bracelets:</strong> Bracelets include charm designs, friendship bracelets, engraved pieces, gemstone styles, and custom creations.</p>
            <p><strong>Rings:</strong> You can browse engagement rings, wedding bands, stacking rings, personalized rings, birthstone pieces, and fashion jewelry.</p>
            <p><strong>Personalized Jewelry:</strong> Custom jewelry is particularly popular on Etsy. Many sellers offer names, initials, dates, coordinates, handwriting, birthstones, and other personalization options.</p>
          </div>

          <div className="space-y-6">
  {/* Etsy Personalized Gifts */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Personalized Gifts</h3>
    <p>
      One of Etsy's biggest advantages is the ability to order products customized for a particular person or occasion.
    </p>
    <p>Popular personalized products include:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Name signs</li>
      <li>Engraved gifts</li>
      <li>Custom mugs</li>
      <li>Personalized blankets</li>
      <li>Photo gifts</li>
      <li>Custom jewelry</li>
      <li>Personalized clothing</li>
      <li>Family gifts</li>
      <li>Wedding gifts</li>
      <li>Anniversary gifts</li>
      <li>Birthday presents</li>
      <li>Personalized home décor</li>
    </ul>
    <p>
      If you're shopping for someone who is difficult to buy for, personalized Etsy products can provide alternatives to conventional gifts.
    </p>
  </div>

  {/* Etsy Home Décor */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Home Décor</h3>
    <p>
      Etsy has a large selection of decorative and functional products for different rooms and interior styles.
    </p>
    <p><strong>Wall Art:</strong> You can find art prints, paintings, photography, posters, gallery wall sets, and downloadable artwork.</p>
    <p><strong>Home Accessories:</strong> Decorative products include candles, vases, trays, mirrors, decorative objects, signs, and other accents.</p>
    <p><strong>Pillows and Textiles:</strong> Shoppers can find decorative cushions, blankets, throws, rugs, curtains, and other textiles.</p>
    <p><strong>Furniture:</strong> Independent sellers offer handmade and custom furniture, including tables, shelves, benches, cabinets, and other pieces.</p>
    <p><strong>Lighting:</strong> Etsy also features handmade and distinctive lighting products, including lamps, pendant lights, and decorative fixtures.</p>
  </div>

  {/* Etsy Clothing */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Clothing</h3>
    <p>
      Etsy's fashion selection includes independent designers, handmade garments, custom pieces, vintage clothing, and accessories.
    </p>
    <p><strong>Dresses:</strong> You can find casual dresses, formal styles, bridesmaid dresses, vintage-inspired designs, and custom-made pieces.</p>
    <p><strong>Tops and Shirts:</strong> Options range from graphic T-shirts and embroidered tops to handmade blouses and personalized shirts.</p>
    <p><strong>Sweaters and Knitwear:</strong> Hand-knitted sweaters, cardigans, crochet garments, and other cozy clothing are available from independent makers.</p>
    <p><strong>Pants and Skirts:</strong> Etsy also features handmade, vintage, custom, and alternative fashion styles.</p>
    <p><strong>Custom Clothing:</strong> Some sellers allow customers to select measurements, colors, fabrics, embroidery, text, or other details.</p>
  </div>

  {/* Etsy Bags and Accessories */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Bags and Accessories</h3>
    <p>
      Accessories can make up a significant portion of Etsy's fashion marketplace.
    </p>
    <p>You can shop for:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Handbags</li>
      <li>Tote bags</li>
      <li>Backpacks</li>
      <li>Wallets</li>
      <li>Purses</li>
      <li>Belts</li>
      <li>Hats</li>
      <li>Scarves</li>
      <li>Hair accessories</li>
      <li>Sunglasses</li>
      <li>Keychains</li>
      <li>Personalized accessories</li>
    </ul>
    <p>
      Many products can also be customized with names, initials, colors, or other details.
    </p>
  </div>

  {/* Etsy Wedding Products */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Wedding Products</h3>
    <p>
      Etsy is particularly popular for wedding planning because many sellers specialize in customizable wedding products.
    </p>
    <p><strong>Wedding Invitations:</strong> Couples can find printable and physical invitations in different themes and styles.</p>
    <p><strong>Wedding Signs:</strong> Products include welcome signs, seating charts, ceremony signs, bar signs, and other wedding-day décor.</p>
    <p><strong>Bridesmaid Gifts:</strong> Personalized robes, jewelry, tumblers, bags, makeup cases, and other gifts can be customized for members of the wedding party.</p>
    <p><strong>Wedding Decorations:</strong> You can find table décor, centerpieces, cake toppers, banners, candles, floral accessories, and other decorative products.</p>
    <p><strong>Wedding Favors:</strong> Small personalized gifts and keepsakes can be ordered for wedding guests.</p>
    <p><strong>Bridal Accessories:</strong> Etsy also offers veils, hair accessories, jewelry, bridal robes, garters, and other wedding-related fashion products.</p>
  </div>

  {/* Etsy Party Supplies */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Party Supplies</h3>
    <p>
      Whether you're planning a birthday, baby shower, graduation, anniversary, or holiday gathering, Etsy offers a variety of party products.
    </p>
    <p>These can include:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Invitations</li>
      <li>Decorations</li>
      <li>Banners</li>
      <li>Cake toppers</li>
      <li>Party favors</li>
      <li>Table décor</li>
      <li>Gift bags</li>
      <li>Printable games</li>
      <li>Photo booth props</li>
      <li>Custom signs</li>
    </ul>
    <p>
      Digital party products can also be useful when you need invitations or decorations quickly.
    </p>
  </div>

  {/* Etsy Craft Supplies */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Craft Supplies</h3>
    <p>
      Etsy isn't only a destination for finished products. It also has a large marketplace for people who make things themselves.
    </p>
    <p><strong>Fabric:</strong> Shoppers can find quilting fabric, printed fabric, specialty textiles, fabric bundles, and vintage materials.</p>
    <p><strong>Yarn:</strong> The marketplace includes yarn for knitting, crochet, weaving, and other crafts.</p>
    <p><strong>Beads and Jewelry Supplies:</strong> You can purchase beads, charms, clasps, findings, gemstones, chains, and other jewelry-making materials.</p>
    <p><strong>Sewing Supplies:</strong> Products include patterns, buttons, thread, trims, sewing kits, tools, and other supplies.</p>
    <p><strong>Scrapbooking:</strong> Paper, stickers, stamps, embellishments, templates, and other scrapbooking materials are available.</p>
    <p><strong>DIY Kits:</strong> Craft kits can provide everything needed to complete a particular project without buying each component separately.</p>
  </div>

  {/* Etsy Art and Collectibles */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Art and Collectibles</h3>
    <p>
      Art lovers can browse work from independent artists and creators.
    </p>
    <p>Popular categories include:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Original artwork</li>
      <li>Paintings</li>
      <li>Illustrations</li>
      <li>Photography</li>
      <li>Prints</li>
      <li>Posters</li>
      <li>Sculptures</li>
      <li>Ceramics</li>
      <li>Handmade pottery</li>
      <li>Collectibles</li>
    </ul>
    <p>
      Etsy also has a substantial vintage marketplace for shoppers interested in older and hard-to-find pieces.
    </p>
  </div>

  {/* Etsy Vintage Products */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Vintage Products</h3>
    <p>
      Vintage shopping is another important part of Etsy.
    </p>
    <p>Depending on the seller and available inventory, shoppers can find:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Vintage clothing</li>
      <li>Jewelry</li>
      <li>Furniture</li>
      <li>Home décor</li>
      <li>Collectibles</li>
      <li>Books</li>
      <li>Accessories</li>
      <li>Kitchenware</li>
      <li>Antique-inspired items</li>
      <li>Retro products</li>
    </ul>
    <p>
      Vintage availability changes constantly because individual pieces may be one-of-a-kind.
    </p>
  </div>

  {/* Etsy Toys and Kids' Products */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Toys and Kids' Products</h3>
    <p>
      Etsy offers products for children, babies, and families, including handmade toys, personalized gifts, nursery décor, clothing, and educational products.
    </p>
    <p><strong>Handmade Toys:</strong> Wooden toys, stuffed animals, dolls, puzzles, sensory toys, and other handmade products are available from independent sellers.</p>
    <p><strong>Baby Gifts:</strong> Popular options include personalized blankets, baby clothes, milestone products, nursery décor, and keepsakes.</p>
    <p><strong>Kids' Clothing:</strong> Parents can find handmade and personalized children's clothing, costumes, accessories, and special-occasion outfits.</p>
  </div>

  {/* Etsy Pet Products */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Pet Products</h3>
    <p>
      Etsy also has a growing range of products for pets.
    </p>
    <p>You can shop for:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Personalized pet tags</li>
      <li>Pet collars</li>
      <li>Leashes</li>
      <li>Pet beds</li>
      <li>Bandanas</li>
      <li>Pet clothing</li>
      <li>Feeding accessories</li>
      <li>Toys</li>
      <li>Custom pet portraits</li>
      <li>Memorial products</li>
    </ul>
  </div>

  {/* Etsy Beauty and Self-Care */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Beauty and Self-Care</h3>
    <p>
      Independent sellers offer a range of beauty and self-care products, including handmade soaps, bath products, skincare, fragrances, candles, accessories, and wellness-related gift items.
    </p>
    <p>
      Because these products are sold by individual shops, shoppers should review the listing details, ingredients, seller information, and applicable policies before purchasing.
    </p>
  </div>

  {/* Etsy Digital Products */}
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Etsy Digital Products</h3>
    <p>
      Etsy isn't limited to physical merchandise. Digital downloads are another major category.
    </p>
    <p>These can include:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
      <li>Printable planners</li>
      <li>Digital invitations</li>
      <li>Wall art</li>
      <li>Templates</li>
      <li>Wedding stationery</li>
      <li>Budget spreadsheets</li>
      <li>Business templates</li>
      <li>Educational resources</li>
      <li>Craft patterns</li>
      <li>SVG files</li>
      <li>Fonts</li>
      <li>Digital stickers</li>
    </ul>
    <p>
      Digital products can be particularly convenient because they may be available immediately after purchase.
    </p>
  </div>
</div>

          {/* What Types of Etsy Sales and Offers Are Available? */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">What Types of Etsy Sales and Offers Are Available?</h3>
            <p>
              Etsy uses several types of promotions throughout the year. Since independent sellers can also run their own campaigns, the range of available discounts can vary significantly.
            </p>
            <p><strong>Etsy-Wide Sales:</strong> Etsy sometimes organizes larger promotional events where participating sellers offer discounts on qualifying products. Not every shop or listing necessarily participates, so check the individual product details.</p>
            <p><strong>Seller-Specific Sales:</strong> Individual Etsy shops can create their own promotions. These may cover an entire shop, selected listings, or particular product categories.</p>
            <p><strong>Percentage-Off Discounts:</strong> A seller may offer a percentage reduction on qualifying products or orders.</p>
            <p><strong>Spend-and-Save Offers:</strong> Some promotions provide a discount after reaching a minimum order value. These offers can be particularly useful when buying several products from the same shop.</p>
            <p><strong>Free Shipping Offers:</strong> Some sellers offer free shipping on qualifying orders or during specific promotional periods. Because shipping is controlled at the seller level, always check the final delivery cost before completing an order.</p>
            <p><strong>Seasonal Sales:</strong> Etsy sellers frequently run promotions around seasonal shopping periods. Common occasions include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
              <li>Valentine's Day</li>
              <li>Mother's Day</li>
              <li>Father's Day</li>
              <li>Graduation season</li>
              <li>Back-to-school</li>
              <li>Halloween</li>
              <li>Thanksgiving</li>
              <li>Christmas</li>
              <li>New Year</li>
              <li>Black Friday and Cyber Monday</li>
            </ul>
            <p><strong>Black Friday and Cyber Monday:</strong> Black Friday and Cyber Monday are important promotional periods on Etsy, with many individual sellers offering discounts on gifts, home products, jewelry, clothing, craft supplies, and other popular categories.</p>
            <p><strong>Holiday Gift Sales:</strong> As the holiday season approaches, sellers may introduce discounts on personalized gifts, ornaments, home décor, jewelry, stocking stuffers, and other giftable products.</p>
            <p><strong>Clearance and End-of-Season Offers:</strong> Some shops discount older designs, seasonal merchandise, or remaining inventory to make room for new products.</p>
          </div>

          {/* How to Use an Etsy Coupon Code */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-2">How to Use an Etsy Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Find an Etsy Offer — Start by checking CouponsBit for current Etsy coupon codes, deals, and promotions.",
                "Step 2: Choose Your Product — Browse jewelry, personalized gifts, clothing, home décor, wedding products, craft supplies, vintage items, or another Etsy category.",
                "Step 3: Review the Seller — Check the seller's reviews, processing time, shipping information, return policy, and product details.",
                "Step 4: Check the Coupon Conditions — Make sure the coupon applies to your selected item or shop and review any minimum purchase requirements or expiration dates.",
                "Step 5: Add the Product to Your Cart — Select the appropriate size, color, personalization details, and quantity.",
                "Step 6: Apply the Coupon — Enter the Etsy coupon code during checkout if required.",
                "Step 7: Confirm Your Total — Check the final price, shipping charges, taxes, personalization costs, and discount before placing your order.",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Etsy Products to Explore */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Popular Etsy Products to Explore</h3>
            <p>Etsy is especially useful when you're looking for products that feel more personal or distinctive than mass-market alternatives.</p>
            <p>For gifting, popular categories include personalized jewelry, custom mugs, engraved gifts, photo products, personalized blankets, signs, and handmade keepsakes.</p>
            <p>For weddings, shoppers can explore invitations, wedding signs, bridesmaid gifts, favors, decorations, cake toppers, bridal accessories, and printable stationery.</p>
            <p>Home shoppers can browse wall art, candles, furniture, pillows, rugs, ceramics, lighting, kitchen accessories, and decorative pieces.</p>
            <p>Creative shoppers can explore fabric, yarn, beads, sewing supplies, craft kits, patterns, printable designs, and digital files.</p>
            <p>Etsy's vintage section is another option for shoppers searching for retro clothing, antique décor, collectibles, jewelry, furniture, and other older items.</p>
          </div>

          {/* Shop Etsy With CouponsBit */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Etsy With CouponsBit</h3>
            <p>From handmade jewelry and personalized gifts to wedding supplies, home décor, clothing, craft materials, vintage finds, children's products, pet accessories, and digital downloads, Etsy offers an enormous variety of products from independent sellers.</p>
            <p>Before making your next purchase, check CouponsBit for an Etsy discount code, Etsy coupon code, or current Etsy sale. Compare seller promotions, Etsy-wide campaigns, shipping costs, and product prices to find the offer that makes the most sense for your order.</p>
            <p>Whether you're searching for a one-of-a-kind gift, planning a wedding, decorating your home, starting a craft project, or simply looking for something different, checking available Etsy savings before checkout can help you get better value from your purchase.</p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        {/* Read More Button */}
        <button 
          onClick={() => setIsReadMore(!isReadMore)} 
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline focus:outline-none"
        >
          {isReadMore ? "Read Less" : "Read More"} 
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isReadMore && "rotate-180")} />
        </button>

        {/* FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About Etsy Discount Codes</h3>
          {[
            { q: "Where Can I Find an Etsy Discount Code?", a: "You can check CouponsBit for available Etsy discount codes, coupons, deals, and promotional offers before placing an order." },
            { q: "What Is an Etsy Coupon Code?", a: "An Etsy coupon code is a promotional code that may provide a discount on an eligible purchase. Depending on the promotion, it may apply to a specific seller rather than the entire Etsy marketplace." },
            { q: "Does Etsy Always Have a Discount Code?", a: "No. Coupon availability changes, and individual sellers can create or end their own promotions." },
            { q: "Does Etsy Have Sales?", a: "Yes. Etsy and individual sellers run promotional campaigns throughout the year, including seasonal sales, seller-specific discounts, holiday promotions, and major shopping events." },
            { q: "Does Etsy Have a Black Friday Sale?", a: "Etsy participates in Black Friday and Cyber Monday shopping periods, while individual sellers can also run their own promotions during these events." },
            { q: "Can I Find Personalized Gifts on Etsy?", a: "Yes. Personalized products are one of Etsy's major categories, including jewelry, home décor, clothing, wedding products, gifts, signs, and keepsakes." },
            { q: "Does Etsy Sell Vintage Products?", a: "Yes. Etsy has a dedicated vintage marketplace featuring clothing, jewelry, furniture, collectibles, décor, accessories, and other vintage goods." },
            { q: "Does Etsy Sell Craft Supplies?", a: "Yes. Etsy offers fabric, yarn, beads, sewing supplies, patterns, tools, craft kits, paper products, and many other supplies for creative projects." },
            { q: "Does Etsy Sell Digital Products?", a: "Yes. Digital products include templates, planners, invitations, artwork, craft patterns, SVG files, fonts, educational resources, and other downloadable products." },
            { q: "Can I Use an Etsy Discount Code on Sale Items?", a: "That depends on the specific coupon. Seller-created promotions can have their own rules regarding sale products, minimum purchases, and eligible listings." },
            { q: "Are Etsy Coupons Valid Across Every Seller?", a: "Not necessarily. A coupon created by an individual seller may only work on products from that seller's shop. Always check the coupon's terms before checkout." },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                aria-expanded={openFaq === i}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300", openFaq === i && "bg-[#056bfa] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Section */}
      <aside className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Etsy Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Personalized Gifts", "Handmade Jewelry", "Wedding Decor", "Craft Supplies", "Vintage Finds", "Custom Mugs", "Wall Art", "Printable Cards"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Etsy Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner shrink-0">E</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-1.5 normal-case">{deal.sub}</p>
                </div>
                <a 
                  href={STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Shop Etsy: ${deal.heading}`} 
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-95 shrink-0"
                >
                  Get Deal
                </a>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>


      </main>

      <Footer />
    </div>
  );
}
