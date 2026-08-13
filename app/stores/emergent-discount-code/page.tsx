import type { Metadata } from "next";
import EmergentCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Emergent Discount Code - Save $14.79 on monthy plan | Aug 2026",
  description:
    "Use an Emergent discount code or promo code & pay just $2.63/mo — save $14.79. Pro plan from $146.10/mo with free deployment & custom domain. August 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/emergent-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/emergent-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/emergent-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/emergent-discount-code",
      "x-default": "https://www.couponsbit.us/stores/emergent-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/emergent-discount-code",
    title: "Emergent Discount Code - Save $14.79 on monthy plan | Aug 2026",
    description:
      "Use an Emergent discount code or promo code & pay just $2.63/mo — save $14.79. Pro plan from $146.10/mo with free deployment & custom domain. August 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782198036/emergent-coupon-code_oeaxoh.webp",
        width: 1200,
        height: 630,
        alt: "Emergent Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Emergent Discount Code - Save $14.79 on monthy plan | Aug 2026",
    description:
      "Use an Emergent discount code or promo code & pay just $2.63/mo — save $14.79. Pro plan from $146.10/mo with free deployment & custom domain. August 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782198036/emergent-coupon-code_oeaxoh.webp"],
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

const emergentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/emergent-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/emergent-discount-code",
      name: "Emergent Discount Code - Save $14.79 on monthy plan | Aug 2026",
      description:
        "Use an Emergent discount code or promo code & pay just $2.63/mo — save $14.79. Pro plan from $146.10/mo with free deployment & custom domain. August 2026.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/emergent-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/emergent-discount-code#offerlist",
      name: "Emergent Coupon Codes & Promo Codes",
      description:
        "Latest verified Emergent coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/emergent-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Emergent Coupon Code",
            description:
              "Latest Emergent coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/emergent-discount-code",
            seller: {
              "@type": "Organization",
              name: "Emergent",
              url: "https://app.emergent.sh/",
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
      "@id": "https://www.couponsbit.us/stores/emergent-discount-code#breadcrumb",
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
          name: "Emergent Coupons",
          item: "https://www.couponsbit.us/stores/emergent-discount-code",
        },
      ],
    },
  ],
};

export default function EmergentStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(emergentSchema),
        }}
      />
      <EmergentCouponsContent />
    </>
  );
}