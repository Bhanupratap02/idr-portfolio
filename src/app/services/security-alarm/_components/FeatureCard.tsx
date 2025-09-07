/** @format */

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 xl:p-8 3xl:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-6">{icon}</div>

      <h3 className="text-[#2E2E2E] text-lg lg:text-xl 3xl:text-2xl font-medium mb-4 leading-tight">
        {title}
      </h3>

      <p className="text-[#626262] text-sm lg:text-base 3xl:text-xl leading-relaxed">{description}</p>
    </div>
  );
}
