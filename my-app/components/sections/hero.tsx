import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroProps {
  title: string
  subtitle: string
  description: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* 背景图片 */}
      <Image
        src="/elegant-fashion-studio-with-warm-lighting--profess.jpg"
        alt="祝赫服饰品牌展示"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />

      {/* 内容区域 */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight text-balance">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary mb-4 tracking-wide font-medium">{subtitle}</p>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            {ctaText && (
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary hover:-translate-y-0.5 transition-all duration-300 rounded-lg font-medium"
              >
                <Link href={ctaHref || "#"}>{ctaText}</Link>
              </Button>
            )}
            {secondaryCtaText && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 rounded-lg bg-background/50 backdrop-blur-sm text-foreground"
              >
                <Link href={secondaryCtaHref || "#"}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
