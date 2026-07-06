import Link from "next/link";
import type { Service } from "@/types";

type ServiceCardProps = {
  service: Service;
};

const iconPaths: Record<string, string> = {
  "system-development": "M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16h-11A2.5 2.5 0 0 1 4 13.5v-8ZM9 21h6M12 16v5M9 8l-2 2 2 2M15 8l2 2-2 2",
  website: "M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11ZM4 9h16M8 7h.01M11 7h.01M8 13h8M8 16h5",
  design: "M4 20l4.5-1 9.8-9.8a2.1 2.1 0 0 0-3-3L5.5 16 4 20ZM13.8 7.2l3 3M4 20h16M6 4h5",
  dx: "M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM10 5h4M7 8v8M17 8v8M10 19h4",
  "web-advertising": "M4 13v-2l11-5v12L4 13ZM4 11H2v2h2M15 9h2.5a2.5 2.5 0 0 1 0 5H15M7 14l2 5h3l-2.5-4.2"
};

function ServiceIcon({ slug }: { slug: string }) {
  return (
    <span className="flex size-12 items-center justify-center rounded-lg bg-apple-gray text-apple-blue" aria-hidden="true">
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d={iconPaths[slug] ?? iconPaths.website} />
      </svg>
    </span>
  );
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link className="subtle-card block" href={`/services/${service.slug}`}>
      <div className="flex items-center gap-4">
        <ServiceIcon slug={service.slug} />
        <p className="eyebrow">{service.shortTitle}</p>
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-normal text-apple-text md:text-[28px]">
        {service.title}
      </h3>
      <p className="lead mt-4">{service.description}</p>
      <span className="mt-8 inline-flex text-sm font-semibold text-apple-blue">詳しく見る</span>
    </Link>
  );
}
