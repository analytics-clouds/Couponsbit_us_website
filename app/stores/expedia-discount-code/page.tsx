import type { Metadata } from "next";
import ExpediaCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Expedia Discount Code: Big Summer Sale Up to 40% Off & Save $370 on Hotels | Aug 2026",
  description:
    "Use a verified Expedia discount code or promo code & save up to 40% on hotels, flights & car rentals. Save up to $459 on Atlantic City hotels. August 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/expedia-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/expedia-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/expedia-discount-code",
      "en-AU": "https://www.couponsbit.us/stores/expedia-discount-code",
      "en-CA": "https://www.couponsbit.us/stores/expedia-discount-code",
      "x-default": "https://www.couponsbit.us/stores/expedia-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/expedia-discount-code",
    title: "Expedia Discount Code: Big Summer Sale Up to 40% Off & Save $370 on Hotels | Aug 2026",
    description:
      "Use a verified Expedia discount code or promo code & save up to 40% on hotels, flights & car rentals. Save up to $459 on Atlantic City hotels. August 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AU", "en_CA"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg",
        width: 1200,
        height: 630,
        alt: "Expedia Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Expedia Discount Code: Big Summer Sale Up to 40% Off & Save $370 on Hotels | Aug 2026",
    description:
      "Use a verified Expedia discount code or promo code & save up to 40% on hotels, flights & car rentals. Save up to $459 on Atlantic City hotels. August 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg"],
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

const expediaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/expedia-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/expedia-discount-code",
      name: "Expedia Discount Code: Big Summer Sale Up to 40% Off & Save $370 on Hotels | Aug 2026",
      description:
        "Use a verified Expedia discount code or promo code & save up to 40% on hotels, flights & car rentals. Save up to $459 on Atlantic City hotels. August 2026.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/expedia-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/expedia-discount-code#offerlist",
      name: "Expedia Coupon Codes & Promo Codes",
      description:
        "Latest verified Expedia coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/expedia-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Expedia Coupon Code",
            description:
              "Latest Expedia coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/expedia-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Australia" },
              { "@type": "Country", name: "Canada" },
            ],
            seller: {
              "@type": "Organization",
              name: "Expedia",
              url: "https://www.expedia.com",
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
      "@id": "https://www.couponsbit.us/stores/expedia-discount-code#breadcrumb",
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
          name: "Expedia Coupons",
          item: "https://www.couponsbit.us/stores/expedia-discount-code",
        },
      ],
    },
  ],
};

export default function ExpediaStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(expediaSchema),
        }}
      />
      <ExpediaCouponsContent />
    </>
  );
}