import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
      <CardContent className="p-8">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
          <Icon className="w-7 h-7 text-primary" />
        </div>

        {/* 标题 - 纯黑 */}
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>

        {/* 描述 - 深灰 */}
        <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
