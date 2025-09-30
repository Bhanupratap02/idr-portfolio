import img751 from "../imports/figma:asset/09a559844046e2c82c7f0ec72cc038c3dfea6849.png";
import svgPaths from "../imports/svg-intx8q9gz5";

function CheckIcon() {
  return (
    <div className="w-5 h-5 flex-shrink-0">
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_7_689)">
          <path d={svgPaths.p124e9100} fill="#22C55E" />
        </g>
        <defs>
          <clipPath id="clip0_7_689">
            <path d="M0 0H20V20H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <CheckIcon />
      <span className="text-xl text-[#626262]">{children}</span>
    </div>
  );
}

export function VirtualKeySection() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2e2e2e] leading-tight mb-6">
              Enhance Resident Experience with Virtual Key
            </h2>
            
            <p className="text-xl text-[#626262] leading-relaxed mb-8">
              Provide residents with the convenience of digital access control right from their smartphone.
            </p>
            
            <div className="space-y-4 mb-12">
              <FeatureItem>Digital entry with smartphone</FeatureItem>
              <FeatureItem>Buzz in visitors/deliveries remotely</FeatureItem>
              <FeatureItem>Auto-access for verified Amazon drivers</FeatureItem>
              <FeatureItem>Seamless integration with property management systems</FeatureItem>
              <FeatureItem>Syncs tenant status efficiently</FeatureItem>
            </div>
            
            <button className="bg-[#2e2e2e] text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
              Learn More About Virtual Key
            </button>
          </div>
          
          <div className="relative">
            <img 
              src={img751} 
              alt="Virtual Key Features"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}