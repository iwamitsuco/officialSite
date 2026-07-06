import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";
import { getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("system-development");

export const metadata = createMetadata({
  title: "システム開発",
  description: "業務に合わせたWebアプリ、デスクトップアプリ、管理システムを設計します。",
  path: "/services/system-development"
});

export default function SystemDevelopmentPage() {
  if (!service) return null;
  return <ServiceDetailPage service={service} />;
}
