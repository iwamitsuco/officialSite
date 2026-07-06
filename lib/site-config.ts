export const siteConfig = {
  brandName: "BLOOMIA",
  companyName: "BLOOMIA合同会社",
  address: "〒880-0811 宮崎県宮崎市錦町1-8",
  tel: "0985-xx-xxxx",
  telLink: "tel:0985xxxxxxxx",
  email: "test@gmail.com",
  emailLink: "mailto:test@gmail.com",
  instagramUrl: "https://www.instagram.com/ryota_meta/",
  xUrl: "https://x.com/ryoe541513",
  siteUrl: "https://example.com",
  businessHours: "平日 9:00-18:00",
  siteName: "BLOOMIA合同会社",
  logoImage: "/images/bloomia-logo-mark.png",
  logoAlt: "BLOOMIA合同会社のロゴ",
  ogImage: "/ogp/ogp.png"
} as const;

export const navLinks = [
  { href: "/services", label: "サービス" },
  { href: "/company", label: "会社概要" },
  { href: "/blog", label: "ブログ" },
  { href: "/news", label: "お知らせ" }
] as const;
