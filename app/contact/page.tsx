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
            <SectionTitle label="Contact" title="まずは無料でご相談ください。" description="内容が固まっていなくても大丈夫です。課題を伺い、進め方を整理します。" headingLevel="h1" />
            <div className="mt-8 rounded-lg bg-white p-6 text-sm leading-7 text-apple-sub">
              <p>電話: <a className="font-semibold text-apple-blue" href={siteConfig.telLink}>{siteConfig.tel}</a></p>
              <p>受付: {siteConfig.businessHours}</p>
              <p>メール: <a className="font-semibold text-apple-blue" href={siteConfig.emailLink}>{siteConfig.email}</a></p>
            </div>
          </div>
          <div>
            <div className="mb-6 rounded-lg bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-apple-text">ご相談前に</h2>
              <ul className="mt-4 grid gap-2 text-sm leading-7 text-apple-sub">
                <li>相談内容が決まっていなくても問題ありません。</li>
                <li>小さなご相談にも対応します。</li>
                <li>電話番号の入力は任意です。</li>
                <li>通常2営業日以内に返信します。</li>
              </ul>
            </div>
          <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
