export type FAQItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  hero: string;
  features: string[];
  problems: string[];
  solutions: string[];
  flow: string[];
  faq: FAQItem[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  body: string[];
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  thumbnail: string;
  reading?: string;
};

export type NewsPost = {
  slug: string;
  title: string;
  description: string;
  body: string[];
  publishedAt: string;
};

export type SearchItem = {
  type: "blog" | "news" | "service";
  title: string;
  description: string;
  href: string;
  category: string;
  tags: string[];
  body: string;
  publishedAt?: string;
  reading?: string;
};
