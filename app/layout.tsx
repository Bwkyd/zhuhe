import type { Metadata } from "next";
import "./v2.css";
import { Header } from "@/components/v2/header";
import { V2Footer } from "@/components/v2/footer";

export const metadata: Metadata = {
  title: {
    default: "ZHUHE祝赫 - 杭州高端女装领先品牌",
    template: "%s | ZHUHE祝赫",
  },
  description:
    "杭州ZHUHE祝赫服饰官方网站，专注高端女装领域，了解我们的品牌故事，公司团队。",
  keywords: ["ZHUHE祝赫", "高端女装", "杭州", "服装设计", "时尚女装", "品质女装"],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "ZHUHE祝赫",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 思源黑体 - 国内 CDN */}
        <link rel="preconnect" href="https://fonts.loli.net" crossOrigin="anonymous" />
        <link
          href="https://fonts.loli.net/css2?family=Noto+Sans+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <V2Footer />
      </body>
    </html>
  );
}
