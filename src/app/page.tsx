import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { Features } from "@/components/sections/features"
import { Advantages } from "@/components/sections/advantages"
import { Testimonials } from "@/components/sections/testimonials"
import { Partners } from "@/components/sections/partners"
import { FAQ } from "@/components/sections/faq"
import { ContactForm } from "@/components/sections/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <Advantages />
      <Testimonials />
      <Partners />
      <FAQ />
      <ContactForm />
    </div>
  )
}
