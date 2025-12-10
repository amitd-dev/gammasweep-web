import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MonitorPlay, Users, Settings, Database, Gift, ShieldCheck, BarChart3, Coins, Wallet, Globe } from "lucide-react"

const features = [
  {
    title: "Player Management Tools",
    icon: Users,
    description: "Comprehensive tools to manage player accounts, verification, and activity.",
  },
  {
    title: "Casino Management Tools",
    icon: MonitorPlay,
    description: "Full control over games, limits, and casino configurations.",
  },
  {
    title: "CRM Tools",
    icon: Database,
    description: "Integrated CRM to boost retention and manage customer relationships.",
  },
  {
    title: "Content Management Systems",
    icon: Settings,
    description: "Manage website content, banners, and promotions easily.",
  },
  {
    title: "Bonus Management Tools",
    icon: Gift,
    description: "Create and manage flexible bonus campaigns and rewards.",
  },
  {
    title: "Admin Dashboard",
    icon: MonitorPlay,
    description: "Centralized dashboard for real-time monitoring and control.",
  },
  {
    title: "Reports & Analytics",
    icon: BarChart3,
    description: "Deep insights into performance, revenue, and player behavior.",
  },
  {
    title: "Anti-fraud Systems",
    icon: ShieldCheck,
    description: "Advanced security measures to detect and prevent fraud.",
  },
  {
    title: "Coin Subscription Packages",
    icon: Coins,
    description: "Flexible coin packages and subscription models.",
  },
  {
    title: "Alternate Mode of Entry",
    icon: Wallet,
    description: "Compliant AMOE implementation for sweepstakes models.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            GAME-CHANGING FEATURES
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Power-packed performance with a comprehensive suite of tools designed for success.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 hover:bg-card transition-colors">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

