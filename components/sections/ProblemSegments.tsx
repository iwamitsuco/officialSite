"use client";

import { useState } from "react";
import Link from "next/link";

type ProblemLink = {
  label: string;
  href: string;
};

type ProblemItem = {
  title: string;
  description: string;
  links: ProblemLink[];
};

type ProblemSegment = {
  id: "existing" | "new";
  label: string;
  heading: string;
  description: string;
  items: ProblemItem[];
};

const problemSegments: ProblemSegment[] = [
  {
    id: "existing",
    label: "今ある課題を改善したい",
    heading: "こんなお悩みありませんか？",
    description: "ホームページ、広告、日々の業務など、今の状態を見直して改善しやすい形に整理します。",
    items: [
      {
        title: "ホームページが古い",
        description: "デザインやスマートフォン対応が古く、信頼感に影響している可能性があります。",
        links: [{ label: "ホームページを見直す", href: "/services/website" }]
      },
      {
        title: "Webから問い合わせが来ない",
        description: "ページ構成、CTA、フォーム、集客方法のどこに課題があるかを整理します。",
        links: [
          { label: "導線を改善する", href: "/services/website" },
          { label: "集客も相談する", href: "/services/web-advertising" }
        ]
      },
      {
        title: "広告を出しても成果が分からない",
        description: "広告の目的、リンク先、成果確認の方法を見直し、改善しやすい状態に整えます。",
        links: [{ label: "Web広告を見直す", href: "/services/web-advertising" }]
      },
      {
        title: "雑務を減らしたい",
        description: "日々の入力作業、確認作業、資料作成などを減らせる方法を整理します。",
        links: [
          { label: "業務改善を相談する", href: "/services/dx" },
          { label: "システム開発を見る", href: "/services/system-development" }
        ]
      },
      {
        title: "Excelや紙管理に限界を感じている",
        description: "予約、顧客、在庫、社内情報などの管理方法を見直し、使いやすい形を検討します。",
        links: [
          { label: "企業DXを見る", href: "/services/dx" },
          { label: "システム化を相談する", href: "/services/system-development" }
        ]
      },
      {
        title: "AIを使いたいが何から始めればよいか分からない",
        description: "文章作成、資料作成、問い合わせ対応など、使いやすい範囲から導入を整理します。",
        links: [{ label: "AI活用を相談する", href: "/services/dx" }]
      }
    ]
  },
  {
    id: "new",
    label: "新しく始めたい",
    heading: "こんなお悩みありませんか？",
    description: "新しい事業やサービスを始めるために、必要なページ、集客、管理方法を一緒に整理します。",
    items: [
      {
        title: "何を載せればよいか分からない",
        description: "サービス内容、強み、問い合わせまでの流れを整理し、必要な情報をご提案します。",
        links: [{ label: "ホームページ制作を相談する", href: "/services/website" }]
      },
      {
        title: "LPや告知ページを作りたい",
        description: "商品やサービスに合わせて、問い合わせや申し込みにつながるページ構成を設計します。",
        links: [{ label: "LP制作を相談する", href: "/services/website" }]
      },
      {
        title: "画像や広告もまとめて準備したい",
        description: "サイト用画像、SNS画像、広告クリエイティブまで、見た目の統一感を整えます。",
        links: [
          { label: "制作・デザインを見る", href: "/services/design" },
          { label: "Web広告も相談する", href: "/services/web-advertising" }
        ]
      },
      {
        title: "Web広告で最初の集客を始めたい",
        description: "届けたい相手や目的に合わせて、広告の出し方とリンク先のページを整理します。",
        links: [
          { label: "Web広告を相談する", href: "/services/web-advertising" },
          { label: "LP制作も見る", href: "/services/website" }
        ]
      },
      {
        title: "予約や問い合わせを管理したい",
        description: "問い合わせ後の対応、予約、顧客情報などを管理しやすい仕組みに整えます。",
        links: [
          { label: "システム開発を見る", href: "/services/system-development" },
          { label: "小さく業務改善する", href: "/services/dx" }
        ]
      }
    ]
  }
];

export function ProblemSegments() {
  const [activeId, setActiveId] = useState<ProblemSegment["id"]>("existing");
  const activeSegment = problemSegments.find((segment) => segment.id === activeId) ?? problemSegments[0];

  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <div
          className="grid w-full gap-2 rounded-full border border-apple-border bg-white p-1 shadow-sm sm:inline-grid sm:w-auto sm:grid-cols-2"
          role="tablist"
          aria-label="悩みの種類"
        >
          {problemSegments.map((segment) => {
            const isActive = segment.id === activeId;

            return (
              <button
                aria-selected={isActive}
                className={`min-h-12 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue md:text-base ${
                  isActive ? "bg-apple-blue text-white shadow-sm" : "bg-white text-apple-text hover:bg-apple-gray"
                }`}
                key={segment.id}
                role="tab"
                type="button"
                onClick={() => setActiveId(segment.id)}
              >
                {segment.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-apple-border bg-white/80 p-5 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-semibold leading-[1.3] text-apple-text md:text-3xl">{activeSegment.heading}</h3>
          <p className="body-copy mt-3">{activeSegment.description}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {activeSegment.items.map((item) => (
            <article className="flex min-h-full flex-col rounded-lg border border-apple-border bg-white p-5 shadow-sm" key={item.title}>
              <div>
                <h4 className="text-xl font-semibold leading-[1.35] text-apple-text">{item.title}</h4>
                <p className="card-copy mt-3">{item.description}</p>
              </div>

              <div className="mt-6 grid gap-2 border-t border-apple-border pt-4">
                {item.links.map((link) => (
                  <Link
                    className="inline-flex min-h-11 items-center justify-between rounded-lg border border-apple-border bg-white px-4 py-3 text-sm font-semibold text-apple-text transition hover:border-apple-blue hover:text-apple-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
                    href={link.href}
                    key={`${item.title}-${link.href}-${link.label}`}
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
