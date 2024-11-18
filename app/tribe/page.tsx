"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, MessageSquare, Users, Video } from "lucide-react"
import Image from "next/image"

const badges = [
  { name: "Storyteller", icon: MessageSquare, description: "Share your TMJ journey" },
  { name: "Advocate", icon: Users, description: "Support fellow warriors" },
  { name: "Educator", icon: Video, description: "Create helpful content" }
]

export default function TribePage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2400&q=80"
          alt="Community gathering"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Join the Tribe</h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                Connect with warriors who understand your journey
              </p>
              <Button size="lg" className="mt-8">
                Become a Member <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Earn Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get rewarded for your contributions to the community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {badges.map((badge) => (
              <Card key={badge.name} className="p-6 text-center">
                <badge.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <Badge className="mb-4">{badge.name}</Badge>
                <p className="text-muted-foreground">{badge.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="text-center mb-8">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
                <p className="text-muted-foreground">
                  Start your journey with our supportive community today
                </p>
              </div>

              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Email Address" />
                <Button className="w-full">
                  Join Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}