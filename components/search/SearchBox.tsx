"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

type SearchBoxProps = {
  defaultValue?: string;
  compact?: boolean;
  placeholder?: string;
  onSearch?: () => void;
};

export function SearchBox({ defaultValue = "", compact = false, placeholder = "サイト内検索", onSearch }: SearchBoxProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [query, setQuery] = useState(defaultValue || params.get("q") || "");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search");
    onSearch?.();
  }

  function handleClear() {
    setQuery("");
    if (pathname === "/search" && params.get("q")) {
      router.replace("/search");
    }
    inputRef.current?.focus();
  }

  return (
    <form className={`flex ${compact ? "w-48" : "w-full"}`} onSubmit={handleSubmit} role="search">
      <label className="sr-only" htmlFor={compact ? "header-search" : "site-search"}>
        サイト内検索
      </label>
      <div className="relative w-full">
        <input
          className="min-h-11 w-full appearance-none rounded-full border border-apple-border bg-white px-4 pr-20 text-sm text-apple-text placeholder:text-apple-sub focus:border-apple-blue"
          enterKeyHint="search"
          id={compact ? "header-search" : "site-search"}
          name="q"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
        />
        {query ? (
          <button
            aria-label="検索語句を削除"
            className="absolute right-10 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-lg leading-none text-apple-sub transition hover:bg-apple-gray hover:text-apple-text"
            type="button"
            onClick={handleClear}
          >
            ×
          </button>
        ) : null}
        <button
          aria-label="検索する"
          className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-apple-blue text-white transition hover:bg-apple-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
          type="submit"
        >
          <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="11" cy="11" r="6" />
          </svg>
        </button>
      </div>
    </form>
  );
}
