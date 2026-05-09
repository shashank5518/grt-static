// components/properties-data.ts

export type Configuration = {
  bhk: string;
  options: {
    size: string;
    price: string;
    floorPlan: string;
  }[];
}

export type Property = {
  id: number;
  slug: string;
  name: string;
  developer: string;
  location: string;
  tag: string;
  tagColor: string;
  startingPrice: string;
  configurations: Configuration[];
  highlights: string[];
  amenities: string[];
  image: string;
};

export const properties: Property[] = [
  {
    id: 1,
    slug: "mapsko-casa-bella",
    name: "Mapsko Casa Bella",
    developer: "Mapsko Group",
    location: "Sector 82, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.55 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Park",
"Gazebo",
"Jogging Track",
"Badminton Court",
"Squash Court",
    ],
    configurations: [
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1430 sq ft",
            price: "₹1.55 - 1.60 Cr",
            floorPlan : "/floorplans/mapsko-casa-bella-1430.webp"
          },
          {
            size: "1690 sq ft",
            price: "₹1.75 - 1.80 Cr",
            floorPlan: "/floorplans/mapsko-casa-bella-1690.webp"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1960 sq ft",
            price: "₹1.95 - 2.00 Cr",
            floorPlan : "/floorplans/mapsko-casa-bella-1960.webp"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2535 sq ft",
            price: "₹2.55 - 2.60 Cr",
            floorPlan : "/floorplans/mapsko-casa-bella-2535.webp"
          }
        ]
      },
      {
        bhk: "4/5 BHK Duplex",
        options: [
          {
            size: "300 sq yd",
            price: "₹6.50 Cr Onwards",
            floorPlan : "/floorplans/mapsko-casa-bella-3754.webp"
          }
        ]
      },
    ],
    highlights: ["Gated community", "Club house", "Swimming pool"],
    image: "/properties/casa-bella.webp",
  },
  {
    id: 2,
    slug: "mapsko-royale-ville",
    name: "Mapsko Royale Ville",
    developer: "Mapsko Group",
    location: "Sector 82, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.80 Cr Onwards",
    amenities: [
  "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Park",
"Banquet Hall",
"Gazebo",
"Amphitheatre",
"Jogging Track",
],
    configurations: [
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1790 sq ft",
            price: "₹1.80 - 1.85 Cr",
            floorPlan : "/floorplans/mapsko-royale-ville-1790.webp"
          },
          {
            size: "2300 sq ft",
            price: "₹2.35 - 2.40 Cr",
            floorPlan : "/floorplans/mapsko-royale-ville-2300.webp"
          },
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "3500 sq ft",
            price: "₹3.50 - 3.55 Cr",
            floorPlan : "/floorplans/mapsko-royale-ville-3500.webp"
          }
        ]
      },
      {
        bhk: "5 BHK + Servant Room",
        options: [
          {
            size: "5320 sq ft",
            price: "₹5.25 - 5.30 Cr",
            floorPlan : "/floorplans/mapsko-royale-ville-5320.webp"
          }
        ]
      },
    ],
    highlights: ["Gated Community", "Club House", "Swimming Pool"],
    image: "/properties/royale-ville.webp",
  },
  {
    id: 3,
    slug: "mapsko-paradise",
    name: "Mapsko Paradise",
    developer: "Mapsko Group",
    location: "Sector 83, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.05 Cr Onwards",
    amenities: [
  "Gymnasium",
"Club House",
"Children's Play Area",
"Park",
"Gazebo",
"Amphitheatre",
"Jogging Track",
"Badminton Court",
"Basketball Court",
],
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1050 sq ft",
            price: "₹1.05 - 1.10 Cr",
            floorPlan : "/floorplans/mapsko-paradise-1050.webp"
          }
        ]
      },
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1340 sq ft",
            price: "₹1.35 - 1.40 Cr",
            floorPlan : "/floorplans/mapsko-paradise-1340.webp"
          }
        ]
      },
    ],
    highlights: ["Gated Community", "Club House", "Swimming Pool"],
    image: "/properties/paradise.webp",
  },
  {
    id: 4,
    slug: "mapsko-mount-ville",
    name: "Mapsko Mount Ville",
    developer: "Mapsko Group",
    location: "Sector 79, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.80 Cr Onwards",
    amenities: [
  "Swimming Pool",
"Gymnasium",
"Creche/Day Care",
"Children's Play Area",
"Theatre",
"Park",
"Banquet Hall",
"Gazebo",
"Jogging Track",
],
    configurations: [
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1490 sq ft",
            price: "₹1.80 - 1.85 Cr",
            floorPlan : "/floorplans/mapsko-mount-ville-1490.webp"
          },
          {
            size: "1510 sq ft",
            price: "₹1.85 - 1.90 Cr",
            floorPlan : "/floorplans/mapsko-mount-ville-1510.webp"
          },
          {
            size: "1620 sq ft",
            price: "₹1.95 - 2.00 Cr",
            floorPlan : "/floorplans/mapsko-mount-ville-1620.webp"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1815 sq ft",
            price: "₹2.20 - 2.25 Cr",
            floorPlan : "/floorplans/mapsko-mount-ville-1815.webp"
          },
          {
            size: "1960 sq ft",
            price: "₹2.40 - 2.45 Cr",            
            floorPlan : "/floorplans/mapsko-mount-ville-1960.webp"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2650 sq ft",
            price: "₹3.20 - 3.25 Cr",
            floorPlan : "/floorplans/mapsko-mount-ville-2650.webp"
          },
          {
            size: "2710 sq ft",
            price: "₹3.50 - 3.55 Cr",
            floorPlan : "/floorplans/mapsko-mount-ville-2710.webp"
          }
        ]
      },
    ],
    highlights: ["Aravali View", "Near 3 Golf Courses", "Club House"],
    image: "/properties/mount-ville.webp",
  },
  {
    id: 5,
    slug: "spaze-privy-at4",
    name: "Spaze Privy AT4",
    developer: "Spaze Group",
    location: "Sector 84, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.55 Cr Onwards",
    amenities: [
  "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Park",
"Banquet Hall",
"Amphitheatre",
"Jogging Track",
"Badminton Court",
],
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1465 sq ft",
            price: "₹1.55 - 1.60 Cr",
            floorPlan : "/floorplans/at4-1465.webp"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1745 sq ft",
            price: "₹1.95 - 2.00 Cr",
            floorPlan : "/floorplans/at4-1745.webp"
          },
          {
            size: "2070 sq ft",
            price: "₹2.30 - 2.35 Cr",
            floorPlan : "/floorplans/at4-2070.webp"
          },
          {
            size: "2905 sq ft (Kalistaa)",
            price: "₹3.25 - 3.30 Cr",
            floorPlan : "/floorplans/at4-2905.webp"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2670 sq ft",
            price: "₹2.95 - 3.00 Cr",
            floorPlan : "/floorplans/at4-2670.webp"
          },
          {
            size: "3865 sq ft (Kalistaa)",
            price: "₹4.25 - 4.30 Cr",
            floorPlan : "/floorplans/at4-3865.webp"
          }
        ]
      },
    ],
    highlights: ["Luxury", "Near Airport", "Club House"],
    image: "/properties/privy-at4.jpg",
  },
  {
    id: 6,
    slug: "emaar-palm-hills",
    name: "Emaar Palm Hills",
    developer: "Emaar India",
    location: "Sector 77, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.90 Cr Onwards",
    amenities: [
  "Swimming Pool",
"Gymnasium",
"Club House",
"Creche/Day Care",
"Children's Play Area",
"Landscape Garden",
"Park",
"Banquet Hall",
"Jogging Track",
  "Shopping Complex",
],
    configurations: [
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1450 sq ft",
            price: "₹1.90 - 1.95 Cr",
            floorPlan : "/floorplans/emaar-palm-hills-1450.webp"
          },
          {
            size: "1575 sq ft",
            price: "₹2.10 - 2.15 Cr",
            floorPlan : "/floorplans/emaar-palm-hills-1575.webp"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "1950 sq ft",
            price: "₹2.55 - 2.60 Cr",
            floorPlan : "/floorplans/emaar-palm-hills-1950.webp"
          }
        ]
      },
    ],
    highlights: ["Luxury", "Club House", "Dubai Inspired Design"],
    image: "/properties/palm-hills.avif",
  },
  {
    id: 7,
    slug: "emaar-palm-heights",
    name: "Emaar Palm Heights",
    developer: "Emaar India",
    location: "Sector 77, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹2.60 Cr Onwards",
    amenities: [
  "Swimming Pool",
"Gymnasium",
"Club House",
"Creche/Day Care",
"Children's Play Area",
"Landscape Garden",
"Park",
"Banquet Hall",
"Jogging Track",
],
    configurations: [
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "2000 sq ft",
            price: "₹2.60 - 2.65 Cr",
            floorPlan : "/floorplans/emaar-palm-heights-2000.webp"
          },
          {
            size: "2025 sq ft",
            price: "₹2.70 - 2.75 Cr",
            floorPlan : "/floorplans/emaar-palm-heights-2025.webp"
          }
        ]
      },
    ],
    highlights: ["30 acres", "Aravali View", "Club House"],
    image: "/properties/palm-heights.jpg",
  },
  {
    id: 8,
    slug: "emaar-palm-gardens",
    name: "Emaar Palm Gardens",
    developer: "Emaar India",
    location: "Sector 83, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹2.15 Cr onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Golf Course",
"Creche/Day Care",
"Children's Play Area",
"EV Charging Stations",
"Landscape Garden",
"Park",
"Mini Golf Course",
],
    configurations: [
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1720 sq ft",
            price: "₹2.15 - 2.20 Cr",
            floorPlan : "/floorplans/emaar-palm-gardens-1720.webp"
          },
          {
            size: "1850 sq ft",
            price: "₹2.35 - 2.40 Cr",
            floorPlan : "/floorplans/emaar-palm-gardens-1850"
          },
          {
            size: "1900 sq ft",
            price: "₹2.60 - 2.65 Cr",
            floorPlan : "/floorplans/emaar-palm-gardens-1900"
          }
        ]
      },
      {
        bhk: "5 BHK Duplex",
        options: [
          {
            size: "3750 sq ft",
            price: "₹4.55 - 4.60 Cr",
            floorPlan : "/floorplans/emaar-palm-gardens-3750.webp"
          }
        ]
      },
    ],
    highlights: ["Luxury", "Prime Location", "Commercial Hub Nearby"],
    image: "/properties/palm-gardens.jpg",
  },
  {
    id: 9,
    slug: "ss-coralwood",
    name: "SS Coralwood",
    developer: "SS Group",
    location: "Sector 84, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.45 Cr Onwards",
    amenities: [
  "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Park",
"Amphitheatre",
"Jogging Track",
"Badminton Court",
"Basketball Court",
],
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1425 sq ft",
            price: "₹1.45 - 1.50 Cr",
            floorPlan : "/floorplans/ss-coralwood-1425.webp"
          }
        ]
      },
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1750 sq ft",
            price: "₹1.80 - 1.85 Cr",
            floorPlan : "/floorplans/ss-coralwood-1750.webp"
          },
          {
            size: "1890 sq ft",
            price: "₹2.00 - 2.05 Cr",
            floorPlan : "/floorplans/ss-coralwood-1890.webp"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "2250 sq ft",
            price: "₹2.30 - 2.35 Cr",
            floorPlan : "/floorplans/ss-coralwood-2250.webp"
          }
        ]
      },
    ],
    highlights: ["Prime location", "Near Airport", "Commercial Hub Nearby"],
    image: "/properties/ss-coralwood.webp",
  },
  {
    id: 10,
    slug: "ss-leaf",
    name: "SS The Leaf",
    developer: "SS Group",
    location: "Sector 85, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.90 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Park",
"Banquet Hall",
"Jogging Track",
"Badminton Court",
"Squash Court",
"Hideaway AC Units",
],
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1640 sq ft",
            price: "₹1.90 - 1.95 Cr",
            floorPlan : "/floorplans/ss-leaf-1640.webp"
          },
          {
            size: "1671 sq ft",
            price: "₹2.00 - 2.05 Cr",
            floorPlan : "/floorplans/ss-leaf-1671.webp"
          },
          {
            size: "1741 sq ft",
            price: "₹2.10 - 2.15 Cr",
            floorPlan : "/floorplans/ss-leaf-1741.webp"
          },
          {
            size: "1772 sq ft",
            price: "₹2.15 - 2.20 Cr",
            floorPlan : "/floorplans/ss-leaf-1772.webp"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "2408 sq ft",
            price: "₹2.90 - 2.95 Cr",
            floorPlan : "/floorplans/ss-leaf-2408.webp"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant",
        options: [
          {
            size: "2812 sq ft",
            price: "₹3.40 - 3.45 Cr",
            floorPlan : "/floorplans/ss-leaf-2812.webp"
          }
        ]
      },
      {
        bhk: "4 BHK Penthouse",
        options: [
          {
            size: "3950 sq ft",
            price: "₹4.75 - 4.80 Cr",
            floorPlan : "/floorplans/ss-leaf-3950.webp"
          }
        ]
      },
      {
        bhk: "5 BHK Penthouse",
        options: [
          {
            size: "4950 sq ft",
            price: "₹5.95 - 6.00 Cr",
            floorPlan : "/floorplans/ss-leaf-4950.webp"
          }
        ]
      }
    ],
    highlights: ["Centralized AC", "Club House", "Luxury"],
    image: "/properties/ss-leaf.avif",
  },
  {
    id: 11,
    slug: "gurgaon-one",
    name: "Gurgaon One",
    developer: "Alpha Corp Group",
    location: "Sector 84, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.40 Cr Onwards",
    amenities: [
  "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Gazebo",
"Jogging Track",
"Badminton Court",
"Squash Court",
"Basketball Court",
],
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1270 sq ft",
            price: "₹1.40 - 1.45 Cr",
            floorPlan : "/floorplans/gurgaon-one-1270.webp"
          }
        ]
      },
      {
        bhk: "2 BHK + Servant Room",
        options: [
          {
            size: "1534 sq ft",
            price: "₹1.70 - 1.75 Cr",
            floorPlan : "/floorplans/gurgaon-one-1534.webp"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant",
        options: [
          {
            size: "1963 sq ft",
            price: "₹2.30 - 2.35 Cr",
            floorPlan : "/floorplans/gurgaon-one-1963.webp"
          },
          {
            size: "2067 sq ft",
            price: "₹2.40 - 2.45 Cr",
            floorPlan : "/floorplans/gurgaon-one-2067.webp"
          },
          {
            size: "2244 sq ft",
            price: "₹2.55 - 2.60 Cr",
            floorPlan : "/floorplans/gurgaon-one-2244.webp"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant",
        options: [
          {
            size: "3434 sq ft",
            price: "₹3.60 - 3.65 Cr",
            floorPlan : "/floorplans/gurgaon-one-3434.webp"
          }
        ]
      }
    ],
    highlights: ["Premium Property", "Club House", "Prime Location"],
    image: "/properties/gurgaon-one-84.jpg",
  },
];