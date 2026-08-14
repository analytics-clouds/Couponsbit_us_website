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
        "Use an Emergent discount code or promo code & pay just $2.63/mo — save $14.79. Pro plan from $146.10/mo with free deployment & custom domain. August 2026.",
      url: "https://www.couponsbit.us/stores/emergent-discount-code",
      numberOfItems: 2,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Standard Plan",
            description: "Perfect for first-time builders. 100 credits/mo.",
            priceCurrency: "USD",
            price: "2.63",
            url: "https://www.couponsbit.us/stores/emergent-discount-code",
            seller: {
              "@type": "Organization",
              name: "Emergent",
              url: "https://app.emergent.sh/",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Offer",
            name: "Pro Plan",
            description: "Built for serious creators and brands. 750 credits/mo.",
            priceCurrency: "USD",
            price: "146.10",
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

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/emergent-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Emergent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Emergent is an AI-powered development platform that helps users create full-stack applications using natural-language prompts instead of traditional coding workflows.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need coding experience to use Emergent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Emergent is designed to be accessible to both technical and non-technical users, making software creation easier for a wider audience.",
          },
        },
        {
          "@type": "Question",
          name: "What types of projects can I build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Users can create SaaS products, business tools, dashboards, marketplaces, AI applications, and custom web solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Emergent promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Couponsbit regularly features the latest Emergent promo codes, discount offers, and subscription savings opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "Is Emergent suitable for startups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many founders and startups use AI-powered development platforms to build MVPs and validate ideas more efficiently.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps shoppers discover coupon codes, promo offers, and discounts from leading brands and software platforms.",
          },
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