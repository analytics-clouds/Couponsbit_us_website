import type { Metadata } from "next";
import { Suspense } from "react";
import PhilipsCouponsContent from "./_components/StoreCouponsContent";
import { PHILIPS_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Philips Promo Code: Up to 70% Off Dining Room Lights | Nov 2026",
  },
  description:
    "Use a Philips promo code and Philips discount code to get up to 70% off dining lights and £120 off Sonicare DiamondClean 9900. Verified Nov 2026 offers. Save now.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/philips-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/philips-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/philips-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/philips-discount-code",
      "x-default": "https://www.couponsbit.us/stores/philips-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/philips-discount-code",
    title: "Philips Promo Code: Up to 70% Off Dining Room Lights | Nov 2026",
    description:
      "Use a Philips promo code and Philips discount code to get up to 70% off dining lights and £120 off Sonicare DiamondClean 9900. Verified Nov 2026 offers. Save now.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784881809/philips-logo_yuwckz.webp",
        width: 1200,
        height: 630,
        alt: "Philips Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Philips Promo Code: Up to 70% Off Dining Room Lights | Nov 2026",
    description:
      "Use a Philips promo code and Philips discount code to get up to 70% off dining lights and £120 off Sonicare DiamondClean 9900. Verified Nov 2026 offers. Save now.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784881809/philips-logo_yuwckz.webp"],
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

const philipsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/philips-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/philips-discount-code",
      name: "Philips Promo Code: Up to 70% Off Dining Room Lights | Nov 2026",
      description:
        "Use a Philips promo code and Philips discount code to get up to 70% off dining lights and £120 off Sonicare DiamondClean 9900. Verified Nov 2026 offers. Save now.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/philips-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/philips-discount-code#offerlist",
      name: "Philips Coupon Codes & Promo Codes",
      description:
        "Latest verified Philips coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/philips-discount-code",
      numberOfItems: PHILIPS_COUPONS.length,
      itemListElement: PHILIPS_COUPONS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/philips-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Philips",
            url: "https://www.usa.philips.com",
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
      "@id": "https://www.couponsbit.us/stores/philips-discount-code#brand",
      name: "Philips",
      url: "https://www.usa.philips.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/philips-discount-code#breadcrumb",
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
          name: "Philips Coupons",
          item: "https://www.couponsbit.us/stores/philips-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/philips-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Philips?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Philips is a global technology company that develops personal care products, home appliances, oral care devices, healthcare solutions, kitchen appliances, and consumer electronics.",
          },
        },
        {
          "@type": "Question",
          name: "What products does Philips sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Philips offers electric shavers, toothbrushes, air fryers, coffee machines, air purifiers, vacuum cleaners, steam irons, baby products, grooming tools, and many other household essentials.",
          },
        },
        {
          "@type": "Question",
          name: "Does Philips offer replacement accessories?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Philips sells replacement brush heads, filters, blades, charging accessories, and other spare parts for many of its products.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Philips discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Philips discount code, Philips voucher, Philips promo code, and Philips coupon code on CouponsBit before making your purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Does Philips offer products for home and personal care?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Philips offers an extensive range of products across personal grooming, oral care, kitchen appliances, home cleaning, air treatment, and baby care categories.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted global brands.",
          },
        },
      ],
    },
  ],
};

export default function PhilipsStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(philipsSchema),
        }}
      />
      <Suspense fallback={null}><PhilipsCouponsContent /></Suspense>
    </>
  );
}