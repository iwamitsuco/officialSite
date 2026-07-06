import Link from "next/link";

type BreadcrumbProps = {
  items: Array<{ label: string; href: string }>;
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくず" className="container-site pt-8 text-sm text-apple-sub">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link className="hover:text-apple-blue" href="/">
            TOP
          </Link>
        </li>
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item.href}>
            <span aria-hidden="true">/</span>
            <Link className="hover:text-apple-blue" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
