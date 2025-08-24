/** @format */

import {
  UserIcon,
  RouteIcon,
  UsersIcon,
  WrenchIcon,
  TestTubeIcon,
  FileTextIcon,
  HandshakeIcon,
} from "lucide-react";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  step: number;
}

function ProcessStep({ icon, title, step }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center space-y-4 relative">
      <div className="bg-[#8B5CF6] rounded-full p-4 w-16 h-16 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-normal text-[#2E2E2E] text-center leading-7 max-w-[146px]">
        {title}
      </h3>
    </div>
  );
}

export default function ProcessSection() {
  const processSteps = [
    {
      icon: <UserIcon className="w-6 h-5 text-white" />,
      title: "Site Walk & Assessment",
    },
    {
      icon: <RouteIcon className="w-5 h-5 text-white" />,
      title: "Cable Path Planning",
    },
    {
      icon: <UsersIcon className="w-4.5 h-5 text-white" />,
      title: "Dedicated Project Manager",
    },
    {
      icon: <WrenchIcon className="w-5 h-5 text-white" />,
      title: "Professional Installation",
    },
    {
      icon: <TestTubeIcon className="w-5 h-5 text-white" />,
      title: "Testing & Firestopping",
    },
    {
      icon: <FileTextIcon className="w-4 h-5 text-white" />,
      title: "Full Documentation",
    },
    {
      icon: <HandshakeIcon className="w-6 h-5 text-white" />,
      title: "Ongoing Service Agreements",
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-28">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-medium text-[#2E2E2E]">Our Process</h2>
          <p className="text-xl text-[#4B5563] max-w-5xl mx-auto leading-relaxed">
            We follow a systematic approach to ensure your cabling project is
            completed efficiently and to the highest standards.
          </p>
        </div>

        {/* Process Line */}
        <div className="relative mb-8">
          <div className="absolute top-8 left-8 right-8 h-1 bg-[#E5E7EB]"></div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              step={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
