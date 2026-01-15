"use client"

import { CheckCircle, Users, TrendingUp, Zap } from "lucide-react"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/40 to-cyan-50/50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Header */}
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-cyan-700 bg-clip-text text-transparent mb-8 tracking-tight">
          Your Trusted Global Trade Partner
        </h1>

        <div className="bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 border-2 border-cyan-400/60 rounded-3xl p-12 mb-16 text-center backdrop-blur-xl shadow-lg hover:shadow-xl transition-shadow">
          <Zap className="w-12 h-12 mx-auto text-cyan-600 mb-4" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent mb-3">
            Our Mission
          </h2>
          <p className="text-lg font-semibold text-foreground">Hassle-free Import & Global E-Commerce Sourcing</p>
        </div>

        {/* Description */}
        <p className="text-lg text-foreground/70 leading-relaxed mb-16 max-w-4xl">
          We simplify international trade and make hassle-free importing and global e-commerce sourcing accessible to
          businesses of all sizes. With a strong supplier network across China and major manufacturing hubs, we act as
          your single trusted partner.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Global Supply Network Card */}
          <div className="bg-gradient-to-br from-cyan-100/80 to-blue-100/80 border-2 border-cyan-400/60 rounded-3xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-3 flex-shrink-0 shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
                Global Supply Network
              </h3>
            </div>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              We have a strong, verified supplier network across{" "}
              <span className="font-bold text-cyan-700">China and other major manufacturing hubs</span> worldwide. This
              enables us to source any product category at competitive prices.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Direct partnerships with verified manufacturers</span>
              </div>
              <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Access to competitive pricing & exclusive products</span>
              </div>
              <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Fast sourcing & production timelines</span>
              </div>
            </div>
          </div>

          {/* Our Evolution Card */}
          <div className="bg-gradient-to-br from-purple-100/80 to-pink-100/80 border-2 border-purple-400/60 rounded-3xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-3 flex-shrink-0 shadow-lg">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                Our Evolution
              </h3>
            </div>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              We've evolved from a{" "}
              <span className="font-bold text-purple-700">
                limited-category specialist to a multi-category import powerhouse
              </span>
              , adapting to market demands and customer needs.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">
                  <strong>Before:</strong> Limited product categories
                </span>
              </div>
              <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">
                  <strong>Now:</strong> Multi-category sourcing expertise
                </span>
              </div>
              <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">
                  <strong>Focus:</strong> E-commerce & global marketplace sellers
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Journey Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-700 via-blue-700 to-purple-700 bg-clip-text text-transparent">
            Our Journey
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "16+ Years", value: "In Global Trade", gradient: "from-cyan-500 to-blue-500" },
            { label: "Expert Team", value: "Professional Management", gradient: "from-blue-500 to-purple-500" },
            { label: "Global Reach", value: "China & 50+ Countries", gradient: "from-purple-500 to-pink-500" },
            { label: "Multi-Category", value: "Diverse Solutions", gradient: "from-pink-500 to-orange-500" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${stat.gradient} rounded-2xl p-6 border-2 border-white/50 hover:shadow-xl transition-all hover:scale-105 text-white text-center backdrop-blur-sm`}
            >
              <p className="text-sm font-semibold mb-2 uppercase tracking-wider opacity-90">{stat.label}</p>
              <p className="font-bold text-xl">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="bg-gradient-to-r from-cyan-100/60 to-blue-100/60 rounded-3xl p-10 border-2 border-cyan-300/60 backdrop-blur-sm">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent mb-6">
            E-Commerce Platforms We Support
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Amazon (USA, India & regions)",
              "eBay",
              "Walmart Marketplace",
              "Etsy",
              "Shopify",
              "International platforms",
            ].map((platform, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gradient-to-r from-white to-cyan-50/60 rounded-xl p-4 border-2 border-cyan-300/40 hover:border-cyan-500 hover:shadow-lg transition-all backdrop-blur-sm"
              >
                <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                <span className="font-semibold text-foreground">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
