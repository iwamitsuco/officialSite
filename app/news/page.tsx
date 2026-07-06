import { CTASection } from "@/components/sections/CTASection";
import { NewsCard } from "@/components/sections/NewsCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { newsPosts } from "@/data/news";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "お知らせ",
  description: "BLOOMIA合同会社からのお知らせを掲載しています。",
  path: "/news"
});

export default function NewsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "お知らせ", href: "/news" }]} />
      <section className="section-space">
        <div className="container-site max-w-4xl">
          <SectionTitle label="News" title="お知らせ" align="center" />
          <div className="mt-10 rounded-lg border border-apple-border bg-white px-6">
            {newsPosts.map((post) => (
              <NewsCard post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
