/** @format */
const ShieldImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fshield.png";
const QuestionImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fquestion.png";
const TechnicianImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Ftechnician.png";
const SupportImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fsupport.png";
const IntegrationImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fintegration.png";
const ClockImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fclock.png";
import Image from "next/image";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: ShieldImg,
    title: "Certified Vicon + VAX Installer",
    description:
      "Factory-trained technicians with deep product knowledge and installation expertise.",
  },
  {
    icon: QuestionImg,
    title: "Licensed + Insured",
    description:
      "NYS Alarm License holder with comprehensive insurance coverage for all projects.",
  },
  {
    icon: TechnicianImg,
    title: "In-House Technicians",
    description:
      "No outsourcing. Our dedicated team handles every aspect of your security installation.",
  },
  {
    icon: SupportImg,
    title: "Trusted Support",
    description:
      "Fast response times and dedicated support team for all your security needs.",
  },
  {
    icon: IntegrationImg,
    title: "Complete Integration",
    description:
      "Seamless connection between intercom, video, mobile access, and emergency systems.",
  },
  {
    icon: ClockImg,
    title: "Rapid Deployment",
    description:
      "Efficient installation process with minimal disruption to your operations.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-22 xl:py-24 2xl:py-28 3xl:py-32 bg-gray-50">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-8 sm:mb-9 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 3xl:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-medium  text-gray-900 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-8">
            Why Security Pros Trust IDR
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
