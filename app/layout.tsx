import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { FixedMobileCTA } from "@/components/layout/FixedMobileCTA";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "BLOOMIA合同会社｜宮崎のシステム開発・ホームページ制作・Web広告・DX支援",
    template: "%s｜BLOOMIA合同会社"
  },
  description: "宮崎県を中心にシステム開発・ホームページ制作・Web広告・DX支援・生成AI導入を行うBLOOMIA合同会社の公式サイトです。",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <Suspense>
          <Header />
        </Suspense>
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <FixedMobileCTA />
      </body>
    </html>
  );
}
