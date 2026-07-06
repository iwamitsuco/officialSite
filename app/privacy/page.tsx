import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "プライバシーポリシー",
  description: "BLOOMIA合同会社のプライバシーポリシーです。",
  path: "/privacy"
});

const sections = [
  ["個人情報の利用目的", "お問い合わせ対応、資料送付、サービス案内のために利用します。"],
  ["個人情報の管理", "取得した情報は適切に管理し、不要になった情報は速やかに削除します。"],
  ["第三者提供", "法令に基づく場合を除き、本人の同意なく第三者に提供しません。"],
  ["お問い合わせ窓口", `${siteConfig.email} までご連絡ください。`]
];

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "プライバシーポリシー", href: "/privacy" }]} />
      <section className="section-space">
        <div className="container-site max-w-3xl">
          <SectionTitle label="Privacy" title="プライバシーポリシー" />
          <div className="mt-10 grid gap-8">
            {sections.map(([title, body]) => (
              <section key={title}>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="lead mt-3">{body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
