export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText: string;
  valueFontClass: string;
  title: string;
  description: string;
  code: string;
  points: string[];
}

export const ZEN_HOTELS_COUPONS: Coupon[] = [
  {
    id: "zh1",
    topLabel: "From",
    mainValue: "$2,625",
    offText: "",
    valueFontClass: "text-[18px] sm:text-4xl",
    title: "ZenHotels Discount Code – New York Stay from $2,625",
    description: "Book a roomy stay at Residence Inn by Marriott JFK and get easy access to the airport in New York.",
    code: "",
    points: [
      "Stay at Residence Inn by Marriott JFK from $2,625.",
      "Enjoy large suites with modern comforts.",
      "Located close to JFK Airport.",
      "A smart pick for business and leisure travelers.",
    ],
  },
  {
    id: "zh2",
    topLabel: "Get",
    mainValue: "$35",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "ZenHotels Discount Code – $35 Off App Bookings",
    description: "Save $35 on eligible hotel stays when you book through the ZenHotels app.",
    code: "",
    points: [
      "Get $35 off on qualifying hotel reservations.",
      "Works on bookings made in the ZenHotels app.",
      "Get extra savings on your next vacation.",
      "Great for travelers who want to cut their lodging costs.",
    ],
  },
  {
    id: "zh3",
    topLabel: "From",
    mainValue: "$2,009",
    offText: "",
    valueFontClass: "text-[18px] sm:text-4xl",
    title: "ZenHotels Promo Code – Greece Beach Stay from $2,009",
    description: "Head to Crete for a luxury stay right on the beach at Avra Imperial Hotel.",
    code: "",
    points: [
      "Book your stay from $2,009.",
      "Relax at the beachfront Avra Imperial Hotel.",
      "Enjoy top-notch amenities and views of the coast.",
      "Perfect for beach vacations and family getaways.",
    ],
  },
  {
    id: "zh4",
    topLabel: "From",
    mainValue: "$2,553",
    offText: "",
    valueFontClass: "text-[18px] sm:text-4xl",
    title: "ZenHotels Promo Code – Portugal Luxury Stay from $2,553",
    description: "Enjoy five-star comfort at Tivoli Carvoeiro with beautiful views of the Algarve.",
    code: "",
    points: [
      "Book your stay from $2,553.",
      "Enjoy luxury rooms that look out over the Algarve coast.",
      "Stay at the well-known Tivoli Carvoeiro Hotel.",
      "Great for a relaxing trip to the coast.",
    ],
  },
  {
    id: "zh5",
    topLabel: "From",
    mainValue: "$1,145",
    offText: "",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "ZenHotels Voucher Code – Prague Luxury Stay from $1,145",
    description: "Enjoy a refined stay at the Alchymist Grand Hotel in the center of Prague.",
    code: "",
    points: [
      "Book high-end rooms from $1,145.",
      "Stay at the luxurious Alchymist Grand Hotel.",
      "Enjoy classic architecture with modern comfort.",
      "Great for couples and luxury travelers.",
    ],
  },
  {
    id: "zh6",
    topLabel: "From",
    mainValue: "$852",
    offText: "",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "ZenHotels Voucher Code – Paris City Break from $852",
    description: "Stay near the top Paris sights at a comfortable hotel in the city center.",
    code: "",
    points: [
      "Book your Paris stay from $852.",
      "Stay close to shops, restaurants, and famous landmarks.",
      "Enjoy a comfortable room at Hôtel Vacances Bleues Provinces Opéra.",
      "A good choice for a sightseeing trip.",
    ],
  },
  {
    id: "zh7",
    topLabel: "From",
    mainValue: "$818",
    offText: "",
    valueFontClass: "text-[18px] sm:text-4xl",
    title: "ZenHotels Coupon Code – Milan Getaway from $818",
    description: "Explore Milan with a relaxing stay at Hotel Berna, close to the city's top spots.",
    code: "",
    points: [
      "Book your stay from $818.",
      "Enjoy modern rooms with easy access around the city.",
      "Stay at the well-placed Hotel Berna.",
      "Great for shopping and sightseeing trips.",
    ],
  },
  {
    id: "zh8",
    topLabel: "From",
    mainValue: "$291",
    offText: "",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "ZenHotels Coupon Code – UK Weekend Escape from $291",
    description: "Plan a low-cost weekend trip to Chester with a stay at Moxy Chester.",
    code: "",
    points: [
      "Book your stay from just $291.",
      "Enjoy modern rooms in historic Chester.",
      "Stay near local sights and restaurants.",
      "Great for short UK city breaks.",
    ],
  },
];