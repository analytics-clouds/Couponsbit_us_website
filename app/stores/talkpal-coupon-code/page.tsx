import type { Metadata } from "next";
import TalkpalCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Talkpal.AI Coupon Codes – Hosting From $1.99/mo & More",
  description:
    "Get verified Talkpal.AI discount codes – WordPress hosting from $1.99/mo, 69% OFF one site plan, 50% OFF business hosting & VPS 33% OFF. 35 live deals. Save now!",

  alternates: {
    canonical: "https://couponsbit.us/stores/talkpal-coupon-code",
    languages: {
      "en-US": "https://couponsbit.us/stores/talkpal-coupon-code",
      "de-DE": "https://couponsbit.us/stores/talkpal-coupon-code",
      "ja-JP": "https://couponsbit.us/stores/talkpal-coupon-code",
      "en-IN": "https://couponsbit.us/stores/talkpal-coupon-code",
      "en-AU": "https://couponsbit.us/stores/talkpal-coupon-code",
      "x-default": "https://couponsbit.us/stores/talkpal-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/stores/talkpal-coupon-code",
    title: "Talkpal.AI Coupon Codes – Hosting From $1.99/mo & More",
    description:
      "Get verified Talkpal.AI discount codes – WordPress hosting from $1.99/mo, 69% OFF one site plan, 50% OFF business hosting & VPS 33% OFF. 35 live deals. Save now!",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["de_DE", "ja_JP", "en_IN", "en_AU"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782288847/talkpal-coupon-code_gozaoz.webp",
        width: 1200,
        height: 630,
        alt: "Talkpal.AI Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Talkpal.AI Coupon Codes – Hosting From $1.99/mo & More",
    description:
      "Get verified Talkpal.AI discount codes – WordPress hosting from $1.99/mo, 69% OFF one site plan, 50% OFF business hosting & VPS 33% OFF. 35 live deals. Save now!",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782288847/talkpal-coupon-code_gozaoz.webp"],
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

const talkpalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/stores/talkpal-coupon-code#webpage",
      url: "https://couponsbit.us/stores/talkpal-coupon-code",
      name: "Talkpal.AI Coupon Codes – Hosting From $1.99/mo & More",
      description:
        "Get verified Talkpal.AI discount codes – WordPress hosting from $1.99/mo, 69% OFF one site plan, 50% OFF business hosting & VPS 33% OFF. 35 live deals. Save now!",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/stores/talkpal-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/stores/talkpal-coupon-code#offerlist",
      name: "Talkpal.AI Coupon Codes & Promo Codes",
      description:
        "Latest verified Talkpal.AI coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://couponsbit.us/stores/talkpal-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Talkpal.AI Coupon Code",
            description:
              "Latest Talkpal.AI coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://couponsbit.us/stores/talkpal-coupon-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Germany" },
              { "@type": "Country", name: "Japan" },
              { "@type": "Country", name: "India" },
              { "@type": "Country", name: "Australia" },
            ],
            seller: {
              "@type": "Organization",
              name: "Talkpal.AI",
              url: "https://www.bluehost.com",
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
      "@id": "https://couponsbit.us/stores/talkpal-coupon-code#breadcrumb",
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
          name: "Talkpal.AI Coupons",
          item: "https://couponsbit.us/stores/talkpal-coupon-code",
        },
      ],
    },
  ],
};

export default function TalkpalStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(talkpalSchema),
        }}
      />
      <TalkpalCouponsContent />
    </>
  );
}