"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#1D2B35] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="flex flex-col space-y-4 col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://github.com/myblackbeanca/tmjimages/blob/80648b5f6091926289052abd17c62438241b159f/logone.png?raw=true"
                alt="Oh My Jaw Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-white/80">
              Empowering TMJ patients through awareness, education, and community.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-white/60 hover:text-[#FD75B4]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-white/60 hover:text-[#FD75B4]">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-white/60 hover:text-[#FD75B4]">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://tiktok.com" className="text-white/60 hover:text-[#FD75B4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FD75B4]">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/about-tmj" className="hover:text-[#FD75B4]">About TMJ</Link></li>
              <li><Link href="/about-tmj/anatomy" className="hover:text-[#FD75B4]">3D Anatomy</Link></li>
              <li><Link href="/podcast" className="hover:text-[#FD75B4]">Podcast</Link></li>
              <li><Link href="/media" className="hover:text-[#FD75B4]">Media Hub</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FD75B4]">Community</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/tribe" className="hover:text-[#FD75B4]">Join the Tribe</Link></li>
              <li><Link href="/support" className="hover:text-[#FD75B4]">Support Us</Link></li>
              <li><Link href="/about-us" className="hover:text-[#FD75B4]">About Us</Link></li>
              <li><Link href="/support" className="hover:text-[#FD75B4]">Donate</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FD75B4]">Connect</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/support" className="hover:text-[#FD75B4]">Contact Us</Link></li>
              <li><Link href="/tribe" className="hover:text-[#FD75B4]">Join Newsletter</Link></li>
              <li><Link href="/media" className="hover:text-[#FD75B4]">Resources</Link></li>
              <li><Link href="/support" className="hover:text-[#FD75B4]">Support Our Mission</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Oh My Jaw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}