import type { Metadata } from "next";
import StubHubCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "StubHub Coupon Codes – $20 OFF, 10% OFF & More Deals",
  description:
    "Get verified StubHub promo codes – Flat 10% OFF sitewide, $25 student discount, $20 OFF for new users & tickets from $30. 11 coupons live. Grab your deal now!",

  alternates: {
    canonical: "https://couponsbit.us/stores/stubhub",
    languages: {
      "en-US": "https://couponsbit.us/stores/stubhub",
      "x-default": "https://couponsbit.us/stores/stubhub",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://couponsbit.us/stores/stubhub",
    title: "StubHub Coupon Codes – $20 OFF, 10% OFF & More Deals",
    description:
      "Get verified StubHub promo codes – Flat 10% OFF sitewide, $25 student discount, $20 OFF for new users & tickets from $30. 11 coupons live. Grab your deal now!",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "StubHub Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "StubHub Coupon Codes – $20 OFF, 10% OFF & More Deals",
    description:
      "Get verified StubHub promo codes – Flat 10% OFF sitewide, $25 student discount, $20 OFF for new users & tickets from $30. 11 coupons live. Grab your deal now!",
    images: ["https://couponsbit.us/og-image.png"],
    site: "@couponsbit",
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// ✅ JSON-LD Schema
const stubHubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/stores/stubhub#webpage",
      url: "https://couponsbit.us/stores/stubhub",
      name: "StubHub Coupon Codes – $20 OFF, 10% OFF & More Deals",
      description:
        "Get verified StubHub promo codes – Flat 10% OFF sitewide, $25 student discount, $20 OFF for new users & tickets from $30. 11 coupons live. Grab your deal now!",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/stores/stubhub#breadcrumb",
      },
    },

    // ✅ ItemList — tells Google this page contains a list of offers
    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/stores/stubhub#offerlist",
      name: "StubHub Coupon Codes & Promo Codes",
      description:
        "Latest verified StubHub coupon codes, promo codes and discount codes for tickets.",
      url: "https://couponsbit.us/stores/stubhub",
      numberOfItems: 10, // ← update this to match actual coupon count on page
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "StubHub Coupon Code",
            description: "Latest StubHub coupon code for ticket discounts.",
            url: "https://couponsbit.us/stores/stubhub",
            seller: {
              "@type": "Organization",
              name: "StubHub",
              url: "https://www.stubhub.com",
            },
          },
        },
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://couponsbit.us/#website",
      url: "https://couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://couponsbit.us/#organization",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://couponsbit.us",
      logo: {
        "@type": "ImageObject",
        url: "https://couponsbit.us/logo.png",
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
      "@id": "https://couponsbit.us/stores/stubhub#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://couponsbit.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Stores",
          item: "https://couponsbit.us/stores",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "StubHub Coupons",
          item: "https://couponsbit.us/stores/stubhub",
        },
      ],
    },
  ],
};

export default function StubHubStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(stubHubSchema),
        }}
      />
      <StubHubCouponsContent />
    </>
  );
}