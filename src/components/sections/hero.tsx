"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-32 md:pt-48 md:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Ready-to-launch <br className="hidden lg:block" />
              <span className="text-primary">B2B Turnkey</span>{" "}
              <br className="hidden lg:block" />
              Sweepstakes Casino Software
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
              Highly innovative & precisely engineered B2B turnkey sweepstakes
              software that guarantees authentic casino-like experiences.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="h-12 px-8 text-lg">
                <Link href="#contact">Book Demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 px-8 text-lg"
              >
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Image container with refined effects */}
          <div className="relative mx-auto w-full max-w-[600px]">
            {/* Soft ambient glow */}
            <div className="pointer-events-none absolute -inset-10 rounded-[36px] bg-[radial-gradient(circle_at_top,_rgba(25,233,191,0.22),transparent_60%),radial-gradient(circle_at_bottom,_rgba(72,91,255,0.22),transparent_55%)] blur-3xl" />

            <motion.div
              className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-primary/15 shadow-[0_0_60px_rgba(25,233,191,0.35)]"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated conic highlight ring */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl">
                <div className="absolute -inset-[1px] rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(25,233,191,0.7),rgba(72,91,255,0.5),rgba(25,233,191,0.7))] mix-blend-screen opacity-40 animate-orbit-soft" />
              </div>

              <Image
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
                alt="Casino Gaming Platform"
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                priority
              />

              {/* Subtle top-down vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
            </motion.div>

            {/* Floating light orbs */}
            <div className="pointer-events-none absolute -right-6 top-4 h-20 w-20 rounded-full bg-primary/24 blur-3xl animate-float-soft" />
            <div
              className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-secondary/24 blur-3xl animate-float-soft"
              style={{ animationDelay: "1.4s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
