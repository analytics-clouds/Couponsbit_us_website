import type { Metadata } from "next";
import { Suspense } from "react";
import SephoraCouponsContent from "./_components/StoreCouponsContent";
import { SEPHORA_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Sephora Promo Code: Up to 50% OFF Beauty Sale | Nov 2026",
  },
  description:
    "Sephora Promo Code saves up to 50% on skincare and beauty products, plus 50% off Colorful Blush for $7. Grab Sephora Discount Code deals verified Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/sephora-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/sephora-promo-code",
      "x-default": "https://www.couponsbit.us/stores/sephora-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/sephora-promo-code",
    title: "Sephora Promo Code: Up to 50% OFF Beauty Sale | Nov 2026",
    description:
      "Sephora Promo Code saves up to 50% on skincare and beauty products, plus 50% off Colorful Blush for $7. Grab Sephora Discount Code deals verified Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/Sephora-Logo_djk72l.webp",
        width: 1200,
        height: 630,
        alt: "Sephora Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sephora Promo Code: Up to 50% OFF Beauty Sale | Nov 2026",
    description:
      "Sephora Promo Code saves up to 50% on skincare and beauty products, plus 50% off Colorful Blush for $7. Grab Sephora Discount Code deals verified Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789719709/Sephora-Logo_djk72l.webp"],
    site: "@couponsbit",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: { "geo.region": "US", "geo.country": "US", language: "en-US" },
};

const sephoraOffers = SEPHORA_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Sephora ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/sephora-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Sephora", url: "https://www.sephora.com" },
}));

const sephoraSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/sephora-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/sephora-promo-code",
      name: "Sephora Promo Code: Up to 50% OFF Beauty Sale | Nov 2026",
      description:
        "Sephora Promo Code saves up to 50% on skincare and beauty products, plus 50% off Colorful Blush for $7. Grab Sephora Discount Code deals verified Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/sephora-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/sephora-promo-code#brand",
      name: "Sephora",
      url: "https://www.sephora.com",
      sameAs: ["https://www.facebook.com/Sephora", "https://twitter.com/Sephora"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/sephora-promo-code#offerlist",
      name: "Sephora Promo Codes & Coupon Codes",
      description: "Latest Sephora promo codes and offers on makeup and skincare.",
      url: "https://www.couponsbit.us/stores/sephora-promo-code",
      numberOfItems: SEPHORA_COUPONS.length,
      itemListElement: sephoraOffers.map((offer, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: offer,
      })),
    },

    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description: "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: { "@id": "https://www.couponsbit.us/#organization" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://www.couponsbit.us",
      logo: { "@type": "ImageObject", url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp", width: 200, height: 60 },
      contactPoint: { "@type": "ContactPoint", contactType: "Customer Support", availableLanguage: "English" },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/sephora-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Sephora Coupons", item: "https://www.couponsbit.us/stores/sephora-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/sephora-promo-code#faq",
      "mainEntity": [
        { "@type": "Question", name: "Does Sephora offer promo codes?", acceptedAnswer: { "@type": "Answer", text: "Sephora periodically offers promotional codes, discounts, and seasonal promotions. Availability and eligibility can vary." } },
        { "@type": "Question", name: "Where can I find a Sephora promo code?", acceptedAnswer: { "@type": "Answer", text: "You can check CouponsBit for available Sephora promo codes, coupon codes, and sale promotions before shopping." } },
        { "@type": "Question", name: "How do I use a Sephora promo code?", acceptedAnswer: { "@type": "Answer", text: "Add eligible items to your cart, proceed to checkout, and enter the applicable promo code in the promotional-code field. Confirm the discount has been applied before completing your purchase." } },
        { "@type": "Question", name: "Why isn't my Sephora promo code working?", acceptedAnswer: { "@type": "Answer", text: "The promotion may have expired, or your order may not meet its requirements. Some offers can be limited to selected products or Beauty Insider tiers." } },
        { "@type": "Question", name: "What does Sephora sell?", acceptedAnswer: { "@type": "Answer", text: "Sephora sells makeup, skincare, haircare, and fragrance from a wide range of beauty brands." } },
        { "@type": "Question", name: "What is Sephora's Beauty Insider program?", acceptedAnswer: { "@type": "Answer", text: "Beauty Insider is Sephora's loyalty program, offering points, rewards, and member-exclusive offers based on your membership tier." } },
        { "@type": "Question", name: "Does Sephora offer free shipping?", acceptedAnswer: { "@type": "Answer", text: "Sephora may offer free shipping on qualifying orders or for eligible Beauty Insider members. Check current offers for minimum order requirements." } },
        { "@type": "Question", name: "Does Sephora have Black Friday deals?", acceptedAnswer: { "@type": "Answer", text: "Sephora may run promotions around Black Friday and other major shopping periods. Check current offers to see what is available." } },
        { "@type": "Question", name: "Does Sephora sell fragrance?", acceptedAnswer: { "@type": "Answer", text: "Yes. Sephora offers a wide selection of fragrance in addition to its makeup and skincare products." } },
        { "@type": "Question", name: "When is the best time to look for Sephora deals?", acceptedAnswer: { "@type": "Answer", text: "Promotions can appear throughout the year, with Beauty Insider sales events often bringing additional savings." } },
      ],
    },
  ],
};

export default function SephoraStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sephoraSchema) }} />
      <Suspense fallback={null}><SephoraCouponsContent /></Suspense>
    </>
  );
}
