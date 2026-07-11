import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "website-renewal-check",
    title: "ホームページを見直す前に確認したい5つのこと",
    description: "問い合わせにつながるサイトへ整えるための基本ポイントを紹介します。",
    body: [
      "ホームページは作って終わりではありません。事業内容、強み、問い合わせ導線が今の状況に合っているかを定期的に見直すことが大切です。",
      "特にスマホ表示、電話導線、資料ダウンロード、フォームの分かりやすさは成果に直結します。",
      "まずはトップページで何を相談できる会社なのかが伝わるかを確認しましょう。"
    ],
    category: "ホームページ制作",
    tags: ["SEO・検索対策", "地域ビジネス", "中小企業"],
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-24",
    thumbnail: "/images/insight-website.webp",
    reading: "ほーむぺーじ みなおし"
  },
  {
    slug: "excel-dx-first-step",
    title: "Excel業務を軽くするDXの始め方",
    description: "大きなシステム化の前に、現場で始めやすい改善方法を整理します。",
    body: [
      "DXは大きな投資から始める必要はありません。入力の重複、転記、集計作業を見直すだけでも効果があります。",
      "今使っているExcelの役割を整理し、残すものとシステム化するものを分けると進めやすくなります。",
      "小さな改善を積み重ねることで、社内に負担の少ないDXができます。"
    ],
    category: "DX・業務改善",
    tags: ["業務改善", "AI活用", "中小企業"],
    publishedAt: "2026-06-12",
    thumbnail: "/images/insight-dx.webp",
    reading: "えくせる でぃーえっくす"
  },
  {
    slug: "local-web-ad-start",
    title: "地域企業がWeb広告を始める時の考え方",
    description: "Google広告やSNS広告を始める前に決めておきたい目的と導線の話です。",
    body: [
      "Web広告は、出稿する前の準備が大切です。どんな人に、何を見せて、どこへ案内するのかを決めます。",
      "広告だけでなく、受け皿となるLPや問い合わせフォームも整えると成果を確認しやすくなります。",
      "最初は小さな予算で検証し、反応を見ながら改善していきましょう。"
    ],
    category: "Web広告",
    tags: ["Google広告", "Meta広告", "地域ビジネス"],
    publishedAt: "2026-06-02",
    thumbnail: "/images/insight-ad.webp",
    reading: "うぇぶこうこく"
  },
  {
    slug: "ai-business-use",
    title: "生成AIを仕事で使う前に決めること",
    description: "安全にAI活用を始めるため、用途とルールを先に整理しましょう。",
    body: [
      "生成AIは便利ですが、何に使うかを決めないまま導入すると定着しにくくなります。",
      "文章作成、問い合わせ対応、資料作成など、効果が見えやすい業務から始めるのがおすすめです。",
      "社内ルールとチェック方法を用意すると安心して使えます。"
    ],
    category: "生成AI",
    tags: ["AI活用", "業務改善", "中小企業"],
    publishedAt: "2026-05-26",
    thumbnail: "/images/insight-ai.webp",
    reading: "せいせいえーあい"
  }
];

export const blogCategories = ["システム開発", "ホームページ制作", "Web広告", "DX・業務改善", "生成AI", "デザイン", "お知らせ"];
export const blogTags = ["Google広告", "Meta広告", "SEO・検索対策", "ECサイト", "業務改善", "AI活用", "地域ビジネス", "中小企業"];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
