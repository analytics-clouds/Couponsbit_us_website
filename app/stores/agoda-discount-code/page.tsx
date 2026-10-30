import type { Metadata } from "next";
import AgodaCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Agoda Discount Code: Up to 50% Off + Hotels $5/Night | Oct 2026",
  },
  description:
    "Find the latest Agoda discount codes and travel deals for Oct 2026. Save up to 50% on attractions, book USA hotels from $5/night, and enjoy discounts on NYC, Miami, Anaheim, Chicago, and more destinations.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/agoda-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/agoda-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/agoda-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/agoda-discount-code",
      "en-PK": "https://www.couponsbit.us/stores/agoda-discount-code",
      "x-default": "https://www.couponsbit.us/stores/agoda-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/agoda-discount-code",
    title: "Agoda Discount Code: Up to 50% Off + Hotels $5/Night | Oct 2026",
    description:
      "Find the latest Agoda discount codes and travel deals for Oct 2026. Save up to 50% on attractions, book USA hotels from $5/night, and enjoy discounts on NYC, Miami, Anaheim, Chicago, and more destinations.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN", "en_PK"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg",
        width: 1200,
        height: 630,
        alt: "Agoda Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Agoda Discount Code: Up to 50% Off + Hotels $5/Night | Oct 2026",
    description:
      "Find the latest Agoda discount codes and travel deals for Oct 2026. Save up to 50% on attractions, book USA hotels from $5/night, and enjoy discounts on NYC, Miami, Anaheim, Chicago, and more destinations.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg"],
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

const agodaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/agoda-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/agoda-discount-code",
      name: "Agoda Discount Code: Up to 50% Off + Hotels $5/Night | Oct 2026",
      description:
        "Find the latest Agoda discount codes and travel deals for Oct 2026. Save up to 50% on attractions, book USA hotels from $5/night, and enjoy discounts on NYC, Miami, Anaheim, Chicago, and more destinations.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-09-21",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/agoda-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/agoda-discount-code#offerlist",
      name: "Agoda Coupon Codes & Promo Codes",
      description:
        "Find the latest Agoda discount codes and travel deals for Oct 2026. Save up to 50% on attractions, book USA hotels from $5/night, and enjoy discounts on NYC, Miami, Anaheim, Chicago, and more destinations.",
      url: "https://www.couponsbit.us/stores/agoda-discount-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/agoda-discount-code",
          seller: { "@type": "Organization", name: "Agoda", url: "https://www.agoda.com" },
        },
      })),
    },

    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://www.couponsbit.us/#organization",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://www.couponsbit.us",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp",
        width: 200,
        height: 60,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: "English",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/agoda-discount-code#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.couponsbit.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Stores",
          item: "https://www.couponsbit.us/stores",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Agoda Coupons",
          item: "https://www.couponsbit.us/stores/agoda-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/agoda-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Agoda offer coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Agoda frequently offers promotional discounts, hotel deals, and limited-time offers for both new and existing customers.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Agoda promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Agoda coupon codes and travel deals directly on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book flights on Agoda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Agoda allows travelers to book flights alongside hotels for added convenience and savings.",
          },
        },
        {
          "@type": "Question",
          name: "Does Agoda offer free cancellation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many Agoda bookings include free cancellation options — check the specific property or booking terms before confirming.",
          },
        },
        {
          "@type": "Question",
          name: "Does Agoda offer deals for vacation rentals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Agoda provides deals on vacation rentals, apartments, and villas in addition to hotels.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers.",
          },
        },
      ],
    },
  ],
};

export default function AgodaStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(agodaSchema),
        }}
      />
      <AgodaCouponsContent />
    </>
  );
}