"use client";

import { FormEvent, useEffect, useState } from "react";
import { EmailField } from "@/components/forms/EmailField";

const inquiryTypes = ["システム開発", "ホームページ制作", "制作・デザイン", "企業DX", "Web広告", "その他"];
const categoryToInquiryType: Record<string, string> = {
  website: "ホームページ制作",
  system: "システム開発",
  ads: "Web広告",
  dx: "企業DX",
  flow: "その他"
};
const fieldLimits = {
  company: 100,
  name: 50,
  furigana: 50,
  email: 254,
  tel: 20,
  message: 5000
} as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedInquiryType, setSelectedInquiryType] = useState("");

  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get("category");
    if (!category) {
      return;
    }

    const inquiryType = categoryToInquiryType[category];
    if (inquiryType) {
      setSelectedInquiryType(inquiryType);
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const company = String(formData.get("company") ?? "").trim();
    const name = String(formData.get("name") ?? "").trim();
    const furigana = String(formData.get("furigana") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const tel = String(formData.get("tel") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const agreed = formData.get("privacy") === "on";

    if (!name || !furigana || !email || !message) {
      setErrorMessage("お名前、フリガナ、メールアドレス、お問い合わせ内容を入力してください。");
      return;
    }

    if (
      company.length > fieldLimits.company ||
      name.length > fieldLimits.name ||
      furigana.length > fieldLimits.furigana ||
      email.length > fieldLimits.email ||
      tel.length > fieldLimits.tel ||
      message.length > fieldLimits.message
    ) {
      setErrorMessage("入力文字数が上限を超えています。各項目の文字数を確認してください。");
      return;
    }

    if (/[^A-Za-z0-9.!#$%&'*+/=?^_`{|}~@-]/.test(email)) {
      setErrorMessage("メールアドレスは半角英数字と記号で入力してください。");
      return;
    }

    if (!/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/.test(email)) {
      setErrorMessage("正しいメールアドレス形式で入力してください。");
      return;
    }

    if (!agreed) {
      setErrorMessage("個人情報の取り扱いに同意してください。");
      return;
    }

    setErrorMessage("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-apple-border bg-white p-8 shadow-sm">
        <p className="text-2xl font-semibold">お問い合わせを受け付けました</p>
        <p className="lead mt-4">内容を確認し、担当者よりご連絡します。</p>
      </div>
    );
  }

  return (
    <form className="grid gap-5 rounded-lg border border-apple-border bg-white p-6 shadow-sm md:p-10" noValidate onSubmit={handleSubmit}>
      {errorMessage ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">
          {errorMessage}
        </div>
      ) : null}
      <Field label="会社名" name="company" maxLength={fieldLimits.company} />
      <Field label="お名前（必須）" name="name" maxLength={fieldLimits.name} required />
      <Field label="フリガナ（必須）" name="furigana" maxLength={fieldLimits.furigana} required />
      <EmailField label="メールアドレス（必須）" maxLength={fieldLimits.email} required />
      <Field label="電話番号" name="tel" type="tel" maxLength={fieldLimits.tel} pattern="^[0-9\\-+()\\s]+$" />
      <label className="grid gap-2 text-sm font-semibold">
        相談内容
        <select
          className="min-h-12 rounded-lg border border-apple-border px-4 text-base font-normal"
          name="type"
          onChange={(event) => setSelectedInquiryType(event.target.value)}
          required
          value={selectedInquiryType}
        >
          <option value="">選択してください</option>
          {inquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        お問い合わせ内容（必須）
        <textarea className="min-h-36 rounded-lg border border-apple-border px-4 py-3 text-base font-normal" maxLength={fieldLimits.message} name="message" required />
      </label>
      <label className="flex gap-3 text-sm text-apple-sub">
        <input className="mt-1 h-5 w-5" name="privacy" type="checkbox" required />
        個人情報の取り扱いに同意します
      </label>
      <button className="min-h-12 rounded-full bg-apple-blue px-6 font-semibold text-white hover:bg-apple-hover" type="submit">
        送信する
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  maxLength?: number;
  required?: boolean;
  pattern?: string;
};

function Field({ label, name, type = "text", maxLength, required = false, pattern }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input
        className="min-h-12 rounded-lg border border-apple-border px-4 text-base font-normal"
        maxLength={maxLength}
        name={name}
        pattern={pattern}
        required={required}
        type={type}
      />
    </label>
  );
}
