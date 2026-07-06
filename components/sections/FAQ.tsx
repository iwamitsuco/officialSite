import type { FAQItem } from "@/types";

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <div className="divide-y divide-apple-border rounded-lg border border-apple-border bg-white">
      {items.map((item) => (
        <details className="group p-6" key={item.question}>
          <summary className="cursor-pointer list-none text-lg font-semibold text-apple-text">
            {item.question}
          </summary>
          <p className="lead mt-4">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
