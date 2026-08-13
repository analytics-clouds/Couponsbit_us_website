import type { Metadata } from "next";
import LatamCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "LATAM Airlines Discount Code: Earn 40,000 Miles + Fly From $136 | Aug 2026",
  description:
    "Use a verified LATAM Airlines discount code or promo code — fly Miami to Punta Cana from just $136. Earn 40,000 bonus miles on approved LATAM credit cards. August 2026 deals verified daily.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/latam-airlines-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/latam-airlines-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/latam-airlines-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/latam-airlines-discount-code",
      "x-default": "https://www.couponsbit.us/stores/latam-airlines-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/latam-airlines-discount-code",
    title: "LATAM Airlines Discount Code: Earn 40,000 Miles + Fly From $136 | Aug 2026",
    description:
      "Use a verified LATAM Airlines discount code or promo code — fly Miami to Punta Cana from just $136. Earn 40,000 bonus miles on approved LATAM credit cards. August 2026 deals verified daily.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/latam-airlines-coupon-code_pvcsml.webp",
        width: 1200,
        height: 630,
        alt: "LATAM Airlines Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LATAM Airlines Discount Code: Earn 40,000 Miles + Fly From $136 | Aug 2026",
    description:
      "Use a verified LATAM Airlines discount code or promo code — fly Miami to Punta Cana from just $136. Earn 40,000 bonus miles on approved LATAM credit cards. August 2026 deals verified daily.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775924/latam-airlines-coupon-code_pvcsml.webp"],
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

const latamSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/latam-airlines-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/latam-airlines-discount-code",
      name: "LATAM Airlines Discount Code: Earn 40,000 Miles + Fly From $136 | Aug 2026",
      description:
        "Use a verified LATAM Airlines discount code or promo code — fly Miami to Punta Cana from just $136. Earn 40,000 bonus miles on approved LATAM credit cards. August 2026 deals verified daily.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/latam-airlines-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/latam-airlines-discount-code#offerlist",
      name: "LATAM Airlines Coupon Codes & Promo Codes",
      description:
        "Latest verified LATAM Airlines coupon codes, promo codes and discount codes for flight bookings.",
      url: "https://www.couponsbit.us/stores/latam-airlines-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "LATAM Airlines Coupon Code",
            description:
              "Latest LATAM Airlines coupon code for flight booking discounts.",
            url: "https://www.couponsbit.us/stores/latam-airlines-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "LATAM Airlines",
              url: "https://www.latamairlines.com",
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
      "@id": "https://www.couponsbit.us/stores/latam-airlines-discount-code#breadcrumb",
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
          name: "LATAM Airlines Coupons",
          item: "https://www.couponsbit.us/stores/latam-airlines-discount-code",
        },
      ],
    },
  ],
};

export default function LatamStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(latamSchema),
        }}
      />
      <LatamCouponsContent />
    </>
  );
}