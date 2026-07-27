import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "法华文化信物 · 东方声音、华乐与非遗工艺",
  description: "围绕梵音、华乐与东方美学，策展腕表、声音卡、非遗器物与礼赠组合，为个人珍藏、文化礼赠、渠道合作和文化机构共创提供专场作品。",
  openGraph: {
    title: "法华文化信物 · FA HUA Cultural Objects",
    description: "把一段东方声音，留成可以珍藏与传承的文化信物。",
    url: "https://oriordangissy-boop.github.io/fahua/",
    siteName: "法华文化信物",
    locale: "zh_CN",
    type: "website",
    images: ["https://oriordangissy-boop.github.io/fahua/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "法华文化信物 · FA HUA Cultural Objects",
    description: "东方声音、华乐与非遗工艺的文化信物与合作专场。",
    images: ["https://oriordangissy-boop.github.io/fahua/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
