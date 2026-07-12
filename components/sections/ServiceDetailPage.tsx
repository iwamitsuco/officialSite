import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WebAdTypesSection } from "@/components/sections/WebAdTypesSection";
import { breadcrumbJsonLd, faqJsonLd, SEOJsonLd, serviceJsonLd } from "@/lib/jsonld";
import type { Service } from "@/types";

type ServiceDetailPageProps = {
  service: Service;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
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
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-[56px]">{service.hero}</h1>
            <p className="lead mt-6">{service.description}</p>
          </div>
        </div>
      </section>
      {service.slug === "web-advertising" ? <WebAdTypesSection /> : null}
      {service.slug === "website" ? <LandingPageStrategySection /> : null}
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
      <section className="section-space">
        <div className="container-site max-w-4xl">
          <SectionTitle title="よくある質問" align="center" />
          <div className="mt-10">
            <FAQ items={service.faq} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
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
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">届けたい相手を整理して、伝わりやすいLPを設計します。</h2>
          <p className="lead mt-5">
            LPを見る人には、すぐに相談したい方もいれば、まず情報を集めたい方もいます。制作前のヒアリングで「誰に届けたいLPなのか」を整理し、その相手に合わせて構成・文章・問い合わせ導線を設計します。
          </p>
          <p className="mt-4 text-base leading-7 text-apple-sub">
            狙う相手を決めてから作ることで、読み進めやすく、問い合わせにつながりやすいページに整えます。
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {visitorTypes.map((item) => (
            <div className="rounded-lg border border-apple-border bg-white p-6 shadow-sm" key={item.title}>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-apple-sub">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-apple-gray p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <p className="eyebrow">Planning</p>
              <h3 className="mt-3 text-2xl font-semibold">目的に合わせて設計します。</h3>
              <p className="mt-3 leading-7 text-apple-sub">
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
          <p className="mt-3 leading-7 text-apple-sub">
            Web広告を出す場合は、LPの内容に合わせて広告文や配信内容を整理します。Web広告を出さない場合でも、SNS・検索・紹介など、想定される流入元を確認しながら使いやすいページに整えます。
          </p>
        </div>
      </div>
    </section>
  );
}
