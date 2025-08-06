'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="text-custom-gray text-lg font-medium">
            Ada Rodriguez
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="mailto:ada698@comcast.net" 
              className="text-custom-gray text-lg hover:text-custom-blue transition-colors flex items-center gap-2"
            >
              Email
              <Image
                src="/arrow-up-right.svg"
                alt=""
                width={16}
                height={16}
                className="text-current"
              />
            </a>
            <a 
              href="tel:860-559-0461" 
              className="text-custom-gray text-lg hover:text-custom-blue transition-colors flex items-center gap-2"
            >
              Phone
              <Image
                src="/arrow-up-right.svg"
                alt=""
                width={16}
                height={16}
                className="text-current"
              />
            </a>
            <button className="text-custom-gray text-lg hover:text-custom-blue transition-colors flex items-center gap-2">
              Español
              <Image
                src="/arrow-up-right.svg"
                alt=""
                width={16}
                height={16}
                className="text-current"
              />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-custom-gray hover:text-custom-blue focus:outline-none focus:text-black"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
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
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a 
                href="mailto:ada698@comcast.net" 
                className="flex items-center justify-between text-custom-gray text-lg hover:text-custom-blue transition-colors py-2"
              >
                Email
                <Image
                  src="/arrow-up-right.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="text-current"
                />
              </a>
              <a 
                href="tel:860-559-0461" 
                className="flex items-center justify-between text-custom-gray text-lg hover:text-custom-blue transition-colors py-2"
              >
                Phone
                <Image
                  src="/arrow-up-right.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="text-current"
                />
              </a>
              <button className="flex w-full items-center justify-between text-custom-gray text-lg hover:text-custom-blue transition-colors py-2">
                Español
                <Image
                  src="/arrow-up-right.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="text-current"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}