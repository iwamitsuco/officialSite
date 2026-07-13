import Link from "next/link";
import { relatedServicesBySlug } from "@/data/internal-links";
import type { Service } from "@/types";

type RelatedServicesProps = {
  currentSlug: Service["slug"];
};

export function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const items = (relatedServicesBySlug[currentSlug] ?? []).filter((item) => item.slug !== currentSlug).slice(0, 2);

  if (items.length === 0) return null;

  return (
    <section className="section-space bg-apple-gray">
      <div className="container-site">
        <h2 className="text-3xl font-semibold text-apple-text">関連サービス</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Link
              className="group block rounded-lg bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
              href={item.href}
              key={item.href}
            >
              <h3 className="text-xl font-semibold text-apple-text group-hover:text-apple-blue">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-apple-sub">{item.description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-apple-blue">
                {item.title}を見る
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
