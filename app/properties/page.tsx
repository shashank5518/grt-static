// app/properties/page.tsx
// ⚠️ Save this file at: app/properties/page.tsx (create the /properties folder first)

import { PropertiesPage } from "@/components/PropertiesPage";

export const metadata = {
  title: "Available Properties | Growth Realtech",
  description:
    "Browse premium residential properties in Gurgaon. Filter by BHK and get transparent pricing.",
};

export default function Page() {
  return <PropertiesPage />;
}