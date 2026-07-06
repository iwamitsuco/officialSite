import Link from "next/link";
import type { Service } from "@/types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link className="subtle-card block" href={`/services/${service.slug}`}>
      <p className="eyebrow">{service.shortTitle}</p>
      <h3 className="mt-4 text-2xl font-semibold tracking-normal text-apple-text md:text-[28px]">
        {service.title}
      </h3>
      <p className="lead mt-4">{service.description}</p>
      <span className="mt-8 inline-flex text-sm font-semibold text-apple-blue">詳しく見る</span>
    </Link>
  );
}
