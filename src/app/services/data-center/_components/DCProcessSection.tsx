/** @format */
  const processes = [
    {
      step: "1",
      title: "Walkthrough & Site Assessment",
      description:
        "We evaluate your space, document requirements, and identify potential challenges before planning begins.",
      side: "left",
    },
    {
      step: "2",
      title: "Rack Planning & Panel Design",
      description:
        "Detailed design of rack layouts, cable paths, and panel configurations to optimize space and airflow.",
      side: "right",
    },
    {
      step: "3",
      title: "BoM & Vendor Coordination",
      description:
        "Comprehensive bill of materials creation and coordination with trusted vendors to ensure quality components.",
      side: "left",
    },
    {
      step: "4",
      title: "Physical Install",
      description:
        "Expert technicians install equipment, run cables, and implement designed solutions with precision.",
      side: "right",
    },
    {
      step: "5",
      title: "Dressing & Testing",
      description:
        "Professional cable management and comprehensive testing of all installed components.",
      side: "left",
    },
    {
      step: "6",
      title: "Firestop & Compliance",
      description:
        "Implementation of fire safety measures and verification of compliance with relevant codes.",
      side: "right",
    },
    {
      step: "7",
      title: "Diagrams & Documentation",
      description:
        "Detailed documentation of the installed infrastructure, including diagrams, test results, and warranties.",
      side: "left",
    },
    {
      step: "8",
      title: "Portal Access & Ongoing Support",
      description:
        "Setup of portal access for documentation and configuration of ongoing support services.",
      side: "right",
    },
  ];
// export default function DCProcessSection() {
//   return (
//     <section className="py-16 sm:py-20 lg:py-24 bg-gray-100">
//       <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-800 mb-4">
//             The IDR Process
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Our structured approach ensures quality, consistency, and
//             transparency at every stage of your infrastructure project.
//           </p>
//         </div>

//         <div className="relative">
//           {/* Central timeline line */}
//           <div className=" hidden md:block absolute left-1/2 transform -translate-x-0.5 w-1 bg-blue-200 h-full"></div>

//           <div className="space-y-12 2xl:space-y-16">
//             {processes.map((process, index) => (
//               <div
//                 key={index}
//                 className="relative flex flex-col md:flex-row items-center"
//               >
//                 {/* Step number circle */}
//                 <div className="absolute md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium  text-lg sm:text-xl lg:text-2xl z-10">
//                   {process.step}
//                 </div>

//                 {/* Content box */}
//                 <div
//                   className={`w-full ${
//                     process.side === "left" ? "pr-14" : "pl-14"
//                   }`}
//                 >
//                   <div
//                     className={`w-1/2 ${
//                       process.side === "left" ? "ml-0" : "ml-auto"
//                     } ${process.side === "right" ? "text-left" : "text-right"}`}
//                   >
//                     <div className="space-y-3">
//                       <h3 className="text-xl font-normal text-gray-800">
//                         {process.title}
//                       </h3>
//                       <p className="text-base text-gray-600 leading-relaxed">
//                         {process.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
/** @format */
export default function DCProcessSection() {
  const processes = [
    {
      step: "1",
      title: "Walkthrough & Site Assessment",
      description:
        "We evaluate your space, document requirements, and identify potential challenges before planning begins.",
      side: "left",
    },
    {
      step: "2",
      title: "Rack Planning & Panel Design",
      description:
        "Detailed design of rack layouts, cable paths, and panel configurations to optimize space and airflow.",
      side: "right",
    },
    {
      step: "3",
      title: "BoM & Vendor Coordination",
      description:
        "Comprehensive bill of materials creation and coordination with trusted vendors to ensure quality components.",
      side: "left",
    },
    {
      step: "4",
      title: "Physical Install",
      description:
        "Expert technicians install equipment, run cables, and implement designed solutions with precision.",
      side: "right",
    },
    {
      step: "5",
      title: "Dressing & Testing",
      description:
        "Professional cable management and comprehensive testing of all installed components.",
      side: "left",
    },
    {
      step: "6",
      title: "Firestop & Compliance",
      description:
        "Implementation of fire safety measures and verification of compliance with relevant codes.",
      side: "right",
    },
    {
      step: "7",
      title: "Diagrams & Documentation",
      description:
        "Detailed documentation of the installed infrastructure, including diagrams, test results, and warranties.",
      side: "left",
    },
    {
      step: "8",
      title: "Portal Access & Ongoing Support",
      description:
        "Setup of portal access for documentation and configuration of ongoing support services.",
      side: "right",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-100">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-800 mb-4">
            The IDR Process
          </h2>
          <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our structured approach ensures quality, consistency, and
            transparency at every stage of your infrastructure project.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line only on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-1 bg-blue-200 h-full"></div>
          

          <div className="space-y-12 lg:space-y-16">
            {processes.map((process, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center md:items-start"
              >
                {/* Step circle */}
                <div className="absolute md:left-1/2 md:-translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium text-lg sm:text-xl lg:text-2xl z-10">
                  {process.step}
                </div>

                {/* Content */}

                <div
                  className={` mt-14 md:mt-0 w-full md:w-1/2 ${
                    process.side === "left"
                      ? "md:text-right md:pr-16"
                      : "md:text-left md:pl-16 md:ml-auto"
                  } text-center md:text-inherit`}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg 2xl:text-xl text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
