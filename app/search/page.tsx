import Link from "next/link";
import { Suspense } from "react";
import { SearchBox } from "@/components/search/SearchBox";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { searchSite } from "@/lib/search";
import { createMetadata } from "@/lib/seo";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export const metadata = createMetadata({
  title: "サイト内検索",
  description: "サイト内のサービス、ブログ、お知らせを検索できます。",
  path: "/search"
});

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const results = searchSite(q);

  return (
    <>
      <Breadcrumb items={[{ label: "サイト内検索", href: "/search" }]} />
      <section className="section-space">
        <div className="container-site max-w-4xl">
          <SectionTitle label="Search" title="サイト内検索" description="サービス、ブログ、お知らせから探せます。全角・半角カタカナの揺れにも対応しています。" align="center" />
          <div className="mx-auto mt-8 max-w-xl md:hidden">
            <Suspense>
              <SearchBox defaultValue={q} />
            </Suspense>
          </div>
          <div className="mt-12">
            {q ? (
              <p className="text-sm text-apple-sub">
                「{q}」の検索結果: {results.length}件
              </p>
            ) : (
              <p className="text-sm text-apple-sub">検索語句を入力してください。</p>
            )}
            <div className="mt-6 grid gap-4">
              {results.map((item) => (
                <Link className="rounded-lg border border-apple-border bg-white p-6 transition hover:border-apple-blue" href={item.href} key={`${item.type}-${item.href}`}>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-apple-sub">
                    <span>{item.category}</span>
                    {item.publishedAt ? <span>{item.publishedAt}</span> : null}
                  </div>
                  <h2 className="mt-3 text-xl font-semibold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-apple-sub">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
