/** @format */

import { ArrowRight } from "lucide-react";

export default function WhatMakesMVISection() {
  const products = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0bb91db74fde567aae64921711308d95d0188cc4?width=789",
      title: "IP Video Intercoms",
      description:
        'Sleek 7" and 10" touchscreen interfaces with intuitive controls for residents and visitors.',
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/aab0e49a4b235702092ab1ae2dd0293b30fc5f6b?width=789",
      title: "HD Door Entry Panels",
      description:
        "Weatherproof entry stations with HD cameras, keypads, and digital directories.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/304b7de75287c8a6e1824cd1ab87719517eab31e?width=789",
      title: "Two-Way Audio + Video",
      description:
        "Crystal-clear communication with visitors while maintaining security through one-way video.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/30be649b5db8ce0e0427b87730b14829cb8c266e?width=789",
      title: "Mobile App Access",
      description:
        "Allow residents to answer calls and unlock doors from anywhere using their smartphones.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9a72031eea07d9f4e2010af7d6b73780e6ff0532?width=789",
      title: "System Integration",
      description:
        "SIP, alarm, and access control integration for a comprehensive building security solution.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e523964504296898e5365a1938c175426dadc4aa?width=789",
      title: "Access Logging",
      description:
        "Comprehensive entry records and access logs for enhanced security and management.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-800 mb-6">
            What Makes MVI a Smarter Access Solution
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="w-full h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
