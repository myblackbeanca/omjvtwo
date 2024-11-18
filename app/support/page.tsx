"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Heart, HandHeart, Trophy, Users } from "lucide-react"
import Image from "next/image"

const sponsors = [
  {
    name: "HealthTech Solutions",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300&q=80",
    description: "Supporting TMJ research and patient care"
  },
  {
    name: "Wellness Foundation",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300&q=80",
    description: "Advancing TMJ awareness and education"
  },
  {
    name: "Care Partners",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300&q=80",
    description: "Providing resources for TMJ patients"
  }
]

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=2400&q=80"
          alt="Support and donations"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Support Our Mission</h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
                Help us make a difference in the lives of TMJ warriors
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Donate Now <Heart className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Progress */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">2024 Fundraising Goal</h2>
                <p className="text-muted-foreground mb-8">
                  Help us reach our goal of $100,000 to fund research and support programs
                </p>
                <div className="space-y-4">
                  <Progress value={65} className="h-4" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">$65,000 raised</span>
                    <span className="font-medium">Goal: $100,000</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <HandHeart className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Monthly Giving</h3>
                  <p className="text-sm text-muted-foreground">
                    Join our sustaining donors program
                  </p>
                </div>
                <div className="text-center">
                  <Trophy className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Corporate Match</h3>
                  <p className="text-sm text-muted-foreground">
                    Double your impact through employer matching
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Legacy Giving</h3>
                  <p className="text-sm text-muted-foreground">
                    Create a lasting impact for future generations
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thank you to our generous sponsors who make our work possible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
                  <p className="text-muted-foreground">{sponsor.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}