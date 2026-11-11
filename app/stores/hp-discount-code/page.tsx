import type { Metadata } from "next";
import { Suspense } from "react";
import HPCouponsContent from "./_components/StoreCouponsContent";
import { HP_COUPONS } from "./_components/offers";

const TITLE = "HP Discount Code: 71% Off + $30 Off on Printers | Nov 2026";
const DESCRIPTION =
  "Save up to 71% with the latest HP discount code. Get $30 off select HP LaserJet printers, plus verified deals on laptops, desktops, and accessories this Nov 2026."
export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/hp-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/hp-discount-code",
      "x-default": "https://www.couponsbit.us/stores/hp-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/hp-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782890859/hp-coupon-code_vaogna.webp",
        width: 1200,
        height: 630,
        alt: "HP Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782890859/hp-coupon-code_vaogna.webp"],
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

  other: { "geo.region": "US", "geo.country": "US", language: "en-US" },
};

const hpSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/hp-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/hp-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/hp-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/hp-discount-code#offerlist",
      name: "HP Coupon Codes & Promo Codes",
      description: DESCRIPTION,
      url: "https://www.couponsbit.us/stores/hp-discount-code",
      numberOfItems: HP_COUPONS.length,
      itemListElement: HP_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: `https://www.couponsbit.us/stores/hp-discount-code#${c.id}`,
          seller: { "@type": "Organization", name: "HP", url: "https://www.hp.com" },
        },
      })),
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
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/hp-discount-code#brand",
      name: "HP",
      url: "https://www.hp.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/hp-discount-code#breadcrumb",
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
          name: "HP Coupons",
          item: "https://www.couponsbit.us/stores/hp-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/hp-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does HP sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HP offers laptops, desktop computers, gaming PCs, printers, monitors, accessories, ink cartridges, business devices, and technology solutions for both consumers and organizations.",
          },
        },
        {
          "@type": "Question",
          name: "Does HP offer gaming laptops?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. HP's OMEN and Victus product lines are designed for gamers seeking high-performance laptops and desktop computers.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find HP coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest HP coupon codes, promo codes, and exclusive technology deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Does HP sell products for businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. HP provides commercial laptops, workstations, printers, enterprise solutions, and managed services for businesses of all sizes.",
          },
        },
        {
          "@type": "Question",
          name: "Can I buy HP accessories directly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. HP offers a wide range of official accessories, including keyboards, mice, webcams, docking stations, monitors, backpacks, chargers, and more.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps shoppers discover verified coupon codes, promo offers, and discounts from trusted brands worldwide.",
          },
        },
      ],
    },
  ],
};

export default function HPStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hpSchema),
        }}
      />
      <Suspense fallback={null}>
        <HPCouponsContent />
      </Suspense>
    </>
  );
}
