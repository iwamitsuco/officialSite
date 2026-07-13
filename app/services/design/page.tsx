import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("design");

export const metadata = createMetadata({
  title: "制作・デザイン",
  description: "チラシ、バナー、SNS画像など、Webと連動する制作物を整えます。",
  path: "/services/design"
});

export default function DesignPage() {
  if (!service) return null;
  return <ServiceDetailPage service={service} />;
}
