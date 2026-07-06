import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("dx");

export const metadata = createMetadata({
  title: "企業DX",
  description: "生成AI、簡易ツール、Excel改善で日々の作業を軽くします。",
  path: "/services/dx"
});

export default function DxPage() {
  if (!service) return null;
  return <ServiceDetailPage service={service} />;
}
