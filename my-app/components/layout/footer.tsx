import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const navItems = [
  { label: "首页", href: "/" },
  { label: "企业文化", href: "/culture" },
  { label: "发展历程", href: "/history" },
  { label: "设计团队", href: "/team" },
  { label: "联系我们", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 公司信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              祝赫<span className="text-primary">服饰</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              专注女装电商直播领域，用心打造每一件作品，为女性带来优雅与自信。
            </p>
            <p className="text-sm text-muted-foreground">杭州市临平区</p>
          </div>

          {/* 快捷链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">快捷链接</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">联系我们</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <p>电话：400-xxx-xxxx</p>
              <p>邮箱：contact@zhuhe.com</p>
              <p>地址：杭州市临平区</p>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 祝赫服饰. 保留所有权利.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              浙ICP备2024122005号-1
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
