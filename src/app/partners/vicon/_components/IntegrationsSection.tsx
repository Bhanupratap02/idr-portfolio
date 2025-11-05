/** @format */

import { Check } from "lucide-react";
const VideoImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fvideo.png";
const IntercomImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fintercom.png";
const LoginImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Flogin.png";
const LockdownImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Flockdown.png";
import IntegrationCard from "./IntegrationCard";

const integrations = [
  {
    title: "VAX + Vicon Video",
    description:
      "Review synced door activity + footage side-by-side. Instantly correlate access events with video evidence.",
    feature: "Real-time synchronization",
    image:
      VideoImg,
  },
  {
    title: "VAX + Intercom Systems",
    description:
      "Visitor call stations with instant access review. See and speak with visitors before granting access.",
    feature: "Mobile app integration",
    image:
      IntercomImg,
  },
  {
    title: "VAX + Multi-Credentialing",
    description:
      "Use PIN, mobile, card, or facial entry. Flexible authentication options for any environment.",
    feature: "Biometric compatibility",
    image:
      LoginImg,
  },
  {
    title: "VAX + Lockdown Triggers",
    description:
      "Trigger lockdowns instantly in emergencies. Protect occupants with one-touch protocols.",
    feature: "Emergency notification system",
    image:
      LockdownImg,
  },
];

export default function IntegrationsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40 bg-gray-50">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-18 2xl:mb-20 max-w-xs sm:max-w-2xl md:max-w-4xl  xl:max-w-5xl 2xl:max-w-6xl  mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-900 leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-8 3xl:mb-10">
            Integrations That Work Smarter Together
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-gray-600 leading-relaxed px-2 sm:px-0 font-light">
            Our seamless integrations create a unified security ecosystem that
            enhances protection and simplifies management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 2xl:gap-10">
          {integrations.map((integration, index) => (
            <div key={index}>
              <IntegrationCard {...integration} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
