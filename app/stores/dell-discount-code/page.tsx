import type { Metadata } from "next";
import { Suspense } from "react";
import DellCouponsContent from "./_components/StoreCouponsContent";
import { DELL_COUPONS } from "./_components/offers";

const TITLE = "Dell Discount Code: $1,700 Off + $1,100 Off XPS | Nov 2026";
const DESCRIPTION =
  "Save up to $1,700 with the latest Dell discount code. Get up to $1,100 off Dell XPS laptops plus verified deals on PCs, gaming, and accessories this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/dell-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/dell-discount-code",
      "x-default": "https://www.couponsbit.us/stores/dell-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/dell-discount-code",
    title: "Dell Discount Code: $1,700 OFF Gaming Sale + Saves $750 on Laptopss | Nov 2026",
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782890858/dell-coupon-code_mxtssy.webp",
        width: 1200,
        height: 630,
        alt: "Dell Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782890858/dell-coupon-code_mxtssy.webp"],
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

const dellSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/dell-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/dell-discount-code",
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
        "@id": "https://www.couponsbit.us/stores/dell-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/dell-discount-code#offerlist",
      name: "Dell Coupon Codes & Promo Codes",
      description: DESCRIPTION,
      url: "https://www.couponsbit.us/stores/dell-discount-code",
      numberOfItems: DELL_COUPONS.length,
      itemListElement: DELL_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: `https://www.couponsbit.us/stores/dell-discount-code#${c.id}`,
          seller: {
            "@type": "Organization",
            name: "Dell",
            url: "https://www.dell.com",
          },
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
      "@id": "https://www.couponsbit.us/stores/dell-discount-code#brand",
      name: "Dell",
      url: "https://www.dell.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/dell-discount-code#breadcrumb",
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
          name: "Dell Coupons",
          item: "https://www.couponsbit.us/stores/dell-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/dell-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What products does Dell sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dell offers laptops, desktop computers, gaming PCs, monitors, accessories, servers, storage solutions, workstations, networking equipment, and enterprise IT infrastructure.",
          },
        },
        {
          "@type": "Question",
          name: "Does Dell make gaming computers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dell owns the Alienware gaming brand and also offers the Dell G Series, providing gaming laptops and desktops designed for high-performance gaming.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Dell coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Dell coupon codes, promo codes, and exclusive technology deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Can I customize my Dell computer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many Dell laptops and desktops can be customized by selecting different processors, memory, storage, graphics cards, and other hardware options before purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Does Dell offer products for businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dell provides commercial laptops, enterprise workstations, servers, cloud infrastructure, cybersecurity solutions, and managed IT services for organizations of all sizes.",
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

export default function DellStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dellSchema),
        }}
      />
      <Suspense fallback={null}>
        <DellCouponsContent />
      </Suspense>
    </>
  );
}
