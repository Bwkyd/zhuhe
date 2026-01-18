"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/brand-story", label: "品牌故事" },
  { href: "/team", label: "设计团队" },
  { href: "/contact", label: "联系我们" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "v2-header fixed top-0 left-0 right-0 z-[99999] transition-all duration-300 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl lg:text-2xl font-semibold text-foreground tracking-wide font-brand hover:opacity-80 transition-opacity"
          >
            ZHUHE祝赫
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base text-foreground/80 hover:text-foreground transition-all duration-200 whitespace-nowrap",
                  "relative after:absolute after:bottom-[-4px] after:left-0",
                  "after:w-0 after:h-[2px] after:bg-primary",
                  "after:transition-all after:duration-300",
                  "hover:after:w-full",
                  pathname === item.href && "text-primary font-medium after:w-full"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">打开菜单</span>
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background border-b border-border",
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-b-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors py-2 px-3 rounded-lg",
                pathname === item.href
                  ? "text-primary bg-primary/5"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted"
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
