import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://u-wow.be/"),
  title: "FA HUA Cultural Objects | Music, Heritage Craft & Gifting",
  description: "Curated cultural keepsakes and gifting collaborations informed by Buddhist-inspired vocal music, Chinese instrumental music, and heritage craft.",
  openGraph: {
    title: "FA HUA Cultural Objects",
    description: "Cultural keepsakes shaped by sound, craft and story.",
    url: "https://u-wow.be/",
    siteName: "FA HUA Cultural Objects",
    locale: "en_GB",
    type: "website",
    images: ["https://u-wow.be/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FA HUA Cultural Objects",
    description: "Music, heritage craft, and considered gifting collaborations.",
    images: ["https://u-wow.be/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
