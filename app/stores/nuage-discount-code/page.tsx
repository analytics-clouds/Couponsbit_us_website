import type { Metadata } from "next";
import NuagewearCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "NuageWear Discount Code: 39% Off Bras + Free Worldwide Shipping | Aug 2026",
  description:
    "Use a verified Nuage discount code or NuageWear promo code — save 39% on the Wireless Stay-Put Bra from $36. Get free worldwide shipping on orders above $60. August 2026 deals verified daily.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/nuage-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/nuage-discount-code",
      "x-default": "https://www.couponsbit.us/stores/nuage-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/nuage-discount-code",
    title: "NuageWear Discount Code: 39% Off Bras + Free Worldwide Shipping | Aug 2026",
    description:
      "Use a verified Nuage discount code or NuageWear promo code — save 39% on the Wireless Stay-Put Bra from $36. Get free worldwide shipping on orders above $60. August 2026 deals verified daily.",
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
    title: "NuageWear Discount Code: 39% Off Bras + Free Worldwide Shipping | Aug 2026",
    description:
      "Use a verified Nuage discount code or NuageWear promo code — save 39% on the Wireless Stay-Put Bra from $36. Get free worldwide shipping on orders above $60. August 2026 deals verified daily.",
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
      "@id": "https://www.couponsbit.us/stores/nuage-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/nuage-discount-code",
      name: "NuageWear Discount Code: 39% Off Bras + Free Worldwide Shipping | Aug 2026",
      description:
        "Use a verified Nuage discount code or NuageWear promo code — save 39% on the Wireless Stay-Put Bra from $36. Get free worldwide shipping on orders above $60. August 2026 deals verified daily.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/nuage-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/nuage-discount-code#offerlist",
      name: "Nuagewear Coupon Codes & Promo Codes",
      description:
        "Latest verified Nuagewear coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/nuage-discount-code",
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
            url: "https://www.couponsbit.us/stores/nuage-discount-code",
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
      "@id": "https://www.couponsbit.us/stores/nuage-discount-code#breadcrumb",
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
          item: "https://www.couponsbit.us/stores/nuage-discount-code",
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