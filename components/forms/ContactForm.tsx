"use client";

import { FormEvent, useEffect, useState } from "react";
import { EmailField } from "@/components/forms/EmailField";

const inquiryTypes = ["システム開発", "ホームページ制作", "制作・デザイン", "企業DX", "Web広告", "その他"];
const categoryToInquiryType: Record<string, string> = {
  website: "ホームページ制作",
  system: "システム開発",
  ads: "Web広告",
  dx: "企業DX",
  flow: "その他",
  other: "その他"
};
const fieldLimits = {
  company: 100,
  name: 50,
  furigana: 50,
  email: 254,
  tel: 20,
  message: 5000
} as const;

const furiganaPattern = /^[ァ-ヶー\s　]+$/;

function toKatakana(value: string) {
  return value
    .normalize("NFKC")
    .replace(/[ぁ-ゖ]/g, (character) => String.fromCharCode(character.charCodeAt(0) + 0x60));
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
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

    const requiredFieldErrors: Record<string, string> = {};
    if (!name) {
      requiredFieldErrors.name = "お名前を入力してください。";
    }
    if (!furigana) {
      requiredFieldErrors.furigana = "フリガナを入力してください。";
    }
    if (!email) {
      requiredFieldErrors.email = "メールアドレスを入力してください。";
    }
    if (!message) {
      requiredFieldErrors.message = "お問い合わせ内容を入力してください。";
    }

    if (Object.keys(requiredFieldErrors).length > 0) {
      setFieldErrors(requiredFieldErrors);
      setFormErrors(Object.values(requiredFieldErrors));
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
      setFieldErrors({});
      setFormErrors(["入力文字数が上限を超えています。各項目の文字数を確認してください。"]);
      return;
    }

    if (!furiganaPattern.test(furigana)) {
      setFieldErrors({ furigana: "フリガナはカタカナで入力してください。" });
      setFormErrors(["フリガナはカタカナで入力してください。"]);
      return;
    }

    if (/[^A-Za-z0-9.!#$%&'*+/=?^_`{|}~@-]/.test(email)) {
      setFieldErrors({ email: "メールアドレスは半角英数字と記号で入力してください。" });
      setFormErrors(["メールアドレスは半角英数字と記号で入力してください。"]);
      return;
    }

    if (!/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/.test(email)) {
      setFieldErrors({ email: "正しいメールアドレス形式で入力してください。" });
      setFormErrors(["正しいメールアドレス形式で入力してください。"]);
      return;
    }

    if (!agreed) {
      setFieldErrors({});
      setFormErrors(["個人情報の取り扱いに同意してください。"]);
      return;
    }

    setFormErrors([]);
    setFieldErrors({});
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
      <Field label="会社名" name="company" maxLength={fieldLimits.company} />
      <Field label="お名前（必須）" name="name" maxLength={fieldLimits.name} required error={fieldErrors.name} />
      <FuriganaField error={fieldErrors.furigana} />
      <EmailField label="メールアドレス（必須）" maxLength={fieldLimits.email} required error={fieldErrors.email} />
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
        <textarea
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          aria-invalid={fieldErrors.message ? "true" : undefined}
          className={`min-h-36 rounded-lg border px-4 py-3 text-base font-normal ${
            fieldErrors.message ? "border-red-300 bg-red-50/40" : "border-apple-border"
          }`}
          maxLength={fieldLimits.message}
          name="message"
          required
        />
        {fieldErrors.message ? (
          <span className="text-xs font-semibold text-red-600" id="message-error">
            {fieldErrors.message}
          </span>
        ) : null}
      </label>
      <label className="flex gap-3 text-sm text-apple-sub">
        <input className="mt-1 h-5 w-5" name="privacy" type="checkbox" required />
        個人情報の取り扱いに同意します
      </label>
      {formErrors.length > 0 ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">
          <p>入力内容をご確認ください。</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {formErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <button className="min-h-12 rounded-full bg-apple-blue px-6 font-semibold text-white hover:bg-apple-hover" type="submit">
        送信する
      </button>
    </form>
  );
}

function FuriganaField({ error }: { error?: string }) {
  const [value, setValue] = useState("");
  const [isComposing, setIsComposing] = useState(false);

  return (
    <label className="grid gap-2 text-sm font-semibold">
      フリガナ（必須）
      <input
        aria-describedby={error ? "furigana-error" : undefined}
        aria-invalid={error ? "true" : undefined}
        className={`min-h-12 rounded-lg border px-4 text-base font-normal ${
          error ? "border-red-300 bg-red-50/40" : "border-apple-border"
        }`}
        maxLength={fieldLimits.furigana}
        name="furigana"
        onBlur={() => setValue((current) => toKatakana(current))}
        onChange={(event) => {
          const nextValue = event.currentTarget.value;
          setValue(isComposing ? nextValue : toKatakana(nextValue));
        }}
        onCompositionEnd={(event) => {
          setIsComposing(false);
          setValue(toKatakana(event.currentTarget.value));
        }}
        onCompositionStart={() => setIsComposing(true)}
        required
        type="text"
        value={value}
      />
      {error ? (
        <span className="text-xs font-semibold text-red-600" id="furigana-error">
          {error}
        </span>
      ) : null}
    </label>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  maxLength?: number;
  required?: boolean;
  pattern?: string;
  error?: string;
};

function Field({ label, name, type = "text", maxLength, required = false, pattern, error }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={error ? "true" : undefined}
        className={`min-h-12 rounded-lg border px-4 text-base font-normal ${
          error ? "border-red-300 bg-red-50/40" : "border-apple-border"
        }`}
        maxLength={maxLength}
        name={name}
        pattern={pattern}
        required={required}
        type={type}
      />
      {error ? (
        <span className="text-xs font-semibold text-red-600" id={`${name}-error`}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
