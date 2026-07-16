import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("web-advertising");

export const metadata = createMetadata({
  title: "Web広告",
  description: "広告の出し方、成果の見方、改善の進め方までサポートします。",
  path: "/services/web-advertising"
});

export default function WebAdvertisingPage() {
  if (!service) return null;
  return <ServiceDetailPage service={service} />;
}
