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
      {/* Hero Section - 模仿dongmu.cc设计 */}
      <section className="relative min-h-[55vh] md:min-h-[95vh] overflow-hidden">
        {/* 背景图片 - 清晰明亮 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.jpeg')",
          }}
        />
        {/* 轻微渐变叠加 - 保证文字可读性 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />

        {/* 内容区域 - 垂直居中 */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 pt-12 md:pt-0">
              {/* 品牌标语 - 主标题 */}
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide">
                让优雅随行，美好自然而生
              </h1>

              {/* 副标题 */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/95">
                做独特的自己，不完美，却闪耀
              </p>

              {/* 描述文字 */}
              <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
                为30-45岁的中小个女性打造高品质服饰
              </p>

              {/* 按钮区域 */}
              <div className="flex flex-row gap-3 md:gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="default"
                  className="bg-primary hover:bg-primary text-primary-foreground
                    hover:-translate-y-0.5 transition-transform duration-300 rounded-lg
                    text-sm md:text-base px-4 md:px-6"
                >
                  <Link href="/brand-story">
                    品牌故事{" "}
                    <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="default"
                  variant="outline"
                  className="border-2 border-white/50 text-white bg-transparent
                    hover:bg-white/10 hover:text-white
                    hover:-translate-y-0.5 transition-transform duration-300 rounded-lg
                    text-sm md:text-base px-4 md:px-6"
                >
                  <Link href="/team">认识团队</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌理念 Section */}
      <section className="pt-8 pb-6 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              品牌理念
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              我们坚持的设计哲学，体现在每一个细节之中
            </p>
          </div>

          <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8">
            {companyInfo.values.map((value, index) => {
              const Icon = iconMap[value.icon] || Gem;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden rounded-lg md:rounded-2xl
                    bg-card shadow-sm hover:shadow-card-hover
                    transition-all duration-300 hover:-translate-y-1
                    border border-border/50"
                >
                  <CardContent className="p-3 md:p-8 flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-0">
                    {/* 图标 */}
                    <div
                      className="w-8 h-8 md:w-14 md:h-14 rounded-md md:rounded-xl bg-primary/10
                      flex items-center justify-center flex-shrink-0 md:mb-6
                      group-hover:bg-primary/15 transition-colors"
                    >
                      <Icon className="w-4 h-4 md:w-7 md:h-7 text-primary" />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* 标题 */}
                      <h3 className="text-sm md:text-xl font-semibold text-foreground">
                        {value.title}
                      </h3>

                      {/* 描述 */}
                      <p className="text-xs md:text-base text-muted-foreground leading-snug md:leading-relaxed md:mt-3">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 企业实力 Section */}
      <section className="pt-6 pb-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              企业实力
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              深耕高端女装领域，用心打造每一件作品
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
            {companyInfo.highlights.map((item, index) => (
              <div key={index} className="text-center p-3 md:p-6">
                <div className="text-2xl md:text-5xl font-bold text-primary mb-1 md:mb-2">
                  {item.number}
                </div>
                <div className="text-sm md:text-lg font-medium text-foreground mb-0.5 md:mb-1">
                  {item.label}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-6 pb-8 md:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            探索更多
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-4 md:mb-8">
            了解我们的企业文化、发展历程和专业团队
          </p>
          <div className="flex flex-row gap-3 md:gap-4 justify-center">
            <Button
              asChild
              size="default"
              className="bg-primary hover:bg-primary text-primary-foreground
                hover:-translate-y-0.5 transition-transform duration-300 rounded-lg
                text-sm md:text-base px-4 md:px-6"
            >
              <Link href="/brand-story">
                品牌故事{" "}
                <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="default"
              variant="outline"
              className="border-2 border-primary/30
                hover:!bg-background hover:!text-foreground
                hover:-translate-y-0.5 transition-transform duration-300 rounded-lg
                text-sm md:text-base px-4 md:px-6"
            >
              <Link href="/team">认识团队</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
