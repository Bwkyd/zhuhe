import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
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
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
            联系我们
          </h1>
          <p className="text-sm text-gray-500">
            期待与您建立联系，共创美好未来
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-gray-100">
                    <Icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {item.value}
                  </p>
                </div>
              );

              return item.href ? (
                <a key={index} href={item.href} className="block hover:bg-gray-50 transition-colors">
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
      <section className="pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 h-48 md:h-80 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">{companyInfo.contact.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-normal text-gray-900 mb-2">
              关注我们
            </h2>
            <p className="text-sm text-gray-500">
              获取最新动态
            </p>
          </div>

          <div className="flex justify-center gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white border border-gray-200 flex items-center justify-center mb-2">
                <span className="text-gray-400 text-xs">微信二维码</span>
              </div>
              <p className="text-xs text-gray-600">微信公众号</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white border border-gray-200 flex items-center justify-center mb-2">
                <span className="text-gray-400 text-xs">抖音二维码</span>
              </div>
              <p className="text-xs text-gray-600">抖音官方号</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Cooperation */}
      <section className="py-12 md:py-20 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-normal text-gray-900 mb-3">
            商务合作
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
            期待与您携手共创美好未来
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
            <a
              href="mailto:business@zhuhe.com"
              className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-gray-400 transition-colors"
            >
              business@zhuhe.com
            </a>
            <a
              href="tel:057188888888"
              className="px-4 py-2 border border-gray-300 text-gray-700 hover:border-gray-400 transition-colors"
            >
              0571-8888-8888
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
