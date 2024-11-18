"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">What is OH MY JAW?</h2>
            <p className="text-[#4A555D] text-lg leading-relaxed">
              OH MY JAW (OMJ) is a nonprofit organization dedicated to empowering individuals affected by TMJ disorders. We provide support, education, and advocacy for the TMJ community, working tirelessly to increase awareness and improve treatment options.
            </p>
            <Button 
              className="bg-[#FD75B4] hover:bg-[#FD75B4]/90 text-white rounded-full px-8 hover-scale"
              asChild
            >
              <Link href="/about-us">
                Learn Our Story <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NeNldHXBoNQ?start=5&autoplay=1&mute=1"
              title="OH MY JAW Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}