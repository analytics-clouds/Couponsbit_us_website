import type { Metadata } from "next";
import TermsOfUseContent from "./_components/TermsOfUseContent";

export const metadata: Metadata = {
  title: "Couponsbit Terms & Conditions | Best Coupon Site Online",
  description:
    "Read Coupons Clouds Terms and Conditions before using our platform. As the best coupon site online, we provide verified deals, promo codes, and user guidelines.",

  alternates: {
    canonical: "https://www.couponsbit.us/terms-of-use",
    languages: {
      "en-US": "https://www.couponsbit.us/terms-of-use",
      "x-default": "https://www.couponsbit.us/terms-of-use",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/terms-of-use",
    title: "Couponsbit Terms & Conditions | Best Coupon Site Online",
    description:
      "Read Coupons Clouds Terms and Conditions before using our platform. As the best coupon site online, we provide verified deals, promo codes, and user guidelines.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://www.couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Couponsbit Terms & Conditions – Best Coupon Site Online",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Couponsbit Terms & Conditions | Best Coupon Site Online",
    description:
      "Read Coupons Clouds Terms and Conditions before using our platform. As the best coupon site online, we provide verified deals, promo codes, and user guidelines.",
    images: ["https://www.couponsbit.us/og-image.png"],
    site: "@couponsbit",
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
const termsOfUseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/terms-of-use#webpage",
      url: "https://www.couponsbit.us/terms-of-use",
      name: "Couponsbit Terms & Conditions | Best Coupon Site Online",
      description:
        "Read Coupons Clouds Terms and Conditions before using our platform. As the best coupon site online, we provide verified deals, promo codes, and user guidelines.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/terms-of-use#breadcrumb",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is the best coupon site online offering verified promo codes and deals for top brands worldwide.",
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
        url: "https://www.couponsbit.us/logo.png",
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
      "@id": "https://www.couponsbit.us/terms-of-use#breadcrumb",
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
          name: "Terms of Use",
          item: "https://www.couponsbit.us/terms-of-use",
        },
      ],
    },
  ],
};

export default function TermsOfUsePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsOfUseSchema),
        }}
      />
      <TermsOfUseContent />
    </>
  );
}