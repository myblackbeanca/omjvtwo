"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const stats = [
  {
    number: "9",
    label: "Women vs Men",
    description: "For every man with the disorder, nine women suffer from TMJ"
  },
  {
    number: "800%",
    label: "Higher in Women",
    description: "The incidence of TMJ in women is a whopping 800 percent higher than men"
  },
  {
    number: "33M",
    label: "Americans Affected",
    description: "TMJ disorders afflict as many as 33 million Americans"
  }
]

export function StatsSection() {
  return (
    <section className="py-24 bg-[#FD75B4]/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-sigmar mb-4 gradient-text">TMJ by the numbers</h2>
          <p className="text-[#4A555D] text-lg max-w-2xl mx-auto">
            Understanding the scale and impact of TMJ disorders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center bg-white hover-scale border-2 border-[#FD75B4]/20">
                <div className="text-5xl font-bold text-[#FD75B4] mb-4">{stat.number}</div>
                <h3 className="text-xl font-sigmar mb-2 text-[#4A555D]">{stat.label}</h3>
                <p className="text-[#4A555D]/80">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-[#FD75B4] hover:bg-[#FD75B4]/90 text-white rounded-full px-8 hover-scale"
            asChild
          >
            <Link href="/about-tmj">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}