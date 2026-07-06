export function FixedMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 px-5 pb-[calc(env(safe-area-inset-bottom)+12px)] md:hidden"
      aria-label="固定CTA"
    >
      <div className="mx-auto max-w-sm rounded-full border border-apple-border bg-white/95 p-1.5 shadow-soft backdrop-blur-xl">
        <a
          className="flex min-h-11 items-center justify-center rounded-full bg-apple-blue px-5 text-sm font-semibold text-white transition hover:bg-apple-hover focus-visible:bg-apple-hover"
          href="/contact"
        >
          無料で相談する
        </a>
      </div>
    </div>
  );
}
