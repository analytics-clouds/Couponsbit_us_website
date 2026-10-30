export interface Offer {
  id: string;
  label: string;
  value: string;
  sublabel: string;
  title: string;
  desc: string;
  bullets: string[];
}

export const OFFERS: Offer[] = [
  { id: "c1", label: "From",   value: "$27",   sublabel: "/7 DAYS",   title: "Airalo – Unlimited USA eSIM from $27 for 7 Days",    desc: "Get unlimited high-speed data on the T-Mobile 5G network for 7 days from just $27.",              bullets: ["Use promo code **AC10ALL** to access the available Airalo savings.", "Enjoy instant eSIM activation with no physical SIM required.", "Perfect for travelers who need reliable data while visiting the United States."] },
  { id: "c2", label: "Only",   value: "$59",   sublabel: "/30 DAYS",  title: "Airalo – 50GB USA eSIM for $59 for 30 Days",         desc: "Get 50GB of high-speed data for 30 days for just $59.",                                           bullets: ["Apply promo code **AC10ALL** to access the available Airalo deal.", "Includes 500 minutes and 500 SMS with reliable T-Mobile 5G coverage.", "A great option for extended trips across the United States."] },
  { id: "c3", label: "UP TO",  value: "10%",   sublabel: "CASHBACK",  title: "Airalo – Earn Up to 10% Cashback Rewards",           desc: "Earn up to 10% cashback through Airalo Rewards on eligible eSIM purchases.",                      bullets: ["Use code **AC10ALL** to access available Airalo offers.", "Progress through Silver, Gold, and Platinum reward tiers.", "Keep earning rewards to save more on future travel eSIM purchases."] },
  { id: "c4", label: "UP TO",  value: "20%",   sublabel: "OFF",       title: "Airalo – Existing Users Save Up to 20%",             desc: "Save up to 20% on selected eSIM plans with available Airalo promotions.",                          bullets: ["Enter promo code **AC10ALL** to access eligible savings.", "Enjoy exclusive savings designed for existing Airalo customers.", "Upgrade your travel plan and stay connected for less."] },
  { id: "c5", label: "EARN",   value: "$3",    sublabel: "",          title: "Airalo – Refer Friends & Earn $3",                   desc: "Give your friends $3 in Airmoney and receive $3 for every eligible referral.",                     bullets: ["Use code **AC10ALL** to access available Airalo offers.", "Earn rewards when friends successfully sign up through your referral.", "Share Airalo with friends and enjoy extra savings on future eSIM purchases."] },
  { id: "c6", label: "SAVE",   value: "15%",   sublabel: "OFF",       title: "Airalo – Get 15% OFF Your First eSIM",               desc: "Save 15% on your first eligible eSIM activation with Airalo.",                                    bullets: ["Apply promo code **AC10ALL** to access available savings.", "Choose from eligible eSIM plans and activate your service instantly.", "A great way for new users to save on their first travel eSIM."] },
  { id: "c7", label: "From",   value: "$4.50", sublabel: "",          title: "Airalo – USA eSIM Plans Starting at $4.50",          desc: "Get USA eSIM plans starting from just $4.50 for affordable travel connectivity.",                  bullets: ["Enter code **AC10ALL** to access available Airalo savings.", "Avoid roaming fees and enjoy instant digital eSIM activation.", "Stay connected across the United States without carrying a physical SIM."] },
];
