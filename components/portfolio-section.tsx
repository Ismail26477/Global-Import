"use client"

import { Cpu, Cog, Leaf, ShoppingBag } from "lucide-react"
import Image from "next/image"

export default function PortfolioSection() {
  const categories = [
    {
      icon: Cog,
      title: "Industrial Goods",
      description: "Heavy machinery and equipment",
      color: "from-blue-500 to-cyan-500",
      image: "/images/industrial-goods.jpg",
    },
    {
      icon: Cpu,
      title: "Electronics",
      description: "Consumer and industrial electronics",
      color: "from-purple-500 to-pink-500",
      image: "/images/electronics-manufacturing.jpg",
    },
    {
      icon: Cog,
      title: "Machinery",
      description: "Manufacturing and processing equipment",
      color: "from-orange-500 to-amber-500",
      image: "/images/machinery-equipment.jpg",
    },
    {
      icon: Leaf,
      title: "Raw Materials",
      description: "Textiles, metals, and chemicals",
      color: "from-emerald-500 to-teal-500",
      image: "/images/raw-materials.jpg",
    },
    {
      icon: ShoppingBag,
      title: "Consumer Products",
      description: "Retail and household items",
      color: "from-rose-500 to-red-500",
      image: "/images/consumer-products.jpg",
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Product Categories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We handle all major product categories from trusted manufacturers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-64 cursor-pointer"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-sm text-white/90">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
