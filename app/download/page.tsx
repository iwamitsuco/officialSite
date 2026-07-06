import { DownloadForm } from "@/components/forms/DownloadForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "資料ダウンロード",
  description: "ホームページ制作、システム開発、Web広告、DX支援のサービス資料をダウンロードできます。",
  path: "/download"
});

export default function DownloadPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "資料ダウンロード", href: "/download" }]} />
      <section className="section-space bg-apple-gray">
        <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionTitle label="Download" title="サービス資料を受け取る" description="検討段階でもご利用ください。送信後に仮資料のダウンロードボタンを表示します。" />
          <DownloadForm />
        </div>
      </section>
    </>
  );
}
