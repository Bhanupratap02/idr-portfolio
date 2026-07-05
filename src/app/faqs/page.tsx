// app/faqs/page.tsx

import type { Metadata } from "next";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | IDR Technologies",
  description:
    "Find answers to common questions about access control, cameras, intercoms, cabling, AV, and IT services from IDR Technologies.",
  alternates: {
    canonical: "/faqs",
  },
};

export default function Page() {
  return <FAQSection />;
}