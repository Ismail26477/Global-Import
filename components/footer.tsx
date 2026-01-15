"use client"

import { Mail, Phone, MapPin, Linkedin, Twitter, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const contacts = [
    { name: "Ankush Gandhi", phone: "9011675422" },
    { name: "Sagar Gandhi", phone: "8830782296" },
    { name: "Sarthur Gandhi", phone: "8144629270109911" },
    { name: "Vimal Gandhi", phone: "9023982230521" },
  ]

  const footerLinks = {
    Services: ["Global Sourcing", "Import Solutions", "Quality Inspection", "Shipping"],
    Company: ["About Us", "Our Team", "E-Commerce Focus", "Platforms Supported"],
    Support: ["Contact Us", "Tracking", "Documentation", "FAQ"],
    Legal: ["Privacy Policy", "Terms of Service", "Compliance"],
  }

  return (
    <footer className="relative bg-foreground text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Brand & Links Grid */}
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Image src="/logo.png" alt="Global Imports Logo" width={48} height={48} className="w-20 h-2." />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                  Global Imports
                </h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                16+ years of expertise in international importing and e-commerce sourcing solutions.
              </p>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-6 text-xs uppercase tracking-widest text-primary/80">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/60 hover:text-primary transition-all duration-300 text-sm flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-primary opacity-0 group-hover:opacity-100 rounded-full transition-opacity"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-16 mb-12">
            <h3 className="font-semibold mb-10 text-xl">Get In Touch</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Phone Contacts Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-lg p-8 hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-base">Team Members</p>
                </div>
                <div className="space-y-4">
                  {contacts.map((contact, idx) => (
                    <a
                      key={idx}
                      href={`tel:${contact.phone}`}
                      className="block text-white/60 hover:text-primary transition-colors duration-300"
                    >
                      <p className="font-medium text-white text-sm">{contact.name}</p>
                      <p className="text-white/50 text-xs mt-1">{contact.phone}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-lg p-8 hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-base">Email</p>
                </div>
                <a
                  href="mailto:globalimports.worldwide@gmail.com"
                  className="text-white/60 hover:text-primary transition-colors duration-300 text-sm break-all flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    globalimports.worldwide@gmail.com
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-lg p-8 hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-base">Location</p>
                </div>
                <p className="text-white/60 text-sm">Nagpur, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/50 text-sm">© {currentYear} Global Imports Nagpur. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-primary/20 flex items-center justify-center text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-primary/20 flex items-center justify-center text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-primary/20 flex items-center justify-center text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
