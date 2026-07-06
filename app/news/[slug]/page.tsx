import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getNewsPostBySlug, newsPosts } from "@/data/news";
import { breadcrumbJsonLd, SEOJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

type NewsDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: NewsDetailProps) {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/news/${post.slug}`
  });
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <SEOJsonLd
        data={breadcrumbJsonLd([
          { name: "TOP", href: "/" },
          { name: "お知らせ", href: "/news" },
          { name: post.title, href: `/news/${post.slug}` }
        ])}
      />
      <Breadcrumb items={[{ label: "お知らせ", href: "/news" }, { label: post.title, href: `/news/${post.slug}` }]} />
      <article className="section-space">
        <div className="container-site max-w-3xl">
          <time className="text-sm font-semibold text-apple-sub">{post.publishedAt}</time>
          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-[56px]">{post.title}</h1>
          <p className="lead mt-6">{post.description}</p>
          <div className="mt-12 grid gap-6 text-[17px] leading-9">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      <CTASection />
    </>
  );
}
