import type { Metadata } from "next";
import BluehostCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Bluehost Discount Code: Hosting From $1.99/mo + 69% OFF | Oct 2026",
  },
  description:
    "Find the latest Bluehost discount codes and hosting deals for Oct 2026. Get WordPress hosting from $1.99/month, save up to 69% on hosting plans, enjoy 50% off Business Essentials, VPS savings and more.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/bluehost-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/bluehost-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/bluehost-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/bluehost-discount-code",
      "x-default": "https://www.couponsbit.us/stores/bluehost-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/bluehost-discount-code",
    title: "Bluehost Discount Code: Hosting From $1.99/mo + 69% OFF | Oct 2026",
    description:
      "Find the latest Bluehost discount codes and hosting deals for Oct 2026. Get WordPress hosting from $1.99/month, save up to 69% on hosting plans, enjoy 50% off Business Essentials, VPS savings and more.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp",
        width: 1200,
        height: 630,
        alt: "Bluehost Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bluehost Discount Code: Hosting From $1.99/mo + 69% OFF | Oct 2026",
    description:
      "Find the latest Bluehost discount codes and hosting deals for Oct 2026. Get WordPress hosting from $1.99/month, save up to 69% on hosting plans, enjoy 50% off Business Essentials, VPS savings and more.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp"],
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

const bluehostSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/bluehost-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/bluehost-discount-code",
      name: "Bluehost Discount Code: Hosting From $1.99/mo + 69% OFF | Oct 2026",
      description:
        "Find the latest Bluehost discount codes and hosting deals for Oct 2026. Get WordPress hosting from $1.99/month, save up to 69% on hosting plans, enjoy 50% off Business Essentials, VPS savings and more.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-09-21",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/bluehost-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/bluehost-discount-code#offerlist",
      name: "Bluehost Coupon Codes & Promo Codes",
      description:
        "Latest verified Bluehost coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/bluehost-discount-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/bluehost-discount-code",
          seller: { "@type": "Organization", name: "Bluehost", url: "https://www.bluehost.com" },
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
      "@id": "https://www.couponsbit.us/stores/bluehost-discount-code#breadcrumb",
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
          name: "Bluehost Coupons",
          item: "https://www.couponsbit.us/stores/bluehost-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/bluehost-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Bluehost offer coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Bluehost frequently offers promotional discounts, hosting deals, and limited-time offers for both new and existing customers.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Bluehost promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Bluehost coupon codes and hosting deals directly on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Is Bluehost good for WordPress websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Bluehost is widely known for its WordPress hosting solutions and beginner-friendly WordPress tools.",
          },
        },
        {
          "@type": "Question",
          name: "Can I register a domain through Bluehost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Bluehost offers domain registration and management services alongside its hosting products.",
          },
        },
        {
          "@type": "Question",
          name: "Does Bluehost offer hosting for businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Bluehost provides hosting solutions suitable for startups, small businesses, growing companies, and online stores.",
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

export default function BluehostStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bluehostSchema),
        }}
      />
      <BluehostCouponsContent />
    </>
  );
}