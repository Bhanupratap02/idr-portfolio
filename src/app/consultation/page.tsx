// import { Lightbulb, Users, Target, Layers, TrendingUp, Puzzle, CheckCircle, MessageCircle, Sparkles, Building2, GraduationCap, Home, Briefcase, ArrowRight } from 'lucide-react';
// import heroConsultation from "@/assets/idr-advantage/hero-consultation-professional.jpg";
// import img1 from "@/assets/idr-advantage/Consultation.jpeg";
// export default function ConsultationDesign() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       {/* Hero Section - Clean Split Design */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-accent via-accent/95 to-slate-900">
//         {/* Subtle Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
//               backgroundSize: "32px 32px",
//             }}
//           ></div>
//         </div>



//         {/* Hero Content */}
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[95vh] py-16 lg:py-20">
//             {/* Left Side - Content */}
//             <div className="space-y-8 sm:space-y-10 z-10 order-2 lg:order-1">
//               {/* Badge */}
//               <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
//                 <Sparkles className="w-5 h-5 text-primary" />
//                 <span className="text-white font-semibold text-sm uppercase tracking-wider">
//                   Expert Consultation
//                 </span>
//               </div>

//               {/* Main Heading */}
//               <div className="space-y-6">
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
//                   Consultation
//                   <br />
//                   <span className="text-primary">& Design</span>
//                 </h1>

//                 {/* Description */}
//                 <div className="space-y-5 max-w-2xl">
//                   <p className="text-xl sm:text-2xl text-slate-100 leading-relaxed">
//                     Every great security and network system starts with
//                     understanding your unique environment, workflows, and goals.
//                   </p>

//                   <div className="flex items-start space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
//                     <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
//                     <p className="text-lg text-slate-200 leading-relaxed">
//                       We don't just install — we{" "}
//                       <span className="text-white font-semibold">
//                         partner, design, and engineer solutions
//                       </span>{" "}
//                       tailored to your site's specific requirements.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <div className="pt-2">
//                 <button className="group bg-primary hover:bg-primary/90 text-white font-bold px-10 py-5 rounded-xl text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105">
//                   <span>Schedule a Consultation</span>
//                   <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>

//               {/* Key Features */}
//               <div className="grid grid-cols-2 gap-4 pt-6">
//                 {[
//                   { icon: Target, label: "Tailored Solutions" },
//                   { icon: Puzzle, label: "Seamless Integration" },
//                   { icon: Users, label: "Expert Guidance" },
//                   { icon: TrendingUp, label: "Future-Ready Design" },
//                 ].map((feature, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors"
//                   >
//                     <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
//                     <span className="text-sm sm:text-base text-white font-medium">
//                       {feature.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Side - Hero Image */}
//             <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] z-10 order-1 lg:order-2">
//               <div className="relative h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group">
//                 <img
//                   src={heroConsultation.src}
//                   alt="IDR Professional Consultation Team"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                 />

//                 {/* Gradient Overlays */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent"></div>
//                 <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>

//                 {/* Floating Badge - Top Right */}
//                 <div className="absolute top-6 right-6">
//                   <div className="bg-success backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20">
//                     <div className="flex items-center space-x-3">
//                       <CheckCircle className="w-8 h-8 text-white" />
//                       <div>
//                         <div className="text-white font-bold text-sm">
//                           Certified
//                         </div>
//                         <div className="text-white/90 text-xs">Expert Team</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Badge - Bottom */}
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl">
//                     <div className="flex items-center space-x-4">
//                       <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
//                         <Users className="w-6 h-6 text-white" />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className="text-accent font-bold text-base mb-1">
//                           Michael LaPunzina
//                         </div>
//                         <div className="text-accent-light text-sm">
//                           24 years field experience
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Wave */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg
//             viewBox="0 0 1440 80"
//             className="w-full h-12 sm:h-16 lg:h-20"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="rgb(248, 250, 252)"
//               d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
//             ></path>
//           </svg>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
//         {/* Partnership Statement with Image */}
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-16 sm:mb-24 lg:mb-32">
//           <div className="order-2 lg:order-1">
//             <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
//               <div className="inline-block bg-blue-100 rounded-lg px-4 py-2 mb-6">
//                 <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">
//                   Our Approach
//                 </span>
//               </div>

//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
//                 More Than an Installer — A True Partner
//               </h2>

//               <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-6">
//                 When you work with IDR, you're not just hiring an installer —
//                 you're gaining a partner who listens, consults, and engineers
//                 technology around your specific goals.
//               </p>

//               <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-600">
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
//                       <Users className="w-6 h-6 text-white" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-slate-900 mb-2">
//                       Led by Experience
//                     </h3>
//                     <p className="text-slate-700 leading-relaxed">
//                       Led by founder{" "}
//                       <span className="font-semibold text-indigo-700">
//                         Michael LaPunzina
//                       </span>
//                       , our consultative approach combines hands-on field
//                       experience with forward-thinking design. Michael's{" "}
//                       <span className="font-semibold">
//                         24 years of real-world expertise
//                       </span>{" "}
//                       ensure that every recommendation is practical, scalable,
//                       and perfectly aligned with your site's requirements — not
//                       a cookie-cutter template.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Image Placeholder */}
//           <div className="order-1 lg:order-2">
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
//               <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500 via-blue-600 to-indigo-700 flex items-center justify-center">
//                 <div className="text-center p-8">
//                   <MessageCircle className="w-24 h-24 sm:w-32 sm:h-32 mx-auto text-white opacity-90 mb-4" />
//                   <p className="text-white text-2xl font-semibold">
//                     Consultation Image
//                   </p>
//                   <p className="text-blue-100 text-lg mt-3">
//                     Replace with your consultation/design image
//                   </p>
//                 </div>
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//               <div className="absolute inset-0 border-2 border-white/20 rounded-2xl group-hover:border-white/40 transition-colors duration-300"></div>
//             </div>
//           </div>
//         </div>

//         {/* Design Philosophy Section */}
//         <div className="mb-16 sm:mb-24 lg:mb-32">
//           <div className="text-center mb-12 sm:mb-16">
//             <div className="inline-block bg-purple-100 rounded-lg px-4 py-2 mb-6">
//               <span className="text-purple-800 font-semibold text-sm uppercase tracking-wide">
//                 How We Work
//               </span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6">
//               Our Design Philosophy
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {[
//               {
//                 icon: Target,
//                 title: "Tailored to Your Needs",
//                 description:
//                   "Every system we design is built around your environment, workflows, and budget — no two projects are ever the same.",
//                 color: "from-blue-500 to-blue-600",
//                 iconBg: "bg-blue-100",
//                 iconColor: "text-blue-600",
//               },
//               {
//                 icon: Puzzle,
//                 title: "Integration-Focused",
//                 description:
//                   "We understand that your systems need to work together. IDR designs solutions that integrate seamlessly — whether it's access control linked with cameras, two-way radios, visitor management platforms like Envoy, SSO integrations for unified control, or other connected technologies.",
//                 color: "from-purple-500 to-purple-600",
//                 iconBg: "bg-purple-100",
//                 iconColor: "text-purple-600",
//               },
//               {
//                 icon: TrendingUp,
//                 title: "Future-Ready",
//                 description:
//                   "Our designs anticipate growth, software updates, and emerging technologies so your investment remains relevant for years to come.",
//                 color: "from-green-500 to-green-600",
//                 iconBg: "bg-green-100",
//                 iconColor: "text-green-600",
//               },
//               {
//                 icon: CheckCircle,
//                 title: "Real-World Experience",
//                 description:
//                   "Because we install what we design, our plans are grounded in what actually works in the field — not just what looks good on paper.",
//                 color: "from-orange-500 to-orange-600",
//                 iconBg: "bg-orange-100",
//                 iconColor: "text-orange-600",
//               },
//               {
//                 icon: Users,
//                 title: "Client-First Collaboration",
//                 description:
//                   "We guide you through every step, explaining the why behind each recommendation so you can make confident, informed decisions.",
//                 color: "from-indigo-500 to-indigo-600",
//                 iconBg: "bg-indigo-100",
//                 iconColor: "text-indigo-600",
//               },
//             ].map((philosophy, idx) => (
//               <div
//                 key={idx}
//                 className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 group ${
//                   idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
//                 }`}
//               >
//                 <div
//                   className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${philosophy.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <philosophy.icon
//                     className={`w-8 h-8 ${philosophy.iconColor}`}
//                   />
//                 </div>
//                 <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
//                   {philosophy.title}
//                 </h3>
//                 <p className="text-slate-600 leading-relaxed">
//                   {philosophy.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Industries We Serve */}
//         <div className="mb-16 sm:mb-24 lg:mb-32">
//           <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
//             <div className="max-w-5xl mx-auto">
//               <div className="text-center mb-10 sm:mb-14">
//                 <div className="inline-block bg-white/10 rounded-lg px-4 py-2 mb-6 border border-white/20">
//                   <span className="text-blue-200 font-semibold text-sm uppercase tracking-wide">
//                     Trusted Across Industries
//                   </span>
//                 </div>
//                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
//                   We Transform Complex Challenges
//                 </h2>
//                 <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
//                   From schools and multifamily communities to enterprise
//                   campuses and office environments, IDR's consultative process
//                   transforms complex security and network challenges into
//                   reliable, integrated solutions — built to last and designed
//                   for you.
//                 </p>
//               </div>

//               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//                 {[
//                   { icon: GraduationCap, label: "Schools & Education" },
//                   { icon: Home, label: "Multifamily Communities" },
//                   { icon: Building2, label: "Enterprise Campuses" },
//                   { icon: Briefcase, label: "Office Environments" },
//                 ].map((industry, idx) => (
//                   <div key={idx} className="text-center group">
//                     <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-2xl border-2 border-white/20 mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
//                       <industry.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-300" />
//                     </div>
//                     <p className="text-white font-semibold text-base sm:text-lg">
//                       {industry.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quote Section */}
//         <div className="relative mb-16 sm:mb-24">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20 blur-3xl"></div>

//           <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 shadow-xl border-2 border-slate-200">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
//                 <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg rotate-12">
//                   <Sparkles className="w-8 h-8 text-white" />
//                 </div>
//               </div>

//               <div className="pt-8">
//                 <svg
//                   className="w-12 h-12 text-indigo-300 opacity-50 mx-auto mb-6"
//                   fill="currentColor"
//                   viewBox="0 0 32 32"
//                 >
//                   <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"></path>
//                 </svg>

//                 <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-800 italic leading-relaxed mb-8">
//                   We don't just design systems — we design confidence.
//                 </blockquote>

//                 <div className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 h-1 w-24 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Process Overview */}
//         <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-slate-200">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 text-center">
//               Our Consultative Process
//             </h2>

//             <div className="space-y-6">
//               {[
//                 {
//                   step: "1",
//                   title: "Listen & Understand",
//                   description:
//                     "We start by learning about your goals, challenges, and environment",
//                 },
//                 {
//                   step: "2",
//                   title: "Analyze & Strategize",
//                   description:
//                     "We assess your needs and develop tailored solutions",
//                 },
//                 {
//                   step: "3",
//                   title: "Design & Present",
//                   description:
//                     "We create detailed plans with clear explanations of every recommendation",
//                 },
//                 {
//                   step: "4",
//                   title: "Refine & Optimize",
//                   description:
//                     "We collaborate with you to perfect the design before implementation",
//                 },
//                 {
//                   step: "5",
//                   title: "Install & Support",
//                   description:
//                     "We bring the design to life with certified installation and ongoing partnership",
//                 },
//               ].map((process, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-start space-x-4 sm:space-x-6 group"
//                 >
//                   <div className="flex-shrink-0">
//                     <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
//                       {process.step}
//                     </div>
//                   </div>
//                   <div className="flex-1 pt-2">
//                     <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
//                       {process.title}
//                     </h3>
//                     <p className="text-slate-600 leading-relaxed">
//                       {process.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 sm:mt-24 text-center">
//           <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
//             <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3">
//               <span>Schedule a Consultation</span>
//               <Lightbulb className="w-5 h-5" />
//             </button>
//             <button className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl border-2 border-slate-300 hover:border-slate-400 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3 shadow-md">
//               <span>View Our Projects</span>
//               <Layers className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Accent */}
//       <div className="h-2 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600"></div>
//     </div>
//   );
// }

import type { Metadata } from "next";
import CTASection from "./_components/CTASection";
import DesignPhilosophy from "./_components/DesignPhilosophy";
import HeroSection from "./_components/HeroSection";
import IndustriesSection from "./_components/IndustriesSection";
import PartnershipSection from "./_components/PartnershipSection";
import ProcessSection from "./_components/ProcessSection";
import QuoteSection from "./_components/QuoteSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/consultation",
  },
};

export default function ConsultationDesign() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
        <PartnershipSection />
        <DesignPhilosophy />
        <IndustriesSection />
        <QuoteSection />
        <ProcessSection />
        <CTASection />
      </main>
      <div className="h-2 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600"></div>
    </div>
  );
}
