"use client"
import { useEffect, useState } from "react"
import { CheckCircle2, Users, Shield, TrendingUp, FileText, Truck } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "One-Stop Solution",
    description: "From sourcing to delivery, everything in one place",
  },
  {
    icon: Users,
    title: "Trusted Supplier Network",
    description: "Verified manufacturers and partners across Asia",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Strong quality control and inspection systems",
  },
  {
    icon: TrendingUp,
    title: "Transparent Pricing",
    description: "Clear communication and no hidden costs",
  },
  {
    icon: FileText,
    title: "Customs Expertise",
    description: "Deep knowledge of Indian & international regulations",
  },
  {
    icon: Truck,
    title: "Amazon Specialization",
    description: "Dedicated support for global e-commerce sellers",
  },
]

export default function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    const element = document.getElementById("why-choose-us-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-choose-us-section" className="relative py-24 px-4 md:px-8 overflow-hidden bg-background">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Choose Us</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Reduce risk, save time, and improve profitability with our comprehensive solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="relative bg-white border border-border/60 rounded-2xl p-8 hover:shadow-lg hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/15 transition-colors">
                    <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70 flex-1 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
