import type { Metadata } from "next";
import MobileCouponsContent from "./_components/MobileCouponsContent";

export const metadata: Metadata = {
  title: "Mobile Phone Promo Codes & Cell Phone Plan Coupon Codes 2026",
  description:
    "Find verified mobile phone promo codes & cell phone plan coupon codes for SIM plans, prepaid phone deals & international calling. Save on Lyca Mobile & more with Couponsbit.",

  alternates: {
    canonical: "https://couponsbit.us/categories/mobile",
    languages: {
      "en-US": "https://couponsbit.us/categories/mobile",
      "x-default": "https://couponsbit.us/categories/mobile",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/categories/mobile",
    title: "Mobile Phone Promo Codes & Cell Phone Plan Coupon Codes 2026",
    description:
      "Find verified mobile phone promo codes & cell phone plan coupon codes for SIM plans, prepaid phone deals & international calling. Save on Lyca Mobile & more with Couponsbit.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mobile Phone Promo Codes & Cell Phone Plan Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mobile Phone Promo Codes & Cell Phone Plan Coupon Codes 2026",
    description:
      "Find verified mobile phone promo codes & cell phone plan coupon codes for SIM plans, prepaid phone deals & international calling. Save on Lyca Mobile & more with Couponsbit.",
    images: ["https://couponsbit.us/og-image.png"],
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

const mobileSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://couponsbit.us/categories/mobile#webpage",
      url: "https://couponsbit.us/categories/mobile",
      name: "Mobile Phone Promo Codes & Cell Phone Plan Coupon Codes 2026",
      description:
        "Find verified mobile phone promo codes & cell phone plan coupon codes for SIM plans, prepaid phone deals & international calling. Save on Lyca Mobile & more with Couponsbit.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/categories/mobile#breadcrumb",
      },
    },

    // ✅ ItemList — mobile stores in this category
    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/categories/mobile#storelist",
      name: "Mobile & Telecom Stores – Promo Codes & Cell Phone Plan Coupon Codes",
      description:
        "Verified mobile phone promo codes, cell phone plan coupon codes and prepaid phone deals for top telecom stores including Lyca Mobile.",
      url: "https://couponsbit.us/categories/mobile",
      numberOfItems: 1,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            name: "Lyca Mobile Coupon Codes",
            url: "https://couponsbit.us/stores/lyca-mobile-coupon-code",
          },
        },
        // ← add more mobile/telecom stores here as you onboard them
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
      "@id": "https://couponsbit.us/categories/mobile#breadcrumb",
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
          name: "Categories",
          item: "https://couponsbit.us/categories",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mobile & Telecom",
          item: "https://couponsbit.us/categories/mobile",
        },
      ],
    },
  ],
};

export default function MobileCategoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mobileSchema),
        }}
      />
      <MobileCouponsContent />
    </>
  );
}