"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Users, Zap, Globe } from "lucide-react"

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ imports: 0, clients: 0, countries: 0, years: 0 })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          let currentImports = 0,
            currentClients = 0,
            currentCountries = 0,
            currentYears = 0
          const interval = setInterval(() => {
            if (currentImports < 500) currentImports += 10
            if (currentClients < 1000) currentClients += 25
            if (currentCountries < 45) currentCountries += 1
            if (currentYears < 16) currentYears += 0.5

            setCounts({
              imports: Math.floor(currentImports),
              clients: Math.floor(currentClients),
              countries: Math.floor(currentCountries),
              years: Math.floor(currentYears),
            })

            if (currentImports >= 500 && currentClients >= 1000 && currentCountries >= 45 && currentYears >= 16) {
              clearInterval(interval)
            }
          }, 20)

          observer.unobserve(entries[0].target)
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: TrendingUp, label: "Successful Imports", value: `${counts.imports}+`, color: "from-primary" },
    { icon: Users, label: "Happy Clients", value: `${counts.clients}+`, color: "from-accent" },
    { icon: Globe, label: "Countries Served", value: `${counts.countries}+`, color: "from-primary" },
    { icon: Zap, label: "Years Experience", value: `${counts.years}+`, color: "from-accent" },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
            Trusted by Businesses Worldwide
          </h2>
          <p className={`text-white/70 text-lg ${isVisible ? "animate-fadeInUp animate-delay-100" : "opacity-0"}`}>
            Our proven track record speaks for itself
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className={`group text-center p-8 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-white/30 transition-all hover:bg-white/10 cursor-pointer hover:scale-110 hover:-translate-y-2 ${
                  isVisible ? "animate-slideInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`bg-gradient-to-br ${stat.color} to-accent/50 p-4 rounded-lg group-hover:scale-125 transition-transform`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {stat.value}
                </h3>
                <p className="text-white/70 group-hover:text-white transition-colors">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
