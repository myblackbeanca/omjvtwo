"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <Image
          src="https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omjbanner.png"
          alt="TMJ Hero Banner"
          fill
          className="object-cover brightness-50"
          priority
        />
      </motion.div>
      
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-sigmar text-white"
          >
            It's not all in your head
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Join our community of TMJ warriors and advocates fighting for awareness, research, and better treatment options.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg" 
              className="bg-[#FDE48C] hover:bg-[#FDE48C]/90 text-[#4A555D] rounded-full px-8"
              asChild
            >
              <Link href="/tribe">
                Join the Tribe <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 rounded-full px-8"
              asChild
            >
              <Link href="/about-tmj">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}