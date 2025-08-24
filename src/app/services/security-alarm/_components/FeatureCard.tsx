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
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-6">{icon}</div>

      <h3 className="text-[#2E2E2E] text-xl font-medium mb-4 leading-tight">
        {title}
      </h3>

      <p className="text-[#626262] text-base leading-relaxed">{description}</p>
    </div>
  );
}
