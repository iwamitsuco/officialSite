"use client";

import type { FormEvent } from "react";

type EmailFieldProps = {
  label?: string;
  name?: string;
  maxLength?: number;
  required?: boolean;
};

const emailPattern = "[A-Za-z0-9.!#$%&'*+/=?^_`{|}~@-]+";
const emailInvalidMessage = "メールアドレスは半角英数字と記号で入力してください。";

export function EmailField({ label = "メールアドレス", name = "email", maxLength, required = false }: EmailFieldProps) {
  function handleInput(event: FormEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const normalizedValue = input.value.normalize("NFKC");

    if (input.value !== normalizedValue) {
      input.value = normalizedValue;
    }

    const hasInvalidCharacters = /[^A-Za-z0-9.!#$%&'*+/=?^_`{|}~@-]/.test(input.value);
    input.setCustomValidity(hasInvalidCharacters ? emailInvalidMessage : "");
  }

  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input
        autoComplete="email"
        className="min-h-12 rounded-lg border border-apple-border px-4 text-base font-normal"
        inputMode="email"
        maxLength={maxLength}
        name={name}
        onInput={handleInput}
        pattern={emailPattern}
        required={required}
        title={emailInvalidMessage}
        type="email"
      />
    </label>
  );
}
