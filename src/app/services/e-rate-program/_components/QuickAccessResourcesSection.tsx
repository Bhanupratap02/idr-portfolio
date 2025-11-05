/** @format */

import { Button } from "@/components/ui/button";
import Image from "next/image";
const list = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fe-rate-program%2Flist.png";
const shield = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fe-rate-program%2Fshield.png";
const faqs = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fe-rate-program%2Ffaqs.png";
export default function QuickAccessResourcesSection() {
  const resources = [
    {
      icon: (
        <Image src={list} alt={"Eligible Services List"} width={48} height={48} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-[#004AAD]" />
      ),
      title: "Eligible Services List",
      desc: "Comprehensive list of services eligible for E-Rate program funding, including Category One and Category Two.",
    },
    {
      icon: (
        <Image src={shield} alt={"CIPA Certification"} width={48} height={48} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-[#004AAD]" />
      ),
      title: "CIPA Certification",
      desc: "Children's Internet Protection Act (CIPA) compliance guidelines and certification documentation required for E-Rate funding.",
    },
    {
      icon: (
        <Image src={faqs} alt={"E-Rate FAQs"} width={48} height={48} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-[#004AAD]" />
      ),
      title: "E-Rate FAQs",
      desc: "Answers to frequently asked questions about the E-Rate program, application process, and funding disbursement.",
    },
  ];
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 3xl:py-32 bg-gradient-to-r from-[#F8FAFC] to-[#EFF6FF] overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 2xl:mb-20 3xl:mb-24 ">
          <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-8 3xl:mb-10">
            Quick Access Resources
          </h2>
          <p className="text-[#626262] text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto px-2 sm:px-0">
            Access essential information about the E-Rate program, eligible
            services, and compliance requirements to ensure your school district
            maximizes its funding opportunities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-8 2xl:gap-10 3xl:gap-12">
          {resources.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 2xl:p-8 3xl:p-10"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 bg-[#DBEAFE] rounded-full flex items-center justify-center mb-6 sm:mb-7 md:mb-8 lg:mb-6 xl:mb-8 2xl:mb-10 3xl:mb-12 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-[#2E2E2E] text-lg sm:text-xl md:text-xl lg:text-xl 2xl:text-2xl 3xl:text-3xl  font-medium mb-4 sm:mb-5 md:mb-6 lg:mb-4 xl:mb-5 2xl:mb-6 3xl:mb-8">
                {item.title}
              </h3>

              <p className="text-[#626262] text-sm sm:text-base md:text-lg lg:text-base  2xl:text-lg 3xl:text-xl leading-relaxed mb-6 sm:mb-7 md:mb-8 lg:mb-6  2xl:mb-8 3xl:mb-10 ">
                {item.desc}
              </p>

              <Button
                size="lg"
                variant={"outline"}
                className="w-full  text-[#003A8C] border-2 border-[#003A8C] hover:bg-[#003A8C] hover:text-white  transition-all duration-300 hover:scale-105  2xl:text-lg 3xl:text-xl  py-2 sm:py-2.5 md:py-3 lg:py-2.5 xl:py-4 2xl:py-4.5 3xl:py-5.5 px-4 sm:px-5 md:px-6 lg:px-5 xl:px-6 2xl:px-8 3xl:px-10 leading-normal"
              >
                Download PDF
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
