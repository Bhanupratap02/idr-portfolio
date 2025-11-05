/** @format */

import {
  Building,
  GraduationCap,
  Heart,
  Home,
  Shield,
  ShoppingBag,
} from "lucide-react";
const OfficeImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Foffice.png";
const SchoolImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fschool.png";
const ClinicImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fclinic.png";
const ApartmentImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fapartment.png";
const GateImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fgate.png";
const RetailImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fretail.png";
import EnvironmentCard from "./EnvironmentCard";

const environments = [
  {
    icon: Building,
    title: "Commercial Office Complexes",
    description: "Multi-tenant security with advanced access controls",
    image:
      OfficeImg,
  },
  {
    icon: GraduationCap,
    title: "Schools & Colleges",
    description: "Emergency protocols with lockdown capabilities",
    image:
      SchoolImg,
  },
  {
    icon: Heart,
    title: "Clinics & Healthcare",
    description: "Restricted access for sensitive areas",
    image:
      ClinicImg,
  },
  {
    icon: Home,
    title: "Mid-Rise Apartments",
    description: "Resident and visitor management systems",
    image:
      ApartmentImg,
  },
  {
    icon: Shield,
    title: "Shared-Entry & Gate Systems",
    description: "Vehicle and pedestrian access solutions",
    image:
      GateImg,
  },
  {
    icon: ShoppingBag,
    title: "Retail & Storefronts",
    description: "Loss prevention with customer analytics",
    image:
      RetailImg,
  },
];

export default function EnvironmentsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40 bg-white">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-18 2xl:mb-20  max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-medium text-gray-900 leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-8 3xl:mb-10">
            Designed for Real-World Environments
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-gray-600 leading-relaxed px-2 sm:px-0 font-light">
            Our Vicon + VAX integrated solutions are tailored for various
            security needs across different industries and environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-8">
          {environments.map((environment, index) => (
            <div key={index}>
              <EnvironmentCard {...environment} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
