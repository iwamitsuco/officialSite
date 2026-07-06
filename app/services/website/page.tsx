import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("website");

export const metadata = createMetadata({
  title: "ホームページ制作",
  description: "公式サイト、ブログ、ECサイト、LPまで、問い合わせにつながる構成で制作します。",
  path: "/services/website"
});

export default function WebsitePage() {
  if (!service) return null;
  return <ServiceDetailPage service={service} />;
}
