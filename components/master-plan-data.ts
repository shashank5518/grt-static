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
  { sector: "Sector 77", x: 41.5, y: 60.5 },

  { sector: "Sector 79", x: 33.5, y: 64.5 },

  { sector: "Sector 81", x: 36.5, y: 48.5 },

  { sector: "Sector 82", x: 40.5, y: 51.5 },

  { sector: "Sector 82A", x: 39.2, y: 54.5 },

  { sector: "Sector 83", x: 43.5, y: 53.5 },

  { sector: "Sector 84", x: 44.5, y: 47.5 },

  { sector: "Sector 85", x: 42.0, y: 45.5 },

  { sector: "Sector 86", x: 38.5, y: 45.0 },

  { sector: "Sector 88A", x: 50.5, y: 38.0 },

  { sector: "Sector 89", x: 44.5, y: 40.0 },

  { sector: "Sector 90", x: 39.5, y: 39.5 },

  { sector: "Sector 91", x: 36.5, y: 36.0 },

  { sector: "Sector 92", x: 37.5, y: 34.0 },
];