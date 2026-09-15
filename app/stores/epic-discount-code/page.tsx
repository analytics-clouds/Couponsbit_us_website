import type { Metadata } from "next";
import EpicCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "Epic Discount Code: Save Extra 25% OFF + 7-Day Free Trial | Sept 2026",
  },
  description:
    "Find the latest Epic discount code and Epic promo code at Maxiku Offers. Save an extra 25% OFF the Family annual plan, enjoy a 7-day free trial, and access 40,000+ kids' books, videos, and audiobooks.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/epic-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/epic-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/epic-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/epic-discount-code",
      "x-default": "https://www.couponsbit.us/stores/epic-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/epic-discount-code",
    title: "Epic Discount Code: Save Extra 25% OFF + 7-Day Free Trial | Sept 2026",
    description:
      "Find the latest Epic discount code and Epic promo code at Maxiku Offers. Save an extra 25% OFF the Family annual plan, enjoy a 7-day free trial, and access 40,000+ kids' books, videos, and audiobooks.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789032950/epic-logo_kxo5y0.webp",
        width: 1200,
        height: 630,
        alt: "Epic Games Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Epic Discount Code: Save Extra 25% OFF + 7-Day Free Trial | Sept 2026",
    description:
      "Find the latest Epic discount code and Epic promo code at Maxiku Offers. Save an extra 25% OFF the Family annual plan, enjoy a 7-day free trial, and access 40,000+ kids' books, videos, and audiobooks.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789032950/epic-logo_kxo5y0.webp"],
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
};

const epicSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/epic-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/epic-discount-code",
      name: "Epic Discount Code: Save Extra 25% OFF + 7-Day Free Trial | Sept 2026",
      description:
        "Find the latest Epic discount code and Epic promo code at Maxiku Offers. Save an extra 25% OFF the Family annual plan, enjoy a 7-day free trial, and access 40,000+ kids' books, videos, and audiobooks.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/epic-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/epic-discount-code#offerlist",
      name: "Epic Games Discount Codes & Coupon Codes",
      description: "Latest Epic Games discount codes and offers on PC game titles.",
      url: "https://www.couponsbit.us/stores/epic-discount-code",
      numberOfItems: 6,
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "Offer", name: "Epic Discount Code – Extra 25% OFF Annual Family Plan", description: "Get an Extra 25% OFF the Epic Family annual membership in the USA.", url: "https://www.couponsbit.us/stores/epic-discount-code", seller: { "@type": "Organization", name: "Epic Games", url: "https://store.epicgames.com" } } },
        { "@type": "ListItem", position: 2, item: { "@type": "Offer", name: "Epic Discount Code – Family Free Trial with 7-Day Trial", description: "Explore Epic’s digital library with 40,000+ high-quality books, videos and audiobooks for kids across the USA.", url: "https://www.couponsbit.us/stores/epic-discount-code", seller: { "@type": "Organization", name: "Epic Games", url: "https://store.epicgames.com" } } },
        { "@type": "ListItem", position: 3, item: { "@type": "Offer", name: "Epic Discount Code – Family Monthly Plan for $13.99/Month", description: "Choose Epic Family’s flexible monthly membership for $13.99/month in the USA.", url: "https://www.couponsbit.us/stores/epic-discount-code", seller: { "@type": "Organization", name: "Epic Games", url: "https://store.epicgames.com" } } },
        { "@type": "ListItem", position: 4, item: { "@type": "Offer", name: "Epic Discount Code – 12-Month Subscription for $84.99", description: "Get a 12-month Epic subscription for $84.99 and give kids a year of reading and discovery.", url: "https://www.couponsbit.us/stores/epic-discount-code", seller: { "@type": "Organization", name: "Epic Games", url: "https://store.epicgames.com" } } },
        { "@type": "ListItem", position: 5, item: { "@type": "Offer", name: "Epic 12-Month Subscription – $84.99", description: "Enjoy a full year of access to Epic’s digital library for kids for $84.99.", url: "https://www.couponsbit.us/stores/epic-discount-code", seller: { "@type": "Organization", name: "Epic Games", url: "https://store.epicgames.com" } } },
        { "@type": "ListItem", position: 6, item: { "@type": "Offer", name: "Epic 3-Month Subscription – $39.99", description: "Get three months of Epic access for $39.99 with the 3-month subscription.", url: "https://www.couponsbit.us/stores/epic-discount-code", seller: { "@type": "Organization", name: "Epic Games", url: "https://store.epicgames.com" } } },
      ],
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
      "@id": "https://www.couponsbit.us/stores/epic-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Epic Games Coupons", item: "https://www.couponsbit.us/stores/epic-discount-code" },
      ],
    },

    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/epic-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Epic offer promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Epic periodically offers promotional campaigns, free trials, and other subscription offers. Availability and eligibility can change, so check CouponsBit and Epic's current terms before subscribing."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find an Epic promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for current Epic promo codes, coupon offers, and subscription deals before signing up."
      }
    },
    {
      "@type": "Question",
      "name": "Does Epic have a free trial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Epic currently promotes a free trial for families. The length and terms of the trial can change, so check the current offer before signing up."
      }
    },
    {
      "@type": "Question",
      "name": "Is Epic free for teachers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Epic School currently provides free access for educators and students during designated school hours on weekdays."
      }
    },
    {
      "@type": "Question",
      "name": "How many books does Epic have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Epic currently promotes a library of more than 40,000 books, audiobooks, and learning videos from more than 250 publishers."
      }
    },
    {
      "@type": "Question",
      "name": "What age is Epic for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Epic is designed primarily for children 12 and under, with content available across different ages and reading levels."
      }
    },
    {
      "@type": "Question",
      "name": "Does Epic have audiobooks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Epic includes audiobooks and Read-To-Me books, giving children options to listen to stories as well as read them independently."
      }
    },
    {
      "@type": "Question",
      "name": "Does Epic have educational videos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Epic's library includes educational videos covering subjects and activities such as science, math, DIY, yoga, and other learning topics."
      }
    },
    {
      "@type": "Question",
      "name": "Can parents track what their children read on Epic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Epic Family includes a parent dashboard where parents can see what their children are reading and suggest books."
      }
    },
    {
      "@type": "Question",
      "name": "Is Epic safe for kids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Epic describes its platform as ad-free, curated by experts, and designed specifically for children. It also provides parent controls to help families guide their children's reading experience."
      }
    },
    {
      "@type": "Question",
      "name": "Can children read Epic books offline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Epic Family promotes offline reading as one of its features, allowing children to continue reading outside an internet connection."
      }
    }
  ]
},
  ],
};




export default function EpicStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(epicSchema) }} />
      <EpicCouponsContent />
    </>
  );
}
