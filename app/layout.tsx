import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "法华 · FA HUA · 让东方文化点亮世界",
  description: "法华独立文化入口内部审稿版，呈现梵音、文化信物、文明对话与经确认授权方向的 L1-L7。A private review of FA HUA, an independent cultural gateway for sacred sound, cultural objects, civilizational dialogue and the L1-L7 pathway pending final authorisation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
