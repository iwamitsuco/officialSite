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
      <CTASection />
    </>
  );
}
