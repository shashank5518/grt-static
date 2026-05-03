// components/properties-data.ts

export type Configuration = {
  bhk: string;
  options: {
    size: string;
    price: string;
  }[];
}

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
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1430 sq ft",
            price: "₹1.55 - 1.60 Cr"
          },
          {
            size: "1690 sq ft",
            price: "₹1.75 - 1.80 Cr"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1960 sq ft",
            price: "₹1.95 - 2.00 Cr"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2535 sq ft",
            price: "₹2.55 - 2.60 Cr"
          }
        ]
      },
      {
        bhk: "4/5 BHK Duplex",
        options: [
          {
            size: "300 sq yd",
            price: "₹6.50 Cr Onwards"
          }
        ]
      },
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
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1790 sq ft",
            price: "₹1.80 - 1.85 Cr"
          },
          {
            size: "2300 sq ft",
            price: "₹2.35 - 2.40 Cr"
          },
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "3500 sq ft",
            price: "₹3.50 - 3.55 Cr"
          }
        ]
      },
      {
        bhk: "5 BHK + Servant Room",
        options: [
          {
            size: "5320 sq ft",
            price: "₹5.25 - 5.30 Cr"
          }
        ]
      },
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
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1050 sq ft",
            price: "₹1.05 - 1.10 Cr"
          }
        ]
      },
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1340 sq ft",
            price: "₹1.35 - 1.40 Cr"
          }
        ]
      },
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
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1490 sq ft",
            price: "₹1.80 - 1.85 Cr"
          },
          {
            size: "1510 sq ft",
            price: "₹1.85 - 1.90 Cr"
          },
          {
            size: "1620 sq ft",
            price: "₹1.95 - 2.00 Cr"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1815 sq ft",
            price: "₹2.20 - 2.25 Cr"
          },
          {
            size: "1960 sq ft",
            price: "₹2.40 - 2.45 Cr"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2650 sq ft",
            price: "₹3.20 - 3.25 Cr"
          },
          {
            size: "2710 sq ft",
            price: "₹3.50 - 3.55 Cr"
          }
        ]
      },
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
    startingPrice: "₹1.55 Cr Onwards",
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1465 sq ft",
            price: "₹1.55 - 1.60 Cr"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1745 sq ft",
            price: "₹1.95 - 2.00 Cr"
          },
          {
            size: "2070 sq ft",
            price: "₹2.30 - 2.35 Cr"
          },
          {
            size: "2905 sq ft (Kalistaa)",
            price: "₹3.25 - 3.30 Cr"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2670 sq ft",
            price: "₹2.95 - 3.00 Cr"
          },
          {
            size: "3865 sq ft (Kalistaa)",
            price: "₹4.25 - 4.30 Cr"
          }
        ]
      },
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
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1450 sq ft",
            price: "₹1.90 - 1.95 Cr"
          },
          {
            size: "1575 sq ft",
            price: "₹2.10 - 2.15 Cr"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "1950 sq ft",
            price: "₹2.55 - 2.60 Cr"
          }
        ]
      },
    ],
    highlights: ["Luxury", "Club House", "Dubai Inspired Design"],
    image: "/properties/palm-hills.avif",
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
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "2000 sq ft",
            price: "₹2.60 - 2.65 Cr"
          },
          {
            size: "2025 sq ft",
            price: "₹2.70 - 2.75 Cr"
          }
        ]
      },
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
    startingPrice: "₹2.15 Cr onwards",
    configurations: [
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1720 sq ft",
            price: "₹2.15 - 2.20 Cr"
          },
          {
            size: "1900 sq ft",
            price: "₹2.35 - 2.40 Cr"
          },
          {
            size: "1950 sq ft",
            price: "₹2.60 - 2.65 Cr"
          }
        ]
      },
      {
        bhk: "5 BHK Duplex",
        options: [
          {
            size: "3750 sq ft",
            price: "₹4.55 - 4.60 Cr"
          }
        ]
      },
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
    startingPrice: "₹1.45 Cr Onwards",
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1425 sq ft",
            price: "₹1.45 - 1.50 Cr"
          }
        ]
      },
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1750 sq ft",
            price: "₹1.80 - 1.85 Cr"
          },
          {
            size: "1890 sq ft",
            price: "₹2.00 - 2.05 Cr"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "2250 sq ft",
            price: "₹2.30 - 2.35 Cr"
          }
        ]
      },
    ],
    highlights: ["Prime location", "Near Airport", "Commercial Hub Nearby"],
    image: "/properties/ss-coralwood.webp",
  },
  {
    id: 10,
    name: "SS Leaf",
    developer: "SS Group",
    location: "Sector 85, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.90 Cr Onwards",
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1640 sq ft",
            price: "₹1.90 - 1.95 Cr"
          },
          {
            size: "1671 sq ft",
            price: "₹2.00 - 2.05 Cr"
          },
          {
            size: "1741 sq ft",
            price: "₹2.10 - 2.15 Cr"
          },
          {
            size: "1772 sq ft",
            price: "₹2.15 - 2.20 Cr"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "2408 sq ft",
            price: "₹2.90 - 2.95 Cr"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant",
        options: [
          {
            size: "2812 sq ft",
            price: "₹3.40 - 3.45 Cr"
          }
        ]
      },
      {
        bhk: "4 BHK Penthouse",
        options: [
          {
            size: "3950 sq ft",
            price: "₹4.75 - 4.80 Cr"
          }
        ]
      },
      {
        bhk: "5 BHK Penthouse",
        options: [
          {
            size: "4950 sq ft",
            price: "₹5.95 - 6.00 Cr"
          }
        ]
      }
    ],
    highlights: ["Centralized AC", "Club House", "Luxury"],
    image: "/properties/ss-leaf.avif",
  },
  {
    id: 11,
    name: "Gurgaon One",
    developer: "Alpha Corp Group",
    location: "Sector 84, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.40 Cr Onwards",
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1270 sq ft",
            price: "₹1.40 - 1.45 Cr"
          }
        ]
      },
      {
        bhk: "2 BHK + Servant Room",
        options: [
          {
            size: "1534 sq ft",
            price: "₹1.70 - 1.75 Cr"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant",
        options: [
          {
            size: "1963 sq ft",
            price: "₹2.30 - 2.35 Cr"
          },
          {
            size: "2067 sq ft",
            price: "₹2.40 - 2.45 Cr"
          },
          {
            size: "2244 sq ft",
            price: "₹2.55 - 2.60 Cr"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant",
        options: [
          {
            size: "3434 sq ft",
            price: "₹3.60 - 3.65 Cr"
          }
        ]
      }
    ],
    highlights: ["Premium Property", "Club House", "Prime Location"],
    image: "/properties/gurgaon-one-84.jpg",
  },
];