import type { Metadata } from "next";
import StubHubCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "StubHub Discount Code: 10% Off Concerts, Sports & Live Events | August 2026",
  description:
    "Use a verified StubHub discount code & save big in August 2026 — flat 10% off sitewide on orders above $40. New users get $20 off first booking, students save $25, Lion King NYC from $171 & rock tickets from $30. Verified deals updated daily.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/stubhub-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/stubhub-discount-code",
      "x-default": "https://www.couponsbit.us/stores/stubhub-discount-code",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/stubhub-discount-code",
    title: "StubHub Discount Code: 10% Off Concerts, Sports & Live Events | August 2026",
    description:
      "Use a verified StubHub discount code & save big in August 2026 — flat 10% off sitewide on orders above $40. New users get $20 off first booking, students save $25, Lion King NYC from $171 & rock tickets from $30. Verified deals updated daily.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp",
        width: 1200,
        height: 630,
        alt: "StubHub Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "StubHub Discount Code: 10% Off Concerts, Sports & Live Events | August 2026",
    description:
      "Use a verified StubHub discount code & save big in August 2026 — flat 10% off sitewide on orders above $40. New users get $20 off first booking, students save $25, Lion King NYC from $171 & rock tickets from $30. Verified deals updated daily.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp"],
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
      "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/stubhub-discount-code",
      name: "StubHub Discount Code: 10% Off Concerts, Sports & Live Events | August 2026",
      description:
        "Use a verified StubHub discount code & save big in August 2026 — flat 10% off sitewide on orders above $40. New users get $20 off first booking, students save $25, Lion King NYC from $171 & rock tickets from $30. Verified deals updated daily.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#breadcrumb",
      },
    },

    // ✅ ItemList — tells Google this page contains a list of offers
    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#offerlist",
      name: "StubHub Coupon Codes & Promo Codes",
      description:
        "Latest verified StubHub coupon codes, promo codes and discount codes for tickets.",
      url: "https://www.couponsbit.us/stores/stubhub-discount-code",
      numberOfItems: 10, // ← update this to match actual coupon count on page
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "StubHub Coupon Code",
            description: "Latest StubHub coupon code for ticket discounts.",
            url: "https://www.couponsbit.us/stores/stubhub-discount-code",
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
      "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#breadcrumb",
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
          name: "StubHub Coupons",
          item: "https://www.couponsbit.us/stores/stubhub-discount-code",
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