import type { Metadata } from "next";
import { Gem, Sparkles, Heart, Shield, Target, Eye, Zap, Scale, Smile } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { companyInfo } from "@/data/company";
import { milestones } from "@/data/company";

const iconMap: Record<string, React.ElementType> = {
  Gem,
  Sparkles,
  Heart,
  Shield,
  Zap,
  Scale,
  Smile,
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
                「祝赫」，寓意着对每一位女性的美好祝愿——愿你光芒万丈，赫赫生辉。
                我们相信，每一位女性都值得拥有让自己闪闪发光的服饰，都值得被认真对待、被用心呵护。
              </p>
              <p>
                从一针一线的匠心启蒙，到如今的高端女装品牌，二十余年的坚守源于一个简单的信念：
                让服饰成为女性感知爱、表达自信的媒介，陪伴每一次智慧成长与勇敢绽放。
              </p>
              <p>
                祝赫立志成为一家「因爱而生」的幸福企业，不仅为客户创造美的体验，
                更希望与每一位伙伴共同成长，在公平与快乐的土壤上，收获属于我们的阳光人生。
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

      {/* 价值观·扬善 */}
      <section className="py-6 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">价值观·扬善</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              我们的核心是以利他之心和绝对坦诚，勇敢创新，在公平的土壤上，收获共同成长与快乐
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {companyInfo.brandValues.map((value, index) => {
              const Icon = iconMap[value.icon] || Gem;
              return (
                <Card
                  key={index}
                  className="group rounded-lg md:rounded-2xl shadow-card hover:shadow-card-hover
                    transition-all duration-300 hover:-translate-y-1
                    border border-border/50 overflow-hidden"
                >
                  <CardContent className="p-3 md:p-6 lg:p-8 text-center">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:bg-primary/15 transition-colors">
                      <Icon className="h-5 w-5 md:h-7 md:w-7 text-primary" />
                    </div>
                    <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-2">
                      {value.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
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
