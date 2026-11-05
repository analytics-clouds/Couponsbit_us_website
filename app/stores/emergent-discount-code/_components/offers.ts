export interface EmergentPlan {
  id: string;
  name: string;
  price: string;
  description: string;
}

export const EMERGENT_PLANS: EmergentPlan[] = [
  {
    id: "em1",
    name: "Standard Plan",
    price: "2.63",
    description: "Perfect for first-time builders. 100 credits/mo with mobile app development, private hosting and GitHub integration.",
  },
  {
    id: "em2",
    name: "Pro Plan",
    price: "146.10",
    description: "Built for serious creators and brands. 750 credits/mo with E-3 Agent, free deployment, custom domain and analytics dashboard.",
  },
];
