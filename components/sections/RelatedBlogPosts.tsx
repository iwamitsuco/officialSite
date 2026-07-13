import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { serviceBlogCategories } from "@/data/internal-links";
import type { Service } from "@/types";

type RelatedBlogPostsProps = {
  serviceSlug: Service["slug"];
};

export function RelatedBlogPosts({ serviceSlug }: RelatedBlogPostsProps) {
  const categories = serviceBlogCategories[serviceSlug] ?? [];
  const posts = blogPosts
    .filter((post) => categories.includes(post.category))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="section-space">
      <div className="container-site">
        <h2 className="text-3xl font-semibold text-apple-text">関連する記事</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              className="group block rounded-lg border border-apple-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-apple-sub">
                <span>{post.category}</span>
                <time>{post.publishedAt}</time>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-apple-text group-hover:text-apple-blue">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-apple-sub">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
