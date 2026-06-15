import type { Metadata } from "next";
import FAQsContent from "./_components/FAQsContent";

export const metadata: Metadata = {
  title: "Couponsbit FAQs – How to Use Promo Codes & Coupon Help",
  description:
    "Got questions? Couponsbit's FAQ page covers how to use promo codes, coupon help, cashback offers, and deals. Find quick answers to all your coupon queries here.",

  alternates: {
    canonical: "https://couponsbit.us/faqs",
    languages: {
      "en-US": "https://couponsbit.us/faqs",
      "x-default": "https://couponsbit.us/faqs",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://couponsbit.us/faqs",
    title: "Couponsbit FAQs – How to Use Promo Codes & Coupon Help",
    description:
      "Got questions? Couponsbit's FAQ page covers how to use promo codes, coupon help, cashback offers, and deals. Find quick answers to all your coupon queries here.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Couponsbit FAQs – How to Use Promo Codes & Coupon Help",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Couponsbit FAQs – How to Use Promo Codes & Coupon Help",
    description:
      "Got questions? Couponsbit's FAQ page covers how to use promo codes, coupon help, cashback offers, and deals. Find quick answers to all your coupon queries here.",
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
const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://couponsbit.us/faqs#faqpage",
      url: "https://couponsbit.us/faqs",
      name: "Couponsbit FAQs – How to Use Promo Codes & Coupon Help",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/faqs#breadcrumb",
      },
      // ✅ Add your actual FAQ questions/answers here
      mainEntity: [
  {
    "@type": "Question",
    name: "How do I use a promo code on Couponsbit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "To use a promo code, search for your preferred brand or store on Couponsbit, click on the available coupon code to reveal it, copy the code, and paste it during checkout on the retailer's website. Once applied successfully, the discount will be reflected in your total amount.",
    },
  },
  {
    "@type": "Question",
    name: "Are the promo codes on Couponsbit verified?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Our team regularly checks and updates promo codes, discount codes, and online shopping deals to ensure users receive active and working offers from trusted international brands.",
    },
  },
  {
    "@type": "Question",
    name: "How can I get coupon help on Couponsbit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "If you need coupon help, you can visit our FAQs page for guidance or contact our support team through the Contact page. We aim to assist users with promo code usage, coupon-related queries, and deal information.",
    },
  },
  {
    "@type": "Question",
    name: "Why is my promo code not working?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A promo code may not work for several reasons. The offer could have expired, the coupon may only apply to selected products, or minimum purchase conditions may not be fulfilled. Some discount codes are also limited to first-time users or specific regions.",
    },
  },
  {
    "@type": "Question",
    name: "Is Couponsbit free to use?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Couponsbit is completely free for all users. You can browse online deals, promo codes, and discount codes without paying any subscription or membership fee.",
    },
  },
  {
    "@type": "Question",
    name: "Does Couponsbit sell products directly?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Couponsbit is a coupon and deals platform that helps users discover savings opportunities from third-party retailers and international brands. We do not directly sell products or services.",
    },
  },
  {
    "@type": "Question",
    name: "How often are coupons updated on Couponsbit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Our team updates promo codes, online deals, and discount offers regularly to provide users with the latest shopping deals and verified coupon codes.",
    },
  },
  {
    "@type": "Question",
    name: "Can I use multiple promo codes together?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This depends on the retailer's coupon policy. Some brands allow coupon stacking, while others permit only one promo code per order.",
    },
  },
  {
    "@type": "Question",
    name: "What types of deals can I find on Couponsbit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "You can find fashion promo codes, shopping discounts, cashback deals, electronics offers, travel deals, lifestyle discounts, and seasonal online shopping promotions.",
    },
  },
  {
    "@type": "Question",
    name: "Are the deals available internationally?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Couponsbit focuses on international brands and online shopping websites, helping users discover global promo codes and shopping deals.",
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
        "Couponsbit is the best coupon site online offering verified promo codes and deals for top brands worldwide.",
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
      "@id": "https://couponsbit.us/faqs#breadcrumb",
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
          name: "FAQs",
          item: "https://couponsbit.us/faqs",
        },
      ],
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <FAQsContent />
    </>
  );
}