import Link from "next/link";
import {
  ArrowRight,
  Gem,
  Sparkles,
  Heart,
  Shield,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { companyInfo } from "@/data/company";

const iconMap: Record<string, React.ElementType> = {
  Gem,
  Sparkles,
  Heart,
  Shield,
};

export default function V2HomePage() {
  return (
    <>
      {/* Hero Section - 全屏占满，无CTA */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-hero pt-16 lg:pt-20">
        {/* 背景图片占位 */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #FAFAFA 0%, #F0F0F0 100%)",
          }}
        />

        {/* 内容区域 - 居中 */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* 品牌标语 - 简洁有力 */}
            <p className="text-3xl lg:text-4xl text-primary mb-8 tracking-wide font-medium">
              让优雅随行，美好自然生长
            </p>

            {/* 简介 - 简洁现代 */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-24">
              做独特的自己，不刻意，却闪耀
            </p>

            {/* 下拉浏览指示器 - 增加底部间距以避免重叠 */}
            <div className="mt-24 mb-16 flex flex-col items-center">
              <div className="scroll-indicator">
                <div className="scroll-indicator-icon">
                  <ChevronDown className="w-6 h-6 text-foreground/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌理念 Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">品牌理念</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              我们坚持的设计哲学，体现在每一个细节之中
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {companyInfo.values.map((value, index) => {
              const Icon = iconMap[value.icon] || Gem;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden rounded-2xl
                    bg-card shadow-card hover:shadow-card-hover
                    transition-all duration-300 hover:-translate-y-1
                    border border-border/50"
                >
                  <CardContent className="p-8">
                    {/* 图标 */}
                    <div
                      className="w-14 h-14 rounded-xl bg-primary/10
                      flex items-center justify-center mb-6
                      group-hover:bg-primary/15 transition-colors"
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* 标题 */}
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {value.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 企业实力 Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">企业实力</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              数年深耕女装电商直播领域，用心打造每一件作品
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {companyInfo.highlights.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl font-bold text-primary mb-2">
                  {item.number}
                </div>
                <div className="text-lg font-medium text-foreground mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">探索更多</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            了解我们的企业文化、发展历程和专业团队
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground
                shadow-lg hover:shadow-primary hover:-translate-y-0.5
                transition-all duration-300 rounded-lg"
            >
              <Link href="/brand-story">
                品牌故事 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:border-primary/50
                hover:bg-primary/5 rounded-lg"
            >
              <Link href="/team">认识团队</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
