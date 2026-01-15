"use client"
import { useEffect, useState } from "react"

const clients = [
  { name: "TechVision Solutions", logo: "TV" },
  { name: "Creative Minds Agency", logo: "CM" },
  { name: "Growth Ventures Ltd", logo: "GV" },
  { name: "Electronics Retail Co", logo: "ER" },
  { name: "Fashion Forward Inc", logo: "FF" },
  { name: "Beauty & Care Pro", logo: "BC" },
  { name: "Sports Equipment Ltd", logo: "SE" },
  { name: "Home Essentials Hub", logo: "HE" },
]

export default function FeaturedClientsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    const element = document.getElementById("clients-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="clients-section"
      className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-background to-secondary/10"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their supply chain with Global Imports
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group relative bg-white border-2 border-border rounded-xl p-8 text-center transition-all duration-500 hover:shadow-xl hover:border-primary hover:scale-105 cursor-pointer ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{
                animationDelay: isVisible ? `${index * 50}ms` : "0ms",
                animation: isVisible ? `fadeInUp 0.6s ease-out forwards` : "none",
              }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg transition-all">
                {client.logo}
              </div>
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
