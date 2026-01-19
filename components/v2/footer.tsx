import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/brand-story", label: "品牌故事" },
  { href: "/team", label: "公司团队" },
  { href: "/contact", label: "联系我们" },
];

export function V2Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-6 md:mb-12">
          {/* 公司信息 */}
          <div>
            <span className="text-base md:text-xl font-semibold tracking-wide font-brand block mb-2 md:mb-4">
              ZHUHE祝赫
            </span>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2 md:mb-4">
              专注高端女装领域，用心打造每一件作品
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">浙江省杭州市临平区</p>
          </div>

          {/* 快捷链接 */}
          <div>
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4">快捷链接</h3>
            <nav className="flex flex-col space-y-1 md:space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4">联系我们</h3>
            <div className="flex flex-col space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <p>电话：0571-8888-8888</p>
              <p>邮箱：contact@zhuhe.com</p>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <Separator className="mb-4 md:mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-muted-foreground">
          <p>© 2025 ZHUHE祝赫. 保留所有权利.</p>
          <div className="flex items-center space-x-3 md:space-x-4 mt-2 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              隐私政策
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              服务条款
            </Link>
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              浙ICP备2024122005号-1
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
