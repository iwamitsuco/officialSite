import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

export function Button({ href, children, variant = "primary", className = "", ...props }: ButtonProps) {
  if (href === "/download") {
    return null;
  }

  const base = "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary: "bg-apple-blue text-white hover:bg-apple-hover focus-visible:outline-apple-blue",
    secondary: "border border-apple-border bg-white text-apple-text hover:border-apple-blue hover:text-apple-blue focus-visible:outline-apple-blue",
    dark: "bg-apple-text text-white hover:bg-black focus-visible:outline-apple-text"
  };

  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a className={`${base} ${variants[variant]} ${className}`} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={`${base} ${variants[variant]} ${className}`} href={href} {...props}>
      {children}
    </Link>
  );
}
