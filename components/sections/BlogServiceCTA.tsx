import Link from "next/link";
import { blogServiceCtas } from "@/data/internal-links";
import type { BlogPost } from "@/types";

type BlogServiceCTAProps = {
  category: BlogPost["category"];
};

export function BlogServiceCTA({ category }: BlogServiceCTAProps) {
  const cta = blogServiceCtas[category];

  if (!cta) return null;

  return (
    <section className="mt-12 rounded-lg bg-apple-gray p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-apple-text">{cta.title}</h2>
      <p className="mt-3 leading-7 text-apple-sub">{cta.description}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-apple-border bg-white px-5 py-2.5 text-sm font-semibold text-apple-text transition hover:border-apple-blue hover:text-apple-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
          href={cta.href}
        >
          {cta.linkLabel}
        </Link>
        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-apple-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-apple-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
          href="/contact"
        >
          無料で相談する
        </Link>
      </div>
    </section>
  );
}
