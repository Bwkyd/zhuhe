"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/products", label: "品质优选" },
  { href: "/brand-story", label: "品牌故事" },
  { href: "/team", label: "公司团队" },
  { href: "/contact", label: "联系我们" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[99999] bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <div className="text-lg lg:text-xl font-medium text-gray-900 tracking-wide">
              ZHUHE祝赫
            </div>
            <div className="text-[10px] text-gray-400 tracking-[0.2em]">
              你的温柔，自有力量
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  pathname === item.href
                    ? "text-gray-900 font-medium"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-200 bg-white border-t border-gray-100",
          open ? "max-h-64" : "max-h-0"
        )}
      >
        <nav className="container mx-auto px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block py-3 text-sm border-b border-gray-100 last:border-0",
                pathname === item.href
                  ? "text-gray-900 font-medium"
                  : "text-gray-500"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
