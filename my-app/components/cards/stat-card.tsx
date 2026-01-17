interface StatCardProps {
  value: string
  label: string
  description?: string
}

export function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{value}</div>
      {/* 标签使用纯黑 */}
      <div className="text-lg font-medium text-foreground mb-1">{label}</div>
      {/* 描述使用深灰 */}
      {description && <div className="text-sm text-muted-foreground">{description}</div>}
    </div>
  )
}
