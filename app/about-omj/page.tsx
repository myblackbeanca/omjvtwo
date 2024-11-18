"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Heart, Users, Star, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const initiatives = [
  {
    title: "Patient Advocacy Resources",
    description: "Know your rights and get the tools to fight for the care you deserve.",
    icon: Users
  },
  {
    title: "Support Groups",
    description: "Find your people. We offer spaces to connect, vent, and heal with others who get it.",
    icon: Heart
  },
  {
    title: "Educational Toolkits",
    description: "Learn more about TMJ, debunk the myths, and stay ahead of the latest treatment options.",
    icon: Lightbulb
  },
  {
    title: "Jawfluencer Program",
    description: "Join forces with culture-creators and influencers to spread awareness and break stigmas.",
    icon: Star
  }
]

export default function AboutOMJ() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2400&q=80"
          alt="Community"
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
                Empowering the TMJ community through advocacy, education, and support
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-[#4A555D]"
            >
              <p className="text-xl">
                At Oh My Jaw, we believe in the power of community. It's not just one voice—it's the collective strength of the TMJ community that drives awareness, pushes for better care, and fights to break the stigma that's surrounded TMJ for way too long.
              </p>
              
              <h2 className="text-3xl font-sigmar gradient-text">We Advocate for Everyone</h2>
              <p>
                Whether you're newly diagnosed, have been living with TMJ for years, or are here to support someone you care about, we've got your back. We are here for everyone, regardless of age, gender, race, or background.
              </p>
              
              <h3 className="text-2xl font-sigmar gradient-text">Through advocacy, storytelling, and connection, we're working to:</h3>
              <ul>
                <li>Bridge the gap between medical and dental care</li>
                <li>Fix the gender data gap in research</li>
                <li>Shift the narrative from isolation to mutual respect, dignity, and understanding</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-[#FDE48C]/10 border-2 border-[#FD75B4]/20">
                <h2 className="text-2xl font-sigmar mb-6 gradient-text">We're Giving a Voice to the Silenced</h2>
                <div className="prose prose-lg max-w-none text-[#4A555D]">
                  <p>
                    At Oh My Jaw, we're here for the TMJ sufferers who've been dismissed, misunderstood, or passed from one provider to the next, chasing relief that feels just out of reach. If you've ever felt invisible or unheard—you're not alone. We see you, and we want to hear what's on your mind.
                  </p>
                  <p>
                    Together, we can disrupt the system and make a real difference for the millions of people stuck in limbo, waiting for answers, care, and respect.
                  </p>
                </div>
              </Card>
            </motion.div>

            <div>
              <h2 className="text-3xl font-sigmar gradient-text text-center mb-12">Our Initiatives</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {initiatives.map((initiative, index) => (
                  <motion.div
                    key={initiative.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover-scale border-2 border-[#FD75B4]/20">
                      <initiative.icon className="h-8 w-8 text-[#FD75B4] mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                      <p className="text-[#4A555D]">{initiative.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button 
                className="bg-[#FD75B4] hover:bg-[#FD75B4]/90 text-white rounded-full px-8"
                asChild
              >
                <Link href="/tribe">
                  Join the Movement <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}