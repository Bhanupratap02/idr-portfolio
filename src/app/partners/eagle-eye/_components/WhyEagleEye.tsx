/** @format */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./Card";
import { SVGProps } from "react";

type CardItem = {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
};

const cards: CardItem[] = [
  {
    title: "100% Cloud Managed VMS",
    description:
      "View and manage footage from anywhere — no onsite servers or complicated software needed.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    icon: (props) => (
      <svg {...props} fill="currentColor" viewBox="0 0 30 24">
        <path d="M0 15.75C0 19.4766 3.02344 22.5 6.75 22.5H24C27.3141 22.5 30 19.8141 30 16.5C30 13.5984 27.9375 11.175 25.2 10.6219C25.3922 10.1203 25.5 9.57187 25.5 9C25.5 6.51562 23.4844 4.5 21 4.5C20.0766 4.5 19.2141 4.78125 18.5016 5.25937C17.2031 3.00937 14.7797 1.5 12 1.5C7.85625 1.5 4.5 4.85625 4.5 9C4.5 9.12656 4.50469 9.25313 4.50937 9.37969C1.88437 10.3031 0 12.8062 0 15.75Z" />
      </svg>
    ),
  },
  {
    title: "Camera Agnostic",
    description:
      "Use virtually any camera — Eagle Eye supports IP, TVI, and ONVIF-compliant systems, old or new.",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    icon: (props) => (
      <svg {...props} fill="currentColor" viewBox="0 0 28 24">
        <path d="M0.5 6C0.5 4.34531 1.84531 3 3.5 3H15.5C17.1547 3 18.5 4.34531 18.5 6V18C18.5 19.6547 17.1547 21 15.5 21H3.5C1.84531 21 0.5 19.6547 0.5 18V6ZM26.7078 4.67813C27.1953 4.94063 27.5 5.44688 27.5 6V18C27.5 18.5531 27.1953 19.0594 26.7078 19.3219C26.2203 19.5844 25.6297 19.5562 25.1656 19.2469L20.6656 16.2469L20 15.8016V15V9V8.19844L20.6656 7.75312L25.1656 4.75313C25.625 4.44844 26.2156 4.41563 26.7078 4.67813Z" />
      </svg>
    ),
  },
  {
    title: "AI and Analytics on the Edge",
    description:
      "Real-time alerts for loitering, line-crossing, vehicles, license plates, and more — even on legacy cameras.",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    icon: (props) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.625 0C10.0734 0 11.25 1.17656 11.25 2.625V21.375C11.25 22.8234 10.0734 24 8.625 24C7.27031 24 6.15469 22.9734 6.01406 21.6516C5.77031 21.7172 5.5125 21.75 5.25 21.75C3.59531 21.75 2.25 20.4047 2.25 18.75C2.25 18.4031 2.31094 18.0656 2.41875 17.7562C1.00312 17.2219 0 15.8531 0 14.25C0 12.7547 0.876562 11.4609 2.14687 10.8609C1.73906 10.35 1.5 9.70312 1.5 9C1.5 7.56094 2.5125 6.36094 3.8625 6.06562C3.7875 5.80781 3.75 5.53125 3.75 5.25C3.75 3.84844 4.71563 2.66719 6.01406 2.33906C6.15469 1.02656 7.27031 0 8.625 0ZM15.375 0C16.7297 0 17.8406 1.02656 17.9859 2.33906C19.2891 2.66719 20.25 3.84375 20.25 5.25C20.25 5.53125 20.2125 5.80781 20.1375 6.06562C21.4875 6.35625 22.5 7.56094 22.5 9C22.5 9.70312 22.2609 10.35 21.8531 10.8609C23.1234 11.4609 24 12.7547 24 14.25C24 15.8531 22.9969 17.2219 21.5812 17.7562C21.6891 18.0656 21.75 18.4031 21.75 18.75C21.75 20.4047 20.4047 21.75 18.75 21.75C18.4875 21.75 18.2297 21.7172 17.9859 21.6516C17.8453 22.9734 16.7297 24 15.375 24C13.9266 24 12.75 22.8234 12.75 21.375V2.625C12.75 1.17656 13.9266 0 15.375 0Z" />
      </svg>
    ),
  },
  {
    title: "Enterprise-Ready",
    description:
      "Built for scale: manage hundreds of cameras across multiple locations with one clean dashboard.",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    icon: (props) => (
      <svg {...props} fill="currentColor" viewBox="0 0 18 24">
        <path d="M2.25 0C1.00781 0 0 1.00781 0 2.25V21.75C0 22.9922 1.00781 24 2.25 24H6.75V20.25C6.75 19.0078 7.75781 18 9 18C10.2422 18 11.25 19.0078 11.25 20.25V24H15.75C16.9922 24 18 22.9922 18 21.75V2.25C18 1.00781 16.9922 0 15.75 0H2.25Z" />
      </svg>
    ),
  },
  {
    title: "Top-Tier Cybersecurity",
    description:
      "Encrypted video streams, user-based permissions, and full audit logs ensure compliance and peace of mind.",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    icon: (props) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C12.2156 0 12.4313 0.046875 12.6281 0.135938L21.4547 3.88125C22.486 4.31719 23.2547 5.33438 23.25 6.5625C23.2266 11.2125 21.3141 19.7203 13.2375 23.5875C12.4547 23.9625 11.5453 23.9625 10.7625 23.5875C2.68596 19.7203 0.773459 11.2125 0.750021 6.5625C0.745334 5.33438 1.51408 4.31719 2.54533 3.88125L11.3766 0.135938C11.5688 0.046875 11.7844 0 12 0Z" />
      </svg>
    ),
  },
];

const WhyEagleEye = () => {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-28">
      <div className="mx-auto max-w-[1920px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-eagle-gray-800 text-center mb-8 sm:mb-10 md:mb-16 xl:mb-18">
          Why Eagle Eye Networks?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl border-0 rounded-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 2xl:w-22 2xl:h-22 rounded-full flex items-center justify-center mb-4 ${card.bgColor}`}
                  >
                    <Icon
                      className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 2xl:w-9.5 2xl:h-9.5 ${card.textColor}`}
                    />
                  </div>
                  <CardTitle className="text-base sm:text-lg md:text-xl xl:text-2xl text-gray-900 font-medium text-left">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 pb-6 sm:pb-7 md:pb-8 lg:pb-10">
                  <CardDescription className="text-sm sm:text-base xl:text-lg text-gray-600 leading-relaxed font-light">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyEagleEye;
