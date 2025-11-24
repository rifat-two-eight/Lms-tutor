"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-[#FBFCFC] ">
      <div className="max-w-[calc(1280px+37px)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-4xl font-bold text-[#0B31BD]">
              Schäfer Tutoring
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-14">
            <Link href="/" className="text-[#0B31BD] text-xl transition-colors">
              Lehrer werden
            </Link>
            <Button
              className="bg-[#0B31BD] px-8 py-6 text-xl rounded-xl hover:bg-[#092A9E] text-white"
              onClick={() => {
                /* Handle signup */
              }}
            >
              Anmelden
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="space-y-2 pt-4">
              <Link
                href="/lehrer-werden"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Lehrer werden
              </Link>
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => {
                  setIsOpen(false)
                  /* Handle signup */
                }}
              >
                Anmelden
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
