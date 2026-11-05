import type { Metadata } from "next";
import { Suspense } from "react";
import Helium10CouponsContent from "./_components/StoreCouponsContent";
import { HELIUM10_COUPONS } from "./_components/offers";

const TITLE = "Helium 10 Discount Code: Get 50% OFF + Extra 25% OFF | Nov 2026";
const DESCRIPTION =
  "Get the latest Helium 10 Discount Code and Helium 10 Promo Code for November 2026. Save 25% OFF with ACLOUDS10 or enjoy up to 50% OFF eligible plans.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/helium10-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/helium10-discount-code",
      "en-CN": "https://www.couponsbit.us/stores/helium10-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/helium10-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/helium10-discount-code",
      "en-DE": "https://www.couponsbit.us/stores/helium10-discount-code",
      "x-default": "https://www.couponsbit.us/stores/helium10-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/helium10-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789640583/helium_10_logo_gt6opp.webp",
        width: 1200,
        height: 630,
        alt: "Helium 10 Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789640583/helium_10_logo_gt6opp.webp"],
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

const helium10Offers = HELIUM10_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Helium 10 ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/helium10-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Helium 10", url: "https://www.helium10.com" },
}));

const helium10Schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/helium10-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/helium10-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/helium10-discount-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/helium10-discount-code#brand",
      name: "Helium 10",
      url: "https://www.helium10.com",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/helium10-discount-code#offerlist",
      name: "Helium 10 Discount Codes & Coupon Codes",
      description: "Latest Helium 10 discount codes and offers on Amazon seller software.",
      url: "https://www.couponsbit.us/stores/helium10-discount-code",
      numberOfItems: HELIUM10_COUPONS.length,
      itemListElement: helium10Offers.map((offer, index) => ({
        "@type": "ListItem",
        position: index + 1,
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
      "@id": "https://www.couponsbit.us/stores/helium10-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Helium 10 Coupons", item: "https://www.couponsbit.us/stores/helium10-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/helium10-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Helium 10 offer discount codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Helium 10 offers promotional discounts through its website and partner campaigns. The available discount, plan eligibility, and promotional period can vary.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Helium 10 discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check CouponsBit for available Helium 10 discount codes, coupon codes, and plan promotions before subscribing.",
          },
        },
        {
          "@type": "Question",
          name: "How do I use a Helium 10 discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Choose an eligible Helium 10 plan, proceed through sign-up, and enter the promotional code in the designated promo-code field when available. Confirm the discount has been applied before completing your subscription.",
          },
        },
        {
          "@type": "Question",
          name: "Why isn't my Helium 10 discount code working?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The promotion may have expired, or your order may not meet its requirements. Some offers can be limited to selected plans or new customers.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a Helium 10 discount code on any plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Promotional codes can be limited to specific plans, billing periods, or customer types. Always check the terms of the individual offer before subscribing.",
          },
        },
        {
          "@type": "Question",
          name: "What is Helium 10 used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Helium 10 provides tools for product research, keyword research, listing optimization, advertising, inventory management, analytics, and other e-commerce operations across marketplaces such as Amazon, Walmart, and TikTok Shop.",
          },
        },
        {
          "@type": "Question",
          name: "Does Helium 10 work with Amazon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Amazon is one of Helium 10's primary supported marketplaces, with tools covering product research, keywords, listings, advertising, inventory, and other seller operations.",
          },
        },
        {
          "@type": "Question",
          name: "Does Helium 10 work with Walmart?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Helium 10 currently provides solutions for Walmart Marketplace alongside its Amazon and TikTok Shop offerings.",
          },
        },
        {
          "@type": "Question",
          name: "Does Helium 10 work with TikTok Shop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Helium 10 offers TikTok Shop tools for product research, listing conversion, influencer discovery, profitability analysis, and other seller workflows.",
          },
        },
        {
          "@type": "Question",
          name: "Does Helium 10 have a free plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Helium 10 currently provides a Free option with limited access (including Chrome extension utilities), alongside paid plans such as Platinum, Diamond, and Enterprise.",
          },
        },
        {
          "@type": "Question",
          name: "Does Helium 10 offer annual plan discounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Helium 10 offers annual billing for eligible plans and advertises savings compared to monthly billing.",
          },
        },
        {
          "@type": "Question",
          name: "Is Helium 10 useful for new Amazon sellers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can be useful for new sellers who need tools for product research, keyword research, listing optimization, and education. Helium 10 also provides training resources such as Freedom Ticket and Ads Academy.",
          },
        },
        {
          "@type": "Question",
          name: "Does Helium 10 have a student discount?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Helium 10 may run promotions for students and new sellers from time to time. Check current offers for eligibility.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to look for Helium 10 deals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Promotions can appear throughout the year, with Black Friday and Cyber Monday often bringing additional subscription discounts.",
          },
        },
      ],
    },
  ],
};

export default function Helium10StorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(helium10Schema) }} />
      <Suspense fallback={null}>
        <Helium10CouponsContent />
      </Suspense>
    </>
  );
}
