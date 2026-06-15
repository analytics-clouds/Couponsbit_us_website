import type { Metadata } from "next";
import EnvatoCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Envato Elements Coupon Codes – 50% OFF & From $16.50",
  description:
    "Get verified Envato Elements discount codes – 50% OFF annual plan, 30% OFF students, 34% OFF team plans & unlimited assets from $16.50/mo. 7 live deals. Save now!",

  alternates: {
    canonical: "https://couponsbit.us/stores/envato-elements",
    languages: {
      "en-US": "https://couponsbit.us/stores/envato-elements",
      "x-default": "https://couponsbit.us/stores/envato-elements",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/stores/envato-elements",
    title: "Envato Elements Coupon Codes – 50% OFF & From $16.50",
    description:
      "Get verified Envato Elements discount codes – 50% OFF annual plan, 30% OFF students, 34% OFF team plans & unlimited assets from $16.50/mo. 7 live deals. Save now!",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Envato Elements Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Envato Elements Coupon Codes – 50% OFF & From $16.50",
    description:
      "Get verified Envato Elements discount codes – 50% OFF annual plan, 30% OFF students, 34% OFF team plans & unlimited assets from $16.50/mo. 7 live deals. Save now!",
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

const envatoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/stores/envato-elements#webpage",
      url: "https://couponsbit.us/stores/envato-elements",
      name: "Envato Elements Coupon Codes – 50% OFF & From $16.50",
      description:
        "Get verified Envato Elements discount codes – 50% OFF annual plan, 30% OFF students, 34% OFF team plans & unlimited assets from $16.50/mo. 7 live deals. Save now!",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/stores/envato-elements#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/stores/envato-elements#offerlist",
      name: "Envato Elements Coupon Codes & Promo Codes",
      description:
        "Latest verified Envato Elements coupon codes, promo codes and discount codes for templates, graphics, fonts, and creative subscriptions.",
      url: "https://couponsbit.us/stores/envato-elements",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Envato Elements Coupon Code",
            description:
              "Latest Envato Elements coupon code for subscription discounts on templates, graphics and creative assets.",
            url: "https://couponsbit.us/stores/envato-elements",
            seller: {
              "@type": "Organization",
              name: "Envato Elements",
              url: "https://elements.envato.com",
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
      "@id": "https://couponsbit.us/stores/envato-elements#breadcrumb",
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
          name: "Envato Elements Coupons",
          item: "https://couponsbit.us/stores/envato-elements",
        },
      ],
    },
  ],
};

export default function EnvatoStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(envatoSchema),
        }}
      />
      <EnvatoCouponsContent />
    </>
  );
}