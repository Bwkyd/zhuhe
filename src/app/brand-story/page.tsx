import type { Metadata } from "next";
import { Gem, Sparkles, Heart, Shield, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { companyInfo } from "@/data/company";
import { milestones } from "@/data/company";

const iconMap: Record<string, React.ElementType> = {
  Gem,
  Sparkles,
  Heart,
  Shield,
};

export const metadata: Metadata = {
  title: "品牌故事",
  description: "了解 ZHUHE祝赫的品牌故事、使命愿景和核心价值观",
};

export default function BrandStoryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            品牌故事
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            了解我们的品牌起源、成长历程和核心价值观
          </p>
        </div>
      </section>

      {/* 品牌起源 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
              品牌起源
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                祝赫服饰诞生于杭州这座充满创新活力的城市。创始团队怀揣着对女装设计的热爱和对时尚的追求，
                在电商直播蓬勃发展的时代背景下，开启了品牌创业之旅。
              </p>
              <p>
                "祝赫"二字，寓意着对每一位女性的美好祝愿。我们相信，每一位女性都值得拥有让自己闪闪发光的服饰。
                我们用心设计每一件衣服，希望它能陪伴女性走过人生的每一个重要时刻。
              </p>
              <p>
                从最初的小团队到如今拥有专业设计师团队，祝赫服饰始终坚持原创设计、品质优先的理念，
                用匠心打造每一件作品，赢得了数十万粉丝的喜爱与信任。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">发展历程</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              见证祝赫服饰的成长与蜕变
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative pl-12 pb-16 last:pb-0"
              >
                {/* 垂直线 */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-[1.125rem] top-8 bottom-0 w-0.5 bg-primary/30" />
                )}

                {/* 节点圆点 */}
                <div
                  className="absolute left-0 top-2 w-9 h-9
                  bg-primary rounded-full border-4 border-background
                  shadow-lg flex items-center justify-center"
                >
                  <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                </div>

                {/* 内容卡片 */}
                <Card
                  className="rounded-2xl shadow-card hover:shadow-card-hover
                  transition-all duration-300 hover:-translate-y-1
                  border border-border/50"
                >
                  <CardContent className="p-6 lg:p-8">
                    <div className="text-sm font-semibold text-primary mb-2 tracking-wide">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使命愿景 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <Card className="rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50">
              <CardContent className="p-8 lg:p-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">我们的使命</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {companyInfo.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50">
              <CardContent className="p-8 lg:p-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">我们的愿景</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {companyInfo.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 价值观 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">核心价值观</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              这些信念指引着我们的每一个决策
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {companyInfo.values.map((value, index) => {
              const Icon = iconMap[value.icon] || Gem;
              return (
                <Card
                  key={index}
                  className="group rounded-2xl shadow-card hover:shadow-card-hover
                    transition-all duration-300 hover:-translate-y-1
                    border border-border/50 overflow-hidden"
                >
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
