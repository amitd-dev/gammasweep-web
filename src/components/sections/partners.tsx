import { Card, CardContent } from "@/components/ui/card"

const partners = Array.from({ length: 8 }).map((_, i) => ({
    name: `Partner ${i + 1}`,
    // In a real app, these would be image URLs
}))

export function Partners() {
  return (
    <section className="py-16 bg-muted/20 border-y">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center mb-8 text-muted-foreground">
            Trusted by Industry Leaders
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale">
            {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center bg-muted h-16 w-32 rounded-lg">
                    <span className="text-muted-foreground font-medium">{partner.name}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

