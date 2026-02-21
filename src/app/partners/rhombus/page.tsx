import type { Metadata } from "next";
import RhombusPage from "./_components/RhombusPage";

export const metadata: Metadata = {
  title: "Rhombus Systems: Smart Video Surveillance in the Cloud - IDR",
  description:
    "Certified Rhombus partner delivering cloud-native surveillance solutions across NYC, NJ, and Florida.",
  alternates: {
    canonical: "/partners/rhombus",
  },
};

export default function Page() {
  return <RhombusPage />;
}