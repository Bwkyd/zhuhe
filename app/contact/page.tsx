import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { companyInfo } from "@/data/company";

const contactItems = [
  {
    icon: MapPin,
    label: "公司地址",
    value: companyInfo.contact.address,
    href: null,
  },
  {
    icon: Phone,
    label: "联系电话",
    value: companyInfo.contact.phone,
    href: `tel:${companyInfo.contact.phone.replace(/-/g, "")}`,
  },
  {
    icon: Mail,
    label: "电子邮箱",
    value: companyInfo.contact.email,
    href: `mailto:${companyInfo.contact.email}`,
  },
  {
    icon: MessageCircle,
    label: "微信公众号",
    value: companyInfo.contact.wechat,
    href: null,
  },
];

export const metadata: Metadata = {
  title: "联系我们",
  description: "获取 ZHUHE祝赫服饰的联系方式和地址信息",
};

export default function ContactPage() {
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
            联系我们
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-none md:max-w-2xl mx-auto px-1 md:px-0">
            期待与您建立联系，共创美好未来
          </p>

          {/* 底部装饰线 */}
          <div className="flex items-center justify-center gap-2 mt-4 md:mt-6">
            <div className="w-8 md:w-12 h-0.5 bg-white/40 rounded-full" />
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/60 rounded-full" />
            <div className="w-8 md:w-12 h-0.5 bg-white/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-6 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <Card className="h-full rounded-lg md:rounded-2xl shadow-card hover:shadow-card-hover
                  transition-all duration-300 hover:-translate-y-1
                  border border-border/50">
                  <CardContent className="p-3 md:p-6 text-center">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 md:mb-6">
                      <Icon className="w-5 h-5 md:w-8 md:h-8 text-primary" />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-muted-foreground mb-1 md:mb-2 uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-xs md:text-lg font-semibold text-foreground">
                      {item.value}
                    </p>
                  </CardContent>
                </Card>
              );

              return item.href ? (
                <a key={index} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-muted rounded-lg md:rounded-2xl h-48 md:h-96 flex items-center justify-center border border-border/50">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-2 md:mb-4 opacity-50" />
                <p className="text-sm md:text-lg font-medium">地图位置</p>
                <p className="text-xs md:text-sm">{companyInfo.contact.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-6 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">关注我们</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              在社交媒体上关注 ZHUHE祝赫服饰，获取最新动态
            </p>
          </div>

          <div className="flex justify-center gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-20 h-20 md:w-32 md:h-32 bg-card rounded-lg md:rounded-2xl shadow-card flex items-center justify-center mb-2 md:mb-3 border border-border/50">
                <span className="text-muted-foreground text-xs md:text-sm">
                  微信二维码
                </span>
              </div>
              <p className="text-xs md:text-sm font-medium">微信公众号</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 md:w-32 md:h-32 bg-card rounded-lg md:rounded-2xl shadow-card flex items-center justify-center mb-2 md:mb-3 border border-border/50">
                <span className="text-muted-foreground text-xs md:text-sm">
                  抖音二维码
                </span>
              </div>
              <p className="text-xs md:text-sm font-medium">抖音官方号</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Cooperation */}
      <section className="py-6 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">商务合作</h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 md:mb-8 leading-relaxed">
            如果您对商务合作感兴趣，欢迎通过以下方式与我们联系。
            我们期待与您携手共创美好未来。
          </p>
          <div className="flex flex-row gap-2 md:gap-4 justify-center">
            <div className="bg-card px-3 py-2 md:px-6 md:py-3 rounded-lg shadow-card border border-border/50">
              <span className="text-xs md:text-base text-muted-foreground">商务邮箱：</span>
              <a
                href="mailto:business@zhuhe.com"
                className="text-xs md:text-base text-primary font-medium hover:underline"
              >
                business@zhuhe.com
              </a>
            </div>
            <div className="bg-card px-3 py-2 md:px-6 md:py-3 rounded-lg shadow-card border border-border/50">
              <span className="text-xs md:text-base text-muted-foreground">商务电话：</span>
              <a
                href="tel:057188888888"
                className="text-xs md:text-base text-primary font-medium hover:underline"
              >
                0571-8888-8888
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
