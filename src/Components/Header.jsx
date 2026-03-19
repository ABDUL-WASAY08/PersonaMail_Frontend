import React from "react";
import { Mail, Menu, X } from 'lucide-react';

function Header({ scrolled, isMenuOpen, setIsMenuOpen, scrollToSection, featuresRef, pricingRef, aboutRef }) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Mail className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-semibold text-gray-900">
              Persona<span className="text-blue-600">Mail</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection(featuresRef)}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection(pricingRef)}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              About
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition shadow-lg shadow-blue-500/25">
              Get Started
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => {
                scrollToSection(featuresRef);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
            >
              Features
            </button>
            <button
              onClick={() => {
                scrollToSection(pricingRef);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                scrollToSection(aboutRef);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
            >
              About
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Header;