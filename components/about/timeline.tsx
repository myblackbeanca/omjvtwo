"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const timelineEvents = [
  {
    year: "2009",
    title: "End Women's Pain Campaign",
    description: "Jenny launches video campaign to raise awareness"
  },
  {
    year: "2016",
    title: "FDA Testimony",
    description: "Advocating for regulatory changes in TMJ treatment"
  },
  {
    year: "2019",
    title: "NASEM Patient Testimonial",
    description: "Panel presentation on patient experiences"
  },
  {
    year: "2023",
    title: "FDA MDEpiNet Hope",
    description: "Contributing to patient registry development"
  },
  {
    year: "2024",
    title: "CBS News Feature",
    description: "\"The horrors of TMJ: Chronic pain, metal jaws, and futile treatments\""
  }
]

export function Timeline() {
  return (
    <section className="py-24 bg-[#FDE48C]/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-sigmar gradient-text text-center mb-16">
            Journey Through Time
          </h2>
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover-scale border-2 border-[#FD75B4]/20">
                  <div className="flex items-center gap-6">
                    <div className="text-2xl font-bold text-[#FD75B4] w-24">
                      {event.year}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-[#4A555D]">{event.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}