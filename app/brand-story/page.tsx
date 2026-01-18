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
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-gradient-to-b from-primary via-primary/80 to-primary/60">
        {/* 光晕装饰 - 手机端隐藏 */}
        <div className="hidden md:block absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        <div className="hidden md:block absolute top-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="hidden md:block absolute bottom-10 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
        <div className="hidden md:block absolute -bottom-10 right-1/3 w-40 h-40 bg-primary/8 rounded-full blur-2xl" />

        <div className="container mx-auto px-2 md:px-4 text-center relative z-10 pt-10 md:pt-0">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-white">
            品牌故事
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-none md:max-w-2xl mx-auto px-1 md:px-0">
            了解我们的品牌起源、成长历程和核心价值观
          </p>

          {/* 底部装饰线 */}
          <div className="flex items-center justify-center gap-2 mt-4 md:mt-6">
            <div className="w-8 md:w-12 h-0.5 bg-white/40 rounded-full" />
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/60 rounded-full" />
            <div className="w-8 md:w-12 h-0.5 bg-white/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* 品牌起源 */}
      <section className="pt-5 pb-4 md:pt-12 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-8 text-center">
              品牌起源
            </h2>
            <div className="space-y-3 md:space-y-6 text-sm md:text-lg text-muted-foreground leading-relaxed">
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
      <section className="py-6 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">发展历程</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              见证祝赫服饰的成长与蜕变
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative pl-8 md:pl-12 pb-6 md:pb-16 last:pb-0"
              >
                {/* 垂直线 */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-[0.875rem] md:left-[1.125rem] top-6 md:top-8 bottom-0 w-0.5 bg-primary/30" />
                )}

                {/* 节点圆点 */}
                <div
                  className="absolute left-0 top-1 md:top-2 w-7 h-7 md:w-9 md:h-9
                  bg-primary rounded-full border-2 md:border-4 border-background
                  shadow-lg flex items-center justify-center"
                >
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-primary-foreground rounded-full" />
                </div>

                {/* 内容卡片 */}
                <Card
                  className="rounded-lg md:rounded-2xl shadow-card hover:shadow-card-hover
                  transition-all duration-300 hover:-translate-y-1
                  border border-border/50"
                >
                  <CardContent className="p-3 md:p-6 lg:p-8">
                    <div className="text-xs md:text-sm font-semibold text-primary mb-1 md:mb-2 tracking-wide">
                      {milestone.year}
                    </div>
                    <h3 className="text-base md:text-2xl font-bold mb-1 md:mb-3 text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
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
      <section className="py-6 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-3 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
            <Card className="rounded-lg md:rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50">
              <CardContent className="p-4 md:p-8 lg:p-10 flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-0">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 md:mb-6">
                  <Target className="h-5 w-5 md:h-7 md:w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-2xl font-bold mb-1 md:mb-4">我们的使命</h3>
                  <p className="text-xs md:text-lg text-muted-foreground leading-relaxed">
                    {companyInfo.mission}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-lg md:rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50">
              <CardContent className="p-4 md:p-8 lg:p-10 flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-0">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 md:mb-6">
                  <Eye className="h-5 w-5 md:h-7 md:w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-2xl font-bold mb-1 md:mb-4">我们的愿景</h3>
                  <p className="text-xs md:text-lg text-muted-foreground leading-relaxed">
                    {companyInfo.vision}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 价值观 */}
      <section className="py-6 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">核心价值观</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              这些信念指引着我们的每一个决策
            </p>
          </div>

          <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {companyInfo.values.map((value, index) => {
              const Icon = iconMap[value.icon] || Gem;
              return (
                <Card
                  key={index}
                  className="group rounded-lg md:rounded-2xl shadow-card hover:shadow-card-hover
                    transition-all duration-300 hover:-translate-y-1
                    border border-border/50 overflow-hidden"
                >
                  <CardContent className="p-3 md:p-6 lg:p-8">
                    <div className="flex gap-3 md:gap-4 items-center md:items-start">
                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-md md:rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                        <Icon className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-xl font-semibold mb-0.5 md:mb-2">
                          {value.title}
                        </h3>
                        <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
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
