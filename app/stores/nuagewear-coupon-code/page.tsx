import type { Metadata } from "next";
import NuagewearCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Nuage Coupon Code – Up to 39% OFF Lingerie & Shapewear",
  description:
    "Get the latest Nuage coupon code and save up to 39% OFF on lingerie, undergarments, shapewear and everyday essentials. Plus, enjoy FREE worldwide shipping on orders over $60.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/nuagewear-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/nuagewear-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/nuagewear-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/nuagewear-coupon-code",
    title: "Nuage Coupon Code – Up to 39% OFF Lingerie & Shapewear",
    description:
      "Get the latest Nuage coupon code and save up to 39% OFF on lingerie, undergarments, shapewear and everyday essentials. Plus, enjoy FREE worldwide shipping on orders over $60.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782373659/nuage-coupon-code_ggmnbf.jpg",
        width: 1200,
        height: 630,
        alt: "Nuagewear Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nuage Coupon Code – Up to 39% OFF Lingerie & Shapewear",
    description:
      "Get the latest Nuage coupon code and save up to 39% OFF on lingerie, undergarments, shapewear and everyday essentials. Plus, enjoy FREE worldwide shipping on orders over $60.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782373659/nuage-coupon-code_ggmnbf.jpg"],
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

const nuagewearSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/nuagewear-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/nuagewear-coupon-code",
      name: "Nuage Coupon Code – Up to 39% OFF Lingerie & Shapewear",
      description:
        "Get the latest Nuage coupon code and save up to 39% OFF on lingerie, undergarments, shapewear and everyday essentials. Plus, enjoy FREE worldwide shipping on orders over $60.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/nuagewear-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/nuagewear-coupon-code#offerlist",
      name: "Nuagewear Coupon Codes & Promo Codes",
      description:
        "Latest verified Nuagewear coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/nuagewear-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Nuagewear Coupon Code",
            description:
              "Latest Nuagewear coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/nuagewear-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Nuagewear",
              url: "https://go.sjv.io/c/4303217/3232402/41026?subId1=1015",
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
      "@id": "https://www.couponsbit.us/stores/nuagewear-coupon-code#breadcrumb",
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
          name: "Nuagewear Coupons",
          item: "https://www.couponsbit.us/stores/nuagewear-coupon-code",
        },
      ],
    },
  ],
};

export default function NuagewearStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nuagewearSchema),
        }}
      />
      <NuagewearCouponsContent />
    </>
  );
}