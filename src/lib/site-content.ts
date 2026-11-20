export const launchStatus = {
  stage: "founding-network",
  referralTechnologyLive: false,
  referralPaymentsLive: false,
  registrationOpen: false,
  membershipPrice: null,
  pricingStatus: "being-finalised",
  customerAppRequired: false,
  customerAccountRequired: false,
} as const;

export const company = {
  tradingName: "Foodsify",
  legalName: "Leadsopedia Limited",
  number: "13145058",
  registeredOffice: "5 Brayford Square, London, E1 0SG",
};

export const steps = [
  { title: "Join", description: "Become part of a network of independent hospitality businesses with a shared ambition to grow." },
  { title: "Discover", description: "Find other participating restaurants, cafés, pubs and more, locally and across the UK." },
  { title: "Promote", description: "Recommend other members to your customers, social media followers and wider community." },
  { title: "Earn", description: "When your referral generates a qualifying purchase, earn an agreed referral fee." },
];

export const faqs = [
  { question: "What is Foodsify?", answer: "Foodsify is building a UK-wide referral network for independent hospitality businesses. The idea is to help businesses recommend one another, reach new customers and generate additional referral income. We are currently building our founding network." },
  { question: "Which businesses can join?", answer: "Foodsify is designed for independent restaurants, cafés, pubs, takeaways, bakeries, dessert shops and other hospitality businesses across the UK." },
  { question: "How does the referral network work?", answer: "The intended process is simple: join the network, discover other participating businesses, promote them to your customers and audience, and earn an agreed referral fee when your recommendation leads to a qualifying purchase. Membership and referral arrangements will be confirmed before launch." },
  { question: "How do businesses earn referral income?", answer: "In the planned network, a referring business earns an agreed fee when its recommendation generates a qualifying customer purchase at another participating establishment. The qualifying conditions, fees and payment arrangements are still being developed and will be shared before participation begins." },
  { question: "Does Foodsify operate across the UK?", answer: "The founding network is being built with a UK-wide ambition, connecting businesses in the same town, neighbouring towns and further afield. It is not limited to one city or region." },
  { question: "Is Foodsify a food delivery platform?", answer: "No. Foodsify is not a food delivery service or simply a restaurant directory. Its purpose is to help independent hospitality businesses generate business for one another through recommendations." },
  { question: "Do customers need to download an app?", answer: "The intention is to keep the customer experience simple, without requiring customers to download an app or create an account. The final customer journey is still being developed." },
  { question: "Is the referral technology already live?", answer: "No. Foodsify is developing the technology to help businesses generate and track referrals. A fully operational referral tracking system is not live yet, and referral payments are not currently being operated." },
  { question: "What does membership cost?", answer: "Founding-member pricing is currently being finalised. We are not publishing membership prices at this stage. Pricing and membership terms will be made clear before businesses commit." },
];

export function pageHead(title: string, description: string) {
  return { meta: [
    { title: `${title} | Foodsify` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | Foodsify` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] };
}