import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-apple-border bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.thumbnail}
          alt={`${post.title}のサムネイル`}
          width={720}
          height={420}
          loading="lazy"
          className="aspect-[12/7] w-full object-cover"
        />
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-apple-sub">
            <span>{post.category}</span>
            <span>{post.publishedAt}</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold leading-snug text-apple-text">{post.title}</h3>
          <p className="mt-3 text-sm leading-7 text-apple-sub">{post.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span className="rounded-full bg-apple-gray px-3 py-1 text-xs text-apple-sub" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
