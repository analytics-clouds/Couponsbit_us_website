import type { Metadata } from "next";
import { Suspense } from "react";
import SpiritHalloweenCouponsContent from "./_components/StoreCouponsContent";
import { SPIRIT_HALLOWEEN_COUPONS } from "./_components/offers";

const TITLE = " Spirit halloweens Promo Code - 36 % off Code | November 2026";
const DESCRIPTION = "Get the 4 Ft 6 In Scary Sitting Scarecrow Animatronic for only $119.99 (Regular Price $189.99) | November 2026";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
      "x-default": "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699426/spirti-logo_x4nbor.webp",
        width: 1200,
        height: 630,
        alt: "Spirit Halloween Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699426/spirti-logo_x4nbor.webp"],
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

const spiritHalloweenSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/spirit-halloween-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
      name: " Spirit halloweens Promo Code - 36 % off Code | November 2026",
      description:
        "Get the 4 Ft 6 In Scary Sitting Scarecrow Animatronic for only $119.99 (Regular Price $189.99) | November 2026",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/spirit-halloween-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/spirit-halloween-discount-code#offerlist",
      name: "Spirit Halloween Coupon Codes & Promo Codes",
      description:
        "Latest verified Spirit Halloween coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
      numberOfItems: SPIRIT_HALLOWEEN_COUPONS.length,
      itemListElement: SPIRIT_HALLOWEEN_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
          seller: {
            "@type": "Organization",
            name: "Spirit Halloween",
            url: "https://www.spirithalloween.com",
          },
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
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/spirit-halloween-discount-code#brand",
      name: "Spirit Halloween",
      url: "https://www.spirithalloween.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/spirit-halloween-discount-code#breadcrumb",
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
          name: "Spirit Halloween Coupons",
          item: "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/spirit-halloween-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Spirit Halloween?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spirit Halloween is North America's largest seasonal Halloween retailer, offering costumes, decorations, animatronics, party supplies, and accessories through thousands of temporary retail stores and its online shop.",
          },
        },
        {
          "@type": "Question",
          name: "Does Spirit Halloween offer costumes for every age group?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You'll find costumes and accessories for babies, children, teens, adults, couples, groups, and pets.",
          },
        },
        {
          "@type": "Question",
          name: "Can I purchase Halloween decorations from Spirit Halloween?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The store offers indoor and outdoor decorations, animatronics, lighting, haunted house props, inflatables, pumpkins, skeletons, and many other seasonal décor items.",
          },
        },
        {
          "@type": "Question",
          name: "Does Spirit Halloween sell licensed costumes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Spirit Halloween carries officially licensed costumes inspired by popular films, TV shows, comic books, anime, and video games.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Spirit Halloween coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit CouponsBit to discover the latest Spirit Halloween coupon codes, promo codes, and exclusive Halloween deals before you shop.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is completely free and provides verified coupons, promotional offers, and discounts from trusted brands.",
          },
        },
      ],
    },
  ],
};

export default function SpiritHalloweenStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(spiritHalloweenSchema),
        }}
      />
      <Suspense fallback={null}>
        <SpiritHalloweenCouponsContent />
      </Suspense>
    </>
  );
}