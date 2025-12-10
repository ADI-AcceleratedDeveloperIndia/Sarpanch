import { Metadata } from "next";
import { getData } from "@/lib/data";

export function generateMetadata(lang: "en" | "te" = "en"): Metadata {
  const data = getData();
  const langKey = lang === "te" ? "te" : "en";

  return {
    title: data.meta[`title_${langKey}`],
    description: data.meta[`description_${langKey}`],
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#6366f1",
    openGraph: {
      title: data.meta[`title_${langKey}`],
      description: data.meta[`description_${langKey}`],
      type: "website",
    },
  };
}


