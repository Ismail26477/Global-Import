"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg shadow-primary/10 border-b border-primary/10"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo + Name */}
          <div className={`flex items-center gap-2 ${isVisible ? "animate-fadeInLeft" : "opacity-0"}`}>
            <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">

              {/* Smaller logo for mobile */}
              <Image
                src="/logo.png"
                alt="Global Imports Logo"
                width={34}
                height={34}
                className="w-20 h-12 sm:w-22 sm:h-16"
              />

              {/* Show brand name on mobile also */}
              <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Global Imports
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-foreground/70 hover:text-primary transition-colors text-sm font-medium ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <Button
            className={`hidden md:inline-flex bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all rounded-lg px-6 hover:scale-105 active:scale-95 ${
              isVisible ? "animate-fadeInRight" : "opacity-0"
            }`}
          >
            Get Started
          </Button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={26} className="text-foreground" /> : <Menu size={26} className="text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-primary/20 animate-slideInUp">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
