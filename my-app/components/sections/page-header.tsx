interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{title}</h1>
        {description && <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>}
      </div>
    </section>
  )
}
