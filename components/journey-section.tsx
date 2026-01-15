"use client"
import { useEffect, useState } from "react"
import { Briefcase, TrendingUp, Globe } from "lucide-react"

const journeyMilestones = [
  {
    period: "2008-2018",
    title: "Foundation & Specialization",
    description:
      "Started in import business focusing on woodworking machinery and plywood raw materials. Built strong expertise in supplier management and Indian customs procedures.",
    icon: Briefcase,
    color: "from-blue-600 to-blue-400",
  },
  {
    period: "2018-2024",
    title: "Evolution to E-Commerce",
    description:
      "Adapted to rapid e-commerce growth, expanding to multi-category sourcing with flexible order quantities and strict quality control.",
    icon: TrendingUp,
    color: "from-cyan-500 to-blue-400",
  },
  {
    period: "2024+",
    title: "Global Trade Partnership",
    description:
      "Established Global Imports Nagpur as a dedicated company bridging manufacturers with modern online sellers globally.",
    icon: Globe,
    color: "from-teal-500 to-cyan-400",
  },
]

export default function JourneySection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    const element = document.getElementById("journey-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="journey-section" className="relative py-24 px-4 md:px-8 overflow-hidden bg-secondary">
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Journey</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From specialized expertise to global trade partnership
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {journeyMilestones.map((milestone, index) => {
            const Icon = milestone.icon
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
              >
                {/* Timeline connector line */}
                {index < journeyMilestones.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}

                <div className="relative bg-white border border-border/60 rounded-2xl p-8 hover:shadow-lg hover:border-accent/40 transition-all duration-300 hover:-translate-y-2">
                  <div className={`mb-6 inline-block p-3 bg-gradient-to-br ${milestone.color} rounded-lg shadow-md`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <p className="text-2xl font-bold text-primary mb-2">{milestone.period}</p>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{milestone.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
