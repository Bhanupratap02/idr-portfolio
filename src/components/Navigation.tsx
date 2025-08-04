"use client"
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-navy-dark px-6 py-6 lg:px-8">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-48 md:w-52 h-6 md:h-7 bg-cream rounded flex items-center justify-center">
            <span className="text-navy-dark text-xs md:text-sm font-inter font-semibold">IDR TECHNOLOGY</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-cream font-inter text-base hover:text-white transition-colors">
            About Us
          </a>
          
          <div className="flex items-center space-x-3 cursor-pointer hover:text-white transition-colors">
            <span className="text-cream font-inter text-base">Services</span>
            <ChevronDown className="w-4 h-4 text-cream" />
          </div>
          
          <div className="flex items-center space-x-3 cursor-pointer hover:text-white transition-colors">
            <span className="text-cream font-inter text-base">Case Studies</span>
            <ChevronDown className="w-4 h-4 text-cream" />
          </div>
          
          <div className="flex items-center space-x-3 cursor-pointer hover:text-white transition-colors">
            <span className="text-cream font-inter text-base">Partners</span>
            <ChevronDown className="w-4 h-4 text-cream" />
          </div>
          
          <a href="#" className="text-cream font-inter text-base hover:text-white transition-colors">
            Portfolio
          </a>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="border border-white text-white font-inter text-sm uppercase px-6 py-3 rounded hover:bg-white hover:text-navy-dark transition-colors">
            Login
          </button>
          <button className="bg-cream text-navy-dark font-inter text-sm font-bold uppercase px-6 py-3 rounded hover:bg-white transition-colors">
            Contact US
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-cream"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-6 pb-6 border-t border-gray-600 pt-6">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-cream font-inter text-base hover:text-white transition-colors">
              About Us
            </a>
            
            <div className="flex items-center justify-between cursor-pointer hover:text-white transition-colors">
              <span className="text-cream font-inter text-base">Services</span>
              <ChevronDown className="w-4 h-4 text-cream" />
            </div>
            
            <div className="flex items-center justify-between cursor-pointer hover:text-white transition-colors">
              <span className="text-cream font-inter text-base">Case Studies</span>
              <ChevronDown className="w-4 h-4 text-cream" />
            </div>
            
            <div className="flex items-center justify-between cursor-pointer hover:text-white transition-colors">
              <span className="text-cream font-inter text-base">Partners</span>
              <ChevronDown className="w-4 h-4 text-cream" />
            </div>
            
            <a href="#" className="text-cream font-inter text-base hover:text-white transition-colors">
              Portfolio
            </a>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-3 pt-4">
              <button className="border border-white text-white font-inter text-sm uppercase px-6 py-3 rounded hover:bg-white hover:text-navy-dark transition-colors">
                Login
              </button>
              <button className="bg-cream text-navy-dark font-inter text-sm font-bold uppercase px-6 py-3 rounded hover:bg-white transition-colors">
                Contact US
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
