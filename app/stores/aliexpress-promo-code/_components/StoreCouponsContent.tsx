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
  ChevronDown, Calculator, Copy, Truck, Calendar, FileText,
  CheckCircle,
  LayoutGrid,
  Search,
  ShoppingBag,
  Shirt,
  Globe,
  Smartphone,
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
  { id: "d1", label: "SALE", heading: "Labour Day Sale Up to 93% OFF", sub: "Latest Deals" },
  { id: "d2", label: "NEW", heading: "Welcome Deal Up to 70% OFF", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Best Sellers Starting at $0.99", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Dollar Express Deals Starting at $0.99", sub: "Featured Picks" },
  { id: "d5", label: "NEW", heading: "Welcome Savings – Up to 70% OFF", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Wish.com", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/wish-logo_n1dypa.webp", dealText: "Up To 60% OFF", href: "/stores/wish-discount-code" },
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Geekbuying", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/geekbuying-logo_pnkeev.webp", dealText: "Up To 56% OFF", href: "/stores/geekbuying-discount-code" },
  { name: "Temu", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788783183/temu-logo_our7ig.webp", dealText: "New Store", href: "/stores/temu-coupon-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
];

const STORE_URL = "https://www.aliexpress.com";

export default function AliexpressCouponsContent() {
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
              <span className="text-black font-extrabold">AliExpress</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788783184/aliexpress-logo_uued0o.webp" alt="AliExpress" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">AliExpress</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-20" />
                      </div>
                      <span className="text-black font-black text-sm">4.2</span>
                      <span className="text-gray-600 font-bold text-sm">(25.6k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover verified AliExpress promo codes and AliExpress discount codes at Maxiku Offers. Save up to 93% OFF during the Labour Day Sale with free shipping on selected products, and shop game consoles starting from just $18, including popular PlayStation deals at unbeatable prices.
                    </p>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "12", label: "Offers" },
                    { icon: Percent, val: "5K+", label: "Deals" },
                    { icon: Users, val: "10M+", label: "Shoppers" },
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
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1788783184/aliexpress-logo_uued0o.webp" alt="AliExpress Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">AliExpress Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "SALE", value: "93% OFF", title: "AliExpress – Labour Day Sale Up to 93% OFF", desc: "Save up to 93% OFF on selected products during the AliExpress Labour Day Sale.", bullets: ["Shop huge discounts across electronics, automotive accessories, clothing, smart devices and more.", "Free shipping is available on several featured deals and selected products.", "Prices, discounts, shipping charges and availability may vary by product and seller."] },
                  { label: "NEW", value: "70% OFF", title: "AliExpress – Welcome Deal Up to 70% OFF", desc: "New shoppers can enjoy welcome savings of up to 70% OFF on eligible AliExpress purchases.", bullets: ["Explore discounted products across multiple categories and popular collections.", "Take advantage of special introductory savings available to eligible new customers.", "Check the product page for the latest price, discount and eligibility details."] },
                  { label: "DEAL", value: "$0.99", title: "AliExpress – Best Sellers Starting at $0.99", desc: "Discover popular AliExpress best sellers with selected deals starting from just $0.99.", bullets: ["Shop trending products across gadgets, accessories, home items and everyday essentials.", "Find highly purchased products at heavily discounted prices while supplies last.", "Prices and availability may vary by seller and product."] },
                  { label: "DEAL", value: "$0.99", title: "AliExpress – Dollar Express Deals Starting at $0.99", desc: "Explore Dollar Express deals with selected products starting from just $0.99.", bullets: ["New shoppers may find eligible featured products for as low as $0.33.", "Browse gadgets, tools, home essentials, toys, accessories and novelty products.", "Limited-time promotion available on selected products and participating offers."] },
                  { label: "NEW", value: "70% OFF", title: "AliExpress Welcome Savings – Up to 70% OFF", desc: "Save up to 70% OFF on eligible AliExpress orders with the Welcome Savings promotion.", bullets: ["No promo code is required because the discount is automatically applied.", "Enjoy the offer without a minimum purchase requirement on eligible orders.", "Shop now and take advantage of these limited-time introductory savings."] },
                  { label: "SALE", value: "80% OFF", title: "AliExpress Best Seller Collection – Up to 80% OFF", desc: "Save up to 80% OFF on selected best-selling AliExpress products.", bullets: ["Explore popular collections featuring a wide variety of highly discounted items.", "Discover low prices across multiple product categories and trending selections.", "Shop now to take advantage of limited-time savings on eligible best sellers."] },
                  { label: "DEAL", value: "50% OFF", title: "AliExpress Custom Auto Parts – Up to 50% OFF", desc: "Get up to 50% OFF selected custom auto parts and automotive accessories.", bullets: ["Shop a wide range of products designed for vehicle upgrades, repairs and customization.", "No coupon code is required to claim the discount on eligible products.", "Offer is available to all users on selected AliExpress automotive products."] },
                  { label: "SALE", value: "60% OFF", title: "AliExpress Furniture Sale – Up to 60% OFF + Free Shipping", desc: "Enjoy up to 60% OFF a wide selection of furniture during the AliExpress Furniture Sale.", bullets: ["Get FREE shipping on eligible orders for added convenience.", "Find selected furniture products starting from as low as $4.", "Shop mattresses, patio furniture, beds, reception desks, salon furniture and more."] },
                  { label: "DEAL", value: "$18", title: "AliExpress Game Consoles – Starting at $18", desc: "Find selected game consoles at discounted prices starting from just $18.", bullets: ["Explore gaming deals featuring popular PlayStation 4 and PlayStation 5 consoles.", "Save on gaming products while shopping selected AliExpress listings.", "Prices and availability vary by seller, product and condition."] },
                  { label: "DEAL", value: "$7.99", title: "AliExpress Women's Shoes – Starting at $7.99", desc: "Shop women's shoes on AliExpress starting from just $7.99.", bullets: ["Explore footwear options suitable for different seasons, styles and everyday occasions.", "No coupon code is required to claim the offer on eligible products.", "Browse selected shoe deals and check individual listings for current prices and availability."] },
                  { label: "DEAL", value: "60% OFF", title: "AliExpress Phone Cases & Chargers – Up to 60% OFF", desc: "Save up to 60% OFF selected phone cases and charging accessories on AliExpress.", bullets: ["Browse protective cases, charging accessories and other smartphone essentials.", "Prices and shipping times may vary depending on the seller and your location.", "Shop eligible products and enjoy the reduced price available at checkout."] },
                  { label: "DEAL", value: "$36.81", title: "AliExpress Hagibis Wireless USB-C Transmitter & Receiver Kit – Save $61.58", desc: "Shop the Hagibis Wireless USB-C Transmitter and Receiver Kit for selected devices.", bullets: ["The HDMI video extender supports screen mirroring for phones, tablets, laptops and monitors.", "Get the featured product for $36.81, compared with the listed $98.39 price.", "Save $61.58 on the selected Hagibis wireless video extender deal."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop AliExpress: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">Find an AliExpress Promo Code</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   An AliExpress promo code may provide a discount on eligible purchases, depending on the promotion and its conditions. Some codes can apply to selected products or sellers, while others may have minimum spending requirements or other restrictions.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Because AliExpress features products from a large number of sellers, promotions can vary considerably. A code that works for one order may not necessarily apply to another product or seller.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   Before checking out, review the offer carefully. Pay attention to its validity period, minimum purchase requirements, eligible products, participating sellers, and any other restrictions.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                   CouponsBit makes it easier to check for current AliExpress promotional opportunities before you complete your order.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Shirt, name: "Electronics", count: "850+", color: "text-blue-500", href: "/categories/electronics" },
                        { icon: ShoppingBag, name: "Entertainment", count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Smartphone, name: "Mobile & Telecom", count: "320+", color: "text-green-500", href: "/categories/mobile" },
                        { icon: Sparkles, name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
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

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    How to Find the Best AliExpress Deals
  </h3>
  <div className="space-y-8">
    {[
      {
        icon: Tag,
        title: "Check CouponsBit Before Checkout",
        sub: "Before completing your purchase, check CouponsBit for the latest AliExpress promo code, coupon codes, discount offers, vouchers, and other available deals.",
      },
      {
        icon: Calculator,
        title: "Compare the Final Cost",
        sub: "Don't judge a deal solely by the advertised percentage discount. Compare the final checkout amount, including applicable shipping and other charges.",
      },
      {
        icon: Star,
        title: "Check Seller Reviews",
        sub: "AliExpress operates as a marketplace, so seller reputation matters. Look at ratings, customer reviews, product photos, order history, and other available information before buying.",
      },
      {
        icon: Copy,
        title: "Compare Multiple Listings",
        sub: "The same or similar product may be available from multiple sellers. Compare specifications, reviews, shipping options, and final costs rather than choosing the first listing you see.",
      },
      {
        icon: Truck,
        title: "Check Delivery Times",
        sub: "If you need an item for a specific date, pay close attention to the estimated delivery window.",
      },
      {
        icon: Calendar,
        title: "Look for Seasonal Promotions",
        sub: "Major shopping periods such as Black Friday, Cyber Monday, back-to-school season, and holiday sales can be useful times to monitor AliExpress promotions.",
      },
      {
        icon: FileText,
        title: "Read the Coupon Conditions",
        sub: "A coupon may have a minimum spending requirement, selected-product restrictions, seller limitations, or an expiration date. Check the terms before adding it to your shopping plan.",
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
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          AliExpress Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Finding something you need online doesn't always have to mean paying full price. AliExpress gives shoppers access to an enormous selection of products across electronics, fashion, home essentials, beauty, accessories, gadgets, toys, automotive products, and countless other categories. With so many sellers and products available, shoppers can compare different options and look for attractive deals in one place.
          </p>
          <p>
            If you're planning to shop on AliExpress, checking for an AliExpress promo code before placing your order can be a smart way to look for additional savings. CouponsBit helps shoppers discover available promo codes, coupon codes, discount offers, vouchers, sales, and other promotional opportunities so they can check their options before completing a purchase.
          </p>
          <p>
            AliExpress also runs major shopping campaigns throughout the year. Seasonal events, special promotions, flash deals, holiday sales, and major US shopping occasions such as Black Friday and Cyber Monday can all create opportunities to save.
          </p>

          <div className="space-y-8">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">AliExpress Coupon Code and Discount Offers</h3>
    <p>When you're looking for an AliExpress coupon code, it's worth checking more than just traditional promotional codes. The platform frequently features different types of savings, including seller discounts, product markdowns, platform-wide promotions, digital coupons, limited-time deals, and special shopping events.</p>
    <p>The best offer for you will depend on what you're buying.</p>
    <p>For example, someone purchasing a single gadget may find a product-level discount useful, while a shopper placing a larger order may benefit from an offer with a minimum spending requirement. In some cases, combining an eligible coupon with an already discounted product can make the purchase more attractive, subject to the promotion's terms.</p>
    <p>Before placing your order, check CouponsBit for available AliExpress offers and compare them with the products in your cart.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Electronics and Gadgets on AliExpress</h3>
    <p>Electronics are among the most popular categories on AliExpress. The platform features products ranging from everyday accessories to smart devices and computer equipment.</p>
    <p><strong>Smartphones and Accessories:</strong> Depending on the current marketplace selection, shoppers can find smartphones, phone cases, screen protectors, charging cables, wireless chargers, holders, stands, and other mobile accessories.</p>
    <p>If you're purchasing multiple accessories at once, check whether a current AliExpress discount code applies to your order.</p>
    <p><strong>Computers and Accessories:</strong> AliExpress offers products such as keyboards, mice, laptop accessories, USB hubs, cables, stands, storage accessories, webcams, and other computer-related products.</p>
    <p><strong>Smart Devices:</strong> Smartwatches, fitness trackers, smart home accessories, security devices, lighting products, and other connected gadgets can also be found on the platform.</p>
    <p><strong>Gaming Accessories:</strong> Gamers can explore controllers, gaming accessories, keyboards, mice, headsets, stands, lighting, and other gaming-related products.</p>
    <p>As with any marketplace purchase, check seller information, product specifications, reviews, shipping details, and return conditions before ordering.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Fashion on AliExpress</h3>
    <p>AliExpress has a large fashion marketplace covering clothing, footwear, accessories, and products for different styles and occasions.</p>
    <p><strong>Women's Fashion:</strong> Shoppers can browse dresses, tops, jeans, skirts, jackets, activewear, sleepwear, swimwear, coats, and other women's clothing.</p>
    <p><strong>Men's Fashion:</strong> Men can find T-shirts, shirts, jeans, trousers, jackets, hoodies, suits, activewear, and casual clothing.</p>
    <p><strong>Kids' Clothing:</strong> The children's section includes clothing, shoes, accessories, costumes, and other products for different age groups.</p>
    <p><strong>Shoes and Accessories:</strong> AliExpress offers a wide selection of sneakers, sandals, boots, heels, slippers, bags, wallets, belts, hats, sunglasses, jewelry, and other accessories.</p>
    <p>Because sizing can differ between sellers, always check the individual product's size chart before purchasing.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Beauty and Personal Care</h3>
    <p>AliExpress also features beauty and personal-care products, depending on the marketplace and seller availability.</p>
    <p>Shoppers can explore skincare accessories, makeup tools, hair accessories, grooming products, beauty devices, nail products, and other personal-care items.</p>
    <p>When shopping for cosmetics, skincare, or personal-care products, check product information and seller details carefully. Some products may also have shipping or import restrictions depending on the destination.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Home and Kitchen Products</h3>
    <p>AliExpress can be useful for shoppers looking for affordable home accessories and practical everyday products.</p>
    <p><strong>Home Décor:</strong> The marketplace includes decorative items such as wall décor, lighting, storage products, decorative accessories, clocks, organizers, and other home accents.</p>
    <p><strong>Kitchen Essentials:</strong> Customers can find cookware accessories, utensils, storage containers, kitchen gadgets, baking tools, tableware, and other kitchen products.</p>
    <p><strong>Organization and Storage:</strong> Storage boxes, shelves, organizers, hooks, racks, containers, and other organization products can help shoppers make better use of their space.</p>
    <p>If you're purchasing several home products together, check whether an AliExpress coupon code can be applied to your order.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">AliExpress Toys and Hobbies</h3>
    <p>Parents, collectors, hobbyists, and gift shoppers can explore a broad range of toys and hobby products.</p>
    <p>The marketplace can include building sets, remote-controlled products, collectibles, craft supplies, puzzles, educational toys, outdoor toys, and other entertainment products.</p>
    <p>For children's products, check the recommended age range and product information before purchasing.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">Automotive Products</h3>
    <p>AliExpress also serves automotive shoppers with products such as car accessories, interior organizers, lighting accessories, phone holders, cleaning products, tools, replacement accessories, and other vehicle-related items.</p>
    <p>Product compatibility is especially important in this category. Check specifications and compatibility information before placing an order.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">AliExpress Home Improvement and Tools</h3>
    <p>DIY shoppers can find a wide range of tools, hardware, lighting, electrical accessories, measuring equipment, storage solutions, and home-improvement products.</p>
    <p>Whether you're working on a small home project or looking for a particular tool accessory, compare product specifications and seller reviews before buying.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">AliExpress Flash Deals</h3>
    <p>Flash deals are one of the ways AliExpress creates urgency around selected products. These offers are typically available for a limited period or while promotional inventory lasts.</p>
    <p>If you find something you already planned to purchase, comparing the flash deal with other available promotions can help you decide whether it's a good time to order.</p>
    <p>However, don't buy something simply because a countdown timer or limited-time promotion makes it feel urgent. Check the product's reviews, specifications, shipping cost, and final checkout amount first.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">AliExpress Choice and Shipping Options</h3>
    <p>AliExpress offers different purchasing and shipping experiences depending on the product and seller. Certain listings may provide faster or more streamlined shipping options, while others can have longer delivery times.</p>
    <p>Before ordering, check the estimated delivery date, shipping cost, return conditions, and seller information.</p>
    <p>A low product price does not always mean the lowest overall cost if shipping or other charges significantly change the final amount.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#056bfa] mb-4">AliExpress Seasonal Sales and Major US Shopping Events</h3>
    <p>AliExpress runs promotional events throughout the year, giving shoppers several opportunities to look for deals.</p>
    <p><strong>New Year Promotions:</strong> The beginning of the year can bring promotions across electronics, home products, fashion, accessories, and other categories as shoppers start new projects or replace everyday items.</p>
    <p><strong>Valentine's Day:</strong> Valentine's Day can bring attention to gifts, jewelry, accessories, fashion, beauty products, gadgets, and other gift-friendly categories.</p>
    <p><strong>Spring Promotions:</strong> Spring is a useful period for shoppers looking for clothing updates, home organization products, outdoor accessories, gardening items, and seasonal products.</p>
    <p><strong>Memorial Day:</strong> Memorial Day is a major US shopping period. Shoppers can watch for promotions across electronics, home products, fashion, tools, automotive accessories, and other categories.</p>
    <p><strong>Fourth of July:</strong> Independence Day shopping can include outdoor products, summer fashion, accessories, electronics, party supplies, and other seasonal merchandise.</p>
    <p><strong>Back-to-School Sales:</strong> Back-to-school shopping can create demand for backpacks, stationery, electronics, accessories, clothing, shoes, room organization products, and study essentials.</p>
    <p>Families and students can compare available promotions before making larger purchases.</p>
    <p><strong>Halloween:</strong> Halloween can bring promotions around costumes, decorations, party supplies, accessories, lighting, crafts, and other seasonal products.</p>
    <p><strong>Thanksgiving:</strong> Thanksgiving marks the beginning of the major US holiday shopping period. Shoppers can start watching for promotions across electronics, fashion, home products, gifts, and other categories.</p>
    <p><strong>Black Friday:</strong> Black Friday is one of the biggest shopping events in the United States and a particularly important period to watch for AliExpress deals.</p>
    <p>Shoppers can find promotions across electronics, gadgets, fashion, home products, accessories, tools, and other categories.</p>
    <p>Before making a purchase, check CouponsBit for an AliExpress promo code and compare it with the retailer's current sale offers.</p>
    <p><strong>Cyber Monday:</strong> Cyber Monday is another major online shopping event. AliExpress can feature online promotions across multiple categories during this period.</p>
    <p>If you're planning a large online purchase, compare the available discount with any applicable coupon or promotional code before checkout.</p>
    <p><strong>Christmas and Holiday Shopping:</strong> The holiday season is an important time for gift shopping. AliExpress offers products across a wide range of gift categories, including electronics, accessories, toys, fashion, home products, and hobby items.</p>
    <p>Because international shipping can take time, check estimated delivery dates carefully when purchasing gifts.</p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use an AliExpress Promo Code</h3>
            <p className="text-gray-600 font-medium -mt-4 mb-4">
              If you find an AliExpress promo code through CouponsBit, follow the instructions associated with that particular offer. A typical process may include:
            </p>
            <div className="space-y-6">
              {[
                "Select the AliExpress offer you want to use.",
                "Visit AliExpress through the relevant offer.",
                "Search for the product you want to purchase.",
                "Add eligible products to your shopping cart.",
                "Review available product and seller promotions.",
                "Enter the applicable promo code if required.",
                "Apply the code and check whether the discount has been reflected.",
                "Review shipping costs, taxes, delivery estimates, and other charges where applicable.",
                "Complete your order after confirming the final details."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">{i + 1}</div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium italic mt-4 pt-4 border-t border-gray-100">
              If your code doesn't work, check its expiration date and eligibility requirements. The offer may be limited to certain products, sellers, countries, order values, or promotional periods.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for AliExpress Offers?</h3>
            <p>
              AliExpress has thousands of products and a constantly changing marketplace, which can make it difficult to know whether you're getting the best available deal.
            </p>
            <p>
              CouponsBit gives shoppers another place to check before completing their purchase. By looking for an AliExpress promo code, coupon, discount offer, voucher, or sale promotion, you can compare available savings with the products you're planning to buy.
            </p>
            <p>
              The best deal isn't necessarily the biggest percentage discount. A smaller promotion on a product you genuinely need can be more valuable than a larger discount on something you don't.
            </p>
            <p>
              CouponsBit helps make that comparison easier by bringing relevant promotional opportunities together in one place.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Save on Your Next AliExpress Order</h3>
            <p>
              AliExpress gives US shoppers access to an enormous variety of products, from electronics and fashion to home essentials, beauty accessories, automotive products, tools, toys, and everyday gadgets.
            </p>
            <p>
              With promotions changing regularly, checking for savings before placing an order can be worthwhile. Major events such as Black Friday, Cyber Monday, back-to-school season, holiday shopping, and seasonal sales can also provide additional opportunities to find attractive offers.
            </p>
            <p>
              Before you checkout, visit CouponsBit to look for the latest AliExpress promo code, along with coupon codes, discount offers, vouchers, flash deals, and other promotions. Compare the available offer with your product, shipping costs, and order requirements, then choose the deal that makes the most sense for your purchase.
            </p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button onClick={() => setIsReadMore(!isReadMore)} className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline">
          {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* FAQ */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions About AliExpress Promo Codes</h3>
          {[
            { q: "Does AliExpress offer promo codes?", a: "Yes. AliExpress runs different promotional campaigns throughout the year, and eligible shoppers may find promo codes, coupons, discounts, seller offers, and other deals. The exact terms vary by promotion." },
            { q: "Where can I find an AliExpress promo code?", a: "You can check CouponsBit for available AliExpress promo codes, coupon codes, discount offers, vouchers, and other promotions before placing an order." },
            { q: "How do I use an AliExpress coupon code?", a: "Add eligible products to your cart, proceed toward checkout, and enter the applicable coupon or promotional code if the offer requires one. Make sure the discount has been applied before completing your order." },
            { q: "Why isn't my AliExpress promo code working?", a: "A code may not work if it has expired or if your order does not meet its requirements. Restrictions can include minimum spending amounts, selected sellers, specific products, countries, or promotional periods." },
            { q: "Can I use an AliExpress discount code on any product?", a: "Not necessarily. Promotional codes can have specific eligibility conditions. Check the terms of the individual offer to determine which products or orders qualify." },
            { q: "Does AliExpress have flash deals?", a: "Yes. AliExpress regularly promotes selected products through limited-time deals. Availability and discounts can change as the promotion progresses." },
            { q: "Does AliExpress have Black Friday deals?", a: "Black Friday is a major shopping event, and AliExpress can run promotions during this period. Available offers and participating products vary." },
            { q: "Does AliExpress offer Cyber Monday discounts?", a: "AliExpress can feature promotions around Cyber Monday. Check the current campaign details to see which products and orders qualify." },
            { q: "Can I find electronics on AliExpress?", a: "Yes. AliExpress has a broad selection of electronics, gadgets, accessories, computer products, smart devices, and other technology-related merchandise." },
            { q: "Does AliExpress sell clothing?", a: "Yes. Shoppers can find women's, men's, and children's clothing, along with shoes, bags, jewelry, accessories, and other fashion products." },
            { q: "Does AliExpress ship to the US?", a: "AliExpress offers shipping to many destinations, including the United States, although availability, shipping methods, costs, and delivery times depend on the individual product and seller." },
            { q: "How can I save more when shopping on AliExpress?", a: "Start by checking CouponsBit for an AliExpress promo code, then compare it with product discounts, seller promotions, platform coupons, flash deals, and seasonal offers. Also consider shipping costs and the final checkout amount before deciding which deal provides the best value." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors">
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular AliExpress Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["AliExpress Promo Code", "Flash Deals", "Electronics", "US Shipping", "Free Shipping", "Super Deals", "Gadgets", "Seasonal Sale"].map(tag => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top AliExpress Deals</h3>
          <div className="space-y-6">
            {DEALS.map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">A</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop AliExpress: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
