import Link from "next/link";
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
  ["営業時間", siteConfig.businessHours]
];

const businessLinks = [
  { label: "システム開発", href: "/services/system-development" },
  { label: "ホームページ制作", href: "/services/website" },
  { label: "制作・デザイン", href: "/services/design" },
  { label: "企業DX", href: "/services/dx" },
  { label: "Web広告", href: "/services/web-advertising" }
];

export default function CompanyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "会社概要", href: "/company" }]} />
      <section className="section-space">
        <div className="container-site max-w-4xl">
          <SectionTitle label="Company" title="会社概要" description="事業に必要なデジタル活用を、分かりやすく実務に近い形で支援します。" align="center" headingLevel="h1" />
          <dl className="mt-12 divide-y divide-apple-border rounded-lg border border-apple-border bg-white">
            {rows.map(([label, value]) => (
              <div className="grid gap-2 p-6 md:grid-cols-[180px_1fr]" key={label}>
                <dt className="font-semibold text-apple-text">{label}</dt>
                <dd className="text-apple-sub">{value}</dd>
              </div>
            ))}
            <div className="grid gap-3 p-6 md:grid-cols-[180px_1fr]">
              <dt className="font-semibold text-apple-text">事業内容</dt>
              <dd>
                <div className="flex flex-wrap gap-2">
                  {businessLinks.map((link) => (
                    <Link
                      className="rounded-full border border-apple-border px-4 py-2 text-sm font-semibold text-apple-text transition hover:border-apple-blue hover:text-apple-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
                      href={link.href}
                      key={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Link className="mt-5 inline-flex text-sm font-semibold text-apple-blue underline-offset-4 hover:underline" href="/services">
                  BLOOMIAのサービスを見る
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <CTASection />
    </>
  );
}
