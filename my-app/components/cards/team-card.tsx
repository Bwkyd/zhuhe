import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TeamMember {
  name: string
  title: string
  avatar: string
  bio?: string
}

export function TeamCard({ name, title, avatar, bio }: TeamMember) {
  return (
    <Card className="group rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 overflow-hidden">
      <CardContent className="p-6 text-center">
        {/* 头像 */}
        <div className="relative w-28 h-28 mx-auto mb-5">
          <Avatar className="w-full h-full border-4 border-primary/10 group-hover:border-primary/20 transition-colors">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary text-2xl">{name[0]}</AvatarFallback>
          </Avatar>
        </div>

        {/* 姓名 */}
        <h3 className="text-xl font-semibold mb-2 text-foreground">{name}</h3>

        {/* 职位 */}
        <p className="text-base text-primary mb-3 font-medium">{title}</p>

        {/* 简介 */}
        {bio && <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>}
      </CardContent>
    </Card>
  )
}
