import type { Metadata } from "next";
import PrivacyPolicyContent from "./_components/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Couponsbit Privacy Policy | Best Coupon Website You Trust",
  description:
    "Read the Coupons Clouds Privacy Policy for details on data collection, usage, and protection. One of the best coupon websites for trusted deals.",
  
  alternates: {
    canonical: "https://www.couponsbit.us/privacy-policy",
    languages: {
      "en-US": "https://www.couponsbit.us/privacy-policy",
      "x-default": "https://www.couponsbit.us/privacy-policy",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/privacy-policy",
    title: "Couponsbit Privacy Policy | Best Coupon Website You Trust",
    description:
      "Read the Coupons Clouds Privacy Policy for details on data collection, usage, and protection. One of the best coupon websites for trusted deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://www.couponsbit.us/og-image.png", // ✅ Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Couponsbit Privacy Policy – Best Coupon Website",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Couponsbit Privacy Policy | Best Coupon Website You Trust",
    description:
      "Read the Coupons Clouds Privacy Policy for details on data collection, usage, and protection. One of the best coupon websites for trusted deals.",
    images: ["https://www.couponsbit.us/og-image.png"], // ✅ Same OG image works here
    site: "@couponsbit", // ✅ Replace with your actual Twitter handle if you have one
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// ✅ JSON-LD Schema
const privacyPolicySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/privacy-policy#webpage",
      url: "https://www.couponsbit.us/privacy-policy",
      name: "Couponsbit Privacy Policy | Best Coupon Website You Trust",
      description:
        "Read the Coupons Clouds Privacy Policy for details on data collection, usage, and protection. One of the best coupon websites for trusted deals.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/privacy-policy#breadcrumb",
      }
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
        url: "https://www.couponsbit.us/logo.png", // ✅ Replace with actual logo path
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
      "@id": "https://www.couponsbit.us/privacy-policy#breadcrumb",
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
          name: "Privacy Policy",
          item: "https://www.couponsbit.us/privacy-policy",
        },
      ],
    },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacyPolicySchema),
        }}
      />
      <PrivacyPolicyContent />
    </>
  );
}