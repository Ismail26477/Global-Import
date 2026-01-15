"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/30 to-cyan-50/40 overflow-hidden relative"
    >
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-300/15 to-blue-300/15 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-300/15 to-pink-300/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-orange-300/10 to-yellow-300/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 px-4 py-2.5 rounded-full border border-cyan-300/60 w-fit backdrop-blur-sm ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
            >
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span className="text-xs font-bold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent uppercase tracking-wider">
                Global Import Solutions
              </span>
            </div>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight ${isVisible ? "animate-fadeInUp animate-delay-100" : "opacity-0"}`}
            >
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-flow">
                Simplified Global
              </span>
              <br />
              <span className="text-foreground">Sourcing & Import</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>

            <p
              className={`text-lg text-foreground/70 max-w-lg leading-relaxed ${isVisible ? "animate-fadeInUp animate-delay-200" : "opacity-0"}`}
            >
              Connect with trusted suppliers worldwide. We handle everything from sourcing to doorstep delivery with
              complete transparency and expert support.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 ${isVisible ? "animate-fadeInUp animate-delay-300" : "opacity-0"}`}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/40 transition-all rounded-xl hover:scale-105 active:scale-95 font-semibold"
              >
                Start Sourcing Today <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-700 hover:bg-cyan-50 bg-white rounded-xl hover:scale-105 active:scale-95 transition-all font-semibold shadow-md"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`pt-8 border-t border-border ${isVisible ? "animate-fadeInUp animate-delay-400" : "opacity-0"}`}
            >
              <p className="text-xs text-foreground/60 font-semibold mb-6 uppercase tracking-wider">
                Trusted by importers worldwide
              </p>
              <div className="flex gap-12 flex-wrap">
                <div className="group">
                  <p className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors">16+</p>
                  <p className="text-sm text-foreground/60">Years Experience</p>
                </div>
                <div className="group">
                  <p className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors">500+</p>
                  <p className="text-sm text-foreground/60">Successful Imports</p>
                </div>
                <div className="group">
                  <p className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors">6</p>
                  <p className="text-sm text-foreground/60">Core Services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative ${isVisible ? "animate-fadeInRight animate-delay-200" : "opacity-0"}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 h-96 md:h-[500px] border-2 border-cyan-300/50 backdrop-blur-sm bg-gradient-to-br from-cyan-100/50 to-blue-100/50">
              <Image
                src="/global-logistics-warehouse-shipping.jpg"
                alt="Global logistics and import operations"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
