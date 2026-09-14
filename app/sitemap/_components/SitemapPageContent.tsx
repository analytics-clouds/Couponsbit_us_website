"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { allStores } from "@/lib/stores-data";

const MAIN_PAGES = [
  { name: "Home", href: "/" },
  { name: "Today's Deals", href: "/deals" },
  { name: "Deals of the Day", href: "/deals-of-the-day" },
  { name: "Deals of the Week", href: "/deals-of-the-week" },
  { name: "All Stores", href: "/stores" },
  { name: "All Categories", href: "/categories" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Partner With Us", href: "/partner" },
  { name: "FAQs", href: "/faqs" },
  { name: "Careers", href: "/careers" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Use", href: "/terms-of-use" },
];

const CATEGORIES = [
  { name: "Automotive", href: "/categories/automotive" },
  { name: "Baby & Maternity", href: "/categories/baby" },
  { name: "Electronics", href: "/categories/electronics" },
  { name: "Entertainment", href: "/categories/entertainment" },
  { name: "Eyewear", href: "/categories/eyewear" },
  { name: "Fashion", href: "/categories/fashion" },
  { name: "Food & Dining", href: "/categories/food" },
  { name: "Gaming & Digital Goods", href: "/categories/gaming" },
  { name: "Health & Wellness", href: "/categories/health" },
  { name: "Home & Lifestyle", href: "/categories/home" },
  { name: "Hotels & Accommodation", href: "/categories/hotels" },
  { name: "Mobile & Telecom", href: "/categories/mobile" },
  { name: "Software & Digital", href: "/categories/software" },
  { name: "Travel", href: "/categories/travel" },
];

const BLOG_POSTS = [
  { name: "Couponsbit Shopping & Savings Guide", href: "/blog/couponsbit-shopping-savings-guide" },
  { name: "How to Save Money While Shopping Online in 2026", href: "/blog/how-to-save-money-shopping-online" },
  { name: "Holiday Shopping Calendar 2026", href: "/blog/holiday-shopping-calendar-2026" },
  { name: "The Biggest U.S. Sales Coming Up in 2026", href: "/blog/upcoming-sales-2026" },
  { name: "GamsGo Discount Code: Save More on Digital Subscriptions", href: "/blog/how-to-use-gamsgo-discount-code" },
];

function LinkGrid({ items }: { items: { name: string; href: string }[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="text-gray-600 font-semibold text-sm hover:text-[#056bfa] hover:underline transition-colors">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function SitemapPageContent() {
  const sortedStores = [...allStores].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <main>
        <section className="bg-[#f5f5f5] py-12 border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-black font-black text-3xl md:text-4xl mb-3">Sitemap</h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl">
              A complete list of every page on Couponsbit — stores, categories, deals, blog posts, and info pages — all in one place.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4 max-w-7xl space-y-14">
            <div>
              <h2 className="text-black font-black text-xl mb-6">Main Pages</h2>
              <LinkGrid items={MAIN_PAGES} />
            </div>

            <div>
              <h2 className="text-black font-black text-xl mb-6">Categories</h2>
              <LinkGrid items={CATEGORIES} />
            </div>

            <div>
              <h2 className="text-black font-black text-xl mb-6">All Stores ({sortedStores.length})</h2>
              <LinkGrid items={sortedStores.map((store) => ({ name: store.name, href: `/stores/${store.id}` }))} />
            </div>

            <div>
              <h2 className="text-black font-black text-xl mb-6">Blog</h2>
              <LinkGrid items={BLOG_POSTS} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
