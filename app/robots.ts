import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // AI crawlers / assistants
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "Google-Extended",
          "GoogleOther",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Applebot",
          "Applebot-Extended",
          "Bingbot",
          "CCBot",
          "Bytespider",
          "Meta-ExternalAgent",
          "Meta-ExternalFetcher",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.couponsbit.us/sitemap.xml",
  };
}
