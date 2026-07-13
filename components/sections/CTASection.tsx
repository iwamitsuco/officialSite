import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function CTASection({
  eyebrow = "無料相談",
  title = "Web・システム・Web広告・DXのご相談はこちら",
  description = "小さなご相談でも構いません。課題に合わせて最適な進め方をご提案します。"
}: CTASectionProps) {
  return (
    <section className="bg-apple-gray py-16 md:py-20">
      <div className="container-site">
        <div className="rounded-lg bg-white p-6 text-center shadow-soft md:p-12">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.22] md:text-[40px]">
            {title}
          </h2>
          <p className="lead mx-auto mt-5 max-w-2xl">
            {description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={siteConfig.telLink}>電話で相談する</Button>
            <Button href="/contact" variant="secondary">
              メールで問い合わせる
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
