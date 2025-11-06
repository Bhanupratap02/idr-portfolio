/** @format */
const p1 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fstructured-cabling%2Ficons%2Fp_1.png";
const p2 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fstructured-cabling%2Ficons%2Fp_2.png";
const p3 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fstructured-cabling%2Ficons%2Fp_3.png";
const p4 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fstructured-cabling%2Ficons%2Fp_4.png";
const p5 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fstructured-cabling%2Ficons%2Fp_5.png";
const p6 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fstructured-cabling%2Ficons%2Fp_6.png";
const p7 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fstructured-cabling%2Ficons%2Fp_7.png";
import Image from "next/image";
interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  step: number;
  isLast?: boolean;
}
function ProcessStep({ icon, title, step, isLast = false }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-5 2xl:space-y-6 relative group">
      <div className="bg-[#8B5CF6] rounded-full p-3 sm:p-4 lg:p-4 xl:p-5 2xl:p-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 relative z-10">
        {icon}
      </div>
      {/* Connecting Line - Visible on mobile, hidden on larger screens */}
      {/* {!isLast && (
        <div
          className="block lg:hidden absolute top-6 xl:top-7 2xl:top-8 left-8 xl:left-9 2xl:left-10  
        h-0.5 bg-[#E5E7EB] z-0 w-full"
        >
          <div className="h-full bg-[#8B5CF6] w-0 group-hover:w-full transition-all duration-500"></div>
        </div>
      )} */}
      <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal text-[#2E2E2E] text-center leading-tight max-w-[120px] sm:max-w-[140px] lg:max-w-[146px] xl:max-w-[160px] 2xl:max-w-[180px]">
        {title}
      </h3>
    </div>
  );
}

export default function ProcessSection() {
  const processSteps = [
    {
      icon: (
        <Image
          src={p1}
          alt="Site Walk & Assessment"
          width={32}
          height={32}
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white"
        />
      ),
      title: "Site Walk & Assessment",
    },
    {
      icon: (
        <Image
          src={p2}
          alt="Cable Path Planning"
          width={32}
          height={32}
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white"
        />
      ),
      title: "Cable Path Planning",
    },
    {
      icon: (
        <Image
          src={p3}
          alt="Dedicated Project Manager"
          width={32}
          height={32}
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white"
        />
      ),
      title: "Dedicated Project Manager",
    },
    {
      icon: (
        <Image
          src={p4}
          alt="Professional Installation"
          width={32}
          height={32}
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white"
        />
      ),
      title: "Professional Installation",
    },
    {
      icon: (
        <Image
          src={p5}
          alt="Testing & Firestopping"
          width={64}
          height={64}
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 text-white"
        />
      ),
      title: "Testing & Firestopping",
    },
    {
      icon: (
        <Image
          src={p6}
          alt="Full Documentation"
          width={32}
          height={32}
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white"
        />
      ),
      title: "Full Documentation",
    },
    {
      icon: (
        <Image
          src={p7}
          alt="Ongoing Service Agreements"
          width={32}
          height={32}
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white"
        />
      ),
      title: "Ongoing Service Agreements",
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-12 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-32 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-28">
        <div className="text-center space-y-4 sm:space-y-5 lg:space-y-6 mb-12 sm:mb-14 lg:mb-16 xl:mb-18 2xl:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium text-[#2E2E2E] leading-tight">
            Our Process
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-[#4B5563] max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto leading-relaxed">
            We follow a systematic approach to ensure your cabling project is
            completed efficiently and to the highest standards.
          </p>
        </div>

        {/* Process Line */}
        <div className="relative mb-8">
          {/* Background Process Line - Only visible on large screens */}
          <div className=" hidden lg:block absolute top-9 left-8 right-8 h-1 bg-[#E5E7EB]"></div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 2xl:gap-10 relative z-10">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              step={index + 1}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
