'use client';
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/school", label: "School" },
    { href: "/College", label: "College" },
    { href: "/corporate", label: "Corporate" }
  ]

  return (
    <nav className="relative h-[8vh] bg-black border-b border-gray-700 w-full flex justify-between items-center px-6 lg:px-12 text-white shadow-lg">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-lg">👁️</span>
        </div>
        <span className="text-xl font-bold text-white">
          VerticalEye
        </span>
      </div>

      <div className="hidden lg:flex items-center space-x-1">
        {navLinks.map((link) => (
          <Link 
            key={link.href}
            href={link.href}
            className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
              activeLink === link.href 
                ? "text-white bg-gray-800 border border-gray-600" 
                : "text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
            onClick={() => setActiveLink(link.href)}
          >
            {link.label}
            {activeLink === link.href && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
            )}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex items-center space-x-4">
        <button className="px-6 py-2 bg-white hover:bg-gray-200 text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
          Get Started
        </button>
      </div>

      <button 
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-gray-700 shadow-2xl z-50">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link, index) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 transform ${
                  activeLink === link.href 
                    ? "text-white bg-gray-800 border border-gray-600 scale-105" 
                    : "text-gray-300 hover:text-white hover:bg-gray-800 hover:scale-105"
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isMobileMenuOpen ? 'slideInDown 0.3s ease-out forwards' : ''
                }}
                onClick={() => {
                  setActiveLink(link.href)
                  setIsMobileMenuOpen(false)
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-700">
              <button className="w-full px-6 py-3 bg-white hover:bg-gray-200 text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar