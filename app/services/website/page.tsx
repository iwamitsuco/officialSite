import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("website");

export const metadata = createMetadata({
  title: "宮崎のホームページ制作・Webサイト制作",
  description:
    "宮崎を中心に、ホームページ作成、Webサイト制作、LP制作、ホームページリニューアルまで、問い合わせにつながる構成で制作します。",
  path: "/services/website"
});

export default function WebsitePage() {
  if (!service) return null;
  return <ServiceDetailPage service={service} />;
}
