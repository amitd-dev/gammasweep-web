import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "We wanted to deploy a fully functioning sweepstakes casino in a few weeks and GammaSweep came to our rescue. Their teams also helped us by making some great recommendations and delivered the solution within the provided deadline! Really grateful that we found them in time.",
    author: "Emily Carter",
    role: "Sales Director",
  },
  {
    quote:
      "The teams from GammaSweep were phenomenal! Easy to work with and highly professional. These guys know what they are doing. They understood our needs and made quick customizations. We launched our sweepstakes casino within a couple of weeks! Thank you GammaSweep for your outstanding services!",
    author: "James Wilson",
    role: "Sales Director",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
         <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
            What Our Clients Say
          </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-muted/30 border-none shadow-none">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center gap-6">
                      <Quote className="h-12 w-12 text-primary/20" />
                      <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <p className="font-bold text-lg">{testimonial.author}</p>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

