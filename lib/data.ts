import data from "@/data/somaram-pet.json";

export type VillageData = typeof data;

export function getData(): VillageData {
  return data;
}

export function getText(key: string, lang: "en" | "te" = "en"): string {
  const keys = key.split(".");
  let value: any = data;
  
  for (const k of keys) {
    if (value && typeof value === "object") {
      value = value[k];
    } else {
      return "";
    }
  }
  
  if (typeof value === "string") {
    return value;
  }
  
  if (typeof value === "object" && value !== null) {
    // First try the nested structure (e.g., { en: "...", te: "..." })
    const langKey = lang === "te" ? "te" : "en";
    if (value[langKey]) {
      return value[langKey];
    }
    if (value["en"]) {
      return value["en"];
    }
  }
  
  // If not found, try the _en/_te suffix pattern
  const langSuffix = lang === "te" ? "_te" : "_en";
  const keyWithSuffix = key + langSuffix;
  const keysWithSuffix = keyWithSuffix.split(".");
  let valueWithSuffix: any = data;
  
  for (const k of keysWithSuffix) {
    if (valueWithSuffix && typeof valueWithSuffix === "object") {
      valueWithSuffix = valueWithSuffix[k];
    } else {
      return "";
    }
  }
  
  if (typeof valueWithSuffix === "string") {
    return valueWithSuffix;
  }
  
  // Try the other language as fallback
  const fallbackSuffix = lang === "te" ? "_en" : "_te";
  const keyWithFallback = key + fallbackSuffix;
  const keysWithFallback = keyWithFallback.split(".");
  let valueWithFallback: any = data;
  
  for (const k of keysWithFallback) {
    if (valueWithFallback && typeof valueWithFallback === "object") {
      valueWithFallback = valueWithFallback[k];
    } else {
      return "";
    }
  }
  
  if (typeof valueWithFallback === "string") {
    return valueWithFallback;
  }
  
  return "";
}

export function getNestedText(
  obj: any,
  lang: "en" | "te" = "en"
): string {
  if (typeof obj === "string") {
    return obj;
  }
  if (typeof obj === "object" && obj !== null) {
    const langKey = lang === "te" ? "te" : "en";
    return obj[langKey] || obj["en"] || "";
  }
  return "";
}


