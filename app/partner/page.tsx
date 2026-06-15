import type { Metadata } from "next";
import PartnerPageContent from "./_components/PartnerPageContent";

export const metadata: Metadata = {
  title: "Partner With Couponsbit | Coupon Website Partnership USA",
  description:
    "Advertise on Couponsbit and list your brand on our coupon site. Reach 500K+ monthly deal hunters through a trusted coupon website partnership USA brands love.",

  alternates: {
    canonical: "https://couponsbit.us/partner",
    languages: {
      "en-US": "https://couponsbit.us/partner",
      "x-default": "https://couponsbit.us/partner",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://couponsbit.us/partner",
    title: "Partner With Couponsbit | Coupon Website Partnership USA",
    description:
      "Advertise on Couponsbit and list your brand on our coupon site. Reach 500K+ monthly deal hunters through a trusted coupon website partnership USA brands love.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Partner With Couponsbit – Coupon Website Partnership USA",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Partner With Couponsbit | Coupon Website Partnership USA",
    description:
      "Advertise on Couponsbit and list your brand on our coupon site. Reach 500K+ monthly deal hunters through a trusted coupon website partnership USA brands love.",
    images: ["https://couponsbit.us/og-image.png"],
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
const partnerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/partner#webpage",
      url: "https://couponsbit.us/partner",
      name: "Partner With Couponsbit | Coupon Website Partnership USA",
      description:
        "Advertise on Couponsbit and list your brand on our coupon site. Reach 500K+ monthly deal hunters through a trusted coupon website partnership USA brands love.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/partner#breadcrumb",
      },
    },
    {
      // ✅ Service schema — signals to Google this is a B2B offering page
      "@type": "Service",
      "@id": "https://couponsbit.us/partner#service",
      name: "Brand Partnership & Advertising on Couponsbit",
      description:
        "List your brand on Couponsbit to advertise on our coupon website and reach 500K+ monthly deal hunters across the USA and internationally.",
      url: "https://couponsbit.us/partner",
      provider: {
        "@id": "https://couponsbit.us/#organization",
      },
      serviceType: "Coupon Website Partnership",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Brands, Retailers, E-commerce Businesses",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://couponsbit.us/#website",
      url: "https://couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is a trusted coupon website offering verified promo codes and coupon website partnership opportunities for USA brands.",
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
        contactType: "Sales",
        availableLanguage: "English",
        areaServed: "US",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://couponsbit.us/partner#breadcrumb",
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
          name: "Partner With Us",
          item: "https://couponsbit.us/partner",
        },
      ],
    },
  ],
};

export default function PartnerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(partnerSchema),
        }}
      />
      <PartnerPageContent />
    </>
  );
}