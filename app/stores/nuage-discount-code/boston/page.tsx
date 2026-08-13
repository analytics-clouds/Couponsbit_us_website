import type { Metadata } from "next";
import NuagewearBostonCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "NuageWear Boston Offers – Save 39% + Free Shipping",
  description:
    "Boston shoppers: 12+ verified Nuagewear codes live. Save up to 39% OFF Stay-Put Bra & NuBloom Bra + free shipping over $60. Boston delivery in 4-6 days.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/nuage-discount-code/boston",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/nuage-discount-code/boston",
      "x-default": "https://www.couponsbit.us/stores/nuage-discount-code/boston",
    },
  },
  
  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/nuage-discount-code/boston",
    title: "NuageWear Boston Offers – Save 39% + Free Shipping",
    description:
      "Boston shoppers: 12+ verified Nuagewear codes live. Save up to 39% OFF Stay-Put Bra & NuBloom Bra + free shipping over $60. Boston delivery in 4-6 days.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1785318021/nuage-boston_aodwej.webp",
        width: 800,
        height: 375,
        alt: "Nuagewear Coupon Codes for Boston – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NuageWear Boston Offers – Save 39% + Free Shipping",
    description:
      "Boston shoppers: 12+ verified Nuagewear codes live. Save up to 39% OFF Stay-Put Bra & NuBloom Bra + free shipping over $60. Boston delivery in 4-6 days.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1785318021/nuage-boston_aodwej.webp"],
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

const nuagewearBostonSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/nuage-discount-code/boston#webpage",
      url: "https://www.couponsbit.us/stores/nuage-discount-code/boston",
      name: "NuageWear Boston Offers – Save 39% + Free Shipping",
      description:
        "Boston shoppers: 12+ verified Nuagewear codes live. Save up to 39% OFF Stay-Put Bra & NuBloom Bra + free shipping over $60. Boston delivery in 4-6 days.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/nuage-discount-code/boston#breadcrumb",
      },
      contentLocation: {
        "@type": "City",
        name: "Boston",
        containedInPlace: {
          "@type": "State",
          name: "Massachusetts",
        },
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/nuage-discount-code/boston#offerlist",
      name: "Nuagewear Coupon Codes for Boston",
      description:
        "Latest verified Nuagewear coupon codes and promo codes, with delivery details for Boston shoppers.",
      url: "https://www.couponsbit.us/stores/nuage-discount-code/boston",
      numberOfItems: 12,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Nuagewear Coupon Code",
            description:
              "Latest Nuagewear coupon code for lingerie, shapewear and everyday essentials, shipped nationwide including Boston.",
            url: "https://www.couponsbit.us/stores/nuage-discount-code/boston",
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
      "@id": "https://www.couponsbit.us/stores/nuage-discount-code/boston#breadcrumb",
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
        {
          "@type": "ListItem",
          position: 4,
          name: "Boston",
          item: "https://www.couponsbit.us/stores/nuage-discount-code/boston",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/nuage-discount-code/boston#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Nuagewear ship to Boston?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — Nuagewear ships to Boston and the surrounding Greater Boston area, including Cambridge, Somerville, Dorchester and Brookline. Standard delivery takes 4–6 business days via USPS or UPS. Free shipping is available on orders over $60.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Nuagewear delivery take to Boston?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Orders shipped to Boston typically arrive within 4–6 business days via standard USPS or UPS. Ordering by Wednesday gives most Greater Boston addresses the best chance of weekend delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Do Nuagewear coupon codes work for Boston orders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — every Nuagewear promo code and deal on this page applies storewide, with no separate Boston-only code required. Massachusetts's flat 6.25% sales tax is calculated automatically at checkout.",
          },
        },
      ],
    },
  ],
};

export default function NuagewearBostonStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nuagewearBostonSchema),
        }}
      />
      <NuagewearBostonCouponsContent />
    </>
  );
}
