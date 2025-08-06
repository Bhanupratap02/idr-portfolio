import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePillCarousel from "@/components/ServicePillCarousel";
import Access1 from "@/assets/portfolio/access1.png"
import Access2 from "@/assets/portfolio/access2.png"
import Access3 from "@/assets/portfolio/access3.png"
import Audio1 from "@/assets/portfolio/audio1.png"
import Audio2 from "@/assets/portfolio/audio2.png"
import Audio3 from "@/assets/portfolio/audio3.png"
import cabling1 from "@/assets/portfolio/cabling1.png"
import cabling2 from "@/assets/portfolio/cabling2.png"
import cabling3 from "@/assets/portfolio/cabling3.png"
import camera1 from "@/assets/portfolio/camera1.png"
import camera2 from "@/assets/portfolio/camera2.png"
import camera3 from "@/assets/portfolio/camera3.png"
import data1 from "@/assets/portfolio/data1.png"
import data2 from "@/assets/portfolio/data2.png"
import data3 from "@/assets/portfolio/data3.png"
import intercom1 from "@/assets/portfolio/intercom1.png"
import intercom2 from "@/assets/portfolio/intercom2.png"
import intercom3 from "@/assets/portfolio/intercom3.png"
import security1 from "@/assets/portfolio/security1.png"
import security2 from "@/assets/portfolio/security2.png"
import security3 from "@/assets/portfolio/security3.png"
import room1 from "@/assets/portfolio/room1.png"
import room2 from "@/assets/portfolio/room2.png"
import room3 from "@/assets/portfolio/room3.png"
import network1 from "@/assets/portfolio/network1.png"
import network2 from "@/assets/portfolio/network2.png"
import network3 from "@/assets/portfolio/network3.png"

import Image from "next/image";

const workSections = [
  {
    id: "access-control",
    title: "Access Control Systems",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-blue-600" viewBox="0 0 32 32" fill="none">
        <g clipPath="url(#clip0_1_5490)">
          <path d="M21 22C27.075 22 32 17.075 32 11C32 4.925 27.075 0 21 0C14.925 0 10 4.925 10 11C10 12.1687 10.1813 13.3 10.5188 14.3562L0.4375 24.4375C0.15625 24.7188 0 25.1 0 25.5V30.5C0 31.3312 0.66875 32 1.5 32H6.5C7.33125 32 8 31.3312 8 30.5V28H10.5C11.3313 28 12 27.3312 12 26.5V24H14.5C14.9 24 15.2812 23.8438 15.5625 23.5625L17.6437 21.4813C18.7 21.8188 19.8312 22 21 22ZM23.5 6C24.163 6 24.7989 6.26339 25.2678 6.73223C25.7366 7.20107 26 7.83696 26 8.5C26 9.16304 25.7366 9.79893 25.2678 10.2678C24.7989 10.7366 24.163 11 23.5 11C22.837 11 22.2011 10.7366 21.7322 10.2678C21.2634 9.79893 21 9.16304 21 8.5C21 7.83696 21.2634 7.20107 21.7322 6.73223C22.2011 6.26339 22.837 6 23.5 6Z" fill="currentColor"/>
        </g>
      </svg>
    ),
    images: [Access1, Access2, Access3]
  },
  {
    id: "audio-visual",
    title: "Audio / Visual Systems",
    icon: (
      <svg className="w-8 h-6 sm:w-9 sm:h-7 lg:w-10 lg:h-8 xl:w-11 xl:h-9 2xl:w-12 2xl:h-10 text-blue-600" viewBox="0 0 40 32" fill="none">
        <path d="M40 32H0V0H40V32Z" stroke="#E5E7EB"/>
        <path d="M33.35 2.03061C37.4062 5.33061 40 10.3619 40 15.9994C40 21.6369 37.4062 26.6744 33.35 29.9681C32.7062 30.4931 31.7625 30.3931 31.2375 29.7494C30.7125 29.1056 30.8125 28.1619 31.4562 27.6369C34.8438 24.8869 37 20.6994 37 15.9994C37 11.2994 34.8438 7.11186 31.4562 4.35561C30.8125 3.83061 30.7188 2.88686 31.2375 2.24311C31.7562 1.59936 32.7062 1.50561 33.35 2.02436V2.03061ZM29.5688 6.68686C32.2687 8.88686 34 12.2431 34 15.9994C34 19.7556 32.2687 23.1119 29.5688 25.3119C28.925 25.8369 27.9812 25.7369 27.4562 25.0931C26.9312 24.4494 27.0312 23.5056 27.675 22.9806C29.7062 21.3306 31 18.8181 31 15.9994C31 13.1806 29.7062 10.6681 27.675 9.01186C27.0312 8.48686 26.9375 7.54311 27.4562 6.89936C27.975 6.25561 28.925 6.16186 29.5688 6.68061V6.68686ZM25.7875 11.3431C27.1313 12.4431 28 14.1181 28 15.9994C28 17.8806 27.1313 19.5556 25.7875 20.6556C25.1438 21.1806 24.2 21.0806 23.675 20.4369C23.15 19.7931 23.25 18.8494 23.8937 18.3244C24.5687 17.7744 25 16.9369 25 15.9994C25 15.0619 24.5687 14.2244 23.8937 13.6681C23.25 13.1431 23.1562 12.1994 23.675 11.5556C24.1937 10.9119 25.1438 10.8181 25.7875 11.3369V11.3431ZM18.8188 2.17436C19.5375 2.49936 20 3.21186 20 3.99936V27.9994C20 28.7869 19.5375 29.4994 18.8188 29.8244C18.1 30.1494 17.2563 30.0181 16.6688 29.4931L8.2375 21.9994H4C1.79375 21.9994 0 20.2056 0 17.9994V13.9994C0 11.7931 1.79375 9.99936 4 9.99936H8.2375L16.6688 2.50561C17.2563 1.98061 18.1 1.85561 18.8188 2.17436Z" fill="currentColor"/>
      </svg>
    ),
    images: [Audio1, Audio2, Audio3]
  },
  {
    id: "conference-room",
    title: "Conference Room Solutions",
    icon: (
      <svg className="w-8 h-6 sm:w-9 sm:h-7 lg:w-10 lg:h-8 xl:w-11 xl:h-9 2xl:w-12 2xl:h-10 text-blue-600" viewBox="0 0 40 32" fill="none">
        <g clipPath="url(#clip0_1_5530)">
          <path d="M9 0C10.3261 0 11.5979 0.526784 12.5355 1.46447C13.4732 2.40215 14 3.67392 14 5C14 6.32608 13.4732 7.59785 12.5355 8.53553C11.5979 9.47322 10.3261 10 9 10C7.67392 10 6.40215 9.47322 5.46447 8.53553C4.52678 7.59785 4 6.32608 4 5C4 3.67392 4.52678 2.40215 5.46447 1.46447C6.40215 0.526784 7.67392 0 9 0ZM32 0C33.3261 0 34.5979 0.526784 35.5355 1.46447C36.4732 2.40215 37 3.67392 37 5C37 6.32608 36.4732 7.59785 35.5355 8.53553C34.5979 9.47322 33.3261 10 32 10C30.6739 10 29.4021 9.47322 28.4645 8.53553C27.5268 7.59785 27 6.32608 27 5C27 3.67392 27.5268 2.40215 28.4645 1.46447C29.4021 0.526784 30.6739 0 32 0ZM0 18.6688C0 14.9875 2.9875 12 6.66875 12H9.3375C10.3312 12 11.275 12.2188 12.125 12.6062C12.0437 13.0562 12.0063 13.525 12.0063 14C12.0063 16.3875 13.0562 18.5312 14.7125 20C14.7 20 14.6875 20 14.6687 20H1.33125C0.6 20 0 19.4 0 18.6688ZM25.3312 20C25.3187 20 25.3062 20 25.2875 20C26.95 18.5312 27.9937 16.3875 27.9937 14C27.9937 13.525 27.95 13.0625 27.875 12.6062C28.725 12.2125 29.6688 12 30.6625 12H33.3312C37.0125 12 40 14.9875 40 18.6688C40 19.4062 39.4 20 38.6688 20H25.3312ZM14 14C14 12.4087 14.6321 10.8826 15.7574 9.75736C16.8826 8.63214 18.4087 8 20 8C21.5913 8 23.1174 8.63214 24.2426 9.75736C25.3679 10.8826 26 12.4087 26 14C26 15.5913 25.3679 17.1174 24.2426 18.2426C23.1174 19.3679 21.5913 20 20 20C18.4087 20 16.8826 19.3679 15.7574 18.2426C14.6321 17.1174 14 15.5913 14 14ZM8 30.3312C8 25.7312 11.7312 22 16.3312 22H23.6688C28.2688 22 32 25.7312 32 30.3312C32 31.25 31.2562 32 30.3312 32H9.66875C8.75 32 8 31.2562 8 30.3312Z" fill="currentColor"/>
        </g>
      </svg>
    ),
    images: [room1, room2, room3]
  },
  {
    id: "data-center",
    title: "Data Center Infrastructure",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-blue-600" viewBox="0 0 32 32" fill="none">
        <path d="M32 32H0V0H32V32Z" stroke="#E5E7EB"/>
        <path d="M4 2C1.79375 2 0 3.79375 0 6V10C0 12.2063 1.79375 14 4 14H28C30.2062 14 32 12.2063 32 10V6C32 3.79375 30.2062 2 28 2H4ZM21.5 6.5C21.8978 6.5 22.2794 6.65804 22.5607 6.93934C22.842 7.22064 23 7.60218 23 8C23 8.39782 22.842 8.77936 22.5607 9.06066C22.2794 9.34196 21.8978 9.5 21.5 9.5C21.1022 9.5 20.7206 9.34196 20.4393 9.06066C20.158 8.77936 20 8.39782 20 8C20 7.60218 20.158 7.22064 20.4393 6.93934C20.7206 6.65804 21.1022 6.5 21.5 6.5ZM24.5 8C24.5 7.60218 24.658 7.22064 24.9393 6.93934C25.2206 6.65804 25.6022 6.5 26 6.5C26.3978 6.5 26.7794 6.65804 27.0607 6.93934C27.342 7.22064 27.5 7.60218 27.5 8C27.5 8.39782 27.342 8.77936 27.0607 9.06066C26.7794 9.34196 26.3978 9.5 26 9.5C25.6022 9.5 25.2206 9.34196 24.9393 9.06066C24.658 8.77936 24.5 8.39782 24.5 8ZM4 18C1.79375 18 0 19.7938 0 22V26C0 28.2062 1.79375 30 4 30H28C30.2062 30 32 28.2062 32 26V22C32 19.7938 30.2062 18 28 18H4ZM21.5 22.5C21.8978 22.5 22.2794 22.658 22.5607 22.9393C22.842 23.2206 23 23.6022 23 24C23 24.3978 22.842 24.7794 22.5607 25.0607C22.2794 25.342 21.8978 25.5 21.5 25.5C21.1022 25.5 20.7206 25.342 20.4393 25.0607C20.158 24.7794 20 24.3978 20 24C20 23.6022 20.158 23.2206 20.4393 22.9393C20.7206 22.658 21.1022 22.5 21.5 22.5ZM25 24C25 23.6022 25.158 23.2206 25.4393 22.9393C25.7206 22.658 26.1022 22.5 26.5 22.5C26.8978 22.5 27.2794 22.658 27.5607 22.9393C27.842 23.2206 28 23.6022 28 24C28 24.3978 27.842 24.7794 27.5607 25.0607C27.2794 25.342 26.8978 25.5 26.5 25.5C26.1022 25.5 25.7206 25.342 25.4393 25.0607C25.158 24.7794 25 24.3978 25 24Z" fill="currentColor"/>
      </svg>
    ),
    images: [data1, data2, data3]
  },
  {
    id: "networks-it",
    title: "Networks & IT Infrastructure",
    icon: (
      <svg className="w-8 h-6 sm:w-9 sm:h-7 lg:w-10 lg:h-8 xl:w-11 xl:h-9 2xl:w-12 2xl:h-10 text-blue-600" viewBox="0 0 40 32" fill="none">
        <g clipPath="url(#clip0_1_5570)">
          <path d="M16 4H24V8H16V4ZM15 0C13.3438 0 12 1.34375 12 3V9C12 10.6562 13.3438 12 15 12H18V14H2C0.89375 14 0 14.8938 0 16C0 17.1063 0.89375 18 2 18H8V20H5C3.34375 20 2 21.3438 2 23V29C2 30.6562 3.34375 32 5 32H15C16.6562 32 18 30.6562 18 29V23C18 21.3438 16.6562 20 15 20H12V18H28V20H25C23.3438 20 22 21.3438 22 23V29C22 30.6562 23.3438 32 25 32H35C36.6562 32 38 30.6562 38 29V23C38 21.3438 36.6562 20 35 20H32V18H38C39.1063 18 40 17.1063 40 16C40 14.8938 39.1063 14 38 14H22V12H25C26.6562 12 28 10.6562 28 9V3C28 1.34375 26.6562 0 25 0H15ZM6 28V24H14V28H6ZM26 24H34V28H26V24Z" fill="currentColor"/>
        </g>
      </svg>
    ),
    images: [network1, network2, network3]
  },
  {
    id: "multifamily",
    title: "Multifamily Intercom Systems",
    icon: (
      <svg className="w-5 h-6 sm:w-6 sm:h-7 lg:w-6 lg:h-8 xl:w-7 xl:h-9 2xl:w-8 2xl:h-10 text-blue-600" viewBox="0 0 24 32" fill="none">
        <g clipPath="url(#clip0_1_5590)">
          <path d="M3 0C1.34375 0 0 1.34375 0 3V29C0 30.6562 1.34375 32 3 32H9V27C9 25.3438 10.3438 24 12 24C13.6562 24 15 25.3438 15 27V32H21C22.6562 32 24 30.6562 24 29V3C24 1.34375 22.6562 0 21 0H3ZM4 15C4 14.45 4.45 14 5 14H7C7.55 14 8 14.45 8 15V17C8 17.55 7.55 18 7 18H5C4.45 18 4 17.55 4 17V15ZM11 14H13C13.55 14 14 14.45 14 15V17C14 17.55 13.55 18 13 18H11C10.45 18 10 17.55 10 17V15C10 14.45 10.45 14 11 14ZM16 15C16 14.45 16.45 14 17 14H19C19.55 14 20 14.45 20 15V17C20 17.55 19.55 18 19 18H17C16.45 18 16 17.55 16 17V15ZM5 6H7C7.55 6 8 6.45 8 7V9C8 9.55 7.55 10 7 10H5C4.45 10 4 9.55 4 9V7C4 6.45 4.45 6 5 6ZM10 7C10 6.45 10.45 6 11 6H13C13.55 6 14 6.45 14 7V9C14 9.55 13.55 10 13 10H11C10.45 10 10 9.55 10 9V7ZM17 6H19C19.55 6 20 6.45 20 7V9C20 9.55 19.55 10 19 10H17C16.45 10 16 9.55 16 9V7C16 6.45 16.45 6 17 6Z" fill="currentColor"/>
        </g>
      </svg>
    ),
    images: [intercom1, intercom2, intercom3]
  },
  {
    id: "security-alarm",
    title: "Security Alarm Systems",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-blue-600" viewBox="0 0 32 32" fill="none">
        <path d="M32 32H0V0H32V32Z" stroke="#E5E7EB"/>
        <path d="M16 0C16.2875 0 16.575 0.0625 16.8375 0.18125L28.6063 5.175C29.9813 5.75625 31.0063 7.1125 31 8.75C30.9688 14.95 28.4188 26.2938 17.65 31.45C16.6063 31.95 15.3938 31.95 14.35 31.45C3.58128 26.2938 1.03128 14.95 1.00003 8.75C0.993778 7.1125 2.01878 5.75625 3.39378 5.175L15.1688 0.18125C15.425 0.0625 15.7125 0 16 0ZM16 4.175V27.8C24.625 23.625 26.9438 14.3813 27 8.8375L16 4.175Z" fill="currentColor"/>
      </svg>
    ),
    images: [security1, security2, security3]
  },
  {
    id: "structured-cabling",
    title: "Structured Cabling",
    icon: (
      <svg className="w-7 h-6 sm:w-8 sm:h-7 lg:w-9 lg:h-8 xl:w-10 xl:h-9 2xl:w-11 2xl:h-10 text-blue-600" viewBox="0 0 36 32" fill="none">
        <path d="M36 32H0V0H36V32Z" stroke="#E5E7EB"/>
        <path d="M0 15.75V29.25C0 30.4945 1.00547 31.5 2.25 31.5H6.75V23.625C6.75 23.0063 7.25625 22.5 7.875 22.5C8.49375 22.5 9 23.0063 9 23.625V31.5H13.5V23.625C13.5 23.0063 14.0063 22.5 14.625 22.5C15.2437 22.5 15.75 23.0063 15.75 23.625V31.5H20.25V23.625C20.25 23.0063 20.7563 22.5 21.375 22.5C21.9937 22.5 22.5 23.0063 22.5 23.625V31.5H27V23.625C27 23.0063 27.5063 22.5 28.125 22.5C28.7437 22.5 29.25 23.0063 29.25 23.625V31.5H33.75C34.9945 31.5 36 30.4945 36 29.25V15.75C36 14.5055 34.9945 13.5 33.75 13.5H31.5V11.25C31.5 10.0055 30.4945 9 29.25 9H27V6.75C27 5.50547 25.9945 4.5 24.75 4.5H11.25C10.0055 4.5 9 5.50547 9 6.75V9H6.75C5.50547 9 4.5 10.0055 4.5 11.25V13.5H2.25C1.00547 13.5 0 14.5055 0 15.75Z" fill="currentColor"/>
      </svg>
    ),
    images: [cabling1, cabling2, cabling3]
  },
  {
    id: "surveillance",
    title: "Surveillance Camera Systems",
    icon: (
      <svg className="w-7 h-6 sm:w-8 sm:h-7 lg:w-9 lg:h-8 xl:w-10 xl:h-9 2xl:w-11 2xl:h-10 text-blue-600" viewBox="0 0 36 32" fill="none">
        <path d="M36 32H0V0H36V32Z" stroke="#E5E7EB"/>
        <path d="M0 8C0 5.79375 1.79375 4 4 4H20C22.2062 4 24 5.79375 24 8V24C24 26.2062 22.2062 28 20 28H4C1.79375 28 0 26.2062 0 24V8ZM34.9437 6.2375C35.5938 6.5875 36 7.2625 36 8V24C36 24.7375 35.5938 25.4125 34.9437 25.7625C34.2937 26.1125 33.5063 26.075 32.8875 25.6625L26.8875 21.6625L26 21.0688V20V12V10.9312L26.8875 10.3375L32.8875 6.3375C33.5 5.93125 34.2875 5.8875 34.9437 6.2375Z" fill="currentColor"/>
      </svg>
    ),
    images: [camera1, camera2, camera3]
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      {/* Hero Section */}
      <section className="relative">
        {/* Hero Section with Background */}
        <div
          className="min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] 2xl:min-h-[900px] 3xl:min-h-[1000px] bg-gray-900 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/2550e5a318e81a82bc5289863c36cf57d528ab64?width=2896')`,
          }}
        >
          {/* Centered Text Section */}
          <div className="text-center max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-12 sm:pt-16 lg:pt-20 xl:pt-24 2xl:pt-32 3xl:pt-40 pb-24 sm:pb-32 lg:pb-40 xl:pb-48 2xl:pb-56 3xl:pb-64">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-medium mb-3 sm:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10">
              Our Work
            </h1>
            <p className="text-[#B4B4B4] text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto px-2 sm:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Carousel anchored to the bottom of the background (full-width, over the same background) */}
          <div className="absolute w-full bottom-4 sm:bottom-6 lg:bottom-8 xl:bottom-10 2xl:bottom-12 3xl:bottom-16 left-0 right-0 px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 pb-4 sm:pb-6 lg:pb-8 xl:pb-10 2xl:pb-12">
            <ServicePillCarousel />
          </div>
        </div>
      </section>

      {/* Work Sections */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 3xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 3xl:px-32">
        <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] 3xl:max-w-[120rem] mx-auto space-y-12 sm:space-y-16 lg:space-y-20 xl:space-y-24 2xl:space-y-28 3xl:space-y-32">
          {workSections.map((section, index) => (
            <div key={section.id} className="space-y-8 sm:space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16 3xl:space-y-20">
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 lg:gap-8">
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 3xl:gap-8">
                  {section.icon}
                  <h2 className="text-[#2E2E2E] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-normal">
                    {section.title}
                  </h2>
                </div>
                <Button
                  variant="outline"
                  className="border-[#2E2E2E] text-[#2E2E2E] hover:bg-[#2E2E2E] hover:text-white text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 3xl:px-16 py-2 sm:py-3 lg:py-4 xl:py-5 2xl:py-6 3xl:py-8 whitespace-nowrap"
                >
                  Know More
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10 ml-2 sm:ml-3 lg:ml-4" />
                </Button>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 3xl:gap-16">
                {section.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative group">
                    <Image
                      width={390}
                      height={256}
                      src={image}
                      alt={`${section.title} ${imgIndex + 1}`}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 3xl:h-[28rem] object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}