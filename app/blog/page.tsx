import { CTASection } from "@/components/sections/CTASection";
import { BlogFilterList } from "@/components/search/BlogFilterList";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { blogCategories, blogPosts } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "ブログ",
  description: "ホームページ制作、Web広告、DX、生成AIに関する記事を掲載しています。",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ブログ", href: "/blog" }]} />
      <section className="section-space">
        <div className="container-site">
          <SectionTitle label="Blog" title="事業に役立つデジタル情報" description="中小企業の経営者にも分かりやすく、短く整理してお届けします。" align="center" />
          <div className="mt-12">
            <BlogFilterList posts={blogPosts} categories={blogCategories} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
