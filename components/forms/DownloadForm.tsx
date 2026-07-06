"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { EmailField } from "@/components/forms/EmailField";
import { services } from "@/data/services";

export function DownloadForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-apple-border bg-white p-8 shadow-sm">
        <p className="text-2xl font-semibold">資料をご用意しました</p>
        <p className="lead mt-4">下記より仮資料をダウンロードできます。</p>
        <div className="mt-6">
          <Button href="/documents/service-guide.pdf">資料を開く</Button>
        </div>
      </div>
    );
  }

  return (
    <form className="grid gap-5 rounded-lg border border-apple-border bg-white p-6 shadow-sm md:p-10" onSubmit={handleSubmit}>
      <Field label="会社名" name="company" required />
      <Field label="お名前" name="name" required />
      <EmailField required />
      <Field label="電話番号" name="tel" type="tel" pattern="^[0-9\\-+()\\s]+$" />
      <label className="grid gap-2 text-sm font-semibold">
        興味のあるサービス
        <select className="min-h-12 rounded-lg border border-apple-border px-4 text-base font-normal" name="service" required>
          <option value="">選択してください</option>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
        </select>
      </label>
      <label className="flex gap-3 text-sm text-apple-sub">
        <input className="mt-1 h-5 w-5" type="checkbox" required />
        個人情報の取り扱いに同意します
      </label>
      <button className="min-h-12 rounded-full bg-apple-blue px-6 font-semibold text-white hover:bg-apple-hover" type="submit">
        資料を受け取る
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  pattern?: string;
};

function Field({ label, name, type = "text", required = false, pattern }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input
        className="min-h-12 rounded-lg border border-apple-border px-4 text-base font-normal"
        name={name}
        pattern={pattern}
        required={required}
        type={type}
      />
    </label>
  );
}
