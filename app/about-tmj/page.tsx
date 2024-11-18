"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Spline from "@splinetool/react-spline"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Heart, Stethoscope, Plus } from "lucide-react"
import Image from "next/image"

const comorbidities = [
  { icon: Brain, title: "Neurological", conditions: ["Migraines", "Trigeminal Neuralgia", "Sleep Disorders"] },
  { icon: Heart, title: "Cardiovascular", conditions: ["Chest Pain", "Palpitations", "Blood Pressure Issues"] },
  { icon: Stethoscope, title: "Respiratory", conditions: ["Sleep Apnea", "Breathing Difficulties", "Chest Tightness"] },
  { icon: Brain, title: "Autoimmune", conditions: ["Fibromyalgia", "Rheumatoid Arthritis", "Lupus"] },
]

export default function AboutTMJ() {
  const [modelRef, modelInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=2400&q=80"
          alt="Medical professional examining jaw"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Understanding TMJ Disorders</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Comprehensive information about Temporomandibular Joint disorders and their impact on daily life.
            </p>
          </div>
        </div>
      </section>

      {/* 3D Model Section */}
      <section ref={modelRef} className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={modelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Interactive TMJ Anatomy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the complexities of the temporomandibular joint through our interactive 3D model.
            </p>
          </motion.div>

          <div className="aspect-video rounded-lg overflow-hidden bg-black/5">
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iDZZM/scene.splinecode" />
          </div>
        </div>
      </section>

      {/* Comorbidities Section */}
      <section ref={contentRef} className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Related Conditions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              TMJ disorders often occur alongside other health conditions. Understanding these connections is crucial for comprehensive treatment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comorbidities.map((item, index) => (
              <Card key={index} className="p-6">
                <item.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <Plus className="h-4 w-4 mr-2 text-primary" />
                      {condition}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-24 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Treatment Approaches</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore different treatment options available for managing TMJ disorders.
            </p>
          </div>

          <Tabs defaultValue="conservative" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="conservative">Conservative Care</TabsTrigger>
              <TabsTrigger value="medical">Medical Interventions</TabsTrigger>
              <TabsTrigger value="surgical">Surgical Options</TabsTrigger>
            </TabsList>
            <TabsContent value="conservative" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Conservative Treatment Approaches</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Stethoscope className="h-5 w-5 mr-3 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Physical Therapy</h4>
                      <p className="text-muted-foreground">Exercises and manual therapy to improve jaw function and reduce pain.</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="medical" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Medical Treatment Options</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Plus className="h-5 w-5 mr-3 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Medications</h4>
                      <p className="text-muted-foreground">Anti-inflammatory drugs and muscle relaxants to manage pain and discomfort.</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="surgical" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Surgical Interventions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Stethoscope className="h-5 w-5 mr-3 mt-1 text-primary" />
                    <div>
                      <h4 className="font-medium">Arthroscopy</h4>
                      <p className="text-muted-foreground">Minimally invasive procedure to diagnose and treat joint problems.</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}