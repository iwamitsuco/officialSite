export function normalizeText(value: string): string {
  return value.normalize("NFKC").toLowerCase().trim();
}
