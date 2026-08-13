import type { Metadata } from "next";
import EnvatoCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Envato Elements Discount Code: Flat 50% Off Plans | August 2026",
  description:
    "Use an Envato Elements discount code or promo code — grab flat 50% off annual plans & 30% off for students. Plans from $16.50/mo. Verified August 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/envato-elements-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/envato-elements-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/envato-elements-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/envato-elements-discount-code",
      "en-PK": "https://www.couponsbit.us/stores/envato-elements-discount-code",
      "x-default": "https://www.couponsbit.us/stores/envato-elements-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/envato-elements-discount-code",
    title: "Envato Elements Discount Code: Flat 50% Off Plans | August 2026",
    description:
      "Use an Envato Elements discount code or promo code — grab flat 50% off annual plans & 30% off for students. Plans from $16.50/mo. Verified August 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN", "en_PK"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/envato-coupon-code_rhfnbt.webp",
        width: 1200,
        height: 630,
        alt: "Envato Elements Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Envato Elements Discount Code: Flat 50% Off Plans | August 2026",
    description:
      "Use an Envato Elements discount code or promo code — grab flat 50% off annual plans & 30% off for students. Plans from $16.50/mo. Verified August 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775923/envato-coupon-code_rhfnbt.webp"],
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

const envatoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/envato-elements-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/envato-elements-discount-code",
      name: "Envato Elements Discount Code: Flat 50% Off Plans | August 2026",
      description:
        "Use an Envato Elements discount code or promo code — grab flat 50% off annual plans & 30% off for students. Plans from $16.50/mo. Verified August 2026.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/envato-elements-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/envato-elements-discount-code#offerlist",
      name: "Envato Elements Coupon Codes & Promo Codes",
      description:
        "Latest verified Envato Elements coupon codes, promo codes and discount codes for templates, graphics, fonts, and creative subscriptions.",
      url: "https://www.couponsbit.us/stores/envato-elements-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Envato Elements Coupon Code",
            description:
              "Latest Envato Elements coupon code for subscription discounts on templates, graphics and creative assets.",
            url: "https://www.couponsbit.us/stores/envato-elements-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
              { "@type": "Country", name: "Pakistan" },
            ],
            seller: {
              "@type": "Organization",
              name: "Envato Elements",
              url: "https://elements.envato.com",
            },
          },
        },
      ],
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
        url: "https://www.couponsbit.us/logo.png",
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
      "@id": "https://www.couponsbit.us/stores/envato-elements-discount-code#breadcrumb",
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
          name: "Envato Elements Coupons",
          item: "https://www.couponsbit.us/stores/envato-elements-discount-code",
        },
      ],
    },
  ],
};

export default function EnvatoStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(envatoSchema),
        }}
      />
      <EnvatoCouponsContent />
    </>
  );
}