"use client";

import { useRef } from "react";
import { BlogCard } from "@/components/sections/BlogCard";
import type { BlogPost } from "@/types";

type BlogCardCarouselProps = {
  posts: BlogPost[];
  className?: string;
};

export function BlogCardCarousel({ posts, className = "" }: BlogCardCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollCards(direction: "prev" | "next") {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const amount = carousel.clientWidth * 0.86;
    carousel.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth"
    });
  }

  return (
    <div className={className}>
      <div className="mb-3 flex justify-end gap-2 md:hidden" aria-label="ブログカードの横送り">
        <button
          aria-label="前の記事カードを見る"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-apple-blue text-xl font-semibold text-white shadow-sm transition hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
          type="button"
          onClick={() => scrollCards("prev")}
        >
          &lt;
        </button>
        <button
          aria-label="次の記事カードを見る"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-apple-blue text-xl font-semibold text-white shadow-sm transition hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
          type="button"
          onClick={() => scrollCards("next")}
        >
          &gt;
        </button>
      </div>
      <div
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
        ref={carouselRef}
      >
        {posts.map((post) => (
          <div className="min-w-[84%] snap-start sm:min-w-[46%] md:min-w-0" key={post.slug}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
