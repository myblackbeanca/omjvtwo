"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const missions = [
  {
    title: "our mission",
    image: "https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omj4.png",
    description: "To empower and support individuals affected by TMJ disorders through education, advocacy, and community.",
  },
  {
    title: "our vision",
    image: "https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omj5.png",
    description: "A world where TMJ disorders are widely understood, properly diagnosed, and effectively treated.",
  },
  {
    title: "our goals",
    image: "https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omj8.png",
    description: "Increase awareness, advance research, and improve treatment options for TMJ warriors worldwide.",
  },
]

export function MissionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-sigmar mb-4 gradient-text">why we're here</h2>
          <p className="text-[#4A555D] text-lg max-w-2xl mx-auto">
            Our commitment to the TMJ community drives everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white hover-scale border-2 border-[#FD75B4]/20">
                <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl mb-4 text-[#4A555D] font-sigmar">{item.title}</h3>
                <p className="text-[#4A555D] mb-6 font-nunito">{item.description}</p>
                <Button 
                  variant="outline"
                  className="w-full border-[#FD75B4] text-[#FD75B4] hover:bg-[#FD75B4] hover:text-white rounded-full"
                  asChild
                >
                  <Link href="/about-us">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}