import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("web-advertising");

export const metadata = createMetadata({
  title: "Web広告",
  description: "Google、Yahoo、Instagram、Meta、LINE広告の開始と改善を支援します。",
  path: "/services/web-advertising"
});

export default function WebAdvertisingPage() {
  if (!service) return null;
  return <ServiceDetailPage service={service} />;
}
