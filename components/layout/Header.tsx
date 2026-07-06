"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SearchBox } from "@/components/search/SearchBox";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-apple-border bg-white/90 backdrop-blur-xl">
      <div className="container-site flex min-h-16 items-center justify-between gap-4">
        <Link className="flex items-center gap-3 font-semibold text-apple-text" href="/" onClick={() => setOpen(false)}>
          <Image
            src={siteConfig.logoImage}
            alt={siteConfig.logoAlt}
            width={36}
            height={36}
            priority
            className="h-9 w-9 object-contain"
          />
          <span>{siteConfig.brandName}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-apple-sub lg:flex" aria-label="グローバルナビ">
          {navLinks.map((link) => (
            <Link className="hover:text-apple-blue" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <SearchBox compact />
          <Button href="/download" variant="secondary">
            資料DL
          </Button>
          <Button href={siteConfig.telLink}>電話</Button>
        </div>

        <button
          aria-controls="mobile-drawer"
          aria-expanded={open}
          aria-label="メニューを開く"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-apple-border text-apple-text lg:hidden"
          type="button"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">メニュー</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {open ? (
        <div
          className="fixed inset-0 top-16 z-50 bg-black/30 lg:hidden"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="ml-auto h-[calc(100vh-4rem)] w-full max-w-sm overflow-y-auto bg-white p-6 shadow-soft"
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="モバイルメニュー"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                aria-label="メニューを閉じる"
                className="min-h-11 min-w-11 rounded-full border border-apple-border text-sm font-semibold"
                type="button"
                onClick={() => setOpen(false)}
              >
                閉じる
              </button>
            </div>
            <div className="mt-6">
              <SearchBox />
            </div>
            <nav className="mt-8 grid gap-2 text-lg font-semibold" aria-label="モバイルナビ">
              {navLinks.map((link) => (
                <Link
                  className="rounded-lg px-4 py-4 hover:bg-apple-gray"
                  href={link.href}
                  key={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 grid gap-3">
              <Button href="/download" variant="secondary" onClick={() => setOpen(false)}>
                資料をダウンロード
              </Button>
              <Button href={siteConfig.telLink} onClick={() => setOpen(false)}>
                電話で相談する
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
