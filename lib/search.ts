import { blogPosts } from "@/data/blog";
import { newsPosts } from "@/data/news";
import { services } from "@/data/services";
import { normalizeText } from "@/lib/normalize";
import type { BlogPost, SearchItem } from "@/types";

export function getSearchItems(): SearchItem[] {
  const serviceItems: SearchItem[] = services.map((service) => ({
    type: "service",
    title: service.title,
    description: service.description,
    href: `/services/${service.slug}`,
    category: "サービス",
    tags: service.features,
    body: [service.hero, ...service.features, ...service.problems, ...service.solutions].join(" ")
  }));

  const blogItems: SearchItem[] = blogPosts.map((post) => ({
    type: "blog",
    title: post.title,
    description: post.description,
    href: `/blog/${post.slug}`,
    category: post.category,
    tags: post.tags,
    body: post.body.join(" "),
    publishedAt: post.publishedAt,
    reading: post.reading
  }));

  const newsItems: SearchItem[] = newsPosts.map((post) => ({
    type: "news",
    title: post.title,
    description: post.description,
    href: `/news/${post.slug}`,
    category: "お知らせ",
    tags: ["お知らせ"],
    body: post.body.join(" "),
    publishedAt: post.publishedAt
  }));

  return [...serviceItems, ...blogItems, ...newsItems];
}

export function searchSite(query: string): SearchItem[] {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) {
    return [];
  }

  return getSearchItems().filter((item) => {
    const target = normalizeText([
      item.title,
      item.description,
      item.category,
      item.tags.join(" "),
      item.body,
      item.reading ?? ""
    ].join(" "));

    return target.includes(normalizedQuery);
  });
}

export function getTagsForCategory(posts: BlogPost[], category: string): string[] {
  const scopedPosts = category ? posts.filter((post) => post.category === category) : posts;
  return Array.from(new Set(scopedPosts.flatMap((post) => post.tags))).sort();
}
