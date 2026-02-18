"use client";

import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MG</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
              MarkGermany
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            {/* <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Products
            </a> */}
            {/* <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Categories
            </a> */}
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
                Products
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
                Categories
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
                About
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 