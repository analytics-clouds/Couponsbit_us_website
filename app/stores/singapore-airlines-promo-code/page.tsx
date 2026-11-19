import type { Metadata } from "next";
import SingaporeAirlinesCouponsContent from "./_components/StoreCouponsContent";
import { SINGAPORE_AIRLINES_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Singapore Airlines Promo Code: Get 30% Off Awards | Nov 2026",
  },
  description:
    "Singapore Airlines Promo Code and Singapore Airlines Discount Code offer 30% off Saver Awards plus 10% student fares. Get verified Nov 2026 deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/singapore-airlines-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/singapore-airlines-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/singapore-airlines-promo-code",
      "en-SG": "https://www.couponsbit.us/stores/singapore-airlines-promo-code",
      "x-default": "https://www.couponsbit.us/stores/singapore-airlines-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/singapore-airlines-promo-code",
    title: "Singapore Airlines Promo Code: Get 30% Off Awards | Nov 2026",
    description:
      "Singapore Airlines Promo Code and Singapore Airlines Discount Code offer 30% off Saver Awards plus 10% student fares. Get verified Nov 2026 deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793169709/Singapore_Airlines_logo_an5s0z.webp",
        width: 1200,
        height: 630,
        alt: "Singapore Airlines Promo Code & Discount Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Singapore Airlines Promo Code: Get 30% Off Awards | Nov 2026",
    description:
      "Singapore Airlines Promo Code and Singapore Airlines Discount Code offer 30% off Saver Awards plus 10% student fares. Get verified Nov 2026 deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793169709/Singapore_Airlines_logo_an5s0z.webp"],
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

const singaporeAirlinesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/singapore-airlines-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/singapore-airlines-promo-code",
      name: "Singapore Airlines Promo Code: Get 30% Off Awards | Nov 2026",
      description:
        "Singapore Airlines Promo Code and Singapore Airlines Discount Code offer 30% off Saver Awards plus 10% student fares. Get verified Nov 2026 deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/singapore-airlines-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/singapore-airlines-promo-code#offerlist",
      name: "Singapore Airlines Promo Codes & Discount Codes",
      description: "Latest Singapore Airlines promo codes, discount codes, and flight deals.",
      url: "https://www.couponsbit.us/stores/singapore-airlines-promo-code",
      numberOfItems: SINGAPORE_AIRLINES_COUPONS.length,
      itemListElement: SINGAPORE_AIRLINES_COUPONS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description || o.desc,
          url: "https://www.couponsbit.us/stores/singapore-airlines-promo-code",
          seller: { "@type": "Organization", name: "Singapore Airlines", url: "https://www.singaporeair.com" },
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
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp",
        width: 200,
        height: 60,
      },
      contactPoint: { "@type": "ContactPoint", contactType: "Customer Support", availableLanguage: "English" },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/singapore-airlines-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Singapore Airlines Coupons", item: "https://www.couponsbit.us/stores/singapore-airlines-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/singapore-airlines-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I find a Singapore Airlines promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit CouponsBit to check available Singapore Airlines promo codes and travel deals. You can also explore the airline's official promotions page for current offers and eligibility requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Does Singapore Airlines offer flight discounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Singapore Airlines publishes promotional fares and partner offers from time to time. Availability depends on the destination, booking period, travel dates, and offer conditions."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my Singapore Airlines promo code not working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your code may have expired, may not apply to your selected route, or may require a particular payment card or cabin class. Check the offer's terms and confirm that your itinerary meets its requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Singapore Airlines promo code for international flights?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some promotions apply to selected international routes, while others are restricted to specific departure markets. Review the eligible destinations and travel conditions before booking."
          }
        },
        {
          "@type": "Question",
          "name": "Can I earn KrisFlyer miles on discounted tickets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eligible promotional fares can earn KrisFlyer miles. The number of miles depends on the fare type, booking class, distance, and applicable membership conditions."
          }
        }
      ]
    },
  ],
};

export default function SingaporeAirlinesStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(singaporeAirlinesSchema) }}
      />
      <SingaporeAirlinesCouponsContent />
    </>
  );
}
