import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { newsPosts } from "@/data/news";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/services", "/blog", "/news", "/contact", "/company", "/privacy"];
  const servicePaths = services.map((service) => `/services/${service.slug}`);
  const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`);
  const newsPaths = newsPosts.map((post) => `/news/${post.slug}`);

  return [...staticPaths, ...servicePaths, ...blogPaths, ...newsPaths].map((path) => ({
    url: new URL(path, siteConfig.siteUrl).toString(),
    lastModified: new Date()
  }));
}
