import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("website");

export const metadata = createMetadata({
  title: "ホームページ作成・Webサイト作成",
  description:
    "ホームページ作成、Webサイト作成、Webページ作成、LP制作まで、目的に合わせて問い合わせにつながる構成で制作します。",
  path: "/services/website"
});

export default function WebsitePage() {
  if (!service) return null;
  return <ServiceDetailPage service={service} />;
}
