import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
};

export function createMetadata({ title, description, path = "/", type = "website" }: MetaInput): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString();
  const imageUrl = new URL(siteConfig.ogImage, siteConfig.siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      locale: "ja_JP",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.companyName}のOGP画像`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}
