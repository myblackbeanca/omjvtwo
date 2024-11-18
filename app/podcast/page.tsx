"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowRight, Headphones, MessageSquare, Mic, Play, Share2 } from "lucide-react"
import Image from "next/image"

const episodes = [
  {
    id: 1,
    title: "Living with TMJ: A Patient's Journey",
    description: "Sarah shares her 10-year journey with TMJ, from diagnosis to finding effective treatment options.",
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=800&q=80",
    duration: "45:30",
    date: "Mar 15, 2024",
  },
  {
    id: 2,
    title: "Expert Talk: Understanding TMJ Disorders",
    description: "Dr. Emily Johnson discusses the latest research and treatment approaches for TMJ disorders.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    duration: "52:15",
    date: "Mar 8, 2024",
  },
  {
    id: 3,
    title: "Holistic Approaches to TMJ Management",
    description: "Exploring alternative and complementary therapies for TMJ pain relief.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    duration: "38:45",
    date: "Mar 1, 2024",
  },
]

export default function Podcast() {
  const [selectedEpisode, setSelectedEpisode] = useState(episodes[0])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=2400&q=80"
          alt="Podcast studio setup"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">TMJ Warriors Podcast</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Real stories, expert insights, and community support for your TMJ journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={selectedEpisode.image}
                  alt={selectedEpisode.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-16 h-16">
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedEpisode.title}</h2>
                  <p className="text-muted-foreground">{selectedEpisode.description}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <Button>
                    <Headphones className="mr-2 h-4 w-4" /> Listen Now
                  </Button>
                  <Button variant="outline">
                    <Share2 className="mr-2 h-4 w-4" /> Share
                  </Button>
                </div>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Mic className="mr-2 h-4 w-4" /> {selectedEpisode.duration}
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" /> Comments
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Episode List */}
      <section className="py-24 bg-secondary/20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Recent Episodes</h2>
              <p className="text-muted-foreground">Listen to our latest conversations about TMJ health.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Input
                placeholder="Search episodes..."
                className="w-full md:w-[300px]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((episode) => (
              <Card
                key={episode.id}
                className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => setSelectedEpisode(episode)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={episode.image}
                    alt={episode.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{episode.title}</h3>
                  <p className="text-muted-foreground mb-4">{episode.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{episode.date}</span>
                    <Button variant="ghost" size="sm">
                      Play <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}