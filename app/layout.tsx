import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "法华 · FA HUA · 让东方文化点亮世界",
  description: "法华独立文化入口公开审稿版，呈现三民、梵音、标准化与定制化双轨、L1-L7 一级一旗舰及按证据状态标注的 7×7 文化信物地图。A public review of FA HUA, presenting its shared practices, sacred sound, two-path model, one flagship direction per level and an evidence-labelled 7×7 cultural-object map.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
