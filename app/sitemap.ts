import type { MetadataRoute } from "next";
import { allStores } from "@/lib/stores-data";

const BASE_URL = "https://couponsbit.us";

const CATEGORIES = ["electronics", "entertainment", "mobile", "software", "travel"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
    },

    // High-traffic deal pages
    {
      url: `${BASE_URL}/deals`,
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    {
      url: `${BASE_URL}/deals-of-the-day`,
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    {
      url: `${BASE_URL}/deals-of-the-week`,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },

    // Stores listing + all store pages (pulled from lib/stores-data.ts)
    {
      url: `${BASE_URL}/stores`,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    ...allStores.map((store) => ({
      url: `${BASE_URL}/stores/${store.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
    })),

    // Blog
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${BASE_URL}/blog/amazon-savings-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },

    // Categories
    {
      url: `${BASE_URL}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    ...CATEGORIES.map((category) => ({
      url: `${BASE_URL}/categories/${category}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
    })),

    // Products
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },

    // Info / support pages
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/partner`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/faqs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    // Legal
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: `${BASE_URL}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
  ];
}
