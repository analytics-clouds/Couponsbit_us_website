import type { Metadata } from "next";
import { Suspense } from "react";
import AbercrombieCouponsContent from "./_components/StoreCouponsContent";
import { ABERCROMBIE_COUPONS } from "./_components/offers";

const TITLE = "Abercrombie Promo Code: BOGO 50% Off Kids | Nov 2026";
const DESCRIPTION =
  "Use an Abercrombie promo code and Abercrombie discount code to get up to 30% off almost everything plus Buy 1, Get 1 50% off kids. Verified Nov 2026. Shop now.";
const CANONICAL = "https://www.couponsbit.us/stores/abercrombie-discount-code";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: CANONICAL,
    languages: {
      "en-US": CANONICAL,
      "en-GB": CANONICAL,
      "en-IN": CANONICAL,
      "x-default": CANONICAL,
    },
  },

  openGraph: {
    type: "website",
    url: CANONICAL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp",
        width: 1200,
        height: 630,
        alt: "Abercrombie Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp",
    ],
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

  other: {
    "geo.region": "US",
    "geo.country": "US",
  },
};

const storeOffers = ABERCROMBIE_COUPONS.map((coupon, index) => ({
  "@type": "ListItem",
  position: index + 1,
  item: {
    "@type": "Offer",
    name: coupon.title,
    description: coupon.description,
    url: CANONICAL,
    seller: {
      "@id": `${CANONICAL}#brand`,
    },
    priceCurrency: "USD",
    price: "0",
    ...(coupon.validTill && { validThrough: coupon.validTill }),
    ...(coupon.code && { couponCode: coupon.code }),
  },
}));

const abercrombieSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: {
        "@type": "Organization",
        name: "Couponsbit",
        url: "https://www.couponsbit.us",
      },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: {
        "@id": `${CANONICAL}#breadcrumb`,
      },
    },

    {
      "@type": "Organization",
      "@id": `${CANONICAL}#brand`,
      name: "Abercrombie & Fitch",
      url: "https://www.abercrombie.com",
    },

    {
      "@type": "ItemList",
      "@id": `${CANONICAL}#offerlist`,
      name: "Abercrombie Discount Codes & Coupon Codes",
      description:
        "Latest Abercrombie discount codes and offers for men's, women's and kids' apparel.",
      url: CANONICAL,
      numberOfItems: ABERCROMBIE_COUPONS.length,
      itemListElement: storeOffers,
    },

    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: { "@id": "https://www.couponsbit.us/#organization" },
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
      "@id": `${CANONICAL}#breadcrumb`,
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
          name: "Abercrombie Coupons",
          item: CANONICAL,
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Abercrombie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Abercrombie is an apparel retailer offering clothing for men, women and kids, along with fragrances.",
          },
        },
        {
          "@type": "Question",
          name: "Does Abercrombie offer discount codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Abercrombie runs promotional campaigns throughout the year, featuring denim deals, new arrival picks, and discount codes that can be manually applied or automatically added at checkout.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find an Abercrombie discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check CouponsBit for available Abercrombie discount codes, coupon codes, promo codes, vouchers, sales, and other promotional offers before shopping.",
          },
        },
        {
          "@type": "Question",
          name: "How do I use an Abercrombie coupon code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Add your eligible products to your shopping bag, proceed to checkout, enter the applicable code in the promotional field, and apply it. Check your order total to make sure the promotion has been accepted before completing the purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my Abercrombie promo code not working?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A code may have expired or may only apply to selected merchandise. Other possible restrictions can include minimum purchase requirements, excluded products, or limitations on combining promotions. Check the individual offer's terms before trying again.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use an Abercrombie discount code on sale items?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on the specific promotion. Some codes may apply only to eligible full-price merchandise, while others may include selected sale products. Always check the conditions of the offer.",
          },
        },
        {
          "@type": "Question",
          name: "Does Abercrombie have sales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Abercrombie runs seasonal and promotional sales throughout the year. Shoppers can also encounter markdowns around major US shopping periods and during end-of-season campaigns.",
          },
        },
        {
          "@type": "Question",
          name: "When does Abercrombie have its biggest sales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no single permanent biggest sale because promotions change from year to year. Black Friday, Cyber Monday, holiday shopping, end-of-season periods, and major seasonal transitions are useful times to watch for larger promotional campaigns.",
          },
        },
        {
          "@type": "Question",
          name: "Does Abercrombie sell men's clothing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Abercrombie has men's collections covering jeans, pants, shirts, T-shirts, sweaters, outerwear, activewear, swimwear, underwear, shoes, accessories, and fragrances.",
          },
        },
        {
          "@type": "Question",
          name: "Does Abercrombie sell activewear?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The brand offers women's and men's activewear, including leggings, athletic tops, sports bras, shorts, sweatshirts, and other active-inspired clothing.",
          },
        },
        {
          "@type": "Question",
          name: "Does Abercrombie sell kids' clothing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Abercrombie offers a dedicated kids' line called abercrombie kids alongside its men's and women's collections.",
          },
        },
        {
          "@type": "Question",
          name: "Does Abercrombie offer fragrances?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Abercrombie offers a range of fragrances and related products alongside its fashion collections.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers.",
          },
        },
        {
          "@type": "Question",
          name: "How can I save more when shopping at Abercrombie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start by checking CouponsBit for an Abercrombie discount code, then compare it with the current sale selection and any other applicable promotional offers. Check the terms carefully to determine which option provides the best value for your particular order.",
          },
        },
      ],
    },
  ],
};

export default function AbercrombieStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(abercrombieSchema) }}
      />
      <Suspense fallback={null}>
        <AbercrombieCouponsContent />
      </Suspense>
    </>
  );
}
