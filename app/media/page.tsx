"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Image as ImageIcon, FileText, Share2 } from "lucide-react"
import Image from "next/image"

const mediaContent = {
  videos: [
    {
      title: "Understanding TMJ Disorders",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      duration: "5:30",
      category: "Education"
    },
    {
      title: "Patient Stories: Sarah's Journey",
      thumbnail: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=800&q=80",
      duration: "8:45",
      category: "Stories"
    },
    {
      title: "TMJ Treatment Options",
      thumbnail: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=800&q=80",
      duration: "6:15",
      category: "Treatment"
    }
  ],
  infographics: [
    {
      title: "TMJ Anatomy Guide",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
      category: "Education"
    },
    {
      title: "Common Symptoms",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      category: "Health"
    },
    {
      title: "Treatment Timeline",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      category: "Treatment"
    }
  ]
}

export default function MediaHub() {
  const [activeTab, setActiveTab] = useState("videos")

  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=2400&q=80"
          alt="Media content"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Media Hub</h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                Explore our collection of videos, infographics, and resources
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <Tabs defaultValue="videos" className="space-y-8">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="videos" onClick={() => setActiveTab("videos")}>
                  <Play className="mr-2 h-4 w-4" /> Videos
                </TabsTrigger>
                <TabsTrigger value="infographics" onClick={() => setActiveTab("infographics")}>
                  <ImageIcon className="mr-2 h-4 w-4" /> Infographics
                </TabsTrigger>
                <TabsTrigger value="resources">
                  <FileText className="mr-2 h-4 w-4" /> Resources
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="videos" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {mediaContent.videos.map((video, index) => (
                  <motion.div
                    key={video.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <Button variant="secondary" size="icon">
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">{video.title}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{video.category}</span>
                          <Button variant="ghost" size="icon">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="infographics" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {mediaContent.infographics.map((infographic, index) => (
                  <motion.div
                    key={infographic.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={infographic.image}
                          alt={infographic.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">{infographic.title}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{infographic.category}</span>
                          <Button variant="ghost" size="icon">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Resources Coming Soon</h3>
                <p className="text-muted-foreground">
                  We're working on bringing you helpful resources and documents.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}