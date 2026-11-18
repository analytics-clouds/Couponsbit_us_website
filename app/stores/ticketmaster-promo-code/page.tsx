import type { Metadata } from "next";
import { Suspense } from "react";
import TicketmasterCouponsContent from "./_components/StoreCouponsContent";
import { TICKETMASTER_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Ticketmaster Promo Code: Up to 65% OFF Tickets | Nov 2026",
  },
  description:
    "Ticketmaster Promo Code saves up to 65% on event tickets and 20% off purchases. Find Ticketmaster Discount Code deals with verified Nov 2026 savings.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/ticketmaster-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/ticketmaster-promo-code",
      "x-default": "https://www.couponsbit.us/stores/ticketmaster-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/ticketmaster-promo-code",
    title: "Ticketmaster Promo Code: Up to 65% OFF Tickets | Nov 2026",
    description:
      "Ticketmaster Promo Code saves up to 65% on event tickets and 20% off purchases. Find Ticketmaster Discount Code deals with verified Nov 2026 savings.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793614081/ticketmaster-logo_boxlia.webp",
        width: 1200,
        height: 630,
        alt: "Ticketmaster Promo Code & Discount Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ticketmaster Promo Code: Up to 65% OFF Tickets | Nov 2026",
    description:
      "Ticketmaster Promo Code saves up to 65% on event tickets and 20% off purchases. Find Ticketmaster Discount Code deals with verified Nov 2026 savings.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793614081/ticketmaster-logo_boxlia.webp"],
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

const storeOffers = TICKETMASTER_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Ticketmaster ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/ticketmaster-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Ticketmaster", url: "https://www.ticketmaster.com" },
}));

const ticketmasterSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/ticketmaster-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/ticketmaster-promo-code",
      name: "Ticketmaster Promo Code: Up to 65% OFF Tickets | Nov 2026",
      description:
        "Ticketmaster Promo Code saves up to 65% on event tickets and 20% off purchases. Find Ticketmaster Discount Code deals with verified Nov 2026 savings.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-02",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/ticketmaster-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/ticketmaster-promo-code#brand",
      name: "Ticketmaster",
      url: "https://www.ticketmaster.com",
      sameAs: ["https://www.facebook.com/Ticketmaster", "https://twitter.com/Ticketmaster"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/ticketmaster-promo-code#offerlist",
      name: "Ticketmaster Promo Codes & Discount Codes",
      description: "Latest Ticketmaster promo codes and ticket deals.",
      url: "https://www.couponsbit.us/stores/ticketmaster-promo-code",
      numberOfItems: TICKETMASTER_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/ticketmaster-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Ticketmaster Coupons", item: "https://www.couponsbit.us/stores/ticketmaster-promo-code" },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/ticketmaster-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I find a Ticketmaster promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check the Ticketmaster page on CouponsBit for available promo codes and offers. Review each offer's terms to confirm that it applies to your selected event and tickets."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Ticketmaster promo code on resale tickets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Ticketmaster states that promo codes, discount codes, and passcodes cannot be applied to resale ticket purchases."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a promo code and a presale code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A promo code is entered during checkout to reduce the eligible order total. A presale passcode is entered before selecting tickets to unlock access to a special ticket sale."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my Ticketmaster promo code not working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A code may not work if it has expired, the selected tickets are not eligible, the offer's conditions have not been met, or the purchase involves resale tickets. Check the offer terms and confirm that you are entering the code in the correct section."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply a promo code after purchasing tickets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Ticketmaster says codes cannot be applied to existing orders. Make sure you enter an eligible code before completing payment."
          }
        },
        {
          "@type": "Question",
          "name": "Does Ticketmaster offer presale tickets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Depending on the event, presales may be available through artists, sponsors, fan clubs, or other partners. Some require registration or a special code, and access does not guarantee ticket availability."
          }
        }
      ]
    },
  ],
};

export default function TicketmasterStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ticketmasterSchema) }} />
      <Suspense fallback={null}>
        <TicketmasterCouponsContent />
      </Suspense>
    </>
  );
}
