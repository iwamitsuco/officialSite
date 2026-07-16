import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { NewsCard } from "@/components/sections/NewsCard";
import { ProblemSegments } from "@/components/sections/ProblemSegments";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { blogPosts } from "@/data/blog";
import { newsPosts } from "@/data/news";
import { services } from "@/data/services";
import { organizationJsonLd, SEOJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "BLOOMIA合同会社 | Webと業務の課題を、まとめて相談できる",
  description:
    "中小企業・個人事業主向けに、ホームページ制作、業務システム、Web広告、DX支援まで一貫してサポートします。"
});

const reasons = [
  {
    icon: "ads",
    title: "サイトを作って集客したい",
    services: ["Web制作", "Web広告"]
  },
  {
    icon: "ai",
    title: "日々の作業を減らしたい",
    services: ["DX支援", "生成AI"]
  }
];

const flow = ["お問い合わせ", "ヒアリング", "ご提案・お見積り", "制作・実装", "公開・運用支援"];

export default function HomePage() {
  return (
    <>
      <SEOJsonLd data={organizationJsonLd()} />
      <section className="overflow-hidden bg-white">
        <div className="container-site grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <div>
            <p className="eyebrow">中小企業のデジタル支援</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-apple-text md:text-[56px]">
              <span className="whitespace-nowrap">Webと業務の課題を、</span>
              <span className="whitespace-nowrap">まとめて相談できる。</span>
            </h1>
            <p className="lead mt-6 max-w-2xl">
              中小企業・個人事業主向けに、ホームページ制作、業務システム、Web広告、DX支援まで一貫してサポートします。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">無料で相談する</Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/hero-dashboard.webp"
              alt="Web制作、Web広告、DX支援を表すミニマルなダッシュボード"
              width={960}
              height={720}
              priority
              className="rounded-lg shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="section-space bg-apple-gray">
        <div className="container-site">
          <SectionTitle
            title="こんなお悩みはありませんか？"
            description="状況に近い項目を選ぶと、関連するサービスを確認できます。"
            align="center"
          />
          <ProblemSegments />
        </div>
      </section>

      <section className="section-space">
        <div className="container-site">
          <SectionTitle label="Services" title="必要な支援をまとめて相談できます。" description="Web、システム、Web広告、DXまで、事業の状況に合わせて組み合わせます。" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard service={service} key={service.slug} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-apple-gray">
        <div className="container-site grid gap-8 lg:grid-cols-[0.95fr_1.25fr] lg:items-start">
          <div>
            <p className="eyebrow">支援の組み合わせ</p>
            <h2 className="mt-4 max-w-[560px] text-3xl font-semibold leading-[1.22] [overflow-wrap:anywhere] text-apple-text md:text-4xl lg:text-[42px]">
              課題に合わせて支援を組み合わせます。
            </h2>
            <p className="body-copy mt-5 max-w-xl">
              Web制作、Web広告、システム開発、DX支援を必要に応じて組み合わせ、事業の状況に合う進め方を整理します。
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[8rem_1fr] lg:items-center">
            <div className="hidden lg:flex">
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-lg border border-emerald-200 bg-white text-emerald-700 shadow-sm">
                <ReasonIcon type="target" />
                <p className="mt-2 text-lg font-semibold">課題</p>
              </div>
            </div>
            <div>
              <div className="grid gap-4">
                {reasons.map((reason) => (
                  <article className="rounded-lg border border-emerald-100 bg-white p-5 shadow-sm" key={reason.title}>
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700" aria-hidden="true">
                        <ReasonIcon type={reason.icon} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold leading-snug text-apple-text">{reason.title}</h3>
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-emerald-200 px-3 py-1 text-sm font-semibold text-emerald-700">
                            {reason.services[0]}
                          </span>
                          <span className="text-lg font-semibold text-emerald-700" aria-hidden="true">
                            +
                          </span>
                          <span className="rounded-full border border-emerald-200 px-3 py-1 text-sm font-semibold text-emerald-700">
                            {reason.services[1]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-6 flex justify-start lg:justify-end">
                <Link
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-apple-blue px-7 py-3 text-base font-semibold text-white transition hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue sm:w-auto"
                  href="/contact"
                >
                  無料で相談する
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-site">
          <SectionTitle label="Flow" title="制作・支援の流れ" align="center" />
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {flow.map((item, index) => (
              <div className="rounded-lg border border-apple-border bg-white p-6 text-center" key={item}>
                <p className="text-sm font-semibold text-apple-blue">Step {index + 1}</p>
                <p className="mt-3 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-apple-gray">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle label="Journal" title="最新ブログ" />
            <Link className="text-sm font-semibold text-apple-blue" href="/blog">
              ブログ一覧へ
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>
          <div className="mt-16">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionTitle label="News" title="お知らせ" />
              <Link className="text-sm font-semibold text-apple-blue" href="/news">
                お知らせ一覧へ
              </Link>
            </div>
            <div className="mt-6 rounded-lg bg-white px-6">
              {newsPosts.slice(0, 3).map((post) => (
                <NewsCard post={post} key={post.slug} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ReasonIcon({ type }: { type: string }) {
  if (type === "ads") {
    return (
      <svg className="h-9 w-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 5h16v14H4z" />
        <path d="M7 15l3-3 2 2 4-5" />
        <path d="M7 8h4" />
      </svg>
    );
  }

  if (type === "system") {
    return (
      <svg className="h-9 w-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 5h16v11H4z" />
        <path d="M9 20h6" />
        <path d="M12 16v4" />
        <path d="M9 10h6" />
        <path d="M12 7v6" />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg className="h-9 w-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3z" />
        <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg className="h-9 w-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M15 9l5-5" />
        <path d="M17 4h3v3" />
      </svg>
    );
  }

  return (
    <svg className="h-9 w-9 text-emerald-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M5 19V9" />
      <path d="M10 19V5" />
      <path d="M15 19v-7" />
      <path d="M20 19V8" />
      <path d="M4 19h17" />
      <path d="M16 8l2-2 2 2" />
    </svg>
  );
}
