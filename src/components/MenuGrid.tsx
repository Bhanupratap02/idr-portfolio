/** @format */
"use client";
import { MenuItem } from "@/types/navbar";
import Link from "next/link";
import Image from "next/image";
interface MenuGridProps {
  items: MenuItem[];
  title: string;
  rootUrl: string;
  onLinkClick: () => void;
  isVisible: boolean;
}
const MenuGrid = ({ items, title, rootUrl, onLinkClick, isVisible }:MenuGridProps) => {
   if (!isVisible) return null;
     const handleLinkClick = () => {
       // Issue 3 Fix: Delay closing to allow navigation to start
       setTimeout(() => {
         onLinkClick();
       }, 150);
     };
  return (
    <div className="absolute top-full left-0 right-0 z-[70]  bg-white mt-0.5 hidden lg:block">
      <div className="max-w-7xl mx-auto h-full  px-4 md:px-6 lg:px-8 py-10 2xl:py-20 flex">
        {/* Title */}

        <Link
          href={rootUrl}
          onClick={onLinkClick}
          className=" flex-1   text-left  text-[#052557] text-lg mb-4 font-medium hover:text-[#052557]/80 transition-colors"
        >
          {title}
        </Link>

        {/* Items Grid */}
        <div className="flex-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 border-l p-2 pl-6">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              onClick={handleLinkClick}
              className="flex items-center space-x-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-4 px-4 rounded transition-colors"
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              )}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
 


export default MenuGrid;
