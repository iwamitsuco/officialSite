import { siteConfig } from "@/lib/site-config";

export function FixedMobileCTA() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-apple-border bg-white/95 text-center text-xs font-semibold shadow-soft backdrop-blur-xl md:hidden" aria-label="固定CTA">
      <a className="flex min-h-16 items-center justify-center text-apple-blue" href={siteConfig.telLink}>
        電話
      </a>
      <a className="flex min-h-16 items-center justify-center text-apple-text" href="/download">
        資料DL
      </a>
      <a className="flex min-h-16 items-center justify-center bg-apple-blue text-white" href="/contact">
        問い合わせ
      </a>
    </nav>
  );
}
