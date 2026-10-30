export interface Offer {
  id: string;
  discount: string;
  label: string;
  badge?: "Best Offer" | "Popular" | "Trending";
  title: string;
  heading: string;
  sub: string;
  description: string;
  usedCount: string;
  expiresIn: string;
  code: string;
}

export const OFFERS: Offer[] = [
  { id: "agoda1",  discount: "50%",  label: "UP TO",            badge: "Best Offer", title: "Agoda Go City New York Explorer Pass – Save Up to 50% OFF",     heading: "Save Up to 50% OFF",  sub: "Go City New York Explorer Pass",  description: "Visit multiple NYC attractions with one flexible pass.",                           usedCount: "", expiresIn: "", code: "" },
  { id: "agoda2",  discount: "$140", label: "STARTING AT",       badge: "Popular",    title: "Agoda Miami Biscayne Bay Tour – Starting at $140",              heading: "Starting at $140",    sub: "Miami Biscayne Bay Tour",          description: "Enjoy a Biscayne Bay Boat Cruise & Scooter Tour.",                                usedCount: "", expiresIn: "", code: "" },
  { id: "agoda3",  discount: "16%",  label: "UP TO",            badge: "Trending",   title: "Agoda Niagara Falls Tour – Save Up to 16% OFF",                 heading: "Save Up to 16% OFF",  sub: "Niagara Falls Tour",               description: "Explore Niagara Falls on a 2-Day Tour from NYC.",                                 usedCount: "", expiresIn: "", code: "" },
  { id: "agoda4",  discount: "8%",   label: "UP TO",                                 title: "Agoda San Diego Zoo Safari Park – Save Up to 8% OFF",           heading: "Save Up to 8% OFF",   sub: "San Diego Zoo Safari Park",        description: "Visit the famous San Diego Zoo Safari Park.",                                      usedCount: "", expiresIn: "", code: "" },
  { id: "agoda5",  discount: "14%",  label: "UP TO",                                 title: "Agoda NYC Tall Ships Lunch Cruise – Save Up to 14% OFF",        heading: "Save Up to 14% OFF",  sub: "NYC Tall Ships Lunch Cruise",       description: "Sail around New York Harbor on a scenic lunch cruise.",                           usedCount: "", expiresIn: "", code: "" },
  { id: "agoda6",  discount: "$5",   label: "HOTELS FROM JUST",                      title: "Agoda USA Hotel Deals – Hotels from Just $5/Night",             heading: "Hotels from Just $5/Night", sub: "USA Hotel Deals",              description: "Book from over 534,000 hotels and vacation rentals across the USA.",               usedCount: "", expiresIn: "", code: "" },
  { id: "agoda7",  discount: "20%",  label: "UP TO",                                 title: "Agoda Anaheim Attractions – Save Up to 20% OFF",               heading: "Save Up to 20% OFF",  sub: "Anaheim Attractions",              description: "Discover the best attractions in Anaheim, California.",                           usedCount: "", expiresIn: "", code: "" },
  { id: "agoda8",  discount: "$28",  label: "STARTING AT",                           title: "Agoda World of Coca-Cola Tickets – Starting at $28",            heading: "Starting at $28",     sub: "World of Coca-Cola Tickets",       description: "Visit Atlanta's famous World of Coca-Cola.",                                      usedCount: "", expiresIn: "", code: "" },
  { id: "agoda9",  discount: "10%",  label: "UP TO",                                 title: "Agoda Denver CityPASS – Save Up to 10% OFF",                    heading: "Save Up to 10% OFF",  sub: "Denver CityPASS",                  description: "Explore Denver's top attractions with CityPASS.",                                  usedCount: "", expiresIn: "", code: "" },
  { id: "agoda10", discount: "16%",  label: "UP TO",                                 title: "Agoda NYC Sightseeing Combo – Save Up to 16% OFF",             heading: "Save Up to 16% OFF",  sub: "NYC Sightseeing Combo",            description: "Visit the Empire State Building, Statue of Liberty and enjoy a Hop-on Hop-off Bus Tour.", usedCount: "", expiresIn: "", code: "" },
  { id: "agoda11", discount: "14%",  label: "UP TO",                                 title: "Agoda South Beach Scooter Tour – Save Up to 14% OFF",          heading: "Save Up to 14% OFF",  sub: "South Beach Scooter Tour",         description: "Explore Miami's South Beach on a guided scooter tour.",                           usedCount: "", expiresIn: "", code: "" },
  { id: "agoda12", discount: "2%",   label: "UP TO",                                 title: "Agoda Hawaii Adventure Deal – Save Up to 2% OFF",              heading: "Save Up to 2% OFF",   sub: "Hawaii Adventure Deal",            description: "Explore Hawaii with the Atlantis Submarine Kona Experience.",                     usedCount: "", expiresIn: "", code: "" },
  { id: "agoda13", discount: "10%",  label: "UP TO",                                 title: "Agoda New York CityPASS – Save Up to 10% OFF",                 heading: "Save Up to 10% OFF",  sub: "New York CityPASS",               description: "Visit New York's top attractions with CityPASS.",                                 usedCount: "", expiresIn: "", code: "" },
  { id: "agoda14", discount: "3%",   label: "UP TO",                                 title: "Agoda Disneyland California Tickets – Save Up to 3% OFF",      heading: "Save Up to 3% OFF",   sub: "Disneyland California Tickets",    description: "Experience the magic of Disneyland Resort California.",                           usedCount: "", expiresIn: "", code: "" },
  { id: "agoda15", discount: "10%",  label: "UP TO",                                 title: "Agoda Chicago CityPASS – Save Up to 10% OFF",                  heading: "Save Up to 10% OFF",  sub: "Chicago CityPASS",                 description: "Explore Chicago's top attractions for less.",                                      usedCount: "", expiresIn: "", code: "" },
  { id: "agoda16", discount: "10%",  label: "UP TO",                                 title: "Agoda Houston CityPASS – Save Up to 10% OFF",                  heading: "Save Up to 10% OFF",  sub: "Houston CityPASS",                 description: "Discover Houston's most popular attractions.",                                     usedCount: "", expiresIn: "", code: "" },
];
