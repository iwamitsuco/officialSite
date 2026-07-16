import { BlogCard } from "@/components/sections/BlogCard";
import type { BlogPost } from "@/types";

type BlogCardCarouselProps = {
  posts: BlogPost[];
  className?: string;
};

export function BlogCardCarousel({ posts, className = "" }: BlogCardCarouselProps) {
  return (
    <div className={`min-w-0 max-w-full overflow-hidden ${className}`}>
      <div
        className="flex max-w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 [-webkit-overflow-scrolling:touch] md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-3"
        aria-label="ブログカード"
      >
        {posts.map((post) => (
          <div className="w-[86%] shrink-0 snap-start sm:w-[48%] md:w-auto md:min-w-0 md:shrink" key={post.slug}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
