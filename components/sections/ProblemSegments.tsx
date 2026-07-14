"use client";

import { useState } from "react";
import Link from "next/link";

type ProblemLink = {
  label: string;
  href: string;
  primary?: boolean;
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
    label: "既存サイトを改善したい",
    heading: "既存サイトの改善でよくあるお悩み",
    description: "今のホームページや広告の状態を見直し、問い合わせにつながる流れを整理します。",
    items: [
      {
        title: "ホームページが古い",
        description: "デザインやスマートフォン対応が古く、信頼感に影響している可能性があります。",
        links: [{ label: "ホームページを見直す", href: "/services/website", primary: true }]
      },
      {
        title: "Webから問い合わせが来ない",
        description: "ページ構成、CTA、フォーム、集客方法のどこに課題があるかを整理します。",
        links: [
          { label: "導線を改善する", href: "/services/website", primary: true },
          { label: "集客も相談する", href: "/services/web-advertising" }
        ]
      },
      {
        title: "広告を出しても成果が分からない",
        description: "広告の目的、リンク先、成果確認の方法を見直し、改善しやすい状態に整えます。",
        links: [{ label: "Web広告を見直す", href: "/services/web-advertising", primary: true }]
      }
    ]
  },
  {
    id: "new",
    label: "新しくサイトを作りたい",
    heading: "新規事業の立ち上げでよくあるお悩み",
    description: "事業内容や届けたい相手を整理し、必要なページや集客方法を一緒に考えます。",
    items: [
      {
        title: "何を載せればよいか分からない",
        description: "サービス内容、強み、問い合わせまでの流れを整理し、必要な情報をご提案します。",
        links: [{ label: "ホームページ制作を相談する", href: "/services/website", primary: true }]
      },
      {
        title: "LPや告知ページを作りたい",
        description: "商品やサービスに合わせて、問い合わせや申し込みにつながるページ構成を設計します。",
        links: [{ label: "LP制作を相談する", href: "/services/website", primary: true }]
      },
      {
        title: "画像や広告もまとめて準備したい",
        description: "サイト用画像、SNS画像、広告クリエイティブまで、見た目の統一感を整えます。",
        links: [
          { label: "制作・デザインを見る", href: "/services/design", primary: true },
          { label: "Web広告も相談する", href: "/services/web-advertising" }
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

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {activeSegment.items.map((item) => (
            <article className="flex min-h-full flex-col rounded-lg border border-apple-border bg-white p-5 shadow-sm" key={item.title}>
              <div>
                <p className="text-xs font-semibold text-apple-blue">お悩み</p>
                <h4 className="mt-3 text-xl font-semibold leading-[1.35] text-apple-text">{item.title}</h4>
                <p className="card-copy mt-3">{item.description}</p>
              </div>

              <div className="mt-6 grid gap-2 border-t border-apple-border pt-4">
                {item.links.map((link) => (
                  <Link
                    className={`inline-flex min-h-11 items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue ${
                      link.primary
                        ? "bg-apple-blue text-white hover:bg-apple-hover"
                        : "border border-apple-border bg-white text-apple-text hover:border-apple-blue hover:text-apple-blue"
                    }`}
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
