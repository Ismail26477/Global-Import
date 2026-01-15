"use client"
import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after a short delay
    setIsVisible(true)
  }, [])

  const whatsappNumber = "919876543210" // Replace with your WhatsApp business number
  const whatsappMessage = "Hi! I'm interested in learning more about your logistics solutions."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-40 transition-all duration-500 hover:scale-110 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative group">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 rounded-full blur-lg group-hover:blur-xl transition-all opacity-75 group-hover:opacity-100 animate-pulse"></div>

        {/* Button circle */}
        <div className="relative w-16 h-16 bg-gradient-to-r from-primary to-primary/85 rounded-full shadow-2xl flex items-center justify-center cursor-pointer group-hover:shadow-[0_0_30px_rgba(170,221,236,0.5)]">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Chat with us on WhatsApp
          <div className="absolute top-full right-3 w-2 h-2 bg-gray-900 transform rotate-45"></div>
        </div>
      </div>
    </a>
  )
}
