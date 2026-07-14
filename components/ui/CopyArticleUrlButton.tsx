"use client";

import { useState } from "react";

export function CopyArticleUrlButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const url = window.location.href;

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

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <button
      type="button"
      className="inline-flex min-h-10 items-center justify-center rounded-full border border-apple-border bg-white px-4 text-sm font-semibold text-apple-text transition hover:border-apple-blue hover:text-apple-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
      onClick={handleCopy}
    >
      {copied ? "URLをコピーしました" : "URLをコピー"}
    </button>
  );
}
