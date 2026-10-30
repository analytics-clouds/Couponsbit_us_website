export interface Offer {
  id: string;
  label: string;
  value: string;
  title: string;
  desc: string;
  bullets: string[];
}

export const OFFERS: Offer[] = [
  { id: "c1", label: "SALE", value: "30% OFF", title: "Abercrombie Discount Code – Up to 30% OFF Almost Everything", desc: "Enjoy up to 30% OFF almost everything during the limited-time Abercrombie sale.", bullets: ["Shop savings across women's clothing, men's fashion, jeans, tops, dresses, and more.", "This online-only USA deal is available for a limited time.", "Don't miss the chance to refresh your wardrobe with Abercrombie styles at reduced prices."] },
  { id: "c2", label: "KIDS", value: "BOGO 50%", title: "Abercrombie Kids Discount code – Buy One, Get One 50% OFF", desc: "Shop Buy One, Get One 50% OFF on almost everything at Abercrombie Kids.", bullets: ["Find stylish deals across girls, boys, baby, and toddler collections.", "Stock up on everyday kids' clothing while saving on additional items.", "Available for Abercrombie shoppers in the USA for a limited time."] },
  { id: "c3", label: "MEN", value: "CLEARANCE", title: "Abercrombie Men Discount Code – 100% Cotton Denim Shirt Clearance", desc: "Get the A&F Archive 100% Cotton Short-Sleeve Denim Button-Up Shirt for $39.99, down from $75.", bullets: ["Save approximately 47% OFF during the Abercrombie men's clearance sale.", "Features a versatile 100% cotton denim design for casual everyday outfits.", "Shop this Abercrombie USA men's clearance deal while sizes last."] },
  { id: "c4", label: "MEN", value: "CLEARANCE", title: "Abercrombie Men – Vintage Graphic Tee Clearance", desc: "Get the 100% Cotton Fallout Vintage-Inspired Graphic Tee for $24.99, reduced from $45.", bullets: ["Save approximately 44% OFF on this men's clearance style.", "Made with 100% cotton and featuring a vintage-inspired graphic design.", "A great Abercrombie USA deal for casual and everyday men's fashion."] },
  { id: "c5", label: "NEW", value: "NFL", title: "Abercrombie – New England Patriots Denim Button-Up Shirt", desc: "Shop the NFL by Abercrombie New England Patriots Denim Button-Up Shirt for $100.", bullets: ["Made from 100% cotton for a comfortable and versatile fit.", "Part of the new NFL collection launched for the kickoff season.", "A stylish USA sports-inspired addition for New England Patriots fans."] },
  { id: "c6", label: "KIDS", value: "CLEARANCE", title: "Abercrombie Kids – Lace Mini Skort Clearance", desc: "Get the Lace Mini Skort for just $18.99, down from $34.95.", bullets: ["Save approximately 46% OFF on this Abercrombie Kids clearance style.", "A versatile fashion piece that can be styled for casual and everyday looks.", "Shop the Abercrombie USA kids' clearance sale before stock runs out."] },
  { id: "c7", label: "SHIP", value: "FREE $99+", title: "Abercrombie – Free Standard Shipping on $99+", desc: "Get Free Standard Shipping and Handling on orders over $99.", bullets: ["Shop your favorite Abercrombie clothing and reach the minimum order value to qualify.", "Available on qualifying orders for Abercrombie customers in the USA.", "Save on delivery costs while shopping the latest men's, women's, and kids' styles."] },
];
