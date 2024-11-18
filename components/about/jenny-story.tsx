"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function JennyStory() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-16"
        >
          <div className="space-y-8">
            <h2 className="text-3xl font-sigmar gradient-text text-center">
              Meet Jenny Feldman: A Trailblazer in TMJ Advocacy
            </h2>
            <div className="prose prose-lg max-w-none text-[#4A555D]">
              <p>
                Jenny Feldman isn't just your average advocate – she's a powerhouse with over two decades of experience fighting for better care for TMJ patients. With degrees in Public Health Communication for Social Change (MS), Intellectual Property (JD), and Advertising and Communications (BA), Jenny knows how to blend education, advocacy, and policy to spark real change.
              </p>
              <p>
                Her journey started back in the early 2000s with a video campaign focused on ending women's pain, even taking her fight to Capitol Hill to make sure lawmakers heard the voices of those suffering. Since then, Jenny's been on the front lines, repping the TMJ community through her work with the TMJ Association.
              </p>
            </div>
          </div>

          <Card className="p-8 bg-[#FDE48C]/10 border-2 border-[#FD75B4]/20">
            <h3 className="text-2xl font-sigmar mb-6 gradient-text">Why I Started Oh My Jaw</h3>
            <div className="prose prose-lg max-w-none text-[#4A555D]">
              <p>
                When I first started dealing with this mess—endless surgeries, constant jaw pain, and feeling totally wrecked by the medical system—I looked around and thought, Where are the people like me?
              </p>
              <p>
                TMJ isn't exactly dinner table conversation, but honestly? It should be. It's this invisible monster that affects millions, and yet we're treated like we just need a nap or, worse, that it's all in our heads.
              </p>
              <p>
                I started Oh My Jaw because I was done feeling invisible. People don't see the daily grind—the jaw locking at the worst times, the relentless pain, the emotional rollercoaster that comes with it. They think you're fine because you look fine. But behind the scenes? My life was literally wired and screwed.
              </p>
              <p>
                So, I stopped waiting for someone else to tell this story and decided to tell it myself. Oh My Jaw is about finding the people who get it—the ones on the same wild TMJ ride. It's about raising awareness, giving a voice to those the system has brushed off, and, most importantly, taking control of the narrative.
              </p>
              <p className="font-semibold">
                That's why I started Oh My Jaw. So none of us have to go through this alone.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}