import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ContactCardProps {
  icon: LucideIcon
  label: string
  value: string
  description?: string
}

export function ContactCard({ icon: Icon, label, value, description }: ContactCardProps) {
  return (
    <Card className="rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
      <CardContent className="p-8 text-center">
        {/* 图标 */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>

        {/* 标签 */}
        <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">{label}</p>

        {/* 值 */}
        <p className="text-lg font-semibold text-foreground mb-2">{value}</p>

        {/* 描述 */}
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  )
}
