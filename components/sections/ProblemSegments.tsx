"use client";

import { useState } from "react";
import Link from "next/link";

type ProblemLink = {
  label: string;
  href: string;
};

type ProblemItem = {
  icon: "website" | "inquiry" | "ad" | "task" | "spreadsheet" | "ai" | "page" | "design" | "system";
  title: string;
  description: string;
  links: ProblemLink[];
};

type ProblemSegment = {
  id: "existing" | "new";
  label: string;
  items: ProblemItem[];
};

const problemSegments: ProblemSegment[] = [
  {
    id: "existing",
    label: "今ある課題を改善したい",
    items: [
      {
        icon: "website",
        title: "ホームページが古い",
        description: "見た目やスマホ対応を見直し、安心して見てもらえる形に整えます。",
        links: [{ label: "ホームページを見直す", href: "/services/website" }]
      },
      {
        icon: "inquiry",
        title: "Webから問い合わせが来ない",
        description: "ページの流れや問い合わせまでの道筋を分かりやすく整えます。",
        links: [
          { label: "導線を改善する", href: "/services/website" },
          { label: "集客も相談する", href: "/services/web-advertising" }
        ]
      },
      {
        icon: "ad",
        title: "広告の成果が分からない",
        description: "広告の目的や見られているページを確認し、改善しやすくします。",
        links: [{ label: "Web広告を見直す", href: "/services/web-advertising" }]
      },
      {
        icon: "task",
        title: "雑務を減らしたい",
        description: "入力、確認、資料作成など、毎日の手間を減らす方法を整理します。",
        links: [
          { label: "業務改善を相談する", href: "/services/dx" },
          { label: "システム開発を見る", href: "/services/system-development" }
        ]
      },
      {
        icon: "spreadsheet",
        title: "Excelや紙管理が大変",
        description: "予約、顧客、在庫などを管理しやすい形に見直します。",
        links: [
          { label: "企業DXを見る", href: "/services/dx" },
          { label: "システム化を相談する", href: "/services/system-development" }
        ]
      },
      {
        icon: "ai",
        title: "AIを使ってみたい",
        description: "文章作成や資料作成など、使いやすいところから始められます。",
        links: [{ label: "AI活用を相談する", href: "/services/dx" }]
      }
    ]
  },
  {
    id: "new",
    label: "新しく始めたい",
    items: [
      {
        icon: "website",
        title: "何を載せればよいか分からない",
        description: "サービス内容や強みを整理し、必要な情報を一緒に考えます。",
        links: [{ label: "ホームページ制作を相談する", href: "/services/website" }]
      },
      {
        icon: "page",
        title: "LPや告知ページを作りたい",
        description: "商品やサービスに合わせて、伝わりやすいページを作ります。",
        links: [{ label: "LP制作を相談する", href: "/services/website" }]
      },
      {
        icon: "design",
        title: "画像や広告もまとめて準備したい",
        description: "サイト用画像、SNS画像、広告画像まで見た目をそろえます。",
        links: [
          { label: "制作・デザインを見る", href: "/services/design" },
          { label: "Web広告も相談する", href: "/services/web-advertising" }
        ]
      },
      {
        icon: "ad",
        title: "Web広告で最初の集客を始めたい",
        description: "届けたい相手に合わせて、広告とリンク先を整理します。",
        links: [
          { label: "Web広告を相談する", href: "/services/web-advertising" },
          { label: "LP制作も見る", href: "/services/website" }
        ]
      },
      {
        icon: "system",
        title: "予約や問い合わせを管理したい",
        description: "予約、問い合わせ、顧客情報を扱いやすく整えます。",
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
          className="relative grid w-full max-w-[420px] grid-cols-2 rounded-full border border-apple-border bg-white p-1 shadow-sm sm:max-w-[520px]"
          role="tablist"
          aria-label="悩みの種類"
        >
          <span
            className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-[#2F6F5E] shadow-sm transition-transform duration-300 ease-out ${
              activeId === "new" ? "translate-x-full" : "translate-x-0"
            }`}
            aria-hidden="true"
          />
          {problemSegments.map((segment) => {
            const isActive = segment.id === activeId;

            return (
              <button
                aria-selected={isActive}
                className={`relative z-10 min-h-11 rounded-full px-3 py-2.5 text-[13px] font-semibold leading-snug transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue sm:px-5 md:text-base ${
                  isActive ? "text-white" : "text-apple-sub hover:text-apple-text"
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

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {activeSegment.items.map((item) => (
            <article className="flex min-h-full flex-col rounded-lg border border-apple-border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft md:p-6" key={item.title}>
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-apple-blue" aria-hidden="true">
                  <ProblemIcon icon={item.icon} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-[1.35] text-apple-text md:text-xl">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.75] text-apple-sub md:text-base">{item.description}</p>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap justify-end gap-x-5 gap-y-2 pt-5">
                {item.links.map((link) => (
                  <Link
                    className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-apple-blue transition hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
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
  );
}

function ProblemIcon({ icon }: { icon: ProblemItem["icon"] }) {
  const commonProps = {
    className: "h-7 w-7",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: "2",
    viewBox: "0 0 24 24"
  };

  if (icon === "inquiry") {
    return (
      <svg {...commonProps}>
        <path d="M5 6h14v9H8l-3 3z" />
        <path d="M9 10h6" />
      </svg>
    );
  }

  if (icon === "ad") {
    return (
      <svg {...commonProps}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 3 5-7" />
      </svg>
    );
  }

  if (icon === "task") {
    return (
      <svg {...commonProps}>
        <path d="M8 6h12" />
        <path d="M8 12h12" />
        <path d="M8 18h12" />
        <path d="m3 6 1 1 2-2" />
        <path d="m3 12 1 1 2-2" />
        <path d="m3 18 1 1 2-2" />
      </svg>
    );
  }

  if (icon === "spreadsheet") {
    return (
      <svg {...commonProps}>
        <path d="M5 4h14v16H5z" />
        <path d="M5 9h14" />
        <path d="M5 14h14" />
        <path d="M10 4v16" />
      </svg>
    );
  }

  if (icon === "ai") {
    return (
      <svg {...commonProps}>
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
        <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
      </svg>
    );
  }

  if (icon === "design") {
    return (
      <svg {...commonProps}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
      </svg>
    );
  }

  if (icon === "system") {
    return (
      <svg {...commonProps}>
        <path d="M4 5h16v14H4z" />
        <path d="m8 9 3 3-3 3" />
        <path d="M13 15h3" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 5h16v14H4z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  );
}
