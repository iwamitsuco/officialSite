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
        </div>
      </section>
      {service.slug === "web-advertising" ? <WebAdTypesSection /> : null}
      {isWebsite ? <WebsiteStrengthSection /> : null}
      {service.slug === "website" ? <LandingPageStrategySection /> : null}
      {service.slug === "website" ? <WebsiteSearchIntentSection /> : null}
      {isWebsite ? <WebsiteMidCta variant="compact" /> : null}
      <ServiceSupportLinks serviceSlug={service.slug} />
      {isWebsite ? (
        <WebsiteFeatureSection />
      ) : (
        <section className="section-space bg-apple-gray">
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
        <>
          <WebsiteProblemSolutionSection />
          <WebsiteMidCta variant="card" />
        </>
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

const websiteProblemPairs = [
  { problem: "サイトが古い", solution: "デザイン、構成、スマートフォン対応を見直します。" },
  { problem: "スマホで見づらい", solution: "スマートフォンを優先したレスポンシブ設計に改善します。" },
  { problem: "問い合わせが増えない", solution: "CTA、フォーム、ページ内の導線を整理します。" },
  { problem: "何を載せればよいか分からない", solution: "事業内容と目的を整理し、必要な情報をご提案します。" }
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
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-apple-blue" aria-hidden="true">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 5h14v14H5z" />
                  <path d="M8 9h8" />
                  <path d="M8 13h5" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-apple-text">{item.title}</h3>
              <p className="card-copy mt-3">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebsiteProblemSolutionSection() {
  return (
    <section className="section-space">
      <div className="container-site">
        <SectionTitle title="よくある課題と解決できること" align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {websiteProblemPairs.map((item) => (
            <article className="rounded-lg border border-apple-border bg-white p-5 shadow-sm" key={item.problem}>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto_1.3fr] sm:items-center">
                <div className="rounded-lg bg-apple-gray p-4 font-semibold text-apple-text">{item.problem}</div>
                <div className="text-center text-apple-blue" aria-hidden="true">
                  <span className="hidden sm:inline">→</span>
                  <span className="sm:hidden">↓</span>
                </div>
                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-[15px] font-semibold leading-[1.75] text-apple-text md:text-base">
                  {item.solution}
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
              無料相談する
            </Link>
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-apple-border bg-white px-5 py-2.5 text-sm font-semibold text-apple-text transition hover:border-apple-blue hover:text-apple-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
              href="/contact"
            >
              メールで問い合わせる
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
      title: "ホームページ作成",
      description: "会社やサービスの情報を整理し、信頼感と問い合わせ導線を整えるページ制作です。"
    },
    {
      title: "Webサイト作成・Webページ作成",
      description: "呼び方は違っても、事業内容や強みを分かりやすく伝えるという目的は共通しています。"
    },
    {
      title: "LP制作",
      description: "ひとつの商品・サービス・キャンペーンに絞り、問い合わせや申し込みにつなげるページです。"
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
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Website Planning</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.22] [overflow-wrap:anywhere] md:text-5xl">
            ホームページ作成を中心に、目的に合うページ構成を整理します。
          </h2>
          <p className="lead mt-5">
            「ホームページ作成」「Webサイト作成」「Webページ作成」など、探し方の言葉は違っても、必要なのは事業内容が伝わり、問い合わせにつながるページです。
            会社サイト、サービスページ、LPなど、目的に合わせて必要な形を整理します。
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {comparisonItems.map((item) => (
            <article className="rounded-lg bg-white p-6 shadow-sm" key={item.title}>
              <h3 className="text-xl font-semibold text-apple-text">{item.title}</h3>
              <p className="card-copy mt-3">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-white p-6 shadow-sm md:p-8">
          <h3 className="text-2xl font-semibold text-apple-text">LP制作会社・HP制作会社を比較している方へ</h3>
          <p className="body-copy mt-4">
            LPは特定の商品やサービスへの問い合わせを増やしたい場合に向いています。HPや会社サイトは、会社概要、サービス内容、実績、お知らせなどをまとめて信頼感を伝える役割があります。
            どちらが必要か決まっていない段階でも、目的・流入元・伝えたい内容を確認しながら、必要なページを整理します。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
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

function LandingPageStrategySection() {
  const visitorTypes = [
    {
      title: "すぐに検討している方向け",
      description: "料金、実績、制作の流れ、よくある質問など、不安を減らして問い合わせにつなげる情報を整理します。"
    },
    {
      title: "まだ情報収集中の方向け",
      description: "課題の整理、選び方、比較ポイントなど、信頼につながる情報を分かりやすく伝えます。"
    }
  ];
  const planningItems = ["誰に届けるかを整理", "伝える順番を設計", "文章と見出しを作成", "問い合わせまでの導線を整理", "公開後の改善も相談可能"];

  return (
    <section className="section-space">
      <div className="container-site">
        <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Landing Page</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.22] [overflow-wrap:anywhere] md:text-5xl">届けたい相手を整理して、伝わりやすいLPを設計します。</h2>
            <p className="lead mt-5">
              LPを見る人の検討状況はさまざまです。制作前のヒアリングで、誰に何を届けるページなのかを整理します。目的と相手を明確にしたうえで、文章、構成、問い合わせ導線を設計します。
            </p>
          <p className="body-copy mt-4">
            狙う相手を決めてから作ることで、読み進めやすく、問い合わせにつながりやすいページに整えます。
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
                LPを作る目的、届けたい相手、想定される流入元を確認しながら、必要な情報と見せる順番を整理します。
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

        <div className="mt-8 rounded-lg border border-apple-border p-6 md:p-8">
          <h3 className="text-2xl font-semibold">Web広告を使う場合も、LPに合わせて設計できます。</h3>
          <p className="body-copy mt-3">
            Web広告を出す場合は、LPの内容に合わせて広告文や配信内容を整理します。Web広告を出さない場合でも、SNS・検索・紹介など、想定される流入元を確認しながら使いやすいページに整えます。
          </p>
        </div>
      </div>
    </section>
  );
}
