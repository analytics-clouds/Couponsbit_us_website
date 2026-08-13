import type { Metadata } from "next";
import OutfitrCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Outfitr Discount Code: Save 62% Off Bike Racks & Carriers | Aug 2026",
  description:
    "Use a verified Outfitr discount code or promo code — save 62% on the 2-Bike Hitch Rack from $110.99. Single E-Bike Rack 50% off at $169.99. USA summer deals verified August 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/outfitr-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/outfitr-discount-code",
      "x-default": "https://www.couponsbit.us/stores/outfitr-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/outfitr-discount-code",
    title: "Outfitr Discount Code: Save 62% Off Bike Racks & Carriers | Aug 2026",
    description:
      "Use a verified Outfitr discount code or promo code — save 62% on the 2-Bike Hitch Rack from $110.99. Single E-Bike Rack 50% off at $169.99. USA summer deals verified August 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782451456/outfitr-coupon-code_zbvad3.jpg",
        width: 1200,
        height: 630,
        alt: "Outfitr Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Outfitr Discount Code: Save 62% Off Bike Racks & Carriers | Aug 2026",
    description:
      "Use a verified Outfitr discount code or promo code — save 62% on the 2-Bike Hitch Rack from $110.99. Single E-Bike Rack 50% off at $169.99. USA summer deals verified August 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782451456/outfitr-coupon-code_zbvad3.jpg"],
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

const outfitrSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/outfitr-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/outfitr-discount-code",
      name: "Outfitr Discount Code: Save 62% Off Bike Racks & Carriers | Aug 2026",
      description:
        "Use a verified Outfitr discount code or promo code — save 62% on the 2-Bike Hitch Rack from $110.99. Single E-Bike Rack 50% off at $169.99. USA summer deals verified August 2026.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/outfitr-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/outfitr-discount-code#offerlist",
      name: "Outfitr Coupon Codes & Promo Codes",
      description:
        "Latest verified Outfitr coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/outfitr-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Outfitr Coupon Code",
            description:
              "Latest Outfitr coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/outfitr-discount-code",
            seller: {
              "@type": "Organization",
              name: "Outfitr",
              url: "https://forcomeecommerceinc.sjv.io/c/6434050/2843329/32890?subId=1015",
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
      "@id": "https://www.couponsbit.us/stores/outfitr-discount-code#breadcrumb",
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
          name: "Outfitr Coupons",
          item: "https://www.couponsbit.us/stores/outfitr-discount-code",
        },
      ],
    },
  ],
};

export default function OutfitrStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(outfitrSchema),
        }}
      />
      <OutfitrCouponsContent />
    </>
  );
}