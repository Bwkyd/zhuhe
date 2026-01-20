import type { Metadata } from "next";
import { Gem, Sparkles, Heart, Shield, Target, Eye, Zap, Scale, Smile } from "lucide-react";
import { companyInfo, milestones } from "@/data/company";

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
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
            品牌故事
          </h1>
          <p className="text-sm text-gray-500">
            了解我们的品牌起源、成长历程和核心价值观
          </p>
        </div>
      </section>

      {/* 品牌起源 */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-normal text-gray-900 mb-6 md:mb-8 text-center">
              品牌起源
            </h2>
            <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-600 leading-relaxed">
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

      {/* 发展历程 Timeline - 简化版 */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-normal text-gray-900 mb-2">
              发展历程
            </h2>
            <p className="text-sm text-gray-500">
              见证祝赫服饰的成长与蜕变
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative pl-8 pb-8 last:pb-0 border-l border-gray-300 ml-3"
              >
                {/* 节点 */}
                <div className="absolute left-0 top-0 w-6 h-6 -translate-x-1/2 bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className="pt-0">
                  <div className="text-xs font-medium text-gray-900 mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使命愿景 */}
      <section className="py-12 md:py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-medium text-gray-900 mb-3">我们的使命</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-medium text-gray-900 mb-3">我们的愿景</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 价值观 */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-normal text-gray-900 mb-2">
              价值观·扬善
            </h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              以利他之心和绝对坦诚，勇敢创新
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            {companyInfo.brandValues.map((value, index) => {
              return (
                <div key={index} className="bg-white p-6 text-center">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
