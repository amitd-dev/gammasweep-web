import Link from "next/link"
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
          <div className="relative mx-auto w-full max-w-[600px] aspect-video rounded-xl overflow-hidden shadow-2xl border bg-muted/50">
             {/* Placeholder for Video/Image */}
             <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Promo Video Placeholder</p>
                {/* In a real scenario, use an iframe or video tag */}
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

