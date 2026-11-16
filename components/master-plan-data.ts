import { properties } from "./properties-data";

export const sectorProperties = properties.reduce(
  (acc, property) => {
    const sector = property.location.replace(", Gurgaon", "");

    if (!acc[sector]) {
      acc[sector] = [];
    }

    acc[sector].push(property);

    return acc;
  },
  {} as Record<string, typeof properties>
);


export const sectorPins = [
  { sector: "Sector 77", x: 36.6, y: 79.3 },
  { sector: "Sector 79", x: 5.0, y: 85.5 },
  { sector: "Sector 81", x: 17.6, y: 53.6 },
  { sector: "Sector 82", x: 31.6, y: 58.0 },
  { sector: "Sector 82A", x: 22.7, y: 64.1 },
  { sector: "Sector 83", x: 44.6, y: 62.5 },
  { sector: "Sector 84", x: 50.8, y: 50.1 },
  { sector: "Sector 85", x: 38.6, y: 47.9 },
  { sector: "Sector 86", x: 27.3, y: 44.9 },
  { sector: "Sector 88A", x: 73.3, y: 32.6 },
  { sector: "Sector 89", x: 50.0, y: 36.3 },
  { sector: "Sector 90", x: 32.2, y: 35.1 },
  { sector: "Sector 91", x: 15.9, y: 28.3 },
  { sector: "Sector 92", x: 23.9, y: 24.2 },
];

