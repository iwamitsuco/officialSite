import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { NewsCard } from "@/components/sections/NewsCard";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { blogPosts } from "@/data/blog";
import { newsPosts } from "@/data/news";
import { services } from "@/data/services";
import { organizationJsonLd, SEOJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "BLOOMIA合同会社 | システム・Web広告・AIで企業を支える",
  description:
    "中小企業・個人事業主向けに、ホームページ制作、業務システム、Web広告、DX支援まで一貫してサポートします。"
});

const problems = [
  "ホームページが古い",
  "Webから問い合わせが来ない",
  "広告を出しても成果が分からない",
  "Excelや紙管理に限界を感じている",
  "AIを使いたいが何から始めればよいか分からない"
];

const reasons = [
  "Web制作から広告運用まで対応",
  "システム開発で業務改善も可能",
  "生成AIやDX導入も相談可能",
  "地域企業に寄り添った提案",
  "小さく始めて拡張できる設計"
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
              システム・Web広告・AIで企業を支える
            </h1>
            <p className="lead mt-6 max-w-2xl">
              中小企業・個人事業主向けに、ホームページ制作、業務システム、Web広告、DX支援まで一貫してサポートします。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">無料で相談する</Button>
              <Button href="/download" variant="secondary">
                資料をダウンロード
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/hero-dashboard.webp"
              alt="Web制作、広告、DX支援を表すミニマルなダッシュボード"
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
          <SectionTitle title="こんなお悩みはありませんか？" description="難しい言葉より、いま困っていることから整理します。" align="center" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {problems.map((problem) => (
              <div className="rounded-lg bg-white p-5 text-center text-sm font-semibold shadow-sm" key={problem}>
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-site">
          <SectionTitle label="Services" title="必要な支援をまとめて相談できます。" description="Web、システム、広告、DXまで、事業の状況に合わせて組み合わせます。" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-apple-gray">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle label="Reason" title="制作だけで終わらない、成果につながるデジタル支援。" />
          <div className="grid gap-4">
            {reasons.map((reason) => (
              <div className="rounded-lg bg-white p-6 text-lg font-semibold shadow-sm" key={reason}>
                {reason}
              </div>
            ))}
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
