"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Users } from "lucide-react"

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    alert("Thank you for your enquiry! We will contact you soon.")
    setFormData({ name: "", email: "", company: "", product: "", message: "" })
  }

  const teamMembers = [
    { name: "Ankush Gandhi", phone: "9011675422" },
    { name: "Sagar Gandhi", phone: "8850782296" },
    { name: "Sarthur Gandhi", phone: "8446927070991" },
    { name: "Vimal Gandhi", phone: "9023982301921" },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Send Us an Enquiry</h2>
          <p className="text-muted-foreground text-lg">Get in touch with our team for your import needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Company Details */}
          <div className="space-y-8">
            {/* Company Info Card */}
            <Card className="p-8 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 sticky top-24">
              <h3 className="text-2xl font-bold text-foreground mb-6">Global Imports Nagpur</h3>

              {/* Email */}
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:globalimportsworldwide@gmail.com"
                    className="text-primary font-semibold hover:underline"
                  >
                    globalimportsworldwide@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 mb-8">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">Nagpur, Maharashtra, India</p>
                </div>
              </div>

              {/* Team Members */}
              <div className="border-t border-blue-200 pt-8">
                <div className="flex gap-2 mb-6">
                  <Users className="w-6 h-6 text-primary flex-shrink-0" />
                  <h4 className="font-bold text-foreground text-lg">Our Team</h4>
                </div>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white/70 rounded-lg p-4 hover:bg-white transition-colors">
                      <p className="font-semibold text-foreground">{member.name}</p>
                      <a href={`tel:${member.phone}`} className="text-primary hover:underline text-sm">
                        <Phone className="w-4 h-4 inline mr-2" />
                        {member.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

      
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card className="p-8 border-blue-200 bg-blue-50/30 h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Product Category</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    >
                      <option value="">Select a category</option>
                      <option value="industrial">Industrial Goods</option>
                      <option value="electronics">Electronics</option>
                      <option value="machinery">Machinery</option>
                      <option value="raw">Raw Materials</option>
                      <option value="consumer">Consumer Products</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                  Send Enquiry
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
