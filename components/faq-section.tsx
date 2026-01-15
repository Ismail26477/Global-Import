"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "What MOQ (Minimum Order Quantity) do you require?",
      answer:
        "We specialize in flexible order quantities. Whether you need small scalable orders or large bulk shipments, we accommodate both. MOQ varies by product category—contact us for specific details.",
    },
    {
      question: "Which e-commerce platforms do you support?",
      answer:
        "We actively support Amazon (USA, India, UK, Europe, UAE), eBay, Walmart Marketplace, Etsy, Shopify stores, and other international online platforms with specialized packaging and FBA logistics.",
    },
    {
      question: "How do you ensure quality?",
      answer:
        "We conduct pre-production, during-production, and pre-shipment inspections. Our quality assurance process includes packaging verification and compliance checks to ensure zero defects.",
    },
    {
      question: "What shipping options are available?",
      answer:
        "We offer sea freight (FCL/LCL), air freight, express courier solutions, and cargo consolidation with real-time tracking. We select the best mode based on cost, urgency, and product nature.",
    },
    {
      question: "Do you handle customs clearance?",
      answer:
        "Yes, we handle complete customs clearance at both origin and in India. We provide export documentation, HS code classification, duty calculation, and assistance with regulatory bodies like DGFT, BIS, and FSSAI.",
    },
    {
      question: "Do you offer private labeling and white labeling?",
      answer:
        "Absolutely. We support white labeling, private labeling, custom product development, and Amazon-compliant packaging with FNSKU and barcodes for e-commerce sellers.",
    },
    {
      question: "What is your sourcing capability?",
      answer:
        "We source across multiple categories—electronics, home & kitchen, beauty, tools, FMCG, lifestyle, and more—with a strong supplier network in China and other major manufacturing hubs.",
    },
    {
      question: "How long does the entire process take?",
      answer:
        "Timeline varies based on shipping mode and sourcing complexity. Sea freight typically takes 15-30 days, air freight 3-7 days. Sourcing and quality inspection add 2-4 weeks depending on requirements.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our import and sourcing services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-blue-50"
            >
              <AccordionTrigger className="hover:text-primary font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
