"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=2400&q=80"
        alt="Team meeting"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-sigmar mb-6">About Oh My Jaw</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              A community-driven movement changing the narrative around TMJ disorders
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}