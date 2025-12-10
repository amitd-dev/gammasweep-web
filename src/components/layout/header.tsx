"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Events", href: "#events" },
  { name: "Blog", href: "#blog" },
  { name: "Contact Us", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <header className="w-full max-w-5xl rounded-full border border-white/10 bg-background/60 backdrop-blur-xl shadow-lg supports-[backdrop-filter]:bg-background/40">
        <div className="flex h-14 items-center px-6">
          <div className="flex flex-1 items-center justify-between md:justify-start">
            <Link href="/" className="mr-8 flex items-center space-x-2">
              <span className="font-bold sm:inline-block text-xl tracking-tight">
                GammaSweep
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-primary text-foreground/80"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full rounded-b-2xl border-b border-white/10 bg-background/95 backdrop-blur-xl">
                <div className="flex flex-col space-y-4 py-4 items-center">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="w-full max-w-xs mt-4 rounded-full">
                    <Link href="#book-meeting">Book A Meeting</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
               <Link href="#book-meeting">Book A Meeting</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}
