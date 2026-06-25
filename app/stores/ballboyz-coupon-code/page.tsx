import type { Metadata } from "next";
import BallboyzCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "BallBoyz Coupon Codes – Save Up to 50% OFF Acne Care & Skincare",
  description:
    "Get the latest BallBoyz coupon codes and save up to 50% OFF on acne treatment bundles, face scrubs, body scrubs and men's skincare. Plus, enjoy exclusive bundle deals and limited-time offers.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/ballboyz-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/ballboyz-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/ballboyz-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/ballboyz-coupon-code",
    title: "BallBoyz Coupon Codes – Save Up to 50% OFF Acne Care & Skincare",
    description:
      "Get the latest BallBoyz coupon codes and save up to 50% OFF on acne treatment bundles, face scrubs, body scrubs and men's skincare. Plus, enjoy exclusive bundle deals and limited-time offers.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/ballboyz-coupon-code_rduo3k.jpg",
        width: 1200,
        height: 630,
        alt: "Ballboyz Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BallBoyz Coupon Codes – Save Up to 50% OFF Acne Care & Skincare",
    description:
      "Get the latest BallBoyz coupon codes and save up to 50% OFF on acne treatment bundles, face scrubs, body scrubs and men's skincare. Plus, enjoy exclusive bundle deals and limited-time offers.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782373660/ballboyz-coupon-code_rduo3k.jpg"],
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

const ballboyzSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/ballboyz-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/ballboyz-coupon-code",
      name: "BallBoyz Coupon Codes – Save Up to 50% OFF Acne Care & Skincare",
      description:
        "Get the latest BallBoyz coupon codes and save up to 50% OFF on acne treatment bundles, face scrubs, body scrubs and men's skincare. Plus, enjoy exclusive bundle deals and limited-time offers.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/ballboyz-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/ballboyz-coupon-code#offerlist",
      name: "Ballboyz Coupon Codes & Promo Codes",
      description:
        "Latest verified Ballboyz coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/ballboyz-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Ballboyz Coupon Code",
            description:
              "Latest Ballboyz coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/ballboyz-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Ballboyz",
              url: "https://ballboyz.pxf.io/c/6434050/2197523/28283?subId1=1015",
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
      "@id": "https://www.couponsbit.us/stores/ballboyz-coupon-code#breadcrumb",
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
          name: "Ballboyz Coupons",
          item: "https://www.couponsbit.us/stores/ballboyz-coupon-code",
        },
      ],
    },
  ],
};

export default function BallboyzStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ballboyzSchema),
        }}
      />
      <BallboyzCouponsContent />
    </>
  );
}