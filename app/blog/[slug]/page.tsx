import { notFound } from "next/navigation";
import { BlogCard } from "@/components/sections/BlogCard";
import { BlogServiceCTA } from "@/components/sections/BlogServiceCTA";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CopyArticleUrlButton } from "@/components/ui/CopyArticleUrlButton";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { blogPostingJsonLd, breadcrumbJsonLd, SEOJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article"
  });
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 3);

  return (
    <>
      <SEOJsonLd
        data={[
          blogPostingJsonLd(post),
          breadcrumbJsonLd([
            { name: "TOP", href: "/" },
            { name: "ブログ", href: "/blog" },
            { name: post.title, href: `/blog/${post.slug}` }
          ])
        ]}
      />
      <Breadcrumb items={[{ label: "ブログ", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
      <article className="section-space">
        <div className="container-site max-w-3xl">
          <div className="flex flex-wrap gap-2 text-sm font-semibold text-apple-sub">
            <span>{post.category}</span>
            <time>{post.publishedAt}</time>
            {post.updatedAt ? <time>更新 {post.updatedAt}</time> : null}
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-[56px]">{post.title}</h1>
          <p className="lead mt-6">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span className="rounded-full bg-apple-gray px-3 py-1 text-sm text-apple-sub" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-6 text-[17px] leading-9 text-apple-text">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-apple-border pt-6">
            <p className="text-sm font-semibold text-apple-sub">記事を共有</p>
            <CopyArticleUrlButton />
          </div>
          <BlogServiceCTA category={post.category} />
        </div>
      </article>
      {related.length > 0 ? (
        <section className="section-space bg-apple-gray">
          <div className="container-site">
            <h2 className="text-3xl font-semibold">関連記事</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <BlogCard post={item} key={item.slug} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <CTASection />
    </>
  );
}
