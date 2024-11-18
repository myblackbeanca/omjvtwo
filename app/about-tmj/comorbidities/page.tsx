"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Brain, Heart, Stethoscope, Plus } from "lucide-react"
import Image from "next/image"

const conditions = [
  {
    category: "Neurological",
    icon: Brain,
    conditions: [
      { name: "Chronic Migraines", description: "Severe headaches often occurring alongside TMJ disorders" },
      { name: "Trigeminal Neuralgia", description: "Intense facial pain affecting the trigeminal nerve" },
      { name: "Sleep Disorders", description: "Disrupted sleep patterns and sleep apnea" }
    ]
  },
  {
    category: "Cardiovascular",
    icon: Heart,
    conditions: [
      { name: "Chest Pain", description: "Non-cardiac chest pain related to TMJ dysfunction" },
      { name: "Palpitations", description: "Heart rhythm irregularities associated with TMJ stress" },
      { name: "Blood Pressure Issues", description: "Changes in blood pressure related to chronic pain" }
    ]
  },
  {
    category: "Respiratory",
    icon: Stethoscope,
    conditions: [
      { name: "Sleep Apnea", description: "Breathing interruptions during sleep" },
      { name: "Breathing Difficulties", description: "Challenges with normal breathing patterns" },
      { name: "Upper Airway Resistance", description: "Increased effort to breathe during sleep" }
    ]
  }
]

export default function ComorbiditiesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=2400&q=80"
          alt="Medical research"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Related Conditions</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Understanding the complex connections between TMJ and other health conditions
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {conditions.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6">
                  <div className="flex items-center mb-6">
                    <category.icon className="h-8 w-8 text-primary mr-4" />
                    <h2 className="text-2xl font-bold">{category.category} Conditions</h2>
                  </div>
                  <div className="space-y-6">
                    {category.conditions.map((condition) => (
                      <div key={condition.name} className="flex items-start">
                        <Plus className="h-5 w-5 text-primary mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">{condition.name}</h3>
                          <p className="text-muted-foreground">{condition.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}