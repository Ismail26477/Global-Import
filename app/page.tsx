"use client"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TrustBadgesSection from "@/components/trust-badges-section"
import AboutSection from "@/components/about-section"
import ProcessSection from "@/components/process-section"
import JourneySection from "@/components/journey-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import PortfolioSection from "@/components/portfolio-section"
import FeaturedClientsSection from "@/components/featured-clients-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import EnquirySection from "@/components/enquiry-section"
import Footer from "@/components/footer"
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <TrustBadgesSection />
      <AboutSection />
      <ProcessSection />
      <JourneySection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <FeaturedClientsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <EnquirySection />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  )
}
