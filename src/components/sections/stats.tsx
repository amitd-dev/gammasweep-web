export function Stats() {
  const stats = [
    { label: "Games", value: "3,000+" },
    { label: "Acclaimed Providers", value: "50+" },
    { label: "Deployments", value: "20+" },
    { label: "Years of Experience", value: "13+" },
    { label: "Professionals", value: "600+" },
  ]

  return (
    <section className="border-y bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="text-4xl font-bold tracking-tight text-primary">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

