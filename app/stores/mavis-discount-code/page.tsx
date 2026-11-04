import type { Metadata } from "next";
import MavisCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Mavis Discount Code: Save Up to $250 OFF + $160 OFF | Nov 2026",
  },
  description:
    "Get the latest Mavis Discount Code for November 2026 and save up to $250 OFF select tire sets or enjoy up to $160 OFF eligible 4-tire purchases.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/mavis-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/mavis-discount-code",
      "x-default": "https://www.couponsbit.us/stores/mavis-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/mavis-discount-code",
    title: "Mavis Discount Code: Save Up to $250 OFF + $160 OFF | Nov 2026",
    description:
      "Get the latest Mavis Discount Code for November 2026 and save up to $250 OFF select tire sets or enjoy up to $160 OFF eligible 4-tire purchases.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/mavis-logo_fhmyy8.webp",
        width: 1200,
        height: 630,
        alt: "Mavis Discount Code & Coupons – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mavis Discount Code: Save Up to $250 OFF + $160 OFF | Nov 2026",
    description:
      "Get the latest Mavis Discount Code for November 2026 and save up to $250 OFF select tire sets or enjoy up to $160 OFF eligible 4-tire purchases.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793688836/mavis-logo_fhmyy8.webp"],
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

const mavisSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/mavis-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/mavis-discount-code",
      name: "Mavis Discount Code: Save Up to $250 OFF + $160 OFF | Nov 2026",
      description:
        "Get the latest Mavis Discount Code for November 2026 and save up to $250 OFF select tire sets or enjoy up to $160 OFF eligible 4-tire purchases.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-03",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/mavis-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/mavis-discount-code#offerlist",
      name: "Mavis Discount Codes & Coupons",
      description: "Latest Mavis discount codes and auto service offers.",
      url: "https://www.couponsbit.us/stores/mavis-discount-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/mavis-discount-code",
          seller: { "@type": "Organization", name: "Mavis", url: "https://www.mavis.com" },
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
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/mavis-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Mavis Coupons", item: "https://www.couponsbit.us/stores/mavis-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/mavis-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I find a Mavis discount code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit the Mavis page on CouponsBit to check available discount codes and service coupons. You can also check Mavis's official website for current promotional offers."
          }
        },
        {
          "@type": "Question",
          "name": "Does Mavis offer discounts on tires?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Mavis regularly offers discounts on tire purchases, including $50 off when you buy a set of 4 qualifying tires. Check CouponsBit or the Mavis website for current tire deals."
          }
        },
        {
          "@type": "Question",
          "name": "Does Mavis offer oil change coupons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Mavis offers oil change service coupons that can save you money on conventional and synthetic oil change services. Check CouponsBit for the latest available offers."
          }
        },
        {
          "@type": "Question",
          "name": "Can I book a Mavis appointment online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Mavis allows customers to schedule tire, oil change, brake, and alignment services online through its website. You can find a nearby location and book a convenient appointment time."
          }
        },
        {
          "@type": "Question",
          "name": "Does Mavis offer free tire rotation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Mavis may offer free tire rotation and balance with qualifying tire purchases. Check the current offer terms on CouponsBit or the Mavis website for eligibility details."
          }
        },
        {
          "@type": "Question",
          "name": "What brands of tires does Mavis carry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mavis carries a wide selection of major tire brands including Michelin, Goodyear, Bridgestone, Continental, Pirelli, and more. Visit a Mavis location or check online for available brands and sizes."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I redeem a Mavis discount code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can redeem Mavis discount coupons when booking online or at the service centre. Present the coupon at the time of your appointment or enter the code during online booking."
          }
        }
      ]
    },
  ],
};

export default function MavisStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mavisSchema) }} />
      <MavisCouponsContent />
    </>
  );
}
