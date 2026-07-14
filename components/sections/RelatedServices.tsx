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
              className="group flex min-h-full flex-col rounded-lg bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
              href={item.href}
              key={item.href}
            >
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-apple-blue" aria-hidden="true">
                  <RelatedServiceIcon slug={item.slug} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-apple-text group-hover:text-apple-blue">{item.title}</h3>
                  <p className="card-copy mt-2">{item.description}</p>
                </div>
              </div>
              <span className="mt-auto inline-flex min-h-11 items-center pt-5 text-sm font-semibold text-apple-blue">
                {item.title}を見る
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedServiceIcon({ slug }: { slug: Service["slug"] }) {
  if (slug === "web-advertising") {
    return (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 3 5-7" />
      </svg>
    );
  }

  if (slug === "design") {
    return (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    );
  }

  if (slug === "dx") {
    return (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 3v18" />
        <path d="M5 8h14" />
        <path d="M5 16h14" />
      </svg>
    );
  }

  if (slug === "system-development") {
    return (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 5h16v14H4z" />
        <path d="m8 9 3 3-3 3" />
        <path d="M13 15h3" />
      </svg>
    );
  }

  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 5h16v14H4z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  );
}
