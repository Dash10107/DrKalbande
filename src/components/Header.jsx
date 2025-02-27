"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Publications", href: "#publications" },
    { name: "Research", href: "#research" },
    { name: "Students", href: "#students" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div>
            <h1 className="text-xl font-bold md:text-2xl">Dr. Dhananjay Kalbande</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-gray-300">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Mobile Navigation */}
          <div
            className={`fixed inset-y-0 right-0 z-50 w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
          >
            <div className="flex h-16 items-center justify-between px-4 border-b border-gray-700">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col p-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-sm font-medium transition-colors hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            } md:hidden`}
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </header>
  )
}

export default Header

