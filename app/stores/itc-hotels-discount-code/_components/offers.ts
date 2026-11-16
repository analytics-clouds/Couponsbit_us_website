export interface Offer {
  id: string;
  label: string;
  value: string;
  title: string;
  desc: string;
  bullets: string[];
  verified?: string;
  userType?: string;
  validTill?: string;
}

export const OFFERS: Offer[] = [
  {
    id: "c1",
    label: "UP TO",
    value: "35% OFF",
    title: "ITC Hotels Deals: Up to 35% Off Member-Exclusive Stays",
    desc: "Get member-only rates and save up to 35% on eligible ITC Hotels stays.",
    verified: "Verified",
    userType: "Members Only",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 35% on select hotel bookings with this member-exclusive offer.",
      "Enjoy upscale stays at participating ITC Hotels.",
      "Special pricing is reserved for eligible members.",
      "Book during the promotional period to get the most savings."
    ]
  },
  {
    id: "c2",
    label: "UP TO",
    value: "50% OFF",
    title: "ITC Hotels Offers: Up to 50% Off with Membership Savings",
    desc: "Join the ITC Hotels membership program and unlock savings of up to 50%.",
    verified: "Verified",
    userType: "Members Only",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 50% on eligible hotel stays as a member.",
      "Get access to exclusive rates through the membership program.",
      "Enjoy better value on luxury accommodations.",
      "Sign up to take advantage of this limited-time offer."
    ]
  },
  {
    id: "c3",
    label: "UP TO",
    value: "20% OFF",
    title: "ITC Hotels Promo Code: Save Up to 20% on the All-In Getaway Package",
    desc: "Plan a relaxing escape and save up to 20% with the All-In Getaway package.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take up to 20% off eligible All-In Getaway bookings.",
      "Enjoy a luxury stay with dining and hotel experiences included.",
      "A great pick for a stress-free vacation with extra value.",
      "Book while this limited-time package lasts."
    ]
  },
  {
    id: "c4",
    label: "FLAT",
    value: "33% OFF",
    title: "ITC Hotels Discount Code: Flat 33% Off a Goa Vacation",
    desc: "Head to Goa and enjoy a flat 33% discount on eligible stays.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save 33% on qualifying ITC Hotels stays in Goa.",
      "Enjoy a relaxing beach getaway for less.",
      "Stay in luxury accommodations at a lower price.",
      "Limited-time offer on eligible bookings."
    ]
  },
  {
    id: "c5",
    label: "FLAT",
    value: "20% OFF",
    title: "ITC Hotels Coupon Code: Flat 20% Off with All-In Stay Savings",
    desc: "Get extra value with 20% off eligible hotel services during your stay.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take 20% off eligible food, beverages, and hotel services.",
      "Make your stay better with added dining and wellness savings.",
      "Valid on qualifying All-In Stay bookings.",
      "Enjoy this verified offer for a limited time."
    ]
  },
  {
    id: "c6",
    label: "SPECIAL",
    value: "RETREAT",
    title: "ITC Hotels Offers: Grand Golf Retreat Experience",
    desc: "Treat yourself to a luxury golf getaway with the exclusive Grand Golf Retreat package.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Enjoy a premium golf-focused stay at participating ITC Hotels.",
      "Pair luxury accommodations with outstanding golf experiences.",
      "A great fit for golf lovers looking for a relaxing escape.",
      "Book this limited-time retreat while it’s available."
    ]
  },
  {
    id: "c7",
    label: "FLAT",
    value: "33% OFF",
    title: "ITC Hotels Voucher Code: Flat 33% Off an Extended Escape",
    desc: "Stay longer and save more with a flat 33% discount on eligible stays.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save 33% on qualifying extended hotel stays.",
      "Get more time to unwind at luxury ITC Hotels.",
      "A good match for longer vacations or weekend getaways.",
      "Book before this limited-time promotion ends."
    ]
  },
  {
    id: "c8",
    label: "FLAT",
    value: "15% OFF",
    title: "ITC Hotels Discount Code: Flat 15% Off a Summer Vacation",
    desc: "Plan your summer getaway and take 15% off eligible ITC Hotels bookings.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save 15% on qualifying summer vacation stays.",
      "Enjoy luxury accommodations at a lower price.",
      "Ideal for seasonal family trips or relaxing holidays.",
      "Limited-time savings on eligible reservations."
    ]
  }
];
