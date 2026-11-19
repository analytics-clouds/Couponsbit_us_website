import type { Metadata } from "next";
import { Suspense } from "react";
import EpicCouponsContent from "./_components/StoreCouponsContent";
import { EPIC_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Epic Promo Code: Up to 30% Off Adventure Gear | Nov 2026",
  },
  description:
    "Use an Epic Promo Code and Epic Discount Code to save up to 30% with code B30 and 20% with code D on adventure gear. Verified Nov 2026 offers. Save now.",

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
    title: "Epic Promo Code: Up to 30% Off Adventure Gear | Nov 2026",
    description:
      "Use an Epic Promo Code and Epic Discount Code to save up to 30% with code B30 and 20% with code D on adventure gear. Verified Nov 2026 offers. Save now.",
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
    title: "Epic Promo Code: Up to 30% Off Adventure Gear | Nov 2026",
    description:
      "Use an Epic Promo Code and Epic Discount Code to save up to 30% with code B30 and 20% with code D on adventure gear. Verified Nov 2026 offers. Save now.",
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
  other: { "geo.region": "US", "geo.country": "US", language: "en-US" },
};

const epicSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/epic-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/epic-discount-code",
      name: "Epic Promo Code: Up to 30% Off Adventure Gear | Nov 2026",
      description:
        "Use an Epic Promo Code and Epic Discount Code to save up to 30% with code B30 and 20% with code D on adventure gear. Verified Nov 2026 offers. Save now.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/epic-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/epic-discount-code#offerlist",
      name: "Epic Games Discount Codes & Coupon Codes",
      description: "Latest Epic Games discount codes and offers on PC game titles.",
      url: "https://www.couponsbit.us/stores/epic-discount-code",
      numberOfItems: EPIC_COUPONS.length,
      itemListElement: EPIC_COUPONS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/epic-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Epic Games", url: "https://store.epicgames.com" },
        },
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
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/epic-discount-code#brand",
      name: "Epic Games",
      url: "https://store.epicgames.com",
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
      <Suspense fallback={null}><EpicCouponsContent /></Suspense>
    </>
  );
}
