"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

type SearchBoxProps = {
  defaultValue?: string;
  compact?: boolean;
};

export function SearchBox({ defaultValue = "", compact = false }: SearchBoxProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [query, setQuery] = useState(defaultValue || params.get("q") || "");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search");
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
          className="min-h-11 w-full rounded-full border border-apple-border bg-white px-4 pr-12 text-sm text-apple-text placeholder:text-apple-sub focus:border-apple-blue"
          id={compact ? "header-search" : "site-search"}
          name="q"
          ref={inputRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="検索"
        />
        {query ? (
          <button
            aria-label="検索語句を削除"
            className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-lg leading-none text-apple-sub transition hover:bg-apple-gray hover:text-apple-text"
            type="button"
            onClick={handleClear}
          >
            ×
          </button>
        ) : null}
      </div>
    </form>
  );
}
