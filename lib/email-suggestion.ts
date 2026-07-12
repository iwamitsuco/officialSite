const commonEmailDomains = [
  "gmail.com",
  "yahoo.co.jp",
  "yahoo.com",
  "icloud.com",
  "outlook.com",
  "hotmail.com",
  "docomo.ne.jp",
  "ezweb.ne.jp",
  "au.com",
  "softbank.ne.jp",
  "i.softbank.jp"
];

const knownDomainTypos: Record<string, string> = {
  "gmai.com": "gmail.com",
  "gmial.com": "gmail.com",
  "gmail.con": "gmail.com",
  "gmail.co": "gmail.com",
  "gmailcom": "gmail.com",
  "yahoo.co.jo": "yahoo.co.jp",
  "yahoo.ne.jp": "yahoo.co.jp",
  "yaho.co.jp": "yahoo.co.jp",
  "icloud.con": "icloud.com",
  "outlook.con": "outlook.com",
  "hotmai.com": "hotmail.com",
  "hotmal.com": "hotmail.com"
};

function getEditDistance(left: string, right: string) {
  const distances = Array.from({ length: left.length + 1 }, (_, leftIndex) =>
    Array.from({ length: right.length + 1 }, (_, rightIndex) => (leftIndex === 0 ? rightIndex : rightIndex === 0 ? leftIndex : 0))
  );

  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      const cost = left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1;
      distances[leftIndex][rightIndex] = Math.min(
        distances[leftIndex - 1][rightIndex] + 1,
        distances[leftIndex][rightIndex - 1] + 1,
        distances[leftIndex - 1][rightIndex - 1] + cost
      );
    }
  }

  return distances[left.length][right.length];
}

export function getEmailDomainSuggestion(email: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const [localPart, domain] = normalizedEmail.split("@");

  if (!localPart || !domain || normalizedEmail.split("@").length !== 2) {
    return null;
  }

  const knownSuggestion = knownDomainTypos[domain];
  if (knownSuggestion) {
    return `${localPart}@${knownSuggestion}`;
  }

  if (commonEmailDomains.includes(domain)) {
    return null;
  }

  const nearestDomain = commonEmailDomains.find((commonDomain) => getEditDistance(domain, commonDomain) === 1);
  return nearestDomain ? `${localPart}@${nearestDomain}` : null;
}
