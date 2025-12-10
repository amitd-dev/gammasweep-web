import Link from "next/link"
import Image from "next/image"
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
              <span className="text-primary">B2B Turnkey</span> <br className="hidden lg:block" />
              Sweepstakes Casino Software
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
              Highly innovative & precisely engineered B2B turnkey sweepstakes
              software that guarantees authentic casino-like experiences.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="text-lg px-8 h-12">
                <Link href="#contact">Book Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 h-12">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          
          {/* Image container with effects */}
          <div className="relative mx-auto w-full max-w-[600px]">
            {/* Animated gradient glow background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-75 blur-2xl animate-pulse rounded-xl" />
            
            {/* Rotating gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl opacity-50 animate-spin-slow" 
                 style={{ animationDuration: '3s' }} />
            
            {/* Main image container */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-primary/20 bg-muted/50 backdrop-blur-sm">
              <Image 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
                alt="Casino Gaming Platform"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent pointer-events-none" />
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" 
                     style={{ animationDuration: '2s' }} />
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/50 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/50 rounded-br-xl" />
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute top-1/4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse" 
                 style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
