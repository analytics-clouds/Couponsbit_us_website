import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.couponsbit.us"),
  title: {
    default: "Coupons Clouds — India's #1 Verified Coupon & Deal Platform",
    template: "%s | Coupons Clouds",
  },
  description:
    "Find verified coupons, promo codes and deals for 2000+ top stores in India. Save money on fashion, electronics, travel, food & more. Updated daily.",
  keywords: [
    "coupons",
    "coupon codes",
    "deals",
    "promo codes",
    "discount codes",
    "India coupons",
    "Amazon coupons",
    "Flipkart coupons",
    "Myntra coupons",
    "online shopping deals",
    "cashback offers",
  ],
  authors: [{ name: "Coupons Clouds" }],
  creator: "Coupons Clouds",
  publisher: "Coupons Clouds",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.couponsbit.us",
    siteName: "Coupons Clouds",
    title: "Coupons Clouds — India's #1 Verified Coupon & Deal Platform",
    description:
      "Find verified coupons, promo codes and deals for 2000+ top stores in India. Save money on fashion, electronics, travel, food & more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coupons Clouds — India's #1 Coupon Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coupons Clouds — India's #1 Verified Coupon & Deal Platform",
    description:
      "Find verified coupons, promo codes and deals for 2000+ top stores in India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GG00HVDG2R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GG00HVDG2R');
          `}
        </Script>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
