import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "お問い合わせ",
  description: "Web、システム、広告、DXに関するご相談を受け付けています。",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "お問い合わせ", href: "/contact" }]} />
      <section className="section-space bg-apple-gray">
        <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle label="Contact" title="まずは無料でご相談ください。" description="内容が固まっていなくても大丈夫です。課題を伺い、進め方を整理します。" />
            <div className="mt-8 rounded-lg bg-white p-6 text-sm leading-7 text-apple-sub">
              <p>電話: <a className="font-semibold text-apple-blue" href={siteConfig.telLink}>{siteConfig.tel}</a></p>
              <p>メール: <a className="font-semibold text-apple-blue" href={siteConfig.emailLink}>{siteConfig.email}</a></p>
              <p>受付: {siteConfig.businessHours}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
