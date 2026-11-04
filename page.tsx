import type { Metadata } from 'next'
import { Suspense } from 'react'
import UnderratedClubStore from './_components/UnderratedClubStore'
import { UNDERRATED_CLUB_COUPONS } from './_components/underratedClubCoupons'

const TITLE = 'Underrated Club Coupon Code | Up to 42% OFF + Extra 10% OFF'
const DESCRIPTION = 'Save up to 42% with the latest Underrated Club coupon code. Use coupon code CREW10 to get an extra 10% OFF on sweatshirts, hoodies, jeans, T-shirts, and more.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/underrated-club-coupon-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/underrated-club-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Underrated Club Coupon Code — CouponsCrew' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: { 'geo.region': 'US', 'geo.country': 'US', language: 'en-US' },
}

const titleCase = (s: string) => s.toLowerCase().split(' ').map((word) => (word === '&' ? word : word.charAt(0).toUpperCase() + word.slice(1))).join(' ')

const underratedClubOffers = UNDERRATED_CLUB_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Underrated Club ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/underrated-club-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/underrated-club-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/underrated-club-coupon-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Underrated Club Coupon Code', item: 'https://www.couponscrew.com/stores/underrated-club-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Underrated Club)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/underrated-club-coupon-code#brand',
      name: 'Underrated Club',
      url: 'https://www.underratedclub.com',
      sameAs: ['https://www.instagram.com/underratedclub'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/underrated-club-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best Underrated Club coupon code right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As of November 2026, CREW10 gives 10% off sitewide with no minimum — that's the strongest single code available right now. For larger orders, flat 20% off (above ₹7,999) and flat 25% off (above ₹9,999) give better savings if your cart crosses those thresholds. Stack CREW10 with the prepaid 5% off for maximum saving without needing any code changes."
      }
    },
    {
      "@type": "Question",
      "name": "Does Underrated Club offer free shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Underrated Club offers free shipping on all orders with no minimum cart requirement."
      }
    },
    {
      "@type": "Question",
      "name": "What is Underrated Club's return policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Return policy details aren't prominently listed on third-party coupon sources. Check theunderratedclub.com's own policy page before placing an order — particularly for sizing-related returns, since D2C streetwear brands have varying exchange windows."
      }
    },
    {
      "@type": "Question",
      "name": "Is Underrated Club available on Myntra or Flipkart?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The brand currently sells primarily through its own website and quick-commerce channels in Mumbai and Bengaluru. Marketplace expansion (Myntra, Amazon) has been mentioned as a future plan but is not confirmed at the time of writing — check the brand's social channels for updates."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Underrated Club different from Bewakoof or Snitch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Underrated Club sits in a slightly different positioning — smaller catalogue, slower-drop model, focus on fit and fabric over volume. Bewakoof and Snitch release new collections very frequently, which keeps prices competitive but means more variability in quality across styles. Underrated Club targets buyers who want fewer pieces that last longer, rather than filling a wardrobe with a high volume of budget items. The price entry point (tees from ₹949) is slightly higher than Bewakoof's base but below premium streetwear labels."
      }
    }
  ]
},
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/underrated-club-coupon-code#offerlist',
      name: 'Underrated Club Coupon Codes & Offers',
      numberOfItems: underratedClubOffers.length,
      itemListElement: underratedClubOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...underratedClubOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <UnderratedClubStore />
      </Suspense>
    </>
  )
}
