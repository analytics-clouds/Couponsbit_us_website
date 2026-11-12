export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText?: string;
  title: string;
  description: string;
  code?: string;
  points: string[];
  affiliateUrl: string;
  verified?: boolean;
  userType?: string;
  validTill?: string;
}

const STORE_URL = "https://performance.gotrackier.com/click?campaign_id=4792&pub_id=1015";

export const AVIS_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "UP TO",
    mainValue: "20%",
    offText: "OFF",
    title: "Avis Discount Code – Up to 20% Off in the Winter Sale",
    description: "Book directly with Avis and save up to 20% during the Winter Sale.",
    affiliateUrl: STORE_URL,
    points: [
      "Save up to 20% on eligible car rentals.",
      "Book by November 30 and travel by March 22, 2027.",
      "Enjoy discounts on participating rentals.",
      "Perfect for winter holidays and business trips.",
    ],
  },
  {
    id: "c2",
    topLabel: "GET",
    mainValue: "10%",
    offText: "OFF",
    title: "Avis Discount Code – 10% Off with Avis Preferred",
    description: "Join Avis Preferred for free and get 10% off eligible rentals.",
    affiliateUrl: STORE_URL,
    points: [
      "Save 10% with a free Avis Preferred membership.",
      "Get member discounts across Europe and South Africa.",
      "Enjoy priority service and special partner perks.",
      "Great for frequent travelers.",
    ],
  },
  {
    id: "c3",
    topLabel: "UP TO",
    mainValue: "20%",
    offText: "OFF",
    title: "Avis Promo Code – Up to 20% Off with Avis Drive",
    description: "Sign up for Avis Drive and get special discounts on every rental.",
    affiliateUrl: STORE_URL,
    points: [
      "Save up to 20% on rentals in the UK.",
      "Get up to 15% off eligible rentals across Europe.",
      "Enjoy savings every time you rent.",
      "Perfect for regular travelers.",
    ],
  },
  {
    id: "c4",
    topLabel: "EARN",
    mainValue: "15%",
    offText: "BACK",
    title: "Avis Promo Code – 15% Back on Eligible Rentals",
    description: "Earn a 15% Amazon.co.uk Gift Card on qualifying Avis rentals.",
    affiliateUrl: STORE_URL,
    points: [
      "Get 15% back as an Amazon.co.uk Gift Card.",
      "Valid on eligible rentals worldwide.",
      "Available on qualifying bookings only.",
      "Great for travelers who want extra rewards.",
    ],
  },
  {
    id: "c5",
    topLabel: "EXTRA",
    mainValue: "5%",
    offText: "OFF",
    title: "Avis Voucher Code – Extra 5% Off Your Next Rental",
    description: "Sign up for Avis emails and get an extra 5% off your next booking.",
    affiliateUrl: STORE_URL,
    points: [
      "Save an extra 5% on your next eligible rental.",
      "Get the offer by subscribing to Avis emails.",
      "Stay up to date on future deals and promotions.",
      "Ideal for customers planning another trip.",
    ],
  },
  {
    id: "c6",
    topLabel: "Join For",
    mainValue: "$19",
    offText: "",
    title: "Avis Discount Code – Join Avis Drive Gold for Just $19",
    description: "Become an Avis Drive Gold member for only $19 and enjoy special rental perks.",
    affiliateUrl: STORE_URL,
    points: [
      "Join Avis Drive Gold for just $19 for a limited time.",
      "Save compared to the regular $39 membership price.",
      "Unlock member-only rental perks.",
      "Great for frequent travelers and renters.",
    ],
  },
  {
    id: "c7",
    topLabel: "UP TO",
    mainValue: "20%",
    offText: "OFF",
    title: "Avis Discount Code – Up to 20% Off on USA Car Rentals",
    description: "Book your next rental with Avis and save up to 20%.",
    affiliateUrl: STORE_URL,
    points: [
      "Save up to 20% on eligible car rentals.",
      "Available at participating USA locations.",
      "Pick from a wide selection of rental vehicles.",
      "Perfect for business trips and vacations.",
    ],
  },
  {
    id: "c8",
    topLabel: "Only",
    mainValue: "$99",
    offText: "/yr",
    title: "Avis Promo Code – Drive Gold Annual Membership for $99",
    description: "Get a full year of Avis Drive Gold membership for only $99.",
    affiliateUrl: STORE_URL,
    points: [
      "Get an annual Drive Gold membership for $99.",
      "Enjoy member discounts and perks.",
      "Save all year long.",
      "Ideal for frequent car renters.",
    ],
  },
  {
    id: "c9",
    topLabel: "UP TO",
    mainValue: "20%",
    offText: "OFF",
    title: "Avis Promo Code – Up to 20% Off on Every Rental",
    description: "Save on every eligible Avis rental with discounts of up to 20%.",
    affiliateUrl: STORE_URL,
    points: [
      "Get up to 20% off qualifying rentals.",
      "Book eligible vehicles at lower prices.",
      "Save on both short and long rentals.",
      "Great for everyday and holiday travel.",
    ],
  },
  {
    id: "c10",
    topLabel: "UP TO",
    mainValue: "40%",
    offText: "OFF",
    title: "Avis Voucher Code – Up to 40% Off on Late-Night Pickups",
    description: "Book eligible late-night rentals and save up to 40%.",
    affiliateUrl: STORE_URL,
    points: [
      "Save up to 40% on pickups between 9 PM and 6 AM.",
      "Enjoy lower rental costs during eligible hours.",
      "Available on participating bookings.",
      "Perfect for late-night travelers.",
    ],
  },
  {
    id: "c11",
    topLabel: "UP TO",
    mainValue: "30%",
    offText: "OFF",
    title: "Avis Voucher Code – Up to 30% Off on Airport Return Rides",
    description: "Cut your travel costs with up to 30% off eligible airport return rides.",
    affiliateUrl: STORE_URL,
    points: [
      "Save up to 30% on airport return bookings.",
      "Get low-cost rides to and from the airport.",
      "Available on eligible rides.",
      "Great for frequent flyers.",
    ],
  },
  {
    id: "c12",
    topLabel: "UP TO",
    mainValue: "30%",
    offText: "OFF",
    title: "Avis Coupon Code – Up to 30% Off on Toyota Innova HyCross Rentals",
    description: "Travel in comfort with discounts on Toyota Innova HyCross outstation rides.",
    affiliateUrl: STORE_URL,
    points: [
      "Get up to 30% off eligible Innova HyCross rentals.",
      "Enjoy roomy seating for long-distance travel.",
      "Perfect for family trips and group travel.",
      "Available on qualifying outstation bookings.",
    ],
  },
  {
    id: "c13",
    topLabel: "SAVE",
    mainValue: "$30",
    offText: "OFF",
    title: "Avis Coupon Code – $30 Off on Eligible Rentals",
    description: "Get extra savings on qualifying Avis car rentals.",
    affiliateUrl: STORE_URL,
    points: [
      "Save $30 on eligible rental bookings.",
      "Available on qualifying reservations.",
      "Lower the cost of your next trip.",
      "Great for longer rentals.",
    ],
  },
  {
    id: "c14",
    topLabel: "UP TO",
    mainValue: "35%",
    offText: "OFF",
    title: "Avis Referral Code – Up to 35% Off on Eligible Rentals",
    description: "Get bigger savings on select Avis rental bookings.",
    affiliateUrl: STORE_URL,
    points: [
      "Save up to 35% on qualifying rentals.",
      "Enjoy discounts across select vehicle categories.",
      "Book your trip for less.",
      "Perfect for business and leisure travelers.",
    ],
  },
  {
    id: "c15",
    topLabel: "SAVE",
    mainValue: "$15",
    offText: "OFF",
    title: "Avis Referral Code – $15 Off Your Next Rental",
    description: "Lower your rental cost with an extra $15 discount.",
    affiliateUrl: STORE_URL,
    points: [
      "Get $15 off eligible bookings.",
      "Enjoy instant savings on qualifying rentals.",
      "Available on select reservations.",
      "Great for travelers on a budget.",
    ],
  },
  {
    id: "c16",
    topLabel: "GET",
    mainValue: "FREE",
    offText: "UPGRADE",
    title: "Avis Offer – Free Vehicle Upgrades",
    description: "Move up to a better ride with free vehicle upgrades on eligible rentals.",
    affiliateUrl: STORE_URL,
    points: [
      "Get a free vehicle upgrade on qualifying bookings.",
      "Drive a higher-category vehicle at no extra cost.",
      "Subject to vehicle availability.",
      "Ideal for travelers who want extra comfort.",
    ],
  },
];
