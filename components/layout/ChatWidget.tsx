"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type ChatTopic = {
  id: string;
  label: string;
  reply: string;
};

const chatTopics: ChatTopic[] = [
  {
    id: "website",
    label: "ホームページ制作",
    reply:
      "会社案内サイト、サービス紹介、問い合わせ導線の改善まで対応できます。まずは目的、掲載内容、公開希望時期を整理してご相談ください。"
  },
  {
    id: "system",
    label: "業務システム",
    reply:
      "Excel管理の見直し、予約・顧客・在庫などの管理画面、社内業務の効率化を相談できます。現在の作業内容をもとに無理のない形を提案します。"
  },
  {
    id: "ads",
    label: "Web広告",
    reply:
      "検索広告やSNS広告の初期設計、運用改善、ページ改善まで一緒に考えます。目的と予算感が分かると、始め方を整理しやすくなります。"
  },
  {
    id: "dx",
    label: "DX支援",
    reply:
      "紙、Excel、手作業で時間がかかっている業務を見直し、ツール導入や自動化の進め方を整理します。小さく始める相談も可能です。"
  },
  {
    id: "flow",
    label: "相談の流れ",
    reply:
      "お問い合わせ後に内容を確認し、必要に応じてヒアリング、方針提案、見積もりの順で進めます。まだ内容が固まっていなくても大丈夫です。"
  },
  {
    id: "other",
    label: "その他の相談",
    reply:
      "どの項目に当てはまるか分からない場合や、複数の内容をまとめて相談したい場合も大丈夫です。お問い合わせフォームで内容をお聞かせください。"
  }
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState(chatTopics[0].id);

  const selectedTopic = useMemo(
    () => chatTopics.find((topic) => topic.id === selectedTopicId) ?? chatTopics[0],
    [selectedTopicId]
  );

  useEffect(() => {
    if (!isOpen || !window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-[55] bg-black/30 md:hidden"
          aria-label="チャットを閉じる"
          onClick={() => setIsOpen(false)}
        />
      ) : null}
      <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+16px)] right-4 z-[60] flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {isOpen ? (
        <section
          className="w-[min(calc(100vw-32px),360px)] overflow-hidden rounded-lg border border-apple-border bg-white shadow-soft"
          aria-label="ご相談はこちら"
        >
          <div className="flex items-center justify-between border-b border-apple-border px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-apple-text">ご相談はこちら</p>
              <p className="text-xs text-apple-sub">知りたい内容を選んでください</p>
            </div>
            <button
              type="button"
              className="flex size-9 items-center justify-center rounded-full text-xl leading-none text-apple-sub transition hover:bg-apple-gray hover:text-apple-text"
              onClick={() => setIsOpen(false)}
              aria-label="ご相談パネルを閉じる"
            >
              ×
            </button>
          </div>

          <div className="max-h-[60vh] space-y-4 overflow-y-auto p-4">
            <div className="rounded-lg bg-apple-gray p-4">
              <p className="text-sm font-semibold text-apple-text">こんにちは。何について知りたいですか？</p>
              <p className="mt-2 text-sm leading-6 text-apple-sub">
                このチャットは試作版です。詳しい内容はお問い合わせフォームからご相談ください。
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {chatTopics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  className={`rounded-full border px-3 py-2 text-xs font-semibold transition ${
                    selectedTopic.id === topic.id
                      ? "border-apple-blue bg-apple-blue text-white"
                      : "border-apple-border bg-white text-apple-text hover:border-apple-blue hover:text-apple-blue"
                  }`}
                  onClick={() => setSelectedTopicId(topic.id)}
                >
                  {topic.label}
                </button>
              ))}
            </div>

            <div className="rounded-lg border border-apple-border p-4">
              <p className="text-sm font-semibold text-apple-text">{selectedTopic.label}</p>
              <p className="mt-2 text-sm leading-7 text-apple-sub">{selectedTopic.reply}</p>
            </div>

            <Link
              className="flex min-h-11 items-center justify-center rounded-full bg-apple-blue px-5 text-sm font-semibold text-white transition hover:bg-apple-hover"
              href={`/contact?category=${selectedTopic.id}`}
              onClick={() => setIsOpen(false)}
            >
              無料で相談する
            </Link>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        className="flex min-h-12 items-center gap-2 rounded-full bg-apple-text px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "ご相談パネルを閉じる" : "ご相談パネルを開く"}
      >
        {isOpen ? <span aria-hidden="true">×</span> : null}
        <span>{isOpen ? "閉じる" : "ご相談はこちら"}</span>
      </button>
      </div>
    </>
  );
}
