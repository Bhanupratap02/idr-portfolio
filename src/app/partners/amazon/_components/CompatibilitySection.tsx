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

function AccessIcon({ path }: { path: string }) {
  return (
    <div className="w-[30px] h-[30px] flex-shrink-0">
      <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_access)">
          <path d={path} fill="#2E2E2E" />
        </g>
        <defs>
          <clipPath id="clip0_access">
            <path d="M0 0H30V30H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FobIcon() {
  return (
    <div className="w-[26.25px] h-[30px] flex-shrink-0">
      <svg className="w-full h-full" fill="none" viewBox="0 0 27 30">
        <g>
          <path d="M26.25 30H0V0H26.25V30Z" stroke="#E5E7EB" />
          <path d={svgPaths.p2188f800} fill="#2E2E2E" />
        </g>
      </svg>
    </div>
  );
}

function CodedGateIcon() {
  return (
    <div className="w-[22.5px] h-[30px] flex-shrink-0">
      <svg className="w-full h-full" fill="none" viewBox="0 0 23 30">
        <g clipPath="url(#clip0_coded)">
          <path d={svgPaths.p1bfaae00} fill="#2E2E2E" />
        </g>
        <defs>
          <clipPath id="clip0_coded">
            <path d="M0 0H22.5V30H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MotorizedGateIcon() {
  return (
    <div className="w-[33.75px] h-[30px] flex-shrink-0">
      <svg className="w-full h-full" fill="none" viewBox="0 0 34 30">
        <g clipPath="url(#clip0_motorized)">
          <path d={svgPaths.p34d1ae00} fill="#2E2E2E" />
        </g>
        <defs>
          <clipPath id="clip0_motorized">
            <path d="M0 0H33.75V30H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CompatibilityCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-white rounded-lg border border-[#e0eaff] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] p-6 h-[200px] flex flex-col items-center">
      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
        {icon}
      </div>
      
      <h3 className="text-[#2e2e2e] text-center mb-4">
        {title}
      </h3>
      
      <div className="flex items-center justify-center">
        <CheckIcon />
      </div>
    </div>
  );
}

export function CompatibilitySection() {
  const compatibilityItems = [
    {
      icon: <FobIcon />,
      title: "Fob Readers"
    },
    {
      icon: <AccessIcon path={svgPaths.p3159a500} />,
      title: "Call Boxes"
    },
    {
      icon: <AccessIcon path={svgPaths.p3d72bb00} />,
      title: "Remote Openers"
    },
    {
      icon: <CodedGateIcon />,
      title: "Coded Gates"
    },
    {
      icon: <MotorizedGateIcon />,
      title: "Motorized Gates"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#2e2e2e] mb-4">
            Introducing Amazon Key for Business
          </h2>
          <p className="text-xl text-[#626262] max-w-lg mx-auto">
            Compatible with over 95% of secure access systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {compatibilityItems.map((item, index) => (
            <CompatibilityCard
              key={index}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}