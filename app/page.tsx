import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function V2HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section - 优衣库风格：大图+简洁文字 */}
      <section className="relative min-h-[55vh] md:min-h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-4 md:space-y-6 pt-12 md:pt-0">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-normal text-white tracking-wide">
                让优雅随行，美好自然而生
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90">
                做独特的自己，不完美，却闪耀
              </p>
              <p className="text-sm text-white/70">
                为30-45岁的中小个女性打造高品质服饰
              </p>

              <div className="flex flex-row gap-3 justify-center pt-4">
                <Link
                  href="/brand-story"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  品牌故事
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center px-6 py-3 border border-white text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  浏览产品
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌理念 */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900">
              品牌理念
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {companyInfo.values.map((value, index) => (
              <div key={index} className="text-center relative">
                <div className="border-t border-gray-300 mx-auto mb-6 w-16" />
                <h3 className="text-lg md:text-xl font-normal text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 企业实力 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900">
              企业实力
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
            {companyInfo.highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                  {item.number}
                </div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-gray-400">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
            探索更多
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-8">
            了解我们的企业文化、发展历程和专业团队
          </p>
          <div className="flex flex-row gap-3 justify-center">
            <Link
              href="/brand-story"
              className="inline-flex items-center px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              品牌故事
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium hover:border-gray-400 transition-colors"
            >
              认识团队
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
