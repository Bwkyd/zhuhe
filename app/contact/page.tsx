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
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            联系我们
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            期待与您建立联系，共创美好未来
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <Card className="h-full rounded-2xl shadow-card hover:shadow-card-hover
                  transition-all duration-300 hover:-translate-y-1
                  border border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground">
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
            <div className="bg-muted rounded-2xl h-96 flex items-center justify-center border border-border/50">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">地图位置</p>
                <p className="text-sm">{companyInfo.contact.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">关注我们</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              在社交媒体上关注 ZHUHE祝赫服饰，获取最新动态
            </p>
          </div>

          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-card rounded-2xl shadow-card flex items-center justify-center mb-3 border border-border/50">
                <span className="text-muted-foreground text-sm">
                  微信二维码
                </span>
              </div>
              <p className="text-sm font-medium">微信公众号</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-card rounded-2xl shadow-card flex items-center justify-center mb-3 border border-border/50">
                <span className="text-muted-foreground text-sm">
                  抖音二维码
                </span>
              </div>
              <p className="text-sm font-medium">抖音官方号</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Cooperation */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">商务合作</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            如果您对商务合作感兴趣，欢迎通过以下方式与我们联系。
            我们期待与您携手共创美好未来。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-card px-6 py-3 rounded-lg shadow-card border border-border/50">
              <span className="text-muted-foreground">商务邮箱：</span>
              <a
                href="mailto:business@zhuhe.com"
                className="text-primary font-medium hover:underline ml-2"
              >
                business@zhuhe.com
              </a>
            </div>
            <div className="bg-card px-6 py-3 rounded-lg shadow-card border border-border/50">
              <span className="text-muted-foreground">商务电话：</span>
              <a
                href="tel:057188888888"
                className="text-primary font-medium hover:underline ml-2"
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
