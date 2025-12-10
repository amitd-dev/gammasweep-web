import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What does a sweepstakes casino solution include?",
    answer:
      "A complete sweepstakes casino solution includes a dual-currency system, a full suite of casino-style games, player account management, KYC/geo-verification, payment and redemption modules, anti-fraud tools, marketing and loyalty features, and admin dashboards for real-time control.",
  },
  {
    question: "How do sweepstakes casinos work for players?",
    answer:
      "Players utilize virtual currencies in sweepstakes casinos. They use Gold Coins for entertainment gameplay and earn Sweeps Coins through different bonuses. Sweeps Coins can be redeemed for real prizes once players complete basic KYC verification.",
  },
  {
    question: "What types of sweepstakes casino games do you offer?",
    answer:
      "GammaSweep offers a diverse game library that includes slots, table games, card games, keno, bingo, crash, and all other trending game titles. All games are built for smooth performance, customizable for your brand, and fully aligned with sweepstakes compliance standards.",
  },
  {
    question: "How can I start a sweepstakes casino business?",
    answer:
      "You can start a sweepstakes casino quickly with GammaSweep’s turnkey sweepstakes solution, which includes rapid deployment, a compliant dual-currency system, Player Account Management (PAM), KYC/geo-verification, payment and redemption modules, and a full game library.",
  },
  {
    question: "Can I change the branding of my sweepstakes casino?",
    answer:
      "Absolutely. Our turnkey sweepstakes solution allows complete customization of your platform, including branding, logos, color themes, and the overall user interface, so your casino fully reflects your unique vision and identity.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

