import { siteConfig } from "@/lib/site-config";

export function FixedMobileCTA() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-[#101827]/95 px-2 pb-[env(safe-area-inset-bottom)] pt-2 text-center text-xs font-semibold text-white shadow-soft backdrop-blur-xl md:hidden"
      aria-label="固定CTA"
    >
      <a
        className="flex min-h-14 items-center justify-center rounded-lg transition hover:bg-white/10 focus-visible:bg-white/10"
        href={siteConfig.telLink}
      >
        電話
      </a>
      <a
        className="flex min-h-14 items-center justify-center rounded-lg border-x border-white/10 transition hover:bg-white/10 focus-visible:bg-white/10"
        href="/download"
      >
        資料DL
      </a>
      <a
        className="flex min-h-14 items-center justify-center rounded-lg transition hover:bg-white/10 focus-visible:bg-white/10"
        href="/contact"
      >
        問い合わせ
      </a>
    </nav>
  );
}
