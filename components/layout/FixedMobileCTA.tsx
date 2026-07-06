export function FixedMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 px-5 pb-[calc(env(safe-area-inset-bottom)+12px)] md:hidden"
      aria-label="固定CTA"
    >
      <a
        className="mx-auto flex min-h-12 max-w-sm items-center justify-center rounded-full bg-apple-blue px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-apple-hover focus-visible:bg-apple-hover"
        href="/contact"
      >
        無料相談する
      </a>
    </div>
  );
}
