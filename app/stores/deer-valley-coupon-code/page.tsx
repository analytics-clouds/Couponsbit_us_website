import type { Metadata } from "next";
import DeerValleyCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "DeerValley Coupon Code – Save Up to 60% on Home Upgrades",
  description:
    "Find the latest DeerValley coupon code and voucher code to save up to 60% on smart toilets, kitchen sinks, vanity mirrors, and more.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/deer-valley-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/deer-valley-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/deer-valley-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/deer-valley-coupon-code",
    title: "DeerValley Coupon Code – Save Up to 60% on Home Upgrades",
    description:
      "Find the latest DeerValley coupon code and voucher code to save up to 60% on smart toilets, kitchen sinks, vanity mirrors, and more.",
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
    title: "DeerValley Coupon Code – Save Up to 60% on Home Upgrades",
    description:
      "Find the latest DeerValley coupon code and voucher code to save up to 60% on smart toilets, kitchen sinks, vanity mirrors, and more.",
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
      "@id": "https://www.couponsbit.us/stores/deer-valley-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/deer-valley-coupon-code",
      name: "DeerValley Coupon Code – Save Up to 60% on Home Upgrades",
      description:
        "Find the latest DeerValley coupon code and voucher code to save up to 60% on smart toilets, kitchen sinks, vanity mirrors, and more.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/deer-valley-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/deer-valley-coupon-code#offerlist",
      name: "Deer Valley Coupon Codes & Promo Codes",
      description:
        "Latest verified Deer Valley coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/deer-valley-coupon-code",
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
            url: "https://www.couponsbit.us/stores/deer-valley-coupon-code",
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
      "@id": "https://www.couponsbit.us/stores/deer-valley-coupon-code#breadcrumb",
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
          item: "https://www.couponsbit.us/stores/deer-valley-coupon-code",
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