import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/products", label: "品质优选" },
  { href: "/brand-story", label: "品牌故事" },
  { href: "/team", label: "公司团队" },
  { href: "/contact", label: "联系我们" },
];

export function V2Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* 公司信息 */}
          <div>
            <span className="text-base font-medium text-gray-900 block mb-3">
              ZHUHE祝赫
            </span>
            <p className="text-xs text-gray-500 leading-relaxed mb-2">
              专注高端女装领域
            </p>
            <p className="text-xs text-gray-400">浙江省杭州市临平区</p>
          </div>

          {/* 快捷链接 */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">快捷链接</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">联系我们</h3>
            <div className="flex flex-col space-y-2 text-xs text-gray-500">
              <p>电话：0571-8888-8888</p>
              <p>邮箱：contact@zhuhe.com</p>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2025 ZHUHE祝赫</p>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              浙ICP备2024122005号-1
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
