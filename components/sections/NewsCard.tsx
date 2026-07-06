import Link from "next/link";
import type { NewsPost } from "@/types";

type NewsCardProps = {
  post: NewsPost;
};

export function NewsCard({ post }: NewsCardProps) {
  return (
    <article className="border-b border-apple-border py-6">
      <Link className="group grid gap-3 md:grid-cols-[140px_1fr]" href={`/news/${post.slug}`}>
        <time className="text-sm text-apple-sub">{post.publishedAt}</time>
        <div>
          <h3 className="text-lg font-semibold text-apple-text group-hover:text-apple-blue">{post.title}</h3>
          <p className="mt-2 text-sm leading-7 text-apple-sub">{post.description}</p>
        </div>
      </Link>
    </article>
  );
}
