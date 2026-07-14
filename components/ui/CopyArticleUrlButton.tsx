"use client";

import { useState } from "react";

export function CopyArticleUrlButton() {
  const [status, setStatus] = useState<"idle" | "copied" | "shared">("idle");

  async function copyUrl(url: string) {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  }

  async function handleShare() {
    const url = window.location.href;

    try {
      if ("share" in navigator) {
        await navigator.share({
          title: document.title,
          url
        });
        setStatus("shared");
      } else {
        await copyUrl(url);
        setStatus("copied");
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      await copyUrl(url);
      setStatus("copied");
    }

    window.setTimeout(() => setStatus("idle"), 2200);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        className="inline-flex min-h-10 items-center justify-center rounded-full border border-apple-border bg-white px-4 text-sm font-semibold text-apple-text transition hover:border-apple-blue hover:text-apple-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
        onClick={handleShare}
      >
        記事を共有
      </button>
      {status !== "idle" ? (
        <span className="text-sm font-semibold text-apple-sub" role="status">
          {status === "shared" ? "共有メニューを開きました" : "URLをコピーしました"}
        </span>
      ) : null}
    </div>
  );
}
