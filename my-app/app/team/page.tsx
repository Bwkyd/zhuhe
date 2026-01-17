import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { teamMembers } from "@/data/company";

export const metadata: Metadata = {
  title: "设计团队",
  description: "认识 ZHUHE祝赫服饰的核心设计团队成员",
};

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            设计团队
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            认识我们充满创意与热情的核心团队
          </p>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              祝赫服饰拥有一支年轻而专业的设计团队，团队成员来自服装设计、时尚营销等不同领域，
              对女装设计有着共同的热爱与追求。我们相信，优秀的团队是创造卓越产品的基础。
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="group rounded-2xl shadow-card hover:shadow-card-hover
                  transition-all duration-300 hover:-translate-y-1
                  border border-border/50 overflow-hidden"
              >
                <CardContent className="p-6 text-center">
                  {/* 头像 */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Avatar className="w-full h-full border-4 border-primary/10
                      group-hover:border-primary/20 transition-colors">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                        {member.name[0]}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* 姓名 */}
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {member.name}
                  </h3>

                  {/* 职位 */}
                  <p className="text-base text-primary mb-3 font-medium">
                    {member.title}
                  </p>

                  {/* 简介 */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            加入我们
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-lg leading-relaxed">
            我们始终欢迎有才华、有热情的人才加入祝赫大家庭。
            如果你热爱时尚、追求创新，期待与我们一起成长，欢迎联系我们。
          </p>
          <p className="text-primary font-medium text-lg">
            简历投递：hr@zhuhe.com
          </p>
        </div>
      </section>
    </>
  );
}
