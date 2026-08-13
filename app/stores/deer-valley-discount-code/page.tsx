import type { Metadata } from "next";
import DeerValleyCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "DeerValley Discount Code: Up to 60% OFF Bathroom Deals | Aug 2026",
  description:
    "Find the latest DeerValley discount codes and home improvement deals for Aug 2026. Save up to 60% on bathroom and kitchen essentials, get 48% off smart toilets, 40% off sinks, and more offers.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/deer-valley-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/deer-valley-discount-code",
      "x-default": "https://www.couponsbit.us/stores/deer-valley-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/deer-valley-discount-code",
    title: "DeerValley Discount Code: Up to 60% OFF Bathroom Deals | Aug 2026",
    description:
      "Find the latest DeerValley discount codes and home improvement deals for Aug 2026. Save up to 60% on bathroom and kitchen essentials, get 48% off smart toilets, 40% off sinks, and more offers.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782451456/deervalley-coupon-code_yohcn4.jpg",
        width: 1200,
        height: 630,
        alt: "Deer Valley Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DeerValley Discount Code: Up to 60% OFF Bathroom Deals | Aug 2026",
    description:
      "Find the latest DeerValley discount codes and home improvement deals for Aug 2026. Save up to 60% on bathroom and kitchen essentials, get 48% off smart toilets, 40% off sinks, and more offers.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782451456/deervalley-coupon-code_yohcn4.jpg"],
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

const deervalleySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/deer-valley-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/deer-valley-discount-code",
      name: "DeerValley Discount Code: Up to 60% OFF Bathroom Deals | Aug 2026",
      description:
        "Find the latest DeerValley discount codes and home improvement deals for Aug 2026. Save up to 60% on bathroom and kitchen essentials, get 48% off smart toilets, 40% off sinks, and more offers.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/deer-valley-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/deer-valley-discount-code#offerlist",
      name: "Deer Valley Coupon Codes & Promo Codes",
      description:
        "Latest verified Deer Valley coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/deer-valley-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Deer Valley Coupon Code",
            description:
              "Latest Deer Valley coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/deer-valley-discount-code",
            seller: {
              "@type": "Organization",
              name: "Deer Valley",
              url: "https://deervalley.sjv.io/c/6434050/1830355/21845?subId1=1015",
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
      "@id": "https://www.couponsbit.us/stores/deer-valley-discount-code#breadcrumb",
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
          name: "Deer Valley Coupons",
          item: "https://www.couponsbit.us/stores/deer-valley-discount-code",
        },
      ],
    },
  ],
};

export default function DeerValleyStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(deervalleySchema),
        }}
      />
      <DeerValleyCouponsContent />
    </>
  );
}