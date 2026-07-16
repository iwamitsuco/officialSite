import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedBlogPosts } from "@/components/sections/RelatedBlogPosts";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WebAdTypesSection } from "@/components/sections/WebAdTypesSection";
import { breadcrumbJsonLd, faqJsonLd, SEOJsonLd, serviceJsonLd } from "@/lib/jsonld";
import type { Service } from "@/types";

type ServiceDetailPageProps = {
  service: Service;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const isWebsite = service.slug === "website";
  const isWebAdvertising = service.slug === "web-advertising";

  return (
    <>
      <SEOJsonLd
        data={[
          serviceJsonLd(service),
          faqJsonLd(service.faq),
          breadcrumbJsonLd([
            { name: "TOP", href: "/" },
            { name: "サービス", href: "/services" },
            { name: service.title, href: `/services/${service.slug}` }
          ])
        ]}
      />
      <Breadcrumb items={[{ label: "サービス", href: "/services" }, { label: service.title, href: `/services/${service.slug}` }]} />
      <section className="section-space">
        <div className="container-site">
          {isWebAdvertising ? (
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="eyebrow">{service.title}</p>
                <h1 className="mt-5 max-w-3xl text-[34px] font-semibold leading-[1.22] tracking-normal text-apple-text sm:text-4xl md:text-[56px] md:leading-[1.15]">
                  広告を出すだけでなく、
                  <br />
                  成果を見ながら改善します。
                </h1>
                <p className="lead mt-6 max-w-2xl">{service.description}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-apple-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue sm:w-auto"
                    href="/contact"
                  >
                    無料で相談する
                  </Link>
                  <Link
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-apple-border bg-white px-6 py-3 text-sm font-semibold text-apple-text transition hover:border-apple-blue hover:text-apple-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue sm:w-auto"
                    href="#supported-media"
                  >
                    対応媒体を見る
                  </Link>
                </div>
              </div>
              <WebAdvertisingHeroVisual />
            </div>
          ) : (
            <div className="mx-auto max-w-4xl text-center">
              <p className="eyebrow">{service.title}</p>
              <h1 className="mx-auto mt-5 max-w-5xl text-[32px] font-semibold leading-[1.32] [overflow-wrap:anywhere] sm:text-4xl md:text-[56px] md:leading-[1.24]">{service.hero}</h1>
              <p className="lead mt-6">{service.description}</p>
              {isWebsite ? (
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-apple-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue sm:w-auto"
                  href="/contact"
                >
                  無料で相談する
                </Link>
                <Link
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-apple-border bg-white px-6 py-3 text-sm font-semibold text-apple-text transition hover:border-apple-blue hover:text-apple-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue sm:w-auto"
                  href="#website-service-types"
                >
                  制作内容を見る
                </Link>
              </div>
              ) : null}
            </div>
          )}
        </div>
      </section>
      {service.slug === "web-advertising" ? <WebAdTypesSection /> : null}
      {isWebsite ? <WebsiteStrengthSection /> : null}
      {isWebsite ? (
        <WebsiteFeatureSection />
      ) : (
        <section
          className={`section-space bg-apple-gray${isWebAdvertising ? " scroll-mt-24" : ""}`}
          id={isWebAdvertising ? "supported-media" : undefined}
        >
          <div className="container-site">
            <SectionTitle title="対応内容" align="center" />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {service.features.map((feature) => (
                <div className="rounded-lg bg-white p-6 text-center font-semibold shadow-sm" key={feature}>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {isWebsite ? (
        <WebsiteSearchIntentSection />
      ) : isWebAdvertising ? null : (
        <section className="section-space">
          <div className="container-site grid gap-10 md:grid-cols-2">
            <div>
              <SectionTitle title="よくある課題" />
              <ul className="mt-8 grid gap-3">
                {service.problems.map((problem) => (
                  <li className="rounded-lg bg-apple-gray p-5 font-semibold" key={problem}>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle title="解決できること" />
              <ul className="mt-8 grid gap-3">
                {service.solutions.map((solution) => (
                  <li className="rounded-lg border border-apple-border p-5 font-semibold" key={solution}>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
      {service.slug === "website" ? <LandingPageStrategySection /> : null}
      {isWebsite ? <WebsiteMidCta variant="compact" /> : null}
      {isWebsite ? (
        <WebsiteFlowSection />
      ) : (
        <section className="section-space bg-apple-gray">
          <div className="container-site">
            <SectionTitle title="制作・導入の流れ" align="center" />
            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {service.flow.map((item, index) => (
                <div className="rounded-lg bg-white p-6 text-center shadow-sm" key={item}>
                  <p className="text-sm font-semibold text-apple-blue">Step {index + 1}</p>
                  <p className="mt-3 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {isWebsite ? <WebsitePreparationSection /> : null}
      <ServiceSupportLinks serviceSlug={service.slug} />
      <section className="section-space">
        <div className="container-site max-w-4xl">
          <SectionTitle title="よくある質問" align="center" />
          <div className="mt-10">
            <FAQ items={service.faq} />
          </div>
        </div>
      </section>
      <RelatedBlogPosts serviceSlug={service.slug} />
      <RelatedServices currentSlug={service.slug} />
      <CTASection
        title={isWebsite ? "ホームページ制作・リニューアルのご相談はこちら" : undefined}
        description={
          isWebsite
            ? "新規制作、現在のサイトの見直し、制作会社の乗り換えなど、小さなご相談でも構いません。"
            : undefined
        }
      />
    </>
  );
}

function WebAdvertisingHeroVisual() {
  return (
    <div
      className="rounded-lg bg-apple-gray p-5 shadow-sm md:p-8"
      role="img"
      aria-label="広告管理画面、成果グラフ、検索広告のイメージ"
    >
      <div className="rounded-lg bg-white p-5 shadow-soft md:p-7">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="mt-6 flex flex-col gap-5 lg:flex-row">
          <div className="flex-1 rounded-lg bg-blue-50 p-4">
            <p className="text-xs font-semibold text-apple-blue">検索広告</p>
            <div className="mt-3 rounded-lg border border-blue-100 bg-white p-4">
              <p className="text-sm font-semibold text-apple-text">ホームページ制作を相談</p>
              <div className="mt-3 space-y-2">
                <span className="block h-2 w-11/12 rounded-full bg-gray-300" />
                <span className="block h-2 w-8/12 rounded-full bg-gray-200" />
              </div>
              <p className="mt-4 text-xs font-semibold text-apple-blue">広告</p>
            </div>
          </div>
          <div className="flex-1 rounded-lg border border-apple-border bg-white p-4">
            <p className="text-xs font-semibold text-apple-sub">改善レポート</p>
            <div className="mt-5 h-28">
              <svg className="h-full w-full" viewBox="0 0 220 110" fill="none" aria-hidden="true">
                <path d="M10 96H210" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
                <path d="M10 72H210" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 46H210" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 86C36 66 58 73 82 52C105 32 128 44 151 28C171 14 190 22 210 10" stroke="#0071E3" strokeWidth="7" strokeLinecap="round" />
                <circle cx="82" cy="52" r="5" fill="#0071E3" />
                <circle cx="151" cy="28" r="5" fill="#0071E3" />
                <circle cx="210" cy="10" r="5" fill="#0071E3" />
              </svg>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-apple-gray p-3">
                <p className="text-xs text-apple-sub">クリック</p>
                <p className="mt-1 text-lg font-semibold text-apple-text">改善中</p>
              </div>
              <div className="rounded-lg bg-apple-gray p-3">
                <p className="text-xs text-apple-sub">問い合わせ</p>
                <p className="mt-1 text-lg font-semibold text-apple-text">確認</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-full bg-gray-100 p-1">
          <div className="h-3 w-2/3 rounded-full bg-apple-blue" />
        </div>
      </div>
    </div>
  );
}

const websiteStrengths = [
  {
    title: "問い合わせにつながる導線設計",
    description: "ページを見たユーザーが迷わず行動できるよう、問い合わせまでの流れを整理します。"
  },
  {
    title: "SEOを意識したページ構成",
    description: "検索キーワードとユーザーの目的を整理し、必要な情報へたどり着きやすい構成を設計します。"
  },
  {
    title: "Web広告との連携",
    description: "Google広告やSNS広告を利用する場合も、広告の内容と着地ページを一貫して設計できます。"
  },
  {
    title: "公開後の改善にも対応",
    description: "公開後の更新や内容の見直し、問い合わせ導線の改善についても相談できます。"
  }
];

const websiteFeatureItems = [
  { title: "ブログ", description: "情報発信や検索流入を増やすためのブログを制作します。" },
  { title: "オフィシャルサイト", description: "会社やサービスの信頼性を伝える公式サイトを制作します。" },
  { title: "ECサイト", description: "商品を販売するためのネットショップを構築します。" },
  { title: "LP", description: "商品やサービスへの問い合わせに特化したページを制作します。" },
  { title: "リニューアル", description: "古くなったサイトのデザインや構成、スマートフォン対応を見直します。" }
];

const websiteFlowItems = [
  { title: "お問い合わせ", description: "気になる点やご希望をお聞かせください。" },
  { title: "ヒアリング", description: "目的、ターゲット、必要なページを整理します。" },
  { title: "ご提案・お見積り", description: "制作内容、スケジュール、費用をご案内します。" },
  { title: "制作・実装", description: "デザインと内容を確認しながら制作します。" },
  { title: "公開・運用支援", description: "公開後の更新や改善にも対応します。" }
];

function WebsiteStrengthSection() {
  return (
    <section className="section-space bg-apple-gray">
      <div className="container-site">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Website</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.22] [overflow-wrap:anywhere] md:text-5xl">BLOOMIAのホームページ制作</h2>
          <p className="lead mt-5">
            見た目を整えるだけではなく、公開後の集客や問い合わせまで考えて設計します。
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {websiteStrengths.map((item, index) => (
            <article className="rounded-lg bg-white p-6 shadow-sm" key={item.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-sm font-semibold text-apple-blue">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-apple-text">{item.title}</h3>
              <p className="card-copy mt-3">{item.description}</p>
            </article>
          ))}
        </div>
        <WebsiteConversionDiagram />
      </div>
    </section>
  );
}

function WebsiteConversionDiagram() {
  const items = ["検索・SNS・Web広告", "ホームページ", "問い合わせ", "相談・依頼"];

  return (
    <div className="mt-10 rounded-lg border border-apple-border bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-2xl font-semibold text-apple-text">ホームページが問い合わせにつながる流れ</h3>
      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
        {items.map((item, index) => (
          <div className="contents" key={item}>
            <div className="rounded-lg bg-apple-gray p-4 text-center font-semibold text-apple-text">{item}</div>
            {index < items.length - 1 ? (
              <div className="flex justify-center text-apple-blue md:block" aria-hidden="true">
                <span className="hidden md:inline">→</span>
                <span className="md:hidden">↓</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function WebsiteFeatureSection() {
  return (
    <section className="section-space bg-apple-gray" id="website-service-types">
      <div className="container-site">
        <SectionTitle title="対応内容" align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {websiteFeatureItems.map((item) => (
            <article className="rounded-lg bg-white p-6 shadow-sm" key={item.title}>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-apple-blue" aria-hidden="true">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 5h14v14H5z" />
                    <path d="M8 9h8" />
                    <path d="M8 13h5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-apple-text">{item.title}</h3>
                  <p className="card-copy mt-2">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebsiteFlowSection() {
  return (
    <section className="section-space bg-apple-gray">
      <div className="container-site">
        <SectionTitle title="制作の進め方" align="center" />
        <WebsiteThinkingDiagram />
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {websiteFlowItems.map((item, index) => (
            <article className="relative rounded-lg bg-white p-6 shadow-sm" key={item.title}>
              <p className="text-sm font-semibold text-apple-blue">Step {index + 1}</p>
              <h3 className="mt-3 font-semibold text-apple-text">{item.title}</h3>
              <p className="card-copy mt-3">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebsiteThinkingDiagram() {
  const items = ["目的を整理", "届けたい相手を整理", "ページ構成を設計", "制作・公開", "改善・運用"];

  return (
    <div className="mt-10 rounded-lg bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-2xl font-semibold text-apple-text">制作の考え方</h3>
      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
        {items.map((item, index) => (
          <div className="contents" key={item}>
            <div className="rounded-lg border border-apple-border p-4 text-center text-sm font-semibold text-apple-text">{item}</div>
            {index < items.length - 1 ? (
              <div className="flex justify-center text-apple-blue md:block" aria-hidden="true">
                <span className="hidden md:inline">→</span>
                <span className="md:hidden">↓</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function WebsitePreparationSection() {
  const items = ["目的とターゲットを確認", "必要なページと情報を整理", "公開後の集客方法も検討"];

  return (
    <section className="section-space">
      <div className="container-site">
        <div className="rounded-lg border border-apple-border bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <p className="eyebrow">Planning</p>
              <h2 className="mt-3 text-3xl font-semibold leading-[1.22] text-apple-text [overflow-wrap:anywhere]">制作前の整理を大切にしています</h2>
              <p className="body-copy mt-4">
                ホームページは、制作すること自体が目的ではありません。事業内容、届けたい相手、公開後の使い方を確認したうえで、必要なページと情報を整理します。
              </p>
            </div>
            <ul className="grid gap-3">
              {items.map((item) => (
                <li className="rounded-lg bg-apple-gray p-4 font-semibold text-apple-text" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WebsiteMidCta({ variant }: { variant: "compact" | "card" }) {
  const className =
    variant === "compact"
      ? "rounded-lg border border-apple-border bg-white p-6 shadow-sm md:flex md:items-center md:justify-between md:gap-8"
      : "rounded-lg bg-apple-gray p-6 md:p-8";

  return (
    <section className={variant === "compact" ? "pb-16 md:pb-20" : "section-space pt-0"}>
      <div className="container-site">
        <div className={className}>
          <div>
            <h2 className="text-2xl font-semibold text-apple-text [overflow-wrap:anywhere]">ホームページについて相談してみませんか？</h2>
            <p className="body-copy mt-3">
              新規制作、リニューアル、現在の制作会社からの乗り換えなど、状況が固まっていない段階でもご相談いただけます。
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0">
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-apple-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
              href="/contact"
            >
              無料で相談する
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceSupportLinks({ serviceSlug }: { serviceSlug: Service["slug"] }) {
  const items: Partial<Record<Service["slug"], { title: string; description: string; href: string; linkLabel: string }>> = {
    website: {
      title: "ホームページ公開後の集客もサポートします",
      description:
        "ホームページは、公開するだけで必ず見てもらえるとは限りません。検索やSNS、Web広告など、事業や目的に合った方法でユーザーへ届けることも重要です。BLOOMIAでは、ホームページ制作からWeb広告の運用まで一貫してご相談いただけます。",
      href: "/services/web-advertising",
      linkLabel: "Web広告サービスを見る"
    },
    design: {
      title: "制作した画像をWeb広告にも活用できます",
      description:
        "バナーやSNS画像は、制作して終わりではありません。届けたい相手や広告媒体に合わせて、Web広告への展開も支援します。LPの構成・文章・問い合わせ導線を含む制作については、ホームページ制作サービスでご案内しています。",
      href: "/services/web-advertising",
      linkLabel: "Web広告サービスを見る"
    },
    dx: {
      title: "既存ツールでは対応できない業務もご相談ください",
      description:
        "Excelや簡易ツールでの改善が難しい場合は、業務に合わせた専用システムの開発も可能です。",
      href: "/services/system-development",
      linkLabel: "システム開発を見る"
    },
    "system-development": {
      title: "大がかりな開発が必要か分からない場合もご相談ください",
      description:
        "すべてをシステム化するのではなく、Excel改善や生成AI、簡易ツールで解決できる場合もあります。課題に合った規模からご提案します。",
      href: "/services/dx",
      linkLabel: "企業DX・業務改善を見る"
    }
  };
  const item = items[serviceSlug];

  if (!item) return null;

  return (
    <section className="section-space">
      <div className="container-site">
        <div className="rounded-lg border border-apple-border bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-apple-text [overflow-wrap:anywhere]">{item.title}</h2>
          <p className="body-copy mt-4">{item.description}</p>
          <Link
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-apple-border bg-white px-5 py-2.5 text-sm font-semibold text-apple-text transition hover:border-apple-blue hover:text-apple-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
            href={item.href}
          >
            {item.linkLabel}
          </Link>
          {serviceSlug === "design" ? (
            <Link
              className="ml-0 mt-3 inline-flex min-h-11 items-center justify-center rounded-full border border-apple-border bg-white px-5 py-2.5 text-sm font-semibold text-apple-text transition hover:border-apple-blue hover:text-apple-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue sm:ml-3"
              href="/services/website"
            >
              LP・ホームページ制作を見る
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function WebsiteSearchIntentSection() {
  const comparisonItems = [
    {
      type: "homepage",
      title: "ホームページ作成",
      description: "会社やサービスを伝え、問い合わせの入口を整えます。"
    },
    {
      type: "website",
      title: "Webサイト作成",
      description: "Webページ作成など、呼び方が違っても目的に合う構成を整理します。"
    },
    {
      type: "lp",
      title: "LP制作",
      description: "ひとつの商品やサービスに絞り、相談や申し込みにつなげます。"
    }
  ];

  const faqItems = [
    {
      question: "ホームページ作成とWebサイト作成は違いますか？",
      answer:
        "厳密には言葉の使われ方に違いがありますが、相談内容としては近い意味で使われることが多いです。BLOOMIAでは、呼び方よりも目的や必要なページ構成を重視して整理します。"
    },
    {
      question: "LP制作会社やHP制作会社を比較している段階でも相談できますか？",
      answer:
        "はい。比較中の段階でもご相談いただけます。LPが必要なのか、会社サイト全体を整えるべきなのか、目的に合わせて一緒に整理します。"
    }
  ];

  return (
    <section className="section-space bg-apple-gray">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Website Planning</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.28] [overflow-wrap:anywhere] md:text-4xl lg:text-[44px]">
            目的に合うページ構成を整理します。
          </h2>
          <p className="lead mt-5">
            「ホームページ作成」「Webサイト作成」「LP制作」など、探し方の言葉が違っても、必要なのは事業内容が伝わり、問い合わせにつながるページです。
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {comparisonItems.map((item) => (
            <article className="rounded-lg bg-white p-5 shadow-sm md:p-6" key={item.title}>
              <WebsitePageTypeVisual type={item.type} />
              <h3 className="mt-6 text-center text-lg font-semibold leading-snug text-apple-text md:text-xl">{item.title}</h3>
              <p className="card-copy mx-auto mt-3 max-w-sm text-center">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-lg bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-apple-text">どのページが必要か迷っていても大丈夫です</h3>
              <p className="body-copy mt-4">
                LPが必要なのか、会社サイト全体を整えるべきなのか分からない段階でも、目的と伝えたい内容を確認しながら整理します。
              </p>
            </div>
            <WebsitePageChoiceDiagram />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <div className="rounded-lg border border-apple-border p-5" key={item.question}>
                <h4 className="font-semibold text-apple-text">{item.question}</h4>
                <p className="card-copy mt-3">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WebsitePageTypeVisual({ type }: { type: string }) {
  if (type === "homepage") {
    return (
      <div className="rounded-lg border border-blue-100 bg-blue-50/60 p-4" aria-hidden="true">
        <div className="rounded-md bg-white p-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-blue-100 pb-2">
            <div className="h-2 w-16 rounded-full bg-apple-blue" />
            <div className="flex gap-1">
              <span className="h-2 w-7 rounded-full bg-slate-200" />
              <span className="h-2 w-7 rounded-full bg-slate-200" />
              <span className="h-2 w-7 rounded-full bg-apple-blue" />
            </div>
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="h-3 w-24 rounded-full bg-slate-900" />
              <div className="mt-2 h-2 w-20 rounded-full bg-slate-200" />
              <div className="mt-2 h-2 w-28 rounded-full bg-slate-200" />
              <div className="mt-3 h-6 w-20 rounded-full bg-apple-blue" />
            </div>
            <div className="rounded-md bg-blue-100 p-2">
              <div className="h-12 rounded-md bg-white/80" />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-10 rounded-md bg-apple-gray" />
            <div className="h-10 rounded-md bg-apple-gray" />
            <div className="h-10 rounded-md bg-apple-gray" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "website") {
    return (
      <div className="rounded-lg border border-blue-100 bg-blue-50/60 p-4" aria-hidden="true">
        <div className="mx-auto max-w-[13rem]">
          <div className="rounded-md bg-white p-3 shadow-sm">
            <div className="h-3 w-24 rounded-full bg-slate-200" />
            <div className="mt-3 grid grid-cols-[0.7fr_1fr] gap-2">
              <div className="h-12 rounded bg-blue-100" />
              <div className="space-y-2">
                <div className="h-2 rounded-full bg-slate-200" />
                <div className="h-2 rounded-full bg-slate-200" />
                <div className="h-2 w-2/3 rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
          <div className="mx-auto h-5 w-px bg-apple-blue" />
          <div className="grid grid-cols-3 gap-2">
            {["サービス", "実績", "問い合わせ"].map((label) => (
              <div className="rounded-md bg-white p-2 text-center text-[10px] font-semibold text-apple-text shadow-sm" key={label}>
                <div className="mx-auto mb-2 h-5 w-5 rounded bg-blue-100" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-emerald-100 bg-emerald-50/70 p-4" aria-hidden="true">
      <div className="grid gap-4 md:grid-cols-[0.75fr_1fr] md:items-center">
        <ol className="space-y-2 text-xs font-semibold text-apple-text">
          {["課題を伝える", "強みを見せる", "実績で安心", "相談へ案内"].map((label, index) => (
            <li className="flex items-center gap-2" key={label}>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[11px] text-white">{index + 1}</span>
              {label}
            </li>
          ))}
        </ol>
        <div className="rounded-md bg-white p-3 shadow-sm">
          <div className="h-3 w-28 rounded-full bg-slate-900" />
          <div className="mt-3 space-y-2">
            <div className="h-8 rounded bg-apple-gray" />
            <div className="h-8 rounded bg-apple-gray" />
            <div className="h-8 rounded bg-blue-50" />
          </div>
          <div className="mt-3 h-7 rounded-full bg-emerald-600" />
        </div>
      </div>
    </div>
  );
}

function WebsitePageChoiceDiagram() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center" aria-hidden="true">
      <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-center">
        <p className="text-sm font-semibold text-apple-text">情報を広く伝えたい</p>
        <div className="mx-auto mt-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-apple-blue shadow-sm">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16" />
            <path d="M7 10h4v4H7z" />
            <path d="M13 10h4v4h-4z" />
            <path d="M9 14v4" />
            <path d="M15 14v4" />
            <path d="M6 18h12" />
          </svg>
        </div>
        <p className="mt-3 font-semibold text-apple-blue">ホームページ・Webサイト</p>
      </div>
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-apple-gray text-sm font-semibold text-apple-text">または</div>
      <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4 text-center">
        <p className="text-sm font-semibold text-apple-text">特定のサービスに絞りたい</p>
        <div className="mx-auto mt-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-emerald-600 shadow-sm">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M7 3h10v18H7z" />
            <path d="M10 7h4" />
            <path d="M10 11h4" />
            <path d="M10 15h2" />
          </svg>
        </div>
        <p className="mt-3 font-semibold text-emerald-700">LP制作</p>
      </div>
    </div>
  );
}

function LandingPageStrategySection() {
  const visitorTypes = [
    {
      title: "すぐ相談したい人向け",
      description: "料金、実績、流れ、よくある質問など、不安を減らす情報を整理します。"
    },
    {
      title: "まず情報を集めたい人向け",
      description: "選び方、比較ポイント、判断材料など、信頼につながる情報を整理します。"
    }
  ];
  const planningItems = ["誰に届けるか", "何を伝えるか", "どの順番で見せるか", "問い合わせへどう案内するか"];

  return (
    <section className="section-space">
      <div className="container-site">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Landing Page</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.22] [overflow-wrap:anywhere] md:text-5xl">届けたい相手に合わせてLPを設計します。</h2>
          <p className="lead mt-5">
            LPは、すぐ相談したい人向けなのか、まず情報を集めたい人向けなのかで必要な内容が変わります。
          </p>
          <p className="body-copy mt-4">
            制作前に目的と相手を整理し、問い合わせにつながりやすい構成にします。
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {visitorTypes.map((item) => (
            <div className="rounded-lg border border-apple-border bg-white p-6 shadow-sm" key={item.title}>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="body-copy mt-3">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-apple-gray p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <p className="eyebrow">Planning</p>
              <h3 className="mt-3 text-2xl font-semibold">目的に合わせて設計します。</h3>
              <p className="body-copy mt-3">
                必要な情報と見せる順番を、制作前に整理します。
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {planningItems.map((item) => (
                <div className="rounded-lg bg-white p-4 text-sm font-semibold shadow-sm" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
