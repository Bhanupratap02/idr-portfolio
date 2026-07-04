import type { Metadata } from "next";
import RhombusPage from "./_components/RhombusPage";

export const metadata: Metadata = {
  title: "Rhombus Camera Solutions | IDR Technologies",
  description:
    "Explore Rhombus cloud-managed security camera systems installed and supported by IDR Technologies.",
  alternates: {
    canonical: "/partners/rhombus",
  },
};

export default function Page() {
  return <RhombusPage />;
}