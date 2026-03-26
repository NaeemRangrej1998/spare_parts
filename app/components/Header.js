"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black sticky top-0 z-50 border-b border-red-600/30">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-lg bg-white/10 border border-white/20 overflow-hidden">
              <Image
                src="/assets/images/mark-logo.png"
                alt="MarkGermany logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wider text-white uppercase">
                MarkGermany
              </p>
              <p className="text-xs text-muted">Precision Engineered for the Future</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {[
              { label: "Products", target: "products-section" },
              { label: "About Us", target: "footer-section" },
              { label: "Contact", target: "footer-section" },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  const element = document.getElementById(item.target);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white hover:text-red-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-3 pt-4">
              {[
                { label: "Products", target: "products-section" },
                { label: "About Us", target: "footer-section" },
                { label: "Contact", target: "footer-section" },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    const element = document.getElementById(item.target);
                    element?.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-red-400 transition-colors py-2 text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
