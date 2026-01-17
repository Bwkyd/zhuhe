"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "v2-header fixed top-0 left-0 right-0 z-[99999] transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - 使用艺术字体 */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <span className="text-xl lg:text-2xl font-bold text-foreground tracking-wide font-artistic">
              ZHUHE
            </span>
            <span className="text-xl lg:text-2xl font-bold text-foreground tracking-wide">
              祝赫
            </span>
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

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">打开菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl font-bold font-artistic">ZHUHE</span>
                    <span className="text-xl font-bold">祝赫</span>
                  </div>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-base font-medium transition-colors py-2",
                        pathname === item.href
                          ? "text-primary"
                          : "text-foreground/80 hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
