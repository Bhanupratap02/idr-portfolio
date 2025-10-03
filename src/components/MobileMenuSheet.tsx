/** @format */

"use client";
import { MenuItem } from "@/types/navbar";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
interface MobileMenuSheetProps {
  items: MenuItem[];
  title: string;
  rootUrl: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAllMenusClose: () => void; // Issue 2 Fix: Close all menus
}
const MobileMenuSheet = ({
  items,
  title,
  rootUrl,
  isOpen,
  onOpenChange,
  onAllMenusClose,
}: MobileMenuSheetProps) => {
  const handleLinkClick = () => {
    // Issue 3 Fix: Delay closing to allow navigation
    setTimeout(() => {
      onOpenChange(false);
      onAllMenusClose(); // Issue 2 Fix: Close mobile dropdown too
    }, 150);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side="top"
        showCloseButton={false}
        className="w-full h-full sm:w-80  z-[70]  pt-2"
      >
        <SheetHeader>
          <SheetTitle className="text-center  text-[#052557] text-lg">
            <Link
              href={rootUrl}
              onClick={handleLinkClick}
              className="hover:text-[#052557]/80 transition-colors"
            >
              {title}
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-1 gap-3 overflow-y-auto">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              onClick={handleLinkClick}
              className="py-5 px-5 mx-5 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 flex items-center  space-x-3 text-sm text-gray-700 
            "
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
        <SheetFooter>
          <div className="absolute top-4 right-4">
            <SheetClose className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <X className="w-6 h-6 text-gray-800" />
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuSheet;
