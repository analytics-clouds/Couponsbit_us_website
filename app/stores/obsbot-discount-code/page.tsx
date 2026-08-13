import type { Metadata } from "next";
import ObsbotCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "OBSBOT Discount Code: AI Webcams From $129 + 4K Streaming | Aug 2026",
  description:
    "Use a verified OBSBOT discount code or promo code — grab the Tiny 2 Lite 4K AI Webcam from $129. Pro streaming camera with NDI & AI tracking from $499. Updated August 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/obsbot-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/obsbot-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/obsbot-discount-code",
      "x-default": "https://www.couponsbit.us/stores/obsbot-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/obsbot-discount-code",
    title: "OBSBOT Discount Code: AI Webcams From $129 + 4K Streaming | Aug 2026",
    description:
      "Use a verified OBSBOT discount code or promo code — grab the Tiny 2 Lite 4K AI Webcam from $129. Pro streaming camera with NDI & AI tracking from $499. Updated August 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782373659/obsbot-coupon-code_rs8fff.jpg",
        width: 1200,
        height: 630,
        alt: "Obsbot Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OBSBOT Discount Code: AI Webcams From $129 + 4K Streaming | Aug 2026",
    description:
      "Use a verified OBSBOT discount code or promo code — grab the Tiny 2 Lite 4K AI Webcam from $129. Pro streaming camera with NDI & AI tracking from $499. Updated August 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782373659/obsbot-coupon-code_rs8fff.jpg"],
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

const obsbotSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/obsbot-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/obsbot-discount-code",
      name: "OBSBOT Discount Code: AI Webcams From $129 + 4K Streaming | Aug 2026",
      description:
        "Use a verified OBSBOT discount code or promo code — grab the Tiny 2 Lite 4K AI Webcam from $129. Pro streaming camera with NDI & AI tracking from $499. Updated August 2026.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/obsbot-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/obsbot-discount-code#offerlist",
      name: "Obsbot Coupon Codes & Promo Codes",
      description:
        "Latest verified Obsbot coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/obsbot-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Obsbot Coupon Code",
            description:
              "Latest Obsbot coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/obsbot-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
            ],
            seller: {
              "@type": "Organization",
              name: "Obsbot",
              url: "https://obsbotamazonsellerus.pxf.io/c/6434050/3434711/46044?subId1=1015",
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
      "@id": "https://www.couponsbit.us/stores/obsbot-discount-code#breadcrumb",
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
          name: "Obsbot Coupons",
          item: "https://www.couponsbit.us/stores/obsbot-discount-code",
        },
      ],
    },
  ],
};

export default function ObsbotStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(obsbotSchema),
        }}
      />
      <ObsbotCouponsContent />
    </>
  );
}