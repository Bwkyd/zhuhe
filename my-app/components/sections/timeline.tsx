import { Card, CardContent } from "@/components/ui/card"

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="relative pl-12 pb-16 last:pb-0">
          {/* 垂直线 */}
          {index !== items.length - 1 && (
            <div className="absolute left-[1.125rem] top-8 bottom-0 w-0.5 bg-primary/30" />
          )}

          {/* 节点圆点 */}
          <div className="absolute left-0 top-2 w-9 h-9 bg-primary rounded-full border-4 border-background shadow-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-primary-foreground rounded-full" />
          </div>

          {/* 内容卡片 */}
          <Card className="rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
            <CardContent className="p-6 lg:p-8">
              <div className="text-sm font-semibold text-primary mb-2 tracking-wide">{item.year}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
