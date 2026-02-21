// app/faqs/page.tsx

import type { Metadata } from "next";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - IDR Technology Solutions",
  description:
    "Find answers to common questions about IDR Technology Solutions services, warranties, monitoring, and service agreements.",
  alternates: {
    canonical: "/faqs",
  },
};

export default function Page() {
  return <FAQSection />;
}