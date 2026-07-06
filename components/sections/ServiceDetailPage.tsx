import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
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
