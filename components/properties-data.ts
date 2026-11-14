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
  highlights: {
  label: string;
  value: string;
}[];
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
    startingPrice: "₹1.5 Cr Onwards",
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
        bhk: "4 BHK Villa",
        options: [
          {
            size: "300 sq yd",
            price: "₹6.50 Cr Onwards",
            floorPlan : "/floorplans/mapsko-casa-bella-3754.webp"
          }
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "11 Towers",
  },
  {
    label: "Total Units",
    value: "950+ Units",
  },
  {
    label: "Land Bank",
    value: "19.36 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+23",
  },
],
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
    startingPrice: "₹1.8 Cr Onwards",
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
    highlights: [
  {
    label: "Total Towers",
    value: "8 Towers",
  },
  {
    label: "Total Units",
    value: "450+ Units",
  },
  {
    label: "Land Bank",
    value: "12.36 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+18",
  },
],
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
    startingPrice: "₹1 Cr Onwards",
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
    highlights: [
  {
    label: "Total Towers",
    value: "8 Towers",
  },
  {
    label: "Total Units",
    value: "350+ Units",
  },
  {
    label: "Land Bank",
    value: "5 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+12",
  },
],
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
    startingPrice: "₹1.8 Cr Onwards",
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
    highlights: [
  {
    label: "Total Towers",
    value: "8 Towers",
  },
  {
    label: "Total Units",
    value: "750+ Units",
  },
  {
    label: "Land Bank",
    value: "16.37 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+30",
  },
],
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
    startingPrice: "₹1.5 Cr Onwards",
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
            size: "1610 sq ft",
            price: "₹1.55 - 1.60 Cr",
            floorPlan : "/floorplans/at4-1465.webp"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1918 sq ft",
            price: "₹1.95 - 2.00 Cr",
            floorPlan : "/floorplans/at4-1745.webp"
          },
          {
            size: "2275 sq ft",
            price: "₹2.30 - 2.35 Cr",
            floorPlan : "/floorplans/at4-2070.webp"
          },
          {
            size: "3193 sq ft (Kalistaa)",
            price: "₹3.25 - 3.30 Cr",
            floorPlan : "/floorplans/at4-2905.webp"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "4200 sq ft (Kalistaa)",
            price: "₹4.25 - 4.30 Cr",
            floorPlan : "/floorplans/at4-3865.webp"
          }
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "10 Towers",
  },
  {
    label: "Total Units",
    value: "500+ Units",
  },
  {
    label: "Land Bank",
    value: "10.51 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+21",
  },
],
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
    startingPrice: "₹1.9 Cr Onwards",
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
    highlights: [
  {
    label: "Total Towers",
    value: "4 Towers",
  },
  {
    label: "Total Units",
    value: "800+ Units",
  },
  {
    label: "Land Bank",
    value: "30 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+13",
  },
],
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
    startingPrice: "₹2.6 Cr Onwards",
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
    highlights: [
  {
    label: "Total Towers",
    value: "3 Towers",
  },
  {
    label: "Total Units",
    value: "300 Units",
  },
  {
    label: "Land Bank",
    value: "30 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+24",
  },
],
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
    startingPrice: "₹2.1 Cr onwards",
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
        bhk: "5 BHK Villa",
        options: [
          {
            size: "3750 sq ft",
            price: "₹4.55 - 4.60 Cr",
            floorPlan : "/floorplans/emaar-palm-gardens-3750.webp"
          }
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "12 Towers",
  },
  {
    label: "Total Units",
    value: "1000+ Units",
  },
  {
    label: "Land Bank",
    value: "23 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+16",
  },
],
    image: "/properties/palm-gardens.jpg",
  },
  {
    id: 9,
    slug: "ss-coralwood",
    name: "SS The Coralwood",
    developer: "SS Group",
    location: "Sector 84, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.5 Cr Onwards",
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
    highlights: [
  {
    label: "Total Towers",
    value: "10 Towers",
  },
  {
    label: "Total Units",
    value: "630+ Units",
  },
  {
    label: "Land Bank",
    value: "15.27 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+21",
  },
],
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
    startingPrice: "₹1.9 Cr Onwards",
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
        bhk: "4 BHK + Servant Room",
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
    highlights: [
  {
    label: "Total Towers",
    value: "13 Towers",
  },
  {
    label: "Total Units",
    value: "550+ Units",
  },
  {
    label: "Land Bank",
    value: "11.44 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+26",
  },
],
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
    startingPrice: "₹1.4 Cr Onwards",
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
        bhk: "3 BHK + Servant Room",
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
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "3434 sq ft",
            price: "₹3.60 - 3.65 Cr",
            floorPlan : "/floorplans/gurgaon-one-3434.webp"
          }
        ]
      }
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "7 Towers",
  },
  {
    label: "Total Units",
    value: "680+ Units",
  },
  {
    label: "Land Bank",
    value: "12.60 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+26",
  },
],
    image: "/properties/gurgaon-one-84.jpg",
  },
  {
    id: 12,
    slug: "dlf-the-primus",
    name: "DLF The Primus",
    developer: "DLF",
    location: "Sector 82A, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹2.8 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Theatre",
"Park",
"Banquet Hall",
"Jogging Track",
"Squash Court",
],
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1673 sq ft",
            price: "₹2.80 - 2.85 Cr",
            floorPlan : "/floorplans/dlf-primus-1673.webp"
          }
        ]
      },
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1799 sq ft",
            price: "₹3.00 - 3.05 Cr",
            floorPlan : "/floorplans/dlf-primus-1799.webp"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "2066 sq ft",
            price: "₹3.50 - 3.55 Cr",
            floorPlan : "/floorplans/dlf-primus-2066.webp"
          },
          {
            size: "2086 sq ft",
            price: "₹3.55 - 3.60 Cr",
            floorPlan : "/floorplans/dlf-primus-2086.webp"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2576 sq ft",
            price: "₹4.35 - 4.40 Cr",
            floorPlan : "/floorplans/dlf-primus-2576.webp"
          }
        ]
      }
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "9 Towers",
  },
  {
    label: "Total Units",
    value: "600+ Units",
  },
  {
    label: "Land Bank",
    value: "12.53 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+32",
  },
],
    image: "/properties/dlf-primus.webp",
  },
  {
    id: 13,
    slug: "dlf-the-ultima",
    name: "DLF The Ultima",
    developer: "DLF",
    location: "Sector 81, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹2.8 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Golf Course",
"Mini Theatre",
"Creche/Day Care",
"Children's Play Area",
"Landscape Garden",
"Park",
],
    configurations: [
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1911 sq ft",
            price: "₹3.50 - 3.55 Cr",
            floorPlan : "/floorplans/dlf-ultima-1911.webp"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "3035 sq ft",
            price: "₹5.25 - 5.30 Cr",
            floorPlan : "/floorplans/dlf-ultima-3035.webp"
          }
        ]
      }
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "15 Towers",
  },
  {
    label: "Total Units",
    value: "900+ Units",
  },
  {
    label: "Land Bank",
    value: "23 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+29",
  },
],
    image: "/properties/dlf-ultima.webp",
  },
  {
    id: 14,
    slug: "dlf-the-skycourt",
    name: "DLF The Skycourt",
    developer: "DLF",
    location: "Sector 86, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹2.1 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Terrace Garden",
"Landscape Garden",
"Park",
"Banquet Hall",
"Basketball Court",
],
    configurations: [
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1860 sq ft",
            price: "₹2.15 - 2.20 Cr",
            floorPlan : "/floorplans/dlf-skycourt-1860.webp"
          }
        ]
      }
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "10 Towers",
  },
  {
    label: "Total Units",
    value: "650+ Units",
  },
  {
    label: "Land Bank",
    value: "13 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+19",
  },
],
    image: "/properties/dlf-skycourt.webp",
  },
  {
    id: 15,
    slug: "dlf-regal-gardens",
    name: "DLF Regal Gardens",
    developer: "DLF",
    location: "Sector 90, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.8 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Theatre",
"Landscape Garden",
"Park",
"Banquet Hall",
"Gazebo",
],
    configurations: [
       {
        bhk: "2 BHK",
        options: [
          {
            size: "1469 sq ft",
            price: "₹1.80 - 1.85 Cr",
            floorPlan : "/floorplans/dlf-regal-gardens-1469.png"
          }
        ]
      },
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1713 sq ft",
            price: "₹2.15 - 2.20 Cr",
            floorPlan : "/floorplans/dlf-regal-gardens-1713.png"
          },
          {
            size: "1728 sq ft",
            price: "₹2.15 - 2.20 Cr",
            floorPlan : "/floorplans/dlf-regal-gardens-1728.png"
          },
          {
            size: "1737 sq ft",
            price: "₹2.20 - 2.25 Cr",
            floorPlan : "/floorplans/dlf-regal-gardens-1737.png"
          },
          {
            size: "1752 sq ft",
            price: "₹2.25 - 2.30 Cr",
            floorPlan : "/floorplans/dlf-regal-gardens-1752.png"
          },
          {
            size: "1760 sq ft",
            price: "₹2.25 - 2.30 Cr",
            floorPlan : "/floorplans/dlf-regal-gardens-1760.png"
          },
          {
            size: "1778 sq ft",
            price: "₹2.30 - 2.35 Cr",
            floorPlan : "/floorplans/dlf-regal-gardens-1778.png"
          },
        ]
      },
      {
        bhk: "4 BHK",
        options: [
          {
            size: "2223 sq ft",
            price: "₹2.80 - 2.85 Cr",
            floorPlan : "/floorplans/dlf-regal-gardens-2223.png"
          },
          {
            size: "2225 sq ft",
            price: "₹2.80 - 2.85 Cr",
            floorPlan : "/floorplans/dlf-regal-gardens-2225.png"
          },
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "9 Towers",
  },
  {
    label: "Total Units",
    value: "550+ Units",
  },
  {
    label: "Land Bank",
    value: "11.1 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+29",
  },
],
    image: "/properties/dlf-regal-gardens.webp",
  },
  {
    id: 16,
    slug: "dlf-new-town-heights-1",
    name: "DLF New Town Heights 1",
    developer: "DLF",
    location: "Sector 90, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.7 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Park",
"Jogging Track",
"Squash Court",
"Basketball Court",
"Yoga/Meditation Area",
],
    configurations: [
       {
        bhk: "2 BHK + Servant Room",
        options: [
          {
            size: "1615 sq ft",
            price: "₹1.75 - 1.80 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-1-1615.webp"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1930 sq ft",
            price: "₹2.10 - 2.15 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-1-1930.webp"
          },
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2364 sq ft",
            price: "₹2.55 - 2.60 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-1-2364.webp"
          },
          {
            size: "2727 sq ft",
            price: "₹3.00 - 3.05 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-1-2727.webp"
          },
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "13 Towers",
  },
  {
    label: "Total Units",
    value: "1500+ Units",
  },
  {
    label: "Land Bank",
    value: "32.13 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+19",
  },
],
    image: "/properties/dlf-new-town-heights-1.avif",
  },
  {
    id: 17,
    slug: "dlf-new-town-heights-2",
    name: "DLF New Town Heights 2",
    developer: "DLF",
    location: "Sector 86, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.7 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Park",
"Landscape Garden",
"Squash Court",
"Basketball Court",
"Yoga/Meditation Area",
],
    configurations: [
       {
        bhk: "2 BHK + Servant Room",
        options: [
          {
            size: "1305 sq ft",
            price: "₹1.45 - 1.50 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-2-1305.webp"
          },
          {
            size: "1615 sq ft",
            price: "₹1.75 - 1.80 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-2-1305.webp"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1760 sq ft",
            price: "₹1.90 - 1.95 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-2-1760.webp"
          },
          {
            size: "2051 sq ft",
            price: "₹2.25 - 2.30 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-2-1760.webp"
          },
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2125 sq ft",
            price: "₹2.35 - 2.40 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-2-2125.webp"
          },
          {
            size: "2505 sq ft",
            price: "₹2.75 - 2.80 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-2-2505.webp"
          },
          {
            size: "2727 sq ft",
            price: "₹3.00 - 3.05 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-2-2727.webp"
          },
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "13 Towers",
  },
  {
    label: "Total Units",
    value: "1200 Units",
  },
  {
    label: "Land Bank",
    value: "29.63 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+22",
  },
],
    image: "/properties/dlf-new-town-heights-2.avif",
  },
  {
    id: 18,
    slug: "dlf-new-town-heights-3",
    name: "DLF New Town Heights 3",
    developer: "DLF",
    location: "Sector 91, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.5 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Park",
"Jogging Track",
"Lawn Tennis Court",
"Grocery Shop",
],
    configurations: [
       {
        bhk: "2 BHK + Servant Room",
        options: [
          {
            size: "1615 sq ft",
            price: "₹1.75 - 1.80 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-2-1305.webp"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1760 sq ft",
            price: "₹1.90 - 1.95 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-2-1760.webp"
          },
          {
            size: "1930 sq ft",
            price: "₹2.10 - 2.15 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-1-1930.webp"
          },
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2125 sq ft",
            price: "₹2.35 - 2.40 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-2-2125.webp"
          },
          {
            size: "2364 sq ft",
            price: "₹2.55 - 2.60 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-1-2364.webp"
          },
          {
            size: "2505 sq ft",
            price: "₹2.75 - 2.80 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-2-2505.webp"
          },
          {
            size: "2727 sq ft",
            price: "₹3.00 - 3.05 Cr",
            floorPlan : "/floorplans/dlf-new-town-heights-2-2727.webp"
          },
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "8 Towers",
  },
  {
    label: "Total Units",
    value: "600+ Units",
  },
  {
    label: "Land Bank",
    value: "14.35 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+21",
  },
],
    image: "/properties/dlf-new-town-heights-3.webp",
  },
  {
    id: 19,
    slug: "bestech-altura",
    name: "Bestech Park View Altura",
    developer: "Bestech Group",
    location: "Sector 79, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹3 Cr Onwards",
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
        bhk: "3 BHK",
        options: [
          {
            size: "2015 sq ft",
            price: "₹3.00 - 3.05 Cr",
            floorPlan : "/floorplans/altura-2015.webp"
          },
          {
            size: "2050 sq ft",
            price: "₹3.05 - 3.10 Cr",
            floorPlan : "/floorplans/altura-2050.webp"
          }
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "2150 sq ft",
            price: "₹3.20 - 3.25 Cr",
            floorPlan : "/floorplans/altura-2150.webp"
          },
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2675 sq ft",
            price: "₹4.00 - 4.05 Cr",
            floorPlan : "/floorplans/altura-2675.webp"
          },
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "7 Towers",
  },
  {
    label: "Total Units",
    value: "500+ Units",
  },
  {
    label: "Land Bank",
    value: "10.1 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+20",
  },
],
    image: "/properties/bestech-altura.avif",
  },
  {
    id: 20,
    slug: "bestech-grand-spa",
    name: "Bestech Park View Grand Spa",
    developer: "Bestech Group",
    location: "Sector 81, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹3.5 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Golf Course",
"Creche/Day Care",
"Children's Play Area",
"Park",
"Amphitheatre",
"Jogging Track",
],
    configurations: [
       {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "2660 sq ft",
            price: "₹3.50 - 3.55 Cr",
            floorPlan : "/floorplans/grand-spa-2660.webp"
          },
          {
            size: "2995 sq ft",
            price: "₹3.95 - 4.00 Cr",
            floorPlan : "/floorplans/grand-spa-2995.webp"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "3185 sq ft",
            price: "₹4.20 - 4.25 Cr",
            floorPlan : "/floorplans/grand-spa-3185.webp"
          },
          {
            size: "3470 sq ft",
            price: "₹4.60 - 4.65 Cr",
            floorPlan : "/floorplans/grand-spa-3470.webp"
          },
          {
            size: "3495 sq ft",
            price: "₹4.65 - 4.70 Cr",
            floorPlan : "/floorplans/grand-spa-3495.webp"
          },
          {
            size: "4200 sq ft",
            price: "₹5.55 - 5.60 Cr",
            floorPlan : "/floorplans/grand-spa-4200.webp"
          },
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "9 Towers",
  },
  {
    label: "Total Units",
    value: "600 Units",
  },
  {
    label: "Land Bank",
    value: "8 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+29",
  },
],
    image: "/properties/grand-spa.avif",
  },
  {
    id: 21,
    slug: "bestech-sanskruti",
    name: "Bestech Park View Sanskruti",
    developer: "Bestech Group",
    location: "Sector 92, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹2.3 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Theatre",
"Park",
"Amphitheatre",
"Jogging Track",
"Badminton Court",
],
    configurations: [
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1920 sq ft",
            price: "₹2.35 - 2.40 Cr",
            floorPlan : "/floorplans/sanskruti-1920.webp"
          },
        ]
      },
       {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1995 sq ft",
            price: "₹2.45 - 2.50 Cr",
            floorPlan : "/floorplans/sanskruti-1995.webp"
          },
          {
            size: "2120 sq ft",
            price: "₹2.60 - 2.65 Cr",
            floorPlan : "/floorplans/sanskruti-2120.webp"
          }
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2325 sq ft",
            price: "₹2.85 - 2.90 Cr",
            floorPlan : "/floorplans/sanskruti-2325.webp"
          },
          {
            size: "2475 sq ft",
            price: "₹3.05 - 3.10 Cr",
            floorPlan : "/floorplans/sanskruti-2475.webp"
          },
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "8 Towers",
  },
  {
    label: "Total Units",
    value: "600+ Units",
  },
  {
    label: "Land Bank",
    value: "13 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+19",
  },
],
    image: "/properties/sanskruti.webp",
  },
  {
    id: 22,
    slug: "bestech-ananda",
    name: "Bestech Park View Ananda",
    developer: "Bestech Group",
    location: "Sector 81, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.5 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Children's Play Area",
"Theatre",
"Park",
"Amphitheatre",
"Jogging Track",
"Badminton Court",
],
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1360 sq ft",
            price: "₹1.50 - 1.55 Cr",
            floorPlan : "/floorplans/ananda-1360.png"
          },
        ]
      },
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1645 sq ft",
            price: "₹1.70 - 1.75 Cr",
            floorPlan : "/floorplans/ananda-1645.png"
          },
          {
            size: "1660 sq ft",
            price: "₹1.75 - 1.80 Cr",
            floorPlan : "/floorplans/ananda-1660.png"
          },
          {
            size: "1790 sq ft",
            price: "₹2.10 - 2.15 Cr",
            floorPlan : "/floorplans/ananda-1790.png"
          },
          {
            size: "1810 sq ft",
            price: "₹2.15 - 2.20 Cr",
            floorPlan : "/floorplans/ananda-1810.png"
          },
        ]
      },
       {
        bhk: "5 BHK Villa",
        options: [
          {
            size: "5480 sq ft",
            price: "₹8.45 - 8.50 Cr",
            floorPlan : "/floorplans/ananda-5480.png"
          },
          {
            size: "5840 sq ft",
            price: "₹9.05 - 9.10 Cr",
            floorPlan : "/floorplans/ananda-5840.png"
          }
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "8 Towers",
  },
  {
    label: "Total Units",
    value: "700+ Units",
  },
  {
    label: "Land Bank",
    value: "13 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+15",
  },
],
    image: "/properties/ananda.webp",
  },
  {
    id: 23,
    slug: "microtek-greenburg",
    name: "Microtek Greenburg",
    developer: "Microtek Infra",
    location: "Sector 86, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹2 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Golf Course",
"Lounge",
"Children's Play Area",
"Theatre",
"Terrace Garden",
"Park",
],
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1480 sq ft",
            price: "₹1.95 - 2.00 Cr",
            floorPlan : "/floorplans/microtek-1480.webp"
          },
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1895 sq ft",
            price: "₹2.55 - 2.60 Cr",
            floorPlan : "/floorplans/microtek-1895.webp"
          },
          {
            size: "2285 sq ft",
            price: "₹3.05 - 3.10 Cr",
            floorPlan : "/floorplans/microtek-2285.webp"
          },
        ]
      },
       {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "3060 sq ft",
            price: "₹4.00 - 4.05 Cr",
            floorPlan : "/floorplans/microtek-3060.webp"
          },
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "12 Towers",
  },
  {
    label: "Total Units",
    value: "700+ Units",
  },
  {
    label: "Land Bank",
    value: "14.64 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+21",
  },
],
    image: "/properties/greenburg.avif",
  },
  {
    id: 24,
    slug: "county-center-court",
    name: "County The Center Court",
    developer: "County Group",
    location: "Sector 88A, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹2 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Golf Course",
"Creche/Day Care",
"Children's Play Area",
"Theatre",
"Park",
"Banquet Hall",
],
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1565 sq ft",
            price: "₹2.00 - 2.05 Cr",
            floorPlan : "/floorplans/county-1565.webp"
          },
        ]
      },
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1910 sq ft",
            price: "₹2.45 - 2.50 Cr",
            floorPlan : "/floorplans/county-1910.webp"
          },
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "2175 sq ft",
            price: "₹2.75 - 2.80 Cr",
            floorPlan : "/floorplans/county-2175.webp"
          },
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "7 Towers",
  },
  {
    label: "Total Units",
    value: "450+ Units",
  },
  {
    label: "Land Bank",
    value: "14.03 Acres",
  },
  {
    label: "Possession",
    value: "Ready To Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+29",
  },
],
    image: "/properties/county.webp",
  },
  {
    id: 25,
    slug: "godrej-air",
    name: "Godrej Air",
    developer: "Godrej",
    location: "Sector 85, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-emerald-100 text-emerald-700",
    startingPrice: "₹1.85 Cr Onwards",
    amenities: [
      "Centralized Air Filtration Units",
      "Dedicated Green Areas",
      "Swimming Pool",
"Gymnasium",
"Club House",
"Mini Theatre",
"Creche/Day Care",
"Children's Play Area",
"Terrace Garden",
"Park",
"Banquet Hall",
],
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1426 sq ft",
            price: "₹1.90 - 1.95 Cr",
            floorPlan : "/floorplans/godrej-air-1400.webp"
          },
        ]
      },
      {
        bhk: "3 BHK",
        options: [
          {
            size: "1829 sq ft",
            price: "₹2.50 - 2.60 Cr",
            floorPlan : "/floorplans/godrej-air-1830.webp"
          },
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "2129 sq ft",
            price: "₹2.90 - 3.00 Cr",
            floorPlan : "/floorplans/godrej-air-2130.webp"
          },
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2599 sq ft",
            price: "₹3.55 - 3.65 Cr",
            floorPlan : "/floorplans/godrej-air-2600.webp"
          },
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "5 Towers",
  },
  {
    label: "Total Units",
    value: "600 Units",
  },
  {
    label: "Land Bank",
    value: "10.04 Acres",
  },
  {
    label: "Possession",
    value: "Ready to Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+32",
  },
],
    image: "/properties/godrej-air.webp",
  },
  {
    id: 26,
    slug: "orris-greenopolis",
    name: "Orris Greenopolis",
    developer: "Orris Group",
    location: "Sector 89, Gurgaon",
    tag: "Ready to Move",
    tagColor: "bg-green-100 text-green-700",
    startingPrice: "₹1.3 Cr Onwards",
    amenities: [
      "Swimming Pool",
"Gymnasium",
"Club House",
"Creche/Day Care",
"Children's Play Area",
"Park",
"Banquet Hall",
"Jogging Track",
"Badminton Court",
],
    configurations: [
      {
        bhk: "2 BHK",
        options: [
          {
            size: "1297 sq ft",
            price: "₹1.30 - 1.35 Cr",
            floorPlan : "/floorplans/greenopolis-1297.png"
          },
        ]
      },
      {
        bhk: "2 BHK + Servant Room",
        options: [
          {
            size: "1660 sq ft",
            price: "₹1.65 - 1.70 Cr",
            floorPlan : "/floorplans/greenopolis-1660.png"
          },
        ]
      },
      {
        bhk: "3 BHK + Servant Room",
        options: [
          {
            size: "1957 sq ft",
            price: "₹1.70 - 1.75 Cr",
            floorPlan : "/floorplans/greenopolis-1957.png"
          },
          {
            size: "2036 sq ft",
            price: "₹1.80 - 1.85 Cr",
            floorPlan : "/floorplans/greenopolis-2036.png"
          },
        ]
      },
      {
        bhk: "4 BHK + Servant Room",
        options: [
          {
            size: "2750 sq ft",
            price: "₹2.00 - 2.05 Cr",
            floorPlan : "/floorplans/greenopolis-2750.png"
          },
        ]
      },
    ],
    highlights: [
  {
    label: "Total Towers",
    value: "28 Towers",
  },
  {
    label: "Total Units",
    value: "2300+ Units",
  },
  {
    label: "Land Bank",
    value: "37.21 Acres",
  },
  {
    label: "Possession",
    value: "Ready to Move",
  },
  {
    label: "RERA Status",
    value: "Approved",
  },
  {
    label: "Floors",
    value: "G+25",
  },
],
    image: "/properties/greenopolis.webp",
  },
];