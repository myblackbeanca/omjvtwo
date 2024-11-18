"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FD75B4]/10 hover:text-[#FD75B4]",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#1D2B35] text-white">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-14 w-48">
            <Image
              src="https://github.com/myblackbeanca/tmjimages/blob/80648b5f6091926289052abd17c62438241b159f/logone.png?raw=true"
              alt="Oh My Jaw Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#FD75B4] focus:text-[#FD75B4] focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-[#FD75B4] focus:text-[#FD75B4] bg-transparent hover:bg-[#FD75B4]/10 data-[state=open]:bg-[#FD75B4]/10">
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px] bg-[#1D2B35] border border-[#FD75B4]/20">
                  <ListItem href="/about-us" title="Our Story" className="text-white">
                    Learn about our journey and mission
                  </ListItem>
                  <ListItem href="/about-omj" title="About OMJ" className="text-white">
                    Discover our initiatives and impact
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-[#FD75B4] focus:text-[#FD75B4] bg-transparent hover:bg-[#FD75B4]/10 data-[state=open]:bg-[#FD75B4]/10">
                About TMJ
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px] bg-[#1D2B35] border border-[#FD75B4]/20">
                  <ListItem href="/about-tmj" title="Overview" className="text-white">
                    Learn about TMJ disorders and their impact
                  </ListItem>
                  <ListItem href="/about-tmj/anatomy" title="3D Anatomy" className="text-white">
                    Explore TMJ anatomy with our interactive 3D model
                  </ListItem>
                  <ListItem href="/about-tmj/comorbidities" title="Comorbidities" className="text-white">
                    Learn about TMJ's connection to other conditions
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-[#FD75B4] focus:text-[#FD75B4] bg-transparent hover:bg-[#FD75B4]/10 data-[state=open]:bg-[#FD75B4]/10">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px] bg-[#1D2B35] border border-[#FD75B4]/20">
                  <ListItem href="/podcast" title="Podcast" className="text-white">
                    Listen to our TMJ Warriors podcast
                  </ListItem>
                  <ListItem href="/media" title="Media Hub" className="text-white">
                    Access videos, infographics, and resources
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/support" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#FD75B4] focus:text-[#FD75B4] focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white">
                  Support OMJ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button asChild className="bg-[#FD75B4] hover:bg-[#FD75B4]/90 text-white">
          <Link href="/support">Donate</Link>
        </Button>
      </div>
    </header>
  )
}