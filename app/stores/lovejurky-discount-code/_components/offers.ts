export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText: string;
  valueFontClass?: string;
  title: string;
  description: string;
  code: string;
  verified: string;
  userType: string;
  validTill: string;
  points: string[];
}

export const LOVEJURKY_COUPONS: Coupon[] = [
  {
    id: "lj1",
    topLabel: "FREE",
    mainValue: "SHIPPING",
    offText: "",
    title: "LovesJerkyCo Promo Code – Free Shipping on Orders Over $66",
    description: "Save on delivery when you stock up on your favourite jerky and seasonings.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get free shipping on all orders above $66",
      "Add jerky, seasonings, and snacks together in a single order",
      "A smart way to save on bigger purchases",
      "This limited-period shipping offer is on right now",
    ],
  },
  {
    id: "lj2",
    topLabel: "Only",
    mainValue: "$50",
    offText: "",
    title: "LovesJerkyCo Promo Code – 6-Flavour Sample Pack, $50",
    description: "Taste a variety of jerky flavours with this sample pack collection.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the 6-Flavour Sample Pack for just $50",
      "Try six different jerky flavours in one bundle",
      "Perfect for finding your favourite variety",
      "Available for a limited period only",
    ],
  },
  {
    id: "lj3",
    topLabel: "Only",
    mainValue: "$32",
    offText: "",
    title: "LovesJerkyCo Discount Code – Redmond Real Salt 5 oz, $32",
    description: "Add premium natural seasoning to your kitchen at just $32.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Buy Redmond Real Salt 5 oz starting at $32",
      "Ideal for everyday cooking and meal preparation",
      "Made from natural, mineral-rich salt",
      "Shop this limited-period offer today",
    ],
  },
  {
    id: "lj4",
    topLabel: "Only",
    mainValue: "$50",
    offText: "",
    title: "LovesJerkyCo Discount Code – 6-Flavour Sample Collection, $50",
    description: "Explore a selection of jerky favourites in one handy pack.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the 6-Flavour Sample Collection for $50",
      "Includes a variety of popular jerky flavours",
      "A good option for first-time buyers and for gifting",
      "Limited-period pricing is available right now",
    ],
  },
  {
    id: "lj5",
    topLabel: "Only",
    mainValue: "$24",
    offText: "",
    title: "LovesJerkyCo Coupon Code – Teriyaki Seasoning, $24",
    description: "Bring sweet and savoury flavour to your favourite recipes.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Shop Teriyaki Seasoning starting at just $24",
      "Works well with meats, vegetables, and marinades",
      "Easy to use in everyday cooking",
      "Available while this promotion lasts",
    ],
  },
  {
    id: "lj6",
    topLabel: "Only",
    mainValue: "$24",
    offText: "",
    title: "LovesJerkyCo Coupon Code – Lemon Pepper Seasoning, $24",
    description: "Make every meal better with classic lemon pepper flavour.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get Lemon Pepper Seasoning for only $24",
      "Adds a bold citrus taste to meat, seafood, and vegetables",
      "Great for grilling, roasting, and daily meals",
      "Shop this limited-period deal today",
    ],
  },
  {
    id: "lj7",
    topLabel: "From",
    mainValue: "$10",
    offText: "",
    title: "LovesJerkyCo Voucher Code – Red Chili Powder, From $10",
    description: "Add bold heat to your favourite dishes for less.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Red Chili Powder starts from only $10",
      "Perfect for seasoning meats, soups, and sauces",
      "Gives your recipes rich flavour and spicy heat",
      "Grab this offer while stocks last",
    ],
  },
  {
    id: "lj8",
    topLabel: "Save",
    mainValue: "10%",
    offText: "OFF",
    title: "LovesJerkyCo Voucher Code – Save 10% Sitewide",
    description: "Save 10% on eligible LovesJerkyCo products for a limited period.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enjoy 10% off on qualifying purchases across the site",
      "Apply the coupon code at checkout, if it is accepted",
      "This community offer is marked as needing a retest",
      "Try this limited-period saving before it expires",
    ],
  },
  {
    id: "lj9",
    topLabel: "Up to",
    mainValue: "15%",
    offText: "OFF",
    title: "LovesJerkyCo Deals – Save Up to 15% Sitewide",
    description: "Enjoy extra savings on selected LovesJerkyCo products.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 15% on eligible purchases across the site",
      "Apply the coupon code at checkout, if it is valid",
      "This community offer is currently marked as needing a retest",
      "Shop now and check whether the discount is still active",
    ],
  },
];
