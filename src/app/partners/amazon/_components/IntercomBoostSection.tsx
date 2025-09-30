import img843 from "../imports/figma:asset/d1506ae6f32c4f0bbbb5375afdbedb64e52f0086.png";
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

export function IntercomBoostSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={img843} 
              alt="Intercom Boost Features"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div>
            {/* Most Popular Badge */}
            <div className="inline-block bg-[#ff9900] text-white px-4 py-2 rounded-md text-sm font-medium mb-6">
              MOST POPULAR
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2e2e2e] leading-tight mb-6">
              Intercom BOOST Benefits
            </h2>
            
            <p className="text-xl text-[#626262] leading-relaxed mb-8">
              Upgrade your existing callbox system with modern features without replacing hardware.
            </p>
            
            <div className="space-y-4 mb-12">
              <FeatureItem>Digital resident directory</FeatureItem>
              <FeatureItem>One-way video via Ring app</FeatureItem>
              <FeatureItem>Remote unlocking via app</FeatureItem>
              <FeatureItem>Digital entry with smartphone</FeatureItem>
              <FeatureItem>Streamlined vendor access (Amazon & 3rd party)</FeatureItem>
            </div>
            
            <button className="bg-[#2e2e2e] text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
              Explore Intercom Boost
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}