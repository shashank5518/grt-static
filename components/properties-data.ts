// components/properties-data.ts

export type Configuration = {
  bhk: string;
  sizes: string[];
  priceRange: string;
};

export type Property = {
  id: number;
  name: string;
  developer: string;
  location: string;
  tag: string;
  tagColor: string;
  startingPrice: string;
  configurations: Configuration[];
  highlights: string[];
  gradient: string;
};

export const properties: Property[] = [
  {
    id: 1,
    name: "Mapsko Casa Bella",
    developer: "Mapsko Group",
    location: "Sector 82, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.55 Cr onwards",
    configurations: [
      { bhk: "3 BHK", sizes: ["1430 sq ft", "1690 sq ft"], priceRange: "₹1.55 Cr – ₹1.80 Cr" },
      { bhk: "3 BHK + Servant Room", sizes: ["1960 sq ft"], priceRange: "₹2.00 Cr Onwards" },
      { bhk: "4 BHK + Servant Room", sizes: ["2535 sq ft"], priceRange: "₹2.50 Cr onwards" },
      { bhk: "4/5 BHK (Villa)", sizes: ["300 sq yd"], priceRange: "₹6.50 Cr onwards" }
    ],
    highlights: ["Gated community", "Club house", "Swimming pool"],
    gradient: "from-blue-900 to-slate-800",
  },
  {
    id: 2,
    name: "Mapsko Royal Ville",
    developer: "Mapsko Group",
    location: "Sector 82, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-blue-100 text-blue-700",
    startingPrice: "₹1.80 Cr Onwards",
    configurations: [
      { bhk: "3 BHK + Servant Room", sizes: ["1790 sq ft", "2300 sq ft"], priceRange: "₹1.80 - 2.35 Cr" },
      { bhk: "4 BHK + Servant Room", sizes: ["3500 sq ft"], priceRange: "₹3.50 Cr Onwards" },
      { bhk: "5 BHK + Servant Room", sizes: ["5320 sq ft"], priceRange: "₹5.25 Cr Onwards" },
    ],
    highlights: ["Gated Community", "Club House", "Swimming Pool"],
    gradient: "from-indigo-900 to-blue-900",
  },
  {
    id: 3,
    name: "Mapsko Paradise",
    developer: "Mapsko Group",
    location: "Sector 83, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-amber-100 text-amber-700",
    startingPrice: "₹1.05 Cr Onwards",
    configurations: [
      { bhk: "2 BHK", sizes: ["1050 sq ft"], priceRange: "₹1.05 Cr Onwards" },
      { bhk: "3 BHK", sizes: ["1340 sq ft"], priceRange: "₹1.35 Cr Onwards" },
    ],
    highlights: ["Gated Community", "Club House", "Swimming Pool"],
    gradient: "from-slate-800 to-slate-700",
  },
  {
    id: 4,
    name: "Mapsko Mount Ville",
    developer: "Mapsko Group",
    location: "Sector 79, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.80 Cr onwards",
    configurations: [
      { bhk: "3 BHK", sizes: ["1490 sq ft", "1510 sq ft", "1620 sq ft"], priceRange: "₹1.80 Cr – ₹2.00 Cr" },
      { bhk: "3 BHK + Servant Room", sizes: ["1815 sq ft", "1960 sq ft"], priceRange: "₹2.20 Cr – ₹2.40 Cr" },
      { bhk: "4 BHK + Servant Room", sizes: ["2650 sq ft", "2710 sq ft"], priceRange: "₹3.20 Cr – ₹3.50 Cr" },
    ],
    highlights: ["Aravali view", "Near 3 Golf Courses", "Club House"],
    gradient: "from-green-900 to-slate-800",
  },
  {
    id: 5,
    name: "Privy AT4",
    developer: "Spaze Group",
    location: "Sector 84, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-amber-100 text-amber-700",
    startingPrice: "₹1.60 Cr onwards",
    configurations: [
      { bhk: "2 BHK", sizes: ["1465 sq ft"], priceRange: "₹1.60 Cr Onwards" },
      { bhk: "3 BHK + Servant Room", sizes: ["1745 sq ft", "2070 sq ft", "2905 sq ft (Kalistaa)"], priceRange: "₹1.95 Cr – ₹3.25 Cr" },
      { bhk: "4 BHK + Servant Room", sizes: ["2670 sq ft", "3865 sq ft (Kalistaa)"], priceRange: "₹2.95 - 4.25 Cr" },
    ],
    highlights: ["Luxury", "Near Airport", "Club House"],
    gradient: "from-rose-900 to-slate-800",
  },
  {
    id: 6,
    name: "Emaar Palm Hills",
    developer: "Emaar India",
    location: "Sector 77, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-blue-100 text-blue-700",
    startingPrice: "₹1.90 Cr onwards",
    configurations: [
      { bhk: "3 BHK + Servant Room", sizes: ["1450 sq ft", "1575 sq ft"], priceRange: "₹1.90 Cr – ₹2.10 Cr" },
      { bhk: "4 BHK + Servant Room", sizes: ["1950 sq ft"], priceRange: "₹2.55 Cr Onwards" },
    ],
    highlights: ["Luxury", "Club House", "Dubai Inspired Design"],
    gradient: "from-purple-900 to-indigo-900",
  },
  {
    id: 7,
    name: "Tata Primanti",
    developer: "Tata Housing",
    location: "Sector 72, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹4.5 Cr onwards",
    configurations: [
      { bhk: "3 BHK", sizes: ["2200 sq ft", "2500 sq ft"], priceRange: "₹4.50 Cr – ₹5.10 Cr" },
      { bhk: "4 BHK", sizes: ["3100 sq ft", "3500 sq ft"], priceRange: "₹6.30 Cr – ₹7.15 Cr" },
      { bhk: "Penthouse", sizes: ["5000 sq ft"], priceRange: "₹10.2 Cr – ₹11.5 Cr" },
    ],
    highlights: ["60 acres", "13 towers", "Forest view"],
    gradient: "from-teal-900 to-slate-800",
  },
  {
    id: 8,
    name: "Ansal Sushant Lok",
    developer: "Ansal API",
    location: "Sector 43, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹85 L onwards",
    configurations: [
      { bhk: "2 BHK", sizes: ["950 sq ft", "1100 sq ft"], priceRange: "₹85 L – ₹1.00 Cr" },
      { bhk: "3 BHK", sizes: ["1350 sq ft", "1550 sq ft"], priceRange: "₹1.20 Cr – ₹1.40 Cr" },
    ],
    highlights: ["Prime location", "Metro connectivity", "Commercial hub nearby"],
    gradient: "from-orange-900 to-slate-800",
  },
  {
    id: 9,
    name: "Conscient Heritage Max",
    developer: "Conscient Group",
    location: "Sector 102, Gurgaon",
    tag: "New Launch",
    tagColor: "bg-blue-100 text-blue-700",
    startingPrice: "₹1.2 Cr onwards",
    configurations: [
      { bhk: "2 BHK", sizes: ["1000 sq ft", "1150 sq ft"], priceRange: "₹1.20 Cr – ₹1.38 Cr" },
      { bhk: "3 BHK", sizes: ["1400 sq ft", "1600 sq ft"], priceRange: "₹1.68 Cr – ₹1.92 Cr" },
      { bhk: "4 BHK", sizes: ["2000 sq ft", "2300 sq ft"], priceRange: "₹2.40 Cr – ₹2.76 Cr" },
    ],
    highlights: ["Expressway access", "RERA registered", "Flexible payment plan"],
    gradient: "from-cyan-900 to-slate-800",
  },
  {
    id: 10,
    name: "Vatika Seven Elements",
    developer: "Vatika Group",
    location: "Sector 89, Gurgaon",
    tag: "Under Construction",
    tagColor: "bg-amber-100 text-amber-700",
    startingPrice: "₹2.0 Cr onwards",
    configurations: [
      { bhk: "3 BHK", sizes: ["1580 sq ft", "1780 sq ft"], priceRange: "₹2.00 Cr – ₹2.25 Cr" },
      { bhk: "4 BHK", sizes: ["2200 sq ft", "2600 sq ft"], priceRange: "₹2.78 Cr – ₹3.29 Cr" },
      { bhk: "Villa", sizes: ["3500 sq ft", "4000 sq ft"], priceRange: "₹4.42 Cr – ₹5.06 Cr" },
    ],
    highlights: ["Theme-based design", "Rainwater harvesting", "Solar energy"],
    gradient: "from-violet-900 to-slate-800",
  },
];