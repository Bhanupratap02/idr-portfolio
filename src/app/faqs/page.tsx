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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your warranty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Standard Warranty: Labor & Configuration Services: 60 days from completion of work. Newly Installed Data Cabling Systems: 15 years (manufacturer-backed). Equipment & Hardware: Covered by the original manufacturer's warranty. Exclusions: This warranty does not cover vandalism, theft, negligence, misuse, water damage, flooding, humidity, mold, condensation, fire, smoke, lightning, power surges, Acts of God, normal wear and tear, cosmetic damage, consumables (such as UPS and camera batteries), work or modifications performed by third parties, or software, firmware, and cloud services. Warranty service is provided during normal business hours. Liability is limited to repair or replacement of defective work or materials. Extended protection is available through IDR Service Agreements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer financing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, IDR works with third-party finance vendors who can help provide financing offers for projects valued at $3,000 or more."
      }
    },
    {
      "@type": "Question",
      "name": "What are your normal hours of service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our standard operating hours are Monday through Friday, 7:00 a.m. to 6:00 p.m. After-hours service is available with advance notice."
      }
    },
    {
      "@type": "Question",
      "name": "I hear a lot about the cloud. What are the benefits of a cloud solution?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cloud solutions offer remote management from anywhere, centralized management for multiple locations, faster deployments, automatic firmware updates, and reduced maintenance compared to traditional on-premise systems."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer security alarm monitoring services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. IDR partners with MetroDial to provide affordable, reliable 24/7 alarm monitoring through two fully independent central stations for maximum uptime."
      }
    },
    {
      "@type": "Question",
      "name": "Does IDR provide camera monitoring services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. IDR provides professional in-house camera monitoring. Our technicians review footage, respond to alerts, assist law enforcement with evidence, and dispatch emergency services when necessary."
      }
    },
    {
      "@type": "Question",
      "name": "Do you sell hardware?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We sell computers, Chromebooks, servers, UPS systems, PDUs, racks, security cameras, access control equipment, video displays, software, and many other technology products."
      }
    },
    {
      "@type": "Question",
      "name": "How do I place an order or schedule service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call our NY office at 718-594-7865 or our NJ office at 732-214-3550, email sales@idrtechnologysolutions.com, or contact your dedicated project manager or sales associate if you are an existing client."
      }
    },
    {
      "@type": "Question",
      "name": "What is IDR's service response time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Response times depend on your service coverage. SLA clients receive priority scheduling with emergency issues typically addressed within 24 hours or sooner. Non-SLA clients generally receive service within 5 business days, with emergency requests handled on a best-effort basis."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer service agreements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer service agreements for security systems and network support. Our in-house technicians document all service activity in our customer service portal."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of Service Agreements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Service Agreements provide faster response times, same-day emergency service for covered customers, weekend emergency support, manufacturer RMA handling, installation and programming, configuration changes, and ongoing technical support."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <FAQSection />
    </>
  );
}