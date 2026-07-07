"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/sections/BlogCard";
import { CategoryFilter } from "@/components/search/CategoryFilter";
import { TagFilter } from "@/components/search/TagFilter";
import { getTagsForCategory } from "@/lib/search";
import { normalizeText } from "@/lib/normalize";
import type { BlogPost } from "@/types";

type BlogFilterListProps = {
  posts: BlogPost[];
  categories: string[];
};

export function BlogFilterList({ posts, categories }: BlogFilterListProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const visibleTags = useMemo(() => getTagsForCategory(posts, category), [posts, category]);
  const filteredTags = selectedTags.filter((tag) => visibleTags.includes(tag));

  function handleCategoryChange(nextCategory: string) {
    setCategory(nextCategory);
    setSelectedTags((current) => current.filter((tag) => getTagsForCategory(posts, nextCategory).includes(tag)));
  }

  function handleTagToggle(tag: string) {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]
    );
  }

  const filteredPosts = posts.filter((post) => {
    const normalizedQuery = normalizeText(query);
    const searchTarget = normalizeText([
      post.title,
      post.description,
      post.category,
      post.tags.join(" "),
      post.body.join(" "),
      post.reading ?? ""
    ].join(" "));
    const queryMatch = normalizedQuery ? searchTarget.includes(normalizedQuery) : true;
    const categoryMatch = category ? post.category === category : true;
    const tagMatch = filteredTags.length > 0 ? filteredTags.every((tag) => post.tags.includes(tag)) : true;
    return queryMatch && categoryMatch && tagMatch;
  });

  return (
    <div className="grid gap-8">
      <div className="grid gap-6 rounded-lg bg-apple-gray p-5">
        <label className="sr-only" htmlFor="blog-search">
          ブログ内を検索
        </label>
        <input
          className="min-h-12 w-full rounded-full border border-apple-border bg-white px-5 text-base text-apple-text placeholder:text-apple-sub focus:border-apple-blue"
          id="blog-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="ブログ内を検索"
        />
        <div className="grid gap-3 border-t border-apple-border pt-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-sm font-semibold text-apple-text">カテゴリ</p>
            <p className="text-xs font-semibold text-apple-sub">大きな分類を1つ選択</p>
          </div>
          <CategoryFilter categories={categories} value={category} onChange={handleCategoryChange} />
        </div>

        <div className="grid gap-3 border-t border-apple-border pt-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-sm font-semibold text-apple-text">タグ</p>
            <p className="text-xs font-semibold text-apple-sub">細かいキーワードを複数選択可</p>
          </div>
          <TagFilter tags={visibleTags} selectedTags={filteredTags} onToggle={handleTagToggle} />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </div>
      {filteredPosts.length === 0 ? <p className="lead">該当する記事がありません。</p> : null}
    </div>
  );
}
