import type { Service } from "@/types";

const sharedFlow = ["お問い合わせ", "ヒアリング", "ご提案・お見積り", "制作・実装", "公開・運用支援"];

export const services: Service[] = [
  {
    slug: "system-development",
    title: "システム開発",
    shortTitle: "システム",
    description: "業務に合わせたWebアプリ、デスクトップアプリ、管理システムを設計します。",
    hero: "Excelや紙の管理を、使いやすい仕組みに変えます。",
    features: ["Webアプリ", "デスクトップアプリ", "業務管理システム", "顧客管理システム", "予約管理システム", "在庫管理システム"],
    problems: ["Excel管理が限界", "二重入力が多い", "社内ツールが古い", "担当者しか分からない作業がある"],
    solutions: ["業務に合う画面設計", "入力ミスを減らす仕組み", "必要な集計を見える化", "将来拡張しやすい設計"],
    flow: sharedFlow,
    faq: [
      { question: "小さなツールでも相談できますか？", answer: "はい。まずは1つの業務改善から始められます。" },
      { question: "既存のExcelを活かせますか？", answer: "内容を確認し、移行しやすい形をご提案します。" }
    ]
  },
  {
    slug: "website",
    title: "ホームページ制作",
    shortTitle: "ホームページ",
    description: "公式サイト、ブログ、ECサイト、LP（ランディングページ）まで、問い合わせにつながる構成で制作します。",
    hero: "伝わるホームページで、問い合わせの入口を整えます。",
    features: ["ブログ", "オフィシャルサイト", "ECサイト", "LP（ランディングページ）", "リニューアル"],
    problems: ["サイトが古い", "スマホで見づらい", "問い合わせが増えない", "何を載せればよいか分からない"],
    solutions: ["CV導線を整理", "スマホ優先の設計", "SEOを意識したページ構成", "更新しやすい情報設計"],
    flow: sharedFlow,
    faq: [
      { question: "文章の相談もできますか？", answer: "経営者が読んで分かる短い文章に整えます。" },
      { question: "公開後の更新も相談できますか？", answer: "お知らせや記事の運用支援も可能です。" }
    ]
  },
  {
    slug: "design",
    title: "制作・デザイン",
    shortTitle: "デザイン",
    description: "チラシ、バナー、SNS画像など、Webと連動する制作物を整えます。",
    hero: "伝えたいことを、見やすく印象に残る形へ。",
    features: ["チラシ", "バナー", "SNS画像", "広告クリエイティブ", "Webサイト用画像"],
    problems: ["デザインに統一感がない", "広告画像を作れない", "開業準備で必要な制作物が多い"],
    solutions: ["ブランド感の統一", "広告に使いやすい素材設計", "Webと紙をまとめて準備"],
    flow: sharedFlow,
    faq: [
      { question: "チラシだけでも依頼できますか？", answer: "はい。単体制作からWeb連動まで対応します。" },
      { question: "SNS用画像も作れますか？", answer: "SNS投稿や広告用の画像も制作できます。" }
    ]
  },
  {
    slug: "dx",
    title: "企業DX",
    shortTitle: "DX",
    description: "生成AI、簡易ツール、Excel改善で日々の作業を軽くします。",
    hero: "むずかしいDXではなく、現場で使える改善から。",
    features: ["生成AIの導入", "簡易ツール導入", "Excel業務改善", "紙業務のデジタル化", "業務フロー改善"],
    problems: ["何から始めるべきか分からない", "AIを使いたいが不安", "紙の書類が多い", "作業が属人化している"],
    solutions: ["小さな改善から提案", "AI活用の導入支援", "業務フローの見直し", "現場に合わせた運用設計"],
    flow: sharedFlow,
    faq: [
      { question: "AIに詳しくなくても大丈夫ですか？", answer: "用途を整理し、使い方から分かりやすく支援します。" },
      { question: "大きな投資が必要ですか？", answer: "まずは小さく試せる範囲から提案します。" }
    ]
  },
  {
    slug: "web-advertising",
    title: "Web広告",
    shortTitle: "広告",
    description: "Google広告、Yahoo!広告、Meta広告（Instagram・Facebook）、LINE広告の出稿と改善を支援します。",
    hero: "広告を出すだけでなく、成果を見ながら改善します。",
    features: ["Google広告", "Yahoo!広告", "Meta広告（Instagram・Facebook）", "LINE広告"],
    problems: ["広告の出稿方法が分からない", "成果が分からない", "画像やLPが整っていない", "運用する時間がない"],
    solutions: ["目的に合わせた媒体選定", "成果確認の設計", "LPや画像の改善", "運用改善の継続支援"],
    flow: sharedFlow,
    faq: [
      { question: "少額から始められますか？", answer: "はい。目的と予算に合わせて無理のない進め方を提案します。" },
      { question: "広告用のLPも作れますか？", answer: "広告と連動したLP制作にも対応します。" }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
