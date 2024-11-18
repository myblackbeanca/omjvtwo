"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-24 bg-[#1D2B35]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">Does TMJ affect your life?</h2>
          <p className="text-lg text-white/90">
            If TMJ is messing with your vibe—whether it's jaw pain, migraines, earaches, or just making life more complicated—you're not alone. We get it because we've been there too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button 
              className="bg-[#FD75B4] hover:bg-[#FD75B4]/90 text-white rounded-full px-8"
            >
              Join the TRIBE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}