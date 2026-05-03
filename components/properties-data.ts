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
  image: string;
};

export const properties: Property[] = [
  {
    id: 1,
    name: "Mapsko Casa Bella",
    developer: "Mapsko Group",
    location: "Sector 82, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.55 Cr Onwards",
    configurations: [
      { bhk: "3 BHK", sizes: ["1430 sq ft", "1690 sq ft"], priceRange: "₹1.55 Cr – ₹1.80 Cr" },
      { bhk: "3 BHK + Servant Room", sizes: ["1960 sq ft"], priceRange: "₹2.00 Cr Onwards" },
      { bhk: "4 BHK + Servant Room", sizes: ["2535 sq ft"], priceRange: "₹2.50 Cr onwards" },
      { bhk: "4/5 BHK (Duplex)", sizes: ["300 sq yd"], priceRange: "₹6.50 Cr onwards" }
    ],
    highlights: ["Gated community", "Club house", "Swimming pool"],
    image: "/properties/casa-bella.webp",
  },
  {
    id: 2,
    name: "Mapsko Royal Ville",
    developer: "Mapsko Group",
    location: "Sector 82, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.80 Cr Onwards",
    configurations: [
      { bhk: "3 BHK + Servant Room", sizes: ["1790 sq ft", "2300 sq ft"], priceRange: "₹1.80 - 2.35 Cr" },
      { bhk: "4 BHK + Servant Room", sizes: ["3500 sq ft"], priceRange: "₹3.50 Cr Onwards" },
      { bhk: "5 BHK + Servant Room", sizes: ["5320 sq ft"], priceRange: "₹5.25 Cr Onwards" },
    ],
    highlights: ["Gated Community", "Club House", "Swimming Pool"],
    image: "/properties/royale-ville.webp",
  },
  {
    id: 3,
    name: "Mapsko Paradise",
    developer: "Mapsko Group",
    location: "Sector 83, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.05 Cr Onwards",
    configurations: [
      { bhk: "2 BHK", sizes: ["1050 sq ft"], priceRange: "₹1.05 Cr Onwards" },
      { bhk: "3 BHK", sizes: ["1340 sq ft"], priceRange: "₹1.35 Cr Onwards" },
    ],
    highlights: ["Gated Community", "Club House", "Swimming Pool"],
    image: "/properties/paradise.webp",
  },
  {
    id: 4,
    name: "Mapsko Mount Ville",
    developer: "Mapsko Group",
    location: "Sector 79, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.80 Cr Onwards",
    configurations: [
      { bhk: "3 BHK", sizes: ["1490 sq ft", "1510 sq ft", "1620 sq ft"], priceRange: "₹1.80 Cr – ₹2.00 Cr" },
      { bhk: "3 BHK + Servant Room", sizes: ["1815 sq ft", "1960 sq ft"], priceRange: "₹2.20 Cr – ₹2.40 Cr" },
      { bhk: "4 BHK + Servant Room", sizes: ["2650 sq ft", "2710 sq ft"], priceRange: "₹3.20 Cr – ₹3.50 Cr" },
    ],
    highlights: ["Aravali View", "Near 3 Golf Courses", "Club House"],
    image: "/properties/mount-ville.webp",
  },
  {
    id: 5,
    name: "Spaze Privy AT4",
    developer: "Spaze Group",
    location: "Sector 84, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.60 Cr Onwards",
    configurations: [
      { bhk: "2 BHK", sizes: ["1465 sq ft"], priceRange: "₹1.60 Cr Onwards" },
      { bhk: "3 BHK + Servant Room", sizes: ["1745 sq ft", "2070 sq ft", "2905 sq ft (Kalistaa)"], priceRange: "₹1.95 Cr – ₹3.25 Cr" },
      { bhk: "4 BHK + Servant Room", sizes: ["2670 sq ft", "3865 sq ft (Kalistaa)"], priceRange: "₹2.95 - 4.25 Cr" },
    ],
    highlights: ["Luxury", "Near Airport", "Club House"],
    image: "/properties/privy-at4.jpg",
  },
  {
    id: 6,
    name: "Emaar Palm Hills",
    developer: "Emaar India",
    location: "Sector 77, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.90 Cr Onwards",
    configurations: [
      { bhk: "3 BHK + Servant Room", sizes: ["1450 sq ft", "1575 sq ft"], priceRange: "₹1.90 Cr – ₹2.10 Cr" },
      { bhk: "4 BHK + Servant Room", sizes: ["1950 sq ft"], priceRange: "₹2.55 Cr Onwards" },
    ],
    highlights: ["Luxury", "Club House", "Dubai Inspired Design"],
    image: "/properties/palm-hills.jpg",
  },
  {
    id: 7,
    name: "Emaar Palm Heights",
    developer: "Emaar India",
    location: "Sector 77, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹2.60 Cr Onwards",
    configurations: [
      { bhk: "3 BHK + Servant Room", sizes: ["2000 sq ft", "2025 sq ft"], priceRange: "₹2.60 Cr – ₹2.70 Cr" },
    ],
    highlights: ["30 acres", "Aravali View", "Club House"],
    image: "/properties/palm-heights.jpg",
  },
  {
    id: 8,
    name: "Emaar Palm Gardens",
    developer: "Emaar India",
    location: "Sector 83, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹2.05 Cr onwards",
    configurations: [
      { bhk: "3 BHK + Servant Room", sizes: ["1720 sq ft", "1900 sq ft", "1950 sq ft"], priceRange: "₹2.15 Cr – ₹2.60 Cr" },
      { bhk: "5 BHK (Duplex)", sizes: ["3750 sq ft"], priceRange: "₹4.5 Cr Onwards" },
    ],
    highlights: ["Luxury", "Prime Location", "Commercial Hub Nearby"],
    image: "/properties/palm-gardens.jpg",
  },
  {
    id: 9,
    name: "SS Coralwood",
    developer: "SS Group",
    location: "Sector 84, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.50 Cr Onwards",
    configurations: [
      { bhk: "2 BHK", sizes: ["1425 sq ft"], priceRange: "₹1.45 Cr Onwards" },
      { bhk: "3 BHK", sizes: ["1750 sq ft", "1890 sq ft"], priceRange: "₹1.80 Cr – ₹2.00 Cr" },
      { bhk: "3 BHK + Servant Room", sizes: ["2250 sq ft"], priceRange: "₹2.30 Cr Onwards" },
    ],
    highlights: ["Prime location", "Near Airport", "Commercial Hub Nearby"],
    image: "/properties/ss-coralwood.webp",
  },
];