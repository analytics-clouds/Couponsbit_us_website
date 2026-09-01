import type { Metadata } from "next";
import PhilipsCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "Philips Discount Code | 15% OFF + Save Up to £120",
  },
  description:
    "Get the latest Philips Discount Code and Philips Voucher to enjoy 15% OFF your first order, save up to £120, plus get FREE shipping on orders over £40.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/philips-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/philips-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/philips-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/philips-discount-code",
      "x-default": "https://www.couponsbit.us/stores/philips-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/philips-discount-code",
    title: "Philips Discount Code | 15% OFF + Save Up to £120",
    description:
      "Get the latest Philips Discount Code and Philips Voucher to enjoy 15% OFF your first order, save up to £120, plus get FREE shipping on orders over £40.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784881809/philips-logo_yuwckz.webp",
        width: 1200,
        height: 630,
        alt: "Philips Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Philips Discount Code | 15% OFF + Save Up to £120",
    description:
      "Get the latest Philips Discount Code and Philips Voucher to enjoy 15% OFF your first order, save up to £120, plus get FREE shipping on orders over £40.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784881809/philips-logo_yuwckz.webp"],
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

const philipsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/philips-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/philips-discount-code",
      name: "Philips Discount Code | 15% OFF + Save Up to £120",
      description:
        "Get the latest Philips Discount Code and Philips Voucher to enjoy 15% OFF your first order, save up to £120, plus get FREE shipping on orders over £40.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/philips-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/philips-discount-code#offerlist",
      name: "Philips Coupon Codes & Promo Codes",
      description:
        "Latest verified Philips coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/philips-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Philips – FREE Shipping on Orders Over £40",
            description: "Enjoy FREE Shipping on all orders above £40.",
            url: "https://www.couponsbit.us/stores/philips-discount-code",
            seller: {
              "@type": "Organization",
              name: "Philips",
              url: "https://www.usa.philips.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Offer",
            name: "Philips Baristina Espresso Machine – Only £379.99",
            description: "Bring café-quality coffee home with the Philips Baristina Espresso Machine for just £379.99.",
            url: "https://www.couponsbit.us/stores/philips-discount-code",
            seller: {
              "@type": "Organization",
              name: "Philips",
              url: "https://www.usa.philips.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Offer",
            name: "Philips Sonicare DiamondClean 9900 Prestige – SAVE £120",
            description: "Get the Philips Sonicare DiamondClean 9900 Prestige for only £329.99 (Regular Price £449.99).",
            url: "https://www.couponsbit.us/stores/philips-discount-code",
            seller: {
              "@type": "Organization",
              name: "Philips",
              url: "https://www.usa.philips.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Offer",
            name: "Philips i9000 Prestige Shaver – SAVE £120",
            description: "Buy the Philips i9000 Prestige Electric Shaver for just £329.99 (Regular Price £449.99).",
            url: "https://www.couponsbit.us/stores/philips-discount-code",
            seller: {
              "@type": "Organization",
              name: "Philips",
              url: "https://www.usa.philips.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Offer",
            name: "Philips Lumea IPL 9900 Pro – From £47.99/Month",
            description: "Experience long-lasting hair reduction with Philips Lumea IPL 9900 Pro.",
            url: "https://www.couponsbit.us/stores/philips-discount-code",
            seller: {
              "@type": "Organization",
              name: "Philips",
              url: "https://www.usa.philips.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Offer",
            name: "Philips 7000 Series Contact Grill – Only £119.99",
            description: "Cook delicious meals with the Philips 7000 Series Contact Grill for £119.99.",
            url: "https://www.couponsbit.us/stores/philips-discount-code",
            seller: {
              "@type": "Organization",
              name: "Philips",
              url: "https://www.usa.philips.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "Offer",
            name: "Philips 5000 Series Contact Grill – Only £74.99",
            description: "Get the Philips 5000 Series Contact Grill for just £74.99.",
            url: "https://www.couponsbit.us/stores/philips-discount-code",
            seller: {
              "@type": "Organization",
              name: "Philips",
              url: "https://www.usa.philips.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@type": "Offer",
            name: "Philips OneUp 5000 Series Electric Mop – SAVE £30",
            description: "Buy the Philips OneUp 5000 Series Electric Mop for only £119.99 (Regular Price £149.99).",
            url: "https://www.couponsbit.us/stores/philips-discount-code",
            seller: {
              "@type": "Organization",
              name: "Philips",
              url: "https://www.usa.philips.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 9,
          item: {
            "@type": "Offer",
            name: "Philips – First Order Offer, SAVE 15%",
            description: "Sign up today and enjoy 15% OFF your first Philips online order.",
            url: "https://www.couponsbit.us/stores/philips-discount-code",
            seller: {
              "@type": "Organization",
              name: "Philips",
              url: "https://www.usa.philips.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 10,
          item: {
            "@type": "Offer",
            name: "Philips – Newsletter Bonus, Get £10 OFF",
            description: "Subscribe to the Philips newsletter and receive a £10 discount on your next purchase.",
            url: "https://www.couponsbit.us/stores/philips-discount-code",
            seller: {
              "@type": "Organization",
              name: "Philips",
              url: "https://www.usa.philips.com",
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
      "@id": "https://www.couponsbit.us/stores/philips-discount-code#breadcrumb",
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
          name: "Philips Coupons",
          item: "https://www.couponsbit.us/stores/philips-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/philips-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Philips?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Philips is a global technology company that develops personal care products, home appliances, oral care devices, healthcare solutions, kitchen appliances, and consumer electronics.",
          },
        },
        {
          "@type": "Question",
          name: "What products does Philips sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Philips offers electric shavers, toothbrushes, air fryers, coffee machines, air purifiers, vacuum cleaners, steam irons, baby products, grooming tools, and many other household essentials.",
          },
        },
        {
          "@type": "Question",
          name: "Does Philips offer replacement accessories?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Philips sells replacement brush heads, filters, blades, charging accessories, and other spare parts for many of its products.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Philips discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Philips discount code, Philips voucher, Philips promo code, and Philips coupon code on CouponsBit before making your purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Does Philips offer products for home and personal care?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Philips offers an extensive range of products across personal grooming, oral care, kitchen appliances, home cleaning, air treatment, and baby care categories.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted global brands.",
          },
        },
      ],
    },
  ],
};

export default function PhilipsStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(philipsSchema),
        }}
      />
      <PhilipsCouponsContent />
    </>
  );
}