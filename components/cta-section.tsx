"use client"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    const element = document.getElementById("cta-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const whatsappNumber = "919876543210" // Replace with your WhatsApp business number
  const whatsappMessage = "Hi! I'm interested in your logistics solutions and would like to know more."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="cta-section" className="relative py-16 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-accent opacity-95"></div>

      {/* Animated circles */}
      <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div
        className={`relative max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
          Ready to Transform Your Supply Chain?
        </h2>
        <p className="text-lg text-white/95 mb-6 max-w-2xl mx-auto leading-relaxed">
          Join Global Imports today and experience seamless, reliable logistics for your business. Start sourcing with
          confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="group text-base font-semibold bg-white hover:bg-white/95 text-primary w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              Chat on WhatsApp
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className="text-base font-semibold border-white text-white hover:bg-white/20 bg-transparent hover:border-white/80 transition-all"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
