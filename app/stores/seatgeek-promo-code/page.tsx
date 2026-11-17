import type { Metadata } from "next";
import { Suspense } from "react";
import SeatgeekCouponsContent from "./_components/StoreCouponsContent";
import { SEATGEEK_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "SeatGeek Promo Code: 10% OFF Concert Tickets | Nov 2026",
  },
  description:
    "Use SeatGeek Promo Code and SeatGeek Discount Code to get $20 off first orders and 10% off concert tickets. Verified Nov 2026 ticket deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/seatgeek-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/seatgeek-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/seatgeek-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/seatgeek-promo-code",
      "x-default": "https://www.couponsbit.us/stores/seatgeek-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/seatgeek-promo-code",
    title: "SeatGeek Promo Code: 10% OFF Concert Tickets | Nov 2026",
    description:
      "Use SeatGeek Promo Code and SeatGeek Discount Code to get $20 off first orders and 10% off concert tickets. Verified Nov 2026 ticket deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788868873/seatgeek-logo_rhvjww.webp",
        width: 1200,
        height: 630,
        alt: "SeatGeek Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SeatGeek Promo Code: 10% OFF Concert Tickets | Nov 2026",
    description:
      "Use SeatGeek Promo Code and SeatGeek Discount Code to get $20 off first orders and 10% off concert tickets. Verified Nov 2026 ticket deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788868873/seatgeek-logo_rhvjww.webp"],
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

const storeOffers = SEATGEEK_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `SeatGeek ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/seatgeek-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "SeatGeek", url: "https://seatgeek.com" },
}));

const seatgeekSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/seatgeek-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/seatgeek-promo-code",
      name: "SeatGeek Promo Code: 10% OFF Concert Tickets | Nov 2026",
      description:
        "Use SeatGeek Promo Code and SeatGeek Discount Code to get $20 off first orders and 10% off concert tickets. Verified Nov 2026 ticket deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/seatgeek-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/seatgeek-promo-code#brand",
      name: "SeatGeek",
      url: "https://seatgeek.com",
      sameAs: ["https://www.facebook.com/seatgeek", "https://twitter.com/seatgeek"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/seatgeek-promo-code#offerlist",
      name: "SeatGeek Promo Codes & Coupon Codes",
      description: "Latest SeatGeek promo codes and offers on event tickets.",
      url: "https://www.couponsbit.us/stores/seatgeek-promo-code",
      numberOfItems: SEATGEEK_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/seatgeek-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "SeatGeek Coupons", item: "https://www.couponsbit.us/stores/seatgeek-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/seatgeek-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does SeatGeek offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. SeatGeek may offer promotional codes and other ticket-related promotions. Availability, eligibility, and terms can vary by offer."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a SeatGeek promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available SeatGeek promo codes, coupon codes, discount offers, vouchers, and ticket promotions before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a SeatGeek coupon code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Select your event and tickets, proceed to checkout, and enter the applicable coupon or promotional code in the designated field. Confirm that the offer has been applied before completing your purchase."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my SeatGeek promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The code may have expired, or your purchase may not meet the promotion's requirements. Some offers can also be limited to particular customers, events, ticket types, or purchase conditions."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a SeatGeek discount code on any event?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Promotional codes can have specific eligibility requirements. Check the terms of the individual offer before purchasing your tickets."
          }
        },
        {
          "@type": "Question",
          "name": "Does SeatGeek sell sports tickets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. SeatGeek offers tickets for various sporting events, including professional and college sports, subject to availability."
          }
        },
        {
          "@type": "Question",
          "name": "Can I buy concert tickets through SeatGeek?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Fans can browse available concert and live-music events and compare ticket listings."
          }
        },
        {
          "@type": "Question",
          "name": "Does SeatGeek have comedy and theater tickets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Depending on location and availability, SeatGeek features tickets for comedy shows, theater, performing arts, and other live entertainment."
          }
        },
        {
          "@type": "Question",
          "name": "Are SeatGeek ticket fees included in the advertised price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ticket pricing and fees can vary depending on the event and purchase. Always review the complete checkout total before completing your transaction."
          }
        },
        {
          "@type": "Question",
          "name": "Does SeatGeek have Black Friday deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SeatGeek may feature promotions around major shopping periods, although availability can change. Check current offers around Black Friday and Cyber Monday."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to look for SeatGeek deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There isn't one guaranteed time when every ticket will be cheapest. However, checking around major shopping periods, seasonal events, concert seasons, and major sporting occasions can help you discover available promotions."
          }
        },
        {
          "@type": "Question",
          "name": "How can I save money on SeatGeek tickets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start by checking CouponsBit for a SeatGeek promo code, then compare ticket listings, seating sections, event dates, and applicable promotions. Always consider the complete purchase total when deciding which ticket provides the best value."
          }
        }
      ]
    },
  ],
};

export default function SeatgeekStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seatgeekSchema) }} />
      <Suspense fallback={null}>
        <SeatgeekCouponsContent />
      </Suspense>
    </>
  );
}
