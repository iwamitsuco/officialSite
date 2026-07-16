import { BlogCard } from "@/components/sections/BlogCard";
import type { BlogPost } from "@/types";

type BlogCardCarouselProps = {
  posts: BlogPost[];
  className?: string;
};

export function BlogCardCarousel({ posts, className = "" }: BlogCardCarouselProps) {
  return (
    <div className={className}>
      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-3"
        aria-label="ブログカード"
      >
        {posts.map((post) => (
          <div className="min-w-[86%] snap-start sm:min-w-[48%] md:min-w-0" key={post.slug}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
