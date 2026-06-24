import type { Metadata } from "next";
import OpenartCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "OpenArt Deals – Up to 27% OFF AI Image & Video Tools",
  description:
    "Get the latest OpenArt Coupon Code and save up to 27% on AI creator plans. Generate images, videos, and audio with 100+ premium AI models.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/openart-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/openart-coupon-code",
      "en-IN": "https://www.couponsbit.us/stores/openart-coupon-code",
      "en-PK": "https://www.couponsbit.us/stores/openart-coupon-code",
      "en-GB": "https://www.couponsbit.us/stores/openart-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/openart-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/openart-coupon-code",
    title: "OpenArt Deals – Up to 27% OFF AI Image & Video Tools",
    description:
      "Get the latest OpenArt Coupon Code and save up to 27% on AI creator plans. Generate images, videos, and audio with 100+ premium AI models.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_IN", "en_PK", "en_GB"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/emergent-coupon-code_oeaxoh_aeoxm7.webp",
        width: 1200,
        height: 630,
        alt: "Openart.AI Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OpenArt Deals – Up to 27% OFF AI Image & Video Tools",
    description:
      "Get the latest OpenArt Coupon Code and save up to 27% on AI creator plans. Generate images, videos, and audio with 100+ premium AI models.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782288848/emergent-coupon-code_oeaxoh_aeoxm7.webp"],
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

const openartSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/openart-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/openart-coupon-code",
      name: "OpenArt Deals – Up to 27% OFF AI Image & Video Tools",
      description:
        "Get the latest OpenArt Coupon Code and save up to 27% on AI creator plans. Generate images, videos, and audio with 100+ premium AI models.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/openart-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/openart-coupon-code#offerlist",
      name: "Openart.AI Coupon Codes & Promo Codes",
      description:
        "Latest verified Openart.AI coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/openart-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Openart.AI Coupon Code",
            description:
              "Latest Openart.AI coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/openart-coupon-code",
            areaServed: [
              { "@type": "Country", name: "India" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Pakistan" },
              { "@type": "Country", name: "United Kingdom" },
            ],
            seller: {
              "@type": "Organization",
              name: "Openart.AI",
              url: "https://www.bluehost.com",
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
      "@id": "https://www.couponsbit.us/stores/openart-coupon-code#breadcrumb",
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
          name: "Openart.AI Coupons",
          item: "https://www.couponsbit.us/stores/openart-coupon-code",
        },
      ],
    },
  ],
};

export default function OpenartStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(openartSchema),
        }}
      />
      <OpenartCouponsContent />
    </>
  );
}