"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const issues = [
  {
    title: "Underfunded Research",
    description: "TMJ impacts millions, but it doesn't get nearly the funding it deserves compared to other chronic conditions. The result? Limited progress and way too many unanswered questions.",
    cta: "Learn More"
  },
  {
    title: "Gender Disparities",
    description: "Women are hit the hardest by TMJ, yet research doesn't prioritize their needs or experiences. We're tired of healthcare ignoring gender-specific realities—this gap has to go.",
    cta: "Get Involved"
  },
  {
    title: "Stigma",
    description: "How many times have patients heard, \"It's all in your head\"? Guess what…It's not. This outdated mindset delays care, invalidates pain, and leaves people without the treatment they need.",
    cta: "Share Your Story"
  },
  {
    title: "Limited Resources",
    description: "Finding accurate info and specialized care shouldn't feel like solving a puzzle. But for too many TMJ sufferers, it's a struggle to access the right care, leading to confusion and frustration.",
    cta: "Find Resources"
  }
]

export function IssuesSection() {
  return (
    <section className="py-24 bg-[#FDE48C]/10">
      <div className="container">
        <div className="text-center mb-16">
          <div className="relative h-24 w-full max-w-xl mx-auto mb-6">
            <Image
              src="https://github.com/myblackbeanca/tmjimages/blob/186771d426ac346bf218822635cf7b9704f49ef7/morethanvogue.png?raw=true"
              alt="More Issues Than Vogue"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-[#4A555D] text-lg max-w-2xl mx-auto">
            TMJ disorders are complex and often interconnected with numerous other health conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {issues.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white hover-scale border-2 border-[#FD75B4]/20 h-full">
                <h3 className="text-2xl font-bold mb-4 text-[#4A555D] capitalize">{item.title}</h3>
                <p className="text-[#4A555D] mb-6">{item.description}</p>
                <Button 
                  className="w-full bg-[#FD75B4] hover:bg-[#FD75B4]/90 text-white rounded-full"
                  asChild
                >
                  <Link href="/about-tmj">
                    {item.cta} <ArrowRight className="ml-2 h-4 w-4" />
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