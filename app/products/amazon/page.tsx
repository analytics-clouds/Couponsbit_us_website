import type { Metadata } from "next";
import AmazonProductsContent from "./_components/AmazonProductsContent";

export const metadata: Metadata = {
  title: "Amazon Products",
  description:
    "Find the best Amazon India deals with verified coupon codes across electronics, fashion, home and more.",
};

export default function AmazonProductsPage() {
  return <AmazonProductsContent />;
}
