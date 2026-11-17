import type { Metadata } from "next";
import { Suspense } from "react";
import VividSeatsCouponsContent from "./_components/StoreCouponsContent";
import { VIVID_SEATS_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Vivid Seats Coupon Code: 15% Off First Purchase | Nov 2026",
  },
  description:
    "Save with Vivid Seats Promo Code offers featuring 15% off first purchases and events under $100. Get a verified Vivid Seats Discount Code Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/vivid-seats-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/vivid-seats-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/vivid-seats-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/vivid-seats-promo-code",
      "x-default": "https://www.couponsbit.us/stores/vivid-seats-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/vivid-seats-promo-code",
    title: "Vivid Seats Coupon Code: 15% Off First Purchase | Nov 2026",
    description:
      "Save with Vivid Seats Promo Code offers featuring 15% off first purchases and events under $100. Get a verified Vivid Seats Discount Code Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788951742/vividset-logo_pzyiuj.webp",
        width: 1200,
        height: 630,
        alt: "Vivid Seats Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vivid Seats Coupon Code: 15% Off First Purchase | Nov 2026",
    description:
      "Save with Vivid Seats Promo Code offers featuring 15% off first purchases and events under $100. Get a verified Vivid Seats Discount Code Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788951742/vividset-logo_pzyiuj.webp"],
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
  other: { 'geo.region': 'US', 'geo.country': 'US', language: 'en-US' },
};

const storeOffers = VIVID_SEATS_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Vivid Seats ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/vivid-seats-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Vivid Seats", url: "https://www.vividseats.com" },
}));

const vividSeatsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/vivid-seats-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/vivid-seats-promo-code",
      name: "Vivid Seats Coupon Code: 15% Off First Purchase | Nov 2026",
      description:
        "Save with Vivid Seats Promo Code offers featuring 15% off first purchases and events under $100. Get a verified Vivid Seats Discount Code Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/vivid-seats-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/vivid-seats-promo-code#brand",
      name: "Vivid Seats",
      url: "https://www.vividseats.com",
      sameAs: ["https://www.facebook.com/vividseats", "https://twitter.com/vividseats"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/vivid-seats-promo-code#offerlist",
      name: "Vivid Seats Promo Codes & Coupon Codes",
      description: "Latest Vivid Seats promo codes and offers on event tickets.",
      url: "https://www.couponsbit.us/stores/vivid-seats-promo-code",
      numberOfItems: VIVID_SEATS_COUPONS.length,
      itemListElement: storeOffers.map((offer, i) => ({
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
      "@id": "https://www.couponsbit.us/stores/vivid-seats-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Vivid Seats Coupons", item: "https://www.couponsbit.us/stores/vivid-seats-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/vivid-seats-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Vivid Seats offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Vivid Seats may offer promotional codes, discounts, ticket deals, and other promotions. Availability and eligibility can vary by offer."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a Vivid Seats promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available Vivid Seats promo codes, coupon codes, discount offers, vouchers, and ticket promotions before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a Vivid Seats coupon code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose your event and tickets, proceed to checkout, and enter the applicable coupon code in the promotional-code field. Confirm that the offer has been applied before completing your purchase."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my Vivid Seats promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The code may have expired or may not apply to the tickets you've selected. Some promotions can have restrictions based on events, ticket types, customers, or other eligibility requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Vivid Seats discount code on any event?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Promotional codes may have specific terms and exclusions. Check the individual offer before relying on it."
          }
        },
        {
          "@type": "Question",
          "name": "What types of tickets does Vivid Seats sell?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vivid Seats offers tickets for concerts, professional and college sports, theater, comedy, festivals, and other live entertainment events."
          }
        },
        {
          "@type": "Question",
          "name": "Can I buy sports tickets through Vivid Seats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Sports fans can find tickets for professional and college sporting events, subject to availability."
          }
        },
        {
          "@type": "Question",
          "name": "Can I find concert tickets on Vivid Seats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Vivid Seats features tickets for concerts and live performances across different genres and locations."
          }
        },
        {
          "@type": "Question",
          "name": "Does Vivid Seats offer tickets for theater and comedy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Depending on the current event listings, shoppers can find theater productions, Broadway shows, comedy performances, and other live entertainment."
          }
        },
        {
          "@type": "Question",
          "name": "Is Vivid Seats useful for buying event gifts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tickets can make memorable gifts for birthdays, anniversaries, graduations, holidays, or other special occasions."
          }
        },
        {
          "@type": "Question",
          "name": "Does Vivid Seats have Black Friday deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vivid Seats may feature promotions around Black Friday and the holiday shopping season. Check current offers and their eligibility before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "Does Vivid Seats have Cyber Monday offers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Promotions may be available around Cyber Monday, although offers and terms can change."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to look for Vivid Seats deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There isn't one guaranteed period for every event. However, checking before major sporting seasons, summer concerts, holiday events, Black Friday, and Cyber Monday can help you discover available promotions."
          }
        },
        {
          "@type": "Question",
          "name": "How can I save money on Vivid Seats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start by checking CouponsBit for a Vivid Seats promo code, then compare available ticket promotions, discounts, and vouchers. Consider different event dates and seating options, and always review the complete checkout total before purchasing."
          }
        }
      ]
    },
  ],
};

export default function VividSeatsStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vividSeatsSchema) }} />
      <Suspense fallback={null}>
        <VividSeatsCouponsContent />
      </Suspense>
    </>
  );
}
