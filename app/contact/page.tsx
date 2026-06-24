import type { Metadata } from "next";
import ContactPageContent from "./_components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Couponsbit | Coupon Support & Coupon Help Center",
  description:
    "Need coupon support or coupon help? Contact Couponsbit, your trusted coupon website. Our support team responds within 24 hours to all coupon-related queries.",

  alternates: {
    canonical: "https://www.couponsbit.us/contact",
    languages: {
      "en-US": "https://www.couponsbit.us/contact",
      "x-default": "https://www.couponsbit.us/contact",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/contact",
    title: "Contact Couponsbit | Coupon Support & Coupon Help Center",
    description:
      "Need coupon support or coupon help? Contact Couponsbit, your trusted coupon website. Our support team responds within 24 hours to all coupon-related queries.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://www.couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Couponsbit – Coupon Support & Help Center",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Contact Couponsbit | Coupon Support & Coupon Help Center",
    description:
      "Need coupon support or coupon help? Contact Couponsbit, your trusted coupon website. Our support team responds within 24 hours to all coupon-related queries.",
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
const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.couponsbit.us/contact#contactpage",
      url: "https://www.couponsbit.us/contact",
      name: "Contact Couponsbit | Coupon Support & Coupon Help Center",
      description:
        "Need coupon support or coupon help? Contact Couponsbit, your trusted coupon website. Our support team responds within 24 hours to all coupon-related queries.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/contact#breadcrumb",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is a trusted coupon website offering verified promo codes, coupon help, and coupon support for top brands worldwide.",
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
      // ✅ ContactPage gets a richer contactPoint — response time added
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: "English",
        contactOption: "TollFree",
        areaServed: "US",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/contact#breadcrumb",
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
          name: "Contact",
          item: "https://www.couponsbit.us/contact",
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <ContactPageContent />
    </>
  );
}