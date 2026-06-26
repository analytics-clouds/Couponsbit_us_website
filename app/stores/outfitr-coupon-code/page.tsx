import type { Metadata } from "next";
import OutfitrCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Outfitr Coupon Code – Save Up to 62% on Bike Racks",
  description:
    "Save on premium bike racks, e-bike carriers, and cargo racks with the latest Outfitr Coupon Code, promo code, and exclusive deals for every adventure.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/outfitr-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/outfitr-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/outfitr-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/outfitr-coupon-code",
    title: "Outfitr Coupon Code – Save Up to 62% on Bike Racks",
    description:
      "Save on premium bike racks, e-bike carriers, and cargo racks with the latest Outfitr Coupon Code, promo code, and exclusive deals for every adventure.",
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
    title: "Outfitr Coupon Code – Save Up to 62% on Bike Racks",
    description:
      "Save on premium bike racks, e-bike carriers, and cargo racks with the latest Outfitr Coupon Code, promo code, and exclusive deals for every adventure.",
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
      "@id": "https://www.couponsbit.us/stores/outfitr-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/outfitr-coupon-code",
      name: "Outfitr Coupon Code – Save Up to 62% on Bike Racks",
      description:
        "Save on premium bike racks, e-bike carriers, and cargo racks with the latest Outfitr Coupon Code, promo code, and exclusive deals for every adventure.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/outfitr-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/outfitr-coupon-code#offerlist",
      name: "Outfitr Coupon Codes & Promo Codes",
      description:
        "Latest verified Outfitr coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/outfitr-coupon-code",
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
            url: "https://www.couponsbit.us/stores/outfitr-coupon-code",
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
      "@id": "https://www.couponsbit.us/stores/outfitr-coupon-code#breadcrumb",
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
          item: "https://www.couponsbit.us/stores/outfitr-coupon-code",
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