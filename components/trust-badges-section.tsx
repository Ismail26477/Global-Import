"use client"
import { useEffect, useState } from "react"
import { Shield, Award, Globe, Zap } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "ISO 9001 certified with secure payment gateways",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Third-party inspections on all shipments",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Operating in 50+ countries worldwide",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Average 15-20 days from order to delivery",
  },
]

export default function TrustBadgesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    const element = document.getElementById("trust-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="trust-section"
      className="relative py-16 px-4 md:px-8 bg-gradient-to-r from-primary/10 via-background to-accent/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={index}
                className={`group bg-white rounded-xl p-6 text-center border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                style={{
                  transitionDelay: isVisible ? `${index * 75}ms` : "0ms",
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-2 text-foreground">{badge.title}</h4>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
