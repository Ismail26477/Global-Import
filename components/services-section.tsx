"use client"

import { Card } from "@/components/ui/card"
import { Globe, FileCheck, Package, CheckSquare, Home, ShoppingCart } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entries[0].target.querySelectorAll("[data-service-card]").forEach((el, idx) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, idx])
              }, idx * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Globe,
      title: "Global Product Sourcing",
      description: "Identify the right manufacturers and suppliers for your needs",
      gradient: "from-cyan-500 to-blue-500",
      lightGradient: "from-cyan-100/80 to-blue-100/80",
      borderColor: "border-cyan-400/60",
      details: [
        "Supplier verification & factory checks",
        "Price negotiation & MOQ optimization",
        "White labeling & private labeling",
        "Custom product development",
        "Multi-category sourcing",
      ],
    },
    {
      icon: FileCheck,
      title: "Quality Inspection & Compliance",
      description: "Professional inspections to ensure quality and reduce risk",
      gradient: "from-blue-500 to-purple-500",
      lightGradient: "from-blue-100/80 to-purple-100/80",
      borderColor: "border-blue-400/60",
      details: [
        "Pre-production inspection",
        "During production inspection",
        "Pre-shipment inspection",
        "Packaging & labeling verification",
        "Compliance checks",
      ],
    },
    {
      icon: Package,
      title: "International Shipping & Logistics",
      description: "Cost-effective and reliable shipping solutions",
      gradient: "from-purple-500 to-pink-500",
      lightGradient: "from-purple-100/80 to-pink-100/80",
      borderColor: "border-purple-400/60",
      details: [
        "Sea freight (FCL / LCL)",
        "Air freight",
        "Express courier solutions",
        "Cargo consolidation",
        "Real-time tracking",
      ],
    },
    {
      icon: CheckSquare,
      title: "Customs Clearance",
      description: "Expert handling at origin and India—smooth, compliant movement",
      gradient: "from-pink-500 to-orange-500",
      lightGradient: "from-pink-100/80 to-orange-100/80",
      borderColor: "border-pink-400/60",
      details: [
        "Export documentation & HS code classification",
        "Import duty calculation",
        "DGFT, BIS, FSSAI, WPC assistance",
        "Duty optimization",
        "Full legal compliance",
      ],
    },
    {
      icon: Home,
      title: "Doorstep Delivery in India",
      description: "From port to warehouse—last-mile delivery across India",
      gradient: "from-orange-500 to-red-500",
      lightGradient: "from-orange-100/80 to-red-100/80",
      borderColor: "border-orange-400/60",
      details: [
        "Port handling & inland transportation",
        "Warehouse delivery",
        "PAN-India logistics support",
        "Direct factory delivery",
        "Ready for sale or distribution",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Amazon Solutions",
      description: "Specialized support for global marketplace sellers",
      gradient: "from-red-500 to-pink-500",
      lightGradient: "from-red-100/80 to-pink-100/80",
      borderColor: "border-red-400/60",
      details: [
        "Product research & sourcing",
        "Private label & brand development",
        "Amazon-compliant packaging",
        "Direct FBA warehouse shipping",
        "Costing & margin analysis",
      ],
    },
  ]

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-cyan-50/30 to-blue-50/40 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 animate-fadeInUp">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-700 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-6 animate-fadeInUp animate-delay-100">
            Our End-to-End Services
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto animate-fadeInUp animate-delay-200">
            Complete solutions from sourcing to delivery—designed for importers, e-commerce sellers, brands, and
            enterprises
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                data-service-card
                className={`p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer rounded-2xl border-2 ${service.borderColor} bg-gradient-to-br ${service.lightGradient} hover:scale-105 hover:-translate-y-3 backdrop-blur-sm ${
                  visibleCards.includes(index) ? "animate-slideInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`mb-6 inline-block p-4 bg-gradient-to-br ${service.gradient} rounded-xl group-hover:scale-125 transition-transform shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-foreground/70 flex items-start gap-3">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl p-12 border-2 border-cyan-400/50 animate-fadeInUp animate-delay-300 hover:border-cyan-400/80 transition-colors backdrop-blur-xl shadow-xl">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent mb-4">
            Our Vision & Mission
          </h3>
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            To become a trusted global trade partner for businesses worldwide by delivering{" "}
            <span className="font-semibold text-foreground">
              reliable sourcing, seamless logistics, and scalable e-commerce solutions
            </span>
            .
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our goal is to{" "}
            <span className="font-semibold text-foreground">reduce risk, save time, and improve profitability</span> for
            our clients—enabling businesses to scale without borders.
          </p>
        </div>
      </div>
    </section>
  )
}
