import type { Metadata } from "next";
import { Suspense } from "react";
import BlueCypressCouponsContent from "./_components/StoreCouponsContent";
import { BLUE_CYPRESS_COUPONS } from "./_components/offers";

const TITLE = "Blue Cypress Promo Code: 20% Off + Polos from $110 | Nov 2026";
const DESCRIPTION = "Use the latest Blue Cypress promo code and discount code to get 20% off your first order or shop polos from $110. Verified offers for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/blue-cypress-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/blue-cypress-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/blue-cypress-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/blue-cypress-discount-code",
      "x-default": "https://www.couponsbit.us/stores/blue-cypress-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/blue-cypress-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/blue-cypress-logo_ax2m7c.webp",
        width: 1200,
        height: 630,
        alt: "Blue Cypress Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1786949027/blue-cypress-logo_ax2m7c.webp"],
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

  other: {
    "geo.region": "US",
    "geo.country": "US",
    language: "en-US",
  },
};

const blueCypressSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/blue-cypress-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/blue-cypress-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/blue-cypress-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/blue-cypress-discount-code#offerlist",
      name: "Blue Cypress Discount Codes & Coupon Codes",
      description: "Latest Blue Cypress discount codes and offers for polos, hoodies, quarter-zips, headwear and belts.",
      url: "https://www.couponsbit.us/stores/blue-cypress-discount-code",
      numberOfItems: BLUE_CYPRESS_COUPONS.length,
      itemListElement: BLUE_CYPRESS_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/blue-cypress-discount-code",
          seller: { "@type": "Organization", name: "Blue Cypress", url: "https://www.bluecypress.com" },
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
      "@id": "https://www.couponsbit.us/stores/blue-cypress-discount-code#brand",
      name: "Blue Cypress",
      url: "https://www.bluecypress.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/blue-cypress-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Blue Cypress Coupons", item: "https://www.couponsbit.us/stores/blue-cypress-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/blue-cypress-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Blue Cypress offer a discount code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Blue Cypress offers sale pricing and promotional opportunities throughout the year. Check CouponsBit for currently available offers before placing your order."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a Blue Cypress promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CouponsBit can help you find available Blue Cypress promo codes and other promotional offers in one place."
      }
    },
    {
      "@type": "Question",
      "name": "What does Blue Cypress sell?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Blue Cypress sells golf and lifestyle apparel, including polos, quarter-zips, hoodies, seasonal clothing, and accessories."
      }
    },
    {
      "@type": "Question",
      "name": "Does Blue Cypress sell golf polos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Polos are one of Blue Cypress's core categories. The brand offers solid, striped, printed, and seasonal designs."
      }
    },
    {
      "@type": "Question",
      "name": "How much do Blue Cypress polos cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prices vary depending on the collection and style. Several Essential Stripe polos are currently priced at $89.95, reduced from $109.95, while other current polo styles are listed at $110."
      }
    },
    {
      "@type": "Question",
      "name": "How much is the Blue Cypress Isaac Quarter-Zip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Isaac Quarter-Zip is currently listed at $124.95. It is made with 89% recycled polyester and 11% spandex and is available in several colors."
      }
    },
    {
      "@type": "Question",
      "name": "Does Blue Cypress have a sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Blue Cypress currently has selected products at reduced prices, including several Essential Stripe polos. Sale availability can change as inventory and seasonal collections are updated."
      }
    },
    {
      "@type": "Question",
      "name": "What is Blue Cypress known for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Blue Cypress is known for golf-inspired apparel that combines performance-focused materials with a polished lifestyle aesthetic. Its clothing is designed to work both on and off the course."
      }
    },
    {
      "@type": "Question",
      "name": "Is Blue Cypress clothing only for golfers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. While golf is an important part of the brand's identity, Blue Cypress positions its clothing for the course, office, and everyday life."
      }
    },
    {
      "@type": "Question",
      "name": "Is CouponsBit free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CouponsBit is free to use. You can browse available Blue Cypress offers and other shopping deals without paying a fee."
      }
    }
  ]
},
  ],
};

export default function BlueCypressStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blueCypressSchema) }} />
      <Suspense fallback={null}>
        <BlueCypressCouponsContent />
      </Suspense>
    </>
  );
}
