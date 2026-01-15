"use client"
import { useEffect, useState } from "react"
import { Globe, Clipboard, CheckCircle, Truck, Lock, Home } from "lucide-react"

const steps = [
  {
    icon: Globe,
    title: "Global Sourcing & Import Solutions",
    description: "Find the right manufacturers and suppliers worldwide",
    number: "01",
  },
  {
    icon: Clipboard,
    title: "End-to-End Procurement/Company",
    description: "Complete sourcing support from negotiation to delivery",
    number: "02",
  },
  {
    icon: CheckCircle,
    title: "Quality Inspection",
    description: "Pre-production, during, and pre-shipment quality checks",
    number: "03",
  },
  {
    icon: Truck,
    title: "International Shipping",
    description: "Sea freight, air freight, and express courier services",
    number: "04",
  },
  {
    icon: Lock,
    title: "Custom Clearance",
    description: "Expert customs handling and regulatory compliance",
    number: "05",
  },
  {
    icon: Home,
    title: "Last Mile Delivery in India",
    description: "Direct delivery to your doorstep across India",
    number: "06",
  },
]

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    const element = document.getElementById("process-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process-section" className="relative py-24 px-4 md:px-8 overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">How We Work</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Complete end-to-end service flow for your import and sourcing needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 -right-2"></div>
                )}

                <div className="relative bg-white border border-border/60 rounded-2xl p-6 hover:shadow-lg hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                    {step.number}
                  </div>

                  <div className="mt-4 mb-4 flex justify-center">
                    <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-base font-bold mb-3 text-center text-foreground leading-snug">{step.title}</h3>
                  <p className="text-center text-foreground/70 text-sm flex-1 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
