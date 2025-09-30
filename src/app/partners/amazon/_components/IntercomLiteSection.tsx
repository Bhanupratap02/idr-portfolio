import imgImg6 from "../imports/figma:asset/ca4bdab8fbefec291de7e776988d119723c66c1e.png";
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
    <div className="flex items-center gap-2">
      <CheckIcon />
      <span className="text-xl text-[#626262]">{children}</span>
    </div>
  );
}

export function IntercomLiteSection() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2e2e2e] leading-tight mb-6">
              Intercom LITE Benefits
            </h2>
            
            <p className="text-xl text-[#626262] leading-relaxed mb-8">
              The perfect solution for upgrading existing callboxes with modern features.
            </p>
            
            <div className="space-y-4 mb-12">
              <FeatureItem>All benefits of Intercom Boost</FeatureItem>
              <FeatureItem>Mobile access via Ring app</FeatureItem>
              <FeatureItem>Digital resident directory</FeatureItem>
              <FeatureItem>One-way video for visitors</FeatureItem>
              <FeatureItem>Ideal for upgrading existing callboxes</FeatureItem>
            </div>
            
            <button className="bg-[#2e2e2e] text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
              Discover Intercom Lite
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)] p-4 max-w-[600px] mx-auto">
              <img 
                src={imgImg6} 
                alt="Intercom Lite Features"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}