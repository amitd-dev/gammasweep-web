import { CheckCircle2 } from "lucide-react"

const advantages = [
  "Ready-To-Launch Sweepstakes Solution",
  "On-Demand Customizations",
  "Consultation Services",
  "Low GGR",
  "Legal Support",
  "Certified Developers",
  "Latest Tech Stack",
  "Unmatched Performance",
  "Unparalleled User Experience",
  "Scalable Solution",
  "Post Launch Services",
  "24/7 Customer Support",
]

export function Advantages() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            UNLOCK EXTRAORDINARY ADVANTAGES
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to launch and grow your sweepstakes business.
          </p>
        </div>
        <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="font-medium">{advantage}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

