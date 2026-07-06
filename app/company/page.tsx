import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "会社概要",
  description: "BLOOMIA合同会社の会社概要です。",
  path: "/company"
});

const rows = [
  ["会社名", siteConfig.companyName],
  ["住所", siteConfig.address],
  ["電話番号", siteConfig.tel],
  ["メールアドレス", siteConfig.email],
  ["営業時間", siteConfig.businessHours],
  ["事業内容", "システム開発、ホームページ制作、制作・デザイン、企業DX、Web広告"]
];

export default function CompanyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "会社概要", href: "/company" }]} />
      <section className="section-space">
        <div className="container-site max-w-4xl">
          <SectionTitle label="Company" title="会社概要" description="地域企業のデジタル活用を、分かりやすく実務に近い形で支援します。" align="center" />
          <dl className="mt-12 divide-y divide-apple-border rounded-lg border border-apple-border bg-white">
            {rows.map(([label, value]) => (
              <div className="grid gap-2 p-6 md:grid-cols-[180px_1fr]" key={label}>
                <dt className="font-semibold text-apple-text">{label}</dt>
                <dd className="text-apple-sub">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CTASection />
    </>
  );
}
