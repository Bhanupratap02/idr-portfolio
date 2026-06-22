/** @format */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const benefits = [
  {
    icon: (
      <svg
        className="w-10 h-8 text-[#0056B3]"
        viewBox="0 0 38 31"
        fill="currentColor"
      >
        <path d="M0 20.4375C0 25.0957 3.7793 28.875 8.4375 28.875H30C34.1426 28.875 37.5 25.5176 37.5 21.375C37.5 17.748 34.9219 14.7188 31.5 14.0273C31.7402 13.4004 31.875 12.7148 31.875 12C31.875 8.89453 29.3555 6.375 26.25 6.375C25.0957 6.375 24.0176 6.72656 23.127 7.32422C21.5039 4.51172 18.4746 2.625 15 2.625C9.82031 2.625 5.625 6.82031 5.625 12C5.625 12.1582 5.63086 12.3164 5.63672 12.4746C2.35547 13.6289 0 16.7578 0 20.4375Z" />
      </svg>
    ),
    title: "Cloud & On-Premise Support",
    description:
      "Flexible deployment options to match your infrastructure requirements and preferences.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#0056B3]"
        viewBox="0 0 31 31"
        fill="currentColor"
      >
        <path d="M13.02 1.17818C12.6684 0.809035 12.1411 0.66841 11.6489 0.797316C11.1567 0.926222 10.7758 1.3188 10.6469 1.81099L9.72114 5.4731L6.08833 4.44771C5.59614 4.30708 5.0688 4.44771 4.71138 4.80513C4.35396 5.16255 4.21333 5.68989 4.35396 6.18208L5.37935 9.81489L1.71724 10.7465C1.22505 10.8696 0.838331 11.2563 0.703566 11.7485C0.5688 12.2407 0.715285 12.7622 1.08443 13.1137L3.79146 15.7504L1.08443 18.3872C0.715285 18.7387 0.57466 19.2661 0.703566 19.7583C0.832472 20.2504 1.22505 20.6313 1.71724 20.7602L5.37935 21.686L4.35396 25.3188C4.21333 25.811 4.35396 26.3383 4.71138 26.6958C5.0688 27.0532 5.59614 27.1938 6.08833 27.0532L9.72114 26.0278L10.6469 29.6899C10.77 30.1821 11.1567 30.5688 11.6489 30.7036C12.1411 30.8383 12.6626 30.6918 13.02 30.3286L15.6567 27.6215L18.2934 30.3286C18.6508 30.6918 19.1723 30.8383 19.6645 30.7036C20.1567 30.5688 20.5375 30.1821 20.6665 29.6899L21.5922 26.0278L25.225 27.0532C25.7172 27.1938 26.2446 27.0532 26.602 26.6958C26.9594 26.3383 27.1 25.811 26.9594 25.3188L25.934 21.686L29.5961 20.7602C30.0883 20.6372 30.4751 20.2504 30.6098 19.7583C30.7446 19.2661 30.5981 18.7446 30.2348 18.3872L27.5278 15.7504L30.2348 13.1137C30.5981 12.7563 30.7446 12.2348 30.6098 11.7426C30.4751 11.2504 30.0883 10.8696 29.5961 10.7407L25.934 9.81489L26.9594 6.18208C27.1 5.68989 26.9594 5.16255 26.602 4.80513C26.2446 4.44771 25.7172 4.30708 25.225 4.44771L21.5922 5.4731L20.6606 1.81099C20.5375 1.3188 20.1508 0.932081 19.6586 0.797316C19.1665 0.66255 18.645 0.809035 18.2934 1.17818L15.6567 3.88521L13.02 1.17818Z" />
      </svg>
    ),
    title: "Certified Installers",
    description:
      "Our technicians hold industry certifications and undergo rigorous training programs.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#0056B3]"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.70117 9.12334C12.3457 5.47881 18.2344 5.46123 21.9023 9.06475L19.4883 11.473C19.084 11.8773 18.9668 12.4808 19.1836 13.0081C19.4004 13.5355 19.916 13.8753 20.4844 13.8753H27.4863H27.9844C28.7637 13.8753 29.3906 13.2483 29.3906 12.469V4.96905C29.3906 4.40069 29.0508 3.88506 28.5234 3.66827C27.9961 3.45147 27.3926 3.56866 26.9883 3.97295L24.5508 6.41045C19.418 1.34209 11.1504 1.35967 6.04688 6.46905C4.61719 7.89874 3.58594 9.58038 2.95312 11.3792C2.60742 12.3577 3.12305 13.4241 4.0957 13.7698C5.06836 14.1155 6.14062 13.5999 6.48633 12.6273C6.9375 11.3499 7.66992 10.1487 8.70117 9.12334ZM1.26562 19.0315V19.4769V19.5179V26.5315C1.26562 27.0999 1.60547 27.6155 2.13281 27.8323C2.66016 28.0491 3.26367 27.9319 3.66797 27.5276L6.10547 25.0901C11.2383 30.1585 19.5059 30.1409 24.6094 25.0315C26.0391 23.6019 27.0762 21.9202 27.709 20.1273C28.0547 19.1487 27.5391 18.0823 26.5664 17.7366C25.5938 17.3909 24.5215 17.9065 24.1758 18.8792C23.7246 20.1565 22.9922 21.3577 21.9609 22.3831C18.3164 26.0276 12.4277 26.0452 8.75977 22.4417L11.168 20.0276C11.5723 19.6233 11.6895 19.0198 11.4727 18.4925C11.2559 17.9651 10.7402 17.6253 10.1719 17.6253H3.16406H3.12305H2.67188C1.89258 17.6253 1.26562 18.2523 1.26562 19.0315Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Full Lifecycle Support",
    description:
      "From initial consultation to ongoing maintenance, we're with you every step of the way.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#0056B3]"
        viewBox="0 0 30 31"
        fill="currentColor"
      >
        <path d="M20.625 19.5C25.8047 19.5 30 15.3047 30 10.125C30 9.22852 29.8711 8.36133 29.6367 7.53516C29.4551 6.90234 28.6758 6.76172 28.2129 7.22461L23.7129 11.7246C23.5371 11.9004 23.2969 12 23.0508 12H19.6875C19.1719 12 18.75 11.5781 18.75 11.0625V7.69922C18.75 7.45312 18.8496 7.21289 19.0254 7.03711L23.5254 2.53711C23.9883 2.07422 23.8418 1.29492 23.2148 1.11328C22.3887 0.878906 21.5215 0.75 20.625 0.75C15.4453 0.75 11.25 4.94531 11.25 10.125C11.25 11.2441 11.4492 12.3223 11.8066 13.3184L1.16602 23.959C0.421875 24.7031 0 25.7168 0 26.7715C0 28.9688 1.78125 30.75 3.97852 30.75C5.0332 30.75 6.04688 30.3281 6.79102 29.584L17.4316 18.9434C18.4277 19.3066 19.5059 19.5 20.625 19.5ZM4.6875 24.6562C5.06046 24.6562 5.41815 24.8044 5.68187 25.0681C5.94559 25.3319 6.09375 25.6895 6.09375 26.0625C6.09375 26.4355 5.94559 26.7931 5.68187 27.0569C5.41815 27.3206 5.06046 27.4688 4.6875 27.4688C4.31454 27.4688 3.95685 27.3206 3.69313 27.0569C3.42941 26.7931 3.28125 26.4355 3.28125 26.0625C3.28125 25.6895 3.42941 25.3319 3.69313 25.0681C3.95685 24.8044 4.31454 24.6562 4.6875 24.6562Z" />
      </svg>
    ),
    title: "Retrofit & Legacy Expertise",
    description:
      "Specialized knowledge in upgrading and integrating with existing security infrastructure.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#0056B3]"
        viewBox="0 0 31 31"
        fill="currentColor"
      >
        <path d="M15.6562 0.75C19.6345 0.75 23.4498 2.33035 26.2629 5.1434C29.0759 7.95644 30.6562 11.7718 30.6562 15.75C30.6562 19.7282 29.0759 23.5436 26.2629 26.3566C23.4498 29.1696 19.6345 30.75 15.6562 30.75C11.678 30.75 7.86269 29.1696 5.04965 26.3566C2.2366 23.5436 0.65625 19.7282 0.65625 15.75C0.65625 11.7718 2.2366 7.95644 5.04965 5.1434C7.86269 2.33035 11.678 0.75 15.6562 0.75ZM14.25 7.78125V15.75C14.25 16.2188 14.4844 16.6582 14.877 16.9219L20.502 20.6719C21.1465 21.1055 22.0195 20.9297 22.4531 20.2793C22.8867 19.6289 22.7109 18.7617 22.0605 18.3281L17.0625 15V7.78125C17.0625 7.00195 16.4355 6.375 15.6562 6.375C14.877 6.375 14.25 7.00195 14.25 7.78125Z" />
      </svg>
    ),
    title: "24/7 Monitoring",
    description:
      "Round-the-clock monitoring services to ensure your property is always protected.",
  },
  {
    icon: (
      <svg
        className="w-10 h-8 text-[#0056B3]"
        viewBox="0 0 38 31"
        fill="currentColor"
      >
        <path d="M7.82812 2.625C5.75977 2.625 4.07812 4.30664 4.07812 6.375V21.375H7.82812V6.375H30.3281V21.375H34.0781V6.375C34.0781 4.30664 32.3965 2.625 30.3281 2.625H7.82812ZM1.45312 23.25C0.832031 23.25 0.328125 23.7539 0.328125 24.375C0.328125 26.8594 2.34375 28.875 4.82812 28.875H33.3281C35.8125 28.875 37.8281 26.8594 37.8281 24.375C37.8281 23.7539 37.3242 23.25 36.7031 23.25H1.45312Z" />
      </svg>
    ),
    title: "Free Portal Access",
    description:
      "Complimentary access to our comprehensive management portal for all clients.",
  },
];
export default function WhyIDRSection() {
  return (
    <section className="bg-[#F8F8F8] py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 3xl:py-36">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 3xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl  lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold  mb-4">
            Why IDR?
          </h2>
          <p className="text-[#626262] text-base sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl  mx-auto leading-relaxed">
            Industry-leading expertise with a customer-first approach.
          </p>
          <p className="text-[#626262] text-base sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl  mx-auto leading-relaxed">
            With our intrusion alarm systems, you get proactive protection backed by 24/7 monitoring and expert support.
          </p>

        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 xl:p-8 3xl:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6">{benefit.icon}</div>

              <h3 className="text-[#2E2E2E] text-lg lg:text-xl 3xl:text-2xl font-medium mb-4 leading-tight">
                {benefit.title}
              </h3>

              <p className="text-[#626262] text-sm lg:text-base 3xl:text-xl leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href={"/contact"} className="bg-[#0056B3] hover:bg-[#0056B3]/90 text-white px-12 md:px-8 py-4 md:py-5 lg:px-12 3xl:px-12 2xl:py-6  text-base md:text-lg 3xl:text-xl inline-flex items-center justify-center gap-3 rounded-lg mx-auto cursor-pointer hover:scale-105 transition-all duration-300 group">
            Schedule a Consultation
            <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 3xl:w-6 3xl:h-6 group-hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
