import type { BlogPost, Service } from "@/types";

export type RelatedServiceItem = {
  slug: Service["slug"];
  title: string;
  href: string;
  description: string;
};

export type BlogServiceCTA = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

export const relatedServicesBySlug: Partial<Record<Service["slug"], RelatedServiceItem[]>> = {
  website: [
    {
      slug: "web-advertising",
      title: "Web広告",
      href: "/services/web-advertising",
      description: "ホームページ公開後の集客や広告運用も支援します。"
    },
    {
      slug: "design",
      title: "制作・デザイン",
      href: "/services/design",
      description: "サイトと統一感のあるバナーやSNS画像を制作します。"
    }
  ],
  "web-advertising": [
    {
      slug: "website",
      title: "ホームページ制作",
      href: "/services/website",
      description: "広告のリンク先となるホームページやLPの制作・改善にも対応します。"
    },
    {
      slug: "design",
      title: "制作・デザイン",
      href: "/services/design",
      description: "ディスプレイ広告やSNS広告に使用する画像を制作します。"
    }
  ],
  design: [
    {
      slug: "web-advertising",
      title: "Web広告",
      href: "/services/web-advertising",
      description: "制作したバナーやSNS画像を使った広告配信にも対応します。"
    },
    {
      slug: "website",
      title: "ホームページ制作",
      href: "/services/website",
      description: "ホームページやLPの構成・制作についてもご相談いただけます。"
    }
  ],
  dx: [
    {
      slug: "system-development",
      title: "システム開発",
      href: "/services/system-development",
      description: "簡易ツールでは対応できない業務には、専用システムをご提案します。"
    }
  ],
  "system-development": [
    {
      slug: "dx",
      title: "企業DX",
      href: "/services/dx",
      description: "Excel改善や生成AI、簡易ツールなど、小さな業務改善から始められます。"
    },
    {
      slug: "website",
      title: "ホームページ制作",
      href: "/services/website",
      description: "顧客向けのWebページやサービスサイトの制作にも対応します。"
    }
  ]
};

export const serviceBlogCategories: Partial<Record<Service["slug"], string[]>> = {
  website: ["ホームページ制作"],
  "web-advertising": ["Web広告"],
  "system-development": ["システム開発"],
  dx: ["DX・業務改善", "生成AI"],
  design: ["デザイン"]
};

export const blogServiceCtas: Partial<Record<BlogPost["category"], BlogServiceCTA>> = {
  ホームページ制作: {
    title: "ホームページの見直しをご検討中ですか？",
    description: "ページ構成、スマートフォン対応、問い合わせ導線など、現在の課題に合わせて整理します。",
    href: "/services/website",
    linkLabel: "ホームページ制作サービスを見る"
  },
  Web広告: {
    title: "Web広告の出稿や改善をご検討中ですか？",
    description: "広告の目的、リンク先、成果確認の方法まで、現在の状況に合わせて整理します。",
    href: "/services/web-advertising",
    linkLabel: "Web広告サービスを見る"
  },
  システム開発: {
    title: "業務に合うシステム開発をご検討中ですか？",
    description: "予約、顧客、在庫、社内業務など、必要な機能と進め方を整理します。",
    href: "/services/system-development",
    linkLabel: "システム開発サービスを見る"
  },
  "DX・業務改善": {
    title: "業務改善やDXをご検討中ですか？",
    description: "Excel改善、生成AI、簡易ツールなど、小さく始められる改善から整理します。",
    href: "/services/dx",
    linkLabel: "企業DX・業務改善サービスを見る"
  },
  生成AI: {
    title: "生成AIの業務活用をご検討中ですか？",
    description: "文章作成、問い合わせ対応、資料作成など、使いやすい範囲から導入を整理します。",
    href: "/services/dx",
    linkLabel: "企業DX・生成AI活用を見る"
  },
  デザイン: {
    title: "バナーやSNS画像の制作をご検討中ですか？",
    description: "Webサイトや広告と統一感のある画像制作、改善をご相談いただけます。",
    href: "/services/design",
    linkLabel: "制作・デザインサービスを見る"
  }
};
