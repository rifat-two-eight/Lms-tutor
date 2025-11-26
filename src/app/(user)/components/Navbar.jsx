"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#FBFCFC] border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B31BD] tracking-tight hover:opacity-90 transition"
              onClick={closeMenu}
            >
              Schäfer Tutoring
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-14">
            <Link 
              href="/free-trial-teacher" 
              className="text-[#0B31BD] text-lg lg:text-xl font-medium hover:text-[#092A9E] transition-colors"
            >
              Lehrer werden
            </Link>
            <Button
              className="bg-[#0B31BD] hover:bg-[#092A9E] text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Anmelden
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-[#0B31BD] hover:bg-blue-50 transition-colors"
              aria-label="Menu öffnen"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu – Smooth Slide Down */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 space-y-4 border-t border-gray-200">
            <Link
              href="/free-trial-teacher"
              onClick={closeMenu}
              className="block px-4 py-3 text-lg font-medium text-gray-800 hover:text-[#0B31BD] hover:bg-blue-50 rounded-lg transition mx-2"
            >
              Lehrer werden
            </Link>

            <div className="px-4 pt-2">
              <Button
                onClick={closeMenu}
                className="w-full bg-[#0B31BD] hover:bg-[#092A9E] text-white font-semibold text-lg py-6 rounded-xl shadow-lg"
              >
                Anmelden
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;