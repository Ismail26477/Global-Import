"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      name: "Vikram Patel",
      company: "Electronics Retail Ltd",
      role: "Procurement Manager",
      content:
        "Global Imports transformed our supply chain. Fast, reliable, and their customs expertise saved us weeks of delays.",
      rating: 5,
      avatar: "VP",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      name: "Anjali Singh",
      company: "Amazon FBA Seller",
      role: "Business Owner",
      content:
        "Perfect partner for scaling on Amazon USA. Their quality inspection and FBA logistics support is unmatched.",
      rating: 5,
      avatar: "AS",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      name: "Rohit Kapoor",
      company: "Wholesale Distributor",
      role: "Operations Head",
      content:
        "16 years of experience shows. Their multi-category sourcing and flexible MOQs are exactly what we needed.",
      rating: 5,
      avatar: "RK",
      bgColor: "from-cyan-50 to-cyan-100",
    },
    {
      name: "Priya Nair",
      company: "D2C Fashion Brand",
      role: "Founder",
      content:
        "Best decision for our private label sourcing. Professional, transparent, and truly hassle-free importing.",
      rating: 5,
      avatar: "PN",
      bgColor: "from-pink-50 to-pink-100",
    },
    {
      name: "Deepak Joshi",
      company: "Home & Kitchen Retail",
      role: "CEO",
      content:
        "Reduced our procurement costs by 35% in just 6 months. Their supplier network is incredibly diverse and reliable.",
      rating: 5,
      avatar: "DJ",
      bgColor: "from-green-50 to-green-100",
    },
    {
      name: "Neha Gupta",
      company: "Tech Accessories Co",
      role: "Supply Chain Manager",
      content:
        "Exceptional service quality! They handle everything from sourcing to delivery with incredible precision and care.",
      rating: 5,
      avatar: "NG",
      bgColor: "from-orange-50 to-orange-100",
    },
    {
      name: "Sandeep Rao",
      company: "Sports Equipment Import",
      role: "Operations Director",
      content:
        "Game-changer for our business. They provide real-time updates and their quality control is absolutely top-notch.",
      rating: 5,
      avatar: "SR",
      bgColor: "from-red-50 to-red-100",
    },
    {
      name: "Meera Sharma",
      company: "Beauty & Cosmetics Ltd",
      role: "Procurement Head",
      content:
        "Outstanding logistics partner! They understand international compliance requirements better than anyone in the industry.",
      rating: 5,
      avatar: "MS",
      bgColor: "from-indigo-50 to-indigo-100",
    },
    {
      name: "Arun Verma",
      company: "Electronics Distributor",
      role: "Business Manager",
      content:
        "The most transparent and honest supplier we've ever worked with. Highly recommended for all import needs.",
      rating: 5,
      avatar: "AV",
      bgColor: "from-teal-50 to-teal-100",
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlay, testimonials.length])

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  const getVisibleTestimonials = () => {
    return [
      testimonials[current],
      testimonials[(current + 1) % testimonials.length],
      testimonials[(current + 2) % testimonials.length],
    ]
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-transparent opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-transparent opacity-30 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-base">
            Trusted by importers, e-commerce sellers, and brands worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {visibleTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-5 border-0 shadow-lg transition-all duration-700 ease-out transform bg-gradient-to-br ${
                testimonial.bgColor
              } hover:shadow-2xl hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-sm text-foreground mb-4 italic font-medium leading-relaxed">"{testimonial.content}"</p>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-lg`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground text-xs">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 animate-fade-in">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-white shadow-md hover:shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setIsAutoPlay(false)
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? "bg-gradient-to-r from-primary to-purple-600 w-3 h-3 shadow-lg"
                    : index === (current + 1) % testimonials.length
                      ? "bg-gradient-to-r from-primary to-purple-600 w-3 h-3 shadow-lg opacity-60"
                      : index === (current + 2) % testimonials.length
                        ? "bg-gradient-to-r from-primary to-purple-600 w-3 h-3 shadow-lg opacity-40"
                        : "bg-border w-2 h-2 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-white shadow-md hover:shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Progress Text */}
        <div className="text-center mt-6 text-xs text-muted-foreground">
          Showing <span className="font-medium text-primary">{current + 1}</span>-
          <span className="font-medium text-primary">{(current + 3) % testimonials.length || testimonials.length}</span>{" "}
          of <span className="font-medium">{testimonials.length}</span> testimonials
        </div>
      </div>
    </section>
  )
}
