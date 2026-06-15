import type { Metadata } from "next";
import CareersContent from "./_components/CareersContent";

export const metadata: Metadata = {
  title: "Careers – Join the Couponsbit Team",
  description:
    "Join the Couponsbit team and help millions of shoppers save money. View open positions and grow with a fast-moving coupon platform.",

  alternates: {
    canonical: "https://couponsbit.us/careers",
    languages: {
      "en-US": "https://couponsbit.us/careers",
      "x-default": "https://couponsbit.us/careers",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/careers",
    title: "Careers – Join the Couponsbit Team",
    description:
      "Join the Couponsbit team and help millions of shoppers save money. View open positions and grow with a fast-moving coupon platform.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Careers – Join the Couponsbit Team",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers – Join the Couponsbit Team",
    description:
      "Join the Couponsbit team and help millions of shoppers save money. View open positions and grow with a fast-moving coupon platform.",
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

const careersSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/careers#webpage",
      url: "https://couponsbit.us/careers",
      name: "Careers – Join the Couponsbit Team",
      description:
        "Join the Couponsbit team and help millions of shoppers save money. View open positions and grow with a fast-moving coupon platform.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/careers#breadcrumb",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://couponsbit.us/#website",
      url: "https://couponsbit.us",
      name: "Couponsbit",
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
        areaServed: "US",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://couponsbit.us/careers#breadcrumb",
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
          name: "Careers",
          item: "https://couponsbit.us/careers",
        },
      ],
    },
  ],
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(careersSchema),
        }}
      />
      <CareersContent />
    </>
  );
}
