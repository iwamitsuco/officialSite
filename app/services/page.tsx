import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "サービス一覧",
  description: "システム開発、ホームページ制作、制作・デザイン、企業DX、Web広告をまとめて相談できます。",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "サービス", href: "/services" }]} />
      <section className="section-space">
        <div className="container-site">
          <SectionTitle label="Services" title="事業に必要なデジタル支援を一つに。" description="課題に合わせて、Web・システム・広告・DXを組み合わせて提案します。" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
        </div>
      </section>
      <ServiceCombinationSection />
      <CTASection />
    </>
  );
}

function ServiceCombinationSection() {
  const combinations = [
    {
      title: "サイトを作って集客したい",
      services: [
        { label: "ホームページ制作", href: "/services/website" },
        { label: "Web広告", href: "/services/web-advertising" }
      ]
    },
    {
      title: "広告用の画像も作りたい",
      services: [
        { label: "Web広告", href: "/services/web-advertising" },
        { label: "制作・デザイン", href: "/services/design" }
      ]
    },
    {
      title: "Excel業務をもっと便利にしたい",
      services: [
        { label: "企業DX", href: "/services/dx" },
        { label: "システム開発", href: "/services/system-development" }
      ]
    }
  ];

  return (
    <section className="section-space bg-apple-gray">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-apple-text md:text-[40px]">どのサービスを選べばよいか分からない方へ</h2>
          <p className="lead mt-5">
            ご相談内容が複数のサービスにまたがっていても問題ありません。現在の課題を伺い、必要な支援と進める順番を整理します。
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {combinations.map((item) => (
            <div className="rounded-lg bg-white p-6 shadow-sm" key={item.title}>
              <h3 className="text-xl font-semibold text-apple-text">{item.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.services.map((service, index) => (
                  <span className="inline-flex items-center gap-2" key={service.href}>
                    {index > 0 ? <span className="text-apple-sub">＋</span> : null}
                    <Link
                      className="rounded-full border border-apple-border px-4 py-2 text-sm font-semibold text-apple-text transition hover:border-apple-blue hover:text-apple-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
                      href={service.href}
                    >
                      {service.label}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-apple-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-apple-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
            href="/contact"
          >
            サービスを決めずに相談する
          </Link>
        </div>
      </div>
    </section>
  );
}
