/** @format */
import Image from "next/image";
import img from "@/assets/image2.png"; // Replace with actual image

const WhatWeDo = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-48 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#3D3D3D] mb-4">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-[#333] leading-relaxed max-w-3xl mx-auto">
            We provide complete low-voltage design and installation services.
            Whether you need a single install or a full-building deployment, our
            team handles every detail — design, installation, documentation, and
            support.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-32 items-center">
          {/* Image with Shadow Removed but Responsive */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:w-[330px] lg:h-[350px]">
            <div className="relative w-full h-0 pb-[100%] lg:pb-0 lg:h-full rounded-xl overflow-hidden">
              <Image
                src={img}
                alt="Security Camera"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>

          {/* Services List */}
          <div className="relative">
            {/* Scroll indicator */}
            <div className="absolute -left-4 sm:left-0 top-0 w-2 h-full hidden md:block">
              <div className="w-full h-full bg-[#DEDEDE]" />
              <div className="w-2 h-12 bg-[#052557] rounded-full absolute top-0" />
            </div>

            <div className="ml-6 sm:ml-8 space-y-5">
              {[
                "Access Control & Intercom Systems",
                "Surveillance Cameras & Security Alarms",
                "Audio/Visual Systems for Commercial & Education",
                "Structured Cabling & Fiber Optics",
                "IT Infrastructure & Wi-Fi",
                "Data Center Builds",
                "Smart Conference Rooms",
                "Sound Masking & Speaker Systems",
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-8 sm:h-8 bg-[#052557] rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg text-[#151515] capitalize">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

//  <section className="px-6 lg:px-48 py-20">
//     <div className="max-w-7xl mx-auto">
//       <div className="text-center mb-12">
//         <h2 className="text-5xl lg:text-6xl font-medium text-[#3D3D3D] mb-4">
//           What We Do
//         </h2>
//         <p className="text-xl text-[#333] leading-relaxed max-w-4xl mx-auto">
//           We provide complete low-voltage design and installation services,
//           including: Whether you need a single install or a full-building
//           deployment, our team handles every detail — design, installation,
//           documentation, and support.
//         </p>
//       </div>

//       <div className="grid lg:grid-cols-2 gap-32 items-center">
//         <div className="relative">
//           {/* Smaller shadow behind the image */}
//           <div className="w-72 h-72 rounded-xl bg-[#052557] bg-opacity-15 transform rotate-[-8deg] absolute top-3 left-8"></div>
//           <div className="w-80 h-80 bg-gray-300 rounded-xl relative z-10">
//             {/* Placeholder for security camera image */}
//             <div className="w-full h-full bg-gray-400 rounded-xl flex items-center justify-center">
//               <span className="text-gray-600 text-sm">
//                 Security Camera Image
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="relative">
//           {/* Vertical scroll indicator line */}
//           <div className="absolute left-0 top-0 w-2 h-full flex flex-col">
//             <div className="w-full h-full bg-[#DEDEDE]"></div>
//             <div className="w-2 h-12 bg-[#052557] rounded-full absolute top-0"></div>
//           </div>

//           {/* Services list with left margin for the scroll indicator */}
//           <div className="ml-12 space-y-4">
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
//                 <svg
//                   className="w-5 h-5 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <span className="text-xl text-[#151515] capitalize">
//                 Access Control & Intercom Systems
//               </span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
//                 <svg
//                   className="w-5 h-5 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <span className="text-xl text-[#151515] capitalize">
//                 Surveillance Cameras & Security Alarms
//               </span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
//                 <svg
//                   className="w-5 h-5 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <span className="text-xl text-[#151515] capitalize">
//                 Audio/Visual Systems for Commercial & Education
//               </span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
//                 <svg
//                   className="w-5 h-5 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <span className="text-xl text-[#151515] capitalize">
//                 Structured Cabling & Fiber Optics
//               </span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
//                 <svg
//                   className="w-5 h-5 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <span className="text-xl text-[#151515] capitalize">
//                 IT Infrastructure & Wi-Fi
//               </span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
//                 <svg
//                   className="w-5 h-5 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <span className="text-xl text-[#151515] capitalize">
//                 Data Center Builds
//               </span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
//                 <svg
//                   className="w-5 h-5 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <span className="text-xl text-[#151515] capitalize">
//                 Smart Conference Rooms
//               </span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-[#052557] rounded-full flex items-center justify-center">
//                 <svg
//                   className="w-5 h-5 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <span className="text-xl text-[#151515] capitalize">
//                 Sound Masking & Speaker Systems
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
