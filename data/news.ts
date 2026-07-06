import type { NewsPost } from "@/types";

export const newsPosts: NewsPost[] = [
  {
    slug: "official-site-open",
    title: "オフィシャルサイトを公開しました",
    description: "BLOOMIA合同会社のサービス情報を分かりやすくお届けします。",
    body: ["このたび、BLOOMIA合同会社のオフィシャルサイトを公開しました。", "サービス情報やお知らせを随時更新していきます。"],
    publishedAt: "2026-07-01"
  },
  {
    slug: "download-start",
    title: "サービス資料のダウンロード受付を開始しました",
    description: "ホームページ制作やDX支援の概要をまとめた資料をご用意しました。",
    body: ["サービス資料のダウンロード受付を開始しました。", "検討段階の方もお気軽にご利用ください。"],
    publishedAt: "2026-06-25"
  },
  {
    slug: "consultation-start",
    title: "無料相談の受付を開始しました",
    description: "Web、システム、広告、DXに関する相談を受け付けています。",
    body: ["無料相談の受付を開始しました。", "小さなご相談でも、課題に合わせて進め方をご提案します。"],
    publishedAt: "2026-06-18"
  }
];

export function getNewsPostBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((post) => post.slug === slug);
}
