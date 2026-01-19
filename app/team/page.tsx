import type { Metadata } from "next";
import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { teamMembers } from "@/data/company";

export const metadata: Metadata = {
  title: "公司团队",
  description: "认识 ZHUHE祝赫服饰的核心公司团队成员",
};

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-gradient-to-b from-primary via-primary/80 to-primary/60">
        {/* 光晕装饰 - 手机端隐藏 */}
        <div className="hidden md:block absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        <div className="hidden md:block absolute top-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="hidden md:block absolute bottom-10 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
        <div className="hidden md:block absolute -bottom-10 right-1/3 w-40 h-40 bg-primary/8 rounded-full blur-2xl" />

        <div className="container mx-auto px-2 md:px-4 text-center relative z-10 pt-10 md:pt-0">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-white">
            公司团队
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-none md:max-w-2xl mx-auto px-1 md:px-0">
            认识我们充满创意与热情的核心团队
          </p>

          {/* 底部装饰线 */}
          <div className="flex items-center justify-center gap-2 mt-4 md:mt-6">
            <div className="w-8 md:w-12 h-0.5 bg-white/40 rounded-full" />
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/60 rounded-full" />
            <div className="w-8 md:w-12 h-0.5 bg-white/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-2 md:py-6 lg:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              祝赫服饰拥有一支年轻而专业的团队，团队成员来自服装设计、时尚营销等不同领域，
              对女装设计有着共同的热爱与追求。我们相信，优秀的团队是创造卓越产品的基础。
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="pt-0 pb-2 md:pt-0 md:pb-6 lg:pt-0 lg:pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="group rounded-lg md:rounded-2xl shadow-card hover:shadow-card-hover
                  transition-all duration-300 hover:-translate-y-1
                  border border-border/50 overflow-hidden"
              >
                <CardContent className="p-3 md:p-6 text-center">
                  {/* 头像 */}
                  <div className="relative w-16 h-16 md:w-32 md:h-32 mx-auto mb-2 md:mb-6">
                    <Avatar className="w-full h-full border-2 md:border-4 border-primary/10
                      group-hover:border-primary/20 transition-colors">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-primary/10 text-primary text-base md:text-2xl">
                        {member.name[0]}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* 姓名 */}
                  <h3 className="text-sm md:text-xl font-semibold mb-0.5 md:mb-2 text-foreground">
                    {member.name}
                  </h3>

                  {/* 职位 */}
                  <p className="text-xs md:text-base text-primary mb-1 md:mb-3 font-medium">
                    {member.title}
                  </p>

                  {/* 简介 */}
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed hidden md:block">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-6 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            加入我们
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto mb-3 md:mb-6 leading-relaxed">
            我们始终欢迎有才华、有热情的人才加入祝赫大家庭。
            如果你热爱时尚、追求创新，期待与我们一起成长，欢迎联系我们。
          </p>
          <p className="text-primary font-medium text-sm md:text-lg">
            简历投递：hr@zhuhe.com
          </p>
        </div>
      </section>
    </>
  );
}
