"use client"

import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function AnatomyPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=2400&q=80"
          alt="Medical anatomy illustration"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">TMJ Anatomy Explorer</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Interactive 3D visualization of the temporomandibular joint
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden bg-black/5 mb-8">
              <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iDZZM/scene.splinecode" />
            </div>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Understanding TMJ Structure</h2>
              <p className="text-muted-foreground mb-6">
                The temporomandibular joint (TMJ) is one of the most complex joints in the human body. 
                Use our interactive 3D model to explore its key components and understand how they work together.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Key Components</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Temporal bone</li>
                    <li>• Mandibular condyle</li>
                    <li>• Articular disc</li>
                    <li>• Ligaments and muscles</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Movement Types</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Rotation</li>
                    <li>• Translation</li>
                    <li>• Combination movements</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}