"use client";

import { useMemo, useRef, useState } from "react";
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
  const [showAllTags, setShowAllTags] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const visibleTags = useMemo(() => getTagsForCategory(posts, category), [posts, category]);
  const filteredTags = selectedTags.filter((tag) => visibleTags.includes(tag));
  const popularTags = useMemo(() => {
    const scopedPosts = category ? posts.filter((post) => post.category === category) : posts;
    const tagCounts = new Map<string, number>();

    scopedPosts.forEach((post) => {
      post.tags.forEach((tag) => tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1));
    });

    return [...visibleTags].sort((a, b) => {
      const countDiff = (tagCounts.get(b) ?? 0) - (tagCounts.get(a) ?? 0);
      return countDiff || a.localeCompare(b, "ja");
    }).slice(0, 10);
  }, [category, posts, visibleTags]);
  const displayedTags = showAllTags
    ? visibleTags
    : Array.from(new Set([...popularTags, ...filteredTags.filter((tag) => visibleTags.includes(tag))]));
  const canToggleAllTags = visibleTags.length > popularTags.length;

  function handleCategoryChange(nextCategory: string) {
    setCategory(nextCategory);
    setShowAllTags(false);
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
        <div className="relative">
          <input
            className="min-h-12 w-full appearance-none rounded-full border border-apple-border bg-white px-5 pr-24 text-base text-apple-text placeholder:text-apple-sub focus:border-apple-blue"
            enterKeyHint="search"
            id="blog-search"
            ref={searchInputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ブログ内を検索"
          />
          {query ? (
            <button
              aria-label="ブログ内検索の語句を削除"
              className="absolute right-11 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-lg leading-none text-apple-sub transition hover:bg-apple-gray hover:text-apple-text"
              type="button"
              onClick={() => {
                setQuery("");
                searchInputRef.current?.focus();
              }}
            >
              ×
            </button>
          ) : null}
          <button
            aria-label="ブログ内を検索"
            className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-apple-blue text-white transition hover:bg-apple-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
            type="button"
            onClick={() => searchInputRef.current?.focus()}
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="11" cy="11" r="6" />
            </svg>
          </button>
        </div>
        <div className="grid gap-3 border-t border-apple-border pt-5">
          <div className="flex flex-wrap items-baseline justify-start gap-x-3 gap-y-1">
            <p className="text-sm font-semibold text-apple-text">カテゴリ</p>
            <p className="text-xs font-semibold text-apple-sub">大きな分類を1つ選択</p>
          </div>
          <CategoryFilter categories={categories} value={category} onChange={handleCategoryChange} />
        </div>

        <div className="grid gap-3 border-t border-apple-border pt-5">
          <div className="flex flex-wrap items-baseline justify-start gap-x-3 gap-y-1">
            <p className="text-sm font-semibold text-apple-text">タグ</p>
            <p className="text-xs font-semibold text-apple-sub">
              {showAllTags ? "すべてのタグを表示中" : "人気タグ10件を表示"}
            </p>
          </div>
          <TagFilter tags={displayedTags} selectedTags={filteredTags} onToggle={handleTagToggle} />
          {canToggleAllTags ? (
            <button
              className="justify-self-start rounded-full border border-apple-border bg-white px-4 py-2 text-sm font-semibold text-apple-text transition hover:border-apple-blue hover:text-apple-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
              type="button"
              onClick={() => setShowAllTags((current) => !current)}
            >
              {showAllTags ? "表示を少なくする" : "すべてのタグを表示"}
            </button>
          ) : null}
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
