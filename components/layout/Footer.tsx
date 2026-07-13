import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-apple-border bg-white pb-24 pt-14 md:pb-12">
      <div className="container-site grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={siteConfig.logoImage}
              alt={siteConfig.logoAlt}
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 object-contain"
            />
            <p className="text-xl font-semibold">{siteConfig.companyName}</p>
          </div>
          <p className="mt-4 text-sm leading-7 text-apple-sub">{siteConfig.address}</p>
          <p className="mt-2 text-sm text-apple-sub">
            <a className="hover:text-apple-blue" href={siteConfig.telLink}>
              {siteConfig.tel}
            </a>
          </p>
          <p className="mt-2 text-sm text-apple-sub">
            <a className="hover:text-apple-blue" href={siteConfig.emailLink}>
              {siteConfig.email}
            </a>
          </p>
          <div className="mt-6 flex gap-4 text-sm font-semibold">
            <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-apple-blue">
              Instagram
            </a>
            <a href={siteConfig.xUrl} target="_blank" rel="noopener noreferrer" className="hover:text-apple-blue">
              X
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-apple-text">サービス</p>
          <ul className="mt-4 grid gap-3 text-sm text-apple-sub">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="hover:text-apple-blue" href={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-apple-text">サイト</p>
          <ul className="mt-4 grid gap-3 text-sm text-apple-sub">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-apple-blue" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-apple-blue" href="/privacy">
                プライバシーポリシー
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-site mt-10 text-xs text-apple-sub">
        <p>&copy; 2026 {siteConfig.companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
